### 1 — El costo de oportunidad
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["conceptos_clave", "costo_de_oportunidad"]

variables:
  opcion_idx: uno_de([0,1,2])
  escenario: uno_de([
    ["Invertir en marketing para ganar clientes", "Perder tiempo de desarrollo de producto"],
    ["Acelerar la entrega de un software", "Aumentar la cantidad de errores (bugs)"],
    ["Reducir costos de materiales", "Disminuir la calidad del producto final"]
  ])

respuesta: escenario[opcion_idx][1]
tipo: mc
opciones_explicitas: ["El beneficio obtenido", "El costo de oportunidad", "La rentabilidad neta"]

enunciado: "Al elegir una opción, siempre renunciamos a la siguiente mejor alternativa. A esta renuncia se le denomina: ___"

explicacion: |
  El costo de oportunidad representa el valor de la mejor opción que se deja pasar al tomar una decisión. No es un costo monetario directo, sino el beneficio que se sacrifica.
```

### 2 — La falacia de la optimización local
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["optimizacion", "sistemas"]

variables:
  es_falso: true

respuesta: es_falso
tipo: vf

enunciado: "Optimizar individualmente cada parte de un sistema (optimización local) garantiza siempre la optimización del rendimiento del sistema completo (optimización global)."

explicacion: |
  Falso. A menudo, mejorar un componente específico puede crear cuellos de botella en otros puntos del sistema o aumentar la complejidad general, perjudicando el resultado global.
```

### 3 — El dilema de la velocidad vs. calidad
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["priorizacion", "trade_offs"]

variables:
  caso_idx: uno_de([0,1])
  casos: [
    ["Lanzar un producto con errores para ganar mercado", "Priorizar estabilidad y perfección absoluta"],
    ["Elegir la tecnología más barata para ahorrar presupuesto", "Elegir la tecnología más robusta para evitar mantenimiento"]
  ]
  decisiones: [
    ["Sacrificar calidad por velocidad", "Sacrificar velocidad por calidad"],
    ["Sacrificar robustez por ahorro", "Sacrificar ahorro por robustez"]
  ]

respuesta: decisiones[caso_idx][0]
tipo: mc
opciones_explicitas: ["Sacrificar calidad por velocidad", "Sacrificar velocidad por calidad", "No hay trade-off en este caso"]

enunciado: "En el escenario: '{casos[caso_idx][0]}', el trade-off principal consiste en ___"

explicacion: |
  Todo trade-off implica una compensación. En este caso, la decisión de ir rápido implica aceptar una calidad menor o viceversa.
```

### 4 — Priorización de tareas críticas
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "avanzado"
  tags: ["metodologia", "orden"]

respuesta: ["Identificar la restricción", "Analizar el impacto del trade-off", "Evaluar alternativas", "Implementar la decisión"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un conflicto de prioridades cuando dos tareas son igualmente importantes:"

explicacion: |
  Para decidir qué priorizar, primero se debe entender qué nos está limitando (restricción), analizar qué perdemos con cada opción, buscar alternativas y finalmente ejecutar.
```

### 5 — La trampa de la solución "perfecta"
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["paralisis_por_analisis"]

variables:
  valor_decisivo: 0.8

respuesta: "parálisis por análisis"
tipo: completar
respuestas_validas: ["parálisis por análisis", "optimización extrema", "error de cálculo"]

enunciado: "Intentar evaluar infinitas variables y evitar cualquier trade-off para alcanzar la solución perfecta suele conducir a la ___."

explicacion: |
  La parálisis por análisis ocurre cuando el esfuerzo por evitar un trade-off o tomar la decisión "ideal" impide la acción, lo cual es en sí mismo un costo de oportunidad enorme.
```