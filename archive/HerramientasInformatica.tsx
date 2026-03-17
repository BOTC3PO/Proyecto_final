import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import VisualizerRenderer from "./visualizadores/graficos/VisualizerRenderer";
import type { CsSortingSpec, CsGraphSpec, CsBinaryTreeSpec } from "./visualizadores/types";

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

function buildSortingSpec(algorithm: SortAlg, inputArray: number[], title: string): CsSortingSpec {
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
    title: title || `Ordenamiento — ${algorithm}`,
    algorithm,
    initialArray: inputArray,
    steps,
    currentStep: 0,
    complexity: complexity[algorithm],
  };
}

// ── Graph defaults ─────────────────────────────────────────────────────────────

type GraphNodeRow = { id: string; label: string; x: number; y: number };
type GraphEdgeRow = { id: string; fromId: string; toId: string };

const DEFAULT_GRAPH_NODES: GraphNodeRow[] = [
  { id: "A", label: "A", x: 0.5, y: 0.1 },
  { id: "B", label: "B", x: 0.2, y: 0.4 },
  { id: "C", label: "C", x: 0.8, y: 0.4 },
  { id: "D", label: "D", x: 0.15, y: 0.75 },
  { id: "E", label: "E", x: 0.5, y: 0.75 },
  { id: "F", label: "F", x: 0.85, y: 0.75 },
];

const DEFAULT_GRAPH_EDGES: GraphEdgeRow[] = [
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

// ── Binary Tree defaults ─────────────────────────────────────────────────────

type TreeNodeRow = { id: string; value: number; parentId?: string; side?: "left" | "right" };

const DEFAULT_TREE_NODES: TreeNodeRow[] = [
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

  // ── Sorting state ──────────────────────────────────────────────────────────
  const [sortTitle, setSortTitle] = useState("Ordenamiento");
  const [sortAlg, setSortAlg] = useState<SortAlg>("bubble");
  const [arrayInput, setArrayInput] = useState(DEFAULT_ARRAY.join(", "));

  // ── Graph state ────────────────────────────────────────────────────────────
  const [graphTitle, setGraphTitle] = useState("Grafo");
  const [graphAlg, setGraphAlg] = useState<GraphAlg>("bfs");
  const [graphNodes, setGraphNodes] = useState<GraphNodeRow[]>(DEFAULT_GRAPH_NODES);
  const [graphEdges, setGraphEdges] = useState<GraphEdgeRow[]>(DEFAULT_GRAPH_EDGES);
  const [directed, setDirected] = useState(false);
  const [weighted, setWeighted] = useState(false);

  // ── Tree state ─────────────────────────────────────────────────────────────
  const [treeTitle, setTreeTitle] = useState("Arbol binario");
  const [traversal, setTraversal] = useState<Traversal>("inorder");
  const [treeNodes, setTreeNodes] = useState<TreeNodeRow[]>(DEFAULT_TREE_NODES);

  const inputArray = useMemo(() => {
    const parsed = arrayInput.split(",").map((s) => parseInt(s.trim(), 10)).filter((n) => !isNaN(n));
    return parsed.length > 0 ? parsed.slice(0, 10) : DEFAULT_ARRAY;
  }, [arrayInput]);

  const sortingSpec = useMemo(
    () => buildSortingSpec(sortAlg, inputArray, sortTitle),
    [sortAlg, inputArray, sortTitle],
  );

  const graphSpec = useMemo<CsGraphSpec>(() => ({
    kind: "cs-graph",
    title: graphTitle || `Grafo — ${graphAlg.toUpperCase()}`,
    directed,
    weighted,
    nodes: graphNodes,
    edges: graphEdges,
    algorithm: graphAlg,
    startNodeId: graphNodes[0]?.id ?? "A",
    traversalOrder: TRAVERSAL_ORDERS[graphAlg],
  }), [graphTitle, graphAlg, graphNodes, graphEdges, directed, weighted]);

  const treeSpec = useMemo<CsBinaryTreeSpec>(() => ({
    kind: "cs-binary-tree",
    title: treeTitle || `Arbol binario — recorrido ${traversal}`,
    nodes: treeNodes as CsBinaryTreeSpec["nodes"],
    traversalOrder: traversal,
    visitedSequence: TRAVERSAL_SEQ[traversal],
    isBST: true,
  }), [treeTitle, traversal, treeNodes]);

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

      {/* ── SORTING ── */}
      {activeTool === "cs-sorting" && (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parámetros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Título</label>
              <input
                type="text"
                value={sortTitle}
                onChange={(e) => setSortTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-slate-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Algoritmo</label>
              <select
                value={sortAlg}
                onChange={(e) => setSortAlg(e.target.value as SortAlg)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-slate-400"
              >
                <option value="bubble">Burbuja</option>
                <option value="selection">Seleccion</option>
                <option value="insertion">Insercion</option>
                <option value="merge">Merge sort</option>
                <option value="quick">Quick sort</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Array (separado por comas)</label>
              <input
                type="text"
                value={arrayInput}
                onChange={(e) => setArrayInput(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm font-mono focus:outline-none focus:border-slate-400"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                setSortTitle("Ordenamiento");
                setSortAlg("bubble");
                setArrayInput(DEFAULT_ARRAY.join(", "));
              }}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Restablecer valores
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Vista previa
            </p>
            <VisualizerRenderer spec={sortingSpec} />
          </section>
        </div>
      )}

      {/* ── GRAPH ── */}
      {activeTool === "cs-graph" && (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parámetros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Título</label>
              <input
                type="text"
                value={graphTitle}
                onChange={(e) => setGraphTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-slate-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Algoritmo de recorrido</label>
              <select
                value={graphAlg}
                onChange={(e) => setGraphAlg(e.target.value as GraphAlg)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-slate-400"
              >
                <option value="bfs">BFS (Anchura)</option>
                <option value="dfs">DFS (Profundidad)</option>
                <option value="dijkstra">Dijkstra</option>
                <option value="none">Sin recorrido</option>
              </select>
            </div>

            {/* Directed / Weighted toggles */}
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={directed}
                  onChange={(e) => setDirected(e.target.checked)}
                  className="accent-slate-700"
                />
                Dirigido
              </label>
              <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={weighted}
                  onChange={(e) => setWeighted(e.target.checked)}
                  className="accent-slate-700"
                />
                Ponderado
              </label>
            </div>

            {/* Editable nodes */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Nodos</label>
                <button
                  type="button"
                  onClick={() =>
                    setGraphNodes((prev) => [
                      ...prev,
                      { id: `N${Date.now()}`, label: `N${prev.length + 1}`, x: 0.5, y: 0.5 },
                    ])
                  }
                  className="text-xs text-slate-600 hover:underline"
                >
                  + Agregar
                </button>
              </div>
              <div className="overflow-x-auto rounded-lg border border-slate-100">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] text-slate-400 uppercase tracking-wide">
                      <th className="text-left px-2 py-1.5 font-medium">Label</th>
                      <th className="text-left px-2 py-1.5 font-medium">X</th>
                      <th className="text-left px-2 py-1.5 font-medium">Y</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {graphNodes.map((node, i) => (
                      <tr key={node.id} className="border-t border-slate-100">
                        <td className="px-1 py-0.5">
                          <input
                            className="w-full border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-slate-400"
                            value={node.label}
                            onChange={(e) =>
                              setGraphNodes((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], label: e.target.value };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <input
                            type="number" step="0.05" min={0} max={1}
                            className="w-14 border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-slate-400"
                            value={node.x}
                            onChange={(e) =>
                              setGraphNodes((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], x: Number(e.target.value) };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <input
                            type="number" step="0.05" min={0} max={1}
                            className="w-14 border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-slate-400"
                            value={node.y}
                            onChange={(e) =>
                              setGraphNodes((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], y: Number(e.target.value) };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5 text-right">
                          <button
                            type="button"
                            onClick={() => setGraphNodes((prev) => prev.filter((_, j) => j !== i))}
                            className="text-red-400 hover:text-red-600 text-sm leading-none px-1"
                          >
                            ×
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Editable edges */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Aristas</label>
                <button
                  type="button"
                  onClick={() =>
                    setGraphEdges((prev) => [
                      ...prev,
                      { id: `e${Date.now()}`, fromId: graphNodes[0]?.id ?? "", toId: graphNodes[1]?.id ?? "" },
                    ])
                  }
                  className="text-xs text-slate-600 hover:underline"
                >
                  + Agregar
                </button>
              </div>
              <div className="overflow-x-auto rounded-lg border border-slate-100">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] text-slate-400 uppercase tracking-wide">
                      <th className="text-left px-2 py-1.5 font-medium">Desde</th>
                      <th className="text-left px-2 py-1.5 font-medium">Hasta</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {graphEdges.map((edge, i) => (
                      <tr key={edge.id} className="border-t border-slate-100">
                        <td className="px-1 py-0.5">
                          <input
                            className="w-full border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-slate-400"
                            value={edge.fromId}
                            onChange={(e) =>
                              setGraphEdges((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], fromId: e.target.value };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <input
                            className="w-full border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-slate-400"
                            value={edge.toId}
                            onChange={(e) =>
                              setGraphEdges((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], toId: e.target.value };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5 text-right">
                          <button
                            type="button"
                            onClick={() => setGraphEdges((prev) => prev.filter((_, j) => j !== i))}
                            className="text-red-400 hover:text-red-600 text-sm leading-none px-1"
                          >
                            ×
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                type="button"
                onClick={() => {
                  setGraphNodes(DEFAULT_GRAPH_NODES);
                  setGraphEdges(DEFAULT_GRAPH_EDGES);
                  setDirected(false);
                  setWeighted(false);
                  setGraphTitle("Grafo");
                }}
                className="text-xs text-slate-400 hover:text-slate-600"
              >
                Restablecer datos
              </button>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Vista previa
            </p>
            <VisualizerRenderer spec={graphSpec} />
          </section>
        </div>
      )}

      {/* ── BINARY TREE ── */}
      {activeTool === "cs-binary-tree" && (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-base font-semibold text-slate-800">Parámetros</h2>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Título</label>
              <input
                type="text"
                value={treeTitle}
                onChange={(e) => setTreeTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-slate-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-600">Tipo de recorrido</label>
              <select
                value={traversal}
                onChange={(e) => setTraversal(e.target.value as Traversal)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-slate-400"
              >
                <option value="inorder">Inorden (izq → raiz → der)</option>
                <option value="preorder">Preorden (raiz → izq → der)</option>
                <option value="postorder">Postorden (izq → der → raiz)</option>
                <option value="levelorder">Por niveles (BFS)</option>
              </select>
            </div>

            {/* Editable tree nodes */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">Nodos</label>
                <button
                  type="button"
                  onClick={() =>
                    setTreeNodes((prev) => [
                      ...prev,
                      { id: `n${Date.now()}`, value: 0, parentId: prev[prev.length - 1]?.id, side: "left" as const },
                    ])
                  }
                  className="text-xs text-slate-600 hover:underline"
                >
                  + Agregar
                </button>
              </div>
              <div className="overflow-x-auto rounded-lg border border-slate-100">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] text-slate-400 uppercase tracking-wide">
                      <th className="text-left px-2 py-1.5 font-medium">ID</th>
                      <th className="text-left px-2 py-1.5 font-medium">Valor</th>
                      <th className="text-left px-2 py-1.5 font-medium">Padre</th>
                      <th className="text-left px-2 py-1.5 font-medium">Lado</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {treeNodes.map((node, i) => (
                      <tr key={node.id} className="border-t border-slate-100">
                        <td className="px-1 py-0.5">
                          <span className="text-[10px] text-slate-400 font-mono">{node.id}</span>
                        </td>
                        <td className="px-1 py-0.5">
                          <input
                            type="number"
                            className="w-14 border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-slate-400"
                            value={node.value}
                            onChange={(e) =>
                              setTreeNodes((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], value: Number(e.target.value) };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <input
                            className="w-12 border border-slate-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:border-slate-400"
                            value={node.parentId ?? ""}
                            placeholder="—"
                            onChange={(e) =>
                              setTreeNodes((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], parentId: e.target.value || undefined };
                                return n;
                              })
                            }
                          />
                        </td>
                        <td className="px-1 py-0.5">
                          <select
                            className="w-14 border border-slate-200 rounded px-1 py-0.5 text-xs focus:outline-none focus:border-slate-400"
                            value={node.side ?? ""}
                            onChange={(e) =>
                              setTreeNodes((prev) => {
                                const n = [...prev];
                                n[i] = { ...n[i], side: (e.target.value || undefined) as "left" | "right" | undefined };
                                return n;
                              })
                            }
                          >
                            <option value="">—</option>
                            <option value="left">Izq</option>
                            <option value="right">Der</option>
                          </select>
                        </td>
                        <td className="px-1 py-0.5 text-right">
                          <button
                            type="button"
                            onClick={() => setTreeNodes((prev) => prev.filter((_, j) => j !== i))}
                            className="text-red-400 hover:text-red-600 text-sm leading-none px-1"
                          >
                            ×
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                type="button"
                onClick={() => {
                  setTreeNodes(DEFAULT_TREE_NODES);
                  setTreeTitle("Arbol binario");
                  setTraversal("inorder");
                }}
                className="text-xs text-slate-400 hover:text-slate-600"
              >
                Restablecer datos
              </button>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Vista previa
            </p>
            <VisualizerRenderer spec={treeSpec} />
          </section>
        </div>
      )}
    </div>
  );
}
