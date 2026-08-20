### 1 — Definición de WCAG
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

respuesta: "A, AA, AAA"
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