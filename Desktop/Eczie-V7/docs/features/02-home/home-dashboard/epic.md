# Epic: Home Dashboard

**Feature:** Home
**PRD Ref:** §2.1 Home Screen (Frame: 23:241)

## Summary

The Home screen is the primary entry point after login. It surfaces a personalized greeting, daily skin status check-in, action cards to launch logging flows, progress metrics, streak tracking, and environmental trigger risk data. It also hosts the shared bottom tab navigation.

## Acceptance Criteria

- Displays personalized header with date, greeting, mascot, and streak badge
- Affirmation card shows rotating supportive messages
- Skin status selector (Clear / Moderate / Flaring) persists selection for the day
- Action cards navigate to Symptom Log and Routine Tracker
- Progress section shows flare-free days, moderate days, and flares this month
- Streak card displays current logging streak with day indicators
- Environmental panel shows temperature, humidity, pollen, and calculated trigger risk
- Bottom tab bar navigates between Home, Insights, Chat, Profile

## Non-Functional Requirements

- **Performance:** Home renders within 1 s; environmental data may lazy-load
- **Offline:** Show last-cached data with "offline" indicator
- **Accessibility:** WCAG AA contrast; 44pt minimum tap targets; no layout shifts

## Stories

| Story | Folder | Summary |
|-------|--------|---------|
| Hero Header & Greeting | `01-hero-header-greeting/` | Date, name, mascot, streak badge |
| Affirmation Card | `02-affirmation-card/` | Rotating supportive messages |
| Skin Status Selector | `03-skin-status-selector/` | Daily skin check-in (Clear/Moderate/Flaring) |
| Action Cards | `04-action-cards/` | "Complete Entry" and "Track Routine" navigation |
| Progress & Streak | `05-progress-and-streak/` | Metrics + streak card with day indicators |
| Environmental Data | `06-environmental-data/` | Weather, pollen, trigger risk panel |
| Bottom Navigation | `07-bottom-navigation/` | Shared tab bar (Home, Insights, Chat, Profile) |
