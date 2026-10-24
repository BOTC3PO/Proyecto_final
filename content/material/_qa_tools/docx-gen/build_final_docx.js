/**
 * Genera la Parte 1 del documento final: todo lo generado en content/material/
 * (mapa de temas, materias regulares, oficios, teoría-extendida, examen-jefe,
 * idiomas extranjeros) + nota de correcciones aplicadas en esta sesión.
 *
 * Uso: node build_final_docx.js [--quick]   (--quick = sólo 2 materias, para probar)
 */
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow,
  TableCell, WidthType, BorderStyle, AlignmentType,
} = require("docx");

const REPO = "/home/javier/Proyecto_final";
const QUICK = process.argv.includes("--quick");

// ---------- markdown liviano -> párrafos docx ----------

function stripInline(s) {
  return s
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .trim();
}

function mdToParagraphs(md, baseHeadingOffset = 0) {
  const lines = md.split("\n");
  const out = [];
  const HLEVELS = [
    HeadingLevel.HEADING_3, HeadingLevel.HEADING_4, HeadingLevel.HEADING_5,
    HeadingLevel.HEADING_6, HeadingLevel.HEADING_6, HeadingLevel.HEADING_6,
  ];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("```")) {
      const code = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        code.push(lines[i]);
        i++;
      }
      i++; // cierre ```
      for (const c of code.slice(0, 400)) {
        out.push(new Paragraph({
          children: [new TextRun({ text: c || " ", font: "Courier New", size: 16 })],
          spacing: { after: 0 },
        }));
      }
      continue;
    }
    const hMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (hMatch) {
      const level = hMatch[1].length - 1 + baseHeadingOffset;
      out.push(new Paragraph({
        text: stripInline(hMatch[2]),
        heading: HLEVELS[Math.min(level, HLEVELS.length - 1)],
      }));
      i++;
      continue;
    }
    if (/^\s*[-*]\s+/.test(line)) {
      out.push(new Paragraph({
        text: stripInline(line.replace(/^\s*[-*]\s+/, "")),
        bullet: { level: 0 },
      }));
      i++;
      continue;
    }
    if (line.trim() === "" || line.trim() === "---") {
      i++;
      continue;
    }
    out.push(new Paragraph({ text: stripInline(line), spacing: { after: 120 } }));
    i++;
  }
  return out;
}

function heading(text, level) {
  return new Paragraph({ text, heading: level });
}

function para(text, opts = {}) {
  return new Paragraph({ text, ...opts });
}

// ---------- condensar cuestionario.md (bloques VBLang) a enunciado+respuesta ----------

function extractBlocks(text) {
  const lines = text.split("\n");
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    if (/^```\w*\s*$/.test(lines[i])) {
      const start = i + 1;
      let j = start;
      while (j < lines.length && lines[j].trim() !== "```") j++;
      if (j < lines.length) {
        blocks.push(lines.slice(start, j).join("\n"));
        i = j + 1;
        continue;
      }
    }
    i++;
  }
  return blocks;
}

// Extrae el valor de un bloque `clave: |` multilínea recorriendo líneas a
// mano (sin regex de cuantificadores anidados — eso causó backtracking
// catastrófico en algunos archivos reales).
function extractPipeBlock(lines, keyLineIdx) {
  const out = [];
  let i = keyLineIdx + 1;
  while (i < lines.length) {
    const l = lines[i];
    if (l.trim() !== "" && !/^\s/.test(l)) break; // línea sin indentar = fin del bloque
    out.push(l.replace(/^\s+/, ""));
    i++;
  }
  return out.join(" ").trim();
}

function condenseBlock(block) {
  const lines = block.split("\n");
  const tipoM = block.match(/^tipo:\s*"?(\w+)"?/m);
  let enun = "(sin enunciado detectado)";
  let resp = "(dinámica)";
  for (let idx = 0; idx < lines.length; idx++) {
    const l = lines[idx];
    const quotedM = l.match(/^enunciado:\s*"(.*)"\s*$/);
    if (quotedM) {
      enun = quotedM[1];
      continue;
    }
    if (/^enunciado:\s*\|\s*$/.test(l)) {
      enun = extractPipeBlock(lines, idx);
      continue;
    }
    const respM = l.match(/^respuesta(?:_orden)?:\s*(.+)$/);
    if (respM) resp = respM[1].trim();
  }
  const tipo = tipoM ? tipoM[1] : "?";
  enun = enun.replace(/\\n/g, " ").trim();
  if (enun.length > 300) enun = enun.slice(0, 300) + "…";
  if (resp.length > 150) resp = resp.slice(0, 150) + "…";
  return { tipo, enun, resp };
}

function cuestionarioSummaryParagraphs(mdText) {
  const blocks = extractBlocks(mdText);
  const out = [para(`${blocks.length} preguntas.`, { italics: true, spacing: { after: 100 } })];
  for (let idx = 0; idx < blocks.length; idx++) {
    const { tipo, enun, resp } = condenseBlock(blocks[idx]);
    out.push(new Paragraph({
      children: [
        new TextRun({ text: `${idx + 1}. [${tipo}] `, bold: true }),
        new TextRun({ text: enun }),
      ],
      spacing: { after: 20 },
    }));
    out.push(new Paragraph({
      children: [new TextRun({ text: `   Respuesta: ${resp}`, italics: true, size: 18 })],
      spacing: { after: 100 },
    }));
  }
  return out;
}

// ---------- walker genérico materia/tema (teoria.md + cuestionario.md) ----------

function walkMateriaTree(root, sectionHeading) {
  const out = [heading(sectionHeading, HeadingLevel.HEADING_1)];
  if (!fs.existsSync(root)) return out;
  const materias = fs.readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
  for (const materia of materias) {
    const materiaDir = path.join(root, materia);
    const temas = fs.readdirSync(materiaDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort();
    if (temas.length === 0) continue;
    out.push(heading(materia.replace(/-/g, " "), HeadingLevel.HEADING_2));
    for (const tema of temas) {
      const temaDir = path.join(materiaDir, tema);
      const teoriaPath = path.join(temaDir, "teoria.md");
      const cuestPath = path.join(temaDir, "cuestionario.md");
      out.push(heading(tema.replace(/-/g, " "), HeadingLevel.HEADING_3));
      if (fs.existsSync(teoriaPath)) {
        out.push(...mdToParagraphs(fs.readFileSync(teoriaPath, "utf8"), 3));
      }
      if (fs.existsSync(cuestPath)) {
        out.push(heading("Cuestionario", HeadingLevel.HEADING_4));
        out.push(...cuestionarioSummaryParagraphs(fs.readFileSync(cuestPath, "utf8")));
      }
    }
  }
  return out;
}

// ---------- teoría extendida (JSON de libros) ----------

function teoriaExtendidaSection() {
  const dir = path.join(REPO, "content/material/teoria-extendida");
  const out = [heading("Teoría extendida (libros) — NUEVO", HeadingLevel.HEADING_1)];
  out.push(para(
    "No estaba en la preview original — generado después. 11 materias, formato book.pages@1.1.",
    { italics: true },
  ));
  if (!fs.existsSync(dir)) return out;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json")).sort();
  for (const f of files) {
    const materia = f.replace(".json", "");
    let book;
    try {
      book = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    } catch {
      continue;
    }
    out.push(heading(materia.replace(/-/g, " "), HeadingLevel.HEADING_2));
    const pages = book.pages || [];
    out.push(para(`${pages.length} páginas.`, { italics: true }));
    for (const page of pages) {
      if (page.title) out.push(heading(page.title, HeadingLevel.HEADING_3));
      for (const block of page.blocks || []) {
        if (block.type === "text" && block.content) {
          out.push(...mdToParagraphs(block.content, 3));
        } else if (block.text) {
          out.push(para(String(block.text)));
        }
      }
    }
  }
  return out;
}

// ---------- examen-jefe (resumen, evita duplicar preguntas ya en Materias) ----------

function examenJefeSection() {
  const dir = path.join(REPO, "content/material/examen-jefe");
  const out = [heading("Examen jefe — NUEVO", HeadingLevel.HEADING_1)];
  out.push(para(
    "No estaba en la preview original — generado después. Es un pool AGREGADO de " +
    "los mismos cuestionario.md ya listados en Materias (no se repiten las preguntas acá, " +
    "sólo el resumen de clusters/logros). Nota: todavía no incluye idiomas extranjeros " +
    "(ninguna carpeta de idiomas dentro de examen-jefe/ a esta fecha).",
    { italics: true },
  ));
  if (!fs.existsSync(dir)) return out;
  const materias = fs.readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory()).map((d) => d.name).sort();
  for (const materia of materias) {
    out.push(heading(materia.replace(/-/g, " "), HeadingLevel.HEADING_2));
    const files = fs.readdirSync(path.join(dir, materia)).filter((f) => f.endsWith(".md")).sort();
    const rows = [new TableRow({
      children: ["Cluster", "Logro", "Preguntas"].map((t) => new TableCell({
        width: { size: 33, type: WidthType.PERCENTAGE },
        children: [para(t, { bold: true })],
      })),
    })];
    for (const f of files) {
      const text = fs.readFileSync(path.join(dir, materia, f), "utf8");
      const titleM = text.match(/^#\s+(.+)$/m);
      const logroM = text.match(/^>\s+(.+)$/m);
      const nBlocks = extractBlocks(text).length;
      rows.push(new TableRow({
        children: [
          f.replace(".md", ""),
          titleM ? titleM[1] : "",
          String(nBlocks),
        ].map((t) => new TableCell({ children: [para(t)] })),
      }));
    }
    out.push(new Table({ rows, width: { size: 100, type: WidthType.PERCENTAGE } }));
    out.push(para(""));
  }
  return out;
}

// ---------- idiomas extranjeros (borradores _crudo, aún no finalizados) ----------

function idiomasSection() {
  const dir = path.join(REPO, "content/material/_borradores-gemma/idiomas-extranjeros");
  const audioDir = path.join(REPO, "content/material/_audio-generado");
  const out = [heading("Idiomas extranjeros — NUEVO (borradores)", HeadingLevel.HEADING_1)];
  out.push(para(
    "No estaba en la preview original. 380 temas generados en los 10 idiomas del plan " +
    "(en/de/fr/it/pt-BR/pt-PT/ja/ko/zh/eo), TODAVÍA en formato _crudo — no finalizados a " +
    "teoria.md/cuestionario.md validado como el resto de content/material/. Se generó audio " +
    "real (Piper/Kokoro/eSpeak-NG) para los temas listening/speaking donde se detectó diálogo " +
    "en el borrador — se marca abajo cuáles.",
    { italics: true },
  ));
  if (!fs.existsSync(dir)) return out;
  const idiomas = fs.readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory()).map((d) => d.name).sort();
  for (const idioma of idiomas) {
    out.push(heading(idioma, HeadingLevel.HEADING_2));
    const temas = fs.readdirSync(path.join(dir, idioma), { withFileTypes: true })
      .filter((d) => d.isDirectory()).map((d) => d.name).sort();
    for (const tema of temas) {
      const audioPath = path.join(audioDir, idioma, `${tema}.mp3`);
      const hasAudio = fs.existsSync(audioPath);
      out.push(heading(`${tema}${hasAudio ? "  🔊 (audio generado)" : ""}`, HeadingLevel.HEADING_3));
      const teoriaPath = path.join(dir, idioma, tema, "teoria_crudo.md");
      if (fs.existsSync(teoriaPath)) {
        out.push(...mdToParagraphs(fs.readFileSync(teoriaPath, "utf8"), 3));
      }
    }
  }
  return out;
}

// ---------- correcciones aplicadas (resumen de esta sesión) ----------

function correccionesSection() {
  return [
    heading("Correcciones aplicadas (2026-08) — NUEVO", HeadingLevel.HEADING_1),
    para(
      "Se re-validaron los 904 cuestionario.md de content/material/ contra el compilador " +
      "real de VBLang (content/material/_validate_dsl.ts). Estado antes: 261 archivos con " +
      "1297 bloques rotos. Estado después: 904/904 archivos, 0 bloques rotos.",
    ),
    para(
      "Se corrigieron además ~20 bugs de sintaxis del DSL no documentados hasta ahora " +
      "(palabras reservadas adicionales, formatos de escape, indexado sobre uno_de() ya " +
      "resuelto, etc.) y varios errores de CONTENIDO reales detectados de paso (fórmulas " +
      "físicas invertidas, datos históricos con fechas/actores equivocados, respuestas " +
      "desconectadas del sorteo aleatorio).",
    ),
    para(
      "Se agregó soporte de Audio como VisualSpec nativo en VBLang (Tiza), reusando los " +
      "componentes ya existentes del editor de bloques (AudioBlockRenderer/AudioBlockEditor) " +
      "en vez de duplicar lógica.",
    ),
    para(
      `content/material/oficios/ (28 cuestionario.md, estructura oficios/<oficio>/<tema>/, ` +
      `un nivel más profundo que el resto) no estaba cubierto por el rescan original de ` +
      `904 archivos — se validó aparte, ver detalle en la sección Oficios.`,
    ),
  ];
}

// ---------- documento ----------

function main() {
  const sections = [];
  sections.push(
    para("Virtual Book — Documento final, Parte 1", { heading: HeadingLevel.TITLE }),
    para(
      "Todo el contenido generado, incluyendo lo que la preview original no cubría " +
      "(teoría extendida, examen jefe, idiomas extranjeros) + corrección de errores.",
      { italics: true },
    ),
    para(`Generado ${new Date().toISOString().slice(0, 10)}.`, { italics: true }),
  );

  console.error("Mapa maestro / changelog...");
  sections.push(heading("Mapa maestro", HeadingLevel.HEADING_1));
  sections.push(...mdToParagraphs(fs.readFileSync(path.join(REPO, "content/troncos.md"), "utf8")));
  sections.push(heading("Historial de cambios", HeadingLevel.HEADING_1));
  sections.push(...mdToParagraphs(fs.readFileSync(path.join(REPO, "content/changelog.md"), "utf8")));

  console.error("Correcciones...");
  sections.push(...correccionesSection());

  console.error("Materias...");
  const root = path.join(REPO, "content/material");
  if (QUICK) {
    // sólo 2 materias para probar rápido
    const out = [heading("Materias", HeadingLevel.HEADING_1)];
    for (const m of ["antropologia", "civica"]) {
      const materiaDir = path.join(root, m);
      if (!fs.existsSync(materiaDir)) continue;
      out.push(heading(m, HeadingLevel.HEADING_2));
      const temas = fs.readdirSync(materiaDir, { withFileTypes: true })
        .filter((d) => d.isDirectory()).map((d) => d.name).sort().slice(0, 2);
      for (const t of temas) {
        const temaDir = path.join(materiaDir, t);
        out.push(heading(t, HeadingLevel.HEADING_3));
        const teoriaPath = path.join(temaDir, "teoria.md");
        const cuestPath = path.join(temaDir, "cuestionario.md");
        if (fs.existsSync(teoriaPath)) out.push(...mdToParagraphs(fs.readFileSync(teoriaPath, "utf8"), 3));
        if (fs.existsSync(cuestPath)) {
          out.push(heading("Cuestionario", HeadingLevel.HEADING_4));
          out.push(...cuestionarioSummaryParagraphs(fs.readFileSync(cuestPath, "utf8")));
        }
      }
    }
    sections.push(...out);
  } else {
    // Materias regulares: excluye oficios/ y examen-jefe/ (van en sus propias secciones)
    const excluded = new Set(["oficios", "examen-jefe", "teoria-extendida", "_borradores-gemma", "_qa_tools", "_audio-generado"]);
    const out = [heading("Materias", HeadingLevel.HEADING_1)];
    const materias = fs.readdirSync(root, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !excluded.has(d.name) && !d.name.startsWith("_"))
      .map((d) => d.name).sort();
    for (const materia of materias) {
      const materiaDir = path.join(root, materia);
      const temas = fs.readdirSync(materiaDir, { withFileTypes: true })
        .filter((d) => d.isDirectory()).map((d) => d.name).sort();
      if (temas.length === 0) continue;
      console.error(`  ${materia} (${temas.length} temas)`);
      out.push(heading(materia.replace(/-/g, " "), HeadingLevel.HEADING_2));
      for (const tema of temas) {
        const temaDir = path.join(materiaDir, tema);
        const teoriaPath = path.join(temaDir, "teoria.md");
        const cuestPath = path.join(temaDir, "cuestionario.md");
        out.push(heading(tema.replace(/-/g, " "), HeadingLevel.HEADING_3));
        if (fs.existsSync(teoriaPath)) out.push(...mdToParagraphs(fs.readFileSync(teoriaPath, "utf8"), 3));
        if (fs.existsSync(cuestPath)) {
          out.push(heading("Cuestionario", HeadingLevel.HEADING_4));
          out.push(...cuestionarioSummaryParagraphs(fs.readFileSync(cuestPath, "utf8")));
        }
      }
    }
    sections.push(...out);

    console.error("Oficios...");
    sections.push(...walkMateriaTree(path.join(root, "oficios"), "Oficios"));

    console.error("Teoría extendida...");
    sections.push(...teoriaExtendidaSection());

    console.error("Examen jefe...");
    sections.push(...examenJefeSection());

    console.error("Idiomas extranjeros...");
    sections.push(...idiomasSection());
  }

  const doc = new Document({
    sections: [{ children: sections }],
  });

  const outPath = QUICK
    ? path.join(REPO, "tareas_pendientes/preview-final-QUICK.docx")
    : path.join(REPO, "tareas_pendientes/preview-final-parte1.docx");
  console.error("Empaquetando docx...");
  Packer.toBuffer(doc).then((buf) => {
    fs.writeFileSync(outPath, buf);
    console.error(`Listo: ${outPath} (${(buf.length / 1024 / 1024).toFixed(1)} MB)`);
  });
}

main();
