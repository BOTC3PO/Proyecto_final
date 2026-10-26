### 1 — El origen de Mesopotamia
```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["mesopotamia", "rios"]

variables:
  escenario: uno_de([["Mesopotamia", "Tigris y Éufrates"], ["Egipto", "Nilo"], ["Indo", "Indo"]])
  idx: uno_de([0,1,2])

enunciado: "La civilización de {escenario[idx][0]} se desarrolló a orillas del río {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Tigris y Éufrates", "Nilo", "Indo", "Río Amarillo"]
```

### 2 — Geografía sagrada
```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["egipto", "nilo"]

enunciado: "El río que fue considerado una deidad y motor de la civilización egipcia es el ___."

respuestas_validas: ["Nilo"]
respuesta: "Nilo"
tipo: completar
```

### 3 — Identificación de regiones
```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["china", "civilizaciones"]

variables:
  datos: [["China", "Río Amarillo"], ["Mesopotamia", "Tigris"], ["Egipto", "Nilo"]]
  idx: uno_de([0,1,2])

enunciado: "Asocia la civilización con su río correspondiente: {datos[idx][0]} -> ___"

respuestas_validas: ["Río Amarillo", "Tigris", "Nilo"]
respuesta: datos[idx][1]
tipo: completar
```

### 4 — Civilizaciones y sus ríos
```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["ordenar", "geografia"]

enunciado: "Ordena las siguientes civilizaciones según el orden de su ubicación geográfica de norte a sur (considerando sus ríos principales):"

opciones_explicitas: ["Mesopotamia", "Egipto", "Indo"]
respuesta: ["Mesopotamia", "Egipto", "Indo"]
tipo: ordenar
```

### 5 — El gran desafío de los ríos
```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["identificacion"]

variables:
  pares: [["Egipto", "Nilo"], ["China", "Yangtsé"], ["Mesopotamia", "Tigris"]]
  idx: uno_de([0,1,2])

enunciado: "Si estamos analizando la región de {pares[idx][0]}, el río principal es el ___."

respuestas_validas: ["Nilo", "Yangtsé", "Tigris"]
respuesta: pares[idx][1]
tipo: completar
```