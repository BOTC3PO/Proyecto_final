/**
 * Tipos de herramienta del editor (replicado para que este módulo sea
 * independiente y testeable sin importar el componente entero).
 */
export type Tool = "select" | "marcador" | "ruta" | "area" | "texto" | "medir";

export type HintState = {
  tool: Tool;
  pendingAreaLen: number;
  pendingRutaLen: number;
  pendingMedir: boolean;
  medidaFijadaKm: number | null;
};

/**
 * Calcula el texto del hint visual y el texto a anunciar por aria-live,
 * en función de la herramienta activa y el estado de creación pendiente.
 *
 * El `aria` es semánticamente equivalente al `visual` pero más conciso
 * (sin acciones de botones embebidos).
 */
export function computeHint(s: HintState): { visual: string; aria: string } {
  switch (s.tool) {
    case "select":
      return { visual: "Arrastrá para mover el lienzo. Usá la rueda para zoom.", aria: "" };
    case "marcador":
      return { visual: "Click en el mapa para colocar un marcador.", aria: "Click en el mapa para colocar un marcador." };
    case "texto":
      return {
        visual: "Click para agregar texto · escribí el contenido en el inspector.",
        aria: "Click en el mapa para agregar una etiqueta de texto. Escribí el contenido en el inspector.",
      };
    case "ruta": {
      const n = s.pendingRutaLen;
      if (n === 0) return { visual: "Click para empezar la ruta.", aria: "Click para empezar la ruta." };
      if (n === 1) return { visual: "Click para agregar otro punto (mínimo 2).", aria: "Click para agregar otro punto. Mínimo dos puntos." };
      return { visual: "Doble click o Enter para cerrar · Esc para cancelar.", aria: "Doble click o Enter para cerrar la ruta. Escape para cancelar." };
    }
    case "area": {
      const n = s.pendingAreaLen;
      if (n === 0) return { visual: "Click para empezar a dibujar el área.", aria: "Click para empezar a dibujar el área." };
      if (n < 3) return { visual: "Click para agregar puntos (mínimo 3).", aria: "Click para agregar puntos. Mínimo tres." };
      return {
        visual: "Doble click, Enter o click en el primer punto para cerrar · Esc cancela.",
        aria: "Doble click, Enter o click en el primer punto para cerrar. Escape cancela.",
      };
    }
    case "medir": {
      if (s.medidaFijadaKm != null) {
        const kmFmt = Math.round(s.medidaFijadaKm).toLocaleString("es-AR");
        return {
          visual: `Distancia fijada: ${kmFmt} km. Enter para guardarla como anotación · Esc para descartar.`,
          aria: `Medición fijada: ${kmFmt} kilómetros.`,
        };
      }
      if (!s.pendingMedir) return { visual: "Click en el punto inicial.", aria: "Click en el punto inicial." };
      return { visual: "Click en el punto final · Esc cancela.", aria: "Click en el punto final. Escape cancela." };
    }
    default:
      return { visual: "", aria: "" };
  }
}
