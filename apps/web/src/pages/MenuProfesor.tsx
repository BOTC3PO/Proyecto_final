export default function menuProfesor(){return(
<main className="flex-1">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">

      <div className="bg-white rounded-xl shadow flex items-center gap-4 p-5">
        <div className="w-12 h-12 rounded-full bg-blue-600 text-white grid place-content-center font-semibold">JP</div>
        <div className="flex-1">
          <h2 className="font-semibold">Juan Pérez</h2>
          <p className="text-gray-600">Profesor</p>
        </div>
        <div className="flex items-center gap-5">
          <button title="Notificaciones">🔔</button>
          <a className="flex items-center gap-2 hover:underline" href="#">👤 Perfil</a>
        </div>
      </div>


      <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
        <div className="text-3xl">🕒</div>
        <div>
          <p className="text-gray-500">Próxima Clase</p>
          <p className="text-xl font-semibold">Matemáticas 1°A - 10:30</p>
        </div>
      </div>


      <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
        <div className="text-3xl">👪</div>
        <div>
          <p className="text-gray-500">Estudiantes Activos</p>
          <p className="text-2xl font-bold">87 estudiantes</p>
        </div>
      </div>


      <div className="bg-white rounded-xl shadow p-5">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🎓</div>
          <p className="text-gray-600">Progreso general de la próxima clase</p>
        </div>
        <div className="mt-3 h-3 w-80 bg-gray-200 rounded">
          <div className="h-3 w-1/4 bg-gray-400 rounded"></div>
        </div>
      </div>


      <div className="bg-white rounded-xl shadow">
        <div className="bg-sky-600 text-white font-semibold rounded-t-xl px-4 py-2">Académico</div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
          <a className="h-28 grid place-content-center hover:bg-gray-50" href="#">Módulo de Aprendizaje</a>
          <a className="h-28 grid place-content-center hover:bg-gray-50" href="#">Aulas Virtuales</a>
          <a className="h-28 grid place-content-center hover:bg-gray-50" href="#">Material Didáctico</a>
          <a className="h-28 grid place-content-center hover:bg-gray-50" href="#">Evaluaciones</a>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow">
        <div className="bg-sky-600 text-white font-semibold rounded-t-xl px-4 py-2">Gestión</div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
          <a className="h-28 grid place-content-center hover:bg-gray-50" href="#">Calendario</a>
          <a className="h-28 grid place-content-center hover:bg-gray-50" href="#">Estadísticas</a>
          <a className="h-28 grid place-content-center hover:bg-gray-50" href="#">Mensajes</a>
          <a className="h-28 grid place-content-center hover:bg-gray-50" href="#">Configuración</a>
        </div>
      </div>
    </div>
  </main>
) }