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
 *
 * PLAN-M — puente demo→cuenta: si el guest pide registrarse (CTA de
 * PLAN-L), guardamos un borrador en localStorage (`mapa-draft.ts`) y
 * navegamos a `/register?returnTo=...?draft=1`. Al volver logueado con
 * `?draft=1`, restauramos ese borrador como config inicial.
 */
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { makeEmptyMapaConfig, type MapaConfig } from "../../components/modulos/standalone/types";
import { apiGet } from "../../lib/api";
import { useAuth } from "../../auth/use-auth";
import { loadDraft, saveDraft, clearDraft } from "./mapa-draft";
import MapaEditorFull from "./MapaEditorFull";
import { useI18n } from "../../i18n/I18nContext";

export default function MapaEditorPage() {
  const { t } = useI18n();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  // PLAN-L — sin sesión, MapaEditorFull entra en modo demo (sin guardar).
  const { user } = useAuth();
  const ssKey = searchParams.get("sskey") ?? "new-mapa";
  const materialId = searchParams.get("materialId");
  const isDraftReturn = searchParams.get("draft") === "1";

  // La config inicial (y si vino de un borrador restaurado) se resuelve una
  // sola vez por montaje; la migración (capas default, flecha→ruta) la
  // aplica MapaEditorFull al montar.
  const [initial] = useState(() => {
    if (materialId) return { config: makeEmptyMapaConfig(), draftRestored: false };
    if (isDraftReturn) {
      const draft = loadDraft();
      if (draft) return { config: draft, draftRestored: true };
    }
    try {
      const raw = sessionStorage.getItem(`mapa-doc:${ssKey}`);
      if (raw) return { config: JSON.parse(raw) as MapaConfig, draftRestored: false };
    } catch {
      // ignore
    }
    return { config: makeEmptyMapaConfig(), draftRestored: false };
  });
  const [initialConfig, setInitialConfig] = useState<MapaConfig>(initial.config);
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

  // PLAN-M — localStorage y no sessionStorage: el registro puede abrir otra
  // navegación y la sesión de storage no sobrevive siempre. Si el borrador no
  // entra (muy grande), avisamos antes de navegar en vez de perderlo en silencio.
  const handleRequestRegister = useCallback(
    (config: MapaConfig) => {
      if (!saveDraft(config)) {
        window.alert(
          "Tu mapa es muy grande para guardar un borrador temporal: si te registrás ahora, no lo vamos a poder recuperar.",
        );
      }
      navigate(`/register?returnTo=${encodeURIComponent("/herramientas/mapa-editor?draft=1")}`);
    },
    [navigate],
  );

  const handleDraftSaved = useCallback(() => {
    clearDraft();
  }, []);

  if (loadingMaterial) {
    return (
      <div className="p-8 text-center text-sm text-[var(--c-muted)]" role="status">{t("lineaTiempoEditorPage.cargandoMaterial")}</div>
    );
  }

  return (
    <MapaEditorFull
      initialConfig={initialConfig}
      onSave={handleSave}
      onCancel={handleCancel}
      materialId={materialId}
      demoMode={!user}
      onRequestRegister={handleRequestRegister}
      draftRecovery={initial.draftRestored ? { onSaved: handleDraftSaved } : undefined}
    />
  );
}
