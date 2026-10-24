### 1 — El error de la suma simple
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["planificacion", "error_comun"]

variables:
  escenario: uno_de([
    ["Tarea A: 5h, Tarea B: 3h", 8],
    ["Tarea A: 10h, Tarea B: 4h", 14],
    ["Tarea A: 2h, Tarea B: 7h", 9]
  ])

enunciado: "Si un gestor de proyectos asigna recursos basándose únicamente en la suma de las duraciones estimadas de cada tarea ({escenario[0]}) para calcular el tiempo total del proyecto, ¿está ignorando la posibilidad de tareas paralelas?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: "vf"

explicacion: |
  Sumar las duraciones de las tareas (sumar tiempos) solo es válido si las tareas se ejecutan de forma estrictamente secuencial. Si existen dependencias o tareas que pueden ejecutarse al mismo tiempo, el tiempo total del proyecto (ruta crítica) será menor a la suma de las partes.
```

### 2 — La trampa de la capacidad nominal
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["capacidad", "eficiencia"]

variables:
  capacidad_total: 40
  horas_trabajadas: 40
  eficiencia: 0.8

enunciado: "Un equipo tiene una capacidad teórica de {capacidad_total} horas semanales. Si se asignan tareas que suman {horas_trabajadas} horas, pero la eficiencia real del equipo es de {eficiencia} (80%), ¿cuál es el error conceptual al asumir que el proyecto se completará en una semana?"

opciones_explicitas: [
  "No hay error, la capacidad es la misma.",
  "Se ha subestimado la carga de trabajo real.",
  "Se ha sobreestimado la capacidad real del equipo.",
  "El error es no considerar los días festivos."
]
respuesta: "Se ha sobreestimado la capacidad real del equipo."
tipo: "mc"

explicacion: |
  Asignar el 100% de la capacidad teórica sin considerar la eficiencia (curva de aprendizaje, fatiga, reuniones) es un error de planificación. En este caso, la capacidad real es de 32 horas (40 * 0.8), por lo que 40 horas de trabajo requerirán más de una semana.
```

### 3 — Secuencia de asignación de materiales
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["logistica", "dependencias"]

enunciado: "Para asegurar que el flujo de materiales no interrumpa el cronograma, ordena los pasos lógicos de la gestión de recursos:"

opciones_explicitas: [
  "Identificar necesidades de materiales",
  "Establecer fechas de entrega de proveedores",
  "Verificar stock disponible",
  "Asignar materiales a tareas específicas"
]
respuesta: ["Identificar necesidades de materiales", "Verificar stock disponible", "Establecer fechas de entrega de proveedores", "Asignar materiales a tareas específicas"]
tipo: "ordenar"

explicacion: |
  La asignación correcta requiere primero saber qué se necesita, luego verificar si se tiene, después asegurar el suministro externo y finalmente vincular el recurso a la tarea en el cronograma.
```

### 4 — El mito del recurso infinito
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "avanzado"
  tags: ["sobreasignacion", "costos"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [
    ["Aumentar el personal para terminar antes", "Aumentar el costo y reducir eficiencia"],
    ["Asignar más presupuesto a materiales", "Aumentar el riesgo de desperdicio"],
    ["Duplicar la jornada laboral", "Aumentar el error humano y fatiga"]
  ]

enunciado: "Al intentar resolver un retraso mediante la 'compresión de cronograma' (crashing), se suele cometer el error de pensar que añadir más personas siempre reduce el tiempo. Según el escenario {datos[idx][0]}, la consecuencia real es: ___."

respuestas_validas: ["Aumentar el costo y reducir eficiencia", "Aumentar el riesgo de desperdicio", "Aumentar el error humano y fatiga"]
respuesta: {datos[idx][1]}
tipo: "completar"

explicacion: |
  La Ley de Brooks establece que 'añadir personal a un proyecto de software retrasado lo hace más lento'. En general, la sobreasignación de recursos introduce costos de comunicación y coordinación que pueden anular la ganancia de tiempo.
```

### 5 — Dependencia de recursos compartidos
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["conflictos", "recursos"]

variables:
  recurso_critico: "Grúa"

enunciado: "Si la Tarea A y la Tarea B requieren el mismo {recurso_critico} simultáneamente para cumplir sus plazos, pero solo existe una unidad disponible, la asignación de recursos es:"

opciones_explicitas: ["Factible", "Conflictiva"]
respuesta: "Conflictiva"
tipo: "mc"

explicacion: |
  Este es un conflicto de recursos. Cuando dos tareas compiten por un recurso limitado en el mismo intervalo de tiempo, se debe realizar una nivelación de recursos (resource leveling), lo que generalmente implica extender la duración del proyecto.
```