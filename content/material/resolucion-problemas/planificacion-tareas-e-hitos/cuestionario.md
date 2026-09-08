# Resolucion Problemas — Planificacion tareas e hitos (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Hitos vs Tareas

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["conceptos", "vocabulario"]

respuesta: "hitos"
tipo: completar
respuestas_validas:
  - "hitos"

enunciado: "Mientras que las tareas son actividades que consumen tiempo y recursos, los ___ son puntos de control específicos que marcan la finalización de una fase importante."

explicacion: |
  Los hitos (milestones) no tienen duración propia; representan un momento en el tiempo que valida el progreso de un proyecto.
```

### 2 — Duración de un Hito

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Un hito en la gestión de proyectos se define como una actividad que requiere una duración de al menos 24 horas para completarse."

explicacion: |
  Falso. Los hitos son eventos de duración cero; son puntos de referencia, no tareas con duración.
```

### 3 — Orden de la Planificación

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["secuencia"]

respuesta_orden: ["Definir objetivos", "Listar tareas", "Asignar recursos", "Establecer hitos"]
tipo: ordenar
opciones_explicitas: ["Definir objetivos", "Listar tareas", "Asignar recursos", "Establecer hitos"]

enunciado: "Ordena cronológicamente los pasos lógicos para iniciar la planificación de un proyecto:"

explicacion: |
  Primero se debe saber qué se quiere lograr (objetivos), luego qué hay que hacer (tareas), con qué se hará (recursos) y finalmente qué puntos de control marcarán el éxito (hitos).
```

### 4 — Característica de las Tareas

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["vocabulario"]

tipo: mc
respuesta: "C) Una unidad de trabajo con inicio y fin definidos"
opciones_explicitas: ["A) Un punto de control sin duración", "B) El resultado final de un proyecto", "C) Una unidad de trabajo con inicio y fin definidos"]

enunciado: "¿Cuál de las siguientes opciones describe mejor una 'tarea' en un cronograma?"

explicacion: |
  Una tarea es una acción concreta que requiere un esfuerzo y un tiempo determinado para ser ejecutada.
```

### 5 — Relación entre Tareas e Hitos

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["logica"]

variables:
  idx: uno_de([0, 1])
  escenario: [["La tarea 'Diseño de plano' termina, marcando el hito 'Aprobación de diseño'.", "Aprobación de diseño"], ["La tarea 'Instalación eléctrica' termina, marcando el hito 'Red eléctrica lista'.", "Red eléctrica lista"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Aprobación de diseño", "Red eléctrica lista", "Ninguna de las anteriores"]

enunciado: "En el escenario seleccionado, ¿cuál es el hito resultante de la finalización de la tarea mencionada?"

explicacion: |
  Los hitos suelen ser el resultado natural de haber completado un conjunto de tareas críticas.
```

### 6 — Identificación de Hitos

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["gestion_proyectos", "hitos"]

enunciado: "En el proyecto de Diseño de App, un hito es un evento que marca un punto de control significativo, no una tarea continua. ¿Cuál de los siguientes elementos del escenario es un hito?"

opciones_explicitas: ["Diseño de App", "Desarrollo de MVP", "Lanzamiento"]

respuesta: "Lanzamiento"
tipo: mc

explicacion: |
  Un hito es un punto de referencia en el tiempo que indica la finalización de una fase importante o la consecución de un objetivo clave. En este caso, el 'Lanzamiento' marca el fin del ciclo de desarrollo.
```

### 7 — Diferencia entre Tarea e Hito

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: falso
tipo: vf

enunciado: "En la gestión de proyectos, una 'tarea' y un 'hito' son términos sinónimos que representan la misma unidad de trabajo."

explicacion: |
  Falso. Una tarea es una acción que consume tiempo y recursos para ser completada, mientras que un hito es un punto en el tiempo que marca un evento importante y tiene duración cero.
```

### 8 — Secuencia de Hitos en Construcción

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["ordenamiento", "secuencia"]

variables:
  escenario_idx: uno_de([0, 1])
  secuencias: [["Cimientos", "Estructura", "Techo", "Entrega"], ["Investigación", "Diseño", "Producción", "Distribución"]]

opciones_explicitas: secuencias[escenario_idx]

respuesta_orden: secuencias[escenario_idx]
tipo: ordenar

enunciado: "Ordene las fases del proyecto según su secuencia lógica y cronológica:"

explicacion: |
  La planificación requiere un orden lógico y cronológico. Los hitos deben seguir la secuencia natural de la ejecución del proyecto para asegurar que cada fase se complete antes de iniciar la siguiente.
```

### 9 — Completar la Definición

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["terminologia"]

variables:
  ejemplo_idx: uno_de([0, 1])
  palabras: [["final", "final"], ["cierre", "cierre"]]

enunciado: "En un cronograma, si una tarea es 'Escribir código', el hito correspondiente al finalizar esa actividad sería el ___ de la fase de desarrollo."

respuestas_validas:
  - "final"
  - "cierre"

respuesta: palabras[ejemplo_idx][0]
tipo: completar

explicacion: |
  Los hitos suelen marcar el 'final' o el 'cierre' de un conjunto de tareas que conforman una etapa del proyecto.
```

### 10 — Cálculo de Duración y Hitos

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["calculo", "cronograma"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [[10, 5, 3], [15, 10, 4]]
  duracion_a: casos[caso_idx][0]
  duracion_b: casos[caso_idx][1]
  duracion_c: casos[caso_idx][2]
  respuesta_correcta: duracion_a + duracion_b + duracion_c

enunciado: "Un proyecto tiene tres tareas consecutivas. La Tarea A dura {duracion_a} días, la Tarea B dura {duracion_b} días y la Tarea C dura {duracion_c} días. Si el primer hito se marca al terminar la Tarea A y el segundo al terminar la Tarea C, ¿en qué día total del proyecto se alcanza el segundo hito?"

respuesta: respuesta_correcta
tipo: completar
tolerancia_abs: 0

explicacion: |
  Para encontrar el momento de un hito que marca el fin de una secuencia de tareas, se debe sumar la duración de todas las tareas que lo preceden. En este caso: Tarea A + Tarea B + Tarea C.
```

### 11 — Tarea vs Hito

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["conceptos_basicos", "planificacion"]

respuesta: "hito"
tipo: completar
respuestas_validas:
  - "hito"

enunciado: "En la gestión de proyectos, una actividad que requiere esfuerzo y tiempo para ser completada se denomina tarea, mientras que un punto de control que marca un evento significativo o la finalización de una fase se denomina ___."

explicacion: |
  Las tareas son acciones con duración (ej. "Escribir el código"), mientras que los hitos son puntos en el tiempo sin duración propia que marcan progreso (ej. "Diseño aprobado").
```

### 12 — Duración de los hitos

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que un hito debe tener una duración asignada en el cronograma para poder ser medido?"

explicacion: |
  Falso. Por definición, un hito es un evento instantáneo (duración cero) que sirve para marcar el fin de una etapa o un logro importante.
```

### 13 — Identificación de errores en cronogramas

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["gestion_de_errores", "cronograma"]

variables:
  escenario: uno_de([["El hito 'Entrega de prototipo' tiene una duración de 5 días.", "Escenario A: El hito 'Entrega de prototipo' tiene una duración de 5 días."], ["El hito 'Aprobación de presupuesto' es una tarea de 2 horas.", "Escenario B: El hito 'Aprobación de presupuesto' es una tarea de 2 horas."]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Escenario A: El hito 'Entrega de prototipo' tiene una duración de 5 días.", "Escenario B: El hito 'Aprobación de presupuesto' es una tarea de 2 horas."]

enunciado: "Analiza el escenario seleccionado: {escenario[0]}. ¿Cuál es el error de planificación cometido?"

explicacion: |
  Los hitos representan momentos en el tiempo, no procesos. Si tienen duración, se están tratando erróneamente como tareas en lugar de puntos de control.
```

### 14 — Secuencia lógica de proyecto

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["secuencia", "logica"]

respuesta_orden: ["Definir requerimientos", "Diseño de arquitectura", "Desarrollo de módulos", "Pruebas de integración", "Lanzamiento del producto"]
tipo: ordenar
opciones_explicitas: ["Definir requerimientos", "Diseño de arquitectura", "Desarrollo de módulos", "Pruebas de integración", "Lanzamiento del producto"]

enunciado: "Ordena las siguientes fases de un proyecto de software de forma lógica, desde la concepción hasta la entrega final:"

explicacion: |
  La planificación requiere una secuencia lógica donde los hitos (como el lanzamiento) ocurren solo después de haber completado las tareas de desarrollo y pruebas.
```

### 15 — Relación entre tareas e hitos

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "avanzado"
  tags: ["relaciones", "dependencias"]

tipo: mc
opciones_explicitas: ["La tarea es un subconjunto de un hito.", "El hito es el resultado de la finalización de una o más tareas.", "Un hito siempre contiene múltiples tareas dentro de sí mismo.", "Las tareas y los hitos son conceptos intercambiables."]

enunciado: "¿Cuál de las siguientes afirmaciones describe correctamente la relación entre tareas e hitos?"

respuesta: "El hito es el resultado de la finalización de una o más tareas."

explicacion: |
  Un hito actúa como un marcador de posición que se alcanza cuando las tareas que lo preceden han sido completadas con éxito.
```

### 16 — Hitos vs Tareas

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["gestion_proyectos", "conceptos_base"]

respuesta: "hitos"
tipo: "mc"
opciones_explicitas: ["tareas", "hitos", "recursos", "riesgos"]

enunciado: "Mientras que las tareas son acciones que consumen tiempo y esfuerzo para avanzar en un proyecto, los ___ son puntos de control que marcan la finalización de un entregable o una fase importante."

explicacion: |
  Las tareas tienen una duración (comienzo y fin), mientras que los hitos representan un momento específico en el tiempo (duración cero) que indica un logro significativo.
```

### 17 — Duración de actividades

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["planificacion", "tiempo"]

respuesta: falso
tipo: "vf"

enunciado: "En un cronograma de proyecto, un hito se define técnicamente como una actividad con una duración establecida de al menos 24 horas."

explicacion: |
  Falso. Por definición, un hito es un evento sin duración (duración = 0) que sirve para marcar un progreso, no es una tarea de trabajo.
```

### 18 — Secuencia de planificación

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["flujo_trabajo", "secuencia"]

variables:
  escenarios: [["Definir requisitos", "Diseño de arquitectura", "Desarrollo de código", "Hito: Prototipo aprobado"], ["Compra de materiales", "Preparación de terreno", "Construcción de cimientos", "Hito: Estructura completada"]]
  escenario: uno_de(escenarios)

tipo: ordenar
opciones_explicitas: [escenario[0], escenario[1], escenario[2], escenario[3]]
respuesta_orden: [escenario[0], escenario[1], escenario[2], escenario[3]]

enunciado: "Ordena cronológicamente la secuencia de planificación para el escenario seleccionado: {escenario[0]} -> {escenario[1]} -> {escenario[2]} -> {escenario[3]}"

pasos:
  - "Identifica la secuencia lógica de tareas que conduce al hito."

explicacion: |
  Un proyecto se organiza mediante una secuencia lógica de tareas que culminan en un hito, el cual valida que la fase anterior ha concluido con éxito.
```

### 19 — Identificación de hitos

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["analisis", "gestion"]

respuesta: "Hito: Sistema operativo listo"
tipo: "completar"
respuestas_validas:
  - "Hito: Sistema operativo listo"

enunciado: "Analiza el primer caso: La acción es 'Instalar software'. El evento de control resultante es: ___"

explicacion: |
  El hito es la culminación o el resultado del conjunto de tareas; en este caso, la disponibilidad del sistema operativo.
```

### 20 — Diferencia estructural

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "avanzado"
  tags: ["metodologia", "control"]

respuesta: "un hito no tiene duración"
tipo: "completar"
respuestas_validas:
  - "un hito no tiene duración"
  - "una tarea tiene duración"

enunciado: "La diferencia fundamental en la gestión de tiempos es que una tarea implica un proceso de ejecución, mientras que ___."

explicacion: |
  La distinción clave es la dimensión temporal: las tareas ocupan un intervalo de tiempo, los hitos son puntos de referencia instantáneos.
```

### 21 — El Hito del Prototipo

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["gestion", "hitos", "proyecto"]

variables:
  escenario: uno_de([["Diseño de App", "Lanzamiento Beta"], ["Construcción de Casa", "Entrega de Llaves"], ["Campaña de Marketing", "Reporte de Resultados"]])

enunciado: "En un proyecto de {escenario[0]}, el punto de control que marca el fin de una fase crítica y permite validar el progreso es el/la ___."

respuesta: escenario[1]
tipo: completar

explicacion: |
  Un hito es un evento significativo en el cronograma que no tiene duración, sino que marca el fin de una etapa o un punto de control importante.
```

### 22 — Diferencia entre Tarea e Hito

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["conceptos", "diferencias"]

enunciado: "¿Es correcto afirmar que una 'Tarea' tiene una duración temporal (inicio y fin) mientras que un 'Hito' es un evento puntual sin duración?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. Las tareas consumen tiempo y recursos, mientras que los hitos son puntos de referencia en el tiempo para medir el avance.
```

### 23 — Secuencia de un Proyecto

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["orden", "secuencia"]

variables:
  proyectos: [["software", ["Definición de requisitos", "Diseño de arquitectura", "Desarrollo de código", "Pruebas de usuario"]], ["construcción", ["Compra de materiales", "Cimentación", "Levantado de paredes", "Techado"]]]
  idx: uno_de([0, 1])

enunciado: "Ordene las fases de un proyecto de {proyectos[idx][0]} según el orden lógico de ejecución:"

opciones_explicitas: proyectos[idx][1]
respuesta_orden: proyectos[idx][1]
tipo: ordenar

explicacion: |
  La planificación requiere seguir un orden lógico donde cada etapa es el insumo de la siguiente para evitar retrabajos.
```

### 24 — Identificación de Hitos

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["identificacion", "mc"]

variables:
  escenario: uno_de([["Finalización de cimientos", "Aprobación de presupuesto", "Firma de contrato"], ["Entrega de prototipo funcional", "Aprobación de diseño", "Cierre de fase de investigación"]])

enunciado: "En el contexto de {escenario[0]}, ¿cuál de los siguientes elementos se clasifica correctamente como un HITO?"

opciones_explicitas: ["Realizar la tarea", "Hito alcanzado", "Tarea pendiente"]
respuesta: "Hito alcanzado"
tipo: mc

explicacion: |
  Un hito es un estado alcanzado (ej. 'Aprobado', 'Finalizado'), no una acción continua como 'Realizar'.
```

### 25 — Impacto de un Hito en el Cronograma

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "avanzado"
  tags: ["gestion_riesgos", "impacto"]

variables:
  idx: uno_de([0, 1, 2, 3])
  textos: ["El hito de 'Aprobación de diseño' se retrasa 2 semanas", "El hito de 'Pruebas de calidad' se retrasa 1 semana", "El hito de 'Compra de insumos' se retrasa 3 días", "El hito de 'Instalación de software' se retrasa 2 días"]

enunciado: "Si en el escenario '{textos[idx]}' el hito se retrasa, ¿qué sucede con las tareas dependientes que siguen en el cronograma?"

opciones_explicitas: ["Se mantienen igual", "Se retrasan proporcionalmente", "Se cancelan automáticamente"]
respuesta: "Se retrasan proporcionalmente"
tipo: mc

explicacion: |
  En la gestión de proyectos, los hitos suelen actuar como puntos de dependencia; si un hito se desplaza, las tareas sucesoras que dependen de él también sufren un retraso.
```
