// pages/api/auth/president-login.js
// ─────────────────────────────────────────────────────────────────
// Replaces: api/president_login.php
// President-only login — enforces role === 'president' check
// ─────────────────────────────────────────────────────────────────

import bcrypt from 'bcryptjs';
import supabaseAdmin from '../../../lib/supabaseAdmin';
import { setSessionCookie } from '../../../lib/auth';
import { sendJson, allowMethods } from '../../../lib/apiHelpers';

export default async function handler(req, res) {
  if (!allowMethods(req, res, ['POST'])) return;

  const { email, password } = req.body;

  // ── Validate required fields ──────────────────────────────────
  if (!email || !password) {
    return sendJson(res, 400, false, 'Email and password are required.');
  }

  try {
    // ── Fetch user by email ───────────────────────────────────────
    const { data: user, error } = await supabaseAdmin
      .from('users')
      .select('id, fullname, email, password_hash, club_name, role, approval_status')
      .eq('email', email.trim().toLowerCase())
      .maybeSingle();

    if (error) throw error;

    // ── Verify password ───────────────────────────────────────────
    const passwordMatch = user
      ? await bcrypt.compare(password, user.password_hash)
      : false;

    if (!user || !passwordMatch) {
      return sendJson(res, 401, false, 'Invalid email or password.');
    }

    // ── Enforce president-only access ─────────────────────────────
    if (user.role !== 'president') {
      return sendJson(res, 403, false, 'This account is not a president account.');
    }

    if (user.approval_status !== 'approved') {
      return sendJson(res, 403, false, 'President account is not active.');
    }

    // ── Set session cookie ────────────────────────────────────────
    const sessionPayload = {
      userId: user.id,
      fullname: user.fullname,
      email: user.email,
      clubName: user.club_name,
      role: 'president',
      approvalStatus: 'approved',
    };

    setSessionCookie(res, sessionPayload);

    return sendJson(res, 200, true, 'President login successful.', {
      president: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        clubName: user.club_name,
        role: 'president',
        approvalStatus: 'approved',
      },
    });
  } catch (err) {
    console.error('[president-login]', err);
    return sendJson(res, 500, false, 'Server error. Please try again.');
  }
}
