import { useState } from "react";
import type { ReporteFormato, ReporteFilters, ReporteResponse } from "../services/reportes";
import { downloadReporte, fetchReporte } from "../services/reportes";

type ReportesBaseProps = {
  rol: "profesor" | "admin";
  titulo: string;
};

const defaultFilters: ReporteFilters = {
  aula: "",
  grupo: "",
  periodo: "",
  tipoActividad: "",
  lote: false,
  loteIds: []
};

const ReportesBase = ({ rol, titulo }: ReportesBaseProps) => {
  const [filters, setFilters] = useState<ReporteFilters>(defaultFilters);
  const [data, setData] = useState<ReporteResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: keyof ReporteFilters, value: string | boolean) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const updateLoteIds = (value: string) => {
    const ids = value
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean);
    setFilters((prev) => ({
      ...prev,
      loteIds: ids
    }));
  };

  const handleFetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchReporte(rol, filters);
      setData(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo cargar el reporte.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (formato: ReporteFormato) => {
    setLoading(true);
    setError(null);
    try {
      const blob = await downloadReporte(rol, filters, formato);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `reporte-${rol}-${filters.periodo || "actual"}.${formato === "pdf" ? "pdf" : "xlsx"}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo descargar el reporte.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">{titulo}</h1>
        <p className="text-sm text-slate-500">
          Configura filtros (aula, grupo, periodo y tipo de actividad) y genera reportes en PDF o Excel.
        </p>
      </div>

      <section className="bg-white shadow-sm rounded-lg p-6 space-y-4">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <label className="flex flex-col gap-1 text-sm">
            Aula
            <input
              className="border rounded px-3 py-2"
              value={filters.aula}
              onChange={(event) => updateField("aula", event.target.value)}
              placeholder="Ej: 5A"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Grupo
            <input
              className="border rounded px-3 py-2"
              value={filters.grupo}
              onChange={(event) => updateField("grupo", event.target.value)}
              placeholder="Ej: Grupo 2"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Periodo
            <input
              className="border rounded px-3 py-2"
              value={filters.periodo}
              onChange={(event) => updateField("periodo", event.target.value)}
              placeholder="Ej: 2024-2"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Tipo de actividad
            <input
              className="border rounded px-3 py-2"
              value={filters.tipoActividad}
              onChange={(event) => updateField("tipoActividad", event.target.value)}
              placeholder="Ej: Lectura"
            />
          </label>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={Boolean(filters.lote)}
              onChange={(event) => updateField("lote", event.target.checked)}
            />
            Generar por lotes
          </label>
          <input
            className="border rounded px-3 py-2 flex-1"
            value={filters.loteIds?.join(", ") || ""}
            onChange={(event) => updateLoteIds(event.target.value)}
            placeholder="IDs de lote (separados por coma)"
            disabled={!filters.lote}
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            className="bg-slate-900 text-white px-4 py-2 rounded disabled:opacity-60"
            onClick={handleFetch}
            disabled={loading}
          >
            Consultar
          </button>
          <button
            className="border border-slate-200 px-4 py-2 rounded disabled:opacity-60"
            onClick={() => handleDownload("pdf")}
            disabled={loading}
          >
            Descargar PDF
          </button>
          <button
            className="border border-slate-200 px-4 py-2 rounded disabled:opacity-60"
            onClick={() => handleDownload("excel")}
            disabled={loading}
          >
            Descargar Excel
          </button>
        </div>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </section>

      <section className="bg-white shadow-sm rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-800">Vista previa</h2>
        {!data && <p className="text-sm text-slate-500">Ejecuta una consulta para ver resultados.</p>}
        {data && (
          <div className="space-y-4 text-sm text-slate-700">
            <div className="space-y-1">
              <p className="font-medium">Encabezado</p>
              <p>{data.configuracion.encabezado.titulo}</p>
              <p>{data.configuracion.encabezado.subtitulo}</p>
              <p className="text-slate-500">{data.configuracion.encabezado.logoUrl}</p>
            </div>
            <div className="grid gap-2 md:grid-cols-3">
              <div className="border rounded p-3">
                <p className="text-xs text-slate-500">Promedio grupo</p>
                <p className="text-lg font-semibold">{data.comparativo.promedioGrupo}</p>
              </div>
              <div className="border rounded p-3">
                <p className="text-xs text-slate-500">Asistencia promedio</p>
                <p className="text-lg font-semibold">{(data.comparativo.asistenciaPromedio * 100).toFixed(1)}%</p>
              </div>
              <div className="border rounded p-3">
                <p className="text-xs text-slate-500">Actividades evaluadas</p>
                <p className="text-lg font-semibold">{data.comparativo.actividadesEvaluadas}</p>
              </div>
            </div>

            <div>
              <p className="font-medium">Boletines</p>
              <div className="overflow-x-auto">
                <table className="min-w-full border text-left text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="border px-3 py-2">Estudiante</th>
                      <th className="border px-3 py-2">Promedio</th>
                      <th className="border px-3 py-2">Comentarios</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.boletines.map((boletin) => (
                      <tr key={boletin.estudiante}>
                        <td className="border px-3 py-2">{boletin.estudiante}</td>
                        <td className="border px-3 py-2">{boletin.promedio}</td>
                        <td className="border px-3 py-2">{boletin.comentarios}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {data.generacionLotes && (
              <div className="border rounded p-3">
                <p className="font-medium">Generación por lotes</p>
                <p>Total de lotes: {data.generacionLotes.total}</p>
                <p>IDs: {data.generacionLotes.ids.join(", ")}</p>
              </div>
            )}

            <div className="text-xs text-slate-500">
              <p>{data.configuracion.piePagina.texto}</p>
              <p>{data.configuracion.piePagina.generadoPor}</p>
              <p>Generado en: {new Date(data.generadoEn).toLocaleString()}</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ReportesBase;
