/** Reemplaza `{clave}` en un texto traducido: `interpolar(t("x"), { dias: 3 })`. */
export const interpolar = (texto: string, valores: Record<string, string | number>) =>
  Object.entries(valores).reduce((acc, [k, v]) => acc.split(`{${k}}`).join(String(v)), texto);
