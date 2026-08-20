# Lengua — Paratextos (cuestionario, 22 preguntas VBLang)

> Tema: `lengua/paratextos`. Ver `teoria.md` en esta misma carpeta. Escrito a mano (Claude), cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "guiar la interpretación y facilitar la comprensión"
tipo: mc
opciones_explicitas: ["reemplazar el contenido principal del texto", "guiar la interpretación y facilitar la comprensión", "traducir el texto a otro idioma"]

enunciado: "Los paratextos son elementos que rodean al texto principal y cumplen la función de..."

explicacion: |
  No forman parte del cuerpo central, pero guían la interpretación,
  anticipan el tono y facilitan la comprensión del lector.
```

### 2 — pregunta 2

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "basico"
  tags: ["autor del concepto"]

variables:
  n: uno_de([1, 1])

respuesta: "Gérard Genette"
tipo: completar

enunciado: "El término \"paratexto\" fue popularizado por el teórico ___."

respuestas_validas:
  - "Gérard Genette"
  - "Gerard Genette"

explicacion: |
  Genette usó la idea de "umbral" para describir ese espacio que el
  lector cruza antes de entrar en la obra.
```

### 3 — pregunta 3

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "intermedio"
  tags: ["clasificacion"]

variables:
  elemento: uno_de(["el título", "la portada", "las notas al pie", "el índice"])

respuesta: "peritexto"
tipo: mc
opciones_explicitas: ["peritexto", "epitexto"]

enunciado: "\"{elemento}\" es un ejemplo de..."

explicacion: |
  Todos estos elementos están físicamente unidos al objeto libro o
  documento, por eso son peritexto.
```

### 4 — pregunta 4

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "intermedio"
  tags: ["clasificacion"]

variables:
  elemento: uno_de(["una entrevista con el autor", "una reseña de un crítico", "una conversación en redes sociales sobre el libro"])

respuesta: "epitexto"
tipo: mc
opciones_explicitas: ["peritexto", "epitexto"]

enunciado: "\"{elemento}\" es un ejemplo de..."

explicacion: |
  Estos elementos rodean al texto pero no están físicamente en él, por
  eso son epitexto.
```

### 5 — pregunta 5

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "elementos físicamente unidos al objeto libro"
tipo: mc
opciones_explicitas: ["elementos físicamente unidos al objeto libro", "elementos externos como entrevistas o reseñas", "sólo las imágenes de la tapa"]

enunciado: "El peritexto incluye..."

explicacion: |
  Título, subtítulo, autor, editorial, colección, notas al pie, índices,
  portada y contratapa son parte del peritexto.
```

### 6 — pregunta 6

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "elementos externos que rodean al texto sin estar físicamente en él"
tipo: mc
opciones_explicitas: ["elementos externos que rodean al texto sin estar físicamente en él", "el índice del libro", "las notas al pie de página"]

enunciado: "El epitexto se refiere a..."

explicacion: |
  Entrevistas, reseñas, artículos periodísticos y discursos de
  presentación son ejemplos de epitexto: no están en el libro físico
  pero influyen en su recepción.
```

### 7 — pregunta 7

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "intermedio"
  tags: ["funcion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ignorar los paratextos puede hacer que el lector malinterprete la intención del autor o pierda matices importantes de la obra."

explicacion: |
  Los paratextos son señales que el autor (o el editor) usan para guiar
  la lectura; ignorarlos deja al lector sin ese contexto.
```

### 8 — pregunta 8

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "basico"
  tags: ["ejemplo"]

variables:
  n: uno_de([1, 1])

respuesta: "sinopsis"
tipo: completar

enunciado: "El texto breve en la contraportada que cuenta de qué trata la historia sin revelar el final se llama ___."

respuestas_validas:
  - "sinopsis"

explicacion: |
  La sinopsis es un paratexto explicativo que ayuda a decidir si interesa
  leer la obra.
```

### 9 — pregunta 9

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "intermedio"
  tags: ["epitexto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El epitexto influye en la recepción de la obra creando un contexto cultural y social, aunque no lo tengamos en la mano al abrir el libro."

explicacion: |
  Reseñas, entrevistas o discusiones sociales sobre un libro moldean
  cómo se lo interpreta, incluso sin formar parte físicamente del texto.
```

### 10 — pregunta 10

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "basico"
  tags: ["primer contacto"]

variables:
  n: uno_de([1, 1])

respuesta: "la portada"
tipo: mc
opciones_explicitas: ["la portada", "el índice", "el prólogo"]

enunciado: "Al abrir un libro por primera vez, el primer paratexto que suele verse es..."

explicacion: |
  La imagen y el color de la portada son lo primero que el lector percibe,
  y sugieren un tono antes de leer una sola palabra.
```

### 11 — pregunta 11

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "intermedio"
  tags: ["ejemplo aplicado"]

variables:
  n: uno_de([1, 1])

respuesta: "claves históricas o literarias no evidentes en la novela"
tipo: mc
opciones_explicitas: ["claves históricas o literarias no evidentes en la novela", "el precio de venta del libro", "la cantidad de páginas exactas"]

enunciado: "Un prólogo escrito por un crítico sobre una novela suele aportar principalmente..."

explicacion: |
  Si el prólogo menciona, por ejemplo, el contexto político de la época,
  da herramientas para entender metáforas y conflictos del libro que no
  son obvios sólo con leer la historia.
```

### 12 — pregunta 12

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "basico"
  tags: ["lectura critica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aprender a identificar y analizar los paratextos ayuda a desarrollar una lectura crítica y consciente."

explicacion: |
  Entender que la comunicación escrita va más allá de las letras
  impresas es parte de leer de forma activa, no pasiva.
```

### 13 — pregunta 13

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "intermedio"
  tags: ["mediacion"]

variables:
  n: uno_de([1, 1])

respuesta: "mediadores entre el autor y el lector"
tipo: mc
opciones_explicitas: ["mediadores entre el autor y el lector", "sustitutos del texto principal", "adornos sin ninguna función"]

enunciado: "Los paratextos actúan como..."

explicacion: |
  Ningún texto llega al público en un vacío: siempre viene acompañado de
  señales que orientan cómo leerlo, cumpliendo una función mediadora.
```

### 14 — pregunta 14

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "basico"
  tags: ["peritexto"]

variables:
  elemento: uno_de(["el subtítulo", "el nombre de la editorial", "la colección a la que pertenece la obra"])

respuesta: verdadero
tipo: vf

enunciado: "\"{elemento}\" forma parte del peritexto de una obra."

explicacion: |
  Todos estos elementos están físicamente unidos al libro, por lo que
  se clasifican como peritexto.
```

### 15 — pregunta 15

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "avanzado"
  tags: ["metafora"]

variables:
  n: uno_de([1, 1])

respuesta: "umbral"
tipo: completar

enunciado: "Genette describió al paratexto como un ___ que el lector cruza antes de entrar en la obra."

respuestas_validas:
  - "umbral"

explicacion: |
  La metáfora del "umbral" explica cómo los paratextos preparan al
  lector antes del contacto directo con el texto principal.
```

### 16 — pregunta 16

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "intermedio"
  tags: ["ejemplo"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Una entrevista con el autor de un libro se considera parte del peritexto porque habla directamente sobre la obra."

explicacion: |
  Aunque hable sobre el libro, la entrevista es externa al objeto físico:
  es epitexto, no peritexto.
```

### 17 — pregunta 17

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "basico"
  tags: ["funcion del titulo"]

variables:
  n: uno_de([1, 1])

respuesta: "una primera pista sobre el tema"
tipo: mc
opciones_explicitas: ["una primera pista sobre el tema", "el resumen completo del argumento", "la biografía completa del autor"]

enunciado: "Según la teoría, el título de una obra nos da..."

explicacion: |
  El título orienta las expectativas del lector desde el primer contacto,
  aunque no explica el argumento completo.
```

### 18 — pregunta 18

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "intermedio"
  tags: ["clasificacion"]

variables:
  elemento: uno_de(["un discurso de presentación del libro", "un artículo periodístico sobre la obra"])

respuesta: verdadero
tipo: vf

enunciado: "\"{elemento}\" es un ejemplo de epitexto según la teoría."

explicacion: |
  Ambos son elementos externos al objeto libro que igual influyen en
  cómo se recibe la obra.
```

### 19 — pregunta 19

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "basico"
  tags: ["ejemplo argentino"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"La casa de los espíritus\" de Isabel Allende se usa como ejemplo en la teoría para analizar paratextos como portada, sinopsis, notas al pie y prólogo."

explicacion: |
  Es la obra elegida como caso práctico para mostrar cómo se aplican
  los distintos tipos de paratexto en la lectura escolar.
```

### 20 — pregunta 20

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "avanzado"
  tags: ["lectura activa"]

variables:
  n: uno_de([1, 1])

respuesta: "de pasiva a activa y crítica"
tipo: mc
opciones_explicitas: ["de pasiva a activa y crítica", "de crítica a indiferente", "no cambia en nada la experiencia"]

enunciado: "Analizar los paratextos de una obra transforma la experiencia de lectura..."

explicacion: |
  Al comprender cómo se construye el significado alrededor del texto, el
  lector deja de ser receptor pasivo y pasa a leer de forma activa y
  crítica.
```

### 21 — pregunta 21

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "basico"
  tags: ["division general"]

variables:
  n: uno_de([1, 1])

respuesta: "peritexto y epitexto"
tipo: mc
opciones_explicitas: ["peritexto y epitexto", "prólogo y epílogo", "portada y contraportada solamente"]

enunciado: "Los paratextos se dividen generalmente en dos grandes grupos según su ubicación y función:"

explicacion: |
  Peritexto (físicamente unido al texto) y epitexto (externo al texto)
  son las dos categorías generales.
```

### 22 — pregunta 22

```
metadata:
  materia: "lengua"
  tema: "paratextos"
  nivel: "intermedio"
  tags: ["notas al pie"]

variables:
  n: uno_de([1, 1])

respuesta: "peritexto"
tipo: mc
opciones_explicitas: ["peritexto", "epitexto"]

enunciado: "Las notas al pie de página que aparecen dentro del mismo libro son un ejemplo de..."

explicacion: |
  Al estar impresas dentro del propio objeto libro, las notas al pie son
  parte del peritexto.
```

