### 1 — Clasificación celular básica
```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "basico"
  tags: ["celulas", "nucleo"]

variables:
  escenario: uno_de([["presencia de nucleo definido", "eucariota"], ["ausencia de nucleo definido", "procariota"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

enunciado: "Si una célula presenta {escenario[idx][0]}, se trata de una célula tipo ___."

explicacion: |
  Las células eucariotas se caracterizan por tener su material genético rodeado por una membrana nuclear, mientras que las procariotas lo tienen libre en el citoplasma.
```

### 2 — Organelos membranosos
```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "basico"
  tags: ["organelos", "mitocondria"]

variables:
  organelo: uno_de([["mitocondria", "eucariota"], ["ribosomas sin membrana", "procariota"]])
  tipo_cel: uno_de([["eucariota", "eucariota"], ["procariota", "procariota"]])
  idx: uno_de([0, 1])

respuesta: tipo_cel[idx]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

enunciado: "La presencia de {organelo[idx][0]} es una característica propia de la célula ___."

explicacion: |
  Los organelos membranosos como las mitocondrias son exclusivos de las células eucariotas. Las procariotas carecen de compartimentos internos delimitados por membranas.
```

### 3 — Complejidad estructural
```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "intermedio"
  tags: ["estructura", "complejidad"]

variables:
  caso: uno_de([["organelos complejos", "eucariota"], ["estructura simple", "procariota"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["eucariota", "procariota"]

enunciado: "Una célula con {caso[idx][0]} se clasifica como ___."

explicacion: |
  La complejidad estructural y la compartimentación celular son los rasgos distintivos de los organismos eucariotas.
```

### 4 — Tamaño y escala
```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "intermedio"
  tags: ["tamaño", "escala"]

variables:
  escala: uno_de([["10-100 micrometros", "eucariota"], ["1-5 micrometros", "procariota"]])
  idx: uno_de([0, 1])

respuesta: escala[idx][1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

enunciado: "Si observamos una célula con un diámetro de {escala[idx][0]}, estamos ante una célula ___."

explicacion: |
  Las células eucariotas son generalmente mucho más grandes (10-100 µm) que las procariotas (1-5 µm) debido a su mayor complejidad interna.
```

### 5 — Secuencia evolutiva
```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "avanzado"
  tags: ["evolucion", "linaje"]

variables:
  orden: ["procariota", "eucariota"]
  idx: uno_de([0, 1])

respuesta: orden

tipo: ordenar
opciones_explicitas: ["procariota", "eucariota"]

enunciado: "Ordena los tipos celulares según la aparición evolutiva (de la más antigua a la más reciente):"

explicacion: |
  Las células procariotas aparecieron primero en la historia de la vida, seguidas por la aparición de las células eucariotas mediante procesos como la endosimbiosis.
```