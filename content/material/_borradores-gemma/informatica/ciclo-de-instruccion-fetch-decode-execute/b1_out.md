### 1 — El primer paso del ciclo
```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["cpu", "arquitectura", "fetch"]

respuesta: "fetch"
tipo: completar
respuestas_validas: ["fetch", "buscar"]

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

respuesta: ["fetch", "decode", "execute"]
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