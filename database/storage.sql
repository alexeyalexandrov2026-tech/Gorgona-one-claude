-- Run after schema.sql. Creates the public storage bucket used for
-- business logos, banners, and gallery photos (see app/dashboard/page.js).
insert into storage.buckets (id, name, public)
values ('business-media', 'business-media', true)
on conflict (id) do nothing;

drop policy if exists "Public read business media" on storage.objects;
create policy "Public read business media" on storage.objects for select
  using (bucket_id = 'business-media');

drop policy if exists "Owners upload business media" on storage.objects;
create policy "Owners upload business media" on storage.objects for insert
  with check (bucket_id = 'business-media' and auth.uid()::text = (storage.foldername(name))[1]);

drop policy if exists "Owners update business media" on storage.objects;
create policy "Owners update business media" on storage.objects for update
  using (bucket_id = 'business-media' and auth.uid()::text = (storage.foldername(name))[1]);

drop policy if exists "Owners delete business media" on storage.objects;
create policy "Owners delete business media" on storage.objects for delete
  using (bucket_id = 'business-media' and auth.uid()::text = (storage.foldername(name))[1]);
