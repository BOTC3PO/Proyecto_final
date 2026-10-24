# Matemática — Regla del 10 (cuestionario, 20 preguntas VBLang)

> Tema: `N4` (parte). Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Es divisible por 10?

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(10, 999)
  resto: n - floor(n / 10) * 10

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 10?"

explicacion: |
  Se mira sólo la última cifra: si es 0, el número es divisible por 10.
```

### 2 — ¿Es divisible por 10? (número grande)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(1000, 98765)
  resto: n - floor(n / 10) * 10

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 10?"

explicacion: |
  Con números grandes la regla no cambia: sigue alcanzando con la última
  cifra.
```

### 3 — Elegir cuál es divisible por 10

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  base: random(5, 400) * 10
  otro1: base + 1
  otro2: base + 5

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 10?"

explicacion: |
  Sólo hay que mirar si la última cifra es 0.
```

### 4 — Elegir cuál NO es divisible por 10

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  base: random(5, 400) * 10 + 5
  otro1: random(5, 400) * 10
  otro2: random(5, 400) * 10

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números NO es divisible por 10?"

explicacion: |
  {base} termina en 5, no en 0: cumple la regla del 5 pero no la del 10.
```

### 5 — Completar una cifra válida

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  prefijo: random(1, 99)

tipo: completar
enunciado: "El número {prefijo}_ (falta la última cifra) tiene que ser divisible por 10. Completá la única cifra válida."
respuestas_validas:
  - 0

explicacion: |
  Sólo el 0 sirve como última cifra.
```

### 6 — Divisible por 10 implica divisible por 2

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 10, también es divisible por 2."

explicacion: |
  Como 10 = 2 × 5, todo múltiplo de 10 es también múltiplo de 2.
```

### 7 — Divisible por 10 implica divisible por 5

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 10, también es divisible por 5."

explicacion: |
  Como 10 = 2 × 5, todo múltiplo de 10 es también múltiplo de 5.
```

### 8 — Divisible por 5 NO implica divisible por 10

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10", "comparar_reglas"]

respuesta: falso
tipo: vf

enunciado: "Si un número es divisible por 5, siempre es divisible por 10 también."

explicacion: |
  No es cierto: un número puede terminar en 5 (divisible por 5) sin
  terminar en 0 (no divisible por 10). Ejemplo: 25.
```

### 9 — Última cifra de un número divisible por 10

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  d: random(1, 99)
  n: d * 10

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "El número {n} es divisible por 10. ¿Cuál es su última cifra?"

explicacion: |
  La única cifra posible es el 0.
```

### 10 — Problema: repartir billetes de $10

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10", "problema"]

variables:
  n: random(10, 500)
  resto: n - floor(n / 10) * 10

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se puede pagar exactamente ${n} usando sólo billetes de $10, sin vuelto?"

explicacion: |
  Sólo si {n} es divisible por 10.
```

### 11 — Dividir por 10 (repaso cruzado)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(1, 90)
  dividendo: n * 10

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {dividendo} ÷ 10?"

explicacion: |
  Dividir por 10 es sacarle el último cero al número.
```

### 12 — Ordenar múltiplos de 10

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 10."
opciones_explicitas:
  - "90"
  - "20"
  - "60"
  - "40"
respuesta_orden: ["20", "40", "60", "90"]

explicacion: |
  Los cuatro terminan en 0; sólo hace falta ordenarlos por tamaño.
```

### 13 — Elegir cuál NO es divisible por 10 (comparativo)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  a: random(10, 500) * 10
  b: random(10, 500) * 10 + 3
  c: random(10, 500) * 10

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es divisible por 10?"

explicacion: |
  Hay que revisar la última cifra de cada uno.
```

### 14 — Múltiplos de 10 y la tabla del 10

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 10 son números divisibles por 10."

explicacion: |
  La tabla del 10 (10, 20, 30...) es, exactamente, la lista de los números
  divisibles por 10.
```

### 15 — Completar el próximo múltiplo de 10

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(1, 90) * 10

tipo: completar
enunciado: "Completá el próximo múltiplo de 10 después de {n}."
respuestas_validas:
  - n + 10

explicacion: |
  Los múltiplos de 10 van de 10 en 10.
```

### 16 — Multiplicar por 10 siempre da un múltiplo de 10

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(1, 999)

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que {n} × 10 siempre da un número divisible por 10?"

explicacion: |
  Multiplicar por 10 agrega un cero al final, así que el resultado siempre
  termina en 0.
```

### 17 — Suma de dos múltiplos de 10

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  a: random(1, 100) * 10
  b: random(1, 100) * 10

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 10?"

explicacion: |
  La suma de dos múltiplos de 10 sigue siendo múltiplo de 10.
```

### 18 — Leer la última cifra y decidir

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_10"]

variables:
  n: random(10, 999)
  ultima_cifra: n - floor(n / 10) * 10
  resto: n - floor(n / 10) * 10

respuesta: (resto == 0)
tipo: vf

enunciado: "La última cifra de {n} es {ultima_cifra}. ¿Eso alcanza para asegurar que {n} es divisible por 10?"

explicacion: |
  Alcanza con esa única cifra: sólo si es 0, {n} es divisible por 10.
```

### 19 — Problema: cajas de a 10 unidades

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10", "problema"]

variables:
  n: random(10, 500)
  resto: n - floor(n / 10) * 10

respuesta: (resto == 0)
tipo: vf

enunciado: "Los huevos se venden en cajas cerradas de 10. ¿Se pueden comprar exactamente {n} huevos usando sólo cajas completas?"

explicacion: |
  Sólo si {n} es múltiplo de 10.
```

### 20 — La regla del 10 es la combinación de dos reglas anteriores

```
metadata:
  materia: "matematicas"
  tema: "regla_del_10"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_10", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla del 10 es, en el fondo, cumplir la regla del 2 y la regla del 5 al mismo tiempo."

explicacion: |
  Como 10 = 2 × 5, no hace falta una regla nueva: es la intersección de
  las dos anteriores.
```
