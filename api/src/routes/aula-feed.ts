import { Router } from "express";
import { requireUser } from "../lib/user-auth";

export const aulaFeed = Router();

const publicaciones = [
  {
    id: "pub-001",
    authorInitials: "JP",
    title: "Nuevo módulo disponible: Multiplicación",
    body:
      "Se ha desbloqueado el módulo de multiplicación para los estudiantes que completaron “Sumas Avanzadas”. Incluye ejercicios interactivos y práctica guiada.",
    links: [
      { label: "Ver módulo", href: "#" },
      { label: "Iniciar práctica", href: "#" }
    ],
    publishedAtLabel: "Publicado ayer"
  },
  {
    id: "pub-002",
    authorInitials: "JP",
    title: "Recordatorio de evaluación",
    body:
      "El viernes tendremos la evaluación de sumas avanzadas. Revisen el material y completen las actividades pendientes.",
    publishedAtLabel: "Publicado hoy"
  }
];

const leaderboard = [
  { id: "lb-1", name: "Ana García", points: 980 },
  { id: "lb-2", name: "Carlos Ruiz", points: 850 },
  { id: "lb-3", name: "María Torres", points: 720 }
];

const upcomingActivities = [
  { id: "act-1", label: "Evaluación Sumas Avanzadas", when: "Mañana" },
  { id: "act-2", label: "Modo Aventura", when: "Viernes" },
  { id: "act-3", label: "Actividad de repaso", when: "Lunes" }
];

aulaFeed.get("/api/aula/publicaciones", requireUser, (_req, res) => {
  res.json({ items: publicaciones });
});

aulaFeed.get("/api/aula/leaderboard", requireUser, (_req, res) => {
  res.json({ items: leaderboard });
});

aulaFeed.get("/api/aula/actividades", requireUser, (_req, res) => {
  res.json({ items: upcomingActivities });
});
