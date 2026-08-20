# ESI — Consentimiento: qué es y qué no lo es (cuestionario, 25 preguntas VBLang)

> Tema: `ES4`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: varias preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`); dos
> preguntas `tipo: vf` sin campo `respuesta:` (sólo
> `respuestas_validas`) — agregado; una pregunta con `variables:` cuyo
> dato nunca se interpolaba en el `enunciado` (quedaba un texto fijo
> que contradecía la `respuesta:` fija "falso" a una afirmación en
> realidad verdadera) — simplificada a una pregunta fija y correcta.

---

### 1 — El concepto de consentimiento

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "basico"
  tags: ["conceptos_clave", "respeto"]

tipo: completar
respuestas_validas:
  - "acuerdo"

enunciado: "El consentimiento es un ___ mutuo entre personas para realizar una acción, basado en el respeto y la comunicación."

respuesta: "acuerdo"

explicacion: |
  El consentimiento es un acuerdo mutuo, libre y entusiasta. No es sólo la ausencia de un "no", sino la presencia de un "sí" claro y comunicado.
```

### 2 — La condición de la libertad

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "basico"
  tags: ["libertad", "presion"]

tipo: completar
respuestas_validas:
  - "libre"

enunciado: "Para que el consentimiento sea válido, debe ser ___; esto significa que no debe haber presión, manipulación, amenazas ni chantaje emocional."

respuesta: "libre"

explicacion: |
  Si existe presión o miedo, la decisión no es libre y, por lo tanto, no hay consentimiento.
```

### 3 — El carácter revocable

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "intermedio"
  tags: ["revocabilidad", "derechos"]

tipo: completar
respuestas_validas:
  - "revocable"

enunciado: "El consentimiento es ___: esto significa que una persona puede cambiar de opinión y retirar su permiso en cualquier momento, incluso si la acción ya ha comenzado."

respuesta: "revocable"

explicacion: |
  El derecho a decir "no" es permanente y se puede ejercer en cualquier etapa de una interacción.
```

### 4 — La especificidad del acuerdo

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "intermedio"
  tags: ["especificidad", "limites"]

tipo: completar
respuestas_validas:
  - "específico"
  - "especifico"

enunciado: "El consentimiento debe ser ___: aceptar una práctica no implica aceptar todas las demás. Cada nueva acción requiere un nuevo acuerdo."

respuesta: "específico"

explicacion: |
  El consentimiento no es un "cheque en blanco". Se da para algo concreto en un momento determinado.
```

### 5 — Conciencia y capacidad

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "avanzado"
  tags: ["conciencia", "capacidad"]

tipo: completar
respuestas_validas:
  - "consciente"

enunciado: "El consentimiento debe ser ___: la persona debe tener la capacidad de comprender lo que está sucediendo y no estar bajo los efectos de sustancias que alteren su juicio."

respuesta: "consciente"

explicacion: |
  Para que una persona pueda decidir, debe estar en pleno uso de sus facultades cognitivas y tener información clara sobre la situación.
```

### 6 — La revocabilidad del consentimiento

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "basico"
  tags: ["derechos", "autonomía"]

tipo: vf
respuesta: falso

enunciado: "Si una persona aceptó realizar una práctica sexual en un momento determinado, esto significa que ya no puede cambiar de opinión y retirar su consentimiento en ese mismo instante."

explicacion: |
  El consentimiento es revocable. Esto significa que cualquier persona tiene el derecho de decir "no" o "pará" en cualquier momento, incluso si antes había dicho que sí. El consentimiento debe ser continuo.
```

### 7 — La especificidad del consentimiento

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "basico"
  tags: ["limites", "autonomía"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un beso en la mejilla", "un beso en la boca"], ["ver una película juntos", "un abrazo"]]

tipo: mc
opciones_explicitas: ["No necesariamente", "Sí, es lo mismo", "Depende de la persona", "Sólo si hay confianza"]
respuesta: "No necesariamente"

enunciado: "Si una persona dice que sí a {escenarios[escenario_idx][0]}, ¿significa que automáticamente está consintiendo {escenarios[escenario_idx][1]}?"

explicacion: |
  El consentimiento es específico. Consentir una práctica no implica consentir todas las demás. Cada nueva acción requiere un nuevo consentimiento.
```

### 8 — El consentimiento y el silencio

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "basico"
  tags: ["comunicación", "respeto"]

tipo: vf
respuesta: falso

enunciado: "El silencio o la falta de un 'no' rotundo se puede interpretar como un 'sí' entusiasta en una situación de intimidad."

explicacion: |
  El consentimiento debe ser afirmativo y entusiasta. La ausencia de resistencia, el miedo, la confusión o el silencio no constituyen un consentimiento válido.
```

### 9 — Presiones y libertad

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "intermedio"
  tags: ["presión", "autonomía"]

tipo: mc
opciones_explicitas: ["Es un consentimiento válido", "No es un consentimiento válido", "Sólo es válido si hay mucha amistad", "Es válido si es por un juego"]
respuesta: "No es un consentimiento válido"

enunciado: "Si una persona accede a un encuentro sexual sólo porque la otra persona insistió mucho, hubo presiones o chantajes emocionales, ¿se puede considerar que hubo consentimiento?"

explicacion: |
  Para que el consentimiento sea válido, debe ser libre. Si hay presión, manipulación o coacción, la libertad de decidir se ve anulada y, por lo tanto, no hay consentimiento.
```

### 10 — El consentimiento y el estado de conciencia

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "intermedio"
  tags: ["capacidades", "derechos"]

tipo: vf
respuesta: falso

enunciado: "Si una persona está bajo los efectos del alcohol o no está en condiciones de comprender lo que sucede, su consentimiento sigue siendo válido para realizar cualquier práctica sexual."

explicacion: |
  Para consentir, la persona debe tener la capacidad de decidir libremente. Si una persona está inconsciente o su capacidad de discernimiento está disminuida por sustancias, no puede otorgar un consentimiento legal ni ético.
```

### 11 — El silencio no es un sí

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "basico"
  tags: ["derechos", "respeto"]

tipo: completar
respuestas_validas:
  - "no"
  - "negativa"
  - "un no"

enunciado: "Si una persona no dice nada, se queda callada o no responde ante una propuesta de contacto físico, no se puede asumir que su respuesta es un sí — hay que asumir que es ___."

respuesta: "no"

explicacion: |
  El silencio, la falta de respuesta o la ausencia de un "sí" entusiasta no significan consentimiento. El consentimiento debe ser afirmativo, libre y claro.
```

### 12 — La continuidad del consentimiento

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "basico"
  tags: ["derechos", "respeto"]

tipo: completar
respuestas_validas:
  - "no"

enunciado: "Haber aceptado tener relaciones sexuales en el pasado ___ significa que la persona está obligada a decir que sí en el presente."

respuesta: "no"

explicacion: |
  El consentimiento es reversible. Que alguien haya dicho que sí en una ocasión anterior no le quita el derecho de decir que no en cualquier otro momento.
```

### 13 — El mito de la vestimenta

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "basico"
  tags: ["derechos", "respeto"]

tipo: completar
respuestas_validas:
  - "no es"

enunciado: "La forma de vestir de una persona o el hecho de que use ropa sugerente ___ puede ser interpretado como un consentimiento para tener contacto sexual."

respuesta: "no es"

explicacion: |
  La ropa que una persona elige usar no es una invitación ni un permiso para el contacto sexual. El consentimiento se basa en la comunicación y el deseo mutuo, no en la apariencia.
```

### 14 — Relaciones previas y pareja

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "basico"
  tags: ["derechos", "respeto"]

tipo: completar
respuestas_validas:
  - "no otorga"

enunciado: "Estar en una relación de pareja o tener un vínculo afectivo con alguien ___ el consentimiento para cada acto sexual específico."

respuesta: "no otorga"

explicacion: |
  El vínculo afectivo o el noviazgo no otorgan derechos sobre el cuerpo del otro. Cada encuentro requiere un nuevo consentimiento mutuo y entusiasta.
```

### 15 — La presión y el coqueteo

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "basico"
  tags: ["derechos", "respeto"]

tipo: completar
respuestas_validas:
  - "no es"

enunciado: "Si una persona accede a tener contacto sexual sólo porque se siente presionada, insistida o manipulada, eso ___ considerado consentimiento."

respuesta: "no es"

explicacion: |
  Para que el consentimiento sea válido, debe ser libre. Si existe presión, insistencia constante o manipulación, la voluntad está viciada y no hay consentimiento real.
```

### 16 — ¿Qué define al consentimiento?

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "basico"
  tags: ["conceptos_clave", "libertad"]

tipo: mc
opciones_explicitas: ["Un acuerdo basado en la libertad y la voluntad propia", "Decir que sí para evitar una pelea", "No decir que no durante toda la situación", "Aceptar algo sólo porque la otra persona insiste mucho"]

respuesta: "Un acuerdo basado en la libertad y la voluntad propia"

enunciado: "Para que el consentimiento sea válido, debe ser una decisión tomada con libertad. ¿Cuál de las siguientes opciones describe un consentimiento real?"

explicacion: |
  El consentimiento debe ser afirmativo, entusiasta y, sobre todo, libre. Si hay presión, miedo o manipulación, la voluntad está viciada y no es válida.
```

### 17 — El consentimiento y el estado de conciencia (2)

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "basico"
  tags: ["sustancias", "inconsciencia"]

tipo: vf
respuesta: falso

enunciado: "Si una persona está bajo los efectos de sustancias que alteran su conciencia o se encuentra inconsciente, puede dar un consentimiento válido para tener relaciones sexuales."

explicacion: |
  La capacidad de decidir requiere conciencia plena. Si una persona no puede responder por sus actos debido al alcohol, drogas o desmayo, no puede consentir.
```

### 18 — Presión y manipulación

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "intermedio"
  tags: ["manipulacion", "presion"]

tipo: mc
opciones_explicitas: ["Sí, porque hubo un acuerdo verbal al final", "No, porque la presión y la manipulación anulan la libertad de elegir", "Sí, siempre que no haya violencia física", "Sólo si la persona se siente culpable por no hacerlo"]

respuesta: "No, porque la presión y la manipulación anulan la libertad de elegir"

enunciado: "Si alguien utiliza chantaje emocional o insistencia constante para que otra persona acceda a un encuentro sexual, ¿se considera que hubo consentimiento?"

explicacion: |
  La manipulación psicológica es una forma de coacción. El consentimiento debe ser libre de presiones externas para ser considerado legítimo.
```

### 19 — El derecho a cambiar de opinión

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "basico"
  tags: ["revocabilidad"]

tipo: vf
respuesta: verdadero

enunciado: "El consentimiento es reversible, lo que significa que una persona puede cambiar de opinión en cualquier momento, incluso si ya había dicho que sí anteriormente."

explicacion: |
  El consentimiento no es un contrato permanente. Se puede retirar en cualquier momento de la situación, y el respeto a esa decisión es fundamental.
```

### 20 — Escenarios de consentimiento nulo

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "intermedio"
  tags: ["escenarios", "validez"]

tipo: mc
opciones_explicitas: ["Cuando hay un 'sí' pero la persona tiene miedo a las consecuencias", "Cuando hay un 'sí' después de muchas insistencias", "Cuando hay un 'sí' bajo efectos de alcohol", "Todas las anteriores son formas de consentimiento nulo"]

respuesta: "Todas las anteriores son formas de consentimiento nulo"

enunciado: "Identificá cuál de estos escenarios describe una situación donde el consentimiento NO es válido:"

explicacion: |
  Para que el consentimiento sea real, debe ser voluntario, reversible, específico y, sobre todo, dado en pleno uso de las facultades mentales y sin miedo.
```

### 21 — El cambio de opinión (escenarios)

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "basico"
  tags: ["derechos", "autonomia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Ana y Luis están besándose. De repente, Ana se siente incómoda y le pide a Luis que pare. Luis acepta y dejan de hacerlo.", "falso"], ["Martín convence a Sofía de hacer algo que ella no quería mediante insistencia constante, hasta que ella finalmente dice que sí para que la dejen de molestar.", "falso"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Analizá el siguiente caso: {escenarios[escenario_idx][0]}. ¿Hubo un consentimiento válido para continuar la actividad?"

explicacion: |
  El consentimiento debe ser entusiasta y reversible. Si una persona cambia de opinión, el consentimiento se retira inmediatamente y debe respetarse. En el segundo caso, la presión o insistencia anula la validez del consentimiento.
```

### 22 — La importancia de la conciencia (escenarios)

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "basico"
  tags: ["respeto", "limites"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Una persona está profundamente dormida y su pareja inicia contacto sexual sin que la persona haya podido responder.", "no"], ["Una persona está bajo los efectos de una sustancia que le impide comprender lo que sucede y no puede decidir.", "no"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["sí", "no"]

enunciado: "En el siguiente escenario: {casos[caso_idx][0]}, ¿se puede considerar que hubo consentimiento?"

explicacion: |
  Para que el consentimiento sea válido, la persona debe estar en pleno uso de sus facultades mentales y con plena conciencia de sus actos. Si hay sueño profundo o pérdida de conciencia por sustancias, no hay consentimiento.
```

### 23 — Presión y chantaje

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "intermedio"
  tags: ["presion", "coercion"]

variables:
  situacion_idx: uno_de([0, 1])
  situaciones: [["'Si me querés, vas a hacer esto que te pido'", "chantaje"], ["'Si no hacés esto, voy a contar un secreto tuyo a tus amigos'", "chantaje"]]

respuesta: situaciones[situacion_idx][1]
tipo: completar
respuestas_validas:
  - "chantaje"

enunciado: "En el caso donde se utiliza la frase {situaciones[situacion_idx][0]}, el consentimiento es inválido porque se está ejerciendo un tipo de ___."

explicacion: |
  El consentimiento debe ser libre. Si se utiliza la manipulación, la amenaza o el chantaje para obtener un "sí", ese consentimiento es nulo porque la voluntad está condicionada por el miedo o la culpa.
```

### 24 — Silencio vs. consentimiento

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "basico"
  tags: ["comunicacion", "limites"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Una persona se queda totalmente quieta y no dice nada, pero su cuerpo se ve tenso y evita el contacto visual.", "falso"], ["Una persona dice 'está bien, hagamos lo que vos quieras' con un tono de voz triste y sin mirar a la otra persona.", "falso"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Analizá el escenario: {escenarios[escenario_idx][0]}. ¿El silencio o la falta de resistencia física significan necesariamente un consentimiento válido?"

explicacion: |
  El consentimiento es afirmativo y activo. El silencio, la pasividad o la sumisión por miedo o incomodidad no constituyen un "sí" válido. El consentimiento debe ser una comunicación clara y positiva.
```

### 25 — Las 3 condiciones básicas del consentimiento

```
metadata:
  materia: "esi"
  tema: "consentimiento"
  nivel: "intermedio"
  tags: ["caracteristicas", "educacion"]

tipo: vf
respuesta: verdadero

enunciado: "Para que el consentimiento sea válido, debe cumplir varias características a la vez: ser libre (sin presión), reversible (se puede cambiar de opinión) y específico (decir sí a una cosa no significa decir sí a todo)."

explicacion: |
  El consentimiento debe cumplir con varias características simultáneamente: libre, informado, específico, revocable y consciente.
```
