### 1 — El ciclo de instrucción
```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "cpu"]

variables:
  escenario: uno_de([["La CPU debe sumar dos números almacenados en registros", "ALU"], ["La CPU debe decidir si un número es mayor que otro", "ALU"], ["La CPU debe buscar la siguiente instrucción en la memoria", "UC"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["ALU", "UC", "Memoria RAM"]

enunciado: "En un procesador, cuando se requiere realizar una operación de comparación entre dos valores, ¿qué componente es el encargado de ejecutar dicha lógica?: {escenario[idx][0]}"

explicacion: |
  La Unidad de Control (UC) dirige el flujo de datos, mientras que la Unidad Aritmético-Lógica (ALU) es la encargada de realizar las operaciones matemáticas y de comparación.
```

### 2 — Componentes de la CPU
```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["componentes"]

respuesta: verdadero
tipo: vf

enunciado: "La Unidad de Control (UC) es la encargada de decodificar las instrucciones y coordinar las actividades de los demás componentes de la CPU."

explicacion: |
  Correcto. La UC actúa como el "cerebro" que interpreta las instrucciones y envía señales de control para que la ALU y la memoria operen correctamente.
```

### 3 — El flujo de datos
```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["ciclo_instruccion"]

variables:
  pasos_orden: [["Fetch (Captación)", "Decode (Decodificación)", "Execute (Ejecución)"]]
  idx: 0

respuesta: pasos_orden[idx]
tipo: ordenar

opciones_explicitas: ["Fetch (Captación)", "Decode (Decodificación)", "Execute (Ejecución)"]

enunciado: "Ordena las etapas lógicas que sigue una instrucción dentro de la CPU para ser procesada:"

explicacion: |
  El ciclo básico de una instrucción consiste en buscarla en memoria (Fetch), entender qué debe hacer (Decode) y realizar la operación (Execute).
```

### 4 — Operaciones lógicas
```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["alu"]

variables:
  caso: uno_de([["Calcular el producto de 5 * 5", "5 * 5"], ["Determinar si 10 es igual a 10", "10 == 10"]])
  idx: uno_de([0,1])

respuesta: caso[idx][1]
tipo: completar

enunciado: "Si la ALU recibe la instrucción para procesar la operación de {caso[idx][0]}, el resultado de dicha operación es: ___"

respuestas_validas: ["5 * 5", "10 == 10"]

explicacion: |
  La ALU maneja tanto operaciones aritméticas (como la multiplicación) como operaciones lógicas (como la igualdad).
```

### 5 — El rol de la Unidad de Control
```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["uc"]

variables:
  escenario: uno_de([["La CPU debe leer un dato de la memoria para llevarlo al registro A", "UC"], ["La CPU debe calcular la raíz cuadrada de 144", "ALU"]])
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["UC", "ALU"]

enunciado: "Considerando el siguiente escenario: '{escenario[idx][0]}'. ¿Qué componente es el responsable de coordinar el movimiento de datos entre la memoria y el registro?: {escenario[idx][0]}"

explicacion: |
  El movimiento de datos y la coordinación de señales entre componentes es la función principal de la Unidad de Control (UC).
```