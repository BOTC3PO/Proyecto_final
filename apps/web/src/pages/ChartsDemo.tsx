import ChartsVisualizer from "../visualizadores/graficos/ChartsVisualizer";
import type { ChartSpec } from "../visualizadores/types";

const barSpec: ChartSpec = {
  kind: "chart",
  chartType: "bar",
  title: "Participación por módulo",
  yAxis: { label: "Estudiantes" },
  series: [
    {
      id: "completadas",
      label: "Completadas",
      data: [
        { x: "Módulo 1", y: 18 },
        { x: "Módulo 2", y: 12 },
        { x: "Módulo 3", y: 10 },
      ],
    },
    {
      id: "pendientes",
      label: "Pendientes",
      data: [
        { x: "Módulo 1", y: 4 },
        { x: "Módulo 2", y: 8 },
        { x: "Módulo 3", y: 10 },
      ],
    },
  ],
};

const lineSpec: ChartSpec = {
  kind: "chart",
  chartType: "line",
  title: "Tendencia de interacción semanal",
  xAxis: { label: "Semana" },
  yAxis: { label: "Interacciones" },
  series: [
    {
      id: "interacciones",
      label: "Interacciones",
      data: [
        { x: "Sem 1", y: 120 },
        { x: "Sem 2", y: 160 },
        { x: "Sem 3", y: 140 },
        { x: "Sem 4", y: 190 },
      ],
    },
    {
      id: "respuestas",
      label: "Respuestas",
      data: [
        { x: "Sem 1", y: 60 },
        { x: "Sem 2", y: 90 },
        { x: "Sem 3", y: 80 },
        { x: "Sem 4", y: 130 },
      ],
    },
  ],
};

const pieSpec: ChartSpec = {
  kind: "chart",
  chartType: "pie",
  title: "Distribución de evaluaciones",
  series: [
    {
      id: "evaluaciones",
      label: "Evaluaciones",
      data: [
        { x: "Quizzes", y: 8 },
        { x: "Proyectos", y: 5 },
        { x: "Foros", y: 3 },
      ],
    },
  ],
};

export default function ChartsDemo() {
  return (
    <main className="space-y-8 p-6">
      <header>
        <h1 className="text-2xl font-semibold text-slate-900">Demo de gráficos estadísticos</h1>
        <p className="text-sm text-slate-600">Barras, líneas y circular en SVG.</p>
      </header>
      <ChartsVisualizer spec={barSpec} />
      <ChartsVisualizer spec={lineSpec} />
      <ChartsVisualizer spec={pieSpec} />
    </main>
  );
}
