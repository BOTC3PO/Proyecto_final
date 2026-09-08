# Derecho — Juicio oral (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Juicio Oral

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["proceso_penal", "definicion"]

tipo: mc
opciones_explicitas: ["La etapa de investigación donde se recolectan elementos de convicción.", "La etapa de debate público donde se presentan pruebas y argumentos para obtener un veredicto.", "La etapa de revisión de la sentencia por un tribunal superior.", "La fase de detención del imputado por parte de la policía."]

respuesta: "La etapa de debate público donde se presentan pruebas y argumentos para obtener un veredicto."

enunciado: "El juicio oral se define fundamentalmente como:"

explicacion: |
  El juicio oral es la etapa culminante del proceso penal, caracterizada por la oralidad, la inmediación y la publicidad, donde se debate la culpabilidad o inocencia.
```

### 2 — El rol del Tribunal

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["sujetos_procesales", "juez"]

tipo: vf
enunciado: "En un juicio oral, el tribunal tiene la función de dictar una sentencia basada en las pruebas presentadas durante el debate."

respuesta: verdadero

explicacion: |
  Correcto. El tribunal (juez o tribunal de enjuiciamiento) debe valorar las pruebas bajo las reglas de la sana crítica para emitir un fallo.
```

### 3 — Secuencia del Juicio Oral

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["etapas", "orden_procesal"]

tipo: ordenar
opciones_explicitas: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Sentencia"]

enunciado: "Ordene cronológicamente las etapas principales de un debate en juicio oral:"

respuesta_orden: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Sentencia"]

explicacion: |
  El juicio comienza con la presentación de las teorías del caso (apertura), sigue con el examen de testigos y peritos (prueba), los alegatos finales (clausura) y concluye con el fallo (sentencia).
```

### 4 — Terminología: Alegatos

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["argumentacion", "terminos"]

tipo: completar
respuestas_validas:
  - "clausura"
  - "apertura"

enunciado: "El alegato de ___ es la exposición final que realiza cada parte para convencer al tribunal de su teoría del caso tras la producción de la prueba."

respuesta: "clausura"

explicacion: |
  El alegato de clausura es la oportunidad para la parte para realizar un análisis crítico de la prueba producida y reforzar su pretensión.
```

### 5 — Principios del Juicio

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["principios", "publicidad"]

enunciado: "Si el juicio se realiza en una sala abierta al público y sin restricciones de acceso, se está cumpliendo con el principio de ___."

pasos:
  - "Identificar el principio relacionado con la visibilidad del acto."

tipo: mc
opciones_explicitas: ["Publicidad", "Inmediación", "Contradicción", "Oralidad"]

respuesta: "Publicidad"

explicacion: |
  El principio de publicidad garantiza que los actos procesales sean conocidos por la sociedad, asegurando transparencia en la administración de justicia.
```

### 6 — El rol de la prueba testimonial

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["procedimiento", "pruebas"]

respuesta: "testigo"
tipo: completar
respuestas_validas:
  - "testigo"

enunciado: "Durante la etapa de debate en el juicio oral, la persona que comparece para declarar sobre hechos que presenció se denomina ___."

explicacion: |
  En el juicio oral, el testigo es el sujeto que aporta información directa sobre los hechos objeto del proceso.
```

### 7 — Validez de la prueba en el debate

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["principios", "legalidad"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible que el tribunal dicte sentencia basándose en pruebas que no fueron producidas y debatidas durante la etapa de juicio oral?"

explicacion: |
  Falso. El principio de inmediación y contradicción exige que toda prueba utilizada para la sentencia haya sido debidamente producida en el juicio oral.
```

### 8 — Secuencia del debate oral

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["etapas", "procedimiento"]

respuesta_orden: ["Alegato de apertura", "Producción de prueba", "Alegatos de clausura"]
tipo: ordenar
opciones_explicitas: ["Alegato de apertura", "Producción de prueba", "Alegatos de clausura"]

enunciado: "Ordene cronológicamente las etapas fundamentales del debate en un juicio oral:"

explicacion: |
  El juicio comienza con la presentación de las teorías del caso (apertura), sigue con la incorporación de elementos de convicción (prueba) y finaliza con las conclusiones (clausura).
```

### 9 — El veredicto y la decisión

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["sentencia", "veredicto"]

respuesta: "condena"
tipo: mc
opciones_explicitas: ["absolución", "condena"]

enunciado: "Si tras la valoración de la prueba el tribunal determina que la culpabilidad ha sido acreditada más allá de toda duda razonable, el resultado es una ___."

explicacion: |
  La condena es el acto mediante el cual se impone una pena tras haber probado la responsabilidad penal.
```

### 10 — El control de la prueba

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "avanzado"
  tags: ["derechos", "defensa"]

respuesta: verdadero
tipo: vf

enunciado: "En el juicio oral, el derecho a la contradicción implica que las partes pueden objetar la prueba presentada por la contraparte. ¿Es este un derecho fundamental para asegurar un juicio justo?"

explicacion: |
  La contradicción es la facultad de controlar la prueba de la contraparte, permitiendo el control de la veracidad y legalidad de los elementos presentados.
```

### 11 — ¿El veredicto es inapelable?

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["procedimiento", "recursos"]

respuesta: falso
tipo: vf

enunciado: "En un juicio oral, una vez que el tribunal dicta el veredicto o sentencia, esto significa que la decisión es definitiva y no puede ser revisada por una instancia superior mediante un recurso de apelación."

explicacion: |
  Falso. El principio de la doble instancia permite que las partes impugnen la sentencia ante un tribunal superior para que esta sea revisada, siempre que se cumplan los requisitos legales.
```

### 12 — Confusión sobre la carga de la prueba

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["carga_de_la_prueba", "principios"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[0, "El imputado debe demostrar su inocencia"], [1, "La fiscalía debe demostrar la culpabilidad"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["El imputado debe demostrar su inocencia", "La fiscalía debe demostrar la culpabilidad", "Ambas partes deben probar todo lo que aleguen", "El juez decide qué debe probarse"]

enunciado: "En el marco del juicio oral y bajo el principio de presunción de inocencia, ¿cuál es la carga de la prueba respecto a la responsabilidad penal?"

explicacion: |
  La carga de la prueba recae sobre la parte acusadora (fiscalía/querella). El imputado no tiene la obligación de probar su inocencia; es el Estado quien debe destruir la presunción de inocencia mediante pruebas de cargo.
```

### 13 — Orden de las etapas en el juicio

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["etapas", "procedimiento"]

respuesta_orden: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Deliberación y veredicto"]
tipo: ordenar
opciones_explicitas: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Deliberación y veredicto"]

enunciado: "Para que el juicio oral sea válido, se debe respetar un orden lógico y cronológico en sus etapas. Ordene las siguientes fases según el desarrollo estándar de un debate oral:"

explicacion: |
  El juicio comienza con la presentación de las teorías del caso (apertura), sigue con la recepción de evidencia (testigos, peritos, documentos), luego las conclusiones finales (clausura) y termina con la decisión del tribunal.
```

### 14 — El rol del juez en la producción de prueba

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["juez", "imparcialidad"]

respuesta: "imparcial"
tipo: completar
respuestas_validas:
  - "imparcial"

enunciado: "Durante la etapa de producción de prueba en el juicio oral, el juez debe mantener un rol ___ y no debe proponer pruebas de oficio que no hayan sido solicitadas por las partes, para no vulnerar la imparcialidad."

explicacion: |
  El sistema acusatorio exige que el juez sea un tercero imparcial. Si el juez busca o propone pruebas, se rompe la igualdad de armas entre la acusación y la defensa.
```

### 15 — ¿Se pueden presentar pruebas nuevas en el juicio?

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "avanzado"
  tags: ["pruebas", "limites"]

respuesta: "excepcional"

enunciado: "En un juicio oral, la regla general es la prohibición de introducir elementos de convicción que no hayan sido debidamente anunciados y admitidos en la etapa intermedia. Sin embargo, la incorporación de prueba nueva es ___ si se demuestra que es un elemento sobreviniente que no pudo ser conocido antes."

tipo: mc
opciones_explicitas: ["prohibido", "excepcional", "obligatorio", "imposible"]

explicacion: |
  Aunque el juicio oral se rige por la preclusión (lo que no se anunció antes, no entra), existe la excepción de la "prueba sobreviniente" para garantizar la búsqueda de la verdad real.
```

### 16 — Diferencia entre Juicio Oral y Etapa de Instrucción

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["proceso_penal", "etapas"]

respuesta: "audiencia"
tipo: "completar"
respuestas_validas:
  - "audiencia"

enunciado: "A diferencia de la etapa de instrucción, donde se recolectan elementos de convicción, el juicio oral se desarrolla mediante una ___ pública y contradictoria."

explicacion: |
  La etapa de instrucción tiene como fin la investigación y recolección de pruebas, mientras que el juicio oral es la etapa de debate y decisión.
```

### 17 — Principio de Inmediación en el Juicio Oral

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["principios_procesales", "inmediación"]

respuesta: verdadero
tipo: "vf"

enunciado: "El principio de inmediación exige que el tribunal debe tener contacto directo con la producción de la prueba durante el juicio oral, sin intermediarios."

explicacion: |
  La inmediación es un pilar del juicio oral: el juez debe presenciar directamente la declaración de testigos y peritos para valorar la prueba.
```

### 18 — Elementos que distinguen el Juicio Oral

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["caracteristicas", "debate"]

respuesta: "Oralidad"
tipo: "mc"
opciones_explicitas: ["Oralidad", "Escrituriedad", "Secreto", "Inmediatez"]

enunciado: "Si bien ambos procesos buscan la verdad, lo que distingue fundamentalmente al juicio oral de los sistemas escritos antiguos es la ___."

explicacion: |
  La oralidad permite la contradicción inmediata y la fluidez del debate, a diferencia de los sistemas donde solo se leen actas escritas.
```

### 19 — Secuencia del Debate en Juicio Oral

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["procedimiento", "orden"]

respuesta_orden: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura"]
tipo: "ordenar"
opciones_explicitas: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura"]

enunciado: "Ordene cronológicamente las fases principales del debate en un juicio oral:"

explicacion: |
  El juicio comienza con la presentación de las teorías del caso (apertura), sigue con el examen de pruebas y finaliza con los argumentos finales (clausura).
```

### 20 — El rol de la prueba en el Juicio Oral

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "avanzado"
  tags: ["pruebas", "argumentacion"]

variables:
  escenario: uno_de([0, 1])
  datos: [["presentación de pruebas", "determinar culpabilidad"], ["argumentos", "convencer al juez"]]

respuesta: datos[escenario][1]
tipo: "mc"
opciones_explicitas: ["presentación de pruebas", "argumentos", "determinar culpabilidad", "convencer al juez"]

enunciado: "En el juicio oral, ¿cuál es el objetivo principal de la etapa de {datos[escenario][0]}?"

explicacion: |
  El objetivo de la producción probatoria es aportar elementos que permitan al tribunal alcanzar la certeza necesaria para dictar un veredicto.
```

### 21 — El rol del fiscal en el juicio

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["proceso_penal", "fiscalia"]

enunciado: "En el escenario donde el fiscal presenta un testigo que afirma haber visto al imputado cometiendo el robo, ¿qué parte está ejerciendo la carga de la prueba?"

respuesta: "acusación"
tipo: mc
opciones_explicitas: ["acusación", "defensa", "tribunal", "testigo"]

explicacion: |
  En el proceso penal, la carga de la prueba recae sobre la parte acusadora (fiscalía) para desvirtuar la presunción de inocencia.
```

### 22 — Verdad o Falso: El veredicto

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["veredicto", "sentencia"]

enunciado: "El veredicto es la decisión final que dicta el tribunal tras haber valorado las pruebas presentadas durante el juicio oral."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. El veredicto es el acto mediante el cual el juzgador comunica su decisión sobre la culpabilidad o inocencia del acusado.
```

### 23 — Ordenar las etapas del debate

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["etapas", "debate"]

enunciado: "Ordene cronológicamente las etapas fundamentales de un juicio oral:"

respuesta_orden: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Deliberación y veredicto"]
tipo: ordenar
opciones_explicitas: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura", "Deliberación y veredicto"]

explicacion: |
  El juicio inicia con la presentación de las teorías del caso (apertura), sigue con la recepción de evidencia, concluye con los argumentos finales (clausura) y termina con la decisión del tribunal.
```

### 24 — El principio de inmediación

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "avanzado"
  tags: ["principios", "inmediación"]

variables:
  datos: [["El juez no estuvo presente durante el interrogatorio de un testigo clave.", "invalida"], ["El juez presenció toda la evacuación de la prueba de ADN.", "valida"]]
  idx: uno_de([0, 1])

enunciado: "Si en un juicio {datos[idx][0]}, la validez del acto procesal se considera ___."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

explicacion: |
  El principio de inmediación exige que el tribunal esté en contacto directo con la producción de la prueba para poder valorarla correctamente.
```

### 25 — La carga de la prueba en un caso de duda

```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["principios", "in dubio pro reo"]

enunciado: "Si la prueba presentada por la fiscalía es insuficiente y surge una duda razonable, el juez debe dictar una sentencia de ___."

respuesta: "absolución"
tipo: mc
opciones_explicitas: ["condena", "absolución", "anulación", "suspensión"]

explicacion: |
  Bajo el principio 'in dubio pro reo', ante la duda razonable o prueba insuficiente, la decisión debe favorecer al imputado mediante la absolución.
```
