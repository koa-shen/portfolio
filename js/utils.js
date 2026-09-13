/* =========================================================
   Shared helpers — used by main.js, project.js, resume.js
   ========================================================= */

const FILLER_PREFIX = 'FILLER:';

/** True if a value is placeholder content. */
function isFiller(value) {
  return typeof value === 'string' && value.trim().startsWith(FILLER_PREFIX);
}

/** Strip the FILLER: prefix for display. */
function fillerText(value) {
  return value.trim().slice(FILLER_PREFIX.length).trim();
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

/**
 * Render a string as HTML. Placeholder strings get the yellow
 * "NEEDS CONTENT" treatment so gaps are obvious at a glance.
 */
function text(value, { tag = 'span' } = {}) {
  if (value == null) return '';
  if (isFiller(value)) {
    return `<${tag} class="filler">${escapeHtml(fillerText(value))}</${tag}>`;
  }
  return escapeHtml(value);
}

/** Plain text with no markup — for attributes and the resume. */
function plain(value) {
  if (value == null) return '';
  return isFiller(value) ? fillerText(value) : value;
}

/**
 * Image that degrades to a labeled placeholder tile when the file is a
 * FILLER path or simply isn't on disk yet.
 */
function imageOrPlaceholder(src, alt = '') {
  if (!src || isFiller(src)) {
    return `<div class="ph">${escapeHtml(fillerText(src || 'FILLER: add image'))}</div>`;
  }
  const safe = escapeHtml(src);
  return `<img src="${safe}" alt="${escapeHtml(alt)}" loading="lazy"
    onerror="this.outerHTML='<div class=&quot;ph&quot;>missing file: ${safe}</div>'">`;
}

/** Resolve "meta.name" style paths against the data object. */
function get(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

const LEVEL_LABELS = { 1: 'Familiar', 2: 'Intermediate', 2.5: 'Int.–Advanced', 3: 'Advanced' };
