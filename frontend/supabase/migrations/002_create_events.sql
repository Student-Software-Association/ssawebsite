-- Run once in Supabase SQL Editor to create the events table.

create table if not exists public.events (
  id            uuid        primary key default gen_random_uuid(),
  slug          text        not null unique,
  title         text        not null,
  tagline       text,
  image_url     text,
  time_start    text        not null,       -- e.g. "6:00PM"
  time_end      text        not null,       -- e.g. "9:30PM"
  event_date    date        not null,
  location      text        not null,
  speakers      text,                       -- comma-separated, e.g. "Axel, Aakif, Elliot"
  description   text        not null default '',
  seats_total   integer     not null default 100,
  seats_registered integer  not null default 0,
  eventbrite_url text,
  is_published  boolean     not null default true,
  created_at    timestamptz not null default now()
);

create index if not exists events_event_date_idx on public.events (event_date desc);

alter table public.events enable row level security;

drop policy if exists "Allow public read on events" on public.events;

create policy "Allow public read on events"
  on public.events
  for select
  to anon, authenticated
  using (is_published = true);

-- Example insert (uncomment and adjust):
-- insert into public.events (
--   slug, title, tagline, image_url,
--   time_start, time_end, event_date, location, speakers,
--   description, seats_total, seats_registered, eventbrite_url
-- ) values (
--   'jaungours-bootstart-2',
--   'Jaungours Bootstart 2.0',
--   'Mini-Hackathons, World of Webflow & So much more',
--   null,
--   '6:00PM', '9:30PM',
--   '2025-10-14',
--   'Langara Main Auditorium',
--   'Axel, Aakif, Elliot',
--   'Join Craig David (Blizzard) and Sophia Brown (Anthropic) as they explore how AI is reshaping the gaming industry.',
--   100,
--   33,
--   'https://www.eventbrite.com/e/your-event-id'
-- );
