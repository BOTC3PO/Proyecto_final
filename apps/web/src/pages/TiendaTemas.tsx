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
import type { ThemeOption } from '../theme/ThemeContext';

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

const FREE_THEMES = ['clasico', 'nocturno', 'clasico-vb', 'nocturno-vb', 'minimal'];

const THEME_META: Record<string, {
  bg: string; surface: string; primary: string;
  legendary?: boolean; animated?: boolean;
  preview?: string;
}> = {
  'vb2':          { bg: '#0d0e1a', surface: '#13152a', primary: '#6c63ff', animated: true,
    preview: 'linear-gradient(135deg,#0d0e1a,#1e1f3a,#0d0e2a)' },
  'clasico':       { bg: '#f1f5f9', surface: '#ffffff', primary: '#2563eb' },
  'clasico-vb':    { bg: '#f8fafc', surface: '#ffffff', primary: '#2563eb' },
  'nocturno':      { bg: '#0f172a', surface: '#1e293b', primary: '#60a5fa' },
  'nocturno-vb':   { bg: '#0d0d18', surface: '#16162a', primary: '#7c6fcd' },
  'minimal':       { bg: '#f2f0eb', surface: '#faf9f6', primary: '#1a1a18' },
  'aurora':        { bg: '#fdf4ff', surface: '#ffffff', primary: '#7c3aed' },
  'bosque':        { bg: '#f0fdf4', surface: '#ffffff', primary: '#15803d' },
  'vibrante':      { bg: '#fff7ed', surface: '#ffffff', primary: '#ea580c' },
  'obsidian':      { bg: '#0b0b0f', surface: '#13131a', primary: '#7b68ee' },
  'sakura':        { bg: '#fff5f7', surface: '#ffffff', primary: '#e91e8c' },
  'carbon':        { bg: '#1a1a1a', surface: '#242424', primary: '#ff6b35' },
  'arctic':        { bg: '#f0f7ff', surface: '#ffffff', primary: '#0066cc' },
  'lava':          { bg: '#0f0500', surface: '#1f0a00', primary: '#ff4500' },
  'emerald':       { bg: '#f0fdf4', surface: '#ffffff', primary: '#059669' },
  'dusk':          { bg: '#1a1025', surface: '#231530', primary: '#c084fc' },
  'galaxy':        { bg: '#0a0a1a', surface: '#0f0f2a', primary: '#8b5cf6', animated: true,
    preview: 'linear-gradient(135deg,#0a0a1a,#0f0a2a,#0a1a2a)' },
  'sunset':        { bg: '#1a0a00', surface: '#2a1200', primary: '#ff6b35', animated: true,
    preview: 'linear-gradient(135deg,#1a0500,#3d1500,#1a0020)' },
  'ocean':         { bg: '#000d1a', surface: '#001a33', primary: '#0099ff', animated: true,
    preview: 'linear-gradient(135deg,#000d1a,#001a33,#000d2a)' },
  'candy':         { bg: '#fff0f5', surface: '#ffffff', primary: '#ff3399', animated: true,
    preview: 'linear-gradient(90deg,#ff3399,#33ccff)' },
  'neon':          { bg: '#05000a', surface: '#0a0014', primary: '#ff00ff', animated: true,
    preview: 'linear-gradient(135deg,#05000a,#1a0033)' },
  'aurora-boreal': { bg: '#030a1a', surface: '#071428', primary: '#00e5ff', animated: true, legendary: true,
    preview: 'linear-gradient(135deg,#030a1a,#0a2a40,#071428)' },
  'cosmos':        { bg: '#02000a', surface: '#06001a', primary: '#bf5fff', animated: true, legendary: true,
    preview: 'linear-gradient(135deg,#02000a,#150040,#06001a)' },
  'magma':         { bg: '#0a0200', surface: '#150400', primary: '#ff6d00', animated: true, legendary: true,
    preview: 'linear-gradient(135deg,#0a0200,#2d0a00,#1a0300)' },
  'dorado':        { bg: '#0a0800', surface: '#120f00', primary: '#f5c842', animated: true, legendary: true,
    preview: 'linear-gradient(135deg,#0a0800,#241c00,#1a1400)' },
};

function ThemeCard({
  theme: t, meta, owned, isActive, comprando, coins, onActivate, onBuy,
}: {
  theme: ThemeOption;
  meta: { bg: string; surface: string; primary: string; preview?: string };
  owned: boolean; isActive: boolean; comprando: string | null; coins: number;
  onActivate: () => void; onBuy: () => void;
}) {
  const isFree = t.price === 0;
  return (
    <div
      className="rounded-xl overflow-hidden border-2 transition-all"
      style={{ borderColor: isActive ? meta.primary : 'var(--c-border)' }}
    >
      <div
        className="h-16 flex items-end px-3 pb-2"
        style={{ background: meta.preview ?? meta.bg }}
      >
        <div className="flex gap-1">
          <div className="w-8 h-4 rounded" style={{ background: meta.surface }} />
          <div className="w-4 h-4 rounded" style={{ background: meta.primary }} />
          <div className="w-6 h-4 rounded" style={{ background: meta.surface, opacity: 0.6 }} />
        </div>
      </div>
      <div
        className="px-3 py-2.5 flex items-center justify-between gap-2"
        style={{ background: meta.surface ?? 'var(--c-surface)' }}
      >
        <div className="min-w-0">
          <p className="text-xs font-semibold truncate" style={{ color: meta.primary }}>
            {t.name}
          </p>
          <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
            {isFree ? 'Gratis' : owned ? '✓ Tuyo' : `🪙 ${t.price}`}
          </p>
        </div>
        {owned || isFree ? (
          <button
            onClick={onActivate}
            disabled={isActive}
            className="rounded-lg px-2 py-1 text-[10px] font-semibold text-white disabled:opacity-50"
            style={{ background: meta.primary }}
          >
            {isActive ? 'Activo' : 'Usar'}
          </button>
        ) : (
          <button
            onClick={onBuy}
            disabled={comprando === t.id || coins < t.price}
            className="rounded-lg px-2 py-1 text-[10px] font-semibold text-white disabled:opacity-40"
            style={{ background: meta.primary }}
          >
            {comprando === t.id ? '...' : 'Comprar'}
          </button>
        )}
      </div>
    </div>
  );
}

export default function TiendaTemas() {
  const { user } = useAuth();
  const { theme, setTheme, availableThemes } = useTheme();

  const [economy, setEconomy] = useState<EconomyState>(defaultEconomyState);
  const [catalogoTienda, setCatalogoTienda] = useState<TiendaItemAPI[]>([]);
  const [, setMisItems] = useState<UsuarioItem[]>([]);
  const [tiendaLoading, setTiendaLoading] = useState(true);
  // FIX-TEST4-X-01 — antes si la tabla `tienda_items` estaba
  // vacía (seed no corrido), la página no mostraba nada y el
  // usuario no sabía por qué. Ahora distinguimos "catálogo vacío"
  // de "cargando".
  const [catalogoVacio, setCatalogoVacio] = useState(false);
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
    setCatalogoVacio(false);
    Promise.all([fetchCatalogo(), fetchMisItems()])
      .then(([catalogo, items]) => {
        if (!active) return;
        setCatalogoTienda(catalogo);
        setMisItems(items);
        // FIX-TEST4-X-01 — si el catálogo viene vacío, marcamos
        // el flag para mostrar el mensaje "seed no corrido" en
        // la UI. Antes el usuario pensaba que la tienda estaba
        // rota sin saber por qué.
        setCatalogoVacio(catalogo.length === 0);
        const temasComprados = items
          .filter((i) => i.tipo === 'tema')
          .map((i) => {
            const raw = i.asset_id ?? i.item_id;
            return raw.startsWith('tema-') ? raw.slice(5) : raw;
          });
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

  const handlePurchaseTheme = async (themeId: string) => {
    const owned = economy.ownedThemes.includes(themeId) || FREE_THEMES.includes(themeId);

    if (owned) {
      setTheme(themeId as import('../theme/ThemeContext').ThemeId);
      return;
    }

    const themeOpt = availableThemes.find((t) => t.id === themeId);
    if (!themeOpt) return;

    if (economy.coins < themeOpt.price) {
      setTiendaMsg(`Necesitás ${themeOpt.price} 🪙 pero tenés ${economy.coins}.`);
      return;
    }

    const catalogItem = catalogoTienda.find((i) =>
      i.asset_id === themeId ||
      i.id === themeId ||
      i.id === `tema-${themeId}`
    );
    if (!catalogItem) {
      setTiendaMsg('Este tema no está disponible en el catálogo aún.');
      return;
    }

    setComprando(themeId);
    setTiendaMsg(null);
    try {
      const result = await comprarItem(catalogItem.id);
      if (result.ok) {
        setEconomy((prev) => ({
          ...prev,
          coins: result.saldoRestante ?? prev.coins - themeOpt.price,
          ownedThemes: [...new Set([...prev.ownedThemes, themeId])],
        }));
        setMisItems((prev) => [...prev, {
          item_id: catalogItem.id,
          comprado_at: new Date().toISOString(),
          origen: 'compra',
          tipo: catalogItem.tipo,
          nombre: catalogItem.nombre,
          asset_id: catalogItem.asset_id,
        }]);
        setTheme(themeId as import('../theme/ThemeContext').ThemeId);
        setTiendaMsg(`✓ ¡${themeOpt.name} desbloqueado!`);
        window.dispatchEvent(new CustomEvent('vb:coins-updated'));
      } else {
        setTiendaMsg(result.mensaje ?? 'No se pudo completar la compra.');
      }
    } catch (err) {
      setTiendaMsg(err instanceof Error ? err.message : 'Error al comprar.');
    } finally {
      setComprando(null);
    }
  };

  return (
    <div className="page-root min-h-screen bg-[var(--c-bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

        {/* Encabezado */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--c-text)]">Tienda de temas</h1>
            <p className="text-sm text-[var(--c-muted)] mt-0.5">
              Personalizá tu experiencia con tus monedas.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--c-warning)_35%,transparent)] bg-[color-mix(in_srgb,var(--c-warning)_10%,transparent)] px-3 py-1.5">
            <span>🪙</span>
            <span className="text-sm font-semibold text-[var(--c-warning)]">
              {economy.coins.toLocaleString('es-AR')} disponibles
            </span>
          </div>
        </div>

        {/* Mensaje de feedback */}
        {tiendaMsg && (
          <div className={`rounded-xl border px-4 py-3 text-sm font-medium ${
            tiendaMsg.startsWith('✓')
              ? 'border-[color-mix(in_srgb,var(--c-success)_25%,transparent)] bg-[color-mix(in_srgb,var(--c-success)_8%,transparent)] text-[var(--c-success)]'
              : 'border-[color-mix(in_srgb,var(--c-danger)_25%,transparent)] bg-[color-mix(in_srgb,var(--c-danger)_8%,transparent)] text-[var(--c-danger)]'
          }`}>
            {tiendaMsg}
          </div>
        )}

        {tiendaLoading ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-40 rounded-2xl animate-pulse bg-[var(--c-border)]" />
            ))}
          </div>
        ) : catalogoVacio ? (
          // FIX-TEST4-X-01 — antes no había empty state y el
          // usuario pensaba que la tienda estaba rota. Ahora
          // mostramos un mensaje claro: el seed nunca se corrió
          // o la DB está vacía. Los temas gratuitos siguen
          // funcionando desde `availableThemes` (vb2, clasico,
          // nocturno, etc.) — los mostramos abajo.
          <div
            data-testid="tienda-vacia"
            className="rounded-xl border border-dashed border-amber-300 bg-amber-50 p-6 text-sm text-amber-800"
          >
            <p className="font-semibold">La tienda todavía no tiene items para comprar.</p>
            <p className="mt-1 text-amber-700">
              Es probable que el seed <code className="rounded bg-amber-100 px-1.5 py-0.5 text-xs">seed_tienda</code> no se haya corrido en esta base de datos.
              Pedile al admin que ejecute <code className="rounded bg-amber-100 px-1.5 py-0.5 text-xs">npm run seed:tienda</code> en <code className="rounded bg-amber-100 px-1.5 py-0.5 text-xs">/api</code>.
            </p>
            <p className="mt-3 text-amber-700">
              Mientras tanto, podés usar los temas gratuitos disponibles abajo.
            </p>
          </div>
        ) : (
          <>
            {/* ── Tema oficial VB2 — gratuito y destacado ── */}
            {availableThemes.find(t => t.id === 'vb2') && (() => {
              const meta = THEME_META['vb2']!;
              const isActive = theme === 'vb2';
              return (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-base">🏆</span>
                    <h2 className="text-sm font-semibold text-[var(--c-text)]">Tema oficial</h2>
                    <span className="text-xs text-[var(--c-muted)]">— Ganador de la encuesta · Gratis</span>
                  </div>
                  <div
                    className="relative rounded-2xl overflow-hidden border-2 transition-all max-w-sm"
                    style={{
                      borderColor: isActive ? meta.primary : 'rgba(108,99,255,0.3)',
                      boxShadow: isActive ? `0 0 24px rgba(108,99,255,0.4)` : 'none',
                    }}
                  >
                    <div
                      className="h-24 flex items-center justify-center relative"
                      style={{ background: meta.preview ?? meta.bg }}
                    >
                      <div className="text-center z-10 px-4">
                        <p className="text-sm font-bold" style={{ color: meta.primary }}>
                          VB2 — Oficial
                        </p>
                        <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          ✨ Animado · Gratis para siempre
                        </p>
                      </div>
                      {isActive && (
                        <div className="absolute top-2 right-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                            style={{ background: meta.primary }}>
                            Activo
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="px-4 py-3 flex items-center justify-between"
                      style={{ background: meta.surface }}>
                      <span className="text-xs font-semibold" style={{ color: meta.primary }}>
                        🏆 Gratis
                      </span>
                      <button
                        onClick={() => setTheme('vb2')}
                        disabled={isActive}
                        className="rounded-lg px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-50"
                        style={{ background: meta.primary }}
                      >
                        {isActive ? 'Activo' : 'Activar'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* ── Temas legendarios ─────────────────────────────────── */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base">⚡</span>
                <h2 className="text-sm font-semibold text-[var(--c-text)]">Legendarios</h2>
                <span className="text-xs text-[var(--c-muted)]">— Animación de fondo exclusiva</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {availableThemes
                  .filter((t) => THEME_META[t.id]?.legendary)
                  .map((t) => {
                    const meta = THEME_META[t.id]!;
                    const owned = economy.ownedThemes.includes(t.id) || FREE_THEMES.includes(t.id);
                    const isActive = theme === t.id;
                    return (
                      <div
                        key={t.id}
                        className="relative rounded-2xl overflow-hidden border-2 transition-all"
                        style={{
                          borderColor: isActive ? meta.primary : owned ? meta.primary + '66' : '#333',
                          boxShadow: isActive ? `0 0 20px ${meta.primary}44` : 'none',
                        }}
                      >
                        {/* Preview de fondo */}
                        <div
                          className="h-28 relative flex items-center justify-center"
                          style={{ background: meta.preview ?? meta.bg }}
                        >
                          <div className="absolute inset-0 opacity-30" style={{
                            backgroundImage: 'radial-gradient(1px 1px at 20% 30%, white 0%, transparent 100%), radial-gradient(1px 1px at 60% 20%, white 0%, transparent 100%), radial-gradient(1px 1px at 80% 60%, white 0%, transparent 100%), radial-gradient(1px 1px at 40% 80%, white 0%, transparent 100%)',
                          }} />
                          <div className="relative z-10 text-center px-3">
                            <p className="text-sm font-bold" style={{ color: meta.primary, textShadow: `0 0 10px ${meta.primary}` }}>
                              {t.name}
                            </p>
                            <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
                              ⚡ Legendario · Animado
                            </p>
                          </div>
                          {isActive && (
                            <div className="absolute top-2 right-2">
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white"
                                style={{ background: meta.primary }}>
                                Activo
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Footer de la card */}
                        <div
                          className="px-3 py-2.5 flex items-center justify-between gap-2"
                          style={{ background: meta.surface }}
                        >
                          <span className="text-xs font-semibold" style={{ color: meta.primary }}>
                            {owned ? '✓ Desbloqueado' : `🪙 ${t.price}`}
                          </span>
                          {owned ? (
                            <button
                              onClick={() => setTheme(t.id)}
                              disabled={isActive}
                              className="rounded-lg px-2.5 py-1 text-xs font-semibold text-white disabled:opacity-50 transition-opacity hover:opacity-80"
                              style={{ background: meta.primary }}
                            >
                              {isActive ? 'Activo' : 'Activar'}
                            </button>
                          ) : (
                            <button
                              onClick={() => handlePurchaseTheme(t.id)}
                              disabled={comprando === t.id || economy.coins < t.price}
                              className="rounded-lg px-2.5 py-1 text-xs font-semibold text-white disabled:opacity-40 transition-opacity hover:opacity-80"
                              style={{ background: meta.primary }}
                            >
                              {comprando === t.id ? '...' : 'Comprar'}
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* ── Temas animados ────────────────────────────────────── */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base">✨</span>
                <h2 className="text-sm font-semibold text-[var(--c-text)]">Animados</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {availableThemes
                  .filter((t) =>
                    THEME_META[t.id]?.animated &&
                    !THEME_META[t.id]?.legendary &&
                    t.price > 0
                  )
                  .map((t) => (
                    <ThemeCard
                      key={t.id}
                      theme={t}
                      meta={THEME_META[t.id]!}
                      owned={economy.ownedThemes.includes(t.id)}
                      isActive={theme === t.id}
                      comprando={comprando}
                      coins={economy.coins}
                      onActivate={() => setTheme(t.id)}
                      onBuy={() => handlePurchaseTheme(t.id)}
                    />
                  ))}
              </div>
            </div>

            {/* ── Temas estáticos ───────────────────────────────────── */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base">🎨</span>
                <h2 className="text-sm font-semibold text-[var(--c-text)]">Estáticos</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {availableThemes
                  .filter((t) => !THEME_META[t.id]?.animated && !THEME_META[t.id]?.legendary)
                  .map((t) => (
                    <ThemeCard
                      key={t.id}
                      theme={t}
                      meta={THEME_META[t.id]!}
                      owned={economy.ownedThemes.includes(t.id) || FREE_THEMES.includes(t.id)}
                      isActive={theme === t.id}
                      comprando={comprando}
                      coins={economy.coins}
                      onActivate={() => setTheme(t.id)}
                      onBuy={() => handlePurchaseTheme(t.id)}
                    />
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
