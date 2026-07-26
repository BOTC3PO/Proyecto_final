import { useI18n } from "../../i18n/I18nContext";
/**
 * Drawer de referencia rápida del DSL VBLang: bloques, funciones, tipos de
 * pregunta y reglas críticas. Contenido estático espejado de
 * docs/vblang/llm-system-prompt.md. Se abre/cierra desde el botón "Referencia"
 * de la barra del editor; como drawer lateral no tapa el editor.
 */

interface ReferenciaRapidaProps {
  open: boolean;
  onClose: () => void;
}

// nombre/code quedan tal cual: son sintaxis literal de VBLang, no prosa —
// traducirlos rompería el DSL que el usuario tiene que escribir. Sólo
// desc/nota/paso (texto explicativo) pasan por t().
const REGLAS_KEYS: string[] = [
  "referenciaRapida.stringsSiempreEntreComillasDobles",
  "referenciaRapida.booleansVerdaderoFalsoNoTrue",
  "referenciaRapida.logicosYONoNo",
  "referenciaRapida.variablesSeDeclaranCon",
  "referenciaRapida.indentacionExactamente2EspaciosNunca",
  "referenciaRapida.elBloqueRespuestaContieneUna",
  "referenciaRapida.tipoMcRequiereOpciones",
];

const BLOQUES: { nombre: string; descKey: string; code?: string; notaKey?: string }[] = [
  { nombre: "variables", descKey: "referenciaRapida.declaraLosValoresParametricosDel" },
  { nombre: "restricciones", descKey: "referenciaRapida.condicionesQueDebenCumplir" },
  { nombre: "enunciado", descKey: "referenciaRapida.textoDeLaPreguntaInterpola" },
  {
    nombre: "enunciados",
    descKey: "referenciaRapida.listaDeVariantesDeEnunciado",
    code: `enunciados:
  - "Cuanto es {a} + {b}?"
  - "Calcula la suma de {a} y {b}."`,
    notaKey: "referenciaRapida.seEligeUnaAlAzar",
  },
  { nombre: "respuesta", descKey: "referenciaRapida.formulaConLaRespuestaCorrecta" },
  { nombre: "respuestas_validas", descKey: "referenciaRapida.listaDeRespuestasAceptadasVarias" },
  { nombre: "unidad", descKey: "referenciaRapida.unidadDeLaRespuestaNumerica" },
  { nombre: "tolerancia", descKey: "referenciaRapida.margenDeErrorAceptadoAbsoluto" },
  { nombre: "opciones", descKey: "referenciaRapida.cantidadDeOpcionesAGenerar" },
  { nombre: "opciones_explicitas", descKey: "referenciaRapida.listaExplicitaDeOpciones" },
  { nombre: "tipo", descKey: "referenciaRapida.tipoDePreguntaVerLista" },
  { nombre: "pasos", descKey: "referenciaRapida.pasosDeLaResolucionCon" },
  { nombre: "generador", descKey: "referenciaRapida.usaUnGeneradorDelSistema" },
  { nombre: "dataset", descKey: "referenciaRapida.cargaFilasDeUnDataset" },
  { nombre: "metadata", descKey: "referenciaRapida.datosExtraDeLaPlantilla" },
  { nombre: "visual", descKey: "referenciaRapida.especificaUnVisualGraficoDiagrama" },
  { nombre: "mapa", descKey: "referenciaRapida.mapaAUsarEnMarcar" },
  { nombre: "respuesta_iso / respuesta_nombre", descKey: "referenciaRapida.respuestaCorrectaDeMarcarMapa" },
  { nombre: "respuesta_orden", descKey: "referenciaRapida.ordenCorrectoParaTipoOrdenar" },
  { nombre: "texto_analizar / etiquetas_pedidas", descKey: "referenciaRapida.paraAnalisisSintacticoIdentificarPalabras" },
];

const FUNCIONES: string[] = [
  "random(min, max)", "random_float(min, max, dec)", "uno_de(array)",
  "n_de(array, n)", "mezclar(array)", "filtrar(array, cond)", "sqrt", "abs",
  "floor", "ceil", "round", "redondear(x, n)", "min", "max", "sumar",
  "promedio", "largo", "ordenar", "ordenar_por(arr, campo)", "capitalizar",
  "mayusculas", "minusculas", "concatenar",
];

const CONSTANTES = ["pi", "e", "g", "c", "G", "h_planck", "k_B", "N_A", "R"];

// Receta de cableado de generadores asistidos. El detalle de qué variables
// expone cada generador aparece contextualmente al elegirlo en el formulario
// visual (GeneradorDocsPanel); acá queda la receta general siempre a mano.
const GENERADOR_RECETA: { pasoKey: string; code?: string }[] = [
  { pasoKey: "referenciaRapida.declarasElGeneradorConSu", code: "generador: fisica/cinematica/MRU" },
  { pasoKey: "referenciaRapida.interpolasSusVariablesEnEl", code: 'enunciado: "Si va a {v} m/s durante {t} s…"' },
  { pasoKey: "referenciaRapida.conGeneradorNoDeclarasVariables" },
  { pasoKey: "referenciaRapida.dejaElIdSinSubtipo" },
  { pasoKey: "referenciaRapida.ajustasLaDificultadDesdeMetadata", code: 'dificultad: "intermedio"' },
];

const TIPOS: { nombre: string; descKey: string }[] = [
  { nombre: "input", descKey: "referenciaRapida.respuestaNumericaODeTexto" },
  { nombre: "mc", descKey: "referenciaRapida.multipleChoiceUnaCorrecta" },
  { nombre: "vf", descKey: "referenciaRapida.verdaderoFalso" },
  { nombre: "completar", descKey: "referenciaRapida.completarUnValorFaltante" },
  { nombre: "ordenar", descKey: "referenciaRapida.reordenarUnaListaDeItems" },
  { nombre: "marcar_mapa", descKey: "referenciaRapida.hacerClickEnUnPais" },
  { nombre: "analisis_sintactico", descKey: "referenciaRapida.etiquetarGramaticalmenteCadaPalabra" },
  { nombre: "identificar_palabras", descKey: "referenciaRapida.marcarPalabrasQueCumplenUn" },
];

export default function ReferenciaRapida({ open, onClose }: ReferenciaRapidaProps) {
  const { t } = useI18n();
  if (!open) return null;

  return (
    <>
      {/* backdrop translúcido — click cierra */}
      <div
        className="fixed inset-0 z-40 bg-black/20"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-label={t("referenciaRapida.referenciaRapidaDeVblang")}
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] shadow-xl"
      >
        <header className="flex items-center justify-between border-b border-[var(--c-border,#e2e8f0)] px-4 py-3">
          <h2 className="text-sm font-bold text-[var(--c-text)]">{t("plantillaEditorTiza.referenciaVblang")}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t("referenciaRapida.cerrarReferencia")}
            className="rounded px-2 py-0.5 text-sm text-[var(--c-muted,#64748b)] hover:bg-[var(--c-bg,#f1f5f9)]"
          >
            ✕
          </button>
        </header>

        <div className="flex-1 overflow-auto px-4 py-3 text-xs space-y-5">
          <section>
            <h3 className="mb-1.5 font-bold uppercase tracking-wide text-[var(--c-muted,#64748b)]">{t("referenciaRapida.reglasCriticas")}</h3>
            <ul className="list-disc space-y-1 pl-4 text-[var(--c-text)]">
              {REGLAS_KEYS.map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-1.5 font-bold uppercase tracking-wide text-[var(--c-muted,#64748b)]">{t("referenciaRapida.bloques")}</h3>
            <dl className="space-y-1.5">
              {BLOQUES.map((b) => (
                <div key={b.nombre}>
                  <dt className="font-mono font-semibold text-[var(--c-primary,#3b82f6)]">
                    {b.nombre}
                  </dt>
                  <dd className="text-[var(--c-muted,#64748b)]">{t(b.descKey)}</dd>
                  {b.code && (
                    <pre className="mt-0.5 overflow-x-auto rounded bg-[var(--c-bg,#f1f5f9)] px-1.5 py-1 font-mono text-[10px] text-[var(--c-primary,#3b82f6)]">
                      {b.code}
                    </pre>
                  )}
                  {b.notaKey && (
                    <p className="mt-0.5 text-[10px] italic text-[var(--c-muted,#64748b)]">
                      {t(b.notaKey)}
                    </p>
                  )}
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h3 className="mb-1.5 font-bold uppercase tracking-wide text-[var(--c-muted,#64748b)]">{t("referenciaRapida.tiposDePregunta")}</h3>
            <dl className="space-y-1.5">
              {TIPOS.map((tipo) => (
                <div key={tipo.nombre}>
                  <dt className="font-mono font-semibold text-[var(--c-primary,#3b82f6)]">
                    {tipo.nombre}
                  </dt>
                  <dd className="text-[var(--c-muted,#64748b)]">{t(tipo.descKey)}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h3 className="mb-1.5 font-bold uppercase tracking-wide text-[var(--c-muted,#64748b)]">{t("referenciaRapida.funciones")}</h3>
            <div className="flex flex-wrap gap-1">
              {FUNCIONES.map((f) => (
                <code
                  key={f}
                  className="rounded bg-[var(--c-bg,#f1f5f9)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--c-text)]"
                >
                  {f}
                </code>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-1.5 font-bold uppercase tracking-wide text-[var(--c-muted,#64748b)]">{t("referenciaRapida.generadoresAsistidos")}</h3>
            <p className="mb-1.5 text-[var(--c-muted,#64748b)]">{t("referenciaRapida.alElegirUnGeneradorEn")}</p>
            <ol className="list-decimal space-y-1 pl-4 text-[var(--c-text)]">
              {GENERADOR_RECETA.map((r) => (
                <li key={r.pasoKey}>
                  {t(r.pasoKey)}
                  {r.code && (
                    <code className="mt-0.5 block rounded bg-[var(--c-bg,#f1f5f9)] px-1.5 py-0.5 font-mono text-[var(--c-primary,#3b82f6)]">
                      {r.code}
                    </code>
                  )}
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h3 className="mb-1.5 font-bold uppercase tracking-wide text-[var(--c-muted,#64748b)]">{t("referenciaRapida.constantes")}</h3>
            <div className="flex flex-wrap gap-1">
              {CONSTANTES.map((c) => (
                <code
                  key={c}
                  className="rounded bg-[var(--c-bg,#f1f5f9)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--c-text)]"
                >
                  {c}
                </code>
              ))}
            </div>
          </section>
        </div>
      </aside>
    </>
  );
}
