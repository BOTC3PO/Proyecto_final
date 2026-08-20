### 1 — Identificación de propiedades
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza", "tenacidad", "ductilidad"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [
    ["Un diamante es extremadamente difícil de rayar con una lija de carburo.", "dureza"],
    ["Un cable de cobre se estira formando un hilo fino sin romperse.", "ductilidad"],
    ["Un acero de alta calidad absorbe mucha energía antes de fracturarse.", "tenacidad"]
  ]

enunciado: "El material descrito en el escenario: '{datos[escenario_idx][0]}' posee principalmente la propiedad de {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["dureza", "tenacidad", "ductilidad"]

explicacion: |
  La propiedad descrita corresponde a la definición de {datos[escenario_idx][1]}.
```

### 2 — Análisis de falla estructural
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["tenacidad", "fractura"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Un cristal de vidrio se rompe instantáneamente al recibir un golpe seco.", "falsa"],
    ["Un polímero elástico absorbe el impacto de una caída sin fragmentarse.", "verdadera"]
  ]

enunciado: "Si un material se rompe de forma súbita ante un impacto sin absorber energía, ¿se puede decir que tiene una alta tenacidad? (Escenario: {casos[caso_idx][0]})"

respuesta: casos[caso_idx][1]
tipo: vf

explicacion: |
  La tenacidad es la capacidad de absorber energía antes de la rotura. Si el material se rompe súbitamente, su tenacidad es baja.
```

### 3 — Comparación de materiales
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["dureza", "rayado"]

variables:
  test_idx: uno_de([0, 1])
  tests: [
    ["Un material A es rayado fácilmente por un clavo de acero.", "baja"],
    ["Un material B no presenta marcas tras ser frotado con acero.", "alta"]
  ]

enunciado: "En el test de rayado, el material presenta una dureza ___ respecto al acero."

respuesta: tests[test_idx][1]
tipo: completar
respuestas_validas: ["baja", "alta"]

explicacion: |
  La dureza se define como la resistencia a la deformación plástica localizada (como el rayado).
```

### 4 — Secuencia de deformación
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "avanzado"
  tags: ["ductilidad", "deformacion"]

variables:
  proceso_idx: uno_de([0, 1, 2])
  procesos: [
    ["El material se deforma plásticamente", "El material cambia de forma", "El material se estira sin romperse"],
    ["El material se deforma plásticamente", "El material cambia de forma", "El material se estira sin romperse"],
    ["El material se deforma plásticamente", "El material cambia de forma", "El material se estira sin romperse"]
  ]

enunciado: "Ordene los pasos que describen el proceso de ductilidad en un metal:"

pasos:
  - "El material se deforma plásticamente"
  - "El material cambia de forma"
  - "El material se estira sin romperse"

respuesta: ["El material se deforma plásticamente", "El material cambia de forma", "El material se estira sin romperse"]
tipo: ordenar
opciones_explicitas: ["El material se deforma plásticamente", "El material cambia de forma", "El material se estira sin romperse"]

explicacion: |
  La ductilidad implica una deformación plástica continua que permite el cambio de forma antes de la rotura.
```

### 5 — Cálculo de resistencia (Simulado)
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["tenacidad", "energia"]

variables:
  val_idx: uno_de([0, 1])
  valores: [
    [50, 50],
    [120, 120]
  ]

enunciado: "Si un material absorbe {valores[val_idx][0]} Joules antes de la rotura y otro absorbe {valores[val_idx][0] + 100} Joules, el primero es ___ que el segundo en términos de tenacidad."

respuesta: "menor"
tipo: completar
respuestas_validas: ["menor", "mayor"]

explicacion: |
  A mayor energía absorbida antes de la fractura, mayor es la tenacidad del material.
```