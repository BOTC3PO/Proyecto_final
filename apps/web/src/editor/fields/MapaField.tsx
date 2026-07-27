/**
 * editor/fields/MapaField.tsx — subsistema "marcar en el mapa", sobre primitivos.
 *
 * Consolida el chrome del mapa avanzado del editor viejo (PlantillaEditorSchema
 * ~1434-1730) REUTILIZANDO la capa de datos pura:
 *   • mapa (enum) — qué mapa cargar. Se escribe preservando el `encuadre`
 *     (a diferencia de `writeEnumField`, que lo descartaría al cambiar de mapa).
 *   • respuesta (iso / nombre) con `modoRespuesta` — el modo NO es un bloque
 *     propio: se deriva de cuál clave de respuesta existe (`respuesta_iso` →
 *     "iso"; `respuesta_nombre` → "nombre"). El toggle intercambia el bloque.
 *   • encuadre (WO-10) — `mapa.encuadre`: 4 números (oeste, sur, este, norte),
 *     vista bloqueada. Reusa `readEncuadre`/`writeEncuadre` (parseo + validación
 *     geográfica; `null` ⇒ el buffer conserva el texto y marca inválido).
 */
import type { MapaBloque, Plantilla, TextField } from "@vb/vblang";
import { Field, RadioGroup, Radio, Select } from "../../ui";
import BufferedText from "../BufferedText";
import FieldGroup from "../FieldGroup";
import {
  DUMMY_LOC,
  getBlock,
  readEncuadre,
  readRespuestaNombre,
  strLit,
  withBlock,
  withoutBlock,
  writeEncuadre,
  writeRespuestaNombre,
} from "../../components/vblang/plantillaAst";
import {
  readTextField,
  writeTextField,
} from "../../components/vblang/plantillaFields";

/** Opciones del mapa (mismo set que el schema `marcar_mapa`). */
const MAPA_OPCIONES: { value: MapaBloque["nombre"]; label: string }[] = [
  { value: "world_countries", label: "Países del mundo" },
  { value: "world_states_provinces", label: "Provincias / estados (por país)" },
];

/** Descriptor del campo `respuesta_iso` (reusa `read/writeTextField`). */
const RESPUESTA_ISO_FIELD: TextField = {
  kind: "text",
  key: "respuesta_iso",
  label: "Código ISO correcto",
  help: "Para países: ISO A3 (ej. ARG). Para provincias: ISO 3166-2 (ej. AR-C para CABA).",
  required: true,
  block: "respuesta_iso",
};

/** Escribe el `nombre` del mapa preservando el `encuadre` si lo hubiera. */
function writeMapaNombre(p: Plantilla, nombre: MapaBloque["nombre"]): Plantilla {
  const b = getBlock(p, "mapa");
  const next: MapaBloque = b
    ? { ...b, nombre, loc: DUMMY_LOC }
    : { kind: "mapa", nombre, loc: DUMMY_LOC };
  return withBlock(p, next);
}

type ModoRespuesta = "iso" | "nombre";

/** Modo de respuesta derivado de qué clave existe (iso por defecto). */
function readModoRespuesta(p: Plantilla): ModoRespuesta {
  if (getBlock(p, "respuesta_iso")) return "iso";
  if (getBlock(p, "respuesta_nombre")) return "nombre";
  return "iso";
}

/** Pasa a modo iso: quita `respuesta_nombre` y asegura `respuesta_iso`. */
function setModoIso(p: Plantilla): Plantilla {
  let next = withoutBlock(p, "respuesta_nombre");
  if (!getBlock(next, "respuesta_iso")) {
    next = withBlock(next, { kind: "respuesta_iso", expr: strLit(""), loc: DUMMY_LOC });
  }
  return next;
}

/** Pasa a modo nombre: quita `respuesta_iso` y asegura `respuesta_nombre`. */
function setModoNombre(p: Plantilla): Plantilla {
  let next = withoutBlock(p, "respuesta_iso");
  if (!getBlock(next, "respuesta_nombre")) {
    next = withBlock(next, {
      kind: "respuesta_nombre",
      expr: strLit(""),
      loc: DUMMY_LOC,
    });
  }
  return next;
}

export type MapaFieldProps = {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
};

export default function MapaField({ plantilla, onChange }: MapaFieldProps) {
  const mapaNombre = getBlock(plantilla, "mapa")?.nombre ?? MAPA_OPCIONES[0].value;
  const modo = readModoRespuesta(plantilla);

  return (
    <>
      <Field label="Mapa" help="Identificador del mapa a cargar.">
        <Select
          value={mapaNombre}
          onChange={(e) =>
            onChange(writeMapaNombre(plantilla, e.target.value as MapaBloque["nombre"]))
          }
        >
          {MAPA_OPCIONES.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>
      </Field>

      <FieldGroup
        label="Modo de respuesta"
        help="Validar por código ISO o por nombre de país/región."
      >
        <RadioGroup
          aria-label="Modo de respuesta del mapa"
          value={modo}
          onValueChange={(v) =>
            onChange(v === "iso" ? setModoIso(plantilla) : setModoNombre(plantilla))
          }
        >
          <Radio value="iso" label="Por código ISO" />
          <Radio value="nombre" label="Por nombre" />
        </RadioGroup>
      </FieldGroup>

      {modo === "iso" ? (
        <BufferedText
          label={RESPUESTA_ISO_FIELD.label}
          help={RESPUESTA_ISO_FIELD.help}
          value={readTextField(plantilla, RESPUESTA_ISO_FIELD)}
          commit={(text) => {
            const next = writeTextField(plantilla, RESPUESTA_ISO_FIELD, text);
            if (next === null) return false;
            onChange(next);
            return true;
          }}
        />
      ) : (
        <BufferedText
          label="Nombre correcto"
          help="Valida por nombre de país/región (ej.: Argentina), p. ej. para seleccionar provincias por nombre."
          value={readRespuestaNombre(plantilla)}
          commit={(text) => {
            onChange(writeRespuestaNombre(plantilla, text));
            return true;
          }}
        />
      )}

      <BufferedText
        label="Encuadre fijo (vista bloqueada)"
        help="Opcional. 4 números: oeste, sur, este, norte (ej.: -75, -55, -53, -20). Si está, el mapa se ve sin pan/zoom y recortado. Si está vacío, el mapa es interactivo."
        value={readEncuadre(plantilla)}
        errorMessage="Encuadre inválido: 4 números (oeste < este, sur < norte)."
        commit={(text) => {
          const next = writeEncuadre(plantilla, text);
          if (next === null) return false;
          onChange(next);
          return true;
        }}
      />
    </>
  );
}
