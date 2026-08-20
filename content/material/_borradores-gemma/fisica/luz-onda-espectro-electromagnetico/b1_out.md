### 1 — El espectro electromagnético
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["ondas", "luz", "electromagnetismo"]

tipo: mc
opciones_explicitas: ["Ondas de radio", "Rayos X", "Luz visible", "Ondas de radio, microondas, infrarrojo, luz visible, UV, rayos X, rayos gamma"]

enunciado: "El espectro electromagnético es el conjunto de todas las posibles frecuencias de radiación. ¿Cuál de las siguientes opciones describe correctamente el orden de las ondas desde las de menor energía a las de mayor energía?"

respuesta: "Ondas de radio, microondas, infrarrojo, luz visible, UV, rayos X, rayos gamma"

explicacion: |
  El espectro electromagnético se organiza según la frecuencia y la energía. Las ondas de radio tienen la longitud de onda más larga y menor energía, mientras que los rayos gamma tienen la frecuencia más alta y mayor energía.
```

### 2 — La naturaleza de la luz
```
metadata:
  materia: "fisica"
  tema: "naturaleza_onda"
  nivel: "basico"
  tags: ["onda", "electromagnetismo"]

tipo: vf
respuesta: falso

enunciado: "La luz es una onda mecánica que requiere de un medio material (como el aire o el agua) para poder propagarse."

explicacion: |
  Falso. La luz es una onda electromagnética, lo que significa que no necesita un medio material para viajar; puede propagarse en el vacío.
```

### 3 — El espectro visible
```
metadata:
  materia: "fisica"
  tema: "luz_visible"
  nivel: "basico"
  tags: ["color", "espectro"]

variables:
  colores: ["rojo", "naranja", "amarillo", "verde", "azul", "añil", "violeta"]
  idx: uno_de([0,1,2,3,4,5,6])

tipo: completar
respuestas_validas: ["rojo", "naranja", "amarillo", "verde", "azul", "añil", "violeta"]
respuesta: colores[idx]

enunciado: "En el espectro de la luz visible, el color que se encuentra en el extremo de las longitudes de onda más largas es el color ___."

explicacion: |
  El color {colores[idx]} tiene la longitud de onda más larga en el espectro visible, situándose en el extremo rojo.
```

### 4 — Relación frecuencia y longitud de onda
```
metadata:
  materia: "fisica"
  tema: "propiedades_ondas"
  nivel: "intermedio"
  tags: ["frecuencia", "longitud_de_onda"]

tipo: mc
opciones_explicitas: ["Directamente proporcional", "Inversamente proporcional", "No existe relación", "Depende del medio"]

enunciado: "En una onda electromagnética, la relación entre la frecuencia ($f$) y la longitud de onda ($\lambda$) es:"

respuesta: "Inversamente proporcional"

explicacion: |
  Dado que la velocidad de la luz $c = \lambda \cdot f$ es constante en el vacío, si la frecuencia aumenta, la longitud de onda debe disminuir para mantener la igualdad.
```

### 5 — Orden del espectro
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["orden", "espectro"]

tipo: ordenar
opciones_explicitas: ["Infrarrojo", "Luz visible", "Ultravioleta", "Rayos X"]
respuesta: ["Infrarrojo", "Luz visible", "Ultravioleta", "Rayos X"]

enunciado: "Ordene las siguientes radiaciones de menor frecuencia a mayor frecuencia:"

explicacion: |
  El orden correcto de menor a mayor frecuencia es: Infrarrojo, Luz visible, Ultravioleta y finalmente Rayos X.
```