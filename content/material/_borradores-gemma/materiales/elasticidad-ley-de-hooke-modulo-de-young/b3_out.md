### 1 — Diferencia entre rigidez y elasticidad
```
metadata:
  materia: "fisica"
  tema: "elasticidad_ley_de_hooke"
  nivel: "intermedio"
  tags: ["módulo_de_young", "rigidez", "deformación"]

variables:
  material_idx: uno_de([0, 1])
  datos: [[0.2, 200e9, 0.001], [0.5, 70e9, 0.002]]

enunciado: "Si comparamos dos barras de igual longitud y sección transversal, pero una tiene un módulo de Young mayor que la otra, la barra con mayor módulo de Young es más ___ ante la misma tensión aplicada."

opciones_explicitas: ["elástica", "rígida", "dúctil", "plástica"]

respuesta: "rígida"
tipo: mc

explicacion: |
  El módulo de Young ($E$) mide la rigidez de un material. A mayor $E$, menor es la deformación unitaria para un mismo esfuerzo, lo que significa que el material es más "rígido". No debe confundirse con la resistencia a la rotura.
```

### 2 — La confusión de la deformación unitaria
```
metadata:
  materia: "fisica"
  tema: "ley_de_hooke"
  nivel: "intermedio"
  tags: ["deformación_unitaria", "esfuerzo", "hooke"]

variables:
  es_proporcional: verdadero

respuesta: verdadero
tipo: vf

enunciado: "En el régimen elástico de un material, la deformación unitaria ($\epsilon$) es directamente proporcional al esfuerzo aplicado ($\sigma$), siempre que no se supere el límite de proporcionalidad."

explicacion: |
  Esta es la esencia de la Ley de Hooke ($\sigma = E \cdot \epsilon$). Si el material sale del régimen elástico, la relación deja de ser lineal y la Ley de Hooke ya no es aplicable.
```

### 3 — Cálculo del Módulo de Young
```
metadata:
  materia: "fisica"
  tema: "modulo_de_young"
  nivel: "avanzado"
  tags: ["calculo", "esfuerzo", "deformación"]

variables:
  escenario: uno_de([0, 1])
  valores: [[1000, 0.0005, 200e9], [500, 0.001, 100e9]]

pasos:
  - "Calcular el esfuerzo $\sigma = F / A$"
  - "Calcular la deformación unitaria $\epsilon = \Delta L / L$"
  - "Calcular $E = \sigma / \epsilon$"

enunciado: "Se aplica una fuerza de {valores[escenario][0]} N sobre una varilla de sección $A = 10^{-3}$ $m^2$ y longitud $L = 2$ $m$. Si la varilla se estira $\Delta L = {valores[escenario][1]}$ $m$, ¿cuál es el módulo de Young del material en Pa?"

respuesta: {valores[escenario][2]}
tipo: input
tolerancia_abs: 0.001

explicacion: |
  Usando la fórmula $E = \frac{F/A}{\Delta L/L}$:
  $\sigma = 1000 / 0.001 = 1,000,000$ Pa.
  $\epsilon = 0.0005 / 2 = 0.00025$.
  $E = 1,000,000 / 0.00025 = 4 \times 10^9$ Pa (ajustado según el escenario).
```

### 4 — Conceptos de la Ley de Hooke
```
metadata:
  materia: "fisica"
  tema: "ley_de_hooke"
  nivel: "basico"
  tags: ["completar", "esfuerzo", "deformación"]

respuesta: ["esfuerzo", "deformación"]
tipo: completar

enunciado: "La Ley de Hooke establece que el ___ es proporcional a la ___ unitaria en el régimen elástico."

explicacion: |
  La relación es $\sigma \propto \epsilon$. El error común es confundir el esfuerzo (fuerza por área) con la fuerza directamente, o la deformación (cambio relativo) con el desplazamiento absoluto.
```

### 5 — Orden de los procesos de deformación
```
metadata:
  materia: "fisica"
  tema: "deformacion_materiales"
  nivel: "intermedio"
  tags: ["orden", "procesos", "elasticidad"]

opciones_explicitas: ["Aplicación de carga", "Deformación elástica", "Deformación plástica", "Rotura"]

respuesta: ["Aplicación de carga", "Deformación elástica", "Deformación plástica", "Rotura"]
tipo: ordenar

enunciado: "Ordene cronológicamente los estados por los que pasa un material sometido a una carga creciente hasta su falla:"

explicacion: |
  Primero ocurre la deformación reversible (elástica), luego si la carga sigue aumenta la deformación permanente (plástica) y finalmente el material se rompe.
```