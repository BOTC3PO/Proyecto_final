/**
 * L8 — «Tus datos en este dispositivo», en el perfil de la app sin conexión. Reemplaza a «Descargar mis datos / Dar de
 * baja» y a la verificación en dos pasos, que necesitan el servidor. Solo en la app y en castellano, como sus otras
 * pantallas propias (ver `SincronizacionCard.tsx`).
 *
 * - Descargar en JSON lo que el dispositivo guarda del perfil (Ley 25.326, art. 14).
 * - Borrar el perfil del dispositivo con todo lo que guardó. La cuenta de la plataforma no se toca.
 */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { ApiError, apiGet, apiRequest } from "../lib/api";

const tarjeta = "bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4 space-y-3";
const boton = "rounded-lg border border-[var(--c-border-strong)] px-3 py-1.5 text-xs font-semibold text-[var(--c-text)] hover:bg-[var(--c-hover)] disabled:opacity-50";
const campo = "w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] px-3 py-1.5 text-sm text-[var(--c-text)]";

export function guardarJson(datos: unknown, nombre: string) {
  const url = URL.createObjectURL(new Blob([JSON.stringify(datos, null, 2)], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = nombre;
  a.click();
  URL.revokeObjectURL(url);
}

/** Borra un perfil del dispositivo. Sin sesión hace falta el usuario (lo usa `QuitarPerfil.tsx`). */
export async function borrarPerfil(cuerpo: { identifier?: string; password: string; descartarPendientes?: boolean }) {
  try {
    await apiRequest("/api/offline/perfil", { method: "DELETE", body: JSON.stringify(cuerpo) }, false);
    return { ok: true as const };
  } catch (e) {
    const p = (e instanceof ApiError ? e.payload : null) as { code?: string; pendientes?: number } | null;
    if (p?.code === "PENDIENTES") return { ok: false as const, pendientes: p.pendientes ?? 1 };
    throw e;
  }
}

export default function DatosDispositivoCard({ tipo }: { tipo: "local" | "plataforma" }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [abierta, setAbierta] = useState(false);
  const [password, setPassword] = useState("");
  const [pendientes, setPendientes] = useState<number | null>(null);
  const [trabajando, setTrabajando] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const descargar = async () => {
    setMsg(null);
    try {
      const datos = await apiGet<unknown>("/api/offline/mis-datos");
      guardarJson(datos, `virtualbook-datos-del-dispositivo-${new Date().toISOString().slice(0, 10)}.json`);
    } catch {
      setMsg("No se pudieron leer los datos del dispositivo.");
    }
  };

  const borrar = async () => {
    setTrabajando(true);
    setMsg(null);
    try {
      const r = await borrarPerfil({ password, descartarPendientes: pendientes !== null });
      if (!r.ok) {
        setPendientes(r.pendientes);
        return;
      }
      logout();
      navigate("/login", { replace: true });
    } catch (e) {
      setMsg(e instanceof Error ? e.message : "No se pudo borrar el perfil.");
    } finally {
      setTrabajando(false);
    }
  };

  return (
    <div className={tarjeta}>
      <div>
        <p className="text-sm font-medium text-[var(--c-text)]">Tus datos en este dispositivo</p>
        <p className="text-xs text-[var(--c-muted)]">
          Tu perfil, tu progreso, tus intentos y tus favoritos se guardan en este dispositivo.
          {tipo === "plataforma"
            ? " Lo que guarda la plataforma se descarga o se da de baja desde la web, en «Mi perfil»."
            : " Como es un usuario local, no salen de acá."}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => void descargar()} className={boton}>Descargar en JSON</button>
        <button type="button" onClick={() => setAbierta((v) => !v)}
          className="rounded-lg border border-[var(--c-danger)] px-3 py-1.5 text-xs font-semibold text-[var(--c-danger)] hover:bg-[var(--c-danger-soft)]">
          Borrar este perfil del dispositivo
        </button>
      </div>
      {abierta && (
        <div className="space-y-2 rounded-lg border border-[var(--c-danger)] p-3">
          <p className="text-xs text-[var(--c-text)]">
            Se borra todo lo que este dispositivo guarda de tu perfil. Los materiales y diccionarios descargados quedan
            para los demás perfiles.
            {tipo === "plataforma" ? " Tu cuenta de la plataforma sigue igual: podés volver a activarla con red." : " No se puede deshacer."}
          </p>
          <input type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña" aria-label="Contraseña del perfil" className={campo} />
          {pendientes !== null && (
            <p role="alert" className="text-xs text-[var(--c-warning)]">
              Hay {pendientes} cambio{pendientes === 1 ? "" : "s"} sin subir a la plataforma (intentos o pedidos). Si
              borrás ahora, se pierden. Para no perderlos, conectate y tocá «Sincronizar ahora» antes.
            </p>
          )}
          <button type="button" disabled={trabajando || !password} onClick={() => void borrar()}
            className="rounded-lg bg-[var(--c-danger)] px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-50">
            {pendientes !== null ? "Borrar igual" : "Borrar el perfil"}
          </button>
        </div>
      )}
      {msg && <p role="alert" className="text-xs text-[var(--c-danger)]">{msg}</p>}
    </div>
  );
}
