import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apiGetPublic } from "../lib/api";
import type { ThemeId } from "../theme/ThemeContext";
import { useI18n } from "../i18n/I18nContext";

const ROLE_LABELS: Record<string, string> = {
  USER: "Alumno", TEACHER: "Docente",
  DIRECTIVO: "Directivo", PARENT: "Padre/Madre",
  ADMIN: "Administrador", GUEST: "Invitado",
};

const ROLE_COLORS: Record<string, string> = {
  USER: "bg-emerald-100 text-emerald-800",
  TEACHER: "bg-violet-100 text-violet-800",
  DIRECTIVO: "bg-slate-100 text-slate-800",
  PARENT: "bg-amber-100 text-amber-800",
  ADMIN: "bg-blue-100 text-blue-800",
};

type PerfilPublicoData = {
  username: string;
  fullName: string;
  role: string;
  createdAt: string | null;
  avatarUrl: string | null;
  bio: string | null;
  tema: ThemeId;
  modulosCompletados: Array<{
    id: string;
    titulo: string;
    materia: string;
  }>;
  totalCompletados: number;
};

export default function PerfilPublico() {
  const { t } = useI18n();
  const { username } = useParams<{ username: string }>();
  const [data, setData] = useState<PerfilPublicoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Referencia al contenedor para aplicar el tema sin afectar el global
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!username) return;
    setLoading(true);
    setError(null);
    apiGetPublic<PerfilPublicoData>(`/api/perfil/${encodeURIComponent(username)}`)
      .then(setData)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [username]);

  // Aplicar tema del usuario al contenedor
  useEffect(() => {
    if (!data?.tema || !containerRef.current) return;
    containerRef.current.setAttribute("data-theme", data.tema);
  }, [data?.tema]);

  const initials = data?.fullName
    ? data.fullName.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase()
    : username?.slice(0, 2).toUpperCase() ?? "?";

  if (loading) {
    return (
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6
        px-6 py-16 items-center">
        <div className="h-24 w-24 animate-pulse rounded-full bg-[var(--c-border)]" />
        <div className="h-6 w-48 animate-pulse rounded-xl bg-[var(--c-border)]" />
        <div className="h-4 w-32 animate-pulse rounded-xl bg-[var(--c-border)]" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4
        px-6 py-16 items-center text-center">
        <p className="text-6xl">🔍</p>
        <h1 className="text-2xl font-bold text-slate-900">{t("perfilPublico.usuarioNoEncontrado")}</h1>
        <p className="text-slate-500">
          @{username} no existe o su perfil no es público.
        </p>
        <Link to="/"
          className="mt-2 rounded-xl bg-[var(--c-primary)] px-5 py-2.5 text-sm
            font-semibold text-white hover:opacity-90 transition-opacity">{t("perfilPublico.volverAlInicio")}</Link>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: "var(--c-bg)", color: "var(--c-text)" }}
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8
        px-6 py-12">

        {/* Header del perfil */}
        <section className="flex flex-col items-center gap-4 text-center">
          {/* Avatar */}
          <div
            className="h-24 w-24 rounded-full flex items-center
              justify-center text-2xl font-bold text-white"
            style={{ backgroundColor: "var(--c-primary)" }}
          >
            {data.avatarUrl ? (
              <img
                src={data.avatarUrl}
                alt={data.fullName}
                className="h-24 w-24 rounded-full object-cover"
              />
            ) : initials}
          </div>

          {/* Nombre y username */}
          <div>
            <h1 className="text-2xl font-bold"
              style={{ color: "var(--c-text)" }}>
              {data.fullName}
            </h1>
            <p className="text-sm mt-0.5"
              style={{ color: "var(--c-muted)" }}>
              @{data.username}
            </p>
          </div>

          {/* Rol */}
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
            ROLE_COLORS[data.role] ?? "bg-slate-100 text-slate-600"
          }`}>
            {ROLE_LABELS[data.role] ?? data.role}
          </span>

          {/* Bio */}
          {data.bio && (
            <p className="text-sm max-w-md"
              style={{ color: "var(--c-muted)" }}>
              {data.bio}
            </p>
          )}

          {/* Fecha de ingreso */}
          {data.createdAt && (
            <p className="text-xs" style={{ color: "var(--c-muted)" }}>
              Miembro desde{" "}
              {new Date(data.createdAt).toLocaleDateString("es-AR", {
                month: "long", year: "numeric"
              })}
            </p>
          )}
        </section>

        {/* Stats */}
        <section
          className="rounded-xl border p-6 text-center"
          style={{
            backgroundColor: "var(--c-surface)",
            borderColor: "var(--c-border)",
          }}
        >
          <p className="text-4xl font-bold"
            style={{ color: "var(--c-primary)" }}>
            {data.totalCompletados}
          </p>
          <p className="text-sm mt-1"
            style={{ color: "var(--c-muted)" }}>{t("perfilPublico.modulosCompletados")}</p>
        </section>

        {/* Módulos públicos completados */}
        {data.modulosCompletados.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-base font-semibold"
              style={{ color: "var(--c-text)" }}>{t("comun.modulosCompletados")}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {data.modulosCompletados.map((mod) => (
                <div
                  key={mod.id}
                  className="rounded-xl border p-4"
                  style={{
                    backgroundColor: "var(--c-surface)",
                    borderColor: "var(--c-border)",
                  }}
                >
                  <p className="text-sm font-semibold"
                    style={{ color: "var(--c-text)" }}>
                    {mod.titulo}
                  </p>
                  <p className="text-xs mt-0.5"
                    style={{ color: "var(--c-muted)" }}>
                    {mod.materia}
                  </p>
                  <span
                    className="mt-2 inline-block rounded-full px-2 py-0.5
                      text-xs font-semibold"
                    style={{
                      backgroundColor: "var(--c-primary)",
                      color: "#ffffff",
                      opacity: 0.9,
                    }}
                  >{t("perfilPublico.completado")}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <div className="text-center">
          <Link
            to="/"
            className="text-xs hover:underline"
            style={{ color: "var(--c-muted)" }}
          >{t("comun.virtualBook")}</Link>
        </div>
      </div>
    </div>
  );
}
