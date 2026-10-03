# Examen jefe — [PENDIENTE #651]

> Logro #651. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **104 preguntas totales** en 5/5 secciones.

---

## Sección: conciencia-fonologica (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "basico"
  tags: ["conciencia_fonologica", "vocabulario"]

enunciado: "¿Qué es la conciencia fonológica?"
tipo: mc
opciones_explicitas:
  - "La capacidad de percibir y manipular los sonidos del habla, por separado de su significado y de la escritura"
  - "La capacidad de reconocer letras escritas en un texto"
  - "El vocabulario total que conoce una persona"
respuesta: "La capacidad de percibir y manipular los sonidos del habla, por separado de su significado y de la escritura"

explicacion: |
  Es una habilidad auditiva y oral, no visual.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "basico"
  tags: ["conciencia_fonologica"]

respuesta: verdadero
tipo: vf

enunciado: "Un chico puede tener buena conciencia fonológica sin saber todavía leer ni escribir ninguna letra."

explicacion: |
  Reconocer que dos palabras riman, por ejemplo, no requiere ver esas
  palabras escritas.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "basico"
  tags: ["silaba", "vocabulario"]

enunciado: "¿Qué es la conciencia silábica?"
tipo: mc
opciones_explicitas:
  - "La capacidad de dividir una palabra en sus sílabas (contarlas, separarlas o combinarlas)"
  - "La capacidad de reconocer si una palabra está bien escrita"
  - "La capacidad de identificar el significado de una palabra"
respuesta: "La capacidad de dividir una palabra en sus sílabas (contarlas, separarlas o combinarlas)"

explicacion: |
  Es un nivel intermedio entre 'palabra completa' y 'sonido
  individual (fonema)'.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "intermedio"
  tags: ["silaba", "problema"]

variables:
  palabras: [{palabra: "mariposa", silabas: 4}, {palabra: "computadora", silabas: 5}, {palabra: "elefante", silabas: 4}, {palabra: "casa", silabas: 2}, {palabra: "sol", silabas: 1}]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: palabras[idx].silabas
tipo: input

enunciado: "¿Cuántas sílabas tiene la palabra '{palabras[idx].palabra}'?"

explicacion: |
  Se cuenta cada golpe de voz al pronunciar la palabra despacio.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "basico"
  tags: ["rima", "vocabulario"]

enunciado: "¿Qué significa que dos palabras 'rimen' entre sí?"
tipo: mc
opciones_explicitas:
  - "Que suenan parecido a partir de la vocal acentuada hacia el final de la palabra"
  - "Que empiezan con la misma letra"
  - "Que tienen la misma cantidad de letras"
respuesta: "Que suenan parecido a partir de la vocal acentuada hacia el final de la palabra"

explicacion: |
  Es un nivel de conciencia fonológica llamado 'intrasilábica'.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "intermedio"
  tags: ["rima", "problema"]

variables:
  pares: [{a: "gato", b: "pato", rima: verdadero}, {a: "luna", b: "cuna", rima: verdadero}, {a: "flor", b: "amor", rima: verdadero}, {a: "perro", b: "cielo", rima: falso}, {a: "casa", b: "mesa", rima: falso}]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: pares[idx].rima
tipo: vf

enunciado: "¿Riman las palabras '{pares[idx].a}' y '{pares[idx].b}'?"

explicacion: |
  Hay que comparar el sonido desde la vocal acentuada hasta el final,
  no sólo mirar si 'se parecen' a simple vista.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "intermedio"
  tags: ["fonema", "vocabulario"]

enunciado: "¿Qué es un fonema?"
tipo: mc
opciones_explicitas:
  - "El sonido más chico del habla que puede cambiar el significado de una palabra si se reemplaza por otro"
  - "Cada letra del alfabeto escrito"
  - "Una sílaba completa"
respuesta: "El sonido más chico del habla que puede cambiar el significado de una palabra si se reemplaza por otro"

explicacion: |
  Cambiar el fonema /g/ por /p/ en 'gato' da 'pato' — otra palabra.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "avanzado"
  tags: ["fonema"]

respuesta: verdadero
tipo: vf

enunciado: "Un fonema (sonido) no es exactamente lo mismo que una letra (símbolo escrito) — a veces dos letras representan un solo fonema."

explicacion: |
  El dígrafo 'ch' son dos letras que representan un único sonido.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "intermedio"
  tags: ["fonema", "problema"]

tipo: completar
enunciado: "¿Con qué sonido empieza la palabra 'sol'?"
respuestas_validas:
  - "/s/"
  - "s"

explicacion: |
  Se pide el SONIDO inicial, no necesariamente el nombre de la letra.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "avanzado"
  tags: ["fonema", "problema"]

tipo: completar
enunciado: "Si a la palabra 'gato' le sacás el sonido /g/ del principio, ¿qué palabra queda?"
respuestas_validas:
  - "ato"

explicacion: |
  Es un ejercicio clásico de manipulación fonémica: quitar un sonido
  y ver qué palabra nueva resulta.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Por qué la conciencia fonológica es considerada el predictor más fuerte del éxito en la lectura inicial?"
tipo: mc
opciones_explicitas:
  - "Porque sin distinguir bien los sonidos del habla, es muy difícil conectar cada letra con el sonido que representa (el paso siguiente: decodificación)"
  - "Porque los chicos con buena conciencia fonológica ya saben leer de antemano"
  - "No existe ninguna relación real entre ambas habilidades"
respuesta: "Porque sin distinguir bien los sonidos del habla, es muy difícil conectar cada letra con el sonido que representa (el paso siguiente: decodificación)"

explicacion: |
  Es la razón por la que este módulo es la raíz de toda la rama de
  Lengua.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "intermedio"
  tags: ["fonema"]

respuesta: verdadero
tipo: vf

enunciado: "De los niveles de conciencia fonológica, el fonémico (identificar y manipular sonidos individuales) es el más fino y, en general, el más difícil de dominar."

explicacion: |
  Es más fácil notar que dos palabras riman (nivel más grande) que
  aislar un único sonido dentro de una palabra (nivel más chico).
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Un maestro de sala de 5 años pide a los chicos que den una palmada por cada sílaba de su nombre. ¿Qué habilidad está trabajando con esta actividad?"
tipo: mc
opciones_explicitas:
  - "Conciencia silábica: dividir una palabra en sus partes sonoras, sin necesitar leer ni escribir nada"
  - "Decodificación: convertir letras en sonidos"
  - "Comprensión lectora de un texto"
respuesta: "Conciencia silábica: dividir una palabra en sus partes sonoras, sin necesitar leer ni escribir nada"

explicacion: |
  Es una actividad típica de nivel inicial, previa a cualquier
  trabajo con letras.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "avanzado"
  tags: ["fonema", "problema"]

variables:
  palabras: [{palabra: "sol", fonemas: 3}, {palabra: "pan", fonemas: 3}, {palabra: "gato", fonemas: 4}, {palabra: "casa", fonemas: 4}]
  idx: uno_de([0, 1, 2, 3])

respuesta: palabras[idx].fonemas
tipo: input

enunciado: "¿Cuántos fonemas (sonidos) tiene la palabra '{palabras[idx].palabra}'?"

explicacion: |
  Se cuenta cada sonido distinto, no cada letra — en estas palabras
  coinciden, pero no siempre es así.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "avanzado"
  tags: ["fonema"]

respuesta: verdadero
tipo: vf

enunciado: "El dígrafo 'ch' (como en 'chico') está formado por dos letras pero representa un único fonema (sonido)."

explicacion: |
  Es el ejemplo clásico de que 'cantidad de letras' y 'cantidad de
  fonemas' de una palabra no siempre coinciden.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "avanzado"
  tags: ["fonema", "problema"]

respuesta: 4
tipo: input

enunciado: "La palabra 'queso' tiene 5 letras (q-u-e-s-o), pero el grupo 'qu' representa un único sonido /k/. ¿Cuántos FONEMAS tiene 'queso'?"

pasos:
  - "Sonidos: /k/ (qu) - /e/ - /s/ - /o/ = 4 fonemas, aunque tenga 5 letras"

explicacion: |
  Es la misma idea del dígrafo, aplicada al grupo 'qu'.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "basico"
  tags: ["rima", "aplicacion"]

enunciado: "Muchas canciones y poesías infantiles usan rimas ('un elefante se balanceaba, sobre la tela de una araña') a propósito. ¿Por qué son útiles para trabajar conciencia fonológica en el aula?"
tipo: mc
opciones_explicitas:
  - "Porque ayudan a los chicos a notar de forma natural y divertida cómo suenan las palabras, entrenando el oído antes de trabajar con letras"
  - "Porque enseñan directamente a escribir sin errores de ortografía"
  - "No tienen ninguna utilidad pedagógica real"
respuesta: "Porque ayudan a los chicos a notar de forma natural y divertida cómo suenan las palabras, entrenando el oído antes de trabajar con letras"

explicacion: |
  Es una de las razones por las que la poesía y las canciones son tan
  usadas en la alfabetización inicial.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "intermedio"
  tags: ["ordenar"]

enunciado: "Ordená estos niveles de conciencia fonológica, del sonido más 'grande' (más fácil de percibir) al más 'chico' (más fino)."
tipo: ordenar
opciones_explicitas:
  - "Conciencia fonémica (sonidos individuales)"
  - "Conciencia de palabras (una oración se divide en palabras)"
  - "Conciencia silábica (una palabra se divide en sílabas)"
  - "Conciencia intrasilábica (rima)"
respuesta_orden: ["Conciencia de palabras (una oración se divide en palabras)", "Conciencia silábica (una palabra se divide en sílabas)", "Conciencia intrasilábica (rima)", "Conciencia fonémica (sonidos individuales)"]
explicacion: |
  El desarrollo va de unidades más grandes y fáciles de percibir a
  unidades cada vez más chicas y finas.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "avanzado"
  tags: ["fonema", "problema"]

tipo: completar
enunciado: "Si en la palabra 'pan' cambiás el sonido /p/ inicial por /f/, ¿qué palabra se forma?"
respuestas_validas:
  - "fan"

explicacion: |
  Es otro ejercicio clásico de manipulación fonémica: sustituir un
  sonido por otro.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve trabajar la conciencia fonológica antes de enseñar a leer formalmente?"
tipo: mc
opciones_explicitas:
  - "Porque prepara el oído para distinguir los sonidos del habla, la base necesaria para poder conectar después cada letra con su sonido correspondiente"
  - "Porque enseña directamente el significado de las palabras nuevas"
  - "No tiene relación real con aprender a leer"
respuesta: "Porque prepara el oído para distinguir los sonidos del habla, la base necesaria para poder conectar después cada letra con su sonido correspondiente"

explicacion: |
  Es el punto de partida de toda la rama de Lengua — el siguiente
  paso es `../decodificacion-y-fluidez/`.
```

## Sección: ortografia-y-tildacion (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "basico"
  tags: ["agudas"]

variables:
  n: uno_de([1, 1])

respuesta: "aguda"
tipo: mc
opciones_explicitas: ["aguda", "grave", "esdrújula"]

enunciado: "En la palabra \"camión\", la sílaba tónica es la última (\"ción\"). ¿Cómo se clasifica esta palabra?"

pasos:
  - "La sílaba tónica en la última posición define a las palabras agudas."

explicacion: |
  Las agudas tienen su sílaba tónica en la última posición.
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "basico"
  tags: ["graves"]

variables:
  n: uno_de([1, 1])

respuesta: "grave"
tipo: mc
opciones_explicitas: ["aguda", "grave", "esdrújula"]

enunciado: "En la palabra \"árbol\", la sílaba tónica es la penúltima (\"ár\"). ¿Cómo se clasifica esta palabra?"

pasos:
  - "La sílaba tónica en la penúltima posición define a las palabras graves o llanas."

explicacion: |
  Las graves (o llanas) tienen su sílaba tónica en la penúltima
  posición.
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "basico"
  tags: ["esdrujulas"]

variables:
  n: uno_de([1, 1])

respuesta: "esdrújula"
tipo: mc
opciones_explicitas: ["aguda", "grave", "esdrújula"]

enunciado: "En la palabra \"médico\", la sílaba tónica es la antepenúltima (\"mé\"). ¿Cómo se clasifica esta palabra?"

pasos:
  - "La sílaba tónica en la antepenúltima posición define a las palabras esdrújulas."

explicacion: |
  Las esdrújulas tienen su sílaba tónica en la antepenúltima
  posición.
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["sobresdrujulas"]

variables:
  n: uno_de([1, 1])

respuesta: "sobresdrújula"
tipo: mc
opciones_explicitas: ["esdrújula", "sobresdrújula", "aguda"]

enunciado: "En la palabra \"cuéntaselo\", la sílaba tónica (\"cuén\") está antes de la antepenúltima. ¿Cómo se clasifica esta palabra?"

pasos:
  - "Cuando la sílaba tónica está más atrás que la antepenúltima, la palabra es sobresdrújula."

explicacion: |
  Las sobresdrújulas son frecuentes en verbos con pronombres
  enclíticos (\"cuéntaselo\", \"tráemelo\").
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["agudas", "regla"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las palabras agudas llevan tilde cuando terminan en n, s o vocal."

pasos:
  - "\"Camión\" (termina en n), \"aquí\" (vocal), \"compás\" (s) llevan tilde por ser agudas terminadas así."

explicacion: |
  Verdadero: es la regla básica de tildación de agudas.
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["graves", "regla"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las palabras graves llevan tilde cuando terminan en cualquier consonante que NO sea n o s."

pasos:
  - "\"Árbol\" (termina en l), \"fácil\" (termina en l) llevan tilde. \"Casa\" (vocal), \"joven\" (n) no la llevan."

explicacion: |
  Verdadero: es la regla básica de tildación de graves, casi espejo
  de la de agudas.
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "basico"
  tags: ["esdrujulas", "regla"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las palabras esdrújulas llevan tilde siempre, sin excepción."

pasos:
  - "A diferencia de agudas y graves, no depende de en qué letra termina la palabra."

explicacion: |
  Verdadero: la esdrújula es la única clasificación sin condición
  sobre la terminación.
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["sobresdrujulas", "regla"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las palabras sobresdrújulas llevan tilde siempre, igual que las esdrújulas."

pasos:
  - "\"Cuéntaselo\", \"tráemelo\" siempre se tildan, sin condición de terminación."

explicacion: |
  Verdadero: sobresdrújulas y esdrújulas comparten la regla de tilde
  obligatoria sin excepción.
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["agudas", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La palabra \"reloj\" (aguda, termina en \"j\") debería llevar tilde según la regla de las agudas."

pasos:
  - "La regla exige terminar en n, s o vocal; \"j\" no cumple ninguna de esas tres condiciones."

explicacion: |
  Falso: \"reloj\" es aguda pero no termina en n/s/vocal, por eso no
  lleva tilde.
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["graves", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La palabra \"joven\" (grave, termina en \"n\") debería llevar tilde según la regla de las graves."

pasos:
  - "La regla de graves exige terminar en consonante distinta de n/s; \"n\" está excluida de esa condición."

explicacion: |
  Falso: \"joven\" es grave terminada en \"n\", por eso no lleva
  tilde (justo lo opuesto a la regla de agudas).
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["tilde_diacritica"]

variables:
  n: uno_de([1, 1])

respuesta: "él"
tipo: completar

enunciado: "El pronombre personal (\"... vino a la fiesta\") se escribe con tilde diacrítica como..."

pasos:
  - "\"Él\" (pronombre, con tilde) se distingue de \"el\" (artículo, sin tilde)."

explicacion: |
  La tilde diacrítica distingue el pronombre \"él\" del artículo
  \"el\".
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["tilde_diacritica"]

variables:
  n: uno_de([1, 1])

respuesta: "tú"
tipo: completar

enunciado: "El pronombre personal (\"... sabés la respuesta\") se escribe con tilde diacrítica como..."

pasos:
  - "\"Tú\" (pronombre, con tilde) se distingue de \"tu\" (posesivo, sin tilde: \"tu casa\")."

explicacion: |
  La tilde diacrítica distingue el pronombre \"tú\" del posesivo
  \"tu\".
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["tilde_diacritica"]

variables:
  usos: ["afirmación (\"... quiero ir\")", "condicional (\"... llueve, no salgo\")"]
  respuestas: ["sí", "si"]
  idx: uno_de([0, 1])

respuesta: respuestas[idx]
tipo: completar

enunciado: "Para el uso de {usos[idx]}, se escribe..."

pasos:
  - "\"Sí\" (afirmación/reflexivo, con tilde) se distingue de \"si\" (condicional, sin tilde)."

explicacion: |
  La tilde diacrítica distingue la afirmación \"sí\" de la
  conjunción condicional \"si\".
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["tilde_diacritica", "sentido"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Confundir \"cómo\" (interrogativo, con tilde) con \"como\" (comparativo, sin tilde) puede cambiar el sentido de una oración."

pasos:
  - "\"¿Cómo comiste?\" (pregunta por la manera) vs. \"Como comiste, te vas\" (comparativo/causal, sin pregunta)."

explicacion: |
  Verdadero: la tilde diacrítica no es un capricho ortográfico, marca
  una diferencia real de significado.
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "avanzado"
  tags: ["diptongo", "hiato"]

variables:
  palabras: ["cielo", "país"]
  tipos: ["diptongo", "hiato"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["diptongo", "hiato"]

enunciado: "En la palabra \"{palabras[idx]}\", las dos vocales juntas forman un..."

pasos:
  - "\"Cielo\": vocal fuerte+débil en la misma sílaba = diptongo. \"País\": vocal fuerte + débil tónica en sílabas distintas = hiato."

explicacion: |
  El diptongo mantiene las vocales en una sílaba; el hiato las separa
  en sílabas distintas.
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "avanzado"
  tags: ["hiato", "regla"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En palabras como \"país\" o \"caída\", la vocal débil tónica lleva tilde aunque la palabra no cumpla la regla general de graves/agudas, específicamente para marcar el hiato."

pasos:
  - "Esa tilde no sigue la regla normal de acentuación, es una excepción para señalar que las vocales se separan en sílabas distintas."

explicacion: |
  Verdadero: el hiato con vocal débil tónica tiene una regla propia
  de tildación, distinta de la regla general.
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "avanzado"
  tags: ["ortografia_y_tildacion", "practica"]

variables:
  palabras: ["facil", "cancion", "sabado"]
  correctas: ["fácil", "canción", "sábado"]
  idx: uno_de([0, 1, 2])

respuesta: correctas[idx]
tipo: completar

enunciado: "Escribí correctamente la palabra \"{palabras[idx]}\", agregando la tilde si corresponde."

pasos:
  - "Identificar la sílaba tónica, clasificar la palabra (aguda/grave/esdrújula) y aplicar la regla correspondiente."

explicacion: |
  Cada palabra requiere aplicar la regla de tildación según su
  clasificación específica.
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "intermedio"
  tags: ["ortografia_y_tildacion", "metodo"]

enunciado: "Ordená los pasos para decidir si una palabra necesita tilde."
tipo: ordenar
opciones_explicitas:
  - "Identificar la sílaba tónica de la palabra"
  - "Contar su posición (última, penúltima, antepenúltima o antes) para clasificarla"
  - "Revisar en qué letra termina la palabra"
  - "Aplicar la regla correspondiente a esa clasificación (aguda/grave/esdrújula/sobresdrújula)"
respuesta_orden: ["Identificar la sílaba tónica de la palabra", "Contar su posición (última, penúltima, antepenúltima o antes) para clasificarla", "Revisar en qué letra termina la palabra", "Aplicar la regla correspondiente a esa clasificación (aguda/grave/esdrújula/sobresdrújula)"]
explicacion: |
  El proceso parte de identificar la sílaba tónica, la base de toda
  la tildación en español.
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "avanzado"
  tags: ["ortografia_y_tildacion", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de puntuar correctamente una oración, hace falta poder escribir bien cada palabra que la compone, incluida su tildación."

pasos:
  - "Ver `../signos-de-puntuacion/`: la corrección formal avanza de la palabra individual a la oración completa."

explicacion: |
  Verdadero: por eso ortografía y tildación es prerrequisito directo
  de signos de puntuación, el siguiente tema de la cadena.
```

```
metadata:
  materia: "lengua"
  tema: "ortografia_y_tildacion"
  nivel: "avanzado"
  tags: ["ortografia_y_tildacion", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Escribir \"¿Dónde estás?\" con tilde diacrítica en vez de \"donde\" sin tilde evita que se confunda una pregunta con una oración relativa (\"el lugar donde estás\")."

pasos:
  - "La tilde diacrítica marca específicamente el uso interrogativo o exclamativo de esas palabras."

explicacion: |
  Verdadero: aplicar correctamente la tildación diacrítica evita
  ambigüedades reales de sentido en la escritura.
```

## Sección: decodificacion-y-fluidez (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "basico"
  tags: ["decodificacion", "vocabulario"]

enunciado: "¿Qué es la decodificación, en el proceso de aprender a leer?"
tipo: mc
opciones_explicitas:
  - "El proceso de convertir letras en sonidos para reconstruir la palabra hablada"
  - "El proceso de entender el significado de un texto completo"
  - "El proceso de memorizar palabras completas sin analizar sus letras"
respuesta: "El proceso de convertir letras en sonidos para reconstruir la palabra hablada"

explicacion: |
  Aplica directo la conciencia fonológica al código escrito.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "basico"
  tags: ["fluidez", "vocabulario"]

enunciado: "¿Qué es la fluidez lectora?"
tipo: mc
opciones_explicitas:
  - "Leer con precisión, velocidad y prosodia adecuadas, de forma automática"
  - "Leer lo más rápido posible, sin importar la precisión"
  - "Conocer el significado de todas las palabras de un texto"
respuesta: "Leer con precisión, velocidad y prosodia adecuadas, de forma automática"

explicacion: |
  Velocidad sola, sin precisión ni entonación, no es fluidez real.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["ppm", "problema"]

variables:
  palabras: uno_de([80, 100, 120])
  segundos: 60

respuesta: redondear(palabras / segundos * 60, 0)
tipo: input
unidad: "palabras por minuto"

enunciado: "Un alumno lee {palabras} palabras correctamente en {segundos} segundos. ¿Cuál es su fluidez en palabras por minuto (PPM)?"

pasos:
  - "PPM = ({palabras}/{segundos}) × 60 = {redondear(palabras / segundos * 60, 0)}"

explicacion: |
  Como el tiempo ya es exactamente 1 minuto (60 segundos), el PPM
  coincide directamente con la cantidad de palabras leídas.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  palabras: uno_de([60, 90])
  segundos: 45

respuesta: redondear(palabras / segundos * 60, 0)
tipo: input
unidad: "palabras por minuto"

enunciado: "Un alumno lee {palabras} palabras correctamente en sólo {segundos} segundos (menos de un minuto). ¿Cuál es su fluidez en palabras por minuto?"

pasos:
  - "PPM = ({palabras}/{segundos}) × 60 = {redondear(palabras / segundos * 60, 0)}"

explicacion: |
  Se escala el resultado a 'por minuto', igual que cualquier tasa
  (como la velocidad = distancia/tiempo).
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["decodificacion"]

respuesta: verdadero
tipo: vf

enunciado: "La correspondencia entre letras y sonidos en español es, en general, más regular y predecible que en inglés, donde una misma letra puede sonar de formas muy distintas según la palabra."

explicacion: |
  Por eso decodificar en español suele ser más rápido de aprender una
  vez conocidas las reglas básicas.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Por qué la fluidez lectora es un puente hacia la comprensión de un texto?"
tipo: mc
opciones_explicitas:
  - "Porque cuando decodificar se vuelve automático, la atención que antes se gastaba en 'sonar' cada palabra queda libre para entender el significado"
  - "Porque leer rápido garantiza automáticamente entender el texto, sin ninguna excepción"
  - "No existe ninguna relación real entre fluidez y comprensión"
respuesta: "Porque cuando decodificar se vuelve automático, la atención que antes se gastaba en 'sonar' cada palabra queda libre para entender el significado"

explicacion: |
  La capacidad de atención es limitada — automatizar un paso libera
  recursos para el siguiente.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["fluidez"]

respuesta: verdadero
tipo: vf

enunciado: "Leer muy rápido pero con errores o sin ninguna entonación (sin prosodia) no cuenta como verdadera fluidez lectora — hacen falta las tres cosas juntas: precisión, velocidad y prosodia."

explicacion: |
  Un lector 'fluido' pero impreciso no está realmente decodificando
  bien.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  palabras_a: 100
  segundos_a: 50
  palabras_b: 90
  segundos_b: 60

respuesta: (palabras_a / segundos_a * 60) > (palabras_b / segundos_b * 60)
tipo: vf

enunciado: "Lectura A: {palabras_a} palabras en {segundos_a} segundos. Lectura B: {palabras_b} palabras en {segundos_b} segundos. ¿La fluidez en PPM de la Lectura A es MAYOR que la de la Lectura B?"

explicacion: |
  PPM(A) = {redondear(palabras_a / segundos_a * 60, 0)}; PPM(B) =
  {redondear(palabras_b / segundos_b * 60, 0)} — hay que calcular la
  tasa, no comparar sólo la cantidad de palabras.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Por qué conviene medir la fluidez de un alumno en varios textos y días distintos, en vez de con una sola lectura?"
tipo: mc
opciones_explicitas:
  - "Porque una sola lectura puede estar afectada por factores puntuales (texto más difícil, cansancio, nervios) — promediar varias da una estimación más confiable"
  - "Porque la fluidez de una persona cambia por completo de un día a otro sin ningún patrón"
  - "No hay ninguna ventaja real en medir más de una vez"
respuesta: "Porque una sola lectura puede estar afectada por factores puntuales (texto más difícil, cansancio, nervios) — promediar varias da una estimación más confiable"

explicacion: |
  Es la misma razón por la que `../../matematica/muestreo-y-sesgo/`
  prefiere una muestra a un único dato suelto.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  ppm1: uno_de([95, 100])
  ppm2: uno_de([105, 110])
  ppm3: uno_de([90, 115])

respuesta: redondear(promedio([ppm1, ppm2, ppm3]), 1)
tipo: input
tolerancia_abs: 0.1
unidad: "palabras por minuto"

enunciado: "Un alumno leyó a {ppm1}, {ppm2} y {ppm3} palabras por minuto en tres textos distintos. ¿Cuál es su fluidez promedio?"

pasos:
  - "Promedio = ({ppm1}+{ppm2}+{ppm3}) / 3 = {redondear(promedio([ppm1, ppm2, ppm3]), 1)}"

explicacion: |
  El promedio da una estimación más representativa que cualquiera de
  las tres lecturas por separado.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["prosodia", "vocabulario"]

enunciado: "¿Qué es la prosodia, como parte de la fluidez lectora?"
tipo: mc
opciones_explicitas:
  - "La entonación y el ritmo naturales con que se lee, respetando pausas, signos de puntuación y énfasis"
  - "La cantidad de palabras leídas por minuto"
  - "La cantidad de errores cometidos al leer"
respuesta: "La entonación y el ritmo naturales con que se lee, respetando pausas, signos de puntuación y énfasis"

explicacion: |
  Leer 'como se habla', no en un tono monótono palabra por palabra.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["decodificacion"]

respuesta: verdadero
tipo: vf

enunciado: "El objetivo final de aprender a decodificar es que el proceso se vuelva automático, sin necesitar esfuerzo consciente para convertir cada letra en su sonido."

explicacion: |
  Cuando eso pasa, decodificar deja de competir por atención con
  comprender el texto.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  ppm: uno_de([80, 100])
  palabras_texto: uno_de([40, 50])

respuesta: redondear(palabras_texto / ppm * 60, 0)
tipo: input
unidad: "segundos"

enunciado: "Un alumno lee a {ppm} palabras por minuto. Si un texto tiene {palabras_texto} palabras, ¿cuánto tiempo (en segundos) debería tardar en leerlo completo?"

pasos:
  - "Tiempo = ({palabras_texto}/{ppm}) × 60 = {redondear(palabras_texto / ppm * 60, 0)} segundos"

explicacion: |
  Es la fórmula de PPM despejada para el tiempo en vez de para la
  velocidad.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Muchas escuelas usan 'registros de lectura oral' (running records), donde un docente escucha leer a un alumno en voz alta y anota errores, tiempo y entonación. ¿Para qué sirve esta evaluación?"
tipo: mc
opciones_explicitas:
  - "Para medir el progreso real de la fluidez lectora de un alumno a lo largo del tiempo, con datos concretos (precisión, PPM, prosodia)"
  - "Sólo sirve para calificar la letra del alumno"
  - "No tiene ninguna utilidad pedagógica real"
respuesta: "Para medir el progreso real de la fluidez lectora de un alumno a lo largo del tiempo, con datos concretos (precisión, PPM, prosodia)"

explicacion: |
  Es la aplicación práctica de todo lo visto en este módulo.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  palabras_a: 70
  segundos_a: 60
  palabras_b: 70
  segundos_b: 90

respuesta: (palabras_a / segundos_a * 60) > (palabras_b / segundos_b * 60)
tipo: vf

enunciado: "Dos alumnos leen el mismo texto de {palabras_a} palabras: el Alumno A tarda {segundos_a} segundos, el Alumno B tarda {segundos_b} segundos. ¿El Alumno A tiene mayor fluidez en PPM?"

explicacion: |
  Con la misma cantidad de palabras, tardar MENOS tiempo da un PPM
  MAYOR.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Qué relación tiene la decodificación con `../conciencia-fonologica/`?"
tipo: mc
opciones_explicitas:
  - "La decodificación aplica al código escrito la distinción de sonidos que ya construyó la conciencia fonológica — sin distinguir sonidos, no se puede saber qué sonido corresponde a cada letra"
  - "No tienen ninguna relación real entre sí"
  - "La decodificación reemplaza por completo la necesidad de conciencia fonológica"
respuesta: "La decodificación aplica al código escrito la distinción de sonidos que ya construyó la conciencia fonológica — sin distinguir sonidos, no se puede saber qué sonido corresponde a cada letra"

explicacion: |
  Es el prerrequisito formal de este módulo.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  palabras: uno_de([150, 200])
  segundos: 120

respuesta: redondear(palabras / segundos * 60, 0)
tipo: input
unidad: "palabras por minuto"

enunciado: "Un alumno lee un texto largo: {palabras} palabras en {segundos} segundos (2 minutos). ¿Cuál es su fluidez en PPM?"

pasos:
  - "PPM = ({palabras}/{segundos}) × 60 = {redondear(palabras / segundos * 60, 0)}"

explicacion: |
  La fórmula funciona igual sin importar si el tiempo es más o menos
  de un minuto — siempre se escala a 'por minuto'.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["fluidez"]

respuesta: verdadero
tipo: vf

enunciado: "La fluidez lectora de una misma persona puede variar según qué tan difícil o familiar sea el texto que está leyendo, no es un número fijo e invariable."

explicacion: |
  Es otra razón por la que conviene promediar mediciones de varios
  textos distintos.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["aplicacion"]

enunciado: "Un alumno decodifica correctamente cada palabra de un texto, pero al preguntarle de qué trataba, no puede responder. ¿Qué explica esto, en términos de fluidez?"
tipo: mc
opciones_explicitas:
  - "Es posible que la decodificación todavía no sea automática para ese alumno, así que gasta toda su atención 'sonando' las palabras y no le queda capacidad para comprender el significado"
  - "Es imposible que esto pase: decodificar bien siempre implica comprender el texto"
  - "El alumno tiene un problema de vocabulario, sin ninguna relación con la fluidez"
respuesta: "Es posible que la decodificación todavía no sea automática para ese alumno, así que gasta toda su atención 'sonando' las palabras y no le queda capacidad para comprender el significado"

explicacion: |
  Es exactamente el fenómeno que explica por qué la fluidez es un
  puente necesario hacia la comprensión.
```

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven la decodificación y la fluidez lectora?"
tipo: mc
opciones_explicitas:
  - "Para convertir letras en sonidos de forma cada vez más automática, liberando la atención necesaria para poder comprender lo que se lee"
  - "Sólo sirven para leer más rápido, sin ninguna relación con la comprensión"
  - "Sólo se aplican en los primeros meses de la alfabetización, después dejan de ser relevantes"
respuesta: "Para convertir letras en sonidos de forma cada vez más automática, liberando la atención necesaria para poder comprender lo que se lee"

explicacion: |
  Es el puente entre `../conciencia-fonologica/` y
  `../vocabulario-y-familia-de-palabras/`, el módulo que sigue.
```

## Sección: signos-de-puntuacion (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "basico"
  tags: ["puntuacion", "sentido"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Vamos a comer, niños\" (invitación) y \"vamos a comer niños\" (sin coma) tienen sentidos completamente distintos por la sola presencia o ausencia de una coma."

pasos:
  - "La coma de vocativo separa a quién se dirige la oración del resto."

explicacion: |
  Verdadero: es el ejemplo clásico de cómo la puntuación cambia el
  significado, no sólo el estilo.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "basico"
  tags: ["coma", "enumeracion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En \"Compré pan, leche, huevos y manteca\", las comas separan los elementos de una enumeración, sin poner coma antes del \"y\" final."

pasos:
  - "La regla general del español no usa coma antes de \"y\" en una enumeración simple."

explicacion: |
  Verdadero: es el uso más común de la coma, para listar elementos.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["coma", "aclaracion"]

variables:
  n: uno_de([1, 1])

respuesta: "coma de aclaración"
tipo: mc
opciones_explicitas: ["coma de aclaración", "coma de enumeración", "coma de vocativo"]

enunciado: "En \"Mi hermano, que vive en Rosario, viene este fin de semana\", las comas que encierran \"que vive en Rosario\" son de tipo..."

pasos:
  - "Encierran información adicional no esencial para el sentido básico de la oración."

explicacion: |
  La coma de aclaración encierra información adicional, que se podría
  quitar sin romper la oración.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["coma", "vocativo"]

variables:
  n: uno_de([1, 1])

respuesta: "coma de vocativo"
tipo: mc
opciones_explicitas: ["coma de vocativo", "coma de enumeración", "coma de aclaración"]

enunciado: "En \"Juan, vení un segundo\", la coma que separa \"Juan\" del resto es de tipo..."

pasos:
  - "Separa a quién se dirige la oración (el vocativo) del resto del enunciado."

explicacion: |
  La coma de vocativo separa el nombre de la persona a la que se le
  habla directamente.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["coma", "conectores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Se coloca coma antes de conectores adversativos como \"pero\", \"sino\" y \"aunque\": \"Estudió, pero no aprobó\"."

pasos:
  - "Ver `../oracion-compuesta-coordinacion-y-subordinacion/`: es la coma que antecede a la coordinación adversativa."

explicacion: |
  Verdadero: es una regla fija de puntuación para estos conectores.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "basico"
  tags: ["punto"]

variables:
  usos: ["separar oraciones dentro del mismo párrafo", "separar párrafos, marcando cambio de idea principal"]
  tipos: ["punto y seguido", "punto y aparte"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["punto y seguido", "punto y aparte", "punto final"]

enunciado: "El uso de \"{usos[idx]}\" corresponde a..."

pasos:
  - "Punto y seguido queda dentro del mismo párrafo; punto y aparte inicia uno nuevo."

explicacion: |
  El tipo de punto usado depende de si se cambia de párrafo o se
  sigue en el mismo.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["punto", "idea_principal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El punto y aparte suele marcar que la idea principal del texto cambia, iniciando un nuevo párrafo."

pasos:
  - "Ver `../comprension-idea-principal/`: cada párrafo suele desarrollar una idea principal distinta."

explicacion: |
  Verdadero: la división en párrafos (marcada por punto y aparte)
  suele corresponder a un cambio de idea principal.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["punto_y_coma"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El punto y coma se usa para separar elementos de una enumeración que ya contienen comas internamente, o para unir dos oraciones muy relacionadas sin conector."

pasos:
  - "\"Juan estudia; María trabaja\" es un ejemplo de unión de dos oraciones relacionadas sin conector explícito."

explicacion: |
  Verdadero: son los dos usos principales del punto y coma en
  español.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["dos_puntos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los dos puntos anuncian lo que sigue: una enumeración, una cita textual, o una explicación/consecuencia de lo anterior."

pasos:
  - "\"Faltaban tres cosas: pan, leche y manteca\" anuncia la enumeración que sigue."

explicacion: |
  Verdadero: es la función central de los dos puntos en español.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "basico"
  tags: ["interrogacion", "exclamacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En español, los signos de interrogación y exclamación se abren y se cierran (¿...?, ¡...!), a diferencia del inglés, que sólo los cierra."

pasos:
  - "Ver `../oraciones-negativas-e-interrogativas/`: es una diferencia ortográfica propia del español."

explicacion: |
  Verdadero: el uso del signo de apertura es obligatorio en español,
  a diferencia de otros idiomas.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["comillas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las comillas se usan para citas textuales o para señalar que una palabra se usa en sentido especial o irónico."

pasos:
  - "Ambos usos marcan que ese fragmento no es \"habla directa\" del propio autor en su sentido literal habitual."

explicacion: |
  Verdadero: son los dos usos principales de las comillas.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["raya", "genero_narrativo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La raya o guion largo se usa para introducir cada intervención de un diálogo en un texto narrativo."

pasos:
  - "Ver `../genero-narrativo/`: es distinto de las acotaciones entre paréntesis del género dramático."

explicacion: |
  Verdadero: la raya de diálogo es la marca típica de las
  intervenciones de personajes dentro de la prosa narrativa.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "avanzado"
  tags: ["raya", "genero_dramatico", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La raya de diálogo narrativo y las acotaciones entre paréntesis del género dramático cumplen exactamente la misma función."

pasos:
  - "Ver `../genero-dramatico/`: la raya introduce lo que dice un personaje en prosa; la acotación indica gestos/tono, no es diálogo."

explicacion: |
  Falso: son marcas distintas para funciones distintas, propias de
  géneros distintos (narrativo vs. dramático).
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["coma", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "vamos a comer, abuela"
tipo: mc
opciones_explicitas: ["vamos a comer, abuela", "vamos a comer abuela"]

enunciado: "¿Cuál de estas dos versiones usa correctamente la coma de vocativo para invitar a la abuela a comer (sin comérsela)?"

pasos:
  - "La coma de vocativo separa el nombre de la persona a la que se dirige la oración."

explicacion: |
  Sin la coma, \"abuela\" pasa a leerse como objeto directo del
  verbo comer, cambiando radicalmente el sentido.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "avanzado"
  tags: ["punto_y_coma", "coma", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El punto y coma y la coma son intercambiables en cualquier contexto, sin diferencia real de uso."

pasos:
  - "El punto y coma marca una pausa mayor que la coma, y se usa en casos específicos (enumeraciones con comas internas, unión de oraciones relacionadas)."

explicacion: |
  Falso: cada signo tiene reglas de uso propias, no son
  intercambiables libremente.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["dos_puntos", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "Faltaban tres cosas: pan, leche y manteca"
tipo: mc
opciones_explicitas: ["Faltaban tres cosas: pan, leche y manteca", "Faltaban tres cosas, pan, leche y manteca"]

enunciado: "¿Cuál de estas dos versiones usa correctamente los dos puntos para anunciar la enumeración que sigue?"

pasos:
  - "Los dos puntos anuncian explícitamente que a continuación viene la enumeración prometida."

explicacion: |
  Los dos puntos son el signo correcto para anunciar una enumeración,
  no una coma.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "avanzado"
  tags: ["puntuacion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "Juan, mi mejor amigo, estudió mucho, pero no aprobó el examen."
tipo: mc
opciones_explicitas: ["Juan, mi mejor amigo, estudió mucho, pero no aprobó el examen.", "Juan mi mejor amigo estudió mucho pero no aprobó el examen."]

enunciado: "¿Cuál versión puntúa correctamente combinando coma de aclaración (\"mi mejor amigo\") y coma antes de conector adversativo (\"pero\")?"

pasos:
  - "Ambas comas cumplen funciones distintas: aclaración y antes de \"pero\"."

explicacion: |
  La combinación correcta de ambos usos de coma hace que la oración
  larga se lea sin ambigüedad.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["puntuacion", "metodo"]

enunciado: "Ordená los pasos para revisar la puntuación de un párrafo propio."
tipo: ordenar
opciones_explicitas:
  - "Revisar si hay enumeraciones, aclaraciones o vocativos que necesiten coma"
  - "Revisar si hay conectores adversativos que necesiten coma antes"
  - "Decidir dónde termina cada oración (punto y seguido) y cada párrafo (punto y aparte)"
  - "Revisar si hace falta punto y coma o dos puntos en algún tramo específico"
respuesta_orden: ["Revisar si hay enumeraciones, aclaraciones o vocativos que necesiten coma", "Revisar si hay conectores adversativos que necesiten coma antes", "Decidir dónde termina cada oración (punto y seguido) y cada párrafo (punto y aparte)", "Revisar si hace falta punto y coma o dos puntos en algún tramo específico"]
explicacion: |
  El proceso va de los usos más frecuentes de la coma a la
  organización general en oraciones y párrafos, y termina con los
  signos más específicos.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "avanzado"
  tags: ["puntuacion", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sin dominar coma, punto, punto y coma y dos puntos, combinar oraciones largas y complejas en un texto se vuelve ilegible, aunque la gramática de cada oración individual sea correcta."

pasos:
  - "Ver `../produccion-escrita-compleja/`: la puntuación es lo que hace legible un texto con oraciones compuestas y varias ideas encadenadas."

explicacion: |
  Verdadero: por eso signos de puntuación es prerrequisito directo de
  producción escrita compleja, el siguiente tema de la cadena.
```

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "avanzado"
  tags: ["puntuacion", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al escribir un mensaje importante (un mail formal, una consigna de examen), revisar la puntuación es tan necesario como revisar la ortografía, porque ambas pueden generar ambigüedad si están mal."

pasos:
  - "Una coma mal puesta puede cambiar completamente lo que se está pidiendo o afirmando."

explicacion: |
  Verdadero: la puntuación es una herramienta práctica de precisión
  comunicativa, no un detalle decorativo.
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

