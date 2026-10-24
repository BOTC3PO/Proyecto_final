### 1 — Magnitud de la Vía Láctea
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["vía_láctea", "estrellas"]

respuesta: "cientos de miles de millones"
tipo: completar
respuestas_validas: ["cientos de miles de millones"]

enunciado: "Se estima que nuestra galaxia, la Vía Láctea, contiene ___ de estrellas."

explicacion: |
  La Vía Láctea es una galaxia espiral que alberga una cantidad masiva de astros, estimándose en cientos de miles de millones de estrellas.
```

### 2 — Escala del Universo Observable
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["universo", "galaxias"]

variables:
  escala_galaxias: uno_de(["cientos de miles de millones", "pocos miles", "un millón"])

respuesta: escala_galaxias
tipo: mc
opciones_explicitas: ["cientos de miles de millones", "pocos miles", "un millón"]

enunciado: "En el universo observable se estima que existen {escala_galaxias} de galaxias."

explicacion: |
  La escala del universo es inmensa; la cantidad de galaxias es comparable en orden de magnitud a la cantidad de estrellas en nuestra propia galaxia.
```

### 3 — Comparación de Escalas
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["comparacion", "magnitud"]

variables:
  caso: uno_de([0, 1])

respuesta: tabla[caso][1]
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "Si comparamos la cantidad de estrellas en la Vía Láctea con la cantidad de galaxias en el universo observable, la cantidad de estrellas es {tabla[caso][0]} que la de galaxias."

tabla: [
  ["mayor", "mayor"],
  ["menor", "menor"]
]

explicacion: |
  Aunque ambas cifras son de "cientos de miles de millones", la escala de estrellas en una sola galaxia es comparable a la escala de galaxias en el universo, pero matemáticamente la cantidad de estrellas es órdenes de magnitud superior a la de galaxias.
```

### 4 — Orden de Magnitud
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "avanzado"
  tags: ["jerarquia", "escala"]

respuesta: ["Estrellas", "Galaxias", "Universo"]
tipo: ordenar

opciones_explicitas: ["Estrellas", "Galaxias", "Universo"]

enunciado: "Ordena estos conceptos de menor a mayor escala de agrupación de materia:"

pasos:
  - "Identifica la unidad básica en este contexto"
  - "Identifica el conjunto que contiene a las estrellas"
  - "Identifica el todo que contiene a las galaxias"

explicacion: |
  La jerarquía estructural comienza con las estrellas, las cuales se agrupan en galaxias, y estas forman parte de la estructura del universo.
```

### 5 — Veracidad de Escalas
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["verdadero_falso"]

respuesta: verdadero
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Es correcto afirmar que el universo observable contiene cientos de miles de millones de galaxias."

explicacion: |
  Las estimaciones astronómicas actuales sitúan la cantidad de galaxias en el universo observable en el orden de cientos de miles de millones.
```