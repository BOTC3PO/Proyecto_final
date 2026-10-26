### 1 — El efecto Doppler de la luz
```
metadata:
  materia: "astronomia"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["astronomia", "cosmologia"]

variables:
  escenario: uno_de([["el espectro de la galaxia se desplaza hacia longitudes de onda más largas", "alejándose"], ["el espectro de la galaxia se desplaza hacia longitudes de onda más cortas", "acercándose"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["alejándose", "acercándose"]

enunciado: "Si observamos que {escenario[idx][0]}, esto indica que el objeto se está ___."

explicacion: |
  El corrimiento al rojo (redshift) ocurre cuando la longitud de onda de la luz se estira debido al movimiento de alejamiento, mientras que el corrimiento al azul (blueshift) ocurre cuando la longitud de onda se comprime debido al acercamiento.
```

### 2 — Interpretación de espectros
```
metadata:
  materia: "astronomia"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["espectroscopia", "astronomia"]

variables:
  observacion: uno_de([["redshift", "alejándose"], ["blueshift", "acercándose"]])
  idx: uno_de([0, 1])

respuesta: observacion[idx][1]
tipo: completar
respuestas_validas: ["alejándose", "acercándose"]

enunciado: "Un astrónomo detecta un fenómeno de {observacion[idx][0]} en una galaxia lejana. Esto significa que la galaxia está ___ del observador."

explicacion: |
  El término 'redshift' se asocia con el aumento de la longitud de onda (alejamiento) y 'blueshift' con la disminución (acercamiento).
```

### 3 — Movimiento relativo de galaxias
```
metadata:
  materia: "astronomia"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["galaxias", "cosmologia"]

variables:
  datos: [["Luz roja", "alejándose"], ["Luz azul", "acercándose"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["alejándose", "acercándose", "estacionaria"]

enunciado: "Si la luz emitida por un objeto llega con un tono hacia el extremo rojo del espectro, el movimiento es de ___."

explicacion: |
  El corrimiento al rojo es la evidencia fundamental de la expansión del universo, indicando que las galaxias se alejan de nosotros.
```

### 4 — El concepto de Redshift
```
metadata:
  materia: "astronomia"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "alejándose"
tipo: completar
respuestas_validas: ["alejándose", "acercándose"]

enunciado: "Cuando la longitud de onda de la luz de una estrella aumenta debido a su movimiento relativo, decimos que tiene un corrimiento al rojo, lo que significa que la estrella se está ___."

explicacion: |
  El aumento en la longitud de onda ($\lambda$) es la definición física del corrimiento al rojo.
```

### 5 — Identificación de movimiento
```
metadata:
  materia: "astronomia"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["espectro", "movimiento"]

variables:
  caso: uno_de([["azul", "acercándose"], ["rojo", "alejándose"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["acercándose", "alejándose"]

enunciado: "Si la luz de un objeto se desplaza hacia el color {caso[idx][0]}, el objeto se está ___."

explicacion: |
  El color azul tiene longitudes de onda más cortas, indicando acercamiento; el rojo, longitudes más largas, indicando alejamiento.
```