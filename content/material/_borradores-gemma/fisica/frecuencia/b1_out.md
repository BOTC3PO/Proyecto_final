### 1 — Definición de frecuencia
```
metadata:
  materia: "fisica"
  tema: "frecuencia_basica"
  nivel: "basico"
  tags: ["oscilaciones", "definicion"]

tipo: mc
opciones_explicitas: ["El tiempo que tarda en completarse una oscilación", "La cantidad de oscilaciones por unidad de tiempo", "La distancia máxima desde el punto de equilibrio", "La velocidad de un objeto en movimiento"]

respuesta: "La cantidad de oscilaciones por unidad de tiempo"

enunciado: "La frecuencia se define como ___."

explicacion: |
  La frecuencia mide cuántos ciclos o vueltas ocurren en un intervalo de tiempo determinado.
```

### 2 — Relación inversa con el período
```
metadata:
  materia: "fisica"
  tema: "relacion_frecuencia_periodo"
  nivel: "basico"
  tags: ["periodo", "formula"]

variables:
  idx: uno_de([0, 1])
  datos: [["T = 2 s", "f = 0.5 Hz"], ["T = 0.5 s", "f = 2 Hz"]]

tipo: mc
opciones_explicitas: ["f = T", "f = 1 / T", "f = T * 2", "f = 1 / (2 * T)"]

respuesta: "f = 1 / T"

enunciado: "Si un fenómeno tiene un período de {datos[idx][0]}, su frecuencia es de {datos[idx][1]}."

explicacion: |
  La relación entre frecuencia (f) y período (T) es inversamente proporcional: f = 1/T.
```

### 3 — Unidades de medida
```
metadata:
  materia: "fisica"
  tema: "unidades_frecuencia"
  nivel: "basico"
  tags: ["unidades", "herتz"]

tipo: completar
respuestas_validas: ["Hz", "Hertz"]

respuesta: "Hz"

enunciado: "La unidad de medida de la frecuencia en el Sistema Internacional es el ___."

explicacion: |
  El Hertz (Hz) equivale a 1 ciclo por segundo (1/s).
```

### 4 — Verdad o Falso: Periodo y Frecuencia
```
metadata:
  materia: "fisica"
  tema: "propiedades_frecuencia"
  nivel: "basico"
  tags: ["conceptual"]

tipo: vf

respuesta: falso

enunciado: "Si el período de un péndulo aumenta, su frecuencia también aumenta."

explicacion: |
  Falso. Como la relación es inversa (f = 1/T), si el período aumenta, la frecuencia disminuye.
```

### 5 — Cálculo de frecuencia
```
metadata:
  materia: "fisica"
  tema: "calculo_frecuencia"
  nivel: "intermedio"
  tags: ["calculo", "ejercicio"]

variables:
  idx: uno_de([0, 1])
  datos: [[5, 0.2], [10, 0.1]]

tipo: input
tolerancia_abs: 0.01

enunciado: "Un objeto realiza un ciclo completo cada {datos[idx][0]} segundos. ¿Cuál es su frecuencia en Hz?"

pasos:
  - "Identificar el período (T = {datos[idx][0]} s)"
  - "Aplicar la fórmula f = 1 / T"
  - "Calcular el resultado: 1 / {datos[idx][0]}"

respuesta: datos[idx][1]

explicacion: |
  Usando la fórmula f = 1 / T:
  f = 1 / {datos[idx][0]} = {datos[idx][1]} Hz.
```