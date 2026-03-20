import React, { useEffect, useMemo, useState } from "react";
import GraficoEconomia, { type GraficoEconomiaData } from "./GraficoEconomia";
import {
  getCatalogoTemaEconomiaSync,
  listarTemasEconomia,
  precargarCatalogoTemaEconomia,
} from "./catalogoApi";

type EnunciadoTema = {
  titulo?: string;
  enunciado?: string;
  requiereGrafico?: boolean;
  grafico?: GraficoEconomiaData;
};

const asEnunciado = (value: Record<string, unknown>): EnunciadoTema => value as EnunciadoTema;

export const VisorEconomia: React.FC = () => {
  const [temas, setTemas] = useState<string[]>([]);
  const [tema, setTema] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        setLoading(true);
        const lista = await listarTemasEconomia();
        if (!active) return;
        setTemas(lista);
        const first = lista[0] ?? "";
        setTema((curr) => curr || first);
      } catch (e) {
        if (!active) return;
        setError(e instanceof Error ? e.message : "No se pudieron listar temas de economía");
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!tema) return;
    let active = true;
    (async () => {
      try {
        setError(null);
        await precargarCatalogoTemaEconomia(tema);
        if (active) setVersion((v) => v + 1);
      } catch (e) {
        if (!active) return;
        setError(e instanceof Error ? e.message : `No se pudo cargar el catálogo para ${tema}`);
      }
    })();
    return () => {
      active = false;
    };
  }, [tema]);

  const enunciado = useMemo(() => asEnunciado(getCatalogoTemaEconomiaSync(tema).enunciado), [tema, version]);

  return (
    <section style={{ display: "grid", gap: 12 }}>
      <h2>Visor de Economía</h2>

      <label style={{ display: "grid", gap: 6, maxWidth: 520 }}>
        <span>Tema</span>
        <select value={tema} onChange={(e) => setTema(e.target.value)}>
          {temas.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
      </label>

      {loading && <p>Cargando temas…</p>}
      {error && <p style={{ color: "#b91c1c" }}>{error}</p>}

      {!loading && !error && tema && (
        <article style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: 14, background: "#fff" }}>
          <h3>{enunciado.titulo ?? tema}</h3>
          <p style={{ whiteSpace: "pre-wrap" }}>{enunciado.enunciado ?? "Sin enunciado disponible."}</p>

          {enunciado.requiereGrafico && <GraficoEconomia grafico={enunciado.grafico} />}
        </article>
      )}
    </section>
  );
};

export default VisorEconomia;
