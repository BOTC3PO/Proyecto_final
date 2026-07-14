/**
 * PLAN-C §4 (ítem 29) — personalización por escuela: logo, ícono y
 * colores. Acotado a branding (ver decisión 2026-07-03 en el plan): no
 * incluye "página pública de la escuela" porque esa pieza no existe hoy
 * en el código (Page es almacenamiento interno de escenas TuesdayJS, sin
 * ninguna ruta pública).
 */
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import { Card, CardHead, CardBody, Button, Input } from "../components/ui";
import { fetchEscuela, actualizarBranding, type EscuelaBranding } from "../services/escuelas";
import { useI18n } from "../i18n/I18nContext";

const emptyBranding: EscuelaBranding = { logoUrl: "", iconoUrl: "", colorPrimario: "", colorSecundario: "" };

export default function EnterprisePersonalizacion() {
  const { t } = useI18n();
  const { user } = useAuth();
  const schoolId = user?.schoolId ?? "";
  const [branding, setBranding] = useState<EscuelaBranding>(emptyBranding);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!schoolId) {
      setError("Tu cuenta no tiene una escuela asignada. Contactá al administrador.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const escuela = await fetchEscuela(schoolId);
      setBranding({ ...emptyBranding, ...(escuela.branding ?? {}) });
    } catch {
      setError("No pudimos cargar la personalización de la escuela.");
    } finally {
      setLoading(false);
    }
  }, [schoolId]);

  useEffect(() => { void load(); }, [load]);

  const guardar = async () => {
    setSaving(true);
    setMsg(null);
    try {
      const resp = await actualizarBranding(schoolId, {
        logoUrl: branding.logoUrl || null,
        iconoUrl: branding.iconoUrl || null,
        colorPrimario: branding.colorPrimario || null,
        colorSecundario: branding.colorSecundario || null
      });
      setBranding({ ...emptyBranding, ...resp.branding });
      setMsg("Personalización guardada.");
    } catch {
      setMsg("No se pudo guardar la personalización.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-4 p-6">
      <header>
        <h1 className="text-xl font-bold text-[var(--c-text)]">{t("nav.personalizacion")}</h1>
        <p className="text-sm text-[var(--c-muted)]">{t("enterprisePersonalizacion.logoIconoYColoresDe")}</p>
      </header>

      {loading ? (
        <p className="text-sm text-[var(--c-muted)] animate-pulse">{t("comun.cargando")}</p>
      ) : error ? (
        <p role="alert" className="text-sm text-[var(--c-danger)]">{error}</p>
      ) : (
        <Card>
          <CardHead><h2 className="text-sm font-bold">{t("enterprisePersonalizacion.branding")}</h2></CardHead>
          <CardBody>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="URL del logo"
                value={branding.logoUrl ?? ""}
                onChange={(e) => setBranding((b) => ({ ...b, logoUrl: e.target.value }))}
                placeholder="https://…"
              />
              <Input
                label="URL del ícono"
                value={branding.iconoUrl ?? ""}
                onChange={(e) => setBranding((b) => ({ ...b, iconoUrl: e.target.value }))}
                placeholder="https://…"
              />
              <Input
                label="Color primario"
                value={branding.colorPrimario ?? ""}
                onChange={(e) => setBranding((b) => ({ ...b, colorPrimario: e.target.value }))}
                placeholder="#2563eb"
              />
              <Input
                label="Color secundario"
                value={branding.colorSecundario ?? ""}
                onChange={(e) => setBranding((b) => ({ ...b, colorSecundario: e.target.value }))}
                placeholder="#7c3aed"
              />
            </div>
            {branding.logoUrl && (
              <div className="mt-4 flex items-center gap-3">
                <span className="text-xs text-[var(--c-muted)]">{t("enterprisePersonalizacion.vistaPrevia")}</span>
                <img src={branding.logoUrl} alt={t("common.logoEscuela")} className="h-10 max-w-[160px] object-contain" />
              </div>
            )}
            {msg && <p role="status" aria-live="polite" className="mt-3 text-sm text-[var(--c-info)]">{msg}</p>}
            <div className="mt-4">
              <Button onClick={() => void guardar()} disabled={saving}>
                {saving ? "Guardando…" : "Guardar"}
              </Button>
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
