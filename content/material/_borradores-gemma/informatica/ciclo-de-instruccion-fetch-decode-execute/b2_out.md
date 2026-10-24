### 1 — El ciclo de la CPU
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["cpu", "arquitectura", "ciclo_de_instruccion"]

respuesta: "fetch"
tipo: "mc"
opciones_explicitas: ["fetch", "decode", "execute", "writeback"]

enunciado: "En la primera etapa del ciclo de instrucción, la CPU debe obtener la siguiente instrucción de la memoria principal. ¿Cómo se llama este proceso?"

explicacion: |
  El ciclo comienza con el 'fetch' (búsqueda), donde el Program Counter (PC) indica la dirección de la instrucción en la memoria, la cual se carga en el IR (Instruction Register).
```

### 2 — Decodificación de instrucciones
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "intermedio"
  tags: ["decode", "control_unit"]

respuesta: [["es_falso", falso]]
tipo: "vf"

enunciado: "Durante la fase de 'decode', la Unidad de Control interpreta el código de operación (opcode) para determinar qué acción debe realizar la ALU. ¿Es esto verdadero o falso?"

explicacion: |
  Verdadero. La fase de decodificación traduce el bitstream de la instrucción en señales de control que activan las partes necesarias de la CPU.
```

### 3 — Orden lógico del ciclo
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["orden", "proceso"]

respuesta: ["fetch", "decode", "execute"]
tipo: "ordenar"
opciones_explicitas: ["fetch", "decode", "execute", "interrupt"]

enunciado: "Ordena las etapas fundamentales del ciclo de instrucción de una CPU en su secuencia lógica de ejecución."

explicacion: |
  El flujo estándar es: 1. Fetch (traer), 2. Decode (entender), 3. Execute (hacer).
```

### 4 — Cálculo de direcciones
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "avanzado"
  tags: ["pc", "direccionamiento"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["La instrucción actual está en 0x1000 y cada instrucción ocupa 4 bytes. La siguiente dirección será:", "0x1004"],
    ["La instrucción actual está en 0x2000 y cada instrucción ocupa 8 bytes. La siguiente dirección será:", "0x2008"]
  ]

respuesta: escenario[idx][1]
tipo: "completar"
respuestas_validas: ["0x1004", "0x2008"]

enunciado: "Considerando que el Program Counter (PC) se incrementa automáticamente para apuntar a la siguiente instrucción: {escenario[idx][0]}"

pasos:
  - "Identificar la dirección actual del PC."
  - "Sumar el tamaño de la instrucción actual al valor del PC."

explicacion: |
  El PC debe apuntar a la dirección de la próxima instrucción. Si la instrucción mide N bytes, la nueva dirección es PC + N.
```

### 5 — El resultado de la ejecución
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "intermedio"
  tags: ["alu", "execute"]

respuesta: "ALU"
tipo: "completar"
respuestas_validas: ["ALU", "CU", "RAM"]

enunciado: "En la fase de ejecución, si la instrucción es una suma aritmética, el componente encargado de realizar la operación matemática es la ___."

explicacion: |
  La ALU (Arithmetic Logic Unit) es el componente de la CPU que realiza todas las operaciones aritméticas (suma, resta) y lógicas (AND, OR).
```