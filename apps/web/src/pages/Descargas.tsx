/**
 * L8 — página pública de descargas de la app sin conexión. Lista lo que publica la API en
 * `GET /api/offline/descargas` (lo arma `apps/offline/scripts/armar-descargas.ts`), agrupado por sistema.
 */
import { useEffect, useState } from "react";
import { API_BASE_URL, apiGetPublic } from "../lib/api";
import { interpolar } from "../i18n/interpolar";
import { useI18n } from "../i18n/I18nContext";

type Plataforma = "android" | "windows" | "linux-escritorio" | "linux-navegador" | "completo";
type Descarga = { archivo: string; plataforma: Plataforma; arquitectura: string | null; bytes: number; sha256: string };
type Indice = { version: string | null; archivos: Descarga[] };

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

const formato = (archivo: string) => (archivo.endsWith(".tar.gz") ? ".tar.gz" : archivo.slice(archivo.lastIndexOf(".")));
const urlDe = (archivo: string) =>
  `${API_BASE_URL.replace(/\/$/, "")}/api/offline/descargas/archivo/${encodeURIComponent(archivo)}`;

export default function Descargas() {
  const { t, lang } = useI18n();
  const [indice, setIndice] = useState<Indice | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    apiGetPublic<Indice>("/api/offline/descargas").then(setIndice, () => setError(true));
  }, []);

  const tamano = (bytes: number) =>
    `${new Intl.NumberFormat(lang, { maximumFractionDigits: bytes < 10e6 ? 1 : 0 }).format(bytes / 1e6)} MB`;

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
                            <span className="font-normal text-gray-500"> · {tamano(a.bytes)}</span>
                          </p>
                          <details className="text-xs text-gray-500">
                            <summary className="cursor-pointer">{t("descargas.verificar")}</summary>
                            <code className="break-all">{a.sha256}</code>
                          </details>
                        </div>
                        <a
                          href={urlDe(a.archivo)}
                          download
                          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                        >
                          {t("descargas.descargar")}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
        </section>
      </div>
    </div>
  );
}
