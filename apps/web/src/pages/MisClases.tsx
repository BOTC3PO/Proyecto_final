import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";
import { getAulaId } from "../lib/aula-id";

type AulasResponse = { items: Classroom[] };

export default function MisClases() {
  const [aulas, setAulas] = useState<Classroom[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    apiGet<AulasResponse>("/api/aulas")
      .then((data) => {
        if (!active) return;
        setAulas(data.items ?? []);
      })
      .catch(() => {
        if (!active) return;
        setError("No se pudieron cargar tus aulas.");
      })
      .finally(() => { if (!active) return; setLoading(false); });
    return () => { active = false; };
  }, []);

  return (
    <main className="mx-auto max-w-4xl px-6 py-10 space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">
          Mis clases
        </h1>
        <p className="text-slate-500 mt-1">
          Seleccioná un aula para ver su contenido.
        </p>
      </header>

      {loading && (
        <p className="text-sm text-slate-400 animate-pulse">
          Cargando aulas...
        </p>
      )}

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      {!loading && !error && aulas.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center">
          <p className="text-slate-500 font-medium">
            Todavía no estás en ninguna aula.
          </p>
          <p className="text-slate-400 text-sm mt-1">
            Pedile a tu profesor el código de acceso.
          </p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {aulas.map((aula) => (
          <Link
            key={getAulaId(aula)}
            to={`/clases/${getAulaId(aula)}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors truncate">
                  {aula.name}
                </p>
                {aula.description && (
                  <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                    {aula.description}
                  </p>
                )}
                {aula.category && (
                  <span className="mt-2 inline-block rounded-full bg-blue-50 border border-blue-200 px-2 py-0.5 text-xs text-blue-700 font-medium">
                    {aula.category}
                  </span>
                )}
              </div>
              <span className="text-slate-300 group-hover:text-blue-400 text-xl transition-colors shrink-0">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
