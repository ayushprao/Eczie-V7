# Story: Hero Header & Greeting

**Epic:** Home Dashboard
**PRD Ref:** §2.1.1 Header Section

## Summary

Render the Home screen hero area: current date label, personalized greeting ("Welcome back, {name}"), Eczie mascot illustration, and streak badge pill ("X days strong").

## Functional Requirements

- Display current date formatted as "FRIDAY · JUNE 21"
- Greet user by first name from profile data
- Show Eczie mascot illustration in the hero background
- Show streak badge pill with current consecutive logging days

## Non-Functional Requirements

- Streak count sourced from logged-entry data; 0-day fallback if no logs
- Mascot asset optimized for mobile (compressed PNG or SVG)

## UX Notes

- Warm, inviting header sets the tone for the session
- Streak badge is motivational, not guilt-inducing — if streak is 0, hide badge or show encouraging copy

## Designs

Place any reference screenshots in `designs/`.
