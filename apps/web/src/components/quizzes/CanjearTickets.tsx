/**
 * Canje de tickets de examen, debajo del resultado de un examen entregado.
 *
 * Los tickets se compran en la subasta del examen. Una vez entregado, el alumno puede canjearlos
 * por puntos de nota (cada ticket suma el 10% del puntaje máximo; máximo 2 por examen). No se
 * muestra nada si el módulo no tiene tickets o no queda ninguno por canjear.
 */
import { useEffect, useState } from "react";
import { apiGet, apiPost, ApiError } from "../../lib/api";
import { Alert, Button } from "../../ui";

type Tickets = {
  comprados: number;
  canjeados: number;
  disponibles: number;
  maximoCanjeable: number;
  restantesCanjeables: number;
};
type Estado = { tickets: Tickets | null; ticketsEnEsteIntento: number; puedeCanjear: boolean };

type Props = {
  attemptId: string;
  /** Se llama tras un canje exitoso (para que la pantalla vuelva a pedir la nota). */
  onCanjeado?: () => void;
};

export default function CanjearTickets({ attemptId, onCanjeado }: Props) {
  const [estado, setEstado] = useState<Estado | null>(null);
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState<{ tipo: "ok" | "error"; texto: string } | null>(null);

  const cargar = async () => {
    try {
      setEstado(await apiGet<Estado>(`/api/quiz-attempts/${attemptId}/tickets`));
    } catch {
      setEstado(null); // sin tickets o sin conexión: el bloque simplemente no aparece
    }
  };

  useEffect(() => {
    void cargar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attemptId]);

  const canjear = async (cantidad: number) => {
    setCargando(true);
    setMensaje(null);
    try {
      await apiPost(`/api/quiz-attempts/${attemptId}/canjear-tickets`, { tickets: cantidad });
      setMensaje({
        tipo: "ok",
        texto: `Canjeaste ${cantidad} ${cantidad === 1 ? "ticket" : "tickets"}: se sumaron a tu nota.`,
      });
      await cargar();
      onCanjeado?.();
    } catch (e) {
      const texto = e instanceof ApiError ? e.message : "No se pudo canjear. Probá de nuevo.";
      setMensaje({ tipo: "error", texto });
    } finally {
      setCargando(false);
    }
  };

  const t = estado?.tickets;
  if (!t && !mensaje) return null;
  const restantes = t?.restantesCanjeables ?? 0;
  if (!mensaje && (!estado?.puedeCanjear || restantes < 1)) return null;

  return (
    <section aria-label="Canjear tickets de examen" className="mt-4 space-y-2">
      {estado?.puedeCanjear && t && restantes > 0 && (
        <>
          <p>
            Tenés <strong>{t.disponibles}</strong> {t.disponibles === 1 ? "ticket" : "tickets"} de este examen.
            Cada uno suma a tu nota (máximo {t.maximoCanjeable} por examen).
          </p>
          <div className="flex gap-2">
            {Array.from({ length: restantes }, (_, i) => i + 1).map((n) => (
              <Button key={n} type="button" disabled={cargando} onClick={() => void canjear(n)}>
                Canjear {n} {n === 1 ? "ticket" : "tickets"}
              </Button>
            ))}
          </div>
        </>
      )}
      {mensaje && (
        <Alert variant={mensaje.tipo === "ok" ? "success" : "danger"} role={mensaje.tipo === "ok" ? "status" : "alert"}>
          {mensaje.texto}
        </Alert>
      )}
    </section>
  );
}
