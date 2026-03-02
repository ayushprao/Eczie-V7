# Epic: Routine Tracker

**Feature:** Routine Tracking
**PRD Ref:** §2.3 Routine Tracker Screen (Frame: 55:4), §2.4 Add Routine Screen (Frame: 139:1474)

## Summary

Users manage daily skincare, medication, and lifestyle tasks. The tracker displays today's tasks grouped by category with completion checkboxes, a weekly calendar strip, and a progress summary. A separate "Add Routine Task" flow lets users create new recurring tasks.

## Acceptance Criteria

- Weekly calendar strip shows completed (checkmark) and upcoming days
- Progress bar and "X of Y tasks completed" updates on each toggle
- Tasks grouped by category (Skincare, Medications, Lifestyle) with per-task checkbox
- FAB navigates to the Add Routine Task screen
- Add Routine form: category, task name, icon, time, frequency, notes
- Saving a new task adds it to the routine list immediately

## Non-Functional Requirements

- **Performance:** Checkbox toggle is optimistic (instant UI, background sync)
- **Data:** Tasks and completions stored in Supabase with RLS
- **Accessibility:** Checkboxes have accessible labels; FAB labeled for screen readers

## Stories

| Story | Folder | Summary |
|-------|--------|---------|
| Daily Routine View | `01-daily-routine-view/` | Calendar strip, progress bar, task list with checkboxes |
| Add Routine Task | `02-add-routine-task/` | Form to create a new routine task |
