/**
 * Wrapper de ruta para `/herramientas/mapa-editor` (M8v2).
 *
 * Conserva el comportamiento STANDALONE del editor: lee `sskey` del query,
 * carga la config desde sessionStorage (único uso legítimo: misma pestaña) y,
 * al guardar, persiste de vuelta bajo la misma clave y navega atrás. El flujo
 * módulo↔editor ya NO pasa por acá: ModuloEditor monta
 * `MapaEditorFull` directamente en un overlay y se queda con la config en
 * memoria.
 */
import { useCallback, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { makeEmptyMapaConfig, type MapaConfig } from "../../components/modulos/standalone/types";
import MapaEditorFull from "./MapaEditorFull";

export default function MapaEditorPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const ssKey = searchParams.get("sskey") ?? "new-mapa";

  // La config inicial se resuelve una sola vez por montaje; la migración
  // (capas default, flecha→ruta) la aplica MapaEditorFull al montar.
  const [initialConfig] = useState<MapaConfig>(() => {
    try {
      const raw = sessionStorage.getItem(`mapa-doc:${ssKey}`);
      if (raw) return JSON.parse(raw) as MapaConfig;
    } catch {
      // ignore
    }
    return makeEmptyMapaConfig();
  });

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

  return (
    <MapaEditorFull
      initialConfig={initialConfig}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
}
