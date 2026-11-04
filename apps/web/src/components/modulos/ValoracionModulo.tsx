/**
 * L5 — valoración del módulo (1 a 5 estrellas). Muestra el promedio y la cantidad; quien empezó el módulo
 * puede valorarlo (y cambiar su valoración).
 */
import { useEffect, useState } from "react";
import { apiGet, apiPut } from "../../lib/api";
import { useI18n } from "../../i18n/I18nContext";
import { interpolar } from "../../i18n/interpolar";

type Valoracion = { promedio: number; cantidad: number; mia: number | null; puedeValorar: boolean };

export default function ValoracionModulo({ moduloId }: { moduloId: string }) {
  const { t } = useI18n();
  const [v, setV] = useState<Valoracion | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    apiGet<Valoracion>(`/api/modulos/${moduloId}/valoracion`).then(setV).catch(() => setV(null));
  }, [moduloId]);

  if (!v) return null;
  const valorar = async (puntaje: number) => {
    const r = await apiPut<{ mia: number; promedio: number; cantidad: number }>(`/api/modulos/${moduloId}/valoracion`, { puntaje });
    setV({ ...v, ...r });
  };
  const mostrado = hover ?? v.mia ?? 0;

  return (
    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
      {v.puedeValorar && (
        <span role="radiogroup" aria-label={t("valoracion.tuValoracion")} className="flex" onMouseLeave={() => setHover(null)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} type="button" role="radio" aria-checked={v.mia === n} aria-label={`${n}`}
              onMouseEnter={() => setHover(n)} onClick={() => void valorar(n)}
              className={`px-0.5 text-lg leading-none ${n <= mostrado ? "text-[var(--c-warning)]" : "text-[var(--c-border-strong)]"}`}>
              ★
            </button>
          ))}
        </span>
      )}
      <span className="text-xs text-[var(--c-muted)]">
        {v.cantidad > 0
          ? interpolar(t("valoracion.promedio"), { promedio: v.promedio.toLocaleString("es-AR"), cantidad: v.cantidad })
          : t("valoracion.sinValoraciones")}
      </span>
    </div>
  );
}
