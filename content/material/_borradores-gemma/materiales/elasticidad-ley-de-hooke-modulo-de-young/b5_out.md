### 1 — Cálculo del módulo de Young
```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_modulo_young"
  nivel: "intermedio"
  tags: ["elasticidad", "fisica", "materiales"]

variables:
  escenario: uno_de([[10, 0.001, 200e9, 0.005], [15, 0.002, 150e9, 0.004], [20, 0.001, 100e9, 0.002]])
  F: escenario[0]
  delta_L: escenario[1]
  E: escenario[2]
  L: escenario[3]

respuesta: (F / delta_L) / (E * L) * L
tipo: input
tolerancia_abs: 1e-6

enunciado: "Un material tiene una longitud inicial de {L} m. Al aplicarle una fuerza de {F} N, su longitud aumenta {delta_L} m. ¿Cuál es el módulo de Young (E) del material en Pa?"

pasos:
  - "Calcular la tensión (stress): σ = F / A. Como no se da el área, usamos la forma deformación: σ = E * ε"
  - "La deformación unitaria es ε = ΔL / L"
  - "Despejamos E de la fórmula: E = (F / ΔL) / (A / L) -> En este caso, para obtener E directamente con los datos: E = (F * L) / (ΔL * A). Si asumimos que el dato proporcionado es la relación para el cálculo directo: E = (F / ΔL) / (L / (L * (ΔL/L))) -> Simplificado: E = (F * L) / (ΔL * A). Dado que el problema pide el módulo y relaciona F, ΔL, L y E, la fórmula es E = (F / ΔL) / (A/L). Si el área no se da, el enunciado implica el cálculo de la relación de rigidez: E = (F * L) / (ΔL * A). Asumiendo un área unitaria de 1 m² para el cálculo del módulo si no se especifica, o que el usuario debe despejar de la relación dada."
  - "Nota: Para este ejercicio, asuma un área de sección transversal de 1 m² para el cálculo del módulo de Young."

explicacion: |
  El módulo de Young se define como el esfuerzo dividido por la deformación unitaria: E = σ / ε.
  Donde σ = F / A y ε = ΔL / L.
  Si A = 1 m², entonces E = (F / ΔL) / (1 / L) = (F * L) / ΔL.
```

### 2 — Concepto de deformación elástica
```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_modulo_young"
  nivel: "basico"
  tags: ["conceptos", "elasticidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si un material se encuentra dentro de su límite elástico, al retirar la carga aplicada, este recuperará su forma original."
```

### 3 — Relación entre fuerza y deformación
```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_modulo_young"
  nivel: "basico"
  tags: ["ley_de_hooke", "proporcionalidad"]

variables:
  datos: [[10, "aumenta"], [20, "aumenta"], [30, "aumenta"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["disminuye", "aumenta", "se mantiene constante", "se vuelve negativo"]

enunciado: "De acuerdo con la Ley de Hooke, si aplicamos una fuerza mayor sobre un resorte (dentro de su zona elástica), la deformación de este ___."

explicacion: |
  La Ley de Hooke establece que la fuerza es directamente proporcional a la deformación (F = k * Δx).
```

### 4 — Unidades del Módulo de Young
```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_modulo_young"
  nivel: "basico"
  tags: ["unidades", "estudios"]

respuesta: "Pascales"
tipo: completar

opciones_explicitas: ["Pascales", "Newtons", "Metros", "Kilogramos"]

enunciado: "El módulo de Young, que mide la rigidez de un material, se expresa en unidades de ___."

explicacion: |
  Dado que el módulo de Young es la relación entre esfuerzo (N/m²) y deformación (adimensional), su unidad es el Pascal (Pa).
```

### 5 — Secuencia de estados de un material
```
metadata:
  materia: "materiales"
  tema: "ley_de_hooke_modulo_young"
  nivel: "intermedio"
  tags: ["deformación", "plasticidad"]

respuesta: ["Deformación elástica", "Límite elástico", "Deformación plástica", "Punto de rotura"]
tipo: ordenar

opciones_explicitas: ["Deformación elástica", "Límite elástico", "Deformación plástica", "Punto de rotura"]

enunciado: "Ordene los estados de deformación de un material desde que se aplica una carga mínima hasta que falla completamente:"

explicacion: |
  1. Deformación elástica: El material vuelve a su forma original.
  2. Límite elástico: El punto máximo antes de que la deformación sea permanente.
  3. Deformación plástica: El material sufre cambios permanentes.
  4. Punto de rotura: El material falla y se separa.
```