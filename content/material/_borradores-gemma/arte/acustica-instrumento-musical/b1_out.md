### 1 — El origen del sonido
```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "basico"
  tags: ["acustica", "sonido", "vibracion"]

respuesta: "vibracion"
tipo: completar
respuestas_validas: ["vibracion", "vibración"]

enunciado: "El sonido en un instrumento musical se produce mediante la ________ de un cuerpo u objeto."

explicacion: |
  El sonido es una onda mecánica que se propaga a través de un medio (como el aire) y es originado por la vibración de un objeto.
```

### 2 — Clasificación de instrumentos
```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "basico"
  tags: ["clasificacion", "instrumentos"]

variables:
  escenario: uno_de([
    ["trompeta", "viento"],
    ["guitarra", "cuerda"],
    ["timbal", "percusion"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["viento", "cuerda", "percusion"]

enunciado: "Un instrumento de tipo {escenario[0]} se clasifica principalmente como un instrumento de ________."

explicacion: |
  La clasificación tradicional de instrumentos se basa en el elemento que produce la vibración: aire (viento), cuerdas (cuerda) o membranas/cuerpos sólidos (percusión).
```

### 3 — Propiedades del sonido
```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "basico"
  tags: ["frecuencia", "tono"]

respuesta: verdadero
tipo: vf

enunciado: "¿La frecuencia de una onda sonora determina la percepción del tono (agudo o grave)?"

explicacion: |
  Verdadero. A mayor frecuencia, el sonido se percibe más agudo; a menor frecuencia, más grave.
```

### 4 — El proceso de resonancia
```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "intermedio"
  tags: ["resonancia", "amplificacion"]

respuesta: "caja de resonancia"
tipo: completar
respuestas_validas: ["caja de resonancia", "caja de resonancia acústica"]

enunciado: "En una guitarra acústica, el sonido producido por la cuerda es amplificado por la ________."

explicacion: |
  La caja de resonancia es el componente diseñado para amplificar las vibraciones de las cuerdas mediante la resonancia del aire en su interior.
```

### 5 — El espectro del sonido
```
metadata:
  materia: "arte"
  tema: "acustica_instrumento_musical"
  nivel: "intermedio"
  tags: ["armonicos", "timbre"]

respuesta: ["frecuencia fundamental", "armónicos"]
tipo: ordenar

opciones_explicitas: ["frecuencia fundamental", "armónicos"]

enunciado: "Ordena los componentes que conforman el espectro de un sonido complejo, desde el componente más básico al que define el timbre:"

pasos:
  - "Identificar la nota base."
  - "Identificar los sobretonos que le dan color."

explicacion: |
  El sonido de un instrumento no es una sola frecuencia, sino una combinación de la frecuencia fundamental (que determina la nota) y una serie de armónicos (que determinan el timbre).
```