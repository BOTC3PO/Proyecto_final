### 1 — Optimización de recursos en producción
```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["gestion", "recursos", "productividad"]

variables:
  escenario: uno_de([
    ["La empresa A tiene 10 operarios y cada uno produce 5 unidades/hora.", "50"],
    ["La empresa B tiene 12 operarios y cada uno produce 4 unidades/hora.", "48"],
    ["La empresa C tiene 8 operarios y cada uno produce 6 unidades/hora.", "48"]
  ])
  idx: uno_de([0, 1, 2])
  valor_total: escenario[idx][0]
  resultado_esperado: escenario[idx][1]

tipo: input
tolerancia_abs: 0

enunciado: "Si una empresa cuenta con {escenario[idx][0]}, ¿cuál es la capacidad de producción total de unidades por hora?"

explicacion: |
  La capacidad total se calcula multiplicando el número de operarios por la productividad individual de cada uno.
```

### 2 — Decisiones de contratación
```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["costos", "decision"]

variables:
  caso: uno_de([
    ["El costo de contratar un nuevo empleado es de $500 y el aumento en ingresos es de $600.", "verdadero"],
    ["El costo de contratar un nuevo empleado es de $700 y el aumento en ingresos es de $650.", "falso"]
  ])
  idx: uno_de([0, 1])

tipo: vf

enunciado: "Si el costo marginal de contratar a un nuevo trabajador es menor al ingreso marginal que este genera, la decisión de contratar es rentable. En el escenario actual: {caso[idx][0]}"

explicacion: |
  En economía, una acción es rentable si el beneficio marginal es mayor al costo marginal.
```

### 3 — Flujo de trabajo en una línea de montaje
```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

tipo: ordenar

opciones_explicitas: ["Planificación de tareas", "Asignación de recursos", "Ejecución del trabajo", "Control de calidad"]
respuesta: ["Planificación de tareas", "Asignación de recursos", "Ejecución del trabajo", "Control de calidad"]

enunciado: "Ordene cronológicamente las etapas lógicas para coordinar un equipo de trabajo en una línea de producción:"

explicacion: |
  Para una coordinación eficiente, primero se debe planificar, luego asignar los recursos necesarios, ejecutar la tarea y finalmente controlar los resultados.
```

### 4 — Especialización del trabajo
```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["productividad", "especializacion"]

variables:
  escenario: uno_de([
    ["En un taller, la división de tareas aumenta la eficiencia.", "Aumenta"],
    ["En un taller, la división de tareas disminuye la eficiencia.", "Disminuye"]
  ])
  idx: uno_de([0, 1])

tipo: mc

opciones_explicitas: ["Aumenta", "Disminuye", "Se mantiene igual"]

enunciado: "Considerando la teoría de la división del trabajo de Adam Smith, si aplicamos la especialización en un taller: la eficiencia ___"

explicacion: |
  La especialización permite que los trabajadores se vuelvan más hábiles en tareas específicas, reduciendo tiempos de transición y aumentando la productividad.
```

### 5 — Gestión de inventario y recursos
```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "avanzado"
  tags: ["inventario", "recursos"]

variables:
  datos: [
    ["El stock actual es de 150 unidades y el consumo diario es de 30 unidades. Faltan ___ días para agotar el stock.", "5"],
    ["El stock actual es de 200 unidades y el consumo diario es de 50 unidades. Faltan ___ días para agotar el stock.", "4"],
    ["El stock actual es de 100 unidades y el consumo diario de 10 unidades. Faltan ___ días para agotar el stock.", "10"]
  ]
  idx: uno_de([0, 1, 2])

tipo: completar

respuestas_validas: ["5", "4", "10"]
respuesta: datos[idx][1]

enunciado: "Si el stock actual es de {datos[idx][0]}, ¿cuántos días faltan para agotar el stock?"

explicacion: |
  El tiempo de agotamiento se calcula dividiendo el stock total disponible por la tasa de consumo diaria.
```