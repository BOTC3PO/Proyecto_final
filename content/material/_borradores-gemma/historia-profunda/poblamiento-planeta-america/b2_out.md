### 1 — La ruta de Bering
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["prehistoria", "migracion"]

respuesta: "Asia"
tipo: completar
respuestas_validas: ["Asia"]

enunciado: "Se cree que los primeros grupos humanos llegaron al continente americano cruzando el puente terrestre de Beringia desde ________."

explicacion: |
  La teoría más aceptada sugiere que durante las glaciaciones, el descenso del nivel del mar permitió la formación de un puente de tierra entre Asia y América.
```

### 2 — El puente de Beringia
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["geografia", "migracion"]

variables:
  escenario: uno_de([["puente terrestre", "Beringia"], ["paso marítimo", "Estrecho de Magallanes"], ["ruta costera", "Pacífico"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["puente terrestre", "paso marítimo", "ruta costera"]

enunciado: "El corredor que permitió el paso de humanos y megafauna desde Asia hacia América se conoce como {escenario[1]}."

explicacion: |
  El puente de Beringia era una masa de tierra que conectaba los dos continentes durante los periodos de máximo glaciar.
```

### 3 — Cronología del poblamiento
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["cronologia", "teorias"]

respuesta: 15000
tipo: input
tolerancia_abs: 5000

enunciado: "Aunque las fechas varían según la teoría, se estima que el poblamiento masivo comenzó hace aproximadamente ___ años."

pasos:
  - "Considerar el final de la última glaciación."
  - "Estimar el inicio de las migraciones hacia el sur del continente."

explicacion: |
  Si bien hay debates sobre teorías más antiguas (como la de Monte Verde), el consenso general sitúa las migraciones principales hace decenas de miles de años.
```

### 4 — El proceso migratorio
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["secuencia", "migracion"]

respuesta: ["Asia", "Beringia", "América"]
tipo: ordenar
opciones_explicitas: ["Asia", "Beringia", "América"]

enunciado: "Ordena la secuencia lógica del poblamiento de América según la teoría del Estrecho de Bering:"

explicacion: |
  La secuencia implica el punto de origen (Asia), el medio de tránsito (Beringia) y el destino (América).
```

### 5 — Factores del poblamiento
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["clima", "fauna"]

variables:
  caso: uno_de([["glaciación", "descenso del nivel del mar"], ["desierto", "aumento de temperatura"], ["inundación", "descenso del nivel del mar"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["descenso del nivel del mar", "aumento de temperatura", "cambio en la vegetación"]

enunciado: "La formación del puente de Beringia fue posible gracias a la {caso[0]}, lo que provocó un {caso[1]}."

explicacion: |
  Durante las glaciaciones, el agua se acumulaba en los glaciares, haciendo que el nivel del mar bajara y expusiera el suelo marino.
```