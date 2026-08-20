### 1 — Función de la ALU
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

### 2 — El rol de la Unidad de Control
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

### 3 — Diferencia en la gestión de instrucciones
```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["instrucciones", "ciclo_fetch_execute"]

variables:
  escenario: uno_de([["decodificar", "ejecutar"], ["ejecutar", "decodificar"]])
  idx: uno_de([0, 1])
  datos: [["decodificar", "ejecutar"], ["ejecutar", "decodificar"]]

tipo: completar
respuestas_validas: ["decodificar", "ejecutar"]
respuesta: datos[idx][0]

enunciado: "En el ciclo de instrucción, la Unidad de Control se encarga de ___ la instrucción, mientras que la ALU se encarga de ___ la operación lógica o aritmética resultante."

pasos:
  - "La UC interpreta el código de operación."
  - "La ALU procesa los operandos."

explicacion: |
  El ciclo típico es: Búsqueda (Fetch), Decodificación (por la UC) y Ejecución (donde interviene la ALU).
```

### 4 — Componentes del procesador
```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["componentes", "cpu"]

tipo: ordenar
opciones_explicitas: ["Unidad de Control", "Unidad Aritmético-Lógica", "Registros de la CPU"]

respuesta: ["Unidad de Control", "Unidad Aritmético-Lógica", "Registros de la CPU"]

enunciado: "Ordena los componentes según el flujo lógico de una instrucción: primero se interpreta, luego se procesa el dato y finalmente se guarda el resultado temporalmente."

explicacion: |
  1. Unidad de Control (interpreta/decodifica).
  2. ALU (procesa/calcula).
  3. Registros (almacenan el resultado inmediato).
```

### 5 — El flujo de señales
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