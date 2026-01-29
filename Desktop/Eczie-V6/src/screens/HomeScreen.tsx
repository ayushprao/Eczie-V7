/**
 * HomeScreen
 * 
 * Main home screen of the Eczie app.
 * Features the GreetingHeader at the top with personalized greeting,
 * streak badge, and mascot illustration.
 * 
 * @feature F1 Home Dashboard
 */

import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GreetingHeader } from '../components/home/GreetingHeader';
import { AffirmationCard } from '../components/home/AffirmationCard';

/**
 * HomeScreen - Main dashboard screen.
 * 
 * Layout:
 * - GreetingHeader (fixed at top)
 * - Scrollable content area (for future features)
 */
export function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <GreetingHeader />
      </SafeAreaView>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <AffirmationCard />
        <View style={styles.placeholder}>
          {/* Future content: Quick actions, recent logs, insights summary */}
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1220',
  },
  safeArea: {
    backgroundColor: '#1a1a2e',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#0b1220',
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 400,
  },
  placeholder: {
    minHeight: 320,
  },
});
