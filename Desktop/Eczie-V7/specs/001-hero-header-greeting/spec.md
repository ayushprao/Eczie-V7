# Feature Specification: Hero Header & Greeting

**Feature Branch**: `001-hero-header-greeting`
**Created**: 2026-03-02
**Status**: Draft
**Input**: Story — docs/features/02-home/home-dashboard/01-hero-header-greeting/story.md; PRD §2.1.1

## User Scenarios & Testing

### User Story 1 — Date & Greeting Display (Priority: P1)

A returning user opens the Home screen and immediately sees today's
date and a personalized greeting using their first name, establishing
a warm, familiar tone for the session.

**Why this priority**: The greeting is the very first element the
user perceives. It anchors trust and personalization; without it the
header is generic and impersonal.

**Independent Test**: Load the Home screen while authenticated.
Verify the date label and greeting render correctly with the user's
first name.

**Acceptance Scenarios**:

1. **Given** the user is authenticated and has a profile with
   first name "Ayush", **When** they open the Home screen on
   Friday June 21 2025, **Then** they see "FRIDAY · JUNE 21"
   as the date label and "Welcome back, Ayush" as the greeting.
2. **Given** the user's profile has no first name set, **When**
   they open the Home screen, **Then** the greeting falls back
   to "Welcome back" (no trailing comma or blank).
3. **Given** the date changes while the app is foregrounded
   (past midnight), **When** the user returns to the Home screen,
   **Then** the date label reflects the new day.

---

### User Story 2 — Streak Badge Pill (Priority: P2)

The user sees a motivational streak badge ("X days strong") inside
the hero header that reflects their consecutive daily logging count,
reinforcing consistency without guilt.

**Why this priority**: Streak visibility drives retention and aligns
with the core user loop (log → see progress → feel motivated →
return). It depends on log data but adds significant emotional value.

**Independent Test**: Create test accounts with varying streak counts
(0, 1, 7, 30+). Verify correct badge display or absence.

**Acceptance Scenarios**:

1. **Given** the user has logged symptoms on 8 consecutive days
   including today, **When** they view the Home screen, **Then**
   the streak badge displays "8 days strong".
2. **Given** the user has logged symptoms on 8 consecutive days
   but has not yet logged today, **When** they view the Home
   screen, **Then** the streak badge displays "8 days strong"
   (today's absence does not break the streak until the day ends).
3. **Given** the user has never logged (streak is 0), **When**
   they view the Home screen, **Then** the streak badge area is
   hidden (no badge and no copy).
4. **Given** the user's streak is 1, **When** they view the Home
   screen, **Then** the badge displays "1 day strong" (singular).

---

### User Story 3 — Mascot Illustration (Priority: P3)

The Eczie mascot appears in the hero header background, setting the
app's empathetic visual identity.

**Why this priority**: The mascot is a static decorative asset that
reinforces brand identity. It carries no data dependency and has the
lowest functional risk, but it is important for the emotional tone.

**Independent Test**: Load the Home screen and verify the mascot
image renders in the hero area at the correct size without layout
shifts.

**Acceptance Scenarios**:

1. **Given** the Home screen loads, **When** the hero header
   renders, **Then** the Eczie mascot illustration is visible
   in the hero background area.
2. **Given** the mascot asset fails to load (network error or
   corrupt file), **When** the hero header renders, **Then**
   the header remains visually intact with no broken-image icon
   and no layout shift.

---

### Edge Cases

- What happens when the user's locale uses a different date format?
  The date label MUST localize weekday/month names to the device
  locale while keeping the same label shape (UPPERCASE +
  "WEEKDAY · MONTH DAY").
- How does the header behave on very small screens (SE-size)?
  The hero area MUST scale gracefully; greeting text MUST truncate
  with ellipsis on a single line if the name exceeds available width.
- What if the streak computation is still loading? A skeleton
  placeholder MUST preserve the badge's spatial footprint to prevent
  layout shift (Constitution §VI).

## Clarifications

### Session 2026-03-02

- Q: Streak definition → A: Calendar-day streak (local calendar days with >=1 saved log; streak breaks after a full missed day)
- Q: Date locale behavior → A: Localize weekday/month names to device locale, but keep the label shape (UPPERCASE + "WEEKDAY · MONTH DAY")
- Q: Streak=0 behavior → A: Hide streak area entirely (no badge, no copy)
- Q: Long first name handling → A: Keep greeting to 1 line; truncate with ellipsis

## Requirements

### Functional Requirements

- **FR-001**: System MUST display the current date formatted as
  "WEEKDAY · MONTH DAY" using the device locale for weekday/month
  names, while rendering the label in uppercase (e.g., "FRIDAY ·
  JUNE 21").
- **FR-002**: System MUST display a personalized greeting
  "Welcome back, {firstName}" using the authenticated user's
  profile data.
- **FR-003**: If the user's first name is absent or empty, the
  greeting MUST fall back to "Welcome back" with no dangling
  punctuation (no dangling comma).
- **FR-003a**: If the user's first name is too long to fit, the
  greeting MUST remain a single line and truncate with an ellipsis.
- **FR-004**: System MUST display a streak badge pill showing
  "{N} days strong" (or "1 day strong" for singular) when the
  user's consecutive logging streak is ≥ 1.
- **FR-005**: System MUST define streak as a **calendar-day streak**
  in the user's local timezone: consecutive local calendar days with
  ≥ 1 saved symptom log per day; streak breaks only after a full
  missed day.
- **FR-006**: When the streak count is 0, the streak badge area
  MUST be hidden entirely (no badge and no copy) — no guilt
  messaging (Constitution §II).
- **FR-007**: The Eczie mascot illustration MUST render in the
  hero header background area.
- **FR-008**: The hero header MUST NOT shift layout while data
  loads; skeleton placeholders MUST preserve spatial stability
  (Constitution §VI).
- **FR-009**: All interactive elements within the hero area MUST
  meet the 44pt minimum touch target (Constitution §VI).

### Key Entities

- **UserProfile**: Represents the authenticated user. Key
  attributes: `firstName`, `userId`.
- **LoggingStreak**: Derived metric representing the count of
  consecutive calendar days with at least one saved symptom log.
  Key attributes: `currentStreak` (integer ≥ 0),
  `lastLoggedDate`.

## Success Criteria

### Measurable Outcomes

- **SC-001**: Date label and greeting render within 300 ms of Home
  screen mount with authenticated profile data available.
- **SC-002**: Streak badge displays the correct count matching the
  user's consecutive log history with zero discrepancy.
- **SC-003**: When streak is 0, 100% of test sessions show
  encouraging copy instead of "0 days strong".
- **SC-004**: Mascot illustration loads without triggering any
  layout shift (Cumulative Layout Shift delta = 0 for the hero
  area).
- **SC-005**: Hero header passes WCAG AA contrast requirements
  for all text elements against the hero background.

## Assumptions

- Streak is calculated based on calendar days in the user's local
  timezone; a day without a saved log breaks the streak at the end
  of that day (not retroactively).
- The mascot asset is bundled locally with the app (not fetched
  remotely), so no network dependency for the illustration.
- The hero header is not independently scrollable; it is a fixed
  section at the top of the Home screen scroll view.