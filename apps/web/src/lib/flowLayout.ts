/**
 * Layout compartido para diagramas de flujo de módulos (BFS por profundidad
 * desde los nodos sin prerrequisitos, distribución en columnas). Extraído de
 * `AulaFlowMap.tsx` para reusarlo también en el mapa de dependencias del
 * editor de módulos — misma matemática de posicionamiento, distinta capa
 * visual encima (AulaFlowMap pinta estado de progreso/candado; el mapa de
 * dependencias pinta "ya agregado como dependencia" / "es este módulo").
 */

export type FlowPosition = { x: number; y: number };

export type FlowNode = { id: string };
export type FlowLink = { sourceId: string; targetId: string };

export const FLOW_NODE_WIDTH = 220;
export const FLOW_NODE_HEIGHT = 120;
export const FLOW_LEVEL_GAP = 260;
export const FLOW_ROW_GAP = 140;
export const FLOW_SIDE_PADDING = 60;
export const FLOW_TOP_PADDING = 50;

export function computeFlowLayout<TNode extends FlowNode, TLink extends FlowLink>(
  nodos: TNode[],
  links: TLink[],
) {
  const positions = new Map<string, FlowPosition>();
  const incomingCounts = new Map(nodos.map((n) => [n.id, 0]));
  const outgoing = new Map<string, string[]>();

  links.forEach((link) => {
    if (!incomingCounts.has(link.targetId) || !incomingCounts.has(link.sourceId)) return;
    incomingCounts.set(link.targetId, (incomingCounts.get(link.targetId) ?? 0) + 1);
    const existing = outgoing.get(link.sourceId) ?? [];
    existing.push(link.targetId);
    outgoing.set(link.sourceId, existing);
  });

  const depthMap = new Map<string, number>();
  const queue: Array<{ id: string; depth: number }> = [];
  nodos.filter((n) => (incomingCounts.get(n.id) ?? 0) === 0).forEach((n) => {
    depthMap.set(n.id, 0);
    queue.push({ id: n.id, depth: 0 });
  });
  if (queue.length === 0 && nodos.length > 0) {
    depthMap.set(nodos[0].id, 0);
    queue.push({ id: nodos[0].id, depth: 0 });
  }

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current) continue;
    (outgoing.get(current.id) ?? []).forEach((neighborId) => {
      const nextDepth = current.depth + 1;
      if (!depthMap.has(neighborId) || (depthMap.get(neighborId) ?? 0) > nextDepth) {
        depthMap.set(neighborId, nextDepth);
        queue.push({ id: neighborId, depth: nextDepth });
      }
    });
  }

  let maxDepth = 0;
  const levelMap = new Map<number, TNode[]>();
  nodos.forEach((n) => {
    const depth = depthMap.get(n.id) ?? 0;
    maxDepth = Math.max(maxDepth, depth);
    const bucket = levelMap.get(depth) ?? [];
    bucket.push(n);
    levelMap.set(depth, bucket);
  });

  const maxNodes = Math.max(1, ...Array.from(levelMap.values()).map((g) => g.length));
  const width = FLOW_SIDE_PADDING * 2 + maxDepth * FLOW_LEVEL_GAP + FLOW_NODE_WIDTH;
  const height = FLOW_TOP_PADDING * 2 + (maxNodes - 1) * FLOW_ROW_GAP + FLOW_NODE_HEIGHT;

  levelMap.forEach((levelNodes, depth) => {
    const offset = (maxNodes - levelNodes.length) * FLOW_ROW_GAP * 0.5;
    levelNodes.forEach((n, index) => {
      positions.set(n.id, {
        x: FLOW_SIDE_PADDING + depth * FLOW_LEVEL_GAP,
        y: FLOW_TOP_PADDING + offset + index * FLOW_ROW_GAP,
      });
    });
  });

  return { positions, width, height };
}
