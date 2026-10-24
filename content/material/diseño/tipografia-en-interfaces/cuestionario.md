# UX y diseño — Tipografía en interfaces (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Para qué sirve

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

enunciado: "¿Qué función cumple la tipografía en una interfaz?"
tipo: mc
opciones_explicitas:
  - "Define legibilidad, jerarquía y tono"
  - "Solo decora"
  - "Reemplaza al color"
respuesta: "Define legibilidad, jerarquía y tono"

explicacion: |
  Gran parte de la interfaz es texto.
```

### 2 — Serif

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Una tipografía serif es la que..."
tipo: mc
opciones_explicitas:
  - "Tiene remates en los extremos de los trazos"
  - "No tiene remates"
  - "Tiene todos los caracteres del mismo ancho"
respuesta: "Tiene remates en los extremos de los trazos"

explicacion: |
  Sans serif es la que no los tiene.
```

### 3 — Monoespaciada

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Una tipografía monoespaciada se caracteriza por..."
tipo: mc
opciones_explicitas:
  - "Todos los caracteres ocupan el mismo ancho"
  - "Ser siempre cursiva"
  - "No tener mayúsculas"
respuesta: "Todos los caracteres ocupan el mismo ancho"

explicacion: |
  Es típica del código.
```

### 4 — Cuántas familias

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Conviene usar la mayor cantidad posible de familias tipográficas para dar variedad."

explicacion: |
  Demasiadas generan ruido; se usan una o dos y se varía el peso.
```

### 5 — Familia tipográfica

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Una familia tipográfica es..."
tipo: mc
opciones_explicitas:
  - "Un conjunto de variantes de un mismo diseño de letra"
  - "Una carpeta de fuentes distintas"
  - "El nombre de quien diseñó la fuente"
respuesta: "Un conjunto de variantes de un mismo diseño de letra"

explicacion: |
  Incluye normal, cursiva, negrita y otros pesos.
```

### 6 — Tamaño base

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

tipo: completar
enunciado: "En la web, el tamaño de texto de cuerpo habitual es de ___ píxeles."
respuestas_validas:
  - "16"

explicacion: |
  Se usa como punto de partida de la escala.
```

### 7 — Escala

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Una escala tipográfica es..."
tipo: mc
opciones_explicitas:
  - "Una serie de tamaños con una relación proporcional"
  - "Una regla para medir pantallas"
  - "El orden alfabético de las fuentes"
respuesta: "Una serie de tamaños con una relación proporcional"

explicacion: |
  Evita decidir tamaños al azar.
```

### 8 — Escala 1,25

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

variables:
  nivel: random(1, 4)

respuesta: redondear(16 * 1.25 ^ nivel, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "Una escala parte de 16 px y multiplica por 1,25 en cada nivel. ¿Qué tamaño tiene el nivel {nivel}? (en px, un decimal)"

pasos:
  - "16 × 1,25 elevado a {nivel}"

explicacion: |
  Cada nivel multiplica el anterior por la razón de la escala.
```

### 9 — Escala 1,2

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

variables:
  nivel: random(1, 3)

respuesta: redondear(18 * 1.2 ^ nivel, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "Una escala parte de 18 px y multiplica por 1,2 en cada nivel. ¿Qué tamaño tiene el nivel {nivel}? (en px, un decimal)"

pasos:
  - "18 × 1,2 elevado a {nivel}"

explicacion: |
  Es un crecimiento geométrico.
```

### 10 — Interlineado

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Un interlineado razonable para párrafos suele estar cerca de..."
tipo: mc
opciones_explicitas:
  - "1,4 a 1,6 veces el tamaño del texto"
  - "0,5 veces el tamaño"
  - "3 veces el tamaño"
respuesta: "1,4 a 1,6 veces el tamaño del texto"

explicacion: |
  Muy apretado cansa y muy abierto rompe el ritmo.
```

### 11 — Largo de línea

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Como referencia, un largo de línea cómodo ronda..."
tipo: mc
opciones_explicitas:
  - "45 a 75 caracteres"
  - "10 a 20 caracteres"
  - "150 a 200 caracteres"
respuesta: "45 a 75 caracteres"

explicacion: |
  Las líneas muy largas hacen perder el renglón.
```

### 12 — Justificado

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "El texto justificado puede generar espacios irregulares entre palabras."

explicacion: |
  Por eso suele preferirse la alineación a la izquierda.
```

### 13 — Alineación

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

enunciado: "En un idioma que se escribe de izquierda a derecha, el texto más fácil de leer es el alineado..."
tipo: mc
opciones_explicitas:
  - "A la izquierda"
  - "Al centro"
  - "A la derecha"
respuesta: "A la izquierda"

explicacion: |
  El centrado sirve solo para textos cortos.
```

### 14 — Mayúsculas

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Un párrafo largo escrito todo en mayúsculas es más legible que uno en minúsculas."

explicacion: |
  Las mayúsculas sostenidas se leen más lento.
```

### 15 — Peso fino

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Un peso de letra muy fino sobre fondo claro puede..."
tipo: mc
opciones_explicitas:
  - "Perderse y dificultar la lectura"
  - "Mejorar siempre el contraste"
  - "Ser obligatorio por norma"
respuesta: "Perderse y dificultar la lectura"

explicacion: |
  El peso influye en la legibilidad.
```

### 16 — Unidades relativas

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "¿Qué ventaja tienen las unidades relativas de tamaño de texto?"
tipo: mc
opciones_explicitas:
  - "Respetan la configuración de tamaño de cada usuario"
  - "Hacen el texto siempre más chico"
  - "Evitan tener que elegir tamaño"
respuesta: "Respetan la configuración de tamaño de cada usuario"

explicacion: |
  Las unidades fijas la ignoran.
```

### 17 — Texto en imagen

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "¿Por qué conviene no incrustar texto en imágenes?"
tipo: mc
opciones_explicitas:
  - "No escala y los lectores de pantalla no lo leen"
  - "Ocupa menos espacio"
  - "Siempre se ve mejor"
respuesta: "No escala y los lectores de pantalla no lo leen"

explicacion: |
  Rompe la accesibilidad.
```

### 18 — Jerarquía

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "El tamaño y el peso de la letra son herramientas para crear jerarquía visual."

explicacion: |
  Un título grande y en negrita se percibe como más importante.
```

### 19 — Cursiva

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "La cursiva en bloques de texto largos..."
tipo: mc
opciones_explicitas:
  - "Dificulta la lectura"
  - "Mejora la accesibilidad"
  - "Es obligatoria"
respuesta: "Dificulta la lectura"

explicacion: |
  Se reserva para énfasis puntuales.
```

### 20 — Código

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Para mostrar código fuente en una página suele usarse una tipografía..."
tipo: mc
opciones_explicitas:
  - "Monoespaciada"
  - "Cursiva"
  - "Decorativa"
respuesta: "Monoespaciada"

explicacion: |
  Alinea los caracteres.
```

### 21 — Sans serif absoluta

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Existe una regla absoluta que prohíbe usar serif en pantalla."

explicacion: |
  Importan el diseño concreto, el tamaño y la resolución.
```

### 22 — Consistencia

```
metadata:
  materia: "diseño"
  tema: "tipografia_en_interfaces"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Una escala tipográfica aporta sobre todo..."
tipo: mc
opciones_explicitas:
  - "Consistencia y jerarquía clara"
  - "Más colores"
  - "Menos texto"
respuesta: "Consistencia y jerarquía clara"

explicacion: |
  Los saltos de tamaño son proporcionales.
```
