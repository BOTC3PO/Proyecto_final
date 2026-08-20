# Matemática — Ecuación de primer grado (cuestionario, 32 preguntas VBLang)

> Tema: `A3` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma carpeta.

Los coeficientes y el resultado se sortean de manera que la ecuación
siempre tenga solución entera exacta (se arma la ecuación a partir de la
solución, no al revés). Al final hay un bloque de verificación
(verdadero/falso) que evalúa si un valor propuesto cumple o no la
ecuación.

---

### 1 — x + a = c

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["deshacer_suma"]

variables:
  a: random(1, 30)
  c: random(31, 80)

respuesta: c - a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: x + {a} = {c}. ¿Cuánto vale x?"

pasos:
  - "Restar {a} a los dos lados: x = {c} − {a} = {c - a}"

explicacion: |
  Para deshacer una suma, se resta el mismo valor a los dos lados de la
  ecuación.
```

### 2 — x + a = c (con a más chico)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["deshacer_suma"]

variables:
  a: random(1, 15)
  c: random(1, 50)

respuesta: c - a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: x + {a} = {c}. ¿Cuánto vale x?"

explicacion: |
  x = {c} − {a}.
```

### 3 — x − a = c

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["deshacer_resta"]

variables:
  a: random(1, 30)
  c: random(1, 50)

respuesta: c + a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: x − {a} = {c}. ¿Cuánto vale x?"

pasos:
  - "Sumar {a} a los dos lados: x = {c} + {a} = {c + a}"

explicacion: |
  Para deshacer una resta, se suma el mismo valor a los dos lados.
```

### 4 — a − x = c (la incógnita resta)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["deshacer_resta", "orden"]

variables:
  a: random(31, 80)
  c: random(1, 30)

respuesta: a - c
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a} − x = {c}. ¿Cuánto vale x?"

pasos:
  - "x es el que resta acá: {a} − {c} = {a - c}"

explicacion: |
  Cuando la x resta (en vez de ser restada), x = {a} − {c} — no
  {c} − {a}, que sería el orden opuesto.
```

### 5 — a·x = c

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["deshacer_multiplicacion"]

variables:
  a: random(2, 12)
  sol: random(1, 20)
  c: a * sol

respuesta: c / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x = {c}. ¿Cuánto vale x?"

pasos:
  - "Dividir los dos lados por {a}: x = {c} / {a} = {c / a}"

explicacion: |
  Para deshacer una multiplicación, se divide por el mismo valor a los
  dos lados.
```

### 6 — a·x = c (coeficiente más grande)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["deshacer_multiplicacion"]

variables:
  a: random(2, 20)
  sol: random(1, 15)
  c: a * sol

respuesta: c / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x = {c}. ¿Cuánto vale x?"

explicacion: |
  x = {c} / {a}.
```

### 7 — x / a = c

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["deshacer_division"]

variables:
  a: random(2, 15)
  c: random(1, 20)

respuesta: a * c
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: x / {a} = {c}. ¿Cuánto vale x?"

pasos:
  - "Multiplicar los dos lados por {a}: x = {c} × {a} = {a * c}"

explicacion: |
  Para deshacer una división, se multiplica por el mismo valor a los dos
  lados.
```

### 8 — Coeficiente negativo

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["deshacer_multiplicacion", "signos"]

variables:
  a: random(2, 12)
  sol: random(1, 15)
  c: (-a) * sol

respuesta: c / (-a)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: −{a}x = {c}. ¿Cuánto vale x?"

pasos:
  - "Dividir los dos lados por −{a}: x = {c} / (−{a}) = {c / (-a)}"

explicacion: |
  Dividir por un número negativo también funciona, pero hay que arrastrar
  el signo con cuidado.
```

### 9 — a·x + b = c

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["dos_pasos"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} = {c}. ¿Cuánto vale x?"

pasos:
  - "Restar {b}: {a}x = {c} − {b} = {c - b}"
  - "Dividir por {a}: x = {c - b} / {a} = {(c - b) / a}"

explicacion: |
  Primero se deshace la suma, después la multiplicación — orden inverso
  a como está armada la ecuación.
```

### 10 — a·x + b = c (otra vuelta)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["dos_pasos"]

variables:
  a: random(2, 15)
  b: random(1, 30)
  sol: random(1, 25)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} = {c}. ¿Cuánto vale x?"

explicacion: |
  x = ({c} − {b}) / {a}.
```

### 11 — a·x − b = c

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["dos_pasos", "signos"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(5, 25)
  c: a * sol - b

respuesta: (c + b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x − {b} = {c}. ¿Cuánto vale x?"

pasos:
  - "Sumar {b}: {a}x = {c} + {b} = {c + b}"
  - "Dividir por {a}: x = {c + b} / {a} = {(c + b) / a}"

explicacion: |
  Primero se deshace la resta (sumando), después la multiplicación.
```

### 12 — b + a·x = c (suma antes del término con x)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["dos_pasos", "orden"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: b + a * sol

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {b} + {a}x = {c}. ¿Cuánto vale x?"

explicacion: |
  Da lo mismo el orden en que están escritos los términos: se resta {b} y
  después se divide por {a}, igual que si el término con x estuviera
  primero.
```

### 13 — a·x + b = c (con b negativo en el enunciado, resta)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["dos_pasos", "signos"]

variables:
  a: random(2, 8)
  b: random(1, 15)
  sol: random(-15, -1)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} = {c}. ¿Cuánto vale x?"

explicacion: |
  La misma fórmula funciona aunque la solución sea negativa:
  x = ({c} − {b}) / {a}.
```

### 14 — a·x + b = c (solución negativa, otra vuelta)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["dos_pasos", "signos"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(-20, -1)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} = {c}. ¿Cuánto vale x?"

explicacion: |
  x = ({c} − {b}) / {a}.
```

### 15 — Problema en contexto: entrada + tarifa

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["dos_pasos", "problema"]

variables:
  precio_km: random(2, 10)
  bajada_bandera: random(5, 20)
  sol: random(1, 30)
  total: precio_km * sol + bajada_bandera

respuesta: (total - bajada_bandera) / precio_km
tipo: input
tolerancia_abs: 0

enunciado: "Un remís cobra {bajada_bandera} de bajada de bandera más {precio_km} por cada km. Si el viaje costó {total} en total, ¿cuántos km recorrió?"

pasos:
  - "Plantear: {precio_km} × km + {bajada_bandera} = {total}"
  - "Despejar: km = ({total} − {bajada_bandera}) / {precio_km} = {(total - bajada_bandera) / precio_km}"

explicacion: |
  El planteo es exactamente {precio_km}x + {bajada_bandera} = {total}, la
  misma estructura que las ecuaciones anteriores, con nombres distintos.
```

### 16 — Con paréntesis: a·(x + b) = c

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["distributiva"]

variables:
  a: random(2, 10)
  b: random(1, 15)
  sol: random(1, 20)
  c: a * (sol + b)

respuesta: c / a - b
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}(x + {b}) = {c}. ¿Cuánto vale x?"

pasos:
  - "Distribuir: {a}x + {a}×{b} = {c} → {a}x + {a * b} = {c}"
  - "Despejar: x = {c}/{a} − {b} = {c / a - b}"

explicacion: |
  Hay que distribuir el {a} antes de poder despejar x.
```

### 17 — Con paréntesis: a·(x − b) = c

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["distributiva", "signos"]

variables:
  a: random(2, 10)
  b: random(1, 15)
  sol: random(10, 30)
  c: a * (sol - b)

respuesta: c / a + b
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}(x − {b}) = {c}. ¿Cuánto vale x?"

pasos:
  - "Distribuir: {a}x − {a * b} = {c}"
  - "Despejar: x = {c}/{a} + {b} = {c / a + b}"

explicacion: |
  Al distribuir, el signo de adentro del paréntesis se conserva: −{a}×{b}.
```

### 18 — Con paréntesis: a·(b − x) = c (la x resta adentro)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["distributiva", "signos", "orden"]

variables:
  a: random(2, 8)
  b: random(20, 40)
  sol: random(1, 15)
  c: a * (b - sol)

respuesta: b - c / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}({b} − x) = {c}. ¿Cuánto vale x?"

pasos:
  - "Distribuir: {a}×{b} − {a}x = {c} → {a * b} − {a}x = {c}"
  - "Despejar: {a}x = {a * b} − {c}, x = ({a * b} − {c}) / {a} = {b - c / a}"

explicacion: |
  Acá la x queda restando adentro del paréntesis, así que al distribuir
  el signo negativo cae sobre el término con x, no sobre {b}.
```

### 19 — Variable en los dos lados: a·x + b = d·x + e

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["dos_lados"]

variables:
  a: random(4, 10)
  d: random(1, 3)
  b: random(1, 20)
  sol: random(1, 20)
  e: (a - d) * sol + b

respuesta: (e - b) / (a - d)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} = {d}x + {e}. ¿Cuánto vale x?"

pasos:
  - "Juntar las x de un lado: {a}x − {d}x = {e} − {b} → {a - d}x = {e - b}"
  - "Despejar: x = {e - b} / {a - d} = {(e - b) / (a - d)}"

explicacion: |
  Se resta {d}x a los dos lados para juntar todos los términos con x en
  el mismo lado.
```

### 20 — Variable en los dos lados (coeficientes más parejos)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["dos_lados"]

variables:
  a: random(6, 12)
  d: random(1, 5)
  b: random(1, 15)
  sol: random(1, 15)
  e: (a - d) * sol + b

respuesta: (e - b) / (a - d)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} = {d}x + {e}. ¿Cuánto vale x?"

explicacion: |
  x = ({e} − {b}) / ({a} − {d}).
```

### 21 — Variable en los dos lados, con resta de un lado

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["dos_lados", "signos"]

variables:
  a: random(6, 12)
  d: random(1, 4)
  b: random(1, 15)
  sol: random(5, 20)
  e: (a - d) * sol - b

respuesta: (e + b) / (a - d)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x − {b} = {d}x + {e}. ¿Cuánto vale x?"

pasos:
  - "Juntar las x: {a - d}x = {e} + {b} = {e + b}"
  - "Despejar: x = {e + b} / {a - d} = {(e + b) / (a - d)}"

explicacion: |
  Al mover −{b} al otro lado, cruza como +{b}.
```

### 22 — Variable en los dos lados, coeficiente d mayor que a

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["dos_lados", "signos"]

variables:
  a: random(1, 4)
  d: random(6, 10)
  sol: random(1, 10)
  b: random(100, 150)
  e: (a - d) * sol + b

respuesta: (e - b) / (a - d)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} = {d}x + {e}. ¿Cuánto vale x?"

explicacion: |
  Acá {d} es mayor que {a}, así que ({a}−{d}) da negativo — la fórmula
  funciona igual, sólo hay que llevar el signo con cuidado.
```

### 23 — Problema en contexto: dos planes de precio

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["dos_lados", "problema"]

variables:
  fijo_a: random(1, 20)
  precio_a: random(3, 10)
  precio_b: random(1, 2)
  sol: random(1, 20)
  fijo_b: (precio_a - precio_b) * sol + fijo_a

respuesta: (fijo_b - fijo_a) / (precio_a - precio_b)
tipo: input
tolerancia_abs: 0

enunciado: "El Plan A cuesta {fijo_a} fijos más {precio_a} por unidad. El Plan B cuesta {fijo_b} fijos más {precio_b} por unidad. ¿A partir de cuántas unidades cuestan lo mismo?"

pasos:
  - "Igualar: {precio_a}x + {fijo_a} = {precio_b}x + {fijo_b}"
  - "Despejar: x = ({fijo_b} − {fijo_a}) / ({precio_a} − {precio_b})"

explicacion: |
  Es la misma ecuación con variable en los dos lados, aplicada a un
  problema real: igualar costo total de dos planes.
```

### 24 — a·x + b = c, con a que no divide exacto si no se construye bien

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["dos_pasos"]

variables:
  a: random(3, 9)
  b: random(1, 25)
  sol: random(1, 30)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} = {c}. ¿Cuánto vale x?"

explicacion: |
  x = ({c} − {b}) / {a}.
```

### 25 — Verificar una solución propuesta (verdadero)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (a * sol + b) == c
tipo: vf

enunciado: "¿x = {sol} es solución de {a}x + {b} = {c}?"

explicacion: |
  Se reemplaza x por {sol} en la ecuación original y se verifica si los
  dos lados dan el mismo número.
```

### 26 — Verificar una solución propuesta (a veces falsa)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  error: uno_de([0, 0, 1, -1, 2])
  propuesto: sol + error

respuesta: (a * propuesto + b) == c
tipo: vf

enunciado: "¿x = {propuesto} es solución de {a}x + {b} = {c}?"

explicacion: |
  Reemplazando x por {propuesto}: {a}×{propuesto}+{b} = {a * propuesto + b}, y el otro lado vale {c}.
```

### 27 — Verificar una solución (variable en los dos lados)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["verificacion", "dos_lados", "verdadero_falso"]

variables:
  a: random(4, 10)
  d: random(1, 3)
  b: random(1, 15)
  sol: random(1, 15)
  e: (a - d) * sol + b
  error: uno_de([0, 0, 1, -1])
  propuesto: sol + error

respuesta: (a * propuesto + b) == (d * propuesto + e)
tipo: vf

enunciado: "¿x = {propuesto} es solución de {a}x + {b} = {d}x + {e}?"

explicacion: |
  Se reemplaza x por {propuesto} en los dos lados y se comparan.
```

### 28 — Verificar con paréntesis

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["verificacion", "distributiva", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 15)
  sol: random(1, 20)
  c: a * (sol + b)
  error: uno_de([0, 0, 1, -1])
  propuesto: sol + error

respuesta: (a * (propuesto + b)) == c
tipo: vf

enunciado: "¿x = {propuesto} es solución de {a}(x + {b}) = {c}?"

explicacion: |
  Se reemplaza x por {propuesto} adentro del paréntesis antes de
  distribuir y comparar.
```

### 29 — Elegir el primer paso correcto

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["procedimiento", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  c: random(21, 60)

respuesta: c - b
tipo: mc
opciones_explicitas:
  - c - b
  - c + b
  - c * b

enunciado: "Para resolver {a}x + {b} = {c}, el primer paso es restar {b} a los dos lados. ¿A qué queda igual {a}x?"

explicacion: |
  {a}x + {b} − {b} = {c} − {b}, así que {a}x = {c} − {b}.
```

### 30 — a·x + b = c, coeficiente 1 implícito

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "basico"
  tags: ["dos_pasos"]

variables:
  b: random(1, 30)
  sol: random(1, 40)
  c: sol + b

respuesta: c - b
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: x + {b} = {c}. ¿Cuánto vale x?"

explicacion: |
  Cuando no hay número escrito multiplicando a x, el coeficiente es 1 —
  se resuelve igual que los casos con coeficiente explícito.
```

### 31 — Problema en contexto: ahorro con meta

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  ya_tiene: random(100, 500)
  ahorro_mensual: random(20, 100)
  sol: random(1, 24)
  meta: ahorro_mensual * sol + ya_tiene

respuesta: (meta - ya_tiene) / ahorro_mensual
tipo: input
tolerancia_abs: 0

enunciado: "Alguien ya tiene ahorrados {ya_tiene} y ahorra {ahorro_mensual} por mes. ¿En cuántos meses llega a {meta}?"

pasos:
  - "Plantear: {ahorro_mensual} × meses + {ya_tiene} = {meta}"
  - "Despejar: meses = ({meta} − {ya_tiene}) / {ahorro_mensual}"

explicacion: |
  Mismo planteo que a·x + b = c, con "meses" en el lugar de x.
```

### 32 — a·x − b = c, con b mayor que c (solución sigue positiva)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_primer_grado"
  nivel: "avanzado"
  tags: ["dos_pasos", "signos"]

variables:
  a: random(2, 8)
  b: random(20, 40)
  sol: random(10, 30)
  c: a * sol - b

respuesta: (c + b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x − {b} = {c}. ¿Cuánto vale x?"

explicacion: |
  x = ({c} + {b}) / {a} — el signo de {c} puede dar negativo sin que eso
  afecte el procedimiento.
```
