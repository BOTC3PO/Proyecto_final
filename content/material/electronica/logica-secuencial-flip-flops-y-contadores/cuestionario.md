# Electrónica — Lógica secuencial: flip-flops y contadores (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Secuencial

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["secuencial"]

enunciado: "En un circuito secuencial, la salida depende..."
tipo: mc
opciones_explicitas:
  - "De las entradas y del estado anterior"
  - "Solo de las entradas"
  - "Solo del reloj"
respuesta: "De las entradas y del estado anterior"

explicacion: |
  Tiene memoria.
```

### 2 — Base de la memoria

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["secuencial"]

enunciado: "La memoria de un circuito secuencial se basa en..."
tipo: mc
opciones_explicitas:
  - "Un lazo de realimentación"
  - "Un transformador"
  - "Un divisor de tensión"
respuesta: "Un lazo de realimentación"

explicacion: |
  La salida vuelve a la entrada.
```

### 3 — Set

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["latch"]

enunciado: "En un latch SR, activar la entrada S hace que Q pase a..."
tipo: mc
opciones_explicitas:
  - "1"
  - "0"
  - "Quedar igual"
respuesta: "1"

explicacion: |
  S es Set.
```

### 4 — Reset

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["latch"]

enunciado: "En un latch SR, activar la entrada R hace que Q pase a..."
tipo: mc
opciones_explicitas:
  - "0"
  - "1"
  - "Quedar igual"
respuesta: "0"

explicacion: |
  R es Reset.
```

### 5 — Estado prohibido

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["latch"]

respuesta: verdadero
tipo: vf

enunciado: "En un latch SR, activar S y R a la vez es una combinación inválida."

explicacion: |
  Deja el estado indefinido al soltarlas.
```

### 6 — Ambas inactivas

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["latch"]

enunciado: "Si S y R están inactivas, el latch..."
tipo: mc
opciones_explicitas:
  - "Mantiene el valor anterior"
  - "Pasa a 1"
  - "Pasa a 0"
respuesta: "Mantiene el valor anterior"

explicacion: |
  Esa es la función de memoria.
```

### 7 — Flanco

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["flipflop"]

enunciado: "Un flip-flop cambia de estado..."
tipo: mc
opciones_explicitas:
  - "En el flanco de la señal de reloj"
  - "Siempre que cambia la entrada"
  - "Solo cuando se lo apaga"
respuesta: "En el flanco de la señal de reloj"

explicacion: |
  Entre flancos, ignora la entrada.
```

### 8 — Flanco de subida

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["flipflop"]

enunciado: "El flanco de subida del reloj es el paso de..."
tipo: mc
opciones_explicitas:
  - "0 a 1"
  - "1 a 0"
  - "Alta a baja frecuencia"
respuesta: "0 a 1"

explicacion: |
  El de bajada es de 1 a 0.
```

### 9 — Flip-flop D

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["flipflop"]

enunciado: "Un flip-flop D, en cada flanco activo..."
tipo: mc
opciones_explicitas:
  - "Copia a Q el valor de D"
  - "Invierte Q"
  - "Pone Q a 0 siempre"
respuesta: "Copia a Q el valor de D"

explicacion: |
  Sirve para guardar un bit.
```

### 10 — Q siguiente de D

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["flipflop", "calculo"]

variables:
  d: uno_de([0, 1])
  q: d

respuesta: q
tipo: input
tolerancia_abs: 0

enunciado: "Un flip-flop D recibe D = {d} y llega un flanco activo. ¿Cuánto vale Q después (0 o 1)?"

pasos:
  - "Q copia a D"

explicacion: |
  Q toma el valor de D.
```

### 11 — Toggle en JK

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["flipflop", "calculo"]

variables:
  qa: uno_de([0, 1])
  q: 1 - qa

respuesta: q
tipo: input
tolerancia_abs: 0

enunciado: "Un flip-flop JK con J = K = 1 tiene Q = {qa} y llega un flanco activo. ¿Cuánto vale Q después (0 o 1)?"

pasos:
  - "Con J = K = 1, la salida se invierte"

explicacion: |
  Es el modo toggle.
```

### 12 — Toggle en T

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["flipflop", "calculo"]

variables:
  qa: uno_de([0, 1])
  t: 1
  q: 1 - qa

respuesta: q
tipo: input
tolerancia_abs: 0

enunciado: "Un flip-flop T con T = 1 tiene Q = {qa} y llega un flanco activo. ¿Cuánto vale Q después (0 o 1)?"

pasos:
  - "Con T = 1 cambia de estado"

explicacion: |
  La salida alterna en cada flanco.
```

### 13 — Divisor de frecuencia

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["flipflop"]

enunciado: "Un flip-flop T con T = 1 divide la frecuencia del reloj por..."
tipo: mc
opciones_explicitas:
  - "2"
  - "4"
  - "10"
respuesta: "2"

explicacion: |
  La salida cambia una vez por flanco: hace un ciclo cada dos ciclos del reloj.
```

### 14 — Frecuencia dividida

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["flipflop", "calculo"]

variables:
  f: uno_de([1000, 2000, 4000, 8000])
  n: uno_de([1, 2, 3])
  fo: f / 2 ^ n

respuesta: fo
tipo: input
tolerancia_abs: 0.5

enunciado: "Un reloj de {f} Hz pasa por {n} flip-flops T en cascada (cada uno divide por 2). ¿Cuál es la frecuencia de salida final, en Hz?"

pasos:
  - "Cada flip-flop divide por 2"
  - "fo = f / 2^n"

explicacion: |
  Cada etapa divide por 2.
```

### 15 — Estados de un contador

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["contador", "calculo"]

variables:
  n: uno_de([2, 3, 4, 5, 8])
  est: 2 ^ n

respuesta: est
tipo: input
tolerancia_abs: 0

enunciado: "Un contador tiene {n} flip-flops. ¿Cuántos estados distintos puede tener?"

pasos:
  - "Estados = 2^n"

explicacion: |
  Cada flip-flop duplica los estados posibles.
```

### 16 — Máximo del contador

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["contador", "calculo"]

variables:
  n: uno_de([3, 4, 5, 6, 8])
  mx: 2 ^ n - 1

respuesta: mx
tipo: input
tolerancia_abs: 0

enunciado: "Un contador binario tiene {n} flip-flops y parte de cero. ¿Hasta qué número cuenta antes de volver a cero?"

pasos:
  - "Máximo = 2^n − 1"

explicacion: |
  Cuenta de 0 a 2^n − 1.
```

### 17 — Flip-flops necesarios

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "avanzado"
  tags: ["contador", "calculo"]

variables:
  n: uno_de([3, 4, 5, 6])
  estados: 2 ^ n

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Se necesita un contador de {estados} estados. ¿Cuántos flip-flops hacen falta?"

pasos:
  - "n = log2(estados)"

explicacion: |
  2 elevado a n da la cantidad de estados.
```

### 18 — Registro

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["registro"]

enunciado: "Un registro de 8 bits guarda..."
tipo: mc
opciones_explicitas:
  - "Un byte"
  - "Un kilobyte"
  - "Un solo bit"
respuesta: "Un byte"

explicacion: |
  Son 8 flip-flops con un mismo reloj.
```

### 19 — Registro de desplazamiento

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["registro"]

enunciado: "En un registro de desplazamiento, en cada pulso de reloj los bits..."
tipo: mc
opciones_explicitas:
  - "Avanzan una posición"
  - "Se borran"
  - "Se duplican"
respuesta: "Avanzan una posición"

explicacion: |
  Se usa para convertir entre serie y paralelo.
```

### 20 — Sincrónico

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["contador"]

enunciado: "En un contador sincrónico, todos los flip-flops..."
tipo: mc
opciones_explicitas:
  - "Comparten el mismo reloj"
  - "Reciben distinto reloj"
  - "No usan reloj"
respuesta: "Comparten el mismo reloj"

explicacion: |
  Es más rápido y confiable que el asincrónico.
```

### 21 — Asincrónico

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["contador"]

respuesta: verdadero
tipo: vf

enunciado: "En un contador asincrónico, cada flip-flop recibe como reloj la salida del anterior."

explicacion: |
  Es simple, pero más lento.
```

### 22 — Uso del contador

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["contador", "aplicaciones"]

enunciado: "Un uso típico de los contadores es..."
tipo: mc
opciones_explicitas:
  - "Dividir frecuencias y medir tiempos"
  - "Rectificar la red"
  - "Amplificar señales"
respuesta: "Dividir frecuencias y medir tiempos"

explicacion: |
  También armar relojes digitales.
```

### 23 — Estado

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["secuencial", "vocabulario"]

tipo: completar
enunciado: "A la información que un circuito secuencial recuerda se la llama ___."
respuestas_validas:
  - "estado"

explicacion: |
  La salida depende de las entradas y del estado.
```
