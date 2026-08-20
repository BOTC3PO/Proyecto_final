### 1 — El núcleo celular
```
metadata:
  materia: "biologia"
  tema: "organización_celular"
  nivel: "basico"
  tags: ["procariota", "eucariota", "nucleo"]

respuesta: "sin núcleo"
tipo: completar
respuestas_validas: ["sin núcleo", "sin nucleo"]

enunciado: "La principal diferencia estructural es que una célula procariota se caracteriza por no poseer ___."

explicacion: |
  Las células procariotas carecen de una envoltura nuclear, por lo que su material genético se encuentra libre en el citoplasma (en una región llamada nucleoide).
```

### 2 — Clasificación celular
```
metadata:
  materia: "biologia"
  tema: "organización_celular"
  nivel: "basico"
  tags: ["clasificacion", "eucariota", "procariota"]

variables:
  idx: uno_de([0, 1])
  escenario: [[0, "procariota", "bacteria"], [1, "eucariota", "animal"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["procariota", "eucariota"]

enunciado: "Si observamos una célula con un núcleo definido y organelos membranosos, estamos ante una célula de tipo {escenario[idx][2]}."

explicacion: |
  Las células eucariotas (como las animales o vegetales) poseen un núcleo que contiene el ADN, a diferencia de las procariotas.
```

### 3 — Organización interna
```
metadata:
  materia: "biologia"
  tema: "organización_celular"
  nivel: "intermedio"
  tags: ["organelos", "membranas", "procariota"]

respuesta: "menor complejidad"
tipo: mc
opciones_explicitas: ["mayor complejidad", "menor complejidad", "igual complejidad"]

enunciado: "En términos de organización interna y presencia de organelos membranosos, la célula procariota presenta una ___ en comparación con la eucariota."

explicacion: |
  Las procariotas son mucho más simples y no poseen organelos rodeados por membranas como mitocondrias o cloroplastos.
```

### 4 — Secuencia de complejidad
```
metadata:
  materia: "biologia"
  tema: "organización_celular"
  nivel: "intermedio"
  tags: ["evolucion", "orden", "estructuras"]

respuesta: ["nucleoide", "citoplasma", "membrana"]
tipo: ordenar
opciones_explicitas: ["nucleoide", "citoplasma", "membrana"]

enunciado: "Ordena las estructuras de una célula procariota desde el área donde se encuentra el material genético hacia el límite externo de la célula:"

explicacion: |
  En una procariota, el ADN está en el nucleoide, rodeado por el citoplasma, y todo está contenido por la membrana plasmática.
```

### 5 — Determinación de tipo celular
```
metadata:
  materia: "biologia"
  tema: "organización_celular"
  nivel: "avanzado"
  tags: ["diagnostico", "nucleo", "organelos"]

variables:
  idx: uno_de([0, 1])
  caso: [[0, "tiene núcleo", "eucariota"], [1, "no tiene núcleo", "procariota"]]

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

enunciado: "Si al analizar una muestra celular se determina que la célula {caso[idx][0]}, su clasificación es:"

explicacion: |
  La presencia o ausencia de un núcleo definido es el criterio fundamental para distinguir entre procariotas y eucariotas.
```