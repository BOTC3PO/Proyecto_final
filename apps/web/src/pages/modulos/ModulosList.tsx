import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../auth/use-auth";
import { useHasAnyRole } from "../../auth/use-roles";
import { apiGet, apiPost } from "../../lib/api";
import Toast from "../../components/Toast";
import type { Module, ModuleVisibility } from "../../domain/module/module.types";
import { Card, Badge, Button, Select, Input, Spinner, Alert } from "../../ui";
import type { BadgeVariant } from "../../ui";

const VISIBILITY_LABELS: Record<ModuleVisibility, string> = {
  publico: "Público",
  privado: "Privado",
  escuela: "Escuela",
};

type ModulesResponse = {
  items: Module[];
};

const resolveMateria = (module: Module) => module.subject || module.category || "Sin materia";
const resolveCategoria = (module: Module) => module.category || module.subject || "Sin categoría";
const resolveStatus = (module: Module) => {
  const moduleWithStatus = module as Module & { status?: string };
  if (moduleWithStatus.status) return moduleWithStatus.status;
  const quizStatuses = module.quizzes?.map((quiz) => quiz.status).filter(Boolean);
  if (quizStatuses?.includes("published")) return "published";
  if (quizStatuses?.includes("draft")) return "draft";
  if (quizStatuses?.includes("archived")) return "archived";
  return "sin_estado";
};

const STATUS_LABELS: Record<string, string> = {
  draft: "Borrador",
  published: "Publicado",
  archived: "Archivado",
  sin_estado: "Sin estado",
};

function visibilityBadgeVariant(v: string): BadgeVariant {
  switch (v) {
    case "publico": return "success";
    case "privado": return "danger";
    case "escuela": return "info";
    default: return "neutral";
  }
}

function statusBadgeVariant(s: string): BadgeVariant {
  switch (s) {
    case "published": return "success";
    case "draft": return "warning";
    case "archived": return "neutral";
    default: return "neutral";
  }
}

const CATEGORY_ACCENT: Record<string, string> = {
  evaluacion: "var(--c-warning)",
  competencia: "var(--c-success)",
};

function getCategoryAccent(category: string): string {
  return CATEGORY_ACCENT[(category ?? "").toLowerCase()] ?? "var(--c-primary)";
}

export default function ModulosList() {
  const { user } = useAuth();
  // MULTIROL-02: `canCreate`/`canEdit` migran al helper centralizado
  // (multi-rol friendly): alcanza con que el user TENGA TEACHER o
  // ADMIN en su array `roles[]`. Antes leía el singular `user.role`.
  const canCreate = useHasAnyRole(["TEACHER", "ADMIN"]);
  const canEdit = useHasAnyRole(["TEACHER", "ADMIN"]);
  const [modules, setModules] = useState<Module[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"mine" | "school" | "public">("public");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams] = useSearchParams();

  const subjectOptions = useMemo(() => {
    const values = new Set<string>();
    modules.forEach((module) => {
      const s = resolveMateria(module);
      if (typeof s === "string" && s) values.add(s);
    });
    return Array.from(values).sort((a, b) => a.localeCompare(b));
  }, [modules]);

  const categoryOptions = useMemo(() => {
    const values = new Set<string>();
    modules.forEach((module) => {
      const s = resolveCategoria(module);
      if (typeof s === "string" && s) values.add(s);
    });
    return Array.from(values).sort((a, b) => a.localeCompare(b));
  }, [modules]);

  useEffect(() => {
    const querySubject = searchParams.get("subject");
    if (querySubject) {
      setSelectedSubject(querySubject);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const statusOptions = useMemo(() => {
    const values = new Set<string>();
    modules.forEach((module) => {
      const s = resolveStatus(module);
      if (typeof s === "string" && s) values.add(s);
    });
    return Array.from(values).sort((a, b) => a.localeCompare(b));
  }, [modules]);

  const filteredModules = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    return modules.filter((module) => {
      if (activeTab === "mine" && module.createdBy !== user?.id) return false;
      if (activeTab === "school" && module.visibility !== "escuela") return false;
      if (activeTab === "public" && module.visibility !== "publico") return false;
      if (selectedSubject !== "all" && resolveMateria(module) !== selectedSubject) return false;
      if (selectedCategory !== "all" && resolveCategoria(module) !== selectedCategory) return false;
      if (selectedStatus !== "all" && resolveStatus(module) !== selectedStatus) return false;
      if (normalizedSearch) {
        const haystack = `${module.title} ${module.description} ${resolveMateria(
          module
        )} ${resolveCategoria(module)}`.toLowerCase();
        if (!haystack.includes(normalizedSearch)) return false;
      }
      return true;
    });
  }, [
    activeTab,
    modules,
    searchTerm,
    selectedCategory,
    selectedStatus,
    selectedSubject,
    user?.id,
  ]);

  useEffect(() => {
    let active = true;
    setStatus("loading");
    setErrorMessage(null);
    apiGet<ModulesResponse>("/api/modulos")
      .then((data) => {
        if (!active) return;
        setModules(data.items ?? []);
        setStatus("ready");
      })
      .catch((error) => {
        if (!active) return;
        setModules([]);
        setStatus("error");
        setErrorMessage(
          error instanceof Error ? error.message : "No se pudieron cargar los módulos."
        );
      });
    return () => {
      active = false;
    };
  }, []);

  // Tarea 19: duplicar modulo.
  const navigate = useNavigate();
  const [duplicatingId, setDuplicatingId] = useState<string | null>(null);
  const [toastState, setToastState] = useState<string | null>(null);
  const handleDuplicar = async (moduleId: string) => {
    setDuplicatingId(moduleId);
    try {
      const res = await apiPost<{ id: string; moduleId?: string }>(
        `/api/modulos/${encodeURIComponent(moduleId)}/duplicar`,
        {},
      );
      const newId = res.id;
      setToastState("Modulo duplicado. Abriendo el editor...");
      window.setTimeout(() => {
        navigate(`/modulos/${encodeURIComponent(newId)}/editar`);
      }, 400);
    } catch (err) {
      setToastState(
        `No se pudo duplicar: ${err instanceof Error ? err.message : "error"}`,
      );
    } finally {
      setDuplicatingId(null);
    }
  };

  const TABS: { key: "mine" | "school" | "public"; label: string }[] = [
    { key: "mine", label: "Mis módulos" },
    { key: "school", label: "Escuela" },
    { key: "public", label: "Públicos" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--c-bg)",
        fontFamily: "var(--font-sans)",
        padding: "var(--space-5)",
      }}
    >
      <div style={{
        maxWidth: "72rem",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)",
      }}>
        {/* ── Header ─────────────────────────────────────────── */}
        <header
          role="banner"
          style={{
            background: "var(--c-primary)",
            borderRadius: "var(--r-lg)",
            padding: "var(--space-6) var(--space-6)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-4)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
            <h1 style={{
              margin: 0,
              fontSize: "var(--text-2xl)",
              fontWeight: "var(--fw-bold)",
              lineHeight: "var(--lh-tight)",
              color: "var(--c-text-on-dark)",
            }}>
              Módulos
            </h1>
            <p style={{
              margin: 0,
              fontSize: "var(--text-sm)",
              color: "var(--c-text-on-dark)",
              opacity: 0.85,
            }}>
              Explora el listado de módulos disponibles y gestiona su contenido.
            </p>
          </div>
          {canCreate && (
            <Link
              to="/modulos/crear"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                padding: "var(--space-2) var(--space-4)",
                borderRadius: "var(--r-md)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--fw-semibold)",
                color: "var(--c-text-on-dark)",
                background: "color-mix(in srgb, var(--c-text-on-dark) 15%, transparent)",
                border: "1px solid color-mix(in srgb, var(--c-text-on-dark) 25%, transparent)",
                textDecoration: "none",
              }}
            >
              + Crear módulo
            </Link>
          )}
        </header>

        {/* ── Loading state ──────────────────────────────────── */}
        {status === "loading" && (
          <Card variant="flat" padding="lg">
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "var(--space-3)",
              padding: "var(--space-6) 0",
            }}>
              <Spinner size="lg" label="Cargando módulos" />
              <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--c-muted)" }}>
                Cargando módulos...
              </p>
            </div>
          </Card>
        )}

        {/* ── Error state ────────────────────────────────────── */}
        {status === "error" && (
          <Alert variant="danger" title="Error al cargar">
            {errorMessage ?? "Ocurrió un error inesperado."}
          </Alert>
        )}

        {/* ── Empty global state ─────────────────────────────── */}
        {status === "ready" && modules.length === 0 && (
          <Card variant="flat" padding="lg">
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "var(--space-3)",
              padding: "var(--space-7) 0",
              textAlign: "center",
            }}>
              <p style={{
                margin: 0,
                fontSize: "var(--text-base)",
                fontWeight: "var(--fw-semibold)",
                color: "var(--c-text)",
              }}>
                No hay módulos disponibles
              </p>
              <p style={{
                margin: 0,
                fontSize: "var(--text-sm)",
                color: "var(--c-muted)",
              }}>
                Comienza creando tu primer módulo para empezar.
              </p>
              {canCreate && (
                <Link
                  to="/modulos/crear"
                  style={{
                    marginTop: "var(--space-3)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                    padding: "var(--space-2) var(--space-4)",
                    borderRadius: "var(--r-md)",
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--fw-semibold)",
                    color: "var(--c-text-on-dark)",
                    background: "var(--c-primary)",
                    textDecoration: "none",
                  }}
                >
                  + Crear el primer módulo
                </Link>
              )}
            </div>
          </Card>
        )}

        {/* ── Content ────────────────────────────────────────── */}
        {status === "ready" && modules.length > 0 && (
          <section style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Filtrar módulos"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-1)",
                padding: "var(--space-1)",
                background: "var(--c-surface)",
                borderRadius: "var(--r-lg)",
                border: "1px solid var(--c-border)",
              }}
            >
              {TABS.map((tab) => (
                <Button
                  key={tab.key}
                  variant="ghost"
                  size="sm"
                  role="tab"
                  aria-selected={activeTab === tab.key}
                  pressed={activeTab === tab.key}
                  onClick={() => {
                    setActiveTab(tab.key);
                    setSearchTerm("");
                  }}
                >
                  {tab.label}
                </Button>
              ))}
            </div>

            {/* Filters */}
            <Card variant="flat" padding="md">
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <p style={{
                  margin: 0,
                  fontSize: "var(--text-xs)",
                  fontWeight: "var(--fw-semibold)",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.05em",
                  color: "var(--c-muted)",
                }}>
                  Filtros
                </p>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                    <label
                      style={{
                        fontSize: "var(--text-xs)",
                        fontWeight: "var(--fw-medium)",
                        color: "var(--c-muted)",
                      }}
                    >
                      Materia
                    </label>
                    <Select
                      size="sm"
                      value={selectedSubject}
                      onChange={(event) => setSelectedSubject(event.target.value)}
                    >
                      <option value="all">Todas</option>
                      {subjectOptions.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </Select>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                    <label
                      style={{
                        fontSize: "var(--text-xs)",
                        fontWeight: "var(--fw-medium)",
                        color: "var(--c-muted)",
                      }}
                    >
                      Categoría
                    </label>
                    <Select
                      size="sm"
                      value={selectedCategory}
                      onChange={(event) => setSelectedCategory(event.target.value)}
                    >
                      <option value="all">Todas</option>
                      {categoryOptions.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </Select>
                  </div>
                  {/* FIX-FILTROS-REDUNDANTES — el filtro de "Visibilidad"
                      está duplicado con las pestañas "Mis módulos /
                      Escuela / Públicos" (cada una ya restringe por
                      `visibility`). Dejarlo creaba una doble entrada para
                      el mismo concepto y dejaba los filtros de materia /
                      categoría casi inútiles cuando la pestaña ya había
                      recortado el set. Bug 5.1 de
                      `docs/qa/test-parte-3-profesor.md`. Ahora la
                      visibilidad se elige con la pestaña y los filtros
                      restantes son ortogonales (materia, categoría,
                      estado, búsqueda). */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                    <label
                      style={{
                        fontSize: "var(--text-xs)",
                        fontWeight: "var(--fw-medium)",
                        color: "var(--c-muted)",
                      }}
                    >
                      Estado
                    </label>
                    <Select
                      size="sm"
                      value={selectedStatus}
                      onChange={(event) => setSelectedStatus(event.target.value)}
                    >
                      <option value="all">Todos</option>
                      {statusOptions.map((item) => (
                        <option key={item} value={item}>{STATUS_LABELS[item] ?? item}</option>
                      ))}
                    </Select>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                    <label
                      style={{
                        fontSize: "var(--text-xs)",
                        fontWeight: "var(--fw-medium)",
                        color: "var(--c-muted)",
                      }}
                    >
                      Búsqueda
                    </label>
                    <Input
                      type="search"
                      size="sm"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      placeholder="Buscar módulo..."
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Module cards or empty filtered state */}
            {filteredModules.length === 0 ? (
              <Card variant="flat" padding="lg">
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  padding: "var(--space-7) 0",
                  textAlign: "center",
                }}>
                  <p style={{
                    margin: 0,
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--fw-semibold)",
                    color: "var(--c-text)",
                  }}>
                    Sin resultados
                  </p>
                  <p style={{
                    margin: 0,
                    fontSize: "var(--text-sm)",
                    color: "var(--c-muted)",
                  }}>
                    No encontramos módulos con los filtros seleccionados.
                  </p>
                </div>
              </Card>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {filteredModules.map((module) => {
                  const visibilityLabel = module.visibility
                    ? VISIBILITY_LABELS[module.visibility]
                    : "Sin definir";
                  const statusLabel = STATUS_LABELS[resolveStatus(module)] ?? "Sin estado";
                  const accentColor = getCategoryAccent(module.category ?? "");

                  return (
                    <Card key={module.id} variant="raised" padding="none">
                      <div style={{
                        borderTop: `3px solid ${accentColor}`,
                        borderRadius: "var(--r-md)",
                      }}>
                        <div style={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          gap: "var(--space-3)",
                          padding: "var(--space-4)",
                        }}>
                          <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "var(--space-2)",
                            minWidth: 0,
                            flex: 1,
                          }}>
                            <h2 style={{
                              margin: 0,
                              fontSize: "var(--text-lg)",
                              fontWeight: "var(--fw-semibold)",
                              color: "var(--c-text)",
                              lineHeight: "var(--lh-tight)",
                            }}>
                              {module.title}
                            </h2>
                            <p style={{
                              margin: 0,
                              fontSize: "var(--text-sm)",
                              color: "var(--c-muted)",
                            }}>
                              {resolveMateria(module)}
                            </p>
                            {module.description && (
                              <p style={{
                                margin: 0,
                                fontSize: "var(--text-sm)",
                                color: "var(--c-muted)",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical" as const,
                                overflow: "hidden",
                              }}>
                                {module.description}
                              </p>
                            )}
                            {/* Content counts */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
                              {(module.theoryBlocks?.length ?? module.theoryItems?.length ?? 0) > 0 && (
                                <span style={{ fontSize: "var(--text-xs)", color: "var(--c-muted)" }}>
                                  {module.theoryBlocks?.length ?? module.theoryItems?.length ?? 0} teoría
                                </span>
                              )}
                              {(module.quizzes?.length ?? 0) > 0 && (
                                <span style={{ fontSize: "var(--text-xs)", color: "var(--c-muted)" }}>
                                  {module.quizzes?.length} cuestionario{module.quizzes!.length !== 1 ? "s" : ""}
                                </span>
                              )}
                              {(module.durationMinutes ?? 0) > 0 && (
                                <span style={{ fontSize: "var(--text-xs)", color: "var(--c-muted)" }}>
                                  {module.durationMinutes} min
                                </span>
                              )}
                            </div>
                            {/* Badges */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                              <Badge variant={visibilityBadgeVariant(module.visibility ?? "")} size="sm">
                                {visibilityLabel}
                              </Badge>
                              <Badge variant={statusBadgeVariant(resolveStatus(module))} size="sm">
                                {statusLabel}
                              </Badge>
                            </div>
                          </div>
                          {/* Actions */}
                          <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "var(--space-2)",
                            flexShrink: 0,
                          }}>
                            <Link to={`/modulos/${module.id}`} style={{ textDecoration: "none" }}>
                              <Button variant="ghost" size="sm">
                                Ver
                              </Button>
                            </Link>
                            {canEdit && (
                              <Link to={`/modulos/${module.id}/editar`} style={{ textDecoration: "none" }}>
                                <Button variant="ghost" size="sm">
                                  Editar
                                </Button>
                              </Link>
                            )}
                            {canEdit && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDuplicar(module.id)}
                                disabled={duplicatingId === module.id}
                                data-testid={`modulo-duplicar-${module.id}`}
                                aria-label={`Duplicar ${module.title}`}
                              >
                                {duplicatingId === module.id ? "Duplicando..." : "Duplicar"}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </section>
        )}
        {toastState && (
          <Toast
            message={toastState}
            onClose={() => setToastState(null)}
            durationMs={3000}
          />
        )}
      </div>
    </main>
  );
}
