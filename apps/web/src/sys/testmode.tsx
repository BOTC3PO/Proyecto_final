const TRUE_VALUES = new Set(['1', 'true', 'yes', 'on']);
const FALSE_VALUES = new Set(['0', 'false', 'no', 'off']);

function parseBooleanish(value: unknown): boolean | undefined {
  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value !== 'string') {
    return undefined;
  }

  const normalizedValue = value.trim().toLowerCase();

  if (TRUE_VALUES.has(normalizedValue)) {
    return true;
  }

  if (FALSE_VALUES.has(normalizedValue)) {
    return false;
  }

  return undefined;
}

function readRuntimeOverride(): boolean | undefined {
  const browserWindow = typeof window !== 'undefined' ? (window as typeof window & { __TEST_MODE__?: unknown }) : undefined;

  const globalOverride = parseBooleanish(browserWindow?.__TEST_MODE__);
  if (globalOverride !== undefined) {
    return globalOverride;
  }

  if (typeof localStorage === 'undefined') {
    return undefined;
  }

  return parseBooleanish(localStorage.getItem('test_mode'));
}

export default function testmode() {
  const runtimeOverride = readRuntimeOverride();
  if (runtimeOverride !== undefined) {
    return runtimeOverride;
  }

  return parseBooleanish(import.meta.env.VITE_TEST_MODE) ?? false;
}
