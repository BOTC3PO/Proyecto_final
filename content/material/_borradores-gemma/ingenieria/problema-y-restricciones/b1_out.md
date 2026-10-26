### 1 — Definición de solución técnica
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "solución"
tipo: "completar"
respuestas_validas: ["solución", "solucion"]

enunciado: "En ingeniería, el objetivo del proceso de diseño es encontrar una ___ que satisfaga todos los requisitos establecidos."

explicacion: |
  Una solución es la respuesta técnica o el producto que resuelve el problema planteado cumpliendo con las condiciones impuestas.
```

### 2 — Clasificación de requisitos
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["requisitos", "clasificacion"]

variables:
  idx: uno_de([0, 1])

respuesta: datos_caso[idx][1]
tipo: "mc"
opciones_explicitas: ["Requisito", "Restricción", "Optimización", "Variable"]

enunciado: "Si un cliente exige que un puente soporte exactamente 50 toneladas, esto se clasifica como un: {datos_caso[idx][0]}"

datos_caso: [["Requisito", "Requisito"], ["Restricción", "Restricción"]]

explicacion: |
  Los requisitos definen qué debe hacer la solución, mientras que las restricciones limitan el espacio de búsqueda de soluciones posibles.
```

### 3 — Veracidad de restricciones
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["restricciones", "verdadero_falso"]

respuesta: falso
tipo: "vf"

enunciado: "¿Una restricción de presupuesto (límite de costo) es un ejemplo de un requisito de rendimiento?"

explicacion: |
  Falso. El presupuesto es una restricción de recursos; los requisitos de rendimiento se refieren a la funcionalidad o capacidad del sistema.
```

### 4 — Jerarquía de diseño
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["proceso", "ordenar"]

respuesta: ["Identificación del problema", "Definición de restricciones", "Generación de alternativas", "Selección de la mejor solución"]
tipo: "ordenar"
opciones_explicitas: ["Generación de alternativas", "Identificación del problema", "Selección de la mejor solución", "Definición de restricciones"]

enunciado: "Ordene las etapas lógicas del proceso de ingeniería para abordar un problema:"

explicacion: |
  Primero se entiende el problema, luego se delimita qué se puede y no se puede hacer (restricciones), se crean opciones y finalmente se elige la mejor.
```

### 5 — Análisis de viabilidad
```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["viabilidad", "recursos"]

variables:
  idx: uno_de([0, 1])

respuesta: datos_viabilidad[idx][1]
tipo: "mc"
opciones_explicitas: ["Viable", "Inviable", "Óptimo", "Indeterminado"]

enunciado: "Si un diseño cumple con todos los requisitos funcionales pero excede el presupuesto máximo disponible, la solución es: {datos_viabilidad[idx][0]}"

datos_viabilidad: [["Viable", "Inviable"], ["Inviable", "Viable"]]

explicacion: |
  Si una solución no cumple con una restricción crítica (como el presupuesto), se considera inviable, aunque sea técnicamente funcional.
```