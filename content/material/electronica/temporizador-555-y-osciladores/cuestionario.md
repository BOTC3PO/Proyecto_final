# Electrónica — Temporizador 555 y osciladores (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555"]

enunciado: "El circuito integrado 555 se usa principalmente para..."
tipo: mc
opciones_explicitas:
  - "Generar pulsos y temporizaciones"
  - "Rectificar la red"
  - "Almacenar datos"
respuesta: "Generar pulsos y temporizaciones"

explicacion: |
  Con pocas resistencias y un capacitor.
```

### 2 — Modo monoestable

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555", "monoestable"]

enunciado: "En modo monoestable, el 555..."
tipo: mc
opciones_explicitas:
  - "Genera un solo pulso de duración fija al dispararse"
  - "Genera una onda cuadrada continua"
  - "No hace nada"
respuesta: "Genera un solo pulso de duración fija al dispararse"

explicacion: |
  Tiene un único estado estable.
```

### 3 — Modo astable

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555", "astable"]

enunciado: "En modo astable, el 555..."
tipo: mc
opciones_explicitas:
  - "Genera una onda cuadrada continua"
  - "Genera un solo pulso"
  - "Amplifica una señal"
respuesta: "Genera una onda cuadrada continua"

explicacion: |
  No tiene estado estable.
```

### 4 — Duración del pulso

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555", "monoestable", "calculo"]

variables:
  r: uno_de([10000, 47000, 100000, 220000])
  c: uno_de([1, 10, 47, 100])
  t: redondear(1.1 * r * c / 1000000, 3)

respuesta: t
tipo: input
tolerancia_abs: 0.01

enunciado: "Un 555 monoestable tiene R = {r} Ω y C = {c} µF. ¿Cuánto dura el pulso, en segundos? (redondeá a tres decimales)"

pasos:
  - "T = 1,1 × R × C"
  - "Pasar µF a F"

explicacion: |
  T = 1,1 R C.
```

### 5 — Resistencia para un pulso

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "avanzado"
  tags: ["555", "monoestable", "calculo"]

variables:
  c: uno_de([10, 100])
  t: uno_de([1.1, 2.2, 5.5, 11])
  r: redondear(t / (1.1 * c / 1000000), 0)

respuesta: r
tipo: input
tolerancia_abs: 10

enunciado: "Se quiere un pulso de {t} s con un capacitor de {c} µF. ¿Qué resistencia hace falta, en Ω?"

pasos:
  - "R = T / (1,1 × C)"

explicacion: |
  Se despeja R de T = 1,1 R C.
```

### 6 — Capacitor para un pulso

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "avanzado"
  tags: ["555", "monoestable", "calculo"]

variables:
  r: uno_de([10000, 100000])
  t: uno_de([1.1, 2.2, 5.5])
  c: redondear(t / (1.1 * r) * 1000000, 1)

respuesta: c
tipo: input
tolerancia_abs: 0.5

enunciado: "Se quiere un pulso de {t} s con R = {r} Ω. ¿Qué capacidad hace falta, en µF?"

pasos:
  - "C = T / (1,1 × R)"

explicacion: |
  Se despeja C de T = 1,1 R C.
```

### 7 — Frecuencia astable

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "intermedio"
  tags: ["555", "astable", "calculo"]

variables:
  r1: uno_de([1000, 4700, 10000])
  r2: uno_de([10000, 47000, 100000])
  c: uno_de([0.1, 1, 10])
  f: redondear(1.44 / ((r1 + 2 * r2) * c / 1000000), 1)

respuesta: f
tipo: input
tolerancia_abs: 0.5

enunciado: "Un 555 astable tiene R1 = {r1} Ω, R2 = {r2} Ω y C = {c} µF. ¿Qué frecuencia genera, en Hz? (redondeá a un decimal)"

pasos:
  - "f = 1,44 / ((R1 + 2 R2) × C)"

explicacion: |
  Se aplica la fórmula del modo astable.
```

### 8 — Ciclo de trabajo

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "intermedio"
  tags: ["555", "astable", "calculo"]

variables:
  r1: uno_de([1000, 4700, 10000])
  r2: uno_de([10000, 47000, 100000])
  d: redondear((r1 + r2) / (r1 + 2 * r2) * 100, 1)

respuesta: d
tipo: input
tolerancia_abs: 0.3

enunciado: "Un 555 astable tiene R1 = {r1} Ω y R2 = {r2} Ω. ¿Cuál es el ciclo de trabajo, en %? (redondeá a un decimal)"

pasos:
  - "D = (R1 + R2) / (R1 + 2 R2)"

explicacion: |
  Es la proporción del período en alto.
```

### 9 — Período a partir de la frecuencia

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555", "calculo"]

variables:
  f: uno_de([1, 2, 4, 5, 10])
  t: redondear(1 / f * 1000, 1)

respuesta: t
tipo: input
tolerancia_abs: 0.1

enunciado: "Una señal tiene una frecuencia de {f} Hz. ¿Cuál es su período, en milisegundos?"

pasos:
  - "T = 1 / f"

explicacion: |
  El período es la inversa de la frecuencia.
```

### 10 — Frecuencia a partir del período

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555", "calculo"]

variables:
  t: uno_de([2, 4, 5, 10, 20])
  f: redondear(1000 / t, 1)

respuesta: f
tipo: input
tolerancia_abs: 0.1

enunciado: "Una señal tiene un período de {t} ms. ¿Cuál es su frecuencia, en Hz?"

pasos:
  - "f = 1 / T"

explicacion: |
  La frecuencia es la inversa del período.
```

### 11 — Tensión de umbral alto

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "intermedio"
  tags: ["555", "funcionamiento"]

variables:
  vcc: uno_de([5, 9, 12, 15])
  u: redondear(2 * vcc / 3, 2)

respuesta: u
tipo: input
tolerancia_abs: 0.02

enunciado: "Un 555 se alimenta con {vcc} V. ¿Qué tensión de umbral superior vigila el comparador, en V? (redondeá a dos decimales)"

pasos:
  - "Umbral superior = 2 Vcc / 3"

explicacion: |
  Dos tercios de la alimentación.
```

### 12 — Tensión de umbral bajo

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "intermedio"
  tags: ["555", "funcionamiento"]

variables:
  vcc: uno_de([6, 9, 12, 15])
  u: redondear(vcc / 3, 2)

respuesta: u
tipo: input
tolerancia_abs: 0.02

enunciado: "Un 555 se alimenta con {vcc} V. ¿Qué tensión de umbral inferior vigila el comparador, en V? (redondeá a dos decimales)"

pasos:
  - "Umbral inferior = Vcc / 3"

explicacion: |
  Un tercio de la alimentación.
```

### 13 — Ciclo mayor al 50

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "avanzado"
  tags: ["555", "astable"]

respuesta: verdadero
tipo: vf

enunciado: "En la configuración astable clásica del 555, el ciclo de trabajo es siempre mayor que 50 %."

explicacion: |
  Porque R1 suma tiempo en alto pero no en bajo.
```

### 14 — Divisor interno

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "intermedio"
  tags: ["555", "funcionamiento"]

respuesta: verdadero
tipo: vf

enunciado: "El 555 tiene un divisor interno de tres resistencias iguales."

explicacion: |
  Define los umbrales de Vcc/3 y 2Vcc/3.
```

### 15 — Cantidad de patas

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555"]

enunciado: "La versión más común del 555 tiene..."
tipo: mc
opciones_explicitas:
  - "Ocho patas"
  - "Cuatro patas"
  - "Dieciséis patas"
respuesta: "Ocho patas"

explicacion: |
  Se presenta en encapsulado DIP-8.
```

### 16 — Descarga

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "intermedio"
  tags: ["555", "funcionamiento"]

enunciado: "En el modo astable, el capacitor se descarga a través de..."
tipo: mc
opciones_explicitas:
  - "R2"
  - "R1 solamente"
  - "Ninguna resistencia"
respuesta: "R2"

explicacion: |
  Por eso el tiempo en bajo depende solo de R2.
```

### 17 — Aplicación

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555", "aplicaciones"]

enunciado: "Un uso típico del 555 es..."
tipo: mc
opciones_explicitas:
  - "Hacer destellar un LED"
  - "Convertir alterna en continua"
  - "Medir temperatura"
respuesta: "Hacer destellar un LED"

explicacion: |
  También generar tonos y temporizar luces.
```

### 18 — Mayor precisión

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "avanzado"
  tags: ["555", "aplicaciones"]

enunciado: "Para una frecuencia muy precisa, como la de un microcontrolador, se usa..."
tipo: mc
opciones_explicitas:
  - "Un oscilador a cristal de cuarzo"
  - "Un 555 con potenciómetro"
  - "Un diodo Zener"
respuesta: "Un oscilador a cristal de cuarzo"

explicacion: |
  El cuarzo es mucho más estable.
```

### 19 — Monoestable y disparo

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "intermedio"
  tags: ["555", "monoestable"]

respuesta: verdadero
tipo: vf

enunciado: "El 555 monoestable necesita un pulso de disparo para generar su pulso de salida."

explicacion: |
  Sin disparo permanece en su estado estable.
```

### 20 — Ciclo de trabajo

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "intermedio"
  tags: ["555", "vocabulario"]

tipo: completar
enunciado: "La proporción del período durante la cual la salida está en alto se llama ciclo de ___."
respuestas_validas:
  - "trabajo"
  - "servicio"
  - "útil"

explicacion: |
  También se llama duty cycle.
```

### 21 — Período y frecuencia

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555", "vocabulario"]

enunciado: "Una frecuencia de 1 kHz equivale a un período de..."
tipo: mc
opciones_explicitas:
  - "1 ms"
  - "1 s"
  - "1 µs"
respuesta: "1 ms"

explicacion: |
  T = 1 / 1000 Hz.
```

### 22 — Comparadores

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "avanzado"
  tags: ["555", "funcionamiento"]

respuesta: verdadero
tipo: vf

enunciado: "Dentro del 555 hay dos comparadores que vigilan la tensión del capacitor externo."

explicacion: |
  Uno detecta Vcc/3 y el otro 2Vcc/3.
```
