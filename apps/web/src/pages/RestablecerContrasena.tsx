/**
 * E1 — elegir una contraseña nueva desde el enlace del correo (`/restablecer?token=…`).
 * El token se manda tal cual a `POST /api/auth/reset-password`, que lo valida, lo marca usado y cierra las
 * sesiones abiertas.
 */
import { useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ApiError, apiPost } from "../lib/api";
import { useI18n } from "../i18n/I18nContext";

const inputCls =
  "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500";

export default function RestablecerContrasena() {
  const { t } = useI18n();
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const [password, setPassword] = useState("");
  const [repetida, setRepetida] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [listo, setListo] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const enviar = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enviando) return;
    if (password !== repetida) {
      setError(t("restablecer.noCoinciden"));
      return;
    }
    setEnviando(true);
    setError(null);
    try {
      await apiPost("/api/auth/reset-password", { token, password });
      setListo(true);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : t("recuperarContrasena.noSePudoProcesarLa"));
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="flex-1 bg-gray-100">
      <div className="mx-auto max-w-xl px-4 py-16">
        <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10 space-y-6">
          <header className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold text-gray-900">{t("restablecer.titulo")}</h1>
            {!listo && token && <p className="text-sm text-gray-600">{t("restablecer.ayuda")}</p>}
          </header>

          {!token ? (
            <p role="alert" className="text-sm text-red-700">{t("restablecer.sinToken")}</p>
          ) : listo ? (
            <div className="space-y-4 text-center">
              <p role="status" className="text-sm text-green-700">{t("restablecer.listo")}</p>
              <Link to="/login" className="inline-block rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                {t("restablecer.irAlLogin")}
              </Link>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={enviar}>
              <label className="block text-sm font-medium text-gray-700">
                {t("restablecer.nueva")}
                <input type="password" autoComplete="new-password" required minLength={8} value={password}
                  onChange={(e) => setPassword(e.target.value)} className={inputCls} />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                {t("restablecer.repetir")}
                <input type="password" autoComplete="new-password" required value={repetida}
                  onChange={(e) => setRepetida(e.target.value)} className={inputCls} />
              </label>
              {error && (
                <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
              )}
              <button type="submit" disabled={enviando}
                className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70">
                {enviando ? t("comun.guardando") : t("restablecer.guardar")}
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
