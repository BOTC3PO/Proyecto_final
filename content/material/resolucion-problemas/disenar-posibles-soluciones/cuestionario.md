# Resolucion Problemas — Disenar posibles soluciones (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de alternativas

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["definicion", "alternativas"]

tipo: mc
opciones_explicitas: ["Un conjunto de soluciones únicas y finales", "Un conjunto de diversos caminos o propuestas para resolver un problema", "Una lista de errores cometidos durante el proceso"]

enunciado: "En el proceso de resolución de problemas, diseñar posibles soluciones implica generar ___________ para abordar el desafío de distintas maneras."

respuesta: "Un conjunto de diversos caminos o propuestas para resolver un problema"

explicacion: |
  Diseñar alternativas significa expandir el abanico de opciones antes de tomar una decisión, evitando el sesgo de quedarse con la primera idea que surge.
```

### 2 — El valor de la divergencia

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["pensamiento-divergente", "creatividad"]

tipo: vf
respuesta: verdadero

enunciado: "El pensamiento divergente es una técnica fundamental durante la fase de diseño de soluciones, ya que busca generar la mayor cantidad de ideas posible sin juzgarlas inicialmente."

explicacion: |
  El pensamiento divergente permite la exploración libre, mientras que el pensamiento convergente se usa más adelante para filtrar y elegir la mejor opción.
```

### 3 — Fases del diseño de soluciones

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

tipo: ordenar
opciones_explicitas: ["Identificar el problema", "Generar múltiples alternativas", "Evaluar las opciones", "Implementar la solución elegida"]

respuesta_orden: ["Identificar el problema", "Generar múltiples alternativas", "Evaluar las opciones", "Implementar la solución elegida"]

enunciado: "Ordena cronológicamente las etapas lógicas para pasar de un problema a una solución efectiva:"

explicacion: |
  No se puede evaluar algo que no se ha generado, y no se debe implementar sin haber evaluado previamente las alternativas.
```

### 4 — El riesgo de la solución única

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["riesgo", "sesgo"]

tipo: mc
opciones_explicitas: ["Aumentar la eficiencia", "Reducir el riesgo de error", "Ahorrar tiempo de ejecución"]

enunciado: "El objetivo principal de generar varias alternativas antes de elegir una es ___________."

respuesta: "Reducir el riesgo de error"

explicacion: |
  Al tener múltiples opciones, si la primera no funciona o tiene fallos ocultos, contamos con planes de contingencia o mejores rutas.
```

### 5 — Criterios de selección

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["evaluacion", "criterios"]

variables:
  escenario: uno_de([["Bajo costo / Alta complejidad", "Costo"], ["Alta velocidad / Baja calidad", "Velocidad"], ["Máxima calidad / Alto costo", "Calidad"]])

tipo: completar
respuestas_validas:
  - "Costo"
  - "Velocidad"
  - "Calidad"
respuesta: escenario[1]

enunciado: "Si al evaluar una solución priorizamos que sea la más económica posible, el criterio de evaluación principal es el ___________."

pasos:
  - "Identificar el parámetro de prioridad en el enunciado."
  - "Relacionar el parámetro con el criterio de evaluación correspondiente."

explicacion: |
  Cada solución debe ser evaluada bajo criterios específicos (tiempo, dinero, calidad, esfuerzo) para poder compararlas objetivamente.
```

### 6 — El dilema del transporte escolar

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "basico"
  tags: ["creatividad", "alternativas"]

variables:
  escenario: uno_de([["El problema es que los alumnos llegan tarde porque el bus es muy lento", "cambiar_ruta", "cambiar_horario", "comprar_bus_nuevo"], ["El problema es que los alumnos llegan tarde porque el bus es muy lento", "cambiar_ruta", "cambiar_horario", "comprar_bus_nuevo"], ["El problema es que los alumnos llegan tarde porque el bus es muy lento", "cambiar_ruta", "cambiar_horario", "comprar_bus_nuevo"]])

enunciado: "Un colegio detecta que los alumnos llegan tarde debido a que la ruta actual del autobús es muy lenta. Antes de decidir, el equipo debe generar alternativas. Si la estrategia elegida es {escenario[1]}, ¿cuál es el objetivo principal?"

opciones_explicitas: ["Optimizar el tiempo de viaje", "Aumentar el costo", "Cambiar la flota de vehículos"]

respuesta: "Optimizar el tiempo de viaje"
tipo: mc

explicacion: |
  Diseñar soluciones implica evaluar diferentes caminos. Cambiar la ruta busca eficiencia temporal sin necesidad de inversión de capital en vehículos nuevos.
```

### 7 — Evaluación de viabilidad

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "intermedio"
  tags: ["criterios", "evaluacion"]

variables:
  criterio: uno_de([["Costo", "Efectividad", "Tiempo"], ["Costo", "Efectividad", "Tiempo"], ["Costo", "Efectividad", "Tiempo"]])

enunciado: "Al diseñar soluciones para un problema de logística, se comparan las alternativas bajo el criterio de {criterio[0]}. Si la solución A cuesta $100 y la B cuesta $500, la solución A es preferible bajo este criterio."

respuesta: verdadero
tipo: vf

explicacion: |
  Evaluar la viabilidad económica es un paso crítico en el diseño de soluciones para asegurar que la alternativa elegida sea sostenible.
```

### 8 — El proceso de ideación

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "basico"
  tags: ["pasos", "metodologia"]

enunciado: "Para resolver un problema mediante el diseño de alternativas, se deben seguir estos pasos en el orden correcto:"

opciones_explicitas: ["Identificar el problema", "Generar múltiples soluciones", "Evaluar alternativas", "Implementar la mejor"]

respuesta_orden: ["Identificar el problema", "Generar múltiples soluciones", "Evaluar alternativas", "Implementar la mejor"]
tipo: ordenar

explicacion: |
  No se puede evaluar algo que no se ha generado, y no se puede implementar algo que no ha sido evaluado. El orden lógico es fundamental.
```

### 9 — Diversidad de soluciones

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "intermedio"
  tags: ["pensamiento_divergente", "brainstorming"]

variables:
  caso: uno_de([["Un restaurante pierde clientes por la espera", "reducir_porciones", "mejorar_servicio", "abrir_sucursal"], ["Un restaurante pierde clientes por la espera", "reducir_porciones", "mejorar_servicio", "abrir_sucursal"]])

enunciado: "En el caso de {caso[0]}, una solución de tipo 'mejorar_servicio' podría consistir en ___."

respuestas_validas:
  - "capacitar al personal"
  - "contratar más meseros"
  - "implementar un sistema de turnos"

respuesta: "capacitar al personal"
tipo: completar

explicacion: |
  El pensamiento divergente busca múltiples respuestas. En este ejercicio, la capacitación es una solución directa al problema de la percepción del servicio.
```

### 10 — El sesgo de la primera idea

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "avanzado"
  tags: ["errores", "decision"]

enunciado: "Si un equipo de diseño elige la primera solución que aparece en una lluvia de ideas sin haber explorado más opciones, ¿está aplicando un proceso de diseño de soluciones completo?"

respuesta: falso
tipo: vf

explicacion: |
  Elegir la primera opción es un error cognitivo llamado 'sesgo de anclaje'. El diseño de soluciones requiere explorar el espacio de posibilidades para encontrar la opción óptima.
```

### 11 — El sesgo de la primera idea

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["sesgos", "creatividad"]

respuesta: falso
tipo: vf

enunciado: "En el proceso de diseño de soluciones, la primera idea que surge suele ser la más óptima y la que menos riesgos presenta."

explicacion: |
  Falso. La primera idea suele ser la más obvia o convencional. El proceso de diseño requiere generar múltiples alternativas para evitar el sesgo de anclaje y encontrar soluciones más innovadoras o eficientes.
```

### 12 — La trampa de la solución única

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["pensamiento-critico", "alternativas"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[ "un error en una línea de código", "un retraso en la entrega de un proyecto" ], [ "una queja de un cliente", "una falla en un componente mecánico" ]]

respuesta: "generar múltiples alternativas"
tipo: completar
respuestas_validas:
  - "generar múltiples alternativas"
  - "analizar la primera opción"
  - "implementar la solución rápida"

enunciado: "Ante el problema de {escenarios[escenario_idx][0]}, una práctica fundamental para evitar el pensamiento convergente prematuro es ___."

explicacion: |
  Generar múltiples alternativas permite comparar pros y contras antes de comprometer recursos en una única dirección.
```

### 13 — Calidad vs. Cantidad en el Brainstorming

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["brainstorming", "creatividad"]

respuesta: "Cantidad sobre calidad"
tipo: mc
opciones_explicitas: ["Calidad sobre cantidad", "Cantidad sobre calidad", "Calidad y cantidad simultáneamente", "No se debe priorizar ninguna"]

enunciado: "Durante la fase inicial de generación de soluciones (divergencia), ¿en qué aspecto se debe priorizar para maximizar la creatividad?"

explicacion: |
  En la fase de divergencia, el objetivo es la cantidad. El juicio crítico y la selección de calidad pertenecen a la fase de convergencia posterior.
```

### 14 — El orden del proceso creativo

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Definir el problema", "Generar alternativas", "Evaluar opciones", "Seleccionar la mejor"]
tipo: ordenar
opciones_explicitas: ["Generar alternativas", "Definir el problema", "Seleccionar la mejor", "Evaluar opciones"]

enunciado: "Ordena las fases lógicas para pasar de un problema a una solución efectiva:"

explicacion: |
  No se pueden generar soluciones si no se ha definido el problema correctamente, y no se debe seleccionar sin antes evaluar las alternativas generadas.
```

### 15 — El peligro del sesgo de confirmación

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "avanzado"
  tags: ["sesgos", "evaluacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [[ "una falla en el motor", "un error en el software" ], [ "una caída en las ventas", "un error de comunicación" ]]
  soluciones: [[ "cambiar el aceite", "revisar la bujía" ], [ "reentrenar al equipo", "cambiar el manual" ]]

respuesta: falso
tipo: vf

enunciado: "Si al intentar resolver {casos[caso_idx][0]} solo busco información que respalde la solución de {soluciones[caso_idx][0]}, estoy aplicando un proceso de diseño de soluciones robusto."

explicacion: |
  Falso. Eso es el sesgo de confirmación. Un buen diseño de soluciones requiere buscar activamente evidencia que desmienta nuestra solución preferida para validarla.
```

### 16 — Divergencia vs Convergencia

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "basico"
  tags: ["pensamiento_creativo", "procesos"]

respuesta: "divergencia"
tipo: "completar"
respuestas_validas:
  - "divergencia"

enunciado: "Mientras que el pensamiento convergente busca una única solución correcta a un problema, el pensamiento ___ se enfoca en la generación de múltiples alternativas y posibilidades."

explicacion: |
  La fase de diseño requiere pensamiento divergente para expandir el abanico de opciones antes de pasar a la fase de selección (convergencia).
```

### 17 — El rol de la lluvia de ideas

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "intermedio"
  tags: ["brainstorming", "metodologia"]

variables:
  es_critica: uno_de([verdadero, falso])

respuesta: falso
tipo: vf

enunciado: "En una sesión de lluvia de ideas (brainstorming) para diseñar soluciones, la evaluación crítica de las ideas debe realizarse de forma inmediata para descartar las que parezcan poco viables. ¿Es esto correcto?"

explicacion: |
  No. Para maximizar la creatividad, primero se debe fomentar la cantidad de ideas (divergencia) sin juicios, y solo en una etapa posterior se realiza la evaluación crítica.
```

### 18 — Diferencia entre solución y opción

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "una opción es una alternativa posible, mientras que una solución es la respuesta definitiva al problema"
tipo: "mc"
opciones_explicitas: ["una opción es una alternativa posible, mientras que una solución es la respuesta definitiva al problema", "una opción es un error de diseño, mientras que una solución es el objetivo", "una opción es un recurso, mientras que una solución es un proceso", "no hay diferencia entre ambos términos"]

enunciado: "Al diseñar posibles soluciones, ¿cuál es la distinción fundamental entre generar 'opciones' y encontrar la 'solución'?"

explicacion: |
  Generar opciones es parte del proceso de exploración; la solución es el resultado final tras evaluar y seleccionar la mejor opción.
```

### 19 — Secuencia del proceso de diseño

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Identificación del problema", "Generación de alternativas", "Evaluación de opciones", "Selección de la solución"]
tipo: "ordenar"
opciones_explicitas: ["Identificación del problema", "Generación de alternativas", "Evaluación de opciones", "Selección de la solución"]

enunciado: "Ordena los pasos lógicos para un proceso de diseño de soluciones efectivo:"

explicacion: |
  No se puede evaluar lo que no se ha generado, y no se puede seleccionar sin haber comparado las alternativas previamente identificadas.
```

### 20 — El sesgo de la primera idea

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "avanzado"
  tags: ["sesgos", "cognicion"]

variables:
  caso_estudio: uno_de([0, 1])

respuesta: "sesgo de anclaje"
tipo: "completar"
respuestas_validas:
  - "sesgo de anclaje"

enunciado: "Cuando un equipo de diseño se queda estancado en la primera idea que surge, ignorando otras alternativas más efectivas, está cayendo en el ___."

explicacion: |
  El sesgo de anclaje ocurre cuando la primera información o idea recibida tiene un peso desproporcionado en la toma de decisiones, limitando la exploración de soluciones alternativas.
```

### 21 — El dilema de la logística

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["alternativas", "decision"]

variables:
  escenarios: [["El transporte de carga es muy costoso", "optimizar rutas"], ["La empresa quiere reducir costos", "contratar más vehículos"]]

respuesta: escenarios[1][1]
tipo: mc
opciones_explicitas: ["optimizar rutas", "contratar más vehículos", "cambiar de proveedor", "no hacer nada"]

enunciado: "Ante el problema de que {escenarios[1][0]}, ¿cuál sería la alternativa más directa para abordar la situación?"

explicacion: |
  Diseñar soluciones requiere identificar si el problema es de costo o de tiempo. En este caso, la alternativa seleccionada ataca directamente la raíz del problema planteado.
```

### 22 — Evaluación de impacto

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["evaluacion", "riesgo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Implementar software nuevo", "Cambiar la política de horarios"], ["Reducir el presupuesto", "Aumentar la jornada laboral"]]
  es_viable: [falso, falso]

respuesta: es_viable[caso_idx]
tipo: completar
enunciado: "Si decides aplicar la medida de: {casos[caso_idx]}, ¿consideras que la solución es viable sin realizar un estudio de impacto previo?"

explicacion: |
  En el diseño de soluciones, una alternativa puede ser lógica pero no viable sin un análisis previo. En ambos casos presentados, la respuesta es falsa debido a la falta de estudio de impacto.
```

### 23 — Secuencia de ideación

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Identificar el problema", "Generar alternativas", "Evaluar opciones", "Elegir la mejor"]
tipo: ordenar
opciones_explicitas: ["Identificar el problema", "Generar alternativas", "Evaluar opciones", "Elegir la mejor"]

enunciado: "Ordena los pasos lógicos para el diseño de una solución efectiva ante un problema detectado."

explicacion: |
  El proceso creativo y de resolución comienza con la comprensión del problema, seguido de la divergencia (generar opciones), la convergencia (evaluar) y finalmente la decisión.
```

### 24 — Completar la estrategia

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["estrategia", "pensamiento-divergente"]

variables:
  contexto_idx: uno_de([0, 1])
  contextos: [["El cliente pide rapidez", "El cliente pide calidad"], ["El cliente pide bajo costo", "El cliente pide durabilidad"]]
  termino_clave: ["velocidad", "precisión"]

respuesta: termino_clave[contexto_idx]
tipo: completar
respuestas_validas:
  - "velocidad"
  - "precisión"

enunciado: "Si el problema principal detectado es que el cliente requiere ____, la solución debe enfocarse en la optimización de procesos de entrega."

explicacion: |
  El diseño de soluciones debe estar alineado con la necesidad principal. Si la necesidad es rapidez, la palabra clave es velocidad.
```

### 25 — El filtro de soluciones

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "avanzado"
  tags: ["criterios", "seleccion"]

variables:
  criterio_idx: uno_de([0, 1])
  criterios: ["Costo de implementación", "Facilidad de uso"]
  valor_criterio: ["alto", "bajo"]

respuesta: valor_criterio[criterio_idx]
tipo: mc
opciones_explicitas: ["alto", "bajo", "medio", "nulo"]

enunciado: "Al evaluar una alternativa de solución, si el factor de {criterios[criterio_idx]} es ____, la solución podría ser difícil de adoptar a pesar de ser efectiva."

explicacion: |
  Evaluar las restricciones es parte del diseño. Si el criterio evaluado tiene un valor "alto" (ya sea en costo o dificultad), la implementación se ve comprometida.
```
