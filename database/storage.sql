-- Run after schema.sql. Creates the public storage bucket used for
-- business logos, banners, and gallery photos (see app/dashboard/page.js).
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('business-media', 'business-media', true, 8388608, array['image/png','image/jpeg','image/webp','image/gif'])
on conflict (id) do update set
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

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
