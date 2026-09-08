# Ingenieria — Diseno conceptual (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de diseño conceptual

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["definicion", "etapas_proyecto"]

respuesta: "diseño conceptual"
tipo: completar
respuestas_validas:
  - "diseño conceptual"

enunciado: "La etapa en la que se establece la idea general de la solución, definiendo el enfoque y los principios básicos antes de entrar en detalles técnicos profundos, se denomina ___."

explicacion: |
  El diseño conceptual es la fase donde se abstrae el problema para proponer una solución lógica y funcional sin considerar aún materiales específicos o tolerancias mecánicas.
```

### 2 — Objetivo del diseño conceptual

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["objetivos", "metodologia"]

tipo: mc
opciones_explicitas: ["Definir la arquitectura general y la funcionalidad de la solución.", "Realizar el modelado matemático detallado de cada componente.", "Seleccionar los proveedores de materia prima.", "Realizar pruebas de fatiga en prototipos finales."]

respuesta: "Definir la arquitectura general y la funcionalidad de la solución."

enunciado: "¿Cuál es el objetivo principal de la fase de diseño conceptual?"

explicacion: |
  El diseño conceptual busca la arquitectura funcional. El modelado detallado, la selección de proveedores y las pruebas de fatiga pertenecen a etapas posteriores (diseño detallado y validación).
```

### 3 — Verdad o Falso: Abstracción

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["abstraccion", "conceptos"]

respuesta: verdadero

tipo: vf

enunciado: "En el diseño conceptual, la abstracción es una herramienta clave para simplificar el problema y centrarse en la lógica de la solución en lugar de en los detalles constructivos."

explicacion: |
  Correcto. La abstracción permite ignorar detalles irrelevantes en esta etapa para asegurar que la solución propuesta realmente resuelva el problema fundamental.
```

### 4 — Fases del proceso de diseño

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["secuencia", "metodologia"]

respuesta_orden: ["Diseño conceptual", "Diseño detallado", "Prototipado y validación"]
tipo: ordenar

opciones_explicitas: ["Diseño conceptual", "Diseño detallado", "Prototipado y validación"]

enunciado: "Ordene las siguientes etapas de un proceso de desarrollo de ingeniería desde la concepción hasta la validación:"

explicacion: |
  El flujo lógico comienza con la idea (conceptual), sigue con el detalle técnico (detallado) y termina con la verificación de la solución (prototipado).
```

### 5 — Elementos del diseño conceptual

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["componentes", "requisitos"]

respuesta: "requisitos"
tipo: completar
respuestas_validas:
  - "requisitos"

enunciado: "El diseño conceptual debe basarse primordialmente en los ___ del cliente y las restricciones del problema."

explicacion: |
  Los requisitos son la base de cualquier diseño; si el diseño conceptual no satisface los requisitos, el proyecto fallará independientemente de qué tan buen detalle técnico tenga después.
```

### 6 — El primer paso del diseño

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["metodologia", "definicion"]

respuesta: "definicion_problema"
tipo: "mc"
opciones_explicitas: ["definicion_problema", "seleccion_materiales", "prototipado_rapido", "analisis_de_costos"]

enunciado: "Antes de proponer una solución técnica detallada, es fundamental realizar la ___ para entender qué se debe resolver."

explicacion: |
  El diseño conceptual comienza con la definición clara del problema. Sin entender la necesidad real, cualquier solución técnica posterior corre el riesgo de ser irrelevante o ineficiente.
```

### 7 — Identificación de restricciones

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["restricciones", "requisitos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["Un dron de carga debe elevar 5kg", "5"], ["Un sensor de temperatura debe operar a -20°C", "-20"]]

respuesta: escenarios[caso_idx][1]
tipo: completar
tolerancia_abs: 0.1

enunciado: "En el diseño conceptual de un sistema de transporte de carga, si el requisito principal es que el dispositivo debe ser capaz de levantar una masa de {escenarios[caso_idx][0]}, ¿cuál es el valor numérico de la carga de diseño en kg?"

pasos:
  - "Identificar el requisito de carga útil en el enunciado."
  - "Extraer el valor numérico asociado a la capacidad de carga."

explicacion: |
  En la fase conceptual, los requisitos de rendimiento (como la carga útil) se establecen como parámetros de diseño que guiarán la selección de motores y estructuras en la fase técnica.
```

### 8 — Verdad o Falso: Alcance del diseño conceptual

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: falso

tipo: "vf"

enunciado: "El diseño conceptual se encarga de especificar las dimensiones exactas de cada tornillo y el código de programación final de los componentes."

explicacion: |
  Falso. El diseño conceptual se centra en la arquitectura general, la lógica de funcionamiento y la solución macro. La especificación de detalles como tornillos o líneas de código pertenece a la fase de diseño detallado o ingeniería de detalle.
```

### 9 — Secuencia de desarrollo

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["proceso", "flujo"]

tipo: ordenar
opciones_explicitas: ["identificacion_necesidad", "brainstorming_soluciones", "seleccion_arquitectura", "analisis_viabilidad", "fabricacion_final"]
respuesta_orden: ["identificacion_necesidad", "brainstorming_soluciones", "seleccion_arquitectura", "analisis_viabilidad", "fabricacion_final"]

enunciado: "Ordene las etapas del proceso de diseño desde la concepción inicial hasta la validación de la idea antes de la fabricación."

explicacion: |
  El flujo lógico comienza con la necesidad, sigue con la generación de ideas (brainstorming), se elige una arquitectura de solución y se valida su viabilidad. La fabricación es una etapa posterior al diseño.
```

### 10 — Selección de arquitectura

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "avanzado"
  tags: ["toma_de_decisiones", "arquitectura"]

variables:
  opcion_idx: uno_de([0, 1])
  casos: [["un sistema de frenado mecánico", "hidraulico"], ["un sistema de transmisión de energía", "electrico"]]

respuesta: casos[opcion_idx][1]
tipo: "completar"
respuestas_validas:
  - "hidraulico"
  - "electrico"

enunciado: "Si estamos en la fase conceptual de un vehículo de transporte pesado y decidimos que la transferencia de fuerza se hará mediante fluidos a presión, la arquitectura seleccionada es de tipo ___."

explicacion: |
  La elección de la arquitectura (mecánica, hidráulica, eléctrica) es la decisión principal del diseño conceptual. Una vez elegida, se procede a realizar los cálculos de ingeniería detallados para esa arquitectura específica.
```

### 11 — El momento del diseño conceptual

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["metodologia", "etapas_proyecto"]

respuesta: "idea_general"
tipo: completar

enunciado: "Un error común en la gestión de proyectos es saltar directamente a la definición de detalles técnicos sin haber consolidado primero la ___ de la solución. ¿Qué etapa se está omitiendo?"

explicacion: |
  El diseño conceptual debe establecer la arquitectura y funcionalidad general. Si se salta directamente a los detalles técnicos (como dimensiones exactas o materiales específicos), se corre el riesgo de optimizar componentes de una solución que podría ser inherentemente errónea para el problema original.
```

### 12 — Alcance del diseño conceptual

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["errores_comunes", "definicion"]

respuesta: falso
tipo: vf
enunciado: "Si el diseño conceptual se centra en la selección de tornillos, aleaciones específicas y tolerancias de fabricación, ¿se está cumpliendo estrictamente con la fase de diseño conceptual?"

explicacion: |
  Falso. El diseño conceptual debe responder al 'qué' y al 'por qué' de la solución a nivel macro. La selección de componentes específicos y tolerancias pertenece al diseño detallado.
```

### 13 — La confusión entre concepto y prototipo

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["prototipado", "confusion"]

respuesta: "el_concepto_es_la_solucion"
tipo: completar
respuestas_validas:
  - "el_concepto_es_la_solucion"

enunciado: "Un error conceptual frecuente es creer que un prototipo funcional de baja fidelidad es lo mismo que el diseño conceptual. Sin embargo, el diseño conceptual es ___."

explicacion: |
  El diseño conceptual es una representación abstracta o lógica de la solución, mientras que el prototipo es una realización física o digital para validar hipótesis. No son sinónimos.
```

### 14 — Secuencia lógica del desarrollo

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["flujo_trabajo"]

respuesta_orden: ["identificacion_problema", "diseno_conceptual", "diseno_detallado", "fabricacion"]
tipo: ordenar

opciones_explicitas: ["identificacion_problema", "diseno_conceptual", "diseno_detallado", "fabricacion"]

enunciado: "Ordene las etapas de un proceso de ingeniería de la más general a la más específica, evitando el error de saltar pasos críticos."

explicacion: |
  El flujo lógico requiere primero entender el problema, luego idear la solución general (conceptual), luego definir sus componentes exactos (detallado) y finalmente producirlo.
```

### 15 — El riesgo de la solución prematura

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "avanzado"
  tags: ["riesgo", "optimizacion"]

respuesta: "optimizar_detalles"
tipo: mc
opciones_explicitas: ["optimizar_detalles", "validar_requisitos", "definir_presupuesto", "analizar_competencia"]

enunciado: "En la fase de diseño conceptual, ¿cuál es el mayor riesgo de error antes de haber validado si la idea general satisface las necesidades del usuario?"

explicacion: |
  Intentar optimizar detalles técnicos (como reducir el peso de una pieza en gramos) cuando la arquitectura general del sistema aún no es válida es una pérdida de recursos conocida como 'optimización prematura'.
```

### 16 — Diferencia con el diseño detallado

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["definicion", "fases_proyecto"]

respuesta: "diseño detallado"
tipo: completar
respuestas_validas:
  - "diseño detallado"
  - "diseño de detalle"
  - "diseño técnico"

enunciado: "Mientras que el diseño conceptual se centra en la idea general y la viabilidad de la solución, el ___ se enfoca en las especificaciones técnicas precisas y la selección de materiales exactos."

explicacion: |
  El diseño conceptual es la fase de abstracción donde se define el 'qué' y el 'por qué', mientras que el diseño detallado define el 'cómo' técnico para la fabricación o implementación.
```

### 17 — El objetivo del diseño conceptual

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["objetivo", "proposito"]

variables:
  escenarios: [["un sistema de filtración de agua", "identificar la arquitectura básica"], ["un nuevo modelo de smartphone", "definir la experiencia de usuario y funciones clave"]]
  escenario: uno_de(escenarios)

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["definir la arquitectura técnica final", "identificar la arquitectura básica", "definir la experiencia de usuario y funciones clave", "seleccionar proveedores de componentes"]

enunciado: "En el caso de {escenario[0]}, el objetivo principal del diseño conceptual es ___."

explicacion: |
  El diseño conceptual no busca detalles de implementación, sino establecer la estructura lógica y los principios fundamentales que guiarán la solución.
```

### 18 — ¿Es el diseño conceptual un proceso iterativo?

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["naturaleza", "proceso"]

respuesta: falso
tipo: vf

enunciado: "El diseño conceptual es un proceso lineal y único que se completa antes de pasar a cualquier otra fase del proyecto."

explicacion: |
  Falso. El diseño conceptual es altamente iterativo; las ideas se refinan, se descartan o se modifican constantemente a medida que se comprenden mejor las restricciones del problema.
```

### 19 — Elementos del diseño conceptual

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["componentes", "jerarquia"]

respuesta_orden: ["Identificación del problema", "Generación de ideas", "Selección de la mejor alternativa", "Definición de la arquitectura"]
tipo: ordenar
opciones_explicitas: ["Identificación del problema", "Generación de ideas", "Selección de la mejor alternativa", "Definición de la arquitectura"]

enunciado: "Ordene cronológicamente las etapas de un proceso de diseño conceptual estándar:"

explicacion: |
  Un proceso lógico comienza entendiendo la necesidad (problema), explorando soluciones (ideas), eligiendo la más viable (selección) y estructurando la solución (arquitectura).
```

### 20 — Comparación con el prototipado

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["prototipado", "comparacion"]

variables:
  casos: [["un motor de combustión", "un software de gestión"], ["un puente colgante", "una aplicación móvil"]]
  caso_idx: uno_de([0, 1])
  caso_elegido: casos[caso_idx][0]

respuesta: "el prototipo es una manifestación física o funcional de la idea"
tipo: completar
respuestas_validas:
  - "el prototipo es una manifestación física o funcional de la idea"
  - "el prototipo es un dibujo"

enunciado: "Si el diseño conceptual es la representación mental o esquemática de la solución para {caso_elegido}, entonces ___."

explicacion: |
  El diseño conceptual es el concepto abstracto; el prototipo es la materialización (física o digital) para validar si ese concepto funciona en la realidad.
```

### 21 — Identificación del Alcance

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["definicion", "alcance"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un sistema de purificación de agua para una comunidad rural", "priorizar la simplicidad y el costo"], ["un motor de combustión de alta eficiencia", "priorizar la potencia máxima y el rendimiento"]]

enunciado: "En la fase de diseño conceptual para {escenarios[escenario_idx][0]}, el objetivo principal es {escenarios[escenario_idx][1]}."

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["priorizar la simplicidad y el costo", "priorizar la potencia máxima y el rendimiento", "definir el presupuesto detallado de materiales", "realizar pruebas de fatiga de materiales"]

explicacion: |
  El diseño conceptual se enfoca en la solución general y la viabilidad de la idea, no en los detalles técnicos o materiales específicos.
```

### 22 — Veracidad de la Fase

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["fases_proyecto"]

enunciado: "El diseño conceptual se realiza después de haber definido los requerimientos del cliente pero antes de la creación de los planos de fabricación detallados."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. El diseño conceptual actúa como el puente entre la necesidad (requerimiento) y la solución técnica detallada.
```

### 23 — Elementos del Concepto

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["componentes", "arquitectura"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [["un puente peatonal", "la estructura principal y el flujo de carga"], ["un software de gestión hospitalaria", "la arquitectura de la base de datos y la interfaz de usuario"]]

enunciado: "Para el diseño conceptual de {datos[caso_idx][0]}, el ingeniero debe definir principalmente {datos[caso_idx][1]}."

respuesta: datos[caso_idx][1]
tipo: completar
respuestas_validas:
  - "la estructura principal y el flujo de carga"
  - "la arquitectura de la base de datos y la interfaz de usuario"

explicacion: |
  El diseño conceptual define la arquitectura funcional o estructural básica que permitirá cumplir con los requerimientos.
```

### 24 — Secuencia de Desarrollo

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["flujo_trabajo"]

enunciado: "Ordene las etapas del proceso de diseño de un nuevo producto desde la concepción hasta la producción:"

opciones_explicitas: ["Identificación de la necesidad", "Diseño conceptual", "Diseño detallado", "Prototipado y pruebas"]
respuesta_orden: ["Identificación de la necesidad", "Diseño conceptual", "Diseño detallado", "Prototipado y pruebas"]
tipo: ordenar

explicacion: |
  El proceso sigue un flujo lógico: primero se entiende el problema, luego se propone la idea general (conceptual), se detallan las medidas y finalmente se valida con prototipos.
```

### 25 — Análisis de Viabilidad

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "avanzado"
  tags: ["evaluacion", "riesgo"]

variables:
  problema_idx: uno_de([0, 1])
  problemas: ["un sistema de frenado para un tren de alta velocidad", "un nuevo tipo de envase biodegradable para alimentos"]

enunciado: "Durante el diseño conceptual de {problemas[problema_idx]}, si se detecta que la solución propuesta es físicamente imposible, ¿cuál es la acción correcta?"

respuesta: "Reevaluar la idea o buscar una alternativa conceptual"
tipo: mc
opciones_explicitas: ["Reevaluar la idea o buscar una alternativa conceptual", "Continuar con el diseño detallado para ver si se soluciona", "Ignorar el problema y esperar a la fase de prototipado", "Aumentar el presupuesto de materiales"]

explicacion: |
  El diseño conceptual es la etapa ideal para detectar inviabilidades técnicas; intentar avanzar a detalles con un concepto erróneo es un error costoso.
```
