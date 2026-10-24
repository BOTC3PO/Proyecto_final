export type ModuleSummary = {
  id: string;
  title: string;
  description: string;
  level: "Básico" | "Intermedio" | "Avanzado";
  durationMinutes: number;
  progressPercent?: number;
  category: string;
};

export type Publication = {
  id: string;
  authorInitials: string;
  title: string;
  body: string;
  links?: { label: string; href: string }[];
  publishedAtLabel: string;
};

export type UpcomingActivity = {
  id: string;
  label: string;
  when: string;
};

export type LeaderboardEntry = {
  id: string;
  name: string;
  points: number;
};

export const MVP_MODULES: ModuleSummary[] = [
  {
    id: "mod-001",
    title: "Sumas básicas",
    description: "Resolver sumas simples con apoyo visual.",
    level: "Básico",
    durationMinutes: 15,
    progressPercent: 90,
    category: "Aritmética",
  },
  {
    id: "mod-002",
    title: "Sumas avanzadas",
    description: "Sumas con llevadas y números de dos cifras.",
    level: "Intermedio",
    durationMinutes: 25,
    progressPercent: 40,
    category: "Aritmética",
  },
  {
    id: "mod-003",
    title: "Multiplicación",
    description: "Tablas y problemas aplicados en contexto.",
    level: "Intermedio",
    durationMinutes: 30,
    progressPercent: 0,
    category: "Aritmética",
  },
  {
    id: "mod-004",
    title: "Mapas físicos y políticos",
    description: "Identificación de ríos, cordilleras y fronteras.",
    level: "Básico",
    durationMinutes: 20,
    progressPercent: 0,
    category: "Geografía del Mundo",
  },
  {
    id: "mod-005",
    title: "Cartografía básica",
    description:
      "Latitud/longitud, escalas y comparación de proyecciones cartográficas.",
    level: "Básico",
    durationMinutes: 35,
    progressPercent: 0,
    category: "Cartografía básica",
  },
  {
    id: "mod-006",
    title: "Mapa climático",
    description: "Lectura de mapas climáticos y climogramas.",
    level: "Básico",
    durationMinutes: 30,
    progressPercent: 0,
    category: "Clima y ambiente",
  },
  {
    id: "mod-007",
    title: "Mapa de población",
    description: "Coropletas, densidad y flujos migratorios.",
    level: "Intermedio",
    durationMinutes: 35,
    progressPercent: 0,
    category: "Población y migraciones",
  },
  {
    id: "mod-008",
    title: "Mapa económico",
    description: "Mapas de actividades económicas y PIB.",
    level: "Intermedio",
    durationMinutes: 35,
    progressPercent: 0,
    category: "Economía y desarrollo",
  },
  {
    id: "mod-009",
    title: "Líneas de tiempo históricas",
    description:
      "Construcción de cronologías con hitos y periodizaciones clave.",
    level: "Básico",
    durationMinutes: 25,
    progressPercent: 0,
    category: "Historia y cronologías",
  },
  {
    id: "mod-010",
    title: "Mapas históricos",
    description:
      "Cambios territoriales, rutas y fronteras en distintas épocas.",
    level: "Intermedio",
    durationMinutes: 30,
    progressPercent: 0,
    category: "Historia y cartografía histórica",
  },
  {
    id: "mod-011",
    title: "Gráficos y datos históricos",
    description:
      "Lectura de gráficos sobre población, economía y eventos históricos.",
    level: "Intermedio",
    durationMinutes: 35,
    progressPercent: 0,
    category: "Historia y análisis de datos",
  },
  {
    id: "mod-012",
    title: "Organigramas y mapas conceptuales",
    description:
      "Estructuras de poder, instituciones y relaciones entre actores.",
    level: "Avanzado",
    durationMinutes: 40,
    progressPercent: 0,
    category: "Historia y organización social",
  },
  {
    id: "mod-013",
    title: "Recursos multimedia e interactivos",
    description:
      "Exploración de fuentes audiovisuales, museos virtuales y visitas guiadas.",
    level: "Básico",
    durationMinutes: 20,
    progressPercent: 0,
    category: "Historia y recursos digitales",
  },
];

export const MVP_PUBLICATIONS: Publication[] = [
  {
    id: "pub-001",
    authorInitials: "JP",
    title: "Nuevo módulo disponible: Multiplicación",
    body:
      "Se ha desbloqueado el módulo de multiplicación para los estudiantes que completaron “Sumas Avanzadas”. Incluye ejercicios interactivos y práctica guiada.",
    links: [
      { label: "Ver módulo", href: "#" },
      { label: "Iniciar práctica", href: "#" },
    ],
    publishedAtLabel: "Publicado ayer",
  },
  {
    id: "pub-002",
    authorInitials: "JP",
    title: "Recordatorio de evaluación",
    body:
      "El viernes tendremos la evaluación de sumas avanzadas. Revisen el material y completen las actividades pendientes.",
    publishedAtLabel: "Publicado hoy",
  },
];

export const MVP_LEADERBOARD: LeaderboardEntry[] = [
  { id: "lb-1", name: "Ana García", points: 980 },
  { id: "lb-2", name: "Carlos Ruiz", points: 850 },
  { id: "lb-3", name: "María Torres", points: 720 },
];

export const MVP_UPCOMING_ACTIVITIES: UpcomingActivity[] = [
  { id: "act-1", label: "Evaluación Sumas Avanzadas", when: "Mañana" },
  { id: "act-2", label: "Modo Aventura", when: "Viernes" },
  { id: "act-3", label: "Actividad de repaso", when: "Lunes" },
];

export const MVP_GENERATOR_CATEGORIES = [
  "Aprender los números",
  "Sumar",
  "Restar",
  "Multiplicar",
  "Dividir (enteros)",
  "Fracciones",
  "Gráficos básicos",
] as const;
