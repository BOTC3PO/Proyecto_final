# Resolucion Problemas — Trade offs y priorizacion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Trade-off

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

### 2 — Identificación de Trade-offs

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["identificacion", "escenarios"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Aumentar la velocidad de producción", "Aumentar los costos de mantenimiento"], ["Mejorar la calidad del producto", "Aumentar el precio de venta"]]
  consecuencias: [["Aumentar los costos de mantenimiento", "Aumentar el precio de venta"], ["Aumentar la velocidad de producción", "Mejorar la calidad del producto"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Aumentar la velocidad de producción", "Mejorar la calidad del producto", "Aumentar los costos de mantenimiento", "Aumentar el precio de venta"]

enunciado: "Si decidimos '{escenarios[escenario_idx][0]}', el trade-off directo (lo que se ve afectado negativamente) sería: {consecuencias[escenario_idx][0]}."

explicacion: |
  Un trade-off ocurre cuando la mejora en una dimensión (ej. velocidad) conlleva una degradación en otra (ej. mantenimiento o calidad).
```

### 3 — Priorización y Valor

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

### 4 — Elementos de la Decisión

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

### 5 — Proceso de Resolución

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

### 6 — El dilema de la velocidad de entrega

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["gestion_de_proyectos", "trade_offs"]

variables:
  escenario: uno_de([["Priorizar rapidez", "costo_alto"], ["Priorizar bajo costo", "calidad_baja"]])

enunciado: "Un equipo de desarrollo debe decidir entre lanzar una funcionalidad mañana con errores menores (sacrificando calidad) o lanzarla en un mes con alta calidad (sacrificando tiempo). Si el objetivo principal del cliente es la estabilidad del sistema, el trade-off implica que elegir la rapidez resultará en una ___."

respuesta: escenario[1]
tipo: completar
respuestas_validas:
  - "costo_alto"
  - "calidad_baja"

explicacion: |
  Al elegir la rapidez sobre la calidad, se está aceptando un trade-off donde la estabilidad se ve comprometida. En este escenario, la consecuencia directa es la baja calidad.
```

### 7 — Identificación de Trade-offs

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

### 8 — Priorización por impacto

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["priorizacion", "metodologias"]

variables:
  caso: uno_de([["reparar_bug_critico", "reparar_bug_estetico"], ["añadir_nueva_funcionalidad", "mejorar_documentacion"]])

enunciado: "Se tiene un presupuesto limitado de horas de trabajo. Según el criterio de 'Impacto en el Usuario Final', ¿cuál de las siguientes tareas debería priorizarse?"

opciones_explicitas: ["reparar_bug_critico", "reparar_bug_estetico", "añadir_nueva_funcionalidad", "mejorar_documentacion"]
respuesta: caso[0]
tipo: mc

explicacion: |
  La priorización efectiva requiere evaluar el impacto. Un bug crítico afecta la funcionalidad esencial, siendo prioritario sobre cambios estéticos o mejoras de soporte.
```

### 9 — Pasos para la toma de decisiones

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

### 10 — El costo de oportunidad

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

### 11 — El costo de oportunidad

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["conceptos_clave", "costo_de_oportunidad"]

variables:
  escenario: uno_de([["Invertir en marketing para ganar clientes", "Perder tiempo de desarrollo de producto"], ["Acelerar la entrega de un software", "Aumentar la cantidad de errores (bugs)"], ["Reducir costos de materiales", "Disminuir la calidad del producto final"]])

respuesta: "El costo de oportunidad"
tipo: mc
opciones_explicitas: ["El beneficio obtenido", "El costo de oportunidad", "La rentabilidad neta"]

enunciado: "Al elegir una opción, siempre renunciamos a la siguiente mejor alternativa. A esta renuncia se le denomina: ___"

explicacion: |
  El costo de oportunidad representa el valor de la mejor opción que se deja pasar al tomar una decisión. No es un costo monetario directo, sino el beneficio que se sacrifica.
```

### 12 — La falacia de la optimización local

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

### 13 — El dilema de la velocidad vs. calidad

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

### 14 — Priorización de tareas críticas

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

### 15 — La trampa de la solución "perfecta"

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
respuestas_validas:
  - "parálisis por análisis"
  - "optimización extrema"
  - "error de cálculo"

enunciado: "Intentar evaluar infinitas variables y evitar cualquier trade-off para alcanzar la solución perfecta suele conducir a la ___."

explicacion: |
  La parálisis por análisis ocurre cuando el esfuerzo por evitar un trade-off o tomar la decisión "ideal" impide la acción, lo cual es en sí mismo un costo de oportunidad enorme.
```

### 16 — Trade-off vs Eficiencia

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

### 17 — El Costo de Oportunidad

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["costo_oportunidad", "priorizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Elegir desarrollar una nueva función que tarda 3 meses", "perder la oportunidad de arreglar 5 bugs críticos"], ["Invertir todo el presupuesto en marketing", "no tener fondos para soporte técnico"]]

enunciado: "En el escenario: {escenarios[escenario_idx][0]}, el costo de oportunidad es: {escenarios[escenario_idx][1]}."

respuestas_validas:
  - "perder la oportunidad de arreglar 5 bugs críticos"
  - "no tener fondos para soporte técnico"
tipo: completar

explicacion: |
  El costo de oportunidad no es el valor de lo que elegimos, sino el valor de la mejor alternativa que sacrificamos al tomar esa decisión.
```

### 18 — Priorización vs Urgencia

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

### 19 — El Dilema Calidad-Velocidad

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

### 20 — Secuencia de Análisis de Decisión

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

### 21 — El dilema del lanzamiento

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["gestion_de_proyectos", "trade_offs"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Lanzar el producto hoy con errores menores", "Velocidad"], ["Retrasar el lanzamiento para asegurar calidad total", "Calidad"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Velocidad", "Calidad", "Costo", "Seguridad"]

enunciado: "Si una startup decide priorizar el 'Time-to-Market' para capturar usuarios rápidamente, está aceptando un trade-off donde la prioridad principal es la {datos[escenario_idx][0]} en detrimento de otros factores."

explicacion: |
  En gestión de proyectos, elegir una prioridad implica sacrificar otra (trade-off). Si el objetivo es salir rápido, la prioridad es la velocidad, aunque se sacrifique la perfección.
```

### 22 — Calidad vs. Presupuesto

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["costos", "priorizacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Reducir la calidad de materiales para bajar el precio", "Costo"], ["Aumentar el precio para usar materiales premium", "Calidad"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["Costo", "Calidad", "Tiempo", "Estética"]

enunciado: "Al decidir reducir la calidad de los componentes para disminuir el precio de venta, se está realizando un trade-off donde se prioriza el {casos[caso_idx][0]}."

explicacion: |
  El trade-off es la compensación entre dos variables contrapuestas. En este caso, bajar costos suele implicar una reducción en la calidad percibida o real.
```

### 23 — El impacto del cambio

```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["analisis_de_impacto"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Añadir una nueva funcionalidad compleja al software", "Aumenta el valor pero aumenta la complejidad"], ["Simplificar la interfaz de usuario", "Aumenta la facilidad de uso pero reduce la potencia"]]

respuesta: escenarios[escenario_idx][1]
tipo: completar
opciones_explicitas: [verdadero, falso]

enunciado: "Si aplicamos la decisión de {escenarios[escenario_idx][0]}, ¿es cierto que esto genera un trade-off donde una mejora en un aspecto conlleva una degradación o cambio en otro?"

explicacion: |
  Correcto. Todo cambio en un sistema complejo (software, organización, producto) tiene efectos secundarios. La esencia del trade-off es la existencia de estos efectos colaterales.
```

### 24 — Pasos para la priorización

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

### 25 — Evaluación de impacto

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
