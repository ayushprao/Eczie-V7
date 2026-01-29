/**
 * GreetingText Component
 * 
 * Displays the personalized greeting with user's first name.
 * Falls back to "friend" when firstName is missing or blank.
 * 
 * @feature F1-E1-S1 Greeting Header
 * @see FR-002: Display personalized greeting with fallback
 */

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { formatGreeting } from '../../../schemas/greeting.schema';

interface GreetingTextProps {
  /** User's first name (null/empty triggers fallback to "friend") */
  firstName: string | null | undefined;
}

/**
 * Renders the personalized greeting text.
 * 
 * Features:
 * - Displays "Welcome back, {firstName}"
 * - Falls back to "Welcome back, friend" when firstName is missing/blank
 * - Truncates names > 30 characters with ellipsis
 * 
 * @example
 * <GreetingText firstName="Ayush" /> // "Welcome back, Ayush"
 * <GreetingText firstName={null} /> // "Welcome back, friend"
 */
export function GreetingText({ firstName }: GreetingTextProps) {
  const greeting = formatGreeting(firstName);
  
  return (
    <Text style={styles.text} accessibilityLabel={greeting}>
      {greeting}
    </Text>
  );
}

export default GreetingText;

const styles = StyleSheet.create({
  text: {
    marginTop: 4,
    fontSize: 24,
    fontWeight: '700',
    color: '#f8fafc',
  },
});
