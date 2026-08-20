### 1 — Propósito del prototipo
```
metadata:
  materia: "ingenieria"
  tema: "prototipo_conceptos"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

respuesta: "validar"
tipo: "completar"
respuestas_validas: ["validar", "verificar", "probar"]

enunciado: "El objetivo principal de crear un prototipo no es construir el producto final, sino _______ las hipótesis de diseño y la funcionalidad de la solución."

explicacion: |
  Un prototipo es una herramienta de aprendizaje. Su fin no es la estética ni la perfección, sino validar si la idea resuelve el problema planteado antes de invertir grandes recursos.
```

### 2 — Prototipo vs Producto Final
```
metadata:
  materia: "ingenieria"
  tema: "prototipo_diferencias"
  nivel: "basico"
  tags: ["error_comun", "gestion_proyectos"]

variables:
  es_final: uno_de([verdadero, falso])

respuesta: es_final
tipo: "vf"

enunciado: "Un prototipo funcional que permite probar la lógica de un sistema, pero que utiliza materiales de baja fidelidad y no es apto para la venta al público, es considerado una versión final del producto."

pasos:
  - "Evaluar si el objetivo del prototipo es la validación o la comercialización."
  - "Comparar la durabilidad y estética del prototipo con los estándares de mercado."

explicacion: |
  El prototipo es una versión preliminar y simplificada. Si el objeto está destinado a ser vendido y tiene todas las características de producción, ya no es un prototipo, es el producto final.
```

### 3 — Fidelidad del prototipo
```
metadata:
  materia: "ingenieria"
  tema: "prototipo_fidelidad"
  nivel: "intermedio"
  tags: ["fidelidad", "costos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Baja fidelidad", "rápido y económico"],
    ["Alta fidelidad", "detallado y costoso"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["rápido y económico", "detallado y costoso", "solo para marketing", "no tiene utilidad"]

enunciado: "Si estamos en una fase inicial de diseño y necesitamos un prototipo de {escenarios[escenario_idx][0]}, este suele ser _______."

explicacion: |
  La elección de la fidelidad depende de la pregunta que queramos responder. Los prototipos de baja fidelidad (como bocetos o maquetas de cartón) son ideales para validar conceptos rápidamente sin gastar presupuesto.
```

### 4 — Ciclo de iteración
```
metadata:
  materia: "ingenieria"
  tema: "prototipo_iteracion"
  nivel: "intermedio"
  tags: ["metodologia", "iteracion"]

respuesta: ["Construir prototipo", "Probar prototipo", "Analizar resultados", "Refinar diseño"]
tipo: "ordenar"
opciones_explicitas: ["Construir prototipo", "Probar prototipo", "Analizar resultados", "Refinar diseño"]

enunciado: "Para que el proceso de prototipado sea efectivo en un ciclo de mejora continua, se deben seguir estos pasos en orden:"

explicacion: |
  El proceso es iterativo. El análisis de los resultados obtenidos en las pruebas es lo que permite refinar el diseño para la siguiente versión del prototipo.
```

### 5 — El error del "Prototipo Perfecto"
```
metadata:
  materia: "ingenieria"
  tema: "prototipo_errores"
  nivel: "avanzado"
  tags: ["eficiencia", "gestion_recursos"]

respuesta: "falso"
tipo: "vf"

enunciado: "Es un error común en la gestión de proyectos dedicar demasiado tiempo y recursos a que un prototipo sea estéticamente perfecto antes de haber validado su funcionalidad básica."

explicacion: |
  Este error se conoce como "over-engineering" en la fase de prototipado. El objetivo es fallar rápido y barato para aprender; perfeccionar la estética antes de validar la utilidad es un desperdicio de recursos en etapas tempranas.
```