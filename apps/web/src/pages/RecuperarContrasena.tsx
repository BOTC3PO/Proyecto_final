import { useState, type ChangeEvent, type FormEvent } from "react";
import { ApiError, apiPost } from "../lib/api";

type RecuperarContrasenaForm = {
  email: string;
};

type RecuperarContrasenaStatus = {
  loading: boolean;
  error: string | null;
  success: string | null;
};

export default function RecuperarContrasena() {
  const [form, setForm] = useState<RecuperarContrasenaForm>({ email: "" });
  const [errors, setErrors] = useState<Partial<RecuperarContrasenaForm>>({});
  const [status, setStatus] = useState<RecuperarContrasenaStatus>({
    loading: false,
    error: null,
    success: null
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ email: e.target.value });
  };

  const validate = () => {
    const err: Partial<RecuperarContrasenaForm> = {};
    if (!form.email.trim()) {
      err.email = "Ingresá tu correo electrónico.";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status.loading) return;
    if (!validate()) return;

    setStatus({ loading: true, error: null, success: null });

    try {
      const payload = await apiPost<{ message?: string }>("/api/auth/forgot-password", {
        email: form.email.trim().toLowerCase()
      });

      setStatus({
        loading: false,
        error: null,
        success:
          payload.message ??
          "Si existe una cuenta con ese correo, enviaremos instrucciones para restablecer tu contraseña."
      });
    } catch (error) {
      const message =
        error instanceof ApiError
          ? error.message
          : "No se pudo procesar la solicitud. Intentalo nuevamente más tarde.";
      setStatus({ loading: false, error: message, success: null });
    }
  };

  return (
    <main className="flex-1 bg-gray-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <section className="rounded-2xl bg-white shadow-lg p-8 sm:p-10 space-y-6">
          <header className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold text-gray-900">Recuperar contraseña</h1>
            <p className="text-gray-600">Ingresá tu correo y te enviaremos instrucciones para restablecerla.</p>
          </header>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="tuemail@ejemplo.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            {status.error && (
              <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
                {status.error}
              </div>
            )}

            {status.success && (
              <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700" role="status">
                {status.success}
              </div>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.loading ? "Enviando..." : "Enviar instrucciones"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
