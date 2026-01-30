import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/use-auth";
import { apiGet } from "../../lib/api";
import type { Module, ModuleVisibility } from "../../domain/module/module.types";

const VISIBILITY_LABELS: Record<ModuleVisibility, string> = {
  publico: "Público",
  privado: "Privado",
  escuela: "Escuela",
};

type ModulesResponse = {
  items: Module[];
};

const resolveMateria = (module: Module) => module.subject || module.category || "Sin materia";

export default function ModulosList() {
  const { user } = useAuth();
  const role = user?.role ?? "GUEST";
  const [modules, setModules] = useState<Module[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const canCreate = useMemo(() => ["TEACHER", "ADMIN", "GUEST"].includes(role), [role]);
  const canEdit = useMemo(() => ["TEACHER", "ADMIN", "GUEST"].includes(role), [role]);

  useEffect(() => {
    let active = true;
    setStatus("loading");
    setErrorMessage(null);
    apiGet<ModulesResponse>("/api/modulos")
      .then((data) => {
        if (!active) return;
        setModules(data.items ?? []);
        setStatus("ready");
      })
      .catch((error) => {
        if (!active) return;
        setModules([]);
        setStatus("error");
        setErrorMessage(
          error instanceof Error ? error.message : "No se pudieron cargar los módulos."
        );
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="p-6 space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Módulos</h1>
          <p className="text-sm text-slate-600">
            Explora el listado de módulos disponibles y gestiona su contenido.
          </p>
        </div>
        {canCreate && (
          <Link
            to="/modulos/crear"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
          >
            Crear módulo
          </Link>
        )}
      </header>

      {status === "loading" && (
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-600">
          Cargando módulos...
        </div>
      )}

      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-sm text-red-700">
          {errorMessage ?? "Ocurrió un error inesperado."}
        </div>
      )}

      {status === "ready" && modules.length === 0 && (
        <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <p className="text-sm text-slate-600">No hay módulos disponibles por ahora.</p>
          {canCreate && (
            <Link
              to="/modulos/crear"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
            >
              Crear el primer módulo
            </Link>
          )}
        </div>
      )}

      {status === "ready" && modules.length > 0 && (
        <div className="grid gap-4">
          {modules.map((module) => {
            const visibilityLabel = module.visibility
              ? VISIBILITY_LABELS[module.visibility]
              : "Sin definir";
            return (
              <article
                key={module.id}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold text-slate-900">{module.title}</h2>
                    <p className="text-sm text-slate-600">Materia: {resolveMateria(module)}</p>
                    <p className="text-xs font-medium text-slate-500">
                      Visibilidad: {visibilityLabel}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm font-semibold">
                    <Link
                      to={`/modulos/${module.id}`}
                      className="rounded-md border border-slate-200 px-3 py-1.5 text-slate-700 transition hover:bg-slate-50"
                    >
                      Ver
                    </Link>
                    {canEdit && (
                      <Link
                        to={`/modulos/${module.id}/editar`}
                        className="rounded-md border border-indigo-200 px-3 py-1.5 text-indigo-600 transition hover:bg-indigo-50"
                      >
                        Editar
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}
