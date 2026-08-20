# Resolucion Problemas — Analizar causas y restricciones (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de problema

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

respuesta: "brecha"
tipo: completar
respuestas_validas:
  - "brecha"
  - "diferencia"
  - "gap"

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
  escenarios: [["El motor no arranca", "Falta de combustible"], ["Un proyecto se retrasa", "Mala gestión de tiempos"]]

respuesta: "Causa"
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

respuesta_orden: ["Causa", "Problema", "Efecto"]
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
  casos: [["No hay dinero para comprar insumos", "Presupuesto limitado"], ["La máquina se rompió por falta de aceite", "Falta de mantenimiento"]]

respuesta: "Es una restricción"
tipo: mc
opciones_explicitas: ["Es una causa", "Es una restricción", "Es un efecto"]

enunciado: "En el caso '{casos[caso_idx][0]}', el factor '{casos[caso_idx][1]}' actúa como una:"

explicacion: |
  Si el factor limita lo que se puede hacer sin ser el origen del problema, es una restricción. Si es el origen, es la causa.
```

### 6 — El cuello de botella en la producción

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar_causas_y_restricciones"
  nivel: "intermedio"
  tags: ["analisis", "causas", "restricciones"]

variables:
  escenario: uno_de([["Máquina A (10 u/h) -> Máquina B (5 u/h) -> Embalaje (15 u/h)", "Embalaje"], ["Estación 1 (20 u/h) -> Estación 2 (15 u/h) -> Estación 3 (10 u/h)", "Estación 3"], ["Corte (50 u/h) -> Pegado (30 u/h) -> Secado (40 u/h)", "Pegado"]])

enunciado: "En un proceso de producción lineal, la capacidad total del sistema está limitada por el componente más lento. Según el escenario actual, el cuello de botella es la {escenario[0]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Máquina A", "Máquina B", "Embalaje", "Estación 1", "Estación 2", "Estación 3", "Corte", "Pegado", "Secado"]

explicacion: |
  El cuello de botella es la restricción que determina la capacidad máxima del sistema. En cualquier proceso en serie, el flujo está limitado por la etapa con menor capacidad (la más lenta).
```

### 7 — Identificación de causas raíz

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar_causas_y_restricciones"
  nivel: "basico"
  tags: ["causa_raiz", "diagnostico"]

variables:
  problema: uno_de([["El servidor se cae cada vez que hay 100 usuarios simultáneos.", "Falta de memoria RAM"], ["Las ventas bajaron un 50% tras el cambio de diseño de la web.", "Interfaz de usuario confusa"], ["El motor se calienta después de 2 horas de uso continuo.", "Sistema de refrigeración insuficiente"]])

enunciado: "Si el problema detectado es '{problema[0]}', la causa raíz más probable es: ___."

respuesta: problema[1]
tipo: completar
respuestas_validas:
  - "Falta de memoria RAM"
  - "Interfaz de usuario confusa"
  - "Sistema de refrigeración insuficiente"

explicacion: |
  Para resolver un problema, primero debemos distinguir entre el síntoma (el servidor se cae) y la causa raíz (falta de memoria). Resolver el síntoma sin atacar la causa no soluciona el problema a largo plazo.
```

### 8 — Restricciones de presupuesto

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar_causas_y_restricciones"
  nivel: "basico"
  tags: ["restricciones", "presupuesto"]

variables:
  caso: uno_de([[1000, 800], [500, 600], [2000, 1500]])

enunciado: "Se propone una solución que cuesta {caso[0]} unidades, pero el presupuesto máximo disponible es de {caso[1]} unidades. ¿Es la solución viable bajo la restricción presupuestaria actual?"

respuesta: caso[0] <= caso[1]
tipo: completar
explicacion: |
  Una restricción es un límite impuesto que la solución debe respetar. Si el costo excede el presupuesto, la solución es inviable aunque sea técnicamente perfecta.
```

### 9 — Secuencia de análisis de problemas

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar_causas_y_restricciones"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

enunciado: "Ordene los pasos lógicos para realizar un análisis de causa-raíz efectivo:"

pasos:
  - "Identificar el síntoma o problema visible"
  - "Analizar las restricciones del entorno"
  - "Identificar la causa raíz mediante el método de los 5 porqués"
  - "Proponer y validar una solución"

respuesta_orden: ["Identificar el síntoma o problema visible", "Analizar las restricciones del entorno", "Identificar la causa raíz mediante el método de los 5 porqués", "Proponer y validar una solución"]
tipo: ordenar
opciones_explicitas: ["Identificar el síntoma o problema visible", "Analizar las restricciones del entorno", "Identificar la causa raíz mediante el método de los 5 porqués", "Proponer y validar una solución"]

explicacion: |
  El orden lógico requiere primero entender qué está pasando (síntoma), qué nos impide actuar (restricciones), por qué está pasando (causa) y cómo arreglarlo (solución).
```

### 10 — Impacto de las restricciones

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar_causas_y_restricciones"
  nivel: "avanzado"
  tags: ["restricciones", "optimización"]

variables:
  escenario: uno_de([["optimizar el tiempo de entrega", "reducir costos"], ["aumentar la calidad del producto", "reducir el uso de materiales"], ["expandir el mercado", "minimizar la inversión inicial"]])

enunciado: "Si el objetivo principal es {escenario[0]}, pero tenemos una restricción de presupuesto estricta, la solución óptima probablemente deba enfocarse en: ___."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["optimizar el tiempo de entrega", "reducir costos", "aumentar la calidad del producto", "reducir el uso de materiales", "expandir el mercado", "minimizar la inversión inicial"]

explicacion: |
  Las restricciones obligan a realizar "trade-offs" (compromisos). Si el dinero es limitado, la prioridad de la solución debe ser la eficiencia en costos para poder alcanzar el objetivo principal.
```

### 11 — El error de la causa raíz

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["causa-raiz", "diagnostico"]

respuesta: "causa_raiz"
tipo: "mc"
opciones_explicitas: ["síntoma", "consecuencia", "causa_raiz", "efecto secundario"]

enunciado: "Si un usuario reporta que una aplicación se cierra inesperadamente, y el equipo de soporte decide simplemente reiniciar el servidor para solucionar el problema, están tratando un ___ en lugar de la causa real."

explicacion: |
  Confundir un síntoma con la causa raíz es un error común. El síntoma es la manifestación visible (el cierre de la app), mientras que la causa raíz es el origen técnico que lo provoca. Si solo tratas el síntoma, el problema volverá a ocurrir.
```

### 12 — Identificación de restricciones

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["restricciones", "limitaciones"]

respuesta: verdadero
tipo: "vf"

enunciado: "Las restricciones de un problema son factores externos o internos que limitan las posibles soluciones (como el presupuesto o el tiempo) y deben ser analizadas antes de proponer una solución definitiva."

explicacion: |
  Correcto. Ignorar las restricciones (como el presupuesto, la tecnología disponible o la normativa legal) suele llevar a diseñar soluciones teóricamente perfectas pero imposibles de implementar en la realidad.
```

### 13 — El ciclo de análisis de problemas

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

respuesta_orden: ["identificar_problema", "analizar_causas", "definir_restricciones", "proponer_solucion"]
tipo: "ordenar"
opciones_explicitas: ["identificar_problema", "analizar_causas", "definir_restricciones", "proponer_solucion"]

enunciado: "Ordena los pasos lógicos para abordar un problema de manera estructurada, evitando saltar directamente a la solución sin entender el contexto."

explicacion: |
  El orden lógico asegura que la solución se base en hechos. Primero se identifica qué está pasando, luego se busca el porqué (causas), se entienden los límites (restricciones) y finalmente se diseña la solución.
```

### 14 — Causas vs. Correlaciones

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "avanzado"
  tags: ["logica", "causalidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Cada vez que aumenta la temperatura, las ventas de helados suben.", "correlacion"], ["Un cable suelto causa el cortocircuito en la máquina.", "causa"]]

respuesta: datos[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["correlacion", "causa"]

enunciado: "En el siguiente escenario, ¿se ha identificado una causa o una correlación? {datos[escenario_idx][0]}"

explicacion: |
  Es vital distinguir entre dos eventos que ocurren al mismo tiempo (correlación) y un evento que produce directamente al otro (causalidad). Confundir esto lleva a aplicar soluciones ineficaces.
```

### 15 — Completar el concepto de restricción

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["terminologia", "conceptos"]

respuesta: "recursos"
tipo: "completar"
respuestas_validas:
  - "recursos"
  - "tiempo"
  - "presupuesto"

enunciado: "Cuando un proyecto tiene un límite de dinero asignado, estamos ante una restricción de ___."

explicacion: |
  El dinero es un recurso financiero. Las restricciones de recursos son límites en la cantidad de materia prima, personal, tiempo o dinero disponibles para ejecutar una solución.
```

### 16 — Diferencia entre Causa y Síntoma

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["diagnostico", "causa_raiz"]

respuesta: "causa"
tipo: "completar"
respuestas_validas:
  - "causa"
  - "causa raíz"

enunciado: "En el análisis de problemas, mientras que un síntoma es la manifestación visible del error, la ___ es el origen real que lo produce."

explicacion: |
  Confundir un síntoma con la causa es uno de los errores más comunes. Si solo tratas el síntoma (ej. limpiar un derrame de aceite), el problema persistirá porque no atacaste la causa (ej. una junta rota).
```

### 17 — Restricciones vs. Limitaciones

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["restricciones", "limitaciones"]

opciones_explicitas: ["Una limitación es un obstáculo externo que impide el éxito", "Una restricción es un parámetro obligatorio que define el espacio de solución", "Ambos términos son sinónimos en la gestión de proyectos", "Las restricciones son opcionales y las limitaciones son obligatorias"]

respuesta: "Una restricción es un parámetro obligatorio que define el espacio de solución"
tipo: "mc"

enunciado: "Si estamos diseñando un motor y debemos cumplir con una norma de emisiones de gases, estamos operando bajo una restricción. ¿Cuál de las siguientes afirmaciones describe correctamente qué es una restricción?"

explicacion: |
  Las restricciones son condiciones impuestas que el diseño DEBE satisfacer (hard constraints), mientras que las limitaciones suelen ser factores que restringen la libertad de acción pero no necesariamente invalidan la solución si se gestionan.
```

### 18 — Identificación de Causa Raíz

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["causa_raiz", "verdadero_falso"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es verdadero o falso que, en un análisis de causa raíz, si una solución elimina el síntoma pero el problema vuelve a aparecer, significa que no se ha identificado la causa raíz?"

explicacion: |
  Verdadero. Si el problema reaparece, significa que solo se trató una consecuencia o síntoma, y la causa subyacente permanece activa.
```

### 19 — Jerarquía de Análisis de Problemas

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "avanzado"
  tags: ["metodologia", "ordenar"]

opciones_explicitas: ["Identificar el síntoma", "Analizar las restricciones del entorno", "Determinar la causa raíz", "Implementar la solución definitiva"]

respuesta_orden: ["Identificar el síntoma", "Analizar las restricciones del entorno", "Determinar la causa raíz", "Implementar la solución definitiva"]
tipo: "ordenar"

enunciado: "Ordena los pasos lógicos para un proceso de resolución de problemas efectivo, desde el primer contacto con la anomalía hasta la resolución:"

explicacion: |
  Un proceso lógico requiere primero reconocer que algo anda mal (síntoma), entender qué límites tenemos para actuar (restricciones), encontrar el origen (causa raíz) y finalmente actuar.
```

### 20 — Impacto de las Restricciones

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["restricciones", "optimizacion"]

variables:
  caso: uno_de([["El presupuesto es de $500", "costo"], ["La entrega es mañana", "tiempo"], ["Solo se puede usar madera", "material"]])

opciones_explicitas: ["Las restricciones reducen la calidad de la solución", "Las restricciones definen el conjunto de soluciones posibles", "Las restricciones son causas del problema", "Las restricciones son síntomas del problema"]

respuesta: "Las restricciones definen el conjunto de soluciones posibles"
tipo: "mc"

enunciado: "Al analizar un problema, si nos enfrentamos a un límite de {caso[0]}, estamos ante una restricción de tipo {caso[1]}. ¿Cuál es la función principal de estas en el proceso de diseño?"

explicacion: |
  Las restricciones no son necesariamente "malas"; su función es delimitar el espacio de búsqueda para que las soluciones propuestas sean realistas y aplicables al contexto.
```

### 21 — Identificación de la causa raíz

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["causa-raiz", "analisis"]

variables:
  datos: [["El servidor se cae cada vez que hay un pico de tráfico", "Falta de escalabilidad de hardware"], ["La máquina tiene fugas de aceite", "Desgaste de sellos de goma"], ["El cliente no compra el producto", "Precio superior al de la competencia"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Falta de escalabilidad de hardware", "Desgaste de sellos de goma", "Precio superior al de la competencia"]

enunciado: "En el siguiente caso: '{datos[idx][0]}', ¿cuál es la causa raíz más probable que debe abordarse para solucionar el problema?"

explicacion: |
  Para resolver un problema, es vital distinguir entre el síntoma (lo que se ve) y la causa raíz (lo que lo genera). En este caso, el síntoma es la caída del servidor, pero la causa es la falta de capacidad de escalado.
```

### 22 — Restricciones de presupuesto

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["restricciones", "presupuesto"]

variables:
  datos: [[1500, "Presupuesto excedido"], [500, "Presupuesto suficiente"], [2000, "Presupuesto insuficiente"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Presupuesto excedido"
  - "Presupuesto suficiente"
  - "Presupuesto insuficiente"

enunciado: "Se tiene un proyecto con un costo estimado de {datos[idx][0]} USD. Si el límite máximo de gasto permitido es de 1000 USD, la restricción principal es: ___"

explicacion: |
  Las restricciones financieras son límites que condicionan la solución. Si el costo estimado supera el límite, la restricción es el presupuesto.
```

### 23 — Verificación de viabilidad técnica

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["viabilidad", "logica"]

respuesta: falso
tipo: vf
enunciado: "Si un problema requiere una solución que debe funcionar en un entorno sin conexión a internet, pero la solución propuesta depende exclusivamente de la nube, ¿es técnicamente viable esa solución?"

explicacion: |
  Una solución que depende de un recurso inexistente en el entorno de aplicación no es viable debido a la restricción de conectividad.
```

### 24 — Secuencia de análisis de problemas

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "avanzado"
  tags: ["metodologia", "orden"]

respuesta_orden: ["Identificar el síntoma", "Analizar las causas", "Definir restricciones", "Evaluar soluciones"]
tipo: ordenar
opciones_explicitas: ["Identificar el síntoma", "Analizar las causas", "Definir restricciones", "Evaluar soluciones"]

enunciado: "Ordene los pasos lógicos para el análisis de un problema antes de proponer una solución final:"

explicacion: |
  El proceso lógico comienza con la observación del síntoma, sigue con la búsqueda de la causa, la delimitación de qué podemos y no podemos hacer (restricciones) y finalmente la evaluación de alternativas.
```

### 25 — Impacto de las restricciones de tiempo

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["tiempo", "plazos"]

variables:
  escenario: [["Entrega en 2 días", "Tiempo insuficiente"], ["Entrega en 2 meses", "Tiempo suficiente"]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Tiempo insuficiente", "Tiempo suficiente"]

enunciado: "Si la tarea requiere 5 días de trabajo pero el plazo de entrega es de '{escenario[idx][0]}', la restricción temporal se traduce en: ___"

explicacion: |
  Cuando la duración necesaria de la solución es mayor al tiempo disponible, la restricción de tiempo actúa como un limitador crítico que impide la ejecución de la solución ideal.
```
