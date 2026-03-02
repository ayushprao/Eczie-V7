<!-- SYNC IMPACT REPORT
Version change: N/A (template) → 1.0.0 (initial ratification)
Modified principles: N/A — all new
Added sections:
  - Core Principles (7 principles)
  - Technical Constraints
  - Development Workflow & Quality Gates
  - Governance
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md ✅ compatible (Constitution Check section exists)
  - .specify/templates/spec-template.md ✅ compatible (no constitution-specific tokens)
  - .specify/templates/tasks-template.md ✅ compatible (no constitution-specific tokens)
  - .specify/templates/checklist-template.md ✅ compatible
  - .specify/templates/agent-file-template.md ✅ compatible
Follow-up TODOs: None
-->

# Eczie Constitution

## Core Principles

### I. PHI Safety First (NON-NEGOTIABLE)

HIPAA-grade safeguards MUST govern every layer of the stack.

- Every Convex query and mutation MUST filter by authenticated
  `user_id`; no function may return another user's data.
- PHI (symptom logs, photos, free-text notes, chat messages)
  MUST be encrypted at rest and in transit.
- No PHI MUST be embedded in OTA-delivered code paths.
- Photos MUST be stored via signed-URL upload to encrypted
  object storage; only a storage reference ID is persisted
  in the document database.
- The PHI Transform Library MUST strip free text, aggregate
  counts, bucket time ranges, and remove user identifiers
  before any data reaches an LLM.
- Audit log collection MUST exist for sensitive reads.
- Service keys and API secrets MUST live exclusively in
  server-side environment variables, never in client code.

**Rationale:** Users entrust Eczie with intimate health data.
A single PHI leak destroys trust irreversibly.

### II. Empathy-First UX (NON-NEGOTIABLE)

The app MUST feel calm, grounded, and validating — never
clinical, gamified, or guilt-inducing.

- No harsh reds as dominant accents; red represents
  inflammation in the user's life and MUST NOT be amplified.
- No hyper-saturated tech blues, clinical hospital whites,
  gamified dopamine colors, or glossy sci-fi gradients.
- Tone MUST be warm and reassuring. Avoid cheerleader
  positivity during bad flares; avoid alarmist language.
- The AI disclaimer ("EczAI provides informational support
  and is not a medical diagnosis") MUST be visible at all
  times in the Chat screen empty state and MUST appear on
  every weekly report.
- Streak and progress displays MUST reinforce consistency,
  never punish gaps. No guilt messaging on missed days.
- Affirmations MUST be condition-aware: calm/validating
  during flares, gently celebratory on clear days.

**Rationale:** Users are emotionally fatigued. The product
is a behavior-change and insight engine, not a performance
tracker.

### III. Speed of Entry

Symptom logging MUST be achievable in under 30 seconds on
a typical day.

- Primary inputs (severity sliders, skin status, toggle
  chips) MUST use optimistic UI updates.
- Save actions (log submission, routine creation) MUST use
  pessimistic updates with clear loading and success states.
- The daily logging flow MUST NOT require mandatory
  completion of all fields; optional sections (photos,
  notes, additional symptoms) MUST be clearly marked.
- Default values and smart prefills (last-used triggers,
  recent routines) SHOULD be used to reduce taps.

**Rationale:** Consistency drives data quality; friction
kills adherence. Every extra tap is a dropout risk.

### IV. Explainability Over Simplification

Users MUST understand why the app shows what it shows.

- AI-detected triggers MUST display correlation percentages
  and the number of data points behind each conclusion.
- Severity scores MUST use a transparent, documented formula
  (not a black-box model).
- Weekly insight reports MUST include confidence context
  (e.g., "based on 5 of 7 logged days") and never present
  vague summaries without supporting data.
- Instant (deterministic) insights MUST be separated from
  reflective (LLM) insights so the user knows the source.

**Rationale:** Users need confidence in what helps vs. hurts.
Vague outputs erode trust; transparent ones build agency.

### V. Graceful Degradation

The app MUST remain usable when network, APIs, or external
services are unavailable.

- A local draft buffer (expo-secure-store, 48h TTL) MUST
  persist symptom log drafts when Convex mutations fail,
  with auto-flush on network restoration.
- Chat MUST show a clear offline banner and disable the
  composer when connectivity is lost; draft text MUST be
  preserved on send failure with a retry action.
- Weather/environmental data MUST degrade to "unavailable"
  with last-known values rather than blocking the Home
  screen.
- LLM failures MUST surface a per-message retry action
  and never leave the user on a blank screen.
- Feature flags MUST gate staged rollouts so broken
  features can be disabled without a full app update.

**Rationale:** Eczema doesn't pause for API outages. Core
logging must work even under degraded conditions.

### VI. Accessibility & Visual Consistency

The app MUST be usable by everyone, including during flares
when motor precision and cognitive bandwidth are reduced.

- All interactive targets MUST be at least 44pt.
- Color contrast MUST meet WCAG AA (4.5:1 for text,
  3:1 for large text / UI components).
- Layout MUST NOT shift or reflow during flare states or
  data loading; skeleton placeholders MUST preserve
  spatial stability.
- The Eczie mascot MUST visually mirror the user's state
  (calm on good days, empathetic concern during flares)
  without being alarming.

**Rationale:** Flares impair fine motor control and focus.
The UI must be stable and forgiving at its worst moments.

### VII. Simplicity & YAGNI

Start simple. Complexity MUST be justified against a
simpler rejected alternative.

- No full offline-first sync; only the symptom log draft
  buffer is persisted locally.
- Caching is in-memory only plus Convex reactive cache;
  no dedicated caching layer.
- State management: `zustand` for ephemeral/UI state,
  Convex React client hooks (or `@tanstack/react-query`)
  for server state.
- Validation: shared `zod` schemas across frontend forms,
  Convex mutation inputs, and AI feature-extraction
  contracts.
- No complex scheduling logic, advanced reminders beyond
  basic notifications, or multi-provider auth in v1.
- Every new abstraction (repository pattern, service layer,
  extra Convex collection) MUST document why the simpler
  alternative was insufficient.

**Rationale:** Premature abstraction costs more than
refactoring. Ship the simplest thing that works safely.

## Technical Constraints

| Layer | Technology | Notes |
|-------|-----------|-------|
| Mobile framework | React Native + Expo (EAS) | iOS-first, Android supported |
| Language | TypeScript (strict) | Across frontend and backend |
| Runtime | Node 18+ | — |
| Backend | Convex (queries, mutations, actions, crons, HTTP actions) | No separate Fastify layer in baseline |
| Database | Convex document database | Collections: users, logs, routines, routineCompletions, insights, chatMessages, weeklyReports |
| Auth | Convex Auth + Apple Sign-In (Option A) or Clerk/Auth0 (Option B) | All functions reject unauthenticated access |
| PHI photo storage | External (Cloudflare R2 / GCS / S3) via signed-URL upload | Only reference ID stored in documents |
| AI — instant insights | Deterministic rules in Convex mutations | Zero external calls |
| AI — reflective insights | Convex Action → PHI Transform → LLM | Conservative language, anonymized aggregates only |
| UI state | `zustand` | Forms, toggles, draft buffer, UI flags |
| Server state | Convex React hooks or `@tanstack/react-query` | Logs, routines, insights, chat |
| Validation | `zod` | Shared schemas: forms, mutations, AI contracts |
| Local draft buffer | `expo-secure-store` | Symptom log only, 48h TTL |
| OTA updates | Expo EAS Updates | Non-PHI UI logic only |
| Target platforms | iOS 15+, Android 13+ | — |

## Development Workflow & Quality Gates

### Workflow

All features follow the specify → plan → task → implement → validate pipeline:

1. **Specify** (`/speckit.specify`): Feature spec with prioritized
   user stories, acceptance scenarios, and edge cases.
2. **Plan** (`/speckit.plan`): Technical plan with constitution
   check, project structure, and complexity justification.
3. **Tasks** (`/speckit.tasks`): Dependency-ordered, phased task
   list grouped by user story.
4. **Implement** (`/speckit.implement`): Execute tasks; commit
   after each task or logical group.
5. **Validate**: Run acceptance scenarios; confirm constitution
   compliance before merge.

### Quality Gates

| Gate | Criteria |
|------|----------|
| **PHI gate** | No PHI in OTA bundles; every query/mutation filters by `user_id`; PHI Transform applied before LLM calls |
| **UX gate** | No guilt language; AI disclaimer visible; 44pt touch targets; WCAG AA contrast |
| **Performance gate** | Log entry completable in <30s; optimistic UI on toggles; pessimistic saves with loading states |
| **Explainability gate** | Correlation percentages on triggers; documented severity formula; confidence context on insights |
| **Degradation gate** | Draft buffer tested offline; chat offline banner functional; weather fallback renders |
| **Simplicity gate** | New abstractions documented with rejected simpler alternative |

## Governance

- This constitution supersedes all other development
  practices. Conflicting guidance in PRDs, specs, or plans
  MUST be reconciled to comply with these principles.
- Amendments require: (1) documented rationale, (2) version
  bump per semver (MAJOR for principle removal/redefinition,
  MINOR for additions/expansions, PATCH for clarifications),
  (3) propagation check across plan, spec, and task
  templates.
- All PRs and code reviews MUST verify compliance with the
  PHI, UX, and simplicity gates above.
- Complexity additions MUST be justified in the plan's
  Complexity Tracking table with the simpler rejected
  alternative documented.
- A compliance review MUST occur before any public release
  or beta expansion.

**Version**: 1.0.0 | **Ratified**: 2026-03-02 | **Last Amended**: 2026-03-02
