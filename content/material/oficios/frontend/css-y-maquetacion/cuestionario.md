# Frontend — CSS y maquetación (cuestionario, 25 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — CSS

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "basico"
  tags: ["css"]

tipo: mc
opciones_explicitas: ["El aspecto y la disposición de una página", "La estructura", "El comportamiento", "La base de datos"]
respuesta: "El aspecto y la disposición de una página"

enunciado: "¿Qué define CSS?"

explicacion: |
  Colores, tipografía, tamaños y espacios.
```

### 2 — Regla

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "basico"
  tags: ["reglas"]

tipo: mc
opciones_explicitas: ["Un selector y declaraciones (propiedad: valor)", "Una función", "Una etiqueta", "Un archivo"]
respuesta: "Un selector y declaraciones (propiedad: valor)"

enunciado: "¿De qué se compone una regla CSS?"

explicacion: |
  Por ejemplo, `h1 {{ color: red; }}`.
```

### 3 — Incluir

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "basico"
  tags: ["incluir"]

tipo: mc
opciones_explicitas: ["Un archivo externo", "El atributo `style` en cada elemento", "Una imagen", "Un comentario"]
respuesta: "Un archivo externo"

enunciado: "¿Cuál es la forma recomendada de incluir CSS?"

explicacion: |
  Facilita el mantenimiento y la reutilización.
```

### 4 — Clase

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "basico"
  tags: ["selectores"]

tipo: mc
opciones_explicitas: ["`.aviso`", "`#aviso`", "`aviso`", "`*aviso`"]
respuesta: "`.aviso`"

enunciado: "¿Cómo se selecciona un elemento con `class=\"aviso\"`?"

explicacion: |
  El punto indica clase.
```

### 5 — Id

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "basico"
  tags: ["selectores"]

tipo: mc
opciones_explicitas: ["`#cabecera`", "`.cabecera`", "`cabecera`", "`@cabecera`"]
respuesta: "`#cabecera`"

enunciado: "¿Cómo se selecciona un elemento con `id=\"cabecera\"`?"

explicacion: |
  El `id` debe ser único.
```

### 6 — Descendiente

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "intermedio"
  tags: ["selectores"]

tipo: mc
opciones_explicitas: ["Los enlaces dentro de un `<nav>`", "Los `<nav>` dentro de enlaces", "Todos los enlaces", "Solo el primer enlace"]
respuesta: "Los enlaces dentro de un `<nav>`"

enunciado: "¿Qué elige `nav a`?"

explicacion: |
  Es un selector descendiente.
```

### 7 — Hover

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "basico"
  tags: ["pseudoclases"]

tipo: mc
opciones_explicitas: ["Un enlace cuando el mouse está encima", "Todos los enlaces", "Los enlaces visitados", "El primer enlace"]
respuesta: "Un enlace cuando el mouse está encima"

enunciado: "¿Qué elige `a:hover`?"

explicacion: |
  Es una pseudoclase.
```

### 8 — Clases

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "basico"
  tags: ["buenas practicas"]

tipo: mc
opciones_explicitas: ["Las clases", "Los id", "`!important`", "Los atributos `style`"]
respuesta: "Las clases"

enunciado: "¿Qué se prefiere para dar estilo?"

explicacion: |
  Son reutilizables y de especificidad media.
```

### 9 — Especificidad

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "intermedio"
  tags: ["especificidad"]

tipo: mc
opciones_explicitas: ["Un selector de id", "Un selector de elemento", "Un selector de clase", "Ninguno"]
respuesta: "Un selector de id"

enunciado: "¿Qué tiene mayor especificidad?"

explicacion: |
  id > clase > elemento.
```

### 10 — Empate

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "intermedio"
  tags: ["cascada"]

tipo: mc
opciones_explicitas: ["La que está escrita después", "La primera", "La más corta", "Ninguna"]
respuesta: "La que está escrita después"

enunciado: "Si dos reglas tienen la misma especificidad, ¿cuál gana?"

explicacion: |
  Es la "cascada".
```

### 11 — Herencia

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "basico"
  tags: ["herencia"]

tipo: mc
opciones_explicitas: ["El color del texto", "El margen", "El borde", "El padding"]
respuesta: "El color del texto"

enunciado: "¿Qué propiedad suele heredarse?"

explicacion: |
  Los hijos la toman del padre.
```

### 12 — Caja

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "basico"
  tags: ["caja"]

tipo: mc
opciones_explicitas: ["Contenido, padding, borde y margen", "Margen, borde y contenido", "Contenido y color", "Solo el margen"]
respuesta: "Contenido, padding, borde y margen"

enunciado: "¿Cuáles son las partes del modelo de caja, de adentro hacia afuera?"

explicacion: |
  Cada elemento es una caja.
```

### 13 — Border-box

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "intermedio"
  tags: ["boxsizing"]

tipo: mc
opciones_explicitas: ["El ancho declarado incluye el padding y el borde", "Elimina el borde", "Elimina el margen", "Cambia el color"]
respuesta: "El ancho declarado incluye el padding y el borde"

enunciado: "¿Qué hace `box-sizing: border-box`?"

explicacion: |
  Simplifica el cálculo.
```

### 14 — Rem

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "intermedio"
  tags: ["unidades"]

tipo: mc
opciones_explicitas: ["Al tamaño de la fuente de la raíz", "A la pantalla", "Al padre", "Al borde"]
respuesta: "Al tamaño de la fuente de la raíz"

enunciado: "¿A qué es relativa la unidad `rem`?"

explicacion: |
  Respeta las preferencias del usuario.
```

### 15 — Vw

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "intermedio"
  tags: ["unidades"]

tipo: mc
opciones_explicitas: ["Un porcentaje del ancho de la ventana", "Un píxel", "Un tamaño de fuente", "Una altura"]
respuesta: "Un porcentaje del ancho de la ventana"

enunciado: "¿Qué mide `vw`?"

explicacion: |
  `vh` mide el alto.
```

### 16 — Flex

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "basico"
  tags: ["flexbox"]

tipo: mc
opciones_explicitas: ["Para alinear elementos en una sola dimensión (fila o columna)", "Para tablas de datos", "Para bases de datos", "Para animaciones"]
respuesta: "Para alinear elementos en una sola dimensión (fila o columna)"

enunciado: "¿Cuándo es útil Flexbox?"

explicacion: |
  Por ejemplo, barras y tarjetas.
```

### 17 — Justify

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "intermedio"
  tags: ["flexbox"]

tipo: mc
opciones_explicitas: ["Distribuye los elementos con el espacio entre ellos", "Los centra verticalmente", "Los oculta", "Los ordena alfabéticamente"]
respuesta: "Distribuye los elementos con el espacio entre ellos"

enunciado: "¿Qué hace `justify-content: space-between` en un contenedor flex?"

explicacion: |
  Afecta al eje principal.
```

### 18 — Grid

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "basico"
  tags: ["grid"]

tipo: mc
opciones_explicitas: ["Para disposiciones en dos dimensiones, como cuadrículas y diseños de página", "Para una sola fila", "Para tipografías", "Para colores"]
respuesta: "Para disposiciones en dos dimensiones, como cuadrículas y diseños de página"

enunciado: "¿Cuándo es útil Grid?"

explicacion: |
  Define filas y columnas.
```

### 19 — Repeat

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "intermedio"
  tags: ["grid"]

tipo: mc
opciones_explicitas: ["Crea tres columnas del mismo ancho", "Crea tres filas", "Repite una imagen", "Duplica el elemento"]
respuesta: "Crea tres columnas del mismo ancho"

enunciado: "¿Qué hace `grid-template-columns: repeat(3, 1fr)`?"

explicacion: |
  `fr` es una fracción del espacio disponible.
```

### 20 — Responsive

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "basico"
  tags: ["responsive"]

tipo: mc
opciones_explicitas: ["Que la página se adapte a distintos tamaños de pantalla", "Que sea rápida", "Que sea animada", "Que tenga muchos colores"]
respuesta: "Que la página se adapte a distintos tamaños de pantalla"

enunciado: "¿Qué es el diseño adaptable (responsive)?"

explicacion: |
  Se usa viewport y media queries.
```

### 21 — Media query

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "basico"
  tags: ["mediaquery"]

tipo: mc
opciones_explicitas: ["Para aplicar reglas según el tamaño o característica de la pantalla", "Para consultar bases", "Para pedir un archivo", "Para animar"]
respuesta: "Para aplicar reglas según el tamaño o característica de la pantalla"

enunciado: "¿Para qué sirve una media query?"

explicacion: |
  Por ejemplo, `min-width: 768px`.
```

### 22 — Mobile first

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "intermedio"
  tags: ["mobilefirst"]

tipo: mc
opciones_explicitas: ["Diseñar primero para móvil y ampliar para pantallas grandes", "Diseñar solo para móvil", "Diseñar al final", "Diseñar para televisores"]
respuesta: "Diseñar primero para móvil y ampliar para pantallas grandes"

enunciado: "¿Qué significa mobile first?"

explicacion: |
  Se agregan reglas con `min-width`.
```

### 23 — Imágenes

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "basico"
  tags: ["imagenes"]

tipo: mc
opciones_explicitas: ["`max-width: 100%`", "`position: fixed`", "`color: red`", "`float: left`"]
respuesta: "`max-width: 100%`"

enunciado: "¿Qué evita que una imagen se salga de su contenedor?"

explicacion: |
  Se adapta al ancho disponible.
```

### 24 — Variables

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "basico"
  tags: ["variables"]

tipo: mc
opciones_explicitas: ["Para reutilizar valores como colores y tamaños", "Para programar", "Para cifrar", "Para comprimir"]
respuesta: "Para reutilizar valores como colores y tamaños"

enunciado: "¿Para qué sirven las variables CSS (`--color-principal`)?"

explicacion: |
  Cambiar un valor actualiza todos los usos.
```

### 25 — Foco

```
metadata:
  materia: "frontend"
  tema: "css_y_maquetacion"
  nivel: "basico"
  tags: ["accesibilidad"]

tipo: mc
opciones_explicitas: ["No quitarlo sin reemplazarlo por otro indicador visible", "Quitarlo siempre", "Hacerlo transparente", "Ocultarlo"]
respuesta: "No quitarlo sin reemplazarlo por otro indicador visible"

enunciado: "¿Qué conviene con el contorno de foco (`outline`)?"

explicacion: |
  Lo necesitan quienes navegan con teclado.
```

