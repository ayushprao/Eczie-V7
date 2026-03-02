# Story: Daily Routine View

**Epic:** Routine Tracker
**PRD Ref:** §2.3.1–§2.3.6 (Header, Weekly Calendar, Progress Summary, Task Categories, FAB, Bottom Nav)

## Summary

Display today's routine tasks organized by category, with a weekly calendar strip and live progress tracking.

## Functional Requirements

- Header: back button, title "Today's Routine", three-dot menu
- Weekly calendar strip: 7-day view (Su–Sa), completed days show checkmark, current day highlighted
- Progress summary: "X of Y tasks completed", percentage, progress bar
- Task list grouped by category:
  - **Skincare** — tasks with AM/PM labels and sun/moon icons
  - **Medications** — tasks with specific time labels and pill icon
  - **Lifestyle** — tasks with water/person/bed icons
- Each task has a checkbox; tapping toggles complete/incomplete
- Progress bar and count update immediately on toggle
- FAB (+) button navigates to Add Routine Task screen

## Non-Functional Requirements

- Checkbox toggle: optimistic UI update, pessimistic save (retry on failure)
- Tasks ordered by time within each category
- Empty state: "No routines yet — tap + to add your first task"

## Open Design Gaps

- GAP-017: Three-dot menu options — defaulting to "Edit Routines" and "Reset Today"

## Designs

Place any reference screenshots in `designs/`.
