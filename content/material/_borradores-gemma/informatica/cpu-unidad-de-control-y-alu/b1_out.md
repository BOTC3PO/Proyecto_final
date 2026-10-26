### 1 — Componentes de la CPU
```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "hardware", "cpu"]

tipo: mc
opciones_explicitas: ["Unidad de Control y ALU", "Memoria RAM y Disco Duro", "Monitor y Teclado", "Sistema Operativo y Aplicaciones"]

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
```

### 4 — La Unidad de Control
```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["uc", "control"]

tipo: completar
respuestas_validas: ["decodificar", "decodificación"]

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

tipo: mc
opciones_explicitas: ["Suma y Resta", "AND y OR", "Lectura y Escritura de archivos", "Gestión de memoria RAM"]

enunciado: "Además de las operaciones aritméticas, la ALU es capaz de realizar operaciones ____."

explicacion: |
  La ALU (Arithmetic Logic Unit) realiza tanto cálculos aritméticos (como sumas) como comparaciones y operaciones lógicas (como AND, OR, XOR).
```