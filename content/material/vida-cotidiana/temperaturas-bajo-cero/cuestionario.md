# Vida Cotidiana — Temperaturas bajo cero (cuestionario, 21 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. `diferencia = temperatura_final
> - temperatura_inicial`. Cuidado con el cruce por cero.

---

### 1 — Qué es una temperatura bajo cero

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "basico"
  tags: ["temperaturas", "vocabulario"]

enunciado: "¿Qué es una temperatura \"bajo cero\" en la escala Celsius?"
tipo: mc
opciones_explicitas:
  - "Un número negativo, por debajo de los 0°C (donde se congela el agua)"
  - "Cualquier temperatura menor a 20°C"
  - "Una temperatura que sólo existe en el freezer"
respuesta: "Un número negativo, por debajo de los 0°C (donde se congela el agua)"

explicacion: |
  Es simplemente un número negativo en la escala Celsius.
```

### 2 — -10°C es más frío que -5°C

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "basico"
  tags: ["temperaturas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "-10°C es una temperatura más fría que -5°C, aunque el número 10 sea mayor que 5."

explicacion: |
  Con negativos, cuanto más grande el número (sin el signo), más chico
  (más frío) es en realidad.
```

### 3 — Comparar dos temperaturas negativas

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "intermedio"
  tags: ["temperaturas", "comparacion"]

variables:
  temp_a: -random(1, 20)
  temp_b: -random(1, 20)

respuesta: (temp_a < temp_b)
tipo: vf

enunciado: "Un día registró {temp_a}°C, y otro día registró {temp_b}°C. ¿El primer día fue más frío que el segundo?"

explicacion: |
  Se comparan directamente los valores negativos: el menor (más
  negativo) es el más frío.
```

### 4 — Calcular la diferencia (subida)

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "intermedio"
  tags: ["temperaturas", "calculo"]

variables:
  temp_inicial: -random(1, 15)
  temp_final: random(1, 15)

respuesta: temp_final - temp_inicial
tipo: input
tolerancia_abs: 0

enunciado: "La temperatura pasó de {temp_inicial}°C a {temp_final}°C. ¿Cuántos grados subió?"

pasos:
  - "diferencia = {temp_final} - ({temp_inicial}) = {temp_final} + {-temp_inicial}"

explicacion: |
  Se resta la temperatura inicial de la final, con los signos
  correspondientes — no se ignora el signo negativo del inicio.
```

### 5 — Calcular la diferencia (bajada)

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "intermedio"
  tags: ["temperaturas", "calculo"]

variables:
  temp_inicial: random(1, 10)
  temp_final: -random(1, 15)

respuesta: temp_final - temp_inicial
tipo: input
tolerancia_abs: 0

enunciado: "La temperatura pasó de {temp_inicial}°C a {temp_final}°C. ¿Cuántos grados cambió? (negativo si bajó)"

explicacion: |
  El resultado da negativo porque la temperatura bajó.
```

### 6 — El cruce por cero: no es sólo el número final

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "avanzado"
  tags: ["temperaturas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si la temperatura pasa de -5°C a 3°C, subió 8 grados en total (5 para llegar a 0, más 3 más) — no 3 grados, que es sólo el número final."

explicacion: |
  Es el error más común al calcular diferencias de temperatura que
  cruzan el cero.
```

### 7 — Calcular una diferencia con cruce por cero

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "avanzado"
  tags: ["temperaturas", "calculo"]

variables:
  temp_inicial: -random(2, 10)
  temp_final: random(2, 10)

respuesta: temp_final - temp_inicial
tipo: input
tolerancia_abs: 0

enunciado: "Una heladera estaba a {temp_inicial}°C, y ahora está a {temp_final}°C. ¿Cuántos grados subió la temperatura?"

pasos:
  - "{temp_final} - ({temp_inicial}) = {temp_final} + {-temp_inicial}"

explicacion: |
  Hay que sumar la distancia hasta el 0 y la distancia desde el 0 hasta
  el valor final, que es exactamente lo que hace la resta con signos.
```

### 8 — Despejar la temperatura final

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "intermedio"
  tags: ["temperaturas", "calculo"]

variables:
  temp_inicial: -random(1, 15)
  cambio: random(1, 20)

respuesta: temp_inicial + cambio
tipo: input
tolerancia_abs: 0

enunciado: "La temperatura estaba en {temp_inicial}°C, y subió {cambio} grados. ¿Cuál es la temperatura final?"

explicacion: |
  Se suma el cambio a la temperatura inicial.
```

### 9 — Despejar la temperatura inicial

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "intermedio"
  tags: ["temperaturas", "calculo"]

variables:
  temp_final: -random(1, 15)
  cambio: random(1, 10)

respuesta: temp_final - cambio
tipo: input
tolerancia_abs: 0

enunciado: "La temperatura terminó en {temp_final}°C, después de bajar {cambio} grados. ¿Cuál era la temperatura inicial?"

explicacion: |
  Se despeja restando el cambio de la temperatura final, ya que la
  temperatura bajó.
```

### 10 — Calcular la amplitud térmica del día

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "intermedio"
  tags: ["temperaturas", "problema"]

variables:
  temp_minima: -random(1, 10)
  temp_maxima: random(1, 15)

respuesta: temp_maxima - temp_minima
tipo: input
tolerancia_abs: 0

enunciado: "Un día registró una mínima de {temp_minima}°C y una máxima de {temp_maxima}°C. ¿Cuál fue la amplitud térmica (diferencia entre máxima y mínima) de ese día?"

explicacion: |
  La amplitud térmica es siempre máxima menos mínima, con los signos
  correspondientes.
```

### 11 — Ordenar temperaturas de menor a mayor

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "basico"
  tags: ["temperaturas", "orden"]

tipo: ordenar
enunciado: "Ordená estas temperaturas de menor (más frío) a mayor (más calor)."
opciones_explicitas:
  - "5°C"
  - "-12°C"
  - "-3°C"
  - "0°C"
respuesta_orden: ["-12°C", "-3°C", "0°C", "5°C"]

explicacion: |
  Cuanto más negativo el número, más frío (más chico) es.
```

### 12 — 0°C es donde se congela el agua

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "basico"
  tags: ["temperaturas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En la escala Celsius, 0°C es la temperatura a la que el agua se congela, a presión atmosférica normal."

explicacion: |
  Es el punto de referencia de toda la escala Celsius.
```

### 13 — Comparar el valor real, no el número sin signo

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "intermedio"
  tags: ["temperaturas", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto decir que -15°C es \"mayor\" que -3°C sólo porque el 15 es un número más grande que el 3?"

explicacion: |
  Hay que comparar los valores con su signo: -15 es menor que -3, no
  mayor.
```

### 14 — Verificar un cálculo de diferencia (con error a veces)

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "intermedio"
  tags: ["temperaturas", "verificacion"]

variables:
  temp_inicial: -random(1, 15)
  temp_final: random(1, 15)
  correcto: temp_final - temp_inicial
  error: uno_de([0, 0, 0, 5, -5])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.5)
tipo: vf

enunciado: "¿Está bien calculado esto? Temperatura de {temp_inicial}°C a {temp_final}°C, cambio informado: {mostrado} grados."

explicacion: |
  Se vuelve a restar la temperatura inicial de la final, y se compara
  con el valor informado.
```

### 15 — Completar la temperatura inicial

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "intermedio"
  tags: ["temperaturas"]

variables:
  temp_inicial: -random(1, 15)
  cambio: random(1, 20)
  temp_final: temp_inicial + cambio

tipo: completar
enunciado: "La temperatura subió {cambio} grados hasta llegar a {temp_final}°C. Completá: ___ (temperatura inicial) = {temp_final} - {cambio}."
respuestas_validas:
  - temp_inicial

explicacion: |
  Se despeja restando el cambio de la temperatura final.
```

### 16 — Pronóstico del tiempo

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "basico"
  tags: ["temperaturas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un pronóstico del tiempo con temperatura mínima y máxima, restar máxima menos mínima da la amplitud térmica del día."

explicacion: |
  Es una aplicación directa y cotidiana de la resta con temperaturas.
```

### 17 — Freezer más frío que la heladera

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "intermedio"
  tags: ["temperaturas", "problema"]

variables:
  temp_freezer: -random(10, 20)
  temp_heladera: random(1, 8)

respuesta: (temp_freezer < temp_heladera)
tipo: vf

enunciado: "Un freezer está a {temp_freezer}°C, y la heladera a {temp_heladera}°C. ¿El freezer está más frío que la heladera?"

explicacion: |
  Se compara directamente el valor con signo de cada temperatura.
```

### 18 — Bajar temperatura desde un valor positivo hasta negativo

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "avanzado"
  tags: ["temperaturas", "calculo"]

variables:
  temp_inicial: random(1, 8)
  temp_final: -random(1, 10)

respuesta: temp_inicial - temp_final
tipo: input
tolerancia_abs: 0

enunciado: "La temperatura bajó de {temp_inicial}°C a {temp_final}°C. ¿Cuántos grados bajó en total?"

pasos:
  - "{temp_inicial} - ({temp_final}) = {temp_inicial} + {-temp_final}"

explicacion: |
  Se calcula cuánto bajó (un número positivo) restando la temperatura
  final de la inicial.
```

### 19 — Climas polares

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "basico"
  tags: ["temperaturas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En climas polares o de alta montaña, es habitual manejar temperaturas muy negativas, donde comparar bien los signos importa para entender cuánto más frío es un lugar que otro."

explicacion: |
  Es un contexto real donde estas comparaciones dejan de ser
  abstractas.
```

### 20 — La resta siempre resuelve la diferencia

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "intermedio"
  tags: ["temperaturas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aplicar la resta completa (final menos inicial, con signos) siempre da la diferencia correcta, sin importar si las temperaturas cruzan el cero o no."

explicacion: |
  No hace falta un método especial para el caso del cruce por cero: la
  misma resta con signos ya lo resuelve.
```

### 21 — Temperaturas bajo cero (cierre)

```
metadata:
  materia: "vida-cotidiana"
  tema: "temperaturas_bajo_cero"
  nivel: "basico"
  tags: ["temperaturas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las temperaturas bajo cero son números negativos: cuanto más negativo, más frío; y la diferencia entre dos temperaturas siempre es la resta con signos, con cuidado especial cuando cruza el cero."

explicacion: |
  Es la idea central de todo el tema.
```
