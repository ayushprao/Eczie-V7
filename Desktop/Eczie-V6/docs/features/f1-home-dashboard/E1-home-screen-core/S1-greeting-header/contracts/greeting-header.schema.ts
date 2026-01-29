/**
 * Greeting Header Schemas
 * 
 * Zod schemas for the Greeting Header component data contracts.
 * These schemas define the shape of data consumed by the GreetingHeader component.
 * 
 * @feature F1-E1-S1 Greeting Header
 * @see ../spec.md for requirements
 * @see ../data-model.md for entity definitions
 */

import { z } from 'zod';

// =============================================================================
// User Profile Schema (read-only for this feature)
// =============================================================================

/**
 * User profile data consumed by the greeting header.
 * Only includes fields relevant to this component.
 */
export const UserProfileSchema = z.object({
  /** User's unique identifier */
  id: z.string().uuid(),
  
  /** 
   * User's first name for personalized greeting.
   * - null/empty → fallback to "friend"
   * - >30 chars → truncate with ellipsis for display
   */
  firstName: z.string().max(100).nullable(),
  
  /** Account creation timestamp */
  createdAt: z.coerce.date(),
  
  /** Last profile update timestamp */
  updatedAt: z.coerce.date(),
});

export type UserProfile = z.infer<typeof UserProfileSchema>;

// =============================================================================
// Streak Data Schema (read-only for this feature)
// =============================================================================

/**
 * Streak data consumed by the greeting header.
 * Streak is defined as consecutive days with a saved symptom log entry.
 */
export const StreakDataSchema = z.object({
  /** Foreign key to user */
  userId: z.string().uuid(),
  
  /**
   * Current consecutive days with symptom log.
   * - 0 → hide streak badge
   * - 1 → display "1 day strong"
   * - >1 → display "{N} days strong"
   */
  currentStreak: z.number().int().nonnegative(),
  
  /** Date of most recent symptom log (null if never logged) */
  lastLogDate: z.coerce.date().nullable(),
  
  /** Historical best streak */
  longestStreak: z.number().int().nonnegative(),
  
  /** Last streak calculation timestamp */
  updatedAt: z.coerce.date(),
});

export type StreakData = z.infer<typeof StreakDataSchema>;

// =============================================================================
// Greeting Header Props Schema
// =============================================================================

/**
 * Props for the GreetingHeader component.
 * Derived from UserProfile and StreakData.
 */
export const GreetingHeaderPropsSchema = z.object({
  /** User's first name (may be null/empty) */
  firstName: z.string().nullable().optional(),
  
  /** Current streak count (0 = no badge shown) */
  streakCount: z.number().int().nonnegative().default(0),
  
  /** Current date for display (defaults to now) */
  currentDate: z.coerce.date().optional(),
  
  /** Whether data is still loading */
  isLoading: z.boolean().default(false),
});

export type GreetingHeaderProps = z.infer<typeof GreetingHeaderPropsSchema>;

// =============================================================================
// Display Value Schemas (computed/formatted values)
// =============================================================================

/**
 * Formatted greeting text.
 * Examples: "Welcome back, Ayush" or "Welcome back, friend"
 */
export const GreetingTextSchema = z.string().regex(
  /^Welcome back, .+$/,
  'Greeting must match format "Welcome back, {name}"'
);

export type GreetingText = z.infer<typeof GreetingTextSchema>;

/**
 * Formatted date label.
 * Example: "FRIDAY · JUNE 21"
 */
export const DateLabelSchema = z.string().regex(
  /^[A-Z\u00C0-\u024F\s]+ · [A-Z\u00C0-\u024F\s]+ \d{1,2}$/,
  'Date label must match format "WEEKDAY · MONTH DAY"'
);

export type DateLabel = z.infer<typeof DateLabelSchema>;

/**
 * Formatted streak badge text.
 * Examples: "1 day strong", "8 days strong", or empty string (hidden)
 */
export const StreakBadgeTextSchema = z.union([
  z.literal(''),
  z.literal('1 day strong'),
  z.string().regex(/^\d+ days strong$/, 'Must match "{N} days strong" format'),
]);

export type StreakBadgeText = z.infer<typeof StreakBadgeTextSchema>;

// =============================================================================
// Utility Functions
// =============================================================================

/**
 * Get the display name for greeting, with fallback.
 * @param firstName - User's first name (may be null/empty)
 * @returns Name to display, or "friend" as fallback
 */
export function getGreetingName(firstName: string | null | undefined): string {
  const trimmed = firstName?.trim();
  if (!trimmed || trimmed.length === 0) {
    return 'friend';
  }
  // Truncate long names (>30 chars) with ellipsis
  return trimmed.length > 30 ? `${trimmed.slice(0, 30)}…` : trimmed;
}

/**
 * Format the greeting text.
 * @param firstName - User's first name (may be null/empty)
 * @returns Formatted greeting string
 */
export function formatGreeting(firstName: string | null | undefined): GreetingText {
  const name = getGreetingName(firstName);
  return `Welcome back, ${name}` as GreetingText;
}

/**
 * Format the streak badge text.
 * @param count - Current streak count
 * @returns Formatted streak text, or empty string if count is 0
 */
export function formatStreakText(count: number): StreakBadgeText {
  if (count === 0) return '';
  if (count === 1) return '1 day strong';
  return `${count} days strong` as StreakBadgeText;
}

/**
 * Check if streak badge should be visible.
 * @param count - Current streak count
 * @returns true if badge should be shown
 */
export function shouldShowStreakBadge(count: number): boolean {
  return count > 0;
}
