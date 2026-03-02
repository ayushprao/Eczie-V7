# Epic: Profile Management

**Feature:** Profile
**PRD Ref:** §2.8 Profile Screen (Frame: 223:561)

## Summary

The Profile screen surfaces user identity, lifetime stats, a symptom calendar, data management actions (log history, export, delete entries, edit profile), about/support links, a beta tester acknowledgment, and account lifecycle actions (sign out, delete account). Auth-related actions (sign out, delete account) are inlined here as they are tightly coupled to the profile context.

## Acceptance Criteria

- User profile card: avatar, name, email, subscription badge, trial status
- Stats grid: Total Logs, Best Streak, Average Severity, Last Backup
- Symptom calendar (reused from Insights) with monthly navigation
- Data & History menu: Log History, Export Data, Delete Entries, Edit Personal Details
- About & Support menu: FAQ, Privacy Policy, Feedback, Version info
- Beta Tester card with thank-you copy
- Sign Out and Delete Account actions with confirmation flows

## Non-Functional Requirements

- **Security:** Delete Account must wipe all user data (logs, photos, routines, chat history) per HIPAA
- **Performance:** Profile loads from cached user data; stats may lazy-load
- **Accessibility:** All menu items are tappable list rows with 44pt targets

## Stories

| Story | Folder | Summary |
|-------|--------|---------|
| Profile Display & Stats | `01-profile-display-and-stats/` | User card, stats grid, symptom calendar |
| Data & History | `02-data-and-history/` | Log history, export, delete entries, edit profile |
| About & Support | `03-about-and-support/` | FAQ, privacy, feedback, version |
| Account Lifecycle | `04-account-lifecycle/` | Sign out, delete account (auth inlined) |
