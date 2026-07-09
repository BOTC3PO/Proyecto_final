// PLAN-V §3 — agregación de notas por período (§1 ya persiste los
// períodos EN el aula; esto sólo consume las evaluaciones formales que
// ya existen y las junta por período — no crea un flujo de carga nuevo).
//
// Regla del aula (YAGNI por ahora, ponderado si se pide después):
//   - nota de período = promedio simple de las evaluaciones formales
//     cuya fecha cae dentro de [desde, hasta].
//   - nota final = promedio simple de los períodos CON nota (un
//     período sin evaluaciones muestra "—" y NO cuenta como 0).
//   - una evaluación fuera de todo período rango cae en "sin período"
//     — visible siempre, nunca una nota perdida en silencio.

export type BoletinAttempt = {
  score: number | null;
  /** submittedAt ?? startedAt — fecha ISO usada para bucketear por período. */
  fecha: string;
};

export type BoletinPeriodoDef = {
  id: string;
  nombre: string;
  desde: string;
  hasta: string;
  orden: number;
};

export type BoletinPeriodoResultado = {
  id: string;
  nombre: string;
  cantidad: number;
  promedio: number | null;
};

export type BoletinResultado = {
  periodos: BoletinPeriodoResultado[];
  sinPeriodo: { cantidad: number; promedio: number | null };
  promedioFinal: number | null;
};

const promedioDe = (scores: number[]): number | null =>
  scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : null;

export function computeBoletin(
  attempts: readonly BoletinAttempt[],
  periodos: readonly BoletinPeriodoDef[]
): BoletinResultado {
  const ordered = [...periodos].sort((a, b) => a.orden - b.orden);
  const buckets = new Map<string, number[]>();
  const sinPeriodo: number[] = [];

  for (const attempt of attempts) {
    if (attempt.score == null) continue;
    // `fecha` puede venir como timestamp ISO completo (submittedAt real
    // de QuizAttempt); nos quedamos con la parte de fecha (yyyy-mm-dd)
    // para comparar contra desde/hasta — si no, un intento del ÚLTIMO
    // día del período (ej. "2026-04-30T23:59:59Z" vs hasta="2026-04-30")
    // quedaría afuera por comparación lexicográfica de strings.
    const soloFecha = attempt.fecha.slice(0, 10);
    const periodo = ordered.find((p) => soloFecha >= p.desde && soloFecha <= p.hasta);
    if (!periodo) {
      sinPeriodo.push(attempt.score);
      continue;
    }
    const scores = buckets.get(periodo.id) ?? [];
    scores.push(attempt.score);
    buckets.set(periodo.id, scores);
  }

  const periodosResultado: BoletinPeriodoResultado[] = ordered.map((p) => {
    const scores = buckets.get(p.id) ?? [];
    return { id: p.id, nombre: p.nombre, cantidad: scores.length, promedio: promedioDe(scores) };
  });

  const promediosConNota = periodosResultado
    .map((p) => p.promedio)
    .filter((v): v is number => v != null);

  return {
    periodos: periodosResultado,
    sinPeriodo: { cantidad: sinPeriodo.length, promedio: promedioDe(sinPeriodo) },
    promedioFinal: promedioDe(promediosConNota)
  };
}
