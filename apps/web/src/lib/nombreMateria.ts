/**
 * Nombre para mostrar de una materia. Los módulos importados del temario guardan el identificador de la
 * carpeta («fisica», «historia-argentina»); en pantalla tiene que verse «Física» o «Historia argentina».
 * Si el valor ya es un nombre (tiene mayúsculas, tildes o espacios) se devuelve igual.
 */
const NOMBRES: Record<string, string> = {
  antropologia: "Antropología",
  aprendizaje: "Aprendizaje",
  arte: "Arte",
  automatizacion: "Automatización",
  biologia: "Biología",
  "ciudadania-digital": "Ciudadanía digital",
  civica: "Cívica",
  comunicacion: "Comunicación",
  derecho: "Derecho",
  "dibujo-tecnico": "Dibujo técnico",
  diseño: "Diseño",
  economia: "Economía",
  "ed-fisica": "Educación física",
  electronica: "Electrónica",
  esi: "ESI",
  "examen-jefe": "Examen jefe",
  "examen-jefe-idiomas": "Examen jefe de idiomas",
  filosofia: "Filosofía",
  fisica: "Física",
  geografia: "Geografía",
  historia: "Historia",
  "historia-argentina": "Historia argentina",
  "idiomas-extranjeros": "Idiomas extranjeros",
  informatica: "Informática",
  ingenieria: "Ingeniería",
  investigacion: "Investigación",
  lengua: "Lengua",
  matematica: "Matemática",
  matematicas: "Matemática",
  materiales: "Materiales",
  oficios: "Oficios",
  "pensamiento-historico": "Pensamiento histórico",
  psicologia: "Psicología",
  quimica: "Química",
  "resolucion-problemas": "Resolución de problemas",
  salud: "Salud",
  sociologia: "Sociología",
  "teoria-extendida": "Teoría extendida",
  turismo: "Turismo",
  "vida-cotidiana": "Vida cotidiana",
};

export function nombreMateria(valor: string | null | undefined): string {
  const v = (valor ?? "").trim();
  if (!v) return "";
  const clave = v.toLowerCase();
  if (NOMBRES[clave]) return NOMBRES[clave];
  if (/^[a-z0-9ñ-]+$/.test(v)) {
    const texto = v.replace(/-/g, " ");
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }
  return v;
}
