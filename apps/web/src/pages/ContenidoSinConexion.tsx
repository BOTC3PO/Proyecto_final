/**
 * L8 — contenido del dispositivo en la app sin conexión: las materias del temario oficial, los diccionarios por
 * idioma y los módulos de la escuela. Lo atiende la API local de la app (`/api/offline/paquetes`).
 *
 * Por ahora solo en castellano: la app es para las computadoras de las escuelas argentinas. Si se publica para
 * otros países, los textos pasan a i18n como el resto de la web.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { apiDelete, apiGet, apiPost, apiRequest } from "../lib/api";
import { esAppSinConexion } from "../lib/sinConexion";

type Instalado = { id: string; tipo: "contenido" | "diccionario" | "escuela"; titulo: string; version: string; bytes: number | null; modulos: number | null; instalado: string };
type Disponible = { id: string; tipo: "contenido" | "diccionario"; titulo: string; version: string; bytes: number; modulos?: number; palabras?: number; requiere?: string[]; estado: "disponible" | "instalado" | "actualizable" };
type Estado = { instalados: Instalado[]; disponibles: Disponible[] | null; conexion: boolean; enCurso: Record<string, { recibidos: number; total: number }> };

const tamano = (bytes: number | null | undefined) =>
  bytes == null ? "" : bytes >= 1e6 ? `${(bytes / 1e6).toFixed(1).replace(".", ",")} MB` : `${Math.max(1, Math.round(bytes / 1e3))} kB`;

const boton = "rounded-lg border border-[var(--c-border-strong)] px-3 py-1.5 text-xs font-semibold text-[var(--c-text)] hover:bg-[var(--c-hover)] disabled:opacity-50";
const tarjeta = "bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4 space-y-3";

export default function ContenidoSinConexion() {
  const { user } = useAuth();
  const [estado, setEstado] = useState<Estado | null>(null);
  const [trabajando, setTrabajando] = useState<string | null>(null);
  const [msg, setMsg] = useState<{ texto: string; error?: boolean } | null>(null);
  const archivo = useRef<HTMLInputElement>(null);

  const cargar = useCallback(async () => {
    try {
      setEstado(await apiGet<Estado>("/api/offline/paquetes"));
    } catch (e) {
      setMsg({ texto: e instanceof Error ? e.message : "No se pudo leer el contenido del dispositivo.", error: true });
    }
  }, []);

  useEffect(() => {
    void cargar();
  }, [cargar]);

  // Mientras hay una descarga, se actualiza la barra de avance.
  useEffect(() => {
    if (!trabajando) return;
    const reloj = setInterval(() => void cargar(), 1000);
    return () => clearInterval(reloj);
  }, [trabajando, cargar]);

  const hacer = async (clave: string, tarea: () => Promise<string>) => {
    setTrabajando(clave);
    setMsg(null);
    try {
      setMsg({ texto: await tarea() });
    } catch (e) {
      setMsg({ texto: e instanceof Error ? e.message : "No se pudo completar.", error: true });
    } finally {
      setTrabajando(null);
      await cargar();
    }
  };

  const descargar = (p: Disponible) =>
    hacer(p.id, async () => {
      const r = await apiPost<{ tambien?: string[] }>(`/api/offline/paquetes/${encodeURIComponent(p.id)}/descargar`, {});
      const tambien = r.tambien ?? [];
      return tambien.length
        ? `«${p.titulo}» quedó en el dispositivo, con las materias que necesita: ${tambien.join(", ")}.`
        : `«${p.titulo}» quedó en el dispositivo.`;
    });

  const quitar = (p: Instalado) =>
    hacer(p.id, async () => {
      await apiDelete(`/api/offline/paquetes/${encodeURIComponent(p.id)}`);
      return `Se quitó «${p.titulo}». El progreso no se borra.`;
    });

  const importar = (f: File) =>
    hacer("importar", async () => {
      const r = await apiRequest<{ titulo: string }>("/api/offline/paquetes/importar", {
        method: "POST",
        body: f,
        headers: { "Content-Type": "application/octet-stream" },
      });
      return `Se importó «${r.titulo}».`;
    });

  const escuela = () =>
    hacer("escuela", async () => {
      const r = await apiPost<{ modulos: number }>("/api/offline/escuela/actualizar", {});
      return r.modulos === 1 ? "Hay 1 módulo de tu escuela en el dispositivo." : `Hay ${r.modulos} módulos de tu escuela en el dispositivo.`;
    });

  if (!esAppSinConexion) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-sm text-[var(--c-text)]">
        Esta pantalla es de la app sin conexión. <Link to="/perfil" className="underline">Volver al perfil</Link>
      </div>
    );
  }

  const instalados = estado?.instalados ?? [];
  const deEscuela = instalados.find((i) => i.tipo === "escuela");
  const grupos: [string, Disponible["tipo"]][] = [["Materias", "contenido"], ["Diccionarios", "diccionario"]];

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-[var(--c-text)]">Contenido sin conexión</h1>
        <p className="text-sm text-[var(--c-muted)]">
          Lo que bajes queda en este dispositivo y se usa sin internet. Sin conexión, también se puede importar un paquete desde un archivo
          (por ejemplo, copiado de un pendrive).
        </p>
      </div>

      {msg && (
        <p role={msg.error ? "alert" : "status"} className={`text-sm ${msg.error ? "text-[var(--c-danger)]" : "text-[var(--c-text)]"}`}>
          {msg.texto}
        </p>
      )}

      <div className={tarjeta}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-medium text-[var(--c-text)]">Importar desde un archivo</p>
          <button type="button" className={boton} disabled={!!trabajando} onClick={() => archivo.current?.click()}>
            {trabajando === "importar" ? "Importando…" : "Elegir archivo"}
          </button>
          <input
            ref={archivo}
            type="file"
            accept=".gz,application/gzip"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              e.target.value = "";
              if (f) void importar(f);
            }}
          />
        </div>
      </div>

      {user && (
        <div className={tarjeta}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-sm font-medium text-[var(--c-text)]">Módulos de mi escuela</p>
              <p className="text-xs text-[var(--c-muted)]">
                {deEscuela
                  ? `${deEscuela.modulos ?? 0} en el dispositivo, actualizados el ${new Date(deEscuela.instalado).toLocaleDateString("es-AR")}.`
                  : "Los que crearon los docentes de tu escuela y los de tus aulas. Se actualizan solos cada vez que entrás con conexión."}
              </p>
            </div>
            <button type="button" className={boton} disabled={!!trabajando || !estado?.conexion} onClick={() => void escuela()}>
              {trabajando === "escuela" ? "Actualizando…" : "Actualizar"}
            </button>
          </div>
        </div>
      )}

      {grupos.map(([titulo, tipo]) => {
        const disp = (estado?.disponibles ?? []).filter((p) => p.tipo === tipo);
        const sinIndice = instalados.filter((i) => i.tipo === tipo && !disp.some((d) => d.id === i.id));
        return (
          <div key={tipo} className={tarjeta}>
            <p className="text-sm font-medium text-[var(--c-text)]">{titulo}</p>
            {estado && !estado.conexion && (
              <p className="text-xs text-[var(--c-muted)]">Sin conexión: solo se ve lo que ya está en el dispositivo.</p>
            )}
            <ul className="divide-y divide-[var(--c-border)]">
              {disp.map((p) => {
                const avance = estado?.enCurso[p.id];
                const inst = instalados.find((i) => i.id === p.id);
                return (
                  <li key={p.id} className="flex flex-wrap items-center justify-between gap-2 py-2">
                    <div className="min-w-0">
                      <p className="text-sm text-[var(--c-text)]">{p.titulo}</p>
                      <p className="text-xs text-[var(--c-muted)]">
                        {[p.modulos != null ? `${p.modulos} módulos` : null, p.palabras != null ? `${p.palabras.toLocaleString("es-AR")} palabras` : null, tamano(p.bytes)]
                          .filter(Boolean)
                          .join(" · ")}
                        {avance && avance.total > 0 ? ` · ${Math.round((avance.recibidos / avance.total) * 100)} %` : ""}
                      </p>
                      {!!p.requiere?.length && (
                        <p className="text-xs text-[var(--c-muted)]">
                          Necesita: {p.requiere.map((r) => estado?.disponibles?.find((d) => d.id === r)?.titulo ?? r).join(", ")} (se bajan juntas)
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {p.estado !== "instalado" && (
                        <button type="button" className={boton} disabled={!!trabajando} onClick={() => void descargar(p)}>
                          {trabajando === p.id ? "Bajando…" : p.estado === "actualizable" ? "Actualizar" : "Bajar"}
                        </button>
                      )}
                      {inst && (
                        <button type="button" className={boton} disabled={!!trabajando} onClick={() => void quitar(inst)}>
                          Quitar
                        </button>
                      )}
                    </div>
                  </li>
                );
              })}
              {sinIndice.map((i) => (
                <li key={i.id} className="flex flex-wrap items-center justify-between gap-2 py-2">
                  <div>
                    <p className="text-sm text-[var(--c-text)]">{i.titulo}</p>
                    <p className="text-xs text-[var(--c-muted)]">
                      {[i.modulos != null ? `${i.modulos} módulos` : null, `versión ${i.version}`, tamano(i.bytes)].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                  <button type="button" className={boton} disabled={!!trabajando} onClick={() => void quitar(i)}>
                    Quitar
                  </button>
                </li>
              ))}
              {!disp.length && !sinIndice.length && <li className="py-2 text-xs text-[var(--c-muted)]">Todavía no hay nada.</li>}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
