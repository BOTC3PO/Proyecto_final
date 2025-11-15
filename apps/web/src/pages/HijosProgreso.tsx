import { useMemo, useState, type ChangeEvent } from "react";

type Child = {
  id: string;
  nombre: string;
  usuario: string;
  grado: string;
  avatar?: string; // URL opcional
  progresoGeneral: number; // 0..100
  modulos: Array<{
    id: string;
    titulo: string;
    area: "Matemática" | "Lengua" | "Ciencias" | "Historia" | "Geografía" | "Arte" | "Otro";
    progreso: number; // 0..100
    estado: "En curso" | "Completado" | "Bloqueado";
    ultimaActividad: string; // fecha corta
  }>;
};

const MOCK: Child[] = [
  {
    id: "c1",
    nombre: "Ana García",
    usuario: "@anita",
    grado: "3° Primaria",
    progresoGeneral: 76,
    modulos: [
      { id: "m1", titulo: "Sumas Básicas", area: "Matemática", progreso: 100, estado: "Completado", ultimaActividad: "12/11/2025" },
      { id: "m2", titulo: "Sumas Avanzadas", area: "Matemática", progreso: 55, estado: "En curso", ultimaActividad: "14/11/2025" },
      { id: "m3", titulo: "Lectura Comprensiva I", area: "Lengua", progreso: 30, estado: "En curso", ultimaActividad: "10/11/2025" },
    ],
  },
  {
    id: "c2",
    nombre: "Carlos Ruiz",
    usuario: "@carlitos",
    grado: "1° Secundaria",
    progresoGeneral: 42,
    modulos: [
      { id: "m4", titulo: "Multiplicación", area: "Matemática", progreso: 40, estado: "En curso", ultimaActividad: "09/11/2025" },
      { id: "m5", titulo: "Ciencias Naturales", area: "Ciencias", progreso: 25, estado: "En curso", ultimaActividad: "08/11/2025" },
    ],
  },
];

export default function HijosProgreso() {
  const [busqueda, setBusqueda] = useState("");
  const [area, setArea] = useState<"Todas" | "Matemática" | "Lengua" | "Ciencias" | "Historia" | "Geografía" | "Arte" | "Otro">("Todas");
  const [seleccionado, setSeleccionado] = useState<string | null>(MOCK[0]?.id ?? null);

  const hijos = useMemo(() => {
    const byName = (c: Child) =>
      c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      c.usuario.toLowerCase().includes(busqueda.toLowerCase());
    return MOCK.filter(byName);
  }, [busqueda]);

  const current = useMemo(
    () => hijos.find((h) => h.id === seleccionado) ?? hijos[0] ?? null,
    [hijos, seleccionado]
  );

  const modulosFiltrados = useMemo(() => {
    if (!current) return [];
    return current.modulos.filter((m) => area === "Todas" ? true : m.area === area);
  }, [current, area]);

  const onBuscar = (e: ChangeEvent<HTMLInputElement>) => setBusqueda(e.target.value);

  return (
    <main className="flex-1 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Título + Filtros */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-end md:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Hijos</h1>
              <p className="text-sm text-gray-600">Seguimiento del progreso por alumno/a.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Buscar por nombre o @usuario"
                value={busqueda}
                onChange={onBuscar}
                className="w-full sm:w-64 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <select
                value={area}
                onChange={(e) => setArea(e.target.value as any)}
                className="w-full sm:w-48 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {["Todas","Matemática","Lengua","Ciencias","Historia","Geografía","Arte","Otro"].map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Lista de hijos */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {hijos.map((h) => {
              const initials = h.nombre.split(" ").map(p => p[0]).slice(0,2).join("").toUpperCase();
              return (
                <button
                  key={h.id}
                  onClick={() => setSeleccionado(h.id)}
                  className={`text-left bg-gray-50 hover:bg-gray-100 rounded-xl p-4 border ${
                    seleccionado === h.id ? "border-blue-500" : "border-transparent"
                  } transition`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white grid place-content-center font-bold">
                      {initials}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-semibold">{h.nombre}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">{h.grado}</span>
                        <span className="text-xs text-gray-600">{h.usuario}</span>
                      </div>
                      <div className="mt-2 h-2 rounded bg-gray-200">
                        <div
                          style={{ width: `${h.progresoGeneral}%` }}
                          className="h-2 rounded bg-green-500"
                          aria-label={`Progreso general ${h.progresoGeneral}%`}
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-600">Progreso general: {h.progresoGeneral}%</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detalle del hijo seleccionado */}
        {current && (
          <section className="mt-6 bg-white rounded-xl shadow p-4 sm:p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white grid place-content-center font-bold">
                {current.nombre.split(" ").map(p => p[0]).slice(0,2).join("").toUpperCase()}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{current.nombre}</h2>
                <p className="text-sm text-gray-600">{current.usuario} · {current.grado}</p>
              </div>
              <div className="hidden sm:block">
                <div className="h-2 w-48 rounded bg-gray-200">
                  <div
                    style={{ width: `${current.progresoGeneral}%` }}
                    className="h-2 rounded bg-green-500"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-600 text-right">{current.progresoGeneral}% general</p>
              </div>
            </div>

            {/* Módulos */}
            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modulosFiltrados.map((m) => (
                  <div key={m.id} className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold">{m.titulo}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 text-sky-700">{m.area}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            m.estado === "Completado" ? "bg-green-100 text-green-700"
                            : m.estado === "En curso" ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-200 text-gray-700"
                          }`}>{m.estado}</span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">Última actividad: {m.ultimaActividad}</span>
                    </div>

                    <div className="mt-3 h-2 rounded bg-gray-200">
                      <div style={{ width: `${m.progreso}%` }} className="h-2 rounded bg-blue-600" />
                    </div>
                    <div className="mt-1 flex items-center justify-between text-xs text-gray-600">
                      <span>Progreso</span>
                      <span>{m.progreso}%</span>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <button className="text-sm rounded-md border px-3 py-1 hover:bg-white">Ver detalles</button>
                      <button className="text-sm rounded-md border px-3 py-1 hover:bg-white">Abrir módulo</button>
                      <button className="text-sm rounded-md border px-3 py-1 hover:bg-white">Informe</button>
                    </div>
                  </div>
                ))}
              </div>

              {modulosFiltrados.length === 0 && (
                <p className="text-sm text-gray-600 mt-4">No hay módulos para el filtro seleccionado.</p>
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
