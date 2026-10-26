import type { prisma } from "./prisma";
import { precioInicialTicket } from "./examen-tickets";

type Db = Pick<typeof prisma, "claseMiembro" | "economiaSaldo">;

const redondear = (n: number) => Math.round(n * 100) / 100;

/**
 * Monedas que hay en un aula y precio inicial resultante. Se cuentan los saldos de sus alumnos
 * (no docentes ni cuentas de prueba). El saldo es por usuario, no por aula.
 */
export async function economiaDelAula(db: Db, aulaId: string) {
  const alumnos = await db.claseMiembro.findMany({
    where: { claseId: aulaId, rolEnClase: "STUDENT", esPrueba: { not: true } }
  });
  const saldos = alumnos.length
    ? await db.economiaSaldo.findMany({ where: { usuarioId: { in: alumnos.map((a) => a.usuarioId) } } })
    : [];
  const monedasAula = redondear(saldos.reduce((acc, s) => acc + (typeof s.saldo === "number" ? s.saldo : 0), 0));
  return {
    alumnosAula: alumnos.length,
    monedasAula,
    precioInicial: precioInicialTicket(monedasAula, alumnos.length)
  };
}
