/**
 * L8 — página pública de descargas de la app sin conexión. Lista lo que publica la API en
 * `GET /api/offline/descargas` (lo arma `apps/offline/scripts/armar-descargas.ts`), agrupado por sistema, recomienda
 * el instalador del equipo que la abre y ofrece aparte los diccionarios que no vienen en la app
 * (`GET /api/offline/paquetes`: la app trae todo el temario oficial y el diccionario de español).
 */
import { useEffect, useState } from "react";
import { API_BASE_URL, apiGetPublic } from "../lib/api";
import { detectarEsteEquipo, type Sistema } from "../lib/detectar-sistema";
import { interpolar } from "../i18n/interpolar";
import { useI18n } from "../i18n/I18nContext";

type Plataforma = "android" | "windows" | "linux-escritorio" | "linux-navegador" | "completo";
type Descarga = { archivo: string; plataforma: Plataforma; arquitectura: string | null; bytes: number; sha256: string };
type Indice = { version: string | null; archivos: Descarga[] };
type Paquete = { id: string; tipo: string; archivo: string; bytes?: number; sha256?: string; idioma?: string };

const GRUPOS: { plataforma: Plataforma; clave: string }[] = [
  { plataforma: "android", clave: "android" },
  { plataforma: "windows", clave: "windows" },
  { plataforma: "linux-escritorio", clave: "linuxEscritorio" },
  { plataforma: "linux-navegador", clave: "linuxNavegador" },
  { plataforma: "completo", clave: "completo" },
];

const BITS: Record<string, "descargas.arq64" | "descargas.arq32"> = {
  x64: "descargas.arq64", amd64: "descargas.arq64", x86: "descargas.arq32", i386: "descargas.arq32",
};

/** El diccionario que ya trae la app: no se ofrece como extra. */
const IDIOMA_INCLUIDO = "es";

const formato = (archivo: string) => (archivo.endsWith(".tar.gz") ? ".tar.gz" : archivo.slice(archivo.lastIndexOf(".")));
const base = () => API_BASE_URL.replace(/\/$/, "");
const urlDe = (archivo: string) => `${base()}/api/offline/descargas/archivo/${encodeURIComponent(archivo)}`;
const urlDePaquete = (archivo: string) => `${base()}/api/offline/paquetes/archivo/${encodeURIComponent(archivo)}`;

/** El instalador recomendado para el equipo, si está publicado. */
export function recomendado(sistema: Sistema | null, archivos: Descarga[]): Descarga | null {
  if (!sistema) return null;
  if (sistema.tipo === "android") return archivos.find((a) => a.plataforma === "android") ?? null;
  if (sistema.tipo === "windows") {
    const arq = sistema.bits === 64 ? "x64" : "x86";
    return archivos.find((a) => a.plataforma === "windows" && a.arquitectura === arq) ?? null;
  }
  return null;
}

function nombreDeIdioma(codigo: string, lang: string) {
  try {
    const nombre = new Intl.DisplayNames([lang], { type: "language" }).of(codigo);
    return nombre ?? codigo;
  } catch {
    return codigo;
  }
}

export default function Descargas() {
  const { t, lang } = useI18n();
  const [indice, setIndice] = useState<Indice | null>(null);
  const [extras, setExtras] = useState<Paquete[]>([]);
  const [error, setError] = useState(false);
  const [sistema, setSistema] = useState<Sistema | null>(null);

  useEffect(() => {
    apiGetPublic<Indice>("/api/offline/descargas").then(setIndice, () => setError(true));
    // Los diccionarios extra son un agregado: si fallan, la página sigue igual.
    apiGetPublic<{ paquetes: Paquete[] }>("/api/offline/paquetes").then(
      (r) => setExtras((r.paquetes ?? []).filter((p) => p.tipo === "diccionario" && p.idioma && p.idioma !== IDIOMA_INCLUIDO)),
      () => setExtras([]),
    );
    detectarEsteEquipo().then(setSistema, () => setSistema({ tipo: "otro" }));
  }, []);

  const tamano = (bytes: number) =>
    `${new Intl.NumberFormat(lang, { maximumFractionDigits: bytes < 10e6 ? 1 : 0 }).format(bytes / 1e6)} MB`;

  const sugerido = indice ? recomendado(sistema, indice.archivos) : null;
  const extrasOrdenados = [...extras]
    .map((p) => ({ ...p, nombre: nombreDeIdioma(p.idioma!, lang) }))
    .sort((a, b) => a.nombre.localeCompare(b.nombre, lang));

  const botonDescargar = (archivo: string, href: string, principal = false) => (
    <a
      href={href}
      download
      aria-label={`${t("descargas.descargar")} ${archivo}`}
      className={
        principal
          ? "inline-block rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700"
          : "rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
      }
    >
      {t("descargas.descargar")}
    </a>
  );

  return (
    <div className="flex-1 bg-gray-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <section className="rounded-2xl bg-white shadow-lg p-6 sm:p-10 space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold text-gray-900">{t("descargas.titulo")}</h1>
            <p className="text-gray-600 leading-relaxed">{t("descargas.intro")}</p>
            {indice?.version && <p className="text-sm text-gray-500">{interpolar(t("descargas.version"), { version: indice.version })}</p>}
          </div>

          {error && <p role="alert" className="text-center text-red-600">{t("descargas.error")}</p>}
          {!error && !indice && <p className="text-center text-gray-500">{t("descargas.cargando")}</p>}
          {indice && indice.archivos.length === 0 && <p className="text-center text-gray-500">{t("descargas.vacio")}</p>}

          {indice && indice.archivos.length > 0 && sistema && (
            <div className="rounded-xl bg-blue-50 p-5 text-center space-y-3" aria-live="polite">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">{t("descargas.recomendado.titulo")}</p>
              {sugerido ? (
                <>
                  <p className="text-gray-800">
                    {t(sugerido.plataforma === "android" ? "descargas.android.titulo" : "descargas.windows.titulo")}
                    {sugerido.arquitectura && BITS[sugerido.arquitectura] ? ` · ${t(BITS[sugerido.arquitectura])}` : ""}
                    <span className="text-gray-500"> · {tamano(sugerido.bytes)}</span>
                  </p>
                  {botonDescargar(sugerido.archivo, urlDe(sugerido.archivo), true)}
                </>
              ) : (
                <p className="text-gray-700">
                  {t(
                    sistema.tipo === "linux"
                      ? "descargas.recomendado.linux"
                      : sistema.tipo === "no-disponible"
                        ? "descargas.recomendado.noDisponible"
                        : "descargas.recomendado.otro",
                  )}
                </p>
              )}
            </div>
          )}

          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">{t("descargas.incluye.titulo")}</h2>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 leading-relaxed">
              <li>{t("descargas.incluye.temario")}</li>
              <li>{t("descargas.incluye.diccionario")}</li>
              <li>{t("descargas.incluye.sinInternet")}</li>
              <li>{t("descargas.incluye.extras")}</li>
            </ul>
          </div>

          {indice &&
            GRUPOS.map(({ plataforma, clave }) => {
              const archivos = indice.archivos.filter((a) => a.plataforma === plataforma);
              if (archivos.length === 0) return null;
              return (
                <div key={plataforma} className="space-y-3 border-t border-gray-200 pt-6">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{t(`descargas.${clave}.titulo`)}</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">{t(`descargas.${clave}.detalle`)}</p>
                  </div>
                  <ul className="space-y-2">
                    {archivos.map((a) => (
                      <li key={a.archivo} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-gray-200 px-4 py-3">
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            {formato(a.archivo)}
                            {a.arquitectura && BITS[a.arquitectura] ? ` · ${t(BITS[a.arquitectura])}` : ""}
                            <span className="whitespace-nowrap font-normal text-gray-500"> · {tamano(a.bytes)}</span>
                          </p>
                          <details className="text-xs text-gray-500">
                            <summary className="cursor-pointer">{t("descargas.verificar")}</summary>
                            <code className="break-all">{a.sha256}</code>
                          </details>
                        </div>
                        {botonDescargar(a.archivo, urlDe(a.archivo))}
                      </li>
                    ))}
                  </ul>
                  <details className="text-sm text-gray-700">
                    <summary className="cursor-pointer font-medium text-blue-700">{t("descargas.comoInstalar")}</summary>
                    <p className="mt-2 leading-relaxed">{t(`descargas.${clave}.instalar`)}</p>
                  </details>
                </div>
              );
            })}

          {indice && extrasOrdenados.length > 0 && (
            <div className="space-y-3 border-t border-gray-200 pt-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{t("descargas.extras.titulo")}</h2>
                <p className="text-sm text-gray-600 leading-relaxed">{t("descargas.extras.detalle")}</p>
              </div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {extrasOrdenados.map((p) => (
                  <li key={p.archivo} className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 px-4 py-2">
                    <p className="text-sm text-gray-900">
                      {interpolar(t("descargas.extras.idioma"), { idioma: p.nombre })}
                      {p.bytes ? <span className="whitespace-nowrap text-gray-500"> · {tamano(p.bytes)}</span> : null}
                    </p>
                    {botonDescargar(p.archivo, urlDePaquete(p.archivo))}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {indice && indice.archivos.length > 0 && (
            <div className="space-y-3 border-t border-gray-200 pt-6 text-sm text-gray-700">
              <h2 className="text-lg font-semibold text-gray-900">{t("descargas.preguntas.titulo")}</h2>
              <details>
                <summary className="cursor-pointer font-medium">{t("descargas.preguntas.bits")}</summary>
                <p className="mt-2 leading-relaxed">{t("descargas.preguntas.bitsRespuesta")}</p>
              </details>
              <details>
                <summary className="cursor-pointer font-medium">{t("descargas.preguntas.aviso")}</summary>
                <p className="mt-2 leading-relaxed">{t("descargas.preguntas.avisoRespuesta")}</p>
              </details>
              <details>
                <summary className="cursor-pointer font-medium">{t("descargas.preguntas.verificar")}</summary>
                <p className="mt-2 leading-relaxed">{t("descargas.preguntas.verificarRespuesta")}</p>
              </details>
              <details>
                <summary className="cursor-pointer font-medium">{t("descargas.preguntas.cuenta")}</summary>
                <p className="mt-2 leading-relaxed">{t("descargas.preguntas.cuentaRespuesta")}</p>
              </details>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
