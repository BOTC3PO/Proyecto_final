### 1 — El descubrimiento de Hubble
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["astronomia", "hubble", "expansion"]

respuesta: "expansión"
tipo: completar
respuestas_validas: ["expansión", "expansion"]

enunciado: "En 1929, Edwin Hubble observó que las galaxias lejanas se alejan de nosotros, lo que proporcionó evidencia fundamental de la ___ del universo."

explicacion: |
  Hubble descubrió que el universo no es estático, sino que está en constante expansión, lo que cambió nuestra comprensión del cosmos.
```

### 2 — Relación entre distancia y velocidad
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["ley_de_hubble", "velocidad", "distancia"]

variables:
  escenario: uno_de([
    ["10 Mpc", "200 km/s"],
    ["20 Mpc", "400 km/s"],
    ["50 Mpc", "1000 km/s"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["100 km/s", "200 km/s", "300 km/s", "400 km/s"]

enunciado: "Si aplicamos la lógica de la Ley de Hubble, donde la velocidad de recesión es proporcional a la distancia, ¿cuál es la velocidad aproximada de una galaxia situada a {escenario[0]} de distancia?"

pasos:
  - "Identificar la distancia proporcionada."
  - "Relacionar la distancia con la velocidad según el escenario asignado."

explicacion: |
  La Ley de Hubble establece que $v = H_0 \cdot d$. En este ejercicio, se ha asignado un valor de velocidad proporcional a la distancia dada en el escenario.
```

### 3 — El efecto Doppler y la luz
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["efecto_doppler", "redshift"]

respuesta: "corrimiento al rojo"
tipo: completar
respuestas_validas: ["corrimiento al rojo", "redshift"]

enunciado: "El fenómeno mediante el cual la luz de las galaxias lejanas se desplaza hacia longitudes de onda más largas debido al alejamiento es conocido como ___."

explicacion: |
  Este fenómeno, llamado 'redshift' o corrimiento al rojo, es la base observacional que permitió a Hubble concluir que las galaxias se alejan.
```

### 4 — Interpretación del modelo
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["cosmologia", "modelo_estatico"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Antes de los descubrimientos de Hubble, la creencia predominante en la comunidad científica era que el universo era estático. ¿Es correcto afirmar que la Ley de Hubble refuta esta idea? "

explicacion: |
  Correcto. La observación de que las galaxias se alejan invalidó el modelo de un universo estático y dio paso al modelo del Big Bang.
```

### 5 — Secuencia de evidencia
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["metodologia", "evidencia"]

respuesta: ["observación del redshift", "cálculo de la velocidad de recesión", "conclusión de la expansión universal"]
tipo: ordenar
opciones_explicitas: ["observación del redshift", "cálculo de la velocidad de recesión", "conclusión de la expansión universal"]

enunciado: "Ordena cronológicamente los pasos lógicos que llevaron a Hubble a concluir la expansión del universo:"

pasos:
  - "Detectar el cambio de color en el espectro de las galaxias."
  - "Determinar qué tan rápido se alejan según su distancia."
  - "Deducir que el espacio mismo se está expandiendo."

explicacion: |
  Primero se observa el desplazamiento espectral (redshift), luego se cuantifica la velocidad de alejamiento y finalmente se interpreta como una expansión del tejido del universo.
```