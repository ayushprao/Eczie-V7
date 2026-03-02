# Story: Login & Signup

**Epic:** Auth & Session Management
**PRD Ref:** §4 Technical Constraints (Supabase Auth), §2.8.8 Account Actions

## Summary

Implement email/password signup and login screens powered by Supabase Auth. Handle session persistence, token refresh, and error states.

## Functional Requirements

- Email + password signup with validation (valid email, min 8-char password)
- Email + password login
- Persisted session via Supabase refresh tokens
- Error states: invalid credentials, network failure, account already exists
- "Forgot password" triggers Supabase password-reset email

## Non-Functional Requirements

- Transport over HTTPS; no PHI in client logs
- Loading indicator during auth requests
- Accessible form inputs (labels, focus order, error announcements)

## UX Notes

- Calm, supportive copy — no clinical or aggressive language
- Clear inline validation feedback

## Designs

Place any reference screenshots in `designs/`.
