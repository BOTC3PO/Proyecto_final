# Matemática — Múltiplos (cuestionario, 22 preguntas VBLang)

> Tema: `N4` (parte). Ver `teoria.md` en esta misma carpeta. Menos de 40
> a propósito (tema angosto) pero nunca menos de 20 — ver
> `../../dependencias.md`.

---

### 1 — Qué es un múltiplo

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "vocabulario"]

enunciado: "¿Qué significa que A sea múltiplo de B?"
tipo: mc
opciones_explicitas:
  - "A es el resultado de multiplicar B por algún número entero"
  - "A es más chico que B"
  - "A y B son siempre el mismo número"
respuesta: "A es el resultado de multiplicar B por algún número entero"

explicacion: |
  A es múltiplo de B si existe un entero k tal que A = B × k.
```

### 2 — ¿Es múltiplo?

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos"]

variables:
  b: random(2, 9)
  k: random(2, 20)
  a: b * k + uno_de([0, 0, 1])
  resto: a - floor(a / b) * b

respuesta: (resto == 0)
tipo: vf

enunciado: "¿Es {a} múltiplo de {b}?"

explicacion: |
  A es múltiplo de B si B entra un número exacto de veces en A.
```

### 3 — El n-ésimo múltiplo (chico)

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos"]

variables:
  b: random(2, 9)
  n: random(2, 8)

respuesta: b * n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el múltiplo número {n} de {b}?"

explicacion: |
  El múltiplo número n de b es b × n.
```

### 4 — El n-ésimo múltiplo (más grande)

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos"]

variables:
  b: random(3, 25)
  n: random(5, 15)

respuesta: b * n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el múltiplo número {n} de {b}?"

explicacion: |
  El procedimiento es el mismo con números más grandes: b × n.
```

### 5 — El n-ésimo múltiplo, en contexto

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos", "problema"]

variables:
  b: random(2, 9)
  n: random(3, 10)

respuesta: b * n
tipo: input
tolerancia_abs: 0

enunciado: "Un colectivo pasa cada {b} minutos, empezando en el minuto {b}. ¿En qué minuto pasa por {n}ª vez?"

explicacion: |
  La n-ésima vez que pasa es, exactamente, el múltiplo número n de {b}.
```

### 6 — Cuántos múltiplos hay en un rango

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos"]

variables:
  b: random(2, 9)
  a: random(1, 100)
  c: a + random(20, 80)

respuesta: floor(c / b) - floor((a - 1) / b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos múltiplos de {b} hay entre {a} y {c}, contando a los dos extremos si lo son?"

explicacion: |
  Se cuentan los múltiplos de {b} hasta {c} y se descartan los que ya
  habían pasado antes de {a}.
```

### 7 — Cuántos múltiplos hay en un rango (otro caso)

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos"]

variables:
  b: random(3, 12)
  a: random(1, 50)
  c: a + random(30, 100)

respuesta: floor(c / b) - floor((a - 1) / b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos múltiplos de {b} hay entre {a} y {c}?"

explicacion: |
  Mismo procedimiento, con otro rango y otro número.
```

### 8 — Elegir cuál es múltiplo

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos"]

variables:
  b: random(2, 9)
  base: b * random(4, 40)
  otro1: base + 1
  otro2: base + 2

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es múltiplo de {b}?"

explicacion: |
  Sólo uno de los tres es exactamente {b} × algún entero.
```

### 9 — Elegir cuál NO es múltiplo

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos"]

variables:
  b: random(2, 9)
  base: b * random(4, 40)
  otro: base + 1

respuesta: otro
tipo: mc
opciones_explicitas:
  - base
  - otro

enunciado: "¿Cuál de estos dos números NO es múltiplo de {b}?"

explicacion: |
  {base} sí es múltiplo de {b}; el otro número no lo es porque le sobra 1.
```

### 10 — Completar el próximo múltiplo en una secuencia

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "secuencia"]

variables:
  b: random(2, 9)
  n: random(2, 10)

tipo: completar
enunciado: "Completá el próximo múltiplo de {b} después de {b * n}."
respuestas_validas:
  - b * (n + 1)

explicacion: |
  El próximo múltiplo es, simplemente, sumarle {b} otra vez al anterior.
```

### 11 — Completar un hueco en una secuencia de múltiplos

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos", "secuencia"]

variables:
  b: random(2, 9)
  n: random(2, 10)

tipo: completar
enunciado: "Completá el múltiplo que falta: {b * n}, ___, {b * (n + 2)}."
respuestas_validas:
  - b * (n + 1)

explicacion: |
  Entre dos múltiplos consecutivos hay exactamente un salto de {b}.
```

### 12 — Todo número es múltiplo de sí mismo

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número es múltiplo de sí mismo."

explicacion: |
  n = n × 1, así que cualquier n cumple la definición de múltiplo de sí
  mismo.
```

### 13 — Todo número es múltiplo de 1

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número es múltiplo de 1."

explicacion: |
  n = 1 × n, para cualquier n.
```

### 14 — El primer múltiplo de un número

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos"]

variables:
  b: random(2, 99)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el primer múltiplo de {b} (sin contar el 0)?"

explicacion: |
  El primer múltiplo (sin contar el 0) es el propio número, multiplicado
  por 1.
```

### 15 — Suma de los primeros múltiplos

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "avanzado"
  tags: ["multiplos", "calculo_mental"]

variables:
  b: random(2, 9)
  n: random(3, 8)

respuesta: b * (n * (n + 1) / 2)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto suman los primeros {n} múltiplos de {b} (desde {b} hasta {b * n})?"

pasos:
  - "Es {b} × (1+2+...+{n}) = {b} × {n * (n + 1) / 2} = {b * (n * (n + 1) / 2)}"

explicacion: |
  Sumar los primeros n múltiplos de b es lo mismo que multiplicar b por la
  suma de los primeros n números naturales.
```

### 16 — Dos números que comparten un múltiplo (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  candidato: a * b

respuesta: verdadero
tipo: vf

enunciado: "¿Es {candidato} múltiplo tanto de {a} como de {b}?"

explicacion: |
  El producto de dos números siempre es múltiplo de cada uno de ellos por
  separado.
```

### 17 — Elegir cuál es múltiplo de dos números a la vez

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "avanzado"
  tags: ["multiplos"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  base: a * b
  otro1: base + a
  otro2: base + 1

respuesta: base
tipo: mc
opciones_explicitas:
  - base
  - otro1
  - otro2

enunciado: "¿Cuál de estos tres números es múltiplo de {a} y de {b} al mismo tiempo?"

explicacion: |
  {base} es {a} × {b}, así que es múltiplo de los dos a la vez; los otros
  dos rompen al menos una de las dos condiciones.
```

### 18 — Problema: envases de a varios

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "problema"]

variables:
  b: random(2, 12)
  n: random(3, 15)

respuesta: b * n
tipo: input
tolerancia_abs: 0

enunciado: "Cada caja tiene {b} botellas. Si hay {n} cajas completas, ¿cuántas botellas hay en total?"

explicacion: |
  El total de botellas es siempre un múltiplo de {b}: {b} por la cantidad
  de cajas.
```

### 19 — ¿Puede haber esa cantidad exacta?

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos", "problema"]

variables:
  b: random(2, 9)
  k: random(3, 15)
  total: b * k + uno_de([0, 0, 1])
  resto: total - floor(total / b) * b

respuesta: (resto == 0)
tipo: vf

enunciado: "Las entradas vienen en paquetes de {b}. ¿Se puede comprar exactamente {total} entradas sin que sobre ninguna en el último paquete?"

explicacion: |
  Sólo se puede si {total} es múltiplo de {b} — si no lo es, sobrarían
  algunas sueltas de un paquete incompleto.
```

### 20 — Ordenar múltiplos de menor a mayor

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "orden"]

tipo: ordenar
enunciado: "Ordená estos múltiplos de 6 de menor a mayor."
opciones_explicitas:
  - "24"
  - "6"
  - "18"
  - "12"
respuesta_orden: ["6", "12", "18", "24"]

explicacion: |
  Son los primeros cuatro múltiplos de 6, en el orden en que aparecen al
  contar de 6 en 6.
```

### 21 — El 0 como múltiplo (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "intermedio"
  tags: ["multiplos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El 0 es múltiplo de cualquier número, porque 0 = B × 0 para cualquier B."

explicacion: |
  Cumple la definición estricta, aunque en los ejercicios de la escuela
  casi nunca se lo cuenta como el "primer" múltiplo.
```

### 22 — Múltiplos y la tabla de multiplicar

```
metadata:
  materia: "matematicas"
  tema: "multiplos"
  nivel: "basico"
  tags: ["multiplos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los múltiplos de un número son, exactamente, los resultados de su tabla de multiplicar."

explicacion: |
  La tabla del 4 (4, 8, 12, 16...) es, ni más ni menos, la lista de los
  múltiplos de 4.
```
