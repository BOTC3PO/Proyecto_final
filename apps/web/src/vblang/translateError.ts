/**
 * Traduce mensajes de error/lint que vienen de `@vb/vblang` (paquete
 * compartido, sin i18n propio — los ~200 mensajes están escritos en español
 * directo en el parser/lexer/evaluador).
 *
 * Estrategia (batch, ver docs/vblang/error-templates): cada mensaje posible
 * se extrajo por AST del código fuente y se tradujo UNA vez (Ollama,
 * translategemma:12b) a cada idioma soportado, preservando los valores
 * dinámicos interpolados (`{0}`, `{1}`, ...) como placeholders. En runtime,
 * matcheamos el mensaje ya renderizado contra la regex de cada template
 * (generada a partir del MISMO string en español que produce el mensaje) y
 * reinterpolamos los valores capturados en la plantilla traducida.
 *
 * Si el mensaje no matchea ningún template conocido (por ejemplo texto
 * autorado por el docente vía el builtin `error()` del DSL, o un mensaje
 * nuevo agregado al parser después de esta traducción), se devuelve tal
 * cual en español — nunca se rompe la UI por un mensaje no traducido.
 */
import errorTemplates from "./errorTemplates.generated.json";
import type { LanguageId } from "../i18n/index";

interface ErrorTemplate {
  regexSource: string;
  translations: Partial<Record<LanguageId, string>>;
}

let compiled: { re: RegExp; translations: Partial<Record<LanguageId, string>> }[] | null = null;

function getCompiled() {
  if (!compiled) {
    compiled = (errorTemplates as ErrorTemplate[]).map((t) => ({
      re: new RegExp(t.regexSource),
      translations: t.translations,
    }));
  }
  return compiled;
}

export function translateVblangMessage(message: string, lang: LanguageId): string {
  if (lang === "es" || lang === "es-AR") return message;
  for (const { re, translations } of getCompiled()) {
    const template = translations[lang];
    if (!template) continue;
    const m = message.match(re);
    if (!m) continue;
    // Reemplaza {0}, {1}, ... por los grupos capturados (los valores
    // dinámicos, en el mismo orden en que aparecen en el mensaje original).
    return template.replace(/\{(\d+)\}/g, (_, idx) => m[Number(idx) + 1] ?? "");
  }
  return message;
}
