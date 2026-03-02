# Story: Insights Summary & Trends

**Epic:** Insights Dashboard
**PRD Ref:** §2.6.1 Header, §2.6.2 AI Summary Card, §2.6.3 Average Severity Card, §2.6.4 Symptom Trends

## Summary

Top section of the Insights screen: header, AI-generated weekly summary card, average severity with trend arrow, and per-symptom horizontal trend bars.

## Functional Requirements

- Header: back button, title "Insights", three-dot menu
- **AI Summary Card** (gradient blue):
  - Title: "Your Week at a Glance"
  - Body: AI-generated 1–2 sentence summary of the week's patterns
  - "View Full Report →" link navigates to Weekly Insights Report
- **Average Severity Card:**
  - Chart icon, label "Average Symptom Severity"
  - Numeric score (e.g., "5.7 / 10")
  - Trend indicator: up/down arrow with delta value, color-coded (green = improvement)
- **Symptom Trends:**
  - Three horizontal bars: Itchiness, Redness, Dryness
  - Each shows value out of 10 with gradient fill

## Non-Functional Requirements

- AI summary generated weekly by backend job; cached and served from Supabase
- Trend computed by comparing current week average to prior week
- If insufficient data (< 3 days logged), show "Log more days for insights"

## Designs

Place any reference screenshots in `designs/`.
