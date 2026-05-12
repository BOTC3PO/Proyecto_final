import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet } from "../lib/api";
import { useAuth } from "../auth/use-auth";

type AdminOption = {
  id: string;
  name: string;
  schoolId: string;
};

export default function ProfesorCursoNuevo() {
  const { user } = useAuth();
  const schoolId = user?.schoolId ?? "";
  const [admins, setAdmins] = useState<AdminOption[]>([]);
  const [selectedAdmin, setSelectedAdmin] = useState("");

  useEffect(() => {
    let active = true;
    apiGet<{ items: AdminOption[] }>(`/api/escuelas/${schoolId}/administradores`)
      .then((data) => {
        if (!active) return;
        setAdmins(data.items);
      })
      .catch(() => {
        if (!active) return;
        setAdmins([
          { id: "admin-1", name: "Laura Medina", schoolId },
          { id: "admin-2", name: "Carlos Pérez", schoolId },
        ]);
      });
    return () => {
      active = false;
    };
  }, [schoolId]);

  const availableAdmins = useMemo(
    () => admins.filter((admin) => admin.schoolId === schoolId),
    [admins, schoolId]
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-[var(--c-text)]">Crear clase o sección</h1>
        <p className="text-sm text-[var(--c-muted)] mt-0.5">
          Completá la información básica. Podés editar los detalles más adelante.
        </p>
      </div>

      <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--c-border)]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">
            Datos de la clase
          </p>
        </div>
        <form className="p-4 grid gap-4">
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-[var(--c-text)]">Nombre de la clase</span>
            <input
              className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
              placeholder="Ej. Matemáticas 1°A"
              type="text"
            />
          </label>
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-[var(--c-text)]">Sección</span>
            <input
              className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
              placeholder="Ej. A"
              type="text"
            />
          </label>
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-[var(--c-text)]">Descripción</span>
            <textarea
              className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)] min-h-[80px] resize-none"
              placeholder="Agrega una descripción para la clase..."
            />
          </label>
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-[var(--c-text)]">Administrador responsable</span>
            <select
              value={selectedAdmin}
              onChange={(e) => setSelectedAdmin(e.target.value)}
              className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
            >
              <option value="">Seleccioná un administrador</option>
              {availableAdmins.map((admin) => (
                <option key={admin.id} value={admin.id}>{admin.name}</option>
              ))}
            </select>
            <span className="text-xs text-[var(--c-muted)]">
              El administrador invitado debe pertenecer a la misma escuela.
            </span>
          </label>
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="rounded-xl bg-[var(--c-primary)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Crear clase
            </button>
            <Link
              to="/profesor/cursos"
              className="rounded-xl border border-[var(--c-border)] px-5 py-2 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
