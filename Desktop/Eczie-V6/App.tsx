/**
 * App Entry
 * 
 * Root component for the Expo app.
 * Renders the HomeScreen which includes the GreetingHeader.
 */

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './src/screens/HomeScreen';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
