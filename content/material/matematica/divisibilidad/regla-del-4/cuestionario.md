# Matemática — Regla del 4 (cuestionario, 20 preguntas VBLang)

> Tema: `N4` (parte). Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Es divisible por 4?

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix
  resto: suffix - floor(suffix / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 4?"

explicacion: |
  Alcanza con mirar el número formado por las últimas dos cifras: si ese
  número es múltiplo de 4, todo el número lo es.
```

### 2 — ¿Es divisible por 4? (número más grande)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(10, 999)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix
  resto: suffix - floor(suffix / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 4?"

explicacion: |
  Con números más grandes la regla no cambia: sólo importan las últimas
  dos cifras.
```

### 3 — El número de las últimas dos cifras

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix

respuesta: suffix
tipo: input
tolerancia_abs: 0

enunciado: "Para aplicar la regla del 4, ¿qué número forman las últimas dos cifras de {n}?"

explicacion: |
  Es el primer paso: aislar las últimas dos cifras como si fueran un
  número aparte.
```

### 4 — Decidir a partir de las últimas dos cifras

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix
  resto: suffix - floor(suffix / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "Las últimas dos cifras de {n} forman el número {suffix}. ¿Eso alcanza para decir que {n} es divisible por 4?"

explicacion: |
  Alcanza con ver si {suffix} es múltiplo de 4.
```

### 5 — Elegir cuál es divisible por 4

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  base: random(3, 200) * 4
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 4?"

explicacion: |
  Se comparan las últimas dos cifras de cada opción contra la tabla del 4.
```

### 6 — Elegir cuál NO es divisible por 4

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  base: random(3, 200) * 4 + 2
  otro1: random(3, 200) * 4
  otro2: random(3, 200) * 4

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números NO es divisible por 4?"

explicacion: |
  Las últimas dos cifras de {base} no forman un múltiplo de 4.
```

### 7 — Completar la cifra que falta

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(1, 9)
  d: random(0, 9)
  base_decena: d * 10
  r: base_decena - floor(base_decena / 4) * 4
  necesaria: (4 - r) - floor((4 - r) / 4) * 4

tipo: completar
enunciado: "El número {prefijo}{d}_ (falta la cifra de las unidades) tiene que ser divisible por 4. Completá una cifra válida."
respuestas_validas:
  - necesaria
  - necesaria + 4

explicacion: |
  Hay que buscar qué cifra hace que las últimas dos cifras formen un
  múltiplo de 4.
```

### 8 — Divisible por 4 implica divisible por 2

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4", "comparar_reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un número es divisible por 4, también es divisible por 2."

explicacion: |
  Como 4 = 2 × 2, todo múltiplo de 4 es también múltiplo de 2.
```

### 9 — Divisible por 2 NO implica divisible por 4

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4", "comparar_reglas"]

respuesta: falso
tipo: vf

enunciado: "Si un número es divisible por 2, siempre es divisible por 4 también."

explicacion: |
  No es cierto: 6 es divisible por 2 pero no por 4. La regla del 4 es más
  exigente.
```

### 10 — Múltiplos de 4 y la tabla del 4

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 4 son números divisibles por 4."

explicacion: |
  La tabla del 4 (4, 8, 12, 16...) es, exactamente, la lista de los
  números divisibles por 4.
```

### 11 — Problema: repartir en grupos de 4

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4", "problema"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix
  resto: suffix - floor(suffix / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} figuritas entre 4 chicos, en partes iguales y sin que sobre ninguna?"

explicacion: |
  Se puede repartir exacto entre 4 sólo si el total es divisible por 4.
```

### 12 — Terminar en 00 (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  prefijo: random(1, 99)
  n: prefijo * 100

respuesta: verdadero
tipo: vf

enunciado: "¿Es {n} divisible por 4?"

explicacion: |
  Termina en 00, que cuenta como múltiplo de 4 (0 es múltiplo de
  cualquier número).
```

### 13 — Elegir cuál es divisible por 4 (números grandes)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  base: random(300, 2000) * 4
  otro1: base + 1
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 4?"

explicacion: |
  Con números grandes la regla no cambia: sólo importan las últimas dos
  cifras.
```

### 14 — Ordenar múltiplos de 4

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos divisibles por 4."
opciones_explicitas:
  - "24"
  - "8"
  - "16"
  - "12"
respuesta_orden: ["8", "12", "16", "24"]

explicacion: |
  Los cuatro son múltiplos de 4; sólo hace falta ordenarlos por tamaño.
```

### 15 — Suma de dos múltiplos de 4

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  a: random(1, 100) * 4
  b: random(1, 100) * 4

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre divisible por 4?"

explicacion: |
  La suma de dos múltiplos de 4 sigue siendo múltiplo de 4.
```

### 16 — Problema: cajas de 4 unidades

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4", "problema"]

variables:
  prefijo: random(1, 9)
  suffix: random(0, 99)
  n: prefijo * 100 + suffix
  resto: suffix - floor(suffix / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "Un producto se empaqueta en cajas cerradas de 4 unidades. ¿Se pueden empaquetar exactamente {n} unidades sin que sobre ninguna?"

explicacion: |
  Sólo si {n} es divisible por 4.
```

### 17 — Elegir cuál NO es divisible por 4 (comparativo)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "avanzado"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  a: random(10, 200) * 4
  b: random(10, 200) * 4 + 2
  c: random(10, 200) * 4

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es divisible por 4?"

explicacion: |
  Hay que comparar las últimas dos cifras de cada uno contra la tabla del
  4.
```

### 18 — Completar el próximo múltiplo de 4

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  n: random(1, 200) * 4

tipo: completar
enunciado: "Completá el próximo múltiplo de 4 después de {n}."
respuestas_validas:
  - n + 4

explicacion: |
  Los múltiplos de 4 van de 4 en 4.
```

### 19 — Por qué la regla del 4 mira dos cifras

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_4", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla del 4 mira dos cifras (no una sola) porque 100 es múltiplo de 4, pero 10 no lo es."

explicacion: |
  Todo lo que esté "de las centenas para arriba" ya es automáticamente
  múltiplo de 4; sólo hace falta chequear el resto.
```

### 20 — Regla del 4 aplicada a un número de 2 cifras

```
metadata:
  materia: "matematicas"
  tema: "regla_del_4"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_4"]

variables:
  n: random(10, 99)
  resto: n - floor(n / 4) * 4

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 4?"

explicacion: |
  Con un número de 2 cifras, el número completo YA ES sus últimas dos
  cifras.
```
