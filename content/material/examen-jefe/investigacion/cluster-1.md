# Examen jefe — [PENDIENTE #912]

> Logro #912. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **118 preguntas totales** en 5/5 secciones.

---

## Sección: observacion-y-pregunta-investigable (25 preguntas)

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["metodologia", "observacion"]

respuesta: "observacion"
tipo: completar
respuestas_validas:
  - "observacion"

enunciado: "El primer paso del método científico consiste en el uso de los sentidos o instrumentos para captar información del entorno, proceso conocido como ___."

explicacion: |
  La observación es el punto de partida de toda investigación; implica registrar hechos o fenómenos de manera objetiva.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["pregunta", "metodologia"]

respuesta: falso
tipo: vf
enunciado: "Una pregunta que solo puede responderse con un 'sí' o un 'no' se considera una pregunta de investigación de alto nivel científico."

pasos:
  - "Analizar si la pregunta permite la recolección de datos."
  - "Verificar si la respuesta requiere experimentación o análisis profundo."

explicacion: |
  Falso. Las preguntas investigables deben ser abiertas y permitir la recolección de datos empíricos para ser analizadas.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

respuesta: "Una pregunta que relaciona variables y es medible"
tipo: mc
opciones_explicitas: ["Una opinión personal sobre el fenómeno", "Una pregunta que relaciona variables y es medible", "Una descripción literaria de lo que se ve", "Una conclusión definitiva sobre el problema"]

enunciado: "Al convertir una observación curiosa en una pregunta investigable, el investigador debe buscar que esta sea:"

explicacion: |
  Una pregunta investigable debe establecer una relación entre variables que puedan ser medidas u observadas sistemáticamente.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

respuesta_orden: ["Observación del fenómeno", "Identificación de variables", "Formulación de la pregunta"]
tipo: ordenar
opciones_explicitas: ["Observación del fenómeno", "Identificación de variables", "Formulación de la pregunta"]

enunciado: "Ordena los pasos lógicos para transformar una curiosidad inicial en una pregunta de investigación científica:"

explicacion: |
  Primero se observa el entorno, luego se identifican los factores (variables) que intervienen y finalmente se redacta la pregunta de investigación.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "avanzado"
  tags: ["variables", "metodologia"]

respuesta: "La luz solar"
tipo: mc
opciones_explicitas: ["La luz solar", "La temperatura del agua", "El color de la planta", "El tipo de maceta"]

enunciado: "Si observamos que las plantas crecen más rápido con un tipo de luz, la variable que estamos estudiando es ___."

explicacion: |
  En este caso, la luz es la variable independiente que el investigador observa para ver su efecto en el crecimiento.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["metodologia", "observacion"]

enunciado: "Un estudiante observa que las plantas de su balcón crecen más rápido cuando están cerca de la pared que cuando están en el centro. Para convertir esto en una pregunta investigable, debe identificar la variable que puede manipular. Si decide cambiar la cantidad de luz solar, la pregunta debe centrarse en la variable ____."

respuestas_validas:
  - "luz solar"
tipo: completar

explicacion: |
  Una pregunta investigable debe centrarse en una variable independiente (la que manipulas, como la luz) y una dependiente (la que mides, como el crecimiento).
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["variables", "metodologia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Se observa que los perros corren más rápido si les dan premios", "comida"], ["Se observa que las plantas crecen más si se riegan con té", "líquido"]]

enunciado: "Observación: {escenarios[escenario_idx][0]}. En este caso, la variable que el investigador puede manipular (variable independiente) es el/la ___."

opciones_explicitas: ["comida", "líquido", "velocidad de carrera", "entorno"]
respuesta: escenarios[escenario_idx][1]
tipo: mc

explicacion: |
  La variable independiente es el factor que el investigador cambia deliberadamente para observar qué efecto produce.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["criterios", "validez"]

enunciado: "Analiza la siguiente pregunta de investigación: '¿Por qué los gatos prefieren el color azul sobre el rojo?'. ¿Es esta una pregunta científicamente investigable mediante experimentación directa?"

respuesta: falso
tipo: vf
explicacion: |
  Las preferencias subjetivas (sentimientos o gustos) no son directamente medibles de forma objetiva sin una metodología de observación de comportamiento muy específica; las preguntas sobre 'por qué' suelen ser demasiado amplias para un experimento simple.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

enunciado: "Ordena los pasos lógicos para transformar una observación curiosa en una pregunta de investigación científica:"

opciones_explicitas: ["Realizar una observación detallada", "Identificar variables (independiente y dependiente)", "Formular la pregunta de investigación", "Diseñar un experimento para probarla"]
respuesta_orden: ["Realizar una observación detallada", "Identificar variables (independiente y dependiente)", "Formular la pregunta de investigación", "Diseñar un experimento para probarla"]
tipo: ordenar

explicacion: |
  El proceso científico comienza con la percepción (observación), sigue con la delimitación de factores (variables), la formulación del problema (pregunta) y finalmente la acción (diseño experimental).
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "avanzado"
  tags: ["estructura", "formulación"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["¿Cómo afecta la temperatura al tiempo de disolución de la sal?", "temperatura", "tiempo"], ["¿Cómo influye la intensidad de la luz en la altura de la planta?", "luz", "altura"]]

enunciado: "En el caso: '{casos[caso_idx][0]}', la variable independiente es ___."

opciones_explicitas: ["temperatura", "tiempo", "luz", "altura"]
respuesta: casos[caso_idx][1]
tipo: mc

explicacion: |
  La variable dependiente es el efecto o resultado que se mide (en el primer caso, el tiempo; en el segundo, la altura).
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["metodologia", "errores_comunes"]

variables:
  ejemplo_idx: uno_de([0, 1])
  escenarios: [["¿Las plantas crecen más con música clásica?", "cerrada"], ["¿Cómo afecta la frecuencia de riego al crecimiento de la planta?", "investigable"]]

respuesta: escenarios[ejemplo_idx][1]
tipo: mc
opciones_explicitas: ["cerrada", "investigable", "subjetiva", "imposible"]

enunciado: "Si observo que las plantas de mi salón están más verdes que las del pasillo y me pregunto: '{escenarios[ejemplo_idx][0]}', el tipo de pregunta que he formulado es una pregunta ___."

explicacion: |
  Una pregunta investigable debe permitir la recolección de datos medibles. Las preguntas que se responden con un simple "sí" o "no" (como la del ejemplo) son preguntas cerradas y no permiten desarrollar un proceso de investigación experimental completo.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["variables", "diseño_experimental"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["¿La temperatura influye en la velocidad de disolución de la sal?", "temperatura"], ["¿El color del recipiente afecta la rapidez con la que se disuelve el azúcar?", "color"]]

respuesta: casos[caso_idx][1]
tipo: completar
respuestas_validas:
  - "temperatura"
  - "color"

enunciado: "Para que una observación se transforme en una pregunta investigable, es necesario identificar una variable independiente. En el caso de: '{casos[caso_idx][0]}', la variable que el investigador debe manipular es el/la ___."

explicacion: |
  La variable independiente es el factor que el investigador cambia deliberadamente para observar su efecto. En el primer caso es la temperatura; en el segundo, el color.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["subjetividad", "objetividad"]

respuesta: falso
tipo: vf

enunciado: "Una pregunta que contenga términos subjetivos como '¿Cuál es la flor más bonita del jardín?' es considerada una pregunta investigable porque la belleza es una propiedad física medible."

explicacion: |
  Falso. Los términos subjetivos (bonito, feo, increíble, mejor) dependen del observador y no pueden ser medidos de forma objetiva mediante instrumentos o datos estandarizados. Una pregunta investigable debe ser objetiva.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["procedimiento", "metodologia"]

respuesta_orden: ["Observación", "Identificación de variables", "Formulación de pregunta"]
tipo: ordenar

opciones_explicitas: ["Observación", "Identificación de variables", "Formulación de pregunta"]

enunciado: "Ordena los pasos lógicos para convertir una curiosidad en una pregunta de investigación científica:"

pasos:
  - "Notar un fenómeno en el entorno."
  - "Determinar qué factores pueden estar influyendo (causa-efecto)."
  - "Redactar el interrogante de forma clara, precisa y medible."

explicacion: |
  El método científico comienza con la observación de un fenómeno, seguido por el análisis de las variables involucradas y culmina con la formulación de una pregunta que pueda ser sometida a prueba.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "avanzado"
  tags: ["viabilidad", "limitaciones"]

variables:
  pregunta_idx: uno_de([0, 1])
  preguntas: [["¿Cómo influye el tipo de suelo en el crecimiento de las semillas?", "posible"], ["¿Por qué las plantas tienen sentimientos cuando no las riego?", "imposible"]]

respuesta: preguntas[pregunta_idx][1]
tipo: mc
opciones_explicitas: ["posible", "imposible"]

enunciado: "Al evaluar la viabilidad de una pregunta de investigación, si nos planteamos: '{preguntas[pregunta_idx][0]}', la clasificación correcta es que la pregunta es ___."

explicacion: |
  Una pregunta es imposible de investigar científicamente si su objeto de estudio no es observable o medible (como los 'sentimientos' de una planta), o si requiere tecnología que no existe. Una pregunta sobre el suelo es posible porque el crecimiento y el tipo de suelo son variables medibles.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["metodologia", "conceptos_basicos"]

respuesta: "pregunta"
tipo: completar
respuestas_validas:
  - "pregunta"

enunciado: "Mientras que una observación es la percepción de un fenómeno, una ___ es una interrogante que busca explicar o relacionar variables de forma empírica."

explicacion: |
  La observación es el punto de partida (notar algo), pero para iniciar el proceso científico se requiere transformar esa percepción en una pregunta investigable.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["criterios", "metodologia"]

variables:
  escenario: uno_de([["¿Por qué el cielo es azul?", "falsa"], ["¿Cómo afecta la temperatura al crecimiento de una planta?", "verdadera"], ["¿Es el color azul el más bonito?", "falsa"]])

respuesta: "¿Cómo afecta la temperatura al crecimiento de una planta?"
tipo: mc
opciones_explicitas: ["¿Por qué el cielo es azul?", "¿Cómo afecta la temperatura al crecimiento de una planta?", "¿Es el color azul el más bonito?"]

enunciado: "De las siguientes opciones, ¿cuál representa una pregunta que puede ser investigada científicamente (es decir, que permite la recolección de datos empíricos)?"

explicacion: |
  Una pregunta investigable debe ser observable y medible. Las preguntas sobre opiniones ("más bonito") o causas metafísicas/filosóficas no se pueden probar mediante la experimentación directa.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "avanzado"
  tags: ["tipos_de_pregunta", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "Una pregunta que busca determinar la relación de causa y efecto entre dos variables (ej. '¿Cómo influye X en Y?') se clasifica únicamente como una pregunta descriptiva."

explicacion: |
  Falso. Una pregunta descriptiva busca caracterizar un fenómeno (¿cómo es?, ¿cuántos hay?), mientras que la pregunta que busca la relación causa-efecto es de carácter explicativo o correlacional.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["proceso", "pasos"]

respuesta_orden: ["Observación", "Identificación de variables", "Formulación de la pregunta"]
tipo: ordenar
opciones_explicitas: ["Observación", "Identificación de variables", "Formulación de la pregunta"]

enunciado: "Ordena los pasos lógicos para transformar una curiosidad en un problema de investigación científica:"

explicacion: |
  Primero se observa el fenómeno, luego se identifican los elementos que intervienen (variables) y finalmente se redacta la pregunta que vincula dichos elementos.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["conceptos_relacionados", "metodologia"]

respuesta: "¿Influye la luz en el crecimiento?"
tipo: mc
opciones_explicitas: ["¿Influye la luz en el crecimiento?", "La luz influye en el crecimiento."]

enunciado: "Si tenemos una observación sobre la luz y las plantas, ¿cuál de los siguientes enunciados representa la fase de 'pregunta investigable' y no una 'hipótesis'?"

explicacion: |
  La pregunta es una interrogación abierta que busca respuesta; la hipótesis es una afirmación provisional que intenta responder a dicha pregunta y que debe ser sometida a prueba.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["metodologia", "observacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Observo que las plantas de mi balcón crecen más rápido cuando las riego con té de banana.", "El efecto de la concentración de potasio en el crecimiento de la planta de interior."], ["Noto que mis amigos se ven más cansados los lunes que los viernes.", "La relación entre el ciclo semanal de sueño y los niveles de energía percibida."]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["¿Por qué las plantas son verdes?", datos[escenario_idx][1], "¿Me gusta el té de banana?", "¿Cómo se cuidan las plantas?"]

enunciado: "Dada la siguiente observación: '{datos[escenario_idx][0]}', ¿cuál de las siguientes opciones representa una pregunta de investigación científica válida y delimitada?"

explicacion: |
  Una buena pregunta de investigación debe ser específica, medible y establecer una relación entre variables, evitando generalidades o juicios de valor.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["variables", "metodologia"]

variables:
  caso_idx: uno_de([0])
  casos: [["Observación: El uso de música clásica durante el estudio parece mejorar la retención de vocabulario en estudiantes de inglés.", "música clásica", "retención de vocabulario"]]

respuesta: "música clásica"
tipo: completar
respuestas_validas:
  - "música clásica"

enunciado: "En la observación: '{casos[caso_idx][0]}', la variable independiente (la que el investigador manipula) es la ___."

pasos:
  - "Identifica qué factor se está variando o estudiando como causa."
  - "Identifica qué efecto se está midiendo."

explicacion: |
  La variable independiente es el factor que se presume causa un efecto; en este caso, la música clásica.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["criterios", "validacion"]

variables:
  pregunta_idx: uno_de([0, 1])
  preguntas: [["¿Es el color azul el color más bonito de todos los colores?", falso], ["¿Influye la temperatura del agua en la velocidad de disolución de la sal?", verdadero]]

respuesta: preguntas[pregunta_idx][1]
tipo: completar
enunciado: "Analiza la siguiente pregunta: '{preguntas[pregunta_idx][0]}'. ¿Es esta una pregunta que puede ser investigada mediante el método científico? (responde con verdadero o falso)"

explicacion: |
  Para ser investigable, una pregunta no debe basarse en opiniones subjetivas ("lo más bonito"), sino en hechos que puedan ser observados y medidos objetivamente.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["estructura", "metodologia"]

variables:
  escenarios: [["Observación: Los perros corren más rápido cuando hay un estímulo sonoro fuerte.", "¿De qué manera el nivel de decibelios de un estímulo sonoro afecta la velocidad de carrera de un canino?", "¿De qué manera el nivel de decibelios de un estímulo sonoro afecta la velocidad de carrera de un canino?", "El ruido hace que los perros corran."]]

respuesta_orden: ["¿De qué manera el nivel de decibelios de un estímulo sonoro afecta la velocidad de carrera de un canino?", "¿Los perros corren con ruido?", "¿Por qué los perros corren rápido?", "El ruido hace que los perros corran."]
tipo: ordenar
opciones_explicitas: ["¿De qué manera el nivel de decibelios de un estímulo sonoro afecta la velocidad de carrera de un canino?", "¿Los perros corren con ruido?", "¿Por qué los perros corren rápido?", "El ruido hace que los perros corran."]

enunciado: "Ordena los siguientes enunciados desde la pregunta de investigación más técnica y bien estructurada hasta la más informal o vaga, basándote en la observación: 'Observación: Los perros corren más rápido cuando hay un estímulo sonoro fuerte.'."

explicacion: |
  Una pregunta científica debe ser precisa, evitar términos ambiguos y establecer claramente la relación entre la variable independiente y la dependiente.
```

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "avanzado"
  tags: ["delimitacion", "metodologia"]

variables:
  item_idx: uno_de([0])
  items: [["Observación: El crecimiento de los moños en el pan depende de la humedad.", "Humedad relativa", "Tiempo de fermentación", "Temperatura ambiente"]]

respuesta: "Humedad relativa"
tipo: mc
opciones_explicitas: ["Humedad relativa", "Temperatura ambiente", "Tiempo de fermentación", "Todas las anteriores"]

enunciado: "Si queremos investigar la observación: '{items[item_idx][0]}', y decidimos enfocarnos únicamente en la variable ambiental que se puede medir con un higrómetro, ¿cuál sería nuestra variable principal?"

explicacion: |
  El higrómetro es el instrumento diseñado específicamente para medir la humedad (relativa o absoluta) del aire.
```

## Sección: hipotesis-buena-o-mala (25 preguntas)

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["metodologia", "hipotesis"]

tipo: mc
opciones_explicitas: ["Es vaga y difícil de medir", "Es específica y comprobable", "Es una opinión personal sin sustento", "Es una verdad absoluta e incuestionable"]
respuesta: "Es específica y comprobable"

enunciado: "Una hipótesis científica se considera 'buena' cuando su estructura permite que sea ___ y ___."

explicacion: |
  Para que una hipótesis sea válida en el método científico, debe ser específica (delimitar qué se va a observar) y comprobable (permitir la experimentación para aceptar o rechazar la proposición).
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["falsabilidad", "metodologia"]

tipo: vf

enunciado: "Si una hipótesis está formulada de tal manera que no existe ningún experimento posible para demostrar que es falsa, entonces se dice que la hipótesis es falsable."

respuesta: falso

explicacion: |
  Es una contradicción. Para que una hipótesis sea científica, debe ser falsable; es decir, debe ser posible imaginar un experimento o una observación que pueda contradecirla. Si no puede ser refutada, no es científica.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["hipotesis_mala", "vaguedad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["La temperatura afecta el crecimiento de las plantas.", "La temperatura influye en el crecimiento de las plantas de tomate bajo luz roja."], ["El clima es malo hoy.", "El clima influye en el estado de ánimo de las personas."]]

tipo: mc
opciones_explicitas: ["Es demasiado específica", "Es vaga o ambigua", "Es una ley universal", "Es una variable dependiente"]

enunciado: "Analiza el siguiente enunciado: '{escenarios[escenario_idx][0]}'. Esta hipótesis se considera 'mala' porque es ___."

respuesta: "Es vaga o ambigua"

explicacion: |
  Una hipótesis vaga (como la del primer escenario) no define qué tipo de temperatura, qué tipo de planta o cómo se mide el crecimiento, lo que impide una prueba experimental rigurosa.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["variables", "estructura"]

tipo: completar
opciones_explicitas: ["variable", "causa", "efecto"]
respuestas_validas:
  - "variable"
  - "causa"
  - "efecto"

enunciado: "En una hipótesis bien formulada, se debe establecer la relación entre una ___ independiente y una ___ dependiente."

respuesta: "variable"

explicacion: |
  La estructura básica de una hipótesis científica busca relacionar cómo el cambio en una variable (independiente) afecta a otra (dependiente).
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["proceso", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Observación del fenómeno", "Formulación de la hipótesis", "Diseño de la experimentación", "Análisis de resultados"]

enunciado: "Ordena los pasos lógicos para validar una hipótesis científica:"

explicacion: |
  El proceso científico sigue un orden lógico: primero se observa un fenómeno, luego se propone una explicación provisional (hipótesis), se diseña un experimento para probarla y finalmente se analizan los datos obtenidos.
respuesta_orden: ["Observación del fenómeno", "Formulación de la hipótesis", "Diseño de la experimentación", "Análisis de resultados"]
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buenas_y_malas"
  nivel: "basico"
  tags: ["metodologia", "hipotesis"]

tipo: mc
opciones_explicitas: ["La dieta de la felicidad mejora el bienestar general.", "El consumo de vitamina C reduce la duración del resfriado común en 2 días.", "Los pensamientos influyen en la suerte de las personas.", "El clima afecta el humor de la población."]
enunciado: "De las siguientes afirmaciones, ¿cuál representa una hipótesis científica válida por ser específica y falsable?"
respuesta: "El consumo de vitamina C reduce la duración del resfriado común en 2 días."
explicacion: |
  Una buena hipótesis debe ser específica y permitir una prueba empírica. La opción correcta define una variable (vitamina C), una población (resfriado común) y un efecto medible (2 días), permitiendo ser refutada o confirmada. Las otras son vagas o subjetivas.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buenas_y_malas"
  nivel: "intermedio"
  tags: ["falsabilidad", "logica"]

tipo: vf
respuesta: falso
enunciado: "Una hipótesis que no puede ser refutada mediante la observación o la experimentación (es decir, es infalsable) se considera una hipótesis científica válida."

explicacion: |
  Falso. El criterio de falsabilidad de Popper establece que para que una hipótesis sea científica, debe existir, al menos en la teoría, un experimento o observación que pueda demostrar que es falsa. Si no puede ser refutada, no es ciencia.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buenas_y_malas"
  nivel: "intermedio"
  tags: ["variables", "especificidad"]

variables:
  escenario: uno_de([["El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días", "fertilizante X"], ["El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días", "fertilizante X"], ["El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días", "fertilizante X"]])

tipo: completar
enunciado: "Dada la hipótesis: '{escenario[0]}', el factor que se pretende modificar es el ___."
respuestas_validas:
  - "fertilizante X"
respuesta: escenario[1]

explicacion: |
  En el diseño experimental, el fertilizante X es la variable independiente (la causa propuesta), la cual se manipula para observar su efecto sobre el crecimiento.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buenas_y_malas"
  nivel: "basico"
  tags: ["metodologia", "proceso"]

tipo: ordenar
opciones_explicitas: ["Formular la hipótesis", "Diseñar el experimento", "Analizar los datos obtenidos", "Concluir si la hipótesis es aceptada o rechazada"]
respuesta_orden: ["Formular la hipótesis", "Diseñar el experimento", "Analizar los datos obtenidos", "Concluir si la hipótesis es aceptada o rechazada"]

enunciado: "Ordene cronológicamente los pasos lógicos para validar una hipótesis científica:"

explicacion: |
  El método científico requiere primero la formulación de la idea, luego la creación de un procedimiento (experimento), el tratamiento de la información recolectada (análisis) y finalmente la toma de decisiones sobre la validez de la premisa inicial.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buenas_y_malas"
  nivel: "avanzado"
  tags: ["evaluacion", "metodologia"]

variables:
  caso: uno_de([["'Las fuerzas invisibles del universo determinan el destino humano'", "Mala: es infalsable"], ["'El aumento de la temperatura global reduce el grosor del hielo ártico'", "Buena: es específica y comprobable"], ["'Las personas son felices cuando están con sus amigos'", "Mala: es vaga y no medible"]])

tipo: mc
opciones_explicitas: ["Mala: es vaga y no medible", "Mala: es infalsable", "Buena: es específica y comprobable"]
enunciado: "Analice el siguiente caso: '{caso[0]}'. ¿Cuál es su clasificación?"
respuesta: caso[1]

explicacion: |
  Si el caso es el 0, es infalsable (fuerzas invisibles). Si es el 1, es buena (medible). Si es el 2, es mala por ser vaga (qué es "feliz" y "amigos" es subjetivo). El sistema evaluará según la lógica de la opción seleccionada.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["metodologia", "hipotesis"]

tipo: mc
opciones_explicitas: ["Comprobable", "Subjetiva", "Vaga", "Universal"]

enunciado: "Una característica fundamental que distingue a una hipótesis científica de una mera opinión es que debe ser ___."

respuesta: "Comprobable"

explicacion: |
  Para que una hipótesis sea científica, debe existir la posibilidad de diseñar un experimento o observación que pueda confirmar o refutar su validez. Si no puede ser sometida a prueba, no es ciencia.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["falsabilidad", "popper"]

tipo: vf
respuesta: falso

enunciado: "Una hipótesis que es tan amplia que cualquier resultado posible puede ser explicado por ella (es decir, no puede ser refutada por ningún experimento) se considera una hipótesis científica excelente."

explicacion: |
  Falso. Según el criterio de falsabilidad, una hipótesis que no puede ser refutada por ningún evento observable es una hipótesis no científica o "no falsable", ya que no permite el avance del conocimiento mediante la evidencia.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["errores_comunes", "especificidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El clima afectará el ánimo de las personas.", "Vaga"], ["El aumento de la temperatura ambiente en 5°C reducirá la productividad laboral en un 10%.", "Específica"]]

tipo: mc
opciones_explicitas: ["Vaga", "Específica"]

enunciado: "Analiza el siguiente enunciado: '{escenarios[escenario_idx][0]}'. La principal deficiencia de esta hipótesis es que es ___."

respuesta: escenarios[escenario_idx][1]

explicacion: |
  Una buena hipótesis debe ser específica. Si es demasiado general o vaga, no permite establecer variables claras para medir el efecto y, por lo tanto, es difícil de contrastar empíricamente.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

tipo: ordenar
opciones_explicitas: ["Observación del fenómeno", "Formulación de la hipótesis", "Diseño del experimento", "Análisis de resultados"]

enunciado: "Ordena los pasos lógicos del método científico que permiten validar una hipótesis:"

respuesta_orden: ["Observación del fenómeno", "Formulación de la hipótesis", "Diseño del experimento", "Análisis de resultados"]

explicacion: |
  El proceso comienza con la observación, lo que permite plantear una hipótesis explicativa. Luego, se debe diseñar un método para probarla y, finalmente, analizar los datos obtenidos para aceptar o rechazar la hipótesis.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["terminologia"]

tipo: completar
respuestas_validas:
  - "falsable"
  - "falsable"

enunciado: "Para que una hipótesis sea considerada científica, debe ser ___; esto significa que debe ser posible imaginar un experimento que pueda demostrar que la hipótesis es falsa."

respuesta: "falsable"

explicacion: |
  La falsabilidad es el criterio de demarcación de la ciencia. Si una proposición no puede ser sometida a una prueba que pueda contradecirla, entonces no pertenece al ámbito de la ciencia empírica.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_vs_teoria"
  nivel: "basico"
  tags: ["metodologia", "conceptos_basicos"]

respuesta: "teoria"
tipo: mc
opciones_explicitas: ["hipotesis", "teoria", "ley", "variable"]

enunciado: "Mientras que una hipótesis es una explicación tentativa para un fenómeno observado, una _______ es una explicación amplia y bien sustentada que ha sido confirmada repetidamente mediante la observación y la experimentación."

explicacion: |
  La hipótesis es el punto de partida (una suposición), mientras que la teoría es un marco explicativo robusto y validado.
```

```
metadata:
  materia: "investigacion"
  tema: "falsabilidad"
  nivel: "intermedio"
  tags: ["metodologia", "criterio_falsabilidad"]

respuesta: verdadero
tipo: vf
enunciado: "Una hipótesis científica se considera 'buena' si es falsable, es decir, si existe la posibilidad de que un experimento pueda demostrar que es incorrecta. ¿Es esto cierto?"

explicacion: |
  Si una afirmación no puede ser refutada por ningún experimento imaginable (es vaga o metafísica), no es científica. La falsabilidad es el criterio de demarcación de Popper.
```

```
metadata:
  materia: "investigacion"
  tema: "especificidad_hipotesis"
  nivel: "basico"
  tags: ["calidad_hipotesis"]

variables:
  escenario: uno_de([0, 1])
  datos: [[ "La medicina mejora la salud", "vaga", falso ], [ "El fármaco X reduce el tiempo de recuperación en un 20% en pacientes con gripe en 5 días", "especifica", verdadero ]]

respuestas_validas:
  - datos[escenario][1]
respuesta: datos[escenario][1]
tipo: completar

enunciado: "Analice el siguiente caso: {datos[escenario][0]} es una hipótesis ___."

explicacion: |
  Una hipótesis buena debe ser específica para que los resultados puedan ser medidos y comparados con la predicción inicial.
```

```
metadata:
  materia: "investigacion"
  tema: "estructura_hipotesis"
  nivel: "intermedio"
  tags: ["metodologia", "estructura"]

respuesta_orden: ["variable_independiente", "variable_dependiente"]
tipo: ordenar

opciones_explicitas: ["variable_dependiente", "variable_independiente"]

enunciado: "Para que una hipótesis sea comprobable, debe establecer una relación lógica entre dos elementos. Ordene los componentes según el flujo causal: Primero la causa (___) y luego el efecto (___)."

explicacion: |
  La estructura lógica estándar es: Si cambio la variable independiente, entonces observaré un cambio en la variable dependiente.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_nula_vs_alternativa"
  nivel: "avanzado"
  tags: ["estadistica", "metodologia"]

respuesta: "hipotesis_nula"
tipo: mc

opciones_explicitas: ["hipotesis_nula", "hipotesis_alternativa"]

enunciado: "En un experimento, la hipótesis que postula que 'no existe una relación o diferencia significativa entre las variables' se conoce como: ___"

explicacion: |
  La hipótesis nula (H0) es la que se busca rechazar mediante la estadística, mientras que la alternativa (H1) es la que el investigador realmente propone.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["metodologia", "ciencia"]

variables:
  escenario: uno_de([["Si el fertilizante X aumenta el crecimiento de las plantas de tomate en un 20% en 15 días.", "buena"], ["El clima afecta el estado de ánimo de las personas de forma variable.", "mala"], ["Los estudiantes rinden mejor si hay música clásica en el aula.", "mala"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["buena", "mala"]

enunciado: "Analiza el siguiente planteamiento: '{escenario[0]}'. ¿Qué tipo de hipótesis es?"

explicacion: |
  Una hipótesis es buena cuando es específica, medible y falsable. Si es vaga o no permite una prueba empírica clara (como en los casos de "clima" o "música" sin parámetros), se considera una mala hipótesis.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["falsabilidad", "metodologia"]

variables:
  idx: uno_de([0, 1])
  textos: ["La hipótesis es 'Existe una fuerza invisible que empuja los objetos pero no se puede medir'.", "La hipótesis es 'Si aumento la temperatura, el gas se expande'."]
  es_falsable: [falso, verdadero]

respuesta: es_falsable[idx]
tipo: vf
enunciado: "Considera el siguiente caso: {textos[idx]}. ¿Es esta una hipótesis científica falsable (es decir, que puede ser refutada por la observación)?"

explicacion: |
  Para que una hipótesis sea científica, debe ser posible diseñar un experimento que pueda demostrar que es falsa. Si una afirmación es tan vaga o metafísica que no hay forma de contradecirla, no es científica.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["caracteristicas"]

respuesta_orden: ["falsable", "especifica", "medible"]
tipo: ordenar
opciones_explicitas: ["falsable", "especifica", "medible"]

enunciado: "Ordena los tres atributos fundamentales que debe poseer una hipótesis científica para ser considerada válida, desde el más general al más concreto: 1. La capacidad de ser refutada, 2. La claridad en su alcance, 3. La posibilidad de cuantificar sus variables."

pasos:
  - "Identificar la capacidad de ser refutada (falsabilidad)."
  - "Identificar la claridad en su alcance (especificidad)."
  - "Identificar la posibilidad de cuantificar (medibilidad)."

explicacion: |
  Una hipótesis científica debe ser primero falsable (poder ser sometida a prueba), luego específica (delimitar qué se estudia) y finalmente medible (permitir la recolección de datos cuantitativos o cualitativos claros).
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["analisis"]

variables:
  ejemplo: uno_de([["Las plantas crecen mejor con luz solar.", "vaga"], ["El uso de la red social X reduce el tiempo de sueño en 30 minutos.", "especifica"]])

respuesta: ejemplo[1]
tipo: completar

enunciado: "El siguiente enunciado es: '{ejemplo[0]}'. Por su estructura, se clasifica como una hipótesis _________."

explicacion: |
  Si la hipótesis no define qué es "mejor" o cuánto es el cambio, es "vaga". Si define variables y magnitudes, es "especifica".
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que una hipótesis que no puede ser sometida a prueba empírica (es decir, que no es falsable) carece de valor científico, aunque sea una idea lógica?"

explicacion: |
  Exacto. La ciencia se basa en la capacidad de probar y, potencialmente, refutar una idea. Una idea que no puede ser puesta a prueba no pertenece al ámbito de la ciencia empírica.
```

## Sección: metodologia-cualitativa-vs-cuantitativa (20 preguntas)

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "basico"
  tags: ["cuantitativa", "definicion"]

variables:
  n: random(1, 100)

respuesta: "cuantitativa"
tipo: completar

enunciado: "La metodología que se centra en la medición numérica, el análisis estadístico y la búsqueda de patrones generales se denomina enfoque {n}."

explicacion: |
  La investigación cuantitativa se caracteriza por su enfoque numérico y estadístico para medir fenómenos y generalizar resultados.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "basico"
  tags: ["cualitativa", "definicion"]

variables:
  n: random(1, 100)

respuesta: "cualitativa"
tipo: completar

enunciado: "El enfoque que busca comprender significados, experiencias y contextos profundos desde la perspectiva de los participantes es la metodología {n}."

explicacion: |
  La investigación cualitativa se enfoca en la comprensión profunda de los fenómenos sociales desde la perspectiva de los sujetos, sin depender exclusivamente de números.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["deductivo", "cuantitativa"]

variables:
  caso: uno_de(["A", "B", "C"])

respuesta: "cuantitativa"
tipo: completar

enunciado: "En el caso {caso}, si la investigación parte de una teoría previa para formular hipótesis verificables, se está utilizando razonamiento {caso}."

explicacion: |
  La metodología cuantitativa utiliza un razonamiento deductivo: de lo general (teoría) a lo particular (datos).
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["inductivo", "cualitativa"]

variables:
  caso: uno_de(["X", "Y", "Z"])

respuesta: "cualitativa"
tipo: completar

enunciado: "En el caso {caso}, si los conceptos y teorías emergen de los datos recolectados en el campo, se está utilizando razonamiento {caso}."

explicacion: |
  La metodología cualitativa utiliza un razonamiento inductivo: de lo particular (datos) a lo general (teoría emergente).
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "basico"
  tags: ["generalizacion", "objetivos"]

variables:
  id: random(1, 50)

respuesta: "cuantitativa"
tipo: completar

enunciado: "Si el objetivo principal es generalizar los resultados a una población más amplia, se trata de investigación {id}."

explicacion: |
  La cuantitativa busca la generalización mediante muestras representativas y análisis estadístico.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "basico"
  tags: ["profundidad", "objetivos"]

variables:
  id: random(1, 50)

respuesta: "cualitativa"
tipo: completar

enunciado: "Si el objetivo es profundizar en un caso específico sin buscar generalizar a toda la población, se trata de investigación {id}."

explicacion: |
  La cualitativa prioriza la comprensión detallada del contexto y la experiencia particular.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["rol", "objetividad"]

variables:
  rol: random(1, 10)

respuesta: "cuantitativa"
tipo: completar

enunciado: "Un rol de investigador más objetivo y distante, recolectando datos estructurados, corresponde a la metodología {rol}."

explicacion: |
  En la cuantitativa, el investigador busca mantener la distancia para evitar sesgos y mantener la objetividad.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["rol", "interpretacion"]

variables:
  rol: random(1, 10)

respuesta: "cualitativa"
tipo: completar

enunciado: "Un rol de investigador más cercano e interpretativo, utilizando técnicas como la observación participante, corresponde a la metodología {rol}."

explicacion: |
  En la cualitativa, el investigador es parte del proceso de recolección de datos, generando una comprensión rica y detallada.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["analisis", "estadistica"]

variables:
  metodo: random(1, 20)

respuesta: "cuantitativa"
tipo: completar

enunciado: "El uso de fórmulas matemáticas y estadísticas para calcular promedios o correlaciones es característico de la metodología {metodo}."

explicacion: |
  La cuantitativa depende del análisis estadístico para validar hipótesis y encontrar patrones.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "avanzado"
  tags: ["replicabilidad", "objetividad"]

variables:
  caso: random(1, 15)

respuesta: "cuantitativa"
tipo: completar

enunciado: "La búsqueda de la replicabilidad del estudio mediante métodos estandarizados es un pilar de la metodología {caso}."

explicacion: |
  La cuantitativa busca que otros investigadores puedan repetir el estudio y obtener resultados similares.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["hipotesis", "cuantitativa"]

variables:
  n: random(1, 100)

respuesta: "cuantitativa"
tipo: completar

enunciado: "Probar hipótesis establecidas previamente es el objetivo central de la investigación {n}."

explicacion: |
  La cuantitativa parte de hipótesis deductivas que se verifican con datos empíricos.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["teoria", "emergente"]

variables:
  n: random(1, 100)

respuesta: "cualitativa"
tipo: completar

enunciado: "La generación de teorías que emergen de los datos recolectados es propia de la investigación {n}."

explicacion: |
  La cualitativa permite que las categorías y teorías surjan inductivamente de la interacción con el campo.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["causalidad", "cuantitativa"]

variables:
  id: random(1, 50)

respuesta: "cuantitativa"
tipo: completar

enunciado: "Encontrar relaciones de causa y efecto que puedan generalizarse es un objetivo típico de la metodología {id}."

explicacion: |
  La cuantitativa busca explicar fenómenos mediante relaciones causales medibles.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["subjetividad", "cualitativa"]

variables:
  id: random(1, 50)

respuesta: "cualitativa"
tipo: completar

enunciado: "Explorar significados y experiencias subjetivas desde la perspectiva de los participantes es el foco de la metodología {id}."

explicacion: |
  La cualitativa valora la experiencia vivida y la interpretación personal.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["seleccion", "mc"]

variables:
  objetivo: uno_de(["medir patrones", "comprender significados"])

respuesta: "cuantitativa"
tipo: mc
opciones_explicitas: ["cuantitativa", "cualitativa", "experimental", "descriptiva"]

enunciado: "Si el objetivo es medir patrones generales y probar hipótesis, ¿qué metodología se utiliza?"

explicacion: |
  La cuantitativa se enfoca en la medición y la prueba de hipótesis mediante datos numéricos.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["seleccion", "mc"]

variables:
  objetivo: uno_de(["profundizar en el caso", "generalizar resultados"])

respuesta: "cualitativa"
tipo: mc
opciones_explicitas: ["cuantitativa", "cualitativa", "mixta", "longitudinal"]

enunciado: "Si el objetivo es profundizar en un caso específico desde la perspectiva de los participantes, ¿qué metodología se utiliza?"

explicacion: |
  La cualitativa se centra en la comprensión profunda y contextualizada de fenómenos específicos.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["seleccion", "mc"]

variables:
  objetivo: uno_de(["razonamiento deductivo", "razonamiento inductivo"])

respuesta: "cuantitativa"
tipo: mc
opciones_explicitas: ["cuantitativa", "cualitativa", "fenomenológica", "etnográfica"]

enunciado: "¿Qué metodología se asocia comúnmente con el razonamiento deductivo?"

explicacion: |
  La cuantitativa utiliza el razonamiento deductivo para verificar hipótesis derivadas de teorías previas.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["seleccion", "mc"]

variables:
  objetivo: uno_de(["datos estandarizados", "datos no estandarizados"])

respuesta: "cuantitativa"
tipo: mc
opciones_explicitas: ["cuantitativa", "cualitativa", "acción", "participativa"]

enunciado: "¿Qué metodología utiliza predominantemente datos estandarizados?"

explicacion: |
  La cuantitativa requiere datos estandarizados para asegurar la comparabilidad y el análisis estadístico.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["seleccion", "mc"]

variables:
  objetivo: uno_de(["relaciones de causa y efecto", "experiencias vividas"])

respuesta: "cuantitativa"
tipo: mc
opciones_explicitas: ["cuantitativa", "cualitativa", "histórica", "comparativa"]

enunciado: "¿Qué metodología busca establecer relaciones de causa y efecto?"

explicacion: |
  La cuantitativa se enfoca en identificar y medir relaciones causales entre variables.
```

```
metadata:
  materia: "investigacion"
  tema: "metodologia_cualitativa_vs_cuantitativa"
  nivel: "intermedio"
  tags: ["seleccion", "mc"]

variables:
  objetivo: uno_de(["comprensión rica", "objetividad distante"])

respuesta: "cualitativa"
tipo: mc
opciones_explicitas: ["cuantitativa", "cualitativa", "experimental", "transversal"]

enunciado: "¿Qué metodología busca una comprensión rica y detallada del fenómeno estudiado?"

explicacion: |
  La cualitativa prioriza la riqueza descriptiva y la interpretación profunda del contexto.
```

## Sección: construir-y-usar-un-modelo-cientifico (25 preguntas)

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

tipo: mc
opciones_explicitas: ["Una representación exacta y completa de la realidad sin omisiones.", "Una representación simplificada de la realidad para explicar o predecir fenómenos.", "Un conjunto de leyes matemáticas que no requieren validación experimental.", "Un dibujo artístico de un fenómeno natural."]

enunciado: "En el ámbito de la ciencia, un modelo se define como ___."

respuesta: "Una representación simplificada de la realidad para explicar o predecir fenómenos."

explicacion: |
  Un modelo científico no intenta ser una copia idéntica de la realidad, sino una simplificación que permite aislar las variables más importantes para entender un fenómeno.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["simplificacion", "utilidad"]

tipo: vf
enunciado: "Un modelo científico es útil precisamente porque ignora ciertos detalles irrelevantes para el fenómeno que se está estudiando."

respuesta: verdadero

explicacion: |
  Si un modelo fuera tan complejo como la realidad misma, sería imposible de usar para realizar predicciones o cálculos. La simplificación es su mayor virtud.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["componentes", "variables"]

tipo: completar
respuestas_validas:
  - "gravedad"
  - "masa"

enunciado: "Para modelar la caída de un objeto, un científico suele considerar como variables principales la masa y la ___."

respuesta: "gravedad"

explicacion: |
  Los modelos requieren la selección de variables clave. En el caso de la caída libre, la masa y la gravedad son determinantes para predecir la aceleración.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["validación", "ciclo_cientifico"]

tipo: ordenar
opciones_explicitas: ["Observación del fenómeno", "Construcción del modelo", "Prueba del modelo con datos reales", "Ajuste del modelo según resultados"]

enunciado: "Ordene los pasos lógicos para el uso y refinamiento de un modelo científico:"

respuesta_orden: ["Observación del fenómeno", "Construcción del modelo", "Prueba del modelo con datos reales", "Ajuste del modelo según resultados"]

explicacion: |
  El proceso científico es cíclico: se observa, se propone un modelo, se pone a prueba y, si los resultados no coinciden con la realidad, el modelo se ajusta o se descarta.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "avanzado"
  tags: ["prediccion", "explicacion"]

tipo: mc
opciones_explicitas: ["Un modelo solo sirve para explicar el pasado.", "Un modelo puede ser usado para explicar mecanismos y predecir resultados futuros.", "Los modelos científicos son verdades absolutas e inmutables.", "Un modelo solo es válido si es visual y no matemático."]

enunciado: "¿Cuál es una de las funciones fundamentales de un modelo científico bien construido?"

respuesta: "Un modelo puede ser usado para explicar mecanismos y predecir resultados futuros."

explicacion: |
  La capacidad predictiva es el estándar de oro de un modelo: si el modelo predice correctamente lo que sucederá bajo ciertas condiciones, su valor científico aumenta.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["modelo", "representacion", "fisica"]

variables:
  datos: [["un objeto cae desde una torre", "caída libre"], ["una pelota es lanzada hacia arriba", "lanzamiento vertical"], ["una gota de lluvia cae al suelo", "caída de gota"]]
  idx: uno_de([0,1,2])
  escenario: datos[idx][0]

enunciado: "Para estudiar el movimiento de {escenario}, los científicos utilizan un modelo de 'caída libre'. Este modelo es una representación que:"

opciones_explicitas: ["Simplifica la realidad ignorando la resistencia del aire", "Es una copia exacta y perfecta de la realidad", "Es un fenómeno que no se puede representar"]

respuesta: "Simplifica la realidad ignorando la resistencia del aire"
tipo: mc

explicacion: |
  Un modelo científico no es la realidad misma, sino una simplificación que permite aislar las variables más importantes (en este caso, la gravedad) para realizar predicciones precisas.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["elementos", "modelo"]

variables:
  caso: uno_de([["el clima de una ciudad", "clima"], ["el crecimiento de una población de bacterias", "población"], ["el flujo de agua en un río", "río"]])

enunciado: "Al construir un modelo para representar {caso[0]}, es necesario definir variables. Si queremos predecir el comportamiento del sistema, la capacidad de un modelo para decirnos qué pasará en el futuro se denomina:"

opciones_explicitas: ["Capacidad predictiva", "Capacidad descriptiva", "Capacidad de observación"]

respuesta: "Capacidad predictiva"
tipo: mc

explicacion: |
  La utilidad principal de un modelo científico es su poder predictivo: si el modelo es válido, los resultados que arroja deben coincidir con lo que ocurre en la realidad bajo las mismas condiciones.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

enunciado: "Para desarrollar un modelo científico sobre el efecto de un fertilizante en el crecimiento de una planta, se deben seguir estos pasos en orden lógico:"

opciones_explicitas: ["Observar el fenómeno y plantear una pregunta", "Construir el modelo matemático o conceptual", "Realizar experimentos para validar el modelo", "Ajustar el modelo según los resultados obtenidos"]

respuesta_orden: ["Observar el fenómeno y plantear una pregunta", "Construir el modelo matemático o conceptual", "Realizar experimentos para validar el modelo", "Ajustar el modelo según los resultados obtenidos"]
tipo: ordenar

explicacion: |
  El proceso de modelado es iterativo. Comienza con la observación, sigue con la creación de una representación, se pone a prueba mediante la experimentación y se refina si los datos no coinciden.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["validación", "verdad"]

enunciado: "Si un modelo científico predice que la temperatura subirá 2 grados mañana, pero la temperatura sube 10 grados, ¿el modelo ha sido validado?"

respuesta: falso
tipo: vf

explicacion: |
  Un modelo se valida cuando sus predicciones coinciden con las observaciones empíricas. Si hay una discrepancia significativa, el modelo debe ser revisado o descartado.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "avanzado"
  tags: ["historia", "modelos"]

enunciado: "El modelo atómico de Bohr representa al átomo como un sistema solar en miniatura, donde los electrones orbitan el núcleo en trayectorias circulares fijas. En este modelo, la variable que determina el nivel de energía del electrón es la ___."

respuestas_validas:
  - "distancia al núcleo"
  - "carga del núcleo"
  - "velocidad orbital"

respuesta: "distancia al núcleo"
tipo: completar

explicacion: |
  En el modelo de Bohr, la posición (distancia) de los electrones respecto al núcleo está cuantizada y define los niveles de energía permitidos.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["epistemologia", "metodologia"]

tipo: mc
opciones_explicitas: ["Representar la realidad de forma exacta y completa", "Crear una versión simplificada para explicar o predecir fenómenos", "Sustituir definitivamente a la realidad para evitar experimentos", "Demostrar que una teoría es una verdad absoluta e inmutable"]

enunciado: "Un error común al trabajar con modelos científicos es creer que su objetivo es ser una representación exacta de la realidad. ¿Cuál es la función principal de un modelo?"

respuesta: "Crear una versión simplificada para explicar o predecir fenómenos"

explicacion: |
  Un modelo es, por definición, una simplificación. Si fuera igual a la realidad en todos sus detalles, sería tan complejo como la realidad misma y perdería su utilidad para explicar o predecir fenómenos específicos.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["limitaciones", "validez"]

tipo: vf
respuesta: falso

enunciado: "Si un modelo científico ha sido utilizado con éxito para predecir un fenómeno en un rango de condiciones determinado, esto significa que el modelo es una representación perfecta y universal de la realidad."

explicacion: |
  Falso. Los modelos tienen un "dominio de validez". Un modelo puede ser excelente para predecir el movimiento de un gas a presión constante, pero fallar completamente si la presión cambia drásticamente.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["variables", "simplificacion"]

tipo: completar
respuestas_validas:
  - "Temperatura"
  - "temperatura"

enunciado: "Al construir un modelo para estudiar el comportamiento de un gas ideal, el científico debe seleccionar ciertas variables críticas. Si mantenemos constante la temperatura para enfocarnos en la relación entre la presión y el volumen (Ley de Boyle), estamos ignorando la variable ___."

respuesta: "Temperatura"

explicacion: |
  La simplificación implica elegir qué variables incluir (variables independientes/dependientes) y cuáles omitir (variables controladas o ignoradas) para reducir la complejidad del sistema.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Observación del fenómeno", "Construcción del modelo simplificado", "Puesta a prueba mediante predicciones", "Refinamiento o descarte del modelo"]

enunciado: "Ordena los pasos lógicos en el proceso de construcción y uso de un modelo científico para resolver un problema de investigación:"

respuesta_orden: ["Observación del fenómeno", "Construcción del modelo simplificado", "Puesta a prueba mediante predicciones", "Refinamiento o descarte del modelo"]

explicacion: |
  El ciclo científico comienza con la observación, sigue con la creación de una representación (modelo), se utiliza para predecir resultados y, finalmente, los datos experimentales permiten ajustar el modelo o descartarlo si no funciona.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "avanzado"
  tags: ["error_conceptual", "prediccion"]

tipo: vf

enunciado: "Si un modelo predice que el valor de una variable será 10.5, pero el experimento arroja 10.7, ¿el modelo es necesariamente falso?"

respuesta: falso

explicacion: |
  No necesariamente. En ciencia, los modelos suelen tener un margen de error debido a las simplificaciones realizadas. La discrepancia puede deberse a la incertidumbre de las mediciones o a que el modelo es una aproximación útil pero no exacta.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["epistemologia", "metodologia"]

respuesta: "representacion"
tipo: "completar"
respuestas_validas:
  - "representacion"
  - "representación"

enunciado: "A diferencia de la realidad física completa, un modelo científico es una ___ simplificada de la misma que permite estudiar un fenómeno específico."

explicacion: |
  Un modelo no es la realidad, sino una abstracción o representación que selecciona solo las variables relevantes para un propósito determinado.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["propiedades", "utilidad"]

variables:
  escenario: uno_de([["predecir", "explicar"], ["describir", "observar"]])

respuesta: escenario[0]
tipo: "mc"
opciones_explicitas: ["predecir", "describir", "observar", "repetir"]

enunciado: "Una de las funciones principales de un modelo científico es la capacidad de ___ fenómenos futuros, diferenciándose de la simple observación pasiva."

explicacion: |
  Mientras que la observación describe lo que ocurre, el modelo busca capturar la lógica del sistema para poder predecir comportamientos futuros.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["falsacion", "metodologia"]

respuesta: falso
tipo: "vf"

enunciado: "Si un modelo científico es capaz de representar fielmente un fenómeno en un experimento controlado, esto significa que el modelo es una copia exacta de la realidad."

explicacion: |
  Falso. Todo modelo es, por definición, una simplificación. Si fuera una copia exacta, sería tan complejo como la realidad misma y perdería su utilidad predictiva.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

respuesta_orden: ["Observación", "Construcción", "Validación", "Refinamiento"]
tipo: "ordenar"
opciones_explicitas: ["Observación", "Construcción", "Validación", "Refinamiento"]

enunciado: "Ordena las etapas lógicas para el desarrollo y uso de un modelo científico:"

explicacion: |
  El proceso comienza con la observación del fenómeno, sigue con la construcción del modelo, luego se valida contra la realidad y finalmente se refina si hay discrepancias.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "avanzado"
  tags: ["epistemologia", "conceptos"]

respuesta: "la teoría es una generalización, el modelo es una herramienta"
tipo: "mc"
opciones_explicitas: ["el modelo es una herramienta para aplicar una teoría", "la teoría es un modelo simplificado", "la teoría es una generalización, el modelo es una herramienta", "el modelo es una ley universal"]

enunciado: "En el marco del método científico, se distingue que ___."

explicacion: |
  La teoría es un marco explicativo general, mientras que el modelo es una representación específica y simplificada que permite operacionalizar esa teoría para estudiar un fenómeno concreto.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["modelo", "simulacion", "fisica"]

variables:
  datos: [["Un objeto cae desde 10m", "1.43"], ["Un objeto cae desde 20m", "2.02"], ["Un objeto cae desde 5m", "1.01"]]
  idx: uno_de([0, 1, 2])

enunciado: "Para estudiar el movimiento, usamos un modelo que ignora la resistencia del aire. Si el objeto se lanza desde {datos[idx][0]}, el tiempo estimado de caída es de ___ segundos."

respuesta: datos[idx][1]
tolerancia_abs: 0.05
tipo: completar

explicacion: |
  Un modelo científico simplifica la realidad al omitir variables complejas (como el viento) para facilitar la predicción matemática.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

enunciado: "Un mapa de carreteras es una representación simplificada de un territorio real que omite detalles como la altura de los árboles o el color de las casas para facilitar la navegación. ¿Podemos decir que un mapa es un modelo científico?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc

explicacion: |
  Sí, un modelo es una representación simplificada de la realidad que permite explicar o predecir fenómenos (en este caso, rutas de desplazamiento).
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["utilidad", "limitaciones"]

variables:
  datos: [["predecir el clima", "predecir"], ["explicar la evolución", "explicar"], ["entender la estructura atómica", "explicar"]]
  idx: uno_de([0, 1, 2])

enunciado: "El propósito principal de un modelo científico es {datos[idx][0]}. Por lo tanto, un modelo sirve para ___ fenómenos."

opciones_explicitas: ["predecir", "explicar", "ambos"]
respuesta: "ambos"
tipo: mc

explicacion: |
  Los modelos tienen una doble función: explicar por qué ocurre algo y predecir qué ocurrirá en condiciones similares.
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: ["Observar el fenómeno", "Construir el modelo", "Validar con datos reales"]
respuesta_orden: ["Observar el fenómeno", "Construir el modelo", "Validar con datos reales"]
tipo: ordenar

enunciado: "Para desarrollar un modelo científico riguroso, se deben seguir estos pasos en orden:"

explicacion: |
  Primero se identifica el fenómeno (observación), luego se crea la representación (construcción) y finalmente se comprueba si coincide con la realidad (validación).
```

```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "avanzado"
  tags: ["error", "precisión"]

enunciado: "Si un modelo matemático predice que un objeto caerá en 2 segundos, pero en el experimento real tarda 5 segundos debido a la fricción del aire (que el modelo ignoró), decimos que el modelo tiene un error de ___."

opciones_explicitas: ["error_simplificacion", "error_complejidad", "error_medicion"]
respuesta: "error_simplificacion"
tipo: mc

explicacion: |
  Al omitir variables relevantes para simplificar el cálculo, el modelo pierde precisión frente a la realidad, lo que se conoce como error por simplificación.
```

## Sección: trabajo-de-campo-enfoque-socioantropologico (23 preguntas)

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "basico"
  tags: ["cualitativo", "limitaciones"]

variables:
  metodo: "encuestas masivas"
  dato_perdido: "matices"

respuesta: "matices"
tipo: completar

enunciado: "A diferencia de las {metodo}, el trabajo de campo permite captar los {dato_perdido} culturales que se pierden en los cuestionarios cerrados."

explicacion: |
  Las encuestas masivas tienden a estandarizar respuestas, perdiendo los matices, gestos y contextos que solo la observación directa puede revelar.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "intermedio"
  tags: ["objetivo", "comprension"]

variables:
  objetivo: "comprension profunda"

respuesta: "comprension profunda"
tipo: completar

enunciado: "El objetivo central del enfoque socioantropológico es la {objetivo} de los significados y relaciones del grupo estudiado."

explicacion: |
  No se busca solo describir, sino comprender en profundidad la lógica interna del grupo social desde su propia cultura.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "intermedio"
  tags: ["observacion_participante", "inmersion"]

variables:
  rol_negativo: "turista invisible"
  rol_positivo: "involucrarse"

respuesta: "involucrarse"
tipo: completar

enunciado: "La observación participante no es mirar como un {rol_negativo}, sino {rol_positivo} lo suficiente en la vida del grupo para ganar confianza."

explicacion: |
  La clave de la observación participante es la inmersión activa, no la distancia pasiva que mantiene un observador externo o 'turista'.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "basico"
  tags: ["sociedad", "significados"]

variables:
  naturaleza: "tejido de significados"

respuesta: "tejido de significados"
tipo: completar

enunciado: "La sociedad no es un conjunto de números abstractos, sino un {naturaleza}, costumbres y relaciones humanas complejas."

explicacion: |
  Esta visión es fundamental para justificar por qué los métodos cuantitativos solos son insuficientes para entender la realidad social completa.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "basico"
  tags: ["ejemplo", "cuantitativo"]

variables:
  pregunta_cuant: "horas en TikTok"

respuesta: "horas en TikTok"
tipo: completar

enunciado: "Un enfoque cuantitativo sobre redes sociales podría preguntar '¿Cuántas {pregunta_cuant} pasas?' para obtener un promedio numérico."

explicacion: |
  Este ejemplo ilustra la búsqueda de datos medibles y estandarizados, característicos del enfoque cuantitativo, opuesto a la profundidad cualitativa.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "intermedio"
  tags: ["ejemplo", "cualitativo"]

variables:
  accion_cual: "pasar tiempo"

respuesta: "pasar tiempo"
tipo: completar

enunciado: "Un trabajo de campo socioantropológico implicaría {accion_cual} en los espacios donde se genera la cultura digital, observando interacciones."

explicacion: |
  La inmersión en los espacios naturales de los participantes permite entender el uso de la tecnología desde su contexto social, no solo desde el tiempo consumido.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "avanzado"
  tags: ["cultura", "normas"]

variables:
  concepto: "reglas no escritas"

respuesta: "reglas no escritas"
tipo: completar

enunciado: "La inmersión en el trabajo de campo permite descubrir las {concepto} que gobiernan la vida social y que rara vez aparecen en documentos oficiales."

explicacion: |
  Las normas informales son cruciales para entender el funcionamiento real de un grupo social, más allá de las leyes o reglamentos formales.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "basico"
  tags: ["habilidades", "empatia"]

variables:
  habilidad: "mirada critica y empatica"

respuesta: "mirada critica y empatica"
tipo: completar

enunciado: "El trabajo de campo en secundaria es vital para desarrollar una {habilidad}, capaz de analizar problemas sociales sin juzgarlos a priori."

explicacion: |
  La formación del investigador joven incluye aprender a suspender el juicio y comprender las raíces culturales de los comportamientos observados.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "intermedio"
  tags: ["profundidad", "perspectiva"]

variables:
  enfoque: "socioantropologico"

respuesta: "como y por que"
tipo: completar

enunciado: "Mientras otros métodos responden al 'qué', el enfoque {enfoque} permite entender el 'como' y el 'por que' desde la perspectiva de los actores."

explicacion: |
  La riqueza del enfoque cualitativo reside en explicar los procesos y motivaciones internas, no solo los resultados observables.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "avanzado"
  tags: ["confianza", "etica"]

variables:
  condicion: "confianza"

respuesta: "confianza"
tipo: completar

enunciado: "Para acceder a información sensible o cotidiana, el investigador debe ganar la {condicion} del grupo mediante la participación."

explicacion: |
  La ética y la relación interpersonal son componentes técnicos del trabajo de campo; sin confianza, la recolección de datos profundos es imposible.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "basico"
  tags: ["datos_cualitativos", "sintomas"]

variables:
  dato_cual: "gestos y silencios"

respuesta: "gestos y silencios"
tipo: completar

enunciado: "En el trabajo de campo, los {dato_cual} y los rituales son datos tan importantes como las palabras habladas."

explicacion: |
  La comunicación no verbal y los silencios revelan tensiones, jerarquías y significados que el discurso explícito a menudo oculta.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "intermedio"
  tags: ["lenguaje", "cotidianidad"]

variables:
  aspecto: "lenguaje cotidiano"

respuesta: "lenguaje cotidiano"
tipo: completar

enunciado: "El investigador debe prestar atención al {aspecto} para entender cómo los participantes construyen su realidad social."

explicacion: |
  El uso del lenguaje en la vida diaria es un indicador clave de las estructuras sociales, identidades y relaciones de poder dentro del grupo.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "intermedio"
  tags: ["ejemplo", "organizacion_social"]

variables:
  actividad: "asambleas"

respuesta: "asambleas"
tipo: completar

enunciado: "Participar en las {actividad} o entender cómo se organizan los vecinos es una forma de observar la resolución de problemas comunes."

explicacion: |
  Los espacios de decisión colectiva son laboratorios ideales para observar la dinámica de poder, la solidaridad y la conflictividad social.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "basico"
  tags: ["fuentes", "datos"]

variables:
  fuente: "estadisticas oficiales"

respuesta: "estadisticas oficiales"
tipo: completar

enunciado: "El trabajo de campo se nutre de relatos en primera persona, a diferencia de las {fuente} que ofrecen datos agregados y distantes."

explicacion: |
  Las estadísticas oficiales son útiles para el contexto macro, pero carecen de la voz y la experiencia viva de los individuos estudiados.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "avanzado"
  tags: ["causalidad", "estructura"]

variables:
  causa: "raices culturales"

respuesta: "raices culturales"
tipo: completar

enunciado: "Para analizar problemas sociales sin prejuicios, hay que comprender sus {causa} y estructurales, no solo sus manifestaciones inmediatas."

explicacion: |
  La comprensión profunda exige ir más allá de la superficie del conflicto para identificar los factores históricos y culturales subyacentes.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "intermedio"
  tags: ["tecnicas", "observacion"]

variables:
  pregunta: "tecnicas_centrales"

respuesta: "observacion_participante"
tipo: mc
opciones_explicitas: ["observacion_participante", "encuesta_por_muestreo", "experimento_de_laboratorio", "analisis_de_contenido"]

enunciado: "¿Cuál es una de las técnicas centrales del enfoque socioantropológico en el trabajo de campo?"

explicacion: |
  La observación participante es distintiva porque el investigador se integra al grupo, mientras que las otras opciones son métodos más distantes o experimentales.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "intermedio"
  tags: ["emic", "etic"]

variables:
  pregunta: "vision_emic"

respuesta: "vision_desde_adentro"
tipo: mc
opciones_explicitas: ["vision_desde_adentro", "vision_desde_fuera", "vision_objetiva_neutra", "vision_estadistica"]

enunciado: "El término 'emic' se refiere a:"

explicacion: |
  Emic es la perspectiva interna del grupo. Etic es la perspectiva externa del observador. La distinción es fundamental en antropología.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "basico"
  tags: ["rol", "actitud"]

variables:
  pregunta: "rol_investigador"

respuesta: "aprender_de_los_participantes"
tipo: mc
opciones_explicitas: ["validar_sus_teorias", "aprender_de_los_participantes", "corregir_los_costumbres", "medir_el_tiempo"]

enunciado: "En el trabajo de campo socioantropológico, el investigador llega dispuesto a:"

explicacion: |
  La humildad epistemológica implica reconocer que los participantes son expertos en su propia vida y que el investigador tiene mucho que aprender.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "intermedio"
  tags: ["espacios", "contexto"]

variables:
  contexto: "espacios_cotidianos"

respuesta: "espacios_cotidianos"
tipo: completar

enunciado: "Para estudiar el uso de redes sociales, no basta con preguntar horas; hay que observar los {contexto} donde se gela interacción digital."

explicacion: |
  El contexto espacial y social donde ocurre la práctica es inseparable del significado de esa práctica para los usuarios.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "avanzado"
  tags: ["metodologia", "proceso"]

variables:
  proceso: "teoria_a_practica"

respuesta: "teoria_a_practica"
tipo: completar

enunciado: "El trabajo de campo es el puente entre la {proceso} y la recolección de datos empíricos en el terreno."

explicacion: |
  No es solo aplicar teoría, sino generar teoría a partir de la práctica observada. Es un diálogo constante entre concepto y realidad.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "intermedio"
  tags: ["critica_cuantitativo", "datos"]

variables:
  pregunta: "dato_perdido"

respuesta: "matices_culturales"
tipo: mc
opciones_explicitas: ["matices_culturales", "promedios_numericos", "frecuencias_absolutas", "tablas_estadisticas"]

enunciado: "¿Qué se pierde frecuentemente en cuestionarios cerrados pero se capta en el trabajo de campo?"

explicacion: |
  Los matices culturales (tono, contexto, ironía, relación) son difíciles de cuantificar y a menudo se pierden en la estandarización de las encuestas.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "basico"
  tags: ["fuentes", "narrativa"]

variables:
  fuente: "relatos_primera_persona"

respuesta: "relatos_primera_persona"
tipo: completar

enunciado: "El trabajo de campo se nutre de {fuente}, permitiendo acceder a la experiencia vivida de los sujetos."

explicacion: |
  La narrativa personal es la fuente primaria de la comprensión cualitativa, ofreciendo profundidad y autenticidad a los datos.
```

```
metadata:
  materia: "investigación"
  tema: "trabajo_de_campo_enfoque_socioantropologico"
  nivel: "basico"
  tags: ["educacion", "secundaria"]

variables:
  pregunta: "finalidad_educativa"

respuesta: "mirada_critica_y_empatica"
tipo: mc
opciones_explicitas: ["memorizar_datos", "mirada_critica_y_empatica", "calcular_estadisticas", "aplicar_formulas"]

enunciado: "En el contexto escolar, el trabajo de campo busca desarrollar en los estudiantes:"

explicacion: |
  El objetivo pedagógico es formar ciudadanos con capacidad de análisis crítico y empatía social, no solo técnicos de datos.
```

