import { useEffect, useMemo, useState } from "react";
import type { Survey, SurveyResults } from "../services/encuestas";
import { fetchSurveyResults, fetchSurveys, voteSurvey } from "../services/encuestas";
import { fetchClassrooms } from "../services/aulas";
import type { Classroom } from "../domain/classroom/classroom.types";

type SelectionMap = Record<string, string>;
type ResultsMap = Record<string, SurveyResults>;

const usuarioId = "demo-alumno";

export default function AlumnoEncuestas() {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [classroomId, setClassroomId] = useState("");
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [selections, setSelections] = useState<SelectionMap>({});
  const [results, setResults] = useState<ResultsMap>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const refresh = async (targetClassroomId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetchSurveys(targetClassroomId);
      setSurveys(response.items.filter((survey) => survey.type === "normal"));
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
        const response = await fetchClassrooms();
        setClassrooms(response.items);
        if (response.items.length > 0) {
          setClassroomId((prev) => prev || response.items[0].id);
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

  const handleVote = async (surveyId: string) => {
    const optionId = selections[surveyId];
    if (!optionId) {
      setInfo("Selecciona una opción antes de votar.");
      return;
    }
    try {
      setInfo(null);
      await voteSurvey(surveyId, { aulaId: classroomId, optionId }, usuarioId);
      const surveyResults = await fetchSurveyResults(surveyId, classroomId);
      setResults((prev) => ({ ...prev, [surveyId]: surveyResults }));
      setInfo("¡Voto registrado!");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo registrar el voto.");
    }
  };

  const handleFetchResults = async (surveyId: string) => {
    try {
      const surveyResults = await fetchSurveyResults(surveyId, classroomId);
      setResults((prev) => ({ ...prev, [surveyId]: surveyResults }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudieron cargar los resultados.");
    }
  };

  const now = useMemo(() => new Date(), [surveys]);

  return (
    <main className="p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Encuestas</h1>
        <p className="text-gray-600">Vota en las encuestas activas de tu aula.</p>
      </header>

      <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="student-classroom">
              Aula
            </label>
            <select
              id="student-classroom"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
              value={classroomId}
              onChange={(event) => setClassroomId(event.target.value)}
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
          <button
            type="button"
            className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => refresh(classroomId)}
          >
            Actualizar
          </button>
        </div>

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        {info && <p className="mt-4 text-sm text-green-600">{info}</p>}

        {isLoading ? (
          <p className="mt-4 text-sm text-gray-500">Cargando encuestas...</p>
        ) : surveys.length === 0 ? (
          <p className="mt-4 text-sm text-gray-500">No hay encuestas activas para esta aula.</p>
        ) : (
          <div className="mt-6 space-y-4">
            {surveys.map((survey) => {
              const isClosed = now >= new Date(survey.endAt) || survey.status === "cerrada";
              const canShowResults =
                isClosed || survey.showResultsBeforeClose || survey.showResultsRealtime;
              const surveyResults = results[survey.id];
              return (
                <article key={survey.id} className="rounded-md border border-gray-200 p-4 space-y-3">
                  <div>
                    <h2 className="text-sm font-semibold text-gray-900">{survey.title}</h2>
                    <p className="text-sm text-gray-600">{survey.description}</p>
                    <p className="text-xs text-gray-500">
                      Disponible hasta {new Date(survey.endAt).toLocaleString()} · Estado: {survey.status}
                    </p>
                  </div>
                  {!isClosed && (
                    <div className="space-y-2">
                      {survey.options.map((option) => (
                        <label key={option.id} className="flex items-center gap-2 text-sm text-gray-700">
                          <input
                            type="radio"
                            name={`survey-${survey.id}`}
                            value={option.id}
                            checked={selections[survey.id] === option.id}
                            onChange={() =>
                              setSelections((prev) => ({ ...prev, [survey.id]: option.id }))
                            }
                          />
                          {option.label}
                        </label>
                      ))}
                      <button
                        type="button"
                        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                        onClick={() => handleVote(survey.id)}
                      >
                        Votar
                      </button>
                    </div>
                  )}
                  {canShowResults && (
                    <div className="space-y-2">
                      <button
                        type="button"
                        className="rounded-md border border-indigo-200 px-3 py-2 text-sm text-indigo-600 hover:bg-indigo-50"
                        onClick={() => handleFetchResults(survey.id)}
                      >
                        Ver resultados
                      </button>
                      {surveyResults && (
                        <div className="space-y-1">
                          <p className="text-xs text-gray-500">Total votos: {surveyResults.totalVotes}</p>
                          {surveyResults.options.map((option) => (
                            <div key={option.id} className="flex items-center justify-between text-sm text-gray-700">
                              <span>{option.label}</span>
                              <span>
                                {option.count} votos · {option.percentage}%
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
