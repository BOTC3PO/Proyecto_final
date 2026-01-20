import type {
  AlgebraCalculoSpec,
  AlgebraCalculoVisualSpec,
  FuncionesGraficoSpec,
  FuncionesGraficasSpec,
  GeometriaPlanaEspacialSpec,
  GeometriaSpec,
  TrigonometriaAvanzadaSpec,
  TrigonometriaSpec,
  VisualSpec,
} from "../types";
import AlgebraCalculoVisualizer from "./AlgebraCalculoVisualizer";
import AlgebraCalculoVisualVisualizer from "./AlgebraCalculoVisualVisualizer";
import FuncionesGraficoVisualizer from "./FuncionesGraficoVisualizer";
import FuncionesGraficasVisualizer from "./FuncionesGraficasVisualizer";
import GeometriaPlanaEspacialVisualizer from "./GeometriaPlanaEspacialVisualizer";
import GeometriaVisualizer from "./GeometriaVisualizer";
import TrigonometriaAvanzadaVisualizer from "./TrigonometriaAvanzadaVisualizer";
import TrigonometriaVisualizer from "./TrigonometriaVisualizer";

type VisualizerRendererProps = {
  spec: VisualSpec;
};

function FuncionesGraficoRenderer({ spec }: { spec: FuncionesGraficoSpec }) {
  return <FuncionesGraficoVisualizer spec={spec} />;
}

function FuncionesGraficasRenderer({ spec }: { spec: FuncionesGraficasSpec }) {
  return <FuncionesGraficasVisualizer spec={spec} />;
}

function GeometriaRenderer({ spec }: { spec: GeometriaSpec }) {
  return <GeometriaVisualizer spec={spec} />;
}

function GeometriaPlanaEspacialRenderer({
  spec,
}: {
  spec: GeometriaPlanaEspacialSpec;
}) {
  return <GeometriaPlanaEspacialVisualizer spec={spec} />;
}

function TrigonometriaRenderer({ spec }: { spec: TrigonometriaSpec }) {
  return <TrigonometriaVisualizer spec={spec} />;
}

function TrigonometriaAvanzadaRenderer({
  spec,
}: {
  spec: TrigonometriaAvanzadaSpec;
}) {
  return <TrigonometriaAvanzadaVisualizer spec={spec} />;
}

function AlgebraCalculoRenderer({ spec }: { spec: AlgebraCalculoSpec }) {
  return <AlgebraCalculoVisualizer spec={spec} />;
}

function AlgebraCalculoVisualRenderer({
  spec,
}: {
  spec: AlgebraCalculoVisualSpec;
}) {
  return <AlgebraCalculoVisualVisualizer spec={spec} />;
}

export default function VisualizerRenderer({ spec }: VisualizerRendererProps) {
  switch (spec.kind) {
    case "funciones-grafico":
      return <FuncionesGraficoRenderer spec={spec} />;
    case "funciones-graficas":
      return <FuncionesGraficasRenderer spec={spec} />;
    case "geometria":
      return <GeometriaRenderer spec={spec} />;
    case "geometria-plana-espacial":
      return <GeometriaPlanaEspacialRenderer spec={spec} />;
    case "trigonometria":
      return <TrigonometriaRenderer spec={spec} />;
    case "trigonometria-avanzada":
      return <TrigonometriaAvanzadaRenderer spec={spec} />;
    case "algebra-calculo":
      return <AlgebraCalculoRenderer spec={spec} />;
    case "algebra-calculo-visual":
      return <AlgebraCalculoVisualRenderer spec={spec} />;
    default:
      return (
        <div className="rounded-lg border border-dashed border-slate-200 p-4 text-sm text-slate-500">
          No hay un visualizador disponible para este tipo de contenido.
        </div>
      );
  }
}
