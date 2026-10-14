# Diseño gráfico — Gráficos vectoriales (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Vectorial

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Fórmulas matemáticas que describen formas", "Píxeles", "Sonidos", "Texto plano"]
respuesta: "Fórmulas matemáticas que describen formas"

enunciado: "¿Qué guarda un gráfico vectorial?"

explicacion: |
  Se redibuja a cualquier tamaño.
```

### 2 — Ampliar

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["ampliar"]

tipo: mc
opciones_explicitas: ["No pierde calidad", "Se pixela", "Se borra", "Se vuelve gris"]
respuesta: "No pierde calidad"

enunciado: "¿Qué pasa al ampliar un gráfico vectorial?"

explicacion: |
  Se recalcula.
```

### 3 — Logo

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["logo"]

tipo: mc
opciones_explicitas: ["Vectorial", "Mapa de bits", "Una foto", "Un video"]
respuesta: "Vectorial"

enunciado: "¿Qué tipo de gráfico es ideal para un logotipo?"

explicacion: |
  Se usa a distintos tamaños.
```

### 4 — Foto

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["foto"]

tipo: mc
opciones_explicitas: ["De mapa de bits", "Vectorial", "Un trazado", "Un ícono"]
respuesta: "De mapa de bits"

enunciado: "¿Qué tipo de gráfico es ideal para una fotografía?"

explicacion: |
  Las fotos tienen detalles continuos de color.
```

### 5 — Formato

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["formatos"]

tipo: mc
opciones_explicitas: ["SVG", "JPG", "PNG", "GIF"]
respuesta: "SVG"

enunciado: "¿Cuál es un formato vectorial?"

explicacion: |
  También AI, EPS y PDF.
```

### 6 — Programa

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["programas"]

tipo: mc
opciones_explicitas: ["Inkscape", "GIMP", "Audacity", "Blender"]
respuesta: "Inkscape"

enunciado: "¿Cuál es un programa libre de gráficos vectoriales?"

explicacion: |
  GIMP es de mapa de bits.
```

### 7 — Trazado

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["trazado"]

tipo: mc
opciones_explicitas: ["Una línea formada por nodos unidos por segmentos", "Una foto", "Un color", "Una carpeta"]
respuesta: "Una línea formada por nodos unidos por segmentos"

enunciado: "¿Qué es un trazado (path)?"

explicacion: |
  Puede ser abierto o cerrado.
```

### 8 — Nodo

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["nodo"]

tipo: mc
opciones_explicitas: ["Un punto de ancla de un trazado", "Un color", "Un archivo", "Un sonido"]
respuesta: "Un punto de ancla de un trazado"

enunciado: "¿Qué es un nodo?"

explicacion: |
  Los nodos tienen manijas.
```

### 9 — Bézier

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["bezier"]

tipo: mc
opciones_explicitas: ["La dirección y la curvatura", "El color", "El tamaño del archivo", "El formato"]
respuesta: "La dirección y la curvatura"

enunciado: "¿Qué controlan las manijas de una curva de Bézier?"

explicacion: |
  Se arrastran para ajustar.
```

### 10 — Pluma

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["pluma"]

tipo: mc
opciones_explicitas: ["Haciendo clic y arrastrando", "Solo con clics", "Escribiendo", "Con el borrador"]
respuesta: "Haciendo clic y arrastrando"

enunciado: "¿Cómo se crea una curva con la herramienta pluma?"

explicacion: |
  El arrastre genera las manijas.
```

### 11 — Menos nodos

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["nodos"]

tipo: mc
opciones_explicitas: ["Las curvas son más suaves y el archivo más liviano", "Para gastar tinta", "Por estética únicamente", "No conviene"]
respuesta: "Las curvas son más suaves y el archivo más liviano"

enunciado: "¿Por qué conviene usar pocos nodos?"

explicacion: |
  Se colocan en extremos y cambios de dirección.
```

### 12 — Relleno y trazo

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["trazo"]

tipo: mc
opciones_explicitas: ["El contorno de la forma", "El interior", "El fondo", "El archivo"]
respuesta: "El contorno de la forma"

enunciado: "¿Qué es el trazo?"

explicacion: |
  El relleno es el interior.
```

### 13 — Degradado

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["degradado"]

tipo: mc
opciones_explicitas: ["Lineal y radial", "Solo lineal", "Solo circular", "Ninguno"]
respuesta: "Lineal y radial"

enunciado: "¿Qué tipos de degradado son comunes?"

explicacion: |
  Mezclan colores gradualmente.
```

### 14 — Unión

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["booleanas"]

tipo: mc
opciones_explicitas: ["Crea una sola forma que cubre ambas", "Quita una forma", "Deja la parte común", "Borra todo"]
respuesta: "Crea una sola forma que cubre ambas"

enunciado: "¿Qué hace la operación booleana \"unión\"?"

explicacion: |
  Se usa para combinar formas.
```

### 15 — Resta

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["booleanas"]

tipo: mc
opciones_explicitas: ["Quita la forma de arriba a la de abajo", "Une", "Duplica", "Cambia el color"]
respuesta: "Quita la forma de arriba a la de abajo"

enunciado: "¿Qué hace la \"resta\"?"

explicacion: |
  Sirve para hacer agujeros.
```

### 16 — Intersección

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["booleanas"]

tipo: mc
opciones_explicitas: ["Solo la parte común", "Todo", "Nada", "La parte no común"]
respuesta: "Solo la parte común"

enunciado: "¿Qué deja la \"intersección\"?"

explicacion: |
  Es lo que comparten las dos formas.
```

### 17 — Curvas

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["texto"]

tipo: mc
opciones_explicitas: ["Para que no dependa de tener la misma tipografía", "Para que pese más", "Para que sea editable", "Para cambiar el color"]
respuesta: "Para que no dependa de tener la misma tipografía"

enunciado: "¿Por qué se convierte el texto a curvas antes de enviar un logotipo?"

explicacion: |
  Después ya no se edita como texto.
```

### 18 — Vectorizar

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["vectorizar"]

tipo: mc
opciones_explicitas: ["Dibujos simples con pocos colores", "Fotos", "Capturas de video", "Radiografías"]
respuesta: "Dibujos simples con pocos colores"

enunciado: "¿Con qué imágenes funciona mejor la vectorización automática?"

explicacion: |
  Con fotos queda mal.
```

### 19 — Logo bueno

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["logo"]

tipo: mc
opciones_explicitas: ["Simple, legible en tamaño chico y con pocos colores", "Con muchos detalles", "Solo a color", "Copiado"]
respuesta: "Simple, legible en tamaño chico y con pocos colores"

enunciado: "¿Qué características tiene un buen logotipo?"

explicacion: |
  Debe funcionar en blanco y negro.
```

### 20 — Versiones

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "intermedio"
  tags: ["logo"]

tipo: mc
opciones_explicitas: ["Horizontal, vertical, ícono, positivo y negativo", "Solo una", "Solo en color", "Solo en blanco"]
respuesta: "Horizontal, vertical, ícono, positivo y negativo"

enunciado: "¿Qué versiones se preparan de un logotipo?"

explicacion: |
  Se usan según el espacio.
```

### 21 — Web

```
metadata:
  materia: "diseno-grafico"
  tema: "vectorial"
  nivel: "basico"
  tags: ["svg"]

tipo: mc
opciones_explicitas: ["SVG", "EPS", "TIFF", "RAW"]
respuesta: "SVG"

enunciado: "¿Qué formato vectorial se usa en la web?"

explicacion: |
  Se puede editar con código y animar.
```

