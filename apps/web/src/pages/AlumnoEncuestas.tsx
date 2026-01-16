import { useEffect, useMemo, useState } from "react";
import type { Survey, SurveyResults } from "../services/encuestas";
import { fetchSurveyResults, fetchSurveys, voteSurvey } from "../services/encuestas";
import { fetchClassrooms } from "../services/aulas";
import type { Classroom } from "../domain/classroom/classroom.types";

type SelectionMap = Record<string, string>;
type ScoreSelectionMap = Record<string, Record<string, number>>;
type RankingSelectionMap = Record<string, Record<string, number>>;
type ResultsMap = Record<string, SurveyResults>;

const usuarioId = "demo-alumno";
const SCORE_VALUES = [1, 2, 3, 4, 5];

export default function AlumnoEncuestas() {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [classroomId, setClassroomId] = useState("");
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [selections, setSelections] = useState<SelectionMap>({});
  const [scoreSelections, setScoreSelections] = useState<ScoreSelectionMap>({});
  const [rankingSelections, setRankingSelections] = useState<RankingSelectionMap>({});
  const [results, setResults] = useState<ResultsMap>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const refresh = async (targetClassroomId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetchSurveys(targetClassroomId);
      setSurveys(response.items);
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

  const buildRankingPayload = (survey: Survey) => {
    const rankingMap = rankingSelections[survey.id] ?? {};
    const ranked = Object.entries(rankingMap)
      .filter(([, rank]) => rank > 0)
      .map(([optionId, rank]) => ({ optionId, rank }));
    if (ranked.length < 2) {
      setInfo("Selecciona al menos dos preferencias.");
      return null;
    }
    const ranks = ranked.map((entry) => entry.rank);
    const uniqueRanks = new Set(ranks);
    if (uniqueRanks.size !== ranks.length) {
      setInfo("Cada preferencia debe ser única.");
      return null;
    }
    if (survey.maxOptions && ranked.length > survey.maxOptions) {
      setInfo(`Solo puedes ordenar hasta ${survey.maxOptions} opciones.`);
      return null;
    }
    return ranked.sort((a, b) => a.rank - b.rank).map((entry) => entry.optionId);
  };

  const buildScorePayload = (survey: Survey) => {
    const scoreMap = scoreSelections[survey.id] ?? {};
    const scored = Object.entries(scoreMap)
      .filter(([, score]) => score > 0)
      .map(([optionId, score]) => ({ optionId, score }));
    if (scored.length === 0) {
      setInfo("Asigna una puntuación antes de enviar.");
      return null;
    }
    if (survey.maxOptions && scored.length > survey.maxOptions) {
      setInfo(`Solo puedes puntuar hasta ${survey.maxOptions} opciones.`);
      return null;
    }
    return scored;
  };

  const handleVote = async (survey: Survey) => {
    let payload: { aulaId: string; optionId: string } | { aulaId: string; scores: Array<{ optionId: string; score: number }> } | { aulaId: string; ranking: string[] } | null =
      null;
    if (survey.type === "normal") {
      const optionId = selections[survey.id];
      if (!optionId) {
        setInfo("Selecciona una opción antes de votar.");
        return;
      }
      payload = { aulaId: classroomId, optionId };
    } else if (survey.type === "puntuacion") {
      const scores = buildScorePayload(survey);
      if (!scores) return;
      payload = { aulaId: classroomId, scores };
    } else if (survey.type === "segunda_vuelta") {
      const ranking = buildRankingPayload(survey);
      if (!ranking) return;
      payload = { aulaId: classroomId, ranking };
    }
    try {
      setInfo(null);
      if (!payload) {
        setInfo("Completa la selección antes de votar.");
        return;
      }
      await voteSurvey(survey.id, payload, usuarioId);
      const surveyResults = await fetchSurveyResults(survey.id, classroomId);
      setResults((prev) => ({ ...prev, [survey.id]: surveyResults }));
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
                      {survey.type === "normal" && (
                        <>
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
                        </>
                      )}
                      {survey.type === "puntuacion" && (
                        <div className="space-y-2">
                          <p className="text-xs text-gray-500">
                            Puntúa cada opción del 1 al 5 (5 es la mejor). Puedes dejar en blanco las que no quieras
                            calificar.
                          </p>
                          {survey.options.map((option) => (
                            <div key={option.id} className="flex items-center justify-between gap-3 text-sm text-gray-700">
                              <span>{option.label}</span>
                              <select
                                className="rounded-md border border-gray-300 px-2 py-1 text-sm"
                                value={scoreSelections[survey.id]?.[option.id] ?? 0}
                                onChange={(event) => {
                                  const score = Number(event.target.value);
                                  setScoreSelections((prev) => ({
                                    ...prev,
                                    [survey.id]: {
                                      ...(prev[survey.id] ?? {}),
                                      [option.id]: score
                                    }
                                  }));
                                }}
                              >
                                <option value={0}>Sin puntuar</option>
                                {SCORE_VALUES.map((value) => (
                                  <option key={`${survey.id}-${option.id}-${value}`} value={value}>
                                    {value}
                                  </option>
                                ))}
                              </select>
                            </div>
                          ))}
                        </div>
                      )}
                      {survey.type === "segunda_vuelta" && (
                        <div className="space-y-2">
                          <p className="text-xs text-gray-500">
                            Ordena tus preferencias. Elige un orden único para cada opción.
                          </p>
                          {survey.options.map((option) => {
                            const maxRank = survey.options.length;
                            const currentRank = rankingSelections[survey.id]?.[option.id] ?? 0;
                            return (
                              <div key={option.id} className="flex items-center justify-between gap-3 text-sm text-gray-700">
                                <span>{option.label}</span>
                                <select
                                  className="rounded-md border border-gray-300 px-2 py-1 text-sm"
                                  value={currentRank}
                                  onChange={(event) => {
                                    const rank = Number(event.target.value);
                                    setRankingSelections((prev) => ({
                                      ...prev,
                                      [survey.id]: {
                                        ...(prev[survey.id] ?? {}),
                                        [option.id]: rank
                                      }
                                    }));
                                  }}
                                >
                                  <option value={0}>Sin preferencia</option>
                                  {Array.from({ length: maxRank }, (_, idx) => idx + 1).map((rankValue) => (
                                    <option key={`${survey.id}-${option.id}-${rankValue}`} value={rankValue}>
                                      {rankValue}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            );
                          })}
                          {survey.maxOptions && (
                            <p className="text-xs text-gray-500">
                              Máximo de preferencias permitidas: {survey.maxOptions}.
                            </p>
                          )}
                        </div>
                      )}
                      <button
                        type="button"
                        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                        onClick={() => handleVote(survey)}
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
                          {survey.type === "puntuacion" && (
                            <p className="text-xs text-gray-500">
                              Puntaje total acumulado:{" "}
                              {surveyResults.options.reduce((acc, option) => acc + (option.scoreTotal ?? 0), 0)}
                            </p>
                          )}
                          {surveyResults.options.map((option) => (
                            <div key={option.id} className="flex items-center justify-between text-sm text-gray-700">
                              <span>{option.label}</span>
                              <span>
                                {survey.type === "puntuacion"
                                  ? `${option.scoreTotal ?? option.count} pts · ${option.averageScore ?? 0} prom · ${option.percentage}%`
                                  : `${option.count} votos · ${option.percentage}%`}
                              </span>
                            </div>
                          ))}
                          {survey.type === "segunda_vuelta" && surveyResults.rounds && surveyResults.rounds.length > 0 && (
                            <div className="mt-2 space-y-2 text-xs text-gray-600">
                              <p className="font-semibold text-gray-700">Rondas de segunda vuelta</p>
                              {surveyResults.rounds.map((round) => (
                                <div key={`round-${survey.id}-${round.round}`} className="rounded-md bg-gray-50 p-3">
                                  <p className="font-semibold text-gray-700">Ronda {round.round}</p>
                                  <div className="mt-1 space-y-1">
                                    {round.counts.map((count) => (
                                      <div key={`${survey.id}-${round.round}-${count.id}`} className="flex justify-between">
                                        <span>{count.label}</span>
                                        <span>
                                          {count.count} votos · {count.percentage}%
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                  {round.eliminated && (
                                    <p className="mt-1 text-amber-600">
                                      Eliminada: {round.eliminated.label}
                                    </p>
                                  )}
                                  {round.winner && (
                                    <p className="mt-1 text-emerald-600">
                                      Ganador: {round.winner.label} ({round.winner.count} votos)
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
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
