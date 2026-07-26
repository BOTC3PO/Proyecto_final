/**
 * PLAN-roles-v3 D2 — panel de delegación de cobros.
 *
 * Se auto-oculta si quien mira no es el directivo principal: el back
 * responde 403 y acá simplemente no se renderiza. Es la forma honesta de
 * mostrarlo — un panel visible pero que falla al usarlo es peor que no
 * tenerlo.
 */
import { useCallback, useEffect, useState } from "react";
import { Card, CardHead, CardBody, Button } from "./ui";
import { useI18n } from "../i18n/I18nContext";
import { fetchDirectivos, setDelegacionCobros, type DirectivoDelegacion } from "../services/cobros";

export default function DelegacionCobros({ escuelaId }: { escuelaId: string }) {
  const { t } = useI18n();
  const [items, setItems] = useState<DirectivoDelegacion[] | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const cargar = useCallback(async () => {
    if (!escuelaId) return;
    try {
      const res = await fetchDirectivos(escuelaId);
      setItems(res.items ?? []);
    } catch {
      // 403 = no soy el principal. No es un error a mostrar: es que este
      // panel no me corresponde.
      setItems(null);
    }
  }, [escuelaId]);

  useEffect(() => { void cargar(); }, [cargar]);

  if (!items) return null;

  const alternar = async (d: DirectivoDelegacion) => {
    setBusy(d.usuarioId);
    setError(null);
    try {
      await setDelegacionCobros(escuelaId, d.usuarioId, !d.puedeCobrar);
      await cargar();
    } catch (e) {
      setError(e instanceof Error ? e.message : "error");
    } finally {
      setBusy(null);
    }
  };

  return (
    <Card>
      <CardHead>
        <h2 className="text-sm font-bold">{t("delegacion.titulo")}</h2>
        <p style={{ fontSize: "var(--fs-0)", color: "var(--c-text-muted)" }}>
          {t("delegacion.ayuda")}
        </p>
      </CardHead>
      <CardBody>
        {error && <p role="alert" style={{ color: "var(--c-danger)" }}>{error}</p>}
        {items.length === 0 && <p>{t("delegacion.vacio")}</p>}
        {items.map((d) => (
          <div
            key={d.usuarioId}
            data-testid={`delegacion-${d.usuarioId}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "var(--space-3)",
              borderTop: "1px solid var(--c-border)",
              paddingBlock: "var(--space-3)",
            }}
          >
            <span style={{ minWidth: 0 }}>
              <span style={{ display: "block", color: "var(--c-text)" }}>{d.nombre}</span>
              <span style={{ display: "block", fontSize: "var(--fs-0)", color: "var(--c-text-muted)" }}>
                {d.esPrincipal ? t("delegacion.esPrincipal") : d.email}
              </span>
            </span>
            {/* Al principal no se le muestra un toggle: no es una delegación
                que se pueda revocar, es la titularidad. */}
            {!d.esPrincipal && (
              <Button onClick={() => void alternar(d)} disabled={busy === d.usuarioId}>
                {d.puedeCobrar ? t("delegacion.quitar") : t("delegacion.otorgar")}
              </Button>
            )}
          </div>
        ))}
      </CardBody>
    </Card>
  );
}
