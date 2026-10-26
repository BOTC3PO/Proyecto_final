### 1 — Concepto de Tensión
```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["tension", "esfuerzo", "definicion"]

respuesta: "fuerza / area"
tipo: completar
respuestas_validas: ["fuerza / area", "fuerza / área", "F/A", "F/A"]

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

respuesta: ["Nodos", "Barras", "Cargas"]
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
  datos: [[100, 20], [50, 10], [200, 50]]

respuesta: datos[idx][0] / datos[idx][1]
tipo: input
tolerancia_abs: 0.01

enunciado: "Si una barra soporta una fuerza de {datos[idx][0]} N y tiene un área de sección transversal de {datos[idx][1]} mm², ¿cuál es el valor de la tensión en MPa?"

pasos:
  - "Identificar la fuerza aplicada (F)"
  - "Identificar el área de la sección (A)"
  - "Dividir F / A para obtener la tensión"

explicacion: |
  La tensión se calcula dividiendo la fuerza entre el área. En este caso, al usar Newtons y mm², el resultado se expresa directamente en Megapascales (MPa).
```