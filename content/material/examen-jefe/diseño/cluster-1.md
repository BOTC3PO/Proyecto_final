# Examen jefe — Maestro de Usabilidad y Accesibilidad

> Logro #213. Completaste el examen jefe dominando WCAG, heurísticas de Nielsen y prototipado. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **125 preguntas totales** en 5/5 secciones.

---

## Sección: accesibilidad-wcag-contraste-lectores-de-pantalla (25 preguntas)

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_wcag_conceptos"
  nivel: "basico"
  tags: ["wcag", "estandares", "web"]

respuesta: "Pautas de Accesibilidad para el Contenido Web"
tipo: completar
respuestas_validas: ["Pautas de Accesibilidad para el Contenido Web", "Pautas de Accesibilidad para el Contenido Web"]

enunciado: "Las siglas WCAG significan ___."

explicacion: |
  WCAG son las 'Web Content Accessibility Guidelines', traducidas como Pautas de Accesibilidad para el Contenido Web.
```

```
metadata:
  materia: "diseño"
  tema: "contraste_color"
  nivel: "basico"
  tags: ["color", "contraste", "discapacidad_visual"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[ "Texto gris claro sobre fondo blanco", "falla" ], [ "Texto negro sobre fondo blanco", "cumple" ]]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["cumple", "falla"]

enunciado: "En el siguiente caso de diseño, ¿el contraste es adecuado para asegurar la legibilidad?: {datos[escenario_idx][0]}"

explicacion: |
  El contraste es la diferencia de luminancia entre el texto y su fondo. Un contraste bajo dificulta la lectura a personas con baja visión.
```

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

```
metadata:
  materia: "diseño"
  tema: "niveles_wcag"
  nivel: "basico"
  tags: ["niveles", "cumplimiento"]

respuesta: "A, AA, AAA"
tipo: ordenar

opciones_explicitas: ["A", "AA", "AAA"]

enunciado: "Ordene los tres niveles de conformidad de las pautas WCAG, desde el más básico hasta el más exigente:"

explicacion: |
  Los niveles son A (mínimo), AA (estándar recomendado) y AAA (máximo nivel de accesibilidad).
```

```
metadata:
  materia: "diseño"
  tema: "atributos_texto_alternativo"
  nivel: "intermedio"
  tags: ["alt", "imagenes", "lectores_pantalla"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [[ "Un botón que solo contiene un icono de lupa sin texto", "incorrecto" ], [ "Una imagen decorativa sin atributo alt", "correcto" ]]

respuesta: casos[caso_idx][1
tipo: mc
opciones_explicitas: ["correcto", "incorrecto"]

enunciado: "Analice el siguiente caso de implementación de accesibilidad: {casos[caso_idx][0]}. ¿Es la implementación correcta para asegurar la compatibilidad con lectores de pantalla?"

explicacion: |
  Las imágenes con significado deben tener un atributo 'alt' descriptivo. Las imágenes puramente decorativas deben tener un 'alt' vacío para que el lector de pantalla las ignore.
```

```
metadata:
  materia: "diseño"
  tema: "wcag_contraste_color"
  nivel: "intermedio"
  tags: ["accesibilidad", "color", "wcag"]

variables:
  datos: [
    ["Texto gris claro sobre fondo blanco", "0.5"],
    ["Texto negro sobre fondo blanco", "21.0"],
    ["Texto azul sobre fondo blanco", "4.5"]
  ]
  idx: uno_de([0, 1, 2])
  escenario: datos[idx][0]
  estado: ["correcto", "insuficiente"][datos[idx][1] == "4.5"]

enunciado: "En el diseño de una interfaz, se evalúa el contraste entre un texto de color y su fondo. Según las pautas WCAG 2.1 Nivel AA, para texto normal, el ratio de contraste mínimo debe ser de ___."

respuestas_validas: ["4.5"]
tipo: completar

explicacion: |
  Para cumplir con el nivel AA de las WCAG 2.1, el texto normal debe tener un ratio de contraste de al menos 4.5:1 contra su fondo. El escenario actual tiene un ratio de {datos[idx][1]}, lo cual es {estado}.
```

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

```
metadata:
  materia: "diseño"
  tema: "wcag_contraste_texto_grande"
  nivel: "intermedio"
  tags: ["accesibilidad", "color", "wcag"]

variables:
  datos: [
    ["3.0", "Sí"],
    ["4.6", "Sí"],
    ["2.5", "No"]
  ]
  idx: uno_de([0,1,2])
  ratio_actual: datos[idx][0]
  respuesta_correcta: datos[idx][1]

enunciado: "Se está diseñando un encabezado de gran tamaño (18pt o 14pt negrita). El ratio de contraste medido entre el texto y el fondo es de {ratio_actual}:1. ¿Cumple este elemento con el requisito de contraste mínimo para el nivel AA en texto grande?"

opciones_explicitas: ["Sí", "No"]
respuesta: respuesta_correcta
tipo: mc

explicacion: |
  Para texto grande (18pt o superior, o 14pt en negrita), el estándar WCAG AA exige un ratio de contraste mínimo de 3:1. Como el ratio es {ratio_actual}, la respuesta es {respuesta}.
```

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

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_wcag_contraste"
  nivel: "intermedio"
  tags: ["wcag", "contraste", "diseño_inclusivo"]

respuesta: "4.5:1"
tipo: "completar"
respuestas_validas: ["4.5:1", "4.5/1", "4.5 a 1"]

enunciado: "Según las pautas WCAG 2.1 (Nivel AA), el contraste mínimo requerido para que el texto normal sea legible para la mayoría de las personas con baja visión es de ___."

explicacion: |
  Para texto normal (menor a 18pt o 14pt negrita), el ratio de contraste debe ser de al menos 4.5:1. Para texto grande, se requiere 3:1.
```

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_lectores_pantalla"
  nivel: "intermedio"
  tags: ["lectores_pantalla", "semántica", "html"]

variables:
  es_incorrecto: true

respuesta: es_incorrecto
tipo: "vf"

enunciado: "Un diseñador decide usar un elemento `<div>` con un evento `onClick` para simular un botón, omitiendo el uso de la etiqueta `<button>` para que el diseño se vea 'más limpio'. ¿Es esto una buena práctica para la accesibilidad de lectores de pantalla?"

explicacion: |
  Falso. Los lectores de pantalla identifican elementos interactivos por su rol semántico. Un `div` no tiene rol de botón por defecto, por lo que un usuario que navega con teclado o lector de pantalla no sabrá que es interactivo a menos que se use la etiqueta correcta o atributos ARIA específicos.
```

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_orden_lectura"
  nivel: "basico"
  tags: ["orden_foco", "navegación_teclado"]

opciones_explicitas: ["Encabezado principal", "Menú de navegación", "Contenido principal", "Pie de página"]
respuesta: ["Encabezado principal", "Menú de navegación", "Contenido principal", "Pie de página"]
tipo: "ordenar"

enunciado: "Para garantizar una navegación coherente con lectores de pantalla y teclado, ¿cuál es el orden lógico de lectura esperado en una página web estándar?"

explicacion: |
  El orden de tabulación y lectura debe seguir la estructura visual y semántica lógica: primero la identidad/título, luego la navegación, luego el contenido central y finalmente la información de cierre.
```

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_wcag_contraste"
  nivel: "avanzado"
  tags: ["iconos", "ui_design", "wcag"]

variables:
  escenario: uno_de([0,1])
  datos: [["iconos_informativos", "3:1"], ["texto_cuerpo", "4.5:1"]]

respuesta: datos[escenario][1
tipo: "mc"
opciones_explicitas: ["4.5:1", "3:1", "2:1", "7:1"]

enunciado: "En el escenario de diseño de un icono que transmite información esencial (como un icono de advertencia), ¿cuál es el ratio de contraste mínimo requerido por WCAG 2.1 para cumplir con el nivel AA?"

explicacion: |
  Los componentes de la interfaz de usuario y los elementos gráficos esenciales (como iconos) requieren un ratio de contraste mínimo de 3:1 contra los colores adyacentes.
```

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

```
metadata:
  materia: "diseño"
  tema: "wcag_contraste_color"
  nivel: "intermedio"
  tags: ["accesibilidad", "color", "wcag"]

enunciado: "Para cumplir con el nivel de contraste AA de las pautas WCAG 2.1, el texto normal debe tener una relación de contraste mínima de ___ contra el color de fondo."

respuestas_validas: ["4.5:1"]
tipo: completar

explicacion: |
  El estándar WCAG 2.1 establece que para alcanzar el nivel AA, el texto normal debe tener una relación de contraste de al menos 4.5:1. Para texto grande, el mínimo es 3:1.
```

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

```
metadata:
  materia: "diseño"
  tema: "jerarquia_encabezados"
  nivel: "basico"
  tags: ["accesibilidad", "estructura", "semantica"]

enunciado: "Para que un lector de pantalla navegue correctamente una página, los encabezados deben seguir un orden lógico. Ordena la jerarquía correcta de etiquetas HTML de mayor a menor importancia:"

opciones_explicitas: ["h1, h2, h3, h4", "h4, h3, h2, h1", "h1, h3, h2, h4"]
respuesta: ["h1", "h2", "h3", "h4"]
tipo: ordenar

explicacion: |
  La estructura semántica debe ser descendente. Saltar niveles (por ejemplo, de h1 a h3) confunde a los usuarios de lectores de pantalla que utilizan los encabezados para entender la estructura del documento.
```

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

respuestas_validas: [datos[idx][1] == "4.5"]
respuesta: datos[idx][1] == "4.5"

tipo: completar
explicacion: |
  Para cumplir con el nivel AA de las pautas WCAG, el texto normal debe tener un ratio de contraste de al menos 4.5:1. El valor {datos[idx][0]} cumple con este requisito.
```

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

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_estructura"
  nivel: "avanzado"
  tags: ["css", "orden_lectura", "a11y"]

opciones_explicitas: ["HTML semántico", "Propiedad CSS order", "Posición visual en el viewport", "Orden de carga de archivos"]

respuesta: ["HTML semántico", "Posición visual en el viewport", "Propiedad CSS order", "Orden de carga de archivos"]

tipo: ordenar

enunciado: "Para garantizar que el orden de lectura de un lector de pantalla coincida con la experiencia visual, se debe priorizar el orden de los elementos en este orden jerárquico:"

explicacion: |
  El orden lógico de lectura para tecnologías asistivas debe basarse primero en el DOM (HTML semántico), luego en la disposición visual natural y, finalmente, en las manipulaciones de CSS que no alteren el orden del flujo del documento.
```

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

respuestas_validas: ["correcto", "incorrecto"]

respuesta: datos[idx][1]

tipo: completar

explicacion: |
  No se debe usar el color como el único medio para transmitir información o indicar un error, ya que las personas con deficiencias en la percepción del color no podrán identificarlo.
```

```
metadata:
  materia: "diseño"
  tema: "accesibilidad_color"
  nivel: "intermedio"
  tags: ["wcag", "contraste", "diseño_ui"]

variables:
  datos: [["Texto de 24pt (grande)", "3.0"], ["Texto de 12pt (normal)", "4.5"]]
  idx: uno_de([0, 1])

enunciado: "Para el nivel WCAG AA, el ratio de contraste mínimo para texto de tamaño grande (al menos 18pt o 14pt en negrita) es de {datos[idx][0]}. ¿Es este valor suficiente para cumplir la pauta?"

opciones_explicitas: ["verdadero", "falso"]

respuesta: datos[idx][1] == "3.0"

tipo: mc

explicacion: |
  El estándar WCAG AA exige un ratio de 4.5:1 para texto normal, pero permite un ratio menor de 3.0:1 para texto de tamaño grande o negrita.
```

## Sección: jerarquia-visual-e-informacion (25 preguntas)

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["teoria", "fundamentos"]

respuesta: "jerarquía visual"
tipo: completar
respuestas_validas: ["jerarquía visual", "jerarquia visual"]

enunciado: "El orden en el que el ojo humano percibe los elementos de una interfaz, establecido mediante el diseño, se denomina ___."

explicacion: |
  La jerarquía visual es la organización de los elementos de diseño para guiar el ojo del usuario a través de la interfaz, permitiendo identificar qué es lo más importante primero.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["contraste", "color", "tamaño"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Contraste", "Alineación", "Repetición", "Proximidad"]

enunciado: "Para resaltar un botón de 'Llamado a la acción' (CTA) sobre un fondo neutro, el diseñador utiliza principalmente el ___."

pasos:
  - "Identificar el elemento principal a destacar."
  - "Aplicar una diferencia significativa de color o tamaño respecto al fondo."

explicacion: |
  El contraste es una de las herramientas más potentes para crear jerarquía, ya que el ojo humano se siente atraído naturalmente por los elementos que rompen la uniformidad.

variables:
  datos: [["Contraste", "Contraste"], ["Alineación", "Alineación"]]
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["gestalt", "proximidad"]

respuesta: verdadero
tipo: vf

enunciado: "Según los principios de la Gestalt, los elementos que están físicamente cerca unos de otros se perciben como un grupo relacionado."

explicacion: |
  La proximidad es una técnica de jerarquía visual que utiliza el espacio en blanco para agrupar información relacionada y separar información distinta.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["escala", "tamaño"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [
    ["Aumentar el tamaño", "Aumentar el tamaño"],
    ["Disminuir el tamaño", "Disminuir el tamaño"],
    ["Cambiar el color", "Cambiar el color"]
  ]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Aumentar el tamaño", "Disminuir el tamaño", "Cambiar el color"]

enunciado: "Si se desea que un título sea el elemento de mayor peso visual en una página, la acción más directa es ___."

explicacion: |
  La escala es la relación de tamaño entre los elementos. Un elemento más grande suele percibirse como más importante que uno más pequeño.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["patrones", "lectura"]

respuesta: ["Patrón en F", "Patrón en Z", "Patrón Circular"]
tipo: ordenar
opciones_explicitas: ["Patrón en F", "Patrón en Z", "Patrón Circular"]

enunciado: "Ordena los patrones de escaneo visual más comunes en interfaces web, desde el que se usa para lectura de texto denso hasta el de navegación rápida en landing pages:"

explicacion: |
  El patrón en F es típico en páginas con mucho texto (como blogs), mientras que el patrón en Z es común en páginas con menos contenido y más visuales (como landing pages).
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["ui", "ux", "atencion"]

variables:
  color_primario: uno_de(["#FF5733", "#33FF57", "#3357FF"])

enunciado: "En una landing page, para que un botón de 'Comprar ahora' (CTA) destaque sobre el resto de la interfaz, se debe aplicar un contraste de color elevado respecto al fondo. Si el fondo es blanco y el color del botón es {color_primario}, ¿el botón tendrá un peso visual alto?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: "vf"

explicacion: |
  El contraste cromático es una de las herramientas principales de la jerarquía visual. Un color saturado o con alto contraste respecto al fondo atrae la mirada del usuario de forma inmediata, indicando que es un elemento de acción.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["layout", "patrones_de_lectura"]

variables:
  patron_idx: uno_de([0, 1])
  patrones: [["F", "Z"], ["Z", "F"]]
  patron_actual: patrones[patron_idx]

enunciado: "Al diseñar un dashboard con mucha información dispersa, el usuario suele seguir un patrón de escaneo visual. Si estamos diseñando una interfaz con una estructura de bloques horizontales y verticales muy marcados, el patrón más probable es el patrón {patron_actual}."

opciones_explicitas: ["F", "Z"]
respuesta: "F"
tipo: "mc"

explicacion: |
  El patrón en 'F' es típico en interfaces con mucho texto o listas (como feeds de redes sociales), donde el ojo recorre la parte superior y luego baja por el margen izquierdo. El patrón en 'Z' es común en landing pages con elementos visuales centrados.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["escala", "tipografia"]

variables:
  titulo_size: uno_de([48, 24, 12])
  subtitulo_size: uno_de([32, 18, 10])
  cuerpo_size: uno_de([16, 14, 12])

enunciado: "Para establecer una jerarquía tipográfica clara en un artículo, debemos asignar tamaños distintos a los elementos. Si definimos un título de {titulo_size}px, un subtítulo de {subtitulo_size}px y un cuerpo de {cuerpo_size}px, el orden de importancia visual (de mayor a menor) es:"

opciones_explicitas: ["título, subtítulo, cuerpo", "cuerpo, subtítulo, título", "subtítulo, título, cuerpo"]
respuesta: "título, subtítulo, cuerpo"
tipo: "mc"

explicacion: |
  La escala tipográfica es fundamental. Un tamaño mayor indica mayor importancia jerárquica, permitiendo que el usuario identifique rápidamente la estructura del contenido.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["ux", "flujo_de_usuario"]

enunciado: "Para diseñar un formulario de registro que no abrume al usuario, se recomienda seguir este orden de organización de la información:"

pasos:
  - "Agrupar campos relacionados mediante espacios en blanco (whitespace)."
  - "Establecer un orden lógico de lectura (de arriba hacia abajo)."
  - "Destacar el botón de acción final con un peso visual mayor."

opciones_explicitas: ["Agrupar campos, Establecer orden, Destacar botón", "Destacar botón, Agrupar campos, Establecer orden", "Establecer orden, Destacar botón, Agrupar campos"]
respuesta: ["Agrupar campos, Establecer orden, Destacar botón"]
tipo: "ordenar"

explicacion: |
  Primero se organiza el contenido (agrupación), luego se da sentido al flujo (orden) y finalmente se indica dónde terminar la tarea (CTA).
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "avanzado"
  tags: ["whitespace", "proximidad"]

variables:
  espacio_extra: uno_de([true, false])

enunciado: "En el diseño de una interfaz, si aplicamos la Ley de Proximidad de la Gestalt, al aumentar el espacio en blanco (whitespace) entre dos elementos, la percepción de su relación cambia. Si el espacio aumenta, la relación entre ellos es ___."

opciones_explicitas: ["fuerte", "débil", "nula"]
respuesta: "débil"
tipo: "mc"

explicacion: |
  La proximidad dicta que los elementos cercanos se perciben como parte de un mismo grupo. Al aumentar el espacio entre ellos, el cerebro deja de verlos como una unidad, rompiendo la relación visual.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["jerarquia", "atencion", "error_comun"]

variables:
  es_efectivo: falso

respuesta: es_efectivo
tipo: completar
enunciado: "Si un diseñador aplica el mismo tamaño, color vibrante y peso visual a todos los elementos de una interfaz, ¿se logra establecer una jerarquía visual efectiva para guiar la atención del usuario?"

explicacion: |
  Si todo destaca, nada destaca. La jerarquía visual requiere contraste y diferenciación para que el ojo pueda distinguir qué es lo más importante.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["patrones_lectura", "f-pattern", "z-pattern"]

variables:
  patron_idx: uno_de([0, 1])
  patrones: [["F-Pattern", "Z-Pattern"], ["Z-Pattern", "F-Pattern"]]
  descripciones: [["lectura densa de texto", "elementos visuales dispersos"]]

respuesta: patrones[patron_idx][0
tipo: mc
opciones_explicitas: ["F-Pattern", "Z-Pattern"]

enunciado: "En una interfaz con mucho contenido textual (como un blog o un artículo), el usuario suele seguir un patrón de escaneo conocido como {patrones[patron_idx][1]}."

pasos:
  - "Identificar la densidad de texto."
  - "Determinar el movimiento ocular predominante."

explicacion: |
  El 'F-Pattern' es típico en interfaces con mucho texto, donde el usuario escanea la parte superior y luego baja por el margen izquierdo.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["espacio_negativo", "respiro_visual"]

variables:
  elemento_clave: "botón de acción"

respuesta: "espacio en blanco"
tipo: completar
respuestas_validas: ["espacio en blanco", "aire", "espacio negativo"]

enunciado: "Para resaltar el {elemento_clave} y evitar la sobrecarga cognitiva, el diseñador debe utilizar estratégicamente el ___."

explicacion: |
  El espacio en blanco (o espacio negativo) no es 'espacio vacío', es una herramienta de diseño que ayuda a agrupar elementos y dar importancia a los objetos clave.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["ordenar", "prioridad", "layout"]

variables:
  escenario_idx: 0
  elementos: [["Título principal", "Subtítulo", "Cuerpo de texto", "Pie de página"], ["Botón CTA", "Imagen Hero", "Texto descriptivo", "Footer"]]

respuesta: elementos[escenario_idx
tipo: ordenar
opciones_explicitas: ["Título principal", "Subtítulo", "Cuerpo de texto", "Pie de página"]

enunciado: "Ordena los siguientes elementos de una página web según una jerarquía visual lógica de importancia (de mayor a menor impacto visual):"

pasos:
  - "Evaluar el tamaño de fuente esperado."
  - "Evaluar la posición en el layout."
  - "Evaluar el contraste de color."

explicacion: |
  Una jerarquía lógica guía al usuario desde lo general (título) hacia lo específico (detalle) y finalmente a la información secundaria (pie de página).
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "avanzado"
  tags: ["contraste", "color", "percepcion"]

variables:
  color_fondo: "blanco"
  color_texto: "gris claro"
  es_legible: falso

respuesta: es_legible
tipo: completar
enunciado: "Si utilizo un texto de color {color_texto} sobre un fondo {color_fondo}, el contraste será muy bajo. ¿Esto ayuda a crear una jerarquía clara y legible?"

explicacion: |
  Un contraste insuficiente rompe la jerarquía porque el usuario no puede distinguir los elementos del fondo, dificultando la navegación.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["teoria", "fundamentos"]

respuesta: "contraste"
tipo: mc
opciones_explicitas: ["contraste", "equilibrio", "alineación", "proximidad"]

enunciado: "Mientras que la jerarquía visual establece un orden de importancia de los elementos, el ___ es la herramienta que permite diferenciar dichos elementos mediante cambios en color, tamaño o forma."

explicacion: |
  El contraste es lo que permite que el ojo detecte diferencias. Sin contraste, no hay jerarquía, ya que todos los elementos parecerían tener la misma importancia.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["gestalt", "organizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["elementos agrupados por su función", "crea una unidad visual clara"],
    ["elementos dispersos sin relación", "genera confusión en la lectura"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: completar
respuestas_validas: [escenarios[escenario_idx][1]]

enunciado: "Cuando aplicamos el principio de proximidad en una interfaz, si agrupamos elementos que están relacionados, esto ___."

explicacion: |
  La proximidad utiliza el espacio para comunicar que ciertos elementos pertenecen a un mismo grupo o concepto, reduciendo la carga cognitiva.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "avanzado"
  tags: ["usabilidad", "cognicion"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que una jerarquía visual efectiva consiste en resaltar todos los elementos de una interfaz por igual para que el usuario no pierda información importante?"

explicacion: |
  Falso. Si todo resalta, nada resalta. Una jerarquía efectiva requiere decidir qué es lo más importante y qué es secundario para guiar el flujo de atención.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["patrones_de_lectura", "layout"]

respuesta: ["Título principal", "Subtítulo o imagen", "Cuerpo de texto", "Botón de acción (CTA)"]
tipo: ordenar
opciones_explicitas: ["Título principal", "Subtítulo o imagen", "Cuerpo de texto", "Botón de acción (CTA)"]

enunciado: "Ordena los elementos de una tarjeta de producto de mayor a menor importancia visual en un diseño estándar de e-commerce:"

explicacion: |
  La jerarquía debe guiar al usuario desde la identificación del objeto (título/imagen) hacia la información de detalle (texto) y finalmente hacia la conversión (botón).
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["escala", "atencion"]

variables:
  valor_escala: uno_de([0, 1])
  datos: [
    [10, "menor"],
    [50, "mayor"]
  ]

respuesta: datos[valor_escala][1

tipo: completar
respuestas_validas: [datos[valor_escala][1]]

enunciado: "En una composición visual, un elemento con un tamaño de {datos[valor_escala][0]}px tiene una importancia visual ___ que uno de {datos[valor_escala][0] * 2}px."

explicacion: |
  El tamaño es uno de los indicadores de jerarquía más directos: el ojo tiende a procesar primero los elementos de mayor escala.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["ux", "ui", "jerarquia"]

variables:
  datos: [["Botón de 'Comprar ahora' con color contrastante", "Texto de 'Términos y condiciones' en gris pequeño", "Título del producto en negrita y tamaño grande"], ["Botón de 'Cancelar' con borde gris", "Texto de 'Envío gratis' en color secundario", "Precio del producto en fuente mediana"]]
  idx: uno_de([0, 1])
  elemento_foco: datos[idx][0]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["El elemento con mayor peso visual es el que debe tener la acción principal", "El elemento con menor peso visual debe ser el más llamativo", "Todos los elementos deben tener el mismo peso visual", "El color no influye en la jerarquía"]

enunciado: "En un proceso de checkout, se presenta el siguiente elemento de alta prioridad: {elemento_foco}. Según los principios de jerarquía visual, ¿cuál es la función de este elemento en la interfaz?"

explicacion: |
  La jerarquía visual utiliza el contraste, el tamaño y el color para guiar el ojo del usuario hacia las acciones críticas (Call to Action), asegurando que el flujo de navegación sea intuitivo.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["layout", "patrones"]

variables:
  patron: uno_de([["Patrón en F", "Patrón en Z"], ["Patrón en Z", "Patrón en F"]])
  secuencia: uno_de([[["Encabezado", "Contenido principal", "Pie de página"], ["Logo", "Menú de navegación", "Contenido central"]])])
  # Nota: Como es ordenar, definimos la lista correcta directamente en la respuesta
  lista_correcta: ["Encabezado", "Contenido principal", "Pie de página"]

respuesta: ["Encabezado", "Contenido principal", "Pie de página"]
tipo: ordenar
opciones_explicitas: ["Pie de página", "Contenido principal", "Encabezado", "Logo", "Menú de navegación", "Contenido central"]

enunciado: "Al diseñar una página web con una estructura estándar de arriba hacia abajo, ordena los elementos según el flujo de lectura natural del usuario:"

explicacion: |
  La jerarquía vertical establece un orden de importancia basado en la posición, donde los elementos superiores suelen recibir la atención primaria antes de descender al cuerpo del contenido.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["color", "contraste"]

variables:
  datos: [["texto gris claro sobre fondo blanco", false], ["botón amarillo sobre fondo naranja", false], ["texto negro sobre fondo blanco", true]]
  idx: uno_de([0, 1, 2])
  detalle: datos[idx][0]
  resultado: datos[idx][1]

respuestas_validas: [resultado]
respuesta: resultado
tipo: completar
enunciado: "Si un diseñador utiliza {detalle} para presentar información crítica, ¿el contraste es suficiente para garantizar una buena jerarquía visual y legibilidad?"

explicacion: |
  Un contraste insuficiente entre el foreground (texto) y el background (fondo) rompe la jerarquía visual, haciendo que la información importante se pierda o sea difícil de procesar.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["ux", "atencion"]

variables:
  datos: [["banner", "promocional"], ["botón", "acción"], ["enlace", "secundario"]]
  idx: uno_de([0, 1, 2])
  objeto: datos[idx][0]
  respuesta_texto: datos[idx][1]

respuesta: respuesta_texto
tipo: completar
respuestas_validas: ["promocional", "acción", "secundario"]

enunciado: "Un elemento de tipo {objeto} suele tener una jerarquía visual de nivel ___."

explicacion: |
  La jerarquía visual clasifica los elementos según su importancia. Los banners suelen ser promocionales, los botones de acción y los enlaces suelen ser secundarios o de soporte.
```

```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "avanzado"
  tags: ["escala", "tipografia"]

variables:
  datos: [["grande", "mayor peso visual"], ["pequeño", "menor peso visual"]]
  idx: uno_de([0, 1])
  valor_escala: datos[idx][0]
  valor_respuesta: datos[idx][1]

respuesta: valor_respuesta
tipo: mc
opciones_explicitas: ["mayor peso visual", "menor peso visual", "mismo peso visual", "ningún peso visual"]

enunciado: "Si un elemento tipográfico tiene un tamaño {valor_escala}, este tendrá un ___."

explicacion: |
  El tamaño es uno de los pilares de la jerarquía visual. A mayor tamaño, mayor es el peso visual y, por lo tanto, mayor es la probabilidad de que el usuario lo procese primero.
```

## Sección: prototipado-wireframe-mockup-prototipo-interactivo (25 preguntas)

```
metadata:
  materia: "diseño"
  tema: "prototipado_fidelidad"
  nivel: "basico"
  tags: ["wireframe", "mockup", "prototipo"]

enunciado: "El esquema básico de una interfaz, que se centra en la estructura y la disposición de los elementos sin considerar el diseño visual, se denomina ___."

respuestas_validas: ["wireframe"]
tipo: completar

explicacion: |
  El wireframe es el esqueleto de la interfaz. Su objetivo es definir la jerarquía de la información y la arquitectura de la página sin distracciones estéticas.
```

```
metadata:
  materia: "diseño"
  tema: "prototipado_fidelidad"
  nivel: "basico"
  tags: ["mockup", "diseño_visual"]

variables:
  es_visual: true

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Verdadero"
tipo: mc

enunciado: "Un mockup es una representación de alta fidelidad que incluye colores, tipografías e imágenes, representando el diseño visual final."

explicacion: |
  Correcto. A diferencia del wireframe, el mockup se enfoca en la estética y la identidad visual de la interfaz.
```

```
metadata:
  materia: "diseño"
  tema: "prototipado_interactivo"
  nivel: "basico"
  tags: ["interactividad", "flujo"]

opciones_explicitas: ["Definir colores", "Definir la estructura", "Simular la navegación y el flujo"]
respuesta: "Simular la navegación y el flujo"
tipo: mc

enunciado: "¿Cuál es la función principal de un prototipo interactivo?"

explicacion: |
  El prototipo interactivo permite probar la experiencia de usuario (UX) mediante la simulación de clics, transiciones y flujos de navegación.
```

```
metadata:
  materia: "diseño"
  tema: "flujo_de_trabajo"
  nivel: "intermedio"
  tags: ["proceso", "etapas"]

opciones_explicitas: ["Wireframe", "Mockup", "Prototipo Interactivo"]
respuesta: ["Wireframe", "Mockup", "Prototipo Interactivo"]
tipo: ordenar

enunciado: "Ordena las etapas de diseño de una interfaz desde la fase más abstracta hasta la más funcional:"

explicacion: |
  El proceso estándar comienza con la estructura (Wireframe), sigue con la estética (Mockup) y culmina con la interactividad (Prototipo).
```

```
metadata:
  materia: "diseño"
  tema: "prototipado_fidelidad"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un boceto en blanco y negro de una app", "wireframe"],
    ["Una pantalla con colores y fotos finales", "mockup"]
  ]

enunciado: "Si estamos trabajando en {escenarios[escenario_idx][0]}, estamos creando un ___."

respuestas_validas: ["wireframe", "mockup"]
tipo: completar

explicacion: |
  Dependiendo de la fidelidad visual, el término cambia: wireframe para estructura y mockup para diseño visual.
```

```
metadata:
  materia: "diseño"
  tema: "prototipado_jerarquia"
  nivel: "basico"
  tags: ["ui", "ux", "workflow"]

tipo: ordenar
opciones_explicitas: ["Wireframe", "Mockup", "Prototipo Interactivo"]
respuesta: ["Wireframe", "Mockup", "Prototipo Interactivo"]

enunciado: "Para diseñar una aplicación móvil desde cero, un equipo de UX/UI debe seguir un flujo de fidelidad creciente. Ordena las etapas de menor a mayor fidelidad visual y funcional."

explicacion: |
  El proceso estándar comienza con un Wireframe (esquema de estructura), sigue con un Mockup (representación visual estática con color y tipografía) y finaliza con un Prototipo Interactivo (simulación de navegación).
```

```
metadata:
  materia: "diseño"
  tema: "mockup_definition"
  nivel: "basico"
  tags: ["mockup", "visual"]

tipo: mc
opciones_explicitas: ["Wireframe", "Mockup", "Prototipo Interactivo"]

enunciado: "Se ha creado una representación de la pantalla de inicio que incluye la paleta de colores corporativa, la tipografía final y las imágenes reales, pero no permite hacer clic en los botones para navegar. ¿Qué tipo de artefacto es?"

respuesta: "Mockup"

explicacion: |
  El Mockup se caracteriza por su alta fidelidad visual (colores, imágenes, estilos), pero es estático; no tiene la interactividad de un prototipo.
```

```
metadata:
  materia: "diseño"
  tema: "wireframe_concept"
  nivel: "basico"
  tags: ["wireframe", "estructura"]

tipo: completar
opciones_explicitas: ["Wireframe", "Mockup", "Prototipo Interactivo"]
respuestas_validas: ["Wireframe"]

enunciado: "Un diseño que se centra exclusivamente en la disposición de los elementos (layout) y la jerarquía de la información, utilizando cajas y líneas sin considerar el color o la estética, se denomina ___."

explicacion: |
  El Wireframe es un esqueleto de baja fidelidad que sirve para validar la arquitectura de la información antes de invertir tiempo en el diseño visual.
```

```
metadata:
  materia: "diseño"
  tema: "prototipo_interactivo"
  nivel: "basico"
  tags: ["interactividad", "UX"]

tipo: vf

enunciado: "Un prototipo interactivo es aquel que permite al usuario simular la experiencia de uso de la aplicación, permitiendo transiciones entre pantallas y flujos de navegación."

respuesta: falso

explicacion: |
  La afirmación es falsa porque lo descrito es la definición de un prototipo interactivo. (Nota: En este caso, la pregunta se plantea como una afirmación para evaluar si el usuario comprende que la descripción pertenece al prototipo, no al mockup o wireframe).
```

```
metadata:
  materia: "diseño"
  tema: "flujo_de_trabajo"
  nivel: "intermedio"
  tags: ["caso_practico", "workflow"]

variables:
  escenarios: [
    ["Wireframe", "Esquema de cajas grises"],
    ["Mockup", "Diseño visual de alta fidelidad"],
    ["Prototipo Interactivo", "Simulación de navegación"]
  ]
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["Wireframe", "Mockup", "Prototipo Interactivo"]

enunciado: "Un diseñador está trabajando en el escenario: {escenarios[idx][0]}. El objetivo de este entregable es: {escenarios[idx][1]}."

respuesta: {escenarios[idx][1]}

explicacion: |
  El sistema ha seleccionado un escenario aleatorio para evaluar si comprendes la relación entre el nombre del artefacto y su propósito funcional en el proceso de diseño.
```

```
metadata:
  materia: "diseño"
  tema: "prototipado_jerarquia"
  nivel: "basico"
  tags: ["wireframe", "estructura"]

respuesta: "estructura"
tipo: mc
opciones_explicitas: ["estética", "estructura", "interacción", "color"]

enunciado: "El objetivo principal de un wireframe es definir la ___ de la interfaz, sin preocuparse por la estética o el color."

explicacion: |
  El wireframe es un esquema de baja fidelidad que se centra en la disposición de los elementos y la jerarquía de la información, no en el diseño visual.
```

```
metadata:
  materia: "diseño"
  tema: "prototipado_diferencias"
  nivel: "intermedio"
  tags: ["mockup", "prototipo"]

variables:
  escenario: uno_de([["visual", "estático"], ["funcional", "interactivo"]])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["visual, estático", "funcional, interactivo", "estructural, esquemático", "animado, dinámico"]

enunciado: "Si un diseñador presenta un diseño con colores, tipografías y sombras finales, pero no se puede hacer clic en ningún elemento para navegar, está entregando un: {escenario[0]}."

explicacion: |
  Un mockup es una representación visual de alta fidelidad (estática), mientras que un prototipo interactivo permite simular la navegación y el flujo del usuario.
```

```
metadata:
  materia: "diseño"
  tema: "prototipado_interactividad"
  nivel: "basico"
  tags: ["prototipo", "interaccion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un prototipo interactivo tiene como función principal permitir la validación de flujos y la navegación entre pantallas?"

explicacion: |
  Correcto. La interactividad es la característica que distingue al prototipo de un mockup estático, permitiendo probar la experiencia de uso.
```

```
metadata:
  materia: "diseño"
  tema: "prototipado_flujo_trabajo"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta: ["Wireframe", "Mockup", "Prototipo"]
tipo: ordenar

opciones_explicitas: ["Wireframe", "Mockup", "Prototipo"]

enunciado: "Ordena las etapas de diseño de baja a alta fidelidad para un producto digital:"

explicacion: |
  El flujo estándar comienza con la estructura (Wireframe), sigue con la apariencia visual (Mockup) y finaliza con la simulación de uso (Prototipo).
```

```
metadata:
  materia: "diseño"
  tema: "prototipado_errores_comunes"
  nivel: "avanzado"
  tags: ["error", "mockup"]

variables:
  caso: uno_de([["A", "estético"], ["B", "funcional"]])

respuesta: caso[0
tipo: completar
respuestas_validas: ["estético", "funcional"]

enunciado: "Un error común es saltar directamente al mockup, enfocándose demasiado en lo ___ y descuidando la lógica de navegación que debería definirse en el wireframe."

explicacion: |
  Saltar la etapa de wireframing para ir directo al mockup suele llevar a errores de arquitectura de información, ya que se gasta mucho tiempo en detalles visuales de una estructura que aún no es sólida.
```

```
metadata:
  materia: "diseño"
  tema: "prototipado_fidelidad"
  nivel: "basico"
  tags: ["wireframe", "mockup", "prototipo"]

tipo: mc
opciones_explicitas: ["Baja fidelidad", "Media fidelidad", "Alta fidelidad", "Fidelidad extrema"]

enunciado: "Un wireframe se distingue de un mockup principalmente por su nivel de fidelidad, siendo este de tipo ___."

respuesta: "Baja fidelidad"

explicacion: |
  El wireframe es un esquema estructural básico (low-fidelity) que no incluye elementos visuales complejos, a diferencia del mockup que ya presenta el diseño visual.
```

```
metadata:
  materia: "diseño"
  tema: "prototipado_interaccion"
  nivel: "basico"
  tags: ["prototipo", "interactividad"]

variables:
  es_interactivo: true

tipo: completar
enunciado: "A diferencia de un mockup estático, un prototipo interactivo permite simular la navegación y el flujo de un usuario. ¿Es el prototipo interactivo un elemento que permite probar la usabilidad mediante la simulación de clics? {es_interactivo}"

respuesta: es_interactivo

explicacion: |
  Exacto. La principal distinción del prototipo interactivo es la capacidad de simular la interacción y el flujo de navegación, algo que el mockup (estático) no puede hacer.
```

```
metadata:
  materia: "diseño"
  tema: "flujo_de_trabajo"
  nivel: "intermedio"
  tags: ["proceso", "workflow"]

variables:
  secuencia: ["Wireframe", "Mockup", "Prototipo interactivo"]
  idx: uno_de([0, 1, 2])

tipo: ordenar

opciones_explicitas: ["Wireframe", "Mockup", "Prototipo interactivo"]

enunciado: "Ordena las etapas de diseño de una interfaz desde la definición estructural hasta la simulación funcional:"

respuesta: ["Wireframe", "Mockup", "Prototipo interactivo"]

explicacion: |
  El proceso estándar comienza con la estructura (Wireframe), sigue con la estética (Mockup) y finaliza con la interactividad (Prototipo).
```

```
metadata:
  materia: "diseño"
  tema: "mockup_vs_wireframe"
  nivel: "basico"
  tags: ["mockup", "estetica"]

tipo: completar

enunciado: "Mientras que el wireframe se centra en la arquitectura de la información, el ___ se enfoca en la identidad visual, incluyendo colores, tipografías e imágenes."

respuestas_validas: ["mockup"]

respuesta: "mockup"

explicacion: |
  El mockup es la representación visual (estética) del producto, mientras que el wireframe es el esqueleto funcional.
```

```
metadata:
  materia: "diseño"
  tema: "validacion_usuario"
  nivel: "avanzado"
  tags: ["testeo", "prototipo"]

variables:
  es_testeo_usabilidad: true

tipo: mc
opciones_explicitas: ["Validar la arquitectura de información", "Validar la estética de colores", "Validar la experiencia de navegación y flujo", "Validar la impresión de materiales"]

enunciado: "Si el objetivo principal es realizar un testeo de usabilidad para observar cómo un usuario navega entre pantallas, ¿qué artefacto es el más adecuado?"

respuesta: "Validar la experiencia de navegación y flujo"

explicacion: |
  Para testear la navegación y el flujo (usabilidad), se requiere la interactividad que solo ofrece el prototipo interactivo.
```

```
metadata:
  materia: "diseño"
  tema: "prototipado_jerarquia"
  nivel: "basico"
  tags: ["wireframe", "mockup", "prototipo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un esquema en blanco y negro para definir la estructura", "un diseño visual de alta fidelidad con colores y tipografía", "una simulación navegable con transiciones entre pantallas"], ["un dibujo de cajas para la arquitectura de información", "una representación visual detallada de la interfaz final", "un modelo funcional que permite interactuar con los botones"]]

respuesta: escenarios[escenario_idx][0
tipo: mc
opciones_explicitas: ["un esquema en blanco y negro para definir la estructura", "un diseño visual de alta fidelidad con colores y tipografía", "una simulación navegable con transiciones entre pantallas"]

enunciado: "Si un diseñador está trabajando únicamente en la disposición de los elementos y la jerarquía de la información sin preocuparse por el color o la estética, está creando un {escenarios[escenario_idx][0]}."

explicacion: |
  El wireframe es la etapa inicial de baja fidelidad que se enfoca en la estructura y funcionalidad, dejando de lado el estilo visual.
```

```
metadata:
  materia: "diseño"
  tema: "flujo_de_trabajo"
  nivel: "basico"
  tags: ["workflow", "mockup"]

variables:
  paso_idx: uno_de([0, 1])
  flujo: [["mockup", "wireframe"], ["prototipo", "mockup"]]

respuesta: flujo[paso_idx][0
tipo: completar
respuestas_validas: ["mockup", "prototipo"]

enunciado: "Si ya se ha finalizado un wireframe, el siguiente paso lógico para definir la identidad visual (colores, imágenes y tipografía) es crear un ___."

explicacion: |
  El mockup es el paso intermedio donde se aplica el diseño visual sobre la estructura definida previamente en el wireframe.
```

```
metadata:
  materia: "diseño"
  tema: "prototipado_interactivo"
  nivel: "basico"
  tags: ["interactividad", "prototipo"]

respuesta: falso
tipo: vf

enunciado: "Un mockup de alta fidelidad permite al usuario realizar flujos de navegación complejos y probar la lógica de la aplicación como si fuera el producto final."

explicacion: |
  Falso. El mockup es una representación estática (visual). La capacidad de navegación y respuesta a la interacción es característica del prototipo interactivo.
```

```
metadata:
  materia: "diseño"
  tema: "prototipado_jerarquia"
  nivel: "intermedio"
  tags: ["orden", "proceso"]

respuesta: ["Wireframe", "Mockup", "Prototipo Interactivo"]
tipo: ordenar
opciones_explicitas: ["Wireframe", "Mockup", "Prototipo Interactivo"]

enunciado: "Ordena las etapas de diseño de interfaces desde la fase de mayor abstracción (baja fidelidad) hasta la de mayor fidelidad funcional:"

explicacion: |
  El proceso estándar comienza con la estructura (wireframe), sigue con el aspecto visual (mockup) y culmina con la experiencia de uso (prototipo).
```

```
metadata:
  materia: "diseño"
  tema: "testeo_usuario"
  nivel: "intermedio"
  tags: ["testeo", "prototipo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["probar la navegación y flujos", "probar la paleta de colores"], ["validar la arquitectura de contenido", "validar la estética visual"]]

respuesta: casos[caso_idx][0
tipo: mc
opciones_explicitas: ["probar la navegación y flujos", "probar la estética visual"]

enunciado: "En un proceso de testeo con usuarios, si el objetivo principal es verificar si los botones llevan a la pantalla correcta, se debe utilizar un {casos[caso_idx][0]}."

explicacion: |
  Para validar flujos y navegación, es indispensable un prototipo interactivo que simule el comportamiento real de la interfaz.
```

## Sección: pruebas-de-usuario (25 preguntas)

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["usabilidad", "investigacion"]

respuesta: "observar"
tipo: "completar"
respuestas_validas: ["observar"]

enunciado: "En una prueba de usabilidad, el objetivo principal es ___ a usuarios reales mientras interactúan con un diseño para identificar problemas de uso."

explicacion: |
  La observación directa permite capturar comportamientos, frustraciones y flujos de trabajo que el usuario no siempre puede verbalizar en una encuesta.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["roles", "metodologia"]

opciones_explicitas: ["Interferir en cada paso del usuario", "Guiar la sesión sin sesgar las respuestas", "Corregir al usuario cuando comete un error", "Evaluar la estética del diseño"]
respuesta: "Guiar la sesión sin sesgar las respuestas"
tipo: "mc"

enunciado: "Durante una prueba de usuario, ¿cuál es la función principal del moderador?"

explicacion: |
  El moderador debe guiar la sesión y asegurar que se completen las tareas, pero nunca debe dar pistas o corregir al usuario, ya que esto invalidaría los resultados de usabilidad.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["sesgo", "metodologia"]

respuesta: falso
tipo: "vf"

enunciado: "Es verdadero que el investigador debe intervenir inmediatamente cuando el usuario se siente confundido para asegurar que la prueba sea eficiente."

explicacion: |
  Es falso. Si el investigador interviene para ayudar, no está midiendo la usabilidad real del diseño, sino la capacidad del investigador para resolver dudas.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["proceso", "metodologia"]

opciones_explicitas: ["Preparación, Ejecución, Análisis", "Análisis, Ejecución, Preparación", "Ejecución, Preparación, Análisis", "Preparación, Análisis, Ejecución"]
respuesta: ["Preparación, Ejecución, Análisis"]
tipo: "ordenar"

enunciado: "Ordena las fases cronológicas de un proceso de prueba de usuario:"

explicacion: |
  Primero se debe definir el escenario y las tareas (Preparación), luego se realiza la sesión con el usuario (Ejecución) y finalmente se procesan los datos hallados (Análisis).
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["usabilidad", "hallazgos"]

variables:
  escenario_idx: uno_de([0, 1])

datos:
  - ["El usuario no encuentra el botón de 'Finalizar compra' tras 30 segundos.", "problema"]
  - ["El usuario completa la tarea rápidamente sin dudas.", "exito"]

respuesta: "problema"
tipo: "mc"

opciones_explicitas: ["problema", "exito"]

enunciado: "Si en el escenario {datos[escenario_idx][0]} se detecta, estamos ante un: ___"

explicacion: |
  Detectar un 'problema' de usabilidad es el objetivo de la prueba: identificar fricciones para poder iterar el diseño y resolverlas en la siguiente versión.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["usabilidad", "observacion"]

respuesta: "identificar problemas de usabilidad"
tipo: completar
respuestas_validas: ["identificar problemas de usabilidad", "validar la estética del producto", "medir la velocidad de internet"]

enunciado: "El objetivo principal de realizar pruebas de usuario mediante la observación directa es ___."

explicacion: |
  La observación permite ver cómo interactúa el usuario real con el diseño, permitiendo detectar fricciones, errores de navegación y confusiones que el diseñador no pudo prever.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["metodologia", "usabilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El usuario intenta aplicar un cupón de descuento pero no encuentra el campo de texto.", "No encuentra el campo de texto"],
    ["El usuario intenta finalizar la compra pero el botón de 'Pagar' está oculto tras el teclado.", "El botón está oculto"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["No encuentra el campo de texto", "El botón está oculto", "El color de la fuente es muy claro", "La aplicación se cierra sola"]

enunciado: "Durante una prueba de usuario en una app de delivery, se observa el siguiente problema: {escenarios[escenario_idx][0]}"

explicacion: |
  En el escenario observado, el problema detectado es: {escenarios[escenario_idx][1]}. Esto es un error de usabilidad que debe corregirse en el diseño de la interfaz.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["metodologia", "teoria"]

respuesta: falso
tipo: vf

enunciado: "En una prueba de usuario de observación pura, el moderador debe intervenir y corregir al usuario cada vez que este cometa un error para no perder tiempo."

explicacion: |
  Falso. Si el moderador interviene, altera el comportamiento natural del usuario y no obtiene datos reales sobre la usabilidad del diseño original. Se debe observar el error para entender la causa.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

respuesta: ["Definir objetivos", "Reclutar usuarios", "Ejecutar la prueba", "Analizar resultados"]
tipo: ordenar
opciones_explicitas: ["Definir objetivos", "Reclutar usuarios", "Ejecutar la prueba", "Analizar resultados"]

enunciado: "Ordena cronológicamente las etapas necesarias para llevar a cabo un proceso de pruebas de usuario efectivo:"

explicacion: |
  Primero se definen qué queremos aprender (objetivos), luego se busca a las personas adecuadas (reclutar), se realiza la interacción (ejecutar) y finalmente se procesa la información (analizar).
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "avanzado"
  tags: ["metricas", "analisis"]

variables:
  total_usuarios: 10
  tareas_completadas: 7

respuesta: 0.7
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si durante una prueba de usabilidad con {total_usuarios} usuarios, se observa que solo {tareas_completadas} logran completar la tarea principal sin ayuda, ¿cuál es la tasa de éxito (en formato decimal)?"

pasos:
  - "Identificar el número de usuarios que completaron la tarea con éxito: {tareas_completadas}"
  - "Dividir el éxito entre el total de usuarios: {tareas_completadas} / {total_usuarios}"

explicacion: |
  La tasa de éxito se calcula como: (Tareas completadas con éxito) / (Total de intentos) = {tareas_completadas} / {total_usuarios} = 0.7.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["usabilidad", "metodologia"]

respuesta: "detectar problemas de usabilidad"
tipo: completar
respuestas_validas: ["detectar problemas de usabilidad", "mejorar la estética", "validar la identidad visual"]

enunciado: "El propósito principal de observar a usuarios reales interactuando con un diseño es ___."

explicacion: |
  La observación en pruebas de usabilidad busca identificar fricciones, errores o confusiones que el usuario experimenta, permitiendo iterar el diseño para resolver problemas reales de uso.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["sesgo", "metodologia"]

variables:
  es_sesgado: verdadero

respuesta: es_sesgado
tipo: completar
enunciado: "Si el facilitador de la prueba comienza a dar pistas o sugerencias sobre cómo usar la interfaz para que el usuario no se frustre, ¿está induciendo un sesgo en la prueba?"

explicacion: |
  Verdadero. Al intervenir o dar pistas, se altera el comportamiento natural del usuario, invalidando la observación de cómo interactuaría realmente con el sistema sin ayuda.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["roles", "metodologia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El facilitador interrumpe constantemente al usuario para explicar funciones.", "incorrecto"],
    ["El facilitador observa en silencio, tomando notas de las acciones del usuario.", "correcto"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["El facilitador interrumpe constantemente al usuario para explicar funciones.", "El facilitador observa en silencio, tomando notas de las acciones del usuario.", "El facilitador corrige al usuario cuando comete un error."]

enunciado: "En una prueba de usabilidad observacional, la actitud más adecuada del facilitador es: {escenarios[escenario_idx][0]}"

explicacion: |
  El facilitador debe ser un observador pasivo. Interrumpir o corregir el comportamiento del usuario impide ver los problemas de diseño que el usuario está intentando resolver por su cuenta.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["planificacion", "metodologia"]

respuesta: ["Definir objetivos", "Reclutar usuarios", "Preparar el escenario/tareas", "Ejecutar la prueba", "Analizar resultados"]
tipo: ordenar

opciones_explicitas: ["Definir objetivos", "Reclutar usuarios", "Preparar el escenario/tareas", "Ejecutar la prueba", "Analizar resultados"]

enunciado: "Ordena cronológicamente las etapas de un proceso de pruebas de usuario:"

explicacion: |
  No se puede reclutar sin saber qué se quiere medir (objetivos), ni ejecutar sin tener las tareas preparadas. El análisis es siempre la etapa final tras la recolección de datos.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "avanzado"
  tags: ["analisis", "errores"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["El usuario dice 'Me gusta este color', pero tarda 10 segundos en encontrar el botón de compra.", "error_interpretacion"],
    ["El usuario logra completar la tarea rápidamente y sin dudas.", "uso_exitoso"]
  ]

respuesta: casos[caso_idx][0
tipo: mc
opciones_explicitas: ["El usuario dice 'Me gusta este color', pero tarda 10 segundos en encontrar el botón de compra.", "El usuario logra completar la tarea rápidamente y sin dudas.", "El usuario pide ayuda constantemente al facilitador."]

enunciado: "Identifica cuál de estos comportamientos es un ejemplo de un error de interpretación común (confundir la opinión verbal con la usabilidad real): {casos[caso_idx][0]}"

explicacion: |
  Un error común es confiar en lo que el usuario *dice* ("me gusta", "es fácil") en lugar de observar lo que el usuario *hace* (tiempo de ejecución, errores de clic, frustración gestual). La acción suele ser más honesta que la palabra.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["metodologia", "usabilidad"]

respuesta: "observar el comportamiento real"
tipo: completar
respuestas_validas: ["observar el comportamiento real", "ver cómo interactúan"]

enunciado: "A diferencia de una encuesta, donde el usuario reporta lo que cree que hizo, una prueba de usuario se basa en ___."

explicacion: |
  Las encuestas dependen de la memoria y la percepción subjetiva del usuario, mientras que la observación directa permite detectar problemas de usabilidad que el usuario no es capaz de verbalizar.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["objetivo", "usabilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["validar si el flujo de compra es intuitivo", "detectar fricciones en la navegación"],
    ["confirmar si el color es agradable", "identificar errores en la arquitectura de información"]
  ]

respuesta: uno_de(escenarios[escenario_idx])
tipo: mc
opciones_explicitas: ["validar estética visual", "confirmar si el flujo de compra es intuitivo", "medir la velocidad de carga", "evaluar la preferencia de marca"]

enunciado: "En un contexto de pruebas de usabilidad con usuarios reales, el objetivo principal es {escenarios[escenario_idx]}."

explicacion: |
  Las pruebas de usuario buscan identificar problemas de interacción y flujo, no cuestiones puramente estéticas o de rendimiento técnico.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["sesgo", "metodologia"]

respuesta: falso

tipo: vf

enunciado: "¿Es correcto afirmar que, en una prueba de usuario, el facilitador debe guiar activamente al usuario para que complete la tarea sin errores para asegurar el éxito del diseño?"

explicacion: |
  Falso. Si el facilitador guía demasiado, se induce el error y se pierde la oportunidad de detectar problemas de usabilidad. El usuario debe intentar realizar la tarea de forma natural.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

respuesta: ["preparación de tareas", "ejecución de la prueba", "análisis de resultados"]
tipo: ordenar
opciones_explicitas: ["preparación de tareas", "ejecución de la prueba", "análisis de resultados"]

enunciado: "Ordene cronológicamente las etapas de un ciclo de prueba de usuario:"

explicacion: |
  Primero se definen los escenarios y tareas, luego se observa al usuario interactuando, y finalmente se procesan los datos para encontrar patrones de error.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "avanzado"
  tags: ["contexto", "metodologia"]

variables:
  tipo_test_idx: uno_de([0, 1])
  test_datos: [
    ["el test de guerrilla se realiza en entornos naturales de forma rápida", "el test de laboratorio ofrece un entorno controlado y detallado"],
    ["el test de guerrilla requiere un setup complejo", "el test de laboratorio es ideal para capturar micro-interacciones"]
  ]

respuesta: uno_de(test_datos[tipo_test_idx])
tipo: mc
opciones_explicitas: ["El test de guerrilla es más controlado que el de laboratorio", "El test de guerrilla se realiza en entornos naturales de forma rápida", "El test de laboratorio es siempre más barato", "No hay diferencia entre ambos"]

enunciado: "Considerando la diferencia de contexto, {test_datos[tipo_test_idx]}."

explicacion: |
  El test de guerrilla busca rapidez y realismo en el entorno del usuario, mientras que el laboratorio busca control para aislar variables específicas.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["usabilidad", "observacion"]

variables:
  escenario: uno_de([
    ["El usuario intenta comprar un libro pero el botón 'Pagar' está oculto tras el teclado en móviles.", "error_boton_oculto"],
    ["El usuario busca el carrito de compras pero el icono es una estrella en lugar de un carrito.", "error_iconografia"],
    ["El usuario intenta aplicar un cupón pero el campo de texto no permite escribir números.", "error_input_restriccion"]
  ])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["error_boton_oculto", "error_iconografia", "error_input_restriccion"]

enunciado: "Durante una prueba de usabilidad, se observa que {escenario[idx][0]}. ¿Qué tipo de problema de usabilidad se ha detectado?"

explicacion: |
  La observación directa permite identificar fallos de diseño que el usuario experimenta en tiempo real, como problemas de visibilidad, de lenguaje visual o de restricciones de entrada.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["metodologia", "verdad"]

respuesta: verdadero
tipo: vf

enunciado: "En una prueba de usuario de observación, el investigador debe intervenir y corregir al usuario inmediatamente cuando este comete un error para no frustrarlo."

explicacion: |
  Falso. El objetivo de la observación es ver cómo el usuario interactúa con el diseño de forma natural. Intervenir altera el comportamiento natural y el resultado de la prueba.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "intermedio"
  tags: ["analisis", "completar"]

variables:
  caso: uno_de([
    ["El usuario no encuentra el botón de 'Cerrar sesión' en el menú principal.", "navegacion"],
    ["El usuario no entiende qué significa el icono de un engranaje en la barra lateral.", "significado"],
    ["El usuario hace clic en un elemento que no es un botón porque parece uno.", "affordance"]
  ])

respuesta: caso[idx][1
tipo: completar
respuestas_validas: ["navegacion", "significado", "affordance"]

enunciado: "Al observar que {caso[idx][0]}, el problema detectado se clasifica como: ___."

explicacion: |
  Cada error observado permite categorizar el problema (navegación, semántica/significado o affordance) para priorizar las mejoras en el diseño.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "avanzado"
  tags: ["metodologia", "proceso"]

respuesta: ["Definir objetivos", "Reclutar participantes", "Ejecutar la sesión", "Analizar resultados"]
tipo: ordenar

opciones_explicitas: ["Definir objetivos", "Reclutar participantes", "Ejecutar la sesión", "Analizar resultados", "Diseñar prototipo"]

enunciado: "Ordena cronológicamente las etapas de un proceso de pruebas de usuario:"

explicacion: |
  Primero se define qué se quiere medir, luego se busca al usuario ideal, se realiza la prueba y finalmente se extraen conclusiones de lo observado.
```

```
metadata:
  materia: "diseño"
  tema: "pruebas_de_usuario"
  nivel: "basico"
  tags: ["etica", "rol"]

variables:
  rol_data: uno_de([
  ["El observador debe ser un facilitador neutral que no sesgue las respuestas.", "neutral"],
  ["El observador debe guiar al usuario paso a paso para asegurar el éxito.", "guia"]
])

respuesta: rol_data[idx][1
tipo: mc
opciones_explicitas: ["neutral", "guia"]

enunciado: "En una prueba de usuario de observación, el rol principal del investigador debe ser: ___."

explicacion: |
  El investigador debe mantener la neutralidad para evitar el sesgo de confirmación y permitir que el usuario actúe de forma espontánea.
```

## Sección: usabilidad-heuristicas-de-nielsen (25 preguntas)

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_de_nielsen"
  nivel: "basico"
  tags: ["definicion", "evaluacion"]

respuesta: "reglas generales"
tipo: completar
respuestas_validas: ["reglas generales", "guías de diseño", "estándares rígidos"]

enunciado: "Las heurísticas de Nielsen se definen como ___ que sirven para evaluar la usabilidad de una interfaz."

explicacion: |
  Las heurísticas no son reglas estrictas, sino principios o guías generales que ayudan a identificar problemas de usabilidad.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_de_nielsen"
  nivel: "basico"
  tags: ["visibilidad", "estado_sistema"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [
    ["Una barra de progreso que indica la carga de un archivo", "verdadero"],
    ["Un botón que no cambia de color al hacer clic", "falso"]
  ]

respuesta: escenarios[caso_idx][1
tipo: completar
enunciado: "En el siguiente caso: '{escenarios[caso_idx][0]}', ¿se está cumpliendo la heurística de 'Visibilidad del estado del sistema'?"

explicacion: |
  La visibilidad del estado del sistema requiere que el sistema mantenga informado al usuario sobre lo que está sucediendo, mediante retroalimentación apropiada y en un tiempo razonable.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_de_nielsen"
  nivel: "intermedio"
  tags: ["prevencion", "errores"]

respuesta: "Prevención de errores"
tipo: mc
opciones_explicitas: ["Prevención de errores", "Recuperación de errores", "Consistencia y estándares"]

enunciado: "Diseñar un sistema que impida que el usuario cometa un error (por ejemplo, deshabilitando un botón hasta que se completen los campos) es un ejemplo de:"

explicacion: |
  La heurística de 'Prevención de errores' busca evitar que el error ocurra, en lugar de solo mostrar un mensaje cuando ya ha sucedido.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_de_nielsen"
  nivel: "basico"
  tags: ["consistencia", "estándares"]

respuesta: "Consistencia y estándares"
tipo: mc
opciones_explicitas: ["Consistencia y estándares", "Control y libertad del usuario", "Relación entre el sistema y el mundo real"]

enunciado: "Si un usuario espera que el icono de una lupa sirva para buscar porque lo ha visto en otras aplicaciones, la interfaz está respetando la heurística de:"

explicacion: |
  La consistencia permite que el usuario aplique conocimientos previos de otras interfaces al sistema actual, reduciendo la carga cognitiva.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_de_nielsen"
  nivel: "intermedio"
  tags: ["evaluacion", "metodologia"]

respuesta: ["Identificar problemas", "Priorizar problemas", "Proponer soluciones"]
tipo: ordenar
opciones_explicitas: ["Identificar problemas", "Priorizar problemas", "Proponer soluciones"]

enunciado: "En un proceso de inspección heurística, el orden lógico de las acciones es:"

explicacion: |
  Primero se detectan los problemas de usabilidad, luego se clasifican según su severidad (priorización) y finalmente se sugieren mejoras.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["nielsen", "usabilidad", "feedback"]

enunciado: "Un usuario está subiendo un archivo de 500MB a una plataforma en la nube. La interfaz muestra una barra de progreso que avanza lentamente y un indicador de 'Subiendo...'. ¿Qué heurística de Nielsen se está aplicando correctamente en este caso?"

opciones_explicitas: ["Prevención de errores", "Visibilidad del estado del sistema", "Consistencia y estándares", "Control y libertad del usuario"]

respuesta: "Visibilidad del estado del sistema"
tipo: "mc"

explicacion: |
  La heurística de 'Visibilidad del estado del sistema' establece que el sistema debe mantener siempre informados a los usuarios sobre lo que está sucediendo, mediante feedback apropiado en un tiempo razonable. La barra de progreso es el ejemplo clásico.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["nielsen", "prevencion_errores"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El sistema pregunta '¿Estás seguro de que quieres borrar este archivo?' antes de ejecutar la acción.", "prevencion"],
    ["El sistema muestra un mensaje de error después de que el usuario hizo clic en un botón inexistente.", "error_post"]
  ]

enunciado: "Analizamos el siguiente caso: {escenarios[escenario_idx][0]}. Según la heurística de 'Prevención de errores', esta acción es: ___"

respuestas_validas: ["correcta", "incorrecta"]

respuesta: "correcta"
tipo: "completar"

explicacion: |
  La prevención de errores es preferible a un buen mensaje de error. Al pedir confirmación antes de una acción destructiva, el diseño evita que el error ocurra, cumpliendo con la heurística.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["nielsen", "consistencia"]

enunciado: "En una aplicación de e-commerce, el botón de 'Confirmar compra' es de color verde en la pantalla de carrito, pero en la pantalla de pago es de color rojo y está ubicado en la esquina superior izquierda. ¿Esta interfaz cumple con la heurística de 'Consistencia y estándares'?"

opciones_explicitas: [falso, verdadero]

respuesta: falso
tipo: "vf"

explicacion: |
  La consistencia asegura que los elementos con la misma función tengan la misma apariencia y comportamiento en toda la aplicación, evitando la confusión del usuario.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "avanzado"
  tags: ["nielsen", "carga_cognitiva"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Un buscador que muestra los términos de búsqueda recientes justo debajo del campo de texto.", "reconocimiento"],
    ["Un sistema que obliga al usuario a recordar un código de 8 dígitos que apareció hace 5 pantallas para completar un formulario.", "recuerdo"]
  ]

enunciado: "Se presenta el siguiente caso de uso: {casos[caso_idx][0]}. ¿Este diseño favorece el 'Reconocimiento antes que recuerdo'?"

opciones_explicitas: [verdadero, falso]

respuesta: verdadero
tipo: "vf"

explicacion: |
  Minimizar la carga de la memoria de trabajo del usuario mediante pistas visuales o historial de acciones es clave para la usabilidad. El reconocimiento es más fácil y rápido que el recuerdo.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["nielsen", "control_usuario"]

enunciado: "Un usuario comete un error al llenar un formulario de registro y, tras presionar 'Enviar', la página se recarga borrando todos los campos. Para cumplir con la heurística de 'Ayuda a los usuarios a reconocer, diagnosticar y recuperarse de errores', el sistema debería seguir este orden lógico de acción:"

opciones_explicitas: ["1. Mostrar un mensaje de error claro", "2. Indicar qué campos están mal", "3. Permitir la corrección sin perder los datos ya ingresados"]

respuesta: ["1. Mostrar un mensaje de error claro", "2. Indicar qué campos están mal", "3. Permitir la corrección sin perder los datos ya ingresados"]
tipo: "ordenar"

explicacion: |
  La recuperación de errores debe ser sencilla. Un buen diseño no solo dice que algo salió mal, sino que señala exactamente dónde está el error y permite al usuario corregirlo sin tener que empezar de cero.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["consistencia", "nielsen", "usabilidad"]

respuesta: "consistencia"
tipo: completar
respuestas_validas: ["consistencia"]

enunciado: "Cuando una interfaz utiliza elementos que no siguen las convenciones de la plataforma o que cambian su comportamiento en diferentes secciones, se está violando la heurística de ___."

explicacion: |
  La consistencia asegura que el usuario no tenga que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["visibilidad", "feedback", "nielsen"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un usuario hace clic en 'Subir archivo' y no aparece ningún indicador de carga.", "falso"],
    ["Una barra de progreso muestra el avance de una descarga de software.", "verdadero"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: completar
enunciado: "En el siguiente caso: '{escenarios[escenario_idx][0]}', ¿se está cumpliendo la heurística de 'Visibilidad del estado del sistema'?"

pasos:
  - "Identificar si existe feedback inmediato sobre la acción realizada."
  - "Evaluar si el usuario sabe qué está pasando en el sistema."

explicacion: |
  La visibilidad del estado del sistema requiere que el sistema mantenga informados a los usuarios sobre lo que está ocurriendo, mediante feedback apropiado y en un tiempo razonable.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "avanzado"
  tags: ["prevencion_errores", "nielsen"]

opciones_explicitas: ["Prevenir el error antes de que ocurra", "Informar sobre el error una vez cometido", "Ambas son correctas y complementarias"]
respuesta: uno_de(["Prevenir el error antes de que ocurra", "Informar sobre el error una vez cometido", "Ambas son correctas y complementarias"])
tipo: mc

enunciado: "Según Nielsen, la heurística de 'Prevención de errores' es más efectiva cuando se logra: "

explicacion: |
  Aunque los mensajes de error son necesarios, la prevención (como deshabilitar un botón hasta que el formulario esté completo) es una práctica de diseño superior para evitar la frustración del usuario.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["control", "libertad", "nielsen"]

opciones_explicitas: ["Botón de cancelar", "Botón de aceptar", "Botón de ayuda", "Botón de cerrar sesión"]
respuesta: "Botón de cancelar"
tipo: mc

enunciado: "Para cumplir con la heurística de 'Control y libertad del usuario', ante una acción accidental, la interfaz debe ofrecer una salida clara, como por ejemplo un: "

explicacion: |
  Los usuarios a menudo eligen funciones por error y necesitan una "salida de emergencia" claramente marcada para abandonar el estado no deseado sin tener que pasar por un proceso largo.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["memoria", "reconocimiento", "nielsen"]

respuesta: 1
tipo: mc
opciones_explicitas: ["Aumentar la carga cognitiva del usuario", "Minimizar la carga cognitiva del usuario", "Hacer que el usuario aprenda más rápido"]

enunciado: "La heurística de 'Reconocimiento antes que recuerdo' busca que la información necesaria para realizar una acción esté visible o sea fácilmente recuperable, con el fin de: "

explicacion: |
  El cerebro humano es mucho mejor reconociendo patrones visuales que recordando información de memoria. Reducir la carga cognitiva mejora la eficiencia y la satisfacción.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["consistencia", "estándares", "nielsen"]

enunciado: "La heurística de 'Consistencia y estándares' se diferencia de la 'Consistencia interna' en que la primera se refiere a seguir convenciones externas (como el icono de un carrito para compras), mientras que la segunda se refiere a que ___ dentro de la misma aplicación."

pasos:
  - "Identificar la diferencia entre normas externas y coherencia interna."

respuestas_validas:
  - "los elementos se comporten de la misma manera"

respuesta: "los elementos se comporten de la misma manera"
tipo: completar

explicacion: |
  La consistencia externa asegura que el usuario no tenga que aprender nuevas reglas al usar tu app (usar patrones conocidos), mientras que la consistencia interna asegura que si un botón de 'Aceptar' es azul en una pantalla, no sea rojo en otra.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["control", "libertad", "nielsen"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[ "El usuario hace clic en un enlace por error y necesita volver atrás.", "El usuario está completando un formulario largo y quiere borrar un campo sin reiniciar todo.", "El usuario borró un archivo importante por accidente." ]]

enunciado: "Considerando el escenario: {escenarios[escenario_idx]}, la heurística de 'Control y libertad del usuario' se aplica mediante la provisión de una función de ___."

opciones_explicitas:
  - "Deshacer"
  - "Confirmación de salida"
  - "Carga automática"

respuesta: "Deshacer"
tipo: mc

explicacion: |
  La libertad del usuario requiere que existan "salidas de emergencia" claras, como el botón de deshacer (undo) o el botón de atrás, para que el usuario pueda revertir acciones involuntarias.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "avanzado"
  tags: ["prevencion_errores", "mensajes_error", "nielsen"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [[ "Mostrar una advertencia antes de que el usuario borre una cuenta.", "Mostrar un mensaje de 'Contraseña incorrecta' después de intentar loguearse." ]]

enunciado: "Si la interfaz presenta el caso: {casos[caso_idx]}, está aplicando la heurística de 'Prevención de errores'. Si en su lugar presenta un mensaje explicativo tras un fallo, está aplicando la heurística de: ___."

opciones_explicitas:
  - "Ayuda de usuario"
  - "Ayuda para reconocer, diagnosticar y recuperarse de errores"
  - "Visibilidad del estado del sistema"

respuesta: "Ayuda para reconocer, diagnosticar y recuperarse de errores"
tipo: mc

explicacion: |
  La prevención de errores busca evitar que el error ocurra (ej. un diálogo de confirmación). La otra heurística se activa cuando el error ya ocurrió, proporcionando un mensaje claro para solucionarlo.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["estado_sistema", "feedback", "nielsen"]

enunciado: "¿Es correcto afirmar que la 'Visibilidad del estado del sistema' se distingue de la 'Ayuda y documentación' porque la primera se enfoca en el feedback inmediato y la segunda en la resolución de dudas complejas?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La visibilidad del estado (como una barra de carga) es feedback constante sobre lo que está pasando, mientras que la ayuda es un recurso de consulta para problemas específicos.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["reconocimiento", "recuerdo", "carga_cognitiva", "nielsen"]

enunciado: "Para minimizar la carga cognitiva, la heurística de 'Reconocimiento antes que recuerdo' propone que el usuario debe ___ en lugar de tener que ___ la información de una pantalla anterior."

pasos:
  - "Diferenciar entre procesos cognitivos de reconocimiento y memoria."

respuestas_validas:
  - "reconocer elementos visuales"
  - "recordar datos"

respuesta: "reconocer elementos visuales"
tipo: completar

explicacion: |
  Es más fácil reconocer un icono o una opción en una lista (reconocimiento) que tener que memorizar un comando o un dato para escribirlo después (recuerdo).
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["nielsen", "heuristicas", "visibilidad"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["Un usuario sube un archivo pesado y no aparece ningún indicador de carga.", "Visibilidad del estado del sistema"], ["Un usuario borra un correo y el elemento desaparece instantáneamente sin aviso.", "Visibilidad del estado del sistema"]]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["Visibilidad del estado del sistema", "Consistencia y estándares", "Prevención de errores", "Control y libertad del usuario"]

enunciado: "En el siguiente caso: '{escenarios[escenario_idx][0]}' ¿Qué heurística de Nielsen se está incumpliendo?"

explicacion: |
  La heurística de 'Visibilidad del estado del sistema' exige que el sistema mantenga siempre informados a los usuarios sobre lo que está sucediendo, mediante retroalimentación apropiada en un tiempo razonable.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["nielsen", "prevencion_errores"]

variables:
  caso_idx: uno_de([0,1])
  casos: [["El sistema permite que un usuario haga clic en 'Eliminar cuenta' sin confirmar la acción.", "prevencion"], ["El sistema muestra un mensaje de error genérico que no explica cómo solucionar el problema.", "error"]]

respuesta: casos[caso_idx][1
tipo: completar
respuestas_validas: ["prevencion", "error"]

enunciado: "Analiza el siguiente escenario: '{casos[caso_idx][0]}'. El diseño falla en la heurística de ___."

explicacion: |
  Una buena prevención de errores implica diseñar la interfaz de modo que se eviten errores comunes antes de que ocurran, como pedir una confirmación antes de una acción destructiva.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "basico"
  tags: ["nielsen", "consistencia"]

variables:
  elemento_idx: uno_de([0,1])
  elementos: [["El botón de 'Aceptar' es azul en una pantalla y rojo en la siguiente.", "Consistencia y estándares"], ["El icono de una lupa se usa para 'Buscar' en todo el sitio.", "Consistencia y estándares"]]

respuesta: elementos[elemento_idx][1
tipo: mc
opciones_explicitas: ["Consistencia y estándares", "Relación entre el sistema y el mundo real", "Reconocimiento antes que recuerdo", "Estética y diseño minimalista"]

enunciado: "Si en una aplicación '{elementos[elemento_idx][0]}', estamos violando la heurística de: "

explicacion: |
  La consistencia asegura que el usuario no tenga que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "intermedio"
  tags: ["nielsen", "control_libertad"]

variables:
  accion_idx: uno_de([0,1])
  acciones: [["El usuario cometió un error y necesita deshacer la última acción.", "true"], ["El usuario quiere salir de un modo de edición sin guardar cambios.", "true"]]

respuesta: acciones[accion_idx][0
tipo: completar
enunciado: "Si un usuario necesita poder 'deshacer' o 'rehacer' acciones para corregir errores accidentales, ¿se está cumpliendo la heurística de 'Control y libertad del usuario'? "

explicacion: |
  Los usuarios a menudo eligen funciones del sistema por error. Deben tener una "salida de emergencia" claramente marcada para abandonar el estado no deseado sin tener que pasar por un proceso largo.
```

```
metadata:
  materia: "diseño"
  tema: "usabilidad_heuristicas_nielsen"
  nivel: "avanzado"
  tags: ["nielsen", "ayuda_documentacion"]

variables:
  contexto_idx: uno_de([0,1])
  contextos: [["Un usuario experto busca comandos rápidos mediante atajos de teclado.", "Ayuda y documentación"], ["Un usuario nuevo no sabe cómo realizar una tarea compleja y busca un manual.", "Ayuda y documentación"]]

respuesta: contextos[contexto_idx][1
tipo: ordenar
opciones_explicitas: ["Ayuda y documentación"]

enunciado: "Para que un sistema sea usable, cuando el usuario no puede recordar cómo realizar una tarea, debe poder consultar la ___."

explicacion: |
  Aunque es lo ideal que el sistema sea intuitivo, siempre debe haber información disponible (documentación o ayuda) que sea fácil de buscar y enfocada en la tarea del usuario.
```
