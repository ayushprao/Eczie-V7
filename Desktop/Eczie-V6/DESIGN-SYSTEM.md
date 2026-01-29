# Eczie Design System

**Version:** 1.0  
**Derived From:** PRD v1.0  
**Purpose:** Implementation-ready UI contract for MVP development

---

## 1. Design Principles

### 1.1 Speed of Entry Over Polish
**PRD Justification:** Personas include busy professionals (Avery) and parents (Priya) who need "fast daily tracking." The core loop requires daily symptom logging via sliders and chip selection.

**Rule:** Every logging interaction must complete in under 30 seconds. Prioritize single-tap selections, pre-filled defaults, and minimal navigation depth.

---

### 1.2 Trust Through Transparency
**PRD Justification:** AI insights include correlation percentages (82%, 64%, 38%), severity scores with explanations ("Based on your symptoms"), and explicit disclaimers ("EczAI is for informational purposes and not a medical diagnosis").

**Rule:** Never present AI-derived information without source attribution or confidence context. All percentages must be visible. Recommendations must be framed as suggestions, not prescriptions.

---

### 1.3 Emotional Steadiness Over Celebration
**PRD Justification:** Affirmation copy reads "This flare is temporary, calm is returning" — acknowledging difficulty without false positivity. Streak messaging is "Consistency is healing" — framing as self-care, not achievement.

**Rule:** Reinforcement language must remain calm and validating. Avoid exclamation marks in health-related contexts. Never imply user failure for missed days or high severity.

---

### 1.4 Explainability Over Simplification
**PRD Justification:** Weekly Insights Report shows multi-paragraph AI summaries with specific correlations ("stress appearing on 4 out of 5 high-severity days"), trigger risk levels with percentages, and adherence breakdowns by category.

**Rule:** Present data with full context. Do not hide complexity behind vague summaries. Users managing chronic conditions need detail to build confidence in patterns.

---

### 1.5 Consistency as Core Value
**PRD Justification:** Streak tracking, daily logging flows, routine checklists, and calendar visualizations all reinforce habitual behavior. The USP includes "streak-based motivation."

**Rule:** Visual and interaction patterns must be identical across sessions. Never change layouts, button positions, or navigation based on novelty or A/B testing during flares.

---

### 1.6 Safety-First Data Handling
**PRD Justification:** HIPAA compliance requirement, PHI exposure risk noted, photo uploads of affected areas, health data encryption requirements.

**Rule:** All destructive actions (delete account, delete entries) require explicit confirmation. No auto-sharing. Export and share actions must be user-initiated with clear scope indication.

---

### 1.7 Graceful Degradation
**PRD Justification:** Risks section notes API failures, offline behavior gaps, and infrastructure concerns.

**Rule:** All screens must have defined fallback states. AI features must fail silently with informative messaging. Core logging must function without network dependency where possible.

---

## 2. Information Architecture & Hierarchy Rules

### 2.1 Global Screen Hierarchy

| Priority | Screen | Role |
|----------|--------|------|
| 1 | Home | Daily entry point, status check, action dispatch |
| 2 | Symptom Log | Primary data entry for symptoms and triggers |
| 3 | Routine Tracker | Secondary data entry for adherence |
| 4 | Insights | Pattern review and trend analysis |
| 5 | Chat | On-demand AI consultation |
| 6 | Profile | Settings, history, account management |
| 7 | Weekly Insights Report | Deep-dive summary (accessed from Insights) |
| 8 | Add Routine | Task creation (accessed from Routine Tracker) |

---

### 2.2 Section Prioritization Rules

**Above-the-fold (first viewport) must contain:**
- Home: Greeting, skin status selector, primary action cards
- Symptom Log: Symptom sliders, severity score
- Routine Tracker: Progress summary, today's incomplete tasks
- Insights: AI summary card, average severity
- Chat: Most recent messages, input field
- Profile: User identity, key stats

**Below-the-fold (scrollable):**
- Home: Progress metrics, streak card, environmental data
- Symptom Log: Additional symptoms, lifestyle factors, triggers, photos, notes
- Routine Tracker: Completed tasks, category sections
- Insights: Charts, calendar, recent logs
- Profile: Data management, support links, account actions

---

### 2.3 Visual Weight Rules

| Element Type | Weight | Usage |
|--------------|--------|-------|
| Primary Action | Highest | Save buttons, primary navigation cards |
| Severity Indicators | High | Scores, risk levels, emoji states |
| Section Headers | Medium | Organize content blocks |
| Data Values | Medium | Metrics, percentages, counts |
| Helper Text | Low | Subheaders, descriptions, disclaimers |
| Decorative | Lowest | Dividers, backgrounds (functional only) |

---

### 2.4 Never Deprioritize

- **Severity scores** — always visible when displaying symptom data
- **Disclaimers** — AI disclaimer must remain visible in Chat
- **Save buttons** — must be reachable without excessive scrolling
- **Back navigation** — always present in headers
- **Progress indicators** — task counts, percentages must be prominent

---

## 3. Layout System

### 3.1 Page Structure Patterns

**Pattern A: Entry Screen (Home)**
```
[Header: Date + Greeting + Streak Badge]
[Hero Section: Status Selector]
[Action Cards: Horizontal pair]
[Metric Cards: Grid layout]
[Contextual Cards: Streak, Environment]
[Bottom Navigation]
```

**Pattern B: Data Entry Screen (Symptom Log, Add Routine)**
```
[Header: Back + Title + Optional Action]
[Primary Input Section: Sliders/Fields]
[Secondary Sections: Chips, Toggles]
[Optional Sections: Photos, Notes]
[Sticky Save Button]
```

**Pattern C: List Screen (Routine Tracker)**
```
[Header: Back + Title + Menu]
[Calendar Strip: Horizontal week view]
[Progress Summary: Bar + Count]
[Categorized List: Grouped tasks]
[FAB: Add action]
[Bottom Navigation]
```

**Pattern D: Conversation Screen (Chat)**
```
[Header: Back + Title + Menu]
[Mode Toggle: Segmented control]
[Message List: Scrollable]
[Quick Actions: Horizontal pills]
[Disclaimer: Static footer text]
[Input Area: Attachment + Text + Send]
```

**Pattern E: Dashboard Screen (Insights, Profile)**
```
[Header: Back + Title + Action]
[Summary Card: Highlighted insight]
[Metric Cards: Grid or list]
[Visualization: Chart or Calendar]
[List Sections: Grouped menu items]
[Bottom Navigation]
```

---

### 3.2 Card Composition Rules

| Card Type | Structure | Usage |
|-----------|-----------|-------|
| Action Card | Icon + Title + Subtitle | Home navigation cards |
| Metric Card | Value + Label + Optional Trend | Progress display |
| Summary Card | Title + Body + Optional CTA | AI summaries |
| List Item Card | Icon + Title + Subtitle + Chevron | Menu items, log entries |
| Input Card | Label + Input Component | Form sections |
| Status Card | Icon + Title + Description | Streak, environment |

---

### 3.3 Spacing Density

| Context | Density | Rationale |
|---------|---------|-----------|
| Symptom sliders | Compact | Reduce scroll, speed entry |
| Chip grids | Compact | Maximize visible options |
| List items | Standard | Touch target compliance |
| Cards | Comfortable | Visual separation |
| Sections | Generous | Clear hierarchy breaks |

---

### 3.4 Scroll Behavior

- **Symptom Log:** Vertical scroll, save button sticky at bottom
- **Routine Tracker:** Vertical scroll, FAB fixed position
- **Chat:** Reverse scroll (newest at bottom), auto-scroll on new message
- **Insights:** Vertical scroll, no sticky elements except navigation
- **Photo section:** Horizontal scroll within vertical layout

---

### 3.5 Bottom Navigation Rules

- Fixed position, always visible on primary screens (Home, Insights, Chat, Profile)
- Hidden on modal/entry screens (Symptom Log, Add Routine, Weekly Report)
- 4 tabs: Home, Insights, Chat, Profile
- Active state: Icon + label highlighted
- Inactive state: Icon + label muted
- Safe area padding required for devices with home indicators

---

## 4. Typography System

### 4.1 Text Roles

| Role | Usage | Weight | Size Tier |
|------|-------|--------|-----------|
| `pageTitle` | Screen titles in headers | Bold | Large |
| `sectionHeader` | Section labels ("Your Progress") | Semibold | Medium |
| `cardTitle` | Card headings | Semibold | Medium |
| `bodyPrimary` | Main content, AI messages | Regular | Base |
| `bodySecondary` | Subtitles, descriptions | Regular | Small |
| `label` | Input labels, chip text | Medium | Small |
| `value` | Numeric displays (scores, percentages) | Bold | Large/XLarge |
| `helper` | Placeholder text, hints | Regular | Small |
| `disclaimer` | Legal text, warnings | Regular | XSmall |
| `timestamp` | Message times, update labels | Regular | XSmall |

---

### 4.2 Emphasis Rules

- **Bold:** Scores, primary metrics, important values only
- **Color emphasis:** Severity indicators, risk levels, trends
- **No italic:** Avoid italic for body text (readability)
- **No underline:** Reserved for links only

---

### 4.3 Truncation & Overflow

| Element | Behavior |
|---------|----------|
| Card titles | Single line, ellipsis |
| Section headers | Single line, no truncation |
| AI messages | Multi-line, full display |
| Chip labels | Single line, ellipsis if needed |
| Notes/descriptions | Multi-line, expandable if >3 lines |
| Log descriptions | Single line, ellipsis |

---

### 4.4 Accessibility Constraints

- Minimum touch target: 44x44 points
- Minimum body text size: 14pt equivalent
- Minimum contrast ratio: 4.5:1 for body text, 3:1 for large text
- Line height: 1.4-1.6 for body text
- Maximum line length: 65-75 characters

---

## 5. Color & Semantic Token System

### 5.1 Semantic Tokens

| Token | Role |
|-------|------|
| `primaryAction` | Primary buttons, active navigation, selected states |
| `secondaryAction` | Secondary buttons, links, interactive elements |
| `primarySurface` | Main background |
| `secondarySurface` | Card backgrounds, elevated surfaces |
| `tertiarySurface` | Input backgrounds, nested cards |
| `textPrimary` | Headlines, primary body text |
| `textSecondary` | Subtitles, helper text, timestamps |
| `textDisabled` | Disabled labels, placeholder text |
| `divider` | Section separators, borders |

---

### 5.2 Severity Encoding

| Token | Meaning | Usage |
|-------|---------|-------|
| `severityLow` | Clear/good state | Green emoji, low risk, good days |
| `severityModerate` | Moderate state | Yellow emoji, medium risk |
| `severityHigh` | Flaring/severe state | Red emoji, high risk, flare days |

**Rule:** Severity colors must only encode health status. Never use severity colors for UI chrome, branding, or decoration.

---

### 5.3 Functional States

| Token | Usage |
|-------|-------|
| `selected` | Active chips, selected options, current tab |
| `unselected` | Inactive chips, unselected options |
| `disabled` | Non-interactive elements, unavailable actions |
| `error` | Validation errors, failed states |
| `warning` | Caution states, elevated risk |
| `success` | Save confirmations, completed tasks |
| `loading` | Skeleton states, progress indicators |

---

### 5.4 Accessibility Requirements

- All severity indicators must have secondary encoding (icon shape, text label)
- Never rely on color alone to convey meaning
- Ensure colorblind-safe palette selection
- Test against common vision deficiencies (protanopia, deuteranopia)

---

## 6. Core Components

### 6.1 Buttons

**Primary Button**
- Purpose: Main actions (Save, Submit)
- States: Default, Pressed, Loading, Disabled
- Behavior: Full-width on mobile, loading spinner replaces text during async
- Accessibility: Minimum 44pt height, clear focus state

**Secondary Button**
- Purpose: Alternative actions (Share as PDF, Sign Out)
- States: Default, Pressed, Disabled
- Behavior: Outline style, same sizing as primary

**Text Button**
- Purpose: Destructive or tertiary actions (Delete Account)
- States: Default, Pressed
- Behavior: No background, text-only with appropriate semantic color

**Quick Action Button (Pill)**
- Purpose: Chat quick actions, affirmation tap hint
- States: Default, Pressed
- Behavior: Horizontal scroll container, compact padding

---

### 6.2 Sliders

**Symptom Slider**
- Purpose: 0-10 severity input for itchiness, redness, dryness
- States: Default, Active (dragging), Disabled
- Behavior: Continuous drag, value label updates in real-time, snaps to integers
- Accessibility: Value announced on change, keyboard increment support

---

### 6.3 Chips

**Toggle Chip**
- Purpose: Multi-select options (symptoms, triggers, lifestyle factors)
- States: Unselected, Selected, Disabled
- Behavior: Tap to toggle, checkmark appears when selected
- Accessibility: Toggle state announced

**Action Chip**
- Purpose: Add custom items ("+ Add symptom", "+ Add Custom")
- States: Default, Pressed
- Behavior: Opens input modal or inline field

**Single-Select Chip Group**
- Purpose: Mutually exclusive options (sleep hours, stress level, category)
- States: Unselected, Selected
- Behavior: Only one active at a time, tapping another deselects current

---

### 6.4 Cards

**Action Card**
- Purpose: Navigation from Home to entry screens
- Structure: Icon + Title + Subtitle
- States: Default, Pressed
- Behavior: Navigate on tap

**Metric Card**
- Purpose: Display progress values
- Structure: Value + Label + Optional trend indicator
- States: Static (no interaction)

**Summary Card**
- Purpose: AI insights, weekly summaries
- Structure: Title + Body + Optional CTA link
- States: Default, with CTA pressed state

**Analysis Card (Chat embedded)**
- Purpose: Structured data display within conversation
- Structure: Title + Metric rows
- States: Static

**Recommendation Card (Chat embedded)**
- Purpose: Actionable suggestions list
- Structure: Title + Bullet list
- States: Static

---

### 6.5 Progress Indicators

**Progress Bar**
- Purpose: Task completion percentage
- States: Empty, Partial, Complete
- Behavior: Animate fill on value change

**Streak Indicator**
- Purpose: Weekly day completion visualization
- Structure: 7 day circles (M-Su)
- States: Completed (filled), Current (highlighted), Future (outline)

**Severity Score Display**
- Purpose: Calculated severity visualization
- Structure: Emoji icon + Numeric value + Label
- Behavior: Icon changes based on score range

---

### 6.6 Calendars

**Week Strip Calendar**
- Purpose: Routine Tracker day navigation
- Structure: Horizontal 7-day row
- States: Completed (checkmark), Current (highlighted), Future (date number)
- Behavior: Tap to view different day (if supported)

**Month Grid Calendar**
- Purpose: Insights and Profile symptom visualization
- Structure: Standard month grid with navigation
- States: No data (empty), Logged (severity emoji), Current (highlight), Future (muted)
- Behavior: Navigation arrows for month change, day tap navigates to log detail

---

### 6.7 Lists

**Task List Item**
- Purpose: Routine task display
- Structure: Checkbox + Icon + Title + Subtitle
- States: Incomplete, Complete (checked)
- Behavior: Tap checkbox to toggle, immediate persistence

**Menu List Item**
- Purpose: Profile navigation, settings
- Structure: Icon + Title + Optional subtitle + Chevron
- States: Default, Pressed
- Behavior: Navigate on tap

**Log Entry List Item**
- Purpose: Recent logs display
- Structure: Severity icon + Date + Score + Description + Chevron
- States: Default, Pressed
- Behavior: Navigate to detail on tap

---

### 6.8 Input Fields

**Text Input**
- Purpose: Task name, notes, search
- States: Empty, Focused, Filled, Error, Disabled
- Behavior: Placeholder visible when empty, clear button when filled
- Accessibility: Label association required

**Text Area**
- Purpose: Additional notes, multi-line input
- States: Empty, Focused, Filled, Error
- Behavior: Auto-expand to content, character count if limited

**Date Selector**
- Purpose: Symptom Log date selection
- States: Default showing "Today", Expanded (picker visible)
- Behavior: Dropdown or modal picker
- **Design Assumption:** Date range limited to past 30 days, no future dates

---

### 6.9 Floating Action Button (FAB)

- Purpose: Add new routine task
- Position: Bottom-right, above bottom navigation safe area
- States: Default, Pressed
- Behavior: Navigate to Add Routine screen
- Accessibility: Clear label for screen readers ("Add new task")

---

### 6.10 Bottom Tab Navigation

- Purpose: Primary app navigation
- Structure: 4 tabs (Home, Insights, Chat, Profile)
- States: Active (highlighted icon + label), Inactive (muted)
- Behavior: Instant navigation, maintains scroll position per tab
- Accessibility: Tab role, current state announced

---

### 6.11 Mode Toggle

- Purpose: Chat mode selection (Skin Coach / Emotional Support)
- Structure: Segmented control with 2 options
- States: Selected, Unselected
- Behavior: Single selection, content changes based on mode

---

### 6.12 Photo Thumbnail

- Purpose: Display uploaded symptom photos
- Structure: Image thumbnail + Delete button overlay
- States: Default, Delete pressed
- Behavior: Tap X to remove, horizontal scroll container

**Add Photo Button**
- Structure: Camera icon + Label
- States: Default, Pressed
- Behavior: Opens system photo picker
- **Design Assumption:** Supports camera and gallery, max 5 photos, compressed to 1MB

---

## 7. Screen-Level Composition Rules

### 7.1 Home Screen

**Required Sections (in order):**
1. Header (date, greeting, streak badge)
2. Skin status selector
3. Action cards (Complete Entry, Track Routine)
4. Progress metrics
5. Streak card
6. Environmental data
7. Bottom navigation

**Optional Sections:** None — all sections required

**Interaction Sequencing:**
1. User views current status
2. User selects skin status (auto-saves)
3. User taps action card to navigate

**Entry Behavior:** Default landing screen after login

**Exit Behavior:** Navigate via action cards or bottom tabs

**Post-Action States:**
- Skin status selection: Visual confirmation (selected state), auto-persist
- **Design Assumption:** Selection auto-saves without explicit confirmation

---

### 7.2 Symptom Log Screen

**Required Sections (in order):**
1. Header (back, title, date selector)
2. Symptom sliders (itchiness, redness, dryness)
3. Severity score display
4. Additional symptoms chips
5. Lifestyle factors (sleep, stress)
6. Possible triggers (environment, food, personal)
7. Photos section
8. Additional notes
9. Save button (sticky)

**Optional Sections:** Photos, notes (marked optional in UI)

**Interaction Sequencing:**
1. Adjust sliders (severity auto-calculates)
2. Select chips for symptoms, factors, triggers
3. Add photos if needed
4. Add notes if needed
5. Tap Save

**Entry Behavior:** Navigate from Home "Complete Entry" card

**Exit Behavior:** Back button returns to Home, Save persists and returns to Home

**Post-Action States:**
- Save success: Brief toast/confirmation, navigate to Home
- Save error: Inline error message, button re-enabled
- **Design Assumption:** Severity = average of three sliders, rounded to 1 decimal

---

### 7.3 Routine Tracker Screen

**Required Sections (in order):**
1. Header (back, title, menu)
2. Week calendar strip
3. Progress summary (count + bar)
4. Task list by category (Skincare, Medications, Lifestyle)
5. FAB
6. Bottom navigation

**Optional Sections:** None

**Interaction Sequencing:**
1. View today's tasks
2. Tap checkbox to complete/uncomplete
3. Progress updates immediately
4. Tap FAB to add new task

**Entry Behavior:** Navigate from Home "Track Routine" card

**Exit Behavior:** Back button or bottom navigation

**Post-Action States:**
- Task toggle: Immediate visual update, async persist
- **Design Assumption:** Menu contains Edit and Delete options for tasks

---

### 7.4 Add Routine Screen

**Required Sections (in order):**
1. Header (back, title)
2. Category selection
3. Task name input
4. Icon selection
5. Time selection
6. Frequency selection
7. Notes (optional)
8. Save button

**Optional Sections:** Notes

**Interaction Sequencing:**
1. Select category
2. Enter task name
3. Choose icon
4. Select time
5. Select frequency
6. Add notes (optional)
7. Tap Save

**Entry Behavior:** Navigate from Routine Tracker FAB

**Exit Behavior:** Back cancels, Save persists and returns to Routine Tracker

**Post-Action States:**
- Save success: Navigate to Routine Tracker, new task visible
- Validation error: Inline error on task name if empty
- **Design Assumption:** Task name required, max 50 characters

---

### 7.5 Chat Screen

**Required Sections (in order):**
1. Header (back, title, menu)
2. Mode toggle
3. Message list
4. Quick action buttons
5. Disclaimer
6. Input area

**Optional Sections:** None

**Interaction Sequencing:**
1. View conversation history
2. Select mode if needed
3. Type message or tap quick action
4. Send message
5. Wait for AI response
6. View analysis/recommendation cards

**Entry Behavior:** Navigate via bottom tab

**Exit Behavior:** Bottom navigation or back button

**Post-Action States:**
- Message sent: Appears in list, loading indicator for AI response
- AI response received: Message appears with any embedded cards
- AI error: Error message in chat ("Unable to respond, please try again")
- **Design Assumption:** Messages persist across sessions

---

### 7.6 Insights Screen

**Required Sections (in order):**
1. Header (back, title, menu)
2. AI summary card with "View Full Report" link
3. Average severity card
4. Symptom trends
5. Flare severity chart
6. Symptom calendar
7. Recent logs
8. Bottom navigation

**Optional Sections:** None

**Interaction Sequencing:**
1. View summary
2. Scroll to explore trends
3. Tap calendar day for detail
4. Tap "View Full Report" for weekly report
5. Tap log entry for detail

**Entry Behavior:** Navigate via bottom tab

**Exit Behavior:** Bottom navigation

**Post-Action States:**
- Calendar day tap: Navigate to log detail (if exists)
- Log entry tap: Navigate to log detail
- **Design Assumption:** Log detail shows read-only view of saved symptom log

---

### 7.7 Weekly Insights Report Screen

**Required Sections (in order):**
1. Header (back, share, title, date range)
2. EczAI Coach Summary
3. Topic tags
4. Routine adherence summary
5. Progress metrics
6. Detected triggers with correlation
7. Action buttons (Share as PDF, Send to Doctor)

**Optional Sections:** None

**Interaction Sequencing:**
1. Read AI summary
2. Review adherence and triggers
3. Share or export if needed

**Entry Behavior:** Navigate from Insights "View Full Report" link

**Exit Behavior:** Back button returns to Insights

**Post-Action States:**
- Share as PDF: System share sheet with generated PDF
- Send to Doctor: System share sheet (email, messaging)
- **Design Assumption:** PDF generated client-side, contains visible report content

---

### 7.8 Profile Screen

**Required Sections (in order):**
1. Header (back, title, settings)
2. User profile card
3. Stats grid
4. Symptom calendar
5. Data & History menu
6. About & Support menu
7. Beta tester card
8. Account actions
9. Bottom navigation

**Optional Sections:** Beta tester card (conditional on user status)

**Interaction Sequencing:**
1. View profile and stats
2. Navigate calendar
3. Access data management options
4. Access support options
5. Sign out or delete account

**Entry Behavior:** Navigate via bottom tab

**Exit Behavior:** Bottom navigation

**Post-Action States:**
- Sign out: Confirmation dialog, then navigate to login
- Delete account: Multi-step confirmation, then logout and data deletion
- Export data: System share sheet with export file
- **Design Assumption:** Delete account requires typing "DELETE" to confirm

---

## 8. Interaction & Feedback Patterns

### 8.1 Save Confirmations

| Action | Feedback |
|--------|----------|
| Save Symptom Log | Brief toast "Log saved", navigate to Home |
| Save Task | Navigate to Routine Tracker, task appears in list |
| Task toggle | Immediate checkbox state change, no toast |
| Skin status selection | Immediate visual selection, no toast |

---

### 8.2 Loading Behavior

| Context | Pattern |
|---------|---------|
| Screen load | Skeleton placeholders for cards and lists |
| AI response | Typing indicator or "..." in chat |
| Save action | Button shows loading spinner, disabled state |
| Image upload | Progress indicator on thumbnail |
| Data fetch | Pull-to-refresh where applicable |

---

### 8.3 Error Handling

| Error Type | Response |
|------------|----------|
| Save failure | Inline error message, button re-enabled, data preserved |
| Network error | Toast with retry option |
| AI failure | Message in chat: "I couldn't respond right now. Please try again." |
| Validation error | Inline error below field, field highlighted |
| Auth error | Redirect to login with message |

---

### 8.4 Empty States

| Screen | Empty State |
|--------|-------------|
| Routine Tracker (no tasks) | "No routines yet. Tap + to add your first task." |
| Insights (no logs) | "Start logging to see your insights." |
| Recent Logs (none) | "No logs this week." |
| Chat (no history) | Initial AI greeting message |
| Photos section | Only "Add Photo" button visible |

---

### 8.5 Optimistic vs Pessimistic Updates

| Action | Strategy | Rationale |
|--------|----------|-----------|
| Task toggle | Optimistic | High-frequency action, low-risk |
| Skin status | Optimistic | Simple selection |
| Symptom log save | Pessimistic | Critical data, must confirm persistence |
| Message send | Optimistic (show sent), Pessimistic (wait for AI) | User sees their message immediately |
| Delete actions | Pessimistic | Destructive, must confirm |

---

### 8.6 Offline Behavior

| Feature | Offline Handling |
|---------|------------------|
| View cached logs | Available |
| View cached insights | Available |
| Log symptoms | Queue for sync when online |
| Toggle tasks | Queue for sync when online |
| Chat | Disabled with message "Chat requires internet connection" |
| Environmental data | Show stale data with "Last updated: [time]" |

**Design Assumption:** Core logging works offline with sync queue

---

## 9. Emotional Modulation Rules

### 9.1 Severity-Based Tone Adjustment

| Severity | Affirmation Tone | Reinforcement Tone |
|----------|------------------|-------------------|
| Low (0-3) | Calm, acknowledging ("Your skin is responding well") | Gentle encouragement |
| Moderate (4-6) | Neutral, supportive ("You're managing through this") | Steady, factual |
| High (7-10) | Empathetic, validating ("This is hard. You're doing what you can.") | No celebration, pure support |

---

### 9.2 Streak Handling

| Streak State | Messaging |
|--------------|-----------|
| Active (1-7 days) | "{N} days strong" — factual acknowledgment |
| Active (8+ days) | "{N} Day Streak - Consistency is healing" |
| Broken (missed 1 day) | No guilt messaging, simply show gap in calendar |
| Broken (missed 2+ days) | "Welcome back" — no reference to missed days |
| New start | "Day 1 - Every day counts" |

**Rule:** Never use language that implies failure ("You broke your streak", "You missed X days")

---

### 9.3 Flare State Messaging

| State | Allowed | Forbidden |
|-------|---------|-----------|
| During flare | "This is temporary", "You're tracking through it" | "Great job!", "Keep it up!", celebratory language |
| Post-flare | "Your symptoms are easing" | "You beat the flare!", victory language |
| Flare-free | "Steady progress" | Excessive celebration |

---

### 9.4 AI Communication Rules

- Frame all recommendations as suggestions ("Consider...", "You might try...")
- Never claim causation, only correlation ("This pattern appears when...")
- Always include confidence context ("detected on X of Y days")
- End interactions with open availability ("I'm here if you need anything")
- Acknowledge difficulty before offering solutions ("I understand this is hard.")

---

## 10. Anti-Patterns (Explicitly Forbidden)

### 10.1 Gamification Patterns

- ❌ Points, badges, levels, or achievements
- ❌ Leaderboards or social comparison
- ❌ Unlock mechanics or progression gates
- ❌ Streak loss penalties or shame messaging
- ❌ Daily challenges or goals imposed by app

---

### 10.2 Engagement Manipulation

- ❌ Push notifications with guilt ("You haven't logged today!")
- ❌ Variable reward schedules
- ❌ Artificial urgency ("Log now before midnight!")
- ❌ Social proof pressure ("1000 users logged today")
- ❌ Dark patterns for data collection

---

### 10.3 Medical Overreach

- ❌ Diagnostic language ("You have...", "This means...")
- ❌ Treatment prescriptions ("You should take...")
- ❌ Certainty in predictions ("Your next flare will be...")
- ❌ Comparison to clinical standards without disclaimer
- ❌ Hiding the AI disclaimer

---

### 10.4 Emotional Manipulation

- ❌ Cheerfulness during high-severity states
- ❌ Disappointment messaging for missed logs
- ❌ Pressure to maintain streaks
- ❌ Catastrophizing language about symptoms
- ❌ False positivity ("Everything will be fine!")

---

### 10.5 Visual Anti-Patterns

- ❌ Decorative animations that delay interaction
- ❌ Confetti or celebration effects
- ❌ Mascot reactions or personality
- ❌ Changing layouts based on user state
- ❌ Hidden navigation or mystery meat UI
- ❌ Auto-playing media

---

### 10.6 Data Anti-Patterns

- ❌ Auto-sharing to third parties
- ❌ Unclear data export scope
- ❌ Irreversible delete without confirmation
- ❌ Hiding data access options
- ❌ Combining health data with analytics identifiers

---

## Appendix A: Design Assumptions Summary

| ID | Assumption | Screen | Rationale |
|----|------------|--------|-----------|
| DA-001 | Severity score = average of 3 sliders | Symptom Log | Simplest calculation matching UI |
| DA-002 | Date range limited to past 30 days | Symptom Log | Prevent retroactive bulk entry |
| DA-003 | Skin status auto-saves on selection | Home | Reduce friction for quick check-in |
| DA-004 | Photo limit: 5 photos, 1MB each | Symptom Log | Storage and upload constraints |
| DA-005 | Task name required, max 50 chars | Add Routine | Basic validation |
| DA-006 | Delete account requires "DELETE" confirmation | Profile | Safety for destructive action |
| DA-007 | Messages persist across sessions | Chat | Expected behavior |
| DA-008 | Offline logging queues for sync | All entry screens | Core function must work offline |
| DA-009 | Menu contains Edit/Delete for tasks | Routine Tracker | Standard list management |
| DA-010 | Time picker uses device locale format | Add Routine | Platform convention |

---

## Appendix B: Validation Checklist

- ✅ Every rule maps to PRD content
- ✅ No new features introduced
- ✅ Core loop preserved: log → understand → act → feel supported → repeat
- ✅ Implementable without Figma reference
- ✅ All PRD screens covered
- ✅ All identified design gaps addressed with minimal assumptions
- ✅ Severity encoding consistent across all components
- ✅ Emotional safety rules defined
- ✅ Anti-patterns explicitly forbidden

---

**Document End**
