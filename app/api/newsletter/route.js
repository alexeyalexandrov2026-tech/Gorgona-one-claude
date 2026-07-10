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

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ error: 'Newsletter service is not configured yet.' }, { status: 503 });
  }

  const { error } = await supabase.from('newsletter_subscribers').upsert({ email }, { onConflict: 'email' });

  if (error) {
    return NextResponse.json({ error: 'Unable to save your subscription. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
