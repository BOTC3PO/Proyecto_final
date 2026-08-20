# Ingenieria — Resistencia de materiales (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Tensión

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["tension", "esfuerzo", "definicion"]

respuesta: "fuerza / area"
tipo: completar
respuestas_validas:
  - "fuerza / area"
  - "fuerza / área"
  - "F/A"
  - "F/A"

enunciado: "La tensión (o esfuerzo) se define matemáticamente como la relación entre la ___ aplicada sobre una sección transversal y el ___ de dicha sección."

explicacion: |
  La tensión ($\sigma$ o $\tau$) es la intensidad de las fuerzas internas que actúan en un cuerpo, definida como la fuerza aplicada dividida por el área de la sección que la soporta.
```

### 2 — Tipos de carga

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["compresion", "tension", "carga"]

variables:
  escenario: uno_de([["un pistón que empuja un bloque", "compresión"], ["un cable de acero que sostiene una lámpara", "tensión"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["compresión", "tensión", "cizalladura", "torsión"]

enunciado: "En el caso de {escenario[0]}, el material está sometido principalmente a un esfuerzo de ___."

explicacion: |
  La compresión ocurre cuando las fuerzas actúan hacia el interior del cuerpo (acortándolo), mientras que la tensión ocurre cuando las fuerzas actúan hacia afuera (estirándolo).
```

### 3 — Rigidez estructural

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["geometria", "rigidez", "triangulo"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es el triángulo la forma geométrica más rígida en estructuras debido a que sus ángulos no pueden cambiar sin que cambien las longitudes de sus lados?"

explicacion: |
  A diferencia de un cuadrilátero, que puede deformarse en un paralelogramo manteniendo sus lados iguales, un triángulo es indeformable si sus lados son rígidos.
```

### 4 — Elementos de una armadura

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["armadura", "nodos", "barras"]

respuesta_orden: ["Nodos", "Barras", "Cargas"]
tipo: ordenar

opciones_explicitas: ["Nodos", "Barras", "Cargas"]

enunciado: "Ordene los componentes de una armadura estructural desde el punto de unión hasta el elemento que transmite la fuerza:"

pasos:
  - "Punto de intersección de elementos"
  - "Elemento lineal que une los puntos"
  - "Fuerza externa aplicada"

explicacion: |
  En una armadura, las cargas se aplican en los nodos, las cuales se transmiten a través de las barras (elementos) como fuerzas axiales.
```

### 5 — Relación Tensión-Área

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["calculo", "tension", "area"]

variables:
  datos: uno_de([[100, 20], [50, 10], [200, 50]])

respuesta: datos[0] / datos[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una barra soporta una fuerza de {datos[0]} N y tiene un área de sección transversal de {datos[1]} mm², ¿cuál es el valor de la tensión en MPa?"

pasos:
  - "Identificar la fuerza aplicada (F)"
  - "Identificar el área de la sección (A)"
  - "Dividir F / A para obtener la tensión"

explicacion: |
  La tensión se calcula dividiendo la fuerza entre el área. En este caso, al usar Newtons y mm², el resultado se expresa directamente en Megapascales (MPa).
```

### 6 — Tensión normal en un perno

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["tension", "esfuerzo", "calculo"]

variables:
  fuerza: 5000
  area: 25

respuesta: fuerza / area
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un perno de acero de sección transversal de {area} mm² está sujeto a una fuerza de tracción axial de {fuerza} N. Calcule la tensión normal ($\\sigma$) en MPa."

pasos:
  - "Identificar la fuerza aplicada: $F = 5000$ N"
  - "Identificar el área de la sección: $A = 25$ mm²"
  - "Aplicar la fórmula de tensión: $\\sigma = F / A$"

explicacion: |
  La tensión normal se define como la fuerza aplicada dividida por el área de la sección transversal: $\sigma = F / A$.
  En este caso: $5000 / 25 = 200$ MPa.
```

### 7 — Compresión y deformación

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["compresion", "esfuerzo"]

variables:
  esfuerzo: 150
  area: 100

respuesta: verdadero
tipo: vf

enunciado: "Si un elemento estructural está sometido a una carga que tiende a reducir su longitud, estamos ante un caso de {esfuerzo} MPa de compresión. ¿Es esto un esfuerzo de compresión?"

explicacion: |
  Correcto. La compresión es el esfuerzo que actúa de forma perpendicular a la sección transversal y tiende a acortar el elemento.
```

### 8 — Estabilidad de la forma triangular

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["geometria", "estructuras"]

respuesta: "Triángulo"
tipo: mc
opciones_explicitas: ["Cuadrilátero", "Triángulo", "Pentágono"]

enunciado: "En el diseño de cerchas (trusses), se utiliza la geometría del triángulo porque es la única forma geométrica que es intrínsecamente rígida, es decir, sus ángulos no cambian sin que cambien las longitudes de sus lados."

explicacion: |
  El triángulo es la unidad básica de las estructuras rígidas porque sus propiedades geométricas están determinadas únicamente por la longitud de sus tres lados.
```

### 9 — Pasos para calcular la tensión

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["metodologia", "calculo"]

variables:
  pasos_correctos: ["Identificar carga", "Calcular área", "Dividir carga por área"]

respuesta_orden: ["Identificar carga", "Calcular área", "Dividir carga por área"]
tipo: ordenar
opciones_explicitas: ["Dividir carga por área", "Identificar carga", "Calcular área"]

enunciado: "Ordene los pasos lógicos para determinar la tensión axial en una barra:"

explicacion: |
  Para resolver problemas de resistencia, primero se deben conocer las fuerzas (carga), luego la geometría (área) y finalmente aplicar la relación matemática.
```

### 10 — Relación entre carga y tensión

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["relacion", "tension"]

variables:
  fuerza: 1000
  area: 50
  tension_calculada: 20

respuesta: "20"
tipo: completar
respuestas_validas:
  - "20"

enunciado: "Si duplicamos la carga aplicada a una barra manteniendo su área constante, la tensión resultante será el ___ de la tensión original."

explicacion: |
  Como la tensión $\sigma = F / A$ es directamente proporcional a la fuerza, si la fuerza se duplica, la tensión también se duplica.
  En este ejemplo: $1000 / 50 = 20$.
```

### 11 — Tensión vs Presión

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

### 12 — El triángulo y la estabilidad

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

### 13 — Compresión y deformación

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
respuestas_validas:
  - "acortamiento"
  - "estiramiento"
  - "torsion"

enunciado: "Cuando un material está sometido exclusivamente a esfuerzos de compresión axial, el efecto principal esperado en su dimensión longitudinal es el ___."

explicacion: |
  La compresión implica fuerzas que tienden a "aplastar" el material, lo que resulta en una reducción de su longitud (acortamiento) y un aumento de su sección transversal (efecto Poisson).
```

### 14 — Cálculo de Esfuerzo Normal

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["calculo", "tension_axial"]

variables:
  datos: [[1200, 0.02, 0.05], [800, 0.03, 0.04]]

respuesta: datos[0][0] / datos[0][1]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Se aplica una carga axial de 1200 N sobre una barra de sección transversal de 0.02 m². ¿Cuál es el valor del esfuerzo normal (en Pascales)?"

pasos:
  - "Identificar la carga (P = 1200 N)"
  - "Identificar el área (A = 0.02 m²)"
  - "Calcular el esfuerzo usando la fórmula σ = P / A"

explicacion: |
  El esfuerzo normal σ se calcula dividiendo la fuerza aplicada (N) por el área de la sección transversal (m²). En este caso: 1200 / 0.02 = 60000 Pa.
```

### 15 — Secuencia de análisis estructural

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "avanzado"
  tags: ["metodologia", "analisis"]

respuesta_orden: ["Carga", "Esfuerzo", "Deformación"]
tipo: ordenar
opciones_explicitas: ["Esfuerzo", "Deformación", "Carga"]

enunciado: "Ordene la secuencia lógica de causalidad en el análisis de resistencia de materiales, desde la acción externa hasta el efecto físico en el cuerpo."

explicacion: |
  Primero se aplica una Carga externa, la cual genera un Esfuerzo (tensión/compresión) interno en el material, lo que finalmente produce una Deformación (cambio de forma o tamaño).
```

### 16 — Tensión vs Esfuerzo

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["tension", "esfuerzo", "conceptos"]

variables:
  es_distinguido: verdadero

respuesta: es_distinguido
tipo: completar
enunciado: "En ingeniería, la tensión se define como la fuerza interna por unidad de área, mientras que el concepto de esfuerzo suele referirse a la carga aplicada externamente sobre una sección transversal. ¿Es esta distinción conceptualmente válida para diferenciar la respuesta interna del material de la carga externa?"

explicacion: |
  La tensión es una propiedad interna que surge como respuesta a una carga aplicada (esfuerzo externo). Aunque a menudo se usan como sinónimos, la distinción es fundamental para el análisis de estados de carga.
```

### 17 — Compresión vs Tracción

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["compresion", "traccion", "esfuerzos"]

variables:
  caso: uno_de([[1, "acortar"], [2, "alargar"], [3, "cortar"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["acortar", "alargar", "cortar"]

enunciado: "Si sometemos un cilindro de acero a un esfuerzo de compresión pura, el efecto principal sobre su geometría longitudinal será ___."

pasos:
  - "Identificar el sentido de la fuerza aplicada."
  - "Determinar si la fuerza tiende a expandir o contraer el material."

explicacion: |
  La compresión es un esfuerzo que tiende a reducir las dimensiones de un cuerpo, mientras que la tracción busca incrementarlas.
```

### 18 — Rigidez del Triángulo

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["geometria", "estructuras", "triangulo"]

variables:
  forma: uno_de(["cuadrado", "triangulo"])

respuesta: forma
tipo: mc
opciones_explicitas: ["cuadrado", "triangulo"]

enunciado: "Comparando un cuadrilátero con un triángulo, ¿cuál de estas formas es intrínsecamente rígida porque sus ángulos no pueden cambiar sin variar la longitud de sus lados?"

explicacion: |
  El triángulo es la única forma geométrica simple que es indeformable (rígida) por sí misma, ya que sus tres lados definen unívocamente su forma. Un cuadrilátero puede colapsar (deformarse) manteniendo sus lados constantes.
```

### 19 — Orden de formación de esfuerzos

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["proceso", "carga"]

respuesta_orden: ["Aplicación de carga externa", "Generación de esfuerzos internos", "Deformación del elemento"]
tipo: ordenar
opciones_explicitas: ["Aplicación de carga externa", "Generación de esfuerzos internos", "Deformación del elemento"]

enunciado: "Ordene cronológicamente los eventos que ocurren en un elemento estructural bajo carga:"

explicacion: |
  Primero se aplica la carga, esto genera tensiones internas en el material para resistirla, y finalmente, si el material no es infinitamente rígido, se produce la deformación.
```

### 20 — Tensión de Corte vs Normal

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "avanzado"
  tags: ["tensión_corte", "tensión_normal"]

variables:
  tipo_t: uno_de([[0, "paralela"], [1, "perpendicular"]])

respuesta: tipo_t[1]
tipo: completar
opciones_explicitas: ["paralela", "perpendicular"]

enunciado: "Mientras que la tensión normal actúa de forma perpendicular a la sección transversal, la tensión de corte actúa de forma ___ a la misma."

explicacion: |
  La distinción fundamental radica en la orientación del vector de fuerza respecto al plano de la sección: perpendicular para la normal y paralela para la de corte (o tangencial).
```

### 21 — Tensión en un cable de soporte

```
metadata:
  materia: "ingenieria"
  tema: "tension_axial"
  nivel: "basico"
  tags: ["tension", "esfuerzo", "ingenieria"]

variables:
  datos: [[5000, 0.01], [8000, 0.02], [12000, 0.015]]
  idx: uno_de([0, 1, 2])
  fuerza: datos[idx][0]
  area: datos[idx][1]
  esfuerzo: fuerza / area

respuesta: esfuerzo
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un cable de acero soporta una carga axial de {fuerza} N. Si su sección transversal es de {area} m², ¿cuál es el esfuerzo axial (tensión) en Pa?"

explicacion: |
  El esfuerzo axial ($\sigma$) se calcula como la fuerza aplicada dividida por el área de la sección transversal: $\sigma = F / A$.
```

### 22 — Compresión en un pilar

```
metadata:
  materia: "ingenieria"
  tema: "compresion_axial"
  nivel: "basico"
  tags: ["compresion", "esfuerzo"]

variables:
  escenario: [[15000, "compresion"], [20000, "compresion"]]
  idx: uno_de([0, 1])
  fuerza: escenario[idx][0]
  tipo_esfuerzo: escenario[idx][1]

respuesta: tipo_esfuerzo
tipo: mc
opciones_explicitas: ["tension", "compresion", "cizalladura"]

enunciado: "Si una carga de {fuerza} N actúa sobre un pilar reduciendo su longitud, el tipo de esfuerzo predominante es..."

explicacion: |
  Cuando las fuerzas actúan hacia el interior del cuerpo, tendiendo a acortarlo, el esfuerzo se denomina compresión.
```

### 23 — Rigidez del triángulo

```
metadata:
  materia: "ingenieria"
  tema: "geometria_estructural"
  nivel: "intermedio"
  tags: ["triangulo", "rigidez", "estructuras"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es el triángulo una forma geométrica intrínsecamente rígida, ya que sus tres lados definen una única forma sin necesidad de uniones articuladas para mantener su geometría?"

explicacion: |
  A diferencia de un cuadrilátero, que puede deformarse en un paralelogramo manteniendo la longitud de sus lados, un triángulo es rígido porque sus ángulos están fijados por la longitud de sus lados.
```

### 24 — Componentes de la estructura

```
metadata:
  materia: "ingenieria"
  tema: "geometria_estructural"
  nivel: "basico"
  tags: ["triangulo", "elementos"]

respuesta_orden: ["Vértice", "Vértice", "Vértice"]
tipo: ordenar
opciones_explicitas: ["Vértice", "Vértice", "Vértice"]

enunciado: "Ordene los elementos de un triángulo según su jerarquía de construcción (puntos de unión, líneas de conexión, espacio interno):"

pasos:
  - "Identificar los puntos de unión (nodos)."
  - "Identificar las líneas que los unen (barras)."
  - "Identificar el área encerrada (superficie)."

explicacion: |
  En el análisis de estructuras tipo truss (celosías), primero definimos los nodos (vértices), luego los elementos (barras) y finalmente el área resultante.
```

### 25 — Análisis de deformación

```
metadata:
  materia: "ingenieria"
  tema: "deformacion_axial"
  nivel: "intermedio"
  tags: ["deformacion", "ley_de_hooke"]

variables:
  casos: [[0.005, "elongacion"], [0.002, "elongacion"]]
  idx: uno_de([0, 1])
  deformacion: casos[idx][0]
  tipo_deformacion: casos[idx][1]

respuesta: tipo_deformacion
tipo: completar

respuestas_validas:
  - "elongacion"

enunciado: "Si un material experimenta una deformación unitaria de {deformacion}, el fenómeno físico observado es una ___."

explicacion: |
  La deformación unitaria ($\epsilon$) positiva indica un aumento en la longitud del elemento, lo que se conoce como elongación.
```
