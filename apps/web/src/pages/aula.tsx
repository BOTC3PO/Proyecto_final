import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { apiGet } from "../lib/api";
import type { Module } from "../domain/module/module.types";
import { useAuth } from "../auth/use-auth";
import type { Classroom } from "../domain/classroom/classroom.types";
import { getClassroomStatusLabel, normalizeClassroomStatus } from "../domain/classroom/classroom.types";
import { fetchClassroomDetail } from "../services/aulas";
import { createPublication, fetchPublications, type Publication } from "../services/publicaciones";
import { fetchLeaderboard, type LeaderboardEntry } from "../services/leaderboard";
import { fetchUpcomingActivities, type UpcomingActivity } from "../services/actividades";
import { fetchResourceLinks, type ResourceLink, type ResourceLinkType } from "../services/resource-links";
import {
  fetchSubastasActivas, fetchMisPujas, crearPuja,
  type ExamenSubasta, type PujaItem
} from "../services/subastas";

type ProgressItem = {
  moduloId: string;
  status: "iniciado" | "en_progreso" | "completado";
};

type ProgressUnlock = {
  moduloId: string;
  isLocked: boolean;
  missingDependencies: string[];
};

type ProgressResponse = {
  items: ProgressItem[];
  unlocks: ProgressUnlock[];
};

type ClassModuleProgress = {
  id: string;
  title: string;
  progressPercent: number;
  isLocked: boolean;
};

type ClassroomDetail = Classroom & {
  teacherName?: string;
  classCode?: string;
};

const AVATAR_COLORS = [
  "bg-blue-600", "bg-violet-600", "bg-emerald-600",
  "bg-amber-600", "bg-rose-600", "bg-cyan-600",
  "bg-indigo-600", "bg-teal-600",
];

function getAvatarColor(initials: string): string {
  let hash = 0;
  for (let i = 0; i < initials.length; i++) {
    hash = initials.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

export default function Aula() {
  const { user } = useAuth();
  const userInitials = user?.name
    ? user.name.split(" ").filter(Boolean).map((p) => p[0]).join("").slice(0, 2).toUpperCase()
    : "?";
  const { id: routeId } = useParams();
  const location = useLocation();
  const [classroom, setClassroom] = useState<ClassroomDetail | null>(null);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [upcomingActivities, setUpcomingActivities] = useState<UpcomingActivity[]>([]);
  const [feedLoading, setFeedLoading] = useState(true);
  const [feedError, setFeedError] = useState<string | null>(null);
  const [newPublication, setNewPublication] = useState("");
  const [publicationFiles, setPublicationFiles] = useState<File[]>([]);
  const [publicationStatus, setPublicationStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [publicationMessage, setPublicationMessage] = useState<string | null>(null);
  const [classProgress, setClassProgress] = useState<ClassModuleProgress[]>([]);
  const [progressLoading, setProgressLoading] = useState(true);
  const [progressError, setProgressError] = useState<string | null>(null);
  const [resourceLinks, setResourceLinks] = useState<ResourceLink[]>([]);
  const [resourceLinksLoading, setResourceLinksLoading] = useState(true);
  const [resourceLinksError, setResourceLinksError] = useState<string | null>(null);
  const [subastas, setSubastas] = useState<ExamenSubasta[]>([]);
  const [misPujas, setMisPujas] = useState<Record<string, PujaItem[]>>({});
  const [pujaForm, setPujaForm] =
    useState<Record<string, { puntos: number; montoPorPunto: number }>>({});
  const [pujaStatus, setPujaStatus] =
    useState<Record<string, "idle" | "loading" | "error">>({});

  const normalizedStatus = useMemo(
    () => normalizeClassroomStatus(classroom?.status ?? null),
    [classroom?.status]
  );
  const isClassroomReadOnly = normalizedStatus === "ARCHIVED" || normalizedStatus === "LOCKED";
  const isClassroomActive = normalizedStatus === "ACTIVE";

  const classroomId = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return routeId ?? params.get("id") ?? params.get("aulaId") ?? params.get("classroomId");
  }, [location.search, routeId]);

  useEffect(() => {
    if (!classroomId) return;
    let active = true;
    fetchClassroomDetail(classroomId)
      .then((data) => { if (!active) return; setClassroom(data); })
      .catch(() => { if (!active) return; setClassroom(null); });
    return () => { active = false; };
  }, [classroomId]);

  const loadFeed = async (active: { current: boolean }) => {
    setFeedLoading(true);
    setFeedError(null);
    try {
      const [publicationsResponse, leaderboardResponse, activitiesResponse] = await Promise.all([
        fetchPublications(classroomId ?? undefined),
        fetchLeaderboard(classroomId ?? undefined),
        fetchUpcomingActivities(classroomId ?? undefined),
      ]);
      if (!active.current) return;
      setPublications(publicationsResponse);
      setLeaderboard(leaderboardResponse);
      setUpcomingActivities(activitiesResponse);
    } catch (error) {
      if (!active.current) return;
      setFeedError(error instanceof Error ? error.message : "No pudimos cargar la información del aula.");
    } finally {
      if (!active.current) return;
      setFeedLoading(false);
    }
  };

  useEffect(() => {
    const activeRef = { current: true };
    loadFeed(activeRef);
    return () => { activeRef.current = false; };
  }, [classroomId]);

  const handleFilesChange = (files: FileList | null) => {
    setPublicationFiles(files ? Array.from(files) : []);
  };

  const handleSubmitPublication = async () => {
    if (!classroomId) { setPublicationStatus("error"); setPublicationMessage("No pudimos identificar el aula."); return; }
    if (!newPublication.trim()) { setPublicationStatus("error"); setPublicationMessage("Escribe una novedad antes de publicar."); return; }
    if (isClassroomReadOnly) { setPublicationStatus("error"); setPublicationMessage("El aula está en modo solo lectura."); return; }
    setPublicationStatus("submitting");
    setPublicationMessage(null);
    try {
      const initials = user?.name
        ? user.name.split(" ").filter(Boolean).map((part) => part[0]).join("").slice(0, 2).toUpperCase()
        : "AA";
      await createPublication(classroomId, {
        contenido: newPublication.trim(),
        authorInitials: initials,
        title: "Nueva publicación",
        archivos: publicationFiles.map((file) => ({ name: file.name, size: file.size, type: file.type })),
      });
      setNewPublication("");
      setPublicationFiles([]);
      setPublicationStatus("idle");
      setPublicationMessage("Publicación creada.");
      const activeRef = { current: true };
      await loadFeed(activeRef);
    } catch (error) {
      setPublicationStatus("error");
      setPublicationMessage(error instanceof Error ? error.message : "No pudimos publicar la novedad.");
    }
  };

  useEffect(() => {
    let active = true;
    const usuarioId = user?.id ?? "demo-alumno";
    setProgressLoading(true);
    setProgressError(null);
    const params = new URLSearchParams({ usuarioId });
    if (classroomId) params.set("aulaId", classroomId);
    const modulesUrl = classroomId ? `/api/modulos?aulaId=${encodeURIComponent(classroomId)}` : "/api/modulos";
    Promise.all([apiGet<{ items: Module[] }>(modulesUrl), apiGet<ProgressResponse>(`/api/progreso?${params.toString()}`)])
      .then(([modulesResponse, progressResponse]) => {
        if (!active) return;
        const completedSet = new Set(progressResponse.items.filter((i) => i.status === "completado").map((i) => i.moduloId));
        const inProgressSet = new Set(progressResponse.items.filter((i) => i.status === "en_progreso").map((i) => i.moduloId));
        const lockMap = new Map(progressResponse.unlocks.map((u) => [u.moduloId, u.isLocked]));
        setClassProgress(modulesResponse.items.map((m) => ({
          id: m.id, title: m.title,
          isLocked: lockMap.get(m.id) ?? false,
          progressPercent: completedSet.has(m.id) ? 100 : inProgressSet.has(m.id) ? 50 : 0,
        })));
      })
      .catch((error) => {
        if (!active) return;
        setProgressError(error instanceof Error ? error.message : "No pudimos cargar el progreso del aula.");
        setClassProgress([]);
      })
      .finally(() => { if (!active) return; setProgressLoading(false); });
    return () => { active = false; };
  }, [classroomId, user?.id]);

  useEffect(() => {
    if (!classroomId || !user?.id) return;
    let active = true;
    fetchSubastasActivas(classroomId)
      .then(async (items) => {
        if (!active) return;
        setSubastas(items);
        const pujaMap: Record<string, PujaItem[]> = {};
        await Promise.all(items.map(async (e) => { pujaMap[e.id] = await fetchMisPujas(e.id, user.id); }));
        if (!active) return;
        setMisPujas(pujaMap);
      })
      .catch(() => {});
    return () => { active = false; };
  }, [classroomId, user?.id]);

  useEffect(() => {
    if (!classroomId) return;
    let active = true;
    setResourceLinksLoading(true);
    setResourceLinksError(null);
    fetchResourceLinks(classroomId)
      .then((response) => { if (!active) return; setResourceLinks(response.items); })
      .catch((error) => {
        if (!active) return;
        setResourceLinks([]);
        setResourceLinksError(error instanceof Error ? error.message : "No pudimos cargar los enlaces.");
      })
      .finally(() => { if (!active) return; setResourceLinksLoading(false); });
    return () => { active = false; };
  }, [classroomId]);

  const isTeacherOfClass = useMemo(() => {
    if (!user || !classroom || user.role !== "TEACHER") return false;
    return true;
  }, [classroom, user]);

  const roleLabel = useMemo(() => {
    if (!user) return "Invitado";
    if (user.role === "TEACHER") return isTeacherOfClass ? "Docente" : "Docente invitado";
    if (user.role === "USER") return "Estudiante";
    if (user.role === "PARENT") return "Familia";
    return "Invitado";
  }, [isTeacherOfClass, user]);

  const accessLabel = useMemo(() => {
    const accessTypeLabel = classroom?.accessType === "privada" ? "privada" : "pública";
    if (user?.role === "USER") return `estudiante · ${accessTypeLabel}`;
    if (user?.role === "PARENT") return `familiar · ${accessTypeLabel}`;
    return `visitante · ${accessTypeLabel}`;
  }, [classroom?.accessType, user]);

  const teacherName = useMemo(() => {
    if (classroom?.teacherName) return classroom.teacherName;
    if (isTeacherOfClass) return user?.name ?? "Docente asignado";
    return "Docente asignado";
  }, [classroom?.teacherName, isTeacherOfClass, user?.name]);

  const classCode = useMemo(() => {
    if (!isClassroomActive) return "No disponible";
    if (classroom?.classCode) return classroom.classCode;
    if (classroom?.id) return classroom.id;
    return "Sin código";
  }, [classroom?.classCode, classroom?.id, isClassroomActive]);

  const getResourceTypeMeta = (type: ResourceLinkType) => {
    switch (type) {
      case "drive": return { label: "Drive", badge: "bg-emerald-100 text-emerald-700" };
      case "youtube": return { label: "YouTube", badge: "bg-red-100 text-red-700" };
      default: return { label: "Externo", badge: "bg-[var(--c-bg)] text-[var(--c-muted)]" };
    }
  };

  const handlePujar = async (examen: ExamenSubasta) => {
    if (!user?.id || !classroomId) return;
    const form = pujaForm[examen.id];
    if (!form?.puntos || !form?.montoPorPunto) return;
    setPujaStatus((prev) => ({ ...prev, [examen.id]: "loading" }));
    try {
      await crearPuja(examen.id, {
        usuarioId: user.id, aulaId: classroomId, schoolId: user.schoolId ?? "",
        puntos: form.puntos, montoPorPunto: form.montoPorPunto,
      });
      const updated = await fetchMisPujas(examen.id, user.id);
      setMisPujas((prev) => ({ ...prev, [examen.id]: updated }));
      setPujaStatus((prev) => ({ ...prev, [examen.id]: "idle" }));
    } catch {
      setPujaStatus((prev) => ({ ...prev, [examen.id]: "error" }));
    }
  };

  const getResourceDisplayUrl = (url: string) => {
    try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return url; }
  };

  const cardCls = "bg-[var(--c-surface)] rounded-xl border border-[var(--c-border)] p-4";
  const inputCls = "rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]";

  return (
    <main className="flex-1 bg-[var(--c-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Banner */}
        <div className="bg-[var(--c-primary)] text-white rounded-xl h-28 relative">
          <div className="absolute left-5 bottom-3 text-sm">
            {roleLabel} • {teacherName} | Código de clase: {classCode}
          </div>
          <span className="absolute left-5 top-3 rounded-full bg-white/20 px-3 py-1 text-xs uppercase tracking-wide">
            {getClassroomStatusLabel(classroom?.status)}
          </span>
          {user?.role === "TEACHER" ? (
            classroomId ? (
              <Link
                className="absolute right-5 bottom-3 bg-[var(--c-surface)] text-[var(--c-primary)] px-4 py-1.5 rounded-lg border border-[var(--c-border)] text-sm font-medium"
                to={`/profesor/aulas/${classroomId}/configuracion`}
              >
                Gestionar aula
              </Link>
            ) : (
              <span className="absolute right-5 bottom-3 rounded-lg bg-white/20 px-3 py-1.5 text-xs">
                Acceso {accessLabel}
              </span>
            )
          ) : (
            <div className="absolute right-5 bottom-3 rounded-lg bg-white/20 px-3 py-1.5 text-xs">
              Acceso {accessLabel}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-5">
            {/* Publication input */}
            <div className={cardCls}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full text-white grid place-content-center font-semibold text-sm select-none ${getAvatarColor(userInitials)}`}>
                  {userInitials}
                </div>
                <input
                  className={`flex-1 ${inputCls}`}
                  aria-label="Escribí una novedad"
                  placeholder="Escribe una novedad..."
                  value={newPublication}
                  onChange={(event) => setNewPublication(event.target.value)}
                  disabled={isClassroomReadOnly}
                />
                <button
                  className="ml-3 bg-[var(--c-primary)] text-white px-4 py-2 rounded-lg text-sm disabled:opacity-60"
                  onClick={handleSubmitPublication}
                  disabled={publicationStatus === "submitting" || isClassroomReadOnly}
                >
                  {publicationStatus === "submitting" ? "Publicando..." : "Publicar"}
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-3 text-[var(--c-muted)]">
                <label className="p-2 hover:bg-[var(--c-bg)] rounded cursor-pointer" htmlFor="aula-archivos">
                  <span aria-hidden="true">📎</span>
                  <span className="sr-only">Adjuntar archivo</span>
                </label>
                <label className="p-2 hover:bg-[var(--c-bg)] rounded cursor-pointer" htmlFor="aula-archivos">
                  <span aria-hidden="true">🖼️</span>
                  <span className="sr-only">Adjuntar imagen</span>
                </label>
                <input
                  id="aula-archivos" type="file" multiple className="hidden"
                  onChange={(event) => handleFilesChange(event.target.files)}
                  disabled={isClassroomReadOnly}
                />
                {publicationFiles.length > 0 && (
                  <span className="text-xs text-[var(--c-muted)]">{publicationFiles.length} archivo(s) adjunto(s)</span>
                )}
              </div>
              {isClassroomReadOnly && (
                <p className="mt-3 text-xs text-amber-600">
                  Esta aula está {normalizedStatus === "ARCHIVED" ? "archivada" : "bloqueada"} y no admite publicaciones.
                </p>
              )}
              {publicationMessage && (
                <p className={`mt-3 text-xs ${publicationStatus === "error" ? "text-[var(--c-danger)]" : "text-green-600"}`}>
                  {publicationMessage}
                </p>
              )}
            </div>

            {/* Feed */}
            <div className="space-y-4">
              {feedLoading && (
                <>
                  <div className="h-24 rounded-xl animate-pulse bg-[var(--c-border)]" />
                  <div className="h-24 rounded-xl animate-pulse bg-[var(--c-border)]" />
                </>
              )}
              {feedError && !feedLoading && <div className="text-sm text-[var(--c-danger)]">{feedError}</div>}
              {!feedLoading && !feedError && publications.length === 0 && (
                <div className="text-sm text-[var(--c-muted)]">Aún no hay publicaciones.</div>
              )}
              {!feedLoading && !feedError && publications.map((publication) => (
                <article key={publication.id} className={cardCls}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full text-white grid place-content-center font-semibold text-sm select-none ${getAvatarColor(publication.authorInitials ?? "?")}`}>
                      {publication.authorInitials ?? "?"}
                    </div>
                    <div className="font-semibold text-sm text-[var(--c-text)]">{publication.title}</div>
                  </div>
                  <p className="mt-3 text-sm text-[var(--c-text)]">{publication.body}</p>
                  {publication.links && (
                    <div className="flex gap-6 mt-3">
                      {publication.links.map((link) => (
                        <a key={link.label} className="text-[var(--c-primary)] hover:underline text-sm" href={link.href}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-[var(--c-muted)] mt-2">{publication.publishedAtLabel}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Leaderboard */}
            <div className={cardCls}>
              <h3 className="text-sm font-semibold text-[var(--c-text)]">🏆 Top Estudiantes</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {feedLoading && <li className="h-4 rounded animate-pulse bg-[var(--c-border)]" />}
                {feedError && !feedLoading && <li className="text-[var(--c-danger)]">{feedError}</li>}
                {!feedLoading && !feedError && leaderboard.length === 0 && (
                  <li className="text-[var(--c-muted)]">Sin ranking disponible.</li>
                )}
                {!feedLoading && !feedError && leaderboard.map((entry, index) => (
                  <li key={entry.id} className="flex justify-between text-[var(--c-text)]">
                    <span>{index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"} {entry.name}</span>
                    <span className="text-[var(--c-muted)]">{entry.points} pts</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Progreso */}
            <div className={cardCls}>
              <h3 className="text-sm font-semibold text-[var(--c-text)]">Progreso de la clase</h3>
              <div className="mt-3 space-y-3 text-sm">
                {progressLoading && <div className="h-12 rounded-xl animate-pulse bg-[var(--c-border)]" />}
                {progressError && !progressLoading && <p className="text-[var(--c-danger)]">{progressError}</p>}
                {!progressLoading && !progressError && classProgress.length === 0 && (
                  <p className="text-[var(--c-muted)]">No hay módulos disponibles para esta aula.</p>
                )}
                {!progressLoading && !progressError && classProgress.map((module) => (
                  <div key={module.id}>
                    <div className="flex justify-between items-center">
                      <span className="text-[var(--c-text)]">{module.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        module.isLocked
                          ? "bg-[var(--c-bg)] text-[var(--c-muted)]"
                          : module.progressPercent >= 100
                          ? "bg-green-100 text-green-700"
                          : module.progressPercent > 0
                          ? "bg-blue-100 text-blue-700"
                          : "bg-[var(--c-bg)] text-[var(--c-muted)]"
                      }`}>
                        {module.isLocked ? "Bloqueado"
                          : module.progressPercent >= 100 ? "Completado"
                          : module.progressPercent > 0 ? "En progreso"
                          : "Sin iniciar"}
                      </span>
                    </div>
                    <div className="h-1.5 bg-[var(--c-border)] rounded mt-1">
                      <div
                        className={`h-1.5 rounded ${
                          module.isLocked ? "bg-[var(--c-muted)]"
                          : module.progressPercent >= 100 ? "bg-green-500"
                          : module.progressPercent > 0 ? "bg-blue-500"
                          : "bg-[var(--c-muted)]"
                        }`}
                        style={{ width: `${module.progressPercent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enlaces útiles */}
            <div className={cardCls}>
              <h3 className="text-sm font-semibold text-[var(--c-text)]">Enlaces útiles</h3>
              <div className="mt-3 space-y-2 text-sm">
                {resourceLinksLoading && <div className="h-8 rounded-lg animate-pulse bg-[var(--c-border)]" />}
                {resourceLinksError && !resourceLinksLoading && (
                  <p className="text-[var(--c-danger)]">{resourceLinksError}</p>
                )}
                {!resourceLinksLoading && !resourceLinksError && resourceLinks.length === 0 && (
                  <p className="text-[var(--c-muted)]">No hay enlaces disponibles.</p>
                )}
                {!resourceLinksLoading && !resourceLinksError && resourceLinks.map((link) => {
                  const meta = getResourceTypeMeta(link.type);
                  return (
                    <a
                      key={link.id}
                      className="flex items-center justify-between gap-3 rounded-lg border border-[var(--c-border)] px-3 py-2 hover:border-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex flex-col min-w-0">
                        <span className="font-medium text-[var(--c-text)] truncate">{getResourceDisplayUrl(link.url)}</span>
                        <span className="text-xs text-[var(--c-muted)] truncate">{link.url}</span>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${meta.badge}`}>{meta.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Próximas actividades */}
            <div className={cardCls}>
              <h3 className="text-sm font-semibold text-[var(--c-text)]">Próximas actividades</h3>
              <ul className="mt-3 text-sm space-y-2">
                {feedLoading && <li className="h-10 rounded-lg animate-pulse bg-[var(--c-border)]" />}
                {feedError && !feedLoading && <li className="text-[var(--c-danger)]">{feedError}</li>}
                {!feedLoading && !feedError && upcomingActivities.length === 0 && (
                  <li className="text-[var(--c-muted)]">No hay actividades próximas.</li>
                )}
                {!feedLoading && !feedError && upcomingActivities.map((activity) => (
                  <li key={activity.id}
                    className="flex items-start gap-2 rounded-lg border border-[var(--c-border)] px-3 py-2">
                    <span className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                      activity.tipo === "evaluacion" ? "bg-amber-100 text-amber-700"
                      : activity.tipo === "evento" ? "bg-violet-100 text-violet-700"
                      : "bg-blue-100 text-blue-700"
                    }`}>
                      {activity.tipo === "evaluacion" ? "📝" : activity.tipo === "evento" ? "📅" : "📖"}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-[var(--c-text)]">{activity.label}</p>
                      <p className="text-xs text-[var(--c-muted)]">{activity.when}</p>
                      {activity.descripcion && (
                        <p className="text-xs text-[var(--c-muted)] mt-0.5">{activity.descripcion}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subastas */}
            {subastas.length > 0 && (
              <div className={`${cardCls} space-y-3`}>
                <h3 className="text-sm font-semibold text-[var(--c-text)]">🏷️ Subastas activas</h3>
                {subastas.map((examen) => {
                  const misPujasExamen = misPujas[examen.id] ?? [];
                  const totalPujado = misPujasExamen.filter((p) => p.estado !== "rechazada").reduce((acc, p) => acc + p.puntos, 0);
                  const restante = examen.maxCompra - totalPujado;
                  const form = pujaForm[examen.id] ?? { puntos: 1, montoPorPunto: examen.precioPromedioAjustado ?? 100 };
                  const status = pujaStatus[examen.id] ?? "idle";

                  return (
                    <div key={examen.id} className="rounded-xl border border-[var(--c-border)] p-3 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-[var(--c-text)]">Parcial</span>
                        {examen.fechaExamen && (
                          <span className="text-xs text-[var(--c-muted)]">
                            {new Date(examen.fechaExamen).toLocaleDateString("es-AR", { day: "numeric", month: "short" })}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[var(--c-muted)] space-y-1">
                        <p>Precio promedio:{" "}
                          <span className="font-medium text-[var(--c-text)]">{examen.precioPromedioAjustado ?? "—"} 🪙/punto</span>
                        </p>
                        <p>Podés pujar:{" "}
                          <span className={`font-medium ${restante <= 0 ? "text-[var(--c-danger)]" : "text-emerald-600"}`}>
                            {restante <= 0 ? "Límite alcanzado" : `${restante} punto(s) más`}
                          </span>
                        </p>
                      </div>
                      {restante > 0 && (
                        <div className="space-y-2">
                          <div className="grid grid-cols-2 gap-2">
                            <label className="text-xs text-[var(--c-muted)]">
                              Puntos (máx {restante})
                              <input
                                type="number" min={1} max={restante} value={form.puntos}
                                onChange={(e) => setPujaForm((prev) => ({
                                  ...prev, [examen.id]: { ...form, puntos: Math.min(Number(e.target.value), restante) }
                                }))}
                                className={`mt-1 w-full ${inputCls}`}
                              />
                            </label>
                            <label className="text-xs text-[var(--c-muted)]">
                              Monedas/punto
                              <input
                                type="number" min={1} value={form.montoPorPunto}
                                onChange={(e) => setPujaForm((prev) => ({
                                  ...prev, [examen.id]: { ...form, montoPorPunto: Number(e.target.value) }
                                }))}
                                className={`mt-1 w-full ${inputCls}`}
                              />
                            </label>
                          </div>
                          <p className="text-xs text-[var(--c-muted)]">
                            Total a gastar:{" "}
                            <span className="font-medium text-[var(--c-text)]">{form.puntos * form.montoPorPunto} 🪙</span>
                          </p>
                          <button
                            type="button"
                            disabled={status === "loading"}
                            onClick={() => handlePujar(examen)}
                            className="w-full rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
                          >
                            {status === "loading" ? "Pujando..." : "Pujar"}
                          </button>
                          {status === "error" && (
                            <p className="text-xs text-[var(--c-danger)]">No se pudo registrar la puja.</p>
                          )}
                        </div>
                      )}
                      {misPujasExamen.length > 0 && (
                        <div className="pt-1 border-t border-[var(--c-border)]">
                          <p className="text-xs text-[var(--c-muted)] mb-1">Tus pujas:</p>
                          {misPujasExamen.map((p) => (
                            <div key={p.id} className="flex justify-between text-xs text-[var(--c-text)]">
                              <span>{p.puntos} punto(s) × {p.montoPorPunto} 🪙</span>
                              <span className={
                                p.estado === "aceptada" ? "text-emerald-600"
                                : p.estado === "rechazada" ? "text-[var(--c-danger)]"
                                : "text-amber-600"
                              }>{p.estado}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
