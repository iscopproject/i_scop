// pages/api/auth/login.js
// ─────────────────────────────────────────────────────────────────
// Replaces: api/login.php
// Member login — validates credentials, approval status, sets JWT cookie
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

    // ── Verify password (use timing-safe compare) ─────────────────
    const passwordMatch = user
      ? await bcrypt.compare(password, user.password_hash)
      : false;

    if (!user || !passwordMatch) {
      return sendJson(res, 401, false, 'Invalid email or password.');
    }

    // ── Enforce approval status for non-presidents ────────────────
    if (user.role !== 'president') {
      if (user.approval_status === 'pending') {
        return sendJson(res, 403, false, 'Your account is pending president approval.');
      }
      if (user.approval_status !== 'approved') {
        return sendJson(res, 403, false, 'Your account was not approved by your president.');
      }
    }

    // ── Build session payload and set cookie ──────────────────────
    const sessionPayload = {
      userId: user.id,
      fullname: user.fullname,
      email: user.email,
      clubName: user.club_name,
      role: user.role,
      approvalStatus: user.approval_status,
    };

    setSessionCookie(res, sessionPayload);

    return sendJson(res, 200, true, 'Login successful.', {
      user: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        clubName: user.club_name,
        role: user.role,
        approvalStatus: user.approval_status,
      },
    });
  } catch (err) {
    console.error('[login]', err);
    return sendJson(res, 500, false, 'Server error. Please try again.');
  }
}
