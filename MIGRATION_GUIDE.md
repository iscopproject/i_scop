# 🚀 Migration Guide: PHP + MySQL → Next.js + Supabase

## What Changed

| Old (PHP/MySQL) | New (Next.js/Supabase) |
|---|---|
| `api/login.php` | `pages/api/auth/login.js` |
| `api/president_login.php` | `pages/api/auth/president-login.js` |
| `api/signup.php` | `pages/api/auth/signup.js` |
| `api/logout.php` | `pages/api/auth/logout.js` |
| `api/pending_members.php` | `pages/api/auth/pending-members.js` |
| `api/review_member.php` | `pages/api/auth/review-member.js` |
| `api/get_events.php` | `pages/api/content/get-events.js` |
| `api/get_announcements.php` | `pages/api/content/get-announcements.js` |
| `api/get_achievements.php` | `pages/api/content/get-achievements.js` |
| `api/post_event.php` | `pages/api/content/post-event.js` |
| `api/post_announcement.php` | `pages/api/content/post-announcement.js` |
| `api/post_achievement.php` | `pages/api/content/post-achievement.js` |
| `api/delete_content.php` | `pages/api/content/delete-content.js` |
| PHP `$_SESSION` | JWT cookie (`session`) via `lib/auth.js` |
| MySQL local database | Supabase (Postgres) |
| Local file uploads | Supabase Storage buckets |
| XAMPP/Apache | Vercel serverless |

---

## Step 1 — Create a Supabase Project

1. Go to https://supabase.com and sign in (free tier works)
2. Click **New Project**
3. Fill in: name, database password, region (closest to your users)
4. Wait ~2 minutes for provisioning

---

## Step 2 — Run the Database Schema

1. In Supabase Dashboard → **SQL Editor** → **New query**
2. Paste the contents of `supabase-schema.sql`
3. Click **Run**

This creates all 4 tables, indexes, RLS policies, and seeds the 15 president accounts.

> ⚠️ The seed uses bcrypt hash for password `President123!` — same as original

---

## Step 3 — Create Storage Buckets

In Supabase Dashboard → **Storage** → **New bucket**:

1. Create bucket: `announcements`
   - Toggle **Public** ✅
   - Click Save

2. Create bucket: `achievements`
   - Toggle **Public** ✅
   - Click Save

This replaces local `/uploads/` directory.

---

## Step 4 — Get Your Supabase Keys

In Supabase Dashboard → **Project Settings** → **API**:

| Key | Where to use |
|---|---|
| Project URL | `NEXT_PUBLIC_SUPABASE_URL` |
| anon public | `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| service_role (secret) | `SUPABASE_SERVICE_ROLE_KEY` |

---

## Step 5 — Local Setup

```bash
# Clone or extract project
cd school-clubs-nextjs

# Copy env file
cp .env.example .env.local

# Edit .env.local — fill in your Supabase keys
nano .env.local

# Install dependencies
npm install

# Run locally
npm run dev
# Open http://localhost:3000
```

Your `.env.local` should look like:

```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefgh.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
JWT_SECRET=some-long-random-string-at-least-32-chars
SUPABASE_ANNOUNCEMENTS_BUCKET=announcements
SUPABASE_ACHIEVEMENTS_BUCKET=achievements
```

---

## Step 6 — Deploy to Vercel

### Option A: Via Vercel CLI (recommended)

```bash
npm install -g vercel
vercel login
vercel --prod
```

Follow the prompts — Vercel auto-detects Next.js.

### Option B: Via GitHub

1. Push your project to a GitHub repo
2. Go to https://vercel.com → **Add New Project** → Import from GitHub
3. Select your repo

### Add Environment Variables in Vercel

In Vercel Dashboard → **Project Settings** → **Environment Variables**, add:

```
NEXT_PUBLIC_SUPABASE_URL        = https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY   = eyJ...
SUPABASE_SERVICE_ROLE_KEY       = eyJ...
JWT_SECRET                      = your-long-random-secret
SUPABASE_ANNOUNCEMENTS_BUCKET   = announcements
SUPABASE_ACHIEVEMENTS_BUCKET    = achievements
```

Then click **Redeploy**.

---

## How Passwords Work

The original PHP used `password_hash($password, PASSWORD_DEFAULT)` which produces bcrypt with cost 10.

The new Node.js uses `bcryptjs` with cost 12. The `bcrypt.compare()` function is **backward compatible** — it auto-detects the cost from the hash prefix. So the seeded president passwords (`President123!`) still work after migration.

> If you want to re-seed with Node.js bcrypt hashes:
> ```js
> const bcrypt = require('bcryptjs');
> const hash = await bcrypt.hash('President123!', 12);
> console.log(hash); // Use this in supabase-schema.sql
> ```

---

## Project Structure

```
school-clubs-nextjs/
├── lib/
│   ├── supabaseAdmin.js      # Server-side Supabase client (service role)
│   ├── auth.js               # JWT session helpers (replaces PHP $_SESSION)
│   └── apiHelpers.js         # Shared response utilities
├── pages/
│   ├── _app.js               # Next.js app wrapper
│   ├── index.js              # Serves the original HTML/JS frontend
│   └── api/
│       ├── auth/
│       │   ├── login.js
│       │   ├── president-login.js
│       │   ├── signup.js
│       │   ├── logout.js
│       │   ├── pending-members.js
│       │   └── review-member.js
│       └── content/
│           ├── get-events.js
│           ├── get-announcements.js
│           ├── get-achievements.js
│           ├── post-event.js
│           ├── post-announcement.js
│           ├── post-achievement.js
│           └── delete-content.js
├── public/
│   ├── index.html            # Original HTML (used by pages/index.js)
│   ├── style.css             # Original CSS (unchanged)
│   ├── script.js             # Original JS (API paths updated)
│   └── assets/logos/         # Club logo images
├── supabase-schema.sql       # Run this in Supabase SQL Editor
├── .env.example              # Copy to .env.local and fill in values
├── next.config.js
└── package.json
```

---

## Verifying the Migration

After deployment, test each feature:

- [ ] Home page loads with clubs, events, announcements
- [ ] Member signup (check Supabase → users table)
- [ ] Member login (approved accounts only)
- [ ] President login (all 15 president accounts)
- [ ] President can post announcements (with/without image)
- [ ] President can post events
- [ ] President can post achievements (with/without image)
- [ ] President can delete own content
- [ ] President can approve/reject pending members
- [ ] Images appear from Supabase Storage URLs
- [ ] Logout clears session

---

## Common Issues

**"Unauthorized" on all API calls after login**
→ Make sure `JWT_SECRET` is set correctly. It must be the same value used to sign and verify tokens.

**Images not uploading**
→ Check that the `announcements` and `achievements` Storage buckets exist and are set to **Public**.

**Cannot log in with president accounts**
→ The seeded bcrypt hash in `supabase-schema.sql` must match `President123!`. Run the generate script in the guide above to create a fresh hash if needed.

**Build fails on Vercel**
→ Ensure all 6 environment variables are set in Vercel Project Settings before deploying.
