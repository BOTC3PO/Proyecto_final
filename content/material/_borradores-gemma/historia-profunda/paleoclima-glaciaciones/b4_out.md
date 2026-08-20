### 1 — El periodo de la última glaciación
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["cuaternario", "glaciaciones"]

respuesta: "Pleistoceno"
tipo: completar
respuestas_validas: ["Pleistoceno"]

enunciado: "El periodo geológico que comprende la mayor parte del Cuaternario y que se caracteriza por ciclos de glaciaciones es el ___________."

explicacion: |
  El Pleistoceno abarca desde hace aproximadamente 2.58 millones de años hasta hace 11,700 años, marcando la era de las grandes glaciaciones.
```

### 2 — La última glaciación
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["glaciacion", "tiempo"]

respuesta: 11700
tipo: input
tolerancia_abs: 500

enunciado: "La última glaciación (LGM - Last Glacial Maximum) terminó hace aproximadamente ________ años, dando inicio al Holoceno."

explicacion: |
  Hace unos 11,700 años el clima se estabilizó, permitiendo el florecimiento de las civilizaciones humanas actuales.
```

### 3 — Ciclos de Milankovitch
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["milankovitch", "ciclos"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["Excentricidad", "Cambio en la forma de la órbita terrestre"],
    ["Precesión", "Cambio en la orientación del eje terrestre"]
  ]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Excentricidad", "Precesión", "Oblicuidad", "Efecto Coriolis"]

enunciado: "Si nos referimos al ciclo que altera la forma de la órbita terrestre de circular a elíptica, estamos hablando de la: {escenario[idx][0]}."

explicacion: |
  La {escenario[idx][0]} es uno de los tres ciclos astronómicos principales que modulan la insolación terrestre.
```

### 4 — Secuencia de eventos climáticos
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["secuencia", "clima"]

respuesta: ["Glaciación", "Interglaciar", "Glaciación", "Interglaciar"]
tipo: ordenar
opciones_explicitas: ["Glaciación", "Interglaciar", "Glaciación", "Interglaciar"]

enunciado: "Ordena la secuencia típica de los ciclos climáticos que han definido el Cuaternario (de mayor a menor cobertura de hielo):"

explicacion: |
  El Cuaternario se caracteriza por la alternancia entre periodos fríos (glaciaciones) y periodos cálidos (interglaciares).
```

### 5 — El Holoceno actual
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["holoceno", "clima"]

respuesta: "Holoceno"
tipo: mc
opciones_explicitas: ["Pleistoceno", "Holoceno", "Eoceno", "Mioceno"]

enunciado: "El periodo interglaciar actual, en el que nos encontramos y que comenzó tras la última gran glaciación, se denomina:"

explicacion: |
  El Holoceno es el periodo de clima estable y cálido que ha permitido el desarrollo de la agricultura y la civilización humana.
```