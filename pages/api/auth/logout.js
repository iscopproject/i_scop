// pages/api/auth/logout.js
// ─────────────────────────────────────────────────────────────────
// Replaces: api/logout.php
// Clears the session cookie to log the user out
// ─────────────────────────────────────────────────────────────────

import { clearSessionCookie } from '../../../lib/auth';
import { sendJson, allowMethods } from '../../../lib/apiHelpers';

export default function handler(req, res) {
  if (!allowMethods(req, res, ['POST'])) return;

  // ── Clear the HttpOnly session cookie ─────────────────────────
  clearSessionCookie(res);

  return sendJson(res, 200, true, 'Logged out successfully.');
}
