### 1 — El Hito del Prototipo
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["gestion", "hitos", "proyecto"]

variables:
  escenario: uno_de([
    ["Diseño de App", "Lanzamiento Beta"],
    ["Construcción de Casa", "Entrega de Llaves"],
    ["Campaña de Marketing", "Reporte de Resultados"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "En un proyecto de {escenario[idx][0]}, el punto de control que marca el fin de una fase crítica y permite validar el progreso es el/la ___."

respuestas_validas: ["{escenario[idx][1]}"]
respuesta: "{escenario[idx][1]}"
tipo: completar

explicacion: |
  Un hito es un evento significativo en el cronograma que no tiene duración, sino que marca el fin de una etapa o un punto de control importante.
```

### 2 — Diferencia entre Tarea e Hito
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

### 3 — Secuencia de un Proyecto
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["orden", "secuencia"]

variables:
  secuencia: [
    ["Definición de requisitos", "Diseño de arquitectura", "Desarrollo de código", "Pruebas de usuario"],
    ["Compra de materiales", "Cimentación", "Levantado de paredes", "Techado"]
  ]
  idx: uno_de([0, 1])

enunciado: "Ordene las fases de un proyecto de {secuencia[idx][0]} según el orden lógico de ejecución:"

opciones_explicitas: ["Definición de requisitos", "Diseño de arquitectura", "Desarrollo de código", "Pruebas de usuario"]
respuesta: ["Definición de requisitos", "Diseño de arquitectura", "Desarrollo de código", "Pruebas de usuario"]
tipo: ordenar

explicacion: |
  La planificación requiere seguir un orden lógico donde cada etapa es el insumo de la siguiente para evitar retrabajos.
```

### 4 — Identificación de Hitos
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["identificacion", "mc"]

variables:
  escenario: uno_de([
    ["Finalización de cimientos", "Aprobación de presupuesto", "Firma de contrato"],
    ["Entrega de prototipo funcional", "Aprobación de diseño", "Cierre de fase de investigación"]
  ])
  idx: uno_de([0, 1])

enunciado: "En el contexto de {escenario[idx][0]}, ¿cuál de los siguientes elementos se clasifica correctamente como un HITO?"

opciones_explicitas: ["Realizar la tarea", "Hito alcanzado", "Tarea pendiente"]
respuesta: "Hito alcanzado"
tipo: mc

explicacion: |
  Un hito es un estado alcanzado (ej. 'Aprobado', 'Finalizado'), no una acción continua como 'Realizar'.
```

### 5 — Impacto de un Hito en el Cronograma
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "avanzado"
  tags: ["gestion_riesgos", "impacto"]

variables:
  caso: uno_de([
    ["El hito de 'Aprobación de diseño' se retrasa 2 semanas", "El hito de 'Pruebas de calidad' se retrasa 1 semana"],
    ["El hito de 'Compra de insumos' se retrasa 3 días", "El hito de 'Instalación de software' se retrasa 2 días"]
  ])
  idx: uno_de([0, 1])

enunciado: "Si en el escenario '{caso[idx][0]}' el hito se retrasa, ¿qué sucede con las tareas dependientes que siguen en el cronograma?"

opciones_explicitas: ["Se mantienen igual", "Se retrasan proporcionalmente", "Se cancelan automáticamente"]
respuesta: "Se retrasan proporcionalmente"
tipo: mc

explicacion: |
  En la gestión de proyectos, los hitos suelen actuar como puntos de dependencia; si un hito se desplaza, las tareas sucesoras que dependen de él también sufren un retraso.
```