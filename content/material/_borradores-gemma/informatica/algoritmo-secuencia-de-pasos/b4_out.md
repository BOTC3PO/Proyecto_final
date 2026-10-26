### 1 — Algoritmo vs. Proceso
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["definicion", "conceptos_base"]

respuesta: "algoritmo"
tipo: "completar"
respuestas_validas: ["algoritmo"]

enunciado: "Mientras que un proceso puede ser una serie de acciones desordenadas o continuas, un ___ es una secuencia finita, definida y ordenada de pasos para resolver un problema específico."

explicacion: |
  Un algoritmo se distingue por ser una secuencia estructurada y con un fin determinado, a diferencia de un proceso que puede ser una ejecución continua sin una estructura de pasos estricta para un fin único.
```

### 2 — Propiedad de la Finitud
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["propiedades", "finitud"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que un algoritmo puede ejecutarse infinitamente sin llegar nunca a un estado de finalización?"

explicacion: |
  Falso. Una de las propiedades fundamentales de un algoritmo es la finitud: debe terminar tras un número limitado de pasos. Un proceso que no termina se denomina bucle infinito o loop.
```

### 3 — Algoritmo vs. Código
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "intermedio"
  tags: ["algoritmo_vs_codigo", "abstraccion"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: "mc"
opciones_explicitas: ["La implementación en un lenguaje de programación", "La lógica abstracta del procedimiento"]

enunciado: "Si comparamos un algoritmo con su implementación en un lenguaje de programación (código), el algoritmo se distingue por ser: ___"

datos:
  - ["La implementación en un lenguaje de programación", "La lógica abstracta del procedimiento"]
  - ["La lógica abstracta del procedimiento", "La implementación en un lenguaje de programación"]

explicacion: |
  El algoritmo es el diseño lógico y abstracto (el "qué" hacer), mientras que el código es la implementación técnica en un lenguaje específico (el "cómo" hacerlo en una máquina).
```

### 4 — Orden de los pasos
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["orden", "secuencia"]

respuesta: ["Paso 1: Entrada", "Paso 2: Proceso", "Paso 3: Salida"]
tipo: "ordenar"
opciones_explicitas: ["Paso 1: Entrada", "Paso 2: Proceso", "Paso 3: Salida"]

enunciado: "Para que un algoritmo sea efectivo, debe seguir una secuencia lógica. Ordene los componentes fundamentales de un algoritmo de procesamiento de datos:"

explicacion: |
  La estructura clásica de un algoritmo requiere primero recibir datos (entrada), transformarlos mediante instrucciones (proceso) y entregar un resultado (salida).
```

### 5 — Determinismo
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "intermedio"
  tags: ["determinismo", "precisicion"]

respuesta: "precisión"
tipo: "completar"
respuestas_validas: ["precisión"]

enunciado: "A diferencia de una instrucción ambigua, un algoritmo debe poseer ___; esto significa que, ante los mismos datos de entrada, siempre debe producir el mismo resultado tras seguir los mismos pasos."

explicacion: |
  La precisión (o determinismo) garantiza que no haya ambigüedad en los pasos, asegurando que el camino hacia la solución sea único y predecible para la computadora.
```