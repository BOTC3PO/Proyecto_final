// Call these on hover/focus to warm up lazy route chunks before navigation.
// Browser caches the module promise, so repeated calls are free.
export const prefetchRoute = {
  home: () => import('../pages/Home'),
  pricing: () => import('../pages/Pricing'),
  contact: () => import('../pages/Contact'),
  explorar: () => import('../pages/Explorar'),
  metodologia: () => import('../pages/metodologia'),
} as const;
