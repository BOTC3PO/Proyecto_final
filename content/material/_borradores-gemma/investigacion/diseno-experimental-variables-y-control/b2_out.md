### 1 — El efecto de la luz en el crecimiento
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

### 2 — Identificación de la variable dependiente
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

### 3 — El propósito del grupo de control
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

### 4 — Control de variables extrañas
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

### 5 — Secuencia del proceso experimental
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