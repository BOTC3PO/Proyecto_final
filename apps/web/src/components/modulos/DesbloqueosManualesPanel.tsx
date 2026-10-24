/**
 * "Niveles por aula con mapa de flujo" — desbloqueo manual: el docente
 * dueño del módulo puede saltear el candado por dependencias para un
 * alumno puntual o para toda un aula. Gana sobre el candado — las
 * dependencias siguen configuradas, sólo dejan de aplicar para quien
 * tiene el override activo (ver api/src/lib/module-unlock-overrides.ts).
 *
 * Sólo se monta con el módulo ya guardado (necesita un `moduloId` real).
 */
import { useEffect, useState } from "react";
import {
  fetchModuloDesbloqueos,
  crearModuloDesbloqueo,
  eliminarModuloDesbloqueo,
  type ModuloDesbloqueoItem,
} from "../../services/modulo-desbloqueos";
import { fetchClassrooms } from "../../services/aulas";
import { fetchAulaMatriz, type AulaMatrizAlumno } from "../../services/progreso-aula";
import type { Classroom } from "../../domain/classroom/classroom.types";
import { useI18n } from "../../i18n/I18nContext";

type Modo = "aula" | "alumno";

export default function DesbloqueosManualesPanel({ moduloId }: { moduloId: string }) {
  const { t } = useI18n();
  const [items, setItems] = useState<ModuloDesbloqueoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [aulas, setAulas] = useState<Classroom[]>([]);
  const [modo, setModo] = useState<Modo>("aula");
  const [selectedAula, setSelectedAula] = useState("");
  const [alumnos, setAlumnos] = useState<AulaMatrizAlumno[]>([]);
  const [selectedAlumno, setSelectedAlumno] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reload = () => {
    setLoading(true);
    fetchModuloDesbloqueos(moduloId)
      .then(setItems)
      .catch(() => setError(t("desbloqueosManuales.noSePudieronCargar")))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    reload();
    fetchClassrooms()
      .then((data) => setAulas(data.items))
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduloId]);

  useEffect(() => {
    if (modo !== "alumno" || !selectedAula) {
      setAlumnos([]);
      return;
    }
    fetchAulaMatriz(selectedAula)
      .then((data) => setAlumnos(data.alumnos))
      .catch(() => setAlumnos([]));
  }, [modo, selectedAula]);

  const handleAgregar = async () => {
    setSaving(true);
    setError(null);
    try {
      if (modo === "aula") {
        if (!selectedAula) return;
        await crearModuloDesbloqueo(moduloId, { aulaId: selectedAula });
      } else {
        if (!selectedAlumno) return;
        await crearModuloDesbloqueo(moduloId, { usuarioId: selectedAlumno });
      }
      setSelectedAula("");
      setSelectedAlumno("");
      reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : t("desbloqueosManuales.noSePudoAgregar"));
    } finally {
      setSaving(false);
    }
  };

  const handleQuitar = async (desbloqueoId: string) => {
    try {
      await eliminarModuloDesbloqueo(moduloId, desbloqueoId);
      setItems((prev) => prev.filter((i) => i.id !== desbloqueoId));
    } catch (err) {
      setError(err instanceof Error ? err.message : t("desbloqueosManuales.noSePudoQuitar"));
    }
  };

  return (
    <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg)] p-4 space-y-3">
      <div>
        <p className="text-sm font-semibold text-[var(--c-text)]">{t("desbloqueosManuales.titulo")}</p>
        <p className="text-xs text-[var(--c-muted)] mt-0.5">{t("desbloqueosManuales.ayuda")}</p>
      </div>

      {loading ? (
        <p className="text-xs text-[var(--c-muted)] animate-pulse">{t("comun.cargando")}</p>
      ) : items.length === 0 ? (
        <p className="text-xs text-[var(--c-muted)]">{t("desbloqueosManuales.sinDesbloqueos")}</p>
      ) : (
        <ul className="space-y-1.5">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-2 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-2 text-xs"
            >
              <span className="text-[var(--c-text)]">
                {item.aulaId ? `🏫 ${item.aulaNombre ?? item.aulaId}` : `👤 ${item.usuarioNombre ?? item.usuarioId}`}
              </span>
              <button
                type="button"
                className="text-[var(--c-danger)] hover:underline"
                onClick={() => handleQuitar(item.id)}
                data-testid={`desbloqueo-quitar-${item.id}`}
              >
                {t("comun.quitar")}
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <select
          className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-2.5 py-1.5 text-xs focus:border-[var(--c-primary)] focus:outline-none"
          value={modo}
          onChange={(e) => setModo(e.target.value as Modo)}
        >
          <option value="aula">{t("desbloqueosManuales.todaElAula")}</option>
          <option value="alumno">{t("desbloqueosManuales.unAlumno")}</option>
        </select>
        <select
          className="min-w-[10rem] rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-2.5 py-1.5 text-xs focus:border-[var(--c-primary)] focus:outline-none"
          value={selectedAula}
          onChange={(e) => setSelectedAula(e.target.value)}
          aria-label={t("desbloqueosManuales.elegirAula")}
        >
          <option value="">{t("desbloqueosManuales.elegirAula")}</option>
          {aulas.map((a) => (
            <option key={a.id} value={a.id}>{a.name}</option>
          ))}
        </select>
        {modo === "alumno" && (
          <select
            className="min-w-[10rem] rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-2.5 py-1.5 text-xs focus:border-[var(--c-primary)] focus:outline-none"
            value={selectedAlumno}
            onChange={(e) => setSelectedAlumno(e.target.value)}
            disabled={!selectedAula}
            aria-label={t("desbloqueosManuales.elegirAlumno")}
          >
            <option value="">{t("desbloqueosManuales.elegirAlumno")}</option>
            {alumnos.map((a) => (
              <option key={a.id} value={a.id}>{a.name}</option>
            ))}
          </select>
        )}
        <button
          type="button"
          className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-[var(--c-text-on-dark)] hover:opacity-90 disabled:opacity-50 transition-opacity"
          onClick={() => void handleAgregar()}
          disabled={saving || (modo === "aula" ? !selectedAula : !selectedAlumno)}
          data-testid="desbloqueo-agregar"
        >
          {saving ? t("desbloqueosManuales.agregando") : t("desbloqueosManuales.agregar")}
        </button>
      </div>
      {error && <p className="text-xs text-[var(--c-danger)]">{error}</p>}
    </div>
  );
}
