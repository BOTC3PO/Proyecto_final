# Matemática — Ecuaciones exponenciales y logarítmicas (cuestionario, 28 preguntas VBLang)

> Tema: `A11B` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Ecuación exponencial: bases iguales

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "basico"
  tags: ["exponencial"]

variables:
  a: random(2, 8)
  x_sol: random(1, 8)

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}^x = {a}^{x_sol}. ¿Cuánto vale x?"

explicacion: |
  Con la misma base a los dos lados, los exponentes tienen que coincidir.
```

### 2 — Ecuación exponencial: hay que reconocer la potencia

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["exponencial"]

variables:
  a: random(2, 6)
  x_sol: random(1, 6)
  resultado: a ^ x_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}^x = {resultado}. ¿Cuánto vale x?"

pasos:
  - "{resultado} = {a}^{x_sol}, así que x = {x_sol}"

explicacion: |
  Hay que reconocer {resultado} como una potencia de {a}.
```

### 3 — Ecuación exponencial base 10: usar log10

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["exponencial"]

variables:
  n: random(1, 6)
  resultado: 10 ^ n

respuesta: log10(resultado)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: 10^x = {resultado}. ¿Cuánto vale x?"

pasos:
  - "x = log₁₀({resultado}) = {log10(resultado)}"

explicacion: |
  Aplicar log₁₀ a los dos lados deshace la exponencial de base 10.
```

### 4 — Ecuación exponencial: exponente negativo

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["exponencial", "signos"]

variables:
  a: random(2, 6)
  n: random(1, 4)
  resultado: 1 / (a ^ n)

respuesta: -n
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}^x = 1/{a ^ n}. ¿Cuánto vale x?"

explicacion: |
  1/{a}^{n} = {a}^(−{n}), así que x = −{n}.
```

### 5 — Ecuación logarítmica: base 10 simple

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "basico"
  tags: ["logaritmica"]

variables:
  k: random(1, 6)

respuesta: 10 ^ k
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: log₁₀(x) = {k}. ¿Cuánto vale x?"

pasos:
  - "x = 10^{k} = {10 ^ k}"

explicacion: |
  Aplicar la exponencial de base 10 a los dos lados deshace el
  logaritmo.
```

### 6 — Ecuación logarítmica: con desplazamiento

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["logaritmica"]

variables:
  k: random(1, 5)
  desplazamiento: random(1, 20)

respuesta: 10 ^ k - desplazamiento
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: log₁₀(x + {desplazamiento}) = {k}. ¿Cuánto vale x?"

pasos:
  - "x + {desplazamiento} = 10^{k} = {10 ^ k}"
  - "x = {10 ^ k} − {desplazamiento} = {10 ^ k - desplazamiento}"

explicacion: |
  Primero se deshace el logaritmo, después se despeja x igual que en
  `../ecuacion-primer-grado/`.
```

### 7 — Ecuación logarítmica: con coeficiente

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["logaritmica"]

variables:
  k: random(1, 4)
  p: random(2, 5)

respuesta: (10 ^ k) / p
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: log₁₀({p}x) = {k}. ¿Cuánto vale x?"

pasos:
  - "{p}x = 10^{k} = {10 ^ k}"
  - "x = {10 ^ k} / {p} = {(10 ^ k) / p}"

explicacion: |
  Primero se deshace el logaritmo, y después se despeja x dividiendo por
  {p}.
```

### 8 — Verificar solución: caso válido

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["dominio", "verdadero_falso"]

variables:
  desplazamiento: random(1, 20)
  k: random(1, 5)
  x_sol: 10 ^ k - desplazamiento

respuesta: ((x_sol + desplazamiento) > 0)
tipo: vf

enunciado: "log₁₀(x + {desplazamiento}) = {k} da x = {x_sol}. ¿Es válida esta solución (el argumento del logaritmo queda positivo)?"

explicacion: |
  Se verifica reemplazando: x+{desplazamiento} = {x_sol + desplazamiento},
  que tiene que ser mayor que 0.
```

### 9 — Verificar solución: caso extraño (se descarta)

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["dominio", "verdadero_falso"]

variables:
  r1: -random(1, 10)
  r2: random(1, 10)

respuesta: (r1 > 0)
tipo: vf

enunciado: "Al resolver log₁₀(x) + log₁₀(x+{r2 - r1}) = log₁₀(algo) se obtiene x={r1} como una de las soluciones algebraicas. ¿Es una solución válida (el argumento del primer logaritmo, x, queda positivo)?"

explicacion: |
  x={r1} es negativo — log₁₀ de un negativo no está definido, así que
  esta solución algebraica se descarta (es una solución extraña).
```

### 10 — Propiedad del producto: verificar

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["propiedades", "verdadero_falso"]

variables:
  n: random(1, 4)
  m: random(1, 4)
  a: 10 ^ n
  b: 10 ^ m

respuesta: ((log10(a * b)) == (log10(a) + log10(b)))
tipo: vf

enunciado: "¿log₁₀({a}×{b}) es igual a log₁₀({a}) + log₁₀({b})?"

explicacion: |
  log(a×b) = log(a) + log(b) — la propiedad del producto.
```

### 11 — Propiedad del cociente: verificar

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["propiedades", "verdadero_falso"]

variables:
  n: random(2, 6)
  m: random(1, 4)
  a: 10 ^ n
  b: 10 ^ m

respuesta: ((log10(a / b)) == (log10(a) - log10(b)))
tipo: vf

enunciado: "¿log₁₀({a}/{b}) es igual a log₁₀({a}) − log₁₀({b})?"

explicacion: |
  log(a/b) = log(a) − log(b) — la propiedad del cociente.
```

### 12 — Propiedad de la potencia: verificar

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["propiedades", "verdadero_falso"]

variables:
  n: random(1, 3)
  k: random(1, 4)
  a: 10 ^ n

respuesta: ((log10(a ^ k)) == (k * log10(a)))
tipo: vf

enunciado: "¿log₁₀({a}^{k}) es igual a {k}×log₁₀({a})?"

explicacion: |
  log(aⁿ) = n×log(a) — la propiedad de la potencia.
```

### 13 — Aplicar propiedad del producto para resolver

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["propiedades"]

variables:
  x_sol: random(2, 15)
  p: random(2, 8)
  resultado: log10(p * x_sol)

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: log₁₀({p}) + log₁₀(x) = {resultado}. ¿Cuánto vale x?"

pasos:
  - "log₁₀({p}·x) = {resultado} → {p}·x = 10^{resultado}"
  - "x = 10^{resultado} / {p} = {x_sol}"

explicacion: |
  Se combinan los dos logaritmos en uno solo (propiedad del producto)
  antes de despejar x.
```

### 14 — Concepto: aplicar la operación a los dos lados

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para resolver una ecuación exponencial, se puede aplicar logaritmo a los dos lados de la igualdad, sin cambiar el resultado."

explicacion: |
  Aplicar la misma operación a los dos lados mantiene la igualdad, igual
  que sumar/restar/multiplicar en `../ecuacion-primer-grado/`.
```

### 15 — Concepto: error de aplicar sólo a un lado

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Se puede aplicar logaritmo sólo al lado izquierdo de la ecuación, y dejar el lado derecho como está, sin que eso rompa la igualdad."

explicacion: |
  Rompe la igualdad — la misma operación tiene que aplicarse a los DOS
  lados.
```

### 16 — Concepto: por qué verificar el dominio

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Al resolver una ecuación logarítmica, siempre hay que comprobar que las soluciones encontradas dejen positivos los argumentos de los logaritmos originales."

explicacion: |
  El álgebra puede dar una solución que, al reemplazarla, deja un
  logaritmo de un número negativo o cero — no válida.
```

### 17 — Concepto: exponencial es inyectiva

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si aˣ = aʸ (misma base a), entonces necesariamente x = y."

explicacion: |
  La función exponencial nunca repite un valor de salida — por eso se
  puede "cancelar" la base cuando coincide en los dos lados.
```

### 18 — Concepto: log de un producto NO es producto de logs

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

variables:
  n: random(1, 3)
  m: random(1, 3)
  a: 10 ^ n
  b: 10 ^ m

respuesta: ((log10(a * b)) == (log10(a) * log10(b)))
tipo: vf

enunciado: "¿log₁₀({a}×{b}) es igual a log₁₀({a}) × log₁₀({b}) (multiplicando los logaritmos, no sumándolos)?"

explicacion: |
  Error común: log(a×b) es la SUMA de los logaritmos, no el producto.
```

### 19 — Verificación con error: ecuación exponencial

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 8)
  x_sol: random(1, 8)
  error: uno_de([0, 0, 1, -1])
  propuesto: x_sol + error

respuesta: (propuesto == x_sol)
tipo: vf

enunciado: "{a}^x = {a}^{x_sol}. ¿Es correcto que x = {propuesto}?"

explicacion: |
  Con la misma base, x tiene que coincidir exactamente con {x_sol}.
```

### 20 — Verificación con error: ecuación logarítmica

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  k: random(1, 5)
  real: 10 ^ k
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "log₁₀(x) = {k}. ¿Es correcto que x = {propuesto}?"

explicacion: |
  El valor correcto es x = 10^{k} = {real}.
```

### 21 — Aplicar en contexto: interés compuesto (cuándo se duplica)

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  n: random(1, 5)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Una inversión crece según C(t) = C₀×2^t. ¿Después de cuántos períodos t el capital queda multiplicado exactamente por {2 ^ n}?"

pasos:
  - "2^t = {2 ^ n} → t = log₂({2 ^ n}) = {n}"

explicacion: |
  Es una ecuación exponencial simple, reconociendo {2 ^ n} como potencia
  de 2.
```

### 22 — Aplicar en contexto: escala de Richter (logarítmica)

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["logaritmica", "problema"]

variables:
  k: random(1, 6)

respuesta: 10 ^ k
tipo: input
tolerancia_abs: 0

enunciado: "En una escala logarítmica, la magnitud registrada es log₁₀(I) = {k} (I es la intensidad, en una unidad de referencia). ¿Cuánto vale I?"

explicacion: |
  Se despeja igual que cualquier ecuación logarítmica: I = 10^{k}.
```

### 23 — Concepto: solución única en exponencial con bases iguales

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una ecuación exponencial simple como aˣ = aᵏ tiene una única solución."

explicacion: |
  A diferencia de una ecuación cuadrática, acá no hay dos soluciones
  posibles — la exponencial es inyectiva.
```

### 24 — Concepto: ecuación logarítmica puede tener solución extraña

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Al resolver una ecuación logarítmica que involucra un producto o cociente de logaritmos, es posible obtener una solución algebraica que no sea válida en el dominio original."

explicacion: |
  Es justo el caso del ejemplo de `teoria.md`: la ecuación cuadrática
  intermedia puede dar una raíz negativa que no sirve como argumento de
  un logaritmo.
```

### 25 — Ecuación exponencial: hallar la base

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["exponencial"]

variables:
  a: random(2, 10)
  n: 2

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: x² = {a ^ 2} (con x positivo). ¿Cuánto vale x?"

explicacion: |
  Acá la incógnita es la base, no el exponente — se resuelve con raíz
  cuadrada, no con logaritmo.
```

### 26 — Ecuación logarítmica: dos logaritmos igualados

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["logaritmica"]

variables:
  x_sol: random(2, 30)

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: log₁₀(x) = log₁₀({x_sol}). ¿Cuánto vale x?"

explicacion: |
  Con el mismo logaritmo a los dos lados, los argumentos tienen que
  coincidir (el logaritmo también es inyectivo).
```

### 27 — Concepto: el logaritmo también es inyectivo

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si log₁₀(x) = log₁₀(y), entonces necesariamente x = y."

explicacion: |
  El logaritmo nunca repite un valor de salida para dos argumentos
  distintos — es inyectivo, igual que la exponencial.
```

### 28 — Aplicar propiedades para simplificar antes de resolver

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_exponenciales_logaritmicas"
  nivel: "avanzado"
  tags: ["propiedades"]

variables:
  x_sol: random(2, 20)
  n: 2

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: 2·log₁₀(x) = log₁₀({x_sol ^ 2}). ¿Cuánto vale x (positivo)?"

pasos:
  - "2·log₁₀(x) = log₁₀(x²) (propiedad de la potencia)"
  - "log₁₀(x²) = log₁₀({x_sol ^ 2}) → x² = {x_sol ^ 2} → x = {x_sol}"

explicacion: |
  Convertir 2·log(x) en log(x²) permite igualar directamente los
  argumentos.
```
