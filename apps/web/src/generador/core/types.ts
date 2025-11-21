// types.ts
export type Materia = "matematica" | "fisica" | "economia" | "contabilidad";

export type Dificultad = "basico" | "intermedio" | "avanzado"|"Legendario"|"Divino";

export interface GeneradorOpciones {
  // Configuración genérica; luego podés especializar según materia/categoría
  rangoMin?: number;
  rangoMax?: number;
  unidades?: "cm" | "m" | "km";
  permitirNegativos?: boolean;
   cantidadTerminos?: number;
  [key: string]: any; // extra
}

export interface GeneradorParametros {
  materia: Materia;
  categoria: string;       // ej: "sumas_basicas", "MRU", "asientos_simples"
  nivel: Dificultad;
  opciones?: GeneradorOpciones;
}

export interface Ejercicio {
  id: string;
  materia: Materia;
  categoria: string;
  nivel: Dificultad;
  enunciado: string;
  tipoRespuesta: "multiple" | "abierta" | "interactiva";
  datos: any;
  opciones?: string[]; // para multiple choice
  respuestaCorrecta: any;
  explicacionPasoAPaso: string[];
  metadatos?: {
    curriculum?: string;
    tags?: string[];
  };
  visual?: {
    tipoGrafico?: "barras" | "lineas" | "circular";
    // acá podrías poner más cosas según tus visualizers
    [key: string]: any;
  };
}

// Lo mínimo para el motor de cálculo
export interface CalculoRequest {
  tipo: string;   // "suma_simple", "MRU_distancia", "asiento_contable", etc.
  payload: any;
}

export interface CalculoResponse {
  resultado: any;
  pasos: string[];
}

export interface Calculator {
  calcular(req: CalculoRequest): CalculoResponse;
}
