### 1 — Clasificación Celular
```
metadata:
  materia: "biologia"
  tema: "clasificacion_celular"
  nivel: "basico"
  tags: ["procariotas", "eucariotas"]

variables:
  escenario: uno_de([["Bacteria subtilis", "procariota"], ["Saccharomyces cerevisiae", "eucariota"], ["Escherichia coli", "procariota"]])
  idx: uno_de([0, 1, 2])

enunciado: "El organismo {escenario[idx][0]} presenta una organización celular caracterizada por ser {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["procariota", "eucariota"]

explicacion: |
  Los organismos procariotas carecen de un núcleo definido, mientras que los eucariotas poseen un núcleo rodeado por una membrana.
```

### 2 — Estructura del Material Genético
```
metadata:
  materia: "biologia"
  tema: "estructura_celular"
  nivel: "intermedio"
  tags: ["adn", "nucleo"]

variables:
  caso: uno_de([[["ADN circular libre en el citoplasma", "procariota"], ["ADN lineal dentro de un núcleo", "eucariota"]]])
  idx: uno_de([0, 1])

enunciado: "Si observamos un organismo cuyo material genético es {caso[idx][0]}, podemos clasificarlo como un organismo ___."

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["procariota", "eucariota"]

explicacion: |
  La presencia de un núcleo con ADN lineal es la característica distintiva de las células eucariotas.
```

### 3 — Organelos Celulares
```
metadata:
  materia: "biologia"
  tema: "organelos"
  nivel: "basico"
  tags: ["organelos", "mitocondria"]

variables:
  organelo: uno_de([["presencia de mitocondrias", "eucariota"], ["ausencia de organelos membranosos", "procariota"]])
  idx: uno_de([0, 1])

enunciado: "La {organelo} es un indicador de que la célula es de tipo ___."

respuesta: organelo[idx][1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

explicacion: |
  Las células procariotas no poseen organelos rodeados por membranas como las mitocondrias o el retículo endoplasmático.
```

### 4 — Tamaño y Complejidad
```
metadata:
  materia: "biologia"
  tema: "morfologia_celular"
  nivel: "basico"
  tags: ["tamaño", "complejidad"]

variables:
  dato: uno_de([["1.0 micrometros", "procariota"], ["100 micrometros", "eucariota"]])
  idx: uno_de([0, 1])

enunciado: "Un organismo con un diámetro de {dato[idx][0]} suele ser un organismo ___."

respuesta: dato[idx][1]
tipo: completar
respuestas_validas: ["procariota", "eucariota"]

explicacion: |
  Las células procariotas son generalmente mucho más pequeñas (1-5 µm) que las eucariotas (10-100 µm).
```

### 5 — Orden de Complejidad Evolutiva
```
metadata:
  materia: "biologia"
  tema: "evolucion_celular"
  nivel: "avanzado"
  tags: ["evolucion", "linajes"]

variables:
  secuencia: [["Procariota", "Eucariota", "Multicelularidad"]]
  idx: uno_de([0, 1, 2])

enunciado: "Ordena los niveles de complejidad biológica desde el más simple al más complejo según la escala evolutiva:"

respuesta: ["Procariota", "Eucariota", "Multicelularidad"]
tipo: ordenar
opciones_explicitas: ["Procariota", "Eucariota", "Multicelularidad"]

explicacion: |
  La evolución biológica muestra una progresión desde células simples sin núcleo (procariotas) hacia células complejas (eucariotas) y finalmente organismos multicelulares.
```