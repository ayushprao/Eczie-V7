# S1: Greeting & Header

## References
- Feature: F1 - Home Dashboard
- Epic: E1 - Home Screen Core
- PRD Section: 2.1.1

## User Story

As a user, I want to see a personalized greeting with the current date and my streak status so that I feel welcomed and motivated to log today.

## Acceptance Criteria

- [ ] Display current date in format "WEEKDAY · MONTH DAY" (e.g., "FRIDAY · JUNE 21")
- [ ] Display personalized greeting "Welcome back, {firstName}"
- [ ] Display streak badge showing "{N} days strong" if streak > 0
- [ ] Header renders correctly on all supported device sizes

## UX Requirements

- Header is fixed at top of screen
- Greeting uses user's first name from profile
- Streak badge styled as pill/badge element
- If streak is 0, hide streak badge (do not show "0 days")

## Non-Functional Requirements

- User name fetched from cached profile data (no blocking network call)
- Streak count fetched from local storage with background sync
- Accessible: greeting announced by screen reader on page load

## Dependencies

- User authentication (to get first name)
- Streak calculation logic (from daily log records)

## Design Notes

Check `story-images/` for design reference. If not present, ask user for header layout preferences.
