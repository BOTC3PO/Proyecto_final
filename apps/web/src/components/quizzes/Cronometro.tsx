import { useI18n } from "../../i18n/I18nContext";
/**
 * F5-02 — Cronómetro visual del intento de evaluación.
 *
 * Tres estados:
 *   1. `remaining === null`           → no se muestra nada (sin timer).
 *   2. `remaining > 60`               → chip verde con `MM:SS`.
 *   3. `30 < remaining <= 180`        → chip ámbar.
 *   4. `remaining <= 60`              → chip rojo pulsante.
 *   5. `expired`                      → banner rojo fijo "⏰ Tiempo
 *                                       agotado" arriba del contenido.
 *
 * El cronómetro es presentacional puro: no maneja el estado del
 * timer, eso lo hace `useCountdown`. El padre pasa `remaining` y
 * `expired`; este componente sólo renderiza.
 *
 * Decisión: el banner de "tiempo agotado" se renderiza SIEMPRE que
 * `expired` sea true, incluso si el componente padre ya está
 * mostrando un `submitting...` indicator. El doble feedback
 * (banner + chip pulsante) es deliberado: el alumno debe ver de
 * forma inequívoca que el tiempo se terminó.
 */
export interface CronometroProps {
  remaining: number | null;
  expired: boolean;
}

export function formatTiempo(seg: number): string {
  const safe = Math.max(0, Math.floor(seg));
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function Cronometro({ remaining, expired }: CronometroProps) {
  const { t } = useI18n();
  if (remaining === null && !expired) return null;

  if (expired) {
    return (
      <div
        role="alert"
        data-testid="cronometro-expired"
        className="inline-flex items-center gap-2 rounded-full border-2 border-red-300 bg-red-100 px-4 py-2 text-sm font-bold text-red-700"
      >
        <span aria-hidden="true">⏰</span>{t("cronometro.tiempoAgotadoEnviandoRespuestas")}</div>
    );
  }

  const remainingNum = remaining ?? 0;
  const tone =
    remainingNum <= 60
      ? "bg-red-100 text-red-700 animate-pulse"
      : remainingNum <= 180
        ? "bg-amber-100 text-amber-700"
        : "bg-emerald-100 text-emerald-700";

  return (
    <div
      role="timer"
      aria-live="polite"
      aria-atomic="true"
      data-testid="cronometro"
      data-remaining-seconds={remainingNum}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${tone}`}
    >
      <span aria-hidden="true">⏱</span>
      {formatTiempo(remainingNum)}
    </div>
  );
}

export default Cronometro;
