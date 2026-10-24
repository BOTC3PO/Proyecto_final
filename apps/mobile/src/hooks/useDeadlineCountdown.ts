/**
 * PLAN-R Parte 3 — cuenta regresiva anclada a un `deadline` absoluto
 * (mismo criterio que PLAN-Q §2.3 aplicó en `apps/web/src/pages/
 * quizzes/QuizAttempt.tsx`, ver `QuizAttempt.deadline-resync.spec.tsx`):
 * un `setInterval` se atrasa con la app en segundo plano/pantalla
 * apagada, así que en vez de contar ticks recalculamos `deadline - now`
 * cada segundo Y cada vez que la app vuelve a foreground (`AppState`).
 */
import { useEffect, useState } from "react";
import { AppState } from "react-native";

export function useDeadlineCountdown(deadline: string | null | undefined, onExpire?: () => void) {
  const [remaining, setRemaining] = useState<number | null>(() => computeRemaining(deadline));

  useEffect(() => {
    setRemaining(computeRemaining(deadline));
    if (!deadline) return;

    const tick = () => setRemaining(computeRemaining(deadline));
    const interval = setInterval(tick, 1000);
    const sub = AppState.addEventListener("change", (state) => {
      if (state === "active") tick();
    });
    return () => {
      clearInterval(interval);
      sub.remove();
    };
  }, [deadline]);

  useEffect(() => {
    if (remaining === 0 && onExpire) onExpire();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remaining]);

  return remaining;
}

function computeRemaining(deadline: string | null | undefined): number | null {
  if (!deadline) return null;
  const ms = new Date(deadline).getTime() - Date.now();
  if (Number.isNaN(ms)) return null;
  return Math.max(0, Math.round(ms / 1000));
}

export function formatRemaining(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}
