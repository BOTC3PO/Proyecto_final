### 1 — Escritura Cuneiforme
```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["mesopotamia", "sumerios"]

variables:
  escenario: uno_de([["cuneiforme", "Mesopotamia"], ["jeroglíficos", "Egipto"], ["logogramas", "China"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Mesopotamia", "Egipto", "China", "India"]

enunciado: "El sistema de escritura basado en marcas en forma de cuña se desarrolló en la región de {escenario[idx][0]}."

explicacion: |
  La escritura cuneiforme fue desarrollada por los sumerios en la antigua Mesopotamia alrededor del 3200 a.C.
```

### 2 — Jeroglíficos Egipcios
```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["egipto", "jeroglíficos"]

variables:
  escenario: uno_de([["jeroglíficos", "Egipto"], ["cuneiforme", "Mesopotamia"]])
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Egipto", "Mesopotamia", "Fenicia", "China"]

enunciado: "Los {escenario[idx][0]} fueron utilizados por las civilizaciones del valle del Nilo."

explicacion: |
  Los jeroglíficos egipcios combinaban logogramas y signos fonéticos para representar el lenguaje.
```

### 3 — Origen de la Escritura
```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["cronologia", "origen"]

variables:
  escenario: uno_de([["Mesopotamia", "Sumerios"], ["Egipto", "Egipcios"]])
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["Sumerios", "Egipcios"]

enunciado: "La escritura en la región de {escenario[idx][0]} fue desarrollada originalmente por los {___}."

explicacion: |
  La transición de la proto-escritura a sistemas complejos fue fundamental para la administración de las primeras ciudades-estado.
```

### 4 — Evolución de Sistemas
```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["orden", "evolucion"]

variables:
  escenario: uno_de([["Tokens", "Escritura Cuneiforme", "Tablillas"], ["Pictogramas", "Jeroglíficos", "Papiro"]])
  idx: uno_de([0,1])

respuesta: ["Tokens", "Escritura Cuneiforme", "Tablillas"]
tipo: ordenar
opciones_explicitas: ["Tokens", "Escritura Cuneiforme", "Tablillas"]

enunciado: "Ordena la evolución de los soportes y formas de registro en el contexto de {escenario[idx][0]} (si es el caso):"

explicacion: |
  El proceso comenzó con objetos de arcilla (tokens) para contar, evolucionando hacia signos abstractos en tablillas.
```

### 5 — El Alfabeto Fenicio
```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["fenicia", "alfabeto"]

variables:
  escenario: uno_de([["alfabético", "Fenicia"], ["logográfico", "China"]])
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Fenicia", "China", "Mesopotamia", "Egipto"]

enunciado: "A diferencia de los sistemas complejos, el sistema {escenario[idx][0]} fue perfeccionado por los fenicios en la región de {escenario[idx][1]}."

explicacion: |
  El alfabeto fenicio fue un sistema fonético que facilitó el comercio y fue la base de muchos alfabetos modernos.
```