# E3: Environmental Context

## Feature Reference
- Feature: F1 - Home Dashboard
- PRD Section: 2.1.7

## Epic Overview

Displays environmental data (weather, humidity, pollen) and calculated trigger risk to help users understand external factors affecting their skin.

## Stories

| ID | Story | Description |
|----|-------|-------------|
| S1 | Environmental Metrics | Temperature, humidity, pollen display |
| S2 | Trigger Risk Panel | Risk level with description |

## Acceptance Criteria (Epic-Level)

- [ ] User sees current location and update timestamp
- [ ] User sees temperature, humidity, pollen metrics
- [ ] User sees trigger risk level with explanation
- [ ] Data refreshes on pull-to-refresh or screen focus

## UX Requirements

- Environmental section at bottom of Home (below fold)
- Stale data shows "Last updated: {time}" indicator
- Graceful fallback if API unavailable
