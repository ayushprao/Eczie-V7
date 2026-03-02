# Story: Progress & Streak

**Epic:** Home Dashboard
**PRD Ref:** §2.1.5 Your Progress, §2.1.6 Streak Card

## Summary

Display the user's monthly progress metrics and current logging streak.

## Functional Requirements

### Progress Section
- Show three metrics: Flare-free Days, Moderate Days, Flares this Month
- Values computed from the current calendar month's daily summary records

### Streak Card
- Show current consecutive logging streak count (e.g., "8 Day Streak")
- Supportive subtitle (e.g., "Consistency is healing")
- Day indicator row (M–S) showing completed vs. upcoming days for the current week

## Non-Functional Requirements

- Streak resets if a day is missed (no partial credit)
- If streak is 0, show encouraging copy instead of "0 Day Streak"
- Data derived from local cache / Supabase query on mount

## Designs

Place any reference screenshots in `designs/`.
