# Story: Skin Status Selector

**Epic:** Home Dashboard
**PRD Ref:** §2.1.3 Skin Status Section

## Summary

"How's your skin today?" — three-option selector (Clear, Moderate, Flaring) that records the user's daily skin status.

## Functional Requirements

- Display three options with emoji icons: Clear (green happy), Moderate (yellow neutral), Flaring (red sad)
- Single-select; tapping highlights the selected option
- Selection auto-saves to today's daily summary record
- If already selected today, show the existing selection on re-visit
- Selection can be changed; latest selection wins

## Non-Functional Requirements

- Optimistic UI update on tap; persist to Supabase in background
- 44pt minimum tap target per option

## Open Design Gaps

- GAP-003: Post-selection behavior — defaulting to auto-save with visual confirmation (brief checkmark animation)

## Designs

Place any reference screenshots in `designs/`.
