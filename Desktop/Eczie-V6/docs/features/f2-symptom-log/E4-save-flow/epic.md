# E4: Save Flow

## Feature Reference
- Feature: F2 - Symptom Log
- PRD Section: 2.2.9

## Epic Overview

Implements the save action for symptom logs including button interaction, loading state, success confirmation, and error handling.

## Stories

| ID | Story | Description |
|----|-------|-------------|
| S1 | Save Button & Confirmation | Save action with feedback states |

## Acceptance Criteria (Epic-Level)

- [ ] User can save log entry with single tap
- [ ] User sees loading state during save
- [ ] User sees success confirmation
- [ ] User is navigated back to Home on success
- [ ] User sees error message on failure

## UX Requirements

- Save button is sticky at bottom of screen
- Button disabled during save operation
- Success feedback is brief (toast or inline)
