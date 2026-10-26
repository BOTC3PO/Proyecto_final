### 1 — Identificación de hipótesis
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buenas_y_malas"
  nivel: "basico"
  tags: ["metodologia", "hipotesis"]

tipo: mc
opciones_explicitas: ["La dieta de la felicidad mejora el bienestar general.", "El consumo de vitamina C reduce la duración del resfriado común en 2 días.", "Los pensamientos influyen en la suerte de las personas.", "El clima afecta el humor de la población."]

enunciado: "De las siguientes afirmaciones, ¿cuál representa una hipótesis científica válida por ser específica y falsable?"

explicacion: |
  Una buena hipótesis debe ser específica y permitir una prueba empírica. La opción correcta define una variable (vitamina C), una población (resfriado común) y un efecto medible (2 días), permitiendo ser refutada o confirmada. Las otras son vagas o subjetivas.
```

### 2 — El criterio de falsabilidad
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buenas_y_malas"
  nivel: "intermedio"
  tags: ["falsabilidad", "logica"]

tipo: vf
enunciado: "Una hipótesis que no puede ser refutada mediante la observación o la experimentación (es decir, es infalsable) se considera una hipótesis científica válida."

explicacion: |
  Falso. El criterio de falsabilidad de Popper establece que para que una hipótesis sea científica, debe existir, al menos en la teoría, un experimento o observación que pueda demostrar que es falsa. Si no puede ser refutada, no es ciencia.
```

### 3 — Análisis de variables
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buenas_y_malas"
  nivel: "intermedio"
  tags: ["variables", "especificidad"]

variables:
  escenario: uno_de([
    ["El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días", "El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días"],
    ["El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días", "El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días"],
    ["El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días", "El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días"]
  ])
  idx: uno_de([0, 1, 2])

tipo: completar
enunciado: "Dada la hipótesis: '{escenario[idx][0]}', el factor que se pretende modificar es el ___."
respuestas_validas: ["fertilizante X"]
respuesta: escenario[idx][1]

explicacion: |
  En el diseño experimental, el fertilizante X es la variable independiente (la causa propuesta), la cual se manipula para observar su efecto sobre el crecimiento.
```

### 4 — Pasos para validar una hipótesis
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buenas_y_malas"
  nivel: "basico"
  tags: ["metodologia", "proceso"]

tipo: ordenar
opciones_explicitas: ["Formular la hipótesis", "Diseñar el experimento", "Analizar los datos obtenidos", "Concluir si la hipótesis es aceptada o rechazada"]
respuesta: ["Formular la hipótesis", "Diseñar el experimento", "Analizar los datos obtenidos", "Concluir si la hipótesis es aceptada o rechazada"]

enunciado: "Ordene cronológicamente los pasos lógicos para validar una hipótesis científica:"

explicacion: |
  El método científico requiere primero la formulación de la idea, luego la creación de un procedimiento (experimento), el tratamiento de la información recolectada (análisis) y finalmente la toma de decisiones sobre la validez de la premisa inicial.
```

### 5 — Evaluación de calidad
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buenas_y_malas"
  nivel: "avanzado"
  tags: ["evaluacion", "metodologia"]

variables:
  caso: uno_de([
    ["'Las fuerzas invisibles del universo determinan el destino humano'", "Las fuerzas invisibles del universo determinan el destino humano"],
    ["'El aumento de la temperatura global reduce el grosor del hielo ártico'", "El aumento de la temperatura global reduce el grosor del hielo ártico"],
    ["'Las personas son felices cuando están con sus amigos'", "Las personas son felices cuando están con sus amigos"]
  ])
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["Mala: es vaga y no medible", "Mala: es infalsable", "Buena: es específica y comprobable"]
enunciado: "Analice el siguiente caso: '{caso[idx][0]}'. ¿Cuál es su clasificación?"

explicacion: |
  Si el caso es el 0, es infalsable (fuerzas invisibles). Si es el 1, es buena (medible). Si es el 2, es mala por ser vaga (qué es "feliz" y "amigos" es subjetivo). El sistema evaluará según la lógica de la opción seleccionada.
```