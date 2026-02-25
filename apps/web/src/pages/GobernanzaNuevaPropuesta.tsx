import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { createProposal, PROPOSAL_TYPE_LABELS } from "../services/governance";

type ProposalType =
  | "ADD_PROMPT"
  | "UPDATE_PROMPT"
  | "REMOVE_PROMPT"
  | "SET_PROMPT_STATUS"
  | "CREATE_GENERATOR"
  | "UPDATE_GENERATOR"
  | "SET_GENERATOR_STATUS"
  | "UPDATE_CONFIG"
  | "SYSTEM_CHANGE";

const SUBJECTS = ["matematicas", "fisica", "quimica", "economia"];

const GOVERNANCE_TYPES: { value: ProposalType; label: string; description: string }[] = [
  {
    value: "UPDATE_GENERATOR",
    label: "Modificar generador",
    description: "Cambia el enunciado y/o los límites de parámetros de un generador de ejercicios.",
  },
  {
    value: "CREATE_GENERATOR",
    label: "Crear generador",
    description: "Propone un nuevo generador de ejercicios para una materia y tema.",
  },
  {
    value: "SET_GENERATOR_STATUS",
    label: "Activar / desactivar generador",
    description: "Habilita o deshabilita un generador sin modificar su contenido.",
  },
  {
    value: "ADD_PROMPT",
    label: "Agregar enunciado",
    description: "Agrega un nuevo enunciado de pregunta, tarea o anuncio a un módulo.",
  },
  {
    value: "UPDATE_PROMPT",
    label: "Modificar enunciado",
    description: "Actualiza el texto o tipo de un enunciado existente (crea nueva versión).",
  },
  {
    value: "REMOVE_PROMPT",
    label: "Eliminar enunciado",
    description: "Marca un enunciado como deprecado o eliminado.",
  },
  {
    value: "SET_PROMPT_STATUS",
    label: "Cambiar estado de enunciado",
    description: "Cambia el estado de un enunciado (ACTIVE, INACTIVE, ARCHIVED, etc.).",
  },
  {
    value: "UPDATE_CONFIG",
    label: "Actualizar configuración de módulo",
    description: "Modifica los ítems de configuración de un módulo específico.",
  },
  {
    value: "SYSTEM_CHANGE",
    label: "Cambio de sistema",
    description: "Propone una modificación en la configuración global del sistema (nivel gobernanza).",
  },
];

function parseJsonField(value: string): { ok: true; data: unknown } | { ok: false; error: string } {
  if (!value.trim()) return { ok: true, data: undefined };
  try {
    return { ok: true, data: JSON.parse(value) };
  } catch {
    return { ok: false, error: "JSON inválido" };
  }
}

// ─── Forms per proposal type ─────────────────────────────────────────────────

function UpdateGeneratorForm({
  payload,
  setPayload,
}: {
  payload: Record<string, unknown>;
  setPayload: (p: Record<string, unknown>) => void;
}) {
  const [enunciadoStr, setEnunciadoStr] = useState(
    payload.enunciado !== undefined ? JSON.stringify(payload.enunciado, null, 2) : ""
  );
  const [limitsStr, setLimitsStr] = useState(
    payload.limits !== undefined ? JSON.stringify(payload.limits, null, 2) : ""
  );
  const [jsonError, setJsonError] = useState<string | null>(null);

  const update = (field: "enunciado" | "limits", raw: string) => {
    if (field === "enunciado") setEnunciadoStr(raw);
    else setLimitsStr(raw);

    const enunciadoResult = parseJsonField(field === "enunciado" ? raw : enunciadoStr);
    const limitsResult = parseJsonField(field === "limits" ? raw : limitsStr);

    if (!enunciadoResult.ok) { setJsonError(`Enunciado: ${enunciadoResult.error}`); return; }
    if (!limitsResult.ok) { setJsonError(`Límites: ${limitsResult.error}`); return; }
    setJsonError(null);

    const next: Record<string, unknown> = { ...payload };
    if (enunciadoResult.data !== undefined) next.enunciado = enunciadoResult.data;
    if (limitsResult.data !== undefined) next.limits = limitsResult.data;
    setPayload(next);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Materia *</label>
          <select
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={(payload.subject as string) ?? ""}
            onChange={(e) => setPayload({ ...payload, subject: e.target.value })}
          >
            <option value="">Seleccionar materia...</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Tema *</label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="ej: ecuaciones_lineales"
            value={(payload.topic as string) ?? ""}
            onChange={(e) => setPayload({ ...payload, topic: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">
          Enunciado (JSON) — dejar vacío para no cambiar
        </label>
        <textarea
          rows={6}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder='{ "template": "Resolvé: {{a}}x + {{b}} = 0", "variables": {...} }'
          value={enunciadoStr}
          onChange={(e) => update("enunciado", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">
          Límites / parámetros (JSON) — dejar vacío para no cambiar
        </label>
        <textarea
          rows={6}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder='{ "a": { "min": 1, "max": 10 }, "b": { "min": -5, "max": 5 } }'
          value={limitsStr}
          onChange={(e) => update("limits", e.target.value)}
        />
      </div>
      {jsonError && <p className="text-xs text-red-500">{jsonError}</p>}
    </div>
  );
}

function CreateGeneratorForm({
  payload,
  setPayload,
}: {
  payload: Record<string, unknown>;
  setPayload: (p: Record<string, unknown>) => void;
}) {
  const [enunciadoStr, setEnunciadoStr] = useState(
    payload.enunciado !== undefined ? JSON.stringify(payload.enunciado, null, 2) : ""
  );
  const [limitsStr, setLimitsStr] = useState(
    payload.limits !== undefined ? JSON.stringify(payload.limits, null, 2) : ""
  );
  const [jsonError, setJsonError] = useState<string | null>(null);

  const update = (field: "enunciado" | "limits", raw: string) => {
    if (field === "enunciado") setEnunciadoStr(raw);
    else setLimitsStr(raw);

    const enunciadoResult = parseJsonField(field === "enunciado" ? raw : enunciadoStr);
    const limitsResult = parseJsonField(field === "limits" ? raw : limitsStr);

    if (!enunciadoResult.ok) { setJsonError(`Enunciado: ${enunciadoResult.error}`); return; }
    if (!limitsResult.ok) { setJsonError(`Límites: ${limitsResult.error}`); return; }
    setJsonError(null);

    const next: Record<string, unknown> = { ...payload };
    if (enunciadoResult.data !== undefined) next.enunciado = enunciadoResult.data;
    if (limitsResult.data !== undefined) next.limits = limitsResult.data;
    setPayload(next);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Materia *</label>
          <select
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={(payload.subject as string) ?? ""}
            onChange={(e) => setPayload({ ...payload, subject: e.target.value })}
          >
            <option value="">Seleccionar materia...</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Tema *</label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="ej: integrales_definidas"
            value={(payload.topic as string) ?? ""}
            onChange={(e) => setPayload({ ...payload, topic: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Enunciado (JSON) *</label>
        <textarea
          rows={6}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder='{ "template": "Calculá la integral de {{f}} entre {{a}} y {{b}}" }'
          value={enunciadoStr}
          onChange={(e) => update("enunciado", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Límites / parámetros (JSON) — opcional</label>
        <textarea
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder='{ "a": { "min": 0, "max": 5 } }'
          value={limitsStr}
          onChange={(e) => update("limits", e.target.value)}
        />
      </div>
      {jsonError && <p className="text-xs text-red-500">{jsonError}</p>}
    </div>
  );
}

function SetGeneratorStatusForm({
  payload,
  setPayload,
}: {
  payload: Record<string, unknown>;
  setPayload: (p: Record<string, unknown>) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Materia *</label>
          <select
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={(payload.subject as string) ?? ""}
            onChange={(e) => setPayload({ ...payload, subject: e.target.value })}
          >
            <option value="">Seleccionar materia...</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Tema *</label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="ej: derivadas"
            value={(payload.topic as string) ?? ""}
            onChange={(e) => setPayload({ ...payload, topic: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Estado *</label>
        <div className="flex gap-3">
          {["ACTIVE", "INACTIVE"].map((s) => (
            <label key={s} className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="radio"
                name="gen-status"
                value={s}
                checked={(payload.status as string) === s}
                onChange={() => setPayload({ ...payload, status: s })}
              />
              {s === "ACTIVE" ? "Activo" : "Inactivo"}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function AddPromptForm({
  payload,
  setPayload,
}: {
  payload: Record<string, unknown>;
  setPayload: (p: Record<string, unknown>) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Tipo de objetivo *</label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="ej: MODULE"
            value={(payload.targetType as string) ?? ""}
            onChange={(e) => setPayload({ ...payload, targetType: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">ID del objetivo *</label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="ej: uuid del módulo"
            value={(payload.targetId as string) ?? ""}
            onChange={(e) => setPayload({ ...payload, targetId: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Tipo de enunciado *</label>
        <select
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={(payload.kind as string) ?? "QUESTION"}
          onChange={(e) => setPayload({ ...payload, kind: e.target.value })}
        >
          <option value="QUESTION">Pregunta (QUESTION)</option>
          <option value="TASK">Tarea (TASK)</option>
          <option value="ANNOUNCEMENT">Anuncio (ANNOUNCEMENT)</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Título *</label>
        <input
          type="text"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Título del enunciado"
          value={(payload.title as string) ?? ""}
          onChange={(e) => setPayload({ ...payload, title: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Cuerpo del enunciado *</label>
        <textarea
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Texto completo del enunciado o pregunta..."
          value={(payload.bodyText as string) ?? ""}
          onChange={(e) => setPayload({ ...payload, bodyText: e.target.value })}
        />
      </div>
    </div>
  );
}

function UpdatePromptForm({
  payload,
  setPayload,
}: {
  payload: Record<string, unknown>;
  setPayload: (p: Record<string, unknown>) => void;
}) {
  const updates = (payload.updates as Record<string, string>) ?? {};
  const setUpdate = (key: string, val: string) =>
    setPayload({ ...payload, updates: { ...updates, [key]: val } });

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">ID del enunciado *</label>
        <input
          type="text"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="UUID del enunciado a modificar"
          value={(payload.promptId as string) ?? ""}
          onChange={(e) => setPayload({ ...payload, promptId: e.target.value })}
        />
      </div>
      <p className="text-xs text-slate-500">Dejá en blanco los campos que no querés cambiar.</p>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Nuevo título</label>
        <input
          type="text"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={updates.title ?? ""}
          onChange={(e) => setUpdate("title", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Nuevo cuerpo del enunciado</label>
        <textarea
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={updates.bodyText ?? ""}
          onChange={(e) => setUpdate("bodyText", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Nuevo tipo</label>
        <select
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={updates.kind ?? ""}
          onChange={(e) => setUpdate("kind", e.target.value)}
        >
          <option value="">Sin cambio</option>
          <option value="QUESTION">Pregunta (QUESTION)</option>
          <option value="TASK">Tarea (TASK)</option>
          <option value="ANNOUNCEMENT">Anuncio (ANNOUNCEMENT)</option>
        </select>
      </div>
    </div>
  );
}

function RemovePromptForm({
  payload,
  setPayload,
}: {
  payload: Record<string, unknown>;
  setPayload: (p: Record<string, unknown>) => void;
}) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">ID del enunciado *</label>
        <input
          type="text"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="UUID del enunciado a eliminar"
          value={(payload.promptId as string) ?? ""}
          onChange={(e) => setPayload({ ...payload, promptId: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Acción *</label>
        <div className="flex gap-4">
          {["DEPRECATED", "REMOVED"].map((s) => (
            <label key={s} className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="radio"
                name="remove-status"
                value={s}
                checked={(payload.status as string) === s}
                onChange={() => setPayload({ ...payload, status: s })}
              />
              {s === "DEPRECATED" ? "Deprecar (aún visible, marcado como obsoleto)" : "Eliminar permanentemente"}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function SetPromptStatusForm({
  payload,
  setPayload,
}: {
  payload: Record<string, unknown>;
  setPayload: (p: Record<string, unknown>) => void;
}) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">ID del enunciado *</label>
        <input
          type="text"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="UUID del enunciado"
          value={(payload.promptId as string) ?? ""}
          onChange={(e) => setPayload({ ...payload, promptId: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Nuevo estado *</label>
        <select
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={(payload.status as string) ?? ""}
          onChange={(e) => setPayload({ ...payload, status: e.target.value })}
        >
          <option value="">Seleccionar estado...</option>
          <option value="ACTIVE">ACTIVE — Activo</option>
          <option value="INACTIVE">INACTIVE — Inactivo</option>
          <option value="ARCHIVED">ARCHIVED — Archivado</option>
          <option value="DEPRECATED">DEPRECATED — Deprecado</option>
          <option value="REMOVED">REMOVED — Eliminado</option>
        </select>
      </div>
    </div>
  );
}

function UpdateConfigForm({
  payload,
  setPayload,
}: {
  payload: Record<string, unknown>;
  setPayload: (p: Record<string, unknown>) => void;
}) {
  const [itemsStr, setItemsStr] = useState(
    Array.isArray(payload.items) ? JSON.stringify(payload.items, null, 2) : ""
  );
  const [jsonError, setJsonError] = useState<string | null>(null);

  const handleItems = (raw: string) => {
    setItemsStr(raw);
    if (!raw.trim()) { setJsonError(null); setPayload({ ...payload, items: [] }); return; }
    try {
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) { setJsonError("Debe ser un array JSON"); return; }
      setJsonError(null);
      setPayload({ ...payload, items: parsed });
    } catch {
      setJsonError("JSON inválido");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">ID de configuración *</label>
        <input
          type="text"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="ej: módulo UUID"
          value={(payload.id as string) ?? ""}
          onChange={(e) => setPayload({ ...payload, id: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Ítems de configuración (array JSON) *</label>
        <textarea
          rows={6}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder='[{ "key": "maxAttempts", "value": 3 }]'
          value={itemsStr}
          onChange={(e) => handleItems(e.target.value)}
        />
        {jsonError && <p className="mt-1 text-xs text-red-500">{jsonError}</p>}
      </div>
    </div>
  );
}

function SystemChangeForm({
  payload,
  setPayload,
}: {
  payload: Record<string, unknown>;
  setPayload: (p: Record<string, unknown>) => void;
}) {
  const [patchStr, setPatchStr] = useState(
    payload.patch !== undefined ? JSON.stringify(payload.patch, null, 2) : ""
  );
  const [jsonError, setJsonError] = useState<string | null>(null);

  const handlePatch = (raw: string) => {
    setPatchStr(raw);
    if (!raw.trim()) { setJsonError(null); setPayload({ ...payload, patch: undefined }); return; }
    try {
      setPayload({ ...payload, patch: JSON.parse(raw) });
      setJsonError(null);
    } catch {
      setJsonError("JSON inválido");
    }
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-700">
        Esta propuesta es de nivel <strong>GOBERNANZA</strong> y requiere aprobación con reglas más estrictas.
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Clave de configuración</label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="ej: max_students_per_class"
            value={(payload.key as string) ?? ""}
            onChange={(e) => setPayload({ ...payload, key: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Valor</label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nuevo valor"
            value={(payload.value as string) ?? ""}
            onChange={(e) => setPayload({ ...payload, value: e.target.value })}
          />
        </div>
      </div>
      <p className="text-xs text-slate-500">O usá un parche completo (reemplaza clave/valor individual):</p>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Parche (objeto JSON)</label>
        <textarea
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder='{ "featureFlag": true, "maxRetries": 5 }'
          value={patchStr}
          onChange={(e) => handlePatch(e.target.value)}
        />
        {jsonError && <p className="mt-1 text-xs text-red-500">{jsonError}</p>}
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function GobernanzaNuevaPropuesta() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState<ProposalType | "">("");
  const [payload, setPayload] = useState<Record<string, unknown>>({});
  const [rationale, setRationale] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isStaff =
    user?.role === "ADMIN" || user?.role === "DIRECTIVO" || user?.role === "TEACHER";

  if (!isStaff) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16 text-center">
        <p className="text-sm text-red-500">No tenés permiso para crear propuestas de gobernanza.</p>
        <Link to="/gobernanza" className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline">
          Volver a gobernanza
        </Link>
      </main>
    );
  }

  // Determine targetType and targetId from payload fields for generator proposals
  const resolveTarget = (): { targetType: string; targetId: string } => {
    if (
      selectedType === "UPDATE_GENERATOR" ||
      selectedType === "CREATE_GENERATOR" ||
      selectedType === "SET_GENERATOR_STATUS"
    ) {
      const subject = (payload.subject as string) ?? "";
      const topic = (payload.topic as string) ?? "";
      return {
        targetType: "MODULE_GENERATOR",
        targetId: subject && topic ? `${subject}/${topic}` : subject || topic || "unknown",
      };
    }
    if (
      selectedType === "ADD_PROMPT" ||
      selectedType === "UPDATE_PROMPT" ||
      selectedType === "REMOVE_PROMPT" ||
      selectedType === "SET_PROMPT_STATUS"
    ) {
      return {
        targetType: (payload.targetType as string) || "PROMPT",
        targetId: (payload.targetId as string) || (payload.promptId as string) || "unknown",
      };
    }
    if (selectedType === "UPDATE_CONFIG") {
      return { targetType: "MODULE", targetId: (payload.id as string) || "unknown" };
    }
    if (selectedType === "SYSTEM_CHANGE") {
      return { targetType: "SYSTEM_CONFIG", targetId: "global" };
    }
    return { targetType: "UNKNOWN", targetId: "unknown" };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType || !user?.id) return;
    setSubmitting(true);
    setSubmitError(null);

    const { targetType, targetId } = resolveTarget();

    try {
      const proposal = await createProposal({
        targetType,
        targetId,
        proposalType: selectedType,
        payload,
        createdBy: user.id,
        rationale: rationale.trim() || undefined,
      });
      navigate(`/gobernanza/propuestas/${proposal.id}`);
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "Error al crear la propuesta");
    } finally {
      setSubmitting(false);
    }
  };

  const renderPayloadForm = () => {
    switch (selectedType) {
      case "UPDATE_GENERATOR":
        return <UpdateGeneratorForm payload={payload} setPayload={setPayload} />;
      case "CREATE_GENERATOR":
        return <CreateGeneratorForm payload={payload} setPayload={setPayload} />;
      case "SET_GENERATOR_STATUS":
        return <SetGeneratorStatusForm payload={payload} setPayload={setPayload} />;
      case "ADD_PROMPT":
        return <AddPromptForm payload={payload} setPayload={setPayload} />;
      case "UPDATE_PROMPT":
        return <UpdatePromptForm payload={payload} setPayload={setPayload} />;
      case "REMOVE_PROMPT":
        return <RemovePromptForm payload={payload} setPayload={setPayload} />;
      case "SET_PROMPT_STATUS":
        return <SetPromptStatusForm payload={payload} setPayload={setPayload} />;
      case "UPDATE_CONFIG":
        return <UpdateConfigForm payload={payload} setPayload={setPayload} />;
      case "SYSTEM_CHANGE":
        return <SystemChangeForm payload={payload} setPayload={setPayload} />;
      default:
        return null;
    }
  };

  const selectedInfo = GOVERNANCE_TYPES.find((t) => t.value === selectedType);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500">
        <Link to="/gobernanza" className="hover:text-blue-600 hover:underline">
          Gobernanza
        </Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">Nueva propuesta</span>
      </nav>

      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-slate-900">Nueva propuesta</h1>
        <p className="text-sm text-slate-600">
          La propuesta quedará abierta para que directivos, docentes y administradores puedan votar.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Type selector */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-700 mb-3">Tipo de propuesta *</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {GOVERNANCE_TYPES.map(({ value, label, description }) => (
              <label
                key={value}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition-all ${
                  selectedType === value
                    ? "border-blue-400 bg-blue-50 ring-1 ring-blue-300"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <input
                  type="radio"
                  name="proposalType"
                  value={value}
                  checked={selectedType === value}
                  onChange={() => {
                    setSelectedType(value);
                    setPayload({});
                  }}
                  className="mt-0.5"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-800">{label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{description}</p>
                </div>
              </label>
            ))}
          </div>
        </section>

        {/* Payload form */}
        {selectedType && (
          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-slate-700 mb-3">
              {selectedInfo?.label ?? PROPOSAL_TYPE_LABELS[selectedType] ?? selectedType}
            </h2>
            {renderPayloadForm()}
          </section>
        )}

        {/* Rationale */}
        {selectedType && (
          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-slate-700 mb-1">Justificación</h2>
            <p className="text-xs text-slate-500 mb-3">
              Explicá por qué proponés este cambio. Una buena justificación facilita la aprobación.
            </p>
            <textarea
              rows={3}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ej: El límite actual de parámetros no cubre los ejercicios de nivel avanzado..."
              value={rationale}
              onChange={(e) => setRationale(e.target.value)}
            />
          </section>
        )}

        {submitError && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {submitError}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={!selectedType || submitting}
            className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Enviando..." : "Crear propuesta"}
          </button>
          <Link
            to="/gobernanza"
            className="text-sm font-semibold text-slate-500 hover:text-slate-700 hover:underline"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </main>
  );
}
