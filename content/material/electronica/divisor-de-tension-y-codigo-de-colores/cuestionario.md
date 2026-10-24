# Electrónica — Divisor de tensión y código de colores (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Dígito del color rojo

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["codigo_de_colores"]

enunciado: "En el código de colores de resistencias, ¿qué dígito representa el rojo?"
tipo: mc
opciones_explicitas:
  - "2"
  - "1"
  - "3"
respuesta: "2"

explicacion: |
  Negro 0, marrón 1, rojo 2, naranja 3.
```

### 2 — Color del cero

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["codigo_de_colores"]

enunciado: "¿Qué color representa el dígito 0?"
tipo: mc
opciones_explicitas:
  - "Negro"
  - "Blanco"
  - "Marrón"
respuesta: "Negro"

explicacion: |
  El negro es 0 y el blanco es 9.
```

### 3 — Tolerancia dorada

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["codigo_de_colores"]

enunciado: "Una banda dorada de tolerancia indica..."
tipo: mc
opciones_explicitas:
  - "5 %"
  - "10 %"
  - "1 %"
respuesta: "5 %"

explicacion: |
  El plateado indica 10 %.
```

### 4 — Tolerancia plateada

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["codigo_de_colores"]

enunciado: "Una banda plateada de tolerancia indica..."
tipo: mc
opciones_explicitas:
  - "10 %"
  - "5 %"
  - "2 %"
respuesta: "10 %"

explicacion: |
  El dorado indica 5 %.
```

### 5 — Función de la tercera banda

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["codigo_de_colores"]

enunciado: "En una resistencia de cuatro bandas, ¿qué indica la tercera banda?"
tipo: mc
opciones_explicitas:
  - "El multiplicador"
  - "El segundo dígito"
  - "La potencia"
respuesta: "El multiplicador"

explicacion: |
  Las dos primeras son dígitos, la tercera el multiplicador y la cuarta la tolerancia.
```

### 6 — Marrón negro rojo

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["codigo_de_colores"]

respuesta: verdadero
tipo: vf

enunciado: "Una resistencia marrón, negro, rojo, dorado vale 1 kΩ con tolerancia de 5 %."

explicacion: |
  1, 0 y multiplicador 100: 10 × 100 = 1000 Ω.
```

### 7 — Rango por tolerancia

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "intermedio"
  tags: ["tolerancia"]

enunciado: "Una resistencia de 1 kΩ al 5 % puede medir entre..."
tipo: mc
opciones_explicitas:
  - "950 Ω y 1050 Ω"
  - "900 Ω y 1100 Ω"
  - "995 Ω y 1005 Ω"
respuesta: "950 Ω y 1050 Ω"

explicacion: |
  El 5 % de 1000 Ω son 50 Ω hacia arriba y hacia abajo.
```

### 8 — E12

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["series"]

respuesta: falso
tipo: vf

enunciado: "Las resistencias se fabrican en todos los valores posibles, sin series normalizadas."

explicacion: |
  Se fabrican en series normalizadas como la E12 o la E24.
```

### 9 — Serie común

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["series"]

tipo: completar
enunciado: "La serie de valores de uso común con tolerancia del 10 % se llama E___."
respuestas_validas:
  - "12"

explicacion: |
  La serie E12 tiene doce valores por década.
```

### 10 — Valor por colores

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["codigo_de_colores", "calculo"]

variables:
  d1: random(1, 9)
  d2: random(0, 9)
  m: random(0, 3)
  valor: (d1 * 10 + d2) * 10 ^ m

respuesta: valor
tipo: input
tolerancia_abs: 0.5

enunciado: "Una resistencia tiene las dos primeras bandas {d1} y {d2} (dígitos) y el multiplicador es 10 elevado a {m}. ¿Cuánto vale, en ohmios?"

pasos:
  - "Número formado: {d1 * 10 + d2}"
  - "Multiplicar por 10 ^ {m}"

explicacion: |
  El valor es el número de dos dígitos por el multiplicador.
```

### 11 — Color de la banda por dígito

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "intermedio"
  tags: ["codigo_de_colores"]

variables:
  colores: ["negro", "marrón", "rojo", "naranja", "amarillo", "verde", "azul", "violeta", "gris", "blanco"]
  d: uno_de([2, 3, 4, 5, 6, 7])

enunciado: "¿Qué color representa el dígito {d}?"
tipo: mc
opciones_explicitas:
  - colores[d]
  - colores[d - 1]
  - colores[d + 1]
respuesta: colores[d]

explicacion: |
  Negro 0, marrón 1, rojo 2, naranja 3, amarillo 4, verde 5, azul 6, violeta 7.
```

### 12 — Potencia por tensión y corriente

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["potencia", "calculo"]

variables:
  v: random(2, 24)
  i: random(1, 5)
  p: v * i

respuesta: p
tipo: input
tolerancia_abs: 0.01

enunciado: "Una resistencia tiene {v} V entre sus extremos y circulan {i} A. ¿Qué potencia disipa, en W?"

pasos:
  - "P = V × I"

explicacion: |
  La potencia es el producto de tensión por corriente.
```

### 13 — Potencia por corriente y resistencia

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "intermedio"
  tags: ["potencia", "calculo"]

variables:
  i: random(1, 4)
  r: random(2, 20)
  p: i * i * r

respuesta: p
tipo: input
tolerancia_abs: 0.01

enunciado: "Por una resistencia de {r} Ω circulan {i} A. ¿Qué potencia disipa, en W?"

pasos:
  - "P = I² × R"
  - "{i}² × {r}"

explicacion: |
  Con la corriente y la resistencia se usa P = I² × R.
```

### 14 — Potencia por tensión y resistencia

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "intermedio"
  tags: ["potencia", "calculo"]

variables:
  v: uno_de([5, 10, 12, 20])
  r: uno_de([5, 10, 20, 25, 50])
  p: redondear(v * v / r, 2)

respuesta: p
tipo: input
tolerancia_abs: 0.01

enunciado: "Una resistencia de {r} Ω se conecta a {v} V. ¿Qué potencia disipa, en W?"

pasos:
  - "P = V² / R"

explicacion: |
  P = V² / R. Si superás la potencia nominal, la resistencia se sobrecalienta.
```

### 15 — Margen de potencia

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "intermedio"
  tags: ["potencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si la potencia calculada supera la que soporta la resistencia, esta se calienta en exceso y puede dañarse."

explicacion: |
  Hay que elegir una resistencia de mayor potencia, con margen.
```

### 16 — Divisor de tensión

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["divisor", "calculo"]

variables:
  vin: uno_de([5, 9, 12, 24])
  r1: uno_de([1000, 2000, 3000, 4000])
  r2: uno_de([1000, 2000, 3000, 4000, 6000])
  vout: redondear(vin * r2 / (r1 + r2), 2)

respuesta: vout
tipo: input
tolerancia_abs: 0.02

enunciado: "En un divisor de tensión, Vin = {vin} V, R1 = {r1} Ω y R2 = {r2} Ω. ¿Cuánto vale Vout (la tensión en R2), en V?"

pasos:
  - "Vout = Vin × R2 / (R1 + R2)"

explicacion: |
  La tensión se reparte en proporción a las resistencias.
```

### 17 — Divisor con resistencias iguales

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "basico"
  tags: ["divisor", "calculo"]

variables:
  vin: random(4, 30)
  vout: redondear(vin / 2, 2)

respuesta: vout
tipo: input
tolerancia_abs: 0.02

enunciado: "Un divisor de tensión tiene dos resistencias iguales y Vin = {vin} V. ¿Cuánto vale Vout, en V?"

pasos:
  - "Si R1 = R2, la salida es la mitad"

explicacion: |
  Con resistencias iguales, cada una recibe la mitad de la tensión.
```

### 18 — Corriente del divisor

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "intermedio"
  tags: ["divisor", "calculo"]

variables:
  vin: uno_de([6, 9, 12, 24])
  r1: uno_de([100, 200, 300])
  r2: uno_de([100, 200, 600])
  i: redondear(vin / (r1 + r2) * 1000, 1)

respuesta: i
tipo: input
tolerancia_abs: 0.1

enunciado: "Un divisor de tensión con R1 = {r1} Ω y R2 = {r2} Ω se alimenta con {vin} V. ¿Qué corriente circula por la serie, en mA?"

pasos:
  - "I = Vin / (R1 + R2)"
  - "Convertir de A a mA multiplicando por 1000"

explicacion: |
  En serie la corriente es la misma en las dos resistencias.
```

### 19 — Salida si R2 es muy grande

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "intermedio"
  tags: ["divisor"]

enunciado: "Si R2 es mucho mayor que R1, la salida del divisor..."
tipo: mc
opciones_explicitas:
  - "Se acerca a Vin"
  - "Se acerca a cero"
  - "Es exactamente la mitad de Vin"
respuesta: "Se acerca a Vin"

explicacion: |
  Casi toda la tensión cae en la resistencia más grande.
```

### 20 — Efecto de una carga

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "intermedio"
  tags: ["divisor", "carga"]

enunciado: "Si se conecta una carga en paralelo con R2, la tensión de salida..."
tipo: mc
opciones_explicitas:
  - "Baja"
  - "Sube"
  - "No cambia"
respuesta: "Baja"

explicacion: |
  La resistencia equivalente de esa parte disminuye, y recibe una fracción menor de la tensión.
```

### 21 — Divisor para alimentar equipos

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "avanzado"
  tags: ["divisor", "carga"]

respuesta: falso
tipo: vf

enunciado: "Un divisor de tensión es una buena forma de alimentar un equipo que consume mucha corriente."

explicacion: |
  Sirve para señales de poca corriente; para alimentar equipos se usa un regulador.
```

### 22 — Regla práctica de carga

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "avanzado"
  tags: ["divisor", "carga"]

enunciado: "Una regla práctica para que la carga no altere mucho el divisor es que su resistencia sea..."
tipo: mc
opciones_explicitas:
  - "Al menos diez veces mayor que R2"
  - "Igual a R2"
  - "Mucho menor que R2"
respuesta: "Al menos diez veces mayor que R2"

explicacion: |
  Una carga de resistencia alta casi no modifica el equivalente.
```

### 23 — Elegir R2

```
metadata:
  materia: "electronica"
  tema: "divisor_de_tension_y_codigo_de_colores"
  nivel: "avanzado"
  tags: ["divisor", "diseno"]

variables:
  vin: uno_de([5, 10, 12])
  r1: uno_de([1000, 2000, 4000])
  k: uno_de([1, 2])
  r2: r1 * k

respuesta: redondear(vin * r2 / (r1 + r2), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un divisor tiene R1 = {r1} Ω y R2 = {r2} Ω con Vin = {vin} V. ¿Cuál es la salida, en V?"

pasos:
  - "Vout = Vin × R2 / (R1 + R2)"

explicacion: |
  Se aplica la fórmula del divisor.
```
