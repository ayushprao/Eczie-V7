export type HeroDateFormatInput = {
  date: Date;
  locale: string;
};

/**
 * Formats the hero header date as "WEEKDAY · MONTH DAY" while localizing
 * weekday/month names and preserving uppercase output.
 */
export function formatHeroDate({ date, locale }: HeroDateFormatInput): string {
  const weekday = new Intl.DateTimeFormat(locale, { weekday: "long" }).format(date);
  const month = new Intl.DateTimeFormat(locale, { month: "long" }).format(date);
  const day = new Intl.DateTimeFormat(locale, { day: "numeric" }).format(date);

  const raw = `${weekday} · ${month} ${day}`;
  return raw.toLocaleUpperCase(locale);
}
