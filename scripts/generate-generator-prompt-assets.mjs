import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const run = (cmd) => execSync(cmd, { encoding: 'utf8' }).trim();

const mathIndex = readFileSync('apps/web/src/generador/matematicas/index.ts','utf8');
const mathIds = [...mathIndex.matchAll(/^\s*(\d+):\s*\w+/gm)].map((m)=>m[1]);

const quimicaIndex = readFileSync('apps/web/src/generador/quimica/indexQuimica.ts','utf8');
const quimicaIds = [...quimicaIndex.matchAll(/^\s*(\d+):\s*\w+/gm)].map((m)=>m[1]);

const economiaIndex = readFileSync('apps/web/src/generador/economia/indexEconomia.ts','utf8');
const econSections = [
  ['contabilidad', /GENERADORES_CONTABILIDAD:[\s\S]*?= \{([\s\S]*?)\};/],
  ['finanzas', /GENERADORES_FINANZAS:[\s\S]*?= \{([\s\S]*?)\};/],
  ['economia_ar', /GENERADORES_ECONOMIA_AR:[\s\S]*?= \{([\s\S]*?)\};/],
  ['economia', /GENERADORES_ECONOMIA:[\s\S]*?= \{([\s\S]*?)\};/],
];
const econIds = [];
for (const [prefix, regex] of econSections){
  const m = economiaIndex.match(regex);
  if (!m) continue;
  for (const id of [...m[1].matchAll(/\b(\d+)\s*:/g)].map((x)=>x[1])) econIds.push(`${prefix}/${id}`);
}

const fisicaIds = run("rg -n \"readonly id = \\\"[^\\\"]+\\\"\" apps/web/src/generador/fisica/*.ts")
  .split('\n')
  .map((line)=> line.match(/readonly id = \"([^\"]+)\"/)?.[1])
  .filter(Boolean);

const uniq = (arr)=> [...new Set(arr)];
const targetIds = [
  ...uniq(mathIds).map((id)=>`matematicas:${id}`),
  ...uniq(quimicaIds).map((id)=>`quimica:${id}`),
  ...uniq(econIds).map((k)=>`economia:${k}`),
  ...uniq(fisicaIds),
].sort();

const seedTs = `export type PromptSeed = {\n  id: string;\n  targetType: \"GENERATOR\";\n  targetId: string;\n  kind: \"TEXT\";\n  title: string;\n  bodyText: string;\n  source: \"DEFAULT\";\n  status: \"ACTIVE\";\n};\n\nexport const GENERATOR_PROMPT_SEEDS: PromptSeed[] = ${JSON.stringify(targetIds.map((targetId)=>({
  id:`prompt:${targetId}`,
  targetType:'GENERATOR',
  targetId,
  kind:'TEXT',
  title: targetId,
  bodyText: `Prompt activo para ${targetId}`,
  source:'DEFAULT',
  status:'ACTIVE'
})), null, 2)};\n`;
writeFileSync('api/src/seeds/generator-prompts.ts', seedTs);

const inlineRaw = run("rg -n \"enunciado\\s*:|enunciado\\s*=\" apps/web/src/generador --glob '!**/__tests__/**'");
const lines = inlineRaw.split('\n').filter(Boolean);
const inv = ['# Inventario inicial de enunciados inline', '', 'Generado automáticamente desde `apps/web/src/generador/**`.', '', '| targetId (estimado) | archivo | línea | extracto |', '|---|---|---:|---|'];
for (const l of lines){
  const m = l.match(/^(.*?):(\d+):(.*)$/);
  if(!m) continue;
  const file=m[1], line=m[2], extract=m[3].trim().replace(/\|/g,'\\|');
  let target='N/A';
  const mm=file.match(/matematicas\/tema(\d+)_/); if(mm) target=`matematicas:${Number(mm[1])}`;
  const qm=file.match(/quimica\/(\d+)_/); if(qm) target=`quimica:${Number(qm[1])}`;
  const em=file.match(/economia\/(contab|finanzas|economia_ar|economia)_(\d+)_/); if(em){ const p=em[1]==='contab'?'contabilidad':em[1]; target=`economia:${p}/${Number(em[2])}`; }
  const fm=file.match(/fisica\/([^.]+)\.ts$/); if(fm) target=`fisica:* (${fm[1]})`;
  inv.push(`| ${target} | ${file} | ${line} | ${extract} |`);
}
writeFileSync('docs/generador-prompts-inventario.md', inv.join('\n')+'\n');

console.log(`Generated seeds for ${targetIds.length} targetIds and inventory rows ${lines.length}`);
