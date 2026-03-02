# Epic: Insights Dashboard

**Feature:** Insights
**PRD Ref:** §2.6 Insights Screen (Frame: 44:6)

## Summary

A read-only analytics surface showing the user's AI-generated weekly summary, average severity score with trend, per-symptom trend bars, a 7-day severity line chart, a monthly symptom calendar, and a list of recent log entries.

## Acceptance Criteria

- AI summary card ("Your Week at a Glance") with link to Weekly Insights Report
- Average severity score with directional trend indicator
- Per-symptom trend bars (Itchiness, Redness, Dryness) with values
- 7-day severity line chart (Su–Sa)
- Monthly symptom calendar with emoji severity icons and navigation arrows
- Recent logs list with severity, description, and tap-to-detail navigation

## Non-Functional Requirements

- **Performance:** Charts render within 500 ms; data fetched on mount
- **Data:** All aggregations computed server-side or via Supabase view
- **Accessibility:** Chart data also available as text (screen-reader accessible)

## Stories

| Story | Folder | Summary |
|-------|--------|---------|
| Insights Summary & Trends | `01-insights-summary-and-trends/` | AI summary card, average severity, symptom trend bars |
| Severity Chart & Calendar | `02-severity-chart-and-calendar/` | 7-day line chart + monthly emoji calendar |
| Recent Logs | `03-recent-logs/` | List of recent log entries with severity and description |
