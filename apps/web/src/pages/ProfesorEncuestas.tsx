import { useEffect, useMemo, useState } from "react";
import type { Survey, SurveyStatus, SurveyType } from "../services/encuestas";
import {
  createSurvey,
  deleteSurvey,
  fetchSurveyDefaults,
  fetchSurveys,
  updateSurvey
} from "../services/encuestas";
import { fetchClassrooms } from "../services/aulas";
import type { Classroom } from "../domain/classroom/classroom.types";

const toLocalInputValue = (date: Date) => date.toISOString().slice(0, 16);

export default function ProfesorEncuestas() {
  const [items, setItems] = useState<Survey[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [classroomId, setClassroomId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<SurveyType>("normal");
  const [startAt, setStartAt] = useState(toLocalInputValue(new Date()));
  const [endAt, setEndAt] = useState(toLocalInputValue(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)));
  const [showResultsBeforeClose, setShowResultsBeforeClose] = useState(false);
  const [showResultsRealtime, setShowResultsRealtime] = useState(false);
  const [status, setStatus] = useState<SurveyStatus>("activa");
  const [maxOptions, setMaxOptions] = useState<number | "">("");
  const [options, setOptions] = useState<string[]>([]);

  const canSubmit = useMemo(() => {
    return (
      classroomId.trim().length > 0 &&
      title.trim().length > 0 &&
      description.trim().length > 0 &&
      options.filter((option) => option.trim().length > 0).length >= 2 &&
      startAt.length > 0 &&
      endAt.length > 0
    );
  }, [title, description, options, startAt, endAt]);

  const refresh = async (targetClassroomId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetchSurveys(targetClassroomId);
      setItems(response.items);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudieron cargar las encuestas.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const defaults = await fetchSurveyDefaults();
        setOptions(defaults.defaultOptions);
        const response = await fetchClassrooms();
        setClassrooms(response.items);
        if (response.items.length > 0) {
          setClassroomId((prev) => prev || response.items[0].id);
        } else {
          setItems([]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "No se pudieron cargar las aulas.");
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  useEffect(() => {
    if (classroomId) {
      refresh(classroomId);
    }
  }, [classroomId]);

  const handleOptionChange = (index: number, value: string) => {
    setOptions((prev) => prev.map((option, idx) => (idx === index ? value : option)));
  };

  const handleAddOption = () => {
    setOptions((prev) => [...prev, `Opción ${prev.length + 1}`]);
  };

  const handleRemoveOption = (index: number) => {
    setOptions((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) {
      setError("Completa los campos obligatorios y agrega al menos 2 opciones.");
      return;
    }

    try {
      setError(null);
      const now = new Date().toISOString();
      const selectedClassroom = classrooms.find((item) => item.id === classroomId);
      const payload: Survey = {
        id: crypto.randomUUID(),
        title: title.trim(),
        description: description.trim(),
        classroomId,
        classroomName: selectedClassroom?.name,
        type,
        options: options
          .map((option, index) => ({ id: `opt-${index + 1}`, label: option.trim() }))
          .filter((option) => option.label.length > 0),
        maxOptions: maxOptions === "" ? undefined : maxOptions,
        startAt: new Date(startAt).toISOString(),
        endAt: new Date(endAt).toISOString(),
        showResultsBeforeClose,
        showResultsRealtime,
        status,
        responsesCount: 0,
        createdBy: "profesor-demo",
        createdAt: now,
        updatedAt: now
      };

      await createSurvey(payload);
      setTitle("");
      setDescription("");
      setType("normal");
      setStartAt(toLocalInputValue(new Date()));
      setEndAt(toLocalInputValue(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)));
      setShowResultsBeforeClose(false);
      setShowResultsRealtime(false);
      setStatus("activa");
      setMaxOptions("");
      const defaults = await fetchSurveyDefaults();
      setOptions(defaults.defaultOptions);
      await refresh(classroomId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo crear la encuesta.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("¿Seguro que deseas eliminar esta encuesta?")) return;
    try {
      setError(null);
      await deleteSurvey(id);
      await refresh(classroomId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo eliminar la encuesta.");
    }
  };

  const handleClose = async (id: string) => {
    try {
      setError(null);
      await updateSurvey(id, { status: "cerrada" });
      await refresh(classroomId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo cerrar la encuesta.");
    }
  };

  return (
    <main className="p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Encuestas</h1>
        <p className="text-gray-600">
          Crea y gestiona encuestas para decidir opciones con tus alumnos.
        </p>
      </header>

      <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Crear encuesta</h2>
        <form className="mt-4 grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="survey-classroom">
              Aula
            </label>
            <select
              id="survey-classroom"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
              value={classroomId}
              onChange={(event) => setClassroomId(event.target.value)}
              required
            >
              <option value="" disabled>
                Selecciona un aula
              </option>
              {classrooms.map((classroom) => (
                <option key={classroom.id} value={classroom.id}>
                  {classroom.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="survey-title">
              Título
            </label>
            <input
              id="survey-title"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Ej: Elección de proyecto final"
              required
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="survey-description">
              Descripción
            </label>
            <textarea
              id="survey-description"
              className="min-h-[96px] rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Explica a tus alumnos cómo votar o qué decidir."
              required
            />
          </div>

          <div className="grid gap-2 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-gray-700" htmlFor="survey-type">
                Tipo de encuesta
              </label>
              <select
                id="survey-type"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                value={type}
                onChange={(event) => setType(event.target.value as SurveyType)}
              >
                <option value="normal">Encuesta normal</option>
                <option value="puntuacion">Encuesta por puntuación</option>
                <option value="segunda_vuelta">Segunda vuelta instantánea</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-gray-700" htmlFor="survey-status">
                Estado inicial
              </label>
              <select
                id="survey-status"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                value={status}
                onChange={(event) => setStatus(event.target.value as SurveyStatus)}
              >
                <option value="activa">Activa</option>
                <option value="borrador">Borrador</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-gray-700" htmlFor="survey-max-options">
                Máximo de opciones (opcional)
              </label>
              <input
                id="survey-max-options"
                type="number"
                min={2}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                value={maxOptions}
                onChange={(event) =>
                  setMaxOptions(event.target.value === "" ? "" : Number(event.target.value))
                }
                placeholder="Ej: 6"
              />
            </div>
          </div>

          <div className="grid gap-2 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-gray-700" htmlFor="survey-start">
                Fecha inicio
              </label>
              <input
                id="survey-start"
                type="datetime-local"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                value={startAt}
                onChange={(event) => setStartAt(event.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-gray-700" htmlFor="survey-end">
                Fecha fin
              </label>
              <input
                id="survey-end"
                type="datetime-local"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                value={endAt}
                onChange={(event) => setEndAt(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid gap-2">
            <span className="text-sm font-medium text-gray-700">Opciones de respuesta</span>
            <div className="space-y-2">
              {options.map((option, index) => (
                <div key={`option-${index}`} className="flex gap-2">
                  <input
                    className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                    value={option}
                    onChange={(event) => handleOptionChange(index, event.target.value)}
                    placeholder={`Opción ${index + 1}`}
                    required
                  />
                  {options.length > 2 && (
                    <button
                      type="button"
                      className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => handleRemoveOption(index)}
                    >
                      Quitar
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              className="w-fit rounded-md border border-indigo-200 px-3 py-2 text-sm text-indigo-600 hover:bg-indigo-50"
              onClick={handleAddOption}
            >
              Agregar opción
            </button>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={showResultsRealtime}
                onChange={(event) => setShowResultsRealtime(event.target.checked)}
              />
              Resultados en tiempo real
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={showResultsBeforeClose}
                onChange={(event) => setShowResultsBeforeClose(event.target.checked)}
              />
              Mostrar resultados antes del cierre
            </label>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
            disabled={!canSubmit}
          >
            Guardar encuesta
          </button>
        </form>
      </section>

      <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Encuestas creadas</h2>
          <button
            type="button"
            className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => refresh(classroomId)}
          >
            Actualizar
          </button>
        </div>
        {isLoading ? (
          <p className="mt-4 text-sm text-gray-500">Cargando encuestas...</p>
        ) : items.length === 0 ? (
          <p className="mt-4 text-sm text-gray-500">Aún no hay encuestas creadas.</p>
        ) : (
          <div className="mt-4 space-y-3">
            {items.map((survey) => (
              <article
                key={survey.id}
                className="flex flex-col gap-2 rounded-md border border-gray-200 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{survey.title}</h3>
                  <p className="text-sm text-gray-600">{survey.description}</p>
                  <p className="text-xs text-gray-500">
                    Aula: {survey.classroomName ?? survey.classroomId} · Tipo: {survey.type.replace("_", " ")} ·
                    Opciones: {survey.options.length} · Estado: {survey.status}
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  {survey.status !== "cerrada" && (
                    <button
                      type="button"
                      className="rounded-md border border-indigo-200 px-3 py-2 text-sm text-indigo-600 hover:bg-indigo-50"
                      onClick={() => handleClose(survey.id)}
                    >
                      Cerrar
                    </button>
                  )}
                  <button
                    type="button"
                    className="rounded-md border border-red-200 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                    onClick={() => handleDelete(survey.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
