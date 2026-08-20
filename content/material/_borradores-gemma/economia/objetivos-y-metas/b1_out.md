### 1 — Diferencia conceptual básica
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "conceptos"]

tipo: mc
opciones_explicitas: ["Un objetivo es un resultado específico y cuantificable, mientras que una meta es una aspiración amplia.", "Un objetivo es una aspiración amplia y cualitativa, mientras que una meta es un resultado específico y cuantificable.", "Ambos términos son sinónimos y se usan indistintamente en la administración.", "El objetivo es el camino y la meta es el destino final."]

enunciado: "En el ámbito de la administración, ¿cuál es la diferencia fundamental entre un objetivo y una meta?"

explicacion: |
  Los objetivos suelen ser declaraciones amplias de lo que se desea lograr (ej. 'Ser líderes en el mercado'), mientras que las metas son pasos específicos, medibles y con un tiempo determinado para alcanzar esos objetivos (ej. 'Aumentar las ventas un 10% en el primer trimestre').
```

### 2 — Identificación de metas SMART
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["metas", "smart"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Incrementar la satisfacción del cliente en un 15% para diciembre de 2024.", "Mejorar la calidad del servicio."],
    ["Reducir los costos operativos en un 5% durante el próximo semestre.", "Gastar menos dinero."]
  ]

tipo: vf
respuesta: verdadero

enunciado: "Analice el siguiente enunciado: '{escenarios[escenario_idx][0]}' es un ejemplo de una meta concreta y medible."

explicacion: |
  Para que una meta sea efectiva, debe ser específica, medible, alcanzable, relevante y con un tiempo definido (SMART). El enunciado cumple con tener un indicador (15% o 5%) y un plazo determinado.
```

### 3 — Completar terminología
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["terminologia"]

tipo: completar
respuestas_validas: ["cuantificable", "cuantificable"]

enunciado: "Para que una meta sea considerada efectiva, debe ser __________, es decir, debe poder medirse a través de indicadores numéricos."

explicacion: |
  La cuantificación es lo que permite saber si se ha alcanzado la meta o qué tan cerca se está de lograrla. Sin medición, no hay control administrativo.
```

### 4 — Jerarquía de planificación
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["planificacion", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Misión de la empresa", "Objetivo estratégico", "Meta operativa", "Acción diaria"]

enunciado: "Ordene los siguientes elementos desde el nivel más macro (estratégico/filosófico) hasta el nivel más micro (ejecución):"

explicacion: |
  La planificación sigue una cascada: la Misión define la razón de ser, los Objetivos estratégicos marcan el rumbo a largo plazo, las Metas operativas desglosan esos objetivos en términos medibles, y las Acciones son las tareas concretas del día a día.
```

### 5 — Análisis de coherencia
```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["coherencia", "logica"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Objetivo: 'Ser la empresa más rentable del sector'. Meta: 'Aumentar el margen de utilidad neta del 5% al 8% en un año'.", "Falso"],
    ["Objetivo: 'Mejorar el clima laboral'. Meta: 'Reducir la rotación de personal en un 20% para fin de año'.", "Verdadero"]
  ]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

enunciado: "Determine si la relación entre el objetivo y la meta presentados en el caso es coherente: '{casos[caso_idx][0]}'"

explicacion: |
  En el caso 0 (Falso), la meta es coherente con el objetivo. En el caso 1 (Verdadero), la meta de reducir la rotación es un indicador directo y medible para alcanzar la mejora del clima laboral.
```