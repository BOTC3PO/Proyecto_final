import type {
  AlgebraCalculoSpec,
  FuncionesGraficoSpec,
  GeometriaSpec,
  TrigonometriaSpec,
  VisualSpec,
} from "../types";
import AlgebraCalculoVisualizer from "./AlgebraCalculoVisualizer";
import FuncionesGraficoVisualizer from "./FuncionesGraficoVisualizer";
import GeometriaVisualizer from "./GeometriaVisualizer";
import TrigonometriaVisualizer from "./TrigonometriaVisualizer";

type VisualizerRendererProps = {
  spec: VisualSpec;
};

function FuncionesGraficoRenderer({ spec }: { spec: FuncionesGraficoSpec }) {
  return <FuncionesGraficoVisualizer spec={spec} />;
}

function GeometriaRenderer({ spec }: { spec: GeometriaSpec }) {
  return <GeometriaVisualizer spec={spec} />;
}

function TrigonometriaRenderer({ spec }: { spec: TrigonometriaSpec }) {
  return <TrigonometriaVisualizer spec={spec} />;
}

function AlgebraCalculoRenderer({ spec }: { spec: AlgebraCalculoSpec }) {
  return <AlgebraCalculoVisualizer spec={spec} />;
}

export default function VisualizerRenderer({ spec }: VisualizerRendererProps) {
  switch (spec.kind) {
    case "funciones-grafico":
      return <FuncionesGraficoRenderer spec={spec} />;
    case "geometria":
      return <GeometriaRenderer spec={spec} />;
    case "trigonometria":
      return <TrigonometriaRenderer spec={spec} />;
    case "algebra-calculo":
      return <AlgebraCalculoRenderer spec={spec} />;
    default:
      return (
        <div className="rounded-lg border border-dashed border-slate-200 p-4 text-sm text-slate-500">
          No hay un visualizador disponible para este tipo de contenido.
        </div>
      );
  }
}
