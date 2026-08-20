### 1 — Diferencia entre Caudal y Velocidad
```
metadata:
  materia: "fisica"
  tema: "caudal_v_a"
  nivel: "basico"
  tags: ["caudal", "velocidad", "seccion"]

respuesta: "velocidad"
tipo: "mc"
opciones_explicitas: ["caudal", "velocidad", "presion", "densidad"]

enunciado: "Mientras que el caudal representa el volumen de fluido que pasa por una sección en un tiempo determinado, la ___ representa la rapidez con la que se desplaza el fluido por dicha sección."

explicacion: |
  El caudal ($Q$) es una medida de volumen por unidad de tiempo ($m^3/s$), mientras que la velocidad ($v$) es la distancia recorrida por el fluido por unidad de tiempo ($m/s$).
```

### 2 — Relación entre Área y Velocidad
```
metadata:
  materia: "fisica"
  tema: "caudal_v_a"
  nivel: "intermedio"
  tags: ["caudal", "seccion", "velocidad"]

variables:
  escenario: uno_de([
    ["0.05", "2.0"],
    ["0.10", "1.0"],
    ["0.20", "0.5"]
  ])

respuesta: escenario[1]
tipo: "input"
tolerancia_abs: 0.01

enunciado: "Un fluido circula por una tubería con un caudal constante de $Q = 0.1\ m^3/s$. Si el área de la sección transversal es de $A = {escenario[0]}\ m^2$, ¿cuál es la velocidad $v$ del fluido en $m/s$?"

pasos:
  - "Identificar la fórmula del caudal: $Q = A \cdot v$"
  - "Despejar la velocidad: $v = Q / A$"
  - "Sustituir los valores: $v = 0.1 / {escenario[0]}$"

explicacion: |
  Usando la fórmula $Q = A \cdot v$, despejamos $v = Q / A$. Con $Q = 0.1$ y $A = {escenario[0]}$, el resultado es ${escenario[1]}\ m/s$.
```

### 3 — Caudal vs. Flujo Másico
```
metadata:
  materia: "fisica"
  tema: "caudal_v_a"
  nivel: "intermedio"
  tags: ["caudal_volumetrico", "flujo_masico", "densidad"]

respuesta: verdadero

tipo: "vf"

enunciado: "Si un fluido tiene la misma densidad en dos puntos de una tubería, pero el área de la sección transversal disminuye, el caudal volumétrico $Q$ debe aumentar para mantener la continuidad si la velocidad se mantiene constante. (Nota: Evaluar si la afirmación sobre la relación entre $Q$, $A$ y $v$ es correcta bajo la premisa de $Q=A \cdot v$)."

explicacion: |
  La afirmación es falsa en su lógica de comparación: si el área disminuye y el caudal $Q$ es constante (como en un fluido incompresible), la velocidad debe aumentar, no el caudal. El caudal es la constante en este escenario de continuidad.
```

### 4 — Componentes del Caudal
```
metadata:
  materia: "fisica"
  tema: "caudal_v_a"
  nivel: "basico"
  tags: ["caudal", "componentes"]

respuesta: ["sección transversal", "velocidad media"]
tipo: "ordenar"
opciones_explicitas: ["sección transversal", "velocidad media", "presión estática", "densidad del fluido"]

enunciado: "Para calcular el caudal volumétrico en un conducto, se requiere conocer el orden de magnitud de los siguientes dos parámetros físicos:"

explicacion: |
  El caudal volumétrico $Q$ se define estrictamente como el producto del área de la sección transversal ($A$) por la velocidad media del fluido ($v$).
```

### 5 — Dependencia de la Densidad
```
metadata:
  materia: "fisica"
  tema: "caudal_v_a"
  nivel: "avanzado"
  tags: ["caudal", "densidad", "flujo_masico"]

variables:
  datos: uno_de([
    [1000, 0.5],
    [800, 0.5],
    [1200, 0.5]
  ])

respuesta: "el mismo"
tipo: "mc"
opciones_explicitas: ["mayor", "menor", "el mismo", "indeterminado"]

enunciado: "Si tenemos dos fluidos distintos (uno con densidad $\rho_1 = {datos[0]}\ kg/m^3$ y otro $\rho_2 = {datos[1]}\ kg/m^3$) que pasan por una misma tubería con la misma velocidad $v = 2\ m/s$ y la misma sección $A = 0.1\ m^2$, ¿cómo se comparan sus caudales volumétricos $Q$?"

explicacion: |
  El caudal volumétrico $Q = A \cdot v$ depende únicamente de la geometría de la sección y la velocidad del fluido. La densidad afecta al flujo másico ($\dot{m} = \rho \cdot Q$), pero no al caudal volumétrico. Por lo tanto, los caudales son iguales.
```