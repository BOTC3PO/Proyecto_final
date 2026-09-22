# Examen jefe — [PENDIENTE #661]

> Logro #661. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **122 preguntas totales** en 5/5 secciones.

---

## Sección: coordinadas-distributivas (26 preguntas)

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

## Sección: coordinadas-disyuntivas (28 preguntas)

```
metadata:
  materia: "lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "avanzado"
  tags: ["estilo", "estructura"]

variables:
  estructura: "ya... ya"
  ejemplo: "ya"

respuesta: "ya... ya"
tipo: input

enunciado: "En la expresión '______ llueve, ______ hace sol', ¿qué par de conjunciones disyuntivas se utiliza para enfatizar la alternancia de dos situaciones posibles?"

explicacion: |
  Las estructuras 'ya... ya', 'bien... bien' o 'ora... ora' son conjunciones disyuntivas compuestas que enfatizan la alternancia o la posibilidad de que ocurra una u otra de las acciones, a menudo con un matiz más literario o enfático que el simple 'o'.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "basico"
  tags: ["analisis", "identificacion"]

variables:
  texto: "Vamos al cine o nos quedamos en casa."
  conjuncion: "o"

respuesta: "o"
tipo: input

enunciado: "Lee la siguiente oración: '{texto}'. ¿Cuál es la conjunción disyuntiva que une las dos proposiciones?"

explicacion: |
  La oración está formada por dos proposiciones independientes ('Vamos al cine' y 'nos quedamos en casa') unidas por la conjunción disyuntiva 'o', que presenta una alternativa entre ambas opciones.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "intermedio"
  tags: ["sintaxis", "estructura"]

variables:
  proposicion1: "Juan estudia"
  proposicion2: "María juega"
  conjuncion: "o"

respuesta: "coordinada disyuntiva"
tipo: input

enunciado: "En la oración '{proposicion1} {conjuncion} {proposicion2}', ¿qué tipo de coordinación se establece entre las dos proposiciones independientes?"

explicacion: |
  Se trata de una coordinación disyuntiva porque las dos proposiciones independientes están unidas por una conjunción disyuntiva ('o'), estableciendo una relación de alternativa o opción entre ellas.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "basico"
  tags: ["diferenciacion", "copulativa"]

variables:
  tipo_correcto: "disyuntiva"
  ejemplo: "y"
  ejemplo_disy: "o"

respuesta: "disyuntiva"
tipo: input

enunciado: "Si la conjunción 'y' une proposiciones en una coordinación copulativa, ¿qué tipo de coordinación establece la conjunción 'o'?"

explicacion: |
  La conjunción 'o' establece una coordinación disyuntiva, a diferencia de 'y', 'e', 'ni' que son copulativas (suman información).
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "intermedio"
  tags: ["estilo", "alternativas"]

variables:
  estructura: "bien... bien"
  contexto: "formal"

respuesta: "bien... bien"
tipo: input

enunciado: "Completa la frase: '______ aceptamos tu propuesta, ______ la rechazamos.' ¿Qué par de conjunciones disyuntivas se usa aquí para presentar dos extremos?"

explicacion: |
  'Bien... bien' es una conjunción disyuntiva compuesta que se utiliza para presentar dos alternativas claramente definidas, a menudo con un tono más formal o enfático.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "basico"
  tags: ["identificacion", "lista"]

variables:
  lista: ["y", "ni", "o", "pero"]
  disyuntiva: "o"

respuesta: "o"
tipo: input

enunciado: "De la siguiente lista de conjunciones: 'y, ni, o, pero', ¿cuál es la única conjunción disyuntiva?"

explicacion: |
  'Y' es copulativa, 'ni' es copulativa negativa, 'pero' es adversativa. 'O' es la conjunción disyuntiva.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "avanzado"
  tags: ["ambigüedad", "contexto"]

variables:
  frase: "Te voy a llamar o te escribo"
  resolucion: "contexto"

respuesta: "contexto"
tipo: input

enunciado: "En la frase 'Te voy a llamar o te escribo', la disyunción puede ser inclusiva o exclusiva. ¿Qué elemento ayuda a resolver esta ambigüedad?"

explicacion: |
  El contexto situacional y la intención del hablante son los que determinan si la opción es abierta (puedo hacer ambas) o cerrada (haré una de las dos). La gramática por sí sola no siempre lo define.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "avanzado"
  tags: ["literario", "estructura"]

variables:
  estructura: "ora... ora"
  ejemplo: "ora"

respuesta: "ora... ora"
tipo: input

enunciado: "En textos literarios o formales, ¿qué par de conjunciones disyuntivas se usa para indicar alternancia en el tiempo: '______ caminaba, ______ descansaba'?"

explicacion: |
  'Ora... ora' es una conjunción disyuntiva compuesta de uso literario que indica alternancia de acciones o estados en el tiempo.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "intermedio"
  tags: ["sintaxis", "proposiciones"]

variables:
  oracion: "Estudio o me divierto."
  num_proposiciones: 2

respuesta: "2"
tipo: input

enunciado: "En la oración 'Estudio o me divierto', ¿cuántas proposiciones independientes están coordinadas?"

explicacion: |
  Hay dos proposiciones independientes: 'Estudio' y 'me divierto', unidas por la conjunción disyuntiva 'o'.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "intermedio"
  tags: ["estilo", "alternativas"]

variables:
  estructura: "bien... bien"
  ejemplo: "bien"

respuesta: "bien... bien"
tipo: input

enunciado: "Completa: '______ vienes con nosotros, ______ te quedás aquí.' ¿Qué conjunción disyuntiva compuesta falta?"

explicacion: |
  'Bien... bien' es una conjunción disyuntiva compuesta que presenta dos alternativas claras y a menudo excluyentes.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "intermedio"
  tags: ["analisis", "compleja"]

variables:
  oracion: "No solo estudia, o también trabaja."
  conjuncion: "o"

respuesta: "o"
tipo: input

enunciado: "En la oración 'No solo estudia, o también trabaja', ¿cuál es la conjunción disyuntiva?"

explicacion: |
  La conjunción disyuntiva es 'o', que une las dos proposiciones 'estudia' y 'trabaja' presentando una alternativa o adición de acciones.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "basico"
  tags: ["funcion", "preguntas"]

variables:
  funcion: "presentar alternativas"
  ejemplo: "o"

respuesta: "presentar alternativas"
tipo: input

enunciado: "¿Cuál es la función principal de la conjunción disyuntiva 'o' en una pregunta como '¿Quieres té o café'?"

explicacion: |
  Su función es presentar alternativas entre las cuales el interlocutor debe elegir una.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "avanzado"
  tags: ["identificacion", "estilo"]

variables:
  texto: "Ya llueve, ya hace sol."
  conjuncion: "ya... ya"

respuesta: "ya... ya"
tipo: input

enunciado: "En la frase 'Ya llueve, ya hace sol', ¿qué par de conjunciones disyuntivas se utiliza?"

explicacion: |
  'Ya... ya' es una conjunción disyuntiva compuesta que enfatiza la alternancia de dos situaciones.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "basico"
  tags: ["identificacion", "conjunciones"]

variables:
  opcion_a: uno_de(["café", "té", "leche"])
  opcion_b: uno_de(["té", "leche", "agua"])
  conjuncion: uno_de(["o", "u"])

respuesta: "o"
tipo: input

enunciado: "En la frase 'Prefiero {opcion_a} {conjuncion} {opcion_b}', ¿cuál es la conjunción disyuntiva que conecta ambas opciones?"

explicacion: |
  La conjunción disyuntiva principal en español es "o". Se usa para presentar alternativas entre las que se debe elegir una.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "intermedio"
  tags: ["ortografia", "cacofonia"]

variables:
  palabra1: uno_de(["hombre", "olivo"])
  palabra2: uno_de(["mujer", "árbol"])

respuesta: "u"
tipo: input

enunciado: "Si queremos unir 'hombre' y 'mujer' con una disyuntiva, pero la siguiente palabra comienza con 'o' o 'ho', ¿qué forma se utiliza para evitar la cacofonía? Ejemplo: 'hombre {palabra1} {palabra2}' (ajustar según la palabra que empiece con o/ho)."

explicacion: |
  Cuando la palabra siguiente a "o" comienza por 'o' o 'ho', se cambia la conjunción por "u" para evitar que suenen dos 'o' juntas (cacofonía).
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "basico"
  tags: ["clasificacion", "tipos"]

respuesta: "disyuntiva"
tipo: input

enunciado: "En la oración 'Estudio o no estudio', ¿qué tipo de coordinación se presenta?"

explicacion: |
  Se presenta una coordinación disyuntiva porque se ofrecen dos alternativas entre las cuales se debe elegir una.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "basico"
  tags: ["contexto", "ejemplos"]

respuesta: "o"
tipo: input

enunciado: "En la frase 'Vamos al cine o quedamos en casa', ¿cuál es la palabra que indica la disyunción?"

explicacion: |
  La palabra "o" establece la alternativa entre ir al cine o quedarse en casa.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "intermedio"
  tags: ["ortografia", "uso"]

variables:
  palabra: uno_de(["olivo", "hombre"])

respuesta: "u"
tipo: input

enunciado: "Completa la frase correcta: 'Busco un olivo {palabra} un limonero' (si la palabra siguiente empieza con o/ho, usa la forma correcta)."

explicacion: |
  Si la palabra siguiente comienza con 'o' o 'ho', se debe usar "u" en lugar de "o" para evitar la cacofonía.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "basico"
  tags: ["identificacion", "multiple"]

opciones_explicitas: ["y", "o", "pero", "sino"]
respuesta: "o"
tipo: mc

enunciado: "De las siguientes conjunciones, ¿cuál es disyuntiva?"

explicacion: |
  "Y" es copulativa, "pero" y "sino" son adversativas. "O" es la única disyuntiva de la lista.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "intermedio"
  tags: ["logica", "exclusividad"]

respuesta: "exclusiva"
tipo: input

enunciado: "En la frase 'O te vas o te quedás', se entiende que no puedes hacer ambas cosas. ¿Qué tipo de disyunción se interpreta comúnmente aquí?"

explicacion: |
  Se interpreta como una disyunción exclusiva, donde las opciones son mutuamente excluyentes en el contexto dado.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "intermedio"
  tags: ["semantica", "funcion"]

respuesta: "alternativa"
tipo: input

enunciado: "¿Qué relación lógica establece principalmente la conjunción 'o' entre dos proposiciones?"

explicacion: |
  Establece una relación de alternativa u opción entre las proposiciones conectadas.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "avanzado"
  tags: ["uso_arcaico", "numeros"]

respuesta: "ó"
tipo: input

enunciado: "Antiguamente, ¿qué forma se usaba para la conjunción disyuntiva entre números para evitar confusión con la letra 'o'?"

explicacion: |
  Se usaba "ó" (con tilde diacrítica) en contextos numéricos, aunque hoy ya no se recomienda su uso salvo en contadas ocasiones.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "avanzado"
  tags: ["ambiguedad", "contexto"]

respuesta: "contexto"
tipo: input

enunciado: "Cuando una disyunción es inclusiva pero se interpreta como exclusiva, ¿qué elemento suele resolver la ambigüedad?"

explicacion: |
  El contexto es el principal elemento que resuelve si la disyunción se entiende como inclusiva o exclusiva.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "intermedio"
  tags: ["identificacion", "estructuras"]

opciones_explicitas: ["ya... ya...", "porque", "aunque", "cuando"]
respuesta: "ya... ya..."
tipo: mc

enunciado: "¿Cuál de estas estructuras es una coordinación disyuntiva?"

explicacion: |
  "Ya... ya..." es una estructura disyuntiva. "Porque" es causal, "aunque" es concesiva y "cuando" es temporal.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "intermedio"
  tags: ["ortografia", "aplicacion"]

variables:
  palabra1: "hombre"
  palabra2: "mujer"

respuesta: "u"
tipo: input

enunciado: "En la frase 'Un {palabra1} {palabra2}', si quisiéramos usar una disyunción y la palabra siguiente a la conjunción empezara con 'o' (ejemplo hipotético: 'hombre o ...'), ¿cuál sería la forma correcta si la siguiente palabra fuera 'olivo'?"

explicacion: |
  Si la palabra siguiente a la conjunción comienza con 'o' o 'ho', se debe usar "u". En 'hombre u olivo', se usa "u".
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "intermedio"
  tags: ["clasificacion", "variantes"]

respuesta: "disyuntiva"
tipo: input

enunciado: "La coordinación 'Bien vengas, bien no vengas' es de tipo..."

explicacion: |
  Es una coordinación disyuntiva, ya que presenta dos alternativas entre las que se debe elegir.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "intermedio"
  tags: ["clasificacion", "adversativa"]

respuesta: "adversativa"
tipo: input

enunciado: "La conjunción 'sino' es de tipo..."

explicacion: |
  "Sino" es una conjunción adversativa, utilizada para introducir una corrección o contraste.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_disyuntivas"
  nivel: "avanzado"
  tags: ["logica", "diferencia"]

respuesta: "posibilidad de ambas"
tipo: input

enunciado: "¿Qué característica distingue a la disyunción inclusiva de la exclusiva?"

explicacion: |
  La disyunción inclusiva permite que ambas proposiciones sean verdaderas simultáneamente, mientras que la exclusiva no.
```

## Sección: discurso-referido (24 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "basico"
  tags: ["estilo_directo", "identificacion"]

respuesta: "estilo_directo"
tipo: input

enunciado: "En la oración 'Juan gritó: —¡Ayuda! —', ¿qué tipo de discurso referido se utiliza?"

explicacion: |
  El estilo directo reproduce textualmente las palabras del hablante, utilizando signos como rayas o comillas para aislar la cita.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["transformacion", "estilo_indirecto"]

variables:
  nombre: uno_de(["María", "Pedro", "Lucía"])
  verbo: uno_de(["dijo", "comentó", "afirmó"])

respuesta: "El " + nombre + " " + verbo + " que estaba lloviendo."
tipo: completar

enunciado: "Transformá al estilo indirecto: '{nombre} dijo: —Está lloviendo.'"

explicacion: |
  En el estilo indirecto, el verbo en presente ('está') cambia a imperfecto ('estaba') para mantener la concordancia temporal, y se introduce con la conjunción 'que'.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "basico"
  tags: ["puntuacion", "estilo_directo"]

respuesta: "comillas"
tipo: input

enunciado: "¿Qué signo de puntuación se utiliza comúnmente en textos periodísticos o formales para delimitar el estilo directo?"

explicacion: |
  Las comillas (“ ” o ' ') son el recurso gráfico más habitual en contextos formales y periodísticos para citar textualmente.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "basico"
  tags: ["estilo_indirecto", "identificacion"]

respuesta: "estilo_indirecto"
tipo: input

enunciado: "En la oración 'La maestra explicó que la tarea era obligatoria', ¿qué tipo de discurso referido se observa?"

explicacion: |
  El estilo indirecto integra la cita dentro de la oración narrativa, utilizando nexos como 'que' y modificando los tiempos verbales y pronombres.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["pronombres", "transformacion"]

variables:
  sujeto: uno_de(["Ella", "Ellos"])
  accion: uno_de(["vino", "llegaron"])

respuesta: "El profesor dijo que " + sujeto + " " + accion + " tarde."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'El profesor dijo: —{sujeto} {accion} tarde.'"

explicacion: |
  Al pasar a indirecto, los pronombres pueden mantenerse si el sujeto es el mismo, pero el verbo se conjuga en la tercera persona del singular o plural según corresponda, y se añade 'que'.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["preguntas", "estilo_indirecto"]

variables:
  lugar: uno_de(["a la escuela", "al parque", "en casa"])

respuesta: "Me preguntó si iba a " + lugar + "."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Me preguntó: —¿Vas a {lugar}?'"

explicacion: |
  Las preguntas directas en estilo indirecto se introducen con 'si' (si es pregunta sí/no) o con el pronombre interrogativo correspondiente, eliminando la entonación interrogativa y los signos de puntuación.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "basico"
  tags: ["puntuacion", "estilo_directo"]

respuesta: "rayas"
tipo: input

enunciado: "¿Qué signo gráfico se utiliza preferentemente en la narrativa literaria argentina para marcar el inicio de cada intervención en el estilo directo?"

explicacion: |
  La raya (—) es el signo estándar en la prosa narrativa para indicar el inicio de cada turno de habla en el diálogo directo.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["concordancia", "tiempos_verbales"]

variables:
  verbo: uno_de(["canto", "baila", "corro"])
  sujeto: uno_de(["él", "ella"])

respuesta: "Dijo que " + sujeto + " " + verbo + " bien."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Dijo: —{sujeto} {verbo} bien.'"

explicacion: |
  El presente de indicativo ('canto/baila/corro') cambia a imperfecto de indicativo ('cantaba/bailaba/corría') al pasar a estilo indirecto si el verbo introductorio está en pasado.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["tiempos_verbales", "futuro"]

variables:
  accion: uno_de(["viajaré", "comeré", "dormiré"])

respuesta: "Afirmó que " + accion + " mañana."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Afirmó: —{accion} mañana.'"

explicacion: |
  El futuro simple ('viajaré/comeré') cambia a condicional simple ('viajaría/comería') en el estilo indirecto cuando el verbo introductorio está en pasado.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "basico"
  tags: ["vocabulario", "verbos"]

respuesta: "preguntó"
tipo: input

enunciado: "En la frase '—¿Qué hora es? —inquirió el pasajero', ¿cuál es el verbo introductorio o de enunciación?"

explicacion: |
  El verbo introductorio es 'inquirió' (o 'preguntó' como sinónimo), que señala quién habla o qué función cumple la cita.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["concordancia", "pluscuamperfecto"]

variables:
  accion: uno_de(["había comido", "había salido"])

respuesta: "Me contó que " + accion + " antes."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Me contó: —Ya {accion} antes.'"

explicacion: |
  El pluscuamperfecto ('había comido') se mantiene igual en estilo indirecto si el verbo introductorio está en pasado, ya que el tiempo verbal ya es relativo al pasado.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["imperativo", "transformacion"]

variables:
  orden: uno_de(["ven", "sal", "calla"])

respuesta: "Me mandó que " + orden + "."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Me mandó: —¡{orden}!'"

explicacion: |
  El imperativo en estilo directo se transforma generalmente en subjuntivo en estilo indirecto ('venga/salga/calle'), pero en contextos informales o de resumen, a veces se mantiene la forma base o se usa 'que + subjuntivo'. Aquí se pide la forma más directa de reporte de mandato.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["gramatica", "cambios"]

respuesta: "pronombres"
tipo: input

enunciado: "Además de los tiempos verbales, ¿qué otro elemento gramatical suele modificarse al pasar de estilo directo a indirecto?"

explicacion: |
  Los pronombres personales y demostrativos (yo/tú/este/ahora) cambian para adaptarse al punto de vista del narrador (él/ella/aquel/allí).
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["verbos_de_duda", "transformacion"]

variables:
  duda: uno_de(["no sé", "desconfío", "me pregunto"])

respuesta: "Dijo que " + duda + "."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Dijo: —{duda} si viene.'"

explicacion: |
  Se integra la duda dentro de la oración principal, manteniendo la conjunción 'si' para la pregunta indirecta y ajustando la concordancia.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "avanzado"
  tags: ["complejidad", "identificacion"]

respuesta: "estilo_directo"
tipo: input

enunciado: "En la frase 'Ella dijo: \"No sé qué hacer\"', ¿qué estilo de discurso referido predomina en la parte citada?"

explicacion: |
  Predomina el estilo directo porque se cita textualmente la frase entre comillas, aunque la frase citada contenga una expresión de duda.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["pronombres", "demostrativos"]

variables:
  objeto: uno_de(["este", "ese"])
  sustantivo: uno_de(["libro", "caso", "problema"])

respuesta: "Dijo que " + objeto + " " + sustantivo + " era importante."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Dijo: —{objeto} {sustantivo} es importante.'"

explicacion: |
  Los demostrativos 'este' (cercanía al hablante original) suelen cambiar a 'ese' o 'aquel' (cercanía o lejanía respecto al narrador actual) en estilo indirecto.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "basico"
  tags: ["funcion", "conceptos"]

respuesta: "fidelidad"
tipo: input

enunciado: "¿Qué cualidad principal aporta el estilo directo a un relato?"

explicacion: |
  El estilo directo aporta fidelidad a la enunciación original, dando vivacidad y permitiendo al lector 'escuchar' la voz de los personajes.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["entonacion", "transformacion"]

variables:
  emocion: uno_de(["qué alegría", "qué dolor", "qué sorpresa"])

respuesta: "Exclamó que " + emocion + "."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Exclamó: —¡{emocion}!'"

explicacion: |
  Las exclamaciones en estilo indirecto pierden los signos de exclamación y la entonación marcada, integrándose como una afirmación declarativa.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "basico"
  tags: ["vocabulario", "preguntas"]

respuesta: "preguntó"
tipo: input

enunciado: "Si la cita es '—¿Dónde está el baño?', ¿qué verbo introductorio es más apropiado?"

explicacion: |
  'Preguntó', 'inquirió' o 'consultó' son verbos adecuados para introducir una cita interrogativa.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["concordancia", "presente"]

variables:
  accion: uno_de(["trabaja", "estudia", "vive"])

respuesta: "Dice que " + accion + " aquí."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Dice: —{accion} aquí.'"

explicacion: |
  Si el verbo introductorio está en presente ('dice'), los tiempos verbales de la cita NO cambian (no hay concordancia temporal hacia atrás).
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "basico"
  tags: ["identificacion", "resumen"]

respuesta: "estilo_indirecto"
tipo: input

enunciado: "En la oración 'El testigo afirmó que había visto al sospechoso', ¿qué estilo se usa?"

explicacion: |
  Es estilo indirecto porque el narrador resume lo dicho por el testigo sin citar sus palabras exactas, usando 'que' y modificando el tiempo verbal.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["adverbios", "tiempo"]

variables:
  adverbio: uno_de(["ahora", "hoy", "mañana"])

respuesta: "Dijo que " + adverbio + " era difícil."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Dijo: —{adverbio} es difícil.'"

explicacion: |
  Los adverbios de tiempo como 'ahora', 'hoy' o 'mañana' suelen cambiar a 'entonces', 'ese día' o 'al día siguiente' en estilo indirecto, aunque en resúmenes informales a veces se mantienen.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["puntuacion", "normas"]

respuesta: "coma"
tipo: input

enunciado: "En '—Vamos al cine —dijo Juan', ¿qué signo separa la cita del verbo introductorio cuando este va al final?"

explicacion: |
  Se utiliza una raya para cerrar la cita y otra para iniciar el verbo introductorio. No hay coma entre la raya final y el verbo. (Nota: Si fuera comillas, sería '...cine", dijo Juan'. Con rayas, es '—cine —dijo Juan'). La pregunta busca el signo que cierra la cita antes del verbo.
```

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "avanzado"
  tags: ["funcion", "comparacion"]

respuesta: "agilidad"
tipo: input

enunciado: "¿Qué ventaja principal ofrece el estilo indirecto en la narración de hechos extensos?"

explicacion: |
  El estilo indirecto ofrece agilidad y economía narrativa, permitiendo resumir largos diálogos o pensamientos sin detener la acción con citas textuales.
```

## Sección: produccion-escrita-compleja (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "basico"
  tags: ["produccion_escrita_compleja", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Producción escrita compleja no enseña una técnica nueva, sino que integra la oración compuesta y la puntuación ya vistas para producir un texto largo y coherente."

pasos:
  - "Ver `../oracion-compuesta-coordinacion-y-subordinacion/` y `../signos-de-puntuacion/`: son sus dos prerrequisitos directos."

explicacion: |
  Verdadero: este tema combina herramientas previas, no introduce
  contenido gramatical nuevo.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "basico"
  tags: ["planificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "planificación"
tipo: mc
opciones_explicitas: ["planificación", "redacción", "revisión"]

enunciado: "La etapa en la que se decide el tipo textual, la idea principal o tesis, y se arma un esquema de párrafos, ANTES de escribir, se llama..."

pasos:
  - "Es el primer paso del proceso, antes de poner una palabra en el papel."

explicacion: |
  La planificación organiza el texto antes de comenzar a redactar.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "basico"
  tags: ["redaccion"]

variables:
  n: uno_de([1, 1])

respuesta: "redacción"
tipo: mc
opciones_explicitas: ["planificación", "redacción", "revisión"]

enunciado: "La etapa en la que se escribe el borrador sin frenarse a corregir cada detalle, siguiendo el esquema hecho antes, se llama..."

pasos:
  - "El objetivo de esta etapa es sacar las ideas al papel, no lograr la versión final."

explicacion: |
  La redacción es la etapa de escribir el primer borrador completo.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "basico"
  tags: ["revision"]

variables:
  n: uno_de([1, 1])

respuesta: "revisión"
tipo: mc
opciones_explicitas: ["planificación", "redacción", "revisión"]

enunciado: "La etapa en la que se relee con ojo crítico buscando errores de coherencia, gramática, ortografía y puntuación se llama..."

pasos:
  - "Es el paso que sigue a tener un borrador completo escrito."

explicacion: |
  La revisión busca errores y aspectos a mejorar antes de la versión
  final.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["edicion_final"]

variables:
  n: uno_de([1, 1])

respuesta: "edición final"
tipo: mc
opciones_explicitas: ["edición final", "planificación", "redacción"]

enunciado: "La etapa en la que se aplican las correcciones encontradas en la revisión para producir la versión definitiva se llama..."

pasos:
  - "Es el último paso del proceso de escritura, después de revisar."

explicacion: |
  La edición final cierra el proceso aplicando todas las correcciones
  detectadas.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["produccion_escrita_compleja", "proceso"]

enunciado: "Ordená las cuatro etapas del proceso de escritura de un texto complejo."
tipo: ordenar
opciones_explicitas:
  - "Planificación"
  - "Redacción (borrador)"
  - "Revisión"
  - "Edición final"
respuesta_orden: ["Planificación", "Redacción (borrador)", "Revisión", "Edición final"]
explicacion: |
  El proceso completo va de organizar las ideas a escribirlas, luego
  revisarlas críticamente, y finalmente corregirlas.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "basico"
  tags: ["produccion_escrita_compleja", "proceso"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Escribir un texto complejo tiene etapas distintas, cada una con un objetivo propio, en vez de ser un proceso de \"escribir de una sola vez\"."

pasos:
  - "Planificar, redactar, revisar y editar son pasos con objetivos distintos entre sí."

explicacion: |
  Verdadero: separar el proceso en etapas es una estrategia central
  de la producción escrita compleja.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["parrafos", "idea_principal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada párrafo de un texto complejo debería desarrollar una sola idea principal propia, conectada con la del párrafo anterior y siguiente."

pasos:
  - "Ver `../comprension-idea-principal/`: mezclar varias ideas grandes en un solo párrafo dificulta la lectura."

explicacion: |
  Verdadero: la organización \"un párrafo, una idea\" es un principio
  central de la escritura clara.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["estructura_sintactica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto complejo bien escrito combina oraciones simples y compuestas (coordinadas y subordinadas), en vez de repetir siempre la misma estructura corta."

pasos:
  - "Ver `../oracion-compuesta-coordinacion-y-subordinacion/`: la variedad sintáctica distingue la escritura madura."

explicacion: |
  Verdadero: la variedad en la estructura de las oraciones es una
  marca de escritura compleja bien lograda.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["puntuacion", "oraciones_largas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más larga y combinada es una oración, más depende de una buena puntuación para seguir siendo legible."

pasos:
  - "Ver `../signos-de-puntuacion/`: es la razón concreta de por qué este tema depende también de la puntuación."

explicacion: |
  Verdadero: la puntuación es lo que hace legibles a las oraciones
  compuestas más largas.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["redaccion", "estrategia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Durante la etapa de redacción del borrador, conviene no frenarse a corregir cada detalle, porque esa revisión detallada corresponde a una etapa posterior."

pasos:
  - "Mezclar redacción y revisión al mismo tiempo puede hacer más lento y difícil sacar las ideas completas al papel."

explicacion: |
  Verdadero: separar redactar de revisar es una estrategia práctica
  para no trabarse durante el primer borrador.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["planificacion", "tipos_textuales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En la planificación se decide de qué tipo textual va a ser el texto (narrativo, expositivo, argumentativo...) antes de empezar a redactar."

pasos:
  - "Ver `../tipos-textuales/`: saber el propósito del texto orienta cómo se organiza el esquema."

explicacion: |
  Verdadero: definir el tipo textual es parte de la planificación
  previa a la redacción.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["revision", "errores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La etapa de revisión busca errores de distinto tipo: coherencia (¿se entiende la idea?), gramática, ortografía/tildación y puntuación."

pasos:
  - "No es una sola revisión de un solo aspecto, sino varias capas de lectura crítica."

explicacion: |
  Verdadero: la revisión abarca múltiples niveles del texto, no sólo
  la ortografía.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["planificacion", "esquema"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Armar un esquema breve de los párrafos que van a desarrollar la idea principal o tesis es parte de la planificación, antes de escribir el borrador completo."

pasos:
  - "Ese esquema orienta la redacción y evita perder el hilo del texto en el camino."

explicacion: |
  Verdadero: el esquema de párrafos es una herramienta práctica
  central de la planificación.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "avanzado"
  tags: ["prerrequisito", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Producción escrita compleja tiene dos prerrequisitos directos en el MAPA: oración compuesta (para combinar oraciones) y signos de puntuación (para que esas combinaciones se lean sin ambigüedad)."

pasos:
  - "Ambos prerrequisitos son necesarios en conjunto: combinar oraciones sin puntuar bien resulta igual de ilegible."

explicacion: |
  Verdadero: es el caso de un nodo con doble padre en el MAPA,
  explicado en `../dependencias.md`.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["parrafos", "coherencia"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Es una buena práctica de escritura mezclar varias ideas grandes distintas dentro de un mismo párrafo, para que el texto sea más corto."

pasos:
  - "Mezclar varias ideas grandes en un párrafo suele dificultar la lectura, en vez de facilitarla."

explicacion: |
  Falso: la regla \"un párrafo, una idea\" existe justamente para
  evitar esa confusión, no para acortar el texto a costa de la
  claridad.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["produccion_escrita_compleja", "practica"]

variables:
  acciones: ["armar un esquema de los párrafos antes de escribir", "corregir una falta de ortografía detectada al releer el borrador"]
  etapas: ["planificación", "revisión"]
  idx: uno_de([0, 1])

respuesta: etapas[idx]
tipo: mc
opciones_explicitas: ["planificación", "redacción", "revisión", "edición final"]

enunciado: "La acción de \"{acciones[idx]}\" corresponde a la etapa de..."

pasos:
  - "Antes de escribir = planificación. Detectar un error al releer = revisión."

explicacion: |
  Cada acción concreta del proceso de escritura corresponde a una
  etapa específica.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "avanzado"
  tags: ["produccion_escrita_compleja", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Separar redactar (sacar todas las ideas) de revisar (corregir con ojo crítico) suele producir mejores textos que intentar escribir la versión perfecta desde la primera oración."

pasos:
  - "Frenar cada oración para corregirla antes de seguir suele hacer perder el hilo general del texto."

explicacion: |
  Verdadero: es la justificación práctica de por qué separar el
  proceso en etapas mejora el resultado final.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "avanzado"
  tags: ["produccion_escrita_compleja", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una vez que se puede producir un borrador completo con estructura básica correcta, el siguiente paso es refinar específicamente cómo se conectan las oraciones y párrafos entre sí (cohesión y coherencia)."

pasos:
  - "Ver `../conectores-textuales/`, `../referencia-anafora-y-catafora/`, `../progresion-tematica/`: los tres temas siguientes de la cadena."

explicacion: |
  Verdadero: por eso producción escrita compleja es prerrequisito
  directo de esos tres temas de cohesión y coherencia.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "avanzado"
  tags: ["produccion_escrita_compleja", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de escribir un informe escolar largo, conviene dedicar tiempo a planificar (tipo textual, tesis o idea central, esquema de párrafos) en vez de empezar a escribir directamente sin ningún plan."

pasos:
  - "La planificación previa suele ahorrar tiempo de reescritura y mejorar la coherencia general del texto final."

explicacion: |
  Verdadero: la aplicación práctica más directa de este tema es
  planificar antes de encarar cualquier texto extenso real.
```

## Sección: subordinada-adjetiva-o-de-relativo (24 preguntas)

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["sintaxis", "funcion"]

variables:
  funcion: uno_de(["adjetivo", "sustantivo", "verbo", "adverbio"])

respuesta: "adjetivo"
tipo: input

enunciado: "Las oraciones subordinadas adjetivas cumplen la función sintáctica de un {funcion} dentro de la oración principal."

explicacion: |
  Aunque están formadas por un sujeto y un verbo, su función es modificar al sustantivo (antecedente), actuando como un adjetivo.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "avanzado"
  tags: ["cuyo", "concordancia"]

variables:
  genero_antecedente: uno_de(["masculino", "femenino"])
  numero_antecedente: uno_de(["singular", "plural"])
  genero_pertenencia: uno_de(["masculino", "femenino"])
  numero_pertenencia: uno_de(["singular", "plural"])

respuesta: "cuyo"
tipo: input

enunciado: "Si el antecedente es {genero_antecedente} {numero_antecedente} y posee una {genero_pertenencia} {numero_pertenencia}, ¿qué pronombre relativo se usa para indicar posesión?"

explicacion: |
  Se usa 'cuyo' (o sus formas 'cuya', 'cuyos', 'cuyas') para expresar posesión. Concuerda en género y número con la cosa poseída (la pertenencia), no con el antecedente.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["quien", "personas"]

variables:
  antecedente_persona: uno_de(["el profesor", "mi hermana", "quien", "alguien"])
  antecedente_no_persona: uno_de(["el libro", "la mesa", "el gato", "el tiempo"])

respuesta: "quien"
tipo: input

enunciado: "¿Qué pronombre relativo se utiliza comúnmente para referirse a personas, a menudo precedido de preposición?"

explicacion: |
  'Quien' (o 'quienes') se usa para personas. 'Que' es más genérico y puede usarse para cosas o personas, pero 'quien' es específico para personas en contextos formales o con preposición.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["clasificacion", "mc"]

variables:
  oracion: uno_de(["El hombre que llegó es mi padre", "Mi padre, que llegó ayer, está cansado", "El libro que leo es interesante"])
    # Nota: Para simplificar la lógica de MC, asumimos que la primera opción es especificativa y la segunda explicativa en la generación real, pero aquí generamos distractores.
    # Mejor: Generamos una oración específica en el enunciado.

respuesta: "especificativa"
tipo: mc
opciones_explicitas: ["especificativa", "explicativa", "sustantiva", "adverbial"]

enunciado: "En la oración 'Los estudiantes que estudiaron aprobaron', la subordinada adjetiva es:"

explicacion: |
  Es especificativa porque restringe el grupo de 'estudiantes' a aquellos que estudiaron. Sin ella, no sabríamos qué estudiantes aprobaron.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "avanzado"
  tags: ["cuyo", "mc"]

respuesta: "posesiva"
tipo: mc
opciones_explicitas: ["posesiva", "temporal", "local", "causal"]

enunciado: "El pronombre relativo 'cuyo' introduce una subordinada adjetiva con función:"

explicacion: |
  'Cuyo' expresa posesión o pertenencia. Equivale a 'cuya', 'cuyos', 'cuyas'.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["pronombres", "cosas"]

variables:
  cosa: uno_de(["el coche", "la idea", "el proyecto", "el problema"])

respuesta: "que"
tipo: input

enunciado: "Para referirse a '{cosa}' en una subordinada adjetiva, ¿cuál es el pronombre relativo más común y versátil?"

explicacion: |
  'Que' es el pronombre relativo más frecuente y puede referirse tanto a personas como a cosas.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "avanzado"
  tags: ["cuyo", "concordancia", "input"]

variables:
  posesor: uno_de(["el hombre", "la mujer"])
  poseido: uno_de(["los hijos", "la casa"])

respuesta: "cuyos"
tipo: input

enunciado: "En 'El hombre {posesor} tiene {poseido}', si usamos 'cuyo' para unir las frases, ¿cómo se escribe el relativo si 'poseido' es plural?"

explicacion: |
  'Cuyos' concuerda en género y número con el poseído ('los hijos' -> masculino plural).
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["pronombres", "mc"]

respuesta: "cuando"
tipo: mc
opciones_explicitas: ["que", "cual", "donde", "cuando"]

enunciado: "¿Cuál de estos NO es un pronombre relativo que introduce una subordinada adjetiva típica?"

explicacion: |
  'Cuando' es un adverbio relativo de tiempo. Aunque puede introducir subordinadas, 'que', 'cual' y 'donde' son los pronombres relativos clásicos (de persona/cosa/lugar). 'Cuando' a menudo introduce oraciones adverbiales temporales.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["clasificacion", "mc"]

respuesta: "sustantiva"
tipo: mc
opciones_explicitas: ["sustantiva", "adjetiva", "adverbial", "causal"]

enunciado: "En 'Quiero que vengas', la subordinada es:"

explicacion: |
  Es sustantiva porque funciona como objeto directo del verbo 'quiero'. No modifica a un sustantivo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["antecedente", "identificacion"]

variables:
  antecedente: uno_de(["libro", "casa", "amigo", "perro"])
  verbo: uno_de(["leí", "construí", "conocí", "adopté"])
  adjetivo: uno_de(["nuevo", "grande", "viejo", "pequeño"])

respuesta: antecedente
tipo: input

enunciado: "En la oración 'El {antecedente} que {verbo} es {adjetivo}', ¿cuál es el antecedente de la subordinada adjetiva?"

explicacion: |
  El antecedente es el sustantivo al que modifica la subordinada. En este caso, "que {verbo}" describe al "{antecedente}".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["sintaxis", "funcion"]

variables:
  sustantivo: uno_de(["profesor", "colega", "vecino", "jefe"])
  accion: uno_de(["enseña", "trabaja", "vive", "manda"])

respuesta: "complemento del nombre"
tipo: input

enunciado: "La oración subordinada adjetiva 'que {accion}' en 'El {sustantivo} que {accion} es amable' cumple la función de:"

explicacion: |
  Las subordinadas adjetivas funcionan como un adjetivo, es decir, como complemento del nombre o sustantivo antecedente.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["clasificacion", "especificativa"]

variables:
  sustantivo: uno_de(["alumnos", "estudiantes"])
  condicion: uno_de(["estudian", "trabajan", "juegan", "duermen"])

respuesta: "especificativa"
tipo: completar

enunciado: "En 'Los {sustantivo} que {condicion} pasan el año', la subordinada es __________."

explicacion: |
  Es especificativa porque delimita qué {sustantivo} específicos pasan el año.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["sintaxis", "funcion"]

respuesta: "adjetivo"
tipo: completar

enunciado: "La subordinada adjetiva funciona sintácticamente como un __________."

explicacion: |
  Funciona como un adjetivo, modificando al sustantivo antecedente.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["terminologia", "antecedente"]

respuesta: "antecedente"
tipo: completar

enunciado: "El sustantivo que es modificado por la subordinada adjetiva se llama __________."

explicacion: |
  Se llama antecedente.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["clasificacion", "semantica"]

variables:
  sujeto: uno_de(["Argentina", "Madrid", "Tokio", "Paris", "Roma"])
  dato: uno_de(["es capital", "tiene museos", "es antigua", "es grande", "es famosa"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sujeto}, que {dato}, es popular', la subordinada es explicativa porque su información es complementaria y no esencial para identificar al sujeto."

explicacion: |
  Verdadero. '{sujeto}' es un nombre propio que ya identifica inequívocamente al referente. La cláusula 'que {dato}' aporta información extra, no restrictiva, por lo que es explicativa.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["pronombre", "persona"]

variables:
  persona: uno_de(["el amigo", "la vecina", "el colega", "la hermana", "el novio"])
  accion: uno_de(["llamó", "escribió", "visitó", "ayudó", "conoció"])

respuesta: uno_de(["quien", "quienes"])
tipo: input

enunciado: "Si el antecedente es 'la persona', ¿qué pronombre relativo se usa comúnmente para referirse a ella en registro formal: 'que' o 'quien'?"

explicacion: |
  'Quien' (o 'quienes' si es plural) se usa frecuentemente para referentes personificados, especialmente en contextos más formales o después de preposiciones. Aquí, 'quien' es la opción válida para singular.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["identificacion", "segmento"]

variables:
  antecedente: uno_de(["el coche", "el avión", "el tren", "el barco", "el auto"])
  caracteristica: uno_de(["que viaja rápido", "que es nuevo", "que es rojo", "que es viejo", "que es caro"])

respuesta: caracteristica
tipo: input

enunciado: "En 'El {antecedente} {caracteristica} es mío', ¿cuál es el segmento que forma la subordinada adjetiva?"

explicacion: |
  La subordinada adjetiva comienza con el pronombre relativo y termina al cerrar la idea. En este caso, es '{caracteristica}'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["prueba", "especificativa"]

variables:
  sujeto: uno_de(["los libros", "los estudiantes", "los días", "los meses", "los años"])
  condicion: uno_de(["que llueve", "que estudian", "que amanecen", "que terminan", "que empiezan"])

respuesta: verdadero
tipo: vf

enunciado: "Si quitamos la cláusula '{condicion}' de 'Los {sujeto} {condicion} son raros', la oración pierde su sentido específico de referencia. ¿Es esto característico de una especificativa?"

explicacion: |
  Verdadero. Las especificativas son esenciales para identificar al antecedente. Sin ellas, no sabemos a qué '{sujeto}' nos referimos.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["prueba", "explicativa"]

variables:
  sujeto: uno_de(["Juan", "María", "Carlos", "Ana", "Luis"])
  dato: uno_de(["es alto", "es inteligente", "es amable", "es joven", "es rico"])

respuesta: verdadero
tipo: vf

enunciado: "Si quitamos la cláusula '{dato}' de 'Juan, que {dato}, viene mañana', la oración sigue teniendo sentido completo. ¿Es esto característico de una explicativa?"

explicacion: |
  Verdadero. Las explicativas aportan información extra. El sujeto 'Juan' ya está identificado, por lo que la cláusula es prescindible.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["error", "puntuacion"]

variables:
  sujeto: uno_de(["Mi madre", "El presidente", "La reina", "El director", "El alcalde"])
  dato: uno_de(["es anciana", "es popular", "es querida", "es famosa", "es anciana"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Mi madre que {dato} vive aquí', falta una coma antes de 'que' si se quiere dar un dato adicional sobre 'Mi madre'. ¿Es esto correcto?"

explicacion: |
  Verdadero. Si 'Mi madre' es único y el dato es adicional (explicativo), debe haber comas: 'Mi madre, que {dato}, vive aquí'. Sin comas, implicaría que hay varias madres y solo la que es '{dato}' vive ahí.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["error", "puntuacion"]

variables:
  sujeto: uno_de(["los libros", "los estudiantes", "los días", "los meses", "los años"])
  condicion: uno_de(["que llueve", "que estudian", "que amanecen", "que terminan", "que empiezan"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Los {sujeto}, {condicion}, son raros', si la intención es restringir el grupo (solo esos específicos), la coma es incorrecta. ¿Es esto cierto?"

explicacion: |
  Verdadero. Si la cláusula es especificativa (restringe el significado), NO debe llevar comas. Las comas la convertirían en explicativa, cambiando el sentido.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "avanzado"
  tags: ["elision", "pronombre"]

variables:
  antecedente: uno_de(["el libro", "la casa", "el día", "el momento", "el lugar"])
  accion: uno_de(["leí", "construí", "esperé", "visité", "busqué"])

respuesta: verdadero
tipo: vf

enunciado: "En 'El {antecedente} {accion} es bueno', se puede omitir el pronombre relativo 'que' en español coloquial: 'El {antecedente} {accion} es bueno'. ¿Es esto gramaticalmente aceptable en registro informal?"

explicacion: |
  Verdadero. En español, el pronombre relativo 'que' puede omitirse cuando funciona como complemento directo de la subordinada, aunque es más común en el habla cotidiana.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["pronombre", "comparacion"]

variables:
  antecedente: uno_de(["la idea", "el problema", "la solución", "el caso", "el tema"])

respuesta: uno_de(["cual", "que"])
tipo: input

enunciado: "Después de una coma, si queremos un tono más formal y evitar ambigüedad, es preferible usar 'que' o 'cual' para referirse a '{antecedente}'?"

explicacion: |
  'Cual' (o 'el cual') se prefiere después de comas o preposiciones para mayor claridad y formalidad, especialmente cuando el antecedente es una idea abstracta o para evitar confusión con el 'que' relativo estándar.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "avanzado"
  tags: ["error", "concordancia"]

variables:
  poseedor: uno_de(["el hombre", "la mujer", "el niño", "la niña", "el padre"])
  poseido: uno_de(["hija", "madre"])
  forma_incorrecta: uno_de(["cuyas", "cuyos", "cuyo"])

respuesta: verdadero
tipo: vf

enunciado: "En 'La {poseedor}, {forma_incorrecta} {poseido} es joven', si '{poseido}' es femenino singular, la forma '{forma_incorrecta}' es incorrecta. ¿Es esto cierto?"

explicacion: |
  Verdadero. Si '{poseido}' es femenino singular, debe ser 'cuya'. '{forma_incorrecta}' no concuerda.
```

