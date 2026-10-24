# Examen jefe — Dominio de Periodización y Causalidad

> Logro #722. Completaste el parcial dominando la periodización, el antes y después de Cristo, y causa y consecuencia. Pool agregado de los `cuestionario.md` ya validados de sus 3 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **60 preguntas totales** en 3/3 secciones.

---

## Sección: antes-y-despues-de-cristo (20 preguntas)

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "basico"
  tags: ["ano_0"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El calendario gregoriano no tiene año 0: se pasa directamente del año 1 a.C. al año 1 d.C."

pasos:
  - "Es la particularidad central que hace que calcular intervalos que cruzan ese punto sea distinto de una resta simple."

explicacion: |
  Verdadero: la ausencia de año 0 es la fuente de casi todos los
  errores al calcular estos intervalos.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "basico"
  tags: ["despues_de_cristo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Después de Cristo (d.C.), los años aumentan con el tiempo: 100 d.C. es anterior a 200 d.C."

pasos:
  - "Es el sentido habitual de conteo, igual que cualquier número positivo creciente."

explicacion: |
  Verdadero: en d.C., el número más chico es siempre más antiguo.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["antes_de_cristo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de Cristo (a.C.), los años disminuyen con el tiempo hacia el presente: el año 100 a.C. es posterior (más cercano al presente) que el año 200 a.C."

pasos:
  - "Cuanto más grande el número en a.C., más lejano en el pasado."

explicacion: |
  Verdadero: en a.C. la relación se invierte respecto de d.C.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["antes_de_cristo", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "500 a.C."
tipo: mc
opciones_explicitas: ["500 a.C.", "300 a.C."]

enunciado: "¿Cuál de estos dos años es más antiguo?"

pasos:
  - "En a.C., el número más grande es más antiguo (más lejano en el pasado)."

explicacion: |
  500 a.C. es más antiguo que 300 a.C., aunque el número sea mayor.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["formula", "cruce_ano_0"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para calcular cuántos años pasaron entre un año X a.C. y un año Y d.C., se suman los dos números (no se restan), porque no hay año 0 que se pueda cancelar entre ambos."

pasos:
  - "Es la fórmula central de este tema: Intervalo = X (a.C.) + Y (d.C.)."

explicacion: |
  Verdadero: es la regla central de cálculo cuando el intervalo
  cruza del a.C. al d.C.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["cruce_ano_0", "practica"]

variables:
  anio_ac: random(200, 600)
  anio_dc: random(100, 500)

respuesta: anio_ac + anio_dc
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos años pasaron desde el año {anio_ac} a.C. hasta el año {anio_dc} d.C.?"

pasos:
  - "Sumar los dos números, porque el intervalo cruza el año 0 inexistente."

explicacion: |
  El intervalo se calcula sumando el año a.C. y el año d.C., no
  restándolos.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["cruce_ano_0", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "500"
tipo: completar

enunciado: "¿Cuántos años pasaron desde el año 300 a.C. hasta el año 200 d.C.?"

pasos:
  - "300 + 200 = 500 años."

explicacion: |
  Es el ejemplo clásico usado en la teoría: 300 a.C. + 200 d.C. = 500
  años de intervalo.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "basico"
  tags: ["mismo_lado", "practica"]

variables:
  anio_menor: random(400, 700)
  anio_mayor: random(800, 1200)

respuesta: anio_mayor - anio_menor
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos años pasaron desde el año {anio_menor} d.C. hasta el año {anio_mayor} d.C.?"

pasos:
  - "Si ambos años están en d.C., se resta normalmente: el mayor menos el menor."

explicacion: |
  Cuando ambos años están del mismo lado (d.C.), el cálculo es una
  resta simple.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["mismo_lado", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "200"
tipo: completar

enunciado: "¿Cuántos años pasaron desde el año 500 a.C. hasta el año 300 a.C.?"

pasos:
  - "500 - 300 = 200. En a.C., el número mayor es más antiguo, así que se resta el menor al mayor igual."

explicacion: |
  Cuando ambos años están en a.C., se resta el número menor al mayor,
  igual que con d.C., pero recordando que \"más grande\" significa
  \"más antiguo\" en este caso.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "avanzado"
  tags: ["cruce_ano_0", "error_comun"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Para calcular el intervalo entre 300 a.C. y 200 d.C., conviene restar 300 menos 200, igual que se haría si ambos años estuvieran del mismo lado."

pasos:
  - "Como el intervalo cruza el año 0 inexistente, hay que sumar los dos números, no restarlos."

explicacion: |
  Falso: restar en este caso da un resultado incorrecto; la fórmula
  correcta al cruzar el año 0 es sumar ambos números.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "avanzado"
  tags: ["recta_numerica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El a.C. se puede pensar como números negativos y el d.C. como números positivos, pero sin el cero real entre medio."

pasos:
  - "Es la analogía que ayuda a entender por qué se suman los valores absolutos en vez de restarlos."

explicacion: |
  Verdadero: es la analogía descrita en la teoría para justificar la
  fórmula de suma.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "basico"
  tags: ["antes_de_cristo", "despues_de_cristo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cualquier año a.C. es siempre anterior a cualquier año d.C., sin excepción."

pasos:
  - "Todo lo que ocurrió antes de Cristo (a.C.) es, por definición, anterior a cualquier fecha después de Cristo (d.C.)."

explicacion: |
  Verdadero: es una consecuencia directa de la definición del
  sistema de datación.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "avanzado"
  tags: ["cruce_ano_0", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: "780"
tipo: completar

enunciado: "Si un imperio se fundó en el año 753 a.C. y desapareció en el año 27 d.C., ¿cuántos años duró?"

pasos:
  - "El intervalo cruza el año 0 inexistente: se suman los dos números (753 + 27)."

explicacion: |
  753 + 27 = 780 años de duración, aplicando la fórmula de suma para
  intervalos que cruzan del a.C. al d.C.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["identificacion", "practica"]

variables:
  pares: ["100 a.C. y 50 d.C.", "300 d.C. y 500 d.C."]
  cruza: [verdadero, falso]
  idx: uno_de([0, 1])

respuesta: cruza[idx]
tipo: vf

enunciado: "El intervalo entre {pares[idx]} cruza el año 0 (hay que sumar los años en vez de restar)."

pasos:
  - "Si uno de los años es a.C. y el otro d.C., el intervalo cruza el año 0."

explicacion: |
  Identificar si un intervalo cruza el año 0 es el primer paso para
  elegir la fórmula correcta (suma o resta).
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "avanzado"
  tags: ["error_comun"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un error común es tratar los años a.C. como si aumentaran con el tiempo igual que los años d.C., cuando en realidad disminuyen hacia el presente."

pasos:
  - "Confundir el sentido de conteo del a.C. es la fuente más común de errores en este tema."

explicacion: |
  Verdadero: es el error conceptual central que este tema busca
  evitar.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["cruce_ano_0", "practica"]

variables:
  anio_ac: random(50, 150)
  anio_dc: random(50, 150)

respuesta: anio_ac + anio_dc
tipo: input
tolerancia_abs: 0

enunciado: "Un evento ocurrió en el año {anio_ac} a.C. y otro en el año {anio_dc} d.C. ¿Cuántos años pasaron entre ambos eventos?"

pasos:
  - "Sumar los dos valores porque el intervalo cruza el año 0."

explicacion: |
  Aplicar la fórmula de suma para intervalos que cruzan del a.C. al
  d.C.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["mismo_lado", "practica"]

variables:
  anio_reciente: random(100, 300)
  anio_antiguo: random(400, 700)

respuesta: anio_antiguo - anio_reciente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos años pasaron desde el año {anio_antiguo} a.C. hasta el año {anio_reciente} a.C.?"

pasos:
  - "En a.C., el número mayor es el más antiguo: se resta el menor al mayor."

explicacion: |
  Cuando ambos años están en a.C., el cálculo sigue siendo una resta,
  cuidando qué número representa el año más antiguo.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "intermedio"
  tags: ["metodo"]

enunciado: "Ordená los pasos para calcular correctamente el intervalo entre dos años históricos."
tipo: ordenar
opciones_explicitas:
  - "Identificar si ambos años están del mismo lado (los dos a.C. o los dos d.C.) o si cruzan el año 0"
  - "Si están del mismo lado, restar el número menor al mayor"
  - "Si cruzan el año 0, sumar los dos números (a.C. + d.C.)"
  - "Verificar que el resultado tenga sentido según la duración esperada del período"
respuesta_orden: ["Identificar si ambos años están del mismo lado (los dos a.C. o los dos d.C.) o si cruzan el año 0", "Si están del mismo lado, restar el número menor al mayor", "Si cruzan el año 0, sumar los dos números (a.C. + d.C.)", "Verificar que el resultado tenga sentido según la duración esperada del período"]
explicacion: |
  El proceso empieza identificando el caso (mismo lado o cruce del
  año 0) para aplicar la fórmula correcta en cada situación.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Calcular estos intervalos con precisión es el prerrequisito directo de dividir la historia en períodos, que requiere poder calcular con exactitud cuánto duró cada uno."

pasos:
  - "Ver `../periodizacion-historica/`: es el tema siguiente de la cadena, incluidos períodos que cruzan del a.C. al d.C."

explicacion: |
  Verdadero: por eso este tema es prerrequisito directo del
  siguiente en la cadena.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "antes_y_despues_de_cristo"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al estudiar la transición del mundo antiguo mediterráneo hacia la era cristiana, conviene aplicar la fórmula de suma (no de resta) para calcular correctamente cuántos años abarcó ese proceso, ya que cruza del a.C. al d.C."

pasos:
  - "Es la aplicación práctica directa de este tema a un caso histórico real que cruza el año 0."

explicacion: |
  Verdadero: es la aplicación concreta de este tema en el análisis
  de procesos históricos reales que cruzan el cambio de era.
```

## Sección: periodizacion-historica (20 preguntas)

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["periodizacion", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Periodizar es dividir el tiempo histórico en bloques delimitados por hechos que se consideran lo suficientemente importantes como para marcar un antes y un después."

pasos:
  - "Es una herramienta de análisis que los historiadores construyen, no una división natural del tiempo."

explicacion: |
  Verdadero: es la definición central de periodización.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["prehistoria"]

variables:
  n: uno_de([1, 1])

respuesta: "Prehistoria"
tipo: mc
opciones_explicitas: ["Prehistoria", "Edad Antigua", "Edad Media"]

enunciado: "El período que va desde el origen de la humanidad hasta la invención de la escritura se llama..."

pasos:
  - "Es el primer período de la periodización clásica occidental."

explicacion: |
  La Prehistoria es el período anterior a la invención de la
  escritura.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["edad_antigua"]

variables:
  n: uno_de([1, 1])

respuesta: "Edad Antigua"
tipo: mc
opciones_explicitas: ["Prehistoria", "Edad Antigua", "Edad Media"]

enunciado: "El período que va desde la invención de la escritura hasta la caída del Imperio Romano de Occidente (476 d.C.) se llama..."

pasos:
  - "Es el segundo período de la periodización clásica occidental."

explicacion: |
  La Edad Antigua va desde la escritura hasta la caída de Roma.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["edad_media"]

variables:
  n: uno_de([1, 1])

respuesta: "Edad Media"
tipo: mc
opciones_explicitas: ["Edad Antigua", "Edad Media", "Edad Moderna"]

enunciado: "El período que va desde el 476 d.C. hasta 1453 o 1492 (según el criterio usado) se llama..."

pasos:
  - "Es el tercer período de la periodización clásica occidental."

explicacion: |
  La Edad Media va desde la caída de Roma hasta la caída de
  Constantinopla o el descubrimiento de América.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["edad_moderna"]

variables:
  n: uno_de([1, 1])

respuesta: "Edad Moderna"
tipo: mc
opciones_explicitas: ["Edad Media", "Edad Moderna", "Edad Contemporánea"]

enunciado: "El período que va desde fines del siglo XV hasta la Revolución Francesa (1789) se llama..."

pasos:
  - "Es el cuarto período de la periodización clásica occidental."

explicacion: |
  La Edad Moderna va desde fines del s. XV hasta 1789.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["edad_contemporanea"]

variables:
  n: uno_de([1, 1])

respuesta: "Edad Contemporánea"
tipo: mc
opciones_explicitas: ["Edad Moderna", "Edad Contemporánea", "Edad Media"]

enunciado: "El período que va desde 1789 hasta la actualidad se llama..."

pasos:
  - "Es el quinto y último período de la periodización clásica occidental."

explicacion: |
  La Edad Contemporánea va desde la Revolución Francesa hasta hoy.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["periodizacion", "orden"]

enunciado: "Ordená cronológicamente los cinco períodos de la periodización clásica occidental."
tipo: ordenar
opciones_explicitas:
  - "Prehistoria"
  - "Edad Antigua"
  - "Edad Media"
  - "Edad Moderna"
  - "Edad Contemporánea"
respuesta_orden: ["Prehistoria", "Edad Antigua", "Edad Media", "Edad Moderna", "Edad Contemporánea"]
explicacion: |
  El orden sigue la secuencia cronológica estándar de la
  periodización clásica occidental.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "avanzado"
  tags: ["limites_convencionales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Decir que \"la Edad Media terminó en 1492\" es una convención útil para organizar el estudio, no un hecho que ocurrió literalmente ese día para todas las sociedades del planeta."

pasos:
  - "Ningún cambio histórico ocurre de un día para el otro en todo el mundo a la vez."

explicacion: |
  Verdadero: los límites de los períodos son convencionales, no
  hechos absolutos y simultáneos en todas partes.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["limites_convencionales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Distintos historiadores pueden proponer límites algo distintos para un mismo período, según qué criterio prioricen."

pasos:
  - "Por ejemplo, la Edad Media puede terminar en 1453 o en 1492, según el criterio elegido."

explicacion: |
  Verdadero: es un matiz importante sobre la flexibilidad de los
  límites de período según el criterio historiográfico usado.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "avanzado"
  tags: ["periodizacion_occidental"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La periodización clásica (Prehistoria/Antigua/Media/Moderna/Contemporánea) está construida desde la historia europea, y aplicarla sin más a otras regiones puede ser engañoso."

pasos:
  - "Los hitos que la organizan (caída de Roma, Revolución Francesa) no tienen el mismo peso o sentido en otras historias regionales."

explicacion: |
  Verdadero: es un matiz importante sobre las limitaciones de esta
  periodización fuera del contexto europeo.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "avanzado"
  tags: ["periodizacion_occidental", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aplicar directamente el rótulo \"Edad Media\" a la historia de los pueblos originarios de América antes de 1492 puede ser engañoso, porque ese período fue definido a partir de hitos europeos que no aplican de la misma forma a esas sociedades."

pasos:
  - "Es el ejemplo concreto mencionado en la teoría sobre las limitaciones de esta periodización."

explicacion: |
  Verdadero: es la aplicación práctica de por qué esta periodización
  es una herramienta útil pero no neutral.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["utilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dividir la historia en períodos permite comparar etapas entre sí, como preguntar qué caracterizaba a la Edad Media que ya no estaba en la Edad Moderna."

pasos:
  - "Es una de las utilidades centrales de periodizar."

explicacion: |
  Verdadero: la comparación entre períodos es una de las razones
  principales por las que periodizar ayuda a pensar históricamente.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["utilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sin periodizar, la historia sería una lista interminable de hechos sueltos sin ningún marco organizador."

pasos:
  - "Es la razón central de por qué periodizar es una herramienta valiosa, más allá de memorizar fechas de corte."

explicacion: |
  Verdadero: es la conclusión central sobre por qué periodizar ayuda
  a pensar, no sólo a clasificar.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["periodizacion", "conceptual"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El tiempo histórico en sí es continuo; la división en períodos es una construcción de los historiadores, no una propiedad del tiempo mismo."

pasos:
  - "Es la aclaración conceptual central de por qué periodizar es una \"herramienta\" y no una \"división natural\"."

explicacion: |
  Verdadero: es el punto de partida conceptual de todo este tema.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["edad_antigua", "edad_media"]

variables:
  n: uno_de([1, 1])

respuesta: "476"
tipo: completar

enunciado: "El año que marca convencionalmente el límite entre la Edad Antigua y la Edad Media (caída del Imperio Romano de Occidente) es el..."

pasos:
  - "Es uno de los hitos clásicos de la periodización occidental."

explicacion: |
  El 476 d.C. es el año convencional de la caída de Roma que marca el
  inicio de la Edad Media.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["edad_moderna", "edad_contemporanea"]

variables:
  n: uno_de([1, 1])

respuesta: "1789"
tipo: completar

enunciado: "El año que marca convencionalmente el límite entre la Edad Moderna y la Edad Contemporánea (Revolución Francesa) es el..."

pasos:
  - "Es otro de los hitos clásicos de la periodización occidental."

explicacion: |
  1789 es el año convencional de la Revolución Francesa que marca el
  inicio de la Edad Contemporánea.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["periodizacion", "practica"]

variables:
  anios: [1200, 1700, 1900]
  periodos: ["Edad Media", "Edad Moderna", "Edad Contemporánea"]
  idx: uno_de([0, 1, 2])

respuesta: periodos[idx]
tipo: mc
opciones_explicitas: ["Edad Antigua", "Edad Media", "Edad Moderna", "Edad Contemporánea"]

enunciado: "El año {anios[idx]} corresponde a la..."

pasos:
  - "Ubicar cada año dentro del rango de fechas de cada período de la periodización clásica."

explicacion: |
  Aplicar los límites de cada período para ubicar años concretos es
  la práctica central de este tema.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["periodizacion", "metodo"]

enunciado: "Ordená los pasos para periodizar un tema histórico específico."
tipo: ordenar
opciones_explicitas:
  - "Identificar el rango temporal total del tema a estudiar"
  - "Buscar hechos suficientemente importantes que marquen posibles cortes de período"
  - "Dividir el rango en bloques delimitados por esos hechos"
  - "Verificar que la periodización elegida tenga sentido para el criterio que se quiere analizar"
respuesta_orden: ["Identificar el rango temporal total del tema a estudiar", "Buscar hechos suficientemente importantes que marquen posibles cortes de período", "Dividir el rango en bloques delimitados por esos hechos", "Verificar que la periodización elegida tenga sentido para el criterio que se quiere analizar"]
explicacion: |
  El proceso va de delimitar el rango total a construir la división
  en bloques según hitos relevantes.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Periodizar con precisión es el prerrequisito directo de analizar causa y consecuencia: antes de estudiar por qué ocurrió algo, hace falta un marco temporal claro donde ubicar esas causas y consecuencias."

pasos:
  - "Ver `../causa-y-consecuencia/`: es el tema siguiente de la cadena de pensamiento histórico."

explicacion: |
  Verdadero: por eso este tema es prerrequisito directo del
  siguiente en la cadena.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "periodizacion_historica"
  nivel: "avanzado"
  tags: ["periodizacion", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al estudiar un hecho histórico, ubicarlo primero dentro de la periodización general (qué edad, qué siglo) ayuda a comparar rápidamente con otros procesos conocidos de esa misma etapa."

pasos:
  - "Es la aplicación práctica directa de este tema como estrategia de estudio."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al estudiar
  cualquier hecho histórico nuevo.
```

## Sección: causa-y-consecuencia (20 preguntas)

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "basico"
  tags: ["causa", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una causa es una condición o hecho que contribuye a producir otro hecho (la consecuencia)."

pasos:
  - "En historia, rara vez una causa \"obliga\" mecánicamente a la consecuencia, como en física."

explicacion: |
  Verdadero: es la definición central de causa en el análisis
  histórico.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["causa", "probabilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En historia, una causa hace que la consecuencia sea más probable o posible, dentro de decisiones humanas que podrían haber sido distintas."

pasos:
  - "A diferencia de una relación mecánica como en física, hay margen de decisión humana involucrado."

explicacion: |
  Verdadero: es un matiz importante sobre cómo funciona la
  causalidad en el análisis histórico.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["causas_inmediatas"]

variables:
  n: uno_de([1, 1])

respuesta: "causa inmediata"
tipo: mc
opciones_explicitas: ["causa inmediata", "causa profunda"]

enunciado: "El asesinato del archiduque Francisco Fernando, como el hecho puntual que \"disparó\" directamente la Primera Guerra Mundial, es un ejemplo de..."

pasos:
  - "Es el hecho puntual que desencadena directamente el acontecimiento."

explicacion: |
  La causa inmediata es el hecho puntual que dispara directamente un
  acontecimiento.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["causas_profundas"]

variables:
  n: uno_de([1, 1])

respuesta: "causa profunda"
tipo: mc
opciones_explicitas: ["causa inmediata", "causa profunda"]

enunciado: "Las tensiones entre potencias europeas, las alianzas militares y el nacionalismo, que ya existían antes del asesinato de Francisco Fernando, son ejemplos de..."

pasos:
  - "Son condiciones de fondo que venían gestándose desde antes del hecho puntual."

explicacion: |
  Las causas profundas (o estructurales) son condiciones de fondo que
  explican por qué la causa inmediata tuvo el efecto que tuvo.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["causas_inmediatas", "causas_profundas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sin las causas profundas, la causa inmediata (el asesinato del archiduque) no habría tenido el mismo efecto: explica por qué ese hecho puntual desató una guerra mundial y no un conflicto menor."

pasos:
  - "Es la razón por la que ambos tipos de causa se analizan juntos, no por separado."

explicacion: |
  Verdadero: es la relación central entre causa inmediata y causa
  profunda en el análisis histórico.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["correlacion_vs_causalidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que dos hechos ocurran cerca en el tiempo no significa que uno haya causado al otro: puede ser coincidencia, o ambos pueden ser consecuencia de una tercera causa común."

pasos:
  - "Es el error más común al analizar relaciones causales en historia."

explicacion: |
  Verdadero: es el principio central para no confundir cercanía
  temporal con causalidad real.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["correlacion_vs_causalidad", "evidencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Establecer una relación de causa-consecuencia requiere evidencia de un mecanismo real que conecte ambos hechos, no sólo cercanía temporal."

pasos:
  - "Es el criterio central para validar una relación causal, más allá de que los hechos ocurran cerca en el tiempo."

explicacion: |
  Verdadero: es el requisito central para afirmar una relación
  causal de forma rigurosa.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["correlacion_vs_causalidad", "detectar_falacias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Confundir correlación con causalidad en historia es el mismo tipo de error de razonamiento que la generalización apresurada ya vista en `../../lengua/detectar-falacias/`, aplicado ahora al análisis histórico."

pasos:
  - "Ver `../../lengua/detectar-falacias/`: es la conexión directa entre este tema y esa falacia ya estudiada."

explicacion: |
  Verdadero: es la relación entre este error histórico y su
  equivalente ya conocido en Lengua.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["consecuencias_corto_plazo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una consecuencia a corto plazo es un efecto que se ve poco después del hecho causante."

pasos:
  - "Es una de las dos categorías de consecuencia según el tiempo que tardan en manifestarse."

explicacion: |
  Verdadero: es la definición de consecuencia a corto plazo.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["consecuencias_largo_plazo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una consecuencia a largo plazo se manifiesta años o décadas después, y a veces es más importante que los efectos inmediatos, aunque menos evidente en el momento."

pasos:
  - "Es la otra categoría de consecuencia según el tiempo que tardan en manifestarse."

explicacion: |
  Verdadero: es la definición de consecuencia a largo plazo.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["cadenas_causales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las cadenas causales no terminan en un solo eslabón: la consecuencia de un hecho puede convertirse en la causa de otro hecho posterior."

pasos:
  - "Analizar historia a menudo implica seguir estas cadenas varios pasos hacia adelante o hacia atrás."

explicacion: |
  Verdadero: es el concepto de cadena causal, más allá de una
  relación causa-consecuencia aislada.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["causas_inmediatas", "causas_profundas", "practica"]

variables:
  ejemplos: ["la firma de un tratado que desencadenó directamente una guerra", "décadas de crisis económica y descontento social que venían acumulándose antes de una revolución"]
  tipos: ["causa inmediata", "causa profunda"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["causa inmediata", "causa profunda"]

enunciado: "\"{ejemplos[idx]}\" es un ejemplo de..."

pasos:
  - "El hecho puntual que dispara directamente es inmediata; las condiciones de fondo acumuladas son profundas."

explicacion: |
  Distinguir causa inmediata de causa profunda en un ejemplo concreto
  es la aplicación central de este tema.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["causas_profundas", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un mismo hecho histórico puede tener varias causas profundas al mismo tiempo (económicas, sociales, políticas), no sólo una."

pasos:
  - "Es un anticipo del concepto de multicausalidad, tema más adelante en la cadena."

explicacion: |
  Verdadero: es coherente con la idea de que rara vez hay una única
  causa detrás de un hecho histórico importante.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["consecuencias_corto_plazo", "consecuencias_largo_plazo", "practica"]

variables:
  consecuencias: ["la caída inmediata de un gobierno tras un golpe de Estado", "un cambio profundo en las instituciones políticas de un país, visible recién décadas después"]
  tipos: ["consecuencia a corto plazo", "consecuencia a largo plazo"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["consecuencia a corto plazo", "consecuencia a largo plazo"]

enunciado: "\"{consecuencias[idx]}\" es un ejemplo de..."

pasos:
  - "El efecto inmediato es corto plazo; el efecto que tarda décadas en verse es largo plazo."

explicacion: |
  Distinguir consecuencias según su horizonte temporal es una
  aplicación práctica central de este tema.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["correlacion_vs_causalidad", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Si dos hechos ocurrieron el mismo año en distintas partes del mundo sin ninguna relación demostrable entre ellos, se puede afirmar con seguridad que uno causó al otro."

pasos:
  - "Sin evidencia de un mecanismo real que los conecte, la simultaneidad no es suficiente para afirmar causalidad."

explicacion: |
  Falso: la coincidencia temporal sola no es evidencia suficiente de
  causalidad, hace falta un mecanismo demostrable.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Analizar causas y consecuencias requiere un marco temporal claro (periodización), para poder ubicar en qué momento ocurrió cada hecho relacionado."

pasos:
  - "Ver `../periodizacion-historica/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito de la cadena.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["big_six"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Causa y consecuencia es uno de los 6 conceptos del marco \"Big Six\" (Seixas & Morton) de pensamiento histórico, una referencia internacional en didáctica de la Historia."

pasos:
  - "Es el contexto académico de este tema, mencionado en la teoría."

explicacion: |
  Verdadero: es el marco teórico de referencia que organiza este
  tema y varios de los siguientes en la cadena.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["causa_y_consecuencia", "metodo"]

enunciado: "Ordená los pasos para analizar las causas de un hecho histórico."
tipo: ordenar
opciones_explicitas:
  - "Identificar la causa inmediata (el hecho puntual que disparó el acontecimiento)"
  - "Buscar las causas profundas o estructurales que venían gestándose desde antes"
  - "Revisar si hay evidencia real de conexión entre esas causas y la consecuencia, no sólo cercanía temporal"
  - "Distinguir consecuencias a corto y largo plazo del hecho analizado"
respuesta_orden: ["Identificar la causa inmediata (el hecho puntual que disparó el acontecimiento)", "Buscar las causas profundas o estructurales que venían gestándose desde antes", "Revisar si hay evidencia real de conexión entre esas causas y la consecuencia, no sólo cercanía temporal", "Distinguir consecuencias a corto y largo plazo del hecho analizado"]
explicacion: |
  El proceso va de la causa más visible (inmediata) a las más
  profundas, verificando evidencia real y considerando el horizonte
  temporal de las consecuencias.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Comparar qué cambió y qué se mantuvo en el tiempo (cambio y continuidad) presupone ya poder identificar qué causó cada cambio."

pasos:
  - "Ver `../cambio-y-continuidad/`: es el tema siguiente de la cadena de pensamiento histórico."

explicacion: |
  Verdadero: por eso este tema es prerrequisito directo del
  siguiente en la cadena.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["causa_y_consecuencia", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al analizar cualquier hecho histórico o actual, conviene distinguir la causa inmediata de las causas profundas, y evitar afirmar una relación causal sin evidencia de un mecanismo real, sólo por cercanía temporal."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al análisis de
  cualquier hecho histórico, pasado o presente.
```

