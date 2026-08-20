### 1 — Identificación de variables
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

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["fertilizante", "temperatura", "crecimiento", "velocidad_disolucion", "el agua"]

enunciado: "En el experimento: '{escenarios[escenario_idx][0]}', la variable independiente es la ___."

explicacion: |
  La variable independiente es el factor que el investigador manipula deliberadamente para observar sus efectos. En el primer caso es el fertilizante; en el segundo, la temperatura.
```

### 2 — El rol del grupo de control
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

### 3 — Confusión entre variable y efecto
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

### 4 — Control de variables extrañas
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

respuesta: casos[caso_idx][0]
tipo: mc
opciones_explicitas: ["café", "luz solar", "el fármaco", "el dolor de cabeza"]

enunciado: "En el siguiente escenario, ¿cuál es la variable extraña que no está siendo controlada y que podría invalidar el experimento? '{casos[caso_idx][0]}'"

explicacion: |
  Las variables extrañas son factores no controlados que pueden influir en la variable dependiente, creando una falsa sensación de causalidad (confusión de variables).
```

### 5 — Secuencia lógica del diseño
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