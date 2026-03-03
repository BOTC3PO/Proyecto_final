import { useEffect, useState } from "react";
import { apiGet } from "../lib/api";

type PerfilData = {
  id: string;
  username: string;
  email: string;
  fullName: string;
  role: string;
  escuelaId: string | null;
  createdAt: string | null;
  isBanned: boolean;
  warningCount: number;
  modulosCompletados: { publicos: number; privados: number; total: number };
  hijos: Array<{ id: string; nombre: string; usuario: string }>;
};

const ROLE_LABELS: Record<string, string> = {
  ADMIN: "Administrador",
  USER: "Alumno",
  TEACHER: "Docente",
  PARENT: "Padre/Madre",
  DIRECTIVO: "Directivo",
  GUEST: "Invitado",
};

const ROLE_COLORS: Record<string, string> = {
  ADMIN: "bg-blue-100 text-blue-800",
  USER: "bg-emerald-100 text-emerald-800",
  TEACHER: "bg-violet-100 text-violet-800",
  PARENT: "bg-amber-100 text-amber-800",
  DIRECTIVO: "bg-slate-100 text-slate-800",
  GUEST: "bg-gray-100 text-gray-600",
};

export default function Perfil() {
  const [perfil, setPerfil] = useState<PerfilData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    apiGet<PerfilData>("/api/perfil")
      .then((data) => { if (active) { setPerfil(data); setError(null); } })
      .catch((e: Error) => { if (active) setError(e.message); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  if (loading) {
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-10">
        <div className="space-y-4">
          <div className="h-8 w-48 animate-pulse rounded-xl bg-slate-100" />
          <div className="h-40 animate-pulse rounded-2xl bg-slate-100" />
          <div className="h-32 animate-pulse rounded-2xl bg-slate-100" />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-10">
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Error al cargar el perfil: {error}
        </div>
      </main>
    );
  }

  if (!perfil) return null;

  const initials = perfil.fullName
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold text-slate-900">Mi perfil</h1>
        <p className="text-base text-slate-600">Información de tu cuenta y actividad en la plataforma.</p>
      </header>

      {/* Tarjeta de identidad */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-5">
          {/* Avatar */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
            {initials || "?"}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-semibold text-slate-900">{perfil.fullName}</h2>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${ROLE_COLORS[perfil.role] ?? "bg-slate-100 text-slate-700"}`}>
                {ROLE_LABELS[perfil.role] ?? perfil.role}
              </span>
              {perfil.isBanned && (
                <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700">
                  Cuenta suspendida
                </span>
              )}
            </div>
            <p className="mt-0.5 text-sm text-slate-500">@{perfil.username}</p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs text-slate-400">Correo electrónico</p>
            <p className="text-sm font-medium text-slate-700">{perfil.email || "—"}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Miembro desde</p>
            <p className="text-sm font-medium text-slate-700">
              {perfil.createdAt
                ? new Date(perfil.createdAt).toLocaleDateString("es", { year: "numeric", month: "long", day: "numeric" })
                : "—"}
            </p>
          </div>
          {perfil.escuelaId && (
            <div>
              <p className="text-xs text-slate-400">Escuela</p>
              <p className="text-sm font-medium text-slate-700">{perfil.escuelaId}</p>
            </div>
          )}
          {perfil.warningCount > 0 && (
            <div>
              <p className="text-xs text-slate-400">Advertencias</p>
              <p className="text-sm font-medium text-amber-700">
                {perfil.warningCount} advertencia{perfil.warningCount !== 1 ? "s" : ""}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Actividad en módulos */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Módulos completados</h2>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="rounded-xl bg-violet-50 p-4 text-center">
            <p className="text-2xl font-bold text-violet-700">{perfil.modulosCompletados.publicos}</p>
            <p className="mt-1 text-xs text-violet-600">Públicos</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 text-center">
            <p className="text-2xl font-bold text-slate-700">{perfil.modulosCompletados.privados}</p>
            <p className="mt-1 text-xs text-slate-500">Privados / Escuela</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4 text-center">
            <p className="text-2xl font-bold text-blue-700">{perfil.modulosCompletados.total}</p>
            <p className="mt-1 text-xs text-blue-600">Total</p>
          </div>
        </div>
        {perfil.modulosCompletados.total === 0 && (
          <p className="mt-3 text-sm text-slate-400">
            Aún no has completado ningún módulo. ¡Explora los{" "}
            <a href="/modulos" className="text-blue-600 underline">módulos disponibles</a>!
          </p>
        )}
      </section>

      {/* Hijos vinculados (solo para PARENT) */}
      {perfil.role === "PARENT" && (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Hijos vinculados</h2>
          {perfil.hijos.length === 0 ? (
            <p className="mt-3 text-sm text-slate-500">
              No tienes hijos vinculados.{" "}
              <a href="/hijos/agregar" className="text-blue-600 underline">Agregar un hijo</a>
            </p>
          ) : (
            <div className="mt-4 space-y-2">
              {perfil.hijos.map((h) => (
                <div key={h.id} className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{h.nombre}</p>
                    <p className="text-xs text-slate-400">@{h.usuario}</p>
                  </div>
                  <a
                    href="/hijos"
                    className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    Ver progreso
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
