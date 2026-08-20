# Matemática — Irracionales y reales (cuestionario, 24 preguntas VBLang)

> Tema: `N14Ba`+`N14Bb`+`N14Bc`. Ver `teoria.md` en esta misma carpeta.
> Como no hay builtin de "es racional", se construye la irracionalidad
> con la misma técnica de `../raices/` (chequear si la raíz cuadrada da
> un entero exacto).

---

### 1 — Qué es un número irracional

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["irracionales", "vocabulario"]

enunciado: "¿Qué es un número irracional?"
tipo: mc
opciones_explicitas:
  - "Un número que no se puede escribir como fracción de dos enteros"
  - "Cualquier número negativo"
  - "Un número muy grande"
respuesta: "Un número que no se puede escribir como fracción de dos enteros"

explicacion: |
  Su desarrollo decimal tiene infinitas cifras que nunca repiten un
  patrón.
```

### 2 — Reconocer una raíz irracional

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales"]

variables:
  n: random(2, 99)
  k: floor(sqrt(n))

respuesta: (k * k != n)
tipo: vf

enunciado: "¿Es √{n} un número irracional?"

explicacion: |
  Es irracional siempre que {n} no sea un cuadrado perfecto (que la raíz
  no dé exacta).
```

### 3 — Reconocer una raíz racional (exacta)

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales"]

variables:
  k: random(2, 20)
  n: k ^ 2

respuesta: falso
tipo: vf

enunciado: "¿Es √{n} un número irracional?"

explicacion: |
  {n} es {k}², un cuadrado perfecto: su raíz da exacta ({k}), así que es
  racional, no irracional.
```

### 4 — √2 es irracional

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "√2 es un número irracional."

explicacion: |
  Se demuestra por reducción al absurdo: no existe ninguna fracción a/b
  que sea exactamente igual a √2.
```

### 5 — π es irracional

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "π (pi) es un número irracional."

explicacion: |
  3,14159265... nunca repite un patrón: π no se puede escribir como
  fracción de dos enteros.
```

### 6 — π es además trascendente

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "π es trascendente, una categoría más exigente que ser irracional: no es raíz de ningún polinomio con coeficientes racionales (a diferencia de √2, que sí es raíz de x² − 2 = 0)."

explicacion: |
  Todo trascendente es irracional, pero no todo irracional es
  trascendente — √2 es el ejemplo que marca la diferencia.
```

### 7 — Qué es un número real

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["reales", "vocabulario"]

enunciado: "¿Qué es el conjunto de los números reales?"
tipo: mc
opciones_explicitas:
  - "La unión de todos los racionales y todos los irracionales"
  - "Sólo los números que se pueden contar"
  - "Sólo los números positivos"
respuesta: "La unión de todos los racionales y todos los irracionales"

explicacion: |
  Todo punto de la recta numérica es un número real, sea racional o
  irracional.
```

### 8 — Todo racional es real

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["reales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número racional es también un número real."

explicacion: |
  Los reales incluyen a TODOS los racionales, sin excepción.
```

### 9 — Todo irracional es real

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["reales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número irracional es también un número real."

explicacion: |
  Los reales incluyen a TODOS los irracionales también: es la unión de
  los dos grupos.
```

### 10 — NO todo real es racional

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["reales", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Todo número real es racional."

explicacion: |
  No es cierto: √2 y π son reales, pero no son racionales — son
  irracionales.
```

### 11 — Un decimal periódico es racional

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "0,333... (con el 3 repitiéndose para siempre) es un número racional, no irracional."

explicacion: |
  Aunque tenga infinitas cifras, sigue un patrón que se repite (periódico)
  — eso lo hace racional: 0,333... = 1/3.
```

### 12 — Un decimal no periódico es irracional

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un número con infinitas cifras decimales que nunca repiten ningún patrón es irracional."

explicacion: |
  Es exactamente la definición de número irracional.
```

### 13 — Elegir cuál es irracional

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales"]

variables:
  n_no_cuadrado: uno_de([2, 3, 5, 7, 10, 11, 15])

respuesta: sqrt(n_no_cuadrado)
tipo: mc
opciones_explicitas:
  - sqrt(n_no_cuadrado)
  - 1 / 3
  - 0.5

enunciado: "¿Cuál de estos tres números es irracional?"

explicacion: |
  1/3 y 0,5 son fracciones (racionales); una raíz no exacta como
  √{n_no_cuadrado} no se puede escribir como fracción.
```

### 14 — Elegir cuál es racional

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales"]

variables:
  k: random(2, 20)
  n_cuadrado: k ^ 2
  n_no_cuadrado: uno_de([2, 3, 5, 7, 10, 11])

respuesta: sqrt(n_cuadrado)
tipo: mc
opciones_explicitas:
  - sqrt(n_cuadrado)
  - sqrt(n_no_cuadrado)

enunciado: "¿Cuál de estos dos números es racional (da una raíz exacta)?"

explicacion: |
  √{n_cuadrado} da exacto ({k}), así que es racional; la otra raíz no es
  exacta.
```

### 15 — Toda fracción es racional

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier fracción de dos números enteros (como 1/7) es un número racional."

explicacion: |
  Es la propia definición de racional: se puede escribir como a/b.
```

### 16 — La recta numérica no tiene huecos con los reales

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["reales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Con los números reales, cada punto de la recta numérica corresponde a exactamente un número, sin huecos."

explicacion: |
  Antes de sumar los irracionales, había puntos de la recta (como donde
  va √2) sin un número racional que los ocupara exactamente.
```

### 17 — Verificar racionalidad de una raíz (número más grande)

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["irracionales"]

variables:
  n: random(100, 999)
  k: floor(sqrt(n))

respuesta: (k * k != n)
tipo: vf

enunciado: "¿Es √{n} irracional?"

explicacion: |
  Se verifica si {n} es o no un cuadrado perfecto.
```

### 18 — Problema: la diagonal de un cuadrado

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["irracionales", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "La diagonal de un cuadrado de lado 1 mide √2, un número irracional."

explicacion: |
  Es el mismo ejemplo histórico que llevó a descubrir los irracionales:
  ni siquiera una figura tan simple como un cuadrado de lado 1 tiene
  diagonal racional.
```

### 19 — Comparar dos irracionales

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["irracionales", "comparacion"]

variables:
  a: uno_de([2, 3, 5, 7, 10])
  b: uno_de([2, 3, 5, 7, 10])

restricciones:
  - a != b

respuesta: (sqrt(a) > sqrt(b))
tipo: vf

enunciado: "¿Es √{a} mayor que √{b}?"

explicacion: |
  Aunque los dos sean irracionales (no se puedan escribir exactos), se
  pueden seguir comparando: a mayor radicando, mayor la raíz.
```

### 20 — Ordenar números reales (racionales e irracionales mezclados)

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["reales", "orden"]

tipo: ordenar
enunciado: "Ordená estos números reales de menor a mayor (aproximá los irracionales: √2≈1,41, π≈3,14)."
opciones_explicitas:
  - "π"
  - "1"
  - "√2"
  - "3,5"
respuesta_orden: ["1", "√2", "π", "3,5"]

explicacion: |
  Racionales e irracionales se ordenan juntos en la misma recta numérica,
  sin ninguna regla especial distinta.
```

### 21 — Todo entero es racional

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["reales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número entero es racional (se puede escribir como una fracción con denominador 1)."

explicacion: |
  5 = 5/1: cualquier entero es, trivialmente, también una fracción.
```

### 22 — La jerarquía completa de conjuntos numéricos

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["reales", "vocabulario"]

enunciado: "¿Cuál de estos conjuntos NO está incluido dentro de los números reales?"
tipo: mc
opciones_explicitas:
  - "Ninguno, todos los que aparecen en el mapa hasta acá están incluidos"
  - "Los números naturales"
  - "Los números irracionales"
respuesta: "Ninguno, todos los que aparecen en el mapa hasta acá están incluidos"

explicacion: |
  Naturales, enteros, racionales (fracciones y decimales) e irracionales
  son todos subconjuntos de los números reales.
```

### 23 — Reconocer que 22/7 no es exactamente π (concepto)

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["irracionales", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "22/7 es exactamente igual a π."

explicacion: |
  22/7 (≈3,142857...) es sólo una aproximación racional usada en la
  práctica; π es irracional, así que ninguna fracción puede ser
  exactamente igual a π.
```

### 24 — Qué son los irracionales y los reales (cierre)

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["irracionales", "reales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los números reales son la unión de los racionales y los irracionales, y llenan por completo la recta numérica, sin dejar ningún punto sin número."

explicacion: |
  Es la idea de cierre de todo el bloque numérico: con los reales, la
  recta numérica queda completa.
```
