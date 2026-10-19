# Informática — Cómo se construye una página web: HTML, CSS y JavaScript (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Función de HTML

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Cuál es la función de HTML en una página web?"
opciones_explicitas:
  - "Definir la estructura y el contenido"
  - "Definir los colores y el diseño"
  - "Programar el comportamiento interactivo"
  - "Almacenar los datos del usuario"
respuesta: "Definir la estructura y el contenido"

explicacion: |
  HTML es el esqueleto de la página.
```

### 2 — Función de CSS

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Para qué se usa CSS?"
opciones_explicitas:
  - "Para definir la presentación: colores, tipografía y disposición"
  - "Para guardar datos en una base"
  - "Para enviar correos"
  - "Para traducir nombres de dominio"
respuesta: "Para definir la presentación: colores, tipografía y disposición"

explicacion: |
  CSS describe el aspecto de los elementos.
```

### 3 — Función de JavaScript

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Qué aporta JavaScript a una página web?"
opciones_explicitas:
  - "El comportamiento: reaccionar a clics y modificar contenido"
  - "Solo las imágenes"
  - "El nombre de dominio"
  - "El cable de red"
respuesta: "El comportamiento: reaccionar a clics y modificar contenido"

explicacion: |
  Es un lenguaje de programación.
```

### 4 — Primer paso

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "Al escribir una dirección en el navegador, ¿qué ocurre primero?"
opciones_explicitas:
  - "Se consulta el DNS para obtener la dirección IP"
  - "El servidor dibuja la página"
  - "Se instala el sitio"
  - "Se descarga el CSS"
respuesta: "Se consulta el DNS para obtener la dirección IP"

explicacion: |
  Luego se envía la petición HTTP al servidor.
```

### 5 — Qué responde el servidor

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Qué suele devolver el servidor ante la petición de una página?"
opciones_explicitas:
  - "Un archivo HTML y otros recursos asociados"
  - "Solo una imagen"
  - "Un programa instalable"
  - "Una dirección MAC"
respuesta: "Un archivo HTML y otros recursos asociados"

explicacion: |
  El navegador pide luego los estilos, imágenes y scripts.
```

### 6 — Qué es el DOM

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "avanzado"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Qué es el DOM?"
opciones_explicitas:
  - "Un árbol de objetos que representa la página y que se puede modificar"
  - "Un lenguaje de estilos"
  - "Un tipo de servidor"
  - "Un protocolo de red"
respuesta: "Un árbol de objetos que representa la página y que se puede modificar"

explicacion: |
  JavaScript lo usa para cambiar la página.
```

### 7 — Atributo alt

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Para qué sirve el atributo alt de una imagen?"
opciones_explicitas:
  - "Para dar un texto alternativo que lee un lector de pantalla"
  - "Para cambiar el tamaño"
  - "Para elegir el color"
  - "Para enlazar otra página"
respuesta: "Para dar un texto alternativo que lee un lector de pantalla"

explicacion: |
  Mejora la accesibilidad.
```

### 8 — Head y body

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Qué contiene la sección body de un documento HTML?"
opciones_explicitas:
  - "Lo que se ve en la página"
  - "Solo información interna como el título del documento"
  - "Los estilos del navegador"
  - "El código del servidor"
respuesta: "Lo que se ve en la página"

explicacion: |
  El head tiene información sobre la página.
```

### 9 — Selector de clase

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Con qué símbolo se escribe en CSS un selector de clase?"
opciones_explicitas:
  - "Punto"
  - "Numeral"
  - "Arroba"
  - "Asterisco"
respuesta: "Punto"

explicacion: |
  El identificador se escribe con numeral.
```

### 10 — Cascada

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "avanzado"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Qué se compara cuando dos reglas CSS chocan?"
opciones_explicitas:
  - "La especificidad y el orden"
  - "El tamaño del archivo"
  - "El color elegido"
  - "La velocidad del servidor"
respuesta: "La especificidad y el orden"

explicacion: |
  Es la cascada de CSS.
```

### 11 — Etiqueta de enlace

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Qué etiqueta HTML se usa para crear un enlace?"
opciones_explicitas:
  - "a"
  - "img"
  - "p"
  - "h1"
respuesta: "a"

explicacion: |
  Lleva el atributo href con el destino.
```

### 12 — HTML semántico

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "¿Qué es usar HTML semántico?"
opciones_explicitas:
  - "Elegir las etiquetas por su significado, como h1, nav y ul"
  - "Escribir todo en una sola línea"
  - "Usar solo la etiqueta div"
  - "Evitar los títulos"
respuesta: "Elegir las etiquetas por su significado, como h1, nav y ul"

explicacion: |
  Ayuda a la accesibilidad y a los buscadores.
```

### 13 — Regla CSS

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "avanzado"
  tags: ["web", "html_css_js"]

tipo: mc
enunciado: "En la regla p {{ color: blue; }}, ¿qué es \"color\"?"
opciones_explicitas:
  - "La propiedad"
  - "El selector"
  - "El valor"
  - "La clase"
respuesta: "La propiedad"

explicacion: |
  \"p\" es el selector y \"blue\" es el valor.
```

### 14 — HTML y programación

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: vf
respuesta: falso

enunciado: "HTML es un lenguaje de programación como JavaScript."

explicacion: |
  HTML describe contenido; no tiene bucles ni condiciones.
```

### 15 — CSS en archivo aparte

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: vf
respuesta: verdadero

enunciado: "Es recomendable escribir el CSS en un archivo aparte para reutilizarlo en varias páginas."

explicacion: |
  Facilita el mantenimiento.
```

### 16 — Caja

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: vf
respuesta: verdadero

enunciado: "Cada elemento de una página se representa como una caja con contenido, relleno, borde y margen."

explicacion: |
  Es el modelo de caja de CSS.
```

### 17 — Página estática

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: vf
respuesta: verdadero

enunciado: "En una página estática el servidor entrega siempre el mismo archivo."

explicacion: |
  En una dinámica el contenido se arma según el usuario o los datos.
```

### 18 — F12

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: vf
respuesta: verdadero

enunciado: "Los navegadores incluyen herramientas para desarrolladores que permiten ver el HTML y probar CSS."

explicacion: |
  Suelen abrirse con la tecla F12.
```

### 19 — Evento

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "intermedio"
  tags: ["web", "html_css_js"]

tipo: vf
respuesta: verdadero

enunciado: "Un clic es un ejemplo de evento al que puede responder JavaScript."

explicacion: |
  Los eventos permiten la interactividad.
```

### 20 — Siglas HTML

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: completar
enunciado: "HTML significa HyperText ___ Language."
respuestas_validas:
  - "Markup"
  - "markup"

explicacion: |
  Es un lenguaje de marcado.
```

### 21 — Navegador

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: completar
enunciado: "El programa que pide, interpreta y dibuja la página es el ___."
respuestas_validas:
  - "navegador"

explicacion: |
  Hace de cliente frente al servidor.
```

### 22 — Lenguaje de comportamiento

```
metadata:
  materia: "informatica"
  tema: "como_se_construye_una_pagina_web_html_css_javascript"
  nivel: "basico"
  tags: ["web", "html_css_js"]

tipo: completar
enunciado: "El lenguaje que agrega interactividad a una página es ___."
respuestas_validas:
  - "JavaScript"
  - "javascript"
  - "Javascript"

explicacion: |
  Se ejecuta en el navegador.
```
