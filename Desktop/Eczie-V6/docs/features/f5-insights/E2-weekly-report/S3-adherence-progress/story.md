# S3: Adherence & Progress

## References
- Feature: F5 - Insights
- Epic: E2 - Weekly Report
- PRD Section: 2.7.3 - 2.7.4

## User Story

As a user, I want to see my routine adherence and progress metrics so that I understand my consistency.

## Acceptance Criteria

- [ ] Display "Routine Adherence Summary" section with:
  - Skincare: percentage and task count (e.g., "85% - 6/7 Tasks")
  - Medications: percentage and task count
  - Lifestyle: percentage and task count
  - Overall: percentage
- [ ] Display "Your Progress" section with:
  - Flare-free Days count
  - Moderate Days count
  - Flares this Month count

## UX Requirements

- Adherence shown as progress bars or percentage displays
- Progress metrics in card grid
- Clear visual hierarchy

## Non-Functional Requirements

- Calculated from weekly routine completion data
- Accessible: values announced with labels

## Dependencies

- Routine completion data
- Log severity data

## Design Notes

Check `story-images/` for section layout.
