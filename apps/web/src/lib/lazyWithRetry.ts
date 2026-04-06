import React from "react";

/**
 * lazy con retry automático para conexiones inestables.
 * Si un chunk falla al cargar, reintenta hasta 3 veces
 * con espera exponencial antes de lanzar el error.
 */
export function lazyWithRetry<T extends React.ComponentType<unknown>>(
  importFn: () => Promise<{ default: T }>,
  retries = 3,
  delay = 1000
): React.LazyExoticComponent<T> {
  return React.lazy(() => {
    const attempt = (remaining: number): Promise<{ default: T }> =>
      importFn().catch((err) => {
        if (remaining <= 0) throw err;
        return new Promise((resolve) =>
          setTimeout(() => resolve(attempt(remaining - 1)), delay)
        );
      });
    return attempt(retries);
  });
}
