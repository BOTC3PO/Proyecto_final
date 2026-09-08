# Ingenieria — Prototipo (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de prototipo

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_conceptos_basicos"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

respuesta: "versión preliminar y simplificada de la solución para probar ideas antes de la versión final"
tipo: completar
respuestas_validas:
  - "versión preliminar y simplificada de la solución para probar ideas antes de la versión final"

enunciado: "Un prototipo se define como una ___."

explicacion: |
  El prototipo es una representación temprana de un producto o sistema que permite validar hipótesis de diseño y funcionalidad antes de la producción masiva.
```

### 2 — Propósito del prototipado

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_objetivos"
  nivel: "basico"
  tags: ["objetivo", "validacion"]

opciones_explicitas: ["A) Maximizar la estética del producto final", "B) Probar ideas y reducir riesgos de diseño", "C) Reemplazar la fase de fabricación definitiva", "D) Aumentar el costo de producción"]

respuesta: "B) Probar ideas y reducir riesgos de diseño"
tipo: mc

enunciado: "¿Cuál es el objetivo principal de crear un prototipo en un proceso de ingeniería?"

explicacion: |
  El prototipado busca validar conceptos, detectar errores tempranos y asegurar que la solución propuesta sea viable, minimizando el riesgo antes de la inversión final.
```

### 3 — Fidelidad del prototipo

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_fidelidad"
  nivel: "intermedio"
  tags: ["fidelidad", "low_fidelity", "high_fidelity"]

variables:
  escenario: uno_de([["Baja fidelidad", "se enfoca en la estructura y flujo básico, con pocos detalles visuales"], ["Alta fidelidad", "se parece mucho al producto final en apariencia y funcionalidad"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Baja fidelidad", "Alta fidelidad"]

enunciado: "Un prototipo de {escenario[0]} es aquel que {escenario[1]}."

explicacion: |
  La fidelidad se refiere al nivel de detalle y realismo del prototipo. Los de baja fidelidad son rápidos y baratos, mientras que los de alta fidelidad son casi indistinguibles del producto final.
```

### 4 — Verdad o Falso: Iteración

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_iteracion"
  nivel: "basico"
  tags: ["iteracion", "mejora_continua"]

respuesta: falso
tipo: vf

enunciado: "El proceso de prototipado es lineal y no requiere volver a las etapas anteriores una vez que el prototipo ha sido construido."

explicacion: |
  Falso. El prototipado es un proceso iterativo; los resultados de las pruebas suelen llevar a rediseños y nuevas versiones del prototipo para corregir fallos.
```

### 5 — Ciclo de vida del prototipo

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_ciclo_vida"
  nivel: "intermedio"
  tags: ["pasos", "proceso"]

opciones_explicitas: ["Definir requisitos", "Construir prototipo", "Probar prototipo", "Analizar resultados"]

respuesta_orden: ["Definir requisitos", "Construir prototipo", "Probar prototipo", "Analizar resultados"]
tipo: ordenar

enunciado: "Ordene las etapas lógicas de un ciclo de prototipado funcional:"

explicacion: |
  Un ciclo estándar comienza con la definición de qué se quiere probar, seguido de la construcción, la ejecución de pruebas y finalmente el análisis de los datos obtenidos para decidir si se itera o se avanza.
```

### 6 — El propósito del prototipado

```
metadata:
  materia: "ingenieria"
  tema: "prototipado_conceptos"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

respuesta: "validar"
tipo: mc
opciones_explicitas: ["validar", "finalizar", "producir", "comercializar"]

enunciado: "Un prototipo es una versión preliminar y simplificada de una solución cuyo objetivo principal es _______ ideas antes de comprometer recursos en la versión final."

explicacion: |
  El prototipado permite fallar rápido y barato. Al probar una idea mediante un prototipo, se busca validar si la solución propuesta resuelve el problema antes de pasar a la fase de producción masiva.
```

### 7 — Ciclo de desarrollo de un prototipo

```
metadata:
  materia: "ingenieria"
  tema: "ciclo_vida_prototipo"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

variables:
  pasos_orden: ["Identificar necesidad", "Construir prototipo", "Testear con usuarios", "Iterar diseño"]

respuesta_orden: ["Identificar necesidad", "Construir prototipo", "Testear con usuarios", "Iterar diseño"]
tipo: ordenar
opciones_explicitas: ["Identificar necesidad", "Construir prototipo", "Testear con usuarios", "Iterar diseño"]

enunciado: "Ordene cronológicamente las etapas de un proceso de prototipado iterativo para asegurar la mejora continua del producto."

explicacion: |
  El proceso comienza con la identificación de la necesidad, seguido de la construcción de una versión mínima, la validación con el usuario real y, finalmente, la iteración basada en el feedback obtenido.
```

### 8 — Evaluación de fidelidad

```
metadata:
  materia: "ingenieria"
  tema: "fidelidad_prototipo"
  nivel: "intermedio"
  tags: ["fidelidad", "low_fi"]

respuesta: falso
tipo: vf

enunciado: "Un prototipo de baja fidelidad (low-fidelity) tiene como característica principal presentar un aspecto visual y funcional muy cercano al producto final real."

explicacion: |
  Falso. Los prototipos de baja fidelidad (como bocetos en papel) son rápidos y económicos, pero carecen de realismo visual. Los de alta fidelidad son los que se acercan a la versión final.
```

### 9 — Análisis de costos de error

```
metadata:
  materia: "ingenieria"
  tema: "gestion_riesgo"
  nivel: "avanzado"
  tags: ["costos", "riesgo"]

respuesta: 990
tipo: completar
tolerancia_abs: 0

enunciado: "Si el costo de corregir un error en fase de prototipado es de $10 y en fase de producción es de $1000, ¿cuál es la diferencia de costo (en unidades monetarias) entre ambos escenarios?"

pasos:
  - "Identificar el costo en prototipado: 10"
  - "Identificar el costo en producción: 1000"
  - "Calcular la diferencia: 1000 - 10 = 990"

explicacion: |
  La detección temprana de errores mediante prototipos reduce drásticamente los costos de ingeniería. En este caso, el error en producción es 100 veces más costoso que en la fase de prototipado.
```

### 10 — Identificación de componentes

```
metadata:
  materia: "ingenieria"
  tema: "componentes_prototipo"
  nivel: "basico"
  tags: ["elementos"]

respuesta: "funcionalidad"
tipo: completar
respuestas_validas:
  - "funcionalidad"

enunciado: "En un prototipo de concepto (Proof of Concept), el enfoque principal no es la estética del producto, sino validar su _______ principal."

explicacion: |
  El Proof of Concept (PoC) busca demostrar que una idea es técnicamente viable. Por ello, se prioriza la funcionalidad básica sobre el diseño visual o el empaque.
```

### 11 — Propósito del prototipo

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_conceptos"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

respuesta: "validar"
tipo: "completar"
respuestas_validas:
  - "validar"
  - "verificar"
  - "probar"

enunciado: "El objetivo principal de crear un prototipo no es construir el producto final, sino _______ las hipótesis de diseño y la funcionalidad de la solución."

explicacion: |
  Un prototipo es una herramienta de aprendizaje. Su fin no es la estética ni la perfección, sino validar si la idea resuelve el problema planteado antes de invertir grandes recursos.
```

### 12 — Prototipo vs Producto Final

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_diferencias"
  nivel: "basico"
  tags: ["error_comun", "gestion_proyectos"]

respuesta: falso
tipo: "vf"

enunciado: "Un prototipo funcional que permite probar la lógica de un sistema, pero que utiliza materiales de baja fidelidad y no es apto para la venta al público, es considerado una versión final del producto."

pasos:
  - "Evaluar si el objetivo del prototipo es la validación o la comercialización."
  - "Comparar la durabilidad y estética del prototipo con los estándares de mercado."

explicacion: |
  El prototipo es una versión preliminar y simplificada. Si el objeto está destinado a ser vendido y tiene todas las características de producción, ya no es un prototipo, es el producto final.
```

### 13 — Fidelidad del prototipo

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_fidelidad"
  nivel: "intermedio"
  tags: ["fidelidad", "costos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Baja fidelidad", "rápido y económico"], ["Alta fidelidad", "detallado y costoso"]]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["rápido y económico", "detallado y costoso", "solo para marketing", "no tiene utilidad"]

enunciado: "Si estamos en una fase inicial de diseño y necesitamos un prototipo de {escenarios[escenario_idx][0]}, este suele ser _______."

explicacion: |
  La elección de la fidelidad depende de la pregunta que queramos responder. Los prototipos de baja fidelidad (como bocetos o maquetas de cartón) son ideales para validar conceptos rápidamente sin gastar presupuesto.
```

### 14 — Ciclo de iteración

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_iteracion"
  nivel: "intermedio"
  tags: ["metodologia", "iteracion"]

respuesta_orden: ["Construir prototipo", "Probar prototipo", "Analizar resultados", "Refinar diseño"]
tipo: "ordenar"
opciones_explicitas: ["Construir prototipo", "Probar prototipo", "Analizar resultados", "Refinar diseño"]

enunciado: "Para que el proceso de prototipado sea efectivo en un ciclo de mejora continua, se deben seguir estos pasos en orden:"

explicacion: |
  El proceso es iterativo. El análisis de los resultados obtenidos en las pruebas es lo que permite refinar el diseño para la siguiente versión del prototipo.
```

### 15 — El error del "Prototipo Perfecto"

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_errores"
  nivel: "avanzado"
  tags: ["eficiencia", "gestion_recursos"]

respuesta: falso
tipo: vf

enunciado: "Es un error común en la gestión de proyectos dedicar demasiado tiempo y recursos a que un prototipo sea estéticamente perfecto antes de haber validado su funcionalidad básica."

explicacion: |
  Este error se conoce como "over-engineering" en la fase de prototipado. El objetivo es fallar rápido y barato para aprender; perfeccionar la estética antes de validar la utilidad es un desperdicio de recursos en etapas tempranas.
```

### 16 — Prototipo vs Producto Final

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_vs_producto_final"
  nivel: "basico"
  tags: ["diseño", "desarrollo"]

respuesta: "verificar la viabilidad de una idea"
tipo: completar
respuestas_validas:
  - "verificar la viabilidad de una idea"
  - "validar conceptos"
  - "probar ideas"

enunciado: "A diferencia del producto final, cuyo objetivo es la producción en serie y la satisfacción del cliente, el propósito principal de un prototipo es ___."

explicacion: |
  El prototipo es una herramienta de aprendizaje y validación técnica, no un producto destinado a la venta o uso final.
```

### 17 — El objetivo del prototipo

```
metadata:
  materia: "ingenieria"
  tema: "caracteristicas_prototipo"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf
enunciado: "Un prototipo es una versión preliminar y simplificada de la solución que busca probar ideas antes de la versión final. ¿Es el prototipo la versión definitiva del diseño?"

explicacion: |
  Falso. El prototipo es una etapa de experimentación, no el resultado final.
```

### 18 — Diferencias clave

```
metadata:
  materia: "ingenieria"
  tema: "comparacion_prototipo"
  nivel: "intermedio"
  tags: ["metodologia"]

respuesta: "un prototipo es una versión simplificada para probar ideas"
tipo: mc
opciones_explicitas: ["un prototipo es una versión simplificada para probar ideas", "un prototipo es el producto listo para el mercado", "un prototipo es una versión con todos los materiales finales", "un prototipo es un manual de instrucciones"]

enunciado: "¿Cuál es la distinción fundamental entre un prototipo y un producto terminado?"

explicacion: |
  El prototipo se enfoca en la funcionalidad y la validación de hipótesis de diseño, mientras que el producto terminado se enfoca en la manufacturabilidad, estética y calidad comercial.
```

### 19 — Ciclo de desarrollo de un prototipo

```
metadata:
  materia: "ingenieria"
  tema: "ciclo_prototipado"
  nivel: "intermedio"
  tags: ["procesos"]

respuesta_orden: ["definir requerimientos", "construir prototipo", "evaluar resultados", "iterar diseño"]
tipo: ordenar
opciones_explicitas: ["definir requerimientos", "construir prototipo", "evaluar resultados", "iterar diseño"]

enunciado: "Ordene las etapas lógicas en el proceso de creación de un prototipo para validar una solución técnica:"

explicacion: |
  El proceso es cíclico e iterativo: primero se sabe qué se necesita, se construye, se prueba y se vuelve a diseñar según los errores encontrados.
```

### 20 — Fidelidad del prototipo

```
metadata:
  materia: "ingenieria"
  tema: "fidelidad_prototipo"
  nivel: "avanzado"
  tags: ["especificaciones"]

respuesta: verdadero
tipo: vf
enunciado: "Un prototipo de alta fidelidad se distingue de uno de baja fidelidad porque posee una apariencia y funcionalidad muy cercanas al producto final. ¿Es esto correcto?"

explicacion: |
  La fidelidad se refiere a qué tan cerca está el prototipo del producto real en términos de estética, interacción y precisión técnica.
```

### 21 — El propósito del prototipo

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_conceptos"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["un sensor de temperatura para un invernadero", "validar la precisión de la lectura"], ["un nuevo diseño de ala para un dron", "probar la estabilidad aerodinámica"]]

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "validar la precisión de la lectura"
  - "probar la estabilidad aerodinámica"

enunciado: "En el desarrollo de {escenarios[escenario_idx][0]}, el objetivo principal de crear un prototipo es ___."

explicacion: |
  Un prototipo es una versión preliminar que permite testear hipótesis específicas antes de la producción masiva.
```

### 22 — Características de un prototipo de baja fidelidad

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_fidelidad"
  nivel: "basico"
  tags: ["fidelidad", "costos"]

variables:
  tipo_prototipo_idx: uno_de([0,1])
  datos: [["baja fidelidad", "rápido y económico"], ["alta fidelidad", "lento y costoso"]]

respuesta: datos[tipo_prototipo_idx][1]
tipo: mc
opciones_explicitas: ["rápido y económico", "lento y costoso", "extremadamente preciso", "imposible de modificar"]

enunciado: "Si estamos construyendo un prototipo de {datos[tipo_prototipo_idx][0]}, su principal ventaja es que es ___."

explicacion: |
  Los prototipos de baja fidelidad (como bocetos o maquetas simples) priorizan la velocidad y el bajo costo para fallar rápido y barato.
```

### 23 — Ciclo de iteración del prototipo

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_iteracion"
  nivel: "intermedio"
  tags: ["proceso", "iteracion"]

tipo: ordenar
opciones_explicitas: ["Diseño", "Prototipado", "Pruebas", "Análisis", "Descarte"]
respuesta_orden: ["Diseño", "Prototipado", "Pruebas", "Análisis", "Descarte"]

enunciado: "Ordene las etapas lógicas para mejorar un prototipo tras un testeo fallido:"

explicacion: |
  El proceso de ingeniería es iterativo: se diseña, se construye, se prueba, se analiza el error y se vuelve a diseñar.
```

### 24 — Verdad o Falso: El prototipo final

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_diferencias"
  nivel: "basico"
  tags: ["falso", "conceptos"]

respuesta: falso

tipo: vf

enunciado: "Un prototipo es una versión simplificada que debe tener exactamente las mismas características y materiales que el producto final."

explicacion: |
  Falso. El prototipo suele ser una versión simplificada (MVP o prototipo funcional) que omite detalles estéticos o de manufactura para centrarse en la funcionalidad técnica.
```

### 25 — Evaluación de resultados

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_evaluacion"
  nivel: "intermedio"
  tags: ["metricas", "decision"]

variables:
  caso_idx: uno_de([0,1])
  descripcion: ["El prototipo falló en la prueba de carga", "El prototipo superó las pruebas de carga"]
  accion: ["revisar el diseño estructural", "proceder a la fase de producción"]

respuesta: accion[caso_idx]
tipo: mc
opciones_explicitas: ["revisar el diseño estructural", "proceder a la fase de producción", "cancelar el proyecto", "aumentar el presupuesto"]

enunciado: "Si tras las pruebas el prototipo presenta un comportamiento de: {descripcion[caso_idx]}, la acción inmediata debe ser ___."

explicacion: |
  La fase de pruebas del prototipo sirve para tomar decisiones: si falla, se itera (se vuelve a diseñar); si tiene éxito, se avanza hacia la versión final.
```
