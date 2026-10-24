/**
 * Modal para seleccionar una plantilla existente al armar un quiz de módulo
 * (Sprint 10A — Bloque B). Permite buscar por nombre, alternar entre "Mis
 * plantillas" / "Biblioteca", o redirigir a la página de creación.
 *
 * Migrado al átomo ui/Modal (D10): focus-trap, ESC, scroll-lock y
 * retorno de foco vienen gratis del átomo.
 */

import { useEffect, useState, type CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { listPlantillas } from "../../domain/vblang/plantillaApi";
import type {
  PlantillaListItem,
  PlantillaListParams,
} from "../../domain/vblang/plantilla.types";
import { Modal, Button, Input, Spinner, Alert } from "../../ui";

import { useI18n } from "../../i18n/I18nContext";
type Tab = "mias" | "biblioteca";

interface Props {
  onClose: () => void;
  onSelect: (plantilla: PlantillaListItem) => void;
  materiaHint?: string;
  createReturnTo?: string;
}

export default function PlantillaSelectorModal({
  onClose,
  onSelect,
  materiaHint,
  createReturnTo,
}: Props) {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("mias");
  const [q, setQ] = useState("");
  const [items, setItems] = useState<PlantillaListItem[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    setErrorMessage(null);
    const params: PlantillaListParams = {
      q: q || undefined,
      materia: materiaHint || undefined,
      owner: tab === "biblioteca" ? "otros" : "mias",
      // Idem PlantillasIndex: sin esto el selector mostraba sólo matemáticas.
      limit: tab === "biblioteca" ? 200 : undefined,
    };
    listPlantillas(params)
      .then((res) => {
        if (cancelled) return;
        setItems(res.items);
        setStatus("ready");
      })
      .catch((err) => {
        if (cancelled) return;
        setStatus("error");
        setErrorMessage(err instanceof Error ? err.message : t("comun.errorDeCarga"));
      });
    return () => {
      cancelled = true;
    };
  }, [q, materiaHint, tab, t]);

  const handleCreateNew = () => {
    const url = createReturnTo
      ? `/plantillas/nueva?returnTo=${encodeURIComponent(createReturnTo)}`
      : "/plantillas/nueva";
    navigate(url);
  };

  const sectionBorder: CSSProperties = {
    borderBottom: "1px solid var(--c-border)",
  };

  const tabBtn = (active: boolean): CSSProperties => ({
    padding: "var(--space-2) var(--space-3)",
    fontSize: "var(--text-sm)",
    fontWeight: "var(--fw-medium)",
    color: active ? "var(--c-primary)" : "var(--c-muted)",
    background: "none",
    border: "none",
    borderBottom: active ? "2px solid var(--c-primary)" : "2px solid transparent",
    cursor: "pointer",
    fontFamily: "var(--font-sans)",
  });

  return (
    <Modal
      open={true}
      onClose={onClose}
      ariaLabel={t("plantillaSelectorModal.seleccionarPlantillaVblang")}
      size="lg"
      data-testid="plantilla-selector-modal"
      style={{
        padding: 0,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <header style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "var(--space-4)",
        ...sectionBorder,
      }}>
        <h2 style={{
          margin: 0,
          fontSize: "var(--text-lg)",
          fontWeight: "var(--fw-semibold)",
          color: "var(--c-text)",
        }}>{t("plantillaSelectorModal.seleccionarPlantillaVblang")}</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label={t("comun.cerrar")}
          style={{
            background: "none",
            border: "none",
            padding: "var(--space-1)",
            fontSize: "var(--text-sm)",
            color: "var(--c-muted)",
            cursor: "pointer",
            borderRadius: "var(--r-sm)",
          }}
        >
          ✕
        </button>
      </header>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "var(--space-2)", padding: "0 var(--space-4)", ...sectionBorder }}>
        <button type="button" onClick={() => setTab("mias")} style={tabBtn(tab === "mias")}>{t("plantillasIndex.misPlantillas")}</button>
        <button type="button" onClick={() => setTab("biblioteca")} style={tabBtn(tab === "biblioteca")}>{t("plantillasIndex.biblioteca")}</button>
      </div>

      {/* Search */}
      <div style={{ padding: "var(--space-3)", ...sectionBorder }}>
        <Input
          type="search"
          size="sm"
          placeholder={t("plantillaSelectorModal.buscarPorNombre")}
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      {/* List */}
      <div style={{ flex: 1, overflowY: "auto", padding: "var(--space-3)" }}>
        {status === "loading" && (
          <div style={{ display: "flex", justifyContent: "center", padding: "var(--space-4)" }}>
            <Spinner size="md" label={t("plantillaSelectorModal.cargandoPlantillas")} />
          </div>
        )}
        {status === "error" && (
          <Alert variant="danger">{errorMessage}</Alert>
        )}
        {status === "ready" && items.length === 0 && (
          <p style={{
            textAlign: "center",
            padding: "var(--space-6) 0",
            fontSize: "var(--text-sm)",
            color: "var(--c-muted)",
          }}>
            {tab === "biblioteca"
              ? t("plantillaSelectorModal.noHayPlantillasEnLa")
              : t("plantillaSelectorModal.todaviaNoCreastePlantillas")}
          </p>
        )}
        {status === "ready" && items.length > 0 && (
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
            {items.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onSelect(item)}
                  data-testid={`plantilla-option-${item.id}`}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    borderRadius: "var(--r-md)",
                    border: "1px solid var(--c-border)",
                    background: "var(--c-surface)",
                    padding: "var(--space-2) var(--space-3)",
                    cursor: "pointer",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-3)" }}>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <p style={{
                        margin: 0,
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--fw-medium)",
                        color: "var(--c-text)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}>
                        {item.nombre}
                      </p>
                      {item.materia && (
                        <p style={{ margin: 0, fontSize: "var(--text-xs)", color: "var(--c-muted)" }}>
                          {item.materia}
                        </p>
                      )}
                      {item.descripcion && (
                        <p style={{
                          margin: "var(--space-1) 0 0",
                          fontSize: "var(--text-xs)",
                          color: "var(--c-muted)",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical" as const,
                          overflow: "hidden",
                        }}>
                          {item.descripcion}
                        </p>
                      )}
                    </div>
                    <span style={{
                      flexShrink: 0,
                      borderRadius: "var(--r-full, 9999px)",
                      background: "var(--c-surface-3)",
                      padding: "2px var(--space-2)",
                      fontSize: "10px",
                      color: "var(--c-muted)",
                    }}>
                      v{item.version}
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "var(--space-3)",
        borderTop: "1px solid var(--c-border)",
      }}>
        <button
          type="button"
          onClick={handleCreateNew}
          data-testid="plantilla-selector-create-new"
          style={{
            background: "none",
            border: "none",
            fontSize: "var(--text-sm)",
            fontWeight: "var(--fw-medium)",
            color: "var(--c-primary)",
            cursor: "pointer",
            fontFamily: "var(--font-sans)",
          }}
        >{t("plantillaSelectorModal.crearNuevaPlantilla")}</button>
        <Button variant="ghost" size="sm" onClick={onClose}>{t("comun.cancelar")}</Button>
      </footer>
    </Modal>
  );
}
