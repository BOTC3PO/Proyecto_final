# Lengua — Oraciones negativas e interrogativas (cuestionario, 20 preguntas VBLang)

> Tema: `P7C`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Formar una oración negativa

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

### 2 — Doble negación en español

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

### 3 — Convertir afirmativa en interrogativa total

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

### 4 — Identificar interrogativa total vs. parcial

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

### 5 — Palabra interrogativa para el objeto directo

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

### 6 — Palabra interrogativa para el sujeto

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

### 7 — Palabra interrogativa para el circunstancial de tiempo

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

### 8 — Palabra interrogativa para el circunstancial de lugar

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

### 9 — Palabra interrogativa para el circunstancial de modo

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

### 10 — Todas las palabras interrogativas llevan tilde

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

### 11 — Combinar negación e interrogación

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

### 12 — La negación no cambia sujeto/predicado

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

### 13 — Palabras negativas además de "no"

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

### 14 — Elegir la palabra interrogativa correcta

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

### 15 — Interrogativa total no lleva palabra interrogativa

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

### 16 — Respuesta esperada según tipo de interrogativa

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

### 17 — Negación de doble complemento

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

### 18 — Preguntar por el objeto indirecto

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

### 19 — Ordenar los pasos para formular una interrogativa parcial

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
respuesta_orden: ["Identificar el circunstancial de lugar en la oración afirmativa", "Reemplazarlo por la palabra interrogativa \"dónde\"", "Ubicar \"dónde\" al inicio de la oración", "Agregar los signos de interrogación"]
explicacion: |
  Se identifica el complemento, se reemplaza por su palabra
  interrogativa, se la antepone y se cierra con los signos de
  pregunta.
```

### 20 — Aplicación: preguntas para pedir información

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
