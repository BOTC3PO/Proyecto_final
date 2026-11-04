/**
 * L8 — sincronización de la app sin conexión, en el perfil. Solo en la app y en castellano, como sus otras pantallas
 * propias (ver `ContenidoSinConexion.tsx`).
 *
 * - Cuenta de la plataforma: qué falta subir, cuándo se sincronizó y «Sincronizar ahora».
 * - Usuario local: vincularlo a una cuenta de la plataforma, para que su historial suba y se vuelva a corregir.
 */
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import { apiGet, apiPost } from "../lib/api";

type Estado = {
  tipo: "local" | "plataforma";
  pendientes: number;
  intentosSinSubir: number;
  paraRevisar: number;
  ultima: string | null;
  error: string | null;
  permisoVence: string | null;
};
type Resumen = { estado: string; subidos?: number; bajados?: number; paraRevisar?: number; pendientes?: number; mensaje?: string };
type Sesion = {
  id: string; username: string; fullName?: string; role: string; roles?: string[]; schoolId?: string | null;
  accessToken: string; refreshToken?: string | null; requiere2fa?: boolean; desafio?: string;
};

const tarjeta = "bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4 space-y-3";
const boton = "rounded-lg border border-[var(--c-border-strong)] px-3 py-1.5 text-xs font-semibold text-[var(--c-text)] hover:bg-[var(--c-hover)] disabled:opacity-50";
const campo = "w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] px-3 py-1.5 text-sm text-[var(--c-text)]";
const fecha = (iso: string) => new Date(iso).toLocaleString("es-AR", { dateStyle: "short", timeStyle: "short" });

function textoDelResumen(r: Resumen): string {
  if (r.estado !== "ok") return r.mensaje ?? "No se pudo sincronizar.";
  const partes = [
    r.subidos ? `se subieron ${r.subidos} cambio${r.subidos === 1 ? "" : "s"}` : null,
    r.bajados ? `bajaron ${r.bajados} intento${r.bajados === 1 ? "" : "s"} de la web` : null,
  ].filter(Boolean);
  const revisar = r.paraRevisar
    ? ` En ${r.paraRevisar} intento${r.paraRevisar === 1 ? "" : "s"} la nota de la plataforma no coincide con la del dispositivo: vale la de la plataforma.`
    : "";
  return `Listo${partes.length ? `: ${partes.join(" y ")}` : ", no había nada nuevo"}.${revisar}`;
}

export default function SincronizacionCard() {
  const { login } = useAuth();
  const [estado, setEstado] = useState<Estado | null>(null);
  const [trabajando, setTrabajando] = useState(false);
  const [msg, setMsg] = useState<{ texto: string; error?: boolean } | null>(null);
  const [form, setForm] = useState({ identifier: "", password: "", codigo: "" });
  const [desafio, setDesafio] = useState<string | null>(null);

  const cargar = useCallback(async () => {
    try {
      setEstado(await apiGet<Estado>("/api/offline/sincronizacion"));
    } catch {
      setEstado(null);
    }
  }, []);
  useEffect(() => {
    void cargar();
  }, [cargar]);

  const sincronizar = async () => {
    setTrabajando(true);
    setMsg(null);
    try {
      const r = await apiPost<Resumen>("/api/offline/sincronizar", {});
      setMsg({ texto: textoDelResumen(r), error: r.estado !== "ok" });
    } catch (e) {
      setMsg({ texto: e instanceof Error ? e.message : "No se pudo sincronizar.", error: true });
    } finally {
      setTrabajando(false);
      await cargar();
    }
  };

  const vincular = async (e: React.FormEvent) => {
    e.preventDefault();
    setTrabajando(true);
    setMsg(null);
    try {
      const r = await apiPost<Sesion>(
        "/api/offline/vincular",
        desafio ? { desafio, codigo: form.codigo.trim() } : { identifier: form.identifier.trim(), password: form.password },
      );
      if (r.requiere2fa && r.desafio) {
        setDesafio(r.desafio);
        setMsg({ texto: "Escribí el código de verificación en dos pasos de tu cuenta." });
        return;
      }
      // El usuario local pasó a ser la cuenta: la sesión es otra.
      login(
        {
          id: r.id, name: r.fullName?.trim() || r.username, role: r.role as never, roles: (r.roles?.length ? r.roles : [r.role]) as never,
          guestOnboardingStatus: null, schoolId: r.schoolId ?? null,
        },
        r.accessToken,
        r.refreshToken ?? null,
      );
      setDesafio(null);
      setForm({ identifier: "", password: "", codigo: "" });
      setMsg({ texto: "Listo: este usuario ahora es tu cuenta de la plataforma. Tu historial se sube y se vuelve a corregir al sincronizar." });
    } catch (err) {
      setMsg({ texto: err instanceof Error ? err.message : "No se pudo vincular.", error: true });
    } finally {
      setTrabajando(false);
      await cargar();
    }
  };

  if (!estado) return null;

  const aviso = msg && (
    <p role={msg.error ? "alert" : "status"} className={`text-xs ${msg.error ? "text-[var(--c-danger)]" : "text-[var(--c-text)]"}`}>{msg.texto}</p>
  );

  if (estado.tipo === "local") {
    return (
      <form className={tarjeta} onSubmit={(e) => void vincular(e)}>
        <div>
          <p className="text-sm font-medium text-[var(--c-text)]">Vincular con una cuenta de la plataforma</p>
          <p className="text-xs text-[var(--c-muted)]">
            Los datos de este usuario están solo en este dispositivo. Si lo vinculás a tu cuenta, tu historial y tu progreso pasan a la
            cuenta y la plataforma vuelve a corregir cada intento. Hace falta conexión una vez.
          </p>
        </div>
        {desafio ? (
          <input className={campo} inputMode="numeric" autoComplete="one-time-code" placeholder="Código" aria-label="Código de verificación"
            value={form.codigo} onChange={(e) => setForm({ ...form, codigo: e.target.value })} />
        ) : (
          <div className="grid gap-2 sm:grid-cols-2">
            <input className={campo} autoComplete="username" placeholder="Usuario o correo" aria-label="Usuario o correo de la plataforma"
              value={form.identifier} onChange={(e) => setForm({ ...form, identifier: e.target.value })} />
            <input className={campo} type="password" autoComplete="current-password" placeholder="Contraseña" aria-label="Contraseña de la plataforma"
              value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </div>
        )}
        <div className="flex justify-end">
          <button type="submit" className={boton} disabled={trabajando || (desafio ? !form.codigo.trim() : !form.identifier.trim() || !form.password)}>
            {trabajando ? "Vinculando…" : "Vincular"}
          </button>
        </div>
        {aviso}
      </form>
    );
  }

  return (
    <div className={tarjeta}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-sm font-medium text-[var(--c-text)]">Sincronización</p>
          <p className="text-xs text-[var(--c-muted)]">
            {estado.intentosSinSubir
              ? `${estado.intentosSinSubir} intento${estado.intentosSinSubir === 1 ? "" : "s"} sin subir. `
              : "Todo subido. "}
            {estado.ultima ? `Última vez: ${fecha(estado.ultima)}.` : "Todavía no se sincronizó."}
            {estado.permisoVence ? ` Sin conexión, la cuenta funciona hasta el ${new Date(estado.permisoVence).toLocaleDateString("es-AR")}.` : ""}
          </p>
          {estado.paraRevisar > 0 && (
            <p className="text-xs text-[var(--c-muted)]">
              En {estado.paraRevisar} intento{estado.paraRevisar === 1 ? "" : "s"} la nota de la plataforma no coincide con la del dispositivo: vale
              la de la plataforma.
            </p>
          )}
        </div>
        <button type="button" className={boton} disabled={trabajando} onClick={() => void sincronizar()}>
          {trabajando ? "Sincronizando…" : "Sincronizar ahora"}
        </button>
      </div>
      {aviso}
    </div>
  );
}
