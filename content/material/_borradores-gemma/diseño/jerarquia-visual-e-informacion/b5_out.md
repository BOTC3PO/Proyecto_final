### 1 — Prioridad en un Checkout
```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["ux", "ui", "jerarquia"]

variables:
  escenario: uno_de([["Botón de 'Comprar ahora' con color contrastante", "Texto de 'Términos y condiciones' en gris pequeño", "Título del producto en negrita y tamaño grande"], ["Botón de 'Cancelar' con borde gris", "Texto de 'Envío gratis' en color secundario", "Precio del producto en fuente mediana"]])
  idx: uno_de([0, 1])
  elemento_foco: escenario[idx][0]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["El elemento con mayor peso visual es el que debe tener la acción principal", "El elemento con menor peso visual debe ser el más llamativo", "Todos los elementos deben tener el mismo peso visual", "El color no influye en la jerarquía"]

enunciado: "En un proceso de checkout, se presenta el siguiente elemento de alta prioridad: {elemento_foco}. Según los principios de jerarquía visual, ¿cuál es la función de este elemento en la interfaz?"

explicacion: |
  La jerarquía visual utiliza el contraste, el tamaño y el color para guiar el ojo del usuario hacia las acciones críticas (Call to Action), asegurando que el flujo de navegación sea intuitivo.
```

### 2 — El orden de lectura
```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["layout", "patrones"]

variables:
  patron: uno_de([["Patrón en F", "Patrón en Z"], ["Patrón en Z", "Patrón en F"]])
  secuencia: uno_de([[["Encabezado", "Contenido principal", "Pie de página"], ["Logo", "Menú de navegación", "Contenido central"]])])
  # Nota: Como es ordenar, definimos la lista correcta directamente en la respuesta
  lista_correcta: ["Encabezado", "Contenido principal", "Pie de página"]

respuesta: ["Encabezado", "Contenido principal", "Pie de página"]
tipo: ordenar
opciones_explicitas: ["Pie de página", "Contenido principal", "Encabezado", "Logo", "Menú de navegación", "Contenido central"]

enunciado: "Al diseñar una página web con una estructura estándar de arriba hacia abajo, ordena los elementos según el flujo de lectura natural del usuario:"

explicacion: |
  La jerarquía vertical establece un orden de importancia basado en la posición, donde los elementos superiores suelen recibir la atención primaria antes de descender al cuerpo del contenido.
```

### 3 — Contraste y Legibilidad
```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["color", "contraste"]

variables:
  caso: uno_de([["texto gris claro sobre fondo blanco", "botón amarillo sobre fondo naranja", "texto negro sobre fondo blanco"]])
  es_legible: uno_de([false, true]) 
  # Para evitar doble sorteo, definimos el caso y su valor directamente
  datos: [["texto gris claro sobre fondo blanco", false], ["botón amarillo sobre fondo naranja", false], ["texto negro sobre fondo blanco", true]]
  idx: uno_de([0, 1, 2])
  detalle: datos[idx][0]
  resultado: datos[idx][1]

respuesta: resultado
tipo: vf

enunciado: "Si un diseñador utiliza {detalle} para presentar información crítica, ¿el contraste es suficiente para garantizar una buena jerarquía visual y legibilidad?"

explicacion: |
  Un contraste insuficiente entre el foreground (texto) y el background (fondo) rompe la jerarquía visual, haciendo que la información importante se pierda o sea difícil de procesar.
```

### 4 — Completar el flujo de atención
```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["ux", "atencion"]

variables:
  contexto: uno_de([["Un banner promocional", "Un botón de 'Aceptar cookies'", "Un enlace de 'Términos de uso'"]])
  idx: uno_de([0, 1, 2])
  item: uno_de([["banner", "botón", "enlace"]]) # Simplificado para el ejemplo
  # Usamos una tabla para asegurar que la respuesta coincida con el enunciado
  tabla: [["banner", "promocional"], ["botón", "acción"], ["enlace", "secundario"]]
  # Re-ajuste para cumplir reglas:
  escenario_completo: [["banner", "promocional"], ["botón", "acción"], ["enlace", "secundario"]]
  idx_real: uno_de([0, 1, 2])
  objeto: escenario_completo[idx_real][0]
  respuesta_texto: escenario_completo[idx_real][1]

respuesta: respuesta_texto
tipo: completar
respuestas_validas: ["promocional", "acción", "secundario"]

enunciado: "Un elemento de tipo {objeto} suele tener una jerarquía visual de nivel ___."

explicacion: |
  La jerarquía visual clasifica los elementos según su importancia. Los banners suelen ser promocionales, los botones de acción y los enlaces suelen ser secundarios o de soporte.
```

### 5 — Escala y Peso Visual
```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "avanzado"
  tags: ["escala", "tipografia"]

variables:
  escala: uno_de([["grande", "pequeño"], ["pequeño", "grande"]])
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