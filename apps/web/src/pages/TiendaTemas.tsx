import { useEffect, useState } from 'react';
import { useAuth } from '../auth/use-auth';
import { useTheme } from '../theme/ThemeContext';
import { apiGet } from '../lib/api';
import {
  fetchCatalogo,
  fetchMisItems,
  comprarItem,
  type TiendaItem as TiendaItemAPI,
  type UsuarioItem,
} from '../services/tienda';

type SaldoResponse = {
  saldo: number;
  moneda: string;
  updatedAt: string;
};

type EconomyState = {
  coins: number;
  foreignCoins: number;
  ownedThemes: string[];
  activeTheme: string;
};

const defaultEconomyState: EconomyState = {
  coins: 0,
  foreignCoins: 0,
  ownedThemes: ['clasico'],
  activeTheme: 'clasico',
};

export default function TiendaTemas() {
  const { user } = useAuth();
  const { theme, setTheme, availableThemes } = useTheme();

  const [economy, setEconomy] = useState<EconomyState>(defaultEconomyState);
  const [catalogoTienda, setCatalogoTienda] = useState<TiendaItemAPI[]>([]);
  const [misItems, setMisItems] = useState<UsuarioItem[]>([]);
  const [tiendaLoading, setTiendaLoading] = useState(true);
  const [comprando, setComprando] = useState<string | null>(null);
  const [tiendaMsg, setTiendaMsg] = useState<string | null>(null);

  type ThemeState = { ownedThemes: string[]; activeTheme: string };
  const THEME_STORAGE_KEY = "temas-alumno";

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as ThemeState;
      setEconomy((prev) => ({
        ...prev,
        ownedThemes: parsed.ownedThemes ?? prev.ownedThemes,
        activeTheme: parsed.activeTheme ?? prev.activeTheme,
      }));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      THEME_STORAGE_KEY,
      JSON.stringify({
        ownedThemes: economy.ownedThemes,
        activeTheme: economy.activeTheme,
      })
    );
  }, [economy.ownedThemes, economy.activeTheme]);

  useEffect(() => {
    if (!user?.id) return;
    let active = true;
    apiGet<SaldoResponse>(`/api/economia/saldos?usuarioId=${user.id}`)
      .then((res) => { if (active) setEconomy((prev) => ({ ...prev, coins: res.saldo })); })
      .catch(() => {});
    return () => { active = false; };
  }, [user?.id]);

  useEffect(() => {
    if (!user?.id) return;
    let active = true;
    setTiendaLoading(true);
    Promise.all([fetchCatalogo(), fetchMisItems()])
      .then(([catalogo, items]) => {
        if (!active) return;
        setCatalogoTienda(catalogo);
        setMisItems(items);
        const temasComprados = items
          .filter((i) => i.tipo === 'tema')
          .map((i) => i.asset_id ?? i.item_id);
        setEconomy((prev) => ({
          ...prev,
          ownedThemes: ['clasico', 'nocturno', ...temasComprados].filter(
            (v, i, a) => a.indexOf(v) === i
          ),
        }));
      })
      .catch(() => {})
      .finally(() => { if (!active) return; setTiendaLoading(false); });
    return () => { active = false; };
  }, [user?.id]);

  const handlePurchaseTheme = async (item: TiendaItemAPI) => {
    const assetId = item.asset_id ?? item.id;
    const yaComprado = misItems.some((i) => i.item_id === item.id) ||
      economy.ownedThemes.includes(assetId);

    if (yaComprado) {
      setTheme(assetId as import("../theme/ThemeContext").ThemeId);
      return;
    }

    if (item.precio === 0) {
      try {
        await comprarItem(item.id);
        setMisItems((prev) => [...prev, {
          item_id: item.id,
          comprado_at: new Date().toISOString(),
          origen: "inicial",
          tipo: item.tipo,
          nombre: item.nombre,
          asset_id: item.asset_id,
        }]);
        setEconomy((prev) => ({
          ...prev,
          ownedThemes: [...new Set([...prev.ownedThemes, assetId])],
        }));
        setTheme(assetId as import("../theme/ThemeContext").ThemeId);
      } catch { /* ignorar */ }
      return;
    }

    if (economy.coins < item.precio) {
      setTiendaMsg(
        `Necesitás ${item.precio} 🪙 pero tenés ${economy.coins}.`
      );
      return;
    }

    setComprando(item.id);
    setTiendaMsg(null);
    try {
      const result = await comprarItem(item.id);
      if (result.ok) {
        setEconomy((prev) => ({
          ...prev,
          coins: result.saldoRestante ?? prev.coins - item.precio,
          ownedThemes: [...new Set([...prev.ownedThemes, assetId])],
        }));
        setMisItems((prev) => [...prev, {
          item_id: item.id,
          comprado_at: new Date().toISOString(),
          origen: "compra",
          tipo: item.tipo,
          nombre: item.nombre,
          asset_id: item.asset_id,
        }]);
        setTheme(assetId as import("../theme/ThemeContext").ThemeId);
      } else {
        setTiendaMsg(result.mensaje ?? "No se pudo completar la compra.");
      }
    } catch (err) {
      setTiendaMsg(
        err instanceof Error ? err.message : "Error al comprar."
      );
    } finally {
      setComprando(null);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--c-bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">

        {/* Encabezado */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--c-text)]">Tienda de temas</h1>
            <p className="text-sm text-[var(--c-muted)] mt-1">Personalizá tu experiencia con monedas</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700">
            <span>🪙</span>
            <span>{economy.coins.toLocaleString('es-AR')} disponibles</span>
          </div>
        </div>

        {/* Catálogo */}
        <div className="bg-[var(--c-surface)] rounded-2xl shadow p-6 space-y-4">
          {tiendaLoading ? (
            <div className="space-y-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i}
                  className="h-16 animate-pulse rounded-xl bg-[var(--c-border)]" />
              ))}
            </div>
          ) : (
            <>
              {/* Sección temas */}
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--c-muted)]">
                  Temas
                </p>
                {catalogoTienda
                  .filter((item) => item.tipo === "tema")
                  .map((item) => {
                    const assetId = item.asset_id ?? item.id;
                    const isOwned = misItems.some((i) => i.item_id === item.id)
                      || economy.ownedThemes.includes(assetId);
                    const isActive = theme === assetId;
                    const isLoading = comprando === item.id;
                    return (
                      <div key={item.id}
                        className="flex items-center justify-between rounded-xl border border-[var(--c-border)] p-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-[var(--c-text)]">
                              {item.nombre}
                            </p>
                            {item.asset_id && (
                              catalogoTienda.find(
                                (t) => t.id === item.id
                              ) && (() => {
                                const themeOpt = availableThemes.find(
                                  (t) => t.id === assetId
                                );
                                return themeOpt?.animated ? (
                                  <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-700">
                                    Animado
                                  </span>
                                ) : null;
                              })()
                            )}
                            {isActive && (
                              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
                                Activo
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[var(--c-muted)] mt-0.5">
                            {item.descripcion}
                          </p>
                          <p className="text-xs text-[var(--c-muted)] mt-0.5">
                            {item.precio === 0 ? "Gratis" : `${item.precio} 🪙`}
                          </p>
                        </div>
                        <button
                          type="button"
                          disabled={isLoading || (!isOwned && economy.coins < item.precio && item.precio > 0)}
                          onClick={() => handlePurchaseTheme(item)}
                          className={`rounded-lg px-3 py-1 text-xs font-semibold transition-colors ${
                            isActive
                              ? "bg-blue-100 text-blue-700"
                              : isOwned
                              ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                              : economy.coins >= item.precio || item.precio === 0
                              ? "bg-[var(--c-success)] text-white hover:opacity-90"
                              : "bg-[var(--c-border)] text-[var(--c-muted)] cursor-not-allowed"
                          }`}
                        >
                          {isLoading ? "..." : isActive ? "Activo" : isOwned ? "Activar" : "Comprar"}
                        </button>
                      </div>
                    );
                  })}
              </div>

              {/* Mensaje de error/éxito */}
              {tiendaMsg && (
                <p className="text-xs text-red-500">{tiendaMsg}</p>
              )}

              {/* Próximamente */}
              <div className="rounded-xl border border-dashed border-[var(--c-border)] p-4 text-center">
                <p className="text-xs text-[var(--c-muted)]">
                  Avatares, marcos y animaciones — próximamente
                </p>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
