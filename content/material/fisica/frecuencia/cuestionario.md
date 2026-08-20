# Fisica — Frecuencia (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

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
respuestas_validas:
  - "Hz"
  - "Hertz"

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

tipo: completar
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

### 6 — Relación entre frecuencia y período

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

### 7 — Cálculo de la frecuencia

```
metadata:
  materia: "fisica"
  tema: "frecuencia_calculo"
  nivel: "basico"
  tags: ["frecuencia", "calculo"]

variables:
  periodo: 0.5

respuesta: 2.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un péndulo completa un ciclo cada {periodo} segundos. ¿Cuál es su frecuencia en Hz?"

pasos:
  - "Identificar el período: $T = {periodo}$ s"
  - "Aplicar la fórmula: $f = 1 / T$"
  - "Calcular: $f = 1 / 0.5 = 2.0$ Hz"

explicacion: |
  La frecuencia se calcula dividiendo 1 entre el período. En este caso, $1 / 0.5 = 2$ Hz.
```

### 8 — Concepto de frecuencia

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

### 9 — Conversión de unidades

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
respuestas_validas:
  - "50"

enunciado: "Si un objeto oscila con una frecuencia de {f_valor} {f_unid}, esto significa que realiza ___ oscilaciones por segundo."

explicacion: |
  El Hertz (Hz) es la unidad del Sistema Internacional para la frecuencia y equivale a $1/s$ (un ciclo por segundo).
```

### 10 — Relación inversa (Escenario variable)

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

### 11 — Relación inversa entre frecuencia y período

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["oscilaciones", "periodo"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.5, "2.0"], [2.0, "0.5"]]

enunciado: "Si un objeto realiza una oscilación cada {datos[idx][0]} segundos (período), su frecuencia será de {datos[idx][1]} Hz."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["0.5", "2.0", "1.0", "0.25"]

explicacion: |
  La frecuencia (f) es el inverso del período (T): f = 1/T. 
  Si T = {datos[idx][0]} s, entonces f = 1 / {datos[idx][0]} = {datos[idx][1]} Hz.
```

### 12 — Confusión de unidades: ¿Qué es un Hertz?

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

### 13 — Cálculo de oscilaciones totales

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
tipo: completar
tolerancia_abs: 0

pasos:
  - "Identificar la frecuencia (f) y el tiempo (t)."
  - "Multiplicar el número de ciclos por segundo por el tiempo total: N = f * t."

explicacion: |
  Para hallar el número total de oscilaciones, multiplicamos la frecuencia por el tiempo transcurrido.
  N = {escenario[idx][0]} Hz * {escenario[idx][1]} s = {escenario[idx][0] * escenario[idx][1]} oscilaciones.
```

### 14 — Interpretación de la relación inversa

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

### 15 — Secuencia de resolución de problemas

```
metadata:
  materia: "fisica"
  tema: "metodologia_resolucion"
  nivel: "intermedio"
  tags: ["ordenar", "pasos"]

respuesta_orden: ["Identificar el período (T)", "Calcular el inverso (1/T)", "Asignar la unidad Hertz (Hz)"]
tipo: ordenar
opciones_explicitas: ["Identificar el período (T)", "Calcular el inverso (1/T)", "Asignar la unidad Hertz (Hz)"]

enunciado: "Ordena los pasos lógicos para convertir un período de 0.25 segundos a frecuencia en Hertz:"

explicacion: |
  1. Primero identificas el valor del período.
  2. Aplicas la fórmula matemática de la inversa.
  3. Expresas el resultado en la unidad de medida correcta.
```

### 16 — Relación entre frecuencia y período

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["oscilaciones", "periodo"]

variables:
  idx: uno_de([0, 1])
  datos: [["0.5", "2.0"], ["2.0", "0.5"]]

enunciado: "Si el período de un oscilador es de {datos[idx][0]} segundos, su frecuencia será de {datos[idx][1]} Hz."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["0.5", "1.0", "2.0", "4.0"]

explicacion: |
  La frecuencia (f) es el inverso del período (T), es decir, f = 1/T. 
  Si T = 0.5 s, entonces f = 1 / 0.5 = 2.0 Hz.
  Si T = 2.0 s, entonces f = 1 / 2.0 = 0.5 Hz.
```

### 17 — Definición de frecuencia

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

### 18 — Unidades de medida

```
metadata:
  materia: "fisica"
  tema: "unidades_frecuencia"
  nivel: "basico"
  tags: ["unidades", "si_no"]

respuesta: "Hz"
tipo: completar
respuestas_validas:
  - "Hz"
  - "Hertz"

enunciado: "La unidad de medida de la frecuencia en el Sistema Internacional es el ___."

explicacion: |
  La unidad es el Hertz (Hz), que equivale a 1/s (ciclos por segundo).
```

### 19 — Comparación: Frecuencia vs Período

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo_comparacion"
  nivel: "intermedio"
  tags: ["relacion_inversa"]

respuesta: "inversamente"
tipo: completar
respuestas_validas:
  - "directamente"
  - "inversamente"

enunciado: "Mientras que el período mide el tiempo de un solo ciclo, la frecuencia y el período tienen una relación ___."

explicacion: |
  Es una relación inversa: a mayor período (más tiempo por ciclo), menor frecuencia (menos ciclos por segundo).
```

### 20 — Identificación de magnitudes

```
metadata:
  materia: "fisica"
  tema: "magnitudes_periodicas"
  nivel: "basico"
  tags: ["identificacion"]

respuesta_orden: ["Período", "Frecuencia", "Amplitud"]
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

### 21 — El péndulo del reloj

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["oscilaciones", "periodo"]

variables:
  periodo: uno_de([0.5, 2.0, 0.2])
  frecuencia: 1 / periodo

respuesta: frecuencia
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un péndulo de un reloj antiguo realiza un movimiento oscilatorio. Si el tiempo que tarda en completar una oscilación completa (período) es de {periodo} segundos, ¿cuál es la frecuencia de oscilación en Hz?"

pasos:
  - "Identificar el período T = {periodo} s"
  - "Aplicar la fórmula de la frecuencia: f = 1 / T"
  - "Calcular f = 1 / {periodo}"

explicacion: |
  La frecuencia (f) es el inverso del período (T). Si tarda {periodo} s en oscilar una vez, en un segundo realiza {frecuencia} oscilaciones.
```

### 22 — El motor de un pistón

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "intermedio"
  tags: ["mecanica", "frecuencia"]

variables:
  motor_rpm: uno_de([1200, 3000, 600])
  f_valor: motor_rpm / 60

respuesta: f_valor
tipo: mc
opciones_explicitas: [20, 50, 10, 500]

enunciado: "Un motor de combustión interna realiza {motor_rpm} revoluciones por minuto (RPM). ¿Cuántas revoluciones (frecuencia) realiza por segundo (Hz)?"

explicacion: |
  Para convertir de RPM a Hz, debemos dividir la cantidad de revoluciones por 60, ya que un minuto tiene 60 segundos. {motor_rpm} / 60 = {f_valor} Hz.
```

### 23 — Ondas de radio

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["ondas", "radio"]

respuesta: falso
tipo: vf

enunciado: "Si una onda electromagnética tiene una frecuencia muy alta, su período de oscilación debe ser muy corto."

explicacion: |
  Es verdadero. Como f = 1/T, la frecuencia y el período son inversamente proporcionales. A mayor frecuencia, menor período.
```

### 24 — El latido del corazón

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["biologia_fisica", "frecuencia"]

variables:
  datos_ritmo: uno_de([60, 80, 100])
  periodo_calculado: 60 / datos_ritmo

respuesta: periodo_calculado
tipo: completar
respuestas_validas:
  - 1
  - 0.75
  - 0.6

enunciado: "Una persona tiene una frecuencia cardíaca de {datos_ritmo} latidos por minuto. El tiempo transcurrido entre cada latido (período) es de ___ segundos."

explicacion: |
  Si hay {datos_ritmo} latidos en 60 segundos, el tiempo por latido es 60 / {datos_ritmo} = {periodo_calculado} segundos.
```

### 25 — Secuencia de un metrónomo

```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "intermedio"
  tags: ["ritmo", "orden"]

variables:
  f_val: 2.0
  t_val: 0.5

respuesta_orden: ["0.5", "1.0", "2.0"]
tipo: ordenar
opciones_explicitas: ["0.5", "1.0", "2.0"]

enunciado: "Un metrónomo marca una frecuencia de {f_val} Hz. Ordena los siguientes valores de período (en segundos) de menor a mayor:"

explicacion: |
  Si f = 2 Hz, el período es T = 1/2 = 0.5 s. Los períodos correspondientes a frecuencias de 2Hz, 1Hz y 0.5Hz son 0.5s, 1s y 2s respectivamente.
```
