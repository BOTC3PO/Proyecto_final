import { useEffect, useState } from "react";
import { apiGet } from "../lib/api";

type Materia = {
  id: string;
  nombre: string;
  descripcion: string;
  nivel: string;
  activa: boolean;
};

async function fetchAdminMaterias(): Promise<Materia[]> {
  return apiGet<Materia[]>("/api/admin/materias");
}

export default function AdminMaterias() {
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchAdminMaterias()
      .then((data) => {
        if (!active) return;
        setMaterias(data);
        setError(null);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Gestión de materias</h1>
        <p className="text-base text-slate-600">
          Administra las materias disponibles en la plataforma educativa.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">Materias registradas</h2>
        </div>

        <div className="mt-4 space-y-3">
          {loading && <p className="text-sm text-slate-500">Cargando materias...</p>}
          {error && <p className="text-sm text-red-500">Error: {error}</p>}
          {!loading &&
            !error &&
            materias.map((materia) => (
              <div
                key={materia.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-100 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">{materia.nombre}</p>
                  {materia.nivel && (
                    <p className="text-xs text-slate-500">Nivel: {materia.nivel}</p>
                  )}
                  {materia.descripcion && (
                    <p className="text-xs text-slate-400">{materia.descripcion}</p>
                  )}
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    materia.activa
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {materia.activa ? "Activa" : "Inactiva"}
                </span>
              </div>
            ))}
          {!loading && !error && materias.length === 0 && (
            <p className="text-sm text-slate-500">No hay materias registradas.</p>
          )}
        </div>
      </section>
    </main>
  );
}
