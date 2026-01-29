export type AffirmationCategory = 'calm' | 'strength' | 'patience' | 'acceptance' | 'self-care';

export interface Affirmation {
  id: string;
  text: string;
  category?: AffirmationCategory;
}
