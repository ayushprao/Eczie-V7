# Story: Profile Display & Stats

**Epic:** Profile Management
**PRD Ref:** §2.8.1 Header, §2.8.2 User Profile Card, §2.8.3 Stats Grid, §2.8.4 Symptom Calendar

## Summary

Top section of the Profile screen: header, user identity card, lifetime stats grid, and a reusable monthly symptom calendar.

## Functional Requirements

- Header: back button, title "Profile", gear icon (→ settings, placeholder for v1)
- **User Profile Card:**
  - Circular avatar (from Supabase storage or default placeholder)
  - Full name and email from profile record
  - Subscription badge (e.g., "Pro Trial") + trial status ("5 days left" with green dot)
- **Stats Grid (2×2):**
  - Total Logs — count of all symptom log entries
  - Best Streak — longest consecutive logging streak
  - Average Severity — all-time average severity score
  - Last Backup — date of last data export (or "Never")
- **Symptom Calendar:**
  - Same component as Insights (§2.6.6) — month navigation, emoji severity icons, current day highlight
  - Reused shared component; no duplicate logic

## Non-Functional Requirements

- Stats computed via Supabase aggregate query; cached with react-query
- Avatar upload not in scope for v1 (use default or Supabase Auth avatar)

## Open Design Gaps

- GAP-013: Settings screen — placeholder gear icon for v1; settings screen deferred

## Designs

Place any reference screenshots in `designs/`.
