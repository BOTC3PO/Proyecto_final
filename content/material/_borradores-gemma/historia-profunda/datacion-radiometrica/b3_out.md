### 1 — Concepto de vida media
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["conceptos", "radioactividad"]

tipo: mc
opciones_explicitas: ["El tiempo que tarda una muestra en perder la mitad de sus átomos radiactivos.", "El tiempo que tarda una muestra en duplicar su masa total.", "El tiempo que tarda un átomo en transformarse en un átomo de oro.", "El tiempo que tarda la radiación en viajar una unidad de distancia."]

enunciado: "En el contexto de la datación radiométrica, ¿qué se entiende por 'vida media'?"

explicacion: |
  La vida media es el intervalo de tiempo necesario para que la cantidad de un radioisótopo en una muestra se reduzca exactamente a la mitad de su valor inicial.
```

### 2 — Decaimiento porcentual
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["porcentajes", "decaimiento"]

tipo: mc
opciones_explicitas: ["50%", "75%", "25%", "0%"]

enunciado: "Si una muestra de un isótopo radiactivo ha transcurrido exactamente una vida media, ¿qué porcentaje de los átomos originales permanece en la muestra?"

explicacion: |
  Por definición, tras una vida media, la mitad (50%) de los átomos originales se ha desintegrado, dejando el otro 50% restante.
```

### 3 — Cálculo de remanente
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["calculo", "exponencial"]

variables:
  idx: uno_de([0, 1])
  escenarios: [
    ["dos", "25%"],
    ["tres", "12.5%"]
  ]

tipo: completar
respuestas_validas: ["25%", "12.5%"]
respuesta: escenarios[idx][1]

enunciado: "Si una muestra ha transcurrido {escenarios[idx][0]} vidas medias, el porcentaje de átomos originales que queda es ___."

explicacion: |
  La cantidad de material sigue una progresión geométrica: 100% -> 50% (1 vida media) -> 25% (2 vidas medias) -> 12.5% (3 vidas medias).
```

### 4 — Determinación de tiempo transcurrido
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["calculo", "tiempo"]

variables:
  datos: [
    [100, 50, 500],
    [80, 40, 1000],
    [60, 30, 1500]
  ]
  idx: uno_de([0, 1, 2])

tipo: input
tolerancia_abs: 0.1

enunciado: "Una muestra contiene {datos[idx][0]} unidades de un isótopo con una vida media de {datos[idx][1]} años. Si actualmente quedan {datos[idx][2]} unidades, ¿cuántos años han transcurrido?"

pasos:
  - "Identificar cuántas vidas medias han pasado comparando la cantidad inicial y la final."
  - "Multiplicar el número de vidas medias por el valor de la vida media en años."

explicacion: |
  En el caso seleccionado, la muestra pasó de {datos[idx][0]} a {datos[idx][2]}, lo que representa exactamente una vida media. Por lo tanto, han pasado {datos[idx][1]} años.
```

### 5 — Secuencia de decaimiento
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["secuencia", "progresion"]

tipo: ordenar
opciones_explicitas: ["100%", "50%", "25%", "12.5%", "6.25%"]
respuesta: ["100%", "50%", "25%", "12.5%", "6.25%"]

enunciado: "Ordene las siguientes cantidades de material radiactivo restante, desde la muestra original (sin decaimiento) hasta después de cuatro vidas medias:"

explicacion: |
  El decaimiento radiactivo reduce la muestra a la mitad en cada paso: 100% $\rightarrow$ 50% $\rightarrow$ 25% $\rightarrow$ 12.5% $\rightarrow$ 6.25%.
```