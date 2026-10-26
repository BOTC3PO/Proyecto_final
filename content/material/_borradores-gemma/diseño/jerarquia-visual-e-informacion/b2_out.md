### 1 — El peso visual del CTA
```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["ui", "ux", "atencion"]

variables:
  color_primario: uno_de(["#FF5733", "#33FF57", "#3357FF"])

enunciado: "En una landing page, para que un botón de 'Comprar ahora' (CTA) destaque sobre el resto de la interfaz, se debe aplicar un contraste de color elevado respecto al fondo. Si el fondo es blanco y el color del botón es {color_primario}, ¿el botón tendrá un peso visual alto?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: "vf"

explicacion: |
  El contraste cromático es una de las herramientas principales de la jerarquía visual. Un color saturado o con alto contraste respecto al fondo atrae la mirada del usuario de forma inmediata, indicando que es un elemento de acción.
```

### 2 — El orden de lectura en un Dashboard
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

### 3 — Escala y Prioridad
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

### 4 — Pasos para jerarquizar un formulario
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

opciones_explicitas: ["Agrupar campos, Establecer orden, Destacar botón", "Destacar botón, Agrupar campos, Establecer orden", "Establecer orden, Destacar botón, Agrupar campos"]
respuesta: ["Agrupar campos, Establecer orden, Destacar botón"]
tipo: "ordenar"

explicacion: |
  Primero se organiza el contenido (agrupación), luego se da sentido al flujo (orden) y finalmente se indica dónde terminar la tarea (CTA).
```

### 5 — El uso del Espacio en Blanco
```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "avanzado"
  tags: ["whitespace", "proximidad"]

variables:
  espacio_extra: uno_de([true, false])

enunciado: "En el diseño de una interfaz, si aplicamos la Ley de Proximidad de la Gestalt, al aumentar el espacio en blanco (whitespace) entre dos elementos, la percepción de su relación cambia. Si el espacio aumenta, la relación entre ellos es ___."

opciones_explicitas: ["fuerte", "débil", "nula"]
respuesta: "débil"
tipo: "mc"

explicacion: |
  La proximidad dicta que los elementos cercanos se perciben como parte de un mismo grupo. Al aumentar el espacio entre ellos, el cerebro deja de verlos como una unidad, rompiendo la relación visual.
```