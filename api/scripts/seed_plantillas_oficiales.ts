/**
 * Siembra las plantillas VBLang OFICIALES como `PlantillaEjercicio` del sistema.
 *
 * `packages/vblang/src/templates/*-oficiales.ts` tiene 136 plantillas curadas
 * que portan al DSL las FÓRMULAS de los generadores paramétricos de matemáticas,
 * física, química, economía, biología e informática. Cada una guarda el vínculo
 * `subtipoOriginal` con el generador que reemplaza, y la equivalencia está
 * verificada por los tests de `generadoresV2/__tests__/*-equivalencia.spec.ts`
 * ("oráculo compartido": una fórmula pura que TANTO el generador COMO la
 * plantilla compilada tienen que satisfacer).
 *
 * El problema que resuelve este script: **nada las sembraba**. El diseño F6-01
 * las quería en la base con `ownerUserId: SYSTEM_OWNER_ID` para que aparecieran
 * en la biblioteca de plantillas, y `generadoresV2/catalog.ts` incluso retiró 6
 * subtipos del catálogo de creación *porque* "ya tienen un reemplazo cableado
 * como plantilla oficial" — reemplazos que en una base recién creada no existen.
 *
 * Idempotente: usa `upsert` por id, así que se puede correr sobre una base con
 * datos sin duplicar ni pisar plantillas de docentes. Verificado contra la base
 * local: dos corridas seguidas dejan 153 filas totales y 132 del sistema.
 *
 *   pnpm --filter api seed:oficiales
 *
 * Va encadenado en `db:seed`/`seed:demo` para que un entorno nuevo arranque con
 * la biblioteca cargada. Se encadena en vez de importarse desde `seed_demo.ts`
 * porque ese script corre con `ts-node` (CJS) y este necesita `tsx`: `@vb/vblang`
 * es ESM y `require()`-earlo falla con ERR_REQUIRE_ESM.
 */
import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import {
  BIOLOGIA_OFICIALES,
  ECONOMIA_AR_OFICIALES,
  ECONOMIA_GENERAL_OFICIALES,
  FISICA_CINEMATICA_OFICIALES,
  FISICA_DINAMICA_OFICIALES,
  FISICA_ELECTRICIDAD_OFICIALES,
  FISICA_ENERGIA_OFICIALES,
  FISICA_FLUIDOS_OFICIALES,
  FISICA_ONDAS_OFICIALES,
  FISICA_TERMODINAMICA_OFICIALES,
  INFORMATICA_OFICIALES,
  MATEMATICAS_ALGEBRA_OFICIALES,
  MATEMATICAS_ANALISIS_OFICIALES,
  MATEMATICAS_ARITMETICA_OFICIALES,
  MATEMATICAS_CALCULO_OFICIALES,
  MATEMATICAS_OFICIALES,
  MATEMATICAS_WO8_OFICIALES,
  QUIMICA_ESTEQUEOMETRIA_OFICIALES,
  QUIMICA_OFICIALES,
  compile,
  generate,
  parse,
  type PlantillaOficial,
} from "@vb/vblang";
import { SYSTEM_OWNER_ID } from "../src/lib/vblang-types";

/** Las 19 colecciones, en el orden en que se listan en la biblioteca. */
const COLECCIONES: { fuente: string; items: readonly PlantillaOficial[] }[] = [
  { fuente: "matematicas-aritmetica", items: MATEMATICAS_ARITMETICA_OFICIALES },
  { fuente: "matematicas-algebra", items: MATEMATICAS_ALGEBRA_OFICIALES },
  { fuente: "matematicas-analisis", items: MATEMATICAS_ANALISIS_OFICIALES },
  { fuente: "matematicas-calculo", items: MATEMATICAS_CALCULO_OFICIALES },
  { fuente: "matematicas", items: MATEMATICAS_OFICIALES },
  { fuente: "matematicas-wo8", items: MATEMATICAS_WO8_OFICIALES },
  { fuente: "fisica-cinematica", items: FISICA_CINEMATICA_OFICIALES },
  { fuente: "fisica-dinamica", items: FISICA_DINAMICA_OFICIALES },
  { fuente: "fisica-energia", items: FISICA_ENERGIA_OFICIALES },
  { fuente: "fisica-electricidad", items: FISICA_ELECTRICIDAD_OFICIALES },
  { fuente: "fisica-ondas", items: FISICA_ONDAS_OFICIALES },
  { fuente: "fisica-fluidos", items: FISICA_FLUIDOS_OFICIALES },
  { fuente: "fisica-termodinamica", items: FISICA_TERMODINAMICA_OFICIALES },
  { fuente: "quimica", items: QUIMICA_OFICIALES },
  { fuente: "quimica-estequeometria", items: QUIMICA_ESTEQUEOMETRIA_OFICIALES },
  { fuente: "economia-general", items: ECONOMIA_GENERAL_OFICIALES },
  { fuente: "economia-ar", items: ECONOMIA_AR_OFICIALES },
  { fuente: "biologia", items: BIOLOGIA_OFICIALES },
  { fuente: "informatica", items: INFORMATICA_OFICIALES },
];

/**
 * Una plantilla oficial que no genera es peor que ninguna: el docente la importa
 * y le explota en la cara del alumno. Se verifica ANTES de sembrar.
 */
function verificar(p: PlantillaOficial): string | null {
  try {
    const compilada = compile(parse(p.codigoDsl));
    generate(compilada, { seed: `seed-${p.id}` });
    return null;
  } catch (e) {
    return (e as Error).message;
  }
}

async function main() {
  const now = new Date().toISOString();
  const fallidas: { id: string; fuente: string; error: string }[] = [];
  let sembradas = 0;

  for (const { fuente, items } of COLECCIONES) {
    for (const p of items) {
      const error = verificar(p);
      if (error) {
        fallidas.push({ id: p.id, fuente, error });
        continue;
      }
      await prisma.plantillaEjercicio.upsert({
        where: { id: p.id },
        create: {
          id: p.id,
          ownerUserId: SYSTEM_OWNER_ID,
          schoolId: null,
          // Públicas y ya aprobadas: son contenido del sistema, no pasan por
          // la moderación que aplica a lo que publica un docente.
          visibility: "publica",
          publicAprobado: true,
          nombre: p.nombre,
          descripcion: p.descripcion,
          materia: p.materia,
          tags: JSON.stringify(p.tags),
          codigoDsl: p.codigoDsl,
          version: 1,
          isDeleted: false,
          createdAt: now,
          updatedAt: now,
        },
        update: {
          // Re-sembrar actualiza el contenido pero NO resucita una que un admin
          // haya dado de baja a propósito.
          nombre: p.nombre,
          descripcion: p.descripcion,
          materia: p.materia,
          tags: JSON.stringify(p.tags),
          codigoDsl: p.codigoDsl,
          updatedAt: now,
        },
      });
      sembradas += 1;
    }
  }

  const total = COLECCIONES.reduce((n, c) => n + c.items.length, 0);
  console.log(`[oficiales] ${sembradas}/${total} plantillas sembradas`);
  if (fallidas.length > 0) {
    console.error(`[oficiales] ${fallidas.length} NO se sembraron porque no generan:`);
    for (const f of fallidas) console.error(`  - ${f.fuente}/${f.id}: ${f.error}`);
    process.exitCode = 1;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => void prisma.$disconnect());
