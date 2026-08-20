# Investigacion — Diseno experimental variables y control (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Identificación de variables

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables_y_control"
  nivel: "basico"
  tags: ["variables", "metodologia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El efecto de la temperatura en el crecimiento de una planta", "temperatura", "crecimiento"], ["El efecto de la dosis de un fármaco en la presión arterial", "dosis", "presion"]]

enunciado: "En un experimento sobre {escenarios[escenario_idx][0]}, la variable que el investigador manipula deliberadamente es la {escenarios[escenario_idx][1]}."

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "temperatura"
  - "dosis"

explicacion: |
  La variable independiente es el factor que el investigador cambia para observar qué efectos produce.
```

### 2 — El rol del grupo de control

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

### 3 — Variables dependientes

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

### 4 — Control de variables extrañas

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

### 5 — Proceso de diseño experimental

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

### 6 — El efecto de la luz en el crecimiento

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

### 7 — Identificación de la variable dependiente

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables"
  nivel: "basico"
  tags: ["variable_dependiente"]

variables:
  escenario: uno_de([["El tiempo de reacción ante un estímulo sonoro", "tiempo de reacción"], ["La cantidad de azúcar en una solución", "cantidad de azúcar"], ["La velocidad de un vehículo según su carga", "velocidad"]])

enunciado: "En el siguiente experimento: {escenario[0]}, la variable que el investigador mide para obtener sus resultados es la {escenario[1]}."

respuesta: "tiempo de reacción"
tipo: completar
respuestas_validas:
  - "tiempo de reacción"

explicacion: |
  La variable dependiente es siempre el efecto o la respuesta que se observa y se mide en el experimento.
```

### 8 — El propósito del grupo de control

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

### 9 — Control de variables extrañas

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

### 10 — Secuencia del proceso experimental

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

### 11 — Identificación de variables

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

### 12 — El rol del grupo de control

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

### 13 — Confusión entre variable y efecto

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

### 14 — Control de variables extrañas

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

### 15 — Secuencia lógica del diseño

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

### 16 — Variable Independiente vs. Dependiente

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

### 17 — El propósito del Grupo de Control

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_control"
  nivel: "intermedio"
  tags: ["control", "grupos"]

variables:
  escenarios: [["un fármaco nuevo", "un placebo"], ["un nuevo fertilizante", "un fertilizante estándar"]]
  dado: uno_de(escenarios)
  objetivo: "comparar el efecto del {dado[0]} contra un grupo de control para aislar la causa del cambio observado."

respuesta: "Asegurar que los cambios se deban a la variable independiente y no a factores externos"
tipo: "mc"
opciones_explicitas: ["Observar el comportamiento natural sin intervención", "Asegurar que los cambios se deban a la variable independiente y no a factores externos", "Aumentar el tamaño de la muestra para mayor validez", "Eliminar la necesidad de una variable dependiente"]

enunciado: "En un experimento que utiliza {dado[0]}, el grupo de control es fundamental porque su función principal es {objetivo}"

explicacion: |
  El grupo de control actúa como línea base. Sin él, no sabríamos si el cambio en la variable dependiente se debió a la manipulación o a factores ambientales/externos.
```

### 18 — Control de Variables Extrañas

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

### 19 — Diferencia entre Variable de Control y Variable Independiente

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

### 20 — Secuencia de Implementación Experimental

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

### 21 — El efecto del fertilizante

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

### 22 — Identificación de variables

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

opciones_explicitas: ["{escenarios[escenario_idx][1]}", "La nota del examen", "El tipo de planta", "El clima"]

respuesta: "{escenarios[escenario_idx][1]}"
tipo: mc

explicacion: |
  La variable independiente es la causa o el factor que el investigador cambia para observar qué sucede.
```

### 23 — El rol del grupo de control

```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables_y_control"
  nivel: "intermedio"
  tags: ["grupo_de_control"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Se prueba un nuevo fármaco contra el dolor de cabeza.", "placebo"], ["Se prueba un nuevo método de enseñanza de matemáticas.", "clase_tradicional"]]
  controles: [["placebo"], ["clase_tradicional"]]

enunciado: "Para validar que el efecto observado se debe al tratamiento y no a otros factores, es necesario comparar los resultados con un grupo de {controles[escenario_idx][0]}."

opciones_explicitas: ["{controles[escenario_idx][0]}", "observación", "reacción", "descarte"]

respuesta: "{controles[escenario_idx][0]}"
tipo: mc

explicacion: |
  El grupo de control sirve como línea base para comparar si los cambios en el grupo experimental son significativos.
```

### 24 — Control de variables extrañas

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

### 25 — Pasos del diseño experimental

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
