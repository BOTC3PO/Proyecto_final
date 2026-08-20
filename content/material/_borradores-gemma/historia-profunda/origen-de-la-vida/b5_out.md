### 1 — El experimento de Miller-Urey
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["quimica_prebiotica", "experimento", "miller_urey"]

variables:
  escenario: [[["metano", "amoniaco", "hidrogeno", "vapor de agua"], "aminoácidos"], [["metano", "amoniaco", "hidrogeno", "vapor de agua"], "azúcares"], [["metano", "amoniaco", "hidrogeno", "vapor de agua"], "lípidos"]]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["aminoácidos", "azúcares", "lípidos"]

enunciado: "En el experimento de Miller-Urey, al aplicar descargas eléctricas a una mezcla de gases que simulaba la atmósfera primitiva, se obtuvo como producto principal la formación de ___."

explicacion: |
  El experimento demostró que la síntesis abiótica de moléculas orgánicas (como los aminoácidos) era posible bajo las condiciones atmosféricas propuestas.
```

### 2 — Gases de la atmósfera primitiva
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["atmosfera", "gases"]

variables:
  gas_principal: ["metano", "oxígeno", "nitrógeno"]
  idx: uno_de([0,1,2])

respuesta: gas_principal[idx]
tipo: mc
opciones_explicitas: ["metano", "oxígeno", "nitrógeno"]

enunciado: "Según el modelo de Miller-Urey, la atmósfera primitiva era rica en gases reductores. ¿Cuál de estos gases era uno de los componentes fundamentales en su montaje experimental?"

explicacion: |
  Miller utilizó metano (CH4), amoníaco (NH3), hidrógeno (H2) y vapor de agua (H2O) para simular la atmósfera reductora.
```

### 3 — El componente eléctrico
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["energia", "descarga"]

variables:
  fuente: ["descargas eléctricas", "radiación solar", "calor volcánico"]
  idx: uno_de([0,1,2])

respuesta: fuente[idx]
tipo: completar
respuestas_validas: ["descargas eléctricas", "radiación solar", "calor volcánico"]

enunciado: "Para simular la energía disponible en la atmósfera primitiva, el aparato de Miller utilizó ___ entre los gases."

explicacion: |
  Las descargas eléctricas simulaban la actividad de los rayos durante las tormentas en la Tierra primitiva.
```

### 4 — El ciclo del agua en el experimento
```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["ciclo_del_agua", "condensación"]

variables:
  proceso: [["condensación", "evaporación"], ["condensación", "sublimación"], ["condensación", "fusión"]]
  idx: uno_de([0,1,2])

respuesta: proceso[idx][0]
tipo: mc
opciones_explicitas: ["condensación", "evaporación", "sublimación", "fusión"]

enunciado: "En el montaje, el vapor de agua se enfriaba para que los compuestos orgánicos formados se disolvieran en el líquido. Este proceso físico es la ___."

explicacion: |
  El enfriamiento del vapor permite la condensación, permitiendo que las moléculas orgánicas se concentren en la fase líquida.
```

### 5 — Secuencia de componentes
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["montaje", "componentes"]

variables:
  orden: [["gases", "descargas", "condensación"], ["gases", "condensación", "descargas"], ["condensación", "gases", "descargas"]]
  idx: uno_de([0,1,2])

respuesta: orden[idx]
tipo: ordenar
opciones_explicitas: ["gases", "descargas", "condensación"]

enunciado: "Ordena los elementos o procesos según el flujo lógico de la síntesis química en el experimento de Miller: primero los ___; luego las ___; y finalmente la ___ de los productos."

explicacion: |
  El experimento requiere primero la mezcla de gases, luego la aplicación de energía (descargas) y finalmente la recuperación de productos mediante condensación.
```