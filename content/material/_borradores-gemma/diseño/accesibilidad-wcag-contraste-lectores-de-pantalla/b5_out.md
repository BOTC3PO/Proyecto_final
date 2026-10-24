### 1 — Contraste de color WCAG AA
```
metadata:
  materia: "diseño"
  tema: "accesibilidad_color"
  nivel: "intermedio"
  tags: ["wcag", "contraste", "diseño_ui"]

variables:
  escenario: uno_de([["Texto gris claro sobre fondo blanco", "4.5"], ["Texto azul sobre fondo negro", "7.0"]])
  idx: uno_de([0, 1])

enunciado: "Un diseñador debe cumplir con el nivel WCAG AA para texto normal. Según el escenario seleccionado, el ratio de contraste es {escenario[idx][0]}. ¿Es este valor suficiente para cumplir la pauta de contraste mínimo de 4.5:1? (Responde con verdadero o falso)"

respuesta: escenario[idx][1] == "4.5" || escenario[idx][1] == "7.0"

tipo: vf

explicacion: |
  Para cumplir con el nivel AA de las pautas WCAG, el texto normal debe tener un ratio de contraste de al menos 4.5:1. El valor {escenario[idx][0]} cumple con este requisito.
```

### 2 — Lectores de pantalla y navegación
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

### 3 — Orden de lectura en CSS
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

### 4 — Significado del color
```
metadata:
  materia: "diseño"
  tema: "accesibilidad_color"
  nivel: "basico"
  tags: ["color", "discapacidad_visual"]

variables:
  caso: uno_de([["Un campo de formulario con borde rojo sin icono", "incorrecto"], ["Un campo con borde rojo y un icono de exclamación", "correcto"]])
  idx: uno_de([0, 1])

enunciado: "En el caso de: {caso[idx][0]}, la implementación es considerada {caso[idx][1]} según las pautas de accesibilidad para personas con daltonismo."

respuestas_validas: ["correcto", "incorrecto"]

respuesta: caso[idx][1]

tipo: completar

explicacion: |
  No se debe usar el color como el único medio para transmitir información o indicar un error, ya que las personas con deficiencias en la percepción del color no podrán identificarlo.
```

### 5 — Contraste para texto grande
```
metadata:
  materia: "diseño"
  tema: "accesibilidad_color"
  nivel: "intermedio"
  tags: ["wcag", "contraste", "diseño_ui"]

variables:
  escenario: uno_de([["Texto de 24pt (grande)", "3.0"], ["Texto de 12pt (normal)", "4.5"]])
  idx: uno_de([0, 1])

enunciado: "Para el nivel WCAG AA, el ratio de contraste mínimo para texto de tamaño grande (al menos 18pt o 14pt en negrita) es de {escenario[idx][0]}. ¿Es este valor suficiente para cumplir la pauta?"

opciones_explicitas: ["verdadero", "falso"]

respuesta: escenario[idx][1] == "3.0" || escenario[idx][1] == "4.5"

tipo: mc

explicacion: |
  El estándar WCAG AA exige un ratio de 4.5:1 para texto normal, pero permite un ratio menor de 3.0:1 para texto de tamaño grande o negrita.
```