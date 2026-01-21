import type {
  AlgebraCalculoVisualSpec,
  ChartSpec,
  ConceptMapSpec,
  EnergyChartSpec,
  FlowSpec,
  FuncionesGraficasSpec,
  GeometriaPlanaEspacialSpec,
  MapSpec,
  PhysicsForcesVectorSpec,
  PhysicsMotionChartSpec,
  TimelineSpec,
  TrigonometriaAvanzadaSpec,
  VisualSpec,
} from "../types";
import {
  AlgebraCalculoVisualVisualizer,
  FuncionesGraficasVisualizer,
  GeometriaPlanaEspacialVisualizer,
  TrigonometriaAvanzadaVisualizer,
} from "../matematicas";
import PhysicsForcesVectorVisualizer from "../fisica/PhysicsForcesVectorVisualizer";
import PhysicsMotionChartVisualizer from "../fisica/PhysicsMotionChartVisualizer";
import EnergyChartVisualizer from "../fisica/EnergyChartVisualizer";
import ChartsVisualizer from "./ChartsVisualizer";
import ConceptMapVisualizer from "./ConceptMapVisualizer";
import FlowDiagramVisualizer from "./FlowDiagramVisualizer";
import InteractiveMapVisualizer from "./InteractiveMapVisualizer";
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
  return <InteractiveMapVisualizer spec={spec} />;
}

function FuncionesGraficasRenderer({ spec }: { spec: FuncionesGraficasSpec }) {
  return <FuncionesGraficasVisualizer spec={spec} />;
}

function GeometriaPlanaEspacialRenderer({
  spec,
}: {
  spec: GeometriaPlanaEspacialSpec;
}) {
  return <GeometriaPlanaEspacialVisualizer spec={spec} />;
}

function TrigonometriaAvanzadaRenderer({
  spec,
}: {
  spec: TrigonometriaAvanzadaSpec;
}) {
  return <TrigonometriaAvanzadaVisualizer spec={spec} />;
}

function AlgebraCalculoVisualRenderer({
  spec,
}: {
  spec: AlgebraCalculoVisualSpec;
}) {
  return <AlgebraCalculoVisualVisualizer spec={spec} />;
}

function PhysicsMotionChartRenderer({
  spec,
}: {
  spec: PhysicsMotionChartSpec;
}) {
  return <PhysicsMotionChartVisualizer spec={spec} />;
}

function PhysicsForcesVectorRenderer({
  spec,
}: {
  spec: PhysicsForcesVectorSpec;
}) {
  return <PhysicsForcesVectorVisualizer spec={spec} />;
}

function EnergyChartRenderer({ spec }: { spec: EnergyChartSpec }) {
  return <EnergyChartVisualizer spec={spec} />;
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
    case "funciones-graficas":
      return <FuncionesGraficasRenderer spec={spec} />;
    case "geometria-plana-espacial":
      return <GeometriaPlanaEspacialRenderer spec={spec} />;
    case "trigonometria-avanzada":
      return <TrigonometriaAvanzadaRenderer spec={spec} />;
    case "algebra-calculo-visual":
      return <AlgebraCalculoVisualRenderer spec={spec} />;
    case "physics-motion-chart":
      return <PhysicsMotionChartRenderer spec={spec} />;
    case "physics-forces-vectors":
      return <PhysicsForcesVectorRenderer spec={spec} />;
    case "energy-chart":
      return <EnergyChartRenderer spec={spec} />;
    default:
      return (
        <div className="rounded-lg border border-dashed border-slate-200 p-4 text-sm text-slate-500">
          No hay un visualizador disponible para este tipo de contenido.
        </div>
      );
  }
}
