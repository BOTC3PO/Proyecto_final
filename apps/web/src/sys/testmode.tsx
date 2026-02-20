const TRUE_VALUES = new Set(['1', 'true', 'yes', 'on']);

export default function testmode() {
  const rawValue = import.meta.env.VITE_TEST_MODE;
  return typeof rawValue === 'string' && TRUE_VALUES.has(rawValue.toLowerCase());
}
