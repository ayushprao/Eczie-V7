# Epic: Auth & Session Management

**Feature:** Auth & Onboarding
**Status:** Placeholder — screens not yet provided in PRD/Figma

## Summary

Establish the authentication foundation: signup, login, session persistence, and a lightweight onboarding flow that captures the minimum data needed for personalization (name, location for environmental data).

## Acceptance Criteria

- User can sign up with email/password (Supabase Auth)
- User can log in and maintain a persistent session
- Session tokens refresh silently; expired sessions redirect to login
- First-time users see a brief onboarding collecting: first name, optional location
- All auth flows enforce HIPAA-grade transport encryption

## Non-Functional Requirements

- **Security:** Supabase RLS active from day one; no PHI exposed in tokens or logs
- **Performance:** Auth round-trip < 2 s on 3G
- **UX:** Empathy-first tone in all auth copy; no guilt or pressure language

## Stories

| Story | Folder | Summary |
|-------|--------|---------|
| Login & Signup | `01-login-signup/` | Email/password auth with Supabase |
| Onboarding Flow | `02-onboarding-flow/` | First-run data collection & welcome |

## Design References

No designs provided yet. When added, place snapshots in each story's `designs/` folder.
