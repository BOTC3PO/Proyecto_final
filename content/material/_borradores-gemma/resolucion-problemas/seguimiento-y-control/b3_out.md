### 1 — Control vs. Seguimiento
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["gestion", "conceptos"]

variables:
  es_control: verdadero

respuesta: es_control
tipo: vf

enunciado: "El seguimiento se enfoca en la recolección de datos sobre el progreso, mientras que el control implica la toma de acciones correctivas para volver al plan original. ¿Es esta distinción correcta?"

explicacion: |
  El seguimiento es la fase de observación y medición (ver qué está pasando), mientras que el control es la fase de acción (corregir la desviación). Sin seguimiento no hay datos para controlar, pero el seguimiento por sí solo no garantiza que el proyecto vuelva al camino trazado.
```

### 2 — El error de la "Falsa Sensación de Progreso"
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["errores_comunes", "desviaciones"]

variables:
  escenario: uno_de([[1, "se completó el 50% de las tareas"], [2, "se consumió el 50% del presupuesto"]])
  valor_idx: uno_de([0, 1])

respuesta: escenario[valor_idx][1]
tipo: mc
opciones_explicitas: ["se completó el 50% de las tareas", "se consumió el 50% del presupuesto", "se ha alcanzado el hito principal", "no hay desviación detectada"]

enunciado: "Un gerente observa que el proyecto tiene un avance del {escenario[valor_idx][0]} respecto al tiempo transcurrido, pero nota una desviación crítica en el recurso principal. ¿Cuál es el error más común al reportar este estado?"

pasos:
  - "Identificar la métrica que está mostrando el avance."
  - "Comparar la métrica de progreso con la métrica de recursos/costos."
  - "Detectar si la métrica de progreso oculta una desviación en otra variable."

explicacion: |
  Un error clásico es asumir que si el progreso de tareas va acorde al tiempo, el proyecto está sano. Sin embargo, si el presupuesto o los recursos se están agotando más rápido de lo previsto, el proyecto está en riesgo aunque las tareas parezcan "en tiempo".
```

### 3 — Ciclo de Gestión de Desviaciones
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["procesos", "metodologia"]

respuesta: ["Medir el desempeño", "Comparar con la línea base", "Identificar la causa raíz", "Implementar acción correctiva"]
tipo: ordenar
opciones_explicitas: ["Medir el desempeño", "Comparar con la línea base", "Identificar la causa raíz", "Implementar acción correctiva"]

enunciado: "Cuando se detecta una desviación entre lo planificado y lo ejecutado, se debe seguir un orden lógico de resolución de problemas. Ordena los pasos:"

explicacion: |
  Primero se mide lo que está pasando (Medir), luego se compara con el plan original (Comparar), después se busca por qué ocurrió (Causa raíz) y finalmente se actúa (Acción correctiva).
```

### 4 — El concepto de Línea Base
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "avanzado"
  tags: ["planificacion", "baselines"]

variables:
  caso: uno_de([[0, "el cronograma"], [1, "el presupuesto"], [2, "el alcance"]])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][0]
tipo: completar
respuestas_validas: ["el cronograma", "el presupuesto", "el alcance"]

enunciado: "Para poder ejercer un control efectivo, es indispensable contar con una ___ que sirva como punto de referencia para comparar el estado actual contra lo que se había definido originalmente."

explicacion: |
  La línea base (baseline) es la versión aprobada del plan. Sin ella, no hay un estándar contra el cual medir la desviación; no podrías saber si vas tarde o temprano, o si gastaste de más o de menos.
```

### 5 — La Trampa de la Corrección Tardía
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["riesgo", "tiempo"]

variables:
  es_tarde: verdadero

respuesta: es_tarde
tipo: vf

enunciado: "Si el control se realiza únicamente al final de cada fase importante, se está realizando un seguimiento reactivo que impide la corrección temprana de desviaciones. ¿Es esto una práctica de control efectivo?"

explicacion: |
  El control debe ser continuo o periódico. Esperar al final de una fase para detectar un error de presupuesto o tiempo suele significar que la desviación ya es demasiado grande para ser corregida sin afectar el resto del proyecto.
```