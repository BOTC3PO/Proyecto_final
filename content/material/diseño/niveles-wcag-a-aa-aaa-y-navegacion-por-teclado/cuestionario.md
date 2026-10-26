# UX y diseño — Niveles WCAG (A, AA, AAA) y navegación por teclado (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — POUR

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "basico"
  tags: ["ux"]

enunciado: "La sigla POUR resume los principios de WCAG. ¿Qué significan?"
tipo: mc
opciones_explicitas:
  - "Perceptible, operable, comprensible, robusto"
  - "Preciso, óptimo, útil, rápido"
  - "Público, oficial, universal, regulado"
respuesta: "Perceptible, operable, comprensible, robusto"

explicacion: |
  Son los cuatro principios del estándar.
```

### 2 — Estructura

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "basico"
  tags: ["ux"]

enunciado: "¿Cuál es el orden de la estructura de WCAG, de lo general a lo concreto?"
tipo: mc
opciones_explicitas:
  - "Principios, pautas, criterios de éxito"
  - "Criterios, pautas, principios"
  - "Niveles, colores, tamaños"
respuesta: "Principios, pautas, criterios de éxito"

explicacion: |
  Los criterios son comprobables.
```

### 3 — Niveles

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "basico"
  tags: ["ux"]

enunciado: "¿Cuáles son los niveles de conformidad de WCAG?"
tipo: mc
opciones_explicitas:
  - "A, AA y AAA"
  - "1, 2 y 3"
  - "Básico, medio y experto"
respuesta: "A, AA y AAA"

explicacion: |
  De menor a mayor exigencia.
```

### 4 — Acumulativos

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Para declarar conformidad AA hay que cumplir todos los criterios A y también los AA."

explicacion: |
  Los niveles son acumulativos.
```

### 5 — Nivel habitual

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "¿Qué nivel suelen exigir la mayoría de las normativas?"
tipo: mc
opciones_explicitas:
  - "AA"
  - "AAA para todo el sitio"
  - "Ninguno"
respuesta: "AA"

explicacion: |
  AAA suele aplicarse de manera selectiva.
```

### 6 — AAA general

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Es razonable exigir el nivel AAA a todo el contenido de cualquier sitio."

explicacion: |
  Algunos criterios AAA no se pueden cumplir para cualquier contenido.
```

### 7 — Versión

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "WCAG 2.2 es..."
tipo: mc
opciones_explicitas:
  - "Una Recomendación del W3C publicada en 2023"
  - "Una ley argentina"
  - "Un programa para lectores de pantalla"
respuesta: "Una Recomendación del W3C publicada en 2023"

explicacion: |
  Es un estándar, no una ley.
```

### 8 — Ley argentina

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "¿Qué ley argentina regula la accesibilidad de la información en páginas web?"
tipo: mc
opciones_explicitas:
  - "Ley 26.653"
  - "Ley 25.326"
  - "Ley 24.240"
respuesta: "Ley 26.653"

explicacion: |
  Obliga a organismos públicos, entre otros.
```

### 9 — Teclado

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Todo lo que se puede hacer con el mouse debería poder hacerse con..."
tipo: mc
opciones_explicitas:
  - "El teclado"
  - "Solo con voz"
  - "Un joystick"
respuesta: "El teclado"

explicacion: |
  Es clave para accesibilidad motora y lectores de pantalla.
```

### 10 — Tab

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "basico"
  tags: ["ux"]

enunciado: "La tecla Tab sirve para..."
tipo: mc
opciones_explicitas:
  - "Mover el foco al siguiente elemento"
  - "Cerrar la página"
  - "Aumentar el zoom"
respuesta: "Mover el foco al siguiente elemento"

explicacion: |
  Recorre los elementos interactivos.
```

### 11 — Foco visible

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "basico"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Se puede quitar el contorno del foco sin reemplazarlo, porque queda más prolijo."

explicacion: |
  El foco visible es un criterio de nivel AA.
```

### 12 — Orden

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El orden de tabulación debería seguir..."
tipo: mc
opciones_explicitas:
  - "El orden visual lógico de la página"
  - "El orden de creación del código"
  - "El orden alfabético"
respuesta: "El orden visual lógico de la página"

explicacion: |
  Si salta de manera caótica, desorienta.
```

### 13 — Trampa

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Una 'trampa de teclado' es..."
tipo: mc
opciones_explicitas:
  - "Un componente del que no se puede salir con el teclado"
  - "Un atajo oculto"
  - "Una contraseña débil"
respuesta: "Un componente del que no se puede salir con el teclado"

explicacion: |
  Está prohibida por WCAG.
```

### 14 — Saltar al contenido

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El enlace 'Saltar al contenido' sirve para..."
tipo: mc
opciones_explicitas:
  - "Evitar pasar por todo el menú en cada página"
  - "Cambiar de idioma"
  - "Imprimir la página"
respuesta: "Evitar pasar por todo el menú en cada página"

explicacion: |
  Ahorra pulsaciones a quien navega con teclado.
```

### 15 — Elementos nativos

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "¿Por qué conviene usar botones HTML reales en lugar de un div con aspecto de botón?"
tipo: mc
opciones_explicitas:
  - "Traen comportamiento de teclado y semántica"
  - "Son más grandes"
  - "Son más baratos"
respuesta: "Traen comportamiento de teclado y semántica"

explicacion: |
  Un div requiere trabajo extra para ser accesible.
```

### 16 — Texto alternativo

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Una imagen que transmite información necesita..."
tipo: mc
opciones_explicitas:
  - "Una alternativa de texto"
  - "Un marco de color"
  - "Un tamaño mayor"
respuesta: "Una alternativa de texto"

explicacion: |
  Criterio de nivel A.
```

### 17 — Decorativas

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Las imágenes puramente decorativas se marcan para que el lector de pantalla las ignore."

explicacion: |
  Así no leen ruido innecesario.
```

### 18 — Subtítulos

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Los videos necesitan..."
tipo: mc
opciones_explicitas:
  - "Subtítulos"
  - "Más color"
  - "Música"
respuesta: "Subtítulos"

explicacion: |
  Y el audio, transcripción.
```

### 19 — Etiquetas

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Cada campo de formulario debería tener..."
tipo: mc
opciones_explicitas:
  - "Una etiqueta asociada"
  - "Solo un ícono"
  - "Un color de borde distinto"
respuesta: "Una etiqueta asociada"

explicacion: |
  Permite que el lector de pantalla lo anuncie.
```

### 20 — Zoom

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Al ampliar el zoom, el contenido debería..."
tipo: mc
opciones_explicitas:
  - "Adaptarse sin perder información ni obligar a desplazarse en dos direcciones"
  - "Ocultarse"
  - "Cambiar de idioma"
respuesta: "Adaptarse sin perder información ni obligar a desplazarse en dos direcciones"

explicacion: |
  Es el criterio de reflujo.
```

### 21 — Herramientas automáticas

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "avanzado"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Una herramienta automática de accesibilidad basta para garantizar que un sitio sea accesible."

explicacion: |
  Detecta solo una parte; hace falta revisión manual.
```

### 22 — Prueba manual

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Una buena prueba manual de accesibilidad incluye..."
tipo: mc
opciones_explicitas:
  - "Recorrer la página solo con el teclado y con un lector de pantalla"
  - "Mirar la página en una sola pantalla"
  - "Cambiar la fuente"
respuesta: "Recorrer la página solo con el teclado y con un lector de pantalla"

explicacion: |
  Complementa las herramientas automáticas.
```

### 23 — W3C

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag_a_aa_aaa_y_navegacion_por_teclado"
  nivel: "basico"
  tags: ["ux"]

tipo: completar
enunciado: "El consorcio que publica WCAG se llama ___."
respuestas_validas:
  - "W3C"

explicacion: |
  World Wide Web Consortium.
```
