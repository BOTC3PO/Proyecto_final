### 1 — El papel del agua
```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["geografia", "rios"]

respuesta: "riego"
tipo: completar
respuestas_validas: ["riego"]

enunciado: "El asentamiento de las primeras civilizaciones cerca de grandes ríos permitió el desarrollo de la agricultura gracias al sistema de ___."

explicacion: |
  El acceso constante al agua permitió crear sistemas de riego para cultivar en zonas que de otro modo serían áridas.
```

### 2 — Factores de asentamiento
```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["geografia", "causas"]

variables:
  escenario: uno_de([
    ["Mesopotamia", "Tigris y Éufrates"],
    ["Egipto", "Nilo"],
    ["India", "Indo y Ganges"]
  ])

respuesta: escenario[0][1]
tipo: mc
opciones_explicitas: ["Mesopotamia, Tigris y Éufrates", "Egipto, Nilo", "India, Indo y Ganges"]

enunciado: "La civilización de {escenario[0][0]} se desarrolló principalmente a orillas de los ríos {escenario[0][1]}."

explicacion: |
  Cada gran civilización antigua estuvo ligada a un sistema fluvial específico que proporcionaba sustento.
```

### 3 — El ciclo de las crecidas
```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["agricultura", "suelo"]

respuesta: "fértiles"
tipo: completar
respuestas_validas: ["fértiles"]

enunciado: "Las inundaciones periódicas de los ríos depositaban sedimentos que hacían que las tierras fueran muy ___."

explicacion: |
  El limo o sedimento depositado por las crecidas enriquecía el suelo, permitiendo excedentes de producción.
```

### 4 — Ventajas de los ríos
```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["transporte", "comercio"]

respuesta: "transporte"
tipo: completar
respuestas_validas: ["transporte"]

enunciado: "Además de la agricultura, los ríos servían como una vía de ___ para el comercio entre diferentes asentamientos."

explicacion: |
  Los ríos funcionaban como las primeras "autopistas", facilitando el movimiento de personas y mercancías.
```

### 5 — Causas del surgimiento
```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "avanzado"
  tags: ["causas", "multicausalidad"]

respuesta: ["Agua para riego", "Tierras fértiles", "Transporte fluvial"]
tipo: ordenar
opciones_explicitas: ["Agua para riego", "Tierras fértiles", "Transporte fluvial"]

enunciado: "Ordena los tres factores principales que explican por qué las civilizaciones se asentaron junto a los ríos, desde el más vital para la supervivencia hasta el que facilita la expansión:"

pasos:
  - "1. Necesidad básica de supervivencia (agua para cultivos)."
  - "2. Calidad del suelo tras las crecidas."
  - "3. Facilidad de movimiento y comercio."

explicacion: |
  El surgimiento fue un proceso multicausal: el agua permite la vida, el suelo fértil permite el excedente y el río permite la conexión.
```