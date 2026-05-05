// pages/api/content/get-announcements.js
// ─────────────────────────────────────────────────────────────────
// Replaces: api/get_announcements.php
// Returns all announcements ordered by created_at DESC (public endpoint)
// ─────────────────────────────────────────────────────────────────

import supabaseAdmin from '../../../lib/supabaseAdmin';
import { sendJson, allowMethods } from '../../../lib/apiHelpers';

export default async function handler(req, res) {
  if (!allowMethods(req, res, ['GET'])) return;

  try {
    // ── Fetch all announcements newest first ──────────────────────
    const { data: announcements, error } = await supabaseAdmin
      .from('announcements')
      .select('id, club_name, title, content, image_url, created_at')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return sendJson(res, 200, true, 'Announcements fetched successfully.', {
      data: announcements || [],
    });
  } catch (err) {
    console.error('[get-announcements]', err);
    return sendJson(res, 500, false, 'Server error: ' + err.message);
  }
}
