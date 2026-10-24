### 1 — Diferencia fundamental
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["El objetivo es el fin último y la meta es el paso cuantificable", "El objetivo es el paso cuantificable y la meta es el fin último", "Son sinónimos en la práctica administrativa", "La meta es cualitativa y el objetivo es cuantitativo"]

enunciado: "En el proceso de planificación estratégica, ¿cuál es la distinción principal entre un objetivo general y una meta?"

explicacion: |
  Un objetivo general describe un estado deseado a largo plazo (el "qué"), mientras que una meta es un punto de referencia específico, medible y con un tiempo determinado que ayuda a alcanzar ese objetivo (el "cuánto" y "cuándo").
```

### 2 — Identificación de error
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["planificacion", "errores_comunes"]

tipo: vf
enunciado: "Si una empresa establece como objetivo 'Aumentar la satisfacción del cliente', esto se considera una meta SMART porque es específica y medible."

respuesta: falso

explicacion: |
  Falso. 'Aumentar la satisfacción del cliente' es un objetivo general. Para ser una meta, debería ser algo como: 'Aumentar el índice de satisfacción de 75% a 85% en los próximos 6 meses'.
```

### 3 — Completar la jerarquía
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["estructura", "jerarquia"]

variables:
  ejemplo_idx: uno_de([0, 1])
  escenarios: [
    ["Ser el líder del mercado regional", "Incrementar la cuota de mercado del 15% al 25% en un año"],
    ["Reducir la huella de carbono", "Disminuir las emisiones de CO2 en un 10% para diciembre de 2025"]
  ]

tipo: completar
respuestas_validas: [escenarios[ejemplo_idx][1]]
respuesta: escenarios[ejemplo_idx][1]]

enunciado: "Dado el siguiente objetivo general: '{escenarios[ejemplo_idx][0]}', la meta concreta correspondiente es: ___"

explicacion: |
  La meta debe transformar la intención cualitativa en un dato cuantitativo y temporal. En el primer caso es la cuota de mercado; en el segundo, la reducción de emisiones con fecha límite.
```

### 4 — El error de la ambigüedad
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["metas_smart", "errores"]

tipo: mc
opciones_explicitas: ["Falta de temporalidad", "Falta de cuantificación", "Falta de relevancia", "Todas las anteriores son errores comunes"]

enunciado: "Un error crítico al transformar un objetivo en meta es presentar una declaración que no permite saber si se ha logrado o no. Esto sucede principalmente por:"

explicacion: |
  Para que una meta sea efectiva, debe ser medible (cuantificación) y tener un plazo (temporalidad). Sin estos elementos, la meta es ambigua y no permite el control administrativo.
```

### 5 — Secuencia de planificación
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["proceso", "orden"]

tipo: ordenar
opciones_explicitas: ["Definir la visión y misión de la empresa", "Establecer los objetivos generales estratégicos", "Determinar las metas tácticas y medibles", "Diseñar el plan de acción para ejecutar las metas"]

enunciado: "Ordene correctamente los pasos del proceso de planificación, desde la visión macro hasta la ejecución operativa:"

respuesta: ["Definir la visión y misión de la empresa", "Establecer los objetivos generales estratégicos", "Determinar las metas tácticas y medibles", "Diseñar el plan de acción para ejecutar las metas"]

explicacion: |
  La planificación sigue un flujo descendente: primero se define la identidad (visión/misión), luego el rumbo (objetivos), después los hitos concretos (metas) y finalmente el cómo (plan de acción).
```