import { Link } from "react-router-dom";
import { useAuth } from "../auth/use-auth";

export default function GuestOnboarding() {
  const { user } = useAuth();
  const statusLabel =
    user?.guestOnboardingStatus === "aceptado"
      ? "Aceptado"
      : user?.guestOnboardingStatus === "rechazado"
        ? "Rechazado"
        : "Pendiente";

  return (
    <div className="min-h-screen bg-[var(--c-bg)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-4">
        <div>
          <h1 className="text-xl font-semibold text-[var(--c-text)]">
            Acceso como invitado
          </h1>
          <p className="text-sm text-[var(--c-muted)] mt-0.5">
            Tu solicitud está en proceso de validación.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[var(--c-muted)]">Estado actual</p>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              user?.guestOnboardingStatus === 'aceptado'
                ? 'bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]'
                : user?.guestOnboardingStatus === 'rechazado'
                ? 'bg-[color-mix(in_srgb,var(--c-danger)_12%,transparent)] text-[var(--c-danger)]'
                : 'bg-[color-mix(in_srgb,var(--c-warning)_12%,transparent)] text-[var(--c-warning)]'
            }`}>
              {statusLabel}
            </span>
          </div>
          <p className="text-sm text-[var(--c-muted)]">
            Una vez aprobado podrás acceder a los módulos y funcionalidades protegidas.
          </p>
          <div className="flex gap-2 pt-2">
            <Link
              to="/register"
              className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Completar alta
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-[var(--c-border)] px-4 py-2 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
            >
              Contactar soporte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
