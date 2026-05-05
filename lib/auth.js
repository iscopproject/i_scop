// lib/auth.js
// ─────────────────────────────────────────────────────────────────
// JWT-based session helpers — replaces PHP $_SESSION
// Sessions are stored in an HttpOnly cookie called "session"
// ─────────────────────────────────────────────────────────────────

import jwt from 'jsonwebtoken';
import { parse, serialize } from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE_NAME = 'session';
const COOKIE_MAX_AGE = 60 * 60 * 24; // 24 hours in seconds

if (!JWT_SECRET) {
  throw new Error('Missing JWT_SECRET env variable.');
}

// ── Sign a JWT and set it as an HttpOnly cookie ──────────────────
export function setSessionCookie(res, payload) {
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });

  const cookie = serialize(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE,
    path: '/',
  });

  res.setHeader('Set-Cookie', cookie);
}

// ── Clear the session cookie (logout) ────────────────────────────
export function clearSessionCookie(res) {
  const cookie = serialize(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: -1, // expire immediately
    path: '/',
  });

  res.setHeader('Set-Cookie', cookie);
}

// ── Parse and verify the session from a request ──────────────────
// Returns the decoded session payload or null if invalid / missing
export function getSession(req) {
  try {
    const cookies = parse(req.headers.cookie || '');
    const token = cookies[COOKIE_NAME];
    if (!token) return null;

    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch {
    return null;
  }
}

// ── Require a valid president session — returns session or sends 403 ──
export function requirePresident(req, res) {
  const session = getSession(req);
  if (!session || session.role !== 'president') {
    res.status(403).json({ success: false, message: 'Unauthorized.' });
    return null;
  }
  return session;
}
