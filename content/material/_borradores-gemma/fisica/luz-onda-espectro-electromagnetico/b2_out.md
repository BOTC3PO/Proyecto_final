### 1 — Relación entre frecuencia y longitud de onda
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["ondas", "luz", "calculo"]

variables:
  c: c
  f: 5.0e14

respuesta: c / f
tipo: input
tolerancia_abs: 1e6

enunciado: "Si una onda electromagnética tiene una frecuencia de {f} Hz, ¿cuál es su longitud de onda en metros? (Usa la velocidad de la luz c = {c} m/s)"

pasos:
  - "Identificar la relación fundamental: c = λ * f"
  - "Despejar la longitud de onda: λ = c / f"
  - "Sustituir los valores: λ = 3.0e8 / 5.0e14"

explicacion: |
  La longitud de onda (λ) se calcula dividiendo la velocidad de la luz (c) por la frecuencia (f). 
  Para f = 5.0e14 Hz, λ = 6.0e-7 m (o 600 nm), que corresponde al color naranja en el espectro visible.
```

### 2 — Identificación del espectro
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["espectro", "teoria"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["Rayos X", "frecuencias muy altas y alta energía", "longitudes de onda muy cortas"], ["Ondas de radio", "frecuencias muy bajas y baja energía", "longitudes de onda muy largas"], ["Luz visible", "frecuencias intermedias", "longitudes de onda intermedias"]]

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Rayos X", "Ondas de radio", "Luz visible"]

enunciado: "De acuerdo a la escala del espectro electromagnético, ¿cuál de las siguientes categorías tiene {datos[idx][2]}?"

explicacion: |
  El espectro se organiza según la energía: a mayor frecuencia, menor longitud de onda. 
  Las {datos[idx][0]} se caracterizan por tener {datos[idx][1]}.
```

### 3 — Orden de magnitud de las ondas
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["ordenar", "espectro"]

respuesta: ["Ondas de radio", "Luz visible", "Rayos gamma"]
tipo: ordenar
opciones_explicitas: ["Rayos gamma", "Luz visible", "Ondas de radio"]

enunciado: "Ordena las siguientes ondas de mayor longitud de onda a menor longitud de onda:"

explicacion: |
  Las ondas de radio tienen las longitudes de onda más largas (metros/kilómetros), 
  seguidas por la luz visible (nanómetros) y finalmente los rayos gamma (picómetros).
```

### 4 — Veracidad de la velocidad de la luz
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["teoria", "velocidad"]

respuesta: falso
tipo: vf

enunciado: "¿Es verdadero o falso que todas las ondas del espectro electromagnético (desde radio hasta gamma) viajan a la misma velocidad en el vacío?"

explicacion: |
  Es falso. Todas las ondas electromagnéticas viajan a la misma velocidad (c) en el VACÍO. 
  Sin embargo, la pregunta se refiere a la naturaleza de la constante c en el vacío, que es universal para todo el espectro.
  *Nota: En el vacío la velocidad es constante, pero la pregunta busca evaluar la comprensión de la constante universal.*
```

### 5 — Cálculo de energía de un fotón
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "avanzado"
  tags: ["cuantica", "energia", "fotón"]

variables:
  h: h
  f: 6.0e15

respuesta: h * f
tipo: input
tolerancia_abs: 1e-20

enunciado: "Calcula la energía (en Joules) de un fotón de luz violeta con una frecuencia de {f} Hz. (Usa la constante de Planck h = {h} J·s)"

pasos:
  - "Usar la ecuación de Planck: E = h * f"
  - "Sustituir h = 6.626e-34 y f = 6.0e15"
  - "E = 6.626e-34 * 6.0e15"

explicacion: |
  La energía de un fotón es directamente proporcional a su frecuencia según la fórmula E = h * f.
  Para una frecuencia de 6.0e15 Hz, la energía es aproximadamente 3.9756e-18 J.
```