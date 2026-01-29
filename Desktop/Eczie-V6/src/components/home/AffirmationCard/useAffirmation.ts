import { useState, useCallback, useRef } from 'react';
import { AFFIRMATIONS } from './affirmations';

const getDailyAffirmationIndex = (listLength: number): number => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return dayOfYear % listLength;
};

export const useAffirmation = () => {
  const [currentIndex, setCurrentIndex] = useState(() =>
    getDailyAffirmationIndex(AFFIRMATIONS.length)
  );
  const lastTapRef = useRef<number>(0);

  const cycleNext = useCallback(() => {
    const now = Date.now();
    if (now - lastTapRef.current < 300) return;
    lastTapRef.current = now;
    setCurrentIndex((prev) => (prev + 1) % AFFIRMATIONS.length);
  }, []);

  return {
    affirmation: AFFIRMATIONS[currentIndex],
    cycleNext,
  };
};
