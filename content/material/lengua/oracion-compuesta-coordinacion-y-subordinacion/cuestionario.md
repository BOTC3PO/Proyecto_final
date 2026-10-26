# Lengua — Oración compuesta: coordinación y subordinación (cuestionario, 20 preguntas VBLang)

> Tema: `P8`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Reconocer oración compuesta

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

### 2 — Identificar coordinación copulativa

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

### 3 — Identificar coordinación disyuntiva

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

### 4 — Identificar coordinación adversativa

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

### 5 — Clasificar el tipo de coordinación

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

### 6 — Reconocer subordinación

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

### 7 — Identificar la proposición subordinada

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

### 8 — Subordinada sustantiva como objeto directo

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

### 9 — Subordinada sustantiva como sujeto

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

### 10 — Subordinada adjetiva

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

### 11 — Subordinada adverbial de tiempo

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

### 12 — Clasificar el tipo de subordinada

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

### 13 — Prueba práctica coordinación vs. subordinación

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

### 14 — La subordinada no tiene sentido sola

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

### 15 — Nexos subordinantes comunes

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

### 16 — Coordinación no crea dependencia gramatical

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

### 17 — Múltiples nexos coordinantes en una lista

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

### 18 — Función de la subordinada dentro de la principal

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

### 19 — Ordenar el método para clasificar una compuesta

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
respuesta_orden: ["Contar los verbos conjugados para confirmar que es compuesta", "Separar las proposiciones en dos oraciones independientes", "Revisar si ambas tienen sentido completo por sí solas", "Si ambas tienen sentido, es coordinación; si una queda incompleta, es subordinación"]
explicacion: |
  El método sigue el mismo orden que la prueba práctica de la teoría:
  contar verbos, separar, y evaluar si cada parte se sostiene sola.
```

### 20 — Aplicación: variar la complejidad de un texto

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
