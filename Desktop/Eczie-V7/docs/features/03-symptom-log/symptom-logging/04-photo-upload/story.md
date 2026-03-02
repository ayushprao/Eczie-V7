# Story: Photo Upload

**Epic:** Symptom Logging
**PRD Ref:** §2.2.7 Photos of Affected Areas

## Summary

Allow users to attach photos of affected skin areas to their log entry.

## Functional Requirements

- Horizontal scrollable row of photo thumbnails
- "Add Photo" button with camera icon opens device image picker (camera or gallery)
- Each attached photo shows a thumbnail with an X button to remove
- Photos associated with the log entry and uploaded to Supabase Storage on save

## Non-Functional Requirements

- Max 5 photos per entry
- Photos compressed client-side before upload (max 1 MB each)
- Images stored in Supabase Storage with RLS; URLs not publicly accessible
- HIPAA: photos are PHI — encrypted at rest, access-controlled

## Open Design Gaps

- GAP-009: Camera vs. gallery picker — defaulting to system image picker (offers both)

## Designs

Place any reference screenshots in `designs/`.
