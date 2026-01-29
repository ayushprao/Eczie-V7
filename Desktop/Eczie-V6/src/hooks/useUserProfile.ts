/**
 * User Profile Hook
 * 
 * Fetches and caches the current user's profile data using React Query.
 * Used by GreetingHeader to get the user's first name for personalized greeting.
 * 
 * @feature F1-E1-S1 Greeting Header
 * @see FR-007: Fetch user's first name from cached profile data without blocking
 */

import { useQuery } from '@tanstack/react-query';
import { UserProfileSchema, type UserProfile } from '../schemas/greeting.schema';

/**
 * Fetch profile from cache or API.
 * In production, this would fetch from Supabase with caching.
 */
async function fetchProfile(): Promise<UserProfile> {
  // TODO: Replace with actual Supabase profile fetch
  // For now, return mock data for development
  const mockProfile = {
    id: '00000000-0000-0000-0000-000000000000',
    firstName: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  
  return UserProfileSchema.parse(mockProfile);
}

/**
 * Hook to fetch and cache the current user's profile.
 * 
 * Features:
 * - Cached for 5 minutes (staleTime)
 * - Garbage collected after 24 hours
 * - Validates data with Zod schema
 * - Returns loading and error states
 * 
 * @returns Query result with profile data, loading state, and error
 * 
 * @example
 * const { data: profile, isLoading } = useUserProfile();
 * const firstName = profile?.firstName ?? null;
 */
export function useUserProfile() {
  return useQuery({
    queryKey: ['profile', 'current'],
    queryFn: fetchProfile,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 24 * 60 * 60 * 1000, // 24 hours
  });
}

/**
 * Type for the hook return value.
 * Useful for typing component props that receive profile data.
 */
export type UseUserProfileResult = ReturnType<typeof useUserProfile>;
