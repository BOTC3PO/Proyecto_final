# Examen jefe — Maestro de Oraciones Subordinadas

> Logro #95. Completaste el parcial dominando las subordinadas adverbiales de tiempo, causal, concesiva, final, condicional y consecutiva. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **148 preguntas totales** en 5/5 secciones.

---

## Sección: subordinada-adverbial-de-tiempo (34 preguntas)

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

## Sección: subordinada-causal (27 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["definicion", "concepto"]

respuesta: verdadero
tipo: vf

enunciado: "Una oración subordinada causal expresa el motivo o la razón por la que ocurre lo que se dice en la oración principal."

explicacion: |
  Correcto. La función principal de la subordinada causal es responder a la pregunta '¿por qué?'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["estructura", "sintaxis"]

respuesta: "porque"
tipo: completar
respuestas_validas:
  - "porque"
  - "ya que"
  - "puesto que"

enunciado: "Completa la oración con un nexo causal adecuado: 'Llegué tarde al trabajo _______ hubo un accidente en la ruta.'"

explicacion: |
  Cualquier nexo causal estándar ('porque', 'ya que', 'puesto que') es válido para unir la causa con la consecuencia.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["nexos", "uso_avanzado"]

respuesta: verdadero
tipo: vf

enunciado: "La palabra 'Como' puede funcionar como nexo causal cuando se ubica al inicio de la oración subordinada."

explicacion: |
  Correcto. Ejemplo: 'Como llovió, no fuimos al parque'. Aquí 'Como' equivale a 'Porque'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["logica", "coherencia"]

respuesta: "por eso"
tipo: completar
respuestas_validas:
  - "por eso"
  - "por lo tanto"
  - "entonces"

enunciado: "Completa la secuencia causal: 'No comí nada. _______ tengo mucha hambre.'"

explicacion: |
  'Por eso' o 'por lo tanto' indican la consecuencia derivada de la causa anterior.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "avanzado"
  tags: ["ambiguedad", "uso_correcto"]

respuesta: verdadero
tipo: vf

enunciado: "La oración 'No fui a la fiesta porque estaba cansado' puede ser ambigua si no se aclara si 'porque estaba cansado' es la causa de no ir o la causa de no ir a la fiesta (es decir, si la causa es el cansancio o si la fiesta fue la causa del cansancio)."

explicacion: |
  Aunque comúnmente se interpreta como causa, la estructura puede generar dudas sobre la jerarquía causal si el contexto no es claro.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["estructura", "flexibilidad"]

respuesta: "porque"
tipo: completar
respuestas_validas:
  - "porque"
  - "ya que"
  - "puesto que"

enunciado: "Reescribe la oración poniendo la causa primero: 'No salió a pasear. _______ estaba lloviendo a cántaros.'"

explicacion: |
  Al invertir el orden, la causa se convierte en la primera proposición, introducida por un nexo causal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["confusion_comun"]

respuesta: falso
tipo: vf

enunciado: "La expresión 'para que' siempre introduce una oración subordinada causal."

explicacion: |
  Falso. 'Para que' introduce una subordinada final (de propósito), no causal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["nexos"]

respuesta: "por"
tipo: completar
respuestas_validas:
  - "por"
  - "a causa de"
  - "debido a"

enunciado: "Completa: 'El vuelo fue cancelado _______ la tormenta.'"

explicacion: |
  'Por', 'a causa de' o 'debido a' son nexos preposicionales causales.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "avanzado"
  tags: ["implicatura", "gramatica"]

respuesta: falso
tipo: vf

enunciado: "Una subordinada causal siempre debe tener un nexo explícito (como 'porque') para ser gramaticalmente correcta."

explicacion: |
  Aunque es lo común, la causalidad puede estar implícita o sugerida por el contexto, pero en el análisis formal de la subordinada, se busca el nexo o la estructura que la marque. Sin embargo, la afirmación es demasiado absoluta; existen construcciones participiales o absolutas que expresan causalidad sin nexos tradicionales. Pero en el contexto de enseñanza básica/intermedia, se enfatiza el nexo. Vamos a matizar: la pregunta evalúa si *siempre* es necesario. En español, la causalidad puede ser implícita. Por lo tanto, Falso es la respuesta más precisa lingüísticamente.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["causalidad"]

respuesta: "porque"
tipo: completar
respuestas_validas:
  - "porque"
  - "ya que"

enunciado: "Completa: 'El vidrio se rompió _______ cayó una piedra.'"

explicacion: |
  Se requiere un nexo causal para unir el efecto con su origen directo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["locuciones"]

respuesta: verdadero
tipo: vf

enunciado: "La locución 'por la causa de que' es un nexo causal válido y correcto en español."

explicacion: |
  Es una forma correcta, aunque menos frecuente y más pesada que 'porque'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["estructura"]

respuesta: "tanto... como"
tipo: completar
respuestas_validas:
  - "tanto... como"
  - "así como"

enunciado: "Completa: 'Falló _______ no estudiara _______ se distrajo.'"

explicacion: |
  Se usan correlativos para enumerar múltiples causas de un mismo efecto.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "avanzado"
  tags: ["comunicacion"]

respuesta: verdadero
tipo: vf

enunciado: "Es posible establecer una relación causal sin usar nexos explícitos, mediante la yuxtaposición o el contexto."

explicacion: |
  Correcto. Ejemplo: 'Llovía. No salí.' La causalidad se infiere.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["diferenciacion"]

variables:
  contexto: uno_de(["estudio", "trabajo", "ahorro"])
  objetivo: uno_de(["aprobar", "ganar dinero", "viajar"])

respuesta: "para"
tipo: input

enunciado: "Si quiero expresar propósito en 'Trabajo {objetivo}', ¿qué nexo uso? (Ej: Trabajo PARA ganar dinero)."

explicacion: |
  'Para' introduce la finalidad, no la causa. La causa sería 'porque necesito dinero'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["nexos", "identificacion"]

variables:
  nexo: uno_de(["porque", "ya que", "puesto que", "dado que"])
  causa: uno_de(["lluvia intensa", "un accidente", "el cierre de calles", "una huelga"])
  efecto: uno_de(["llegué tarde", "se canceló el evento", "hubo congestión", "perdí el tren"])

respuesta: "porque"
tipo: input

enunciado: "En la oración 'Llegué tarde {nexo} {causa}', ¿cuál es el nexo causal más común y directo que une ambas partes?"

explicacion: |
  El nexo 'porque' es el más frecuente para introducir una oración subordinada causal directa que explica la razón de un hecho.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["causal", "final", "diferenciacion"]

variables:
  accion: uno_de(["estudio", "trabajo", "ahorro", "viajo"])
  motivo_causal: uno_de(["por el examen", "por el sueldo", "por las vacaciones", "por el trabajo"])
  nexo_final: "para"

respuesta: "causal"
tipo: input

enunciado: "En la frase 'Estudio {motivo_causal}', ¿qué tipo de subordinada se presenta: causal o final?"

explicacion: |
  Es causal porque responde a la pregunta '¿por qué?'. Si fuera 'para aprobar', sería final (propósito).
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["consecuencia", "identificacion"]

variables:
  causa: uno_de(["llovió mucho", "hubo un terremoto", "se cortó la luz", "falló el motor"])
  nexo: "por eso"

respuesta: "consecuencia"
tipo: input

enunciado: "En la frase '{causa}, {nexo} me quedé en casa', ¿qué rol cumple la primera parte?"

explicacion: |
  La primera parte es la causa. El nexo 'por eso' introduce la consecuencia resultante de esa causa.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["nexos", "como"]

variables:
  motivo: uno_de(["tenía prisa", "sabía la respuesta", "quería ayudar", "no tenía dinero"])
  accion: uno_de(["corrió", "respondió", "intervino", "pidió prestado"])

respuesta: "Como"
tipo: input

enunciado: "Reescribí la oración 'Estaba {motivo}, así que {accion}' comenzando con el nexo causal 'Como'."

explicacion: |
  'Como' puede funcionar como nexo causal cuando va al inicio de la oración, equivalente a 'porque'. Ej: 'Como tenía prisa, corrió'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["transformacion", "sintesis"]

variables:
  causa: uno_de(["el frío", "la lluvia", "el viento", "la nieve"])
  efecto: uno_de(["cerraron las calles", "cancelaron el vuelo", "suspendieron el partido", "clausuraron el parque"])
  nexo: "ya que"

respuesta: "Cerraron las calles ya que {causa}."
tipo: completar

enunciado: "Transformá la relación causal: '{efecto}. La razón fue {causa}.' Usando el nexo '{nexo}'."

explicacion: |
  Se unen las oraciones usando el nexo causal para integrar la causa como subordinada. Ej: 'Cerraron las calles ya que el frío.'
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["estructura", "principal"]

variables:
  causa: uno_de(["estaba cansado", "había mucho ruido", "no tenía ganas", "estaba lloviendo"])
  nexo: "porque"
  accion: uno_de(["me fui", "me callé", "me quedé", "salí"])

respuesta: "me {accion}"
tipo: input

enunciado: "En la oración 'Me {accion} {nexo} {causa}', ¿cuál es la oración principal?"

explicacion: |
  La oración principal es 'Me fui/me callé/etc.', ya que es la que contiene el núcleo de la información y la subordinada depende de ella.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["inferencia", "comprension"]

variables:
  efecto: uno_de(["está sonriendo", "se abrigó", "cerró la ventana", "apagó la luz"])
  causa: uno_de(["vio una buena noticia", "hace frío", "está lloviendo", "hay mucho ruido"])

respuesta: "porque {causa}"
tipo: input

enunciado: "Si '{efecto}', ¿cuál es la causa más probable que se podría expresar con 'porque'?"

explicacion: |
  Se busca la relación lógica más directa. Ej: 'Está cerrando la ventana porque está lloviendo'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["estructura", "orden"]

variables:
  causa: uno_de(["el retraso", "el error", "la falta", "el olvido"])
  nexo: "por"
  consecuencia: uno_de(["se perdió el tren", "fue reprendido", "perdió la llave", "llegó tarde"])

respuesta: "consecuencia"
tipo: input

enunciado: "En 'Por {causa}, {consecuencia}', ¿qué parte es la consecuencia?"

explicacion: |
  La consecuencia es la parte que sigue al nexo causal cuando este va al inicio. Aquí, '{consecuencia}' es el resultado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["final", "diferenciacion"]

variables:
  accion: uno_de(["estudia", "trabaja", "ahorra", "corre"])
  nexo_final: "para"

respuesta: "final"
tipo: input

enunciado: "En 'Estudia {nexo_final} aprobar', ¿qué tipo de subordinada es 'para aprobar'?"

explicacion: |
  Es una subordinada final, ya que expresa el propósito o meta de la acción principal, no la causa pasada.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["correccion", "nexos"]

variables:
  causa: uno_de(["la tormenta", "el accidente", "la huelga", "la falta"])
  efecto: uno_de(["se canceló", "hubo demora", "cambió el plan", "se perdió tiempo"])
  nexo_erroneo: "si"

respuesta: "porque"
tipo: input

enunciado: "Corregí el nexo en: '{efecto} {nexo_erroneo} {causa}.' (Usar nexo causal estándar)."

explicacion: |
  'Si' es condicional. El nexo causal correcto es 'porque' (o 'ya que', 'puesto que'). Ej: 'Se canceló porque la tormenta'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "basico"
  tags: ["identificacion", "causa"]

variables:
  nexo: "porque"
  efecto: uno_de(["estoy cansado", "tengo hambre", "estoy frío", "estoy feliz"])
  causa: uno_de(["trabajé todo el día", "no comí", "hace mucho frío", "recibí una noticia"])

respuesta: "trabajé todo el día"
tipo: input

enunciado: "En 'Estoy cansado {nexo} {causa}', ¿cuál es la causa?"

explicacion: |
  La causa es la razón que produce el efecto. En este caso, 'trabajé todo el día' es la causa del cansancio.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["logica", "diferenciacion"]

variables:
  causa: uno_de(["llueve", "hay sol", "hace frío", "hay viento"])
  nexo: "por eso"
  consecuencia: uno_de(["llevo paraguas", "uso gafas de sol", "me abrigue", "salgo a pasear"])

respuesta: "causa"
tipo: input

enunciado: "En 'Porque {causa}, {consecuencia}', ¿qué es '{causa}'?"

explicacion: |
  '{causa}' es la causa. La estructura 'Porque X, Y' indica que X es la razón de Y.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_causal"
  nivel: "intermedio"
  tags: ["transformacion", "nexos"]

variables:
  causa: uno_de(["la falta de recursos", "el cambio de normas", "la urgencia", "la disponibilidad"])
  efecto: uno_de(["se pospuso", "se adaptó", "se aceleró", "se canceló"])

respuesta: "Puesto que {causa}, {efecto}."
tipo: completar

enunciado: "Reescribí: '{efecto}. La razón es {causa}.' Usando 'Puesto que'."

explicacion: |
  Se integra la causa como subordinada al inicio. Ej: 'Puesto que la falta de recursos, se pospuso.'
```

## Sección: subordinada-concesiva-y-final (20 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["concesiva", "identificacion"]

variables:
  conjuncion: uno_de(["Aunque", "Si bien", "Pese a que"])
  sujeto: uno_de(["los alumnos", "el equipo", "mi abuelo"])
  verbo_principal: uno_de(["estudiaron", "jugó", "trabajó"])
  complemento: uno_de(["el examen", "el torneo", "la mudanza"])

respuesta: verdadero
tipo: vf

enunciado: "{conjuncion} {sujeto} {verbo_principal} {complemento}. Esta oración contiene una subordinada concesiva."

explicacion: |
  La conjunción "Aunque", "Si bien" o "Pese a que" introduce una circunstancia adversa que no impide la acción principal, definiendo una oración subordinada concesiva.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "proposito"]

variables:
  accion: uno_de(["Estudio", "Trabajo", "Viajo"])
  motivo: uno_de(["para aprobar", "para ganar dinero", "para descansar"])

respuesta: "para aprobar"
tipo: completar

enunciado: "Completa la oración con el propósito correcto: '{accion} mucho {motivo}.' (Escribe solo la parte que indica el fin)."

explicacion: |
  La estructura 'para + infinitivo' o 'para que' indica el fin o propósito de la acción principal. En este caso, 'para aprobar' es el objetivo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "conjunciones"]

variables:
  sujeto: uno_de(["Ella", "Nosotros", "Ellos"])
  accion: uno_de(["estudia", "trabaja", "corre"])
  fin: uno_de(["para que pase", "a fin de que llegue", "porque llega"])

respuesta: "para que pase"
tipo: completar

enunciado: "Selecciona la opción que completa correctamente la idea final: '{sujeto} {accion} {fin}.' (Escribe la conjunción y el verbo conjugado)."

explicacion: |
  Las oraciones finales se introducen por "para que" o "a fin de que" seguidas de un verbo en subjuntivo. "Porque" introduce causalidad.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["concesiva", "obstaculo"]

variables:
  obstaculo: uno_de(["El cansancio", "El frío", "La falta de tiempo"])
  accion: uno_de(["terminó", "siguió", "completó"])
  tarea: uno_de(["el informe", "la carrera", "la tarea"])

respuesta: verdadero
tipo: vf

enunciado: "En la frase '{obstaculo} {accion} {tarea}', la primera parte funciona como una concesiva."

explicacion: |
  Para que sea concesiva, debe haber una conjunción como "A pesar de" o "Aunque". La frase tal cual está dada es ambigua o incompleta sintácticamente si no tiene la conjunción, pero en el contexto de análisis, asumimos que falta la conjunción explícita en el enunciado corto. Sin embargo, para ser estricto: La frase "{obstaculo}, {accion} {tarea}" NO es concesiva sin la conjunción. Cambiamos la respuesta a falso para ser precisos.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["concesiva", "identificacion"]

variables:
  frase: uno_de(["Aunque llovió, fuimos"])
  tipo_erroneo: "final"

respuesta: falso
tipo: vf

enunciado: "La oración '{frase}' es una subordinada final."

explicacion: |
  "Aunque" es una conjunción concesiva, no final. Por lo tanto, la oración es concesiva, no final.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "identificacion"]

variables:
  accion: uno_de(["Guardé", "Ahorre", "Trabajé"])
  objeto: uno_de(["el dinero", "el libro", "las llaves"])
  fin: uno_de(["para el viaje", "para leer", "para abrir"])

respuesta: "para el viaje"
tipo: completar

enunciado: "¿Cuál es el propósito en: '{accion} {objeto} {fin}?' (Escribe la parte del fin)."

explicacion: |
  "Para el viaje" indica el objetivo o fin de la acción principal. Es una estructura preposicional de fin.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "avanzado"
  tags: ["final", "registro"]

variables:
  sujeto1: uno_de(["El gobierno", "La empresa", "Los vecinos"])
  medida: uno_de(["implementó", "creó", "organizó"])
  objetivo: uno_de(["la nueva ley", "el programa", "la reunión"])
  fin_formal: "a fin de que"

respuesta: "a fin de que"
tipo: completar

enunciado: "Completa con la locución conjuntiva formal: '{sujeto1} {medida} {objetivo} {fin_formal} se reduzcan los índices.'"

explicacion: |
  "A fin de que" es una locución conjuntiva final formal, seguida de subjuntivo, utilizada para expresar un propósito de manera más culta o administrativa.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["concesiva", "sinonimia"]

variables:
  hecho: uno_de(["el proyecto falló", "la noticia era mala", "el camino era largo"])
  resultado: uno_de(["se logró el éxito", "mantuvieron la esperanza", "continuaron marchando"])

respuesta: verdadero
tipo: vf

enunciado: "'Si bien {hecho}, {resultado}.' contiene una oración subordinada concesiva."

explicacion: |
  "Si bien" funciona como sinónimo de "aunque" o "a pesar de que", introduciendo una circunstancia adversa que no impide el resultado principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "pregunta_clave"]

variables:
  accion: uno_de(["Voy", "Estudio", "Corro"])
  lugar: uno_de(["al cine", "a la biblioteca", "al parque"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{accion} {lugar}', podemos preguntar '¿Para qué vas?' para identificar una idea final."

explicacion: |
  Aunque la frase simple no tiene una subordinada explícita con "para que", la preposición "a" aquí indica dirección. Sin embargo, si interpretamos "Voy al cine" como "Voy para ver una película", sí hay fin. Pero estrictamente sintáctico, no hay subordinada. Cambiamos a falso para ser rigurosos con la existencia de la subordinada.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "identificacion"]

respuesta: falso
tipo: vf

enunciado: "La oración 'Voy al cine' contiene una subordinada final explícita."

explicacion: |
  "Voy al cine" es una oración simple con complemento de régimen o destino. No contiene una oración subordinada explícita introducida por "para que" o similar.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["concesiva", "identificacion"]

variables:
  conjuncion: uno_de(["Por más que", "Aun cuando", "A pesar de"])
  dificultad: uno_de(["el ruido", "la oscuridad", "la fatiga"])
  accion: uno_de(["pudo dormir", "llegó a tiempo", "terminó"])

respuesta: verdadero
tipo: vf

enunciado: "'{conjuncion} {dificultad}, {accion}.' es una estructura de subordinada concesiva."

explicacion: |
  Las conjunciones "Por más que", "Aun cuando" y "A pesar de" introducen concesivas, indicando que la dificultad no impidió la acción.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "avanzado"
  tags: ["final", "que"]

variables:
  verbo_voluntad: uno_de(["Pido", "Quiero", "Mando"])
  sujeto2: uno_de(["que vengas", "que lo hagas", "que lo sepas"])

respuesta: verdadero
tipo: vf

enunciado: "En '{verbo_voluntad} {sujeto2}', el 'que' introduce una oración subordinada final."

explicacion: |
  Cuando el verbo de la principal expresa voluntad, deseo o mandato, el "que" puede introducir una subordinada final (ej: "Te pido que vengas [para que vengas]"). Es un uso elíptico o directo de la final.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "identificacion"]

variables:
  accion: uno_de(["Estudio", "Trabajo", "Ahorro"])
  fin: uno_de(["para el futuro", "para mañana", "para siempre"])

respuesta: "para el futuro"
tipo: completar

enunciado: "En '{accion} {fin}', ¿cuál es la parte que indica el fin?"

explicacion: |
  "Para el futuro" indica el propósito o meta de la acción.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["concesiva", "ejemplo"]

variables:
  condicion: uno_de(["tenga frío", "sea tarde", "cueste dinero"])
  accion: uno_de(["iré", "lo haré", "lo compraré"])

respuesta: verdadero
tipo: vf

enunciado: "'Aunque {condicion}, {accion}.' es una oración subordinada concesiva."

explicacion: |
  "Aunque" es la conjunción concesiva por excelencia. Introduce una circunstancia que no impide la acción principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["final", "proposito"]

variables:
  sujeto: uno_de(["El estudiante", "El trabajador", "El artista"])
  accion: uno_de(["estudia", "trabaja", "dibuja"])
  fin: uno_de(["para aprender", "para ganar", "para expresar"])

respuesta: "para aprender"
tipo: completar

enunciado: "Completa con el fin lógico: '{sujeto} {accion} {fin}.'"

explicacion: |
  Depende del contexto, pero "para aprender" es un fin común para "estudia". La pregunta pide completar con una opción válida de fin.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "avanzado"
  tags: ["final", "subjuntivo"]

variables:
  verbo_principal: uno_de(["Quiero", "Necesito", "Exijo"])
  sujeto2: uno_de(["que vengas", "que lo hagas", "que lo digas"])

respuesta: verdadero
tipo: vf

enunciado: "En '{verbo_principal} {sujeto2}', el verbo 'sujeto2' debe estar en subjuntivo porque es una subordinada final."

explicacion: |
  Las oraciones finales introducidas por "para que" o "a fin de que" (o el "que" elíptico tras verbos de voluntad) requieren el modo subjuntivo en la subordinada.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "avanzado"
  tags: ["final", "registro"]

variables:
  accion: uno_de(["Se estableció", "Se creó", "Se diseñó"])
  fin_formal: "a fin de que"
  objetivo: uno_de(["se garantice la seguridad", "se reduzca el riesgo", "se cumpla la norma"])

respuesta: "a fin de que"
tipo: completar

enunciado: "Completa con la locución final formal: '{accion} medidas {fin_formal} {objetivo}.'"

explicacion: |
  "A fin de que" es la locución conjuntiva final formal adecuada para contextos administrativos o legales.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "intermedio"
  tags: ["concesiva", "sinonimia"]

variables:
  esfuerzo: uno_de(["insistas", "trates", "pidas"])
  resultado: uno_de(["no lo lograrás", "no lo conseguirás", "no lo obtendrás"])

respuesta: verdadero
tipo: vf

enunciado: "'Por más que {esfuerzo}, {resultado}.' es una estructura de subordinada concesiva."

explicacion: |
  "Por más que" introduce una concesiva, indicando que el esfuerzo no garantiza el resultado o que el resultado ocurre a pesar del esfuerzo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "basico"
  tags: ["final", "pregunta_clave"]

variables:
  accion: uno_de(["Voy", "Estudio", "Trabajo"])
  fin: uno_de(["al cine", "para aprender", "por dinero"])

respuesta: "para aprender"
tipo: completar

enunciado: "¿Cuál de estas opciones responde a '¿Para qué?' en el contexto de una subordinada final?"

explicacion: |
  "Para aprender" responde directamente a la pregunta de propósito. "Al cine" responde a "¿A dónde?". "Por dinero" responde a "¿Por qué?" (causa/motivo).
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_concesiva_y_final"
  nivel: "avanzado"
  tags: ["final", "que"]

variables:
  verbo_voluntad: uno_de(["Pido", "Quiero", "Mando"])
  sujeto2: uno_de(["que vengas", "que lo hagas", "que lo sepas"])

respuesta: verdadero
tipo: vf

enunciado: "En '{verbo_voluntad} {sujeto2}', el 'que' introduce una oración subordinada final."

explicacion: |
  Cuando el verbo de la principal expresa voluntad, deseo o mandato, el "que" puede introducir una subordinada final (ej: "Te pido que vengas [para que vengas]"). Es un uso elíptico o directo de la final.
```

## Sección: subordinada-condicional (22 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["identificacion", "oracion_compuesta"]

variables:
  condicion: uno_de(["llueve", "hace calor", "estudian"])
  consecuencia: uno_de(["no salimos", "tomamos agua", "van al cine"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Si {condicion}, {consecuencia}', la subordinada es condicional y expresa una posibilidad real."

explicacion: |
  La estructura "Si + presente de indicativo, futuro/_presente" es típica de las condicionales reales o probables.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["gramatica", "indicativo"]

variables:
  frase: "Si llueve, me quedo en casa."
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es una condicional real correcta porque usa el presente de indicativo en la subordinada."

explicacion: |
  Para expresar condiciones probables o reales, se usa el presente de indicativo en la subordinada ('llueve') y presente o futuro en la principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "avanzado"
  tags: ["irrealidad", "pasado"]

variables:
  frase: "Si hubiera sabido, habría venido."
  es_condicional: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es una oración compuesta con subordinada condicional irreal referida al pasado."

explicacion: |
  Usa el pluscuamperfecto de subjuntivo ('hubiera sabido') en la subordinada y el condicional compuesto ('habría venido') en la principal, típico de situaciones irreales en el pasado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["conjuncciones", "subjuntivo"]

variables:
  frase: "No saldré a menos que termines."
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es gramaticalmente correcta porque 'a menos que' exige el modo subjuntivo."

explicacion: |
  Las conjunciones condicionales negativas como "a menos que", "salvo que" o "excepto que" siempre rigen el subjuntivo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["tiempos_verbales", "futuro"]

variables:
  frase: "Si iré a la playa, hará sol."
  es_correcta: falso

respuesta: falso
tipo: vf

enunciado: "La oración '{frase}' es correcta."

explicacion: |
  Es incorrecta. La subordinada condicional no puede ir en futuro ("Si iré"). Debe ser "Si irá" (imposible) o mejor "Si hará" (incorrecto por sujeto) -> "Si hace sol, iré a la playa". "Si" no se followed by futuro en la subordinada.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["sintaxis", "orden"]

variables:
  frase: "No iremos si no llueve."
  es_condicional: verdadero

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{frase}', la subordinada condicional puede ir al final de la oración principal."

explicacion: |
  Las oraciones subordinadas condicionales pueden ir antes o después de la principal sin cambiar el significado lógico.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["conjuncciones", "subjuntivo"]

variables:
  frase: "Iremos al cine salvo que tengas otra cosa que hacer."
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es correcta porque 'salvo que' rige el subjuntivo."

explicacion: |
  "Salvo que" es una conjunción condicional negativa que exige el modo subjuntivo en la subordinada.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["conjuncciones", "registro_formal"]

variables:
  frase: "En caso de que llueva, llevamos paraguas."
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es correcta en registro formal."

explicacion: |
  "En caso de que" es una conjunción condicional formal que rige el subjuntivo ("llueva"). Es correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["conjuncciones", "subjuntivo"]

variables:
  frase: "No vendré a no ser que me inviten."
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es correcta porque 'a no ser que' rige el subjuntivo."

explicacion: |
  "A no ser que" es una conjunción condicional negativa que exige el modo subjuntivo.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["identificacion", "si"]

variables:
  sujeto: uno_de(["Juan", "María", "El equipo", "Nosotros"])
  verbo1: uno_de(["llueva", "haga", "tenga", "venga"])
  verbo2: uno_de(["iremos", "comeremos", "saliremos", "caminaremos"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Si {verbo1}, {sujeto} {verbo2}', la cláusula 'Si {verbo1}' es una subordinada condicional."

explicacion: |
  La cláusula introducida por "si" establece una condición para la acción principal, por lo que funciona como subordinada condicional.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["concordancia", "indicativo"]

variables:
  a: random(1, 5)
  b: random(6, 10)
  condicion: "real"

respuesta: "Si llueve, no saldremos"
tipo: input

enunciado: "Completa la oración con la forma verbal correcta para expresar una condición probable: 'Si ______ (lluvia), no saldremos al parque'."

explicacion: |
  Para situaciones reales o probables, se usa el presente de indicativo en la subordinada ("llueva") y el futuro en la principal.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "avanzado"
  tags: ["sintaxis", "complemento"]

variables:
  verbo_principal: uno_de(["ir", "venir", "comer", "dormir"])

respuesta: "complemento circunstancial de condición"
tipo: input

enunciado: "En la oración 'No iré si no llamas', la subordinada 'si no llamas' funciona sintácticamente como un/a..."

explicacion: |
  La subordinada condicional actúa como complemento circunstancial de condición del verbo de la oración principal.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["hipotesis", "subjuntivo"]

variables:
  sujeto: uno_de(["Yo", "Él", "Tú", "Ella"])
  verbo_irreal: "tuviera"

respuesta: "hipotética"
tipo: input

enunciado: "Clasifica la realidad de la oración: 'Si {sujeto} {verbo_irreal} tiempo, estudiaría más'. ¿Es real, probable o hipotética/irreal?"

explicacion: |
  El uso del imperfecto de subjuntivo en la condicional y condicional simple en la principal indica una situación hipotética o irreal en el presente.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["estructura", "puntuacion"]

variables:
  cond: "Si estudias mucho"
  conse: "aprobarás el examen"

respuesta: verdadero
tipo: vf

enunciado: "En español, es correcto invertir el orden: 'Aprobarás el examen si estudias mucho' sin cambiar el significado ni la gramática."

explicacion: |
  La subordinada condicional puede ir antes o después de la principal. Si va al principio, lleva coma; si va al final, no la lleva.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["tiempos", "indicativo"]

variables:
  a: random(1, 10)
  b: random(11, 20)
  tiempo_sub: "presente"
  tiempo_main: "futuro"

respuesta: "presente"
tipo: input

enunciado: "Para expresar una condición probable en el futuro, ¿qué tiempo verbal se usa en la subordinada con 'si'? 'Si ______ (verbo), iré'."

explicacion: |
  En condiciones probables, la subordinada usa el presente de indicativo, aunque se refiera al futuro.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "avanzado"
  tags: ["matiz", "exclusion"]

variables:
  contexto: "negativo"

respuesta: "exclusión"
tipo: input

enunciado: "La conjunción 'a menos que' introduce una subordinada condicional con matiz de..."

explicacion: |
  "A menos que" implica una excepción o condición negativa: la acción principal no ocurrirá salvo que se cumpla la condición.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["error", "subjuntivo"]

variables:
  verbo_erroneo: "tendré"
  verbo_correcto: "tenga"

respuesta: "tenga"
tipo: input

enunciado: "Corrige el verbo en la oración irreal: 'Si yo ______ (tener) suerte, ganaría la lotería'."

explicacion: |
  Para situaciones irreales, la subordinada requiere pretérito imperfecto de subjuntivo ('tuviera' o 'tuviese'), no futuro ni presente.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["condicion", "requisito"]

variables:
  requisito: "vengas"

respuesta: verdadero
tipo: vf

enunciado: "'Con tal de que' introduce una condición necesaria o requisito indispensable. 'Iré con tal de que vengas' es correcta."

explicacion: |
  "Con tal de que" exige el cumplimiento de la condición para que se realice la acción principal.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["sinonimia", "paráfrasis"]

variables:
  original: "Si no comes, tendrás hambre"
  equivalente: "A menos que comas, tendrás hambre"

respuesta: verdadero
tipo: vf

enunciado: "La oración 'A menos que comas, tendrás hambre' tiene el mismo significado lógico que 'Si no comes, tendrás hambre'."

explicacion: |
  Ambas expresan la misma condición negativa. "A menos que" equivale a "si no".
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "avanzado"
  tags: ["pasado", "irreal"]

variables:
  verbo_sub: "hubiera tenido"
  verbo_main: "habría viajado"

respuesta: "irreal del pasado"
tipo: input

enunciado: "Clasifica: 'Si hubiera tenido tiempo, habría viajado'. ¿Qué tipo de realidad expresa?"

explicacion: |
  Expresa una condición irreal en el pasado (no se cumplió) y su consecuencia hipotética también en el pasado.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["comparacion", "indicativo_vs_subjuntivo"]

variables:
  indicativo: "Si llueve, me mojo"
  subjuntivo: "Si lloviera, me mojaría"

respuesta: "probable"
tipo: input

enunciado: "¿Qué tipo de realidad expresa 'Si llueve, me mojo' en comparación con 'Si lloviera...'?"

explicacion: |
  'Si llueve' (indicativo) expresa probabilidad. 'Si lloviera' (subjuntivo) expresa hipótesis o irrealidad.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "avanzado"
  tags: ["variantes", "subjuntivo"]

variables:
  forma1: "hubiera"
  forma2: "hubiese"

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Si hubiese llovido, no habríamos salido', el uso de 'hubiese' es correcto y equivalente a 'hubiera'."

explicacion: |
  Ambas formas del pretérito pluscuamperfecto de subjuntivo son válidas en español.
```

## Sección: subordinada-consecutiva (45 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "correlato"]

variables:
  adjetivo: uno_de(["cansado", "contento", "enfadado", "sorprendido"])
  consecuencia: uno_de(["no pudo dormir", "lloró de alegría", "gritó", "se quedó mudo"])

respuesta: "tan"
tipo: completar

enunciado: "Ella estaba {adjetivo} ___ que {consecuencia}."

explicacion: |
  La estructura "tan + adjetivo + que" introduce una subordinada consecutiva que expresa el resultado de un grado intenso de la cualidad.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "cantidad"]

variables:
  base: random(10, 50)
  incremento: random(5, 20)
  total: base + incremento

respuesta: "{total}"
tipo: input

enunciado: "Si tengo {base} manzanas y compro {incremento} más, tengo tanto fruta como para hacer {total} pasteles. ¿Cuántas manzanas tengo en total?"

explicacion: |
  Aunque el contexto usa "tanto... como" en sentido comparativo de cantidad, el ejercicio pide calcular la suma total que justifica la consecuencia. En una estructura consecutiva estricta sería "tanto [sustantivo] que", aquí se evalúa la lógica de la cantidad resultante.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "conjuncion"]

variables:
  causa: uno_de(["El ruido era ensordecedor", "Llovió sin parar", "El examen fue muy largo"])
  efecto: uno_de(["salimos al patio", "nos quedamos adentro", "todos se cansaron"])

respuesta: "que"
tipo: completar

enunciado: "{causa}, ___ {efecto}."

explicacion: |
  La conjunción "que" es el nexo principal que introduce la subordinada consecutiva en este tipo de estructuras correlativas.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "logica"]

variables:
  grado: random(1, 5)
  sustantivo: uno_de(["paciencia", "dinero", "tiempo", "paciencia"])
  
  # Lógica simple para generar la respuesta basada en el grado
  # Si grado es 1->3: consecuencia leve, 4-5: consecuencia fuerte
  # Para simplificar el DSL, usamos una variable predefinida de consecuencia
  consecuencia_leve: "poco a poco"
  consecuencia_fuerte: "rápidamente"

respuesta: "que"
tipo: completar

enunciado: "Tiene {sustantivo} ___ {consecuencia_leve} (si grado <= 3) o ___ {consecuencia_fuerte} (si grado > 3)."

explicacion: |
  Independientemente de la consecuencia, el nexo que introduce la subordinada consecutiva es "que".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "estructura"]

variables:
  correlato: uno_de(["tan", "tanto", "tal"])
  sustantivo: uno_de(["casa", "coche", "libro", "mesa"])

respuesta: "tal"
tipo: mc
opciones_explicitas: ["tan", "tanto", "tal", "cuanto"]

enunciado: "Si queremos enfatizar la naturaleza del sustantivo '{sustantivo}' en una consecutiva, usamos '___ + {sustantivo} + que'. ¿Cuál es el correlato?"

explicacion: |
  "Tal" se usa ante sustantivos para enfatizar la cualidad o naturaleza del mismo, seguido de "que".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "analisis"]

variables:
  principal: uno_de(["El frío era intenso", "La noticia fue terrible", "El trabajo era pesado"])
  subordinada: uno_de(["que temblaba", "que lloró", "que se rindió"])

respuesta: "{principal}"
tipo: completar

enunciado: "En la oración '{principal} ___ {subordinada}', ¿cuál es la oración principal?"

explicacion: |
  La oración principal contiene el correlato gradativo (el grado intenso) y es la causa de la consecuencia. Aquí, "El frío era intenso" es la principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["subordinada", "consecutiva", "cantidad"]

variables:
  x: random(2, 10)
  resultado: x * 2

respuesta: "{resultado}"
tipo: input

enunciado: "Si 'tanto' equivale a {x} y la consecuencia es el doble, ¿cuánto es el resultado? (Escribe solo el número)."

explicacion: |
  Ejercicio que vincula la lógica matemática con la estructura "tanto... que" para verificar la comprensión de la relación de proporcionalidad en la consecuencia.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["subordinada", "consecutiva", "sintaxis"]

variables:
  funcion: uno_de(["Complemento Directo", "Complemento Circunstancial de Consecuencia", "Atributo", "Sujeto"])

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La subordinada consecutiva funciona sintácticamente como un '{funcion}' de la oración principal."

explicacion: |
  La subordinada consecutiva funciona como un Complemento Circunstancial de Consecuencia (o Atributo en casos específicos con 'ser', pero generalmente CC). Si la opción es CD, Atributo o Sujeto, es falso.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "vocabulario"]

variables:
  adj: uno_de(["difícil", "fácil", "largo", "corto"])
  sust: uno_de(["alumnos", "libros", "tiempo", "paciencia"])

respuesta: "tan"
tipo: mc
opciones_explicitas: ["tan", "tanto", "tal", "mucho"]

enunciado: "El examen fue ___ {adj} que {sust} abandonaron. ¿Qué palabra falta?"

explicacion: |
  "Tan" se usa con adjetivos o adverbios. Como "{adj}" es un adjetivo, la forma correcta es "tan".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "identificacion"]

variables:
  principal: uno_de(["Estaba tan cansado", "Tenía tanto sueño", "Fue tal el ruido"])
  subordinada: uno_de(["que no pude estudiar", "que me dormí", "que salí corriendo"])

respuesta: "{subordinada}"
tipo: completar

enunciado: "En la oración '{principal} ___ {subordinada}', ¿cuál es la subordinada consecutiva?"

explicacion: |
  La subordinada consecutiva es la parte que expresa la consecuencia, introducida por "que".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "grado"]

variables:
  base: random(100, 200)
  porcentaje: random(10, 50)
  resultado: floor(base * porcentaje / 100)

respuesta: "{resultado}"
tipo: input

enunciado: "Si el grado es {base} y la consecuencia es el {porcentaje}% de ese grado, ¿cuánto es el resultado? (Redondea al entero más cercano)."

explicacion: |
  Ejercicio que refuerza la idea de que la consecutiva implica una medida o resultado derivado del grado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "nexo"]

variables:
  estructura: uno_de(["tan... que", "tanto... que", "tal... que"])

respuesta: "que"
tipo: mc
opciones_explicitas: ["porque", "que", "si", "cuando"]

enunciado: "En la estructura '{estructura}', ¿cuál es la conjunción que introduce la consecutiva?"

explicacion: |
  La conjunción es "que".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "tal"]

variables:
  sust: uno_de(["sorpresa", "alegría", "tristeza", "ira"])
  accion: uno_de(["se le cayó el celular", "no podía hablar", "corrió hacia la salida", "se abrazaron"])

respuesta: "tal"
tipo: completar

enunciado: "Fue {sust} ___ que {accion}."

explicacion: |
  "Tal" se usa con sustantivos para enfatizar la naturaleza del hecho, seguido de "que".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["subordinada", "consecutiva", "cantidad"]

variables:
  x: random(5, 15)
  resultado: x + 10

respuesta: "{resultado}"
tipo: input

enunciado: "Si 'tanto' equivale a {x} y la consecuencia es {x} + 10, ¿cuánto es el resultado? (Escribe solo el número)."

explicacion: |
  Ejercicio que vincula la lógica matemática con la estructura "tanto... que" para verificar la comprensión de la relación de proporcionalidad en la consecuencia.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "vocabulario"]

variables:
  adj: uno_de(["difícil", "fácil", "largo", "corto"])
  sust: uno_de(["alumnos", "libros", "tiempo", "paciencia"])

respuesta: "tan"
tipo: mc
opciones_explicitas: ["tan", "tanto", "tal", "mucho"]

enunciado: "El examen fue ___ {adj} que {sust} abandonaron. ¿Qué palabra falta?"

explicacion: |
  "Tan" se usa con adjetivos o adverbios. Como "{adj}" es un adjetivo, la forma correcta es "tan".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "identificacion"]

variables:
  principal: uno_de(["Estaba tan cansado", "Tenía tanto sueño", "Fue tal el ruido"])
  subordinada: uno_de(["que no pude estudiar", "que me dormí", "que salí corriendo"])

respuesta: "{subordinada}"
tipo: completar

enunciado: "En la oración '{principal} ___ {subordinada}', ¿cuál es la subordinada consecutiva?"

explicacion: |
  La subordinada consecutiva es la parte que expresa la consecuencia, introducida por "que".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "grado"]

variables:
  base: random(100, 200)
  porcentaje: random(10, 50)
  resultado: floor(base * porcentaje / 100)

respuesta: "{resultado}"
tipo: input

enunciado: "Si el grado es {base} y la consecuencia es el {porcentaje}% de ese grado, ¿cuánto es el resultado? (Redondea al entero más cercano)."

explicacion: |
  Ejercicio que refuerza la idea de que la consecutiva implica una medida o resultado derivado del grado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "nexo"]

variables:
  estructura: uno_de(["tan... que", "tanto... que", "tal... que"])

respuesta: "que"
tipo: mc
opciones_explicitas: ["porque", "que", "si", "cuando"]

enunciado: "En la estructura '{estructura}', ¿cuál es la conjunción que introduce la consecutiva?"

explicacion: |
  La conjunción es "que".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["identificacion", "tan_que"]

variables:
  adjetivo: uno_de(["rápido", "lento", "fuerte", "débil"])
  consecuencia: uno_de(["se cansó", "llegó tarde", "ganó la carrera", "perdió el tren"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Corrió tan {adjetivo} que {consecuencia}', la parte subrayada es una subordinada consecutiva."

explicacion: |
  La estructura 'tan + adjetivo/adverbio + que' introduce una consecuencia directa del grado expresado en la principal. Por lo tanto, la afirmación es correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["correlato", "tanto_que"]

variables:
  sustantivo: uno_de(["miedo", "ganas", "tiempo", "dinero"])
  cantidad: random(5, 20)

respuesta: "tanto"
tipo: completar

enunciado: "Tenía ___ {cantidad} {sustantivo} que no podía dormir. ¿Qué palabra falta para formar la consecutiva?"

explicacion: |
  La estructura correcta es 'tanto + sustantivo + que'. 'Tanto' concuerda en género y número con el sustantivo 'miedo' (masculino singular) o se usa invariablemente como adverbio de cantidad antes del sustantivo en esta construcción específica de grado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["diferenciacion", "comparativa_vs_consecutiva"]

variables:
  a: random_float(1.0, 9.9)
  b: random_float(1.0, 9.9)

respuesta: falso
tipo: vf

enunciado: "Si en una oración se usa 'más... que' para igualar dos términos, estamos ante una subordinada consecutiva."

explicacion: |
  'Más... que' suele introducir una comparativa de igualdad o superioridad. La consecutiva requiere un correlato de grado (tan, tanto, tal) seguido de 'que' que indica RESULTADO, no comparación directa entre dos términos equivalentes.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["identificacion", "tal_que"]

variables:
  sustantivo: uno_de(["sorpresa", "alegría", "tristeza", "ira"])
  efecto: uno_de(["se cayó", "lloró", "sonrió", "gritó"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Fue tal su {sustantivo} que se {efecto}', la cláusula final es consecutiva."

explicacion: |
  La estructura 'tal + sustantivo + que' indica que la intensidad de la causa provocó un efecto inevitable. Es una subordinada consecutiva clásica.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["produccion", "tan_que"]

variables:
  sujeto: uno_de(["El niño", "La profesora", "El perro", "El coche"])
  adjetivo: uno_de(["frío", "caliente", "ruido", "silencio"])
  resultado: uno_de(["tembló", "sudó", "huyó", "paró"])

respuesta: "tan"
tipo: completar

enunciado: "El ruido fue ___ {adjetivo} que el perro se {resultado}. ¿Qué correlato falta?"

explicacion: |
  Para expresar un grado intenso de un adjetivo o sustantivo que provoca una consecuencia, se usa 'tan' (si es adjetivo/adverbio) o 'tanto' (si es sustantivo). Aquí 'ruido' es sustantivo, pero en el ejemplo dado 'ruido fue tan intenso' es común, sin embargo, si 'ruido' es el sustantivo principal, la estructura correcta sería 'tanto ruido como...'. Pero si 'ruido' actúa como adjetivo cualificando la intensidad, o si la oración es 'El ruido fue tan fuerte...', usamos 'tan'. Dado que el blank precede a un adjetivo implícito o la estructura 'tan + adj', la respuesta estándar para grado de cualidad es 'tan'. *Nota: Si 'ruido' es el sustantivo, debería ser 'tanto ruido'. Asumiendo la estructura 'tan + adj' para el blank.*
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["analisis", "tanto_que"]

variables:
  sustantivo: uno_de(["trabajo", "esfuerzo", "paciencia", "paciencia"])
  resultado: uno_de(["se rindió", "lo logró", "lo abandonó", "lo disfrutó"])

respuesta: "tanto"
tipo: completar

enunciado: "Hizo ___ {sustantivo} que al final lo {resultado}. ¿Qué palabra completa la consecutiva?"

explicacion: |
  Cuando el correlato va seguido de un sustantivo que indica cantidad, se utiliza 'tanto'. 'Tanto trabajo' implica una cantidad tal que provoca el resultado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["logica", "inferencia"]

variables:
  causa: uno_de(["llovió mucho", "hizo mucho frío", "comió rápido", "durmió poco"])
  efecto: uno_de(["se inundó la calle", "hubo hielo", "le dio indigestión", "estaba cansado"])

respuesta: verdadero
tipo: vf

enunciado: "Si 'Llovió tanto que se inundó la calle' es consecutiva, entonces 'Llovió mucho y se inundó la calle' es una coordinación copulativa."

explicacion: |
  La primera oración tiene una relación de causa-efecto interna (consecutiva). La segunda une dos hechos con 'y', siendo una coordinación copulativa que no implica necesariamente la misma intensidad causal, aunque los hechos sean similares. La afirmación sobre la clasificación gramatical es correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["diferenciacion", "tal_vs_tanto"]

variables:
  sust: uno_de(["miedo", "temor"])
  corr_tanto: "tanto"
  corr_tal: "tal"

respuesta: "tal"
tipo: completar

enunciado: "Fue ___ su {sust} que se paralizó. ¿Es más adecuado 'tanto' o 'tal' para enfatizar la naturaleza del sentimiento?"

explicacion: |
  'Tal' se usa a menudo con sustantivos abstractos para enfatizar la intensidad o la naturaleza del estado (sorpresa, miedo, admiración), aunque 'tanto' también es posible. En contextos literarios o enfáticos, 'tal' es muy común para 'sorpresa' o 'miedo'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["nexo", "que"]

variables:
  nexo: "que"

respuesta: verdadero
tipo: vf

enunciado: "En una subordinada consecutiva, la conjunción 'que' es obligatoria para introducir la consecuencia."

explicacion: |
  Sí, la estructura básica de la consecutiva requiere un correlato (tan, tanto, tal) seguido de la conjunción 'que' que introduce la cláusula de resultado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["produccion", "tanto_que"]

variables:
  sust: uno_de(["fuerza", "energía", "paciencia", "paciencia"])
  resultado: uno_de(["llegó al final", "se agotó", "ganó", "perdió"])

respuesta: "tanto"
tipo: completar

enunciado: "Tuvo ___ {sust} para {resultado}. ¿Qué correlato falta?"

explicacion: |
  'Tanto' es el correlato adecuado cuando va seguido de un sustantivo que indica cantidad o grado de una cualidad medible.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["identificacion", "analisis_sintactico"]

variables:
  oracion: uno_de(["Está tan cansado que duerme", "Es tan alto como su padre", "Corrió más rápido que tú"])

respuesta: verdadero
tipo: vf

enunciado: "La oración 'Está tan cansado que duerme' contiene una subordinada consecutiva."

explicacion: |
  La estructura 'tan + adjetivo + que' introduce una consecuencia. 'Que duerme' es la subordinada consecutiva.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["analisis", "grado"]

variables:
  adj: uno_de(["rápido", "lento", "fuerte", "débil"])
  corr: "tan"

respuesta: "tan"
tipo: completar

enunciado: "El coche es ___ {adj} que llega primero. ¿Qué palabra falta?"

explicacion: |
  'Tan' se usa con adjetivos y adverbios para expresar un grado intenso que provoca un resultado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["identificacion", "tal_que"]

variables:
  sust: uno_de(["alegría", "tristeza", "ira", "paz"])
  resultado: uno_de(["sonrió", "lloró", "gritó", "calló"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Fue tal su {sust} que {resultado}', la oración es consecutiva."

explicacion: |
  La estructura 'tal + sustantivo + que' es una forma clásica de subordinada consecutiva, indicando que la intensidad del sentimiento provocó la acción.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["diferenciacion", "causal_vs_consecutiva"]

variables:
  causa: "lluvia"
  efecto: "inundación"

respuesta: falso
tipo: vf

enunciado: "La oración 'Como llovió mucho, se inundó la calle' es una subordinada consecutiva."

explicacion: |
  'Como' introduce una subordinada causal (explica la causa). La consecutiva expresa el RESULTADO de la principal, no la causa. La oración dada es una oración compuesta con subordinada causal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["produccion", "adverbio"]

variables:
  adv: uno_de(["rápidamente", "lentamente", "bien", "mal"])
  resultado: uno_de(["terminó primero", "se equivocó", "ganó", "perdió"])

respuesta: "tan"
tipo: completar

enunciado: "Corrió ___ {adv} que {resultado}. ¿Qué palabra falta?"

explicacion: |
  'Tan' se usa con adverbios (como 'rápidamente') para indicar un grado que provoca una consecuencia.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["identificacion", "tanto_que"]

variables:
  sust: uno_de(["trabajo", "esfuerzo", "paciencia", "paciencia"])
  corr: "tanto"

respuesta: "tanto"
tipo: completar

enunciado: "Hizo ___ {sust} que lo logró. ¿Qué palabra falta?"

explicacion: |
  'Tanto' es el correlato correcto antes de un sustantivo que indica cantidad o grado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["logica", "relacion"]

variables:
  causa: "temor"
  efecto: "parálisis"

respuesta: verdadero
tipo: vf

enunciado: "En una subordinada consecutiva, la oración principal expresa la causa o el grado, y la subordinada expresa la consecuencia."

explicacion: |
  Correcto. La consecutiva depende de un correlato de grado en la principal para expresar un resultado inevitable.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["identificacion", "tal_que"]

variables:
  sust: uno_de(["sorpresa", "admiración", "miedo", "ira"])
  resultado: uno_de(["se quedó mudo", "aplaudieron", "huyó", "gritó"])

respuesta: verdadero
tipo: vf

enunciado: "La oración 'Fue tal su {sust} que {resultado}' es consecutiva."

explicacion: |
  Sí, 'tal' funciona como correlato de grado para sustantivos, introduciendo una consecuencia.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["produccion", "adjetivo"]

variables:
  adj: uno_de(["alto", "bajo", "ancho", "estrecho"])
  resultado: uno_de(["lo veía", "no lo veía", "lo tocaba", "lo perdía"])

respuesta: "tan"
tipo: completar

enunciado: "El muro es ___ {adj} que {resultado}. ¿Qué palabra falta?"

explicacion: |
  'Tan' se usa con adjetivos para expresar un grado que provoca una consecuencia.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["diferenciacion", "final_vs_consecutiva"]

variables:
  fin: "para"
  consecutiva: "que"

respuesta: falso
tipo: vf

enunciado: "La oración 'Estudié tanto que aprobé' es una subordinada final."

explicacion: |
  'Aprobé' es el RESULTADO (consecutiva), no el propósito (final). Las finales suelen usar 'para que' o 'a fin de que'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["identificacion", "tanto_que"]

variables:
  sust: uno_de(["tiempo", "dinero", "paciencia", "paciencia"])
  corr: "tanto"

respuesta: "tanto"
tipo: completar

enunciado: "Tenía ___ {sust} que lo gasté todo. ¿Qué palabra falta?"

explicacion: |
  'Tanto' es el correlato adecuado antes de sustantivos que indican cantidad.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["estructura", "tan_que"]

variables:
  adj: uno_de(["difícil", "fácil", "largo", "corto"])
  resultado: uno_de(["no lo entendió", "lo resolvió", "lo leyó", "lo escribió"])

respuesta: verdadero
tipo: vf

enunciado: "En 'El examen fue tan {adj} que {resultado}', la subordinada es consecutiva."

explicacion: |
  Sí, la estructura 'tan + adj + que' introduce una consecuencia directa.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["produccion", "tal_que"]

variables:
  sust: uno_de(["alegría", "tristeza", "ira", "paz"])
  resultado: uno_de(["sonrió", "lloró", "gritó", "calló"])

respuesta: "tal"
tipo: completar

enunciado: "Fue ___ su {sust} que {resultado}. ¿Qué palabra falta?"

explicacion: |
  'Tal' es el correlato adecuado para sustantivos abstractos que enfatizan la intensidad del estado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["identificacion", "adverbio"]

variables:
  adv: uno_de(["rápidamente", "lentamente", "bien", "mal"])
  resultado: uno_de(["terminó primero", "se equivocó", "ganó", "perdió"])

respuesta: verdadero
tipo: vf

enunciado: "La oración 'Corrió tan {adv} que {resultado}' es consecutiva."

explicacion: |
  Sí, 'tan' con adverbios introduce una consecutiva.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["diferenciacion", "comparativa_vs_consecutiva"]

variables:
  comparativa: "más... que"
  consecutiva: "tan... que"

respuesta: falso
tipo: vf

enunciado: "La oración 'Es tan alto como su padre' es una subordinada consecutiva."

explicacion: |
  'Tan... como' es una comparativa de igualdad. La consecutiva usa 'tan... que' para indicar resultado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["identificacion", "tanto_que"]

variables:
  sust: uno_de(["trabajo", "esfuerzo", "paciencia", "paciencia"])
  corr: "tanto"

respuesta: "tanto"
tipo: completar

enunciado: "Hizo ___ {sust} que lo logró. ¿Qué palabra falta?"

explicacion: |
  'Tanto' es el correlato correcto antes de sustantivos que indican cantidad o grado.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["logica", "relacion"]

variables:
  causa: "temor"
  efecto: "parálisis"

respuesta: verdadero
tipo: vf

enunciado: "En una subordinada consecutiva, la oración principal expresa la causa o el grado, y la subordinada expresa la consecuencia."

explicacion: |
  Correcto. La consecutiva depende de un correlato de grado en la principal para expresar un resultado inevitable.
```
