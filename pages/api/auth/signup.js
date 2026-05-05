// pages/api/auth/signup.js
// ─────────────────────────────────────────────────────────────────
// Replaces: api/signup.php
// Creates a new member account with approval_status = 'pending'
// ─────────────────────────────────────────────────────────────────

import bcrypt from 'bcryptjs';
import supabaseAdmin from '../../../lib/supabaseAdmin';
import { sendJson, allowMethods } from '../../../lib/apiHelpers';

export default async function handler(req, res) {
  // Only allow POST
  if (!allowMethods(req, res, ['POST'])) return;

  const { fullname, email, password, confirmPassword, clubName } = req.body;

  // ── Validate required fields ──────────────────────────────────
  if (!fullname || !email || !password || !confirmPassword) {
    return sendJson(res, 400, false, 'All signup fields are required.');
  }

  if (!clubName) {
    return sendJson(res, 400, false, 'Please select your organization.');
  }

  // ── Validate email format ─────────────────────────────────────
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return sendJson(res, 400, false, 'Please provide a valid email address.');
  }

  // ── Validate password length ──────────────────────────────────
  if (password.length < 6) {
    return sendJson(res, 400, false, 'Password must be at least 6 characters.');
  }

  // ── Confirm passwords match ───────────────────────────────────
  if (password !== confirmPassword) {
    return sendJson(res, 400, false, 'Passwords do not match.');
  }

  try {
    // ── Check if email already exists ────────────────────────────
    const { data: existing, error: checkError } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('email', email.toLowerCase())
      .maybeSingle();

    if (checkError) throw checkError;

    if (existing) {
      return sendJson(res, 409, false, 'Email already exists. Try logging in.');
    }

    // ── Hash the password using bcrypt (12 rounds) ────────────────
    const passwordHash = await bcrypt.hash(password, 12);

    // ── Insert the new member (role='member', status='pending') ───
    const { error: insertError } = await supabaseAdmin.from('users').insert({
      fullname: fullname.trim(),
      email: email.trim().toLowerCase(),
      password_hash: passwordHash,
      club_name: clubName.trim(),
      role: 'member',
      approval_status: 'pending',
    });

    if (insertError) throw insertError;

    return sendJson(
      res,
      201,
      true,
      'Signup submitted. Wait for your organization president to approve your account.'
    );
  } catch (err) {
    console.error('[signup]', err);
    return sendJson(res, 500, false, 'Unable to submit signup right now.');
  }
}
