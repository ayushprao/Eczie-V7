# S1: Save Button & Confirmation

## References
- Feature: F2 - Symptom Log
- Epic: E4 - Save Flow
- PRD Section: 2.2.9

## User Story

As a user, I want to save my symptom log with clear feedback so that I know my data is recorded.

## Acceptance Criteria

- [ ] Display "Save Symptom Log" button at bottom of screen
- [ ] Button is full-width, primary style
- [ ] Tapping button initiates save operation
- [ ] Button shows loading spinner during save
- [ ] Button is disabled during save (prevent double-tap)
- [ ] On success: show brief toast "Log saved", navigate to Home
- [ ] On error: show inline error message, re-enable button
- [ ] Form data preserved on error for retry

## UX Requirements

- Button sticky at bottom, above safe area
- Loading state replaces button text with spinner
- Toast auto-dismisses after 2 seconds
- Error message appears above button

## Non-Functional Requirements

- Save operation timeout: 10 seconds
- Offline: queue save, show "Saved offline, will sync when online"
- Accessible: button state changes announced

## Dependencies

- All form sections (E1, E2, E3)
- Daily log data persistence
- Navigation to Home

## Design Notes

Check `story-images/` for button placement. Use Primary Button component with loading state.
