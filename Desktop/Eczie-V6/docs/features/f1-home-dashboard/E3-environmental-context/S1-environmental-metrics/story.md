# S1: Environmental Metrics

## References
- Feature: F1 - Home Dashboard
- Epic: E3 - Environmental Context
- PRD Section: 2.1.7

## User Story

As a user, I want to see current environmental conditions so that I can understand external factors that may affect my skin.

## Acceptance Criteria

- [ ] Display current location name (e.g., "New York")
- [ ] Display "Updated just now" or relative timestamp
- [ ] Display temperature with unit (e.g., "32°C")
- [ ] Display humidity percentage (e.g., "72%")
- [ ] Display pollen level (e.g., "High")

## UX Requirements

- Location and timestamp in header row
- Metrics in horizontal row below
- Each metric has icon and value
- Use device locale for temperature unit (C/F)

## Non-Functional Requirements

- Fetch from weather/environmental API
- Cache data for 30 minutes
- If offline, show cached data with stale timestamp
- If no data available, show placeholder "Data unavailable"
- Accessible: metrics announced with labels

## Dependencies

- Device location permission
- Environmental data API integration

## Design Notes

Check `story-images/` for layout. If API source undefined, implement with mock data and flag for later integration.
