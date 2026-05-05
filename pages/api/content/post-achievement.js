// pages/api/content/post-achievement.js
// ─────────────────────────────────────────────────────────────────
// Replaces: api/post_achievement.php
// Creates a new achievement with optional image upload to Supabase Storage
// Accepts multipart/form-data — requires president session
// ─────────────────────────────────────────────────────────────────

import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import supabaseAdmin from '../../../lib/supabaseAdmin';
import { requirePresident } from '../../../lib/auth';
import { sendJson } from '../../../lib/apiHelpers';

// Disable Next.js default body parser — formidable handles multipart
export const config = {
  api: {
    bodyParser: false,
  },
};

// Allowed image MIME types
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
const BUCKET = process.env.SUPABASE_ACHIEVEMENTS_BUCKET || 'achievements';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, false, 'Method not allowed.');
  }

  // ── Require president session ─────────────────────────────────
  const session = requirePresident(req, res);
  if (!session) return;

  // ── Parse multipart form ──────────────────────────────────────
  const form = new IncomingForm({ keepExtensions: true, maxFileSize: 5 * 1024 * 1024 });

  let fields, files;
  try {
    [fields, files] = await form.parse(req);
  } catch (err) {
    return sendJson(res, 400, false, 'Failed to parse form data: ' + err.message);
  }

  const title = (fields.title?.[0] || '').trim();
  const description = (fields.description?.[0] || '').trim();

  // ── Validate required text fields ─────────────────────────────
  if (!title || !description) {
    return sendJson(res, 400, false, 'Title and description are required.');
  }

  let imageUrl = null;

  // ── Handle optional image upload ──────────────────────────────
  const imageFile = files.image?.[0];
  if (imageFile && imageFile.size > 0) {
    // Validate MIME type
    if (!ALLOWED_TYPES.includes(imageFile.mimetype)) {
      return sendJson(res, 400, false, 'Only JPEG, PNG, GIF, and WEBP images are allowed.');
    }

    // Generate a unique file name
    const ext = path.extname(imageFile.originalFilename || '.jpg');
    const fileName = `ach_${uuidv4()}${ext}`;

    // Read file bytes from temp path
    const fileBuffer = fs.readFileSync(imageFile.filepath);

    // ── Upload to Supabase Storage ────────────────────────────────
    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from(BUCKET)
      .upload(fileName, fileBuffer, {
        contentType: imageFile.mimetype,
        upsert: false,
      });

    if (uploadError) {
      console.error('[post-achievement] upload error:', uploadError);
      return sendJson(res, 500, false, 'Image upload failed: ' + uploadError.message);
    }

    // ── Get public URL of uploaded image ─────────────────────────
    const { data: urlData } = supabaseAdmin.storage.from(BUCKET).getPublicUrl(fileName);
    imageUrl = urlData.publicUrl;

    // Clean up temp file
    fs.unlinkSync(imageFile.filepath);
  }

  try {
    // ── Insert achievement row ────────────────────────────────────
    const { error } = await supabaseAdmin.from('achievements').insert({
      club_name: session.clubName,
      title,
      description,
      image_url: imageUrl,
      created_by: session.userId,
    });

    if (error) throw error;

    return sendJson(res, 201, true, 'Achievement added successfully.');
  } catch (err) {
    console.error('[post-achievement]', err);
    return sendJson(res, 500, false, 'Server error: ' + err.message);
  }
}
