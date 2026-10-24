### 1 — La escala de Mohs
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["dureza", "mohs"]

variables:
  mineral_datos: [["talco", "1"], ["yeso", "2"], ["calcita", "3"], ["fluorita", "4"], ["apatita", "5"]]
  idx: uno_de([0,1,2,3,4])

enunciado: "Si tenemos un mineral cuya dureza es la que corresponde al elemento {mineral_datos[idx][0]}, su valor en la escala de Mohs es ___."

respuestas_validas: ["1", "2", "3", "4", "5"]
respuesta: mineral_datos[idx][1]
tipo: completar

explicacion: |
  La escala de Mohs es una escala de dureza relativa. El {mineral_datos[idx][0]} tiene un valor de {mineral_datos[idx][1]}.
```

### 2 — El brillo mineral
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["brillo"]

enunciado: "¿Cómo se denomina a la propiedad que describe la forma en que la luz se refleja en la superficie de un mineral?"

opciones_explicitas: ["Transparencia", "Brillo", "Clivaje", "Dureza"]
respuesta: "Brillo"
tipo: mc

explicacion: |
  El brillo es la propiedad que indica la calidad de la reflexión de la luz en la superficie del mineral.
```

### 3 — Identificación por raya
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["raya", "color"]

variables:
  escenario: [["Hematita", "Rojo"], ["Pirita", "Negro"], "Calcopirita", "Malaquita"]
  idx: uno_de([0,1,2])

enunciado: "Al realizar la prueba de la raya sobre una placa de porcelana sin esmaltar con el mineral {escenario[idx][0]}, el color resultante es ___."

respuestas_validas: ["Rojo", "Negro", "Verde", "Amarillo"]
respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  La raya es el color del polvo del mineral y es una propiedad más constante que el color externo del espécimen.
```

### 4 — Fractura vs Clivaje
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["fractura", "clivaje"]

enunciado: "Un mineral que se rompe siguiendo planos de debilidad cristalográfica bien definidos presenta ___."

opciones_explicitas: ["Fractura concoidea", "Clivaje", "Dureza", "Brillo metálico"]
respuesta: "Clivaje"
tipo: mc

explicacion: |
  El clivaje ocurre cuando el mineral se rompe a lo largo de planos de debilidad en su estructura atómica.
```

### 5 — Secuencia de dureza
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["mohs", "ordenar"]

enunciado: "Ordene los siguientes minerales de menor a mayor dureza según la escala de Mohs:"

opciones_explicitas: ["Talco", "Calcita", "Cuarzo", "Diamante"]
respuesta: ["Talco", "Calcita", "Cuarzo", "Diamante"]
tipo: ordenar

explicacion: |
  La secuencia correcta es: Talco (1), Calcita (3), Cuarzo (7) y Diamante (10).
```