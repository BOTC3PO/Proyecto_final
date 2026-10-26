# Ingenieria — Problema y restricciones (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de solución técnica

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "solución"
tipo: "completar"
respuestas_validas:
  - "solución"
  - "solucion"

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
  datos_caso: uno_de([["Requisito", "Requisito"], ["Restricción", "Restricción"]])

respuesta: datos_caso[1]
tipo: "mc"
opciones_explicitas: ["Requisito", "Restricción", "Optimización", "Variable"]

enunciado: "Si un cliente exige que un puente soporte exactamente 50 toneladas, esto se clasifica como un: {datos_caso[0]}"

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

respuesta_orden: ["Identificación del problema", "Definición de restricciones", "Generación de alternativas", "Selección de la mejor solución"]
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

tipo: "mc"
opciones_explicitas: ["Viable", "Inviable", "Óptimo", "Indeterminado"]

enunciado: "Si un diseño cumple con todos los requisitos funcionales pero excede el presupuesto máximo disponible, ¿cómo se clasifica la solución?"

respuesta: "Inviable"

explicacion: |
  Si una solución no cumple con una restricción crítica (como el presupuesto), se considera inviable, aunque sea técnicamente funcional.
```

### 6 — Restricción de presupuesto en proyecto

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["presupuesto", "gestion"]

variables:
  escenario: uno_de([["Proyecto A", 5000, 4500], ["Proyecto B", 12000, 11500]])

enunciado: "En un proyecto de ingeniería, el presupuesto asignado es de {escenario[1]} USD. Si el costo estimado de la solución propuesta es de {escenario[2]} USD, la restricción de presupuesto se cumple."

respuesta: verdadero
tipo: vf
explicacion: |
  Para que una solución sea viable, el costo debe ser menor o igual al presupuesto disponible. En este caso, {escenario[2]} <= {escenario[1]} es verdadero.
```

### 7 — Identificación de requisitos técnicos

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["requisitos", "especificaciones"]

opciones_explicitas: ["Requisito de rendimiento", "Restricción de material", "Restricción de tiempo"]

enunciado: "Un cliente solicita que un puente debe soportar una carga de 50 toneladas. Esta especificación técnica se clasifica como una:"

respuesta: "Requisito de rendimiento"
tipo: mc

explicacion: |
  Los requisitos de rendimiento definen la capacidad operativa o funcionalidad que la solución debe alcanzar para satisfacer la necesidad del cliente.
```

### 8 — Secuencia de resolución de un problema de ingeniería

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["metodologia", "proceso"]

opciones_explicitas: ["Definir el problema", "Identificar restricciones", "Generar soluciones", "Evaluar resultados"]

respuesta_orden: ["Definir el problema", "Identificar restricciones", "Generar soluciones", "Evaluar resultados"]
tipo: ordenar

enunciado: "Ordene las etapas lógicas para abordar un problema de ingeniería de manera sistemática:"

explicacion: |
  El proceso comienza con la comprensión del problema, seguido de la delimitación de los límites (restricciones), la creación de alternativas y finalmente la validación de la mejor opción.
```

### 9 — Análisis de viabilidad de materiales

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["materiales", "viabilidad"]

variables:
  nombres: ["Acero", "Aluminio"]
  densidades: [7.8, 2.7]
  limites: [5.0, 3.0]
  resultados: [falso, verdadero]
  idx: uno_de([0, 1])

enunciado: "Se requiere un componente con una densidad máxima de {limites[idx]} g/cm³. El material seleccionado es {nombres[idx]} con una densidad de {densidades[idx]} g/cm³. ¿Es viable este material según la restricción de densidad?"

pasos:
  - "Identificar la densidad del material propuesto."
  - "Comparar la densidad del material con el límite máximo permitido."

respuesta: resultados[idx]
tipo: vf
explicacion: |
  La solución es viable si la propiedad física del material no excede el límite impuesto por la restricción de diseño. En este caso, {densidades[idx]} g/cm³ frente al límite de {limites[idx]} g/cm³.
```

### 10 — Cumplimiento de plazos de entrega

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["tiempo", "cronograma"]

variables:
  nombres_fase: ["diseño", "prototipado", "pruebas"]
  tiempos: [15, 30, 10]
  plazos: [20, 25, 12]
  idx: uno_de([0, 1, 2])
  nombre_fase: nombres_fase[idx]
  tiempo_estimado: tiempos[idx]
  plazo_maximo: plazos[idx]

enunciado: "Para la fase de {nombre_fase}, el tiempo estimado es de {tiempo_estimado} días, mientras que el plazo máximo permitido es de {plazo_maximo} días. ¿Se cumple con el plazo establecido?"

respuesta: tiempo_estimado <= plazo_maximo
tipo: vf

explicacion: |
  Se cumple el plazo cuando el tiempo estimado no supera el plazo máximo permitido. En este caso: {tiempo_estimado} días frente al límite de {plazo_maximo} días.
```

### 11 — Requisitos vs. Restricciones

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "definiciones"]

respuesta: "restricción"
tipo: mc
opciones_explicitas: ["requisito", "restricción", "objetivo", "variable"]

enunciado: "En el diseño de un sistema, un elemento que limita las opciones de solución (como un presupuesto máximo o un límite de peso) se denomina ________."

explicacion: |
  Un requisito describe lo que el sistema DEBE hacer (funcionalidad), mientras que una restricción impone límites sobre cómo debe ser construido o qué recursos puede consumir (presupuesto, tiempo, materiales).
```

### 12 — El error de la solución ideal

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["optimizacion", "errores_comunes"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que la 'solución óptima' es siempre aquella que maximiza el rendimiento técnico, ignorando las restricciones de costo y tiempo?"

explicacion: |
  Falso. En ingeniería, la solución óptima es un compromiso (trade-off) que satisface todos los requisitos y respeta todas las restricciones. Una solución técnicamente superior pero que excede el presupuesto es una solución inviable.
```

### 13 — Jerarquía de prioridades

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["gestion_de_proyectos", "priorizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El cliente exige un color específico (estético)", "El puente debe soportar 50 toneladas (seguridad)"], ["El software debe ser azul (estético)", "El software no debe colapsar con 100 usuarios (estabilidad)"]]

respuesta: "seguridad"
tipo: mc
opciones_explicitas: ["estética", "seguridad", "costo", "tiempo"]

enunciado: "Dada la situación: {escenarios[escenario_idx][1]}, si las restricciones de presupuesto se ven comprometidas, ¿qué tipo de restricción debe priorizarse siempre para garantizar la viabilidad del proyecto?"

explicacion: |
  Las restricciones de seguridad y estabilidad son críticas e innegociables. Si una solución no cumple con la seguridad, no es una solución válida, independientemente de su costo o estética.
```

### 14 — Ciclo de vida de la restricción

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "avanzado"
  tags: ["metodologia", "proceso_de_diseño"]

respuesta_orden: ["Identificación", "Análisis", "Cumplimiento", "Validación"]
tipo: ordenar

opciones_explicitas: ["Cumplimiento", "Identificación", "Validación", "Análisis"]

enunciado: "Ordene cronológicamente las etapas lógicas en el manejo de restricciones durante el proceso de diseño de un producto:"

explicacion: |
  Primero se identifican las limitaciones (Identificación), luego se estudia cómo afectan al diseño (Análisis), se diseña respetando esos límites (Cumplimiento) y finalmente se comprueba que se cumplieron (Validación).
```

### 15 — Restricciones implícitas

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["definicion_problema", "errores_comunes"]

respuesta: "explícitas"
tipo: completar
respuestas_validas:
  - "explícitas"

enunciado: "Las restricciones que no son mencionadas directamente por el cliente pero que son obligatorias por ley o normas técnicas se conocen como restricciones implícitas, mientras que las comunicadas directamente son ________."

explicacion: |
  Las restricciones explícitas son las dadas por el cliente (ej. "quiero que sea rojo"). Las implícitas son aquellas que el ingeniero debe conocer por conocimiento profesional (ej. normas de seguridad eléctrica o leyes ambientales).
```

### 16 — Requisito vs Restricción

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "definiciones"]

tipo: mc
opciones_explicitas: ["Un requisito define qué debe hacer el sistema, mientras que una restricción limita cómo debe hacerse.", "Un requisito es una limitación de recursos, mientras que una restricción es una funcionalidad deseada.", "Ambos términos son sinónimos en el diseño de ingeniería.", "El requisito es una limitación de tiempo y la restricción es una meta de rendimiento."]

enunciado: "En el contexto de la ingeniería de sistemas, ¿cuál es la distinción fundamental entre un requisito y una restricción?"

respuesta: "Un requisito define qué debe hacer el sistema, mientras que una restricción limita cómo debe hacerse."

explicacion: |
  Los requisitos describen las funciones o capacidades que el producto debe poseer (el "qué"), mientras que las restricciones imponen límites o condiciones de diseño que deben respetarse (el "cómo", como presupuesto, tiempo o normativas).
```

### 17 — Naturaleza de las restricciones

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["conceptos_fundamentales"]

tipo: vf
enunciado: "Las restricciones de diseño, como el presupuesto o la disponibilidad de materiales, son elementos que el ingeniero puede ignorar si la solución técnica es superior."

respuesta: falso

explicacion: |
  Las restricciones son límites inamovibles. Si una solución técnica es excelente pero excede el presupuesto o viola una norma de seguridad (restricción), la solución no es válida para el problema planteado.
```

### 18 — Clasificación de requerimientos

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["clasificacion", "requisitos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El sistema debe procesar 100 transacciones por segundo.", "Funcional"], ["El sistema debe ser de color azul.", "No Funcional"]]

tipo: completar
enunciado: "Considerando el escenario: '{escenarios[escenario_idx][0]}', este se clasifica como un requisito de tipo ___."
respuestas_validas:
  - "Funcional"
  - "No Funcional"
respuesta: escenarios[escenario_idx][1]

explicacion: |
  Los requisitos funcionales definen acciones o comportamientos específicos del sistema (lo que hace), mientras que los no funcionales (como peso, color o temperatura) definen atributos o cualidades de la solución.
```

### 19 — Etapas de resolución de problemas

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["metodologia", "proceso"]

tipo: ordenar
opciones_explicitas: ["Definición del problema y sus restricciones", "Generación de alternativas de solución", "Evaluación de soluciones bajo criterios de diseño", "Selección de la solución óptima"]

enunciado: "Ordene cronológicamente las etapas lógicas del proceso de diseño de ingeniería para abordar un problema con restricciones dadas:"

explicacion: |
  No se puede diseñar sin entender primero las limitaciones (restricciones). Una vez definido el problema, se exploran opciones, se comparan contra las restricciones y finalmente se elige la mejor.
respuesta_orden: ["Definición del problema y sus restricciones", "Generación de alternativas de solución", "Evaluación de soluciones bajo criterios de diseño", "Selección de la solución óptima"]
```

### 20 — El impacto de las restricciones

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "avanzado"
  tags: ["optimizacion", "toma_de_decisiones"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Aumentar la velocidad de un motor", "Reducir el costo de fabricación"], ["Mejorar la durabilidad de un material", "Reducir el peso de una estructura"]]
  objetivo: ["Optimizar el rendimiento", "Optimizar la economía"]
  conflicto: ["El costo de los materiales aumenta", "La resistencia estructural disminuye"]

tipo: mc
opciones_explicitas: ["El cumplimiento de la restricción suele entrar en conflicto con la optimización del objetivo.", "La restricción es el objetivo principal del ingeniero.", "Las restricciones eliminan la necesidad de optimizar.", "No existe conflicto entre objetivos y restricciones."]
respuesta: "El cumplimiento de la restricción suele entrar en conflicto con la optimización del objetivo."

enunciado: "Al intentar '{objetivo[caso_idx]}' en el caso de '{casos[caso_idx][0]}', es común que surja un conflicto con la restricción de '{conflicto[caso_idx]}'. ¿Cómo se define esta relación?"

explicacion: |
  En ingeniería, la optimización de un parámetro (ej. velocidad) suele penalizar otro (ej. costo o peso). El diseño consiste en encontrar el equilibrio óptimo dentro de las restricciones impuestas.
```

### 21 — Optimización de materiales

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["recursos", "optimizacion"]

variables:
  escenario: [150, 200, 350]
  idx: uno_de([0, 1, 2])
  límite: escenario[idx]

enunciado: "Se debe diseñar un soporte estructural cuyo peso total no puede exceder los {límite} kg. Si el material seleccionado tiene una densidad de 5 kg/m³, ¿cuál es el volumen máximo permitido para cumplir con esta restricción?"

pasos:
  - "Identificar el límite de masa: {límite} kg"
  - "Utilizar la fórmula de densidad: Volumen = Masa / Densidad"
  - "Calcular: {límite} / 5"

respuesta: redondear(límite / 5, 2)
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Para cumplir con la restricción de masa, el volumen debe ser igual o menor al resultado del cálculo. El volumen máximo es de {redondear(límite / 5, 2)} m³.
```

### 22 — Cumplimiento de plazos

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["tiempo", "restricciones"]

variables:
  proyecto: [[120, "120 días"], [180, "180 días"], [240, "240 días"]]
  idx: uno_de([0, 1, 2])
  plazo_total: proyecto[idx][0]
  unidad_plazo: proyecto[idx][1]

enunciado: "Un proyecto de infraestructura tiene un plazo de entrega estricto de {plazo_total} {unidad_plazo}. Si la fase de cimentación dura 45 días y la fase de estructura dura 100 días, ¿se cumple con la restricción de tiempo si la fase de acabado requiere 100 días adicionales?"

respuesta: falso
tipo: vf

explicacion: |
  La suma de las fases es 45 + 100 + 100 = 245 días. Como 245 > {plazo_total}, la restricción de tiempo se viola.
```

### 23 — Presupuesto de componentes

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["costos", "presupuesto"]

variables:
  datos: [[500, "500 USD"], [800, "800 USD"], [1200, "1200 USD"]]
  idx: uno_de([0, 1, 2])
  presupuesto: datos[idx][0]
  moneda: datos[idx][1]

enunciado: "El presupuesto asignado para un prototipo es de {presupuesto} {moneda}. Se deben comprar 3 sensores de $150 cada uno y un controlador de $400. El costo total de los componentes es: ___"

respuesta: "850 USD"
tipo: completar
respuestas_validas:
  - "850 USD"

explicacion: |
  El cálculo es (3 * 150) + 400 = 450 + 400 = 850. El costo total es 850 USD.
```

### 24 — Secuencia de montaje

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["procesos", "orden"]

enunciado: "Para asegurar la integridad estructural de un puente, se deben seguir estrictamente las siguientes fases de construcción. Ordene las etapas de forma lógica:"

opciones_explicitas: ["Cimentación", "Estructura principal", "Colocación de tableros", "Acabados y señalización"]
respuesta_orden: ["Cimentación", "Estructura principal", "Colocación de tableros", "Acabados y señalización"]
tipo: ordenar

explicacion: |
  En ingeniería civil, la secuencia lógica siempre comienza por la base (cimentación), sigue con el esqueleto (estructura), la superficie de rodamiento (tableros) y finalmente los detalles (acabados).
```

### 25 — Tolerancia de carga

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "avanzado"
  tags: ["seguridad", "carga"]

variables:
  carga_max: [5000, 8000, 10000]
  idx: uno_de([0, 1, 2])
  valor_max: carga_max[idx]
  es_segura: ["falso", "verdadero", "verdadero"][idx]
  comparacion_texto: ["6750 > 5000", "6750 <= 8000", "6750 <= 10000"][idx]

enunciado: "Una viga tiene una capacidad de carga máxima de {valor_max} N. Si se aplica una carga de 4500 N y un factor de seguridad de 1.5, ¿la estructura es segura (el esfuerzo aplicado * factor de seguridad <= carga máxima)?"

respuesta: es_segura
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

explicacion: |
  Calculamos el esfuerzo de diseño: 4500 * 1.5 = 6750 N. 
  Si la carga máxima es de {valor_max} N, comparamos: 
  {comparacion_texto}
```
