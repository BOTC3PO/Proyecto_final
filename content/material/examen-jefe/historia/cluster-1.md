# Examen jefe — Crisis 2001 y Conquista del Desierto

> Logro #121. Completaste el parcial analizando la Conquista del Desierto, la crisis de 2001 y los cambios históricos. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **105 preguntas totales** en 5/5 secciones.

---

## Sección: antes-y-despues-de-cristo (20 preguntas)

```
metadata:
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
respuesta_orden:
  - "Identificar si ambos años están del mismo lado (los dos a.C. o los dos d.C.) o si cruzan el año 0"
  - "Si están del mismo lado, restar el número menor al mayor"
  - "Si cruzan el año 0, sumar los dos números (a.C. + d.C.)"
  - "Verificar que el resultado tenga sentido según la duración esperada del período"

explicacion: |
  El proceso empieza identificando el caso (mismo lado o cruce del
  año 0) para aplicar la fórmula correcta en cada situación.
```

```
metadata:
  materia: "historia"
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
  materia: "historia"
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

## Sección: cambio-y-continuidad (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "basico"
  tags: ["cambio_y_continuidad", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al comparar dos momentos históricos, siempre hay elementos que cambiaron y elementos que se mantuvieron igual (continuidad)."

pasos:
  - "Ningún proceso histórico es 100% cambio radical ni 100% continuidad absoluta."

explicacion: |
  Verdadero: es la definición central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "intermedio"
  tags: ["cambio_y_continuidad", "metodo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El trabajo del análisis histórico es identificar específicamente qué cambió y qué no, en vez de asumir que todo cambió o que nada cambió."

pasos:
  - "Es el objetivo central de este tema."

explicacion: |
  Verdadero: es el objetivo metodológico central del análisis de
  cambio y continuidad.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "intermedio"
  tags: ["ejemplo_revolucion_de_mayo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Después de la Revolución de Mayo (1810), se reemplazó la autoridad virreinal por un gobierno local (la Primera Junta): es un ejemplo de cambio."

pasos:
  - "Es uno de los cambios concretos mencionados en el ejemplo de la teoría."

explicacion: |
  Verdadero: es un cambio político concreto y verificable ocurrido
  tras la Revolución de Mayo.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "intermedio"
  tags: ["ejemplo_revolucion_de_mayo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Después de la Revolución de Mayo, la estructura social (esclavitud, roles de género, jerarquías) no cambió de inmediato: es un ejemplo de continuidad."

pasos:
  - "Es una de las continuidades concretas mencionadas en el ejemplo de la teoría."

explicacion: |
  Verdadero: muestra que un evento político dramático no cambia
  automáticamente todos los aspectos de una sociedad.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "intermedio"
  tags: ["error_exagerar_cambio"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Es un error común, sobre todo al estudiar \"revoluciones\" o \"hitos\", asumir que todo cambió radicalmente de un día para el otro."

pasos:
  - "En la práctica, la mayoría de los procesos sociales, económicos y culturales cambian gradualmente."

explicacion: |
  Verdadero: es uno de los dos errores centrales que este tema busca
  evitar.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "intermedio"
  tags: ["error_exagerar_continuidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El error opuesto es minimizar los cambios reales que sí ocurrieron, asumiendo que \"en el fondo todo sigue igual\"."

pasos:
  - "Es el otro de los dos errores centrales que este tema busca evitar."

explicacion: |
  Verdadero: es el segundo error central, opuesto al de exagerar el
  cambio.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "avanzado"
  tags: ["error_exagerar_cambio", "error_exagerar_continuidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Tanto exagerar el cambio como exagerar la continuidad distorsionan el análisis histórico; la habilidad central es encontrar el balance específico entre ambos, caso por caso."

pasos:
  - "Ninguno de los dos extremos es correcto por defecto; hace falta analizar cada caso en particular."

explicacion: |
  Verdadero: es la conclusión central sobre cómo evitar ambos
  errores.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "intermedio"
  tags: ["ritmos_de_cambio"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El cambio político (una nueva ley, un nuevo gobierno) puede ser rápido; el cambio social o cultural (formas de pensar, costumbres) suele ser mucho más lento."

pasos:
  - "Es la razón por la que distintos aspectos de una sociedad cambian a ritmos distintos."

explicacion: |
  Verdadero: es el concepto central de \"ritmos distintos de cambio\"
  descrito en la teoría.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "intermedio"
  tags: ["ritmos_de_cambio"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Comparar dos momentos históricos requiere prestar atención a que distintos aspectos de una sociedad (político, económico, cultural, social) no cambian todos al mismo ritmo."

pasos:
  - "Es la conclusión central sobre los ritmos distintos de cambio."

explicacion: |
  Verdadero: es una consideración central para un análisis riguroso
  de cambio y continuidad.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "avanzado"
  tags: ["causa_y_consecuencia", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para saber si algo \"cambió\", hace falta identificar qué causó ese cambio (o su ausencia); comparar dos momentos sin analizar las causas es una comparación incompleta."

pasos:
  - "Ver `../causa-y-consecuencia/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "intermedio"
  tags: ["cambio_y_continuidad", "practica"]

variables:
  ejemplos: ["tras una revolución, se sancionó una nueva constitución", "tras una revolución, las mismas familias mantuvieron el control de las tierras y el poder económico durante décadas"]
  tipos: ["cambio", "continuidad"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["cambio", "continuidad"]

enunciado: "\"{ejemplos[idx]}\" es un ejemplo de..."

pasos:
  - "Una nueva institución es un cambio; el mantenimiento de una estructura de poder previa es una continuidad."

explicacion: |
  Distinguir cambio de continuidad en un caso concreto es la
  aplicación central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "avanzado"
  tags: ["cambio_y_continuidad", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un proceso histórico puede describirse correctamente como 100% cambio radical o 100% continuidad absoluta, sin ningún matiz intermedio."

pasos:
  - "Siempre hay elementos que cambian y elementos que se mantienen, la realidad histórica no cae en un extremo absoluto."

explicacion: |
  Falso: la afirmación de la teoría es exactamente lo contrario,
  ningún proceso histórico es un extremo absoluto.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "avanzado"
  tags: ["ritmos_de_cambio", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al analizar un mismo evento histórico, se puede encontrar cambio en el ámbito político y continuidad en el ámbito social, ambos a la vez."

pasos:
  - "Es la aplicación práctica de que distintos aspectos de una sociedad cambian a ritmos distintos."

explicacion: |
  Verdadero: es una consecuencia directa de analizar los distintos
  ámbitos de una sociedad por separado.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "avanzado"
  tags: ["ejemplo_revolucion_de_mayo", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El hecho de que un país se independizara políticamente no garantiza que sus estructuras económicas o sociales cambiaran al mismo ritmo o en la misma medida."

pasos:
  - "Coherente con el ejemplo de la Revolución de Mayo mencionado en la teoría."

explicacion: |
  Verdadero: es una aplicación general del principio de ritmos
  distintos de cambio a procesos de independencia política.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "avanzado"
  tags: ["big_six"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cambio y continuidad es otro de los 6 conceptos del marco \"Big Six\" de pensamiento histórico, junto con causa y consecuencia."

pasos:
  - "Ver `../causa-y-consecuencia/`: ambos temas forman parte del mismo marco teórico de referencia."

explicacion: |
  Verdadero: es el mismo contexto académico ya mencionado en el tema
  anterior de la cadena.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "avanzado"
  tags: ["error_exagerar_cambio", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un relato histórico que afirma \"tras la revolución, absolutamente todo cambió de un día para el otro en todos los aspectos de la sociedad\" es un análisis riguroso y equilibrado según los criterios de este tema."

pasos:
  - "Es un ejemplo del error de exagerar el cambio, ignorando las continuidades reales que también existieron."

explicacion: |
  Falso: ese relato exagera el cambio, exactamente el error central
  que este tema busca evitar.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "avanzado"
  tags: ["error_exagerar_continuidad", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un relato histórico que afirma \"la revolución no cambió absolutamente nada, todo siguió exactamente igual\" es un análisis riguroso y equilibrado según los criterios de este tema."

pasos:
  - "Es un ejemplo del error de exagerar la continuidad, ignorando los cambios reales que sí ocurrieron."

explicacion: |
  Falso: ese relato exagera la continuidad, el otro error central que
  este tema busca evitar.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "intermedio"
  tags: ["cambio_y_continuidad", "metodo"]

enunciado: "Ordená los pasos para analizar cambio y continuidad entre dos momentos históricos."
tipo: ordenar
opciones_explicitas:
  - "Comparar los dos momentos en distintos ámbitos (político, social, económico, cultural)"
  - "Identificar específicamente qué cambió en cada ámbito"
  - "Identificar específicamente qué se mantuvo igual en cada ámbito"
  - "Analizar las causas de esos cambios (o de su ausencia) en cada caso"
respuesta_orden:
  - "Comparar los dos momentos en distintos ámbitos (político, social, económico, cultural)"
  - "Identificar específicamente qué cambió en cada ámbito"
  - "Identificar específicamente qué se mantuvo igual en cada ámbito"
  - "Analizar las causas de esos cambios (o de su ausencia) en cada caso"

explicacion: |
  El proceso va de comparar por ámbitos a identificar cambios y
  continuidades específicos, cerrando con el análisis causal de cada
  uno.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cambio y continuidad es prerrequisito directo de multicausalidad, que extiende el análisis de causa-consecuencia a que un hecho tenga varias causas a la vez."

pasos:
  - "Ver `../multicausalidad/`: es el tema siguiente y último de la cadena de pensamiento histórico cubierta en esta sesión."

explicacion: |
  Verdadero: por eso este tema es prerrequisito directo del
  siguiente en la cadena.
```

```
metadata:
  materia: "historia"
  tema: "cambio_y_continuidad"
  nivel: "avanzado"
  tags: ["cambio_y_continuidad", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al estudiar cualquier proceso histórico (una revolución, una reforma, una transición), conviene identificar tanto lo que cambió como lo que se mantuvo, evitando simplificar el relato hacia uno solo de los dos extremos."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al análisis
  equilibrado de cualquier proceso histórico.
```

## Sección: causa-y-consecuencia (20 preguntas)

```
metadata:
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
respuesta_orden:
  - "Identificar la causa inmediata (el hecho puntual que disparó el acontecimiento)"
  - "Buscar las causas profundas o estructurales que venían gestándose desde antes"
  - "Revisar si hay evidencia real de conexión entre esas causas y la consecuencia, no sólo cercanía temporal"
  - "Distinguir consecuencias a corto y largo plazo del hecho analizado"

explicacion: |
  El proceso va de la causa más visible (inmediata) a las más
  profundas, verificando evidencia real y considerando el horizonte
  temporal de las consecuencias.
```

```
metadata:
  materia: "historia"
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
  materia: "historia"
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

## Sección: conquista-del-desierto-y-campana-al-chaco (24 preguntas)

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "basico"
  tags: ["conquista_del_desierto", "julio_arentino_roca"]

variables:
  anio: 1879

respuesta: "1879"
tipo: input

enunciado: "¿En qué año se lanzó oficialmente la campaña de la Conquista del Desierto bajo el mando del general Julio Argentino Roca?"

explicacion: |
  La Conquista del Desierto fue una campaña militar iniciada en 1879 por el gobierno de Nicolás Avellaneda, comandada por el general Julio Argentino Roca, con el objetivo de ocupar los territorios pampeanos y patagónicos habitados por pueblos originarios.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "basico"
  tags: ["conquista_del_desierto", "pueblos_originarios"]

variables:
  pueblos: ["mapuches", "pehuenches", "querandíes", "ranqueles"]
  correctos: ["mapuches", "pehuenches", "querandíes"]

respuesta: |
  mapuches
  pehuenches
  querandíes
tipo: completar

enunciado: "Nombra tres de los pueblos originarios que habitaban la Pampa y la Patagonia y fueron afectados por la Conquista del Desierto."

explicacion: |
  Los mapuches, pehuenches y querandíes, entre otros, eran los habitantes principales de la región que fue objeto de la campaña militar de 1879.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["campana_al_chaco", "cronologia"]

variables:
  inicio: 1884
  fin: 1885

respuesta: "1884-1885"
tipo: input

enunciado: "La Campaña al Chaco, dirigida a asegurar las fronteras del norte, se desarrolló principalmente durante los años: {inicio} y {fin}."

explicacion: |
  Aunque hubo acciones previas y posteriores, el periodo clave de la Campaña al Chaco bajo el gobierno de Miguel Juárez Celman fue entre 1884 y 1885.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["campana_al_chaco", "gobierno"]

variables:
  presidente: "Miguel Juárez Celman"

respuesta: "Miguel Juárez Celman"
tipo: input

enunciado: "¿Qué presidente estaba en el cargo durante el desarrollo principal de la Campaña al Chaco (1884-1885)?"

explicacion: |
  La Campaña al Chaco se llevó a cabo durante el gobierno de Miguel Juárez Celman, buscando consolidar el control estatal en el norte argentino.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["consecuencias", "demografia"]

variables:
  efecto: "desplazamiento o muerte de miles de personas"

respuesta: "desplazamiento o muerte de miles de personas"
tipo: input

enunciado: "Una de las consecuencias humanas inmediatas de la Conquista del Desierto fue el {efecto}."

explicacion: |
  La campaña militar provocó el desalojo forzado, la muerte o la reducción a la servidumbre de miles de indígenas, alterando radicalmente la demografía regional.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "basico"
  tags: ["conquista_del_desierto", "fechas", "roca"]

variables:
  fecha: 1879

respuesta: 1879
tipo: input

enunciado: "¿En qué año comenzó oficialmente la campaña militar conocida como la Conquista del Desierto, liderada por el general Julio A. Roca?"

explicacion: |
  La Conquista del Desierto se inició en 1879. Fue una campaña militar organizada por el gobierno nacional para ocupar los territorios del sur y oeste argentino, habitados por pueblos originarios.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "basico"
  tags: ["roca", "liderazgo", "militar"]

variables:
  comandante: "Julio Argentino Roca"

respuesta: "Julio Argentino Roca"
tipo: completar

enunciado: "La campaña de la Conquista del Desierto fue comandada por el general {comandante}."

explicacion: |
  Julio Argentino Roca fue el general que lideró la expedición de 1879. Su éxito en esta campaña consolidó su posición política y lo llevó a la presidencia posteriormente.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["territorio", "patagonia", "pampa"]

variables:
  region: "Pampa Patagónica"

respuesta: "Pampa Patagónica"
tipo: completar

enunciado: "El objetivo geográfico principal de la Conquista del Desierto era avanzar sobre la {region}."

explicacion: |
  La campaña buscaba someter a los pueblos mapuches, pehuenches y querandíes que habitaban la Pampa y la Patagonia, integrando estas tierras al Estado nacional.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["pueblos_originarios", "mapuche", "pehuenche"]

variables:
  pueblos: "mapuches, pehuenches y querandíes"

respuesta: "mapuches, pehuenches y querandíes"
tipo: completar

enunciado: "Los principales pueblos originarios que habitaban los territorios conquistados en la campaña del sur eran los {pueblos}."

explicacion: |
  Estos grupos mantenían una organización social y económica autónoma en la región pampeana y patagónica antes de la intervención militar estatal.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "avanzado"
  tags: ["ideologia", "civilizacion", "barbarie"]

respuesta: verdadero
tipo: vf

enunciado: "La expansión territorial se justificó políticamente bajo la dicotomía de 'civilización' frente a 'barbarie', promoviendo valores europeos."

explicacion: |
  El discurso de la época presentaba a los pueblos originarios como obstáculos para el progreso y la ley, legitimando la ocupación militar como un acto de 'civilización'.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "basico"
  tags: ["chaco", "fechas", "cronologia"]

variables:
  inicio: 1884

respuesta: 1884
tipo: input

enunciado: "¿En qué año comenzó principalmente la Campaña al Chaco, paralela a la consolidación de la frontera sur?"

explicacion: |
  La Campaña al Chaco se desarrolló principalmente entre 1884 y 1885, bajo el gobierno de Miguel Juárez Celman, para asegurar la frontera norte.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["juarez_celman", "presidencia", "gobierno"]

variables:
  presidente: "Miguel Juárez Celman"

respuesta: "Miguel Juárez Celman"
tipo: completar

enunciado: "La Campaña al Chaco se llevó a cabo durante el gobierno de {presidente}."

explicacion: |
  Miguel Juárez Celman fue presidente de Argentina entre 1886 y 1890. Durante su mandato, se intensificó la expansión hacia el norte del país.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "basico"
  tags: ["violencia", "militar", "realidad"]

respuesta: falso
tipo: vf

enunciado: "La Conquista del Desierto fue un proceso completamente pacífico sin víctimas mortales."

explicacion: |
  Falso. La campaña implicó operaciones militares violentas, batallas y el desalojo forzado de poblaciones originarias.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "basico"
  tags: ["cronologia", "chaco"]

respuesta: verdadero
tipo: vf

enunciado: "La Campaña al Chaco tuvo lugar principalmente entre 1884 y 1885."

explicacion: |
  Correcto. Aunque hubo conflictos anteriores y posteriores, este período marca el inicio de la ocupación sistemática del norte bajo el gobierno de Juárez Celman.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["derecho", "propiedad", "originales"]

respuesta: falso
tipo: vf

enunciado: "Los pueblos originarios mantuvieron la propiedad legal de sus tierras ancestrales tras la conquista."

explicacion: |
  Falso. La conquista resultó en la pérdida de sus tierras, que fueron incorporadas al dominio público y luego privatizadas.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["economia", "exportacion"]

respuesta: verdadero
tipo: vf

enunciado: "La incorporación de tierras permitió impulsar la exportación de carne y trigo."

explicacion: |
  Correcto. La nueva tierra disponible fue clave para el modelo agroexportador que caracterizó a la Argentina de finales del siglo XIX.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "avanzado"
  tags: ["roca", "politica"]

respuesta: verdadero
tipo: vf

enunciado: "Julio A. Roca se convirtió en presidente de la Nación gracias en parte al éxito de esta campaña."

explicacion: |
  Correcto. El prestigio obtenido por la Conquista del Desierto fue fundamental para su ascenso político y su primera presidencia (1880-1886).
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["estado", "soberania"]

respuesta: verdadero
tipo: vf

enunciado: "El gobierno nacional consideraba a estas regiones un 'vacío administrativo' antes de la conquista."

explicacion: |
  Correcto. Desde la perspectiva del Estado liberal, la falta de instituciones estatales formales se interpretaba como ausencia de soberania efectiva.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["inmigracion", "demografia"]

respuesta: verdadero
tipo: vf

enunciado: "La tierra conquistada facilitó la llegada masiva de inmigrantes europeos."

explicacion: |
  Correcto. Las tierras liberadas fueron colonizadas por europeos, transformando la demografía y la cultura del país.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["soberania", "indigena"]

respuesta: verdadero
tipo: vf

enunciado: "La victoria militar significó el fin de la soberanía indígena en la región pampeana y patagónica."

explicacion: |
  Correcto. Los pueblos originarios perdieron su capacidad de autogobierno y fueron desplazados a reservas o marginados socialmente.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "avanzado"
  tags: ["comparacion", "objetivos"]

respuesta: falso
tipo: vf

enunciado: "Los objetivos de la Conquista del Desierto y la Campaña al Chaco eran idénticos en todos sus aspectos."

explicacion: |
  Falso. Aunque ambas buscaban expansión, el sur se centró en tierras agrícolas y el norte en fronteras geopolíticas y recursos específicos.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "avanzado"
  tags: ["herencia", "desigualdad"]

respuesta: verdadero
tipo: vf

enunciado: "La marginación social y económica de los pueblos originarios derivada de la conquista persiste hasta hoy."

explicacion: |
  Correcto. Las consecuencias estructurales de la pérdida de tierras y derechos siguen afectando a las comunidades indígenas argentinas.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["economia", "inversion"]

respuesta: verdadero
tipo: vf

enunciado: "La conquista permitió una masiva entrada de capital extranjero al país."

explicacion: |
  Correcto. La seguridad territorial y la disponibilidad de tierras incentivaron la inversión extranjera, especialmente británica.
```

```
metadata:
  materia: "historia"
  tema: "conquista_del_desierto_y_campana_al_chaco"
  nivel: "intermedio"
  tags: ["historia", "contacto"]

respuesta: falso
tipo: vf

enunciado: "Antes de la conquista, los pueblos originarios estaban completamente aislados de las provincias argentinas."

explicacion: |
  Falso. Mantenían intercambios comerciales y relaciones políticas con las provincias, aunque fuera de la estructura estatal nacional.
```

## Sección: crisis-de-2001 (21 preguntas)

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["corralito", "fechas"]

variables:
  dia: 1
  mes: 12
  anio: 2001

respuesta: "{dia}/{mes}/{anio}"
tipo: input

enunciado: "¿En qué fecha (dd/mm/aaaa) se decretó el Corralito?"

explicacion: |
  El Corralito fue decretado el 1 de diciembre de 2001 por el ministro Ricardo López Murphy, aunque su implementación efectiva ocurrió poco después bajo Domingo Cavallo.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["convertibilidad", "déficit_fiscal"]

variables:
  paridad: 1

respuesta: "uno a uno"
tipo: completar

enunciado: "Durante la década de los noventa, la convertibilidad vinculaba el peso argentino al dólar estadounidense a una paridad de {paridad} a {paridad}."

explicacion: |
  La paridad era de 1:1, lo que significaba que un dólar estadounidense equivalía exactamente a un peso argentino.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["inflación", "déficit"]

variables:
  resultado: random(0, 1)

respuesta: "déficit fiscal crónico"
tipo: completar

enunciado: "Aunque frenó la hiperinflación, la convertibilidad generó {resultado + 1} problema estructural principal mencionado: un _______________ crónico que obligó al endeudamiento."

explicacion: |
  El texto indica que la convertibilidad generó desequilibrios estructurales, específicamente un déficit fiscal crónico.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["estancamiento", "desempleo"]

variables:
  condicion: random(0, 1)

respuesta: "insostenible"
tipo: completar

enunciado: "Para el año 2001, la situación económica se había tornado _______________ debido al estancamiento y el alto desempleo."

explicacion: |
  El contexto describe que para 2001 la situación era insostenible por la acumulación de problemas estructurales.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["fmi", "ajuste"]

variables:
  entidad: "Fondo Monetario Internacional"

respuesta: "FMI"
tipo: completar

enunciado: "El gobierno intentó negociar un nuevo plan de ajuste con el _______________ (FMI), pero las negociaciones colapsaron."

explicacion: |
  Las negociaciones con el FMI fueron clave y terminaron en fracaso, acelerando la crisis de confianza.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["reservas", "déficit"]

variables:
  falta: "falta"

respuesta: "reservas"
tipo: completar

enunciado: "La _______________ de reservas para defender la moneda fue un factor clave del pánico financiero."

explicacion: |
  La falta de reservas impidió al gobierno sostener la paridad del peso frente al dólar.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["fuga de capitales", "pánico"]

variables:
  accion: "retirar"

respuesta: "retirar"
tipo: completar

enunciado: "Los ciudadanos comenzaron a _______________ sus ahorros de los bancos por miedo al colapso."

explicacion: |
  La fuga de capitales consistió en la retirada masiva de dinero de las cuentas bancarias.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["corralito", "medidas"]

variables:
  medida: "Corralito"

respuesta: "Corralito"
tipo: completar

enunciado: "El congelamiento de depósitos bancarios fue conocido popularmente como el '_______________'."

explicacion: |
  El término "Corralito" se refiere a las restricciones de retiro de dinero implementadas por el gobierno.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["liquidez", "banco"]

variables:
  objetivo: "evitar"

respuesta: "evitar"
tipo: completar

enunciado: "El objetivo declarado del Corralito era _______________ el vaciamiento total del sistema financiero."

explicacion: |
  Se justificó como una medida para proteger las reservas y evitar el colapso bancario.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["actividad económica", "restricción"]

variables:
  efecto: "paralizar"

respuesta: "paralizar"
tipo: completar

enunciado: "El efecto inmediato del Corralito fue _______________ la actividad económica cotidiana."

explicacion: |
  Las restricciones de retiro y transferencia paralizaron el flujo de caja de comercios y empresas.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["empresas", "liquidez"]

variables:
  afectado: "comercios"

respuesta: "comercios"
tipo: completar

enunciado: "Las restricciones afectaron tanto a ahorristas como a _______________ y empresas que necesitaban flujo de caja."

explicacion: |
  El Corralito no solo afectó a los ahorristas, sino también a la operatividad de los comercios.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["derechos", "legitimidad"]

variables:
  percepcion: "violación"

respuesta: "violación"
tipo: completar

enunciado: "Muchos vieron el Corralito como una _______________ de sus derechos patrimoniales."

explicacion: |
  La medida fue percibida como una invasión a la propiedad privada y los derechos de los ciudadanos.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["protesta", "social"]

variables:
  transformacion: "transformar"

respuesta: "transformar"
tipo: completar

enunciado: "La indignación creció, buscando una salida _______________ a la crisis."

explicacion: |
  El descontento económico se convirtió en malestar social con demandas políticas concretas.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["política", "gobierno"]

variables:
  nivel: "extrema"

respuesta: "extrema"
tipo: completar

enunciado: "La crisis derivó en una inestabilidad política _______________."

explicacion: |
  La incapacidad de resolver la crisis generó una crisis política severa.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["presidencia", "tiempo"]

variables:
  dias: 11

respuesta: "11"
tipo: input

enunciado: "En apenas {dias} días, entre el 19 y el 30 de diciembre, Argentina tuvo cinco presidentes o figuras de poder."

explicacion: |
  El periodo de sucesión presidencial rápida duró 11 días en diciembre de 2001.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["fechas", "diciembre"]

variables:
  inicio: 19

respuesta: "19"
tipo: input

enunciado: "La sucesión presidencial crítica comenzó el {inicio} de diciembre de 2001."

explicacion: |
  El 19 de diciembre fue el inicio de los eventos que llevaron a la renuncia de De la Rúa.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["fechas", "diciembre"]

variables:
  fin: 30

respuesta: "30"
tipo: input

enunciado: "La sucesión presidencial crítica finalizó el {fin} de diciembre de 2001."

explicacion: |
  El 30 de diciembre marca el final del periodo de cinco presidentes en tan pocos días.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["de la rúa", "presidencia"]

variables:
  presidente: "Fernando de la Rúa"

respuesta: "Fernando de la Rúa"
tipo: completar

enunciado: "El gobierno que intentó negociar con el FMI estaba presidido por _______________."

explicacion: |
  Fernando de la Rúa fue el presidente durante el estallido de la crisis en diciembre de 2001.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["vicepresidente", "renuncia"]

variables:
  vp: "Carlos"

respuesta: "Carlos"
tipo: completar

enunciado: "La renuncia del vicepresidente _______________ (Carl...) fue parte de la inestabilidad."

explicacion: |
  El texto menciona la renuncia del vicepresidente Carlos como parte de la sucesión caótica.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["confianza", "pánico"]

variables:
  causa: "incapacidad"

respuesta: "incapacidad"
tipo: completar

enunciado: "La _______________ de pagar la deuda externa erosionó la confianza de la población."

explicacion: |
  La incapacidad de cumplir con la deuda fue un detonante clave de la pérdida de confianza.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["síntoma", "corralito"]

variables:
  sintoma: "síntoma"

respuesta: "síntoma"
tipo: completar

enunciado: "El Corralito fue visto como un _______________ de la incapacidad del Estado para gestionar la economía."

explicacion: |
  La medida no solo fue económica, sino un indicador de la debilidad institucional.
```
