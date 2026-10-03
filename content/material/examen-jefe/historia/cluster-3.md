# Examen jefe — [PENDIENTE #723]

> Logro #723. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **100 preguntas totales** en 5/5 secciones.

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
respuesta_orden: ["Comparar los dos momentos en distintos ámbitos (político, social, económico, cultural)", "Identificar específicamente qué cambió en cada ámbito", "Identificar específicamente qué se mantuvo igual en cada ámbito", "Analizar las causas de esos cambios (o de su ausencia) en cada caso"]
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

## Sección: evidencia (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "basico"
  tags: ["evidencia", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Toda afirmación histórica debe apoyarse en evidencia (fuentes que la respalden); sin evidencia, es sólo una opinión o especulación."

pasos:
  - "No importa qué tan razonable suene una afirmación, sin evidencia no es un aporte histórico riguroso."

explicacion: |
  Verdadero: es el punto de partida central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["alcance"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este tema no repite qué es fuente primaria vs. secundaria, ya visto en interpretar una fuente histórica; profundiza específicamente en criterios de confiabilidad."

pasos:
  - "Ver `../interpretar-una-fuente-historica/`: es la aclaración de alcance central de este tema."

explicacion: |
  Verdadero: es la delimitación de alcance explícita entre estos dos
  temas relacionados.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["criterios_de_confiabilidad", "cercania_a_hechos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En general, una fuente primaria contemporánea a los hechos es más confiable para reconstruir detalles concretos que una fuente muy posterior basada en memoria o tradición oral distante."

pasos:
  - "Es uno de los criterios de confiabilidad mencionados en la teoría, aunque no es una regla absoluta."

explicacion: |
  Verdadero: es el criterio de cercanía a los hechos, con el matiz de
  que \"en general\" no es una regla sin excepciones.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["criterios_de_confiabilidad", "independencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si varias fuentes independientes entre sí (que no se copiaron unas a otras) coinciden en un dato, ese dato es más confiable que si viene de una sola fuente aislada."

pasos:
  - "Es otro de los criterios de confiabilidad mencionados en la teoría."

explicacion: |
  Verdadero: la coincidencia entre fuentes independientes es un
  criterio central de confiabilidad.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["criterios_de_confiabilidad", "consistencia_interna"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una fuente que se contradice a sí misma es menos confiable que una internamente coherente."

pasos:
  - "Es otro de los criterios de confiabilidad mencionados en la teoría."

explicacion: |
  Verdadero: la consistencia interna es un criterio básico para
  evaluar la confiabilidad de una fuente.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["criterios_de_confiabilidad", "conflicto_de_interes"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una fuente producida por alguien con un interés directo en cómo se cuentan los hechos (un gobierno hablando de su propio desempeño) necesita contrastarse con más cuidado que una fuente sin ese interés directo."

pasos:
  - "Es otro de los criterios de confiabilidad mencionados en la teoría."

explicacion: |
  Verdadero: el conflicto de interés es un factor central a
  considerar al evaluar la confiabilidad de una fuente.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["criterios_de_confiabilidad", "corroboracion_material"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La evidencia material (restos arqueológicos, registros no narrativos como censos o recibos), cuando existe, puede confirmar o contradecir lo que dicen las fuentes narrativas."

pasos:
  - "Es otro de los criterios de confiabilidad mencionados en la teoría."

explicacion: |
  Verdadero: la corroboración con evidencia material es un criterio
  adicional de confiabilidad, distinto de las fuentes narrativas.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["confiabilidad_gradual"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La confiabilidad de una fuente no es binaria (confiable/no confiable), sino una cuestión de grado que varía según para qué se usa la fuente."

pasos:
  - "Una fuente muy sesgada puede seguir siendo confiable para reconstruir hechos puntuales verificables, aunque no para reconstruir motivaciones."

explicacion: |
  Verdadero: es un matiz central sobre la naturaleza gradual de la
  confiabilidad.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["confiabilidad_gradual", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una carta muy sesgada políticamente puede seguir siendo confiable para confirmar una fecha o un nombre concreto, aunque no lo sea para reconstruir las motivaciones políticas de quien la escribió."

pasos:
  - "Es la aplicación práctica de que la confiabilidad varía según para qué se usa la fuente."

explicacion: |
  Verdadero: es un ejemplo concreto de por qué la confiabilidad no es
  un juicio único sobre toda la fuente en bloque.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["triangulacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La triangulación consiste en cruzar información de varias fuentes de tipo distinto (documentos, testimonios, evidencia material) para ver si coinciden."

pasos:
  - "Es la estrategia central para evaluar evidencia descrita en la teoría."

explicacion: |
  Verdadero: es la definición central de triangulación en este tema.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["triangulacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuantas más fuentes independientes coincidan en un dato, más confiable es esa reconstrucción del pasado."

pasos:
  - "Es la conclusión central de por qué la triangulación es la estrategia más sólida."

explicacion: |
  Verdadero: es el principio central de la triangulación como
  estrategia de evaluación de evidencia.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["criterios_de_confiabilidad", "practica"]

variables:
  situaciones: ["tres cronistas de distintos países, sin contacto entre sí, describen la misma batalla con detalles coincidentes", "una carta que primero dice que el rey estaba en la capital y más adelante dice que estaba de viaje ese mismo día"]
  criterios: ["independencia de la fuente", "consistencia interna (ausente)"]
  idx: uno_de([0, 1])

respuesta: criterios[idx]
tipo: mc
opciones_explicitas: ["independencia de la fuente", "consistencia interna (ausente)", "conflicto de interés", "corroboración material"]

enunciado: "\"{situaciones[idx]}\" es un ejemplo relacionado con el criterio de..."

pasos:
  - "Fuentes distintas que coinciden sin contacto entre sí: independencia. Una fuente que se contradice: falta de consistencia interna."

explicacion: |
  Reconocer qué criterio de confiabilidad aplica a un caso concreto
  es la práctica central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Evaluar la confiabilidad de una fuente reusa el mismo tipo de escrutinio que exige establecer una relación causal con evidencia real, no sólo cercanía temporal."

pasos:
  - "Ver `../causa-y-consecuencia/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["big_six"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Evidencia es uno de los 6 conceptos del marco \"Big Six\" de pensamiento histórico, junto a causa/consecuencia y significancia histórica."

pasos:
  - "Ver `../causa-y-consecuencia/` y `../significancia-historica/`: son otros conceptos de ese mismo marco."

explicacion: |
  Verdadero: es el mismo marco teórico ya mencionado en varios temas
  de esta cadena.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["confiabilidad_gradual"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Incluso una fuente muy sesgada o parcial suele aportar algún tipo de información confiable, aunque haya que contrastarla con cuidado."

pasos:
  - "Es coherente con la idea de que la confiabilidad es una cuestión de grado, no un juicio absoluto."

explicacion: |
  Verdadero: es la aplicación práctica de que ninguna fuente es
  completamente confiable ni completamente inútil.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["cercania_a_hechos", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Una fuente contemporánea a los hechos es SIEMPRE más confiable que una fuente posterior, sin ninguna excepción."

pasos:
  - "La teoría marca explícitamente \"en general, no siempre\": una fuente contemporánea puede estar igualmente sesgada o incluso más comprometida con los hechos que una posterior con perspectiva."

explicacion: |
  Falso: es una tendencia general, no una regla absoluta sin
  excepciones.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["corroboracion_material", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si una crónica narrativa afirma que una ciudad tenía cierta cantidad de habitantes, y los restos arqueológicos disponibles contradicen esa cifra, la evidencia material puede llevar a reconsiderar la confiabilidad de la crónica en ese punto."

pasos:
  - "Es la aplicación práctica de por qué la corroboración material es un criterio útil de confiabilidad."

explicacion: |
  Verdadero: es un ejemplo concreto de cómo la evidencia material
  puede confirmar o contradecir fuentes narrativas.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "intermedio"
  tags: ["evidencia", "metodo"]

enunciado: "Ordená los pasos para evaluar la confiabilidad de una fuente histórica, después de ya clasificarla como primaria o secundaria."
tipo: ordenar
opciones_explicitas:
  - "Revisar si la fuente es internamente consistente, sin contradecirse"
  - "Revisar si hay un conflicto de interés evidente en quien la produjo"
  - "Buscar otras fuentes independientes que confirmen o contradigan el mismo dato"
  - "Contrastar, si existe, con evidencia material disponible"
respuesta_orden: ["Revisar si la fuente es internamente consistente, sin contradecirse", "Revisar si hay un conflicto de interés evidente en quien la produjo", "Buscar otras fuentes independientes que confirmen o contradigan el mismo dato", "Contrastar, si existe, con evidencia material disponible"]
explicacion: |
  El proceso aplica sucesivamente los criterios de confiabilidad
  descritos en la teoría, terminando con la triangulación completa.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["evidencia", "significancia_historica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Evidencia (qué tan confiable es una fuente) y significancia histórica (qué del pasado vale la pena estudiar) son dos conceptos hermanos del marco Big Six, complementarios pero distintos entre sí."

pasos:
  - "Ver `../significancia-historica/`: ambos cuelgan de puntos distintos de la misma cadena de pensamiento histórico."

explicacion: |
  Verdadero: son dos preguntas distintas (qué estudiar vs. cómo saber
  si es confiable lo que se encuentra) que se complementan en la
  investigación histórica.
```

```
metadata:
  materia: "historia"
  tema: "evidencia"
  nivel: "avanzado"
  tags: ["evidencia", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al leer una fuente histórica sobre un tema controvertido, conviene aplicar la triangulación: buscar otras fuentes independientes que confirmen o contradigan la información, en vez de aceptar una sola fuente como suficiente."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al analizar
  cualquier fuente histórica real, especialmente sobre temas
  controvertidos.
```

## Sección: dimension-etica (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "basico"
  tags: ["dimension_etica", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La dimensión ética pregunta qué le debemos, hoy, a la memoria de lo ocurrido, no sólo qué pasó en el pasado."

pasos:
  - "Es una pregunta sobre la responsabilidad del presente, no sobre el pasado en sí."

explicacion: |
  Verdadero: es la definición central de dimensión ética en historia.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["dimension_etica", "big_six", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de causa/consecuencia, cambio/continuidad y multicausalidad, que responden preguntas de hecho (qué pasó, por qué), la dimensión ética responde una pregunta distinta: qué debemos hoy frente a eso."

pasos:
  - "Ver `../causa-y-consecuencia/`, `../cambio-y-continuidad/`, `../multicausalidad/`: son los conceptos de hecho ya estudiados."

explicacion: |
  Verdadero: es la distinción central entre este tema y los
  conceptos anteriores de la cadena.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["proposito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sin esta habilidad enseñada explícitamente, un tema histórico grave puede quedar reducido a una fecha para memorizar, en vez de ser una herramienta de juicio que ayuda a evitar repetir el error."

pasos:
  - "Es la razón central por la que este concepto se incluyó explícitamente en el mapa."

explicacion: |
  Verdadero: es el propósito central de este tema, mencionado en la
  teoría.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["preguntas_centrales", "quien_cuenta"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las víctimas, los perpetradores, el Estado y los historiadores académicos pueden tener versiones legítimas pero parciales de un mismo hecho, y ninguna reemplaza del todo a las demás."

pasos:
  - "Es una de las preguntas centrales de la dimensión ética mencionadas en la teoría."

explicacion: |
  Verdadero: es una de las preguntas centrales de este tema.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["preguntas_centrales", "victimas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Distintas sociedades han respondido de formas distintas qué le deben a las víctimas de un hecho histórico grave: reconocimiento, verdad, justicia, reparación."

pasos:
  - "Juicios penales, comisiones de la verdad, monumentos y educación obligatoria son ejemplos de respuestas concretas mencionadas en la teoría."

explicacion: |
  Verdadero: es otra de las preguntas centrales de este tema.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["preguntas_centrales", "practica"]

variables:
  herramientas: ["juicios penales", "comisiones de la verdad", "monumentos"]
  idx: uno_de([0, 1, 2])

respuesta: verdadero
tipo: vf

enunciado: "\"{herramientas[idx]}\" es un ejemplo mencionado en la teoría de cómo una sociedad puede responder a la pregunta de qué le debe a las víctimas de un hecho histórico grave."

pasos:
  - "Son ejemplos concretos de las distintas formas en que las sociedades intentan responder esa pregunta."

explicacion: |
  Verdadero: son ejemplos de mecanismos reales que distintas
  sociedades han usado para responder esta pregunta ética.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["preguntas_centrales", "prevencion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Entender las condiciones que hicieron posible un hecho grave es parte de la responsabilidad de estudiarlo, no sólo narrar los hechos en sí."

pasos:
  - "Es otra de las preguntas centrales de la dimensión ética mencionadas en la teoría."

explicacion: |
  Verdadero: es otra de las preguntas centrales de este tema.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["preguntas_centrales", "memoria_selectiva"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Qué monumentos se erigen, qué fechas se conmemoran y qué se enseña en la escuela son decisiones que reflejan valores del presente, no sólo hechos del pasado."

pasos:
  - "Es otra de las preguntas centrales de la dimensión ética mencionadas en la teoría, sobre la memoria selectiva."

explicacion: |
  Verdadero: es otra de las preguntas centrales de este tema.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["memoria_selectiva"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La memoria histórica es selectiva: no todo lo ocurrido se conmemora o enseña de la misma manera, y esas decisiones son parte de lo que estudia la dimensión ética."

pasos:
  - "Es la conclusión central sobre el carácter selectivo de la memoria colectiva."

explicacion: |
  Verdadero: es un concepto central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["juicio_historico", "juicio_etico", "diferenciacion"]

variables:
  afirmaciones: ["el hecho X ocurrió por razones económicas y políticas combinadas", "el hecho X fue incorrecto y genera una responsabilidad hoy"]
  tipos: ["juicio histórico", "juicio ético"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["juicio histórico", "juicio ético"]

enunciado: "\"{afirmaciones[idx]}\" es un ejemplo de..."

pasos:
  - "Analizar por qué ocurrió algo es un juicio histórico; evaluar si fue correcto/incorrecto y qué responsabilidad genera es un juicio ético."

explicacion: |
  Distinguir juicio histórico de juicio ético es la aplicación
  central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["juicio_historico", "juicio_etico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El juicio histórico (por qué ocurrió algo) y el juicio ético (si fue correcto y qué responsabilidad genera hoy) son ambos necesarios para entender un hecho grave del pasado, pero son preguntas distintas."

pasos:
  - "Ver `../../filosofia/etica-como-rama-propia/`: es la misma distinción entre descripción y evaluación, aplicada ahora al pasado histórico."

explicacion: |
  Verdadero: es la distinción central de este tema entre analizar y
  evaluar un hecho histórico.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["consenso_variable"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Algunos juicios éticos sobre el pasado tienen amplio consenso; otros (como la forma exacta de reparar un daño histórico) son objeto de debate legítimo."

pasos:
  - "Reconocer esa diferencia es parte de manejar esta dimensión con rigor, no con simplificación."

explicacion: |
  Verdadero: es un matiz importante sobre la variedad de consenso
  posible en juicios éticos históricos.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["consenso_variable", "anacronismo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Hasta qué punto juzgar a personas del pasado con estándares éticos actuales es uno de los temas de debate legítimo mencionados en la teoría, sin una respuesta única y cerrada."

pasos:
  - "Es un ejemplo concreto de la variedad de consenso posible dentro de la dimensión ética."

explicacion: |
  Verdadero: es un ejemplo específico mencionado del tipo de debate
  legítimo dentro de esta dimensión.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Juzgar qué le debemos a la memoria de lo ocurrido presupone ya poder distinguir qué de ese pasado cambió y qué sigue vigente hoy (deudas no saldadas, patrones que persisten)."

pasos:
  - "Ver `../cambio-y-continuidad/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["big_six", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dimensión ética es el sexto y último concepto del marco Big Six de pensamiento histórico, cerrando el conjunto completo de esta cadena."

pasos:
  - "Ver `../causa-y-consecuencia/`, `../cambio-y-continuidad/`, `../significancia-historica/`, `../evidencia/`: son los otros 5 conceptos del marco ya cubiertos."

explicacion: |
  Verdadero: es el sexto concepto del marco Big Six, completando el
  conjunto de herramientas de pensamiento histórico.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["memoria_selectiva", "presente"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que un país decida hoy erigir (o retirar) un monumento a una figura histórica es una decisión que dice tanto sobre los valores actuales de esa sociedad como sobre el hecho histórico en sí."

pasos:
  - "Es la aplicación práctica de que la memoria histórica refleja valores del presente."

explicacion: |
  Verdadero: es un ejemplo concreto de cómo las decisiones de memoria
  colectiva combinan pasado y presente.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["dimension_etica", "rigor"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La dimensión ética permite reemplazar el análisis histórico riguroso (causas, evidencia) por un juicio moral directo sobre los hechos, sin necesitar evidencia ni análisis causal."

pasos:
  - "Ambos tipos de juicio (histórico y ético) son necesarios; uno no sustituye al otro."

explicacion: |
  Falso: el juicio ético se construye SOBRE el análisis histórico
  riguroso, no lo reemplaza.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "intermedio"
  tags: ["dimension_etica", "metodo"]

enunciado: "Ordená los pasos para abordar la dimensión ética de un hecho histórico grave, después de ya analizarlo históricamente (causas, evidencia)."
tipo: ordenar
opciones_explicitas:
  - "Identificar quiénes tienen versiones legítimas pero parciales del hecho (víctimas, perpetradores, historiadores)"
  - "Preguntarse qué le debe la sociedad actual a las víctimas del hecho"
  - "Analizar las condiciones que hicieron posible el hecho, para pensar cómo evitar repetirlo"
  - "Revisar qué se recuerda y qué se olvida hoy sobre ese hecho, y por qué"
respuesta_orden: ["Identificar quiénes tienen versiones legítimas pero parciales del hecho (víctimas, perpetradores, historiadores)", "Preguntarse qué le debe la sociedad actual a las víctimas del hecho", "Analizar las condiciones que hicieron posible el hecho, para pensar cómo evitar repetirlo", "Revisar qué se recuerda y qué se olvida hoy sobre ese hecho, y por qué"]
explicacion: |
  El proceso recorre las cuatro preguntas centrales de la dimensión
  ética descritas en la teoría, en un orden lógico de análisis.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["dimension_etica", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La dimensión ética es lo que conecta el estudio del pasado con la responsabilidad del presente, la razón última por la que estudiar historia importa más allá de acumular información."

pasos:
  - "Es la síntesis central de por qué este tema cierra el marco Big Six de esta manera."

explicacion: |
  Verdadero: es la conclusión central sobre el propósito de este
  tema dentro de toda la cadena de pensamiento histórico.
```

```
metadata:
  materia: "historia"
  tema: "dimension_etica"
  nivel: "avanzado"
  tags: ["dimension_etica", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al estudiar un hecho histórico grave (una dictadura, un genocidio, una injusticia masiva), conviene complementar el análisis de causas y evidencia con las preguntas de la dimensión ética: qué le debemos a las víctimas y cómo se evita repetir el error."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al estudio
  responsable de hechos históricos graves.
```

## Sección: multicausalidad (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "basico"
  tags: ["multicausalidad", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La multicausalidad reconoce que un hecho histórico importante casi nunca tiene una única causa profunda, sino que suele ser el resultado de la combinación de varias causas de distinto tipo."

pasos:
  - "Ver `../causa-y-consecuencia/`: es una extensión de ese concepto ya estudiado."

explicacion: |
  Verdadero: es la definición central de multicausalidad.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "intermedio"
  tags: ["dimensiones_de_causas", "economicas"]

variables:
  n: uno_de([1, 1])

respuesta: "económicas"
tipo: mc
opciones_explicitas: ["económicas", "políticas", "sociales"]

enunciado: "Una crisis fiscal del Estado o malas cosechas son ejemplos de causas de dimensión..."

pasos:
  - "Se relacionan con la producción, el comercio o la distribución de recursos."

explicacion: |
  Las causas económicas involucran crisis, desigualdad o cambios en
  la producción/comercio.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "intermedio"
  tags: ["dimensiones_de_causas", "politicas"]

variables:
  n: uno_de([1, 1])

respuesta: "políticas"
tipo: mc
opciones_explicitas: ["económicas", "políticas", "culturales/ideológicas"]

enunciado: "Una crisis de legitimidad de un gobierno o un conflicto de poder son ejemplos de causas de dimensión..."

pasos:
  - "Se relacionan con el ejercicio y la legitimidad del poder."

explicacion: |
  Las causas políticas involucran crisis de legitimidad, conflictos
  de poder o decisiones de gobierno.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "intermedio"
  tags: ["dimensiones_de_causas", "sociales"]

variables:
  n: uno_de([1, 1])

respuesta: "sociales"
tipo: mc
opciones_explicitas: ["sociales", "ambientales/geográficas", "económicas"]

enunciado: "Tensiones entre grupos sociales o movimientos populares son ejemplos de causas de dimensión..."

pasos:
  - "Se relacionan con las relaciones entre distintos grupos de una sociedad."

explicacion: |
  Las causas sociales involucran tensiones entre grupos, movimientos
  populares o cambios demográficos.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "intermedio"
  tags: ["dimensiones_de_causas", "culturales"]

variables:
  n: uno_de([1, 1])

respuesta: "culturales/ideológicas"
tipo: mc
opciones_explicitas: ["culturales/ideológicas", "económicas", "políticas"]

enunciado: "Nuevas ideas como el liberalismo o el nacionalismo, que cambian cómo la gente entiende su situación, son ejemplos de causas de dimensión..."

pasos:
  - "Se relacionan con cambios en las ideas y creencias de una sociedad."

explicacion: |
  Las causas culturales/ideológicas involucran ideas que transforman
  cómo la gente interpreta su realidad.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "intermedio"
  tags: ["dimensiones_de_causas", "ambientales"]

variables:
  n: uno_de([1, 1])

respuesta: "ambientales/geográficas"
tipo: mc
opciones_explicitas: ["ambientales/geográficas", "sociales", "políticas"]

enunciado: "Una sequía o una epidemia que condiciona decisiones humanas son ejemplos de causas de dimensión..."

pasos:
  - "Se relacionan con el ambiente físico y los recursos naturales disponibles."

explicacion: |
  Las causas ambientales/geográficas involucran fenómenos naturales
  que condicionan decisiones humanas.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "intermedio"
  tags: ["multicausalidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un hecho histórico importante (una revolución, una guerra, el colapso de un imperio) casi siempre combina causas de varias dimensiones a la vez, no de una sola."

pasos:
  - "Es la conclusión central sobre por qué la multicausalidad es relevante."

explicacion: |
  Verdadero: es la afirmación central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "intermedio"
  tags: ["error_causa_unica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Explicar un hecho histórico complejo con una sola causa es una simplificación que suele estar incompleta, aunque esa causa en sí no sea falsa."

pasos:
  - "No es que la causa mencionada sea falsa, sino que no alcanza sola para explicar todo lo ocurrido."

explicacion: |
  Verdadero: es el error central que este tema busca evitar.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "avanzado"
  tags: ["error_causa_unica", "detectar_falacias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El error de la causa única se relaciona con la generalización apresurada ya vista en `../../lengua/detectar-falacias/`: tomar una causa real y tratarla como si fuera la única, ignorando las demás."

pasos:
  - "Ver `../../lengua/detectar-falacias/`: es la conexión directa entre este error histórico y esa falacia ya estudiada."

explicacion: |
  Verdadero: es la conexión entre este tema y el vocabulario de
  falacias ya conocido de Lengua.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "avanzado"
  tags: ["peso_de_causas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Reconocer multicausalidad no significa que todas las causas combinadas pesen lo mismo; el análisis incluye evaluar cuál (o cuáles) fue más determinante."

pasos:
  - "Sin caer en la simplificación de reducirlo todo a una sola causa."

explicacion: |
  Verdadero: es un matiz importante, la multicausalidad no significa
  \"todas las causas son igual de importantes\", sino que hay varias
  actuando a la vez con distinto peso posible.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "avanzado"
  tags: ["ejemplo_revolucion_francesa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Revolución Francesa de 1789 combina causas económicas (crisis fiscal, malas cosechas), políticas (crisis de legitimidad de la monarquía), sociales (tensión entre estamentos) e ideológicas (ideas ilustradas)."

pasos:
  - "Es el ejemplo desarrollado en la teoría para ilustrar multicausalidad en un caso histórico real."

explicacion: |
  Verdadero: es el ejemplo central de multicausalidad usado en este
  tema.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "avanzado"
  tags: ["ejemplo_revolucion_francesa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ninguna de las causas mencionadas de la Revolución Francesa (económica, política, social, ideológica) explica sola el proceso completo."

pasos:
  - "Es la conclusión del ejemplo desarrollado en la teoría."

explicacion: |
  Verdadero: es la aplicación concreta de por qué la multicausalidad
  importa en este caso histórico específico.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "intermedio"
  tags: ["dimensiones_de_causas", "practica"]

variables:
  causas: ["el Tercer Estado no tenía representación política real en el sistema de estamentos", "una epidemia redujo drásticamente la mano de obra disponible en el campo"]
  dimensiones: ["social/política", "ambiental/geográfica"]
  idx: uno_de([0, 1])

respuesta: dimensiones[idx]
tipo: mc
opciones_explicitas: ["social/política", "ambiental/geográfica", "económica", "cultural/ideológica"]

enunciado: "La causa \"{causas[idx]}\" corresponde a la dimensión..."

pasos:
  - "Identificar a qué dimensión (económica, política, social, cultural, ambiental) corresponde cada causa concreta."

explicacion: |
  Clasificar causas por dimensión es la práctica central de este
  tema.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "avanzado"
  tags: ["causa_y_consecuencia", "multicausalidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La multicausalidad no invalida el análisis de causa-consecuencia ya estudiado, sino que lo extiende: sigue habiendo causas inmediatas y profundas, sólo que ahora se reconoce que suele haber varias a la vez."

pasos:
  - "Ver `../causa-y-consecuencia/`: es la relación de extensión entre ambos temas."

explicacion: |
  Verdadero: es la relación de continuidad conceptual entre estos dos
  temas de la cadena.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Reconocer varias causas combinadas presupone ya dominar el análisis de causa-consecuencia simple y el de cambio/continuidad, para poder combinar causas sin perder de vista qué cambió y qué no."

pasos:
  - "Ver `../cambio-y-continuidad/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "avanzado"
  tags: ["big_six"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según el mapa, multicausalidad es una extensión del concepto de causa y consecuencia del marco Big Six, no un séptimo concepto independiente de ese marco."

pasos:
  - "Ver `../causa-y-consecuencia/`: el marco Big Six original tiene 6 conceptos, y multicausalidad profundiza uno de ellos."

explicacion: |
  Verdadero: es la relación conceptual explícita mencionada en la
  teoría entre estos dos temas.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "avanzado"
  tags: ["error_causa_unica", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Afirmar que \"la Revolución Francesa ocurrió únicamente por la crisis económica, sin ningún otro factor relevante\" es un análisis histórico completo y riguroso."

pasos:
  - "Es un ejemplo del error de la causa única, ignorando las causas políticas, sociales e ideológicas también relevantes."

explicacion: |
  Falso: es exactamente el error que este tema busca evitar, reducir
  un proceso complejo a una sola causa.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "intermedio"
  tags: ["multicausalidad", "metodo"]

enunciado: "Ordená los pasos para analizar las múltiples causas de un hecho histórico complejo."
tipo: ordenar
opciones_explicitas:
  - "Identificar todas las causas posibles del hecho, sin limitarse a una sola"
  - "Clasificar cada causa según su dimensión (económica, política, social, cultural, ambiental)"
  - "Evaluar el peso relativo de cada causa, sin asumir que todas pesan igual"
  - "Concluir cómo se combinaron esas causas para producir el hecho analizado"
respuesta_orden: ["Identificar todas las causas posibles del hecho, sin limitarse a una sola", "Clasificar cada causa según su dimensión (económica, política, social, cultural, ambiental)", "Evaluar el peso relativo de cada causa, sin asumir que todas pesan igual", "Concluir cómo se combinaron esas causas para producir el hecho analizado"]
explicacion: |
  El proceso va de identificar todas las causas posibles a
  clasificarlas y evaluar su peso relativo antes de concluir.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "avanzado"
  tags: ["multicausalidad", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Multicausalidad cierra la cadena de herramientas básicas de pensamiento histórico: línea de tiempo, unidades de tiempo, períodos, causa/consecuencia, cambio/continuidad y multicausalidad."

pasos:
  - "Ver `../linea-de-tiempo-y-antes-despues/`: es el primer nodo de toda esta cadena de Tronco 6."

explicacion: |
  Verdadero: es la síntesis de toda la cadena de 7 temas de
  pensamiento histórico cubierta en esta sesión.
```

```
metadata:
  materia: "historia"
  tema: "multicausalidad"
  nivel: "avanzado"
  tags: ["multicausalidad", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al analizar un hecho histórico o un fenómeno actual complejo (una crisis económica, un conflicto social), conviene identificar varias causas posibles de distintas dimensiones, en vez de conformarse con una única explicación simple."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al análisis
  riguroso de cualquier hecho complejo, histórico o actual.
```

