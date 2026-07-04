/**
 * Wrapper de ruta para `/herramientas/mapa-editor` (M8v2).
 *
 * Conserva el comportamiento STANDALONE del editor: lee `sskey` del query,
 * carga la config desde sessionStorage (único uso legítimo: misma pestaña) y,
 * al guardar, persiste de vuelta bajo la misma clave y navega atrás. El flujo
 * módulo↔editor ya NO pasa por acá: ModuloEditor monta
 * `MapaEditorFull` directamente en un overlay y se queda con la config en
 * memoria.
 *
 * PLAN-G §1 (item 25) — si viene `?materialId=`, reabre un material
 * guardado (`GET /api/materiales/guardados/:id`) en vez de sessionStorage.
 * El `materialId` se pasa a `MapaEditorFull` para que "Guardar como
 * material" cree una versión nueva en vez de un material nuevo.
 */
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { makeEmptyMapaConfig, type MapaConfig } from "../../components/modulos/standalone/types";
import { apiGet } from "../../lib/api";
import MapaEditorFull from "./MapaEditorFull";

export default function MapaEditorPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const ssKey = searchParams.get("sskey") ?? "new-mapa";
  const materialId = searchParams.get("materialId");

  // La config inicial se resuelve una sola vez por montaje; la migración
  // (capas default, flecha→ruta) la aplica MapaEditorFull al montar.
  const [initialConfig, setInitialConfig] = useState<MapaConfig>(() => {
    if (materialId) return makeEmptyMapaConfig();
    try {
      const raw = sessionStorage.getItem(`mapa-doc:${ssKey}`);
      if (raw) return JSON.parse(raw) as MapaConfig;
    } catch {
      // ignore
    }
    return makeEmptyMapaConfig();
  });
  const [loadingMaterial, setLoadingMaterial] = useState(!!materialId);

  useEffect(() => {
    if (!materialId) return;
    let cancelled = false;
    apiGet<{ version: { contenido: MapaConfig } }>(`/api/materiales/guardados/${materialId}`)
      .then((data) => {
        if (!cancelled) setInitialConfig(data.version.contenido);
      })
      .finally(() => {
        if (!cancelled) setLoadingMaterial(false);
      });
    return () => { cancelled = true; };
  }, [materialId]);

  const handleSave = useCallback(
    (config: MapaConfig) => {
      try {
        sessionStorage.setItem(`mapa-doc:${ssKey}`, JSON.stringify(config));
      } catch {
        // sessionStorage lleno/inaccesible: igual volvemos; el doc queda en memoria.
      }
      navigate(-1);
    },
    [ssKey, navigate],
  );

  const handleCancel = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  if (loadingMaterial) {
    return (
      <div className="p-8 text-center text-sm text-[var(--c-muted)]" role="status">
        Cargando material…
      </div>
    );
  }

  return (
    <MapaEditorFull
      initialConfig={initialConfig}
      onSave={handleSave}
      onCancel={handleCancel}
      materialId={materialId}
    />
  );
}
