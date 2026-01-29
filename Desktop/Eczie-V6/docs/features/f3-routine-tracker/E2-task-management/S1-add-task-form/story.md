# S1: Add Task Form

## References
- Feature: F3 - Routine Tracker
- Epic: E2 - Task Management
- PRD Section: 2.4.1 - 2.4.8

## User Story

As a user, I want to add new routine tasks so that I can customize my daily tracking.

## Acceptance Criteria

- [ ] Display header with back button and title "Add New Routine Task"
- [ ] Display category selection: Skincare, Medications, Lifestyle (single-select)
- [ ] Display "Task Name" text input with placeholder "Apply Moisturizer"
- [ ] Display icon selection with horizontal scroll (lotion, pills, water, person, chart)
- [ ] Display time selection: AM, PM, Specific Time (single-select)
- [ ] Display frequency selection: Daily, Custom (single-select)
- [ ] Display "Notes (Optional)" textarea
- [ ] Display "Save Task" button
- [ ] Task name is required - show error if empty on save
- [ ] On save success: navigate to Routine Tracker, task appears in list
- [ ] On save error: show error message, preserve form data

## UX Requirements

- Category defaults to Skincare
- Icon defaults to first option
- Time defaults to AM
- Frequency defaults to Daily
- Specific Time shows time picker when selected
- Custom frequency shows day selector when selected

## Non-Functional Requirements

- Task name max 50 characters
- Notes max 500 characters
- Accessible: all form fields properly labeled

## Dependencies

- Task data model
- Routine Tracker list refresh

## Design Notes

Check `story-images/` for form layout. Time picker and custom frequency are design gaps - implement standard pickers.
