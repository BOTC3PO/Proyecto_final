### 1 — Relación entre frecuencia y período
```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["oscilaciones", "periodo"]

variables:
  idx: uno_de([0, 1])
  datos: [
    ["0.5", "2.0"],
    ["2.0", "0.5"]
  ]

enunciado: "Si el período de un oscilador es de {datos[idx][0]} segundos, su frecuencia será de {datos[idx][1]} Hz."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["0.5", "1.0", "2.0", "4.0"]

explicacion: |
  La frecuencia (f) es el inverso del período (T), es decir, f = 1/T. 
  Si T = 0.5 s, entonces f = 1 / 0.5 = 2.0 Hz.
  Si T = 2.0 s, entonces f = 1 / 2.0 = 0.5 Hz.
```

### 2 — Definición de frecuencia
```
metadata:
  materia: "fisica"
  tema: "frecuencia_definicion"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La frecuencia se define como la cantidad de ciclos o oscilaciones completas que ocurren en una unidad de tiempo."

explicacion: |
  Correcto. La frecuencia mide la rapidez con la que se repite un fenómeno periódico.
```

### 3 — Unidades de medida
```
metadata:
  materia: "fisica"
  tema: "unidades_frecuencia"
  nivel: "basico"
  tags: ["unidades", "si_no"]

respuesta: "Hz"
tipo: completar
respuestas_validas: ["Hz", "Hertz"]

enunciado: "La unidad de medida de la frecuencia en el Sistema Internacional es el ___."

explicacion: |
  La unidad es el Hertz (Hz), que equivale a 1/s (ciclos por segundo).
```

### 4 — Comparación: Frecuencia vs Período
```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo_comparacion"
  nivel: "intermedio"
  tags: ["relacion_inversa"]

respuesta: "inversamente"
tipo: completar
respuestas_validas: ["directamente", "inversamente"]

enunciado: "Mientras que el período mide el tiempo de un solo ciclo, la frecuencia y el período tienen una relación ___."

explicacion: |
  Es una relación inversa: a mayor período (más tiempo por ciclo), menor frecuencia (menos ciclos por segundo).
```

### 5 — Identificación de magnitudes
```
metadata:
  materia: "fisica"
  tema: "magnitudes_periodicas"
  nivel: "basico"
  tags: ["identificacion"]

respuesta: ["Período", "Frecuencia", "Amplitud"]
tipo: ordenar

opciones_explicitas: ["Período", "Frecuencia", "Amplitud"]

enunciado: "Ordene las siguientes magnitudes de mayor a menor, considerando un sistema donde el tiempo de un ciclo es mayor que el número de ciclos por segundo, y la distancia máxima es la mayor de todas:"

explicacion: |
  El enunciado pide ordenar: 
  1. Período (tiempo de un ciclo, ej: 2s).
  2. Frecuencia (ciclos por segundo, ej: 0.5Hz).
  3. Amplitud (distancia, ej: 5m).
  Nota: El orden depende de los valores numéricos dados en el enunciado para establecer la jerarquía.
```