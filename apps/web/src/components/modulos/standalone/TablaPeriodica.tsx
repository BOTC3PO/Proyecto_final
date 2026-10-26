import { useEffect, useId, useState } from "react";

import { useI18n } from "../../../i18n/I18nContext";
type Element = {
  name: string;
  symbol: string;
  number: number;
  atomic_mass: number;
  category: string;
  phase: string;
  electron_configuration: string;
  electronegativity_pauling: number | null;
  xpos: number;
  ypos: number;
  period: number;
};

// Colores de categoría = codificación de contenido de la tabla (no es chrome de
// la app); la leyenda los explica con texto para no depender sólo del color.
const CATEGORY_COLORS: Record<string, string> = {
  "diatomic nonmetal": "#4ade80",
  "noble gas": "#818cf8",
  "alkali metal": "#f87171",
  "alkaline earth metal": "#fb923c",
  "metalloid": "#a3e635",
  "polyatomic nonmetal": "#34d399",
  "post-transition metal": "#60a5fa",
  "transition metal": "#fbbf24",
  "lanthanide": "#e879f9",
  "actinide": "#f472b6",
  "unknown, probably transition metal": "#94a3b8",
  "unknown, probably post-transition metal": "#94a3b8",
  "unknown, predicted to be noble gas": "#94a3b8",
  "unknown, probably metalloid": "#94a3b8",
};

const CATEGORY_ES: Record<string, string> = {
  "diatomic nonmetal": "No metal diatómico",
  "noble gas": "Gas noble",
  "alkali metal": "Metal alcalino",
  "alkaline earth metal": "Metal alcalinotérreo",
  "metalloid": "Metaloide",
  "polyatomic nonmetal": "No metal poliatómico",
  "post-transition metal": "Metal post-transición",
  "transition metal": "Metal de transición",
  "lanthanide": "Lantánido",
  "actinide": "Actínido",
  "unknown, probably transition metal": "Desconocido",
  "unknown, probably post-transition metal": "Desconocido",
  "unknown, predicted to be noble gas": "Desconocido",
  "unknown, probably metalloid": "Desconocido",
};

const PHASE_ES: Record<string, string> = {
  "Gas": "Gas",
  "Solid": "Sólido",
  "Liquid": "Líquido",
  "Unknown": "Desconocido",
};

const NAME_ES: Record<string, string> = {
  "Hydrogen": "Hidrógeno", "Helium": "Helio", "Lithium": "Litio",
  "Beryllium": "Berilio", "Boron": "Boro", "Carbon": "Carbono",
  "Nitrogen": "Nitrógeno", "Oxygen": "Oxígeno", "Fluorine": "Flúor",
  "Neon": "Neón", "Sodium": "Sodio", "Magnesium": "Magnesio",
  "Aluminum": "Aluminio", "Silicon": "Silicio", "Phosphorus": "Fósforo",
  "Sulfur": "Azufre", "Chlorine": "Cloro", "Argon": "Argón",
  "Potassium": "Potasio", "Calcium": "Calcio", "Scandium": "Escandio",
  "Titanium": "Titanio", "Vanadium": "Vanadio", "Chromium": "Cromo",
  "Manganese": "Manganeso", "Iron": "Hierro", "Cobalt": "Cobalto",
  "Nickel": "Níquel", "Copper": "Cobre", "Zinc": "Zinc",
  "Gallium": "Galio", "Germanium": "Germanio", "Arsenic": "Arsénico",
  "Selenium": "Selenio", "Bromine": "Bromo", "Krypton": "Kriptón",
  "Rubidium": "Rubidio", "Strontium": "Estroncio", "Yttrium": "Itrio",
  "Zirconium": "Circonio", "Niobium": "Niobio", "Molybdenum": "Molibdeno",
  "Technetium": "Tecnecio", "Ruthenium": "Rutenio", "Rhodium": "Rodio",
  "Palladium": "Paladio", "Silver": "Plata", "Cadmium": "Cadmio",
  "Indium": "Indio", "Tin": "Estaño", "Antimony": "Antimonio",
  "Tellurium": "Telurio", "Iodine": "Yodo", "Xenon": "Xenón",
  "Cesium": "Cesio", "Barium": "Bario", "Lanthanum": "Lantano",
  "Cerium": "Cerio", "Praseodymium": "Praseodimio", "Neodymium": "Neodimio",
  "Promethium": "Prometio", "Samarium": "Samario", "Europium": "Europio",
  "Gadolinium": "Gadolinio", "Terbium": "Terbio", "Dysprosium": "Disprosio",
  "Holmium": "Holmio", "Erbium": "Erbio", "Thulium": "Tulio",
  "Ytterbium": "Iterbio", "Lutetium": "Lutecio", "Hafnium": "Hafnio",
  "Tantalum": "Tántalo", "Tungsten": "Wolframio", "Rhenium": "Renio",
  "Osmium": "Osmio", "Iridium": "Iridio", "Platinum": "Platino",
  "Gold": "Oro", "Mercury": "Mercurio", "Thallium": "Talio",
  "Lead": "Plomo", "Bismuth": "Bismuto", "Polonium": "Polonio",
  "Astatine": "Ástato", "Radon": "Radón", "Francium": "Francio",
  "Radium": "Radio", "Actinium": "Actinio", "Thorium": "Torio",
  "Protactinium": "Protactinio", "Uranium": "Uranio", "Neptunium": "Neptunio",
  "Plutonium": "Plutonio", "Americium": "Americio", "Curium": "Curio",
  "Berkelium": "Berkelio", "Californium": "Californio", "Einsteinium": "Einstenio",
  "Fermium": "Fermio", "Mendelevium": "Mendelevio", "Nobelium": "Nobelio",
  "Lawrencium": "Laurencio", "Rutherfordium": "Rutherfordio", "Dubnium": "Dubnio",
  "Seaborgium": "Seaborgio", "Bohrium": "Bohrio", "Hassium": "Hasio",
  "Meitnerium": "Meitnerio", "Darmstadtium": "Darmstadtio", "Roentgenium": "Roentgenio",
  "Copernicium": "Copernicio", "Nihonium": "Nihonio", "Flerovium": "Flerovio",
  "Moscovium": "Moscovio", "Livermorium": "Livermorio", "Tennessine": "Teneso",
  "Oganesson": "Oganesón", "Ununennium": "Ununenio",
};

function getColor(category: string): string {
  return CATEGORY_COLORS[category] ?? "#cbd5e1";
}

/** Nombre accesible de una celda: «Hidrógeno, número 1, No metal diatómico». */
function cellLabel(el: Element): string {
  const nombre = NAME_ES[el.name] ?? el.name;
  const cat = CATEGORY_ES[el.category] ?? el.category;
  return `${nombre}, número ${el.number}, ${cat}`;
}

// La glifo de cada celda va en texto oscuro fijo para contrastar sobre el color
// de categoría (contenido, no chrome) en cualquier tema de la app.
const CELL_INK = "#1a1a1a";

type DetailPanelProps = {
  el: Element;
  onClose: () => void;
};

function DetailPanel({ el, onClose }: DetailPanelProps) {
  const { t } = useI18n();
  const titleId = useId();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--c-text)_45%,transparent)]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="bg-[var(--c-surface)] rounded-xl shadow-2xl p-6 max-w-sm w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl font-bold"
              style={{ backgroundColor: getColor(el.category), color: CELL_INK }}
            >
              {el.symbol}
            </div>
            <div>
              <div id={titleId} className="text-xl font-bold text-[var(--c-text)]">{NAME_ES[el.name] ?? el.name}</div>
              <div className="text-sm text-[var(--c-muted)]">#{el.number}</div>
            </div>
          </div>
          <button
            type="button"
            aria-label={t("tablaPeriodica.cerrarDetalleDelElemento")}
            className="text-[var(--c-text-3)] hover:text-[var(--c-text)] text-lg leading-none px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded-sm"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <dl className="space-y-1.5 text-sm">
          <div className="flex justify-between">
            <dt className="text-[var(--c-muted)]">{t("tablaPeriodica.masaAtomica")}</dt>
            <dd className="font-medium text-[var(--c-text)]">{el.atomic_mass}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[var(--c-muted)]">{t("modulosList.categoria")}</dt>
            <dd className="font-medium text-[var(--c-text)]">{CATEGORY_ES[el.category] ?? el.category}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[var(--c-muted)]">{t("tablaPeriodica.fase")}</dt>
            <dd className="font-medium text-[var(--c-text)]">{PHASE_ES[el.phase] ?? el.phase}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[var(--c-muted)]">{t("theorySlideEditor.electronegatividad")}</dt>
            <dd className="font-medium text-[var(--c-text)]">{el.electronegativity_pauling ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-[var(--c-muted)] mb-0.5">{t("tablaPeriodica.configuracionElectronica")}</dt>
            <dd className="font-mono text-xs bg-[var(--c-surface-3)] text-[var(--c-text)] px-2 py-1 rounded break-all">
              {el.electron_configuration}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default function TablaPeriodica() {
  const { t } = useI18n();
  const [elements, setElements] = useState<Element[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState<Element | null>(null);

  useEffect(() => {
    fetch("/api/herramientas/tabla-periodica")
      .then((r) => {
        if (!r.ok) throw new Error("fetch error");
        return r.json();
      })
      .then((data: Element[]) => {
        setElements(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="py-8 text-center text-sm text-[var(--c-muted)]" role="status">{t("tablaPeriodica.cargandoTablaPeriodica")}</div>;
  }
  if (error) {
    return <div className="py-8 text-center text-sm text-[var(--c-danger)]" role="alert">{t("tablaPeriodica.errorAlCargarLaTabla")}</div>;
  }

  // Main table: ypos 1–7, lanthanides at ypos 8, actinides at ypos 9
  const mainElements = elements.filter((e) => e.ypos <= 7);
  const lanthanides = elements.filter((e) => e.ypos === 8);
  const actinides = elements.filter((e) => e.ypos === 9);

  const CELL_SIZE = 40;
  const GAP = 2;

  const cellStyle = (el: Element) => ({
    gridColumn: el.xpos,
    gridRow: el.ypos,
  });

  // Categorías únicas presentes (para la leyenda, sin duplicar "Desconocido").
  const legendCats = Array.from(
    new Map(
      Object.entries(CATEGORY_COLORS).map(([cat, color]) => [CATEGORY_ES[cat] ?? cat, color]),
    ).entries(),
  ).slice(0, 10);

  return (
    <div className="max-w-full overflow-x-auto">
      {selected && <DetailPanel el={selected} onClose={() => setSelected(null)} />}

      {/* Legend */}
      <ul className="flex flex-wrap gap-x-3 gap-y-1.5 mb-3 list-none p-0 m-0" aria-label={t("tablaPeriodica.leyendaDeCategorias")}>
        {legendCats.map(([label, color]) => (
          <li key={label} className="flex items-center gap-1 text-[10px] text-[var(--c-muted)]">
            <span className="inline-block w-2.5 h-2.5 rounded-sm flex-shrink-0 border border-[var(--c-border)]" style={{ backgroundColor: color }} aria-hidden="true" />
            <span>{label}</span>
          </li>
        ))}
      </ul>

      {/* Main grid */}
      <div
        className="inline-grid"
        role="grid"
        aria-label={t("tablaPeriodica.tablaPeriodicaDeLosElementos")}
        style={{
          gridTemplateColumns: `repeat(18, ${CELL_SIZE}px)`,
          gridTemplateRows: `repeat(7, ${CELL_SIZE}px)`,
          gap: `${GAP}px`,
          marginBottom: "16px",
        }}
      >
        {mainElements.map((el) => (
          <button
            key={el.number}
            type="button"
            aria-label={cellLabel(el)}
            style={{
              ...cellStyle(el),
              backgroundColor: getColor(el.category),
              color: CELL_INK,
            }}
            className="rounded flex flex-col items-center justify-center cursor-pointer hover:opacity-80 transition-opacity motion-reduce:transition-none border border-[var(--c-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
            onClick={() => setSelected(el)}
          >
            <span className="text-[8px] leading-none opacity-70">{el.number}</span>
            <span className="text-xs font-bold leading-tight">{el.symbol}</span>
          </button>
        ))}
      </div>

      {/* Lanthanides row */}
      <div className="flex gap-0.5 mb-1 ml-2">
        <span className="text-[10px] text-[var(--c-muted)] w-14 self-center">{t("tablaPeriodica.lantanidos")}</span>
        {lanthanides.map((el) => (
          <button
            key={el.number}
            type="button"
            aria-label={cellLabel(el)}
            style={{ width: CELL_SIZE, height: CELL_SIZE, backgroundColor: getColor(el.category), color: CELL_INK }}
            className="rounded flex flex-col items-center justify-center cursor-pointer hover:opacity-80 transition-opacity motion-reduce:transition-none border border-[var(--c-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
            onClick={() => setSelected(el)}
          >
            <span className="text-[8px] leading-none opacity-70">{el.number}</span>
            <span className="text-xs font-bold leading-tight">{el.symbol}</span>
          </button>
        ))}
      </div>

      {/* Actinides row */}
      <div className="flex gap-0.5 ml-2">
        <span className="text-[10px] text-[var(--c-muted)] w-14 self-center">{t("tablaPeriodica.actinidos")}</span>
        {actinides.map((el) => (
          <button
            key={el.number}
            type="button"
            aria-label={cellLabel(el)}
            style={{ width: CELL_SIZE, height: CELL_SIZE, backgroundColor: getColor(el.category), color: CELL_INK }}
            className="rounded flex flex-col items-center justify-center cursor-pointer hover:opacity-80 transition-opacity motion-reduce:transition-none border border-[var(--c-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)]"
            onClick={() => setSelected(el)}
          >
            <span className="text-[8px] leading-none opacity-70">{el.number}</span>
            <span className="text-xs font-bold leading-tight">{el.symbol}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
