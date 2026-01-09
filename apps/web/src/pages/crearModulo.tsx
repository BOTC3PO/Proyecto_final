import { useState } from "react";
import { MVP_GENERATOR_CATEGORIES } from "../mvp/mvpData";

export default function CrearModulo() {
  const [visibilidad, setVisibilidad] = useState<"publico" | "privado">("publico");

  // En un futuro acá podes traer estas listas desde la API
  const materias = [
    "Matemáticas",
    "Lengua y Literatura",
    "Ciencias Naturales",
    "Ciencias Sociales",
    "Historia",
    "Geografía",
    "Física",
    "Química",
    "Biología",
    "Inglés",
    "Informática / TIC",
    "Educación Física",
    "Arte / Plástica",
    "Música",
    "Formación Ética y Ciudadana",
    "Economía",
    "Otro",
  ];

  const categoriasEjemplo = [
    "Aritmética básica",
    "Álgebra",
    "Geometría",
    "Lectura comprensiva",
    "Comprensión de textos",
    "Ciencias naturales generales",
    "Laboratorio",
    "Historia Argentina",
    "Historia Mundial",
    "Geografía de Argentina",
    "Geografía del Mundo",
    "Gramática",
    "Ortografía",
    "Lógica",
    "Programación",
    "Resolución de problemas",
    "Otro",
  ];

const fisica = [
"Movimiento rectilíneo uniforme (MRU)",
"Relación distancia-tiempo-velocidad",
"Conversión de unidades (longitud, tiempo, velocidad)",
"Aceleración y MRUV",
"Caída libre",
"Movimiento vertical y horizontal",
"Suma de fuerzas – fuerza resultante",
"Peso (P = mg)",
"Fricción (coeficiente μ)",
"Plano inclinado básico",
"Ley de Hooke",
"Trabajo mecánico",
"Energía cinética",
"Energía potencial gravitatoria",
"Conservación de energía básica",
"Potencia mecánica",
"Calor (Q = mcΔT)",
"Dilatación térmica",
"Cambios de estado – calor latente",
"Conversión °C ↔ °F",
"Ley de Ohm (V = IR)",
"Potencia eléctrica (P = VI)",
"Resistencia equivalente en serie",
"Resistencia equivalente en paralelo",
"Consumo eléctrico (kWh)",
"Frecuencia y período",
"Velocidad de propagación de ondas (v = λf)",
"Longitud de onda",
"Óptica geométrica básica",
"Ecuación de lentes",
"Índice de refracción",
"Densidad (ρ = m/V)",
"Presión (P = F/A)",
"Presión hidrostática (P = ρgh)",
"Caudal (Q = V/t)",
]

  const nivelesDificultad = ["Básico", "Intermedio", "Avanzado"];

  return (
    <main className="flex-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-6">
          <h1 className="text-center text-3xl font-semibold">Crear Módulo</h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Configura módulos públicos o privados que podrán usar profesores, alumnos y usuarios invitados.
          </p>
        </header>

        <form className="mt-6 space-y-8 bg-white rounded-xl shadow p-6">
          {/* 1. Información general */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Información general</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Título del módulo <span className="text-red-500">*</span>
              </label>
              <input
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Ej: Introducción a las fracciones"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Descripción <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Describe el contenido, objetivos y actividades del módulo..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Materia principal <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                  defaultValue="Matemáticas"
                >
                  {materias.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Acepta cualquier materia que se dicte en la escuela.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Categoría / Tema <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona una categoría
                  </option>
                  {categoriasEjemplo.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nivel de dificultad <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                  defaultValue="Básico"
                >
                  {nivelesDificultad.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Duración estimada (minutos) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  min={1}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ej: 30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Edad/Curso recomendado
                </label>
                <input
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ej: 5° grado primaria"
                />
              </div>
            </div>
          </section>

          {/* 2. Sistema de nivel y recompensas */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Sistema de nivel y recompensas</h2>
            <p className="text-sm text-gray-600">
              Define las recompensas máximas de nivel y experiencia que se otorgarán al completar el módulo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nivel máximo otorgado
                </label>
                <input
                  type="number"
                  min={1}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ej: 5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Experiencia máxima
                </label>
                <input
                  type="number"
                  min={0}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ej: 150"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cantidad máx. de preguntas por ronda
                </label>
                <input
                  type="number"
                  min={1}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ej: 10"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Multiplicador de experiencia
                </label>
                <input
                  type="number"
                  step="0.1"
                  min={0}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ej: 1.5"
                />
              </div>
            </div>
          </section>

          {/* 3. Cuestionario y generador */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Cuestionario y generador de actividades</h2>
            <p className="text-sm text-gray-600">
              Puedes vincular un cuestionario existente o crear uno nuevo para este módulo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cuestionario asociado (opcional)
                </label>
                <input
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                  placeholder="Buscar / ID / nombre de cuestionario"
                />
              </div>

              <button
                type="button"
                className="mt-6 rounded-md border border-gray-300 px-3 py-2 text-sm text-left"
              >
                Seleccionar de mis cuestionarios
              </button>

              <button
                type="button"
                className="mt-6 bg-green-500 hover:bg-green-600 text-white rounded-md px-3 py-2 text-sm"
              >
                Crear / editar cuestionario
              </button>
            </div>

            <div className="border rounded-lg p-4 bg-gray-50 space-y-3">
              <h3 className="text-sm font-semibold">Generador de problemas / actividades</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Categoría MVP</label>
                  <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2">
                    {MVP_GENERATOR_CATEGORIES.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nivel sugerido</label>
                  <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2">
                    <option>Básico</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                  </select>
                </div>
              </div>

              <textarea
                placeholder="Descripción breve del generador o configuración base..."
                rows={3}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <input
                  placeholder="Número de muestra / versión"
                  className="rounded-md border border-gray-300 px-3 py-2"
                />
                <button
                  type="button"
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm text-left"
                >
                  Configurar generador
                </button>
                <button
                  type="button"
                  className="bg-green-500 hover:bg-green-600 text-white rounded-md px-3 py-2 text-sm"
                >
                  Crear preguntas desde generador
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                <button
                  type="button"
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                >
                  Agregar pregunta de opción múltiple
                </button>
                <button
                  type="button"
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                >
                  Seleccionar tipo de actividad (juego, problema, etc.)
                </button>
              </div>
            </div>
          </section>

          {/* 4. Contenido del módulo */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Contenido del módulo</h2>
            <p className="text-sm text-gray-600">
              Puedes insertar HTML, archivos, enlaces externos y exportaciones de TuesdayJS.
            </p>

            {/* HTML embebido */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contenido HTML embebido (opcional)
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 font-mono text-xs focus:border-blue-500 focus:ring-blue-500"
                placeholder='Puedes pegar aquí contenido HTML seguro (p.ej. export de editores, contenido formateado, etc.)'
              />
            </div>

            {/* Archivos adjuntos */}
            <div className="border rounded-lg p-4 space-y-3">
              <h3 className="text-sm font-semibold">Archivos adjuntos</h3>
              <p className="text-xs text-gray-600">
                Subir PDFs, imágenes, presentaciones u otros archivos para que los alumnos puedan descargarlos.
              </p>
              <input
                type="file"
                multiple
                className="block w-full text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
              />
              {/* En el futuro acá podes listar los archivos subidos y permitir editar / quitar */}
            </div>

            {/* Enlaces externos */}
            <div className="border rounded-lg p-4 space-y-3">
              <h3 className="text-sm font-semibold">Enlaces externos</h3>
              <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr_auto] gap-3">
                <input
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="URL (https://...)"
                />
                <input
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Descripción del enlace"
                />
                <button
                  type="button"
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                >
                  Añadir enlace
                </button>
              </div>
              {/* En el futuro: tabla/lista de enlaces con botones Editar / Quitar */}
            </div>

            {/* Exportación de TuesdayJS */}
            <div className="border rounded-lg p-4 space-y-3">
              <h3 className="text-sm font-semibold">Contenido de TuesdayJS</h3>
              <p className="text-xs text-gray-600">
                Sube el archivo HTML de exportación de TuesdayJS para insertar experiencias interactivas dentro del módulo.
              </p>
              <input
                type="file"
                accept=".html,.htm"
                className="block w-full text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-purple-50 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-purple-700 hover:file:bg-purple-100"
              />
              {/* En el futuro: lista de exports TuesdayJS con Editar / Quitar */}
            </div>
          </section>

          {/* 5. Visibilidad y permisos */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Visibilidad y permisos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <span className="block text-sm font-medium text-gray-700">
                  Tipo de módulo <span className="text-red-500">*</span>
                </span>

                <label className="flex items-start gap-2 text-sm">
                  <input
                    type="radio"
                    name="visibilidad"
                    value="publico"
                    checked={visibilidad === "publico"}
                    onChange={() => setVisibilidad("publico")}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span>
                    <span className="font-medium">Público</span>
                    <span className="block text-xs text-gray-500">
                      Cualquier usuario (profesores, estudiantes e invitados) puede usarlo y se puede insertar
                      en cualquier aula virtual.
                    </span>
                  </span>
                </label>

                <label className="flex items-start gap-2 text-sm">
                  <input
                    type="radio"
                    name="visibilidad"
                    value="privado"
                    checked={visibilidad === "privado"}
                    onChange={() => setVisibilidad("privado")}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span>
                    <span className="font-medium">Privado</span>
                    <span className="block text-xs text-gray-500">
                      Solo el profesor creador, administradores/profesores invitados y usuarios que cumplan
                      condiciones (institución, aula, invitación explícita).
                    </span>
                  </span>
                </label>
              </div>

              {/* Config extra sólo si es privado */}
              {visibilidad === "privado" && (
                <div className="space-y-3 border rounded-lg p-4 bg-gray-50">
                  <h3 className="text-sm font-semibold">Permisos para módulos privados</h3>

                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      Institución / escuela
                    </label>
                    <input
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Seleccionar institución / escuela"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      Profesores / administradores invitados
                    </label>
                    <input
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Buscar por nombre, correo o alias"
                    />
                    <p className="mt-1 text-[11px] text-gray-500">
                      Estos usuarios podrán usar el módulo en sus aulas virtuales.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      Restricción de alumnos
                    </label>
                    <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white">
                      <option>Solo alumnos de mi institución</option>
                      <option>Solo alumnos de mis cursos</option>
                      <option>Alumnos invitados explícitamente</option>
                      <option>Combinación de las anteriores (definida por backend)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            <p className="text-xs text-gray-500">
              El sistema también registrará el progreso de los usuarios (nivel alcanzado, experiencia acumulada,
              estado completo/incompleto y favoritos) fuera de este formulario.
            </p>
          </section>

          {/* 6. Acciones finales */}
          <section className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Nota: podrías mostrar este botón solo en modo edición */}
            <button
              type="button"
              className="text-sm text-red-600 hover:text-red-700 border border-red-200 hover:border-red-400 rounded-md px-4 py-2"
            >
              Marcar módulo como eliminado
            </button>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                type="button"
                className="rounded-md border px-4 py-2 text-sm"
              >
                Guardar como borrador
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2 text-sm font-medium"
              >
                Crear módulo
              </button>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
}
