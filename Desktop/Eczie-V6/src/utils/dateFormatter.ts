/**
 * Date Formatting Utilities
 * 
 * Provides localized date formatting for the Greeting Header component.
 * Uses Intl.DateTimeFormat with expo-localization for device locale detection.
 * 
 * @feature F1-E1-S1 Greeting Header
 * @see FR-001: Display date in "WEEKDAY · MONTH DAY" format, localized
 */

import * as Localization from 'expo-localization';

/**
 * Format a date for display in the greeting header.
 * 
 * @param date - Date to format (defaults to current date)
 * @returns Formatted date string in "WEEKDAY · MONTH DAY" format, uppercase
 * 
 * @example
 * formatDateLabel(new Date('2026-06-21'))
 * // Returns "FRIDAY · JUNE 21" (in English locale)
 * // Returns "VENDREDI · JUIN 21" (in French locale)
 */
export function formatDateLabel(date: Date = new Date()): string {
  const locale = Localization.locale;
  
  const weekday = new Intl.DateTimeFormat(locale, { weekday: 'long' })
    .format(date)
    .toUpperCase();
  
  const monthDay = new Intl.DateTimeFormat(locale, { month: 'long', day: 'numeric' })
    .format(date)
    .toUpperCase();
  
  return `${weekday} · ${monthDay}`;
}

/**
 * Get the current device locale.
 * Useful for testing and debugging locale-specific formatting.
 * 
 * @returns Current device locale string (e.g., "en-US", "fr-FR")
 */
export function getDeviceLocale(): string {
  return Localization.locale;
}
