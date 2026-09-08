# Química — Geometría molecular: teoría VSEPR (cuestionario, 20 preguntas VBLang)

> Tema: `QG2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Principio de la teoría VSEPR

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["teoria", "vsepr"]

respuesta: verdadero
tipo: vf

enunciado: "La teoría VSEPR establece que los pares de electrones alrededor de un átomo central se repelen entre sí y se acomodan lo más lejos posible para minimizar la repulsión."

explicacion: |
  Correcto. La repulsión electrónica es el principio que determina la forma de las moléculas.
```

### 2 — Geometría según pares de electrones

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["geometria", "vsepr"]

variables:
  datos: [[2, "lineal"], [3, "trigonal plana"], [4, "tetraédrica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["lineal", "trigonal plana", "tetraédrica"]

enunciado: "Si un átomo central tiene {datos[idx][0]} pares de electrones enlazantes y ningún par libre, la geometría resultante es..."

explicacion: |
  La geometría depende del número de dominios electrónicos. Con {datos[idx][0]} dominios, la forma es {datos[idx][1]}.
```

### 3 — Ángulo y geometría lineal

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["geometria", "angulos"]

respuesta: "lineal"
tipo: completar
respuestas_validas:
  - "lineal"

enunciado: "La geometría con 2 pares de electrones alrededor del centro y un ángulo de enlace de 180 grados es la ___."

explicacion: |
  Con dos dominios electrónicos, la máxima separación posible es un ángulo de 180°: geometría lineal.
```

### 4 — Geometría del CO2

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["moleculas", "co2"]

respuesta: verdadero
tipo: vf

enunciado: "La molécula de dióxido de carbono (CO2) posee una geometría molecular lineal."

explicacion: |
  El carbono central tiene dos dobles enlaces con los oxígenos y ningún par libre, lo que da una geometría lineal.
```

### 5 — Ángulo de la geometría tetraédrica

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["angulos", "tetraedrica"]

respuesta: "109.5 grados"
tipo: mc
opciones_explicitas: ["109.5 grados", "180 grados", "120 grados", "90 grados"]

enunciado: "¿Cuál es el ángulo de enlace típico en una molécula con geometría tetraédrica perfecta?"

explicacion: |
  En una geometría tetraédrica, los cuatro pares de electrones se orientan hacia los vértices de un tetraedro, con ángulo de 109,5°.
```

### 6 — Repulsión de pares libres

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["vsepr", "repulsion"]

respuesta: verdadero
tipo: vf

enunciado: "Un par de electrones libre (no enlazante) ocupa espacio alrededor del átomo central igual que un enlace."

explicacion: |
  Correcto — y además, los pares libres repelen con MÁS fuerza que los enlazantes, ocupando incluso un poco más de volumen.
```

### 7 — Geometría molecular según la molécula

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["geometria", "vsepr"]

variables:
  escenario: [["NH3", "piramidal trigonal"], ["H2O", "angular"]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["piramidal trigonal", "angular", "lineal", "tetraédrica"]

enunciado: "Dada la molécula {escenario[idx][0]}, ¿cuál es su geometría molecular?"

explicacion: |
  La molécula {escenario[idx][0]} tiene geometría {escenario[idx][1]}.
```

### 8 — Geometría del agua

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["h2o", "geometria"]

respuesta: falso
tipo: vf

enunciado: "La molécula de agua (H2O) tiene una geometría lineal."

explicacion: |
  Falso. El oxígeno tiene dos pares enlazantes y dos pares libres, lo que da una geometría angular.
```

### 9 — Pares en el agua

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["h2o", "electrones"]

respuesta: "libres"
tipo: completar
respuestas_validas:
  - "libres"

enunciado: "El oxígeno del agua tiene 4 pares de electrones alrededor: 2 enlaces O-H y 2 pares ___."

explicacion: |
  Los dos pares que no forman enlaces se llaman pares de electrones libres.
```

### 10 — Distorsión de ángulos

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["vsepr", "angulos"]

respuesta: verdadero
tipo: vf

enunciado: "Los pares libres repelen con más fuerza que los pares enlazantes, por eso el ángulo de una molécula como el agua es menor al de un tetraedro puro."

explicacion: |
  Correcto. La mayor repulsión de los pares libres "empuja" a los pares enlazantes, reduciendo el ángulo de enlace observado.
```

### 11 — Polaridad del CO2

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["vsepr", "polaridad", "co2"]

respuesta: verdadero
tipo: vf

enunciado: "El CO2 tiene enlaces polares (C=O) pero la molécula en conjunto es no polar, debido a su geometría lineal simétrica."

explicacion: |
  Aunque los enlaces C=O son polares, la geometría lineal hace que los vectores de momento dipolar se cancelen: momento dipolar neto cero.
```

### 12 — Polaridad del agua

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["vsepr", "polaridad", "h2o"]

respuesta: verdadero
tipo: vf

enunciado: "El agua (H2O) tiene enlaces polares y es una molécula polar en su conjunto, debido a su geometría angular asimétrica."

explicacion: |
  La geometría angular del agua impide que los momentos dipolares de los enlaces O-H se cancelen: queda un momento dipolar neto.
```

### 13 — Simetría en el CO2

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "avanzado"
  tags: ["vsepr", "co2", "dipolo"]

respuesta: "Los dipolos de los enlaces C=O se cancelan debido a la geometría lineal simétrica."
tipo: mc
opciones_explicitas: ["Los dipolos de los enlaces C=O se cancelan debido a la geometría lineal simétrica.", "La electronegatividad del carbono es igual a la del oxígeno.", "Los electrones se distribuyen de forma uniforme en toda la molécula.", "La geometría es angular y no lineal."]

enunciado: "¿Por qué el CO2 NO es polar, a pesar de tener enlaces polares?"

explicacion: |
  Para que una molécula con enlaces polares sea no polar, la disposición espacial debe ser tal que los vectores de los momentos dipolares se anulen entre sí — eso pasa en el CO2 por su simetría lineal.
```

### 14 — Concepto de polaridad molecular

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["polaridad", "dipolo"]

respuesta: "cancelan"
tipo: completar
respuestas_validas:
  - "cancelan"

enunciado: "Una molécula es polar en conjunto cuando sus momentos dipolares individuales no se ___."

explicacion: |
  Si los momentos dipolares de los enlaces no se cancelan por la geometría de la molécula, queda un momento dipolar neto: la molécula es polar.
```

### 15 — Enlaces polares y polaridad molecular

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["vsepr", "polaridad", "enlace_polar"]

respuesta: falso
tipo: vf

enunciado: "Cualquier molécula que posea al menos un enlace polar es, por definición, una molécula polar."

explicacion: |
  Falso. Depende también de la geometría: si es muy simétrica (como CO2 o CH4), los enlaces polares se pueden cancelar entre sí.
```

### 16 — Significado de VSEPR

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["teoria", "vsepr"]

respuesta: "Repulsión de pares de electrones de la capa de valencia"
tipo: mc
opciones_explicitas: ["Repulsión de pares de electrones de la capa de valencia", "Velocidad de electrones en la capa de valencia", "Vibración de electrones en la capa de valencia", "Valencia de electrones por repulsión"]

enunciado: "¿Qué significa la sigla VSEPR (RPECV en español) respecto a la disposición de los electrones en una molécula?"

explicacion: |
  VSEPR = "Valence Shell Electron Pair Repulsion". Los pares de electrones de la capa de valencia se repelen y buscan la máxima distancia posible entre sí.
```

### 17 — Geometría trigonal

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["geometria", "angulos"]

respuesta: "plana"
tipo: completar
respuestas_validas:
  - "plana"

enunciado: "La geometría con 3 pares de electrones enlazantes y un ángulo de 120 grados es la trigonal ___."

explicacion: |
  Con 3 grupos de electrones, la forma que minimiza la repulsión es un triángulo equilátero en un plano: trigonal plana.
```

### 18 — Geometría del metano

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["molecula", "metano"]

respuesta: verdadero
tipo: vf

enunciado: "¿El metano (CH4) tiene una geometría molecular tetraédrica?"

explicacion: |
  Verdadero. El carbono tiene 4 pares enlazantes con los hidrógenos y ningún par libre: tetraedro perfecto, ángulos de 109,5°.
```

### 19 — Determinación de geometría con pares libres

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "avanzado"
  tags: ["vsepr", "calculo"]

variables:
  escenario: [[4, 1, "piramidal trigonal"], [4, 2, "angular"], [4, 0, "tetraedrica"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][2]
tipo: mc
opciones_explicitas: ["piramidal trigonal", "angular", "tetraedrica"]

enunciado: "Si una molécula tiene {escenario[idx][0]} pares de electrones en total alrededor del átomo central, de los cuales {escenario[idx][1]} son pares libres, ¿cuál es su geometría molecular?"

explicacion: |
  Con 4 pares totales: 1 libre da piramidal trigonal (NH₃), 2 libres dan angular (H₂O), 0 libres dan tetraédrica (CH₄).
```

### 20 — Ejemplo de molécula polar por geometría

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["polaridad", "ejemplos"]

respuesta: "NH3 (amoníaco)"
tipo: mc
opciones_explicitas: ["NH3 (amoníaco)", "CO2 (dióxido de carbono)", "CH4 (metano)", "BF3 (trifluoruro de boro)"]

enunciado: "¿Cuál de las siguientes moléculas es polar debido a una geometría asimétrica (piramidal trigonal, con un par libre)?"

explicacion: |
  El NH₃ tiene geometría piramidal trigonal (asimétrica, por el par libre del nitrógeno), lo que deja un momento dipolar neto. CO2, CH4 y BF3 son todas geometrías simétricas que cancelan la polaridad.
```
