# Story: About & Support

**Epic:** Profile Management
**PRD Ref:** §2.8.6 About and Support Section, §2.8.7 Beta Tester Card

## Summary

Support links, app info, and the beta tester acknowledgment card.

## Functional Requirements

| Menu Item | Behavior |
|-----------|----------|
| **FAQ and Support** (question mark icon) | Navigate to in-app FAQ screen or open external support URL |
| **Privacy Policy** (document icon) | Open external privacy policy URL in system browser |
| **Send Feedback and Feature Requests** (message icon) | Open feedback form (in-app text area → sends to support email or third-party tool) |
| **Version and Build** (info icon) | Static display: "v2.1.3 – Build 47" (values from app config) |

- **Beta Tester Card:**
  - Star badge icon
  - Title: "You're an Early Beta Tester!"
  - Body: thank-you copy acknowledging user's contribution
  - Conditionally shown only for beta users (flag in user profile)

## Non-Functional Requirements

- FAQ content: static markdown or hosted page (not in-app CMS for v1)
- Feedback submission: fire-and-forget to backend endpoint
- Privacy policy URL configurable via app config / env var

## Open Design Gaps

- GAP-020: FAQ, Privacy Policy, Feedback screens — defaulting to external URLs for FAQ/Privacy, in-app textarea for Feedback

## Designs

Place any reference screenshots in `designs/`.
