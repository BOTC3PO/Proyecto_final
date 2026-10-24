### 1 — Contraste de color WCAG
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

### 2 — Lectores de pantalla vs. Subtítulos
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

### 3 — Texto Alternativo vs. Descripción Larga
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

### 4 — Jerarquía de encabezados
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

### 5 — Contraste de color: Texto vs. Componentes
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