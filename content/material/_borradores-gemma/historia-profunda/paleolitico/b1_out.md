### 1 — El concepto de Paleolítico
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["prehistoria", "etapas"]

respuesta: "Paleolítico"
tipo: completar
respuestas_validas: ["Paleolítico"]

enunciado: "La etapa más larga de la prehistoria humana, caracterizada por el uso de herramientas de piedra tallada, se denomina ___."

explicacion: |
  El Paleolítico (del griego 'paleo', antiguo y 'lithos', piedra) es la primera etapa de la historia de la humanidad.
```

### 2 — Estilo de vida y economía
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["economia", "nomadismo"]

variables:
  escenario: uno_de([
    ["caza y recolección", "nómadas"],
    ["agricultura y ganadería", "sedentarios"],
    ["comercio de metales", "urbanos"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["nómadas", "sedentarios", "urbanos"]

enunciado: "Durante el Paleolítico, las sociedades humanas basaban su economía en la caza y la recolección, lo que las obligaba a ser ___."

explicacion: |
  Al no producir su propio alimento (agricultura), los grupos humanos debían desplazarse constantemente en busca de recursos, adoptando un estilo de vida nómada.
```

### 3 — Evolución de la tecnología lítica
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["tecnologia", "piedra"]

respuesta: "piedra tallada"
tipo: completar
respuestas_validas: ["piedra tallada"]

enunciado: "A diferencia del Neolítico donde la piedra se pulía, en el Paleolítico la principal técnica de fabricación consistía en la ___."

explicacion: |
  La tecnología paleolítica se define por la talla de la piedra (percusión) para crear bordes cortantes en herramientas como bifaces o lascas.
```

### 4 — Secuencia de la evolución humana
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["evolucion", "orden"]

respuesta: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]
tipo: ordenar
opciones_explicitas: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]

enunciado: "Ordene cronológicamente los siguientes homínidos, desde el más antiguo al más reciente:"

explicacion: |
  La evolución humana no fue lineal, pero este orden representa una secuencia temporal de aparición de los géneros y especies principales.
```

### 5 — El descubrimiento del fuego
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "avanzado"
  tags: ["cultura", "fuego"]

variables:
  caso: uno_de([
    ["cocinar alimentos", "socialización"],
    ["protección de depredadores", "luz"],
    ["calor en climas fríos", "cocción"]
  ])

respuesta: caso[0]
tipo: mc
opciones_explicitas: ["socialización", "cocción", "iluminación"]

enunciado: "El control del fuego fue un hito crucial. Además de la luz y el calor, su uso permitió principalmente la ___."

explicacion: |
  El control del fuego permitió cocinar los alimentos, lo que facilitó la digestión y la absorción de nutrientes, favoreciendo el desarrollo cerebral.
```