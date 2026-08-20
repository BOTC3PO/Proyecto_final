# Examen jefe — Maestro de la Gramática

> Logro #91. Aprobaste el parcial dominando sintaxis, ortografía y paratextos. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **102 preguntas totales** en 5/5 secciones.

---

## Sección: objetos-y-circunstanciales (20 preguntas)

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
respuesta_orden:
  - "Ubicar el verbo de la oración"
  - "Preguntar \"¿qué cosa?\" después del verbo"
  - "Intentar reemplazar la respuesta por lo/la/los/las"
  - "Si el reemplazo tiene sentido, es objeto directo"

pasos:
  - "El reconocimiento sigue siempre el mismo método: verbo → pregunta → reemplazo → confirmación."

explicacion: |
  Se ubica el verbo, se pregunta "¿qué cosa?", se prueba el
  reemplazo por lo/la/los/las y si funciona, se confirma como OD.
```

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

## Sección: oracion-compuesta-coordinacion-y-subordinacion (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "basico"
  tags: ["oracion_compuesta", "reconocimiento"]

variables:
  frases: ["Juan estudió", "Juan estudió y aprobó el examen", "María durmió", "Juan dijo que vendría"]
  tipos: ["simple", "compuesta", "simple", "compuesta"]
  idx: uno_de([0, 1, 2, 3])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["simple", "compuesta"]

enunciado: "\"{frases[idx]}\" es una oración..."

pasos:
  - "Contar los verbos conjugados: uno solo = simple, dos o más = compuesta."

explicacion: |
  Una oración compuesta combina dos o más proposiciones (cada una con
  su propio verbo conjugado).
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "basico"
  tags: ["coordinacion", "copulativa"]

variables:
  frases: ["Juan estudió y aprobó", "María cantó y bailó", "Ni estudió ni aprobó"]
  nexos: ["y", "y", "ni...ni"]
  idx: uno_de([0, 1, 2])

respuesta: nexos[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el nexo coordinante copulativo?"

pasos:
  - "Los nexos copulativos suman ideas: y, ni."

explicacion: |
  La coordinación copulativa suma dos proposiciones con "y" (o "ni"
  para sumar en negativo).
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "basico"
  tags: ["coordinacion", "disyuntiva"]

variables:
  frases: ["Estudiás o repetís", "Vas al cine o te quedás en casa"]
  idx: uno_de([0, 1])

respuesta: "o"
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el nexo coordinante que marca una opción entre dos alternativas?"

pasos:
  - "El nexo disyuntivo presenta alternativas excluyentes: o."

explicacion: |
  La coordinación disyuntiva presenta dos opciones con "o".
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "basico"
  tags: ["coordinacion", "adversativa"]

variables:
  frases: ["Estudió pero no aprobó", "No fue al cine sino que se quedó en casa"]
  nexos: ["pero", "sino"]
  idx: uno_de([0, 1])

respuesta: nexos[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el nexo coordinante que marca contraste?"

pasos:
  - "Los nexos adversativos contrastan ideas: pero, sino."

explicacion: |
  La coordinación adversativa contrasta dos ideas con "pero" o
  "sino".
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["coordinacion", "clasificacion"]

variables:
  frases: ["Juan estudió y aprobó", "Estudiás o repetís", "Estudió pero no aprobó"]
  tipos: ["copulativa", "disyuntiva", "adversativa"]
  idx: uno_de([0, 1, 2])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["copulativa", "disyuntiva", "adversativa"]

enunciado: "La coordinación en \"{frases[idx]}\" es de tipo..."

pasos:
  - "y/ni = copulativa, o = disyuntiva, pero/sino = adversativa."

explicacion: |
  El nexo usado determina el tipo de coordinación: suma (copulativa),
  opción (disyuntiva) o contraste (adversativa).
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["subordinacion", "reconocimiento"]

variables:
  frases: ["Juan dijo que vendría", "Juan estudió y aprobó"]
  tipos: ["subordinada", "coordinada"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["subordinada", "coordinada"]

enunciado: "\"{frases[idx]}\" combina sus proposiciones por..."

pasos:
  - "Si al separar las proposiciones una queda incompleta o sin sentido, es subordinación."

explicacion: |
  En la subordinación, una proposición depende gramaticalmente de la
  otra; en la coordinación, son independientes.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["subordinacion", "reconocimiento"]

variables:
  frases: ["Juan dijo que vendría", "El libro que compré es bueno", "Llegó cuando terminó la clase"]
  subordinadas: ["que vendría", "que compré", "cuando terminó la clase"]
  idx: uno_de([0, 1, 2])

respuesta: subordinadas[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es la proposición subordinada?"

pasos:
  - "La subordinada es la que no tiene sentido completo por sí sola, separada de la principal."

explicacion: |
  La proposición subordinada cumple una función dentro de la
  principal (sujeto, OD, modificador o circunstancial).
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["subordinacion", "sustantiva"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En \"Creo que vendrá\", la proposición \"que vendrá\" funciona como objeto directo de \"creo\" (¿qué creo? → que vendrá)."

pasos:
  - "La subordinada sustantiva ocupa el lugar de un sustantivo/OD en la oración principal."

explicacion: |
  Verdadero: es el ejemplo clásico de subordinada sustantiva con
  función de OD.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "avanzado"
  tags: ["subordinacion", "sustantiva"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En \"Que llueva me preocupa\", la proposición \"que llueva\" funciona como sujeto de \"preocupa\"."

pasos:
  - "¿Qué me preocupa? → que llueva. Cumple función de sujeto, no de OD."

explicacion: |
  Verdadero: una subordinada sustantiva también puede ocupar el lugar
  del sujeto, no sólo del OD.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["subordinacion", "adjetiva"]

variables:
  frases: ["El libro que compré es bueno", "La casa donde vivo es grande"]
  modificados: ["libro", "casa"]
  idx: uno_de([0, 1])

respuesta: modificados[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", la subordinada adjetiva modifica al sustantivo..."

pasos:
  - "La subordinada adjetiva funciona como un adjetivo: modifica directamente a un sustantivo de la principal."

explicacion: |
  La subordinada adjetiva suele empezar con \"que\"/\"quien\"/\"donde\"
  y modifica al sustantivo inmediatamente anterior.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["subordinacion", "adverbial"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En \"Llegó cuando terminó la clase\", la proposición \"cuando terminó la clase\" funciona como circunstancial de tiempo de \"llegó\"."

pasos:
  - "¿Cuándo llegó? → cuando terminó la clase. Cumple función de CC de tiempo."

explicacion: |
  Verdadero: la subordinada adverbial cumple la misma función que un
  circunstancial simple, pero con su propio verbo.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "avanzado"
  tags: ["subordinacion", "clasificacion"]

variables:
  frases: ["Creo que vendrá", "El libro que compré es bueno", "Llegó cuando terminó la clase"]
  tipos: ["sustantiva", "adjetiva", "adverbial"]
  idx: uno_de([0, 1, 2])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["sustantiva", "adjetiva", "adverbial"]

enunciado: "La subordinada de \"{frases[idx]}\" es de tipo..."

pasos:
  - "Sustantiva = función de sustantivo (sujeto/OD). Adjetiva = modifica un sustantivo. Adverbial = función de circunstancial."

explicacion: |
  El tipo de subordinada depende de qué función cumple dentro de la
  oración principal.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["coordinacion", "subordinacion", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si al separar una oración compuesta en dos, ambas partes tienen sentido completo por sí solas, se trata de coordinación (no de subordinación)."

pasos:
  - "\"Juan estudió y aprobó\" → \"Juan estudió.\" + \"Aprobó.\" (ambas completas) = coordinación."

explicacion: |
  Verdadero: esa es exactamente la prueba práctica para distinguir
  coordinación de subordinación.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["subordinacion", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "\"Que vendría\", separada de \"Juan dijo que vendría\", tiene sentido completo por sí sola."

pasos:
  - "\"Que vendría\" sola no dice quién dijo qué; necesita la principal para completarse."

explicacion: |
  Falso: la marca de la subordinación es justamente que la
  subordinada NO se sostiene sola gramaticalmente.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "avanzado"
  tags: ["subordinacion", "nexos"]

variables:
  frases: ["Juan dijo que vendría", "El libro que compré es bueno", "Llegó cuando terminó la clase", "Iré si tengo tiempo"]
  nexos: ["que", "que", "cuando", "si"]
  idx: uno_de([0, 1, 2, 3])

respuesta: nexos[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el nexo subordinante?"

pasos:
  - "Los nexos subordinantes típicos son: que, cuando, donde, como, si, porque, aunque."

explicacion: |
  El nexo subordinante introduce la proposición subordinada y marca
  su dependencia de la principal.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["coordinacion", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En la coordinación, ninguna de las dos proposiciones depende gramaticalmente de la otra: ambas están al mismo nivel."

pasos:
  - "\"Juan estudió y aprobó\": \"aprobó\" no cumple ninguna función DENTRO de \"Juan estudió\", están simplemente unidas."

explicacion: |
  Verdadero: la coordinación une proposiciones independientes,
  a diferencia de la subordinación donde una depende de la otra.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["coordinacion", "nexos"]

variables:
  nexos: ["y", "ni", "o", "pero", "sino"]
  tipos: ["copulativa", "copulativa", "disyuntiva", "adversativa", "adversativa"]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["copulativa", "disyuntiva", "adversativa"]

enunciado: "El nexo coordinante \"{nexos[idx]}\" es de tipo..."

pasos:
  - "y/ni suman, o presenta alternativas, pero/sino contrastan."

explicacion: |
  Cada nexo coordinante corresponde a un tipo fijo de relación entre
  las proposiciones.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "avanzado"
  tags: ["subordinacion", "funcion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Toda proposición subordinada cumple una función sintáctica concreta dentro de la oración principal (sujeto, objeto directo, modificador o circunstancial)."

pasos:
  - "Es justamente lo que la distingue de una coordinada: ocupa el lugar de una función gramatical específica."

explicacion: |
  Verdadero: por eso se clasifican según esa función (sustantiva,
  adjetiva, adverbial).
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["oracion_compuesta", "metodo"]

enunciado: "Ordená los pasos para clasificar una oración compuesta como coordinada o subordinada."
tipo: ordenar
opciones_explicitas:
  - "Contar los verbos conjugados para confirmar que es compuesta"
  - "Separar las proposiciones en dos oraciones independientes"
  - "Revisar si ambas tienen sentido completo por sí solas"
  - "Si ambas tienen sentido, es coordinación; si una queda incompleta, es subordinación"
respuesta_orden:
  - "Contar los verbos conjugados para confirmar que es compuesta"
  - "Separar las proposiciones en dos oraciones independientes"
  - "Revisar si ambas tienen sentido completo por sí solas"
  - "Si ambas tienen sentido, es coordinación; si una queda incompleta, es subordinación"

explicacion: |
  El método sigue el mismo orden que la prueba práctica de la teoría:
  contar verbos, separar, y evaluar si cada parte se sostiene sola.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "avanzado"
  tags: ["oracion_compuesta", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Combinar oraciones simples en compuestas (por coordinación o subordinación) permite escribir textos más fluidos, en vez de encadenar sólo oraciones cortas sueltas."

pasos:
  - "Un texto con sólo oraciones simples suena entrecortado; combinarlas con nexos mejora la cohesión."

explicacion: |
  Verdadero: dominar coordinación y subordinación es la base directa
  para la producción escrita compleja, tema siguiente en esta rama.
```

## Sección: oraciones-negativas-e-interrogativas (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "basico"
  tags: ["negacion"]

variables:
  afirmativas: ["Juan compró el pan", "María leyó el libro", "Los chicos jugaron al fútbol"]
  negativas: ["Juan no compró el pan", "María no leyó el libro", "Los chicos no jugaron al fútbol"]
  idx: uno_de([0, 1, 2])

respuesta: negativas[idx]
tipo: completar

enunciado: "Convertí en negativa la oración: \"{afirmativas[idx]}\""

pasos:
  - "Se agrega \"no\" inmediatamente antes del verbo."

explicacion: |
  La negación simple se forma con "no" antes del verbo conjugado.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "intermedio"
  tags: ["negacion", "doble_negacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En español, \"Juan no compró nada\" tiene dos negaciones (\"no\" y \"nada\") que se refuerzan entre sí, no se cancelan como en otros idiomas."

pasos:
  - "A diferencia del inglés (\"didn't buy anything\", sin doble negativo), el español permite y hasta exige la doble negación en muchos casos."

explicacion: |
  Verdadero: la doble negación en español es gramaticalmente correcta
  y refuerza el sentido negativo, no lo anula.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "basico"
  tags: ["interrogativa_total"]

variables:
  afirmativas: ["Juan compró el pan", "María leyó el libro"]
  interrogativas: ["¿Juan compró el pan?", "¿María leyó el libro?"]
  idx: uno_de([0, 1])

respuesta: interrogativas[idx]
tipo: completar

enunciado: "Convertí en pregunta total (se responde sí/no): \"{afirmativas[idx]}\""

pasos:
  - "Se agregan los signos de interrogación, sin cambiar el orden de las palabras."

explicacion: |
  La interrogativa total no necesita palabra interrogativa, sólo
  signos de pregunta (y entonación ascendente en el habla).
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "basico"
  tags: ["interrogativa_total", "interrogativa_parcial", "diferenciacion"]

variables:
  frases: ["¿Juan compró el pan?", "¿Qué compró Juan?", "¿Vino María?", "¿Cuándo vino María?"]
  tipos: ["total", "parcial", "total", "parcial"]
  idx: uno_de([0, 1, 2, 3])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["total", "parcial"]

enunciado: "\"{frases[idx]}\" es una interrogativa..."

pasos:
  - "Si se responde con sí/no, es total. Si pregunta por una parte específica con palabra interrogativa, es parcial."

explicacion: |
  Total: se responde sí/no. Parcial: usa una palabra interrogativa
  (qué, quién, cuándo...) y pide un dato específico.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "intermedio"
  tags: ["interrogativa_parcial", "objeto_directo"]

variables:
  n: uno_de([1, 1])

respuesta: "qué"
tipo: completar

enunciado: "Para preguntar por el objeto directo de una oración (\"¿... compró Juan?\" → \"el pan\"), se usa la palabra interrogativa..."

pasos:
  - "\"Qué\" apunta al objeto directo cuando es una cosa."

explicacion: |
  "Qué" pregunta por el OD (cosa). Para el OD de persona se usa
  "a quién".
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "intermedio"
  tags: ["interrogativa_parcial", "sujeto"]

variables:
  n: uno_de([1, 1])

respuesta: "quién"
tipo: completar

enunciado: "Para preguntar por el sujeto de \"Juan compró el pan\" (\"¿... compró el pan?\"), se usa la palabra interrogativa..."

pasos:
  - "\"Quién\" apunta al sujeto cuando es una persona."

explicacion: |
  "Quién(es)" pregunta por el sujeto (o por un complemento de
  persona), según el contexto.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "basico"
  tags: ["interrogativa_parcial", "circunstancial"]

variables:
  n: uno_de([1, 1])

respuesta: "cuándo"
tipo: completar

enunciado: "Para preguntar por el circunstancial de tiempo, se usa la palabra interrogativa..."

pasos:
  - "\"Cuándo\" apunta al CC de tiempo, igual que en el análisis de complementos."

explicacion: |
  Cada palabra interrogativa corresponde a la pregunta que se usa
  para reconocer ese complemento.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "basico"
  tags: ["interrogativa_parcial", "circunstancial"]

variables:
  n: uno_de([1, 1])

respuesta: "dónde"
tipo: completar

enunciado: "Para preguntar por el circunstancial de lugar, se usa la palabra interrogativa..."

pasos:
  - "\"Dónde\" apunta al CC de lugar."

explicacion: |
  "Dónde" pregunta específicamente por el lugar de la acción.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "basico"
  tags: ["interrogativa_parcial", "circunstancial"]

variables:
  n: uno_de([1, 1])

respuesta: "cómo"
tipo: completar

enunciado: "Para preguntar por el circunstancial de modo, se usa la palabra interrogativa..."

pasos:
  - "\"Cómo\" apunta al CC de modo."

explicacion: |
  "Cómo" pregunta específicamente por la manera en que ocurre la
  acción.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "basico"
  tags: ["interrogativa_parcial", "tildes"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las palabras interrogativas (qué, quién, cuándo, dónde, cómo, cuánto) siempre llevan tilde cuando forman parte de una pregunta."

pasos:
  - "\"¿Qué compró Juan?\" (con tilde) vs. \"Juan sabe que compró pan\" (\"que\" sin tilde, no es interrogativo)."

explicacion: |
  Verdadero: la tilde diacrítica distingue el uso interrogativo del
  uso no interrogativo de esas mismas palabras.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "avanzado"
  tags: ["negacion", "interrogativa", "combinacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una oración puede ser negativa e interrogativa a la vez, como \"¿Juan no compró el pan?\"."

pasos:
  - "Se combinan las dos transformaciones sobre la misma oración base."

explicacion: |
  Verdadero: negación e interrogación son transformaciones
  independientes que pueden aplicarse juntas.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "intermedio"
  tags: ["negacion", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Agregar \"no\" a una oración cambia su sentido pero no cambia cuál es el sujeto ni cuál es el predicado."

pasos:
  - "\"Juan compró el pan\" y \"Juan no compró el pan\" tienen el mismo sujeto (Juan) y el mismo OD (el pan)."

explicacion: |
  Verdadero: la negación es una transformación semántica (cambia el
  sentido) pero no toca la estructura sintáctica de base.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "intermedio"
  tags: ["negacion", "vocabulario"]

variables:
  frases: ["Nadie vino a la fiesta", "Juan nunca llega tarde", "No hay nada en la heladera"]
  palabras: ["Nadie", "nunca", "nada"]
  idx: uno_de([0, 1, 2])

respuesta: palabras[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es la palabra que aporta el sentido negativo (además de o en vez de \"no\")?"

pasos:
  - "Nadie, nunca, nada, ninguno son palabras negativas que pueden reemplazar o acompañar a \"no\"."

explicacion: |
  Además de "no", el español tiene palabras negativas propias:
  nadie, nunca, nada, ninguno/a, tampoco.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "intermedio"
  tags: ["interrogativa_parcial", "eleccion"]

variables:
  preguntas: ["¿... compró Juan?", "¿... compró el pan?", "¿... compró Juan el pan?", "¿... está la panadería?"]
  respuestas_esperadas: ["Qué", "Quién", "Cuándo", "Dónde"]
  idx: uno_de([0, 1, 2, 3])

respuesta: respuestas_esperadas[idx]
tipo: mc
opciones_explicitas: ["Qué", "Quién", "Cuándo", "Dónde", "Cómo"]

enunciado: "Completá con la palabra interrogativa correcta: \"{preguntas[idx]}\" (si la respuesta esperada apunta al {respuestas_esperadas[idx]})"

pasos:
  - "Identificar qué complemento se busca (OD, sujeto, tiempo, lugar) y elegir la palabra que le corresponde."

explicacion: |
  Cada palabra interrogativa apunta a un complemento específico de la
  oración base.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "intermedio"
  tags: ["interrogativa_total", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Toda oración interrogativa necesita una palabra interrogativa (qué, quién, cuándo...) para formarse."

pasos:
  - "\"¿Vino María?\" es interrogativa (total) sin ninguna palabra interrogativa, sólo con los signos de pregunta."

explicacion: |
  Falso: las interrogativas totales no llevan palabra interrogativa,
  sólo las parciales la necesitan.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "basico"
  tags: ["interrogativa_total", "interrogativa_parcial", "respuestas"]

variables:
  frases: ["¿Vino María?", "¿Cuándo vino María?"]
  tipos_respuesta: ["sí o no", "un dato específico (una fecha/momento)"]
  idx: uno_de([0, 1])

respuesta: tipos_respuesta[idx]
tipo: mc
opciones_explicitas: ["sí o no", "un dato específico (una fecha/momento)"]

enunciado: "La pregunta \"{frases[idx]}\" se responde con..."

pasos:
  - "Total → sí/no. Parcial → el dato puntual que pide la palabra interrogativa."

explicacion: |
  El tipo de interrogativa determina qué forma de respuesta se
  espera.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "avanzado"
  tags: ["negacion", "practica"]

variables:
  afirmativas: ["Juan le regaló un libro a María", "El profesor les explicó el tema a los alumnos"]
  negativas: ["Juan no le regaló un libro a María", "El profesor no les explicó el tema a los alumnos"]
  idx: uno_de([0, 1])

respuesta: negativas[idx]
tipo: completar

enunciado: "Convertí en negativa: \"{afirmativas[idx]}\""

pasos:
  - "El \"no\" se ubica antes del verbo, sin alterar OD ni OI de la oración."

explicacion: |
  La negación se agrega en un único lugar (antes del verbo) sin
  importar cuántos complementos tenga la oración.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "avanzado"
  tags: ["interrogativa_parcial", "objeto_indirecto"]

variables:
  n: uno_de([1, 1])

respuesta: "a quién"
tipo: completar

enunciado: "Para preguntar por el objeto indirecto de \"Juan le regaló un libro a María\" (\"¿... le regaló un libro Juan?\"), se usa..."

pasos:
  - "El OI es el destinatario, se pregunta con \"a quién\"."

explicacion: |
  "A quién" pregunta específicamente por el destinatario (OI), a
  diferencia de "quién" que pregunta por el sujeto.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "intermedio"
  tags: ["interrogativa_parcial", "metodo"]

enunciado: "Ordená los pasos para transformar una afirmativa en una pregunta parcial sobre su circunstancial de lugar."
tipo: ordenar
opciones_explicitas:
  - "Identificar el circunstancial de lugar en la oración afirmativa"
  - "Reemplazarlo por la palabra interrogativa \"dónde\""
  - "Ubicar \"dónde\" al inicio de la oración"
  - "Agregar los signos de interrogación"
respuesta_orden:
  - "Identificar el circunstancial de lugar en la oración afirmativa"
  - "Reemplazarlo por la palabra interrogativa \"dónde\""
  - "Ubicar \"dónde\" al inicio de la oración"
  - "Agregar los signos de interrogación"

explicacion: |
  Se identifica el complemento, se reemplaza por su palabra
  interrogativa, se la antepone y se cierra con los signos de
  pregunta.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "avanzado"
  tags: ["interrogativa_parcial", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Elegir bien la palabra interrogativa (qué/quién/cuándo/dónde/cómo/por qué/cuánto) permite pedir exactamente el dato que falta, sin tener que reformular toda la pregunta."

pasos:
  - "Cada palabra apunta a un complemento distinto: usar la incorrecta pide un dato distinto del que se busca."

explicacion: |
  Verdadero: elegir la palabra interrogativa correcta es lo que hace
  que la pregunta pida exactamente el dato faltante.
```

## Sección: ortografia-y-tildacion (20 preguntas)

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
respuesta_orden:
  - "Identificar la sílaba tónica de la palabra"
  - "Contar su posición (última, penúltima, antepenúltima o antes) para clasificarla"
  - "Revisar en qué letra termina la palabra"
  - "Aplicar la regla correspondiente a esa clasificación (aguda/grave/esdrújula/sobresdrújula)"

explicacion: |
  El proceso parte de identificar la sílaba tónica, la base de toda
  la tildación en español.
```

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

## Sección: paratextos (22 preguntas)

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
