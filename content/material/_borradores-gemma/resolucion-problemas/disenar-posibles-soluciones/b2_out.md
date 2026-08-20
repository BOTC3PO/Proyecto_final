### 1 — El dilema del transporte escolar
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "basico"
  tags: ["creatividad", "alternativas"]

variables:
  escenario: uno_de([
    ["El problema es que los alumnos llegan tarde porque el bus es muy lento", "cambiar_ruta", "cambiar_horario", "comprar_bus_nuevo"],
    ["El problema es que los alumnos llegan tarde porque el bus es muy lento", "cambiar_ruta", "cambiar_horario", "comprar_bus_nuevo"],
    ["El problema es que los alumnos llegan tarde porque el bus es muy lento", "cambiar_ruta", "cambiar_horario", "comprar_bus_nuevo"]
  ])

enunciado: "Un colegio detecta que los alumnos llegan tarde debido a que la ruta actual del autobús es muy lenta. Antes de decidir, el equipo debe generar alternativas. Si la estrategia elegida es {escenario[1]}, ¿cuál es el objetivo principal?"

opciones_explicitas: ["Optimizar el tiempo de viaje", "Aumentar el costo", "Cambiar la flota de vehículos"]

respuesta: "Optimizar el tiempo de viaje"
tipo: mc

explicacion: |
  Diseñar soluciones implica evaluar diferentes caminos. Cambiar la ruta busca eficiencia temporal sin necesidad de inversión de capital en vehículos nuevos.
```

### 2 — Evaluación de viabilidad
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "intermedio"
  tags: ["criterios", "evaluacion"]

variables:
  criterio: uno_de([
    ["Costo", "Efectividad", "Tiempo"],
    ["Costo", "Efectividad", "Tiempo"],
    ["Costo", "Efectividad", "Tiempo"]
  ])

enunciado: "Al diseñar soluciones para un problema de logística, se comparan las alternativas bajo el criterio de {criterio[0]}. Si la solución A cuesta $100 y la B cuesta $500, la solución A es preferible bajo este criterio."

respuesta: verdadero
tipo: vf

explicacion: |
  Evaluar la viabilidad económica es un paso crítico en el diseño de soluciones para asegurar que la alternativa elegida sea sostenible.
```

### 3 — El proceso de ideación
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "basico"
  tags: ["pasos", "metodologia"]

enunciado: "Para resolver un problema mediante el diseño de alternativas, se deben seguir estos pasos en el orden correcto:"

opciones_explicitas: ["Identificar el problema", "Generar múltiples soluciones", "Evaluar alternativas", "Implementar la mejor"]

respuesta: ["Identificar el problema", "Generar múltiples soluciones", "Evaluar alternativas", "Implementar la mejor"]
tipo: ordenar

explicacion: |
  No se puede evaluar algo que no se ha generado, y no se puede implementar algo que no ha sido evaluado. El orden lógico es fundamental.
```

### 4 — Diversidad de soluciones
```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "intermedio"
  tags: ["pensamiento_divergente", "brainstorming"]

variables:
  caso: uno_de([
    ["Un restaurante pierde clientes por la espera", "reducir_porciones", "mejorar_servicio", "abrir_sucursal"],
    ["Un restaurante pierde clientes por la espera", "reducir_porciones", "mejorar_servicio", "abrir_sucursal"]
  ])

enunciado: "En el caso de {caso[0]}, una solución de tipo 'mejorar_servicio' podría consistir en ___."

respuestas_validas: ["capacitar al personal", "contratar más meseros", "implementar un sistema de turnos"]

respuesta: "capacitar al personal"
tipo: completar

explicacion: |
  El pensamiento divergente busca múltiples respuestas. En este ejercicio, la capacitación es una solución directa al problema de la percepción del servicio.
```

### 5 — El sesgo de la primera idea
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