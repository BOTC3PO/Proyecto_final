export interface EvalLoc {
  line: number;
  col: number;
}

export class EvalError extends Error {
  line?: number;
  col?: number;
  constructor(message: string, loc?: EvalLoc) {
    super(message);
    this.name = "EvalError";
    if (loc) {
      this.line = loc.line;
      this.col = loc.col;
    }
  }
}

export class RestriccionesNoSatisfechasError extends EvalError {
  intentos: number;
  ultimosValores: Record<string, unknown>;
  constructor(intentos: number, ultimosValores: Record<string, unknown>) {
    super(
      `No se satisficieron las restricciones tras ${intentos} intentos`,
    );
    this.name = "RestriccionesNoSatisfechasError";
    this.intentos = intentos;
    this.ultimosValores = ultimosValores;
  }
}
