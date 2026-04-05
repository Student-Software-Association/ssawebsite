-- Run once in Supabase SQL Editor if the table does not exist yet.

create table if not exists public.blogs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  hero_title text not null,
  article_title text,
  content_html text not null default '',
  published_at timestamptz not null default now(),
  author_name text not null,
  author_role text not null default '',
  author_avatar_url text,
  hero_image_url text,
  card_image_url text,
  created_at timestamptz not null default now()
);

create index if not exists blogs_published_at_idx on public.blogs (published_at desc);

alter table public.blogs enable row level security;

drop policy if exists "Allow public read on blogs" on public.blogs;

create policy "Allow public read on blogs"
  on public.blogs
  for select
  to anon, authenticated
  using (true);

-- Example insert (uncomment and adjust):
-- insert into public.blogs (slug, hero_title, article_title, content_html, published_at, author_name, author_role, hero_image_url, card_image_url, author_avatar_url)
-- values (
--   'design-discipline',
--   'Design isn''t just a process, its a form of discipline.',
--   'Discipline or Motivation',
--   '<p>Your HTML body here.</p>',
--   '2025-01-17T12:00:00Z',
--   'Lucas Brien',
--   'Student at BCIT',
--   null,
--   null,
--   null
-- );
