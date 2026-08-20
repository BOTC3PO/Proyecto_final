### 1 — Relación inversa entre frecuencia y período
```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["oscilaciones", "periodo"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.5, 2.0], [2.0, 0.5]]

enunciado: "Si un objeto realiza una oscilación cada {datos[idx][0]} segundos (período), su frecuencia será de {datos[idx][1]} Hz."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["0.5", "2.0", "1.0", "0.25"]

explicacion: |
  La frecuencia (f) es el inverso del período (T): f = 1/T. 
  Si T = {datos[idx][0]} s, entonces f = 1 / {datos[idx][0]} = {datos[idx][1]} Hz.
```

### 2 — Confusión de unidades: ¿Qué es un Hertz?
```
metadata:
  materia: "fisica"
  tema: "unidades_frecuencia"
  nivel: "basico"
  tags: ["unidades", "hertz"]

respuesta: falso
tipo: vf

enunciado: "La unidad de medida de la frecuencia, el Hertz (Hz), representa el tiempo que tarda en completarse un ciclo completo."

explicacion: |
  Falso. El Hertz (Hz) mide la cantidad de ciclos por segundo (1/s). 
  La unidad que mide el tiempo de un ciclo es el segundo (s), que corresponde al período.
```

### 3 — Cálculo de oscilaciones totales
```
metadata:
  materia: "fisica"
  tema: "frecuencia_oscilaciones"
  nivel: "intermedio"
  tags: ["calculo", "tiempo"]

variables:
  idx: uno_de([0, 1])
  escenario: [[10, 60], [5, 120]]

enunciado: "Un péndulo oscila con una frecuencia de {escenario[idx][0]} Hz. ¿Cuántas oscilaciones completará en un intervalo de tiempo de {escenario[idx][1]} segundos?"

respuesta: escenario[idx][0] * escenario[idx][1]
tipo: input
tolerancia_abs: 0

pasos:
  - "Identificar la frecuencia (f) y el tiempo (t)."
  - "Multiplicar el número de ciclos por segundo por el tiempo total: N = f * t."

explicacion: |
  Para hallar el número total de oscilaciones, multiplicamos la frecuencia por el tiempo transcurrido.
  N = {escenario[idx][0]} Hz * {escenario[idx][1]} s = {escenario[idx][0] * escenario[idx][1]} oscilaciones.
```

### 4 — Interpretación de la relación inversa
```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["relacion_inversa"]

respuesta: "Si el período aumenta, la frecuencia disminuye"
tipo: mc
opciones_explicitas: ["Si el período aumenta, la frecuencia aumenta", "Si el período aumenta, la frecuencia disminuye", "Si el período aumenta, la frecuencia se mantiene igual"]

enunciado: "Considerando la relación f = 1/T, ¿cuál de las siguientes afirmaciones es correcta sobre el comportamiento de la frecuencia cuando el período se hace más largo?"

explicacion: |
  Debido a que la frecuencia es inversamente proporcional al período, si el denominador (T) crece, el resultado (f) se reduce.
```

### 5 — Secuencia de resolución de problemas
```
metadata:
  materia: "fisica"
  tema: "metodologia_resolucion"
  nivel: "intermedio"
  tags: ["ordenar", "pasos"]

respuesta: ["Identificar el período (T)", "Calcular el inverso (1/T)", "Asignar la unidad Hertz (Hz)"]
tipo: ordenar
opciones_explicitas: ["Identificar el período (T)", "Calcular el inverso (1/T)", "Asignar la unidad Hertz (Hz)", "Multiplicar por el tiempo"]

enunciado: "Ordena los pasos lógicos para convertir un período de 0.25 segundos a frecuencia en Hertz:"

explicacion: |
  1. Primero identificas el valor del período.
  2. Aplicas la fórmula matemática de la inversa.
  3. Expresas el resultado en la unidad de medida correcta.
```