# Aprendizaje — Tecnicas de estudio repaso espaciado recuperacion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

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

respuesta_orden: ["codificación", "recuperación", "consolidación"]
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
respuestas_validas:
  - "es_verdadero"
  - "es_falsas"

enunciado: "Si un estudiante solo utiliza la técnica de relectura pasiva para estudiar, su percepción de dominio sobre la materia es ___."

explicacion: |
  La relectura genera una 'ilusión de competencia': el estudiante reconoce la información al verla, pero no es capaz de generarla desde cero sin el apoyo visual.
```

### 6 — El efecto de la práctica de recuperación

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

### 7 — Repaso espaciado vs. Atiborramiento

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["espaciado", "eficiencia"]

variables:
  escenario: uno_de([["Estudiar 10 horas seguidas un domingo", "atiborramiento"], ["Estudiar 1 hora cada día durante 10 días", "espaciado"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["atiborramiento", "espaciado"]

enunciado: "Un estudiante decide estudiar para su examen de medicina distribuyendo las sesiones en intervalos de tiempo cada vez más largos. El escenario descrito como {escenario[1]} es un ejemplo de:"

explicacion: |
  El repaso espaciado (spaced repetition) aprovecha la curva del olvido para repasar la información justo antes de que se pierda, optimizando la retención a largo plazo.
```

### 8 — Verdad o Falsa: La relectura

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

### 9 — Secuencia de un ciclo de estudio efectivo

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Estudiar el contenido", "Realizar un test de autoevaluación", "Revisar errores y reforzar puntos débiles", "Programar un nuevo repaso para dentro de 3 días"]
tipo: ordenar
opciones_explicitas: ["Estudiar el contenido", "Realizar un test de autoevaluación", "Revisar errores y reforzar puntos débiles", "Programar un nuevo repaso para dentro de 3 días"]

enunciado: "Ordena los pasos para aplicar correctamente la combinación de práctica de recuperación y repaso espaciado:"

explicacion: |
  Un ciclo efectivo comienza con la adquisición de información, seguida de un esfuerzo de recuperación (test), la corrección de errores y, finalmente, la programación de un nuevo encuentro para combatir la curva del olvido.
```

### 10 — Completar: El factor tiempo

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["espaciado", "curva_olvido"]

respuestas_validas:
  - "intervalos"
  - "espaciados"
respuesta: "intervalos"
tipo: "completar"

enunciado: "Para que el repaso espaciado sea efectivo, la información debe ser repasada en ___ de tiempo cada vez mayores."

explicacion: |
  Al aumentar los intervalos entre repasos, obligamos al cerebro a realizar un esfuerzo mayor de recuperación, lo que consolida la memoria de manera más robusta que si los repasos fueran constantes y muy cercanos.
```

### 11 — Repaso vs. Relectura

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

### 12 — El efecto de la práctica de recuperación

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

### 13 — Distribución del estudio

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

### 14 — Secuencia de estudio eficiente

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Estudio inicial del material", "Práctica de recuperación (testeo)", "Revisión de errores y corrección"]

enunciado: "Ordena los pasos de un ciclo de aprendizaje basado en la recuperación activa para maximizar la retención:"

respuesta_orden: ["Estudio inicial del material", "Práctica de recuperación (testeo)", "Revisión de errores y corrección"]

explicacion: |
  Primero debes tener una base de conocimiento, luego debes forzar al cerebro a recuperar esa información sin mirar (testeo) y finalmente debes corregir lo que fallaste para cerrar la brecha de conocimiento.
```

### 15 — El error del "sentirse cómodo"

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "avanzado"
  tags: ["metacognicion", "esfuerzo", "eficiencia"]

tipo: completar

enunciado: "Cuando una técnica de estudio se siente demasiado fácil y fluida, es probable que no estés realizando una ___ efectiva."

respuestas_validas:
  - "práctica de recuperación"
respuesta: "práctica de recuperación"

explicacion: |
  El aprendizaje óptimo ocurre en el "desafío deseable". Si el estudio es demasiado fluido (como leer algo que ya sabes), no hay esfuerzo de recuperación y, por lo tanto, no hay consolidación real.
```

### 16 — Repaso espaciado vs. Repaso masivo

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

### 17 — Práctica de recuperación vs. Relectura

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

### 18 — Componentes del aprendizaje efectivo

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
respuestas_validas:
  - "relectura"
  - "recuperacion"

enunciado: "Si el estudio pasivo se asocia con la {datos[escenario_idx][0]}, el estudio activo se asocia con la ___."

explicacion: |
  La clave del aprendizaje es pasar de procesos de reconocimiento (relectura) a procesos de producción (recuperación).
```

### 19 — Secuencia de una sesión de estudio óptima

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "avanzado"
  tags: ["metodologia", "orden"]

tipo: ordenar
opciones_explicitas: ["Estudio de nuevo contenido", "Práctica de recuperación (test)", "Revisión de errores y retroalimentación"]

respuesta_orden: ["Estudio de nuevo contenido", "Práctica de recuperación (test)", "Revisión de errores y retroalimentación"]

enunciado: "Ordena los pasos lógicos para aplicar una técnica de recuperación efectiva sobre un tema nuevo:"

explicacion: |
  Primero se adquiere la información, luego se intenta extraer de la memoria sin mirar el material, y finalmente se corrigen las lagunas detectadas.
```

### 20 — El factor tiempo en la retención

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

### 21 — El dilema del examen final

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["repaso_espaciado", "eficiencia"]

variables:
  datos: [["Estudiar 10 horas seguidas un domingo", "releer"], ["Estudiar 1 hora cada día durante 10 días", "repaso_espaciado"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["releer", "repaso_espaciado"]

enunciado: "Si un estudiante decide aplicar la técnica de {datos[idx][0]}, ¿qué estrategia de distribución temporal está utilizando?"

explicacion: |
  El repaso espaciado consiste en distribuir las sesiones de estudio en el tiempo para combatir la curva del olvido, a diferencia del 'cramming' o estudio intensivo de último momento.
```

### 22 — ¿Releer o Evocar?

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["recuperacion_activa", "metacognicion"]

variables:
  datos: [["leer un capítulo tres veces seguidas", "falsa_sensacion_dominio"], ["hacerse preguntas sin mirar el libro", "recuperacion_activa"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
enunciado: "Un estudiante decide aplicar {datos[idx][0]}. ¿Esta acción es un ejemplo de práctica de recuperación activa? (verdadero/falso)"

explicacion: |
  La lectura pasiva suele generar una 'ilusión de competencia' o falsa sensación de dominio, mientras que la recuperación activa obliga al cerebro a buscar la información, fortaleciendo la memoria.
```

### 23 — El proceso de la memoria

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["recuperacion_activa", "procesamiento"]

respuesta_orden: ["Identificar información clave", "Intentar recordar sin mirar", "Verificar con el texto", "Corregir errores"]
tipo: ordenar
opciones_explicitas: ["Identificar información clave", "Intentar recordar sin mirar", "Verificar con el texto", "Corregir errores"]

enunciado: "Ordena los pasos lógicos para realizar una sesión efectiva de práctica de recuperación (active recall):"

explicacion: |
  Primero se debe procesar la información, luego intentar evocarla de la memoria (el paso crítico), verificar qué se olvidó y finalmente corregir.
```

### 24 — El efecto de la dificultad deseable

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "avanzado"
  tags: ["dificultad_deseable", "eficiencia"]

variables:
  datos: [["Es muy fácil y no requiere esfuerzo mental", "baja_retencion"], ["Es desafiante pero permite el aprendizaje", "alta_retencion"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
opciones_explicitas: ["baja_retencion", "alta_retencion"]

enunciado: "Si una técnica de estudio se siente ___ debido a que el estudiante está forzando la recuperación de la información, el resultado esperado es una ___."

explicacion: |
  El concepto de 'dificultad deseable' sugiere que cuanto más esfuerzo cognitivo requiere el proceso de recuperación, más fuerte es la huella de memoria a largo plazo.
```

### 25 — Comparativa de métodos

```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["comparacion", "efectividad"]

variables:
  datos: [["Subrayar el libro repetidamente", "pasivo"], ["Realizar un test de autoevaluación", "activo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["pasivo", "activo"]

enunciado: "El método de {datos[idx][0]} se clasifica como un proceso de aprendizaje ___."

explicacion: |
  La práctica de recuperación (como los tests) es un proceso activo que estimula la recuperación de la información, mientras que subrayar es una actividad mayormente pasiva.
```
