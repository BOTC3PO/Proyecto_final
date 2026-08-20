### 1 — Origen de las civilizaciones americanas
```
metadata:
  materia: "historia"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["america", "origen"]

respuesta: "independiente"
tipo: "completar"
respuestas_validas: ["independiente"]

enunciado: "Las civilizaciones de América, como Caral y los Olmecas, se desarrollaron de forma ___ a las civilizaciones de Eurasia y África."

explicacion: |
  Las civilizaciones americanas surgieron de manera autónoma, sin contacto con el Viejo Mundo en sus etapas formativas.
```

### 2 — La cultura Caral
```
metadata:
  materia: "historia"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["andes", "caral"]

variables:
  datos: [["Caral", "Perú", "más antigua"], ["Chavín", "Perú", "formadora"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: "mc"
opciones_explicitas: ["Caral", "Chavín", "Moche", "Nazca"]

enunciado: "La civilización de {datos[idx][0]} se encuentra ubicada en el actual territorio de {datos[idx][1]} y es considerada una de las más ___ del continente americano."

explicacion: |
  Caral es la civilización más antigua de América, situada en la costa central de Perú.
```

### 3 — Los Olmecas y su legado
```
metadata:
  materia: "historia"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["mesoamerica", "olmecas"]

respuesta: "cabezas colosales"
tipo: "mc"
opciones_explicitas: ["pirámides escalonadas", "cabezas colosales", "códices de papel", "calendario solar"]

enunciado: "La cultura Olmeca, considerada la 'cultura madre' de Mesoamérica, es famosa por la escultura de sus ___."

explicacion: |
  Los Olmecas dejaron grandes monumentos de piedra conocidos como cabezas colosales.
```

### 4 — Cronología de Mesoamérica
```
metadata:
  materia: "historia"
  tema: "civilizaciones_antiguas"
  nivel: "avanzado"
  tags: ["mesoamerica", "ordenar"]

respuesta: ["Olmecas", "Mayas", "Aztecas"]
tipo: "ordenar"
opciones_explicitas: ["Olmecas", "Mayas", "Aztecas"]

enunciado: "Ordena cronológicamente las siguientes culturas de Mesoamérica, de la más antigua a la más reciente:"

pasos:
  - "Identifica la cultura madre."
  - "Ubica el periodo de esplendor clásico."
  - "Ubica el periodo de expansión imperialista."

explicacion: |
  El orden correcto es: Olmecas (Preclásico), Mayas (Clásico/Postclásico) y Aztecas (Posclásico).
```

### 5 — El sistema de escritura Maya
```
metadata:
  materia: "historia"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["mayas", "escritura"]

respuesta: "glifos"
tipo: "completar"
respuestas_validas: ["glifos"]

enunciado: "Los mayas desarrollaron un complejo sistema de escritura basado en ___."

explicacion: |
  El sistema de escritura maya era logosilábico, compuesto por glifos que representaban palabras o sonidos.
```