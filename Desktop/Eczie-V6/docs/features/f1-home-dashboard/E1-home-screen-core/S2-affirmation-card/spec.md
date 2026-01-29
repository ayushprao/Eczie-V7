# Feature Specification: Affirmation Card

**Feature Branch**: `S2-affirmation-card`  
**Created**: January 29, 2026  
**Status**: Draft  
**Input**: User description: "Affirmation Card component for Home Screen - displays calming affirmation messages with tap-to-cycle interaction"

## Clarifications

### Session 2026-01-29

- Q: How should affirmations cycle when the user taps the card? → A: Sequential rotation (1→2→…→N→1)
- Q: What should be shown as the initial affirmation when the Home screen loads? → A: Daily rotation (changes once per calendar day)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Daily Affirmation (Priority: P1)

As a user opening the Home screen, I want to see a calming affirmation message so that I feel emotionally supported during my eczema management journey.

**Why this priority**: This is the core value proposition of the affirmation card - providing immediate emotional support upon app entry. Without this, the component has no purpose.

**Independent Test**: Can be fully tested by opening the Home screen and verifying an affirmation message is displayed with appropriate styling and tone.

**Acceptance Scenarios**:

1. **Given** the user opens the Home screen, **When** the screen loads, **Then** an affirmation card is displayed with a calming message (e.g., "This flare is temporary, calm is returning.")
2. **Given** the user views the affirmation card, **When** they read the content, **Then** the text is prominent, readable, and styled as a distinct visual element
3. **Given** the affirmation card is displayed, **When** the user views it, **Then** an action hint "Tap for more affirmations" is visible below the main text

---

### User Story 2 - Cycle Through Affirmations (Priority: P2)

As a user seeking variety in emotional support, I want to tap the affirmation card to see different messages so that I can find one that resonates with my current state.

**Why this priority**: Interaction capability adds engagement value but the card still provides value even without cycling (static affirmation).

**Independent Test**: Can be fully tested by tapping the affirmation card multiple times and verifying different messages appear.

**Acceptance Scenarios**:

1. **Given** the affirmation card is displayed, **When** the user taps the card, **Then** the affirmation text changes to a different message
2. **Given** the user taps the card, **When** the new affirmation appears, **Then** subtle visual feedback (press state) is provided during the tap
3. **Given** the user has cycled through all affirmations, **When** they tap again, **Then** the cycle restarts from the beginning (or continues randomly)

---

### User Story 3 - Accessible Affirmation Interaction (Priority: P3)

As a user with accessibility needs, I want the affirmation card to be properly accessible so that I can interact with it using assistive technologies.

**Why this priority**: Accessibility is essential for inclusive design but builds on top of the core functionality.

**Independent Test**: Can be tested using VoiceOver/TalkBack to verify the card is announced correctly and is actionable.

**Acceptance Scenarios**:

1. **Given** a user with a screen reader, **When** they navigate to the affirmation card, **Then** the card is announced as a tappable element with the affirmation text
2. **Given** a user with reduced motion preferences, **When** the affirmation changes, **Then** the transition respects system reduced-motion settings

---

### Edge Cases

- What happens when the affirmation list is empty or fails to load? → Display a default fallback affirmation
- How does the system handle rapid repeated taps? → Debounce taps to prevent excessive cycling (minimum 300ms between changes)
- What happens if the user returns to Home screen after navigating away? → Maintain the current affirmation position during the session

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST display an affirmation card on the Home screen below the greeting header and above the skin status selector
- **FR-002**: System MUST display affirmation text that is calming and validating in tone (never cheerful or celebratory)
- **FR-003**: System MUST display an action hint "Tap for more affirmations" below the affirmation text
- **FR-004**: System MUST cycle to the next affirmation in a sequential order when the user taps the card
- **FR-005**: System MUST provide subtle visual feedback (press state) when the card is tapped
- **FR-006**: System MUST store affirmations locally with no network dependency for display
- **FR-007**: System MUST support a minimum of 10 predefined affirmation messages
- **FR-008**: System MUST determine the initial affirmation based on the current calendar day (daily rotation)
- **FR-009**: System MUST persist the current affirmation index within a session (not across app restarts)
- **FR-010**: System MUST implement the card as an accessible tappable element with proper accessibility role

### Content Requirements

- **CR-001**: Affirmation messages MUST follow emotional modulation rules from the Design System:
  - Calm and validating tone
  - No exclamation marks
  - Acknowledge difficulty without false positivity
  - Never imply user failure
- **CR-002**: Example affirmations (minimum set):
  - "This flare is temporary, calm is returning."
  - "You're doing what you can, and that's enough."
  - "Your body is working through this."
  - "Small steps still move you forward."
  - "Healing isn't linear, and that's okay."
  - "You know your skin better than anyone."
  - "Rest is part of recovery."
  - "Today is just one day in your journey."
  - "Your comfort matters."
  - "Patience with yourself is a form of care."

### Key Entities

- **Affirmation**: A text message with calming, validating content. Attributes: id, text, category (optional for future filtering)
- **AffirmationState**: Current display state. Attributes: currentIndex, affirmationList

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Affirmation card renders within 100ms of Home screen load (no network dependency)
- **SC-002**: 100% of affirmation messages pass tone validation (no cheerful/celebratory language)
- **SC-003**: Tap interaction responds within 150ms with visual feedback
- **SC-004**: Card meets WCAG AA accessibility standards (4.5:1 contrast ratio, proper accessibility labels)
- **SC-005**: Users can cycle through all affirmations without errors or crashes

## Assumptions

- Affirmation rotation logic is sequential (cycles through the predefined list in order)
- The initial affirmation displayed is selected via daily rotation (changes once per calendar day)
- The affirmation list is static and bundled with the app (no server-side management in MVP)
- Session persistence means the affirmation index resets when the app is fully closed and reopened
