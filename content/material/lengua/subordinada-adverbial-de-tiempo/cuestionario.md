# Lengua — subordinada adverbial de tiempo (cuestionario, 34 preguntas VBLang)

> Tema: `lengua/subordinada-adverbial-de-tiempo`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["subjuntivo", "anterioridad"]

respuesta: verdadero
tipo: vf

enunciado: "Es verdadero que la expresión 'antes de que' casi siempre exige el uso del modo subjuntivo en la subordinada."

explicacion: |
  "Antes de que" es una de las pocas expresiones temporales que siempre rige el subjuntivo, ya que la acción es futura o incierta respecto al momento de habla.
```

### 2 — pregunta 2

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["sintaxis", "funcion"]

respuesta: verdadero
tipo: vf

enunciado: "Una subordinada adverbial de tiempo funciona sintácticamente como un adverbio dentro de la oración principal."

explicacion: |
  Correcto. Aunque es una oración completa con verbo, su función en la estructura mayor es la de un complemento circunstancial de tiempo (adverbial).
```

### 3 — pregunta 3

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["estructura", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "Las subordinadas adverbiales de tiempo contienen su propio verbo conjugado, a diferencia de los adverbios simples."

explicacion: |
  Sí. Un adverbio simple es una palabra (ayer), mientras que la subordinada es una oración (cuando ayer llovió).
```

### 4 — pregunta 4

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["subjuntivo", "indicativo"]

respuesta: verdadero
tipo: vf

enunciado: "Es verdadero que con 'cuando' referido a hechos habituales o pasados, solemos usar el indicativo."

explicacion: |
  Correcto. Ej: "Cuando iba al colegio, me compraba alfajores" (indicativo). Si fuera futuro incierto, sería subjuntivo ("Cuando vaya...").
```

### 5 — pregunta 5

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "basico"
  tags: ["lexico", "identificacion"]

respuesta: "mientras"
tipo: input

enunciado: "En la frase 'Mientras leía, mi hermano jugaba', ¿cuál es la palabra que funciona como nexo temporal?"

explicacion: |
  "Mientras" es el nexo que introduce la subordinada de tiempo.
```

### 6 — pregunta 6

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["coherencia", "discurso"]

respuesta: verdadero
tipo: vf

enunciado: "El uso correcto de subordinadas de tiempo ayuda a organizar la secuencia lógica de eventos en un relato."

explicacion: |
  Sí. Permiten situar la acción en un contexto temporal rico y evitar que el discurso sea fragmentado.
```

### 7 — pregunta 7

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["estructura", "principal"]

respuesta: "nosotros armábamos la carpa"
tipo: input

enunciado: "En 'Mientras el sol se ponía, nosotros armábamos la carpa', escribe la oración principal."

explicacion: |
  La principal es "nosotros armábamos la carpa". La subordinada es "Mientras el sol se ponía".
```

### 8 — pregunta 8

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["comparacion", "matiz"]

respuesta: falso
tipo: vf

enunciado: "Es falso que 'mientras' y 'cuando' (en sentido de simultaneidad) tengan la misma función temporal."

explicacion: |
  La afirmación es falsa porque SÍ tienen la misma función temporal (simultaneidad). Ambas indican que dos acciones ocurren al mismo tiempo.
```

### 9 — pregunta 9

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["gramatica", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "Es verdadero que la subordinada adverbial de tiempo tiene sujeto y verbo propios, aunque funcione como adverbio."

explicacion: |
  Sí. Es una oración subordinada, por lo tanto, es una frase oracional con su propia estructura interna.
```

### 10 — pregunta 10

```
metadata:
  materia: "lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["posterioridad", "identificacion"]

respuesta: "después de que"
tipo: input

enunciado: "Si quiero decir que la acción principal ocurre después de la subordinada, ¿qué nexo uso?"

explicacion: |
  "Después de que" es el nexo estándar para posterioridad.
```

### 11 — pregunta 11

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["sintaxis", "funcion", "intermedio"]

variables:
  tiempo: uno_de(["ayer", "mañana", "cuando termine", "mientras llovía", "antes de salir"])
  accion: uno_de(["salí", "comí", "trabajé", "leí", "viajé"])

respuesta: "sintagma adverbial de tiempo"
tipo: completar

enunciado: "En la frase 'Salí {tiempo}', la parte subrayada funciona sintácticamente como un/a: "

explicacion: |
  Las subordinadas adverbiales de tiempo cumplen la función de complemento circunstancial de tiempo, modificando al verbo de la oración principal.
```

### 12 — pregunta 12

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["simultaneidad", "conectores", "intermedio"]

variables:
  accion1: uno_de(["cocinaba", "leía", "escuchaba música", "plancheaba", "cantaba"])
  accion2: uno_de(["llegaste", "sonó el teléfono", "terminó la película", "abrió la puerta", "llovió"])
  conector: "mientras"

respuesta: "{conector}"
tipo: completar

enunciado: "Completa la oración para expresar simultaneidad: '{accion1} {conector} {accion2}'."

explicacion: |
  El conector 'mientras' indica que dos acciones ocurren al mismo tiempo, estableciendo una relación de simultaneidad entre las subordinadas.
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["subjuntivo", "anterioridad", "avanzado"]

variables:
  accion_principal: uno_de(["avísame", "llámame", "esperame", "prepárame", "avísame"])
  accion_subordinada: uno_de(["llegues", "termines", "salgas", "vengas", "hables"])
  conector: "antes de que"

respuesta: "subjuntivo"
tipo: completar

enunciado: "En la construcción '{accion_principal} {conector} {accion_subordinada}', el verbo de la subordinada debe estar en modo: "

explicacion: |
  El conector 'antes de que' exige siempre el uso del subjuntivo en la subordinada, ya que expresa anterioridad respecto a una acción principal que puede ser futura o incierta.
```

### 14 — pregunta 14

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["estructura", "analisis", "intermedio"]

variables:
  subordinada: uno_de(["Cuando llegues", "Mientras estudiabas", "Después de que comiste"])
  principal: uno_de(["llámame", "te avisé", "vamos al cine"])

respuesta: "{principal}"
tipo: completar

enunciado: "En la oración compuesta '{subordinada}, {principal}', ¿cuál es la oración principal (la que contiene la información central independiente)?"

explicacion: |
  La oración principal es aquella que puede existir gramaticalmente de forma independiente y cuyo verbo es el núcleo de la estructura.
```

### 15 — pregunta 15

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "basico"
  tags: ["posterioridad", "conectores", "basico"]

variables:
  accion1: uno_de(["terminamos", "salimos", "aprobamos", "llegamos", "comenzamos"])
  accion2: uno_de(["comimos", "descansamos", "viajamos", "estudiemos", "descansamos"])
  conector: "después de que"

respuesta: "{conector}"
tipo: completar

enunciado: "Si la acción '{accion1}' ocurre primero y '{accion2}' luego, el conector adecuado para unir ambas es: "

explicacion: |
  'Después de que' indica que la acción de la subordinada sucede cronológicamente antes que la de la principal.
```

### 16 — pregunta 16

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["limite", "conectores", "intermedio"]

variables:
  accion_continua: uno_de(["esperé", "trabajé", "estuve", "busqué", "corrí"])
  accion_final: uno_de(["llegó", "terminó", "apareció", "sonó", "llovió"])
  conector: "hasta que"

respuesta: "{conector}"
tipo: completar

enunciado: "Completa: '{accion_continua} {conector} {accion_final}' para indicar el límite temporal de una acción."

explicacion: |
  'Hasta que' marca el punto final en el tiempo donde cesa la acción de la oración principal.
```

### 17 — pregunta 17

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["matiz", "conectores", "avanzado"]

variables:
  accion: uno_de(["te veo", "te llamo", "salgo", "vuelvo", "apareces"])
  conector_inmediato: "en cuanto"
  conector_general: "cuando"

respuesta: "{conector_inmediato}"
tipo: completar

enunciado: "Para expresar inmediatez absoluta ('tan pronto como'), entre '{conector_general}' y '{conector_inmediato}', ¿cuál es más preciso?"

explicacion: |
  'En cuanto' implica una secuencia inmediata, sin demora, mientras que 'cuando' puede referirse a cualquier momento, habitual o específico.
```

### 18 — pregunta 18

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["indicativo", "tiempo", "avanzado"]

variables:
  accion_pasada: uno_de(["iba", "estudiaba", "jugaba", "cocinaba", "leía"])
  accion_futura: uno_de(["vayas", "llegues", "termines", "salgas", "hables"])
  conector: "cuando"

respuesta: "indicativo"
tipo: completar

enunciado: "En la oración 'Siempre {accion_pasada} {conector} iba al parque', el verbo de la subordinada está en modo: "

explicacion: |
  Cuando 'cuando' se refiere a hechos habituales en el pasado o presentes, se utiliza el indicativo, no el subjuntivo.
```

### 19 — pregunta 19

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["sinonimia", "conectores", "intermedio"]

variables:
  accion1: uno_de(["recibí", "terminé", "llegué", "abrí", "vi"])
  accion2: uno_de(["te avisé", "lo llamé", "salí", "corrí", "grité"])
  conector: "tan pronto como"

respuesta: "{conector}"
tipo: completar

enunciado: "Sustituye 'en cuanto' por su sinónimo temporal más común en: '{accion1} {conector} {accion2}'."

explicacion: |
  'Tan pronto como' es sinónimo de 'en cuanto' y ambos expresan inmediatez temporal.
```

### 20 — pregunta 20

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["inicio", "conectores", "intermedio"]

variables:
  accion_inicial: uno_de(["conocí", "empecé", "llegué", "aprendí", "viajé"])
  accion_continua: uno_de(["estudio", "trabajo", "vivo", "escribo", "viajo"])
  conector: "desde que"

respuesta: "{conector}"
tipo: completar

enunciado: "Para indicar el punto de inicio de una acción que continúa hasta el presente o un momento pasado: '{accion_inicial} {conector} {accion_continua}'."

explicacion: |
  'Desde que' marca el origen temporal de una situación, estableciendo un intervalo que comienza en ese momento.
```

### 21 — pregunta 21

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["sujeto", "analisis", "intermedio"]

variables:
  sujeto_sub: uno_de(["el sol", "mi hermano", "la lluvia", "el profesor", "nosotros"])
  verbo_sub: uno_de(["se ponía", "llegaba", "llovía", "enseñaba", "estaba"])
  sujeto_princ: uno_de(["armamos", "salimos", "corrimos", "cantamos", "viajamos"])

respuesta: "{sujeto_sub}"
tipo: completar

enunciado: "En la oración '{verbo_sub} {sujeto_sub}, {sujeto_princ} la carpa', ¿quién es el sujeto de la subordinada adverbial de tiempo?"

explicacion: |
  La subordinada es '{verbo_sub} {sujeto_sub}'. El sujeto de esta cláusula es '{sujeto_sub}', diferente del sujeto de la principal.
```

### 22 — pregunta 22

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["condicion", "conectores", "avanzado"]

variables:
  accion: uno_de(["salgas", "vengas", "termines", "llegues", "hables"])
  conector: "en cuanto"
  resultado: uno_de(["te avisaré", "te llamaré", "saldré", "volveré", "gritaré"])

respuesta: "{conector}"
tipo: completar

enunciado: "Completa la frase condicional-temporal: '{conector} {accion}, {resultado}'."

explicacion: |
  'En cuanto' introduce una condición temporal inmediata: la acción principal se desencadena instantáneamente al cumplirse la subordinada.
```

### 23 — pregunta 23

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["errores", "subjuntivo", "avanzado"]

variables:
  conector_erroneo: "después de"
  conector_correcto: "después de que"
  accion: uno_de(["llegues", "termines", "salgas", "vengas", "hables"])

respuesta: "{conector_correcto}"
tipo: completar

enunciado: "En la frase 'Te avisaré {conector_erroneo} {accion}', ¿cuál es la forma correcta del conector?"

explicacion: |
  'Después de' es una preposición que requiere un sustantivo o gerundio. Para introducir una oración con verbo conjugado, se debe usar la locución conjuntiva 'después de que'.
```

### 24 — pregunta 24

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["anterioridad", "indicativo", "intermedio"]

variables:
  accion_pasada: uno_de(["comiste", "llegaste", "terminaste", "saliste", "hablaste"])
  accion_pasada_anterior: uno_de(["había comido", "había llegado", "había terminado", "había salido", "había hablado"])
  conector: "después de que"

respuesta: "{conector}"
tipo: completar

enunciado: "Para expresar anterioridad en el pasado con indicativo: '{accion_pasada} {conector} {accion_pasada_anterior}'."

explicacion: |
  Cuando la anterioridad es un hecho consumado en el pasado, 'después de que' se usa con indicativo (o pluscuamperfecto), a diferencia del subjuntivo en contextos futuros/inciertos.
```

### 25 — pregunta 25

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "basico"
  tags: ["funcion", "pregunta", "basico"]

variables:
  accion: uno_de(["fue", "llegó", "terminó", "salió", "comenzó"])
  tiempo: uno_de(["ayer", "a las tres", "cuando llovía", "mañana", "siempre"])

respuesta: "¿cuándo?"
tipo: completar

enunciado: "La subordinada adverbial de tiempo responde principalmente a la pregunta: "

explicacion: |
  Estas oraciones indican el momento, duración o frecuencia de la acción principal, respondiendo a '¿cuándo?', '¿hasta cuándo?' o '¿desde cuándo?'.
```

### 26 — pregunta 26

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["comparacion", "gerundio", "intermedio"]

variables:
  accion1: uno_de(["cocinaba", "leía", "escuchaba", "trabajaba", "estudiaba"])
  accion2: uno_de(["llegaste", "sonó el teléfono", "terminó la película", "abrió la puerta", "llovió"])
  forma_subordinada: "mientras + verbo conjugado"
  forma_gerundio: "mientras + gerundio"

respuesta: "{forma_subordinada}"
tipo: completar

enunciado: "Para formar una subordinada adverbial de tiempo explícita (con sujeto propio) en lugar de una perífrasis con gerundio, usamos: "

explicacion: |
  'Mientras + gerundio' es una construcción perifrástica. La subordinada requiere 'mientras' seguido de un verbo conjugado con sujeto explícito o implícito.
```

### 27 — pregunta 27

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "basico"
  tags: ["lista", "conectores", "basico"]

variables:
  conector: uno_de(["cuando", "mientras", "antes de que", "después de que"])
  accion: uno_de(["llegues", "termines", "salgas", "vengas"])

respuesta: "{conector}"
tipo: completar

enunciado: "¿Cuál de estos conectores NO es temporal? (Opción A: 'cuando', Opción B: 'mientras', Opción C: 'porque', Opción D: 'antes de que')"

explicacion: |
  'Porque' es un conector causal, no temporal. Los demás indican tiempo.
```

### 28 — pregunta 28

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["estructura", "analisis", "intermedio"]

variables:
  subordinada: uno_de(["Cuando llueva", "Mientras duermas", "Antes de que salgas"])
  verbo_principal: uno_de(["llevaré", "avisaré", "saldré", "volveré", "gritaré"])
  objeto: uno_de(["el paraguas", "la noticia", "temprano", "tarde", "allí"])

respuesta: "{subordinada}"
tipo: completar

enunciado: "Completa la oración compuesta: '{subordinada}, {verbo_principal} {objeto}'."

explicacion: |
  La estructura es: Subordinada de Tiempo + (coma opcional) + Oración Principal.
```

### 29 — pregunta 29

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["analisis", "principal", "intermedio"]

variables:
  subordinada: uno_de(["Mientras el sol se ponía", "Cuando llegaste", "Antes de que comieras"])
  accion_principal: uno_de(["armamos", "salimos", "corrimos", "cantamos", "viajamos"])
  objeto: uno_de(["la carpa", "temprano", "tarde", "allí", "el parque"])

respuesta: "{accion_principal}"
tipo: completar

enunciado: "En la oración '{subordinada}, {accion_principal} {objeto}', ¿cuál es el verbo de la oración principal?"

explicacion: |
  El verbo principal es el núcleo de la oración independiente que contiene la información central.
```

### 30 — pregunta 30

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "avanzado"
  tags: ["futuro", "inmediatez", "avanzado"]

variables:
  accion_sub: uno_de(["llegues", "termines", "salgas", "vengas", "hables"])
  conector: "tan pronto como"
  accion_princ: uno_de(["te avisaré", "te llamaré", "saldré", "volveré", "gritaré"])

respuesta: "{conector}"
tipo: completar

enunciado: "Completa la frase de inmediatez futura: '{conector} {accion_sub}, {accion_princ}'."

explicacion: |
  'Tan pronto como' conecta una condición temporal futura con un resultado inmediato en el futuro.
```

### 31 — pregunta 31

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["concordancia", "error", "intermedio"]

variables:
  sujeto: uno_de(["el equipo", "mi abuela", "los estudiantes", "el tren", "nosotros"])
  verbo_erroneo: uno_de(["llegaron", "llego", "llegamos", "llegué", "llegan"])
  verbo_correcto: uno_de(["llegó", "llegó", "llegaron", "llegó", "llegamos"])
  conector: "cuando"

respuesta: "{verbo_correcto}"
tipo: completar

enunciado: "En la oración '{sujeto} {conector} {verbo_erroneo}, hay un error de concordancia. ¿Cuál es la forma correcta del verbo?"

explicacion: |
  El verbo debe concordar en número y persona con el sujeto '{sujeto}'.
```

### 32 — pregunta 32

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "basico"
  tags: ["limite", "conectores", "basico"]

variables:
  accion: uno_de(["esperé", "trabajé", "estuve", "busqué", "corrí"])
  accion_final: uno_de(["llegó", "terminó", "apareció", "sonó", "llovió"])
  conector: "hasta que"

respuesta: "{conector}"
tipo: completar

enunciado: "Completa la oración que indica el fin de una acción: '{accion} {conector} {accion_final}'."

explicacion: |
  'Hasta que' marca el punto final temporal de la acción principal.
```

### 33 — pregunta 33

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["identificacion", "clausula", "intermedio"]

variables:
  subordinada: uno_de(["Cuando llueva", "Mientras duermas", "Antes de que salgas"])
  accion_principal: uno_de(["llevaré", "avisaré", "saldré", "volveré", "gritaré"])
  objeto: uno_de(["el paraguas", "la noticia", "temprano", "tarde", "allí"])

respuesta: "{subordinada}"
tipo: completar

enunciado: "En la oración '{subordinada}, {accion_principal} {objeto}', ¿cuál es la cláusula subordinada adverbial de tiempo?"

explicacion: |
  La cláusula subordinada es la que introduce el conector temporal y depende de la principal.
```

### 34 — pregunta 34

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_tiempo"
  nivel: "intermedio"
  tags: ["inicio", "pasado", "intermedio"]

variables:
  accion_inicial: uno_de(["conocí", "empecé", "llegué", "aprendí", "viajé"])
  conector: "desde que"
  accion_continua_pasada: uno_de(["estudié", "trabajé", "viví", "escribí", "viajé"])

respuesta: "{conector}"
tipo: completar

enunciado: "Completa la oración que indica el inicio en el pasado: '{accion_inicial} {conector} {accion_continua_pasada}'."

explicacion: |
  'Desde que' marca el origen temporal, incluso si la acción continúa en el pasado (y no en el presente).
```
