# UX y diseño — Diseño responsive y mobile first (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Responsive

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "basico"
  tags: ["ux"]

enunciado: "El diseño responsive es el enfoque en que..."
tipo: mc
opciones_explicitas:
  - "La interfaz se ajusta a cada tamaño de pantalla"
  - "Se hace una versión distinta por dispositivo"
  - "Se bloquea el zoom"
respuesta: "La interfaz se ajusta a cada tamaño de pantalla"

explicacion: |
  Se basa en grillas fluidas, imágenes flexibles y reglas según el ancho.
```

### 2 — Quién

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El término 'diseño web responsive' fue propuesto por..."
tipo: mc
opciones_explicitas:
  - "Ethan Marcotte"
  - "Jakob Nielsen"
  - "Tim Berners-Lee"
respuesta: "Ethan Marcotte"

explicacion: |
  En 2010.
```

### 3 — Grilla fluida

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Una grilla fluida expresa el ancho de las columnas en..."
tipo: mc
opciones_explicitas:
  - "Proporciones del espacio disponible"
  - "Píxeles fijos"
  - "Colores"
respuesta: "Proporciones del espacio disponible"

explicacion: |
  Se estira y se encoge de manera continua.
```

### 4 — Punto de quiebre

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un punto de quiebre (breakpoint) es..."
tipo: mc
opciones_explicitas:
  - "Un ancho de pantalla en el que el diseño cambia de forma"
  - "Un error de programación"
  - "Un tipo de imagen"
respuesta: "Un ancho de pantalla en el que el diseño cambia de forma"

explicacion: |
  Por ejemplo, de tres columnas a una.
```

### 5 — Según contenido

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Los puntos de quiebre conviene elegirlos según el contenido y no según modelos de dispositivos puntuales."

explicacion: |
  Los dispositivos cambian todos los años.
```

### 6 — Mobile first

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Mobile first significa..."
tipo: mc
opciones_explicitas:
  - "Empezar a diseñar por la pantalla más chica"
  - "Diseñar solo para celulares"
  - "Diseñar primero para pantallas grandes"
respuesta: "Empezar a diseñar por la pantalla más chica"

explicacion: |
  Y sumar complejidad con más espacio.
```

### 7 — Ventaja

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Una ventaja de mobile first es que..."
tipo: mc
opciones_explicitas:
  - "Obliga a decidir qué es realmente importante"
  - "Evita probar el diseño"
  - "Elimina la necesidad de imágenes"
respuesta: "Obliga a decidir qué es realmente importante"

explicacion: |
  En una pantalla chica no entra todo.
```

### 8 — Desktop first

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Empezar por el escritorio y recortar para el celular suele dejar partes ocultas sin criterio."

explicacion: |
  Es más fácil ampliar uno simple que recortar uno complejo.
```

### 9 — Táctil

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Una diferencia clave entre cursor y dedo es que el dedo..."
tipo: mc
opciones_explicitas:
  - "Es menos preciso"
  - "Es más preciso"
  - "Puede hacer hover"
respuesta: "Es menos preciso"

explicacion: |
  Los objetivos tocables necesitan buen tamaño.
```

### 10 — Tamaño mínimo AA

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "El tamaño mínimo de objetivo táctil que pide WCAG 2.2 en nivel AA es de..."
tipo: mc
opciones_explicitas:
  - "24 por 24 píxeles CSS (con excepciones)"
  - "4 por 4 píxeles"
  - "200 por 200 píxeles"
respuesta: "24 por 24 píxeles CSS (con excepciones)"

explicacion: |
  Se recomiendan tamaños mayores, del orden de 44 por 44.
```

### 11 — Hover

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "La información que aparece solo al pasar el cursor por encima..."
tipo: mc
opciones_explicitas:
  - "No existe en una pantalla táctil"
  - "Funciona igual en un celular"
  - "Es obligatoria"
respuesta: "No existe en una pantalla táctil"

explicacion: |
  No hay hover en táctil.
```

### 12 — Pulgar

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Las acciones frecuentes en celular conviene ubicarlas..."
tipo: mc
opciones_explicitas:
  - "Al alcance del pulgar"
  - "En la esquina superior más lejana"
  - "Ocultas en un menú profundo"
respuesta: "Al alcance del pulgar"

explicacion: |
  Mejora la comodidad de uso.
```

### 13 — Prioridad

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "basico"
  tags: ["ux"]

enunciado: "En una pantalla chica, ¿qué se prioriza?"
tipo: mc
opciones_explicitas:
  - "Lo que la persona vino a hacer"
  - "Los banners publicitarios"
  - "La información legal"
respuesta: "Lo que la persona vino a hacer"

explicacion: |
  El resto pasa a un segundo plano.
```

### 14 — Scroll horizontal

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Conviene evitar el desplazamiento horizontal en pantallas chicas."

explicacion: |
  Obliga a mover la pantalla en dos direcciones.
```

### 15 — Bloquear zoom

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Bloquear el zoom del navegador es una buena práctica de diseño móvil."

explicacion: |
  Perjudica a quien necesita agrandar el contenido.
```

### 16 — Columnas

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "basico"
  tags: ["ux"]

enunciado: "En una pantalla angosta suele pasarse de varias columnas a..."
tipo: mc
opciones_explicitas:
  - "Una sola columna"
  - "Seis columnas"
  - "Ninguna columna"
respuesta: "Una sola columna"

explicacion: |
  Se apilan los bloques.
```

### 17 — Imágenes flexibles

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Una imagen flexible se caracteriza por..."
tipo: mc
opciones_explicitas:
  - "Escalar según el espacio disponible"
  - "Tener siempre el mismo tamaño"
  - "Ocultarse en pantallas chicas"
respuesta: "Escalar según el espacio disponible"

explicacion: |
  Es una de las tres ideas del diseño responsive.
```

### 18 — Probar

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Para probar un diseño responsive conviene..."
tipo: mc
opciones_explicitas:
  - "Usar simuladores y también dispositivos reales"
  - "Mirarlo solo en una pantalla"
  - "No probarlo"
respuesta: "Usar simuladores y también dispositivos reales"

explicacion: |
  Hay condiciones reales que no se simulan bien.
```

### 19 — Ventaja liviana

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Mobile first tiende a producir una versión base..."
tipo: mc
opciones_explicitas:
  - "Más liviana y rápida"
  - "Más pesada"
  - "Sin texto"
respuesta: "Más liviana y rápida"

explicacion: |
  Se agrega lo extra solo cuando hay espacio.
```

### 20 — Breakpoint

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "basico"
  tags: ["ux"]

tipo: completar
enunciado: "Otro nombre para punto de quiebre es ___."
respuestas_validas:
  - "breakpoint"

explicacion: |
  Palabra en inglés usada en el desarrollo web.
```

### 21 — Tres ideas

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "avanzado"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "El diseño responsive combina grillas fluidas, imágenes flexibles y reglas según el ancho de pantalla."

explicacion: |
  Es la definición clásica.
```

### 22 — Menú

```
metadata:
  materia: "diseño"
  tema: "diseno_responsive_y_mobile_first"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "En pantallas chicas, esconder las opciones secundarias detrás de un menú es razonable si..."
tipo: mc
opciones_explicitas:
  - "No se esconde lo esencial"
  - "Se esconde todo"
  - "Se quita el buscador"
respuesta: "No se esconde lo esencial"

explicacion: |
  La prioridad debe seguir siendo clara.
```
