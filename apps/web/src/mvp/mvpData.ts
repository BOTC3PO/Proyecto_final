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
