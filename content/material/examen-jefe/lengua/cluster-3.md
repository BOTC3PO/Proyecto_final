# Examen jefe — Maestro de las Coordinadas

> Logro #86. Dominaste los contraargumentos y los distintos tipos de oraciones coordinadas para argumentar con precisión. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **130 preguntas totales** en 5/5 secciones.

---

## Sección: contraargumentos (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "basico"
  tags: ["contraargumentos", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un contraargumento es un argumento que sostendría la postura contraria a la tesis: la razón más fuerte que alguien en desacuerdo podría dar."

pasos:
  - "Ver `../tesis/`: el contraargumento se define siempre en relación a la tesis que se está defendiendo."

explicacion: |
  Verdadero: es la definición central del contraargumento.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["contraargumentos", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Incluir y responder el contraargumento más fuerte dentro del propio texto es una estrategia que fortalece la persuasión, no una debilidad."

pasos:
  - "Demuestra que la tesis resiste incluso frente a la mejor objeción posible."

explicacion: |
  Verdadero: anticipar objeciones y responderlas es más persuasivo
  que ignorarlas.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "basico"
  tags: ["refutacion"]

variables:
  n: uno_de([1, 1])

respuesta: "refutación"
tipo: completar

enunciado: "La respuesta que muestra por qué un contraargumento no es suficiente para invalidar la tesis se llama..."

pasos:
  - "Es el paso que sigue después de presentar el contraargumento."

explicacion: |
  La refutación es la respuesta argumentada al contraargumento
  presentado.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["refutacion", "estrategias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una estrategia de refutación es mostrar que el contraargumento se basa en un dato incorrecto o desactualizado."

pasos:
  - "Si el dato en el que se apoya el contraargumento es falso, la objeción pierde fuerza."

explicacion: |
  Verdadero: es una de las estrategias típicas para refutar un
  contraargumento.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["refutacion", "estrategias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Otra estrategia de refutación es mostrar que el contraargumento aplica sólo a un caso excepcional, no a la regla general que defiende la tesis."

pasos:
  - "Reconocer una excepción no invalida la regla general defendida por la tesis."

explicacion: |
  Verdadero: distinguir excepción de regla general es una forma
  válida de refutar sin negar el contraargumento por completo.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["concesion"]

variables:
  n: uno_de([1, 1])

respuesta: "concesión"
tipo: completar

enunciado: "Aceptar que el contraargumento tiene algo de razón, antes de explicar por qué de todas formas la tesis se sostiene, se llama..."

pasos:
  - "Se marca con conectores como \"si bien\", \"aunque\", \"es cierto que... pero\"."

explicacion: |
  La concesión reconoce parcialmente la validez del contraargumento
  sin abandonar la tesis.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["concesion", "conectores"]

variables:
  conectores: ["si bien", "aunque", "es cierto que... pero"]
  idx: uno_de([0, 1, 2])

respuesta: verdadero
tipo: vf

enunciado: "\"{conectores[idx]}\" es un conector típico usado para introducir una concesión antes de la refutación."

pasos:
  - "Estos conectores son adversativos, coherentes con la coordinación adversativa vista en `../oracion-compuesta-coordinacion-y-subordinacion/`."

explicacion: |
  Verdadero: son los conectores más habituales para marcar la
  concesión en un texto argumentativo.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["concesion", "refutacion", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Es cierto que [contraargumento], pero [refutación]\" es el patrón más común para incorporar un contraargumento sin debilitar la propia postura."

pasos:
  - "Primero se concede algo de razón, después se explica por qué la tesis igual se sostiene."

explicacion: |
  Verdadero: es la estructura típica que combina concesión y
  refutación.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "avanzado"
  tags: ["concesion", "credibilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Conceder que el contraargumento tiene algo de razón muestra que el autor analizó objetivamente ambos lados, en vez de ignorar la oposición."

pasos:
  - "Esa honestidad intelectual suele hacer que el texto resulte más convincente, no menos."

explicacion: |
  Verdadero: la concesión bien usada aumenta, no disminuye, la
  credibilidad del texto argumentativo.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "avanzado"
  tags: ["contraargumentos", "honestidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para que la refutación sea convincente, el contraargumento elegido debe ser el más fuerte y honesto que la postura contraria realmente podría dar, no una versión débil o distorsionada fácil de tirar abajo."

pasos:
  - "Refutar una versión débil (un \"espantapájaros\") no demuestra nada sobre la fortaleza real de la tesis."

explicacion: |
  Verdadero: elegir un contraargumento débil a propósito es una
  falacia argumentativa que debilita la credibilidad del texto.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["concesion", "refutacion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "es cierto que reduce la libertad individual"
tipo: completar

enunciado: "En \"Es cierto que prohibir los celulares en el aula reduce la libertad individual de los alumnos, pero mejora significativamente su concentración durante las clases\", ¿cuál es la parte de concesión?"

pasos:
  - "La concesión es la parte que reconoce algo de razón al contraargumento, antes del \"pero\"."

explicacion: |
  La concesión aparece antes del conector adversativo \"pero\", que
  introduce después la refutación.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["refutacion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "mejora significativamente su concentración durante las clases"
tipo: completar

enunciado: "En \"Es cierto que prohibir los celulares en el aula reduce la libertad individual de los alumnos, pero mejora significativamente su concentración durante las clases\", ¿cuál es la parte de refutación?"

pasos:
  - "La refutación es la parte después del \"pero\", que explica por qué la tesis igual se sostiene."

explicacion: |
  La refutación viene después del conector adversativo y sostiene la
  tesis pese a la objeción concedida.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["contraargumentos", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ignorar por completo la postura contraria en un texto argumentativo puede hacer que el texto parezca no haber considerado otros puntos de vista."

pasos:
  - "Un texto que nunca menciona objeciones puede parecer parcial o poco riguroso."

explicacion: |
  Verdadero: ignorar el contraargumento es una debilidad
  argumentativa, no una fortaleza.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "avanzado"
  tags: ["refutacion", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Refutar un contraargumento consiste simplemente en decir \"eso no es verdad\", sin dar ninguna razón adicional."

pasos:
  - "Una refutación válida necesita mostrar POR QUÉ el contraargumento no alcanza a invalidar la tesis (dato incorrecto, excepción, peso insuficiente), no basta con negarlo sin más."

explicacion: |
  Falso: la simple negación sin razones no es una refutación sólida,
  necesita fundamento propio.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "avanzado"
  tags: ["contraargumentos", "complejidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Elegir el contraargumento más sólido de la postura contraria demuestra que el tema es más complejo de lo que parecía a simple vista, y que la tesis lo sostiene de todas formas."

pasos:
  - "Un tema con una sola postura obvia y sin objeciones fuertes casi no necesitaría un texto argumentativo."

explicacion: |
  Verdadero: reconocer complejidad y sostener la tesis igual es la
  demostración de fuerza argumentativa buscada.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "avanzado"
  tags: ["tesis", "argumentos", "contraargumentos", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto argumentativo sólido integra las tres piezas de esta cadena: una tesis clara, argumentos que la sostienen, y al menos un contraargumento anticipado y refutado."

pasos:
  - "Ver `../tesis/` y `../argumentos/`: es la estructura completa que cierra esta subrama."

explicacion: |
  Verdadero: esa integración es el objetivo final de la cadena
  tesis→argumentos→contraargumentos.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "avanzado"
  tags: ["refutacion", "concesion", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "No siempre es necesario conceder algo de razón antes de refutar; a veces la refutación es directa (por ejemplo, si el contraargumento se basa en un dato falso)."

pasos:
  - "La concesión se usa cuando el contraargumento tiene algo de validez parcial; si es completamente incorrecto, no hace falta conceder nada."

explicacion: |
  Verdadero: la concesión es una estrategia útil pero no obligatoria
  en toda refutación.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["contraargumentos", "metodo"]

enunciado: "Ordená los pasos para incorporar bien un contraargumento en un texto argumentativo propio."
tipo: ordenar
opciones_explicitas:
  - "Identificar el argumento más fuerte que alguien en desacuerdo podría dar"
  - "Presentarlo de forma honesta, sin distorsionarlo (evitar el espantapájaros)"
  - "Conceder, si corresponde, que tiene algo de razón"
  - "Refutarlo explicando por qué la tesis se sostiene de todas formas"
respuesta_orden:
  - "Identificar el argumento más fuerte que alguien en desacuerdo podría dar"
  - "Presentarlo de forma honesta, sin distorsionarlo (evitar el espantapájaros)"
  - "Conceder, si corresponde, que tiene algo de razón"
  - "Refutarlo explicando por qué la tesis se sostiene de todas formas"

explicacion: |
  El proceso va de identificar la objeción más fuerte a presentarla
  honestamente, y termina con la concesión (si aplica) y la
  refutación.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "avanzado"
  tags: ["contraargumentos", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El análisis completo de un texto argumentativo combina tres preguntas: qué se defiende (tesis), por qué (argumentos) y qué dirían en contra, y por qué la tesis igual se sostiene (contraargumentos)."

pasos:
  - "Cada tema de la cadena respondió una de esas tres preguntas, en ese orden."

explicacion: |
  Verdadero: contraargumentos cierra la cadena que empezó con tesis y
  siguió con argumentos.
```

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "avanzado"
  tags: ["contraargumentos", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En un debate, anticipar y refutar de antemano el contraargumento más fuerte del rival deja al orador mejor preparado que esperar a que el rival lo mencione primero."

pasos:
  - "Adelantarse a la objeción más fuerte reduce su impacto cuando (o si) el rival la presenta."

explicacion: |
  Verdadero: esta estrategia argumentativa tiene aplicación directa
  más allá de la escritura, también en la oratoria y el debate.
```

## Sección: coordinadas-adversativas (22 preguntas)

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  n: uno_de([1, 1])

respuesta: "oposición o contraste"
tipo: mc
opciones_explicitas: ["suma de información", "oposición o contraste", "una alternativa entre opciones"]

enunciado: "Una oración coordinada adversativa expresa principalmente..."

explicacion: |
  Las adversativas presentan un contraste: "A, pero B", donde B limita o
  contradice parcialmente lo dicho en A.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  conector: uno_de(["pero", "sin embargo", "no obstante"])

respuesta: verdadero
tipo: vf

enunciado: "El conector \"{conector}\" puede introducir una oración coordinada adversativa."

explicacion: |
  Los tres son nexos adversativos reales: "pero" es el más simple, "sin
  embargo" y "no obstante" son locuciones adversativas más formales.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  conector: uno_de(["y", "o", "ni"])

respuesta: falso
tipo: vf

enunciado: "El conector \"{conector}\" es un nexo adversativo."

explicacion: |
  "Y"/"ni" son copulativos (suman) y "o" es disyuntivo (alternativa) — ninguno
  expresa contraste, así que no son adversativos.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["nexos"]

variables:
  n: uno_de([1, 1])

respuesta: "sino"
tipo: completar

enunciado: "En \"No fue por miedo, ___ por respeto\", el nexo que reemplaza una proposición negativa anterior por la alternativa verdadera es:"

respuestas_validas:
  - "sino"

explicacion: |
  "Sino" se usa específicamente para corregir/reemplazar una negación
  previa por la afirmación correcta — distinto de "pero", que no niega
  lo anterior sino que lo matiza.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["independencia sintactica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En una coordinada adversativa, las dos proposiciones son sintácticamente independientes entre sí (ninguna depende de la otra para tener sentido completo)."

explicacion: |
  A diferencia de la subordinación, en la coordinación ambas oraciones
  tienen igual jerarquía gramatical — el nexo adversativo sólo agrega
  un matiz semántico de contraste, no crea dependencia sintáctica.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "adversativa"
tipo: mc
opciones_explicitas: ["copulativa", "disyuntiva", "adversativa"]

enunciado: "\"Quería ir al cine, pero estaba lloviendo\" es una oración coordinada..."

explicacion: |
  "Pero" marca el contraste entre el deseo (ir al cine) y la circunstancia
  que lo impide (la lluvia): es adversativa.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["puntuacion"]

variables:
  n: uno_de([1, 1])

respuesta: "van entre comas"
tipo: mc
opciones_explicitas: ["nunca llevan coma", "van entre comas", "siempre van al final de la oración"]

enunciado: "Locuciones adversativas como \"sin embargo\" o \"no obstante\" típicamente..."

explicacion: |
  Al ser conectores discursivos más marcados que "pero", suelen ir
  encerrados entre comas, ya sea al inicio de la segunda proposición o
  en medio de ella.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "avanzado"
  tags: ["analisis"]

variables:
  n: uno_de([1, 1])

respuesta: "el esfuerzo del equipo y la falta de goles"
tipo: mc
opciones_explicitas: ["el clima y el resultado", "el esfuerzo del equipo y la falta de goles", "el árbitro y los jugadores"]

enunciado: "\"El equipo jugó con mucha entrega durante los primeros cuarenta minutos, sin embargo, no logró convertir goles\". ¿Qué dos ideas contrasta \"sin embargo\" acá?"

explicacion: |
  El conector marca la oposición entre el esfuerzo demostrado (entrega)
  y el resultado negativo (no convertir goles).
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  conector: uno_de(["pero", "mas"])

respuesta: verdadero
tipo: vf

enunciado: "\"{conector}\" es una conjunción adversativa (aunque \"mas\" sin tilde se usa sobre todo en registros literarios o formales)."

explicacion: |
  Ambas cumplen la misma función adversativa; "mas" es una variante más
  formal/literaria de "pero".
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["puntuacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de \"pero\" suele colocarse una coma cuando la primera proposición es larga o se busca marcar una pausa enfática."

explicacion: |
  Con oraciones cortas, "pero" puede ir sin coma previa; con proposiciones
  más extensas, la coma ayuda a marcar el corte antes del contraste.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "copulativa"
tipo: mc
opciones_explicitas: ["copulativa", "disyuntiva", "adversativa"]

enunciado: "\"Estudió mucho y aprobó el examen\" es una oración coordinada..."

explicacion: |
  "Y" suma información sin contraste (estudió Y además aprobó): es
  copulativa, no adversativa.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["funcion textual"]

variables:
  n: uno_de([1, 1])

respuesta: "anticipar giros o matices en el argumento del autor"
tipo: mc
opciones_explicitas: ["memorizar vocabulario nuevo", "anticipar giros o matices en el argumento del autor", "identificar el género textual"]

enunciado: "Reconocer las coordinadas adversativas en un texto ayuda principalmente a..."

explicacion: |
  Los conectores adversativos señalan que el autor está por matizar,
  limitar o contradecir parcialmente lo que acaba de afirmar — anticiparlos
  mejora la comprensión lectora.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  conector: uno_de(["por el contrario", "sino"])

respuesta: verdadero
tipo: vf

enunciado: "\"{conector}\" puede funcionar como nexo adversativo."

explicacion: |
  Ambos son nexos/locuciones adversativas reconocidas: "por el contrario"
  refuerza la oposición, "sino" reemplaza una negación previa.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "avanzado"
  tags: ["analisis"]

variables:
  n: uno_de([1, 1])

respuesta: "que la complejidad del proceso no niega que sus ideales inspiraran cambios"
tipo: mc
opciones_explicitas: ["que la Revolución de Mayo fue un fracaso total", "que la complejidad del proceso no niega que sus ideales inspiraran cambios", "que no hubo ningún ideal de libertad"]

enunciado: "\"La Revolución de Mayo fue un proceso complejo, pero sus ideales de libertad inspiraron cambios profundos\". ¿Qué matiz introduce \"pero\" acá?"

explicacion: |
  El "pero" no niega la complejidad, sino que agrega una consecuencia
  positiva que igual se dio a pesar de esa complejidad.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["clasificacion"]

variables:
  conector: uno_de(["pero", "sin embargo", "no obstante", "sino"])

respuesta: "adversativa"
tipo: mc
opciones_explicitas: ["copulativa", "disyuntiva", "adversativa"]

enunciado: "Una oración unida con el nexo \"{conector}\" es de tipo coordinada..."

explicacion: |
  Los cuatro son nexos adversativos: expresan contraste u oposición
  entre las dos proposiciones que unen.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["posicion del nexo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La posición del nexo adversativo dentro de la oración es flexible, lo que permite variar el ritmo y el énfasis del discurso."

explicacion: |
  A diferencia de nexos con posición fija, adversativas como "sin embargo"
  pueden ir al inicio de la segunda proposición o insertarse en medio de
  ella.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["clasificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "disyuntiva"
tipo: mc
opciones_explicitas: ["copulativa", "disyuntiva", "adversativa"]

enunciado: "\"¿Vamos al cine o nos quedamos en casa?\" es una oración coordinada..."

explicacion: |
  "O" plantea una alternativa entre dos opciones, no un contraste: es
  disyuntiva, no adversativa.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "avanzado"
  tags: ["nexos"]

variables:
  n: uno_de([1, 1])

respuesta: "concesivo-adversativo"
tipo: completar

enunciado: "En ciertos contextos, \"aunque\" puede funcionar con un valor ___ cercano al de las adversativas, aunque formalmente introduce una subordinada."

respuestas_validas:
  - "concesivo-adversativo"
  - "concesivo adversativo"

explicacion: |
  "Aunque" suele introducir subordinadas concesivas, pero semánticamente
  su matiz de contraste lo acerca al valor de las adversativas en varios
  usos.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  n: uno_de([1, 1])

respuesta: "sino"
tipo: mc
opciones_explicitas: ["pero", "sino", "y"]

enunciado: "El nexo específico para corregir una negación previa (\"no X, ... Y\") es:"

explicacion: |
  "Sino" es el único de estos tres que exige que la primera proposición
  sea negativa — reemplaza esa negación por la alternativa correcta.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["escritura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar conectores adversativos correctamente evita que un texto sea una simple lista de ideas desconectadas."

explicacion: |
  Al marcar relaciones de contraste explícitas, los conectores
  adversativos ayudan a construir razonamientos más cohesivos y matizados
  en vez de oraciones sueltas.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  conector: uno_de(["ni", "o", "u"])

respuesta: falso
tipo: vf

enunciado: "El nexo \"{conector}\" expresa un contraste u oposición entre dos proposiciones."

explicacion: |
  "Ni" es copulativo negativo y "o"/"u" son disyuntivos — ninguno expresa
  oposición, por eso no son adversativos.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "avanzado"
  tags: ["examenes"]

variables:
  n: uno_de([1, 1])

respuesta: "analizar la función de los conectores en un fragmento dado"
tipo: mc
opciones_explicitas: ["memorizar la lista de conjunciones de memoria", "analizar la función de los conectores en un fragmento dado", "contar cuántas comas tiene el texto"]

enunciado: "En pruebas de diagnóstico y exámenes finales, un pedido típico sobre este tema es..."

explicacion: |
  Se suele pedir identificar y explicar la función (adversativa,
  copulativa, disyuntiva, etc.) de conectores dentro de un fragmento real.
```

## Sección: coordinadas-copulativas (28 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["estructura", "independencia"]

variables:
  oracion: uno_de(["El sol sale y la luna se oculta", "Juan corre y María camina", "Pedro come y Ana duerme"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{oracion}', la segunda parte depende jerárquicamente de la primera para tener sentido completo."

explicacion: |
  Falso. En las coordenadas copulativas, ambas partes tienen independencia sintáctica. Ninguna es subordinada de la otra; simplemente se suman información.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["funcion", "nexos"]

variables:
  op_a: "subordinar"
  op_b: "unir aditivamente"
  op_c: "contrastar"
  op_d: "causar"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Cuál es la función principal de las conjunciones copulativas (como 'y', 'e', 'ni') en una oración?"

explicacion: |
  La función principal es unir elementos o proposiciones de manera aditiva (sumar información), sin crear dependencia jerárquica entre ellas.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["elision", "estructura"]

variables:
  ejemplo: "Pedro come pan y María [come] queso"

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{ejemplo}', la omisión del verbo en la segunda parte se llama elisión y no cambia la naturaleza coordinada de la oración."

explicacion: |
  Verdadero. La elisión es una omisión de elementos repetidos para evitar redundancia, pero la estructura sigue siendo coordinada copulativa.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["independencia", "permutaciones"]

variables:
  partes: 2
  total: permutations(partes, partes)

respuesta: total
tipo: input

enunciado: "Si tenemos dos coordenadas copulativas independientes (A y B), ¿cuántas permutaciones distintas de orden existen sin cambiar el significado esencial de la coordinación?"

explicacion: |
  Como son independientes, se pueden invertir. Para 2 elementos, hay 2! (2x1) = 2 permutaciones posibles (A y B; B y A).
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["etimologia", "terminologia"]

variables:
  op_a: "copular"
  op_b: "separar"
  op_c: "subordinar"
  op_d: "conjugar"

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "El término 'copulativa' proviene del verbo latino 'copular', que significa:"

explicacion: |
  'Copular' significa unir o ligar, reflejando la función de estas conjunciones de enlazar elementos.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["dependencia", "jerarquia"]

variables:
  afirmacion: "una parte completa el sentido de la otra"

respuesta: falso
tipo: vf

enunciado: "En las coordenadas copulativas, una parte completa el sentido de la otra, creando una jerarquía principal/secundaria."

explicacion: |
  Falso. Esa es la característica de las subordinadas. En las copulativas, ambas partes son independientes e iguales jerárquicamente.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["nexos", "frecuencia"]

variables:
  total_nexos: 3
  nexo_comun: "y"

respuesta: nexo_comun
tipo: input

enunciado: "De los nexos copulativos principales (y, e, ni), ¿cuál es el más común y representativo?"

explicacion: |
  La conjunción 'y' es la más común y representativa de las coordinadas copulativas.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["prueba", "independencia"]

variables:
  op_a: "cambiar el significado"
  op_b: "mantener la relación aditiva"
  op_c: "crear una subordinada"
  op_d: "eliminar la elisión"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "Una prueba clave para identificar coordenadas copulativas es invertir el orden de las partes. ¿Qué ocurre con la relación al invertir?"

explicacion: |
  La relación de adición se mantiene, demostrando la independencia sintáctica de las partes.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["fonetica", "cacofonia"]

variables:
  palabra: "isla"

respuesta: verdadero
tipo: vf

enunciado: "Ante la palabra '{palabra}', se debe usar 'e' en lugar de 'y' para evitar cacofonía."

explicacion: |
  Verdadero. 'Y isla' suena mal fonéticamente; 'e isla' es la forma correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["comparacion", "subordinadas"]

variables:
  op_a: "dependencia jerárquica"
  op_b: "independencia sintáctica"
  op_c: "uso de 'que'"
  op_d: "elisión obligatoria"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Qué característica distingue fundamentalmente a las coordenadas copulativas de las subordinadas?"

explicacion: |
  La independencia sintáctica. En las copulativas, ninguna parte depende de la otra.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["elision", "naturaleza"]

variables:
  afirmacion: "cambia la naturaleza coordinada"

respuesta: falso
tipo: vf

enunciado: "La elisión de elementos repetidos cambia la naturaleza coordinada de la oración."

explicacion: |
  Falso. La elisión no cambia la naturaleza; solo hace la oración más fluida.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["funcion", "nexos"]

variables:
  op_a: "separar"
  op_b: "unir"
  op_c: "subordinar"
  op_d: "interrogar"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "La conjunción 'y' tiene la función de:"

explicacion: |
  Unir elementos o proposiciones de manera aditiva.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["que", "independencia"]

variables:
  afirmacion: "siempre es subordinante"

respuesta: falso
tipo: vf

enunciado: "El nexo 'que' siempre cumple una función subordinante y nunca aditiva."

explicacion: |
  Falso. En algunos contextos específicos, 'que' puede cumplir función aditiva, aunque su uso principal es subordinante.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["identificacion", "contexto"]

variables:
  oracion: "Juan e María estudian"
  nexo: "e"

respuesta: nexo
tipo: input

enunciado: "En la oración '{oracion}', ¿cuál es el nexo copulativo?"

explicacion: |
  El nexo es 'e', utilizado antes de la vocal 'i' de 'María'.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["permutaciones", "logica"]

variables:
  elementos: 3
  total: permutations(elementos, elementos)

respuesta: total
tipo: input

enunciado: "Si tenemos tres coordenadas copulativas independientes (A, B, C), ¿cuántas permutaciones distintas de orden existen?"

explicacion: |
  Para 3 elementos independientes, hay 3! (3x2x1) = 6 permutaciones posibles.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["independencia", "sintaxis"]

variables:
  caso: uno_de(["verdadero", "falso"])

respuesta: verdadero
tipo: vf

enunciado: "En una oración coordinada copulativa, la segunda parte depende jerárquicamente de la primera."

explicacion: |
  Falso. En las coordinadas copulativas, ambas partes tienen independencia sintáctica y gramatical. Ninguna es subordinada de la otra.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["fonetica", "uso_de_nexos"]

variables:
  palabra_siguiente: uno_de(["isla", "hambre", "yogur"])

respuesta: e
tipo: input

enunciado: "Si la palabra siguiente comienza con 'i' o 'hi' (como '{palabra_siguiente}'), ¿qué forma de la conjunción 'y' se utiliza para evitar cacofonía?"

explicacion: |
  Se utiliza 'e' en lugar de 'y' cuando el término siguiente comienza por 'i' o 'hi' para evitar la repetición de sonidos vocálicos iguales (cacofonía).
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["independencia", "prueba_sintactica"]

variables:
  parte1: uno_de(["Juan corre", "María lee", "Pedro come"])
  parte2: uno_de(["Ana duerme", "Luis trabaja", "Sofía estudia"])

respuesta: verdadero
tipo: vf

enunciado: "En una coordinada copulativa, es posible invertir el orden de las partes ('{parte1} y {parte2}' por '{parte2} y {parte1}') sin alterar la relación sintáctica fundamental."

explicacion: |
  Verdadero. La independencia de las partes permite invertir el orden manteniendo la adición de información, a diferencia de las subordinadas donde el orden es más rígido.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["comparacion", "subordinacion"]

variables:
  ejemplo_copulativa: "Estudio y trabajo"
  ejemplo_subordinada: "Estudio porque necesito aprobar"

respuesta: verdadero
tipo: vf

enunciado: "La diferencia principal entre 'Estudio y trabajo' (copulativa) y 'Estudio porque necesito aprobar' (subordinada causal) es que en la primera no hay dependencia jerárquica entre los verbos."

explicacion: |
  Verdadero. En la coordinada, ambas acciones son independientes. En la subordinada, una depende de la otra para completar su sentido.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["elision", "estructura"]

variables:
  verbo: uno_de(["come", "lee", "corre"])
  sujeto1: uno_de(["Pedro", "María", "Juan"])
  sujeto2: uno_de(["Ana", "Luis", "Sofía"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Pedro come pan y Ana queso', se ha producido una elisión del verbo en la segunda parte, pero sigue siendo una coordinada copulativa."

explicacion: |
  Verdadero. La elisión de elementos repetidos (como el verbo) es común en las coordinadas copulativas y no cambia su naturaleza sintáctica.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["identificacion", "distractores"]

variables:
  correcta: "y"
  incorrecta: uno_de(["pero", "o", "sino"])
  oracion: "Juan corre {incorrecta} María camina."

respuesta: incorrecta
tipo: input

enunciado: "En la oración 'Juan corre {incorrecta} María camina', ¿qué nexo se usa que NO es copulativo?"

explicacion: |
  El nexo '{incorrecta}' es adversativo o disyuntivo, no copulativo. Las copulativas usan 'y', 'e' o 'ni'.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["estructura", "definicion"]

variables:
  minimo: 2

respuesta: 2
tipo: input

enunciado: "¿Cuál es el número mínimo de partes (oraciones simples o sintagmas) que deben unirse para formar una coordinada copulativa?"

explicacion: |
  Se necesitan al menos dos partes. La coordinación implica la unión de dos o más elementos de igual jerarquía.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["ejemplos", "literatura"]

variables:
  autor: uno_de(["Borges", "Cortázar", "Bianchi", "Sábato"])
  nexo: "y"

respuesta: verdadero
tipo: vf

enunciado: "En la literatura argentina, es común encontrar coordinadas copulativas con el nexo 'y' para crear ritmo o sumar imágenes, como en 'El sol brillaba {nexo} la brisa refrescaba'."

explicacion: |
  Verdadero. Autores argentinos utilizan frecuentemente estas estructuras para dar fluidez y adición de sensaciones en sus textos.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["sintaxis", "analisis"]

variables:
  sujeto1: uno_de(["Los pibes", "El equipo", "La gente"])
  verbo1: uno_de(["jugó", "ganó", "perdió"])
  nexo: "y"
  sujeto2: uno_de(["nosotros", "ellos", "ustedes"])
  verbo2: uno_de(["miramos", "observaron", "escucharon"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Los pibes jugaron y nosotros miramos', ambas partes son sintácticamente independientes."

explicacion: |
  Verdadero. Cada parte tiene su propio sujeto y verbo, y están unidas por un nexo copulativo, manteniendo su independencia.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["identificacion", "lista"]

variables:
  nexo: uno_de(["y", "e"])
  oracion: "Vi el mar {nexo} la montaña."

respuesta: verdadero
tipo: vf

enunciado: "La oración 'Vi el mar {nexo} la montaña' es una coordinada copulativa."

explicacion: |
  Verdadero. El nexo 'y' o 'e' une dos objetos directos (o proposiciones elípticas) de igual jerarquía.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["elision", "sujeto"]

variables:
  verbo: uno_de(["come", "duerme", "trabaja"])
  sujeto: uno_de(["Pedro", "María", "Juan"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Pedro come y duerme', se ha elidido el sujeto en la segunda parte, pero sigue siendo una coordinada copulativa de verbos."

explicacion: |
  Verdadero. La elisión del sujeto es válida en coordinadas copulativas cuando el sujeto es el mismo para ambas acciones.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["comparacion", "causalidad"]

variables:
  ejemplo_copulativa: "Estudio y trabajo"
  ejemplo_subordinada: "Estudio porque trabajo"

respuesta: verdadero
tipo: vf

enunciado: "En 'Estudio y trabajo', no hay causa-efecto entre las partes, a diferencia de 'Estudio porque trabajo'."

explicacion: |
  Verdadero. La coordinada copulativa suma acciones sin establecer relación causal. La subordinada causal establece una dependencia de razón.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["elision", "verbo"]

variables:
  verbo: uno_de(["come", "lee", "corre"])

respuesta: verdadero
tipo: vf

enunciado: "Es correcto omitir el verbo en la segunda parte de una coordinada copulativa si se sobreentiende, como en 'Pedro come y Ana [come] queso'."

explicacion: |
  Verdadero. La elisión del verbo es una práctica común para evitar repeticiones y hacer el habla más fluida, sin alterar la coordinación.
```

## Sección: coordinadas-distributivas (32 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["conteo", "aplicacion"]

variables:
  n1: random(1, 5)
  n2: random(1, 5)
  total: n1 + n2

respuesta: total
tipo: input

enunciado: "En la oración 'Hay {n1} docentes y {n2} estudiantes que se saludaron', ¿cuántos individuos participan de la acción distributiva de saludarse mutuamente?"

explicacion: |
  La respuesta es la suma de los sujetos coordinados: {n1} + {n2} = {total}. Al usar el verbo recíproco 'saludarse', todos los sujetos mencionados (docentes y estudiantes) participan activamente de la acción distribuida entre ellos."
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["sintaxis", "sujeto"]

variables:
  n: random(2, 4)

respuesta: "plural"
tipo: input

enunciado: "En la oración 'Los alumnos {n} y las alumnas {n} se abrazaron', ¿qué número tiene el sujeto compuesto? (Escribe 'singular' o 'plural')"

explicacion: |
  La respuesta es 'plural'. Aunque la coordinación distributiva enfatiza la acción individual, gramaticalmente los dos elementos unidos por 'y' forman un sujeto compuesto plural. El verbo se conjuga en plural ('se abrazaron')."
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["conteo", "logica"]

variables:
  a: random(1, 3)
  b: random(1, 3)
  total: a + b

respuesta: total
tipo: input

enunciado: "En 'Hay {a} perros y {b} gatos que se persiguieron', ¿cuántos animales participan de la persecución mutua?"

explicacion: |
  La respuesta es {total}. El verbo 'persiguieron' (recíproco) implica que cada animal persigue a los demás. Todos los sujetos coordinados están incluidos en la acción distribuida."
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["sintaxis", "concordancia"]

variables:
  n: random(2, 5)

respuesta: "plural"
tipo: input

enunciado: "En 'Los docentes {n} y los estudiantes {n} se felicitaron', ¿qué género y número debe tener el participio 'felicitar' si se usara en voz pasiva refleja? (Escribe 'felicitaron')"

explicacion: |
  La respuesta es 'felicitaron'. Al ser sujeto compuesto plural, el verbo concuerda en plural. La coordinación distributiva no cambia la concordancia gramatical, solo la interpretación semántica de la acción."
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["conteo", "logica"]

variables:
  n1: random(1, 4)
  n2: random(1, 4)
  total: n1 + n2

respuesta: total
tipo: input

enunciado: "En 'Hay {n1} manzanas y {n2} naranjas que se repartieron', ¿cuántas frutas participan del reparto?"

explicacion: |
  La respuesta es {total}. El verbo 'repartirse' (o la acción de ser repartidas) implica que todas las frutas son objeto de la distribución entre los sujetos. Todos los elementos coordinados están incluidos."
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["sintaxis", "sujeto"]

variables:
  n: random(2, 5)

respuesta: "plural"
tipo: input

enunciado: "En 'Los profesores {n} y los directivos {n} se saludaron', ¿qué número tiene el verbo 'saludar' en esta oración? (Escribe 'singular' o 'plural')"

explicacion: |
  La respuesta es 'plural'. Los sujetos coordinados forman un grupo plural, por lo que el verbo concuerda en plural."
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["sintaxis", "coordinacion", "distributiva"]

variables:
  sujeto1: uno_de(["Juan", "María", "Pedro", "Ana"])
  sujeto2: uno_de(["Carlos", "Laura", "Luis", "Sofía"])
  verbo: uno_de(["se pelearon", "se miraron", "se saludaron", "se conocieron"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sujeto1} {verbo} {sujeto2}', la coordinación es distributiva porque la acción se aplica recíprocamente a cada individuo."

explicacion: |
  Los verbos como 'pelearse', 'mirarse' o 'saludarse' son recíprocos. Esto implica que la acción se distribuye entre los sujetos: A hace la acción con B y B hace la acción con A. Por lo tanto, es una coordinación distributiva (o recíproca).
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["sintaxis", "diferencias", "coordinacion"]

variables:
  elem1: uno_de(["el libro", "la casa", "el coche"])
  elem2: uno_de(["el cuaderno", "el departamento", "la moto"])
  accion: uno_de(["es grande", "es vieja", "es nueva"])

respuesta: |
  La coordinación es copulativa.
tipo: completar

enunciado: "Analiza la oración: '{elem1} y {elem2} {accion}'. ¿Es esta coordinación distributiva o copulativa? Responde con una de las opciones."

explicacion: |
  En 'el libro y el cuaderno es grande', la propiedad se atribuye al grupo como un todo o se aplica de forma acumulativa/no distributiva en el sentido recíproco. No hay una acción que se reparta entre ellos de manera individualizada o recíproca. Es una coordinación copulativa simple.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["verbos", "reciprocidad", "sintaxis"]

variables:
  grupo: uno_de(["Los hermanos", "Los vecinos", "Los compañeros"])
  accion: uno_de(["se ayudaron", "se querían", "se respetaron", "se conocieron"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{grupo} {accion}', la conjunción 'y' introduce una coordinación distributiva porque la acción se realiza mutuamente."

explicacion: |
  Correcto. Los verbos pronominales recíprocos (como ayudarse, quererse, respetarse) implican que el sujeto A actúa sobre B y B sobre A. La acción se distribuye en ambas direcciones.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["semántica", "distribución", "medios"]

variables:
  grupo1: uno_de(["Los alumnos", "Los trabajadores", "Los clientes"])
  grupo2: uno_de(["las alumnas", "los empleados", "los usuarios"])
  medio1: uno_de(["por la puerta principal", "por el ascensor", "por la ventana"])
  medio2: uno_de(["por la puerta lateral", "por la escalera", "por la puerta de servicio"])

respuesta: |
  Distributiva
tipo: completar

enunciado: "En la frase '{grupo1} y {grupo2} entrarán {medio1} y {medio2} respectivamente', la coordinación de los medios es de tipo:"

explicacion: |
  La conjunción 'y' distribuye los medios de acceso entre los dos colectivos: un grupo usa uno y el otro grupo usa el otro. No es una acción compartida simultáneamente por todos, sino una repartición de recursos o acciones.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["sintaxis", "sujeto", "agrupación"]

variables:
  nombre1: uno_de(["Luis", "Ana", "Pedro", "María"])
  nombre2: uno_de(["Carlos", "Laura", "Juan", "Sofía"])
  verbo: uno_de(["comió", "durmió", "estudió", "trabajó"])

respuesta: |
  Copulativa
tipo: completar

enunciado: "En la oración '{nombre1} y {nombre2} {verbo} temprano', la coordinación de los sujetos se considera:"

explicacion: |
  La acción de comer, dormir, estudiar o trabajar se atribuye al conjunto 'Luis y Carlos' como un sujeto plural. No implica que Luis comió con Carlos de manera recíproca, sino que ambos realizaron la acción. Es una coordinación copulativa.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["definicion", "concepto", "teoria"]

variables:
  clave: uno_de(["la reciprocidad", "la alternancia", "la separación", "la independencia"])

respuesta: |
  La reciprocidad o la separación de la acción
tipo: completar

enunciado: "La característica fundamental que distingue a una coordinación distributiva es que la conjunción indica que la acción o cualidad se aplica por separado o mutuamente a cada elemento, a menudo marcada por:"

explicacion: |
  A diferencia de la copulativa que suma elementos, la distributiva indica que lo que se dice de uno se aplica al otro individualmente, ya sea por reciprocidad (acción mutua) o por alternancia (reparto de elementos).
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["ejemplos", "alternancia"]

variables:
  sujeto: uno_de(["Ellos", "Nosotros", "Ellos"])
  accion: uno_de(["subirán", "bajarán", "saldrán"])
  via1: uno_de(["por la escalera", "por el ascensor", "por la puerta"])
  via2: uno_de(["por el ascensor", "por la escalera", "por la puerta"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sujeto} {accion} {via1} y {via2}', si se entiende que un sube por una vía y el otro por la otra, se trata de una coordinación distributiva."

explicacion: |
  Correcto. La conjunción distribuye los medios (vías) entre los sujetos. No todos usan ambas vías juntos, sino que se reparten el uso de los medios disponibles.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["conectivos", "distribucion", "estructura"]

variables:
  elem1: uno_de(["unos", "algunos", "otros"])
  elem2: uno_de(["otros", "unos", "algunos"])
  accion: uno_de(["vienen", "van", "llegan"])

respuesta: |
  Distributiva
tipo: completar

enunciado: "En la frase '{elem1} y {elem2} {accion} mañana', la estructura 'y... y...' suele indicar una coordinación:"

explicacion: |
  La repetición de la conjunción 'y' a menudo enfatiza la distribución individual de la acción o la cualidad sobre cada elemento del grupo, separándolos en la ejecución del predicado.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["verbos", "no-distributivo", "copulativo"]

variables:
  sujeto1: uno_de(["El perro", "El gato", "El niño"])
  sujeto2: uno_de(["el perro", "el gato", "el niño"])
  adjetivo: uno_de(["es grande", "es pequeño", "es rápido"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{sujeto1} y {sujeto2} {adjetivo}', la coordinación es siempre distributiva porque hay dos sujetos."

explicacion: |
  Falso. La presencia de dos sujetos unidos por 'y' no garantiza que sea distributiva. Si la cualidad se aplica al grupo como un todo (ej. 'Juan y Pedro es alto' - incorrecto gramaticalmente pero conceptualmente copulativo de atributo), o si no hay reciprocidad, es copulativa. La distribución requiere que la acción/cualidad se aplique individualmente de forma separada o recíproca.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["sintaxis", "sujeto", "pluralidad"]

variables:
  nombre1: uno_de(["María", "Juan", "Ana"])
  nombre2: uno_de(["Carlos", "Luis", "Pedro"])
  verbo: uno_de(["se ayudaron", "se miraron", "se conocieron"])

respuesta: |
  Sujeto plural coordinado
tipo: completar

enunciado: "En la oración '{nombre1} y {nombre2} {verbo}', el sujeto sintáctico es:"

explicacion: |
  El sujeto es el conjunto '{nombre1} y {nombre2}'. Aunque la acción es distributiva (recíproca), gramaticalmente funciona como un sujeto plural compuesto por dos coordenadas.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["ambigüedad", "contexto", "interpretación"]

variables:
  elem1: uno_de(["El padre", "El maestro", "El director"])
  elem2: uno_de(["el hijo", "el alumno", "el estudiante"])
  accion: uno_de(["se pelearon", "se abrazaron", "se saludaron"])

respuesta: |
  Puede ser copulativa o distributiva según el contexto
tipo: completar

enunciado: "En la frase '{elem1} y {elem2} {accion}', sin más contexto, la coordinación puede interpretarse como:"

explicacion: |
  Dependiendo del verbo y el contexto, puede ser copulativa (ambos realizan la acción individualmente pero no necesariamente uno con el otro, ej. 'se saludaron' a terceros) o distributiva/recíproca (uno con el otro, ej. 'se pelearon'). El verbo recíproco fuerza la interpretación distributiva.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["conjunciones", "negación", "distributiva"]

variables:
  elem1: uno_de(["Ninguno", "Nadie", "Nada"])
  elem2: uno_de(["de ellos", "de nosotros", "de ustedes"])
  accion: uno_de(["vinieron", "llegaron", "estuvieron"])

respuesta: falso
tipo: vf

enunciado: "En la oración 'Ni {elem1} {elem2} {accion}', la coordinación 'ni... ni...' es siempre distributiva."

explicacion: |
  Falso. La coordinación disyuntiva negativa 'ni... ni...' niega la acción a ambos elementos por igual, pero no implica necesariamente una acción recíproca o una repartición de medios entre ellos. Es una negación acumulativa a los sujetos, no una distribución de acción entre ellos.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["reciprocidad", "sintaxis", "semántica"]

variables:
  sujeto: uno_de(["Ellos", "Nosotros", "Ellos"])
  verbo: uno_de(["se vieron", "se encontraron", "se llamaron"])

respuesta: |
  La acción se realiza mutuamente por cada uno de los sujetos
tipo: completar

enunciado: "En la oración '{sujeto} {verbo} ayer', el significado de la coordinación distributiva recíproca es que:"

explicacion: |
  La reciprocidad implica que cada sujeto realiza la acción sobre el otro. Si son A y B, A hace la acción con B y B hace la acción con A.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["objeto", "distribución", "complemento"]

variables:
  sujeto: uno_de(["Ellos", "Nosotros", "Ellos"])
  verbo: uno_de(["comieron", "leían", "escucharon"])
  obj1: uno_de(["la manzana", "el libro", "la canción"])
  obj2: uno_de(["la pera", "el diario", "la radio"])

respuesta: |
  Distributiva
tipo: completar

enunciado: "En la oración '{sujeto} {verbo} {obj1} y {obj2}', si se entiende que uno comió la manzana y el otro la pera, la coordinación de los objetos es:"

explicacion: |
  La conjunción 'y' distribuye los objetos entre los sujetos. Cada sujeto recibe un objeto diferente. Es una coordinación distributiva del complemento directo.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["comparación", "copulativa", "distributiva"]

variables:
  elem1: uno_de(["Juan", "María", "Pedro"])
  elem2: uno_de(["Carlos", "Laura", "Luis"])
  accion: uno_de(["es alto", "es bajo", "es rubio"])

respuesta: |
  La copulativa agrupa los elementos como un conjunto único para la acción, mientras que la distributiva aplica la acción individualmente o recíprocamente.
tipo: completar

enunciado: "La diferencia principal entre la coordinación copulativa en '{elem1} y {elem2} {accion}' y la distributiva es:"

explicacion: |
  En la copulativa, la cualidad o acción se atribuye al grupo como un todo. En la distributiva, la acción se reparte o se realiza mutuamente entre los individuos.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["adjetivos", "distribución", "cualidades"]

variables:
  elem1: uno_de(["El primer", "El segundo", "El último"])
  elem2: uno_de(["el segundo", "el tercero", "el último"])
  sust: uno_de(["piso", "nivel", "grupo"])
  adj1: uno_de(["alto", "grande", "amplio"])
  adj2: uno_de(["bajo", "pequeño", "estrecho"])

respuesta: |
  Distributiva
tipo: completar

enunciado: "En la frase '{elem1} {sust} es {adj1} y {elem2} {sust} es {adj2}', la coordinación de las cualidades es:"

explicacion: |
  Cada elemento tiene una cualidad diferente. La conjunción distribuye las propiedades: una para el primero, otra para el segundo. Es distributiva.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["verbos", "no-recíproco", "sintaxis"]

variables:
  sujeto1: uno_de(["Los niños", "Los alumnos", "Los jugadores"])
  sujeto2: uno_de(["las niñas", "las alumnas", "las jugadoras"])
  accion: uno_de(["jugaron", "estudiaron", "trabajaron"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{sujeto1} y {sujeto2} {accion} en el parque', la coordinación es distributiva porque hay dos grupos de sujetos."

explicacion: |
  Falso. La acción de jugar, estudiar o trabajar se realiza por cada grupo o por todos juntos, pero no implica reciprocidad ni repartición de medios entre los grupos. Es una coordinación copulativa.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["sintaxis", "sujeto", "análisis"]

variables:
  nombre1: uno_de(["Ana", "Luis", "María"])
  nombre2: uno_de(["Carlos", "Pedro", "Juan"])
  verbo: uno_de(["se ayudaron", "se miraron", "se conocieron"])

respuesta: |
  Ana y Carlos
tipo: completar

enunciado: "En la oración '{nombre1} y {nombre2} {verbo}', el sujeto sintáctico es:"

explicacion: |
  El sujeto es el conjunto coordinado '{nombre1} y {nombre2}'. Aunque la acción sea distributiva, gramaticalmente forman un único sujeto plural.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["conjunciones", "disyuntiva", "distribución"]

variables:
  elem1: uno_de(["Uno", "Algunos", "Otros"])
  elem2: uno_de(["de ellos", "de nosotros", "de ustedes"])
  accion: uno_de(["viene", "va", "llega"])

respuesta: |
  Distributiva (por alternancia)
tipo: completar

enunciado: "En la frase '{elem1} {elem2} {accion} por la mañana y {elem1} {elem2} {accion} por la tarde', la coordinación es:"

explicacion: |
  La conjunción 'o' (implícita en la alternancia) distribuye la acción en el tiempo. Un grupo realiza la acción en un momento y el otro en otro. Es una coordinación distributiva por alternancia.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["conectivos", "combinación", "distribución"]

variables:
  elem1: uno_de(["El libro", "El cuaderno", "La carpeta"])
  elem2: uno_de(["el lápiz", "el borrador", "la regla"])
  accion: uno_de(["es necesario", "es útil", "es importante"])

respuesta: |
  Puede ser distributiva si se aplica a cada uno individualmente
tipo: completar

enunciado: "En la frase '{elem1} y {elem2} {accion}', si se entiende que cada uno es necesario por separado, la coordinación es:"

explicacion: |
  Si la cualidad se aplica a cada elemento de forma individual (el libro es necesario y el lápiz es necesario), se trata de una coordinación distributiva de la cualidad.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["verbos", "recíproco", "sujeto"]

variables:
  sujeto: uno_de(["Ellos", "Nosotros", "Ellos"])
  verbo: uno_de(["se abrazaron", "se besaron", "se saludaron"])

respuesta: |
  La acción se realiza mutuamente
tipo: completar

enunciado: "En la oración '{sujeto} {verbo} ayer', el significado de la coordinación distributiva es que:"

explicacion: |
  Los verbos recíprocos indican que cada sujeto realiza la acción sobre el otro. A abraza a B y B abraza a A.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["objeto", "distribución", "complemento"]

variables:
  sujeto: uno_de(["Ellos", "Nosotros", "Ellos"])
  verbo: uno_de(["dieron", "enviaron", "mandaron"])
  obj1: uno_de(["el regalo", "la carta", "el paquete"])
  obj2: uno_de(["el premio", "el mensaje", "la nota"])

respuesta: |
  Distributiva
tipo: completar

enunciado: "En la oración '{sujeto} {verbo} {obj1} y {obj2} a sus amigos', si se entiende que uno dio el regalo y el otro el premio, la coordinación de los objetos directos es:"

explicacion: |
  La conjunción 'y' distribuye los objetos entre los sujetos. Cada sujeto entrega un objeto diferente. Es una coordinación distributiva del complemento directo.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "avanzado"
  tags: ["comparación", "disyuntiva", "distributiva"]

variables:
  elem1: uno_de(["Juan", "María", "Pedro"])
  elem2: uno_de(["Carlos", "Laura", "Luis"])
  accion: uno_de(["viene", "va", "llega"])

respuesta: |
  La distributiva aplica la acción a ambos, la disyuntiva excluye una opción
tipo: completar

enunciado: "La diferencia entre la coordinación distributiva en '{elem1} y {elem2} {accion}' y la disyuntiva en '{elem1} o {elem2} {accion}' es:"

explicacion: |
  La distributiva indica que la acción se realiza por ambos (individualmente o recíprocamente). La disyuntiva indica que solo uno de los dos realizará la acción, excluyendo al otro.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["verbos", "distribución", "acción"]

variables:
  elem1: uno_de(["El primero", "El segundo", "El último"])
  elem2: uno_de(["el segundo", "el tercero", "el último"])
  accion1: uno_de(["habló", "cantó", "dibujó"])
  accion2: uno_de(["escuchó", "bailó", "pintó"])

respuesta: |
  Distributiva
tipo: completar

enunciado: "En la frase '{elem1} {accion1} y {elem2} {accion2}', la coordinación de las acciones es:"

explicacion: |
  Cada elemento realiza una acción diferente. La conjunción distribuye las acciones entre los sujetos. Es una coordinación distributiva.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "basico"
  tags: ["conjunciones", "negación", "no-distributivo"]

variables:
  elem1: uno_de(["Ninguno", "Nadie", "Nada"])
  elem2: uno_de(["de ellos", "de nosotros", "de ustedes"])
  accion: uno_de(["vinieron", "llegaron", "estuvieron"])

respuesta: falso
tipo: vf

enunciado: "En la oración 'Ni {elem1} {elem2} {accion}', la coordinación 'ni... ni...' es distributiva porque niega la acción a cada uno por separado."

explicacion: |
  Falso. Aunque niega a cada uno, no implica una acción recíproca ni una repartición de medios. Es una negación acumulativa a los sujetos. No es una coordinación distributiva en el sentido sintáctico de aplicación de acción mutua o alternante.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_distributivas"
  nivel: "intermedio"
  tags: ["sintaxis", "sujeto", "análisis"]

variables:
  nombre1: uno_de(["Ana", "Luis", "María"])
  nombre2: uno_de(["Carlos", "Pedro", "Juan"])
  verbo: uno_de(["se ayudaron", "se miraron", "se conocieron"])

respuesta: |
  Ana y Carlos
tipo: completar

enunciado: "En la oración '{nombre1} y {nombre2} {verbo}', el sujeto sintáctico es:"

explicacion: |
  El sujeto es el conjunto coordinado '{nombre1} y {nombre2}'. Aunque la acción sea distributiva, gramaticalmente forman un único sujeto plural.
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
