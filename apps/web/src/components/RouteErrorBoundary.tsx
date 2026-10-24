import { Component, type ReactNode, type ErrorInfo } from "react";
import { Link } from "react-router-dom";

type Props = { children: ReactNode };
type State = { error: Error | null; retrying: boolean };

// Mensajes de cada navegador cuando un módulo cargado bajo demanda no se puede traer: Chrome ("Failed to
// fetch dynamically imported module"), Firefox ("error loading dynamically imported module"), Safari
// ("Importing a module script failed") y el cargador clásico ("Loading chunk N failed").
export const esErrorDeChunk = (error: Error): boolean =>
  /Failed to fetch|Loading chunk|dynamically imported module|Importing a module script failed|Unable to preload CSS/i.test(
    error.message
  );

const CLAVE_RECARGA = 'vb:recarga-por-chunk';
const VENTANA_RECARGA_MS = 60_000;

/**
 * Después de publicar una versión nueva, una pestaña abierta con la anterior pide archivos con hash que
 * ya no existen. `React.lazy` guarda la promesa rechazada, así que reintentar sin recargar nunca lo
 * arregla: hay que traer la página nueva. Se recarga una sola vez por minuto para no entrar en un bucle
 * si el problema es otro (por ejemplo, sin conexión).
 */
export const recargarSiCorresponde = (
  ahora: number = Date.now(),
  almacen: Pick<Storage, 'getItem' | 'setItem'> | null = (() => {
    try { return window.sessionStorage; } catch { return null; }
  })(),
  recargar: () => void = () => window.location.reload()
): boolean => {
  let ultima = 0;
  try { ultima = Number(almacen?.getItem(CLAVE_RECARGA) ?? 0); } catch { /* sin almacenamiento */ }
  if (ahora - ultima < VENTANA_RECARGA_MS) return false;
  try { almacen?.setItem(CLAVE_RECARGA, String(ahora)); } catch { /* sin almacenamiento */ }
  recargar();
  return true;
};

export class RouteErrorBoundary extends Component<Props, State> {
  state: State = { error: null, retrying: false };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[RouteErrorBoundary]", error, info);
    if (esErrorDeChunk(error)) recargarSiCorresponde();
  }

  handleRetry = () => {
    // Un módulo que falló al cargar no se recupera remontando: se recarga la página.
    if (this.state.error && esErrorDeChunk(this.state.error)) {
      window.location.reload();
      return;
    }
    this.setState({ retrying: true, error: null });
    // Forzar recarga del chunk limpiando el cache del módulo
    setTimeout(() => {
      this.setState({ retrying: false });
    }, 500);
  };

  render() {
    const { error, retrying } = this.state;

    if (retrying) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="text-sm text-slate-400 animate-pulse">Reintentando...</p>
        </div>
      );
    }

    if (error) {
      const isChunkError = esErrorDeChunk(error);

      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="text-4xl">{isChunkError ? "📡" : "⚠️"}</p>
          <h2 className="text-lg font-semibold text-slate-800">
            {isChunkError ? "Error de conexión" : "Algo salió mal"}
          </h2>
          <p className="text-sm text-slate-500 max-w-sm">
            {isChunkError
              ? "No se pudo cargar esta página. Verificá tu conexión a internet."
              : "Ocurrió un error inesperado en esta página."}
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={this.handleRetry}
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Reintentar
            </button>
            <Link
              to="/"
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
