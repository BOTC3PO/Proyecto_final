### 1 — Estructura semántica de encabezados
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "headings", "accessibility"]
tipo: completar
enunciado:
  Uno_de(["En un sitio web corporativo", "En un blog personal", "En una aplicación de gestión"])
  necesitas definir la jerarquía de títulos. Para asegurar la accesibilidad y la estructura lógica del documento, el encabezado principal debe usar la etiqueta `<h1>`. Si deseas un subtítulo de segundo nivel dentro de esa sección, ¿cuál es la etiqueta HTML correcta que debes usar inmediatamente después?
respuesta:
  <h2>
respuestas_validas:
  - "<h2>"
  - "<H2>"
pasos:
  - "Identificar la jerarquía de encabezados en HTML5."
  - "Reconocer que h1 es el nivel superior y h2 es el siguiente nivel directo."
  - "Seleccionar la etiqueta correspondiente al segundo nivel."
explicacion:
  HTML5 define una jerarquía de encabezados de h1 a h6. Después de un <h1>, el siguiente nivel lógico es <h2>. Usar saltos de nivel (ej. de h1 a h4) se considera mala práctica para la accesibilidad y el SEO, aunque sea sintácticamente válido.
```

### 2 — Agrupación de información relacionada
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "article", "section", "div"]
tipo: mc
enunciado:
  Estás desarrollando un blog. Necesitas agrupar un conjunto de entradas de blog independientes, donde cada entrada tiene su propio contexto, título y autor, y podría ser distribuida o reutilizada por separado. ¿Cuál es la etiqueta semántica más adecuada para envolver cada entrada individual?
opciones_explicitas:
  - "<div>"
  - "<section>"
  - "<article>"
  - "<aside>"
respuesta:
  <article>
pasos:
  - "Analizar la independencia del contenido."
  - "Evaluar si el contenido tiene sentido por sí mismo."
  - "Seleccionar <article> para contenido independiente y autocontenido."
explicacion:
  La etiqueta <article> se usa para contenido independiente y autocontenido, como una entrada de blog, un comentario, un widget o un gadget. <section> se usa para agrupar temáticamente, pero no implica independencia completa.
```

### 3 — Navegación principal
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "nav", "a11y"]
tipo: completar
enunciado:
  En la página de inicio de una aplicación web compleja, tienes un menú de navegación principal que permite saltar entre las secciones principales del sitio. Para mejorar la accesibilidad y ayudar a los lectores de pantalla a identificar esta zona, debes envolver la lista de enlaces de navegación en la etiqueta semántica apropiada. ¿Cuál es esa etiqueta?
respuesta:
  nav
respuestas_validas:
  - "nav"
  - "<nav>"
  - "<nav>"
  - "NAV"
pasos:
  - "Identificar la función de navegación en la página."
  - "Buscar la etiqueta semántica HTML5 para zonas de navegación."
  - "Confirmar que <nav> es el estándar actual."
explicacion:
  La etiqueta <nav> indica una sección de la página que contiene enlaces de navegación principales. No todos los grupos de enlaces son <nav>, solo las secciones principales de navegación.
```

### 4 — Contenido lateral secundario
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "aside", "sidebar"]
tipo: mc
enunciado:
  Estás maquetando un artículo de noticias. A la derecha del contenido principal, hay una barra lateral con enlaces a artículos relacionados, publicidad y información sobre el autor. Este contenido es indirectamente relacionado con el flujo principal del artículo. ¿Qué etiqueta semántica es la más precisa para este contenedor?
opciones_explicitas:
  - "<aside>"
  - "<sidebar>"
  - "<div class='sidebar'>"
  - "<section>"
respuesta:
  <aside>
pasos:
  - "Determinar la relación del contenido con el flujo principal."
  - "Verificar si el contenido es indirectamente relacionado."
  - "Seleccionar <aside> para contenido tangencial."
explicacion:
  <aside> representa un bloque de contenido indirectamente relacionado con el contenido principal alrededor del cual está ubicado. Es ideal para barras laterales, llamadas a la acción o notas al pie contextuales.
```

### 5 — Pie de página semántico
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "footer", "copyright"]
tipo: completar
enunciado:
  En el pie de página de una página web, quieres incluir información sobre la autoría, derechos de autor y enlaces de contacto para la página actual. ¿Cuál es la etiqueta semántica HTML5 diseñada específicamente para este propósito?
respuesta:
  footer
respuestas_validas:
  - "footer"
  - "<footer>"
  - "<footer>"
  - "FOOTER"
pasos:
  - "Identificar la ubicación: parte inferior de la página o sección."
  - "Recordar la semántica para metadatos de autoría/copyright."
  - "Seleccionar <footer>."
explicacion:
  <footer> representa un pie de página para su elemento más cercano ancestro de sección o para la página entera si está en el body. Suele contener información de autoría, copyright y enlaces relacionados.
```

### 6 — Formulario y accesibilidad
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "form", "fieldset", "legend"]
tipo: completar
enunciado:
  Tienes un formulario de registro largo con múltiples campos agrupados por categorías (ej. Datos Personales, Dirección, Preferencias). Para mejorar la accesibilidad y la estructura lógica, necesitas agrupar los campos de "Datos Personales" bajo un título visible. ¿Qué par de etiquetas debes usar, empezando por la que define el grupo?
respuesta:
  fieldset
respuestas_validas:
  - "fieldset"
  - "<fieldset>"
  - "<fieldset>"
  - "FIELDSET"
pasos:
  - "Identificar la necesidad de agrupar controles de formulario."
  - "Reconocer que <fieldset> agrupa y <legend> titula."
  - "Proporcionar la etiqueta contenedora del grupo."
explicacion:
  <fieldset> agrupa elementos relacionados en un formulario. Debe usarse junto con <legend> para proporcionar un título descriptivo para el grupo, mejorando la accesibilidad.
```

### 7 — Estructura de lista de navegación
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "ul", "li", "nav"]
tipo: mc
enunciado:
  Estás creando un menú de navegación horizontal. Semánticamente, una lista de enlaces es una lista. ¿Qué etiqueta de bloque es la correcta para envolver los elementos de la lista <li> en este contexto?
opciones_explicitas:
  - "<ul>"
  - "<ol>"
  - "<div>"
  - "<span>"
respuesta:
  <ul>
pasos:
  - "Determinar si el orden importa para la navegación."
  - "Recordar que la navegación suele ser no ordenada."
  - "Seleccionar <ul> para listas no ordenadas."
explicacion:
  Las listas de navegación típicamente no tienen un orden secuencial inherente, por lo que se usa <ul> (unordered list) con <li> (list item) para cada enlace.
```

### 8 — Imagen con descripción detallada
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "figure", "figcaption", "img"]
tipo: completar
enunciado:
  Quieres incluir una gráfica compleja en un informe técnico. La imagen necesita una leyenda detallada que explique los datos mostrados. Además, la imagen y su leyenda deben tratarse como una unidad autocontenida que podría ser movida sin afectar el flujo del texto. ¿Qué etiqueta envuelve tanto a la imagen como a su leyenda?
respuesta:
  figure
respuestas_validas:
  - "figure"
  - "<figure>"
  - "<figure>"
  - "FIGURE"
pasos:
  - "Identificar el contenido como una unidad autocontenida (imagen + leyenda)."
  - "Recordar la etiqueta para contenido ilustrativo independiente."
  - "Seleccionar <figure>."
explicacion:
  <figure> representa contenido autocontenido, como ilustraciones, diagramas, fotos o fragmentos de código, que se mencionan en el flujo principal pero que pueden moverse sin alterar su significado. La leyenda se añade con <figcaption> dentro de <figure>.
```

### 9 — Metadatos de la página
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "head", "meta", "title"]
tipo: mc
enunciado:
  ¿En qué sección del documento HTML debes colocar la información que define el título de la pestaña del navegador, la descripción para motores de búsqueda y los metadatos de charset?
opciones_explicitas:
  - "<body>"
  - "<head>"
  - "<header>"
  - "<meta>"
respuesta:
  <head>
pasos:
  - "Diferenciar entre el encabezado visual (<header>) y el metadatos (<head>)."
  - "Identificar dónde van los datos que no se ven directamente en la página."
  - "Seleccionar <head>."
explicacion:
  La sección <head> contiene metadatos sobre el documento, como <title>, <meta>, <link> y <script>, que no son contenido visual directo para el usuario final en el flujo de la página.
```

### 10 — Contenido de diálogo
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "dialog", "modal"]
tipo: completar
enunciado:
  Estás implementando un modal de confirmación de eliminación en una aplicación web moderna. Quieres usar la etiqueta semántica nativa de HTML5 para un cuadro de diálogo interactivo que puede ser abierto y cerrado programáticamente. ¿Cuál es esa etiqueta?
respuesta:
  dialog
respuestas_validas:
  - "dialog"
  - "<dialog>"
  - "<dialog>"
  - "DIALOG"
pasos:
  - "Identificar la necesidad de un elemento de diálogo nativo."
  - "Recordar la etiqueta introducida en HTML5 para diálogos."
  - "Seleccionar <dialog>."
explicacion:
  <dialog> representa un cuadro de diálogo o ventana interactiva. Es preferible a usar <div> con clases arbitraras porque proporciona soporte nativo para accesibilidad y manejo de foco.
```

### 11 — Definición de términos
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "dl", "dt", "dd"]
tipo: mc
enunciado:
  Estás creando un glosario técnico en una página de documentación. Necesitas listar términos y sus definiciones correspondientes. ¿Qué elemento de lista es el más semánticamente correcto para este patrón de par término-definición?
opciones_explicitas:
  - "<ul>"
  - "<ol>"
  - "<dl>"
  - "<table>"
respuesta:
  <dl>
pasos:
  - "Analizar la estructura: pares de términos y definiciones."
  - "Reconocer la etiqueta de lista de definición."
  - "Seleccionar <dl>."
explicacion:
  <dl> (Definition List) es específico para listas de términos (<dt>) y sus definiciones (<dd>). Es más semántico que usar tablas o listas no ordenadas para este propósito.
```

### 12 — Estructura de encabezado de página
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "header", "logo", "nav"]
tipo: completar
enunciado:
  En la parte superior de la página, tienes el logo de la empresa, el menú de navegación principal y un título de bienvenida. Esta zona actúa como un encabezado para la página entera. ¿Qué etiqueta semántica debes usar para envolver estos elementos?
respuesta:
  header
respuestas_validas:
  - "header"
  - "<header>"
  - "<header>"
  - "HEADER"
pasos:
  - "Identificar la ubicación: parte superior de la página."
  - "Diferenciar <header> (sección) de <head> (metadatos)."
  - "Seleccionar <header> para el encabezado visual."
explicacion:
  <header> representa un conjunto de contenido introductorio o de navegación. Para la página completa, suele contener el logo y el menú principal. No debe usarse dentro de <footer> o <address>.
```

### 13 — Código de computadora
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "code", "pre", "samp"]
tipo: mc
enunciado:
  Estás mostrando un fragmento de código JavaScript en una página web. El código debe mantener el formato de sangría (whitespace) y usar una fuente monoespaciada. ¿Qué par de etiquetas es el estándar para representar código formateado?
opciones_explicitas:
  - "<code> y <pre>"
  - "<kbd> y <samp>"
  - "<var> y <code>"
  - "<span> y <div>"
respuesta:
  <code> y <pre>
pasos:
  - "Identificar la necesidad de preservar espacios y formato."
  - "Recordar que <pre> preserva whitespace y <code> indica código."
  - "Seleccionar la combinación correcta."
explicacion:
  <pre> (preformatted text) preserva los espacios y saltos de línea. <code> indica que el contenido es código. Se suelen usar juntos: <pre><code>...</code></pre>.
```

### 14 — Variable en texto
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "var", "math"]
tipo: completar
enunciado:
  En una fórmula matemática o una explicación técnica, quieres resaltar una variable específica (por ejemplo, el valor de 'x' en una ecuación) para indicar que es un valor sustituido. ¿Qué etiqueta inline semántica se usa para representar una variable?
respuesta:
  var
respuestas_validas:
  - "var"
  - "<var>"
  - "<var>"
  - "VAR"
pasos:
  - "Identificar el contenido como una variable matemática o técnica."
  - "Buscar la etiqueta inline para variables."
  - "Seleccionar <var>."
explicacion:
  <var> representa el nombre de una variable en un contexto matemático o de programación. Se usa para distinguir variables del texto literal.
```

### 15 — Resultado de programa
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "samp", "output"]
tipo: mc
enunciado:
  Estás mostrando la salida de un comando de terminal o el resultado de un cálculo automático en una página web. ¿Qué etiqueta semántica indica que el contenido es la salida de un programa?
opciones_explicitas:
  - "<code>"
  - "<samp>"
  - "<kbd>"
  - "<pre>"
respuesta:
  <samp>
pasos:
  - "Diferenciar entre código escrito (<code>) y salida generada (<samp>)."
  - "Identificar que es la salida de un programa."
  - "Seleccionar <samp>."
explicacion:
  <samp> (sample output) representa la salida de un programa o comando. <code> es para el código fuente, <kbd> para entrada de teclado.
```

### 16 — Entrada de teclado
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "kbd", "shortcut"]
tipo: completar
enunciado:
  En las instrucciones de un manual de usuario, quieres indicar al usuario que debe presionar las teclas "Ctrl" y "S" simultáneamente para guardar. ¿Qué etiqueta inline semántica se usa para representar entrada de teclado?
respuesta:
  kbd
respuestas_validas:
  - "kbd"
  - "<kbd>"
  - "<kbd>"
  - "KBD"
pasos:
  - "Identificar el contenido como una tecla o combinación de teclas."
  - "Buscar la etiqueta para entrada de teclado."
  - "Seleccionar <kbd>."
explicacion:
  <kbd> representa entrada de teclado. Se usa comúnmente para indicar atajos de teclado o comandos que el usuario debe teclear.
```

### 17 — Elemento de cambio
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "ins", "del", "markup"]
tipo: mc
enunciado:
  Estás mostrando un documento con historial de cambios. Quieres marcar un texto que ha sido eliminado del documento original. ¿Qué etiqueta semántica se usa para indicar texto eliminado?
opciones_explicitas:
  - "<ins>"
  - "<del>"
  - "<s>"
  - "<strike>"
respuesta:
  <del>
pasos:
  - "Identificar la acción: eliminación de texto."
  - "Diferenciar <ins> (insertado) de <del> (eliminado)."
  - "Seleccionar <del>."
explicacion:
  <del> representa texto que ha sido eliminado del documento. <ins> representa texto insertado. <s> o <del> sin atributos pueden usarse para texto irrelevante, pero para cambios, <del> es preciso.
```

### 18 — Texto insertado
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "ins", "markup"]
tipo: completar
enunciado:
  Continuando con el ejemplo anterior, ahora quieres marcar el texto que ha sido añadido al documento en una revisión reciente. ¿Qué etiqueta semántica se usa para indicar texto insertado?
respuesta:
  ins
respuestas_validas:
  - "ins"
  - "<ins>"
  - "<ins>"
  - "INS"
pasos:
  - "Identificar la acción: inserción de texto."
  - "Buscar la etiqueta correspondiente a <del>."
  - "Seleccionar <ins>."
explicacion:
  <ins> representa texto que ha sido insertado en el documento. A menudo se usa junto con <del> para mostrar diff o revisiones.
```

### 19 — Abreviatura con título
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "abbr", "title"]
tipo: mc
enunciado:
  Quieres mostrar "HTML" en tu página y, al pasar el mouse o con un lector de pantalla, mostrar la expansión "HyperText Markup Language". ¿Qué etiqueta semántica soporta el atributo `title` para este propósito?
opciones_explicitas:
  - "<span>"
  - "<abbr>"
  - "<acronym>"
  - "<dfn>"
respuesta:
  <abbr>
pasos:
  - "Identificar la necesidad de mostrar una abreviatura y su expansión."
  - "Reconocer que <acronym> está obsoleto y <abbr> es el estándar."
  - "Seleccionar <abbr>."
explicacion:
  <abbr> representa una abreviatura o acrónimo. El atributo `title` proporciona la expansión completa, mejorando la accesibilidad y la comprensión.
```

### 20 — Definición de término
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "dfn", "glossary"]
tipo: completar
enunciado:
  En un glosario, quieres definir el término "Semantic HTML" por primera vez. Quieres marcar el término de manera semántica para indicar que es una definición. ¿Qué etiqueta inline se usa para el término siendo definido?
respuesta:
  dfn
respuestas_validas:
  - "dfn"
  - "<dfn>"
  - "<dfn>"
  - "DFN"
pasos:
  - "Identificar la necesidad de definir un término."
  - "Buscar la etiqueta para el término definido."
  - "Seleccionar <dfn>."
explicacion:
  <dfn> (definition element) representa el término de definición. Se usa para marcar el término que se está definiendo en el contexto circundante.
```

### 21 — Contenido de cita
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "blockquote", "cite"]
tipo: mc
enunciado:
  Estás citando un párrafo largo de un artículo externo. ¿Qué etiqueta de bloque se usa para el contenido de la cita y qué atributo de qué etiqueta se usa para la fuente (URL o título)?
opciones_explicitas:
  - "<blockquote> y <cite>"
  - "<q> y <source>"
  - "<pre> y <code>"
  - "<div> y <span>"
respuesta:
  <blockquote> y <cite>
pasos:
  - "Diferenciar cita en línea (<q>) de cita de bloque (<blockquote>)."
  - "Identificar que la fuente se especifica en <cite>."
  - "Seleccionar la combinación correcta."
explicacion:
  <blockquote> para citas de bloque. <cite> para la referencia de la obra (título, autor, URL). Nota: <cite> no es para nombres de personas, sino de obras.
```

### 22 — Cita en línea
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "q", "inline"]
tipo: completar
enunciado:
  Quieres insertar una cita breve dentro de un párrafo de texto normal. ¿Qué etiqueta inline se usa para marcar una cita en línea?
respuesta:
  q
respuestas_validas:
  - "q"
  - "<q>"
  - "<q>"
  - "Q"
pasos:
  - "Identificar la necesidad de una cita en línea."
  - "Buscar la etiqueta inline para citas."
  - "Seleccionar <q>."
explicacion:
  <q> representa una cita corta en línea. Los navegadores suelen añadir comillas automáticamente. Para citas largas, se usa <blockquote>.
```

### 23 — Dirección de contacto
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "address", "contact"]
tipo: mc
enunciado:
  Estás maquetando la sección de contacto de una página web. Quieres marcar la dirección postal, email y teléfono de una organización. ¿Qué etiqueta semántica se usa para información de contacto?
opciones_explicitas:
  - "<div>"
  - "<p>"
  - "<address>"
  - "<footer>"
respuesta:
  <address>
pasos:
  - "Identificar el tipo de información: contacto."
  - "Buscar la etiqueta semántica para contacto."
  - "Seleccionar <address>."
explicacion:
  <address> representa información de contacto para el elemento ancestro más cercano. Si está en el body, se refiere a la página completa.
```

### 24 — Tiempo y fecha
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "time", "datetime"]
tipo: completar
enunciado:
  Quieres mostrar la fecha "15 de Octubre de 2023" en tu página, pero también quieres que los motores de búsqueda y las aplicaciones entiendan que es una fecha específica. ¿Qué atributo de la etiqueta <time> debes usar para especificar el valor en formato ISO 8601?
respuesta:
  datetime
respuestas_validas:
  - "datetime"
  - "DATETIME"
  - "datetime="
  - "datetime"
pasos:
  - "Identificar la necesidad de un valor de fecha estructurado."
  - "Recordar el atributo de <time> para el valor computable."
  - "Seleccionar datetime."
explicacion:
  El atributo `datetime` de la etiqueta <time> permite especificar la fecha/hora en un formato legible por máquinas (ISO 8601), mientras que el contenido de la etiqueta puede ser legible por humanos.
```

### 25 — Elemento vacío (break)
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-html-semantico"
  nivel: "avanzado"
  tags: ["html5", "br", "line-break"]
tipo: vf
enunciado:
  En HTML5, la etiqueta <br> (salto de línea) es un elemento vacío que no requiere etiqueta de cierre.
respuesta:
  verdadero
pasos:
  - "Verificar la sintaxis de <br> en HTML5."
  - "Confirmar que es un elemento vacío."
  - "Determinar si requiere cierre."
explicacion:
  <br> es un elemento vacío en HTML5. Aunque XHTML requería <br />, en HTML5 es válido usar <br>. No necesita cierre explícito.