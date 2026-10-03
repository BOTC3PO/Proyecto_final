# Examen jefe — [PENDIENTE #924]

> Logro #924. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: psicologia-modernidad-y-el-yo (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["sujeto", "modernidad", "individualismo"]

respuesta: "individualismo"
tipo: mc
opciones_explicitas: ["colectivismo", "individualismo", "dualismo", "determinismo"]

enunciado: "La modernidad promovió la idea de que la identidad se construye a partir de un ___ creciente, desplazando las identidades grupales o estamentales."

explicacion: |
  La modernidad se caracteriza por el surgimiento del individuo como unidad básica de la sociedad, con derechos y una conciencia propia, separada de su comunidad o estamento.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["historia", "sujeto"]

respuesta: verdadero

tipo: vf

enunciado: "La noción de un 'yo' o sujeto individual y autónomo es una construcción histórica que se consolidó con la modernidad, y no ha existido de la misma forma en todas las épocas de la humanidad."

explicacion: |
  Históricamente, en muchas culturas premodernas, la identidad estaba definida por el rol social, la familia o la religión, y no por una esencia interna e individualista.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["autonomia", "razon"]

variables:
  concepto_idx: uno_de([0, 1])
  conceptos: ["autonomía", "razón"]

respuesta: conceptos[concepto_idx]
tipo: completar
respuestas_validas:
  - "autonomía"
  - "razón"

enunciado: "En el pensamiento moderno, uno de los pilares que define al sujeto moderno es su capacidad de ___."

explicacion: |
  La modernidad sitúa a la razón y la autonomía como los pilares que permiten al individuo desprenderse de las imposiciones externas para ser dueño de sus actos.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["historia", "orden"]

respuesta_orden: ["Sujeto comunitario/estamental", "Sujeto racional/moderno", "Sujeto fragmentado/posmoderno"]
tipo: ordenar
opciones_explicitas: ["Sujeto comunitario/estamental", "Sujeto racional/moderno", "Sujeto fragmentado/posmoderno"]

enunciado: "Ordene cronológicamente la evolución de la noción de identidad/sujeto en la historia occidental:"

explicacion: |
  La historia muestra una transición desde la identidad fija por pertenencia grupal, pasando por el individuo soberano de la modernidad, hasta la identidad fluida y múltiple de la posmodernidad.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["introspeccion", "conciencia"]

respuesta: 1

tipo: mc
opciones_explicitas: [0, 1]

enunciado: "En el contexto de la modernidad, ¿es la introspección una herramienta fundamental para el descubrimiento del 'yo' interior?\n(0 = No, 1 = Sí)"

explicacion: |
  La modernidad fomenta la idea de que el sujeto puede conocerse a sí mismo mediante la observación de sus propios procesos mentales y sentimientos internos.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["historia", "modernidad", "subjetividad"]

respuesta: "colectivo"
tipo: completar
respuestas_validas:
  - "colectivo"
enunciado: "En la transición de la Edad Media al Renacimiento, la noción de identidad se desplaza desde un sentido ___ hacia la idea de un sujeto autónomo."

explicacion: |
  Históricamente, la modernidad marca el paso de un sujeto definido por su posición en un orden social y religioso (colectivo) a un 'yo' centrado en la introspección y la autonomía individual.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["filosofia", "subjetividad"]

respuesta: "Pienso, luego existo"
tipo: mc

opciones_explicitas: ["Pienso, luego existo", "El yo es una construcción social", "El yo es una ilusión", "El yo es una función del lenguaje"]

enunciado: "Consideremos el caso del pensamiento de Descartes. Si aplicamos su método de duda metódica para encontrar una base sólida para el conocimiento, la conclusión fundamental sobre el 'yo' es: ___"

pasos:
  - "Dudar de todo lo que pueda ser falso."
  - "Encontrar una verdad que sea indudable."
  - "Identificar el acto de dudar como prueba de la existencia del sujeto."

explicacion: |
  Descartes establece que el acto de pensar requiere un sujeto que piense, consolidando la idea del 'yo' como una entidad separada y racional.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["historia", "identidad"]

respuesta_orden: ["Identidad colectiva/estamental", "Identidad basada en la razón", "Identidad psicológica/subjetiva"]
tipo: ordenar

opciones_explicitas: ["Identidad colectiva/estamental", "Identidad basada en la razón", "Identidad psicológica/subjetiva"]

enunciado: "Ordena cronológicamente la evolución de la noción de 'yo' desde la pre-modernidad hasta la consolidación de la subjetividad moderna:"

explicacion: |
  La trayectoria va desde la pertenencia a un grupo/estamento, pasando por la razón ilustrada, hasta llegar al énfasis moderno en la psique y la historia personal.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["postmodernidad", "sujeto"]

respuesta: "cambiante y construida"

tipo: completar

enunciado: "En la modernidad tardía y la posmodernidad, el 'yo' deja de ser visto como una entidad estable y esencial, y pasa a entenderse como algo ___."

respuestas_validas:
  - "cambiante y construida"

explicacion: |
  La modernidad temprana creía en un 'yo' esencial y permanente; la visión contemporánea lo entiende como un proceso dinámico y situado.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["autonomia", "moral"]

respuesta: "Sujeto autónomo"
tipo: mc

opciones_explicitas: ["Sujeto autónomo", "Sujeto heterónomo", "Sujeto colectivo", "Sujeto biológico"]

enunciado: "Si un individuo toma decisiones basadas exclusivamente en sus propias leyes internas y su razón, independientemente de las presiones externas, estamos ante un modelo de: ___"

explicacion: |
  La noción de autonomía es el pilar del 'yo' moderno: la capacidad del sujeto para ser legislador de su propia conducta.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["historia", "subjetividad", "modernidad"]

tipo: mc
opciones_explicitas: ["La noción de un 'yo' individual y autónomo es una construcción histórica de la modernidad.", "El concepto de 'yo' ha sido inmutable y constante en toda la historia de la humanidad.", "El 'yo' es una entidad biológica que no depende de contextos culturales.", "La psicología moderna descubrió el 'yo', pero este siempre existió de la misma forma."]

enunciado: "Un error común es creer que la experiencia de la individualidad es una constante biológica. Sin embargo, la noción de un 'yo' centrado en la autonomía y la introspección es:"

respuesta: "La noción de un 'yo' individual y autónomo es una construcción histórica de la modernidad."

explicacion: |
  La modernidad, con el giro subjetivo (Descartes, etc.), consolidó la idea de un sujeto separado del cosmos y de la comunidad, algo que no era la norma en las cosmologías pre-modernas.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["subjetividad", "esencia"]

tipo: vf

enunciado: "Desde la perspectiva de la psicología moderna y la construcción del sujeto, se considera que el 'yo' es una esencia inmutable y preexistente que la psicología debe 'descubrir'."

respuesta: falso

explicacion: |
  La psicología moderna entiende al 'yo' como un proceso dinámico y una construcción, no como una esencia fija o una sustancia metafísica que permanece igual a lo largo de la vida.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["historia", "subjetividad"]

tipo: ordenar
opciones_explicitas: ["La subjetividad pre-moderna", "La subjetividad moderna"]
respuesta_orden: ["La subjetividad pre-moderna", "La subjetividad moderna"]

enunciado: "Ordene cronológicamente los modelos de subjetividad según la evolución histórica del concepto de 'yo':"

pasos:
  - "Identifique el modelo basado en la pertenencia a un orden social/cósmico."
  - "Identifique el modelo basado en la autonomía del individuo."

explicacion: |
  En la pre-modernidad, el sujeto se definía por su lugar en un orden dado (Dios, la naturaleza, la comunidad). La modernidad desplaza ese centro hacia el individuo autónomo.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["errores_conceptuales", "cultura"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["un sujeto medieval", "se define por su rol en la comunidad y la tradición"], ["un sujeto contemporáneo", "se define por su identidad personal y deseos internos"]]

tipo: completar
respuestas_validas:
  - "se define por su rol en la comunidad y la tradición"
  - "se define por su identidad personal y deseos internos"
respuesta: casos[caso_idx][1]

enunciado: "Para entender el error de la universalización del 'yo': mientras que {casos[caso_idx][0]} ___."

explicacion: |
  Confundir la psicología moderna con una verdad universal es un error: lo que hoy llamamos 'identidad' es un producto de la modernidad y no necesariamente una constante humana universal.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["modernidad", "sujeto"]

tipo: mc
opciones_explicitas: ["La idea de un 'yo' totalmente aislado de la cultura.", "La idea de que el 'yo' es una construcción social e histórica.", "La idea de que el 'yo' es una entidad puramente biológica.", "La idea de que la psicología no tiene relación con la historia."]

enunciado: "Un error conceptual frecuente en la psicología es tratar al sujeto como si su identidad fuera independiente de su contexto histórico. Esto implica ignorar que el 'yo' es:"

respuesta: "La idea de que el 'yo' es una construcción social e histórica."

explicacion: |
  La noción de individuo es un producto histórico. No se puede estudiar la psicología ignorando que las categorías de 'persona' y 'sujeto' cambian según la época.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["modernidad", "identidad", "historia_psicologia"]

respuesta: "individualismo"
tipo: "completar"
respuestas_validas:
  - "individualismo"

enunciado: "Mientras que en la era premoderna la identidad estaba definida por el estatus social y el grupo, la modernidad introdujo la noción de un yo basado en el ___________."

explicacion: |
  La modernidad desplazó la identidad colectiva (estatus, linaje, gremio) hacia una identidad centrada en el individuo autónomo y su subjetividad interna.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["autonomia", "sujeto"]

respuesta: verdadero
tipo: "vf"

enunciado: "La noción moderna de 'yo' presupone que el individuo es un agente autónomo capaz de autogobernarse, diferenciándose de la visión medieval donde el orden era dictado por la tradición y la divinidad."

explicacion: |
  La autonomía es un pilar de la modernidad; el sujeto se reconoce como origen de sus propias leyes y decisiones.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["identidad", "comparacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["identidad colectiva", "identidad individual"], ["orden social estático", "orden social dinámico"]]

respuesta: datos[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["identidad colectiva", "identidad individual", "orden social estático", "orden social dinámico"]

enunciado: "En el contexto de la transición a la modernidad, el cambio fundamental radica en el paso de {datos[escenario_idx][0]} a {datos[escenario_idx][1]}."

explicacion: |
  El paso de lo colectivo a lo individual es el núcleo del cambio en la construcción del 'yo' moderno.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["procesos", "historia"]

respuesta_orden: ["Identidad colectiva/estática", "Surgimiento del individuo", "Autonomía del yo moderno"]
tipo: "ordenar"
opciones_explicitas: ["Identidad colectiva/estática", "Surgimiento del individuo", "Autonomía del yo moderno"]

enunciado: "Ordene cronológicamente la evolución de la noción de identidad según el proceso de modernización:"

explicacion: |
  La secuencia lógica parte de la pertenencia al grupo, pasa por el proceso de individuación y culmina en la autonomía del sujeto moderno.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["tradicion", "modernidad"]

respuesta: "La modernidad enfatiza la subjetividad interna, mientras que la tradición enfatiza el rol social externo."
tipo: "mc"
opciones_explicitas: ["La modernidad enfatiza la subjetividad interna, mientras que la tradición enfatiza el rol social externo.", "La tradición enfatiza la subjetividad interna, mientras que la modernidad enfatiza el rol social externo.", "Ambos conceptos consideran que la identidad es puramente externa.", "La modernidad y la tradición son conceptos idénticos en la psicología."]

enunciado: "¿Cuál es el contraste principal entre la concepción tradicional y la moderna de la identidad?"

explicacion: |
  El contraste principal es que la modernidad "interioriza" la identidad, buscando la verdad en el yo, mientras que la tradición la encontraba en el lugar que el individuo ocupaba en el orden social.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["historia", "identidad"]

enunciado: "Según la transición de la modernidad, el paso de un yo definido por la comunidad a un yo basado en la ___ marca el nacimiento de la subjetividad moderna."

respuesta: "subjetividad"
tipo: completar
respuestas_validas:
  - "subjetividad"

explicacion: |
  La modernidad desplaza el eje de la identidad desde el grupo (familia, gremio, religión) hacia el individuo como centro de su propio universo psíquico.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["modernidad", "sujeto"]

enunciado: "¿Es la noción de un 'yo' individual y autónomo una característica que ha existido de la misma forma en todas las épocas de la historia humana?"

respuesta: falso
tipo: vf

explicacion: |
  Históricamente, la identidad estaba ligada a la pertenencia a un cuerpo social. El 'yo' individual es una construcción de la modernidad.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["identidad", "sociedad"]

enunciado: "En un análisis histórico, si comparamos un sistema basado en la identidad ligada a la tradición con uno basado en la identidad ligada a la elección personal, el segundo representa el ideal de la modernidad: ___"

respuesta: "individualismo"
tipo: mc
opciones_explicitas: ["colectivismo", "individualismo"]

explicacion: |
  El individualismo moderno postula que el sujeto es el arquitecto de su propia identidad, separándose de las estructuras predeterminadas.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["historia", "filosofia"]

enunciado: "Ordena cronológicamente las etapas que influyeron en la consolidación del 'yo' moderno, desde la estructura más externa a la más interna:"

pasos:
  - "Estructuras comunitarias y religiosas medievales"
  - "Surgimiento de la razón individualista"
  - "Consolidación de la subjetividad psicológica"

respuesta_orden: ["Estructuras comunitarias y religiosas medievales", "Surgimiento de la razón individualista", "Consolidación de la subjetividad psicológica"]
tipo: ordenar
opciones_explicitas: ["Estructuras comunitarias y religiosas medievales", "Surgimiento de la razón individualista", "Consolidación de la subjetividad psicológica"]

explicacion: |
  La evolución va desde la pertenencia a un orden social dado hacia la introspección y la autonomía del sujeto.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["sujeto", "autonomia"]

enunciado: "En la psicología moderna, el concepto central es la autonomía, donde el individuo se percibe como un ___ de su propia historia."

respuesta: "agente"
tipo: completar
respuestas_validas:
  - "agente"

explicacion: |
  La modernidad introduce la idea de agencia, donde el sujeto tiene la capacidad de decidir y actuar sobre su propio destino psíquico.
```

## Sección: autoconocimiento-como-busqueda-humana (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["definicion", "proceso"]

respuesta: falso
tipo: vf

enunciado: "El autoconocimiento es un estado estático que se alcanza una vez que se han identificado todos los rasgos de la personalidad."

explicacion: |
  El autoconocimiento es un proceso dinámico y continuo; a medida que vivimos nuevas experiencias, nuestra percepción de nosotros mismos se transforma.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["vocabulario", "introspeccion"]

respuesta: "la observación de los propios pensamientos"
tipo: completar
respuestas_validas:
  - "la observación de los propios pensamientos"
  - "la introspección"

enunciado: "El proceso mediante el cual una persona dirige su atención hacia su propio mundo interno para comprender sus emociones y pensamientos se denomina ___."

explicacion: |
  La introspección es la herramienta fundamental del autoconocimiento, permitiendo mirar hacia adentro para entender nuestra subjetividad.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["dimensiones", "identidad"]

respuesta: "Yo Real"
tipo: mc
opciones_explicitas: ["Yo Ideal", "Yo Real", "Yo Social", "Yo Ficticio"]

enunciado: "Cuando una persona se reconoce a sí misma tal como es en la actualidad, con sus virtudes y defectos reales, está haciendo contacto con su ___."

explicacion: |
  Diferenciar entre quiénes somos (Yo Real) y quiénes nos gustaría ser (Yo Ideal) es un paso crucial en el proceso de autoconocimiento.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["componentes", "identidad"]

respuesta_orden: ["Valores", "Emociones", "Creencias", "Capacidades"]
tipo: ordenar

opciones_explicitas: ["Valores", "Emociones", "Creencias", "Capacidades"]

enunciado: "Ordena los siguientes elementos que forman parte de la estructura de la identidad personal, desde el componente más profundo/interno hacia el más expresivo/externo:"

pasos:
  - "Identificar los principios rectores (lo que nos guía)."
  - "Reconocer cómo nos sentimos ante los estímulos."
  - "Identificar las ideas que aceptamos como verdades."
  - "Reconocer las habilidades y destrezas que poseemos."

explicacion: |
  El autoconocimiento implica integrar valores, emociones, creencias y capacidades en una visión coherente de uno mismo.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["dinamismo", "evolucion"]

respuesta: "un proceso de transformación constante"

enunciado: "Debido a que el ser humano es un ser histórico y cambiante, el autoconocimiento debe entenderse como ___."

tipo: completar
respuestas_validas:
  - "un proceso de transformación constante"

explicacion: |
  Dado que nuestras circunstancias y madurez cambian, el autoconocimiento no es un destino, sino un camino de exploración permanente.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["proceso", "identidad", "evolucion"]

respuesta: falso
tipo: vf

enunciado: "El autoconocimiento es un estado estático que se alcanza una vez que hemos identificado todos nuestros rasgos de personalidad."

explicacion: |
  El autoconocimiento es un proceso dinámico y continuo. A medida que vivimos nuevas experiencias y atravesamos diferentes etapas vitales, nuestra percepción de nosotros mismos se transforma.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["valores", "evolucion", "identidad"]

variables:
  escenario: uno_de([["Julián valoraba el éxito profesional por el estatus.", "estatus"], ["Julián valoraba la estabilidad para su familia.", "familia"]])

enunciado: "Consideremos el caso de una persona cuyas prioridades cambian con el tiempo. Si Julián hoy siente que su motivación principal es {escenario[0]}, su autoconocimiento es un proceso que refleja su evolución actual."

pasos:
  - "Identificar el valor predominante en la etapa actual."
  - "Reconocer que este valor puede haber sido distinto en el pasado."

opciones_explicitas: ["es un dato fijo", "es un proceso dinámico"]
respuesta: "es un proceso dinámico"
tipo: mc

explicacion: |
  El cambio en los valores de Julián demuestra que el 'yo' no es una entidad inmutable, sino una construcción que se renegocia constantemente con el entorno.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "avanzado"
  tags: ["metodologia", "introspeccion", "pasos"]

opciones_explicitas: ["Observar una emoción", "Analizar el origen de la emoción", "Integrar el aprendizaje en la conducta"]
respuesta_orden: ["Observar una emoción", "Analizar el origen de la emoción", "Integrar el aprendizaje en la conducta"]
tipo: ordenar

enunciado: "Para que el autoconocimiento sea efectivo en un proceso terapéutico o de crecimiento, se suele seguir una secuencia lógica de profundización. Ordena estos pasos de lo más superficial a lo más profundo:"

explicacion: |
  El autoconocimiento requiere pasar de la mera percepción sensorial de un estado (observación) a la comprensión de su causa (análisis) y, finalmente, a la transformación personal (integración).
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["sombra", "inconsciente", "descubrimiento"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["reaccionar con ira ante un compañero", "ira"], ["sentir envidia ante un logro ajeno", "envidia"]]

enunciado: "Al analizar el caso donde una persona experimenta {casos[caso_idx][0]}, descubre un aspecto de su personalidad que no había integrado previamente. Este descubrimiento es un ejemplo de que conocerse implica:"

opciones_explicitas: ["Solo reconocer lo que nos gusta", "Descubrir aspectos ocultos o no integrados"]
respuesta: "Descubrir aspectos ocultos o no integrados"
tipo: mc

explicacion: |
  El autoconocimiento no es solo una lista de virtudes; implica el proceso de traer a la consciencia aquellos aspectos (la 'sombra') que mantenemos ocultos o negados.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["experiencia", "aprendizaje", "identidad"]

respuesta: "un proceso"
tipo: completar
respuestas_validas:
  - "un proceso"
  - "un camino"
  - "una búsqueda"

enunciado: "Dado que el ser humano está en constante interacción con un entorno cambiante, el autoconocimiento no puede ser considerado un dato, sino que debe entenderse como ___."

explicacion: |
  La interacción constante con lo nuevo impide que el autoconocimiento sea una meta final; siempre hay nuevos matices de nuestra identidad por descubrir.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["procesos", "identidad", "dinamismo"]

respuesta: falso
tipo: vf

enunciado: "El autoconocimiento es un estado estático que se alcanza una vez que se descubren todos los rasgos de la personalidad, por lo tanto, una vez logrado, el proceso termina."

explicacion: |
  El autoconocimiento es un proceso dinámico y continuo. Debido a que los seres humanos somos seres en constante cambio (biológico, emocional y socialmente), la búsqueda de la identidad es una construcción permanente, no un dato fijo o un destino final.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["etiquetas", "identidad", "cambio"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Soy una persona extremadamente tímida y siempre lo seré.", "Soy una persona muy ansiosa ante el estrés."], ["Soy un líder nato y no puedo cambiar mi forma de actuar.", "Soy alguien que siempre reacciona con ira."]]

enunciado: "Un error común en la búsqueda del autoconocimiento es confundir un rasgo o comportamiento actual con una etiqueta inmutable. Por ejemplo: {escenarios[escenario_idx][0]}"

opciones_explicitas:
  - "La etiqueta es una descripción esencial de mi ser."
  - "La etiqueta es una descripción de un comportamiento actual que puede evolucionar."
  - "La etiqueta es una verdad absoluta e inamovible."

respuesta: "La etiqueta es una descripción de un comportamiento actual que puede evolucionar."
tipo: mc

explicacion: |
  Etiquetarse a uno mismo ("Soy así") cierra la puerta al crecimiento. El autoconocimiento busca entender los procesos detrás de la conducta, no fijar categorías que impidan la transformación personal.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["metodologia", "introspeccion", "reflexion"]

opciones_explicitas:
  - "Reconocimiento de emociones"
  - "Juicio crítico y autocrítica"
  - "Identificación de patrones de conducta"
  - "Aceptación de la propia historia"

respuesta_orden: ["Reconocimiento de emociones", "Identificación de patrones de conducta", "Juicio crítico y autocrítica", "Aceptación de la propia historia"]
tipo: ordenar

enunciado: "Para que el autoconocimiento sea un proceso de crecimiento y no una simple observación superficial, se requiere integrar ciertos elementos en un orden de profundidad psicológica (de lo más inmediato a lo más estructural):"

explicacion: |
  El proceso comienza con la percepción de la emoción inmediata, sigue con la identificación de cómo se repiten esas emociones (patrones), requiere un juicio sobre la raíz de esos comportamientos y culmina con la integración y aceptación de la propia historia personal.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "avanzado"
  tags: ["esencia", "construccion", "identidad"]

respuesta: "construcción"
tipo: completar
respuestas_validas:
  - "construcción"

enunciado: "A diferencia de la visión esencialista que sugiere que debemos 'encontrar' un yo preexistente, la psicología contemporánea sugiere que la identidad es una ___ constante a través de la experiencia y la interacción."

explicacion: |
  El error es creer que el "yo" es un objeto escondido que solo hay que desenterrar. El autoconocimiento es más bien el proceso de entender cómo nos estamos construyendo a través de nuestras decisiones y vivencias.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["dualidad", "identidad", "crecimiento"]

enunciado: "¿Cómo se conceptualiza el autoconocimiento en esta perspectiva?"
tipo: mc
respuesta: "Es ambos: descubrimos potencialidades y creamos nuevas formas de ser."
opciones_explicitas:
  - "Es solo un descubrimiento de lo que ya está ahí."
  - "Es solo una creación de lo que queremos ser."
  - "Es ambos: descubrimos potencialidades y creamos nuevas formas de ser."
explicacion: |
  El autoconocimiento es una danza entre lo que descubrimos (nuestro temperamento, historia y predisposiciones) y lo que creamos (nuestra voluntad, valores y la forma en que decidimos actuar frente a nuestra naturaleza).
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["autoconocimiento", "proceso", "identidad"]

respuesta: "proceso"
tipo: "completar"
respuestas_validas:
  - "proceso"
  - "dinámico"

enunciado: "A diferencia de un dato fijo o una etiqueta estática, el autoconocimiento se define como un ___ continuo y evolutivo."

explicacion: |
  El autoconocimiento no es un destino al que se llega y se permanece, sino un proceso constante de revisión de nuestra identidad a medida que vivimos nuevas experiencias.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["naturaleza", "cambio", "identidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["La persona cambia sus valores tras una crisis", "evolución"], ["La persona descubre un nuevo talento en la adultez", "evolución"]]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["estatismo", "evolución", "determinismo", "esencia fija"]

enunciado: "Considera el siguiente caso: {escenarios[escenario_idx][0]}. Esto demuestra que el autoconocimiento es:"

explicacion: |
  Como se observa en el caso, el sujeto descubre o transforma aspectos de sí mismo, lo que confirma que la identidad no es un bloque inmutable.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "avanzado"
  tags: ["diagnostico", "reflexion", "conciencia"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que el autoconocimiento es equivalente a un autodiagnóstico clínico, es decir, un conjunto de etiquetas definitivas para definir quiénes somos?"

explicacion: |
  Falso. El autodiagnóstico busca clasificar y cerrar una definición, mientras que el autoconocimiento es una exploración abierta que permite la transformación personal.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["secuencia", "reflexion", "acción"]

respuesta_orden: ["Observación de reacciones", "Reflexión sobre motivos", "Integración de aprendizajes"]
tipo: "ordenar"
opciones_explicitas: ["Observación de reacciones", "Reflexión sobre motivos", "Integración de aprendizajes"]

enunciado: "Ordena las etapas de un proceso de autoconocimiento reflexivo, partiendo desde la experiencia inmediata hasta la consolidación del saber personal:"

explicacion: |
  El proceso implica primero notar qué sentimos (observación), luego entender por qué lo sentimos (reflexión) y finalmente incorporar ese saber a nuestra identidad (integración).
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["experiencia", "conocimiento", "cambio"]

tipo: vf
respuesta: verdadero

enunciado: "Dado que el ser humano es un sujeto en constante cambio debido a la interacción con el entorno, el autoconocimiento requiere una revisión periódica de la propia identidad."

explicacion: |
  Verdadero. La interacción con el mundo y el paso del tiempo modifican nuestra percepción y nuestras capacidades, invalidando la idea de un 'yo' inalterable.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["identidad", "proceso"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Juan cree que nació siendo tímido y que nunca podrá cambiar su forma de ser.", "Falsa"], ["María piensa que su personalidad es una verdad absoluta que ya descubrió.", "Falsa"]]

enunciado: "Un individuo afirma que su personalidad es una estructura inmutable que no puede ser modificada por la experiencia. Según la visión del autoconocimiento como proceso, esta afirmación es..."

opciones_explicitas: ["Verdadera", "Falsa"]
respuesta: datos[escenario_idx][1]
tipo: mc

explicacion: |
  El autoconocimiento no es un objeto que se encuentra, sino un proceso dinámico. Creer que la identidad es un dato fijo ignora la capacidad humana de transformación y aprendizaje continuo.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["introspeccion", "cambio"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un joven que descubre nuevas pasiones a los 30 años", "evolucion"], ["Una persona que redefine sus valores tras un duelo", "evolucion"]]

enunciado: "Considerando el caso de {casos[caso_idx][0]}, el autoconocimiento se manifiesta como un proceso de ___."

respuestas_validas:
  - "evolución"
  - "cambio"
respuesta: "evolución"
tipo: completar

explicacion: |
  Los cambios vitales demuestran que el 'yo' se reconfigura constantemente, invalidando la idea de una identidad estática.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["naturaleza", "verdad"]

enunciado: "¿Es el autoconocimiento un estado final de iluminación donde se llega a conocer todo sobre uno mismo?"

respuesta: falso
tipo: vf
explicacion: |
  Dado que el ser humano es un proyecto en constante construcción, el autoconocimiento es una búsqueda inacabada, no un destino final.
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["dimensiones", "orden"]

enunciado: "Ordene las etapas de un proceso de autoconocimiento profundo, desde la percepción inicial hasta la integración:"

opciones_explicitas: ["Percepción de emociones", "Análisis de patrones", "Integración de la identidad"]
respuesta_orden: ["Percepción de emociones", "Análisis de patrones", "Integración de la identidad"]
tipo: ordenar

explicacion: |
  El autoconocimiento requiere pasar de la simple sensación (emoción) al entendimiento (patrón) y finalmente a la asunción de esa identidad (integración).
```

```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "avanzado"
  tags: ["etiquetado", "esencia"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: ["'Soy una persona ansiosa' (como etiqueta definitiva)", "'Siento ansiedad en este momento' (como estado temporal)"]

enunciado: "Si una persona dice: '{ejemplos[ejemplo_idx]}', está cometiendo el error de confundir un estado temporal con su ___."

respuestas_validas:
  - "esencia"
respuesta: "esencia"
tipo: completar

explicacion: |
  Confundir un estado transitorio con la esencia del ser es el principal obstáculo para entender el autoconocimiento como un proceso fluido.
```

## Sección: dependencia-del-otro-cultura-como-herencia (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "basico"
  tags: ["cultura", "socializacion", "identidad"]

respuesta: "socializacion"
tipo: "completar"
respuestas_validas:
  - "socializacion"

enunciado: "El proceso mediante el cual el individuo interioriza las normas, valores y costumbres de su grupo social, permitiéndole integrarse a la cultura heredada, se denomina ___."

explicacion: |
  La socialización es el proceso fundamental a través del cual la cultura se transmite de una generación a otra, permitiendo que el individuo construya su identidad en relación con los otros.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "basico"
  tags: ["identidad", "otro", "sujeto"]

opciones_explicitas: ["El sujeto se forma de manera aislada e independiente de su entorno social.", "El sujeto se constituye a través de la interacción con los otros y la cultura.", "La identidad es un proceso puramente biológico sin influencia externa.", "La cultura es un conjunto de reglas que el sujeto ignora por completo."]

respuesta: "El sujeto se constituye a través de la interacción con los otros y la cultura."
tipo: "mc"

enunciado: "Desde la perspectiva de la psicología social, ¿cuál de las siguientes afirmaciones describe mejor la formación de la identidad?"

explicacion: |
  No existe un "yo" sin un "otro". La identidad es una construcción dialéctica que requiere de la alteridad (la existencia del otro) y del marco cultural para tener sentido.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "basico"
  tags: ["dependencia", "herencia"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es correcto afirmar que la cultura actúa como una 'herencia social' que condiciona la percepción que tenemos de la realidad?"

explicacion: |
  Verdadero. La cultura actúa como una herencia social que transmite valores, normas y marcos de referencia que condicionan cómo percibimos e interpretamos la realidad.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["simbolos", "lenguaje", "normas"]

opciones_explicitas: ["El lenguaje", "La biología", "La herencia genética", "El instinto"]

respuesta: "El lenguaje"
tipo: "mc"

enunciado: "De los siguientes elementos, ¿cuál es el principal vehículo de la herencia cultural que permite la comunicación de significados entre generaciones?"

explicacion: |
  El lenguaje es el sistema de signos que permite la transmisión de la cultura, permitiendo que el conocimiento sea compartido y acumulativo.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["socializacion", "primaria", "secundaria"]

opciones_explicitas: ["Socialización secundaria", "Socialización primaria"]

respuesta_orden: ["Socialización primaria", "Socialización secundaria"]
tipo: "ordenar"

enunciado: "Ordene cronológicamente las etapas de la socialización en la vida de un individuo:"

explicacion: |
  La socialización primaria ocurre en la infancia (familia) y es la base de la identidad; la secundaria ocurre en instituciones posteriores (escuela, trabajo) y especializa al sujeto en roles sociales.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "basico"
  tags: ["identidad", "cultura", "socializacion"]

variables:
  escenario: uno_de([["Juan creció en una cultura donde el éxito se mide por la riqueza individual.", "individualismo"], ["Ana creció en una cultura donde el éxito se mide por la armonía del grupo.", "colectivismo"]])

enunciado: "Si una persona es formada bajo los valores de {escenario[0]}, su construcción de identidad estará marcada por el {escenario[1]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["individualismo", "colectivismo"]

explicacion: |
  La cultura actúa como una herencia que proporciona los marcos de referencia (valores, normas, símbolos) a través de los cuales el individuo construye su identidad. No somos seres aislados, sino el resultado de la internalización de la cultura heredada.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["socializacion", "agentes_socializadores"]

enunciado: "El proceso mediante el cual un individuo internaliza las normas y valores de su entorno se denomina socialización. Si el primer contacto con estas normas ocurre en la familia, estamos ante la socialización primaria."

respuesta: verdadero
tipo: vf

explicacion: |
  La socialización primaria es la base de la estructura de la personalidad y ocurre principalmente en el núcleo familiar, donde el niño depende totalmente del otro para su formación psíquica y cultural.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["yo", "otro", "identidad"]

enunciado: "Para que un individuo desarrolle un sentido del 'Yo', necesita la interacción con un 'Otro' que le devuelva una imagen de sí mismo. Completa la secuencia de la formación de la identidad:"

pasos:
  - "1. El individuo nace en un contexto cultural determinado."
  - "2. El entorno social interactúa con el individuo."
  - "3. El individuo internaliza estas interacciones para formar su ___."

respuestas_validas:
  - "identidad"
  - "self"
  - "yo"
respuesta: "identidad"
tipo: completar

explicacion: |
  La identidad no es algo que surge de la nada; es un proceso dialéctico entre el individuo y la cultura. La cultura nos 'ofrece' un lenguaje y un rol, y nosotros lo habitamos.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "avanzado"
  tags: ["determinismo", "cultura", "herencia"]

variables:
  caso: uno_de([["Un individuo intenta vivir de forma totalmente aislada de cualquier norma cultural.", "aislamiento"], ["Un individuo adopta las tradiciones de sus padres sin cuestionarlas.", "implantacion"]])

enunciado: "En el caso de {caso[0]}, el individuo sigue operando bajo estructuras lingüísticas y cognitivas heredadas de la cultura, lo que demuestra que la dependencia cultural es:"

respuesta: "inevitable"
tipo: completar
respuestas_validas:
  - "inevitable"

explicacion: |
  Incluso en el intento de aislamiento, el pensamiento está mediado por el lenguaje y las categorías conceptuales que la cultura nos ha proporcionado. No existe un 'yo' puro sin la mediación cultural.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["secuencia", "desarrollo", "cultura"]

enunciado: "Ordena las etapas del desarrollo de la identidad en relación con la herencia cultural, desde la recepción pasiva hasta la autonomía crítica:"

opciones_explicitas: ["Internalización de normas culturales", "Interacción con grupos sociales diversos", "Reevaluación crítica de la herencia cultural"]
respuesta_orden: ["Internalización de normas culturales", "Interacción con grupos sociales diversos", "Reevaluación crítica de la herencia cultural"]
tipo: ordenar

explicacion: |
  El desarrollo de la identidad comienza con la absorción de la cultura (socialización primaria), continúa con la exploración de la diversidad en la sociedad (socialización secundaria) y puede culminar en una síntesis personal donde el sujeto elige qué elementos de su herencia mantener o transformar.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "basico"
  tags: ["subjetividad", "cultura", "socializacion"]

respuesta: falso
tipo: vf

enunciado: "El desarrollo de la identidad es un proceso puramente biológico e individual, donde la cultura y los otros no intervienen en la formación del yo."

explicacion: |
  La subjetividad se construye en la trama de los vínculos. No existe un "yo" previo a la interacción con el otro y con la cultura que nos constituye.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["herencia", "socializacion", "identidad"]

respuesta: "el lenguaje"
tipo: completar
respuestas_validas:
  - "el lenguaje"

enunciado: "La cultura se transmite a través de la socialización; por ejemplo, mediante ___ es como el sujeto internaliza la estructura del lenguaje de su comunidad."

explicacion: |
  La cultura no es solo un conjunto de datos, sino que se encarna en herramientas simbólicas como el lenguaje, que preexisten al sujeto y lo moldean.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "avanzado"
  tags: ["subjetividad", "ontogenia", "cultura"]

respuesta: "Constitución de la subjetividad"
tipo: mc
opciones_explicitas: ["Influencia externa sobre un yo preexistente", "Constitución de la subjetividad", "Adaptación biológica al medio", "Imitación de conductas"]

enunciado: "Desde la perspectiva psicosocial, la relación entre el individuo y la cultura no es una simple 'influencia' de afuera hacia adentro, sino que se define como la:"

explicacion: |
  No somos un envase vacío que recibe información; la cultura nos constituye, es decir, nos da las herramientas para que el "yo" pueda existir.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["socializacion", "etapas", "identidad"]

respuesta_orden: ["Internalización de normas", "Interacción con agentes sociales", "Formación de la identidad"]
tipo: ordenar
opciones_explicitas: ["Internalización de normas", "Interacción con agentes sociales", "Formación de la identidad"]

enunciado: "Ordene cronológicamente los procesos que permiten la formación del sujeto a través de la herencia cultural:"

explicacion: |
  Primero se interactúa con los otros (familia, escuela), luego se internalizan las normas de esa cultura y, finalmente, se consolida una identidad propia dentro de ese marco.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "avanzado"
  tags: ["identidad", "otredad", "cultura"]

respuesta: "cultura"
tipo: completar
respuestas_validas:
  - "cultura"

enunciado: "Para que un individuo pueda desarrollar una identidad única, paradójicamente, debe primero estar profundamente arraigado en una ___ que le provea símbolos y significados."

explicacion: |
  La paradoja de la identidad radica en que para ser "único" necesitamos un marco común (cultura) que nos permita distinguirnos de los demás.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "intermedio"
  tags: ["identidad", "cultura", "herencia"]

respuesta: "interactividad"
tipo: completar
respuestas_validas:
  - "interactividad"

enunciado: "A diferencia de la herencia biológica que se transmite por genes, la formación de la identidad a través de la cultura se da mediante la ___________ con los otros significativos."

explicacion: |
  La identidad no es un objeto dado, sino un proceso dinámico que surge en la interacción con el entorno cultural y los otros.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "basico"
  tags: ["socializacion", "individuo"]

variables:
  escenario: uno_de([["Proceso de aprendizaje de normas", "socialización"], ["Sentido de pertenencia y rasgos únicos", "identidad"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["socialización", "identidad", "instinto", "genética"]

enunciado: "Si la socialización es el proceso de internalización de la cultura, la identidad es el resultado de ese proceso donde el sujeto se distingue de la masa. ¿Qué concepto describe la construcción del 'yo' a partir de la herencia cultural?"

explicacion: |
  La identidad es la síntesis personal de los elementos culturales heredados y la subjetividad propia.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "intermedio"
  tags: ["otro", "subjetividad"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la subjetividad humana es dependiente de la cultura, ya que el lenguaje y las categorías de pensamiento son herencias sociales?"

explicacion: |
  Sin el lenguaje y los símbolos proporcionados por la cultura (el 'Otro'), la constitución del psiquismo humano sería imposible.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "avanzado"
  tags: ["procesos", "cultura"]

respuesta_orden: ["Internalización de normas", "Identificación con modelos", "Construcción de la subjetividad"]
tipo: ordenar
opciones_explicitas: ["Internalización de normas", "Identificación con modelos", "Construcción de la subjetividad"]

enunciado: "Ordene cronológicamente los procesos mediante los cuales la cultura se transforma en parte de la estructura psíquica del individuo:"

explicacion: |
  Primero se absorben las normas (socialización), luego se asumen modelos de identidad y finalmente se consolida la subjetividad propia.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "basico"
  tags: ["biologia", "cultura"]

respuesta: "cultural"
tipo: mc
opciones_explicitas: ["biológico", "cultural", "innato", "instintivo"]

enunciado: "Considerando la herencia que nos forma: si el color de ojos es un rasgo biológico, el uso de utensilios es un rasgo ___________."

explicacion: |
  La cultura se manifiesta en las herramientas, costumbres y significados que adquirimos del entorno social.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "intermedio"
  tags: ["identidad", "cultura", "socializacion"]

variables:
  datos: [["Un individuo que rechaza todas las tradiciones de su familia para buscar una identidad propia.", "autonomia"], ["Un individuo que adopta ciegamente los valores de su grupo sin cuestionarlos.", "conformismo"], ["Un individuo que integra elementos de su cultura con experiencias nuevas.", "integracion"]]
  idx: uno_de([0, 1, 2])

enunciado: "Según el concepto de socialización, el caso donde el sujeto adopta sin cuestionamiento los valores de su grupo se define como: {datos[idx][0]}"

opciones_explicitas: ["autonomia", "conformismo", "integracion"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  La identidad se construye en la tensión entre la herencia cultural (lo dado) y la subjetivación (lo que el sujeto hace con eso). El conformismo representa la dependencia absoluta de la herencia sin proceso de individuación.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "avanzado"
  tags: ["subjetivacion", "herencia", "otro"]

variables:
  idx: uno_de([0, 1])
  afirmaciones: ["La cultura nos proporciona el lenguaje y las normas para pensar, constituyendo al individuo como sujeto.", "El individuo es una entidad totalmente independiente de la estructura cultural que lo rodea."]
  es_correcta: [verdadero, falso]

enunciado: "{afirmaciones[idx]}"

respuesta: es_correcta[idx]
tipo: vf
explicacion: |
  No es posible una subjetivación sin el "Otro". La cultura es la matriz que nos permite, paradójicamente, ser sujetos; nos da las herramientas (lenguaje, símbolos) para construir nuestra propia identidad.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "basico"
  tags: ["herencia", "socializacion", "elementos"]

variables:
  orden_correcta: ["Lenguaje", "Normas sociales", "Valores morales", "Costumbres religiosas"]

enunciado: "Ordene los siguientes elementos de la herencia cultural desde el más estructural (base del pensamiento) hasta el más específico (práctica cotidiana):"

opciones_explicitas: ["Lenguaje", "Normas sociales", "Valores morales", "Costumbres religiosas"]
respuesta_orden: ["Lenguaje", "Normas sociales", "Valores morales", "Costumbres religiosas"]
tipo: ordenar

explicacion: |
  El lenguaje es la base que estructura la psique; las normas y valores guían la conducta social, y las costumbres son las manifestaciones externas y específicas de esa herencia.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "intermedio"
  tags: ["lenguaje", "simbolico", "herencia"]

enunciado: "En el proceso de formación de la persona, el lenguaje como herencia cultural es aquello que ___ la distinción entre el sujeto y el mundo externo."

respuestas_validas:
  - "permite"
respuesta: "permite"
tipo: completar

explicacion: |
  El lenguaje es la herramienta simbólica que nos permite nombrar nuestra propia existencia y diferenciar nuestra interioridad de la alteridad.
```

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "avanzado"
  tags: ["identidad", "cultura", "subjetividad"]

respuesta: "condicion"
tipo: mc
opciones_explicitas: ["limitacion", "condicion"]

enunciado: "Desde una perspectiva psicológica, la relación entre cultura y sujeto se comprende mejor si entendemos que la cultura es la:"

explicacion: |
  Aunque la cultura impone marcos de referencia, también es la "condición de posibilidad": sin la herencia cultural (símbolos, lenguaje, otros), no habría un sujeto con quien procesar la realidad.
```

## Sección: memoria-y-olvido-represion-inconsciente (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["psicoanalisis", "inconsciente"]

respuesta: verdadero
tipo: vf

enunciado: "En el psicoanálisis, el inconsciente se define como el conjunto de contenidos mentales que, aunque no son accesibles a la conciencia de forma inmediata, ejercen influencia sobre la conducta."

explicacion: |
  Efectivamente, para el psicoanálisis, el inconsciente no es solo lo que "no sabemos", sino una estructura dinámica con contenidos reprimidos que afectan nuestra vida psíquica.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["represion", "defensa"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["un deseo conflictivo", "represión"], ["un recuerdo traumático", "represión"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["proyección", "sublimación", "represión", "negación"]

enunciado: "Cuando el aparato psíquico expulsa de la conciencia un pensamiento o impulso que resulta intolerable para el yo, está utilizando el mecanismo de la {datos[escenario_idx][0]}."

explicacion: |
  La represión es el proceso mediante el cual se desplazan contenidos de la conciencia al inconsciente para evitar el malestar.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["represion", "terminologia"]

respuesta: "represión"
tipo: completar
respuestas_validas:
  - "represión"

enunciado: "El proceso de ___ consiste en el desplazamiento de contenidos hacia el inconsciente para evitar el dolor, lo que genera un olvido que no es por falta de capacidad de almacenamiento, sino por una barrera psíquica."

pasos:
  - "Identificar el mecanismo de defensa."
  - "Identificar el lugar donde se alojan los contenidos."
  - "Identificar la consecuencia en la conciencia."

explicacion: |
  La represión es el mecanismo que envía contenidos al inconsciente, resultando en un olvido que no es amnésico (biológico), sino dinámico (psicológico).
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["inconsciente", "conceptos"]

respuesta: "dinámico"
tipo: mc
opciones_explicitas: ["estático", "dinámico", "pasivo", "inexistente"]

enunciado: "A diferencia de una simple 'falta de conciencia', el inconsciente psicoanalítico es considerado ________ porque está en constante movimiento y lucha con las fuerzas de la conciencia."

explicacion: |
  Se considera dinámico porque los contenidos reprimidos intentan emerger constantemente, generando tensión psíquica.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["proceso", "represion"]

respuesta_orden: ["Conflicto", "Represión", "Síntoma"]
tipo: ordenar
opciones_explicitas: ["Conflicto", "Represión", "Síntoma"]

enunciado: "Ordene la secuencia lógica de la formación de un síntoma desde la perspectiva psicoanalítica:"

explicacion: |
  Primero surge un conflicto (deseo vs. moral), luego el yo utiliza la represión para alejar el deseo, y finalmente el deseo reprimido retorna de forma deformada como un síntoma.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["psicoanalisis", "represion", "inconsciente"]

respuesta: "represion"
tipo: completar
respuestas_validas:
  - "represion"
  - "represión"

enunciado: "En el psicoanálisis, cuando un pensamiento o deseo resulta intolerable para el yo, el aparato psíquico utiliza un mecanismo de defensa para alejarlo de la conciencia. Este proceso se denomina ___."

explicacion: |
  La represión es el mecanismo mediante el cual el sujeto desplaza contenidos psíquicos (impulsos, recuerdos traumáticos) hacia el inconsciente para evitar el malestar o la angustia.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "avanzado"
  tags: ["sintoma", "inconsciente", "psicoanalisis"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un individuo olvida el nombre de una persona que le causó un trauma severo.", "olvido_selectivo"], ["Un paciente presenta un lapsus linguae (error al hablar) que revela un deseo reprimido.", "lapsus"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["olvido_selectivo", "lapsus", "amnesia anterógrada", "olvido por interferencia"]

enunciado: "Analicemos el siguiente escenario: {casos[caso_idx][0]}. Según la teoría psicoanalítica, este fenómeno es una manifestación de:"

explicacion: |
  El síntoma o el error (como el lapsus) es la forma en que el contenido reprimido intenta retornar a la conciencia, aunque sea de manera disfrazada.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["inconsciente", "teoria"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que, para el psicoanálisis, el inconsciente es simplemente un conjunto de recuerdos que la persona ha olvidado por falta de atención o por el paso del tiempo?"

explicacion: |
  Falso. El inconsciente psicoanalítico no es solo "olvido", sino un sistema dinámico de contenidos reprimidos que ejercen presión sobre la conciencia y buscan retornar a través de síntomas.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["proceso", "represion", "conciencia"]

respuesta_orden: ["Conflicto psíquico", "Represión", "Retorno de lo reprimido"]
tipo: ordenar

opciones_explicitas: ["Conflicto psíquico", "Represión", "Retorno de lo reprimido"]

enunciado: "Ordene la secuencia lógica de un proceso de formación de síntoma desde la perspectiva psicoanalítica, partiendo desde la aparición del impulso hasta su manifestación clínica:"

explicacion: |
  1. El conflicto psíquico surge entre el deseo y la defensa.
  2. La represión actúa para alejar el deseo de la conciencia.
  3. El contenido reprimido retorna de forma disfrazada (síntoma, sueño, lapsus).
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["angustia", "defensa", "represion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: ["Un trauma infantil es bloqueado por la mente.", "Un deseo prohibido es enviado al inconsciente."]

respuesta: "angustia"
tipo: mc
opciones_explicitas: ["angustia", "placer", "olvido absoluto", "memoria episódica"]

enunciado: "Considerando el siguiente caso: {escenarios[escenario_idx]}. El motor que activa el mecanismo de defensa es la aparición de la ___."

explicacion: |
  La angustia actúa como una señal de alarma que advierte al Yo sobre la proximidad de un impulso que no puede ser integrado, disparando así la represión.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["psicoanalisis", "represion", "inconsciente"]

respuesta: falso
tipo: vf

enunciado: "Según el concepto de represión en el psicoanálisis, los contenidos reprimidos son recuerdos que han sido borrados permanentemente de la mente y que nunca podrán volver a la conciencia."

explicacion: |
  La represión no es un borrado definitivo, sino un mecanismo de defensa que desplaza los contenidos traumáticos o inaceptables fuera de la conciencia hacia el inconsciente. Sin embargo, estos contenidos siguen activos y pueden emerger a través de sueños, actos fallidos o síntomas.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  tema_secundario: "confusiones_conceptuales"
  nivel: "basico"
  tags: ["inconsciente", "memoria", "confusion"]

respuesta: "represión"
tipo: completar
respuestas_validas:
  - "represión"

enunciado: "Cuando un individuo experimenta un evento traumático que su psiquismo considera inaceptable, el mecanismo de defensa que actúa para alejarlo de la conciencia se denomina ___."

explicacion: |
  Es común confundir el olvido natural o la falla de memoria con la represión. La represión implica una acción activa del aparato psíquico para mantener un contenido fuera de la conciencia debido a su carga afectiva conflictiva.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["inconsciente", "psicoanalisis"]

enunciado: "Según el psicoanálisis, ¿cuál es la naturaleza de los contenidos inconscientes?"

tipo: mc
opciones_explicitas: ["Los contenidos inconscientes son estáticos y no afectan el comportamiento.", "Los contenidos inconscientes son dinámicos y buscan retornar a la conciencia.", "El inconsciente es simplemente una falta de atención momentánea.", "El inconsciente es equivalente a la memoria a corto plazo."]

respuesta: "Los contenidos inconscientes son dinámicos y buscan retornar a la conciencia."

explicacion: |
  Para el psicoanálisis, el inconsciente no es un depósito pasivo de información olvidada, sino un sistema dinámico donde los contenidos reprimidos luchan constantemente por manifestarse.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["represion", "mecanismos_defensa"]

respuesta: verdadero
tipo: vf

enunciado: "En el marco del psicoanálisis, el olvido por represión se diferencia del olvido fisiológico en que el primero es un proceso activo de defensa del yo."

explicacion: |
  El olvido fisiológico es una falla en la codificación o recuperación de la información, mientras que la represión es un proceso dinámico donde el sujeto "hace" algo para evitar el acceso a un contenido doloroso.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["estructura_psiquica", "inconsciente"]

respuesta_orden: ["Inconsciente", "Preconsciente", "Consciente"]
tipo: ordenar
opciones_explicitas: ["Inconsciente", "Preconsciente", "Consciente"]

enunciado: "Ordene los niveles de la estructura psíquica de Freud, desde el que tiene mayor contenido reprimido (más profundo) hacia el que tiene mayor acceso inmediato a la conciencia:"

explicacion: |
  El modelo topográfico de Freud establece que el Inconsciente es el nivel más profundo y dinámico, el Preconsciente contiene elementos que no están en la conciencia pero pueden ser evocados fácilmente, y la Conciencia es el nivel de percepción inmediata.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["psicoanalisis", "represion", "inconsciente"]

respuesta: "represion"
tipo: "completar"
respuestas_validas:
  - "represion"
  - "represión"

enunciado: "Mientras que el olvido común es un proceso de pérdida de información por falta de consolidación o interferencia, la ________ es un mecanismo de defensa que consiste en la expulsión de contenidos dolorosos de la conciencia hacia el inconsciente."

explicacion: |
  La represión es un proceso dinámico donde el yo intenta mantener fuera de la conciencia aquellos pensamientos o impulsos que resultan inaceptables o angustiantes.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["inconsciente", "represion"]

respuesta: verdadero
tipo: vf

enunciado: "Según el psicoanálisis, los contenidos reprimidos permanecen en el inconsciente y pueden manifestarse a través de síntomas o sueños, manteniendo su carga afectiva."

explicacion: |
  Correcto. El contenido reprimido no es simplemente "olvidado", sino que permanece activo en la psique, buscando una vía de expresión.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "avanzado"
  tags: ["inconsciente", "preconsciente", "freud"]

opciones_explicitas: ["El preconsciente es accesible con esfuerzo, mientras que el inconsciente es inaccesible por naturaleza.", "El inconsciente es solo memoria a corto plazo.", "El preconsciente y el inconsciente son términos sin distinción funcional."]

respuesta: "El preconsciente es accesible con esfuerzo, mientras que el inconsciente es inaccesible por naturaleza."
tipo: "mc"

enunciado: "¿Cuál es la principal distinción entre el contenido preconsciente y el contenido inconsciente en la teoría freudiana?"

explicacion: |
  El preconsciente contiene información que no está en la conciencia en este momento pero que puede ser recuperada fácilmente (como un número de teléfono), mientras que el inconsciente contiene contenidos reprimidos de difícil acceso.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["mecanismos_de_defensa", "represion"]

respuesta: "represion"
tipo: "completar"
respuestas_validas:
  - "represion"
  - "represión"

enunciado: "Cuando un individuo experimenta angustia debido a un conflicto entre un impulso y una norma moral, el yo utiliza la ________ para evitar el malestar."

pasos:
  - "Identificar el conflicto psíquico."
  - "Reconocer la función de defensa del yo."

explicacion: |
  La represión actúa como un escudo ante la angustia que produciría la consciencia de un deseo incompatible con la moralidad.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["procesos", "inconsciente", "represion"]

opciones_explicitas: ["Represión", "Inconsciente", "Síntoma"]

respuesta_orden: ["Represión", "Inconsciente", "Síntoma"]
tipo: "ordenar"

enunciado: "Ordene la secuencia lógica del proceso dinámico que explica cómo un trauma se manifiesta en la clínica psicoanalítica:"

explicacion: |
  El proceso comienza con la represión del trauma (envío al inconsciente), lo que genera un conflicto que finalmente se manifiesta a través de un síntoma.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["psicoanalisis", "represion", "inconsciente"]

variables:
  escenario: uno_de([["Un trauma infantil severo que el sujeto no recuerda pero que genera ansiedad constante.", "represion"], ["Un nombre olvidado momentáneamente durante una conversación.", "olvido_comun"], ["La incapacidad de recordar un evento traumático por una lesión cerebral.", "amnesia_organica"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["represion", "olvido_comun", "amnesia_organica"]

enunciado: "En un proceso psicoanalítico, si un sujeto presenta {escenario[0]}, el mecanismo de defensa que ha actuado para mantener ese contenido fuera de la conciencia es la ___."

explicacion: |
  La represión es un mecanismo de defensa que consiste en excluir de la conciencia aquellos pensamientos, impulsos o recuerdos que resultan perturbadores o dolorosos para el yo.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["inconsciente", "teoria_psicoanalitica"]

respuesta: verdadero
tipo: vf

enunciado: "Desde la perspectiva psicoanalítica, el inconsciente es un sistema dinámico que contiene contenidos mentales (deseos, impulsos, recuerdos reprimidos) que, aunque inaccesibles a la conciencia de forma directa, ejercen influencia en la conducta y la vida psíquica."

explicacion: |
  Para el psicoanálisis, el inconsciente no es solo un depósito pasivo, sino un sistema activo que presiona constantemente hacia la conciencia.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "avanzado"
  tags: ["retorno_de_lo_reprimido", "sintoma"]

variables:
  caso: uno_de([["Un lapsus linguae (error al hablar) que revela un deseo oculto.", "lapsus"], ["Un sueño recurrente con un tema conflictivo.", "sueño"], ["Un síntoma físico sin causa médica aparente.", "sintoma"]])

respuesta: caso[1]
tipo: completar
respuestas_validas:
  - "lapsus"
  - "sueño"
  - "sintoma"

enunciado: "Cuando un contenido reprimido intenta manifestarse en la conciencia de forma distorsionada, se produce el 'retorno de lo reprimido'. Un ejemplo de esto es el ___."

explicacion: |
  Los lapsus, los sueños y los síntomas son formas en las que el contenido inconsciente logra burlar la censura para manifestarse.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["olvido", "represion"]

variables:
  textos: ["El olvido es un proceso de pérdida de información, mientras que la represión es un proceso de exclusión activa.", "El olvido es un proceso de exclusión activa, mientras que la represión es un proceso de pérdida de información."]
  valores: [verdadero, falso]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf

enunciado: "Respecto a la distinción entre olvido y represión, ¿es correcto afirmar que: {textos[idx]}?"

explicacion: |
  El olvido suele ser un fallo en la recuperación o almacenamiento, mientras que la represión implica una lucha del Yo contra un impulso que busca ser reprimido.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "avanzado"
  tags: ["metodo_psicoanalitico", "secuencia"]

respuesta_orden: ["Conflicto", "Represión", "Manifestación"]
tipo: ordenar
opciones_explicitas: ["Conflicto", "Represión", "Manifestación"]

enunciado: "Ordene la secuencia lógica de la formación de un síntoma desde la perspectiva del conflicto psíquico:"

pasos:
  - "El conflicto surge entre el impulso y la defensa."
  - "La defensa actúa para mantener el impulso fuera de la conciencia."
  - "El contenido reprimido aparece de forma distorsionada."

explicacion: |
  La secuencia implica: 1. Conflicto (impulso vs censura), 2. Represión (la acción de excluir) y 3. Manifestación (el síntoma o retorno de lo reprimido).
```

## Sección: psicologia-cognitiva-percepcion-memoria-atencion (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_percepcion"
  nivel: "basico"
  tags: ["percepcion", "procesos_mentales"]

respuesta: "percepción"
tipo: completar
respuestas_validas:
  - "percepción"
  - "percepcion"

enunciado: "El proceso mediante el cual el cerebro organiza e interpreta la información sensorial para darle un significado es la ___."

explicacion: |
  La percepción no es solo recibir estímulos (sensación), sino el proceso cognitivo de interpretación de esos datos.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_memoria"
  nivel: "basico"
  tags: ["memoria", "modelo_multialmacen"]

opciones_explicitas: ["Memoria Sensorial", "Memoria a Corto Plazo", "Memoria a Largo Plazo"]
respuesta: "Memoria a Corto Plazo"
tipo: mc

enunciado: "Según el modelo de Atkinson y Shiffrin, el sistema que permite retener una cantidad limitada de información durante un periodo breve es la ___."

explicacion: |
  La memoria a corto plazo actúa como un espacio de trabajo temporal antes de que la información sea consolidada en la memoria a largo plazo.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_atencion"
  nivel: "intermedio"
  tags: ["atencion", "foco"]

respuesta: verdadero
tipo: vf

enunciado: "¿La atención selectiva es la capacidad de concentrarse en un estímulo específico ignorando otros estímulos irrelevantes?"

explicacion: |
  Efectivamente, la atención selectiva permite filtrar la información para evitar la sobrecarga cognitiva.
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_memoria"
  nivel: "intermedio"
  tags: ["codificacion", "almacenamiento", "recuperacion"]

opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]
respuesta_orden: ["Codificación", "Almacenamiento", "Recuperación"]
tipo: ordenar

enunciado: "Ordene las fases del proceso de memoria desde la entrada del estímulo hasta su salida:"

explicacion: |
  El ciclo de la memoria requiere primero transformar el estímulo (codificación), guardarlo (almacenamiento) y luego acceder a él (recuperación).
```

```
metadata:
  materia: "psicologia"
  tema: "psicologia_cognitiva_aprendizaje"
  nivel: "basico"
  tags: ["aprendizaje", "cambio"]

tipo: mc

opciones_explicitas: ["Un cambio relativamente permanente en la conducta o las representaciones mentales como resultado de la experiencia", "Un cambio temporal debido a la fatiga o el estado de ánimo", "Una respuesta puramente refleja sin participación cognitiva", "Un proceso exclusivamente biológico sin relación con la experiencia"]

pasos:
  - "Identificar la definición clásica de aprendizaje."

enunciado: "En psicología cognitiva, ¿cómo se define fundamentalmente el aprendizaje?"

respuesta: "Un cambio relativamente permanente en la conducta o las representaciones mentales como resultado de la experiencia"

explicacion: |
  El aprendizaje implica un cambio relativamente permanente en la conducta o en las representaciones mentales como resultado de la experiencia.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_trabajo"
  nivel: "intermedio"
  tags: ["cognicion", "memoria"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El sujeto debe retener una secuencia de números para realizar una operación mental.", "retener"], ["El sujeto debe manipular mentalmente una lista de palabras para categorizarlas.", "manipular"]]

enunciado: "Un estudiante está realizando una tarea de {datos[escenario_idx][0]}. En este proceso, la capacidad de mantener la información activa para su procesamiento inmediato se denomina memoria de trabajo. La función principal de este componente es ___ la información."

respuestas_validas:
  - "manipular"
  - "procesar"
respuesta: "manipular"
tipo: completar

explicacion: |
  La memoria de trabajo no es solo un almacén pasivo, sino un sistema dinámico que permite la manipulación de la información necesaria para tareas cognitivas complejas.
```

```
metadata:
  materia: "psicologia"
  tema: "percepcion_procesamiento"
  nivel: "intermedio"
  tags: ["percepcion", "atencion"]

variables:
  caso_idx: uno_de([0, 1])
  ejemplos: [["Ver una mancha roja en un papel blanco y reconocerla como una manzana debido a la experiencia previa.", "top-down"], ["Detectar el color rojo de un objeto basándose únicamente en la estimulación de los fotorreceptores.", "bottom-up"]]

enunciado: "Analicemos el siguiente caso: {ejemplos[caso_idx][0]}. Este tipo de procesamiento, donde los conocimientos previos y las expectativas influyen en la interpretación de los estímulos, se denomina procesamiento ___."

opciones_explicitas: ["top-down", "bottom-up", "perceptual", "sensorial"]
respuesta: "top-down"
tipo: mc

explicacion: |
  El procesamiento top-down (de arriba hacia abajo) ocurre cuando nuestros procesos cognitivos de alto nivel (conocimiento, expectativas) guían la percepción de los estímulos sensoriales.
```

```
metadata:
  materia: "psicologia"
  tema: "atencion_selectiva"
  nivel: "basico"
  tags: ["atencion", "interferencia"]

enunciado: "En el Test de Stroop, se presenta la palabra 'AZUL' escrita en tinta de color rojo. El sujeto debe decir el color de la tinta, no leer la palabra. Esto genera una interferencia porque la lectura es un proceso automático que compite con la atención selectiva al color. ¿Es verdadero que este fenómeno demuestra la existencia de procesos automáticos que interfieren con procesos controlados?"

respuesta: verdadero
tipo: vf

explicacion: |
  El efecto Stroop es un ejemplo clásico de cómo la automatización de procesos (como la lectura) puede dificultar la ejecución de una tarea controlada (nombrar el color).
```

```
metadata:
  materia: "psicologia"
  tema: "aprendizaje_memoria"
  nivel: "avanzado"
  tags: ["aprendizaje", "codificacion"]

enunciado: "Para que un aprendizaje sea consolidado, la información debe atravesar una serie de etapas secuenciales. Ordene el proceso desde que el estímulo llega al sistema hasta que se estabiliza en la memoria a largo plazo:"

opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]
respuesta_orden: ["Codificación", "Almacenamiento", "Recuperación"]
tipo: ordenar

explicacion: |
  El proceso de memoria sigue una secuencia lógica: primero se codifica la información (transformación del estímulo), luego se almacena (mantenimiento) y finalmente se recupera (acceso a la información).
```

```
metadata:
  materia: "psicologia"
  tema: "modelos_memoria"
  nivel: "intermedio"
  tags: ["memoria", "procesamiento"]

variables:
  tarea_idx: uno_de([0, 1])
  escenarios: ["el reflejo visual que queda unos milisegundos tras ver un flash de luz", "el eco de un sonido que persiste apenas un instante después de escucharlo"]

enunciado: "Un sujeto experimenta {escenarios[tarea_idx]}. Si el sujeto no presta atención a este estímulo, la información se pierde casi instantáneamente de la memoria ___."

opciones_explicitas: ["sensorial", "a corto plazo", "a largo plazo", "semántica"]
respuesta: "sensorial"
tipo: mc

explicacion: |
  La memoria sensorial es el primer nivel de procesamiento; retiene la información física del estímulo por un tiempo extremadamente breve (milisegundos a segundos) antes de que pase a la memoria de corto plazo mediante la atención.
```

```
metadata:
  materia: "psicologia"
  tema: "percepcion_sensacion"
  nivel: "basico"
  tags: ["percepcion", "procesos_mentales"]

respuesta: falso
tipo: vf

enunciado: "La percepción es un proceso puramente fisiológico que ocurre exclusivamente en los órganos sensoriales, sin intervención de los procesos mentales superiores."

explicacion: |
  La sensación es el proceso fisiológico de captar estímulos, mientras que la percepción es el proceso psicológico de organizar e interpretar dicha información sensorialmente captada.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_procesos"
  nivel: "intermedio"
  tags: ["memoria", "errores_comunes"]

opciones_explicitas: ["memoria_sensorial", "memoria_de_trabajo", "memoria_a_largo_plazo", "memoria_episodica"]

respuesta: "memoria_sensorial"
tipo: mc

enunciado: "Si una persona es capaz de retener una imagen visual por apenas unos milisegundos antes de que se desvanezca, ¿qué tipo de memoria está utilizando?"

explicacion: |
  La memoria sensorial es el sistema que retiene la información sensorial por un periodo muy breve (milisegundos) antes de que sea procesada o perdida.
```

```
metadata:
  materia: "psicologia"
  tema: "atencion_selectiva"
  nivel: "intermedio"
  tags: ["atencion", "filtro"]

respuesta: "El filtro atencional"
tipo: completar
respuestas_validas:
  - "El filtro atencional"
  - "Filtro atencional"
  - "filtro atencional"

enunciado: "En el modelo de atención de Broadbent, la capacidad de procesar solo una parte de la información sensorial mientras se ignoran otros estímulos se debe a la existencia de ___."

explicacion: |
  El modelo de filtro sugiere que existe un mecanismo que selecciona la información relevante y bloquea el resto para evitar la sobrecarga cognitiva.
```

```
metadata:
  materia: "psicologia"
  tema: "aprendizaje_procesamiento"
  nivel: "avanzado"
  tags: ["aprendizaje", "memoria"]

opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]
respuesta_orden: ["Codificación", "Almacenamiento", "Recuperación"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas necesarias para que un proceso de aprendizaje sea efectivo en el sistema de memoria:"

explicacion: |
  El aprendizaje requiere primero codificar la información, luego almacenarla en la memoria y, finalmente, ser capaz de recuperarla cuando sea necesario.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_reconstruccion"
  nivel: "intermedio"
  tags: ["memoria", "errores"]

respuesta: "falso"
tipo: completar
enunciado: "La memoria humana funciona como una grabación de video exacta que permite reproducir los eventos pasados sin alteraciones ni distorsiones."

explicacion: |
  La memoria es un proceso reconstructivo, no reproductivo. Esto significa que cada vez que recordamos, reconstruimos la información, lo que la hace susceptible a errores, sesgos y falsos recuerdos.
```

```
metadata:
  materia: "psicologia"
  tema: "percepcion_sensacion"
  nivel: "basico"
  tags: ["percepcion", "sensacion", "procesos_mentales"]

tipo: mc
opciones_explicitas: ["La sensación es la interpretación de los estímulos, mientras que la percepción es la recepción de energía física.", "La percepción es la interpretación de los estímulos, mientras que la sensación es la recepción de energía física.", "Ambos términos son sinónimos en la psicología cognitiva.", "La sensación requiere procesos cognitivos superiores y la percepción es puramente fisiológica."]

respuesta: "La percepción es la interpretación de los estímulos, mientras que la sensación es la recepción de energía física."

enunciado: "En psicología cognitiva, ¿cuál es la distinción fundamental entre sensación y percepción?"

explicacion: |
  La sensación es el proceso fisiológico de recibir estímulos a través de los receptores sensoriales, mientras que la percepción es el proceso psicológico de organizar e interpretar esa información para darle significado.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_cognitiva"
  nivel: "intermedio"
  tags: ["memoria", "atencion", "carga_cognitiva"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["manteniendo activamente en mente el número de teléfono de un amigo mientras lo marca", "memoria de trabajo"], ["recordando el nombre de la capital de un país que aprendió hace años", "memoria a largo plazo"]]

tipo: completar
respuestas_validas:
  - "memoria de trabajo"
  - "memoria a largo plazo"
respuesta: escenarios[escenario_idx][1]

enunciado: "Si una persona está {escenarios[escenario_idx][0]}, el proceso mental predominante que está utilizando para gestionar esa información es la ___."

explicacion: |
  La memoria de trabajo es un sistema de capacidad limitada que mantiene y manipula la información necesaria para tareas cognitivas complejas en el momento presente.
```

```
metadata:
  materia: "psicologia"
  tema: "atencion_procesos"
  nivel: "basico"
  tags: ["atencion", "filtro", "multitarea"]

tipo: vf
respuesta: falso

enunciado: "¿Es cierto que la atención dividida es la capacidad de procesar un único estímulo de manera profunda mientras se ignoran otros estímulos irrelevantes?"

explicacion: |
  Falso. La capacidad de enfocarse en un solo estímulo ignorando otros es la atención selectiva. La atención dividida es la capacidad de procesar múltiples fuentes de información o realizar dos o más tareas simultáneamente.
```

```
metadata:
  materia: "psicologia"
  tema: "aprendizaje_conductual"
  nivel: "intermedio"
  tags: ["aprendizaje", "condicionamiento", "conducta"]

tipo: mc
opciones_explicitas: ["El clásico se basa en la asociación de estímulos, mientras que el operante se basa en las consecuencias de la conducta.", "El operante se basa en la asociación de estímulos, mientras que el clásico se basa en las consecuencias de la conducta.", "El clásico requiere refuerzos para ocurrir, mientras que el operante es automático.", "Ambos requieren la presencia de un estímulo incondicionado."]

respuesta: "El clásico se basa en la asociación de estímulos, mientras que el operante se basa en las consecuencias de la conducta."

enunciado: "Al comparar ambos procesos, ¿qué distingue fundamentalmente al condicionamiento operante del condicionamiento clásico?"

explicacion: |
  En el condicionamiento clásico, el sujeto es pasivo y aprende por asociación de estímulos; en el operante, el sujeto es activo y la probabilidad de la conducta cambia según las consecuencias (refuerzos o castigos) que le siguen.
```

```
metadata:
  materia: "psicologia"
  tema: "procesamiento_informacion"
  nivel: "avanzado"
  tags: ["memoria", "codificacion", "recuperacion"]

tipo: ordenar
opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]
respuesta_orden: ["Codificación", "Almacenamiento", "Recuperación"]

enunciado: "Ordene cronológicamente las etapas del proceso de memoria según el modelo de procesamiento de la información:"

explicacion: |
  El proceso comienza con la codificación (transformación del estímulo en un código mental), seguido del almacenamiento (mantenimiento de la información en el sistema) y finaliza con la recuperación (acceso a la información almacenada).
```

```
metadata:
  materia: "psicologia"
  tema: "atencion_selectiva"
  nivel: "intermedio"
  tags: ["atencion", "percepcion"]

variables:
  datos: [["Estás en una fiesta ruidosa y logras seguir la conversación de tu amigo", "atencion_selectiva"], ["Estás leyendo un libro y de repente escuchas tu nombre a lo lejos", "atencion_involuntaria"], ["Estás buscando tus llaves en una mesa desordenada", "atencion_sostenida"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
enunciado: "En el escenario donde {datos[idx][0]}, el proceso cognitivo predominante es la ___."

explicacion: |
  La atención selectiva permite filtrar estímulos irrelevantes para concentrarse en uno específico, como en el efecto 'cocktail party'.
```

```
metadata:
  materia: "psicologia"
  tema: "memoria_trabajo"
  nivel: "intermedio"
  tags: ["memoria", "carga_cognitiva"]

respuesta: "7"
tipo: completar
respuestas_validas:
  - "7"
  - "7 ± 2"
  - "5 a 9"

enunciado: "Según el 'número mágico' propuesto por Miller, la capacidad promedio de elementos que la memoria de trabajo puede retener simultáneamente es de ___ (más o menos 2)."

explicacion: |
  La memoria de trabajo tiene una capacidad limitada: el número mágico de Miller es 7 ± 2 elementos.
```

```
metadata:
  materia: "psicologia"
  tema: "percepcion_procesamiento"
  nivel: "avanzado"
  tags: ["percepcion", "procesamiento"]

respuesta: "top_down"
respuestas_validas:
  - "top_down"
  - "top-down"
tipo: completar
enunciado: "Si el sujeto está interpretando una sombra como un animal debido a sus expectativas o estados emocionales previos, el procesamiento es de tipo ___."

explicacion: |
  El procesamiento Top-down (de arriba hacia abajo) ocurre cuando los conocimientos previos, expectativas o motivaciones influyen en la percepción.
```

```
metadata:
  materia: "psicologia"
  tema: "aprendizaje_memoria"
  nivel: "intermedio"
  tags: ["aprendizaje", "memoria"]

respuesta_orden: ["Codificación", "Almacenamiento", "Recuperación"]
tipo: ordenar
opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]

enunciado: "Ordena correctamente las etapas del proceso de memoria que permiten el aprendizaje de una nueva habilidad:"

explicacion: |
  Para que ocurra el aprendizaje, la información debe ser codificada (transformada), almacenada (mantenida) y finalmente recuperada (evocada).
```

```
metadata:
  materia: "psicologia"
  tema: "percepcion_reconocimiento"
  nivel: "basico"
  tags: ["percepcion", "gestalt"]

variables:
  datos: [["una letra 'A' formada por líneas separadas", "ley_cierre"], ["un círculo perfecto", "ley_continuidad"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ley_cierre", "ley_continuidad", "ley_figura_fondo"]

enunciado: "Si el sujeto percibe {datos[idx][0]} como una unidad completa a pesar de que los elementos no estén conectados, está aplicando la {datos[idx][1]}."

explicacion: |
  La Ley de Cierre de la Gestalt establece que nuestra mente tiende a completar figuras incompletas para darles sentido.
```

