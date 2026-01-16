export type ModuleVisibility = "publico" | "privado" | "escuela";

export type ModuleResource =
  | { type: "book"; id: string; title?: string }
  | { type: "pdf"; title: string; url: string }
  | { type: "link"; title: string; url: string };

export type ModuleGeneratorRef = {
  id: string;
  config?: Record<string, unknown>;
};

export type Module = {
  id: string;
  aulaId?: string;
  title: string;
  description: string;
  subject: string;
  category: string;
  level: string;
  durationMinutes: number;
  visibility: ModuleVisibility;
  dependencies: string[];
  generatorRef?: ModuleGeneratorRef | null;
  resources?: ModuleResource[];
  createdBy: string;
  updatedAt: string;
};
