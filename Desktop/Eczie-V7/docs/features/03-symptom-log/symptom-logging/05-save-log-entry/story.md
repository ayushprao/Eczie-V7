# Story: Save Log Entry

**Epic:** Symptom Logging
**PRD Ref:** §2.2.8 Additional Notes, §2.2.9 Save Button

## Summary

Additional notes text area and the save action that persists the full symptom log entry.

## Functional Requirements

- Free-text "Additional Notes" field with placeholder text; optional
- "Save Symptom Log" full-width button
- On save: validate that at least one slider has been moved from default (0)
- On success: persist all log data (sliders, severity, symptoms, lifestyle, triggers, photos, notes, date) to Supabase
- After save: navigate back to Home with brief success toast/confirmation
- On error: show inline error message; preserve form state for retry

## Non-Functional Requirements

- Loading state on button during save
- Offline: buffer draft locally; sync when connectivity returns
- Notes field: max 500 characters

## Open Design Gaps

- GAP-002: Post-save behavior — defaulting to navigate Home + success toast
- GAP-024: Character limits — defaulting to 500 for notes

## Designs

Place any reference screenshots in `designs/`.
