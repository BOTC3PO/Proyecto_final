### 1 — El efecto de la ilusión de competencia
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saberes"
  nivel: "basico"
  tags: ["metacognicion", "estudio_eficiente"]

respuesta: falso
tipo: vf

enunciado: "Si leo un texto varias veces y reconozco las palabras, esto garantiza que he adquirido el conocimiento y puedo aplicarlo sin errores."

explicacion: |
  Esto se conoce como 'ilusión de competencia'. Reconocer la información al leerla no es lo mismo que ser capaz de recuperarla de la memoria o aplicarla. La metacognición nos ayuda a distinguir entre 'reconocimiento' y 'dominio real'.
```

### 2 — Identificación de lagunas
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saberes"
  nivel: "intermedio"
  tags: ["autoevaluacion", "estrategia"]

variables:
  escenario: uno_de([
    ["Juan lee sus apuntes y dice 'ya me lo sé', pero al cerrar el cuaderno no puede explicar el concepto", "Falsa sensación de saber"],
    ["Ana intenta explicar un tema en voz alta y se detiene porque no sabe cómo conectar dos ideas", "Identificación de vacío"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["escenario[0]", "escenario[1]", "Ninguna de las anteriores"]

enunciado: "Un estudiante está aplicando la metacognición para evaluar su conocimiento. ¿Cuál de los siguientes casos representa un ejercicio efectivo de monitoreo de la propia comprensión?"

explicacion: |
  El segundo caso muestra a un estudiante detectando exactamente dónde falla su conocimiento (la conexión entre ideas), lo cual es el primer paso para una reparación del aprendizaje.
```

### 3 — Pasos para el monitoreo efectivo
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saberes"
  nivel: "intermedio"
  tags: ["proceso", "metacognicion"]

respuesta: ["Evaluar", "Identificar", "Planificar"]
tipo: ordenar
opciones_explicitas: ["Planificar", "Evaluar", "Identificar"]

enunciado: "Ordena los pasos lógicos que un estudiante debe seguir para mejorar su estudio basándose en su capacidad metacognitiva:"

explicacion: |
  Primero se debe Evaluar el estado actual (¿qué sé?), luego Identificar la brecha (¿qué me falta?) y finalmente Planificar la acción para cubrir ese vacío.
```

### 4 — La técnica de la hoja en blanco
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saberes"
  nivel: "avanzado"
  tags: ["tecnicas", "evaluacion"]

variables:
  caso: uno_de([
    ["El estudiante escribe todo lo que recuerda sobre la fotosíntesis sin mirar el libro", "Recuperación activa"],
    ["El estudiante subraya con colores las partes más importantes del texto", "Pasivo/Reconocimiento"]
  ])

respuesta: "caso[0]"
tipo: mc
opciones_explicitas: ["caso[0]", "caso[1]"]

enunciado: "Un estudiante decide aplicar la técnica de 'recuperación activa' (active recall) para verificar qué sabe realmente. ¿Cuál de estas acciones describe mejor este proceso metacognitivo?"

explicacion: |
  La recuperación activa obliga al cerebro a buscar la información sin ayuda externa, lo que revela de inmediato si el conocimiento es sólido o si solo hay una ilusión de saber por haber leído el texto.
```

### 5 — El diagnóstico del error
```
metadata:
  materia: "aprendizaje"
  tema: "metacognicion_saberes"
  nivel: "intermedio"
  tags: ["error", "aprendizaje"]

variables:
  resultado: uno_de([
    ["El estudiante sabe el concepto pero no sabe aplicarlo a un problema", "Teoría"],
    ["El estudiante no recuerda ni el nombre del concepto", "Falta de memoria"]
  ])

respuesta: "resultado[0]"
tipo: completar
respuestas_validas: ["resultado[0]", "resultado[1]"]

enunciado: "Si un estudiante puede definir un concepto con precisión, pero al enfrentar un ejercicio práctico no logra resolverlo, su diagnóstico metacognitivo indica que posee conocimiento de tipo ___."

explicacion: |
  Es fundamental distinguir entre el conocimiento declarativo (saber qué es algo) y el conocimiento procedimental (saber cómo usarlo). Saber la teoría no garantiza la capacidad de aplicación.
```