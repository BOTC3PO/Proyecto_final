import { useEffect, useMemo, useState } from "react";
import type { Survey, SurveyResults } from "../services/encuestas";
import { fetchSurveyResults, fetchSurveys, fetchSurveyScoreValues, voteSurvey } from "../services/encuestas";
import { fetchClassrooms } from "../services/aulas";
import type { Classroom } from "../domain/classroom/classroom.types";
import { getAulaId } from "../lib/aula-id";

type SelectionMap = Record<string, string>;
type ScoreSelectionMap = Record<string, Record<string, number>>;
type RankingSelectionMap = Record<string, Record<string, number>>;
type ResultsMap = Record<string, SurveyResults>;

const usuarioId = "demo-alumno";
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
  const [scoreValues, setScoreValues] = useState<number[]>([]);

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
        const scores = await fetchSurveyScoreValues();
        if (scores) setScoreValues(scores.values);
        const response = await fetchClassrooms();
        setClassrooms(response.items);
        if (response.items.length > 0) {
          setClassroomId((prev) => prev || getAulaId(response.items[0]));
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
    <div className="min-h-screen bg-[var(--c-bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">

        {/* Encabezado */}
        <div>
          <h1 className="text-2xl font-semibold text-[var(--c-text)]">Encuestas</h1>
          <p className="text-sm text-[var(--c-muted)] mt-1">
            Votá en las encuestas activas de tu aula.
          </p>
        </div>

        {/* Selector de aula */}
        <div className="flex items-center gap-3 flex-wrap">
          <select
            id="student-classroom"
            className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
            value={classroomId}
            onChange={(event) => setClassroomId(event.target.value)}
          >
            <option value="" disabled>Seleccioná un aula</option>
            {classrooms.map((classroom) => (
              <option key={getAulaId(classroom)} value={getAulaId(classroom)}>
                {classroom.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-2 text-sm text-[var(--c-text)] hover:border-[var(--c-primary)] transition-colors"
            onClick={() => refresh(classroomId)}
          >
            Actualizar
          </button>
        </div>

        {/* Mensajes globales */}
        {error && <p className="text-sm text-[var(--c-danger)]">{error}</p>}
        {info && (
          <p className="text-sm text-[var(--c-success)]">{info}</p>
        )}

        {/* Cargando */}
        {isLoading && (
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="h-28 rounded-xl bg-[var(--c-surface)] border border-[var(--c-border)] animate-pulse" />
            ))}
          </div>
        )}

        {/* Sin encuestas */}
        {!isLoading && surveys.length === 0 && (
          <div className="rounded-xl border border-dashed border-[var(--c-border)] p-12 text-center">
            <p className="text-sm text-[var(--c-muted)]">No hay encuestas activas para esta aula.</p>
          </div>
        )}

        {/* Lista de encuestas */}
        {!isLoading && surveys.length > 0 && (
          <div className="space-y-4">
            {surveys.map((survey) => {
              const isClosed = now >= new Date(survey.endAt) || survey.status === "cerrada";
              const canShowResults =
                isClosed || survey.showResultsBeforeClose || survey.showResultsRealtime;
              const surveyResults = results[survey.id];
              return (
                <article
                  key={survey.id}
                  className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5 space-y-4"
                >
                  {/* Cabecera de la encuesta */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-sm font-semibold text-[var(--c-text)]">{survey.title}</h2>
                      <p className="text-xs text-[var(--c-muted)] mt-0.5">{survey.description}</p>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${
                      isClosed
                        ? "bg-[color-mix(in_srgb,var(--c-muted)_15%,transparent)] text-[var(--c-muted)]"
                        : "bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]"
                    }`}>
                      {isClosed ? "Cerrada" : "Activa"}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--c-muted)]">
                    Disponible hasta {new Date(survey.endAt).toLocaleString("es-AR")}
                  </p>

                  {/* Opciones de votación */}
                  {!isClosed && (
                    <div className="space-y-2">
                      {survey.type === "normal" && (
                        <>
                          {survey.options.map((option) => (
                            <label key={option.id} className="flex items-center gap-2 text-sm text-[var(--c-text)]">
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
                          <p className="text-xs text-[var(--c-muted)]">
                            Puntúa cada opción. Podés dejar en blanco las que no querés calificar.
                          </p>
                          {survey.options.map((option) => (
                            <div key={option.id} className="flex items-center justify-between gap-3 text-sm text-[var(--c-text)]">
                              <span>{option.label}</span>
                              <select
                                className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-2 py-1 text-sm"
                                value={scoreSelections[survey.id]?.[option.id] ?? 0}
                                onChange={(event) => {
                                  const score = Number(event.target.value);
                                  setScoreSelections((prev) => ({
                                    ...prev,
                                    [survey.id]: { ...(prev[survey.id] ?? {}), [option.id]: score }
                                  }));
                                }}
                              >
                                <option value={0}>Sin puntuar</option>
                                {scoreValues.map((value) => (
                                  <option key={`${survey.id}-${option.id}-${value}`} value={value}>{value}</option>
                                ))}
                              </select>
                            </div>
                          ))}
                        </div>
                      )}
                      {survey.type === "segunda_vuelta" && (
                        <div className="space-y-2">
                          <p className="text-xs text-[var(--c-muted)]">Ordená tus preferencias con un orden único para cada opción.</p>
                          {survey.options.map((option) => {
                            const maxRank = survey.options.length;
                            const currentRank = rankingSelections[survey.id]?.[option.id] ?? 0;
                            return (
                              <div key={option.id} className="flex items-center justify-between gap-3 text-sm text-[var(--c-text)]">
                                <span>{option.label}</span>
                                <select
                                  className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-2 py-1 text-sm"
                                  value={currentRank}
                                  onChange={(event) => {
                                    const rank = Number(event.target.value);
                                    setRankingSelections((prev) => ({
                                      ...prev,
                                      [survey.id]: { ...(prev[survey.id] ?? {}), [option.id]: rank }
                                    }));
                                  }}
                                >
                                  <option value={0}>Sin preferencia</option>
                                  {Array.from({ length: maxRank }, (_, idx) => idx + 1).map((rankValue) => (
                                    <option key={`${survey.id}-${option.id}-${rankValue}`} value={rankValue}>{rankValue}</option>
                                  ))}
                                </select>
                              </div>
                            );
                          })}
                          {survey.maxOptions && (
                            <p className="text-xs text-[var(--c-muted)]">Máximo de preferencias: {survey.maxOptions}.</p>
                          )}
                        </div>
                      )}
                      <button
                        type="button"
                        className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                        onClick={() => handleVote(survey)}
                      >
                        Votar
                      </button>
                    </div>
                  )}

                  {/* Resultados */}
                  {canShowResults && (
                    <div className="space-y-2 pt-2 border-t border-[var(--c-border)]">
                      <button
                        type="button"
                        className="rounded-xl border border-[var(--c-border)] px-3 py-1.5 text-sm text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
                        onClick={() => handleFetchResults(survey.id)}
                      >
                        Ver resultados
                      </button>
                      {surveyResults && (
                        <div className="space-y-1">
                          <p className="text-xs text-[var(--c-muted)]">Total votos: {surveyResults.totalVotes}</p>
                          {survey.type === "puntuacion" && (
                            <p className="text-xs text-[var(--c-muted)]">
                              Puntaje acumulado: {surveyResults.options.reduce((acc, o) => acc + (o.scoreTotal ?? 0), 0)}
                            </p>
                          )}
                          {surveyResults.options.map((option) => (
                            <div key={option.id} className="flex items-center justify-between text-sm text-[var(--c-text)]">
                              <span>{option.label}</span>
                              <span>
                                {survey.type === "puntuacion"
                                  ? `${option.scoreTotal ?? option.count} pts · ${option.averageScore ?? 0} prom · ${option.percentage}%`
                                  : `${option.count} votos · ${option.percentage}%`}
                              </span>
                            </div>
                          ))}
                          {survey.type === "segunda_vuelta" && surveyResults.rounds && surveyResults.rounds.length > 0 && (
                            <div className="mt-2 space-y-2 text-xs text-[var(--c-muted)]">
                              <p className="font-semibold text-[var(--c-text)]">Rondas</p>
                              {surveyResults.rounds.map((round) => (
                                <div key={`round-${survey.id}-${round.round}`} className="rounded-lg bg-[var(--c-bg)] p-3">
                                  <p className="font-semibold text-[var(--c-text)]">Ronda {round.round}</p>
                                  <div className="mt-1 space-y-1">
                                    {round.counts.map((count) => (
                                      <div key={`${survey.id}-${round.round}-${count.id}`} className="flex justify-between">
                                        <span>{count.label}</span>
                                        <span>{count.count} votos · {count.percentage}%</span>
                                      </div>
                                    ))}
                                  </div>
                                  {round.eliminated && <p className="mt-1 text-[var(--c-warning)]">Eliminada: {round.eliminated.label}</p>}
                                  {round.winner && <p className="mt-1 text-[var(--c-success)]">Ganador: {round.winner.label} ({round.winner.count} votos)</p>}
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

      </div>
    </div>
  );
}
