/**
 * PLAN-roles-v3 B2 — bandeja de verificación de perfiles públicos.
 *
 * Distinta de /admin/escuelas: allá se verifica una institución, acá a una
 * persona que dice ser docente o directiva sin escuela que la avale. Lo que
 * habilita no es acceso — es que su perfil público pueda afirmar ese rol.
 */
import { useCallback, useEffect, useState } from "react";
import { Card, CardHead, CardBody, Button } from "../components/ui";
import { useI18n } from "../i18n/I18nContext";
import { fetchSolicitudesPublicas, resolverVerificacion } from "../services/verificacion-publica";

type Item = { id: string; nombre: string; email: string | null; datos: Record<string, string> | null };
const ESTADOS = ["pendiente", "verificada", "rechazada"] as const;

export default function AdminVerificaciones() {
  const { t } = useI18n();
  const [estado, setEstado] = useState<(typeof ESTADOS)[number]>("pendiente");
  const [items, setItems] = useState<Item[]>([]);
  const [cargando, setCargando] = useState(true);
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const cargar = useCallback(async () => {
    setCargando(true);
    try {
      const res = await fetchSolicitudesPublicas(estado);
      setItems(res.items ?? []);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "error");
    } finally {
      setCargando(false);
    }
  }, [estado]);

  useEffect(() => { void cargar(); }, [cargar]);

  const decidir = async (id: string, decision: "verificada" | "rechazada") => {
    let motivo: string | undefined;
    if (decision === "rechazada") {
      const ingresado = window.prompt(t("adminVerificaciones.motivo"));
      if (!ingresado?.trim()) return;
      motivo = ingresado.trim();
    }
    setBusy(id);
    try {
      await resolverVerificacion(id, decision, motivo);
      await cargar();
    } catch (e) {
      setError(e instanceof Error ? e.message : "error");
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      <Card>
        <CardHead>
          <h2 className="text-sm font-bold">{t("adminVerificaciones.titulo")}</h2>
          <p style={{ fontSize: "var(--fs-0)", color: "var(--c-text-muted)" }}>
            {t("adminVerificaciones.subtitulo")}
          </p>
        </CardHead>
        <CardBody>
          <div style={{ display: "flex", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
            {ESTADOS.map((e) => (
              <Button key={e} onClick={() => setEstado(e)} disabled={estado === e}>
                {t(`adminEscuelas.estado_${e}`)}
              </Button>
            ))}
          </div>
          {error && <p role="alert" style={{ color: "var(--c-danger)" }}>{error}</p>}
          {cargando && <p>{t("adminEscuelas.cargando")}</p>}
          {!cargando && items.length === 0 && <p>{t("adminVerificaciones.vacio")}</p>}

          {items.map((it) => (
            <div
              key={it.id}
              data-testid={`verificacion-${it.id}`}
              style={{ borderTop: "1px solid var(--c-border)", paddingBlock: "var(--space-3)" }}
            >
              <p style={{ fontWeight: "var(--fw-semibold)", color: "var(--c-text)" }}>{it.nombre}</p>
              <p style={{ fontSize: "var(--fs-0)", color: "var(--c-text-muted)" }}>{it.email}</p>
              {it.datos && (
                <dl style={{ fontSize: "var(--fs-0)", color: "var(--c-text-muted)", marginTop: "var(--space-2)" }}>
                  {Object.entries(it.datos).map(([k, v]) => (
                    <div key={k} style={{ display: "flex", gap: "var(--space-2)" }}>
                      <dt style={{ minWidth: "9rem" }}>{t(`verificacionPublica.${k}`)}</dt>
                      <dd style={{ color: "var(--c-text)" }}>{String(v)}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {estado === "pendiente" && (
                <div style={{ display: "flex", gap: "var(--space-2)", marginTop: "var(--space-3)" }}>
                  <Button onClick={() => void decidir(it.id, "verificada")} disabled={busy === it.id}>
                    {t("adminEscuelas.verificar")}
                  </Button>
                  <Button onClick={() => void decidir(it.id, "rechazada")} disabled={busy === it.id}>
                    {t("adminEscuelas.rechazar")}
                  </Button>
                </div>
              )}
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}
