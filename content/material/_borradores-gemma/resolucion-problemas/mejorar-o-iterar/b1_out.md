### 1 — El concepto de iteración
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["definicion", "iteracion"]

respuesta: "iterar"
tipo: completar
respuestas_validas: ["iterar", "iteración"]

enunciado: "Cuando una solución inicial no es óptima y decidimos realizar un nuevo ciclo de evaluación y ajuste para acercarnos al objetivo, estamos realizando un proceso de ___."

explicacion: |
  La iteración es el acto de repetir un proceso de evaluación y ajuste para refinar una solución hasta que cumpla con los criterios de éxito.
```

### 2 — Evaluación de la solución
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["evaluacion", "feedback"]

respuesta: falso
tipo: vf

enunciado: "En el proceso de mejora continua, si una solución cumple con el objetivo mínimo pero presenta errores secundarios, se debe considerar que el problema ha sido resuelto definitivamente y no se requiere más análisis."

explicacion: |
  Falso. El concepto de iterar implica que, aunque se alcance un umbral, la evaluación de la calidad puede disparar un nuevo ciclo de mejora para optimizar el resultado.
```

### 3 — Componentes del ciclo de mejora
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["ciclo", "feedback"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["Analizar el error", "Ajustar la solución"],
    ["Implementar cambio", "Verificar resultado"]
  ]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Analizar el error", "Ajustar la solución", "Implementar cambio", "Verificar resultado"]

enunciado: "Supongamos que estamos en la fase de {escenario[idx][0]}. El siguiente paso lógico dentro de un ciclo de iteración es ___."

explicacion: |
  El ciclo de mejora sigue una lógica de: Evaluar -> Analizar -> Ajustar -> Implementar -> Verificar. Después de analizar el error, el siguiente paso es el ajuste.
```

### 4 — El rol del feedback
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["feedback", "informacion"]

respuesta: "información de retroalimentación"
tipo: completar
respuestas_validas: ["información de retroalimentación", "feedback", "retroalimentación"]

enunciado: "Para poder iterar con éxito, es indispensable contar con ___ que nos indique la brecha entre el estado actual de la solución y el estado deseado."

explicacion: |
  Sin feedback o retroalimentación (datos sobre el desempeño de la solución), es imposible saber qué aspectos deben ser ajustados en la siguiente iteración.
```

### 5 — El proceso de refinamiento
```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["orden", "proceso"]

respuesta: ["Evaluar", "Identificar brechas", "Proponer ajustes", "Implementar cambios"]
tipo: ordenar
opciones_explicitas: ["Evaluar", "Identificar brechas", "Proponer ajustes", "Implementar cambios"]

enunciado: "Ordena los pasos lógicos para realizar una iteración de mejora sobre una solución existente:"

pasos:
  - "Observar el resultado obtenido"
  - "Detectar qué falta para llegar al ideal"
  - "Decidir qué cambios hacer"
  - "Aplicar las modificaciones"

explicacion: |
  El proceso iterativo requiere primero la evaluación, luego el diagnóstico de la brecha, la planificación del ajuste y finalmente la ejecución del cambio.
```