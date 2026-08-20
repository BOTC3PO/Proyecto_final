# Diseño — Accesibilidad wcag contraste lectores de pantalla (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de WCAG

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_wcag_conceptos"
  nivel: "basico"
  tags: ["wcag", "estandares", "web"]

respuesta: "Pautas de Accesibilidad para el Contenido Web"
tipo: completar
respuestas_validas:
  - "Pautas de Accesibilidad para el Contenido Web"
  - "Pautas de Accesibilidad para el Contenido Web"

enunciado: "Las siglas WCAG significan ___."

explicacion: |
  WCAG son las 'Web Content Accessibility Guidelines', traducidas como Pautas de Accesibilidad para el Contenido Web.
```

### 2 — Contraste de color y percepción

```
metadata:
  materia: "diseño"
  tema: "contraste_color"
  nivel: "basico"
  tags: ["color", "contraste", "discapacidad_visual"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[ "Texto gris claro sobre fondo blanco", "falla" ], [ "Texto negro sobre fondo blanco", "cumple" ]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["cumple", "falla"]

enunciado: "En el siguiente caso de diseño, ¿el contraste es adecuado para asegurar la legibilidad?: {datos[escenario_idx][0]}"

explicacion: |
  El contraste es la diferencia de luminancia entre el texto y su fondo. Un contraste bajo dificulta la lectura a personas con baja visión.
```

### 3 — Lectores de pantalla y semántica

```
metadata:
  materia: "diseño"
  tema: "lectores_pantalla"
  nivel: "intermedio"
  tags: ["lectores_pantalla", "semantica", "html"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un lector de pantalla puede interpretar correctamente la jerarquía de un documento si se utilizan etiquetas de encabezado (h1, h2, etc.) de forma semántica?"

explicacion: |
  Verdadero. El uso de HTML semántico permite que los usuarios de lectores de pantalla naveguen por la estructura del contenido de manera lógica.
```

### 4 — Niveles de conformidad WCAG

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag"
  nivel: "basico"
  tags: ["niveles", "cumplimiento"]

respuesta_orden: ["A", "AA", "AAA"]
tipo: ordenar

opciones_explicitas: ["A", "AA", "AAA"]

enunciado: "Ordene los tres niveles de conformidad de las pautas WCAG, desde el más básico hasta el más exigente:"

explicacion: |
  Los niveles son A (mínimo), AA (estándar recomendado) y AAA (máximo nivel de accesibilidad).
```

### 5 — Atributos de accesibilidad

```
metadata:
  materia: "diseño"
  tema: "atributos_texto_alternativo"
  nivel: "intermedio"
  tags: ["alt", "imagenes", "lectores_pantalla"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [[ "Un botón que solo contiene un icono de lupa sin texto", "incorrecto" ], [ "Una imagen decorativa sin atributo alt", "correcto" ]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["correcto", "incorrecto"]

enunciado: "Analice el siguiente caso de implementación de accesibilidad: {casos[caso_idx][0]}. ¿Es la implementación correcta para asegurar la compatibilidad con lectores de pantalla?"

explicacion: |
  Las imágenes con significado deben tener un atributo 'alt' descriptivo. Las imágenes puramente decorativas deben tener un 'alt' vacío para que el lector de pantalla las ignore.
```

### 6 — Contraste de color WCAG AA

```
metadata:
  materia: "diseño"
  tema: "wcag_contraste_color"
  nivel: "intermedio"
  tags: ["accesibilidad", "color", "wcag"]

variables:
  idx: uno_de([0, 1, 2])
  escenarios: ["Texto gris claro sobre fondo blanco", "Texto negro sobre fondo blanco", "Texto azul sobre fondo blanco"]
  ratios: ["0.5", "21.0", "4.5"]
  estados: ["insuficiente", "correcto", "correcto"]

enunciado: "En el diseño de una interfaz, se evalúa el contraste entre un texto de color y su fondo. Según las pautas WCAG 2.1 Nivel AA, para texto normal, el ratio de contraste mínimo debe ser de ___."

respuestas_validas:
  - "4.5"
tipo: completar

explicacion: |
  Para cumplir con el nivel AA de las WCAG 2.1, el texto normal debe tener un ratio de contraste de al menos 4.5:1 contra su fondo. El escenario "{escenarios[idx]}" tiene un ratio de {ratios[idx]}, lo cual es {estados[idx]}.
```

### 7 — Lectores de pantalla y semántica

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

### 8 — Orden de jerarquía de encabezados

```
metadata:
  materia: "diseño"
  tema: "estructura_documental_wcag"
  nivel: "intermedio"
  tags: ["accesibilidad", "estructura", "lectores_pantalla"]

opciones_explicitas: ["H1", "H2", "H3", "H4"]
respuesta_orden: ["H1", "H2", "H3", "H4"]
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

### 9 — Contraste para texto grande

```
metadata:
  materia: "diseño"
  tema: "wcag_contraste_texto_grande"
  nivel: "intermedio"
  tags: ["accesibilidad", "color", "wcag"]

variables:
  datos: [["3.0", "Sí"], ["4.6", "Sí"], ["2.5", "No"]]
  idx: uno_de([0,1,2])
  ratio_actual: datos[idx][0]
  respuesta_correcta: datos[idx][1]

enunciado: "Se está diseñando un encabezado de gran tamaño (18pt o 14pt negrita). El ratio de contraste medido entre el texto y el fondo es de {ratio_actual}:1. ¿Cumple este elemento con el requisito de contraste mínimo para el nivel AA en texto grande?"

opciones_explicitas: ["Sí", "No"]
respuesta: respuesta_correcta
tipo: mc

explicacion: |
  Para texto grande (18pt o superior, o 14pt en negrita), el estándar WCAG AA exige un ratio de contraste mínimo de 3:1. Como el ratio es {ratio_actual}, la respuesta es {respuesta_correcta}.
```

### 10 — Navegación por teclado

```
metadata:
  materia: "diseño"
  tema: "navegacion_teclado"
  nivel: "basico"
  tags: ["accesibilidad", "teclado", "interaccion"]

enunciado: "Un elemento interactivo (como un enlace o un botón) debe ser alcanzable y operable mediante el uso del teclado. Esto se logra principalmente mediante el uso correcto del ___."

respuestas_validas:
  - "foco del teclado"
tipo: completar

explicacion: |
  El orden y la visibilidad del foco del teclado son esenciales para que las personas que no utilizan ratón (por discapacidad motriz o visual) puedan navegar por la interfaz.
```

### 11 — Contraste de texto normal

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_wcag_contraste"
  nivel: "intermedio"
  tags: ["wcag", "contraste", "diseño_inclusivo"]

respuesta: "4.5:1"
tipo: "completar"
respuestas_validas:
  - "4.5:1"
  - "4.5/1"
  - "4.5 a 1"

enunciado: "Según las pautas WCAG 2.1 (Nivel AA), el contraste mínimo requerido para que el texto normal sea legible para la mayoría de las personas con baja visión es de ___."

explicacion: |
  Para texto normal (menor a 18pt o 14pt negrita), el ratio de contraste debe ser de al menos 4.5:1. Para texto grande, se requiere 3:1.
```

### 12 — Lectores de pantalla y semántica

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_lectores_pantalla"
  nivel: "intermedio"
  tags: ["lectores_pantalla", "semántica", "html"]

respuesta: falso
tipo: "vf"

enunciado: "Un diseñador decide usar un elemento `<div>` con un evento `onClick` para simular un botón, omitiendo el uso de la etiqueta `<button>` para que el diseño se vea 'más limpio'. ¿Es esto una buena práctica para la accesibilidad de lectores de pantalla?"

explicacion: |
  Falso. Los lectores de pantalla identifican elementos interactivos por su rol semántico. Un `div` no tiene rol de botón por defecto, por lo que un usuario que navega con teclado o lector de pantalla no sabrá que es interactivo a menos que se use la etiqueta correcta o atributos ARIA específicos.
```

### 13 — Orden de navegación lógica

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_orden_lectura"
  nivel: "basico"
  tags: ["orden_foco", "navegación_teclado"]

opciones_explicitas: ["Encabezado principal", "Menú de navegación", "Contenido principal", "Pie de página"]
respuesta_orden: ["Encabezado principal", "Menú de navegación", "Contenido principal", "Pie de página"]
tipo: "ordenar"

enunciado: "Para garantizar una navegación coherente con lectores de pantalla y teclado, ¿cuál es el orden lógico de lectura esperado en una página web estándar?"

explicacion: |
  El orden de tabulación y lectura debe seguir la estructura visual y semántica lógica: primero la identidad/título, luego la navegación, luego el contenido central y finalmente la información de cierre.
```

### 14 — Contraste en elementos no textuales

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_wcag_contraste"
  nivel: "avanzado"
  tags: ["iconos", "ui_design", "wcag"]

variables:
  escenario: uno_de([0,1])
  datos: [["iconos_informativos", "3:1"], ["texto_cuerpo", "4.5:1"]]

respuesta: datos[escenario][1]
tipo: "mc"
opciones_explicitas: ["4.5:1", "3:1", "2:1", "7:1"]

enunciado: "En el escenario de diseño de un icono que transmite información esencial (como un icono de advertencia), ¿cuál es el ratio de contraste mínimo requerido por WCAG 2.1 para cumplir con el nivel AA?"

explicacion: |
  Los componentes de la interfaz de usuario y los elementos gráficos esenciales (como iconos) requieren un ratio de contraste mínimo de 3:1 contra los colores adyacentes.
```

### 15 — Color como único medio de información

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_color"
  nivel: "basico"
  tags: ["discapacidad_color", "diseño_inclusivo"]

respuesta: falso
tipo: "vf"

enunciado: "Es una práctica de accesibilidad correcta utilizar únicamente el color (por ejemplo, poner el texto en rojo) para indicar un error en un formulario, ya que el color es una señal visual rápida."

explicacion: |
  Falso. Nunca se debe usar el color como el único medio para transmitir información o indicar una acción. Se debe complementar con texto (ej: "Error: campo requerido") o iconos para que personas con daltonismo o ceguera puedan percibir la indicación.
```

### 16 — Contraste de color WCAG

```
metadata:
  materia: "diseño"
  tema: "wcag_contraste_color"
  nivel: "intermedio"
  tags: ["accesibilidad", "color", "wcag"]

enunciado: "Para cumplir con el nivel de contraste AA de las pautas WCAG 2.1, el texto normal debe tener una relación de contraste mínima de ___ contra el color de fondo."

respuestas_validas:
  - "4.5:1"
tipo: completar

explicacion: |
  El estándar WCAG 2.1 establece que para alcanzar el nivel AA, el texto normal debe tener una relación de contraste de al menos 4.5:1. Para texto grande, el mínimo es 3:1.
```

### 17 — Lectores de pantalla vs. Subtítulos

```
metadata:
  materia: "diseño"
  tema: "lectores_pantalla_vs_subtitulos"
  nivel: "basico"
  tags: ["accesibilidad", "discapacidad_auditiva", "discapacidad_visual"]

variables:
  es_visual: uno_de([verdadero, falso])

enunciado: "Si el usuario tiene una discapacidad visual, la herramienta principal de navegación es un lector de pantalla. Si el usuario tiene una discapacidad auditiva, la herramienta principal es ___."

opciones_explicitas: ["subtítulos", "texto alternativo", "contraste alto"]
respuesta: "subtítulos"
tipo: mc

explicacion: |
  Los lectores de pantalla convierten texto en audio para personas con discapacidad visual, mientras que los subtítulos convierten audio en texto para personas con discapacidad auditiva.
```

### 18 — Texto Alternativo vs. Descripción Larga

```
metadata:
  materia: "diseño"
  tema: "texto_alternativo_vs_descripcion"
  nivel: "avanzado"
  tags: ["accesibilidad", "seo", "web_content"]

enunciado: "En el contexto de la accesibilidad, ¿cuál es la diferencia fundamental entre el atributo 'alt' y una descripción larga (longdesc)?"

opciones_explicitas: ["El 'alt' es para contenido visual rápido y la descripción larga para gráficos complejos.", "El 'alt' es para SEO y la descripción larga es para motores de búsqueda.", "No hay diferencia, ambos cumplen la misma función."]
respuesta: "El 'alt' es para contenido visual rápido y la descripción larga para gráficos complejos."
tipo: mc

explicacion: |
  El atributo 'alt' debe ser una descripción concisa del propósito de la imagen. Si la imagen es un gráfico complejo (como un diagrama), se requiere una descripción detallada o una descripción larga.
```

### 19 — Jerarquía de encabezados

```
metadata:
  materia: "diseño"
  tema: "jerarquia_encabezados"
  nivel: "basico"
  tags: ["accesibilidad", "estructura", "semantica"]

enunciado: "Para que un lector de pantalla navegue correctamente una página, los encabezados deben seguir un orden lógico. Ordena la jerarquía correcta de etiquetas HTML de mayor a menor importancia:"

opciones_explicitas: ["h1", "h2", "h3", "h4"]
respuesta_orden: ["h1", "h2", "h3", "h4"]
tipo: ordenar

explicacion: |
  La estructura semántica debe ser descendente. Saltar niveles (por ejemplo, de h1 a h3) confunde a los usuarios de lectores de pantalla que utilizan los encabezados para entender la estructura del documento.
```

### 20 — Contraste de color: Texto vs. Componentes

```
metadata:
  materia: "diseño"
  tema: "contraste_componentes_ui"
  nivel: "intermedio"
  tags: ["wcag", "ui_design", "contraste"]

enunciado: "Según WCAG, ¿es obligatorio que los bordes de los campos de entrada (input) tengan un contraste mínimo de 3:1 contra el fondo para ser accesibles?"

respuesta: verdadero
tipo: vf

explicacion: |
  Verdadero. El estándar WCAG 2.1 requiere que los componentes de la interfaz de usuario (como los bordes de los inputs) tengan una relación de contraste de al menos 3:1 contra los colores adyacentes.
```

### 21 — Contraste de color WCAG AA

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_color"
  nivel: "intermedio"
  tags: ["wcag", "contraste", "diseño_ui"]

variables:
  datos: [["Texto gris claro sobre fondo blanco", "4.5"], ["Texto azul sobre fondo negro", "7.0"]]
  idx: uno_de([0, 1])

enunciado: "Un diseñador debe cumplir con el nivel WCAG AA para texto normal. Según el escenario seleccionado, el ratio de contraste es {datos[idx][0]}. ¿Es este valor suficiente para cumplir la pauta de contraste mínimo de 4.5:1? (Responde con verdadero o falso)"

respuestas_validas:
  - datos[idx][1] == "4.5"
respuesta: datos[idx][1] == "4.5"

tipo: completar
explicacion: |
  Para cumplir con el nivel AA de las pautas WCAG, el texto normal debe tener un ratio de contraste de al menos 4.5:1. El valor {datos[idx][0]} cumple con este requisito.
```

### 22 — Lectores de pantalla y navegación

```
metadata:
  materia: "diseño"
  tema: "lectores_de_pantalla"
  nivel: "basico"
  tags: ["accesibilidad", "web_a11y", "lectores_de_pantalla"]

opciones_explicitas: ["Imágenes sin atributo alt", "Uso de etiquetas semánticas", "Uso de colores para indicar error", "Botones con solo iconos"]

respuesta: "Uso de etiquetas semánticas"

tipo: mc

enunciado: "Un usuario con discapacidad visual utiliza un lector de pantalla para navegar por un sitio web. ¿Cuál de las siguientes prácticas facilita significativamente la comprensión de la estructura del sitio?"

explicacion: |
  Las etiquetas semánticas (como <nav>, <main>, <header>) permiten que los lectores de pantalla informen al usuario sobre la estructura y las regiones de la página, permitiendo una navegación eficiente.
```

### 23 — Orden de lectura en CSS

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_estructura"
  nivel: "avanzado"
  tags: ["css", "orden_lectura", "a11y"]

opciones_explicitas: ["HTML semántico", "Propiedad CSS order", "Posición visual en el viewport", "Orden de carga de archivos"]

respuesta_orden: ["HTML semántico", "Posición visual en el viewport", "Propiedad CSS order", "Orden de carga de archivos"]

tipo: ordenar

enunciado: "Para garantizar que el orden de lectura de un lector de pantalla coincida con la experiencia visual, se debe priorizar el orden de los elementos en este orden jerárquico:"

explicacion: |
  El orden lógico de lectura para tecnologías asistivas debe basarse primero en el DOM (HTML semántico), luego en la disposición visual natural y, finalmente, en las manipulaciones de CSS que no alteren el orden del flujo del documento.
```

### 24 — Significado del color

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_color"
  nivel: "basico"
  tags: ["color", "discapacidad_visual"]

variables:
  datos: [["Un campo de formulario con borde rojo sin icono", "incorrecto"], ["Un campo con borde rojo y un icono de exclamación", "correcto"]]
  idx: uno_de([0, 1])

enunciado: "En el caso de: {datos[idx][0]}, la implementación es considerada {datos[idx][1]} según las pautas de accesibilidad para personas con daltonismo."

respuestas_validas:
  - "correcto"
  - "incorrecto"

respuesta: datos[idx][1]

tipo: completar

explicacion: |
  No se debe usar el color como el único medio para transmitir información o indicar un error, ya que las personas con deficiencias en la percepción del color no podrán identificarlo.
```

### 25 — Contraste para texto grande

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_color"
  nivel: "intermedio"
  tags: ["wcag", "contraste", "diseño_ui"]

enunciado: "Para el nivel WCAG AA, el ratio de contraste mínimo para texto de tamaño grande (al menos 18pt o 14pt en negrita) es de 3.0:1. ¿Es correcto este valor?"

respuesta: verdadero

tipo: vf

explicacion: |
  El estándar WCAG AA exige un ratio de 4.5:1 para texto normal, pero permite un ratio menor de 3.0:1 para texto de tamaño grande o negrita.
```
