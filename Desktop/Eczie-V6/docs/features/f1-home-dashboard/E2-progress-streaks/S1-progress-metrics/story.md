# S1: Progress Metrics

## References
- Feature: F1 - Home Dashboard
- Epic: E2 - Progress & Streaks
- PRD Section: 2.1.5

## User Story

As a user, I want to see my monthly progress metrics so that I understand my skin health trends at a glance.

## Acceptance Criteria

- [ ] Display "Flare-free Days" with count
- [ ] Display "Moderate Days" with count
- [ ] Display "Flares this Month" with count
- [ ] Metrics calculated from current month's logs
- [ ] Section header "Your Progress" displayed

## UX Requirements

- Metrics displayed in grid layout (3 cards)
- Each metric shows numeric value prominently with label below
- Values update when returning to Home after logging

## Non-Functional Requirements

- Metrics calculated from local log data
- Calculation runs on screen focus (not continuous)
- Accessible: each metric card announces value and label

## Dependencies

- Daily log data with severity classification

## Design Notes

Check `story-images/` for metric card layout. Use Metric Card component from design system.
