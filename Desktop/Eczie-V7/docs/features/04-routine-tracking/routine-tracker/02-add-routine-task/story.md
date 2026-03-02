# Story: Add Routine Task

**Epic:** Routine Tracker
**PRD Ref:** §2.4.1–§2.4.8 (Add Routine Screen)

## Summary

A form screen for creating a new routine task with category, name, icon, time, frequency, and optional notes.

## Functional Requirements

- Header: back button → Routine Tracker, title "Add New Routine Task"
- Category selection: Skincare / Medications / Lifestyle — single-select, mutually exclusive
- Task Name: text input, required, placeholder "Apply Moisturizer"
- Icon selection: horizontal scroll of 5 icons, single-select (lotion, pills, water, exercise, chart)
- Time selection: AM / PM / Specific Time — single-select
  - "Specific Time" reveals a time picker (system default format)
- Frequency: Daily / Custom — single-select
  - "Custom" reveals day-of-week multi-select (M T W T F S S)
- Notes: optional multi-line textarea
- "Save Task" button: validates required fields → saves to Supabase → navigates back to Routine Tracker

## Non-Functional Requirements

- Task name: max 100 characters
- Notes: max 250 characters
- Validation errors shown inline below fields
- Loading state on save button during persistence

## Open Design Gaps

- GAP-004: Specific Time picker UI — defaulting to native time picker
- GAP-005: Custom frequency UI — defaulting to day-of-week chip row

## Designs

Place any reference screenshots in `designs/`.
