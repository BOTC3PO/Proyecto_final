### 1 — Sistemas basados en reglas
```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas"
  nivel: "basico"
  tags: ["ia", "logica", "reglas"]

enunciado: "Un sistema experto de diagnóstico médico utiliza una regla lógica simple: 'Si el paciente tiene fiebre Y dolor de garganta, entonces el diagnóstico es Faringitis'. Si un paciente presenta fiebre pero NO presenta dolor de garganta, el sistema determinará que el diagnóstico NO es Faringitis según esta regla específica."

respuesta: falso
tipo: vf

explicacion: |
  En los sistemas basados en reglas explícitas, el conocimiento es rígido. Si no se cumplen todas las condiciones de la premisa (antecedente), la regla no se dispara, independientemente de si hay otros síntomas presentes.
```

### 2 — El cambio de paradigma
```
metadata:
  materia: "informatica"
  tema: "ia_aprendizaje_datos"
  nivel: "intermedio"
  tags: ["machine_learning", "paradigma"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[ "Reglas manuales", "Programador escribe IF/ELSE" ], [ "Aprendizaje", "El modelo extrae patrones de datos" ]]

enunciado: "En el paradigma de Machine Learning, a diferencia de la programación tradicional, el componente principal que determina la lógica del sistema es: {datos[escenario_idx][0]}"

opciones_explicitas: ["El código fuente escrito por el humano", "Los datos y los ejemplos proporcionados", "La memoria RAM del computador"]
respuesta: "Los datos y los ejemplos proporcionados"
tipo: mc

explicacion: |
  En la IA clásica (Sistemas Expertos), el humano codifica las reglas. En el Machine Learning, el humano proporciona datos y el algoritmo "aprende" las reglas (parámetros) mediante optimización.
```

### 3 — El proceso de entrenamiento
```
metadata:
  materia: "informatica"
  tema: "entrenamiento_ia"
  nivel: "intermedio"
  tags: ["machine_learning", "pasos"]

enunciado: "Para que un modelo de IA aprenda a reconocer imágenes de gatos, se debe seguir un orden lógico de trabajo. Ordena los siguientes pasos:"

opciones_explicitas: ["Recolección de imágenes de gatos y perros", "Entrenamiento del modelo con los datos", "Evaluación del modelo con datos nuevos", "Implementación en una aplicación"]
respuesta: ["Recolección de imágenes de gatos y perros", "Entrenamiento del modelo con los datos", "Evaluación del modelo con datos nuevos", "Implementación en una aplicación"]
tipo: ordenar

explicacion: |
  El flujo estándar de Ciencia de Datos implica: 1. Obtener datos (Data Collection), 2. Entrenar (Training), 3. Validar/Testear (Evaluation) y 4. Desplegar (Deployment).
```

### 4 — Clasificación de datos
```
metadata:
  materia: "informatica"
  tema: "clasificacion_ia"
  nivel: "basico"
  tags: ["machine_learning", "conceptos"]

enunciado: "Un sistema de filtrado de SPAM analiza miles de correos electrónicos previos. Si el sistema detecta que la palabra 'Gratis' aparece en el 90% de los correos marcados como spam, aprenderá a asociar esa palabra con el spam. Este proceso de encontrar una función que asocie características con etiquetas se llama: ___"

respuestas_validas: ["Entrenamiento", "Inferencia", "Etiquetado"]
respuesta: "Entrenamiento"
tipo: completar

explicacion: |
  El entrenamiento es el proceso mediante el cual el algoritmo ajusta sus parámetros internos para minimizar el error entre sus predicciones y las etiquetas reales de los datos.
```

### 5 — Capacidad de generalización
```
metadata:
  materia: "informatica"
  tema: "generalizacion_ia"
  nivel: "avanzado"
  tags: ["machine_learning", "error"]

variables:
  caso_idx: uno_de([0, 1])
  caso: [
    [ "El modelo memorizó los datos de entrenamiento y falla con datos nuevos", "Overfitting" ],
    [ "El modelo es muy simple y no captura la tendencia de los datos", "Underfitting" ]
  ]

enunciado: "Cuando un sistema de IA ha aprendido tan perfectamente los datos de entrenamiento que ha 'memorizado' el ruido y los detalles irrelevantes, perdiendo su capacidad de aplicarse a casos reales distintos, estamos ante un problema de: {caso[caso_idx][1]}"

opciones_explicitas: ["Overfitting", "Underfitting", "Bias", "Variance"]
respuesta: "Overfitting"
tipo: mc

explicacion: |
  El Overfitting (sobreajuste) ocurre cuando el modelo es demasiado complejo y se adapta excesivamente al ruido de los datos de entrenamiento, lo que resulta en un error muy alto cuando se le presentan datos nuevos (pérdida de generalización).
```