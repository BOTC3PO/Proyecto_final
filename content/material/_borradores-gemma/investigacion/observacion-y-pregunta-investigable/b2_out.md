### 1 — De la curiosidad a la pregunta
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

### 2 — Identificación de variables
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

### 3 — ¿Es investigable?
```
metadata:
  materia: "investigacion"
  tema: "observacion_y_pregunta_investigable"
  nivel: "intermedio"
  tags: ["criterios", "validez"]

enunciado: "Analiza la siguiente pregunta de investigación: '¿Por qué los gatos prefieren el color azul sobre el rojo?'. ¿Es esta una pregunta científicamente investigable mediante experimentación directa?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: vf

explicacion: |
  Las preferencias subjetivas (sentimientos o gustos) no son directamente medibles de forma objetiva sin una metodología de observación de comportamiento muy específica; las preguntas sobre 'por qué' suelen ser demasiado amplias para un experimento simple.
```

### 4 — Pasos para formular la pregunta
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

### 5 — Estructura de la pregunta
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