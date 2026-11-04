/**
 * L10 — responsable de la Plataforma y de la base de datos (Ley 25.326). Se muestra en la política de
 * privacidad y en los Términos. Mientras no haya razón social, el responsable es una persona humana con su CUIT.
 */
// El CUIT y el domicilio se cargan en las variables de entorno de la web (VITE_RESPONSABLE_CUIT y
// VITE_RESPONSABLE_DOMICILIO, ver apps/web/.env.example). Vite los fija al compilar: después de completarlos
// hay que volver a compilar la web.
const env = (import.meta as { env?: Record<string, string | undefined> }).env ?? {};
const valor = (v: string | undefined, faltante: string) => (v && v.trim() ? v.trim() : faltante);

export const RESPONSABLE = {
  nombre: valor(env.VITE_RESPONSABLE_NOMBRE, "Javier Ernesto Pérez"),
  cuit: valor(env.VITE_RESPONSABLE_CUIT, "[CUIT A COMPLETAR]"),
  // Ley 25.326, art. 6 inc. b: el aviso al titular tiene que incluir el domicilio del responsable.
  domicilio: valor(env.VITE_RESPONSABLE_DOMICILIO, "[DOMICILIO A COMPLETAR]"),
} as const;

export const responsableTexto = `${RESPONSABLE.nombre}, CUIT ${RESPONSABLE.cuit}, con domicilio en ${RESPONSABLE.domicilio}`;
