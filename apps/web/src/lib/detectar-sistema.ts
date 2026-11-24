/**
 * Qué instalador de la app sin conexión recomendar para el equipo que abre la página de descargas.
 * Solo lee el navegador (agente de usuario y, si existe, `userAgentData`); no manda nada a ningún lado.
 */
export type Sistema =
  | { tipo: "android" }
  | { tipo: "windows"; bits: 32 | 64 }
  | { tipo: "linux" }
  | { tipo: "no-disponible" } // iPhone, iPad, Mac
  | { tipo: "otro" };

export function detectarSistema(ua: string, bitsDeclarados?: string | null): Sistema {
  if (/android/i.test(ua)) return { tipo: "android" };
  if (/iphone|ipad|ipod|macintosh|mac os x/i.test(ua)) return { tipo: "no-disponible" };
  if (/windows/i.test(ua)) {
    if (bitsDeclarados === "32") return { tipo: "windows", bits: 32 };
    if (bitsDeclarados === "64") return { tipo: "windows", bits: 64 };
    // Un navegador de 64 bits o uno de 32 en Windows de 64 (WOW64) dicen Win64/x64/WOW64. Sin esas marcas, 32 bits.
    return { tipo: "windows", bits: /win64|x64|wow64|amd64/i.test(ua) ? 64 : 32 };
  }
  if (/cros/i.test(ua)) return { tipo: "otro" };
  if (/linux|x11/i.test(ua)) return { tipo: "linux" };
  return { tipo: "otro" };
}

type ConUserAgentData = Navigator & {
  userAgentData?: { getHighEntropyValues?: (h: string[]) => Promise<{ bitness?: string }> };
};

/** Lo mismo, con los datos del navegador en uso. Chrome y Edge informan los bits de Windows aparte. */
export async function detectarEsteEquipo(): Promise<Sistema> {
  const nav = navigator as ConUserAgentData;
  let bits: string | null = null;
  try {
    bits = (await nav.userAgentData?.getHighEntropyValues?.(["bitness"]))?.bitness ?? null;
  } catch {
    bits = null;
  }
  return detectarSistema(nav.userAgent ?? "", bits);
}
