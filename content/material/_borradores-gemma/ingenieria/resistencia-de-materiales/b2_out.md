### 1 — Tensión normal en un perno
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
tipo: input
tolerancia_abs: 0.1

enunciado: "Un perno de acero de sección transversal de {area} mm² está sujeto a una fuerza de tracción axial de {fuerza} N. Calcule la tensión normal ($\sigma$) en MPa."

pasos:
  - "Identificar la fuerza aplicada: $F = 5000$ N"
  - "Identificar el área de la sección: $A = 25$ mm²"
  - "Aplicar la fórmula de tensión: $\sigma = F / A$"

explicacion: |
  La tensión normal se define como la fuerza aplicada dividida por el área de la sección transversal: $\sigma = F / A$.
  En este caso: $5000 / 25 = 200$ MPa.
```

### 2 — Compresión y deformación
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

### 3 — Estabilidad de la forma triangular
```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["geometria", "estructuras"]

variables:
  opciones: ["Cuadrilátero", "Triángulo", "Pentágono"]

respuesta: "Triángulo"
tipo: mc
opciones_explicitas: ["Cuadrilátero", "Triángulo", "Pentágono"]

enunciado: "En el diseño de cerchas (trusses), se utiliza la geometría del {uno_de(opciones)} porque es la única forma geométrica que es intrínsecamente rígida, es decir, sus ángulos no cambian sin que cambien las longitudes de sus lados."

explicacion: |
  El triángulo es la unidad básica de las estructuras rígidas porque sus propiedades geométricas están determinadas únicamente por la longitud de sus tres lados.
```

### 4 — Pasos para calcular la tensión
```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["metodologia", "calculo"]

variables:
  pasos_correctos: ["Identificar carga", "Calcular área", "Dividir carga por área"]

respuesta: ["Identificar carga", "Calcular área", "Dividir carga por área"]
tipo: ordenar
opciones_explicitas: ["Dividir carga por área", "Identificar carga", "Calcular área"]

enunciado: "Ordene los pasos lógicos para determinar la tensión axial en una barra:"

explicacion: |
  Para resolver problemas de resistencia, primero se deben conocer las fuerzas (carga), luego la geometría (área) y finalmente aplicar la relación matemática.
```

### 5 — Relación entre carga y tensión
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
respuestas_validas: ["20"]

enunciado: "Si duplicamos la carga aplicada a una barra manteniendo su área constante, la tensión resultante será el ___ de la tensión original."

explicacion: |
  Como la tensión $\sigma = F / A$ es directamente proporcional a la fuerza, si la fuerza se duplica, la tensión también se duplica.
  En este ejemplo: $1000 / 50 = 20$.
```