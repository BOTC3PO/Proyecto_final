/**
 * FIX-BUG-ROLE-01 — UI para listar y gestionar `Page` (TuesdayJS
 * docs). El endpoint ya existía (`GET /api/pages`, `GET /api/pages/:id`,
 * `POST /api/pages`) pero no había página admin. Esto permite
 * al admin ver los TuesdayJS docs que se usan en módulos y
 * cuestionarios.
 *
 * Acceso: solo ADMIN (similar a otros paneles de admin).
 */
import { useEffect, useState } from "react";
import { apiGet } from "../../lib/api";

type PageItem = {
  id: string;
  title: string | null;
  createdAt: string;
};

type PagesResponse = {
  items: PageItem[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};

export default function AdminPages() {
  const [items, setItems] = useState<PageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selected, setSelected] = useState<PageItem | null>(null);
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [loadingDoc, setLoadingDoc] = useState(false);

  const load = (search: string, p: number) => {
    setLoading(true);
    setError(null);
    const params = new URLSearchParams();
    if (search) params.set("q", search);
    params.set("page", String(p));
    params.set("pageSize", "20");
    apiGet<PagesResponse>(`/api/pages?${params.toString()}`)
      .then((data) => {
        setItems(data.items ?? []);
        setTotalPages(data.totalPages ?? 1);
        setPage(data.page ?? 1);
      })
      .catch(() => setError("No se pudieron cargar las páginas."))
      .finally(() => setLoading(false));
  };

  useEffect(() => { load("", 1); }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    load(q, 1);
  };

  const handleSelect = (p: PageItem) => {
    setSelected(p);
    setSelectedDoc(null);
    setLoadingDoc(true);
    apiGet<{ id: string; title: string | null; content: string }>(`/api/pages/${encodeURIComponent(p.id)}`)
      .then((data) => {
        setSelectedDoc(typeof data.content === "string" ? data.content : JSON.stringify(data.content, null, 2));
      })
      .catch(() => setSelectedDoc("(no se pudo cargar el contenido)"))
      .finally(() => setLoadingDoc(false));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-xl font-semibold text-[var(--c-text)]">Páginas (TuesdayJS)</h1>
          <p className="text-sm text-[var(--c-muted)] mt-0.5">
            Documentos TuesdayJS que se pueden referenciar desde módulos y cuestionarios.
          </p>
        </div>
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Buscar por título"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)] w-56"
          />
          <button
            type="submit"
            className="rounded-lg bg-[var(--c-primary)] px-3 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Buscar
          </button>
        </form>
      </div>

      {error && (
        <p className="text-sm text-[var(--c-danger)]">{error}</p>
      )}

      <div className="grid gap-4 lg:grid-cols-[1fr_2fr]">
        {/* Lista */}
        <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
          <div className="px-4 py-3 border-b border-[var(--c-border)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">
              Páginas
            </p>
          </div>
          <div className="divide-y divide-[var(--c-border)] max-h-[640px] overflow-y-auto">
            {loading && (
              <div className="p-4 space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-12 rounded-lg bg-[var(--c-bg)] animate-pulse" />
                ))}
              </div>
            )}
            {!loading && items.length === 0 && (
              <p className="p-4 text-sm text-[var(--c-muted)]">Sin páginas registradas.</p>
            )}
            {!loading && items.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSelect(p)}
                className={`block w-full text-left px-4 py-3 hover:bg-[var(--c-bg)] transition-colors ${
                  selected?.id === p.id ? "bg-[var(--c-bg)]" : ""
                }`}
                data-testid={`admin-pages-item-${p.id}`}
              >
                <p className="text-sm font-medium text-[var(--c-text)] truncate">
                  {p.title ?? "(sin título)"}
                </p>
                <p className="text-[10px] text-[var(--c-muted)] mt-0.5 font-mono truncate">
                  {p.id}
                </p>
                <p className="text-[10px] text-[var(--c-muted)] mt-0.5">
                  {new Date(p.createdAt).toLocaleString("es-AR")}
                </p>
              </button>
            ))}
          </div>
          {!loading && totalPages > 1 && (
            <div className="px-4 py-2 flex items-center justify-between text-xs text-[var(--c-muted)] border-t border-[var(--c-border)]">
              <button
                onClick={() => load(q, Math.max(1, page - 1))}
                disabled={page <= 1}
                className="rounded border border-[var(--c-border)] px-2 py-0.5 hover:bg-[var(--c-bg)] disabled:opacity-50"
              >
                ← Anterior
              </button>
              <span>Página {page} de {totalPages}</span>
              <button
                onClick={() => load(q, Math.min(totalPages, page + 1))}
                disabled={page >= totalPages}
                className="rounded border border-[var(--c-border)] px-2 py-0.5 hover:bg-[var(--c-bg)] disabled:opacity-50"
              >
                Siguiente →
              </button>
            </div>
          )}
        </div>

        {/* Detalle */}
        <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
          <div className="px-4 py-3 border-b border-[var(--c-border)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">
              Vista previa
            </p>
          </div>
          <div className="p-4">
            {!selected && (
              <p className="text-sm text-[var(--c-muted)]">
                Seleccioná una página de la lista para ver su contenido.
              </p>
            )}
            {selected && (
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-[var(--c-text)]">
                    {selected.title ?? "(sin título)"}
                  </p>
                  <p className="text-[10px] text-[var(--c-muted)] font-mono mt-0.5">{selected.id}</p>
                </div>
                <pre className="rounded-lg bg-[var(--c-bg)] border border-[var(--c-border)] p-3 text-[10px] text-[var(--c-text)] overflow-auto max-h-[480px] whitespace-pre-wrap break-words">
                  {loadingDoc ? "Cargando…" : (selectedDoc ?? "(vacío)")}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
