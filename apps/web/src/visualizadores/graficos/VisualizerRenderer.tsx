import type {
  ChartSpec,
  ConceptMapSpec,
  FlowSpec,
  MapSpec,
  TimelineSpec,
  VisualSpec,
} from "../types";
import ChartsVisualizer from "./ChartsVisualizer";
import ConceptMapVisualizer from "./ConceptMapVisualizer";
import FlowDiagramVisualizer from "./FlowDiagramVisualizer";
import TimelineVisualizer from "./TimelineVisualizer";

type VisualizerRendererProps = {
  spec: VisualSpec;
};

function TimelineRenderer({ spec }: { spec: TimelineSpec }) {
  return <TimelineVisualizer spec={spec} />;
}

function ConceptMapRenderer({ spec }: { spec: ConceptMapSpec }) {
  return <ConceptMapVisualizer spec={spec} />;
}

function ChartRenderer({ spec }: { spec: ChartSpec }) {
  return <ChartsVisualizer spec={spec} />;
}

function FlowRenderer({ spec }: { spec: FlowSpec }) {
  return <FlowDiagramVisualizer spec={spec} />;
}

function MapRenderer({ spec }: { spec: MapSpec }) {
  return (
    <section className="space-y-4">
      {spec.title && <h3 className="text-lg font-semibold">{spec.title}</h3>}
      <div className="rounded-lg border border-slate-200 p-3">
        <p className="text-sm font-semibold text-slate-700">Marcadores</p>
        <ul className="mt-2 space-y-2 text-sm text-slate-600">
          {spec.markers.map((marker) => (
            <li key={marker.id}>
              <span className="font-medium text-slate-800">{marker.label}</span>
              <span className="text-slate-500">
                {" "}
                ({marker.coordinates[0]}, {marker.coordinates[1]})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function VisualizerRenderer({ spec }: VisualizerRendererProps) {
  switch (spec.kind) {
    case "timeline":
      return <TimelineRenderer spec={spec} />;
    case "concept-map":
      return <ConceptMapRenderer spec={spec} />;
    case "chart":
      return <ChartRenderer spec={spec} />;
    case "flow":
      return <FlowRenderer spec={spec} />;
    case "map":
      return <MapRenderer spec={spec} />;
    default:
      return (
        <div className="rounded-lg border border-dashed border-slate-200 p-4 text-sm text-slate-500">
          No hay un visualizador disponible para este tipo de contenido.
        </div>
      );
  }
}
