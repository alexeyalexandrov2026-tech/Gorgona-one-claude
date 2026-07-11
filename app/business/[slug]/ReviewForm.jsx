"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../components/AuthProvider';
import { getSupabaseClient } from '../../../lib/supabaseClient';

export function ReviewForm({ businessId }) {
  const auth = useAuth();
  const router = useRouter();
  const supabase = getSupabaseClient();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!auth?.session) {
    return <p className="mt-6 text-sm text-zinc-400">Sign in to leave a review.</p>;
  }

  async function submit(event) {
    event.preventDefault();
    setSubmitting(true);
    setMessage('');
    const { error } = await supabase.from('reviews').insert({
      business_id: businessId,
      owner_id: auth.session.id,
      rating: Number(rating),
      comment: comment.trim() || null
    });
    setSubmitting(false);
    if (error) { setMessage(error.message); return; }
    setComment('');
    setMessage('Review submitted.');
    router.refresh();
  }

  return (
    <form onSubmit={submit} className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-black/40 p-5">
      <p className="text-sm text-zinc-300">Leave a review</p>
      <select value={rating} onChange={(e) => setRating(e.target.value)} className="rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-white outline-none">
        {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} star{n > 1 ? 's' : ''}</option>)}
      </select>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Share your experience" rows={3} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
      {message && <p className="text-sm text-brand-gold">{message}</p>}
      <button type="submit" disabled={submitting} className="rounded-full bg-brand-gold px-5 py-2 font-medium text-black disabled:opacity-60">
        {submitting ? 'Submitting...' : 'Submit review'}
      </button>
    </form>
  );
}
