# Matemática — Optimización: máximos y mínimos (cuestionario, 28 preguntas VBLang)

> Tema: `A13B` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Hallar el punto crítico

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "intermedio"
  tags: ["punto_critico"]

variables:
  a: random(1, 8)
  xv: random(-10, 10)
  b: -2 * a * xv

respuesta: xv
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x. ¿Cuál es el punto crítico de f (donde f'(x)=0)?"

pasos:
  - "f'(x) = {2 * a}x + {b} = 0 → x = −{b}/{2 * a} = {xv}"

explicacion: |
  El punto crítico se halla igualando la derivada a 0.
```

### 2 — Derivada segunda de una función cuadrática

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "intermedio"
  tags: ["derivada_segunda"]

variables:
  a: random(1, 10)
  b: random(-15, 15)
  c: random(-15, 15)

respuesta: 2 * a
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Cuánto vale f''(x)?"

pasos:
  - "f'(x) = {2 * a}x + {b}. Derivando de nuevo: f''(x) = {2 * a}"

explicacion: |
  La derivada segunda de una cuadrática es siempre la constante 2a.
```

### 3 — Clasificar: mínimo (a positivo)

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "intermedio"
  tags: ["clasificar", "opcion_multiple"]

variables:
  a: random(1, 10)
  xv: random(-10, 10)
  b: -2 * a * xv

respuesta: "Mínimo"
tipo: mc
opciones_explicitas:
  - "Mínimo"
  - "Máximo"
  - "Ninguno de los dos"

enunciado: "f(x) = {a}x² + {b}x tiene un punto crítico en x={xv}. Como f''(x)={2 * a}>0, ¿qué es ese punto?"

explicacion: |
  Derivada segunda positiva → mínimo.
```

### 4 — Clasificar: máximo (a negativo)

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "intermedio"
  tags: ["clasificar", "opcion_multiple"]

variables:
  a: random(1, 10)
  xv: random(-10, 10)
  b: 2 * a * xv

respuesta: "Máximo"
tipo: mc
opciones_explicitas:
  - "Máximo"
  - "Mínimo"
  - "Ninguno de los dos"

enunciado: "f(x) = −{a}x² + {b}x tiene un punto crítico en x={xv}. Como f''(x)=−{2 * a}<0, ¿qué es ese punto?"

explicacion: |
  Derivada segunda negativa → máximo.
```

### 5 — Valor del mínimo alcanzado

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(1, 6)
  xv: random(1, 10)
  b: -2 * a * xv
  c: random(-10, 10)

respuesta: a * xv ^ 2 + b * xv + c
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c} tiene su mínimo en x={xv}. ¿Cuál es el valor mínimo (f({xv}))?"

explicacion: |
  Se evalúa la función original en el punto crítico ya encontrado.
```

### 6 — Área máxima con perímetro fijo: hallar el lado

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  lado_optimo: random(2, 30)
  perimetro: 4 * lado_optimo

respuesta: lado_optimo
tipo: input
tolerancia_abs: 0

enunciado: "Un rectángulo tiene perímetro {perimetro}. ¿Qué medida de lado maximiza el área?"

pasos:
  - "A(x) = x(({perimetro}/2)−x), A'(x)=0 en x={lado_optimo} → el rectángulo óptimo es un cuadrado"

explicacion: |
  Entre todos los rectángulos con el mismo perímetro, el cuadrado es el
  que maximiza el área.
```

### 7 — Área máxima con perímetro fijo: el área resultante

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  lado_optimo: random(2, 30)
  perimetro: 4 * lado_optimo

respuesta: lado_optimo ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "Un rectángulo tiene perímetro {perimetro}, y su lado óptimo es {lado_optimo}. ¿Cuál es el área máxima?"

explicacion: |
  Área = lado² = {lado_optimo}² = {lado_optimo ^ 2} (el cuadrado óptimo).
```

### 8 — Problema: costo mínimo

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  a: random(1, 5)
  q_optimo: random(1, 20)
  b: -2 * a * q_optimo

respuesta: q_optimo
tipo: input
tolerancia_abs: 0

enunciado: "El costo de producir q unidades es C(q) = {a}q² + {b}q. ¿Para qué cantidad q se minimiza el costo?"

pasos:
  - "C'(q) = {2 * a}q + {b} = 0 → q = {q_optimo}"
  - "C''(q) = {2 * a} > 0 → es un mínimo"

explicacion: |
  Mismo procedimiento que cualquier optimización: derivar, igualar a 0,
  clasificar con la derivada segunda.
```

### 9 — Problema: ganancia máxima

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  a: random(1, 5)
  p_optimo: random(5, 30)
  b: 2 * a * p_optimo

respuesta: p_optimo
tipo: input
tolerancia_abs: 0

enunciado: "La ganancia de una empresa según el precio p es G(p) = −{a}p² + {b}p. ¿A qué precio p se maximiza la ganancia?"

pasos:
  - "G'(p) = −{2 * a}p + {b} = 0 → p = {p_optimo}"
  - "G''(p) = −{2 * a} < 0 → es un máximo"

explicacion: |
  Es el mismo problema de precio óptimo ya visto en
  `../funcion-cuadratica-parabola/`, ahora resuelto formalmente con
  derivadas.
```

### 10 — Concepto: qué es un punto crítico

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un punto crítico es un valor de x donde la derivada de la función se anula."

explicacion: |
  Es el candidato a máximo o mínimo — todavía hay que clasificarlo.
```

### 11 — Concepto: punto crítico no siempre es máximo o mínimo

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un punto crítico no es automáticamente un máximo o un mínimo — hay que usar la derivada segunda (u otro análisis) para confirmar cuál es."

explicacion: |
  Si f''=0 en ese punto, el criterio de la derivada segunda ni siquiera
  decide — hace falta un análisis más fino.
```

### 12 — Concepto: derivada segunda positiva

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si f''(x₀) > 0 en un punto crítico x₀, ese punto es un mínimo local."

explicacion: |
  Derivada segunda positiva significa que la función "abre hacia
  arriba" cerca de x₀ — un mínimo.
```

### 13 — Concepto: derivada segunda negativa

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si f''(x₀) < 0 en un punto crítico x₀, ese punto es un mínimo local."

explicacion: |
  Al revés: f''<0 indica un MÁXIMO local, no un mínimo.
```

### 14 — Concepto: punto crítico vs. raíz de la función

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Un punto crítico de f es lo mismo que una raíz de f (donde f(x)=0)."

explicacion: |
  Son preguntas distintas: raíz es donde f(x)=0; punto crítico es donde
  f'(x)=0 — pueden coincidir por casualidad, pero en general no.
```

### 15 — Verificación con error: punto crítico

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 8)
  xv: random(-10, 10)
  b: -2 * a * xv
  error: uno_de([0, 0, 1, -1])
  propuesto: xv + error

respuesta: (propuesto == xv)
tipo: vf

enunciado: "f(x) = {a}x² + {b}x. ¿Es correcto que el punto crítico sea x={propuesto}?"

explicacion: |
  El punto crítico correcto es x={xv} (donde f'(x)=0).
```

### 16 — Problema: minimizar material (dos variables ligadas)

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  suma_fija: random(20, 60)
  x_optimo: suma_fija / 2

respuesta: x_optimo
tipo: input
tolerancia_abs: 0

enunciado: "Dos números positivos suman {suma_fija}. ¿Qué valor de x (uno de los dos números) maximiza el producto x(({suma_fija})−x)?"

pasos:
  - "P(x) = x({suma_fija}−x), P'(x) = {suma_fija}−2x = 0 → x = {suma_fija}/2"

explicacion: |
  El producto máximo entre dos números de suma fija se da cuando los dos
  números son iguales.
```

### 17 — Problema: minimizar material, producto máximo

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  suma_fija: random(20, 60)
  x_optimo: suma_fija / 2

respuesta: x_optimo * x_optimo
tipo: input
tolerancia_abs: 0

enunciado: "Dos números positivos suman {suma_fija}, con valor óptimo x={x_optimo} para maximizar el producto. ¿Cuál es ese producto máximo?"

explicacion: |
  {x_optimo}×{x_optimo} = {x_optimo * x_optimo}.
```

### 18 — Concepto: sentido físico de la solución

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un problema de optimización con magnitudes físicas (longitud, cantidad, tiempo), hay que verificar que el punto crítico encontrado tenga sentido en ese contexto (por ejemplo, que no sea negativo)."

explicacion: |
  Una solución matemáticamente correcta puede no tener sentido en el
  problema real.
```

### 19 — Aplicar: velocidad óptima (mínimo consumo)

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  a: random(1, 3)
  v_optimo: random(50, 100)
  b: -2 * a * v_optimo

respuesta: v_optimo
tipo: input
tolerancia_abs: 0

enunciado: "El consumo de combustible según la velocidad v es C(v) = {a}v² + {b}v. ¿A qué velocidad se minimiza el consumo?"

explicacion: |
  Mismo procedimiento: C'(v)=0 da el punto crítico, y C''(v)={2 * a}>0
  confirma que es un mínimo.
```

### 20 — Concepto: derivada segunda constante en cuadráticas

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para cualquier función cuadrática f(x)=ax²+bx+c, la derivada segunda f''(x) es siempre la misma constante (2a), sin importar el valor de x."

explicacion: |
  Por eso el signo de a solo alcanza para saber si el vértice es máximo
  o mínimo, sin necesidad de evaluar f'' en ningún punto específico.
```

### 21 — Concepto: relación con la concavidad ya vista

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El criterio de la derivada segunda para clasificar un punto crítico de una cuadrática es exactamente el mismo criterio de concavidad ya visto en `../funcion-cuadratica-parabola/` (signo de a)."

explicacion: |
  Antes se observaba directamente el signo de a; ahora se llega a la
  misma conclusión derivando dos veces.
```

### 22 — Aplicar: hallar b conociendo el punto crítico

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "avanzado"
  tags: ["punto_critico"]

variables:
  a: random(1, 8)
  xv: random(-15, 15)

respuesta: -2 * a * xv
tipo: input
tolerancia_abs: 0

enunciado: "Se quiere que f(x) = {a}x² + bx tenga su punto crítico en x={xv}. ¿Cuánto tiene que valer b?"

explicacion: |
  De f'(x)={2 * a}x+b=0 en x={xv}: b = −{2 * a}×{xv} = {-2 * a * xv}.
```

### 23 — Concepto: máximo local vs. máximo absoluto

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Un máximo local encontrado con derivadas es siempre también el valor más grande que la función alcanza en TODO su dominio."

explicacion: |
  "Local" significa que es el más alto CERCA de ese punto — puede haber
  otro punto, en otra parte del dominio, donde la función valga más
  (para funciones más complejas que una parábola simple).
```

### 24 — Verificación con error: clasificación

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 10)

respuesta: falso

tipo: vf

enunciado: "f''(x) = {a} (positivo) en un punto crítico. ¿Es correcto concluir que ese punto es un máximo?"

explicacion: |
  Con f''>0, es un MÍNIMO, no un máximo — es el error de clasificación
  más común del tema.
```

### 25 — Problema: minimizar la suma de un número y su recíproco relacionado (área)

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  lado_optimo: random(4, 15)
  area_fija: lado_optimo ^ 2

respuesta: lado_optimo
tipo: input
tolerancia_abs: 0

enunciado: "Un rectángulo tiene área {area_fija}. ¿Qué medida de lado minimiza el perímetro?"

pasos:
  - "P(x) = 2x + 2({area_fija}/x), P'(x)=0 da x=√{area_fija} = {lado_optimo}"

explicacion: |
  Igual que con perímetro fijo y área máxima, el cuadrado también es la
  forma que minimiza el perímetro para un área dada.
```

### 26 — Aplicar: doble verificación del criterio

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 8)
  xv: random(-10, 10)
  b: -2 * a * xv

respuesta: (((2 * a * xv + b) == 0) == ((2 * a) > 0))
tipo: vf

enunciado: "f(x) = {a}x² + {b}x. ¿Es cierto, a la vez, que x={xv} es punto crítico Y que f'' es positiva ahí (o sea, que es un mínimo confirmado)?"

explicacion: |
  Las dos condiciones se verifican por separado: f'(x)=0 en {xv}, y
  f''(x)={2 * a}>0.
```

### 27 — Concepto: primer paso de cualquier optimización

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "basico"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Plantear la función que se quiere maximizar o minimizar"
tipo: mc
opciones_explicitas:
  - "Plantear la función que se quiere maximizar o minimizar"
  - "Calcular la derivada segunda directamente"
  - "Adivinar la respuesta y verificar"

enunciado: "En un problema de optimización con palabras (no una función ya dada), ¿cuál es el primer paso?"

explicacion: |
  Sin la función planteada correctamente, no hay nada que derivar —
  suele ser el paso más difícil del problema.
```

### 28 — Aplicar: costo con dos variables ligadas por una restricción

```
metadata:
  materia: "matematicas"
  tema: "optimizacion"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  total_fijo: random(20, 80)
  x_optimo: total_fijo / 2

respuesta: x_optimo
tipo: input
tolerancia_abs: 0

enunciado: "Un cable de longitud {total_fijo} se corta en dos partes, x y ({total_fijo}−x), para maximizar el producto de las dos partes. ¿Cuánto mide la parte x en el óptimo?"

explicacion: |
  Mismo problema de "dos números de suma fija, producto máximo" — las
  dos partes iguales.
```
