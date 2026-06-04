/**
 * EditorShell — layout reusable de 3 columnas para editores (patrón del
 * prototipo "VB editores").
 *
 * Por qué grid y no flex: el layout viejo usaba `flex` con `flex-1` sin
 * `min-width: 0`, así que la columna central no podía encogerse por debajo del
 * ancho de su contenido (regla `min-width: auto` de flex/grid) y **empujaba**
 * las columnas laterales con contenido ancho (líneas largas de DSL, page-bar
 * llena). Acá usamos CSS Grid con tracks explícitos:
 *
 *     grid-template-columns: <meta> minmax(0, 1fr) <aux>
 *
 * Las laterales son fijas y la central es `minmax(0, 1fr)` — el `0` mata el
 * `min-width: auto`, así el centro se encoge y nunca empuja. El bug desaparece
 * por construcción, no por band-aids.
 *
 * Qué encapsula (para que las próximas pantallas del rediseño lo reusen):
 *  - tracks `<meta> 1fr <aux>` configurables (`metaWidth` / `auxWidth`),
 *  - cada columna con scroll independiente (`min-height: 0; overflow`),
 *  - colapso responsive a una sola columna en `<lg`,
 *  - tokens `--c-*` para bordes/superficies (cero hardcode).
 *
 * El cuerpo scrollable de cada columna usa la clase `editor-shell__scroll`
 * (equivalente al `.body { overflow-y:auto; min-height:0; flex:1 }` del
 * prototipo). La page-bar (`.vb-page-bar`) ya es sticky por CSS.
 *
 * Slots: `meta` (izquierda), `children` (centro), `aux` (derecha).
 */
import type { CSSProperties, ReactNode } from "react";

export interface EditorShellProps {
  /** Columna izquierda (metadatos). */
  meta: ReactNode;
  /** Columna central (editor + barras). */
  children: ReactNode;
  /** Columna derecha (preview / auxiliar). */
  aux: ReactNode;
  /** Ancho de la columna meta. Default 260px (prototipo). */
  metaWidth?: string;
  /** Ancho de la columna auxiliar. Default 320px (prototipo). */
  auxWidth?: string;
  className?: string;
  dataTestid?: string;
  /** Etiqueta accesible de cada región (para landmarks). */
  metaLabel?: string;
  auxLabel?: string;
}

interface ShellStyle extends CSSProperties {
  "--editor-meta"?: string;
  "--editor-aux"?: string;
}

export default function EditorShell({
  meta,
  children,
  aux,
  metaWidth = "260px",
  auxWidth = "320px",
  className,
  dataTestid,
  metaLabel = "Metadatos",
  auxLabel = "Panel auxiliar",
}: EditorShellProps) {
  const style: ShellStyle = {
    "--editor-meta": metaWidth,
    "--editor-aux": auxWidth,
  };

  return (
    <div
      className={`editor-shell${className ? ` ${className}` : ""}`}
      style={style}
      data-testid={dataTestid}
    >
      <aside
        aria-label={metaLabel}
        className="editor-shell__col editor-shell__col--meta"
      >
        {meta}
      </aside>
      <main className="editor-shell__col editor-shell__col--center">
        {children}
      </main>
      <aside
        aria-label={auxLabel}
        className="editor-shell__col editor-shell__col--aux"
      >
        {aux}
      </aside>
    </div>
  );
}
