import { useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import { fetchEnterpriseMensajes, type EnterpriseMensaje } from "../services/enterprise";

const resolveMessageId = (message: EnterpriseMensaje, index: number) =>
  message.id ?? message._id ?? `mensaje-${index}`;

const resolveMessageContent = (message: EnterpriseMensaje) =>
  message.content ?? message.contenido ?? message.message ?? "Sin contenido disponible.";

const resolveMessageReason = (message: EnterpriseMensaje) => message.motivo ?? message.reason;

const resolveReporter = (message: EnterpriseMensaje) =>
  message.reporterName ?? message.reporter ?? message.userName ?? message.user;

const resolveCreatedAt = (message: EnterpriseMensaje) => message.createdAt ?? message.created_at;

export default function EnterpriseMensajes() {
  const { user } = useAuth();
  const [mensajes, setMensajes] = useState<EnterpriseMensaje[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchEnterpriseMensajes()
      .then((data) => {
        if (!active) return;
        setMensajes(data.items ?? []);
        setError(null);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [user?.id]);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Mensajes reportados</h1>
        <p className="text-base text-slate-600">
          Supervisa los mensajes reportados por la comunidad y su estado actual.
        </p>
      </header>

      <section className="space-y-4">
        {loading && <p className="text-sm text-slate-500">Cargando mensajes...</p>}
        {error && <p className="text-sm text-red-500">Error: {error}</p>}
        {!loading && !error && mensajes.length === 0 && (
          <p className="text-sm text-slate-500">No hay mensajes reportados.</p>
        )}
        {!loading &&
          !error &&
          mensajes.map((message, index) => {
            const createdAt = resolveCreatedAt(message);
            const reporter = resolveReporter(message);
            const reason = resolveMessageReason(message);
            return (
              <article
                key={resolveMessageId(message, index)}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-sm font-semibold text-slate-900">Mensaje reportado</h2>
                  {message.status && (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {message.status}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-600">{resolveMessageContent(message)}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">
                  {reason && <span>Motivo: {reason}</span>}
                  {reporter && <span>Reportado por: {reporter}</span>}
                  {createdAt && (
                    <span>Fecha: {new Date(createdAt).toLocaleDateString("es-ES")}</span>
                  )}
                </div>
              </article>
            );
          })}
      </section>
    </main>
  );
}
