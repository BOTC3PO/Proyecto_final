# Examen jefe — [PENDIENTE #906]

> Logro #906. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **120 preguntas totales** en 5/5 secciones.

---

## Sección: armonia-basica-acordes-tonalidad (25 preguntas)

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["armonia", "teoria_musical"]

tipo: mc
opciones_explicitas: ["La sucesión de notas que se escuchan una tras otra", "La combinación de tres o más notas que suenan simultáneamente", "La velocidad a la que se interpretan las notas", "La intensidad con la que suena un instrumento"]

respuesta: "La combinación de tres o más notas que suenan simultáneamente"

enunciado: "En la teoría musical, un acorde se define como ___."

explicacion: |
  Un acorde es la superposición de tres o más notas musicales que suenan al mismo tiempo, creando una sonoridad específica (dos notas simultáneas forman un intervalo, no un acorde).
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "centro_tonal"]

tipo: vf

enunciado: "La tonalidad de una pieza musical es el sistema de relaciones que establece una jerarquía entre las notas, donde una nota específica actúa como el centro de gravedad o 'casa'."

respuesta: verdadero

explicacion: |
  Correcto. La tonalidad organiza el lenguaje musical mediante una jerarquía donde la tónica es el punto de reposo principal.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["acordes", "intervalos"]

tipo: completar
respuesta: "mayor"
respuestas_validas:
  - "mayor"

enunciado: "Si un acorde está formado por la raíz, una tercera mayor y una quinta justa, se trata de un acorde ___."

explicacion: |
  La estructura de un acorde mayor se define por tener una tercera mayor (4 semitonos) entre la raíz y la tercera, y una quinta justa (7 semitonos) entre la raíz y la quinta.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["terminologia", "acordes"]

tipo: ordenar
opciones_explicitas: ["Raíz", "Tercera", "Quinta"]

respuesta_orden: ["Raíz", "Tercera", "Quinta"]

enunciado: "Ordena los elementos de un acorde básico (tríada) desde la nota más grave a la más aguda:"

explicacion: |
  En una tríada estándar, la raíz es la nota fundamental, la tercera define la cualidad del acorde y la quinta es la nota más alta de la tríada básica.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "percepcion"]

tipo: mc
opciones_explicitas: ["Establecer la escala de notas que se utilizará", "Determinar el volumen de la música", "Indicar el ritmo de la pieza", "Definir el género musical"]

respuesta: "Establecer la escala de notas que se utilizará"

enunciado: "La principal función de la tonalidad en una composición es ___."

explicacion: |
  La tonalidad proporciona un marco de referencia que determina qué notas son naturales, accidentadas o de tensión dentro de una obra.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["armonia", "acordes", "intervalos"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "disminuido"]

enunciado: "Un acorde mayor se construye mediante la superposición de dos intervalos. Si tomamos una nota fundamental y le sumamos una tercera mayor (4 semitonos) y luego una quinta justa (7 semitonos desde la fundamental), el acorde resultante es de tipo ___."

explicacion: |
  Un acorde mayor se define por su estructura de intervalos: 1 - 3 mayor - 5 justa. En semitonos: 0 - 4 - 7.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "escala", "teoria"]

respuesta: verdadero
tipo: vf
enunciado: "Si una pieza musical utiliza exclusivamente las notas de la escala de Do Mayor (Do, Re, Mi, Fa, Sol, La, Si) y sus acordes derivados, ¿es correcto afirmar que la pieza está en la tonalidad de Do Mayor?"

explicacion: |
  La tonalidad está determinada por la escala que sirve como centro tonal y marco de referencia para la melodía y la armonía.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["acordes", "semitonos"]

variables:
  base: uno_de(["Do", "Re", "Mi"])

respuesta: "3"
tipo: completar
respuestas_validas:
  - "3"

enunciado: "Para transformar un acorde mayor en un acorde menor, debemos reducir la tercera mayor a una tercera menor. Si partimos de la nota fundamental {base}, debemos sumar exactamente ___ semitonos para obtener la tercera menor."

pasos:
  - "Identificar la nota fundamental: {base}"
  - "Calcular la distancia de la tercera mayor (4 semitonos)"
  - "Restar 1 semitono para obtener la tercera menor (4 - 1 = 3 semitonos)"

explicacion: |
  La diferencia fundamental entre un acorde mayor y uno menor es la tercera. El acorde menor tiene la tercera menor (3 semitonos), mientras que el mayor tiene la tercera mayor (4 semitonos).
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["acordes", "teoria"]

respuesta_orden: ["Fundamental", "Tercera", "Quinta"]
tipo: ordenar

opciones_explicitas: ["Fundamental", "Tercera", "Quinta"]

enunciado: "Ordena los elementos de una tríade musical desde la nota más grave (la base) hasta la más aguda, siguiendo la estructura estándar de un acorde."

explicacion: |
  Una tríada básica se compone de tres notas: la fundamental (la raíz), la tercera (que determina el modo) y la quinta (que da estabilidad).
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["intervalos", "calculo"]

variables:
  nota_base: uno_de(["Do", "Re", "Mi", "Fa"])

respuesta: "7"
tipo: completar
respuestas_validas:
  - "7"

enunciado: "En el sistema de semitonos, una quinta justa siempre requiere un total de 7 semitonos desde la fundamental. Si partimos de la nota {nota_base}, ¿cuántos semitonos debemos subir para llegar a la quinta justa?"

explicacion: |
  El tamaño del intervalo de quinta justa (7 semitonos) es siempre el mismo, sin importar cuál sea la nota fundamental de partida.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["teoria_musical", "acordes"]

respuesta: "un conjunto de tres o más notas que suenan simultáneamente"
tipo: completar
respuestas_validas:
  - "un conjunto de tres o más notas que suenan simultáneamente"
  - "un conjunto de notas que suenan al mismo tiempo"

enunciado: "En teoría musical, un acorde se define como ___."

explicacion: |
  Un acorde no es simplemente cualquier grupo de notas, sino la superposición de tres o más notas que crean una sonoridad específica (como mayor, menor o disminuido).
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["tonalidad", "escala"]

respuesta: "tonalidad"
tipo: completar
respuestas_validas:
  - "tonalidad"
enunciado: "La escala es el conjunto de notas que forman la base de una ___."

explicacion: |
  Es un error común confundir escala con tonalidad. La escala es la sucesión de notas (el "mapa"), mientras que la tonalidad es el sistema de relaciones jerárquicas que se establece alrededor de una nota fundamental (el "territorio").
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "tonica"]

variables:
  escenario: uno_de([["Do mayor", "Do"], ["Sol mayor", "Sol"], ["La menor", "La"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Do", "Sol", "La", "Fa"]

enunciado: "Si una pieza musical está en la tonalidad de {escenario[0]}, la nota que actúa como centro de gravedad y reposo es ___."

explicacion: |
  La tónica es la nota fundamental de la tonalidad. Es el punto de máxima estabilidad hacia el cual tiende la música para sentir que ha "llegado a casa".
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["intervalos", "acordes"]

respuesta: "tercera mayor, tercera menor, quinta justa"
tipo: completar
respuestas_validas:
  - "tercera mayor, tercera menor, quinta justa"

enunciado: "Para construir un acorde mayor estándar, se requiere la fundamental, una ___ y una ___."

explicacion: |
  Un acorde mayor se construye con intervalos de tercera mayor (4 semitonos) respecto a la fundamental y quinta justa (7 semitonos).
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["jerarquia", "funcionalidad"]

respuesta_orden: ["Tónica", "Subdominante", "Dominante"]
tipo: ordenar
opciones_explicitas: ["Tónica", "Subdominante", "Dominante"]

enunciado: "Ordena los grados de una escala de mayor según su función de estabilidad, desde la que tiene mayor reposo a la que genera mayor tensión:"

explicacion: |
  La Tónica es el reposo absoluto; la Subdominante es una tensión media que prepara el camino; la Dominante es la máxima tensión que exige volver a la tónica.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["armonia", "acordes"]

respuesta: "acorde"
tipo: mc
opciones_explicitas: ["melodia", "acorde", "ritmo", "timbre"]

enunciado: "Mientras que la melodía es una sucesión de notas en el tiempo, un ___ es la combinación de tres o más notas sonando de forma simultánea."

explicacion: |
  Un acorde se define por la superposición de diferentes alturas (notas) al mismo tiempo, creando una sonoridad específica.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["tonalidad", "escala"]

respuesta: "tonalidad"
tipo: completar
respuestas_validas:
  - "tonalidad"
enunciado: "Si una pieza musical utiliza un conjunto de notas que actúan como centro gravitacional, estableciendo una jerarquía de tensión y reposo, ¿podemos decir que la pieza posee una ___?"

explicacion: |
  La tonalidad es el sistema de organización que utiliza una escala como centro de gravedad. Si no hay un centro tonal, la música es atonal.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["acordes", "intervalos"]

variables:
  es_mayor: verdadero

respuesta: "mayor"
tipo: completar
respuestas_validas:
  - "mayor"
  - "menor"

enunciado: "Un acorde se diferencia de una tríada de dos notas (intervalo) por tener tres notas. Si la distancia entre la primera y la tercera nota es de dos tonos enteros, el acorde es de tipo ___."

explicacion: |
  La tercera mayor es la que define la sonoridad brillante del acorde mayor.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["armonia", "melodia"]

respuesta_orden: ["melodia", "armonia", "ritmo"]
tipo: ordenar

opciones_explicitas: ["melodia", "armonia", "ritmo"]

enunciado: "Ordena los elementos fundamentales de la música, desde la dimensión horizontal (sucesión) hacia la dimensión vertical (simultaneidad):"

explicacion: |
  La melodía es horizontal (una nota tras otra), la armonía es vertical (notas a la vez) y el ritmo es la duración de ambas.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["consonancia", "disonancia"]

respuesta: verdadero
tipo: vf
enunciado: "En el contexto de la armonía, cuando un acorde produce una sensación de estabilidad y reposo, se dice que es una consonancia. ¿Es esto cierto?"

explicacion: |
  La consonancia es la cualidad de los intervalos o acordes que suenan estables y no requieren resolución inmediata.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes"
  nivel: "basico"
  tags: ["armonia", "teoria_musical"]

variables:
  datos: [["Do-Mi-Sol", "tríada de Do"], ["Re-Fa-La", "tríada de Re"], ["Mi-Sol-Si", "tríada de Mi"]]
  idx: uno_de([0, 1, 2])

enunciado: "Un músico está practicando una escala y toca las notas {datos[idx][0]}. Según la teoría musical, este conjunto de notas forma una {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "tríada de Do"
  - "tríada de Re"
  - "tríada de Mi"

explicacion: |
  Un acorde se forma al superponer tres o más notas distintas. En este caso, las notas pertenecen a la estructura de una tríada básica.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "teoria_musical"]

variables:
  datos: [["La menor", "la menor"], ["Sol mayor", "Sol mayor"], ["Do mayor", "Do mayor"]]
  idx: uno_de([0, 1, 2])

enunciado: "Una pieza musical suena melancólica y su nota de reposo (tónica) es {datos[idx][0]}. ¿En qué tonalidad se encuentra la pieza?"

opciones_explicitas: ["la menor", "Sol mayor", "Do mayor"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  La tonalidad está determinada por la nota fundamental (tónica) que actúa como centro gravitacional de la obra.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes"
  nivel: "intermedio"
  tags: ["intervalos", "acordes"]

enunciado: "Si un acorde se construye con la raíz, su tercera y su quinta, y la tercera es una tercera mayor, ¿el acorde es mayor?"

respuesta: verdadero
tipo: vf

explicacion: |
  La relación entre la primera y la tercera nota define si el acorde es mayor o menor. Si la tercera es mayor, el acorde es mayor.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes"
  nivel: "basico"
  tags: ["armonia", "teoria_musical"]

enunciado: "Para construir un acorde de Do Mayor de forma ascendente, ¿cuál es el orden correcto de sus notas?"

opciones_explicitas: ["Do, Mi, Sol", "Sol, Mi, Do", "Do, Sol, Mi"]
respuesta: "Do, Mi, Sol"
tipo: mc

explicacion: |
  Un acorde se construye por intervalos superpuestos (terceras) partiendo desde la nota raíz hacia arriba.
```

```
metadata:
  materia: "arte"
  tema: "armonia_basica_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "teoria_musical"]

variables:
  datos: [["La pieza termina en Do", "Do mayor"], ["La pieza termina en Sol", "Sol mayor"], ["La pieza termina en Fa", "Fa mayor"]]
  idx: uno_de([0, 1, 2])

enunciado: "En una composición, {datos[idx][0]}. Si la última nota es la tónica, ¿cuál es la tonalidad probable?"

opciones_explicitas: ["Do mayor", "Sol mayor", "Fa mayor"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  La resolución final en la tónica es el indicador más fuerte para identificar la tonalidad de una pieza musical.
```

## Sección: narrativa-audiovisual/montaje (26 preguntas)

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "basico"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué es el montaje (edición) en narrativa audiovisual?"
tipo: mc
opciones_explicitas:
  - "El proceso de seleccionar, ordenar y unir los planos ya filmados para construir la narración completa"
  - "El proceso de escribir el guion antes de filmar"
  - "La elección del tamaño de plano al momento de filmar"
respuesta: "El proceso de seleccionar, ordenar y unir los planos ya filmados para construir la narración completa"

explicacion: |
  Es la última gran decisión creativa, después de filmar todos los
  planos individuales.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "Dos películas filmadas con exactamente los mismos planos pueden contar historias completamente distintas, según cómo se los monte."

explicacion: |
  Es la idea central de por qué el montaje importa tanto como la
  filmación.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "basico"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué es un corte directo (o corte seco)?"
tipo: mc
opciones_explicitas:
  - "Un plano pasa al siguiente de forma instantánea, sin transición visible"
  - "Un plano se superpone gradualmente con el siguiente"
  - "La imagen se oscurece hasta el negro antes del siguiente plano"
respuesta: "Un plano pasa al siguiente de forma instantánea, sin transición visible"

explicacion: |
  Es el tipo de corte más común — bien hecho, casi no se nota.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "basico"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué es un fundido a negro?"
tipo: mc
opciones_explicitas:
  - "La imagen se oscurece gradualmente hasta el negro, antes de que aparezca el siguiente plano"
  - "Dos planos se combinan al mismo tiempo en pantalla dividida"
  - "El plano se congela sin cortar al siguiente"
respuesta: "La imagen se oscurece gradualmente hasta el negro, antes de que aparezca el siguiente plano"

explicacion: |
  Suele marcar el paso del tiempo, o el cierre de una escena o
  capítulo.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué es un encadenado (o disolvencia)?"
tipo: mc
opciones_explicitas:
  - "Un plano se superpone gradualmente con el siguiente, mezclándose por un momento"
  - "Un corte instantáneo, sin ninguna transición"
  - "Un plano que se repite exactamente igual dos veces seguidas"
respuesta: "Un plano se superpone gradualmente con el siguiente, mezclándose por un momento"

explicacion: |
  Sugiere una conexión entre ambas imágenes, o un paso de tiempo más
  suave que el corte directo.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué es un corte por movimiento (match cut)?"
tipo: mc
opciones_explicitas:
  - "Un corte que conecta dos planos que comparten una forma, movimiento o acción similar"
  - "Un corte que siempre implica cámara lenta"
  - "Un corte que sólo se usa al final de una película"
respuesta: "Un corte que conecta dos planos que comparten una forma, movimiento o acción similar"

explicacion: |
  Genera una transición fluida, y a veces un significado simbólico
  adicional.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "Un corte por movimiento (match cut) puede usarse para sugerir un significado simbólico, no sólo una transición fluida."

explicacion: |
  Como el ejemplo clásico de un hueso lanzado al aire cortando
  directamente a una nave espacial.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué es la continuidad, en el montaje audiovisual?"
tipo: mc
opciones_explicitas:
  - "Mantener la coherencia espacial y temporal entre planos consecutivos, para no confundir al espectador"
  - "Filmar todos los planos de una escena sin cortar la cámara"
  - "Usar siempre el mismo tipo de corte en toda la película"
respuesta: "Mantener la coherencia espacial y temporal entre planos consecutivos, para no confundir al espectador"

explicacion: |
  Sin continuidad, el espectador puede perder la orientación de dónde
  están los personajes o qué acaba de pasar.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje", "vocabulario"]

enunciado: "¿En qué consiste la regla de los 180° en continuidad de montaje?"
tipo: mc
opciones_explicitas:
  - "Se traza una línea imaginaria entre los sujetos de la escena, y la cámara no la cruza de un plano al siguiente"
  - "Cada plano debe durar exactamente 180 segundos"
  - "La cámara debe rotar 180° entre cada corte"
respuesta: "Se traza una línea imaginaria entre los sujetos de la escena, y la cámara no la cruza de un plano al siguiente"

explicacion: |
  Si la cruzara, los personajes parecerían "cambiar de lado" en
  pantalla, sin haberse movido realmente.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "Si la cámara cruza la línea imaginaria de la regla de los 180° entre un plano y el siguiente, los personajes pueden parecer haber cambiado de posición relativa, aunque no se hayan movido."

explicacion: |
  Es justamente el problema de continuidad que esa regla busca evitar.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué define el ritmo de una secuencia montada?"
tipo: mc
opciones_explicitas:
  - "La duración de cada plano y la frecuencia con la que ocurren los cortes"
  - "La cantidad de personajes que aparecen en la escena"
  - "El presupuesto total de la producción"
respuesta: "La duración de cada plano y la frecuencia con la que ocurren los cortes"

explicacion: |
  Planos cortos y cortes frecuentes dan un ritmo distinto que planos
  largos y pocos cortes.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué sensación suele transmitir un montaje rápido (planos cortos, cortes frecuentes)?"
tipo: mc
opciones_explicitas:
  - "Tensión, acción, urgencia"
  - "Calma y contemplación"
  - "Ninguna sensación distinta a un montaje lento"
respuesta: "Tensión, acción, urgencia"

explicacion: |
  Típico de una persecución o una pelea.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué sensación suele transmitir un montaje lento (planos largos, pocos cortes)?"
tipo: mc
opciones_explicitas:
  - "Contemplación, calma, peso dramático"
  - "Urgencia y adrenalina"
  - "Confusión total en el espectador"
respuesta: "Contemplación, calma, peso dramático"

explicacion: |
  Típico de un momento íntimo o reflexivo de la historia.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué demostró el experimento conocido como el 'efecto Kuleshov'?"
tipo: mc
opciones_explicitas:
  - "Que el significado que se le da a un plano depende del plano que lo precede o sigue, no sólo de su contenido aislado"
  - "Que el sonido no influye en cómo se percibe una escena"
  - "Que el montaje no cambia en nada la interpretación de una historia"
respuesta: "Que el significado que se le da a un plano depende del plano que lo precede o sigue, no sólo de su contenido aislado"

explicacion: |
  El mismo plano de una cara neutra se interpretó como hambre, tristeza
  o ternura, según qué plano se mostraba justo antes.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "En el experimento del efecto Kuleshov, se usó el mismo plano exacto de la cara de un actor, combinado con distintos planos previos, para ver cómo cambiaba la interpretación del espectador."

explicacion: |
  El plano del actor era idéntico en los tres casos; lo que cambiaba
  era el plano que lo precedía.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "El efecto Kuleshov muestra que el montaje no sólo organiza lo ya filmado: puede crear significado nuevo que no estaba en ningún plano individual."

explicacion: |
  Es la conclusión teórica central de ese experimento.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje", "ordenar"]

enunciado: "Ordená estos tipos de transición del más abrupto (instantáneo) al más gradual."
tipo: ordenar
opciones_explicitas:
  - "Fundido a negro"
  - "Corte directo"
  - "Encadenado (disolvencia)"
respuesta_orden: ["Corte directo", "Encadenado (disolvencia)", "Fundido a negro"]
explicacion: |
  El corte directo es instantáneo; el encadenado mezcla dos imágenes
  por un momento; el fundido a negro pasa primero por el negro completo,
  la transición más marcada de las tres.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "El montaje no es sólo trabajo sobre la imagen: también incluye el sonido (diálogo, música, efectos) que acompaña cada corte."

explicacion: |
  El sonido puede reforzar o contradecir deliberadamente lo que se ve
  en pantalla.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "Es un recurso narrativo válido usar música o sonido que contradiga deliberadamente lo que se ve en pantalla (por ejemplo, música alegre sobre una escena triste)."

explicacion: |
  Genera un efecto de ironía o contraste emocional, en vez de reforzar
  lo obvio.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "basico"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "El corte directo (o corte seco) es el tipo de transición más común en el cine y el video."

explicacion: |
  Bien hecho, es casi invisible para el espectador.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué tipo de transición se usa típicamente para marcar el cierre de una escena o el paso de un tiempo largo (por ejemplo, varios años)?"
tipo: mc
opciones_explicitas:
  - "El fundido a negro"
  - "El corte directo"
  - "El corte por movimiento"
respuesta: "El fundido a negro"

explicacion: |
  Su pausa visual marca un cierre más fuerte que un corte directo.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "basico"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "Una escena de persecución o pelea suele montarse con planos cortos y cortes frecuentes (montaje rápido), para transmitir tensión."

explicacion: |
  El ritmo del montaje acompaña la sensación de urgencia de la acción.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "El montaje trabaja sobre los planos ya encuadrados y filmados: no puede cambiar la composición interna de un plano, sólo cómo se organiza y combina con los demás."

explicacion: |
  Por eso este módulo depende de `../encuadre/`.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje"]

respuesta: falso
tipo: vf

enunciado: "El montaje siempre debe respetar la continuidad estricta (regla de los 180° incluida), sin ninguna excepción posible."

explicacion: |
  Es la norma general, pero algunos estilos narrativos rompen la
  continuidad deliberadamente para generar confusión, desorientación o
  un efecto artístico específico.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "basico"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "El montaje es, típicamente, la última gran etapa creativa antes de que la obra audiovisual esté terminada."

explicacion: |
  Viene después de filmar todos los planos con su encuadre ya decidido.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el montaje?"
tipo: mc
opciones_explicitas:
  - "Para saber que una historia audiovisual no es la suma de sus planos, sino cómo se combinan, en qué orden, con qué transición y con qué ritmo"
  - "Sólo sirve para acortar el tiempo total de una película"
  - "No tiene ninguna influencia real en cómo se percibe una historia"
respuesta: "Para saber que una historia audiovisual no es la suma de sus planos, sino cómo se combinan, en qué orden, con qué transición y con qué ritmo"

explicacion: |
  Es la conclusión que conecta plano, encuadre y montaje en una sola
  cadena narrativa.
```

## Sección: rosetones-y-simetria (24 preguntas)

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "basico"
  tags: ["rosetones", "vocabulario"]

enunciado: "¿Qué es un rosetón?"
tipo: mc
opciones_explicitas:
  - "Una ventana circular ornamentada con un patrón geométrico repetido alrededor de un centro"
  - "Cualquier ventana redonda, sin importar si tiene un patrón o no"
  - "Un tipo de columna usada en la arquitectura gótica"
respuesta: "Una ventana circular ornamentada con un patrón geométrico repetido alrededor de un centro"

explicacion: |
  Es típico de la arquitectura gótica, como en las grandes catedrales.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "basico"
  tags: ["rosetones"]

respuesta: verdadero
tipo: vf

enunciado: "Un rosetón bien diseñado se basa en una construcción geométrica sistemática, no en un dibujo decorativo al azar."

explicacion: |
  Divide la circunferencia en partes iguales y repite un motivo con
  transformaciones geométricas precisas.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones", "problema"]

variables:
  n: uno_de([6, 8, 9, 10, 12])

respuesta: 360 / n
tipo: input
tolerancia_abs: 0

enunciado: "Un rosetón se divide en {n} secciones iguales. ¿Cuántos grados mide cada sección?"

pasos:
  - "360° ÷ {n} = {360 / n}°"

explicacion: |
  Es la misma fórmula del ángulo central de una circunferencia, dividida
  en partes iguales.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones", "problema"]

variables:
  n: uno_de([6, 8, 9, 10, 12])

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Un rosetón tiene secciones de {360 / n}° cada una. ¿Cuántas secciones tiene en total?"

pasos:
  - "360° ÷ {360 / n}° = {n} secciones"

explicacion: |
  Se despeja n dividiendo 360° por el ángulo de cada sección.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones", "vocabulario"]

enunciado: "¿Qué transformación geométrica se usa para repetir el motivo de un rosetón alrededor del centro?"
tipo: mc
opciones_explicitas:
  - "La rotación"
  - "La traslación"
  - "La homotecia"
respuesta: "La rotación"

explicacion: |
  El motivo se repite rotándolo el mismo ángulo, una y otra vez, hasta
  completar la vuelta.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones", "vocabulario"]

enunciado: "¿Qué significa que un rosetón tenga 'simetría rotacional de orden n'?"
tipo: mc
opciones_explicitas:
  - "Que se ve exactamente igual después de rotarlo 360°/n"
  - "Que tiene exactamente n colores distintos"
  - "Que fue diseñado hace n siglos"
respuesta: "Que se ve exactamente igual después de rotarlo 360°/n"

explicacion: |
  Es la misma definición de simetría rotacional ya vista en
  `../../matematica/transformaciones-geometricas/rotacion/`.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones"]

respuesta: verdadero
tipo: vf

enunciado: "Cuantas más secciones (n) tiene un rosetón, más chico es su ángulo mínimo de simetría rotacional."

explicacion: |
  El ángulo es 360°/n: a mayor n, menor el resultado de esa división.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones", "vocabulario"]

enunciado: "¿Qué es la simetría axial en un rosetón?"
tipo: mc
opciones_explicitas:
  - "Que cada sector es el reflejo especular de su vecino, respecto de una línea que pasa por el centro"
  - "Que todos los sectores tienen exactamente el mismo color"
  - "Que el rosetón tiene forma de eje, en vez de circular"
respuesta: "Que cada sector es el reflejo especular de su vecino, respecto de una línea que pasa por el centro"

explicacion: |
  Es aplicar la reflexión (ver
  `../../matematica/transformaciones-geometricas/reflexion/`) dentro del
  diseño del rosetón.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones", "problema"]

variables:
  n: uno_de([6, 8, 10, 12])

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Un rosetón de {n} secciones tiene simetría axial completa. ¿Cuántos ejes de simetría tiene en total?"

pasos:
  - "Un eje de simetría por cada sección: {n} ejes"

explicacion: |
  Cada eje pasa por el centro, dividiendo el rosetón en dos mitades
  espejadas.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones"]

respuesta: verdadero
tipo: vf

enunciado: "Un rosetón bien diseñado suele combinar simetría rotacional Y simetría axial (reflexión) a la vez, no usar sólo una de las dos."

explicacion: |
  Es lo que le da la sensación de máximo orden y armonía visual.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones", "vocabulario"]

enunciado: "¿Cuál es el primer paso para diseñar un rosetón?"
tipo: mc
opciones_explicitas:
  - "Elegir n, la cantidad de secciones o 'pétalos' que va a tener"
  - "Elegir los colores del vitral"
  - "Calcular el costo del material"
respuesta: "Elegir n, la cantidad de secciones o 'pétalos' que va a tener"

explicacion: |
  Todo el resto de la construcción (el ángulo de cada sección) depende
  de ese número.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones", "ordenar"]

enunciado: "Ordená los pasos para diseñar un rosetón con n secciones."
tipo: ordenar
opciones_explicitas:
  - "Repetir ese motivo rotándolo 360°/n grados, hasta completar la vuelta"
  - "Elegir n y dividir la circunferencia en n arcos de 360°/n cada uno"
  - "Diseñar el motivo dentro de un solo sector"
respuesta_orden: ["Elegir n y dividir la circunferencia en n arcos de 360°/n cada uno", "Diseñar el motivo dentro de un solo sector", "Repetir ese motivo rotándolo 360°/n grados, hasta completar la vuelta"]
explicacion: |
  El motivo se diseña una sola vez, y después se repite por rotación.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "basico"
  tags: ["rosetones", "vocabulario"]

enunciado: "¿Cuáles son valores típicos de n (cantidad de secciones) en rosetones góticos clásicos?"
tipo: mc
opciones_explicitas:
  - "6, 8 o 12"
  - "1 o 2"
  - "1000 o más"
respuesta: "6, 8 o 12"

explicacion: |
  Son números que dividen 360° en ángulos "redondos" (60°, 45°, 30°).
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones"]

respuesta: verdadero
tipo: vf

enunciado: "El propio círculo que enmarca un rosetón tiene infinitos ejes de simetría, más que cualquier patrón dibujado dentro de él."

explicacion: |
  Es el caso límite ya visto en
  `../../matematica/transformaciones-geometricas/reflexion/`.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones", "problema"]

respuesta: 45
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos grados mide cada sección de un rosetón dividido en 8 partes iguales?"

pasos:
  - "360° ÷ 8 = 45°"

explicacion: |
  Es uno de los valores clásicos de n en rosetones góticos.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un mandala, además de un rosetón, es otro ejemplo de patrón que se construye dividiendo un círculo en secciones iguales y repitiendo un motivo por rotación."

explicacion: |
  El mismo principio geométrico aparece en distintas tradiciones
  artísticas.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones", "vocabulario"]

enunciado: "¿Cuál de las cuatro transformaciones geométricas NO participa típicamente en la construcción de un rosetón?"
tipo: mc
opciones_explicitas:
  - "La traslación (no tiene sentido en un patrón centrado en un punto fijo)"
  - "La rotación"
  - "La reflexión"
respuesta: "La traslación (no tiene sentido en un patrón centrado en un punto fijo)"

explicacion: |
  Un rosetón está centrado en un punto fijo: la traslación (que no
  tiene puntos fijos) no encaja en ese tipo de patrón, a diferencia de
  un empapelado o mosaico repetido en una superficie plana.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones", "problema"]

variables:
  n: uno_de([6, 8, 10, 12])
  con_reflexion: n / 2

respuesta: con_reflexion
tipo: input
tolerancia_abs: 0

enunciado: "Un rosetón de {n} secciones tiene simetría axial, pero sólo la mitad de las secciones fueron diseñadas con un motivo reflejado respecto de su vecino (la otra mitad se repite sólo por rotación). ¿Cuántas secciones tienen motivo reflejado?"

pasos:
  - "{n} ÷ 2 = {con_reflexion} secciones"

explicacion: |
  No todos los rosetones combinan las dos simetrías en el 100% del
  diseño.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones", "vocabulario"]

enunciado: "¿Qué nombre recibe un patrón que combina simetría rotacional de orden n con n ejes de simetría axial?"
tipo: mc
opciones_explicitas:
  - "Simetría diédrica"
  - "Simetría lineal"
  - "Simetría homotética"
respuesta: "Simetría diédrica"

explicacion: |
  Es el tipo de simetría más completo posible en un patrón plano
  centrado, salvo el caso límite del círculo mismo.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "avanzado"
  tags: ["rosetones", "problema"]

variables:
  n: uno_de([8, 10, 12])
  saltos: uno_de([2, 3])

respuesta: (360 / n) * saltos
tipo: input
tolerancia_abs: 0

enunciado: "En un rosetón de {n} secciones iguales, ¿cuántos grados hay entre una sección y otra que está {saltos} posiciones más adelante?"

pasos:
  - "(360° ÷ {n}) × {saltos} = {(360 / n) * saltos}°"

explicacion: |
  Cada salto de una sección a la siguiente suma un ángulo de 360°/n.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "basico"
  tags: ["rosetones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los rosetones son un elemento típico de la arquitectura gótica, presente en catedrales como la de Notre Dame."

explicacion: |
  Combinan función (dejar entrar luz) con un diseño geométrico
  ornamental.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "intermedio"
  tags: ["rosetones"]

respuesta: verdadero
tipo: vf

enunciado: "Para diseñar un rosetón, el motivo decorativo se diseña una sola vez, dentro de un sector, y después se repite con transformaciones geométricas."

explicacion: |
  No hace falta rediseñar cada sección desde cero: se repite el mismo
  motivo con rotación (y a veces reflexión).
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "basico"
  tags: ["rosetones", "problema"]

respuesta: 30
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos grados mide cada sección de un rosetón dividido en 12 partes iguales?"

pasos:
  - "360° ÷ 12 = 30°"

explicacion: |
  12 secciones es otro valor clásico en el diseño de rosetones.
```

```
metadata:
  materia: "arte"
  tema: "rosetones_y_simetria"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la construcción geométrica de un rosetón?"
tipo: mc
opciones_explicitas:
  - "Para explicar por qué se ve ordenado y armónico, y para poder diseñar patrones radiales propios (mandalas, logos, mosaicos)"
  - "Sólo sirve para restaurar catedrales góticas existentes"
  - "No tiene ninguna aplicación fuera de la arquitectura religiosa"
respuesta: "Para explicar por qué se ve ordenado y armónico, y para poder diseñar patrones radiales propios (mandalas, logos, mosaicos)"

explicacion: |
  Es la aplicación directa de circunferencia, rotación y reflexión a un
  diseño real.
```

## Sección: produccion-multimedial (25 preguntas)

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "basico"
  tags: ["multimedial", "vocabulario"]

enunciado: "¿Qué es un proyecto multimedial?"
tipo: mc
opciones_explicitas:
  - "Una pieza que combina varios tipos de recursos (texto, imagen, sonido, video) en una sola experiencia"
  - "Cualquier proyecto que use más de una cámara"
  - "Un proyecto hecho por más de un artista"
respuesta: "Una pieza que combina varios tipos de recursos (texto, imagen, sonido, video) en una sola experiencia"

explicacion: |
  Por ejemplo, un video educativo, una presentación interactiva o un
  sitio web.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "intermedio"
  tags: ["multimedial"]

respuesta: verdadero
tipo: vf

enunciado: "La habilidad central de la producción multimedial es elegir la técnica y el formato correctos para cada recurso, y lograr que funcionen juntos, no dominar cada uno de forma aislada."

explicacion: |
  Es la idea que unifica los cuatro tipos de integración (texto, imagen,
  sonido, video).
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "basico"
  tags: ["texto", "vocabulario"]

enunciado: "¿Qué es la legibilidad de un texto integrado en un proyecto multimedial?"
tipo: mc
opciones_explicitas:
  - "Que el tamaño de tipografía y el contraste con el fondo permitan leerlo sin esfuerzo"
  - "Que el texto use la mayor cantidad de colores posible"
  - "Que el texto sea lo más corto posible, sin importar el contraste"
respuesta: "Que el tamaño de tipografía y el contraste con el fondo permitan leerlo sin esfuerzo"

explicacion: |
  Es la misma idea de contraste ya vista en `../principios-de-diseno/`,
  aplicada a la tipografía.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "intermedio"
  tags: ["texto", "vocabulario"]

enunciado: "¿Qué es la jerarquía tipográfica?"
tipo: mc
opciones_explicitas:
  - "Diferenciar visualmente títulos, subtítulos y cuerpo de texto, para guiar por dónde empezar a leer"
  - "Usar una sola tipografía en todo el proyecto, sin excepciones"
  - "Ordenar los textos alfabéticamente"
respuesta: "Diferenciar visualmente títulos, subtítulos y cuerpo de texto, para guiar por dónde empezar a leer"

explicacion: |
  Se logra con diferencias de tamaño, peso o color entre los distintos
  niveles de texto.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "intermedio"
  tags: ["texto"]

respuesta: verdadero
tipo: vf

enunciado: "Un subtítulo o cartel de texto sobre un video tiene que permanecer en pantalla el tiempo suficiente para que se alcance a leer completo."

explicacion: |
  No alcanza con que "quede bien" visualmente: tiene que ser
  funcionalmente legible en el tiempo que dura.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "intermedio"
  tags: ["texto", "vocabulario"]

enunciado: "¿Qué problema genera un texto que aparece y desaparece demasiado rápido en un video?"
tipo: mc
opciones_explicitas:
  - "El espectador no llega a leerlo completo antes de que desaparezca"
  - "El video pesa más en tamaño de archivo"
  - "No genera ningún problema real"
respuesta: "El espectador no llega a leerlo completo antes de que desaparezca"

explicacion: |
  Es uno de los errores más comunes al integrar texto en video.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "basico"
  tags: ["imagen", "vocabulario"]

enunciado: "¿Qué pasa si se amplía una imagen de baja resolución para ocupar más espacio del que puede sostener?"
tipo: mc
opciones_explicitas:
  - "Se ve pixelada o borrosa"
  - "Cambia de color automáticamente"
  - "No pasa nada, la calidad se mantiene siempre"
respuesta: "Se ve pixelada o borrosa"

explicacion: |
  Por eso hay que elegir imágenes con resolución suficiente para el
  tamaño final en el que se van a mostrar.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "intermedio"
  tags: ["imagen", "vocabulario"]

enunciado: "¿Qué pasa si se fuerza una imagen a encajar en un marco con una relación de aspecto muy distinta a la original?"
tipo: mc
opciones_explicitas:
  - "La imagen se deforma: se estira o se aplasta"
  - "La imagen mejora su resolución automáticamente"
  - "No pasa nada, las imágenes se adaptan solas sin deformarse"
respuesta: "La imagen se deforma: se estira o se aplasta"

explicacion: |
  Mejor recortarla manteniendo su proporción original, o adaptar el
  espacio disponible a la imagen.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "intermedio"
  tags: ["imagen"]

respuesta: verdadero
tipo: vf

enunciado: "Distintos formatos de archivo de imagen (con o sin pérdida de calidad) convienen para distintos usos, no hay un único formato correcto para todo."

explicacion: |
  El criterio no es el mismo para una foto realista que para un logo
  con colores planos.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "basico"
  tags: ["sonido", "vocabulario"]

enunciado: "Cuando hay música y diálogo al mismo tiempo en un proyecto multimedial, ¿cómo deben quedar los niveles de volumen entre ambos?"
tipo: mc
opciones_explicitas:
  - "La música por debajo del diálogo, para no taparlo"
  - "Ambos exactamente al mismo volumen"
  - "El diálogo por debajo de la música, para darle protagonismo al sonido ambiente"
respuesta: "La música por debajo del diálogo, para no taparlo"

explicacion: |
  El diálogo suele ser la información principal que el espectador
  necesita entender.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "basico"
  tags: ["sonido"]

respuesta: verdadero
tipo: vf

enunciado: "El volumen de la música de fondo debe quedar por debajo del volumen del diálogo o la narración, para no taparlo."

explicacion: |
  Es uno de los errores más comunes de mezcla de sonido en producciones
  amateur.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "intermedio"
  tags: ["sonido", "vocabulario"]

enunciado: "¿Qué es la sincronización (o lip-sync) entre sonido e imagen?"
tipo: mc
opciones_explicitas:
  - "Que el audio de una voz coincida en el tiempo con el movimiento de los labios en el video"
  - "Que la música tenga el mismo tempo en todo el proyecto"
  - "Que el volumen del sonido sea siempre el mismo"
respuesta: "Que el audio de una voz coincida en el tiempo con el movimiento de los labios en el video"

explicacion: |
  Un desfasaje notorio entre audio e imagen distrae fuertemente al
  espectador.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "intermedio"
  tags: ["sonido"]

respuesta: verdadero
tipo: vf

enunciado: "Un audio con ruido de fondo o mala calidad suele notarse mucho más que una imagen de calidad mediocre: el oído es especialmente exigente con los defectos del sonido."

explicacion: |
  Es una de las razones por las que la calidad del audio no debería
  descuidarse frente a la de la imagen.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "intermedio"
  tags: ["video", "vocabulario"]

enunciado: "¿Qué conviene mantener consistente entre distintos clips de video que se combinan en un mismo proyecto?"
tipo: mc
opciones_explicitas:
  - "La resolución y la cantidad de cuadros por segundo (frame rate)"
  - "El nombre del archivo"
  - "La fecha en la que se filmó cada clip"
respuesta: "La resolución y la cantidad de cuadros por segundo (frame rate)"

explicacion: |
  Si no son consistentes, se nota un salto de calidad o de fluidez
  entre un clip y otro.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "intermedio"
  tags: ["video"]

respuesta: verdadero
tipo: vf

enunciado: "Los gráficos, textos o subtítulos que se agregan sobre un video no deben tapar información visual importante de la imagen de fondo."

explicacion: |
  Tienen que integrarse con el encuadre y el montaje ya hechos, no
  competir contra ellos.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "avanzado"
  tags: ["multimedial", "vocabulario"]

enunciado: "Según el principio general de integración multimedial, ¿qué dos preguntas conviene hacerse sin importar el recurso que se esté integrando?"
tipo: mc
opciones_explicitas:
  - "¿Todos los elementos comparten un estilo coherente?, y ¿está claro cuál es el elemento protagonista en cada momento?"
  - "¿Cuánto costó producir cada recurso?, y ¿cuánto tiempo llevó hacerlo?"
  - "¿El archivo pesa poco?, y ¿es compatible con todos los dispositivos?"
respuesta: "¿Todos los elementos comparten un estilo coherente?, y ¿está claro cuál es el elemento protagonista en cada momento?"

explicacion: |
  Son las dos preguntas de coherencia y jerarquía que se repiten para
  texto, imagen, sonido y video por igual.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "avanzado"
  tags: ["multimedial"]

respuesta: verdadero
tipo: vf

enunciado: "La tensión entre unidad y variedad, ya vista en los principios de diseño, también aplica a un proyecto multimedial con varios tipos de recursos combinados."

explicacion: |
  Demasiada uniformidad aburre; demasiada variedad sin coherencia se ve
  desordenado — el mismo balance, ahora entre texto, imagen, sonido y
  video.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "avanzado"
  tags: ["multimedial", "ordenar"]

enunciado: "Ordená los pasos generales para integrar un recurso nuevo (por ejemplo, una imagen) a un proyecto multimedial ya en marcha."
tipo: ordenar
opciones_explicitas:
  - "Verificar que no compita por la atención con los demás elementos en pantalla al mismo tiempo"
  - "Elegir el formato y la calidad adecuados para el recurso"
  - "Ajustarlo al estilo general del proyecto (tipografía, paleta de color, tono)"
respuesta_orden: ["Elegir el formato y la calidad adecuados para el recurso", "Ajustarlo al estilo general del proyecto (tipografía, paleta de color, tono)", "Verificar que no compita por la atención con los demás elementos en pantalla al mismo tiempo"]
explicacion: |
  Primero la calidad técnica, después la coherencia de estilo, y por
  último la jerarquía de atención frente al resto de los elementos.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "avanzado"
  tags: ["multimedial", "vocabulario"]

enunciado: "¿Por qué no alcanza con que cada recurso individual (la foto, el audio, el video) sea de buena calidad por separado?"
tipo: mc
opciones_explicitas:
  - "Porque también hace falta que funcionen juntos, con coherencia de estilo y sin competir por la atención"
  - "En realidad sí alcanza, la integración nunca afecta el resultado final"
  - "Porque la calidad de cada recurso individual no importa en absoluto"
respuesta: "Porque también hace falta que funcionen juntos, con coherencia de estilo y sin competir por la atención"

explicacion: |
  Es la diferencia entre un proyecto que se siente profesional y uno
  que se siente improvisado, con las mismas piezas.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "intermedio"
  tags: ["multimedial"]

respuesta: verdadero
tipo: vf

enunciado: "Texto, imagen, sonido y video comparten la misma necesidad de tener una jerarquía clara y un estilo coherente dentro del proyecto."

explicacion: |
  Es el hilo conductor que conecta las cuatro integraciones distintas.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "intermedio"
  tags: ["texto", "problema"]

respuesta: falso
tipo: vf

enunciado: "Un video usa texto blanco sobre un fondo también claro, casi del mismo tono. ¿Esa integración de texto está bien resuelta?"

explicacion: |
  No: sin contraste suficiente entre el texto y el fondo, la
  legibilidad se pierde, sin importar qué tan buena sea la tipografía
  elegida.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "intermedio"
  tags: ["sonido", "problema"]

respuesta: falso
tipo: vf

enunciado: "En una escena con diálogo importante, la música de fondo está al mismo volumen que las voces, dificultando entender lo que dicen los personajes. ¿Esa integración de sonido está bien resuelta?"

explicacion: |
  No: la música debería quedar claramente por debajo del diálogo en
  volumen, no compitiendo con él.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "basico"
  tags: ["imagen"]

respuesta: verdadero
tipo: vf

enunciado: "Estirar una imagen para que encaje en un espacio con una relación de aspecto distinta a la original produce una imagen deformada."

explicacion: |
  Los rostros y objetos se ven notoriamente estirados o achatados.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "avanzado"
  tags: ["video", "vocabulario"]

enunciado: "¿Qué problema genera combinar clips de video con distinta cantidad de cuadros por segundo (frame rate) en un mismo proyecto?"
tipo: mc
opciones_explicitas:
  - "Se nota un salto de fluidez entre un clip y otro al reproducirse"
  - "El audio se desincroniza automáticamente en todos los clips"
  - "No genera ningún problema perceptible"
respuesta: "Se nota un salto de fluidez entre un clip y otro al reproducirse"

explicacion: |
  Por eso conviene unificar la configuración técnica antes de combinar
  clips de distintas fuentes.
```

```
metadata:
  materia: "arte"
  tema: "produccion_multimedial"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender cómo integrar texto, imagen, sonido y video en un proyecto multimedial?"
tipo: mc
opciones_explicitas:
  - "Para que el resultado final se sienta como una experiencia coherente y cuidada, en vez de piezas sueltas mal combinadas"
  - "Sólo sirve para reducir el tamaño del archivo final"
  - "Sólo aplica a proyectos con presupuesto profesional"
respuesta: "Para que el resultado final se sienta como una experiencia coherente y cuidada, en vez de piezas sueltas mal combinadas"

explicacion: |
  Es el cierre de toda la cadena: composición, elementos, principios,
  plano, encuadre, montaje y, por último, la integración multimedial
  completa.
```

## Sección: teatro-dramaturgia-y-actuacion (20 preguntas)

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "basico"
  tags: ["teatro", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El teatro combina dos habilidades distintas: escribir el texto teatral (dramaturgia) e interpretarlo frente a público (actuación)."

pasos:
  - "Son dos oficios complementarios, no la misma habilidad aplicada dos veces."

explicacion: |
  Verdadero: es la definición central que organiza este tema.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "avanzado"
  tags: ["genero_dramatico", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este tema no repite la forma del texto teatral (diálogo, acotaciones, actos/escenas) ya vista en `../../lengua/genero-dramatico/`, sino que se enfoca en la escritura como oficio y la actuación como arte escénico."

pasos:
  - "Es una aclaración explícita sobre el alcance de este tema respecto de lo ya cubierto en Lengua."

explicacion: |
  Verdadero: es la delimitación de alcance central de este tema.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "intermedio"
  tags: ["conflicto_dramatico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Escribir teatro no es sólo poner diálogos correctos: implica construir un conflicto dramático, una tensión entre personajes (o entre un personaje y su circunstancia) que evoluciona a lo largo de la obra."

pasos:
  - "Es el eje central de la dramaturgia como oficio."

explicacion: |
  Verdadero: es la definición central de conflicto dramático en este
  tema.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "avanzado"
  tags: ["dramaturgia", "recursos_literarios"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La dramaturgia reutiliza los recursos literarios ya vistos en `../../lengua/recursos-literarios/`, aplicados específicamente al diálogo hablado: metáforas y antítesis que funcionan cuando se dicen en voz alta."

pasos:
  - "Es la conexión directa entre este tema y uno de sus dos prerrequisitos."

explicacion: |
  Verdadero: es la conexión central entre este tema y los recursos
  literarios ya estudiados.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "intermedio"
  tags: ["subtexto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El subtexto es lo que un personaje siente o quiere realmente, que no está dicho literalmente en sus palabras."

pasos:
  - "Un personaje puede decir \"estoy bien\" mientras el subtexto es que está furioso."

explicacion: |
  Verdadero: es la definición central de subtexto en dramaturgia.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "avanzado"
  tags: ["subtexto", "interes_dramatico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La tensión entre lo que un personaje dice explícitamente y lo que realmente siente (el subtexto) es una fuente central de interés dramático."

pasos:
  - "Es la razón por la que el subtexto es una herramienta valorada en la escritura teatral."

explicacion: |
  Verdadero: es la aplicación práctica de por qué el subtexto
  enriquece un texto dramático.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "basico"
  tags: ["actuacion", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Actuar no es memorizar y decir líneas correctamente: es \"habitar\" un personaje, entendiendo sus motivaciones y transmitiéndolas de forma creíble al público."

pasos:
  - "Es la definición central de actuación en este tema."

explicacion: |
  Verdadero: es la definición central de actuación descrita en la
  teoría.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "avanzado"
  tags: ["actuacion", "exposicion_oral"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La actuación reutiliza directamente las técnicas de exposición oral (voz, ritmo, contacto visual, lenguaje corporal), llevadas a un contexto de ficción sostenida."

pasos:
  - "Ver `../../lengua/exposicion-oral/`: es la conexión directa con el otro prerrequisito de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y el otro
  prerrequisito.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "intermedio"
  tags: ["tecnicas_actorales", "cuerpo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El trabajo con el cuerpo en actuación implica postura, gesto y movimiento que comuniquen al personaje, no sólo al actor."

pasos:
  - "Es una de las técnicas actorales básicas descritas en la teoría."

explicacion: |
  Verdadero: es una de las técnicas centrales de actuación.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "intermedio"
  tags: ["tecnicas_actorales", "voz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El trabajo con la voz implica modular tono, ritmo y volumen según lo que el personaje siente, no según lo que el actor sentiría en su propia vida."

pasos:
  - "Es otra de las técnicas actorales básicas descritas en la teoría."

explicacion: |
  Verdadero: es otra de las técnicas centrales de actuación.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "avanzado"
  tags: ["tecnicas_actorales", "escucha_activa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La escucha activa en escena implica reaccionar genuinamente a lo que dice el otro personaje, no sólo esperar el propio turno de hablar — la misma escucha activa ya vista en debate, aplicada a la ficción."

pasos:
  - "Ver `../../lengua/debate-refutar-en-vivo/`: es la conexión con esa habilidad ya estudiada."

explicacion: |
  Verdadero: es la conexión explícita entre la escucha activa del
  debate y su aplicación en la actuación.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "avanzado"
  tags: ["tecnicas_actorales", "memoria_emotiva"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La memoria emotiva consiste en recurrir a experiencias o emociones propias para conectar de forma genuina con lo que el personaje siente en una escena."

pasos:
  - "Es otra de las técnicas actorales básicas descritas en la teoría."

explicacion: |
  Verdadero: es otra técnica central de actuación mencionada en la
  teoría.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "intermedio"
  tags: ["puesta_en_escena"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El teatro también incluye decisiones de puesta en escena (escenografía, vestuario, iluminación, sonido) que completan la experiencia más allá del texto dramático y la actuación en sí."

pasos:
  - "Son elementos adicionales que forman parte de la experiencia teatral completa."

explicacion: |
  Verdadero: la puesta en escena es un componente más del teatro,
  además del texto y la interpretación.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "intermedio"
  tags: ["dramaturgia", "actuacion", "diferenciacion"]

variables:
  acciones: ["escribir el diálogo y el conflicto de una escena entre dos hermanos", "interpretar a uno de esos hermanos en el escenario, con voz y gestos"]
  oficios: ["dramaturgia", "actuación"]
  idx: uno_de([0, 1])

respuesta: oficios[idx]
tipo: mc
opciones_explicitas: ["dramaturgia", "actuación"]

enunciado: "La acción de \"{acciones[idx]}\" corresponde al oficio de..."

pasos:
  - "Escribir el texto es dramaturgia; interpretarlo en escena es actuación."

explicacion: |
  Reconocer a qué oficio corresponde cada acción es la aplicación
  central de la distinción de este tema.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "avanzado"
  tags: ["subtexto", "genero_dramatico"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El subtexto de un personaje siempre está escrito explícitamente en las acotaciones del texto teatral, así el actor no tiene que interpretarlo."

pasos:
  - "Ver `../../lengua/genero-dramatico/`: las acotaciones indican gestos/tono, pero el subtexto suele quedar implícito, para que el actor lo interprete y transmita."

explicacion: |
  Falso: el subtexto suele quedar implícito en el texto, es parte
  del trabajo interpretativo del actor descubrirlo y transmitirlo.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "avanzado"
  tags: ["actuacion", "interpretacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Distintos actores pueden interpretar el mismo texto dramático de formas distintas, según cómo entiendan el subtexto y las motivaciones del personaje."

pasos:
  - "Es una consecuencia de que la actuación implica una interpretación personal, no una lectura mecánica del texto."

explicacion: |
  Verdadero: la variedad interpretativa es parte central de por qué
  la actuación es un arte creativo, no una simple ejecución.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "avanzado"
  tags: ["escucha_activa", "credibilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un actor que no escucha realmente al otro personaje en escena tiende a reaccionar de forma mecánica o poco creíble, en vez de genuina."

pasos:
  - "Es la misma lógica de la escucha activa ya vista en debate, aplicada a la credibilidad de una escena."

explicacion: |
  Verdadero: la falta de escucha activa afecta directamente la
  credibilidad de la interpretación.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "intermedio"
  tags: ["teatro", "metodo"]

enunciado: "Ordená los pasos para construir y llevar a escena un fragmento dramático."
tipo: ordenar
opciones_explicitas:
  - "Escribir el conflicto dramático entre los personajes (dramaturgia)"
  - "Definir el subtexto de cada personaje en los momentos clave"
  - "Trabajar la interpretación (voz, cuerpo) para transmitir ese subtexto (actuación)"
  - "Definir decisiones de puesta en escena que acompañen la escena (escenografía, iluminación)"
respuesta_orden: ["Escribir el conflicto dramático entre los personajes (dramaturgia)", "Definir el subtexto de cada personaje en los momentos clave", "Trabajar la interpretación (voz, cuerpo) para transmitir ese subtexto (actuación)", "Definir decisiones de puesta en escena que acompañen la escena (escenografía, iluminación)"]
explicacion: |
  El proceso va de la escritura del texto a su interpretación en
  escena, y termina con las decisiones adicionales de puesta en
  escena.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "avanzado"
  tags: ["teatro", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Escribir y actuar teatro es la aplicación práctica y en vivo de herramientas ya dominadas en Lengua (recursos literarios, exposición oral, escucha activa), llevadas a un lenguaje artístico propio."

pasos:
  - "Ver `../../lengua/recursos-literarios/`, `../../lengua/exposicion-oral/` y `../../lengua/debate-refutar-en-vivo/`: son las conexiones directas de este tema con Lengua."

explicacion: |
  Verdadero: es la síntesis de todas las conexiones de este tema con
  contenidos ya estudiados en Lengua.
```

```
metadata:
  materia: "arte"
  tema: "teatro_dramaturgia_y_actuacion"
  nivel: "avanzado"
  tags: ["teatro", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al preparar una escena para representar, conviene identificar el conflicto dramático central, definir el subtexto de cada personaje, y trabajar la voz y el cuerpo para transmitirlo de forma creíble al público."

pasos:
  - "Es la aplicación práctica directa de todos los conceptos estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al preparar una
  escena teatral real.
```

