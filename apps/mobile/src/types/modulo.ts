/**
 * PLAN-R Parte 2 — copiado (mismo criterio que types/auth.ts y
 * types/dashboard.ts: sin workspace compartido hoy).
 * Origen: `apps/web/src/domain/module/module.types.ts` +
 * `apps/web/src/pages/modulos/{ModulosList,ModuloDetail}.tsx` +
 * `apps/web/src/components/modulos/TheoryItemCard.tsx`.
 */
export type Modulo = {
  id: string;
  title: string;
  description?: string;
  subject?: string | null;
  level?: string | null;
  category?: string;
  durationMinutes?: number;
  visibility?: "publico" | "privado" | "escuela";
  createdBy?: string;
};

export type TheoryItem = {
  id: string;
  title: string;
  type: string;
  detail: string;
};

export type ModuloQuizResumen = {
  id: string;
  title: string;
  type?: "practica" | "formal" | "competencia";
  status?: "draft" | "published" | "archived";
};

export type ModuloDetalle = Modulo & {
  theoryItems?: TheoryItem[];
  quizzes?: ModuloQuizResumen[];
};
