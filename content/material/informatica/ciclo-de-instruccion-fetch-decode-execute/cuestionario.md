# Informatica — Ciclo de instruccion fetch decode execute (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El primer paso del ciclo

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["cpu", "arquitectura", "fetch"]

respuesta: "fetch"
tipo: completar
respuestas_validas:
  - "fetch"
  - "buscar"

enunciado: "La primera etapa del ciclo de instrucción, donde la CPU obtiene la siguiente instrucción de la memoria principal, se denomina ___."

explicacion: |
  El ciclo comienza con el 'fetch' (búsqueda), donde el contador de programa (PC) indica la dirección de la instrucción que debe ser cargada en el procesador.
```

### 2 — Decodificación de instrucciones

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["decode", "instruccion"]

respuesta: "decodificar"
tipo: mc
opciones_explicitas: ["ejecutar", "decodificar", "almacenar", "leer"]

enunciado: "Una vez que la instrucción ha sido cargada en el procesador, la unidad de control debe interpretar qué operación se debe realizar. Este proceso se conoce como:"

explicacion: |
  La etapa de 'decode' (decodificación) traduce la instrucción binaria en señales de control para que los componentes internos sepan qué hacer.
```

### 3 — Orden del ciclo de instrucción

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["orden", "ciclo"]

respuesta_orden: ["fetch", "decode", "execute"]
tipo: ordenar
opciones_explicitas: ["execute", "fetch", "decode"]

enunciado: "Ordena las fases del ciclo de instrucción de la CPU desde que se solicita la instrucción hasta que se completa la operación:"

explicacion: |
  El flujo lógico es siempre: 1. Buscar (Fetch), 2. Decodificar (Decode) y 3. Ejecutar (Execute).
```

### 4 — La fase de ejecución

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["execute", "alua"]

respuesta: falso
tipo: vf

enunciado: "¿La fase de 'execute' (ejecución) consiste únicamente en mover datos de la memoria a los registros sin realizar operaciones aritméticas?"

explicacion: |
  Falso. En la fase de ejecución, la ALU (Unidad Aritmético Lógica) puede realizar cálculos, comparaciones y otras operaciones lógicas fundamentales.
```

### 5 — El rol de la Unidad de Control

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "intermedio"
  tags: ["control", "decodificar"]

variables:
  idx: uno_de([0, 1])
  escenario: [["la decodificación es responsabilidad de la ALU", "la decodificación es responsabilidad de la Unidad de Control"], ["la ejecución es responsabilidad de la Unidad de Control", "la ejecución es responsabilidad de la ALU"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["la decodificación es responsabilidad de la ALU", "la decodificación es responsabilidad de la Unidad de Control", "la ejecución es responsabilidad de la Unidad de Control", "la ejecución es responsabilidad de la ALU"]

enunciado: "Dependiendo del componente, identifica la afirmación correcta sobre la arquitectura de Von Neumann:"

explicacion: |
  La Unidad de Control se encarga de decodificar la instrucción, mientras que la ALU se encarga de la ejecución de operaciones aritméticas y lógicas.
```

### 6 — El ciclo de la CPU

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

### 7 — Decodificación de instrucciones

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "intermedio"
  tags: ["decode", "control_unit"]

respuesta: verdadero
tipo: "vf"

enunciado: "Durante la fase de 'decode', la Unidad de Control interpreta el código de operación (opcode) para determinar qué acción debe realizar la ALU. ¿Es esto verdadero o falso?"

explicacion: |
  Verdadero. La fase de decodificación traduce el bitstream de la instrucción en señales de control que activan las partes necesarias de la CPU.
```

### 8 — Orden lógico del ciclo

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["orden", "proceso"]

tipo: ordenar
opciones_explicitas: ["fetch", "decode", "execute"]
respuesta_orden: ["fetch", "decode", "execute"]

enunciado: "Ordena las etapas fundamentales del ciclo de instrucción de una CPU en su secuencia lógica de ejecución."

explicacion: |
  El flujo estándar es: 1. Fetch (traer), 2. Decode (entender), 3. Execute (hacer).
```

### 9 — Cálculo de direcciones

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "avanzado"
  tags: ["pc", "direccionamiento"]

variables:
  idx: uno_de([0, 1])
  escenario: [["La instrucción actual está en 0x1000 y cada instrucción ocupa 4 bytes. La siguiente dirección será:", "0x1004"], ["La instrucción actual está en 0x2000 y cada instrucción ocupa 8 bytes. La siguiente dirección será:", "0x2008"]]

respuesta: escenario[idx][1]
tipo: "completar"
respuestas_validas:
  - "0x1004"
  - "0x2008"

enunciado: "Considerando que el Program Counter (PC) se incrementa automáticamente para apuntar a la siguiente instrucción: {escenario[idx][0]}"

pasos:
  - "Identificar la dirección actual del PC."
  - "Sumar el tamaño de la instrucción actual al valor del PC."

explicacion: |
  El PC debe apuntar a la dirección de la próxima instrucción. Si la instrucción mide N bytes, la nueva dirección es PC + N.
```

### 10 — El resultado de la ejecución

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "intermedio"
  tags: ["alu", "execute"]

respuesta: "ALU"
tipo: "completar"
respuestas_validas:
  - "ALU"

enunciado: "En la fase de ejecución, si la instrucción es una suma aritmética, el componente encargado de realizar la operación matemática es la ___."

explicacion: |
  La ALU (Arithmetic Logic Unit) es el componente de la CPU que realiza todas las operaciones aritméticas (suma, resta) y lógicas (AND, OR).
```

### 11 — El orden del ciclo de instrucción

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["arquitectura", "cpu", "ciclo_instruccion"]

tipo: ordenar
opciones_explicitas: ["Fetch (Buscar)", "Decode (Decodificar)", "Execute (Ejecutar)", "Write-back (Escritura)"]
respuesta_orden: ["Fetch (Buscar)", "Decode (Decodificar)", "Execute (Ejecutar)", "Write-back (Escritura)"]

enunciado: "Para que un procesador procese una instrucción de forma correcta, debe seguir una secuencia lógica de etapas. Ordena las siguientes fases del ciclo de instrucción:"

explicacion: |
  El ciclo de instrucción debe seguir un orden estrictamente secuencial: primero se busca la instrucción en memoria (Fetch), luego se interpreta qué debe hacer (Decode), se realiza la operación (Execute) y, finalmente, se guardan los resultados (Write-back).
```

### 12 — La etapa de Decodificación

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "intermedio"
  tags: ["decode", "control", "cpu"]

tipo: mc
opciones_explicitas: ["Traer la instrucción desde la memoria RAM a la CPU", "Interpretar el código de operación para entender qué tarea realizar", "Realizar operaciones aritméticas en la ALU", "Escribir el resultado en un registro o memoria"]
respuesta: "Interpretar el código de operación para entender qué tarea realizar"
enunciado: "Un error común es confundir el 'Fetch' con el 'Decode'. ¿Cuál es la función principal de la etapa de Decodificación (Decode)?"
explicacion: |
  En la etapa de decodificación, la Unidad de Control interpreta el código de operación (opcode) de la instrucción para determinar qué señales de control deben activarse para la siguiente etapa.
```

### 13 — El rol de la ALU

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["alu", "execute", "operaciones"]

tipo: vf
respuesta: falso

enunciado: "Verdadero o Falso: La etapa de 'Execute' (Ejecución) es la encargada de buscar la instrucción en la memoria principal."

explicacion: |
  Falso. La búsqueda en memoria corresponde a la etapa de 'Fetch'. La etapa de 'Execute' es donde se lleva a cabo la operación lógica o aritmética propiamente dicha.
```

### 14 — Dependencias de datos en el ciclo

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "avanzado"
  tags: ["pipeline", "hazard", "data_dependency"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Instrucción A: SUMAR R1, R2", "Instrucción B: SUBTRACT R1, R3"], ["Instrucción A: LOAD R1, [1000]", "Instrucción B: ADD R1, R2"]]
  problema: ["R1", "R1"]

enunciado: "En un procesador con pipeline, si la segunda instrucción requiere el resultado de la primera (como en el caso de {datos[escenario_idx][0]} y {datos[escenario_idx][1]}), se produce un conflicto de dependencia sobre el registro {problema[escenario_idx]}. ¿Cómo se llama este problema?"

opciones_explicitas: ["Data Hazard", "Control Hazard", "Structural Hazard", "Memory Leak"]
respuesta: "Data Hazard"
tipo: mc

explicacion: |
  Se produce un 'Data Hazard' (conflicto de datos) cuando una instrucción depende del resultado de una instrucción anterior que aún no ha terminado de escribir su valor en el registro o memoria.
```

### 15 — El contenido del PC

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "intermedio"
  tags: ["pc", "program_counter", "fetch"]

tipo: completar
respuestas_validas:
  - "Program Counter"
  - "Contador de Programa"
  - "PC"
respuesta: "Program Counter"

enunciado: "Durante la etapa de Fetch, el procesador utiliza un registro especial para saber cuál es la dirección de memoria de la próxima instrucción a buscar. Este registro se denomina ___."

explicacion: |
  El Program Counter (PC) o Contador de Programa contiene la dirección de la próxima instrucción a ser ejecutada. Al finalizar el fetch, el PC se incrementa para apuntar a la siguiente dirección.
```

### 16 — El componente del Fetch

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

### 17 — El propósito del Decode

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["cpu", "decodificacion"]

enunciado: "La fase de Decode se distingue de la fase de Fetch en que su objetivo principal es ___ la instrucción para entender qué operación debe realizar la CPU."

respuestas_validas:
  - "interpretar"
  - "traducir"
  - "analizar"
respuesta: "interpretar"
tipo: "completar"

explicacion: |
  Mientras que el Fetch solo trae los datos, el Decode interpreta el código de operación (opcode) para determinar qué debe hacer la Unidad de Control.
```

### 18 — Ejecución vs Decodificación

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "intermedio"
  tags: ["cpu", "ejecucion"]

enunciado: "En el ciclo de instrucción, la fase de Execute se diferencia de la de Decode porque en la primera la CPU realmente ejecuta la operación lógica o aritmética solicitada."

respuesta: verdadero
tipo: "vf"

explicacion: |
  La fase de ejecución es donde ocurre la acción real (operación matemática, movimiento de datos o salto), después de que la instrucción ya ha sido comprendida.
```

### 19 — Secuencia lógica del ciclo

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["cpu", "orden"]

enunciado: "Ordena las fases del ciclo de instrucción de una CPU desde el inicio del proceso hasta la realización de la tarea:"

opciones_explicitas: ["Fetch", "Decode", "Execute"]
respuesta_orden: ["Fetch", "Decode", "Execute"]
tipo: "ordenar"

explicacion: |
  El ciclo es un proceso secuencial: primero se busca la instrucción (Fetch), luego se entiende (Decode) y finalmente se realiza (Execute).
```

### 20 — El rol de la ALU

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "intermedio"
  tags: ["cpu", "alu"]

enunciado: "¿Es correcto afirmar que la Unidad Aritmético-Lógica (ALU) actúa principalmente durante la fase de Decode?"

respuesta: falso
tipo: vf

explicacion: |
  La ALU actúa en la fase de Execute. En la fase de Decode, la Unidad de Control es la que determina qué componentes deben activarse.
```

### 21 — Identificación de la fase de Fetch

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["cpu", "arquitectura"]

variables:
  datos: [["La CPU lee la dirección de memoria contenida en el PC", "fetch"], ["La ALU realiza una suma de dos registros", "execute"], ["La unidad de control interpreta el código de operación", "decode"]]
  idx: uno_de([0, 1, 2])

enunciado: "En el ciclo de instrucción, cuando la unidad de control accede a la memoria principal para traer la siguiente instrucción basándose en el Program Counter, se está realizando la fase de: ___"

respuestas_validas:
  - "fetch"
  - "decode"
  - "execute"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La fase de Fetch (búsqueda) es el proceso mediante el cual la CPU obtiene la instrucción desde la memoria RAM utilizando la dirección apuntada por el PC.
```

### 22 — El rol de la Unidad de Control

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "intermedio"
  tags: ["control", "decode"]

enunciado: "¿Cuál es la función principal de la fase de 'Decode' (Decodificación) en el ciclo de instrucción?"

opciones_explicitas: ["Traducir la instrucción en señales de control para los componentes de la CPU", "Escribir el resultado de una operación en la memoria RAM", "Actualizar el contador de programa con la siguiente dirección", "Realizar operaciones aritméticas y lógicas"]

respuesta: "Traducir la instrucción en señales de control para los componentes de la CPU"
tipo: mc

explicacion: |
  En la fase de decodificación, la unidad de control interpreta el código de operación (opcode) para entender qué acción debe realizar la CPU.
```

### 23 — Veracidad del ciclo de ejecución

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["logica"]

enunciado: "Durante la fase de 'Execute', la ALU (Unidad Aritmético Lógica) es la encargada de realizar las operaciones matemáticas o lógicas indicadas por la instrucción. (Verdadero/Falso)"

opciones_explicitas: ["verdadero", "falso"]

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La fase de ejecución es donde se lleva a cabo la operación real, utilizando la ALU para cálculos o transferencias de datos.
```

### 24 — Secuencia del ciclo de instrucción

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["orden", "ciclo"]

enunciado: "Ordene las fases del ciclo de instrucción de una CPU en el orden cronológico correcto:"

opciones_explicitas: ["Fetch", "Decode", "Execute", "Write-back"]

respuesta_orden: ["Fetch", "Decode", "Execute", "Write-back"]
tipo: ordenar

explicacion: |
  El ciclo estándar sigue el flujo: buscar la instrucción (Fetch), entender qué significa (Decode), realizar la tarea (Execute) y, opcionalmente, guardar el resultado (Write-back).
```

### 25 — Análisis de un escenario de error

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "avanzado"
  tags: ["debug", "memoria"]

enunciado: "Se detecta que la CPU ha recibido un código de operación (opcode) que no corresponde a ninguna instrucción válida en su conjunto de instrucciones. ¿En qué fase del ciclo ha ocurrido el fallo?"

opciones_explicitas: ["Fetch", "Decode", "Execute"]

respuesta: "Decode"
tipo: mc

explicacion: |
  Si el código de la instrucción es inválido, el error se identifica en la fase de decodificación, ya que la unidad de control no puede interpretar el patrón de bits recibido.
```
