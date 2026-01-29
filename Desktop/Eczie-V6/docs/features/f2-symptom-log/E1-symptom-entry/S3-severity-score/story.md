# S3: Severity Score

## References
- Feature: F2 - Symptom Log
- Epic: E1 - Symptom Entry
- PRD Section: 2.2.3

## User Story

As a user, I want to see a calculated severity score so that I understand my overall symptom level at a glance.

## Acceptance Criteria

- [ ] Display severity score as decimal (e.g., "5.3")
- [ ] Display label "Severity Score"
- [ ] Display sublabel "Based on your symptoms"
- [ ] Display emoji icon matching severity level
- [ ] Score updates in real-time as sliders change

## UX Requirements

- Score prominently displayed below sliders
- Emoji icon: happy (0-3), neutral (4-6), sad (7-10)
- Score rounded to 1 decimal place
- Visual container distinguishes this from sliders

## Non-Functional Requirements

- Calculation: average of three slider values
- Formula: (itchiness + redness + dryness) / 3
- No network call required
- Accessible: score and severity level announced

## Dependencies

- Symptom sliders (S2)

## Design Notes

Check `story-images/` for score display. Use severity color tokens for emoji/icon coloring.
