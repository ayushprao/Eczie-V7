# E1: Home Screen Core

## Feature Reference
- Feature: F1 - Home Dashboard
- PRD Section: 2.1.1 - 2.1.4

## Epic Overview

Implements the core home screen layout including personalized header, daily skin status check-in, and primary action cards for navigating to symptom logging and routine tracking.

## Stories

| ID | Story | Description |
|----|-------|-------------|
| S1 | Greeting & Header | Date display, personalized greeting, streak badge |
| S2 | Affirmation Card | Daily affirmation with tap interaction |
| S3 | Skin Status Selector | Three-option status picker with auto-save |
| S4 | Action Cards | Navigation cards to Symptom Log and Routine Tracker |

## Acceptance Criteria (Epic-Level)

- [ ] User sees personalized greeting on load
- [ ] User can select daily skin status
- [ ] User can navigate to Symptom Log
- [ ] User can navigate to Routine Tracker
- [ ] Bottom navigation is visible and functional

## UX Requirements

- Above-the-fold: Header, skin status, action cards
- Load time: Screen renders within 1 second
- Greeting updates based on time of day (optional enhancement)
