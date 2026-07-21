/**
 * Listado "Mis plantillas" + tab "Biblioteca".
 *
 * Reusable: la prop `mode` decide qué owner filtrar. Las tabs son links
 * a las dos rutas /plantillas y /plantillas/biblioteca.
 */

import { useCallback, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  clonarPlantilla,
  deletePlantilla,
  forkPlantilla,
  listPlantillas,
} from "../domain/vblang/plantillaApi";
import { useI18n } from "../i18n/I18nContext";
import type {
  PlantillaListItem,
  PlantillaListParams,
} from "../domain/vblang/plantilla.types";

export type PlantillasIndexMode = "mias" | "biblioteca";

interface PlantillasIndexProps {
  mode?: PlantillasIndexMode;
}

const VISIBILITY_BADGE: Record<string, string> = {
  privada: "bg-slate-100 text-slate-700",
  escuela: "bg-blue-100 text-blue-700",
  publica: "bg-emerald-100 text-emerald-700",
};

const VISIBILITY_LABEL_KEY: Record<string, string> = {
  privada: "comun.privada",
  escuela: "sidebar.escuela",
  publica: "comun.publica",
};

function PlantillaCard({
  item,
  mode,
  onDelete,
  onFork,
  onClonar,
}: {
  item: PlantillaListItem;
  mode: PlantillasIndexMode;
  onDelete: (id: string) => void;
  onFork: (id: string) => void;
  onClonar: (id: string) => void;
}) {
  const { t, lang } = useI18n();
  const updated = new Date(item.updatedAt);
  return (
    <article className="rounded-xl border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] p-4 shadow-sm hover:shadow transition-shadow">
      <header className="flex items-start justify-between gap-3">
        <Link
          to={`/plantillas/${item.id}`}
          className="flex-1 min-w-0 group"
          data-testid="plantilla-card-link"
        >
          <h3 className="font-semibold text-sm truncate group-hover:text-[var(--c-primary,#3b82f6)]">
            {item.nombre}
          </h3>
          {item.materia && (
            <p className="text-xs text-[var(--c-muted,#64748b)]">{item.materia}</p>
          )}
        </Link>
        <div className="flex shrink-0 flex-col items-end gap-1">
          {item.esOficial && (
            <span
              className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700"
              data-testid="plantilla-oficial-badge"
            >
              {t("plantillasIndex.oficial")}
            </span>
          )}
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
              VISIBILITY_BADGE[item.visibility] ?? "bg-slate-100 text-slate-700"
            }`}
          >
            {VISIBILITY_LABEL_KEY[item.visibility] ? t(VISIBILITY_LABEL_KEY[item.visibility]) : item.visibility}
          </span>
        </div>
      </header>
      {item.descripcion && (
        <p className="mt-2 text-xs text-[var(--c-muted,#64748b)] line-clamp-2">
          {item.descripcion}
        </p>
      )}
      {item.tags && item.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {item.tags.map((tag) => (
            // FIX-TEST4-X-03 — antes `bg-slate-100 text-slate-600`
            // (hardcoded). Ahora tokens del tema.
            <span
              key={tag}
              className="rounded-full bg-[var(--c-bg)] px-2 py-0.5 text-[10px] text-[var(--c-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <footer className="mt-3 flex items-center justify-between text-[10px] text-[var(--c-muted,#64748b)]">
        <span>{t("plantillasIndex.actualizada")} {updated.toLocaleDateString(lang)}</span>
        <div className="flex gap-2">
          {mode === "biblioteca" ? (
            item.esOficial ? (
              <button
                type="button"
                onClick={() => onClonar(item.id)}
                className="rounded-md bg-[var(--c-primary,#3b82f6)] px-2 py-1 text-[10px] font-medium text-white hover:opacity-90"
                data-testid="plantilla-usar-como-base"
              >
                {t("plantillasIndex.usarComoBase")}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onFork(item.id)}
                className="rounded-md bg-[var(--c-primary,#3b82f6)] px-2 py-1 text-[10px] font-medium text-white hover:opacity-90"
              >
                {t("plantillasIndex.fork")}
              </button>
            )
          ) : (
            <button
              type="button"
              onClick={() => {
                if (window.confirm(`${t("plantillasIndex.eliminarPlantilla")} "${item.nombre}"?`)) {
                  onDelete(item.id);
                }
              }}
              className="rounded-md border border-red-200 px-2 py-1 text-[10px] font-medium text-red-700 hover:bg-red-50"
            >
              {t("comun.eliminar")}
            </button>
          )}
        </div>
      </footer>
    </article>
  );
}

export default function PlantillasIndex({ mode = "mias" }: PlantillasIndexProps) {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [items, setItems] = useState<PlantillaListItem[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [materia, setMateria] = useState("");
  const [visibilityFilter, setVisibilityFilter] =
    useState<PlantillaListParams["visibility"]>("todas");

  const load = useCallback(() => {
    setStatus("loading");
    setErrorMessage(null);
    listPlantillas({
      q: q || undefined,
      materia: materia || undefined,
      visibility: visibilityFilter,
      owner: mode === "biblioteca" ? "otros" : "mias",
    })
      .then((res) => {
        setItems(res.items);
        setStatus("ready");
      })
      .catch((err) => {
        setStatus("error");
        setErrorMessage(err instanceof Error ? err.message : t("comun.errorDeCarga"));
      });
  }, [q, materia, visibilityFilter, mode]);

  useEffect(() => {
    load();
  }, [load]);

  const handleDelete = async (id: string) => {
    try {
      await deletePlantilla(id);
      load();
    } catch (err) {
      window.alert(
        err instanceof Error ? err.message : t("plantillasIndex.noSePudoEliminarLa"),
      );
    }
  };

  const handleFork = async (id: string) => {
    try {
      const created = await forkPlantilla(id);
      navigate(`/plantillas/${created.id}`);
    } catch (err) {
      window.alert(
        err instanceof Error ? err.message : t("plantillasIndex.noSePudoHacerFork"),
      );
    }
  };

  // F6-01 — "Usar como base": clona una oficial a una copia editable propia y
  // abre el editor sobre la copia (la original queda intacta).
  const handleClonar = async (id: string) => {
    try {
      const created = await clonarPlantilla(id);
      navigate(`/plantillas/${created.id}`);
    } catch (err) {
      window.alert(
        err instanceof Error ? err.message : t("plantillasIndex.noSePudoClonarLa"),
      );
    }
  };

  return (
    <main className="min-h-screen bg-[var(--c-bg,#f8fafc)] p-6" data-testid="plantillas-index">
      <div className="mx-auto max-w-6xl space-y-4">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-bold">{t("plantillasIndex.plantillasVblang")}</h1>
          <Link
            to="/plantillas/nueva"
            className="rounded-md bg-[var(--c-primary,#3b82f6)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >{t("plantillasIndex.nuevaPlantilla")}</Link>
        </header>

        <nav className="flex gap-2 border-b border-[var(--c-border,#e2e8f0)]">
          <NavLink
            to="/plantillas"
            end
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium ${
                isActive
                  ? "border-b-2 border-[var(--c-primary,#3b82f6)] text-[var(--c-primary,#3b82f6)]"
                  : "text-[var(--c-muted,#64748b)]"
              }`
            }
          >{t("plantillasIndex.misPlantillas")}</NavLink>
          <NavLink
            to="/plantillas/biblioteca"
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium ${
                isActive
                  ? "border-b-2 border-[var(--c-primary,#3b82f6)] text-[var(--c-primary,#3b82f6)]"
                  : "text-[var(--c-muted,#64748b)]"
              }`
            }
          >{t("plantillasIndex.biblioteca")}</NavLink>
        </nav>

        <section className="flex flex-wrap gap-2">
          <input
            type="search"
            placeholder={t("plantillasIndex.buscar")}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="flex-1 min-w-[12rem] rounded-md border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-3 py-1.5 text-sm"
          />
          <input
            type="text"
            placeholder={t("comun.materia")}
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            className="w-40 rounded-md border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-3 py-1.5 text-sm"
          />
          <select
            value={visibilityFilter}
            onChange={(e) =>
              setVisibilityFilter(
                e.target.value as PlantillaListParams["visibility"],
              )
            }
            className="rounded-md border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-3 py-1.5 text-sm"
          >
            <option value="todas">{t("comun.todas")}</option>
            <option value="privadas">{t("plantillasIndex.privadas")}</option>
            <option value="escuela">{t("sidebar.escuela")}</option>
            <option value="publicas">{t("plantillasIndex.publicas")}</option>
          </select>
        </section>

        {status === "loading" && (
          <p className="text-sm text-[var(--c-muted,#64748b)] animate-pulse">{t("comun.cargando")}</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600">{errorMessage}</p>
        )}
        {status === "ready" && items.length === 0 && (
          <div className="rounded-xl border-2 border-dashed border-[var(--c-border,#e2e8f0)] py-10 text-center">
            <p className="text-sm text-[var(--c-muted,#64748b)]">
              {mode === "biblioteca"
                ? t("plantillasIndex.noHayPlantillasEnLa")
                : t("plantillasIndex.todaviaNoCreastePlantillas")}
            </p>
            {mode === "mias" && (
              <Link
                to="/plantillas/nueva"
                className="mt-3 inline-block text-sm text-[var(--c-primary,#3b82f6)] hover:underline"
              >{t("plantillasIndex.crearLaPrimeraPlantilla")}</Link>
            )}
          </div>
        )}
        {status === "ready" && items.length > 0 && (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it) => (
              <PlantillaCard
                key={it.id}
                item={it}
                mode={mode}
                onDelete={handleDelete}
                onFork={handleFork}
                onClonar={handleClonar}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
