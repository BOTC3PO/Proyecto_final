# Investigacion — Observacion y pregunta investigable (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — La observación científica

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["metodologia", "observacion"]

respuesta: "observacion"
tipo: completar
respuestas_validas:
  - "observacion"

enunciado: "El primer paso del método científico consiste en el uso de los sentidos o instrumentos para captar información del entorno, proceso conocido como ___."

explicacion: |
  La observación es el punto de partida de toda investigación; implica registrar hechos o fenómenos de manera objetiva.
```

### 2 — Características de una pregunta investigable

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["pregunta", "metodologia"]

variables:
  es_investigable: uno_de([verdadero, falso])

respuesta: es_investigable
tipo: completar
enunciado: "Una pregunta que solo puede responderse con un 'sí' o un 'no' se considera una pregunta de investigación de alto nivel científico."

pasos:
  - "Analizar si la pregunta permite la recolección de datos."
  - "Verificar si la respuesta requiere experimentación o análisis profundo."

explicacion: |
  Falso. Las preguntas investigables deben ser abiertas y permitir la recolección de datos empíricos para ser analizadas.
```

### 3 — Del fenómeno a la pregunta

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

respuesta: "Una pregunta que relaciona variables y es medible"
tipo: mc
opciones_explicitas: ["Una opinión personal sobre el fenómeno", "Una pregunta que relaciona variables y es medible", "Una descripción literaria de lo que se ve", "Una conclusión definitiva sobre el problema"]

enunciado: "Al convertir una observación curiosa en una pregunta investigable, el investigador debe buscar que esta sea:"

explicacion: |
  Una pregunta investigable debe establecer una relación entre variables que puedan ser medidas u observadas sistemáticamente.
```

### 4 — El proceso de refinamiento

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

respuesta_orden: ["Observación del fenómeno", "Identificación de variables", "Formulación de la pregunta"]
tipo: ordenar
opciones_explicitas: ["Observación del fenómeno", "Identificación de variables", "Formulación de la pregunta"]

enunciado: "Ordena los pasos lógicos para transformar una curiosidad inicial en una pregunta de investigación científica:"

explicacion: |
  Primero se observa el entorno, luego se identifican los factores (variables) que intervienen y finalmente se redacta la pregunta de investigación.
```

### 5 — Variables en la investigación

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "avanzado"
  tags: ["variables", "metodologia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["La temperatura del agua", "La velocidad del crecimiento"], ["La luz solar", "La cantidad de fertilizante"]]

respuesta: datos[escenario_idx][0]
tipo: mc
opciones_explicitas: ["La luz solar", "La temperatura del agua", "El color de la planta", "El tipo de maceta"]

enunciado: "Si observamos que las plantas crecen más rápido con un tipo de luz, la variable que estamos estudiando es ___."

explicacion: |
  En este caso, la luz es la variable independiente que el investigador observa para ver su efecto en el crecimiento.
```

### 6 — De la curiosidad a la pregunta

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["metodologia", "observacion"]

enunciado: "Un estudiante observa que las plantas de su balcón crecen más rápido cuando están cerca de la pared que cuando están en el centro. Para convertir esto en una pregunta investigable, debe identificar la variable que puede manipular. Si decide cambiar la cantidad de luz solar, la pregunta debe centrarse en la variable ____."

respuestas_validas:
  - "luz solar"
tipo: completar

explicacion: |
  Una pregunta investigable debe centrarse en una variable independiente (la que manipulas, como la luz) y una dependiente (la que mides, como el crecimiento).
```

### 7 — Identificación de variables

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["variables", "metodologia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Se observa que los perros corren más rápido si les dan premios", "comida"], ["Se observa que las plantas crecen más si se riegan con té", "líquido"]]

enunciado: "Observación: {escenarios[escenario_idx][0]}. En este caso, la variable que el investigador puede manipular (variable independiente) es el/la {escenarios[escenario_idx][1]}."

opciones_explicitas: ["{escenarios[escenario_idx][1]}", "velocidad de carrera", "perro", "entorno"]
respuesta: "{escenarios[escenario_idx][1]}"
tipo: mc

explicacion: |
  La variable independiente es el factor que el investigador cambia deliberadamente para observar qué efecto produce.
```

### 8 — ¿Es investigable?

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["criterios", "validez"]

enunciado: "Analiza la siguiente pregunta de investigación: '¿Por qué los gatos prefieren el color azul sobre el rojo?'. ¿Es esta una pregunta científicamente investigable mediante experimentación directa?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: completar
explicacion: |
  Las preferencias subjetivas (sentimientos o gustos) no son directamente medibles de forma objetiva sin una metodología de observación de comportamiento muy específica; las preguntas sobre 'por qué' suelen ser demasiado amplias para un experimento simple.
```

### 9 — Pasos para formular la pregunta

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

enunciado: "Ordena los pasos lógicos para transformar una observación curiosa en una pregunta de investigación científica:"

opciones_explicitas: ["Realizar una observación detallada", "Identificar variables (independiente y dependiente)", "Formular la pregunta de investigación", "Diseñar un experimento para probarla"]
respuesta_orden: ["Realizar una observación detallada", "Identificar variables (independiente y dependiente)", "Formular la pregunta de investigación", "Diseñar un experimento para probarla"]
tipo: ordenar

explicacion: |
  El proceso científico comienza con la percepción (observación), sigue con la delimitación de factores (variables), la formulación del problema (pregunta) y finalmente la acción (diseño experimental).
```

### 10 — Estructura de la pregunta

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "avanzado"
  tags: ["estructura", "formulación"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["¿Cómo afecta la temperatura al tiempo de disolución de la sal?", "temperatura", "tiempo"], ["¿Cómo influye la intensidad de la luz en la altura de la planta?", "luz", "altura"]]

enunciado: "En el caso: '{casos[caso_idx][0]}', la estructura de la pregunta busca relacionar la variable independiente ({casos[caso_idx][0]}) con la variable dependiente ({casos[caso_idx][1]})."

opciones_explicitas: ["{casos[caso_idx][0]}", "{casos[caso_idx][1]}", "ambas", "ninguna"]
respuesta: "{casos[caso_idx][1]}"
tipo: mc

explicacion: |
  La variable dependiente es el efecto o resultado que se mide (en el primer caso, el tiempo; en el segundo, la altura).
```

### 11 — El error de la pregunta cerrada

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["metodologia", "errores_comunes"]

variables:
  ejemplo_idx: uno_de([0, 1])
  escenarios: [["¿Las plantas crecen más con música clásica?", "cerrada"], ["¿Cómo afecta la frecuencia de riego al crecimiento de la planta?", "investigable"]]

respuesta: escenarios[ejemplo_idx][1]
tipo: mc
opciones_explicitas: ["cerrada", "investigable", "subjetiva", "imposible"]

enunciado: "Si observo que las plantas de mi salón están más verdes que las del pasillo y me pregunto: '{escenarios[ejemplo_idx][0]}', el tipo de pregunta que he formulado es una pregunta ___."

explicacion: |
  Una pregunta investigable debe permitir la recolección de datos medibles. Las preguntas que se responden con un simple "sí" o "no" (como la del ejemplo) son preguntas cerradas y no permiten desarrollar un proceso de investigación experimental completo.
```

### 12 — La variable en la pregunta

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["variables", "diseño_experimental"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["¿La temperatura influye en la velocidad de disolución de la sal?", "temperatura"], ["¿El color del recipiente afecta la rapidez con la que se disuelve el azúcar?", "color"]]

respuesta: casos[caso_idx][1]
tipo: completar
respuestas_validas:
  - "temperatura"
  - "color"

enunciado: "Para que una observación se transforme en una pregunta investigable, es necesario identificar una variable independiente. En el caso de: '{casos[caso_idx][0]}', la variable que el investigador debe manipular es el/la ___."

explicacion: |
  La variable independiente es el factor que el investigador cambia deliberadamente para observar su efecto. En el primer caso es la temperatura; en el segundo, el color.
```

### 13 — Verdad o Falso: La subjetividad

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["subjetividad", "objetividad"]

respuesta: falso
tipo: vf

enunciado: "Una pregunta que contenga términos subjetivos como '¿Cuál es la flor más bonita del jardín?' es considerada una pregunta investigable porque la belleza es una propiedad física medible."

explicacion: |
  Falso. Los términos subjetivos (bonito, feo, increíble, mejor) dependen del observador y no pueden ser medidos de forma objetiva mediante instrumentos o datos estandarizados. Una pregunta investigable debe ser objetiva.
```

### 14 — El proceso de transformación

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["procedimiento", "metodologia"]

respuesta_orden: ["Observación", "Identificación de variables", "Formulación de pregunta"]
tipo: ordenar

opciones_explicitas: ["Observación", "Identificación de variables", "Formulación de pregunta"]

enunciado: "Ordena los pasos lógicos para convertir una curiosidad en una pregunta de investigación científica:"

pasos:
  - "Notar un fenómeno en el entorno."
  - "Determinar qué factores pueden estar influyendo (causa-efecto)."
  - "Redactar el interrogante de forma clara, precisa y medible."

explicacion: |
  El método científico comienza con la observación de un fenómeno, seguido por el análisis de las variables involucradas y culmina con la formulación de una pregunta que pueda ser sometida a prueba.
```

### 15 — La pregunta imposible

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "avanzado"
  tags: ["viabilidad", "limitaciones"]

variables:
  pregunta_idx: uno_de([0, 1])
  preguntas: [["¿Cómo influye el tipo de suelo en el crecimiento de las semillas?", "posible"], ["¿Por qué las plantas tienen sentimientos cuando no las riego?", "imposible"]]

respuesta: preguntas[pregunta_idx][1]
tipo: mc
opciones_explicitas: ["posible", "imposible"]

enunciado: "Al evaluar la viabilidad de una pregunta de investigación, si nos planteamos: '{preguntas[pregunta_idx][0]}', la clasificación correcta es que la pregunta es ___."

explicacion: |
  Una pregunta es imposible de investigar científicamente si su objeto de estudio no es observable o medible (como los 'sentimientos' de una planta), o si requiere tecnología que no existe. Una pregunta sobre el suelo es posible porque el crecimiento y el tipo de suelo son variables medibles.
```

### 16 — Diferencia entre observación y pregunta

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["metodologia", "conceptos_basicos"]

respuesta: "pregunta"
tipo: completar
respuestas_validas:
  - "pregunta"

enunciado: "Mientras que una observación es la percepción de un fenómeno, una ___ es una interrogante que busca explicar o relacionar variables de forma empírica."

explicacion: |
  La observación es el punto de partida (notar algo), pero para iniciar el proceso científico se requiere transformar esa percepción en una pregunta investigable.
```

### 17 — Características de una pregunta investigable

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["criterios", "metodologia"]

variables:
  escenario: uno_de([["¿Por qué el cielo es azul?", "falsa"], ["¿Cómo afecta la temperatura al crecimiento de una planta?", "verdadera"], ["¿Es el color azul el más bonito?", "falsa"]])

respuesta: "¿Cómo afecta la temperatura al crecimiento de una planta?"
tipo: mc
opciones_explicitas: ["¿Por qué el cielo es azul?", "¿Cómo afecta la temperatura al crecimiento de una planta?", "¿Es el color azul el más bonito?"]

enunciado: "De las siguientes opciones, ¿cuál representa una pregunta que puede ser investigada científicamente (es decir, que permite la recolección de datos empíricos)?"

explicacion: |
  Una pregunta investigable debe ser observable y medible. Las preguntas sobre opiniones ("más bonito") o causas metafísicas/filosóficas no se pueden probar mediante la experimentación directa.
```

### 18 — Distinción entre pregunta descriptiva y explicativa

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "avanzado"
  tags: ["tipos_de_pregunta", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "Una pregunta que busca determinar la relación de causa y efecto entre dos variables (ej. '¿Cómo influye X en Y?') se clasifica únicamente como una pregunta descriptiva."

explicacion: |
  Falso. Una pregunta descriptiva busca caracterizar un fenómeno (¿cómo es?, ¿cuántos hay?), mientras que la pregunta que busca la relación causa-efecto es de carácter explicativo o correlacional.
```

### 19 — El proceso de transformación

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["proceso", "pasos"]

respuesta_orden: ["Observación", "Identificación de variables", "Formulación de la pregunta"]
tipo: ordenar
opciones_explicitas: ["Observación", "Identificación de variables", "Formulación de la pregunta"]

enunciado: "Ordena los pasos lógicos para transformar una curiosidad en un problema de investigación científica:"

explicacion: |
  Primero se observa el fenómeno, luego se identifican los elementos que intervienen (variables) y finalmente se redacta la pregunta que vincula dichos elementos.
```

### 20 — Comparación: Pregunta vs. Hipótesis

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["conceptos_relacionados", "metodologia"]

variables:
  caso: uno_de([["¿Influye la luz en el crecimiento?", "pregunta"], ["La luz influye en el crecimiento.", "hipotesis"]])

respuesta: caso[0]
tipo: mc
opciones_explicitas: ["¿Influye la luz en el crecimiento?", "La luz influye en el crecimiento."]

enunciado: "Si tenemos una observación sobre la luz y las plantas, ¿cuál de los siguientes enunciados representa la fase de 'pregunta investigable' y no una 'hipótesis'?"

explicacion: |
  La pregunta es una interrogación abierta que busca respuesta; la hipótesis es una afirmación provisional que intenta responder a dicha pregunta y que debe ser sometida a prueba.
```

### 21 — De la curiosidad al problema

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["metodologia", "observacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Observo que las plantas de mi balcón crecen más rápido cuando las riego con té de banana.", "El efecto de la concentración de potasio en el crecimiento de la planta de interior."], ["Noto que mis amigos se ven más cansados los lunes que los viernes.", "La relación entre el ciclo semanal de sueño y los niveles de energía percibida."]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["¿Por qué las plantas son verdes?", datos[escenario_idx][1], "¿Me gusta el té de banana?", "¿Cómo se cuidan las plantas?"]

enunciado: "Dada la siguiente observación: '{datos[escenario_idx][0]}', ¿cuál de las siguientes opciones representa una pregunta de investigación científica válida y delimitada?"

explicacion: |
  Una buena pregunta de investigación debe ser específica, medible y establecer una relación entre variables, evitando generalidades o juicios de valor.
```

### 22 — Identificación de variables

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["variables", "metodologia"]

variables:
  caso_idx: uno_de([0])
  casos: [["Observación: El uso de música clásica durante el estudio parece mejorar la retención de vocabulario en estudiantes de inglés.", "música clásica", "retención de vocabulario"]]

respuesta: "música clásica"
tipo: completar
respuestas_validas:
  - "música clásica"

enunciado: "En la observación: '{casos[caso_idx][0]}', la variable independiente (la que el investigador manipula) es la ___."

pasos:
  - "Identifica qué factor se está variando o estudiando como causa."
  - "Identifica qué efecto se está midiendo."

explicacion: |
  La variable independiente es el factor que se presume causa un efecto; en este caso, la música clásica.
```

### 23 — ¿Es investigable?

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["criterios", "validacion"]

variables:
  pregunta_idx: uno_de([0, 1])
  preguntas: [["¿Es el color azul el color más bonito de todos los colores?", falso], ["¿Influye la temperatura del agua en la velocidad de disolución de la sal?", verdadero]]

respuesta: preguntas[pregunta_idx][1]
tipo: completar
enunciado: "Analiza la siguiente pregunta: '{preguntas[pregunta_idx][0]}'. ¿Es esta una pregunta que puede ser investigada mediante el método científico? (responde con verdadero o falso)"

explicacion: |
  Para ser investigable, una pregunta no debe basarse en opiniones subjetivas ("lo más bonito"), sino en hechos que puedan ser observados y medidos objetivamente.
```

### 24 — Estructura de la pregunta

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["estructura", "metodologia"]

variables:
  escenarios: [["Observación: Los perros corren más rápido cuando hay un estímulo sonoro fuerte.", "¿De qué manera el nivel de decibelios de un estímulo sonoro afecta la velocidad de carrera de un canino?", "De qué manera el nivel de decibelios de un estímulo sonoro afecta la velocidad de carrera de un canino?", "El ruido hace que los perros corran."]]

respuesta_orden: ["De qué manera el nivel de decibelios de un estímulo sonoro afecta la velocidad de carrera de un canino?", "¿Los perros corren con ruido?", "¿Por qué los perros corren rápido?", "El ruido hace que los perros corran."]
tipo: ordenar
opciones_explicitas: ["De qué manera el nivel de decibelios de un estímulo sonoro afecta la velocidad de carrera de un canino?", "¿Los perros corren con ruido?", "¿Por qué los perros corren rápido?", "El ruido hace que los perros corran."]

enunciado: "Ordena los siguientes enunciados desde la pregunta de investigación más técnica y bien estructurada hasta la más informal o vaga, basándote en la observación: 'Observación: Los perros corren más rápido cuando hay un estímulo sonoro fuerte.'."

explicacion: |
  Una pregunta científica debe ser precisa, evitar términos ambiguos y establecer claramente la relación entre la variable independiente y la dependiente.
```

### 25 — Delimitación del objeto

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "avanzado"
  tags: ["delimitacion", "metodologia"]

variables:
  item_idx: uno_de([0])
  items: [["Observación: El crecimiento de los moños en el pan depende de la humedad.", "Humedad relativa", "Tiempo de fermentación", "Temperatura ambiente"]]

respuesta: "Humedad relativa"
tipo: mc
opciones_explicitas: ["Humedad relativa", "Temperatura ambiente", "Tiempo de fermentación", "Todas las anteriores"]

enunciado: "Si queremos investigar la observación: '{items[item_idx][0]}', y decidimos enfocarnos únicamente en la variable ambiental que se puede medir con un higrómetro, ¿cuál sería nuestra variable principal?"

explicacion: |
  El higrómetro es el instrumento diseñado específicamente para medir la humedad (relativa o absoluta) del aire.
```
