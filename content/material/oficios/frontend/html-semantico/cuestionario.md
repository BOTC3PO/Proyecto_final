# Frontend — HTML semántico (cuestionario, 24 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — HTML

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["html"]

tipo: mc
opciones_explicitas: ["Un lenguaje de marcado que describe la estructura y el significado de una página", "Un lenguaje de programación", "Un lenguaje de estilos", "Una base de datos"]
respuesta: "Un lenguaje de marcado que describe la estructura y el significado de una página"

enunciado: "¿Qué es HTML?"

explicacion: |
  CSS da el aspecto; JavaScript, el comportamiento.
```

### 2 — Roles

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["roles"]

tipo: mc
opciones_explicitas: ["El aspecto", "La estructura", "El comportamiento", "La base de datos"]
respuesta: "El aspecto"

enunciado: "¿Qué le corresponde a CSS?"

explicacion: |
  HTML estructura; JavaScript programa.
```

### 3 — Doctype

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["doctype"]

tipo: mc
opciones_explicitas: ["Indica que el documento es HTML5", "Es un comentario", "Es un título", "Es un estilo"]
respuesta: "Indica que el documento es HTML5"

enunciado: "¿Para qué sirve `<!DOCTYPE html>`?"

explicacion: |
  Va al comienzo.
```

### 4 — Idioma

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["lang"]

tipo: mc
opciones_explicitas: ["Indica el idioma, útil para lectores de pantalla y buscadores", "Cambia el color", "Traduce la página", "Carga un archivo"]
respuesta: "Indica el idioma, útil para lectores de pantalla y buscadores"

enunciado: "¿Para qué sirve `lang=\"es\"` en `<html>`?"

explicacion: |
  Mejora la accesibilidad.
```

### 5 — Head

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["head"]

tipo: mc
opciones_explicitas: ["Información sobre la página, como el título y la codificación", "Lo que se ve", "El pie", "Las imágenes"]
respuesta: "Información sobre la página, como el título y la codificación"

enunciado: "¿Qué contiene `<head>`?"

explicacion: |
  El contenido visible va en `<body>`.
```

### 6 — Elemento

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["elemento"]

tipo: mc
opciones_explicitas: ["Etiqueta de apertura, contenido y etiqueta de cierre", "Solo el texto", "Solo la etiqueta", "Una función"]
respuesta: "Etiqueta de apertura, contenido y etiqueta de cierre"

enunciado: "¿Qué partes tiene un elemento como `<p>texto</p>`?"

explicacion: |
  Algunos son vacíos, como `<img>`.
```

### 7 — Atributos

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["atributos"]

tipo: mc
opciones_explicitas: ["Un dato extra de un elemento, como `href` en `<a>`", "Un comentario", "Un estilo", "Un título"]
respuesta: "Un dato extra de un elemento, como `href` en `<a>`"

enunciado: "¿Qué es un atributo?"

explicacion: |
  Tiene nombre y valor.
```

### 8 — Semántico

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["semantica"]

tipo: mc
opciones_explicitas: ["Que indica qué es su contenido, no solo cómo se ve", "Que se ve bonito", "Que es rápido", "Que no necesita cierre"]
respuesta: "Que indica qué es su contenido, no solo cómo se ve"

enunciado: "¿Qué significa que un elemento sea semántico?"

explicacion: |
  Por ejemplo, `<nav>`.
```

### 9 — Navegación

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["nav"]

tipo: mc
opciones_explicitas: ["`<nav>`", "`<menu-div>`", "`<top>`", "`<links>`"]
respuesta: "`<nav>`"

enunciado: "¿Qué elemento se usa para el menú de navegación principal?"

explicacion: |
  Mejor que un `<div>`.
```

### 10 — Main

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "intermedio"
  tags: ["main"]

tipo: mc
opciones_explicitas: ["Uno", "Dos", "Cinco", "Ninguno"]
respuesta: "Uno"

enunciado: "¿Cuántos `<main>` debe tener una página?"

explicacion: |
  Contiene el contenido principal.
```

### 11 — Div

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["div"]

tipo: mc
opciones_explicitas: ["Cuando no hay un elemento semántico más adecuado", "Siempre", "Nunca", "Para títulos"]
respuesta: "Cuando no hay un elemento semántico más adecuado"

enunciado: "¿Cuándo se usa `<div>`?"

explicacion: |
  No tiene significado propio.
```

### 12 — Ventajas

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["ventajas"]

tipo: mc
opciones_explicitas: ["Mejor accesibilidad y SEO", "Menos líneas siempre", "Mayor velocidad de red", "Más colores"]
respuesta: "Mejor accesibilidad y SEO"

enunciado: "¿Cuál es una ventaja del HTML semántico?"

explicacion: |
  También más legibilidad.
```

### 13 — Títulos

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["titulos"]

tipo: mc
opciones_explicitas: ["Uno", "Todos los que se quiera", "Ninguno", "Cinco"]
respuesta: "Uno"

enunciado: "¿Cuántos `<h1>` conviene tener por página?"

explicacion: |
  Representa el título principal.
```

### 14 — Niveles

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "intermedio"
  tags: ["titulos"]

tipo: mc
opciones_explicitas: ["Saltar niveles, como pasar de `<h2>` a `<h4>`", "Usar `<h2>`", "Usar `<h1>`", "Usar texto"]
respuesta: "Saltar niveles, como pasar de `<h2>` a `<h4>`"

enunciado: "¿Qué se evita al usar títulos?"

explicacion: |
  La jerarquía debe ser lógica.
```

### 15 — Tamaño

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["titulos"]

tipo: mc
opciones_explicitas: ["No: el tamaño se define con CSS", "Sí", "Solo `<h1>`", "Solo en móviles"]
respuesta: "No: el tamaño se define con CSS"

enunciado: "¿Se usan los títulos (`<h1>`...) para cambiar el tamaño del texto?"

explicacion: |
  Los títulos indican jerarquía.
```

### 16 — Listas

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["listas"]

tipo: mc
opciones_explicitas: ["`<ol>`", "`<ul>`", "`<li>`", "`<dl>`"]
respuesta: "`<ol>`"

enunciado: "¿Qué elemento es una lista numerada?"

explicacion: |
  `<ul>` es con viñetas.
```

### 17 — Tablas

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["tablas"]

tipo: mc
opciones_explicitas: ["Para mostrar datos", "Para maquetar la página", "Para dar estilos", "Para menús"]
respuesta: "Para mostrar datos"

enunciado: "¿Para qué se usan las tablas?"

explicacion: |
  Para la maquetación se usa CSS.
```

### 18 — Enlaces

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["enlaces"]

tipo: mc
opciones_explicitas: ["\"Leer el informe anual\"", "\"Hacé clic acá\"", "\"Acá\"", "\"Link\""]
respuesta: "\"Leer el informe anual\""

enunciado: "¿Cuál es un buen texto de enlace?"

explicacion: |
  Debe describir el destino.
```

### 19 — Alt

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["alt"]

tipo: mc
opciones_explicitas: ["Para dar un texto alternativo que leen los lectores de pantalla", "Para aumentar el tamaño", "Para cambiar el formato", "Para ocultar la imagen"]
respuesta: "Para dar un texto alternativo que leen los lectores de pantalla"

enunciado: "¿Para qué sirve el atributo `alt` de una imagen?"

explicacion: |
  También se ve si la imagen no carga.
```

### 20 — Decorativa

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "intermedio"
  tags: ["alt"]

tipo: mc
opciones_explicitas: ["`alt=\"\"` (vacío)", "`alt=\"imagen\"`", "Ninguno", "`alt=\"decoración\"`"]
respuesta: "`alt=\"\"` (vacío)"

enunciado: "¿Qué `alt` lleva una imagen puramente decorativa?"

explicacion: |
  Los lectores de pantalla la ignoran.
```

### 21 — Label

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["label"]

tipo: mc
opciones_explicitas: ["Un `<label>`", "Un `<div>`", "Un comentario", "Un script"]
respuesta: "Un `<label>`"

enunciado: "¿Qué se asocia a cada campo de un formulario?"

explicacion: |
  Mejora la accesibilidad.
```

### 22 — Tipo

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["input"]

tipo: mc
opciones_explicitas: ["`type=\"email\"`", "`type=\"text\"` siempre", "`type=\"mail-box\"`", "`type=\"date\"`"]
respuesta: "`type=\"email\"`"

enunciado: "¿Qué tipo de `input` es adecuado para un correo?"

explicacion: |
  El navegador valida el formato.
```

### 23 — Validación

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "intermedio"
  tags: ["validacion"]

tipo: mc
opciones_explicitas: ["Porque la validación del navegador se puede saltear", "Porque es más lenta", "Por estética", "Por costumbre"]
respuesta: "Porque la validación del navegador se puede saltear"

enunciado: "¿Por qué se valida también en el servidor?"

explicacion: |
  Nunca se confía solo en el cliente.
```

### 24 — Teclado

```
metadata:
  materia: "frontend"
  tema: "html_semantico"
  nivel: "basico"
  tags: ["accesibilidad"]

tipo: mc
opciones_explicitas: ["Navegar por toda la página con Tab y ver el foco", "Nada", "Solo escribir", "Solo cerrar"]
respuesta: "Navegar por toda la página con Tab y ver el foco"

enunciado: "¿Qué debe poder hacerse con el teclado?"

explicacion: |
  Es clave para la accesibilidad.
```

