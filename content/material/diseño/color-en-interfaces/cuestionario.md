# UX y diseño — Color en interfaces (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Función del color

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

enunciado: "En una interfaz, el color sirve para..."
tipo: mc
opciones_explicitas:
  - "Dirigir la atención, agrupar y marcar estados"
  - "Solo decorar"
  - "Reemplazar al texto"
respuesta: "Dirigir la atención, agrupar y marcar estados"

explicacion: |
  Comunica además de embellecer.
```

### 2 — Neutros

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

enunciado: "En una paleta de interfaz, los colores que más se usan son..."
tipo: mc
opciones_explicitas:
  - "Los neutros"
  - "Los semánticos"
  - "Los de acento"
respuesta: "Los neutros"

explicacion: |
  Fondos, textos y bordes.
```

### 3 — Semánticos

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Los colores semánticos sirven para..."
tipo: mc
opciones_explicitas:
  - "Comunicar estados como éxito o error"
  - "Decorar el logotipo"
  - "Elegir la tipografía"
respuesta: "Comunicar estados como éxito o error"

explicacion: |
  Se apoyan en convenciones.
```

### 4 — Todo de color

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Si todos los elementos son de colores llamativos, la jerarquía visual mejora."

explicacion: |
  Si todo es de color, nada destaca.
```

### 5 — Acento

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El color de acento conviene reservarlo para..."
tipo: mc
opciones_explicitas:
  - "Lo que más importa, como la acción principal"
  - "Todos los textos"
  - "Los fondos de página"
respuesta: "Lo que más importa, como la acción principal"

explicacion: |
  Así conserva su fuerza.
```

### 6 — Cultura

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Los significados de los colores son universales y no cambian de cultura en cultura."

explicacion: |
  Dependen de la cultura y del contexto.
```

### 7 — Contraste texto normal

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

enunciado: "El contraste mínimo que piden las pautas WCAG (nivel AA) para texto normal es..."
tipo: mc
opciones_explicitas:
  - "4,5 a 1"
  - "2 a 1"
  - "10 a 1"
respuesta: "4,5 a 1"

explicacion: |
  El texto grande requiere 3 a 1.
```

### 8 — Contraste texto grande

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El contraste mínimo WCAG AA para texto grande es..."
tipo: mc
opciones_explicitas:
  - "3 a 1"
  - "4,5 a 1"
  - "1 a 1"
respuesta: "3 a 1"

explicacion: |
  También se aplica a componentes de interfaz.
```

### 9 — Comparar razón

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

variables:
  c: uno_de([2.5, 3.5, 4.0, 4.5, 5.2, 6.0])

respuesta: min(1, floor(c / 4.5))
tipo: input
tolerancia_abs: 0

enunciado: "Un texto normal tiene un contraste de {c} a 1 con su fondo. ¿Cumple el mínimo de 4,5 a 1? (escribí 1 si cumple, 0 si no)"

pasos:
  - "Comparar {c} con 4,5"

explicacion: |
  Se compara la razón con el umbral de 4,5.
```

### 10 — Daltonismo

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El daltonismo más frecuente dificulta distinguir principalmente..."
tipo: mc
opciones_explicitas:
  - "Rojo y verde"
  - "Azul y celeste"
  - "Blanco y negro"
respuesta: "Rojo y verde"

explicacion: |
  Afecta a una proporción importante de varones.
```

### 11 — Proporción

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Aproximadamente 1 de cada 12 varones tiene alguna forma de daltonismo."

explicacion: |
  Es un orden de magnitud habitual en la bibliografía.
```

### 12 — No solo color

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Para señalar un error sin depender solo del color conviene..."
tipo: mc
opciones_explicitas:
  - "Sumar un ícono o un texto"
  - "Usar un rojo más fuerte"
  - "Ocultar el mensaje"
respuesta: "Sumar un ícono o un texto"

explicacion: |
  Así lo percibe quien no distingue el color.
```

### 13 — Escala de grises

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Una forma de comprobar que no dependés solo del color es..."
tipo: mc
opciones_explicitas:
  - "Ver la pantalla en escala de grises"
  - "Imprimirla en color"
  - "Aumentar el brillo"
respuesta: "Ver la pantalla en escala de grises"

explicacion: |
  Si la información se entiende, no depende solo del color.
```

### 14 — Modo oscuro invertir

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "El modo oscuro consiste simplemente en invertir todos los colores."

explicacion: |
  Hay que revisar contrastes y ajustar colores saturados.
```

### 15 — Negro puro

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "En modo oscuro, el blanco puro sobre negro puro..."
tipo: mc
opciones_explicitas:
  - "Puede cansar la vista"
  - "Siempre es lo ideal"
  - "Es obligatorio por norma"
respuesta: "Puede cansar la vista"

explicacion: |
  Se suelen usar grises muy oscuros y claros.
```

### 16 — Variaciones

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Las variaciones de un color (más claros y oscuros) se usan para..."
tipo: mc
opciones_explicitas:
  - "Fondos, bordes y estados del cursor"
  - "Cambiar el idioma"
  - "Elegir la fuente"
respuesta: "Fondos, bordes y estados del cursor"

explicacion: |
  Amplían la paleta sin sumar colores nuevos.
```

### 17 — Estados

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Un botón desactivado suele mostrarse con..."
tipo: mc
opciones_explicitas:
  - "Menor contraste o tono apagado, sin ser la única señal"
  - "El mismo aspecto que uno activo"
  - "Un parpadeo"
respuesta: "Menor contraste o tono apagado, sin ser la única señal"

explicacion: |
  Otras señales ayudan a entenderlo.
```

### 18 — Primario

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

tipo: completar
enunciado: "El color que identifica a la marca y se usa en las acciones principales es el color ___."
respuestas_validas:
  - "primario"

explicacion: |
  Se complementa con neutros y semánticos.
```

### 19 — Entorno

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "La percepción del color cambia con la pantalla y el ambiente de uso."

explicacion: |
  Por eso hay que dejar margen de contraste.
```

### 20 — Gráficos

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "En un gráfico con varias series, ¿qué ayuda a quien no distingue colores?"
tipo: mc
opciones_explicitas:
  - "Sumar patrones o etiquetas directas"
  - "Usar más tonos parecidos"
  - "Quitar la leyenda"
respuesta: "Sumar patrones o etiquetas directas"

explicacion: |
  No depender solo del color.
```

### 21 — Contraste componentes

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Los bordes de los campos y los botones también necesitan un contraste mínimo de 3 a 1 con lo que los rodea."

explicacion: |
  WCAG lo pide para componentes de interfaz.
```

### 22 — Nombrar por función

```
metadata:
  materia: "diseño"
  tema: "color_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "En un sistema de diseño conviene nombrar los colores por..."
tipo: mc
opciones_explicitas:
  - "Su función (por ejemplo, error)"
  - "Su valor hexadecimal"
  - "Su fecha de creación"
respuesta: "Su función (por ejemplo, error)"

explicacion: |
  Permite cambiar el valor sin romper el significado.
```
