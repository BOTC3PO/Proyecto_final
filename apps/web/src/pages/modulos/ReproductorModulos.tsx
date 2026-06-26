import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/use-auth";
import { apiGet } from "../../lib/api";
import type { Module } from "../../domain/module/module.types";
import { resolveMateria as resolveSubject, resolveCategoria as resolveCategory } from "../../domain/module/materia";
import { getSubjectColor } from "../../domain/module/subjectColors";
import { Card, Badge, Button, Input, Spinner, Alert } from "../../ui";

type ModulesResponse = {
  items: Module[];
};

const truncate = (text: string, max: number) =>
  text.length <= max ? text : text.slice(0, max).trimEnd() + "…";

const publishedQuizCount = (m: Module) =>
  m.quizzes?.filter((q) => q.status === "published").length ?? 0;

export default function ReproductorModulos() {
  const { user } = useAuth();
  const [modules, setModules] = useState<Module[]>([]);
  const [loadStatus, setLoadStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let active = true;
    setLoadStatus("loading");
    setErrorMessage(null);
    apiGet<ModulesResponse>("/api/modulos")
      .then((data) => {
        if (!active) return;
        setModules(data.items ?? []);
        setLoadStatus("ready");
      })
      .catch((err) => {
        if (!active) return;
        setModules([]);
        setLoadStatus("error");
        setErrorMessage(err instanceof Error ? err.message : "No se pudieron cargar los módulos.");
      });
    return () => {
      active = false;
    };
  }, []);

  const visibleModules = useMemo(() => {
    const userId = user?.id;
    return modules.filter(
      (m) => m.visibility !== "privado" || m.createdBy === userId
    );
  }, [modules, user?.id]);

  const searchedModules = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return visibleModules;
    return visibleModules.filter((m) => {
      const haystack = `${m.title} ${m.description} ${resolveSubject(m)} ${resolveCategory(m)}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [visibleModules, searchTerm]);

  const subjectOptions = useMemo(() => {
    const set = new Set<string>();
    searchedModules.forEach((m) => set.add(resolveSubject(m)));
    return Array.from(set).sort((a, b) => a.localeCompare(b, "es"));
  }, [searchedModules]);

  const handleSubjectClick = (subject: string) => {
    setSelectedSubject(subject);
    setSelectedCategory("all");
  };

  const subjectFilteredModules = useMemo(() => {
    if (selectedSubject === "all") return searchedModules;
    return searchedModules.filter((m) => resolveSubject(m) === selectedSubject);
  }, [searchedModules, selectedSubject]);

  const categoryOptions = useMemo(() => {
    const set = new Set<string>();
    subjectFilteredModules.forEach((m) => set.add(resolveCategory(m)));
    return Array.from(set).sort((a, b) => a.localeCompare(b, "es"));
  }, [subjectFilteredModules]);

  const filteredModules = useMemo(() => {
    if (selectedCategory === "all") return subjectFilteredModules;
    return subjectFilteredModules.filter((m) => resolveCategory(m) === selectedCategory);
  }, [subjectFilteredModules, selectedCategory]);

  return (
    <main style={{
      minHeight: "100vh",
      background: "var(--c-bg)",
      fontFamily: "var(--font-sans)",
    }}>
      {/* Header */}
      <header
        role="banner"
        style={{
          background: "var(--c-primary)",
          color: "var(--c-text-on-dark)",
          padding: "var(--space-5) var(--space-5)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <div style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-4)",
        }}>
          <div>
            <h1 style={{
              margin: 0,
              fontSize: "var(--text-2xl)",
              fontWeight: "var(--fw-bold)",
              lineHeight: "var(--lh-tight)",
            }}>
              Reproductor de Módulos
            </h1>
            <p style={{
              margin: 0,
              marginTop: "var(--space-1)",
              fontSize: "var(--text-sm)",
              opacity: 0.85,
            }}>
              Explora y reproduce módulos organizados por materia y categoría
            </p>
          </div>
          <div style={{ width: "100%", maxWidth: "20rem" }}>
            <Input
              type="search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSelectedSubject("all");
                setSelectedCategory("all");
              }}
              placeholder="Buscar módulos..."
              aria-label="Buscar módulos"
              size="sm"
              style={{
                background: "color-mix(in srgb, var(--c-text-on-dark) 15%, transparent)",
                borderColor: "color-mix(in srgb, var(--c-text-on-dark) 25%, transparent)",
                color: "var(--c-text-on-dark)",
              }}
            />
          </div>
        </div>
      </header>

      {/* Loading state */}
      {loadStatus === "loading" && (
        <div style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "var(--space-7) var(--space-5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-3)",
        }}>
          <Spinner size="lg" label="Cargando módulos" />
          <p style={{
            fontSize: "var(--text-sm)",
            color: "var(--c-muted)",
          }}>
            Cargando módulos...
          </p>
        </div>
      )}

      {loadStatus === "error" && (
        <div style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "var(--space-5)",
        }}>
          <Alert variant="danger" title="Error al cargar">
            {errorMessage ?? "Ocurrió un error al cargar los módulos."}
          </Alert>
        </div>
      )}

      {loadStatus === "ready" && visibleModules.length === 0 && (
        <div style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "var(--space-8) var(--space-5)",
          textAlign: "center",
        }}>
          <p style={{
            fontSize: "var(--text-lg)",
            fontWeight: "var(--fw-medium)",
            color: "var(--c-muted)",
          }}>
            No hay módulos disponibles para reproducir.
          </p>
          <p style={{
            fontSize: "var(--text-sm)",
            color: "var(--c-muted)",
            marginTop: "var(--space-1)",
          }}>
            Los módulos publicados aparecerán aquí.
          </p>
        </div>
      )}

      {loadStatus === "ready" && visibleModules.length > 0 && (
        <div style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "var(--space-5)",
          display: "flex",
          gap: "var(--space-5)",
        }}>
          {/* Sidebar -- subjects */}
          <aside
            aria-label="Filtro por materia"
            className="hidden lg:flex"
            style={{
              flexDirection: "column",
              width: "14rem",
              flexShrink: 0,
              gap: "var(--space-1)",
            }}
          >
            <p style={{
              padding: "var(--space-2) var(--space-3)",
              fontSize: "var(--text-xs)",
              fontWeight: "var(--fw-bold)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "var(--c-muted)",
              margin: 0,
            }}>
              Materias
            </p>
            <Button
              variant="ghost"
              size="sm"
              pressed={selectedSubject === "all"}
              onClick={() => handleSubjectClick("all")}
              style={{
                justifyContent: "space-between",
                textAlign: "left",
                borderRadius: "var(--r-lg)",
              }}
            >
              <span>Todas</span>
              <Badge variant={selectedSubject === "all" ? "primary" : "neutral"} size="sm">
                {searchedModules.length}
              </Badge>
            </Button>
            {subjectOptions.map((subj) => {
              const count = searchedModules.filter((m) => resolveSubject(m) === subj).length;
              const color = getSubjectColor(subj);
              const isActive = selectedSubject === subj;
              return (
                <Button
                  key={subj}
                  variant="ghost"
                  size="sm"
                  pressed={isActive}
                  onClick={() => handleSubjectClick(subj)}
                  style={{
                    justifyContent: "space-between",
                    textAlign: "left",
                    borderRadius: "var(--r-lg)",
                    ...(isActive ? {
                      background: color.background,
                      color: color.text,
                      borderColor: color.border,
                    } : {}),
                  }}
                >
                  <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{subj}</span>
                  <Badge variant="neutral" size="sm">{count}</Badge>
                </Button>
              );
            })}
          </aside>

          {/* Mobile subject selector */}
          <div className="lg:hidden" style={{ display: "none" }} />

          {/* Main content */}
          <section
            aria-label="Lista de módulos"
            style={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-4)",
            }}
          >
            {/* Mobile subject pills */}
            <div className="lg:hidden" style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-2)",
            }}>
              <Button
                variant={selectedSubject === "all" ? "primary" : "ghost"}
                size="sm"
                onClick={() => handleSubjectClick("all")}
              >
                Todas ({searchedModules.length})
              </Button>
              {subjectOptions.map((subj) => {
                const count = searchedModules.filter((m) => resolveSubject(m) === subj).length;
                return (
                  <Button
                    key={subj}
                    variant={selectedSubject === subj ? "primary" : "ghost"}
                    size="sm"
                    onClick={() => handleSubjectClick(subj)}
                  >
                    {subj} ({count})
                  </Button>
                );
              })}
            </div>

            {/* Category pills */}
            {categoryOptions.length > 1 && (
              <div role="group" aria-label="Filtro por categoría" style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-2)",
              }}>
                <Button
                  variant={selectedCategory === "all" ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory("all")}
                >
                  Todas las categorías
                </Button>
                {categoryOptions.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "primary" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            )}

            {/* Module grid */}
            {filteredModules.length === 0 ? (
              <Card variant="flat" padding="lg" style={{ textAlign: "center" }}>
                <p style={{
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--fw-medium)",
                  color: "var(--c-muted)",
                  margin: 0,
                }}>
                  No hay módulos para los filtros seleccionados.
                </p>
                <div style={{ marginTop: "var(--space-3)" }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedSubject("all");
                      setSelectedCategory("all");
                      setSearchTerm("");
                    }}
                  >
                    Limpiar filtros
                  </Button>
                </div>
              </Card>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredModules.map((m) => {
                  const subjectColor = getSubjectColor(m.subject);
                  const quizCount = publishedQuizCount(m);
                  const hasRewards = Boolean(m.rewardsConfig);

                  return (
                    <article key={m.id}>
                      <Card
                        variant="raised"
                        padding="none"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                          overflow: "hidden",
                          transition: "box-shadow 200ms ease, transform 200ms ease",
                        }}
                      >
                        {/* Color strip */}
                        <div
                          aria-hidden="true"
                          style={{
                            height: "var(--space-1)",
                            width: "100%",
                            background: `linear-gradient(90deg, ${subjectColor.border}, ${subjectColor.text}40)`,
                          }}
                        />

                        <div style={{
                          display: "flex",
                          flexDirection: "column",
                          flex: 1,
                          padding: "var(--space-4)",
                          gap: "var(--space-3)",
                        }}>
                          {/* Badges row */}
                          <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            gap: "var(--space-1)",
                          }}>
                            <Badge
                              size="sm"
                              style={{
                                background: subjectColor.background,
                                borderColor: subjectColor.border,
                                color: subjectColor.text,
                              }}
                            >
                              {resolveSubject(m)}
                            </Badge>
                            {m.category && m.category !== m.subject && (
                              <Badge variant="neutral" size="sm">
                                {resolveCategory(m)}
                              </Badge>
                            )}
                            {hasRewards && (
                              <Badge variant="warning" size="sm">PF</Badge>
                            )}
                          </div>

                          {/* Title */}
                          <h2 style={{
                            margin: 0,
                            fontSize: "var(--text-base)",
                            fontWeight: "var(--fw-bold)",
                            lineHeight: "var(--lh-tight)",
                            color: "var(--c-text)",
                          }}>
                            {m.title}
                          </h2>

                          {/* Description */}
                          {m.description && (
                            <p style={{
                              margin: 0,
                              fontSize: "var(--text-sm)",
                              lineHeight: "var(--lh-relaxed)",
                              color: "var(--c-muted)",
                            }}>
                              {truncate(m.description, 120)}
                            </p>
                          )}

                          {/* Meta row */}
                          <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            gap: "var(--space-3)",
                            fontSize: "var(--text-xs)",
                            color: "var(--c-muted)",
                            marginTop: "auto",
                            paddingTop: "var(--space-2)",
                            borderTop: "1px solid var(--c-border)",
                          }}>
                            {(m.durationMinutes ?? 0) > 0 && (
                              <span>{m.durationMinutes} min</span>
                            )}
                            {m.level && (
                              <span>{m.level}</span>
                            )}
                            {quizCount > 0 && (
                              <span>
                                {quizCount} {quizCount === 1 ? "cuestionario" : "cuestionarios"}
                              </span>
                            )}
                          </div>

                          {/* Play button */}
                          <Link
                            to={`/modulos/${m.id}/jugar`}
                            aria-label={`Reproducir ${m.title}`}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "var(--space-2)",
                              padding: "var(--space-2) var(--space-4)",
                              background: "var(--c-primary)",
                              color: "var(--c-text-on-dark)",
                              fontSize: "var(--text-sm)",
                              fontWeight: "var(--fw-semibold)",
                              fontFamily: "var(--font-sans)",
                              borderRadius: "var(--r-md)",
                              textDecoration: "none",
                              transition: "opacity 120ms ease",
                              marginTop: "var(--space-1)",
                            }}
                          >
                            <svg aria-hidden="true" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            Reproducir
                          </Link>
                        </div>
                      </Card>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
