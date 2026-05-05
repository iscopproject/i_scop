-- ============================================================
-- SUPABASE SCHEMA — run this in your Supabase SQL Editor
-- Dashboard: https://supabase.com/dashboard → SQL Editor → New query
-- ============================================================

-- ── users ────────────────────────────────────────────────────────
-- Stores both members (role='member') and club presidents (role='president')
-- Members are 'pending' until a president approves them
CREATE TABLE IF NOT EXISTS public.users (
    id          BIGSERIAL PRIMARY KEY,
    fullname    VARCHAR(120)  NOT NULL,
    email       VARCHAR(190)  NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    club_name   VARCHAR(190)  NOT NULL,
    role        TEXT          NOT NULL DEFAULT 'member'   CHECK (role IN ('member','president')),
    approval_status TEXT      NOT NULL DEFAULT 'pending'  CHECK (approval_status IN ('pending','approved','rejected')),
    reviewed_by BIGINT        REFERENCES public.users(id) ON DELETE SET NULL,
    reviewed_at TIMESTAMPTZ   DEFAULT NULL,
    created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

-- ── announcements ────────────────────────────────────────────────
-- Club announcements; image_url points to a Supabase Storage public URL
CREATE TABLE IF NOT EXISTS public.announcements (
    id          BIGSERIAL PRIMARY KEY,
    club_name   VARCHAR(190)  NOT NULL,
    title       VARCHAR(200)  NOT NULL,
    content     TEXT          NOT NULL,
    image_url   TEXT          DEFAULT NULL,
    created_by  BIGINT        NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

-- ── events ───────────────────────────────────────────────────────
-- Upcoming events posted by club presidents
CREATE TABLE IF NOT EXISTS public.events (
    id          BIGSERIAL PRIMARY KEY,
    club_name   VARCHAR(190)  NOT NULL,
    title       VARCHAR(200)  NOT NULL,
    event_date  DATE          NOT NULL,
    event_time  VARCHAR(100)  NOT NULL,
    location    VARCHAR(200)  NOT NULL,
    description TEXT          NOT NULL,
    created_by  BIGINT        NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

-- ── achievements ─────────────────────────────────────────────────
-- Club achievements; image_url points to a Supabase Storage public URL
CREATE TABLE IF NOT EXISTS public.achievements (
    id          BIGSERIAL PRIMARY KEY,
    club_name   VARCHAR(190)  NOT NULL,
    title       VARCHAR(200)  NOT NULL,
    description TEXT          NOT NULL,
    image_url   TEXT          DEFAULT NULL,
    created_by  BIGINT        NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

-- ── Indexes for common filter/sort queries ────────────────────────
CREATE INDEX IF NOT EXISTS idx_users_email           ON public.users(email);
CREATE INDEX IF NOT EXISTS idx_users_club_approval   ON public.users(club_name, approval_status);
CREATE INDEX IF NOT EXISTS idx_events_date           ON public.events(event_date ASC);
CREATE INDEX IF NOT EXISTS idx_announcements_created ON public.announcements(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_achievements_created  ON public.achievements(created_at DESC);

-- ── Row Level Security ────────────────────────────────────────────
-- We use the service role key from Next.js API routes, which bypasses RLS.
-- Enable RLS for extra protection but policy allows service role through.
ALTER TABLE public.users          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements   ENABLE ROW LEVEL SECURITY;

-- Allow all operations from the service role (used by Next.js API routes)
CREATE POLICY "service_role_all" ON public.users
    FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "service_role_all" ON public.announcements
    FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "service_role_all" ON public.events
    FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "service_role_all" ON public.achievements
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Public read for announcements, events, achievements (no auth needed to view)
CREATE POLICY "public_read_announcements" ON public.announcements
    FOR SELECT TO anon USING (true);

CREATE POLICY "public_read_events" ON public.events
    FOR SELECT TO anon USING (true);

CREATE POLICY "public_read_achievements" ON public.achievements
    FOR SELECT TO anon USING (true);

-- ============================================================
-- SEED: 15 President accounts (all password: President123!)
-- bcrypt hash for "President123!" with 12 rounds
-- ============================================================
INSERT INTO public.users (fullname, email, password_hash, club_name, role, approval_status)
VALUES
('Business and Accountancy Department President', 'president.bad@school.edu', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQyCgTCEGwHYd4K6n1WRQAIzO', 'Business and Accountancy Department', 'president', 'approved'),
('College Organization Digital Excellence President', 'president.code@school.edu', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQyCgTCEGwHYd4K6n1WRQAIzO', 'College Organization Digital Excellence', 'president', 'approved'),
('Educators'' Guild President', 'president.eguild@school.edu', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQyCgTCEGwHYd4K6n1WRQAIzO', 'Educators'' Guild', 'president', 'approved'),
('Book Lovers Club President', 'president.booklovers@school.edu', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQyCgTCEGwHYd4K6n1WRQAIzO', 'Book Lovers Club', 'president', 'approved'),
('Cultural Society President', 'president.cultural@school.edu', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQyCgTCEGwHYd4K6n1WRQAIzO', 'Cultural Society', 'president', 'approved'),
('Junior Financial Executives President', 'president.jfe@school.edu', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQyCgTCEGwHYd4K6n1WRQAIzO', 'Junior Financial Executives', 'president', 'approved'),
('Junior Marketing Association President', 'president.jma@school.edu', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQyCgTCEGwHYd4K6n1WRQAIzO', 'Junior Marketing Association', 'president', 'approved'),
('Junior Philippine Institute of Accountants President', 'president.jpia@school.edu', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQyCgTCEGwHYd4K6n1WRQAIzO', 'Junior Philippine Institute of Accountants', 'president', 'approved'),
('Kapisanan ng mga mag-aaral sa Filipino President', 'president.kmf@school.edu', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQyCgTCEGwHYd4K6n1WRQAIzO', 'Kapisanan ng mga mag-aaral sa Filipino', 'president', 'approved'),
('League of Elementary Pre-service Teachers President', 'president.lept@school.edu', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQyCgTCEGwHYd4K6n1WRQAIzO', 'League of Elementary Pre-service Teachers', 'president', 'approved'),
('Lingua Societas President', 'president.lingua@school.edu', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQyCgTCEGwHYd4K6n1WRQAIzO', 'Lingua Societas', 'president', 'approved'),
('Mathematics Society President', 'president.math@school.edu', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQyCgTCEGwHYd4K6n1WRQAIzO', 'Mathematics Society', 'president', 'approved'),
('Operations Management Society President', 'president.ops@school.edu', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQyCgTCEGwHYd4K6n1WRQAIzO', 'Operations Management Society', 'president', 'approved'),
('Rover Scout President', 'president.rover@school.edu', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQyCgTCEGwHYd4K6n1WRQAIzO', ' Rover Scout', 'president', 'approved'),
('SINAG Peer Facilitators President', 'president.sinag@school.edu', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQyCgTCEGwHYd4K6n1WRQAIzO', 'SINAG Peer Facilitators', 'president', 'approved')
ON CONFLICT (email) DO NOTHING;
