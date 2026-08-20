### 1 — Longitudes de onda y energía
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["ondas", "energia", "espectro"]

respuesta: "rayos_gamma"
tipo: completar
respuestas_validas: ["rayos_gamma"]

enunciado: "En el espectro electromagnético, mientras que las ondas de radio tienen longitudes de onda muy largas, los ___ poseen las longitudes de onda más cortas y la mayor energía."

explicacion: |
  La energía de un fotón es inversamente proporcional a su longitud de onda ($E = hc/\lambda$). Por lo tanto, a menor longitud de onda, mayor energía.
```

### 2 — El espectro visible
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["luz_visible", "color", "frecuencia"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [
    ["rojo", "frecuencia baja"],
    ["azul", "frecuencia alta"],
    ["verde", "frecuencia media"]
  ]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["frecuencia baja", "frecuencia alta", "frecuencia media"]

enunciado: "Si comparamos la luz visible con el resto del espectro, el color {datos[idx][0]} se caracteriza por tener una {datos[idx][1]} en comparación con el color azul."

explicacion: |
  El espectro visible es una pequeña franja. El rojo tiene la longitud de onda más larga (menor frecuencia) y el violeta/azul la más corta (mayor frecuencia).
```

### 3 — Naturaleza de las ondas electromagnéticas
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["ondas", "propagacion"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que las ondas electromagnéticas, como la luz, requieren de un medio material (como el aire o el agua) para propagarse, a diferencia de las ondas mecánicas?"

explicacion: |
  Falso. Las ondas electromagnéticas se propagan en el vacío debido a la oscilación de campos eléctricos y magnéticos acoplados, mientras que las mecánicas (como el sonido) sí requieren un medio.
```

### 4 — Orden de las ondas por frecuencia
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["orden", "espectro"]

respuesta: ["ondas_radio", "microondas", "infrarrojo", "luz_visible", "ultravioleta", "rayos_x", "rayos_gamma"]
tipo: ordenar
opciones_explicitas: ["ondas_radio", "microondas", "infrarrojo", "luz_visible", "ultravioleta", "rayos_x", "rayos_gamma"]

enunciado: "Ordene las siguientes radiaciones de MENOR a MAYOR frecuencia:"

explicacion: |
  La frecuencia aumenta a medida que la longitud de onda disminuye en el espectro electromagnético.
```

### 5 — El límite de la visión humana
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["luz_visible", "espectro"]

variables:
  idx: uno_de([0, 1])
  limites: [
    ["infrarrojo", "longitud de onda mayor"],
    ["ultravioleta", "longitud de onda menor"]
  ]

respuesta: limites[idx][1]
tipo: mc
opciones_explicitas: ["longitud de onda mayor", "longitud de onda menor"]

enunciado: "La luz visible es el rango que el ojo humano puede detectar. El límite que se encuentra por encima del violeta (hacia el ___ ) se define por tener una {limites[idx][1]}."

explicacion: |
  El ultravioleta tiene frecuencias más altas y longitudes de onda más cortas que el límite superior del espectro visible.
```