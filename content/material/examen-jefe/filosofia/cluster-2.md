# Examen jefe — Explorador de la Ética y la Existencia

> Logro #952. Dominaste la existencia, el contractualismo, la deontología, la ética de la virtud y la historia de la filosofía y sus corrientes. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **99 preguntas totales** en 5/5 secciones.

---

## Sección: existencia (20 preguntas)

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "intermedio"
  tags: ["existencia", "ser_ontologia", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Mientras la ontología pregunta qué significa \"ser\" en general, la existencia pregunta específicamente qué significa que ALGO PARTICULAR exista."

pasos:
  - "Ver `../ser-ontologia/`: es una pregunta más específica que la pregunta general del ser."

explicacion: |
  Verdadero: es la diferencia central entre estos dos temas hermanos.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["paradoja_negacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para decir \"los unicornios no existen\", parece que primero hay que pensar en los unicornios (tener la idea) para poder negar su existencia — una paradoja clásica de la filosofía de la existencia."

pasos:
  - "¿Cómo se puede hablar significativamente de algo que, según la propia afirmación, no existe?"

explicacion: |
  Verdadero: es un problema filosófico clásico sobre el lenguaje y la
  negación de existencia.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["kant", "existencia_como_predicado"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Kant argumentó que \"existir\" no es una propiedad más de una cosa, como \"ser rojo\" o \"pesar 5 kilos\", sino un tipo distinto de afirmación."

pasos:
  - "Decir \"el perro existe\" no agrega una característica al concepto de perro, a diferencia de \"el perro es marrón\"."

explicacion: |
  Verdadero: es el argumento central de Kant sobre la existencia
  como predicado.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["kant", "argumento_ontologico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El argumento de Kant sobre la existencia se usó históricamente para criticar el \"argumento ontológico\" que intentaba deducir la existencia de Dios sólo a partir de su definición."

pasos:
  - "Si existir no es una propiedad que se pueda incluir en una definición, no se puede deducir la existencia de algo únicamente definiéndolo."

explicacion: |
  Verdadero: es la aplicación histórica más famosa de este argumento
  filosófico.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "intermedio"
  tags: ["existencia_posible", "existencia_real"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un unicornio es un concepto coherente (podría existir), aunque no exista de hecho; un cuadrado redondo ni siquiera podría existir, porque es contradictorio en sí mismo."

pasos:
  - "La coherencia interna de un concepto es distinta de que ese concepto corresponda a algo real."

explicacion: |
  Verdadero: es la distinción entre existencia posible (coherente
  pero no real) y existencia real (efectivamente en el mundo).
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "intermedio"
  tags: ["existencia_posible", "existencia_real"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que un concepto sea coherente (sin contradicción interna) no garantiza que corresponda a algo que efectivamente existe en el mundo."

pasos:
  - "El unicornio es coherente pero no real; un cuadrado redondo no es ni siquiera coherente."

explicacion: |
  Verdadero: coherencia conceptual y existencia real son dos cosas
  distintas.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "intermedio"
  tags: ["existencia_posible", "contradiccion"]

variables:
  n: uno_de([1, 1])

respuesta: "un cuadrado redondo"
tipo: mc
opciones_explicitas: ["un cuadrado redondo", "un unicornio", "un dragón que escupe fuego"]

enunciado: "¿Cuál de estos conceptos es contradictorio en sí mismo (no podría existir ni siquiera como posibilidad)?"

pasos:
  - "Un cuadrado y un círculo son formas mutuamente excluyentes por definición; los otros dos son coherentes aunque no existan de hecho."

explicacion: |
  Un \"cuadrado redondo\" combina dos propiedades incompatibles por
  definición, a diferencia de un unicornio o un dragón, que son
  coherentes aunque ficticios.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["presentismo"]

variables:
  n: uno_de([1, 1])

respuesta: "presentismo"
tipo: mc
opciones_explicitas: ["presentismo", "eternalismo"]

enunciado: "La postura filosófica que sostiene que sólo existe lo presente (el pasado ya no existe, el futuro todavía no) se llama..."

pasos:
  - "Es una de las dos posturas mencionadas sobre existencia y tiempo."

explicacion: |
  El presentismo restringe la existencia real al momento presente.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["eternalismo"]

variables:
  n: uno_de([1, 1])

respuesta: "eternalismo"
tipo: mc
opciones_explicitas: ["presentismo", "eternalismo"]

enunciado: "La postura filosófica que sostiene que pasado, presente y futuro existen todos por igual se llama..."

pasos:
  - "Es la postura opuesta al presentismo respecto de la existencia en el tiempo."

explicacion: |
  El eternalismo no privilegia el presente por sobre el pasado o el
  futuro en cuanto a existencia.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["presentismo", "eternalismo", "neutralidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Presentismo y eternalismo son dos posturas filosóficas distintas sobre existencia y tiempo, sin que ninguna sea \"la correcta\" de forma objetiva y consensuada."

pasos:
  - "Mismo criterio de neutralidad ya aplicado a racionalismo/empirismo en `../epistemologia/`."

explicacion: |
  Verdadero: se describe qué sostiene cada postura, sin evaluar cuál
  es correcta.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["kant", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Según el argumento de Kant, se puede probar que algo existe realmente en el mundo con sólo dar una buena definición de ese algo."

pasos:
  - "Kant sostuvo justamente lo contrario: existir no es una propiedad que se pueda deducir sólo de una definición."

explicacion: |
  Falso: es el error que Kant identificó en el argumento ontológico
  de la existencia de Dios.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "intermedio"
  tags: ["existencia_posible"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un unicornio es un concepto coherente (caballo + cuerno, sin contradicción interna), aunque no exista de hecho en el mundo real."

pasos:
  - "Coherencia conceptual no implica existencia real, pero tampoco la excluye de plano."

explicacion: |
  Verdadero: es el ejemplo clásico de \"existencia posible\" sin
  \"existencia real\".
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["kant", "existencia_como_predicado"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"El perro es marrón\" agrega una característica al concepto de perro; \"el perro existe\" no agrega una característica, sino que afirma que ese concepto se aplica a algo real."

pasos:
  - "Es exactamente la distinción que hace Kant sobre existencia como predicado."

explicacion: |
  Verdadero: es la formulación práctica del argumento kantiano sobre
  la existencia.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["existencia_y_tiempo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una pregunta relacionada con la existencia es si algo que existió en el pasado (un dinosaurio) \"existe\" en el mismo sentido que algo que existe ahora."

pasos:
  - "Presentismo y eternalismo son dos respuestas distintas a esta pregunta."

explicacion: |
  Verdadero: es una extensión natural de la pregunta sobre existencia
  aplicada a la dimensión temporal.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["existencia", "ser_ontologia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ontología (ser) pregunta por lo más general posible; la existencia baja un nivel de abstracción y pregunta específicamente por elementos particulares."

pasos:
  - "Es la relación de generalidad/especificidad entre estos dos temas hermanos."

explicacion: |
  Verdadero: existencia es una pregunta más acotada que la pregunta
  general del ser.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["argumento_ontologico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El \"argumento ontológico\" de la existencia de Dios intentaba deducir que Dios existe realmente sólo a partir de su definición como \"el ser más perfecto posible\"."

pasos:
  - "Kant criticó precisamente esa deducción, mostrando que existir no es una propiedad que se pueda incluir en una definición."

explicacion: |
  Verdadero: es el contexto histórico concreto que originó el debate
  sobre existencia como predicado.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["existencia_real"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que algo sea lógicamente posible (sin contradicción) no basta para afirmar que efectivamente existe en el mundo; hace falta algo más que la sola coherencia conceptual."

pasos:
  - "Es la razón por la que \"posible\" y \"real\" son categorías distintas en esta subrama."

explicacion: |
  Verdadero: coherencia lógica es condición necesaria pero no
  suficiente para la existencia real.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "intermedio"
  tags: ["existencia", "metodo"]

enunciado: "Ordená los pasos para analizar si un concepto es lógicamente posible y si además existe realmente."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el concepto tiene alguna contradicción interna (como \"cuadrado redondo\")"
  - "Si no hay contradicción, concluir que es al menos lógicamente posible"
  - "Buscar evidencia de que ese concepto se aplica a algo real en el mundo"
  - "Concluir si tiene sólo existencia posible o también existencia real"
respuesta_orden: ["Revisar si el concepto tiene alguna contradicción interna (como \"cuadrado redondo\")", "Si no hay contradicción, concluir que es al menos lógicamente posible", "Buscar evidencia de que ese concepto se aplica a algo real en el mundo", "Concluir si tiene sólo existencia posible o también existencia real"]
explicacion: |
  El análisis va de la coherencia lógica interna a la evidencia de
  existencia real en el mundo.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["existencia", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Existencia completa, junto con Ser y Realidad, la subrama de las tres preguntas metafísicas básicas de este mapa."

pasos:
  - "Ver `../ser-ontologia/` y `../realidad/`: los tres nodos hermanos exploran ángulos distintos de la misma familia de preguntas."

explicacion: |
  Verdadero: es la síntesis de la subrama completa de metafísica
  básica.
```

```
metadata:
  materia: "filosofia"
  tema: "existencia"
  nivel: "avanzado"
  tags: ["existencia", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La distinción entre existencia posible y existencia real da un vocabulario útil para razonar sobre la diferencia entre imaginar algo coherente y afirmar que ese algo realmente está en el mundo."

pasos:
  - "Es la aplicación práctica de esta distinción filosófica fuera del contexto puramente teórico."

explicacion: |
  Verdadero: es la aplicación concreta de la distinción posible/real
  estudiada en este tema.
```

## Sección: contractualismo (20 preguntas)

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "basico"
  tags: ["contractualismo", "criterio_central"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El contractualismo sostiene que una acción o regla es correcta si es el tipo de regla que personas racionales aceptarían como base para convivir, en un acuerdo hipotético entre iguales."

pasos:
  - "Es la respuesta de esta corriente a la tercera pregunta central de la ética normativa."

explicacion: |
  Verdadero: es el criterio central del contractualismo.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "avanzado"
  tags: ["contractualismo", "etica_como_rama_propia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El contractualismo responde a la tercera pregunta central de la ética normativa: \"¿cómo se llega a un acuerdo sobre reglas morales compartidas?\"."

pasos:
  - "Ver `../etica-como-rama-propia/`: es distinta de las preguntas que responden utilitarismo, deontología y ética de la virtud."

explicacion: |
  Verdadero: es la conexión directa entre este tema y el marco
  general de ética normativa.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "intermedio"
  tags: ["contrato_social", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Hobbes, Locke y Rousseau imaginaron un \"estado de naturaleza\" anterior a la sociedad, y cómo las personas acordarían un contrato social para salir de ese estado."

pasos:
  - "Son referentes clásicos de la filosofía política moderna asociados al contractualismo."

explicacion: |
  Verdadero: son los referentes clásicos de la idea original del
  contrato social.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "intermedio"
  tags: ["rawls", "velo_de_ignorancia"]

variables:
  n: uno_de([1, 1])

respuesta: "Rawls"
tipo: completar

enunciado: "El filósofo del siglo XX que reformuló el contractualismo con el experimento mental del velo de ignorancia se apellida..."

pasos:
  - "John Rawls es el referente central del contractualismo contemporáneo."

explicacion: |
  Rawls es el autor asociado a esta reformulación moderna del
  contractualismo.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "intermedio"
  tags: ["velo_de_ignorancia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El velo de ignorancia es un experimento mental que consiste en imaginar que se diseñan las reglas de una sociedad sin saber qué posición se va a ocupar en ella (rico o pobre, mayoría o minoría)."

pasos:
  - "Es el aporte central de Rawls al contractualismo."

explicacion: |
  Verdadero: es la definición central de este experimento mental.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "avanzado"
  tags: ["velo_de_ignorancia", "justicia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según Rawls, el velo de ignorancia fuerza a diseñar reglas justas para cualquier posición posible, porque no se sabe de antemano cuál se va a ocupar en la sociedad."

pasos:
  - "Sin saber si se va a nacer rico o pobre, con salud o discapacidad, conviene elegir reglas que funcionen bien para cualquier caso."

explicacion: |
  Verdadero: es la razón por la que este experimento mental garantiza
  imparcialidad en el diseño de reglas.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "intermedio"
  tags: ["velo_de_ignorancia", "imparcialidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El velo de ignorancia busca eliminar el sesgo de diseñar reglas favorables sólo a la posición social que uno ya ocupa."

pasos:
  - "Si no se sabe qué posición se ocupará, no conviene diseñar reglas que sólo beneficien a una posición específica."

explicacion: |
  Verdadero: es el mecanismo central por el que el velo de ignorancia
  garantiza imparcialidad.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "avanzado"
  tags: ["contractualismo", "utilitarismo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "A diferencia del utilitarismo, el contractualismo no evalúa una regla sólo por el resultado agregado de bienestar, sino por si sería aceptada por todos los involucrados en condiciones justas."

pasos:
  - "Ver `../utilitarismo/`: es una diferencia central entre estas dos corrientes."

explicacion: |
  Verdadero: es la diferencia central que distingue al contractualismo
  del utilitarismo.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "avanzado"
  tags: ["contractualismo", "deontologia", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la deontología, el contractualismo no parte de un deber fijo derivado de la razón individual, sino de qué acordarían varias personas entre sí."

pasos:
  - "Ver `../deontologia/`: es una diferencia central entre estas dos corrientes."

explicacion: |
  Verdadero: es la diferencia central que distingue al contractualismo
  de la deontología.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "avanzado"
  tags: ["contractualismo", "etica_de_la_virtud", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la ética de la virtud, el contractualismo no pregunta por el carácter de quien actúa, sino por qué reglas serían aceptadas por todos los involucrados."

pasos:
  - "Ver `../etica-de-la-virtud/`: es una diferencia central entre estas dos corrientes."

explicacion: |
  Verdadero: es la diferencia central que distingue al contractualismo
  de la ética de la virtud.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "intermedio"
  tags: ["contractualismo", "aplicacion_institucional"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El contractualismo se usa especialmente para pensar la justicia de instituciones y reglas sociales (leyes, sistemas de impuestos, acceso a salud/educación), más que acciones individuales puntuales."

pasos:
  - "Es distinto de las otras corrientes, más centradas en decisiones individuales concretas."

explicacion: |
  Verdadero: es el ámbito de aplicación más característico del
  contractualismo.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "intermedio"
  tags: ["aplicacion_institucional"]

variables:
  n: uno_de([1, 1])

respuesta: "¿esta regla es la que la sociedad aceptaría de mutuo acuerdo, en condiciones justas de negociación?"
tipo: mc
opciones_explicitas: ["¿esta regla es la que la sociedad aceptaría de mutuo acuerdo, en condiciones justas de negociación?", "¿esta regla maximiza el bienestar total de la sociedad?", "¿esta regla refleja el carácter de un buen gobernante?"]

enunciado: "La pregunta clave que hace el contractualismo al evaluar una regla o institución social es..."

pasos:
  - "Es la pregunta central que distingue el enfoque contractualista de las otras tres corrientes."

explicacion: |
  El contractualismo evalúa reglas según si serían aceptadas en un
  acuerdo justo entre todos los involucrados.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "avanzado"
  tags: ["estado_de_naturaleza"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El \"estado de naturaleza\" es un concepto hipotético usado por Hobbes, Locke y Rousseau para imaginar cómo sería la vida humana antes de cualquier organización social o gobierno."

pasos:
  - "Es el punto de partida para pensar por qué y cómo las personas acordarían salir de ese estado mediante un contrato social."

explicacion: |
  Verdadero: es el concepto central del contractualismo clásico,
  previo a la reformulación de Rawls.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "avanzado"
  tags: ["contrato_social", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El \"contrato social\" es un concepto filosófico hipotético, no un documento histórico real que alguna vez se firmó literalmente."

pasos:
  - "Es una herramienta de análisis filosófico, no un hecho histórico documentado."

explicacion: |
  Verdadero: evita el error común de pensar que existió un contrato
  social literal en algún momento de la historia.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "intermedio"
  tags: ["velo_de_ignorancia", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para evaluar si una política pública es justa según Rawls, se puede preguntar: \"¿elegiría esta política si no supiera si voy a nacer rico o pobre, sano o con discapacidad?\"."

pasos:
  - "Es la aplicación práctica directa del experimento mental del velo de ignorancia."

explicacion: |
  Verdadero: es la aplicación práctica del velo de ignorancia a un
  caso de política pública concreta.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "avanzado"
  tags: ["criticas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una crítica común al contractualismo es que el acuerdo hipotético entre personas racionales es difícil de aplicar de forma concreta, porque en la práctica nadie negocia realmente desde una posición neutral."

pasos:
  - "Es una crítica presentada con neutralidad, sin declarar veredicto sobre si invalida o no la corriente."

explicacion: |
  Verdadero: es una crítica frecuente presentada como parte de
  describir el debate, no como conclusión definitiva.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "avanzado"
  tags: ["contractualismo", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El contractualismo es la cuarta y última corriente normativa específica de la subrama de dilemas éticos, junto a utilitarismo, deontología y ética de la virtud."

pasos:
  - "Ver `../utilitarismo/`, `../deontologia/` y `../etica-de-la-virtud/`: las cuatro corrientes responden distinto a las preguntas centrales de la ética normativa."

explicacion: |
  Verdadero: cierra la subrama completa de dilemas éticos.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "intermedio"
  tags: ["contractualismo", "metodo"]

enunciado: "Ordená los pasos de un análisis contractualista (estilo velo de ignorancia) ante una regla o política social a evaluar."
tipo: ordenar
opciones_explicitas:
  - "Identificar la regla o política social a evaluar"
  - "Imaginar que se desconoce qué posición se va a ocupar en la sociedad (rico/pobre, mayoría/minoría)"
  - "Preguntarse si esa regla se aceptaría igual sin saber esa posición de antemano"
  - "Concluir si la regla es justa según ese criterio de imparcialidad"
respuesta_orden: ["Identificar la regla o política social a evaluar", "Imaginar que se desconoce qué posición se va a ocupar en la sociedad (rico/pobre, mayoría/minoría)", "Preguntarse si esa regla se aceptaría igual sin saber esa posición de antemano", "Concluir si la regla es justa según ese criterio de imparcialidad"]
explicacion: |
  El proceso aplica directamente el experimento mental del velo de
  ignorancia a la evaluación de una regla concreta.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "avanzado"
  tags: ["dilemas_eticos", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Utilitarismo, deontología, ética de la virtud y contractualismo son cuatro formas distintas de responder a las preguntas centrales de la ética normativa (resultado, deber, carácter, acuerdo), sin que ninguna sea la \"ganadora\" consensuada."

pasos:
  - "Es la síntesis final de toda la subrama de dilemas éticos, coherente con el criterio de neutralidad de toda la materia."

explicacion: |
  Verdadero: es el cierre completo de la subrama, mostrando cuatro
  enfoques legítimos y distintos sobre la misma familia de preguntas.
```

```
metadata:
  materia: "filosofia"
  tema: "contractualismo"
  nivel: "avanzado"
  tags: ["contractualismo", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ante el debate sobre si una ley es justa, aplicar el criterio contractualista implica preguntarse si esa ley sería aceptada por personas racionales negociando en condiciones justas, sin saber de antemano qué posición ocuparían en la sociedad."

pasos:
  - "Es la aplicación práctica directa del criterio central de esta corriente a un caso concreto de justicia social."

explicacion: |
  Verdadero: es la aplicación del criterio central estudiado en este
  tema, con relevancia directa para debates sobre justicia e
  instituciones.
```

## Sección: deontologia (20 preguntas)

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "basico"
  tags: ["deontologia", "criterio_central"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La deontología sostiene que una acción es correcta si cumple con un deber moral, sin importar cuáles sean sus consecuencias."

pasos:
  - "\"Deon\" significa \"deber\" en griego: el nombre de la corriente refleja su criterio central."

explicacion: |
  Verdadero: es el criterio central de la deontología, opuesto al
  consecuencialismo del utilitarismo.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["kant", "imperativo_categorico"]

variables:
  n: uno_de([1, 1])

respuesta: "Kant"
tipo: completar

enunciado: "El filósofo que propuso el imperativo categórico como criterio para identificar deberes morales se apellida..."

pasos:
  - "Immanuel Kant es el referente clásico central de la deontología."

explicacion: |
  Kant es el autor asociado al criterio deontológico del imperativo
  categórico.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["imperativo_categorico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según el imperativo categórico, hay que actuar sólo según una regla que se pueda querer que se convierta, al mismo tiempo, en ley universal para todos."

pasos:
  - "En palabras simples: \"¿qué pasaría si TODOS actuaran así?\"."

explicacion: |
  Verdadero: es la formulación central del imperativo categórico de
  Kant.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["kant", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para Kant, mentir es incorrecto siempre, porque si todos mintieran cuando les conviene, la confianza necesaria para que una mentira \"funcione\" desaparecería."

pasos:
  - "La máxima \"miento cuando me conviene\" no se puede universalizar sin contradicción."

explicacion: |
  Verdadero: es el ejemplo clásico de aplicación del imperativo
  categórico al caso de la mentira.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["kant", "consecuencias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para Kant, mentir es incorrecto siempre, sin importar las consecuencias buenas que pudiera tener en un caso puntual — a diferencia del criterio utilitarista."

pasos:
  - "Ver `../utilitarismo/`: esa otra corriente sí evaluaría las consecuencias caso por caso."

explicacion: |
  Verdadero: es la diferencia central entre deontología y
  utilitarismo aplicada a este ejemplo concreto.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["personas_como_fines"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Otra formulación del imperativo categórico sostiene que hay que tratar a las personas siempre como fines en sí mismas, nunca sólo como medios para otro objetivo."

pasos:
  - "Usar a alguien únicamente como instrumento, sin considerar su voluntad o dignidad propia, es incorrecto según esta corriente."

explicacion: |
  Verdadero: es la segunda formulación central del imperativo
  categórico mencionada en la teoría.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["personas_como_fines"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según la deontología kantiana, usar a una persona únicamente como instrumento para lograr un objetivo, sin considerar su voluntad, es incorrecto sin importar el resultado que se busque."

pasos:
  - "Es la aplicación práctica de tratar a las personas como fines, no medios."

explicacion: |
  Verdadero: es coherente con la segunda formulación del imperativo
  categórico.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["dilema_del_tranvia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un análisis deontológico puede objetar que decidir activamente desviar el tranvía hacia una persona la usa como medio (su muerte se convierte en instrumento para salvar a otras) — a diferencia del análisis utilitarista."

pasos:
  - "Ver `../utilitarismo/`: es el mismo dilema clásico, con respuestas distintas según la corriente."

explicacion: |
  Verdadero: es la aplicación del criterio deontológico a este caso
  clásico, contrastando con la respuesta utilitarista.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["dilema_del_tranvia", "debate_abierto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Distintas formulaciones deontológicas pueden llegar a conclusiones distintas sobre el dilema del tranvía, mostrando que el debate sigue abierto incluso dentro de esta corriente."

pasos:
  - "No hay una única \"respuesta deontológica\" acordada por todos los deontólogos para este caso."

explicacion: |
  Verdadero: es un matiz importante sobre la diversidad interna
  dentro de una misma corriente ética.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["deontologia", "utilitarismo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La deontología, igual que el utilitarismo, evalúa cada acción según sus consecuencias particulares en cada caso concreto."

pasos:
  - "La deontología evalúa según deberes/reglas fijas, sin importar el resultado; eso es justamente lo que la distingue del utilitarismo."

explicacion: |
  Falso: es exactamente lo contrario, la deontología prioriza el
  cumplimiento del deber por sobre el resultado.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["deontologia", "utilitarismo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La diferencia central entre deontología y utilitarismo es que la primera mira si se respeta un deber (sin importar el resultado), y la segunda mira el resultado neto de bienestar (sin importar tanto el deber)."

pasos:
  - "Ver `../utilitarismo/`: es el contraste directo entre estas dos corrientes."

explicacion: |
  Verdadero: es la síntesis de la diferencia central entre ambas
  corrientes de la subrama.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["imperativo_categorico", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "preguntarse qué pasaría si todos actuaran de esa misma manera"
tipo: mc
opciones_explicitas: ["preguntarse qué pasaría si todos actuaran de esa misma manera", "calcular qué opción genera más bienestar neto", "preguntarse qué haría una persona virtuosa"]

enunciado: "Para evaluar una acción según el imperativo categórico, el primer paso es..."

pasos:
  - "El criterio central del imperativo categórico es la universalización de la máxima de acción."

explicacion: |
  El imperativo categórico se basa en preguntarse si la regla de
  acción podría convertirse en ley universal sin contradicción.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["deontologia", "etica_como_rama_propia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Deontología responde a la misma primera pregunta central de la ética normativa (\"¿qué hace correcta a una acción?\") que responde el utilitarismo, pero con un criterio distinto."

pasos:
  - "Ver `../etica-como-rama-propia/`: ambas corrientes responden la misma pregunta con criterios opuestos."

explicacion: |
  Verdadero: es la conexión directa entre este tema y el marco
  general de ética normativa.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["deontologia", "etimologia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La palabra \"deontología\" viene del griego \"deon\", que significa \"deber\"."

pasos:
  - "El nombre de la corriente refleja directamente su criterio central."

explicacion: |
  Verdadero: es el origen etimológico del nombre de esta corriente.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["criticas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una crítica común a la deontología es que puede llevar a resultados que parecen intuitivamente malos si se siguen las reglas de forma rígida, sin considerar las consecuencias del caso concreto."

pasos:
  - "Es una crítica que suele venir del lado utilitarista, presentada acá con neutralidad, sin declarar veredicto."

explicacion: |
  Verdadero: es una crítica frecuente presentada como parte de
  describir el debate, no como conclusión definitiva.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["imperativo_categorico", "universalidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El imperativo categórico busca reglas que valgan de forma universal, no reglas que cambien según las circunstancias particulares de cada caso."

pasos:
  - "Es coherente con \"categórico\" (incondicional), en contraste con reglas condicionadas al resultado."

explicacion: |
  Verdadero: la universalidad incondicional es central en la
  formulación kantiana.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["personas_como_fines", "dignidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La formulación de \"personas como fines, no medios\" está estrechamente relacionada con la idea de dignidad humana: cada persona tiene un valor que no se puede reducir a su utilidad para otros."

pasos:
  - "Es la base filosófica de esta formulación del imperativo categórico."

explicacion: |
  Verdadero: la dignidad humana como valor irreductible es central
  en esta formulación deontológica.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "intermedio"
  tags: ["deontologia", "metodo"]

enunciado: "Ordená los pasos de un análisis deontológico ante una acción a evaluar."
tipo: ordenar
opciones_explicitas:
  - "Identificar la máxima o regla que la acción propuesta seguiría"
  - "Preguntarse qué pasaría si esa regla se convirtiera en ley universal para todos"
  - "Revisar si tratar a alguien como medio, no como fin, forma parte de la acción"
  - "Concluir si la acción es correcta según esos criterios, sin importar el resultado"
respuesta_orden: ["Identificar la máxima o regla que la acción propuesta seguiría", "Preguntarse qué pasaría si esa regla se convirtiera en ley universal para todos", "Revisar si tratar a alguien como medio, no como fin, forma parte de la acción", "Concluir si la acción es correcta según esos criterios, sin importar el resultado"]
explicacion: |
  El proceso aplica las dos formulaciones del imperativo categórico
  (universalización y personas como fines) antes de concluir.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["deontologia", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La deontología es la segunda de las cuatro corrientes normativas específicas de la subrama de dilemas éticos, hermana de utilitarismo, ética de la virtud y contractualismo."

pasos:
  - "Ver `../etica-de-la-virtud/` y `../contractualismo/`: los cuatro nodos hermanos dependen de `../etica-como-rama-propia/`."

explicacion: |
  Verdadero: es la relación entre este tema y los otros tres de la
  subrama.
```

```
metadata:
  materia: "filosofia"
  tema: "deontologia"
  nivel: "avanzado"
  tags: ["deontologia", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ante un dilema ético real, aplicar el criterio deontológico implica preguntarse si la acción respeta un deber universal (no mentir, no usar personas como medios), más allá de qué consecuencias tendría."

pasos:
  - "Es la aplicación práctica directa del criterio central de esta corriente a un caso concreto."

explicacion: |
  Verdadero: es la aplicación del criterio central estudiado en este
  tema a situaciones de la vida real, en contraste directo con el
  utilitarismo.
```

## Sección: etica-de-la-virtud (20 preguntas)

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "basico"
  tags: ["etica_de_la_virtud", "criterio_central"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ética de la virtud pregunta qué haría una persona virtuosa en una situación dada, en vez de preguntar si una acción puntual es correcta según un resultado o una regla."

pasos:
  - "El foco está en el carácter, no en la acción aislada."

explicacion: |
  Verdadero: es el criterio central de la ética de la virtud.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "avanzado"
  tags: ["etica_de_la_virtud", "etica_como_rama_propia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ética de la virtud responde a la segunda pregunta central de la ética normativa (\"¿qué hace que una persona sea buena?\"), no a la primera (\"¿qué hace correcta a una acción?\")."

pasos:
  - "Ver `../etica-como-rama-propia/`: es distinta de utilitarismo y deontología, que sí responden la primera pregunta."

explicacion: |
  Verdadero: es la diferencia central que ubica a esta corriente en
  el marco general de las tres preguntas éticas.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "intermedio"
  tags: ["aristoteles"]

variables:
  n: uno_de([1, 1])

respuesta: "Aristóteles"
tipo: completar

enunciado: "El filósofo griego referente central de la ética de la virtud se llama..."

pasos:
  - "Propuso que la vida buena consiste en desarrollar virtudes de carácter estables."

explicacion: |
  Aristóteles es el autor clásico asociado a esta corriente ética.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "intermedio"
  tags: ["virtudes"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las virtudes, según esta corriente, son hábitos de carácter estables (como coraje, honestidad, generosidad), no acciones puntuales aisladas."

pasos:
  - "Se adquieren con práctica repetida, igual que se aprende un oficio."

explicacion: |
  Verdadero: es la definición central de virtud en esta corriente.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "intermedio"
  tags: ["termino_medio"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aristóteles definió la virtud como un término medio entre dos vicios: uno por exceso, otro por defecto."

pasos:
  - "El coraje, por ejemplo, es el término medio entre la cobardía (defecto) y la temeridad (exceso)."

explicacion: |
  Verdadero: es la definición central de virtud como equilibrio en
  esta corriente.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "intermedio"
  tags: ["termino_medio", "coraje"]

variables:
  n: uno_de([1, 1])

respuesta: "coraje"
tipo: completar

enunciado: "El término medio entre la cobardía (defecto) y la temeridad (exceso) es el/la..."

pasos:
  - "Es el ejemplo clásico usado por Aristóteles para explicar la virtud como equilibrio."

explicacion: |
  El coraje es el término medio entre esos dos vicios opuestos.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "intermedio"
  tags: ["termino_medio", "cobardia"]

variables:
  n: uno_de([1, 1])

respuesta: "cobardía"
tipo: completar

enunciado: "El vicio por DEFECTO de coraje (demasiado poco coraje) se llama..."

pasos:
  - "Es uno de los dos extremos entre los que se ubica la virtud del coraje."

explicacion: |
  La cobardía es el defecto de coraje, la falta de esa virtud.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "intermedio"
  tags: ["termino_medio", "temeridad"]

variables:
  n: uno_de([1, 1])

respuesta: "temeridad"
tipo: completar

enunciado: "El vicio por EXCESO de coraje (actuar sin ninguna prudencia) se llama..."

pasos:
  - "Es el otro extremo entre los que se ubica la virtud del coraje."

explicacion: |
  La temeridad es el exceso de coraje, actuar sin prudencia.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "avanzado"
  tags: ["termino_medio", "generosidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La generosidad es el término medio entre la tacañería (defecto) y el derroche (exceso)."

pasos:
  - "Es otro ejemplo del esquema de término medio aplicado a distintas virtudes."

explicacion: |
  Verdadero: es otro caso del mismo patrón de equilibrio entre dos
  vicios opuestos.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "avanzado"
  tags: ["termino_medio", "contexto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El término medio de la virtud no es un punto matemático exacto e igual para todos los casos, sino un equilibrio que depende del contexto y requiere buen juicio práctico."

pasos:
  - "Lo que es coraje apropiado en una situación puede no serlo en otra, según el contexto."

explicacion: |
  Verdadero: es un matiz importante para no simplificar demasiado el
  concepto de término medio.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "avanzado"
  tags: ["etica_de_la_virtud", "utilitarismo", "deontologia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ni el resultado de la acción (utilitarismo) ni el cumplimiento de una regla fija (deontología) son el foco principal de la ética de la virtud: lo central es si la acción refleja un buen carácter."

pasos:
  - "Ver `../utilitarismo/` y `../deontologia/`: las tres corrientes ponen el foco en aspectos distintos de la ética normativa."

explicacion: |
  Verdadero: es la diferencia central que distingue a esta corriente
  de las otras dos ya vistas.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "intermedio"
  tags: ["practica_y_habito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para Aristóteles, la virtud no se aprende sólo estudiando teoría, sino practicándola repetidamente, como un músico que se vuelve hábil tocando, no sólo leyendo sobre música."

pasos:
  - "Es una diferencia metodológica importante frente a corrientes centradas en aplicar una regla o cálculo en el momento de decidir."

explicacion: |
  Verdadero: la práctica y el hábito son centrales para el desarrollo
  del carácter según esta corriente.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "avanzado"
  tags: ["etica_de_la_virtud", "enfoque"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ética de la virtud pregunta menos \"¿qué debo hacer ahora?\" y más \"¿qué tipo de persona quiero ser, y qué haría esa persona?\"."

pasos:
  - "Es la reformulación central que distingue esta corriente de utilitarismo y deontología."

explicacion: |
  Verdadero: es un cambio de perspectiva en cómo se plantea la
  pregunta ética, no sólo un criterio diferente para la misma
  pregunta.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "intermedio"
  tags: ["termino_medio", "practica"]

variables:
  terminos: ["cobardía", "temeridad", "tacañería", "derroche"]
  tipos: ["defecto", "exceso", "defecto", "exceso"]
  idx: uno_de([0, 1, 2, 3])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["defecto", "exceso"]

enunciado: "El vicio \"{terminos[idx]}\" es un ejemplo de vicio por..."

pasos:
  - "Cobardía y tacañería son defectos (falta de la virtud); temeridad y derroche son excesos."

explicacion: |
  Cada vicio se ubica en uno de los dos extremos alrededor de la
  virtud correspondiente.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "avanzado"
  tags: ["etica_de_la_virtud", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aunque el foco principal es el carácter, una persona verdaderamente virtuosa (prudente) también considera las consecuencias probables de sus acciones al decidir cómo actuar."

pasos:
  - "La prudencia (buen juicio práctico) es en sí misma una virtud que orienta la acción considerando el contexto y sus posibles efectos."

explicacion: |
  Verdadero: es un matiz importante, la ética de la virtud no excluye
  del todo la consideración de consecuencias, sólo no las pone como
  criterio único y central.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "avanzado"
  tags: ["criticas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una crítica común a la ética de la virtud es que da menos orientación clara y directa sobre qué hacer en un dilema puntual, comparada con una regla fija (deontología) o un cálculo de consecuencias (utilitarismo)."

pasos:
  - "Preguntar \"qué haría una persona virtuosa\" puede ser menos concreto que aplicar una regla o un cálculo explícito."

explicacion: |
  Verdadero: es una crítica frecuente presentada con neutralidad, sin
  declarar veredicto final.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "avanzado"
  tags: ["prudencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La prudencia es, en esta corriente, la virtud del buen juicio práctico que permite encontrar el término medio adecuado según cada contexto."

pasos:
  - "Sin prudencia, sería difícil aplicar correctamente el esquema del término medio a situaciones concretas."

explicacion: |
  Verdadero: la prudencia cumple un rol central para aplicar
  correctamente el resto de las virtudes en la práctica.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "intermedio"
  tags: ["etica_de_la_virtud", "metodo"]

enunciado: "Ordená los pasos de un análisis desde la ética de la virtud ante una situación a resolver."
tipo: ordenar
opciones_explicitas:
  - "Identificar qué virtud (coraje, honestidad, generosidad...) está en juego en la situación"
  - "Ubicar los dos vicios extremos (defecto y exceso) de esa virtud"
  - "Preguntarse qué haría una persona con buen carácter (prudente) en ese contexto particular"
  - "Actuar buscando el término medio adecuado a esa situación específica"
respuesta_orden: ["Identificar qué virtud (coraje, honestidad, generosidad...) está en juego en la situación", "Ubicar los dos vicios extremos (defecto y exceso) de esa virtud", "Preguntarse qué haría una persona con buen carácter (prudente) en ese contexto particular", "Actuar buscando el término medio adecuado a esa situación específica"]
explicacion: |
  El proceso va de identificar la virtud relevante a buscar el
  equilibrio adecuado según el contexto, guiado por la prudencia.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "avanzado"
  tags: ["etica_de_la_virtud", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ética de la virtud es la tercera de las cuatro corrientes normativas específicas de la subrama de dilemas éticos, hermana de utilitarismo, deontología y contractualismo."

pasos:
  - "Ver `../utilitarismo/`, `../deontologia/` y `../contractualismo/`: los cuatro nodos hermanos dependen de `../etica-como-rama-propia/`."

explicacion: |
  Verdadero: es la relación entre este tema y los otros tres de la
  subrama.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_de_la_virtud"
  nivel: "avanzado"
  tags: ["etica_de_la_virtud", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ante un dilema ético real, aplicar el criterio de la ética de la virtud implica preguntarse qué tipo de persona uno quiere ser y qué haría alguien con ese carácter, en vez de sólo calcular consecuencias o aplicar una regla fija."

pasos:
  - "Es la aplicación práctica directa del criterio central de esta corriente a un caso concreto."

explicacion: |
  Verdadero: es la aplicación del criterio central estudiado en este
  tema, en contraste con utilitarismo y deontología.
```

## Sección: historia-de-la-filosofia-y-corrientes (19 preguntas)

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "basico"
  tags: ["presocraticos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los presocráticos buscaron el principio (arché) que explica el origen de todo, sin recurrir sólo a mitos."

pasos:
  - "Tales propuso el agua, Heráclito el fuego, Pitágoras el número."

explicacion: |
  Verdadero: es la marca central del período presocrático.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["presocraticos", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: "agua"
tipo: completar

enunciado: "Tales de Mileto propuso que el principio (arché) de todas las cosas era el/la..."

pasos:
  - "Es uno de los primeros filósofos presocráticos registrados."

explicacion: |
  Tales asoció el origen de todo con el agua.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["socrates"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sócrates trasladó el foco filosófico de la naturaleza (que preocupaba a los presocráticos) a la ética humana, con la máxima \"conócete a ti mismo\"."

pasos:
  - "Es un cambio de eje central en la historia de la filosofía griega."

explicacion: |
  Verdadero: es el aporte histórico central atribuido a Sócrates.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["platon"]

variables:
  n: uno_de([1, 1])

respuesta: "Platón"
tipo: completar

enunciado: "El filósofo griego que propuso el \"mundo de las Ideas\" se llama..."

pasos:
  - "Discípulo de Sócrates, referente clásico de la filosofía griega."

explicacion: |
  Platón es el autor asociado a la teoría de las Ideas.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["aristoteles"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aristóteles sistematizó lógica, ética y metafísica, entre otras ramas de la filosofía."

pasos:
  - "Ver `../ser-ontologia/`: sus categorías del ser (sustancia/accidente) ya se estudiaron ahí."

explicacion: |
  Verdadero: Aristóteles es referente central de varias ramas
  filosóficas distintas.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["medieval"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En la etapa medieval, la filosofía se entrelaza con la teología cristiana; Santo Tomás de Aquino buscó conciliar fe y razón."

pasos:
  - "Es la característica central de este largo período histórico de la filosofía."

explicacion: |
  Verdadero: es la marca distintiva de la filosofía medieval.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["moderna", "racionalismo", "empirismo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En la etapa moderna surge el debate entre racionalismo (Descartes) y empirismo (Locke, Hume), ya estudiado en `../epistemologia/`."

pasos:
  - "Kant, más adelante, intenta sintetizar ambas tradiciones."

explicacion: |
  Verdadero: es el debate central de la filosofía moderna en
  epistemología.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["existencialismo"]

variables:
  n: uno_de([1, 1])

respuesta: "existencialismo"
tipo: completar

enunciado: "La corriente del siglo XX (Sartre, Camus) que sostiene que la existencia precede a la esencia, entendiendo la existencia humana como libertad radical, se llama..."

pasos:
  - "Es una corriente central de la filosofía contemporánea."

explicacion: |
  El existencialismo enfatiza la libertad y responsabilidad humanas
  sin una esencia predeterminada.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "avanzado"
  tags: ["existencialismo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La frase \"la existencia precede a la esencia\" es central del existencialismo: el ser humano existe primero, y se define a sí mismo después, sin una naturaleza fija predeterminada."

pasos:
  - "Es la formulación más citada de esta corriente filosófica."

explicacion: |
  Verdadero: es la frase clave asociada al existencialismo de Sartre.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["marx"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Marx, filósofo del siglo XIX, desarrolló el materialismo histórico como análisis de la historia."

pasos:
  - "Es un autor central de la etapa contemporánea de la filosofía."

explicacion: |
  Verdadero: Marx es referente central del pensamiento contemporáneo.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["liberalismo"]

variables:
  n: uno_de([1, 1])

respuesta: "liberalismo"
tipo: mc
opciones_explicitas: ["liberalismo", "socialismo", "conservadurismo"]

enunciado: "La corriente político-económica que prioriza la libertad individual y la propiedad privada, con mínima intervención estatal en los mercados, se llama..."

pasos:
  - "Es una de las corrientes político-económicas modernas presentadas con neutralidad."

explicacion: |
  El liberalismo prioriza libertad individual y propiedad privada.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["socialismo"]

variables:
  n: uno_de([1, 1])

respuesta: "socialismo"
tipo: mc
opciones_explicitas: ["liberalismo", "socialismo", "anarquismo"]

enunciado: "La corriente político-económica que prioriza la igualdad económica y la propiedad colectiva o estatal de los medios de producción se llama..."

pasos:
  - "Es una de las corrientes político-económicas modernas presentadas con neutralidad."

explicacion: |
  El socialismo prioriza igualdad económica y propiedad colectiva o
  estatal.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["marxismo"]

variables:
  n: uno_de([1, 1])

respuesta: "marxismo"
tipo: mc
opciones_explicitas: ["marxismo", "conservadurismo", "liberalismo"]

enunciado: "La corriente que analiza la historia como lucha de clases, sosteniendo que el capitalismo genera contradicciones que llevarían a su superación, se llama..."

pasos:
  - "Se relaciona directamente con Marx, ya mencionado en la etapa contemporánea de la historia de la filosofía."

explicacion: |
  El marxismo tiene su propio análisis histórico basado en la lucha
  de clases.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["conservadurismo"]

variables:
  n: uno_de([1, 1])

respuesta: "conservadurismo"
tipo: mc
opciones_explicitas: ["conservadurismo", "anarquismo", "socialismo"]

enunciado: "La corriente político-económica que prioriza la continuidad de instituciones y tradiciones existentes, con cambio gradual frente al cambio radical, se llama..."

pasos:
  - "Es una de las corrientes político-económicas modernas presentadas con neutralidad."

explicacion: |
  El conservadurismo enfatiza la continuidad institucional y el
  cambio gradual.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["anarquismo"]

variables:
  n: uno_de([1, 1])

respuesta: "anarquismo"
tipo: mc
opciones_explicitas: ["anarquismo", "liberalismo", "marxismo"]

enunciado: "La corriente que rechaza toda forma de autoridad jerárquica impuesta, incluido el Estado, a favor de organización voluntaria, se llama..."

pasos:
  - "Es una de las corrientes político-económicas modernas presentadas con neutralidad."

explicacion: |
  El anarquismo rechaza específicamente la autoridad jerárquica
  impuesta, incluyendo al Estado.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "intermedio"
  tags: ["historia_de_la_filosofia", "cronologia"]

enunciado: "Ordená cronológicamente las grandes etapas de la historia de la filosofía occidental mencionadas en la teoría."
tipo: ordenar
opciones_explicitas:
  - "Presocráticos"
  - "Clásicos (Sócrates, Platón, Aristóteles)"
  - "Medieval"
  - "Moderna"
  - "Contemporánea (incluido el existencialismo)"
respuesta_orden: ["Presocráticos", "Clásicos (Sócrates, Platón, Aristóteles)", "Medieval", "Moderna", "Contemporánea (incluido el existencialismo)"]
explicacion: |
  El orden sigue la secuencia histórica de las grandes etapas de la
  filosofía occidental descrita en la teoría.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "avanzado"
  tags: ["nietzsche"]

variables:
  n: uno_de([1, 1])

respuesta: "Nietzsche"
tipo: completar

enunciado: "El filósofo del siglo XIX conocido por su crítica de la moral tradicional se apellida..."

pasos:
  - "Es un autor central de la etapa contemporánea de la filosofía, junto a Marx."

explicacion: |
  Nietzsche es referente central de la crítica filosófica a la moral
  tradicional en el siglo XIX.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "avanzado"
  tags: ["existencialismo", "autores"]

variables:
  autores: ["Sartre", "Camus"]
  idx: uno_de([0, 1])

respuesta: verdadero
tipo: vf

enunciado: "{autores[idx]} es considerado un referente clásico del existencialismo del siglo XX."

pasos:
  - "Ambos autores son referentes de esta corriente filosófica contemporánea."

explicacion: |
  Verdadero: Sartre y Camus son los referentes clásicos más citados
  del existencialismo.
```

```
metadata:
  materia: "filosofia"
  tema: "historia_de_la_filosofia"
  nivel: "avanzado"
  tags: ["historia_de_la_filosofia", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este panorama histórico da contexto a otras ramas de Filosofía ya estudiadas: por ejemplo, racionalismo y empirismo (etapa moderna) ya aparecieron en `../epistemologia/`, y las categorías de Aristóteles ya aparecieron en `../ser-ontologia/`."

pasos:
  - "Conecta las piezas sueltas de otros temas dentro de una línea de tiempo coherente."

explicacion: |
  Verdadero: es la función de síntesis histórica que cumple este
  tema respecto de los demás ya vistos en Filosofía.
```

