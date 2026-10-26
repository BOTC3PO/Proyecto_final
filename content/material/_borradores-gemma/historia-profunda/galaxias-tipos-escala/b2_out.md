### 1 — Clasificación por forma
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["astronomia", "galaxias"]

respuesta: "espiral"
tipo: mc
opciones_explicitas: ["elíptica", "espiral", "irregular"]

enunciado: "Las galaxias que presentan una estructura de disco con brazos que se curvan desde un núcleo central se denominan galaxias ___."

explicacion: |
  Las galaxias espirales, como la Vía Láctea, se caracterizan por tener un núcleo brillante y brazos espirales donde se forman nuevas estrellas.
```

### 2 — La forma de las elípticas
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["astronomia", "galaxias"]

respuesta: "elíptica"
tipo: mc
opciones_explicitas: ["espiral", "elíptica", "irregular"]

enunciado: "Las galaxias que tienen una forma ovalada o esférica y carecen de una estructura de brazos definida se conocen como galaxias ___."

explicacion: |
  Las galaxias elípticas suelen contener poblaciones de estrellas viejas y tienen poco gas o polvo para formar nuevas estrellas.
```

### 3 — Galaxias sin estructura
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["astronomia", "galaxias"]

respuesta: "irregular"
tipo: mc
opciones_explicitas: ["espiral", "elíptica", "irregular"]

enunciado: "Aquellas galaxias que no poseen una forma geométrica definida ni un núcleo central claro se clasifican como galaxias ___."

explicacion: |
  Las galaxias irregulares suelen ser el resultado de interacciones gravitatorias entre otras galaxias o son galaxias pequeñas en formación.
```

### 4 — Identificación de la Vía Láctea
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["astronomia", "galaxias"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [["espiral", "brazos"], ["elíptica", "forma ovalada"], ["irregular", "sin forma definida"]]

respuesta: escenario[idx][0]
tipo: mc
opciones_explicitas: ["espiral", "elíptica", "irregular"]

enunciado: "Considerando que la Vía Láctea tiene una estructura de {escenario[idx][1]}, ¿qué tipo de galaxia es?"

explicacion: |
  La Vía Láctea es una galaxia de tipo {escenario[idx][0]}.
```

### 5 — Completar clasificación
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["astronomia", "galaxias"]

respuesta: "espiral, elíptica, irregular"
tipo: completar
respuestas_validas: ["espiral, elíptica, irregular", "espiral, irregular, elíptica"]

enunciado: "El orden de los tres principales tipos de galaxias según su morfología es: 1) ___, 2) ___ y 3) ___."

explicacion: |
  La clasificación morfológica clásica divide a las galaxias principalmente en espirales, elípticas e irregulares.
```