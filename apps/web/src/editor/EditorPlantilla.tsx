/**
 * editor/EditorPlantilla.tsx — raíz del editor reconstruido (D2 + D3 + D4).
 *
 * Drop-in del editor viejo (`components/vblang/PlantillaEditorSchema`):
 * MISMA interfaz `{ plantilla, onChange }`, montada sobre los primitivos de
 * `ui/` y reutilizando la capa de datos existente (`plantillaAst`/
 * `plantillaFields`/`@vb/vblang`). NO modifica al editor viejo; convive
 * detrás de un flag en `VarianteEditor`.
 *
 * Slice D2 = shell + campos core:
 *   • tipo de pregunta, enunciado, respuesta, opciones, puntaje + pista.
 *
 * Slice D3 = campos ricos:
 *   • variables (declaración: nombre, tipo, rango/valores).
 *   • visual (PNG, line-chart, timeline, latex, vector-diagram, circuit).
 *   • texto rico (explicación, restricciones, pistas escalonadas).
 *
 * Slice D4 = subsistemas (chrome reconstruido, lógica/componentes reusados):
 *   • base generador — `GeneradorPicker` + dificultad + enunciado con inserción
 *     de las variables provistas (reemplaza el Alert "usá el clásico").
 *   • mapa avanzado — mapa + respuesta (iso/nombre + modoRespuesta) + encuadre.
 *   • dataset — bloque `dataset:` con el `DatasetExplorer` reusado.
 *
 * Slice D5 = paridad:
 *   • etiquetas + diccionario (análisis sintáctico / identificar_palabras) con
 *     `PalabraCombobox`/`LangSelector` reusados.
 *   • lint inline por campo (validador + `lintFieldMap` → `Field.error`) +
 *     panel resumen. Al cerrar D5 hay paridad y el flag vuelca al nuevo.
 */
import { useMemo, useRef, useState, type CSSProperties } from "react";
import {
  lint,
  QUESTION_TYPE_SCHEMAS,
  type Bloque,
  type ListField,
  type Plantilla,
} from "@vb/vblang";
import type { Field } from "@vb/vblang";
import { Alert, Radio, RadioGroup } from "../ui";
import Section from "./Section";
import LangSelector from "../components/vblang/LangSelector";
import { LangContext } from "./LangContext";
import { LintFieldsContext } from "./LintContext";
import LintPanel from "./LintPanel";
import TipoSelector from "./fields/TipoSelector";
import EnunciadoField, { type EnunciadoFieldHandle } from "./fields/EnunciadoField";
import FieldControl from "./fields/FieldControl";
import OpcionesField from "./fields/OpcionesField";
import EtiquetasField from "./fields/EtiquetasField";
import PuntajePistaField from "./fields/PuntajePistaField";
import VariablesField from "./fields/VariablesField";
import VisualField from "./fields/VisualField";
import ExplicacionField from "./fields/ExplicacionField";
import RestriccionesField from "./fields/RestriccionesField";
import PistasField from "./fields/PistasField";
import GeneradorField from "./fields/GeneradorField";
import MapaField from "./fields/MapaField";
import DatasetField from "./fields/DatasetField";
import {
  applyGenerador,
  applyTipo,
  isGeneradorBase,
} from "../components/vblang/plantillaFields";
import { buildFieldErrors } from "../components/vblang/FieldErrorBadge";
import { getBlock, hasBlock } from "../components/vblang/plantillaAst";
import { listGeneradores } from "../vblang/listGeneradores";
import { getGeneradorProvidedVars } from "../vblang/generadorVars";
import { TIPO_PREGUNTA_DESCRIPCION_KEY } from "../components/vblang/TizaEditor";
import { useI18n } from "../i18n/I18nContext";

export interface EditorPlantillaProps {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}

const shellStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-4)",
  fontFamily: "var(--font-sans)",
  color: "var(--c-text)",
};

const placeholderStyle: CSSProperties = {
  margin: "var(--space-0)",
  fontSize: "var(--text-xs)",
  lineHeight: "var(--lh-normal)",
  color: "var(--c-hint)",
  fontStyle: "italic",
};

const langBarStyle: CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
};

/** Bloques del subsistema mapa que `MapaField` reemplaza en el render genérico. */
// `respuesta_nombre` se sumó al schema en PLAN tiza-autoria-avanzada §6.b (para
// que Tiza lo pueda ofrecer). Acá `MapaField` ya lo editaba por su cuenta con un
// toggle iso↔nombre, así que hay que excluirlo del render genérico o el campo
// "Nombre correcto" aparece dos veces.
const MAPA_FIELD_BLOCKS = new Set<string>([
  "mapa",
  "respuesta_iso",
  "respuesta_nombre",
]);

/** Bloques que este slice edita (el resto se lista como preservado). */
const V2_EDITS = new Set<Bloque["kind"]>([
  "tipo",
  "enunciado",
  "enunciados",
  "respuesta",
  "respuestas_validas",
  "respuesta_iso",
  "respuesta_orden",
  "respuesta_nombre",
  "respuesta_expr",
  "opciones_explicitas",
  "texto_analizar",
  "unidad",
  "tolerancia",
  "tolerancia_abs",
  "correccion",
  "mapa",
  "metadata",
  // D3: campos ricos
  "variables",
  "visual",
  "explicacion",
  "restricciones",
  "pistas",
  // D4: subsistemas
  "generador",
  "dataset",
  // D5: etiquetas + diccionario
  "etiquetas_pedidas",
]);

/** Bloques presentes que este slice NO edita (preservados read-only). */
function preservedKinds(p: Plantilla): Bloque["kind"][] {
  const kinds = new Set<Bloque["kind"]>();
  for (const b of p.bloques) {
    if (!V2_EDITS.has(b.kind)) kinds.add(b.kind);
  }
  return [...kinds];
}

export default function EditorPlantilla({ plantilla, onChange }: EditorPlantillaProps) {
  const { t } = useI18n();
  const baseGenerador = isGeneradorBase(plantilla);
  const tipo = plantilla.tipoInferido;
  const schema = QUESTION_TYPE_SCHEMAS[tipo];
  const preserved = preservedKinds(plantilla);
  const enunciadoRef = useRef<EnunciadoFieldHandle | null>(null);
  const defaultGeneradorId = listGeneradores()[0]?.id ?? "";
  const generadorId = getBlock(plantilla, "generador")?.id ?? "";

  // D5: idioma del diccionario, compartido por los `PalabraCombobox` del shell.
  const [lang, setLang] = useState("es");

  const coreFields: Field[] = schema.fields.filter((f) => f.block !== "enunciado");
  const isList = (f: Field): f is ListField => f.kind === "list";

  const listFields = coreFields.filter(isList);
  const stringListFields = listFields.filter((f) => f.itemShape === "string");
  // D5: las listas de etiquetas (`{palabra, etiqueta}`) las edita EtiquetasField.
  const etiquetaFields = listFields.filter((f) => f.itemShape === "etiqueta");
  const skippedRichFields = listFields.filter(
    (f) => f.itemShape !== "string" && f.itemShape !== "etiqueta",
  );
  const scalarFields = coreFields.filter((f) => !isList(f));

  // D5: tipos de lengua que usan el diccionario (etiquetas o respuestas-palabra).
  const esLengua = tipo === "analisis_sintactico" || tipo === "identificar_palabras";

  // D5: lint inline. Corremos el validador (generador-aware) y mapeamos cada
  // issue al campo culpable; los campos leen su error vía LintFieldsContext.
  const report = useMemo(
    () =>
      lint(
        plantilla,
        baseGenerador
          ? { generadorVars: getGeneradorProvidedVars(generadorId) }
          : undefined,
      ),
    [plantilla, baseGenerador, generadorId],
  );
  const fieldErrors = useMemo(() => buildFieldErrors(report.issues), [report]);

  // D4: para `marcar_mapa`, el subsistema `MapaField` reemplaza el render
  // genérico de los campos `mapa`/`respuesta_iso` (y suma nombre + encuadre).
  const isMapa = !baseGenerador && tipo === "marcar_mapa";
  const scalarFieldsToRender = isMapa
    ? scalarFields.filter((f) => !MAPA_FIELD_BLOCKS.has(f.block))
    : scalarFields;

  // El bloque `dataset:` es ortogonal al tipo: se autorea en base "tipo", y se
  // mantiene visible si ya existe (incluso bajo base generador).
  const showDataset = !baseGenerador || hasBlock(plantilla, "dataset");

  const variables = getBlock(plantilla, "variables")?.declaraciones ?? [];
  const hasVariables = variables.length > 0;
  const hasRestricciones = hasBlock(plantilla, "restricciones");
  const hasPistas = hasBlock(plantilla, "pistas");

  const cambiarBase = (value: string) => {
    if (value === "generador") {
      const id = getBlock(plantilla, "generador")?.id || defaultGeneradorId;
      onChange(applyGenerador(plantilla, id));
    } else {
      onChange(applyTipo(plantilla, tipo));
    }
  };

  return (
    <LangContext.Provider value={lang}>
    <LintFieldsContext.Provider value={fieldErrors}>
    <div style={shellStyle} data-testid="editor-plantilla-v2">
      {esLengua ? (
        <div style={langBarStyle}>
          <LangSelector value={lang} onChange={setLang} />
        </div>
      ) : null}

      <LintPanel report={report} />

      <Section
        title={t("plantillaEditorSchema.baseDeLaPregunta")}
        description={t("editorPlantilla.definiLaRespuestaPorTipo")}
      >
        <RadioGroup
          aria-label={t("plantillaEditorSchema.baseDeLaPregunta")}
          value={baseGenerador ? "generador" : "tipo"}
          onValueChange={cambiarBase}
        >
          <Radio value="tipo" label={t("plantillaEditorSchema.tipoDePregunta")} />
          <Radio value="generador" label={t("plantillaEditorSchema.generadorAsistido")} />
        </RadioGroup>
      </Section>

      {baseGenerador ? (
        <Section
          title={t("plantillaEditorSchema.generadorAsistido")}
          description={t("editorPlantilla.elGeneradorProveeLosDatos")}
        >
          <GeneradorField
            plantilla={plantilla}
            onChange={onChange}
            onInsertVariable={(token) => enunciadoRef.current?.insert(token)}
          />
        </Section>
      ) : (
        <Section
          title={t("plantillaEditorSchema.tipoDePregunta")}
          description={TIPO_PREGUNTA_DESCRIPCION_KEY[tipo] ? t(TIPO_PREGUNTA_DESCRIPCION_KEY[tipo]) : schema.descripcion}
        >
          <TipoSelector plantilla={plantilla} onChange={onChange} />
        </Section>
      )}

      <Section title={t("plantillaEditorSchema.enunciado")} description={t("editorPlantilla.textoDeLaConsignaParaEl")}>
        <EnunciadoField ref={enunciadoRef} plantilla={plantilla} onChange={onChange} />
      </Section>

      {isMapa ? (
        <Section
          title={t("marcarMapaRenderer.mapa")}
          description={t("editorPlantilla.mapaACargarClaveDeRespuesta")}
        >
          <MapaField plantilla={plantilla} onChange={onChange} />
        </Section>
      ) : null}

      {!baseGenerador && scalarFieldsToRender.length > 0 ? (
        <Section
          title={t("tizaEditor.respuesta")}
          description={t("editorPlantilla.claveDeRespuestaYParametros")}
        >
          {scalarFieldsToRender.map((field) => (
            <FieldControl
              key={field.key}
              field={field}
              plantilla={plantilla}
              onChange={onChange}
            />
          ))}
        </Section>
      ) : null}

      {!baseGenerador && stringListFields.length > 0 ? (
        <Section title={t("editorPlantilla.opcionesItems")} description={t("editorPlantilla.listaDeOpcionesOItems")}>
          {stringListFields.map((field) => (
            <OpcionesField
              key={field.key}
              field={field}
              plantilla={plantilla}
              onChange={onChange}
            />
          ))}
        </Section>
      ) : null}

      {/* D5: etiquetas (palabra → categoría) con diccionario. */}
      {!baseGenerador && etiquetaFields.length > 0 ? (
        <Section
          title={t("editorPlantilla.etiquetas")}
          description={t("editorPlantilla.paresPalabraEtiqueta")}
        >
          {etiquetaFields.map((field) => (
            <EtiquetasField
              key={field.key}
              field={field}
              plantilla={plantilla}
              onChange={onChange}
            />
          ))}
        </Section>
      ) : null}

      {!baseGenerador && skippedRichFields.length > 0 ? (
        <Alert variant="warning" title={t("editorPlantilla.camposAunNoEditablesEn")}>
          {skippedRichFields.map((f) => f.label).join(", ")} {t("editorPlantilla.sePreservanTalCualEn")}
        </Alert>
      ) : null}

      {/* D3: Variables */}
      {hasVariables || !baseGenerador ? (
        <Section title={t("plantillaEditorSchema.variables")} description={t("editorPlantilla.variablesAleatoriasQueSeEvaluan")}>
          <VariablesField
            plantilla={plantilla}
            variables={variables}
            onChange={onChange}
          />
        </Section>
      ) : null}

      {/* D3: Visual */}
      <Section title={t("editorPlantilla.visual")} description={t("editorPlantilla.imagenODiagramaAsociadoA")}>
        <VisualField plantilla={plantilla} onChange={onChange} />
      </Section>

      <Section title={t("plantillaEditorSchema.puntajeYPista")} description={t("editorPlantilla.metadataDeLaPregunta")}>
        <PuntajePistaField plantilla={plantilla} onChange={onChange} />
      </Section>

      {/* D3: Texto rico */}
      <Section title={t("plantillaEditorSchema.explicacion")} description={t("editorPlantilla.retroalimentacionQueSeMuestra")}>
        <ExplicacionField plantilla={plantilla} onChange={onChange} />
      </Section>

      {hasRestricciones || hasVariables ? (
        <Section title={t("plantillaEditorSchema.restricciones")} description={t("editorPlantilla.condicionesQueLasVariables")}>
          <RestriccionesField plantilla={plantilla} onChange={onChange} />
        </Section>
      ) : null}

      {hasPistas ? (
        <Section title={t("plantillaEditorSchema.pistasEscalonadas")} description={t("editorPlantilla.pistasQueElAlumnoPide")}>
          <PistasField plantilla={plantilla} onChange={onChange} />
        </Section>
      ) : null}

      {/* D4: Dataset */}
      {showDataset ? (
        <Section title={t("editorPlantilla.dataset")} description={t("editorPlantilla.fuenteDeDatosQueAlimenta")}>
          <DatasetField plantilla={plantilla} onChange={onChange} />
        </Section>
      ) : null}

      {preserved.length > 0 ? (
        <Section title={t("editorPlantilla.bloquesPreservados")} description={t("editorPlantilla.noSeEditanEnV2")}>
          <p style={placeholderStyle}>
            {t("editorPlantilla.estosBloquesEstanPresentesY")}{" "}
            <code>{preserved.join(", ")}</code>. {t("editorPlantilla.editalosDesdeElEditorClasico")}
          </p>
        </Section>
      ) : null}
    </div>
    </LintFieldsContext.Provider>
    </LangContext.Provider>
  );
}
