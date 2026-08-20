### 1 — Concepto de problema
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

respuesta: "brecha"
tipo: completar
respuestas_validas: ["brecha", "diferencia", "gap"]

enunciado: "En el contexto de resolución de problemas, un problema se define como la ___ existente entre una situación actual y una situación deseada."

explicacion: |
  Un problema surge cuando detectamos una desviación o 'brecha' entre lo que está sucediendo y lo que debería suceder.
```

### 2 — Identificación de causas
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["causas", "analisis"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El motor no arranca", "Falta de combustible"],
    ["Un proyecto se retrasa", "Mala gestión de tiempos"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Causa", "Efecto", "Restricción", "Síntoma"]

enunciado: "Si en el escenario '{escenarios[escenario_idx][0]}', el factor '{escenarios[escenario_idx][1]}' es lo que origina el inconveniente, este se clasifica como una:"

explicacion: |
  La causa es el origen o el motivo que produce un efecto o un problema.
```

### 3 — Naturaleza de las restricciones
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["restricciones", "limitaciones"]

respuesta: falso
tipo: vf

enunciado: "¿Es una restricción un factor que limita las opciones de solución, pero que no es necesariamente la causa del problema original?"

explicacion: |
  Verdadero. Las restricciones (como presupuesto, tiempo o leyes) limitan el campo de acción de las posibles soluciones, pero no son la raíz del problema.
```

### 4 — Clasificación de elementos
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["clasificacion", "ordenar"]

respuesta: ["Causa", "Problema", "Efecto"]
tipo: ordenar
opciones_explicitas: ["Efecto", "Causa", "Problema"]

enunciado: "Ordena la secuencia lógica de un proceso de análisis causal, desde el origen hasta la consecuencia observable:"

explicacion: |
  La secuencia lógica es: Causa (origen) -> Problema (la situación resultante) -> Efecto (la consecuencia o impacto).
```

### 5 — Diferencia entre causa y restricción
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["distincion", "analisis"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["No hay dinero para comprar insumos", "Presupuesto limitado"],
    ["La máquina se rompió por falta de aceite", "Falta de mantenimiento"]
  ]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["Es una causa", "Es una restricción", "Es un efecto"]

enunciado: "En el caso '{casos[caso_idx][0]}', el factor '{casos[caso_idx][1]}' actúa como una:"

explicacion: |
  Si el factor limita lo que se puede hacer sin ser el origen del problema, es una restricción. Si es el origen, es la causa.
```