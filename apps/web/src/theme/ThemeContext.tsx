import { createContext, useContext, useEffect, useState,
  type ReactNode } from "react";
import { useAuth } from "../auth/use-auth";
import { usePrimaryRole } from "../auth/use-roles";
import { fetchMisItems } from "../services/tienda";
import { SupernovaParticles } from "./SupernovaParticles";

export type ThemeId =
  | "tiza" | "tiza-dark" | "pizarra"
  | "clasico" | "clasico-vb" | "aurora" | "nocturno" | "nocturno-vb"
  | "vibrante" | "bosque" | "minimal" | "minimal-v2"
  | "vb2"
  | "obsidian" | "sakura" | "carbon" | "arctic" | "lava" | "emerald" | "dusk"
  | "galaxy" | "sunset" | "ocean" | "candy" | "neon"
  | "aurora-boreal" | "cosmos" | "magma"
  | "dorado" | "supernova" | "retro" | "argentina"
  // "Papel a través de la historia" — colección gratuita, una era por tema.
  | "papiro" | "pergamino" | "papel-arroz" | "incunable" | "papel-periodico" | "papel-digital"
  | "admin";

export type ThemeOption = {
  id: ThemeId;
  name: string;
  animated: boolean;
  price: number;
};

export const THEME_OPTIONS: ThemeOption[] = [
  // Gratuitos
  { id: "tiza",          name: "Tiza",          animated: false, price: 0   },
  { id: "tiza-dark",     name: "Tiza Oscuro",   animated: false, price: 0   },
  { id: "pizarra",       name: "Pizarra",       animated: false, price: 0   },
  { id: "vb2",          name: "VB2 — Oficial",  animated: true,  price: 0   },
  { id: "clasico",       name: "Clásico",       animated: false, price: 0   },
  { id: "clasico-vb",    name: "Clásico VB",    animated: false, price: 0   },
  { id: "nocturno",      name: "Nocturno",      animated: false, price: 0   },
  { id: "nocturno-vb",   name: "Nocturno VB",   animated: false, price: 0   },
  { id: "minimal",       name: "Minimal",       animated: false, price: 0   },
  { id: "minimal-v2",    name: "Minimal V2",    animated: false, price: 0   },
  // "Papel a través de la historia" — colección gratuita
  { id: "papiro",           name: "Papiro",           animated: false, price: 0 },
  { id: "pergamino",        name: "Pergamino",        animated: false, price: 0 },
  { id: "papel-arroz",      name: "Papel de Arroz",   animated: false, price: 0 },
  { id: "incunable",        name: "Incunable",        animated: false, price: 0 },
  { id: "papel-periodico",  name: "Papel Periódico",  animated: false, price: 0 },
  { id: "papel-digital",    name: "Papel Digital",    animated: false, price: 0 },
  // Estáticos de pago
  { id: "aurora",        name: "Aurora",        animated: false, price: 40  },
  { id: "bosque",        name: "Bosque",        animated: false, price: 40  },
  { id: "vibrante",      name: "Vibrante",      animated: false, price: 65  },
  { id: "obsidian",      name: "Obsidian",      animated: false, price: 50  },
  { id: "sakura",        name: "Sakura",        animated: false, price: 55  },
  { id: "carbon",        name: "Carbon",        animated: false, price: 50  },
  { id: "arctic",        name: "Arctic",        animated: false, price: 45  },
  { id: "lava",          name: "Lava",          animated: false, price: 60  },
  { id: "emerald",       name: "Emerald",       animated: false, price: 45  },
  { id: "dusk",          name: "Dusk",          animated: false, price: 55  },
  // Animados
  { id: "galaxy",        name: "Galaxy",        animated: true,  price: 80  },
  { id: "sunset",        name: "Sunset",        animated: true,  price: 80  },
  { id: "ocean",         name: "Ocean",         animated: true,  price: 80  },
  { id: "candy",         name: "Candy",         animated: true,  price: 90  },
  { id: "neon",          name: "Neon",          animated: true,  price: 100 },
  // Legendarios
  { id: "aurora-boreal", name: "Aurora Boreal", animated: true,  price: 250 },
  { id: "cosmos",        name: "Cosmos",        animated: true,  price: 300 },
  { id: "magma",         name: "Magma",         animated: true,  price: 280 },
  { id: "dorado",       name: "Dorado",        animated: true,  price: 500 },
  { id: "supernova",    name: "Supernova",     animated: true,  price: 600 },
  { id: "retro",        name: "Retro Arcade",  animated: true,  price: 320 },
  { id: "argentina",    name: "Argentina",     animated: true,  price: 260 },
];

// Temas disponibles por rol
export const THEMES_BY_ROLE: Record<string, ThemeId[]> = {
  USER: [
    // Gratuitos (default: tiza)
    "tiza", "tiza-dark", "pizarra", "nocturno-vb", "vb2", "nocturno", "clasico", "clasico-vb", "minimal", "minimal-v2",
    // Papel a través de la historia
    "papiro", "pergamino", "papel-arroz", "incunable", "papel-periodico", "papel-digital",
    // Estáticos de pago
    "aurora", "bosque", "vibrante",
    "obsidian", "sakura", "carbon", "arctic", "lava", "emerald", "dusk",
    // Animados
    "galaxy", "sunset", "ocean", "candy", "neon",
    // Legendarios
    "aurora-boreal", "cosmos", "magma",
    "dorado", "supernova", "retro", "argentina",
  ],
  TEACHER: [
    "tiza",
    "tiza-dark",
    "pizarra",
    "clasico-vb",
    "clasico",
    "minimal",
    "minimal-v2",
    "aurora",
    "bosque",
    "papiro", "pergamino", "papel-arroz", "incunable", "papel-periodico", "papel-digital",
  ],
  DIRECTIVO: [
    "tiza",
    "tiza-dark",
    "pizarra",
    "clasico-vb",
    "clasico",
    "minimal",
    "minimal-v2",
    "aurora",
    "bosque",
    "papiro", "pergamino", "papel-arroz", "incunable", "papel-periodico", "papel-digital",
  ],
  ADMIN: [
    "admin",
    "tiza", "tiza-dark", "pizarra", "clasico-vb", "clasico", "minimal", "minimal-v2", "vb2",
    "papiro", "pergamino", "papel-arroz", "incunable", "papel-periodico", "papel-digital",
    "aurora", "bosque", "vibrante",
    "obsidian", "sakura", "carbon", "arctic", "lava", "emerald", "dusk",
    "galaxy", "sunset", "ocean", "candy", "neon",
    "aurora-boreal", "cosmos", "magma", "dorado", "supernova", "retro", "argentina",
  ],
  GUEST:     ["tiza"],
};

const STORAGE_KEY = "vb-theme";

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
  availableThemes: ThemeOption[];
  isThemeOwned: (id: ThemeId) => boolean;
  markThemeOwned: (id: ThemeId, activate?: boolean) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "tiza",
  setTheme: () => {},
  availableThemes: [],
  isThemeOwned: () => false,
  markThemeOwned: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  // MULTIROL-02: el set de temas se elige por rol principal. Un
  // ADMIN+TEACHER ve el set de ADMIN (que es super-set del de TEACHER).
  const primary = usePrimaryRole();
  const role = primary ?? (user?.role ?? "GUEST");

  const allowed = THEMES_BY_ROLE[role] ?? ["clasico"];

  const forceTheme = null;

  const [theme, setThemeState] = useState<ThemeId>(() => {
    if (forceTheme) return forceTheme;
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeId;
      if (stored && allowed.includes(stored)) return stored;
    } catch { /* ignore */ }
    return allowed[0] ?? "tiza";
  });

  // FIX-TEMAS-SIN-COMPRAR — `setTheme` sólo validaba `allowed` (el set
  // por ROL, THEMES_BY_ROLE), nunca si el usuario había comprado el
  // tema. TiendaTemas.tsx armaba su propio gate de compra a mano (UI),
  // pero Perfil.tsx tiene su propio selector que llama `setTheme`
  // directo — sin ese gate, cualquier tema de pago quedaba
  // "activable" gratis desde el perfil. Se mueve la verificación de
  // dueño acá (única fuente de la verdad para CUALQUIER selector,
  // presente o futuro), usando el mismo endpoint autoritativo del
  // back (`/api/tienda/mis-items`) que ya consumía TiendaTemas.tsx.
  // `null` = todavía no cargó la lista de compras: mientras tanto no
  // se considera dueño de ningún tema de pago (fail-closed).
  const [ownedThemeIds, setOwnedThemeIds] = useState<string[] | null>(null);

  useEffect(() => {
    if (!user?.id) { setOwnedThemeIds([]); return; }
    let active = true;
    fetchMisItems()
      .then((items) => {
        if (!active) return;
        const owned = items
          .filter((i) => i.tipo === "tema")
          .map((i) => {
            const raw = i.asset_id ?? i.item_id;
            return raw.startsWith("tema-") ? raw.slice(5) : raw;
          });
        setOwnedThemeIds(owned);
      })
      .catch(() => { if (active) setOwnedThemeIds([]); });
    return () => { active = false; };
  }, [user?.id]);

  const isThemeOwned = (id: ThemeId): boolean => {
    const opt = THEME_OPTIONS.find((o) => o.id === id);
    // Temas fuera del catálogo de la tienda (ej. "admin", exclusivo de
    // rol) no se compran — no corresponde bloquearlos acá.
    if (!opt) return true;
    if (opt.price === 0) return true;
    return ownedThemeIds !== null && ownedThemeIds.includes(id);
  };

  useEffect(() => {
    const handler = () => {
      setThemeState('tiza');
      document.documentElement.setAttribute('data-theme', 'tiza');
    };
    window.addEventListener('vb:logout', handler);
    return () => window.removeEventListener('vb:logout', handler);
  }, []);

  // Corrige un tema ya activo (guardado en localStorage antes de este
  // fix) que resulte no comprado una vez que la lista de compras
  // terminó de cargar — cierra el hueco para sesiones que ya se
  // habían "colado" un tema de pago sin pasar por la tienda.
  useEffect(() => {
    if (ownedThemeIds === null) return;
    if (isThemeOwned(theme)) return;
    setThemeState(allowed[0] ?? "tiza");
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ownedThemeIds]);

  const setTheme = (id: ThemeId) => {
    if (forceTheme) return;
    if (!allowed.includes(id)) return;
    if (!isThemeOwned(id)) return;
    setThemeState(id);
    try { localStorage.setItem(STORAGE_KEY, id); } catch { /* ignore */ }
  };

  // Actualización optimista tras una compra: `ownedThemeIds` sólo se
  // carga una vez al montar (fetchMisItems), así que un `setTheme(id)`
  // llamado justo después de comprar fallaba en silencio (su gate
  // `isThemeOwned` todavía veía la lista vieja, de antes de la compra).
  // `activate` hace las dos cosas en un mismo call — separarlas en
  // `markThemeOwned(id)` + `setTheme(id)` no alcanza: el `setState` de
  // arriba no se refleja en el closure de `isThemeOwned` hasta el
  // próximo render.
  const markThemeOwned = (id: ThemeId, activate = false) => {
    setOwnedThemeIds((prev) => [...new Set([...(prev ?? []), id])]);
    if (activate && !forceTheme && allowed.includes(id)) {
      setThemeState(id);
      try { localStorage.setItem(STORAGE_KEY, id); } catch { /* ignore */ }
    }
  };

  // Aplicar data-theme al <html>
  useEffect(() => {
    const t = forceTheme ?? theme;
    document.documentElement.setAttribute("data-theme", t);
    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, [theme, forceTheme]);

  const availableThemes = THEME_OPTIONS.filter((o) =>
    allowed.includes(o.id)
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, availableThemes, isThemeOwned, markThemeOwned }}>
      {theme === "supernova" && <SupernovaParticles />}
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
