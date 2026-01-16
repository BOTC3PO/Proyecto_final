import { useEffect, useState } from "react";
import type { Classroom } from "../domain/classroom/classroom.types";
import { fetchClassrooms } from "../services/aulas";

const formatAccess = (accessType: Classroom["accessType"]) => (accessType === "publica" ? "Pública" : "Privada");

export default function ProfesorAulas() {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchClassrooms()
      .then((response) => {
        if (!active) return;
        setClassrooms(response.items);
        setError(null);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message || "No se pudo cargar las aulas.");
      })
      .finally(() => {
        if (!active) return;
        setIsLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="p-6 space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Aulas virtuales</h1>
          <p className="text-gray-600">Acceso y administración de aulas para tus cursos.</p>
        </div>
        <button className="rounded-md border border-blue-600 px-4 py-2 text-blue-700 hover:bg-blue-50">
          Crear aula
        </button>
      </div>

      <section className="space-y-4">
        {isLoading ? (
          <div className="rounded-lg border border-dashed border-gray-300 p-6 text-gray-500">Cargando aulas...</div>
        ) : error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-700">{error}</div>
        ) : classrooms.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 p-6 text-gray-500">
            Todavía no creaste aulas. Usa “Crear aula” para comenzar.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {classrooms.map((classroom) => (
              <article key={classroom.id} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{classroom.name}</h2>
                    <p className="mt-1 text-sm text-gray-600">{classroom.description}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      classroom.status === "archivada"
                        ? "bg-gray-100 text-gray-600"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {classroom.status === "archivada" ? "Archivada" : "Activa"}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-600">
                  <span className="rounded-full bg-blue-50 px-2 py-1 text-blue-700">{formatAccess(classroom.accessType)}</span>
                  {classroom.category && (
                    <span className="rounded-full bg-purple-50 px-2 py-1 text-purple-700">{classroom.category}</span>
                  )}
                  {classroom.institutionId && <span>Institución: {classroom.institutionId}</span>}
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <span>Creada por {classroom.createdBy}</span>
                  <span>{new Date(classroom.updatedAt).toLocaleDateString()}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
