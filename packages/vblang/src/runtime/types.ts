import type {
  CampoKV,
  EtiquetaPedida,
  Expr,
  PasoItem,
  Plantilla,
  TextoOInterpolacion,
  TipoPregunta,
  VariableDecl,
} from "../parser/ast.js";
import type { GeneradorAsistidoProvider } from "./provider.js";

export interface CompiledPlantilla {
  plantilla: Plantilla;
  metadata: Record<string, unknown>;
  declaracionesVariables: VariableDecl[];
  restricciones: Expr[];
  respuesta?: Expr;
  respuestasValidas?: Expr[];
  unidad?: string;
  tolerancia?: { valor: number; esPorcentaje: boolean };
  opciones?: number;
  opcionesExplicitas?: Expr[];
  enunciado: TextoOInterpolacion[];
  pasos?: PasoItem[];
  tipoInferido: TipoPregunta;
  generadorId?: string;
  /* Soporte parcial / no usado todavía en Sprint 4 */
  respuestaIso?: Expr;
  respuestaNombre?: Expr;
  respuestaOrden?: Expr;
  textoAnalizar?: Expr;
  etiquetasPedidas?: EtiquetaPedida[];
  mapa?: string;
  dataset?: string;
  visual?: CampoKV[];
}

export interface GenerationOptions {
  seed: string;
  maxRetries?: number;
  /**
   * Provider para resolver `generador: <id>`. Si la plantilla NO usa
   * `generador:`, el provider se ignora. Si la plantilla SÍ lo usa y no se
   * pasa provider, `generate()` lanza EvalError.
   */
  provider?: GeneradorAsistidoProvider;
}

export interface OpcionGenerada {
  texto: string;
  correcta: boolean;
}

export interface GenerationResult {
  tipo: TipoPregunta;
  enunciado: string;
  pasos?: string[];
  respuesta?: unknown;
  respuestasValidas?: unknown[];
  unidad?: string;
  tolerancia?: { valor: number; esPorcentaje: boolean };
  opciones?: OpcionGenerada[];
  variables: Record<string, unknown>;
  seed: string;
  intentos: number;
}
