# S1: Photo Upload

## References
- Feature: F2 - Symptom Log
- Epic: E3 - Media & Notes
- PRD Section: 2.2.7

## User Story

As a user, I want to attach photos of my affected skin areas so that I can visually track changes and share with healthcare providers.

## Acceptance Criteria

- [ ] Display "Photos of Affected Areas" section header
- [ ] Display "Add Photo" button with camera icon
- [ ] Tapping "Add Photo" opens system photo picker (camera + gallery options)
- [ ] Selected photo appears as thumbnail in horizontal scroll
- [ ] Each thumbnail has X button overlay for removal
- [ ] Tapping X removes photo from list (with confirmation)
- [ ] Maximum 5 photos per log entry

## UX Requirements

- Thumbnails are square, consistent size
- Horizontal scroll for multiple photos
- Add Photo button always visible at end of row
- Removal is immediate after confirmation

## Non-Functional Requirements

- Photos compressed to max 1MB before upload
- Photos stored securely (HIPAA compliant storage)
- Offline: photos queued for upload when online
- Accessible: images have alt text "Photo {N} of affected area"

## Dependencies

- Photo storage service (Supabase Storage)
- Device camera/gallery permissions

## Design Notes

Check `story-images/` for thumbnail layout. Photo picker uses native system UI.
