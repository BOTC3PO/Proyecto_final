/**
 * useAvisoError — muestra un Toast de error cuando falla una acción que antes se ignoraba en silencio.
 * Uso: `const { aviso, mostrar } = useAvisoError();` → `.catch((e) => mostrar(e, t("comun.noSePudoCargar")))`
 * y renderizar `{aviso}` en la página.
 */
import { useCallback, useState } from "react";
import Toast from "./Toast";

export function useAvisoError() {
  const [mensaje, setMensaje] = useState<string | null>(null);
  const cerrar = useCallback(() => setMensaje(null), []);
  const mostrar = useCallback((err: unknown, porDefecto: string) => {
    console.error(err);
    setMensaje(err instanceof Error && err.message ? err.message : porDefecto);
  }, []);
  const aviso = mensaje ? <Toast message={mensaje} variant="danger" onClose={cerrar} durationMs={8000} /> : null;
  return { aviso, mostrar };
}
