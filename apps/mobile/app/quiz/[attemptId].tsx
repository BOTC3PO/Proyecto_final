/**
 * PLAN-R Parte 3 — el corazón del plan: tomar un cuestionario nativo,
 * una pregunta por pantalla (el modo natural en el teléfono — WO-9 ya
 * lo soporta server-side, acá sólo se consume). Nativo: mc, vf, input
 * (con teclado numérico si la respuesta es numérica, mismo criterio
 * que PLAN-Q §2.2 en la web), ordenar (con botones ↑↓ — el drag táctil
 * es refinamiento, no bloqueante, per el plan). Todo lo demás (marcar
 * mapa, análisis sintáctico, etc.) cae a un fallback que abre el
 * intento completo en `/quiz/attempt/:id` de la web vía WebContent —
 * simplificación de lo que pide el plan (`la pregunta N es un WebView,
 * la N+1 vuelve a ser nativa`): interlear nativo/WebView POR PREGUNTA
 * necesitaría una ruta web nueva que renderice una pregunta suelta con
 * un canal postMessage de vuelta — cambio mayor, no "chico", así que
 * quedó para una pasada aparte si hace falta. El intento entero sigue
 * siendo válido y resumible desde cualquiera de los dos lados (el
 * estado vive en el server, no en la pantalla).
 *
 * Timer + reanudación: el modelo materializar-y-congelar (PLAN-D,
 * ledger §13.3) ya existe server-side — acá sólo se lee `deadline` y
 * se llama submit al expirar. Reanudar tras matar la app es gratis: el
 * botón de "Cuestionarios" en el detalle de módulo ya revisa si hay un
 * intento `in_progress` antes de crear uno nuevo (ver modulos/[id].tsx).
 */
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { apiGet, apiPost } from "../../src/api/client";
import { colors } from "../../src/theme/tokens";
import { useDeadlineCountdown, formatRemaining } from "../../src/hooks/useDeadlineCountdown";
import { NATIVE_QUESTION_TYPES } from "../../src/types/quiz";
import type { AttemptAnswerValue, QuizAttemptDetail, QuizQuestion, QuizSubmitResult } from "../../src/types/quiz";

function esRespuestaNumerica(answerKey: string | string[] | undefined): boolean {
  const val = Array.isArray(answerKey) ? answerKey[0] : answerKey;
  return typeof val === "string" && val.trim() !== "" && !Number.isNaN(Number(val));
}

function moveItem<T>(arr: T[], from: number, to: number): T[] {
  if (to < 0 || to >= arr.length) return arr;
  const next = arr.slice();
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

export default function QuizAttemptScreen() {
  const { attemptId } = useLocalSearchParams<{ attemptId: string }>();
  const [attempt, setAttempt] = useState<QuizAttemptDetail | null>(null);
  const [answers, setAnswers] = useState<Record<string, AttemptAnswerValue>>({});
  const [index, setIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<QuizSubmitResult | null>(null);
  const submittedRef = useRef(false);

  useEffect(() => {
    if (!attemptId) return;
    let active = true;
    apiGet<QuizAttemptDetail>(`/api/quiz-attempts/${attemptId}`)
      .then((res) => {
        if (!active) return;
        setAttempt(res);
        setAnswers(res.answers ?? {});
        if (res.status !== "in_progress") submittedRef.current = true;
      })
      .catch((e) => active && setError(e instanceof Error ? e.message : "No se pudo cargar el intento."));
    return () => {
      active = false;
    };
  }, [attemptId]);

  const onSubmit = useCallback(async () => {
    if (!attemptId || submittedRef.current) return;
    submittedRef.current = true;
    setSubmitting(true);
    try {
      const res = await apiPost<QuizSubmitResult>(`/api/quiz-attempts/${attemptId}/submit`, { answers });
      setResult(res);
    } catch (e) {
      submittedRef.current = false;
      setError(e instanceof Error ? e.message : "No se pudo enviar el intento.");
    } finally {
      setSubmitting(false);
    }
  }, [attemptId, answers]);

  const remaining = useDeadlineCountdown(attempt?.deadline, onSubmit);

  const openInWeb = () => {
    router.push({
      pathname: "/webview",
      params: { path: `/quiz/attempt/${attemptId}`, title: attempt?.quizTitle ?? "Cuestionario" },
    });
  };

  const persistAnswer = (questionId: string, value: AttemptAnswerValue) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    if (!attemptId) return;
    apiPost(`/api/quiz-attempts/${attemptId}/answer`, { questionId, response: value }).catch(() => {
      // best-effort — la próxima respuesta o el submit final lo reintenta.
    });
  };

  if (error) {
    return (
      <View className="flex-1 bg-vb-bg items-center justify-center px-6">
        <Text className="text-sm text-vb-danger text-center">{error}</Text>
      </View>
    );
  }
  if (!attempt) {
    return (
      <View className="flex-1 bg-vb-bg items-center justify-center">
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  if (result || attempt.status !== "in_progress") {
    return (
      <View className="flex-1 bg-vb-bg items-center justify-center px-6 gap-3">
        <Feather name="check-circle" size={40} color={colors.success} />
        <Text className="text-lg font-bold text-vb-text text-center">
          {result?.message ?? "Intento ya enviado"}
        </Text>
        {(result?.score ?? attempt.score) !== undefined && (
          <Text className="text-sm text-vb-muted">
            Puntaje: {result?.score ?? attempt.score} / {result?.maxScore ?? attempt.maxScore}
          </Text>
        )}
        <TouchableOpacity onPress={() => router.back()} className="bg-vb-primary rounded-lg px-5 py-2.5 mt-2">
          <Text className="text-white font-semibold">Volver</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const questions = attempt.questions ?? [];
  const question = questions[index];
  if (!question) {
    return (
      <View className="flex-1 bg-vb-bg items-center justify-center px-6">
        <Text className="text-sm text-vb-muted text-center">Este intento no tiene preguntas.</Text>
      </View>
    );
  }
  const isLast = index === questions.length - 1;
  const questionType = question.questionType ?? (question.options?.length ? "mc" : "input");
  const isNative = NATIVE_QUESTION_TYPES.has(questionType);

  return (
    <View className="flex-1 bg-vb-bg">
      <View className="flex-row items-center gap-2 px-3 py-2 border-b border-vb-border bg-vb-surface">
        <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2" hitSlop={8}>
          <Feather name="x" size={20} color={colors.text} />
        </TouchableOpacity>
        <Text className="text-sm font-medium text-vb-text flex-1" numberOfLines={1}>
          {attempt.quizTitle ?? "Cuestionario"}
        </Text>
        {remaining !== null && (
          <View
            className="rounded-full px-2.5 py-1"
            style={{ backgroundColor: remaining <= 60 ? colors.danger : colors.bg }}
          >
            <Text
              className="text-xs font-semibold"
              style={{ color: remaining <= 60 ? "#fff" : colors.text }}
            >
              {formatRemaining(remaining)}
            </Text>
          </View>
        )}
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ padding: 16, gap: 16 }}>
        <Text className="text-xs font-medium text-vb-muted">
          Pregunta {index + 1} de {questions.length}
        </Text>
        <Text className="text-base text-vb-text">{question.prompt}</Text>

        {!isNative ? (
          <View className="bg-vb-surface border border-vb-border rounded-xl p-4 gap-3">
            <Text className="text-sm text-vb-muted">
              Este tipo de pregunta todavía no está disponible en la app — se abre en el navegador
              embebido. El resto del intento (incluida esta pregunta) queda guardado ahí.
            </Text>
            <TouchableOpacity onPress={openInWeb} className="bg-vb-primary rounded-lg py-2.5 items-center">
              <Text className="text-white font-semibold text-sm">Abrir cuestionario</Text>
            </TouchableOpacity>
          </View>
        ) : questionType === "vf" ? (
          <OptionList
            options={["Verdadero", "Falso"]}
            selected={answers[question.id]}
            onSelect={(v) => persistAnswer(question.id, v)}
          />
        ) : questionType === "mc" ? (
          question.multiple || Array.isArray(question.answerKey) ? (
            <MultiOptionList
              options={question.options ?? []}
              selected={answers[question.id]}
              onChange={(v) => persistAnswer(question.id, v)}
            />
          ) : (
            <OptionList
              options={question.options ?? []}
              selected={answers[question.id]}
              onSelect={(v) => persistAnswer(question.id, v)}
            />
          )
        ) : questionType === "ordenar" ? (
          <OrdenarNativo
            value={Array.isArray(answers[question.id]) ? (answers[question.id] as string[]) : question.items ?? []}
            onChange={(v) => persistAnswer(question.id, v)}
          />
        ) : (
          <TextInput
            value={typeof answers[question.id] === "string" ? (answers[question.id] as string) : ""}
            onChangeText={(v) => setAnswers((prev) => ({ ...prev, [question.id]: v }))}
            onEndEditing={(e) => persistAnswer(question.id, e.nativeEvent.text)}
            keyboardType={esRespuestaNumerica(question.answerKey) ? "decimal-pad" : "default"}
            autoCapitalize={esRespuestaNumerica(question.answerKey) ? "none" : "sentences"}
            placeholder="Escribí tu respuesta"
            placeholderTextColor={colors.muted}
            className="border border-vb-border rounded-lg px-3 py-2.5 text-base text-vb-text bg-vb-surface"
          />
        )}
      </ScrollView>

      <View className="flex-row items-center gap-3 p-3 border-t border-vb-border bg-vb-surface">
        <TouchableOpacity
          onPress={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="px-4 py-2.5 rounded-lg"
          style={{ opacity: index === 0 ? 0.4 : 1 }}
        >
          <Text className="text-vb-text font-medium">Anterior</Text>
        </TouchableOpacity>
        <View className="flex-1" />
        {isLast ? (
          <TouchableOpacity
            onPress={onSubmit}
            disabled={submitting}
            className="bg-vb-primary rounded-lg px-5 py-2.5"
            style={{ opacity: submitting ? 0.6 : 1 }}
          >
            <Text className="text-white font-semibold">{submitting ? "Enviando..." : "Enviar"}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setIndex((i) => Math.min(questions.length - 1, i + 1))}
            className="bg-vb-primary rounded-lg px-5 py-2.5"
          >
            <Text className="text-white font-semibold">Siguiente</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

function OptionList({
  options, selected, onSelect,
}: { options: string[]; selected: AttemptAnswerValue | undefined; onSelect: (v: string) => void }) {
  return (
    <View className="gap-2">
      {options.map((opt) => {
        const active = selected === opt;
        return (
          <TouchableOpacity
            key={opt}
            onPress={() => onSelect(opt)}
            className="flex-row items-center gap-3 rounded-lg border p-3"
            style={{ borderColor: active ? colors.primary : colors.border, minHeight: 44 }}
          >
            <View
              className="w-5 h-5 rounded-full border-2 items-center justify-center"
              style={{ borderColor: active ? colors.primary : colors.muted }}
            >
              {active ? <View className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: colors.primary }} /> : null}
            </View>
            <Text className="text-sm text-vb-text flex-1">{opt}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function MultiOptionList({
  options, selected, onChange,
}: { options: string[]; selected: AttemptAnswerValue | undefined; onChange: (v: string[]) => void }) {
  const current = Array.isArray(selected) ? selected : [];
  return (
    <View className="gap-2">
      {options.map((opt) => {
        const active = current.includes(opt);
        return (
          <TouchableOpacity
            key={opt}
            onPress={() => onChange(active ? current.filter((o) => o !== opt) : [...current, opt])}
            className="flex-row items-center gap-3 rounded-lg border p-3"
            style={{ borderColor: active ? colors.primary : colors.border, minHeight: 44 }}
          >
            <View
              className="w-5 h-5 rounded border-2 items-center justify-center"
              style={{ borderColor: active ? colors.primary : colors.muted, backgroundColor: active ? colors.primary : "transparent" }}
            >
              {active ? <Feather name="check" size={12} color="#fff" /> : null}
            </View>
            <Text className="text-sm text-vb-text flex-1">{opt}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

/** Ordenar con botones ↑/↓ — el drag táctil es refinamiento, no bloqueante (per el plan). */
function OrdenarNativo({
  value, onChange,
}: { value: string[]; onChange: (v: string[]) => void }) {
  return (
    <View className="gap-2">
      {value.map((item, idx) => (
        <View
          key={item}
          className="flex-row items-center gap-2 rounded-lg border border-vb-border bg-vb-surface p-3"
          style={{ minHeight: 44 }}
        >
          <Text className="text-xs font-semibold text-vb-muted w-5">{idx + 1}</Text>
          <Text className="text-sm text-vb-text flex-1">{item}</Text>
          <TouchableOpacity
            onPress={() => onChange(moveItem(value, idx, idx - 1))}
            disabled={idx === 0}
            hitSlop={8}
            style={{ opacity: idx === 0 ? 0.3 : 1, minWidth: 44, minHeight: 44, alignItems: "center", justifyContent: "center" }}
          >
            <Feather name="arrow-up" size={18} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onChange(moveItem(value, idx, idx + 1))}
            disabled={idx === value.length - 1}
            hitSlop={8}
            style={{ opacity: idx === value.length - 1 ? 0.3 : 1, minWidth: 44, minHeight: 44, alignItems: "center", justifyContent: "center" }}
          >
            <Feather name="arrow-down" size={18} color={colors.text} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
