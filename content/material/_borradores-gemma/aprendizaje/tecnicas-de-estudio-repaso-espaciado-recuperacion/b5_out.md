### 1 — El dilema del examen final
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["repaso_espaciado", "eficiencia"]

variables:
  escenario: uno_de([["Estudiar 10 horas seguidas un domingo", "releer"], ["Estudiar 1 hora cada día durante 10 días", "repaso_espaciado"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["releer", "repaso_espaciado"]

enunciado: "Si un estudiante decide aplicar la técnica de {escenario[idx][0]}, ¿qué estrategia de distribución temporal está utilizando?"

explicacion: |
  El repaso espaciado consiste en distribuir las sesiones de estudio en el tiempo para combatir la curva del olvido, a diferencia del 'cramming' o estudio intensivo de último momento.
```

### 2 — ¿Releer o Evocar?
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["recuperacion_activa", "metacognicion"]

variables:
  caso: uno_de([["leer un capítulo tres veces seguidas", "falsa_sensacion_dominio"], ["hacerse preguntas sin mirar el libro", "recuperacion_activa"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: vf

enunciado: "Un estudiante decide aplicar {caso[idx][0]}. ¿Esta acción es un ejemplo de práctica de recuperación activa? (verdadero/falso)"

explicacion: |
  La lectura pasiva suele generar una 'ilusión de competencia' o falsa sensación de dominio, mientras que la recuperación activa obliga al cerebro a buscar la información, fortaleciendo la memoria.
```

### 3 — El proceso de la memoria
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "intermedio"
  tags: ["recuperacion_activa", "procesamiento"]

respuesta: ["Identificar información clave", "Intentar recordar sin mirar", "Verificar con el texto", "Corregir errores"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para realizar una sesión efectiva de práctica de recuperación (active recall):"

explicacion: |
  Primero se debe procesar la información, luego intentar evocarla de la memoria (el paso crítico), verificar qué se olvidó y finalmente corregir.
```

### 4 — El efecto de la dificultad deseable
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "avanzado"
  tags: ["dificultad_deseable", "eficiencia"]

variables:
  escenario: uno_de([["Es muy fácil y no requiere esfuerzo mental", "baja_retencion"], ["Es desafiante pero permite el aprendizaje", "alta_retencion"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: completar
opciones_explicitas: ["baja_retencion", "alta_retencion"]

enunciado: "Si una técnica de estudio se siente ___ debido a que el estudiante está forzando la recuperación de la información, el resultado esperado es una ___."

explicacion: |
  El concepto de 'dificultad deseable' sugiere que cuanto más esfuerzo cognitivo requiere el proceso de recuperación, más fuerte es la huella de memoria a largo plazo.
```

### 5 — Comparativa de métodos
```
metadata:
  materia: "aprendizaje"
  tema: "tecnicas_de_estudio_repaso_espaciado_recuperacion"
  nivel: "basico"
  tags: ["comparacion", "efectividad"]

variables:
  metodo: uno_de([["Subrayar el libro repetidamente", "pasivo"], ["Realizar un test de autoevaluación", "activo"]])
  idx: uno_de([0, 1])

respuesta: metodo[idx][1]
tipo: mc
opciones_explicitas: ["pasivo", "activo"]

enunciado: "El método de {metodo[idx][0]} se clasifica como un proceso de aprendizaje ___."

explicacion: |
  La práctica de recuperación (como los tests) es un proceso activo que estimula la recuperación de la información, mientras que subrayar es una actividad mayormente pasiva.
```