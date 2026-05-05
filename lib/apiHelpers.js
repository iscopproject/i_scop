// lib/apiHelpers.js
// ─────────────────────────────────────────────────────────────────
// Shared utilities for all API route handlers
// ─────────────────────────────────────────────────────────────────

// ── Send a standard JSON response ────────────────────────────────
export function sendJson(res, statusCode, success, message, extra = {}) {
  return res.status(statusCode).json({ success, message, ...extra });
}

// ── Only allow specific HTTP methods ─────────────────────────────
export function allowMethods(req, res, methods) {
  if (!methods.includes(req.method)) {
    res.setHeader('Allow', methods);
    sendJson(res, 405, false, 'Method not allowed.');
    return false;
  }
  return true;
}
