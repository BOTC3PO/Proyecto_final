### 1 — El ciclo de la mejora continua
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["metodologia", "iteracion"]

respuesta: "iterar"
tipo: "vf"

enunciado: "Cuando una solución inicial no cumple con todos los criterios de éxito tras una evaluación, el proceso correcto es ___ la solución en lugar de descartarla por completo."

explicacion: |
  La iteración es el proceso de repetir un ciclo de mejora. Si la solución no es óptima, evaluamos los fallos y volvemos a empezar el proceso de ajuste, no significa que el trabajo esté perdido, sino que estamos en una fase de refinamiento.
```

### 2 — Evaluación de un prototipo
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["evaluacion", "ajuste"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El prototipo de una silla es estable pero muy incómoda.", "ajustar el acolchado"],
    ["La aplicación de gestión es rápida pero confusa para el usuario.", "simplificar la interfaz"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["cambiar de proyecto", "abandonar el diseño", "ajustar el acolchado", "simplificar la interfaz"]

enunciado: "Se evalúa un proyecto y se detecta el siguiente problema: {escenarios[escenario_idx][0]}. ¿Cuál es la acción de mejora más adecuada?"

pasos:
  - "Identificar la brecha entre el resultado actual y el objetivo."
  - "Seleccionar el componente específico que requiere ajuste."
  - "Aplicar la modificación y volver a evaluar."

explicacion: |
  La evaluación nos indica exactamente qué parte de la solución falló. En lugar de cambiar de proyecto, aplicamos un ajuste específico basado en el feedback recibido.
```

### 3 — Secuencia de la iteración
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

respuesta: ["Diseñar", "Implementar", "Evaluar", "Ajustar"]
tipo: "ordenar"
opciones_explicitas: ["Diseñar", "Implementar", "Evaluar", "Ajustar"]

enunciado: "Ordena los pasos lógicos de un ciclo de mejora iterativa, comenzando desde la concepción de la idea hasta el refinamiento final."

explicacion: |
  Un ciclo iterativo no es lineal, sino circular. El paso de 'Ajustar' (basado en la evaluación) es lo que permite volver a 'Diseñar' una versión mejorada de la solución.
```

### 4 — El error de la solución terminada
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["mentalidad", "evaluacion"]

respuesta: falso
tipo: "vf"

enunciado: "Si una solución resuelve el problema principal pero presenta detalles secundarios que podrían optimizarse, la solución debe considerarse como 'terminada' y no debe ser objeto de más iteraciones."

explicacion: |
  Asumir que una solución está terminada solo porque cumple lo mínimo impide la optimización. La mejora continua sugiere que siempre es posible iterar para elevar la calidad o eficiencia.
```

### 5 — Análisis de brecha
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "avanzado"
  tags: ["analisis", "datos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Eficiencia actual: 60%, Objetivo: 90%", "30%"],
    ["Tiempo de respuesta: 10s, Objetivo: 2s", "8s"]
  ]

respuesta: casos[caso_idx][1]

tipo: "completar"
respuestas_validas: ["30%", "8s"]

enunciado: "Para iterar con éxito, primero debemos cuantificar la brecha. En el caso planteado, la diferencia entre el estado actual y el objetivo es de ___."

pasos:
  - "Identificar el valor actual."
  - "Identificar el valor objetivo."
  - "Calcular la diferencia (Brecha)."

explicacion: |
  La iteración requiere metas claras. Si no sabemos cuánto nos falta para alcanzar el objetivo (la brecha), no podemos diseñar una acción de mejora que sea proporcional al problema.
```