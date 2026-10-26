/**
 * Ítems "Herramienta" que se pueden dibujar sin pasar por la web: imágenes (enlazadas, p. ej. de Wikimedia Commons),
 * tablas, texto y diagramas de flujo. Los diagramas (flow, chart, math, shape…) siguen abriéndose en la web, que ya tiene sus renderers
 * (ver el comentario de `app/(alumno)/modulos/[id].tsx`): `docNativo` devuelve `null` en ese caso.
 * Los diagramas de flujo se dibujan con react-native-svg.
 */
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Svg, { Defs, G, Line, Marker, Path, Polygon, Rect, Circle, Text as SvgText, TSpan } from "react-native-svg";
import { colors } from "../theme/tokens";

type Bloque =
  | { id: string; type: "image"; url: string; alt: string; caption?: string }
  | { id: string; type: "table"; title?: string; headers: string[]; rows: (string | number)[][] }
  | { id: string; type: "text"; content: string }
  | { id: string; type: "flow"; title?: string; nodes: NodoFlujo[]; edges: { id: string; fromId: string; toId: string; label?: string }[] };

type NodoFlujo = { id: string; label: string; x: number; y: number; shape?: "rect" | "diamond" | "circle"; color?: string };

/** Los bloques del documento si TODOS se pueden dibujar de forma nativa; si no, `null`. */
export function docNativo(detail: string): Bloque[] | null {
  try {
    const doc = JSON.parse(detail) as { version?: number; blocks?: { type: string }[] };
    if (doc?.version !== 1 || !Array.isArray(doc.blocks) || doc.blocks.length === 0) return null;
    return doc.blocks.every((b) => b.type === "image" || b.type === "table" || b.type === "text" || b.type === "flow") ? (doc.blocks as Bloque[]) : null;
  } catch {
    return null;
  }
}

function Imagen({ url, alt, caption }: { url: string; alt: string; caption?: string }) {
  const [proporcion, setProporcion] = useState(4 / 3);
  const [fallo, setFallo] = useState(false);
  useEffect(() => {
    Image.getSize(url, (w, h) => h > 0 && setProporcion(w / h), () => setFallo(true));
  }, [url]);
  return (
    <View>
      {fallo ? (
        <Text className="text-sm text-vb-muted">No se pudo cargar la imagen: {alt}</Text>
      ) : (
        <Image
          source={{ uri: url }}
          accessibilityLabel={alt}
          style={{ width: "100%", aspectRatio: proporcion, backgroundColor: "#fff", borderRadius: 8 }}
          resizeMode="contain"
          onError={() => setFallo(true)}
        />
      )}
      {caption ? <Text className="text-xs text-vb-muted text-center mt-1">{caption}</Text> : null}
    </View>
  );
}

function Tabla({ title, headers, rows }: { title?: string; headers: string[]; rows: (string | number)[][] }) {
  return (
    <View>
      {title ? <Text className="text-sm font-semibold text-vb-text mb-1">{title}</Text> : null}
      <ScrollView horizontal showsHorizontalScrollIndicator>
        <View style={{ borderWidth: 1, borderColor: colors.border, borderRadius: 6 }}>
          {[headers, ...rows].map((fila, i) => (
            <View key={i} style={{ flexDirection: "row", backgroundColor: i === 0 ? colors.surface : undefined }}>
              {fila.map((celda, j) => (
                <Text
                  key={j}
                  style={{
                    width: 130, padding: 6, fontSize: 12, color: colors.text,
                    fontWeight: i === 0 ? "600" : "400",
                    borderTopWidth: i === 0 ? 0 : 1, borderLeftWidth: j === 0 ? 0 : 1, borderColor: colors.border,
                  }}
                >
                  {String(celda)}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// Mismo dibujo que `apps/web/src/blocks/renderers/FlowBlockRenderer.tsx` (copiado: no hay workspace compartido).
const NODE_W = 150;
const NODE_H = 52;
const PADDING = 20;

export function dividirEtiqueta(label: string, max = 22): string[] {
  const out: string[] = [];
  let cur = "";
  for (const w of label.split(/\s+/).filter(Boolean)) {
    if (cur && (cur + " " + w).length > max) {
      out.push(cur);
      cur = w;
    } else cur = cur ? cur + " " + w : w;
  }
  if (cur) out.push(cur);
  return out.length ? out : [""];
}

export function puntoEnBorde(n: NodoFlujo, hacia: { cx: number; cy: number }) {
  const cx = n.x + NODE_W / 2;
  const cy = n.y + NODE_H / 2;
  const dx = hacia.cx - cx;
  const dy = hacia.cy - cy;
  if (dx === 0 && dy === 0) return { x: cx, y: cy };
  const hw = NODE_W / 2;
  const hh = NODE_H / 2;
  let t: number;
  if (n.shape === "circle") t = Math.min(hw, hh) / Math.hypot(dx, dy);
  else if (n.shape === "diamond") t = 1 / (Math.abs(dx) / hw + Math.abs(dy) / hh);
  else t = Math.min(dx !== 0 ? hw / Math.abs(dx) : Infinity, dy !== 0 ? hh / Math.abs(dy) : Infinity);
  return { x: cx + dx * t, y: cy + dy * t };
}

function Flujo({ title, nodes, edges }: { title?: string; nodes: NodoFlujo[]; edges: { id: string; fromId: string; toId: string; label?: string }[] }) {
  const mapa = new Map(nodes.map((n) => [n.id, n]));
  const ancho = nodes.reduce((a, n) => Math.max(a, n.x), 0) + NODE_W + PADDING * 2;
  const alto = nodes.reduce((a, n) => Math.max(a, n.y), 0) + NODE_H + PADDING * 2;
  const centro = (n: NodoFlujo) => ({ cx: n.x + NODE_W / 2, cy: n.y + NODE_H / 2 });
  return (
    <View>
      {title ? <Text className="text-sm font-semibold text-vb-text mb-1">{title}</Text> : null}
      <Svg width="100%" viewBox={`${-PADDING} ${-PADDING} ${ancho} ${alto}`} style={{ aspectRatio: ancho / alto }}>
        <Defs>
          <Marker id="flecha" markerWidth={8} markerHeight={8} refX={8} refY={3} orient="auto">
            <Path d="M0,0 L0,6 L8,3 z" fill="#6b7280" />
          </Marker>
        </Defs>
        {edges.map((e) => {
          const de = mapa.get(e.fromId);
          const a = mapa.get(e.toId);
          if (!de || !a) return null;
          const p = puntoEnBorde(de, centro(a));
          const q = puntoEnBorde(a, centro(de));
          return (
            <G key={e.id}>
              <Line x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#flecha)" />
              {e.label ? (
                <SvgText x={(p.x + q.x) / 2} y={(p.y + q.y) / 2 - 4} fontSize={11} fill="#374151" textAnchor="middle" stroke="white" strokeWidth={3}>
                  {e.label}
                </SvgText>
              ) : null}
            </G>
          );
        })}
        {nodes.map((n) => {
          const { cx, cy } = centro(n);
          const fill = n.color ?? "#e0e7ff";
          const lineas = dividirEtiqueta(n.label);
          return (
            <G key={n.id}>
              {n.shape === "circle" ? (
                <Circle cx={cx} cy={cy} r={Math.min(NODE_W, NODE_H) / 2} fill={fill} stroke="#6366f1" strokeWidth={1.5} />
              ) : n.shape === "diamond" ? (
                <Polygon points={`${cx},${cy - NODE_H / 2} ${cx + NODE_W / 2},${cy} ${cx},${cy + NODE_H / 2} ${cx - NODE_W / 2},${cy}`} fill={fill} stroke="#6366f1" strokeWidth={1.5} />
              ) : (
                <Rect x={n.x} y={n.y} width={NODE_W} height={NODE_H} rx={6} fill={fill} stroke="#6366f1" strokeWidth={1.5} />
              )}
              <SvgText x={cx} y={cy} fontSize={12} fill="#1e1b4b" textAnchor="middle">
                {lineas.map((l, i) => (
                  <TSpan key={i} x={cx} y={cy + 4 + (i - (lineas.length - 1) / 2) * 14}>
                    {l}
                  </TSpan>
                ))}
              </SvgText>
            </G>
          );
        })}
      </Svg>
    </View>
  );
}

export function HerramientaNativa({ bloques }: { bloques: Bloque[] }) {
  return (
    <View style={{ gap: 10 }}>
      {bloques.map((b) =>
        b.type === "image" ? (
          <Imagen key={b.id} url={b.url} alt={b.alt} caption={b.caption} />
        ) : b.type === "table" ? (
          <Tabla key={b.id} title={b.title} headers={b.headers} rows={b.rows} />
        ) : b.type === "flow" ? (
          <Flujo key={b.id} title={b.title} nodes={b.nodes} edges={b.edges} />
        ) : (
          <Text key={b.id} className="text-sm text-vb-text">{b.content}</Text>
        ),
      )}
    </View>
  );
}
