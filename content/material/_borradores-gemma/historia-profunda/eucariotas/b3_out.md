### 1 — Origen mitocondrial
```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "basico"
  tags: ["mitocondria", "evolucion"]

variables:
  escenario: uno_de([["ADN circular", "ADN lineal"], ["fisión binaria", "mitosis"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["ADN circular", "ADN lineal", "fisión binaria", "mitosis"]

enunciado: "La evidencia de que las mitocondrias fueron bacterias es que poseen un tipo de ADN ___ y se reproducen mediante ___."

explicacion: |
  Las mitocondrias poseen ADN circular y se dividen por fisión binaria, características típicas de las procariotas.
```

### 2 — Evidencia genética
```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "intermedio"
  tags: ["adn", "cloroplastos"]

variables:
  tipo_adn: uno_de(["circular", "lineal"])

respuesta: tipo_adn
tipo: completar
respuestas_validas: ["circular", "lineal"]

enunciado: "A diferencia del ADN del núcleo celular, el ADN de los cloroplastos es de forma ___."

explicacion: |
  El ADN de los organelos semiautónomos es circular, similar al de las bacterias actuales.
```

### 3 — El proceso de división
```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "basico"
  tags: ["reproduccion", "organelos"]

respuesta: "fisión binaria"
tipo: completar
respuestas_validas: ["fisión binaria", "mitosis", "meiosis"]

enunciado: "El mecanismo de reproducción de las mitocondrias es la ___."

explicacion: |
  Las mitocondrias no se crean de la nada, sino que se dividen mediante fisión binaria, igual que los procariontes.
```

### 4 — Comparativa estructural
```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "intermedio"
  tags: ["membrana", "evolucion"]

variables:
  membrana_tipo: uno_de(["doble", "simple"])

respuesta: membrana_tipo
tipo: mc
opciones_explicitas: ["doble", "simple"]

enunciado: "La teoría endosimbiótica sugiere que los organelos como los cloroplastos poseen una ___ membrana, la cual sería el remanente de la membrana de la bacteria original."

explicacion: |
  La presencia de una doble membrana es una evidencia clave de la captura de una célula por otra.
```

### 5 — Secuencia evolutiva
```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "avanzado"
  tags: ["secuencia", "evolucion"]

respuesta: ["Célula procariota", "Fagocitosis", "Célula eucariota con mitocondria"]
tipo: ordenar
opciones_explicitas: ["Célula procariota", "Fagocitosis", "Célula eucariota con mitocondria", "Célula procariota", "Fagocitosis", "Célula eucariota con mitocondria"]

enunciado: "Ordena los eventos que explican la aparición de la mitocondria según la teoría endosimbiótica:"

pasos:
  - "Una bacteria aeróbica es ingerida por una célula hospedadora."
  - "Se establece una relación de simbiosis."
  - "La bacteria se convierte en un organelo permanente."

explicacion: |
  El proceso implica la ingestión (fagocitosis) de una bacteria que, al no ser digerida, establece una simbiosis que da origen al organelo.
```