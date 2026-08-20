# Examen jefe — Maestro del Diseño y Método

> Logro #186. Completaste el parcial integrando diseño experimental, metodologías y técnicas de campo con rigor científico. Pool agregado de los `cuestionario.md` ya validados de sus 7 temas. **168 preguntas totales** en 7/7 secciones.

---

## Sección: diseno-experimental-variables-y-control (25 preguntas)

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables_y_control"
  nivel: "basico"
  tags: ["variables", "metodologia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El efecto de la temperatura en el crecimiento de una planta", "temperatura", "crecimiento"],
    ["El efecto de la dosis de un fármaco en la presión arterial", "dosis", "presion"]
  ]

enunciado: "En un experimento sobre {escenarios[escenario_idx][0]}, la variable que el investigador manipula deliberadamente es la {escenarios[escenario_idx][1]}."

respuesta: {escenarios[escenario_idx][1]}
tipo: completar
respuestas_validas: ["temperatura", "dosis"]

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

respuesta: ["Identificar la variable independiente", "Establecer un grupo de control", "Manipular la variable independiente", "Medir la variable dependiente"]
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

variables:
  escenario: uno_de([
    ["El tiempo de reacción ante un estímulo sonoro", "tiempo de reacción"],
    ["La cantidad de azúcar en una solución", "cantidad de azúcar"],
    ["La velocidad de un vehículo según su carga", "velocidad"]
  ])

enunciado: "En el siguiente experimento: {escenario[0]}, la variable que el investigador mide para obtener sus resultados es la {escenario[1]}."

respuesta: "tiempo de reacción"
tipo: completar
respuestas_validas: ["tiempo de reacción"]

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

respuesta: falso
tipo: vf

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
respuestas_validas: ["se pierde la validez porque los cambios en el peso podrían deberse a la luz o temperatura y no al fertilizador"]

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

opciones_explicitas: [
  "Definir variable independiente y dependiente",
  "Establecer grupo de control y variables de control",
  "Ejecutar experimento y medir resultados",
  "Analizar si los resultados validan la hipótesis"
]

respuesta: [
  "Definir variable independiente y dependiente",
  "Establecer grupo de control y variables de control",
  "Ejecutar experimento y medir resultados",
  "Analizar si los resultados validan la hipótesis"
]
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
  escenarios: [
    ["El efecto de la cantidad de fertilizante en el crecimiento de una planta de maíz.", "fertilizante", "crecimiento"],
    ["El impacto de la temperatura del agua en la velocidad de disolución de una tableta efervescente.", "temperatura", "velocidad_disolucion"]
  ]

respuesta: escenarios[escenario_idx][1
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
respuestas_validas: ["para establecer una línea base de comparación", "para asegurar que el experimento sea más largo", "para aumentar la muestra"]

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
  casos: [
    ["Se quiere probar un nuevo fármaco para el dolor de cabeza, pero los sujetos del grupo de prueba también están tomando café.", "café"],
    ["Se quiere probar un nuevo fertilizante, pero las plantas del grupo de prueba reciben más luz solar que las del grupo control.", "luz solar"]
  ]

respuesta: casos[caso_idx][0
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

respuesta: ["Definir la hipótesis", "Identificar variables", "Seleccionar grupos", "Ejecutar experimento"]
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
respuestas_validas: ["dependiente"]

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
  escenario_idx: uno_de([0, 1])
  escenarios: [["un fármaco nuevo", "un placebo"], ["un nuevo fertilizante", "un fertilizante estándar"]]
  objetivo: "comparar el efecto del {dado} contra un grupo de control para aislar la causa del cambio observado."
  dado: uno_de([0, 1])[escenarios]

respuesta: "mc"
tipo: "mc"
opciones_explicitas: ["Observar el comportamiento natural sin intervención", "Asegurar que los cambios se deban a la variable independiente y no a factores externos", "Aumentar el tamaño de la muestra para mayor validez", "Eliminar la necesidad de una variable dependiente"]

enunciado: "En un experimento que utiliza {dado}, el grupo de control es fundamental porque su función principal es {objetivo}"

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

respuesta: "mc"
tipo: "mc"
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

respuesta: ["Identificar variables", "Asignar grupos", "Manipular la independiente", "Medir la dependiente"]
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
  escenarios: [
    ["Un agricultor aplica distintas dosis de fertilizante NPK a plantas de maíz para medir su altura final.", "altura"],
    ["Un científico varía la temperatura del agua para observar la velocidad de disolución del azúcar.", "velocidad"]
  ]

enunciado: "En el experimento descrito, la variable que el investigador manipula deliberadamente (variable independiente) es la dosis de fertilizante o la temperatura. La variable que se mide para obtener resultados (variable dependiente) es la ___."

respuesta: escenarios[escenario_idx][1
tipo: completar
respuestas_validas: ["altura", "velocidad"]

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
  escenarios: [
    ["Estudio sobre cómo el tiempo de estudio afecta la nota de un examen.", "tiempo"],
    ["Estudio sobre cómo la cantidad de luz solar afecta el crecimiento de un cactus.", "luz"]
  ]

enunciado: "En el escenario '{escenarios[escenario_idx][0]}', ¿cuál es la variable independiente?"

opciones_explicitas: ["{escenarios[escenario_idx][1]}", "La nota del examen", "El tipo de planta", "El clima"]

respuesta: escenarios[escenario_idx][0
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
  escenarios: [
    ["Se prueba un nuevo fármaco contra el dolor de cabeza.", "placebo"],
    ["Se prueba un nuevo método de enseñanza de matemáticas.", "clase_tradicional"]
  ]
  controles: [
    ["placebo"],
    ["clase_tradicional"]
  ]

enunciado: "Para validar que el efecto observado se debe al tratamiento y no a otros factores, es necesario comparar los resultados con un grupo de ___."

opciones_explicitas: ["{controles[escenario_idx][0]}", "observación", "reacción", "descarte"]

respuesta: controles[escenario_idx][0
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

respuesta: ["Definir la hipótesis", "Manipular la variable independiente", "Medir la variable dependiente", "Analizar los resultados"]
tipo: ordenar

explicacion: |
  Un experimento sigue un orden lógico: primero se plantea la hipótesis, luego se aplica el estímulo (independiente), se recolectan datos (dependiente) y finalmente se interpretan.
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
  escenarios: [
    ["La temperatura afecta el crecimiento de las plantas.", "La temperatura influye en el crecimiento de las plantas de tomate bajo luz roja."],
    ["El clima es malo hoy.", "El clima influye en el estado de ánimo de las personas."]
  ]

tipo: mc
opciones_explicitas: ["Es demasiado específica", "Es vaga o ambigua", "Es una ley universal", "Es una variable dependiente"]

enunciado: "Analiza el siguiente enunciado: '{escenarios[escenario_idx][0]}'. Esta hipótesis se considera 'mala' porque es ___."

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
respuestas_validas: ["variable", "causa", "efecto"]

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
  escenario: uno_de([
    ["El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días", "El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días"],
    ["El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días", "El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días"],
    ["El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días", "El uso de fertilizante X aumenta el crecimiento de la planta Y en un 20% en 30 días"]
  ])
  idx: uno_de([0, 1, 2])

tipo: completar
enunciado: "Dada la hipótesis: '{escenario[idx][0]}', el factor que se pretende modificar es el ___."
respuestas_validas: ["fertilizante X"]
respuesta: escenario[idx][1

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
respuesta: ["Formular la hipótesis", "Diseñar el experimento", "Analizar los datos obtenidos", "Concluir si la hipótesis es aceptada o rechazada"]

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
  caso: uno_de([
    ["'Las fuerzas invisibles del universo determinan el destino humano'", "Las fuerzas invisibles del universo determinan el destino humano"],
    ["'El aumento de la temperatura global reduce el grosor del hielo ártico'", "El aumento de la temperatura global reduce el grosor del hielo ártico"],
    ["'Las personas son felices cuando están con sus amigos'", "Las personas son felices cuando están con sus amigos"]
  ])
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["Mala: es vaga y no medible", "Mala: es infalsable", "Buena: es específica y comprobable"]
enunciado: "Analice el siguiente caso: '{caso[idx][0]}'. ¿Cuál es su clasificación?"

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
  escenarios: [
    ["El clima afectará el ánimo de las personas.", "Vaga"],
    ["El aumento de la temperatura ambiente en 5°C reducirá la productividad laboral en un 10%.", "Específica"]
  ]

tipo: mc
opciones_explicitas: ["Vaga", "Específica"]

enunciado: "Analiza el siguiente enunciado: '{escenarios[escenario_idx][0]}'. La principal deficiencia de esta hipótesis es que es ___."

respuesta: "{escenarios[escenario_idx][1]}"

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

respuesta: ["Observación del fenómeno", "Formulación de la hipótesis", "Diseño del experimento", "Análisis de resultados"]

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
respuestas_validas: ["falsable", "falsable"]

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

variables:
  es_falsable: uno_de([verdadero, falso])

respuesta: es_falsable
tipo: completar
enunciado: "Una hipótesis científica se considera 'buena' si es falsa, es decir, si existe la posibilidad de que un experimento pueda demostrar que es incorrecta. ¿Es esto cierto? {es_falsable}"

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

respuestas_validas: [datos[escenario][2]]
respuesta: datos[escenario][2]
tipo: completar
tolerancia_abs: 0

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

respuesta: ["variable_independiente", "variable_dependiente"]
tipo: ordenar

opciones_explicitas: ["variable_dependiente", "variable_independiente", "variable_extraña", "variable_control"]

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

variables:
  idx: uno_de([0,1])
  tipo_h: ["nula", "alternativa"][idx]

respuesta: tabla[tipo_h][1]
tipo: mc

opciones_explicitas: ["hipotesis_nula", "hipotesis_alternativa"]

enunciado: "En un experimento, la hipótesis que postula que 'no existe una relación o diferencia significativa entre las variables' se conoce como: {tabla[tipo_h][0]}"

tablas:
  - ["nula", "hipotesis_nula"]
  - ["alternativa", "hipotesis_alternativa"]

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
  escenario: uno_de([
    ["Si el fertilizante X aumenta el crecimiento de las plantas de tomate en un 20% en 15 días.", "buena"],
    ["El clima afecta el estado de ánimo de las personas de forma variable.", "mala"],
    ["Los estudiantes rinden mejor si hay música clásica en el aula.", "mala"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["buena", "mala"]

enunciado: "Analiza el siguiente planteamiento: '{escenario[idx][0]}'. ¿Qué tipo de hipótesis es?"

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
  caso: uno_de([
    ["La hipótesis es 'Existe una fuerza invisible que empuja los objetos pero no se puede medir'.", falso],
    ["La hipótesis es 'Si aumento la temperatura, el gas se expande'.", verdadero]
  ])
  idx: uno_de([0, 1])

respuesta: caso[idx][1
tipo: completar
enunciado: "Considera el siguiente caso: {caso[idx][0]}. ¿Es esta una hipótesis científica falsable (es decir, que puede ser refutada por la observación)?"

explicacion: |
  Para que una hipótesis sea científica, debe ser posible diseñar un experimento que pueda demostrar que es falsa. Si una afirmación es tan vaga o metafísica que no hay forma de contradecirla, no es científica.
```

```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["caracteristicas"]

respuesta: ["especifica", "falsable", "medible"]
tipo: ordenar

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
  ejemplo: uno_de([
    ["'Las plantas crecen mejor con luz solar'.", "vaga"],
    ["'El uso de la red social X reduce el tiempo de sueño en 30 minutos.'", "especifica"]
  ])
  idx: uno_de([0, 1])

respuesta: ejemplo[idx][1
tipo: completar
respuestas_validas: ["vaga", "especifica"]

enunciado: "El siguiente enunciado es: '{ejemplo[idx][0]}'. Por su estructura, se clasifica como una hipótesis _________."

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

## Sección: observacion-y-pregunta-investigable (25 preguntas)

```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "basico"
  tags: ["metodologia", "observacion"]

respuesta: "observacion"
tipo: completar
respuestas_validas: ["observacion"]

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

variables:
  es_investigable: uno_de([verdadero, falso])

respuesta: es_investigable
tipo: completar
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

respuesta: 2
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

respuesta: ["Observación del fenómeno", "Identificación de variables", "Formulación de la pregunta"]
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

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["La temperatura del agua", "La velocidad del crecimiento"], ["La luz solar", "La cantidad de fertilizante"]]

respuesta: datos[escenario_idx][0
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

respuestas_validas: ["luz solar"]
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
  escenarios: [
    ["Se observa que los perros corren más rápido si les dan premios", "comida"],
    ["Se observa que las plantas crecen más si se riegan con té", "líquido"]
  ]

enunciado: "Observación: {escenarios[escenario_idx][0]}. En este caso, la variable que el investigador puede manipular (variable independiente) es el/la {escenarios[escenario_idx][1]}."

opciones_explicitas: ["{escenarios[escenario_idx][1]}", "velocidad de carrera", "perro", "entorno"]
respuesta: "{escenarios[escenario_idx][1]}"
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

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: completar
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
respuesta: ["Realizar una observación detallada", "Identificar variables (independiente y dependiente)", "Formular la pregunta de investigación", "Diseñar un experimento para probarla"]
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
  casos: [
    ["¿Cómo afecta la temperatura al tiempo de disolución de la sal?", "temperatura", "tiempo"],
    ["¿Cómo influye la intensidad de la luz en la altura de la planta?", "luz", "altura"]
  ]

enunciado: "En el caso: '{casos[caso_idx][0]}', la estructura de la pregunta busca relacionar la variable independiente ({casos[caso_idx][0]}) con la variable dependiente ({casos[caso_idx][1]})."

opciones_explicitas: ["{casos[caso_idx][0]}", "{casos[caso_idx][1]}", "ambas", "ninguna"]
respuesta: "{casos[caso_idx][1]}"
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
  escenarios: [
    ["¿Las plantas crecen más con música clásica?", "cerrada"],
    ["¿Cómo afecta la frecuencia de riego al crecimiento de la planta?", "investigable"]
  ]

respuesta: escenarios[ejemplo_idx][1
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
  casos: [
    ["¿La temperatura influye en la velocidad de disolución de la sal?", "temperatura"],
    ["¿El color del recipiente afecta la rapidez con la que se disuelve el azúcar?", "color"]
  ]

respuesta: casos[caso_idx][1
tipo: completar
respuestas_validas: ["temperatura", "color"]

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

respuesta: ["Observación", "Identificación de variables", "Formulación de pregunta"]
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
  preguntas: [
    ["¿Cómo influye el tipo de suelo en el crecimiento de las semillas?", "posible"],
    ["¿Por qué las plantas tienen sentimientos cuando no las riego?", "imposible"]
  ]

respuesta: preguntas[pregunta_idx][1
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
respuestas_validas: ["pregunta"]

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
  escenario: uno_de([
    ["¿Por qué el cielo es azul?", "falsa"],
    ["¿Cómo afecta la temperatura al crecimiento de una planta?", "verdadera"],
    ["¿Es el color azul el más bonito?", "falsa"]
  ])

respuesta: escenario[1
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

respuesta: ["Observación", "Identificación de variables", "Formulación de la pregunta"]
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

variables:
  caso: uno_de([
    ["¿Influye la luz en el crecimiento?", "pregunta"],
    ["La luz influye en el crecimiento.", "hipotesis"]
  ])

respuesta: caso[0
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
  datos: [
    ["Observo que las plantas de mi balcón crecen más rápido cuando las riego con té de banana.", "El efecto de la concentración de potasio en el crecimiento de la planta de interior."],
    ["Noto que mis amigos se ven más cansados los lunes que los viernes.", "La relación entre el ciclo semanal de sueño y los niveles de energía percibida."]
  ]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: [
    "¿Por qué las plantas son verdes?",
    datos[escenario_idx][1],
    "¿Me gusta el té de banana?",
    "¿Cómo se cuidan las plantas?"
]

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
  casos: [
    ["Observación: El uso de música clásica durante el estudio parece mejorar la retención de vocabulario en estudiantes de inglés.", "música clásica", "retención de vocabulario"]
  ]

respuesta: "música clásica"
tipo: completar
respuestas_validas: ["música clásica"]

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
  preguntas: [
    ["¿Es el color azul el color más bonito de todos los colores?", falso],
    ["¿Influye la temperatura del agua en la velocidad de disolución de la sal?", verdadero]
  ]

respuesta: preguntas[pregunta_idx][1
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
  escenario_idx: uno_de([0])
  escenarios: [
    ["Observación: Los perros corren más rápido cuando hay un estímulo sonoro fuerte.", "¿De qué manera el nivel de decibelios de un estímulo sonoro afecta la velocidad de carrera de un canino?", "De qué manera el nivel de decibelios de un estímulo sonoro afecta la velocidad de carrera de un canino?", "El ruido hace que los perros corran."]
  ]

respuesta: escenarios[escenario_idx][1
tipo: ordenar
opciones_explicitas: [
    "De qué manera el nivel de decibelios de un estímulo sonoro afecta la velocidad de carrera de un canino?",
    "El ruido hace que los perros corran.",
    "¿Por qué los perros corren rápido?",
    "¿Los perros corren con ruido?"
]

enunciado: "Ordena los siguientes enunciados desde la pregunta de investigación más técnica y bien estructurada hasta la más informal o vaga, basándote en la observación: '{escenarios[escenario_idx][0]}'."

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
  items: [
    ["Observación: El crecimiento de los moños en el pan depende de la humedad.", "Humedad relativa", "Tiempo de fermentación", "Temperatura ambiente"]
  ]

respuesta: "Humedad relativa"
tipo: mc
opciones_explicitas: [
    "Humedad relativa",
    "Temperatura ambiente",
    "Tiempo de fermentación",
    "Todas las anteriores"
]

enunciado: "Si queremos investigar la observación: '{items[item_idx][0]}', y decidimos enfocarnos únicamente en la variable ambiental que se puede medir con un higrómetro, ¿cuál sería nuestra variable principal?"

explicacion: |
  El higrómetro es el instrumento diseñado específicamente para medir la humedad (relativa o absoluta) del aire.
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
respuestas_validas: ["variable"]

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

variables:
  es_cualitativo: uno_de([verdadero, falso])

respuesta: es_cualitativo
tipo: completar
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

respuesta: ["definir_instrumento", "aplicar_instrumento", "registrar_datos"]
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
respuestas_validas: ["fiabilidad", "confiabilidad"]

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

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: "vf"

explicacion: |
  Es un sesgo de selección porque la muestra solo incluye a quienes consumen en la cafetería a esa hora específica, excluyendo a quienes traen su propia comida, a quienes almuerzan en otros horarios o a quienes no usan la cafetería, invalidando la representatividad de la muestra.
```

```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["metodologia", "validez", "confiabilidad"]

variables:
  pasos_ordenados: [
    ["Diseñar el instrumento de recolección", "1"],
    ["Realizar una prueba piloto con una muestra pequeña", "2"],
    ["Analizar la consistencia interna y confiabilidad", "3"],
    ["Aplicar el instrumento a la muestra definitiva", "4"]
  ]

respuesta: ["Diseñar el instrumento de recolección", "Realizar una prueba piloto con una muestra pequeña", "Analizar la consistencia interna y confiabilidad", "Aplicar el instrumento a la muestra definitiva"]
tipo: "ordenar"
opciones_explicitas: ["Diseñar el instrumento de recolección", "Realizar una prueba piloto con una muestra pequeña", "Analizar la consistencia interna y confiabilidad", "Aplicar el instrumento a la muestra definitiva"]

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

respuestas_validas: ["triangulación"]
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
  escenarios: [
    ["Un investigador analiza 10 entrevistas y llega a conclusiones basadas solo en sus propias opiniones sin contrastar con el texto.", "falso"],
    ["Dos investigadores analizan las mismas entrevistas de forma independiente y llegan a las mismas categorías temáticas.", "verdadero"]
  ]

enunciado: "Se presenta el siguiente escenario de investigación: {escenarios[escenario_idx][0]}. ¿Es este proceso confiable para la investigación científica? (Respuesta: verdadero/falso)"

respuesta: "{escenarios[escenario_idx][1]}"
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
  escenarios: [
    ["Se realiza una encuesta sobre hábitos de lectura solo en una biblioteca pública.", "muestreo_no_representativo"],
    ["Se entrevista a personas en un gimnasio sobre su consumo de azúcar.", "muestreo_no_representativo"]
  ]

enunciado: "Si un investigador utiliza el escenario '{escenarios[escenario_idx][0]}' para estudiar la población general, estamos ante un error de: ___"

respuestas_validas: ["muestreo_no_representativo"]

respuesta: escenarios[escenario_idx][1
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

respuesta: ["Diseño del instrumento", "Validación por expertos", "Prueba piloto", "Análisis de resultados de la prueba"]
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
  casos: [
    ["¿Alguna vez ha mentido para evitar un conflicto?", "deseabilidad_social"],
    ["¿Qué tan importante es para usted la honestidad en el trabajo?", "deseabilidad_social"]
  ]

enunciado: "Cuando un encuestado responde de una manera que busca dar una buena imagen de sí mismo en lugar de decir la verdad, se produce un sesgo de: ___"

respuestas_validas: ["deseabilidad_social"]

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

respuestas_validas: ["intervenir", "interactuar", "influir"]
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

enunciado: "Si un investigador utiliza el {escenario[0]} para su estudio, los datos obtenidos se clasifican como datos {escenario[1]}."

opciones_explicitas: ["primarios", "secundarios"]
respuesta: "primarios"
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

respuestas_validas: ["validez"]
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

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: completar
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
respuesta: ["Definir el instrumento", "Recolectar los datos", "Analizar los resultados"]
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
  escenarios: [
    ["Se desea conocer la opinión de 500 ciudadanos sobre una nueva ley de tránsito.", "encuesta"],
    ["Se busca observar el comportamiento natural de primates en una selva sin intervenir.", "observacion"],
    ["Se requiere profundizar en las experiencias de vida de tres sobrevivientes de un naufragio.", "entrevista"]
  ]

enunciado: "Para el escenario: {escenarios[escenario_idx][0]}, el método de recolección más adecuado es una {escenarios[escenario_idx][1]}."

respuesta: "___"
tipo: completar
respuestas_validas: ["encuesta", "observacion", "entrevista"]

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
  casos: [
    ["Un investigador quiere saber qué opinan los estudiantes de una universidad, pero solo pregunta a sus amigos de su misma carrera.", "verdadero"],
    ["Un investigador selecciona al azar 100 números de teléfono de un padrón oficial para una encuesta de salud.", "falso"]
  ]

enunciado: "¿Es el proceso de recolección descrito en el caso '{casos[caso_idx][0]}' un proceso libre de sesgo de selección? (Responda con verdadero o falso)"

respuesta: casos[caso_idx][1
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
  instrumentos: [
    ["Cuestionario con preguntas cerradas", "cuantitativo"],
    ["Guion de entrevista semiestructurada", "cualitativo"],
    ["Ficha de registro de observación", "cualitativo"]
  ]

enunciado: "El instrumento '{instrumentos[instrumento_idx][0]}' se clasifica principalmente como un método de recolección de tipo _________."

respuesta: "___"
tipo: completar
respuestas_validas: ["cuantitativo", "cualitativo"]

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
respuesta: ["Diseñar el guion de preguntas", "Contactar a los participantes", "Realizar la entrevista", "Analizar la información"]
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

variables:
  propiedad_idx: uno_de([0, 1])
  propiedades: [
    ["El instrumento mide realmente la variable que pretende medir.", "validez"],
    ["El instrumento produce resultados consistentes al aplicarse repetidamente.", "confiabilidad"]
  ]

enunciado: "Si un test de inteligencia arroja resultados muy distintos cada vez que se le aplica a la misma persona en condiciones iguales, decimos que el test carece de _________."

respuesta: "___"
tipo: completar
respuestas_validas: ["validez", "confiabilidad"]

explicacion: |
  La confiabilidad se refiere a la estabilidad y consistencia de la medida, mientras que la validez se refiere a la exactitud de lo que se está midiendo.
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
