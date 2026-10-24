# Resolucion Problemas — Seguimiento y control (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de seguimiento

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["conceptos", "gestion"]

respuesta: "monitoreo"
tipo: completar
respuestas_validas:
  - "monitoreo"
  - "seguimiento"

enunciado: "El proceso de recolectar, analizar y utilizar información para verificar que las actividades del proyecto se estén realizando según lo planificado se denomina ___."

explicacion: |
  El monitoreo (o seguimiento) es la función de recolectar datos sobre el estado actual del proyecto para compararlos con la línea base.
```

### 2 — Diferencia entre seguimiento y control

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["conceptos", "diferenciacion"]

respuesta: verdadero
tipo: vf
enunciado: "Si el proceso de seguimiento detecta una desviación significativa entre lo planificado y lo ejecutado, la acción de implementar medidas correctivas para volver al plan original se denomina 'Control'."

explicacion: |
  Correcto. El seguimiento observa la realidad, mientras que el control actúa sobre ella para corregir desviaciones.
```

### 3 — Elementos del control

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["procesos", "ciclo"]

respuesta: "Acción correctiva"
tipo: mc
opciones_explicitas: ["Acción correctiva", "Continuar monitoreo", "Revisar recolección de datos"]

enunciado: "En un proyecto, se observa que el costo real es un 20% superior al presupuesto planificado para la fase actual. ¿Cuál es la respuesta inmediata del proceso de control?"

explicacion: |
  Cuando se identifica una desviación (costo alto), el control debe ejecutar una acción correctiva para mitigar el impacto.
```

### 4 — Ciclo de gestión de desviaciones

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["secuencia", "metodologia"]

respuesta_orden: ["Identificar", "Analizar", "Actuar"]
tipo: ordenar
opciones_explicitas: ["Identificar", "Analizar", "Actuar"]

enunciado: "Ordene las etapas lógicas del proceso de control cuando se detecta un problema en un proyecto:"

explicacion: |
  Primero se identifica la desviación, luego se analiza la causa raíz y finalmente se actúa para corregirla.
```

### 5 — Indicadores de desempeño

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "avanzado"
  tags: ["indicadores", "KPI"]

respuesta: "retraso"
tipo: mc
opciones_explicitas: ["retraso", "sobrecosto", "falta de calidad"]

enunciado: "Si el seguimiento indica que el cronograma muestra una desviación respecto a la fecha de entrega original, el control debe enfocarse en mitigar un ___."

explicacion: |
  Una desviación en el cronograma se traduce directamente en un retraso en la ejecución del proyecto.
```

### 6 — Desviación en el cronograma

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["cronograma", "desviacion", "control"]

variables:
  desviacion_planificada: 5
  desviacion_real: 8

respuesta: 3
tipo: completar
tolerancia_abs: 0

enunciado: "En un proyecto de software, la tarea 'Desarrollo de API' tenía una duración planificada de {desviacion_planificada} días. Sin embargo, tras el control de seguimiento, se observa que la tarea ha tomado {desviacion_real} días. ¿Cuántos días de desviación (retraso) presenta la tarea respecto a lo planificado?"

pasos:
  - "Identificar la duración planificada."
  - "Identificar la duración real ejecutada."
  - "Calcular la diferencia: Real - Planificada."

explicacion: |
  El control de seguimiento permite identificar la desviación temporal. En este caso: 8 - 5 = 3 días de retraso.
```

### 7 — Acción correctiva inmediata

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["gestion", "acciones", "correctivas"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El presupuesto se ha excedido un 15% debido a costos imprevistos.", "reajustar_presupuesto"], ["El equipo técnico no está alcanzando los hitos semanales de entrega.", "reforzar_equipo"]]

opciones_explicitas: ["reajustar_presupuesto", "reforzar_equipo", "ignorar_desviacion", "esperar_al_final"]

respuesta: escenarios[escenario_idx][1]
tipo: mc

enunciado: "Se realiza un control de seguimiento y se detecta el siguiente problema: {escenarios[escenario_idx][0]}. ¿Cuál es la acción correctiva más adecuada para mantener el control del proyecto?"

explicacion: |
  El seguimiento detecta el problema y el control debe aplicar la acción correctiva específica para la desviación encontrada.
```

### 8 — Veracidad del monitoreo

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["conceptos", "monitoreo"]

respuesta: falso
tipo: vf

enunciado: "Si el proceso de seguimiento y control se realiza únicamente al finalizar todas las fases del proyecto, se garantiza la capacidad de corregir desviaciones a tiempo."

explicacion: |
  Falso. El control debe ser continuo o periódico durante la ejecución para permitir acciones correctivas oportunas. Si se hace solo al final, la desviación ya es un fracaso del proyecto.
```

### 9 — Secuencia de control de gestión

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["procesos", "ciclo_control"]

opciones_explicitas: ["Establecer estándares", "Medir el desempeño real", "Comparar con el plan", "Tomar acciones correctivas"]

respuesta_orden: ["Establecer estándares", "Medir el desempeño real", "Comparar con el plan", "Tomar acciones correctivas"]
tipo: ordenar

enunciado: "Ordene los pasos lógicos para ejecutar un ciclo de control de proyecto efectivo:"

explicacion: |
  El ciclo de control comienza con la definición de la línea base (estándares), sigue con la medición, la comparación para hallar desviaciones y finalmente la acción para corregir.
```

### 10 — Análisis de Variación de Costo (CV)

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "avanzado"
  tags: ["evm", "costos", "variacion"]

variables:
  valor_ganado: 1200
  valor_planificado: 1500

respuestas_validas:
  - "negativo"

respuesta: "negativo"
tipo: completar

enunciado: "En la gestión del valor ganado, si el Valor Ganado (EV) es de ${valor_ganado} y el Valor Planificado (PV) es de ${valor_planificado}, la variación de costo (CV = EV - PV) es _________."

explicacion: |
  Como EV < PV, la variación es de -300, lo cual es un valor negativo, indicando que el proyecto está por encima del presupuesto (sobrecosto).
```

### 11 — Control vs. Seguimiento

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["gestion", "conceptos"]

respuesta: verdadero
tipo: vf
enunciado: "El seguimiento se enfoca en la recolección de datos sobre el progreso, mientras que el control implica la toma de acciones correctivas para volver al plan original. ¿Es esta distinción correcta?"

explicacion: |
  El seguimiento es la fase de observación y medición (ver qué está pasando), mientras que el control es la fase de acción (corregir la desviación). Sin seguimiento no hay datos para controlar, pero el seguimiento por sí solo no garantiza que el proyecto vuelva al camino trazado.
```

### 12 — El error de la "Falsa Sensación de Progreso"

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["errores_comunes", "desviaciones"]

variables:
  datos: [[1, "se completó el 50% de las tareas"], [2, "se consumió el 50% del presupuesto"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["se completó el 50% de las tareas", "se consumió el 50% del presupuesto", "se ha alcanzado el hito principal", "no hay desviación detectada"]

enunciado: "Un gerente observa un reporte que indica que {datos[idx][0]}, en línea con el tiempo transcurrido, pero nota una desviación crítica en el recurso principal. ¿Cuál es el error más común al interpretar este reporte?"

pasos:
  - "Identificar la métrica que está mostrando el avance."
  - "Comparar la métrica de progreso con la métrica de recursos/costos."
  - "Detectar si la métrica de progreso oculta una desviación en otra variable."

explicacion: |
  Un error clásico es asumir que si el progreso de tareas va acorde al tiempo, el proyecto está sano. Sin embargo, si el presupuesto o los recursos se están agotando más rápido de lo previsto, el proyecto está en riesgo aunque las tareas parezcan "en tiempo".
```

### 13 — Ciclo de Gestión de Desviaciones

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["procesos", "metodologia"]

respuesta_orden: ["Medir el desempeño", "Comparar con la línea base", "Identificar la causa raíz", "Implementar acción correctiva"]
tipo: ordenar
opciones_explicitas: ["Medir el desempeño", "Comparar con la línea base", "Identificar la causa raíz", "Implementar acción correctiva"]

enunciado: "Cuando se detecta una desviación entre lo planificado y lo ejecutado, se debe seguir un orden lógico de resolución de problemas. Ordena los pasos:"

explicacion: |
  Primero se mide lo que está pasando (Medir), luego se compara con el plan original (Comparar), después se busca por qué ocurrió (Causa raíz) y finalmente se actúa (Acción correctiva).
```

### 14 — El concepto de Línea Base

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "avanzado"
  tags: ["planificacion", "baselines"]

variables:
  datos: [[0, "el cronograma"], [1, "el presupuesto"], [2, "el alcance"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "el cronograma"
  - "el presupuesto"
  - "el alcance"

enunciado: "Para poder ejercer un control efectivo, es indispensable contar con una ___ que sirva como punto de referencia para comparar el estado actual contra lo que se había definido originalmente."

explicacion: |
  La línea base (baseline) es la versión aprobada del plan. Sin ella, no hay un estándar contra el cual medir la desviación; no podrías saber si vas tarde o temprano, o si gastaste de más o de menos.
```

### 15 — La Trampa de la Corrección Tardía

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["riesgo", "tiempo"]

respuesta: falso
tipo: vf
enunciado: "Si el control se realiza únicamente al final de cada fase importante, se está realizando un seguimiento reactivo que impide la corrección temprana de desviaciones. ¿Es esto una práctica de control efectivo?"

explicacion: |
  El control debe ser continuo o periódico. Esperar al final de una fase para detectar un error de presupuesto o tiempo suele significar que la desviación ya es demasiado grande para ser corregida sin afectar el resto del proyecto.
```

### 16 — Seguimiento vs. Control

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["gestion", "planificacion"]

respuesta: verdadero
tipo: vf

enunciado: "El seguimiento se centra en la recolección de datos sobre el estado actual, mientras que el control implica la toma de decisiones para corregir desviaciones. Si el objetivo es evitar que un error ocurra antes de que suceda, estamos ante un enfoque de control preventivo. ¿Es correcta esta afirmación?"

explicacion: |
  El seguimiento es la fase de observación y medición, mientras que el control es la acción correctiva. El control preventivo actúa sobre los riesgos antes de que se conviertan en problemas reales.
```

### 17 — La esencia del Seguimiento

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "comparar"
tipo: completar
respuestas_validas:
  - "comparar"

enunciado: "La función principal del seguimiento en un proyecto es ___ el desempeño real con el desempeño planificado para identificar desviaciones."

explicacion: |
  El seguimiento no solo observa, sino que debe contrastar lo que está sucediendo contra la línea base establecida en la planificación.
```

### 18 — Diferencia en la gestión de desviaciones

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["desviaciones"]

variables:
  escenario: uno_de([["se detecta un retraso en la entrega de materiales", "reprogramar tareas"], ["el presupuesto se excede un 5%", "ajustar costos"], ["la calidad es inferior a la requerida", "reprocesar el producto"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["reprogramar tareas", "ajustar costos", "reprocesar el producto"]

enunciado: "En el siguiente escenario de control: '{escenario[0]}', la acción correctiva inmediata más adecuada es: ___"

explicacion: |
  El control requiere una acción específica que mitigue la desviación detectada en el seguimiento. En este caso, el problema es de presupuesto, por lo que se deben ajustar costos.
```

### 19 — Ciclo de mejora continua

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["ciclo_phva"]

respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: ordenar
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Para que el seguimiento y control sean efectivos, deben integrarse en un ciclo de mejora continua. Ordene las etapas del Ciclo PDCA (Deming) en su secuencia lógica de ejecución:"

explicacion: |
  El ciclo comienza con la planificación (Plan), sigue con la ejecución (Do), continúa con el seguimiento/verificación (Check) y finaliza con la acción correctiva (Act).
```

### 20 — El rol de la línea base

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "avanzado"
  tags: ["linea_base"]

respuesta: verdadero
tipo: vf
enunciado: "Para poder ejercer el control de un proyecto, es indispensable contar con una 'Línea Base' (plan original). Sin un punto de referencia, el seguimiento no puede determinar si existe una desviación. ¿Es esto verdadero o falso?"

explicacion: |
  Sin una línea base (alcance, tiempo y costo), el seguimiento solo nos daría datos aislados, pero no nos permitiría saber si estamos cumpliendo o no con lo prometido.
```

### 21 — Desviación de cronograma

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["cronograma", "desviacion", "gestion"]

variables:
  datos: [["Planificado: 10 días, Real: 12 días", "retraso"], ["Planificado: 15 días, Real: 15 días", "en_tiempo"], ["Planificado: 20 días, Real: 18 días", "adelanto"]]
  idx: uno_de([0, 1, 2])

enunciado: "En la fase de ejecución, se observa la siguiente situación: {datos[idx][0]}. El estado actual del proyecto es: ___."

respuestas_validas:
  - "retraso"
  - "en_tiempo"
  - "adelanto"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El seguimiento consiste en comparar el progreso real contra la línea base planificada para identificar desviaciones.
```

### 22 — Acción correctiva inmediata

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["acciones", "control"]

enunciado: "Si durante el control de calidad se detecta que el costo de los materiales ha superado el presupuesto en un 15%, ¿cuál es la acción de control adecuada?"

opciones_explicitas: ["Aceptar el sobrecosto sin intervenir", "Rediseñar procesos para optimizar recursos", "Suspender el proyecto indefinidamente", "Aumentar el presupuesto sin investigar la causa"]
respuesta: "Rediseñar procesos para optimizar recursos"
tipo: mc

explicacion: |
  El control no solo implica detectar el error, sino implementar acciones correctivas para realinear el proyecto con los objetivos.
```

### 23 — Veracidad del control preventivo

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["prevencion", "verdadero_falso"]

enunciado: "El seguimiento y control debe realizarse únicamente al finalizar todas las fases del proyecto para asegurar que el resultado sea el esperado."

respuesta: falso
tipo: vf

explicacion: |
  El control debe ser continuo y preventivo. Esperar al final del proyecto para controlar impide realizar correcciones a tiempo, aumentando el riesgo de fracaso.
```

### 24 — Secuencia de gestión de desviaciones

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "avanzado"
  tags: ["procesos", "metodologia"]

enunciado: "Ordene los pasos lógicos que debe seguir un gestor de proyectos al detectar una desviación significativa en el alcance:"

opciones_explicitas: ["Identificar la causa raíz de la desviación", "Evaluar el impacto de la desviación en el cronograma y costo", "Implementar la acción correctiva necesaria", "Documentar la desviación y el cierre de la acción"]
respuesta_orden: ["Identificar la causa raíz de la desviación", "Evaluar el impacto de la desviación en el cronograma y costo", "Implementar la acción correctiva necesaria", "Documentar la desviación y el cierre de la acción"]
tipo: ordenar

explicacion: |
  Un control efectivo requiere un análisis sistemático: primero entender por qué ocurrió, luego ver cuánto afecta, actuar y finalmente registrar para evitar repeticiones.
```

### 25 — Cálculo de variación de presupuesto

```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["presupuesto", "calculo"]

variables:
  datos: [["Presupuesto: $1000, Real: $1200", 20.0], ["Presupuesto: $500, Real: $450", -10.0], ["Presupuesto: $2000, Real: $2000", 0.0]]
  idx: uno_de([0, 1, 2])

enunciado: "Se ha realizado el seguimiento financiero. Los datos son: {datos[idx][0]}. El porcentaje de variación presupuestaria es de: ___%."

respuestas_validas:
  - "20.0"
  - "-10.0"
  - "0.0"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La variación se calcula como ((Real - Planificado) / Planificado) * 100. Un valor positivo indica sobrecosto y uno negativo ahorro.
```
