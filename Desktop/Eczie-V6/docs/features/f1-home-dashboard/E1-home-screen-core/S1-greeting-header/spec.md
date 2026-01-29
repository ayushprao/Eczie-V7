# Feature Specification: Greeting Header

**Feature Branch**: `f1-e1-s1-greeting-header`  
**Created**: 2026-01-29  
**Status**: Draft  
**Input**: User description: "F1-E1-S1: greeting header"

## Clarifications

### Session 2026-01-29

- Q: What constitutes a logged day for streak purposes? → A: A day counts toward streak if the user saves a symptom log entry.
- Q: What should be shown when firstName is missing/blank? → A: Show "Welcome back, friend".
- Q: Should the date text be localized to device language? → A: Yes, localize weekday/month to device language while keeping the same structure.
- Q: How should the streak badge handle singular/plural? → A: Use "1 day strong" for 1, and "{N} days strong" for all other values.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Personalized Greeting (Priority: P1)

As a returning user, I want to see a personalized greeting with my first name and the current date so that I feel welcomed and oriented when I open the app.

**Why this priority**: The greeting is the first element users see on the Home screen. A personalized, warm welcome establishes emotional connection and trust, which is critical for an app managing a chronic health condition. This directly supports the "empathy-first" USP.

**Independent Test**: Can be fully tested by logging in as an authenticated user and verifying the greeting displays the correct name and date format. Delivers immediate value by creating a personalized experience.

**Acceptance Scenarios**:

1. **Given** a logged-in user with first name "Ayush", **When** the Home screen loads, **Then** the greeting displays "Welcome back, Ayush"
2. **Given** the current date is Friday, June 21, **When** the Home screen loads, **Then** the date label displays "FRIDAY · JUNE 21"
3. **Given** a logged-in user, **When** the Home screen loads, **Then** the greeting is announced by screen readers for accessibility
4. **Given** a logged-in user whose first name is missing or blank, **When** the Home screen loads, **Then** the greeting displays "Welcome back, friend"

---

### User Story 2 - View Streak Badge (Priority: P2)

As a user who has been logging consistently, I want to see my current streak displayed as a badge so that I feel motivated to continue my daily logging habit.

**Why this priority**: Streak visualization reinforces the "streak-based motivation" USP and supports habit formation. However, it depends on existing log data, making it secondary to the core greeting.

**Independent Test**: Can be tested by creating a user with logged entries on consecutive days and verifying the streak badge displays correctly. Delivers value by providing visual reinforcement of consistency.

**Acceptance Scenarios**:

1. **Given** a user with an 8-day logging streak, **When** the Home screen loads, **Then** the streak badge displays "8 days strong"
2. **Given** a user with a 1-day streak, **When** the Home screen loads, **Then** the streak badge displays "1 day strong"
3. **Given** a user with a 0-day streak (no recent logs), **When** the Home screen loads, **Then** no streak badge is displayed

---

### User Story 3 - View Eczie Mascot (Priority: P3)

As a user, I want to see the Eczie mascot illustration in the hero header so that the app feels friendly and calming.

**Why this priority**: The mascot is decorative and contributes to emotional tone but does not provide functional value. It enhances the experience but is not essential for core functionality.

**Independent Test**: Can be tested by verifying the mascot illustration renders correctly in the hero header area across supported device sizes. Delivers value by establishing brand identity and emotional warmth.

**Acceptance Scenarios**:

1. **Given** the Home screen loads, **When** the header renders, **Then** the Eczie mascot illustration is visible in the hero header area
2. **Given** a user with a screen reader, **When** the mascot is encountered, **Then** it is treated as decorative (not announced or interactive)

---

### Edge Cases

- What happens when the user's first name is not available (null/empty)? Display "Welcome back, friend".
- What happens when the user's first name is extremely long (>30 characters)? Truncate with ellipsis to prevent layout overflow.
- How does the system handle timezone differences for date display? Use the device's local timezone for date formatting.
- What happens if streak data is unavailable or fails to load? Hide the streak badge gracefully without error messaging.
- How does the header render on very small screens (e.g., iPhone SE)? Ensure all elements remain visible and properly spaced with responsive layout.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST display the current date in the format "WEEKDAY · MONTH DAY" using weekday and month names localized to the device language, and rendered in uppercase where applicable (e.g., "FRIDAY · JUNE 21")
- **FR-002**: System MUST display a personalized greeting "Welcome back, {firstName}" using the user's first name from their profile, and MUST display "Welcome back, friend" when firstName is missing or blank
- **FR-003**: System MUST display the Eczie mascot illustration in the hero header area as a decorative, non-interactive element
- **FR-004**: System MUST display a streak badge when the user's streak count is greater than 0, where streak is defined as consecutive days with a saved symptom log entry; the badge copy MUST be "1 day strong" when N=1 and "{N} days strong" when N≠1
- **FR-005**: System MUST hide the streak badge when the user's streak count is 0 (do not show "0 days")
- **FR-006**: System MUST render the header correctly on all supported device sizes (iPhone SE through iPhone Pro Max, and equivalent Android devices)
- **FR-007**: System MUST fetch the user's first name from cached profile data without blocking network calls
- **FR-008**: System MUST fetch the streak count from local storage with background sync capability
- **FR-009**: System MUST announce the greeting via screen reader on page load for accessibility compliance
- **FR-010**: System MUST display the header with a fixed position at the top of the screen with gradient/illustrated background

### Key Entities

- **User Profile**: Contains user's first name used for personalized greeting. Cached locally for fast access.
- **Streak Count**: Numeric value representing consecutive days with a saved symptom log entry. Derived from saved symptom log records, stored locally with background sync.
- **Current Date**: Device-local date used for date label display. Formatted according to specification.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Header renders within 100ms of Home screen load (no perceptible delay)
- **SC-002**: Personalized greeting displays correctly for 100% of authenticated users with a first name in their profile
- **SC-003**: Date format is correct for the user's local timezone in 100% of cases
- **SC-004**: Streak badge accurately reflects the user's current streak count from local storage
- **SC-005**: Header passes WCAG AA accessibility audit (greeting announced, minimum contrast ratios met, minimum touch targets where applicable)
- **SC-006**: Header layout remains intact and readable across all supported device sizes without overflow or clipping
- **SC-007**: Users with screen readers can understand the greeting context on page load
