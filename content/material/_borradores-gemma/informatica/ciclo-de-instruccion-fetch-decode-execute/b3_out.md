### 1 — El orden del ciclo de instrucción
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["arquitectura", "cpu", "ciclo_instruccion"]

tipo: ordenar
opciones_explicitas: ["Fetch (Buscar)", "Decode (Decodificar)", "Execute (Ejecutar)", "Write-back (Escritura)"]
respuesta: ["Fetch (Buscar)", "Decode (Decodificar)", "Execute (Ejecutar)", "Write-back (Escritura)"]

enunciado: "Para que un procesador procese una instrucción de forma correcta, debe seguir una secuencia lógica de etapas. Ordena las siguientes fases del ciclo de instrucción:"

explicacion: |
  El ciclo de instrucción debe seguir un orden estrictamente secuencial: primero se busca la instrucción en memoria (Fetch), luego se interpreta qué debe hacer (Decode), se realiza la operación (Execute) y, finalmente, se guardan los resultados (Write-back).
```

### 2 — La etapa de Decodificación
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "intermedio"
  tags: ["decode", "control", "cpu"]

tipo: mc
opciones_explicitas: ["Traer la instrucción desde la memoria RAM a la CPU", "Interpretar el código de operación para entender qué tarea realizar", "Realizar operaciones aritméticas en la ALU", "Escribir el resultado en un registro o memoria"]

enunciado: "Un error común es confundir el 'Fetch' con el 'Decode'. ¿Cuál es la función principal de la etapa de Decodificación (Decode)?"

explicacion: |
  En la etapa de decodificación, la Unidad de Control interpreta el código de operación (opcode) de la instrucción para determinar qué señales de control deben activarse para la siguiente etapa.
```

### 3 — El rol de la ALU
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

### 4 — Dependencias de datos en el ciclo
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "avanzado"
  tags: ["pipeline", "hazard", "data_dependency"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Instrucción A: SUMAR R1, R2", "Instrucción B: SUBTRACT R1, R3"],
    ["Instrucción A: LOAD R1, [1000]", "Instrucción B: ADD R1, R2"]
  ]
  problema: [
    "R1",
    "R1"
  ]

enunciado: "En un procesador con pipeline, si la segunda instrucción requiere el resultado de la primera (como en el caso de {datos[escenario_idx][0]} y {datos[escenario_idx][1]}), se produce un conflicto de dependencia sobre el registro {datos[escenario_idx][1]}. ¿Cómo se llama este problema?"

opciones_explicitas: ["Data Hazard", "Control Hazard", "Structural Hazard", "Memory Leak"]
respuesta: "Data Hazard"

explicacion: |
  Se produce un 'Data Hazard' (conflicto de datos) cuando una instrucción depende del resultado de una instrucción anterior que aún no ha terminado de escribir su valor en el registro o memoria.
```

### 5 — El contenido del PC
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "intermedio"
  tags: ["pc", "program_counter", "fetch"]

tipo: completar
respuestas_validas: ["Program Counter", "Contador de Programa", "PC"]
respuesta: "Program Counter"

enunciado: "Durante la etapa de Fetch, el procesador utiliza un registro especial para saber cuál es la dirección de memoria de la próxima instrucción a buscar. Este registro se denomina ___."

explicacion: |
  El Program Counter (PC) o Contador de Programa contiene la dirección de la próxima instrucción a ser ejecutada. Al finalizar el fetch, el PC se incrementa para apuntar a la siguiente dirección.
```