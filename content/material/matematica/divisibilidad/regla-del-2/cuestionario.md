# Matemática — Regla del 2 (cuestionario, 20 preguntas VBLang)

> Tema: `N4` (parte). Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Es divisible por 2?

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  n: random(10, 999)
  resto: n - floor(n / 2) * 2

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 2?"

explicacion: |
  Se mira sólo la última cifra: si es par, el número es divisible por 2.
```

### 2 — ¿Es divisible por 2? (número grande)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  n: random(1000, 98765)
  resto: n - floor(n / 2) * 2

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {n} divisible por 2?"

explicacion: |
  Con números más grandes, la regla no cambia: sigue alcanzando con mirar
  la última cifra.
```

### 3 — Elegir cuál es divisible por 2

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  base: random(5, 400) * 2
  otro1: base + 1
  otro2: base + 3

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 2?"

explicacion: |
  Sólo hay que mirar la última cifra de cada opción.
```

### 4 — Elegir cuál NO es divisible por 2

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  base: random(5, 400) * 2 + 1
  otro1: base + 2
  otro2: base - 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números NO es divisible por 2 (es impar)?"

explicacion: |
  {base} termina en una cifra impar; los otros dos terminan en cifra par.
```

### 5 — Completar una cifra válida

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  prefijo: random(1, 99)

tipo: completar
enunciado: "El número {prefijo}_ (falta la última cifra) tiene que ser divisible por 2. Completá una cifra válida."
respuestas_validas:
  - 0
  - 2
  - 4
  - 6
  - 8

explicacion: |
  Cualquier cifra par sirve como última cifra.
```

### 6 — Completar una cifra inválida (impar)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  prefijo: random(1, 99)

tipo: completar
enunciado: "El número {prefijo}_ (falta la última cifra) tiene que NO ser divisible por 2. Completá una cifra válida."
respuestas_validas:
  - 1
  - 3
  - 5
  - 7
  - 9

explicacion: |
  Cualquier cifra impar hace que el número no sea divisible por 2.
```

### 7 — Par o impar (vocabulario)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "vocabulario"]

enunciado: "¿Cómo se le dice a un número que es divisible por 2?"
tipo: mc
opciones_explicitas:
  - "Par"
  - "Impar"
  - "Primo"
respuesta: "Par"

explicacion: |
  Divisible por 2 y "número par" significan exactamente lo mismo.
```

### 8 — Impar (vocabulario)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "vocabulario"]

enunciado: "¿Cómo se le dice a un número que NO es divisible por 2?"
tipo: mc
opciones_explicitas:
  - "Impar"
  - "Par"
  - "Primo"
respuesta: "Impar"

explicacion: |
  No divisible por 2 y "número impar" significan exactamente lo mismo.
```

### 9 — Suma de dos números pares (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  a: random(1, 400) * 2
  b: random(1, 400) * 2

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a} + {b} siempre un número par?"

explicacion: |
  La suma de dos números pares siempre da par: cada uno aporta un múltiplo
  de 2, y la suma de dos múltiplos de 2 sigue siendo múltiplo de 2.
```

### 10 — Suma de un par y un impar (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  a: random(1, 400) * 2
  b: random(1, 400) * 2 + 1

respuesta: falso
tipo: vf

enunciado: "¿Es {a} + {b} un número par?"

explicacion: |
  Par más impar siempre da impar.
```

### 11 — ¿Es divisible por 2, en contexto?

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "problema"]

variables:
  n: random(10, 200)
  resto: n - floor(n / 2) * 2

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Se pueden repartir {n} caramelos entre 2 personas, en partes iguales y sin que sobre ninguno?"

explicacion: |
  Se puede repartir exacto entre 2 sólo si el total es divisible por 2.
```

### 12 — Última cifra de un número divisible por 2

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  d: random(1, 9)
  u: uno_de([0, 2, 4, 6, 8])
  n: d * 10 + u

respuesta: u
tipo: input
tolerancia_abs: 0

enunciado: "El número {n} es divisible por 2. ¿Cuál es su última cifra?"

explicacion: |
  Como {n} es divisible por 2, su última cifra tiene que ser par.
```

### 13 — Elegir cuál es divisible por 2 (números grandes)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  base: random(500, 4000) * 2
  otro1: base + 1
  otro2: base + 5

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es divisible por 2?"

explicacion: |
  Con números grandes la regla no cambia: se mira sólo la última cifra.
```

### 14 — Ordenar según sean pares o impares

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor: son todos pares."
opciones_explicitas:
  - "18"
  - "4"
  - "26"
  - "12"
respuesta_orden: ["4", "12", "18", "26"]

explicacion: |
  Los cuatro son pares (terminan en cifra par); acá sólo hace falta
  ordenarlos por tamaño.
```

### 15 — Múltiplos de 2 y la tabla del 2

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los resultados de la tabla del 2 son números pares."

explicacion: |
  La tabla del 2 (2, 4, 6, 8...) es, exactamente, la lista de los números
  divisibles por 2.
```

### 16 — Leer la última cifra y decidir

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2", "verificacion"]

variables:
  n: random(10, 999)
  ultima_cifra: n - floor(n / 10) * 10
  resto: n - floor(n / 2) * 2

respuesta: (resto == 0)
tipo: vf

enunciado: "La última cifra de {n} es {ultima_cifra}. ¿Eso alcanza para asegurar que {n} es divisible por 2?"

explicacion: |
  Alcanza con esa única cifra: si es par, {n} es divisible por 2; si es
  impar, no lo es.
```

### 17 — Doble par (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  n: random(1, 400) * 2

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que {n} es par?"

explicacion: |
  {n} se construyó como 2 por otro número, así que termina en cifra par.
```

### 18 — Problema: asientos en filas de a 2

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "problema"]

variables:
  n: random(10, 100)
  resto: n - floor(n / 2) * 2

respuesta: (resto == 0)
tipo: vf

enunciado: "Un colectivo tiene asientos dobles (de a 2). ¿Alcanzan exactamente para {n} pasajeros sin que sobre ningún asiento vacío ni ningún pasajero de pie?"

explicacion: |
  Alcanzan exacto sólo si {n} es divisible por 2.
```

### 19 — Elegir cuál NO es divisible por 2 (con contexto)

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "intermedio"
  tags: ["divisibilidad", "regla_del_2"]

variables:
  a: random(10, 500) * 2
  b: random(10, 500) * 2 + 1
  c: random(10, 500) * 2

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b
  - c

enunciado: "De estos tres números, ¿cuál es el único que NO es divisible por 2?"

explicacion: |
  Hay que revisar la última cifra de cada uno; sólo una es impar.
```

### 20 — La regla del 2 no mira otra cosa que la última cifra

```
metadata:
  materia: "matematicas"
  tema: "regla_del_2"
  nivel: "basico"
  tags: ["divisibilidad", "regla_del_2", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para saber si un número es divisible por 2, alcanza con mirar su última cifra; no hace falta mirar el resto del número."

explicacion: |
  Es la ventaja de esta regla: es un atajo que evita hacer la división
  completa.
```
