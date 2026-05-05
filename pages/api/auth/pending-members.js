// pages/api/auth/pending-members.js
// ─────────────────────────────────────────────────────────────────
// Replaces: api/pending_members.php
// Returns pending members for the president's club — president only
// ─────────────────────────────────────────────────────────────────

import supabaseAdmin from '../../../lib/supabaseAdmin';
import { requirePresident } from '../../../lib/auth';
import { sendJson, allowMethods } from '../../../lib/apiHelpers';

export default async function handler(req, res) {
  if (!allowMethods(req, res, ['POST'])) return;

  // ── Require president session ─────────────────────────────────
  const session = requirePresident(req, res);
  if (!session) return;

  if (!session.clubName) {
    return sendJson(res, 403, false, 'President club is missing in session.');
  }

  try {
    // ── Fetch pending members from the same club ──────────────────
    const { data: members, error } = await supabaseAdmin
      .from('users')
      .select('id, fullname, email, created_at')
      .eq('role', 'member')
      .eq('approval_status', 'pending')
      .eq('club_name', session.clubName)
      .order('created_at', { ascending: true });

    if (error) throw error;

    // ── Format created_at key to match PHP camelCase response ─────
    const formatted = (members || []).map((m) => ({
      id: m.id,
      fullname: m.fullname,
      email: m.email,
      createdAt: m.created_at,
    }));

    return sendJson(res, 200, true, 'Pending members loaded.', {
      members: formatted,
    });
  } catch (err) {
    console.error('[pending-members]', err);
    return sendJson(res, 500, false, 'Server error: ' + err.message);
  }
}
