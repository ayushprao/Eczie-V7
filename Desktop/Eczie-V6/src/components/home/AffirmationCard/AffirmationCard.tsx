import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { useAffirmation } from './useAffirmation';

export const AffirmationCard: React.FC = () => {
  const { affirmation, cycleNext } = useAffirmation();

  return (
    <Pressable
      onPress={cycleNext}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      accessibilityRole="button"
      accessibilityLabel={`Affirmation: ${affirmation.text}`}
      accessibilityHint="Tap to see another affirmation"
    >
      <Text style={styles.affirmationText}>
        {affirmation.text}
      </Text>
      <Text style={styles.hintText}>
        Tap for more affirmations
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  cardPressed: {
    opacity: 0.8,
  },
  affirmationText: {
    color: '#f1f5f9',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 26,
  },
  hintText: {
    color: '#94a3b8',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
});
