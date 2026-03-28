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

type ProgressItem = {
  moduloId: string;
  status: "iniciado" | "en_progreso" | "completado";
};

type ModuloBasico = {
  id: string;
  title: string;
  subject?: string;
  category?: string;
};

type FortalezaMateria = {
  materia: string;
  completados: number;
  total: number;
  porcentaje: number;
};

type Logro = {
  id: string;
  label: string;
  descripcion: string;
  icono: string;
  obtenido: boolean;
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
  const [fortalezas, setFortalezas] =
    useState<FortalezaMateria[]>([]);
  const [logros, setLogros] = useState<Logro[]>([]);
  const [progresoStatus, setProgresoStatus] =
    useState<"idle" | "loading" | "ready">("idle");

  useEffect(() => {
    let active = true;
    apiGet<PerfilData>("/api/perfil")
      .then((data) => { if (active) { setPerfil(data); setError(null); } })
      .catch((e: Error) => { if (active) setError(e.message); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!perfil?.id) return;
    let active = true;
    setProgresoStatus("loading");

    Promise.all([
      apiGet<{ items: ModuloBasico[] }>("/api/modulos"),
      apiGet<{ items: ProgressItem[] }>(
        `/api/progreso?usuarioId=${perfil.id}`
      ),
    ])
      .then(([modulosRes, progressRes]) => {
        if (!active) return;

        const completadosIds = new Set(
          progressRes.items
            .filter((p) => p.status === "completado")
            .map((p) => p.moduloId)
        );

        // Agrupar por materia
        const porMateria = new Map<string, { total: number; completados: number }>();
        for (const m of modulosRes.items) {
          const materia = m.subject ?? m.category ?? "General";
          const entry = porMateria.get(materia) ?? { total: 0, completados: 0 };
          entry.total += 1;
          if (completadosIds.has(m.id)) entry.completados += 1;
          porMateria.set(materia, entry);
        }

        const fortalezasCalc: FortalezaMateria[] = Array.from(porMateria.entries())
          .map(([materia, { total, completados }]) => ({
            materia,
            completados,
            total,
            porcentaje: total === 0 ? 0 : Math.round((completados / total) * 100),
          }))
          .filter((f) => f.completados > 0)
          .sort((a, b) => b.porcentaje - a.porcentaje);

        setFortalezas(fortalezasCalc);

        // Calcular logros
        const totalCompletados = completadosIds.size;
        const logrosCalc: Logro[] = [
          {
            id: "primer-modulo",
            label: "Primer paso",
            descripcion: "Completaste tu primer módulo.",
            icono: "🎯",
            obtenido: totalCompletados >= 1,
          },
          {
            id: "cinco-modulos",
            label: "En camino",
            descripcion: "Completaste 5 módulos.",
            icono: "📚",
            obtenido: totalCompletados >= 5,
          },
          {
            id: "diez-modulos",
            label: "Estudioso",
            descripcion: "Completaste 10 módulos.",
            icono: "🏆",
            obtenido: totalCompletados >= 10,
          },
          {
            id: "veinticinco-modulos",
            label: "Experto",
            descripcion: "Completaste 25 módulos.",
            icono: "⭐",
            obtenido: totalCompletados >= 25,
          },
          // Logros por materia — uno por cada materia con 100%
          ...fortalezasCalc
            .filter((f) => f.porcentaje === 100 && f.total >= 3)
            .map((f) => ({
              id: `dominio-${f.materia.toLowerCase()}`,
              label: `Dominio de ${f.materia}`,
              descripcion: `Completaste todos los módulos de ${f.materia}.`,
              icono: "🎓",
              obtenido: true,
            })),
          // Logro por materia con más del 75%
          ...fortalezasCalc
            .filter((f) => f.porcentaje >= 75 && f.total >= 2)
            .map((f) => ({
              id: `avanzado-${f.materia.toLowerCase()}`,
              label: `Avanzado en ${f.materia}`,
              descripcion: `Superaste el 75% de los módulos de ${f.materia}.`,
              icono: "💡",
              obtenido: true,
            })),
        ];

        setLogros(logrosCalc);
        setProgresoStatus("ready");
      })
      .catch(() => {
        if (!active) return;
        setProgresoStatus("ready");
      });

    return () => { active = false; };
  }, [perfil?.id]);

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

      {/* Fortalezas por materia (solo para USER) */}
      {perfil.role === "USER" && progresoStatus === "ready" &&
        fortalezas.length > 0 && (
        <section className="rounded-2xl border border-slate-200
          bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            En qué sos bueno
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Materias donde más avanzaste.
          </p>
          <div className="mt-4 space-y-3">
            {fortalezas.slice(0, 5).map((f) => (
              <div key={f.materia}>
                <div className="flex items-center justify-between
                  text-sm mb-1">
                  <span className="font-medium text-slate-700">
                    {f.materia}
                  </span>
                  <span className="text-slate-400 text-xs">
                    {f.completados}/{f.total} módulos ·{" "}
                    {f.porcentaje}%
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      f.porcentaje === 100
                        ? "bg-emerald-500"
                        : f.porcentaje >= 75
                        ? "bg-blue-500"
                        : f.porcentaje >= 50
                        ? "bg-violet-400"
                        : "bg-amber-400"
                    }`}
                    style={{ width: `${f.porcentaje}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Logros (solo para USER) */}
      {perfil.role === "USER" && progresoStatus === "ready" && (
        <section className="rounded-2xl border border-slate-200
          bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Logros
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Hitos alcanzados en tu recorrido.
          </p>
          {logros.length === 0 ? (
            <p className="mt-3 text-sm text-slate-400">
              Completá módulos para desbloquear logros.
            </p>
          ) : (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {logros.map((logro) => (
                <div
                  key={logro.id}
                  className={`flex items-center gap-3 rounded-xl
                    border p-3 ${
                    logro.obtenido
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-slate-100 bg-slate-50 opacity-40"
                  }`}
                >
                  <span className="text-2xl">{logro.icono}</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {logro.label}
                    </p>
                    <p className="text-xs text-slate-500">
                      {logro.descripcion}
                    </p>
                  </div>
                  {logro.obtenido && (
                    <span className="ml-auto text-xs font-semibold
                      text-emerald-600">
                      ✓
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

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
