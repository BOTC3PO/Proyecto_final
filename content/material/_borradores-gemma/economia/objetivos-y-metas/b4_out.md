### 1 — Objetivo vs Meta
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "planificacion"]

respuesta: "meta"
tipo: "mc"
opciones_explicitas: ["objetivo", "meta", "estrategia", "plan"]

enunciado: "Mientras que un objetivo es una declaración amplia de lo que se desea lograr a largo plazo, una ___ es un paso específico, cuantificable y con un tiempo determinado para alcanzarlo."

explicacion: |
  Los objetivos son la dirección general (ej. "Ser líderes en el mercado"), mientras que las metas son los hitos medibles (ej. "Aumentar las ventas un 10% en el primer trimestre").
```

### 2 — Veracidad de la medición
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["metodologia", "medicion"]

respuesta: falso
tipo: "vf"

enunciado: "Un objetivo general se distingue de una meta concreta principalmente porque el objetivo debe ser necesariamente cuantificable y tener una fecha de vencimiento estricta."

explicacion: |
  Falso. Es la meta la que debe ser cuantificable y tener un plazo. El objetivo es la aspiración cualitativa o el fin último.
```

### 3 — Jerarquía de la planificación
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["jerarquia", "procesos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Incrementar la rentabilidad", "Aumentar el margen de beneficio neto en un 5% anual"],
    ["Expandir la presencia de marca", "Abrir 3 nuevas sucursales en la región norte antes de diciembre"]
  ]

respuesta: datos[escenario_idx][1]
tipo: "completar"
respuestas_validas: [datos[escenario_idx][1]]

enunciado: "Considere el siguiente objetivo general: '{datos[escenario_idx][0]}'. Una meta concreta que represente este objetivo sería: ___"

pasos:
  - "Identificar el fin último (objetivo)."
  - "Transformar el fin en una acción medible con tiempo y cantidad (meta)."

explicacion: |
  La meta debe desglosar el objetivo en términos de 'cuánto', 'cuándo' y 'cómo' de forma que se pueda verificar su cumplimiento.
```

### 4 — Atributos de una meta
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["caracteristicas"]

respuesta: "específica, medible, alcanzable, relevante y con tiempo"
tipo: "completar"
respuestas_validas: ["específica, medible, alcanzable, relevante y con tiempo"]

enunciado: "Para que una meta sea efectiva y se diferencie de un deseo vago, se recomienda que cumpla con el criterio SMART, lo que significa que debe ser ___."

explicacion: |
  El acrónimo SMART (Specific, Measurable, Achievable, Relevant, Time-bound) es el estándar para transformar objetivos en metas operativas.
```

### 5 — Secuencia lógica de planificación
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "avanzado"
  tags: ["secuencia", "logica"]

respuesta: ["Definir misión", "Establecer objetivos", "Determinar metas", "Diseñar tácticas"]
tipo: "ordenar"
opciones_explicitas: ["Definir misión", "Establecer objetivos", "Determinar metas", "Diseñar tácticas", "Ejecutar acciones"]

enunciado: "Ordene los siguientes elementos según la jerarquía lógica de la planificación estratégica, desde lo más abstracto a lo más concreto:"

explicacion: |
  La planificación comienza con la identidad (misión), sigue con la dirección (objetivos), se desglosa en hitos (metas) y finalmente en la ejecución táctica.
```