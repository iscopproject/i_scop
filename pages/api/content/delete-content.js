// pages/api/content/delete-content.js
// ─────────────────────────────────────────────────────────────────
// Replaces: api/delete_content.php
// Deletes an event, announcement, or achievement owned by the president
// Also removes the associated image from Supabase Storage when applicable
// ─────────────────────────────────────────────────────────────────

import supabaseAdmin from '../../../lib/supabaseAdmin';
import { requirePresident } from '../../../lib/auth';
import { sendJson, allowMethods } from '../../../lib/apiHelpers';

// Maps content type -> { table, bucket }
const CONTENT_MAP = {
  event: { table: 'events', bucket: null },
  announcement: { table: 'announcements', bucket: process.env.SUPABASE_ANNOUNCEMENTS_BUCKET || 'announcements' },
  achievement: { table: 'achievements', bucket: process.env.SUPABASE_ACHIEVEMENTS_BUCKET || 'achievements' },
};

export default async function handler(req, res) {
  if (!allowMethods(req, res, ['POST'])) return;

  // ── Require president session ─────────────────────────────────
  const session = requirePresident(req, res);
  if (!session) return;

  const { type, id } = req.body;

  // ── Validate input ────────────────────────────────────────────
  if (!type || !id || isNaN(parseInt(id, 10)) || parseInt(id, 10) <= 0) {
    return sendJson(res, 400, false, 'Invalid request.');
  }

  const contentConfig = CONTENT_MAP[type];
  if (!contentConfig) {
    return sendJson(res, 400, false, 'Invalid content type.');
  }

  const { table, bucket } = contentConfig;
  const recordId = parseInt(id, 10);

  try {
    // ── If type has images, fetch image_url first to clean up storage ──
    if (bucket) {
      const { data: record, error: fetchError } = await supabaseAdmin
        .from(table)
        .select('image_url')
        .eq('id', recordId)
        .eq('created_by', session.userId)
        .maybeSingle();

      if (fetchError) throw fetchError;

      // ── Delete image from Supabase Storage if it exists ───────────
      if (record?.image_url) {
        // Extract the file path from the full public URL
        // URL format: https://<project>.supabase.co/storage/v1/object/public/<bucket>/<filename>
        const urlParts = record.image_url.split(`/storage/v1/object/public/${bucket}/`);
        if (urlParts.length === 2) {
          const filePath = urlParts[1];
          const { error: storageError } = await supabaseAdmin.storage
            .from(bucket)
            .remove([filePath]);

          if (storageError) {
            // Log but don't block the deletion
            console.warn('[delete-content] storage delete warning:', storageError.message);
          }
        }
      }
    }

    // ── Delete the database row (only if owned by this president) ─────
    const { error: deleteError, count } = await supabaseAdmin
      .from(table)
      .delete({ count: 'exact' })
      .eq('id', recordId)
      .eq('created_by', session.userId);

    if (deleteError) throw deleteError;

    if (!count || count === 0) {
      return sendJson(
        res,
        404,
        false,
        `Could not find ${type} or you do not have permission.`
      );
    }

    const typeName = type.charAt(0).toUpperCase() + type.slice(1);
    return sendJson(res, 200, true, `${typeName} deleted successfully.`);
  } catch (err) {
    console.error('[delete-content]', err);
    return sendJson(res, 500, false, 'Server error: ' + err.message);
  }
}
