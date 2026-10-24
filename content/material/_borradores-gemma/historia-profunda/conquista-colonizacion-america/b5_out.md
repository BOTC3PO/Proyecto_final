### 1 — Origen de cultivos americanos
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["intercambio_colombino", "botanica"]

variables:
  escenario: [[ "maíz", "América" ], [ "trigo", "Eurasia" ], [ "papa", "América" ], [ "arroz", "Eurasia" ]]
  idx: uno_de([0,1,2,3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["América", "Eurasia", "África", "Oceanía"]

enunciado: "El {escenario[idx][0]} fue un producto fundamental que llegó al Viejo Mundo proveniente de _______."

explicacion: |
  El intercambio colombino permitió que productos como el {escenario[idx][0]} transformaran la dieta en Europa y Asia.
```

### 2 — Identificación de productos europeos
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["intercambio_colombino", "animales"]

variables:
  escenario: [[ "caballo", "Eurasia" ], [ "pavo", "América" ], [ "cerdo", "Eurasia" ], [ "tomate", "América" ]]
  idx: uno_de([0,1,2,3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["América", "Eurasia", "Oceanía", "África"]

enunciado: "En el proceso de colonización, el {escenario[idx][0]} fue un elemento que llegó a América desde _______."

explicacion: |
  Los animales domésticos como el {escenario[idx][0]} fueron introducidos por los europeos y cambiaron el paisaje americano.
```

### 3 — Clasificación de productos
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["intercambio_colombino", "logica"]

variables:
  escenario: [[ "Cacao", "América" ], [ "Café", "Eurasia" ], [ "Azúcar", "Eurasia" ], [ "Tabaco", "América" ]]
  idx: uno_de([0,1,2,3])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["América", "Eurasia"]

enunciado: "El producto {escenario[idx][0]} es originario de _______."

explicacion: |
  El intercambio fue bidireccional: el {escenario[idx][0]} fluyó de un continente al otro.
```

### 4 — Secuencia de llegada
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "avanzado"
  tags: ["intercambio_colombino", "orden"]

variables:
  escenario: [[ "Maíz, Trigo, Caballo", "América, Eurasia, Eurasia" ], [ "Papa, Café, Cerdo", "América, Eurasia, Eurasia" ]]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: ordenar
opciones_explicitas: ["América, Eurasia, Eurasia", "Eurasia, América, América", "Eurasia, Eurasia, América"]

enunciado: "Ordena el origen de los siguientes productos: {escenario[idx][0]}"

explicacion: |
  La secuencia correcta refleja qué productos venían de América y cuáles de Eurasia.
```

### 5 — El impacto de los productos
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["intercambio_colombino", "impacto"]

variables:
  escenario: [[ "Cebolla", "Eurasia" ], [ "Cacao", "América" ], [ "Cangrejo", "América" ], [ "Cabra", "Eurasia" ]]
  idx: uno_de([0,1,2,3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["América", "Eurasia"]

enunciado: "El {escenario[idx][0]} es un ejemplo de producto que se originó en _______."

explicacion: |
  El intercambio biológico alteró la demografía y la economía global.
```