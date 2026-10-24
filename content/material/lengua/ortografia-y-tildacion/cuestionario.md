# Lengua — Ortografía y tildación (cuestionario, 20 preguntas VBLang)

> Tema: `ORT`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Clasificar palabra aguda

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "basico"
  tags: ["agudas"]

variables:
  n: uno_de([1, 1])

respuesta: "aguda"
tipo: mc
opciones_explicitas: ["aguda", "grave", "esdrújula"]

enunciado: "En la palabra \"camión\", la sílaba tónica es la última (\"ción\"). ¿Cómo se clasifica esta palabra?"

pasos:
  - "La sílaba tónica en la última posición define a las palabras agudas."

explicacion: |
  Las agudas tienen su sílaba tónica en la última posición.
```

### 2 — Clasificar palabra grave

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "basico"
  tags: ["graves"]

variables:
  n: uno_de([1, 1])

respuesta: "grave"
tipo: mc
opciones_explicitas: ["aguda", "grave", "esdrújula"]

enunciado: "En la palabra \"árbol\", la sílaba tónica es la penúltima (\"ár\"). ¿Cómo se clasifica esta palabra?"

pasos:
  - "La sílaba tónica en la penúltima posición define a las palabras graves o llanas."

explicacion: |
  Las graves (o llanas) tienen su sílaba tónica en la penúltima
  posición.
```

### 3 — Clasificar palabra esdrújula

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "basico"
  tags: ["esdrujulas"]

variables:
  n: uno_de([1, 1])

respuesta: "esdrújula"
tipo: mc
opciones_explicitas: ["aguda", "grave", "esdrújula"]

enunciado: "En la palabra \"médico\", la sílaba tónica es la antepenúltima (\"mé\"). ¿Cómo se clasifica esta palabra?"

pasos:
  - "La sílaba tónica en la antepenúltima posición define a las palabras esdrújulas."

explicacion: |
  Las esdrújulas tienen su sílaba tónica en la antepenúltima
  posición.
```

### 4 — Clasificar palabra sobresdrújula

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["sobresdrujulas"]

variables:
  n: uno_de([1, 1])

respuesta: "sobresdrújula"
tipo: mc
opciones_explicitas: ["esdrújula", "sobresdrújula", "aguda"]

enunciado: "En la palabra \"cuéntaselo\", la sílaba tónica (\"cuén\") está antes de la antepenúltima. ¿Cómo se clasifica esta palabra?"

pasos:
  - "Cuando la sílaba tónica está más atrás que la antepenúltima, la palabra es sobresdrújula."

explicacion: |
  Las sobresdrújulas son frecuentes en verbos con pronombres
  enclíticos (\"cuéntaselo\", \"tráemelo\").
```

### 5 — Cuándo llevan tilde las agudas

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["agudas", "regla"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las palabras agudas llevan tilde cuando terminan en n, s o vocal."

pasos:
  - "\"Camión\" (termina en n), \"aquí\" (vocal), \"compás\" (s) llevan tilde por ser agudas terminadas así."

explicacion: |
  Verdadero: es la regla básica de tildación de agudas.
```

### 6 — Cuándo llevan tilde las graves

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["graves", "regla"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las palabras graves llevan tilde cuando terminan en cualquier consonante que NO sea n o s."

pasos:
  - "\"Árbol\" (termina en l), \"fácil\" (termina en l) llevan tilde. \"Casa\" (vocal), \"joven\" (n) no la llevan."

explicacion: |
  Verdadero: es la regla básica de tildación de graves, casi espejo
  de la de agudas.
```

### 7 — Las esdrújulas siempre llevan tilde

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "basico"
  tags: ["esdrujulas", "regla"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las palabras esdrújulas llevan tilde siempre, sin excepción."

pasos:
  - "A diferencia de agudas y graves, no depende de en qué letra termina la palabra."

explicacion: |
  Verdadero: la esdrújula es la única clasificación sin condición
  sobre la terminación.
```

### 8 — Las sobresdrújulas siempre llevan tilde

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["sobresdrujulas", "regla"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las palabras sobresdrújulas llevan tilde siempre, igual que las esdrújulas."

pasos:
  - "\"Cuéntaselo\", \"tráemelo\" siempre se tildan, sin condición de terminación."

explicacion: |
  Verdadero: sobresdrújulas y esdrújulas comparten la regla de tilde
  obligatoria sin excepción.
```

### 9 — Palabra aguda sin tilde

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["agudas", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La palabra \"reloj\" (aguda, termina en \"j\") debería llevar tilde según la regla de las agudas."

pasos:
  - "La regla exige terminar en n, s o vocal; \"j\" no cumple ninguna de esas tres condiciones."

explicacion: |
  Falso: \"reloj\" es aguda pero no termina en n/s/vocal, por eso no
  lleva tilde.
```

### 10 — Palabra grave sin tilde

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["graves", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La palabra \"joven\" (grave, termina en \"n\") debería llevar tilde según la regla de las graves."

pasos:
  - "La regla de graves exige terminar en consonante distinta de n/s; \"n\" está excluida de esa condición."

explicacion: |
  Falso: \"joven\" es grave terminada en \"n\", por eso no lleva
  tilde (justo lo opuesto a la regla de agudas).
```

### 11 — Tilde diacrítica: él/el

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["tilde_diacritica"]

variables:
  n: uno_de([1, 1])

respuesta: "él"
tipo: completar

enunciado: "El pronombre personal (\"... vino a la fiesta\") se escribe con tilde diacrítica como..."

pasos:
  - "\"Él\" (pronombre, con tilde) se distingue de \"el\" (artículo, sin tilde)."

explicacion: |
  La tilde diacrítica distingue el pronombre \"él\" del artículo
  \"el\".
```

### 12 — Tilde diacrítica: tú/tu

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["tilde_diacritica"]

variables:
  n: uno_de([1, 1])

respuesta: "tú"
tipo: completar

enunciado: "El pronombre personal (\"... sabés la respuesta\") se escribe con tilde diacrítica como..."

pasos:
  - "\"Tú\" (pronombre, con tilde) se distingue de \"tu\" (posesivo, sin tilde: \"tu casa\")."

explicacion: |
  La tilde diacrítica distingue el pronombre \"tú\" del posesivo
  \"tu\".
```

### 13 — Tilde diacrítica: sí/si

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["tilde_diacritica"]

variables:
  usos: ["afirmación (\"... quiero ir\")", "condicional (\"... llueve, no salgo\")"]
  respuestas: ["sí", "si"]
  idx: uno_de([0, 1])

respuesta: respuestas[idx]
tipo: completar

enunciado: "Para el uso de {usos[idx]}, se escribe..."

pasos:
  - "\"Sí\" (afirmación/reflexivo, con tilde) se distingue de \"si\" (condicional, sin tilde)."

explicacion: |
  La tilde diacrítica distingue la afirmación \"sí\" de la
  conjunción condicional \"si\".
```

### 14 — Tilde diacrítica cambia el sentido de la oración

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["tilde_diacritica", "sentido"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Confundir \"cómo\" (interrogativo, con tilde) con \"como\" (comparativo, sin tilde) puede cambiar el sentido de una oración."

pasos:
  - "\"¿Cómo comiste?\" (pregunta por la manera) vs. \"Como comiste, te vas\" (comparativo/causal, sin pregunta)."

explicacion: |
  Verdadero: la tilde diacrítica no es un capricho ortográfico, marca
  una diferencia real de significado.
```

### 15 — Diptongo vs. hiato

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "avanzado"
  tags: ["diptongo", "hiato"]

variables:
  palabras: ["cielo", "país"]
  tipos: ["diptongo", "hiato"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["diptongo", "hiato"]

enunciado: "En la palabra \"{palabras[idx]}\", las dos vocales juntas forman un..."

pasos:
  - "\"Cielo\": vocal fuerte+débil en la misma sílaba = diptongo. \"País\": vocal fuerte + débil tónica en sílabas distintas = hiato."

explicacion: |
  El diptongo mantiene las vocales en una sílaba; el hiato las separa
  en sílabas distintas.
```

### 16 — El hiato con vocal débil tónica lleva tilde

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "avanzado"
  tags: ["hiato", "regla"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En palabras como \"país\" o \"caída\", la vocal débil tónica lleva tilde aunque la palabra no cumpla la regla general de graves/agudas, específicamente para marcar el hiato."

pasos:
  - "Esa tilde no sigue la regla normal de acentuación, es una excepción para señalar que las vocales se separan en sílabas distintas."

explicacion: |
  Verdadero: el hiato con vocal débil tónica tiene una regla propia
  de tildación, distinta de la regla general.
```

### 17 — Clasificar y decidir tilde en un ejemplo

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "avanzado"
  tags: ["ortografia_y_tildacion", "practica"]

variables:
  palabras: ["facil", "cancion", "sabado"]
  correctas: ["fácil", "canción", "sábado"]
  idx: uno_de([0, 1, 2])

respuesta: correctas[idx]
tipo: completar

enunciado: "Escribí correctamente la palabra \"{palabras[idx]}\", agregando la tilde si corresponde."

pasos:
  - "Identificar la sílaba tónica, clasificar la palabra (aguda/grave/esdrújula) y aplicar la regla correspondiente."

explicacion: |
  Cada palabra requiere aplicar la regla de tildación según su
  clasificación específica.
```

### 18 — Ordenar el proceso para decidir si una palabra lleva tilde

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["ortografia_y_tildacion", "metodo"]

enunciado: "Ordená los pasos para decidir si una palabra necesita tilde."
tipo: ordenar
opciones_explicitas:
  - "Identificar la sílaba tónica de la palabra"
  - "Contar su posición (última, penúltima, antepenúltima o antes) para clasificarla"
  - "Revisar en qué letra termina la palabra"
  - "Aplicar la regla correspondiente a esa clasificación (aguda/grave/esdrújula/sobresdrújula)"
respuesta_orden: ["Identificar la sílaba tónica de la palabra", "Contar su posición (última, penúltima, antepenúltima o antes) para clasificarla", "Revisar en qué letra termina la palabra", "Aplicar la regla correspondiente a esa clasificación (aguda/grave/esdrújula/sobresdrújula)"]
explicacion: |
  El proceso parte de identificar la sílaba tónica, la base de toda
  la tildación en español.
```

### 19 — Tildación como prerrequisito de puntuación

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "avanzado"
  tags: ["ortografia_y_tildacion", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de puntuar correctamente una oración, hace falta poder escribir bien cada palabra que la compone, incluida su tildación."

pasos:
  - "Ver `../signos-de-puntuacion/`: la corrección formal avanza de la palabra individual a la oración completa."

explicacion: |
  Verdadero: por eso ortografía y tildación es prerrequisito directo
  de signos de puntuación, el siguiente tema de la cadena.
```

### 20 — Aplicación: evitar ambigüedad con la tildación correcta

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "avanzado"
  tags: ["ortografia_y_tildacion", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Escribir \"¿Dónde estás?\" con tilde diacrítica en vez de \"donde\" sin tilde evita que se confunda una pregunta con una oración relativa (\"el lugar donde estás\")."

pasos:
  - "La tilde diacrítica marca específicamente el uso interrogativo o exclamativo de esas palabras."

explicacion: |
  Verdadero: aplicar correctamente la tildación diacrítica evita
  ambigüedades reales de sentido en la escritura.
```
