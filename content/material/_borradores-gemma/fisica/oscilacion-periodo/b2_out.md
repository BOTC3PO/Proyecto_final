### 1 — Concepto de Periodo
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "el tiempo que tarda en completarse un ciclo completo"
tipo: completar
respuestas_validas: ["el tiempo que tarda en completarse un ciclo completo", "el tiempo de un ciclo completo"]

enunciado: "En un movimiento oscilatorio, el periodo se define como ___"

explicacion: |
  El periodo (T) es el intervalo de tiempo necesario para que un objeto complete un ciclo completo de movimiento y regrese a su posición inicial con la misma velocidad y dirección.
```

### 2 — Cálculo de Frecuencia
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["calculo", "frecuencia"]

variables:
  idx: uno_de([0, 1])
  datos: [["0.5", "2.0"], ["0.2", "5.0"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["0.5 Hz", "2.0 Hz", "1.0 Hz", "5.0 Hz"]

enunciado: "Si un objeto realiza un ciclo completo en {datos[idx][0]} segundos, ¿cuál es su frecuencia en Hz?"

pasos:
  - "Identificar el periodo (T): T = {datos[idx][0]} s"
  - "Usar la fórmula de la frecuencia: f = 1 / T"
  - "Calcular: f = 1 / {datos[idx][0]} = {datos[idx][1]} Hz"

explicacion: |
  La frecuencia (f) es el inverso del periodo (T). Si T = {datos[idx][0]} s, entonces f = 1 / {datos[idx][0]} = {datos[idx][1]} Hz.
```

### 3 — Relación Periodo y Frecuencia
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["relacion", "frecuencia"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que si la frecuencia de un oscilador aumenta, su periodo también aumenta?"

explicacion: |
  Falso. La relación es inversamente proporcional: T = 1/f. Si la frecuencia aumenta, el periodo disminuye (el ciclo es más rápido).
```

### 4 — Periodo de un Péndulo Simple
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "avanzado"
  tags: ["pendulo", "calculo"]

variables:
  idx: uno_de([0, 1])
  escenario: [["1.0", "0.5"], ["0.4", "1.2]]

respuesta: escenario[idx][1]
tipo: input
tolerancia_abs: 0.01

enunciado: "Un péndulo simple tiene una longitud de {escenario[idx][0]} metros. Calcula su periodo (T) usando la fórmula T = 2 * pi * sqrt(L / g). (Usa g = 9.8 m/s²)"

pasos:
  - "L = {escenario[idx][0]} m"
  - "T = 2 * pi * sqrt({escenario[idx][0]} / 9.8)"
  - "T = 2 * 3.14159 * sqrt({escenario[idx][0] / 9.8})"

explicacion: |
  Aplicando la fórmula: T = 2 * pi * sqrt({escenario[idx][0]} / 9.8) ≈ {escenario[idx][1]} s.
```

### 5 — Secuencia de un Ciclo Completo
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["movimiento", "secuencia"]

respuesta: ["Extremo A", "Punto de equilibrio", "Extremo B", "Punto de equilibrio"]
tipo: ordenar
opciones_explicitas: ["Extremo A", "Punto de equilibrio", "Extremo B", "Punto de equilibrio"]

enunciado: "Ordena las posiciones que recorre un objeto en un ciclo completo de oscilación, partiendo desde el extremo derecho (A):"

explicacion: |
  Un ciclo completo implica ir de un extremo al otro y volver al punto de partida, pasando por el centro en cada tramo.
```