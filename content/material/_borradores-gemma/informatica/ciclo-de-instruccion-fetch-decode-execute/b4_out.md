### 1 — El componente del Fetch
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["cpu", "arquitectura"]

enunciado: "Durante la fase de Fetch, la CPU debe obtener la instrucción desde la memoria principal. ¿Qué componente es el encargado de contener la dirección de la próxima instrucción a buscar?"

opciones_explicitas: ["Acumulador", "Contador de Programa (PC)", "Unidad de Control", "ALU"]
respuesta: "Contador de Programa (PC)"
tipo: "mc"

explicacion: |
  El Contador de Programa (PC) almacena la dirección de memoria de la siguiente instrucción que debe ser procesada, permitiendo que el ciclo de Fetch sea posible.
```

### 2 — El propósito del Decode
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["cpu", "decodificacion"]

enunciado: "La fase de Decode se distingue de la fase de Fetch en que su objetivo principal es ___ la instrucción para entender qué operación debe realizar la CPU."

respuestas_validas: ["interpretar", "traducir", "analizar"]
respuesta: "interpretar"
tipo: "completar"

explicacion: |
  Mientras que el Fetch solo trae los datos, el Decode interpreta el código de operación (opcode) para determinar qué debe hacer la Unidad de Control.
```

### 3 — Ejecución vs Decodificación
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "intermedio"
  tags: ["cpu", "ejecucion"]

variables:
  escenario: uno_de([
    ["La instrucción es una suma de dos registros", "ejecutar"],
    ["La instrucción es un salto a otra dirección", "ejecutar"],
    ["La instrucción es una carga de memoria", "ejecutar"]
  ])

enunciado: "En el ciclo de instrucción, la fase de Execute se diferencia de la de Decode porque en la primera la CPU realmente ___ la operación lógica o aritmética solicitada."

respuesta: escenario[1]
tipo: "vf"

explicacion: |
  La fase de ejecución es donde ocurre la acción real (operación matemática, movimiento de datos o salto), después de que la instrucción ya ha sido comprendida.
```

### 4 — Secuencia lógica del ciclo
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["cpu", "orden"]

enunciado: "Ordena las fases del ciclo de instrucción de una CPU desde el inicio del proceso hasta la realización de la tarea:"

opciones_explicitas: ["Fetch", "Decode", "Execute"]
respuesta: ["Fetch", "Decode", "Execute"]
tipo: "ordenar"

explicacion: |
  El ciclo es un proceso secuencial: primero se busca la instrucción (Fetch), luego se entiende (Decode) y finalmente se realiza (Execute).
```

### 5 — El rol de la ALU
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "intermedio"
  tags: ["cpu", "alu"]

enunciado: "¿Es correcto afirmar que la Unidad Aritmético-Lógica (ALU) actúa principalmente durante la fase de Decode?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: "vf"

explicacion: |
  La ALU actúa en la fase de Execute. En la fase de Decode, la Unidad de Control es la que determina qué componentes deben activarse.
```