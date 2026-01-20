import ConceptMapVisualizer from "../visualizadores/graficos/ConceptMapVisualizer";
import type { ConceptMapSpec } from "../visualizadores/types";

const sampleSpec: ConceptMapSpec = {
  kind: "concept-map",
  title: "Mapa conceptual de energía",
  nodes: [
    { id: "energia", label: "Energía", description: "Concepto central" },
    { id: "cinetica", label: "Energía cinética", description: "Movimiento" },
    { id: "potencial", label: "Energía potencial", description: "Posición" },
    { id: "mecanica", label: "Energía mecánica", description: "Suma de energías" },
    { id: "transformacion", label: "Transformación", description: "Cambio de forma" },
  ],
  links: [
    {
      id: "energia-cinetica",
      sourceId: "energia",
      targetId: "cinetica",
      relation: "se manifiesta como",
    },
    {
      id: "energia-potencial",
      sourceId: "energia",
      targetId: "potencial",
      relation: "se manifiesta como",
    },
    {
      id: "mecanica-suma",
      sourceId: "mecanica",
      targetId: "energia",
      relation: "integra",
    },
    {
      id: "transformacion-energia",
      sourceId: "transformacion",
      targetId: "energia",
      relation: "modifica",
    },
  ],
};

export default function ConceptMapDemo() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Visualizador
        </p>
        <h1 className="text-2xl font-semibold text-slate-900">
          Mapa conceptual / mental
        </h1>
        <p className="text-sm text-slate-600">
          Ejemplo de renderizado con nodos, enlaces y etiquetas en SVG.
        </p>
      </header>
      <ConceptMapVisualizer spec={sampleSpec} />
    </div>
  );
}
