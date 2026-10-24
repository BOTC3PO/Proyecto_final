### 1 — Composición gaseosa inicial
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["geologia", "atmosfera"]

variables:
  escenario: [[["Metano (CH4)", "Dióxido de carbono (CO2)"], ["Nitrógeno (N2)", "Dióxido de carbono (CO2)"], ["Vapor de agua (H2O)", "Metano (CH4)"]], ["Nitrógeno (N2)", "Metano (CH4)"], ["Dióxido de carbono (CO2)", "Oxígeno (O2)"], ["Nitrógeno (N2)", "Oxígeno (O2)"]]]
  idx: uno_de([0,1,2,3])

enunciado: "En la atmósfera primitiva, un componente dominante era el {escenario[idx][0]}, mientras que en la atmósfera actual el componente predominante es el {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Dióxido de carbono (CO2)", "Metano (CH4)", "Oxígeno (O2)", "Nitrógeno (N2)"]

explicacion: |
  La atmósfera primitiva era una atmósfera reductora, rica en gases como CO2, CH4 y N2, pero carecía de oxígeno libre (O2) hasta la aparición de la fotosíntesis oxigénica.
```

### 2 — El gran cambio oxidativo
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["evolucion", "oxigeno"]

variables:
  evento: [["Oxígeno (O2)", "Dióxido de carbono (CO2)"], ["Oxígeno (O2)", "Metano (CH4)"], ["Nitrógeno (N2)", "Dióxido de carbono (CO2)"]]
  idx: uno_de([0,1,2])

enunciado: "La aparición de organismos fotosintéticos transformó la atmósfera al liberar ___ en grandes cantidades, reemplazando la abundancia de ___."

respuesta: tabla[idx][1]
tipo: completar
respuestas_validas: ["Oxígeno (O2)", "Dióxido de carbono (CO2)", "Metano (CH4)", "Nitrógeno (N2)"]

pasos:
  - "Identificar el gas producido por la fotosíntesis."
  - "Identificar el gas que era abundante antes de la fotosíntesis."

explicacion: |
  La Gran Oxidación fue un evento biológico que cambió la química planetaria, pasando de una atmósfera reductora a una oxidante.
```

### 3 — Comparación de gases traza
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "avanzado"
  tags: ["quimica_atmosferica", "evolucion"]

variables:
  comparativa: [["Metano (CH4)", "Oxígeno (O2)"], ["Dióxido de carbono (CO2)", "Nitrógeno (N2)"], ["Vapor de agua (H2O)", "Argón (Ar)"]]
  idx: uno_de([0,1,2])

enunciado: "Si comparamos la concentración de gases, un gas que era muy abundante en la atmósfera primitiva pero es hoy un gas traza es el {comparativa[idx][0]}, mientras que el {comparativa[idx][1]} es mayormente estable en la actualidad."

respuesta: comparativa[idx][0]
tipo: mc
opciones_explicitas: ["Metano (CH4)", "Dióxido de carbono (CO2)", "Vapor de agua (H2O)", "Oxígeno (O2)"]

explicacion: |
  Muchos gases que hoy son trazas (como el metano) eran componentes mayoritarios en la Tierra primitiva debido a la intensa actividad volcánica y la falta de sumideros oxidantes.
```

### 4 — Secuencia de evolución atmosférica
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["cronologia", "procesos"]

enunciado: "Ordena la evolución de la composición atmosférica desde la Tierra primitiva hasta la actualidad:"

opciones_explicitas: ["Atmósfera reductora (CH4, NH3, H2O)", "Atmósfera con presencia de O2 (Gran Oxidación)", "Atmósfera moderna (N2, O2, Ar)"]
respuesta: ["Atmósfera reductora (CH4, NH3, H2O)", "Atmósfera con presencia de O2 (Gran Oxidación)", "Atmósfera moderna (N2, O2, Ar)"]
tipo: ordenar

explicacion: |
  La secuencia lógica comienza con gases volcánicos y de origen primordial, sigue con la revolución biológica del oxígeno y culmina con la composición actual.
```

### 5 — El rol del Oxígeno
```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["biologia", "oxigeno"]

variables:
  caso: [[0.21, "21%"], [0.0004, "0.04%"], [0.0001, "0.0001%"]]
  idx: uno_de([0,1,2])

enunciado: "En la atmósfera actual, el porcentaje de oxígeno es aproximadamente del {caso[idx][0]} (valor decimal), lo que equivale al {caso[idx][1]} de la mezcla total."

respuesta: caso[idx][1]
tipo: input
tolerancia_abs: 0.01

explicacion: |
  El oxígeno es el segundo gas más abundante hoy en día, con una concentración cercana al 21%.
```