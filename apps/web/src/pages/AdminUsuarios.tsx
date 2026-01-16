const usuarios = [
  {
    nombre: "María López",
    rol: "Docente",
    estado: "Activo",
  },
  {
    nombre: "Juan Pérez",
    rol: "Alumno",
    estado: "Pendiente",
  },
  {
    nombre: "Lucía Gómez",
    rol: "Padre",
    estado: "Activo",
  },
];

export default function AdminUsuarios() {
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
          {usuarios.map((usuario) => (
            <div
              key={usuario.nombre}
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
        </div>
      </section>
    </main>
  );
}
