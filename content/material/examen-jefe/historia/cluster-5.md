# Examen jefe — [PENDIENTE #725]

> Logro #725. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 8 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **160 preguntas totales** en 8/8 secciones.

---

## Sección: significancia-historica (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "basico"
  tags: ["significancia_historica", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La significancia histórica es el criterio que usan los historiadores para decidir qué hechos merecen ser estudiados, recordados y enseñados."

pasos:
  - "Nadie puede estudiar cada detalle de todo lo que ocurrió en el pasado."

explicacion: |
  Verdadero: es la definición central de significancia histórica.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["significancia_historica", "seleccion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Todo lo que ocurrió en el pasado es, en sentido literal, \"historia\", pero nadie puede ni querría estudiar cada detalle de cada día de cada persona que vivió alguna vez."

pasos:
  - "Es la razón por la que hace falta un criterio de selección."

explicacion: |
  Verdadero: es el punto de partida de por qué existe este concepto.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["criterios", "impacto_profundo"]

variables:
  n: uno_de([1, 1])

respuesta: "impacto profundo"
tipo: mc
opciones_explicitas: ["impacto profundo", "alcance amplio", "duración de los efectos"]

enunciado: "El criterio que evalúa si un hecho afectó a las personas de forma significativa (una guerra mundial vs. una discusión de vecinos) se llama..."

pasos:
  - "Es uno de los cinco criterios de significancia mencionados en la teoría."

explicacion: |
  El impacto profundo evalúa la intensidad del efecto de un hecho
  sobre las personas afectadas.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["criterios", "alcance_amplio"]

variables:
  n: uno_de([1, 1])

respuesta: "alcance amplio"
tipo: mc
opciones_explicitas: ["impacto profundo", "alcance amplio", "resonancia hoy"]

enunciado: "El criterio que evalúa si un hecho afectó a muchas personas o regiones, o sólo a un grupo muy chico y localizado, se llama..."

pasos:
  - "Es otro de los cinco criterios de significancia mencionados en la teoría."

explicacion: |
  El alcance amplio evalúa cuántas personas o regiones se vieron
  afectadas por un hecho.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["criterios", "duracion_de_efectos"]

variables:
  n: uno_de([1, 1])

respuesta: "duración de los efectos"
tipo: mc
opciones_explicitas: ["duración de los efectos", "alcance amplio", "revela algo más general"]

enunciado: "El criterio que evalúa si las consecuencias de un hecho se sintieron sólo un momento, o durante generaciones, se llama..."

pasos:
  - "Es otro de los cinco criterios de significancia mencionados en la teoría."

explicacion: |
  La duración de los efectos evalúa por cuánto tiempo se sintieron
  las consecuencias de un hecho.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["criterios", "resonancia_hoy"]

variables:
  n: uno_de([1, 1])

respuesta: "resonancia/relevancia hoy"
tipo: mc
opciones_explicitas: ["resonancia/relevancia hoy", "impacto profundo", "alcance amplio"]

enunciado: "El criterio que evalúa si un hecho ayuda a entender el presente o problemas actuales se llama..."

pasos:
  - "Es otro de los cinco criterios de significancia mencionados en la teoría."

explicacion: |
  La resonancia/relevancia hoy evalúa si el hecho sigue siendo útil
  para entender problemas actuales.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["criterios", "revela_algo_general"]

variables:
  n: uno_de([1, 1])

respuesta: "revela algo más general"
tipo: mc
opciones_explicitas: ["revela algo más general", "duración de los efectos", "impacto profundo"]

enunciado: "El criterio que evalúa si un hecho es un ejemplo que ilumina un proceso más amplio, aunque en sí mismo sea un episodio menor, se llama..."

pasos:
  - "Es el quinto criterio de significancia mencionado en la teoría."

explicacion: |
  Un hecho puede ser significativo no por su magnitud propia, sino
  por lo que revela sobre un proceso histórico más general.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["significancia_cambiante"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un mismo hecho puede considerarse muy significativo en un momento histórico y perder relevancia después, o al revés."

pasos:
  - "La significancia histórica cambia según qué preguntas le interesan a cada generación."

explicacion: |
  Verdadero: es un matiz central sobre la naturaleza no fija de la
  significancia histórica.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["historiografia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La historia política tradicional prioriza reyes y batallas como significativos; la historia social prioriza la vida cotidiana de la gente común."

pasos:
  - "Ver `../../filosofia/historia-de-la-filosofia-y-corrientes/`: distintas corrientes historiográficas eligen distinto tipo de hechos como significativos."

explicacion: |
  Verdadero: es un ejemplo concreto de cómo la corriente
  historiográfica influye en qué se considera significativo.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["no_es_gusto_personal"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Decir \"me interesa la historia militar, así que sólo eso es significativo\" es un juicio válido y suficiente de significancia histórica."

pasos:
  - "La significancia se argumenta con criterios (impacto, alcance, duración, resonancia), no es una simple cuestión de gusto individual."

explicacion: |
  Falso: la significancia histórica no es una preferencia personal
  sin fundamento, requiere argumentación con criterios objetivos.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["hecho_pequeno_significativo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El asesinato de un solo archiduque puede desencadenar consecuencias enormes (una guerra mundial), volviéndolo altamente significativo pese a su escala aparentemente menor en el momento en que ocurrió."

pasos:
  - "El tamaño aparente de un hecho no determina por sí solo su significancia."

explicacion: |
  Verdadero: es el ejemplo central de por qué la magnitud aparente de
  un hecho no es el único criterio de significancia.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["criterios", "practica"]

variables:
  hechos: ["una reforma que cambió cómo funciona una sociedad durante siglos", "un evento que ayuda a entender debates políticos actuales"]
  criterios: ["duración de los efectos", "resonancia/relevancia hoy"]
  idx: uno_de([0, 1])

respuesta: criterios[idx]
tipo: mc
opciones_explicitas: ["impacto profundo", "alcance amplio", "duración de los efectos", "resonancia/relevancia hoy"]

enunciado: "\"{hechos[idx]}\" se evalúa principalmente con el criterio de..."

pasos:
  - "Cada descripción corresponde principalmente a uno de los criterios de significancia estudiados."

explicacion: |
  Reconocer qué criterio aplica a un caso concreto es la práctica
  central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Decidir qué del pasado vale la pena estudiar presupone ya tener un marco de períodos organizado donde ubicar esa selección."

pasos:
  - "Ver `../periodizacion-historica/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["big_six"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Significancia histórica es uno de los 6 conceptos del marco \"Big Six\" de pensamiento histórico, junto a causa/consecuencia y cambio/continuidad."

pasos:
  - "Ver `../causa-y-consecuencia/` y `../cambio-y-continuidad/`: son los otros conceptos de ese marco ya cubiertos en la cadena."

explicacion: |
  Verdadero: es el mismo marco teórico ya mencionado en temas
  anteriores de esta cadena.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["criterios", "combinacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Evaluar la significancia de un hecho suele combinar varios de los cinco criterios a la vez (impacto, alcance, duración, resonancia, revelar algo general), no basta con aplicar sólo uno."

pasos:
  - "Un hecho puede ser significativo por varias razones combinadas al mismo tiempo."

explicacion: |
  Verdadero: es una aplicación práctica de cómo se usan estos
  criterios en conjunto, no de forma aislada.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["significancia_cambiante", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un hecho que en su momento pareció menor puede ganar significancia histórica más adelante, si se descubre que anticipaba o explicaba un proceso posterior importante."

pasos:
  - "Es la aplicación concreta de que la significancia cambia con el tiempo."

explicacion: |
  Verdadero: es la aplicación práctica del principio de significancia
  no fija estudiado en la teoría.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["seleccion", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cualquier programa de estudio de historia, incluida esta cadena de Tronco 6, aplica implícitamente criterios de significancia al decidir qué temas incluir y cuáles dejar afuera."

pasos:
  - "Es la aplicación reflexiva de este concepto a la propia estructura del material de estudio."

explicacion: |
  Verdadero: es una aplicación autorreferencial de por qué este
  concepto es relevante más allá de la teoría abstracta.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["significancia_historica", "metodo"]

enunciado: "Ordená los pasos para evaluar si un hecho histórico es significativo."
tipo: ordenar
opciones_explicitas:
  - "Identificar el hecho y a quiénes afectó directamente"
  - "Evaluar impacto profundo y alcance amplio de ese efecto"
  - "Evaluar la duración de los efectos y su resonancia en el presente"
  - "Concluir si, combinando esos criterios, el hecho merece un lugar en el estudio histórico"
respuesta_orden: ["Identificar el hecho y a quiénes afectó directamente", "Evaluar impacto profundo y alcance amplio de ese efecto", "Evaluar la duración de los efectos y su resonancia en el presente", "Concluir si, combinando esos criterios, el hecho merece un lugar en el estudio histórico"]
explicacion: |
  El proceso va de identificar el hecho a evaluar los distintos
  criterios combinados de significancia.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["significancia_historica", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Distintos historiadores pueden argumentar distinta significancia para un mismo hecho, según qué criterios prioricen o desde qué corriente historiográfica trabajen, sin que exista una respuesta única y absoluta."

pasos:
  - "Es la síntesis de por qué la significancia es un juicio argumentado, no un hecho fijo."

explicacion: |
  Verdadero: es la conclusión central de este tema sobre la
  naturaleza del concepto de significancia histórica.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["significancia_historica", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al proponer un tema histórico para estudiar, conviene poder justificar su significancia con criterios concretos (impacto, alcance, duración, resonancia), en vez de sólo decir que \"parece interesante\"."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al proponer o
  justificar el estudio de un hecho histórico.
```

## Sección: escuela-de-los-annales (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "basico"
  tags: ["escuela_de_los_annales", "criterio_central"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Escuela de los Annales propone mirar la historia a través de estructuras de larga duración: clima, geografía, demografía, economía."

pasos:
  - "En vez de centrarse en sucesos puntuales de reyes y batallas."

explicacion: |
  Verdadero: es el criterio central de esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["contexto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Escuela de los Annales se llama así por la revista académica Annales donde publicaban sus fundadores, en Francia, durante el siglo XX."

pasos:
  - "Es el origen del nombre de esta corriente historiográfica."

explicacion: |
  Verdadero: es el origen del nombre de esta escuela.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["marc_bloch"]

variables:
  n: uno_de([1, 1])

respuesta: "Bloch"
tipo: completar

enunciado: "Uno de los fundadores de la Escuela de los Annales, autor de \"Apología para la historia\", se apellida..."

pasos:
  - "Marc Bloch es uno de los referentes centrales de esta corriente."

explicacion: |
  Bloch es autor central de esta corriente historiográfica.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["marc_bloch", "contexto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Apología para la historia\" de Marc Bloch se publicó póstumamente en 1949, después de que Bloch fuera fusilado por la resistencia francesa contra la ocupación nazi."

pasos:
  - "Es un dato histórico sobre las circunstancias de publicación de esta obra clásica."

explicacion: |
  Verdadero: es el contexto histórico de la publicación de esta obra
  fundamental de la corriente.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["fernand_braudel"]

variables:
  n: uno_de([1, 1])

respuesta: "Braudel"
tipo: completar

enunciado: "El historiador de la Escuela de los Annales que propuso distinguir tres ritmos distintos de cambio histórico se apellida..."

pasos:
  - "Fernand Braudel es otro referente central de esta corriente."

explicacion: |
  Braudel es autor central de esta corriente, referente de los tres
  niveles de tiempo histórico.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["larga_duracion"]

variables:
  n: uno_de([1, 1])

respuesta: "larga duración"
tipo: mc
opciones_explicitas: ["larga duración", "coyunturas", "acontecimientos"]

enunciado: "El nivel de tiempo histórico que abarca estructuras casi inmóviles (geografía, clima) que cambian en siglos o milenios se llama..."

pasos:
  - "Es el nivel más lento de los tres propuestos por Braudel."

explicacion: |
  La larga duración es el nivel de cambio más lento de los tres
  ritmos propuestos por Braudel.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["coyunturas"]

variables:
  n: uno_de([1, 1])

respuesta: "coyunturas"
tipo: mc
opciones_explicitas: ["larga duración", "coyunturas", "acontecimientos"]

enunciado: "El nivel de tiempo histórico que abarca ciclos económicos y sociales de mediano plazo (décadas) se llama..."

pasos:
  - "Es el nivel intermedio de los tres propuestos por Braudel."

explicacion: |
  Las coyunturas son el nivel intermedio de cambio, de duración
  media (décadas).
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["acontecimientos"]

variables:
  n: uno_de([1, 1])

respuesta: "acontecimientos"
tipo: mc
opciones_explicitas: ["larga duración", "coyunturas", "acontecimientos"]

enunciado: "El nivel de tiempo histórico que abarca los hechos puntuales (batallas, tratados), llamado por Braudel la \"espuma\" de la historia, se llama..."

pasos:
  - "Es el nivel más rápido y visible, pero según Braudel menos determinante."

explicacion: |
  Los acontecimientos son el nivel más rápido y visible, pero para
  Braudel el menos determinante de los tres.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["acontecimientos", "metafora"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Braudel describió a los acontecimientos como la \"espuma\" superficial de la historia: la parte más visible pero menos determinante."

pasos:
  - "Es la metáfora central usada por Braudel para describir la relación entre los tres niveles de tiempo."

explicacion: |
  Verdadero: es la metáfora central que usa Braudel para jerarquizar
  los tres niveles de tiempo histórico.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["niveles_de_tiempo", "orden"]

enunciado: "Ordená los tres niveles de tiempo histórico de Braudel, del más lento al más rápido."
tipo: ordenar
opciones_explicitas:
  - "Larga duración"
  - "Coyunturas"
  - "Acontecimientos"
respuesta_orden: ["Larga duración", "Coyunturas", "Acontecimientos"]
explicacion: |
  El orden va de las estructuras casi inmóviles (siglos/milenios) a
  los ciclos de mediano plazo (décadas) y finalmente a los hechos
  puntuales (días/años).
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["estructuras"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según la Escuela de los Annales, el clima, la geografía y la demografía de una región condicionan durante siglos qué es posible o probable en esa sociedad, más allá de qué rey gobierne en un momento dado."

pasos:
  - "Es la justificación central de por qué esta corriente prioriza las estructuras de larga duración."

explicacion: |
  Verdadero: es la razón central por la que esta corriente considera
  más determinantes las estructuras que los sucesos puntuales.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["materialismo_historico", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El materialismo histórico prioriza específicamente relaciones de clase y producción; la Escuela de los Annales incluye también factores geográficos y climáticos, no ligados directamente al conflicto de clases."

pasos:
  - "Ver `../materialismo-historico/`: es la diferencia de foco entre estas dos corrientes que ambas miran \"estructuras\"."

explicacion: |
  Verdadero: aunque ambas corrientes miran estructuras en vez de
  grandes figuras, difieren en qué tipo de estructuras priorizan.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["materialismo_historico", "positivismo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Tanto el materialismo histórico como la Escuela de los Annales se apartan del foco en grandes figuras y hechos puntuales, propio del positivismo."

pasos:
  - "Ver `../positivismo/`: es el contraste común de ambas corrientes con la primera de la subrama."

explicacion: |
  Verdadero: ambas corrientes comparten esa distancia respecto del
  enfoque positivista, aunque prioricen estructuras distintas.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["niveles_de_tiempo", "practica"]

variables:
  ejemplos: ["la firma de un tratado de paz en un año específico", "el clima de una región que condicionó su agricultura durante siglos"]
  niveles: ["acontecimientos", "larga duración"]
  idx: uno_de([0, 1])

respuesta: niveles[idx]
tipo: mc
opciones_explicitas: ["larga duración", "coyunturas", "acontecimientos"]

enunciado: "\"{ejemplos[idx]}\" corresponde al nivel de tiempo histórico de..."

pasos:
  - "Un hecho puntual es acontecimiento; un factor que cambia en siglos es larga duración."

explicacion: |
  Clasificar un ejemplo según su ritmo de cambio (siglos, décadas o
  puntual) es la aplicación central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["acontecimientos", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Escuela de los Annales no ignora por completo los acontecimientos puntuales, sino que los considera menos determinantes que las estructuras de fondo, sin eliminarlos del análisis."

pasos:
  - "Es un matiz importante: la jerarquía entre los tres niveles no significa descartar por completo el nivel de los acontecimientos."

explicacion: |
  Verdadero: es un matiz importante sobre la relación entre los tres
  niveles de tiempo propuestos por Braudel.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada corriente historiográfica es un modelo distinto de qué causas priorizar al explicar un hecho histórico — por eso este tema depende de multicausalidad en el MAPA."

pasos:
  - "Ver `../multicausalidad/`: es el prerrequisito directo de este tema y sus tres hermanos."

explicacion: |
  Verdadero: es la misma conexión conceptual ya vista en las
  corrientes anteriores de esta subrama.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["larga_duracion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que un pueblo se haya desarrollado alrededor de un río navegable durante siglos, condicionando su comercio y su forma de organización social, es un ejemplo de análisis desde la larga duración de los Annales."

pasos:
  - "Es la aplicación práctica del foco en geografía como estructura de larga duración."

explicacion: |
  Verdadero: es un ejemplo concreto de análisis desde la perspectiva
  de la larga duración de esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "intermedio"
  tags: ["escuela_de_los_annales", "metodo"]

enunciado: "Ordená los pasos para reconocer si un texto histórico sigue el enfoque de la Escuela de los Annales."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el foco está en estructuras de larga duración (clima, geografía, demografía)"
  - "Identificar si se distinguen distintos ritmos de cambio (larga duración, coyunturas, acontecimientos)"
  - "Revisar si los sucesos puntuales se tratan como menos determinantes que las estructuras de fondo"
  - "Concluir si el texto corresponde al enfoque de la Escuela de los Annales"
respuesta_orden: ["Revisar si el foco está en estructuras de larga duración (clima, geografía, demografía)", "Identificar si se distinguen distintos ritmos de cambio (larga duración, coyunturas, acontecimientos)", "Revisar si los sucesos puntuales se tratan como menos determinantes que las estructuras de fondo", "Concluir si el texto corresponde al enfoque de la Escuela de los Annales"]
explicacion: |
  El análisis va del foco temático a la jerarquía de niveles de
  tiempo, para concluir si corresponde a esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Escuela de los Annales es la tercera de las cuatro corrientes historiográficas de esta subrama, hermana de positivismo, materialismo histórico e historia cultural."

pasos:
  - "Ver `../positivismo/`, `../materialismo-historico/` y `../historia-cultural/`: los cuatro nodos hermanos dependen de `../multicausalidad/`."

explicacion: |
  Verdadero: es la relación entre este tema y los otros tres de la
  subrama.
```

```
metadata:
  materia: "historia"
  tema: "escuela_de_los_annales"
  nivel: "avanzado"
  tags: ["escuela_de_los_annales", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al leer un libro de historia centrado en cómo el clima y la geografía de una región condicionaron su desarrollo económico y social a lo largo de siglos, conviene reconocer que está aplicando un enfoque cercano a la Escuela de los Annales."

pasos:
  - "Es la aplicación práctica directa de este tema al leer críticamente un texto histórico real."

explicacion: |
  Verdadero: es la aplicación concreta de este tema para reconocer el
  enfoque historiográfico de un texto real.
```

## Sección: historia-cultural (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "basico"
  tags: ["historia_cultural", "criterio_central"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La historia cultural propone analizar un caso chico y aparentemente insignificante en profundidad, mostrando que puede revelar toda una estructura social, mental o cultural de su época."

pasos:
  - "Invierte la lógica de escala de las corrientes que priorizan lo macro (Annales, positivismo)."

explicacion: |
  Verdadero: es el criterio central de esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "intermedio"
  tags: ["microhistoria"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La historia cultural también se asocia con el nombre \"microhistoria\", por su foco en casos individuales y localizados."

pasos:
  - "Ambos nombres se usan para referirse a esta misma corriente historiográfica."

explicacion: |
  Verdadero: es la relación entre los dos nombres usados para esta
  corriente.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "intermedio"
  tags: ["carlo_ginzburg"]

variables:
  n: uno_de([1, 1])

respuesta: "Ginzburg"
tipo: completar

enunciado: "El historiador italiano referente central de la historia cultural/microhistoria se apellida..."

pasos:
  - "Carlo Ginzburg es el autor central asociado a esta corriente."

explicacion: |
  Ginzburg es autor central de esta corriente historiográfica.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["carlo_ginzburg", "obra_clave"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La obra más famosa de Ginzburg, \"El queso y los gusanos\" (1976), reconstruye el caso de un molinero friulano del siglo XVI, juzgado por la Inquisición por sus ideas heterodoxas sobre el origen del mundo."

pasos:
  - "Es la obra clave que ejemplifica el método de la microhistoria."

explicacion: |
  Verdadero: es la obra fundamental de referencia de esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["carlo_ginzburg", "obra_clave"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ginzburg usa el caso individual del molinero para iluminar la mentalidad popular de toda una época, algo que las fuentes oficiales rara vez documentan."

pasos:
  - "Es el propósito central del uso de un caso micro para revelar algo macro."

explicacion: |
  Verdadero: es la conclusión central de por qué un caso individual
  puede tener valor histórico más allá de sí mismo.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["fuentes_no_convencionales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las fuentes oficiales (el foco del positivismo) rara vez documentan la vida cotidiana y la mentalidad de la gente común."

pasos:
  - "Es la razón por la que la historia cultural recurre a otro tipo de fuentes."

explicacion: |
  Verdadero: es la razón central de por qué esta corriente amplía
  qué cuenta como fuente legítima.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "intermedio"
  tags: ["fuentes_no_convencionales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La historia cultural suele recurrir a actas de juicios de personas comunes, diarios personales y objetos cotidianos, en vez de sólo tratados y decretos oficiales."

pasos:
  - "Son las fuentes no convencionales mencionadas en la teoría, distintas del archivo oficial priorizado por el positivismo."

explicacion: |
  Verdadero: son las fuentes típicas de esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "intermedio"
  tags: ["objeto_de_estudio", "mentalidades"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las mentalidades (cómo la gente entendía el mundo) son uno de los objetos de estudio centrales de la historia cultural."

pasos:
  - "Es uno de los tres objetos de estudio mencionados en la teoría."

explicacion: |
  Verdadero: las mentalidades son un objeto central de estudio de
  esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "intermedio"
  tags: ["objeto_de_estudio", "practicas_cotidianas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las prácticas cotidianas (rituales, costumbres) son otro de los objetos de estudio centrales de la historia cultural."

pasos:
  - "Es otro de los tres objetos de estudio mencionados en la teoría."

explicacion: |
  Verdadero: las prácticas cotidianas son otro objeto central de
  estudio de esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "intermedio"
  tags: ["objeto_de_estudio", "cultura_popular"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La cultura popular (no sólo la cultura de elite) es otro de los objetos de estudio centrales de la historia cultural."

pasos:
  - "Es el tercero de los objetos de estudio mencionados en la teoría."

explicacion: |
  Verdadero: la cultura popular es otro objeto central de estudio de
  esta corriente, ampliando el foco tradicional en la elite.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["objeto_de_estudio"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de las corrientes anteriores, la historia cultural amplía qué cuenta como objeto legítimo de estudio histórico, incluyendo mentalidades, prácticas cotidianas y cultura popular."

pasos:
  - "Es la conclusión central sobre la amplitud de foco de esta corriente."

explicacion: |
  Verdadero: es una de las contribuciones centrales de esta corriente
  a la disciplina.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["escuela_de_los_annales", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Escuela de los Annales mira grandes estructuras de larga duración; la historia cultural invierte la escala, mirando casos individuales chicos para revelar algo general."

pasos:
  - "Ver `../escuela-de-los-annales/`: es el contraste de escala entre estas dos corrientes."

explicacion: |
  Verdadero: es la diferencia central de escala entre estas dos
  corrientes de la subrama.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["positivismo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El positivismo se centra en grandes figuras y documentos oficiales; la historia cultural se centra en personas comunes y fuentes no convencionales."

pasos:
  - "Ver `../positivismo/`: es el contraste de foco entre estas dos corrientes."

explicacion: |
  Verdadero: es la diferencia central de foco entre estas dos
  corrientes de la subrama.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["historia_cultural", "practica"]

variables:
  analisis: ["estudiar el diario personal de una campesina para entender cómo pensaba la gente común de su época", "estudiar un tratado firmado entre dos reyes"]
  corrientes: ["historia cultural", "positivismo"]
  idx: uno_de([0, 1])

respuesta: corrientes[idx]
tipo: mc
opciones_explicitas: ["historia cultural", "positivismo", "materialismo histórico", "Escuela de los Annales"]

enunciado: "\"{analisis[idx]}\" corresponde principalmente al enfoque de..."

pasos:
  - "Fuente no convencional (diario personal) + caso individual = historia cultural. Documento oficial + grandes figuras = positivismo."

explicacion: |
  Reconocer el tipo de fuente y de sujeto estudiado permite
  identificar la corriente historiográfica aplicada.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["historia_cultural", "valor_del_caso_micro"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según la historia cultural, la magnitud aparente de un caso (una sola persona, un solo juicio) no determina su valor histórico: un caso bien documentado puede revelar mucho sobre una época entera."

pasos:
  - "Es coherente con el ejemplo de Ginzburg sobre el molinero friulano."

explicacion: |
  Verdadero: es la conclusión central sobre el valor de los casos
  micro en esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada corriente historiográfica es un modelo distinto de qué causas priorizar al explicar un hecho histórico — por eso este tema depende de multicausalidad en el MAPA."

pasos:
  - "Ver `../multicausalidad/`: es el prerrequisito directo de este tema y sus tres hermanos."

explicacion: |
  Verdadero: es la misma conexión conceptual ya vista en las
  corrientes anteriores de esta subrama.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["neutralidad", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Positivismo, materialismo histórico, Escuela de los Annales e historia cultural son cuatro lentes distintas y legítimas para hacer historia, ninguna reemplaza del todo a las demás."

pasos:
  - "Ver `../positivismo/`, `../materialismo-historico/` y `../escuela-de-los-annales/`: mismo criterio de neutralidad aplicado a las cuatro."

explicacion: |
  Verdadero: es la síntesis del principio de neutralidad aplicado a
  toda la subrama de corrientes historiográficas.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "intermedio"
  tags: ["historia_cultural", "metodo"]

enunciado: "Ordená los pasos para reconocer si un texto histórico sigue el enfoque de la historia cultural."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el foco está en un caso individual chico, no en grandes estructuras o figuras"
  - "Identificar si usa fuentes no convencionales (diarios, juicios de personas comunes)"
  - "Revisar si el objeto de estudio incluye mentalidades, prácticas cotidianas o cultura popular"
  - "Concluir si el texto corresponde al enfoque de la historia cultural"
respuesta_orden: ["Revisar si el foco está en un caso individual chico, no en grandes estructuras o figuras", "Identificar si usa fuentes no convencionales (diarios, juicios de personas comunes)", "Revisar si el objeto de estudio incluye mentalidades, prácticas cotidianas o cultura popular", "Concluir si el texto corresponde al enfoque de la historia cultural"]
explicacion: |
  El análisis va de la escala del caso estudiado al tipo de fuentes y
  objeto de estudio, para concluir si corresponde a esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La historia cultural cierra la subrama de corrientes historiográficas: hechos y figuras (positivismo) → clases y producción (materialismo histórico) → estructuras de larga duración (Annales) → lo micro que revela lo macro (historia cultural)."

pasos:
  - "Ver `../positivismo/`, `../materialismo-historico/` y `../escuela-de-los-annales/`: es el recorrido completo de las cuatro corrientes de esta subrama."

explicacion: |
  Verdadero: es la síntesis del recorrido completo de la subrama de
  corrientes historiográficas.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["historia_cultural", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al leer un libro de historia centrado en el diario de una sola persona común, usado para entender cómo se vivía y pensaba en su época, conviene reconocer que está aplicando un enfoque cercano a la historia cultural."

pasos:
  - "Es la aplicación práctica directa de este tema al leer críticamente un texto histórico real."

explicacion: |
  Verdadero: es la aplicación concreta de este tema para reconocer el
  enfoque historiográfico de un texto real.
```

## Sección: materialismo-historico (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "basico"
  tags: ["materialismo_historico", "criterio_central"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El materialismo histórico sostiene que lo que mueve la historia son las condiciones materiales de producción, no las ideas o decisiones de grandes individuos."

pasos:
  - "Ver `../positivismo/`: es un criterio opuesto al de esa corriente, que sí prioriza grandes figuras."

explicacion: |
  Verdadero: es el criterio central del materialismo histórico.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "intermedio"
  tags: ["marx"]

variables:
  n: uno_de([1, 1])

respuesta: "Marx"
tipo: completar

enunciado: "El pensador que desarrolló el materialismo histórico como método para explicar la historia se apellida..."

pasos:
  - "Karl Marx es el autor central asociado a esta corriente."

explicacion: |
  Marx es el autor central del materialismo histórico.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "intermedio"
  tags: ["condiciones_materiales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las condiciones materiales de producción son cómo una sociedad produce lo que necesita para vivir, y cómo se organiza el trabajo y la propiedad alrededor de esa producción."

pasos:
  - "Es la definición central de este concepto en el materialismo histórico."

explicacion: |
  Verdadero: es la definición central de condiciones materiales de
  producción.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "intermedio"
  tags: ["lucha_de_clases"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según el materialismo histórico, la historia avanza a través del conflicto entre clases sociales con intereses económicos opuestos."

pasos:
  - "Es el mecanismo central del cambio histórico según esta corriente."

explicacion: |
  Verdadero: la lucha de clases es el motor central del cambio
  histórico según esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "intermedio"
  tags: ["lucha_de_clases", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Señores feudales vs. siervos, y burguesía vs. proletariado, son ejemplos de conflictos entre clases sociales mencionados en la teoría."

pasos:
  - "Son los ejemplos concretos de conflictos de clase mencionados en la teoría."

explicacion: |
  Verdadero: son ejemplos de conflictos de clase citados en la
  teoría de esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "avanzado"
  tags: ["lucha_de_clases", "politica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según el materialismo histórico, los cambios políticos e ideológicos son, en gran medida, reflejo de los conflictos materiales de fondo, no su causa."

pasos:
  - "Es una diferencia central con corrientes que priorizan la política o las ideas como causa principal."

explicacion: |
  Verdadero: es la relación causal central que propone esta
  corriente entre lo material y lo político/ideológico.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "intermedio"
  tags: ["materialismo_historico", "positivismo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Donde el positivismo mira grandes figuras y hechos políticos puntuales, el materialismo histórico mira estructuras económicas y grupos sociales."

pasos:
  - "Ver `../positivismo/`: es la diferencia de foco central entre ambas corrientes."

explicacion: |
  Verdadero: es la diferencia de foco entre estas dos corrientes
  historiográficas.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "avanzado"
  tags: ["materialismo_historico", "positivismo", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Analizar un tratado firmado por un rey preguntando \"qué relaciones de producción sostenían el poder de ese rey y de la clase que representaba\" es un ejemplo del enfoque del materialismo histórico, en vez de simplemente narrar las cláusulas del tratado (enfoque positivista)."

pasos:
  - "Es la aplicación práctica del contraste de foco descrito en la teoría."

explicacion: |
  Verdadero: es un ejemplo concreto de cómo cambia el análisis según
  la corriente historiográfica aplicada.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "avanzado"
  tags: ["metodo_vs_programa_politico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El materialismo histórico como método historiográfico (una forma de explicar el pasado) es distinto del marxismo como corriente político-económica (una postura sobre cómo debería organizarse la sociedad hoy)."

pasos:
  - "Ver `../../filosofia/historia-de-la-filosofia-y-corrientes/`: el marxismo aparece ahí como corriente político-económica, con un foco distinto."

explicacion: |
  Verdadero: es la aclaración central de este tema para no confundir
  dos usos distintos del mismo pensamiento.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "avanzado"
  tags: ["metodo_vs_programa_politico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un historiador puede usar el método del materialismo histórico (analizar condiciones económicas de fondo) sin necesariamente compartir el programa político marxista, y viceversa."

pasos:
  - "Es la aclaración central de que método historiográfico y postura política son cosas distintas."

explicacion: |
  Verdadero: es un matiz importante para separar el uso metodológico
  del compromiso ideológico personal.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "avanzado"
  tags: ["aporte_metodologico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Independientemente de su origen en el pensamiento de Marx, el materialismo histórico introdujo un aporte que muchos historiadores de corrientes distintas siguen usando: prestar atención a las condiciones económicas y sociales de fondo."

pasos:
  - "Es la conclusión sobre la influencia metodológica de esta corriente más allá de su origen ideológico."

explicacion: |
  Verdadero: es la síntesis del aporte metodológico duradero de esta
  corriente.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "avanzado"
  tags: ["influencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La atención del materialismo histórico a las condiciones económicas y sociales de fondo se nota, por ejemplo, en la Escuela de los Annales, otra corriente de esta subrama."

pasos:
  - "Ver `../escuela-de-los-annales/`: es la conexión mencionada en la teoría entre estas dos corrientes."

explicacion: |
  Verdadero: es la influencia metodológica del materialismo histórico
  sobre otra corriente posterior de esta subrama.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "avanzado"
  tags: ["neutralidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El materialismo histórico es una de varias corrientes historiográficas legítimas, no la única forma correcta de hacer historia."

pasos:
  - "Es coherente con el principio de neutralidad aplicado a las cuatro corrientes de esta subrama."

explicacion: |
  Verdadero: cada corriente es una lente distinta, ninguna se
  presenta como la única correcta.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "intermedio"
  tags: ["materialismo_historico", "practica"]

variables:
  analisis: ["estudiar cómo se organizaba la producción agrícola y quién controlaba la tierra en una sociedad feudal", "estudiar la biografía y las decisiones diplomáticas de un rey medieval"]
  corrientes: ["materialismo histórico", "positivismo"]
  idx: uno_de([0, 1])

respuesta: corrientes[idx]
tipo: mc
opciones_explicitas: ["materialismo histórico", "positivismo"]

enunciado: "\"{analisis[idx]}\" corresponde principalmente al enfoque de..."

pasos:
  - "Foco en producción/propiedad = materialismo histórico. Foco en biografía/decisiones de una figura = positivismo."

explicacion: |
  Reconocer el foco temático (estructuras materiales vs. grandes
  figuras) permite identificar la corriente historiográfica aplicada.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada corriente historiográfica es un modelo distinto de qué causas priorizar al explicar un hecho histórico — por eso este tema depende de multicausalidad en el MAPA."

pasos:
  - "Ver `../multicausalidad/`: es el prerrequisito directo de este tema y sus tres hermanos."

explicacion: |
  Verdadero: es la misma conexión conceptual ya vista en
  `../positivismo/`.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "intermedio"
  tags: ["lucha_de_clases"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según el materialismo histórico, distintas clases sociales tienen intereses económicos opuestos entre sí, lo que genera tensión y conflicto."

pasos:
  - "Es la base del concepto de lucha de clases como motor del cambio histórico."

explicacion: |
  Verdadero: la oposición de intereses económicos entre clases es la
  base del conflicto que esta corriente identifica como motor
  histórico.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "avanzado"
  tags: ["matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El materialismo histórico no ignora por completo la política, sino que la analiza como reflejo de conflictos materiales de fondo, no como causa autónoma independiente de esas condiciones."

pasos:
  - "Es un matiz importante: no se trata de ignorar la política, sino de explicarla a partir de otra causa de fondo."

explicacion: |
  Verdadero: es un matiz importante sobre cómo esta corriente
  incorpora (no ignora) el análisis político.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "intermedio"
  tags: ["materialismo_historico", "metodo"]

enunciado: "Ordená los pasos para reconocer si un texto histórico sigue el enfoque del materialismo histórico."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el foco está en condiciones económicas y de producción, no en biografías individuales"
  - "Identificar si se analizan clases sociales con intereses opuestos"
  - "Revisar si los cambios políticos se explican como reflejo de esos conflictos materiales"
  - "Concluir si el texto corresponde al enfoque del materialismo histórico"
respuesta_orden: ["Revisar si el foco está en condiciones económicas y de producción, no en biografías individuales", "Identificar si se analizan clases sociales con intereses opuestos", "Revisar si los cambios políticos se explican como reflejo de esos conflictos materiales", "Concluir si el texto corresponde al enfoque del materialismo histórico"]
explicacion: |
  El análisis va del foco temático a la relación causal propuesta
  entre lo material y lo político, para concluir si corresponde a
  esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "avanzado"
  tags: ["sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El materialismo histórico es la segunda de las cuatro corrientes historiográficas de esta subrama, hermana de positivismo, Escuela de los Annales e historia cultural."

pasos:
  - "Ver `../positivismo/`, `../escuela-de-los-annales/` y `../historia-cultural/`: los cuatro nodos hermanos dependen de `../multicausalidad/`."

explicacion: |
  Verdadero: es la relación entre este tema y los otros tres de la
  subrama.
```

```
metadata:
  materia: "historia"
  tema: "materialismo_historico"
  nivel: "avanzado"
  tags: ["materialismo_historico", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al leer un libro de historia centrado en las condiciones de trabajo, la propiedad de la tierra y los conflictos entre grupos sociales de una época, conviene reconocer que está aplicando un enfoque cercano al materialismo histórico."

pasos:
  - "Es la aplicación práctica directa de este tema al leer críticamente un texto histórico real."

explicacion: |
  Verdadero: es la aplicación concreta de este tema para reconocer el
  enfoque historiográfico de un texto real.
```

## Sección: positivismo (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "basico"
  tags: ["positivismo", "criterio_central"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El positivismo histórico sostiene que el trabajo del historiador es contar \"lo que realmente pasó\", reconstruyendo los hechos con la mayor objetividad posible a partir de documentos de archivo."

pasos:
  - "Es la frase clásica atribuida al historiador Leopold von Ranke."

explicacion: |
  Verdadero: es el criterio central del positivismo histórico.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "intermedio"
  tags: ["ranke"]

variables:
  n: uno_de([1, 1])

respuesta: "Ranke"
tipo: completar

enunciado: "El historiador alemán del siglo XIX asociado a la frase \"contar lo que realmente pasó\" (wie es eigentlich gewesen) se apellida..."

pasos:
  - "Leopold von Ranke es el referente clásico del positivismo histórico."

explicacion: |
  Ranke es el autor central asociado a esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "intermedio"
  tags: ["hechos_y_figuras"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El positivismo se centra en hechos verificables (fechas, tratados, batallas) como objeto central de estudio."

pasos:
  - "Es uno de los dos focos centrales de esta corriente, junto a las grandes figuras."

explicacion: |
  Verdadero: los hechos verificables son un foco central del
  positivismo histórico.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "intermedio"
  tags: ["hechos_y_figuras"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El positivismo considera a las grandes figuras (reyes, generales, estadistas) como protagonistas centrales del cambio histórico."

pasos:
  - "Es el otro foco central de esta corriente, junto a los hechos verificables."

explicacion: |
  Verdadero: las grandes figuras son un foco central del positivismo
  histórico.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "intermedio"
  tags: ["archivo_como_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para el positivismo, el documento de archivo (una carta oficial, un tratado, un registro estatal) es la fuente privilegiada, casi la única fuente confiable."

pasos:
  - "Se considera que refleja los hechos de forma directa, sin la mediación de interpretaciones posteriores."

explicacion: |
  Verdadero: el archivo como fuente privilegiada es central en el
  método positivista.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "intermedio"
  tags: ["neutralidad_del_historiador"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El positivismo aspira a que el historiador sea un observador neutral, que se limita a reportar lo que los documentos dicen, sin imponer una interpretación propia."

pasos:
  - "Es un ideal de objetividad científica aplicado a la historia."

explicacion: |
  Verdadero: la neutralidad del historiador es un ideal metodológico
  central del positivismo.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "avanzado"
  tags: ["criticas", "neutralidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Corrientes posteriores cuestionan que sea posible una neutralidad total del historiador, presentado como parte del debate historiográfico, no como veredicto final."

pasos:
  - "Es una crítica mencionada con neutralidad, sin declarar cuál corriente tiene razón."

explicacion: |
  Verdadero: es una crítica frecuente al positivismo, presentada de
  forma neutral como parte del debate entre corrientes.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "avanzado"
  tags: ["criticas", "exclusion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Otra crítica al positivismo es que centrarse sólo en política y grandes figuras deja afuera a la mayoría de la población, sin registro en archivos oficiales."

pasos:
  - "Es otra crítica mencionada con neutralidad, sin declarar veredicto final."

explicacion: |
  Verdadero: es otra crítica frecuente al positivismo, presentada
  con el mismo criterio de neutralidad.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "avanzado"
  tags: ["neutralidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El positivismo es una lente real con la que se sigue escribiendo historia hoy, no una etapa superada por las corrientes que surgieron después."

pasos:
  - "Es el criterio de neutralidad central de todo este bloque de corrientes historiográficas."

explicacion: |
  Verdadero: es el principio de neutralidad explícito aplicado a
  esta corriente, coherente con el resto del mapa.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "avanzado"
  tags: ["sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las corrientes que siguen a esta subrama (materialismo histórico, Escuela de los Annales, historia cultural) se definen en buena medida en relación a lo que el positivismo prioriza y a lo que deja afuera."

pasos:
  - "Ver `../materialismo-historico/`, `../escuela-de-los-annales/`, `../historia-cultural/`: las tres corrientes siguientes de la subrama."

explicacion: |
  Verdadero: es la relación central entre el positivismo y las otras
  corrientes historiográficas hermanas.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "intermedio"
  tags: ["contexto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El positivismo histórico surge en el siglo XIX."

pasos:
  - "Es la corriente historiográfica más antigua de las cuatro estudiadas en esta subrama."

explicacion: |
  Verdadero: es el contexto histórico del surgimiento de esta
  corriente.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "intermedio"
  tags: ["hechos_y_figuras", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "positivismo"
tipo: mc
opciones_explicitas: ["positivismo", "materialismo histórico", "historia cultural"]

enunciado: "Un análisis histórico centrado en un tratado de paz firmado por dos reyes, con foco en las fechas y las cláusulas exactas del documento, corresponde principalmente al enfoque de..."

pasos:
  - "Foco en documento de archivo + grandes figuras (reyes) + hechos verificables (fechas) = positivismo."

explicacion: |
  El foco en documentos oficiales, fechas y figuras de poder es
  característico del enfoque positivista.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "avanzado"
  tags: ["hechos_y_figuras", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El positivismo prioriza estructuras de larga duración (clima, demografía, economía) por sobre reyes y batallas."

pasos:
  - "Esa prioridad corresponde a la Escuela de los Annales, no al positivismo (que prioriza hechos puntuales y grandes figuras)."

explicacion: |
  Falso: es exactamente la prioridad opuesta a la del positivismo,
  corresponde a otra corriente historiográfica.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "intermedio"
  tags: ["archivo_como_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un historiador positivista, al estudiar una guerra, priorizaría revisar tratados, correspondencia diplomática oficial y registros militares antes que testimonios orales de soldados comunes."

pasos:
  - "Coherente con el foco en el archivo oficial como fuente privilegiada del método positivista."

explicacion: |
  Verdadero: es la aplicación práctica del método positivista a un
  caso concreto de investigación histórica.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada corriente historiográfica es, en el fondo, un modelo distinto de qué causas priorizar al explicar un hecho histórico — por eso este tema depende de multicausalidad en el MAPA."

pasos:
  - "Ver `../multicausalidad/`: es el prerrequisito directo de este tema y sus tres hermanos."

explicacion: |
  Verdadero: es la conexión conceptual explícita entre corrientes
  historiográficas y multicausalidad.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "intermedio"
  tags: ["neutralidad_del_historiador"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El nombre \"positivismo\" refleja la aspiración de aplicar a la historia un ideal de objetividad y método propio de las ciencias naturales."

pasos:
  - "Es coherente con el ideal de neutralidad del historiador descrito en la teoría."

explicacion: |
  Verdadero: el positivismo busca aplicar rigor científico al
  trabajo histórico.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "avanzado"
  tags: ["neutralidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El positivismo es una de varias corrientes historiográficas legítimas, no la única forma correcta de hacer historia."

pasos:
  - "Es coherente con el principio de neutralidad aplicado a las cuatro corrientes de esta subrama."

explicacion: |
  Verdadero: cada corriente es una lente distinta, ninguna se
  presenta como la única correcta.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "intermedio"
  tags: ["positivismo", "metodo"]

enunciado: "Ordená los pasos para reconocer si un texto histórico sigue el enfoque positivista."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el foco está en hechos verificables y grandes figuras, no en estructuras de larga duración"
  - "Revisar qué tipo de fuentes usa principalmente (documentos de archivo oficiales)"
  - "Revisar si el autor busca reportar \"lo que pasó\" sin imponer una interpretación teórica explícita"
  - "Concluir si el texto corresponde al enfoque positivista"
respuesta_orden: ["Revisar si el foco está en hechos verificables y grandes figuras, no en estructuras de larga duración", "Revisar qué tipo de fuentes usa principalmente (documentos de archivo oficiales)", "Revisar si el autor busca reportar \"lo que pasó\" sin imponer una interpretación teórica explícita", "Concluir si el texto corresponde al enfoque positivista"]
explicacion: |
  El análisis va del foco temático a las fuentes usadas y al estilo
  interpretativo, para concluir si corresponde al enfoque
  positivista.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "avanzado"
  tags: ["sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El positivismo es la primera de las cuatro corrientes historiográficas de esta subrama, hermana de materialismo histórico, Escuela de los Annales e historia cultural."

pasos:
  - "Ver `../materialismo-historico/`, `../escuela-de-los-annales/` y `../historia-cultural/`: los cuatro nodos hermanos dependen de `../multicausalidad/`."

explicacion: |
  Verdadero: es la relación entre este tema y los otros tres de la
  subrama.
```

```
metadata:
  materia: "historia"
  tema: "positivismo"
  nivel: "avanzado"
  tags: ["positivismo", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al leer un libro de historia centrado en biografías de líderes políticos y en la cronología exacta de tratados y batallas, conviene reconocer que está aplicando un enfoque cercano al positivismo, con sus fortalezas (rigor documental) y sus límites (qué deja afuera)."

pasos:
  - "Es la aplicación práctica directa de este tema al leer críticamente un texto histórico real."

explicacion: |
  Verdadero: es la aplicación concreta de este tema para reconocer el
  enfoque historiográfico de un texto real.
```

## Sección: revoluciones (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "basico"
  tags: ["revoluciones", "vocabulario"]

enunciado: "¿Qué es una revolución, en el sentido histórico?"
tipo: mc
opciones_explicitas:
  - "Un cambio rápido y profundo en la estructura política, social o económica de una sociedad"
  - "Cualquier cambio de gobierno, sin importar su alcance"
  - "Un tratado internacional entre dos países"
respuesta: "Un cambio rápido y profundo en la estructura política, social o económica de una sociedad"

explicacion: |
  Rompe con el orden anterior en vez de reformarlo gradualmente.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "intermedio"
  tags: ["revoluciones", "vocabulario"]

enunciado: "¿En qué se diferencia una revolución de una reforma?"
tipo: mc
opciones_explicitas:
  - "La reforma es un cambio gradual dentro del sistema existente; la revolución rompe con la estructura de fondo"
  - "Son exactamente lo mismo"
  - "La reforma siempre es más violenta que la revolución"
respuesta: "La reforma es un cambio gradual dentro del sistema existente; la revolución rompe con la estructura de fondo"

explicacion: |
  La velocidad y la profundidad del cambio son lo que distingue a una
  de otra.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "avanzado"
  tags: ["revoluciones", "vocabulario"]

enunciado: "¿Qué distingue a una revolución de un golpe de Estado?"
tipo: mc
opciones_explicitas:
  - "El golpe puede cambiar quién manda sin transformar la estructura social o económica de fondo; la revolución sí la cambia"
  - "El golpe siempre dura más tiempo que una revolución"
  - "No hay ninguna diferencia entre los dos conceptos"
respuesta: "El golpe puede cambiar quién manda sin transformar la estructura social o económica de fondo; la revolución sí la cambia"

explicacion: |
  Un golpe puede reemplazar a un gobernante sin cambiar cómo funciona
  el sistema; una revolución cambia las reglas de fondo.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "intermedio"
  tags: ["revoluciones", "multicausalidad"]

enunciado: "¿Una revolución suele tener una única causa clara y aislada?"
tipo: vf
respuesta: falso

explicacion: |
  Es el ejemplo de manual de multicausalidad: factores económicos,
  políticos, sociales y un detonante puntual suelen combinarse.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "avanzado"
  tags: ["multicausalidad"]

enunciado: "¿Cuál es la diferencia entre el \"detonante puntual\" de una revolución y sus causas de fondo?"
tipo: mc
opciones_explicitas:
  - "El detonante es el evento concreto que precipita lo que ya venía acumulándose, no la causa profunda en sí"
  - "El detonante siempre es más importante que las causas de fondo"
  - "No hay diferencia, son sinónimos"
respuesta: "El detonante es el evento concreto que precipita lo que ya venía acumulándose, no la causa profunda en sí"

explicacion: |
  Sin las causas de fondo ya acumuladas, un mismo detonante no
  hubiera generado una revolución.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "intermedio"
  tags: ["revolucion_de_mayo", "argentina"]

enunciado: "¿Cuál fue el detonante puntual de la Revolución de Mayo de 1810?"
tipo: mc
opciones_explicitas:
  - "La noticia de la caída de la Junta Central española ante la invasión napoleónica"
  - "La independencia de Estados Unidos"
  - "Un terremoto en Buenos Aires"
respuesta: "La noticia de la caída de la Junta Central española ante la invasión napoleónica"

explicacion: |
  Esa noticia dejó sin autoridad reconocida al Virreinato del Río de
  la Plata.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "avanzado"
  tags: ["revolucion_de_mayo", "argentina"]

enunciado: "Además del detonante puntual, ¿qué causas más profundas venían acumulándose antes de 1810?"
tipo: mc
opciones_explicitas:
  - "Ideas ilustradas circulando entre la élite criolla y tensiones comerciales por el monopolio español"
  - "Una alianza militar con Francia"
  - "La abolición previa de la esclavitud en el Virreinato"
respuesta: "Ideas ilustradas circulando entre la élite criolla y tensiones comerciales por el monopolio español"

explicacion: |
  Son las causas de fondo típicas de una revolución: ideas nuevas
  circulando y desigualdad económica/comercial acumulada.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "avanzado"
  tags: ["revolucion_de_mayo", "argentina"]

enunciado: "¿Qué precedente importante mostraron las Invasiones Inglesas de 1806-1807 antes de la Revolución de Mayo?"
tipo: mc
opciones_explicitas:
  - "Que Buenos Aires podía organizarse militarmente sin depender de la corona española"
  - "Que España tenía un ejército invencible"
  - "Que Gran Bretaña había conquistado el Virreinato"
respuesta: "Que Buenos Aires podía organizarse militarmente sin depender de la corona española"

explicacion: |
  Esa autonomía militar demostrada fue un antecedente clave de la
  autonomía política que vendría después.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "basico"
  tags: ["revolucion_de_mayo", "argentina"]

enunciado: "¿En qué año ocurrió la Revolución de Mayo?"
tipo: input
respuesta: 1810

explicacion: |
  Es el punto de partida de la cadena histórica argentina (`AH4` de
  Tronco 8.c).
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Una revolución es siempre sinónimo de una guerra prolongada?"
tipo: vf
respuesta: falso

explicacion: |
  El proceso revolucionario (cambio de régimen) y la guerra que puede
  seguirle (si el poder derrocado resiste con las armas) son procesos
  distintos, aunque a menudo encadenados.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Por qué se dice que las causas económicas de una revolución cruzan con la estructura económica de un territorio (Geografía)?"
tipo: mc
opciones_explicitas:
  - "Porque las tensiones comerciales o de desigualdad muchas veces nacen de qué actividades económicas domina ese territorio"
  - "Porque la Geografía determina el resultado militar de la revolución"
  - "Porque no hay ninguna relación real entre economía y revolución"
respuesta: "Porque las tensiones comerciales o de desigualdad muchas veces nacen de qué actividades económicas domina ese territorio"

explicacion: |
  Es la razón por la que `revoluciones/` cruza con
  `../../geografia/recursos-actividades-economicas/` en
  `../dependencias.md`.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "intermedio"
  tags: ["multicausalidad"]

enunciado: "¿Qué tipo de tensión social suele combinarse con las causas de una revolución?"
tipo: mc
opciones_explicitas:
  - "Un grupo social que gana peso económico pero no tiene representación política proporcional"
  - "Un exceso de representación política sin ningún peso económico"
  - "La ausencia total de cualquier grupo social organizado"
respuesta: "Un grupo social que gana peso económico pero no tiene representación política proporcional"

explicacion: |
  Ejemplo real: la burguesía criolla americana frente a la corona
  española, con peso económico creciente pero sin poder político
  proporcional.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "intermedio"
  tags: ["revoluciones"]

enunciado: "Una revolución sólo cambia quién gobierna, sin tocar la estructura de propiedad ni el sistema social."
tipo: vf
respuesta: falso

explicacion: |
  Una revolución cambia las reglas de fondo — puede afectar quién
  tiene el poder, cómo se organiza la propiedad, o ambas cosas.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "intermedio"
  tags: ["multicausalidad"]

enunciado: "¿Qué tipo de causa representa \"ideas ilustradas circulando entre la élite\" en el análisis de una revolución?"
tipo: mc
opciones_explicitas:
  - "Una causa política/ideológica"
  - "Un detonante puntual"
  - "Una causa exclusivamente económica"
respuesta: "Una causa política/ideológica"

explicacion: |
  Las ideas nuevas circulando (ilustración, liberalismo) son un factor
  político/ideológico que se suma a los económicos y sociales.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "avanzado"
  tags: ["multicausalidad"]

enunciado: "Para analizar correctamente una revolución según la herramienta de \"multicausalidad\", ¿qué hay que evitar?"
tipo: mc
opciones_explicitas:
  - "Reducirla a una sola causa, ignorando que varios factores se combinaron"
  - "Mencionar el detonante puntual"
  - "Considerar factores económicos"
respuesta: "Reducirla a una sola causa, ignorando que varios factores se combinaron"

explicacion: |
  Es exactamente el error que la herramienta de `../multicausalidad/`
  busca evitar.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "intermedio"
  tags: ["multicausalidad"]

enunciado: "¿Qué tipo de causa política suele preceder a una revolución exitosa?"
tipo: mc
opciones_explicitas:
  - "Pérdida de legitimidad del poder existente o un vacío de poder"
  - "Un aumento repentino de la legitimidad del gobierno"
  - "La ausencia total de cualquier idea política nueva"
respuesta: "Pérdida de legitimidad del poder existente o un vacío de poder"

explicacion: |
  Sin ese debilitamiento previo del poder, un detonante puntual
  difícilmente escala a una revolución.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "intermedio"
  tags: ["revolucion_de_mayo"]

enunciado: "Ordená estos hechos en la secuencia real que llevó a la Revolución de Mayo: Invasión napoleónica a España, Invasiones Inglesas, Revolución de Mayo."
tipo: ordenar
opciones_explicitas:
  - "Invasiones Inglesas"
  - "Invasión napoleónica a España"
  - "Revolución de Mayo"
respuesta_orden: ["Invasiones Inglesas", "Invasión napoleónica a España", "Revolución de Mayo"]

explicacion: |
  Las Invasiones Inglesas (1806-1807) fueron el precedente militar; la
  invasión napoleónica a España (1808) generó el vacío de poder; la
  Revolución de Mayo (1810) fue la consecuencia final.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Por qué `revoluciones/` depende de `../multicausalidad/` como prerrequisito?"
tipo: mc
opciones_explicitas:
  - "Porque analizar correctamente una revolución exige ya poder combinar varias causas sin reducirla a una sola"
  - "Porque multicausalidad enseña fechas de revoluciones específicas"
  - "Porque no hay ninguna relación real entre ambos temas"
respuesta: "Porque analizar correctamente una revolución exige ya poder combinar varias causas sin reducirla a una sola"

explicacion: |
  Es la herramienta de pensamiento histórico que este tema aplica de
  lleno a un proceso concreto.
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "basico"
  tags: ["revoluciones"]

enunciado: "¿Qué distingue mejor a una revolución de un simple cambio de gobierno?"
tipo: mc
opciones_explicitas:
  - "Que cambia las reglas de fondo (poder, propiedad, o ambas), no sólo la persona que gobierna"
  - "Que siempre involucra un ejército extranjero"
  - "Que dura exactamente un año"
respuesta: "Que cambia las reglas de fondo (poder, propiedad, o ambas), no sólo la persona que gobierna"

explicacion: |
  Es el criterio central que separa "revolución" de "reforma" o "golpe
  de Estado".
```

```
metadata:
  materia: "historia"
  tema: "revoluciones"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Por qué el nodo `H2a` de Tronco 6 remite su desarrollo real a `AH4` de Tronco 8.c, en vez de duplicar el contenido de la Revolución de Mayo en dos lugares?"
tipo: mc
opciones_explicitas:
  - "Para no escribir el mismo tema histórico dos veces con distintos IDs, el mismo criterio ya usado con \"Memoria: terrorismo de Estado\" y `AH12`/`AH13`"
  - "Porque Tronco 8.c no tiene ninguna relación con revoluciones"
  - "Porque `H2a` y `AH4` son conceptos completamente distintos"
respuesta: "Para no escribir el mismo tema histórico dos veces con distintos IDs, el mismo criterio ya usado con \"Memoria: terrorismo de Estado\" y `AH12`/`AH13`"

explicacion: |
  Es el mismo patrón de "duplicación resuelta" (agregado v2.4) que ya
  usa el MAPA en otro punto de esta misma cadena.
```

## Sección: independencias (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "basico"
  tags: ["independencias", "vocabulario"]

enunciado: "¿Qué es un proceso de independencia?"
tipo: mc
opciones_explicitas:
  - "El proceso por el cual un territorio deja de estar bajo la soberanía de otro Estado y se constituye como Estado propio"
  - "Un cambio de gobernante dentro del mismo Estado"
  - "Un tratado comercial entre dos países"
respuesta: "El proceso por el cual un territorio deja de estar bajo la soberanía de otro Estado y se constituye como Estado propio"

explicacion: |
  No es un evento instantáneo: es un proceso que puede durar años.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "En el caso rioplatense, ¿la independencia fue el primer paso del proceso o la consecuencia de una revolución previa?"
tipo: mc
opciones_explicitas:
  - "Fue la consecuencia de la Revolución de Mayo, un proceso revolucionario previo"
  - "Fue el primer paso, antes de cualquier revolución"
  - "No tuvo ninguna relación con la Revolución de Mayo"
respuesta: "Fue la consecuencia de la Revolución de Mayo, un proceso revolucionario previo"

explicacion: |
  Es la razón por la que `independencias/` depende de
  `../revoluciones/` en `../dependencias.md`.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["revolucion_de_mayo"]

enunciado: "¿En nombre de quién decía gobernar la Junta de 1810, aunque en la práctica ejercía el poder de forma autónoma?"
tipo: mc
opciones_explicitas:
  - "Del rey depuesto, Fernando VII"
  - "Del rey de Portugal"
  - "De ningún rey, declarándose independiente desde el primer día"
respuesta: "Del rey depuesto, Fernando VII"

explicacion: |
  Era una ambigüedad deliberada para no provocar una reacción militar
  inmediata mientras el nuevo gobierno se afianzaba.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["revolucion_de_mayo"]

enunciado: "¿Por qué la Junta de 1810 no declaró la independencia total de inmediato?"
tipo: mc
opciones_explicitas:
  - "Para ganar tiempo y consolidarse sin provocar una reacción militar inmediata de España"
  - "Porque no existía ninguna intención de romper con España"
  - "Porque España ya había reconocido la independencia en 1810"
respuesta: "Para ganar tiempo y consolidarse sin provocar una reacción militar inmediata de España"

explicacion: |
  Era una estrategia deliberada de radicalización progresiva, no
  indecisión.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "basico"
  tags: ["argentina"]

enunciado: "¿En qué año se declaró formalmente la independencia de las Provincias Unidas en Sudamérica?"
tipo: input
respuesta: 1816

explicacion: |
  El Congreso de Tucumán declaró la independencia en 1816, 6 años
  después de la Revolución de Mayo.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["argentina", "calculo"]

variables:
  anio_revolucion: 1810
  anio_independencia: 1816

respuesta: anio_independencia - anio_revolucion
tipo: input

enunciado: "Entre la Revolución de Mayo ({anio_revolucion}) y la declaración de independencia en el Congreso de Tucumán ({anio_independencia}), ¿cuántos años pasaron?"

pasos:
  - "{anio_independencia} - {anio_revolucion}"

explicacion: |
  El proceso completo llevó más tiempo que el evento fundacional que
  se suele recordar como "punto de partida".
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "basico"
  tags: ["argentina"]

enunciado: "¿En qué Congreso se declaró la independencia argentina en 1816?"
tipo: mc
opciones_explicitas:
  - "Congreso de Tucumán"
  - "Congreso de Viena"
  - "Congreso de Panamá"
respuesta: "Congreso de Tucumán"

explicacion: |
  Fue el Congreso que reunió representantes de las Provincias Unidas
  para declarar formalmente la independencia.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Por qué declarar la independencia en 1816 no la hizo efectiva de forma automática?"
tipo: mc
opciones_explicitas:
  - "Porque España no reconoció la declaración y siguió enviando fuerzas militares para reconquistar el territorio"
  - "Porque el Congreso de Tucumán no tenía autoridad legal"
  - "Porque la independencia ya era efectiva desde 1810"
respuesta: "Porque España no reconoció la declaración y siguió enviando fuerzas militares para reconquistar el territorio"

explicacion: |
  La declaración política y la victoria militar que la sostiene son
  dos cosas distintas — ver `../guerras/`.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Son la declaración política de independencia y la victoria militar que la consolida exactamente lo mismo?"
tipo: vf
respuesta: falso

explicacion: |
  Son dos cosas distintas, aunque en la práctica una depende de la
  otra: sin ganar la guerra, la declaración queda sin efecto real.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["revolucion_de_mayo"]

enunciado: "¿Qué provocó que la postura independentista se consolidara como la única salida viable con el paso de los años?"
tipo: mc
opciones_explicitas:
  - "Los intentos de España de reconquistar el territorio"
  - "Un tratado de paz firmado en 1810"
  - "La ausencia total de conflicto con España"
respuesta: "Los intentos de España de reconquistar el territorio"

explicacion: |
  A medida que España insistía en recuperar el control, la ambigüedad
  inicial se volvió insostenible.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["proceso_continental"]

enunciado: "¿Qué campaña de San Martín llevó la independencia más allá del territorio rioplatense?"
tipo: mc
opciones_explicitas:
  - "El cruce de los Andes y la liberación de Chile"
  - "La expedición al Amazonas"
  - "La conquista de México"
respuesta: "El cruce de los Andes y la liberación de Chile"

explicacion: |
  Muestra que el proceso se pensó, en parte, como un proyecto
  continental, no aislado a un solo territorio.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["proceso_continental"]

enunciado: "¿Qué líder independentista lideró procesos en el norte de Sudamérica, en paralelo al de San Martín en el sur?"
tipo: mc
opciones_explicitas:
  - "Simón Bolívar"
  - "Napoleón Bonaparte"
  - "Bernardo O'Higgins"
respuesta: "Simón Bolívar"

explicacion: |
  Junto con San Martín, es una de las dos grandes figuras de la
  independencia hispanoamericana como proceso continental.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["proceso_continental"]

enunciado: "¿Por qué la independencia hispanoamericana se pensó, en parte, como un proyecto continental y no aislado por territorio?"
tipo: mc
opciones_explicitas:
  - "Porque ningún territorio quedaba realmente seguro mientras España mantuviera fuerzas militares en la región"
  - "Porque todos los territorios hispanoamericanos tenían el mismo gobierno"
  - "Porque España ya había reconocido todas las independencias en 1810"
respuesta: "Porque ningún territorio quedaba realmente seguro mientras España mantuviera fuerzas militares en la región"

explicacion: |
  Mientras hubiera fuerzas españolas activas en la región, cualquier
  territorio independizado corría riesgo de reconquista.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "basico"
  tags: ["independencias"]

enunciado: "Un proceso de independencia siempre es un evento instantáneo, que ocurre en un solo día."
tipo: vf
respuesta: falso

explicacion: |
  Es un proceso que puede durar años y atravesar varias etapas antes
  de consolidarse — el caso rioplatense llevó al menos 6 años sólo
  hasta la declaración formal, y más tiempo hasta consolidarse
  militarmente.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["revolucion_de_mayo"]

enunciado: "Ordená estas 3 etapas del proceso rioplatense: Declaración formal de independencia, Ambigüedad inicial (gobernar \"a nombre\" del rey), Radicalización progresiva."
tipo: ordenar
opciones_explicitas:
  - "Ambigüedad inicial (gobernar \"a nombre\" del rey)"
  - "Radicalización progresiva"
  - "Declaración formal de independencia"
respuesta_orden: ["Ambigüedad inicial (gobernar \"a nombre\" del rey)", "Radicalización progresiva", "Declaración formal de independencia"]

explicacion: |
  Es la secuencia real: 1810 (ambigüedad) → años intermedios
  (radicalización) → 1816 (declaración formal).
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["independencias"]

enunciado: "¿Qué necesita un territorio, además de declararse independiente, para consolidarse como Estado propio?"
tipo: mc
opciones_explicitas:
  - "Gobierno y reconocimiento internacional autónomos"
  - "Sólo una bandera y un himno nuevos"
  - "La aprobación exclusiva de la antigua metrópoli"
respuesta: "Gobierno y reconocimiento internacional autónomos"

explicacion: |
  Un Estado necesita ejercer soberanía real y ser reconocido, no sólo
  declarar la intención.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["independencias"]

enunciado: "¿Por qué conviene analizar la independencia rioplatense como un \"proceso\" y no como un único \"evento\" (la Revolución de Mayo)?"
tipo: mc
opciones_explicitas:
  - "Porque incluyó varias etapas a lo largo de años: ambigüedad, radicalización, declaración formal y consolidación militar"
  - "Porque la Revolución de Mayo no tuvo ninguna relación con la independencia"
  - "Porque el proceso terminó exactamente en 1810"
respuesta: "Porque incluyó varias etapas a lo largo de años: ambigüedad, radicalización, declaración formal y consolidación militar"

explicacion: |
  Reducirlo a un solo evento (la Revolución de Mayo) pierde toda la
  complejidad del proceso completo.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Por qué el proceso de independencia rioplatense se conecta directamente con `../guerras/`?"
tipo: mc
opciones_explicitas:
  - "Porque España resistió militarmente la independencia declarada, generando las Guerras de independencia"
  - "Porque `../guerras/` trata sobre un conflicto sin ninguna relación con la independencia"
  - "Porque la independencia se logró sin ningún conflicto armado"
respuesta: "Porque España resistió militarmente la independencia declarada, generando las Guerras de independencia"

explicacion: |
  Es la razón por la que `H2c` (guerras) depende de `H2b`
  (independencias) en `../dependencias.md`.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Cuál es la diferencia central entre \"revolución\" e \"independencia\" como procesos históricos?"
tipo: mc
opciones_explicitas:
  - "La revolución cambia el poder o la estructura interna de una sociedad; la independencia rompe la relación de soberanía con otro Estado"
  - "Son exactamente el mismo proceso con dos nombres distintos"
  - "La independencia siempre ocurre antes que cualquier revolución"
respuesta: "La revolución cambia el poder o la estructura interna de una sociedad; la independencia rompe la relación de soberanía con otro Estado"

explicacion: |
  Pueden estar conectadas (como en el caso rioplatense) pero son
  conceptos distintos.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Por qué el desarrollo real y detallado de la independencia argentina se ubica en la cadena `AH4`-`AH5` de Tronco 8.c y no acá?"
tipo: mc
opciones_explicitas:
  - "Para no duplicar el mismo contenido con dos IDs distintos — acá se explica el proceso general, allá el caso puntual con más contexto"
  - "Porque Tronco 8.c no tiene relación alguna con la independencia"
  - "Porque este tema y `AH4`/`AH5` tratan procesos completamente distintos"
respuesta: "Para no duplicar el mismo contenido con dos IDs distintos — acá se explica el proceso general, allá el caso puntual con más contexto"

explicacion: |
  Mismo criterio de "no repetir el mismo tema dos veces" que ya usa el
  MAPA en varios puntos (ver nota v2.4 sobre `AH12`/`AH13`).
```

## Sección: guerras (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "basico"
  tags: ["guerras", "vocabulario"]

enunciado: "¿Qué es una guerra, como proceso histórico?"
tipo: mc
opciones_explicitas:
  - "Un conflicto armado sostenido entre grupos organizados que se resuelve por la fuerza en vez de por acuerdo"
  - "Cualquier desacuerdo político sin uso de la fuerza"
  - "Un tratado firmado entre dos Estados"
respuesta: "Un conflicto armado sostenido entre grupos organizados que se resuelve por la fuerza en vez de por acuerdo"

explicacion: |
  Puede ser entre Estados, entre facciones internas, o ambos.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Qué rol suele cumplir la guerra respecto a procesos de revolución o independencia?"
tipo: mc
opciones_explicitas:
  - "Es el medio por el que muchas veces se decide si esos procesos se consolidan o fracasan"
  - "Es exactamente lo mismo que una revolución"
  - "No tiene ninguna relación con esos procesos"
respuesta: "Es el medio por el que muchas veces se decide si esos procesos se consolidan o fracasan"

explicacion: |
  Una revolución cambia estructura interna; una independencia rompe
  soberanía; la guerra es a menudo el mecanismo que resuelve si eso se
  logra.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "basico"
  tags: ["tipos_de_guerra"]

enunciado: "¿Qué caracteriza a una guerra de independencia?"
tipo: mc
opciones_explicitas:
  - "Un territorio contra la metrópoli que no reconoce su independencia declarada"
  - "Dos facciones del mismo territorio enfrentadas entre sí"
  - "Dos Estados ya constituidos disputando un territorio puntual"
respuesta: "Un territorio contra la metrópoli que no reconoce su independencia declarada"

explicacion: |
  Es el caso típico de las Guerras de independencia sudamericanas
  contra España.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "basico"
  tags: ["tipos_de_guerra"]

enunciado: "¿Qué caracteriza a una guerra civil?"
tipo: mc
opciones_explicitas:
  - "Un mismo territorio dividido internamente por un desacuerdo de fondo sobre cómo organizarse"
  - "Un conflicto exclusivamente contra un enemigo externo"
  - "Un conflicto entre dos Estados ya reconocidos internacionalmente"
respuesta: "Un mismo territorio dividido internamente por un desacuerdo de fondo sobre cómo organizarse"

explicacion: |
  No es contra un enemigo externo, sino entre bandos del mismo país —
  ejemplo real: unitarios y federales en Argentina.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["argentina", "tipos_de_guerra"]

enunciado: "¿Cuáles fueron los dos bandos de la guerra civil argentina del siglo XIX?"
tipo: mc
opciones_explicitas:
  - "Unitarios y federales"
  - "Realistas y patriotas"
  - "Peronistas y radicales"
respuesta: "Unitarios y federales"

explicacion: |
  El desacuerdo de fondo era un Estado centralizado desde Buenos Aires
  vs. una confederación de provincias autónomas.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["argentina"]

enunciado: "¿Cuál era el desacuerdo de fondo entre unitarios y federales?"
tipo: mc
opciones_explicitas:
  - "Un Estado centralizado desde Buenos Aires vs. una confederación de provincias autónomas"
  - "Si declarar o no la independencia de España"
  - "Si mantener o abolir la esclavitud"
respuesta: "Un Estado centralizado desde Buenos Aires vs. una confederación de provincias autónomas"

explicacion: |
  Era, en el fondo, la pregunta sin resolver de "cómo nos organizamos"
  que quedó pendiente después de lograr la independencia.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["tipos_de_guerra"]

enunciado: "¿Qué caracteriza a una guerra internacional entre Estados ya constituidos, como Malvinas?"
tipo: mc
opciones_explicitas:
  - "Es un conflicto entre dos Estados soberanos y reconocidos, por un territorio en disputa"
  - "Es un conflicto donde uno de los dos Estados no existe todavía"
  - "Es siempre una guerra civil disfrazada"
respuesta: "Es un conflicto entre dos Estados soberanos y reconocidos, por un territorio en disputa"

explicacion: |
  No se discute la existencia de ninguno de los dos Estados, sólo la
  soberanía sobre un territorio puntual — categoría distinta de la
  guerra de independencia o la guerra civil.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿En qué nodo de Tronco 8.c está el desarrollo real de la Guerra de Malvinas?"
tipo: mc
opciones_explicitas:
  - "AH13"
  - "AH5"
  - "AH1"
respuesta: "AH13"

explicacion: |
  El desarrollo completo vive en Tronco 8.c, citando el art. 92 b —
  acá sólo se referencia, sin duplicarlo.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["herramientas_analisis"]

enunciado: "¿Casi ninguna guerra tiene una sola causa?"
tipo: vf
respuesta: verdadero

explicacion: |
  Combina intereses económicos, políticos e ideológicos, igual que
  cualquier proceso analizado con la herramienta de multicausalidad.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["herramientas_analisis"]

enunciado: "¿Cómo se relacionan, en el patrón `AH5 → AH6` de la cadena argentina, la guerra de independencia y la guerra civil posterior?"
tipo: mc
opciones_explicitas:
  - "La guerra de independencia puede generar, como consecuencia, una guerra civil por no haber acuerdo claro sobre cómo organizar el nuevo Estado"
  - "No tienen ninguna relación causal entre sí"
  - "La guerra civil siempre ocurre antes que la de independencia"
respuesta: "La guerra de independencia puede generar, como consecuencia, una guerra civil por no haber acuerdo claro sobre cómo organizar el nuevo Estado"

explicacion: |
  Es exactamente el patrón que explica `teoria.md`: independencia
  resuelve "quién no nos gobierna", pero deja abierto "cómo nos
  organizamos".
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["herramientas_analisis"]

enunciado: "¿Por qué el patrón \"independencia seguida de guerra civil\" no es exclusivo de Argentina?"
tipo: mc
opciones_explicitas:
  - "Porque lograr la independencia deja sin resolver \"cómo organizarse entre sí\", pregunta que sin consenso previo suele derivar en conflicto interno"
  - "Porque todos los países copiaron el modelo argentino"
  - "Porque España provocaba directamente todas las guerras civiles de sus excolonias"
respuesta: "Porque lograr la independencia deja sin resolver \"cómo organizarse entre sí\", pregunta que sin consenso previo suele derivar en conflicto interno"

explicacion: |
  Es un patrón típico de casi cualquier proceso de independencia real,
  no sólo el argentino.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["herramientas_analisis"]

enunciado: "¿Qué herramienta del Big Six ayuda a juzgar una guerra pasada sin reducirla a una fecha para memorizar?"
tipo: mc
opciones_explicitas:
  - "Dimensión ética"
  - "Antes y después de Cristo"
  - "Década, siglo, milenio"
respuesta: "Dimensión ética"

explicacion: |
  Es el mismo criterio que ya se aplicó a `AH12`/`AH13` (Terrorismo de
  Estado y Malvinas) en Tronco 8.c.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "basico"
  tags: ["tipos_de_guerra"]

enunciado: "Toda guerra es necesariamente contra un enemigo externo al propio territorio."
tipo: vf
respuesta: falso

explicacion: |
  Una guerra civil es exactamente el caso contrario: el conflicto es
  interno, entre bandos del mismo país.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["tipos_de_guerra"]

enunciado: "¿Cuál es la diferencia clave entre una guerra de independencia y una guerra civil?"
tipo: mc
opciones_explicitas:
  - "La de independencia es contra una potencia externa; la civil es entre bandos del mismo territorio"
  - "La guerra civil siempre involucra más países que la de independencia"
  - "No hay ninguna diferencia real entre ambas"
respuesta: "La de independencia es contra una potencia externa; la civil es entre bandos del mismo territorio"

explicacion: |
  Es la distinción central entre los dos primeros tipos de guerra
  descritos en `teoria.md`.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["tipos_de_guerra"]

enunciado: "En la Guerra de Malvinas de 1982, ¿qué se disputaba entre Argentina y el Reino Unido?"
tipo: mc
opciones_explicitas:
  - "La soberanía sobre un territorio puntual, sin discutir la existencia de ninguno de los dos Estados"
  - "Si Argentina o el Reino Unido debían dejar de existir como Estados"
  - "Un desacuerdo interno dentro de un mismo país"
respuesta: "La soberanía sobre un territorio puntual, sin discutir la existencia de ninguno de los dos Estados"

explicacion: |
  Es la categoría "guerra internacional entre Estados ya
  constituidos", distinta de las guerras de independencia y las
  guerras civiles.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["argentina"]

enunciado: "Ordená cronológicamente estos 3 conflictos de la cadena argentina: Guerra de Malvinas, Guerras de independencia, Guerras civiles (unitarios y federales)."
tipo: ordenar
opciones_explicitas:
  - "Guerras de independencia"
  - "Guerras civiles (unitarios y federales)"
  - "Guerra de Malvinas"
respuesta_orden: ["Guerras de independencia", "Guerras civiles (unitarios y federales)", "Guerra de Malvinas"]

explicacion: |
  Guerras de independencia (principios del s. XIX) → Guerras civiles
  (mediados del s. XIX) → Guerra de Malvinas (1982).
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["herramientas_analisis"]

enunciado: "¿Cuál de estos es un tipo de causa que suele combinarse en el estallido de una guerra, según la multicausalidad?"
tipo: mc
opciones_explicitas:
  - "Control de territorio, recursos o rutas comerciales"
  - "El clima del día en que se firmó la declaración de guerra"
  - "La cantidad de satélites GPS disponibles"
respuesta: "Control de territorio, recursos o rutas comerciales"

explicacion: |
  Son causas económicas típicas, que se combinan con las políticas e
  ideológicas.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Por qué `guerras/` no repite el desarrollo completo de las Guerras de independencia, guerras civiles y Malvinas, y sólo los referencia?"
tipo: mc
opciones_explicitas:
  - "Para no escribir el mismo contenido histórico dos veces con distintos IDs (`H2c` y `AH5`/`AH6`/`AH12`/`AH13`)"
  - "Porque esos temas no tienen ninguna relación con las guerras"
  - "Porque el contenido de Tronco 8.c está desactualizado"
respuesta: "Para no escribir el mismo contenido histórico dos veces con distintos IDs (`H2c` y `AH5`/`AH6`/`AH12`/`AH13`)"

explicacion: |
  Mismo criterio de "duplicación resuelta" ya aplicado en otros puntos
  del MAPA (nota v2.4).
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Por qué `guerras/` depende de `../independencias/` como prerrequisito?"
tipo: mc
opciones_explicitas:
  - "Porque muchas guerras de este período nacen de procesos de independencia sin resolver del todo"
  - "Porque las guerras siempre ocurren antes que cualquier independencia"
  - "Porque no existe relación real entre ambos procesos"
respuesta: "Porque muchas guerras de este período nacen de procesos de independencia sin resolver del todo"

explicacion: |
  Ejemplo directo: las guerras civiles argentinas nacieron de la
  pregunta sin resolver que dejó la independencia.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["herramientas_analisis"]

enunciado: "Independencia, guerra civil y guerra internacional entre Estados son 3 tipos de guerra distintos. ¿Qué tienen en común como forma de analizarlos?"
tipo: mc
opciones_explicitas:
  - "Se benefician del mismo tipo de análisis histórico: multicausalidad, causa/consecuencia y dimensión ética"
  - "Ninguno de los tres se puede analizar con las mismas herramientas"
  - "Los tres ocurrieron exactamente el mismo año en Argentina"
respuesta: "Se benefician del mismo tipo de análisis histórico: multicausalidad, causa/consecuencia y dimensión ética"

explicacion: |
  Comparten estructura de análisis aunque el contenido y los actores
  sean distintos — por eso el MAPA los agrupó como 3 nodos hermanos
  (`H2a`/`H2b`/`H2c`) en vez de tratarlos como temas sin relación.
```

