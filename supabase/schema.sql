-- ============================================================
-- Harvest Church of God Ethiopia — Supabase Schema
-- Run this entire file in: Supabase Dashboard → SQL Editor
-- ============================================================

-- ── 1. CONTACT MESSAGES ─────────────────────────────────────
create table if not exists contact_messages (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  message     text not null,
  is_read     boolean default false,
  created_at  timestamptz default now()
);

-- ── 2. NEWSLETTER SUBSCRIBERS ───────────────────────────────
create table if not exists subscribers (
  id            uuid primary key default gen_random_uuid(),
  email         text unique not null,
  status        text default 'active' check (status in ('active','unsubscribed')),
  subscribed_at timestamptz default now()
);

-- ── 3. NEWSLETTER ISSUES ────────────────────────────────────
create table if not exists newsletter_issues (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  amharic     text,
  tag         text default 'Church Life',
  preview     text not null,
  content     text not null,
  image_url   text,
  published   boolean default false,
  created_at  timestamptz default now()
);

-- ── 4. GALLERY IMAGES ───────────────────────────────────────
create table if not exists gallery_images (
  id          uuid primary key default gen_random_uuid(),
  album       text not null,
  caption     text,
  storage_path text not null,          -- path inside Supabase Storage bucket
  created_at  timestamptz default now()
);

-- ── 5. EVENTS ───────────────────────────────────────────────
create table if not exists events (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  event_date  date not null,
  event_time  text,
  location    text,
  description text,
  is_published boolean default true,
  created_at  timestamptz default now()
);

-- ============================================================
-- Row Level Security (RLS)
-- Public can read; only service-role key (admin API) can write
-- ============================================================

alter table contact_messages    enable row level security;
alter table subscribers         enable row level security;
alter table newsletter_issues   enable row level security;
alter table gallery_images      enable row level security;
alter table events              enable row level security;

-- Public SELECT policies (anon can read published content)
create policy "Public read newsletters" on newsletter_issues
  for select using (published = true);

create policy "Public read gallery" on gallery_images
  for select using (true);

create policy "Public read events" on events
  for select using (is_published = true);

-- Public INSERT policies (contact form, newsletter subscribe)
create policy "Public insert contacts" on contact_messages
  for insert with check (true);

create policy "Public insert subscribers" on subscribers
  for insert with check (true);

create policy "Public update subscribers" on subscribers
  for update using (true) with check (true);

-- ============================================================
-- Storage bucket for gallery images
-- Run manually in: Supabase Dashboard → Storage → New Bucket
-- Name: gallery-images   Public: YES
-- ============================================================
