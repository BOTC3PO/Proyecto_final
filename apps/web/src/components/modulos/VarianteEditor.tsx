/**
 * WO-2 / F4-03 — Editor de una variante, montado por `PosicionesCanvas` vía
 * `renderVarianteEditor(posicion, variante)`.
 *
 * Una variante sale de uno de tres orígenes (mezclables dentro de una posición):
 *  - `banco`: referencia a una pregunta manual ya cargada en el quiz.
 *  - `plantilla`: plantilla VBLang — acá se MONTA el editor de pregunta de WO-1
 *    (`PlantillaEditorSchema`) para autorarla en la misma pantalla.
 *  - `generador`: generador nativo paramétrico (reusa `GeneradorPicker`).
 *
 * Este componente NO toca el editor interno de pregunta (WO-1): sólo lo monta.
 * La edición de la plantilla persiste contra la API de plantillas (carga por id,
 * guarda el DSL). El cambio de origen / id de la variante se propaga al host vía
 * `onChangeOrigen`, que reescribe el `VarianteOrigen` en el cuestionario.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { parse, serialize, type Plantilla } from "@vb/vblang";
import type {
  Posicion,
  Variante,
  VarianteOrigen,
} from "../../domain/quiz/posiciones";
import type { PlantillaListItem } from "../../domain/vblang/plantilla.types";
import {
  getPlantilla as getPlantillaApi,
  updatePlantilla as updatePlantillaApi,
} from "../../domain/vblang/plantillaApi";
import PlantillaEditorSchema from "../vblang/PlantillaEditorSchema";
import PlantillaSelectorModal from "../vblang/PlantillaSelectorModal";
import GeneradorPicker from "../vblang/GeneradorPicker";

/** Pregunta del banco del quiz (id + enunciado) para el selector de origen `banco`. */
export interface BancoQuestion {
  id: string;
  prompt: string;
}

/** Cargadores inyectables (test): por defecto pegan a la API real de plantillas. */
export interface PlantillaIO {
  load: (id: string) => Promise<{ codigoDsl: string; version: number }>;
  save: (id: string, codigoDsl: string) => Promise<void>;
}

const DEFAULT_PLANTILLA_IO: PlantillaIO = {
  load: async (id) => {
    const p = await getPlantillaApi(id);
    return { codigoDsl: p.codigoDsl, version: p.version };
  },
  save: async (id, codigoDsl) => {
    await updatePlantillaApi(id, { codigoDsl });
  },
};

type OrigenKind = VarianteOrigen["origen"];

interface Props {
  posicion: Posicion;
  variante: Variante;
  /** Preguntas manuales del quiz, para el origen `banco`. */
  bancoQuestions: BancoQuestion[];
  /** Propaga el nuevo origen de esta variante al cuestionario. */
  onChangeOrigen: (origen: VarianteOrigen) => void;
  /** Materia del módulo, para filtrar el selector de plantillas. */
  materiaHint?: string;
  /** A dónde vuelve "Crear plantilla" desde el selector. */
  returnTo?: string;
  /** Inyectable para tests; por defecto usa `plantillaApi`. */
  plantillaIO?: PlantillaIO;
}

/** Construye un origen "vacío" del tipo pedido, preservando ids ya cargados. */
function origenDeTipo(kind: OrigenKind, prev: VarianteOrigen): VarianteOrigen {
  switch (kind) {
    case "banco":
      return {
        origen: "banco",
        questionId: prev.origen === "banco" ? prev.questionId : "",
      };
    case "plantilla":
      return prev.origen === "plantilla"
        ? prev
        : { origen: "plantilla", plantillaId: "" };
    case "generador":
      return prev.origen === "generador"
        ? prev
        : { origen: "generador", generatorId: "" };
  }
}

const ORIGEN_LABEL: Record<OrigenKind, string> = {
  banco: "Banco (pregunta manual)",
  plantilla: "Plantilla VBLang",
  generador: "Generador",
};

export default function VarianteEditor({
  posicion,
  variante,
  bancoQuestions,
  onChangeOrigen,
  materiaHint,
  returnTo,
  plantillaIO = DEFAULT_PLANTILLA_IO,
}: Props) {
  const origen = variante.origen;
  const selectId = `variante-${posicion.numero}-${variante.letra}-origen`;

  return (
    <div className="space-y-2 rounded-md border border-[var(--c-border)] bg-[var(--c-surface-1)] p-2">
      <label className="flex items-center gap-2 text-xs">
        <span className="font-medium text-[var(--c-text-2,inherit)]">Origen</span>
        <select
          id={selectId}
          aria-label={`Origen de la variante ${variante.letra} de la posición ${posicion.numero}`}
          className="rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-1.5 py-0.5 text-xs"
          value={origen.origen}
          onChange={(e) =>
            onChangeOrigen(origenDeTipo(e.target.value as OrigenKind, origen))
          }
        >
          {(Object.keys(ORIGEN_LABEL) as OrigenKind[]).map((k) => (
            <option key={k} value={k}>
              {ORIGEN_LABEL[k]}
            </option>
          ))}
        </select>
      </label>

      {origen.origen === "banco" && (
        <BancoOrigenEditor
          origen={origen}
          bancoQuestions={bancoQuestions}
          onChange={onChangeOrigen}
        />
      )}
      {origen.origen === "generador" && (
        <GeneradorOrigenEditor origen={origen} onChange={onChangeOrigen} />
      )}
      {origen.origen === "plantilla" && (
        <PlantillaOrigenEditor
          origen={origen}
          onChange={onChangeOrigen}
          materiaHint={materiaHint}
          returnTo={returnTo}
          io={plantillaIO}
        />
      )}
    </div>
  );
}

/* ---------------- origen: banco ---------------- */

function BancoOrigenEditor({
  origen,
  bancoQuestions,
  onChange,
}: {
  origen: Extract<VarianteOrigen, { origen: "banco" }>;
  bancoQuestions: BancoQuestion[];
  onChange: (o: VarianteOrigen) => void;
}) {
  if (bancoQuestions.length === 0) {
    return (
      <p className="text-xs text-[var(--c-hint)]">
        No hay preguntas manuales en este cuestionario. Agregá preguntas en el
        editor manual para referenciarlas desde el banco.
      </p>
    );
  }
  return (
    <label className="block text-xs">
      <span className="mb-0.5 block font-medium text-[var(--c-text-2,inherit)]">
        Pregunta del banco
      </span>
      <select
        aria-label="Pregunta del banco para esta variante"
        className="w-full rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-2 py-1 text-xs"
        value={origen.questionId}
        onChange={(e) => onChange({ origen: "banco", questionId: e.target.value })}
      >
        <option value="">— Elegí una pregunta —</option>
        {bancoQuestions.map((q) => (
          <option key={q.id} value={q.id}>
            {q.prompt ? q.prompt.slice(0, 80) : q.id}
          </option>
        ))}
      </select>
    </label>
  );
}

/* ---------------- origen: generador ---------------- */

function GeneradorOrigenEditor({
  origen,
  onChange,
}: {
  origen: Extract<VarianteOrigen, { origen: "generador" }>;
  onChange: (o: VarianteOrigen) => void;
}) {
  return (
    <div className="text-xs">
      <GeneradorPicker
        value={origen.generatorId}
        onChange={(id) =>
          onChange({
            origen: "generador",
            generatorId: id,
            ...(origen.params ? { params: origen.params } : {}),
          })
        }
        docsVariant="formulario"
      />
    </div>
  );
}

/* ---------------- origen: plantilla (monta el editor de WO-1) ---------------- */

function PlantillaOrigenEditor({
  origen,
  onChange,
  materiaHint,
  returnTo,
  io,
}: {
  origen: Extract<VarianteOrigen, { origen: "plantilla" }>;
  onChange: (o: VarianteOrigen) => void;
  materiaHint?: string;
  returnTo?: string;
  io: PlantillaIO;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const seleccionar = (p: PlantillaListItem) => {
    onChange({
      origen: "plantilla",
      plantillaId: p.id,
      plantillaVersion: p.version,
    });
    setModalOpen(false);
  };

  if (!origen.plantillaId) {
    return (
      <div className="text-xs">
        <p className="mb-1 text-[var(--c-hint)]">
          Esta variante usa una plantilla VBLang. Elegí cuál editar/usar.
        </p>
        <button
          type="button"
          className="rounded border border-[var(--c-primary)] px-2 py-1 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-hover)]"
          onClick={() => setModalOpen(true)}
        >
          Elegir plantilla
        </button>
        {modalOpen && (
          <PlantillaSelectorModal
            onClose={() => setModalOpen(false)}
            onSelect={seleccionar}
            materiaHint={materiaHint}
            createReturnTo={returnTo}
          />
        )}
      </div>
    );
  }

  return (
    <div className="space-y-2 text-xs">
      <div className="flex items-center gap-2">
        <span className="text-[var(--c-hint)]">
          Plantilla <code>{origen.plantillaId}</code>
          {origen.plantillaVersion ? ` · v${origen.plantillaVersion}` : ""}
        </span>
        <button
          type="button"
          className="rounded border border-[var(--c-border)] px-1.5 py-0.5 text-[11px] text-[var(--c-text-2,inherit)] hover:bg-[var(--c-hover)]"
          onClick={() => setModalOpen(true)}
        >
          Cambiar
        </button>
      </div>
      <PlantillaInlineEditor
        key={origen.plantillaId}
        plantillaId={origen.plantillaId}
        io={io}
      />
      {modalOpen && (
        <PlantillaSelectorModal
          onClose={() => setModalOpen(false)}
          onSelect={seleccionar}
          materiaHint={materiaHint}
          createReturnTo={returnTo}
        />
      )}
    </div>
  );
}

/**
 * Carga el DSL de la plantilla por id, lo parsea a AST y monta el editor de
 * pregunta de WO-1. El DSL es la fuente de verdad: el form lo reescribe con
 * `serialize`. Guarda con un botón explícito (no autosave) para no escribir en
 * cada tecla. Mantiene el último AST válido si el DSL deja de parsear.
 */
function PlantillaInlineEditor({
  plantillaId,
  io,
}: {
  plantillaId: string;
  io: PlantillaIO;
}) {
  const [codigo, setCodigo] = useState<string | null>(null);
  const [estado, setEstado] = useState<"cargando" | "listo" | "error">(
    "cargando",
  );
  const [guardando, setGuardando] = useState(false);
  const [guardado, setGuardado] = useState<string | null>(null);
  const [dirty, setDirty] = useState(false);
  const ultimoAstOk = useRef<Plantilla | null>(null);

  useEffect(() => {
    let cancelado = false;
    setEstado("cargando");
    io.load(plantillaId)
      .then(({ codigoDsl }) => {
        if (cancelado) return;
        setCodigo(codigoDsl);
        setEstado("listo");
      })
      .catch(() => {
        if (!cancelado) setEstado("error");
      });
    return () => {
      cancelado = true;
    };
  }, [plantillaId, io]);

  const ast = useMemo<Plantilla | null>(() => {
    if (codigo === null) return null;
    try {
      const parsed = parse(codigo);
      ultimoAstOk.current = parsed;
      return parsed;
    } catch {
      return ultimoAstOk.current;
    }
  }, [codigo]);

  if (estado === "cargando") {
    return <p className="text-xs text-[var(--c-hint)]">Cargando plantilla…</p>;
  }
  if (estado === "error" || ast === null) {
    return (
      <p role="alert" className="text-xs text-[var(--c-danger,#b91c1c)]">
        No se pudo cargar la plantilla <code>{plantillaId}</code>.
      </p>
    );
  }

  const onGuardar = async () => {
    if (codigo === null) return;
    setGuardando(true);
    setGuardado(null);
    try {
      await io.save(plantillaId, codigo);
      setGuardado("Guardada.");
      setDirty(false);
    } catch {
      setGuardado("No se pudo guardar.");
    } finally {
      setGuardando(false);
    }
  };

  return (
    <div className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] p-2">
      <PlantillaEditorSchema
        plantilla={ast}
        onChange={(next) => {
          setCodigo(serialize(next));
          setDirty(true);
          setGuardado(null);
        }}
      />
      <div className="mt-2 flex items-center gap-2">
        <button
          type="button"
          className="rounded bg-[var(--c-primary)] px-3 py-1 text-xs font-semibold text-[var(--c-text-on-dark)] disabled:opacity-50"
          disabled={guardando || !dirty}
          onClick={() => void onGuardar()}
        >
          {guardando ? "Guardando…" : "Guardar plantilla"}
        </button>
        {guardado && (
          <span role="status" className="text-xs text-[var(--c-hint)]">
            {guardado}
          </span>
        )}
      </div>
    </div>
  );
}
