import { getSqliteDictionaryService, isSqliteDictionaryEnabled } from "../src/db/sqliteDictionary";

if (!isSqliteDictionaryEnabled()) {
  console.error("Set DB_KIND=sqlite before running this script.");
  process.exit(1);
}

const service = getSqliteDictionaryService();
const lang = process.env.DICT_LANG ?? "es";
const word = process.env.DICT_WORD ?? "casa";
const prefix = process.env.DICT_PREFIX ?? "ca";
const limit = Number(process.env.DICT_LIMIT ?? 50);

const plans = service.getExplainPlans(lang, word, prefix, limit);
console.log("lookup plan:");
console.table(plans.lookupPlan);
console.log("prefix plan:");
console.table(plans.prefixPlan);
console.log("has_lang_word_index:", service.verifyLangWordIndex());
