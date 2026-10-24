# Lengua — Referencia: anáfora y catáfora (cuestionario, 20 preguntas VBLang)

> Tema: `P14Bb`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la referencia textual

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "basico"
  tags: ["referencia", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La referencia es el mecanismo por el cual una palabra (casi siempre un pronombre) remite a otra ya mencionada o por mencionar en el texto, sin repetirla literalmente."

pasos:
  - "\"Juan llegó cansado. Él había caminado diez cuadras\": \"él\" remite a \"Juan\"."

explicacion: |
  Verdadero: la referencia evita la repetición literal manteniendo la
  claridad de a qué o quién se refiere.
```

### 2 — Identificar anáfora (referencia hacia atrás)

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "basico"
  tags: ["anafora"]

variables:
  n: uno_de([1, 1])

respuesta: "anáfora"
tipo: mc
opciones_explicitas: ["anáfora", "catáfora"]

enunciado: "\"María compró un libro. Lo leyó esa misma noche.\" El pronombre \"lo\" remite hacia atrás, a \"un libro\": es un caso de..."

pasos:
  - "La referencia apunta a algo ya mencionado ANTES en el texto: es anáfora."

explicacion: |
  La anáfora (en este sentido de referencia textual, distinto del
  recurso literario) remite hacia atrás.
```

### 3 — Identificar catáfora (referencia hacia adelante)

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["catafora"]

variables:
  n: uno_de([1, 1])

respuesta: "catáfora"
tipo: mc
opciones_explicitas: ["anáfora", "catáfora"]

enunciado: "\"Esto es lo que pasó: María llegó tarde y perdió el tren.\" El pronombre \"esto\" anticipa la explicación que viene DESPUÉS: es un caso de..."

pasos:
  - "La referencia apunta a algo que se va a mencionar DESPUÉS en el texto: es catáfora."

explicacion: |
  La catáfora remite hacia adelante, anticipando información que
  todavía no se dijo.
```

### 4 — No confundir con la anáfora literaria

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "avanzado"
  tags: ["anafora", "recursos_literarios", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La \"anáfora\" como mecanismo de referencia textual (este tema) y la \"anáfora\" como recurso literario (ver `../recursos-literarios/`) significan exactamente lo mismo."

pasos:
  - "La anáfora literaria repite la MISMA palabra para dar énfasis; la anáfora de referencia usa una palabra DISTINTA (pronombre) para evitar repetir."

explicacion: |
  Falso: es el mismo término técnico con dos significados opuestos
  según el área (retórica vs. gramática textual).
```

### 5 — Anáfora es el caso más común

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["anafora", "catafora", "frecuencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La anáfora (referencia hacia atrás) es el caso más común de referencia textual; la catáfora es menos frecuente y suele generar un efecto de anticipación o suspenso."

pasos:
  - "La mayoría de los pronombres en un texto remiten a algo ya dicho antes, no a algo por venir."

explicacion: |
  Verdadero: la anáfora domina en frecuencia sobre la catáfora en el
  uso habitual del idioma.
```

### 6 — Pronombres personales como referencia

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "basico"
  tags: ["pronombres_personales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los pronombres personales (él, ella, lo, la, le) son el tipo de palabra más común usada como mecanismo de referencia."

pasos:
  - "\"Él\", \"lo\", \"le\" son ejemplos ya vistos en los ejemplos de anáfora y catáfora."

explicacion: |
  Verdadero: los pronombres personales son la herramienta de
  referencia más frecuente.
```

### 7 — Sinónimos o hiperónimos como referencia

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["sinonimos", "hiperonimos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Compré un perro. El animal es muy juguetón\" usa un hiperónimo (\"el animal\") como referencia, sin repetir \"perro\" ni usar un pronombre."

pasos:
  - "Un hiperónimo es una palabra más general que engloba a la mencionada antes (animal engloba a perro)."

explicacion: |
  Verdadero: además de pronombres, los sinónimos o hiperónimos también
  funcionan como mecanismo de referencia.
```

### 8 — Elipsis como referencia

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["elipsis"]

variables:
  n: uno_de([1, 1])

respuesta: "elipsis"
tipo: completar

enunciado: "\"María fue al cine y compró pochoclo\" (sin repetir \"María\" antes de \"compró\") usa el mecanismo de referencia llamado..."

pasos:
  - "Se omite directamente la palabra porque ya se entiende por contexto quién compró el pochoclo."

explicacion: |
  La elipsis omite una palabra ya mencionada, en vez de reemplazarla
  por un pronombre.
```

### 9 — Por qué la referencia evita repetición innecesaria

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "basico"
  tags: ["referencia", "repeticion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sin mecanismos de referencia, un texto suena repetitivo y artificial (\"Juan fue a la casa de Juan. Juan saludó a la mamá de Juan.\")."

pasos:
  - "La referencia permite variar la redacción sin perder claridad sobre a qué o quién se refiere cada palabra."

explicacion: |
  Verdadero: es la razón principal por la que la referencia es una
  herramienta central de cohesión.
```

### 10 — Referencia ambigua

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "avanzado"
  tags: ["referencia_ambigua"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En \"Juan le dio el libro a Pedro porque él lo necesitaba\", no queda claro si \"él\" se refiere a Juan o a Pedro: es un ejemplo de referencia ambigua."

pasos:
  - "Un pronombre puede tener más de un antecedente posible en la misma oración, generando confusión."

explicacion: |
  Verdadero: la ambigüedad de referencia es un riesgo real al usar
  pronombres sin cuidado.
```

### 11 — Revisar la referencia es parte de la etapa de revisión

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["referencia", "produccion_escrita_compleja"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Revisar que cada referencia (pronombre, sinónimo) tenga un único antecedente claro es parte de la etapa de revisión descrita en `../produccion-escrita-compleja/`."

pasos:
  - "La ambigüedad de referencia es uno de los errores de coherencia que se buscan al releer un texto propio."

explicacion: |
  Verdadero: la revisión de referencias ambiguas es una tarea
  concreta de la etapa de revisión.
```

### 12 — Identificar el antecedente de un pronombre

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["anafora", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "el libro"
tipo: completar

enunciado: "En \"Compré un libro en la feria. Lo terminé en dos días.\", ¿a qué se refiere el pronombre \"lo\"?"

pasos:
  - "Es una anáfora: hay que buscar el elemento ya mencionado antes al que remite el pronombre."

explicacion: |
  \"Lo\" remite hacia atrás, a \"un libro\", ya mencionado en la
  oración anterior.
```

### 13 — Catáfora genera anticipación

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "avanzado"
  tags: ["catafora", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar catáfora (\"Esto es lo que pasó: ...\") genera un efecto de anticipación, porque el lector sabe que viene una explicación pero todavía no la conoce."

pasos:
  - "Ese efecto de expectativa es una de las razones por las que se elige deliberadamente la catáfora en vez de la anáfora."

explicacion: |
  Verdadero: el efecto retórico de la catáfora es distinto del de la
  anáfora, aunque ambas sean mecanismos de referencia.
```

### 14 — Clasificar anáfora vs. catáfora en ejemplos

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["anafora", "catafora", "practica"]

variables:
  frases: ["Ana terminó el proyecto. Ella estaba orgullosa del resultado", "Aquí está: la solución al problema era mucho más simple de lo que pensábamos"]
  tipos: ["anáfora", "catáfora"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["anáfora", "catáfora"]

enunciado: "\"{frases[idx]}\" es un ejemplo de..."

pasos:
  - "Si el pronombre remite a algo YA dicho, es anáfora. Si remite a algo que se dice DESPUÉS, es catáfora."

explicacion: |
  La dirección de la referencia (hacia atrás o hacia adelante) es lo
  que distingue anáfora de catáfora.
```

### 15 — Pronombres demostrativos como referencia

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["pronombres_demostrativos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los pronombres demostrativos (esto, eso, aquello, este, ese) también pueden funcionar como mecanismo de referencia, tanto anafórica como catafórica."

pasos:
  - "\"Esto es lo que pasó\" (catáfora) y \"eso ya lo sabía\" (anáfora) usan el mismo tipo de pronombre en direcciones distintas."

explicacion: |
  Verdadero: los demostrativos son otro tipo de palabra que funciona
  como referencia, además de los pronombres personales.
```

### 16 — Corregir una referencia ambigua

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "avanzado"
  tags: ["referencia_ambigua", "correccion"]

variables:
  n: uno_de([1, 1])

respuesta: "Juan le dio el libro a Pedro porque Pedro lo necesitaba"
tipo: mc
opciones_explicitas: ["Juan le dio el libro a Pedro porque Pedro lo necesitaba", "Juan le dio el libro a Pedro porque él lo necesitaba"]

enunciado: "Para eliminar la ambigüedad de \"Juan le dio el libro a Pedro porque él lo necesitaba\" (¿quién necesitaba el libro?), ¿cuál versión es más clara?"

pasos:
  - "Reemplazar el pronombre ambiguo (\"él\") por el nombre propio (\"Pedro\") elimina la ambigüedad, aunque repita una palabra."

explicacion: |
  A veces conviene sacrificar algo de variedad léxica (repetir el
  nombre) para evitar una ambigüedad real de referencia.
```

### 17 — La elipsis no siempre está disponible

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "avanzado"
  tags: ["elipsis", "limitaciones"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La elipsis sólo funciona bien cuando el sujeto omitido se entiende sin ambigüedad por el contexto inmediato; si hay varios candidatos posibles, conviene usar un pronombre o repetir el nombre en vez de omitir."

pasos:
  - "Omitir un elemento sin dejar claro a quién se refiere puede generar la misma ambigüedad que un pronombre mal usado."

explicacion: |
  Verdadero: la elipsis tiene el mismo riesgo de ambigüedad que
  cualquier otro mecanismo de referencia si el contexto no es claro.
```

### 18 — Ordenar el proceso para revisar las referencias de un texto

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "intermedio"
  tags: ["referencia", "metodo"]

enunciado: "Ordená los pasos para revisar las referencias (pronombres, sinónimos, elipsis) de un texto propio."
tipo: ordenar
opciones_explicitas:
  - "Identificar cada pronombre, sinónimo o elipsis usado como referencia"
  - "Buscar el antecedente (o consecuente, si es catáfora) al que remite cada uno"
  - "Revisar si hay más de un candidato posible para ese antecedente"
  - "Corregir (reemplazando por el nombre propio, por ejemplo) donde haya ambigüedad"
respuesta_orden: ["Identificar cada pronombre, sinónimo o elipsis usado como referencia", "Buscar el antecedente (o consecuente, si es catáfora) al que remite cada uno", "Revisar si hay más de un candidato posible para ese antecedente", "Corregir (reemplazando por el nombre propio, por ejemplo) donde haya ambigüedad"]
explicacion: |
  El proceso va de identificar las referencias usadas a verificar que
  cada una tenga un único antecedente claro.
```

### 19 — Referencia como una de las tres herramientas de cohesión

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "avanzado"
  tags: ["referencia", "cohesion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La referencia (anáfora y catáfora) es una de las tres herramientas de cohesión estudiadas en esta subrama, junto con los conectores textuales y la progresión temática."

pasos:
  - "Ver `../conectores-textuales/` y `../progresion-tematica/`: los tres son nodos hermanos que dependen de `../produccion-escrita-compleja/`."

explicacion: |
  Verdadero: mientras los conectores marcan relaciones lógicas, la
  referencia evita repetición manteniendo claridad sobre a qué se
  refiere cada palabra.
```

### 20 — Aplicación: variar la redacción sin perder claridad

```
metadata:
  materia: "lengua"
  tema: "referencia_anafora_catafora"
  nivel: "avanzado"
  tags: ["referencia", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al escribir un texto propio, conviene combinar pronombres, sinónimos y elipsis para evitar repetir siempre la misma palabra, cuidando que cada referencia siga siendo clara para el lector."

pasos:
  - "El objetivo es variar la redacción sin sacrificar la claridad sobre a quién o qué se refiere cada mención."

explicacion: |
  Verdadero: es la aplicación práctica central de este tema al
  momento de escribir.
```
