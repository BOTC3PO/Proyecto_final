### 1 — El límite del Carbono-14
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["carbono-14", "vida_media", "geocronologia"]

respuesta: "vida media"
tipo: completar
respuestas_validas: ["vida media", "vida-media"]

enunciado: "El método de datación por Carbono-14 no es útil para datar fósiles de dinosaurios de hace millones de años debido a que su ___ es demasiado corta."

explicacion: |
  El Carbono-14 tiene una vida media de aproximadamente 5730 años. Después de unos 50,000 años, la cantidad de isótopo remanente es tan pequeña que es imposible de medir con precisión, por lo que no sirve para escalas de tiempo geológicas profundas.
```

### 2 — ¿Por qué no funciona en rocas antiguas?
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["carbono-14", "isótopos", "geocronologia"]

opciones_explicitas: ["La cantidad de C-14 es demasiado grande", "La cantidad de C-14 es demasiado pequeña para ser medida", "El C-14 es un isótopo muy estable", "El C-14 solo se encuentra en rocas"]

respuesta: uno_de(["La cantidad de C-14 es demasiado pequeña para ser medida", "La cantidad de C-14 es demasiado grande", "El C-14 es un isótopo muy estable", "El C-14 solo se encuentra en rocas"])[0]
tipo: mc

enunciado: "Si intentamos datar una roca de 100 millones de años usando el método del Carbono-14, ¿cuál es el problema principal?"

explicacion: |
  Debido a su vida media de 5730 años, tras millones de años, prácticamente todos los átomos de C-14 se han desintegrado. No queda señal detectable para realizar el cálculo.
```

### 3 — Comparación de isótopos
```
metadata:
  materia: "historia_profucha"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["isótopos", "vida_media", "comparacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Carbono-14", "5730 años", "Fósiles orgánicos recientes"],
    ["Uranio-238", "4468 millones de años", "Rocas muy antiguas"]
  ]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas: ["5730 años", "4468 millones de años"]

enunciado: "Para datar el escenario de {datos[escenario_idx][0]}, se utiliza un isótopo con una vida media de {datos[escenario_idx][1]}. Sin embargo, para {datos[escenario_idx][2]}, se requiere un isótopo con una vida media mucho mayor."

explicacion: |
  La elección del isótopo depende de la escala de tiempo: el C-14 es para arqueología (reciente) y el Uranio-238 para geocronología (antigua).
```

### 4 — Secuencia de desintegración
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["proceso", "datacion", "isótopos"]

opciones_explicitas: ["La muestra se vuelve demasiado vieja", "El isótopo se vuelve demasiado estable", "La muestra se vuelve demasiado joven", "El isótopo se vuelve demasiado radiactivo"]

respuesta: "La muestra se vuelve demasiado vieja"
tipo: mc

enunciado: "En el contexto de la datación radiométrica, cuando el tiempo transcurrido supera con creces la vida media de un isótopo como el C-14, la muestra se vuelve:"

explicacion: |
  Al no quedar isótopos detectables, la muestra es "demasiado vieja" para el método, perdiendo su utilidad analítica para ese isótopo específico.
```

### 5 — Relación Tiempo-Isótopo
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["conceptos", "tiempo"]

respuesta: "corto"
tipo: completar
respuestas_validas: ["corto", "breve"]

enunciado: "El Carbono-14 tiene un tiempo de vida media muy ___ comparado con los procesos geológicos que forman las rocas de la corteza terrestre."

explicacion: |
  El contraste entre la escala de miles de años (C-14) y la de millones/billones de años (geología) es la razón por la cual el C-14 es inaplicable en la datación de rocas antiguas.
```