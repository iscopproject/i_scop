// pages/api/content/post-event.js
// ─────────────────────────────────────────────────────────────────
// Replaces: api/post_event.php
// Creates a new event — requires president session
// ─────────────────────────────────────────────────────────────────

import supabaseAdmin from '../../../lib/supabaseAdmin';
import { requirePresident } from '../../../lib/auth';
import { sendJson, allowMethods } from '../../../lib/apiHelpers';

export default async function handler(req, res) {
  if (!allowMethods(req, res, ['POST'])) return;

  // ── Require president session ─────────────────────────────────
  const session = requirePresident(req, res);
  if (!session) return;

  const { title, event_date, event_time, location, description } = req.body;

  // ── Validate required fields ──────────────────────────────────
  if (!title || !event_date || !event_time || !location || !description) {
    return sendJson(res, 400, false, 'All fields are required.');
  }

  try {
    // ── Insert event linked to president's club ───────────────────
    const { error } = await supabaseAdmin.from('events').insert({
      club_name: session.clubName,
      title: title.trim(),
      event_date,
      event_time: event_time.trim(),
      location: location.trim(),
      description: description.trim(),
      created_by: session.userId,
    });

    if (error) throw error;

    return sendJson(res, 201, true, 'Event added successfully.');
  } catch (err) {
    console.error('[post-event]', err);
    return sendJson(res, 500, false, 'Server error: ' + err.message);
  }
}
