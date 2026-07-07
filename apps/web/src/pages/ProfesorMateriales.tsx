import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import { apiGet, apiPost, getAuthToken } from '../lib/api';

type MaterialItem = {
  id: string;
  titulo: string;
  materia: string;
  // PLAN-G §1 (item 25) — además de 'cuestionario' (módulos, como antes),
  // ahora puede ser uno de los 4 tipos de "material guardado".
  tipo: 'cuestionario' | 'documento' | 'otro' | 'mapa' | 'timeline' | 'interactivo' | 'presentacion' | 'libro';
  autor: string;
  ownerUserId?: string | null;
  escuelaId: string | null;
  visibility?: 'privado' | 'escuela' | 'publico' | string;
  compartido: boolean;
  createdAt: string;
  questions?: number;
  // 'modulo' (comportamiento de siempre) | 'material' (guardado nuevo, PLAN-G §1)
  // | 'libro' (tabla `libros`, fusionada en G3 Fase 3).
  origen?: 'modulo' | 'material' | 'libro';
};

// PLAN-G §1 (item 25) — a qué ruta de editor navegar para reabrir cada
// tipo de material guardado.
const MATERIAL_EDITOR_ROUTE: Record<string, string> = {
  mapa: '/herramientas/mapa-editor',
  timeline: '/herramientas/linea-tiempo-editor',
  interactivo: '/bloques/editor',
  presentacion: '/herramientas/presentacion-editor',
};

type ShareScope = 'privado' | 'escuela' | 'publico';

const SHARE_SCOPE_OPTIONS: Array<{ value: ShareScope; label: string; helper: string }> = [
  { value: 'privado', label: 'Solo yo', helper: 'Nadie más puede verlo.' },
  { value: 'escuela', label: 'Mi escuela', helper: 'Docentes y alumnos de tu institución.' },
  { value: 'publico', label: 'Público', helper: 'Cualquier docente registrado en la plataforma.' },
];

export default function ProfesorMateriales() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [items, setItems] = useState<MaterialItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<'propios' | 'escuela'>('escuela');
  const [msg, setMsg] = useState<string | null>(null);
  const [shareDialogItem, setShareDialogItem] = useState<MaterialItem | null>(null);
  const [shareScope, setShareScope] = useState<ShareScope>('escuela');
  const [shareBusy, setShareBusy] = useState(false);

  const fetchItems = () => {
    setLoading(true);
    apiGet<{ items: MaterialItem[] }>('/api/materiales')
      .then((data) => setItems(data.items ?? []))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchItems(); }, []);

  // FIX-COMPARTIR-SCOPE — antes un solo botón "Compartir" cambiaba
  // el `visibility` a 'escuela' sin pedirle nada al docente. Ahora
  // se abre un mini-modal con tres opciones (privado / escuela /
  // público) y el body se manda al back con `scope`. La acción sigue
  // siendo explícita y reversible: el docente puede volver a "Solo
  // yo" cuando quiera.
  const openShareDialog = (item: MaterialItem) => {
    setShareDialogItem(item);
    setShareScope('escuela');
    setMsg(null);
  };
  const closeShareDialog = () => {
    setShareDialogItem(null);
    setShareBusy(false);
  };
  const handleConfirmShare = async () => {
    if (!shareDialogItem) return;
    setShareBusy(true);
    try {
      await apiPost(`/api/materiales/${shareDialogItem.id}/compartir`, {
        scope: shareScope,
      });
      const label = SHARE_SCOPE_OPTIONS.find((o) => o.value === shareScope)?.label ?? shareScope;
      setMsg(`✓ Material compartido: ${label}.`);
      closeShareDialog();
      fetchItems();
    } catch {
      setMsg('Error al compartir.');
      setShareBusy(false);
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

  // FIX-TEST4-PROF-04 — antes el filtro de "Mis materiales" comparaba
  // `i.autor === user.id`, pero ahora el back resuelve el ID a nombre
  // y devuelve `ownerUserId` por separado. Comparamos por
  // `ownerUserId` que es estable y no se rompe si el usuario cambia
  // su nombre.
  const propios = items.filter((i) => i.ownerUserId === user?.id);
  const escuela = items.filter((i) => i.compartido);

  return (
    <>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-xl font-semibold text-[var(--c-text)]">Material didáctico</h1>
          <p className="text-sm text-[var(--c-muted)] mt-0.5">
            Cuestionarios y materiales compartidos entre docentes de tu institución.
          </p>
        </div>
        <Link
          // FIX-MATERIAL-EDITOR — antes el botón "Crear cuestionario"
          // navegaba a `/profesor/editor-cuestionarios` (V1, ya
          // deprecado en favor del V2 con composición + variantes).
          // El V1 rompía el guardado, no soportaba `pool` ni
          // `displayCount` y mandaba `subject` y `theoryItems` al
          // formato viejo. Bug 3.2 del informe
          // `test-parte-3-profesor.md`. Ahora se abre el V2 con
          // `returnTo` para que el docente vuelva a la lista de
          // materiales después de armar el cuestionario.
          to="/profesor/editor-cuestionarios-v2?returnTo=/profesor/materiales&mode=manual"
          className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          + Crear cuestionario
        </Link>
        {/* G3 Fase 3.1 — el editor de libros no tenía ningún entry point. */}
        <Link
          to="/editor"
          className="rounded-xl border border-[var(--c-border)] px-4 py-2 text-sm font-semibold text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
        >
          + Crear libro
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
              {item.origen === 'material' && MATERIAL_EDITOR_ROUTE[item.tipo] && (
                <button
                  type="button"
                  onClick={() => navigate(`${MATERIAL_EDITOR_ROUTE[item.tipo]}?materialId=${item.id}`)}
                  data-testid={`abrir-${item.id}`}
                  className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
                >
                  Abrir
                </button>
              )}
              {item.origen === 'libro' && (
                <button
                  type="button"
                  onClick={() => navigate(`/editor/${item.id}`)}
                  data-testid={`abrir-${item.id}`}
                  className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
                >
                  Abrir
                </button>
              )}
              {tab === 'propios' && (!item.origen || item.origen === 'modulo') && (
                <button
                  onClick={() => openShareDialog(item)}
                  data-testid={`compartir-${item.id}`}
                  className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
                >
                  {item.compartido ? 'Cambiar alcance' : 'Compartir'}
                </button>
              )}
              {(!item.origen || item.origen === 'modulo') && (
                <button
                  type="button"
                  onClick={() => handleDescargar(item)}
                  className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                >
                  ↓ Descargar
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
    {shareDialogItem && (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="compartir-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
        onClick={closeShareDialog}
      >
        <div
          className="w-full max-w-md rounded-xl bg-[var(--c-surface)] border border-[var(--c-border)] p-5 shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <h3
            id="compartir-modal-title"
            className="text-base font-semibold text-[var(--c-text)]"
          >
            Compartir "{shareDialogItem.titulo}"
          </h3>
          <p className="mt-1 text-xs text-[var(--c-muted)]">
            Elegí con quién querés compartir este material. Podés cambiar el
            alcance más tarde.
          </p>
          <div className="mt-4 space-y-2" data-testid="compartir-scope-group">
            {SHARE_SCOPE_OPTIONS.map((opt) => {
              const isSelected = shareScope === opt.value;
              return (
                <label
                  key={opt.value}
                  className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
                    isSelected
                      ? 'border-[var(--c-primary)] bg-[var(--c-primary-soft,#dbeafe)]/40'
                      : 'border-[var(--c-border)] hover:bg-[var(--c-bg)]'
                  }`}
                  data-testid={`compartir-scope-${opt.value}`}
                >
                  <input
                    type="radio"
                    name="compartir-scope"
                    value={opt.value}
                    checked={isSelected}
                    onChange={() => setShareScope(opt.value)}
                    className="mt-0.5"
                  />
                  <span>
                    <span className="block text-sm font-medium text-[var(--c-text)]">
                      {opt.label}
                    </span>
                    <span className="block text-xs text-[var(--c-muted)] mt-0.5">
                      {opt.helper}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
          <div className="mt-5 flex justify-end gap-2">
            <button
              type="button"
              onClick={closeShareDialog}
              disabled={shareBusy}
              className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] disabled:opacity-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleConfirmShare}
              disabled={shareBusy}
              data-testid="compartir-confirmar"
              className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {shareBusy ? 'Compartiendo…' : 'Confirmar'}
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
