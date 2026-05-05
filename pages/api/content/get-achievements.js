// pages/api/content/get-achievements.js
// ─────────────────────────────────────────────────────────────────
// Replaces: api/get_achievements.php
// Returns all achievements ordered by created_at DESC (public endpoint)
// ─────────────────────────────────────────────────────────────────

import supabaseAdmin from '../../../lib/supabaseAdmin';
import { sendJson, allowMethods } from '../../../lib/apiHelpers';

export default async function handler(req, res) {
  if (!allowMethods(req, res, ['GET'])) return;

  try {
    // ── Fetch all achievements newest first ───────────────────────
    const { data: achievements, error } = await supabaseAdmin
      .from('achievements')
      .select('id, club_name, title, description, image_url')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return sendJson(res, 200, true, 'Achievements fetched successfully.', {
      data: achievements || [],
    });
  } catch (err) {
    console.error('[get-achievements]', err);
    return sendJson(res, 500, false, 'Server error: ' + err.message);
  }
}
