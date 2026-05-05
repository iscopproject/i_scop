// pages/api/content/get-events.js
// ─────────────────────────────────────────────────────────────────
// Replaces: api/get_events.php
// Returns all events ordered by event_date ASC (public endpoint)
// ─────────────────────────────────────────────────────────────────

import supabaseAdmin from '../../../lib/supabaseAdmin';
import { sendJson, allowMethods } from '../../../lib/apiHelpers';

export default async function handler(req, res) {
  if (!allowMethods(req, res, ['GET'])) return;

  try {
    // ── Fetch all events ordered by event date ascending ──────────
    const { data: events, error } = await supabaseAdmin
      .from('events')
      .select('id, club_name, title, event_date, event_time, location, description')
      .order('event_date', { ascending: true });

    if (error) throw error;

    return sendJson(res, 200, true, 'Events fetched successfully.', {
      data: events || [],
    });
  } catch (err) {
    console.error('[get-events]', err);
    return sendJson(res, 500, false, 'Server error: ' + err.message);
  }
}
