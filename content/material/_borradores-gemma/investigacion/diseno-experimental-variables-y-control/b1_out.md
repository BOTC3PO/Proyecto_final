### 1 — Identificación de variables
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

respuesta: ["Identificar la variable independiente", "Establecer un grupo de control", "Manipular la variable independiente", "Medir la variable dependiente"]
tipo: ordenar

explicacion: |
  Primero se define qué se va a cambiar (independiente), luego se prepara el escenario de comparación (control), se aplica el estímulo y finalmente se recolectan los datos (dependiente).
```