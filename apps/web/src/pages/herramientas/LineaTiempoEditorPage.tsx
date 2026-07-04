/**
 * Wrapper de ruta standalone para reabrir una línea de tiempo guardada
 * como material (PLAN-G §1, item 25). La línea de tiempo normalmente
 * sólo se edita embebida en `ModuloEditor`; esta página es el único
 * punto de entrada "fuera de un módulo", exclusivamente para reabrir un
 * material guardado por `?materialId=`.
 */
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LineaTiempo } from "../../components/modulos/standalone/LineaTiempo";
import type { LineaTiempoConfig } from "../../components/modulos/standalone/types";
import { apiGet } from "../../lib/api";

export default function LineaTiempoEditorPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const materialId = searchParams.get("materialId");

  const [config, setConfig] = useState<LineaTiempoConfig | null>(null);
  const [loading, setLoading] = useState(!!materialId);

  useEffect(() => {
    if (!materialId) return;
    let cancelled = false;
    apiGet<{ version: { contenido: LineaTiempoConfig } }>(`/api/materiales/guardados/${materialId}`)
      .then((data) => {
        if (!cancelled) setConfig(data.version.contenido);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [materialId]);

  if (loading) {
    return (
      <div className="p-8 text-center text-sm text-[var(--c-muted)]" role="status">
        Cargando material…
      </div>
    );
  }

  if (!materialId || !config) {
    return (
      <div className="p-8 text-center text-sm text-[var(--c-muted)]" role="status">
        No se encontró la línea de tiempo.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-xl font-semibold text-[var(--c-text)]">Editor de línea de tiempo</h1>
        <button
          type="button"
          onClick={() => navigate("/profesor/materiales")}
          className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
        >
          Volver a materiales
        </button>
      </div>
      <LineaTiempo config={config} onChange={setConfig} materialId={materialId} />
    </div>
  );
}
