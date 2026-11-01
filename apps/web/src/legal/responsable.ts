/**
 * L10 — responsable de la Plataforma y de la base de datos (Ley 25.326). Se muestra en la política de
 * privacidad y en los Términos. Mientras no haya razón social, el responsable es una persona humana con su CUIT.
 */
export const RESPONSABLE = {
  nombre: "Javier Ernesto Pérez",
  cuit: "[CUIT A COMPLETAR]",
  // Ley 25.326, art. 6 inc. b: el aviso al titular tiene que incluir el domicilio del responsable.
  domicilio: "[DOMICILIO A COMPLETAR]",
} as const;

export const responsableTexto = `${RESPONSABLE.nombre}, CUIT ${RESPONSABLE.cuit}, con domicilio en ${RESPONSABLE.domicilio}`;
