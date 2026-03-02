# Story: Environmental Data

**Epic:** Home Dashboard
**PRD Ref:** §2.1.7 Environmental Data (Weather + Trigger Risk)

## Summary

Show current environmental conditions (temperature, humidity, pollen) and a calculated trigger risk level based on those conditions and the user's historical trigger data.

## Functional Requirements

- Display user's location name (from profile or device location)
- Show "Updated just now" / relative timestamp
- Metrics row: Temperature (°C/°F), Humidity (%), Pollen level (Low/Medium/High)
- Trigger Risk panel: risk label (Low/Elevated/High) + short description

## Non-Functional Requirements

- Data sourced from a weather/pollen API (e.g., OpenWeatherMap, Ambee) via backend proxy
- Graceful fallback if API unavailable: "Environmental data unavailable" with retry
- Lazy-loaded — does not block Home screen render
- Location permission requested once; cached thereafter

## Open Design Gaps

- GAP-015: Exact API source and trigger risk calculation formula TBD

## Designs

Place any reference screenshots in `designs/`.
