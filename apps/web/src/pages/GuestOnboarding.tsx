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
    <main className="flex-1 bg-gray-100">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-12">
        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900">Onboarding de invitado</h1>
          <p className="mt-3 text-sm text-gray-600">
            Tu acceso como invitado está en proceso de validación. Una vez aprobado, podrás ingresar a
            los módulos y funcionalidades protegidas.
          </p>
          <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
            Estado actual: <span className="font-semibold">{statusLabel}</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/register"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Completar alta
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Contactar soporte
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
