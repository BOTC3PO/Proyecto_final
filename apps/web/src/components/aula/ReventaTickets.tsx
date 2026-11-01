/**
 * J8 — el alumno ofrece un ticket de examen sin usar a un compañero del aula, y ve las ofertas pendientes
 * (las que hizo y las que le hicieron). Los compañeros aparecen con nombre e inicial del apellido.
 * No se muestra nada si no tiene tickets para ofrecer ni ofertas pendientes.
 */
import { useCallback, useEffect, useState } from "react";
import { useI18n } from "../../i18n/I18nContext";
import { interpolar } from "../../i18n/interpolar";
import {
  aceptarOferta,
  cancelarOferta,
  fetchOfertasReventa,
  fetchOpcionesReventa,
  ofrecerTicket,
  type OfertaReventa,
  type OpcionesReventa
} from "../../services/reventa";

const inputCls = "mt-1 w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] px-2 py-1.5 text-xs text-[var(--c-text)]";

export default function ReventaTickets({ aulaId, className = "" }: { aulaId: string; className?: string }) {
  const { t } = useI18n();
  const [opciones, setOpciones] = useState<OpcionesReventa | null>(null);
  const [ofertas, setOfertas] = useState<OfertaReventa[]>([]);
  const [form, setForm] = useState({ moduloId: "", receptorId: "", precio: "" });
  const [msg, setMsg] = useState<{ ok: boolean; texto: string } | null>(null);
  const [ocupado, setOcupado] = useState(false);

  const cargar = useCallback(async () => {
    try {
      const [o, lista] = await Promise.all([fetchOpcionesReventa(aulaId), fetchOfertasReventa(aulaId)]);
      if (!Array.isArray(o?.modulos) || !Array.isArray(o?.companeros)) {
        setOpciones(null);
        return;
      }
      setOpciones(o);
      setOfertas(lista);
      setForm((f) => ({
        moduloId: f.moduloId || o.modulos[0]?.moduloId || "",
        receptorId: f.receptorId || o.companeros[0]?.id || "",
        precio: f.precio
      }));
    } catch {
      setOpciones(null); // no es alumno del aula o no hay economía: el bloque no aparece
    }
  }, [aulaId]);

  useEffect(() => { void cargar(); }, [cargar]);

  const accion = async (fn: () => Promise<unknown>, ok: string) => {
    setOcupado(true);
    setMsg(null);
    try {
      await fn();
      setMsg({ ok: true, texto: ok });
      await cargar();
    } catch (err) {
      setMsg({ ok: false, texto: err instanceof Error ? err.message : t("comun.noSePudoGuardarCambio") });
    } finally {
      setOcupado(false);
    }
  };

  if (!opciones || (opciones.modulos.length === 0 && ofertas.length === 0)) return null;
  const precio = Number(form.precio);
  const neto = precio > 0 ? Math.round(precio * (1 - opciones.comisionPorcentaje / 100) * 100) / 100 : 0;

  return (
    <section className={`space-y-3 ${className}`} aria-label={t("reventa.titulo")}>
      <h3 className="text-sm font-semibold text-[var(--c-text)]">{t("reventa.titulo")}</h3>
      {opciones.modulos.length > 0 && (
        <form
          className="space-y-2"
          onSubmit={(e) => {
            e.preventDefault();
            void accion(() => ofrecerTicket({ aulaId, moduloId: form.moduloId, receptorId: form.receptorId, precio }), t("reventa.ofertaEnviada"));
          }}
        >
          <p className="text-xs text-[var(--c-muted)]">{interpolar(t("reventa.ayuda"), { comision: opciones.comisionPorcentaje })}</p>
          {opciones.companeros.length === 0 ? (
            <p className="text-xs text-[var(--c-muted)]">{t("reventa.sinCompaneros")}</p>
          ) : (
            <>
              <label className="block text-xs text-[var(--c-muted)]">
                {t("reventa.modulo")}
                <select value={form.moduloId} onChange={(e) => setForm({ ...form, moduloId: e.target.value })} className={inputCls}>
                  {opciones.modulos.map((m) => (
                    <option key={m.moduloId} value={m.moduloId}>
                      {m.titulo} ({interpolar(t("reventa.libres"), { n: m.libres - m.ofertasPendientes })})
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-xs text-[var(--c-muted)]">
                {t("reventa.companero")}
                <select value={form.receptorId} onChange={(e) => setForm({ ...form, receptorId: e.target.value })} className={inputCls}>
                  {opciones.companeros.map((c) => <option key={c.id} value={c.id}>{c.nombre}</option>)}
                </select>
              </label>
              <label className="block text-xs text-[var(--c-muted)]">
                {t("reventa.precio")}
                <input type="number" min={1} step="1" required value={form.precio}
                  onChange={(e) => setForm({ ...form, precio: e.target.value })} className={inputCls} />
              </label>
              {neto > 0 && <p className="text-xs text-[var(--c-muted)]">{interpolar(t("reventa.recibis"), { neto })}</p>}
              <button type="submit" disabled={ocupado || !(precio > 0) || !form.receptorId}
                className="w-full rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-50">
                {t("reventa.ofrecer")}
              </button>
            </>
          )}
        </form>
      )}
      {ofertas.length > 0 && (
        <div className="space-y-2 border-t border-[var(--c-border)] pt-2">
          <p className="text-xs font-medium text-[var(--c-text)]">{t("reventa.pendientes")}</p>
          {ofertas.map((o) => (
            <div key={o.id} className="space-y-1 rounded-lg border border-[var(--c-border)] p-2 text-xs text-[var(--c-text)]">
              <p>
                {interpolar(t(o.soyVendedor ? "reventa.leOfreciste" : "reventa.teOfrece"), {
                  nombre: o.contraparte,
                  modulo: o.moduloTitulo,
                  precio: o.monto
                })}
              </p>
              <div className="flex gap-2">
                {!o.soyVendedor && (
                  <button type="button" disabled={ocupado} onClick={() => void accion(() => aceptarOferta(o.id), t("reventa.aceptada"))}
                    className="rounded-lg bg-[var(--c-primary)] px-2 py-1 font-semibold text-white disabled:opacity-50">
                    {t("reventa.aceptar")}
                  </button>
                )}
                <button type="button" disabled={ocupado} onClick={() => void accion(() => cancelarOferta(o.id), t("reventa.cancelada"))}
                  className="rounded-lg border border-[var(--c-border-strong)] px-2 py-1 font-semibold disabled:opacity-50">
                  {o.soyVendedor ? t("reventa.cancelar") : t("reventa.rechazar")}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {msg && <p role={msg.ok ? "status" : "alert"} className={`text-xs ${msg.ok ? "text-[var(--c-success)]" : "text-[var(--c-danger)]"}`}>{msg.texto}</p>}
    </section>
  );
}
