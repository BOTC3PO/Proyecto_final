export default function ReadingWorkshop() {
  return (
    <div className="space-y-3 rounded-lg border border-dashed border-purple-200 bg-purple-50 p-4 text-sm text-purple-900">
      <div>
        <p className="text-sm font-semibold">Taller de lectura guiada</p>
        <p className="text-xs text-purple-800">
          Ideal para Lengua y Literatura: organiza fragmentos, consignas y evaluación de comprensión.
        </p>
      </div>
      <ul className="space-y-1 text-xs text-purple-800">
        <li>1. Carga un fragmento o capítulo para analizar.</li>
        <li>2. Define consignas de lectura y preguntas abiertas.</li>
        <li>3. Suma criterios de evaluación y rúbricas de escritura.</li>
      </ul>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="rounded-md border border-purple-200 bg-white px-3 py-2 text-xs">
          Subir fragmento
        </button>
        <button type="button" className="rounded-md border border-purple-200 bg-white px-3 py-2 text-xs">
          Crear consignas
        </button>
      </div>
      <p className="text-[11px] text-purple-700">
        Placeholder: el editor completo llegará con anotaciones colaborativas.
      </p>
    </div>
  );
}
