### 1 — El efecto del fertilizante
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

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas: ["altura", "velocidad"]

explicacion: |
  La variable dependiente es el efecto o resultado que se observa y se mide en el experimento.
```

### 2 — Identificación de variables
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

respuesta: escenarios[escenario_idx][0]
tipo: mc

explicacion: |
  La variable independiente es la causa o el factor que el investigador cambia para observar qué sucede.
```

### 3 — El rol del grupo de control
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

respuesta: controles[escenario_idx][0]
tipo: mc

explicacion: |
  El grupo de control sirve como línea base para comparar si los cambios en el grupo experimental son significativos.
```

### 4 — Control de variables extrañas
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

### 5 — Pasos del diseño experimental
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