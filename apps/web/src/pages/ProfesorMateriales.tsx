import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import { apiGet, apiPost, getAuthToken } from '../lib/api';

type MaterialItem = {
  id: string;
  titulo: string;
  materia: string;
  tipo: 'cuestionario' | 'documento' | 'otro';
  autor: string;
  escuelaId: string | null;
  compartido: boolean;
  createdAt: string;
  questions?: number;
};

export default function ProfesorMateriales() {
  const { user } = useAuth();
  const [items, setItems] = useState<MaterialItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<'propios' | 'escuela'>('escuela');
  const [msg, setMsg] = useState<string | null>(null);

  const fetchItems = () => {
    setLoading(true);
    apiGet<{ items: MaterialItem[] }>('/api/materiales')
      .then((data) => setItems(data.items ?? []))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchItems(); }, []);

  const handleCompartir = async (id: string) => {
    try {
      await apiPost(`/api/materiales/${id}/compartir`, {});
      setMsg('✓ Material compartido con la escuela.');
      fetchItems();
    } catch {
      setMsg('Error al compartir.');
    }
  };

  // Q7 — la descarga se hace via fetch autenticado + blob. Un <a href download>
  // no lleva el header Authorization → 401. El back setea Content-Disposition
  // con el filename sanitizado, pero el front igual lee la respuesta y la
  // ofrece como blob para tener control del nombre de archivo.
  const handleDescargar = async (item: MaterialItem) => {
    try {
      const token = getAuthToken();
      const response = await fetch(`/api/materiales/${item.id}/download`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      if (!response.ok) {
        setMsg('Error al descargar el material.');
        return;
      }
      const blob = await response.blob();
      const cd = response.headers.get("Content-Disposition") ?? "";
      const match = /filename="?([^";]+)"?/.exec(cd);
      const filename = match?.[1] ?? `${item.titulo}.json`;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setMsg('Error al descargar el material.');
    }
  };

  const propios = items.filter((i) => i.autor === user?.id || i.autor === (user as { name?: string })?.name);
  const escuela = items.filter((i) => i.compartido);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-xl font-semibold text-[var(--c-text)]">Material didáctico</h1>
          <p className="text-sm text-[var(--c-muted)] mt-0.5">
            Cuestionarios y materiales compartidos entre docentes de tu institución.
          </p>
        </div>
        <Link
          to="/profesor/editor-cuestionarios?returnTo=/profesor/materiales"
          className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          + Crear cuestionario
        </Link>
      </div>

      {msg && (
        <p className={`text-sm ${msg.startsWith('✓') ? 'text-[var(--c-success)]' : 'text-[var(--c-danger)]'}`}>
          {msg}
        </p>
      )}

      {/* Tabs */}
      <div className="flex gap-1 border-b border-[var(--c-border)]">
        {([
          { key: 'escuela', label: 'De la escuela' },
          { key: 'propios', label: 'Mis materiales' },
        ] as const).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              tab === key
                ? 'border-[var(--c-primary)] text-[var(--c-primary)]'
                : 'border-transparent text-[var(--c-muted)] hover:text-[var(--c-text)]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Lista */}
      {loading && (
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 rounded-xl animate-pulse bg-[var(--c-border)]" />
          ))}
        </div>
      )}

      {!loading && (tab === 'escuela' ? escuela : propios).length === 0 && (
        <div className="rounded-xl border border-dashed border-[var(--c-border)] p-10 text-center">
          <p className="text-sm text-[var(--c-muted)]">
            {tab === 'escuela'
              ? 'Todavía no hay materiales compartidos en tu escuela.'
              : 'No tenés materiales propios. Creá un cuestionario para empezar.'}
          </p>
        </div>
      )}

      {!loading &&
        (tab === 'escuela' ? escuela : propios).map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4 flex items-center justify-between gap-4"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[var(--c-text)] truncate">{item.titulo}</p>
              <p className="text-xs text-[var(--c-muted)] mt-0.5">
                {item.materia} · {item.autor}
                {item.questions ? ` · ${item.questions} preguntas` : ''}
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              {tab === 'propios' && !item.compartido && (
                <button
                  onClick={() => handleCompartir(item.id)}
                  className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
                >
                  Compartir
                </button>
              )}
              <button
                type="button"
                onClick={() => handleDescargar(item)}
                className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
              >
                ↓ Descargar
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
