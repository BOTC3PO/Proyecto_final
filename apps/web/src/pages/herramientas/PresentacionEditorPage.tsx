/**
 * Wrapper de ruta standalone para reabrir una presentación guardada como
 * material (PLAN-G §1, item 25). Las presentaciones normalmente sólo se
 * editan embebidas en `ModuloEditor` (overlay con `onDone`/`onClose`); esta
 * página es el único punto de entrada "fuera de un módulo", exclusivamente
 * para reabrir un material guardado por `?materialId=`.
 */
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import TheorySlideEditor, {
  type Slide,
  type ThemeKey,
  type AccentColor,
} from "../../components/modulos/TheorySlideEditor";
import { apiGet } from "../../lib/api";
import { useI18n } from "../../i18n/I18nContext";

type PresentacionContenido = {
  slides: Slide[];
  theme?: ThemeKey;
  accentColor?: AccentColor;
};

export default function PresentacionEditorPage() {
  const { t } = useI18n();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const materialId = searchParams.get("materialId");

  const [contenido, setContenido] = useState<PresentacionContenido | null>(null);
  const [loading, setLoading] = useState(!!materialId);

  useEffect(() => {
    if (!materialId) return;
    let cancelled = false;
    apiGet<{ titulo: string; version: { contenido: PresentacionContenido } }>(
      `/api/materiales/guardados/${materialId}`,
    )
      .then((data) => {
        if (!cancelled) setContenido(data.version.contenido);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [materialId]);

  const volver = () => navigate("/profesor/materiales");

  if (loading) {
    return (
      <div className="p-8 text-center text-sm text-[var(--c-muted)]" role="status">{t("lineaTiempoEditorPage.cargandoMaterial")}</div>
    );
  }

  if (!materialId || !contenido) {
    return (
      <div className="p-8 text-center text-sm text-[var(--c-muted)]" role="status">{t("presentacionEditorPage.noSeEncontroLaPresentacion")}</div>
    );
  }

  return (
    <TheorySlideEditor
      presentationTitle="Presentación"
      initialSlides={contenido.slides}
      initialTheme={contenido.theme}
      initialAccentColor={contenido.accentColor}
      materialId={materialId}
      onDone={volver}
      onClose={volver}
    />
  );
}
