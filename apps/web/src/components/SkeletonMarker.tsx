type SkeletonMarkerProps = {
  subjectLabel?: string;
};

export default function SkeletonMarker({ subjectLabel = "Biología" }: SkeletonMarkerProps) {
  return (
    <div className="space-y-3 rounded-lg border border-dashed border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
      <div>
        <p className="text-sm font-semibold">Marcador de esqueleto</p>
        <p className="text-xs text-emerald-800">
          Preparado para {subjectLabel}: sube una imagen y señala huesos u órganos clave.
        </p>
      </div>
      <ul className="space-y-1 text-xs text-emerald-800">
        <li>1. Sube una imagen del esqueleto o sistema que quieras trabajar.</li>
        <li>2. Marca las zonas que los estudiantes deben identificar.</li>
        <li>3. Agrega pistas y explicaciones para cada marcador.</li>
      </ul>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="rounded-md border border-emerald-200 bg-white px-3 py-2 text-xs">
          Subir imagen de referencia
        </button>
        <button type="button" className="rounded-md border border-emerald-200 bg-white px-3 py-2 text-xs">
          Definir marcadores
        </button>
      </div>
      <p className="text-[11px] text-emerald-700">
        Placeholder: pronto podrás marcar directamente sobre la imagen.
      </p>
    </div>
  );
}
