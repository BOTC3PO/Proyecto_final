# Resolucion Problemas — Asignacion de recursos (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Asignación de Recursos

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["conceptos", "gestion_proyectos"]

respuesta: "asignación de recursos"
tipo: completar
respuestas_validas:
  - "asignación de recursos"

enunciado: "El proceso de distribuir el tiempo, el dinero, el personal y los materiales necesarios para completar las tareas de un proyecto se denomina ___."

explicacion: |
  La asignación de recursos es la base de la planificación, asegurando que cada tarea tenga lo necesario para ejecutarse sin sobrecargar el presupuesto o al equipo.
```

### 2 — Clasificación de Recursos

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["clasificacion", "recursos_humanos"]

respuesta: verdadero
tipo: vf
enunciado: "Si un proyecto requiere la contratación de un consultor externo para una tarea específica, este se clasifica como un recurso humano. ¿Es esto verdadero o falso?"

explicacion: |
  Los recursos humanos incluyen tanto al personal interno como a consultores o subcontratistas que aportan su trabajo al proyecto.
```

### 3 — Restricciones de Recursos

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["restricciones", "presupuesto"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["dinero", "El límite de dinero es de $1000"], ["personas", "El límite de personas es de 5"]]
  tipo_restriccion: escenarios[escenario_idx][0]
  texto_restriccion: escenarios[escenario_idx][1]

respuesta: tipo_restriccion
tipo: mc
opciones_explicitas: ["dinero", "personas", "tiempo", "materiales"]

enunciado: "En un proyecto, cuando no se puede asignar más capital debido a un límite establecido, estamos ante una restricción de {texto_restriccion}."

explicacion: |
  Las restricciones son límites impuestos (de tiempo, dinero, capacidad o materiales) que condicionan la planificación del proyecto.
```

### 4 — Ciclo de Gestión de Recursos

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta_orden: ["Identificar", "Planificar", "Asignar", "Monitorear"]
tipo: ordenar
opciones_explicitas: ["Identificar", "Planificar", "Asignar", "Monitorear"]

enunciado: "Ordene las fases lógicas para una gestión de recursos efectiva en un proyecto:"

explicacion: |
  Primero se deben identificar los recursos necesarios, luego planificar su uso, asignar las cantidades y finalmente monitorear que se cumplan los límites.
```

### 5 — Sobreasignación de Recursos

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "avanzado"
  tags: ["riesgos", "sobreasignacion"]

respuesta: verdadero
tipo: vf
enunciado: "La sobreasignación ocurre cuando un recurso (persona o máquina) tiene asignadas más horas de trabajo de las que puede cumplir en un periodo determinado. ¿Es esto verdadero o falso?"

explicacion: |
  La sobreasignación es un error común en la planificación que puede llevar al agotamiento del equipo (burnout) o al retraso de las tareas.
```

### 6 — Optimización de presupuesto de marketing

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["presupuesto", "recursos"]

enunciado: "Se tiene un presupuesto total de $3000. Si decidimos invertir en Redes Sociales ($500) y en Influencers ($1200), ¿cuánto dinero nos queda disponible para otros gastos?"

respuesta: 3000 - 500 - 1200
tipo: completar
tolerancia_abs: 0

explicacion: |
  El cálculo es: $3000 - ($500 + $1200) = $1300.
```

### 7 — Priorización de tareas de desarrollo

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["priorizacion", "gestion_proyectos"]

opciones_explicitas: ["Diseño de UI", "Desarrollo Backend", "Pruebas QA", "Despliegue"]

respuesta_orden: ["Diseño de UI", "Desarrollo Backend", "Pruebas QA", "Despliegue"]
tipo: ordenar

enunciado: "Ordena las etapas de un ciclo de vida de desarrollo de software estándar para una asignación de recursos eficiente."

explicacion: |
  Para optimizar recursos, primero se define la interfaz (UI), luego la lógica (Backend), se valida (QA) y finalmente se lanza (Despliegue).
```

### 8 — Disponibilidad de personal

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["personal", "capacidad"]

variables:
  idx: uno_de([0, 1, 2])
  nombres: ["Equipo A", "Equipo B", "Equipo C"]
  personas: [3, 5, 2]
  horas_semana: 40
  nombre: nombres[idx]
  cantidad_personas: personas[idx]

enunciado: "El {nombre} tiene {cantidad_personas} personas. Si cada persona trabaja {horas_semana} horas por semana, ¿cuántas horas totales de trabajo puede cubrir el equipo?"

respuesta: cantidad_personas * horas_semana
tipo: completar
tolerancia_abs: 0

explicacion: |
  El total de horas es el número de personas multiplicado por las horas individuales: {cantidad_personas} * {horas_semana}.
```

### 9 — Análisis de viabilidad de materiales

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["materiales", "logistica"]

variables:
  material_necesario: 150
  material_en_stock: uno_de([100, 150, 200])

enunciado: "Para completar la tarea X se requieren {material_necesario} unidades de material. Si actualmente tenemos {material_en_stock} unidades en stock, ¿es suficiente el material para cubrir la demanda?"

respuesta: material_en_stock >= material_necesario
tipo: vf
explicacion: |
  Si el stock es mayor o igual al necesario, la respuesta es verdadero.
```

### 10 — Distribución de tiempo por tarea

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "avanzado"
  tags: ["cronograma", "tiempo"]

variables:
  tareas: [["Tarea 1", 5], ["Tarea 2", 12], ["Tarea 3", 8]]

enunciado: "Si el proyecto tiene una duración máxima de 25 horas y ya hemos asignado {tareas[0][1]} horas a la Tarea 1 y {tareas[1][1]} horas a la Tarea 2, ¿cuántas horas quedan disponibles para la Tarea 3 sin exceder el límite?"

respuesta: tareas[2][1]
tipo: completar

respuestas_validas:
  - "8"

explicacion: |
  El tiempo restante es: 25 - (5 + 12) = 8 horas. Como la Tarea 3 requiere exactamente 8 horas, el presupuesto de tiempo es exacto.
```

### 11 — El error de la suma simple

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["planificacion", "error_comun"]

variables:
  escenario: uno_de([["Tarea A: 5h, Tarea B: 3h", 8], ["Tarea A: 10h, Tarea B: 4h", 14], ["Tarea A: 2h, Tarea B: 7h", 9]])

enunciado: "Si un gestor de proyectos asigna recursos basándose únicamente en la suma de las duraciones estimadas de cada tarea ({escenario[0]}) para calcular el tiempo total del proyecto, ¿está ignorando la posibilidad de tareas paralelas?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: verdadero
tipo: vf

explicacion: |
  Sumar las duraciones de las tareas (sumar tiempos) solo es válido si las tareas se ejecutan de forma estrictamente secuencial. Si existen dependencias o tareas que pueden ejecutarse al mismo tiempo, el tiempo total del proyecto (ruta crítica) será menor a la suma de las partes.
```

### 12 — La trampa de la capacidad nominal

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

opciones_explicitas: ["No hay error, la capacidad es la misma.", "Se ha subestimado la carga de trabajo real.", "Se ha sobreestimado la capacidad real del equipo.", "El error es no considerar los días festivos."]
respuesta: "Se ha sobreestimado la capacidad real del equipo."
tipo: "mc"

explicacion: |
  Asignar el 100% de la capacidad teórica sin considerar la eficiencia (curva de aprendizaje, fatiga, reuniones) es un error de planificación. En este caso, la capacidad real es de 32 horas (40 * 0.8), por lo que 40 horas de trabajo requerirán más de una semana.
```

### 13 — Secuencia de asignación de materiales

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["logistica", "dependencias"]

enunciado: "Para asegurar que el flujo de materiales no interrumpa el cronograma, ordena los pasos lógicos de la gestión de recursos:"

opciones_explicitas: ["Identificar necesidades de materiales", "Verificar stock disponible", "Establecer fechas de entrega de proveedores", "Asignar materiales a tareas específicas"]
respuesta_orden: ["Identificar necesidades de materiales", "Verificar stock disponible", "Establecer fechas de entrega de proveedores", "Asignar materiales a tareas específicas"]
tipo: "ordenar"

explicacion: |
  La asignación correcta requiere primero saber qué se necesita, luego verificar si se tiene, después asegurar el suministro externo y finalmente vincular el recurso a la tarea en el cronograma.
```

### 14 — El mito del recurso infinito

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "avanzado"
  tags: ["sobreasignacion", "costos"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["Aumentar el personal para terminar antes", "Aumentar el costo y reducir eficiencia"], ["Asignar más presupuesto a materiales", "Aumentar el riesgo de desperdicio"], ["Duplicar la jornada laboral", "Aumentar el error humano y fatiga"]]

enunciado: "Al intentar resolver un retraso mediante la 'compresión de cronograma' (crashing), se suele cometer el error de pensar que añadir más personas siempre reduce el tiempo. Según el escenario {datos[idx][0]}, la consecuencia real es: ___."

respuestas_validas:
  - "Aumentar el costo y reducir eficiencia"
  - "Aumentar el riesgo de desperdicio"
  - "Aumentar el error humano y fatiga"
respuesta: datos[idx][1]
tipo: "completar"

explicacion: |
  La Ley de Brooks establece que 'añadir personal a un proyecto de software retrasado lo hace más lento'. En general, la sobreasignación de recursos introduce costos de comunicación y coordinación que pueden anular la ganancia de tiempo.
```

### 15 — Dependencia de recursos compartidos

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

### 16 — Diferencia entre Asignación y Programación

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["planificacion", "conceptos"]

enunciado: "Mientras que la asignación de recursos se enfoca en 'quién' o 'con qué' se realiza una tarea, la programación de tareas se enfoca principalmente en el ___."

pasos:
  - "Identificar la dimensión temporal de la planificación."

respuestas_validas:
  - "cuándo"
tipo: completar

explicacion: |
  La asignación de recursos determina la distribución de activos (personas, dinero, materiales), mientras que la programación (scheduling) determina el orden y el momento temporal en que se ejecutan las actividades.
```

### 17 — Asignación de Recursos vs. Gestión de Capacidad

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["capacidad", "recursos"]

variables:
  es_capacidad_limitada: falso

enunciado: "En la gestión de proyectos, la asignación de recursos se diferencia de la gestión de capacidad en que la asignación se ocupa de la distribución específica, mientras que la gestión de capacidad se ocupa de la disponibilidad total de recursos. ¿Es verdadero que la asignación de recursos puede ignorar la capacidad máxima disponible sin causar conflictos?"

respuesta: falso
tipo: vf

explicacion: |
  Si se asignan más recursos de los que la capacidad total permite, se produce una sobreasignación (overallocation), lo que genera conflictos de calendario y retrasos.
```

### 18 — El concepto de "Carga de Trabajo" vs "Duración"

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["estimacion", "duracion"]

variables:
  escenario: uno_de([["Una tarea requiere 10 horas de trabajo de un programador", "10"], ["Una tarea requiere 2 días de trabajo de un operario", "2"]])

enunciado: "En la asignación de recursos, es vital distinguir entre la duración de una tarea y la carga de trabajo. Si una tarea tiene una duración de {escenario[0]}, la carga de trabajo total es de ___ unidades de esfuerzo."

respuesta: escenario[1]
respuestas_validas:
  - escenario[1]
tipo: completar

explicacion: |
  La duración es el tiempo transcurrido (calendario), mientras que la carga de trabajo es el esfuerzo total requerido (horas-hombre/días-hombre).
```

### 19 — Priorización de Recursos

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "avanzado"
  tags: ["priorizacion", "optimizacion"]

enunciado: "Al realizar la asignación de recursos, se debe distinguir entre recursos renovables y no renovables. ¿Cuál de las siguientes opciones describe mejor a un recurso no renovable?"

opciones_explicitas: ["Un presupuesto de dinero fijo", "Un equipo de trabajo", "Una máquina de uso continuo", "El tiempo de un empleado"]
tipo: mc
respuesta: "Un presupuesto de dinero fijo"

explicacion: |
  Los recursos renovables (como el personal) pueden volver a estar disponibles tras completar una tarea. Los no renovables (como el presupuesto) se consumen y no se recuperan.
```

### 20 — Secuencia de la Planificación de Recursos

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["proceso", "flujo"]

enunciado: "Para realizar una asignación de recursos efectiva en un proyecto complejo, se deben seguir estos pasos en el orden correcto:"

opciones_explicitas: ["Identificar tareas", "Estimar recursos necesarios", "Asignar recursos a las tareas", "Monitorear la utilización"]
tipo: ordenar

explicacion: |
  Primero se define el alcance (tareas), luego se sabe qué se necesita (estimación), después se asigna el recurso (asignación) y finalmente se controla que no haya sobreasignación (monitoreo).
respuesta_orden: ["Identificar tareas", "Estimar recursos necesarios", "Asignar recursos a las tareas", "Monitorear la utilización"]
```

### 21 — Optimización de presupuesto

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["presupuesto", "gestion"]

variables:
  idx: uno_de([0, 1, 2])
  textos: ["El proyecto requiere $5000 y se dispone de $4500", "El proyecto requiere $3000 y se dispone de $3500", "El proyecto requiere $4000 y se dispone de $4000"]
  es_viable: [falso, verdadero, verdadero]

respuesta: es_viable[idx]
tipo: vf
enunciado: "Considerando el escenario donde {textos[idx]}, ¿es posible cubrir la totalidad del presupuesto requerido?"

explicacion: |
  Para que un proyecto sea viable financieramente en este escenario, el presupuesto disponible debe ser mayor o igual al costo requerido.
```

### 22 — Priorización de tareas

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["prioridad", "orden"]

respuesta_orden: ["Planificar", "Ejecutar", "Controlar"]
tipo: ordenar
opciones_explicitas: ["Planificar", "Ejecutar", "Controlar"]

enunciado: "Ordene las fases de gestión de un proyecto de construcción según su secuencia lógica de ejecución."

pasos:
  - "Definir objetivos y recursos."
  - "Realizar el trabajo físico."
  - "Verificar que se cumplan los estándares."

explicacion: |
  La gestión de proyectos sigue un ciclo lógico: primero se planifica, luego se ejecuta la acción y finalmente se controla la calidad.
```

### 23 — Distribución de personal

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["recursos_humanos", "capacidad"]

variables:
  caso: uno_de([["Se necesitan 120 horas de trabajo y hay 2 personas trabajando 40 horas cada una", "Excede"], ["Se necesitan 120 horas de trabajo y hay 3 personas trabajando 30 horas cada una", "Exacto"], ["Se necesitan 120 horas de trabajo y hay 5 personas trabajando 20 horas cada una", "Excede"]])

respuesta: caso[1]
tipo: mc

opciones_explicitas: ["Excede", "Exacto", "Faltante"]

enunciado: "Analice la situación: {caso[0]}. ¿Cómo se define la disponibilidad de horas respecto a la necesidad?"

explicacion: |
  Se debe calcular el total de horas disponibles (personas * horas/persona) y compararlo con el requerimiento.
```

### 24 — Gestión de materiales

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["materiales", "completar"]

respuesta: "6"
tipo: completar

respuestas_validas:
  - "6"

enunciado: "Si para cada unidad de producto se necesitan 2 tornillos y el objetivo es producir 5 unidades, pero ya se tienen 4 tornillos en stock, ¿cuántos tornillos adicionales se deben comprar? ___"

explicacion: |
  Cálculo: (5 unidades * 2 tornillos/unidad) - 4 tornillos existentes = 10 - 4 = 6.
```

### 25 — Gestión de materiales (Corregida)

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["materiales", "completar"]

respuesta: "3"
tipo: completar

respuestas_validas:
  - "3"

enunciado: "Si para una tarea se requieren 10 unidades de material y actualmente se cuenta con un stock de 7 unidades, ¿cuántas unidades faltan para completar la tarea? ___"

explicacion: |
  La diferencia entre la necesidad (10) y el stock (7) es 3.
```

### 26 — Tiempo de entrega

```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "avanzado"
  tags: ["cronograma", "deadlines"]

variables:
  escenario_tiempo: uno_de([["La tarea dura 15 días y el plazo es de 10 días", "Inviable"], ["La tarea dura 5 días y el plazo es de 10 días", "Viable"], ["La tarea dura 10 días y el plazo es de 10 días", "Viable"]])

respuesta: escenario_tiempo[1]
tipo: mc

opciones_explicitas: ["Inviable", "Viable"]

enunciado: "Determine la viabilidad del cronograma: {escenario_tiempo[0]}."

explicacion: |
  Un proyecto es viable si el tiempo estimado de ejecución es menor o igual al plazo establecido.
```
