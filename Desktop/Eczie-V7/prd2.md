Product Requirements Document (PRD)
Product: Eczie
Platform: iOS + Android (Mobile-first)
Stage: Early Beta → MVP
Primary Goal: Help people with eczema understand what worsens or improves their condition and feel emotionally supported enough to stay consistent.

1. Problem-First Approach
Problem Analysis
What specific problem does this solve?
People living with eczema struggle with three compounding problems:
Uncertainty
They do not know what actually triggers their flares. Lifestyle, food, stress, weather, sleep, and products all interact in noisy, non-obvious ways.
Inconsistency
Daily tracking is tedious. Existing tools are slow, generic, or clinical, leading to poor adherence and unusable data.
Emotional fatigue
Flares feel personal and demoralizing. Most tools treat eczema as a purely medical issue, ignoring motivation, reassurance, and mental load.
Who experiences this most acutely?
Adults with mild-to-moderate eczema who are self-managing outside frequent clinical care
Parents tracking symptoms on behalf of children
Users experimenting with routines, diets, or lifestyle changes without clear feedback loops
These users do not need more information. They need confidence, pattern clarity, and momentum.



2. Executive Summary
Elevator Pitch
Eczie helps people with eczema track their skin, spot triggers, and stay motivated, all in a minute a day.
Problem Statement
People with eczema don’t know what’s causing their flares and lack the consistency and emotional support needed to manage the condition day to day.
Target Audience (Personas)

​​ - Avery (29) – busy professional managing moderate eczema who needs fast daily tracking and motivation.
 - Priya (34) – parent logging a child’s flare patterns, requiring reminders, shared reports, and high trust.
- Jordan (41) – person suffering from long-term chronic eczema who needs long-term trend tracking and confidence in what treatments are working.
Unique Selling Proposition
The only eczema companion that fuses daily symptom logs, routine tracking, AI-driven trigger detection, and emotional reinforcement into one secure, empathy-first mobile experience.
Impact Assessment
What changes for users if this works?
They feel less helpless during flares
They gain confidence about what helps vs hurts
They stick to routines longer
They have clearer conversations with doctors
How success will be measured
Primary metrics:
Daily logging completion rate
7-day and 30-day retention
Routine adherence percentage
AI insight engagement (views, follow-ups, recommendations accepted)
Secondary metrics:
Average severity trend over time
Streak length distribution
Report exports and shares (PDF, doctor)




Solution Validation
Why is this the right solution?
Eczie combines four things that are typically fragmented:
Fast daily logging
Sliders, chips, and defaults make data capture achievable in under 30–60 seconds.
Routine adherence tracking
Because treatment only works if it’s done, not just prescribed.
AI-powered pattern detection
Turning messy, imperfect data into probabilistic insights users can act on.
Emotional reinforcement
Affirmations, streaks, and empathetic AI responses reduce dropout during flares.
This is not a diagnostics app. It is a behavior change and insight engine.
What alternatives exist?
Generic health trackers (too broad, low relevance)
Paper journaling (high effort, no insights)
Condition-specific apps (often clinical, rigid, or abandoned)
Doctor visits alone (infrequent, retrospective, incomplete)


3. Product Scope and Core User Journey
In-Scope Screens
Home
Symptom Log
Routine Tracker
Add Routine
Chat
Insights
Weekly Insights Report
Profile
Core User Loop
User opens app
Logs symptoms and routines
Sees progress and streaks
Receives AI insights and recommendations
Feels reassured and motivated
Returns tomorrow
Everything in the product must reinforce this loop. Anything that doesn’t is noise.

4. Key Functional Requirements
4.1 Symptom Logging
User goal: Capture how their skin feels today without friction.
Requirements:
Severity sliders (itchiness, redness, dryness) on a 0–10 scale
Auto-calculated severity score using a transparent formula
Optional additional symptoms via chips and custom entry
Lifestyle factors: sleep, stress
Trigger selection across environment, food, personal factors
Optional photos with compression and secure storage
Optional free-text notes
Save action confirms success and returns user to Home
Non-goals:
Medical diagnosis
Mandatory completeness for all fields

4.2 Routine Tracking
User goal: Stay consistent with treatments and habits that help.
Requirements:
Daily checklist grouped by skincare, medications, lifestyle
Visual progress indicator and completion percentage
Weekly calendar view for context
Ability to add custom tasks with category, timing, frequency, and icon
Task completion immediately updates progress
Non-goals:
Complex scheduling logic in v1
Advanced reminders beyond basic notifications

4.3 AI Insights and Chat
User goal: Understand patterns and feel guided, not judged.
Requirements:
AI-generated summaries based on recent logs
Probabilistic trigger correlations with confidence indicators
Actionable, conservative recommendations
Clear medical disclaimer
Two modes:
Skin Coach (insight and guidance)
Emotional Support (validation and encouragement)
Message history persistence
Graceful handling of AI errors or downtime
Guardrails:
No diagnosis
No medication changes without disclaimers
No alarmist language

4.4 Insights and Weekly Report
User goal: See progress over time and share insights externally.
Requirements:
Weekly summary highlighting trends and improvements
Visual charts for severity and symptoms
Calendar-based history view
Routine adherence breakdown
AI-detected triggers with correlation percentages
Exportable weekly report (PDF)
Share flow suitable for clinicians

4.5 Profile and Data Control
User goal: Trust the product with sensitive health data.
Requirements:
Clear visibility into stats and history
Data export options
Account deletion with confirmation
Transparent privacy and support access
Backup status visibility

5.How the app should feel:

Eczie is a calm, grounded skin companion for people who feel overwhelmed, uncertain, and emotionally drained by eczema. It is for adults self-managing their condition and parents carrying quiet worry. The user state is fragile but functional. They are not panicking. They are tired. They want clarity without judgment. They want momentum without pressure. When they open the app, the feeling should be: “I’m not alone. This is manageable. There’s a pattern here.”
Vibe words: calm, steady, warm, grounded, human, trustworthy, quietly intelligent. Analog over sci fi. Soft light over neon glow. Linen notebook over holographic dashboard. It should feel like a well-designed wellness journal with a smart layer beneath it. The AI is present but not flashy. More therapist energy than lab scientist. Avoid clinical coldness. Avoid hyper-optimizing gamification. Avoid cheerleader positivity during bad flares. Avoid tech bro futurism. Avoid overloading with data density that feels like performance tracking.
What to avoid:
No harsh reds as dominant accents. Red already represents inflammation in the user’s life. Do not amplify it.
No hyper saturated tech blues that feel like fintech or crypto.
No clinical hospital white and steel gray combinations.
No gamified dopamine colors that feel like fitness tracking apps.
No glossy sci fi gradients that make the AI feel experimental.
The mascot being a droplet is powerful. That means the entire product is metaphorically about cooling and restoring balance. If your visual system reinforces that every time the app opens, you are shaping emotional regulation before the user reads a single word.