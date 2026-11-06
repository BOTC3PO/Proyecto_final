import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { apiPost } from "../lib/api";
import { esAppSinConexion } from "../lib/sinConexion";
import { useI18n } from "../i18n/I18nContext";
import BrandMark from "../components/Brand";
import { homePathForRole } from "../routing/homePath";

type LoginForm = {
  user: string;
  password: string;
  remember: boolean;
};

// PLAN-M — sólo se sigue un returnTo same-origin ("/algo"); nunca "//host"
// (protocol-relative) ni una URL absoluta, para no abrir un open-redirect.
function safeReturnTo(path: string | null): string | null {
  return path && path.startsWith("/") && !path.startsWith("//") ? path : null;
}

type RespuestaLogin = {
        id: string;
        username: string;
        email: string;
        fullName?: string;
        role: "ADMIN" | "USER" | "PARENT" | "TEACHER" | "DIRECTIVO" | "GUEST";
        /** MULTIROL-02: el back emite `roles[]` desde Fase 1. El front
         *  lo consume acá. Si el back no lo manda (token viejo), el
         *  provider lo promueve a `[role]` (ver `auth-provider.tsx`). */
        roles?: ReadonlyArray<"ADMIN" | "USER" | "PARENT" | "TEACHER" | "DIRECTIVO" | "GUEST">;
        guestOnboardingStatus?: "pendiente" | "aceptado" | "rechazado" | null;
        schoolId?: string | null;
        accessToken: string;
        refreshToken?: string;
      };

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useI18n();
  const [searchParams] = useSearchParams();
  const returnTo = safeReturnTo(searchParams.get("returnTo"));
  const [form, setForm] = useState<LoginForm>({
    user: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState<Partial<LoginForm>>({});
  const [status, setStatus] = useState<{ loading: boolean; error: string | null }>({
    loading: false,
    error: null,
  });

  // 👇 Tipar correctamente los eventos
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const err: Partial<LoginForm> = {};
    if (!form.user.trim()) err.user = t("login.errorUsuario");
    if (!form.password.trim()) err.password = t("login.errorContrasena");
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // B13 — si la cuenta tiene verificación en dos pasos, el login devuelve un desafío y se pide el código.
  const [desafio, setDesafio] = useState<string | null>(null);
  const [codigo, setCodigo] = useState("");

  const enviarCodigo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status.loading || !desafio) return;
    setStatus({ loading: true, error: null });
    try {
      const payload = await apiPost<RespuestaLogin>("/api/auth/2fa/login", { desafio, codigo });
      completarLogin(payload);
    } catch (error) {
      setStatus({ loading: false, error: error instanceof Error ? error.message : t("login.errorGenerico") });
      return;
    }
    setStatus({ loading: false, error: null });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status.loading) return;
    if (!validate()) return;
    setStatus({ loading: true, error: null });
    try {
      const payload = await apiPost<RespuestaLogin & { requiere2fa?: boolean; desafio?: string }>("/api/auth/login", { identifier: form.user, password: form.password });
      if (payload.requiere2fa && payload.desafio) {
        setDesafio(payload.desafio);
        setCodigo("");
        setStatus({ loading: false, error: null });
        return;
      }
      completarLogin(payload);
    } catch (error) {
      const message = error instanceof Error ? error.message : t("login.errorGenerico");
      setSinConfirmar((error as { payload?: { code?: string } })?.payload?.code === "EMAIL_NO_VERIFICADO");
      setReenviado(false);
      setStatus({ loading: false, error: message });
      return;
    }
    setStatus({ loading: false, error: null });
  };

  // B9 — cuenta registrada que todavía no confirmó el correo: se puede pedir el enlace de nuevo.
  const [sinConfirmar, setSinConfirmar] = useState(false);
  const [reenviado, setReenviado] = useState(false);
  const reenviarVerificacion = async () => {
    try {
      await apiPost("/api/auth/reenviar-verificacion", { identifier: form.user });
      setReenviado(true);
    } catch (error) {
      setStatus({ loading: false, error: error instanceof Error ? error.message : t("login.errorGenerico") });
    }
  };

  const completarLogin = (payload: RespuestaLogin) => {
      const roles = Array.isArray(payload.roles) && payload.roles.length > 0
        ? payload.roles
        : [payload.role];
      login(
        {
          id: payload.id,
          name: payload.fullName?.trim() || payload.username,
          role: payload.role,
          roles,
          guestOnboardingStatus: payload.guestOnboardingStatus ?? null,
          schoolId: payload.schoolId ?? null,
        },
        payload.accessToken,
        payload.refreshToken ?? null,
        { remember: form.remember },
      );
      navigate(returnTo ?? homePathForRole(payload.role));
  };


  return (
    <div className="flex-1 bg-[#f3f4f6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 flex items-center justify-center">
          <section className="w-full max-w-xl rounded-xl bg-white shadow-sm border border-gray-200">
            <div className="p-8 sm:p-10">
              <div className="mb-6 flex items-center justify-center gap-2">
                <BrandMark size={28} />
                <span className="text-lg font-bold text-gray-900">{t("comun.virtualBook")}</span>
              </div>
              <h1 className="text-center text-2xl font-semibold text-gray-900">
                {t("common.iniciarSesionBtn")}
              </h1>

              {desafio ? (
                <form className="mt-8 space-y-6" onSubmit={enviarCodigo}>
                  <p className="text-sm text-gray-600">{t("login.codigo2faAyuda")}</p>
                  <div className="space-y-1.5">
                    <label htmlFor="codigo2fa" className="block text-sm font-medium text-gray-700">{t("login.codigo2fa")}</label>
                    <input id="codigo2fa" name="codigo2fa" inputMode="numeric" autoComplete="one-time-code" autoFocus
                      value={codigo} onChange={(e) => setCodigo(e.target.value)}
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 tracking-widest shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  {status.error && <p role="alert" className="text-sm text-red-600">{status.error}</p>}
                  <button type="submit" disabled={status.loading || !codigo.trim()}
                    className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-70">
                    {t("login.verificar")}
                  </button>
                  <button type="button" onClick={() => setDesafio(null)} className="w-full text-sm text-blue-600">
                    {t("login.volverAContrasena")}
                  </button>
                </form>
              ) : (
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                {searchParams.get("verificar") === "1" && !status.error && (
                  <p role="status" className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-blue-800">
                    {t("login.verificarCorreoEnviado")}
                  </p>
                )}
                {/* Usuario */}
                <div className="space-y-1.5">
                  <label htmlFor="user" className="block text-sm font-medium text-gray-700">
                    {t("login.labelUsuario")}
                  </label>
                  <input
                    id="user"
                    name="user"
                    type="text"
                    autoComplete="username"
                    value={form.user}
                    onChange={handleChange}
                    className={`block w-full rounded-md border px-3 py-2 shadow-sm ${
                      errors.user ? "border-red-500" : "border-gray-300"
                    } focus:border-blue-500 focus:ring-blue-500`}
                  />
                  {errors.user && <p className="text-xs text-red-600">{errors.user}</p>}
                </div>

                {/* Contraseña */}
                <div className="space-y-1.5">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    {t("auth.contrasena")}
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={form.password}
                    onChange={handleChange}
                    className={`block w-full rounded-md border px-3 py-2 shadow-sm ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } focus:border-blue-500 focus:ring-blue-500`}
                  />
                  {errors.password && <p className="text-xs text-red-600">{errors.password}</p>}
                </div>

                {/* Remember */}
                <div className="flex items-center justify-between">
                  <label className="inline-flex items-center gap-2 select-none">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      checked={form.remember}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{t("login.recuerdame")}</span>
                  </label>
                  <Link to="/recuperar" className="text-sm text-blue-600 hover:text-blue-700">
                    {t("login.olvidasteContrasena")}
                  </Link>
                </div>

                {/* Botón */}
                {status.error && (
                  <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
                    {status.error}
                    {sinConfirmar && (
                      reenviado ? (
                        <p className="mt-1 text-green-700">{t("login.verificacionReenviada")}</p>
                      ) : (
                        <button type="button" onClick={() => void reenviarVerificacion()} className="mt-1 block font-semibold text-blue-700 underline">
                          {t("login.reenviarVerificacion")}
                        </button>
                      )
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-white text-sm font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={status.loading}
                >
                  {status.loading ? t("login.ingresando") : t("common.iniciarSesionBtn")}
                </button>

                <p className="text-center text-sm text-gray-600">
                  {t("login.noTienesCuenta")}{" "}
                  <Link to="/register" className="font-medium text-blue-600 hover:text-blue-700">
                    {t("login.registrate")}
                  </Link>
                </p>
                {esAppSinConexion && (
                  // L8 — solo en la app, en castellano como sus otras pantallas propias.
                  <p className="text-center text-xs">
                    <Link to="/quitar-perfil" className="text-gray-500 hover:text-gray-700 underline">Quitar un perfil de este dispositivo</Link>
                  </p>
                )}
              </form>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
