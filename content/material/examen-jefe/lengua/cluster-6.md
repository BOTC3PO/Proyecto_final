# Examen jefe — Dominio de los géneros discursivos

> Logro #89. Completaste el parcial identificando y diferenciando los géneros dramático, lírico, narrativo y periodísticos. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **129 preguntas totales** en 5/5 secciones.

---

## Sección: genero-dramatico (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "basico"
  tags: ["genero_dramatico", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El género dramático agrupa textos escritos para ser representados en un escenario, organizados casi por completo a través de diálogos entre personajes."

pasos:
  - "A diferencia del narrativo, no tiene un narrador que cuente los hechos."

explicacion: |
  Verdadero: la representación y el diálogo son las marcas centrales
  del género dramático.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["genero_dramatico", "genero_narrativo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El género dramático, igual que el narrativo, tiene siempre un narrador que cuenta lo que va sucediendo."

pasos:
  - "En el texto dramático, la historia se conoce a través de lo que dicen los personajes, no de una voz narradora."

explicacion: |
  Falso: la ausencia de narrador es justamente lo que distingue al
  dramático del narrativo.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "basico"
  tags: ["dialogo"]

variables:
  n: uno_de([1, 1])

respuesta: "diálogo"
tipo: completar

enunciado: "La forma central del texto dramático, donde los personajes hablan entre sí, se llama..."

pasos:
  - "A través de esas intervenciones se conoce la historia, sin narrador."

explicacion: |
  El diálogo es el elemento estructural principal del texto
  dramático.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "basico"
  tags: ["acotaciones"]

variables:
  n: uno_de([1, 1])

respuesta: "acotaciones"
tipo: completar

enunciado: "Las indicaciones entre paréntesis o en cursiva que describen gestos, movimientos o tono de voz (y no forman parte del diálogo) se llaman..."

pasos:
  - "Son la única \"voz\" del autor visible en el texto dramático."

explicacion: |
  Las acotaciones guían la puesta en escena sin ser parte de lo que
  dicen los personajes.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["acotaciones", "funcion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En \"JUAN: (nervioso) ¿Vas a venir?\", la palabra \"nervioso\" es una acotación que indica cómo debería actuarse esa línea."

pasos:
  - "Está entre paréntesis, fuera del texto que Juan efectivamente dice."

explicacion: |
  Verdadero: las acotaciones indican gestos/tono, no son parte del
  parlamento del personaje.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["estructura", "acto"]

variables:
  n: uno_de([1, 1])

respuesta: "acto"
tipo: mc
opciones_explicitas: ["acto", "escena", "acotación"]

enunciado: "Cada una de las grandes partes en que se divide una obra de teatro (equivalente a un capítulo) se llama..."

pasos:
  - "El acto es la unidad mayor de división de la obra."

explicacion: |
  El acto agrupa varias escenas y marca las grandes divisiones de la
  obra.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["estructura", "escena"]

variables:
  n: uno_de([1, 1])

respuesta: "escena"
tipo: mc
opciones_explicitas: ["acto", "escena", "acotación"]

enunciado: "La subdivisión de un acto, marcada por la entrada o salida de un personaje o un cambio de escenario, se llama..."

pasos:
  - "La escena es una unidad más chica que el acto."

explicacion: |
  Un acto se compone de varias escenas, delimitadas por cambios en
  los personajes presentes o en el escenario.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["subgeneros", "tragedia"]

variables:
  n: uno_de([1, 1])

respuesta: "tragedia"
tipo: mc
opciones_explicitas: ["tragedia", "comedia", "drama"]

enunciado: "El subgénero dramático con conflicto grave, personajes de gran dignidad y final desdichado se llama..."

pasos:
  - "El desenlace desgraciado y la gravedad del conflicto son las marcas de la tragedia."

explicacion: |
  La tragedia clásica se caracteriza por su gravedad y su final
  infeliz.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["subgeneros", "comedia"]

variables:
  n: uno_de([1, 1])

respuesta: "comedia"
tipo: mc
opciones_explicitas: ["tragedia", "comedia", "drama"]

enunciado: "El subgénero dramático con conflicto liviano, tono humorístico y final feliz se llama..."

pasos:
  - "El humor y el final feliz son las marcas de la comedia."

explicacion: |
  La comedia se distingue de la tragedia por su tono y su desenlace.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "avanzado"
  tags: ["subgeneros", "drama"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El drama, como subgénero, mezcla tono serio y liviano, sin la rigidez de la tragedia clásica, y es el subgénero más común en el teatro moderno."

pasos:
  - "No exige ni el final necesariamente desdichado de la tragedia ni el tono siempre cómico de la comedia."

explicacion: |
  Verdadero: el drama moderno flexibiliza las reglas estrictas de
  tragedia y comedia clásicas.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "avanzado"
  tags: ["subgeneros", "vocabulario"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "\"Drama\" y \"género dramático\" son exactamente lo mismo: toda obra de género dramático se llama \"drama\"."

pasos:
  - "\"Género dramático\" es la categoría general (con tragedia, comedia y drama como subgéneros); \"drama\" es sólo uno de esos tres subgéneros."

explicacion: |
  Falso: el drama es un subgénero particular dentro del género
  dramático, no un sinónimo de la categoría completa.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "basico"
  tags: ["dialogo", "acotaciones", "diferenciacion"]

variables:
  partes: ["¿Vas a venir a la fiesta?", "(nervioso)"]
  tipos: ["diálogo", "acotación"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["diálogo", "acotación"]

enunciado: "En \"JUAN: (nervioso) ¿Vas a venir a la fiesta?\", la parte \"{partes[idx]}\" es..."

pasos:
  - "Lo que está entre paréntesis es acotación; lo que dice el personaje directamente es diálogo."

explicacion: |
  El diálogo es lo que el personaje efectivamente dice; la acotación
  es la indicación escénica entre paréntesis.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["genero_dramatico", "representacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El texto dramático está pensado principalmente para ser actuado en un escenario, aunque también se pueda leer como cualquier otro texto."

pasos:
  - "Su estructura en diálogos y acotaciones está orientada a la puesta en escena."

explicacion: |
  Verdadero: la representación es el destino principal del texto
  dramático, la lectura es una forma alternativa de acceder a él.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["estructura", "acto", "escena"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un acto puede estar formado por varias escenas."

pasos:
  - "La escena es una subdivisión del acto, no al revés."

explicacion: |
  Verdadero: el acto es la unidad mayor, compuesta de una o más
  escenas.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["genero_dramatico", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: "dramático"
tipo: mc
opciones_explicitas: ["narrativo", "lírico", "dramático"]

enunciado: "Un texto compuesto por líneas como \"ANA: No puedo creerlo. (se sienta, sorprendida) ¿Cuándo pasó esto?\" es de género..."

pasos:
  - "Diálogo identificado por nombre del personaje + acotación entre paréntesis = marcas del género dramático."

explicacion: |
  La estructura de diálogo con acotaciones es exclusiva del género
  dramático.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "avanzado"
  tags: ["genero_dramatico", "genero_lirico", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El género dramático, igual que el lírico, se organiza principalmente alrededor de un único hablante que expresa sus emociones."

pasos:
  - "El dramático se organiza en diálogos entre VARIOS personajes, no en la voz de un único hablante."

explicacion: |
  Falso: la lírica gira en torno a un hablante; el dramático, en
  torno al intercambio de varios personajes.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["acotaciones"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las acotaciones no son pronunciadas por ningún personaje: son indicaciones del autor para quien monta o interpreta la obra."

pasos:
  - "Se distinguen tipográficamente (paréntesis/cursiva) precisamente porque no forman parte de lo hablado."

explicacion: |
  Verdadero: las acotaciones son la voz del autor guiando la puesta
  en escena, no un parlamento de los personajes.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "intermedio"
  tags: ["genero_dramatico", "metodo"]

enunciado: "Ordená los pasos para analizar la estructura de una obra dramática."
tipo: ordenar
opciones_explicitas:
  - "Separar el texto en actos"
  - "Dentro de cada acto, identificar las escenas"
  - "Distinguir el diálogo de las acotaciones"
  - "Determinar si el tono general corresponde a tragedia, comedia o drama"
respuesta_orden:
  - "Separar el texto en actos"
  - "Dentro de cada acto, identificar las escenas"
  - "Distinguir el diálogo de las acotaciones"
  - "Determinar si el tono general corresponde a tragedia, comedia o drama"

explicacion: |
  El análisis va de la estructura mayor (actos) a la menor (escenas),
  después distingue diálogo de acotación, y termina clasificando el
  subgénero.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "avanzado"
  tags: ["genero_dramatico", "acotaciones"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El texto dramático puede describir el escenario o ambiente a través de acotaciones, sin necesitar párrafos descriptivos en prosa como en la narrativa."

pasos:
  - "Las acotaciones cumplen la función que en la narrativa cumpliría un párrafo descriptivo."

explicacion: |
  Verdadero: las acotaciones son el recurso propio del dramático para
  describir escenario, gestos y tono, reemplazando la descripción en
  prosa.
```

```
metadata:
  materia: "lengua"
  tema: "genero_dramatico"
  nivel: "avanzado"
  tags: ["genero_dramatico", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si el propósito es que una historia se represente en vivo ante un público, con personajes que interactúan directamente entre sí, conviene escribirla como texto dramático antes que como cuento."

pasos:
  - "El cuento tiene narrador y se lee; el texto dramático se organiza para la actuación en escena."

explicacion: |
  Verdadero: la elección del género depende del propósito
  (representación en vivo vs. lectura narrada).
```

## Sección: genero-lirico (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "basico"
  tags: ["genero_lirico", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El género lírico expresa sentimientos, emociones o reflexiones subjetivas, generalmente en verso, sin necesitar una historia con personajes y trama."

pasos:
  - "A diferencia del narrativo, su eje no es contar hechos sino expresar una experiencia interior."

explicacion: |
  Verdadero: la expresión subjetiva, no el relato de hechos, define
  al género lírico.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["hablante_lirico"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El hablante lírico de un poema es siempre exactamente el poeta que lo escribió."

pasos:
  - "Igual que el narrador en la narrativa, el hablante lírico es una voz construida dentro del texto, no la persona real del autor."

explicacion: |
  Falso: el hablante lírico (o \"yo lírico\") puede coincidir con el
  autor real o ser una construcción distinta.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "basico"
  tags: ["verso"]

variables:
  n: uno_de([1, 1])

respuesta: "verso"
tipo: completar

enunciado: "Cada línea de un poema se llama..."

pasos:
  - "Es la unidad básica de organización del poema."

explicacion: |
  El verso es la línea individual dentro de un poema.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "basico"
  tags: ["estrofa"]

variables:
  n: uno_de([1, 1])

respuesta: "estrofa"
tipo: completar

enunciado: "Un grupo de versos separado de otros grupos por un espacio en blanco se llama..."

pasos:
  - "Es el equivalente al párrafo, pero en poesía."

explicacion: |
  La estrofa agrupa varios versos, igual que el párrafo agrupa
  oraciones en prosa.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["rima", "consonante"]

variables:
  n: uno_de([1, 1])

respuesta: "consonante"
tipo: mc
opciones_explicitas: ["consonante", "asonante", "libre"]

enunciado: "En los versos que terminan en \"cantar\" y \"lugar\", donde coinciden TODOS los sonidos desde la última vocal acentuada, la rima es..."

pasos:
  - "Consonante: coinciden vocales Y consonantes desde la última vocal acentuada."

explicacion: |
  La rima consonante exige coincidencia total de sonidos, no sólo de
  vocales.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["rima", "asonante"]

variables:
  n: uno_de([1, 1])

respuesta: "asonante"
tipo: mc
opciones_explicitas: ["consonante", "asonante", "libre"]

enunciado: "En los versos que terminan en \"cantar\" y \"amanecer\", donde sólo coinciden las vocales (a-a) desde la última acentuada, la rima es..."

pasos:
  - "Asonante: sólo coinciden las vocales, no las consonantes."

explicacion: |
  La rima asonante es más laxa: sólo exige coincidencia de vocales.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["verso_libre"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El verso libre no tiene rima ni métrica fija, y es muy común en la poesía moderna."

pasos:
  - "A diferencia de la poesía clásica, el verso libre prescinde de las reglas de rima y medida."

explicacion: |
  Verdadero: el verso libre es una forma sin las restricciones
  formales de rima/métrica regular.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["metrica"]

variables:
  n: uno_de([1, 1])

respuesta: "las sílabas de cada verso"
tipo: mc
opciones_explicitas: ["las sílabas de cada verso", "la cantidad de versos del poema", "la cantidad de estrofas"]

enunciado: "La métrica de un poema cuenta..."

pasos:
  - "La métrica se ocupa de la medida silábica de cada verso, no de cuántos versos o estrofas tiene el poema."

explicacion: |
  La métrica mide la cantidad de sílabas por verso (con reglas
  adicionales de sinalefa y acentuación final).
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["metrica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un poema tiene métrica regular cuando todos sus versos tienen la misma cantidad de sílabas."

pasos:
  - "Métrica irregular es cuando los versos varían de longitud silábica."

explicacion: |
  Verdadero: la regularidad se refiere a la igualdad en la medida
  silábica entre los versos del poema.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "avanzado"
  tags: ["recursos_literarios", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El género lírico, junto con el narrativo, es donde más se concentran los recursos literarios como la metáfora o la comparación."

pasos:
  - "La expresión subjetiva del género lírico se apoya fuertemente en un lenguaje figurado."

explicacion: |
  Verdadero: el estudio de recursos literarios se apoya
  especialmente en ejemplos del género lírico.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["genero_lirico", "genero_narrativo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El género lírico, igual que el narrativo, necesita siempre personajes y una trama con conflicto."

pasos:
  - "El género lírico puede expresar una emoción sin contar ninguna historia con personajes."

explicacion: |
  Falso: la lírica se centra en la expresión subjetiva, no en el
  relato de hechos con personajes.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "basico"
  tags: ["verso", "estrofa", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Verso y estrofa son sinónimos: ambos designan una sola línea del poema."

pasos:
  - "El verso es una línea; la estrofa es un grupo de varios versos."

explicacion: |
  Falso: la estrofa agrupa varios versos, no es equivalente a uno
  solo.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "basico"
  tags: ["genero_lirico", "formas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El poema es la forma más representativa del género lírico."

pasos:
  - "La organización en versos y estrofas es característica de la poesía."

explicacion: |
  Verdadero: aunque hay prosa poética, el poema (organizado en verso)
  es la forma más típica del género lírico.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "avanzado"
  tags: ["rima", "comparacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La rima consonante es más exigente que la asonante, porque requiere coincidencia de todos los sonidos (vocales y consonantes), no sólo de las vocales."

pasos:
  - "Consonante: coincide todo. Asonante: coinciden sólo vocales."

explicacion: |
  Verdadero: por eso la rima consonante es más difícil de lograr que
  la asonante.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["rima", "practica"]

variables:
  pares: ["flor / dolor", "cielo / sereno"]
  tipos: ["consonante", "asonante"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["consonante", "asonante", "libre"]

enunciado: "El par de versos que terminan en \"{pares[idx]}\" tiene rima..."

pasos:
  - "Comparar todos los sonidos finales (consonante) o sólo las vocales (asonante) desde la última vocal acentuada."

explicacion: |
  \"flor/dolor\" coincide en todo el sonido final → consonante.
  \"cielo/sereno\" sólo coincide en las vocales e-o → asonante.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "avanzado"
  tags: ["hablante_lirico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un poeta puede escribir un poema con un hablante lírico que exprese una emoción o punto de vista distinto al suyo propio."

pasos:
  - "El hablante lírico, igual que un narrador en una novela, es una construcción del texto, no una autobiografía obligatoria."

explicacion: |
  Verdadero: separar hablante lírico de autor real evita leer todo
  poema como confesión literal del poeta.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "avanzado"
  tags: ["verso_libre"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un poema en verso libre puede seguir organizado en versos y estrofas, aunque no tenga rima ni métrica regular."

pasos:
  - "Prescindir de rima/métrica no elimina la organización básica en líneas (versos) y grupos (estrofas)."

explicacion: |
  Verdadero: verso libre se refiere a la ausencia de rima/métrica
  fija, no a la ausencia total de forma.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["genero_lirico", "metodo"]

enunciado: "Ordená los pasos para analizar la forma de un poema."
tipo: ordenar
opciones_explicitas:
  - "Contar cuántos versos tiene y cómo se agrupan en estrofas"
  - "Revisar si hay rima entre los versos, y de qué tipo (consonante/asonante)"
  - "Contar las sílabas de cada verso para ver si la métrica es regular"
  - "Identificar quién es el hablante lírico del poema"
respuesta_orden:
  - "Contar cuántos versos tiene y cómo se agrupan en estrofas"
  - "Revisar si hay rima entre los versos, y de qué tipo (consonante/asonante)"
  - "Contar las sílabas de cada verso para ver si la métrica es regular"
  - "Identificar quién es el hablante lírico del poema"

explicacion: |
  El análisis va de la estructura visible (versos/estrofas) a la
  sonora (rima), a la silábica (métrica) y termina en la voz que
  habla en el poema.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "avanzado"
  tags: ["genero_lirico", "genero_dramatico", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El género lírico, igual que el dramático, está escrito principalmente para ser representado con diálogos entre personajes en un escenario."

pasos:
  - "El lírico expresa una voz subjetiva (el hablante lírico), no está organizado como diálogo escénico."

explicacion: |
  Falso: el género dramático se organiza en diálogos para
  representación teatral; el lírico expresa la voz de un hablante,
  sin esa estructura de diálogo escénico.
```

```
metadata:
  materia: "lengua"
  tema: "genero_lirico"
  nivel: "intermedio"
  tags: ["genero_lirico", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: "lírico"
tipo: mc
opciones_explicitas: ["lírico", "narrativo", "dramático"]

enunciado: "Un texto breve, organizado en versos y estrofas, que expresa la tristeza de un hablante sin contar una historia con personajes ni presentar diálogos escénicos, es de género..."

pasos:
  - "Verso + estrofa + expresión subjetiva sin trama ni diálogo escénico = lírico."

explicacion: |
  Todas las marcas descriptas (verso, estrofa, expresión subjetiva)
  corresponden al género lírico.
```

## Sección: genero-narrativo (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["genero_narrativo", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El género narrativo agrupa los textos literarios que cuentan una historia: hechos que le ocurren a personajes a lo largo del tiempo."

pasos:
  - "Es la especialización literaria del tipo textual narrativo."

explicacion: |
  Verdadero: contar una historia con personajes y acciones en el
  tiempo es la definición central del género narrativo.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["cuento", "formas"]

variables:
  n: uno_de([1, 1])

respuesta: "cuento"
tipo: mc
opciones_explicitas: ["cuento", "novela", "fábula", "mito"]

enunciado: "Una narración breve, con pocos personajes y un solo conflicto central, es un/una..."

pasos:
  - "La brevedad y el conflicto único son las marcas del cuento frente a la novela."

explicacion: |
  El cuento se distingue de la novela por su extensión breve y su
  foco en un solo conflicto.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["novela", "formas"]

variables:
  n: uno_de([1, 1])

respuesta: "novela"
tipo: mc
opciones_explicitas: ["cuento", "novela", "leyenda", "mito"]

enunciado: "Una narración extensa, con varios personajes y tramas que se desarrollan en profundidad, es un/una..."

pasos:
  - "La extensión y la multiplicidad de tramas distinguen a la novela del cuento."

explicacion: |
  La novela permite mayor desarrollo de personajes y subtramas que el
  cuento.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["fabula", "formas"]

variables:
  n: uno_de([1, 1])

respuesta: "fábula"
tipo: mc
opciones_explicitas: ["cuento", "fábula", "leyenda", "mito"]

enunciado: "Un relato breve protagonizado por animales, que termina con una moraleja explícita, es un/una..."

pasos:
  - "Animales como protagonistas + moraleja al final = fábula."

explicacion: |
  La fábula se distingue por sus protagonistas animales y su cierre
  con una enseñanza moral explícita.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "intermedio"
  tags: ["leyenda", "formas"]

variables:
  n: uno_de([1, 1])

respuesta: "leyenda"
tipo: mc
opciones_explicitas: ["fábula", "leyenda", "mito", "novela"]

enunciado: "Un relato tradicional que mezcla un hecho real con elementos fantásticos para explicar el origen de algo local, es un/una..."

pasos:
  - "Mezcla de real+fantástico y explicación de origen local son las marcas de la leyenda."

explicacion: |
  La leyenda se diferencia del mito en que suele anclarse a un lugar
  o hecho real concreto.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "intermedio"
  tags: ["mito", "formas"]

variables:
  n: uno_de([1, 1])

respuesta: "mito"
tipo: mc
opciones_explicitas: ["fábula", "leyenda", "mito", "cuento"]

enunciado: "Un relato tradicional que explica fenómenos del mundo (como el día y la noche) a través de dioses o seres sobrenaturales, es un/una..."

pasos:
  - "Dioses/seres sobrenaturales + explicación de fenómenos del mundo son las marcas del mito."

explicacion: |
  El mito recurre a lo sobrenatural para explicar el origen de
  fenómenos naturales o del mundo.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["elementos", "personajes"]

variables:
  n: uno_de([1, 1])

respuesta: "personajes"
tipo: completar

enunciado: "El elemento narrativo que responde a \"¿quiénes participan en la historia?\" se llama..."

pasos:
  - "Protagonista, antagonista y secundarios son tipos de este elemento."

explicacion: |
  Los personajes son quienes llevan adelante (o sufren) la acción de
  la historia.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["elementos", "trama"]

variables:
  n: uno_de([1, 1])

respuesta: "acción"
tipo: completar

enunciado: "El elemento narrativo que responde a \"¿qué sucede?\" (la serie de hechos encadenados) se llama..."

pasos:
  - "También se le llama \"trama\": la secuencia de sucesos de la historia."

explicacion: |
  La acción/trama es la serie de hechos que forman la historia
  contada.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["elementos", "tiempo"]

variables:
  n: uno_de([1, 1])

respuesta: "tiempo"
tipo: completar

enunciado: "El elemento narrativo que responde a \"¿cuándo ocurre la historia?\" se llama..."

pasos:
  - "Incluye época, duración y orden en que se cuenta."

explicacion: |
  El tiempo narrativo define cuándo transcurren los hechos contados.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["elementos", "espacio"]

variables:
  n: uno_de([1, 1])

respuesta: "espacio"
tipo: completar

enunciado: "El elemento narrativo que responde a \"¿dónde ocurre la historia?\" se llama..."

pasos:
  - "El lugar (real o imaginario) donde suceden los hechos."

explicacion: |
  El espacio narrativo es el escenario donde ocurre la acción.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "intermedio"
  tags: ["conflicto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sin conflicto (un problema u obstáculo que enfrenta el protagonista), no hay historia que contar, sólo una descripción de hechos sin tensión."

pasos:
  - "El conflicto es lo que genera interés y avance en la trama."

explicacion: |
  Verdadero: el conflicto es el motor central de cualquier narración.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "basico"
  tags: ["personajes", "diferenciacion"]

variables:
  tipos: ["protagonista", "antagonista"]
  descripciones: ["el personaje principal, quien impulsa la acción", "el personaje que se opone al protagonista"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["protagonista", "antagonista", "secundario"]

enunciado: "El personaje que es \"{descripciones[idx]}\" se llama..."

pasos:
  - "El protagonista impulsa la historia; el antagonista se le opone."

explicacion: |
  Protagonista y antagonista son los dos roles centrales del
  conflicto narrativo.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "avanzado"
  tags: ["fabula", "mito", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La fábula y el mito son exactamente lo mismo, sólo cambia el nombre según la región."

pasos:
  - "La fábula usa animales para dejar una moraleja explícita; el mito usa dioses/seres sobrenaturales para explicar fenómenos del mundo."

explicacion: |
  Falso: se distinguen por sus protagonistas (animales vs. dioses) y
  su propósito (enseñanza moral vs. explicación de fenómenos).
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "intermedio"
  tags: ["leyenda"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una característica típica de la leyenda es combinar un hecho o lugar real con elementos fantásticos."

pasos:
  - "A diferencia del mito (totalmente sobrenatural), la leyenda suele anclarse a algo real."

explicacion: |
  Verdadero: esa mezcla de real y fantástico es lo que distingue a la
  leyenda de otras formas narrativas tradicionales.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "intermedio"
  tags: ["cuento", "conflicto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la novela, el cuento suele desarrollar un solo conflicto central, sin subtramas extensas."

pasos:
  - "La brevedad del cuento no permite el mismo desarrollo de múltiples tramas que la novela."

explicacion: |
  Verdadero: la concentración en un solo conflicto es típica del
  cuento por su extensión breve.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "intermedio"
  tags: ["formas", "clasificacion"]

variables:
  descripciones: ["un zorro y una cigüeña se invitan a cenar mutuamente y aprenden una lección", "una joven se convierte en río para escapar de un dios enamorado, y así se explica el origen del río"]
  formas: ["fábula", "mito"]
  idx: uno_de([0, 1])

respuesta: formas[idx]
tipo: mc
opciones_explicitas: ["cuento", "fábula", "leyenda", "mito"]

enunciado: "Un relato donde \"{descripciones[idx]}\" es un ejemplo de..."

pasos:
  - "Animales + moraleja = fábula. Dioses/seres sobrenaturales + explicación de fenómeno = mito."

explicacion: |
  Cada forma narrativa breve tiene protagonistas y propósitos
  característicos que permiten identificarla.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "avanzado"
  tags: ["conflicto", "descripcion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "\"La casa era grande, con paredes blancas y techo rojo\" es un ejemplo de narración con un conflicto claro."

pasos:
  - "Esa oración sólo describe características, no cuenta hechos ni presenta un problema: es descriptiva, no narrativa."

explicacion: |
  Falso: sin acción ni conflicto, el texto es descriptivo, no
  narrativo — coherente con la distinción vista en tipos textuales.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "intermedio"
  tags: ["elementos", "metodo"]

enunciado: "Ordená (de más general a más específico) el proceso para analizar los elementos de una narración."
tipo: ordenar
opciones_explicitas:
  - "Identificar los personajes (protagonista, antagonista, secundarios)"
  - "Determinar el tiempo y el espacio donde ocurre"
  - "Reconocer la acción/trama: la secuencia de hechos"
  - "Identificar el conflicto central que motoriza la historia"
respuesta_orden:
  - "Identificar los personajes (protagonista, antagonista, secundarios)"
  - "Determinar el tiempo y el espacio donde ocurre"
  - "Reconocer la acción/trama: la secuencia de hechos"
  - "Identificar el conflicto central que motoriza la historia"

explicacion: |
  Se parte de quiénes participan, luego cuándo/dónde, después qué
  pasa, y se llega al conflicto que explica por qué la historia
  avanza.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "avanzado"
  tags: ["genero_narrativo", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Entender los elementos básicos del género narrativo (personajes, trama, tiempo, espacio, conflicto) es el prerrequisito para estudiar quién narra la historia (narrador) y desde qué perspectiva (punto de vista)."

pasos:
  - "No se puede analizar CÓMO se cuenta una historia sin primero identificar QUÉ se está contando."

explicacion: |
  Verdadero: por eso este tema es el primer nodo de la subrama que
  sigue con narrador, punto de vista y estructura narrativa.
```

```
metadata:
  materia: "lengua"
  tema: "genero_narrativo"
  nivel: "avanzado"
  tags: ["formas", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si el propósito es dejar una enseñanza moral clara usando animales como protagonistas, conviene escribir una fábula antes que una novela."

pasos:
  - "La fábula está diseñada específicamente para ese propósito: brevedad + moraleja explícita."

explicacion: |
  Verdadero: cada forma narrativa está adaptada a un propósito y
  extensión distintos.
```

## Sección: generos-discursivos (41 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["generos_primarios", "identificacion"]

variables:
  genero: uno_de(["conversacion telefonica", "chiste entre amigos", "orden simple"])

respuesta: genero
tipo: input

enunciado: "¿Cuál de los siguientes es un ejemplo de género discursivo PRIMARIO, surgido espontáneamente en la interacción cotidiana?"

explicacion: |
  Los géneros primarios son intercambios básicos de la vida diaria, como conversaciones telefónicas, chistes entre amigos o órdenes simples, que surgen de manera espontánea y no están mediadas por instituciones complejas.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["generos_secundarios", "caracteristicas"]

variables:
  caracteristica: uno_de(["estructura flexible", "interacción inmediata", "sistematización compleja"])

respuesta: caracteristica
tipo: input

enunciado: "Los géneros discursivos secundarios se caracterizan por ser más complejos y desarrollarse en ámbitos organizados. ¿Cuál es una característica clave de estos géneros?"

explicacion: |
  A diferencia de los primarios, los géneros secundarios se construyen sobre bases primarias pero las transforman y sistematizan, requiriendo normas estrictas y planificación cuidadosa (ej. informes, ensayos).
```

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["funcion_social", "comunicacion"]

variables:
  funcion: uno_de(["guia social", "categoria rigida", "modelo literario"])

respuesta: funcion
tipo: input

enunciado: "Los géneros discursivos actúan como '{funcion}' que nos ayudan a navegar situaciones de la vida cotidiana y profesional."

explicacion: |
  Los géneros discursivos no son categorías rígidas, sino modelos compartidos que funcionan como guías sociales para asegurar que el texto sea comprendido y tenga el impacto deseado en cada contexto.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["registro", "aplicacion"]

variables:
  situacion: uno_de(["trabajo academico", "anecdota con amigos"])
  registro: "formal"
  registro_inverso: "coloquial"

respuesta: registro
tipo: input

enunciado: "Si intentamos escribir un '{situacion}' utilizando el lenguaje coloquial de un mensaje de WhatsApp, el mensaje puede perderse. ¿Qué tipo de registro sería más adecuado para un trabajo académico?"

explicacion: |
  Para un trabajo académico, se requiere un registro formal. Usar un registro coloquial (como en WhatsApp) en contextos formales puede llevar a malentendidos o falta de seriedad percibida.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["generos_secundarios", "ejemplos"]

variables:
  genero: uno_de(["noticia de prensa", "conversacion telefonica", "discusion familiar"])

respuesta: genero
tipo: input

enunciado: "¿Cuál de los siguientes es un ejemplo claro de género discursivo SECUNDARIO, desarrollado en ámbitos organizados?"

explicacion: |
  La noticia de prensa es un género secundario porque toma elementos de la interacción primaria pero los organiza bajo normas estrictas de objetividad y estructura, a diferencia de la conversación telefónica o la discusión familiar que son primarios.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["generos_primarios", "estructura"]

variables:
  tipo_estructura: uno_de(["flexible", "estricta", "piramidal"])

respuesta: tipo_estructura
tipo: input

enunciado: "La estructura de los géneros discursivos primarios suele ser '{tipo_estructura}' y su propósito es la interacción inmediata."

explicacion: |
  Los géneros primarios, al surgir de la interacción cotidiana espontánea, tienen una estructura flexible, a diferencia de los secundarios que suelen tener estructuras más definidas y rígidas.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["relacion_generos", "construccion"]

variables:
  relacion: uno_de(["se construyen sobre la base de los primarios", "son independientes de los primarios", "reemplazan totalmente a los primarios"])

respuesta: relacion
tipo: input

enunciado: "Los géneros secundarios '{relacion}', pero los transforman y sistematizan."

explicacion: |
  Los géneros secundarios no surgen de la nada; se desarrollan sobre la base de los géneros primarios (interacciones básicas) pero les añaden complejidad, normas y sistematización.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["estructura", "tono"]

variables:
  elemento: uno_de(["vocabulario", "tono", "estructura"])

respuesta: elemento
tipo: input

enunciado: "Cada género discursivo tiene una estructura, un '{elemento}' y un tono propios que nos indican cómo debemos comunicarnos en cada situación."

explicacion: |
  Cada género define no solo la estructura, sino también el vocabulario específico y el tono adecuado (formal, informal, técnico, etc.) para su uso correcto.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["generos_primarios", "proposito"]

variables:
  proposito: uno_de(["interaccion inmediata", "sistematizacion", "verificacion de datos"])

respuesta: proposito
tipo: input

enunciado: "El propósito principal de los géneros discursivos primarios es la '{proposito}'."

explicacion: |
  Los géneros primarios están diseñados para la interacción directa y cotidiana, sin la necesidad de una planificación extensa o normas estrictas.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["generos_secundarios", "proposito"]

variables:
  proposito: uno_de(["comunicacion informal", "planificacion cuidadosa", "interaccion espontanea"])

respuesta: proposito
tipo: input

enunciado: "Los géneros secundarios requieren un '{proposito}' que va más allá del intercambio espontáneo."

explicacion: |
  Los géneros secundarios, al ser más complejos y estar ligados a ámbitos institucionales, requieren una planificación cuidadosa y un conocimiento especializado.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["definicion", "completar"]

variables:
  palabra1: "tipos"
  palabra2: "textos"
  palabra3: "funcion"
  palabra4: "social"

respuesta: palabra1
tipo: completar

enunciado: "Los géneros discursivos son los {palabra1} de textos que utilizamos habitualmente para cumplir con una {palabra4} específica."

explicacion: |
  Los géneros discursivos son los *tipos* de textos que usamos para cumplir funciones sociales. No son categorías literarias rígidas, sino modelos de uso común.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["ejemplo", "transformacion"]

variables:
  genero1: "conversacion"
  genero2: "noticia"

respuesta: genero2
tipo: completar

enunciado: "Una '{genero2}' de prensa toma elementos de una '{genero1}' o un reporte informal, pero los organiza bajo normas de objetividad."

explicacion: |
  La *noticia* de prensa es un género secundario que transforma elementos de la *conversación* o reporte informal primario mediante la aplicación de normas estrictas.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["registro", "completar"]

variables:
  palabra1: "perderse"
  palabra2: "malinterpretado"

respuesta: palabra1
tipo: completar

enunciado: "Si usamos lenguaje coloquial en un contexto formal, el mensaje puede {palabra1} o ser {palabra2}."

explicacion: |
  El uso inadecuado del registro puede hacer que el mensaje se *pierda* o sea *malinterpretado*, ya que no se ajusta a las expectativas del género discursivo esperado.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["comparacion", "primario_secundario"]

respuesta: falso
tipo: vf

enunciado: "Los géneros primarios y secundarios tienen la misma estructura rígida y formal."

explicacion: |
  Falso. Los géneros primarios suelen tener una estructura flexible y surgen de la interacción espontánea, mientras que los secundarios son más complejos y sistematizados.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["vocabulario", "especializado"]

respuesta: falso
tipo: vf

enunciado: "Todos los géneros discursivos utilizan el mismo vocabulario estándar sin variaciones."

explicacion: |
  Falso. Cada género tiene un vocabulario propio que depende del contexto y la comunidad, como el lenguaje técnico en informes o el coloquial en chats.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "avanzado"
  tags: ["naturaleza", "dinamica"]

respuesta: falso
tipo: vf

enunciado: "Los géneros discursivos son categorías rígidas e inmutables que no cambian con el tiempo."

explicacion: |
  Falso. Los géneros son modelos que se construyen y comparten a lo largo del tiempo, adaptándose a las necesidades de la comunidad.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["efectividad", "comunicacion"]

respuesta: verdadero
tipo: vf

enunciado: "Usar el género discursivo adecuado aumenta la efectividad y precisión del mensaje."

explicacion: |
  Verdadero. Entender y usar el género correcto asegura que el texto sea comprendido y tenga el impacto deseado en la situación dada.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["tono", "situacion"]

respuesta: falso
tipo: vf

enunciado: "El tono de un género discursivo es siempre el mismo, independientemente de la situación."

explicacion: |
  Falso. El tono varía según la situación y el género; lo que es apropiado en una conversación familiar puede ser inapropiado en un informe legal.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["adaptacion", "registro"]

respuesta: verdadero
tipo: vf

enunciado: "Debemos adaptar nuestro lenguaje al género discursivo adecuado para evitar malentendidos."

explicacion: |
  Verdadero. Usar el género incorrecto (ej. coloquial en un trabajo académico) puede llevar a que el mensaje se pierda o sea malinterpretado.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["generos_primarios", "identificacion"]

variables:
  genero: uno_de(["conversacion_familiar", "orden_de_trabajo", "chiste_entre_amigos"])

respuesta: genero
tipo: input

enunciado: "¿Cuál de los siguientes es un ejemplo clásico de género discursivo PRIMARIO?"

explicacion: |
  Los géneros primarios surgen espontáneamente en la interacción cotidiana directa. La conversación familiar, la orden de trabajo o el chiste entre amigos cumplen con esta definición, a diferencia de textos más complejos como noticias o ensayos.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["definicion", "flexibilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Los géneros discursivos son categorías rígidas e inmutables que no cambian con el tiempo ni con la comunidad."

explicacion: |
  Falso. Los géneros discursivos son modelos que se construyen y comparten dentro de una comunidad a lo largo del tiempo, adaptándose a las necesidades comunicativas de cada contexto.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["primarios", "secundarios", "comparacion"]

variables:
  correcta: uno_de(["interaccion_cotidiana", "sistematizacion_institucional"])
  distractor1: "rigidez_formal"
  distractor2: "ausencia_de_estructura"

respuesta: correcta
tipo: mc
opciones_explicitas: [distractor1, distractor2, correcta, distractor1]

enunciado: "La diferencia fundamental entre géneros primarios y secundarios radica en:"

explicacion: |
  Los primarios se basan en la interacción cotidiana y espontánea, mientras que los secundarios están sistematizados por instituciones complejas como la escuela, la ciencia o la administración.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["secundarios", "ejemplos"]

variables:
  correcta: uno_de(["noticia", "ensayo_cientifico", "informe_legal"])
  distractor1: "conversacion_telefonica"
  distractor2: "chiste"

respuesta: correcta
tipo: mc
opciones_explicitas: [distractor1, distractor2, correcta, distractor2]

enunciado: "¿Cuál de los siguientes es un ejemplo de género discursivo SECUNDARIO?"

explicacion: |
  La noticia, el ensayo científico y el informe legal son géneros secundarios porque se desarrollan en ámbitos organizados y requieren normas estrictas. La conversación y el chiste son primarios.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["registro", "efectividad"]

variables:
  genero_formal: uno_de(["informe_escolar", "carta_de_presentacion"])
  genero_informal: uno_de(["mensaje_whatsapp", "chiste"])
  contexto: uno_de(["academico", "profesional"])
  registro: uno_de(["formal", "coloquial"])

respuesta: registro
tipo: input

enunciado: "Si debes escribir un {genero_formal} en un contexto {contexto}, ¿qué registro debes evitar?"

explicacion: |
  Debes evitar el registro coloquial o informal, ya que el género formal requiere precisión y adecuación al contexto institucional o académico.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["estructura", "primarios"]

respuesta: verdadero
tipo: vf

enunciado: "Los géneros discursivos primarios suelen tener una estructura flexible y un propósito de interacción inmediata."

explicacion: |
  Verdadero. Al ser espontáneos y cotidianos, no están sujetos a las normas rígidas de los géneros secundarios, permitiendo mayor flexibilidad estructural.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["construccion", "relacion"]

variables:
  correcta: "generos_primarios"
  distractor1: "normas_lingüisticas"
  distractor2: "diccionarios"

respuesta: correcta
tipo: mc
opciones_explicitas: [distractor1, distractor2, correcta, distractor1]

enunciado: "Los géneros secundarios se construyen sobre la base de:"

explicacion: |
  Los géneros secundarios toman elementos de los géneros primarios (como la conversación o el reporte informal) y los transforman mediante la sistematización institucional.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["identificacion", "secundarios"]

variables:
  genero: uno_de(["noticia_prensa", "novela", "ensayo"])
  caracteristica: uno_de(["objetividad", "ficción_narrativa", "argumentacion"])

respuesta: genero
tipo: input

enunciado: "Si un texto se caracteriza por la {caracteristica} y la verificación de datos en un ámbito organizado, ¿qué género secundario es más probable?"

explicacion: |
  La noticia de prensa se caracteriza por la objetividad y la verificación de datos. La novela implica ficción y el ensayo argumentación, pero la descripción encaja mejor con la noticia en este contexto de "verificación".
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["errores", "registro"]

respuesta: falso
tipo: vf

enunciado: "Es aceptable escribir un trabajo académico utilizando el lenguaje coloquial de un mensaje de WhatsApp para ser más cercano al lector."

explicacion: |
  Falso. El trabajo académico requiere un registro formal y preciso. Usar lenguaje coloquial puede hacer que el mensaje se pierda o sea malinterpretado por no cumplir con las expectativas del género.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["primarios", "ejemplos"]

variables:
  correcta: uno_de(["discusion_familiar", "conversacion_telefonica"])
  distractor1: "informe_legal"
  distractor2: "receta_cocina"

respuesta: correcta
tipo: mc
opciones_explicitas: [distractor1, distractor2, correcta, distractor1]

enunciado: "¿Cuál de los siguientes es un ejemplo de género discursivo PRIMARIO?"

explicacion: |
  La discusión familiar y la conversación telefónica son interacciones cotidianas directas. La receta y el informe son géneros secundarios o estructurados institucionalmente.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["instituciones", "secundarios"]

variables:
  institucion: uno_de(["escuela", "ciencia", "politica"])
  genero: uno_de(["informe_escolar", "articulo_cientifico", "discurso_politico"])

respuesta: genero
tipo: input

enunciado: "En el ámbito de la {institucion}, ¿qué tipo de género discursivo se desarrollaría típicamente?"

explicacion: |
  Cada institución desarrolla sus propios géneros secundarios. La escuela genera informes, la ciencia artículos, y la política discursos, todos sistematizados.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["secundarios", "complejidad"]

respuesta: verdadero
tipo: vf

enunciado: "Los géneros secundarios como la literatura o el ensayo científico requieren un conocimiento especializado y una planificación cuidadosa."

explicacion: |
  Verdadero. A diferencia de los géneros primarios, los secundarios exigen una planificación previa y dominio de normas específicas del campo disciplinar o institucional.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["metforas", "explicacion"]

variables:
  correcta: uno_de(["recetas", "mapas"])
  distractor1: "leyes"
  distractor2: "reglas_de_juego"

respuesta: correcta
tipo: mc
opciones_explicitas: [distractor1, distractor2, correcta, distractor1]

enunciado: "En la teoría, los géneros discursivos se comparan a menudo con:"

explicacion: |
  Se usan las metáforas de "guías" o "recetas" sociales para explicar cómo nos indican los pasos a seguir en la comunicación.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["contexto", "identificacion"]

variables:
  contexto: uno_de(["trabajo", "amigos", "familia"])
  genero: uno_de(["orden_de_trabajo", "chiste", "conversacion_familiar"])

respuesta: genero
tipo: input

enunciado: "En un contexto de {contexto}, ¿cuál sería un género discursivo primario típico?"

explicacion: |
  Dependiendo del contexto, la orden de trabajo, el chiste o la conversación familiar son ejemplos de interacciones primarias espontáneas.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["primarios", "propósito"]

respuesta: verdadero
tipo: vf

enunciado: "El propósito principal de los géneros discursivos primarios es la interacción inmediata."

explicacion: |
  Verdadero. Estos géneros surgen para resolver necesidades comunicativas urgentes y cotidianas en el momento de la interacción.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["transformacion", "secundarios"]

variables:
  correcta: "sistematizan"
  distractor1: "eliminan"
  distractor2: "ignoran"

respuesta: correcta
tipo: mc
opciones_explicitas: [distractor1, distractor2, correcta, distractor1]

enunciado: "Los géneros secundarios toman elementos de los primarios y los:"

explicacion: |
  Los géneros secundarios transforman y sistematizan los elementos de los primarios, organizándolos bajo normas estrictas.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["primarios", "definicion"]

variables:
  genero: uno_de(["conversacion_telefonica", "orden_simple", "chiste"])

respuesta: genero
tipo: input

enunciado: "¿Cuál de estos es un género discursivo primario que no está mediado por instituciones complejas?"

explicacion: |
  La conversación telefónica, la orden simple o el chiste son interacciones directas y cotidianas, sin mediación institucional compleja.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["estructura", "primarios"]

respuesta: falso
tipo: vf

enunciado: "Los géneros discursivos primarios tienen una estructura rígida y estricta que no permite variaciones."

explicacion: |
  Falso. Los géneros primarios suelen tener una estructura flexible, adaptándose a la espontaneidad de la interacción diaria.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["secundarios", "complejidad"]

variables:
  correcta: uno_de(["informe_legal", "novela", "ensayo"])
  distractor1: "conversacion"
  distractor2: "chiste"

respuesta: correcta
tipo: mc
opciones_explicitas: [distractor1, distractor2, correcta, distractor1]

enunciado: "¿Cuál de los siguientes es un ejemplo de género discursivo secundario complejo?"

explicacion: |
  El informe legal, la novela y el ensayo son géneros secundarios que requieren planificación y conocimiento especializado, a diferencia de los primarios.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["primarios", "interaccion"]

variables:
  interaccion: uno_de(["telefonica", "familiar", "laboral"])
  genero: uno_de(["conversacion", "discusion", "orden"])

respuesta: genero
tipo: input

enunciado: "En una interacción {interaccion}, ¿qué género primario sería más probable?"

explicacion: |
  La conversación, la discusión o la orden son géneros primarios típicos de interacciones cotidianas.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "basico"
  tags: ["instinto", "adquisicion"]

respuesta: verdadero
tipo: vf

enunciado: "Sabemos casi instintivamente cómo escribir o hablar dependiendo de la situación gracias a los géneros discursivos."

explicacion: |
  Verdadero. La internalización de los géneros nos permite navegar la comunicación social de manera fluida y casi automática.
```

```
metadata:
  materia: "lengua"
  tema: "generos_discursivos"
  nivel: "intermedio"
  tags: ["guia", "funcion"]

variables:
  correcta: "generos_discursivos"
  distractor1: "gramatica"
  distractor2: "ortografia"

respuesta: correcta
tipo: mc
opciones_explicitas: [distractor1, distractor2, correcta, distractor1]

enunciado: "¿Qué actúa como 'guía' o 'receta' social para navegar situaciones de la vida cotidiana?"

explicacion: |
  Los géneros discursivos son las guías que nos indican el comportamiento textual adecuado, más allá de las reglas gramaticales o ortográficas aisladas.
```

## Sección: generos-periodisticos (28 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

variables:
  definicion_correcta: "convenciones sociales que organizan la comunicación en medios"

respuesta: "convenciones sociales que organizan la comunicación en medios"
tipo: completar

enunciado: "Los géneros periodísticos se definen como {definicion_correcta} que permiten distinguir entre informar un hecho o interpretarlo."

explicacion: |
  Los géneros periodísticos son convenciones sociales que estructuran la comunicación en los medios, diferenciando la objetividad de la subjetividad.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["noticia", "objetivo"]

variables:
  objetivo: "informar un hecho de interés público con inmediatez"

respuesta: "informar un hecho de interés público con inmediatez"
tipo: completar

enunciado: "El objetivo principal de la noticia es {objetivo}."

explicacion: |
  La noticia busca dar a conocer hechos de interés público de manera rápida y objetiva, priorizando la inmediatez.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["estructura", "noticia"]

variables:
  estructura: "la información más importante aparece al principio"

respuesta: "la información más importante aparece al principio"
tipo: completar

enunciado: "En la estructura de pirámide invertida, {estructura}."

explicacion: |
  La pirámide invertida coloca los datos esenciales (qué, quién, cuándo, dónde, cómo, por qué) al inicio, disminuyendo la relevancia hacia el final.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["tono", "objetividad"]

variables:
  tono: "formal, preciso y neutral"

respuesta: "formal, preciso y neutral"
tipo: completar

enunciado: "El lenguaje de la noticia busca un tono {tono} para mantener la objetividad."

explicacion: |
  La objetividad en la noticia se logra mediante un lenguaje formal, preciso y neutral, evitando la subjetividad del periodista.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["veracidad", "valor"]

variables:
  valor: "la veracidad es el valor supremo"

respuesta: "la veracidad es el valor supremo"
tipo: completar

enunciado: "En el periodismo informativo, {valor}."

explicacion: |
  La veracidad es fundamental en la noticia; cada dato debe ser verificable para garantizar la confianza del lector.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["cronica", "interpretacion"]

variables:
  naturaleza: "narrar un hecho con profundidad e interpretación"

respuesta: "narrar un hecho con profundidad e interpretación"
tipo: completar

enunciado: "La crónica se caracteriza por {naturaleza}."

explicacion: |
  A diferencia de la noticia, la crónica se toma el tiempo para narrar, describir y analizar un hecho, permitiendo la interpretación.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "avanzado"
  tags: ["recursos", "cronica"]

variables:
  recursos: "metáforas, diálogos directos y descripciones detalladas"

respuesta: "metáforas, diálogos directos y descripciones detalladas"
tipo: completar

enunciado: "La crónica utiliza recursos como {recursos} para hacer 'vivir' el evento al lector."

explicacion: |
  La crónica emplea recursos literarios para crear una experiencia sensorial y emocional, acercando al lector al hecho narrado.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "avanzado"
  tags: ["clasificacion", "linguistica"]

variables:
  clasificacion: "secundarios"

respuesta: "secundarios"
tipo: completar

enunciado: "Desde la lingüística, los géneros periodísticos se consideran géneros {clasificacion}."

explicacion: |
  Son géneros secundarios porque surgen en contextos sociales complejos y requieren un aprendizaje formal, a diferencia de la conversación cotidiana (primaria).
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["comparacion", "enfoque"]

variables:
  enfoque_noticia: "el hecho en sí mismo"
  enfoque_cronica: "la experiencia del hecho"

respuesta: "el hecho en sí mismo"
tipo: completar

enunciado: "Mientras la crónica se centra en la experiencia, la noticia se centra en {enfoque_noticia}."

explicacion: |
  La noticia prioriza la transmisión del hecho objetivo, mientras la crónica prioriza la vivencia y la interpretación subjetiva.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["estructura", "verdadero_falso"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "En la pirámide invertida, los detalles menos importantes aparecen al principio."

explicacion: |
  Falso. En la pirámide invertida, la información más importante va al principio y los detalles menos relevantes al final.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["cronica", "verdadero_falso"]

variables:
  afirmacion: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "La crónica permite al lector interpretar lo sucedido a través de la descripción y el análisis."

explicacion: |
  Verdadero. La crónica no solo informa, sino que describe y analiza, invitando a la interpretación.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "avanzado"
  tags: ["objetividad", "verdadero_falso"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Es posible lograr una neutralidad absoluta en la noticia, eliminando por completo cualquier sesgo."

explicacion: |
  Falso. Si bien la noticia aspira a la objetividad, es imposible una neutralidad absoluta; se busca presentar hechos contrastables para que el lector forme su opinión.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["identificacion", "noticia"]

variables:
  genero: "noticia"

respuesta: "noticia"
tipo: completar

enunciado: "Un texto que presenta hechos recientes, usa pirámide invertida y busca objetividad es una {genero}."

explicacion: |
  Las características descritas (hechos recientes, pirámide invertida, objetividad) definen a la noticia.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["identificacion", "cronica"]

variables:
  genero: "crónica"

respuesta: "crónica"
tipo: completar

enunciado: "Un texto que narra un evento con detalle sensorial, diálogos y análisis personal es una {genero}."

explicacion: |
  El uso de recursos literarios, descripciones y análisis personal caracteriza a la crónica.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["estructura", "opcion_multiple"]

variables:
  correcta: "pirámide invertida"

respuesta: "pirámide invertida"
tipo: mc
opciones: 3

enunciado: "¿Cuál es la estructura típica de una noticia?"
opciones_explicitas: ["pirámide invertida", "estructura circular", "introducción-desarrollo-conclusión"]

explicacion: |
  La noticia utiliza la pirámide invertida para priorizar la información más importante desde el inicio.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["lenguaje", "opcion_multiple"]

variables:
  correcta: "más subjetivo y literario"

respuesta: "más subjetivo y literario"
tipo: mc
opciones: 3

enunciado: "En comparación con la noticia, el lenguaje de la crónica es:"
opciones_explicitas: ["más subjetivo y literario", "puramente objetivo y técnico", "exclusivamente oral"]

explicacion: |
  La crónica permite la interpretación y usa recursos literarios, haciéndola más subjetiva que la noticia.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["valores", "opcion_multiple"]

variables:
  correcta: "la veracidad"

respuesta: "la veracidad"
tipo: mc
opciones: 3

enunciado: "¿Cuál es el valor supremo en la construcción de una noticia?"
opciones_explicitas: ["la veracidad", "la velocidad", "la originalidad"]

explicacion: |
  La veracidad es fundamental; los datos deben ser contrastables y verificables.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "avanzado"
  tags: ["clasificacion", "opcion_multiple"]

variables:
  correcta: "la conversación cotidiana"

respuesta: "la conversación cotidiana"
tipo: mc
opciones: 3

enunciado: "Según la lingüística, ¿cuál es un ejemplo de género primario?"
opciones_explicitas: ["la conversación cotidiana", "la noticia", "la crónica"]

explicacion: |
  La conversación cotidiana es un género primario, espontáneo, a diferencia de los géneros periodísticos que son secundarios.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["estructura", "completar"]

variables:
  elementos: "qué, quién, cuándo, dónde, cómo y por qué"

respuesta: "qué, quién, cuándo, dónde, cómo y por qué"
tipo: completar

enunciado: "La pirámide invertida responde a los elementos: {elementos}."

explicacion: |
  Estos seis elementos constituyen la información esencial que debe aparecer al inicio de la noticia.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["funcion", "completar"]

variables:
  funcion: "interpretar"

respuesta: "interpretar"
tipo: completar

enunciado: "La crónica no solo informa, sino que también describe, analiza y {funcion} lo sucedido."

explicacion: |
  La interpretación es una función clave de la crónica, diferenciándola de la mera transmisión de datos.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["verdad", "completar"]

variables:
  relacion: "datos contrastables"

respuesta: "datos contrastables"
tipo: completar

enunciado: "La noticia aspira a presentar los hechos para que el lector forme su opinión basándose en {relacion}, no en impresiones."

explicacion: |
  La base de la objetividad periodística son los datos que pueden ser verificados o contrastados.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["tiempo", "completar"]

variables:
  tiempo: "el tiempo necesario"

respuesta: "el tiempo necesario"
tipo: completar

enunciado: "A diferencia de la prisa de la noticia, la crónica se toma {tiempo} para narrar con profundidad."

explicacion: |
  La crónica no está sujeta a la inmediatez extrema, permitiendo un análisis más pausado y detallado.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "avanzado"
  tags: ["recursos", "completar"]

variables:
  recursos: "recursos literarios"

respuesta: "recursos literarios"
tipo: completar

enunciado: "La crónica utiliza {recursos} como metáforas y descripciones detalladas."

explicacion: |
  El uso de recursos literarios es una característica distintiva que enriquece la narrativa de la crónica.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "basico"
  tags: ["objetivo", "completar"]

variables:
  objetivo: "dar a conocer un hecho"

respuesta: "dar a conocer un hecho"
tipo: completar

enunciado: "El objetivo de la noticia es {objetivo} de interés público."

explicacion: |
  La noticia busca informar sobre hechos relevantes de manera rápida y clara.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["subjetividad", "completar"]

variables:
  contraste: "la subjetividad de la opinión"

respuesta: "la subjetividad de la opinión"
tipo: completar

enunciado: "Entender los géneros ayuda a no confundir la objetividad de los datos con {contraste}."

explicacion: |
  La distinción entre datos objetivos y opiniones subjetivas es clave para el pensamiento crítico.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "avanzado"
  tags: ["aprendizaje", "completar"]

variables:
  aprendizaje: "un aprendizaje formal"

respuesta: "un aprendizaje formal"
tipo: completar

enunciado: "Los géneros periodísticos requieren {aprendizaje} y una intención comunicativa clara."

explicacion: |
  Al ser géneros secundarios, su dominio requiere estudio y práctica formal, a diferencia del habla cotidiana.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["rol_periodista", "completar"]

variables:
  rol: "desaparecer detrás de los hechos"

respuesta: "desaparecer detrás de los hechos"
tipo: completar

enunciado: "En la noticia, el periodista intenta {rol} para mantener la objetividad."

explicacion: |
  La objetividad implica que el periodista no imponga su voz personal, sino que deje hablar a los hechos.
```

```
metadata:
  materia: "Lengua"
  tema: "generos_periodisticos"
  nivel: "intermedio"
  tags: ["lectura_critica", "completar"]

variables:
  autonomia: "mayor autonomía"

respuesta: "mayor autonomía"
tipo: completar

enunciado: "Entender esta clasificación nos ayuda a leer los medios con {autonomia}."

explicacion: |
  El conocimiento de los géneros periodísticos fomenta una lectura crítica y autónoma de los medios.
```
