export default function aula() {
    return(
  <main className="flex-1">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <div className="bg-blue-600 text-white rounded-xl h-28 relative">
        <div className="absolute left-5 bottom-3 text-sm">Prof. Juan Pérez | Código de clase: MAT3A-2024</div>
        <button className="absolute right-5 bottom-3 bg-white text-blue-700 px-4 py-1.5 rounded-md shadow">Gestionar</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

        <div className="lg:col-span-2 space-y-5">

          <div className="bg-white rounded-xl shadow p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white grid place-content-center">JP</div>
              <input className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="Escribe una novedad..." />
              <button className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-md">Publicar</button>
            </div>
            <div className="flex items-center gap-3 mt-3 text-gray-600">
              <button className="p-2 hover:bg-gray-100 rounded">📎</button>
              <button className="p-2 hover:bg-gray-100 rounded">🖼️</button>
            </div>
          </div>


          <div className="bg-white rounded-xl shadow p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white grid place-content-center">JP</div>
              <div className="font-semibold">Nuevo módulo disponible: Multiplicación</div>
            </div>
            <p className="mt-3 text-sm text-gray-800">
              Se ha desbloqueado el módulo de multiplicación para los estudiantes que completaron "Sumas Avanzadas".
              Incluye: juego de memoria matemática, ejercicios interactivos y modo aventura.
            </p>
            <div className="flex gap-6 mt-3">
              <a className="text-blue-600 hover:underline" href="#">Ver módulo</a>
              <a className="text-blue-600 hover:underline" href="#">Iniciar juego</a>
            </div>
            <p className="text-xs text-gray-500 mt-2">Publicado ayer</p>
          </div>
        </div>


        <aside className="space-y-5">

          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold">🏆 Top Estudiantes</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex justify-between"><span>🥇 Ana García</span><span>980 pts</span></li>
              <li className="flex justify-between"><span>🥈 Carlos Ruiz</span><span>850 pts</span></li>
              <li className="flex justify-between"><span>🥉 María Torres</span><span>720 pts</span></li>
            </ul>
          </div>


          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold">Progreso de la clase</h3>
            <div className="mt-3 space-y-3 text-sm">
              <div>
                <div className="flex justify-between"><span>Sumas Básicas</span><span>90%</span></div>
                <div className="h-2 bg-gray-200 rounded"><div className="h-2 bg-green-500 w-[90%] rounded"></div></div>
              </div>
              <div>
                <div className="flex justify-between"><span>Sumas Avanzadas</span><span>40%</span></div>
                <div className="h-2 bg-gray-200 rounded"><div className="h-2 bg-blue-500 w-[40%] rounded"></div></div>
              </div>
              <div>
                <div className="flex justify-between"><span>Multiplicación</span><span>Bloqueado</span></div>
                <div className="h-2 bg-gray-200 rounded"><div className="h-2 bg-gray-400 w-[0%] rounded"></div></div>
              </div>
            </div>
          </div>


          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold">Próximas actividades</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li>Evaluación Sumas Avanzadas — <span className="text-gray-600">Mañana</span></li>
              <li>Modo Aventura — <span className="text-gray-600">Viernes</span></li>
            </ul>
          </div>


          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold">Herramientas del profesor</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:underline" href="#">Informes y Estadísticas</a></li>
              <li><a className="hover:underline" href="#">Rendimiento por módulo</a></li>
              <li><a className="hover:underline" href="#">Progreso individual</a></li>
              <li><a className="hover:underline" href="#">Informe mensual</a></li>
              <li><a className="hover:underline" href="#">Alertas de rendimiento</a></li>
              <li className="pt-2"><a className="hover:underline" href="#">Gestionar módulos</a></li>
              <li><a className="hover:underline" href="#">Configurar juegos</a></li>
              <li><a className="hover:underline" href="#">Ver estadísticas</a></li>
              <li><a className="hover:underline" href="#">Ajustes TTS</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </main>
    )
}