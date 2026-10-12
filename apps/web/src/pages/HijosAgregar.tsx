import { useState, type FormEvent } from "react";
import { ApiError, apiPost } from "../lib/api";
import { useI18n } from "../i18n/I18nContext";

/**
 * K8 — la familia vincula a su hijo con el CÓDIGO DE INVITACIÓN que le da la escuela (uno por alumno, de un
 * solo uso). Ya no se puede vincular a un menor por su nombre de usuario.
 */
export default function HijosAgregar() {
  const { t } = useI18n();
  const [codigo, setCodigo] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  const mensajeDe = (err: unknown): string => {
    if (err instanceof ApiError) {
      try {
        return JSON.parse(err.message)?.error ?? err.message;
      } catch {
        return err.message;
      }
    }
    return err instanceof Error ? err.message : "No se pudo canjear el código";
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOk(false);
    if (codigo.replace(/[^a-zA-Z0-9]/g, "").length < 10) {
      setError("El código tiene 10 letras y números (por ejemplo ABCDE-FGHJK).");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      await apiPost<{ ok: boolean }>("/api/hijos/canjear", { codigo });
      setOk(true);
      setCodigo("");
    } catch (err) {
      setError(mensajeDe(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="flex-1 bg-[var(--c-bg)]">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
          <div className="px-6 py-4 border-b border-[var(--c-border)]">
            <h1 className="text-xl font-semibold text-[var(--c-text)]">{t("nav.agregarHijo")}</h1>
          </div>
          <form className="p-6 sm:p-8 space-y-5" onSubmit={onSubmit} noValidate>
            <p className="text-sm text-[var(--c-muted)]">
              Pedile a la escuela el <strong>código de invitación</strong> de tu hijo o hija. Cada código sirve para un
              solo alumno, se usa una vez y vence a los 7 días.
            </p>
            <div>
              <label htmlFor="codigo" className="block text-sm font-medium text-[var(--c-text)] mb-1">Código de invitación</label>
              <input
                id="codigo" name="codigo" type="text" value={codigo} autoComplete="off" autoCapitalize="characters"
                placeholder="ABCDE-FGHJK" maxLength={16}
                onChange={(e) => { setCodigo(e.target.value.toUpperCase()); setError(null); setOk(false); }}
                className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm font-mono tracking-widest focus:outline-none focus:border-[var(--c-primary)]"
              />
            </div>
            {error && <p role="alert" className="text-sm text-[var(--c-danger)]">{error}</p>}
            {ok && <p role="status" className="text-sm text-[var(--c-success)]">Listo: ya podés ver el avance de tu hijo o hija.</p>}
            <div className="flex justify-end">
              <button
                type="submit" disabled={saving}
                className="rounded-xl bg-[var(--c-primary)] px-5 py-2 text-white text-sm font-semibold hover:opacity-90 disabled:opacity-60 transition-opacity"
              >
                {saving ? "Verificando…" : "Vincular a mi hijo"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
