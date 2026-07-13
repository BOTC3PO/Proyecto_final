import { useEffect, useState, useId, type CSSProperties } from "react";
import type { Plantilla } from "@vb/vblang";
import { Button, Checkbox, Field, Input, Select } from "../../ui";
import FieldGroup from "../FieldGroup";
import BufferedText from "../BufferedText";
import {
  readVisualRaw,
  writeVisualRaw,
  readVisualKind,
} from "../../components/vblang/plantillaAst";
import {
  readStaticImage,
  writeStaticImage,
  removeVisual,
} from "../../components/vblang/plantillaFields";
import { uploadPng } from "../../components/vblang/mediaApi";
import { apiGet } from "../../lib/api";

export type VisualFieldProps = {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
  uploadImage?: (file: Blob) => Promise<string>;
};

const VISUAL_KIND_OPTS: { value: string; label: string }[] = [
  { value: "", label: "Ninguno" },
  { value: "static-image", label: "Imagen (PNG)" },
  { value: "line-chart", label: "Gráfico de líneas" },
  { value: "timeline", label: "Línea de tiempo" },
  { value: "latex", label: "Fórmula (LaTeX)" },
  { value: "vector-diagram", label: "Diagrama de vectores" },
  { value: "circuit", label: "Circuito eléctrico" },
];

const KNOWN_KINDS = new Set(VISUAL_KIND_OPTS.map((o) => o.value).filter(Boolean));

function seedVisual(kind: string): Record<string, unknown> {
  switch (kind) {
    case "line-chart":
      return {
        kind: "line-chart",
        title: "",
        series: [{ id: "s1", label: "Serie 1", points: [{ x: 0, y: 0 }, { x: 1, y: 1 }] }],
      };
    case "timeline":
      return { kind: "timeline", title: "", events: [{ id: "e1", title: "Evento 1", date: "2000" }] };
    case "latex":
      return { kind: "latex", content: "x^2 + y^2 = z^2", displayMode: true };
    case "vector-diagram":
      return { kind: "vector-diagram", vectors: [{ id: "v1", label: "Vector 1", dx: 1, dy: 0 }] };
    case "circuit":
      return { kind: "circuit", elements: [{ id: "r1", type: "resistor", value: 100, unit: "Ω" }] };
    default:
      return { kind };
  }
}

/* ---- styles ---- */

const colStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-2)",
};

const rowStyle: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "var(--space-2)",
};

const hintStyle: CSSProperties = {
  fontSize: "var(--text-xs)",
  color: "var(--c-hint)",
  margin: "var(--space-0)",
};

const listStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-2)",
  margin: "var(--space-0)",
  padding: "var(--space-0)",
  listStyle: "none",
};

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "var(--space-2)",
};

/* ---- sub-editors ---- */

function VisualPngEditor({
  plantilla,
  onChange,
  uploadImage,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
  uploadImage: (file: Blob) => Promise<string>;
}) {
  const current = readStaticImage(plantilla);
  const imagenCargada = !!current && current.src.trim() !== "";
  const [src, setSrc] = useState(current?.src ?? "");
  const [alt, setAlt] = useState(current?.alt ?? "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onFile = async (file: File | undefined) => {
    if (!file) return;
    setError(null);
    setUploading(true);
    try {
      const url = await uploadImage(file);
      setSrc(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo subir la imagen");
    } finally {
      setUploading(false);
    }
  };

  const canInsert = src.trim() !== "" && alt.trim() !== "";

  return (
    <div style={colStyle}>
      <input
        type="file"
        accept="image/png"
        aria-label="Subir imagen PNG"
        onChange={(e) => void onFile(e.target.files?.[0])}
        style={{ fontSize: "var(--text-xs)" }}
      />
      {uploading && <span style={hintStyle}>Subiendo…</span>}
      {error && (
        <span role="alert" style={{ ...hintStyle, color: "var(--c-danger)" }}>
          {error}
        </span>
      )}
      {src && (
        <span style={{ ...hintStyle, wordBreak: "break-all" }}>Archivo: {src}</span>
      )}
      <Field
        label="Texto alternativo (alt) — obligatorio"
        error={alt.trim() === "" ? "El alt es obligatorio para insertar la imagen." : undefined}
        required
      >
        <Input
          value={alt}
          onChange={(e) => setAlt(e.target.value)}
          placeholder="Describí la imagen para lectores de pantalla"
        />
      </Field>
      <div style={rowStyle}>
        <Button
          variant="primary"
          size="sm"
          disabled={!canInsert}
          onClick={() => onChange(writeStaticImage(plantilla, { src, alt }))}
        >
          {imagenCargada ? "Actualizar imagen" : "Insertar imagen"}
        </Button>
        {imagenCargada && (
          <Button
            variant="danger"
            size="sm"
            onClick={() => onChange(removeVisual(plantilla))}
          >
            Quitar imagen
          </Button>
        )}
      </div>
    </div>
  );
}

/** PLAN-E §19 — picker del banco de fórmulas (globales + escuela + mías). */
interface FormulaBancoItem {
  id: string;
  nombre: string;
  materia?: string;
  latex: string;
}

function BancoFormulasPicker({ onPick }: { onPick: (latex: string) => void }) {
  const [items, setItems] = useState<FormulaBancoItem[]>([]);
  useEffect(() => {
    apiGet<{ items: FormulaBancoItem[] }>("/api/formulas")
      .then((r) => setItems(r.items))
      .catch(() => {
        // sin banco (offline, sin permisos): el picker simplemente no aparece
      });
  }, []);
  if (items.length === 0) return null;

  const porMateria = new Map<string, FormulaBancoItem[]>();
  for (const f of items) {
    const key = f.materia ?? "Otras";
    porMateria.set(key, [...(porMateria.get(key) ?? []), f]);
  }
  return (
    <Field label="Insertar del banco de fórmulas">
      <Select
        value=""
        onChange={(e) => {
          const elegida = items.find((f) => f.id === e.target.value);
          if (elegida) onPick(elegida.latex);
        }}
        data-testid="banco-formulas-picker"
      >
        <option value="">Elegí una fórmula…</option>
        {[...porMateria.entries()].map(([materia, fs]) => (
          <optgroup key={materia} label={materia}>
            {fs.map((f) => (
              <option key={f.id} value={f.id}>
                {f.nombre}
              </option>
            ))}
          </optgroup>
        ))}
      </Select>
    </Field>
  );
}

function LatexEditor({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const raw = readVisualRaw(plantilla) ?? {};
  const content = typeof raw.content === "string" ? raw.content : "";
  const displayMode = raw.displayMode !== false;
  const patch = (next: Record<string, unknown>) =>
    onChange(writeVisualRaw(plantilla, { kind: "latex", content, displayMode, ...next }));

  return (
    <div style={colStyle}>
      <BancoFormulasPicker onPick={(latex) => patch({ content: latex })} />
      <BufferedText
        label="Fórmula (LaTeX)"
        help="Sintaxis KaTeX, ej.: \frac{a}{b} = c^2"
        multiline
        value={content}
        commit={(text) => {
          patch({ content: text });
          return true;
        }}
      />
      <Checkbox
        checked={displayMode}
        onChange={(e) => patch({ displayMode: (e.target as HTMLInputElement).checked })}
        label="Modo display (centrado, tamaño grande)"
      />
    </div>
  );
}

/* ---- line-chart ---- */

interface SerieRow { id: string; label: string; puntos: string }

function parsePuntos(texto: string): { x: number; y: number }[] {
  const out: { x: number; y: number }[] = [];
  for (const linea of texto.split("\n")) {
    const m = linea.trim();
    if (m === "") continue;
    const [xs, ys] = m.split(/[,;\s]+/);
    const x = Number(xs);
    const y = Number(ys);
    if (Number.isFinite(x) && Number.isFinite(y)) out.push({ x, y });
  }
  return out;
}

function puntosToTexto(points: { x: number; y: number }[]): string {
  return points.map((p) => `${p.x}, ${p.y}`).join("\n");
}

function LineChartEditor({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const raw = readVisualRaw(plantilla) ?? {};
  const title = typeof raw.title === "string" ? raw.title : "";
  const xLabel = typeof raw.xLabel === "string" ? raw.xLabel : "";
  const yLabel = typeof raw.yLabel === "string" ? raw.yLabel : "";
  const seriesRaw = Array.isArray(raw.series) ? (raw.series as Record<string, unknown>[]) : [];

  const rows: SerieRow[] = seriesRaw.map((s, i) => ({
    id: typeof s.id === "string" ? s.id : `s${i + 1}`,
    label: typeof s.label === "string" ? s.label : `Serie ${i + 1}`,
    puntos: puntosToTexto(
      Array.isArray(s.points)
        ? (s.points as Record<string, unknown>[])
            .map((p) => ({ x: Number(p.x), y: Number(p.y) }))
            .filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y))
        : [],
    ),
  }));

  const write = (nextTitle: string, nextX: string, nextY: string, nextRows: SerieRow[]) => {
    const series = nextRows.map((r) => ({
      id: r.id,
      label: r.label,
      points: parsePuntos(r.puntos),
    }));
    const obj: Record<string, unknown> = { kind: "line-chart" };
    if (nextTitle.trim() !== "") obj.title = nextTitle;
    if (nextX.trim() !== "") obj.xLabel = nextX;
    if (nextY.trim() !== "") obj.yLabel = nextY;
    obj.series = series;
    onChange(writeVisualRaw(plantilla, obj));
  };

  return (
    <div style={colStyle}>
      <BufferedText
        label="Título del gráfico"
        value={title}
        commit={(t) => { write(t, xLabel, yLabel, rows); return true; }}
      />
      <div style={gridStyle}>
        <BufferedText
          label="Eje X"
          value={xLabel}
          commit={(t) => { write(title, t, yLabel, rows); return true; }}
        />
        <BufferedText
          label="Eje Y"
          value={yLabel}
          commit={(t) => { write(title, xLabel, t, rows); return true; }}
        />
      </div>
      <FieldGroup label="Series">
        <ul style={listStyle}>
          {rows.map((item, idx) => (
            <li key={item.id} style={rowStyle}>
              <div style={{ ...colStyle, flex: 1 }}>
                <Input
                  size="sm"
                  aria-label={`Nombre de la serie ${idx + 1}`}
                  value={item.label}
                  onChange={(e) => {
                    const next = rows.slice();
                    next[idx] = { ...item, label: e.target.value };
                    write(title, xLabel, yLabel, next);
                  }}
                  placeholder="Nombre de la serie"
                />
                <textarea
                  aria-label={`Puntos de la serie ${idx + 1}`}
                  value={item.puntos}
                  onChange={(e) => {
                    const next = rows.slice();
                    next[idx] = { ...item, puntos: e.target.value };
                    write(title, xLabel, yLabel, next);
                  }}
                  rows={3}
                  placeholder={"Un punto por línea: x, y\nej.: 0, 1"}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    padding: "var(--space-2)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "var(--c-border-strong)",
                    borderRadius: "var(--r-md)",
                    background: "var(--c-surface)",
                    color: "var(--c-text)",
                    resize: "vertical",
                  }}
                />
              </div>
              <Button
                variant="danger"
                size="sm"
                aria-label={`Eliminar serie ${idx + 1}`}
                disabled={rows.length <= 1}
                onClick={() => {
                  write(title, xLabel, yLabel, rows.filter((_, i) => i !== idx));
                }}
              >
                Eliminar
              </Button>
            </li>
          ))}
        </ul>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            const next = [
              ...rows,
              { id: `s${rows.length + 1}`, label: `Serie ${rows.length + 1}`, puntos: "0, 0\n1, 1" },
            ];
            write(title, xLabel, yLabel, next);
          }}
        >
          + Agregar serie
        </Button>
      </FieldGroup>
    </div>
  );
}

/* ---- timeline ---- */

interface EventoRow { id: string; title: string; date: string; description: string }

function TimelineEditor({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const raw = readVisualRaw(plantilla) ?? {};
  const title = typeof raw.title === "string" ? raw.title : "";
  const eventsRaw = Array.isArray(raw.events) ? (raw.events as Record<string, unknown>[]) : [];

  const rows: EventoRow[] = eventsRaw.map((e, i) => ({
    id: typeof e.id === "string" ? e.id : `e${i + 1}`,
    title: typeof e.title === "string" ? e.title : "",
    date: typeof e.date === "string" ? e.date : "",
    description: typeof e.description === "string" ? e.description : "",
  }));

  const write = (nextTitle: string, nextRows: EventoRow[]) => {
    const events = nextRows.map((r) => {
      const ev: Record<string, unknown> = { id: r.id, title: r.title, date: r.date };
      if (r.description.trim() !== "") ev.description = r.description;
      return ev;
    });
    const obj: Record<string, unknown> = { kind: "timeline" };
    if (nextTitle.trim() !== "") obj.title = nextTitle;
    obj.events = events;
    onChange(writeVisualRaw(plantilla, obj));
  };

  return (
    <div style={colStyle}>
      <BufferedText
        label="Título de la línea de tiempo"
        value={title}
        commit={(t) => { write(t, rows); return true; }}
      />
      <p style={hintStyle}>
        Cargá los eventos a mano. (También podés alimentarla desde el dataset{" "}
        <code>eventos_historicos</code> editando en modo Código.)
      </p>
      <FieldGroup label="Eventos">
        <ul style={listStyle}>
          {rows.map((item, idx) => (
            <li key={item.id} style={rowStyle}>
              <div style={{ ...colStyle, flex: 1 }}>
                <div style={{ display: "flex", gap: "var(--space-2)" }}>
                  <Input
                    size="sm"
                    aria-label={`Título del evento ${idx + 1}`}
                    value={item.title}
                    onChange={(e) => {
                      const next = rows.slice();
                      next[idx] = { ...item, title: e.target.value };
                      write(title, next);
                    }}
                    placeholder="Título"
                    style={{ flex: 1 }}
                  />
                  <Input
                    size="sm"
                    aria-label={`Fecha del evento ${idx + 1}`}
                    value={item.date}
                    onChange={(e) => {
                      const next = rows.slice();
                      next[idx] = { ...item, date: e.target.value };
                      write(title, next);
                    }}
                    placeholder="Fecha (ej.: 1816)"
                    style={{ width: "8rem" }}
                  />
                </div>
                <Input
                  size="sm"
                  aria-label={`Descripción del evento ${idx + 1}`}
                  value={item.description}
                  onChange={(e) => {
                    const next = rows.slice();
                    next[idx] = { ...item, description: e.target.value };
                    write(title, next);
                  }}
                  placeholder="Descripción (opcional)"
                />
              </div>
              <Button
                variant="danger"
                size="sm"
                aria-label={`Eliminar evento ${idx + 1}`}
                disabled={rows.length <= 1}
                onClick={() => write(title, rows.filter((_, i) => i !== idx))}
              >
                Eliminar
              </Button>
            </li>
          ))}
        </ul>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            write(title, [
              ...rows,
              { id: `e${rows.length + 1}`, title: "Nuevo evento", date: "", description: "" },
            ]);
          }}
        >
          + Agregar evento
        </Button>
      </FieldGroup>
    </div>
  );
}

/* ---- vector-diagram ---- */

interface VectorRow { id: string; label: string; componentes: string; color: string }

/* PLAN-E §8 — el color por vector se auto-asigna por índice (rotando esta
   paleta) en vez de un `<input type="color">` manual: el campo `color`
   sigue viviendo en el AST (compatibilidad con plantillas guardadas), sólo
   se retira el control de la UI. */
const VECTOR_PALETTE = ["#2563eb", "#dc2626", "#16a34a", "#d97706", "#7c3aed", "#0891b2"];

function parseComponentes(texto: string): { dx: number; dy: number } | null {
  const parts = texto.split(/[,;\s]+/).map((s) => s.trim()).filter((s) => s !== "");
  if (parts.length !== 2) return null;
  const dx = Number(parts[0]);
  const dy = Number(parts[1]);
  if (!Number.isFinite(dx) || !Number.isFinite(dy)) return null;
  return { dx, dy };
}

function componentesToTexto(c: { dx: number; dy: number }): string {
  return `${c.dx}, ${c.dy}`;
}

function VectorDiagramEditor({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const raw = readVisualRaw(plantilla) ?? {};
  const vectorsRaw = Array.isArray(raw.vectors) ? (raw.vectors as Record<string, unknown>[]) : [];
  const rows: VectorRow[] = vectorsRaw.map((v, i) => ({
    id: typeof v.id === "string" ? v.id : `v${i + 1}`,
    label: typeof v.label === "string" ? v.label : `Vector ${i + 1}`,
    componentes: componentesToTexto({
      dx: Number(v.dx) || 0,
      dy: Number(v.dy) || 0,
    }),
    color: typeof v.color === "string" ? v.color : "#2563eb",
  }));

  const write = (nextRows: VectorRow[]) => {
    const vectors = nextRows.map((r) => {
      const parsed = parseComponentes(r.componentes) ?? { dx: 0, dy: 0 };
      return { id: r.id, label: r.label, dx: parsed.dx, dy: parsed.dy, color: r.color };
    });
    onChange(writeVisualRaw(plantilla, { kind: "vector-diagram", vectors }));
  };

  return (
    <div style={colStyle}>
      <p style={hintStyle}>
        Diagrama de vectores con componentes (dx, dy) en el plano.
      </p>
      <FieldGroup label="Vectores">
        <ul style={listStyle}>
          {rows.map((item, idx) => (
            <li key={item.id} style={rowStyle}>
              <div style={{ ...colStyle, flex: 1 }}>
                <div style={{ display: "flex", gap: "var(--space-2)" }}>
                  <Input
                    size="sm"
                    aria-label={`Etiqueta del vector ${idx + 1}`}
                    value={item.label}
                    onChange={(e) => {
                      const next = rows.slice();
                      next[idx] = { ...item, label: e.target.value };
                      write(next);
                    }}
                    placeholder="Etiqueta"
                    style={{ flex: 1 }}
                  />
                </div>
                <Input
                  size="sm"
                  aria-label={`Componentes (dx, dy) del vector ${idx + 1}`}
                  value={item.componentes}
                  onChange={(e) => {
                    const next = rows.slice();
                    next[idx] = { ...item, componentes: e.target.value };
                    write(next);
                  }}
                  placeholder="dx, dy (ej.: 3, 4)"
                  style={{ fontFamily: "var(--font-mono)" }}
                />
              </div>
              <Button
                variant="danger"
                size="sm"
                aria-label={`Eliminar vector ${idx + 1}`}
                disabled={rows.length <= 1}
                onClick={() => write(rows.filter((_, i) => i !== idx))}
              >
                Eliminar
              </Button>
            </li>
          ))}
        </ul>
        <Button
          variant="ghost"
          size="sm"
          onClick={() =>
            write([
              ...rows,
              {
                id: `v${rows.length + 1}`,
                label: `Vector ${rows.length + 1}`,
                componentes: "1, 0",
                color: VECTOR_PALETTE[rows.length % VECTOR_PALETTE.length],
              },
            ])
          }
        >
          + Agregar vector
        </Button>
      </FieldGroup>
    </div>
  );
}

/* ---- circuit ---- */

interface ElementoRow { id: string; type: string; value: string; unit: string }

function CircuitEditor({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const raw = readVisualRaw(plantilla) ?? {};
  const elementsRaw = Array.isArray(raw.elements) ? (raw.elements as Record<string, unknown>[]) : [];
  const rows: ElementoRow[] = elementsRaw.map((e, i) => ({
    id: typeof e.id === "string" ? e.id : `e${i + 1}`,
    type: typeof e.type === "string" ? e.type : "resistor",
    value: e.value != null ? String(e.value) : "",
    unit: typeof e.unit === "string" ? e.unit : "",
  }));

  const write = (nextRows: ElementoRow[]) => {
    const elements = nextRows.map((r) => {
      const obj: Record<string, unknown> = { id: r.id, type: r.type };
      const v = Number(r.value);
      if (r.value.trim() !== "" && Number.isFinite(v)) obj.value = v;
      if (r.unit.trim() !== "") obj.unit = r.unit;
      return obj;
    });
    onChange(writeVisualRaw(plantilla, { kind: "circuit", elements }));
  };

  return (
    <div style={colStyle}>
      <p style={hintStyle}>
        Circuito eléctrico: cada elemento tiene un tipo, valor y unidad.
      </p>
      <FieldGroup label="Elementos">
        <ul style={listStyle}>
          {rows.map((item, idx) => (
            <li key={item.id} style={rowStyle}>
              <div style={{ ...colStyle, flex: 1 }}>
                <div style={{ display: "flex", gap: "var(--space-2)" }}>
                  <Input
                    size="sm"
                    aria-label={`Tipo del elemento ${idx + 1}`}
                    value={item.type}
                    onChange={(e) => {
                      const next = rows.slice();
                      next[idx] = { ...item, type: e.target.value };
                      write(next);
                    }}
                    placeholder="tipo (resistor, capacitor, …)"
                    style={{ flex: 1 }}
                  />
                  <Input
                    size="sm"
                    aria-label={`Valor del elemento ${idx + 1}`}
                    value={item.value}
                    onChange={(e) => {
                      const next = rows.slice();
                      next[idx] = { ...item, value: e.target.value };
                      write(next);
                    }}
                    placeholder="valor"
                    style={{ width: "6rem", fontFamily: "var(--font-mono)" }}
                  />
                  <Input
                    size="sm"
                    aria-label={`Unidad del elemento ${idx + 1}`}
                    value={item.unit}
                    onChange={(e) => {
                      const next = rows.slice();
                      next[idx] = { ...item, unit: e.target.value };
                      write(next);
                    }}
                    placeholder="unidad"
                    style={{ width: "5rem" }}
                  />
                </div>
              </div>
              <Button
                variant="danger"
                size="sm"
                aria-label={`Eliminar elemento ${idx + 1}`}
                disabled={rows.length <= 1}
                onClick={() => write(rows.filter((_, i) => i !== idx))}
              >
                Eliminar
              </Button>
            </li>
          ))}
        </ul>
        <Button
          variant="ghost"
          size="sm"
          onClick={() =>
            write([
              ...rows,
              { id: `e${rows.length + 1}`, type: "resistor", value: "100", unit: "Ω" },
            ])
          }
        >
          + Agregar elemento
        </Button>
      </FieldGroup>
    </div>
  );
}

/* ---- main VisualField dispatcher ---- */

export default function VisualField({
  plantilla,
  onChange,
  uploadImage = uploadPng,
}: VisualFieldProps) {
  const kind = readVisualKind(plantilla);
  const selectId = useId();

  const cambiarKind = (next: string) => {
    if (next === kind) return;
    if (next === "") {
      onChange(removeVisual(plantilla));
      return;
    }
    if (next === "static-image") {
      onChange(writeStaticImage(plantilla, { src: "", alt: "" }));
      return;
    }
    onChange(writeVisualRaw(plantilla, seedVisual(next)));
  };

  const opts =
    kind && !KNOWN_KINDS.has(kind)
      ? [...VISUAL_KIND_OPTS, { value: kind, label: `${kind} (modo Código)` }]
      : VISUAL_KIND_OPTS;

  return (
    <div style={colStyle}>
      <Field label="Tipo de visual" id={selectId}>
        <Select
          value={kind ?? ""}
          onChange={(e) => cambiarKind(e.target.value)}
        >
          {opts.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>
      </Field>

      {kind === "static-image" && (
        <VisualPngEditor
          plantilla={plantilla}
          onChange={onChange}
          uploadImage={uploadImage}
        />
      )}
      {kind === "line-chart" && (
        <LineChartEditor plantilla={plantilla} onChange={onChange} />
      )}
      {kind === "timeline" && (
        <TimelineEditor plantilla={plantilla} onChange={onChange} />
      )}
      {kind === "latex" && (
        <LatexEditor plantilla={plantilla} onChange={onChange} />
      )}
      {kind === "vector-diagram" && (
        <VectorDiagramEditor plantilla={plantilla} onChange={onChange} />
      )}
      {kind === "circuit" && (
        <CircuitEditor plantilla={plantilla} onChange={onChange} />
      )}
      {kind && !KNOWN_KINDS.has(kind) && (
        <p style={{ ...hintStyle, fontStyle: "italic" }}>
          El visual <code>{kind}</code> se renderiza pero se edita desde el modo
          Código. Se preserva tal cual.
        </p>
      )}
    </div>
  );
}
