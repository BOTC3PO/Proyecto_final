### 1 — Característica de la hipótesis
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

### 2 — Falsabilidad y ciencia
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

### 3 — Identificación de errores
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["errores_comunes", "especificidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El clima afectará el ánimo de las personas.", "Vaga"],
    ["El aumento de la temperatura ambiente en 5°C reducirá la productividad laboral en un 10%.", "Específica"]
  ]

tipo: mc
opciones_explicitas: ["Vaga", "Específica"]

enunciado: "Analiza el siguiente enunciado: '{escenarios[escenario_idx][0]}'. La principal deficiencia de esta hipótesis es que es ___."

respuesta: "{escenarios[escenario_idx][1]}"

explicacion: |
  Una buena hipótesis debe ser específica. Si es demasiado general o vaga, no permite establecer variables claras para medir el efecto y, por lo tanto, es difícil de contrastar empíricamente.
```

### 4 — El proceso de validación
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

tipo: ordenar
opciones_explicitas: ["Observación del fenómeno", "Formulación de la hipótesis", "Diseño del experimento", "Análisis de resultados"]

enunciado: "Ordena los pasos lógicos del método científico que permiten validar una hipótesis:"

respuesta: ["Observación del fenómeno", "Formulación de la hipótesis", "Diseño del experimento", "Análisis de resultados"]

explicacion: |
  El proceso comienza con la observación, lo que permite plantear una hipótesis explicativa. Luego, se debe diseñar un método para probarla y, finalmente, analizar los datos obtenidos para aceptar o rechazar la hipótesis.
```

### 5 — Completar la definición
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["terminologia"]

tipo: completar
respuestas_validas: ["falsable", "falsable"]

enunciado: "Para que una hipótesis sea considerada científica, debe ser ___; esto significa que debe ser posible imaginar un experimento que pueda demostrar que la hipótesis es falsa."

respuesta: "falsable"

explicacion: |
  La falsabilidad es el criterio de demarcación de la ciencia. Si una proposición no puede ser sometida a una prueba que pueda contradecirla, entonces no pertenece al ámbito de la ciencia empírica.
```