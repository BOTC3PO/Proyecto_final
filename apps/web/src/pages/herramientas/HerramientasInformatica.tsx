import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "../../visualizadores/graficos/VisualizerRenderer";
import type { CsSortingSpec, CsGraphSpec, CsBinaryTreeSpec } from "../../visualizadores/types";

type Tool = "cs-sorting" | "cs-graph" | "cs-binary-tree";
type SortAlg = CsSortingSpec["algorithm"];
type GraphAlg = NonNullable<CsGraphSpec["algorithm"]>;
type Traversal = NonNullable<CsBinaryTreeSpec["traversalOrder"]>;

// ── Sorting ────────────────────────────────────────────────────────────────────

function bubbleSort(arr: number[]): CsSortingSpec["steps"] {
  const a = [...arr];
  const steps: CsSortingSpec["steps"] = [];
  const sorted: number[] = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      steps.push({ stepIndex: steps.length, array: [...a], comparing: [j, j + 1], sorted: [...sorted] });
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        steps.push({ stepIndex: steps.length, array: [...a], swapped: [j, j + 1], sorted: [...sorted] });
      }
    }
    sorted.push(a.length - 1 - i);
  }
  return steps;
}

function selectionSort(arr: number[]): CsSortingSpec["steps"] {
  const a = [...arr];
  const steps: CsSortingSpec["steps"] = [];
  const sorted: number[] = [];
  for (let i = 0; i < a.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < a.length; j++) {
      steps.push({ stepIndex: steps.length, array: [...a], comparing: [minIdx, j], sorted: [...sorted] });
      if (a[j] < a[minIdx]) minIdx = j;
    }
    if (minIdx !== i) {
      [a[i], a[minIdx]] = [a[minIdx], a[i]];
      steps.push({ stepIndex: steps.length, array: [...a], swapped: [i, minIdx], sorted: [...sorted] });
    }
    sorted.push(i);
  }
  return steps;
}

function buildSortingSpec(algorithm: SortAlg, inputArray: number[]): CsSortingSpec {
  const steps = algorithm === "bubble" ? bubbleSort(inputArray) : selectionSort(inputArray);
  const complexity: Record<SortAlg, { time: string; space: string }> = {
    bubble: { time: "O(n²)", space: "O(1)" },
    selection: { time: "O(n²)", space: "O(1)" },
    insertion: { time: "O(n²)", space: "O(1)" },
    merge: { time: "O(n log n)", space: "O(n)" },
    quick: { time: "O(n log n)", space: "O(log n)" },
  };
  return {
    kind: "cs-sorting",
    title: `Ordenamiento — ${algorithm}`,
    algorithm,
    initialArray: inputArray,
    steps,
    currentStep: 0,
    complexity: complexity[algorithm],
  };
}

// ── Graph ─────────────────────────────────────────────────────────────────────

const GRAPH_NODES: CsGraphSpec["nodes"] = [
  { id: "A", label: "A", x: 0.5, y: 0.1 },
  { id: "B", label: "B", x: 0.2, y: 0.4 },
  { id: "C", label: "C", x: 0.8, y: 0.4 },
  { id: "D", label: "D", x: 0.15, y: 0.75 },
  { id: "E", label: "E", x: 0.5, y: 0.75 },
  { id: "F", label: "F", x: 0.85, y: 0.75 },
];
const GRAPH_EDGES: CsGraphSpec["edges"] = [
  { id: "e1", fromId: "A", toId: "B" },
  { id: "e2", fromId: "A", toId: "C" },
  { id: "e3", fromId: "B", toId: "D" },
  { id: "e4", fromId: "B", toId: "E" },
  { id: "e5", fromId: "C", toId: "E" },
  { id: "e6", fromId: "C", toId: "F" },
];
const TRAVERSAL_ORDERS: Record<GraphAlg, string[]> = {
  bfs: ["A", "B", "C", "D", "E", "F"],
  dfs: ["A", "B", "D", "E", "C", "F"],
  dijkstra: ["A", "B", "C", "D", "E", "F"],
  none: [],
};

// ── Binary Tree ───────────────────────────────────────────────────────────────

const TREE_NODES: CsBinaryTreeSpec["nodes"] = [
  { id: "n1", value: 50 },
  { id: "n2", value: 30, parentId: "n1", side: "left" },
  { id: "n3", value: 70, parentId: "n1", side: "right" },
  { id: "n4", value: 20, parentId: "n2", side: "left" },
  { id: "n5", value: 40, parentId: "n2", side: "right" },
  { id: "n6", value: 60, parentId: "n3", side: "left" },
  { id: "n7", value: 80, parentId: "n3", side: "right" },
];
const TRAVERSAL_SEQ: Record<Traversal, string[]> = {
  inorder: ["n4", "n2", "n5", "n1", "n6", "n3", "n7"],
  preorder: ["n1", "n2", "n4", "n5", "n3", "n6", "n7"],
  postorder: ["n4", "n5", "n2", "n6", "n7", "n3", "n1"],
  levelorder: ["n1", "n2", "n3", "n4", "n5", "n6", "n7"],
};

// ── Component ─────────────────────────────────────────────────────────────────

const DEFAULT_ARRAY = [64, 34, 25, 12, 22, 11, 90];

export default function HerramientasInformatica() {
  const [activeTool, setActiveTool] = useState<Tool>("cs-sorting");
  const [sortAlg, setSortAlg] = useState<SortAlg>("bubble");
  const [graphAlg, setGraphAlg] = useState<GraphAlg>("bfs");
  const [traversal, setTraversal] = useState<Traversal>("inorder");
  const [arrayInput, setArrayInput] = useState(DEFAULT_ARRAY.join(", "));

  const inputArray = useMemo(() => {
    const parsed = arrayInput.split(",").map((s) => parseInt(s.trim(), 10)).filter((n) => !isNaN(n));
    return parsed.length > 0 ? parsed.slice(0, 10) : DEFAULT_ARRAY;
  }, [arrayInput]);

  const sortingSpec = useMemo(() => buildSortingSpec(sortAlg, inputArray), [sortAlg, inputArray]);

  const graphSpec = useMemo<CsGraphSpec>(() => ({
    kind: "cs-graph",
    title: `Grafo — ${graphAlg.toUpperCase()}`,
    directed: false,
    weighted: false,
    nodes: GRAPH_NODES,
    edges: GRAPH_EDGES,
    algorithm: graphAlg,
    startNodeId: "A",
    traversalOrder: TRAVERSAL_ORDERS[graphAlg],
  }), [graphAlg]);

  const treeSpec = useMemo<CsBinaryTreeSpec>(() => ({
    kind: "cs-binary-tree",
    title: `Arbol binario — recorrido ${traversal}`,
    nodes: TREE_NODES,
    traversalOrder: traversal,
    visitedSequence: TRAVERSAL_SEQ[traversal],
    isBST: true,
  }), [traversal]);

  const tools: { id: Tool; label: string }[] = [
    { id: "cs-sorting", label: "Ordenamiento" },
    { id: "cs-graph", label: "Grafos" },
    { id: "cs-binary-tree", label: "Arbol binario" },
  ];

  return (
    <div className="space-y-6 px-6 py-8">
      <div>
        <Link to="/herramientas" className="text-sm text-blue-600 hover:underline">
          &larr; Volver a herramientas
        </Link>
      </div>
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">Herramientas de Informatica</h1>
        <p className="text-sm text-slate-600">Visualiza algoritmos de ordenamiento, grafos y arboles binarios.</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {tools.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTool(t.id)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
              activeTool === t.id
                ? "border-slate-700 bg-slate-700 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTool === "cs-sorting" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Configuracion</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="space-y-1 text-sm text-slate-600">
                <span className="font-medium text-slate-700">Algoritmo</span>
                <select
                  value={sortAlg}
                  onChange={(e) => setSortAlg(e.target.value as SortAlg)}
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="bubble">Burbuja</option>
                  <option value="selection">Seleccion</option>
                  <option value="insertion">Insercion</option>
                  <option value="merge">Merge sort</option>
                  <option value="quick">Quick sort</option>
                </select>
              </label>
              <label className="space-y-1 text-sm text-slate-600">
                <span className="font-medium text-slate-700">Array (separado por comas)</span>
                <input
                  type="text"
                  value={arrayInput}
                  onChange={(e) => setArrayInput(e.target.value)}
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm font-mono"
                />
              </label>
            </div>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={sortingSpec} />
          </section>
        </div>
      )}

      {activeTool === "cs-graph" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Algoritmo de recorrido</h2>
            <select
              value={graphAlg}
              onChange={(e) => setGraphAlg(e.target.value as GraphAlg)}
              className="mt-3 rounded-md border border-slate-200 px-3 py-2 text-sm"
            >
              <option value="bfs">BFS (Anchura)</option>
              <option value="dfs">DFS (Profundidad)</option>
              <option value="dijkstra">Dijkstra</option>
              <option value="none">Sin recorrido</option>
            </select>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={graphSpec} />
          </section>
        </div>
      )}

      {activeTool === "cs-binary-tree" && (
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Tipo de recorrido</h2>
            <select
              value={traversal}
              onChange={(e) => setTraversal(e.target.value as Traversal)}
              className="mt-3 rounded-md border border-slate-200 px-3 py-2 text-sm"
            >
              <option value="inorder">Inorden (izq → raiz → der)</option>
              <option value="preorder">Preorden (raiz → izq → der)</option>
              <option value="postorder">Postorden (izq → der → raiz)</option>
              <option value="levelorder">Por niveles (BFS)</option>
            </select>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <VisualizerRenderer spec={treeSpec} />
          </section>
        </div>
      )}
    </div>
  );
}
