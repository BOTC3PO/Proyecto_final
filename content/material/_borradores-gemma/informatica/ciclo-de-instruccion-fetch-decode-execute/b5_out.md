### 1 — Identificación de la fase de Fetch
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["cpu", "arquitectura"]

variables:
  escenario: uno_de([["La CPU lee la dirección de memoria contenida en el PC", "fetch"], ["La ALU realiza una suma de dos registros", "execute"], ["La unidad de control interpreta el código de operación", "decode"]])
  idx: uno_de([0, 1, 2])

enunciado: "En el ciclo de instrucción, cuando la unidad de control accede a la memoria principal para traer la siguiente instrucción basándose en el Program Counter, se está realizando la fase de: ___"

respuestas_validas: ["fetch", "decode", "execute"]

respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  La fase de Fetch (búsqueda) es el proceso mediante el cual la CPU obtiene la instrucción desde la memoria RAM utilizando la dirección apuntada por el PC.
```

### 2 — El rol de la Unidad de Control
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

### 3 — Veracidad del ciclo de ejecución
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

### 4 — Secuencia del ciclo de instrucción
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["orden", "ciclo"]

enunciado: "Ordene las fases del ciclo de instrucción de una CPU en el orden cronológico correcto:"

opciones_explicitas: ["Fetch", "Decode", "Execute", "Write-back"]

respuesta: ["Fetch", "Decode", "Execute", "Write-back"]
tipo: ordenar

explicacion: |
  El ciclo estándar sigue el flujo: buscar la instrucción (Fetch), entender qué significa (Decode), realizar la tarea (Execute) y, opcionalmente, guardar el resultado (Write-back).
```

### 5 — Análisis de un escenario de error
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "avanzado"
  tags: ["debug", "memoria"]

variables:
  caso: uno_de([["La CPU intenta leer una dirección de memoria que no existe", "error_fetch"], ["La instrucción recibida es un código no reconocido", "error_decode"], ["La ALU detecta una división por cero", "error_execute"]])
  idx: uno_de([0, 1, 2])

enunciado: "Se detecta que la CPU ha recibido un código de operación (opcode) que no corresponde a ninguna instrucción válida en su conjunto de instrucciones. ¿En qué fase del ciclo ha ocurrido el fallo?"

opciones_explicitas: ["Fetch", "Decode", "Execute"]

respuesta: "Decode"
tipo: mc

explicacion: |
  Si el código de la instrucción es inválido, el error se identifica en la fase de decodificación, ya que la unidad de control no puede interpretar el patrón de bits recibido.
```