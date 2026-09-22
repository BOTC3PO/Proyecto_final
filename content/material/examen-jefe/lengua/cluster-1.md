# Examen jefe — [PENDIENTE #651]

> Logro #651. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **109 preguntas totales** en 5/5 secciones.

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
respuestas_validas:
  - "permanente"
  - "efímero"

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
  escenario: uno_de([["piedra", "cincel"], ["papiro", "caña"], ["papel", "pluma"], ["pantalla", "teclado"]])

tipo: completar

enunciado: "La tecnología de la escritura evoluciona junto a sus soportes. Por ejemplo, si el soporte es {escenario[0]}, la herramienta tradicional es un {escenario[1]}."

respuesta: escenario[1]

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

respuesta_orden: ["Pensamiento", "Codificación visual", "Soporte físico", "Lectura/Interpretación"]

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
respuestas_validas:
  - "sonidos"
  - "fonemas"

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

respuesta_orden: ["pictográfico", "silábico", "alfabético"]
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
respuestas_validas:
  - "Mediterráneo oriental"

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

respuesta: "griego"
tipo: completar
respuestas_validas:
  - "griego"

enunciado: "El alfabeto ___ y el alfabeto latino son descendientes directos de las innovaciones de la escritura alfabética antigua."

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
  datos: [["logográfico", "alta", "complejo"], ["silábico", "media", "intermedio"], ["alfabético", "baja", "simple"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
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

respuesta_orden: ["Logográfico", "Silábico", "Alfabético"]
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
respuesta: "Permitió la transmisión de conocimientos sin depender de la memoria humana"

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
  escenarios: ["un consejo de un abuelo a su nieto, transmitido solo de forma oral", "una receta médica escrita en un papiro"]
  consecuencia: ["La información se pierde si el nieto olvida el consejo", "La información se mantiene intacta aunque el médico no esté presente"]

respuesta: consecuencia[escenario_idx]
tipo: mc
opciones_explicitas: ["La información se pierde si el nieto olvida el consejo", "La información se mantiene intacta aunque el médico no esté presente", "La escritura no cambia la naturaleza de la comunicación"]

enunciado: "Considera el siguiente caso: {escenarios[escenario_idx]}. ¿Qué ocurre con la información en este caso?"

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
respuestas_validas:
  - "soporte"
  - "signo"
  - "código"

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
respuesta_orden: ["Cultura puramente oral", "Aparición de la escritura", "Acumulación de conocimiento complejo"]
```

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["tecnologia", "cognicion"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si la oralidad es la comunicación en tiempo real, la escritura es una tecnología de comunicación asincrónica (escribe la palabra que describe la capacidad de la escritura de durar en el tiempo)."

respuesta: "asincrónica"

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

respuestas_validas:
  - "alfabético"

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

respuesta_orden: secuencia
tipo: ordenar

opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Ordena los siguientes sistemas de escritura desde el que representa conceptos (menos abstracto) hasta el que representa sonidos individuales (más abstracto):"

explicacion: |
  La evolución tecnológica de la escritura tiende hacia la abstracción: de la imagen del objeto (pictograma) al sonido de la sílaba (silabario) y finalmente al sonido mínimo (alfabeto).
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

