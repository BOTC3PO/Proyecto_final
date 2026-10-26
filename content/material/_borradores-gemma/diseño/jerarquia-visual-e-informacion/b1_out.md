### 1 — Concepto de Jerarquía Visual
```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["teoria", "fundamentos"]

respuesta: "jerarquía visual"
tipo: completar
respuestas_validas: ["jerarquía visual", "jerarquia visual"]

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

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Contraste", "Alineación", "Repetición", "Proximidad"]

enunciado: "Para resaltar un botón de 'Llamado a la acción' (CTA) sobre un fondo neutro, el diseñador utiliza principalmente el ___."

pasos:
  - "Identificar el elemento principal a destacar."
  - "Aplicar una diferencia significativa de color o tamaño respecto al fondo."

explicacion: |
  El contraste es una de las herramientas más potentes para crear jerarquía, ya que el ojo humano se siente atraído naturalmente por los elementos que rompen la uniformidad.

variables:
  datos: [["Contraste", "Contraste"], ["Alineación", "Alineación"]]
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

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Aumentar el tamaño", "Disminuir el tamaño", "Cambiar el color"]

enunciado: "Si se desea que un título sea el elemento de mayor peso visual en una página, la acción más directa es ___."

explicacion: |
  La escala es la relación de tamaño entre los elementos. Un elemento más grande suele percibirse como más importante que uno más pequeño.

variables:
  datos: [
    ["Aumentar el tamaño", "Aumentar el tamaño"],
    ["Disminuir el tamaño", "Disminuir el tamaño"],
    ["Cambiar el color", "Cambiar el color"]
  ]
```

### 5 — Flujo de Lectura y Escaneo
```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["patrones", "lectura"]

respuesta: ["Patrón en F", "Patrón en Z", "Patrón Circular"]
tipo: ordenar
opciones_explicitas: ["Patrón en F", "Patrón en Z", "Patrón Circular"]

enunciado: "Ordena los patrones de escaneo visual más comunes en interfaces web, desde el que se usa para lectura de texto denso hasta el de navegación rápida en landing pages:"

explicacion: |
  El patrón en F es típico en páginas con mucho texto (como blogs), mientras que el patrón en Z es común en páginas con menos contenido y más visuales (como landing pages).
```