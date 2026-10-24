### 1 — Ley de Hooke: Fuerza y Deformación
```
metadata:
  materia: "fisica"
  tema: "ley_de_hooke"
  nivel: "basico"
  tags: ["elasticidad", "fuerza", "deformacion"]

variables:
  k: 250.0

enunciado: "Un resorte ideal tiene una constante elástica de {k} N/m. Si se le aplica una fuerza de 50 N, ¿cuál es la deformación (estiramiento) que experimenta el resorte?"

pasos:
  - "Identificar la fuerza aplicada (F = 50 N)."
  - "Identificar la constante elástica (k = 250 N/m)."
  - "Aplicar la Ley de Hooke: F = k * Δx, lo que implica Δx = F / k."
  - "Calcular: Δx = 50 / 250 = 0.2 metros."

respuesta: 0.2
tipo: input
tolerancia_abs: 0.01

explicacion: |
  La Ley de Hooke establece que la fuerza aplicada es proporcional a la deformación: F = k * Δx. 
  Despejando la deformación: Δx = 50 N / 250 N/m = 0.2 m.
```

### 2 — Módulo de Young: Concepto de Rigidez
```
metadata:
  materia: "fisica"
  tema: "modulo_de_young"
  nivel: "intermedio"
  tags: ["rigidez", "materiales", "tension"]

opciones_explicitas: ["Es una medida de la resistencia de un material a la deformación elástica.", "Es una medida de la masa por unidad de volumen.", "Es la fuerza aplicada sobre un área específica."]

respuesta: "Es una medida de la resistencia de un material a la deformación elástica."
tipo: mc

enunciado: "El Módulo de Young (E) se define como la relación entre la tensión y la deformación unitaria en el régimen elástico. ¿Qué representa físicamente este valor?"

explicacion: |
  El Módulo de Young cuantifica la rigidez de un material sólido. Un valor más alto indica que el material es más rígido y requiere más esfuerzo para deformarse elásticamente.
```

### 3 — Relación Tensión-Deformación
```
metadata:
  materia: "fisica"
  tema: "diagrama_esfuerzo_deformacion"
  nivel: "intermedio"
  tags: ["tension", "deformacion", "elasticidad"]

variables:
  es_elastico: verdadero

enunciado: "Si un material se somete a una carga y, al retirar dicha carga, recupera su forma original sin deformaciones permanentes, se dice que el material se ha comportado de forma {es_elastico}."

respuesta: verdadero
tipo: vf

explicacion: |
  La característica principal de la deformación elástica es la capacidad de recuperación total de la geometría original una vez eliminada la fuerza externa.
```

### 4 — Cálculo de Esfuerzo (Tensión)
```
metadata:
  materia: "fisica"
  tema: "tension_mecanica"
  nivel: "intermedio"
  tags: ["esfuerzo", "area", "tension"]

variables:
  datos: [[100.0, 0.01], [200.0, 0.02], [50.0, 0.005]]
  idx: uno_de([0,1,2])

enunciado: "Se aplica una fuerza de {datos[idx][0]} N sobre una barra con una sección transversal de {datos[idx][1]} m². ¿Cuál es el valor del esfuerzo mecánico (tensión) en Pascales (Pa)?"

pasos:
  - "Calcular el esfuerzo usando la fórmula: σ = F / A."
  - "Sustituir los valores: σ = {datos[idx][0]} / {datos[idx][1]}."

respuesta: datos[idx][1] # Error en lógica de pensamiento, corregido abajo:
# La respuesta debe ser el resultado del cálculo:
# Para idx=0: 100 / 0.01 = 10000
# Para idx=1: 200 / 0.02 = 10000
# Para idx=2: 50 / 0.005 = 10000
# Como el resultado es constante en este ejemplo para simplificar:
# (En un caso real usaríamos la expresión matemática si el DSL lo permitiera, 
# pero como la respuesta debe ser el valor exacto del sorteo, calculamos:
# Si idx=0, respuesta=10000.0; Si idx=1, respuesta=10000.0; Si idx=2, respuesta=10000.0)

# Re-ajuste para cumplir reglas de respuesta:
# Usaremos una tabla de respuestas para asegurar el match exacto con el sorteo.

respuesta: tabla_respuestas[idx][1]
tipo: input
tolerancia_abs: 0.01

variables:
  tabla_respuestas: [[10000.0, 10000.0], [10000.0, 10000.0], [10000.0, 10000.0]]

explicacion: |
  El esfuerzo (σ) se calcula dividiendo la fuerza entre el área de la sección transversal: σ = F / A.
```

### 5 — Proceso de Deformación Elástica
```
metadata:
  materia: "fisica"
  tema: "proceso_deformacion"
  nivel: "basico"
  tags: ["ordenar", "pasos", "carga"]

opciones_explicitas: ["Se aplica una carga externa al material.", "El material experimenta una deformación elástica.", "Se retira la carga y el material recupera su forma."]

respuesta: ["Se aplica una carga externa al material.", "El material experimenta una deformación elástica.", "Se retira la carga y el material recupera su forma."]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos que describen un ciclo de carga y descarga en un material dentro de su límite elástico:"

explicacion: |
  Para que exista un ciclo elástico completo, primero debe aplicarse la fuerza, luego ocurrir la deformación proporcional y finalmente la recuperación tras retirar la carga.
```