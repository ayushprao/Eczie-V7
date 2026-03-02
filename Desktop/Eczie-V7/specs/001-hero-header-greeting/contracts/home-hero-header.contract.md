# Contract: Home Hero Header Data Interface

## Contract Type

Convex query contract between mobile client (`Frontend`) and backend functions (`Backend/convex`).

## Endpoint / Function

- **Function Name**: `home.getHeroHeader`
- **Kind**: Authenticated Convex query

## Request

```ts
type GetHeroHeaderInput = {
  timezone: string; // IANA timezone, e.g. "America/New_York"
  locale: string;   // BCP-47 locale, e.g. "en-US"
  nowIso?: string;  // Optional override for deterministic test runs
};
```

### Request Rules

- Caller must be authenticated.
- `timezone` and `locale` are required and non-empty.
- `nowIso` is optional and must be valid ISO-8601 when present.

## Response

```ts
type GetHeroHeaderResponse = {
  firstName: string | null;
  streakCount: number; // integer >= 0
  mascotAssetKey: "eczie-default";
};
```

### Response Rules

- `streakCount = 0` means client must hide streak badge.
- Response must never include PHI beyond first-name personalization.
- No other user's data can be included.

## Client-Derived Presentation Rules

The client must derive UI strings from response data:

- `dateLabel`: localized uppercase `WEEKDAY · MONTH DAY`
- `greetingText`:
  - if `firstName` exists and trimmed length > 0 -> `Welcome back, {firstName}`
  - else -> `Welcome back`
- `streakLabel`:
  - if `streakCount === 1` -> `1 day strong`
  - if `streakCount >= 2` -> `{N} days strong`
  - if `streakCount === 0` -> hidden (`null`)

## Error Contract

```ts
type GetHeroHeaderError =
  | { code: "UNAUTHENTICATED"; message: string }
  | { code: "INVALID_ARGUMENT"; message: string }
  | { code: "INTERNAL"; message: string };
```

## Acceptance Mapping

- FR-002 / FR-003 / FR-003a -> `firstName` + greeting derivation rules
- FR-004 / FR-005 / FR-006 -> `streakCount` rules + hide at zero
- FR-001 -> client date formatting rules from `locale`
- FR-007 -> `mascotAssetKey` maps to bundled Eczie asset
