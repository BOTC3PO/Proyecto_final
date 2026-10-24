# Lengua — coordinadas distributivas (cuestionario, 26 preguntas VBLang)

> Tema: `lengua/coordinadas-distributivas`. Ver `teoria.md` en esta misma carpeta. Reescrito 2026-09-07: el crudo generado con qwen/qwen3.6-35b-a3b definía la distributiva a partir de verbos recíprocos ("pelearse", "saludarse") y de la ambigüedad de "y", un concepto inexistente en la gramática real. La coordinación distributiva se marca con **pares correlativos** ("ya... ya...", "unos... otros...", "bien... bien...", "ora... ora...", "éste... aquél...") sin nexo conjuntivo, y este archivo fue reescrito para reflejar eso. Cada pregunta validada con parse+lint+compile+generate real de packages/vblang.

---

### 1 — pregunta 1

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["definicion", "pares-correlativos"]

variables:
  op_a: "un nexo como 'y' u 'o'"
  op_b: "la repetición de una palabra correlativa ('ya... ya...', 'unos... otros...')"
  op_c: "una coma sin ninguna palabra que se repita"
  op_d: "el uso de 'pero' o 'sino'"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Qué marca principalmente a la coordinación distributiva, a diferencia de la copulativa, la disyuntiva y la adversativa?"

explicacion: |
  La distributiva no usa un nexo conjuntivo único: se reconoce por la repetición de una palabra correlativa al inicio de cada proposición ("ya... ya...", "unos... otros...", "bien... bien...", "ora... ora...").
```

### 2 — pregunta 2

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["ejemplo", "ya-ya"]

variables:
  estado1: uno_de(["ríe", "canta", "duda"])
  estado2: uno_de(["llora", "calla", "afirma"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Ya {estado1}, ya {estado2}', la repetición de 'ya' marca una coordinación distributiva que alterna entre dos momentos o estados."

explicacion: |
  Correcto. El par correlativo "ya... ya..." indica que el sujeto alterna entre esos estados en distintos momentos, sin que haya un nexo como "y" u "o" uniéndolos.
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["ejemplo", "unos-otros"]

variables:
  grupo: uno_de(["Los alumnos", "Los vecinos", "Los jugadores"])
  accion1: uno_de(["cantan", "estudian", "corren"])
  accion2: uno_de(["bailan", "dibujan", "descansan"])

respuesta: "unos... otros..."
tipo: completar

enunciado: "'{grupo}: unos {accion1}, otros {accion2}' reparte la acción entre dos subgrupos mediante el par correlativo:"

explicacion: |
  El par "unos... otros..." distribuye la acción entre distintos miembros del mismo grupo: una parte hace una cosa, otra parte hace otra, simultáneamente.
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["distincion", "copulativa"]

variables:
  nombre1: uno_de(["Juan", "Pedro", "Luis"])
  nombre2: uno_de(["María", "Ana", "Sofía"])
  accion1: uno_de(["estudia", "lee", "escribe"])
  accion2: uno_de(["cocina", "canta", "pinta"])

respuesta: falso
tipo: vf

enunciado: "En '{nombre1} {accion1} y {nombre2} {accion2}', hay coordinación distributiva porque cada sujeto realiza una acción distinta."

explicacion: |
  Falso. Es un error común confundir esto con la distributiva. Aquí solo hay dos proposiciones sumadas con "y" (copulativa); no hay ninguna palabra correlativa repetida. Que las acciones sean distintas no alcanza para que sea distributiva.
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["ejemplo", "bien-bien"]

variables:
  medio1: uno_de(["por las buenas", "con paciencia", "con esfuerzo"])
  medio2: uno_de(["por las malas", "con firmeza", "con tiempo"])

respuesta: "bien... bien..."
tipo: completar

enunciado: "'Lo resolveremos, bien {medio1}, bien {medio2}' usa el par correlativo:"

explicacion: |
  "Bien... bien..." es otro par correlativo productivo de la distributiva: presenta dos vías o modos posibles, distribuidos, sin un nexo conjuntivo.
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["ejemplo", "ora-ora", "registro"]

variables:
  clima1: uno_de(["llueve", "truena", "nubla"])
  clima2: uno_de(["escampa", "sale el sol", "aclara"])

respuesta: verdadero
tipo: vf

enunciado: "'Ora {clima1}, ora {clima2}' es un uso literario o arcaizante del par correlativo distributivo 'ora... ora...'."

explicacion: |
  Correcto. "Ora... ora..." funciona igual que "ya... ya..." pero con un registro más literario o arcaizante, típico de textos narrativos o poéticos.
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["distincion", "disyuntiva"]

variables:
  op_a: "La distributiva reparte la acción entre elementos o momentos con un par correlativo; la disyuntiva plantea una alternativa excluyente con 'o'/'u'."
  op_b: "Son exactamente lo mismo, solo cambia el nexo."
  op_c: "La disyuntiva siempre implica reciprocidad y la distributiva no."
  op_d: "La distributiva solo se usa con sujetos plurales y la disyuntiva no."

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Cuál es la diferencia real entre coordinación distributiva y disyuntiva?"

explicacion: |
  La disyuntiva ("o"/"u") presenta opciones donde se elige o se excluye una; la distributiva reparte la acción entre elementos o momentos distintos mediante un par correlativo, sin plantear una elección excluyente.
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["distincion", "adversativa"]

variables:
  elem1: uno_de(["El primero", "El más chico", "El del fondo"])
  elem2: uno_de(["el segundo", "el más grande", "el de adelante"])
  cualidad1: uno_de(["es tímido", "corre rápido", "estudia mucho"])
  cualidad2: uno_de(["es extrovertido", "corre lento", "estudia poco"])

respuesta: falso
tipo: vf

enunciado: "'{elem1} {cualidad1}, pero {elem2} {cualidad2}' es un ejemplo de coordinación distributiva porque compara dos elementos."

explicacion: |
  Falso. El nexo "pero" marca una coordinación adversativa (contraste), no distributiva. La distributiva no usa "pero"; usa pares correlativos repetidos como "ya... ya..." o "unos... otros...".
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["pares-correlativos", "reconocimiento"]

variables:
  n: random(2, 4)

respuesta: falso
tipo: vf

enunciado: "El par correlativo 'ni... ni...' (como en 'Ni {n} vino ni {n} llamó') es un caso de coordinación distributiva."

explicacion: |
  Falso. "Ni... ni..." es la forma negativa de la coordinación copulativa (niega ambos elementos por igual), no una coordinación distributiva. La distributiva reparte acciones o momentos distintos entre elementos, no niega lo mismo dos veces.
```

### 10 — pregunta 10

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["ejemplo", "demostrativos"]

variables:
  tema: uno_de(["el problema", "la película", "el partido"])
  opinion1: uno_de(["una cosa", "que estuvo bien", "que ganó el mejor"])
  opinion2: uno_de(["la contraria", "que estuvo mal", "que perdió el mejor"])

respuesta: "éste... aquél..."
tipo: completar

enunciado: "En 'Sobre {tema}, éste opina {opinion1}, aquél opina {opinion2}', el par correlativo demostrativo usado es:"

explicacion: |
  "Éste... aquél..." (o "uno... otro...") es un par correlativo demostrativo: distribuye opiniones o acciones distintas entre dos referentes ya mencionados o sobreentendidos.
```

### 11 — pregunta 11

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["puntuacion", "estructura"]

variables:
  par: uno_de(["ya... ya...", "unos... otros...", "bien... bien..."])

respuesta: verdadero
tipo: vf

enunciado: "Cuando se usa el par correlativo '{par}', las proposiciones distribuidas suelen ir separadas por comas, sin conjunción."

explicacion: |
  Correcto. A diferencia de la copulativa, disyuntiva y adversativa (que llevan un nexo como "y", "o" o "pero"), la distributiva no necesita conjunción: las proposiciones quedan yuxtapuestas y separadas por comas.
```

### 12 — pregunta 12

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["contexto-deportivo", "aplicacion"]

variables:
  causa1: uno_de(["la lluvia", "el viento", "el calor"])
  causa2: uno_de(["el cansancio", "las lesiones", "los nervios"])

respuesta: falso
tipo: vf

enunciado: "En 'El equipo, ya por {causa1}, ya por {causa2}, no pudo sostener el ritmo', la oración afirma con certeza cuál de las dos causas fue la responsable."

explicacion: |
  Falso. El par "ya... ya..." distribuye dos causas posibles sin afirmar cuál de las dos fue exactamente la responsable, ni excluir a la otra (a diferencia de una disyuntiva con 'o').
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["contexto-aula", "aplicacion"]

variables:
  lugar1: uno_de(["en el pizarrón", "en la carpeta", "en la computadora"])
  lugar2: uno_de(["en sus carpetas", "en el pizarrón", "en el cuaderno"])

respuesta: "unos... otros..."
tipo: completar

enunciado: "'Unos alumnos resuelven el ejercicio {lugar1}, otros lo hacen {lugar2}' reparte la actividad mediante el par:"

explicacion: |
  "Unos... otros..." reparte una misma actividad entre dos subgrupos que la realizan de forma distinta y simultánea, sin nexo conjuntivo.
```

### 14 — pregunta 14

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["copulativa", "distincion"]

variables:
  sujeto1: uno_de(["El perro", "El gato", "El niño"])
  sujeto2: uno_de(["el gato", "el niño", "el perro"])
  cualidad: uno_de(["es grande", "es rápido", "es curioso"])

respuesta: falso
tipo: vf

enunciado: "'{sujeto1} y {sujeto2} {cualidad}' es una coordinación distributiva porque hay dos sujetos distintos."

explicacion: |
  Falso. Tener dos sujetos unidos por "y" no basta para que sea distributiva: eso sigue siendo copulativa (suma de sujetos). La distributiva se reconoce por el par correlativo repetido ("ya... ya...", "unos... otros..."), no por la mera presencia de dos sujetos.
```

### 15 — pregunta 15

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["reconocimiento", "opciones"]

variables:
  op_a: "unos... otros..."
  op_b: "y... también..."
  op_c: "porque... entonces..."
  op_d: "si... entonces..."

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Cuál de las siguientes es una pareja correlativa real de la coordinación distributiva?"

explicacion: |
  "Unos... otros..." es un par correlativo distributivo reconocido. Las otras opciones no son pares correlativos de coordinación distributiva en la gramática del español.
```

### 16 — pregunta 16

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["analisis", "sujeto"]

variables:
  n1: random(2, 5)
  n2: random(2, 5)
  total: n1 + n2

respuesta: total
tipo: input

enunciado: "Si en un curso 'unos {n1} alumnos resuelven en el pizarrón, otros {n2} lo hacen en la carpeta', ¿cuántos alumnos en total participan de la actividad distribuida?"

explicacion: |
  {n1} + {n2} = {total}. Aunque la actividad está distribuida entre dos subgrupos (par "unos... otros..."), ambos forman parte del mismo curso, así que se suman.
```

### 17 — pregunta 17

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["ejemplo", "no-distributiva"]

variables:
  sujeto1: uno_de(["Los profesores", "Los directivos", "Los preceptores"])
  sujeto2: uno_de(["los alumnos", "las familias", "los tutores"])
  accion: uno_de(["se saludaron", "se reunieron", "conversaron"])

respuesta: falso
tipo: vf

enunciado: "'{sujeto1} y {sujeto2} {accion}' es distributiva porque el verbo describe una acción entre dos grupos."

explicacion: |
  Falso. Que el verbo implique interacción entre los sujetos (verbos recíprocos como "saludarse") no la convierte en distributiva; eso es un fenómeno léxico del verbo, no una categoría de coordinación. Sigue siendo copulativa: no hay par correlativo repetido.
```

### 18 — pregunta 18

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["definicion", "nexo-ausente"]

variables:
  op_a: "Que siempre lleva 'y' repetido dos veces."
  op_b: "Que no necesita un nexo conjuntivo único; la marca es la palabra correlativa repetida."
  op_c: "Que solo puede tener dos proposiciones, nunca más."
  op_d: "Que siempre describe acciones recíprocas entre personas."

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Qué es correcto decir sobre la coordinación distributiva?"

explicacion: |
  Su rasgo distintivo es la ausencia de un nexo único: se marca con la repetición de una palabra correlativa ("ya... ya...", "bien... bien...", etc.), no con "y" ni con verbos recíprocos.
```

### 19 — pregunta 19

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["comparacion", "copulativa"]

variables:
  op_a: "La copulativa suma con un nexo ('y'/'ni'); la distributiva reparte con un par correlativo repetido, sin nexo."
  op_b: "No hay diferencia real entre ambas."
  op_c: "La copulativa nunca puede tener más de un sujeto."
  op_d: "La distributiva siempre requiere verbos en pasado."

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿En qué se diferencia estructuralmente la coordinación distributiva de la copulativa?"

explicacion: |
  La copulativa suma elementos con un nexo fijo ("y", "e", "ni"). La distributiva no tiene nexo: reparte la acción o cualidad usando una palabra correlativa que se repite al inicio de cada proposición.
```

### 20 — pregunta 20

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["contexto-argentino", "aplicacion"]

variables:
  motivo1: uno_de(["por gusto", "por necesidad", "por curiosidad"])
  motivo2: uno_de(["por obligación", "por costumbre", "por consejo"])

respuesta: "ya... ya..."
tipo: completar

enunciado: "'Ya {motivo1}, ya {motivo2}, mucha gente elige estudiar de noche' usa el par correlativo:"

explicacion: |
  "Ya... ya..." distribuye dos motivos posibles sin afirmar cuál aplica en cada caso ni excluir al otro.
```

### 21 — pregunta 21

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["identificacion", "no-distributiva"]

variables:
  op_a: "'Ya ríe, ya llora.'"
  op_b: "'Juan estudia y María trabaja.'"
  op_c: "'Unos cantan, otros bailan.'"
  op_d: "'Bien por las buenas, bien por las malas.'"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Cuál de estas oraciones NO es un ejemplo de coordinación distributiva?"

explicacion: |
  "Juan estudia y María trabaja" es una coordinación copulativa (nexo "y", sin par correlativo repetido). Las otras tres sí presentan pares correlativos ("ya... ya...", "unos... otros...", "bien... bien...").
```

### 22 — pregunta 22

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["repeticion", "correlativos"]

variables:
  par_valido: uno_de(["ya... ya...", "unos... otros...", "bien... bien...", "ora... ora..."])

respuesta: verdadero
tipo: vf

enunciado: "El par correlativo '{par_valido}' funciona sin necesidad de una conjunción como 'y' u 'o' entre las proposiciones."

explicacion: |
  Correcto. Ese es precisamente el rasgo definitorio de la distributiva: la palabra correlativa repetida reemplaza la función de un nexo conjuntivo.
```

### 23 — pregunta 23

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["registro", "literario"]

variables:
  op_a: "'ora... ora...', de uso más literario o arcaizante"
  op_b: "'y... y...', de uso exclusivamente coloquial"
  op_c: "'o sea... o sea...', propio de textos legales"
  op_d: "'pero... pero...', típico de discursos formales"

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Cuál de estos pares correlativos tiene un registro más literario o arcaizante?"

explicacion: |
  "Ora... ora..." (como en 'Ora llueve, ora escampa') es el par correlativo distributivo de uso más literario o arcaizante, equivalente en función a "ya... ya...".
```

### 24 — pregunta 24

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["error-comun", "reciprocidad"]

variables:
  verbo: uno_de(["se pelearon", "se abrazaron", "se saludaron"])
  sujeto1: uno_de(["Juan", "Pedro", "Luis"])
  sujeto2: uno_de(["Carlos", "Diego", "Martín"])

respuesta: falso
tipo: vf

enunciado: "'{sujeto1} y {sujeto2} {verbo}' es una coordinación distributiva porque el verbo recíproco reparte la acción entre ambos sujetos."

explicacion: |
  Falso. La reciprocidad es una propiedad léxica del verbo (verbos pronominales recíprocos), no una categoría de coordinación. La oración sigue siendo copulativa: dos núcleos de sujeto unidos por "y", sin par correlativo repetido.
```

### 25 — pregunta 25

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["sintesis", "definicion"]

variables:
  op_a: "Distributiva"
  op_b: "Copulativa"
  op_c: "Disyuntiva"
  op_d: "Adversativa"

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "'Unos llegan temprano, otros llegan tarde' es un ejemplo de coordinación:"

explicacion: |
  Es distributiva: el par correlativo "unos... otros..." reparte la acción de llegar entre dos subgrupos, sin nexo conjuntivo entre las proposiciones.
```

### 26 — pregunta 26

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["repaso-general", "las-cuatro-coordinaciones"]

variables:
  op_a: "Copulativa: 'y'/'e'/'ni'; Disyuntiva: 'o'/'u'; Adversativa: 'pero'/'sino'; Distributiva: par correlativo repetido, sin nexo."
  op_b: "Las cuatro coordinaciones usan siempre el mismo nexo 'y'."
  op_c: "Solo la distributiva admite más de dos proposiciones."
  op_d: "La adversativa y la distributiva son la misma categoría con distinto nombre."

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Cuál resume correctamente las cuatro coordinaciones (copulativa, disyuntiva, adversativa, distributiva)?"

explicacion: |
  Cada una se marca por su propio nexo (o su ausencia): copulativa suma con "y"/"e"/"ni", disyuntiva alterna con "o"/"u", adversativa contrasta con "pero"/"sino", y distributiva reparte con un par correlativo repetido, sin nexo conjuntivo.
```
