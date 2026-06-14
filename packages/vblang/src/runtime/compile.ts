import { EvalError } from "../evaluator/errors.js";
import type { Plantilla } from "../parser/ast.js";
import type { CompiledPlantilla } from "./types.js";

export function compile(plantilla: Plantilla): CompiledPlantilla {
  const compiled: CompiledPlantilla = {
    plantilla,
    metadata: {},
    declaracionesVariables: [],
    restricciones: [],
    enunciado: [],
    tipoInferido: plantilla.tipoInferido,
  };

  for (const b of plantilla.bloques) {
    switch (b.kind) {
      case "metadata":
        for (const c of b.campos) {
          if (c.value.kind === "num") {
            compiled.metadata[c.key] = c.value.value;
          } else if (c.value.kind === "str") {
            compiled.metadata[c.key] = c.value.value;
          } else if (c.value.kind === "bool") {
            compiled.metadata[c.key] = c.value.value;
          } else if (c.value.kind === "null") {
            compiled.metadata[c.key] = null;
          }
          // Otros tipos: el evaluador los manejaría en runtime; no hace falta en metadata.
        }
        break;
      case "variables":
        compiled.declaracionesVariables = b.declaraciones;
        break;
      case "restricciones":
        compiled.restricciones = b.condiciones;
        break;
      case "respuesta":
        compiled.respuesta = b.expr;
        break;
      case "respuestas_validas":
        compiled.respuestasValidas = b.items;
        break;
      case "unidad":
        compiled.unidad = b.valor;
        break;
      case "tolerancia":
        compiled.tolerancia = {
          valor: b.valor,
          esPorcentaje: b.esPorcentaje,
        };
        break;
      case "opciones":
        compiled.opciones = b.cantidad;
        break;
      case "tipo":
        // tipoInferido ya está en plantilla.tipoInferido
        break;
      case "enunciado":
        compiled.enunciado = b.partes;
        break;
      case "enunciados":
        compiled.enunciados = b.items;
        break;
      case "pasos":
        compiled.pasos = b.pasos;
        break;
      case "pistas":
        compiled.pistas = b.items;
        break;
      case "explicacion":
        compiled.explicacion = b.partes;
        break;
      case "visual":
        compiled.visual = b.campos;
        break;
      case "generador":
        compiled.generadorId = b.id;
        break;
      case "dataset":
        compiled.dataset = b.nombre;
        break;
      case "mapa":
        compiled.mapa = b.nombre;
        break;
      case "respuesta_iso":
        compiled.respuestaIso = b.expr;
        break;
      case "respuesta_nombre":
        compiled.respuestaNombre = b.expr;
        break;
      case "respuesta_orden":
        compiled.respuestaOrden = b.expr;
        break;
      case "texto_analizar":
        compiled.textoAnalizar = b.expr;
        break;
      case "etiquetas_pedidas":
        compiled.etiquetasPedidas = b.etiquetas;
        break;
      case "opciones_explicitas":
        compiled.opcionesExplicitas = b.items;
        break;
      case "correccion":
        compiled.correccion = b.modo;
        break;
    }
  }

  if (
    compiled.tipoInferido === "mc" &&
    compiled.opciones === undefined &&
    !compiled.opcionesExplicitas
  ) {
    throw new EvalError(
      "tipo `mc` requiere `opciones:` o `opciones_explicitas:`",
    );
  }

  return compiled;
}
