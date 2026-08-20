# Investigacion — Argumentar desde evidencia (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de evidencia científica

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["definicion", "evidencia"]

respuesta: "datos"
tipo: completar
respuestas_validas:
  - "datos"
  - "información empírica"

enunciado: "Para construir un argumento científico sólido, es necesario apoyarse en ___ que permitan validar o refutar una hipótesis."

explicacion: |
  La evidencia en ciencia se compone de datos u observaciones sistemáticas que sirven de base para el razonamiento.
```

### 2 — La objeción en el debate científico

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["objecion", "debate"]

variables:
  escenario: uno_de([["Un científico presenta un estudio sobre el cambio climático.", "una observación contradictoria"], ["Un investigador propone una nueva vacuna.", "un estudio que muestra efectos secundarios"], ["Un biólogo afirma que una especie está en peligro.", "un censo que muestra población estable"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["una observación contradictoria", "un estudio que muestra efectos secundarios", "un censo que muestra población estable"]

enunciado: "Si un investigador presenta una conclusión, la respuesta a una ___ es un componente clave del proceso de refutación o validación científica."

pasos:
  - "Identificar la conclusión del argumento original."
  - "Analizar la naturaleza de la objeción presentada."
  - "Buscar evidencia que responda directamente a esa objeción."

explicacion: |
  Una objeción es un argumento o dato que desafía la validez de una conclusión previa; responderle con evidencia es la base de la argumentación científica.
```

### 3 — Veracidad de la evidencia

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["veracidad", "booleano"]

respuesta: verdadero

tipo: vf

enunciado: "¿Es suficiente presentar una opinión personal para defender una conclusión científica ante una objeción?"

explicacion: |
  Falso. En la ciencia, la opinión no constituye evidencia; se requieren datos, mediciones o hechos verificables.
```

### 4 — Componentes de un argumento sólido

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["estructura", "argumentacion"]

respuesta_orden: ["Premisa", "Evidencia", "Conclusión"]
tipo: ordenar
opciones_explicitas: ["Premisa", "Evidencia", "Conclusión"]

enunciado: "Ordene los elementos de un argumento científico estándar, desde el punto de partida hasta el cierre lógico:"

explicacion: |
  Un argumento científico parte de una premisa (afirmación), se sostiene mediante evidencia (datos) y culmina en una conclusión lógica.
```

### 5 — El rol de la evidencia ante la objeción

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["defensa", "argumentacion"]

variables:
  caso: uno_de([["La hipótesis es falsa", "la evidencia es insuficiente"], ["La conclusión es correcta", "los datos son erróneos"], ["El método es válido", "la muestra es sesgada"]])

respuesta: caso[1]

tipo: mc
opciones_explicitas: ["la evidencia es insuficiente", "los datos son erróneos", "la muestra es sesgada"]

enunciado: "Cuando se enfrenta una objeción que cuestiona la validez de un dato, la defensa más efectiva consiste en demostrar que ___."

explicacion: |
  Si la objeción ataca la calidad de la información, la defensa debe centrarse en la robustez y representatividad de los datos utilizados.
```

### 6 — Defensa de hipótesis por datos

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["evidencia", "argumentacion", "metodologia"]

variables:
  escenario: uno_de([["El aumento de la temperatura global coincide con el incremento de CO2", "El aumento de la temperatura global es causado por el CO2"], ["El fármaco X reduce la presión arterial en el grupo de prueba", "El fármaco X es efectivo para tratar la hipertensión"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["La correlación no implica causalidad", escenario[1], "La muestra es demasiado pequeña", "Los datos son insuficientes"]

enunciado: "Ante la objeción de que los datos solo muestran una relación estadística, la defensa científica más sólida basada en la evidencia es: ___"

explicacion: |
  Para defender una conclusión, no basta con señalar la correlación; se debe argumentar que la evidencia respalda el mecanismo causal propuesto.
```

### 7 — Identificación de falacia por falta de evidencia

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["falacia", "evidencia", "logica"]

respuesta: falso
tipo: vf

enunciado: "Si un investigador afirma que 'una teoría es verdadera solo porque ha funcionado en experimentos previos, sin presentar los datos crudos de dichos experimentos', está utilizando una evidencia sólida para su defensa."

explicacion: |
  Afirmar que algo es cierto basándose solo en éxitos pasados sin mostrar los datos que sustentan esos éxitos es una apelación a la autoridad o una generalización apresurada, no una argumentación basada en evidencia científica.
```

### 8 — Estructura del argumento científico

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["estructura", "argumento", "evidencia"]

respuesta_orden: ["Observación/Dato", "Inferencia/Análisis", "Conclusión"]
tipo: ordenar
opciones_explicitas: ["Inferencia/Análisis", "Conclusión", "Observación/Dato"]

enunciado: "Para construir un argumento científico robusto que responda a una objeción, se debe seguir este orden lógico de presentación de la evidencia:"

explicacion: |
  Un argumento científico debe partir de los hechos observados (datos), pasar por el análisis de esos datos (inferencia) y culminar en la conclusión que se defiende.
```

### 9 — Respuesta ante la objeción de variables extrañas

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["variables", "control", "evidencia"]

variables:
  caso: uno_de([["Aumento de ventas de helados y aumento de ataques de tiburones", "El calor causa ambos"], ["Uso de fertilizante y crecimiento de plantas", "El fertilizante causa el crecimiento"]])
  solucion: ["Controlar variables externas", "Ignorar la objeción", "Cambiar la conclusión", "Aceptar la correlación"]

respuesta: solucion[0]
tipo: mc
opciones_explicitas: ["Controlar variables externas", "Ignorar la objeción", "Cambiar la conclusión", "Aceptar la correlación"]

enunciado: "En el caso de {caso}, si un revisor objeta que existe una variable de confusión (como el clima), la defensa científica correcta para mantener la validez de la conclusión es: ___"

explicacion: |
  La defensa ante una variable de confusión consiste en demostrar, mediante el control de variables o análisis estadísticos adicionales, que el efecto observado persiste independientemente de la variable externa.
```

### 10 — Completar el proceso de refutación

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["refutacion", "evidencia", "metodologia"]

respuesta: ["datos", "conclusión"]
tipo: completar
respuestas_validas:
  - "datos"
  - "conclusión"

enunciado: "Para refutar una objeción científica, el investigador debe presentar ___ que contradiga la crítica y así validar su ___ original."

explicacion: |
  La ciencia se basa en la evidencia; sin datos que respalden la posición frente a una crítica, la conclusión pierde validez científica.
```

### 11 — Evidencia vs. Opinión

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["argumentacion", "metodologia"]

tipo: mc
opciones_explicitas: ["Una opinión basada en la experiencia personal", "Un dato estadístico derivado de un muestreo representativo", "Una afirmación sin respaldo verificable", "Una creencia compartida por la comunidad científica"]
respuesta: "Un dato estadístico derivado de un muestreo representativo"

enunciado: "En el contexto de la investigación científica, ¿cuál de las siguientes opciones constituye una evidencia sólida para defender una conclusión?"

explicacion: |
  La evidencia científica debe ser reproducible y estar respaldada por datos obtenidos mediante métodos sistemáticos, no puede basarse únicamente en la subjetividad o la experiencia anecdótica.
```

### 12 — El error de la correlación

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["errores_logicos", "correlacion"]

tipo: vf
respuesta: falso

enunciado: "Si un estudio muestra que dos variables aumentan simultáneamente (correlación), esto es evidencia suficiente para afirmar que una variable causa la otra (causalidad)."

explicacion: |
  La correlación no implica causalidad. Que dos eventos ocurran al mismo tiempo no significa que uno sea la causa del otro; puede haber una tercera variable influyendo en ambos o ser una coincidencia estadística.
```

### 13 — Respuesta ante la objeción

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["debate", "defensa_conclusion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El investigador presenta un gráfico con tendencia clara y valores de p < 0.05", "El investigador repite su conclusión sin mostrar nuevos datos"], ["El investigador utiliza una muestra de 1000 sujetos con control de variables", "El investigador utiliza una muestra de 5 sujetos sin grupo de control"]]
  respuestas: ["Es una defensa válida mediante evidencia cuantitativa", "Es una falacia de autoridad o repetición"]

tipo: completar
respuestas_validas:
  - "Es una defensa válida mediante evidencia cuantitativa"
  - "Es una falacia de autoridad o repetición"
respuesta: escenarios[escenario_idx][1]

enunciado: "Ante una objeción científica, si el investigador actúa como en el escenario {escenarios[escenario_idx][0]}, su respuesta es: ___"

explicacion: |
  Para defender una conclusión, no basta con insistir en la idea; se requiere aportar datos que refuten la objeción o que fortalezcan la validez del hallazgo original.
```

### 14 — Pasos para la validación

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["metodologia", "proceso"]

tipo: ordenar
opciones_explicitas: ["Recopilar datos mediante observación o experimento", "Analizar los datos para encontrar patrones", "Formular una conclusión basada en la evidencia", "Contrastar la conclusión con la objeción recibida"]

enunciado: "Ordene los pasos lógicos para construir un argumento científico sólido que responda a una duda sobre un hallazgo:"

explicacion: |
  El proceso debe seguir un orden lógico: primero se obtiene la información, luego se procesa, se llega a una conclusión y finalmente se usa esa estructura para responder a críticas.
respuesta_orden: ["Recopilar datos mediante observación o experimento", "Analizar los datos para encontrar patrones", "Formular una conclusión basada en la evidencia", "Contrastar la conclusión con la objeción recibida"]
```

### 15 — La importancia del contraejemplo

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["falsacion", "evidencia"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si una conclusión científica es 'Todos los elementos X presentan la propiedad Y', y un crítico presenta un elemento X que NO tiene la propiedad Y, ¿qué ha presentado el crítico?"

respuesta: "contraejemplo"

explicacion: |
  Un solo contraejemplo basado en evidencia empírica es suficiente para refutar una generalización universal, obligando al investigador a revisar su conclusión o sus premisas.
```

### 16 — Evidencia vs. Opinión

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["metodologia", "argumentacion"]

respuesta: "evidencia"
tipo: "completar"
respuestas_validas:
  - "evidencia"
  - "datos"
  - "hechos"

enunciado: "Mientras que una opinión es un juicio subjetivo sin necesidad de validación, la ___ es un dato o hecho comprobable que sustenta una conclusión científica."

explicacion: |
  La evidencia científica se distingue de la opinión porque es verificable, reproducible y puede ser contrastada mediante observación o experimentación.
```

### 17 — Distinción entre Correlación y Causalidad

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["logica", "metodologia"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["Aumento de ventas de helados", "Aumento de ataques de tiburones"], ["Aumento de temperatura global", "Aumento de incendios forestales"]]

respuesta: "correlación"
tipo: "mc"
opciones_explicitas: ["causalidad", "correlación", "coincidencia", "hipótesis"]

enunciado: "En el escenario {escenarios[escenario_idx][0]} y {escenarios[escenario_idx][1]}, la relación observada entre ambas variables es una {escenarios[escenario_idx][1]} pero no necesariamente una relación de causa-efecto. ¿Cómo se define este fenómeno?"

explicacion: |
  La correlación indica que dos variables cambian juntas, pero no implica que una cause la otra. Confundir esto con causalidad es un error lógico común en la argumentación científica.
```

### 18 — Validez de la Evidencia

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["logica", "argumentacion"]

respuesta: falso
tipo: "vf"

enunciado: "Una conclusión científica es válida si se basa únicamente en la experiencia personal de un investigador, independientemente de si otros científicos pueden replicar el resultado."

explicacion: |
  Falso. La ciencia requiere replicabilidad y evidencia empírica que trascienda la subjetividad individual para ser considerada válida.
```

### 19 — Jerarquía de la Evidencia

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["metodologia", "jerarquia"]

respuesta_orden: ["Opinión de experto", "Estudio de caso", "Estudio observacional", "Ensayo clínico aleatorizado"]
tipo: "ordenar"
opciones_explicitas: ["Opinión de experto", "Estudio de caso", "Estudio observacional", "Ensayo clínico aleatorizado"]

enunciado: "Ordene los siguientes niveles de evidencia de MENOR a MAYOR rigor científico para defender una conclusión médica:"

explicacion: |
  El rigor aumenta a medida que se controla la selección de la muestra y se minimizan los sesgos, siendo los ensayos clínicos aleatorizados el estándar de oro.
```

### 20 — Evidencia vs. Hipótesis

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["metodologia", "logica"]

respuesta: "hipótesis"
tipo: "completar"
respuestas_validas:
  - "hipótesis"
  - "suposición"
  - "conjetura"

enunciado: "Una ___ es una explicación provisional que requiere ser contrastada con evidencia para ser aceptada, mientras que la evidencia es el soporte empírico que permite validarla o refutarla."

explicacion: |
  La hipótesis es el punto de partida de la investigación (una propuesta explicativa), mientras que la evidencia es la herramienta para probar si dicha propuesta es correcta.
```

### 21 — Defensa de la hipótesis climática

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["argumentacion", "evidencia", "ciencia"]

variables:
  escenario_idx: uno_de([0, 1])
  objecion: ["la variabilidad natural", "la falta de mediciones precisas"]
  evidencia_correcta: ["datos de registros satelitales", "datos de núcleos de hielo"]

respuesta: evidencia_correcta[escenario_idx]
tipo: mc
opciones_explicitas: ["datos de registros satelitales", "datos de núcleos de hielo", "observaciones anecdóticas", "teorías sin sustento"]

enunciado: "Un investigador afirma que el calentamiento es antropogénico. Un crítico objeta que {objecion[escenario_idx]}. Para defender su conclusión, el investigador debe presentar como evidencia: ___"

explicacion: |
  Para refutar una objeción sobre la variabilidad natural o errores de medición, se requiere evidencia empírica directa (registros o núcleos de hielo) que descarte la causa propuesta por el crítico.
```

### 22 — Validación de resultados experimentales

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["metodologia", "evidencia"]

variables:
  caso_idx: uno_de([0, 1])
  escenario: [["El grupo control no mostró cambios significativos", "El grupo experimental redujo la carga viral en un 90%"], ["La muestra fue insuficiente para generalizar", "El fármaco mostró una eficacia del 85% en ensayos clínicos"]]
  objecion: ["la varianza es demasiado alta", "el efecto es producto del azar"]

respuesta: verdadero
tipo: vf

enunciado: "En un ensayo clínico, si el grupo experimental muestra una reducción del 90% en la carga viral frente a un grupo control estable, y la desviación estándar es mínima, ¿es válido argumentar que el fármaco es efectivo para refutar la objecion de que {objecion[caso_idx]}?"

explicacion: |
  La evidencia estadística (reducción significativa y baja varianza) es la base para defender una conclusión científica frente a críticas sobre la aleatoriedad.
```

### 23 — Estructura del argumento científico

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["logica", "argumentacion"]

variables:
  orden_idx: uno_de([0, 1])
  pasos_correctos: [["Observación de datos", "Formulación de hipótesis", "Contraste con evidencia", "Conclusión"], ["Recolección de muestra", "Análisis estadístico", "Revisión de pares", "Publicación de resultados"]]

respuesta_orden: pasos_correctos[orden_idx]
tipo: ordenar
opciones_explicitas: pasos_correctos[orden_idx]

enunciado: "Para construir un argumento científico sólido que resista una objeción, se debe seguir un orden lógico de validación. Ordene los pasos para el caso de una investigación de campo:"

explicacion: |
  Un argumento científico no es solo una opinión; es una secuencia lógica que parte de la observación y pasa por el contraste riguroso de la evidencia antes de concluir.
```

### 24 — Identificación de falacias en la objeción

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["logica", "critica"]

variables:
  ejemplo_idx: uno_de([0, 1])
  objecion_texto: [["Si no puedes medir el efecto exacto de cada molécula, entonces tu teoría es falsa", "No has probado que el cambio sea causado por el CO2, por lo tanto, el CO2 no influye"], ["No has probado que el cambio sea causado por el CO2, por lo tanto, el CO2 no influye", "Si no puedes medir el efecto exacto de cada molécula, entonces tu teoría es falsa"]]

respuesta: "falacia de la evidencia insuficiente"
tipo: completar
respuestas_validas:
  - "falacia de la evidencia insuficiente"
  - "error de generalización"

enunciado: "Ante la objecion: '{objecion_texto[ejemplo_idx]}', el investigador debe identificar que el crítico está cometiendo una ___ para poder responder con datos que cubran el margen de error."

explicacion: |
  Cuando un crítico exige una certeza absoluta (imposible en ciencia) para invalidar una tendencia, está incurriendo en una falacia de evidencia insuficiente.
```

### 25 — Selección de evidencia relevante

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["evidencia", "datos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: ["Se estudia la eficacia de un nuevo fertilizante", "Se estudia la relación entre horas de sueño y memoria"]
  dato_relevante: ["kg de biomasa por planta", "puntuación en test de retención"]
  objecion: ["la calidad del suelo no fue controlada", "el nivel de estrés de los sujetos"]

respuesta: dato_relevante[escenario_idx]
tipo: mc
opciones_explicitas: ["kg de biomasa por planta", "puntuación en test de retención", "opinión de los agricultores", "color de las hojas"]

enunciado: "Para defender la eficacia de {escenario[escenario_idx]} frente a la objecion de que {objecion[escenario_idx]}, el dato científico más concreto es: ___"

explicacion: |
  La defensa de una conclusión depende de la elección de la variable dependiente correcta que cuantifique directamente el fenómeno estudiado.
```
