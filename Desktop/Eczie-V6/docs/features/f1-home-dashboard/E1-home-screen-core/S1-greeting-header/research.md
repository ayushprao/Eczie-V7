# Research: Greeting Header

**Feature**: F1-E1-S1 Greeting Header  
**Date**: 2026-01-29  
**Status**: Complete

## Research Tasks

Based on the Technical Context, the following research areas were identified:

1. Date localization in React Native
2. Streak calculation and caching patterns
3. Accessibility best practices for screen reader announcements
4. NativeWind styling for gradient backgrounds

---

## 1. Date Localization in React Native

### Decision
Use JavaScript's built-in `Intl.DateTimeFormat` API with device locale detection via `expo-localization`.

### Rationale
- Native to JavaScript, no additional dependencies
- Supports all required locales out of the box
- Consistent with React Native's cross-platform approach
- Expo provides `expo-localization` for reliable locale detection

### Alternatives Considered

| Alternative | Rejected Because |
|-------------|------------------|
| moment.js | Large bundle size (~300KB), deprecated |
| date-fns | Requires manual locale imports, adds complexity |
| Native platform APIs via bridge | Inconsistent behavior across iOS/Android |

### Implementation Pattern

```typescript
import * as Localization from 'expo-localization';

function formatDateLabel(date: Date): string {
  const locale = Localization.locale;
  
  const weekday = new Intl.DateTimeFormat(locale, { weekday: 'long' })
    .format(date)
    .toUpperCase();
  
  const monthDay = new Intl.DateTimeFormat(locale, { month: 'long', day: 'numeric' })
    .format(date)
    .toUpperCase();
  
  return `${weekday} · ${monthDay}`;
}
```

---

## 2. Streak Calculation and Caching

### Decision
Streak count is pre-calculated on the backend during symptom log save and cached locally via `@tanstack/react-query` with `staleTime: Infinity` for the current session.

### Rationale
- Avoids complex date arithmetic on the client
- Single source of truth on backend
- Local cache ensures instant header render (<100ms)
- Background sync updates cache when app resumes

### Alternatives Considered

| Alternative | Rejected Because |
|-------------|------------------|
| Client-side calculation from log history | Requires fetching all logs; slow; date edge cases |
| Real-time calculation on every render | Performance impact; unnecessary complexity |
| expo-secure-store persistence | Adds complexity; react-query cache sufficient |

### Implementation Pattern

```typescript
// Hook pattern
function useStreakCount() {
  return useQuery({
    queryKey: ['streak', 'current'],
    queryFn: fetchStreakFromCache,
    staleTime: Infinity, // Never refetch during session
    gcTime: 1000 * 60 * 60 * 24, // 24h cache
  });
}

// Streak is updated via mutation when symptom log is saved
// Backend returns updated streak count in save response
```

### Streak Definition (from clarifications)
- A day counts toward streak **only if a symptom log entry is saved**
- Streak resets to 0 if a calendar day is missed (based on user's local timezone)

---

## 3. Accessibility: Screen Reader Announcements

### Decision
Use `accessibilityRole="header"` and `accessibilityLabel` on the greeting container, with `accessibilityLiveRegion="polite"` for dynamic content.

### Rationale
- React Native's accessibility props map to native platform APIs
- `accessibilityRole="header"` provides semantic meaning
- `accessibilityLiveRegion="polite"` announces changes without interrupting
- Aligns with WCAG AA requirements in Constitution

### Alternatives Considered

| Alternative | Rejected Because |
|-------------|------------------|
| Manual focus management | Overly complex; platform inconsistencies |
| Third-party accessibility library | Unnecessary; React Native built-ins sufficient |
| Separate announcement component | Adds complexity; built-in props work |

### Implementation Pattern

```typescript
<View
  accessible={true}
  accessibilityRole="header"
  accessibilityLabel={`${greeting}. ${dateLabel}. ${streakText || ''}`}
  accessibilityLiveRegion="polite"
>
  {/* Child components */}
</View>
```

### Accessibility Checklist
- [x] Greeting announced on page load
- [x] Date format readable by screen reader
- [x] Streak badge announced if present
- [x] Mascot marked as decorative (`accessibilityElementsHidden={true}`)

---

## 4. NativeWind Styling for Gradient Background

### Decision
Use `expo-linear-gradient` for the hero header background, styled with NativeWind utility classes for layout.

### Rationale
- `expo-linear-gradient` is the standard Expo solution
- NativeWind handles layout, spacing, and responsive design
- Gradient colors can be defined as design tokens
- Consistent with tech-stack-preferences.txt

### Alternatives Considered

| Alternative | Rejected Because |
|-------------|------------------|
| react-native-linear-gradient | Requires native linking; Expo version preferred |
| SVG background | More complex; less performant for simple gradients |
| Image background | Larger asset size; less flexible |

### Implementation Pattern

```typescript
import { LinearGradient } from 'expo-linear-gradient';

<LinearGradient
  colors={['#1a1a2e', '#16213e']} // Design system tokens
  className="px-4 pt-safe pb-6"
>
  <DateLabel date={currentDate} />
  <GreetingText name={firstName} />
  <StreakBadge count={streakCount} />
  <MascotImage />
</LinearGradient>
```

---

## 5. First Name Fallback Logic

### Decision
Check for `null`, `undefined`, empty string, and whitespace-only strings. Fallback to "friend".

### Rationale
- Covers all edge cases from spec
- Simple conditional logic
- "Welcome back, friend" is warm and inclusive (per clarification)

### Implementation Pattern

```typescript
function getGreetingName(firstName: string | null | undefined): string {
  const trimmed = firstName?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : 'friend';
}

function formatGreeting(firstName: string | null | undefined): string {
  const name = getGreetingName(firstName);
  return `Welcome back, ${name}`;
}
```

### Name Truncation (from edge cases)
- If name > 30 characters, truncate with ellipsis
- Implementation: `name.length > 30 ? name.slice(0, 30) + '…' : name`

---

## 6. Streak Badge Pluralization

### Decision
Use conditional logic for singular/plural: "1 day strong" vs "{N} days strong".

### Rationale
- Simple conditional; no i18n library needed for English
- Matches clarification: "1 day strong" for N=1, "{N} days strong" otherwise

### Implementation Pattern

```typescript
function formatStreakText(count: number): string {
  if (count === 0) return ''; // Badge hidden
  if (count === 1) return '1 day strong';
  return `${count} days strong`;
}
```

---

## Summary

All research tasks resolved. No NEEDS CLARIFICATION items remain.

| Task | Decision | Dependencies |
|------|----------|--------------|
| Date localization | `Intl.DateTimeFormat` + `expo-localization` | expo-localization |
| Streak caching | `@tanstack/react-query` with `staleTime: Infinity` | @tanstack/react-query |
| Screen reader | Native accessibility props | None |
| Gradient background | `expo-linear-gradient` + NativeWind | expo-linear-gradient |
| Name fallback | Conditional with "friend" default | None |
| Pluralization | Simple conditional | None |
