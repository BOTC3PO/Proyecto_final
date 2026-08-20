### 1 — El error del exceso de énfasis
```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["jerarquia", "atencion", "error_comun"]

variables:
  es_efectivo: falso

respuesta: es_efectivo
tipo: vf

enunciado: "Si un diseñador aplica el mismo tamaño, color vibrante y peso visual a todos los elementos de una interfaz, ¿se logra establecer una jerarquía visual efectiva para guiar la atención del usuario?"

explicacion: |
  Si todo destaca, nada destaca. La jerarquía visual requiere contraste y diferenciación para que el ojo pueda distinguir qué es lo más importante.
```

### 2 — El orden de lectura y el escaneo
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

### 3 — La importancia del espacio en blanco
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
respuestas_validas: ["espacio en blanco", "aire", "espacio negativo"]

enunciado: "Para resaltar el {elemento_clave} y evitar la sobrecarga cognitiva, el diseñador debe utilizar estratégicamente el ___."

explicacion: |
  El espacio en blanco (o espacio negativo) no es 'espacio vacío', es una herramienta de diseño que ayuda a agrupar elementos y dar importancia a los objetos clave.
```

### 4 — Priorización de elementos
```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["ordenar", "prioridad", "layout"]

variables:
  escenario_idx: 0
  elementos: [["Título principal", "Subtítulo", "Cuerpo de texto", "Pie de página"], ["Botón CTA", "Imagen Hero", "Texto descriptivo", "Footer"]]

respuesta: elementos[escenario_idx]
tipo: ordenar
opciones_explicitas: ["Título principal", "Subtítulo", "Cuerpo de texto", "Pie de página"]

enunciado: "Ordena los siguientes elementos de una página web según una jerarquía visual lógica de importancia (de mayor a menor impacto visual):"

pasos:
  - "Evaluar el tamaño de fuente esperado."
  - "Evaluar la posición en el layout."
  - "Evaluar el contraste de color."

explicacion: |
  Una jerarquía lógica guía al usuario desde lo general (título) hacia lo específico (detalle) y finalmente a la información secundaria (pie de página).
```

### 5 — El contraste como herramienta
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
tipo: vf

enunciado: "Si utilizo un texto de color {color_texto} sobre un fondo {color_fondo}, el contraste será muy bajo. ¿Esto ayuda a crear una jerarquía clara y legible?"

explicacion: |
  Un contraste insuficiente rompe la jerarquía porque el usuario no puede distinguir los elementos del fondo, dificultando la navegación.
```