### 1 — Origen primordial
```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "basico"
  tags: ["big_bang", "hidrogeno", "helio"]

respuesta: "Big Bang"
tipo: completar
respuestas_validas: ["Big Bang"]

enunciado: "El hidrógeno y el helio son los elementos más abundantes del universo y su origen se remonta al ___."

explicacion: |
  En los primeros minutos del universo, la nucleosíntesis primordial produjo principalmente núcleos de hidrógeno y helio.
```

### 2 — Nucleosíntesis estelar
```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "intermedio"
  tags: ["estrellas", "nucleosintesis", "elementos_pesados"]

variables:
  escenario: uno_de([["estrellas", "elementos pesados"], ["big bang", "hidrógeno"], ["supernovas", "metales"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["elementos pesados", "hidrógeno", "metales"]

enunciado: "Si el hidrógeno y el helio provienen del Big Bang, ¿de dónde proviene la mayoría de los elementos más complejos de la tabla periódica?"

explicacion: |
  Las estrellas actúan como reactores nucleares que fusionan elementos ligeros para crear elementos más pesados.
```

### 3 — Abundancia química
```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "basico"
  tags: ["abundancia", "hidrogeno", "helio"]

variables:
  datos: [["Hidrógeno", 1], ["Helio", 2]]
  idx: uno_de([0,1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Hidrógeno", "Helio", "Carbono", "Oxígeno"]

enunciado: "Considerando la abundancia en el universo, si el elemento seleccionado es el {datos[idx][0]}, este es el más abundante."

explicacion: |
  El hidrógeno es el elemento número uno en abundancia cósmica, seguido por el helio.
```

### 4 — El ciclo de vida de los elementos
```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "avanzado"
  tags: ["orden", "evolucion_estelar"]

respuesta: ["Big Bang", "Formación de estrellas", "Fusión estelar", "Supernovas"]
tipo: ordenar
opciones_explicitas: ["Big Bang", "Formación de estrellas", "Fusión estelar", "Supernovas"]

enunciado: "Ordena cronológicamente los eventos que explican la presencia de elementos pesados en el universo:"

explicacion: |
  Primero surge la materia básica en el Big Bang, luego se forman las estrellas donde ocurre la fusión, y finalmente las explosiones estelares dispersan los elementos pesados.
```

### 5 — Carga eléctrica y protones
```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "basico"
  tags: ["atomo", "proton"]

variables:
  atomo: uno_de([["Hidrógeno", 1], ["Helio", 2]])
  idx: uno_de([0,1])

respuesta: atomo[idx][1]

tipo: input
tolerancia_abs: 0

enunciado: "Un átomo de {atomo[idx][0]} en su estado fundamental tiene exactamente {atomo[idx][1]} protones en su núcleo."

explicacion: |
  El número atómico define la cantidad de protones. El hidrógeno tiene 1 y el helio tiene 2.
```