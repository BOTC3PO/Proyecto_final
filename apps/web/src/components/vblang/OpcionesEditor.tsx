import { useState } from "react";
import { emitExpr } from "@vb/vblang";
import type {
  Bloque,
  Expr,
  OpcionesBloque,
  OpcionesExplicitasBloque,
  Plantilla,
} from "@vb/vblang";

import { useI18n } from "../../i18n/I18nContext";
interface Props {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}

const DUMMY_LOC = { line: 0, col: 0, endLine: 0, endCol: 0 } as const;

function findBlock<K extends Bloque["kind"]>(
  p: Plantilla,
  kind: K,
): Extract<Bloque, { kind: K }> | undefined {
  return p.bloques.find((b) => b.kind === kind) as
    | Extract<Bloque, { kind: K }>
    | undefined;
}

function withBlock(p: Plantilla, next: Bloque): Plantilla {
  const idx = p.bloques.findIndex((b) => b.kind === next.kind);
  const bloques =
    idx >= 0
      ? p.bloques.map((b, i) => (i === idx ? next : b))
      : [...p.bloques, next];
  return { ...p, bloques };
}

function withoutBlock(p: Plantilla, kind: Bloque["kind"]): Plantilla {
  return { ...p, bloques: p.bloques.filter((b) => b.kind !== kind) };
}

function strLit(value: string): Expr {
  return { kind: "str", value, loc: DUMMY_LOC };
}

export default function OpcionesEditor({ plantilla, onChange }: Props) {
  const { t } = useI18n();
  const opcionesBlock = findBlock(plantilla, "opciones");
  const opcionesExplBlock = findBlock(plantilla, "opciones_explicitas");

  const isExplicit = !!opcionesExplBlock;
  const [confirmSwitch, setConfirmSwitch] = useState(false);

  const cantidad = opcionesBlock?.cantidad ?? 4;

  const handleModeToggle = (toExplicit: boolean) => {
    if (toExplicit && !isExplicit) {
      const n = cantidad;
      const items: Expr[] = Array.from({ length: n }, () => strLit(""));
      let next = withBlock(plantilla, {
        kind: "opciones_explicitas",
        items,
        loc: DUMMY_LOC,
      } satisfies OpcionesExplicitasBloque);
      next = withoutBlock(next, "opciones");
      onChange(next);
    } else if (!toExplicit && isExplicit) {
      const hasNonEmpty = opcionesExplBlock!.items.some(
        (i) => i.kind === "str" && i.value !== "",
      );
      if (hasNonEmpty) {
        setConfirmSwitch(true);
        return;
      }
      doSwitchToCantidad();
    }
  };

  const doSwitchToCantidad = () => {
    const n = opcionesExplBlock?.items.length ?? 4;
    let next = withBlock(plantilla, {
      kind: "opciones",
      cantidad: Math.max(2, Math.min(8, n)),
      loc: DUMMY_LOC,
    } satisfies OpcionesBloque);
    next = withoutBlock(next, "opciones_explicitas");
    onChange(next);
    setConfirmSwitch(false);
  };

  const setCantidad = (n: number) => {
    const clamped = Math.max(2, Math.min(8, n));
    onChange(
      withBlock(plantilla, {
        kind: "opciones",
        cantidad: clamped,
        loc: DUMMY_LOC,
      }),
    );
  };

  const updateExplItem = (idx: number, value: string) => {
    if (!opcionesExplBlock) return;
    const items = opcionesExplBlock.items.map((item, i) =>
      i === idx ? strLit(value) : item,
    );
    onChange(
      withBlock(plantilla, {
        kind: "opciones_explicitas",
        items,
        loc: DUMMY_LOC,
      }),
    );
  };

  const addExplItem = () => {
    if (!opcionesExplBlock) return;
    const items = [...opcionesExplBlock.items, strLit("")];
    onChange(
      withBlock(plantilla, {
        kind: "opciones_explicitas",
        items,
        loc: DUMMY_LOC,
      }),
    );
  };

  const removeExplItem = (idx: number) => {
    if (!opcionesExplBlock || opcionesExplBlock.items.length <= 2) return;
    const items = opcionesExplBlock.items.filter((_, i) => i !== idx);
    onChange(
      withBlock(plantilla, {
        kind: "opciones_explicitas",
        items,
        loc: DUMMY_LOC,
      }),
    );
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2 text-xs">
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="opciones-mode"
            checked={!isExplicit}
            onChange={() => handleModeToggle(false)}
          />{t("generadorSelector.cantidad")}</label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="opciones-mode"
            checked={isExplicit}
            onChange={() => handleModeToggle(true)}
          />{t("opcionesEditor.opcionesExplicitas")}</label>
      </div>

      {!isExplicit && (
        <div>
          <input
            type="number"
            min={2}
            max={8}
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            className="w-20 rounded border border-[var(--c-border,#e2e8f0)] px-2 py-0.5 text-xs"
            data-testid="vblang-form-opciones-cantidad"
          />
        </div>
      )}

      {isExplicit && opcionesExplBlock && (
        <div className="space-y-1">
          {opcionesExplBlock.items.map((item, i) => (
            <div key={i} className="flex items-center gap-1">
              {item.kind === "str" ? (
                <input
                  value={item.value}
                  onChange={(e) => updateExplItem(i, e.target.value)}
                  placeholder={`Opción ${i + 1}`}
                  className="flex-1 rounded border border-[var(--c-border,#e2e8f0)] px-2 py-0.5 text-xs"
                />
              ) : (
                <code className="flex-1 text-xs font-mono text-[var(--c-muted,#64748b)] bg-[#f1f5f9] rounded px-2 py-0.5">
                  {emitExpr(item)}
                </code>
              )}
              <button
                type="button"
                onClick={() => removeExplItem(i)}
                disabled={opcionesExplBlock.items.length <= 2}
                className="text-xs text-red-600 hover:underline disabled:opacity-30"
                aria-label={t("opcionesEditor.quitarOpcion")}
              >
                −
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addExplItem}
            className="text-xs text-[var(--c-primary,#3b82f6)] hover:underline"
          >{t("quizEditorManual.agregarOpcion")}</button>
        </div>
      )}

      {confirmSwitch && (
        <div className="rounded border border-amber-300 bg-amber-50 p-2 text-xs space-y-1">
          <p>{t("opcionesEditor.cambiarAModoCantidadDescartara")}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setConfirmSwitch(false)}
              className="rounded border border-[var(--c-border,#e2e8f0)] px-2 py-0.5 text-xs"
            >{t("comun.cancelar")}</button>
            <button
              type="button"
              onClick={doSwitchToCantidad}
              className="rounded bg-amber-500 px-2 py-0.5 text-xs text-white font-semibold"
            >{t("opcionesEditor.continuar")}</button>
          </div>
        </div>
      )}
    </div>
  );
}
