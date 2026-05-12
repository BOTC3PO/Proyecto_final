import { createContext, useContext, useEffect, useState,
  type ReactNode } from "react";
import { useAuth } from "../auth/use-auth";

export type ThemeId =
  | "clasico" | "clasico-vb" | "aurora" | "nocturno" | "nocturno-vb"
  | "vibrante" | "bosque" | "minimal"
  | "galaxy" | "sunset" | "ocean" | "candy" | "neon"
  | "admin";

export type ThemeOption = {
  id: ThemeId;
  name: string;
  animated: boolean;
  price: number;
};

export const THEME_OPTIONS: ThemeOption[] = [
  { id: "clasico",     name: "Clásico",     animated: false, price: 0   },
  { id: "clasico-vb",  name: "Clásico VB",  animated: false, price: 0   },
  { id: "aurora",      name: "Aurora",      animated: false, price: 40  },
  { id: "nocturno",    name: "Nocturno",    animated: false, price: 0   },
  { id: "nocturno-vb", name: "Nocturno VB", animated: false, price: 0   },
  { id: "vibrante",    name: "Vibrante",    animated: false, price: 65  },
  { id: "bosque",      name: "Bosque",      animated: false, price: 40  },
  { id: "minimal",     name: "Minimal",     animated: false, price: 0   },
  { id: "galaxy",      name: "Galaxy",      animated: true,  price: 80  },
  { id: "sunset",      name: "Sunset",      animated: true,  price: 80  },
  { id: "ocean",       name: "Ocean",       animated: true,  price: 80  },
  { id: "candy",       name: "Candy",       animated: true,  price: 90  },
  { id: "neon",        name: "Neon",        animated: true,  price: 100 },
];

// Temas disponibles por rol
export const THEMES_BY_ROLE: Record<string, ThemeId[]> = {
  USER: [
    "nocturno-vb",
    "nocturno", "galaxy", "sunset", "ocean", "candy", "neon",
    "clasico", "clasico-vb", "aurora", "vibrante", "bosque", "minimal",
  ],
  TEACHER: [
    "clasico-vb",
    "clasico",
    "minimal",
    "aurora",
    "bosque",
  ],
  DIRECTIVO: [
    "clasico-vb",
    "clasico",
    "minimal",
    "aurora",
    "bosque",
  ],
  ADMIN: ["admin", "clasico-vb", "clasico", "minimal"],
  GUEST:     ["clasico"],
};

const STORAGE_KEY = "vb-theme";

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
  availableThemes: ThemeOption[];
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "clasico",
  setTheme: () => {},
  availableThemes: [],
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const role = user?.role ?? "GUEST";

  const allowed = THEMES_BY_ROLE[role] ?? ["clasico"];

  const forceTheme = null;

  const [theme, setThemeState] = useState<ThemeId>(() => {
    if (forceTheme) return forceTheme;
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeId;
      if (stored && allowed.includes(stored)) return stored;
    } catch { /* ignore */ }
    return allowed[0] ?? "clasico";
  });

  const setTheme = (id: ThemeId) => {
    if (forceTheme) return;
    if (!allowed.includes(id)) return;
    setThemeState(id);
    try { localStorage.setItem(STORAGE_KEY, id); } catch { /* ignore */ }
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
    <ThemeContext.Provider value={{ theme, setTheme, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
