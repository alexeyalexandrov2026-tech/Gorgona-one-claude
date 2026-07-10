import { NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '../../../lib/supabase/admin';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const companyName = typeof body.companyName === 'string' ? body.companyName.trim() : '';
  const website = typeof body.website === 'string' ? body.website.trim() : '';
  const contactEmail = typeof body.contactEmail === 'string' ? body.contactEmail.trim().toLowerCase() : '';
  const category = typeof body.category === 'string' ? body.category.trim() : '';

  if (!companyName || !EMAIL_PATTERN.test(contactEmail)) {
    return NextResponse.json({ error: 'Company name and a valid contact email are required.' }, { status: 400 });
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ error: 'Partner applications are not configured yet.' }, { status: 503 });
  }

  const { error } = await supabase.from('partner_applications').insert({
    company_name: companyName,
    website,
    contact_email: contactEmail,
    category,
  });

  if (error) {
    return NextResponse.json({ error: 'Unable to submit your application. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
