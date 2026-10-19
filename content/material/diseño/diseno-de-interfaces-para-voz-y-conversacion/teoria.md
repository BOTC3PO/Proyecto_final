# UX y diseño — Interfaces de voz y conversación (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `diseño/diseno-de-interfaces-para-voz-y-conversacion`. Depende de `../usabilidad-heuristicas-de-nielsen/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo diseñar asistentes de voz y chatbots que se entiendan y no frustren.

---

## 1. Interfaces sin pantalla (o casi)

Los asistentes de voz, los parlantes inteligentes, los chatbots y los sistemas telefónicos por menú son **interfaces conversacionales**: la interacción se da con lenguaje, hablado o escrito. Las heurísticas de usabilidad siguen valiendo, pero cambian las dificultades: no hay un menú visible que recorrer, la voz desaparece apenas se dice y las personas hablan de formas imprevisibles.

## 2. Qué cambia

- **No hay "reconocer en lugar de recordar"** automático: sin pantalla, la persona no ve qué puede pedir. Por eso un buen asistente se presenta y sugiere opciones ("Puedo ayudarte con turnos o consultas").
- **Información efímera**: una lista larga leída en voz alta se olvida. Conviene ofrecer pocas opciones por vez (tres o cuatro) y repetirlas si se piden.
- **Errores de reconocimiento**: el sistema entiende mal por ruido, acentos, nombres propios o palabras parecidas. Hay que prever cómo se corrigen.
- **Turnos de conversación**: hay que dejar hablar, no interrumpir y confirmar lo importante.

## 3. Principios de diseño conversacional

1. **Presentarse y fijar expectativas**: decir qué puede y qué no puede hacer, y avisar claramente que se habla con un sistema automático y no con una persona.
2. **Lenguaje natural y breve**: frases cortas, vocabulario cotidiano, sin jerga.
3. **Confirmar acciones importantes**: "¿Querés cancelar el turno del martes a las diez?" antes de ejecutar algo irreversible.
4. **Manejar el error con gracia**: ante algo no entendido, reformular o dar opciones en lugar de repetir "No entendí" en bucle. Tras dos fallos, ofrecer otra vía, como derivar a una persona.
5. **Dar una salida**: poder volver, cancelar o pedir ayuda en cualquier momento (control y libertad).
6. **Mantener el contexto**: recordar lo dicho en la conversación para no repetir preguntas.
7. **Coherencia de tono**: una "personalidad" consistente pero sin fingir ser humano.

## 4. Accesibilidad

La voz puede ser una gran ayuda para personas con discapacidad visual o motora, pero deja afuera a quienes no pueden hablar o escuchar. Por eso debe haber **alternativas**: texto, subtítulos o transcripciones. Hay que tener en cuenta también los acentos, las voces atípicas y los distintos tiempos para responder.

## 5. Privacidad

Los dispositivos de voz recogen sonido: hay que informar cuándo escuchan, qué se guarda y por cuánto tiempo, y permitir borrar el historial. Conviene evitar pedir datos sensibles en voz alta si hay otras personas cerca.

## 6. Probar

Los guiones de diálogo se prueban con la técnica del **Mago de Oz**: una persona simula el sistema desde atrás mientras otra conversa creyendo que habla con una máquina. Permite descubrir cómo hablan realmente las personas antes de construir nada.

## N. Conexión con lo que sigue

Las decisiones sobre qué datos se recogen y cómo se informan conectan con `etica-del-diseno-patrones-oscuros/`.
