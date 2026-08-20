### 1 — Sistemas basados en reglas vs Aprendizaje
```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "basico"
  tags: ["ia", "logica", "aprendizaje_automatico"]

respuesta: "aprendizaje automático"
tipo: completar
respuestas_validas: ["aprendizaje automático"]

enunciado: "Mientras que un sistema basado en reglas requiere que un programador defina manualmente cada condición lógica, el ___ permite que el sistema descubra patrones directamente desde los datos."

explicacion: |
  En la IA tradicional (sistemas expertos), la lógica es explícita y programada por humanos. En el Machine Learning, la lógica se infiere a partir de la observación de datos.
```

### 2 — Característica del aprendizaje supervisado
```
metadata:
  materia: "informatica"
  tema: "aprendizaje_supervisado"
  nivel: "intermedio"
  tags: ["ia", "supervisado", "datos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["clasificar_imágenes", "etiquetadas"],
    ["predecir_precios", "numéricas"]
  ]

respuesta: "etiquetadas"
tipo: mc
opciones_explicitas: ["etiquetadas", "no estructuradas", "aleatorias", "puramente sintácticas"]

enunciado: "En un escenario de {escenarios[escenario_idx][0]}, el modelo requiere que los datos de entrenamiento estén {escenarios[escenario_idx][1]} para aprender la relación entre la entrada y la salida."

explicacion: |
  El aprendizaje supervisado se distingue de otros por el uso de un conjunto de datos donde la respuesta correcta (etiqueta) ya es conocida.
```

### 3 — Capacidad de generalización
```
metadata:
  materia: "informatica"
  tema: "generalizacion_ia"
  nivel: "avanzado"
  tags: ["ia", "generalizacion", "overfitting"]

respuesta: verdadero
tipo: vf

enunciado: "Un sistema basado en reglas es capaz de manejar situaciones que no fueron explícitamente programadas mediante una regla 'si-entonces', a diferencia de un modelo de aprendizaje que puede generalizar patrones nuevos."

explicacion: |
  Falso. Un sistema de reglas es rígido: si no existe una regla para un caso específico, el sistema no puede decidir. El aprendizaje busca la generalización para manejar datos no vistos.
```

### 4 — Flujo de desarrollo en IA moderna
```
metadata:
  materia: "informatica"
  tema: "flujo_desarrollo_ia"
  nivel: "intermedio"
  tags: ["ia", "workflow", "datos"]

respuesta: ["Recolección de datos", "Preprocesamiento", "Entrenamiento del modelo", "Evaluación de precisión"]
tipo: ordenar
opciones_explicitas: ["Recolección de datos", "Preprocesamiento", "Entrenamiento del modelo", "Evaluación de precisión"]

enunciado: "Ordene las etapas típicas del ciclo de vida de un proyecto de aprendizaje automático, desde la obtención de información hasta la validación del modelo."

explicacion: |
  A diferencia del desarrollo de software tradicional donde el centro es el código, en IA el flujo comienza con la gestión de datos y termina validando la capacidad de predicción.
```

### 5 — Diferencia en la fuente de conocimiento
```
metadata:
  materia: "informatica"
  tema: "fuente_conocimiento"
  nivel: "basico"
  tags: ["ia", "conocimiento", "datos"]

respuesta: "datos"
tipo: mc
opciones_explicitas: ["conocimiento experto", "datos", "reglas lógicas", "hardware"]

enunciado: "En la IA clásica, el conocimiento proviene de la codificación de la experiencia humana; en la IA moderna basada en aprendizaje, el conocimiento se extrae de los ___."

explicacion: |
  La transición fundamental es pasar de la "codificación de reglas" (conocimiento manual) a la "extracción de patrones" (conocimiento derivado de datos).
```