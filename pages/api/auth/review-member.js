// pages/api/auth/review-member.js
// ─────────────────────────────────────────────────────────────────
// Replaces: api/review_member.php
// Approve or reject a pending member — president only
// Only affects members from the same club who are still pending
// ─────────────────────────────────────────────────────────────────

import supabaseAdmin from '../../../lib/supabaseAdmin';
import { requirePresident } from '../../../lib/auth';
import { sendJson, allowMethods } from '../../../lib/apiHelpers';

export default async function handler(req, res) {
  if (!allowMethods(req, res, ['POST'])) return;

  // ── Require president session ─────────────────────────────────
  const session = requirePresident(req, res);
  if (!session) return;

  if (!session.clubName || !session.userId) {
    return sendJson(res, 403, false, 'Invalid president session.');
  }

  const { memberId, action } = req.body;

  // ── Validate inputs ───────────────────────────────────────────
  const memberIdInt = parseInt(memberId, 10);
  if (!memberIdInt || memberIdInt <= 0) {
    return sendJson(res, 400, false, 'Invalid review request.');
  }

  const normalizedAction = (action || '').toLowerCase().trim();
  if (normalizedAction !== 'approve' && normalizedAction !== 'reject') {
    return sendJson(res, 400, false, 'Action must be "approve" or "reject".');
  }

  const newStatus = normalizedAction === 'approve' ? 'approved' : 'rejected';

  try {
    // ── Update approval status — scoped to club + pending only ────
    const { error, count } = await supabaseAdmin
      .from('users')
      .update({
        approval_status: newStatus,
        reviewed_by: session.userId,
        reviewed_at: new Date().toISOString(),
      }, { count: 'exact' })
      .eq('id', memberIdInt)
      .eq('role', 'member')
      .eq('approval_status', 'pending')
      .eq('club_name', session.clubName);

    if (error) throw error;

    if (!count || count === 0) {
      return sendJson(
        res,
        404,
        false,
        'Member not found in your club or already reviewed.'
      );
    }

    const successMsg =
      newStatus === 'approved'
        ? 'Member approved successfully.'
        : 'Member rejected successfully.';

    return sendJson(res, 200, true, successMsg);
  } catch (err) {
    console.error('[review-member]', err);
    return sendJson(res, 500, false, 'Server error: ' + err.message);
  }
}
