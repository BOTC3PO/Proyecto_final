/**
 * Alta de escuela con aprobación.
 *
 * Quien la registra queda como directivo principal y puede usar aulas,
 * módulos y evaluaciones enseguida. Lo único que queda cerrado hasta que el
 * admin verifique es cobrarle a las familias — por eso el formulario pide
 * los datos que permiten esa verificación y lo dice de entrada, en vez de
 * dejar que la escuela lo descubra recién al intentar cobrar.
 */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHead, CardBody, Button } from "../components/ui";
import { useI18n } from "../i18n/I18nContext";
import { solicitarEscuela, type SolicitudEscuela } from "../services/escuela-alta";

const VACIO: SolicitudEscuela = {
  name: "",
  razonSocial: "",
  cuit: "",
  domicilio: "",
  contactoEmail: "",
  contactoTelefono: "",
  cue: "",
  notas: "",
};

export default function RegistrarEscuela() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [datos, setDatos] = useState<SolicitudEscuela>(VACIO);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [listo, setListo] = useState(false);

  const set = (campo: keyof SolicitudEscuela) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setDatos((d) => ({ ...d, [campo]: e.target.value }));

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setError(null);
    try {
      await solicitarEscuela({ ...datos, cue: datos.cue || undefined, notas: datos.notas || undefined });
      setListo(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : t("registrarEscuela.error"));
    } finally {
      setEnviando(false);
    }
  };

  if (listo) {
    return (
      <div className="mx-auto max-w-2xl p-6">
        <Card>
          <CardHead><h2 className="text-sm font-bold">{t("registrarEscuela.enviadaTitulo")}</h2></CardHead>
          <CardBody>
            <p style={{ color: "var(--c-text)" }}>{t("registrarEscuela.enviadaCuerpo")}</p>
            <div style={{ marginTop: "var(--space-4)" }}>
              <Button onClick={() => navigate("/")}>{t("registrarEscuela.irAlPanel")}</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }

  const campo = (
    id: keyof SolicitudEscuela,
    label: string,
    opts: { required?: boolean; type?: string; ayuda?: string } = {}
  ) => (
    <label style={{ display: "block", marginBottom: "var(--space-3)" }}>
      <span style={{ display: "block", fontSize: "var(--fs-0)", color: "var(--c-text-muted)" }}>
        {label}
        {opts.required ? " *" : ""}
      </span>
      <input
        type={opts.type ?? "text"}
        value={datos[id] ?? ""}
        onChange={set(id)}
        required={opts.required}
        style={{
          width: "100%",
          padding: "var(--space-2)",
          borderRadius: "var(--r-md)",
          border: "1px solid var(--c-border)",
          background: "var(--c-surface)",
          color: "var(--c-text)",
        }}
      />
      {opts.ayuda && (
        <span style={{ display: "block", fontSize: "var(--fs-0)", color: "var(--c-text-muted)" }}>
          {opts.ayuda}
        </span>
      )}
    </label>
  );

  return (
    <div className="mx-auto max-w-2xl p-6">
      <Card>
        <CardHead>
          <h2 className="text-sm font-bold">{t("registrarEscuela.titulo")}</h2>
          <p style={{ fontSize: "var(--fs-0)", color: "var(--c-text-muted)" }}>{t("registrarEscuela.subtitulo")}</p>
        </CardHead>
        <CardBody>
          {/* Se dice ANTES de pedir los datos: la escuela sabe desde el
              principio qué desbloquea la verificación y qué no. */}
          <p
            role="note"
            style={{
              padding: "var(--space-3)",
              borderRadius: "var(--r-md)",
              background: "var(--c-info-soft, var(--c-surface))",
              color: "var(--c-text)",
              fontSize: "var(--fs-0)",
              marginBottom: "var(--space-4)",
            }}
          >
            {t("registrarEscuela.aviso")}
          </p>

          <form onSubmit={enviar}>
            {campo("name", t("registrarEscuela.nombre"), { required: true })}
            {campo("razonSocial", t("registrarEscuela.razonSocial"), { required: true })}
            {campo("cuit", t("registrarEscuela.cuit"), { required: true })}
            {campo("domicilio", t("registrarEscuela.domicilio"), { required: true })}
            {campo("contactoEmail", t("registrarEscuela.email"), { required: true, type: "email" })}
            {campo("contactoTelefono", t("registrarEscuela.telefono"), { required: true })}
            {campo("cue", t("registrarEscuela.cue"), { ayuda: t("registrarEscuela.cueAyuda") })}

            <label style={{ display: "block", marginBottom: "var(--space-3)" }}>
              <span style={{ display: "block", fontSize: "var(--fs-0)", color: "var(--c-text-muted)" }}>
                {t("registrarEscuela.notas")}
              </span>
              <textarea
                value={datos.notas ?? ""}
                onChange={set("notas")}
                rows={3}
                style={{
                  width: "100%",
                  padding: "var(--space-2)",
                  borderRadius: "var(--r-md)",
                  border: "1px solid var(--c-border)",
                  background: "var(--c-surface)",
                  color: "var(--c-text)",
                }}
              />
            </label>

            {error && (
              <p role="alert" style={{ color: "var(--c-danger)", fontSize: "var(--fs-0)" }}>
                {error}
              </p>
            )}
            <Button type="submit" disabled={enviando}>
              {enviando ? t("registrarEscuela.enviando") : t("registrarEscuela.enviar")}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
