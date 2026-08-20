### 1 — Concepto de Modelo Matemático
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["definicion", "modelado"]

respuesta: "matematico"
tipo: "completar"
respuestas_validas: ["matematico", "matemático"]

enunciado: "Un modelo ___ es una representación abstracta de un sistema o fenómeno físico mediante el uso de lenguaje matemático para predecir su comportamiento."

explicacion: |
  El modelado matemático permite traducir la realidad a ecuaciones para realizar cálculos predictivos antes de la construcción física.
```

### 2 — Naturaleza de los Modelos
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["verdadera_falso", "conceptos"]

respuesta: falso

tipo: "vf"

enunciado: "Un modelo matemático es una representación exacta y perfecta de la realidad que no requiere simplificaciones para ser útil."

explicacion: |
  Falso. Todo modelo es una simplificación de la realidad; un modelo demasiado complejo sería tan difícil de resolver como el sistema real mismo.
```

### 3 — Variables y Parámetros
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["variables", "parametros"]

variables:
  escenario: uno_de([[0, "variable", "cambia durante el proceso"], [1, "parámetro", "se mantiene constante"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["variable", "parámetro"]

enunciado: "En el contexto de un modelo, si un valor cambia a medida que el sistema evoluciona, se denomina {escenario[0]}. Si el valor permanece constante durante el análisis, se denomina {escenario[1]}."

explicacion: |
  Las variables representan las incógnitas del sistema (como la posición o el tiempo), mientras que los parámetros son valores que definen las propiedades del sistema (como la gravedad o la densidad).
```

### 4 — Fases del Modelado
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["proceso", "ordenar"]

respuesta: ["Observación", "Formulación", "Resolución", "Validación"]
tipo: "ordenar"
opciones_explicitas: ["Observación", "Formulación", "Resolución", "Validación"]

enunciado: "Ordene las etapas típicas del proceso de modelado en ingeniería, desde la identificación del problema hasta la comprobación de resultados."

explicacion: |
  El proceso comienza con la observación del fenómeno, sigue con la creación de las ecuaciones (formulación), el cálculo matemático (resolución) y finalmente la comparación con datos reales (validación).
```

### 5 — Modelos Deterministas vs Estocásticos
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["determinismo", "probabilidad"]

variables:
  caso: uno_de([[0, "determinista", "no tiene incertidumbre"], [1, "estocástico", "incluye elementos aleatorios"]])

respuesta: caso[1]
tipo: "mc"
opciones_explicitas: ["determinista", "estocástico"]

enunciado: "Si un modelo matemático incluye variables aleatorias y la incertidumbre en sus resultados, estamos ante un modelo {caso[0]}. Si el resultado es único y predecible para las mismas condiciones iniciales, es un modelo {caso[1]}."

explicacion: |
  Los modelos deterministas no consideran la probabilidad, mientras que los estocásticos (o probabilísticos) modelan sistemas donde existe el azar.
```