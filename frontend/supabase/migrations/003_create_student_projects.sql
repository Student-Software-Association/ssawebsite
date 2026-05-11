-- Run once in Supabase SQL Editor.
-- Stores supplementary metadata for GitHub repos shown on the Student Projects page.
-- The primary key is the GitHub repo name (slug). Repos appear automatically from
-- the GitHub API; this table enriches them with project summary, team info, etc.

create table if not exists public.student_projects (
  github_repo_name  text        primary key,    -- must match the repo's "name" field exactly
  display_name      text,                        -- optional prettier name override (e.g. "SSA Website")
  problem           text,                        -- "What challenge inspired this project?"
  solution          text,                        -- "What does it do / who's it for?"
  tools_used        text,                        -- e.g. "React, Firebase, Supabase"
  built_at          text,                        -- e.g. "Bootstart 2.0, Hackathon 2025"
  demo_url          text,                        -- live demo link
  team_members      text,                        -- comma-separated names, e.g. "Dylan, Brian, Cooper"
  screenshot_url    text,                        -- Supabase Storage URL for project screenshot
  is_hidden         boolean     not null default false,  -- hide a repo from the page
  created_at        timestamptz not null default now()
);

alter table public.student_projects enable row level security;

drop policy if exists "Allow public read on student_projects" on public.student_projects;

create policy "Allow public read on student_projects"
  on public.student_projects
  for select
  to anon, authenticated
  using (is_hidden = false);

-- Example insert:
-- insert into public.student_projects (
--   github_repo_name, display_name, problem, solution,
--   tools_used, built_at, demo_url, team_members
-- ) values (
--   'ssa-website',
--   'SSA Website',
--   'The SSA needed a modern web presence to showcase student projects and events.',
--   'A student-led tech club hub for builders, coders, and creatives.',
--   'Next.js, TypeScript, Supabase, Tailwind CSS',
--   'Langara Web Dev Course 2025',
--   'https://studentsoftware.org',
--   'Dylan, Brian, Cooper'
-- );
