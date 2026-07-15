import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import { useI18n } from '../i18n/I18nContext';
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

const SHARE_SCOPE_OPTIONS: Array<{ value: ShareScope; labelKey: string; helperKey: string }> = [
  { value: 'privado', labelKey: 'profesorMateriales.soloYo', helperKey: 'profesorMateriales.nadieMasPuedeVerlo' },
  { value: 'escuela', labelKey: 'bancoCuestionarios.miEscuela', helperKey: 'profesorMateriales.docentesYAlumnosDeTu' },
  { value: 'publico', labelKey: 'quizConfigPanel.publico', helperKey: 'profesorMateriales.cualquierDocenteRegistradoEnLa' },
];

export default function ProfesorMateriales() {
  const { user } = useAuth();
  const { t } = useI18n();
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
      const opt = SHARE_SCOPE_OPTIONS.find((o) => o.value === shareScope);
      const label = opt ? t(opt.labelKey) : shareScope;
      setMsg(`✓ ${t('profesorMateriales.materialCompartido')} ${label}.`);
      closeShareDialog();
      fetchItems();
    } catch {
      setMsg(t('profesorMateriales.errorAlCompartir'));
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
        setMsg(t('profesorMateriales.errorAlDescargarElMaterial'));
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
          <h1 className="text-xl font-semibold text-[var(--c-text)]">{t('profesorMateriales.materialDidactico')}</h1>
          <p className="text-sm text-[var(--c-muted)] mt-0.5">
            {t('profesorMateriales.cuestionariosYMaterialesCompartidosEntre')}
          </p>
        </div>
        <Link
          // PLAN-K §5 — V1/V2 quedan retirados como entry point (siguen
          // vivos para links viejos, ver PLAN-K §4). El flujo moderno es
          // Tiza standalone, con `returnTo` para volver a materiales
          // después de armar el cuestionario.
          to="/plantillas/nueva?returnTo=/profesor/materiales"
          className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          {t('profesorMateriales.crearCuestionario')}
        </Link>
        {/* G3 Fase 3.1 — el editor de libros no tenía ningún entry point. */}
        <Link
          to="/editor"
          className="rounded-xl border border-[var(--c-border)] px-4 py-2 text-sm font-semibold text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
        >
          {t('profesorMateriales.crearLibro')}
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
          { key: 'escuela', label: t('profesorMateriales.deLaEscuela') },
          { key: 'propios', label: t('profesorMateriales.misMateriales') },
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
              ? t('profesorMateriales.todaviaNoHayMaterialesCompartidos')
              : t('profesorMateriales.noTenesMaterialesPropiosCrea')}
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
                {item.materia === 'Sin materia' ? t('menuProfesor.sinMateria') : item.materia} · {item.autor}
                {item.questions ? ` · ${item.questions} ${t('comun.preguntas')}` : ''}
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
                  {t('profesorMateriales.abrir')}
                </button>
              )}
              {item.origen === 'libro' && (
                <button
                  type="button"
                  onClick={() => navigate(`/editor/${item.id}`)}
                  data-testid={`abrir-${item.id}`}
                  className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
                >
                  {t('profesorMateriales.abrir')}
                </button>
              )}
              {tab === 'propios' && (!item.origen || item.origen === 'modulo') && (
                <button
                  onClick={() => openShareDialog(item)}
                  data-testid={`compartir-${item.id}`}
                  className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
                >
                  {item.compartido ? t('profesorMateriales.cambiarAlcance') : t('profesorMateriales.compartir')}
                </button>
              )}
              {(!item.origen || item.origen === 'modulo') && (
                <button
                  type="button"
                  onClick={() => handleDescargar(item)}
                  className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
                >
                  {t('profesorMateriales.descargar')}
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
            {t('profesorMateriales.compartir')} "{shareDialogItem.titulo}"
          </h3>
          <p className="mt-1 text-xs text-[var(--c-muted)]">
            {t('profesorMateriales.elegiConQuienQueresCompartir')}
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
                      {t(opt.labelKey)}
                    </span>
                    <span className="block text-xs text-[var(--c-muted)] mt-0.5">
                      {t(opt.helperKey)}
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
              {t('comun.cancelar')}
            </button>
            <button
              type="button"
              onClick={handleConfirmShare}
              disabled={shareBusy}
              data-testid="compartir-confirmar"
              className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {shareBusy ? t('profesorMateriales.compartiendo') : t('profesorMateriales.confirmar')}
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
