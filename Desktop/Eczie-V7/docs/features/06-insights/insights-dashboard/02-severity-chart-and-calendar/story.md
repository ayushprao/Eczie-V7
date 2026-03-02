# Story: Severity Chart & Calendar

**Epic:** Insights Dashboard
**PRD Ref:** §2.6.5 Flare Severity Chart, §2.6.6 Symptom Calendar

## Summary

A 7-day severity line chart and a monthly calendar grid with emoji severity indicators.

## Functional Requirements

### Flare Severity Chart
- Line graph: Y-axis 0–10, X-axis Su–Sa (last 7 days)
- Blue gradient line connecting daily severity scores
- Missing days shown as gaps (no interpolation)

### Symptom Calendar
- Month label (e.g., "June 2024") with left/right navigation arrows
- 7-column grid (Su–Sa), standard calendar layout
- Days with logs show emoji face based on severity:
  - Green happy = Clear (severity ≤ 3)
  - Yellow neutral = Moderate (severity 4–6)
  - Red sad = Flaring (severity ≥ 7)
- Current day has blue highlight ring
- Days without logs are empty
- Future days are gray

## Non-Functional Requirements

- Chart library: lightweight (e.g., Victory Native or react-native-chart-kit)
- Calendar navigable to past months only (no future)
- Data sourced from daily summary records

## Designs

Place any reference screenshots in `designs/`.
