// Parses CSV/JSON/XML/Excel uploads into a flat array of plain objects,
// then maps common source field names onto the businesses schema. Kept
// dependency-light: CSV is hand-rolled (quote-aware), XML uses
// fast-xml-parser, Excel uses xlsx (SheetJS) - both pure JS, no native
// bindings, safe for a serverless/edge-adjacent Node runtime.
import { XMLParser } from 'fast-xml-parser';
import * as XLSX from 'xlsx';

function parseCsvLine(line) {
  const fields = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (inQuotes) {
      if (char === '"' && line[i + 1] === '"') { current += '"'; i += 1; }
      else if (char === '"') { inQuotes = false; }
      else { current += char; }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ',') {
      fields.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  fields.push(current);
  return fields;
}

export function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter((line) => line.trim().length > 0);
  if (lines.length === 0) return [];
  const headers = parseCsvLine(lines[0]).map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    return Object.fromEntries(headers.map((header, index) => [header, values[index]?.trim() ?? '']));
  });
}

export function parseJSONRecords(text) {
  const data = JSON.parse(text);
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.items)) return data.items;
  if (Array.isArray(data.businesses)) return data.businesses;
  if (Array.isArray(data.records)) return data.records;
  return [data];
}

export function parseXMLRecords(text) {
  const parser = new XMLParser({ ignoreAttributes: false });
  const data = parser.parse(text);
  const root = data.businesses || data.items || data.root || data;
  const candidateKeys = Object.keys(root).filter((key) => typeof root[key] === 'object');
  for (const key of candidateKeys) {
    const value = root[key];
    if (Array.isArray(value)) return value;
    if (typeof value === 'object') {
      const nestedArrayKey = Object.keys(value).find((k) => Array.isArray(value[k]));
      if (nestedArrayKey) return value[nestedArrayKey];
      return [value];
    }
  }
  return Array.isArray(root) ? root : [root];
}

export function parseExcelRecords(arrayBuffer) {
  const workbook = XLSX.read(arrayBuffer, { type: 'array' });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet, { defaultValue: '' });
}

const FIELD_ALIASES = {
  name: ['name', 'business_name', 'company', 'company_name', 'title'],
  description: ['description', 'about', 'summary'],
  website: ['website', 'url', 'site', 'web'],
  phone: ['phone', 'phone_number', 'telephone'],
  email: ['email', 'contact_email'],
  address: ['address', 'street', 'street_address'],
  city: ['city', 'town'],
  state: ['state', 'region', 'province'],
  country: ['country'],
  category: ['category', 'category_name', 'type']
};

export function mapRecordToBusiness(record) {
  const normalizedKeys = Object.keys(record).reduce((acc, key) => {
    acc[key.toLowerCase().trim().replace(/\s+/g, '_')] = record[key];
    return acc;
  }, {});

  const mapped = {};
  for (const [target, aliases] of Object.entries(FIELD_ALIASES)) {
    for (const alias of aliases) {
      if (normalizedKeys[alias] !== undefined && normalizedKeys[alias] !== '') {
        mapped[target] = String(normalizedKeys[alias]).trim();
        break;
      }
    }
  }
  return mapped;
}

export function detectFileType(fileName) {
  const ext = fileName.split('.').pop().toLowerCase();
  if (ext === 'csv') return 'csv';
  if (ext === 'json') return 'json';
  if (ext === 'xml') return 'xml';
  if (ext === 'xlsx' || ext === 'xls') return 'excel';
  return null;
}
