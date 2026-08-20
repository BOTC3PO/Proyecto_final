### 1 — Repaso espaciado vs. Repaso masivo
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["repaso_espaciado", "eficiencia"]

tipo: mc
opciones_explicitas: ["El repaso masivo favorece la retención a largo plazo", "El repaso espaciado distribuye el estudio en el tiempo para mejorar la retención", "El repaso masivo es más eficiente para exámenes de larga duración", "No hay diferencia significativa entre ambos"]

respuesta: "El repaso espaciado distribuye el estudio en el tiempo para mejorar la retención"

enunciado: "¿Cuál es la principal diferencia entre el repaso espaciado y el repaso masivo (cramming)?"

explicacion: |
  El repaso espaciado aprovecha el efecto de espaciamiento, distribuyendo las sesiones de estudio para consolidar la memoria a largo plazo, mientras que el repaso masivo solo sirve para la memoria a corto plazo.
```

### 2 — Práctica de recuperación vs. Relectura
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["recuperacion", "relectura"]

tipo: vf

enunciado: "La práctica de recuperación (active recall) es más efectiva que la relectura pasiva porque obliga al cerebro a reconstruir la información sin tenerla presente."

respuesta: verdadero

explicacion: |
  La relectura crea una "ilusión de competencia" donde el estudiante cree que sabe el tema porque le resulta familiar, pero la práctica de recuperación fortalece las rutas de acceso a la información en la memoria.
```

### 3 — Componentes del aprendizaje efectivo
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["metacognicion", "procesos"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [["repaso_pasivo", "relectura"], ["repaso_activo", "recuperacion"]]

tipo: completar
respuestas_validas: ["relectura", "recuperacion"]

enunciado: "Si el estudio pasivo se asocia con la {datos[escenario_idx][0]}, el estudio activo se asocia con la ___."

explicacion: |
  La clave del aprendizaje es pasar de procesos de reconocimiento (relectura) a procesos de producción (recuperación).
```

### 4 — Secuencia de una sesión de estudio óptima
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "avanzado"
  tags: ["metodologia", "orden"]

tipo: ordenar
opciones_explicitas: ["Estudio de nuevo contenido", "Práctica de recuperación (test)", "Revisión de errores y retroalimentación"]

respuesta: ["Estudio de nuevo contenido", "Práctica de recuperación (test)", "Revisión de errores y retroalimentación"]

enunciado: "Ordena los pasos lógicos para aplicar una técnica de recuperación efectiva sobre un tema nuevo:"

explicacion: |
  Primero se adquiere la información, luego se intenta extraer de la memoria sin mirar el material, y finalmente se corrigen las lagunas detectadas.
```

### 5 — El factor tiempo en la retención
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["curva_del_olvido", "espaciado"]

tipo: mc
opciones_explicitas: ["Aumentar la intensidad de una sola sesión", "Aumentar el intervalo entre sesiones", "Leer el mismo texto varias veces seguidas", "Subrayar todo el texto"]

respuesta: "Aumentar el intervalo entre sesiones"

enunciado: "Para combatir la curva del olvido mediante el repaso espaciado, se debe:"

explicacion: |
  El espaciamiento consiste en aumentar el tiempo entre cada sesión de repaso, permitiendo que el olvido ocurra parcialmente para que el esfuerzo de recuperación sea mayor y más duradero.
```