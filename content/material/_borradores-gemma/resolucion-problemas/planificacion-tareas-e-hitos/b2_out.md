### 1 — Identificación de Hitos
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["gestion_proyectos", "hitos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[["Diseño de App", "Desarrollo de MVP", "Lanzamiento"], ["Construcción de Casa", "Cimientos", "Techo", "Entrega"]], [["Campaña Marketing", "Diseño de piezas", "Publicación", "Reporte final"], ["Lanzamiento Producto", "Investigación", "Producción", "Distribución"]]]

enunciado: "En el proyecto de {escenarios[escenario_idx][0]}, un hito es un evento que marca un punto de control significativo, no una tarea continua. ¿Cuál de los siguientes elementos del escenario es un hito?"

opciones_explicitas: ["Diseño de App", "Desarrollo de MVP", "Lanzamiento"]

respuesta: escenarios[escenario_idx][2]
tipo: mc

explicacion: |
  Un hito es un punto de referencia en el tiempo que indica la finalización de una fase importante o la consecución de un objetivo clave. En este caso, el 'Lanzamiento' marca el fin del ciclo de desarrollo.
```

### 2 — Diferencia entre Tarea e Hito
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

### 3 — Secuencia de Hitos en Construcción
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["ordenamiento", "secuencia"]

variables:
  escenario_idx: uno_de([0, 1])
  secuencias: [
    [["Cimientos", "Estructura", "Techo", "Entrega"], ["Estructura", "Cimientos", "Entrega", "Techo"]],
    [["Investigación", "Diseño", "Producción", "Distribución"], ["Producción", "Diseño", "Distribución", "Investigación"]]
  ]

opciones_explicitas: ["Cimientos", "Estructura", "Techo", "Entrega", "Investigación", "Diseño", "Producción", "Distribución"]

respuesta: secuencias[escenario_idx][0]
tipo: ordenar

explicacion: |
  La planificación requiere un orden lógico y cronológico. Los hitos deben seguir la secuencia natural de la ejecución del proyecto para asegurar que cada fase se complete antes de iniciar la siguiente.
```

### 4 — Completar la Definición
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["terminologia"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["El hito es el ___ de la fase de diseño.", "El hito es el ___ de la fase de diseño."], ["El hito es el ___ de la fase de diseño.", "El hito es el ___ de la fase de diseño."]]
  palabras: [["final", "final"], ["cierre", "cierre"]]

enunciado: "En un cronograma, si una tarea es 'Escribir código', el hito correspondiente al finalizar esa actividad sería el ___ de la fase de desarrollo."

respuestas_validas: ["final", "cierre"]

respuesta: palabras[ejemplo_idx][0]
tipo: completar

explicacion: |
  Los hitos suelen marcar el 'final' o el 'cierre' de un conjunto de tareas que conforman una etapa del proyecto.
```

### 5 — Cálculo de Duración y Hitos
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["calculo", "cronograma"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [[10, 5, 3], [15, 10, 4]]

enunciado: "Un proyecto tiene tres tareas consecutivas. La Tarea A dura {casos[caso_idx][0]} días, la Tarea B dura {casos[caso_idx][1]} días y la Tarea C dura {casos[caso_idx][2]} días. Si el primer hito se marca al terminar la Tarea A y el segundo al terminar la Tarea C, ¿en qué día total del proyecto se alcanza el segundo hito?"

respuesta: sumar(casos[caso_idx][0], sumar(casos[caso_idx][1], casos[caso_idx][2]))
tipo: input
tolerancia_abs: 0

explicacion: |
  Para encontrar el momento de un hito que marca el fin de una secuencia de tareas, se debe sumar la duración de todas las tareas que lo preceden. En este caso: Tarea A + Tarea B + Tarea C.
```