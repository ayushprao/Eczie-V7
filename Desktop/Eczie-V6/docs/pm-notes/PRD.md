# Eczie App - Product Requirements Document (PRD)

**Document Version:** 1.0  
**Generated:** December 6, 2025  


---

## 1. Executive Context

### 1.1 Screen Scope Covered

| Screen | Frame Name |
|--------|------------|
| Home | Home |
| Symptom Log | Symptom Log |
| Routine Tracker | Routine Tracker |
| Add Routine | add routine |
| Chat | Chat |
| Insights | Insights |
| Weekly Insights Report | Weekly insights report |
| Profile | Profile |

### 1.2 Primary Goal According to Design

People living with eczema juggle unpredictable flare-ups, scattered advice, and low confidence in what truly works; Eczie centralizes daily tracking, evidence-based insights, and encouragement in one HIPAA-ready app. Eczie is a mobile health tracking application designed to help users manage eczema symptoms through:
- Daily symptom logging with severity tracking
- Skincare and medication routine management
- AI-powered insights and pattern detection
- Environmental trigger correlation analysis

Target Audience (personas):
  - Avery (29) – busy professional managing moderate eczema who needs fast daily tracking and motivation.
  - Priya (34) – parent logging a child’s flare patterns, requiring reminders, shared reports, and high trust.
-  - Jordan (41) – person suffering from long-term chronic eczema who needs long-term trend tracking and confidence in what treatments are working.
- One-line USP: The only eczema companion that fuses daily logs, AI trigger detection, and streak-based motivation into a secure, empathy-first mobile experience.


### 1.3 Core Behavior Visible in UI

1. **Symptom Tracking** - Users log daily symptoms (itchiness, redness, dryness) via sliders
2. **Routine Management** - Track skincare, medications, and lifestyle tasks
3. **AI Analysis** - EczAI provides personalized insights and trigger detection
4. **Progress Visualization** - Streaks, calendars, and trend charts show progress over time

### 1.4 Interaction Model Summary

- **Navigation:** Bottom tab bar with 4 items (Home, Insights, Chat, Profile)
- **Input Methods:** Sliders, toggle chips, text areas, photo upload
- **Data Entry:** Daily logging flow from Home to Symptom Log
- **Feedback:** Visual progress indicators, streak counters, severity scores

---

## 2. UX-Driven Feature Specifications

---

### 2.1 HOME SCREEN

**Frame Reference:** Home (Node ID: 23:241)

#### 2.1.1 Header Section

| Element | Microcopy | Behavior |
|---------|-----------|----------|
| Day Label | "FRIDAY · JUNE 21" | Static display of current date |
| Greeting | "Welcome back, Ayush" | Personalized with user first name |
| Hero Background | 
| Mascot | Eczie mascot illustration | Displayed in the hero header (not in the affirmation card) |
| Streak Badge | "8 days strong" | Display current streak as a pill/badge inside the hero header |

#### 2.1.2 Affirmation Card

| Element | Microcopy |
|---------|-----------|
| Affirmation Text | "This flare is temporary, calm is returning." |
| Action Hint | "Tap for more affirmations" |

**DESIGN GAP:** Logic for affirmation rotation/selection not defined. Is it random, time-based, or condition-based?

#### 2.1.3 Skin Status Section

**Label:** "How's your skin today?"

| Option | Icon | State |
|--------|------|-------|
| Clear | Green happy face | Selectable |
| Moderate | Yellow neutral face | Selectable |
| Flaring | Red sad face | Selectable |

**User Action Sequence:**
1. User views three status options
2. User taps one option to select
3. Selection is visually highlighted

**DESIGN GAP:** What happens after selection? Does it auto-save? Does it navigate somewhere? No confirmation state shown.

#### 2.1.4 Action Cards

**Card 1: Complete Entry**
| Element | Value |
|---------|-------|
| Title | "Complete Entry" |
| Subtitle | "Symptoms & Triggers" |
| Action | Navigate to Symptom Log screen |
| Icon | Clipboard icon |

**Card 2: Track Routine**
| Element | Value |
|---------|-------|
| Title | "Track Routine" |
| Subtitle | "Skincare & Medications" |
| Action | Navigate to Routine Tracker screen |
| Icon | Checklist icon |

#### 2.1.5 Your Progress Section

**Header:** "Your Progress"

| Metric | Value | Label |
|--------|-------|-------|
| Flare-free Days | 24 | "Flare-free Days" |
| Moderate Days | 8 | "Moderate Days" |
| Flares this Month | 1 | "Flares this Month" |

#### 2.1.6 Streak Card

| Element | Microcopy | Behavior |
|---------|-----------|----------|
| Title | "8 Day Streak" | Displays current logging streak |
| Subtitle | "Consistency is healing" | Supportive reinforcement text |
| Day Indicators | M, T, W, T, F, S | Shows recent days with completed vs upcoming styling |

#### 2.1.7 Environmental Data (Weather + Trigger Risk)

**Header Row:**
| Element | Microcopy | Behavior |
|---------|-----------|----------|
| Location | "New York" | Display current location (source TBD) |
| Updated Label | "Updated just now" | Indicates recency of environmental data |

**Metrics Row:**
| Metric | Example Value | Notes |
|--------|---------------|------|
| Temperature | "32°C" | Display temperature |
| Humidity | "72%" | Display humidity percentage |
| Pollen | "High" | Display pollen level |

**Trigger Risk Panel:**
| Element | Microcopy |
|---------|-----------|
| Trigger Risk Label | "Trigger Risk:" |
| Risk Status | "Elevated" |
| Description | "High pollen may trigger symptoms" |

**DESIGN GAP:** Source of environmental data not specified. Is this from device location + weather API? How is "Trigger Risk" calculated?

#### 2.1.8 Bottom Navigation

| Tab | Label | Icon | Active State |
|-----|-------|------|--------------|
| 1 | Home | House icon | Blue highlight when active |
| 2 | Insights | Chart icon | Gray when inactive |
| 3 | Chat | Message icon | Gray when inactive |
| 4 | Profile | Person icon | Gray when inactive |

---

### 2.2 SYMPTOM LOG SCREEN

**Frame Reference:** Symptom Log (Node ID: 100:1653)

#### 2.2.1 Header

| Element | Microcopy | Behavior |
|---------|-----------|----------|
| Back Button | Left chevron | Navigate back to Home |
| Title | "Symptom Log" | Static |
| Date Selector | "Today" with dropdown | Allows date selection |

**DESIGN GAP:** Date picker UI not shown. What is the date range limit? Can users log for future dates?

#### 2.2.2 Symptom Sliders Section

**Container:** Dark card with rounded corners

| Symptom | Current Value | Range | Slider Color |
|---------|---------------|-------|--------------|
| Itchiness | 7 | 0-10 implied | Blue gradient |
| Redness | 4 | 0-10 implied | Blue gradient |
| Dryness | 5 | 0-10 implied | Blue gradient |

**User Action Sequence:**
1. User views current slider positions
2. User drags slider thumb to adjust value
3. Numeric value updates in real-time

#### 2.2.3 Severity Score

| Element | Value | Description |
|---------|-------|-------------|
| Icon | Yellow emoji face | Visual severity indicator |
| Score | "5.3" | Calculated severity |
| Label | "Severity Score" | - |
| Sublabel | "Based on your symptoms" | - |

**DESIGN GAP:** Severity calculation formula not defined. Is it average of 3 sliders? Weighted average?

#### 2.2.4 Additional Symptoms Section

**Header:** "Additional Symptoms"  
**Subheader:** "Select any that apply (optional)"

| Chip | Default State |
|------|---------------|
| Bleeding | Unselected |
| Blistering | Unselected |
| Crusting | Unselected |
| Oozing / Weeping | Unselected |
| Pain / Tenderness | Unselected |
| Swelling | Unselected |
| Skin thickening | Unselected |
| Scaling | Selected (blue) |
| Stretch marks | Unselected |
| + Add symptom | Action chip |

**User Action Sequence:**
1. User taps chip to toggle selection
2. Selected chips turn blue with checkmark
3. "+ Add symptom" opens custom symptom entry

**DESIGN GAP:** Custom symptom entry UI not shown. Character limit? Validation rules?

#### 2.2.5 Lifestyle Factors Section

**Sleep Last Night:**
| Option | State |
|--------|-------|
| 2h | Unselected |
| 4h | Unselected |
| 6h | Selected (blue) |
| 8h | Unselected |
| 10h | Unselected |

**Stress Level:**
| Option | State |
|--------|-------|
| Low | Unselected |
| Medium | Selected (blue) |
| High | Unselected |

#### 2.2.6 Possible Triggers Section

**Environment:**
| Trigger | State |
|---------|-------|
| Heat | Selected (blue) |
| Dust | Selected (blue) |
| Pollen | Selected (blue) |
| Sweat | Unselected |

**Food and Drink:**
| Trigger | State |
|---------|-------|
| Dairy | Unselected |
| Alcohol | Selected (blue) |
| Sugar | Selected (blue) |

**Personal and Products:**
| Trigger | State |
|---------|-------|
| Stress | Unselected |
| New Product | Unselected |
| Exercise | Selected (blue) |
| + Add Custom | Action chip |

#### 2.2.7 Photos of Affected Areas

**Layout:** Horizontal scroll with photo thumbnails

| Element | Behavior |
|---------|----------|
| Photo 1 | Thumbnail with X delete button |
| Photo 2 | Thumbnail with X delete button |
| Add Photo | Blue camera icon, "Add Photo" label |

**User Action Sequence:**
1. User taps "Add Photo"
2. Camera/gallery picker opens (not shown)
3. Selected photo appears as thumbnail
4. User can tap X to remove photo

**DESIGN GAP:** Photo picker UI not shown. Camera vs gallery option? Photo size limits? Compression?

#### 2.2.8 Additional Notes

**Placeholder:** "e.g., Noticed itching after my evening workout..."

**DESIGN GAP:** Character limit not specified. Is this required or optional?

#### 2.2.9 Save Button

| Element | Microcopy | Behavior |
|---------|-----------|----------|
| Button | "Save Symptom Log" | Full-width blue button |

**DESIGN GAP:** 
- Success state not shown
- Error handling not shown
- Loading state not shown
- What happens after save? Navigate back? Show confirmation?

---

### 2.3 ROUTINE TRACKER SCREEN

**Frame Reference:** Routine Tracker (Node ID: 55:4)

#### 2.3.1 Header

| Element | Microcopy | Behavior |
|---------|-----------|----------|
| Back Button | Left chevron | Navigate back |
| Title | "Today's Routine" | Static |
| Menu Button | Three dots | Opens menu (not shown) |

**DESIGN GAP:** Menu options not defined.

#### 2.3.2 Weekly Calendar

| Day | Label | Date | State |
|-----|-------|------|-------|
| Su | Su | Checkmark | Completed (blue filled) |
| Mo | Mo | Checkmark | Completed (blue filled) |
| Tu | Tu | 18 | Current day (highlighted) |
| We | We | 19 | Future (outline) |
| Th | Th | 20 | Future (outline) |
| Fr | Fr | 21 | Future (outline) |
| Sa | Sa | 22 | Future (outline) |

#### 2.3.3 Progress Summary

| Element | Value |
|---------|-------|
| Tasks Completed | "3 of 8 tasks completed" |
| Percentage | "37%" |
| Progress Bar | Blue fill at 37% |

#### 2.3.4 Task Categories and Items

**Category: Skincare**

| Task | Time | State | Icon |
|------|------|-------|------|
| Morning Cleanser | AM Routine | Completed (checked) | Sun icon |
| Night Moisturizer | PM Routine | Incomplete | Moon icon |

**Category: Medications**

| Task | Time | State | Icon |
|------|------|-------|------|
| Antihistamine | 9:00 AM | Incomplete | Pill icon |

**Category: Lifestyle**

| Task | Time | State | Icon |
|------|------|-------|------|
| Drink 2 L water | - | Incomplete | Water icon |
| Meditation / Walk | - | Completed (checked) | Person icon |
| Sleep 8h | - | Completed (checked) | Bed icon |

**User Action Sequence:**
1. User views task list by category
2. User taps checkbox to mark complete/incomplete
3. Progress bar and count update

#### 2.3.5 Floating Action Button

| Element | Icon | Behavior |
|---------|------|----------|
| FAB | Plus (+) | Navigate to Add Routine screen |

#### 2.3.6 Bottom Navigation

Same as Home screen navigation.

---

### 2.4 ADD ROUTINE SCREEN

**Frame Reference:** add routine (Node ID: 139:1474)

#### 2.4.1 Header

| Element | Microcopy | Behavior |
|---------|-----------|----------|
| Back Button | Left chevron | Navigate back to Routine Tracker |
| Title | "Add New Routine Task" | Static |

#### 2.4.2 Category Selection

| Option | State |
|--------|-------|
| Skincare | Selected (blue glow) |
| Medications | Unselected |
| Lifestyle | Unselected |

**Behavior:** Single selection, mutually exclusive

#### 2.4.3 Task Name Input

| Element | Value |
|---------|-------|
| Label | "Task Name" |
| Placeholder | "Apply Moisturizer" |
| Input Type | Text field |

**DESIGN GAP:** Character limit? Required field validation?

#### 2.4.4 Icon Selection

**Label:** "Icon"  
**Helper Text:** "Choose an icon to visually personalize your task."

| Icon | State |
|------|-------|
| Lotion bottle | Selected (blue glow) |
| Pills | Unselected |
| Water drops | Unselected |
| Person/exercise | Unselected |
| Chart | Unselected |

**Behavior:** Horizontal scroll, single selection

#### 2.4.5 Time Selection

| Option | State |
|--------|-------|
| AM | Selected (blue glow) |
| PM | Unselected |
| Specific Time | Unselected |

**DESIGN GAP:** "Specific Time" picker UI not shown. What time format? 12h or 24h?

#### 2.4.6 Frequency Selection

| Option | State |
|--------|-------|
| Daily | Selected (blue glow) |
| Custom | Unselected |

**DESIGN GAP:** "Custom" frequency options not shown. Weekly? Specific days?

#### 2.4.7 Notes Section

| Element | Value |
|---------|-------|
| Label | "Notes (Optional)" |
| Placeholder | "Any additional notes..." |
| Input Type | Multi-line textarea |

#### 2.4.8 Save Button

| Element | Microcopy | Behavior |
|---------|-----------|----------|
| Button | "Save Task" | Full-width gradient blue button |

**DESIGN GAP:**
- Success/error states not shown
- Validation rules not defined
- Post-save navigation not specified

---

### 2.5 CHAT SCREEN

**Frame Reference:** Chat (Node ID: 58:212)

#### 2.5.1 Header

| Element | Microcopy | Behavior |
|---------|-----------|----------|
| Back Button | Left chevron | Navigate back |
| Title | "EczAI Chat" | Static |
| Menu Button | Three dots | Opens menu (not shown) |

#### 2.5.2 Mode Toggle

| Option | State |
|--------|-------|
| Skin Coach | Selected (blue pill) |
| Emotional Support | Unselected |

**DESIGN GAP:** Emotional Support mode UI not shown in this frame.

#### 2.5.3 Chat Conversation

**Date Pill:** "Today" (centered)

**AI Message 1 (9:42 AM):**
```
Hi! I'm EczAI, your personal skin health assistant. I've analyzed your symptom logs from the past week. Would you like me to share insights?
```

**User Message 1 (9:43 AM):**
```
Yes please! I've been feeling worse lately
```

**AI Message 2 (9:43 AM):**
```
I understand. Let me share what I've found from your recent logs:
```

#### 2.5.4 Analysis Card (In Chat)

**Title:** "Your 7-Day Analysis" (with chart icon)

| Metric | Value | Color |
|--------|-------|-------|
| Stress Level | High (8/10) | Red |
| Sleep Quality | Poor (4/10) | Red |
| Top Trigger | Dairy Products | Blue link |

#### 2.5.5 AI Insight Message (9:44 AM)

```
Your stress levels have been elevated, and you've had less sleep than usual. I also noticed a pattern with dairy consumption on days when your symptoms worsened.
```

#### 2.5.6 Recommendation Card

**Title:** "Here's what I recommend:" (with lightbulb icon)

| Action | Icon |
|--------|------|
| Avoid dairy for 1-2 weeks | Yellow bullet |
| Try 10-minute meditation daily | Yellow bullet |
| Apply extra moisturizer tonight | Yellow bullet |

#### 2.5.7 User Response (9:45 AM)

```
Thank you! That's really helpful
```

#### 2.5.8 AI Response (9:45 AM)

```
You're welcome! I'm here to help. Feel free to ask me anything about your skin health, triggers, or routines anytime.
```

#### 2.5.9 Quick Action Buttons

| Button | Style |
|--------|-------|
| Show weekly summary | Pill button, dark |
| Suggest coping tip | Pill button, dark |

#### 2.5.10 Disclaimer

**Microcopy:** "EczAI is for informational purposes and not a medical diagnosis."

#### 2.5.11 Input Area

| Element | Placeholder | Behavior |
|---------|-------------|----------|
| Attachment Button | Paperclip icon | Attach files |
| Text Input | "Ask anything about your skin..." | Text entry |
| Send Button | Blue circle with arrow | Submit message |

**DESIGN GAP:**
- Message loading states not shown
- Error handling for AI responses not shown
- Offline behavior not defined
- Message history persistence not specified
- Attachment types supported not defined
- Emotional Support mode conversation flow not shown

---

### 2.6 INSIGHTS SCREEN

**Frame Reference:** Insights (Node ID: 44:6)

#### 2.6.1 Header

| Element | Microcopy | Behavior |
|---------|-----------|----------|
| Back Button | Left chevron | Navigate back |
| Title | "Insights" | Static |
| Menu Button | Three dots | Opens menu (not shown) |

#### 2.6.2 AI Summary Card (Gradient Blue)

**Title:** "Your Week at a Glance"

**Content:**
```
AI analysis shows your flare severity slightly decreased this week, coinciding with higher sleep duration.
```

**Action:** "View Full Report →" link (navigates to Weekly Insights Report)

#### 2.6.3 Average Severity Card

| Element | Value |
|---------|-------|
| Icon | Chart icon in dark circle |
| Label | "Average Symptom Severity" |
| Score | "5.7" |
| Scale | "/ 10" |
| Trend | "↑ 0.3" (green, improvement) |

#### 2.6.4 Symptom Trends Section

**Header:** "Symptom Trends"

| Symptom | Color Bar | Value |
|---------|-----------|-------|
| Itchiness | Blue gradient | 6.2 / 10 |
| Redness | Blue gradient | 5.8 / 10 |
| Dryness | Blue gradient | 5.2 / 10 |

#### 2.6.5 Flare Severity Chart

**Header:** "Flare Severity — Last 7 Days"

**Chart:** Line graph
- Y-axis: 0-10 scale (labeled 2, 4, 6, 8, 10)
- X-axis: Days of week (Su, Mo, Tu, We, Th, Fr, Sa)
- Line color: Blue gradient
- Shows severity trend over the week

#### 2.6.6 Symptom Calendar

**Header:** "Your Symptom Calendar"  
**Month:** "June 2024" with left/right navigation arrows

**Calendar Grid:**
| Day | State | Visual |
|-----|-------|--------|
| Days 1-2 | No data | Empty |
| Days 3-9 | Logged | Emoji faces (green/yellow/red based on severity) |
| Days 10-16 | Logged | Emoji faces |
| Days 17-23 | Logged | Emoji faces |
| Day 24 | Current | Blue highlight |
| Days 25-30 | Future | Gray, some with emoji |

**Severity Icons:**
- Green happy face = Clear
- Yellow neutral face = Moderate
- Red sad face = Flaring

#### 2.6.7 Recent Logs Section

**Header:** "Recent Logs"

| Log Entry | Date | Severity | Description | Icon |
|-----------|------|----------|-------------|------|
| Mon 24 | - | 7/10 | "High itch, poor sleep." | Red face |
| Sun 23 | - | 5/10 | "Moderate symptoms, stress trigger." | Yellow face |
| Sat 22 | - | 3/10 | "Good day, low symptoms." | Green face |

**Action:** Each entry has right chevron (tappable, navigates to detail view)

**DESIGN GAP:** Log detail view not provided in Figma.

#### 2.6.8 Bottom Navigation

Same as Home screen.

---

### 2.7 WEEKLY INSIGHTS REPORT SCREEN

**Frame Reference:** Weekly insights report (Node ID: 123:309)

#### 2.7.1 Header

| Element | Microcopy | Behavior |
|---------|-----------|----------|
| Back Button | Left chevron | Navigate back |
| Share Button | Share icon | Export report |
| Title | "Weekly Insights Report" | Static |
| Date Range | "June 17-23, 2025" | Static |

#### 2.7.2 EczAI Coach Summary Section

**Icon:** Brain icon in gradient circle  
**Title:** "EczAI Coach Summary"

**Content Paragraphs:**
1. "Great progress this week! Your commitment to consistent skincare routines is paying off, with noticeable improvements in overall skin condition."

2. "Your average symptom severity decreased to 5.7/10, down from 6.0 last week. This coincides with improved sleep quality and better adherence to your evening moisturizing routine."

3. "EczAI detected stress as a recurring trigger, appearing on 4 out of 5 high-severity days. Consider incorporating stress-management techniques like meditation or light exercise."

4. "Your sleep duration improved significantly, averaging 7.2 hours per night. This correlates with reduced morning itchiness and better overall symptom control."

5. "For next week, focus on maintaining your skincare routine consistency and exploring stress-reduction strategies. Consider tracking your stress levels more closely to identify specific patterns."

**Topic Tags:**
| Tag | Icon |
|-----|------|
| Sleep Quality | Moon |
| Skincare Routine | Droplet |
| Stress Management | Brain |
| Medication Timing | Clock |

#### 2.7.3 Routine Adherence Summary

**Title:** "Routine Adherence Summary"

| Category | Percentage | Tasks |
|----------|------------|-------|
| Skincare | 85% | 6/7 Tasks |
| Medications | 71% | 5/7 Tasks |
| Lifestyle | 64% | 9/14 Tasks |
| Overall | 73% | Overall this week |

#### 2.7.4 Your Progress Section

| Metric | Value | Label |
|--------|-------|-------|
| 24 | Flare-free Days | - |
| 8 | Moderate Days | - |
| 1 | Flares this Month | - |

#### 2.7.5 EczAI-Detected Triggers

**Title:** "EczAI-Detected Triggers"

| Trigger | Risk Level | Correlation | Description |
|---------|------------|-------------|-------------|
| Stress | High Risk (red) | 82% | "Correlated with 4 out of 5 severe flare days." |
| Heat | Medium Risk (yellow) | 64% | "Associated with increased itchiness during afternoon hours." |
| Dairy | Low Risk (green) | 38% | "Mild correlation detected on 2 days with elevated symptoms." |

**Visual:** Progress bars showing correlation percentage

#### 2.7.6 Action Buttons

| Button | Style | Behavior |
|--------|-------|----------|
| Share as PDF | Outline | Export report as PDF |
| Send to Doctor | Filled blue | Share with healthcare provider |

**DESIGN GAP:** 
- PDF generation logic not specified
- "Send to Doctor" flow not shown - email? In-app share? Healthcare provider integration?

---

### 2.8 PROFILE SCREEN

**Frame Reference:** Profile (Node ID: 223:561)

#### 2.8.1 Header

| Element | Microcopy | Behavior |
|---------|-----------|----------|
| Back Button | Left chevron | Navigate back |
| Title | "Profile" | Static |
| Settings Button | Gear icon | Opens settings (not shown) |

**DESIGN GAP:** Settings screen not provided.

#### 2.8.2 User Profile Card

| Element | Value |
|---------|-------|
| Avatar | User photo (circular) |
| Name | "Sarah Mitchell" |
| Email | "sarah.m@email.com" |
| Subscription Badge | "Pro Trial" |
| Trial Status | Green dot + "5 days left" |

#### 2.8.3 Stats Grid

| Stat | Value | Label |
|------|-------|-------|
| 127 | Total Logs | - |
| 14 | Best Streak | - |
| 4.2 | Average Severity | - |
| Today | Last Backup | - |

#### 2.8.4 Symptom Calendar

**Header:** "Your Symptom Calendar"  
**Month:** "June 2024" with navigation

Calendar grid showing:
- Days with severity icons (emoji faces)
- Color coding by severity level
- Current day highlighted

#### 2.8.5 Data and History Section

| Menu Item | Icon | Action |
|-----------|------|--------|
| Log History | Clock | View all logs |
| Export Data | Download | "Last export: 3 days ago" |
| Delete Entries | Trash | Delete log entries |
| Edit Personal Details | Pencil | Edit profile |

**DESIGN GAP:** 
- Log History screen not shown
- Export format options not specified (CSV? PDF? JSON?)
- Delete confirmation flow not shown
- Edit Personal Details form not shown

#### 2.8.6 About and Support Section

| Menu Item | Icon | Action/Value |
|-----------|------|--------------|
| FAQ and Support | Question mark | Opens FAQ |
| Privacy Policy | Document | External link icon |
| Send Feedback and Feature Requests | Message | Opens feedback form |
| Version and Build | Info | "v2.1.3 - Build 47" |

**DESIGN GAP:** FAQ, Privacy Policy, and Feedback screens not provided.

#### 2.8.7 Beta Tester Card

**Icon:** Star badge  
**Title:** "You're an Early Beta Tester!"

**Content:**
```
Thank you for being part of our journey. Your feedback and insights are shaping Eczie into the best possible experience for everyone managing eczema.
```

#### 2.8.8 Account Actions

| Button | Style | Behavior |
|--------|-------|----------|
| Sign Out | Outline with icon | Log out user |
| Delete Account | Red text link | Delete account |

**DESIGN GAP:**
- Sign out confirmation not shown
- Delete account confirmation flow not shown
- Data deletion policy not specified

---

## 3. Navigation Flow Summary

```
HOME (23:241)
├── Complete Entry → SYMPTOM LOG (100:1653)
│   └── Save → Back to HOME
├── Track Routine → ROUTINE TRACKER (55:4)
│   └── + FAB → ADD ROUTINE (139:1474)
│       └── Save Task → Back to ROUTINE TRACKER
├── Tab: Insights → INSIGHTS (44:6)
│   └── View Full Report → WEEKLY INSIGHTS REPORT (123:309)
├── Tab: Chat → CHAT (58:212)
└── Tab: Profile → PROFILE (223:561)
```

---

## 4. Technical Constraints Cross-Reference

Per `tech-stack-preferences.txt`:

| Requirement | Tech Stack Alignment | Notes |
|-------------|---------------------|-------|
| Mobile App | React Native + Expo | Confirmed |
| Data Storage | Supabase (PostgreSQL) | Symptom logs, routines, user data |
| Authentication | Supabase Auth | Profile screen shows user data |
| AI Features | OpenAI API via Fastify backend | EczAI chat and insights |
| Image Storage | Supabase Storage | Photo uploads in Symptom Log |
| HIPAA Compliance | Row Level Security, encryption | Health data requires compliance |

---

## 5. Consolidated Design Gaps

### 5.1 Critical (Blocks Development)

| ID | Screen | Gap Description |
|----|--------|-----------------|
| GAP-001 | Symptom Log | Severity score calculation formula not defined |
| GAP-002 | Symptom Log | Post-save behavior not shown (navigation, confirmation) |
| GAP-003 | Home | Skin status selection outcome not defined |
| GAP-004 | Add Routine | "Specific Time" picker UI missing |
| GAP-005 | Add Routine | "Custom" frequency options UI missing |
| GAP-006 | Chat | AI error handling states not shown |
| GAP-007 | Profile | Delete account confirmation flow missing |

### 5.2 High Priority

| ID | Screen | Gap Description |
|----|--------|-----------------|
| GAP-008 | Symptom Log | Custom symptom entry UI not shown |
| GAP-009 | Symptom Log | Photo picker (camera vs gallery) not shown |
| GAP-010 | Symptom Log | Date picker UI not shown |
| GAP-011 | Insights | Log detail view not provided |
| GAP-012 | Weekly Report | "Send to Doctor" flow not defined |
| GAP-013 | Profile | Settings screen not provided |
| GAP-014 | Profile | Export format options not specified |

### 5.3 Medium Priority

| ID | Screen | Gap Description |
|----|--------|-----------------|
| GAP-015 | Home | Environmental data source not specified |
| GAP-016 | Home | Affirmation rotation logic not defined |
| GAP-017 | Routine Tracker | Menu options not defined |
| GAP-018 | Chat | Message history persistence not specified |
| GAP-019 | Chat | Offline behavior not defined |
| GAP-020 | Profile | FAQ, Privacy Policy screens not provided |

### 5.4 Low Priority (Polish)

| ID | Screen | Gap Description |
|----|--------|-----------------|
| GAP-021 | All | Loading states not shown |
| GAP-022 | All | Empty states not shown |
| GAP-023 | All | Error states not shown |
| GAP-024 | Symptom Log | Character limits for text fields not specified |

---

## 6. Appendix: Microcopy Reference

### 6.1 Button Labels
- "Save Symptom Log"
- "Save Task"
- "Share as PDF"
- "Send to Doctor"
- "Sign Out"
- "Delete Account"
- "View Full Report"
- "+ Add symptom"
- "+ Add Custom"
- "Add Photo"

### 6.2 Section Headers
- "How's your skin today?"
- "Your Progress"
- "Additional Symptoms"
- "Lifestyle Factors"
- "Possible Triggers"
- "Photos of Affected Areas"
- "Additional Notes"
- "EczAI Coach Summary"
- "Routine Adherence Summary"
- "EczAI-Detected Triggers"
- "Your Symptom Calendar"
- "Data & History"
- "About & Support"

### 6.3 Placeholder Text
- "e.g., Noticed itching after my evening workout..."
- "Apply Moisturizer"
- "Any additional notes..."
- "Ask EczAI anything..."

## 7 Risks & Mitigations
- **PHI exposure**: Improper storage of symptom and photo data → enforce Supabase RLS policies, encryption-at-rest, audit logs, regular HIPAA compliance reviews.
- **LLM hallucination/cost**: AI insights or chat providing unsafe advice or overrunning budget → implement retrieval guardrails, curated system prompt, quota caps, and content moderation Edge Function.
- **Adoption risk**: Users drop off after onboarding due to friction → monitor funnel events, add progressive nudges, deliver streak celebrations powered by `daily_summaries`.
- **Data quality**: Inconsistent logs hamper AI accuracy → add reminders, validate inputs server-side, incentivize completeness via motivational copy.
- **Infrastructure**: Weather/LLM APIs fail or exceed quotas → implement graceful fallbacks, circuit breakers in Edge Functions, and feature flags for staged rollout.

---

**Document End**

*This PRD was generated by the product-manager-figma-aware agent based solely on visible Figma designs. All gaps identified require product decisions before engineering implementation.*
