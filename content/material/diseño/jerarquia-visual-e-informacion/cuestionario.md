# Diseño — Jerarquia visual e informacion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Jerarquía Visual

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["teoria", "fundamentos"]

respuesta: "jerarquía visual"
tipo: completar
respuestas_validas:
  - "jerarquía visual"
  - "jerarquia visual"

enunciado: "El orden en el que el ojo humano percibe los elementos de una interfaz, establecido mediante el diseño, se denomina ___."

explicacion: |
  La jerarquía visual es la organización de los elementos de diseño para guiar el ojo del usuario a través de la interfaz, permitiendo identificar qué es lo más importante primero.
```

### 2 — Elementos de Contraste

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["contraste", "color", "tamaño"]

tipo: mc
opciones_explicitas: ["Contraste", "Alineación", "Repetición", "Proximidad"]

respuesta: "Contraste"

enunciado: "Para resaltar un botón de 'Llamado a la acción' (CTA) sobre un fondo neutro, el diseñador utiliza principalmente el ___."

pasos:
  - "Identificar el elemento principal a destacar."
  - "Aplicar una diferencia significativa de color o tamaño respecto al fondo."

explicacion: |
  El contraste es una de las herramientas más potentes para crear jerarquía, ya que el ojo humano se siente atraído naturalmente por los elementos que rompen la uniformidad.
```

### 3 — El Principio de Proximidad

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["gestalt", "proximidad"]

respuesta: verdadero
tipo: vf

enunciado: "Según los principios de la Gestalt, los elementos que están físicamente cerca unos de otros se perciben como un grupo relacionado."

explicacion: |
  La proximidad es una técnica de jerarquía visual que utiliza el espacio en blanco para agrupar información relacionada y separar información distinta.
```

### 4 — Escala y Peso Visual

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["escala", "tamaño"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["Aumentar el tamaño", "Aumentar el tamaño"], ["Disminuir el tamaño", "Disminuir el tamaño"], ["Cambiar el color", "Cambiar el color"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Aumentar el tamaño", "Disminuir el tamaño", "Cambiar el color"]

enunciado: "Si se desea que un título sea el elemento de mayor peso visual en una página, la acción más directa es ___."

explicacion: |
  La escala es la relación de tamaño entre los elementos. Un elemento más grande suele percibirse como más importante que uno más pequeño.
```

### 5 — Flujo de Lectura y Escaneo

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["patrones", "lectura"]

respuesta_orden: ["Patrón en F", "Patrón en Z", "Patrón Circular"]
tipo: ordenar
opciones_explicitas: ["Patrón en F", "Patrón en Z", "Patrón Circular"]

enunciado: "Ordena los patrones de escaneo visual más comunes en interfaces web, desde el que se usa para lectura de texto denso hasta el de navegación rápida en landing pages:"

explicacion: |
  El patrón en F es típico en páginas con mucho texto (como blogs), mientras que el patrón en Z es común en páginas con menos contenido y más visuales (como landing pages).
```

### 6 — El peso visual del CTA

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["ui", "ux", "atencion"]

variables:
  color_primario: uno_de(["#FF5733", "#33FF57", "#3357FF"])

enunciado: "En una landing page, para que un botón de 'Comprar ahora' (CTA) destaque sobre el resto de la interfaz, se debe aplicar un contraste de color elevado respecto al fondo. Si el fondo es blanco y el color del botón es {color_primario}, ¿el botón tendrá un peso visual alto?"

respuesta: verdadero
tipo: "vf"

explicacion: |
  El contraste cromático es una de las herramientas principales de la jerarquía visual. Un color saturado o con alto contraste respecto al fondo atrae la mirada del usuario de forma inmediata, indicando que es un elemento de acción.
```

### 7 — El orden de lectura en un Dashboard

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["layout", "patrones_de_lectura"]

variables:
  patron_idx: uno_de([0, 1])
  patrones: [["F", "Z"], ["Z", "F"]]
  patron_actual: patrones[patron_idx]

enunciado: "Al diseñar un dashboard con mucha información dispersa, el usuario suele seguir un patrón de escaneo visual. Si estamos diseñando una interfaz con una estructura de bloques horizontales y verticales muy marcados, el patrón más probable es el patrón {patron_actual}."

opciones_explicitas: ["F", "Z"]
respuesta: "F"
tipo: "mc"

explicacion: |
  El patrón en 'F' es típico en interfaces con mucho texto o listas (como feeds de redes sociales), donde el ojo recorre la parte superior y luego baja por el margen izquierdo. El patrón en 'Z' es común en landing pages con elementos visuales centrados.
```

### 8 — Escala y Prioridad

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["escala", "tipografia"]

variables:
  titulo_size: uno_de([48, 24, 12])
  subtitulo_size: uno_de([32, 18, 10])
  cuerpo_size: uno_de([16, 14, 12])

enunciado: "Para establecer una jerarquía tipográfica clara en un artículo, debemos asignar tamaños distintos a los elementos. Si definimos un título de {titulo_size}px, un subtítulo de {subtitulo_size}px y un cuerpo de {cuerpo_size}px, el orden de importancia visual (de mayor a menor) es:"

opciones_explicitas: ["título, subtítulo, cuerpo", "cuerpo, subtítulo, título", "subtítulo, título, cuerpo"]
respuesta: "título, subtítulo, cuerpo"
tipo: "mc"

explicacion: |
  La escala tipográfica es fundamental. Un tamaño mayor indica mayor importancia jerárquica, permitiendo que el usuario identifique rápidamente la estructura del contenido.
```

### 9 — Pasos para jerarquizar un formulario

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["ux", "flujo_de_usuario"]

enunciado: "Para diseñar un formulario de registro que no abrume al usuario, se recomienda seguir este orden de organización de la información:"

pasos:
  - "Agrupar campos relacionados mediante espacios en blanco (whitespace)."
  - "Establecer un orden lógico de lectura (de arriba hacia abajo)."
  - "Destacar el botón de acción final con un peso visual mayor."

opciones_explicitas: ["Agrupar campos", "Establecer orden", "Destacar botón"]
respuesta_orden: ["Agrupar campos", "Establecer orden", "Destacar botón"]
tipo: "ordenar"

explicacion: |
  Primero se organiza el contenido (agrupación), luego se da sentido al flujo (orden) y finalmente se indica dónde terminar la tarea (CTA).
```

### 10 — El uso del Espacio en Blanco

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "avanzado"
  tags: ["whitespace", "proximidad"]

enunciado: "En el diseño de una interfaz, si aplicamos la Ley de Proximidad de la Gestalt, al aumentar el espacio en blanco (whitespace) entre dos elementos, la percepción de su relación cambia. Si el espacio aumenta, la relación entre ellos es ___."

opciones_explicitas: ["fuerte", "débil", "nula"]
respuesta: "débil"
tipo: "mc"

explicacion: |
  La proximidad dicta que los elementos cercanos se perciben como parte de un mismo grupo. Al aumentar el espacio entre ellos, el cerebro deja de verlos como una unidad, rompiendo la relación visual.
```

### 11 — El error del exceso de énfasis

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["jerarquia", "atencion", "error_comun"]

variables:
  es_efectivo: falso

respuesta: es_efectivo
tipo: completar
enunciado: "Si un diseñador aplica el mismo tamaño, color vibrante y peso visual a todos los elementos de una interfaz, ¿se logra establecer una jerarquía visual efectiva para guiar la atención del usuario?"

explicacion: |
  Si todo destaca, nada destaca. La jerarquía visual requiere contraste y diferenciación para que el ojo pueda distinguir qué es lo más importante.
```

### 12 — El orden de lectura y el escaneo

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["patrones_lectura", "f-pattern", "z-pattern"]

variables:
  patron_idx: uno_de([0, 1])
  patrones: [["F-Pattern", "Z-Pattern"], ["Z-Pattern", "F-Pattern"]]
  descripciones: [["lectura densa de texto", "elementos visuales dispersos"]]

respuesta: patrones[patron_idx][0]
tipo: mc
opciones_explicitas: ["F-Pattern", "Z-Pattern"]

enunciado: "En una interfaz con mucho contenido textual (como un blog o un artículo), el usuario suele seguir un patrón de escaneo conocido como {patrones[patron_idx][1]}."

pasos:
  - "Identificar la densidad de texto."
  - "Determinar el movimiento ocular predominante."

explicacion: |
  El 'F-Pattern' es típico en interfaces con mucho texto, donde el usuario escanea la parte superior y luego baja por el margen izquierdo.
```

### 13 — La importancia del espacio en blanco

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["espacio_negativo", "respiro_visual"]

variables:
  elemento_clave: "botón de acción"

respuesta: "espacio en blanco"
tipo: completar
respuestas_validas:
  - "espacio en blanco"
  - "aire"
  - "espacio negativo"

enunciado: "Para resaltar el {elemento_clave} y evitar la sobrecarga cognitiva, el diseñador debe utilizar estratégicamente el ___."

explicacion: |
  El espacio en blanco (o espacio negativo) no es 'espacio vacío', es una herramienta de diseño que ayuda a agrupar elementos y dar importancia a los objetos clave.
```

### 14 — Priorización de elementos

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["ordenar", "prioridad", "layout"]

tipo: ordenar
opciones_explicitas: ["Título principal", "Subtítulo", "Cuerpo de texto", "Pie de página"]
respuesta_orden: ["Título principal", "Subtítulo", "Cuerpo de texto", "Pie de página"]

enunciado: "Ordena los siguientes elementos de una página web según una jerarquía visual lógica de importancia (de mayor a menor impacto visual):"

pasos:
  - "Evaluar el tamaño de fuente esperado."
  - "Evaluar la posición en el layout."
  - "Evaluar el contraste de color."

explicacion: |
  Una jerarquía lógica guía al usuario desde lo general (título) hacia lo específico (detalle) y finalmente a la información secundaria (pie de página).
```

### 15 — El contraste como herramienta

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "avanzado"
  tags: ["contraste", "color", "percepcion"]

variables:
  color_fondo: "blanco"
  color_texto: "gris claro"
  es_legible: falso

respuesta: es_legible
tipo: completar
enunciado: "Si utilizo un texto de color {color_texto} sobre un fondo {color_fondo}, el contraste será muy bajo. ¿Esto ayuda a crear una jerarquía clara y legible?"

explicacion: |
  Un contraste insuficiente rompe la jerarquía porque el usuario no puede distinguir los elementos del fondo, dificultando la navegación.
```

### 16 — Jerarquía vs. Contraste

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["teoria", "fundamentos"]

respuesta: "contraste"
tipo: mc
opciones_explicitas: ["contraste", "equilibrio", "alineación", "proximidad"]

enunciado: "Mientras que la jerarquía visual establece un orden de importancia de los elementos, el ___ es la herramienta que permite diferenciar dichos elementos mediante cambios en color, tamaño o forma."

explicacion: |
  El contraste es lo que permite que el ojo detecte diferencias. Sin contraste, no hay jerarquía, ya que todos los elementos parecerían tener la misma importancia.
```

### 17 — El rol de la Proximidad

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["gestalt", "organizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["elementos agrupados por su función", "crea una unidad visual clara"], ["elementos dispersos sin relación", "genera confusión en la lectura"]]

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas:
  - escenarios[escenario_idx][1]

enunciado: "Cuando aplicamos el principio de proximidad en una interfaz, si agrupamos elementos que están relacionados, esto ___."

explicacion: |
  La proximidad utiliza el espacio para comunicar que ciertos elementos pertenecen a un mismo grupo o concepto, reduciendo la carga cognitiva.
```

### 18 — Jerarquía vs. Ruido Visual

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "avanzado"
  tags: ["usabilidad", "cognicion"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que una jerarquía visual efectiva consiste en resaltar todos los elementos de una interfaz por igual para que el usuario no pierda información importante?"

explicacion: |
  Falso. Si todo resalta, nada resalta. Una jerarquía efectiva requiere decidir qué es lo más importante y qué es secundario para guiar el flujo de atención.
```

### 19 — Flujo de lectura en interfaces

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["patrones_de_lectura", "layout"]

respuesta_orden: ["Título principal", "Subtítulo o imagen", "Cuerpo de texto", "Botón de acción (CTA)"]
tipo: ordenar
opciones_explicitas: ["Título principal", "Subtítulo o imagen", "Cuerpo de texto", "Botón de acción (CTA)"]

enunciado: "Ordena los elementos de una tarjeta de producto de mayor a menor importancia visual en un diseño estándar de e-commerce:"

explicacion: |
  La jerarquía debe guiar al usuario desde la identificación del objeto (título/imagen) hacia la información de detalle (texto) y finalmente hacia la conversión (botón).
```

### 20 — El impacto del tamaño

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["escala", "atencion"]

variables:
  valor_escala: uno_de([0, 1])
  tamanos: [10, 50]
  importancias: ["menor", "mayor"]

respuesta: importancias[valor_escala]

tipo: completar
respuestas_validas:
  - "menor"
  - "mayor"

enunciado: "En una composición visual, un elemento con un tamaño de {tamanos[valor_escala]}px tiene una importancia visual ___ que uno de {tamanos[valor_escala] * 2}px."

explicacion: |
  El tamaño es uno de los indicadores de jerarquía más directos: el ojo tiende a procesar primero los elementos de mayor escala.
```

### 21 — Prioridad en un Checkout

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["ux", "ui", "jerarquia"]

variables:
  datos: ["Botón de 'Comprar ahora' con color contrastante", "Botón de 'Cancelar' con borde gris"]
  idx: uno_de([0, 1])
  elemento_foco: datos[idx]

tipo: mc
opciones_explicitas: ["El elemento con mayor peso visual es el que debe tener la acción principal", "El elemento con menor peso visual debe ser el más llamativo", "Todos los elementos deben tener el mismo peso visual", "El color no influye en la jerarquía"]

respuesta: "El elemento con mayor peso visual es el que debe tener la acción principal"

enunciado: "En un proceso de checkout, se presenta el siguiente elemento de alta prioridad: {elemento_foco}. Según los principios de jerarquía visual, ¿cuál es la función de este elemento en la interfaz?"

explicacion: |
  La jerarquía visual utiliza el contraste, el tamaño y el color para guiar el ojo del usuario hacia las acciones críticas (Call to Action), asegurando que el flujo de navegación sea intuitivo.
```

### 22 — El orden de lectura

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["layout", "patrones"]

tipo: ordenar
opciones_explicitas: ["Encabezado", "Contenido principal", "Pie de página"]
respuesta_orden: ["Encabezado", "Contenido principal", "Pie de página"]

enunciado: "Al diseñar una página web con una estructura estándar de arriba hacia abajo, ordena los elementos según el flujo de lectura natural del usuario:"

explicacion: |
  La jerarquía vertical establece un orden de importancia basado en la posición, donde los elementos superiores suelen recibir la atención primaria antes de descender al cuerpo del contenido.
```

### 23 — Contraste y Legibilidad

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["color", "contraste"]

variables:
  idx: uno_de([0, 1, 2])
  detalles: ["texto gris claro sobre fondo blanco", "botón amarillo sobre fondo naranja", "texto negro sobre fondo blanco"]
  resultados: [falso, falso, verdadero]
  detalle: detalles[idx]

respuesta: resultados[idx]
tipo: vf
enunciado: "Si un diseñador utiliza {detalle} para presentar información crítica, ¿el contraste es suficiente para garantizar una buena jerarquía visual y legibilidad?"

explicacion: |
  Un contraste insuficiente entre el foreground (texto) y el background (fondo) rompe la jerarquía visual, haciendo que la información importante se pierda o sea difícil de procesar.
```

### 24 — Completar el flujo de atención

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["ux", "atencion"]

variables:
  datos: [["banner", "promocional"], ["botón", "acción"], ["enlace", "secundario"]]
  idx: uno_de([0, 1, 2])
  objeto: datos[idx][0]
  respuesta_texto: datos[idx][1]

respuesta: respuesta_texto
tipo: completar
respuestas_validas:
  - "promocional"
  - "acción"
  - "secundario"

enunciado: "Un elemento de tipo {objeto} suele tener una jerarquía visual de nivel ___."

explicacion: |
  La jerarquía visual clasifica los elementos según su importancia. Los banners suelen ser promocionales, los botones de acción y los enlaces suelen ser secundarios o de soporte.
```

### 25 — Escala y Peso Visual

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "avanzado"
  tags: ["escala", "tipografia"]

variables:
  datos: [["grande", "mayor peso visual"], ["pequeño", "menor peso visual"]]
  idx: uno_de([0, 1])
  valor_escala: datos[idx][0]
  valor_respuesta: datos[idx][1]

respuesta: valor_respuesta
tipo: mc
opciones_explicitas: ["mayor peso visual", "menor peso visual", "mismo peso visual", "ningún peso visual"]

enunciado: "Si un elemento tipográfico tiene un tamaño {valor_escala}, este tendrá un ___."

explicacion: |
  El tamaño es uno de los pilares de la jerarquía visual. A mayor tamaño, mayor es el peso visual y, por lo tanto, mayor es la probabilidad de que el usuario lo procese primero.
```
