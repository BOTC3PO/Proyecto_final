### 1 — Relación entre frecuencia y período
```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["frecuencia", "periodo", "oscilaciones"]

respuesta: falso
tipo: vf

enunciado: "Si el período de una oscilación aumenta, la frecuencia de la misma también aumenta."

explicacion: |
  La frecuencia ($f$) es inversamente proporcional al período ($T$), según la fórmula $f = 1/T$. Si el tiempo que tarda un ciclo (período) es mayor, ocurren menos ciclos por segundo (frecuencia menor).
```

### 2 — Cálculo de la frecuencia
```
metadata:
  materia: "fisica"
  tema: "frecuencia_calculo"
  nivel: "basico"
  tags: ["frecuencia", "calculo"]

variables:
  periodo: 0.5

respuesta: 2.0
tipo: input
tolerancia_abs: 0.01

enunciado: "Un péndulo completa un ciclo cada {periodo} segundos. ¿Cuál es su frecuencia en Hz?"

pasos:
  - "Identificar el período: $T = {periodo}$ s"
  - "Aplicar la fórmula: $f = 1 / T$"
  - "Calcular: $f = 1 / 0.5 = 2.0$ Hz"

explicacion: |
  La frecuencia se calcula dividiendo 1 entre el período. En este caso, $1 / 0.5 = 2$ Hz.
```

### 3 — Concepto de frecuencia
```
metadata:
  materia: "fisica"
  tema: "frecuencia_definicion"
  nivel: "basico"
  tags: ["definicion", "frecuencia"]

opciones_explicitas: ["Cantidad de ciclos por unidad de tiempo", "Tiempo que tarda un ciclo", "Distancia recorrida en un ciclo", "Velocidad de la oscilación"]
respuesta: "Cantidad de ciclos por unidad de tiempo"
tipo: mc

enunciado: "¿Cuál es la definición física de frecuencia?"

explicacion: |
  La frecuencia mide cuántas veces se repite un evento (u oscilación) en un intervalo de tiempo determinado (generalmente un segundo).
```

### 4 — Conversión de unidades
```
metadata:
  materia: "fisica"
  tema: "frecuencia_unidades"
  nivel: "intermedio"
  tags: ["unidades", "hercios"]

variables:
  f_valor: 50
  f_unid: "Hz"

respuesta: "50"
tipo: completar
respuestas_validas: ["50"]

enunciado: "Si un objeto oscila con una frecuencia de {f_valor} {f_unid}, esto significa que realiza ___ oscilaciones por segundo."

explicacion: |
  El Hertz (Hz) es la unidad del Sistema Internacional para la frecuencia y equivale a $1/s$ (un ciclo por segundo).
```

### 5 — Relación inversa (Escenario variable)
```
metadata:
  materia: "fisica"
  tema: "frecuencia_inversa"
  nivel: "intermedio"
  tags: ["frecuencia", "periodo"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.2, 5.0], [0.5, 2.0]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: [datos[idx][1]]

enunciado: "Si el período de un fenómeno es de {datos[idx][0]} segundos, ¿cuál es su frecuencia?"

pasos:
  - "Datos: $T = {datos[idx][0]}$ s"
  - "Fórmula: $f = 1 / T$"
  - "Resultado: $f = 1 / {datos[idx][0]} = {datos[idx][1]}$ Hz"

explicacion: |
  Usando la relación $f = 1/T$, para un período de {datos[idx][0]} s, la frecuencia es {datos[idx][1]} Hz.
```