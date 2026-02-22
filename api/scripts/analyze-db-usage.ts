import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

type OperationName = "find" | "findOne" | "insertOne" | "updateOne" | "deleteOne" | "aggregate" | "count";

type OperationRecord = {
  file: string;
  line: number;
  operation: OperationName;
  filter?: string;
  pipeline?: string;
  update?: string;
  options?: string;
  sort?: string;
  limit?: string;
  skip?: string;
  operators: string[];
};

type CollectionInventory = {
  read: OperationRecord[];
  write: OperationRecord[];
  indexesReferenced: string[];
};

type Inventory = {
  collections: Record<string, CollectionInventory>;
  generatedAt: string;
  scannedFiles: number;
};

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const OUT_JSON = path.join(ROOT, "docs", "db-inventory.json");
const OUT_MD = path.join(ROOT, "docs", "db-inventory.md");

const TARGET_DIRS = [path.join(SRC, "routes"), path.join(SRC, "lib")];
const OP_METHODS = new Set(["find", "findOne", "insertOne", "updateOne", "deleteOne", "aggregate", "count", "countDocuments"]);

function walkTsFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkTsFiles(full));
    } else if (entry.isFile() && full.endsWith(".ts")) {
      files.push(full);
    }
  }
  return files;
}

function ensureCollection(inventory: Inventory, name: string): CollectionInventory {
  if (!inventory.collections[name]) {
    inventory.collections[name] = { read: [], write: [], indexesReferenced: [] };
  }
  return inventory.collections[name];
}

function extractMongoOperators(text?: string): string[] {
  if (!text) return [];
  return Array.from(new Set(text.match(/\$[a-zA-Z]+/g) ?? [])).sort();
}

function getCollectionFromExpression(node: ts.Expression, aliases: Map<string, string>): string | null {
  if (ts.isIdentifier(node)) {
    return aliases.get(node.text) ?? null;
  }
  if (ts.isCallExpression(node)) {
    const expr = node.expression;
    if (ts.isPropertyAccessExpression(expr)) {
      if (expr.name.text === "collection") {
        const arg = node.arguments[0];
        if (arg && ts.isStringLiteral(arg)) return arg.text;
      }
      return getCollectionFromExpression(expr.expression, aliases);
    }
  }
  if (ts.isPropertyAccessExpression(node)) {
    return getCollectionFromExpression(node.expression, aliases);
  }
  if (ts.isAwaitExpression(node)) {
    return getCollectionFromExpression(node.expression, aliases);
  }
  return null;
}

function lineOf(sf: ts.SourceFile, pos: number): number {
  return ts.getLineAndCharacterOfPosition(sf, pos).line + 1;
}

function argText(sf: ts.SourceFile, call: ts.CallExpression, idx: number): string | undefined {
  const arg = call.arguments[idx];
  return arg ? arg.getText(sf) : undefined;
}

function gatherFindModifiers(call: ts.CallExpression, sf: ts.SourceFile): Pick<OperationRecord, "sort" | "limit" | "skip"> {
  const out: Pick<OperationRecord, "sort" | "limit" | "skip"> = {};
  let current: ts.Node = call;
  while (current.parent && ts.isPropertyAccessExpression(current.parent) && current.parent.expression === current && current.parent.parent && ts.isCallExpression(current.parent.parent)) {
    const chainedCall = current.parent.parent;
    const method = current.parent.name.text;
    if (method === "sort") out.sort = argText(sf, chainedCall, 0);
    if (method === "limit") out.limit = argText(sf, chainedCall, 0);
    if (method === "skip") out.skip = argText(sf, chainedCall, 0);
    current = chainedCall;
  }
  return out;
}

function analyzeFile(filePath: string, inventory: Inventory): void {
  const content = fs.readFileSync(filePath, "utf8");
  const sf = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const aliases = new Map<string, string>();
  const rel = path.relative(ROOT, filePath).replace(/\\/g, "/");

  const visit = (node: ts.Node) => {
    if (ts.isVariableDeclaration(node) && node.initializer && ts.isIdentifier(node.name)) {
      const coll = getCollectionFromExpression(node.initializer, aliases);
      if (coll) aliases.set(node.name.text, coll);
    }

    if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression)) {
      const method = node.expression.name.text;
      const collection = getCollectionFromExpression(node.expression.expression, aliases);

      if (method === "createIndexes" && collection) {
        const indexArg = node.arguments[0];
        if (indexArg && ts.isArrayLiteralExpression(indexArg)) {
          const target = ensureCollection(inventory, collection);
          for (const el of indexArg.elements) {
            if (!ts.isObjectLiteralExpression(el)) continue;
            for (const prop of el.properties) {
              if (!ts.isPropertyAssignment(prop)) continue;
              if (prop.name.getText(sf) !== "key") continue;
              if (!ts.isObjectLiteralExpression(prop.initializer)) continue;
              for (const keyProp of prop.initializer.properties) {
                if (!ts.isPropertyAssignment(keyProp)) continue;
                const keyName = keyProp.name.getText(sf).replace(/["']/g, "");
                target.indexesReferenced.push(keyName);
              }
            }
          }
        }
      }

      if (OP_METHODS.has(method) && collection) {
        const operation: OperationName = method === "countDocuments" ? "count" : (method as OperationName);
        const filter = argText(sf, node, 0);
        const update = operation === "updateOne" ? argText(sf, node, 1) : undefined;
        const optionsIdx = operation === "updateOne" ? 2 : operation === "findOne" ? 1 : undefined;
        const options = typeof optionsIdx === "number" ? argText(sf, node, optionsIdx) : undefined;
        const modifiers = operation === "find" ? gatherFindModifiers(node, sf) : {};
        const pipeline = operation === "aggregate" ? argText(sf, node, 0) : undefined;

        const record: OperationRecord = {
          file: rel,
          line: lineOf(sf, node.getStart(sf)),
          operation,
          filter: operation === "aggregate" ? undefined : filter,
          pipeline,
          update,
          options,
          ...modifiers,
          operators: Array.from(new Set([
            ...extractMongoOperators(filter),
            ...extractMongoOperators(update),
            ...extractMongoOperators(options),
            ...extractMongoOperators(pipeline),
            ...extractMongoOperators((modifiers as any).sort),
          ])).sort()
        };

        const target = ensureCollection(inventory, collection);
        if (operation === "insertOne" || operation === "updateOne" || operation === "deleteOne") {
          target.write.push(record);
        } else {
          target.read.push(record);
        }
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sf);
}

function uniq<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

function summarizeMd(inventory: Inventory): string {
  const collections = Object.entries(inventory.collections).sort((a, b) => a[0].localeCompare(b[0]));
  const lines: string[] = [];
  lines.push("# Inventario MongoDB (API)", "", `Generado: ${inventory.generatedAt}`, "");
  lines.push("## Resumen general", "");
  lines.push(`- Archivos analizados: **${inventory.scannedFiles}**`);
  lines.push(`- Colecciones detectadas: **${collections.length}**`, "");
  lines.push("## Colecciones", "");

  for (const [name, data] of collections) {
    const total = data.read.length + data.write.length;
    const indexes = data.indexesReferenced.length ? uniq(data.indexesReferenced).join(", ") : "no encontrado";
    lines.push(`### ${name}`);
    lines.push(`- Operaciones lectura: ${data.read.length}`);
    lines.push(`- Operaciones escritura: ${data.write.length}`);
    lines.push(`- Total operaciones: ${total}`);
    lines.push(`- Campos indexados: ${indexes}`);

    const sample = [...data.read, ...data.write].slice(0, 3);
    if (sample.length === 0) {
      lines.push("- Ejemplos: no encontrado");
    } else {
      lines.push("- Ejemplos:");
      for (const op of sample) {
        const detail = op.filter ?? op.pipeline ?? "sin filtro";
        lines.push(`  - ${op.operation} (${op.file}:${op.line}) → ${detail}`);
      }
    }
    if (total < 3) {
      lines.push("- Cobertura: **menos de 3 operaciones detectadas** (no encontrado para completar mínimo).", "");
    } else {
      lines.push("");
    }
  }

  lines.push("## Nota", "");
  lines.push("Este inventario se construye por análisis estático de TypeScript. Puede no resolver colecciones dinámicas o alias complejos.");
  return lines.join("\n");
}

function main() {
  const files = TARGET_DIRS.flatMap((dir) => walkTsFiles(dir));
  const inventory: Inventory = {
    collections: {},
    generatedAt: new Date().toISOString(),
    scannedFiles: files.length
  };

  for (const file of files) analyzeFile(file, inventory);

  for (const collection of Object.values(inventory.collections)) {
    collection.indexesReferenced = uniq(collection.indexesReferenced).sort();
  }

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(inventory, null, 2) + "\n", "utf8");
  fs.writeFileSync(OUT_MD, summarizeMd(inventory) + "\n", "utf8");

  console.log(`Inventario generado en ${path.relative(ROOT, OUT_JSON)} y ${path.relative(ROOT, OUT_MD)}`);
}

main();
