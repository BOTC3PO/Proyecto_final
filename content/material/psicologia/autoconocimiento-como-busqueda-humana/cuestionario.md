# Psicologia — Autoconocimiento como busqueda humana (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Naturaleza del autoconocimiento

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["definicion", "proceso"]

respuesta: falso
tipo: vf

enunciado: "El autoconocimiento es un estado estático que se alcanza una vez que se han identificado todos los rasgos de la personalidad."

explicacion: |
  El autoconocimiento es un proceso dinámico y continuo; a medida que vivimos nuevas experiencias, nuestra percepción de nosotros mismos se transforma.
```

### 2 — El proceso de introspección

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["vocabulario", "introspeccion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["la observación de los propios pensamientos", "la introspección"], ["el análisis de las reacciones ajenas", "la proyección"]]

respuesta: datos[escenario_idx][0]
tipo: completar
respuestas_validas:
  - "la observación de los propios pensamientos"
  - "la introspección"

enunciado: "El proceso mediante el cual una persona dirige su atención hacia su propio mundo interno para comprender sus emociones y pensamientos se denomina ___."

explicacion: |
  La introspección es la herramienta fundamental del autoconocimiento, permitiendo mirar hacia adentro para entender nuestra subjetividad.
```

### 3 — Dimensiones del Yo

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["dimensiones", "identidad"]

respuesta: "Yo Real"
tipo: mc
opciones_explicitas: ["Yo Ideal", "Yo Real", "Yo Social", "Yo Ficticio"]

enunciado: "Cuando una persona se reconoce a sí misma tal como es en la actualidad, con sus virtudes y defectos reales, está haciendo contacto con su ___."

explicacion: |
  Diferenciar entre quiénes somos (Yo Real) y quiénes nos gustaría ser (Yo Ideal) es un paso crucial en el proceso de autoconocimiento.
```

### 4 — Elementos del autoconocimiento

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["componentes", "identidad"]

respuesta_orden: ["Valores", "Emociones", "Creencias", "Capacidades"]
tipo: ordenar

opciones_explicitas: ["Valores", "Emociones", "Creencias", "Capacidades"]

enunciado: "Ordena los siguientes elementos que forman parte de la estructura de la identidad personal, desde el componente más profundo/interno hacia el más expresivo/externo:"

pasos:
  - "Identificar los principios rectores (lo que nos guía)."
  - "Reconocer cómo nos sentimos ante los estímulos."
  - "Identificar las ideas que aceptamos como verdades."
  - "Reconocer las habilidades y destrezas que poseemos."

explicacion: |
  El autoconocimiento implica integrar valores, emociones, creencias y capacidades en una visión coherente de uno mismo.
```

### 5 — El autoconocimiento y el cambio

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["dinamismo", "evolucion"]

variables:
  casos: ["un proceso de transformación constante", "un dato estático y definitivo"]
  caso_idx: uno_de([0, 1])
  respuesta_correcta: casos[caso_idx]

enunciado: "Debido a que el ser humano es un ser histórico y cambiante, el autoconocimiento debe entenderse como ___."

tipo: completar
respuestas_validas:
  - "un proceso de transformación constante"
  - "un dato estático y definitivo"

explicacion: |
  Dado que nuestras circunstancias y madurez cambian, el autoconocimiento no es un destino, sino un camino de exploración permanente.
```

### 6 — La naturaleza del autoconocimiento

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["proceso", "identidad", "evolucion"]

respuesta: falso
tipo: vf

enunciado: "El autoconocimiento es un estado estático que se alcanza una vez que hemos identificado todos nuestros rasgos de personalidad."

explicacion: |
  El autoconocimiento es un proceso dinámico y continuo. A medida que vivimos nuevas experiencias y atravesamos diferentes etapas vitales, nuestra percepción de nosotros mismos se transforma.
```

### 7 — El caso de Julián: El cambio de valores

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["valores", "evolucion", "identidad"]

variables:
  escenario: uno_de([["Julián valoraba el éxito profesional por el estatus.", "estatus"], ["Julián valoraba la estabilidad para su familia.", "familia"]])

enunciado: "Consideremos el caso de una persona cuyas prioridades cambian con el tiempo. Si Julián hoy siente que su motivación principal es {escenario[0]}, su autoconocimiento es un proceso que refleja su evolución actual."

pasos:
  - "Identificar el valor predominante en la etapa actual."
  - "Reconocer que este valor puede haber sido distinto en el pasado."

opciones_explicitas: ["es un dato fijo", "es un proceso dinámico"]
respuesta: "es un proceso dinámico"
tipo: mc

explicacion: |
  El cambio en los valores de Julián demuestra que el 'yo' no es una entidad inmutable, sino una construcción que se renegocia constantemente con el entorno.
```

### 8 — Etapas de la introspección

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "avanzado"
  tags: ["metodologia", "introspeccion", "pasos"]

opciones_explicitas: ["Observar una emoción", "Analizar el origen de la emoción", "Integrar el aprendizaje en la conducta"]
respuesta_orden: ["Observar una emoción", "Analizar el origen de la emoción", "Integrar el aprendizaje en la conducta"]
tipo: ordenar

enunciado: "Para que el autoconocimiento sea efectivo en un proceso terapéutico o de crecimiento, se suele seguir una secuencia lógica de profundización. Ordena estos pasos de lo más superficial a lo más profundo:"

explicacion: |
  El autoconocimiento requiere pasar de la mera percepción sensorial de un estado (observación) a la comprensión de su causa (análisis) y, finalmente, a la transformación personal (integración).
```

### 9 — La sombra y el descubrimiento

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["sombra", "inconsciente", "descubrimiento"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["reaccionar con ira ante un compañero", "ira"], ["sentir envidia ante un logro ajeno", "envidia"]]

enunciado: "Al analizar el caso donde una persona experimenta {casos[caso_idx][0]}, descubre un aspecto de su personalidad que no había integrado previamente. Este descubrimiento es un ejemplo de que conocerse implica:"

opciones_explicitas: ["Solo reconocer lo que nos gusta", "Descubrir aspectos ocultos o no integrados"]
respuesta: "Descubrir aspectos ocultos o no integrados"
tipo: mc

explicacion: |
  El autoconocimiento no es solo una lista de virtudes; implica el proceso de traer a la consciencia aquellos aspectos (la 'sombra') que mantenemos ocultos o negados.
```

### 10 — El factor de la experiencia

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["experiencia", "aprendizaje", "identidad"]

respuesta: "un proceso"
tipo: completar
respuestas_validas:
  - "un proceso"
  - "un camino"
  - "una búsqueda"

enunciado: "Dado que el ser humano está en constante interacción con un entorno cambiante, el autoconocimiento no puede ser considerado un dato, sino que debe entenderse como ___."

explicacion: |
  La interacción constante con lo nuevo impide que el autoconocimiento sea una meta final; siempre hay nuevos matices de nuestra identidad por descubrir.
```

### 11 — ¿Es el autoconocimiento un destino?

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["procesos", "identidad", "dinamismo"]

respuesta: falso
tipo: vf

enunciado: "El autoconocimiento es un estado estático que se alcanza una vez que se descubren todos los rasgos de la personalidad, por lo tanto, una vez logrado, el proceso termina."

explicacion: |
  El autoconocimiento es un proceso dinámico y continuo. Debido a que los seres humanos somos seres en constante cambio (biológico, emocional y socialmente), la búsqueda de la identidad es una construcción permanente, no un dato fijo o un destino final.
```

### 12 — La trampa de la etiqueta

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["etiquetas", "identidad", "cambio"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Soy una persona extremadamente tímida y siempre lo seré.", "Soy una persona muy ansiosa ante el estrés."], ["Soy un líder nato y no puedo cambiar mi forma de actuar.", "Soy alguien que siempre reacciona con ira."]]

enunciado: "Un error común en la búsqueda del autoconocimiento es confundir un rasgo o comportamiento actual con una etiqueta inmutable. Por ejemplo: {escenarios[escenario_idx][0]}"

opciones_explicitas:
  - "La etiqueta es una descripción esencial de mi ser."
  - "La etiqueta es una descripción de un comportamiento actual que puede evolucionar."
  - "La etiqueta es una verdad absoluta e inamovible."

respuesta: "La etiqueta es una descripción de un comportamiento actual que puede evolucionar."
tipo: mc

explicacion: |
  Etiquetarse a uno mismo ("Soy así") cierra la puerta al crecimiento. El autoconocimiento busca entender los procesos detrás de la conducta, no fijar categorías que impidan la transformación personal.
```

### 13 — Elementos del proceso de introspección

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["metodologia", "introspeccion", "reflexion"]

opciones_explicitas:
  - "Reconocimiento de emociones"
  - "Juicio crítico y autocrítica"
  - "Identificación de patrones de conducta"
  - "Aceptación de la propia historia"

respuesta_orden: ["Reconocimiento de emociones", "Identificación de patrones de conducta", "Juicio crítico y autocrítica", "Aceptación de la propia historia"]
tipo: ordenar

enunciado: "Para que el autoconocimiento sea un proceso de crecimiento y no una simple observación superficial, se requiere integrar ciertos elementos en un orden de profundidad psicológica (de lo más inmediato a lo más estructural):"

explicacion: |
  El proceso comienza con la percepción de la emoción inmediata, sigue con la identificación de cómo se repiten esas emociones (patrones), requiere un juicio sobre la raíz de esos comportamientos y culmina con la integración y aceptación de la propia historia personal.
```

### 14 — El mito de la "verdadera esencia"

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "avanzado"
  tags: ["esencia", "construccion", "identidad"]

respuesta: "construcción"
tipo: completar
respuestas_validas:
  - "construcción"

enunciado: "A diferencia de la visión esencialista que sugiere que debemos 'encontrar' un yo preexistente, la psicología contemporánea sugiere que la identidad es una ___ constante a través de la experiencia y la interacción."

explicacion: |
  El error es creer que el "yo" es un objeto escondido que solo hay que desenterrar. El autoconocimiento es más bien el proceso de entender cómo nos estamos construyendo a través de nuestras decisiones y vivencias.
```

### 15 — ¿Es el autoconocimiento un proceso de descubrimiento o de creación?

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["dualidad", "identidad", "crecimiento"]

enunciado: "¿Cómo se conceptualiza el autoconocimiento en esta perspectiva?"
tipo: mc
respuesta: "Es ambos: descubrimos potencialidades y creamos nuevas formas de ser."
opciones_explicitas:
  - "Es solo un descubrimiento de lo que ya está ahí."
  - "Es solo una creación de lo que queremos ser."
  - "Es ambos: descubrimos potencialidades y creamos nuevas formas de ser."
explicacion: |
  El autoconocimiento es una danza entre lo que descubrimos (nuestro temperamento, historia y predisposiciones) y lo que creamos (nuestra voluntad, valores y la forma en que decidimos actuar frente a nuestra naturaleza).
```

### 16 — Autoconocimiento vs. Identidad Estática

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["autoconocimiento", "proceso", "identidad"]

respuesta: "proceso"
tipo: "completar"
respuestas_validas:
  - "proceso"
  - "dinámico"

enunciado: "A diferencia de un dato fijo o una etiqueta estática, el autoconocimiento se define como un ___ continuo y evolutivo."

explicacion: |
  El autoconocimiento no es un destino al que se llega y se permanece, sino un proceso constante de revisión de nuestra identidad a medida que vivimos nuevas experiencias.
```

### 17 — La naturaleza del autoconocimiento

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["naturaleza", "cambio", "identidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["La persona cambia sus valores tras una crisis", "evolución"], ["La persona descubre un nuevo talento en la adultez", "evolución"]]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["estatismo", "evolución", "determinismo", "esencia fija"]

enunciado: "Considera el siguiente caso: {escenarios[escenario_idx][0]}. Esto demuestra que el autoconocimiento es:"

explicacion: |
  Como se observa en el caso, el sujeto descubre o transforma aspectos de sí mismo, lo que confirma que la identidad no es un bloque inmutable.
```

### 18 — Autoconocimiento vs. Autodiagnóstico

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "avanzado"
  tags: ["diagnostico", "reflexion", "conciencia"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que el autoconocimiento es equivalente a un autodiagnóstico clínico, es decir, un conjunto de etiquetas definitivas para definir quiénes somos?"

explicacion: |
  Falso. El autodiagnóstico busca clasificar y cerrar una definición, mientras que el autoconocimiento es una exploración abierta que permite la transformación personal.
```

### 19 — Etapas de la exploración interna

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["secuencia", "reflexion", "acción"]

respuesta_orden: ["Observación de reacciones", "Reflexión sobre motivos", "Integración de aprendizajes"]
tipo: "ordenar"
opciones_explicitas: ["Observación de reacciones", "Reflexión sobre motivos", "Integración de aprendizajes"]

enunciado: "Ordena las etapas de un proceso de autoconocimiento reflexivo, partiendo desde la experiencia inmediata hasta la consolidación del saber personal:"

explicacion: |
  El proceso implica primero notar qué sentimos (observación), luego entender por qué lo sentimos (reflexión) y finalmente incorporar ese saber a nuestra identidad (integración).
```

### 20 — El factor de la experiencia

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["experiencia", "conocimiento", "cambio"]

tipo: vf
respuesta: verdadero

enunciado: "Dado que el ser humano es un sujeto en constante cambio debido a la interacción con el entorno, el autoconocimiento requiere una revisión periódica de la propia identidad."

explicacion: |
  Verdadero. La interacción con el mundo y el paso del tiempo modifican nuestra percepción y nuestras capacidades, invalidando la idea de un 'yo' inalterable.
```

### 21 — El mito de la esencia fija

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["identidad", "proceso"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Juan cree que nació siendo tímido y que nunca podrá cambiar su forma de ser.", "Falsa"], ["María piensa que su personalidad es una verdad absoluta que ya descubrió.", "Falsa"]]

enunciado: "Un individuo afirma que su personalidad es una estructura inmutable que no puede ser modificada por la experiencia. Según la visión del autoconocimiento como proceso, esta afirmación es..."

opciones_explicitas: ["Verdadera", "Falsa"]
respuesta: datos[escenario_idx][1]
tipo: mc

explicacion: |
  El autoconocimiento no es un objeto que se encuentra, sino un proceso dinámico. Creer que la identidad es un dato fijo ignora la capacidad humana de transformación y aprendizaje continuo.
```

### 22 — El proceso de introspección

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["introspeccion", "cambio"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un joven que descubre nuevas pasiones a los 30 años", "evolucion"], ["Una persona que redefine sus valores tras un duelo", "evolucion"]]

enunciado: "Considerando el caso de {casos[caso_idx][0]}, el autoconocimiento se manifiesta como un proceso de ___."

respuestas_validas:
  - "evolución"
  - "cambio"
respuesta: "evolución"
tipo: completar

explicacion: |
  Los cambios vitales demuestran que el 'yo' se reconfigura constantemente, invalidando la idea de una identidad estática.
```

### 23 — La naturaleza del autoconocimiento

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["naturaleza", "verdad"]

enunciado: "¿Es el autoconocimiento un estado final de iluminación donde se llega a conocer todo sobre uno mismo?"

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Falso"
tipo: completar
explicacion: |
  Dado que el ser humano es un proyecto en constante construcción, el autoconocimiento es una búsqueda inacabada, no un destino final.
```

### 24 — Dimensiones del autoconocimiento

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["dimensiones", "orden"]

enunciado: "Ordene las etapas de un proceso de autoconocimiento profundo, desde la percepción inicial hasta la integración:"

opciones_explicitas: ["Percepción de emociones", "Análisis de patrones", "Integración de la identidad"]
respuesta_orden: ["Percepción de emociones", "Análisis de patrones", "Integración de la identidad"]
tipo: ordenar

explicacion: |
  El autoconocimiento requiere pasar de la simple sensación (emoción) al entendimiento (patrón) y finalmente a la asunción de esa identidad (integración).
```

### 25 — El error de la etiqueta

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "avanzado"
  tags: ["etiquetado", "esencia"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["'Soy una persona ansiosa' (como etiqueta definitiva)", "etiqueta"], ["'Siento ansiedad en este momento' (como estado temporal)", "estado"]]

enunciado: "Si una persona dice: '{ejemplos[ejemplo_idx][0]}', está cometiendo el error de confundir su ___ con su ___."

respuestas_validas:
  - "esencia"
  - "estado"
respuesta: "esencia"
tipo: completar

explicacion: |
  Confundir un estado transitorio con la esencia del ser es el principal obstáculo para entender el autoconocimiento como un proceso fluido.
```
