export const getQueryString = (value: unknown): string | undefined =>
  Array.isArray(value) ? value[0] : typeof value === "string" ? value : undefined;
