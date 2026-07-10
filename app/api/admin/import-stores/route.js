import { NextResponse } from 'next/server';
import { getAdminSession } from '../../../../lib/adminAuth';
import { getSupabaseAdminClient } from '../../../../lib/supabase/admin';

const COLUMNS = ['name', 'slug', 'category', 'logo', 'website', 'affiliate_link', 'description'];

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) {
    return [];
  }

  const header = lines[0].split(',').map((value) => value.trim());
  return lines.slice(1).map((line) => {
    const values = line.split(',').map((value) => value.trim());
    const row = {};
    header.forEach((key, index) => {
      if (COLUMNS.includes(key)) {
        row[key] = values[index] ?? '';
      }
    });
    return row;
  });
}

export async function POST(request) {
  const { isAdmin } = await getAdminSession();
  if (!isAdmin) {
    return NextResponse.json({ error: 'Admin access required.' }, { status: 403 });
  }

  const { csv } = await request.json().catch(() => ({}));
  if (typeof csv !== 'string' || !csv.trim()) {
    return NextResponse.json({ error: 'Provide CSV text with a header row: name,slug,category,logo,website,affiliate_link,description' }, { status: 400 });
  }

  const rows = parseCsv(csv).filter((row) => row.name && row.slug && row.category);
  if (rows.length === 0) {
    return NextResponse.json({ error: 'No valid rows found. Required columns: name, slug, category.' }, { status: 400 });
  }

  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from('stores').upsert(rows, { onConflict: 'slug' });

  if (error) {
    return NextResponse.json({ error: 'Import failed. Please check the CSV format.' }, { status: 500 });
  }

  return NextResponse.json({ success: true, imported: rows.length });
}
