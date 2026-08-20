### 1 — Naturaleza de los vectores
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["conceptos", "escalado"]
enunciado: |
  En el diseño vectorial, ¿cuál es la característica principal que permite
  escalar un logotipo a tamaño de cartel sin perder calidad visual?
uno_de(
  - "Se basa en una cuadrícula de píxeles fijos."
  - "Utiliza matemáticas para definir formas y líneas."
  - "Depende exclusivamente de la resolución del monitor."
respuesta: "Utiliza matemáticas para definir formas y líneas."
tipo: vf
explicacion: Los vectores usan ecuaciones geométricas (puntos, líneas) que se redibujan a cualquier tamaño, a diferencia del raster que usa píxeles.
```

### 2 — Curvas de Bezier
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["herramientas", "curvas"]
enunciado: |
  Para crear una curva suave y compleja en la herramienta Pluma, ¿qué elemento
  controla la tensión o curvatura de la línea entre los anclas?
uno_de(
  - "El grosor del pincel."
  - "Los puntos de control (manejadores) asociados a las anclas."
  - "La velocidad de dibujo en el panel de propiedades."
respuesta: "Los puntos de control (manejadores) asociados a las anclas."
tipo: completar
respuestas_validas: ["puntos de control", "manejadores"]
explicacion: Los manejadores definen la dirección y distancia que la curva sigue desde la ancla.
```

### 3 — Objeto compuesto (Pathfinder)
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["operaciones", "formas"]
enunciado: |
  Al usar el panel Pathfinder en Illustrator, ¿qué resultado produce la opción
  "Unir" (Merge) sobre dos formas solapadas?
uno_de(
  - "Crea un agujero en la forma inferior."
  - "Combina las áreas sólidas en una sola forma continua."
  - "Elimina el color de relleno de ambas."
respuesta: "Combina las áreas sólidas en una sola forma continua."
tipo: mc
opciones_explicitas: [
  "Crea un agujero en la forma inferior.",
  "Combina las áreas sólidas en una sola forma continua.",
  "Elimina el color de relleno de ambas."
]
explicacion: Merge o Unite fusiona los caminos solapados en uno nuevo.
```

### 4 — Jerarquía de objetos
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["seleccion", "herramientas"]
enunciado: |
  Si tienes dos círculos solapados y seleccionas los puntos de control del círculo
  superior, ¿qué herramienta te permite editar esos nodos sin mover el círculo
  entero?
uno_de(
  - "La herramienta Selección (V)."
  - "La herramienta Direct Selection (A)."
  - "La herramienta Lata de pintura."
respuesta: "La herramienta Direct Selection (A)."
tipo: completar
respuestas_validas: ["Direct Selection", "Selección directa"]
explicacion: La herramienta A selecciona nodos o segmentos individuales dentro del objeto.
```

### 5 — Escalado sin pérdida
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["transformar", "calidad"]
enunciado: |
  Al escalar un objeto vectorial, ¿qué opción en el cuadro de diálogo Transformar
  asegura que las proporciones del ancho y alto se mantengan iguales?
uno_de(
  - "Ancho"
  - "Alto"
  - "Bloquear" (o la cadena)
respuesta: "Bloquear"
tipo: mc
opciones_explicitas: [
  "Ancho",
  "Alto",
  "Bloquear"
]
explicacion: Bloquear (Lock) vincula los valores de ancho y alto para evitar deformación.
```

### 6 — Herramienta Pluma
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["herramientas", "nodos"]
enunciado: |
  ¿Qué tecla de acceso rápido en Illustrator permite convertir un punto curvo a uno
  angular (sin manejadores) mientras se usa la herramienta Pluma?
uno_de(
  - "Alt"
  - "Ctrl"
  - "Shift"
respuesta: "Alt"
tipo: completar
respuestas_validas: ["Alt", "Option"]
explicacion: Alt permite ajustar manualmente el punto sin convertirlo a curvo automáticamente.
```

### 7 — Herramienta Lápiz vs Pluma
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["herramientas", "dibujo"]
enunciado: |
  La herramienta Lápiz en Illustrator permite dibujar trazos libres, pero ¿qué
  característica fundamental limita su precisión en comparación con la Pluma?
uno_de(
  - "No permite editar nodos existentes."
  - "Crea curvas de Bezier exactas por defecto."
  - "Requiere configuración de rejilla para funcionar."
respuesta: "No permite editar nodos existentes."
tipo: vf
explicacion: El Lápiz dibuja libremente sin la capacidad nativa de ajustar anclas como la Pluma.
```

### 8 — Nodos y curvas abiertas/cerradas
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["caminos", "estructura"]
enunciado: |
  Si deseas crear un círculo perfecto en Illustrator, ¿qué tipo de camino debe tener
  la herramienta Elipse para que no se vea como una forma abierta?
uno_de(
  - "Debe ser un camino abierto (sin cerrar)."
  - "Debe ser un camino cerrado (con ancla final conectada a inicial)."
  - "No importa, siempre se cierra automáticamente."
respuesta: "Debe ser un camino cerrado (con ancla final conectada a inicial)."
tipo: mc
opciones_explicitas: [
  "Debe ser un camino abierto (sin cerrar).",
  "Debe ser un camino cerrado (con ancla final conectada a inicial).",
  "No importa, siempre se cierra automáticamente."
]
explicacion: Para tener relleno y ser considerado forma, el camino debe cerrarse.
```

### 9 — Relleno vs Trazo
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["apariencia", "color"]
enunciado: |
  En el panel de Apariencia, ¿qué propiedad define el color que se ve dentro del
  contorno de un objeto vectorial?
uno_de(
  - "Trazo" (Stroke)
  - "Relleno" (Fill)
  - "Bordes" (Edges)
respuesta: "Relleno"
tipo: completar
respuestas_validas: ["Relleno", "Fill"]
explicacion: Relleno es el color interior; Trazo es el contorno.
```

### 10 — Simetría de objetos
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["herramientas", "transformar"]
enunciado: |
  Al usar la herramienta Transformar, ¿qué opción permite crear una réplica del
  objeto en el lado opuesto de un centro definido?
uno_de(
  - "Reflejar" (Flip)
  - "Simetría" (Symmetry)
  - "Rotación" (Rotate)
respuesta: "Reflejar"
tipo: mc
opciones_explicitas: [
  "Reflejar",
  "Simetría",
  "Rotación"
]
explicacion: Reflejar crea una copia especular del objeto.
```

### 11 — Agrupación (Group)
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["organización", "gestión"]
enunciado: |
  ¿Qué atajo de teclado en Illustrator agrupa rápidamente los objetos seleccionados?
uno_de(
  - "Ctrl+G" (o Cmd+G)
  - "Ctrl+B"
  - "Ctrl+Shift+G"
respuesta: "Ctrl+G"
tipo: completar
respuestas_validas: ["Ctrl+G", "Cmd+G"]
explicacion: Agrupa los objetos en una unidad lógica para moverlos juntos.
```

### 12 — Desagrupar (Ungroup)
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["organización", "gestión"]
enunciado: |
  Si un objeto está agrupado y necesitas editar sus componentes individuales, ¿qué
  acción debes realizar antes de seleccionar los nodos?
uno_de(
  - "Desagrupar" (Ungroup)
  - "Unir" (Merge)
  - "Expandir" (Expand)
respuesta: "Desagrupar"
tipo: mc
opciones_explicitas: [
  "Desagrupar",
  "Unir",
  "Expandir"
]
explicacion: Desagrupar separa los elementos agrupados sin cambiar sus propiedades.
```

### 13 — Objeto inteligente (Smart Object)
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["imágenes", "contenedores"]
enunciado: |
  En Illustrator, un Objeto Inteligente permite incrustar una imagen raster y
  editarla posteriormente sin perder calidad original. ¿Qué formato se usa comúnmente?
uno_de(
  - "PDF"
  - "PSD" o "AI" (Smart Object)
  - "JPG"
respuesta: "PSD"
tipo: mc
opciones_explicitas: [
  "PDF",
  "PSD",
  "JPG"
]
explicacion: Smart Objects usan PSD para retener capas y editabilidad de la imagen.
```

### 14 — Texto convertido a curvas
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["texto", "tipografía"]
enunciado: |
  Si deseas que un logotipo con texto no se vea alterado al exportar a otro programa,
  ¿qué acción aplicas en Illustrator?
uno_de(
  - "Crear contorno" (Create Outlines)
  - "Convertir a imagen"
  - "Guardar como PDF"
respuesta: "Crear contorno"
tipo: completar
respuestas_validas: ["Crear contorno", "Contorno"]
explicacion: Convierte el texto editable en formas vectoriales fijas.
```

### 15 — Tipografía ligera vs pesada
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["tipografía", "estilos"]
enunciado: |
  En el panel de Estilos, ¿qué propiedad define el grosor del trazo de una letra?
uno_de(
  - "Peso" o "Grosor" (Weight)
  - "Espaciado" (Tracking)
  - "Interlineado" (Leading)
respuesta: "Peso"
tipo: mc
opciones_explicitas: [
  "Peso",
  "Espaciado",
  "Interlineado"
]
explicacion: Peso define si es regular, bold, thin, etc.
```

### 16 — Clipping Mask (Recorte de máscara)
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["máscaras", "recorte"]
enunciado: |
  Al crear una Máscara de Recorte con un círculo y una imagen, ¿qué elemento define
  la forma visible de la imagen?
uno_de(
  - "La imagen superior."
  - "El objeto vectorial inferior (el recortador)."
  - "El fondo del documento."
respuesta: "El objeto vectorial inferior (el recortador)."
tipo: mc
opciones_explicitas: [
  "La imagen superior.",
  "El objeto vectorial inferior (el recortador).",
  "El fondo del documento."
]
explicacion: La capa de abajo define la forma; la de arriba es lo que se recorta.
```

### 17 — Estilos globales
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["estilos", "panel"]
enunciado: |
  ¿Qué panel permite crear y aplicar estilos de relleno y trazo que se actualizan
  automáticamente en todo el documento?
uno_de(
  - "Panel de Estilos (Styles)"
  - "Panel de Apariencia"
  - "Panel de Símbolos"
respuesta: "Panel de Estilos"
tipo: completar
respuestas_validas: ["Estilos", "Styles"]
explicacion: Los estilos globales gestionan la consistencia del diseño.
```

### 18 — Pantalla de colores (CMYK vs RGB)
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["colores", "modo"]
enunciado: |
  ¿Qué modo de color se recomienda para impresión en papel profesional?
uno_de(
  - "CMYK"
  - "RGB"
  - "Grises"
respuesta: "CMYK"
tipo: mc
opciones_explicitas: [
  "CMYK",
  "RGB",
  "Grises"
]
explicacion: CMYK usa tintas de impresión (Cyan, Magenta, Yellow, Key/Black).
```

### 19 — Alisado de bordes (Anti-aliasing)
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["renderizado", "calidad"]
enunciado: |
  ¿Qué función en el menú Editar (Preferences) mejora la suavidad de los bordes
  de las formas vectoriales al exportar?
uno_de(
  - "Alisado de bordes" o "Anti-aliasing"
  - "Submuestreo"
  - "Compresión JPEG"
respuesta: "Alisado de bordes"
tipo: completar
respuestas_validas: ["Alisado de bordes", "Anti-aliasing"]
explicacion: Suaviza los píxeles del borde para evitar escalones visibles.
```

### 20 — Exportación SVG vs PDF
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["exportar", "formatos"]
enunciado: |
  ¿Qué formato vectorial es ideal para web y permite interactividad (hover, click)?
uno_de(
  - "SVG"
  - "EPS"
  - "AI"
respuesta: "SVG"
tipo: mc
opciones_explicitas: [
  "SVG",
  "EPS",
  "AI"
]
explicacion: SVG es XML escalable para web con scripts.
```

### 21 — Importación de imágenes (Embed vs Link)
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["imágenes", "gestión"]
enunciado: |
  Si importas una imagen y luego mueves el archivo original, ¿qué opción en el panel
  de Enlaces asegura que la imagen no se rompa?
uno_de(
  - "Enlace" (Link)
  - "Incrustar" (Embed)
  - "Importar"
respuesta: "Enlace"
tipo: mc
opciones_explicitas: [
  "Enlace",
  "Incrustar",
  "Importar"
]
explicacion: Enlace mantiene la referencia al archivo externo.
```

### 22 — Herramienta Direct Selection Tool
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["herramientas", "selección"]
enunciado: |
  ¿Qué tecla de acceso rápido selecciona la herramienta Direct Selection en Illustrator?
uno_de(
  - "A"
  - "V"
  - "L"
respuesta: "A"
tipo: completar
respuestas_validas: ["A"]
explicacion: La A es el atajo para Direct Selection Tool.
```

### 23 — Herramienta Shape Builder
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["herramientas", "formas"]
enunciado: |
  La herramienta Shape Builder permite unir formas solapadas haciendo clic en las
  áreas que deseas conservar. ¿Qué botón activa esta acción?
uno_de(
  - "Unir" (Merge/Join)
  - "Desunir" (Subtract)
  - "Intersectar" (Intersect)
respuesta: "Unir"
tipo: mc
opciones_explicitas: [
  "Unir",
  "Desunir",
  "Intersectar"
]
explicacion: Shape Builder fusiona áreas con un clic o arrastre.
```

### 24 — Líneas guía y rejilla
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["alineación", "precisión"]
enunciado: |
  ¿Qué tecla permite ver o ocultar las líneas guía y la rejilla en Illustrator?
uno_de(
  - "Ctrl+;' (o Cmd+;)"
  - "Ctrl+Shift+;' (o Cmd+Shift+;)"
  - "Ctrl+0"
respuesta: "Ctrl+;' (o Cmd+;)"
tipo: completar
respuestas_validas: ["Ctrl+'", "Cmd+'"]
explicacion: El atajo de punto y coma muestra/oculta guías y rejilla.
```

### 25 — Optimización de archivos grandes
```yaml
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["optimización", "rendimiento"]
enunciado: |
  Si un archivo vectorial tiene muchas formas pequeñas y pesadas, ¿qué acción ayuda
  a reducir su peso sin perder calidad visual?
uno_de(
  - "Optimizar" o "Comprimir" (Simplify)
  - "Eliminar todos los rellenos"
  - "Exportar como imagen raster"
respuesta: "Optimizar"
tipo: mc
opciones_explicitas: [
  "Optimizar",
  "Eliminar todos los rellenos",
  "Exportar como imagen raster"
]
explicacion: Optimizar simplifica nodos innecesarios en formas complejas.
```