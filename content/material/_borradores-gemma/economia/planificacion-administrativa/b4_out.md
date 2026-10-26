### 1 — Planificación vs. Control
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["procesos_administrativos", "gestion"]

respuesta: "control"
tipo: "completar"
respuestas_validas: ["control", "Control"]

enunciado: "Mientras que la planificación establece los objetivos y los medios para alcanzarlos, el proceso de ___ se encarga de verificar que las actividades se realicen conforme a lo planeado."

explicacion: |
  La planificación es la fase de diseño y establecimiento de metas, mientras que el control es la fase de monitoreo y corrección de desviaciones.
```

### 2 — El carácter de la planificación
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: falso
tipo: "vf"

enunciado: "La planificación administrativa se caracteriza por ser un proceso reactivo que solo se inicia una vez que los problemas han ocurrido en la organización."

explicacion: |
  Falso. La planificación es un proceso proactivo y preventivo que busca anticipar situaciones y establecer un curso de acción antes de que los eventos ocurran.
```

### 3 — Elementos de la planificación
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["elementos", "metas"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["establecer un objetivo", "definir el camino"],
    ["determinar una meta", "asignar recursos"]
  ]

respuesta: datos[escenario_idx][1]
tipo: "mc"
opciones_explicitas: [datos[escenario_idx][0], datos[escenario_idx][1], "evaluar resultados", "ejecutar órdenes"]

enunciado: "En el proceso de planificación, una vez que se ha logrado {datos[escenario_idx][0]}, la siguiente etapa lógica es {datos[escenario_idx][1]}."

explicacion: |
  La planificación requiere primero la definición del 'qué' (objetivo) y luego el 'cómo' (estrategia o asignación de recursos).
```

### 4 — Niveles de la planificación
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["jerarquia", "niveles"]

respuesta: ["Planificación Estratégica", "Planificación Táctica", "Planificación Operativa"]
tipo: "ordenar"
opciones_explicitas: ["Planificación Estratégica", "Planificación Táctica", "Planificación Operativa"]

enunciado: "Ordene los niveles de planificación de la organización desde el alcance más global y a largo plazo hasta el más específico y de corto plazo:"

explicacion: |
  La jerarquía administrativa comienza con la Estratégica (toda la empresa/largo plazo), sigue con la Táctica (departamentos/mediano plazo) y finaliza con la Operativa (tareas específicas/corto plazo).
```

### 5 — Diferencia con la Organización
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["procesos_administrativos"]

respuesta: "organizar"
tipo: "completar"
respuestas_validas: ["organizar", "Organizar"]

enunciado: "La planificación determina qué se va a hacer y qué recursos se necesitan; por el contrario, la función de ___ se encarga de distribuir esos recursos y asignar responsabilidades entre los miembros de la empresa."

explicacion: |
  La planificación es el diseño de la acción, mientras que la organización es la estructura que permite ejecutar dicha acción mediante la asignación de tareas y autoridad.
```