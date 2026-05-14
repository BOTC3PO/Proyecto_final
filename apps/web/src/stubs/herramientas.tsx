// Stubs for archived Herramientas pages
import { useSearchParams } from 'react-router-dom';
import MapEditor from '../components/MapEditor';

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
        <MapEditor subjectLabel="Geografía e Historia" />
      </div>
    </div>
  );
}
export function HerramientasMapaEditor() {
  const [params] = useSearchParams();
  const ssKey = params.get('sskey') ?? undefined;
  void ssKey; // reservado para integración futura con sessionStorage

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
        <MapEditor subjectLabel="Geografía e Historia" />
      </div>
    </div>
  );
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
