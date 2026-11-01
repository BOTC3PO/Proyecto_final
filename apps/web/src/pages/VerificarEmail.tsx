/**
 * B9 — confirmar el correo desde el enlace (`/verificar-email?token=…`). El token se manda a
 * `POST /api/auth/verificar-email`, que lo valida, lo marca usado y habilita el inicio de sesión.
 */
import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ApiError, apiPost } from "../lib/api";
import { useI18n } from "../i18n/I18nContext";

export default function VerificarEmail() {
  const { t } = useI18n();
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const [estado, setEstado] = useState<"verificando" | "listo" | "error">(token ? "verificando" : "error");
  const [error, setError] = useState<string | null>(token ? null : t("verificarEmail.sinToken"));
  const enviado = useRef(false);

  useEffect(() => {
    // En desarrollo React monta dos veces: el enlace sirve una sola vez, así que se manda una sola.
    if (!token || enviado.current) return;
    enviado.current = true;
    apiPost("/api/auth/verificar-email", { token })
      .then(() => setEstado("listo"))
      .catch((err) => {
        setEstado("error");
        setError(err instanceof ApiError ? err.message : t("recuperarContrasena.noSePudoProcesarLa"));
      });
  }, [token, t]);

  return (
    <div className="flex-1 bg-gray-100">
      <div className="mx-auto max-w-xl px-4 py-16">
        <section className="space-y-6 rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">
          <h1 className="text-2xl font-semibold text-gray-900">{t("verificarEmail.titulo")}</h1>
          {estado === "verificando" && <p role="status" className="animate-pulse text-sm text-gray-600">{t("verificarEmail.verificando")}</p>}
          {estado === "listo" && <p role="status" className="text-sm text-green-700">{t("verificarEmail.listo")}</p>}
          {estado === "error" && error && <p role="alert" className="text-sm text-red-700">{error}</p>}
          {estado !== "verificando" && (
            <Link to="/login" className="inline-block rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
              {t("restablecer.irAlLogin")}
            </Link>
          )}
        </section>
      </div>
    </div>
  );
}
