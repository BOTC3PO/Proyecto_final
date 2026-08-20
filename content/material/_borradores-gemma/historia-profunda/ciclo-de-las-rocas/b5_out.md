### 1 — Transformación de Magma
```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "roca_ignea"]

variables:
  escenario: uno_de([["magma enfriado lentamente bajo la superficie", "roca intrusiva"], ["magma enfriado rápidamente en la superficie", "roca extrusiva"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["roca intrusiva", "roca extrusiva", "roca sedimentaria", "roca metamórfica"]

enunciado: "Si el magma se enfría lentamente bajo la superficie terrestre, el proceso de cristalización produce una {escenario[idx][0]}."

explicacion: |
  El enfriamiento lento permite el desarrollo de cristales grandes, formando rocas ígneas intrusivas (plutónicas).
```

### 2 — Sedimentación y Litificación
```
metadata:
  materia: "geologia"
  tema: "ciclo_las_rocas"
  nivel: "basico"
  tags: ["sedimento", "litificacion"]

variables:
  escenario: uno_de([["sedimentos acumulados en el fondo de un lago", "roca sedimentaria"], ["cristales de granito bajo presión", "roca metamórfica"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["roca sedimentaria", "roca metamórfica", "roca ígnea", "magma"]

enunciado: "La acumulación, compactación y cementación de {escenario[idx][0]} da lugar a una ___."

explicacion: |
  La litificación de sedimentos es el proceso mediante el cual se forman las rocas sedimentarias.
```

### 3 — Metamorfismo por Presión y Temperatura
```
metadata:
  materia: "geologia"
  tema: "ciclo_las_rocas"
  nivel: "intermedio"
  tags: ["metamorfismo", "presion"]

variables:
  escenario: uno_de([["una roca ígnea sometida a altas presiones y temperaturas", "roca metamórfica"], ["un sedimento depositado en un río", "roca sedimentaria"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["roca metamórfica", "roca ígnea", "roca sedimentaria", "magma"]

enunciado: "Cuando {escenario[idx][0]} experimenta cambios físicos sin llegar a fundirse, se transforma en una ___."

explicacion: |
  El metamorfismo es la transformación de rocas preexistentes debido a cambios en la presión y temperatura.
```

### 4 — El Ciclo de la Erosión
```
metadata:
  materia: "geologia"
  tema: "ciclo_las_rocas"
  nivel: "intermedio"
  tags: ["erosion", "sedimentos"]

variables:
  escenario: uno_de([["una roca sólida expuesta a la lluvia y el viento", "sedimentos"], ["un núcleo de magma", "magma"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["sedimentos", "magma", "roca metamórfica", "cristales"]

enunciado: "La meteorización y erosión de {escenario[idx][0]} producen partículas sueltas llamadas ___."

explicacion: |
  La erosión rompe las rocas en fragmentos más pequeños llamados sedimentos.
```

### 5 — Fusión de Rocas
```
metadata:
  materia: "geologia"
  tema: "ciclo_las_rocas"
  nivel: "avanzado"
  tags: ["fusion", "magma"]

variables:
  escenario: uno_de([["una roca metamórfica que se funde por calor extremo", "magma"], ["un sedimento que se compacta", "roca sedimentaria"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["magma", "roca ígnea", "roca metamórfica", "sedimento"]

enunciado: "Si {escenario[idx][0]} alcanza su punto de fusión, el material resultante es ___."

explicacion: |
  La fusión completa de cualquier tipo de roca produce magma, que es el origen de las rocas ígneas.
```