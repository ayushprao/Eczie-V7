# Story: Onboarding Flow

**Epic:** Auth & Session Management
**PRD Ref:** §1.2 Primary Goal, §2.1.1 Header (personalized greeting)

## Summary

After first signup, guide the user through a minimal onboarding collecting their first name (used in Home greeting) and optional location (used for environmental data). Introduce the Eczie mascot and set expectations.

## Functional Requirements

- Collect first name (required) — used in "Welcome back, {name}"
- Collect location (optional) — used for weather/trigger risk on Home
- Show Eczie mascot introduction with brief app value prop
- Mark onboarding complete so it does not re-show
- Skip-able but encouraged

## Non-Functional Requirements

- Must complete in < 3 screens / 30 seconds
- Data saved to user profile in Supabase with RLS

## UX Notes

- Warm, welcoming tone; Eczie mascot visible
- No medical jargon; set expectation that this is a companion, not a diagnosis tool

## Designs

Place any reference screenshots in `designs/`.
