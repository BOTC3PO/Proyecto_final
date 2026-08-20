# Informatica — Cpu unidad de control y alu (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Componentes de la CPU

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "hardware", "cpu"]

tipo: mc
opciones_explicitas: ["Unidad de Control y ALU", "Memoria RAM y Disco Duro", "Monitor y Teclado", "Sistema Operativo y Aplicaciones"]
respuesta: "Unidad de Control y ALU"

enunciado: "La CPU (Unidad Central de Procesamiento) está compuesta principalmente por dos bloques funcionales. ¿Cuáles son?"

explicacion: |
  La CPU se divide fundamentalmente en la Unidad de Control (UC), que dirige el flujo de datos, y la ALU (Unidad Aritmético-Lógica), que realiza los cálculos.
```

### 2 — Función de la ALU

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["alu", "calculo"]

tipo: vf
respuesta: falso

enunciado: "La función principal de la ALU (Unidad Aritmético-Lógica) es gestionar el flujo de instrucciones y el control de los componentes del sistema."

explicacion: |
  Falso. La gestión del flujo de instrucciones es responsabilidad de la Unidad de Control. La ALU se encarga exclusivamente de operaciones aritméticas (suma, resta, etc.) y lógicas (AND, OR, NOT).
```

### 3 — El ciclo de instrucción

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["ciclo_instruccion", "ordenar"]

tipo: ordenar
opciones_explicitas: ["Busqueda de la instrucción (Fetch)", "Decodificación de la instrucción (Decode)", "Ejecución de la instrucción (Execute)"]

enunciado: "Ordena las etapas del ciclo de instrucción que realiza la CPU para procesar una orden:"

explicacion: |
  El ciclo básico consiste en buscar la instrucción en memoria, decodificarla para entender qué debe hacer la UC y finalmente ejecutar la operación (usando la ALU si es necesario).
respuesta_orden: ["Busqueda de la instrucción (Fetch)", "Decodificación de la instrucción (Decode)", "Ejecución de la instrucción (Execute)"]
```

### 4 — La Unidad de Control

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["uc", "control"]

tipo: completar
respuestas_validas:
  - "decodificar"
  - "decodificación"

enunciado: "La Unidad de Control tiene la tarea de ___ las instrucciones para determinar qué operaciones debe realizar la ALU."

explicacion: |
  La Unidad de Control interpreta o decodifica las instrucciones para coordinar las señales de control necesarias para el resto del hardware.
```

### 5 — Operaciones Lógicas

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["alu", "logica"]

tipo: completar
enunciado: "Además de las operaciones aritméticas, la ALU es capaz de realizar operaciones lógicas."
respuesta: "lógicas"
explicacion: |
  La ALU (Arithmetic Logic Unit) realiza tanto cálculos aritméticos (como sumas) como comparaciones y operaciones lógicas (como AND, OR, XOR).
```

### 6 — El ciclo de instrucción

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

### 7 — Operación lógica en la ALU

```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "intermedio"
  tags: ["alu", "logica", "operaciones"]

variables:
  op_tipo: uno_de([0, 1])
  tabla: [["AND", "AND"], ["OR", "OR"]]

respuesta: tabla[op_tipo][1]
tipo: completar

enunciado: "La ALU es responsable de las operaciones aritméticas y lógicas. Si la CPU necesita verificar si dos valores binarios cumplen con la condición de que ambos sean 1, la ALU debe utilizar la operación lógica ___."

explicacion: |
  La operación AND (Y) devuelve verdadero solo si ambos operandos son verdaderos (1). Si se buscara que al menos uno sea 1, se usaría OR.
```

### 8 — Componentes de la CPU

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

### 9 — Flujo de datos en una suma

```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "intermedio"
  tags: ["flujo_datos", "ordenar", "cpu"]

opciones_explicitas: ["La UC busca la instrucción de suma en memoria", "La ALU realiza la suma de los valores", "La UC decodifica la instrucción de suma", "El resultado se escribe en un registro o memoria"]

respuesta_orden: ["La UC busca la instrucción de suma en memoria", "La UC decodifica la instrucción de suma", "La ALU realiza la suma de los valores", "El resultado se escribe en un registro o memoria"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que ocurren en la CPU cuando se ejecuta una instrucción de suma de dos números:"

explicacion: |
  Primero se debe obtener la instrucción (Fetch), luego interpretarla (Decode), procesar el cálculo (Execute en la ALU) y finalmente guardar el resultado (Write-back).
```

### 10 — El papel de la Unidad de Control

```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "basico"
  tags: ["uc", "control"]

variables:
  escenario: uno_de([0, 1])
  tabla: [["controlar", "controlar"], ["calcular", "calcular"]]

respuesta: tabla[escenario][1]
tipo: completar
respuestas_validas:
  - "controlar"
  - "calcular"

enunciado: "Si comparamos las funciones de los dos componentes principales de la CPU: la ALU se encarga de ___ los datos, mientras que la Unidad de Control se encarga de ___ el flujo de ejecución."

explicacion: |
  La ALU es el "músculo" que realiza los cálculos (calcular), mientras que la UC es el "cerebro" que dirige el tráfico de información (controlar).
```

### 11 — ¿Quién realiza los cálculos?

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "cpu", "alu"]

tipo: mc
opciones_explicitas: ["Unidad de Control (UC)", "Unidad Aritmético-Lógica (ALU)", "Memoria Caché", "Bus de Datos"]

enunciado: "Un error común es pensar que la Unidad de Control es la encargada de realizar operaciones matemáticas como sumas o comparaciones lógicas. En realidad, esa función le corresponde a la ___."

respuesta: "Unidad Aritmético-Lógica (ALU)"
```

### 12 — El rol de la Unidad de Control

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "uc", "control"]

tipo: vf

enunciado: "La Unidad de Control (UC) actúa como el 'director de orquesta' de la CPU, decodificando instrucciones y enviando señales de control a los demás componentes para que actúen en el momento adecuado."

respuesta: verdadero

explicacion: |
  Correcto. La UC no procesa datos, sino que interpreta las instrucciones del programa y coordina el flujo de datos entre la memoria, la ALU y los registros.
```

### 13 — El ciclo de una instrucción

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["ciclo_instruccion", "ordenar"]

tipo: ordenar
opciones_explicitas: ["Búsqueda (Fetch)", "Decodificación (Decode)", "Ejecución (Execute)"]

enunciado: "Para que una instrucción sea procesada por la CPU, debe seguir un orden lógico de pasos. Ordena los siguientes procesos según el ciclo de instrucción estándar:"

respuesta_orden: ["Búsqueda (Fetch)", "Decodificación (Decode)", "Ejecución (Execute)"]

explicacion: |
  Primero se busca la instrucción en memoria (Fetch), luego la UC la interpreta (Decode) y finalmente la ALU o los registros ejecutan la operación (Execute).
```

### 14 — ¿Qué sucede en la ALU?

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["alu", "logica", "aritmetica"]

tipo: completar

enunciado: "La ALU es capaz de realizar dos tipos principales de operaciones: las operaciones ___ (como la suma o resta) y las operaciones ___ (como la comparación de si un número es mayor que otro)."

respuestas_validas:
  - "aritméticas"
  - "lógicas"

respuesta: "aritméticas"

explicacion: |
  La ALU combina ambas: la parte aritmética para el cálculo numérico y la lógica para la toma de decisiones basada en comparaciones (AND, OR, NOT, comparaciones).
```

### 15 — Confusión de funciones

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "avanzado"
  tags: ["arquitectura", "uc", "alu"]

variables:
  escenario: uno_de([[0, "La UC decide qué operación hacer"], [1, "La ALU decide qué operación hacer"]])

tipo: mc
opciones_explicitas: ["La UC decide qué operación hacer", "La ALU decide qué operación hacer", "Ambas deciden por igual", "Ninguna de las anteriores"]

enunciado: "Analizando el flujo de datos, cuando se lee una instrucción de la memoria, {escenario}."

respuesta: "La UC decide qué operación hacer"

explicacion: |
  La ALU es un componente pasivo que recibe datos y una señal de control; es la Unidad de Control la que "decide" o determina qué operación debe ejecutar la ALU basándose en el código de operación de la instrucción.
```

### 16 — Función de la ALU

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "cpu", "alu"]

tipo: mc
opciones_explicitas: ["Realiza cálculos matemáticos y comparaciones lógicas", "Coordina el flujo de datos entre los componentes", "Almacena permanentemente los datos del usuario", "Gestiona la interfaz de entrada y salida"]

enunciado: "A diferencia de la Unidad de Control, la ALU (Unidad Aritmético-Lógica) tiene como función principal:"

respuesta: "Realiza cálculos matemáticos y comparaciones lógicas"

explicacion: |
  La ALU es el componente encargado de realizar las operaciones aritméticas (suma, resta, etc.) y las operaciones lógicas (AND, OR, NOT), mientras que la Unidad de Control se encarga de dirigir el flujo de datos.
```

### 17 — El rol de la Unidad de Control

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "cpu", "control"]

tipo: vf
respuesta: falso

enunciado: "La Unidad de Control (UC) es la encargada de ejecutar directamente las operaciones de suma y resta de los datos contenidos en los registros."

explicacion: |
  Falso. La UC no realiza los cálculos; su función es decodificar las instrucciones y enviar señales de control para que la ALU realice dichas operaciones.
```

### 18 — Diferencia en la gestión de instrucciones

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["instrucciones", "ciclo_fetch_execute"]

variables:
  idx: uno_de([0, 1])
  datos: [["decodificar", "ejecutar"], ["ejecutar", "decodificar"]]

tipo: completar
respuestas_validas:
  - "decodificar"
  - "ejecutar"
respuesta: datos[idx][0]

enunciado: "En el ciclo de instrucción, la Unidad de Control se encarga de ___ la instrucción, mientras que la ALU se encarga de ___ la operación lógica o aritmética resultante."

pasos:
  - "La UC interpreta el código de operación."
  - "La ALU procesa los operandos."

explicacion: |
  El ciclo típico es: Búsqueda (Fetch), Decodificación (por la UC) y Ejecución (donde interviene la ALU).
```

### 19 — Componentes del procesador

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["componentes", "cpu"]

tipo: ordenar
opciones_explicitas: ["Unidad de Control", "Unidad Aritmético-Lógica", "Registros de la CPU"]

respuesta_orden: ["Unidad de Control", "Unidad Aritmético-Lógica", "Registros de la CPU"]

enunciado: "Ordena los componentes según el flujo lógico de una instrucción: primero se interpreta, luego se procesa el dato y finalmente se guarda el resultado temporalmente."

explicacion: |
  1. Unidad de Control (interpreta/decodifica).
  2. ALU (procesa/calcula).
  3. Registros (almacenan el resultado inmediato).
```

### 20 — El flujo de señales

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["señales", "control", "alu"]

tipo: mc
opciones_explicitas: ["La UC envía señales de control a la ALU", "La ALU envía señales de control a la UC", "La UC y la ALU no se comunican entre sí", "La ALU controla el bus de datos principal"]

enunciado: "¿Qué distingue la interacción entre la Unidad de Control y la ALU?"

respuesta: "La UC envía señales de control a la ALU"

explicacion: |
  La Unidad de Control actúa como el 'director de orquesta', enviando señales eléctricas (señales de control) para indicarle a la ALU qué operación debe realizar en cada momento.
```

### 21 — El ciclo de instrucción

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "cpu"]

variables:
  datos: [["La CPU debe sumar dos números almacenados en registros", "ALU"], ["La CPU debe decidir si un número es mayor que otro", "ALU"], ["La CPU debe buscar la siguiente instrucción en la memoria", "UC"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ALU", "UC", "Memoria RAM"]

enunciado: "En un procesador, cuando se requiere realizar una operación de comparación entre dos valores, ¿qué componente es el encargado de ejecutar dicha lógica?: {datos[idx][0]}"

explicacion: |
  La Unidad de Control (UC) dirige el flujo de datos, mientras que la Unidad Aritmético-Lógica (ALU) es la encargada de realizar las operaciones matemáticas y de comparación.
```

### 22 — Componentes de la CPU

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

### 23 — El flujo de datos

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["ciclo_instruccion"]

variables:
  pasos_orden: ["Fetch (Captación)", "Decode (Decodificación)", "Execute (Ejecución)"]

respuesta_orden: pasos_orden
tipo: ordenar

opciones_explicitas: ["Fetch (Captación)", "Decode (Decodificación)", "Execute (Ejecución)"]

enunciado: "Ordena las etapas lógicas que sigue una instrucción dentro de la CPU para ser procesada:"

explicacion: |
  El ciclo básico de una instrucción consiste en buscarla en memoria (Fetch), entender qué debe hacer (Decode) y realizar la operación (Execute).
```

### 24 — Operaciones lógicas

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["alu"]

variables:
  datos: [["Calcular el producto de 5 * 5", "25"], ["Determinar si 10 es igual a 10", "verdadero"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si la ALU recibe la instrucción para procesar la operación de {datos[idx][0]}, el resultado de dicha operación es: ___"

respuestas_validas:
  - "25"
  - "verdadero"

explicacion: |
  La ALU maneja tanto operaciones aritméticas (como la multiplicación) como operaciones lógicas (como la igualdad).
```

### 25 — El rol de la Unidad de Control

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["uc"]

variables:
  datos: [["La CPU debe leer un dato de la memoria para llevarlo al registro A", "UC"], ["La CPU debe calcular la raíz cuadrada de 144", "ALU"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["UC", "ALU"]

enunciado: "Considerando el siguiente escenario: '{datos[idx][0]}'. ¿Qué componente es el responsable de coordinar el movimiento de datos entre la memoria y el registro?: {datos[idx][0]}"

explicacion: |
  El movimiento de datos y la coordinación de señales entre componentes es la función principal de la Unidad de Control (UC).
```
