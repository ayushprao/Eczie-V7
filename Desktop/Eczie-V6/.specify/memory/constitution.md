<!--
SYNC IMPACT REPORT
==================
Version change: 0.0.0 → 1.0.0 (MAJOR - initial constitution)
Modified principles: N/A (new document)
Added sections:
  - Core Principles (7 principles)
  - Technical Constraints
  - Development Workflow
  - Governance
Removed sections: N/A
Templates requiring updates:
  - .specify/templates/plan-template.md ✅ (compatible - Constitution Check section exists)
  - .specify/templates/spec-template.md ✅ (compatible - user stories align with UX-first principle)
  - .specify/templates/tasks-template.md ✅ (compatible - phased approach aligns with principles)
Follow-up TODOs: None
-->

# Eczie Constitution

## Core Principles

### I. PHI Safety First (NON-NEGOTIABLE)

All development decisions MUST prioritize Protected Health Information (PHI) safety above feature velocity.

- No PHI ever embedded in OTA-delivered code paths
- No photos, notes, or symptom content pass through the app server—direct upload to Supabase Storage via signed URLs only
- Client MUST never call LLM directly; all AI requests proxy through backend with PHI transformation
- RLS (Row-Level Security) enforced on every Supabase table; RLS tests required for all schema changes
- Service-role keys MUST remain server-side only; no service-role keys in client bundle
- Sentry and analytics MUST scrub PHI in `beforeSend`; no raw user text, timestamps, emails, or IDs in telemetry
- All destructive actions (delete account, delete entries) require explicit multi-step confirmation

**Rationale:** HIPAA compliance is a legal requirement. A single PHI leak destroys user trust and product viability.

### II. Speed of Entry Over Polish

Every logging interaction MUST complete in under 30 seconds.

- Prioritize single-tap selections, pre-filled defaults, and minimal navigation depth
- Forms MUST use `react-hook-form` with `zod` validation—no form submits without schema validation
- Local draft buffer for Symptom Logs: persist if save fails, auto-flush on reconnection, 48-hour TTL
- UI indicator required: "Saved locally, will sync when online"

**Rationale:** Target personas (busy professionals, parents) need fast daily tracking. Friction kills retention.

### III. Trust Through Transparency

Never present AI-derived information without source attribution or confidence context.

- All correlation percentages MUST be visible (e.g., "82% correlation")
- Recommendations MUST be framed as suggestions, not prescriptions
- Language enforcement: "Associated with", "Correlated with"—NEVER "Caused by"
- Disclaimer MUST be visible: "EczAI is for informational purposes and not a medical diagnosis"
- Confidence thresholds MUST gate AI output; low-confidence insights are suppressed

**Rationale:** Users managing chronic conditions need detail to build confidence in patterns. Vague AI outputs erode trust.

### IV. Emotional Steadiness Over Celebration

Reinforcement language MUST remain calm and validating.

- Avoid exclamation marks in health-related contexts
- Never imply user failure for missed days or high severity
- Streak messaging framed as self-care ("Consistency is healing"), not achievement
- Affirmations acknowledge difficulty without false positivity ("This flare is temporary, calm is returning")
- Animations MUST reinforce calm, reassurance, or progress—otherwise remove them

**Rationale:** Eczema flares are stressful. Gamification pressure or false positivity worsens user experience during difficult periods.

### V. Graceful Degradation

All screens MUST have defined fallback states.

- AI features MUST fail silently with informative messaging
- Core logging MUST function without network dependency where possible (local draft buffer)
- Offline posture: no full offline sync, but Symptom Log drafts persist locally
- Retry only on idempotent GETs; no automatic retry on mutations
- Request timeout: 30 seconds for AI, 10 seconds for standard API calls

**Rationale:** Infrastructure failures are inevitable. Users must never lose data or be blocked from core logging.

### VI. Schema-Driven Contracts

Shared `zod` schemas define the single source of truth across frontend, backend, and AI.

- Same schemas used in: frontend form validation, backend request validation, AI feature extraction
- API contracts generated via `@fastify/swagger` + `zod-to-openapi`
- Shared types via `openapi-typescript`
- No form submits without schema validation
- Breaking schema changes require migration plan and version bump

**Rationale:** Type mismatches between layers cause silent bugs. Schema-first development catches errors at compile time.

### VII. Simplicity Over Premature Scale

Start simple. YAGNI (You Aren't Gonna Need It) applies.

- No full offline sync engines—local draft buffer is sufficient
- In-memory caching only; no complex cache invalidation
- Two-layer insight model: instant (deterministic rules, zero latency) + reflective (LLM, weekly/on-demand)
- Avoid "AI magic theater"—every insight must be explainable
- Complexity MUST be justified in Complexity Tracking table if Constitution Check fails

**Rationale:** Premature optimization creates maintenance burden. Ship value first, scale when data proves need.

## Technical Constraints

### Stack Requirements

| Layer | Technology | Notes |
|-------|------------|-------|
| Mobile | React Native + Expo (EAS) | TypeScript strict, iOS-first |
| State (UI) | Zustand | Ephemeral/form state only |
| State (Server) | @tanstack/react-query | Logs, routines, insights, chat |
| Validation | Zod | Shared across all layers |
| Navigation | @react-navigation/native | 4 tabs: Home, Insights, Chat, Profile |
| Styling | NativeWind | Tailwind tokens synced from Figma |
| Animation | react-native-reanimated + moti | Sparingly, calm-only |
| Charts | victory-native | Line/bar charts for insights |
| Backend | Fastify + TypeScript | Supabase JWT verification |
| Database | Supabase Postgres | RLS everywhere |
| Storage | Supabase private buckets | Signed URL uploads |
| Auth | Supabase Auth | Apple Sign-In primary, passwordless email fallback |
| AI | OpenAI via Fastify proxy | Never direct client calls |

### Accessibility Requirements

- WCAG AA compliance
- Minimum 44px tap targets
- Screen-reader friendly sliders
- Reduced-motion support
- All buttons and inputs properly labeled

### Performance Targets

- Logging interaction: <30 seconds end-to-end
- API response: <200ms p95 for standard endpoints
- AI response: <30 seconds timeout
- Draft sync: <5 seconds on reconnection

## Development Workflow

### Authoritative References

All implementation MUST derive from these documents:

1. **PRD.md** — Product requirements, screen specs, microcopy, interaction sequences
2. **DESIGN-SYSTEM.md** — Semantic tokens, component states, composition rules
3. **tech-stack-preferences.txt** — Technology choices, PHI rules, operational policies
4. **docs/** — Feature breakdown with epics, stories, acceptance criteria

### Quality Gates

- [ ] PHI Safety: No PHI in client bundle, OTA paths, or telemetry
- [ ] Schema Validation: All forms use zod; no unvalidated submissions
- [ ] RLS Tests: Required for any schema change
- [ ] Accessibility: WCAG AA, 44px targets, screen-reader support
- [ ] Offline Behavior: Draft buffer works; graceful degradation defined
- [ ] AI Language: No causal claims; confidence visible; disclaimer present

### Code Review Checklist

Every PR MUST verify:

1. Constitution principles not violated
2. PHI handling follows proxy rules
3. Error states and fallbacks defined
4. Accessibility requirements met
5. Schema changes have RLS tests

## Governance

This Constitution supersedes all other development practices for the Eczie project.

### Amendment Process

1. Propose change with rationale
2. Document impact on existing code
3. Update Constitution with version bump
4. Propagate changes to dependent templates
5. Create Sync Impact Report

### Version Policy

- **MAJOR**: Backward-incompatible principle changes or removals
- **MINOR**: New principles added or existing principles materially expanded
- **PATCH**: Clarifications, wording fixes, non-semantic refinements

### Compliance

- All PRs MUST pass Constitution Check before merge
- Complexity violations MUST be justified in Complexity Tracking table
- Runtime guidance in authoritative reference documents

**Version**: 1.0.0 | **Ratified**: 2026-01-29 | **Last Amended**: 2026-01-29
