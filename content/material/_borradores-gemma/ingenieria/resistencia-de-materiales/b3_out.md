### 1 — Tensión vs Presión
```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["tension", "presion", "conceptos"]

respuesta: "tension"
tipo: mc
opciones_explicitas: ["tension", "presion", "esfuerzo_cortante", "deformacion"]

enunciado: "Aunque a menudo se usan como sinónimos en el lenguaje cotidiano, en ingeniería la fuerza interna distribuida perpendicularmente a un área interna de un cuerpo se denomina ___."

explicacion: |
  La presión se define como una fuerza externa aplicada sobre una superficie, mientras que la tensión (o esfuerzo normal) es la intensidad de las fuerzas internas que actúan en una sección transversal de un cuerpo debido a cargas externas.
```

### 2 — El triángulo y la estabilidad
```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["geometria", "estructuras", "triangulo"]

respuesta: verdadero
tipo: vf

enunciado: "Un cuadrilátero formado por barras articuladas es intrínsecamente rígido y no puede deformarse sin cambiar la longitud de sus lados, a diferencia de un triángulo."

explicacion: |
  El triángulo es la única forma geométrica que es unívocamente determinada por la longitud de sus tres lados (teorema de la existencia del triángulo), lo que lo hace la unidad básica de rigidez en estructuras de celosía.

```

### 3 — Compresión y deformación
```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["compresion", "deformacion"]

variables:
  escenario: uno_de([[100, "acortamiento"], [50, "acortamiento"]])

respuesta: escenario[1]
tipo: completar
respuestas_validas: ["acortamiento", "estiramiento", "torsion"]

enunciado: "Cuando un material está sometido exclusivamente a esfuerzos de compresión axial, el efecto principal esperado en su dimensión longitudinal es el ___."

explicacion: |
  La compresión implica fuerzas que tienden a "aplastar" el material, lo que resulta en una reducción de su longitud (acortamiento) y un aumento de su sección transversal (efecto Poisson).
```

### 4 — Cálculo de Esfuerzo Normal
```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["calculo", "tension_axial"]

variables:
  datos: [[1200, 0.02, 0.05], [800, 0.03, 0.04]]

respuesta: datos[0][0] / datos[0][1]

tipo: input
tolerancia_abs: 0.01

enunciado: "Se aplica una carga axial de 1200 N sobre una barra de sección transversal de 0.02 m². ¿Cuál es el valor del esfuerzo normal (en Pascales)?"

pasos:
  - "Identificar la carga (P = 1200 N)"
  - "Identificar el área (A = 0.02 m²)"
  - "Calcular el esfuerzo usando la fórmula σ = P / A"

explicacion: |
  El esfuerzo normal σ se calcula dividiendo la fuerza aplicada (N) por el área de la sección transversal (m²). En este caso: 1200 / 0.02 = 60000 Pa.
```

### 5 — Secuencia de análisis estructural
```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "avanzado"
  tags: ["metodologia", "analisis"]

respuesta: ["Carga", "Esfuerzo", "Deformación"]
tipo: ordenar
opciones_explicitas: ["Esfuerzo", "Deformación", "Carga", "Reacción"]

enunciado: "Ordene la secuencia lógica de causalidad en el análisis de resistencia de materiales, desde la acción externa hasta el efecto físico en el cuerpo."

explicacion: |
  Primero se aplica una Carga externa, la cual genera un Esfuerzo (tensión/compresión) interno en el material, lo que finalmente produce una Deformación (cambio de forma o tamaño).
```