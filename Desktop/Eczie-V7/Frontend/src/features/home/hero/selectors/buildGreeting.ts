export function buildGreeting(firstName: string | null | undefined): string {
  const cleaned = (firstName ?? "").trim();
  if (!cleaned) {
    return "Welcome back";
  }

  return `Welcome back, ${cleaned}`;
}
