### 1 — ¿Quién realiza los cálculos?
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

### 2 — El rol de la Unidad de Control
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

### 3 — El ciclo de una instrucción
```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["ciclo_instruccion", "ordenar"]

tipo: ordenar
opciones_explicitas: ["Búsqueda (Fetch)", "Decodificación (Decode)", "Ejecución (Execute)"]

enunciado: "Para que una instrucción sea procesada por la CPU, debe seguir un orden lógico de pasos. Ordena los siguientes procesos según el ciclo de instrucción estándar:"

respuesta: ["Búsqueda (Fetch)", "Decodificación (Decode)", "Ejecución (Execute)"]

explicacion: |
  Primero se busca la instrucción en memoria (Fetch), luego la UC la interpreta (Decode) y finalmente la ALU o los registros ejecutan la operación (Execute).
```

### 4 — ¿Qué sucede en la ALU?
```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["alu", "logica", "aritmetica"]

tipo: completar

enunciado: "La ALU es capaz de realizar dos tipos principales de operaciones: las operaciones ___ (como la suma o resta) y las operaciones ___ (como la comparación de si un número es mayor que otro)."

respuestas_validas: ["aritméticas", "lógicas"]

respuesta: "aritméticas"

explicacion: |
  La ALU combina ambas: la parte aritmética para el cálculo numérico y la lógica para la toma de decisiones basada en comparaciones (AND, OR, NOT, comparaciones).
```

### 5 — Confusión de funciones
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