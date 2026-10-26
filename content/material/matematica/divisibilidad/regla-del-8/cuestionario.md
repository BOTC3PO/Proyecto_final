# Matemática — Regla del 8 (cuestionario, 20 preguntas VBLang)

> Tema: `N4` (parte). Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Es divisible por 8?

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 999)
  n: prefijo * 1000 + suffix
  resto: suffix - floor(suffix / 8) * 8

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 8?"

explicacion: |
  Alcanza con mirar el número formado por las últimas tres cifras: si ese
  número es múltiplo de 8, todo el número lo es.
```

### 2 — ¿Es divisible por 8? (número más grande)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  prefijo: random(10, 999)
  suffix: random(0, 999)
  n: prefijo * 1000 + suffix
  resto: suffix - floor(suffix / 8) * 8

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 8?"

explicacion: |
  Con números más grandes la regla no cambia: sólo importan las últimas
  tres cifras.
```

### 3 — El número de las últimas tres cifras

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 999)
  n: prefijo * 1000 + suffix

respuesta: suffix
tipo: input
tolerancia_abs: 0

enunciado: "Para aplicar la regla del 8, ¿qué número forman las últimas tres cifras de {n}?"

explicacion: |
  Es el primer paso: aislar las últimas tres cifras.
```

### 4 — Decidir a partir de las últimas tres cifras

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 999)
  n: prefijo * 1000 + suffix
  resto: suffix - floor(suffix / 8) * 8

respuesta: (resto == 0)
tipo: vf

enunciado: "Las últimas tres cifras de {n} forman el número {suffix}. ¿Eso alcanza para decir que {n} es divisible por 8?"

explicacion: |
  Alcanza con ver si {suffix} es múltiplo de 8.
```

### 5 — Elegir cuál es divisible por 8

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  base: random(3, 120) * 8
  otro1: base + 1
  otro2: base + 4

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 8?"

explicacion: |
  Se comparan las últimas tres cifras de cada opción contra la tabla del 8.
```

### 6 — Elegir cuál NO es divisible por 8

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  base: random(3, 120) * 8 + 2
  otro1: random(3, 120) * 8
  otro2: random(3, 120) * 8

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números NO es divisible por 8?"

explicacion: |
  Las últimas tres cifras de {base} no forman un múltiplo de 8.
```

### 7 — Divisible por 8 implica divisible por 4

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_8", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 8, también es divisible por 4."

explicacion: |
  Como 8 = 4 × 2, todo múltiplo de 8 es también múltiplo de 4 (y de 2).
```

### 8 — Divisible por 4 NO implica divisible por 8

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_8", "comparar_reglas"]

respuesta: falso
tipo: vf

enunciado: "Si un número es divisible por 4, siempre es divisible por 8 también."

explicacion: |
  No es cierto: 12 es divisible por 4 pero no por 8. La regla del 8 es más
  exigente.
```

### 9 — Múltiplos de 8 y la tabla del 8

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_8", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 8 son números divisibles por 8."

explicacion: |
  La tabla del 8 (8, 16, 24, 32...) es, exactamente, la lista de los
  números divisibles por 8.
```

### 10 — Problema: repartir en grupos de 8

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8", "problema"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 999)
  n: prefijo * 1000 + suffix
  resto: suffix - floor(suffix / 8) * 8

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} figuritas entre 8 chicos, en partes iguales y sin que sobre ninguna?"

explicacion: |
  Se puede repartir exacto entre 8 sólo si el total es divisible por 8.
```

### 11 — Terminar en 000 (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  prefijo: random(1, 99)
  n: prefijo * 1000

respuesta: verdadero
tipo: vf

enunciado: "¿Es {n} divisible por 8?"

explicacion: |
  Termina en 000, que cuenta como múltiplo de 8.
```

### 12 — Elegir cuál es divisible por 8 (números grandes)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  base: random(200, 2000) * 8
  otro1: base + 1
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 8?"

explicacion: |
  Con números grandes la regla no cambia: sólo importan las últimas tres
  cifras.
```

### 13 — Ordenar múltiplos de 8

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_8", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 8."
opciones_explicitas:
  - "40"
  - "8"
  - "24"
  - "16"
respuesta_orden: ["8", "16", "24", "40"]

explicacion: |
  Los cuatro son múltiplos de 8; sólo hace falta ordenarlos por tamaño.
```

### 14 — Suma de dos múltiplos de 8

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  a: random(1, 100) * 8
  b: random(1, 100) * 8

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 8?"

explicacion: |
  La suma de dos múltiplos de 8 sigue siendo múltiplo de 8.
```

### 15 — Problema: cajas de 8 unidades

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8", "problema"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 999)
  n: prefijo * 1000 + suffix
  resto: suffix - floor(suffix / 8) * 8

respuesta: (resto == 0)
tipo: vf

enunciado: "Un producto se empaqueta en cajas cerradas de 8 unidades. ¿Se pueden empaquetar exactamente {n} unidades sin que sobre ninguna?"

explicacion: |
  Sólo si {n} es divisible por 8.
```

### 16 — Elegir cuál NO es divisible por 8 (comparativo)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  a: random(10, 150) * 8
  b: random(10, 150) * 8 + 4
  c: random(10, 150) * 8

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es divisible por 8?"

explicacion: |
  Hay que comparar las últimas tres cifras de cada uno contra la tabla
  del 8.
```

### 17 — Completar el próximo múltiplo de 8

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  n: random(1, 200) * 8

tipo: completar
enunciado: "Completá el próximo múltiplo de 8 después de {n}."
respuestas_validas:
  - n + 8

explicacion: |
  Los múltiplos de 8 van de 8 en 8.
```

### 18 — Por qué la regla del 8 mira tres cifras

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_8", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla del 8 mira tres cifras (no dos) porque 1.000 es múltiplo de 8, pero 100 no lo es."

explicacion: |
  Todo lo que esté "de las unidades de mil para arriba" ya es
  automáticamente múltiplo de 8.
```

### 19 — Regla del 8 aplicada a un número de 3 cifras

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_8"]

variables:
  n: random(100, 999)
  resto: n - floor(n / 8) * 8

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 8?"

explicacion: |
  Con un número de 3 cifras, el número completo YA ES sus últimas tres
  cifras.
```

### 20 — Cadena completa: 8 implica 4 y 2

```
metadata:
  materia: "matematicas"
  tema: "regla_del_8"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_8", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 8, también es divisible por 4 y por 2 al mismo tiempo."

explicacion: |
  8 = 4 × 2 = 2 × 2 × 2: todo múltiplo de 8 arrastra ambas divisibilidades.
```
