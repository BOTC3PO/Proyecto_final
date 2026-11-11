/**
 * L8 — quitar un perfil de este dispositivo sin iniciar sesión: sirve para una cuenta suspendida (no puede entrar) o
 * para alguien que ya no usa el dispositivo. Pide el usuario y la contraseña de ese perfil. Solo en la app sin conexión
 * y en castellano, como sus otras pantallas propias.
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import { borrarPerfil } from "../components/DatosDispositivoCard";
import { esAppSinConexion } from "../lib/sinConexion";

const campo = "w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

export default function QuitarPerfil() {
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [pendientes, setPendientes] = useState<number | null>(null);
  const [estado, setEstado] = useState<{ trabajando?: boolean; error?: string; listo?: boolean }>({});

  if (!esAppSinConexion) {
    return <p className="p-8 text-center text-gray-600">Esta página es de la app sin conexión.</p>;
  }

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado({ trabajando: true });
    try {
      const r = await borrarPerfil({ ...form, identifier: form.identifier.trim(), descartarPendientes: pendientes !== null });
      if (!r.ok) {
        setPendientes(r.pendientes);
        setEstado({});
        return;
      }
      setEstado({ listo: true });
    } catch (err) {
      setEstado({ error: err instanceof Error ? err.message : "No se pudo quitar el perfil." });
    }
  };

  return (
    <div className="flex-1 bg-gray-100">
      <div className="mx-auto max-w-md px-4 py-12">
        <section className="rounded-2xl bg-white p-6 shadow-lg space-y-4">
          <h1 className="text-xl font-semibold text-gray-900">Quitar un perfil de este dispositivo</h1>
          {estado.listo ? (
            <>
              <p role="status" className="text-sm text-gray-700">
                Listo: se borró el perfil con todo lo que este dispositivo guardaba de él. Si era una cuenta de la
                plataforma, la cuenta sigue igual.
              </p>
              <Link to="/login" className="text-sm font-medium text-blue-600 hover:text-blue-700">Volver a iniciar sesión</Link>
            </>
          ) : (
            <form onSubmit={(e) => void enviar(e)} className="space-y-3">
              <p className="text-sm text-gray-600">
                Se borran el progreso, los intentos y los favoritos de ese perfil. Los materiales y diccionarios
                descargados quedan para los demás. Hace falta la contraseña del perfil.
              </p>
              <input className={campo} value={form.identifier} onChange={(e) => setForm({ ...form, identifier: e.target.value })}
                placeholder="Usuario o correo" aria-label="Usuario o correo" autoComplete="username" required />
              <input className={campo} type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="Contraseña" aria-label="Contraseña" autoComplete="current-password" required />
              {pendientes !== null && (
                <p role="alert" className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
                  Hay {pendientes} cambio{pendientes === 1 ? "" : "s"} sin subir a la plataforma. Si lo quitás ahora, se
                  pierden.
                </p>
              )}
              {estado.error && (
                <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{estado.error}</p>
              )}
              <button type="submit" disabled={estado.trabajando}
                className="w-full rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-70">
                {pendientes !== null ? "Quitar igual" : "Quitar el perfil"}
              </button>
              <Link to="/login" className="block text-center text-sm text-blue-600 hover:text-blue-700">Cancelar</Link>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
