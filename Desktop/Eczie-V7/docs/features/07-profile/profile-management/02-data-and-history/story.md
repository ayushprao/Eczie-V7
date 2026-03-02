# Story: Data & History

**Epic:** Profile Management
**PRD Ref:** §2.8.5 Data and History Section

## Summary

Four menu items for managing user data: view log history, export data, delete specific entries, and edit personal details.

## Functional Requirements

| Menu Item | Behavior |
|-----------|----------|
| **Log History** (clock icon) | Navigate to a scrollable list of all past log entries (reverse chronological). Each entry shows date, severity, short description. Tap opens read-only detail view. |
| **Export Data** (download icon) | Generates a CSV export of all symptom logs. Shows "Last export: X days ago". Opens system share sheet with file. |
| **Delete Entries** (trash icon) | Navigate to a multi-select list of log entries. User selects entries → confirm deletion → permanently removed. |
| **Edit Personal Details** (pencil icon) | Navigate to a form with editable fields: name, email (read-only), location. Save persists to Supabase. |

## Non-Functional Requirements

- Export includes: date, severity scores, symptoms, triggers, lifestyle factors, notes (no photos in CSV)
- Deletion is hard-delete with confirmation dialog: "This cannot be undone"
- Edit form validates name (required, max 50 chars)

## Open Design Gaps

- GAP-011: Log detail view — reuse from Insights Recent Logs story
- GAP-014: Export format — defaulting to CSV for v1

## Designs

Place any reference screenshots in `designs/`.
