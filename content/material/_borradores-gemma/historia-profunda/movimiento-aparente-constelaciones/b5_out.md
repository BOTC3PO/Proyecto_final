### 1 — Estrellas de la Primavera
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "estaciones"]

variables:
  escenario: uno_de([["Orión", "Leo"], ["Sirio", "Tauro"], ["Spica", "Cáncer"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Leo", "Tauro", "Cáncer", "Orión"]

enunciado: "Durante la primavera en el hemisferio norte, la constelación que se encuentra en su punto más alto en el cielo es {escenario[idx][0]}."

explicacion: |
  Debido al movimiento de traslación de la Tierra, diferentes constelaciones son visibles en diferentes épocas del año. En primavera, la constelación de {escenario[idx][0]} es prominente.
```

### 2 — El Zodiaco y las Estaciones
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["zodiaco", "estaciones"]

variables:
  datos: [["verano", "Escorpio"], ["invierno", "Géminis"], ["otoño", "Libra"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["Escorpio", "Géminis", "Libra"]

enunciado: "Si estamos en la estación de {datos[idx][0]}, la constelación del zodiaco que es más visible hacia el mediodía es ___."

explicacion: |
  La posición del Sol en el zodiaco determina qué constelaciones son visibles durante el día y cuáles durante la noche en una estación específica.
```

### 3 — Identificación de Estrellas
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["estrellas", "noche"]

variables:
  estrellas: [["Sirio", "Canis Mayor"], ["Betelgeuse", "Orión"], ["Arcturus", "Boote"]]
  idx: uno_de([0, 1, 2])

respuesta: estrellas[idx][1]
tipo: mc
opciones_explicitas: ["Canis Mayor", "Orión", "Boote"]

enunciado: "La estrella {estrellas[idx][0]} es la estrella principal de la constelación de ___."

explicacion: |
  {estrellas[idx][0]} es una de las estrellas más brillantes y es el componente central de la constelación de {estrellas[idx][1]}.
```

### 4 — Secuencia de Constelaciones
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "avanzado"
  tags: ["secuencia", "ecliptic"]

variables:
  secuencia: [["Aries", "Tauro", "Géminis"], ["Cáncer", "Leo", "Virgo"], ["Libra", "Escorpio", "Sagitario"]]
  idx: uno_de([0, 1, 2])

respuesta: secuencia[idx]
tipo: ordenar
opciones_explicitas: ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario"]

enunciado: "Ordene las siguientes constelaciones según su orden de aparición en el zodíaco (eclíptica) para el grupo seleccionado:"

explicacion: |
  El orden de las constelaciones zodiacales sigue la trayectoria aparente del Sol a través del cielo.
```

### 5 — El Sol y la Constelación
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["sol", "ecliptic"]

variables:
  par: [["Junio", "Géminis"], ["Diciembre", "Sagitario"], ["Septiembre", "Virgo"]]
  idx: uno_de([0, 1, 2])

respuesta: par[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "Si el Sol se encuentra en la constelación de {par[idx][0]}, la constelación opuesta en el cielo nocturno será ___."

explicacion: |
  Cuando el Sol está en una constelación, esa constelación es invisible de noche. La constelación opuesta es la que se observa en su punto más alto durante la medianoche.
```