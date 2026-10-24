# Fisica — movimiento armonico simple y ondas estacionarias (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Condición del MAS

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "basico"
  tags: ["concepto"]

enunciado: "Un movimiento es armónico simple cuando la fuerza sobre el cuerpo es..."
tipo: mc
opciones_explicitas:
  - "proporcional al desplazamiento y dirigida al equilibrio"
  - "constante en módulo y dirección"
  - "proporcional a la velocidad"
  - "nula en todo momento"
respuesta: "proporcional al desplazamiento y dirigida al equilibrio"

explicacion: |
  Es la ley de Hooke: F = −k·x.
```

### 2 — Relación período-frecuencia

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "basico"
  tags: ["formula"]

enunciado: "La frecuencia es la inversa del período: f = 1/___."
tipo: completar
respuestas_validas:
  - "T"
  - "t"
  - "período"
  - "periodo"

explicacion: |
  Si el período es 0,5 s, la frecuencia es 2 Hz.
```

### 3 — Resorte: dependencia

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["resorte"]

enunciado: "Si se cuadruplica la masa que cuelga de un resorte, el período se..."
tipo: mc
opciones_explicitas:
  - "duplica"
  - "cuadruplica"
  - "reduce a la mitad"
  - "mantiene igual"
respuesta: "duplica"

explicacion: |
  T = 2π√(m/k): al multiplicar m por 4 el período se multiplica por √4 = 2.
```

### 4 — Péndulo: dependencia

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["pendulo"]

enunciado: "El período de un péndulo simple de ángulos pequeños NO depende de..."
tipo: mc
opciones_explicitas:
  - "la masa de la pesa"
  - "el largo del hilo"
  - "la gravedad del lugar"
  - "las tres cosas anteriores"
respuesta: "la masa de la pesa"

explicacion: |
  T = 2π√(L/g) solo involucra el largo y la gravedad.
```

### 5 — Velocidad máxima

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["mas"]

enunciado: "En un MAS, la velocidad del cuerpo es máxima cuando pasa por..."
tipo: mc
opciones_explicitas:
  - "la posición de equilibrio"
  - "los extremos"
  - "la mitad de la amplitud únicamente"
  - "ningún punto, es constante"
respuesta: "la posición de equilibrio"

explicacion: |
  Allí toda la energía es cinética; en los extremos la velocidad es cero.
```

### 6 — Aceleración máxima

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["mas"]

enunciado: "En un MAS, la aceleración es máxima en..."
tipo: mc
opciones_explicitas:
  - "los extremos"
  - "el equilibrio"
  - "todos los puntos por igual"
  - "la mitad del recorrido"
respuesta: "los extremos"

explicacion: |
  La fuerza restauradora es máxima donde el desplazamiento es máximo.
```

### 7 — Amplitud y energía

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["energia"]

enunciado: "Si se duplica la amplitud de un oscilador con resorte, su energía mecánica se cuadruplica."
tipo: vf
respuesta: verdadero

explicacion: |
  E = ½kA²: depende del cuadrado de la amplitud.
```

### 8 — Qué es un nodo

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "basico"
  tags: ["ondas"]

enunciado: "En una onda estacionaria, un nodo es un punto que..."
tipo: mc
opciones_explicitas:
  - "no oscila"
  - "oscila con la máxima amplitud"
  - "se mueve a la velocidad de la onda"
  - "cambia de frecuencia"
respuesta: "no oscila"

explicacion: |
  Los antinodos son los puntos de máxima oscilación.
```

### 9 — Cuerda fija

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["cuerdas"]

enunciado: "En una cuerda sujeta en ambos extremos, la frecuencia del segundo armónico respecto de la fundamental es..."
tipo: mc
opciones_explicitas:
  - "el doble"
  - "la mitad"
  - "igual"
  - "el triple"
respuesta: "el doble"

explicacion: |
  f_n = n·f1.
```

### 10 — Armónicos del tubo cerrado

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "avanzado"
  tags: ["tubos"]

enunciado: "Un tubo cerrado en un extremo produce solamente los armónicos..."
tipo: mc
opciones_explicitas:
  - "impares"
  - "pares"
  - "todos"
  - "ninguno"
respuesta: "impares"

explicacion: |
  f_n = (2n−1)·v/(4L): 1, 3, 5, …
```

### 11 — Tubo abierto

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "avanzado"
  tags: ["tubos"]

enunciado: "Un tubo abierto en ambos extremos produce los mismos armónicos que una cuerda fija en ambos extremos de igual longitud útil (con la velocidad correspondiente)."
tipo: vf
respuesta: verdadero

explicacion: |
  En ambos casos f_n = n·v/(2L).
```

### 12 — Guitarra

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["musica"]

enunciado: "Al apretar con un dedo una cuerda de guitarra contra el mástil, la nota se vuelve más aguda porque..."
tipo: mc
opciones_explicitas:
  - "se acorta la parte de cuerda que vibra"
  - "aumenta la masa de la cuerda"
  - "disminuye la tensión"
  - "aumenta el largo útil"
respuesta: "se acorta la parte de cuerda que vibra"

explicacion: |
  f1 = v/(2L): menor L, mayor frecuencia.
```

### 13 — Antinodos del tercer armónico

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "avanzado"
  tags: ["cuerdas"]

enunciado: "¿Cuántos antinodos tiene el tercer armónico de una cuerda fija en ambos extremos?"
tipo: mc
opciones_explicitas:
  - "3"
  - "2"
  - "4"
  - "6"
respuesta: "3"

explicacion: |
  El armónico n tiene n antinodos y n + 1 nodos (contando los extremos).
```

### 14 — Período de un resorte

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  m: uno_de([0.25, 1, 4])
  k: 100

enunciado: "Una masa de {m} kg cuelga de un resorte de constante {k} N/m. ¿Cuál es el período de oscilación? (en s, redondeá a dos decimales)"
tipo: input
respuesta: redondear(2 * 3.14159 * sqrt(m / k), 2)
tolerancia_abs: 0.01
unidad: "s"

explicacion: |
  T = 2π√(m/k).
```

### 15 — Frecuencia desde el período

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "basico"
  tags: ["calculo"]

variables:
  t: uno_de([0.5, 0.25, 0.1, 2])

enunciado: "Un oscilador tarda {t} s en completar una oscilación. ¿Cuál es su frecuencia? (en Hz)"
tipo: input
respuesta: 1 / t
tolerancia_abs: 0.01
unidad: "Hz"

explicacion: |
  f = 1/T.
```

### 16 — Período de un péndulo

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  l: uno_de([0.25, 1, 2.5])

enunciado: "Un péndulo simple mide {l} m. Con g = 9,8 m/s² y ángulos pequeños, ¿cuál es su período? (en s, redondeá a dos decimales)"
tipo: input
respuesta: redondear(2 * 3.14159 * sqrt(l / 9.8), 2)
tolerancia_abs: 0.01
unidad: "s"

explicacion: |
  T = 2π√(L/g).
```

### 17 — Largo del péndulo

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  t: uno_de([1, 2, 3])

enunciado: "¿Qué largo debe tener un péndulo simple para que su período sea {t} s? Usá g = 9,8 m/s². (en m, redondeá a dos decimales)"
tipo: input
respuesta: redondear(9.8 * t * t / (4 * 3.14159 * 3.14159), 2)
tolerancia_abs: 0.02
unidad: "m"

explicacion: |
  Despejando: L = g·T²/(4π²).
```

### 18 — Energía del oscilador

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  k: uno_de([100, 200, 400])
  a: uno_de([0.05, 0.1])

enunciado: "Un resorte de constante {k} N/m oscila con amplitud {a} m. ¿Cuál es su energía mecánica total? (en J, redondeá a tres decimales)"
tipo: input
respuesta: redondear(0.5 * k * a * a, 3)
tolerancia_abs: 0.002
unidad: "J"

explicacion: |
  E = ½·k·A².
```

### 19 — Velocidad máxima

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  a: uno_de([0.05, 0.1, 0.2])
  m: uno_de([1, 4])
  k: 100

enunciado: "Una masa de {m} kg unida a un resorte de {k} N/m oscila con amplitud {a} m. ¿Cuál es su velocidad máxima? (en m/s, redondeá a tres decimales)"
tipo: input
respuesta: redondear(a * sqrt(k / m), 3)
tolerancia_abs: 0.005
unidad: "m/s"

explicacion: |
  v_max = A·ω con ω = √(k/m).
```

### 20 — Fundamental de una cuerda

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  v: uno_de([200, 300, 400])
  l: uno_de([0.5, 1])

enunciado: "En una cuerda fija en ambos extremos de {l} m, las ondas viajan a {v} m/s. ¿Cuál es la frecuencia fundamental? (en Hz)"
tipo: input
respuesta: v / (2 * l)
tolerancia_abs: 0.5
unidad: "Hz"

explicacion: |
  f1 = v/(2L).
```

### 21 — Tercer armónico

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  f1: uno_de([110, 220])

enunciado: "La frecuencia fundamental de una cuerda es {f1} Hz. ¿Cuál es la frecuencia de su tercer armónico? (en Hz)"
tipo: input
respuesta: 3 * f1
tolerancia_abs: 0.5
unidad: "Hz"

explicacion: |
  f3 = 3·f1.
```

### 22 — Tubo cerrado

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  l: uno_de([0.17, 0.34, 0.85])

enunciado: "Un tubo cerrado en un extremo mide {l} m. Con una velocidad del sonido de 340 m/s, ¿cuál es su frecuencia fundamental? (en Hz)"
tipo: input
respuesta: 340 / (4 * l)
tolerancia_abs: 1
unidad: "Hz"

explicacion: |
  f1 = v/(4L).
```

### 23 — Resonancia

```
metadata:
  materia: "fisica"
  tema: "movimiento_armonico_simple_y_ondas_estacionarias"
  nivel: "avanzado"
  tags: ["resonancia"]

enunciado: "Un tubo cerrado cuya fundamental es 250 Hz puede resonar también a..."
tipo: mc
opciones_explicitas:
  - "750 Hz"
  - "500 Hz"
  - "1000 Hz"
  - "375 Hz"
respuesta: "750 Hz"

explicacion: |
  Solo armónicos impares: 250, 750, 1250, …
```
