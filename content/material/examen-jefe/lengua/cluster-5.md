# Examen jefe — Maestro del Discurso y la Narrativa

> Logro #88. Completaste el examen sobre la estructura narrativa, el discurso referido y la escritura como tecnología, dominando los temas de la Generación del '98. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **109 preguntas totales** en 5/5 secciones.

---

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

respuesta: "El {nombre} {verbo} que estaba lloviendo."
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

respuesta: "El profesor dijo que {sujeto} {accion} tarde."
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

respuesta: "Me preguntó si iba a {lugar}."
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

respuesta: "Dijo que {sujeto} {verbo} bien."
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

respuesta: "Afirmó que {accion} mañana."
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

respuesta: "Me contó que {accion} antes."
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

respuesta: "Me mandó que {orden}."
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

respuesta: "Dijo que {duda}."
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

respuesta: "Dijo que {objeto} {sustantivo} era importante."
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

respuesta: "Exclamó que {emocion}."
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

respuesta: "Dice que {accion} aquí."
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

respuesta: "Dijo que {adverbio} era difícil."
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

## Sección: escritura-como-tecnologia (25 preguntas)

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "tecnologia"]

tipo: mc
opciones_explicitas: ["Un proceso biológico instintivo", "Un sistema tecnológico inventado", "Una capacidad natural del cerebro", "Un fenómeno meteorológico"]

enunciado: "A diferencia del habla, que es una capacidad biológica natural de la especie humana, la escritura se define como:"

respuesta: "Un sistema tecnológico inventado"

explicacion: |
  La escritura no es una facultad innata como el lenguaje oral; es una tecnología que requiere un aprendizaje cultural y técnico para registrar el pensamiento de forma visual y permanente.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["habla_vs_escritura", "permanencia"]

tipo: completar
respuestas_validas: ["permanente", "efímero"]

enunciado: "Mientras que el habla es predominantemente ___, la escritura funciona como una tecnología que permite que el mensaje sea ___."

respuesta: ["efímero", "permanente"]

explicacion: |
  El habla es transitoria (se desvanece en el tiempo), mientras que la escritura permite la permanencia del mensaje a través del soporte físico.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["soportes", "historia"]

variables:
  escenario: uno_de([
    ["piedra", "cincel"],
    ["papiro", "caña"],
    ["papel", "pluma"],
    ["pantalla", "teclado"]
  ])

tipo: completar
respuestas_validas: ["cincel", "caña", "pluma", "teclado"]

enunciado: "La tecnología de la escritura evoluciona junto a sus soportes. Por ejemplo, si el soporte es {escenario[0]}, la herramienta tradicional es un {escenario[1]}."

respuesta: "cincel"

explicacion: |
  Cada avance en la tecnología de la escritura ha estado ligado a la invención de nuevos soportes y herramientas para grabarlos.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "avanzado"
  tags: ["sistemas_de_signos", "tecnologia"]

tipo: mc
opciones_explicitas: ["Es un sistema de signos arbitrarios", "Es una extensión del pensamiento puro", "Es un reflejo exacto del sonido", "Es un proceso inconsciente"]

enunciado: "Como tecnología de registro, la escritura se basa en un sistema de signos que no es natural, sino ___."

respuesta: "Es un sistema de signos arbitrarios"

explicacion: |
  La relación entre el signo escrito (grafema) y el concepto no es natural, sino una convención social y tecnológica establecida por el sistema de escritura elegido.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["procesos", "tecnologia"]

tipo: ordenar
opciones_explicitas: ["Pensamiento", "Codificación visual", "Soporte físico", "Lectura/Interpretación"]

enunciado: "Ordena los componentes de la cadena tecnológica de la escritura, desde la intención hasta la recepción:"

respuesta: ["Pensamiento", "Codificación visual", "Soporte físico", "Lectura/Interpretación"]

explicacion: |
  La escritura requiere un proceso de codificación (convertir pensamiento en signos visuales) sobre un soporte, para que luego otro sujeto pueda decodificarlo.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["escritura", "pictografia"]

respuesta: "pictográfico"
tipo: mc

opciones_explicitas: ["silábico", "alfabético", "pictográfico", "logográfico"]

enunciado: "Un sistema de escritura que utiliza símbolos para representar objetos o ideas directamente, sin pasar necesariamente por el sonido de las palabras, se denomina sistema ___."

explicacion: |
  Los sistemas pictográficos utilizan dibujos que guardan una relación visual directa con el concepto representado.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["evolucion", "sistemas"]

variables:
  escenario: uno_de([["dibujo de un sol", "pictográfico"], ["signo para la sílaba 'ma'", "silábico"], ["letra 'A'", "alfabético"]])
  tipo_sistema: escenario[1]

respuesta: tipo_sistema

tipo: mc
opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Si un sistema de escritura utiliza un símbolo para representar el sonido de una sílaba completa, estamos ante un sistema ___."

explicacion: |
  En el sistema silábico, el signo no representa una letra (sonido individual) ni un objeto, sino una unidad de sonido llamada sílaba.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["alfabeto", "fonemas"]

respuesta: "sonidos"
tipo: completar
respuestas_validas: ["sonidos", "fonemas"]

enunciado: "A diferencia de los sistemas pictográficos, el sistema alfabético se basa en la representación de los ___ que constituyen el habla."

explicacion: |
  El alfabeto es un sistema donde cada signo (letra) representa un fonema o sonido mínimo, permitiendo una combinación infinita de palabras.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "avanzado"
  tags: ["clasificacion", "tecnologia"]

variables:
  caso: uno_de([["jeroglíficos egipcios (fase temprana)", "pictográfico"], ["katakana japonés", "silábico"], ["alfabeto latino", "alfabético"]])
  tipo_res: caso[1]

respuesta: tipo_res

tipo: mc
opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Considerando el caso de {caso[0]}, el sistema de escritura utilizado es de tipo ___."

explicacion: |
  Dependiendo de la etapa y la función, los sistemas pueden transicionar de lo pictográfico a lo logográfico o silábico.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["secuencia", "sistemas"]

respuesta: ["pictográfico", "silábico", "alfabético"]
tipo: ordenar
opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Ordena estos sistemas de escritura desde el que representa la unidad de significado más compleja (el objeto) hasta el que representa la unidad de sonido más simple (el fonema):"

pasos:
  - "Representación de objetos/ideas"
  - "Representación de sílabas"
  - "Representación de sonidos individuales"

explicacion: |
  La evolución tecnológica de la escritura tiende hacia la abstracción: de la imagen (pictograma) a la sílaba y finalmente al fonema (alfabeto).
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["historia", "alfabeto"]

respuesta: "Mediterráneo oriental"
tipo: completar
respuestas_validas: ["Mediterráneo oriental"]

enunciado: "La escritura alfabética, tal como la conocemos, tuvo su origen en el ___."

explicacion: |
  El sistema alfabético se desarrolló en la región del Mediterráneo oriental, simplificando la representación de los sonidos de la lengua.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["aprendizaje", "tecnologia"]

opciones_explicitas: ["Sistemas logográficos", "Sistemas silábicos", "Sistemas alfabéticos"]

respuesta: "Sistemas alfabéticos"
tipo: mc

enunciado: "¿Qué sistema de escritura permitió una simplificación enorme en el proceso de aprendizaje de la lectura y la escritura en comparación con los sistemas logográficos o silábicos?"

explicacion: |
  Al representar sonidos individuales (fonemas) en lugar de conceptos (logogramas) o sílabas completas, el alfabeto requiere aprender un número mucho menor de signos.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["griego", "latino"]

variables:
  escenario: uno_de([["griego", "latino"], ["jeroglífico", "cuneiforme"], ["silábico", "logográfico"]])

respuesta: escenario[0][0
tipo: mc
opciones_explicitas: ["griego", "latino", "jeroglífico", "cuneiforme", "silábico", "logográfico"]

enunciado: "El alfabeto {escenario[0][0]} y el alfabeto {escenario[0][1]} son descendientes directos de las innovaciones de la escritura alfabética antigua."

explicacion: |
  El alfabeto griego y el latino son los pilares de la escritura occidental, derivados de evoluciones de sistemas alfabéticos anteriores.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "avanzado"
  tags: ["cognicion", "tecnologia"]

variables:
  datos: [
    ["logográfico", "alta", "complejo"],
    ["silábico", "media", "intermedio"],
    ["alfabético", "baja", "simple"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2
tipo: mc
opciones_explicitas: ["complejo", "intermedio", "simple"]

enunciado: "Si comparamos la carga cognitiva necesaria para aprender un sistema de escritura, un sistema {datos[idx][0]} presenta una dificultad de aprendizaje de tipo {datos[idx][1]}."

explicacion: |
  La tecnología de la escritura alfabética redujo la dificultad de aprendizaje a un nivel {datos[idx][1]}, facilitando la alfabetización masiva.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["evolucion", "orden"]

opciones_explicitas: ["Logográfico", "Silábico", "Alfabético"]

respuesta: ["Logográfico", "Silábico", "Alfabético"]
tipo: ordenar

enunciado: "Ordena cronológicamente la evolución de la complejidad tecnológica de los sistemas de escritura, desde el más complejo al más simplificado:"

explicacion: |
  La evolución tecnológica de la escritura muestra una tendencia hacia la reducción de signos: de miles de logogramas a decenas de fonemas.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["historia", "comunicacion"]

tipo: mc
opciones_explicitas: ["Permitió la transmisión de conocimientos sin depender de la memoria humana", "Hizo que el lenguaje fuera más complejo y difícil de entender", "Eliminó la necesidad de hablar para comunicarse", "Solo sirve para registrar leyes y no ideas"]

enunciado: "Antes de la invención de la escritura, la transmisión de la cultura dependía exclusivamente de la memoria de los oradores. ¿Cuál fue el principal impacto tecnológico de la escritura en este proceso?"

explicacion: |
  La escritura actúa como un soporte externo que permite 'fijar' el lenguaje, liberando a la memoria humana de la carga de retener todo el saber de forma exacta, permitiendo que el conocimiento trascienda el tiempo y el espacio.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["memoria", "tecnologia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un consejo de un abuelo a su nieto"], ["una receta médica escrita en un papiro"]]
  consecuencia: ["la información se pierde si el nieto olvida el consejo", "la información se mantiene intacta aunque el médico no esté presente"]

tipo: mc
opciones_explicitas: ["La información se pierde si el nieto olvida el consejo", "La información se mantiene intacta aunque el médico no esté presente", "La escritura no cambia la naturaleza de la comunicación"]

enunciado: "Considera el siguiente caso: {escenarios[escenario_idx]}. Si aplicamos la tecnología de la escritura, ¿qué sucede con la información?"

explicacion: |
  La escritura funciona como una 'memoria externa'. Mientras que en la oralidad la información es volátil, la escritura permite que el mensaje sea independiente del emisor original.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["conceptos"]

tipo: completar
respuestas_validas: ["soporte", "signo", "código"]

enunciado: "Para que la escritura funcione como tecnología, se requiere de un ___ (donde se plasma el mensaje), un ___ (que representa la idea) y un ___ (el sistema de reglas que los une)."

explicacion: |
  La escritura requiere un soporte físico (piedra, papel, pantalla), un signo gráfico y un código lingüístico que permita la decodificación por parte de otro individuo.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "avanzado"
  tags: ["evolucion", "conocimiento"]

tipo: ordenar
opciones_explicitas: ["Cultura puramente oral", "Aparición de la escritura", "Acumulación de conocimiento complejo"]

enunciado: "Ordena cronológicamente los procesos que describen la evolución de la transmisión del conocimiento humano gracias a la tecnología de la escritura."

explicacion: |
  La escritura permite la acumulación: al no tener que dedicar todo el esfuerzo cognitivo a recordar, la humanidad puede dedicar más recursos a la innovación y la complejidad, construyendo sobre lo ya escrito.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["tecnologia", "cognicion"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si la oralidad es la comunicación en tiempo real, la escritura es una tecnología de comunicación ___ (escribe la palabra que describe la capacidad de la escritura de durar en el tiempo)."

explicacion: |
  La escritura permite la comunicación asincrónica; es decir, el emisor y el receptor no necesitan estar presentes al mismo tiempo para que el mensaje sea transmitido con éxito.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["escritura", "sistemas"]

variables:
  datos: [["un dibujo de un sol para representar el astro", "pictográfico"], ["un dibujo de un ojo para representar la visión", "pictográfico"], ["un dibujo de una mano para representar la acción de tocar", "pictográfico"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Si un sistema de escritura utiliza un signo que representa directamente el objeto dibujado, como en el caso de {datos[idx][0]}, estamos ante un sistema ___."

explicacion: |
  Cuando el signo tiene una relación icónica (se parece al objeto) y representa el concepto o el objeto directamente, el sistema es pictográfico.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["escritura", "sistemas"]

variables:
  datos: [["el signo 'ka' representa la sílaba completa", "silábico"], ["el signo 'ma' representa la sílaba completa", "silábico"], ["el signo 'lo' representa la sílaba completa", "silábico"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "En un sistema donde cada signo representa una unidad de sonido compuesta por consonante y vocal, como {datos[idx][0]}, el sistema se clasifica como ___."

explicacion: |
  Los sistemas silábicos (como el japonés hiragana) asignan un signo a una sílaba entera, no a sonidos individuales ni a conceptos.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["escritura", "sistemas"]

variables:
  datos: [["la letra 'A' representa un fonema", "alfabético"], ["la letra 'B' representa un fonema", "alfabético"], ["la letra 'S' representa un fonema", "alfabético"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar

respuestas_validas: ["alfabético"]

enunciado: "Si un sistema asigna un signo a cada fonema individual, como sucede con {datos[idx][0]}, el sistema es ___."

explicacion: |
  El sistema alfabético es el más eficiente en términos de cantidad de signos, ya que solo necesita un conjunto reducido de caracteres para representar todos los sonidos posibles.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "avanzado"
  tags: ["escritura", "sistemas"]

variables:
  datos: [["un pictograma", "pictográfico"], ["una sílaba", "silábico"], ["un fonema", "alfabético"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Si la unidad mínima de significado en el sistema es {datos[idx][0]}, la clasificación es ___."

explicacion: |
  La unidad de representación determina la clasificación: el pictograma representa el concepto, la sílaba el sonido silábico y el fonema el sonido alfabético.
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["escritura", "evolucion"]

variables:
  secuencia: ["pictográfico", "silábico", "alfabético"]

respuesta: secuencia
tipo: ordenar

opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Ordena los siguientes sistemas de escritura desde el que representa conceptos (menos abstracto) hasta el que representa sonidos individuales (más abstracto):"

explicacion: |
  La evolución tecnológica de la escritura tiende hacia la abstracción: de la imagen del objeto (pictograma) al sonido de la sílaba (silabario) y finalmente al sonido mínimo (alfabeto).
```

## Sección: estructura-narrativa (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "basico"
  tags: ["estructura_narrativa", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La estructura narrativa es el orden en que se organizan y presentan los hechos de una historia, y no siempre coincide con el orden en que esos hechos ocurrieron dentro de la ficción."

pasos:
  - "Esa posible diferencia entre orden de los hechos y orden del relato es la base de flashback/flashforward."

explicacion: |
  Verdadero: la estructura narrativa puede reordenar los hechos, no
  sólo presentarlos en secuencia.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "basico"
  tags: ["introduccion"]

variables:
  n: uno_de([1, 1])

respuesta: "introducción"
tipo: mc
opciones_explicitas: ["introducción", "nudo", "desenlace"]

enunciado: "La parte de la estructura clásica que presenta a los personajes, el espacio y la situación inicial, antes del conflicto, se llama..."

pasos:
  - "También llamada \"planteamiento\": establece el punto de partida de la historia."

explicacion: |
  La introducción presenta el contexto antes de que aparezca el
  conflicto.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "basico"
  tags: ["nudo"]

variables:
  n: uno_de([1, 1])

respuesta: "nudo"
tipo: mc
opciones_explicitas: ["introducción", "nudo", "desenlace"]

enunciado: "La parte de la estructura clásica donde el conflicto se desarrolla y crece la tensión se llama..."

pasos:
  - "También llamado \"desarrollo\": es el cuerpo central de la historia."

explicacion: |
  El nudo es donde el conflicto avanza y los personajes intentan
  resolverlo.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "basico"
  tags: ["desenlace"]

variables:
  n: uno_de([1, 1])

respuesta: "desenlace"
tipo: mc
opciones_explicitas: ["introducción", "nudo", "desenlace"]

enunciado: "La parte de la estructura clásica donde el conflicto se resuelve y se cierra la historia se llama..."

pasos:
  - "Puede resolverse bien, mal, o quedar abierto."

explicacion: |
  El desenlace cierra la historia, resolviendo (o dejando planteado)
  el conflicto del nudo.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "basico"
  tags: ["estructura_clasica", "orden"]

enunciado: "Ordená las tres partes de la estructura narrativa clásica."
tipo: ordenar
opciones_explicitas:
  - "Introducción"
  - "Nudo"
  - "Desenlace"
respuesta_orden:
  - "Introducción"
  - "Nudo"
  - "Desenlace"

explicacion: |
  La estructura clásica sigue el orden cronológico: presentación,
  desarrollo del conflicto y resolución.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "intermedio"
  tags: ["orden_lineal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuando el orden en que se cuenta la historia coincide con el orden en que ocurrieron los hechos, se llama orden lineal o cronológico."

pasos:
  - "Es el caso más simple: contar todo en el mismo orden en que sucedió."

explicacion: |
  Verdadero: el orden lineal es la forma más directa de narrar,
  siguiendo la cronología real de los hechos.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "intermedio"
  tags: ["flashback"]

variables:
  n: uno_de([1, 1])

respuesta: "flashback"
tipo: mc
opciones_explicitas: ["flashback", "flashforward", "orden lineal"]

enunciado: "\"Juan miró la foto y recordó aquel verano en la playa, años atrás.\" ¿Qué recurso usa este fragmento?"

pasos:
  - "Interrumpe el relato para contar algo que ocurrió ANTES: es un flashback (analepsis)."

explicacion: |
  El flashback retrocede en el tiempo respecto del presente
  narrativo.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "intermedio"
  tags: ["flashforward"]

variables:
  n: uno_de([1, 1])

respuesta: "flashforward"
tipo: mc
opciones_explicitas: ["flashback", "flashforward", "orden lineal"]

enunciado: "\"Años más tarde, Juan entendería que ese día lo había cambiado todo.\" ¿Qué recurso usa este fragmento?"

pasos:
  - "Interrumpe el relato para anticipar algo que va a ocurrir DESPUÉS: es un flashforward (prolepsis)."

explicacion: |
  El flashforward adelanta información sobre el futuro de la
  historia.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["flashback", "vocabulario"]

variables:
  n: uno_de([1, 1])

respuesta: "analepsis"
tipo: completar

enunciado: "El nombre técnico del flashback (volver al pasado dentro del relato) es..."

pasos:
  - "Es el término usado en narratología además de \"flashback\"."

explicacion: |
  Analepsis es el nombre técnico equivalente a flashback.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["flashforward", "vocabulario"]

variables:
  n: uno_de([1, 1])

respuesta: "prolepsis"
tipo: completar

enunciado: "El nombre técnico del flashforward (adelantar el futuro dentro del relato) es..."

pasos:
  - "Es el término usado en narratología además de \"flashforward\"."

explicacion: |
  Prolepsis es el nombre técnico equivalente a flashforward.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["flashback", "marcas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El pluscuamperfecto (\"había ocurrido\") suele marcar que el relato está volviendo a un momento anterior (flashback)."

pasos:
  - "El pluscuamperfecto indica una acción anterior a otra ya pasada, típico de retrocesos temporales."

explicacion: |
  Verdadero: es una de las marcas verbales típicas para reconocer un
  flashback.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["flashforward", "marcas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Frases como \"años más tarde\" o \"con el tiempo\" suelen marcar un salto hacia el futuro del relato (flashforward)."

pasos:
  - "Esas expresiones temporales anuncian un adelanto respecto del presente narrativo."

explicacion: |
  Verdadero: son marcas típicas para reconocer un flashforward.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "intermedio"
  tags: ["estructura_narrativa", "orden"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar flashback o flashforward cambia el orden en que el lector se entera de los hechos, pero no cambia qué hechos ocurrieron en la historia."

pasos:
  - "Es una decisión sobre CÓMO contar, no sobre QUÉ contar."

explicacion: |
  Verdadero: el reordenamiento afecta la experiencia de lectura, no
  la cronología real de la ficción.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["flashback", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un autor puede usar un flashback para explicar por qué un personaje actúa de cierta manera en el presente de la historia."

pasos:
  - "Mostrar un hecho pasado puede dar contexto o motivación a una acción actual."

explicacion: |
  Verdadero: el flashback suele usarse para dar contexto explicativo
  sobre el presente narrativo.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["flashforward", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un autor puede usar un flashforward para generar expectativa en el lector, anticipando que algo importante va a pasar más adelante."

pasos:
  - "Adelantar información crea tensión: el lector sabe que algo viene, pero no sabe cómo se llega a eso."

explicacion: |
  Verdadero: el flashforward suele usarse para generar suspenso sobre
  cómo se llega a un futuro ya anticipado.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "intermedio"
  tags: ["estructura_narrativa", "practica"]

variables:
  fragmentos: ["Juan se despertó, desayunó y salió a trabajar como cualquier día", "De pronto recordó aquella tarde de invierno, hacía diez años, cuando todo había empezado", "Nadie sabía todavía que, dos años después, esa decisión sería la más importante de sus vidas"]
  tipos: ["orden lineal", "flashback", "flashforward"]
  idx: uno_de([0, 1, 2])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["orden lineal", "flashback", "flashforward"]

enunciado: "\"{fragmentos[idx]}\" corresponde a..."

pasos:
  - "Sin salto temporal = lineal. Salto al pasado = flashback. Salto al futuro = flashforward."

explicacion: |
  Cada fragmento fue construido para marcar un tipo distinto de
  relación entre el orden del relato y el orden de los hechos.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["estructura_narrativa", "flexibilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "No todo texto narrativo sigue estrictamente la estructura de introducción-nudo-desenlace en ese orden; muchos relatos empiezan por el nudo o incluso por el desenlace."

pasos:
  - "Empezar in medias res (\"en medio de la acción\") es una técnica narrativa común que rompe el orden clásico."

explicacion: |
  Verdadero: la estructura clásica es la más común y la más fácil de
  reconocer, pero no la única posible.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "intermedio"
  tags: ["estructura_narrativa", "metodo"]

enunciado: "Ordená los pasos para analizar la estructura narrativa de un texto."
tipo: ordenar
opciones_explicitas:
  - "Identificar introducción, nudo y desenlace dentro del relato"
  - "Revisar si hay saltos temporales (marcas verbales o frases de tiempo) respecto del presente narrativo"
  - "Clasificar cada salto como flashback o flashforward según hacia dónde vaya"
  - "Determinar si, en conjunto, el relato es de orden lineal o tiene una estructura más compleja"
respuesta_orden:
  - "Identificar introducción, nudo y desenlace dentro del relato"
  - "Revisar si hay saltos temporales (marcas verbales o frases de tiempo) respecto del presente narrativo"
  - "Clasificar cada salto como flashback o flashforward según hacia dónde vaya"
  - "Determinar si, en conjunto, el relato es de orden lineal o tiene una estructura más compleja"

explicacion: |
  El análisis va de la estructura clásica de base a la detección y
  clasificación de saltos temporales.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["estructura_narrativa", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El análisis narrativo completo combina tres preguntas: quién cuenta (narrador), desde dónde (punto de vista) y en qué orden (estructura narrativa)."

pasos:
  - "Cada tema de la subrama respondió una de esas tres preguntas, en ese orden."

explicacion: |
  Verdadero: estructura narrativa cierra la subrama que empezó con
  narrador y siguió con punto de vista.
```

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["estructura_narrativa", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si un autor quiere generar intriga sobre cómo un personaje llegó a una situación extrema, puede empezar el relato por el desenlace y usar flashbacks para explicar el camino hasta ahí."

pasos:
  - "Mostrar el final primero y explicar el \"cómo\" después es una estructura narrativa deliberadamente no lineal."

explicacion: |
  Verdadero: romper la estructura clásica es una herramienta más
  para controlar el efecto narrativo sobre el lector.
```

## Sección: exposicion-oral (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "basico"
  tags: ["exposicion_oral", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Todo lo ya sabido de tesis, argumentos y contraargumentos sigue valiendo en una exposición oral, sólo cambia que se comunica en tiempo real frente a otra persona."

pasos:
  - "Ver `../tesis/`, `../argumentos/` y `../contraargumentos/`: son la base de contenido que se reutiliza."

explicacion: |
  Verdadero: es la conexión central entre este tema y sus
  prerrequisitos de la cadena argumentativa.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "basico"
  tags: ["planificacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El primer paso para planificar una exposición oral es definir el objetivo: informar, persuadir, o ambas cosas."

pasos:
  - "Es el primer paso de la planificación descrita en la teoría."

explicacion: |
  Verdadero: definir el objetivo orienta todas las decisiones
  siguientes de la exposición.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "intermedio"
  tags: ["planificacion", "audiencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al planificar una exposición oral, conviene conocer qué sabe ya la audiencia, qué necesita que se le explique, y cuánto tiempo hay disponible."

pasos:
  - "Es el segundo paso de la planificación descrito en la teoría."

explicacion: |
  Verdadero: adaptar el contenido a la audiencia es un paso central
  de la planificación.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "basico"
  tags: ["estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una exposición oral bien estructurada tiene introducción (qué se va a decir), desarrollo (el contenido central) y cierre (resumen + conclusión)."

pasos:
  - "Es la estructura básica recomendada para organizar el contenido oral."

explicacion: |
  Verdadero: es la estructura de tres partes descrita en la teoría.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "intermedio"
  tags: ["contenido"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En una exposición oral conviene priorizar pocas ideas centrales bien explicadas, en vez de mucha información apretada, porque la audiencia sólo escucha una vez y no puede releer."

pasos:
  - "A diferencia de un texto escrito, que sí se puede releer."

explicacion: |
  Verdadero: es la regla de \"menos es más\" central de la teoría de
  este tema.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "intermedio"
  tags: ["tecnicas_de_entrega"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Hablar ni muy rápido ni muy lento, con pausas breves después de una idea importante, ayuda a que esa idea se asiente en la audiencia."

pasos:
  - "Es una de las técnicas de entrega oral descritas en la teoría."

explicacion: |
  Verdadero: el manejo del ritmo y las pausas es una técnica central
  de la exposición oral.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "intermedio"
  tags: ["tecnicas_de_entrega", "contacto_visual"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Mirar a la audiencia, en vez de sólo leer notas, genera conexión y credibilidad durante una exposición oral."

pasos:
  - "Es otra de las técnicas de entrega oral descritas en la teoría."

explicacion: |
  Verdadero: el contacto visual es una técnica central para conectar
  con quien escucha.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "intermedio"
  tags: ["tecnicas_de_entrega", "voz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Variar el tono de voz evita la monotonía, y subir el volumen (sin gritar) en los puntos clave ayuda a marcar énfasis."

pasos:
  - "Es otra técnica de entrega oral descrita en la teoría."

explicacion: |
  Verdadero: la modulación de la voz es una herramienta central para
  mantener la atención de la audiencia.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "intermedio"
  tags: ["tecnicas_de_entrega", "lenguaje_corporal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una postura abierta y gestos que acompañen (no distraigan) lo que se dice son parte de las técnicas de entrega oral recomendadas."

pasos:
  - "Es otra técnica de entrega oral descrita en la teoría."

explicacion: |
  Verdadero: el lenguaje corporal es parte de la comunicación oral
  efectiva, más allá de las palabras.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "intermedio"
  tags: ["manejo_de_nervios"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una estrategia práctica para manejar los nervios antes de exponer es ensayar en voz alta, no sólo leer el contenido en silencio."

pasos:
  - "Ensayar en voz alta prepara mejor la entrega real que sólo repasar el contenido mentalmente."

explicacion: |
  Verdadero: es una de las estrategias prácticas mencionadas para
  manejar los nervios.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "basico"
  tags: ["manejo_de_nervios"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sentir nervios antes de hablar en público es normal, y la audiencia generalmente quiere que a quien expone le vaya bien, no busca que falle."

pasos:
  - "Es un dato útil para relativizar el miedo escénico habitual."

explicacion: |
  Verdadero: normalizar los nervios y entender la disposición de la
  audiencia ayuda a manejarlos mejor.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "avanzado"
  tags: ["exposicion_oral", "exposicion_escrita", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En una exposición oral conviene repetir información clave de forma deliberada, algo que en un texto escrito sonaría redundante, porque la audiencia no puede \"volver atrás\" a releer."

pasos:
  - "Es una diferencia importante entre comunicación oral y escrita."

explicacion: |
  Verdadero: la repetición deliberada compensa la imposibilidad de
  releer que tiene la audiencia de una exposición oral.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "intermedio"
  tags: ["planificacion", "objetivo"]

variables:
  objetivos: ["informar", "persuadir"]
  idx: uno_de([0, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si el objetivo de la exposición es \"{objetivos[idx]}\", eso debería orientar tanto el contenido elegido como el estilo de entrega."

pasos:
  - "Una exposición informativa prioriza claridad y datos; una persuasiva prioriza argumentos y conexión emocional."

explicacion: |
  Verdadero: el objetivo definido en la planificación condiciona
  decisiones concretas de contenido y estilo.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "intermedio"
  tags: ["estructura", "practica"]

variables:
  partes: ["anunciar de qué se va a hablar y por qué importa", "desarrollar el contenido central en pocos puntos organizados", "resumir lo dicho y cerrar con una conclusión"]
  nombres: ["introducción", "desarrollo", "cierre"]
  idx: uno_de([0, 1, 2])

respuesta: nombres[idx]
tipo: mc
opciones_explicitas: ["introducción", "desarrollo", "cierre"]

enunciado: "La parte de la exposición oral que consiste en \"{partes[idx]}\" se llama..."

pasos:
  - "Cada parte de la estructura de tres pasos cumple una función distinta."

explicacion: |
  Cada función descrita corresponde a una de las tres partes de la
  estructura básica de exposición oral.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "intermedio"
  tags: ["contenido", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Una buena exposición oral debería incluir la mayor cantidad posible de datos y detalles, para demostrar dominio completo del tema."

pasos:
  - "Priorizar pocas ideas centrales bien explicadas suele funcionar mejor que abrumar con demasiada información que la audiencia no puede retener."

explicacion: |
  Falso: la regla de \"menos es más\" recomienda lo contrario, priorizar
  claridad sobre cantidad de información.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "avanzado"
  tags: ["exposicion_oral", "presentacion_con_apoyo_visual"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este tema es la base sobre la que se agrega apoyo visual (diapositivas, gráficos) en el tema siguiente de la cadena."

pasos:
  - "Ver `../presentacion-con-apoyo-visual/`: primero se domina la exposición oral sola, después se le agrega el soporte visual."

explicacion: |
  Verdadero: es la relación de prerrequisito con el tema siguiente.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "avanzado"
  tags: ["exposicion_oral", "teatro"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las técnicas de entrega oral (voz, ritmo, contacto visual, lenguaje corporal) se reutilizan directamente en la actuación teatral, llevadas a un contexto de ficción."

pasos:
  - "Ver `../../arte/teatro-dramaturgia-y-actuacion/`: es uno de los dos prerrequisitos de ese tema."

explicacion: |
  Verdadero: es la conexión entre este tema y su aplicación en el
  arte dramático.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "intermedio"
  tags: ["exposicion_oral", "metodo"]

enunciado: "Ordená los pasos para preparar una exposición oral."
tipo: ordenar
opciones_explicitas:
  - "Definir el objetivo (informar, persuadir, o ambas)"
  - "Analizar a la audiencia (qué sabe, qué necesita, cuánto tiempo hay)"
  - "Armar la estructura de introducción, desarrollo y cierre"
  - "Ensayar en voz alta, prestando atención a ritmo, pausas y contacto visual"
respuesta_orden:
  - "Definir el objetivo (informar, persuadir, o ambas)"
  - "Analizar a la audiencia (qué sabe, qué necesita, cuánto tiempo hay)"
  - "Armar la estructura de introducción, desarrollo y cierre"
  - "Ensayar en voz alta, prestando atención a ritmo, pausas y contacto visual"

explicacion: |
  El proceso va de la planificación (objetivo, audiencia, estructura)
  a la práctica de la entrega oral en sí.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "avanzado"
  tags: ["exposicion_oral", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Exposición oral es el primer nodo de la subrama de comunicación en vivo, que se completa con debate, negociación, presentación con apoyo visual y persuasión ética vs. manipulación."

pasos:
  - "Ver `../debate-refutar-en-vivo/`, `../negociacion/`, `../presentacion-con-apoyo-visual/` y `../persuasion-etica-vs-manipulacion/`."

explicacion: |
  Verdadero: es el punto de partida de toda la subrama de
  comunicación oral y en vivo.
```

```
metadata:
  materia: "lengua"
  tema: "exposicion_oral"
  nivel: "avanzado"
  tags: ["exposicion_oral", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de presentar un trabajo escolar en clase, conviene aplicar los pasos de planificación (objetivo, audiencia, estructura) y ensayar en voz alta, en vez de improvisar directamente frente al curso."

pasos:
  - "Es la aplicación práctica más directa de este tema en la vida escolar cotidiana."

explicacion: |
  Verdadero: es la aplicación concreta del proceso de planificación y
  entrega oral estudiado en este tema.
```

## Sección: generacion-del-98 (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "basico"
  tags: ["generacion_98", "contexto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Generación del 98 reacciona al Desastre del 98: la derrota de España frente a Estados Unidos en 1898, que le hizo perder sus últimas colonias."

pasos:
  - "Esa derrota desató una crisis de identidad nacional que el grupo de escritores intenta pensar."

explicacion: |
  Verdadero: el Desastre del 98 es el hecho histórico que da nombre y
  origen al movimiento.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "intermedio"
  tags: ["generacion_98", "contexto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Tras la derrota de 1898, España perdió sus últimas colonias: Cuba, Puerto Rico y Filipinas."

pasos:
  - "Esa pérdida marcó el fin del imperio colonial español."

explicacion: |
  Verdadero: es el hecho histórico concreto detrás de la crisis de
  identidad nacional del movimiento.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "basico"
  tags: ["generacion_98", "caracteristicas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una preocupación central de la Generación del 98 es \"el problema de España\": por qué el país entró en decadencia y cómo regenerarlo."

pasos:
  - "Es la pregunta central que atraviesa la obra de todo el grupo."

explicacion: |
  Verdadero: esa preocupación identitaria y nacional es el eje
  temático central del movimiento.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "intermedio"
  tags: ["generacion_98", "paisaje"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Castilla (su meseta austera, sus pueblos) se convierte en la Generación del 98 en símbolo de la esencia española a explorar y cuestionar."

pasos:
  - "A diferencia del cosmopolitismo modernista, la mirada se dirige hacia adentro, hacia lo propio."

explicacion: |
  Verdadero: el paisaje castellano es un símbolo recurrente del
  movimiento.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "intermedio"
  tags: ["generacion_98", "modernismo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Frente al lenguaje ornamentado del Modernismo, la Generación del 98 prefiere un estilo más directo y austero."

pasos:
  - "Coherente con su tono crítico e introspectivo, distinto del esteticismo refinado modernista."

explicacion: |
  Verdadero: la sobriedad estilística contrasta directamente con el
  refinamiento formal del Modernismo.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "intermedio"
  tags: ["generacion_98", "filosofia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Generación del 98 muestra preocupación filosófica y existencial por el sentido de la vida, la muerte y el tiempo, influida por el pensamiento existencialista europeo de la época."

pasos:
  - "Esta dimensión filosófica es parte de su carácter introspectivo."

explicacion: |
  Verdadero: la reflexión existencial es un componente importante del
  movimiento, más allá de lo estrictamente nacional.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "intermedio"
  tags: ["generacion_98", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: "Unamuno"
tipo: completar

enunciado: "El autor de \"Niebla\", ensayista y novelista central del grupo de la Generación del 98, se apellida..."

pasos:
  - "Miguel de Unamuno es una de las figuras más representativas del movimiento."

explicacion: |
  Unamuno es autor central de la Generación del 98.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "intermedio"
  tags: ["generacion_98", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: "Antonio Machado"
tipo: completar

enunciado: "El poeta autor de \"Campos de Castilla\", donde el paisaje castellano es el eje central, se llama..."

pasos:
  - "Antonio Machado es el poeta representativo de la Generación del 98."

explicacion: |
  \"Campos de Castilla\" es una obra clave del movimiento por su
  tratamiento del paisaje castellano.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "avanzado"
  tags: ["generacion_98", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: "El árbol de la ciencia"
tipo: completar

enunciado: "La novela de Pío Baroja, autor representativo de la Generación del 98, se titula..."

pasos:
  - "Es una de las novelas más conocidas del grupo."

explicacion: |
  \"El árbol de la ciencia\" es la novela más representativa de Pío
  Baroja dentro del movimiento.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "avanzado"
  tags: ["generacion_98", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Azorín (José Martínez Ruiz) fue quien acuñó el nombre \"Generación del 98\" para referirse a este grupo de escritores."

pasos:
  - "Es dato histórico sobre el origen del nombre del movimiento."

explicacion: |
  Verdadero: Azorín es el autor al que se le atribuye haber puesto
  nombre al movimiento.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "avanzado"
  tags: ["generacion_98", "modernismo", "diferenciacion"]

variables:
  miradas: ["cosmopolita, hacia afuera", "introspectiva, hacia adentro"]
  movimientos: ["Modernismo", "Generación del 98"]
  idx: uno_de([0, 1])

respuesta: movimientos[idx]
tipo: mc
opciones_explicitas: ["Modernismo", "Generación del 98"]

enunciado: "La mirada \"{miradas[idx]}\" corresponde principalmente al movimiento..."

pasos:
  - "Modernismo mira hacia culturas lejanas; Generación del 98 mira hacia adentro, a España."

explicacion: |
  Ambos movimientos casi contemporáneos difieren radicalmente en
  dirección de su mirada: afuera vs. adentro.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "avanzado"
  tags: ["generacion_98", "modernismo", "diferenciacion"]

variables:
  tonos: ["refinado, artificioso", "sobrio, austero, crítico"]
  movimientos: ["Modernismo", "Generación del 98"]
  idx: uno_de([0, 1])

respuesta: movimientos[idx]
tipo: mc
opciones_explicitas: ["Modernismo", "Generación del 98"]

enunciado: "El tono \"{tonos[idx]}\" corresponde principalmente al movimiento..."

pasos:
  - "Modernismo cultiva el refinamiento formal; Generación del 98 prefiere la sobriedad crítica."

explicacion: |
  El contraste de tono es una de las diferencias más marcadas entre
  ambos movimientos contemporáneos.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "intermedio"
  tags: ["generacion_98", "modernismo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La Generación del 98, igual que el Modernismo, nace en Hispanoamérica y luego se extiende a España."

pasos:
  - "La Generación del 98 nace en España, directamente sobre el problema de la crisis nacional española."

explicacion: |
  Falso: a diferencia del Modernismo, la Generación del 98 tiene
  origen puramente español, ligado al Desastre del 98.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "intermedio"
  tags: ["generacion_98", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un ensayo con estilo sobrio que reflexiona sobre por qué España perdió su lugar en el mundo, describiendo con austeridad el paisaje de los pueblos castellanos, es un ejemplo típico de la Generación del 98."

pasos:
  - "Combina preocupación nacional, estilo austero y paisaje castellano: marcas centrales del movimiento."

explicacion: |
  Verdadero: reúne varias de las características centrales de la
  Generación del 98 estudiadas en este tema.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "avanzado"
  tags: ["generacion_98", "modernismo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La Generación del 98, igual que el Modernismo, tiene como objetivo principal el \"arte por el arte\", sin preocupación por temas sociales o nacionales."

pasos:
  - "La Generación del 98 está centrada precisamente en un tema social/nacional: el \"problema de España\"."

explicacion: |
  Falso: es justo lo opuesto al esteticismo puro del Modernismo — la
  preocupación nacional es su eje central.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "avanzado"
  tags: ["generacion_98", "filosofia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Unamuno, además de reflexionar sobre España, también abordó preguntas existenciales sobre el sentido de la vida y la muerte."

pasos:
  - "La dimensión filosófica del movimiento va más allá de lo estrictamente nacional."

explicacion: |
  Verdadero: la reflexión existencial complementa la preocupación
  nacional en la obra del grupo.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "intermedio"
  tags: ["generacion_98", "modernismo", "cronologia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El Modernismo y la Generación del 98 son movimientos casi contemporáneos, ambos ubicados entre fines del siglo XIX y principios del XX."

pasos:
  - "Esa coincidencia temporal es justamente lo que genera la confusión frecuente entre ambos."

explicacion: |
  Verdadero: la cercanía cronológica explica por qué se suelen
  confundir, pese a sus diferencias de contenido.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "avanzado"
  tags: ["generacion_98", "modernismo", "metodo"]

enunciado: "Ordená los pasos para decidir si un texto de fin de siglo XIX/principios XX pertenece al Modernismo o a la Generación del 98."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el foco es la belleza formal o la crisis de identidad nacional"
  - "Determinar si la mirada es cosmopolita (hacia afuera) o introspectiva (hacia España)"
  - "Comparar el tono: refinado/artificioso vs. sobrio/austero"
  - "Confirmar el origen del texto (Hispanoamérica vs. España) como dato adicional"
respuesta_orden:
  - "Revisar si el foco es la belleza formal o la crisis de identidad nacional"
  - "Determinar si la mirada es cosmopolita (hacia afuera) o introspectiva (hacia España)"
  - "Comparar el tono: refinado/artificioso vs. sobrio/austero"
  - "Confirmar el origen del texto (Hispanoamérica vs. España) como dato adicional"

explicacion: |
  El análisis va del criterio más decisivo (foco temático) a los
  criterios complementarios (mirada, tono, origen).
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "avanzado"
  tags: ["generacion_98", "boom_latinoamericano", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El Boom latinoamericano, movimiento que cierra la cadena, retoma (mucho después) la pregunta por la identidad nacional/regional que ya había explorado la Generación del 98, pero desde Hispanoamérica."

pasos:
  - "Ver `../boom-latinoamericano/`: la pregunta por la identidad se repite en otro contexto histórico y geográfico distinto."

explicacion: |
  Verdadero: es la conexión temática (aunque con gran distancia
  temporal) que cierra la cadena de movimientos.
```

```
metadata:
  materia: "lengua"
  tema: "generacion_98"
  nivel: "avanzado"
  tags: ["generacion_98", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si el objetivo de un autor es reflexionar críticamente sobre la identidad y los problemas de su propio país, un estilo sobrio e introspectivo como el de la Generación del 98 es más afín que el cosmopolitismo modernista."

pasos:
  - "La Generación del 98 está construida precisamente para esa función: pensar el propio país en crisis."

explicacion: |
  Verdadero: la elección de movimiento/estilo depende del propósito
  (mirar hacia adentro vs. buscar belleza cosmopolita) que el autor
  persigue.
```
