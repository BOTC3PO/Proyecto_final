import "dotenv/config";
import * as fs from "fs";
import * as path from "path";
import { prisma } from "../src/lib/prisma";

const GENERATOR_LABELS: Record<string, string> = {
  "biologia/biologia":             "Biología — General",
  "informatica/informatica":       "Informática — General",
  "fisica/cinematica":             "Física — Cinemática",
  "fisica/dinamica":               "Física — Dinámica",
  "fisica/electricidad":           "Física — Electricidad",
  "fisica/energia":                "Física — Energía",
  "fisica/fluidos":                "Física — Fluidos",
  "fisica/ondas":                  "Física — Ondas",
  "fisica/termodinamica":          "Física — Termodinámica",
  "quimica/acido_base":            "Química — Ácido-Base",
  "quimica/gases":                 "Química — Gases",
  "quimica/estequiometria":        "Química — Estequiometría",
  "quimica/termoquimica":          "Química — Termoquímica",
  "quimica/atomos_enlaces":        "Química — Átomos y enlaces",
  "quimica/seguridad":             "Química — Seguridad",
  "quimica/equilibrio":            "Química — Equilibrio",
  "matematicas/aritmetica":        "Matemáticas — Aritmética",
  "matematicas/algebra":           "Matemáticas — Álgebra",
  "matematicas/calculo":           "Matemáticas — Cálculo",
  "matematicas/analisis_avanzado": "Matemáticas — Análisis avanzado",
  "economia/economia_general":     "Economía — General",
  "economia/economia_ar":          "Economía — Argentina",
  "economia/finanzas":             "Economía — Finanzas personales",
  "economia/contabilidad":         "Economía — Contabilidad",
  "basic/quiz_generator":          "General — Banco de preguntas",
};

const MATERIA_LABELS: Record<string, string> = {
  biologia:    "Biología",
  fisica:      "Física",
  matematicas: "Matemáticas",
  quimica:     "Química",
  economia:    "Economía",
  informatica: "Informática",
  basic:       "General",
};

function labelFromId(subtipoId: string): string {
  if (subtipoId === subtipoId.toUpperCase()) return subtipoId;
  return subtipoId.replace(/_/g, " ").replace(/^./, (c) => c.toUpperCase());
}

type SubtipoDoc = {
  descripcion?: string;
  variables?: Record<string, unknown>;
  tieneGrafico?: boolean;
};

type GeneratorDoc = {
  subtipos: Record<string, SubtipoDoc>;
};

async function main() {
  const docsPath = path.resolve(__dirname, "../src/base/documentacion_generadores.json");
  const raw = fs.readFileSync(docsPath, "utf-8");
  const docs = JSON.parse(raw) as Record<string, GeneratorDoc>;

  let upserted = 0;
  let skipped = 0;

  for (const [id, doc] of Object.entries(docs)) {
    const [materiaKey] = id.split("/");
    const materia = MATERIA_LABELS[materiaKey] ?? materiaKey;
    const label = GENERATOR_LABELS[id] ?? id;

    const subtiposArray = Object.entries(doc.subtipos ?? {}).map(([key, val]) => ({
      id: key,
      label: labelFromId(key),
      activo: true,
      tieneGrafico: val.tieneGrafico ?? false,
    }));

    try {
      await prisma.generatorConfig.upsert({
        where: { id },
        update: {
          subtipos: JSON.stringify(subtiposArray),
          status: "ACTIVE",
          materia,
          label,
        },
        create: {
          id,
          materia,
          label,
          subtipos: JSON.stringify(subtiposArray),
          status: "ACTIVE",
          enunciados: "{}",
          limits: "{}",
          variablesSchema: "{}",
        },
      });
      console.log(`✓ ${id} — ${subtiposArray.length} subtipos`);
      upserted++;
    } catch (err) {
      console.error(`✗ ${id}:`, err instanceof Error ? err.message : err);
      skipped++;
    }
  }

  console.log(`\nDone: ${upserted} upserted, ${skipped} failed.`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
