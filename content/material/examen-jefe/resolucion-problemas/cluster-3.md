# Examen jefe — Gestor de Proyectos y Decisiones

> Logro #960. Dominaste la asignación de recursos, el riesgo y la incertidumbre, el seguimiento y control, los trade-offs y la priorización y el cierre y las lecciones aprendidas. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

---

## Sección: asignacion-de-recursos (26 preguntas)

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

## Sección: riesgo-e-incertidumbre (25 preguntas)

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["definicion", "probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "En un escenario de riesgo, el decisor conoce la distribución de probabilidad de los posibles resultados."

explicacion: |
  El riesgo implica que, aunque no sabemos qué resultado ocurrirá, conocemos las probabilidades asociadas a cada uno.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["diferencia", "conceptos"]

variables:
  escenario_idx: uno_de([0, 1])
  tabla: [["Riesgo", "Riesgo"], ["Incertidumbre", "Incertidumbre"]]

respuesta: tabla[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Riesgo", "Incertidumbre"]

enunciado: "Si un inversor se enfrenta a un proyecto donde es imposible estimar la probabilidad de éxito o fracaso, se encuentra ante un escenario de: ___"

explicacion: |
  La incertidumbre técnica ocurre cuando la información es insuficiente para asignar probabilidades a los eventos.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["componentes", "probabilidad"]

respuesta: "probabilidad y resultados"
tipo: completar
respuestas_validas:
  - "probabilidad y resultados"

enunciado: "Para que un problema sea clasificado como de riesgo, es indispensable conocer la ___ y los ___ posibles."

explicacion: |
  El riesgo se define matemáticamente por la combinación de un conjunto de estados de la naturaleza y sus respectivas probabilidades.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["clasificacion"]

respuesta_orden: ["Incertidumbre", "Riesgo", "Certeza"]
tipo: ordenar

opciones_explicitas: ["Incertidumbre", "Riesgo", "Certeza"]

enunciado: "Ordene los siguientes conceptos de mayor falta de información a mayor información (de mayor incertidumbre a mayor certeza):"

explicacion: |
  La incertidumbre es la ausencia total de conocimiento probabilístico, el riesgo es conocimiento parcial y la certeza es conocimiento total.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["probabilidad", "logica"]

respuesta: falso
tipo: vf

enunciado: "Si un evento tiene una probabilidad de ocurrencia del 50%, esto significa que estamos ante un escenario de incertidumbre pura."

explicacion: |
  Falso. Al conocer la probabilidad (50%), el escenario es de riesgo, no de incertidumbre pura.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["conceptos", "probabilidad"]

respuesta: falso
tipo: vf

enunciado: "En un escenario de incertidumbre, el decisor conoce exactamente la distribución de probabilidades de todos los resultados posibles."

explicacion: |
  La incertidumbre implica la falta de información sobre la probabilidad de los eventos. Si las probabilidades son conocidas, estamos ante un escenario de riesgo.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["clasificacion", "escenarios"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Lanzar un dado cargado donde se sabe que el 6 sale el 50% de las veces.", "riesgo"], ["Lanzar un dado mágico en una dimensión desconocida donde no se sabe cómo caen los números.", "incertidumbre"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["riesgo", "incertidumbre"]

enunciado: "Analice el siguiente caso: {datos[escenario_idx][0]}. Esto representa un escenario de ___."

explicacion: |
  En el primer caso, la probabilidad está definida (50%), por lo tanto es riesgo. En el segundo, la falta de información sobre la mecánica del dado implica incertidumbre.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["calculo", "esperanza"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [[100, 0.2, 500], [200, 0.5, 100]]
  # caso[0]: valor_a, prob, valor_b
  # caso[1]: valor_a, prob, valor_b

respuesta: casos[caso_idx][2] * casos[caso_idx][1] + casos[caso_idx][0] * (1 - casos[caso_idx][1])
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un inversor enfrenta un riesgo conocido. Hay un {redondear(casos[caso_idx][1] * 100, 0)}% de ganar ${casos[caso_idx][2]} y un resto de perder ${casos[caso_idx][0]}. Calcule el valor esperado (riesgo)."

pasos:
  - "Identificar la probabilidad del evento favorable y su valor."
  - "Identificar la probabilidad del evento desfavorable (1 - p) y su valor."
  - "Multiplicar cada valor por su probabilidad y sumar los resultados."

explicacion: |
  El valor esperado es la suma de los productos de cada resultado por su probabilidad: (P1 * V1) + (P2 * V2).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["completar"]

respuesta: "riesgo"
tipo: completar
respuestas_validas:
  - "riesgo"

enunciado: "Si un gestor de proyectos puede asignar probabilidades a los retrasos, está operando bajo un escenario de ___, pero si el impacto de una crisis global es totalmente impredecible, está ante la incertidumbre."

explicacion: |
  La distinción clave es la disponibilidad de información sobre la distribución de probabilidad.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "avanzado"
  tags: ["ordenar", "metodologia"]

respuesta_orden: ["Recopilar datos históricos", "Estimar probabilidades", "Calcular valor esperado", "Tomar decisión"]
tipo: ordenar
opciones_explicitas: ["Recopilar datos históricos", "Estimar probabilidades", "Calcular valor esperado", "Tomar decisión"]

enunciado: "Ordene los pasos lógicos para transformar un escenario de incertidumbre en uno de riesgo y poder decidir:"

explicacion: |
  Para reducir la incertidumbre, primero se busca información (datos), luego se modela la probabilidad, se aplica el cálculo matemático y finalmente se elige la opción óptima.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["conceptos", "probabilidad"]

respuesta: "riesgo"
tipo: "completar"
respuestas_validas:
  - "riesgo"

enunciado: "Cuando un decisor conoce la distribución de probabilidad de los posibles resultados de un evento, se encuentra ante un escenario de ___, mientras que si desconoce dichas probabilidades, se enfrenta a la incertidumbre."

explicacion: |
  La diferencia fundamental radica en la información disponible: el riesgo implica que conocemos las probabilidades de los distintos desenlaces, mientras que la incertidumbre implica un desconocimiento total de las probabilidades.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["aplicacion", "decision"]

variables:
  escenario: uno_de([["Lanzar un dado y ganar $10 si sale 6", "riesgo"], ["Invertir en una startup desconocida sin datos históricos", "incertidumbre"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["riesgo", "incertidumbre"]

enunciado: "Analiza el siguiente caso: {escenario[0]}. ¿Qué tipo de situación estamos enfrentando?"

explicacion: |
  En el primer caso, la probabilidad es conocida (1/6), por lo tanto es riesgo. En el segundo caso, la falta de datos históricos impide asignar probabilidades, lo que define la incertidumbre.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["verdadero_falso"]

respuesta: falso
tipo: "vf"

enunciado: "Si un evento es impredecible y no es posible asignar una probabilidad matemática a sus resultados, entonces estamos ante una situación de riesgo."

explicacion: |
  Falso. Si no se pueden asignar probabilidades, la definición técnica es incertidumbre. El riesgo requiere, por definición, una estructura probabilística conocida.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "avanzado"
  tags: ["metodologia", "informacion"]

respuesta_orden: ["recolectar datos", "modelar probabilidades", "evaluar riesgo"]
tipo: "ordenar"
opciones_explicitas: ["recolectar datos", "modelar probabilidades", "evaluar riesgo"]

enunciado: "Para transformar una situación de incertidumbre en una de riesgo, se debe seguir este proceso lógico de gestión de información:"

explicacion: |
  Primero se debe obtener información (recolectar datos), luego usar esa información para asignar pesos probabilísticos (modelar) y finalmente, con esas probabilidades, evaluar el riesgo esperado.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["error_comun", "sesgo"]

respuesta: 0.8
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un analista dice: 'Tengo un 80% de certeza de que el mercado subirá'. Si el analista está tratando de convertir la incertidumbre en riesgo mediante su juicio subjetivo, ¿cuál es el valor de la probabilidad asignada (en formato decimal)?"

explicacion: |
  Al asignar un valor numérico (80% = 0.8) a un evento incierto basado en su juicio, el analista está intentando transformar la incertidumbre en riesgo subjetivo.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["conceptos_base", "probabilidad"]

respuesta: "riesgo"
tipo: completar
respuestas_validas:
  - "riesgo"

enunciado: "Cuando un agente se enfrenta a un escenario donde los resultados posibles y sus probabilidades de ocurrencia son conocidos, se dice que está operando bajo un escenario de ___."

explicacion: |
  El riesgo implica la existencia de una distribución de probabilidad conocida (ej. lanzar un dado), mientras que la incertidumbre ocurre cuando no se pueden asignar probabilidades a los resultados.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["incertidumbre", "decision"]

variables:
  escenario_idx: uno_de([0, 1, 2, 3, 4])
  escenarios: [["Lanzar una moneda equilibrada para decidir un contrato", "riesgo"], ["Lanzar un dado de 6 caras para decidir un contrato", "riesgo"], ["Lanzar un dado de 6 caras para decidir un contrato", "riesgo"], ["Predecir el clima exacto de un día desconocido sin modelos históricos", "incertidumbre"], ["Lanzar una moneda trucada sin saber su probabilidad", "incertidumbre"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["riesgo", "incertidumbre"]

enunciado: "Analiza el siguiente caso: {escenarios[escenario_idx][0]}. ¿En qué condición se encuentra el decisor?"

explicacion: |
  Si el decisor conoce la probabilidad de cada cara o resultado, está en riesgo. Si la probabilidad es desconocida o no puede ser estimada, está en incertidumbre.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["teoria_decision"]

respuesta: falso
tipo: vf

enunciado: "La incertidumbre se define como la situación donde los resultados son aleatorios pero se conoce la probabilidad exacta de cada uno de ellos."

explicacion: |
  Falso. La definición dada corresponde al concepto de riesgo. La incertidumbre implica la falta de conocimiento sobre las probabilidades.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["modelado", "informacion"]

respuesta_orden: ["Incertidumbre", "Riesgo", "Certeza"]
tipo: ordenar
opciones_explicitas: ["Incertidumbre", "Riesgo", "Certeza"]

enunciado: "Ordena estos estados de conocimiento desde el que tiene menor información sobre los resultados hasta el que tiene información total (conocimiento absoluto):"

explicacion: |
  En la incertidumbre no hay información probabilística; en el riesgo la información es probabilística; en la certeza, el resultado es predecible al 100%.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  textos: ["Lanzar una moneda justa", "Lanzar una moneda cuya probabilidad de cara se desconoce"]
  valores: [verdadero, falso]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf
enunciado: "El siguiente caso representa un escenario de riesgo: {textos[idx]}."

explicacion: |
  Si el caso es 'Lanzar una moneda justa', la respuesta es verdadero porque la probabilidad (0.5) es conocida. Si es 'lanzar una moneda cuya probabilidad de cara se desconoce', es falso porque no se puede asignar una probabilidad.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["conceptos_basicos", "probabilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Lanzar un dado sabiendo que tiene 6 caras", "riesgo"], ["Predecir el clima de un planeta desconocido", "incertidumbre"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["riesgo", "incertidumbre"]

enunciado: "Si nos enfrentamos a {datos[escenario_idx][0]}, estamos ante un escenario de ___."

explicacion: |
  Cuando conocemos la distribución de probabilidades de los resultados posibles, hablamos de riesgo. Cuando no tenemos información sobre las probabilidades, hablamos de incertidumbre.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["finanzas", "toma_de_decisiones"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Invertir en un bono con un 5% de probabilidad de default", "riesgo"], ["Lanzar una startup en un mercado sin precedentes tecnológicos", "incertidumbre"]]

respuesta: casos[caso_idx][1]
tipo: completar
enunciado: "El escenario de {casos[caso_idx][0]} se clasifica como ___."

explicacion: |
  En el primer caso, el porcentaje de default es conocido (probabilidad conocida = riesgo). En el segundo, la falta de datos históricos impide asignar una probabilidad (incertidumbre).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  item_idx: uno_de([0, 1])
  items: [["Jugar a la ruleta sabiendo las probabilidades de la casa", "riesgo"], ["Un cambio repentino en la regulación política de un país", "incertidumbre"]]

respuesta: items[item_idx][1]
tipo: mc
opciones_explicitas: ["riesgo", "incertidumbre"]

enunciado: "Analice el siguiente caso: {items[item_idx][0]}. ¿Cuál es la naturaleza del problema?"

explicacion: |
  El riesgo permite modelar matemáticamente el resultado, mientras que la incertidumbre requiere otros métodos de decisión ante la falta de datos probabilísticos.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "probabilidad"
tipo: completar
respuestas_validas:
  - "probabilidad"

enunciado: "La diferencia fundamental entre riesgo e incertidumbre radica en que en el riesgo conocemos la ___ de los eventos futuros."

explicacion: |
  El riesgo implica que el modelo probabilístico es conocido, permitiendo calcular la esperanza matemática del resultado.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Identificar la información disponible", "Asignar probabilidades a los eventos", "Calcular el valor esperado", "Tomar la decisión bajo riesgo"]
respuesta_orden: ["Identificar la información disponible", "Asignar probabilidades a los eventos", "Calcular el valor esperado", "Tomar la decisión bajo riesgo"]
tipo: ordenar

enunciado: "Ordene los pasos lógicos para la toma de decisiones en un escenario de RIESGO:"

explicacion: |
  Para pasar de la incertidumbre al riesgo, primero debemos identificar datos, luego asignar probabilidades y finalmente calcular el valor esperado para decidir.
```

## Sección: seguimiento-y-control (25 preguntas)

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

## Sección: trade-offs-y-priorizacion (25 preguntas)

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "costo de oportunidad"
tipo: completar
respuestas_validas:
  - "costo de oportunidad"

enunciado: "En el proceso de toma de decisiones, cuando elegir una opción implica renunciar a los beneficios de la mejor alternativa descartada, estamos enfrentando el ___."

explicacion: |
  El costo de oportunidad es el valor de la mejor opción no elegida. Es el concepto fundamental para entender los trade-offs.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["identificacion", "escenarios"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Aumentar la velocidad de producción", "Aumentar los costos de mantenimiento"], ["Mejorar la calidad del producto", "Aumentar el precio de venta"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Aumentar la velocidad de producción", "Mejorar la calidad del producto", "Aumentar los costos de mantenimiento", "Aumentar el precio de venta"]

enunciado: "Si decidimos '{escenarios[escenario_idx][0]}', ¿cuál sería el trade-off directo (lo que se ve afectado negativamente)?"

explicacion: |
  Un trade-off ocurre cuando la mejora en una dimensión (ej. velocidad) conlleva una degradación en otra (ej. mantenimiento o calidad).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["priorizacion", "criterios"]

respuesta: verdadero
tipo: vf

enunciado: "La priorización es el proceso de organizar tareas o decisiones en un orden de importancia para optimizar el uso de recursos limitados."

explicacion: |
  Exacto. La priorización es la herramienta que utilizamos para gestionar los trade-offs, decidiendo qué beneficio es más valioso en un contexto dado.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["componentes", "decision"]

respuesta: "recursos"
tipo: completar
respuestas_validas:
  - "recursos"

enunciado: "Los trade-offs existen principalmente porque los ___ (como tiempo, dinero o energía) son finitos."

explicacion: |
  La escasez de recursos es la causa raíz de por qué no podemos tenerlo todo simultáneamente, obligándonos a elegir.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

respuesta_orden: ["Identificar objetivos", "Evaluar alternativas", "Analizar trade-offs", "Seleccionar opción"]
tipo: ordenar
opciones_explicitas: ["Identificar objetivos", "Evaluar alternativas", "Analizar trade-offs", "Seleccionar opción"]

enunciado: "Ordena los pasos lógicos para resolver un conflicto de prioridades mediante el análisis de trade-offs:"

explicacion: |
  Primero definimos qué queremos (objetivos), luego vemos qué opciones hay (alternativas), pesamos lo que perdemos en cada una (trade-offs) y finalmente decidimos.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["gestion_de_proyectos", "trade_offs"]

enunciado: "Un equipo de desarrollo debe decidir entre lanzar una funcionalidad mañana con errores menores (sacrificando calidad) o lanzarla en un mes con alta calidad (sacrificando tiempo). Si el objetivo principal del cliente es la estabilidad del sistema, el trade-off implica que elegir la rapidez resultará en una ___."

respuesta: "calidad_baja"
tipo: completar
respuestas_validas:
  - "costo_alto"
  - "calidad_baja"

explicacion: |
  Al elegir la rapidez sobre la calidad, se está aceptando un trade-off donde la estabilidad se ve comprometida. En este escenario, la consecuencia directa es la baja calidad.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["decision_toma", "analisis"]

enunciado: "En un proyecto de software, mejorar la seguridad del código suele requerir más tiempo de revisión y más recursos de hardware. ¿Qué tipo de relación describe este escenario?"

opciones_explicitas: ["Relación directa (ambos mejoran)", "Trade-off (mejorar uno empeora otro)", "Sinergia (ambos mejoran simultáneamente)", "Independencia (no hay relación)"]
respuesta: "Trade-off (mejorar uno empeora otro)"
tipo: mc

explicacion: |
  Un trade-off ocurre cuando la optimización de una variable (seguridad) conlleva una degradación en otra variable (tiempo/costo).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["priorizacion", "metodologias"]

enunciado: "Se tiene un presupuesto limitado de horas de trabajo. Según el criterio de 'Impacto en el Usuario Final', ¿cuál de las siguientes tareas debería priorizarse?"

opciones_explicitas: ["reparar_bug_critico", "reparar_bug_estetico", "añadir_nueva_funcionalidad", "mejorar_documentacion"]
respuesta: "reparar_bug_critico"
tipo: mc

explicacion: |
  La priorización efectiva requiere evaluar el impacto. Un bug crítico afecta la funcionalidad esencial, siendo prioritario sobre cambios estéticos o mejoras de soporte.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "avanzado"
  tags: ["metodologia", "proceso"]

opciones_explicitas: ["Identificar los objetivos", "Evaluar los trade-offs", "Seleccionar la opción con mayor valor", "Implementar y monitorear"]
respuesta_orden: ["Identificar los objetivos", "Evaluar los trade-offs", "Seleccionar la opción con mayor valor", "Implementar y monitorear"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un conflicto de prioridades en un equipo de producto:"

explicacion: |
  El proceso lógico comienza con la definición de metas, sigue con el análisis de las consecuencias de cada elección (trade-offs), la toma de decisión basada en valor y finalmente la ejecución.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["conceptos_clave"]

enunciado: "Si una empresa decide invertir todo su capital en Marketing para aumentar ventas, está renunciando a la posibilidad de invertir ese mismo capital en Investigación y Desarrollo (I+D). ¿Es esto un ejemplo de trade-off?"

respuesta: verdadero
tipo: vf

explicacion: |
  Verdadero. El costo de oportunidad es la esencia del trade-off: la pérdida de la siguiente mejor alternativa al tomar una decisión.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["conceptos_clave", "costo_de_oportunidad"]

respuesta: "El costo de oportunidad"
tipo: mc
opciones_explicitas: ["El beneficio obtenido", "El costo de oportunidad", "La rentabilidad neta"]

enunciado: "Al elegir una opción, siempre renunciamos a la siguiente mejor alternativa. A esta renuncia se le denomina: ___"

explicacion: |
  El costo de oportunidad representa el valor de la mejor opción que se deja pasar al tomar una decisión. No es un costo monetario directo, sino el beneficio que se sacrifica.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["optimizacion", "sistemas"]

variables:
  es_falso: falso

respuesta: es_falso
tipo: vf
enunciado: "Optimizar individualmente cada parte de un sistema (optimización local) garantiza siempre la optimización del rendimiento del sistema completo (optimización global)."

explicacion: |
  Falso. A menudo, mejorar un componente específico puede crear cuellos de botella en otros puntos del sistema o aumentar la complejidad general, perjudicando el resultado global.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["priorizacion", "trade_offs"]

variables:
  caso_idx: uno_de([0,1])
  casos: [["Lanzar un producto con errores para ganar mercado", "Priorizar estabilidad y perfección absoluta"], ["Elegir la tecnología más barata para ahorrar presupuesto", "Elegir la tecnología más robusta para evitar mantenimiento"]]
  decisiones: [["Sacrificar calidad por velocidad", "Sacrificar velocidad por calidad"], ["Sacrificar robustez por ahorro", "Sacrificar ahorro por robustez"]]

respuesta: decisiones[caso_idx][0]
tipo: mc
opciones_explicitas: ["Sacrificar calidad por velocidad", "Sacrificar velocidad por calidad", "Sacrificar robustez por ahorro", "Sacrificar ahorro por robustez", "No hay trade-off en este caso"]

enunciado: "En el escenario: '{casos[caso_idx][0]}', el trade-off principal consiste en ___"

explicacion: |
  Todo trade-off implica una compensación. En este caso, la decisión de ir rápido implica aceptar una calidad menor o viceversa.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "avanzado"
  tags: ["metodologia", "orden"]

tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un conflicto de prioridades cuando dos tareas son igualmente importantes:"

explicacion: |
  Para decidir qué priorizar, primero se debe entender qué nos está limitando (restricción), analizar qué perdemos con cada opción, buscar alternativas y finalmente ejecutar.

opciones_explicitas: ["Identificar la restricción", "Analizar el impacto del trade-off", "Evaluar alternativas", "Implementar la decisión"]

respuesta_orden: ["Identificar la restricción", "Analizar el impacto del trade-off", "Evaluar alternativas", "Implementar la decisión"]
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["paralisis_por_analisis"]

respuesta: "parálisis por análisis"
tipo: completar
respuestas_validas:
  - "parálisis por análisis"
  - "optimización extrema"
  - "error de cálculo"

enunciado: "Intentar evaluar infinitas variables y evitar cualquier trade-off para alcanzar la solución perfecta suele conducir a la ___."

explicacion: |
  La parálisis por análisis ocurre cuando el esfuerzo por evitar un trade-off o tomar la decisión "ideal" impide la acción, lo cual es en sí mismo un costo de oportunidad enorme.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["conceptos_clave", "decision"]

enunciado: "Mientras que la eficiencia busca maximizar la producción con el mínimo de recursos, un trade-off ocurre cuando mejorar un aspecto de un sistema implica necesariamente ___ otro aspecto."

respuestas_validas:
  - "sacrificar"
  - "empeorar"
  - "reducir"
tipo: completar

explicacion: |
  Un trade-off es una situación de compromiso donde la mejora de una variable (ej. velocidad) conlleva la degradación de otra (ej. precisión).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["costo_oportunidad", "priorizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Elegir desarrollar una nueva función que tarda 3 meses", "perder la oportunidad de arreglar 5 bugs críticos"], ["Invertir todo el presupuesto en marketing", "no tener fondos para soporte técnico"]]

enunciado: "En el escenario: {escenarios[escenario_idx][0]}, el costo de oportunidad es: ___."

respuestas_validas:
  - "perder la oportunidad de arreglar 5 bugs críticos"
  - "no tener fondos para soporte técnico"
tipo: completar

explicacion: |
  El costo de oportunidad no es el valor de lo que elegimos, sino el valor de la mejor alternativa que sacrificamos al tomar esa decisión.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["matriz_esfuerzo_impacto", "priorizacion"]

enunciado: "En la gestión de tareas, ¿cuál es la diferencia fundamental entre una tarea 'Urgente' y una tarea 'Prioritaria'?"

opciones_explicitas: ["La urgencia se refiere al tiempo, la prioridad al impacto/valor.", "La urgencia es siempre más importante que la prioridad.", "No hay diferencia, son sinónimos en gestión de proyectos.", "La prioridad se basa en la fecha de entrega y la urgencia en la importancia."]

respuesta: "La urgencia se refiere al tiempo, la prioridad al impacto/valor."
tipo: mc

explicacion: |
  Una tarea puede ser urgente (debe hacerse ya) pero tener poco impacto (baja prioridad). La priorización busca maximizar el valor entregado con el esfuerzo invertido.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["trade_offs", "calidad"]

enunciado: "¿Es posible eliminar completamente los trade-offs en un proceso de toma de decisiones complejo?"

opciones_explicitas: [verdadero, falso]

respuesta: falso
tipo: vf

explicacion: |
  Debido a la escasez de recursos (tiempo, dinero, energía), casi toda decisión implica un compromiso (trade-off). Optimizar una variable suele desplazar el equilibrio hacia otra.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "avanzado"
  tags: ["metodologia", "priorizacion"]

enunciado: "Ordena los pasos lógicos para resolver un conflicto de prioridades cuando existen múltiples trade-offs detectados:"

opciones_explicitas: ["Identificar los trade-offs", "Evaluar el impacto de cada opción", "Definir el objetivo principal", "Seleccionar la opción con mejor balance"]

respuesta_orden: ["Identificar los trade-offs", "Definir el objetivo principal", "Evaluar el impacto de cada opción", "Seleccionar la opción con mejor balance"]
tipo: ordenar

explicacion: |
  Para decidir correctamente, primero debemos saber qué estamos sacrificando (identificar), tener claro qué queremos lograr (objetivo), medir las consecuencias (evaluar) y finalmente elegir.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["gestion_de_proyectos", "trade_offs"]

respuesta: "Velocidad"
tipo: mc
opciones_explicitas: ["Velocidad", "Calidad", "Costo", "Seguridad"]

enunciado: "Si una startup decide priorizar el 'Time-to-Market' para capturar usuarios rápidamente, está aceptando un trade-off donde la prioridad principal es la velocidad, en detrimento de otros factores como la calidad."

explicacion: |
  En gestión de proyectos, elegir una prioridad implica sacrificar otra (trade-off). Si el objetivo es salir rápido, la prioridad es la velocidad, aunque se sacrifique la perfección.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["costos", "priorizacion"]

respuesta: "Costo"
tipo: mc
opciones_explicitas: ["Costo", "Calidad", "Tiempo", "Estética"]

enunciado: "Al decidir reducir la calidad de los componentes para disminuir el precio de venta, se está realizando un trade-off donde se prioriza el costo por sobre la calidad."

explicacion: |
  El trade-off es la compensación entre dos variables contrapuestas. En este caso, bajar costos suele implicar una reducción en la calidad percibida o real.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["analisis_de_impacto"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Añadir una nueva funcionalidad compleja al software", "Aumenta el valor pero aumenta la complejidad"], ["Simplificar la interfaz de usuario", "Aumenta la facilidad de uso pero reduce la potencia"]]

respuesta: verdadero
tipo: vf

enunciado: "Si aplicamos la decisión de {escenarios[escenario_idx][0]}, ¿es cierto que esto genera un trade-off donde una mejora en un aspecto conlleva una degradación o cambio en otro?"

explicacion: |
  Correcto. Todo cambio en un sistema complejo (software, organización, producto) tiene efectos secundarios. La esencia del trade-off es la existencia de estos efectos colaterales.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "avanzado"
  tags: ["metodologia", "decision"]

variables:
  metodo_idx: uno_de([0, 1, 2])
  pasos_lista: [["Identificar objetivos", "Evaluar trade-offs", "Elegir prioridad"], ["Definir problemas", "Analizar riesgos", "Implementar solución"], ["Recoger datos", "Comparar opciones", "Decidir"]]

respuesta_orden: pasos_lista[metodo_idx]
tipo: ordenar
opciones_explicitas: pasos_lista[metodo_idx]

enunciado: "Para resolver un conflicto de prioridades, un método lógico de toma de decisiones sigue este orden de pasos:"

explicacion: |
  Un proceso de decisión bien estructurado sigue una secuencia lógica: primero se reúne información o se define el problema, luego se analiza o compara entre alternativas, y finalmente se decide o se implementa la solución elegida.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["analisis_cuantitativo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Mejorar el rendimiento del motor en un 20% requiere un 15% más de combustible", "combustible"], ["Aumentar la seguridad en un 30% requiere un 10% más de peso", "peso"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "combustible"
  - "peso"

enunciado: "Si un ingeniero decide que el rendimiento es lo más importante, debe aceptar el trade-off de un mayor consumo de ___."

explicacion: |
  En problemas técnicos, los trade-offs suelen ser cuantitativos. Al mejorar una métrica (rendimiento), otra métrica (consumo) se ve afectada negativamente.
```

## Sección: cierre-y-lecciones-aprendidas (25 preguntas)

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["gestion_proyectos", "terminacion"]

tipo: mc
opciones_explicitas: ["Finalizar las tareas pendientes únicamente", "Documentar el conocimiento para futuros proyectos", "Entregar el producto al cliente y olvidar el proceso", "Eliminar toda la documentación técnica"]

respuesta: "Documentar el conocimiento para futuros proyectos"

enunciado: "El objetivo principal de una sesión de lecciones aprendidas es ___."

explicacion: |
  El cierre formal no solo implica entregar el producto, sino capturar el conocimiento adquirido para evitar repetir errores y replicar éxitos en futuros proyectos.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["conceptos_clave"]

tipo: vf

respuesta: verdadero

enunciado: "El cierre formal de un proyecto es un proceso administrativo que debe realizarse independientemente de si el proyecto fue exitoso o no."

explicacion: |
  Incluso en proyectos fallidos, la fase de cierre es crucial para entender las causas del fracaso y evitar que se repitan en el futuro.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["documentacion", "analisis"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El equipo no cumplió con los plazos debido a una mala estimación de recursos", "Falta de planificación de recursos"], ["La comunicación con el cliente fue fluida y los requerimientos no cambiaron", "Comunicación efectiva"]]

tipo: completar
respuestas_validas:
  - "Falta de planificación de recursos"
  - "Comunicación efectiva"
respuesta: escenarios[escenario_idx][1]

enunciado: "Analizando el siguiente caso: '{escenarios[escenario_idx][0]}', la lección aprendida principal es: ___."

explicacion: |
  Una lección aprendida debe identificar la causa raíz (lo que pasó) y la acción correctiva o positiva (la lección) de forma clara y accionable.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

tipo: ordenar
opciones_explicitas: ["Validación de entregables con el cliente", "Reunión de retrospectiva con el equipo", "Archivo de documentación y liberación de recursos", "Análisis de lecciones aprendidas"]
respuesta_orden: ["Validación de entregables con el cliente", "Reunión de retrospectiva con el equipo", "Análisis de lecciones aprendidas", "Archivo de documentación y liberación de recursos"]

enunciado: "Ordene cronológicamente las etapas lógicas para el cierre formal de un proyecto:"

explicacion: |
  Primero se debe asegurar que el cliente acepte el trabajo, luego se analiza el desempeño con el equipo, se extraen las lecciones y finalmente se formaliza el archivo de documentos y la liberación de recursos.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["conocimiento", "activos"]

tipo: mc
opciones_explicitas: ["Es una pérdida de tiempo si el proyecto fue exitoso", "Es un activo de la organización", "Solo es necesaria si el cliente lo exige", "Es un documento opcional que no debe guardarse"]

respuesta: "Es un activo de la organización"

enunciado: "Desde la perspectiva de la gestión del conocimiento, las lecciones aprendidas se consideran ___."

explicacion: |
  Las lecciones aprendidas forman parte de los 'activos de los procesos de la organización', permitiendo que el conocimiento no se pierda cuando el equipo se disuelve.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["gestion", "cierre"]

enunciado: "Al finalizar el proyecto 'Alpha', el equipo detectó que el uso de metodologías ágiles permitió una entrega 2 semanas antes de lo previsto. Sin embargo, la falta de documentación técnica generó retrasos en el mantenimiento. ¿Cuál es la acción principal en esta etapa de cierre?"

opciones_explicitas: ["Realizar una reunión de retrospectiva para registrar lecciones aprendidas", "Entregar el producto y disolver el equipo inmediatamente", "Ignorar los errores para mantener la moral alta"]

respuesta: "Realizar una reunión de retrospectiva para registrar lecciones aprendidas"
tipo: mc

explicacion: |
  El cierre formal no es solo entregar el producto, sino capturar el conocimiento (lecciones aprendidas) para mejorar procesos futuros.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["analisis", "causa_raiz"]

variables:
  datos: [["Falta de comunicación", "Retraso en aprobaciones"], ["Error de presupuesto", "Compra de materiales"], ["Falta de capacitación", "Lentitud en ejecución"]]
  idx: uno_de([0,1,2])

enunciado: "En el caso analizado, se identificó que la consecuencia observada fue: {datos[idx][1]}. El problema principal (causa raíz) que la originó fue: ___"

respuesta: datos[idx][0]
respuestas_validas:
  - datos[idx][0]
tipo: completar

explicacion: |
  Identificar la causa raíz y su consecuencia es vital para que la lección aprendida sea accionable en el siguiente proyecto.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["verdadero_falso"]

enunciado: "Si las lecciones aprendidas de un proyecto no se documentan en un repositorio accesible, se dice que el proceso de cierre ha sido efectivo para la organización."

respuesta: falso
tipo: vf

explicacion: |
  Un cierre es ineficaz si el conocimiento se pierde con la disolución del equipo; la documentación es clave para la mejora continua.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

opciones_explicitas: ["Entrega final y aceptación del cliente", "Reunión de retrospectiva y registro de lecciones", "Archivo de documentación y liberación de recursos", "Análisis de cumplimiento de objetivos"]

respuesta_orden: ["Entrega final y aceptación del cliente", "Análisis de cumplimiento de objetivos", "Reunión de retrospectiva y registro de lecciones", "Archivo de documentación y liberación de recursos"]
tipo: ordenar

enunciado: "Ordene las fases lógicas del cierre de un proyecto:"

explicacion: |
  El orden lógico implica primero validar el éxito con el cliente, analizar el desempeño, extraer el conocimiento y finalmente liberar los recursos.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "avanzado"
  tags: ["mejora_continua"]

variables:
  escenario: uno_de([["Error en estimación de tiempos", "Mejorar uso de software de gestión"], ["Conflicto de roles", "Definir matrices de responsabilidad"]])

enunciado: "Durante el cierre, se detectó: {escenario[0]}. La acción correctiva para el próximo proyecto será: ___"

respuesta: escenario[1]
respuestas_validas:
  - escenario[1]
tipo: completar

explicacion: |
  Las lecciones aprendidas deben transformarse en acciones concretas (acciones correctivas) para evitar la repetición de errores.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["gestion_proyectos", "mejora_continua"]

tipo: mc
opciones_explicitas: ["Documentar errores para buscar culpables", "Identificar procesos para mejorar futuros proyectos", "Cerrar el proyecto para que no se repitan errores", "Hacer una lista de tareas pendientes"]
respuesta: "Identificar procesos para mejorar futuros proyectos"
enunciado: "El objetivo principal de una sesión de lecciones aprendidas es:"
explicacion: |
  El propósito no es buscar culpables, sino identificar qué procesos, herramientas o decisiones funcionaron o fallaron para optimizar la ejecución de proyectos futuros.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["timing", "gestion_proyectos"]

tipo: vf
enunciado: "La fase de lecciones aprendidas debe realizarse exclusivamente después de que el cliente haya firmado la aceptación final del proyecto, sin posibilidad de realizar cambios en el proceso actual."

respuesta: falso

explicacion: |
  Aunque el cierre formal es clave, realizar retrospectivas durante el proyecto (en fases o sprints) permite aplicar las lecciones aprendidas de forma inmediata, evitando que los errores se arrastren hasta el final.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["documentacion", "calidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El equipo no comunicó un retraso en la entrega de un proveedor", "Falta de comunicación proactiva"], ["Se utilizó una herramienta de gestión que nadie sabía usar", "Falta de capacitación técnica"]]

tipo: completar
respuestas_validas:
  - "Falta de comunicación proactiva"
  - "Falta de capacitación técnica"
respuesta: escenarios[escenario_idx][1]

enunciado: "Analice el siguiente caso: {escenarios[escenario_idx][0]}. La causa raíz identificada es: ___"

explicacion: |
  Una buena lección aprendida debe desglosar el problema en una causa raíz clara para que la acción correctiva sea efectiva.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "avanzado"
  tags: ["metodologia", "orden"]

tipo: ordenar
opciones_explicitas: ["Recopilar datos y hechos del proyecto", "Analizar causas raíz de éxitos y fracasos", "Definir acciones preventivas y correctivas", "Integrar lecciones en la base de conocimientos"]

enunciado: "Ordene los pasos lógicos para realizar un proceso de cierre y lecciones aprendidas efectivo:"

respuesta_orden: ["Recopilar datos y hechos del proyecto", "Analizar causas raíz de éxitos y fracasos", "Definir acciones preventivas y correctivas", "Integrar lecciones en la base de conocimientos"]

explicacion: |
  No se pueden proponer soluciones sin antes haber analizado las causas, y no sirve de nada analizar si la información no se almacena para el futuro.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["analisis", "sesgos"]

tipo: mc
respuesta: "Basarse en datos y métricas objetivas"
opciones_explicitas: ["Basarse en opiniones personales", "Basarse en datos y métricas objetivas", "Basarse en la percepción del cliente únicamente", "Basarse en la memoria de los participantes"]

enunciado: "Para evitar sesgos durante la fase de lecciones aprendidas, la información debe basarse en:"

explicacion: |
  Las opiniones son valiosas, pero para que una lección aprendida sea útil y replicable, debe estar respaldada por datos (tiempos, costos, cantidad de errores, etc.) que demuestren la tendencia.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["gestion_proyectos", "terminacion"]

enunciado: "Mientras que la 'entrega' se refiere al traspaso del producto al cliente, el ___ se refiere al proceso administrativo y formal de finalizar todas las actividades del proyecto."

respuestas_validas:
  - "cierre"
tipo: completar

explicacion: |
  El cierre es el proceso administrativo que asegura que todos los contratos se hayan completado, los recursos se hayan liberado y la documentación esté lista, independientemente de si el producto fue entregado con éxito.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["documentacion", "mejora_continua"]

variables:
  es_correcta: verdadero

enunciado: "El propósito principal de un 'Reporte de Estado' es informar el progreso actual, mientras que el propósito de las 'Lecciones Aprendidas' es ___."

opciones_explicitas: ["mejorar procesos futuros", "notificar retrasos", "justificar el presupuesto"]
respuesta: "mejorar procesos futuros"
tipo: mc

explicacion: |
  El reporte de estado es una herramienta de control de ejecución, mientras que las lecciones aprendidas son una herramienta de gestión del conocimiento para la mejora continua.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "avanzado"
  tags: ["control", "calidad"]

enunciado: "¿Es correcto afirmar que una 'Auditoría de Proyecto' busca identificar errores para el aprendizaje, mientras que una 'Retrospectiva' busca verificar el cumplimiento de estándares y normativas?"

respuesta: falso
tipo: vf
explicacion: |
  Es al revés: la Retrospectiva (común en metodologías ágiles) se enfoca en el aprendizaje y la mejora del equipo, mientras que la Auditoría es un proceso formal para verificar el cumplimiento de procesos, normas o estándares.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["secuencia", "metodologia"]

enunciado: "Ordene los pasos lógicos para un cierre de proyecto efectivo, desde la finalización técnica hasta la liberación de recursos."

opciones_explicitas: ["Aceptación formal del cliente", "Documentación de lecciones aprendidas", "Liberación de equipo y recursos", "Cierre administrativo y contractual"]
respuesta_orden: ["Aceptación formal del cliente", "Documentación de lecciones aprendidas", "Liberación de equipo y recursos", "Cierre administrativo y contractual"]
tipo: ordenar

explicacion: |
  Primero se valida el éxito con el cliente, luego se extrae el conocimiento (lecciones), después se libera el capital humano/material y finalmente se cierran los aspectos legales y administrativos.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["conocimiento", "archivo"]

variables:
  idx: uno_de([0, 1])
  escenario: [["un error en la comunicación", "mejorar la reunión diaria"], ["un retraso en el proveedor", "revisar la cadena de suministro"]]

enunciado: "Si el problema detectado fue {escenario[idx][0]}, la acción correctiva para el próximo proyecto debería ser: ___"

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["mejorar la reunión diaria", "revisar la cadena de suministro"]

explicacion: |
  Las lecciones aprendidas deben ser específicas para el problema detectado para que la acción correctiva sea efectiva en el futuro.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["gestion", "post_mortem"]

variables:
  escenario: uno_de([["El equipo no documentó los errores técnicos en el repositorio.", "falta_documentacion"], ["Se detectó que el presupuesto se excedió por un 20% por falta de previsión.", "desvio_presupuestario"], ["El cliente recibió el producto con retraso de dos semanas.", "retraso_entrega"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["falta_documentacion", "desvio_presupuestario", "retraso_entrega", "exito_total"]

enunciado: "En un análisis post-mortem, se identifica que: {escenario[0]}. ¿Cuál es la categoría principal de la lección aprendida?"

explicacion: |
  El registro de lecciones aprendidas debe categorizar el problema para facilitar la búsqueda de soluciones en proyectos futuros.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["metodologia", "cierre"]

respuesta: verdadero

tipo: vf

enunciado: "Realizar una reunión de cierre formal al finalizar un proyecto ayuda a mitigar la repetición de errores en ciclos futuros."

explicacion: |
  El cierre formal permite institucionalizar el conocimiento adquirido y no dejarlo solo en la memoria individual de los miembros del equipo.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

opciones_explicitas: ["Entrega final al cliente", "Reunión de lecciones aprendidas", "Archivo de documentación técnica", "Liberación de recursos del equipo"]
respuesta_orden: ["Entrega final al cliente", "Reunión de lecciones aprendidas", "Archivo de documentación técnica", "Liberación de recursos del equipo"]
tipo: ordenar

enunciado: "Ordena cronológicamente las actividades recomendadas para un cierre de proyecto estructurado:"

explicacion: |
  Primero se cumple con el entregable, luego se analiza lo sucedido con el equipo, se guarda la información y finalmente se libera al personal para nuevos proyectos.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["analisis", "mejora_continua"]

variables:
  caso: uno_de([["El software funcionó pero el costo de mantenimiento es altísimo.", "costo"], ["El código es excelente pero no cumple con los requisitos del usuario.", "alcance"], ["El proyecto terminó a tiempo pero el equipo está agotado (burnout).", "recursos"]])

respuesta: caso[1]
tipo: completar

enunciado: "Analizando el siguiente caso: {caso[0]}. La lección aprendida debe centrarse en la gestión de: ___"

explicacion: |
  Identificar el área afectada (costo, alcance o recursos) permite aplicar la corrección específica en la planificación del próximo proyecto.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "avanzado"
  tags: ["calidad", "datos"]

respuesta: verdadero
tipo: vf
enunciado: "Para que una lección aprendida sea útil para la organización, debe estar registrada en un formato accesible y consultable, no solo discutida verbalmente. ¿Es esto verdadero?"

explicacion: |
  Si la información no es persistente y accesible, el conocimiento se pierde cuando el equipo cambia, invalidando el proceso de mejora continua.
```

