### 1 — El ciclo de instrucción
```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "basico"
  tags: ["cpu", "ciclo_instruccion", "uc"]

variables:
  paso_uc: uno_de(["buscar", "decodificar", "ejecutar"])

respuesta: paso_uc
tipo: mc
opciones_explicitas: ["buscar", "decodificar", "ejecutar"]

enunciado: "Durante el ciclo de instrucción, la Unidad de Control (UC) realiza una serie de pasos. Si la CPU acaba de obtener la instrucción desde la memoria principal, el siguiente paso que debe realizar la UC es ___."

explicacion: |
  El ciclo de instrucción sigue un orden lógico: 1. Buscar (Fetch) la instrucción en memoria, 2. Decodificar (Decode) para entender qué operación es, y 3. Ejecutar (Execute) la operación.
```

### 2 — Operación lógica en la ALU
```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "intermedio"
  tags: ["alu", "logica", "operaciones"]

variables:
  op_tipo: uno_de([0, 1])

respuesta: tabla[op_tipo][1]
tipo: completar
tabla: [["AND", "AND"], ["OR", "OR"]]
respuestas_validas: ["AND", "OR"]

enunciado: "La ALU es responsable de las operaciones aritméticas y lógicas. Si la CPU necesita verificar si dos valores binarios cumplen con la condición de que ambos sean 1, la ALU debe utilizar la operación lógica ___."

explicacion: |
  La operación AND (Y) devuelve verdadero solo si ambos operandos son verdaderos (1). Si se buscara que al menos uno sea 1, se usaría OR.
```

### 3 — Componentes de la CPU
```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "basico"
  tags: ["componentes", "uc", "alu"]

respuesta: falso
tipo: vf

enunciado: "La Unidad Aritmético-Lógica (ALU) es el componente encargado de coordinar el flujo de datos entre la memoria y los registros, enviando señales de control a los demás componentes."

explicacion: |
  Falso. La descripción corresponde a la Unidad de Control (UC). La ALU es la encargada de realizar los cálculos matemáticos y las comparaciones lógicas.
```

### 4 — Flujo de datos en una suma
```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "intermedio"
  tags: ["flujo_datos", "ordenar", "cpu"]

opciones_explicitas: ["La UC busca la instrucción de suma en memoria", "La ALU realiza la suma de los valores", "La UC decodifica la instrucción de suma", "El resultado se escribe en un registro o memoria"]

respuesta: ["La UC busca la instrucción de suma en memoria", "La UC decodifica la instrucción de suma", "La ALU realiza la suma de los valores", "El resultado se escribe en un registro o memoria"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que ocurren en la CPU cuando se ejecuta una instrucción de suma de dos números:"

explicacion: |
  Primero se debe obtener la instrucción (Fetch), luego interpretarla (Decode), procesar el cálculo (Execute en la ALU) y finalmente guardar el resultado (Write-back).
```

### 5 — El papel de la Unidad de Control
```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "basico"
  tags: ["uc", "control"]

variables:
  escenario: uno_de([0, 1])

respuesta: tabla[escenario][1]
tipo: completar
tabla: [["controlar", "controlar"], ["calcular", "calcular"]]
respuestas_validas: ["controlar", "calcular"]

enunciado: "Si comparamos las funciones de los dos componentes principales de la CPU: la ALU se encarga de ___ los datos, mientras que la Unidad de Control se encarga de ___ el flujo de ejecución."

explicacion: |
  La ALU es el "músculo" que realiza los cálculos (calcular), mientras que la UC es el "cerebro" que dirige el tráfico de información (controlar).
```