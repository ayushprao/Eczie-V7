# F1: Home Dashboard

## Overview

The Home Dashboard is the primary entry point for daily user interaction. It provides at-a-glance status, quick actions to core flows, progress visualization, and environmental context.

## PRD Reference

- Section 2.1: HOME SCREEN

## User Outcomes

- Quickly assess current skin status
- Navigate to symptom logging or routine tracking
- View progress and streak information
- Understand environmental trigger risk

## Epics

| ID | Epic | Description |
|----|------|-------------|
| E1 | Home Screen Core | Header, greeting, skin status, action cards |
| E2 | Progress & Streaks | Progress metrics and streak visualization |
| E3 | Environmental Context | Weather data and trigger risk display |

## Dependencies

- Bottom navigation (shared component)
- User authentication (for personalized greeting)
- Environmental data API (for weather/pollen)

## Out of Scope

- Affirmation content management (content strategy, not implementation)
- Environmental data source selection (infrastructure decision)
