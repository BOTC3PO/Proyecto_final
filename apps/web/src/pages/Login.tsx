import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { apiPost } from "../lib/api";
import { useI18n } from "../i18n/I18nContext";
import BrandMark from "../components/Brand";

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status.loading) return;
    if (!validate()) return;
    setStatus({ loading: true, error: null });
    try {
      const payload = await apiPost<{
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
        cuentaVinculada?: { destinoUsuarioId: string; tipoDestino: "ALUMNO" | "PRINCIPAL" | "PADRE" | "ALUMNO_HIJO" } | null;
        accessToken: string;
        refreshToken?: string;
      }>("/api/auth/login", { identifier: form.user, password: form.password });
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
          cuentaVinculada: payload.cuentaVinculada ?? null,
        },
        payload.accessToken,
        payload.refreshToken ?? null,
        { remember: form.remember },
      );
      const redirectByRole: Record<typeof payload.role, string> = {
        ADMIN: "/admin",
        TEACHER: "/profesor",
        DIRECTIVO: "/enterprise",
        USER: "/menualumno",
        PARENT: "/menualumno",
        GUEST: "/",
      };
      navigate(returnTo ?? redirectByRole[payload.role] ?? "/");
    } catch (error) {
      const message = error instanceof Error ? error.message : t("login.errorGenerico");
      setStatus({ loading: false, error: message });
      return;
    }
    setStatus({ loading: false, error: null });
  };

  return (
    <main className="flex-1 bg-[#f3f4f6]">
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

              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
