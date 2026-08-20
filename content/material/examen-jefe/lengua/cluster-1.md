# Examen jefe — Maestro del Boom y la Gramática

> Logro #84. Completaste el parcial dominando el circuito de la comunicación, las clases de palabras y la esencia del Boom latinoamericano. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **104 preguntas totales** en 5/5 secciones.

---

## Sección: argumentos (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "basico"
  tags: ["argumentos", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un argumento es una razón que sostiene la tesis de un texto: sin argumentos, la tesis es sólo una opinión sin respaldo."

pasos:
  - "Ver `../tesis/`: los argumentos son lo que convierte una opinión en una postura defendida."

explicacion: |
  Verdadero: el argumento es lo que da sustento a la tesis.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "basico"
  tags: ["argumento_de_autoridad"]

variables:
  n: uno_de([1, 1])

respuesta: "argumento de autoridad"
tipo: mc
opciones_explicitas: ["argumento de autoridad", "argumento de ejemplo", "argumento por analogía"]

enunciado: "\"Según la OMS, dormir menos de 7 horas afecta la salud\" es un ejemplo de..."

pasos:
  - "Se apoya en la opinión de una fuente reconocida (la OMS)."

explicacion: |
  El argumento de autoridad se apoya en la opinión de un experto o
  fuente reconocida.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "basico"
  tags: ["argumento_de_ejemplo"]

variables:
  n: uno_de([1, 1])

respuesta: "argumento de ejemplo"
tipo: mc
opciones_explicitas: ["argumento de autoridad", "argumento de ejemplo", "argumento de datos"]

enunciado: "\"Finlandia redujo la jornada escolar y mejoró sus resultados académicos\" es un ejemplo de..."

pasos:
  - "Usa un caso concreto (Finlandia) para ilustrar y respaldar la tesis."

explicacion: |
  El argumento de ejemplo usa un caso concreto para respaldar la
  tesis.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumento_causa_consecuencia"]

variables:
  n: uno_de([1, 1])

respuesta: "argumento de causa-consecuencia"
tipo: mc
opciones_explicitas: ["argumento de causa-consecuencia", "argumento de ejemplo", "argumento de autoridad"]

enunciado: "\"Si se prohíben los celulares en el aula, mejora la concentración de los alumnos\" es un ejemplo de..."

pasos:
  - "Explica que, si se acepta la tesis, se sigue un resultado concreto (mejora la concentración)."

explicacion: |
  El argumento de causa-consecuencia conecta la aceptación de la
  tesis con un resultado esperado.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "basico"
  tags: ["argumento_de_datos"]

variables:
  n: uno_de([1, 1])

respuesta: "argumento de datos"
tipo: mc
opciones_explicitas: ["argumento de datos", "argumento de ejemplo", "argumento por analogía"]

enunciado: "\"El 70% de los estudiantes reporta distracción por el celular en clase\" es un ejemplo de..."

pasos:
  - "Se apoya en una cifra concreta (70%)."

explicacion: |
  El argumento de datos/estadística se apoya en cifras o estudios
  concretos.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumento_por_analogia"]

variables:
  n: uno_de([1, 1])

respuesta: "argumento por analogía"
tipo: mc
opciones_explicitas: ["argumento por analogía", "argumento de autoridad", "argumento de datos"]

enunciado: "\"Así como se prohíbe fumar en espacios cerrados por salud pública, debería regularse el celular en el aula por la misma lógica\" es un ejemplo de..."

pasos:
  - "Compara la situación con otra parecida ya aceptada (la prohibición de fumar)."

explicacion: |
  El argumento por analogía compara la situación actual con otra
  situación similar ya aceptada.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumentos", "relevancia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un buen argumento sostiene directamente la tesis: un dato correcto pero irrelevante para la tesis no funciona como argumento válido, aunque sea cierto."

pasos:
  - "No basta con que un dato sea verdadero, tiene que dar una razón concreta para aceptar esa postura específica."

explicacion: |
  Verdadero: la relación directa con la tesis es lo que distingue a
  un argumento válido de un dato suelto (aunque verdadero).
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumentos", "fortaleza"]

variables:
  argumentos: ["Según un estudio de la Universidad de Harvard de 2020, el ejercicio regular mejora la memoria en un 20%", "Todo el mundo sabe que hacer ejercicio es bueno"]
  tipos: ["fuerte", "débil"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["fuerte", "débil"]

enunciado: "El argumento \"{argumentos[idx]}\" es..."

pasos:
  - "Cuanto más específico y verificable, más fuerte. Las generalidades vagas (\"todo el mundo sabe\") son argumentos débiles."

explicacion: |
  La especificidad y verificabilidad son las claves para distinguir
  argumentos fuertes de débiles.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumentos", "conectores"]

variables:
  conectores: ["porque", "ya que", "puesto que"]
  idx: uno_de([0, 1, 2])

respuesta: verdadero
tipo: vf

enunciado: "\"{conectores[idx]}\" es un conector típico que introduce un argumento en un texto argumentativo."

pasos:
  - "Estos conectores marcan la relación de razón/causa entre el argumento y la tesis."

explicacion: |
  Verdadero: son conectores causales típicos del texto argumentativo,
  la misma lógica de las subordinadas adverbiales de causa.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumentos", "variedad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto argumentativo sólido suele combinar varios tipos de argumento (autoridad, datos, ejemplo) en vez de repetir sólo un tipo."

pasos:
  - "Combinar tipos distintos hace el texto más persuasivo que repetir siempre el mismo enfoque."

explicacion: |
  Verdadero: la variedad de tipos de argumento suele fortalecer un
  texto argumentativo.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "avanzado"
  tags: ["argumento_de_ejemplo", "argumento_de_datos", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre el argumento de ejemplo y el de datos/estadística es que el ejemplo usa un caso puntual concreto (un país, una persona), y los datos usan cifras generales agregadas (porcentajes, promedios)."

pasos:
  - "\"Finlandia hizo X\" (un caso) vs. \"el 70% de los estudiantes...\" (una cifra agregada)."

explicacion: |
  Verdadero: caso puntual vs. cifra agregada es la diferencia central
  entre estos dos tipos de argumento.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "avanzado"
  tags: ["argumento_de_autoridad", "validez"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La fuerza de un argumento de autoridad depende de qué tan reconocida y relevante sea la fuente citada para el tema en cuestión."

pasos:
  - "Citar a un experto reconocido en el tema es más fuerte que citar a alguien sin relación con el campo."

explicacion: |
  Verdadero: no cualquier \"autoridad\" es igual de convincente, la
  pertinencia de la fuente importa.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumentos", "clasificacion"]

variables:
  frases: ["Un estudio de la Universidad de Buenos Aires demostró que el 60% de los adolescentes duerme menos de 6 horas", "Como sucedió con el cinturón de seguridad, que redujo las muertes en accidentes, el casco de bicicleta también debería ser obligatorio"]
  tipos: ["argumento de datos", "argumento por analogía"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["argumento de datos", "argumento por analogía", "argumento de autoridad", "argumento de ejemplo"]

enunciado: "\"{frases[idx]}\" es un..."

pasos:
  - "Buscar si hay una cifra (datos), un experto citado (autoridad), un caso puntual (ejemplo) o una comparación con otra situación (analogía)."

explicacion: |
  Cada fragmento fue construido para representar un tipo distinto de
  argumento según su estructura.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumentos", "opinion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Cualquier opinión personal (\"a mí me parece que sí\") cuenta como un argumento válido en un texto argumentativo."

pasos:
  - "Un argumento necesita una razón concreta (dato, ejemplo, autoridad, causa) que sostenga la tesis, no basta con repetir la opinión sin sustento."

explicacion: |
  Falso: una opinión sin sustento no funciona como argumento, aunque
  coincida con la tesis.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "basico"
  tags: ["argumentos", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto argumentativo puede presentar varios argumentos distintos para sostener una misma tesis."

pasos:
  - "Cuantos más argumentos sólidos y variados, más convincente suele ser el texto."

explicacion: |
  Verdadero: acumular argumentos (de distinto tipo, idealmente) es la
  estrategia habitual para reforzar una tesis.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "avanzado"
  tags: ["argumentos", "tesis", "relacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que uno de los argumentos de un texto sea débil no significa automáticamente que la tesis sea falsa, sólo que ese argumento en particular no la sostiene bien."

pasos:
  - "La tesis puede ser cierta o razonable aunque algún argumento puntual esté mal construido."

explicacion: |
  Verdadero: evaluar la calidad de un argumento es distinto de
  evaluar si la tesis en sí es correcta.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "avanzado"
  tags: ["argumentos", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "Según un estudio publicado en una revista médica, el 80% de los pacientes mejoró con este tratamiento"
tipo: mc
opciones_explicitas: ["Según un estudio publicado en una revista médica, el 80% de los pacientes mejoró con este tratamiento", "Mucha gente dice que este tratamiento funciona bien"]

enunciado: "Para sostener la tesis \"este tratamiento médico es efectivo\", ¿cuál de estos dos argumentos es más fuerte?"

pasos:
  - "El argumento con dato verificable y fuente específica es más fuerte que la generalidad vaga (\"mucha gente dice\")."

explicacion: |
  La especificidad y verificabilidad hacen que el primer argumento
  sea más sólido que el segundo.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "intermedio"
  tags: ["argumentos", "metodo"]

enunciado: "Ordená los pasos para analizar los argumentos de un texto argumentativo."
tipo: ordenar
opciones_explicitas:
  - "Identificar la tesis que el texto defiende"
  - "Separar cada argumento presentado (buscando conectores como \"porque\", \"ya que\")"
  - "Clasificar cada argumento según su tipo (autoridad, ejemplo, datos, causa-consecuencia, analogía)"
  - "Evaluar si cada argumento sostiene directamente la tesis y qué tan fuerte es"
respuesta_orden:
  - "Identificar la tesis que el texto defiende"
  - "Separar cada argumento presentado (buscando conectores como \"porque\", \"ya que\")"
  - "Clasificar cada argumento según su tipo (autoridad, ejemplo, datos, causa-consecuencia, analogía)"
  - "Evaluar si cada argumento sostiene directamente la tesis y qué tan fuerte es"

explicacion: |
  El análisis parte de la tesis (ya vista en el tema anterior), sigue
  con la identificación de cada argumento, y termina en su
  evaluación.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "avanzado"
  tags: ["argumentos", "contraargumentos", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Saber construir bien los propios argumentos es necesario antes de poder anticipar y refutar los argumentos de la postura contraria (contraargumentos)."

pasos:
  - "Ver `../contraargumentos/`: para refutar un argumento ajeno, primero hay que entender qué hace fuerte o débil a un argumento en general."

explicacion: |
  Verdadero: por eso argumentos es prerrequisito directo de
  contraargumentos, el siguiente tema de la cadena.
```

```
metadata:
  materia: "lengua"
  tema: "argumentos"
  nivel: "avanzado"
  tags: ["argumentos", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si la audiencia de un texto valora mucho la evidencia científica, conviene priorizar argumentos de datos/estadística o de autoridad antes que argumentos por analogía o de ejemplo suelto."

pasos:
  - "Elegir el tipo de argumento más persuasivo depende de qué valora la audiencia a la que se dirige el texto."

explicacion: |
  Verdadero: la elección del tipo de argumento es una decisión
  estratégica según a quién se quiere convencer.
```

## Sección: boom-latinoamericano (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "basico"
  tags: ["boom_latinoamericano", "contexto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El Boom latinoamericano ocurre en las décadas de 1960 y 1970."

pasos:
  - "Es un movimiento del siglo XX, mucho más tardío que los movimientos del siglo XIX ya vistos."

explicacion: |
  Verdadero: el Boom es un fenómeno literario de mediados del siglo
  XX.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "intermedio"
  tags: ["boom_latinoamericano", "generacion_98", "cronologia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Entre la Generación del 98 y el Boom latinoamericano pasó más de medio siglo, con otros movimientos intermedios que no se cubren en esta cadena."

pasos:
  - "El MAPA los encadena como los dos últimos movimientos importantes en español, pero no son consecutivos en el tiempo."

explicacion: |
  Verdadero: la distancia temporal es real y se explicita a
  propósito en la teoría, no se oculta.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "intermedio"
  tags: ["boom_latinoamericano", "contexto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El Boom coincide con un momento de efervescencia política y cultural en América Latina, incluyendo la Revolución Cubana."

pasos:
  - "Ese contexto ayudó a que las obras llegaran con fuerza a un público internacional."

explicacion: |
  Verdadero: el contexto histórico-político es parte de las
  condiciones que hicieron posible el fenómeno del Boom.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "basico"
  tags: ["realismo_magico"]

variables:
  n: uno_de([1, 1])

respuesta: "realismo mágico"
tipo: completar

enunciado: "El recurso característico del Boom donde lo fantástico se narra con total naturalidad, como parte normal de la realidad cotidiana, se llama..."

pasos:
  - "Es la característica más distintiva y famosa del movimiento."

explicacion: |
  El realismo mágico es la marca central del Boom latinoamericano.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "avanzado"
  tags: ["realismo_magico", "fantastico", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En el realismo mágico, lo sobrenatural se integra sin extrañeza dentro de un mundo realista; en la literatura fantástica pura, lo sobrenatural genera duda o extrañeza en los personajes."

pasos:
  - "Esa ausencia de sorpresa ante lo mágico es lo que distingue al realismo mágico de otras formas de literatura sobrenatural."

explicacion: |
  Verdadero: la naturalidad sin sorpresa es la marca distintiva del
  realismo mágico frente al fantástico puro.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "intermedio"
  tags: ["boom_latinoamericano", "experimentacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El Boom se caracteriza también por la experimentación narrativa: estructuras complejas, múltiples narradores o puntos de vista, y saltos temporales frecuentes."

pasos:
  - "Ver `../estructura-narrativa/`: estas obras son mucho más audaces que la estructura clásica introducción-nudo-desenlace."

explicacion: |
  Verdadero: la experimentación estructural es otra característica
  central del movimiento, además del realismo mágico.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "intermedio"
  tags: ["boom_latinoamericano", "identidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El Boom explora la historia, la política y la cultura propias de América Latina, con frecuencia con una mirada crítica del poder (dictaduras, colonialismo)."

pasos:
  - "Esa exploración de la identidad regional es un eje temático central del movimiento."

explicacion: |
  Verdadero: el compromiso con la identidad y la política
  latinoamericana es característico del Boom.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "intermedio"
  tags: ["boom_latinoamericano", "proyeccion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Con el Boom, por primera vez la literatura escrita en español desde Hispanoamérica alcanza reconocimiento y venta masiva a nivel mundial."

pasos:
  - "Es un hito distinto de lo que había pasado con los movimientos anteriores de esta cadena."

explicacion: |
  Verdadero: la proyección internacional masiva es un rasgo distintivo
  del fenómeno del Boom, más allá de lo estrictamente literario.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "basico"
  tags: ["boom_latinoamericano", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: "Cien años de soledad"
tipo: completar

enunciado: "La novela de Gabriel García Márquez, considerada la obra más emblemática del realismo mágico, se titula..."

pasos:
  - "García Márquez es el autor colombiano central del Boom."

explicacion: |
  \"Cien años de soledad\" es la novela más representativa del
  realismo mágico y del Boom en general.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "intermedio"
  tags: ["boom_latinoamericano", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: "Rayuela"
tipo: completar

enunciado: "La novela de Julio Cortázar, referencia central de la experimentación narrativa del Boom, se titula..."

pasos:
  - "Cortázar es el autor argentino central de la experimentación estructural del Boom."

explicacion: |
  \"Rayuela\" es célebre por poder leerse en distintos órdenes de
  capítulos, ejemplo extremo de experimentación narrativa.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "avanzado"
  tags: ["boom_latinoamericano", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: "Vargas Llosa"
tipo: completar

enunciado: "El autor peruano de \"La ciudad y los perros\" se apellida..."

pasos:
  - "Mario Vargas Llosa es uno de los autores centrales del Boom."

explicacion: |
  Vargas Llosa es autor representativo del Boom latinoamericano,
  originario de Perú.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "avanzado"
  tags: ["boom_latinoamericano", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: "Carlos Fuentes"
tipo: completar

enunciado: "El autor mexicano de \"La muerte de Artemio Cruz\" se llama..."

pasos:
  - "Carlos Fuentes es otro de los autores centrales del Boom."

explicacion: |
  Fuentes es autor representativo del Boom, originario de México.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "avanzado"
  tags: ["boom_latinoamericano", "autores"]

variables:
  autores: ["García Márquez", "Cortázar", "Vargas Llosa", "Fuentes"]
  origenes: ["Colombia", "Argentina", "Perú", "México"]
  idx: uno_de([0, 1, 2, 3])

respuesta: origenes[idx]
tipo: mc
opciones_explicitas: ["Colombia", "Argentina", "Perú", "México"]

enunciado: "El autor del Boom {autores[idx]} es de..."

pasos:
  - "Cada autor representativo del Boom tiene un origen nacional distinto dentro de Hispanoamérica."

explicacion: |
  El Boom fue un fenómeno regional con referentes en varios países de
  América Latina.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "intermedio"
  tags: ["realismo_magico", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un relato donde un personaje asciende al cielo mientras cuelga la ropa, y nadie en el pueblo se asombra ni lo comenta como algo extraordinario, es un ejemplo típico de realismo mágico."

pasos:
  - "La clave es que lo sobrenatural se integra sin sorpresa dentro de la narración, tratado como parte normal de la realidad."

explicacion: |
  Verdadero: la ausencia de asombro ante lo fantástico es la marca
  distintiva del realismo mágico.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "avanzado"
  tags: ["boom_latinoamericano", "identidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El Boom latinoamericano no se caracteriza sólo por su innovación estilística (realismo mágico, experimentación), sino también por un fuerte contenido político y de crítica social."

pasos:
  - "Muchas obras del Boom abordan directamente dictaduras, colonialismo y desigualdad en la región."

explicacion: |
  Verdadero: forma y contenido político van de la mano en buena parte
  de la literatura del Boom.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "intermedio"
  tags: ["realismo_magico", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aunque \"Cien años de soledad\" es el ejemplo más famoso, el realismo mágico aparece en la obra de varios autores del Boom, no sólo en García Márquez."

pasos:
  - "El realismo mágico es una característica compartida del movimiento, no una técnica exclusiva de un solo autor."

explicacion: |
  Verdadero: el realismo mágico es una de las marcas del movimiento
  en su conjunto, aunque García Márquez sea su referente más
  reconocido.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "avanzado"
  tags: ["realismo_magico", "fantastico", "practica"]

variables:
  fragmentos: ["Un personaje encuentra un fantasma y grita aterrorizado, sin entender qué está pasando", "Llueven flores amarillas del cielo durante horas, y los vecinos simplemente barren la vereda como cualquier otro día"]
  tipos: ["fantástico puro", "realismo mágico"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["fantástico puro", "realismo mágico"]

enunciado: "\"{fragmentos[idx]}\" es un ejemplo de..."

pasos:
  - "Si el personaje se sorprende o teme lo sobrenatural, es fantástico puro. Si lo sobrenatural se trata como normal, es realismo mágico."

explicacion: |
  La reacción de los personajes ante lo sobrenatural es el criterio
  que distingue estos dos tipos de literatura fantástica.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "intermedio"
  tags: ["boom_latinoamericano", "metodo"]

enunciado: "Ordená los pasos para reconocer si un texto pertenece al Boom latinoamericano."
tipo: ordenar
opciones_explicitas:
  - "Revisar si aparecen elementos sobrenaturales tratados con naturalidad (realismo mágico)"
  - "Buscar estructuras narrativas complejas o poco convencionales"
  - "Identificar si hay una exploración de la identidad o política latinoamericana"
  - "Confirmar la época (décadas de 1960-1970) y el origen hispanoamericano del autor"
respuesta_orden:
  - "Revisar si aparecen elementos sobrenaturales tratados con naturalidad (realismo mágico)"
  - "Buscar estructuras narrativas complejas o poco convencionales"
  - "Identificar si hay una exploración de la identidad o política latinoamericana"
  - "Confirmar la época (décadas de 1960-1970) y el origen hispanoamericano del autor"

explicacion: |
  El análisis va de la marca más reconocible (realismo mágico) a los
  datos contextuales que confirman la ubicación del texto en el
  movimiento.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "avanzado"
  tags: ["boom_latinoamericano", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El Boom latinoamericano es el último eslabón de la cadena de movimientos literarios estudiada (Romanticismo → Realismo → Modernismo → Generación del 98 → Boom)."

pasos:
  - "Cada movimiento se relacionó con el anterior por reacción, sucesión cronológica o tema compartido."

explicacion: |
  Verdadero: cierra la cadena histórica de movimientos literarios en
  español de esta rama de la currícula.
```

```
metadata:
  materia: "lengua"
  tema: "boom_latinoamericano"
  nivel: "avanzado"
  tags: ["realismo_magico", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si un autor quiere narrar un hecho sobrenatural para hablar simbólicamente de la historia de un pueblo, sin romper el tono realista general del relato, el realismo mágico es un recurso más afín que la literatura fantástica pura (donde lo sobrenatural genera extrañeza explícita)."

pasos:
  - "El realismo mágico permite mezclar lo simbólico/sobrenatural con la crítica social sin quebrar la verosimilitud general de la narración."

explicacion: |
  Verdadero: la elección del tipo de literatura fantástica depende
  del efecto narrativo y simbólico que el autor busca lograr.
```

## Sección: circuito-de-la-comunicacion (24 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["feedback", "respuesta"]

variables:
  correcta: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "El feedback es la respuesta que el receptor envía al emisor para confirmar que ha recibido y entendido el mensaje."

explicacion: |
  Verdadero. El feedback (o retroalimentación) es esencial para verificar la eficacia de la comunicación y permite ajustar el mensaje si fue malinterpretado.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["receptor", "interpretacion"]

variables:
  correcta: "falso"

respuesta: falso
tipo: vf

enunciado: "El receptor es un elemento pasivo que solo recibe información sin influir en el proceso."

explicacion: |
  Falso. El receptor es activo; su contexto, conocimientos previos y estado emocional influyen directamente en cómo interpreta el mensaje.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["codigo", "compartido"]

variables:
  correcta: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Para que la comunicación sea posible, emisor y receptor deben dominar el mismo código."

explicacion: |
  Verdadero. Si no comparten el código (idioma, lenguaje técnico, etc.), el mensaje no puede ser decodificado correctamente por el receptor.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["roles", "intercambio"]

variables:
  correcta: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "En una conversación, los roles de emisor y receptor pueden intercambiarse."

explicacion: |
  Verdadero. En la comunicación interpersonal dinámica, los participantes alternan entre emitir mensajes y recibirlos.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["codigo", "matematico"]

variables:
  correcta: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "El lenguaje matemático es un tipo de código utilizado en la comunicación."

explicacion: |
  Verdadero. El lenguaje matemático es un código formal con reglas y signos específicos para comunicar ideas precisas.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "avanzado"
  tags: ["receptor", "teoria"]

variables:
  correcta: "falso"

respuesta: falso
tipo: vf

enunciado: "En los modelos modernos del circuito de comunicación, el receptor se considera completamente pasivo."

explicacion: |
  Falso. Los modelos modernos enfatizan la actividad del receptor, quien construye sentido activamente basado en su contexto y conocimientos.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["emisor", "elementos_basicos"]

variables:
  nombre_emisor: uno_de(["María", "Juan", "La profesora", "El director"])
  accion: uno_de(["envía", "redacta", "dicta", "graba"])

respuesta: "emisor"
tipo: input

enunciado: "En la frase '{nombre_emisor} {accion} una carta a su amigo', ¿quién cumple la función de emisor?"

explicacion: |
  El emisor es quien origina el mensaje. En este caso, {nombre_emisor} es quien realiza la acción de generar la información.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal", "medio"]

variables:
  medio: uno_de(["el aire", "el teléfono", "internet", "el papel"])
  situacion: uno_de(["conversación cara a cara", "llamada telefónica", "correo electrónico", "carta escrita"])

respuesta: "canal"
tipo: input

enunciado: "Para que el mensaje viaje a través de '{medio}' en una situación de '{situacion}', ¿qué elemento del circuito se está utilizando?"

explicacion: |
  El canal es el medio físico o técnico por el cual se transmite el mensaje del emisor al receptor.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["receptor", "interpretacion"]

variables:
  accion_receptor: uno_de(["interpreta", "recibe", "decodifica", "entiende"])

respuesta: "receptor"
tipo: input

enunciado: "La persona que {accion_receptor} el mensaje enviado por el emisor se denomina:"

explicacion: |
  El receptor es quien recibe e interpreta el mensaje. Su contexto y conocimientos previos influyen en la interpretación.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["contexto", "situacion"]

variables:
  lugar: uno_de(["una fiesta ruidosa", "una biblioteca silenciosa", "un estadio de fútbol", "una sala de espera"])
  efecto: uno_de(["ruido ambiental", "silencio", "multitud", "tranquilidad"])

respuesta: "contexto"
tipo: input

enunciado: "En '{lugar}', el '{efecto}' puede actuar como ruido que interfiere con la transmisión del mensaje. ¿Qué elemento del circuito abarca esta situación?"

explicacion: |
  El contexto incluye la situación física y social donde ocurre la comunicación, incluyendo posibles interferencias o ruidos.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["codigo", "verbal"]

variables:
  ejemplo: uno_de(["el idioma español", "el lenguaje de señas", "las señales de tránsito", "el código Morse"])

respuesta: "codigo"
tipo: input

enunciado: "'{ejemplo}' es un ejemplo de:"

explicacion: |
  El código es el sistema de signos y reglas compartido. El idioma español es un código verbal.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "avanzado"
  tags: ["elementos", "analisis"]

variables:
  escenario: uno_de(["un mensaje de texto sin respuesta", "una charla de café", "un libro leído", "una película vista"])
  elemento_falta: "feedback"

respuesta: "feedback"
tipo: input

enunciado: "En un '{escenario}' unidireccional donde no hay respuesta inmediata del receptor, ¿qué elemento del circuito está ausente o es mínimo?"

explicacion: |
  En la comunicación unidireccional (como leer un libro), el feedback inmediato del emisor al receptor es ausente o muy limitado.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["codigo", "no_verbal"]

variables:
  gesto: uno_de(["un saludo con la mano", "una señal de stop", "una mirada de enfado", "un guiño"])

respuesta: "codigo"
tipo: input

enunciado: "'{gesto}' forma parte del código:"

explicacion: |
  Los gestos y señales son parte del código no verbal, que también es un sistema de signos compartido para comunicar.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["canal", "clasificacion"]

variables:
  medio: uno_de(["las ondas de radio", "la fibra óptica", "el aire", "el correo postal"])
  categoria: uno_de(["canal técnico", "canal natural"])

respuesta: "canal"
tipo: input

enunciado: "'{medio}' es un ejemplo de:"

explicacion: |
  El canal es el medio de transmisión. Las ondas de radio y la fibra óptica son canales técnicos; el aire es natural. La pregunta pide identificar el elemento general.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["receptor", "interpretacion"]

variables:
  factor: uno_de(["sus conocimientos previos", "su estado emocional", "su cultura", "su atención"])
  influencia: "la interpretación"

respuesta: "receptor"
tipo: input

enunciado: "El factor '{factor}' del {influencia} del mensaje depende principalmente de:"

explicacion: |
  La interpretación del mensaje la realiza el receptor, influenciado por sus propios factores internos y externos.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["emisor", "intencion"]

variables:
  accion: uno_de(["quiero avisarte", "necesito ayuda", "felicitaciones", "adiós"])
  elemento: "emisor"

respuesta: "emisor"
tipo: input

enunciado: "La intención de '{accion}' define quién es el:"

explicacion: |
  El emisor es quien tiene la intención de comunicar algo, originando el mensaje.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["codigo", "fallos"]

variables:
  idioma_emisor: "inglés"
  idioma_receptor: "español"
  resultado: "imposible"

respuesta: "imposible"
tipo: input

enunciado: "Si el emisor usa '{idioma_emisor}' y el receptor solo entiende '{idioma_receptor}', la comunicación es:"

explicacion: |
  Sin un código compartido, la comunicación es imposible, independientemente del canal o contexto.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal", "audio"]

variables:
  medio: uno_de(["el aire", "las ondas sonoras", "los altavoces", "los micrófonos"])
  elemento: "canal"

respuesta: "canal"
tipo: input

enunciado: "Para que tu voz llegue a alguien en una conversación presencial, el '{medio}' actúa como:"

explicacion: |
  El canal es el medio físico. En una conversación cara a cara, el aire (u ondas sonoras) es el canal.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "avanzado"
  tags: ["contexto", "cultural"]

variables:
  situacion: uno_de(["un saludo formal en Japón", "un abrazo en Latinoamérica", "un apretón de manos en Europa"])
  elemento: "contexto"

respuesta: "contexto"
tipo: input

enunciado: "Las normas de saludo varían según la cultura. Esto es parte del:"

explicacion: |
  El contexto incluye las relaciones sociales, culturales y situacionales que afectan la interpretación del mensaje.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["elementos", "esenciales"]

variables:
  lista: uno_de(["emisor", "receptor", "canal", "código", "mensaje", "contexto"])
  pregunta: "¿Cuál de estos es un elemento esencial del circuito de la comunicación?"

respuesta: "mensaje"
tipo: input

enunciado: "Sin '{lista}', no hay comunicación. ¿Qué elemento falta en la lista anterior para que sea completa?"

explicacion: |
  El mensaje es la información que se transmite. Sin mensaje, no hay comunicación. Todos los otros elementos listados también son esenciales.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["receptor", "decodificacion"]

variables:
  accion: uno_de(["traduce", "interpreta", "descifra", "comprende"])
  elemento: "receptor"

respuesta: "receptor"
tipo: input

enunciado: "La acción de '{accion}' el mensaje según el código compartido es realizada por:"

explicacion: |
  El receptor decodifica el mensaje, es decir, lo traduce de los signos del código a un significado comprensible.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "basico"
  tags: ["canal", "papel"]

variables:
  ejemplo: uno_de(["una carta", "un fax", "un telegrama", "un periódico"])
  elemento: "canal"

respuesta: "canal"
tipo: input

enunciado: "En una '{ejemplo}', el papel actúa como:"

explicacion: |
  El papel es el soporte físico que funciona como canal para el mensaje escrito.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["contexto", "temporal"]

variables:
  tiempo: uno_de(["hace 100 años", "en el presente", "en el futuro"])
  elemento: "contexto"

respuesta: "contexto"
tipo: input

enunciado: "La época en que se produce la comunicación afecta su significado. Esto es parte del:"

explicacion: |
  El contexto temporal es un factor clave que influye en la interpretación del mensaje.
```

```
metadata:
  materia: "Lengua"
  tema: "circuito_de_la_comunicacion"
  nivel: "avanzado"
  tags: ["sintesis", "modelo"]

variables:
  modelo: "circuito de la comunicación"
  funcion: "entender el intercambio de información"

respuesta: "circuito de la comunicación"
tipo: input

enunciado: "El modelo que nos permite entender cómo se produce el intercambio de información entre personas se llama:"

explicacion: |
  El circuito de la comunicación es el modelo teórico que describe los elementos y procesos de la comunicación.
```

## Sección: clases-de-palabras (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "basico"
  tags: ["sustantivo", "vocabulario"]

enunciado: "¿Qué es un sustantivo?"
tipo: mc
opciones_explicitas:
  - "Una palabra que nombra personas, animales, cosas o ideas"
  - "Una palabra que expresa una acción o un estado"
  - "Una palabra que modifica a otra indicando una cualidad"
respuesta: "Una palabra que nombra personas, animales, cosas o ideas"

explicacion: |
  Como 'mesa', 'ciudad' o 'amor'.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "basico"
  tags: ["verbo", "vocabulario"]

enunciado: "¿Qué es un verbo?"
tipo: mc
opciones_explicitas:
  - "Una palabra que expresa una acción o un estado"
  - "Una palabra que nombra a una persona o cosa"
  - "Una palabra invariable que modifica a un adjetivo"
respuesta: "Una palabra que expresa una acción o un estado"

explicacion: |
  Como 'correr', 'saltar' o 'pensar'.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "basico"
  tags: ["adjetivo", "vocabulario"]

enunciado: "¿Qué es un adjetivo?"
tipo: mc
opciones_explicitas:
  - "Una palabra que modifica a un sustantivo, indicando una cualidad, y concuerda con él en género y número"
  - "Una palabra que nombra a una persona, animal o cosa"
  - "Una palabra invariable que modifica a un verbo"
respuesta: "Una palabra que modifica a un sustantivo, indicando una cualidad, y concuerda con él en género y número"

explicacion: |
  Como 'grande', 'rojo' o 'feliz'.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "intermedio"
  tags: ["adjetivo", "problema"]

tipo: completar
enunciado: "En la oración 'El libro azul es mío', la palabra 'azul' es un ___ porque modifica al sustantivo 'libro'."
respuestas_validas:
  - "adjetivo"
  - "adjetivo calificativo"

explicacion: |
  'Azul' concuerda en género (masculino) y número (singular) con
  'libro', el sustantivo que modifica.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "intermedio"
  tags: ["adverbio", "vocabulario"]

enunciado: "¿Qué es un adverbio?"
tipo: mc
opciones_explicitas:
  - "Una palabra invariable que modifica a un verbo, un adjetivo u otro adverbio"
  - "Una palabra que modifica a un sustantivo y concuerda con él"
  - "Una palabra que nombra una acción"
respuesta: "Una palabra invariable que modifica a un verbo, un adjetivo u otro adverbio"

explicacion: |
  A diferencia del adjetivo, el adverbio no tiene género ni número.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "intermedio"
  tags: ["adverbio", "problema"]

enunciado: "¿Qué categoría gramatical es la palabra 'rápidamente'?"
tipo: mc
opciones_explicitas:
  - "Adverbio: modifica al verbo e indica modo, y es invariable"
  - "Adjetivo: modifica a un sustantivo"
  - "Sustantivo: nombra algo"
respuesta: "Adverbio: modifica al verbo e indica modo, y es invariable"

explicacion: |
  'Rápidamente' se formó a partir del adjetivo 'rápida' + el sufijo
  '-mente' (ver `../vocabulario-y-familia-de-palabras/`).
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "basico"
  tags: ["pronombre", "vocabulario"]

enunciado: "¿Qué es un pronombre?"
tipo: mc
opciones_explicitas:
  - "Una palabra que reemplaza a un sustantivo, para no repetirlo"
  - "Una palabra que siempre acompaña a un verbo"
  - "Otro nombre para un artículo"
respuesta: "Una palabra que reemplaza a un sustantivo, para no repetirlo"

explicacion: |
  Como 'yo', 'ella', 'esto' o 'quien'.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "intermedio"
  tags: ["articulo", "vocabulario"]

enunciado: "¿Qué es un determinante?"
tipo: mc
opciones_explicitas:
  - "Una palabra que acompaña al sustantivo y lo 'actualiza' (lo presenta como conocido o desconocido)"
  - "Una palabra que reemplaza al sustantivo por completo"
  - "Una palabra que sólo aparece en oraciones negativas"
respuesta: "Una palabra que acompaña al sustantivo y lo 'actualiza' (lo presenta como conocido o desconocido)"

explicacion: |
  Como 'el', 'la', 'un', 'este' o 'mi'.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "avanzado"
  tags: ["articulo"]

respuesta: verdadero
tipo: vf

enunciado: "Los artículos (el, la, los, las, un, una) son, según la gramática normativa actual de la RAE, una subcategoría de los determinantes."

explicacion: |
  La RAE los clasifica dentro de los determinantes desde la Nueva
  gramática de la lengua española (2009).
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "basico"
  tags: ["preposicion", "vocabulario"]

enunciado: "¿Qué es una preposición?"
tipo: mc
opciones_explicitas:
  - "Una palabra invariable que relaciona dos palabras o dos partes de una oración"
  - "Una palabra que expresa una emoción"
  - "Una palabra que modifica a un sustantivo"
respuesta: "Una palabra invariable que relaciona dos palabras o dos partes de una oración"

explicacion: |
  Como 'de', 'a', 'en', 'con' o 'para'.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "basico"
  tags: ["conjuncion", "vocabulario"]

enunciado: "¿Qué es una conjunción?"
tipo: mc
opciones_explicitas:
  - "Una palabra invariable que une palabras u oraciones"
  - "Una palabra que reemplaza a un sustantivo"
  - "Una palabra que sólo se usa al principio de una oración"
respuesta: "Una palabra invariable que une palabras u oraciones"

explicacion: |
  Como 'y', 'pero', 'aunque' u 'o'.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "basico"
  tags: ["interjeccion", "vocabulario"]

enunciado: "¿Qué es una interjección?"
tipo: mc
opciones_explicitas:
  - "Una palabra que expresa una emoción o reacción, casi siempre aislada del resto de la oración"
  - "Una palabra que siempre modifica a un verbo"
  - "Otro nombre para un pronombre"
respuesta: "Una palabra que expresa una emoción o reacción, casi siempre aislada del resto de la oración"

explicacion: |
  Como '¡ay!', '¡oh!' o '¡uy!'.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "intermedio"
  tags: ["adjetivo", "morfologia"]

respuesta: verdadero
tipo: vf

enunciado: "El adjetivo es una clase de palabra variable: cambia de forma según el género y el número del sustantivo que modifica ('rojo/roja', 'rojos/rojas')."

explicacion: |
  A diferencia del adverbio, que es invariable.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "intermedio"
  tags: ["preposicion", "morfologia"]

respuesta: verdadero
tipo: vf

enunciado: "La preposición es una clase de palabra invariable: 'de', 'en' o 'con' no cambian de forma sin importar el género o número de las palabras que relacionan."

explicacion: |
  Junto con el adverbio, la conjunción y la interjección, forma el
  grupo de clases que no cambian de forma.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "avanzado"
  tags: ["sustantivo", "problema"]

enunciado: "Marcá los sustantivos de esta oración."
tipo: identificar_palabras
texto_analizar: "el gato negro duerme en la cama"
respuestas_validas:
  - "gato"
  - "cama"

explicacion: |
  'Negro' es un adjetivo que modifica a 'gato'; 'duerme' es el verbo;
  'el', 'en', 'la' son determinante y preposición.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "intermedio"
  tags: ["verbo", "problema"]

enunciado: "Marcá el verbo de esta oración."
tipo: identificar_palabras
texto_analizar: "María corre rápidamente por el parque"
respuestas_validas:
  - "corre"

explicacion: |
  'María' y 'parque' son sustantivos; 'rápidamente' es un adverbio;
  'por' y 'el' son preposición y determinante.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "avanzado"
  tags: ["adverbio", "problema"]

enunciado: "Marcá el adverbio de esta oración."
tipo: identificar_palabras
texto_analizar: "María corre rápidamente por el parque"
respuestas_validas:
  - "rápidamente"

explicacion: |
  Es invariable y modifica al verbo 'corre', indicando el modo en que
  se realiza la acción.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "basico"
  tags: ["clasificar"]

enunciado: "'Correr', 'saltar' y 'pensar' son ejemplos de una misma categoría gramatical. ¿Cuál?"
tipo: mc
opciones_explicitas:
  - "Verbos"
  - "Sustantivos"
  - "Adjetivos"
respuesta: "Verbos"

explicacion: |
  Las tres expresan una acción — la característica definitoria del
  verbo.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué es útil saber a qué clase gramatical pertenece cada palabra de una oración?"
tipo: mc
opciones_explicitas:
  - "Porque es el paso previo para entender cómo se construye una oración: conjugar verbos, hacer concordar sujeto y predicado, o identificar cada parte de la oración"
  - "Sólo sirve para completar ejercicios de gramática, sin ninguna utilidad práctica"
  - "No tiene ninguna relación con escribir o hablar correctamente"
respuesta: "Porque es el paso previo para entender cómo se construye una oración: conjugar verbos, hacer concordar sujeto y predicado, o identificar cada parte de la oración"

explicacion: |
  Es el prerrequisito directo de los tres módulos que siguen.
```

```
metadata:
  materia: "lengua"
  tema: "clases_de_palabras"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve clasificar las palabras en categorías gramaticales?"
tipo: mc
opciones_explicitas:
  - "Para entender la función de cada palabra dentro de una oración, base necesaria para conjugar verbos, lograr concordancia y analizar sujeto y predicado"
  - "Sólo sirve para ordenar un diccionario"
  - "Sólo se aplica a la lengua escrita, nunca a la hablada"
respuesta: "Para entender la función de cada palabra dentro de una oración, base necesaria para conjugar verbos, lograr concordancia y analizar sujeto y predicado"

explicacion: |
  Es la base directa de `../conjugacion-verbal-indicativo/`,
  `../concordancia-nominal-y-verbal/` y `../sujeto-y-predicado/`.
```

## Sección: comprension-idea-principal (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "explicita"]

variables:
  n: uno_de([1, 1])

respuesta: "Los perros son animales muy sociables"
tipo: mc
opciones_explicitas: ["Los perros son animales muy sociables", "Los perros viven en manada", "Los perros reconocen emociones"]

enunciado: "\"Los perros son animales muy sociables. Viven en manada en estado salvaje y reconocen las emociones de las personas.\" ¿Cuál es la idea principal?"

pasos:
  - "La primera oración suele anunciar la idea principal; el resto la desarrolla con ejemplos."

explicacion: |
  \"Viven en manada\" y \"reconocen emociones\" son ideas secundarias
  que apoyan la idea principal (que son sociables), no la reemplazan.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "tema"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El tema de un texto (\"los perros\") es lo mismo que su idea principal."

pasos:
  - "El tema es una palabra o frase corta; la idea principal es una oración completa con lo que se dice sobre ese tema."

explicacion: |
  Falso: el tema es de qué habla el texto; la idea principal es QUÉ
  dice sobre ese tema.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "ideas_secundarias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las ideas secundarias explican, ejemplifican o dan detalles sobre la idea principal, pero no son el mensaje central del párrafo."

pasos:
  - "Un párrafo tiene una sola idea principal y puede tener varias ideas secundarias."

explicacion: |
  Verdadero: las ideas secundarias apoyan, no reemplazan, la idea
  principal.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "ubicacion"]

variables:
  n: uno_de([1, 1])

respuesta: "El reciclaje es una práctica clave para cuidar el planeta"
tipo: mc
opciones_explicitas: ["El reciclaje es una práctica clave para cuidar el planeta", "El vidrio se recicla infinitas veces", "El papel tarda semanas en descomponerse"]

enunciado: "\"El vidrio se puede reciclar infinitas veces sin perder calidad. El papel, en cambio, sólo unas pocas veces. En definitiva, el reciclaje es una práctica clave para cuidar el planeta.\" ¿Cuál es la idea principal?"

pasos:
  - "Cuando el párrafo acumula datos y termina con una conclusión general, la idea principal suele estar al final."

explicacion: |
  Los datos sobre vidrio y papel son ejemplos que llevan a la
  conclusión final, que es la idea principal.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "avanzado"
  tags: ["idea_principal", "implicita"]

variables:
  n: uno_de([1, 1])

respuesta: "El personaje estaba muy nervioso"
tipo: mc
opciones_explicitas: ["El personaje estaba muy nervioso", "El personaje tenía las manos frías", "El personaje miraba el reloj"]

enunciado: "\"Le temblaban las manos. Miraba el reloj cada dos minutos. No podía quedarse sentado.\" Ninguna oración lo dice literalmente, pero ¿cuál es la idea principal implícita?"

pasos:
  - "Cuando ninguna oración resume el párrafo, hay que inferir la idea general a partir de todos los detalles juntos."

explicacion: |
  Los tres detalles (manos que tiemblan, mirar el reloj, no poder
  quedarse quieto) son síntomas de nerviosismo — la idea principal
  hay que deducirla, no está escrita literal.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "resumen"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si se tuviera que resumir un texto en una sola oración, esa oración sería (o se parecería mucho a) su idea principal."

pasos:
  - "Resumir obliga a distinguir lo esencial (idea principal) de los detalles (ideas secundarias)."

explicacion: |
  Verdadero: es la estrategia práctica más directa para verificar
  si se identificó bien la idea principal.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un párrafo suele tener varias ideas principales, una por cada oración."

pasos:
  - "Un párrafo bien construido gira en torno a una sola idea central, con oraciones secundarias que la apoyan."

explicacion: |
  Falso: lo habitual es una idea principal por párrafo, acompañada de
  varias ideas secundarias.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "detalles"]

variables:
  n: uno_de([1, 1])

respuesta: "El uso de energías renovables creció mucho en la última década"
tipo: mc
opciones_explicitas: ["El uso de energías renovables creció mucho en la última década", "La energía solar usa paneles fotovoltaicos", "La energía eólica usa turbinas de viento"]

enunciado: "\"La energía solar usa paneles fotovoltaicos. La eólica usa turbinas de viento. El uso de energías renovables creció mucho en la última década.\" ¿Cuál es la idea principal?"

pasos:
  - "Los detalles técnicos (paneles, turbinas) son ejemplos de energías renovables; la afirmación general sobre su crecimiento es la idea principal."

explicacion: |
  Los detalles sobre cómo funciona cada energía son ideas
  secundarias que ilustran la idea principal (el crecimiento del
  uso).
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "estrategia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Conviene leer el párrafo completo antes de decidir cuál es la idea principal, en vez de asumir que siempre es la primera oración."

pasos:
  - "La idea principal puede estar al final o ser implícita; asumir que siempre está al inicio lleva a errores."

explicacion: |
  Verdadero: aunque el inicio es el lugar más común, no es el único,
  así que hay que confirmar leyendo todo el párrafo.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "titulo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El título de un texto suele dar una pista sobre el tema, pero no reemplaza la necesidad de leer el párrafo para encontrar la idea principal completa."

pasos:
  - "El título anticipa el tema (una palabra/frase corta), pero la idea principal es una oración completa que hay que construir leyendo."

explicacion: |
  Verdadero: el título ayuda a ubicar el tema, pero la idea principal
  necesita leer el desarrollo del párrafo.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "narrativo"]

variables:
  n: uno_de([1, 1])

respuesta: "La ciudad se quedó sin luz durante toda la noche"
tipo: mc
opciones_explicitas: ["La ciudad se quedó sin luz durante toda la noche", "Los vecinos salieron con velas", "Se escuchó un ruido fuerte en el barrio"]

enunciado: "\"Se escuchó un ruido fuerte. Las luces se apagaron de golpe. Los vecinos salieron con velas a la calle. La ciudad se quedó sin luz durante toda la noche.\" ¿Cuál es la idea principal?"

pasos:
  - "El ruido, las velas y el apagón son los eventos que llevan a la idea central del corte de luz prolongado."

explicacion: |
  La idea principal resume el hecho central (el corte de luz); los
  demás detalles son la secuencia de eventos que lo acompañan.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "ejemplos"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un ejemplo dado dentro de un párrafo (\"por ejemplo, las manzanas y las peras\") suele ser la idea principal del párrafo."

pasos:
  - "Los ejemplos ilustran una afirmación más general (la idea principal), no la constituyen."

explicacion: |
  Falso: los ejemplos son ideas secundarias que apoyan o ilustran la
  idea principal, casi nunca son la idea principal en sí.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "expositivo"]

variables:
  n: uno_de([1, 1])

respuesta: "El agua es esencial para la vida en la Tierra"
tipo: mc
opciones_explicitas: ["El agua es esencial para la vida en la Tierra", "El agua cubre el 70% de la superficie terrestre", "El agua se congela a 0°C"]

enunciado: "\"El agua es esencial para la vida en la Tierra. Cubre el 70% de la superficie terrestre y forma parte de todos los seres vivos.\" ¿Cuál es la idea principal?"

pasos:
  - "La primera oración anuncia la idea general; los datos que siguen la respaldan."

explicacion: |
  Los datos sobre el porcentaje de superficie y los seres vivos
  apoyan la afirmación inicial, que es la idea principal.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "avanzado"
  tags: ["idea_principal", "ambiguedad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuando un párrafo no tiene una oración que resuma explícitamente la idea principal, igual se puede (y se debe) inferir una a partir del conjunto de oraciones."

pasos:
  - "La idea implícita se construye combinando todos los detalles del párrafo, no citando una sola oración."

explicacion: |
  Verdadero: la ausencia de una oración-resumen no significa que no
  haya idea principal, sólo que hay que inferirla.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "avanzado"
  tags: ["idea_principal", "objetividad"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La idea principal de un texto puede variar según lo que a cada lector le parezca más interesante del párrafo."

pasos:
  - "La idea principal es una propiedad del texto (lo que el autor quiso comunicar como central), no una preferencia subjetiva del lector."

explicacion: |
  Falso: aunque distintos lectores destaquen distintos detalles, la
  idea principal es la que el párrafo desarrolla como eje central,
  no una elección personal.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "El ejercicio regular mejora la salud física y mental"
tipo: mc
opciones_explicitas: ["El ejercicio regular mejora la salud física y mental", "Correr 30 minutos quema calorías", "El yoga reduce el estrés"]

enunciado: "\"Correr 30 minutos quema calorías. El yoga reduce el estrés. En general, el ejercicio regular mejora la salud física y mental.\" ¿Cuál es la idea principal?"

pasos:
  - "Correr y el yoga son ejemplos concretos de ejercicio que respaldan la afirmación general."

explicacion: |
  La afirmación general que engloba a los dos ejemplos (correr, yoga)
  es la idea principal.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "texto_largo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En un texto de varios párrafos, cada párrafo puede tener su propia idea principal, distinta de las de los otros párrafos."

pasos:
  - "El texto completo tiene un tema general, pero cada párrafo suele desarrollar un aspecto distinto de ese tema."

explicacion: |
  Verdadero: identificar la idea principal de CADA párrafo es el
  primer paso para armar luego un resumen de todo el texto.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "titulo"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El título de un texto siempre coincide exactamente con la idea principal del primer párrafo."

pasos:
  - "El título suele ser más corto y general que la idea principal, que es una oración completa desarrollada en el texto."

explicacion: |
  Falso: el título anticipa el tema, pero la idea principal es más
  específica y hay que construirla leyendo el párrafo.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "metodo"]

enunciado: "Ordená los pasos de la estrategia para encontrar la idea principal de un párrafo."
tipo: ordenar
opciones_explicitas:
  - "Leer el párrafo completo"
  - "Preguntarse de qué trata principalmente"
  - "Distinguir esa respuesta de los detalles que sólo la apoyan"
  - "Si no está escrita literal, resumirla con las propias palabras"
respuesta_orden:
  - "Leer el párrafo completo"
  - "Preguntarse de qué trata principalmente"
  - "Distinguir esa respuesta de los detalles que sólo la apoyan"
  - "Si no está escrita literal, resumirla con las propias palabras"

explicacion: |
  El orden va de la lectura completa a la identificación, pasando por
  descartar detalles, hasta inferir cuando no está escrita literal.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "avanzado"
  tags: ["idea_principal", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Identificar bien la idea principal es la base para poder resumir un texto y también para clasificar de qué tipo textual se trata (narrativo, expositivo, argumentativo...)."

pasos:
  - "Sin saber de qué trata un texto, no se puede decidir cómo está organizado ni para qué fue escrito."

explicacion: |
  Verdadero: por eso este tema es prerrequisito directo de \"tipos
  textuales\", el siguiente módulo de la currícula.
```
