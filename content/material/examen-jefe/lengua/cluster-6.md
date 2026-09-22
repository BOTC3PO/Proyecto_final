# Examen jefe — [PENDIENTE #656]

> Logro #656. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **100 preguntas totales** en 5/5 secciones.

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
respuesta_orden: ["Identificar el argumento más fuerte que alguien en desacuerdo podría dar", "Presentarlo de forma honesta, sin distorsionarlo (evitar el espantapájaros)", "Conceder, si corresponde, que tiene algo de razón", "Refutarlo explicando por qué la tesis se sostiene de todas formas"]
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
respuesta_orden: ["Revisar si el foco es la belleza formal o la crisis de identidad nacional", "Determinar si la mirada es cosmopolita (hacia afuera) o introspectiva (hacia España)", "Comparar el tono: refinado/artificioso vs. sobrio/austero", "Confirmar el origen del texto (Hispanoamérica vs. España) como dato adicional"]
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

## Sección: detectar-falacias (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "basico"
  tags: ["falacias", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una falacia es un razonamiento que parece válido pero no lo es: la conclusión no se sigue realmente de las premisas, aunque suene convincente."

pasos:
  - "Ver `../argumentos/`: no alcanza con que un argumento suene bien, hay que evaluar si realmente sostiene la conclusión."

explicacion: |
  Verdadero: la apariencia de validez sin sustento real es la
  definición central de falacia.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "basico"
  tags: ["ad_hominem"]

variables:
  n: uno_de([1, 1])

respuesta: "ad hominem"
tipo: mc
opciones_explicitas: ["ad hominem", "falsa dicotomía", "pendiente resbaladiza"]

enunciado: "\"No le hagas caso a su argumento económico, es un desastre con el dinero\" es un ejemplo de..."

pasos:
  - "Ataca a la persona (\"es un desastre con el dinero\") en vez de responder al argumento que dio."

explicacion: |
  El ad hominem ataca a la persona que argumenta en vez de su
  argumento.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "basico"
  tags: ["falsa_dicotomia"]

variables:
  n: uno_de([1, 1])

respuesta: "falsa dicotomía"
tipo: mc
opciones_explicitas: ["ad hominem", "falsa dicotomía", "generalización apresurada"]

enunciado: "\"O estás con nosotros o estás en contra\" es un ejemplo de..."

pasos:
  - "Presenta sólo dos opciones cuando en realidad hay posturas intermedias posibles."

explicacion: |
  La falsa dicotomía reduce las opciones a dos extremos, ignorando
  posturas intermedias.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["pendiente_resbaladiza"]

variables:
  n: uno_de([1, 1])

respuesta: "pendiente resbaladiza"
tipo: mc
opciones_explicitas: ["pendiente resbaladiza", "ad populum", "petición de principio"]

enunciado: "\"Si dejamos que falten a esta clase, van a terminar abandonando la escuela\" es un ejemplo de..."

pasos:
  - "Afirma que un paso pequeño llevará inevitablemente a una consecuencia extrema, sin justificar esa cadena."

explicacion: |
  La pendiente resbaladiza encadena consecuencias extremas sin
  justificación real de que cada paso lleve al siguiente.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["apelacion_autoridad"]

variables:
  n: uno_de([1, 1])

respuesta: "apelación a la autoridad no pertinente"
tipo: mc
opciones_explicitas: ["apelación a la autoridad no pertinente", "ad hominem", "falsa dicotomía"]

enunciado: "\"Este actor famoso recomienda esta dieta, así que debe funcionar\" es un ejemplo de..."

pasos:
  - "Cita a alguien famoso, pero sin relación de experticia real con el tema (nutrición)."

explicacion: |
  La apelación a la autoridad no pertinente cita a alguien admirado
  pero sin conocimiento experto en el tema tratado.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["ad_populum"]

variables:
  n: uno_de([1, 1])

respuesta: "apelación a la popularidad"
tipo: mc
opciones_explicitas: ["apelación a la popularidad", "generalización apresurada", "pendiente resbaladiza"]

enunciado: "\"Todo el mundo lo hace, así que no puede estar mal\" es un ejemplo de..."

pasos:
  - "Sostiene que algo es correcto sólo porque mucha gente lo cree o lo hace."

explicacion: |
  La apelación a la popularidad confunde \"muy común\" con
  \"correcto\", sin dar otra razón.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["generalizacion_apresurada"]

variables:
  n: uno_de([1, 1])

respuesta: "generalización apresurada"
tipo: mc
opciones_explicitas: ["generalización apresurada", "ad hominem", "petición de principio"]

enunciado: "\"Conocí a dos personas de esa ciudad y las dos eran maleducadas, así que toda la gente de ahí es así\" es un ejemplo de..."

pasos:
  - "Saca una conclusión general (\"toda la gente\") a partir de muy pocos casos (dos personas)."

explicacion: |
  La generalización apresurada extiende una conclusión a partir de
  una muestra demasiado chica para sostenerla.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["espantapajaros"]

variables:
  n: uno_de([1, 1])

respuesta: "espantapájaros"
tipo: mc
opciones_explicitas: ["espantapájaros", "ad populum", "falsa dicotomía"]

enunciado: "Responder \"así que vos querés que no haya ninguna regla en la escuela\" a alguien que sólo propuso flexibilizar un horario puntual es un ejemplo de..."

pasos:
  - "Distorsiona el argumento original (una propuesta puntual) hacia una versión extrema y fácil de rebatir."

explicacion: |
  La falacia del espantapájaros simplifica o exagera el argumento
  ajeno para que sea más fácil de derribar (ver `../contraargumentos/`).
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "avanzado"
  tags: ["peticion_de_principio"]

variables:
  n: uno_de([1, 1])

respuesta: "petición de principio"
tipo: mc
opciones_explicitas: ["petición de principio", "pendiente resbaladiza", "generalización apresurada"]

enunciado: "\"Este libro dice la verdad porque lo dice el libro, que siempre dice la verdad\" es un ejemplo de..."

pasos:
  - "La conclusión (\"dice la verdad\") ya está asumida dentro de la premisa (\"siempre dice la verdad\"): es circular."

explicacion: |
  La petición de principio (razonamiento circular) asume como premisa
  lo mismo que quiere demostrar como conclusión.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "avanzado"
  tags: ["falacias", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Señalar que un argumento es falaz no significa que su conclusión sea necesariamente falsa: significa que ESA razón en particular no la sostiene bien."

pasos:
  - "Puede haber una conclusión correcta defendida con un argumento falaz."

explicacion: |
  Verdadero: evaluar la falacia de un argumento es distinto de
  evaluar si la conclusión en sí es verdadera.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["ad_hominem", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El ad hominem se reconoce porque la respuesta se dirige a la persona (su carácter, su historia) y no al contenido del argumento que esa persona presentó."

pasos:
  - "Aunque la crítica a la persona sea cierta, no dice nada sobre si el argumento en sí es correcto."

explicacion: |
  Verdadero: esa desviación del contenido hacia la persona es la
  marca central del ad hominem.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "avanzado"
  tags: ["generalizacion_apresurada", "argumento_de_datos", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un argumento de datos basado en un estudio con miles de casos es distinto de una generalización apresurada basada en dos o tres casos anecdóticos, aunque ambos generalicen a partir de ejemplos."

pasos:
  - "Ver `../argumentos/`: el tamaño y representatividad de la muestra es lo que distingue un argumento de datos sólido de una generalización apresurada."

explicacion: |
  Verdadero: la cantidad y calidad de la evidencia es lo que separa
  un argumento válido de una falacia con estructura similar.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "avanzado"
  tags: ["falacias", "practica"]

variables:
  frases: ["No hay que escucharlo, ni siquiera terminó la secundaria", "O bajamos los impuestos a cero o el país se hunde", "Si permitimos esto, mañana va a estar todo permitido"]
  tipos: ["ad hominem", "falsa dicotomía", "pendiente resbaladiza"]
  idx: uno_de([0, 1, 2])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["ad hominem", "falsa dicotomía", "pendiente resbaladiza", "ad populum"]

enunciado: "\"{frases[idx]}\" es un ejemplo de..."

pasos:
  - "Identificar si ataca a la persona, reduce a dos opciones extremas, o encadena consecuencias sin justificar."

explicacion: |
  Cada fragmento fue construido para representar un tipo distinto de
  falacia común.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "avanzado"
  tags: ["falacias", "validez"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un razonamiento puede ser lógicamente válido en su estructura y aun así llegar a una conclusión falsa, si alguna de sus premisas es falsa — eso es un problema distinto al de la falacia."

pasos:
  - "Ese análisis de \"validez\" formal es justamente el tema que sigue en la cadena, `Validez de un razonamiento` (Filosofía)."

explicacion: |
  Verdadero: falacia (error en la estructura del razonamiento) y
  premisa falsa (error en el contenido) son problemas distintos.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["falacias", "publicidad"]

variables:
  n: uno_de([1, 1])

respuesta: "apelación a la autoridad no pertinente"
tipo: mc
opciones_explicitas: ["apelación a la autoridad no pertinente", "petición de principio", "falsa dicotomía"]

enunciado: "Un anuncio de crema para la piel que usa a un futbolista famoso como testimonio de que \"funciona\", sin ninguna evidencia dermatológica, apela a..."

pasos:
  - "El futbolista no es experto en dermatología: es una autoridad no pertinente para el tema."

explicacion: |
  Es un caso muy común de apelación a la autoridad no pertinente en
  publicidad.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["falacias", "metodo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El primer paso para detectar una falacia es separar la conclusión de las razones dadas, y preguntar si esas razones realmente apoyan la conclusión o sólo distraen con algo relacionado."

pasos:
  - "Esa separación permite ver con claridad si hay un salto lógico injustificado."

explicacion: |
  Verdadero: es el método básico descrito en la teoría para
  identificar una falacia.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["falsa_dicotomia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La falsa dicotomía funciona presentando sólo dos opciones extremas, cuando en realidad existen posturas intermedias que el argumento no menciona."

pasos:
  - "Esa reducción artificial a dos opciones es lo que la hace falaz, no que las dos opciones mencionadas sean falsas en sí."

explicacion: |
  Verdadero: ocultar las alternativas intermedias es el mecanismo
  central de esta falacia.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "intermedio"
  tags: ["falacias", "metodo"]

enunciado: "Ordená los pasos para evaluar si un argumento contiene una falacia."
tipo: ordenar
opciones_explicitas:
  - "Separar la conclusión de las razones dadas"
  - "Revisar si las razones responden directamente al contenido del argumento o se desvían (persona, popularidad, miedo)"
  - "Comparar el patrón encontrado con las falacias comunes conocidas"
  - "Nombrar la falacia específica si corresponde"
respuesta_orden: ["Separar la conclusión de las razones dadas", "Revisar si las razones responden directamente al contenido del argumento o se desvían (persona, popularidad, miedo)", "Comparar el patrón encontrado con las falacias comunes conocidas", "Nombrar la falacia específica si corresponde"]
explicacion: |
  El proceso va de la separación básica al reconocimiento del patrón
  específico de falacia.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "avanzado"
  tags: ["falacias", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Detectar falacias en lenguaje cotidiano es el puente directo hacia la lógica proposicional (Filosofía), que da herramientas más precisas y sistemáticas para analizar la validez de un razonamiento."

pasos:
  - "Ver `../../filosofia/logica-proposicional/`: es el mismo problema (razonamientos que fallan) visto con más formalismo."

explicacion: |
  Verdadero: por eso detectar falacias es prerrequisito directo del
  siguiente tema en la cadena, ya en otra materia.
```

```
metadata:
  materia: "lengua"
  tema: "detectar_falacias"
  nivel: "avanzado"
  tags: ["falacias", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Reconocer falacias comunes (ad hominem, falsa dicotomía, apelación a la popularidad) es una herramienta directa para leer noticias, publicidad y debates con más ojo crítico."

pasos:
  - "Muchos argumentos persuasivos del día a día se apoyan, precisamente, en estas falacias en vez de en razones sólidas."

explicacion: |
  Verdadero: la aplicación práctica más directa de este tema es la
  lectura crítica de textos persuasivos cotidianos.
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
respuesta_orden: ["Revisar si aparecen elementos sobrenaturales tratados con naturalidad (realismo mágico)", "Buscar estructuras narrativas complejas o poco convencionales", "Identificar si hay una exploración de la identidad o política latinoamericana", "Confirmar la época (décadas de 1960-1970) y el origen hispanoamericano del autor"]
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

## Sección: debate-refutar-en-vivo (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "basico"
  tags: ["debate", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Refutar en vivo exige reconocer errores de razonamiento, igual que en detectar-falacias, pero sin tiempo para revisar y corregir como en un texto escrito."

pasos:
  - "Ver `../detectar-falacias/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito de Lengua.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "basico"
  tags: ["estructura_del_debate", "apertura"]

variables:
  n: uno_de([1, 1])

respuesta: "apertura"
tipo: mc
opciones_explicitas: ["apertura", "refutación", "réplica", "cierre"]

enunciado: "La etapa del debate en la que cada parte presenta su tesis y sus argumentos principales se llama..."

pasos:
  - "Es la primera etapa de la estructura básica de un debate formal."

explicacion: |
  La apertura presenta la postura inicial de cada parte.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "basico"
  tags: ["estructura_del_debate", "refutacion"]

variables:
  n: uno_de([1, 1])

respuesta: "refutación"
tipo: mc
opciones_explicitas: ["apertura", "refutación", "réplica", "cierre"]

enunciado: "La etapa del debate en la que cada parte responde a los argumentos de la otra, señalando falacias o premisas débiles, se llama..."

pasos:
  - "Es la etapa central del debate, donde se aplica directamente el vocabulario de falacias."

explicacion: |
  La refutación es el momento de responder críticamente a los
  argumentos del rival.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["estructura_del_debate", "replica"]

variables:
  n: uno_de([1, 1])

respuesta: "réplica"
tipo: mc
opciones_explicitas: ["apertura", "refutación", "réplica", "cierre"]

enunciado: "La etapa del debate en la que se responde a la refutación recibida se llama..."

pasos:
  - "Sigue a la refutación, cerrando el intercambio directo de argumentos."

explicacion: |
  La réplica responde a la refutación que se recibió previamente.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "basico"
  tags: ["estructura_del_debate", "cierre"]

variables:
  n: uno_de([1, 1])

respuesta: "cierre"
tipo: mc
opciones_explicitas: ["apertura", "refutación", "réplica", "cierre"]

enunciado: "La etapa del debate en la que cada parte resume su postura y por qué resiste la refutación del rival se llama..."

pasos:
  - "Es la última etapa de la estructura básica del debate."

explicacion: |
  El cierre resume la postura final de cada parte del debate.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["estructura_del_debate", "orden"]

enunciado: "Ordená las cuatro etapas básicas de un debate formal."
tipo: ordenar
opciones_explicitas:
  - "Apertura"
  - "Refutación"
  - "Réplica"
  - "Cierre"
respuesta_orden: ["Apertura", "Refutación", "Réplica", "Cierre"]
explicacion: |
  El orden sigue la secuencia lógica del debate: presentar, refutar,
  replicar y cerrar.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["tecnicas_de_refutacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Nombrar con precisión la falacia del rival (\"eso es un ataque a la persona, no una respuesta a mi argumento\") es más contundente que decir vagamente \"eso no tiene sentido\"."

pasos:
  - "Ver `../detectar-falacias/`: nombrar el error con precisión demuestra dominio del vocabulario técnico."

explicacion: |
  Verdadero: es una de las técnicas de refutación en vivo más
  efectivas descritas en la teoría.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["tecnicas_de_refutacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si el rival da una cifra o un dato sin fuente, pedirla en el momento pone en evidencia la debilidad del argumento."

pasos:
  - "Es la misma lógica de cifras sin sustento ya vista en `../detectar-falacias/`, aplicada en vivo."

explicacion: |
  Verdadero: es otra de las técnicas de refutación descritas en la
  teoría.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["tecnicas_de_refutacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Señalar específicamente cuál parte de un argumento es floja (en vez de descartar todo el argumento en bloque) es más preciso y más difícil de rebatir para el rival."

pasos:
  - "Un argumento del rival puede tener una parte razonable y otra débil al mismo tiempo."

explicacion: |
  Verdadero: es la técnica más sofisticada de refutación descrita en
  la teoría.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["escucha_activa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un error común en un debate es preparar la respuesta propia mientras el rival todavía está hablando, sin escuchar realmente lo que dice."

pasos:
  - "Eso lleva a responder a un argumento distinto del que realmente se hizo."

explicacion: |
  Verdadero: es el error central que describe la falta de escucha
  activa en un debate.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["escucha_activa", "espantapajaros"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "No escuchar activamente al rival y responder a una versión imaginada de su argumento es, en la práctica, una forma involuntaria de la falacia del espantapájaros."

pasos:
  - "Ver `../detectar-falacias/`: es la misma falacia, ahora aplicada de forma no intencional por falta de atención."

explicacion: |
  Verdadero: es la conexión directa entre la falta de escucha activa
  y una falacia ya conocida.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["escucha_activa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Escuchar activamente es lo que permite refutar el argumento real del rival, no una versión distorsionada o imaginada de él."

pasos:
  - "Es la razón concreta por la que la escucha activa es central en un debate en vivo."

explicacion: |
  Verdadero: es la conclusión práctica de por qué la escucha activa
  importa tanto en este contexto.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["manejo_de_presion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Perder la calma o subir el tono durante un debate no fortalece un argumento, y puede hacer que la audiencia perciba menos credibilidad en quien lo pierde."

pasos:
  - "El manejo emocional bajo presión es parte de la habilidad de debatir en vivo, más allá del contenido argumentativo."

explicacion: |
  Verdadero: es la razón por la que el manejo de la calma es una
  habilidad central del debate en vivo.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "basico"
  tags: ["debate", "presion_de_tiempo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un debate en vivo genera presión de tiempo, a diferencia de un texto escrito que se puede revisar y corregir con calma antes de presentarlo."

pasos:
  - "Es la diferencia central entre refutar en un texto y refutar en vivo."

explicacion: |
  Verdadero: es la diferencia de contexto que define este tema frente
  a `../detectar-falacias/`.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["tecnicas_de_refutacion", "practica"]

variables:
  situaciones: ["decir \"eso es una apelación a la popularidad, no una razón real\"", "pedir la fuente exacta de un dato citado sin referencia"]
  tecnicas: ["señalar la falacia por su nombre", "pedir evidencia concreta"]
  idx: uno_de([0, 1])

respuesta: tecnicas[idx]
tipo: mc
opciones_explicitas: ["señalar la falacia por su nombre", "pedir evidencia concreta", "distinguir la parte válida de la débil"]

enunciado: "La acción de \"{situaciones[idx]}\" corresponde a la técnica de refutación de..."

pasos:
  - "Cada acción concreta corresponde a una de las técnicas de refutación descritas en la teoría."

explicacion: |
  Reconocer qué técnica se está usando ayuda a aplicarlas de forma
  deliberada durante un debate.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["debate", "negociacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Debatir y refutar en vivo es la base directa de la negociación, que agrega el objetivo de llegar a un acuerdo, no sólo \"ganar\" el intercambio."

pasos:
  - "Ver `../negociacion/`: es el prerrequisito directo del siguiente tema de la subrama."

explicacion: |
  Verdadero: es la relación de prerrequisito con el tema siguiente.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["debate", "persuasion_etica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este tema también es prerrequisito de persuasión ética vs. manipulación, que distingue técnicas legítimas de manipulación en este mismo contexto de debate en vivo."

pasos:
  - "Ver `../persuasion-etica-vs-manipulacion/`: comparte este tema como uno de sus dos prerrequisitos."

explicacion: |
  Verdadero: es otra de las relaciones de prerrequisito de este tema
  dentro de la subrama.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["debate", "metodo"]

enunciado: "Ordená los pasos para refutar un argumento en vivo durante un debate."
tipo: ordenar
opciones_explicitas:
  - "Escuchar activamente el argumento completo del rival, sin preparar la respuesta antes de tiempo"
  - "Identificar si hay una falacia o una premisa débil en ese argumento"
  - "Nombrar con precisión el error encontrado"
  - "Responder de forma clara y calmada, sin perder el foco por la presión del momento"
respuesta_orden: ["Escuchar activamente el argumento completo del rival, sin preparar la respuesta antes de tiempo", "Identificar si hay una falacia o una premisa débil en ese argumento", "Nombrar con precisión el error encontrado", "Responder de forma clara y calmada, sin perder el foco por la presión del momento"]
explicacion: |
  El proceso va de escuchar activamente a identificar el error y
  responder con calma y precisión.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["debate", "etica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Refutar bien en un debate no significa usar cualquier técnica para \"ganar\" a toda costa, incluidas las falacias — significa señalar con precisión errores reales de razonamiento."

pasos:
  - "Es un anticipo del tema siguiente sobre persuasión ética vs. manipulación."

explicacion: |
  Verdadero: refutar honestamente, no manipular, es el estándar
  esperado en un debate bien conducido.
```

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["debate", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al participar en un debate escolar, conviene escuchar activamente al rival, identificar falacias con precisión y responder con calma, en vez de interrumpir o subir el tono para tratar de \"ganar\"."

pasos:
  - "Es la aplicación práctica directa de las técnicas estudiadas en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema en un contexto
  escolar real de debate.
```

