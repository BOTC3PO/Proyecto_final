import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useI18n } from "../i18n/I18nContext";

const TEMAS_USER = [
  {
    id: 'vb2',
    name: 'VB2 — Oficial',
    descriptionKey: 'onboardingTema.elTemaGanadorOscuroModerno',
    bg: '#0d0e1a',
    surface: '#13152a',
    border: '#1e2140',
    text: '#e8eaf6',
    muted: '#8b8fa8',
    primary: '#6c63ff',
    preview: ['#0d0e1a', '#13152a', '#6c63ff'],
  },
  {
    id: 'nocturno-vb',
    name: 'Nocturno VB',
    descriptionKey: 'onboardingTema.oscuroConAcentosVioletaIdeal',
    bg: '#0d0d18',
    surface: '#16162a',
    border: '#2a2a4a',
    text: '#e8e8ff',
    muted: '#8888bb',
    primary: '#7c6fcd',
    preview: ['#0d0d18', '#16162a', '#7c6fcd'],
  },
  {
    id: 'nocturno',
    name: 'Nocturno',
    descriptionKey: 'onboardingTema.oscuroClasicoConAcentosAzules',
    bg: '#0f172a',
    surface: '#1e293b',
    border: '#334155',
    text: '#e2e8f0',
    muted: '#94a3b8',
    primary: '#60a5fa',
    preview: ['#0f172a', '#1e293b', '#60a5fa'],
  },
  {
    id: 'clasico-vb',
    name: 'Clásico VB',
    descriptionKey: 'onboardingTema.claroYLimpioConAzul',
    bg: '#f8fafc',
    surface: '#ffffff',
    border: '#e2e8f0',
    text: '#0f172a',
    muted: '#64748b',
    primary: '#2563eb',
    preview: ['#f8fafc', '#ffffff', '#2563eb'],
  },
  {
    id: 'aurora',
    name: 'Aurora',
    descriptionKey: 'onboardingTema.fondoVioletaSuaveYElegante',
    bg: '#fdf4ff',
    surface: '#ffffff',
    border: '#f3e8ff',
    text: '#3b0764',
    muted: '#7c3aed',
    primary: '#7c3aed',
    preview: ['#fdf4ff', '#ffffff', '#7c3aed'],
  },
  {
    id: 'bosque',
    name: 'Bosque',
    descriptionKey: 'onboardingTema.verdeNaturalYRelajante',
    bg: '#f0fdf4',
    surface: '#ffffff',
    border: '#bbf7d0',
    text: '#14532d',
    muted: '#15803d',
    primary: '#15803d',
    preview: ['#f0fdf4', '#ffffff', '#15803d'],
  },
  {
    id: 'minimal',
    name: 'Minimal',
    descriptionKey: 'onboardingTema.tonosArenaCalidosSinDistracciones',
    bg: '#f2f0eb',
    surface: '#faf9f6',
    border: '#dbd9d2',
    text: '#1a1a18',
    muted: '#6b6b62',
    primary: '#1a1a18',
    preview: ['#f2f0eb', '#faf9f6', '#1a1a18'],
  },
  {
    id: 'dorado',
    name: 'Dorado',
    descriptionKey: 'onboardingTema.metalicoYExclusivoElTema',
    bg: '#0a0800',
    surface: '#120f00',
    border: '#2a2000',
    text: '#fdf0c0',
    muted: '#c8a84b',
    primary: '#f5c842',
    preview: ['#0a0800', '#241c00', '#f5c842'],
  },
];

const STORAGE_KEY = 'vb-theme';

export default function OnboardingTema() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  // PLAN-M — reenvía returnTo a /login (ver Register.tsx y Login.tsx).
  const returnTo = searchParams.get('returnTo');
  const returnToQS = returnTo ? `?returnTo=${encodeURIComponent(returnTo)}` : '';
  const nombre = (location.state as { nombre?: string } | null)?.nombre ?? 'estudiante';

  const [selected, setSelected] = useState('nocturno-vb');

  const handleContinuar = () => {
    try {
      localStorage.setItem(STORAGE_KEY, selected);
    } catch { /* ignore */ }
    navigate(`/login${returnToQS}`, { state: { fromOnboarding: true } });
  };

  const tema = TEMAS_USER.find(t => t.id === selected) ?? TEMAS_USER[0];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 transition-colors duration-300"
      style={{ background: tema.bg, color: tema.text }}
    >
      <div
        className="w-full max-w-2xl rounded-2xl p-8 space-y-6 transition-colors duration-300"
        style={{
          background: tema.surface,
          border: `1px solid ${tema.border}`,
        }}
      >
        {/* Encabezado */}
        <div className="text-center space-y-2">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto text-white text-sm font-bold mb-3"
            style={{ background: tema.primary }}
          >
            VB
          </div>
          <h1 className="text-2xl font-semibold" style={{ color: tema.text }}>
            {t("onboardingTema.bienvenido")} {nombre}!
          </h1>
          <p className="text-sm" style={{ color: tema.muted }}>{t("onboardingTema.elegiComoQueresQueSe")}</p>
        </div>

        {/* Grid de temas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {TEMAS_USER.map((tema) => (
            <button
              key={tema.id}
              onClick={() => setSelected(tema.id)}
              className="rounded-xl p-3 text-left transition-all"
              style={{
                background: tema.surface,
                border: `2px solid ${selected === tema.id ? tema.primary : tema.border}`,
                outline: selected === tema.id ? `3px solid ${tema.primary}33` : 'none',
                outlineOffset: '1px',
              }}
            >
              {/* Preview de colores */}
              <div className="flex gap-1 mb-2.5">
                {tema.preview.map((color, i) => (
                  <div
                    key={i}
                    className="h-5 rounded"
                    style={{
                      background: color,
                      flex: i === 0 ? 2 : i === 1 ? 1 : 1,
                      border: `1px solid ${tema.border}`,
                    }}
                  />
                ))}
              </div>
              <p
                className="text-xs font-semibold truncate"
                style={{ color: tema.text }}
              >
                {tema.name}
              </p>
              <p
                className="text-[10px] mt-0.5 leading-tight"
                style={{ color: tema.muted }}
              >
                {t(tema.descriptionKey)}
              </p>
              {selected === tema.id && (
                <div
                  className="mt-2 text-[10px] font-bold"
                  style={{ color: tema.primary }}
                >{t("onboardingTema.seleccionado")}</div>
              )}
            </button>
          ))}
        </div>

        {/* Botón continuar */}
        <button
          onClick={handleContinuar}
          className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: tema.primary }}
        >
          {t("onboardingTema.continuarCon")} {tema.name}
        </button>

        {/* Skip */}
        <button
          onClick={() => navigate(`/login${returnToQS}`)}
          className="w-full text-center text-xs transition-opacity hover:opacity-70"
          style={{ color: tema.muted }}
        >{t("onboardingTema.saltarPorAhora")}</button>
      </div>
    </div>
  );
}
