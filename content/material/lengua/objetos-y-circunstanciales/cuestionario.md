# Lengua — Objetos y circunstanciales (cuestionario, 20 preguntas VBLang)

> Tema: `P7`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Identificar el objeto directo

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["objeto_directo", "reconocimiento"]

variables:
  frases: ["Juan compró el pan", "María leyó el libro", "Pedro rompió la ventana", "Ana pintó la pared"]
  ods: ["el pan", "el libro", "la ventana", "la pared"]
  idx: uno_de([0, 1, 2, 3])

respuesta: ods[idx]
tipo: completar

enunciado: "En la oración \"{frases[idx]}\", ¿cuál es el objeto directo?"

pasos:
  - "El OD es lo que recibe la acción directamente: se lo puede reemplazar por lo/la/los/las."

explicacion: |
  El objeto directo responde a "¿qué cosa?" y se reemplaza por un
  pronombre (lo/la/los/las).
```

### 2 — Pronombre de reemplazo del OD

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["objeto_directo", "pronombres"]

variables:
  ods: ["el pan", "los libros", "la ventana", "las cartas"]
  pronombres: ["lo", "los", "la", "las"]
  idx: uno_de([0, 1, 2, 3])

respuesta: pronombres[idx]
tipo: completar

enunciado: "Para reemplazar el objeto directo \"{ods[idx]}\" por un pronombre, se usa..."

pasos:
  - "El pronombre concuerda en género y número con el sustantivo reemplazado."

explicacion: |
  lo/la para singular, los/las para plural, según el género del
  sustantivo reemplazado.
```

### 3 — Identificar el objeto indirecto

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["objeto_indirecto", "reconocimiento"]

variables:
  frases: ["Juan le regaló un libro a María", "El profesor les explicó el tema a los alumnos", "Ana le escribió una carta a su abuela", "Le dieron un premio al ganador"]
  ois: ["a María", "a los alumnos", "a su abuela", "al ganador"]
  idx: uno_de([0, 1, 2, 3])

respuesta: ois[idx]
tipo: completar

enunciado: "En la oración \"{frases[idx]}\", ¿cuál es el objeto indirecto?"

pasos:
  - "El OI es el destinatario/beneficiario de la acción, siempre con preposición \"a\"."
  - "Se reemplaza por le/les."

explicacion: |
  El objeto indirecto responde a "¿a quién?"/"¿para quién?" y se
  reemplaza por le/les.
```

### 4 — Pronombre de reemplazo del OI

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["objeto_indirecto", "pronombres"]

variables:
  destinatarios: ["a María", "a los alumnos", "a mi hermano"]
  pronombres: ["le", "les", "le"]
  idx: uno_de([0, 1, 2])

respuesta: pronombres[idx]
tipo: completar

enunciado: "El objeto indirecto \"{destinatarios[idx]}\" se reemplaza por el pronombre..."

pasos:
  - "le para singular, les para plural, sin distinguir género."

explicacion: |
  A diferencia del OD, el OI no distingue género: siempre es
  le (singular) o les (plural).
```

### 5 — OD con persona: lleva "a" pero sigue siendo OD

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "intermedio"
  tags: ["objeto_directo", "od_de_persona"]

variables:
  frases: ["Vi a María en el parque", "Saludé a mi profesor", "Llamé a mi amigo"]
  pronombres: ["la vi", "lo saludé", "lo llamé"]
  idx: uno_de([0, 1, 2])

respuesta: pronombres[idx]
tipo: mc
opciones_explicitas: [pronombres[idx], "le vi", "les saludé", "le llamé"]

enunciado: "En \"{frases[idx]}\", el complemento con \"a\" es un OD de persona. ¿Cómo queda la oración al reemplazarlo por el pronombre correcto?"

pasos:
  - "Aunque lleve \"a\", si responde \"¿a quién?\" en sentido de OD (no de destinatario), se reemplaza por lo/la/los/las, no por le/les."

explicacion: |
  El OD de persona lleva "a" (a María, a mi profesor) pero sigue
  siendo OD: se reemplaza por lo/la/los/las, nunca por le/les.
```

### 6 — Distinguir OD de persona vs. OI

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "intermedio"
  tags: ["objeto_directo", "objeto_indirecto", "diferenciacion"]

variables:
  casos: ["Vi a María", "Le regalé un libro a María"]
  tipos: ["objeto directo", "objeto indirecto"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["objeto directo", "objeto indirecto"]

enunciado: "En \"{casos[idx]}\", el complemento \"a María\" es..."

pasos:
  - "Si María recibe directamente la acción del verbo (vi A MARÍA), es OD."
  - "Si María es destinataria de algo que se le da/dice/cuenta, es OI."

explicacion: |
  "Vi a María": María es lo que se ve → OD. "Le regalé un libro a
  María": María recibe el libro, no la acción del regalo en sí → OI.
```

### 7 — Circunstancial de lugar

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["circunstancial", "lugar"]

variables:
  frases: ["Juan estudió en la biblioteca", "Ana durmió en su casa", "Los chicos jugaron en el patio"]
  ccs: ["en la biblioteca", "en su casa", "en el patio"]
  idx: uno_de([0, 1, 2])

respuesta: ccs[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el circunstancial y de qué tipo es (lugar)?"

pasos:
  - "Preguntar ¿dónde? para encontrar el CC de lugar."

explicacion: |
  El CC de lugar responde a "¿dónde?".
```

### 8 — Circunstancial de tiempo

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["circunstancial", "tiempo"]

variables:
  frases: ["Juan llegó ayer", "María se fue temprano", "El examen es mañana"]
  ccs: ["ayer", "temprano", "mañana"]
  idx: uno_de([0, 1, 2])

respuesta: ccs[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el circunstancial de tiempo?"

pasos:
  - "Preguntar ¿cuándo? para encontrar el CC de tiempo."

explicacion: |
  El CC de tiempo responde a "¿cuándo?".
```

### 9 — Circunstancial de modo

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["circunstancial", "modo"]

variables:
  frases: ["Juan estudió con dedicación", "María habló despacio", "El equipo jugó bien"]
  ccs: ["con dedicación", "despacio", "bien"]
  idx: uno_de([0, 1, 2])

respuesta: ccs[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el circunstancial de modo?"

pasos:
  - "Preguntar ¿cómo? para encontrar el CC de modo."

explicacion: |
  El CC de modo responde a "¿cómo?".
```

### 10 — Identificar el tipo de circunstancial

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "intermedio"
  tags: ["circunstancial", "clasificacion"]

variables:
  ccs: ["en la biblioteca", "ayer", "con dedicación", "por miedo", "mucho"]
  tipos: ["lugar", "tiempo", "modo", "causa", "cantidad"]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["lugar", "tiempo", "modo", "causa", "cantidad"]

enunciado: "El circunstancial \"{ccs[idx]}\" es de tipo..."

pasos:
  - "Cada CC responde a una pregunta distinta: dónde/cuándo/cómo/por qué/cuánto."

explicacion: |
  lugar → ¿dónde?, tiempo → ¿cuándo?, modo → ¿cómo?, causa → ¿por
  qué?, cantidad → ¿cuánto?.
```

### 11 — Puede haber varios CC a la vez

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "intermedio"
  tags: ["circunstancial", "multiplicidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una misma oración puede tener varios circunstanciales al mismo tiempo (de modo, lugar y tiempo juntos, por ejemplo)."

pasos:
  - "A diferencia del OD y el OI (que suelen ser uno solo por verbo), los CC se pueden acumular libremente."

explicacion: |
  Verdadero: "Juan estudió con dedicación en la biblioteca ayer"
  tiene CC de modo, lugar y tiempo en la misma oración.
```

### 12 — El OD no lleva preposición (salvo con personas)

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["objeto_directo", "preposicion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El objeto directo siempre necesita una preposición para formarse."

pasos:
  - "\"Juan compró el pan\": \"el pan\" es OD sin ninguna preposición."

explicacion: |
  Falso. El OD normalmente no lleva preposición ("compró el pan");
  sólo lleva "a" cuando es una persona ("vi a María").
```

### 13 — El OI siempre lleva preposición

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["objeto_indirecto", "preposicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El objeto indirecto siempre lleva la preposición \"a\" (o \"para\")."

pasos:
  - "\"Le regaló un libro a María\": \"a María\" no puede faltar la preposición."

explicacion: |
  Verdadero: el OI siempre se introduce con "a" o "para".
```

### 14 — Coexistencia de OD y OI

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "intermedio"
  tags: ["objeto_directo", "objeto_indirecto", "coexistencia"]

variables:
  frases: ["Juan le regaló un libro a María", "Ana le contó un secreto a su amiga", "El profesor les entregó las notas a los alumnos"]
  ods: ["un libro", "un secreto", "las notas"]
  idx: uno_de([0, 1, 2])

respuesta: ods[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", además del objeto indirecto, hay un objeto directo. ¿Cuál es?"

pasos:
  - "Preguntar ¿qué cosa se regala/cuenta/entrega? para encontrar el OD, distinto del destinatario (OI)."

explicacion: |
  Un mismo verbo puede tener OD (lo que se da) y OI (a quién se le
  da) al mismo tiempo.
```

### 15 — Diferenciar OD de CC

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "intermedio"
  tags: ["objeto_directo", "circunstancial", "diferenciacion"]

variables:
  casos: ["compró el pan", "estudió con dedicación"]
  tipos: ["objeto directo", "circunstancial de modo"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["objeto directo", "circunstancial de modo"]

enunciado: "En la frase \"Juan {casos[idx]}\", el complemento subrayado es..."

pasos:
  - "Si se reemplaza por lo/la/los/las, es OD. Si responde ¿cómo?, es CC de modo."

explicacion: |
  "el pan" se reemplaza por "lo" (compró) → OD. "con dedicación"
  responde ¿cómo estudió? → CC de modo, no se reemplaza por un
  pronombre único.
```

### 16 — Circunstancial de causa

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "intermedio"
  tags: ["circunstancial", "causa"]

variables:
  frases: ["Juan faltó por enfermedad", "María llegó tarde por el tráfico"]
  ccs: ["por enfermedad", "por el tráfico"]
  idx: uno_de([0, 1])

respuesta: ccs[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el circunstancial de causa?"

pasos:
  - "Preguntar ¿por qué? para encontrar el CC de causa."

explicacion: |
  El CC de causa responde a "¿por qué?".
```

### 17 — Circunstancial de cantidad

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "intermedio"
  tags: ["circunstancial", "cantidad"]

variables:
  frases: ["Juan comió mucho", "María trabajó poco esta semana"]
  ccs: ["mucho", "poco"]
  idx: uno_de([0, 1])

respuesta: ccs[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el circunstancial de cantidad?"

pasos:
  - "Preguntar ¿cuánto? para encontrar el CC de cantidad."

explicacion: |
  El CC de cantidad responde a "¿cuánto?".
```

### 18 — Ordenar los pasos para reconocer el OD

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "basico"
  tags: ["objeto_directo", "metodo"]

enunciado: "Ordená los pasos para reconocer el objeto directo de una oración."
tipo: ordenar
opciones_explicitas:
  - "Ubicar el verbo de la oración"
  - "Preguntar \"¿qué cosa?\" después del verbo"
  - "Intentar reemplazar la respuesta por lo/la/los/las"
  - "Si el reemplazo tiene sentido, es objeto directo"
respuesta_orden: ["Ubicar el verbo de la oración", "Preguntar \"¿qué cosa?\" después del verbo", "Intentar reemplazar la respuesta por lo/la/los/las", "Si el reemplazo tiene sentido, es objeto directo"]
pasos:
  - "El reconocimiento sigue siempre el mismo método: verbo → pregunta → reemplazo → confirmación."

explicacion: |
  Se ubica el verbo, se pregunta "¿qué cosa?", se prueba el
  reemplazo por lo/la/los/las y si funciona, se confirma como OD.
```

### 19 — Verbos que piden OD y OI a la vez

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "avanzado"
  tags: ["objeto_directo", "objeto_indirecto", "verbos"]

variables:
  verbos: ["dar", "regalar", "contar", "prestar"]
  idx: uno_de([0, 1, 2, 3])

respuesta: verdadero
tipo: vf

enunciado: "El verbo \"{verbos[idx]}\" es de los que típicamente piden un objeto directo (lo que se da/regala/cuenta/presta) y un objeto indirecto (a quién) al mismo tiempo."

pasos:
  - "\"Le {verbos[idx]} algo a alguien\": \"algo\" = OD, \"a alguien\" = OI."

explicacion: |
  Verbos como dar, regalar, contar y prestar necesitan naturalmente
  los dos complementos: qué se da (OD) y a quién (OI).
```

### 20 — Para qué sirve reconocer estos complementos

```
metadata:
  materia: "lengua"
  tema: "objetos_y_circunstanciales"
  nivel: "avanzado"
  tags: ["objetos_y_circunstanciales", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Reconocer el objeto directo es necesario para entender cómo se forma la voz pasiva, porque el OD de la oración activa pasa a ser el sujeto de la oración pasiva."

pasos:
  - "\"Juan compró el pan\" (OD: el pan) → \"El pan fue comprado por Juan\" (sujeto: el pan)."

explicacion: |
  Verdadero: identificar el OD es el paso previo indispensable para
  pasar una oración de voz activa a voz pasiva, tema siguiente de la
  currícula.
```
