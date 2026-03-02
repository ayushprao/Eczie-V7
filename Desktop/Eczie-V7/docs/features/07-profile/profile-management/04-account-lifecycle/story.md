# Story: Account Lifecycle

**Epic:** Profile Management
**PRD Ref:** §2.8.8 Account Actions

## Summary

Sign out and delete account flows, inlined under Profile since this is where users access them.

## Functional Requirements

### Sign Out
- "Sign Out" outline button with icon
- Tapping shows confirmation dialog: "Are you sure you want to sign out?"
- Confirm → clear local session, navigate to Login screen
- Cancel → dismiss dialog

### Delete Account
- "Delete Account" red text link
- Tapping shows a two-step confirmation:
  1. First dialog: "Deleting your account will permanently erase all your data. This cannot be undone."
  2. User must type "DELETE" to confirm (prevents accidental deletion)
- On confirm: backend deletes all user data (profile, logs, photos, routines, chat history) → sign out → navigate to Login
- On cancel: dismiss dialog

## Non-Functional Requirements

- **HIPAA:** Account deletion must cascade to all PHI: Supabase rows, Storage objects, any derived analytics
- Deletion is irreversible; no soft-delete / recovery window
- Backend deletion endpoint with RLS verification (user can only delete own data)
- Loading state during deletion process

## Open Design Gaps

- GAP-007: Delete account confirmation — specified above as two-step with typed confirmation

## Designs

Place any reference screenshots in `designs/`.
