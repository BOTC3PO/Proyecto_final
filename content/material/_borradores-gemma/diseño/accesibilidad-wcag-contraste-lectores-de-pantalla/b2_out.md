### 1 — Contraste de color WCAG AA
```
metadata:
  materia: "diseño"
  tema: "wcag_contraste_color"
  nivel: "intermedio"
  tags: ["accesibilidad", "color", "wcag"]

variables:
  escenario: uno_de([
    ["Texto gris claro sobre fondo blanco", "0.5"],
    ["Texto negro sobre fondo blanco", "21.0"],
    ["Texto azul sobre fondo blanco", "4.5"]
  ])

enunciado: "En el diseño de una interfaz, se evalúa el contraste entre un texto de color y su fondo. Según las pautas WCAG 2.1 Nivel AA, para texto normal, el ratio de contraste mínimo debe ser de ___."

respuestas_validas: ["4.5"]
tipo: completar

explicacion: |
  Para cumplir con el nivel AA de las WCAG 2.1, el texto normal debe tener un ratio de contraste de al menos 4.5:1 contra su fondo. El escenario actual tiene un ratio de {escenario}, lo cual es {escenario == "4.5" ? "correcto" : "insuficiente"}.
```

### 2 — Lectores de pantalla y semántica
```
metadata:
  materia: "diseño"
  tema: "lectores_pantalla_semantica"
  nivel: "basico"
  tags: ["accesibilidad", "lectores_pantalla", "html"]

enunciado: "Un diseñador UI decide que, para mejorar la accesibilidad, un botón que solo contiene un icono de 'X' para cerrar una ventana debe incluir un texto alternativo o una etiqueta aria. ¿Es verdadero que el uso de etiquetas `aria-label` permite que los lectores de pantalla anuncien la función del botón aunque no haya texto visible?"

respuesta: verdadero
tipo: vf

explicacion: |
  Verdadero. Los lectores de pantalla utilizan las etiquetas `aria-label` o el texto contenido en el elemento para comunicar la función del control a usuarios con discapacidad visual, compensando la falta de texto visual.
```

### 3 — Orden de jerarquía de encabezados
```
metadata:
  materia: "diseño"
  tema: "estructura_documental_wcag"
  nivel: "intermedio"
  tags: ["accesibilidad", "estructura", "lectores_pantalla"]

opciones_explicitas: ["H1", "H2", "H3", "H4"]
respuesta: ["H1", "H2", "H3", "H4"]
tipo: ordenar

enunciado: "Para que un usuario de lector de pantalla pueda navegar lógicamente por la estructura de una página web, los encabezados deben seguir un orden jerárquico descendente sin saltos de nivel. Ordena la siguiente secuencia lógica de encabezados:"

pasos:
  - "Identificar el título principal"
  - "Identificar la sección secundaria"
  - "Identificar la subsección de la sección secundaria"
  - "Identificar la subsección de la subsección"

explicacion: |
  La navegación por encabezados es fundamental para la orientación espacial en documentos digitales. Saltarse niveles (ej. pasar de H1 a H3) confunde a los usuarios de tecnologías asistivas.
```

### 4 — Contraste para texto grande
```
metadata:
  materia: "diseño"
  tema: "wcag_contraste_texto_grande"
  nivel: "intermedio"
  tags: ["accesibilidad", "color", "wcag"]

variables:
  ratio_actual: uno_de([
    ["3.0"],
    ["4.6"],
    ["2.5"]
  ])

enunciado: "Se está diseñando un encabezado de gran tamaño (18pt o 14pt negrita). El ratio de contraste medido entre el texto y el fondo es de {ratio_actual}:1. ¿Cumple este elemento con el requisito de contraste mínimo para el nivel AA en texto grande?"

opciones_explicitas: ["Sí", "No"]
respuesta: "Sí"
tipo: mc

explicacion: |
  Para texto grande (18pt o superior, o 14pt en negrita), el estándar WCAG AA exige un ratio de contraste mínimo de 3:1. Como el ratio es {ratio_actual}, la respuesta es {"Sí" : "Sí", "No" : "No"}[{ratio_actual == "3.0" || ratio_actual == "4.6" ? "Sí" : "No"}].
```

### 5 — Navegación por teclado
```
metadata:
  materia: "diseño"
  tema: "navegacion_teclado"
  nivel: "basico"
  tags: ["accesibilidad", "teclado", "interaccion"]

enunciado: "Un elemento interactivo (como un enlace o un botón) debe ser alcanzable y operable mediante el uso del teclado. Esto se logra principalmente mediante el uso correcto del ___."

respuestas_validas: ["foco del teclado"]
tipo: completar

explicacion: |
  El orden y la visibilidad del foco del teclado son esenciales para que las personas que no utilizan ratón (por discapacidad motriz o visual) puedan navegar por la interfaz.
```