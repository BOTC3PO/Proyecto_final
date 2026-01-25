type MapEditorProps = {
  subjectLabel?: string;
};

export default function MapEditor({ subjectLabel = "Geografía" }: MapEditorProps) {
  return (
    <div className="space-y-3 rounded-lg border border-dashed border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
      <div>
        <p className="text-sm font-semibold">Editor de mapas interactivos</p>
        <p className="text-xs text-blue-800">
          Diseñado para {subjectLabel}: agrega un mapa base y define puntos de interés para las preguntas.
        </p>
      </div>
      <ul className="space-y-1 text-xs text-blue-800">
        <li>1. Carga un mapa (PNG/JPG) o selecciona una plantilla disponible.</li>
        <li>2. Marca ubicaciones clave con etiquetas y pistas.</li>
        <li>3. Define las consignas y el feedback asociado a cada punto.</li>
      </ul>
      <p className="text-[11px] text-blue-700">
        Placeholder: integraremos el editor visual en la próxima iteración.
      </p>
      <p className="text-[11px] text-blue-700">
        Mientras tanto, esta sección se mostrará solo como referencia informativa.
      </p>
    </div>
  );
}
