### 1 — El concepto de expansión
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["cosmologia", "espacio_tiempo"]

tipo: mc
opciones_explicitas: ["Las galaxias se desplazan a través del espacio vacío", "El espacio mismo se está estirando entre las galaxias", "Las galaxias se mueven debido a una fuerza centrífuga", "El universo está colapsando hacia un punto central"]

enunciado: "Según el modelo de expansión cósmica, el corrimiento al rojo observado en las galaxias lejanas indica que:"

explicacion: |
  Es un error común pensar que las galaxias viajan 'por' el espacio como proyectiles. En realidad, es la métrica del espacio-tiempo la que se expande, aumentando la distancia entre objetos que no están gravitacionalmente ligados.
```

### 2 — Analogía del globo
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["analogia", "expansion"]

variables:
  idx: uno_de([0,1])
  escenario: [["puntos en un globo desinflado", "puntos en un globo inflado"], ["distancia constante", "distancia creciente"]]

tipo: completar
respuestas_validas: ["distancia creciente"]

enunciado: "Si imaginamos que las galaxias son puntos dibujados sobre la superficie de un globo que se infla, al aumentar el volumen del globo, la {escenario[idx][0]} entre los puntos se vuelve una {escenario[idx][1]}."

explicacion: |
  La analogía del globo ilustra que no es el objeto el que se mueve por la superficie, sino que la superficie misma crece, separando los puntos.
```

### 3 — El efecto Doppler vs. Expansión
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "avanzado"
  tags: ["doppler", "redshift"]

tipo: mc
opciones_explicitas: ["Efecto Doppler", "Efecto Doppler Cosmológico", "Efecto Doppler Gravitacional", "Efecto Doppler de Lorentz"]

enunciado: "Aunque se parece al efecto Doppler acústico, el corrimiento al rojo debido a la expansión del universo se denomina:"

explicacion: |
  El efecto Doppler estándar ocurre por movimiento a través del medio, mientras que el cosmológico se debe a la expansión de la métrica del espacio.
```

### 4 — La métrica del espacio
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["metrica", "espacio_tiempo"]

tipo: input
tolerancia_abs: 0

enunciado: "Si la expansión del universo es constante, la velocidad de recesión de una galaxia es proporcional a su distancia actual. ¿Cuál es el término técnico para este factor de escala que describe cómo cambia el tamaño del universo con el tiempo? (Escribe la respuesta en inglés, comienza con 'a' y termina con 'e')"

pasos:
  - "Identificar que la expansión se describe mediante el factor de escala."
  - "Recordar el término en inglés: scale factor."

explicacion: |
  El factor de escala 'a(t)' es una función que describe la evolución del tamaño del universo con el tiempo en la métrica de Friedmann-Lemaître-Robertson-Walker.
```

### 5 — Orden de la evidencia
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["evidencia", "historia_ciencia"]

tipo: ordenar
opciones_explicitas: ["Observación de espectros con corrimiento al rojo", "Formulación de la Ley de Hubble-Lemaître", "Descubrimiento de la expansión del universo"]

enunciado: "Ordena cronológicamente los hitos que permitieron comprender que el universo se está expandiendo:"

explicacion: |
  Primero se observó el desplazamiento en las líneas espectrales (Slipher), luego se formuló la relación matemática (Hubble) y finalmente se consolidó el modelo de un universo en expansión.
```