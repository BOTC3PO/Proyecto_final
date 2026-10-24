/**
 * PLAN-roles-v3 A3 — bandeja de roles.
 *
 * Dos listas, porque son dos cosas distintas: lo que espera MI respuesta
 * (me invitaron) y lo que me toca aprobar (soy directivo y alguien pidió un
 * rol en mi escuela). Mezclarlas confunde quién tiene la pelota.
 */
import { useCallback, useEffect, useState } from "react";
import { Card, CardHead, CardBody, Button } from "../components/ui";
import { useI18n } from "../i18n/I18nContext";
import { useAuth } from "../auth/use-auth";
import {
  fetchInvitaciones,
  responderInvitacion,
  pedirRol,
  type Invitacion,
} from "../services/invitaciones";
import { ROLE_LABEL_KEY } from "../hooks/useMisEscuelas";

// ADMIN de plataforma no está: no es un rol de escuela y no se pide.
const ROLES_PEDIBLES = ["TEACHER", "PARENT", "USER", "DIRECTIVO", "ADMIN_ESCUELA"];

const etiquetaRol = (t: (k: string) => string, rol: string) => {
  const global = rol === "STUDENT" ? "USER" : rol;
  const key = ROLE_LABEL_KEY[global] ?? (global === "ADMIN_ESCUELA" ? "roles.adminEscuela" : null);
  return key ? t(key) : global;
};

export default function Invitaciones() {
  const { t } = useI18n();
  const { user } = useAuth();
  const [recibidas, setRecibidas] = useState<Invitacion[]>([]);
  const [porResolver, setPorResolver] = useState<Invitacion[]>([]);
  const [cargando, setCargando] = useState(true);
  const [busy, setBusy] = useState<string | null>(null);
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);

  const cargar = useCallback(async () => {
    setCargando(true);
    try {
      const res = await fetchInvitaciones();
      setRecibidas(res.recibidas ?? []);
      setPorResolver(res.porResolver ?? []);
    } catch (e) {
      setMsg({ kind: "err", text: e instanceof Error ? e.message : "error" });
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => { void cargar(); }, [cargar]);

  const responder = async (id: string, aceptar: boolean) => {
    setBusy(id);
    setMsg(null);
    try {
      await responderInvitacion(id, aceptar);
      await cargar();
    } catch (e) {
      setMsg({ kind: "err", text: e instanceof Error ? e.message : "error" });
    } finally {
      setBusy(null);
    }
  };

  const pedir = async (rol: string) => {
    setBusy(rol);
    setMsg(null);
    try {
      const res = await pedirRol(rol);
      setMsg({
        kind: "ok",
        // Cuando queda pendiente es importante decirlo: pedir no es obtener.
        text: res.estado === "aceptada" ? t("invitaciones.concedido") : t("invitaciones.pendiente"),
      });
      await cargar();
    } catch (e) {
      setMsg({ kind: "err", text: e instanceof Error ? e.message : "error" });
    } finally {
      setBusy(null);
    }
  };

  const fila = (inv: Invitacion, acciones: React.ReactNode) => (
    <div
      key={inv.id}
      data-testid={`invitacion-${inv.id}`}
      style={{ borderTop: "1px solid var(--c-border)", paddingBlock: "var(--space-3)" }}
    >
      <p style={{ color: "var(--c-text)" }}>{etiquetaRol(t, inv.rol)}</p>
      <p style={{ fontSize: "var(--fs-0)", color: "var(--c-text-muted)" }}>{inv.createdAt.slice(0, 10)}</p>
      <div style={{ display: "flex", gap: "var(--space-2)", marginTop: "var(--space-2)" }}>{acciones}</div>
    </div>
  );

  return (
    <div className="mx-auto max-w-3xl p-6" style={{ display: "grid", gap: "var(--space-4)" }}>
      <Card>
        <CardHead><h2 className="text-sm font-bold">{t("invitaciones.recibidas")}</h2></CardHead>
        <CardBody>
          {cargando && <p>{t("adminEscuelas.cargando")}</p>}
          {!cargando && recibidas.length === 0 && <p>{t("invitaciones.sinRecibidas")}</p>}
          {recibidas.map((inv) =>
            fila(inv, (
              <>
                <Button onClick={() => void responder(inv.id, true)} disabled={busy === inv.id}>
                  {t("invitaciones.aceptar")}
                </Button>
                <Button onClick={() => void responder(inv.id, false)} disabled={busy === inv.id}>
                  {t("invitaciones.rechazar")}
                </Button>
              </>
            ))
          )}
        </CardBody>
      </Card>

      {porResolver.length > 0 && (
        <Card>
          <CardHead><h2 className="text-sm font-bold">{t("invitaciones.porResolver")}</h2></CardHead>
          <CardBody>
            {porResolver.map((inv) =>
              fila(inv, (
                <>
                  <Button onClick={() => void responder(inv.id, true)} disabled={busy === inv.id}>
                    {t("invitaciones.aprobar")}
                  </Button>
                  <Button onClick={() => void responder(inv.id, false)} disabled={busy === inv.id}>
                    {t("invitaciones.denegar")}
                  </Button>
                </>
              ))
            )}
          </CardBody>
        </Card>
      )}

      <Card>
        <CardHead>
          <h2 className="text-sm font-bold">{t("invitaciones.pedirTitulo")}</h2>
          <p style={{ fontSize: "var(--fs-0)", color: "var(--c-text-muted)" }}>
            {t("invitaciones.pedirAyuda")}
          </p>
        </CardHead>
        <CardBody>
          {!user?.schoolId && <p>{t("invitaciones.sinEscuela")}</p>}
          {user?.schoolId && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
              {ROLES_PEDIBLES.map((rol) => (
                <Button key={rol} onClick={() => void pedir(rol)} disabled={busy === rol}>
                  {etiquetaRol(t, rol)}
                </Button>
              ))}
            </div>
          )}
          {msg && (
            <p
              role={msg.kind === "err" ? "alert" : undefined}
              style={{
                marginTop: "var(--space-3)",
                fontSize: "var(--fs-0)",
                color: msg.kind === "ok" ? "var(--c-success)" : "var(--c-danger)",
              }}
            >
              {msg.text}
            </p>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
