import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { apiPost } from "../lib/api";

type LoginForm = {
  user: string;
  password: string;
  remember: boolean;
};

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
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
    if (!form.user.trim()) err.user = "Ingresá tu correo o usuario.";
    if (!form.password.trim()) err.password = "Ingresá tu contraseña.";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus({ loading: true, error: null });
    try {
      const payload = await apiPost<{
        id: string;
        username: string;
        email: string;
        fullName?: string;
        role: "ADMIN" | "USER" | "PARENT" | "TEACHER" | "DIRECTIVO" | "GUEST";
        schoolId?: string | null;
      }>("/api/auth/login", { identifier: form.user, password: form.password });
      login(
        {
          id: payload.id,
          name: payload.fullName?.trim() || payload.username,
          role: payload.role,
          schoolId: payload.schoolId ?? null,
        },
        { remember: form.remember },
      );
      navigate("/");
    } catch (error) {
      const message = error instanceof Error ? error.message : "No pudimos iniciar sesión.";
      setStatus({ loading: false, error: message });
      return;
    }
    setStatus({ loading: false, error: null });
  };

  return (
    <main className="flex-1 bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 flex items-center justify-center">
          <section className="w-full max-w-xl rounded-xl bg-white shadow-lg">
            <div className="p-8 sm:p-10">
              <h1 className="text-center text-2xl font-semibold text-gray-900">
                Iniciar Sesión
              </h1>

              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                {/* Usuario */}
                <div className="space-y-1.5">
                  <label htmlFor="user" className="block text-sm font-medium text-gray-700">
                    Correo Electrónico o Usuario público
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
                    Contraseña
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
                    <span className="text-sm text-gray-700">Recuérdame</span>
                  </label>
                  <Link to="/recuperar" className="text-sm text-blue-600 hover:text-blue-700">
                    ¿Olvidaste tu contraseña?
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
                  {status.loading ? "Ingresando..." : "Iniciar Sesión"}
                </button>

                <p className="text-center text-sm text-gray-600">
                  ¿No tienes una cuenta?{" "}
                  <Link to="/register" className="font-medium text-blue-600 hover:text-blue-700">
                    Regístrate
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
