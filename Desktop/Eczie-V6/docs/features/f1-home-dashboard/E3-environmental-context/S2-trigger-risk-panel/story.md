# S2: Trigger Risk Panel

## References
- Feature: F1 - Home Dashboard
- Epic: E3 - Environmental Context
- PRD Section: 2.1.7

## User Story

As a user, I want to see my current trigger risk level so that I can take preventive action if environmental conditions are unfavorable.

## Acceptance Criteria

- [ ] Display "Trigger Risk:" label
- [ ] Display risk status (e.g., "Elevated", "Low", "High")
- [ ] Display description explaining the risk (e.g., "High pollen may trigger symptoms")
- [ ] Risk level uses appropriate severity color

## UX Requirements

- Panel appears below environmental metrics
- Risk status is prominent
- Description provides actionable context
- Colors: Low = severityLow, Moderate = severityModerate, High = severityHigh

## Non-Functional Requirements

- Risk calculated from environmental data + user's historical triggers
- If calculation not possible, show "Unable to assess risk"
- Accessible: risk level and description announced

## Dependencies

- Environmental metrics (S1)
- User's trigger history (from logs)

## Design Notes

Check `story-images/` for panel design. Risk calculation logic: if any current environmental factor matches user's top triggers, elevate risk.
