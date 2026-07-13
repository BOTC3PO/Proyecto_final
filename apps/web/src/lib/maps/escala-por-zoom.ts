/**
 * PLAN-G ítem 45.a — escala inversa al zoom para elementos de tamaño fijo.
 *
 * El zoom de los mapas (`useViewBoxZoom`) se implementa achicando el
 * `viewBox` del SVG: al acercar, el mismo ancho en unidades del mapa ocupa
 * más píxeles de pantalla. Marcadores, grosores de ruta/área y tamaños de
 * texto se dibujaban con un valor FIJO en unidades del mapa — por lo que
 * crecían de forma descontrolada al acercar (ballooning), en vez de
 * mantener un tamaño visual constante como en cualquier visor de mapas.
 *
 * `escalaPorZoom` da el factor por el que hay que multiplicar cualquier
 * tamaño "de pantalla" (radio, grosor de trazo, tamaño de fuente) para
 * neutralizar ese efecto: 1 = sin zoom (el tamaño de siempre), y se achica
 * proporcionalmente al acercar para que el tamaño VISUAL quede constante.
 */
export function escalaPorZoom(viewBoxWidth: number, anchoBase: number): number {
  if (!Number.isFinite(viewBoxWidth) || !Number.isFinite(anchoBase) || anchoBase <= 0) {
    return 1;
  }
  return viewBoxWidth / anchoBase;
}
