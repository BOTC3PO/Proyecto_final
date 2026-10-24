/**
 * Bandeja de verificación de escuelas (admin).
 *
 * Es la única vía para habilitar cobros: sin pasar por acá, una escuela no
 * puede conectar pasarela ni emitir cuotas. Por eso muestra los datos
 * declarados y el contacto del directivo que la registró — verificar es una
 * gestión humana (llamar, pedir documentación), no un click a ciegas.
 */
import { useCallback, useEffect, useState } from "react";
import { Card, CardHead, CardBody, Button } from "../components/ui";
import { useI18n } from "../i18n/I18nContext";
import {
  fetchSolicitudes,
  verificarEscuela,
  habilitarCryptomus,
  reasignarDirectivoPrincipal,
  type EscuelaPendiente,
} from "../services/escuela-alta";

const ESTADOS = ["pendiente", "verificada", "rechazada"] as const;

export default function AdminEscuelas() {
  const { t } = useI18n();
  const [estado, setEstado] = useState<(typeof ESTADOS)[number]>("pendiente");
  const [items, setItems] = useState<EscuelaPendiente[]>([]);
  const [cargando, setCargando] = useState(true);
  const [procesando, setProcesando] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const cargar = useCallback(async () => {
    setCargando(true);
    try {
      const res = await fetchSolicitudes(estado);
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
    // El rechazo exige motivo — el back lo valida igual, pero pedirlo acá
    // evita el viaje y, sobre todo, deja constancia de POR QUÉ se rechazó.
    let motivo: string | undefined;
    if (decision === "rechazada") {
      const ingresado = window.prompt(t("adminEscuelas.motivoRechazo"));
      if (!ingresado?.trim()) return;
      motivo = ingresado.trim();
    }
    setProcesando(id);
    try {
      await verificarEscuela(id, decision, motivo);
      await cargar();
    } catch (e) {
      setError(e instanceof Error ? e.message : "error");
    } finally {
      setProcesando(null);
    }
  };

  const alternarCryptomus = async (esc: EscuelaPendiente) => {
    // Encenderlo significa asumir custodia de fondos de terceros para ESA
    // escuela, así que se confirma en vez de ser un toggle silencioso.
    const encender = !esc.cryptomusHabilitado;
    if (encender && !window.confirm(t("adminEscuelas.cryptomusConfirmar"))) return;
    setProcesando(esc.id);
    try {
      await habilitarCryptomus(esc.id, encender);
      await cargar();
    } catch (e) {
      setError(e instanceof Error ? e.message : "error");
    } finally {
      setProcesando(null);
    }
  };

  const reasignarTitular = async (esc: EscuelaPendiente) => {
    const usuarioId = window.prompt(t("adminEscuelas.reasignarPrompt"));
    if (!usuarioId?.trim()) return;
    setProcesando(esc.id);
    try {
      await reasignarDirectivoPrincipal(esc.id, usuarioId.trim());
      await cargar();
    } catch (e) {
      setError(e instanceof Error ? e.message : "error");
    } finally {
      setProcesando(null);
    }
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      <Card>
        <CardHead>
          <h2 className="text-sm font-bold">{t("adminEscuelas.titulo")}</h2>
          <p style={{ fontSize: "var(--fs-0)", color: "var(--c-text-muted)" }}>{t("adminEscuelas.subtitulo")}</p>
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
          {!cargando && items.length === 0 && <p>{t("adminEscuelas.vacio")}</p>}

          {items.map((esc) => (
            <div
              key={esc.id}
              data-testid={`solicitud-${esc.id}`}
              style={{
                borderTop: "1px solid var(--c-border)",
                paddingBlock: "var(--space-3)",
              }}
            >
              <p style={{ fontWeight: "var(--fw-semibold)", color: "var(--c-text)" }}>{esc.name}</p>
              {esc.directivoPrincipal && (
                <p style={{ fontSize: "var(--fs-0)", color: "var(--c-text-muted)" }}>
                  {t("adminEscuelas.solicitadaPor")}{" "}
                  {esc.directivoPrincipal.fullName ?? esc.directivoPrincipal.username} ·{" "}
                  {esc.directivoPrincipal.email}
                </p>
              )}
              {esc.datos && (
                <dl style={{ fontSize: "var(--fs-0)", color: "var(--c-text-muted)", marginTop: "var(--space-2)" }}>
                  {Object.entries(esc.datos).map(([k, v]) => (
                    <div key={k} style={{ display: "flex", gap: "var(--space-2)" }}>
                      <dt style={{ minWidth: "9rem" }}>{t(`registrarEscuela.${k}`)}</dt>
                      <dd style={{ color: "var(--c-text)" }}>{String(v)}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {/* Acciones de plataforma sobre escuelas ya verificadas. */}
              {estado === "verificada" && (
                <div style={{ display: "flex", gap: "var(--space-2)", marginTop: "var(--space-3)", flexWrap: "wrap" }}>
                  <Button
                    onClick={() => void alternarCryptomus(esc)}
                    disabled={procesando === esc.id}
                  >
                    {esc.cryptomusHabilitado
                      ? t("adminEscuelas.cryptomusQuitar")
                      : t("adminEscuelas.cryptomusHabilitar")}
                  </Button>
                  <Button onClick={() => void reasignarTitular(esc)} disabled={procesando === esc.id}>
                    {t("adminEscuelas.reasignarTitular")}
                  </Button>
                </div>
              )}
              {estado === "pendiente" && (
                <div style={{ display: "flex", gap: "var(--space-2)", marginTop: "var(--space-3)" }}>
                  <Button onClick={() => void decidir(esc.id, "verificada")} disabled={procesando === esc.id}>
                    {t("adminEscuelas.verificar")}
                  </Button>
                  <Button onClick={() => void decidir(esc.id, "rechazada")} disabled={procesando === esc.id}>
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
