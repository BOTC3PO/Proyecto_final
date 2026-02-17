import { getSqliteDictionaryService, isSqliteDictionaryEnabled } from "../src/db/sqliteDictionary";

if (!isSqliteDictionaryEnabled()) {
  console.error("Set DB_KIND=sqlite before running this script.");
  process.exit(1);
}

const service = getSqliteDictionaryService();
const lang = process.env.DICT_LANG ?? "es";
const words = (process.env.DICT_WORDS ?? "casa,perro,gato,agua,sol,luna,árbol,libro,camino,tiempo")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);
const prefixes = (process.env.DICT_PREFIXES ?? "a,b,c,d,e,pe,pr,ca,co,ti")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

const now = () => Number(process.hrtime.bigint()) / 1e6;

console.log("Running lookup smoke tests...");
for (const word of words) {
  const start = now();
  const found = service.lookup(lang, word);
  const elapsed = (now() - start).toFixed(2);
  console.log(`lookup(${lang}, ${word}) -> ${found ? "found" : "not_found"} in ${elapsed}ms`);
}

console.log("Running prefix smoke tests...");
for (const q of prefixes) {
  const start = now();
  const result = service.prefix(lang, q, 50);
  const elapsed = (now() - start).toFixed(2);
  console.log(`prefix(${lang}, ${q}) -> ${result.length} rows in ${elapsed}ms`);
}
