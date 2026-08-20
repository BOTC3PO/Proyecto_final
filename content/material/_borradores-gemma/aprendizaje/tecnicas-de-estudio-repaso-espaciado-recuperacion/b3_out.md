### 1 — Repaso vs. Relectura
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["repaso", "relectura", "eficiencia"]

tipo: mc
opciones_explicitas: ["Relectura pasiva", "Práctica de recuperación", "Subrayado intensivo", "Lectura rápida"]

enunciado: "Si un estudiante lee sus apuntes una y otra vez con el objetivo de memorizar, está cometiendo el error de confundir la comprensión con la ___."

respuesta: "Relectura pasiva"

explicacion: |
  La relectura pasiva genera una "ilusión de competencia": crees que sabes el tema porque te resulta familiar al leerlo, pero no has entrenado la capacidad de extraer la información de tu memoria.
```

### 2 — El efecto de la práctica de recuperación
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["recuperacion", "testeo", "memoria"]

tipo: vf

enunciado: "La práctica de recuperación (testearse a uno mismo) es menos efectiva que la relectura porque genera mayor fatiga cognitiva durante el estudio."

respuesta: falso

explicacion: |
  Es falso. Aunque la práctica de recuperación es más difícil y cansa más (esfuerzo cognitivo), es precisamente ese esfuerzo el que fortalece la huella de memoria y garantiza un aprendizaje profundo.
```

### 3 — Distribución del estudio
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["espaciado", "atencion", "curva_del_olvido"]

variables:
  escenario: uno_de([["Estudiar 10 horas seguidas la noche anterior", "Cramming"], ["Estudiar 1 hora durante 10 días", "Repaso espaciado"]])

tipo: mc
opciones_explicitas: ["Cramming", "Repaso espaciado"]

enunciado: "Para combatir la curva del olvido, la técnica más efectiva es el {escenario[1]}."

respuesta: "Repaso espaciado"

explicacion: |
  El repaso espaciado aprovecha los periodos de olvido para re-activar la información, lo que consolida la memoria a largo plazo, a diferencia del cramming que solo sirve para la memoria de corto plazo.
```

### 4 — Secuencia de estudio eficiente
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Estudio inicial del material", "Práctica de recuperación (testeo)", "Revisión de errores y corrección"]

enunciado: "Ordena los pasos de un ciclo de aprendizaje basado en la recuperación activa para maximizar la retención:"

respuesta: ["Estudio inicial del material", "Práctica de recuperación (testeo)", "Revisión de errores y corrección"]

explicacion: |
  Primero debes tener una base de conocimiento, luego debes forzar al cerebro a recuperar esa información sin mirar (testeo) y finalmente debes corregir lo que fallaste para cerrar la brecha de conocimiento.
```

### 5 — El error del "sentirse cómodo"
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "avanzado"
  tags: ["metacognicion", "esfuerzo", "eficiencia"]

tipo: completar

enunciado: "Cuando una técnica de estudio se siente demasiado fácil y fluida, es probable que no estés realizando una ___ efectiva."

respuestas_validas: ["práctica de recuperación"]
respuesta: "práctica de recuperación"

explicacion: |
  El aprendizaje óptimo ocurre en el "desafío deseable". Si el estudio es demasiado fluido (como leer algo que ya sabes), no hay esfuerzo de recuperación y, por lo tanto, no hay consolidación real.
```