### 1 — Repaso espaciado vs. Atiborramiento
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["repaso_espaciado", "eficiencia"]

respuesta: "repaso_espaciado"
tipo: mc
opciones_explicitas: ["repaso_espaciado", "atiborramiento", "relectura_pasiva"]

enunciado: "La técnica que consiste en distribuir las sesiones de estudio en intervalos de tiempo crecientes para combatir la curva del olvido se denomina ___."

explicacion: |
  El repaso espaciado (spaced repetition) aprovecha el efecto de espaciamiento para fortalecer la memoria a largo plazo, evitando la saturación de información en una sola sesión.
```

### 2 — Práctica de recuperación
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["recuperacion", "active_recall"]

respuesta: verdadero
tipo: vf

enunciado: "La práctica de recuperación (active recall) implica intentar recordar la información de un tema sin mirar los apuntes, en lugar de simplemente releer el texto."

explicacion: |
  La relectura es una actividad pasiva que genera una falsa sensación de fluidez, mientras que la recuperación activa obliga al cerebro a realizar el esfuerzo de reconstruir la información, consolidando la memoria.
```

### 3 — El proceso de aprendizaje efectivo
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["ordenar", "procesos"]

respuesta: ["codificación", "recuperación", "consolidación"]
tipo: ordenar
opciones_explicitas: ["codificación", "recuperación", "consolidación"]

enunciado: "Ordena cronológicamente las etapas del proceso de memoria: primero se recibe la información (___), luego se intenta evocar de la memoria (___) y finalmente se estabiliza el rastro mnémico (___)."

explicacion: |
  El proceso estándar implica la codificación de la entrada, el esfuerzo de recuperación (esencial para el aprendizaje activo) y la consolidación a largo plazo.
```

### 4 — La curva del olvido
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["curva_del_olvido", "memoria"]

variables:
  datos: [["curva del olvido", "efecto de espaciamiento"], ["relectura", "ilusión de competencia"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["curva del olvido", "efecto de espaciamiento", "relectura", "ilusión de competencia"]

enunciado: "Según la psicología cognitiva, si estudias todo el contenido justo antes del examen, te enfrentas principalmente a la ___."

explicacion: |
  La curva del olvido muestra cómo la información se pierde rápidamente si no se repasa. El repaso espaciado ayuda a mitigar este efecto.
```

### 5 — Completar términos clave
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["terminologia", "metacognicion"]

respuesta: "es_falsas"
tipo: completar
respuestas_validas: ["es_verdadero", "es_falsas"]

enunciado: "Si un estudiante solo utiliza la técnica de relectura pasiva para estudiar, su percepción de dominio sobre la materia es ___."

explicacion: |
  La relectura genera una 'ilusión de competencia': el estudiante reconoce la información al verla, pero no es capaz de generarla desde cero sin el apoyo visual.
```