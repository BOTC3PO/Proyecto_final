# Examen jefe — [PENDIENTE #913]

> Logro #913. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 7 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **175 preguntas totales** en 7/7 secciones.

---

## Sección: corrientes-filosofia-de-la-ciencia (25 preguntas)

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "basico"
  tags: ["popper", "falsacionismo", "demarcacion"]

respuesta: "falsabilidad"
tipo: completar
respuestas_validas:
  - "falsabilidad"
  - "falsacion"

enunciado: "Para Karl Popper, el criterio de demarcación que distingue a la ciencia de la metafísica es la ___________."

explicacion: |
  Para Popper, una teoría es científica solo si es capaz de ser refutada por la experiencia. Si una teoría no puede ser sometida a pruebas que puedan contradecirla, no es científica.
```

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia_normal"]

opciones_explicitas: ["ciencia_normal", "crisis", "revolucion"]

respuesta: "crisis"
tipo: mc

enunciado: "Según Thomas Kuhn, el periodo caracterizado por la acumulación de anomalías que el modelo vigente no puede explicar se denomina ___________."

explicacion: |
  La crisis es el paso previo a la revolución científica. Ocurre cuando las anomalías son tan numerosas o profundas que la comunidad científica pierde la confianza en el paradigma vigente.
```

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "basico"
  tags: ["feyerabend", "anarquismo", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "¿Sostiene Paul Feyerabend que existe un único método científico universal que debe seguirse para garantizar el progreso del conocimiento?"

explicacion: |
  Feyerabend, con su principio de "todo vale" (anything goes), argumentó que no existe un método único y que la ciencia progresa precisamente porque los científicos rompen las reglas metodológicas establecidas.
```

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ordenar"]

opciones_explicitas: ["Ciencia Normal", "Crisis", "Revolución Científica", "Nuevo Paradigma"]

respuesta_orden: ["Ciencia Normal", "Crisis", "Revolución Científica", "Nuevo Paradigma"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas del ciclo de desarrollo científico propuesto por Thomas Kuhn:"

explicacion: |
  El ciclo comienza con la Ciencia Normal (trabajo bajo un paradigma), sigue con una Crisis (anomalías), lleva a una Revolución Científica (cambio de modelo) y culmina con la instauración de un Nuevo Paradigma.
```

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "avanzado"
  tags: ["popper", "kuhn", "feyerabend"]

opciones_explicitas: ["falsacionismo", "paradigmas", "anarquismo"]

respuesta: "falsacionismo"
tipo: mc

enunciado: "Si un autor afirma que el progreso científico se da a través de la eliminación de teorías que han sido refutadas por la experiencia, se refiere al ___________."

explicacion: |
  El falsacionismo de Popper se basa en la idea de que la ciencia no busca verdades absolutas, sino teorías que aún no han sido refutadas (corroboradas), avanzando mediante la eliminación de errores.
```

```
metadata:
  materia: "investigacion"
  tema: "falsacionismo_popper"
  nivel: "intermedio"
  tags: ["popper", "falsacionismo", "demarcacion"]

variables:
  escenario: uno_de([["La teoría de la relatividad de Einstein predice que la luz de una estrella se curva al pasar cerca del sol.", "falsable"], ["La teoría del psicoanálisis de Freud puede explicar tanto un comportamiento heroico como uno egoísta sin contradicciones.", "no_falsable"], ["La teoría de la selección natural de Darwin propone cambios en las poblaciones a través de generaciones.", "falsable"]])

enunciado: "De acuerdo con el falsacionismo de Karl Popper, una teoría es científica si es capaz de ser sometida a pruebas que podrían refutarla. Analizando el siguiente caso: '{escenario[0]}', la naturaleza de esta teoría es ___."

respuestas_validas:
  - "falsable"
  - "no_falsable"
respuesta: escenario[1]
tipo: completar

explicacion: |
  Para Popper, la ciencia no progresa confirmando verdades, sino eliminando errores. Una teoría es científica si establece condiciones bajo las cuales, de ocurrir, la teoría quedaría refutada (falsada). Si una teoría explica todo lo que sucede (como criticaba Popper del psicoanálisis), entonces no es científica porque no se arriesga a ser falsa.
```

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia_normal"]

enunciado: "Thomas Kuhn sostiene que la ciencia no progresa de forma lineal, sino mediante saltos. El proceso sigue este orden: primero ocurre la 'Ciencia Normal', luego surge una serie de anomalías que no pueden ser resueltas, lo que lleva a una ___ y, finalmente, a un cambio de paradigma."

opciones_explicitas: ["Crisis", "Revolución Científica", "Cambio de Paradigma"]
respuesta: "Crisis"
tipo: mc

explicacion: |
  Según Kuhn, la 'Ciencia Normal' opera bajo un paradigma aceptado. Cuando las anomalías se acumulan y el paradigma actual no puede resolverlas, se entra en una fase de 'Crisis', que es el preludio necesario para una 'Revolución Científica'.
```

```
metadata:
  materia: "investigacion"
  tema: "anarquismo_epistemologico_feyerabend"
  nivel: "avanzado"
  tags: ["feyerabend", "anarquismo", "metodologia"]

enunciado: "Paul Feyerabend argumenta en su obra 'Contra el método' que no existe un único método científico universal que deba seguirse estrictamente para que el conocimiento sea válido. Su principio fundamental es 'Anything goes' (Todo vale). ¿Es esto cierto?"

opciones_explicitas: [verdadero, falso]
respuesta: verdadero
tipo: vf

explicacion: |
  Feyerabend sostiene que la historia de la ciencia muestra que los grandes avances ocurrieron precisamente porque los científicos violaron las reglas metodológicas establecidas. Por tanto, no hay una regla única e inamovible para hacer ciencia.
```

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "historia_ciencia", "ordenar"]

enunciado: "Ordena los eventos que describen el paso de la física Newtoniana a la física Relativista según el modelo de Kuhn:"

opciones_explicitas: ["Predominio del paradigma de Newton", "Aparición de anomalías (ej. órbita de Mercurio)", "Crisis del modelo clásico", "Revolución y nuevo paradigma de Einstein"]
respuesta_orden: ["Predominio del paradigma de Newton", "Aparición de anomalías (ej. órbita de Mercurio)", "Crisis del modelo clásico", "Revolución y nuevo paradigma de Einstein"]
tipo: ordenar

explicacion: |
  El modelo de Kuhn es cíclico: 1) Estabilidad (Paradigma), 2) Anomalías (problemas no resueltos), 3) Crisis (pérdida de confianza en el paradigma) y 4) Revolución (sustitución por uno nuevo).
```

```
metadata:
  materia: "investigacion"
  tema: "corrientes_filosofia_ciencia"
  nivel: "avanzado"
  tags: ["comparativa", "popper", "kuhn", "feyerabend"]

enunciado: "Si un investigador se enfoca exclusivamente en la capacidad de una teoría para ser refutada mediante la experimentación, ¿qué autor está siguiendo?"

opciones_explicitas: ["Popper", "Kuhn", "Feyerabend"]
respuesta: "Popper"
tipo: mc

explicacion: |
  El enfoque centrado en la refutabilidad (falsacionismo) es la piedra angular del pensamiento de Karl Popper para distinguir la ciencia de la pseudociencia.
```

```
metadata:
  materia: "investigacion"
  tema: "falsacionismo"
  nivel: "intermedio"
  tags: ["popper", "falsacionismo", "epistemologia"]

respuesta: falso
tipo: vf

enunciado: "Para Karl Popper, el criterio de demarcación de la ciencia es la capacidad de una teoría para ser verificada empíricamente de forma definitiva."

explicacion: |
  El falsacionismo de Popper sostiene que la ciencia no progresa mediante la verificación (que es lógicamente imposible para leyes universales), sino mediante la falsación: una teoría es científica si es capaz de ser refutada por un enunciado observacional.
```

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia-normal"]

opciones_explicitas: ["ciencia-normal", "revolucion-cientifica"]

respuesta: "ciencia-normal"
tipo: mc

enunciado: "Según Thomas Kuhn, el periodo en el que los científicos se dedican a resolver 'enigmas' dentro de un marco teórico aceptado se denomina: ___"

pasos:
  - "Identificar si el enunciado describe un periodo de estabilidad o de crisis."

explicacion: |
  En la ciencia-normal, los científicos no cuestionan los fundamentos, sino que resuelven problemas dentro del modelo vigente. La ruptura de este estado da lugar a la revolución científica.
```

```
metadata:
  materia: "investigacion"
  tema: "anarquismo_epistemologico"
  nivel: "avanzado"
  tags: ["feyerabend", "anarquismo", "metodologia"]

respuesta: "contra el método"
tipo: completar

respuestas_validas:
  - "contra el método"
  - "sin método"

enunciado: "El principio de '___' de Paul Feyerabend sugiere que no existe una regla metodológica única y universal que guíe todo progreso científico."

explicacion: |
  Feyerabend argumenta que la ciencia es una actividad pluralista y que imponer un método único (como el inductivismo o el falsacionismo) limitaría el progreso científico y la libertad de investigación.
```

```
metadata:
  materia: "investigacion"
  tema: "comparativa_popper_kuhn"
  nivel: "avanzado"
  tags: ["popper", "kuhn", "comparacion"]

variables:
  caso: uno_de([["popper", "enfocado en la lógica de la justificación y la refutación"], ["kuhn", "enfocado en la historia y la sociología de la ciencia"]])

opciones_explicitas: ["popper", "kuhn"]

respuesta: caso[0]
tipo: mc

enunciado: "Si un filósofo analiza la ciencia centrándose en la estructura lógica de las leyes y cómo estas pueden ser refutadas, está adoptando una perspectiva principalmente ___."

explicacion: |
  Mientras que Kuhn analiza cómo la comunidad científica cambia sus paradigmas (perspectiva histórica/sociológica), Popper se centra en la lógica de la validación de las teorías (perspectiva lógica/normativa).
```

```
metadata:
  materia: "investigacion"
  tema: "ciclo_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ordenar"]

opciones_explicitas: ["Ciencia Normal", "Crisis", "Revolución Científica", "Nuevo Paradigma"]

respuesta_orden: ["Ciencia Normal", "Crisis", "Revolución Científica", "Nuevo Paradigma"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas del ciclo de cambio de paradigma propuesto por Thomas Kuhn:"

pasos:
  - "Identificar el estado de estabilidad inicial."
  - "Identificar la aparición de anomalías que no pueden ser resueltas."
  - "Identificar el conflicto entre el modelo viejo y el nuevo."
  - "Identificar el resultado final del proceso."

explicacion: |
  El ciclo comienza con la Ciencia Normal, sigue con la Crisis (cuando las anomalías se acumulan), continúa con la Revolución Científica (el conflicto) y culmina con la instauración de un Nuevo Paradigma.
```

```
metadata:
  materia: "investigacion"
  tema: "falsacionismo_popper"
  nivel: "intermedio"
  tags: ["popper", "falsacionismo", "demarcacion"]

respuesta: "falsabilidad"
tipo: completar
respuestas_validas:
  - "falsabilidad"
  - "falsacionabilidad"
  - "falsable"

enunciado: "Para Karl Popper, lo que distingue a una teoría científica de una pseudocientífica no es su capacidad de ser confirmada por la experiencia, sino su capacidad de ser ___."

explicacion: |
  El falsacionismo sostiene que una teoría es científica solo si es posible imaginar un enunciado observacional que, de ser cierto, la refutaría.
```

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia_normal"]

respuesta: "Resolución de acertijos"
tipo: mc
opciones_explicitas: ["Resolución de acertijos", "Búsqueda de la verdad absoluta", "Resolución de crisis"]

enunciado: "Según Thomas Kuhn, durante el periodo de 'Ciencia Normal', el trabajo de los científicos consiste principalmente en la ___."

explicacion: |
  En la ciencia normal, los científicos no buscan refutar el paradigma, sino resolver "acertijos" (puzzles) dentro de las reglas establecidas por el paradigma vigente.
```

```
metadata:
  materia: "investigacion"
  tema: "anarquismo_epistemologico_feyerabend"
  nivel: "avanzado"
  tags: ["feyerabend", "anarquismo", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "¿Es el anarquismo epistemológico de Paul Feyerabend una defensa de la existencia de un único método científico universal e ideal para el progreso del conocimiento?"

explicacion: |
  Feyerabend sostiene que "todo vale" (anything goes) y que la ciencia no sigue un método único y rígido, sino que el progreso a menudo requiere violar reglas metodológicas establecidas.
```

```
metadata:
  materia: "investigacion"
  tema: "ciclos_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "crisis"]

variables:
  secuencia: uno_de([[0, 1, 2], [0, 2, 1], [1, 0, 2]])

respuesta_orden: ["Ciencia Normal", "Crisis", "Revolución Científica"]
tipo: ordenar
opciones_explicitas: ["Ciencia Normal", "Crisis", "Revolución Científica"]

enunciado: "Ordene los momentos que caracterizan el ciclo de cambio científico propuesto por Thomas Kuhn:"

pasos:
  - "El periodo de estabilidad y resolución de problemas."
  - "El periodo de acumulación de anomalías que el paradigma no puede explicar."
  - "El periodo de ruptura y adopción de un nuevo paradigma."

explicacion: |
  Kuhn describe un proceso cíclico: la ciencia normal se ve interrumpida por una crisis, lo que da lugar a una revolución científica que establece un nuevo paradigma.
```

```
metadata:
  materia: "investigacion"
  tema: "contraste_popper_kuhn"
  nivel: "avanzado"
  tags: ["popper", "kuhn", "comparacion"]

respuesta: "Refutación"
tipo: mc
opciones_explicitas: ["Cambio de paradigma", "Refutación", "Confirmación absoluta"]

enunciado: "Mientras que para Kuhn la ciencia progresa mediante cambios de paradigma, para Karl Popper el motor del progreso es la ___."

explicacion: |
  Para Popper, la ciencia avanza mediante la eliminación de errores; es decir, mediante la refutación de teorías que han sido sometidas a pruebas severas.
```

```
metadata:
  materia: "investigacion"
  tema: "falsacionismo_popper"
  nivel: "intermedio"
  tags: ["popper", "falsacionismo", "demarcacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Una teoría que afirma que 'mañana lloverá o no lloverá'", "falsa"], ["Una teoría que afirma que 'todos los cisnes son blancos' y se observa un cisne negro", "verdadera"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["falsa", "verdadera", "inconmensurable", "paradigmática"]

enunciado: "Según el falsacionismo de Karl Popper, una teoría es científica si es capaz de ser refutada por la experiencia. Si nos enfrentamos a: {escenarios[escenario_idx][0]}, ¿la teoría es científica bajo este criterio?"

explicacion: |
  Para Popper, una teoría es científica solo si es falsable. Una afirmación que es verdadera por definición (tautología) como 'A o no A' no puede ser refutada, por lo tanto, no es científica.
```

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia-normal"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un científico resuelve un acertijo dentro del modelo actual", "ciencia-normal"], ["La acumulación de anomalías provoca una crisis en el modelo", "crisis"]]
  orden_kuhn: ["pre-ciencia", "ciencia-normal", "crisis", "revolución-científica", "nuevo-paradigma"]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["ciencia-normal", "crisis", "revolución-científica", "falsación"]

enunciado: "Thomas Kuhn sostiene que la ciencia progresa mediante cambios de paradigmas. Si un científico se encuentra en la situación de: {casos[caso_idx][0]}, ¿qué etapa de la ciencia está realizando?"

explicacion: |
  La 'ciencia normal' es el periodo donde el paradigma vigente es aceptado y se trabaja para resolver problemas o 'acertijos' dentro de su marco.
```

```
metadata:
  materia: "investigacion"
  tema: "anarquismo_epistemologico"
  nivel: "avanzado"
  tags: ["feyerabend", "anarquismo", "metodologia"]

respuesta: "contra-intuitivo"
tipo: completar
respuestas_validas:
  - "contra-intuitivo"

enunciado: "Paul Feyerabend, en su obra 'Contra el método', sostiene que no existe un método único y universal para el progreso científico, proponiendo un enfoque que puede ser considerado ___ para la metodología tradicional."

explicacion: |
  Feyerabend defiende el 'anything goes' (todo vale), argumentando que la adherencia estricta a reglas metodológicas ha frenado el progreso científico.
```

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "intermedio"
  tags: ["comparacion", "popper", "kuhn"]

respuesta: "Kuhn"
tipo: mc
opciones_explicitas: ["Popper", "Kuhn", "Feyerabend", "Lakatos"]

enunciado: "Mientras que Popper ve la ciencia como un proceso de eliminación de errores mediante la falsación, el autor que describe la ciencia como una serie de cambios bruscos de visión del mundo (paradigmas) es: ___"

explicacion: |
  Thomas Kuhn introdujo la noción de paradigma y la idea de que la ciencia no es solo un proceso lógico, sino también un proceso sociológico y psicológico de cambios de visión.
```

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "avanzado"
  tags: ["kuhn", "secuencia", "revolucion"]

respuesta_orden: ["pre-ciencia", "ciencia-normal", "crisis", "revolución-científica"]
tipo: ordenar
opciones_explicitas: ["pre-ciencia", "ciencia-normal", "crisis", "revolución-científica"]

enunciado: "Ordene cronológicamente las fases del desarrollo científico según la estructura propuesta por Thomas Kuhn:"

explicacion: |
  El ciclo comienza con la pre-ciencia (falta de consenso), sigue con la ciencia-normal (dominio de un paradigma), la crisis (aparición de anomalías insolubles) y finalmente la revolución científica (cambio de paradigma).
```

## Sección: diseno-experimental-variables-y-control (25 preguntas)

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables_y_control"
  nivel: "basico"
  tags: ["variables", "metodologia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El efecto de la temperatura en el crecimiento de una planta", "temperatura", "crecimiento"], ["El efecto de la dosis de un fármaco en la presión arterial", "dosis", "presion"]]

enunciado: "En un experimento sobre {escenarios[escenario_idx][0]}, la variable que el investigador manipula deliberadamente es la ___."

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "temperatura"
  - "dosis"

explicacion: |
  La variable independiente es el factor que el investigador cambia para observar qué efectos produce.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables_y_control"
  nivel: "basico"
  tags: ["control", "grupo_control"]

enunciado: "¿Cuál es la función principal de un grupo de control en un diseño experimental?"

opciones_explicitas: ["Aumentar el número de sujetos para mejorar la estadística.", "Proporcionar una línea base para comparar los efectos de la variable independiente.", "Asegurar que todos los sujetos reciban el tratamiento experimental.", "Eliminar por completo la influencia de las variables extrañas."]

respuesta: "Proporcionar una línea base para comparar los efectos de la variable independiente."
tipo: mc

explicacion: |
  El grupo de control permite verificar si los cambios observados en el grupo experimental se deben realmente a la variable independiente y no a otros factores.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables_y_control"
  nivel: "basico"
  tags: ["variable_dependiente"]

enunciado: "Si un científico estudia cómo la cantidad de luz solar afecta la altura de un girasol, la altura del girasol es la variable ________."

opciones_explicitas: ["independiente", "dependiente", "extraña", "de_control"]

respuesta: "dependiente"
tipo: mc

explicacion: |
  La variable dependiente es el efecto o respuesta que se mide; su valor 'depende' de los cambios realizados en la variable independiente.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables_y_control"
  nivel: "intermedio"
  tags: ["control_experimental", "validez"]

enunciado: "¿Es verdadero que si no se controlan las variables extrañas (confusoras), la validez interna del experimento se ve comprometida?"

respuesta: verdadero
tipo: vf

explicacion: |
  Si una variable no controlada puede influir en la variable dependiente, no podremos saber con certeza si el efecto es causado por la variable independiente.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables_y_control"
  nivel: "intermedio"
  tags: ["pasos_metodologicos"]

enunciado: "Ordene los pasos lógicos para realizar un experimento controlado:"

opciones_explicitas: ["Identificar la variable independiente", "Establecer un grupo de control", "Manipular la variable independiente", "Medir la variable dependiente"]

respuesta_orden: ["Identificar la variable independiente", "Establecer un grupo de control", "Manipular la variable independiente", "Medir la variable dependiente"]
tipo: ordenar

explicacion: |
  Primero se define qué se va a cambiar (independiente), luego se prepara el escenario de comparación (control), se aplica el estímulo y finalmente se recolectan los datos (dependiente).
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables"
  nivel: "basico"
  tags: ["variables", "experimento"]

enunciado: "Un investigador quiere saber si la intensidad de la luz afecta la altura de una planta. Para ello, coloca un grupo de plantas bajo luz solar directa y otro grupo en la sombra, manteniendo la misma cantidad de agua y el mismo tipo de tierra para todos los ejemplares."

pasos:
  - "Identificar qué factor el investigador manipula (luz)."
  - "Identificar qué factor se mide como resultado (altura)."
  - "Identificar qué factores se mantienen constantes (agua, tierra)."

respuesta: "luz"
tipo: mc
opciones_explicitas: ["luz", "altura", "agua", "tierra"]

explicacion: |
  La variable independiente es la causa (la luz), la variable dependiente es el efecto medido (la altura) y las constantes (agua, tierra) son variables de control que aseguran que el resultado se deba solo a la luz.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables"
  nivel: "basico"
  tags: ["variable_dependiente"]

enunciado: "En un experimento donde se mide el tiempo de reacción ante un estímulo sonoro, la variable que el investigador mide para obtener sus resultados es el/la ___."

respuesta: "tiempo de reacción"
tipo: completar
respuestas_validas:
  - "tiempo de reacción"

explicacion: |
  La variable dependiente es siempre el efecto o la respuesta que se observa y se mide en el experimento.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables"
  nivel: "intermedio"
  tags: ["grupo_de_control"]

enunciado: "En un ensayo clínico para un nuevo medicamento, se administra el fármaco real a un grupo y un placebo (sustancia inerte) a otro grupo. ¿Cuál es la función principal del grupo que recibe el placebo?"

respuesta: "Servir como línea base para comparar si los efectos se deben al fármaco y no a otros factores"
tipo: mc
opciones_explicitas: ["Servir como línea base para comparar si los efectos se deben al fármaco y no a otros factores", "Recibir una dosis más alta del fármaco", "Ser excluido del análisis de resultados", "Aumentar el costo del estudio"]

explicacion: |
  El grupo de control (placebo) sirve como línea base para comparar si los cambios observados en el grupo experimental se deben realmente al fármaco y no a factores externos o al efecto psicológico del tratamiento.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables"
  nivel: "intermedio"
  tags: ["control_variables"]

enunciado: "Se desea probar si un nuevo fertilizante aumenta el peso de los tomates. Se tienen tres plantas con el fertilizante y tres plantas sin él. Si no se controlan la cantidad de luz y la temperatura, ¿qué sucede con la validez del experimento?"

respuesta: "se pierde la validez porque los cambios en el peso podrían deberse a la luz o temperatura y no al fertilizador"
tipo: completar
respuestas_validas:
  - "se pierde la validez porque los cambios en el peso podrían deberse a la luz o temperatura y no al fertilizador"

explicacion: |
  Si no se controlan las variables extrañas (luz, temperatura), no se puede establecer una relación de causalidad clara entre la variable independiente (fertilizante) y la dependiente (peso).
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables"
  nivel: "avanzado"
  tags: ["metodologia"]

enunciado: "Ordene correctamente los pasos lógicos para diseñar un experimento científico de causa-efecto:"

opciones_explicitas: ["Definir variable independiente y dependiente", "Establecer grupo de control y variables de control", "Ejecutar experimento y medir resultados", "Analizar si los resultados validan la hipótesis"]

respuesta_orden: ["Definir variable independiente y dependiente", "Establecer grupo de control y variables de control", "Ejecutar experimento y medir resultados", "Analizar si los resultados validan la hipótesis"]
tipo: ordenar

explicacion: |
  Primero se definen los conceptos (qué se cambia y qué se mide), luego se asegura el control (qué se mantiene igual), después se actúa (ejecución) y finalmente se interpreta (análisis).
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables"
  nivel: "basico"
  tags: ["variable_independiente", "variable_dependiente"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El efecto de la cantidad de fertilizante en el crecimiento de una planta de maíz.", "fertilizante", "crecimiento"], ["El impacto de la temperatura del agua en la velocidad de disolución de una tableta efervescente.", "temperatura", "velocidad_disolucion"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["fertilizante", "temperatura", "crecimiento", "velocidad_disolucion", "el agua"]

enunciado: "En el experimento: '{escenarios[escenario_idx][0]}', la variable independiente es la ___."

explicacion: |
  La variable independiente es el factor que el investigador manipula deliberadamente para observar sus efectos. En el primer caso es el fertilizante; en el segundo, la temperatura.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_control"
  nivel: "intermedio"
  tags: ["grupo_de_control", "validez"]

respuesta: "para establecer una línea base de comparación"
tipo: completar
respuestas_validas:
  - "para establecer una línea base de comparación"
  - "para asegurar que el experimento sea más largo"
  - "para aumentar la muestra"

enunciado: "En un diseño experimental, el grupo de control se utiliza principalmente ___."

explicacion: |
  Sin un grupo de control (que no recibe el tratamiento), no podemos saber si los cambios observados en el grupo experimental se deben a la variable independiente o a factores externos o al paso del tiempo.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables"
  nivel: "basico"
  tags: ["variable_dependiente", "error_comun"]

respuesta: verdadero
tipo: vf

enunciado: "Un error común en el diseño experimental es confundir la variable dependiente (el efecto medido) con la variable independiente (la causa manipulada)."

explicacion: |
  Es fundamental distinguir entre la causa (independiente) y el efecto (dependiente) para poder establecer una relación de causalidad válida.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_control"
  nivel: "intermedio"
  tags: ["variables_extrañas", "control"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Se quiere probar un nuevo fármaco para el dolor de cabeza, pero los sujetos del grupo de prueba también están tomando café.", "café"], ["Se quiere probar un nuevo fertilizante, pero las plantas del grupo de prueba reciben más luz solar que las del grupo control.", "luz solar"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["café", "luz solar", "el fármaco", "el dolor de cabeza"]

enunciado: "En el siguiente escenario, ¿cuál es la variable extraña que no está siendo controlada y que podría invalidar el experimento? '{casos[caso_idx][0]}'"

explicacion: |
  Las variables extrañas son factores no controlados que pueden influir en la variable dependiente, creando una falsa sensación de causalidad (confusión de variables).
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_proceso"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Definir la hipótesis", "Identificar variables", "Seleccionar grupos", "Ejecutar experimento"]
tipo: ordenar
opciones_explicitas: ["Definir la hipótesis", "Identificar variables", "Seleccionar grupos", "Ejecutar experimento"]

enunciado: "Ordene lógicamente los pasos para iniciar un diseño experimental riguroso:"

explicacion: |
  Primero se establece qué se quiere probar (hipótesis), luego se determinan qué se va a manipular y medir (variables), se dividen los sujetos (grupos) y finalmente se realiza la prueba.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables"
  nivel: "basico"
  tags: ["variables", "metodologia"]

respuesta: "dependiente"
tipo: completar
respuestas_validas:
  - "dependiente"

enunciado: "En un experimento, la variable que el investigador manipula para observar sus efectos se denomina variable independiente, mientras que la variable que se mide para ver el efecto de dicha manipulación es la variable ___."

explicacion: |
  La variable independiente es la causa (lo que manipulas) y la variable dependiente es el efecto (lo que mides).
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_control"
  nivel: "intermedio"
  tags: ["control", "grupos"]

variables:
  escenarios: [["un fármaco nuevo", "un placebo"], ["un nuevo fertilizante", "un fertilizante estándar"]]
  dado: uno_de(escenarios)

respuesta: "Asegurar que los cambios se deban a la variable independiente y no a factores externos"
tipo: "mc"
opciones_explicitas: ["Observar el comportamiento natural sin intervención", "Asegurar que los cambios se deban a la variable independiente y no a factores externos", "Aumentar el tamaño de la muestra para mayor validez", "Eliminar la necesidad de una variable dependiente"]

enunciado: "En un experimento que utiliza {dado[0]}, el grupo de control es fundamental porque su función principal es: ___"

explicacion: |
  El grupo de control actúa como línea base. Sin él, no sabríamos si el cambio en la variable dependiente se debió a la manipulación o a factores ambientales/externos.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_control"
  nivel: "intermedio"
  tags: ["variables_extrañas", "validez"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que controlar las variables extrañas (o de confusión) reduce la validez interna de un experimento al limitar la observación de fenómenos naturales?"

explicacion: |
  Falso. Al contrario, controlar las variables extrañas aumenta la validez interna, ya que permite asegurar que la relación observada entre la variable independiente y la dependiente sea real y no producto de una tercera variable no controlada.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables"
  nivel: "avanzado"
  tags: ["distincion", "metodologia"]

tipo: mc
respuesta: "La variable de control se mantiene constante para evitar sesgos, mientras que la independiente se varía deliberadamente."
opciones_explicitas: ["La variable de control se mantiene constante para evitar sesgos, mientras que la independiente se varía deliberadamente.", "La variable de control es el efecto y la independiente es la causa.", "La variable de control es la que se mide y la independiente es la que se ignora.", "No hay diferencia, son sinónimos en el diseño experimental."]

enunciado: "¿Cuál es la distinción fundamental entre una variable de control y una variable independiente en un diseño experimental?"

explicacion: |
  La variable independiente es la que el investigador cambia para ver qué sucede. Las variables de control son aquellas que se mantienen constantes para que no interfieran en la relación entre la independiente y la dependiente.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_pasos"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

respuesta_orden: ["Identificar variables", "Asignar grupos", "Manipular la independiente", "Medir la dependiente"]
tipo: "ordenar"
opciones_explicitas: ["Identificar variables", "Asignar grupos", "Manipular la independiente", "Medir la dependiente"]

enunciado: "Para garantizar un diseño experimental riguroso, ¿cuál es el orden lógico de las fases de ejecución?"

explicacion: |
  Primero se definen qué se va a medir y manipular (identificar), luego se dividen los sujetos (asignar), se aplica el tratamiento (manipular) y finalmente se recolectan los datos (medir).
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables_y_control"
  nivel: "basico"
  tags: ["variables", "experimento"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un agricultor aplica distintas dosis de fertilizante NPK a plantas de maíz para medir su altura final.", "altura"], ["Un científico varía la temperatura del agua para observar la velocidad de disolución del azúcar.", "velocidad"]]

enunciado: "En el experimento descrito, la variable que el investigador manipula deliberadamente (variable independiente) es la dosis de fertilizante o la temperatura. La variable que se mide para obtener resultados (variable dependiente) es la ___."

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "altura"
  - "velocidad"

explicacion: |
  La variable dependiente es el efecto o resultado que se observa y se mide en el experimento.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables_y_control"
  nivel: "intermedio"
  tags: ["variable_independiente", "variable_dependiente"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Estudio sobre cómo el tiempo de estudio afecta la nota de un examen.", "tiempo"], ["Estudio sobre cómo la cantidad de luz solar afecta el crecimiento de un cactus.", "luz"]]

enunciado: "En el escenario '{escenarios[escenario_idx][0]}', ¿cuál es la variable independiente?"

opciones_explicitas: [escenarios[escenario_idx][1], "La nota del examen", "El tipo de planta", "El clima"]

respuesta: escenarios[escenario_idx][1]
tipo: mc

explicacion: |
  La variable independiente es la causa o el factor que el investigador cambia para observar qué sucede.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables_y_control"
  nivel: "intermedio"
  tags: ["grupo_de_control"]

variables:
  escenario_idx: uno_de([0, 1])
  controles: [["placebo"], ["clase_tradicional"]]

enunciado: "Para validar que el efecto observado se debe al tratamiento y no a otros factores, es necesario comparar los resultados con un grupo de {controles[escenario_idx][0]}."

opciones_explicitas: [controles[escenario_idx][0], "observación", "reacción", "descarte"]

respuesta: controles[escenario_idx][0]
tipo: mc

explicacion: |
  El grupo de control sirve como línea base para comparar si los cambios en el grupo experimental son significativos.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables_y_control"
  nivel: "avanzado"
  tags: ["control_variables"]

enunciado: "¿Es necesario controlar las variables extrañas (como la temperatura ambiental o la humedad) en un experimento para asegurar la validez de los resultados?"

respuesta: verdadero
tipo: vf

explicacion: |
  Si no se controlan las variables extrañas, estas podrían actuar como variables intervinientes y confundir los resultados, haciendo imposible saber si el cambio se debe a la variable independiente.
```

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables_y_control"
  nivel: "intermedio"
  tags: ["metodologia"]

enunciado: "Ordena los pasos lógicos para llevar a cabo un experimento controlado:"

opciones_explicitas: ["Definir la hipótesis", "Manipular la variable independiente", "Medir la variable dependiente", "Analizar los resultados"]

respuesta_orden: ["Definir la hipótesis", "Manipular la variable independiente", "Medir la variable dependiente", "Analizar los resultados"]
tipo: ordenar

explicacion: |
  Un experimento sigue un orden lógico: primero se plantea la hipótesis, luego se aplica el estímulo (independiente), se recolectan datos (dependiente) y finalmente se interpretan.
```

## Sección: tecnicas-de-investigacion-social (25 preguntas)

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["encuesta", "cuantitativa", "definicion"]

variables:
  n_encuestados: random(100, 1000)
  porcentaje: random(40, 60)

respuesta: "cuantitativa"
tipo: completar

enunciado: "En un estudio sobre hábitos de lectura en {n_encuestados} estudiantes, se aplicó una técnica {porcentaje}% orientada a generalizar resultados mediante cuestionarios estructurados. Esta técnica se clasifica como de tipo ___."

explicacion: |
  La encuesta es una técnica cuantitativa porque busca generalizar patrones en grandes grupos mediante el procesamiento estadístico de datos estandarizados.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["historia_de_vida", "cualitativa", "biografia"]

variables:
  tema_vida: uno_de(["migración", "trayectoria laboral", "experiencia educativa"])

respuesta: "trayectoria biográfica"
tipo: completar

enunciado: "Si el objetivo de la investigación es reconstruir la ___ de una persona dentro de su contexto histórico, la técnica más adecuada es la historia de vida."

explicacion: |
  La historia de vida se centra en reconstruir trayectorias biográficas individuales, permitiendo comprender la subjetividad y el significado de las experiencias a lo largo del tiempo.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["entrevista", "semiestructurada", "flexibilidad"]

variables:
  n_preguntas_base: random(5, 10)

respuesta: "flexibilidad"
tipo: completar

enunciado: "A diferencia de la encuesta, la entrevista semiestructurada ofrece mayor ___ al permitir al investigador seguir la conversación y explorar matices según las respuestas del interlocutor."

explicacion: |
  La flexibilidad es la clave de la entrevista semiestructurada, ya que permite adaptar las preguntas y explorar temas emergentes que no estaban previstos inicialmente.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["encuesta", "estandarizacion", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "La clave de la encuesta es la estandarización: todas las personas deben recibir las mismas preguntas en el mismo orden para que los datos sean comparables."

explicacion: |
  La estandarización garantiza que las diferencias en las respuestas se deban a las características de los encuestados y no a variaciones en la administración del cuestionario.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "avanzado"
  tags: ["encuesta", "muestra", "estadistica"]

variables:
  poblacion_total: random(10000, 50000)
  margen_error: 0.05
  confianza: 0.95

respuesta: "redondear(1.96**2 * 0.25 * poblacion_total / (margen_error**2 * (poblacion_total - 1) + 1.96**2 * 0.25), 0)"
tipo: input

enunciado: "Para una población de {poblacion_total} habitantes, con un margen de error del {redondear(margen_error*100, 0)}% y un nivel de confianza del {redondear(confianza*100, 0)}%, ¿cuál es el tamaño muestral mínimo aproximado necesario (usando la fórmula para proporciones máximas p=q=0.5)?"

explicacion: |
  Se utiliza la fórmula de muestreo para proporciones: n = (Z^2 * p * q) / e^2. Con Z=1.96 (95% confianza), p=q=0.5 (máxima varianza) y e=0.05. El resultado se redondea al entero más cercano.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["encuesta", "cuestionario", "preguntas"]

variables:
  opcion_a: "Sí"
  opcion_b: "No"
  opcion_c: "A veces"

respuesta: "cerradas"
tipo: completar

enunciado: "Los cuestionarios de encuesta suelen utilizar preguntas ___ porque las respuestas están predefinidas (como sí/no o opciones múltiples), lo que facilita el procesamiento estadístico."

explicacion: |
  Las preguntas cerradas permiten cuantificar las respuestas y facilitar el análisis estadístico comparativo, a diferencia de las preguntas abiertas.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["comparacion", "encuesta", "entrevista"]

variables:
  enfoque_encuesta: "generalizar patrones"
  enfoque_entrevista: "comprender significados"

respuesta: "significados"
tipo: completar

enunciado: "Mientras la encuesta busca generalizar patrones en grandes grupos, la entrevista prioriza la comprensión de los ___ individuales y grupales."

explicacion: |
  La entrevista cualitativa se enfoca en la profundidad y el significado subjetivo de las experiencias, en contraste con la amplitud y generalización de la encuesta.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["seleccion_tecnicas", "cualitativa"]

variables:
  objetivo: "entender motivaciones"

respuesta: "entrevista"
tipo: completar

enunciado: "Si el investigador quiere entender las motivaciones detrás de una decisión política compleja, la técnica más adecuada es la ___."

explicacion: |
  Para explorar el "cómo" y el "por qué" de procesos subjetivos y complejos, la entrevista es la herramienta preferida por su capacidad de profundizar en significados.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["historia_de_vida", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "La historia de vida reconstruye trayectorias biográficas dentro de su contexto histórico, permitiendo una comprensión profunda de la experiencia individual."

explicacion: |
  Esta técnica conecta la biografía personal con la historia social, ofreciendo una visión holística de la vida del sujeto.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["encuesta", "analisis_datos", "estadistica"]

variables:
  n_respuestas: random(50, 200)

respuesta: "estadístico"
tipo: completar

enunciado: "Las respuestas a las preguntas cerradas de una encuesta se procesan mediante técnicas ___ para identificar tendencias generales en la población."

explicacion: |
  La naturaleza cuantitativa de la encuesta requiere herramientas estadísticas para analizar la frecuencia y correlación de las respuestas predefinidas.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "avanzado"
  tags: ["limitaciones", "encuesta", "subjetividad"]

variables:
  limite: "profundidad"

respuesta: "profundidad"
tipo: completar

enunciado: "Una limitación principal de la encuesta es que puede carecer de ___ para captar la riqueza de la experiencia subjetiva del encuestado."

explicacion: |
  Al estandarizar las preguntas y respuestas, la encuesta pierde matices y detalles contextuales que la entrevista cualitativa sí puede explorar.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["entrevista", "preguntas", "abiertas"]

variables:
  caracteristica: "libre"

respuesta: "abiertas"
tipo: completar

enunciado: "En la entrevista, se utilizan preguntas ___ para permitir que el interlocutor exprese sus perspectivas sin restricciones predefinidas."

explicacion: |
  Las preguntas abiertas dan libertad al entrevistado para responder con sus propias palabras, generando datos ricos en detalle.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "avanzado"
  tags: ["muestra", "representatividad", "encuesta"]

variables:
  poblacion: random(100000, 1000000)
  error: 0.05

respuesta: "redondear(1.96**2 * 0.25 / error**2, 0)"
tipo: input

enunciado: "Para una población muy grande (infinita), con un margen de error del {redondear(error*100, 0)}%, ¿cuál es el tamaño muestral aproximado necesario (usando p=0.5)?"

explicacion: |
  Para poblaciones grandes, la fórmula se simplifica a n = (Z^2 * p * q) / e^2. Con Z=1.96 y e=0.05, el resultado es aproximadamente 384.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["cualitativa", "enfoque", "subjetividad"]

variables:
  enfoque: "subjetividad"

respuesta: "subjetividad"
tipo: completar

enunciado: "Las técnicas cualitativas, como la entrevista y la historia de vida, priorizan la riqueza del detalle y la ___."

explicacion: |
  El enfoque cualitativo valora la experiencia subjetiva y el significado personal, a diferencia del enfoque cuantitativo que busca objetividad y generalización.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["entrevista", "semiestructurada", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "La entrevista semiestructurada permite hacer preguntas abiertas y seguir la conversación según las respuestas del interlocutor."

explicacion: |
  Combina la guía de un guion con la flexibilidad de explorar temas emergentes, siendo ideal para procesos complejos.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["datos", "tipos", "comparacion"]

variables:
  dato_cualitativo: "significado"
  dato_cuantitativo: "frecuencia"

respuesta: "significado"
tipo: completar

enunciado: "Mientras la encuesta busca medir la frecuencia de un fenómeno, la historia de vida busca comprender su ___."

explicacion: |
  La historia de vida se centra en el significado y la experiencia vivida, no en la cantidad o frecuencia de los eventos.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["seleccion_tecnicas", "encuesta", "objetivo"]

variables:
  objetivo: "generalizar"

respuesta: "encuesta"
tipo: completar

enunciado: "Si queremos saber 'qué' pasa y 'cuántas' personas lo viven, la técnica más adecuada es la ___."

explicacion: |
  La encuesta es la herramienta estándar para medir la prevalencia y distribución de fenómenos en una población.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "avanzado"
  tags: ["muestreo", "representatividad", "encuesta"]

variables:
  poblacion: 50000
  error: 0.05

respuesta: "redondear(1.96**2 * 0.25 * poblacion / (error**2 * (poblacion - 1) + 1.96**2 * 0.25), 0)"
tipo: input

enunciado: "Para una población de {poblacion}, con un margen de error del {redondear(error*100, 0)}%, ¿cuál es el tamaño muestral necesario?"

explicacion: |
  Se aplica la fórmula de muestreo finito. El resultado debe ser un número entero que garantiza la representatividad estadística.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["historia_de_vida", "ventajas", "contexto"]

variables:
  ventaja: "contexto"

respuesta: "contexto"
tipo: completar

enunciado: "Una ventaja de la historia de vida es que permite situar la experiencia individual dentro de su ___ histórico y social."

explicacion: |
  La historia de vida no aísla al individuo, sino que lo conecta con las estructuras y eventos históricos que moldearon su trayectoria.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["encuesta", "vf", "generalizacion"]

respuesta: verdadero
tipo: vf

enunciado: "La encuesta permite generalizar resultados de una muestra representativa a toda la población de estudio."

explicacion: |
  La generalización es el objetivo principal de la encuesta, siempre que la muestra sea representativa y el muestreo sea adecuado.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["comparacion", "profundidad", "amplitud"]

variables:
  tecnica_profunda: "entrevista"
  tecnica_amplia: "encuesta"

respuesta: "amplitud"
tipo: completar

enunciado: "La encuesta ofrece mayor ___ en la cobertura de la población, mientras que la entrevista ofrece mayor ___ en la comprensión del fenómeno."

explicacion: |
  La encuesta cubre más personas (amplitud), pero la entrevista comprende mejor cada caso (profundidad).
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["entrevista", "migración", "aplicacion"]

variables:
  tema: "experiencias de migración"

respuesta: "entrevista"
tipo: completar

enunciado: "Para explorar las experiencias de migración de un grupo pequeño de personas, la técnica más adecuada es la ___."

explicacion: |
  Las experiencias de migración son complejas y subjetivas, requiriendo una técnica cualitativa como la entrevista para captar sus matices.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["historia_de_vida", "estructura", "biografia"]

variables:
  estructura: "trayectoria"

respuesta: "trayectoria"
tipo: completar

enunciado: "La historia de vida se centra en reconstruir la ___ biográfica de un individuo a lo largo de su vida."

explicacion: |
  La trayectoria biográfica es el eje central de esta técnica, mostrando cómo las decisiones y eventos se entrelazan.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["entrevista", "vf", "cualitativa"]

respuesta: verdadero
tipo: vf

enunciado: "La entrevista es una técnica cualitativa que prioriza la riqueza del detalle y la subjetividad."

explicacion: |
  La entrevista busca entender el punto de vista del sujeto, valorando la subjetividad como fuente de conocimiento.
```

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["entrevista", "limitaciones", "generalizacion"]

variables:
  limite: "generalización"

respuesta: "generalización"
tipo: completar

enunciado: "Una limitación de la entrevista es que no permite la ___ de los resultados a una población más amplia debido al tamaño de la muestra."

explicacion: |
  Al trabajar con muestras pequeñas y no aleatorias, los resultados de la entrevista no son estadísticamente generalizables.
```

## Sección: recoleccion-de-datos (25 preguntas)

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "basico"
  tags: ["conceptos", "terminologia"]

respuesta: "variable"
tipo: completar
respuestas_validas:
  - "variable"

enunciado: "En una investigación, cualquier característica, propiedad o atributo que puede variar y ser medido u observado se denomina ___."

explicacion: |
  La variable es el elemento central de la investigación; es aquello que se estudia y que presenta variaciones entre los sujetos o casos.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  tema_sub: "metodologias"
  nivel: "basico"
  tags: ["metodos", "tecnica"]

respuesta: verdadero
tipo: vf
enunciado: "Si un investigador utiliza una entrevista en profundidad para comprender las motivaciones subjetivas de un grupo, está utilizando un método de recolección de tipo cualitativo."

explicacion: |
  Los métodos cualitativos buscan comprender significados y experiencias, mientras que los cuantitativos buscan medir magnitudes y frecuencias.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["instrumentos", "encuesta"]

respuesta: "encuesta"
tipo: mc
opciones_explicitas: ["entrevista", "encuesta", "observación", "análisis documental"]

enunciado: "Es el instrumento de recolección de datos que consiste en un conjunto de preguntas estandarizadas aplicadas a una muestra para obtener datos estadísticos."

explicacion: |
  La encuesta se caracteriza por su estandarización, lo que permite la comparación de respuestas entre muchos sujetos.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta_orden: ["definir_instrumento", "aplicar_instrumento", "registrar_datos"]
tipo: ordenar
opciones_explicitas: ["definir_instrumento", "aplicar_instrumento", "registrar_datos"]

enunciado: "Ordene cronológicamente los pasos lógicos para llevar a cabo la recolección de datos en un trabajo de campo:"

explicacion: |
  Primero se debe diseñar el instrumento, luego se procede a su aplicación en el campo y finalmente se debe asegurar el registro sistemático de la información obtenida.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["calidad", "rigor"]

respuesta: "fiabilidad"
tipo: completar
respuestas_validas:
  - "fiabilidad"
  - "confiabilidad"

enunciado: "La propiedad de un instrumento que indica que, si se aplica repetidamente en las mismas condiciones, producirá resultados consistentes es la ___."

explicacion: |
  La fiabilidad (o confiabilidad) se refiere a la consistencia de la medición, mientras que la validez se refiere a si el instrumento mide realmente lo que pretende medir.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["sesgo", "muestreo", "validez"]

enunciado: "Un investigador desea conocer la opinión de los estudiantes de una universidad sobre la calidad del buffet. Para ello, decide realizar la encuesta únicamente a las personas que están haciendo fila en la cafetería a las 12:00 PM. ¿Este método de recolección presenta un sesgo de selección?"

tipo: vf
respuesta: verdadero

explicacion: |
  Es un sesgo de selección porque la muestra solo incluye a quienes consumen en la cafetería a esa hora específica, excluyendo a quienes traen su propia comida, a quienes almuerzan en otros horarios o a quienes no usan la cafetería, invalidando la representatividad de la muestra.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["metodologia", "validez", "confiabilidad"]

respuesta_orden: ["Diseñar el instrumento de recolección", "Realizar una prueba piloto con una muestra pequeña", "Analizar la consistencia interna y confiabilidad", "Aplicar el instrumento a la muestra definitiva"]
tipo: "ordenar"
opciones_explicitas: ["Diseñar el instrumento de recolección", "Realizar una prueba piloto con una muestra pequeña", "Analizar la consistencia interna y confiabilidad", "Aplicar el instrumento a la muestra definitiva"]

enunciado: "Ordene la secuencia lógica correcta para garantizar la confiabilidad de un instrumento de recolección de datos:"

explicacion: |
  Para garantizar la confiabilidad, la secuencia lógica debe comenzar con el diseño, seguido de una validación mediante prueba piloto, el análisis estadístico de dicha prueba y, finalmente, la aplicación masiva.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["observacion", "etnografia", "metodologia"]

enunciado: "En una investigación etnográfica, si el investigador se involucra profundamente en la cultura que estudia, puede perder la objetividad debido al 'efecto de reactividad'. ¿Cuál es el término técnico para cuando los sujetos cambian su comportamiento al saber que son observados?"

opciones_explicitas: ["Efecto Hawthorne", "Sesgo de confirmación", "Error de medición", "Falsa dicotomía"]
respuesta: "Efecto Hawthorne"
tipo: "mc"

explicacion: |
  El Efecto Hawthorne ocurre cuando los individuos modifican un aspecto de su comportamiento en respuesta a su conciencia de que están siendo observados, lo cual es un desafío crítico en la observación directa.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["triangulacion", "validez", "metodologia"]

enunciado: "Para aumentar la validez de una investigación, el investigador decide utilizar entrevistas, encuestas y observación para estudiar el mismo fenómeno. A este proceso de utilizar múltiples fuentes o métodos se le denomina ___."

respuestas_validas:
  - "triangulación"
respuesta: "triangulación"
tipo: "completar"

explicacion: |
  La triangulación permite contrastar diferentes tipos de datos para reducir el sesgo de un único método y fortalecer la consistencia de los hallazgos.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["cualitativa", "codificacion", "fiabilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  textos: ["Un investigador analiza 10 entrevistas y llega a conclusiones basadas solo en sus propias opiniones sin contrastar con el texto.", "Dos investigadores analizan las mismas entrevistas de forma independiente y llegan a las mismas categorías temáticas."]
  es_confiable: [falso, verdadero]

enunciado: "Se presenta el siguiente escenario de investigación: {textos[escenario_idx]}. ¿Es este proceso confiable para la investigación científica? (Respuesta: verdadero/falso)"

respuesta: es_confiable[escenario_idx]
tipo: "vf"

explicacion: |
  En el primer caso (falso), el investigador incurre en subjetividad excesiva. En el segundo caso (verdadero), se cumple con la fiabilidad inter-jueces, esencial en la investigación cualitativa.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["sesgo", "muestreo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Se realiza una encuesta sobre hábitos de lectura solo en una biblioteca pública.", "muestreo_no_representativo"], ["Se entrevista a personas en un gimnasio sobre su consumo de azúcar.", "muestreo_no_representativo"]]

enunciado: "Si un investigador utiliza el escenario '{escenarios[escenario_idx][0]}' para estudiar la población general, estamos ante un error de: ___"

respuestas_validas:
  - "muestreo_no_representativo"

respuesta: escenarios[escenario_idx][1]
tipo: completar

explicacion: |
  El error radica en que la muestra no refleja la diversidad de la población objetivo, lo que introduce un sesgo de selección que invalida la generalización de los resultados.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["metodologia", "conceptos"]

enunciado: "Un instrumento de recolección de datos que produce resultados consistentes y estables en aplicaciones repetidas, pero que no mide lo que pretende medir, posee alta ___ pero baja ___."

opciones_explicitas: ["validez", "confiabilidad", "confiabilidad", "validez", "precisión", "exactitud"]

respuesta: "confiabilidad"
tipo: mc

explicacion: |
  La confiabilidad se refiere a la consistencia de la medida (si se repite, da lo mismo), mientras que la validez se refiere a si el instrumento realmente mide la variable de interés.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "basico"
  tags: ["observacion", "sesgo"]

enunciado: "¿Es verdadero que el 'efecto reactivo' ocurre cuando los sujetos de estudio modifican su comportamiento natural al saber que están siendo observados?"

respuesta: verdadero
tipo: vf

explicacion: |
  Exacto. La presencia del investigador puede alterar la conducta natural de los sujetos, lo que constituye un sesgo de reactividad que el investigador debe intentar mitigar.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["procedimiento", "instrumentos"]

enunciado: "Ordene los pasos lógicos para asegurar la calidad de un instrumento de recolección de datos antes de su aplicación definitiva:"

opciones_explicitas: ["Diseño del instrumento", "Prueba piloto", "Validación por expertos", "Análisis de resultados de la prueba"]

respuesta_orden: ["Diseño del instrumento", "Validación por expertos", "Prueba piloto", "Análisis de resultados de la prueba"]
tipo: ordenar

explicacion: |
  Primero se diseña, luego expertos validan el contenido, se realiza una prueba piloto para detectar errores de comprensión y finalmente se analiza esa prueba para ajustar el instrumento.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["encuestas", "sesgo"]

variables:
  pregunta_tipo: uno_de([0, 1])
  casos: [["¿Alguna vez ha mentido para evitar un conflicto?", "deseabilidad_social"], ["¿Qué tan importante es para usted la honestidad en el trabajo?", "deseabilidad_social"]]

enunciado: "Cuando un encuestado responde de una manera que busca dar una buena imagen de sí mismo en lugar de decir la verdad, se produce un sesgo de: ___"

respuestas_validas:
  - "deseabilidad_social"

respuesta: "deseabilidad_social"
tipo: completar

explicacion: |
  La deseabilidad social es un error común en encuestas donde el sujeto intenta ajustarse a las normas sociales percibidas, distorsionando la veracidad de los datos recolectados.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "basico"
  tags: ["metodos", "observacion", "encuesta"]

enunciado: "A diferencia de la encuesta, donde el investigador interactúa con los sujetos para obtener respuestas declarativas, la observación se caracteriza por ser un método donde el investigador registra el comportamiento de los sujetos sin ___."

respuestas_validas:
  - "intervenir"
  - "interactuar"
  - "influir"
tipo: completar

explicacion: |
  La observación busca captar la realidad tal cual ocurre, evitando el sesgo de la reactividad que puede producirse cuando el sujeto sabe que está siendo evaluado o cuando el investigador interviene en el entorno.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["fuentes", "datos_primarios", "datos_secundarios"]

variables:
  escenario: uno_de([["un investigador realiza entrevistas para un nuevo estudio", "primarios"], ["un investigador analiza censos nacionales ya existentes", "secundarios"]])

enunciado: "Si un investigador utiliza el {escenario[0]} para su estudio, los datos obtenidos se clasifican como datos ___."

opciones_explicitas: ["primarios", "secundarios"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  Los datos primarios son recolectados de primera mano por el investigador para un propósito específico, mientras que los secundarios son datos que ya existen y fueron recolectados por otros para otros fines.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["calidad_datos", "validez", "confiabilidad"]

enunciado: "En el contexto de la calidad de la recolección de datos, si un instrumento de medición arroja resultados consistentes y estables en aplicaciones repetidas, decimos que tiene alta confiabilidad. Sin embargo, que el instrumento sea consistente no garantiza que mida lo que pretende medir; esa propiedad se denomina ___."

respuestas_validas:
  - "validez"
tipo: completar

explicacion: |
  La confiabilidad se refiere a la consistencia de la medida (si se repite, ¿da lo mismo?), mientras que la validez se refiere a la exactitud (¿estoy midiendo realmente la variable que digo medir?).
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["sesgo", "muestreo", "errores"]

enunciado: "¿Es correcto afirmar que un error de muestreo ocurre cuando la muestra no es representativa de la población debido a una falla en el diseño de la recolección?"

respuesta: verdadero
tipo: vf
explicacion: |
  El sesgo de selección es un error sistemático que ocurre cuando algunos miembros de la población tienen una probabilidad menor o mayor de ser seleccionados, invalidando la representatividad de la muestra.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["procedimiento", "metodologia"]

opciones_explicitas: ["Definir el instrumento", "Recolectar los datos", "Analizar los resultados"]
respuesta_orden: ["Definir el instrumento", "Recolectar los datos", "Analizar los resultados"]
tipo: ordenar

enunciado: "Para asegurar la confiabilidad en la investigación, es fundamental seguir un orden lógico en el proceso de recolección. Ordene las siguientes etapas:"

explicacion: |
  No se pueden recolectar datos sin haber diseñado primero la herramienta (encuesta, guía de entrevista, etc.), y el análisis es una fase posterior a la obtención de la información.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "basico"
  tags: ["metodologia", "tecnica"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [["Se desea conocer la opinión de 500 ciudadanos sobre una nueva ley de tránsito.", "encuesta"], ["Se busca observar el comportamiento natural de primates en una selva sin intervenir.", "observacion"], ["Se requiere profundizar en las experiencias de vida de tres sobrevivientes de un naufragio.", "entrevista"]]

enunciado: "Para el escenario: {escenarios[escenario_idx][0]}, el método de recolección más adecuado es una ___."

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "encuesta"
  - "observacion"
  - "entrevista"

explicacion: |
  La elección del método depende del objetivo: las encuestas son para grandes grupos y tendencias; la observación para conductas naturales; y la entrevista para profundidad cualitativa.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["sesgo", "muestreo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un investigador quiere saber qué opinan los estudiantes de una universidad, pero solo pregunta a sus amigos de su misma carrera.", "verdadero"], ["Un investigador selecciona al azar 100 números de teléfono de un padrón oficial para una encuesta de salud.", "falso"]]

enunciado: "¿Es el proceso de recolección descrito en el caso '{casos[caso_idx][0]}' un proceso libre de sesgo de selección? (Responda con verdadero o falso)"

respuesta: casos[caso_idx][1]
tipo: completar
explicacion: |
  El sesgo de selección ocurre cuando la muestra no es representativa de la población objetivo. En el primer caso, la muestra está sesgada hacia un grupo específico.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "basico"
  tags: ["instrumentos", "tecnica"]

variables:
  instrumento_idx: uno_de([0, 1, 2])
  instrumentos: [["Cuestionario con preguntas cerradas", "cuantitativo"], ["Guion de entrevista semiestructurada", "cualitativo"], ["Ficha de registro de observación", "cualitativo"]]

enunciado: "El instrumento '{instrumentos[instrumento_idx][0]}' se clasifica principalmente como un método de recolección de tipo _________."

respuesta: instrumentos[instrumento_idx][1]
tipo: completar
respuestas_validas:
  - "cuantitativo"
  - "cualitativo"

explicacion: |
  Los métodos cuantitativos buscan medir variables y frecuencias, mientras que los cualitativos buscan comprender significados y contextos profundos.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["proceso", "pasos"]

enunciado: "Ordene cronológicamente los pasos para llevar a cabo una recolección de datos mediante una entrevista presencial:"

opciones_explicitas: ["Diseñar el guion de preguntas", "Contactar a los participantes", "Realizar la entrevista", "Analizar la información"]
respuesta_orden: ["Diseñar el guion de preguntas", "Contactar a los participantes", "Realizar la entrevista", "Analizar la información"]
tipo: ordenar

explicacion: |
  Antes de recolectar, se debe planificar el instrumento; luego se accede a la muestra, se ejecuta la técnica y finalmente se procesan los datos obtenidos.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["validez", "confiabilidad"]

enunciado: "Si un test de inteligencia arroja resultados muy distintos cada vez que se le aplica a la misma persona en condiciones iguales, decimos que el test carece de _________."

respuesta: "confiabilidad"
tipo: completar
respuestas_validas:
  - "validez"
  - "confiabilidad"

explicacion: |
  La confiabilidad se refiere a la estabilidad y consistencia de la medida, mientras que la validez se refiere a la exactitud de lo que se está midiendo.
```

## Sección: analisis-estadistico-de-resultados (25 preguntas)

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["vocabulario", "estadistica"]

respuesta: "promedio"
tipo: completar
respuestas_validas:
  - "promedio"
  - "media"
  - "media_aritmetica"

enunciado: "El valor que representa el centro de un conjunto de datos numéricos, calculado sumando todos los valores y dividiendo por la cantidad de ellos, se conoce como ___."

explicacion: |
  El promedio (o media aritmética) es la medida de tendencia central más utilizada para resumir un conjunto de datos en un solo valor representativo.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["desviacion", "variabilidad"]

respuesta: "alta"
tipo: mc
opciones_explicitas: ["baja", "alta"]

enunciado: "Si observamos un conjunto de datos donde los valores están muy alejados de la media, la variabilidad o desviación estándar se considera de magnitud ___."

explicacion: |
  Una desviación estándar alta indica que los datos están muy dispersos respecto a la media, mientras que una baja indica que los datos están agrupados cerca del promedio.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["mediana", "ordenamiento"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la mediana es el valor que ocupa la posición central cuando los datos están ordenados de menor a mayor?"

explicacion: |
  Correcto. La mediana divide la distribución en dos partes iguales, con el 50% de los datos por debajo y el 50% por encima.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["recoleccion", "limpieza", "calculo", "interpretacion"]
tipo: ordenar
opciones_explicitas: ["recoleccion", "limpieza", "calculo", "interpretacion"]

enunciado: "Ordene cronológicamente los pasos lógicos para realizar un análisis estadístico riguroso de los resultados obtenidos en una investigación:"

explicacion: |
  Primero se recolectan los datos, luego se limpian (eliminando errores), se realizan los cálculos estadísticos y finalmente se interpretan los resultados.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["moda", "frecuencia"]

respuesta: "frecuencia"
tipo: completar
respuestas_validas:
  - "frecuencia"

enunciado: "La moda se define como el valor que presenta la mayor ___ dentro de un conjunto de datos."

explicacion: |
  La moda es el valor que más veces se repite en una muestra o población.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["descriptiva", "mediana"]

variables:
  datos: [[12, 15, 15, 18, 22, 25, 40]]
  idx: uno_de([0])

respuesta: "18"
tipo: mc
opciones_explicitas: ["15", "18", "22", "25"]

enunciado: "En un estudio sobre tiempos de reacción (en ms) de un grupo de sujetos, se obtuvieron los siguientes valores: {datos[idx]}. ¿Cuál es la mediana de este conjunto de datos?"

explicacion: |
  Para hallar la mediana, primero ordenamos los datos (ya están ordenados en este caso). Como el número de elementos es impar (n=7), la mediana es el valor central, que ocupa la posición (7+1)/2 = 4. El cuarto valor es 18.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["desviacion_estandar", "dispersion"]

variables:
  set_a: [10, 10, 10, 10]
  set_b: [0, 5, 10, 15]

respuesta: falso
tipo: vf

enunciado: "Si comparamos un conjunto de datos con varianza cero (como {set_a}) frente a un conjunto con varianza mayor a cero (como {set_b}), la desviación estándar del primer conjunto es mayor que la del segundo."

explicacion: |
  La desviación estándar mide la dispersión. Un conjunto donde todos los valores son iguales tiene varianza y desviación estándar igual a 0, por lo tanto, no puede ser mayor que un conjunto con dispersión.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["error_medicion", "precision"]

variables:
  valor_real: 50.0
  mediciones: [49.8, 50.1, 49.9, 50.2, 50.0]

respuesta: 0.12
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un investigador realiza mediciones de una constante física. El valor real es {valor_real} y sus mediciones son {mediciones}. Calcule el error absoluto promedio de las mediciones respecto al valor real (sin considerar el signo)."

pasos:
  - "Calcular la diferencia absoluta de cada medición respecto al valor real."
  - "Sumar esos valores absolutos."
  - "Dividir el resultado por el número total de mediciones."

explicacion: |
  El error absoluto promedio se calcula como: (|49.8-50| + |50.1-50| + |49.9-50| + |50.2-50| + |50.0-50|) / 5 = (0.2 + 0.1 + 0.1 + 0.2 + 0) / 5 = 0.6 / 5 = 0.12.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Recolección de datos", "Limpieza de datos", "Cálculo de estadísticos", "Interpretación de resultados"]
tipo: ordenar
opciones_explicitas: ["Recolección de datos", "Limpieza de datos", "Cálculo de estadísticos", "Interpretación de resultados"]

enunciado: "Ordene cronológicamente las etapas lógicas para realizar un análisis estadístico riguroso tras una investigación de campo."

explicacion: |
  Primero se obtienen los datos (recolección), luego se eliminan errores o valores atípicos (limpieza), después se aplican las fórmulas (cálculo) y finalmente se extraen conclusiones (interpretación).
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["moda", "frecuencia"]

variables:
  frecuencias: [5, 10, 8, 12, 3]
  categorias: ["A", "B", "C", "D", "E"]

respuesta: "D"
tipo: completar
respuestas_validas:
  - "D"

enunciado: "En un estudio de preferencias de consumo, las frecuencias de las categorías son {frecuencias}. La categoría que presenta la mayor frecuencia (la moda) es la categoría ___."

explicacion: |
  Observando el array de frecuencias, el valor máximo es 12, que corresponde a la categoría D (índice 3).
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["errores_comunes", "correlacion", "causalidad"]

respuesta: falso
tipo: vf

enunciado: "Si se encuentra una correlación estadísticamente significativa entre el consumo de helado y la incidencia de quemaduras solares, se puede afirmar que el consumo de helado causa las quemaduras."

explicacion: |
  La correlación indica que dos variables se mueven juntas, pero no implica causalidad. En este caso, una tercera variable (el calor/sol) causa ambas.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["p-valor", "significancia", "errores_interpretacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[0.03, "rechazar"], [0.07, "no rechazar"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["rechazar", "no rechazar"]

enunciado: "En un estudio con un nivel de significancia $\\alpha = 0.05$, se obtiene un p-valor de {escenarios[escenario_idx][0]}. Por lo tanto, la decisión estadística es ___ la hipótesis nula."

pasos:
  - "Comparar el p-valor obtenido con el nivel de significancia $\\alpha$."
  - "Si p-valor < $\\alpha$, se rechaza la hipótesis nula."
  - "Si p-valor $\\ge$ $\\alpha$, no se rechaza la hipótesis nula."

explicacion: |
  El p-valor representa la probabilidad de observar los resultados obtenidos (o más extremos) asumiendo que la hipótesis nula es cierta.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["sesgo", "muestreo", "validez"]

respuesta: "sesgo de selección"
tipo: completar
respuestas_validas:
  - "sesgo de selección"

enunciado: "Cuando la muestra recolectada no es representativa de la población objetivo debido a un error en el proceso de muestreo, se ha incurrido en un ___."

explicacion: |
  El sesgo de selección invalida la generalización de los resultados, ya que la muestra no refleja la diversidad de la población real.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["error_tipo_i", "error_tipo_ii", "hipotesis"]

respuesta: "Error Tipo I"
tipo: mc
opciones_explicitas: ["Error Tipo I", "Error Tipo II", "Error de medición"]

enunciado: "Un investigador concluye que un nuevo medicamento es efectivo cuando, en realidad, no tiene ningún efecto terapéutico. Este error se denomina:"

explicacion: |
  El Error Tipo I (falso positivo) ocurre cuando se rechaza una hipótesis nula que es verdadera.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["metodologia", "proceso", "orden"]

respuesta_orden: ["Limpieza de datos", "Análisis descriptivo", "Pruebas de hipótesis", "Interpretación de resultados"]
tipo: ordenar
opciones_explicitas: ["Limpieza de datos", "Análisis descriptivo", "Pruebas de hipótesis", "Interpretación de resultados"]

enunciado: "Ordene las etapas del análisis de resultados de forma lógica para asegurar el rigor científico:"

explicacion: |
  Primero se deben tratar los datos brutos (limpieza), luego entender su distribución (descriptivo), aplicar modelos estadísticos (inferencia) y finalmente dar sentido a los hallazgos.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["correlacion", "causalidad", "metodologia"]

respuesta: "causalidad"
tipo: "mc"
opciones_explicitas: ["correlacion", "causalidad", "coincidencia", "varianza"]

enunciado: "Mientras que la correlación indica que dos variables cambian de forma conjunta, la ___ implica que el cambio en una variable es la causa directa del cambio en la otra."

explicacion: |
  Es un error común en investigación asumir que porque dos variables están correlacionadas, una causa a la otra. La causalidad requiere evidencia de temporalidad y control de variables de confusión.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["p-valor", "significancia", "relevancia"]

respuesta: falso
tipo: "vf"

enunciado: "Un estudio con n=100000 muestra que un fármaco reduce el dolor en 0.1 segundos con p < 0.001. Dado que el resultado tiene una significancia estadística muy alta pero el efecto real es despreciable para el paciente, ¿es el resultado clínicamente relevante?"

explicacion: |
  La significancia estadística (p-valor) depende fuertemente del tamaño de la muestra. Con muestras muy grandes, diferencias minúsculas pueden ser estadísticamente significativas pero carecer de importancia en el mundo real (relevancia práctica).
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["medidas_tendencia", "sesgo", "distribucion"]

variables:
  distribucion: uno_de([["simétrica", "media"], ["sesgada a la derecha", "mediana"]])

respuesta: "mediana"
tipo: "completar"
respuestas_validas:
  - "media"
  - "mediana"

enunciado: "En una distribución de datos con un sesgo positivo marcado (cola larga a la derecha), la medida de tendencia central que mejor representa el centro de los datos sin verse afectada por los valores extremos es la ___."

explicacion: |
  La media es sensible a los valores atípicos (outliers), mientras que la mediana es una medida robusta que solo depende de la posición de los datos, siendo preferible en distribuciones no simétricas.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["hipotesis", "error_tipo_i", "error_tipo_ii"]

respuesta: verdadero
tipo: "vf"

enunciado: "El Error Tipo I se define como el acto de rechazar la hipótesis nula cuando en realidad es verdadera (falso positivo)."

explicacion: |
  El Error Tipo I (falso positivo) ocurre cuando se rechaza una hipótesis nula que es verdadera. El Error Tipo II (falso negativo) ocurre cuando no se rechaza una hipótesis nula que es falsa.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["análisis", "univariado", "multivariado"]

respuesta_orden: ["Análisis Univariado", "Análisis Bivariado", "Análisis Multivariado"]
tipo: "ordenar"
opciones_explicitas: ["Análisis Univariado", "Análisis Bivariado", "Análisis Multivariado"]

enunciado: "Ordene los niveles de complejidad del análisis estadístico, desde el estudio de una sola variable hasta el estudio de múltiples variables simultáneamente:"

explicacion: |
  El análisis univariado describe una variable; el bivariado examina la relación entre dos; y el multivariado analiza la relación entre tres o más variables, permitiendo controlar efectos de confusión.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["mediana", "tendencia_central"]

variables:
  datos: [[[10, 12, 15, 18, 20], 15], [[5, 8, 10, 12, 50], 10], [[100, 110, 120, 130, 140], 120]]
  idx: uno_de([0, 1, 2])
  mediana_correcta: datos[idx][1]

respuestas_validas:
  - mediana_correcta
respuesta: mediana_correcta
tipo: completar
tolerancia_abs: 0

enunciado: "Se realizó un estudio sobre el tiempo de respuesta (en segundos) de tres grupos de usuarios. Los datos recolectados para el grupo seleccionado son: {datos[idx][0]}. Calcule la mediana de este conjunto de datos."

pasos:
  - "Ordene los datos de menor a mayor (ya están ordenados en este caso)."
  - "Identifique el valor que ocupa la posición central del conjunto."

explicacion: |
  La mediana es el valor central de un conjunto de datos ordenados. En el caso seleccionado, el valor central de {datos[idx][0]} es {mediana_correcta}.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["outliers", "desviacion"]

variables:
  datos_escenario: [[[10, 10, 11, 12, 100], "sí"], [[50, 52, 48, 51, 49], "no"], [[20, 21, 19, 20, 22], "no"]]
  idx: uno_de([0, 1, 2])
  datos: datos_escenario[idx][0]
  es_outlier: datos_escenario[idx][1]

respuestas_validas:
  - "sí"
  - "no"
respuesta: es_outlier
tipo: completar
enunciado: "Al analizar el conjunto de datos {datos}, ¿se observa la presencia de un valor atípico (outlier) que afecte significativamente la media aritmética?"

explicacion: |
  En el conjunto {datos}, el valor {es_outlier} indica si hay un outlier. En el caso seleccionado, la respuesta es {es_outlier}.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "intermedio"
  tags: ["desviacion_estandar", "dispersion"]

respuesta: "baja"
tipo: mc
opciones_explicitas: ["baja", "alta"]

enunciado: "Si un experimento presenta una desviación estándar muy cercana a cero respecto a la media, ¿cómo se describe la dispersión de los datos recolectados?"

explicacion: |
  Una desviación estándar cercana a cero indica que los datos están muy agrupados alrededor de la media, por lo tanto, la dispersión es baja.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Recolección", "Limpieza", "Análisis", "Interpretación"]
tipo: ordenar
opciones_explicitas: ["Recolección", "Limpieza", "Análisis", "Interpretación"]

enunciado: "Ordene cronológicamente las fases del tratamiento de datos en una investigación científica, desde la obtención hasta la obtención de conclusiones."

explicacion: |
  El proceso riguroso requiere primero la Recolección, luego la Limpieza (manejo de errores/nulos), después el Análisis estadístico y finalmente la Interpretación de resultados.
```

```
metadata:
  materia: "investigacion"
  tema: "analisis_estadistico_de_resultados"
  nivel: "avanzado"
  tags: ["correlacion", "causalidad"]

respuesta: "correlación"
tipo: completar
respuestas_validas:
  - "correlación"

enunciado: "Es un error común en la investigación afirmar que existe una causalidad entre dos variables basándose únicamente en que presentan una ___ estadística."

explicacion: |
  Es fundamental recordar que la existencia de una correlación no implica necesariamente una causalidad.
```

## Sección: conclusion-y-comunicacion-de-resultados (25 preguntas)

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["conceptos", "conclusion"]

respuesta: "síntesis"
tipo: completar
respuestas_validas:
  - "síntesis"
  - "resumen"

enunciado: "La conclusión de una investigación debe presentarse como una ___ de los hallazgos principales, integrando los resultados con los objetivos planteados."

explicacion: |
  La conclusión no es un resumen de lo que ya se dijo, sino una síntesis que interpreta los resultados en relación con la pregunta de investigación.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["discusion", "interpretacion"]

variables:
  es_correcta: verdadero

respuesta: es_correcta
tipo: vf
enunciado: "¿La sección de discusión tiene como objetivo principal comparar los resultados obtenidos con la literatura existente y las hipótesis previas?"

explicacion: |
  Correcto. La discusión es el espacio donde se interpretan los datos y se contrastan con el marco teórico y estudios previos.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["comunicacion", "difusion"]

respuesta: "artículo científico"
tipo: mc
opciones_explicitas: ["artículo científico", "diario de campo", "encuesta de satisfacción", "plan de trabajo"]

enunciado: "¿Cuál de los siguientes es el medio de comunicación formal por excelencia para difundir resultados de investigación ante la comunidad académica?"

explicacion: |
  El artículo científico es el estándar de comunicación en la ciencia para permitir la revisión por pares y la difusión del conocimiento.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "reporte"]

respuesta_orden: ["resumen", "introducción", "metodología", "resultados", "discusión", "conclusión"]
tipo: ordenar

opciones_explicitas: ["resumen", "introducción", "metodología", "resultados", "discusión", "conclusión"]

enunciado: "Ordene los elementos de un reporte de investigación siguiendo la estructura lógica estándar de publicación."

explicacion: |
  La estructura estándar sigue el orden: Resumen (Abstract), Introducción, Metodología, Resultados, Discusión y finalmente la Conclusión.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["limitaciones", "ética"]

respuesta: falso
tipo: vf
enunciado: "¿Es una mala práctica de comunicación omitir las limitaciones encontradas en el estudio para que la investigación parezca más sólida?"

explicacion: |
  Falso. Declarar las limitaciones es un acto de honestidad intelectual y es fundamental para que otros investigadores comprendan el alcance de los resultados.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["estructura", "conclusion"]

enunciado: "Al redactar la conclusión de un informe de investigación, el investigador debe retomar los objetivos planteados inicialmente para determinar si se cumplieron o no. Por lo tanto, una conclusión debe ser una síntesis de los hallazgos y no una repetición textual del resumen."

respuesta: verdadero
tipo: vf
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["comunicacion", "revision"]

enunciado: "En el proceso de comunicación científica, ¿cuál de las siguientes prácticas es recomendada para mejorar la calidad del manuscrito antes de la sumisión formal?"

respuesta: "El investigador envía el artículo a un colega para una revisión por pares informal antes de la revista."
tipo: mc
opciones_explicitas: ["El investigador escribe el artículo y lo envía directamente a la revista sin revisión previa.", "El investigador envía el artículo a un colega para una revisión por pares informal antes de la revista.", "El investigador publica los resultados en un blog personal sin pasar por revisión científica."]
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["proceso", "comunicacion"]

enunciado: "Para asegurar una comunicación efectiva de un nuevo descubrimiento científico, se deben seguir estos pasos en orden lógico:"

pasos:
  - "Realizar el análisis exhaustivo de los datos obtenidos."
  - "Redactar el manuscrito siguiendo las normas de la revista elegida."
  - "Enviar el manuscrito a la editorial para la revisión por pares."
  - "Presentar los resultados en un congreso para recibir feedback."

respuesta_orden: ["Realizar el análisis exhaustivo de los datos obtenidos.", "Redactar el manuscrito siguiendo las normas de la revista elegida.", "Enviar el manuscrito a la editorial para la revisión por pares.", "Presentar los resultados en un congreso para recibir feedback."]
tipo: ordenar
opciones_explicitas: ["Realizar el análisis exhaustivo de los datos obtenidos.", "Redactar el manuscrito siguiendo las normas de la revista elegida.", "Enviar el manuscrito a la editorial para la revisión por pares.", "Presentar los resultados en un congreso para recibir feedback."]
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["limitaciones", "etica"]

variables:
  caso: uno_de([["Un estudio sobre un fármaco que no menciona que la muestra fue de solo 5 personas.", "incorrecto"], ["Un estudio que reconoce que el clima afectó la velocidad de reacción química.", "correcto"]])

enunciado: "En la sección de discusión y conclusiones, un investigador debe declarar las limitaciones del estudio. Un ejemplo de una declaración de limitaciones adecuada es: {caso[0]}"

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["incorrecto", "correcto"]
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["terminologia", "completar"]

enunciado: "Cuando un artículo científico es aceptado y publicado, se convierte en parte del ___ científico, permitiendo que otros investigadores citen los hallazgos para construir nuevo conocimiento."

respuestas_validas:
  - "cuerpo"
  - "conocimiento"
  - "corpus"
respuesta: "conocimiento"
tipo: completar
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["metodologia", "conclusiones"]

respuesta: falso
tipo: vf

enunciado: "Una conclusión debe ser una mera repetición o resumen de los resultados obtenidos, sin aportar una síntesis interpretativa de los mismos."

explicacion: |
  La conclusión no es un resumen. Mientras que el resumen describe qué se hizo y qué se encontró, la conclusión debe interpretar los hallazgos, responder a la pregunta de investigación y discutir las implicancias de los resultados.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["comunicacion", "estructura"]

variables:
  orden_correcto: ["Resumen", "Introducción", "Metodología", "Resultados", "Discusión", "Conclusión"]
  idx: uno_de([0,1,2,3,4,5])

respuesta_orden: orden_correcto
tipo: ordenar

opciones_explicitas: ["Resumen", "Introducción", "Metodología", "Resultados", "Discusión", "Conclusión"]

enunciado: "Ordene los elementos de un artículo científico estándar siguiendo la estructura lógica de publicación (IMRyD extendido)."

explicacion: |
  La estructura estándar sigue un flujo lógico: desde la visión general (Resumen), el contexto (Introducción), el proceso (Metodología), la evidencia (Resultados), la interpretación (Discusión) y el cierre (Conclusión).
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["errores", "validez"]

respuesta: "generalización excesiva"
tipo: completar
respuestas_validas:
  - "generalización excesiva"
  - "sesgo de confirmación"
  - "error de muestreo"

enunciado: "Cuando un investigador extiende sus conclusiones más allá de los límites de su muestra o de los datos recolectados, está incurriendo en una ___."

explicacion: |
  La validez externa de una investigación depende de que las conclusiones no pretendan aplicar leyes universales si la muestra es limitada o no representativa del universo estudiado.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["discusion", "errores"]

respuesta: "Presentar nuevos datos"
tipo: mc
opciones_explicitas: ["Presentar nuevos datos", "Comparar con autores previos", "Reconocer limitaciones", "Sugerir futuras líneas de investigación"]

enunciado: "Durante la sección de Discusión de un informe o artículo, ¿cuál de las siguientes acciones es un error metodológico grave?"

explicacion: |
  La sección de Discusión es para interpretar resultados ya presentados. Si se introducen datos nuevos que no fueron expuestos en la sección de Resultados, se rompe la estructura lógica y la transparencia del proceso.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["etica", "sesgo"]

respuesta: verdadero
tipo: vf

enunciado: "Al comunicar resultados, el investigador tiene la obligación ética de reportar tanto los hallazgos que apoyan su hipótesis como aquellos que la contradicen."

explicacion: |
  Omitir resultados que contradicen la hipótesis inicial es una forma de sesgo de publicación que distorsiona el conocimiento científico. La integridad requiere reportar toda la evidencia relevante.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["metodologia", "escritura_cientifica"]

respuesta: "discusión"
tipo: mc
opciones_explicitas: ["conclusión", "discusión", "resumen", "introducción"]

enunciado: "Mientras que la conclusión se centra en sintetizar los hallazgos principales y responder al objetivo, la ___ se enfoca en interpretar los resultados en el contexto de la literatura existente y las implicaciones teóricas."

explicacion: |
  La discusión es la sección donde se comparan los resultados propios con otros estudios, mientras que la conclusión es un cierre sintético de lo aprendido.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["comunicacion", "estructura"]

respuesta: falso
tipo: vf
enunciado: "En un artículo científico, la sección de conclusiones debe ser una mera repetición del texto del resumen (abstract) sin aportar una síntesis interpretativa de los hallazgos."

explicacion: |
  Falso. El resumen es una síntesis de todo el trabajo (incluyendo métodos y resultados), mientras que la conclusión debe cerrar el argumento de la investigación y proyectar futuras líneas de estudio.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["difusion", "etica"]

respuesta_orden: ["publicar_en_revistas_con_revision_pares", "publicar_en_redes_sociales", "guardar_en_un_archivo_personal"]
tipo: ordenar

opciones_explicitas: ["publicar_en_revistas_con_revision_pares", "publicar_en_redes_sociales", "guardar_en_un_archivo_personal"]

enunciado: "Ordene los niveles de formalidad y validación científica en la comunicación de resultados, desde el más riguroso/validado hasta el menos formal."

explicacion: |
  La revisión por pares (peer-review) es el estándar de oro de la comunicación científica, asegurando la calidad y veracidad de los hallazgos antes de su difusión masiva.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["metodologia"]

respuesta: "se_confirma_o_rechaza"
tipo: completar
respuestas_validas:
  - "se_confirma_o_rechaza"

enunciado: "Si la hipótesis es la proposición que se intenta verificar al inicio de la investigación, la conclusión es el espacio donde la hipótesis ___."

explicacion: |
  La conclusión debe retomar la hipótesis original para determinar si la evidencia recolectada la respalda o la refuta.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["escritura_cientifica", "calidad"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["hallazgos_limitados", "relevancia_alta"], ["hallazgos_contradictorios", "necesidad_de_nuevos_estudios"]]
  respuestas: ["relevancia_alta", "necesidad_de_nuevos_estudios"]

respuesta: respuestas[caso_idx]
tipo: mc
opciones_explicitas: ["relevancia_alta", "necesidad_de_nuevos_estudios", "repetir_metodologia", "ignorar_errores"]

enunciado: "Si un investigador obtiene {escenarios[caso_idx][0]}, la conclusión debe enfocarse principalmente en la {escenarios[caso_idx][1]}."

explicacion: |
  Una conclusión debe ser honesta con las limitaciones del estudio. Si los resultados son limitados o contradictorios, la comunicación científica exige señalar la necesidad de nuevas investigaciones para resolver la ambigüedad.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["conclusiones", "informe"]

variables:
  datos: [["Los datos muestran una correlación positiva entre el uso de fertilizante y el crecimiento", "Se confirma la hipótesis inicial"], ["Los resultados son inconsistentes y no permiten validar la hipótesis", "Se sugiere ampliar la muestra"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Se confirma la hipótesis inicial", "Se sugiere ampliar la muestra", "Se deben ignorar los datos negativos", "El estudio es inválido"]

enunciado: "Un investigador llega a la siguiente situación: {datos[idx][0]}. ¿Cuál es la acción o conclusión más adecuada para el cierre de su informe?"

explicacion: |
  Una conclusión debe ser coherente con los hallazgos. Si los datos apoyan la hipótesis, se confirma; si no, se debe proponer la necesidad de más investigación o admitir la falta de evidencia.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["etica", "comunicacion"]

respuesta: falso
tipo: vf

enunciado: "En la comunicación de resultados, es éticamente aceptable omitir datos que contradicen la hipótesis principal para asegurar que la conclusión sea contundente."

explicacion: |
  Falso. La integridad científica exige reportar todos los hallazgos, incluso aquellos que contradicen la hipótesis, para evitar el sesgo de publicación.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

respuesta_orden: ["Introducción", "Metodología", "Resultados", "Discusión y Conclusión"]
tipo: ordenar
opciones_explicitas: ["Introducción", "Metodología", "Resultados", "Discusión y Conclusión"]

enunciado: "Ordene los elementos de un artículo científico siguiendo el orden lógico estándar de comunicación de resultados."

explicacion: |
  El orden estándar permite que el lector comprenda primero el contexto (introducción), cómo se hizo (metodología), qué se encontró (resultados) y qué significan esos hallazgos (discusión/conclusión).
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["discusion", "interpretacion"]

variables:
  datos: [["Resultados significativos en el grupo A", "Resultados no significativos"], ["Efecto observado en la variable X", "Efecto nulo en la variable X"]]
  idx: uno_de([0, 1])

respuesta: "interpretar"
tipo: completar
respuestas_validas:
  - "interpretar"
  - "repetir"
  - "ignorar"

enunciado: "En la sección de discusión de un informe, el investigador debe ___ los resultados obtenidos en relación con el marco teórico y los objetivos planteados."

explicacion: |
  La discusión no es solo repetir los resultados, sino interpretarlos, compararlos con otros autores y explicar su relevancia científica.
```

```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["difusion", "canales"]

variables:
  datos: [["un congreso científico", "una red social personal"], ["una revista indexada", "un blog de opinión"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["un congreso científico", "una red social personal", "una revista indexada", "un blog de opinión"]

enunciado: "Si el objetivo es la difusión académica formal de los resultados de una investigación, el medio más apropiado es ___."

explicacion: |
  Para la comunicación científica formal, se requieren canales con revisión por pares (peer-review) como revistas indexadas o presentaciones en congresos especializados.
```

## Sección: argumentar-desde-evidencia (25 preguntas)

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["definicion", "evidencia"]

respuesta: "datos"
tipo: completar
respuestas_validas:
  - "datos"
  - "información empírica"

enunciado: "Para construir un argumento científico sólido, es necesario apoyarse en ___ que permitan validar o refutar una hipótesis."

explicacion: |
  La evidencia en ciencia se compone de datos u observaciones sistemáticas que sirven de base para el razonamiento.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["objecion", "debate"]

variables:
  escenario: uno_de([["Un científico presenta un estudio sobre el cambio climático.", "una observación contradictoria"], ["Un investigador propone una nueva vacuna.", "un estudio que muestra efectos secundarios"], ["Un biólogo afirma que una especie está en peligro.", "un censo que muestra población estable"]])

respuesta: "objeción"
tipo: mc
opciones_explicitas: ["objeción", "conclusión", "hipótesis", "premisa"]

enunciado: "Si un investigador presenta una conclusión, presentar evidencia contraria a ella (como {escenario[1]}) se conoce como plantear una ___."

pasos:
  - "Identificar la conclusión del argumento original."
  - "Analizar la naturaleza de la objeción presentada."
  - "Buscar evidencia que responda directamente a esa objeción."

explicacion: |
  Una objeción es un argumento o dato que desafía la validez de una conclusión previa; responderle con evidencia es la base de la argumentación científica.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["veracidad", "booleano"]

respuesta: falso

tipo: vf

enunciado: "¿Es suficiente presentar una opinión personal para defender una conclusión científica ante una objeción?"

explicacion: |
  Falso. En la ciencia, la opinión no constituye evidencia; se requieren datos, mediciones o hechos verificables.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["estructura", "argumentacion"]

respuesta_orden: ["Premisa", "Evidencia", "Conclusión"]
tipo: ordenar
opciones_explicitas: ["Premisa", "Evidencia", "Conclusión"]

enunciado: "Ordene los elementos de un argumento científico estándar, desde el punto de partida hasta el cierre lógico:"

explicacion: |
  Un argumento científico parte de una premisa (afirmación), se sostiene mediante evidencia (datos) y culmina en una conclusión lógica.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["defensa", "argumentacion"]

variables:
  caso: uno_de([["La hipótesis es falsa", "la evidencia es insuficiente"], ["La conclusión es correcta", "los datos son erróneos"], ["El método es válido", "la muestra es sesgada"]])

respuesta: caso[1]

tipo: mc
opciones_explicitas: ["la evidencia es insuficiente", "los datos son erróneos", "la muestra es sesgada"]

enunciado: "Cuando se enfrenta una objeción que cuestiona la validez de un dato, la defensa más efectiva consiste en demostrar que ___."

explicacion: |
  Si la objeción ataca la calidad de la información, la defensa debe centrarse en la robustez y representatividad de los datos utilizados.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["evidencia", "argumentacion", "metodologia"]

respuesta: "un mecanismo causal directo"
tipo: mc
opciones_explicitas: ["un mecanismo causal directo", "un aumento en el tamaño de la muestra", "un consenso de expertos", "una repetición de la misma correlación"]

enunciado: "Ante la objeción de que los datos solo muestran una relación estadística, la defensa científica más sólida basada en la evidencia consiste en demostrar: ___"

explicacion: |
  Para defender una conclusión, no basta con señalar la correlación; se debe argumentar que la evidencia respalda el mecanismo causal propuesto.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["falacia", "evidencia", "logica"]

respuesta: falso
tipo: vf

enunciado: "Si un investigador afirma que 'una teoría es verdadera solo porque ha funcionado en experimentos previos, sin presentar los datos crudos de dichos experimentos', está utilizando una evidencia sólida para su defensa."

explicacion: |
  Afirmar que algo es cierto basándose solo en éxitos pasados sin mostrar los datos que sustentan esos éxitos es una apelación a la autoridad o una generalización apresurada, no una argumentación basada en evidencia científica.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["estructura", "argumento", "evidencia"]

respuesta_orden: ["Observación/Dato", "Inferencia/Análisis", "Conclusión"]
tipo: ordenar
opciones_explicitas: ["Inferencia/Análisis", "Conclusión", "Observación/Dato"]

enunciado: "Para construir un argumento científico robusto que responda a una objeción, se debe seguir este orden lógico de presentación de la evidencia:"

explicacion: |
  Un argumento científico debe partir de los hechos observados (datos), pasar por el análisis de esos datos (inferencia) y culminar en la conclusión que se defiende.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["variables", "control", "evidencia"]

variables:
  caso: uno_de([["Aumento de ventas de helados y aumento de ataques de tiburones", "El calor causa ambos"], ["Uso de fertilizante y crecimiento de plantas", "El fertilizante causa el crecimiento"]])
  solucion: ["Controlar variables externas", "Ignorar la objeción", "Cambiar la conclusión", "Aceptar la correlación"]

respuesta: solucion[0]
tipo: mc
opciones_explicitas: ["Controlar variables externas", "Ignorar la objeción", "Cambiar la conclusión", "Aceptar la correlación"]

enunciado: "En el caso de {caso[0]}, si un revisor objeta que existe una variable de confusión (como el clima), la defensa científica correcta para mantener la validez de la conclusión es: ___"

explicacion: |
  La defensa ante una variable de confusión consiste en demostrar, mediante el control de variables o análisis estadísticos adicionales, que el efecto observado persiste independientemente de la variable externa.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["refutacion", "evidencia", "metodologia"]

respuesta: "conclusión"
tipo: completar
respuestas_validas:
  - "conclusión"

enunciado: "Para refutar una objeción científica, el investigador debe presentar datos que contradigan la crítica y así validar su ___ original."

explicacion: |
  La ciencia se basa en la evidencia; sin datos que respalden la posición frente a una crítica, la conclusión pierde validez científica.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["argumentacion", "metodologia"]

tipo: mc
opciones_explicitas: ["Una opinión basada en la experiencia personal", "Un dato estadístico derivado de un muestreo representativo", "Una afirmación sin respaldo verificable", "Una creencia compartida por la comunidad científica"]
respuesta: "Un dato estadístico derivado de un muestreo representativo"

enunciado: "En el contexto de la investigación científica, ¿cuál de las siguientes opciones constituye una evidencia sólida para defender una conclusión?"

explicacion: |
  La evidencia científica debe ser reproducible y estar respaldada por datos obtenidos mediante métodos sistemáticos, no puede basarse únicamente en la subjetividad o la experiencia anecdótica.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["errores_logicos", "correlacion"]

tipo: vf
respuesta: falso

enunciado: "Si un estudio muestra que dos variables aumentan simultáneamente (correlación), esto es evidencia suficiente para afirmar que una variable causa la otra (causalidad)."

explicacion: |
  La correlación no implica causalidad. Que dos eventos ocurran al mismo tiempo no significa que uno sea la causa del otro; puede haber una tercera variable influyendo en ambos o ser una coincidencia estadística.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["debate", "defensa_conclusion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: ["El investigador presenta un gráfico con tendencia clara y valores de p < 0.05", "El investigador repite su conclusión sin mostrar nuevos datos"]
  respuestas: ["Es una defensa válida mediante evidencia cuantitativa", "Es una falacia de autoridad o repetición"]

tipo: completar
respuestas_validas:
  - "Es una defensa válida mediante evidencia cuantitativa"
  - "Es una falacia de autoridad o repetición"
respuesta: respuestas[escenario_idx]

enunciado: "Ante una objeción científica, si el investigador actúa como en el escenario: {escenarios[escenario_idx]}, su respuesta es: ___"

explicacion: |
  Para defender una conclusión, no basta con insistir en la idea; se requiere aportar datos que refuten la objeción o que fortalezcan la validez del hallazgo original.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["metodologia", "proceso"]

tipo: ordenar
opciones_explicitas: ["Recopilar datos mediante observación o experimento", "Analizar los datos para encontrar patrones", "Formular una conclusión basada en la evidencia", "Contrastar la conclusión con la objeción recibida"]

enunciado: "Ordene los pasos lógicos para construir un argumento científico sólido que responda a una duda sobre un hallazgo:"

explicacion: |
  El proceso debe seguir un orden lógico: primero se obtiene la información, luego se procesa, se llega a una conclusión y finalmente se usa esa estructura para responder a críticas.
respuesta_orden: ["Recopilar datos mediante observación o experimento", "Analizar los datos para encontrar patrones", "Formular una conclusión basada en la evidencia", "Contrastar la conclusión con la objeción recibida"]
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["falsacion", "evidencia"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si una conclusión científica es 'Todos los elementos X presentan la propiedad Y', y un crítico presenta un elemento X que NO tiene la propiedad Y, ¿qué ha presentado el crítico?"

respuesta: "contraejemplo"

explicacion: |
  Un solo contraejemplo basado en evidencia empírica es suficiente para refutar una generalización universal, obligando al investigador a revisar su conclusión o sus premisas.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["metodologia", "argumentacion"]

respuesta: "evidencia"
tipo: "completar"
respuestas_validas:
  - "evidencia"
  - "datos"
  - "hechos"

enunciado: "Mientras que una opinión es un juicio subjetivo sin necesidad de validación, la ___ es un dato o hecho comprobable que sustenta una conclusión científica."

explicacion: |
  La evidencia científica se distingue de la opinión porque es verificable, reproducible y puede ser contrastada mediante observación o experimentación.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["logica", "metodologia"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["Aumento de ventas de helados", "Aumento de ataques de tiburones"], ["Aumento de temperatura global", "Aumento de incendios forestales"]]

respuesta: "correlación"
tipo: "mc"
opciones_explicitas: ["causalidad", "correlación", "coincidencia", "hipótesis"]

enunciado: "En el escenario {escenarios[escenario_idx][0]} y {escenarios[escenario_idx][1]}, la relación observada entre ambas variables es una ___ pero no necesariamente una relación de causa-efecto. ¿Cómo se define este fenómeno?"

explicacion: |
  La correlación indica que dos variables cambian juntas, pero no implica que una cause la otra. Confundir esto con causalidad es un error lógico común en la argumentación científica.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["logica", "argumentacion"]

respuesta: falso
tipo: "vf"

enunciado: "Una conclusión científica es válida si se basa únicamente en la experiencia personal de un investigador, independientemente de si otros científicos pueden replicar el resultado."

explicacion: |
  Falso. La ciencia requiere replicabilidad y evidencia empírica que trascienda la subjetividad individual para ser considerada válida.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["metodologia", "jerarquia"]

respuesta_orden: ["Opinión de experto", "Estudio de caso", "Estudio observacional", "Ensayo clínico aleatorizado"]
tipo: "ordenar"
opciones_explicitas: ["Opinión de experto", "Estudio de caso", "Estudio observacional", "Ensayo clínico aleatorizado"]

enunciado: "Ordene los siguientes niveles de evidencia de MENOR a MAYOR rigor científico para defender una conclusión médica:"

explicacion: |
  El rigor aumenta a medida que se controla la selección de la muestra y se minimizan los sesgos, siendo los ensayos clínicos aleatorizados el estándar de oro.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["metodologia", "logica"]

respuesta: "hipótesis"
tipo: "completar"
respuestas_validas:
  - "hipótesis"
  - "suposición"
  - "conjetura"

enunciado: "Una ___ es una explicación provisional que requiere ser contrastada con evidencia para ser aceptada, mientras que la evidencia es el soporte empírico que permite validarla o refutarla."

explicacion: |
  La hipótesis es el punto de partida de la investigación (una propuesta explicativa), mientras que la evidencia es la herramienta para probar si dicha propuesta es correcta.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["argumentacion", "evidencia", "ciencia"]

variables:
  escenario_idx: uno_de([0, 1])
  objecion: ["la variabilidad natural", "la falta de mediciones precisas"]
  evidencia_correcta: ["datos de núcleos de hielo", "datos de registros satelitales"]

respuesta: evidencia_correcta[escenario_idx]
tipo: mc
opciones_explicitas: ["datos de registros satelitales", "datos de núcleos de hielo", "observaciones anecdóticas", "teorías sin sustento"]

enunciado: "Un investigador afirma que el calentamiento es antropogénico. Un crítico objeta que {objecion[escenario_idx]}. Para defender su conclusión, el investigador debe presentar como evidencia: ___"

explicacion: |
  Para refutar una objeción sobre la variabilidad natural o errores de medición, se requiere evidencia empírica directa (registros o núcleos de hielo) que descarte la causa propuesta por el crítico.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["metodologia", "evidencia"]

variables:
  caso_idx: uno_de([0, 1])
  escenario: [["El grupo control no mostró cambios significativos", "El grupo experimental redujo la carga viral en un 90%"], ["La muestra fue insuficiente para generalizar", "El fármaco mostró una eficacia del 85% en ensayos clínicos"]]
  objecion: ["la varianza es demasiado alta", "el efecto es producto del azar"]

respuesta: verdadero
tipo: vf

enunciado: "En un ensayo clínico, si el grupo experimental muestra una reducción del 90% en la carga viral frente a un grupo control estable, y la desviación estándar es mínima, ¿es válido argumentar que el fármaco es efectivo para refutar la objecion de que {objecion[caso_idx]}?"

explicacion: |
  La evidencia estadística (reducción significativa y baja varianza) es la base para defender una conclusión científica frente a críticas sobre la aleatoriedad.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["logica", "argumentacion"]

variables:
  orden_idx: uno_de([0, 1])
  pasos_correctos: [["Observación de datos", "Formulación de hipótesis", "Contraste con evidencia", "Conclusión"], ["Recolección de muestra", "Análisis estadístico", "Revisión de pares", "Publicación de resultados"]]

respuesta_orden: pasos_correctos[orden_idx]
tipo: ordenar
opciones_explicitas: pasos_correctos[orden_idx]

enunciado: "Para construir un argumento científico sólido que resista una objeción, se debe seguir un orden lógico de validación. Ordene los pasos para el caso de una investigación de campo:"

explicacion: |
  Un argumento científico no es solo una opinión; es una secuencia lógica que parte de la observación y pasa por el contraste riguroso de la evidencia antes de concluir.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["logica", "critica"]

variables:
  ejemplo_idx: uno_de([0, 1])
  objecion_texto: [["Si no puedes medir el efecto exacto de cada molécula, entonces tu teoría es falsa", "No has probado que el cambio sea causado por el CO2, por lo tanto, el CO2 no influye"], ["No has probado que el cambio sea causado por el CO2, por lo tanto, el CO2 no influye", "Si no puedes medir el efecto exacto de cada molécula, entonces tu teoría es falsa"]]

respuesta: "falacia de la evidencia insuficiente"
tipo: completar
respuestas_validas:
  - "falacia de la evidencia insuficiente"
  - "error de generalización"

enunciado: "Ante la objecion: '{objecion_texto[ejemplo_idx][0]}', el investigador debe identificar que el crítico está cometiendo una ___ para poder responder con datos que cubran el margen de error."

explicacion: |
  Cuando un crítico exige una certeza absoluta (imposible en ciencia) para invalidar una tendencia, está incurriendo en una falacia de evidencia insuficiente.
```

```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["evidencia", "datos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: ["Se estudia la eficacia de un nuevo fertilizante", "Se estudia la relación entre horas de sueño y memoria"]
  dato_relevante: ["kg de biomasa por planta", "puntuación en test de retención"]
  objecion: ["la calidad del suelo no fue controlada", "el nivel de estrés de los sujetos"]

respuesta: dato_relevante[escenario_idx]
tipo: mc
opciones_explicitas: ["kg de biomasa por planta", "puntuación en test de retención", "opinión de los agricultores", "color de las hojas"]

enunciado: "Para defender la eficacia de {escenario[escenario_idx]} frente a la objecion de que {objecion[escenario_idx]}, el dato científico más concreto es: ___"

explicacion: |
  La defensa de una conclusión depende de la elección de la variable dependiente correcta que cuantifique directamente el fenómeno estudiado.
```

