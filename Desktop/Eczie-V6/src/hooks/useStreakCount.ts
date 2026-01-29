/**
 * Streak Count Hook
 * 
 * Fetches and caches the current user's streak data using React Query.
 * Used by GreetingHeader to display the streak badge.
 * 
 * @feature F1-E1-S1 Greeting Header
 * @see FR-008: Fetch streak count from local storage with background sync
 */

import { useQuery } from '@tanstack/react-query';
import { StreakDataSchema, type StreakData } from '../schemas/greeting.schema';

/**
 * Fetch streak data from cache or API.
 * In production, this would fetch from local storage with Supabase sync.
 */
async function fetchStreak(): Promise<StreakData> {
  // TODO: Replace with actual streak data fetch from local storage/Supabase
  // For now, return mock data for development
  const mockStreak = {
    userId: '00000000-0000-0000-0000-000000000000',
    currentStreak: 0,
    lastLogDate: null,
    longestStreak: 0,
    updatedAt: new Date(),
  };
  
  return StreakDataSchema.parse(mockStreak);
}

/**
 * Hook to fetch and cache the current user's streak data.
 * 
 * Features:
 * - Infinite stale time (only invalidated on symptom log save)
 * - Garbage collected after 24 hours
 * - Validates data with Zod schema
 * - Returns loading and error states
 * 
 * Invalidation:
 * Call `queryClient.invalidateQueries(['streak'])` after saving a symptom log
 * to refresh the streak count.
 * 
 * @returns Query result with streak data, loading state, and error
 * 
 * @example
 * const { data: streak, isLoading } = useStreakCount();
 * const streakCount = streak?.currentStreak ?? 0;
 */
export function useStreakCount() {
  return useQuery({
    queryKey: ['streak', 'current'],
    queryFn: fetchStreak,
    staleTime: Infinity, // Only invalidate on log save
    gcTime: 24 * 60 * 60 * 1000, // 24 hours
  });
}

/**
 * Type for the hook return value.
 * Useful for typing component props that receive streak data.
 */
export type UseStreakCountResult = ReturnType<typeof useStreakCount>;
