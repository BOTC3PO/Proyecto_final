import { useEffect, useRef, useState } from "react";
import {
  fetchEstadoSuscripcion,
  type EstadoSuscripcion,
} from "../services/suscripciones";

interface EsperandoPagoProps {
  /**
   * Devuelve true cuando el estado ya refleja el pago acreditado.
   * Ej: `(e) => e.personal?.estado === "activa"`.
   */
  estaConfirmado: (estado: EstadoSuscripcion) => boolean;
  /** Se llama con el estado actualizado cuando el pago se confirma. */
  onConfirmado: (estado: EstadoSuscripcion) => void;
  /** ms entre consultas (default 4000). */
  intervaloMs?: number;
  /** ms hasta cortar el polling (default 150000 = 2,5 min). */
  timeoutMs?: number;
}

type Fase = "esperando" | "confirmado" | "timeout";

/**
 * Tras iniciar un pago en MercadoPago (flujo de redirect), al volver al sitio
 * la suscripción queda en estado "pendiente": la confirmación real llega por
 * webhook. Este componente hace polling del estado de la suscripción hasta que
 * se acredita, sin asumir éxito y sin bloquear al usuario.
 */
export default function EsperandoPago({
  estaConfirmado,
  onConfirmado,
  intervaloMs = 4000,
  timeoutMs = 150000,
}: EsperandoPagoProps) {
  const [fase, setFase] = useState<Fase>("esperando");

  // Guardamos los callbacks en refs para que cambiar su identidad entre renders
  // no reinicie el polling (las deps del efecto quedan estables).
  const confirmadoRef = useRef(estaConfirmado);
  const onConfirmadoRef = useRef(onConfirmado);
  confirmadoRef.current = estaConfirmado;
  onConfirmadoRef.current = onConfirmado;

  useEffect(() => {
    let cancelado = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const inicio = Date.now();

    const consultar = async () => {
      if (cancelado) return;
      try {
        const estado = await fetchEstadoSuscripcion();
        if (cancelado) return;
        if (confirmadoRef.current(estado)) {
          setFase("confirmado");
          onConfirmadoRef.current(estado);
          return;
        }
      } catch {
        /* error transitorio: reintentamos en el próximo tick */
      }
      if (cancelado) return;
      if (Date.now() - inicio >= timeoutMs) {
        setFase("timeout");
        return;
      }
      timer = setTimeout(consultar, intervaloMs);
    };

    timer = setTimeout(consultar, intervaloMs);
    return () => {
      cancelado = true;
      if (timer) clearTimeout(timer);
    };
  }, [intervaloMs, timeoutMs]);

  if (fase === "confirmado") {
    return (
      <div
        role="status"
        className="rounded-xl border border-[color-mix(in_srgb,var(--c-success)_25%,transparent)] bg-[color-mix(in_srgb,var(--c-success)_8%,transparent)] px-4 py-3"
      >
        <p className="text-sm font-semibold text-[var(--c-success)]">
          ✓ ¡Pago confirmado! Tu suscripción está activa.
        </p>
      </div>
    );
  }

  if (fase === "timeout") {
    return (
      <div
        role="status"
        className="rounded-xl border border-[color-mix(in_srgb,var(--c-warning)_25%,transparent)] bg-[color-mix(in_srgb,var(--c-warning)_8%,transparent)] px-4 py-3"
      >
        <p className="text-sm font-medium text-[var(--c-warning)]">
          El pago puede demorar unos minutos en confirmarse.
        </p>
        <p className="text-xs text-[var(--c-muted)] mt-0.5">
          Podés cerrar esta página: cuando MercadoPago confirme el pago, tu
          suscripción se activará automáticamente.
        </p>
      </div>
    );
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="flex items-center gap-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-3"
    >
      <span
        aria-hidden="true"
        className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-[var(--c-border)] border-t-[var(--c-primary)]"
      />
      <div>
        <p className="text-sm font-medium text-[var(--c-text)]">
          Esperando confirmación de pago…
        </p>
        <p className="text-xs text-[var(--c-muted)] mt-0.5">
          Estamos verificando tu pago con MercadoPago. No cierres esta pestaña.
        </p>
      </div>
    </div>
  );
}
