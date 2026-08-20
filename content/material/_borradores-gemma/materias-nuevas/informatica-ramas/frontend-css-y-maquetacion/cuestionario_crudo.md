### 1 — Selectores de atributo exacto
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["selectores", "atributos", "css3"]
respuesta: verdadero
tipo: vf
enunciado:
  En CSS3, el selector `[href="#"]` coincide exclusivamente con elementos cuyo atributo `href` contiene exactamente el valor `#`, ignorando elementos con `href="http://ejemplo.com"` o `href=""`.
pasos:
  - "Identificar la semántica del selector de atributo con operador `=`."
  - "Verificar que `=` denota igualdad exacta de cadena."
explicacion:
  El operador `=` en selectores de atributos (`[attr=value]`) realiza una comparación de cadena exacta. Por lo tanto, solo selecciona elementos donde el atributo es idéntico al valor especificado.
```

### 2 — Completar: Propiedad de alineación Flexbox
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["flexbox", "eje-primario", "alineacion"]
respuesta: "justify-content"
respuestas_validas:
  - "justify-content"
  - "justify-content: flex-start"
  - "justify-content: flex-end"
  - "justify-content: center"
  - "justify-content: space-between"
  - "justify-content: space-around"
  - "justify-content: space-evenly"
tipo: completar
enunciado:
  Para distribuir los elementos hijos a lo largo del {{eje-primario}} del contenedor flex, se utiliza la propiedad `______`.
pasos:
  - "Distinguir entre el eje principal y el eje transversal en Flexbox."
  - "Asociar la distribución espacial del eje principal con su propiedad correspondiente."
explicacion:
  `justify-content` controla la alineación de los ítems a lo largo del eje principal (horizontal por defecto). `align-items` lo hace en el eje transversal.
```

### 3 — Completar: Unidad relativa al viewport
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["unidades", "viewport", "responsivo"]
respuesta: "vh"
respuestas_validas:
  - "vh"
  - "VH"
tipo: completar
enunciado:
  Si se desea que un elemento ocupe el 100% de la altura visible de la ventana del navegador, independientemente del contenido de la página, se usa la unidad `______`.
pasos:
  - "Recordar las unidades relativas al viewport: vw, vh, vmin, vmax."
  - "Identificar que 'v' significa viewport y 'h' significa height (altura)."
explicacion:
  `vh` representa el 1% de la altura de la ventana gráfica. `vw` es el ancho.
```

### 4 — Completar: Función de transición temporal
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["transiciones", "timing-functions", "cubic-bezier"]
respuesta: "cubic-bezier"
respuestas_validas:
  - "cubic-bezier"
  - "Cubic-bezier"
tipo: completar
enunciado:
  Para definir una curva de aceleración personalizada en una transición CSS, se utiliza la función `______(x1, y1, x2, y2)`.
pasos:
  - "Identificar las funciones de temporización estándar: ease, linear, ease-in, etc."
  - "Reconocer la función que permite especificar puntos de control arbitrarios."
explicacion:
  `cubic-bezier` permite crear curvas de animación personalizadas definiendo dos puntos de control intermedios en un espacio de coordenadas normalizado.
```

### 5 — Completar: Propiedad de overflow moderno
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["overflow", "scroll-snap", "contenedores"]
respuesta: "scroll-snap-type"
respuestas_validas:
  - "scroll-snap-type"
  - "scroll-snap-type: x mandatory"
  - "scroll-snap-type: y mandatory"
  - "scroll-snap-type: both mandatory"
tipo: completar
enunciado:
  Para habilitar el comportamiento de "ajuste al desplazamiento" (scroll snapping) en un contenedor, se debe establecer la propiedad `______`.
pasos:
  - "Buscar propiedades relacionadas con el comportamiento del scroll."
  - "Identificar la propiedad que define el tipo de snap (x, y, both) y la fuerza (mandatory, proximity)."
explicacion:
  `scroll-snap-type` se aplica al contenedor padre para definir cómo los hijos se alinean al detener el scroll.
```

### 6 — Completar: Variable CSS personalizada
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["css-variables", "custom-properties", "declive"]
respuesta: "var"
respuestas_validas:
  - "var"
  - "Var"
tipo: completar
enunciado:
  Para usar una variable CSS personalizada definida con `--mi-color`, se utiliza la función `______(--mi-color)`.
pasos:
  - "Recordar la sintaxis de referencia de variables CSS."
  - "Identificar la función nativa de CSS para recuperar el valor de una propiedad."
explicacion:
  La función `var()` es la forma estándar y nativa de insertar el valor de una variable CSS en una declaración.
```

### 7 — Completar: Posicionamiento relativo
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["posicionamiento", "static", "relative"]
respuesta: "static"
respuestas_validas:
  - "static"
  - "Static"
tipo: completar
enunciado:
  El valor por defecto de la propiedad `position` en CSS, donde el elemento sigue el flujo normal del documento y no se puede desplazar con `top`/`left`, es `______`.
pasos:
  - "Revisar los valores posibles de `position`: static, relative, absolute, fixed, sticky."
  - "Identificar cuál es el comportamiento predeterminado."
explicacion:
  `static` es el valor inicial. Los elementos static no están afectados por `top`, `bottom`, `left` o `right`.
```

### 8 — Completar: Grid de columnas repetidas
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["css-grid", "repeat", "funciones"]
respuesta: "repeat"
respuestas_validas:
  - "repeat"
  - "Repeat"
tipo: completar
enunciado:
  Para definir una cuadrícula CSS con 3 columnas de igual ancho, se utiliza la sintaxis `grid-template-columns: repeat(3, ______)`.
pasos:
  - "Identificar la función dentro de `grid-template-columns` que permite repetir patrones."
  - "Completar con la función que indica la unidad de medida o keyword (ej. fr)."
explicacion:
  La función `repeat()` simplifica la definición de patrones de columnas o filas. El segundo argumento suele ser `1fr` para anchos iguales.
```

### 9 — Completar: Transformación 3D
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["transformaciones", "3d", "perspectiva"]
respuesta: "perspective"
respuestas_validas:
  - "perspective"
  - "Perspective"
tipo: completar
enunciado:
  Para que las transformaciones 3D (como `rotateX`) tengan un efecto visual de profundidad realista en los hijos, el padre debe tener una propiedad `______` aplicada.
pasos:
  - "Reconocer que las transformaciones 3D requieren un punto de fuga."
  - "Identificar la propiedad que define la distancia del espectador al plano Z=0."
explicacion:
  `perspective` define la distancia entre el usuario y el plano Z=0, creando la ilusión de profundidad.
```

### 10 — Completar: Selector de hijo directo
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["selectores", "herencia", "hijos"]
respuesta: ">"
respuestas_validas:
  - ">"
  - "> "
  - " >"
tipo: completar
enunciado:
  El selector `div > p` aplica estilos solo a los párrafos que son hijos directos de un `div`, ignorando los nietos. El operador utilizado es `______`.
pasos:
  - "Identificar el selector que filtra por relación de hijo directo."
  - "Escribir el carácter o símbolo correspondiente."
explicacion:
  El selector de hijo directo utiliza el símbolo `>` para restringir la selección a los hijos inmediatos.
```

### 11 — Completar: Media Query para modo oscuro
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["media-queries", "prefers-color-scheme", "accesibilidad"]
respuesta: "prefers-color-scheme"
respuestas_validas:
  - "prefers-color-scheme"
  - "prefers-color-scheme: dark"
  - "prefers-color-scheme: light"
tipo: completar
enunciado:
  Para detectar si el usuario del sistema operativo prefiere un tema de color oscuro, se utiliza la media query `@media (______: dark)`.
pasos:
  - "Buscar la característica de media query relacionada con el esquema de color del sistema."
  - "Completar con el nombre de la característica."
explicacion:
  `prefers-color-scheme` es la función estándar para adaptar la UI a la configuración del SO del usuario.
```

### 12 — Completar: Z-index y stacking context
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["z-index", "stacking-context", "posicionamiento"]
respuesta: "stacking-context"
respuestas_validas:
  - "stacking-context"
  - "stacking context"
tipo: completar
enunciado:
  El `z-index` solo funciona dentro de un mismo `______` de apilamiento; un hijo con `z-index: 9999` no superará a un hermano con `z-index: 1` si están en diferentes contextos.
pasos:
  - "Entender el concepto de contexto de apilamiento."
  - "Identificar el término técnico que agrupa elementos para la comparación de z-index."
explicacion:
  El `stacking-context` es un marco tridimensional conceptual donde se ordenan los elementos. El `z-index` no cruza estos límites.
```

### 13 — Completar: Propiedad para sombras de texto
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["text-shadow", "efectos", "tipografía"]
respuesta: "text-shadow"
respuestas_validas:
  - "text-shadow"
  - "Text-shadow"
tipo: completar
enunciado:
  Para aplicar una sombra difuminada alrededor del texto, se utiliza la propiedad `______`.
pasos:
  - "Distinguir entre `box-shadow` (para elementos) y `text-shadow` (para texto)."
  - "Escribir la propiedad específica para texto."
explicacion:
  `text-shadow` acepta valores de desplazamiento X, Y, radio de difuminado y color.
```

### 14 — Completar: Valor de display para tablas
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["display", "tablas", "layout"]
respuesta: "table"
respuestas_validas:
  - "table"
  - "Table"
tipo: completar
enunciado:
  Para que un `div` se comporte como una tabla de bloque (generando una caja de tabla), se usa `display: ______`.
pasos:
  - "Recordar los valores de `display` que imitan elementos de tabla."
  - "Identificar el valor que convierte el elemento en una caja de tabla."
explicacion:
  `display: table` hace que el elemento se comporte como `<table>`, mientras que `display: table-row` y `display: table-cell` imitan a sus hijos.
```

### 15 — Completar: Pseudo-clase para enlaces visitados
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["pseudo-clases", "enlaces", "hover"]
respuesta: ":visited"
respuestas_validas:
  - ":visited"
  - ":visited "
tipo: completar
enunciado:
  Para estilizar enlaces que el usuario ya ha visitado, se utiliza la pseudo-clase `______`.
pasos:
  - "Identificar las pseudo-clases de enlaces: `:link`, `:visited`, `:hover`, `:active`."
  - "Seleccionar la que corresponde al estado 'visitado'."
explicacion:
  `:visited` permite cambiar el color o estilo de los enlaces ya visitados, aunque los navegadores restringen la lectura de propiedades como `background-color` por seguridad (solo permite colores que también se pueden leer en `:link`).
```

### 16 — Completar: Propiedad para bordes redondeados
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["border-radius", "bordes", "redondeo"]
respuesta: "border-radius"
respuestas_validas:
  - "border-radius"
  - "Border-radius"
tipo: completar
enunciado:
  La propiedad `______` permite redondear las esquinas de un elemento.
pasos:
  - "Identificar la propiedad estándar para el radio de las esquinas."
  - "Escribir el nombre de la propiedad."
explicacion:
  `border-radius` es una abreviatura para `border-top-left-radius`, etc.
```

### 17 — Completar: Propiedad para fondos de gradiente
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["background", "gradient", "linear-gradient"]
respuesta: "linear-gradient"
respuestas_validas:
  - "linear-gradient"
  - "Linear-gradient"
tipo: completar
enunciado:
  Para crear un fondo con transición suave entre dos o más colores a lo largo de una línea recta, se usa la función `______`.
pasos:
  - "Identificar las funciones de gradiente disponibles en CSS."
  - "Seleccionar la que define una gradiente lineal."
explicacion:
  `linear-gradient()` define una gradiente lineal. Existe también `radial-gradient()` y `conic-gradient()`.
```

### 18 — Completar: Propiedad para opacidad
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["opacity", "transparencia", "rgba"]
respuesta: "opacity"
respuestas_validas:
  - "opacity"
  - "Opacity"
tipo: completar
enunciado:
  La propiedad `______` establece la transparencia de un elemento, afectando a todos sus hijos también.
pasos:
  - "Distinguir entre `rgba()` (color) y la propiedad de elemento."
  - "Identificar la propiedad que va de 0 a 1."
explicacion:
  `opacity` aplica la transparencia a todo el elemento y su contenido. Para solo el color, se usa `rgba()` o `hsla()`.
```

### 19 — Completar: Propiedad para fuentes web
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["@font-face", "fuentes", "tipografía"]
respuesta: "@font-face"
respuestas_validas:
  - "@font-face"
  - "@font-face "
tipo: completar
enunciado:
  La regla `______` se utiliza para cargar fuentes personalizadas desde un archivo remoto o local.
pasos:
  - "Identificar la regla at (@rule) específica para definir nuevas fuentes."
  - "Escribir el nombre de la regla."
explicacion:
  `@font-face` permite especificar el nombre de la fuente y la ubicación del archivo (ej. `.woff2`).
```

### 20 — Completar: Propiedad para cursor personalizado
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["cursor", "interacción", "pointer"]
respuesta: "cursor"
respuestas_validas:
  - "cursor"
  - "Cursor"
tipo: completar
enunciado:
  La propiedad `______` permite cambiar la forma del puntero del mouse sobre un elemento.
pasos:
  - "Identificar la propiedad que controla el cursor."
  - "Escribir el nombre de la propiedad."
explicacion:
  `cursor` acepta keywords como `pointer`, `wait`, `text`, o URLs a imágenes.
```

### 21 — Completar: Propiedad para columnas de texto
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["column-count", "texto", "multicolumn"]
respuesta: "column-count"
respuestas_validas:
  - "column-count"
  - "Column-count"
tipo: completar
enunciado:
  Para dividir el contenido de un elemento en un número específico de columnas, se usa la propiedad `______`.
pasos:
  - "Identificar la propiedad que define el número de columnas."
  - "Escribir el nombre de la propiedad."
explicacion:
  `column-count` establece el número de columnas. `column-width` establece el ancho preferido.
```

### 22 — Completar: Propiedad para break-inside
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["page-break", "columns", "break-inside"]
respuesta: "break-inside"
respuestas_validas:
  - "break-inside"
  - "Break-inside"
tipo: completar
enunciado:
  Para evitar que un elemento se divida entre dos páginas o columnas, se usa la propiedad `______-avoid`.
pasos:
  - "Identificar la propiedad que controla los saltos de página/columna dentro de un elemento."
  - "Completar con la parte principal de la propiedad."
explicacion:
  `break-inside: avoid` previene que el elemento se parta. `page-break-inside` es la versión antigua.
```

### 23 — Completar: Propiedad para object-fit
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["img", "object-fit", "contenedor"]
respuesta: "object-fit"
respuestas_validas:
  - "object-fit"
  - "Object-fit"
tipo: completar
enunciado:
  Para controlar cómo una imagen se ajusta dentro de su contenedor sin deformarse (ej. `cover`, `contain`), se usa la propiedad `______`.
pasos:
  - "Identificar la propiedad que afecta a elementos de reemplazo (img, video)."
  - "Escribir el nombre de la propiedad."
explicacion:
  `object-fit` define cómo el contenido del elemento se ajusta a las dimensiones de su caja.
```

### 24 — Completar: Propiedad para aspect-ratio
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["aspect-ratio", "proporción", "layout"]
respuesta: "aspect-ratio"
respuestas_validas:
  - "aspect-ratio"
  - "Aspect-ratio"
tipo: completar
enunciado:
  Para establecer la relación de aspecto de un elemento (ej. `16/9`) sin necesidad de padding hacks, se usa la propiedad `______`.
pasos:
  - "Identificar la propiedad moderna para definir la proporción ancho/alto."
  - "Escribir el nombre de la propiedad."
explicacion:
  `aspect-ratio` es una propiedad relativamente nueva que define el ratio ideal del elemento.
```

### 25 — Completar: Propiedad para will-change
```
metadata:
  materia: "informatica-ramas"
  tema: "frontend-css-y-maquetacion"
  nivel: "avanzado"
  tags: ["optimización", "will-change", "rendimiento"]
respuesta: "will-change"
respuestas_validas:
  - "will-change"
  - "Will-change"
tipo: completar
enunciado:
  Para avisar al navegador que una propiedad va a cambiar frecuentemente y que puede optimizarla (ej. creando una capa de composición), se usa la propiedad `______`.
pasos:
  - "Identificar la propiedad que actúa como sugerencia de optimización."
  - "Escribir el nombre de la propiedad."
explicacion:
  `will-change` ayuda al navegador a realizar optimizaciones de anticipación, pero debe usarse con moderación para no consumir memoria innecesaria.
```