### 1 — Velocidad de alejamiento (Hubble)
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["astronomia", "calculo"]

variables:
  escenario: uno_de([[10, 70], [25, 75], [50, 65]])
  distancia: escenario[0]
  h0: escenario[1]

respuesta: distancia * h0
tipo: input
tolerancia_abs: 0.1

enunciado: "Una galaxia se encuentra a una distancia de {distancia} Mpc. Si la constante de Hubble es H0 = {h0} (km/s)/Mpc, ¿cuál es su velocidad de alejamiento en km/s?"

explicacion: |
  Según la Ley de Hubble: v = H0 * d.
  En este caso: {distancia} * {h0} = {respuesta} km/s.
```

### 2 — ¿Qué es la constante de Hubble?
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "tasa de expansión"
tipo: completar
respuestas_validas: ["tasa de expansión", "velocidad de la luz", "masa galáctica"]

enunciado: "La constante de Hubble representa la ___ del universo."

explicacion: |
  La constante de Hubble (H0) mide qué tan rápido se expande el universo en relación a la distancia.
```

### 3 — Interpretación de la expansión
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["conceptos", "observacion"]

respuesta: "se aleja"
tipo: mc
opciones_explicitas: ["se acerca", "se aleja", "está estática", "colapsa"]

enunciado: "Si observamos un redshift (desplazamiento al rojo) en una galaxia, según la Ley de Hubble, esto indica que la galaxia ___ de nosotros."

explicacion: |
  El redshift es la prueba observacional de que las galaxias se están alejando, lo cual es la base de la expansión del universo.
```

### 4 — Cálculo de distancia inversa
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["calculo", "inverso"]

variables:
  datos: [[1400, 70], [3000, 70], [4500, 75]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][0]
tipo: input
tolerancia_abs: 0.1

enunciado: "Si una galaxia tiene una velocidad de alejamiento de {datos[idx][1]} km/s y asumimos una constante de Hubble de {datos[idx][1]} (km/s)/Mpc, ¿a qué distancia se encuentra en Mpc?"

pasos:
  - "Identificar la velocidad (v) y la constante (H0)."
  - "Despejar la distancia de la fórmula v = H0 * d, obteniendo d = v / H0."

explicacion: |
  Para hallar la distancia, dividimos la velocidad por la constante de Hubble: {datos[idx][1]} / {datos[idx][1]} = {datos[idx][0]} Mpc.
```

### 5 — Orden de magnitudes de Hubble
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["orden", "conceptos"]

respuesta: ["Observación de Redshift", "Cálculo de Velocidad", "Aplicación de Ley de Hubble"]
tipo: ordenar
opciones_explicitas: ["Observación de Redshift", "Cálculo de Velocidad", "Aplicación de Ley de Hubble"]

enunciado: "Ordena los pasos lógicos para determinar la distancia de una galaxia usando la Ley de Hubble a partir de la observación astronómica."

explicacion: |
  Primero se observa el desplazamiento (redshift), luego se calcula la velocidad a partir de ese desplazamiento y finalmente se usa la Ley de Hubble para hallar la distancia.
```