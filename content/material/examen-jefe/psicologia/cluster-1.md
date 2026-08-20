# Examen jefe — Explorador de la Mente

> Logro #207. Completaste el examen sobre las corrientes psicológicas, el desarrollo humano y la construcción del autoconocimiento. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **125 preguntas totales** en 5/5 secciones.

---

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

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["la observación de los propios pensamientos", "la introspección"], ["el análisis de las reacciones ajenas", "la proyección"]]

respuesta: datos[escenario_idx][0
tipo: completar
respuestas_validas: ["la observación de los propios pensamientos", "la introspección"]

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

respuesta: ["Valores", "Emociones", "Creencias", "Capacidades"]
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

variables:
  caso_idx: uno_de([0, 1])
  casos: [["un proceso de transformación constante", "un dato estático y definitivo"]]

respuesta: casos[caso_idx][0
tipo: completar
respuestas_validas: ["un proceso de transformación constante", "un dato estático y definitivo"]

enunciado: "Debido a que el ser humano es un ser histórico y cambiante, el autoconocimiento debe entenderse como ___."

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
  escenario_idx: uno_de([0, 1])
  datos: [[["Julián valoraba el éxito profesional por el estatus.", "estatus"], ["Julián valoraba la estabilidad para su familia.", "familia"]]]

enunciado: "Consideremos el caso de una persona cuyas prioridades cambian con el tiempo. Si Julián hoy siente que su motivación principal es {datos[escenario_idx][0]}, su autoconocimiento es un proceso que refleja su evolución actual."

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
respuesta: ["Observar una emoción", "Analizar el origen de la emoción", "Integrar el aprendizaje en la conducta"]
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
respuestas_validas: ["un proceso", "un camino", "una búsqueda"]

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
  escenarios: [
    ["Soy una persona extremadamente tímida y siempre lo seré.", "Soy una persona muy ansiosa ante el estrés."],
    ["Soy un líder nato y no puedo cambiar mi forma de actuar.", "Soy alguien que siempre reacciona con ira."]
  ]

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

respuesta: ["Reconocimiento de emociones", "Identificación de patrones de conducta", "Juicio crítico y autocrítica", "Aceptación de la propia historia"]
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
respuestas_validas: ["construcción"]

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

respuesta: "ambos"
tipo: mc

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
respuestas_validas: ["proceso", "dinámico"]

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
  escenarios: [
    ["La persona cambia sus valores tras una crisis", "evolución"],
    ["La persona descubre un nuevo talento en la adultez", "evolución"]
  ]

respuesta: escenarios[escenario_idx][1
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

respuesta: ["Observación de reacciones", "Reflexión sobre motivos", "Integración de aprendizajes"]
tipo: "ordenar"
opciones_explicitas: ["Observación de reacciones", "Reflexión sobre motivos", "Integración de aprendizajes", "Reacción impulsiva"]

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

respuesta: "verdadero"
tipo: "vf"

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

respuestas_validas: ["evolución", "cambio"]
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

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Falso"
tipo: completar
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
respuesta: ["Percepción de emociones", "Análisis de patrones", "Integración de la identidad"]
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
  ejemplos: [["'Soy una persona ansiosa' (como etiqueta definitiva)", "etiqueta"], ["'Siento ansiedad en este momento' (como estado temporal)", "estado"]]

enunciado: "Si una persona dice: '{ejemplos[ejemplo_idx][0]}', está cometiendo el error de confundir su ___ con su ___."

respuestas_validas: ["esencia", "estado"]
respuesta: "esencia"
tipo: completar

explicacion: |
  Confundir un estado transitorio con la esencia del ser es el principal obstáculo para entender el autoconocimiento como un proceso fluido.
```

## Sección: corrientes-psicologicas-psicoanalisis-conductismo-humanismo-cognitivismo (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["psicoanalisis", "inconsciente"]

respuesta: "psicoanalisis"
tipo: completar
respuestas_validas: ["psicoanalisis"]

enunciado: "La corriente psicológica que postula la existencia de procesos mentales inconscientes que determinan la conducta humana se denomina ___."

explicacion: |
  El psicoanálisis, fundado por Sigmund Freud, sostiene que gran parte de nuestra conducta está impulsada por deseos, recuerdos y conflictos alojados en el inconsciente.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["conductismo", "estímulo", "respuesta"]

variables:
  escenario: uno_de([["estímulo", "respuesta"], ["estímulo", "reacción"], ["estímulo", "consecuencia"]])
  opcion_correcta: "estímulo"
  opcion_incorrecta: "respuesta"

respuesta: "estímulo"
tipo: mc
opciones_explicitas: ["estímulo", "respuesta", "pensamiento", "emoción"]

enunciado: "En el conductismo radical, la unidad básica de análisis es la relación entre un ___ y una respuesta observada."

explicacion: |
  El conductismo se centra en la conducta observable y la relación entre un estímulo (E) y una respuesta (R), dejando de lado los procesos mentales internos por no ser medibles.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["humanismo", "autorrealizacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿El humanismo psicológico se caracteriza por centrarse en el potencial de crecimiento personal y la autorrealización del individuo?"

explicacion: |
  A diferencia de otras corrientes, el humanismo (Maslow, Rogers) tiene una visión positiva del ser humano, enfocándose en su capacidad de alcanzar su máximo potencial.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["cognitivismo", "metáfora", "computación"]

respuesta: "metáfora del ordenador"
tipo: completar
respuestas_validas: ["metáfora del ordenador", "metáfora de la máquina"]
enunciado: "El cognitivismo utiliza la ___ para explicar cómo la mente recibe, codifica, almacena y recupera la información."

explicacion: |
  La psicología cognitiva surge con la idea de que la mente funciona de manera análoga a un procesador de información, utilizando la metáfora del ordenador.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["historia", "orden"]

respuesta: ["conductismo", "cognitivismo", "humanismo"]
tipo: ordenar
opciones_explicitas: ["conductismo", "cognitivismo", "humanismo"]

enunciado: "Ordena cronológicamente estas corrientes según su predominio o surgimiento principal en la historia de la psicología moderna (del más antiguo al más reciente):"

pasos:
  - "Identifica el predominio del conductismo en la primera mitad del siglo XX."
  - "Ubica la revolución cognitiva a mediados del siglo XX."
  - "Considera el auge del enfoque humanista como la 'tercera fuerza'."

explicacion: |
  El conductismo dominó la primera mitad del siglo XX; el cognitivismo surgió como respuesta a sus limitaciones en los años 50/60; y el humanismo se consolidó como la 'tercera fuerza' alternativa a ambos.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["conductismo", "condicionamiento"]

variables:
  escenario: uno_de([
    ["Un niño asocia el sonido de un timbre con un pinchazo en el brazo.", "condicionamiento_clasico"],
    ["Un estudiante estudia solo cuando hay silencio absoluto para evitar distracciones.", "condicionamiento_operante"],
    ["Un perro busca comida porque sabe que al sonar una campana recibirá un premio.", "condicionamiento_operante"]
  ])

enunciado: "En el caso de que {escenario[0]}, estamos ante un ejemplo de {escenario[1]}."

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["condicionamiento_clasico", "condicionamiento_operante", "procesos_inconscientes"]

explicacion: |
  El conductismo clásico (Pavlov) se centra en la asociación de estímulos, mientras que el operante (Skinner) se centra en la consecuencia de la conducta.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["psicoanalisis", "inconsciente"]

respuesta: verdadero
tipo: vf

enunciado: "Desde la perspectiva del psicoanálisis, un síntoma como un olvido repentino de un nombre importante puede ser interpretado como una manifestación de un deseo o conflicto reprimido en el inconsciente."

explicacion: |
  El psicoanálisis postula que gran parte de la conducta humana está determinada por procesos inconscientes y conflictos no resueltos.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["cognitivismo", "metáfora_computacional"]

variables:
  ejemplo_cognitivo: uno_de([
    ["La forma en que una persona interpreta un gesto de un amigo como un insulto.", "interpretacion"],
    ["La forma en que un conductor procesa señales de tráfico para evitar un choque.", "procesamiento"]
  ])

enunciado: "En el modelo del cognitivismo, la mente es comparada con una computadora. Si analizamos {ejemplo_cognitivo[0]}, nos centramos en el ___ de la información."

respuesta: "procesamiento"
tipo: completar
respuestas_validas: ["procesamiento"]

explicacion: |
  El cognitivismo estudia los procesos mentales internos (percepción, memoria, lenguaje) como flujos de información similares al procesamiento de datos.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["humanismo", "maslow"]

variables:
  caso_humanista: uno_de([
    ["Un paciente busca terapia para alcanzar su máximo potencial personal.", "autorrealizacion"],
    ["Un paciente busca terapia para mejorar su autoestima y sentirse aceptado.", "pertenencia"]
  ])

enunciado: "Según el enfoque humanista, si el objetivo principal de una persona es {caso_humanista[0]}, está buscando la ___."

respuesta: "autorrealizacion"
tipo: completar
respuestas_validas: ["autorrealizacion"]

explicacion: |
  El humanismo se enfoca en la autorrealización y el crecimiento personal, viendo al individuo como alguien con tendencia innata hacia la plenitud.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "avanzado"
  tags: ["metodologia", "comparativa"]

variables:
  metodo_orden: uno_de([
    ["Observar la conducta, identificar el estímulo, analizar la respuesta", "paso1_paso2_paso3"],
    ["Escuchar el sueño, analizar el lapsus, buscar el trauma", "paso1_paso2_paso3"]
  ])

enunciado: "Para realizar un estudio clínico, un psicólogo debe seguir una secuencia lógica de pasos. Ordena los siguientes elementos según el enfoque conductista: 1. Estímulo, 2. Respuesta, 3. Consecuencia."

respuesta: ["Estímulo", "Respuesta", "Consecuencia"]
tipo: ordenar
opciones_explicitas: ["Estímulo", "Respuesta", "Consecuencia", "Inconsciente", "Trauma"]

explicacion: |
  El modelo conductista se basa en la secuencia E-R-C (Estímulo-Respuesta-Consecuencia).
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["psicoanalisis", "concepto"]

respuesta: "inconsciente"
tipo: completar
respuestas_validas: ["inconsciente"]

enunciado: "A diferencia de otras corrientes que se centran en la conducta observable, el psicoanálisis postula que el motor principal de la conducta humana son los procesos del ___."

explicacion: |
  El psicoanálisis, fundado por Freud, sostiene que la mayor parte de nuestra vida mental ocurre en el inconsciente, influyendo en nuestras decisiones y emociones sin que nos demos cuenta.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["conductismo", "cognitivismo"]

variables:
  es_conductista: uno_de([verdadero, falso])

respuesta: es_conductista == falso
tipo: completar
enunciado: "Un psicólogo conductista clásico se centraría exclusivamente en los procesos mentales internos (como el pensamiento o la memoria) para explicar la conducta, ignorando el estímulo y la respuesta."

explicacion: |
  Falso. El conductismo se centra en la conducta observable y la relación entre estímulo y respuesta, rechazando (en sus versiones más estrictas) el estudio de los procesos mentales internos por no ser medibles objetivamente.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["humanismo", "enfoque"]

opciones_explicitas: ["Determinismo biológico/ambiental", "Autorrealización y potencial humano", "Procesamiento de información"]

respuesta: opciones_explicitas[1
tipo: mc

enunciado: "El humanismo se distingue de otras corrientes por su visión optimista del ser humano, centrándose en la capacidad de ___."

explicacion: |
  A diferencia del psicoanálisis (motivado por impulsos inconscientes) o el conductismo (motivado por el entorno), el humanismo pone el foco en la capacidad de crecimiento y autorrealización del individuo.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["cognitivismo", "metáfora"]

respuesta: "procesamiento de información"
tipo: completar
respuestas_validas: ["procesamiento de información"]

enunciado: "La revolución cognitiva introdujo la metáfora del ordenador para entender la mente, comparando la actividad mental con el ___."

explicacion: |
  El cognitivismo estudia cómo la mente codifica, almacena y recupera la información, de manera análoga a como un ordenador procesa datos.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["historia", "cronologia"]

opciones_explicitas: ["Psicoanálisis", "Conductismo", "Humanismo", "Cognitivismo"]

respuesta: ["Psicoanálisis", "Conductismo", "Humanismo", "Cognitivismo"]
tipo: ordenar

enunciado: "Ordene cronológicamente las corrientes psicológicas según su surgimiento y predominio en la historia de la psicología:"

explicacion: |
  El Psicoanálisis surgió a finales del siglo XIX; el Conductismo dominó la primera mitad del XX; el Humanismo emergió a mediados del XX como reacción al determinismo; y el Cognitivismo se consolidó en la segunda mitad del siglo XX.
```

```
metadata:
  materia: "psicologia"
  tema: "psicoanalisis"
  nivel: "basico"
  tags: ["psicoanalisis", "inconsciente"]

respuesta: "inconsciente"
tipo: completar
respuestas_validas: ["inconsciente"]

enunciado: "A diferencia de la psicología de la conciencia, el psicoanálisis postula que la mayor parte de la actividad mental ocurre en el ___."

explicacion: |
  El psicoanálisis, fundado por Freud, se centra en los procesos mentales que no son accesibles a la conciencia inmediata, denominándolos procesos inconscientes.
```

```
metadata:
  materia: "psicologia"
  tema: "conductismo"
  nivel: "basico"
  tags: ["conductismo", "conducta"]

variables:
  es_conductismo: verdadero

respuesta: es_conductismo
tipo: completar
enunciado: "El conductismo radical se distingue de otras corrientes por centrarse exclusivamente en la conducta observable, rechazando el estudio de los procesos mentales internos como objeto de la psicología científica."

explicacion: |
  El conductismo (especialmente el de Watson) sostiene que para que la psicología sea una ciencia objetiva, debe limitarse al estudio de la conducta observable y su relación con el entorno, evitando la introspección.
```

```
metadata:
  materia: "psicologia"
  tema: "humanismo"
  nivel: "intermedio"
  tags: ["humanismo", "psicoanalisis", "comparacion"]

variables:
  escenario: uno_de([
    ["visión determinista del pasado", "visión optimista del potencial humano"],
    ["énfasis en la patología", "énfasis en el crecimiento personal"],
    ["foco en los impulsos reprimidos", "foco en la autorrealización"]
  ])

respuesta: escenario[0][1
tipo: mc
opciones_explicitas: [escenario[0][0], escenario[0][1]]

enunciado: "Mientras que el psicoanálisis suele tener una visión determinista basada en los conflictos del pasado, el humanismo se distingue por una ___."

explicacion: |
  El humanismo (Rogers, Maslow) se enfoca en la capacidad del individuo para el crecimiento y la autorrealización, contrastando con el enfoque clínico-patológico del psicoanálisis.
```

```
metadata:
  materia: "psicologia"
  tema: "cognitivismo"
  nivel: "intermedio"
  tags: ["cognitivismo", "metáfora-computacional"]

respuesta: "procesamiento de información"
tipo: completar
respuestas_validas: ["procesamiento de información"]

enunciado: "El cognitivismo se diferencia del conductismo al proponer que entre el estímulo y la respuesta existen procesos mentales complejos, utilizando la metáfora del ___."

explicacion: |
  La psicología cognitiva utiliza la analogía de la computadora para explicar cómo la mente recibe, codifica, almacena y recupera información.
```

```
metadata:
  materia: "psicologia"
  tema: "evolucion_corrientes"
  nivel: "avanzado"
  tags: ["historia", "conductismo", "cognitivismo"]

respuesta: ["Conductismo", "Cognitivismo", "Neurociencia Cognitiva"]
tipo: ordenar
opciones_explicitas: ["Conductismo", "Cognitivismo", "Neurociencia Cognitiva"]

enunciado: "Ordene cronológicamente el predominio de estas corrientes/enfoques en la psicología científica, desde el inicio del siglo XX hasta la actualidad:"

explicacion: |
  El conductismo dominó la primera mitad del siglo XX; la revolución cognitiva surgió en los años 50-60; y la neurociencia cognitiva es el enfoque contemporáneo que integra procesos mentales con bases biológicas.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["conductismo", "aprendizaje"]

variables:
  datos: [["Un niño recibe un dulce cada vez que recoge sus juguetes.", "refuerzo positivo"], ["Un estudiante deja de jugar videojuegos tras recibir un regaño constante.", "castigo"]]
  idx: uno_de([0, 1])

enunciado: "En el escenario donde {datos[idx][0]}, estamos ante un proceso de {datos[idx][1]} según el conductismo."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["refuerzo positivo", "castigo"]

explicacion: |
  El conductismo se enfoca en la relación entre estímulos y respuestas. En este caso, la consecuencia aumenta la probabilidad de la conducta (refuerzo) o la disminuye (castigo).
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["psicoanalisis", "inconsciente"]

enunciado: "Un terapeuta que busca interpretar los sueños de un paciente y analizar los lapsus linguae para acceder a contenidos reprimidos está aplicando el método de:"

opciones_explicitas: ["Conductismo", "Psicoanálisis", "Humanismo", "Cognitivismo"]
respuesta: "Psicoanalisis"
tipo: mc

explicacion: |
  El psicoanálisis, fundado por Freud, sostiene que la conducta humana está determinada por impulsos y deseos inconscientes.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["humanismo", "maslow"]

enunciado: "¿Es el enfoque humanista una corriente que se centra en la capacidad de crecimiento personal y la autorrealización del individuo?"

respuesta: verdadero
tipo: vf

explicacion: |
  El humanismo (Rogers, Maslow) se diferencia por su visión optimista del ser humano y su enfoque en la autorrealización.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["cognitivismo", "procesos_mentales"]

variables:
  datos: [["Cómo la memoria almacena datos", "procesamiento"], ["Cómo el lenguaje decodifica símbolos", "procesamiento"]]
  idx: uno_de([0, 1])

enunciado: "Si un psicólogo estudia {datos[idx][0]}, su enfoque principal es el {datos[idx][1]} de la información."

respuesta: "procesamiento"
tipo: completar
respuestas_validas: ["procesamiento"]

explicacion: |
  El cognitivismo utiliza la metáfora del ordenador para entender cómo la mente codifica, almacena y recupera la información.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "avanzado"
  tags: ["historia", "orden_cronologico"]

enunciado: "Ordena cronológicamente estas corrientes desde su surgimiento histórico (del más antiguo al más reciente):"

opciones_explicitas: ["Psicoanálisis", "Conductismo", "Humanismo", "Cognitivismo"]
respuesta: ["Psicoanálisis", "Conductismo", "Humanismo", "Cognitivismo"]
tipo: ordenar

explicacion: |
  El Psicoanálisis (finales XIX), el Conductismo (principios XX), el Humanismo (mediados XX) y el Cognitivismo (revolución cognitiva años 50-60).
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
respuestas_validas: ["socializacion"]

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

respuesta: falso
tipo: "vf"

enunciado: "¿Es falso que la cultura actúe como una 'herencia social' que condiciona la percepción que tenemos de la realidad?"

explicacion: |
  La afirmación es falsa porque la cultura SÍ actúa como una herencia social. La pregunta está formulada de modo que, al ser la premisa "la cultura condiciona la realidad" algo verdadero, la respuesta a la pregunta "¿Es falso que...?" debe ser 'falso'.
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

opciones_explicitas: ["Socialización secundaria", "Socialización primaria", "Socialización terciaria"]

respuesta: ["Socialización primaria", "Socialización secundaria"]
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
  escenario: uno_de([
    ["Juan creció en una cultura donde el éxito se mide por la riqueza individual.", "individualismo"],
    ["Ana creció en una cultura donde el éxito se mide por la armonía del grupo.", "colectivismo"]
  ])

enunciado: "Si una persona es formada bajo los valores de {escenario[0]}, su construcción de identidad estará marcada por el {escenario[1]}."

respuesta: escenario[1
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

variables:
  agente: uno_de(["la familia", "la escuela", "el grupo de pares"])

enunciado: "El proceso mediante el cual un individuo internaliza las normas y valores de su entorno se denomina socialización. Si el primer contacto con estas normas ocurre en {agente}, estamos ante la socialización primaria."

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

respuesta_validas: ["identidad", "self", "yo"]
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
  caso: uno_de([
    ["Un individuo intenta vivir de forma totalmente aislada de cualquier norma cultural.", "aislamiento"],
    ["Un individuo adopta las tradiciones de sus padres sin cuestionarlas.", "implantacion"]
  ])

enunciado: "En el caso de {caso[0]}, el individuo sigue operando bajo estructuras lingüísticas y cognitivas heredadas de la cultura, lo que demuestra que la dependencia cultural es:"

respuesta: "inevitables"
tipo: completar
respuestas_validas: ["inevitables", "nulas", "mínimas"]

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

opciones_explicitas: [
  "Internalización de normas culturales",
  "Interacción con grupos sociales diversos",
  "Reevaluación crítica de la herencia cultural"
]
respuesta: ["Internalización de normas culturales", "Interacción con grupos sociales diversos", "Reevaluación crítica de la herencia cultural"]
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

variables:
  escenario: uno_de([
    ["el lenguaje", "la comunicación"],
    ["las normas", "la conducta"],
    ["los valores", "la moral"]
  ])

respuesta: escenario[0
tipo: completar
respuestas_validas: ["el lenguaje", "la comunicación", "las normas", "la conducta", "los valores", "la moral"]

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

respuesta: ["Internalización de normas", "Interacción con agentes sociales", "Formación de la identidad"]
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

variables:
  caso: uno_de([
    ["el individuo", "la cultura"],
    ["el sujeto", "la sociedad"]
  ])

respuesta: caso[1
tipo: completar
respuestas_validas: ["el individuo", "la cultura", "el sujeto", "la sociedad"]

enunciado: "Para que un ___ pueda desarrollar una identidad única, paradójicamente, debe primero estar profundamente arraigado en una ___ que le provea símbolos y significados."

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
respuestas_validas: ["interactividad"]

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
  escenario: uno_de([
    ["Proceso de aprendizaje de normas", "socialización"],
    ["Sentido de pertenencia y rasgos únicos", "identidad"]
  ])

respuesta: escenario[1
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

respuesta: ["Internalización de normas", "Identificación con modelos", "Construcción de la subjetividad"]
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

variables:
  caso: uno_de([
    ["el color de ojos", "biológico"],
    ["el uso de utensilios", "cultural"]
  ])

respuesta: caso[1
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
  datos: [["La cultura nos proporciona el lenguaje y las normas para pensar.", true], ["El individuo es una isla totalmente independiente de la cultura.", false]]
  idx: uno_de([0, 1])

enunciado: "Considerando que la cultura es una herencia que nos constituye, ¿es correcto afirmar que el individuo es una entidad totalmente independiente de la estructura cultural? {datos[idx][0]}"

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
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
respuesta: ["Lenguaje", "Normas sociales", "Valores morales", "Costumbres religiosas"]
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

variables:
  datos: [["El lenguaje permite la distinción entre el 'yo' y el 'otro'.", "permite"], ["El lenguaje es solo un código de comunicación sin impacto en la identidad.", "no permite"]]
  idx: uno_de([0, 1])

enunciado: "En el proceso de formación de la persona, el lenguaje como herencia cultural es aquello que ___ la distinción entre el sujeto y el mundo externo."

respuestas_validas: ["permite", "no permite"]
respuesta: datos[idx][1]
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

variables:
  datos: [["La cultura es una limitación que impide la libertad.", "limitacion"], ["La cultura es la condición de posibilidad de la subjetividad.", "condicion"]]
  idx: uno_de([0, 1])

enunciado: "Desde una perspectiva psicológica, la relación entre cultura y sujeto se comprende mejor si entendemos que la cultura es la: {datos[idx][0]}"

opciones_explicitas: ["limitacion", "condicion"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Aunque la cultura impone marcos de referencia, también es la "condición de posibilidad": sin la herencia cultural (símbolos, lenguaje, otros), no habría un sujeto con quien procesar la realidad.
```

## Sección: edades-del-ser-humano-ninez-pubertad-identidad (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "edades_del_ser_humano"
  nivel: "basico"
  tags: ["desarrollo", "etapas"]

tipo: mc
opciones_explicitas: ["Niñez", "Pubertad", "Adultez", "Senectud"]

enunciado: "La etapa caracterizada por el crecimiento físico acelerado y la maduración de los órganos reproductores se denomina ________."

respuesta: "Pubertad"

explicacion: |
  La pubertad es el periodo de transición entre la niñez y la edad adulta, marcado por cambios hormonales y físicos significativos.
```

```
metadata:
  materia: "psicologia"
  tema: "cambios_fisicos"
  nivel: "basico"
  tags: ["biologia", "pubertad"]

tipo: vf

enunciado: "Durante la pubertad, los cambios físicos son exclusivamente externos y no afectan el sistema endocrino."

respuesta: falso

explicacion: |
  Falso. La pubertad es impulsada precisamente por cambios en el sistema endocrino (hormonas) que provocan cambios tanto internos como externos.
```

```
metadata:
  materia: "psicologia"
  tema: "identidad_adolescente"
  nivel: "intermedio"
  tags: ["identidad", "psicologia_evolutiva"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Búsqueda de pertenencia a grupos", "Construcción de la autonomía personal"], ["Dependencia de la opinión parental", "Definición de valores propios"]]

tipo: completar
respuestas_validas: ["pertenencia", "autonomía", "dependencia", "valores"]

enunciado: "En la etapa de la adolescencia, el individuo suele transitar desde una etapa de {escenarios[escenario_idx][0]} hacia una fase de {escenarios[escenario_idx][1]}."

respuesta: "autonomía"

explicacion: |
  La identidad se construye mediante el proceso de diferenciación de las figuras de autoridad y la búsqueda de un sentido de autonomía.
```

```
metadata:
  materia: "psicologia"
  tema: "secuencia_desarrollo"
  nivel: "basico"
  tags: ["orden", "etapas"]

tipo: ordenar
opciones_explicitas: ["Infancia", "Niñez", "Pubertad", "Adultez"]

enunciado: "Ordene cronológicamente las etapas del desarrollo humano desde el nacimiento hasta la madurez."

respuesta: ["Infancia", "Niñez", "Pubertad", "Adultez"]

explicacion: |
  El desarrollo humano sigue una secuencia biológica y psicológica predecible de etapas sucesivas.
```

```
metadata:
  materia: "psicologia"
  tema: "identidad_personal"
  nivel: "intermedio"
  tags: ["identidad", "autoconcepto"]

tipo: mc
opciones_explicitas: ["Autoconcepto", "Identidad", "Personalidad", "Temperamento"]

enunciado: "El proceso mediante el cual una persona reconoce sus propios rasgos, valores y la continuidad de su 'yo' a través del tiempo se conoce como ________."

respuesta: "Identidad"

explicacion: |
  La identidad es la conciencia de ser uno mismo y la integración de los cambios experimentados durante el desarrollo.
```

```
metadata:
  materia: "psicologia"
  tema: "niñez"
  nivel: "basico"
  tags: ["desarrollo", "niñez"]

enunciado: "Durante la niñez, el desarrollo se caracteriza por un crecimiento físico constante y el perfeccionamiento de habilidades motoras. Si un niño de 7 años desarrolla la capacidad de seguir reglas complejas en un juego, estamos observando un avance en su desarrollo ___."

respuestas_validas: ["cognitivo", "motor", "emocional"]

respuesta: "cognitivo"
tipo: completar

explicacion: |
  El desarrollo cognitivo se refiere a la evolución de los procesos mentales como el pensamiento, la lógica y la comprensión de reglas.
```

```
metadata:
  materia: "psicologia"
  tema: "pubertad"
  nivel: "intermedio"
  tags: ["cambios_fisicos", "hormonas"]

variables:
  escenario: uno_de([
    ["Aumento de estatura y vello corporal", "cambios físicos"],
    ["Cambios en el tono de voz y estructura ósea", "cambios físicos"],
    ["Desarrollo de caracteres sexuales secundarios", "cambios físicos"]
  ])

enunciado: "En la pubertad, el sistema endocrino libera hormonas que provocan el proceso descrito como: {escenario[0]}."

opciones_explicitas: ["cambios físicos", "cambios psicológicos", "cambios sociales"]

respuesta: escenario[1
tipo: mc

explicacion: |
  La pubertad es la etapa de transición biológica donde las hormonas activan los caracteres sexuales secundarios.
```

```
metadata:
  materia: "psicologia"
  tema: "identidad"
  nivel: "avanzado"
  tags: ["identidad", "adolescencia"]

variables:
  caso: uno_de([
    ["Un adolescente que busca activamente sus valores y metas", "identidad_estable"],
    ["Un adolescente que experimenta crisis de roles constantes", "identidad_en_crisis"],
    ["Un adolescente que adopta la identidad de sus padres sin cuestionar", "identidad_difusa"]
  ])

enunciado: "Analizamos el caso de un individuo que se encuentra en la etapa de formación de la identidad. Según el modelo de desarrollo, el perfil de: {caso[0]} se clasifica como ___."

opciones_explicitas: ["identidad_estable", "identidad_en_crisis", "identidad_difusa"]

respuesta: caso[1
tipo: mc

explicacion: |
  La formación de la identidad implica la integración de la personalidad y la exploración de valores propios frente a los sociales.
```

```
metadata:
  materia: "psicologia"
  tema: "etapas_desarrollo"
  nivel: "basico"
  tags: ["secuencia", "etapas"]

opciones_explicitas: ["Infancia", "Niñez", "Pubertad", "Adultez"]

respuesta: ["Infancia", "Niñez", "Pubertad", "Adultez"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas del desarrollo humano según la psicología evolutiva:"

explicacion: |
  El desarrollo humano sigue una secuencia biológica y psicológica predecible desde el nacimiento hasta la madurez.
```

```
metadata:
  materia: "psicologia"
  tema: "identidad"
  nivel: "basico"
  tags: ["identidad", "falso"]

enunciado: "La identidad es un concepto estático que se define completamente al finalizar la niñez y no sufre cambios durante la adolescencia."

respuesta: falso
tipo: vf

explicacion: |
  La identidad es un proceso dinámico y continuo que se reconfigura constantemente, especialmente durante la transición de la pubertad a la adolescencia.
```

```
metadata:
  materia: "psicologia"
  tema: "desarrollo_identidad"
  nivel: "basico"
  tags: ["pubertad", "identidad", "desarrollo"]

respuesta: falso
tipo: vf

enunciado: "Es correcto afirmar que la identidad personal se consolida completamente durante la pubertad debido a los cambios hormonales, sin necesidad de procesos cognitivos posteriores."

explicacion: |
  La identidad es un proceso continuo que se extiende durante la adolescencia y la adultez joven. Si bien la pubertad aporta cambios biológicos que influyen en la autopercepción, la consolidación de la identidad requiere procesos psicológicos y sociales complejos que trascienden lo hormonal.
```

```
metadata:
  materia: "psicologia"
  tema: "etapas_desarrollo"
  nivel: "intermedio"
  tags: ["niñez", "pubertad", "secuencia"]

variables:
  etapas: ["Niñez", "Pubertad", "Adolescencia"]
  orden_correcto: ["Niñez", "Pubertad", "Adolescencia"]

opciones_explicitas:
  - ["Niñez", "Pubertad", "Adolescencia"]
  - ["Pubertad", "Niñez", "Adolescencia"]
  - ["Niñez", "Adolescencia", "Pubertad"]

respuesta: ["Niñez", "Pubertad", "Adolescencia"]
tipo: ordenar

enunciado: "Ordena las siguientes etapas del desarrollo humano de acuerdo a su aparición cronológica típica, considerando los cambios biológicos y la maduración de la identidad."

explicacion: |
  El desarrollo sigue una secuencia biológica y psicológica: primero la niñez (desarrollo motor y cognitivo básico), luego la pubertad (estirón y maduración sexual) y finalmente la adolescencia (reorganización de la identidad y pensamiento abstracto).
```

```
metadata:
  materia: "psicologia"
  tema: "pubertad_cambios"
  nivel: "basico"
  tags: ["pubertad", "cambios_fisicos"]

variables:
  escenario: [
    ["el aumento de la estatura y vello corporal", "cambios físicos"],
    ["la búsqueda de autonomía y pertenencia grupal", "cambios psicosociales"]
  ]
  idx: uno_de([0, 1])

respuesta: "cambios físicos"
tipo: mc

opciones_explicitas:
  - "cambios físicos"
  - "cambios psicosociales"
  - "cambios cognitivos"

enunciado: "Un error común es confundir los procesos biológicos con los procesos de identidad. Si un individuo experimenta {escenario[idx][0]}, está atravesando principalmente ___."

explicacion: |
  Es fundamental distinguir entre la maduración biológica (pubertad/cambios físicos) y la maduración de la identidad y el rol social (adolescencia/cambios psicosociales).
```

```
metadata:
  materia: "psicologia"
  tema: "niñez_identidad"
  nivel: "intermedio"
  tags: ["niñez", "identidad", "autoestima"]

respuesta: "en construcción"
tipo: completar

respuestas_validas:
  - "en construcción"
  - "en desarrollo"

enunciado: "A diferencia de la identidad consolidada del adulto, la identidad en la etapa de la niñez se encuentra ___."

explicacion: |
  En la niñez, la identidad es fluida y se construye principalmente a través de la interacción con los cuidadores primarios y el juego, siendo una base que se transformará profundamente en la pubertad.
```

```
metadata:
  materia: "psicologia"
  tema: "pubertad_percepcion"
  nivel: "avanzado"
  tags: ["pubertad", "autoimagen", "psicologia"]

variables:
  casos: [
    ["La percepción de la imagen corporal se vuelve más crítica y sensible.", "verdadero"],
    ["La identidad se vuelve independiente de la opinión de los pares.", "falso"]
  ]
  idx: uno_de([0, 1])

respuesta: "verdadero"
tipo: completar
enunciado: "Durante la pubertad, debido a los cambios en la imagen corporal, es común que la percepción de la autopercepción se vuelva más crítica y sensible. ¿Es esto cierto?"

explicacion: |
  La combinación de cambios físicos rápidos y el desarrollo de la capacidad de pensamiento abstracto (metacognición) hace que el individuo sea mucho más consciente de su apariencia y de cómo es visto por los demás.
```

```
metadata:
  materia: "psicologia"
  tema: "desarrollo_infantil"
  nivel: "basico"
  tags: ["niñez", "pubertad", "desarrollo"]

respuesta: "pubertad"
tipo: mc
opciones_explicitas: ["niñez", "pubertad", "adolescencia", "vejez"]

enunciado: "Mientras que la niñez se caracteriza por un crecimiento físico y cognitivo constante, la etapa que se distingue principalmente por la maduración de los órganos reproductivos es la ___."

explicacion: |
  La pubertad es el proceso biológico de cambios físicos y hormonales que marca el inicio de la capacidad reproductiva, diferenciándose de la niñez en su enfoque en la maduración sexual.
```

```
metadata:
  materia: "psicologia"
  tema: "identidad_adolescente"
  nivel: "intermedio"
  tags: ["identidad", "psicologia_evolutiva"]

variables:
  es_identidad_estable: uno_de([verdadero, falso])

respuesta: es_identidad_estable
tipo: completar
enunciado: "Durante la transición de la pubertad a la adolescencia, la identidad del individuo suele ser un proceso dinámico y en constante búsqueda, por lo tanto, ¿es la identidad un constructo estático e inmutable durante este periodo? {es_identidad_estable}"

explicacion: |
  La identidad en la adolescencia es un proceso de exploración. No es un estado fijo, sino una construcción que se moldea a través de la interacción social y la introspección.
```

```
metadata:
  materia: "psicologia"
  tema: "etapas_del_desarrollo"
  nivel: "basico"
  tags: ["secuencia", "etapas"]

opciones_explicitas: ["Infancia", "Pubertad", "Adultez"]
respuesta: ["Infancia", "Pubertad", "Adultez"]
tipo: ordenar

enunciado: "Ordene cronológicamente las siguientes etapas del desarrollo humano, desde la más temprana a la más tardía:"

pasos:
  - "Identificar la etapa de dependencia y aprendizaje motor."
  - "Identificar la etapa de cambios hormonales y búsqueda de autonomía."
  - "Identificar la etapa de consolidación de la identidad y roles sociales."

explicacion: |
  El desarrollo humano sigue una secuencia biológica y psicológica predecible: primero la infancia (crecimiento), luego la pubertad (maduración sexual) y finalmente la adultez (estabilidad).
```

```
metadata:
  materia: "psicologia"
  tema: "maduracion_biologica"
  nivel: "intermedio"
  tags: ["maduracion", "crecimiento"]

variables:
  caso_estudio: uno_de([0, 1])

respuesta: tabla[caso_estudio][1
tipo: completar

enunciado: "En el contexto del desarrollo, el crecimiento se refiere al aumento de tamaño físico, mientras que la ___ se refiere a la adquisición de funciones complejas a través de la maduración del sistema nervioso. El caso analizado es: {caso_estudio}."

pasos:
  - "Diferenciar entre aumento cuantitativo (crecimiento) y aumento cualitativo (maduración)."

variables_contexto:
  tabla: [
    ["maduración", "maduración"]
  ]

explicacion: |
  La maduración es un proceso cualitativo que permite la aparición de nuevas capacidades (como el lenguaje o el razonamiento abstracto), mientras que el crecimiento es cuantitativo.
```

```
metadata:
  materia: "psicologia"
  tema: "identidad_y_cuerpo"
  nivel: "avanzado"
  tags: ["identidad", "cambios_fisicos"]

variables:
  es_centrado_en_el_otro: uno_de([verdadero, falso])

respuesta: es_centrado_en_el_otro
tipo: completar
enunciado: "Durante la pubertad, el egocentrismo adolescente suele aumentar, lo que lleva al individuo a sentir que es el centro de atención de los demás (el 'público imaginario'). ¿Es este fenómeno una característica distintiva de la identidad en esta etapa? {es_centrado_en_el_otro}"

explicacion: |
  El egocentrismo adolescente es un fenómeno psicológico donde el joven siente que sus experiencias y su apariencia son observadas constantemente por los demás, marcando un cambio en su autoconcepto.
```

```
metadata:
  materia: "psicologia"
  tema: "cambios_fisicos_pubertad"
  nivel: "basico"
  tags: ["desarrollo", "pubertad"]

variables:
  datos: [["Mateo experimenta un cambio en su voz y un aumento de estatura repentino", "pubertad"], ["Lucía siente una mayor sensibilidad emocional y cambios en su ciclo menstrual", "pubertad"], ["Santi nota un crecimiento acelerado y la aparición de acné", "pubertad"]]
  idx: uno_de([0,1,2])

enunciado: "Un adolescente presenta el siguiente caso: {datos[idx][0]}. Este conjunto de cambios biológicos caracteriza la etapa de la {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["pubertad"]

explicacion: |
  La pubertad es la etapa de transición donde ocurren cambios hormonales significativos que derivan en el desarrollo de caracteres sexuales secundarios.
```

```
metadata:
  materia: "psicologia"
  tema: "identidad_adolescencia"
  nivel: "intermedio"
  tags: ["identidad", "psicologia_evolutiva"]

variables:
  datos: [["Busca grupos sociales con intereses similares para reafirmar quién es", "identidad"], ["Se siente confundido sobre su rol en el mundo y sus valores", "identidad"], ["Experimenta crisis de pertenencia y prueba diferentes estilos de vestimenta", "identidad"]]
  idx: uno_de([0,1,2])

enunciado: "En el desarrollo de la personalidad, cuando un individuo se encuentra en el proceso de {datos[idx][0]}, está trabajando activamente en la formación de su ________."

respuesta: "identidad"
tipo: completar
respuestas_validas: ["identidad"]

explicacion: |
  Según Erikson, la búsqueda de identidad es la tarea central de la adolescencia, donde el individuo integra sus experiencias para formar un sentido del 'yo'.
```

```
metadata:
  materia: "psicologia"
  tema: "etapas_desarrollo_infantil"
  nivel: "basico"
  tags: ["niñez", "hitos"]

enunciado: "¿Es correcto afirmar que durante la niñez temprana el pensamiento es predominantemente egocéntrico y centrado en el 'aquí y ahora'?"

respuesta: verdadero
tipo: vf

explicacion: |
  En la etapa de la niñez temprana (según Piaget), el niño tiene dificultades para ver las perspectivas de los demás, centrando su percepción en su propia experiencia.
```

```
metadata:
  materia: "psicologia"
  tema: "secuencia_crecimiento"
  nivel: "intermedio"
  tags: ["crecimiento", "desarrollo"]

opciones_explicitas: ["Crecimiento cefalocaudal", "Crecimiento proximodistal", "Maduración de la identidad"]

enunciado: "Ordena los procesos de desarrollo físico y psicológico en el orden cronológico/direccional correcto para un ser humano en desarrollo:"

pasos:
  - "El desarrollo ocurre de la cabeza hacia los pies."
  - "El desarrollo ocurre del centro del cuerpo hacia las extremidades."
  - "La consolidación de la personalidad adulta."

respuesta: ["Crecimiento cefalocaudal", "Crecimiento proximodistal", "Maduración de la identidad"]
tipo: ordenar

explicacion: |
  El desarrollo humano sigue patrones biológicos (cefalocaudal y proximodistal) antes de llegar a la maduración psicológica compleja.
```

```
metadata:
  materia: "psicologia"
  tema: "socializacion_adolescencia"
  nivel: "intermedio"
  tags: ["socializacion", "grupo_pares"]

variables:
  datos: [["El grupo de amigos se vuelve el referente principal de normas", "amigos"], ["La familia sigue siendo el núcleo de valores absolutos", "familia"], ["El individuo se aísla de toda influencia externa", "aislamiento"]]
  idx: uno_de([0,1,2])

enunciado: "En la transición de la niñez a la adolescencia, el foco de influencia social suele cambiar. Si observamos que {datos[idx][0]}, esto indica un desplazamiento hacia el grupo de ________."

respuesta: "{datos[idx][1]}"
tipo: completar
respuestas_validas: ["amigos", "familia", "aislamiento"]

explicacion: |
  Durante la adolescencia, el grupo de pares (amigos) adquiere una relevancia crucial para la socialización, compitiendo con la autoridad familiar en la formación de la identidad.
```

## Sección: lenguaje-pensamiento-y-creatividad (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["simbolismo", "semiotica"]

respuesta: "simbólico"
tipo: completar
respuestas_validas: ["simbólico", "simbolico"]

enunciado: "El lenguaje es un sistema de signos cuya función principal es representar la realidad de manera ___, permitiendo que el pensamiento se desprenda de la inmediatez de los objetos físicos."

explicacion: |
  El carácter simbólico permite que una palabra (significante) represente un concepto (significado) sin que exista una conexión física necesaria, permitiendo la abstracción.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["relativismo_linguistico", "determinismo"]

variables:
  escenario: uno_de([["el lenguaje determina el pensamiento", "el lenguaje influye en el pensamiento"], ["la estructura del lenguaje limita la cognición", "el lenguaje moldea la percepción"]])

respuesta: uno_de(escenario)
tipo: mc
opciones_explicitas: ["el lenguaje determina el pensamiento", "el lenguaje influye en el pensamiento", "el lenguaje es un producto secundario del pensamiento", "no existe relación entre ambos"]

enunciado: "Según la versión fuerte del relativismo lingüístico (determinismo), la idea principal es que ___."

explicacion: |
  El determinismo lingüístico sostiene que la estructura de la lengua que hablamos determina y limita las categorías de nuestro pensamiento.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["relacion_cognitiva"]

respuesta: verdadero
tipo: vf

enunciado: "El pensamiento puede ocurrir de forma independiente al lenguaje (por ejemplo, en la actividad mental de un recién nacido o en el pensamiento visual), aunque el lenguaje facilita su estructuración y complejidad."

explicacion: |
  Aunque están íntimamente ligados, existen procesos cognitivos (como la inteligencia espacial o el pensamiento pre-verbal) que operan sin necesidad de estructuras lingüísticas complejas.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["semiotica", "signo"]

respuesta: "significante"
tipo: completar
respuestas_validas: ["significante", "significado"]

enunciado: "En la teoría del signo lingüístico, la forma física o acústica de la palabra se denomina ___, mientras que el concepto mental que evoca se denomina significado."

explicacion: |
  Saussure define el signo como la unión de un significante (la imagen acústica/escrita) y un significado (el concepto).
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["creatividad", "pensamiento_divergente"]

respuesta: ["Pensamiento Divergente", "Pensamiento Convergente", "Producción Creativa"]
tipo: ordenar

opciones_explicitas: ["Pensamiento Divergente", "Pensamiento Convergente", "Producción Creativa"]

enunciado: "Ordene los procesos cognitivos según una secuencia lógica en un proceso de resolución creativa de problemas: primero se exploran múltiples soluciones posibles, luego se evalúa la mejor opción y finalmente se ejecuta la idea."

explicacion: |
  La creatividad suele implicar un movimiento desde la divergencia (generación de ideas) hacia la convergencia (selección y refinamiento) para llegar a un producto final.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["hipotesis_relativismo_linguistico", "categorizacion"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [
    ["Un hablante de un idioma que tiene una sola palabra para 'azul' y 'verde'", "color_unico"],
    ["Un hablante de un idioma que distingue claramente entre 'azul' y 'celeste'", "distincion_clara"]
  ]

enunciado: "Según la hipótesis de Sapir-Whorf, si una persona pertenece al escenario {escenarios[caso_idx][0]}, su capacidad para categorizar y recordar matices cromáticos estará influenciada por su estructura lingüística. Esto sugiere que el lenguaje ___ el pensamiento."

pasos:
  - "Analizar cómo la falta de términos específicos afecta la percepción de los límites de color."
  - "Relacionar la estructura gramatical con la organización mental de los estímulos."

opciones_explicitas: ["restringe", "no tiene", "potencia", "ignora"]
respuesta: "restringe"
tipo: "mc"

explicacion: |
  El relativismo lingüístico sugiere que las categorías lingüísticas actúan como filtros que estructuran la percepción y la memoria de los estímulos sensoriales.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["determinismo_linguistico", "teoria"]

enunciado: "El determinismo lingüístico fuerte sostiene que el lenguaje determina absolutamente la forma en que pensamos, haciendo imposible pensar conceptos para los cuales no existen palabras."

respuesta: falso
tipo: "vf"

explicacion: |
  La psicología moderna distingue entre el determinismo (fuerte y hoy mayormente descartado) y el relativismo (débil), que postula que el lenguaje influye o facilita ciertos patrones de pensamiento, pero no los limita de forma absoluta.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["creatividad", "pensamiento_divergente"]

enunciado: "Para resolver un problema de pensamiento divergente, como encontrar usos alternativos para un ladrillo, el sujeto debe seguir una secuencia lógica de procesamiento creativo. Ordene los pasos desde el inicio hasta la producción de la idea original:"

opciones_explicitas: ["Fluidez de ideas", "Preparación del problema", "Evaluación de la respuesta", "Incubación"]
respuesta: ["Preparación del problema", "Fluidez de ideas", "Incubación", "Evaluación de la respuesta"]
tipo: "ordenar"

explicacion: |
  El proceso creativo implica primero entender el reto (preparación), generar múltiples opciones sin juzgar (fluidez/divergencia), permitir un periodo de descanso mental (incubación) y finalmente seleccionar la mejor opción (evaluación).
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "avanzado"
  tags: ["simbolismo", "representacion_mental"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [
    ["La palabra 'perro' representa al animal sin necesidad de verlo", "simbolo_abstracto"],
    ["El gesto de señalar un objeto para identificarlo", "gesto_referencial"]
  ]

enunciado: "En el desarrollo cognitivo, el paso hacia el pensamiento simbólico permite que el sujeto utilice un ___ para representar objetos ausentes. En el caso de '{ejemplos[ejemplo_idx][0]}', estamos ante una representación mental de alto nivel."

respuestas_validas: ["símbolo", "signo"]
tipo: "completar"

explicacion: |
  El pensamiento simbólico permite la representación mental de objetos, personas o eventos que no están presentes en el entorno inmediato, permitiendo el pensamiento abstracto y el lenguaje.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["interaccion_lenguaje_pensamiento"]

variables:
  caso_tipo: uno_de([0, 1])
  casos: [
    ["El lenguaje es una herramienta que expresa pensamientos ya formados", "reflejo"],
    ["El lenguaje es un proceso que moldea la estructura del pensamiento", "moldeador"]
  ]

enunciado: "Si adoptamos la postura de que el lenguaje es un ___ de la cognición, entonces el pensamiento es previo al lenguaje. Si adoptamos la postura de que el lenguaje es un ___ de la cognición, entonces el lenguaje estructura el pensamiento."

pasos:
  - "Identificar la postura de 'reflejo' (el lenguaje solo comunica)."
  - "Identificar la postura de 'moldeador' (el lenguaje estructura)."

opciones_explicitas: ["reflejo, moldeador", "moldeador, reflejo", "reflejo, reflejo", "moldeador, moldeador"]
respuesta: "reflejo, moldeador"
tipo: "mc"

explicacion: |
  Existen dos corrientes principales: la que ve al lenguaje como un mero vehículo de comunicación de procesos mentales preexistentes (reflejo), y la que sostiene que la estructura del lenguaje condiciona la organización de esos procesos (moldeador).
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["determinismo_linguistico", "hipotesis_sapir_whorf"]

respuesta: falso
tipo: vf

enunciado: "Según la versión fuerte de la hipótesis de Sapir-Whorf (determinismo lingüístico), el lenguaje determina de manera absoluta y restrictiva los límites del pensamiento humano."

explicacion: |
  Aunque el lenguaje influye en la percepción y la categorización (relativismo lingüístico), la psicología cognitiva moderna sostiene que el pensamiento puede ocurrir sin lenguaje (como en bebés o animales) y que el determinismo absoluto es una postura descartada.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["simbolos", "representacion_mental"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[["el color rojo", "una señal de pare"], ["el concepto de justicia", "una balanza"]]]

opciones_explicitas: ["Representación simbólica", "Percepción sensorial pura", "Reflejo instintivo"]

respuesta: "Representación simbólica"
tipo: mc

enunciado: "Cuando un individuo asocia {escenarios[escenario_idx][0]} con {escenarios[escenario_idx][1]}, está operando mediante una {respuesta_tipo}."

pasos:
  - "Identificar el estímulo sensorial."
  - "Reconocer el significado arbitrario asignado por la cultura."
  - "Conectar el símbolo con el concepto mental."

explicacion: |
  El pensamiento simbólico permite que un estímulo (sonido, imagen, objeto) represente algo que no está presente, permitiendo la abstracción.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["procesos_cognitivos", "estructuracion"]

opciones_explicitas: ["El lenguaje es una consecuencia del pensamiento", "El lenguaje es el único motor del pensamiento", "El pensamiento y el lenguaje son procesos independientes que no se influyen"]

respuesta: "El lenguaje es una consecuencia del pensamiento"
tipo: mc

enunciado: "Desde una perspectiva constructivista, se argumenta que el lenguaje es una herramienta que ayuda a estructurar y dar forma a procesos de pensamiento que ya existen de manera pre-verbal."

explicacion: |
  Si bien el lenguaje estructura el pensamiento (facilitando la complejidad), el pensamiento precede al lenguaje en el desarrollo cognitivo temprano.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["semiotica", "signo"]

respuestas_validas: ["significante", "significado"]

respuesta: ["significante", "significado"]
tipo: completar

enunciado: "En la estructura del signo lingüístico, la forma física o acústica (el sonido de la palabra) se denomina ___ y el concepto mental que esta evoca se denomina ___."

explicacion: |
  Saussure definió el signo como la unión de una parte material (significante) y una parte conceptual (significado).
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "avanzado"
  tags: ["creatividad", "modelo_wallas"]

opciones_explicitas: ["Preparación", "Incubación", "Iluminación", "Verificación"]

respuesta: ["Preparación", "Incubación", "Iluminación", "Verificación"]
tipo: ordenar

enunciado: "Ordene las fases del proceso creativo propuestas por Graham Wallas:"

explicacion: |
  El proceso creativo comienza con la inmersión en el problema (preparación), seguido de un periodo de procesamiento inconsciente (incubación), la aparición de la idea (iluminación) y finalmente la validación de la misma (verificación).
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["lenguaje", "pensamiento", "hipotesis_linguistica"]

respuesta: "hipotesis_linguistica"
tipo: completar
respuestas_validas: ["hipotesis_linguistica", "determinismo_linguistico"]

enunciado: "La teoría que sostiene que la estructura del lenguaje que hablamos determina o limita las categorías de nuestro pensamiento se conoce como ___."

explicacion: |
  La hipótesis de Sapir-Whorf (o determinismo lingüístico) sugiere que el lenguaje no solo comunica el pensamiento, sino que lo estructura y limita.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["comunicacion", "lenguaje", "simbolismo"]

variables:
  es_comunicacion_solo: uno_de([verdadero, falso])

respuesta: es_comunicacion_solo
tipo: completar
enunciado: "Si una persona emite un grito de dolor para pedir ayuda, está realizando un acto de comunicación, pero no necesariamente un acto de lenguaje simbólico."

explicacion: |
  La comunicación es el intercambio de información (puede ser instintiva o gestual), mientras que el lenguaje implica el uso de sistemas de signos arbitrarios y simbólicos con reglas gramaticales.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["simbolismo", "signo", "semiotica"]

variables:
  escenario: uno_de([
    ["la palabra 'perro'", "significante"],
    ["la imagen mental de un perro", "significado"],
    ["el concepto abstracto de canino", "concepto"]
  ])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["significante", "significado", "concepto"]

enunciado: "En el proceso de representación mental, la parte del signo que es la forma física (sonidos o letras) se denomina ___."

explicacion: |
  Según la semiótica, el signo se divide en significante (la forma material) y significado (el concepto mental).
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "avanzado"
  tags: ["creatividad", "pensamiento_divergente", "pensamiento_convergente"]

respuesta: ["pensamiento_divergente", "pensamiento_convergente"]
tipo: ordenar

opciones_explicitas: ["pensamiento_divergente", "pensamiento_convergente"]

enunciado: "Ordene los siguientes procesos según la secuencia lógica de la resolución creativa de problemas: primero se generan múltiples ideas sin restricciones y luego se selecciona la mejor solución."

explicacion: |
  La creatividad suele seguir un flujo que va desde la divergencia (generación de opciones) hacia la convergencia (evaluación y selección).
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["cognicion", "lenguaje"]

variables:
  caso: uno_de([
    ["el pensamiento puede existir sin lenguaje", "verdadero"],
    ["el lenguaje es una herramienta del pensamiento", "falso"]
  ])

respuesta: caso[idx][0
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "De acuerdo con las teorías cognitivas modernas, ¿es posible que existan procesos de pensamiento (como la rotación mental) que no dependan del lenguaje verbal?"

explicacion: |
  La evidencia sugiere que el pensamiento no es dependiente exclusivamente del lenguaje; existen procesos cognitivos no verbales, como la inteligencia visoespacial.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["hipotesis_relativismo", "linguistica", "cognicion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Un hablante de una lengua que tiene múltiples términos para distintos tipos de 'nieve', percibe diferencias sutiles en la textura del hielo de forma más rápida.", "percepción"],
    ["Un hablante de una lengua que solo usa la palabra 'nieve' para todo, requiere más tiempo de procesamiento para distinguir texturas de hielo.", "percepción"]
  ]

enunciado: "Según la hipótesis del relativismo lingüístico, la estructura del lenguaje de una persona puede influir en su {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["percepción", "memoria", "emoción", "motricidad"]

explicacion: |
  El relativismo lingüístico sugiere que las categorías lingüísticas que utilizamos actúan como marcos que facilitan o dificultan la distinción de ciertos aspectos del mundo físico.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["conceptos", "categorizacion"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [
    ["El concepto de 'perro' permite agrupar a un caniche, un labrador y un bulldog.", "perro"],
    ["El concepto de 'fruta' permite agrupar a una manzana, una pera y una uva.", "fruta"]
  ]

enunciado: "Cuando una persona utiliza una palabra para agrupar diversos objetos con características comunes, está utilizando un ___ para organizar su pensamiento."

respuesta: ejemplos[ejemplo_idx][1
tipo: completar
respuestas_validas: ["concepto", "símbolo", "etiqueta"]

explicacion: |
  Los conceptos son representaciones mentales que nos permiten categorizar el mundo, ahorrando energía cognitiva al no tener que procesar cada objeto como algo totalmente nuevo.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["simbolismo", "representacion_mental"]

enunciado: "El lenguaje es una forma de representación simbólica porque los sonidos o grafemas utilizados no tienen una relación física directa con el objeto que representan."

respuesta: verdadero
tipo: vf

explicacion: |
  La arbitrariedad del signo lingüístico es una característica fundamental: la palabra "mesa" no se parece a una mesa; es una convención simbólica.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "avanzado"
  tags: ["creatividad", "procesos_cognitivos"]

enunciado: "Ordene las etapas del proceso creativo según el modelo tradicional de Wallas:"

opciones_explicitas: ["Preparación", "Incubación", "Iluminación", "Verificación"]
respuesta: ["Preparación", "Incubación", "Iluminación", "Verificación"]
tipo: ordenar

explicacion: |
  El proceso creativo suele seguir una secuencia que va desde la inmersión en el problema (preparación), el procesamiento inconsciente (incubación), el momento del 'eureka' (iluminación) y la validación del resultado (verificación).
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["resolucion_problemas", "heuristicos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Un arquitecto que usa planos para visualizar una estructura antes de construirla.", "representacion"],
    ["Un matemático que utiliza fórmulas para resolver una ecuación compleja.", "representacion"]
  ]

enunciado: "En el caso de {casos[caso_idx][0]}, el uso de símbolos y lenguaje técnico sirve como una herramienta de ___ mental para resolver problemas."

respuesta: representacion
tipo: mc
opciones_explicitas: ["representacion", "inhibicion", "impresion", "reaccion"]

explicacion: |
  El lenguaje permite la representación mental, lo que nos permite manipular ideas y objetos en nuestra mente sin necesidad de tenerlos presentes físicamente.
```
