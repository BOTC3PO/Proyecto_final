### 1 — Concepto de vida media
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["isótopos", "desintegración", "conceptos"]

respuesta: "vida media"
tipo: completar

enunciado: "El tiempo necesario para que la mitad de los núcleos de un isótopo radiactivo se desintegren se denomina ___."

respuestas_validas: ["vida media"]

explicacion: |
  La vida media (o periodo de semidesintegración) es el tiempo constante en el que la cantidad de un isótopo radiactivo se reduce a la mitad.
```

### 2 — Cálculo de isótopos remanentes
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["calculo", "isótopos", "tiempo"]

variables:
  idx: uno_de([0, 1])
  datos: [
    ["Carbono-14", 5730, 0.5],
    ["Potasio-40", 1250000000, 0.25]
  ]

respuesta: datos[idx][2]
tipo: mc
opciones_explicitas: ["0.5", "0.25", "0.125", "0.0625"]

enunciado: "Si un isótopo tiene una vida media de {datos[idx][1]} años, ¿qué fracción de la muestra original de {datos[idx][0]} restará exactamente después de una vida media?"

explicacion: |
  Por definición, tras transcurrir un periodo de vida media, la cantidad de la sustancia original se reduce exactamente a la mitad (0.5) de su valor inicial.
```

### 3 — Determinación de la edad (Cálculo)
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["calculo", "logaritmos", "geocronologia"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["10.0", "0.1", 2],
    ["25.0", "0.0625", 4]
  ]

respuesta: escenario[idx][0]
tipo: input
tolerancia_abs: 0.1

enunciado: "Se analiza una muestra donde la fracción del isótopo original remanente es de {escenario[idx][1]}. Si se sabe que han pasado {escenario[idx][2]} vidas medias, ¿cuál es la edad de la muestra en años (asumiendo una vida media de 100 años para este ejemplo hipotético)?"

pasos:
  - "Identificar la fracción remanente."
  - "Determinar cuántos periodos de vida media han pasado."
  - "Multiplicar el número de periodos por la duración de la vida media."

explicacion: |
  Si la fracción es 0.1 y han pasado 2 periodos (en el caso 1), la edad es 2 * 100 = 200. En el caso 2, 4 * 100 = 400. El cálculo depende de la relación entre la fracción y la constante de desintegración.
```

### 4 — Orden de desintegración
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["secuencia", "isótopos"]

respuesta: ["Isótopo de vida larga", "Isótopo de vida media", "Isótopo de vida corta"]
tipo: ordenar
opciones_explicitas: ["Isótopo de vida larga", "Isótopo de vida media", "Isótopo de vida corta"]

enunciado: "Ordene los siguientes isótopos de mayor a menor estabilidad (de mayor a menor vida media):"

explicacion: |
  Los isótopos con vidas medias más largas son más estables y se utilizan para datar eventos geológicos muy antiguos, mientras que los de vida corta sirven para eventos recientes.
```

### 5 — Verdad o Falso: Tasa de desintegración
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["teoria", "constante"]

respuesta: verdadero
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es la tasa de desintegración de un isótopo radiactivo una constante que no depende del tiempo ni de la cantidad de muestra presente?"

explicacion: |
  La probabilidad de desintegración de un núcleo individual es constante, lo que da lugar a una tasa de desintegración constante para una muestra dada, permitiendo la datación precisa.
```