import { useEffect, useState } from "react";
import { fetchAdminUsuarios, type AdminUsuario } from "../services/admin";

export default function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState<AdminUsuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchAdminUsuarios()
      .then((data) => {
        if (!active) return;
        setUsuarios(data);
        setError(null);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Gestión de usuarios</h1>
        <p className="text-base text-slate-600">
          Administra altas, permisos y estados de los perfiles dentro de la plataforma.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">Usuarios recientes</h2>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
            Invitar usuario
          </button>
        </div>

        <div className="mt-4 space-y-3">
          {loading && <p className="text-sm text-slate-500">Cargando usuarios...</p>}
          {error && <p className="text-sm text-red-500">Error: {error}</p>}
          {!loading &&
            !error &&
            usuarios.map((usuario) => (
              <div
                key={usuario.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-100 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">{usuario.nombre}</p>
                  <p className="text-xs text-slate-500">Rol: {usuario.rol}</p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {usuario.estado}
                </span>
              </div>
            ))}
          {!loading && !error && usuarios.length === 0 && (
            <p className="text-sm text-slate-500">No hay usuarios recientes.</p>
          )}
        </div>
      </section>
    </main>
  );
}
