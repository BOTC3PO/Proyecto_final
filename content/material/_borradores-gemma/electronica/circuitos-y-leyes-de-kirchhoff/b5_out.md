### 1 — Ley de Corrientes en un Nodo
```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["nodos", "kirchhoff", "corriente"]

variables:
  escenario: uno_de([[10.0, 5.0, 5.0], [12.0, 7.0, 5.0], [8.0, 4.0, 4.0]])
  idx: uno_de([0, 1, 2])
  i_entrada: escenario[idx][0]
  i_salida_1: escenario[idx][1]
  i_salida_2: escenario[idx][2]

respuesta: i_entrada - i_salida_1 - i_salida_2
tipo: input
tolerancia_abs: 0.01

enunciado: "En un nodo de un circuito, una corriente de entrada de {i_entrada} A se divide en dos ramas. Si la rama 1 tiene una corriente de {i_salida_1} A, ¿cuál es el valor de la corriente en la rama 2 en Amperios?"

pasos:
  - "Identificar la corriente total que entra al nodo: {i_entrada} A."
  - "Aplicar la Ley de Corrientes de Kirchhoff: Suma de corrientes que entran = Suma de corrientes que salen."
  - "Calcular: i_salida_2 = i_entrada - i_salida_1."

explicacion: |
  Según la Ley de Corrientes de Kirchhoff (LCC), la suma algebraica de las corrientes en un nodo es cero. Por lo tanto, la corriente que entra debe ser igual a la suma de las que salen: {i_entrada} = {i_salida_1} + {i_salida_2}.
```

### 2 — Ley de Tensiones en una Malla
```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["mallas", "kirchhoff", "tension"]

variables:
  malla: uno_de([[12.0, 4.0, 8.0], [24.0, 10.0, 14.0], [5.0, 2.0, 3.0]])
  idx: uno_de([0, 1, 2])
  v_fuente: malla[idx][0]
  v_r1: malla[idx][1]
  v_r2: malla[idx][2]

respuesta: v_fuente - v_r1 - v_r2
tipo: input
tolerancia_abs: 0.01

enunciado: "En una malla simple con una fuente de tensión de {v_fuente} V y dos resistencias en serie que presentan caídas de tensión de {v_r1} V y {v_r2} V respectivamente, ¿cuál es la tensión residual en el componente restante para que se cumpla la Ley de Tensiones de Kirchhoff?"

pasos:
  - "La suma de tensiones en una malla cerrada debe ser cero."
  - "V_fuente - V_r1 - V_r2 - V_restante = 0."

explicacion: |
  La Ley de Tensiones de Kirchhoff (LTK) establece que la suma de todas las caídas y subidas de potencial en un lazo cerrado es igual a cero. En este caso: {v_fuente} - {v_r1} - {v_r2} = 0.
```

### 3 — Análisis de Nodos (Verdadero o Falso)
```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["teoria", "nodos"]

respuesta: verdadero
tipo: vf

enunciado: "Si en un nodo entran 5A por una rama y salen 3A por otra, la Ley de Corrientes de Kirchhoff dicta que debe salir 2A por una tercera rama para mantener el equilibrio."

explicacion: |
  Verdadero. La suma de corrientes entrantes (5A) debe ser igual a la suma de las salientes (3A + 2A = 5A).
```

### 4 — Identificación de Corrientes
```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["mc", "nodos"]

variables:
  datos: uno_de([[5.0, 2.0], [10.0, 3.0], [15.0, 7.0]])
  idx: uno_de([0, 1, 2])
  i_total: datos[idx][0]
  i_conocida: datos[idx][1]

respuesta: i_total - i_conocida
tipo: mc

opciones_explicitas: ["5.0 A", "7.0 A", "10.0 A", "12.0 A"]

enunciado: "Un nodo recibe una corriente total de {i_total} A. Si una de las ramas de salida tiene una corriente de {i_conocida} A, ¿cuál es el valor de la corriente en la otra rama de salida?"

explicacion: |
  Aplicando la LCC: I_total = I_salida_1 + I_salida_2. Por lo tanto, I_salida_2 = {i_total} - {i_conocida}.
```

### 5 — Procedimiento de Análisis de Malla
```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "avanzado"
  tags: ["ordenar", "metodo"]

opciones_explicitas: ["1. Identificar las mallas del circuito", "2. Asignar corrientes de malla a cada lazo", "3. Aplicar la LTK en cada malla", "4. Resolver el sistema de ecuaciones resultante"]

respuesta: ["1. Identificar las mallas del circuito", "2. Asignar corrientes de malla a cada lazo", "3. Aplicar la LTK en cada malla", "4. Resolver el sistema de ecuaciones resultante"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un circuito complejo utilizando el método de mallas (Ley de Tensiones de Kirchhoff):"

explicacion: |
  El método de mallas requiere primero definir las mallas, luego asignar variables (corrientes), aplicar la ley de tensiones para obtener ecuaciones y finalmente resolver el sistema matemático.
```