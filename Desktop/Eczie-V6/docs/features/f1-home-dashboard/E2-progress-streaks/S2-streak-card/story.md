# S2: Streak Card

## References
- Feature: F1 - Home Dashboard
- Epic: E2 - Progress & Streaks
- PRD Section: 2.1.6

## User Story

As a user, I want to see my logging streak so that I stay motivated to log consistently.

## Acceptance Criteria

- [ ] Display streak count as "{N} Day Streak"
- [ ] Display supportive subtitle "Consistency is healing"
- [ ] Show 7 day indicators (M, T, W, T, F, S, S)
- [ ] Completed days show filled state
- [ ] Current day shows highlighted state
- [ ] Future days show outline state

## UX Requirements

- Streak card is visually distinct (Status Card component)
- Day indicators are compact circles
- No negative messaging if streak is 0 or broken
- If streak is 0, show "Start your streak today"

## Non-Functional Requirements

- Streak calculated from consecutive daily logs
- A day counts as logged if any symptom entry exists
- Accessible: streak count announced, day states conveyed

## Dependencies

- Daily log records with dates

## Design Notes

Check `story-images/` for streak card design. Follow emotional modulation rules from design system.
