# Lengua — Núcleos y modificadores (cuestionario, 20 preguntas VBLang)

> Tema: `P6`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es el núcleo de un sintagma

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "basico"
  tags: ["nucleo", "vocabulario"]

enunciado: "¿Qué es el núcleo de un sintagma?"
tipo: mc
opciones_explicitas:
  - "La palabra principal, que concentra el significado central y determina la categoría gramatical de todo el grupo"
  - "La primera palabra del sintagma, sin importar su función"
  - "Cualquier palabra que se pueda quitar sin cambiar el sentido"
respuesta: "La palabra principal, que concentra el significado central y determina la categoría gramatical de todo el grupo"

explicacion: |
  En un sintagma nominal, el núcleo siempre es un sustantivo o
  pronombre.
```

### 2 — Qué es un modificador

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "basico"
  tags: ["modificador", "vocabulario"]

enunciado: "¿Qué es un modificador?"
tipo: mc
opciones_explicitas:
  - "Una palabra o grupo de palabras que acompaña al núcleo, agregando información sin ser imprescindible para la estructura básica"
  - "Otro nombre para el núcleo de un sintagma"
  - "Una palabra que siempre va al final de la oración"
respuesta: "Una palabra o grupo de palabras que acompaña al núcleo, agregando información sin ser imprescindible para la estructura básica"

explicacion: |
  Se puede quitar y la oración sigue siendo gramaticalmente correcta,
  aunque pierda información.
```

### 3 — Problema: identificar núcleo y modificador directo

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["nucleo", "modificador_directo", "problema"]

enunciado: "Etiquetá el núcleo del sujeto y su modificador directo en esta oración."
tipo: analisis_sintactico
texto_analizar: "Los estudiantes de la clase aprobaron el examen"
etiquetas_pedidas:
  - { palabra: "estudiantes", etiqueta: "núcleo" }
  - { palabra: "Los", etiqueta: "modificador directo" }

explicacion: |
  'Estudiantes' es el núcleo; 'Los' lo acompaña directamente, sin
  preposición.
```

### 4 — Qué es un modificador directo

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["modificador_directo", "vocabulario"]

enunciado: "¿Qué es un modificador directo?"
tipo: mc
opciones_explicitas:
  - "Un determinante o adjetivo que se agrega al núcleo sin preposición ('el perro grande')"
  - "Un sintagma con preposición que complementa al núcleo"
  - "Un sustantivo que explica a otro, separado por comas"
respuesta: "Un determinante o adjetivo que se agrega al núcleo sin preposición ('el perro grande')"

explicacion: |
  'El' y 'grande' son modificadores directos de 'perro'.
```

### 5 — Qué es un modificador indirecto

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["modificador_indirecto", "vocabulario"]

enunciado: "¿Qué es un modificador indirecto (complemento del nombre)?"
tipo: mc
opciones_explicitas:
  - "Un sintagma CON preposición que complementa al núcleo ('la casa de María')"
  - "Un determinante que acompaña al núcleo sin preposición"
  - "Otro nombre para el núcleo del predicado"
respuesta: "Un sintagma CON preposición que complementa al núcleo ('la casa de María')"

explicacion: |
  La preposición ('de', en este caso) es lo que distingue al
  modificador indirecto del directo.
```

### 6 — Problema: marcar el modificador indirecto

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["modificador_indirecto", "problema"]

enunciado: "Marcá el modificador indirecto (complemento del nombre) del núcleo 'estudiantes' en esta oración."
tipo: analisis_spans
texto_analizar: "Los estudiantes de la clase aprobaron el examen"
spans_pedidos:
  - { desde: 2, hasta: 4, etiqueta: "modificador indirecto" }

explicacion: |
  'De la clase' es un sintagma preposicional que complementa a
  'estudiantes' — a diferencia de 'Los', que lo modifica sin
  preposición.
```

### 7 — Qué es una aposición

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["aposicion", "vocabulario"]

enunciado: "¿Qué es una aposición?"
tipo: mc
opciones_explicitas:
  - "Un sustantivo (o sintagma nominal) que se agrega a otro para explicarlo, sin preposición, generalmente separado por comas"
  - "Un adjetivo que concuerda en género y número con el núcleo"
  - "Otro nombre para el modificador indirecto"
respuesta: "Un sustantivo (o sintagma nominal) que se agrega a otro para explicarlo, sin preposición, generalmente separado por comas"

explicacion: |
  Como 'el profesor' en 'Javier, el profesor, llegó tarde'.
```

### 8 — Problema: identificar la aposición

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["aposicion", "problema"]

tipo: completar
enunciado: "En la oración 'Javier, el profesor, llegó tarde', ¿qué palabras forman la aposición de 'Javier'?"
respuestas_validas:
  - "el profesor"

explicacion: |
  Explica quién es Javier, sin usar ninguna preposición, separado por
  comas.
```

### 9 — Se puede quitar un modificador

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["modificador"]

respuesta: verdadero
tipo: vf

enunciado: "Se puede quitar un modificador de un sintagma y la oración sigue siendo gramaticalmente correcta, aunque pierda parte de la información."

explicacion: |
  'Los estudiantes aprobaron el examen' (sin 'de la clase') sigue
  siendo una oración válida, con menos precisión.
```

### 10 — Quitar el núcleo cambia la estructura

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["nucleo"]

respuesta: verdadero
tipo: vf

enunciado: "Si se quita el núcleo de un sintagma, la oración deja de tener sentido o cambia por completo su estructura — a diferencia de quitar un modificador."

explicacion: |
  Es la prueba práctica para distinguir núcleo de modificador: lo
  imprescindible vs. lo prescindible.
```

### 11 — Problema: identificar los modificadores directos

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["modificador_directo", "problema"]

enunciado: "Marcá los modificadores directos del núcleo 'perro' en esta oración."
tipo: identificar_palabras
texto_analizar: "El perro grande corre"
respuestas_validas:
  - "El"
  - "grande"

explicacion: |
  Ambos acompañan a 'perro' sin preposición: uno antes (determinante),
  otro después (adjetivo).
```

### 12 — Problema: identificar el núcleo

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["nucleo", "problema"]

enunciado: "¿Cuál es el núcleo del sujeto en 'El perro grande corre'?"
tipo: mc
opciones_explicitas:
  - "perro"
  - "El"
  - "grande"
respuesta: "perro"

explicacion: |
  Es el sustantivo que concentra el significado central del sujeto.
```

### 13 — Aplicación: relación con sujeto y predicado

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Qué relación tiene 'núcleo y modificadores' con lo ya visto en `../sujeto-y-predicado/`?"
tipo: mc
opciones_explicitas:
  - "Le da nombre formal a lo que ya se distinguía informalmente: el núcleo del sujeto (ya identificado) y todo lo que lo acompaña (ahora llamado 'modificador')"
  - "No tiene ninguna relación real con sujeto y predicado"
  - "Reemplaza por completo la necesidad de identificar sujeto y predicado"
respuesta: "Le da nombre formal a lo que ya se distinguía informalmente: el núcleo del sujeto (ya identificado) y todo lo que lo acompaña (ahora llamado 'modificador')"

explicacion: |
  Es la continuación directa de ese módulo.
```

### 14 — El predicado también tiene núcleo y modificadores

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["predicado"]

respuesta: verdadero
tipo: vf

enunciado: "El mismo patrón de núcleo y modificadores se repite en el predicado: su núcleo es el verbo, y sus complementos (objeto directo, objeto indirecto, circunstanciales) funcionan como modificadores de ese núcleo verbal."

explicacion: |
  Profundizar en esos tipos específicos de complemento verbal es el
  tema de un módulo posterior ('Objetos y circunstanciales').
```

### 15 — Problema: distinguir modificador directo de indirecto

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["modificador_directo", "modificador_indirecto", "problema"]

enunciado: "En 'la mesa de madera', ¿qué tipo de modificador es 'de madera' respecto del núcleo 'mesa'?"
tipo: mc
opciones_explicitas:
  - "Modificador indirecto (complemento del nombre): usa la preposición 'de'"
  - "Modificador directo: no usa ninguna preposición"
  - "Aposición: es un sustantivo que explica a 'mesa'"
respuesta: "Modificador indirecto (complemento del nombre): usa la preposición 'de'"

explicacion: |
  La presencia de la preposición 'de' es la marca distintiva del
  modificador indirecto.
```

### 16 — La aposición no usa preposición

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["aposicion", "modificador_indirecto"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia del modificador indirecto, la aposición no usa ninguna preposición para unirse al núcleo — por eso 'el profesor' en 'Javier, el profesor,...' es aposición y no modificador indirecto."

explicacion: |
  Si dijera 'Javier, DE profesión profesor,...' ahí sí habría una
  preposición de por medio.
```

### 17 — Aplicación: núcleos y modificadores para resumir un texto

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Cómo ayuda distinguir núcleo de modificadores a resumir o parafrasear una oración larga?"
tipo: mc
opciones_explicitas:
  - "Permite quedarse con el esqueleto básico (los núcleos) y decidir qué modificadores son prescindibles según qué tan importante sea la información que agregan"
  - "No tiene ninguna utilidad práctica fuera del análisis gramatical"
  - "Obliga a mantener siempre todos los modificadores de la oración original"
respuesta: "Permite quedarse con el esqueleto básico (los núcleos) y decidir qué modificadores son prescindibles según qué tan importante sea la información que agregan"

explicacion: |
  Es una aplicación práctica directa de este módulo a la producción
  de textos.
```

### 18 — Problema: núcleo de un sintagma con aposición

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["nucleo", "problema"]

tipo: completar
enunciado: "En 'Javier, el profesor, llegó tarde', ¿cuál es el núcleo del sujeto completo ('Javier, el profesor')?"
respuestas_validas:
  - "Javier"

explicacion: |
  La aposición ('el profesor') explica a 'Javier', pero no lo
  reemplaza como núcleo.
```

### 19 — Modificador directo: determinante o adjetivo

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["modificador_directo"]

enunciado: "¿Cuáles son las dos clases de palabras que típicamente funcionan como modificador directo de un sustantivo?"
tipo: mc
opciones_explicitas:
  - "Determinantes (artículos) y adjetivos"
  - "Preposiciones y conjunciones"
  - "Verbos y adverbios"
respuesta: "Determinantes (artículos) y adjetivos"

explicacion: |
  Ambos acompañan al sustantivo sin necesitar ninguna preposición de
  por medio.
```

### 20 — Cierre: para qué sirve distinguir núcleo de modificadores

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve distinguir el núcleo de un sintagma de sus modificadores?"
tipo: mc
opciones_explicitas:
  - "Para entender qué parte de un sintagma es imprescindible (el núcleo) y qué parte agrega información prescindible (los modificadores), la base de cualquier análisis sintáctico más detallado"
  - "Sólo sirve para contar palabras de una oración"
  - "No tiene relación con analizar objetos y circunstanciales más adelante"
respuesta: "Para entender qué parte de un sintagma es imprescindible (el núcleo) y qué parte agrega información prescindible (los modificadores), la base de cualquier análisis sintáctico más detallado"

explicacion: |
  Es el paso siguiente después de `../sujeto-y-predicado/`, y la base
  del módulo que sigue en la currícula: 'Objetos y circunstanciales'.
```
