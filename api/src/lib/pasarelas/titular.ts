/**
 * De quién es la cuenta de cobro: la escuela o su cooperadora (asociación con CUIT propio). Los cobros de tipo
 * «cooperadora» van a la cuenta de la cooperadora; todo lo demás, a la de la escuela.
 */
export type Titular = "escuela" | "cooperadora";

/** Filtro de Prisma por dueño de la cuenta. Las filas viejas (sin `titular`) son de la escuela. */
export const filtroTitular = (titular: Titular) =>
  titular === "cooperadora" ? { titular: "cooperadora" } : { titular: { not: "cooperadora" } };

export const titularDe = (valor: unknown): Titular => (valor === "cooperadora" ? "cooperadora" : "escuela");

export const titularDeCobro = (tipo: string | null | undefined): Titular => (tipo === "cooperadora" ? "cooperadora" : "escuela");
