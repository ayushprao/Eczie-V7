# S3: Progress Summary

## References
- Feature: F3 - Routine Tracker
- Epic: E1 - Routine Display
- PRD Section: 2.3.3

## User Story

As a user, I want to see my daily progress so that I know how many tasks remain.

## Acceptance Criteria

- [ ] Display "{completed} of {total} tasks completed"
- [ ] Display percentage (e.g., "37%")
- [ ] Display progress bar with fill matching percentage
- [ ] Values update immediately when tasks are toggled

## UX Requirements

- Progress bar uses primaryAction color for fill
- Percentage displayed prominently
- Summary text is secondary

## Non-Functional Requirements

- Calculation: (completed / total) * 100, rounded to integer
- Accessible: progress announced as "{N} percent complete"

## Dependencies

- Task list data

## Design Notes

Check `story-images/` for progress bar styling. Use Progress Bar component.
