export type SubjectColor = {
  border: string;
  background: string;
  text: string;
};

const SUBJECT_COLOR_MAP: Record<string, SubjectColor> = {
  aritmetica: {
    border: "#2563eb",
    background: "#eff6ff",
    text: "#1e3a8a"
  },
  "geografia del mundo": {
    border: "#16a34a",
    background: "#ecfdf3",
    text: "#166534"
  },
  "cartografia basica": {
    border: "#0ea5e9",
    background: "#f0f9ff",
    text: "#075985"
  },
  "clima y ambiente": {
    border: "#059669",
    background: "#ecfdf5",
    text: "#065f46"
  },
  "poblacion y migraciones": {
    border: "#f97316",
    background: "#fff7ed",
    text: "#9a3412"
  },
  "economia y desarrollo": {
    border: "#14b8a6",
    background: "#f0fdfa",
    text: "#0f766e"
  },
  "historia y cronologias": {
    border: "#8b5cf6",
    background: "#f5f3ff",
    text: "#5b21b6"
  },
  "historia y cartografia historica": {
    border: "#f43f5e",
    background: "#fff1f2",
    text: "#9f1239"
  },
  "historia y analisis de datos": {
    border: "#6366f1",
    background: "#eef2ff",
    text: "#3730a3"
  },
  "historia y organizacion social": {
    border: "#a855f7",
    background: "#faf5ff",
    text: "#6b21a8"
  },
  "historia y recursos digitales": {
    border: "#ec4899",
    background: "#fdf2f8",
    text: "#9d174d"
  },
  "educacion financiera": {
    border: "#f59e0b",
    background: "#fffbeb",
    text: "#92400e"
  }
};

const DEFAULT_SUBJECT_COLOR: SubjectColor = {
  border: "#94a3b8",
  background: "#f8fafc",
  text: "#475569"
};

const normalizeSubject = (subject: string) =>
  subject
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export const getSubjectColor = (subject?: string | null): SubjectColor => {
  if (!subject) return DEFAULT_SUBJECT_COLOR;
  const key = normalizeSubject(subject);
  return SUBJECT_COLOR_MAP[key] ?? DEFAULT_SUBJECT_COLOR;
};
