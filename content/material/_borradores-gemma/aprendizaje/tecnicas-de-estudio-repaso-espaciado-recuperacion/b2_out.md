### 1 — El efecto de la práctica de recuperación
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["recuperacion", "testeo"]

respuesta: "recuperar"
tipo: "mc"
opciones_explicitas: ["releer", "recuperar", "subrayar", "resumir"]

enunciado: "Si un estudiante, en lugar de volver a leer sus notas una y otra vez, intenta recordar la información sin mirar el libro, está utilizando la técnica de ___."

explicacion: |
  La práctica de recuperación (retrieval practice) consiste en forzar al cerebro a extraer la información de la memoria, lo cual fortalece las huellas de memoria mucho más que la simple relectura pasiva.
```

### 2 — Repaso espaciado vs. Atiborramiento
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["espaciado", "eficiencia"]

variables:
  escenario: uno_de([
    ["Estudiar 10 horas seguidas un domingo", "atiborramiento"],
    ["Estudiar 1 hora cada día durante 10 días", "espaciado"]
  ])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["atiborramiento", "espaciado"]

enunciado: "Un estudiante decide estudiar para su examen de medicina distribuyendo las sesiones en intervalos de tiempo cada vez más largos. El escenario descrito como {escenario[1]} es un ejemplo de:"

explicacion: |
  El repaso espaciado (spaced repetition) aprovecha la curva del olvido para repasar la información justo antes de que se pierda, optimizando la retención a largo plazo.
```

### 3 — Verdad o Falsa: La relectura
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["relectura", "eficiencia"]

respuesta: falso
tipo: "vf"

enunciado: "La relectura pasiva de un texto es una de las técnicas más efectivas para garantizar la retención a largo plazo de conceptos complejos."

explicacion: |
  Falso. La relectura genera una "ilusión de competencia" donde el estudiante siente que sabe el tema porque le resulta familiar, pero no ha entrenado la capacidad de recuperar la información por sí mismo.
```

### 4 — Secuencia de un ciclo de estudio efectivo
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta: ["Estudiar el contenido", "Realizar un test de autoevaluación", "Revisar errores y reforzar puntos débiles", "Programar un nuevo repaso para dentro de 3 días"]
tipo: "ordenar"
opciones_explicitas: ["Estudiar el contenido", "Realizar un test de autoevaluación", "Revisar errores y reforzar puntos débiles", "Programar un nuevo repaso para dentro de 3 días"]

enunciado: "Ordena los pasos para aplicar correctamente la combinación de práctica de recuperación y repaso espaciado:"

explicacion: |
  Un ciclo efectivo comienza con la adquisición de información, seguida de un esfuerzo de recuperación (test), la corrección de errores y, finalmente, la programación de un nuevo encuentro para combatir la curva del olvido.
```

### 5 — Completar: El factor tiempo
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["espaciado", "curva_olvido"]

respuestas_validas: ["intervalos", "espaciados"]
respuesta: "intervalos"
tipo: "completar"

enunciado: "Para que el repaso espaciado sea efectivo, la información debe ser repasada en ___ de tiempo cada vez mayores."

explicacion: |
  Al aumentar los intervalos entre repasos, obligamos al cerebro a realizar un esfuerzo mayor de recuperación, lo que consolida la memoria de manera más robusta que si los repasos fueran constantes y muy cercanos.
```