# Examen jefe — [PENDIENTE #665]

> Logro #665. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

---

## Sección: subordinada-sustantiva-de-complemento-de-un-adjetivo (36 preguntas)

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "basico"
  tags: ["subordinada", "adjetivo", "preposicion"]

variables:
  adj: uno_de(["seguro", "consciente", "orgulloso", "temeroso"])

respuesta: "de"

tipo: input

enunciado: "En la oración 'Estoy {adj} de que llueva', ¿cuál es la preposición que introduce la subordinada sustantiva que complementa al adjetivo?"

explicacion: |
  El adjetivo {adj} requiere la preposición 'de' para introducir la oración subordinada sustantiva que completa su significado.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "basico"
  tags: ["funcion_sintactica", "complemento"]

variables:
  adj: uno_de(["contento", "triste", "alegre"])

respuesta: "complemento del adjetivo"

tipo: completar

respuestas_validas:
  - "complemento del adjetivo"
  - "complemento adjetival"
  - "complemento del adjetivo"

enunciado: "En 'Estoy {adj} de que ganes', la oración 'que ganes' funciona como:"

explicacion: |
  La subordinada sustantiva actúa como complemento del adjetivo 'contento', completando su significado.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["conjuncion", "que"]

variables:
  sujeto: uno_de(["Ella", "Ellos", "Nosotros"])
  adj: uno_de(["seguro", "convencido"])

respuesta: "que"

tipo: input

enunciado: "En la estructura '{sujeto} está {adj} [___] llueva', ¿qué conjunción introduce la subordinada sustantiva?"

explicacion: |
  La conjunción 'que' es el nexo más común para introducir oraciones subordinadas sustantivas completas tras un adjetivo.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "basico"
  tags: ["preposicion", "orgulloso"]

variables:
  val: random(0, 1)

respuesta: "de"

tipo: input

enunciado: "En 'Estoy orgulloso ___ de mis logros', ¿qué preposición falta?"

explicacion: |
  La preposición 'de' es obligatoria: 'orgulloso de que...' o 'orgulloso de mis logros'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["vf", "registro_formal"]

variables:
  adj: uno_de(["seguro", "consciente"])
  prep: uno_de(["de", "de"])

respuesta: falso

enunciado: "Es gramaticalmente correcto en un registro formal decir 'Estoy {adj} que vendrás' sin la preposición '{prep}'."

explicacion: |
  Falso. En el registro formal, la preposición es obligatoria cuando el adjetivo la exige. Decir "Estoy seguro que vendrás" es considerado incorrecto o propio del lenguaje coloquial; la forma correcta es "Estoy seguro de que vendrás".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["vf", "infinitivo"]

variables:
  adj: uno_de(["fácil", "difícil", "imposible"])

respuesta: verdadero

enunciado: "Es posible que la subordinada sustantiva de complemento de un adjetivo esté introducida por un infinitivo (ej. 'Es fácil de entender')."

explicacion: |
  Verdadero. Aunque menos común en la estructura con 'que', los adjetivos pueden regir subordinadas infinitivas. En 'Es fácil de entender', "entender" funciona como complemento del adjetivo "fácil".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["vf", "semantica"]

variables:
  adj: uno_de(["contento", "seguro"])

respuesta: verdadero

enunciado: "Sin la subordinada de complemento, el adjetivo '{adj}' puede quedar incompleto o ambiguo en su significado."

explicacion: |
  Verdadero. Decir "Estoy contento" es vago. "Estoy contento de que hayas aprobado" especifica la causa. La subordinada aporta precisión semántica.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["vf", "regencia"]

variables:
  adj: uno_de(["seguro", "consciente"])

respuesta: verdadero

enunciado: "El adjetivo '{adj}' rige la preposición que introduce la subordinada sustantiva."

explicacion: |
  Verdadero. Es el adjetivo quien exige la presencia de la preposición y, por ende, de la subordinada que la sigue.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["vf", "obligatoriedad"]

variables:
  adj: uno_de(["seguro", "consciente"])

respuesta: falso

enunciado: "La preposición en la subordinada de complemento de un adjetivo es siempre opcional."

explicacion: |
  Falso. En el registro formal, la preposición es obligatoria cuando el adjetivo la exige. Su omisión puede cambiar el registro o la corrección gramatical.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "basico"
  tags: ["funcion", "basico"]

variables:
  adj: uno_de(["alegre", "contento", "conforme"])
  prep: "de"

respuesta: "complemento del adjetivo"
tipo: input

enunciado: "En la estructura 'Estoy {adj} {prep} que...', la oración subordinada sustantiva cumple la función de:"

explicacion: |
  La subordinada sustantiva funciona como complemento del adjetivo, ya que este necesita ese complemento para tener un significado completo.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "basico"
  tags: ["reglas", "basico"]

respuesta: falso
tipo: vf

enunciado: "Es correcto decir 'Estoy seguro que vendrás' en un registro formal culto, omitiendo la preposición."

explicacion: |
  Falso. En registro formal, la preposición es obligatoria: 'Estoy seguro DE que vendrás'. Omitirla (queísmo) puede considerarse incorrecto o coloquial.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["preposicion", "intermedio"]

variables:
  adj: uno_de(["cansado", "harto", "fastidiado"])

respuesta: "de"
tipo: input

enunciado: "Completa: 'Los vecinos están {adj} que el perro ladre toda la noche.' ¿Qué preposición falta?"

explicacion: |
  Los adjetivos de estado o sentimiento como 'cansado', 'harto' o 'fastidiado' suelen regir la preposición 'de' cuando van seguidos de una subordinada.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["analisis", "intermedio"]

respuesta: "temeroso"
tipo: mc
opciones_explicitas: ["temeroso", "que", "del", "accidente"]

enunciado: "En la oración 'Estoy temeroso de que haya un accidente', ¿cuál es el adjetivo que rige la subordinada?"

explicacion: |
  El adjetivo es 'temeroso'. Es él quien exige la preposición 'de' y la oración subordinada para completar su significado.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["clasificacion", "intermedio"]

respuesta: "sustantiva"
tipo: completar
respuestas_validas:
  - "sustantiva"
  - "Sustantiva"

enunciado: "La oración 'Estoy convencido de que ganaremos' es una subordinada de tipo __________."

explicacion: |
  Es una oración subordinada sustantiva porque funciona como un sustantivo (complemento del adjetivo) y no como un adjetivo o adverbio.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["diferenciacion", "intermedio"]

respuesta: "complemento del adjetivo"
tipo: mc
opciones_explicitas: ["sujeto", "complemento directo", "complemento del adjetivo", "complemento circunstancial"]

enunciado: "En 'Estoy alegre de que estés bien', la subordinada 'de que estés bien' es:"

explicacion: |
  'De que estés bien' completa al adjetivo 'alegre', indicando la causa de la alegría: es complemento del adjetivo.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["preposicion", "intermedio"]

variables:
  adj: uno_de(["orgulloso", "orgullosa"])
  prep: "de"

respuesta: "de"
tipo: input

enunciado: "Completa: 'Estoy {adj} de que mi equipo haya ganado.' ¿Qué preposición se usa con 'orgulloso'?"

explicacion: |
  El adjetivo 'orgulloso' rige la preposición 'de' para introducir la causa o motivo del orgullo.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "basico"
  tags: ["teoria", "basico"]

respuesta: verdadero
tipo: vf

enunciado: "La subordinada sustantiva de complemento de un adjetivo puede estar introducida por un infinitivo."

explicacion: |
  Verdadero. Ejemplo: 'Estoy dispuesto a ayudarte' — 'a ayudarte' es una subordinada de infinitivo que completa al adjetivo 'dispuesto', igual que 'a que me ayuden' lo haría con 'que' + subjuntivo.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["preposicion", "intermedio"]

respuesta: "de"
tipo: mc
opciones_explicitas: ["a", "de", "en", "por"]

enunciado: "¿Qué preposición rige el adjetivo 'consciente' en 'Estoy consciente de que...'?"

explicacion: |
  El adjetivo 'consciente' rige la preposición 'de'.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["estructura", "intermedio"]

respuesta: "preposición"
tipo: completar
respuestas_validas:
  - "preposición"
  - "preposicion"
  - "PREPOSICIÓN"
  - "PREPOSICION"

enunciado: "El elemento que une al adjetivo con la oración subordinada sustantiva es una __________."

explicacion: |
  La preposición es el puente obligatorio que permite que la oración completa funcione como complemento del adjetivo.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["analisis", "intermedio"]

variables:
  adj: uno_de(["temeroso", "temeroso"])
  prep: "de"

respuesta: adj
tipo: input

enunciado: "En 'Estoy {adj} de que llueva', ¿cuál es el adjetivo que rige la subordinada?"

explicacion: |
  El adjetivo es '{adj}'. Es el núcleo del sintagma adjetival que requiere la subordinada.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "avanzado"
  tags: ["casos_especiales", "avanzado"]

respuesta: "si"
tipo: mc
opciones_explicitas: ["que", "si", "de", "a"]

enunciado: "En la oración 'No estoy seguro si vendrá', ¿qué conjunción introduce la subordinada?"

explicacion: |
  Cuando el adjetivo expresa duda o certeza (como 'seguro'), puede usar 'si' para introducir la subordinada interrogativa indirecta que funciona como complemento.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["funcion", "intermedio"]

respuesta: verdadero
tipo: vf

enunciado: "Sin el complemento del adjetivo, una oración con adjetivos como 'seguro' o 'consciente' puede quedar ambigua o incompleta."

explicacion: |
  Verdadero. 'Estoy seguro' no especifica de qué. 'Estoy seguro de que...' completa el sentido.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "basico"
  tags: ["ejemplos", "basico"]

respuesta: "de"
tipo: completar
respuestas_validas:
  - "de"
  - "De"

enunciado: "Completa: 'Estoy contento __________ que hayas aprobado.'"

explicacion: |
  El adjetivo 'contento' rige la preposición 'de' para indicar la causa de la alegría.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["identificacion", "intermedio"]

respuesta: "de que el vecino haga ruido"
tipo: mc
opciones_explicitas: ["Los vecinos", "cansados", "de que el vecino haga ruido", "a las tres"]

enunciado: "En 'Los vecinos están cansados de que el vecino haga ruido', ¿cuál es la subordinada sustantiva?"

explicacion: |
  La subordinada es 'de que el vecino haga ruido'. Es el complemento del adjetivo 'cansados'.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["preposicion", "intermedio"]

variables:
  adj: uno_de(["orgulloso", "orgullosa"])

respuesta: "de"
tipo: input

enunciado: "En 'Estoy {adj} de que mi hijo haya estudiado', ¿qué preposición falta?"

explicacion: |
  El adjetivo 'orgulloso' rige la preposición 'de'.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["registro", "intermedio"]

respuesta: verdadero
tipo: vf

enunciado: "La omisión de la preposición en 'Estoy seguro que...' es aceptable en todos los registros lingüísticos formales."

explicacion: |
  Falso. En registros formales, la preposición es obligatoria. Su omisión es propia del lenguaje coloquial.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "avanzado"
  tags: ["preposicion", "avanzado"]

respuesta: "por"
tipo: mc
opciones_explicitas: ["de", "por", "a", "en"]

enunciado: "¿Qué preposición rige el adjetivo 'preocupado' en 'Estoy preocupado por que llegues bien'?"

explicacion: |
  El adjetivo 'preocupado' rige la preposición 'por' para indicar la causa de la preocupación.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["teoria", "intermedio"]

respuesta: "complemento"
tipo: completar
respuestas_validas:
  - "complemento"
  - "Complemento"

enunciado: "La subordinada sustantiva funciona como un __________ del adjetivo."

explicacion: |
  Funciona como complemento, ya que completa el significado del adjetivo.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["analisis", "intermedio"]

variables:
  adj: uno_de(["temeroso", "temeroso"])
  prep: "de"

respuesta: adj
tipo: input

enunciado: "En 'Estoy {adj} de que...', ¿cuál es el adjetivo?"

explicacion: |
  El adjetivo es '{adj}'.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["preposicion", "intermedio"]

respuesta: "a"
tipo: mc
opciones_explicitas: ["de", "a", "con", "por"]

enunciado: "¿Qué preposición rige 'dispuesto' en 'Estoy dispuesto a ayudarte'?"

explicacion: |
  El adjetivo 'dispuesto' rige la preposición 'a'.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "avanzado"
  tags: ["estructura", "avanzado"]

respuesta: verdadero
tipo: vf

enunciado: "Una subordinada de complemento de un adjetivo puede estar introducida por un infinitivo."

explicacion: |
  Verdadero. Ejemplo: 'Es bueno para la salud comer verduras' o 'Estoy dispuesto a ayudar'.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "basico"
  tags: ["ejemplos", "basico"]

respuesta: "de"
tipo: completar
respuestas_validas:
  - "de"
  - "De"

enunciado: "Completa: 'Estoy seguro __________ que vendrás.'"

explicacion: |
  El adjetivo 'seguro' rige la preposición 'de'.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["identificacion", "intermedio"]

respuesta: "de"
tipo: mc
opciones_explicitas: ["a", "de", "por", "en"]

enunciado: "En 'Estoy consciente de que...', ¿qué preposición se usa?"

explicacion: |
  El adjetivo 'consciente' rige la preposición 'de'.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["analisis", "intermedio"]

variables:
  adj: uno_de(["contento", "conforme"])
  prep: "de"

respuesta: adj
tipo: input

enunciado: "En 'Estoy {adj} de que todo esté bien', ¿cuál es el adjetivo?"

explicacion: |
  El adjetivo es '{adj}'.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "intermedio"
  tags: ["funcion", "intermedio"]

respuesta: verdadero
tipo: vf

enunciado: "Identificar estas oraciones ayuda a la precisión del lenguaje al evitar ambigüedades."

explicacion: |
  Verdadero. El complemento especifica la causa, contenido u opinión, dando precisión a la idea del adjetivo.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_de_un_adjetivo"
  nivel: "avanzado"
  tags: ["diferenciacion", "avanzado"]

respuesta: "complemento del adjetivo"
tipo: mc
opciones_explicitas: ["complemento del verbo", "complemento del adjetivo", "complemento del sustantivo", "sujeto"]

enunciado: "En 'Me alegra de que estés bien', si analizamos 'alegra' como adjetivo (en estructura impersonal o similar), la función es:"

explicacion: |
  En contextos donde el adjetivo es el núcleo (ej. 'Estoy alegre de que...'), la función es complemento del adjetivo.
```

## Sección: subordinada-sustantiva-de-complemento-del-nombre (27 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "basico"
  tags: ["identificacion", "complemento_del_nombre"]

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'El profesor celebró la noticia de que aprobamos', la parte 'de que aprobamos' funciona como complemento del nombre 'noticia'."

explicacion: |
  La oración subordinada 'de que aprobamos' completa el significado del sustantivo 'noticia'. Se puede sustituir por 'eso': 'El profesor celebró la noticia de eso'. Por lo tanto, es una subordinada sustantiva de complemento del nombre.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "intermedio"
  tags: ["diferenciacion", "funcion_sintactica"]

respuesta: falso
tipo: vf

enunciado: "En la oración 'Es importante que estudies', la parte 'que estudies' es el complemento del nombre del adjetivo 'importante'."

explicacion: |
  En 'Es importante que estudies', la subordinada funciona como sujeto de la oración impersonal (o sujeto real de 'es importante'). No completa a un nombre, sino que ocupa la posición del sujeto. No se puede decir 'Es importante de eso' de la misma manera que se completa un nombre.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "basico"
  tags: ["preposicion", "estructura"]

respuesta: "de"
tipo: completar

enunciado: "En la frase 'Tengo miedo de que vengan', ¿cuál es la preposición que introduce la subordinada sustantiva de complemento del nombre?"

explicacion: |
  La preposición 'de' enlaza el sustantivo 'miedo' con la oración subordinada 'que vengan'. Esta construcción es típica de sustantivos que requieren una preposición para ser completados por una oración (miedo de, duda de, idea de, etc.).
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "intermedio"
  tags: ["analisis", "esperanza"]

respuesta: verdadero
tipo: vf

enunciado: "En 'Guardamos la esperanza de que todo salga bien', la subordinada 'de que todo salga bien' es el complemento del nombre 'esperanza'."

explicacion: |
  Correcto. El sustantivo 'esperanza' necesita información adicional sobre su contenido. La oración 'de que todo salga bien' cumple esa función. Se puede probar con 'Guardamos la esperanza de eso'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "intermedio"
  tags: ["confusion", "objeto_directo"]

respuesta: falso
tipo: vf

enunciado: "En 'Quiero que vengas', la subordinada 'que vengas' es un complemento del nombre del verbo 'quiero'."

explicacion: |
  'Quiero' es un verbo, no un nombre. La subordinada 'que vengas' funciona como Objeto Directo del verbo 'quiero'. El complemento del nombre solo se da cuando la subordinada depende de un sustantivo (o adjetivo/pronombre nominalizado).
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "basico"
  tags: ["identificacion", "duda"]

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Surgió la duda de si lo haría', la parte 'de si lo haría' es una subordinada sustantiva de complemento del nombre."

explicacion: |
  Sí, porque completa al sustantivo 'duda'. La preposición 'de' introduce la subordinada, y esta funciona como un complemento necesario para definir el contenido de la 'duda'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "basico"
  tags: ["sustitucion", "algo"]

respuesta: verdadero
tipo: vf

enunciado: "Podemos sustituir la subordinada 'de que ganes' en 'El deseo de que ganes es grande' por 'de algo' para comprobar su función."

explicacion: |
  Sí. 'El deseo de algo es grande' es una oración gramaticalmente correcta. Esta prueba confirma que la subordinada original actúa como complemento del nombre 'deseo'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "intermedio"
  tags: ["analisis", "noticia"]

respuesta: verdadero
tipo: vf

enunciado: "En 'Recibimos la noticia de que cierran la calle', la subordinada 'de que cierran la calle' es el complemento del nombre 'noticia'."

explicacion: |
  Correcto. El sustantivo 'noticia' es incompleto sin especificar el contenido. La oración subordinada introducida por 'de que' proporciona esa información y funciona como complemento nominal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "basico"
  tags: ["conjuncion", "que"]

respuesta: "que"
tipo: completar

enunciado: "En la frase 'El miedo de que haya fuego', ¿qué conjunción introduce la subordinada?"

explicacion: |
  La conjunción 'que' introduce la oración subordinada sustantiva 'que haya fuego', la cual completa al sustantivo 'miedo' a través de la preposición 'de'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "avanzado"
  tags: ["diferenciacion", "atributo"]

respuesta: falso
tipo: vf

enunciado: "En 'Es cierto que lo hiciste', la subordinada 'que lo hiciste' es el complemento del nombre del adjetivo 'cierto'."

explicacion: |
  No. En oraciones con verbo copulativo o impersonal como 'es', la subordinada suele funcionar como Sujeto (Sujeto oracional). 'Que lo hiciste' es lo que es cierto. No completa a un nombre dentro de un sintagma nominal, sino que es el sujeto de la oración principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "intermedio"
  tags: ["analisis", "posibilidad"]

respuesta: verdadero
tipo: vf

enunciado: "En 'Existe la posibilidad de que llueva mañana', la parte 'de que llueva mañana' es el complemento del nombre 'posibilidad'."

explicacion: |
  Sí. El sustantivo 'posibilidad' requiere un complemento para especificar en qué consiste esa posibilidad. La subordinada 'de que llueva mañana' cumple esa función sintáctica.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "basico"
  tags: ["identificacion", "idea"]

respuesta: verdadero
tipo: vf

enunciado: "En 'Tengo la idea de que nos vamos a mudar', la subordinada 'de que nos vamos a mudar' es el complemento del nombre 'idea'."

explicacion: |
  Correcto. La 'idea' se define por su contenido, que es la oración subordinada. Se puede sustituir por 'Tengo la idea de eso', manteniendo la gramaticalidad.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "intermedio"
  tags: ["confusion", "complemento_verbo"]

respuesta: falso
tipo: vf

enunciado: "En 'Dijo que vendría', la subordinada 'que vendría' es el complemento del nombre del verbo 'dijo'."

explicacion: |
  Incorrecto. 'Dijo' es un verbo. La subordinada funciona como Objeto Directo del verbo 'dijo'. El complemento del nombre solo se aplica a sustantivos, adjetivos o pronombres nominalizados.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "intermedio"
  tags: ["analisis", "temor"]

respuesta: verdadero
tipo: vf

enunciado: "En 'Siente temor a que lo descubran', la parte 'a que lo descubran' es el complemento del nombre 'temor'."

explicacion: |
  Sí. El sustantivo 'temor' se complementa con la preposición 'a' (o 'de') seguida de una subordinada. La oración 'a que lo descubran' completa el significado del nombre.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "basico"
  tags: ["identificacion", "certeza"]

respuesta: verdadero
tipo: vf

enunciado: "En 'Hay certeza de que ganará', la subordinada 'de que ganará' es el complemento del nombre 'certeza'."

explicacion: |
  Correcto. El sustantivo 'certeza' necesita especificar sobre qué hay certeza. La subordinada 'de que ganará' cumple esa función de complemento nominal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "basico"
  tags: ["sustitucion", "razon"]

respuesta: verdadero
tipo: vf

enunciado: "En 'La razón de que haya retraso es clara', podemos sustituir la subordinada por 'eso' para probar su función."

explicacion: |
  Sí. 'La razón de eso es clara' es gramatical. Esto confirma que 'de que haya retraso' es un complemento del nombre 'razón'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "intermedio"
  tags: ["analisis", "convencimiento"]

respuesta: verdadero
tipo: vf

enunciado: "En 'Tiene el convencimiento de que es justo', la subordinada 'de que es justo' es el complemento del nombre 'convencimiento'."

explicacion: |
  Sí. El sustantivo 'convencimiento' se completa con la información de qué se cree. La subordinada 'de que es justo' actúa como complemento nominal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "basico"
  tags: ["identificacion", "necesidad"]

respuesta: verdadero
tipo: vf

enunciado: "En 'Existe la necesidad de que se actúe ya', la parte 'de que se actúe ya' es el complemento del nombre 'necesidad'."

explicacion: |
  Correcto. El sustantivo 'necesidad' requiere un complemento para especificar qué es necesario. La subordinada 'de que se actúe ya' cumple esa función.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "avanzado"
  tags: ["confusion", "complemento_adjetivo"]

respuesta: falso
tipo: vf

enunciado: "En 'Estoy seguro de que vendrás', la subordinada 'de que vendrás' es el complemento del nombre del adjetivo 'seguro'."

explicacion: |
  No. El adjetivo 'seguro' no es un nombre. La subordinada funciona como Complemento del Adjetivo (o Complemento del Agente en pasivas, pero aquí es C. Adj.). El tema es específicamente 'complemento del NOMBRE'. Aunque estructuralmente similar, la categoría gramatical del núcleo es diferente.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "intermedio"
  tags: ["analisis", "obligacion"]

respuesta: verdadero
tipo: vf

enunciado: "En 'Hay la obligación de que se pague', la subordinada 'de que se pague' es el complemento del nombre 'obligación'."

explicacion: |
  Sí. El sustantivo 'obligación' se completa con la especificación de qué debe hacerse. La subordinada 'de que se pague' actúa como complemento nominal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "basico"
  tags: ["identificacion", "sorpresa"]

respuesta: verdadero
tipo: vf

enunciado: "En 'Me causó sorpresa de que lo hiciera', la parte 'de que lo hiciera' es el complemento del nombre 'sorpresa'."

explicacion: |
  Correcto. El sustantivo 'sorpresa' se complementa con la causa o el contenido de la misma. La subordinada 'de que lo hiciera' cumple esa función.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "basico"
  tags: ["sustitucion", "esperanza"]

respuesta: verdadero
tipo: vf

enunciado: "En 'Guardamos la esperanza de que todo salga bien', podemos sustituir la subordinada por 'de algo'."

explicacion: |
  Sí. 'Guardamos la esperanza de algo' es gramatical. Esto confirma que la subordinada original es un complemento del nombre 'esperanza'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "basico"
  tags: ["identificacion", "certeza"]

respuesta: verdadero
tipo: vf

enunciado: "En 'Hay certeza de que ganará', la subordinada 'de que ganará' es el complemento del nombre 'certeza'."

explicacion: |
  Correcto. El sustantivo 'certeza' necesita especificar sobre qué hay certeza. La subordinada 'de que ganará' cumple esa función de complemento nominal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "basico"
  tags: ["identificacion", "posibilidad"]

respuesta: verdadero
tipo: vf

enunciado: "En 'Existe la posibilidad de que llueva mañana', la parte 'de que llueva mañana' es el complemento del nombre 'posibilidad'."

explicacion: |
  Sí. El sustantivo 'posibilidad' requiere un complemento para especificar en qué consiste esa posibilidad. La subordinada 'de que llueva mañana' cumple esa función sintáctica.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "basico"
  tags: ["identificacion", "idea"]

respuesta: verdadero
tipo: vf

enunciado: "En 'Tengo la idea de que nos vamos a mudar', la subordinada 'de que nos vamos a mudar' es el complemento del nombre 'idea'."

explicacion: |
  Correcto. La 'idea' se define por su contenido, que es la oración subordinada. Se puede sustituir por 'Tengo la idea de eso', manteniendo la gramaticalidad.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "basico"
  tags: ["identificacion", "razon"]

respuesta: verdadero
tipo: vf

enunciado: "En 'La razón de que haya retraso es clara', la subordinada 'de que haya retraso' es el complemento del nombre 'razón'."

explicacion: |
  Sí. El sustantivo 'razón' necesita especificar la causa. La subordinada 'de que haya retraso' cumple esa función. Se puede sustituir por 'La razón de eso es clara'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_del_nombre"
  nivel: "basico"
  tags: ["identificacion", "temor"]

respuesta: verdadero
tipo: vf

enunciado: "En 'Siente temor a que lo descubran', la parte 'a que lo descubran' es el complemento del nombre 'temor'."

explicacion: |
  Sí. El sustantivo 'temor' se complementa con la preposición 'a' (o 'de') seguida de una subordinada. La oración 'a que lo descubran' completa el significado del nombre.
```

## Sección: subordinada-sustantiva-de-complemento-directo (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "basico"
  tags: ["identificacion", "complemento_directo"]

variables:
  sujeto: uno_de(["Juan", "María", "El profesor", "Los alumnos"])
  verbo: uno_de(["dice", "sabe", "cree", "quiere"])
  contenido: uno_de(["que llueva", "que gane el equipo", "que venga tarde", "que sea difícil"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sujeto} {verbo} {contenido}', la parte '{contenido}' funciona como complemento directo."

explicacion: |
  La subordinada introducida por 'que' completa el sentido del verbo principal ('dice', 'sabe', etc.) y responde a la pregunta '¿qué?'. Se puede sustituir por 'lo': '{sujeto} {verbo} lo'.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["diferenciacion", "sujeto"]

variables:
  verbo: uno_de(["es importante", "parece", "resulta", "consta"])
  contenido: uno_de(["que llegues", "que estudies", "que vengas", "que lo hagas"])

respuesta: falso
tipo: vf

enunciado: "En la oración 'Es importante {contenido}', la parte '{contenido}' es el sujeto de la oración."

explicacion: |
  Falso. En construcciones impersonales con 'es importante', la subordinada funciona como sujeto (no hay un sujeto explícito distinto que realice la acción sobre ella). Compará con 'Juan cree que...', donde sí sería CD, porque ahí 'Juan' es el sujeto que ejerce la acción de creer.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "basico"
  tags: ["verbo_rector", "analisis"]

variables:
  sujeto: uno_de(["El gobierno", "La empresa", "Mi madre", "El equipo"])
  accion: uno_de(["anuncia", "promete", "niega", "confirma"])
  hecho: uno_de(["los cambios", "la reunión", "el resultado", "la fecha"])

respuesta: accion
tipo: input

enunciado: "En la oración '{sujeto} {accion} {hecho}', ¿cuál es el verbo principal que rige al complemento directo? Escribí el verbo."

explicacion: |
  El verbo principal es '{accion}'. Es él quien necesita un complemento para completar su significado (¿qué anuncia/promete/niega?). La subordinada (o el sustantivo que la reemplaza) es el objeto de esa acción verbal.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["interrogativa", "indirecta"]

variables:
  sujeto: uno_de(["No sé", "Me pregunto", "Ignoro", "Desconozco"])
  interrogante: uno_de(["dónde está", "quién es", "cuándo llega", "por qué lo hizo"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sujeto} {interrogante}', la parte '{interrogante}' es una subordinada sustantiva de complemento directo."

explicacion: |
  Verdadero. Las oraciones interrogativas indirectas ('dónde está', 'quién es') pueden funcionar como complemento directo de verbos como 'saber', 'preguntar', 'ignorar'. Se puede sustituir por 'lo': '{sujeto} lo'.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["distractor", "adjetiva"]

variables:
  sustantivo: uno_de(["el libro", "la casa", "el amigo", "el día"])
  verbo_rel: uno_de(["leí", "construí", "conocí", "esperé"])
  complemento: uno_de(["ayer", "en el parque", "con mi familia", "por la mañana"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{sustantivo} que {verbo_rel} {complemento}', la parte 'que {verbo_rel}' es una subordinada sustantiva de complemento directo."

explicacion: |
  Falso. 'Que {verbo_rel}' modifica al sustantivo '{sustantivo}', por lo que es una subordinada adjetiva (o de relativo). No funciona como objeto directo de un verbo principal externo, sino que integra el sintagma nominal.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "avanzado"
  tags: ["preposicion", "verbos"]

variables:
  verbo1: uno_de(["piensa", "cree", "sabe", "dice"])
  contenido: uno_de(["que viene", "que lo hizo", "que es tarde", "que gane"])

respuesta: verbo1
tipo: input

enunciado: "De los siguientes verbos, ¿cuál NO exige preposición antes de una subordinada sustantiva de complemento directo típica con 'que'? Opciones: '{verbo1}' o 'acordarse de'. Escribí el verbo correcto."

explicacion: |
  '{verbo1}' es un verbo que rige complemento directo sin preposición (ej. 'Pienso que...'). 'Acordarse' exige 'de'. La pregunta pide el que NO exige preposición.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "basico"
  tags: ["nexo", "que"]

variables:
  sujeto: uno_de(["Yo", "Ellos", "Nosotros", "Tú"])
  verbo: uno_de(["quiero", "necesito", "busco", "espero"])
  accion: uno_de(["que vengas", "que salgas", "que comas", "que duermas"])

respuesta: "que"
tipo: input

enunciado: "En la oración '{sujeto} {verbo} {accion}', ¿cuál es el nexo que introduce la subordinada sustantiva de complemento directo? Escribí la palabra."

explicacion: |
  El nexo es 'que'. Es la conjunción subordinante más común para introducir oraciones sustantivas que funcionan como CD.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["sustitucion", "plural"]

variables:
  sujeto: uno_de(["Ellos", "Nosotros", "Ustedes", "Los chicos"])
  verbo: uno_de(["ven", "dicen", "saben", "quieren"])
  objetos: uno_de(["los libros", "las noticias", "los problemas", "las ideas"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{sujeto} {verbo} {objetos}', si reemplazamos '{objetos}' por un pronombre, la forma correcta es 'lo'."

explicacion: |
  Falso. '{objetos}' es plural (libros, noticias, etc.), por lo que el pronombre de complemento directo debe ser plural: 'los' o 'las', dependiendo del género. 'Lo' es singular.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["comprension", "texto"]

variables:
  persona: uno_de(["El director", "La maestra", "El técnico", "El médico"])
  accion: uno_de(["confirmó", "negó", "sugirió", "recordó"])
  hecho: uno_de(["la reunión", "el error", "la fecha", "el detalle"])

respuesta: accion
tipo: input

enunciado: "En la oración '{persona} {accion} {hecho}', ¿qué verbo es el principal que rige al sustantivo '{hecho}'? Escribí el verbo."

explicacion: |
  El verbo principal es '{accion}'. Es el núcleo del predicado que toma a '{hecho}' como su objeto directo.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["diferenciacion", "adverbial"]

variables:
  sujeto: uno_de(["Ellos", "Nosotros", "El equipo", "La gente"])
  verbo: uno_de(["saben", "dicen", "creen", "ven"])
  tiempo: uno_de(["cuando llegue", "donde está", "por qué lo hizo", "que gane"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{sujeto} {verbo} {tiempo}', si '{tiempo}' es 'cuando llegue', es una subordinada sustantiva de complemento directo."

explicacion: |
  Falso. 'Cuando llegue' es una subordinada adverbial temporal. Las sustantivas responden a 'qué' y pueden reemplazarse por 'lo'. 'Cuándo' introduce tiempo, no un objeto directo.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["verbos", "distractor"]

variables:
  v1: uno_de(["dice", "sabe", "cree", "piensa"])
  v2: uno_de(["está", "parece", "va", "corre"])
  contenido: uno_de(["que viene", "que hace", "que lo sabe", "que gane"])

respuesta: v2
tipo: input

enunciado: "De los verbos '{v1}' y '{v2}', ¿cuál NO puede regir directamente una subordinada sustantiva de complemento directo con 'que' en el sentido de 'informar/opinar'? Escribí el verbo."

explicacion: |
  '{v2}' (como 'está', 'parece', 'va', 'corre') no rige CD con 'que' en el mismo sentido transitivo que 'dice' o 'sabe'. 'Dice que' es CD. 'Va que' no es una estructura estándar de CD.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "basico"
  tags: ["estructura", "nexo"]

variables:
  sujeto: uno_de(["Juan", "María", "Ellos", "Nosotros"])
  verbo: uno_de(["dice", "sabe", "cree", "quiere"])
  contenido: uno_de(["que llueva", "que gane", "que venga", "que sea"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sujeto} {verbo} {contenido}', el nexo 'que' siempre introduce la subordinada de complemento directo."

explicacion: |
  Verdadero. En esta estructura específica, 'que' es el marcador de la subordinada sustantiva que funciona como CD.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "avanzado"
  tags: ["pronominal", "preposicion"]

variables:
  verbo: uno_de(["acordarse", "olvidarse", "quejarse", "arrepentirse"])
  contenido: uno_de(["que lo hizo", "que no vino", "que fue tarde", "que lo dijo"])
  preposicion: "de"

respuesta: preposicion
tipo: input

enunciado: "El verbo '{verbo}' requiere una preposición antes de la subordinada. ¿Cuál es? Escribí la preposición."

explicacion: |
  Los verbos pronominales como 'acordarse', 'olvidarse' exigen la preposición 'de'. Ej: 'Me acuerdo de que lo hizo'.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["sujeto", "analisis"]

variables:
  contenido: uno_de(["que llueva", "que gane el equipo", "que venga Juan", "que sea fácil"])
  verbo: uno_de(["es", "parece", "resulta", "consta"])
  adjetivo: uno_de(["importante", "claro", "evidente", "necesario"])

respuesta: contenido
tipo: input

enunciado: "En la oración '{verbo} {adjetivo} {contenido}', ¿cuál es el sujeto? Escribí la parte que funciona como sujeto."

explicacion: |
  El sujeto es '{contenido}'. En oraciones impersonales con 'es/parece', la subordinada es el sujeto real.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "basico"
  tags: ["identificacion", "mc"]

variables:
  oracion1: uno_de(["Juan dice que viene", "Juan viene mañana", "Juan está feliz", "Juan corre rápido"])
  oracion2: uno_de(["Juan viene mañana", "Juan está feliz", "Juan corre rápido", "Juan es alto"])
  oracion3: uno_de(["Juan está feliz", "Juan corre rápido", "Juan es alto", "Juan duerme"])
  oracion4: uno_de(["Juan corre rápido", "Juan es alto", "Juan duerme", "Juan lee"])

respuesta: oracion1
tipo: mc
opciones_explicitas: [oracion1, oracion2, oracion3, oracion4]

enunciado: "¿Cuál de estas oraciones contiene una subordinada sustantiva de complemento directo?"

explicacion: |
  '{oracion1}' contiene 'que viene', que es CD de 'dice'. Las otras son oraciones simples o con otros complementos.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["complemento_indirecto", "diferenciacion"]

variables:
  sujeto: uno_de(["Le", "Se", "Le dio", "Se lo"])
  objeto: uno_de(["el libro", "la noticia", "el regalo", "el mensaje"])
  destinatario: uno_de(["a Juan", "a María", "a ellos", "a nosotros"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{sujeto} {objeto} {destinatario}', la parte '{destinatario}' es una subordinada sustantiva de complemento directo."

explicacion: |
  Falso. '{destinatario}' es un sintagma preposicional que funciona como Complemento Indirecto (CI), no una subordinada sustantiva.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "basico"
  tags: ["verbos", "opinacion"]

variables:
  verbo: uno_de(["cree", "piensa", "opina", "siente"])
  contenido: uno_de(["que es justo", "que es injusto", "que es correcto", "que es erróneo"])
  sujeto: uno_de(["Ella", "Él", "Nosotros", "Ellos"])

respuesta: verbo
tipo: input

enunciado: "En la oración '{sujeto} {verbo} {contenido}', ¿cuál es el verbo de opinión que rige la subordinada? Escribí el verbo."

explicacion: |
  El verbo de opinión es '{verbo}'. Indica la postura del sujeto respecto a la proposición '{contenido}'.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["sustitucion", "pronombres"]

variables:
  sujeto: uno_de(["Yo", "Tú", "Él", "Ella"])
  verbo: uno_de(["dice", "sabe", "cree", "quiere"])
  contenido: uno_de(["que llueva", "que gane", "que venga", "que sea"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sujeto} {verbo} {contenido}', se puede reemplazar '{contenido}' por 'lo' sin perder la estructura gramatical básica."

explicacion: |
  Verdadero. '{sujeto} {verbo} lo' es la forma correcta de sustituir una subordinada sustantiva de complemento directo singular.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "intermedio"
  tags: ["interrogativa", "nexo"]

variables:
  sujeto: uno_de(["No sé", "Me pregunto", "Ignoro", "Desconozco"])
  interrogante: uno_de(["qué es", "quién es", "dónde está", "cuándo llega"])

respuesta: interrogante
tipo: input

enunciado: "En la oración '{sujeto} {interrogante}', ¿cuál es la parte interrogativa que funciona como CD? Escribí la parte."

explicacion: |
  La parte interrogativa '{interrogante}' funciona como CD. Responde a '¿qué?'.
```

```
metadata:
  materia: "lengua"
  tema: "subordinada_sustantiva_de_complemento_directo"
  nivel: "avanzado"
  tags: ["analisis", "estructura"]

variables:
  sujeto: uno_de(["El gobierno", "La empresa", "Mi madre", "El equipo"])
  verbo: uno_de(["anuncia", "promete", "niega", "confirma"])
  contenido: uno_de(["que hay cambios", "que es tarde", "que lo hizo", "que gane"])

respuesta: verbo
tipo: input

enunciado: "En la oración '{sujeto} {verbo} {contenido}', ¿cuál es el verbo principal que rige a la subordinada? Escribí el verbo."

explicacion: |
  El verbo principal es '{verbo}'. Es el núcleo del predicado que toma a la subordinada como su objeto directo.
```

## Sección: subordinada-sustantiva-de-sujeto (23 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "subordinada_sustantiva", "identificacion"]

variables:
  pares: [["Es necesario que estudies más", "que estudies más"], ["Me alegra que estés aquí", "que estés aquí"]]
  idx: uno_de([0, 1])
  frase: pares[idx][0]

respuesta: pares[idx][1]
tipo: completar

enunciado: "Analizá la siguiente oración: '{frase}'. ¿Cuál es la oración subordinada sustantiva de sujeto?"

explicacion: |
  La subordinada sustantiva de sujeto cumple la función de sujeto del verbo principal (ser/estar/gustar, etc.). En 'Es necesario que estudies más', el sujeto es 'que estudies más'. En 'Me alegra que estés aquí', el sujeto es 'que estés aquí'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "pronombre_neutro"]

variables:
  oracion: "Es cierto que Juan llegó tarde"
  subordinada: "que Juan llegó tarde"

respuesta: "eso"
tipo: input

enunciado: "En la oración '{oracion}', ¿qué pronombre personal o demostrativo neutro podemos usar para reemplazar a la subordinada sustantiva de sujeto '{subordinada}'?"

explicacion: |
  La subordinada 'que Juan llegó tarde' funciona como sujeto. Podemos reemplazarla por el pronombre 'eso' o 'algo'. 'Eso es cierto' mantiene la estructura sintáctica básica.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "conectores"]

variables:
  oracion: "Es importante que descanses"
  conector: "que"

respuesta: "que"
tipo: input

enunciado: "En la oración '{oracion}', ¿qué palabra introduce la subordinada sustantiva de sujeto?"

explicacion: |
  La conjunción 'que' es el conector más habitual para introducir oraciones subordinadas sustantivas de sujeto.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "infinitivo"]

variables:
  oracion: "Es necesario estudiar para aprobar"
  sujeto: "estudiar para aprobar"

respuesta: "estudiar para aprobar"
tipo: input

enunciado: "En la oración '{oracion}', ¿cuál es la oración subordinada sustantiva de sujeto (que puede estar formada por un infinitivo)?"

explicacion: |
  Cuando el sujeto es indeterminado, se usa el infinitivo. 'Estudiar para aprobar' es el sujeto de 'es necesario'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_pronominales"]

variables:
  oracion: "Me sorprende que no hayas llamado"
  sujeto: "que no hayas llamado"

respuesta: "que no hayas llamado"
tipo: input

enunciado: "En la oración '{oracion}', ¿cuál es la subordinada sustantiva de sujeto?"

explicacion: |
  El verbo es 'sorprender' (en forma pronominal 'me sorprende'). La pregunta '¿Qué me sorprende?' da como respuesta 'que no hayas llamado', que es el sujeto.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "identificacion"]

variables:
  oracion: "Es evidente que ganaremos el partido"
  subordinada: "que ganaremos el partido"

respuesta: "que ganaremos el partido"
tipo: input

enunciado: "Identificá la subordinada sustantiva de sujeto en: '{oracion}'"

explicacion: |
  El verbo principal es 'es'. La pregunta '¿Qué es evidente?' responde 'que ganaremos el partido'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "sustitucion"]

variables:
  oracion: "Es bueno que ayudes"
  pronombre: "eso"

respuesta: "eso"
tipo: input

enunciado: "En la oración '{oracion}', ¿qué pronombre puede reemplazar a la subordinada de sujeto para formar una oración impersonal o con sujeto nulo?"

explicacion: |
  'Eso es bueno' o 'Algo es bueno'. El pronombre 'eso' es el más común para referirse a una proposición completa.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "avanzado"
  tags: ["sintaxis", "nucleo"]

variables:
  oracion: "Es un hecho que lo hizo"
  nucleo: "que lo hizo"

respuesta: "que lo hizo"
tipo: input

enunciado: "En la oración '{oracion}', ¿cuál es el núcleo (la proposición completa) de la subordinada sustantiva de sujeto?"

explicacion: |
  El sujeto es la proposición completa 'que lo hizo'. No es una sola palabra.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "verbo_ser"]

variables:
  oracion: "Es una lástima que se vaya"
  subordinada: "que se vaya"

respuesta: "que se vaya"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es una lástima?'. Respuesta: 'que se vaya'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Me gusta que vengas"
  subordinada: "que vengas"

respuesta: "que vengas"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'gustar'. Pregunta '¿Qué gusta?'. Respuesta: 'que vengas'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Me importa que seas honesto"
  subordinada: "que seas honesto"

respuesta: "que seas honesto"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'importar'. Pregunta '¿Qué me importa?'. Respuesta: 'que seas honesto'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Me parece que es tarde"
  subordinada: "que es tarde"

respuesta: "que es tarde"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'parecer'. Pregunta '¿Qué me parece?'. Respuesta: 'que es tarde'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Basta que lo digas"
  subordinada: "que lo digas"

respuesta: "que lo digas"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'bastar'. Pregunta '¿Qué basta?'. Respuesta: 'que lo digas'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Me ocurre que te vi ayer"
  subordinada: "que te vi ayer"

respuesta: "que te vi ayer"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ocurrir' (en sentido de 'venir a la mente'). Pregunta '¿Qué me ocurre?'. Respuesta: 'que te vi ayer'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "avanzado"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Consta que lo hizo él"
  subordinada: "que lo hizo él"

respuesta: "que lo hizo él"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'constar' (en sentido de 'estar demostrado'). Pregunta '¿Qué consta?'. Respuesta: 'que lo hizo él'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Se trata de que ganemos"
  subordinada: "que ganemos"

respuesta: "que ganemos"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'tratar' (en sentido de 'versar sobre'). Pregunta '¿Qué se trata?'. Respuesta: 'que ganemos'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Falta que confirmes tu asistencia"
  subordinada: "que confirmes tu asistencia"

respuesta: "que confirmes tu asistencia"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'faltar' (en sentido de 'quedar pendiente'). Pregunta '¿Qué falta?'. Respuesta: 'que confirmes tu asistencia', que es el sujeto de 'falta'. (Ojo: 'Depende de que vengas' NO es un buen ejemplo de sujeto — 'depender de' rige la preposición 'de' de forma fija, por lo que 'de que vengas' ahí es complemento de régimen, no sujeto.)
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es probable que vengas"
  subordinada: "que vengas"

respuesta: "que vengas"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es probable?'. Respuesta: 'que vengas'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es posible que llueva"
  subordinada: "que llueva"

respuesta: "que llueva"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es posible?'. Respuesta: 'que llueva'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es necesario que descanses"
  subordinada: "que descanses"

respuesta: "que descanses"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es necesario?'. Respuesta: 'que descanses'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es útil que leas"
  subordinada: "que leas"

respuesta: "que leas"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es útil?'. Respuesta: 'que leas'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "intermedio"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es justo que te premien"
  subordinada: "que te premien"

respuesta: "que te premien"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es justo?'. Respuesta: 'que te premien'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_sujeto"
  nivel: "basico"
  tags: ["sintaxis", "verbos_atipicos"]

variables:
  oracion: "Es verdad que lo viste"
  subordinada: "que lo viste"

respuesta: "que lo viste"
tipo: input

enunciado: "En '{oracion}', la subordinada sustantiva de sujeto es:"

explicacion: |
  Verbo 'ser'. Pregunta '¿Qué es verdad?'. Respuesta: 'que lo viste'.
```

## Sección: voz-activa-y-pasiva (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "basico"
  tags: ["voz_activa"]

variables:
  frases: ["Juan compró el pan", "María leyó el libro", "El pan fue comprado por Juan", "El libro fue leído por María"]
  voces: ["activa", "activa", "pasiva", "pasiva"]
  idx: uno_de([0, 1, 2, 3])

respuesta: voces[idx]
tipo: mc
opciones_explicitas: ["activa", "pasiva"]

enunciado: "La oración \"{frases[idx]}\" está en voz..."

pasos:
  - "Si el sujeto realiza la acción, es activa. Si el sujeto la recibe (ser + participio), es pasiva."

explicacion: |
  Voz activa: el sujeto hace la acción. Voz pasiva: el sujeto la
  recibe, con "ser + participio".
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["voz_pasiva", "sujeto"]

variables:
  frases: ["El pan fue comprado por Juan", "La ventana fue rota por el viento", "El examen fue corregido por la profesora"]
  sujetos: ["El pan", "La ventana", "El examen"]
  idx: uno_de([0, 1, 2])

respuesta: sujetos[idx]
tipo: completar

enunciado: "En la oración pasiva \"{frases[idx]}\", ¿cuál es el sujeto?"

pasos:
  - "El sujeto de la pasiva es lo que RECIBE la acción, no quien la realiza."

explicacion: |
  El sujeto de la pasiva es el que antes era el objeto directo de la
  activa correspondiente.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["voz_pasiva", "complemento_agente"]

variables:
  frases: ["El pan fue comprado por Juan", "La ventana fue rota por el viento", "El examen fue corregido por la profesora"]
  agentes: ["por Juan", "por el viento", "por la profesora"]
  idx: uno_de([0, 1, 2])

respuesta: agentes[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el complemento agente?"

pasos:
  - "El complemento agente indica quién realizó la acción y se introduce con \"por\"."

explicacion: |
  El complemento agente equivale al sujeto que tendría la misma
  oración en voz activa.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["transformacion", "activa_a_pasiva"]

variables:
  activas: ["Juan compró el pan", "María leyó el libro", "El chef preparó la cena"]
  pasivas: ["El pan fue comprado por Juan", "El libro fue leído por María", "La cena fue preparada por el chef"]
  idx: uno_de([0, 1, 2])

respuesta: pasivas[idx]
tipo: mc
opciones_explicitas: [pasivas[idx], "Juan fue comprado por el pan", "El pan compró a Juan"]

enunciado: "¿Cuál es la versión en voz pasiva de \"{activas[idx]}\"?"

pasos:
  - "El OD de la activa pasa a sujeto; el sujeto de la activa pasa a complemento agente."

explicacion: |
  El objeto directo de la activa se convierte en sujeto de la
  pasiva, y el sujeto original pasa a complemento agente con "por".
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["transformacion", "pasiva_a_activa"]

variables:
  pasivas: ["El pan fue comprado por Juan", "El libro fue leído por María"]
  activas: ["Juan compró el pan", "María leyó el libro"]
  idx: uno_de([0, 1])

respuesta: activas[idx]
tipo: completar

enunciado: "Reescribí en voz activa: \"{pasivas[idx]}\""

pasos:
  - "El complemento agente pasa a ser sujeto; el sujeto de la pasiva pasa a ser OD."

explicacion: |
  Se invierte la transformación: agente → sujeto, sujeto pasivo → OD.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "basico"
  tags: ["voz_pasiva", "estructura_verbal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La voz pasiva se construye con el verbo \"ser\" conjugado más el participio del verbo principal."

pasos:
  - "\"fue comprado\": \"fue\" (ser) + \"comprado\" (participio de comprar)."

explicacion: |
  Verdadero: ser + participio es la estructura fija de la voz pasiva.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "intransitivos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un verbo sin objeto directo (como \"dormir\" o \"llegar\") no se puede pasivizar."

pasos:
  - "Sin OD no hay nada que convertir en sujeto de la pasiva."

explicacion: |
  Verdadero: la pasiva necesita un OD en la activa para transformarlo
  en sujeto. Los intransitivos no tienen OD.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["voz_pasiva", "complemento_agente"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"El pan fue comprado\" es una oración pasiva válida, aunque no diga quién lo compró."

pasos:
  - "El complemento agente se puede omitir cuando no importa o no se sabe quién hizo la acción."

explicacion: |
  Verdadero: la pasiva sin agente es muy común (típica de noticias:
  \"el edificio fue inaugurado ayer\").
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "basico"
  tags: ["voz_pasiva", "participio"]

variables:
  infinitivos: ["comprar", "romper", "corregir", "escribir"]
  participios: ["comprado", "roto", "corregido", "escrito"]
  idx: uno_de([0, 1, 2, 3])

respuesta: participios[idx]
tipo: completar

enunciado: "El participio del verbo \"{infinitivos[idx]}\" es..."

pasos:
  - "La mayoría termina en -ado/-ido, pero hay participios irregulares (roto, escrito, visto, hecho...)."

explicacion: |
  Algunos participios son irregulares y no siguen la terminación
  regular -ado/-ido.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["voz_activa", "voz_pasiva", "diferenciacion"]

variables:
  frases: ["Ana pintó el cuadro", "El cuadro fue pintado por Ana"]
  voces: ["activa", "pasiva"]
  idx: uno_de([0, 1])

respuesta: voces[idx]
tipo: mc
opciones_explicitas: ["activa", "pasiva"]

enunciado: "\"{frases[idx]}\" está en voz..."

pasos:
  - "Un solo verbo conjugado normal → activa. \"Ser\" + participio → pasiva."

explicacion: |
  El indicio más rápido es la forma del verbo: un verbo simple es
  activa, ser+participio es pasiva.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "uso"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En textos periodísticos es común usar la voz pasiva para poner el foco en el hecho o en quien lo recibe, sin nombrar primero al responsable."

pasos:
  - "\"El puente fue inaugurado ayer\" pone el foco en el puente, no en la autoridad que lo inauguró."

explicacion: |
  Verdadero: la pasiva permite despersonalizar o postergar la
  mención del agente, muy usado en noticias e informes.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["transformacion", "metodo"]

enunciado: "Ordená los pasos para pasar una oración de voz activa a voz pasiva."
tipo: ordenar
opciones_explicitas:
  - "Identificar el objeto directo de la oración activa"
  - "Convertir ese objeto directo en el nuevo sujeto"
  - "Cambiar el verbo a \"ser\" (en el mismo tiempo) + participio"
  - "Convertir el sujeto original en complemento agente con \"por\""
respuesta_orden: ["Identificar el objeto directo de la oración activa", "Convertir ese objeto directo en el nuevo sujeto", "Cambiar el verbo a \"ser\" (en el mismo tiempo) + participio", "Convertir el sujeto original en complemento agente con \"por\""]
explicacion: |
  El orden lógico va del OD (lo que se transforma en sujeto) al
  verbo, y termina con el sujeto original convertido en agente.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "objeto_directo", "relacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El sujeto de una oración pasiva es siempre lo mismo que el objeto directo de la oración activa equivalente."

pasos:
  - "\"El pan\" es OD en \"Juan compró el pan\" y sujeto en \"El pan fue comprado por Juan\"."

explicacion: |
  Verdadero: es exactamente la misma transformación descrita en la
  teoría — OD activo se convierte en sujeto pasivo.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Cualquier oración que use el verbo \"ser\" está en voz pasiva."

pasos:
  - "\"Juan es alto\" usa \"ser\" pero no tiene participio ni describe una acción recibida: es un predicado nominal, no una pasiva."

explicacion: |
  Falso: la pasiva necesita específicamente \"ser + participio\" de
  un verbo de acción, no cualquier uso de \"ser\".
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "tiempo_verbal"]

variables:
  activas: ["Juan compra el pan", "Juan compró el pan"]
  pasivas: ["El pan es comprado por Juan", "El pan fue comprado por Juan"]
  idx: uno_de([0, 1])

respuesta: pasivas[idx]
tipo: completar

enunciado: "Pasá a voz pasiva manteniendo el mismo tiempo verbal: \"{activas[idx]}\""

pasos:
  - "Presente activa → \"es\" + participio. Pretérito activa → \"fue\" + participio."

explicacion: |
  El tiempo del verbo \"ser\" en la pasiva coincide con el tiempo del
  verbo original en la activa.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["complemento_agente", "circunstancial", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El complemento agente (\"por Juan\") es lo mismo que un circunstancial de causa."

pasos:
  - "El complemento agente sólo aparece en oraciones pasivas y equivale al sujeto de la activa, no responde \"¿por qué?\" como una causa."

explicacion: |
  Falso: aunque ambos usan \"por\", el complemento agente identifica
  quién REALIZA la acción en una pasiva; el CC de causa explica el
  motivo de la acción.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["transformacion", "practica"]

variables:
  activas: ["El profesor explicó la lección", "Los alumnos entregaron el trabajo", "La empresa contrató al ingeniero"]
  pasivas: ["La lección fue explicada por el profesor", "El trabajo fue entregado por los alumnos", "El ingeniero fue contratado por la empresa"]
  idx: uno_de([0, 1, 2])

respuesta: pasivas[idx]
tipo: completar

enunciado: "Pasá a voz pasiva: \"{activas[idx]}\""

pasos:
  - "OD → sujeto, verbo → ser+participio, sujeto → complemento agente."

explicacion: |
  Se aplica el mismo procedimiento sin importar el sujeto/OD
  concretos de la oración.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "concordancia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuando el objeto directo de la activa es plural, el verbo \"ser\" de la pasiva también debe concordar en plural."

pasos:
  - "\"Compró los panes\" (OD plural) → \"Los panes fueron comprados\" (ser en plural)."

explicacion: |
  Verdadero: el verbo \"ser\" concuerda en número y persona con el
  nuevo sujeto (el antiguo OD).
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_activa", "voz_pasiva", "significado"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Juan compró el pan\" y \"El pan fue comprado por Juan\" describen el mismo hecho, sólo cambia qué elemento se destaca primero."

pasos:
  - "El sujeto/agente y el OD/sujeto pasivo son las mismas personas y cosas en ambas versiones."

explicacion: |
  Verdadero: activa y pasiva son formas alternativas de contar el
  mismo evento, con distinto foco (quién actúa vs. qué se recibe).
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_activa", "voz_pasiva", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si se quiere poner el foco en el resultado (\"el puente\") y no en quién lo construyó, conviene usar la voz pasiva."

pasos:
  - "\"El puente fue construido en 1990\" destaca el puente; \"La empresa construyó el puente en 1990\" destaca a la empresa."

explicacion: |
  Verdadero: elegir activa o pasiva es una decisión de estilo según
  qué elemento se quiere destacar primero en la oración.
```

