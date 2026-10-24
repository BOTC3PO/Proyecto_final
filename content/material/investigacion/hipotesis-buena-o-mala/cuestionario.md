# Investigacion — Hipotesis buena o mala (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Características de una hipótesis

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["metodologia", "hipotesis"]

tipo: mc
opciones_explicitas: ["Es vaga y difícil de medir", "Es específica y comprobable", "Es una opinión personal sin sustento", "Es una verdad absoluta e incuestionable"]
respuesta: "Es específica y comprobable"

enunciado: "Una hipótesis científica se considera 'buena' cuando su estructura permite que sea ___ y ___."

explicacion: |
  Para que una hipótesis sea válida en el método científico, debe ser específica (delimitar qué se va a observar) y comprobable (permitir la experimentación para aceptar o rechazar la proposición).
```

### 2 — El concepto de falsabilidad

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["falsabilidad", "metodologia"]

tipo: vf

enunciado: "Si una hipótesis está formulada de tal manera que no existe ningún experimento posible para demostrar que es falsa, entonces se dice que la hipótesis es falsable."

respuesta: falso

explicacion: |
  Es una contradicción. Para que una hipótesis sea científica, debe ser falsable; es decir, debe ser posible imaginar un experimento o una observación que pueda contradecirla. Si no puede ser refutada, no es científica.
```

### 3 — Identificación de hipótesis malas

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["hipotesis_mala", "vaguedad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["La temperatura afecta el crecimiento de las plantas.", "La temperatura influye en el crecimiento de las plantas de tomate bajo luz roja."], ["El clima es malo hoy.", "El clima influye en el estado de ánimo de las personas."]]

tipo: mc
opciones_explicitas: ["Es demasiado específica", "Es vaga o ambigua", "Es una ley universal", "Es una variable dependiente"]

enunciado: "Analiza el siguiente enunciado: '{escenarios[escenario_idx][0]}'. Esta hipótesis se considera 'mala' porque es ___."

respuesta: "Es vaga o ambigua"

explicacion: |
  Una hipótesis vaga (como la del primer escenario) no define qué tipo de temperatura, qué tipo de planta o cómo se mide el crecimiento, lo que impide una prueba experimental rigurosa.
```

### 4 — Componentes de la hipótesis

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["variables", "estructura"]

tipo: completar
opciones_explicitas: ["variable", "causa", "efecto"]
respuestas_validas:
  - "variable"
  - "causa"
  - "efecto"

enunciado: "En una hipótesis bien formulada, se debe establecer la relación entre una ___ independiente y una ___ dependiente."

respuesta: "variable"

explicacion: |
  La estructura básica de una hipótesis científica busca relacionar cómo el cambio en una variable (independiente) afecta a otra (dependiente).
```

### 5 — Secuencia del proceso de validación

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["proceso", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Observación del fenómeno", "Formulación de la hipótesis", "Diseño de la experimentación", "Análisis de resultados"]

enunciado: "Ordena los pasos lógicos para validar una hipótesis científica:"

explicacion: |
  El proceso científico sigue un orden lógico: primero se observa un fenómeno, luego se propone una explicación provisional (hipótesis), se diseña un experimento para probarla y finalmente se analizan los datos obtenidos.
respuesta_orden: ["Observación del fenómeno", "Formulación de la hipótesis", "Diseño de la experimentación", "Análisis de resultados"]
```

### 6 — Identificación de hipótesis

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buenas_y_malas"
  nivel: "basico"
  tags: ["metodologia", "hipotesis"]

tipo: mc
opciones_explicitas: ["La dieta de la felicidad mejora el bienestar general.", "El consumo de vitamina C reduce la duración del resfriado común en 2 días.", "Los pensamientos influyen en la suerte de las personas.", "El clima afecta el humor de la población."]
enunciado: "De las siguientes afirmaciones, ¿cuál representa una hipótesis científica válida por ser específica y falsable?"
respuesta: "El consumo de vitamina C reduce la duración del resfriado común en 2 días."
explicacion: |
  Una buena hipótesis debe ser específica y permitir una prueba empírica. La opción correcta define una variable (vitamina C), una población (resfriado común) y un efecto medible (2 días), permitiendo ser refutada o confirmada. Las otras son vagas o subjetivas.
```

### 7 — El criterio de falsabilidad

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buenas_y_malas"
  nivel: "intermedio"
  tags: ["falsabilidad", "logica"]

tipo: vf
respuesta: falso
enunciado: "Una hipótesis que no puede ser refutada mediante la observación o la experimentación (es decir, es infalsable) se considera una hipótesis científica válida."

explicacion: |
  Falso. El criterio de falsabilidad de Popper establece que para que una hipótesis sea científica, debe existir, al menos en la teoría, un experimento o observación que pueda demostrar que es falsa. Si no puede ser refutada, no es ciencia.
```

### 8 — Análisis de variables

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buenas_y_malas"
  nivel: "intermedio"
  tags: ["variables", "especificidad"]

variables:
  escenario: uno_de([["El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días", "fertilizante X"], ["El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días", "fertilizante X"], ["El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días", "fertilizante X"]])

tipo: completar
enunciado: "Dada la hipótesis: '{escenario[0]}', el factor que se pretende modificar es el ___."
respuestas_validas:
  - "fertilizante X"
respuesta: escenario[1]

explicacion: |
  En el diseño experimental, el fertilizante X es la variable independiente (la causa propuesta), la cual se manipula para observar su efecto sobre el crecimiento.
```

### 9 — Pasos para validar una hipótesis

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buenas_y_malas"
  nivel: "basico"
  tags: ["metodologia", "proceso"]

tipo: ordenar
opciones_explicitas: ["Formular la hipótesis", "Diseñar el experimento", "Analizar los datos obtenidos", "Concluir si la hipótesis es aceptada o rechazada"]
respuesta_orden: ["Formular la hipótesis", "Diseñar el experimento", "Analizar los datos obtenidos", "Concluir si la hipótesis es aceptada o rechazada"]

enunciado: "Ordene cronológicamente los pasos lógicos para validar una hipótesis científica:"

explicacion: |
  El método científico requiere primero la formulación de la idea, luego la creación de un procedimiento (experimento), el tratamiento de la información recolectada (análisis) y finalmente la toma de decisiones sobre la validez de la premisa inicial.
```

### 10 — Evaluación de calidad

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buenas_y_malas"
  nivel: "avanzado"
  tags: ["evaluacion", "metodologia"]

variables:
  caso: uno_de([["'Las fuerzas invisibles del universo determinan el destino humano'", "Mala: es infalsable"], ["'El aumento de la temperatura global reduce el grosor del hielo ártico'", "Buena: es específica y comprobable"], ["'Las personas son felices cuando están con sus amigos'", "Mala: es vaga y no medible"]])

tipo: mc
opciones_explicitas: ["Mala: es vaga y no medible", "Mala: es infalsable", "Buena: es específica y comprobable"]
enunciado: "Analice el siguiente caso: '{caso[0]}'. ¿Cuál es su clasificación?"
respuesta: caso[1]

explicacion: |
  Si el caso es el 0, es infalsable (fuerzas invisibles). Si es el 1, es buena (medible). Si es el 2, es mala por ser vaga (qué es "feliz" y "amigos" es subjetivo). El sistema evaluará según la lógica de la opción seleccionada.
```

### 11 — Característica de la hipótesis

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["metodologia", "hipotesis"]

tipo: mc
opciones_explicitas: ["Comprobable", "Subjetiva", "Vaga", "Universal"]

enunciado: "Una característica fundamental que distingue a una hipótesis científica de una mera opinión es que debe ser ___."

respuesta: "Comprobable"

explicacion: |
  Para que una hipótesis sea científica, debe existir la posibilidad de diseñar un experimento o observación que pueda confirmar o refutar su validez. Si no puede ser sometida a prueba, no es ciencia.
```

### 12 — Falsabilidad y ciencia

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["falsabilidad", "popper"]

tipo: vf
respuesta: falso

enunciado: "Una hipótesis que es tan amplia que cualquier resultado posible puede ser explicado por ella (es decir, no puede ser refutada por ningún experimento) se considera una hipótesis científica excelente."

explicacion: |
  Falso. Según el criterio de falsabilidad, una hipótesis que no puede ser refutada por ningún evento observable es una hipótesis no científica o "no falsable", ya que no permite el avance del conocimiento mediante la evidencia.
```

### 13 — Identificación de errores

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["errores_comunes", "especificidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El clima afectará el ánimo de las personas.", "Vaga"], ["El aumento de la temperatura ambiente en 5°C reducirá la productividad laboral en un 10%.", "Específica"]]

tipo: mc
opciones_explicitas: ["Vaga", "Específica"]

enunciado: "Analiza el siguiente enunciado: '{escenarios[escenario_idx][0]}'. La principal deficiencia de esta hipótesis es que es ___."

respuesta: escenarios[escenario_idx][1]

explicacion: |
  Una buena hipótesis debe ser específica. Si es demasiado general o vaga, no permite establecer variables claras para medir el efecto y, por lo tanto, es difícil de contrastar empíricamente.
```

### 14 — El proceso de validación

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

tipo: ordenar
opciones_explicitas: ["Observación del fenómeno", "Formulación de la hipótesis", "Diseño del experimento", "Análisis de resultados"]

enunciado: "Ordena los pasos lógicos del método científico que permiten validar una hipótesis:"

respuesta_orden: ["Observación del fenómeno", "Formulación de la hipótesis", "Diseño del experimento", "Análisis de resultados"]

explicacion: |
  El proceso comienza con la observación, lo que permite plantear una hipótesis explicativa. Luego, se debe diseñar un método para probarla y, finalmente, analizar los datos obtenidos para aceptar o rechazar la hipótesis.
```

### 15 — Completar la definición

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["terminologia"]

tipo: completar
respuestas_validas:
  - "falsable"
  - "falsable"

enunciado: "Para que una hipótesis sea considerada científica, debe ser ___; esto significa que debe ser posible imaginar un experimento que pueda demostrar que la hipótesis es falsa."

respuesta: "falsable"

explicacion: |
  La falsabilidad es el criterio de demarcación de la ciencia. Si una proposición no puede ser sometida a una prueba que pueda contradecirla, entonces no pertenece al ámbito de la ciencia empírica.
```

### 16 — Diferencia entre Hipótesis y Teoría

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_vs_teoria"
  nivel: "basico"
  tags: ["metodologia", "conceptos_basicos"]

respuesta: "teoria"
tipo: mc
opciones_explicitas: ["hipotesis", "teoria", "ley", "variable"]

enunciado: "Mientras que una hipótesis es una explicación tentativa para un fenómeno observado, una _______ es una explicación amplia y bien sustentada que ha sido confirmada repetidamente mediante la observación y la experimentación."

explicacion: |
  La hipótesis es el punto de partida (una suposición), mientras que la teoría es un marco explicativo robusto y validado.
```

### 17 — Falsabilidad de una hipótesis

```
metadata:
  materia: "investigacion"
  tema: "falsabilidad"
  nivel: "intermedio"
  tags: ["metodologia", "criterio_falsabilidad"]

respuesta: verdadero
tipo: vf
enunciado: "Una hipótesis científica se considera 'buena' si es falsable, es decir, si existe la posibilidad de que un experimento pueda demostrar que es incorrecta. ¿Es esto cierto?"

explicacion: |
  Si una afirmación no puede ser refutada por ningún experimento imaginable (es vaga o metafísica), no es científica. La falsabilidad es el criterio de demarcación de Popper.
```

### 18 — Especificidad vs. Vaguedad

```
metadata:
  materia: "investigacion"
  tema: "especificidad_hipotesis"
  nivel: "basico"
  tags: ["calidad_hipotesis"]

variables:
  escenario: uno_de([0, 1])
  datos: [[ "La medicina mejora la salud", "vaga", falso ], [ "El fármaco X reduce el tiempo de recuperación en un 20% en pacientes con gripe en 5 días", "especifica", verdadero ]]

respuestas_validas:
  - datos[escenario][1]
respuesta: datos[escenario][1]
tipo: completar

enunciado: "Analice el siguiente caso: {datos[escenario][0]} es una hipótesis ___."

explicacion: |
  Una hipótesis buena debe ser específica para que los resultados puedan ser medidos y comparados con la predicción inicial.
```

### 19 — Componentes de una hipótesis científica

```
metadata:
  materia: "investigacion"
  tema: "estructura_hipotesis"
  nivel: "intermedio"
  tags: ["metodologia", "estructura"]

respuesta_orden: ["variable_independiente", "variable_dependiente"]
tipo: ordenar

opciones_explicitas: ["variable_dependiente", "variable_independiente"]

enunciado: "Para que una hipótesis sea comprobable, debe establecer una relación lógica entre dos elementos. Ordene los componentes según el flujo causal: Primero la causa (___) y luego el efecto (___)."

explicacion: |
  La estructura lógica estándar es: Si cambio la variable independiente, entonces observaré un cambio en la variable dependiente.
```

### 20 — Hipótesis Nula vs. Alternativa

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_nula_vs_alternativa"
  nivel: "avanzado"
  tags: ["estadistica", "metodologia"]

respuesta: "hipotesis_nula"
tipo: mc

opciones_explicitas: ["hipotesis_nula", "hipotesis_alternativa"]

enunciado: "En un experimento, la hipótesis que postula que 'no existe una relación o diferencia significativa entre las variables' se conoce como: ___"

explicacion: |
  La hipótesis nula (H0) es la que se busca rechazar mediante la estadística, mientras que la alternativa (H1) es la que el investigador realmente propone.
```

### 21 — Calidad de la hipótesis

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["metodologia", "ciencia"]

variables:
  escenario: uno_de([["Si el fertilizante X aumenta el crecimiento de las plantas de tomate en un 20% en 15 días.", "buena"], ["El clima afecta el estado de ánimo de las personas de forma variable.", "mala"], ["Los estudiantes rinden mejor si hay música clásica en el aula.", "mala"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["buena", "mala"]

enunciado: "Analiza el siguiente planteamiento: '{escenario[0]}'. ¿Qué tipo de hipótesis es?"

explicacion: |
  Una hipótesis es buena cuando es específica, medible y falsable. Si es vaga o no permite una prueba empírica clara (como en los casos de "clima" o "música" sin parámetros), se considera una mala hipótesis.
```

### 22 — Falsabilidad

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["falsabilidad", "metodologia"]

variables:
  idx: uno_de([0, 1])
  textos: ["La hipótesis es 'Existe una fuerza invisible que empuja los objetos pero no se puede medir'.", "La hipótesis es 'Si aumento la temperatura, el gas se expande'."]
  es_falsable: [falso, verdadero]

respuesta: es_falsable[idx]
tipo: vf
enunciado: "Considera el siguiente caso: {textos[idx]}. ¿Es esta una hipótesis científica falsable (es decir, que puede ser refutada por la observación)?"

explicacion: |
  Para que una hipótesis sea científica, debe ser posible diseñar un experimento que pueda demostrar que es falsa. Si una afirmación es tan vaga o metafísica que no hay forma de contradecirla, no es científica.
```

### 23 — Atributos de la hipótesis

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["caracteristicas"]

respuesta_orden: ["falsable", "especifica", "medible"]
tipo: ordenar
opciones_explicitas: ["falsable", "especifica", "medible"]

enunciado: "Ordena los tres atributos fundamentales que debe poseer una hipótesis científica para ser considerada válida, desde el más general al más concreto: 1. La capacidad de ser refutada, 2. La claridad en su alcance, 3. La posibilidad de cuantificar sus variables."

pasos:
  - "Identificar la capacidad de ser refutada (falsabilidad)."
  - "Identificar la claridad en su alcance (especificidad)."
  - "Identificar la posibilidad de cuantificar (medibilidad)."

explicacion: |
  Una hipótesis científica debe ser primero falsable (poder ser sometida a prueba), luego específica (delimitar qué se estudia) y finalmente medible (permitir la recolección de datos cuantitativos o cualitativos claros).
```

### 24 — Identificación de errores

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["analisis"]

variables:
  ejemplo: uno_de([["Las plantas crecen mejor con luz solar.", "vaga"], ["El uso de la red social X reduce el tiempo de sueño en 30 minutos.", "especifica"]])

respuesta: ejemplo[1]
tipo: completar

enunciado: "El siguiente enunciado es: '{ejemplo[0]}'. Por su estructura, se clasifica como una hipótesis _________."

explicacion: |
  Si la hipótesis no define qué es "mejor" o cuánto es el cambio, es "vaga". Si define variables y magnitudes, es "especifica".
```

### 25 — Veracidad de conceptos

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que una hipótesis que no puede ser sometida a prueba empírica (es decir, que no es falsable) carece de valor científico, aunque sea una idea lógica?"

explicacion: |
  Exacto. La ciencia se basa en la capacidad de probar y, potencialmente, refutar una idea. Una idea que no puede ser puesta a prueba no pertenece al ámbito de la ciencia empírica.
```
