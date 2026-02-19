import { Router } from "express";

export const registro = Router();

const REGISTRO_OPCIONES = {
  grados: [
    "1° Primaria",
    "2° Primaria",
    "3° Primaria",
    "4° Primaria",
    "5° Primaria",
    "6° Primaria",
    "1° Secundaria",
    "2° Secundaria",
    "3° Secundaria",
    "4° Secundaria",
    "5° Secundaria",
    "6° Secundaria"
  ],
  meses: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ],
  tiposProfesor: ["Matemáticas", "Lengua", "Ciencias", "Historia", "Idiomas", "Arte", "Educación Física"]
} as const;

registro.get("/api/registro/opciones", (_req, res) => {
  res.json(REGISTRO_OPCIONES);
});
