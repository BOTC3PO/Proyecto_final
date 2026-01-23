import { useEffect, useMemo, useState } from "react";
import { FileDown, Filter } from "lucide-react";
import {
  exportProfesorEstadisticas,
  getProfesorEstadisticas,
  getProfesorEstadisticasOptions,
  type ProfesorEstadisticasFilters,
  type ProfesorEstadisticasOptions,
  type ProfesorEstadisticasResponse
} from "../services/estadisticas.service";

const filtrosIniciales: ProfesorEstadisticasFilters = {
  fechaInicio: "",
  fechaFin: "",
  moduloId: "",
  categoria: "",
  cohorte: ""
};

const estadisticasBase: ProfesorEstadisticasResponse = {
  general: {
    completadas: 0,
    entregas: 0,
    tiempoPromedioMin: 0,
    progresoPorModulo: []
  },
  rendimiento: {
    notasPorActividad: [],
    notasPorTema: []
  },
  participacion: {
    accesos: 0,
    foros: 0,
    encuestas: 0,
    actividadSemanal: []
  }
};

export default function ProfesorEstadisticas() {
  const [filtros, setFiltros] = useState<ProfesorEstadisticasFilters>(filtrosIniciales);
  const [estadisticas, setEstadisticas] = useState<ProfesorEstadisticasResponse>(estadisticasBase);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [options, setOptions] = useState<ProfesorEstadisticasOptions>({
    modulos: [],
    categorias: [],
    cohortes: []
  });
  const [optionsError, setOptionsError] = useState<string | null>(null);

  const filtrosActivos = useMemo(() => {
    return Object.values(filtros).some((value) => value && value.trim() !== "");
  }, [filtros]);

  useEffect(() => {
    let mounted = true;
    const cargar = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getProfesorEstadisticas(filtros);
        if (mounted) setEstadisticas(data);
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : "No se pudieron cargar las estadísticas.");
          setEstadisticas(estadisticasBase);
        }
      } finally {
        if (mounted) setIsLoading(false);
      }
    };
    void cargar();
    return () => {
      mounted = false;
    };
  }, [filtros]);

  useEffect(() => {
    let mounted = true;
    getProfesorEstadisticasOptions()
      .then((data) => {
        if (!mounted) return;
        setOptions(data);
        setOptionsError(null);
      })
      .catch((err) => {
        if (!mounted) return;
        setOptionsError(err instanceof Error ? err.message : "No se pudieron cargar los filtros.");
      });
    return () => {
      mounted = false;
    };
  }, []);

  const handleExport = async (format: "pdf" | "excel") => {
    try {
      const blob = await exportProfesorEstadisticas(filtros, format);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `estadisticas-profesor.${format === "excel" ? "csv" : "pdf"}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo exportar el reporte.");
    }
  };

  const progresoChart = estadisticas.general.progresoPorModulo;
  const notasActividad = estadisticas.rendimiento.notasPorActividad;
  const notasTema = estadisticas.rendimiento.notasPorTema;
  const actividadSemanal = estadisticas.participacion.actividadSemanal;

  const maxInteracciones = Math.max(...actividadSemanal.map((item) => item.interacciones), 1);

  return (
    <main className="p-6 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Estadísticas</h1>
          <p className="text-gray-600">Consulta indicadores y desempeño de tus cursos.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-gray-300"
            type="button"
            onClick={() => handleExport("pdf")}
          >
            <FileDown className="h-4 w-4" />
            Exportar PDF
          </button>
          <button
            className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-gray-300"
            type="button"
            onClick={() => handleExport("excel")}
          >
            <FileDown className="h-4 w-4" />
            Exportar Excel
          </button>
        </div>
      </header>

      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
          <Filter className="h-4 w-4" />
          Filtros
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <label className="flex flex-col gap-2 text-sm text-gray-600">
            Fecha inicio
            <input
              className="rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700"
              type="date"
              value={filtros.fechaInicio}
              onChange={(event) => setFiltros((prev) => ({ ...prev, fechaInicio: event.target.value }))}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-gray-600">
            Fecha fin
            <input
              className="rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700"
              type="date"
              value={filtros.fechaFin}
              onChange={(event) => setFiltros((prev) => ({ ...prev, fechaFin: event.target.value }))}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-gray-600">
            Módulo
            <select
              className="rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700"
              value={filtros.moduloId}
              onChange={(event) => setFiltros((prev) => ({ ...prev, moduloId: event.target.value }))}
            >
              <option value="">Todos</option>
              {options.modulos.map((modulo) => (
                <option key={modulo.value} value={modulo.value}>
                  {modulo.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-gray-600">
            Categoría
            <select
              className="rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700"
              value={filtros.categoria}
              onChange={(event) => setFiltros((prev) => ({ ...prev, categoria: event.target.value }))}
            >
              <option value="">Todas</option>
              {options.categorias.map((categoria) => (
                <option key={categoria.value} value={categoria.value}>
                  {categoria.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-gray-600">
            Cohorte
            <select
              className="rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700"
              value={filtros.cohorte}
              onChange={(event) => setFiltros((prev) => ({ ...prev, cohorte: event.target.value }))}
            >
              <option value="">Todas</option>
              {options.cohortes.map((cohorte) => (
                <option key={cohorte.value} value={cohorte.value}>
                  {cohorte.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>{filtrosActivos ? "Filtros aplicados" : "Sin filtros aplicados"}</span>
          {isLoading ? <span className="animate-pulse">Actualizando métricas...</span> : null}
        </div>
        {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
        {optionsError ? <p className="mt-3 text-sm text-red-600">{optionsError}</p> : null}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-gray-500">Actividades completadas</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{estadisticas.general.completadas}</p>
          <p className="mt-2 text-xs text-gray-500">Tasa global de módulos finalizados.</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-gray-500">Entregas registradas</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{estadisticas.general.entregas}</p>
          <p className="mt-2 text-xs text-gray-500">Incluye evaluaciones y proyectos.</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-gray-500">Tiempo promedio</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">
            {estadisticas.general.tiempoPromedioMin} min
          </p>
          <p className="mt-2 text-xs text-gray-500">Promedio por módulo completado.</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Progreso general</h2>
            <span className="text-xs text-gray-500">Completadas vs pendientes</span>
          </div>
          <div className="mt-4 space-y-4">
            {progresoChart.length === 0 && (
              <p className="text-sm text-gray-500">Sin datos de progreso para el rango seleccionado.</p>
            )}
            {progresoChart.map((item) => {
              const total = item.completadas + item.pendientes || 1;
              const completedPct = Math.round((item.completadas / total) * 100);
              return (
                <div key={item.moduloId}>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{item.moduloId}</span>
                    <span>{completedPct}% completado</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: `${completedPct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700">Detalle por módulo</h3>
            <table className="mt-3 w-full text-left text-sm text-gray-600">
              <thead className="text-xs uppercase text-gray-400">
                <tr>
                  <th className="py-2">Módulo</th>
                  <th className="py-2">Completadas</th>
                  <th className="py-2">Pendientes</th>
                </tr>
              </thead>
              <tbody>
                {progresoChart.length === 0 && (
                  <tr className="border-t border-gray-100">
                    <td className="py-3 text-center text-sm text-gray-500" colSpan={3}>
                      Sin datos disponibles.
                    </td>
                  </tr>
                )}
                {progresoChart.map((item) => (
                  <tr key={`table-${item.moduloId}`} className="border-t border-gray-100">
                    <td className="py-2 font-medium text-gray-700">{item.moduloId}</td>
                    <td className="py-2">{item.completadas}</td>
                    <td className="py-2">{item.pendientes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Rendimiento académico</h2>
            <span className="text-xs text-gray-500">Promedios por actividad</span>
          </div>
          <div className="mt-4 space-y-3">
            {notasActividad.length === 0 && (
              <p className="text-sm text-gray-500">Sin registros de rendimiento.</p>
            )}
            {notasActividad.map((actividad) => {
              const pct = Math.min(Math.round(actividad.promedio), 100);
              return (
                <div key={actividad.actividad}>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{actividad.actividad}</span>
                    <span>{actividad.promedio}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full rounded-full bg-indigo-500" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    Máx {actividad.max} · Mín {actividad.min}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700">Promedio por tema</h3>
            <table className="mt-3 w-full text-left text-sm text-gray-600">
              <thead className="text-xs uppercase text-gray-400">
                <tr>
                  <th className="py-2">Tema</th>
                  <th className="py-2">Promedio</th>
                </tr>
              </thead>
              <tbody>
                {notasTema.length === 0 && (
                  <tr className="border-t border-gray-100">
                    <td className="py-3 text-center text-sm text-gray-500" colSpan={2}>
                      Sin datos de temas.
                    </td>
                  </tr>
                )}
                {notasTema.map((tema) => (
                  <tr key={tema.tema} className="border-t border-gray-100">
                    <td className="py-2 font-medium text-gray-700">{tema.tema}</td>
                    <td className="py-2">{tema.promedio}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Participación</h2>
          <span className="text-xs text-gray-500">Actividad de la comunidad</span>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
            <p className="text-xs text-gray-500">Accesos</p>
            <p className="mt-2 text-2xl font-semibold text-gray-900">{estadisticas.participacion.accesos}</p>
          </div>
          <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
            <p className="text-xs text-gray-500">Foros</p>
            <p className="mt-2 text-2xl font-semibold text-gray-900">{estadisticas.participacion.foros}</p>
          </div>
          <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
            <p className="text-xs text-gray-500">Encuestas</p>
            <p className="mt-2 text-2xl font-semibold text-gray-900">{estadisticas.participacion.encuestas}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-700">Interacciones semanales</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-4">
            {actividadSemanal.length === 0 && (
              <p className="text-sm text-gray-500">Sin datos de interacción semanal.</p>
            )}
            {actividadSemanal.map((item) => {
              const height = Math.round((item.interacciones / maxInteracciones) * 100);
              return (
                <div key={item.semana} className="flex flex-col items-center gap-2">
                  <div className="flex h-28 w-full items-end rounded-lg bg-gray-50 px-3 py-2">
                    <div
                      className="w-full rounded-md bg-rose-400"
                      style={{ height: `${height}%` }}
                      title={`${item.interacciones} interacciones`}
                    />
                  </div>
                  <span className="text-xs text-gray-500">{item.semana}</span>
                  <span className="text-xs font-semibold text-gray-700">{item.interacciones}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
