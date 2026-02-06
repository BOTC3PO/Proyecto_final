import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import DateInput from "../components/DateInput";
import { ApiError, apiPost } from "../lib/api";
import { fetchRegistroOpciones } from "../services/registro";

type HijoForm = {
  nombre: string;
  usuario: string;
  cumple: string; // DD/MM/AAAA
  grado: string;
  escuela?: string;
  notas?: string;
  permisosTareas: boolean;   // ver tareas
  permisosMensajes: boolean; // ver mensajes del aula
};

type FieldErrors = Partial<Record<keyof HijoForm, string>>;

export default function HijosAgregar() {
  const [grados, setGrados] = useState<string[]>([]);
  const [loadingGrados, setLoadingGrados] = useState(true);
  const [gradosError, setGradosError] = useState<string | null>(null);
  const [form, setForm] = useState<HijoForm>({
    nombre: "",
    usuario: "",
    cumple: "",
    grado: "",
    escuela: "",
    notas: "",
    permisosTareas: true,
    permisosMensajes: true,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let active = true;
    fetchRegistroOpciones()
      .then((data) => {
        if (!active) return;
        setGrados(data.grados);
        setGradosError(null);
      })
      .catch((err: Error) => {
        if (!active) return;
        setGradosError(err.message);
      })
      .finally(() => {
        if (!active) return;
        setLoadingGrados(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, type } = e.target as HTMLInputElement;
    const value = type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setForm((p) => ({ ...p, [name]: value as any }));
  };

  const validate = () => {
    const err: FieldErrors = {};
    if (!form.nombre.trim()) err.nombre = "Ingresá el nombre completo.";
    if (!form.usuario.trim()) err.usuario = "Ingresá un usuario público.";
    if (!form.cumple) err.cumple = "Seleccioná el cumpleaños.";
    if (!form.grado) err.grado = "Seleccioná el grado/curso.";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSaving(true);
    try {
      await apiPost<{ ok: boolean }>("/api/hijos", form);
      // limpiar (opcional)
      setForm({
        nombre: "",
        usuario: "",
        cumple: "",
        grado: "",
        escuela: "",
        notas: "",
        permisosTareas: true,
        permisosMensajes: true,
      });
      setErrors({});
    } catch (err: any) {
      let message = "No se pudo guardar";
      let status = 0;
      if (err instanceof ApiError) {
        status = err.status;
        try {
          const parsed = JSON.parse(err.message);
          message = parsed?.error ?? err.message;
        } catch {
          message = err.message;
        }
      } else if (err instanceof Error) {
        message = err.message;
      }
      if (status === 404) {
        setErrors((p) => ({ ...p, usuario: "No encontramos el usuario indicado." }));
      } else if (status === 409) {
        setErrors((p) => ({ ...p, usuario: "Ese usuario ya está vinculado." }));
      } else if (status === 400) {
        setErrors((p) => ({ ...p, usuario: message || "Validación inválida." }));
      } else {
        setErrors((p) => ({ ...p, usuario: message || "No se pudo guardar" }));
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="flex-1 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="bg-white rounded-xl shadow">
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl font-semibold text-gray-900 text-center">Agregar Hijo</h1>

            <form className="mt-8 space-y-6" onSubmit={onSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                  <input
                    id="nombre" name="nombre" type="text" value={form.nombre} onChange={onChange}
                    className={`mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                      errors.nombre ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.nombre && <p className="text-xs text-red-600 mt-1">{errors.nombre}</p>}
                </div>

                {/* Usuario */}
                <div>
                  <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">Usuario Público</label>
                  <input
                    id="usuario" name="usuario" type="text" value={form.usuario} onChange={onChange}
                    placeholder="@usuario"
                    className={`mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                      errors.usuario ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.usuario && <p className="text-xs text-red-600 mt-1">{errors.usuario}</p>}
                </div>

                {/* Cumpleaños (date input custom) */}
                <div className="md:col-span-1">
                  <DateInput
                    id="cumple"
                    name="cumple"
                    label="Cumpleaños"
                    placeholder="DD/MM/AAAA"
                    value={form.cumple}
                    onChange={(v) => setForm((p) => ({ ...p, cumple: v }))}
                    required
                    // minDate={new Date(2005,0,1)} // ejemplo de límites
                    // maxDate={new Date()}
                  />
                  {errors.cumple && <p className="text-xs text-red-600 mt-1">{errors.cumple}</p>}
                </div>

                {/* Grado */}
                <div className="md:col-span-1">
                  <label htmlFor="grado" className="block text-sm font-medium text-gray-700">Grado / Curso</label>
                  <select
                    id="grado" name="grado" value={form.grado} onChange={onChange}
                    className={`mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                      errors.grado ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Seleccioná…</option>
                    {loadingGrados && <option value="">Cargando grados...</option>}
                    {!loadingGrados && gradosError && <option value="">Sin grados disponibles</option>}
                    {!loadingGrados &&
                      !gradosError &&
                      grados.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                  </select>
                  {errors.grado && <p className="text-xs text-red-600 mt-1">{errors.grado}</p>}
                  {gradosError && <p className="text-xs text-red-600 mt-1">{gradosError}</p>}
                </div>

                {/* Escuela */}
                <div className="md:col-span-2">
                  <label htmlFor="escuela" className="block text-sm font-medium text-gray-700">Escuela (opcional)</label>
                  <input
                    id="escuela" name="escuela" type="text" value={form.escuela} onChange={onChange}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Notas */}
                <div className="md:col-span-2">
                  <label htmlFor="notas" className="block text-sm font-medium text-gray-700">Notas (opcional)</label>
                  <textarea
                    id="notas" name="notas" rows={3} value={form.notas} onChange={onChange}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Observaciones, preferencias, apoyos necesarios…"
                  />
                </div>
              </div>

              {/* Permisos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 rounded-md p-4">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox" name="permisosTareas" checked={form.permisosTareas} onChange={onChange}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Permitir ver tareas y entregas</span>
                </label>

                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox" name="permisosMensajes" checked={form.permisosMensajes} onChange={onChange}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Permitir ver mensajes del aula</span>
                </label>
              </div>

              {/* Acciones */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="reset"
                  onClick={() => { setForm({
                    nombre: "", usuario: "", cumple: "", grado: "", escuela: "", notas: "",
                    permisosTareas: true, permisosMensajes: true
                  }); setErrors({}); }}
                  className="rounded-md border px-4 py-2 text-sm"
                >
                  Limpiar
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-md bg-blue-600 px-5 py-2 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-60"
                >
                  {saving ? "Guardando…" : "Agregar Hijo"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
