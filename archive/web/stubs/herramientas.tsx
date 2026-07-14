// Stubs for archived Herramientas pages
import { Link } from 'react-router-dom';
import MapaEditorPage from '../pages/herramientas/MapaEditorPage';

export function HerramientasEducativas() { return null; }
export function HerramientasCienciasSociales() {
  return (
    <div className="min-h-screen bg-[var(--c-bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
        <div>
          <h1 className="text-xl font-semibold text-[var(--c-text)]">
            Editor de mapas — Ciencias Sociales
          </h1>
          <p className="text-sm text-[var(--c-muted)] mt-0.5">
            Geografía e Historia
          </p>
        </div>
        <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] p-4 text-sm text-[var(--c-text)] space-y-2">
          <p>El editor visual de mapas ya está disponible.</p>
          <Link
            to="/herramientas/mapa-editor"
            className="inline-flex items-center rounded-lg border border-[var(--c-primary)] bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-[var(--c-accent-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
          >
            Abrir editor de mapas
          </Link>
        </div>
      </div>
    </div>
  );
}
export function HerramientasMapaEditor() {
  return <MapaEditorPage />;
}
export function HerramientasEstadistica() { return null; }
export function HerramientasFilosofia() { return null; }
export function HerramientasArte() { return null; }
export function HerramientasBiologia() { return null; }
export function HerramientasMusica() { return null; }
export function HerramientasPolitica() { return null; }
export function HerramientasCivica() { return null; }
export function HerramientasAmbiental() { return null; }
export function HerramientasInformatica() { return null; }
export function HerramientasNaturales() { return null; }
export function HerramientasCocina() { return null; }
export function HerramientasVidaPractica() { return null; }
