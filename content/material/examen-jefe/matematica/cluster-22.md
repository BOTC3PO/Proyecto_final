# Examen jefe — Dominio de Formas y Espacios

> Logro #73. Completaste el examen de geometría y combinatoria con excelencia. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **142 preguntas totales** en 5/5 secciones.

---

## Sección: optimizacion (28 preguntas)

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

## Sección: perimetro-y-area (38 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["perimetro", "vocabulario"]

enunciado: "¿Qué es el perímetro de una figura?"
tipo: mc
opciones_explicitas:
  - "La longitud total de su contorno"
  - "La superficie que ocupa"
  - "La cantidad de lados que tiene"
respuesta: "La longitud total de su contorno"

explicacion: |
  Es la suma de todos los lados (o la vuelta completa, en el círculo).
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["area", "vocabulario"]

enunciado: "¿Qué es el área de una figura?"
tipo: mc
opciones_explicitas:
  - "La medida de la superficie que ocupa"
  - "La longitud de su contorno"
  - "La cantidad de vértices que tiene"
respuesta: "La medida de la superficie que ocupa"

explicacion: |
  Se mide en unidades cuadradas: cm², m².
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["cuadrado", "perimetro"]

variables:
  l: random(2, 40)

respuesta: 4 * l
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el perímetro de un cuadrado de lado {l} cm?"

pasos:
  - "4 × {l} = {4 * l} cm"

explicacion: |
  El perímetro del cuadrado es 4 veces el lado.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["cuadrado", "area"]

variables:
  l: random(2, 40)

respuesta: l * l
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el área de un cuadrado de lado {l} cm?"

pasos:
  - "{l} × {l} = {l * l} cm²"

explicacion: |
  El área del cuadrado es el lado al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["cuadrado", "area"]

variables:
  l: random(2, 20)
  area: l * l

respuesta: l
tipo: input
tolerancia_abs: 0

enunciado: "Un cuadrado tiene {area} cm² de área. ¿Cuánto mide su lado?"

pasos:
  - "sqrt({area}) = {sqrt(area)}"

explicacion: |
  El lado es la raíz cuadrada del área (la operación inversa de
  elevarlo al cuadrado).
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["rectangulo", "perimetro"]

variables:
  b: random(3, 40)
  h: random(2, 30)

restricciones:
  - b != h

respuesta: 2 * (b + h)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el perímetro de un rectángulo de base {b} cm y altura {h} cm?"

pasos:
  - "2 × ({b} + {h}) = {2 * (b + h)} cm"

explicacion: |
  El perímetro suma los cuatro lados: dos bases y dos alturas.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["rectangulo", "area"]

variables:
  b: random(3, 40)
  h: random(2, 30)

respuesta: b * h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el área de un rectángulo de base {b} cm y altura {h} cm?"

pasos:
  - "{b} × {h} = {b * h} cm²"

explicacion: |
  El área del rectángulo es base por altura.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rectangulo", "area"]

variables:
  b: random(2, 15)
  h: random(2, 15)
  area: b * h

respuesta: h
tipo: input
tolerancia_abs: 0.01

enunciado: "Un rectángulo tiene {area} cm² de área y {b} cm de base. ¿Cuánto mide su altura?"

pasos:
  - "{area} ÷ {b} = {area / b} cm"

explicacion: |
  La altura se despeja dividiendo el área por la base.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["triangulo", "perimetro"]

variables:
  a: random(3, 20)
  b: random(3, 20)
  c: random(3, 20)

respuesta: a + b + c
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene lados de {a} cm, {b} cm y {c} cm. ¿Cuál es su perímetro?"

explicacion: |
  El perímetro de cualquier polígono es la suma de todos sus lados.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["triangulo", "area"]

variables:
  b: random(4, 40)
  h: random(2, 30)

respuesta: (b * h) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuál es el área de un triángulo de base {b} cm y altura {h} cm?"

pasos:
  - "({b} × {h}) ÷ 2 = {(b * h) / 2} cm²"

explicacion: |
  El área del triángulo es base por altura, dividido 2.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["triangulo", "area"]

variables:
  b: random(2, 20)
  h: random(2, 20)
  area: (b * h) / 2

respuesta: b
tipo: input
tolerancia_abs: 0.01

enunciado: "Un triángulo tiene {area} cm² de área y {h} cm de altura. ¿Cuánto mide su base?"

pasos:
  - "({area} × 2) ÷ {h} = {(area * 2) / h} cm"

explicacion: |
  Se despeja la base: (área × 2) ÷ altura.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["paralelogramo", "area"]

variables:
  b: random(4, 40)
  h: random(2, 30)

respuesta: b * h
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el área de un paralelogramo de base {b} cm y altura {h} cm?"

explicacion: |
  Igual que el rectángulo: base por altura (la altura es perpendicular a
  la base, no un lado inclinado).
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["paralelogramo", "perimetro"]

variables:
  b: random(4, 30)
  l: random(2, 20)

respuesta: 2 * (b + l)
tipo: input
tolerancia_abs: 0

enunciado: "Un paralelogramo tiene lados de {b} cm y {l} cm. ¿Cuál es su perímetro?"

explicacion: |
  Un paralelogramo tiene dos pares de lados iguales: el perímetro es
  2 × (lado1 + lado2).
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["trapecio", "area"]

variables:
  B: random(10, 40)
  b: random(3, 9)
  h: random(2, 20)

respuesta: ((B + b) * h) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Un trapecio tiene base mayor {B} cm, base menor {b} cm y altura {h} cm. ¿Cuál es su área?"

pasos:
  - "(({B} + {b}) × {h}) ÷ 2 = {((B + b) * h) / 2} cm²"

explicacion: |
  El área del trapecio es la semisuma de las bases, por la altura.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rombo", "area"]

variables:
  D: random(10, 40)
  d: random(4, 9)

respuesta: (D * d) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Un rombo tiene diagonales de {D} cm y {d} cm. ¿Cuál es su área?"

pasos:
  - "({D} × {d}) ÷ 2 = {(D * d) / 2} cm²"

explicacion: |
  El área del rombo es el producto de las diagonales, dividido 2.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["rombo", "perimetro"]

variables:
  l: random(3, 30)

respuesta: 4 * l
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el perímetro de un rombo de lado {l} cm?"

explicacion: |
  Los 4 lados del rombo miden lo mismo: perímetro = 4 × lado.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["circulo", "circunferencia"]

variables:
  r: random(2, 20)

respuesta: redondear(2 * pi * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es la circunferencia (el perímetro) de un círculo de radio {r} cm? Redondeá a 2 decimales."

pasos:
  - "2 × π × {r} = {redondear(2 * pi * r, 2)} cm"

explicacion: |
  La circunferencia es 2 × π × radio.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["circulo", "area"]

variables:
  r: random(2, 20)

respuesta: redondear(pi * r * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área de un círculo de radio {r} cm? Redondeá a 2 decimales."

pasos:
  - "π × {r}² = {redondear(pi * r * r, 2)} cm²"

explicacion: |
  El área del círculo es π por el radio al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["circulo", "circunferencia"]

variables:
  d: random(4, 40)

respuesta: redondear(pi * d, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es la circunferencia de un círculo de diámetro {d} cm? Redondeá a 2 decimales."

pasos:
  - "π × {d} = {redondear(pi * d, 2)} cm"

explicacion: |
  Como el diámetro es el doble del radio, la fórmula 2×π×r se puede
  escribir directamente como π × diámetro.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["circulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un círculo, el diámetro es siempre el doble del radio."

explicacion: |
  d = 2r: el diámetro cruza todo el círculo pasando por el centro, el
  radio es sólo la mitad de ese trayecto.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["circulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "π (pi) es siempre el mismo número, sin importar el tamaño del círculo."

explicacion: |
  π es la razón entre la circunferencia y el diámetro de cualquier
  círculo: ese cociente da siempre el mismo valor (≈ 3,14159...).
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El perímetro y el área de una figura son magnitudes independientes: no se puede calcular una a partir de la otra sin conocer la forma completa."

explicacion: |
  Dos figuras pueden compartir perímetro y tener áreas muy distintas (o
  viceversa).
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "avanzado"
  tags: ["rectangulo", "comparacion"]

variables:
  b1: random(2, 5)
  h1: random(15, 20)
  suma: b1 + h1
  b2: suma - random(1, 3)
  h2: suma - b2

restricciones:
  - b2 != h2
  - b2 > 0
  - h2 > 0

respuesta: (b1 * h1) != (b2 * h2)
tipo: vf

enunciado: "Un rectángulo mide {b1} cm × {h1} cm, y otro mide {b2} cm × {h2} cm. Ambos tienen el mismo perímetro. ¿Es cierto que sus áreas son distintas?"

pasos:
  - "Área 1: {b1} × {h1} = {b1 * h1} cm². Área 2: {b2} × {h2} = {b2 * h2} cm²."

explicacion: |
  Compartir perímetro no implica compartir área: la forma del rectángulo
  (más alargado o más parecido a un cuadrado) cambia cuánta superficie
  encierra.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "avanzado"
  tags: ["rectangulo", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "De todos los rectángulos con un perímetro dado, el cuadrado es el que tiene mayor área."

explicacion: |
  A medida que un rectángulo se "alarga" (manteniendo el mismo
  perímetro), su área se achica; la forma más "compacta" — el cuadrado —
  es la que más superficie encierra.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["triangulo", "vocabulario"]

enunciado: "¿Cuál es la fórmula correcta del área de un triángulo?"
tipo: mc
opciones_explicitas:
  - "(base × altura) ÷ 2"
  - "base × altura"
  - "base + altura"
respuesta: "(base × altura) ÷ 2"

explicacion: |
  El triángulo es "medio rectángulo": su área es la mitad de base ×
  altura.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["trapecio", "vocabulario"]

enunciado: "¿Cuál es la fórmula correcta del área de un trapecio (bases B y b, altura h)?"
tipo: mc
opciones_explicitas:
  - "((B + b) × h) ÷ 2"
  - "B × b × h"
  - "(B + b) × 2"
respuesta: "((B + b) × h) ÷ 2"

explicacion: |
  Es la semisuma de las bases, multiplicada por la altura.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rombo", "vocabulario"]

enunciado: "¿Cuál es la fórmula correcta del área de un rombo (diagonales D y d)?"
tipo: mc
opciones_explicitas:
  - "(D × d) ÷ 2"
  - "D × d"
  - "D + d"
respuesta: "(D × d) ÷ 2"

explicacion: |
  El producto de las diagonales, dividido 2.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rectangulo", "problema"]

variables:
  b: random(10, 60)
  h: random(5, 40)

respuesta: 2 * (b + h)
tipo: input
tolerancia_abs: 0

enunciado: "Un terreno rectangular mide {b} m de largo y {h} m de ancho. ¿Cuántos metros de alambre hacen falta para cercarlo por completo?"

explicacion: |
  Cercar el contorno es calcular el perímetro.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rectangulo", "problema"]

variables:
  b: random(3, 8)
  h: random(2, 4)

respuesta: b * h
tipo: input
tolerancia_abs: 0

enunciado: "Una pared mide {b} m de ancho y {h} m de alto. ¿Cuántos m² hay que pintar?"

explicacion: |
  La superficie a pintar es el área de la pared.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "avanzado"
  tags: ["circulo", "problema"]

variables:
  r: random(3, 15)

respuesta: redondear(pi * r * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un jardín circular tiene {r} m de radio. ¿Cuántos m² de césped hacen falta para cubrirlo? Redondeá a 2 decimales."

explicacion: |
  Es el área del círculo: π × r².
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["rectangulo", "verificacion"]

variables:
  b: random(3, 20)
  h: random(2, 15)
  correcto: b * h
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien calculado esto? El área de un rectángulo de {b} cm × {h} cm es {mostrado} cm²."

explicacion: |
  Se vuelve a calcular base × altura y se compara con el valor mostrado.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["cuadrado", "completar"]

variables:
  l: random(3, 30)

tipo: completar
enunciado: "Completá: el perímetro de un cuadrado de lado {l} cm es ___ cm."
respuestas_validas:
  - 4 * l

explicacion: |
  Perímetro = 4 × lado.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["triangulo", "completar"]

variables:
  b: random(4, 20)
  h: random(2, 20)

tipo: completar
enunciado: "Completá: el área de un triángulo de base {b} cm y altura {h} cm es ___ cm²."
respuestas_validas:
  - (b * h) / 2

explicacion: |
  Área = (base × altura) ÷ 2.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "avanzado"
  tags: ["orden"]

tipo: ordenar
enunciado: "Ordená estas figuras de menor a mayor área: cuadrado de lado 5 cm, rectángulo de 3×10 cm, triángulo de base 8 y altura 6 cm, círculo de radio 3 cm (usá π ≈ 3,14)."
opciones_explicitas:
  - "Círculo de radio 3 cm"
  - "Cuadrado de lado 5 cm"
  - "Triángulo de base 8 y altura 6 cm"
  - "Rectángulo de 3×10 cm"
respuesta_orden:
  - "Triángulo de base 8 y altura 6 cm"
  - "Círculo de radio 3 cm"
  - "Cuadrado de lado 5 cm"
  - "Rectángulo de 3×10 cm"

pasos:
  - "Triángulo: (8×6)÷2 = 24 cm². Círculo: 3,14×3² = 28,26 cm². Cuadrado: 5×5 = 25 cm². Rectángulo: 3×10 = 30 cm²."

explicacion: |
  Hay que calcular cada área con su propia fórmula antes de poder
  compararlas: 24 (triángulo) < 25 (cuadrado) < 28,26 (círculo) < 30
  (rectángulo).
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  l_cuadrado: random(8, 15)
  b_rect: random(3, 6)
  h_rect: l_cuadrado * 2 - b_rect

respuesta: "Rectángulo"
tipo: mc
opciones_explicitas:
  - "Rectángulo"
  - "Cuadrado"

enunciado: "¿Cuál tiene mayor perímetro: un cuadrado de lado {l_cuadrado} cm, o un rectángulo de {b_rect} cm × {h_rect} cm?"

pasos:
  - "Perímetro cuadrado: 4 × {l_cuadrado} = {4 * l_cuadrado} cm. Perímetro rectángulo: 2 × ({b_rect} + {h_rect}) = {2 * (b_rect + h_rect)} cm."

explicacion: |
  Se calcula el perímetro de cada uno y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "intermedio"
  tags: ["circulo", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La fórmula del área del círculo es π por el diámetro al cuadrado."

explicacion: |
  Es π por el RADIO al cuadrado (A = π × r²), no el diámetro — un error
  común es confundir los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "avanzado"
  tags: ["rectangulo", "problema"]

variables:
  b: random(4, 10)
  h: random(3, 8)
  lado_baldosa: 1

respuesta: b * h
tipo: input
tolerancia_abs: 0

enunciado: "Un piso rectangular mide {b} m × {h} m, y se va a cubrir con baldosas cuadradas de {lado_baldosa} m de lado. ¿Cuántas baldosas hacen falta?"

pasos:
  - "Área del piso: {b} × {h} = {b * h} m². Cada baldosa cubre 1 m², así que hacen falta {b * h} baldosas."

explicacion: |
  Como cada baldosa cubre exactamente 1 m², la cantidad de baldosas
  coincide con el área del piso en m².
```

```
metadata:
  materia: "matematicas"
  tema: "perimetro_y_area"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El perímetro se mide en unidades lineales (m, cm), y el área se mide en unidades cuadradas (m², cm²)."

explicacion: |
  Es una consecuencia directa de lo que representa cada uno: una
  longitud (el contorno) y una superficie (lo que encierra ese
  contorno).
```

## Sección: permutaciones (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones", "vocabulario"]

enunciado: "¿Qué es una permutación de un conjunto de n elementos?"
tipo: mc
opciones_explicitas:
  - "Cada una de las formas distintas de ordenar TODOS los elementos, sin dejar ninguno afuera y sin repetir ninguno"
  - "Cada una de las formas de elegir sólo una parte de los elementos"
  - "Cada una de las formas de elegir elementos sin importar el orden"
respuesta: "Cada una de las formas distintas de ordenar TODOS los elementos, sin dejar ninguno afuera y sin repetir ninguno"

explicacion: |
  Usa el conjunto completo — a diferencia de variaciones y
  combinaciones, que usan sólo una parte.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones", "completar"]

tipo: completar
enunciado: "Completá: n! = n × (n−1) × (n−2) × ... × 2 × ___."
respuestas_validas:
  - "1"

explicacion: |
  El producto termina siempre en 1.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones", "problema"]

variables:
  n: uno_de([3, 4, 5, 6])

respuesta: factorial(n)
tipo: input

enunciado: "¿Cuántas permutaciones distintas tiene un conjunto de {n} elementos?"

pasos:
  - "{n}! = {factorial(n)}"

explicacion: |
  Se multiplican todos los números enteros desde {n} hasta 1.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Por convención, 0! = 1 (hay exactamente una forma de 'ordenar' un conjunto vacío: no hacer nada)."

explicacion: |
  Es una convención necesaria para que las fórmulas de variaciones y
  combinaciones sigan funcionando en los casos extremos.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "1! = 1 (con un solo elemento, hay una única forma de 'ordenarlo')."

explicacion: |
  No hay nada que reordenar con un solo elemento.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones", "problema"]

variables:
  personas: uno_de([4, 5, 6, 7])

respuesta: factorial(personas)
tipo: input

enunciado: "¿De cuántas formas distintas se pueden ordenar {personas} personas en una fila?"

pasos:
  - "{personas}! = {factorial(personas)}"

explicacion: |
  Cada orden distinto de la fila es una permutación diferente.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "problema"]

variables:
  corredores: uno_de([4, 5, 6])

respuesta: factorial(corredores)
tipo: input

enunciado: "En una carrera con {corredores} corredores, ¿de cuántas formas distintas puede quedar el orden de llegada completo (1° a {corredores}°), sin empates?"

pasos:
  - "{corredores}! = {factorial(corredores)}"

explicacion: |
  Es una permutación de los {corredores} corredores en las
  {corredores} posiciones de llegada.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones", "problema"]

variables:
  canciones: uno_de([5, 6, 7, 8])

respuesta: factorial(canciones)
tipo: input

enunciado: "Un álbum tiene {canciones} canciones. ¿De cuántos órdenes distintos se puede armar una lista de reproducción que use TODAS las canciones del álbum?"

pasos:
  - "{canciones}! = {factorial(canciones)}"

explicacion: |
  Usa todas las canciones (no una parte), así que es una permutación.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones"]

enunciado: "¿Por qué el factorial crece mucho más rápido que una multiplicación por un número fijo?"
tipo: mc
opciones_explicitas:
  - "Porque cada término nuevo multiplica por un número que también crece (n, n−1, n−2...), no por un factor constante"
  - "En realidad el factorial crece a la misma velocidad que cualquier multiplicación"
  - "Porque siempre se multiplica por 10"
respuesta: "Porque cada término nuevo multiplica por un número que también crece (n, n−1, n−2...), no por un factor constante"

explicacion: |
  Por eso 10! (3.628.800) es enormemente más grande que 10×9=90.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "problema"]

variables:
  n: uno_de([4, 5, 6, 7])

respuesta: n + 1
tipo: input

enunciado: "¿Cuántas veces más grande es ({n}+1)! comparado con {n}!?"

pasos:
  - "({n}+1)! = ({n}+1) × {n}! — así que la razón es exactamente {n}+1 = {n + 1}"

explicacion: |
  Pasar de n! a (n+1)! agrega un factor más: multiplicar por (n+1).
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Para cualquier n ≥ 2, n! es siempre un número par."

explicacion: |
  El producto n × (n−1) × ... × 2 × 1 incluye siempre el factor 2, así
  que el resultado es múltiplo de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "ordenar"]

enunciado: "Ordená los pasos para calcular de cuántas formas se pueden ordenar n elementos, usando el principio multiplicativo."
tipo: ordenar
opciones_explicitas:
  - "Para el último elemento por ubicar queda 1 sola opción"
  - "Para el primer lugar hay n opciones disponibles"
  - "Para el segundo lugar hay n−1 opciones (ya se usó una), y así sucesivamente"
respuesta_orden:
  - "Para el primer lugar hay n opciones disponibles"
  - "Para el segundo lugar hay n−1 opciones (ya se usó una), y así sucesivamente"
  - "Para el último elemento por ubicar queda 1 sola opción"

explicacion: |
  Multiplicar esa secuencia completa (n, n−1, ..., 1) es exactamente
  n!.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "problema"]

variables:
  letras: uno_de([4, 5, 6])

respuesta: factorial(letras)
tipo: input

enunciado: "Una palabra tiene {letras} letras, TODAS distintas entre sí. ¿Cuántos anagramas distintos (reordenamientos de esas letras) se pueden formar, tengan sentido o no?"

pasos:
  - "{letras}! = {factorial(letras)}"

explicacion: |
  Cada anagrama es una permutación distinta de las {letras} letras.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Una permutación siempre usa TODOS los elementos del conjunto — ninguno queda afuera."

explicacion: |
  Es la diferencia clave con variaciones y combinaciones, que usan
  sólo una parte.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones", "aplicacion"]

enunciado: "Si una contraseña tiene que usar EXACTAMENTE las letras A, B, C, D (todas, sin repetir, en algún orden), ¿qué se necesita calcular para saber cuántas contraseñas distintas son posibles?"
tipo: mc
opciones_explicitas:
  - "Una permutación de las 4 letras: 4!"
  - "Una suma de las 4 letras"
  - "El cuadrado de 4"
respuesta: "Una permutación de las 4 letras: 4!"

explicacion: |
  Se usan todas las letras disponibles, sin dejar ninguna afuera.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "problema"]

variables:
  n: uno_de([7, 8, 9])

respuesta: factorial(n)
tipo: input

enunciado: "¿Cuánto es {n}!?"

pasos:
  - "{n}! = {n} × {n-1} × ... × 1 = {factorial(n)}"

explicacion: |
  A partir de 7-8 elementos, la cantidad de permutaciones ya es enorme.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "El factorial de un número negativo no tiene sentido en el contexto de contar permutaciones (no se puede ordenar una cantidad negativa de elementos)."

explicacion: |
  n siempre representa una cantidad de elementos, así que tiene que
  ser 0 o un entero positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones", "completar"]

tipo: completar
enunciado: "Completá: la cantidad de permutaciones de n elementos se escribe con el símbolo n ___ (factorial)."
respuestas_validas:
  - "!"

explicacion: |
  Se lee "n factorial".
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "intermedio"
  tags: ["permutaciones", "problema"]

variables:
  amigos: uno_de([4, 5, 6])

respuesta: factorial(amigos)
tipo: input

enunciado: "{amigos} amigos van al cine y hay exactamente {amigos} asientos en fila. ¿De cuántas formas distintas se pueden sentar?"

pasos:
  - "{amigos}! = {factorial(amigos)}"

explicacion: |
  Cada asiento distinto para cada persona es una permutación.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones"]

enunciado: "¿Cómo se relaciona una permutación con el principio multiplicativo de conteo?"
tipo: mc
opciones_explicitas:
  - "Es el caso particular donde en cada paso hay una opción menos disponible, porque se usan todos los elementos sin repetir"
  - "No tiene ninguna relación con el principio multiplicativo"
  - "Es el principio multiplicativo, pero sumando en vez de multiplicando"
respuesta: "Es el caso particular donde en cada paso hay una opción menos disponible, porque se usan todos los elementos sin repetir"

explicacion: |
  n × (n−1) × (n−2) × ... es exactamente la forma del principio
  multiplicativo con una opción menos en cada paso.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones"]

respuesta: 24
tipo: input

enunciado: "¿Cuánto es 4! (4 factorial)?"

pasos:
  - "4! = 4 × 3 × 2 × 1 = 24"

explicacion: |
  Es un valor que conviene recordar de memoria, por lo seguido que
  aparece.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "avanzado"
  tags: ["permutaciones", "problema"]

variables:
  n: uno_de([4, 5, 6])

respuesta: factorial(n + 1) - factorial(n)
tipo: input

enunciado: "¿Cuál es la diferencia entre ({n}+1)! y {n}!?"

pasos:
  - "({n}+1)! = {factorial(n + 1)}"
  - "{n}! = {factorial(n)}"
  - "Diferencia = {factorial(n + 1)} − {factorial(n)} = {factorial(n + 1) - factorial(n)}"

explicacion: |
  No es una resta trivial — el factorial crece tan rápido que la
  diferencia entre dos consecutivos también es grande.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["permutaciones"]

respuesta: 1
tipo: input

enunciado: "¿De cuántas formas distintas se puede 'ordenar' un conjunto de un solo elemento?"

explicacion: |
  Con un solo elemento no hay nada que reordenar: sólo hay 1 forma.
```

```
metadata:
  materia: "matematicas"
  tema: "permutaciones"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular permutaciones?"
tipo: mc
opciones_explicitas:
  - "Para saber de cuántas formas distintas se puede ordenar UN CONJUNTO COMPLETO de elementos"
  - "Sólo sirve para calcular probabilidades de lotería"
  - "Sólo aplica a conjuntos de números, nunca a personas u objetos"
respuesta: "Para saber de cuántas formas distintas se puede ordenar UN CONJUNTO COMPLETO de elementos"

explicacion: |
  Es también la pieza (el factorial) que hace falta para calcular
  variaciones y combinaciones, los dos módulos hermanos que siguen.
```

## Sección: plano-cartesiano (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "¿Qué es el plano cartesiano?"
tipo: mc
opciones_explicitas:
  - "Un sistema para ubicar puntos con dos rectas numéricas perpendiculares entre sí"
  - "Un tipo de triángulo con un ángulo recto"
  - "Otro nombre para la recta numérica de los enteros"
respuesta: "Un sistema para ubicar puntos con dos rectas numéricas perpendiculares entre sí"

explicacion: |
  Es el puente entre el álgebra y la geometría.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "¿Cómo se llama el eje horizontal del plano cartesiano?"
tipo: mc
opciones_explicitas:
  - "Eje x (o eje de abscisas)"
  - "Eje y (o eje de ordenadas)"
  - "Eje z"
respuesta: "Eje x (o eje de abscisas)"

explicacion: |
  El eje y es el vertical.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "¿Cómo se llama el eje vertical del plano cartesiano?"
tipo: mc
opciones_explicitas:
  - "Eje y (o eje de ordenadas)"
  - "Eje x (o eje de abscisas)"
  - "Eje diagonal"
respuesta: "Eje y (o eje de ordenadas)"

explicacion: |
  El eje x es el horizontal.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "¿Qué es el origen del plano cartesiano?"
tipo: mc
opciones_explicitas:
  - "El punto (0, 0), donde se cruzan los dos ejes"
  - "El punto más alejado del centro"
  - "Cualquier punto sobre el eje x"
respuesta: "El punto (0, 0), donde se cruzan los dos ejes"

explicacion: |
  Es el punto de referencia desde el que se mide cualquier otra
  posición.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["plano_cartesiano", "vocabulario"]

respuesta: 4
tipo: input
tolerancia_abs: 0

enunciado: "¿En cuántos cuadrantes dividen los dos ejes al plano cartesiano?"

explicacion: |
  Cada eje divide el plano en dos mitades; juntos, en cuatro regiones.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "En el cuadrante I, ¿qué signo tienen x e y?"
tipo: mc
opciones_explicitas:
  - "x positivo, y positivo"
  - "x negativo, y positivo"
  - "x negativo, y negativo"
respuesta: "x positivo, y positivo"

explicacion: |
  Es el cuadrante de arriba a la derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "En el cuadrante II, ¿qué signo tienen x e y?"
tipo: mc
opciones_explicitas:
  - "x negativo, y positivo"
  - "x positivo, y positivo"
  - "x positivo, y negativo"
respuesta: "x negativo, y positivo"

explicacion: |
  Es el cuadrante de arriba a la izquierda.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "En el cuadrante III, ¿qué signo tienen x e y?"
tipo: mc
opciones_explicitas:
  - "x negativo, y negativo"
  - "x positivo, y negativo"
  - "x negativo, y positivo"
respuesta: "x negativo, y negativo"

explicacion: |
  Es el cuadrante de abajo a la izquierda.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "En el cuadrante IV, ¿qué signo tienen x e y?"
tipo: mc
opciones_explicitas:
  - "x positivo, y negativo"
  - "x negativo, y negativo"
  - "x negativo, y positivo"
respuesta: "x positivo, y negativo"

explicacion: |
  Es el cuadrante de abajo a la derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano"]

respuesta: verdadero
tipo: vf

enunciado: "Los cuatro cuadrantes se numeran en sentido antihorario, empezando por el de arriba a la derecha (cuadrante I)."

explicacion: |
  I arriba-derecha, II arriba-izquierda, III abajo-izquierda, IV
  abajo-derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "problema"]

variables:
  x: random(1, 10)
  y: random(1, 10)

respuesta: "I"
tipo: mc
opciones_explicitas:
  - "I"
  - "II"
  - "III"
  - "IV"

enunciado: "¿En qué cuadrante está el punto ({x}, {y})?"

explicacion: |
  Ambas coordenadas son positivas: cuadrante I.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "problema"]

variables:
  x: random(1, 10)
  y: random(1, 10)

respuesta: "II"
tipo: mc
opciones_explicitas:
  - "II"
  - "I"
  - "III"
  - "IV"

enunciado: "¿En qué cuadrante está el punto (-{x}, {y})?"

explicacion: |
  x negativo, y positivo: cuadrante II.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "problema"]

variables:
  x: random(1, 10)
  y: random(1, 10)

respuesta: "III"
tipo: mc
opciones_explicitas:
  - "III"
  - "I"
  - "II"
  - "IV"

enunciado: "¿En qué cuadrante está el punto (-{x}, -{y})?"

explicacion: |
  x negativo, y negativo: cuadrante III.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "problema"]

variables:
  x: random(1, 10)
  y: random(1, 10)

respuesta: "IV"
tipo: mc
opciones_explicitas:
  - "IV"
  - "I"
  - "II"
  - "III"

enunciado: "¿En qué cuadrante está el punto ({x}, -{y})?"

explicacion: |
  x positivo, y negativo: cuadrante IV.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "avanzado"
  tags: ["plano_cartesiano"]

respuesta: verdadero
tipo: vf

enunciado: "Un punto que está exactamente sobre uno de los dos ejes (con x=0 o con y=0) no pertenece a ningún cuadrante."

explicacion: |
  Está en el límite entre dos cuadrantes, no dentro de ninguno.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["plano_cartesiano"]

respuesta: verdadero
tipo: vf

enunciado: "El punto (0, 0) es el origen del plano cartesiano."

explicacion: |
  Es donde se cruzan ambos ejes.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano"]

respuesta: verdadero
tipo: vf

enunciado: "Cada eje del plano cartesiano es, en el fondo, la misma recta numérica de los números enteros, sólo que orientada horizontal o verticalmente."

explicacion: |
  Por eso este módulo depende de `../numeros-enteros/`.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "El 'eje de abscisas' es otro nombre para:"
tipo: mc
opciones_explicitas:
  - "El eje x"
  - "El eje y"
  - "El origen"
respuesta: "El eje x"

explicacion: |
  "Abscisa" es el nombre técnico de la coordenada x.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "El 'eje de ordenadas' es otro nombre para:"
tipo: mc
opciones_explicitas:
  - "El eje y"
  - "El eje x"
  - "El origen"
respuesta: "El eje y"

explicacion: |
  "Ordenada" es el nombre técnico de la coordenada y.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["plano_cartesiano", "completar"]

tipo: completar
enunciado: "Completá: el plano cartesiano recibe su nombre en honor a René ___."
respuestas_validas:
  - "Descartes"

explicacion: |
  Descartes popularizó este sistema como puente entre álgebra y
  geometría.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "intermedio"
  tags: ["plano_cartesiano", "ordenar"]

enunciado: "Ordená los pasos para identificar en qué cuadrante está un punto (x, y)."
tipo: ordenar
opciones_explicitas:
  - "Combinar ambos signos para ubicar el cuadrante correspondiente"
  - "Determinar el signo de x"
  - "Determinar el signo de y"
respuesta_orden:
  - "Determinar el signo de x"
  - "Determinar el signo de y"
  - "Combinar ambos signos para ubicar el cuadrante correspondiente"

explicacion: |
  La combinación de los dos signos determina uno de los cuatro
  cuadrantes.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "avanzado"
  tags: ["plano_cartesiano"]

respuesta: verdadero
tipo: vf

enunciado: "El plano cartesiano permite 'dibujar' cualquier ecuación algebraica, y describir con números cualquier figura geométrica."

explicacion: |
  Es la idea central de la geometría analítica.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["plano_cartesiano", "vocabulario"]

enunciado: "¿Cuál de estos es un ejemplo cotidiano que usa la misma idea del plano cartesiano (ubicar algo con dos coordenadas)?"
tipo: mc
opciones_explicitas:
  - "El juego de la batalla naval, con filas y columnas"
  - "Contar cuántas personas hay en una fila"
  - "Medir la temperatura de un día"
respuesta: "El juego de la batalla naval, con filas y columnas"

explicacion: |
  Cualquier sistema de dos coordenadas cruzadas (fila y columna) usa la
  misma lógica que los ejes x e y.
```

```
metadata:
  materia: "matematicas"
  tema: "plano_cartesiano"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el plano cartesiano?"
tipo: mc
opciones_explicitas:
  - "Es la base para ubicar puntos, medir distancias y graficar rectas y curvas en los temas siguientes"
  - "Sólo sirve para dibujar triángulos"
  - "Sólo se usa en trigonometría, no en el resto de la geometría"
respuesta: "Es la base para ubicar puntos, medir distancias y graficar rectas y curvas en los temas siguientes"

explicacion: |
  Toda la geometría analítica que sigue se construye sobre este sistema
  de coordenadas.
```

## Sección: poligonos (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "vocabulario"]

enunciado: "¿Qué es un polígono?"
tipo: mc
opciones_explicitas:
  - "Una figura plana cerrada formada por segmentos de recta que no se cruzan entre sí"
  - "Cualquier figura con curvas"
  - "Una figura formada únicamente por ángulos rectos"
respuesta: "Una figura plana cerrada formada por segmentos de recta que no se cruzan entre sí"

explicacion: |
  Los lados son segmentos, se cierran sobre sí mismos y no se cruzan.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "completar"]

tipo: completar
enunciado: "Completá: un polígono de 5 lados se llama ___."
respuestas_validas:
  - "pentágono"

explicacion: |
  Penta- significa cinco.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "completar"]

tipo: completar
enunciado: "Completá: un polígono de 6 lados se llama ___."
respuestas_validas:
  - "hexágono"

explicacion: |
  Hexa- significa seis.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "completar"]

tipo: completar
enunciado: "Completá: un polígono de 8 lados se llama ___."
respuestas_validas:
  - "octógono"

explicacion: |
  Octo- significa ocho.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "vocabulario"]

enunciado: "¿Qué es un polígono convexo?"
tipo: mc
opciones_explicitas:
  - "Uno en el que todos los ángulos internos miden menos de 180°"
  - "Uno en el que todos los lados miden lo mismo"
  - "Uno con al menos un ángulo interno mayor a 180°"
respuesta: "Uno en el que todos los ángulos internos miden menos de 180°"

explicacion: |
  Ningún vértice se "hunde" hacia adentro.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "vocabulario"]

enunciado: "¿Qué es un polígono cóncavo?"
tipo: mc
opciones_explicitas:
  - "Uno con al menos un ángulo interno mayor a 180°"
  - "Uno con todos los lados de distinta longitud"
  - "Uno con más de 6 lados"
respuesta: "Uno con al menos un ángulo interno mayor a 180°"

explicacion: |
  Ese vértice "hundido" da la forma característica de flecha o estrella.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "vocabulario"]

enunciado: "¿Qué se necesita para que un polígono sea regular?"
tipo: mc
opciones_explicitas:
  - "Que todos sus lados midan lo mismo Y todos sus ángulos internos midan lo mismo"
  - "Que todos sus lados midan lo mismo, sin importar los ángulos"
  - "Que sea convexo, sin importar lados ni ángulos"
respuesta: "Que todos sus lados midan lo mismo Y todos sus ángulos internos midan lo mismo"

explicacion: |
  Hacen falta las dos condiciones a la vez: lados iguales Y ángulos
  iguales.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "intermedio"
  tags: ["poligonos", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Un rombo (los 4 lados iguales, pero dos ángulos agudos y dos obtusos) es un polígono regular."

explicacion: |
  Tiene los lados iguales, pero no los ángulos: le falta una de las dos
  condiciones para ser regular.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un cuadrado es un polígono regular."

explicacion: |
  Sus 4 lados miden lo mismo y sus 4 ángulos miden 90° cada uno.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "intermedio"
  tags: ["poligonos", "diagonales", "problema"]

variables:
  n: random(5, 12)

respuesta: n - 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas diagonales salen de un solo vértice en un polígono de {n} lados?"

pasos:
  - "{n} − 3 = {n - 3}"

explicacion: |
  Se restan el propio vértice y sus dos vecinos (unidos por lados, no por
  diagonales).
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "diagonales"]

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo tiene 0 diagonales."

explicacion: |
  Todos sus vértices son consecutivos entre sí (no hay ningún par de
  vértices "no vecinos").
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "diagonales", "problema"]

variables:
  n: random(5, 15)

respuesta: n * (n - 3) / 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas diagonales tiene en total un polígono de {n} lados?"

pasos:
  - "{n} × ({n} − 3) ÷ 2 = {n} × {n - 3} ÷ 2 = {n * (n - 3) / 2}"

explicacion: |
  Cada vértice aporta (n − 3) diagonales, pero cada diagonal se cuenta dos
  veces (una desde cada extremo): por eso se divide por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "diagonales"]

enunciado: "En la fórmula de diagonales D = n(n − 3) / 2, ¿por qué se divide por 2?"
tipo: mc
opciones_explicitas:
  - "Porque cada diagonal se cuenta dos veces, una desde cada uno de sus dos extremos"
  - "Porque todo polígono tiene el doble de lados que de diagonales"
  - "Es una convención sin motivo geométrico"
respuesta: "Porque cada diagonal se cuenta dos veces, una desde cada uno de sus dos extremos"

explicacion: |
  n(n − 3) cuenta cada diagonal por partida doble (desde cada vértice que
  la forma).
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "intermedio"
  tags: ["poligonos", "angulos_internos", "problema"]

variables:
  n: random(5, 14)

respuesta: (n - 2) * 180
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto suman los ángulos internos de un polígono de {n} lados?"

pasos:
  - "({n} − 2) × 180° = {n - 2} × 180° = {(n - 2) * 180}°"

explicacion: |
  Se puede dividir el polígono en (n − 2) triángulos trazando diagonales
  desde un mismo vértice, y cada triángulo suma 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "angulos_internos"]

enunciado: "¿Por qué la suma de ángulos internos de un polígono de n lados es (n − 2) × 180°?"
tipo: mc
opciones_explicitas:
  - "Porque el polígono se puede dividir en (n − 2) triángulos desde un mismo vértice, y cada uno suma 180°"
  - "Porque cada lado del polígono aporta 180° a la suma total"
  - "Es una fórmula empírica, sin relación con los triángulos"
respuesta: "Porque el polígono se puede dividir en (n − 2) triángulos desde un mismo vértice, y cada uno suma 180°"

explicacion: |
  Es la misma suma de 180° por triángulo, vista en `../triangulos/`,
  aplicada (n − 2) veces.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "angulos_internos", "problema"]

variables:
  a: random(60, 100)
  b: random(60, 100)
  c: random(60, 100)

restricciones:
  - (a + b + c) < 350

respuesta: 360 - a - b - c
tipo: input
tolerancia_abs: 0

enunciado: "Un cuadrilátero tiene tres de sus ángulos internos de {a}°, {b}° y {c}°. ¿Cuánto mide el cuarto ángulo?"

pasos:
  - "360° − {a}° − {b}° − {c}° = {360 - a - b - c}°"

explicacion: |
  Un cuadrilátero (n = 4) suma siempre 360° entre sus 4 ángulos internos.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "angulos_internos", "problema"]

variables:
  n: random(5, 12)

restricciones:
  - ((n - 2) * 180) - floor(((n - 2) * 180) / n) * n == 0

respuesta: (n - 2) * 180 / n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto mide cada ángulo interior de un polígono REGULAR de {n} lados?"

pasos:
  - "(({n} − 2) × 180°) ÷ {n} = {(n - 2) * 180}° ÷ {n} = {(n - 2) * 180 / n}°"

explicacion: |
  Al ser regular, los {n} ángulos son todos iguales: se reparte la suma
  total entre los {n} vértices.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "angulos_internos", "problema"]

variables:
  n: random(5, 14)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "La suma de los ángulos internos de un polígono da {(n - 2) * 180}°. ¿Cuántos lados tiene?"

pasos:
  - "{(n - 2) * 180}° ÷ 180° = {n - 2}, entonces n = {n - 2} + 2 = {n}"

explicacion: |
  Se despeja n de la fórmula (n − 2) × 180°: primero se divide por 180°, y
  después se le suma 2.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "intermedio"
  tags: ["poligonos", "angulos_externos"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de los ángulos exteriores de cualquier polígono convexo es siempre 360°, sin importar cuántos lados tenga."

explicacion: |
  A diferencia de los ángulos internos (que dependen de n), los exteriores
  siempre suman una vuelta completa: 360°.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "intermedio"
  tags: ["poligonos", "angulos_externos", "problema"]

variables:
  n: uno_de([4, 5, 6, 8, 9, 10, 12, 15, 18, 20])

respuesta: 360 / n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto mide cada ángulo exterior de un polígono REGULAR de {n} lados?"

pasos:
  - "360° ÷ {n} = {360 / n}°"

explicacion: |
  La vuelta completa (360°) se reparte por igual entre los {n} vértices.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "intermedio"
  tags: ["poligonos", "angulos_externos", "problema"]

variables:
  interior: random(60, 170)

respuesta: 180 - interior
tipo: input
tolerancia_abs: 0

enunciado: "Un ángulo interior de un polígono mide {interior}°. ¿Cuánto mide el ángulo exterior en ese mismo vértice?"

pasos:
  - "180° − {interior}° = {180 - interior}°"

explicacion: |
  Interior y exterior son suplementarios: suman siempre 180° (ver
  `../angulos/`).
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "angulos_externos", "problema"]

variables:
  n: uno_de([4, 5, 6, 8, 9, 10, 12, 15, 18, 20])

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Un polígono regular tiene cada ángulo exterior de {360 / n}°. ¿Cuántos lados tiene?"

pasos:
  - "360° ÷ {360 / n}° = {n}"

explicacion: |
  Se despeja n de 360° ÷ n = ángulo exterior, dividiendo 360° por el
  ángulo dado.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "angulos_internos"]

enunciado: "A medida que un polígono regular tiene más lados, ¿qué pasa con cada ángulo interior?"
tipo: mc
opciones_explicitas:
  - "Se hace cada vez más grande, acercándose a 180° (pero sin llegar)"
  - "Se hace cada vez más chico, acercándose a 0°"
  - "Se mantiene siempre igual, sin importar n"
respuesta: "Se hace cada vez más grande, acercándose a 180° (pero sin llegar)"

explicacion: |
  Con más lados, el polígono regular se parece cada vez más a un círculo:
  cada ángulo interior se acerca a 180° (un lado casi recto).
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "intermedio"
  tags: ["poligonos", "diagonales", "completar"]

tipo: completar
enunciado: "Completá la fórmula del número de diagonales de un polígono de n lados: D = n(n − ___) / 2."
respuestas_validas:
  - "3"

explicacion: |
  Cada vértice no se conecta consigo mismo ni con sus 2 vecinos: por eso
  el "n − 3".
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "intermedio"
  tags: ["poligonos", "angulos_internos", "completar"]

tipo: completar
enunciado: "Completá la fórmula de la suma de ángulos internos de un polígono de n lados: (n − ___) × 180°."
respuestas_validas:
  - "2"

explicacion: |
  Un polígono de n lados se divide en (n − 2) triángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "angulos_internos", "ordenar"]

enunciado: "Ordená los pasos para calcular el ángulo interior de un polígono regular de n lados."
tipo: ordenar
opciones_explicitas:
  - "El resultado es la medida de cada ángulo interior"
  - "Calcular la suma total de ángulos internos: (n − 2) × 180°"
  - "Dividir esa suma por n (cantidad de vértices, todos con el mismo ángulo por ser regular)"
respuesta_orden:
  - "Calcular la suma total de ángulos internos: (n − 2) × 180°"
  - "Dividir esa suma por n (cantidad de vértices, todos con el mismo ángulo por ser regular)"
  - "El resultado es la medida de cada ángulo interior"

explicacion: |
  Primero se calcula la suma total, después se reparte por igual entre
  los n vértices (porque es regular).
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "avanzado"
  tags: ["poligonos", "angulos_internos", "problema"]

variables:
  n: random(5, 8)
  conocidos: n - 1
  suma_conocidos: conocidos * random(60, 100)

respuesta: ((n - 2) * 180) - suma_conocidos
tipo: input
tolerancia_abs: 0

enunciado: "Un polígono de {n} lados tiene {conocidos} de sus ángulos internos sumando {suma_conocidos}° en total. ¿Cuánto mide el ángulo que falta?"

pasos:
  - "Suma total: ({n} − 2) × 180° = {(n - 2) * 180}°"
  - "{(n - 2) * 180}° − {suma_conocidos}° = {((n - 2) * 180) - suma_conocidos}°"

explicacion: |
  Se calcula la suma total esperada para {n} lados y se le resta lo que ya
  suman los ángulos conocidos.
```

```
metadata:
  materia: "matematicas"
  tema: "poligonos"
  nivel: "basico"
  tags: ["poligonos", "cierre"]

enunciado: "¿Para qué sirven las fórmulas de diagonales y ángulos internos de un polígono?"
tipo: mc
opciones_explicitas:
  - "Para calcular ángulos y diagonales de cualquier polígono sin medirlos uno por uno"
  - "Sólo sirven para triángulos"
  - "Sólo sirven para polígonos irregulares"
respuesta: "Para calcular ángulos y diagonales de cualquier polígono sin medirlos uno por uno"

explicacion: |
  Con sólo saber el número de lados, se puede calcular todo lo demás.
```
