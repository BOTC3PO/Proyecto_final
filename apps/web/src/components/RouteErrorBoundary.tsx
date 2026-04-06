import { Component, type ReactNode, type ErrorInfo } from "react";
import { Link } from "react-router-dom";

type Props = { children: ReactNode };
type State = { error: Error | null; retrying: boolean };

export class RouteErrorBoundary extends Component<Props, State> {
  state: State = { error: null, retrying: false };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[RouteErrorBoundary]", error, info);
  }

  handleRetry = () => {
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
      const isChunkError =
        error.message.includes("Failed to fetch") ||
        error.message.includes("Loading chunk") ||
        error.message.includes("dynamically imported module");

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
