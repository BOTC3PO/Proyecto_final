### 1 — Contraste de texto normal
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

### 2 — Lectores de pantalla y semántica
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

### 3 — Orden de navegación lógica
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

### 4 — Contraste en elementos no textuales
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

### 5 — Color como único medio de información
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