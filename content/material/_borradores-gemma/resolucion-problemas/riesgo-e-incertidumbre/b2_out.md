### 1 — Concepto fundamental
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["conceptos", "probabilidad"]

respuesta: falso
tipo: vf

enunciado: "En un escenario de incertidumbre, el decisor conoce exactamente la distribución de probabilidades de todos los resultados posibles."

explicacion: |
  La incertidumbre implica la falta de información sobre la probabilidad de los eventos. Si las probabilidades son conocidas, estamos ante un escenario de riesgo.
```

### 2 — Identificación de escenarios
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["clasificacion", "escenarios"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Lanzar un dado cargado donde se sabe que el 6 sale el 50% de las veces.", "riesgo"],
    ["Lanzar un dado mágico en una dimensión desconocida donde no se sabe cómo caen los números.", "incertidumbre"]
  ]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["riesgo", "incertidumbre"]

enunciado: "Analice el siguiente caso: {datos[escenario_idx][0]}. Esto representa un escenario de ___."

explicacion: |
  En el primer caso, la probabilidad está definida (50%), por lo tanto es riesgo. En el segundo, la falta de información sobre la mecánica del dado implica incertidumbre.
```

### 3 — El cálculo del riesgo
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["calculo", "esperanza"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    [100, 0.2, 500],
    [200, 0.5, 100]
  ]
  # caso[0]: valor_a, prob, valor_b
  # caso[1]: valor_a, prob, valor_b

respuesta: casos[caso_idx][0] * casos[caso_idx][1] + casos[caso_idx][2] * (1 - casos[caso_idx][1])
tipo: input
tolerancia_abs: 0.01

enunciado: "Un inversor enfrenta un riesgo conocido. Hay un {caso_idx == 0 ? '20%' : '50%'} de ganar ${caso_idx == 0 ? '500' : '100'} y un resto de perder ${caso_idx == 0 ? '100' : '200'}. Calcule el valor esperado (riesgo)."

pasos:
  - "Identificar la probabilidad del evento favorable y su valor."
  - "Identificar la probabilidad del evento desfavorable (1 - p) y su valor."
  - "Multiplicar cada valor por su probabilidad y sumar los resultados."

explicacion: |
  El valor esperado es la suma de los productos de cada resultado por su probabilidad: (P1 * V1) + (P2 * V2).
```

### 4 — Diferencia de información
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["completar"]

respuesta: tabla[0][1]
tipo: completar
respuestas_validas: ["riesgo", "incertidumbre"]

variables:
  tabla: [
    ["Conocemos las probabilidades de los resultados", "riesgo"],
    ["No conocemos las probabilidades de los resultados", "incertidumbre"]
  ]

enunciado: "Si un gestor de proyectos puede asignar probabilidades a los retrasos, está operando bajo un escenario de ___, pero si el impacto de una crisis global es totalmente impredecible, está ante la ___."

explicacion: |
  La distinción clave es la disponibilidad de información sobre la distribución de probabilidad.
```

### 5 — Procesos de decisión
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "avanzado"
  tags: ["ordenar", "metodologia"]

respuesta: ["Recopilar datos históricos", "Estimar probabilidades", "Calcular valor esperado", "Tomar decisión"]
tipo: ordenar
opciones_explicitas: ["Recopilar datos históricos", "Estimar probabilidades", "Calcular valor esperado", "Tomar decisión", "Ignorar el azar"]

enunciado: "Ordene los pasos lógicos para transformar un escenario de incertidumbre en uno de riesgo y poder decidir:"

explicacion: |
  Para reducir la incertidumbre, primero se busca información (datos), luego se modela la probabilidad, se aplica el cálculo matemático y finalmente se elige la opción óptima.
```