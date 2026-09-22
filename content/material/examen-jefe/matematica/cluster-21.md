# Examen jefe — [PENDIENTE #621]

> Logro #621. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **134 preguntas totales** en 5/5 secciones.

---

## Sección: funcion-lineal-pendiente (30 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["pendiente"]

variables:
  x1: random(1, 10)
  y1: random(1, 20)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 + m * dx

respuesta: (y2 - y1) / (x2 - x1)
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es su pendiente?"

pasos:
  - "m = ({y2}−{y1})/({x2}−{x1}) = {y2 - y1}/{x2 - x1} = {(y2 - y1) / (x2 - x1)}"

explicacion: |
  m = (y₂−y₁)/(x₂−x₁).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["pendiente", "signos"]

variables:
  x1: random(1, 10)
  y1: random(20, 40)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 - m * dx

respuesta: (y2 - y1) / (x2 - x1)
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es su pendiente?"

explicacion: |
  Como y disminuye mientras x aumenta, la pendiente da negativa.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["pendiente", "verdadero_falso"]

variables:
  x1: random(1, 10)
  y1: random(1, 20)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 + m * dx

respuesta: (((y2 - y1) / (x2 - x1)) == ((y1 - y2) / (x1 - x2)))
tipo: vf

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). ¿Da lo mismo calcular la pendiente como (y₂−y₁)/(x₂−x₁) que como (y₁−y₂)/(x₁−x₂)?"

explicacion: |
  Sí: mientras se reste en el mismo orden arriba y abajo, el resultado
  es el mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

variables:
  x: random(1, 20)
  y1: random(1, 20)
  y2: random(21, 40)

respuesta: falso

tipo: vf

enunciado: "Los puntos ({x}, {y1}) y ({x}, {y2}) definen una función lineal con pendiente bien definida."

explicacion: |
  Con la misma x en los dos puntos, el denominador (x₂−x₁) da 0 — una
  recta vertical no es el gráfico de una función (no cumple que cada x
  tenga un único y).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["ordenada_origen"]

variables:
  m: random(1, 10)
  b: random(-20, 20)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿Cuál es la ordenada al origen?"

explicacion: |
  f(0) = {b}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["evaluar"]

variables:
  m: random(1, 10)
  b: random(-20, 20)
  x: random(-15, 15)

respuesta: m * x + b
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿Cuánto vale f({x})?"

explicacion: |
  {m}×{x} + {b} = {m * x + b}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["punto_pendiente"]

variables:
  m: random(1, 10)
  x1: random(1, 15)
  y1: random(1, 30)

respuesta: y1 - m * x1
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene pendiente {m} y pasa por ({x1}, {y1}). ¿Cuál es su ordenada al origen b?"

pasos:
  - "y₁ = m×x₁ + b → b = {y1} − {m}×{x1} = {y1 - m * x1}"

explicacion: |
  Se reemplaza el punto conocido en y=mx+b y se despeja b.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["punto_pendiente"]

variables:
  x1: random(1, 10)
  y1: random(1, 20)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 + m * dx

respuesta: y1 - m * x1
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). Ya sabiendo que m={m}, ¿cuál es su ordenada al origen b?"

explicacion: |
  b = y₁ − m×x₁ = {y1} − {m}×{x1} = {y1 - m * x1}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["signos", "verdadero_falso"]

variables:
  m: random(1, 15)
  b: random(-20, 20)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {m}x + {b}. ¿Es creciente esta función?"

explicacion: |
  m={m} es positivo, así que f crece cuando x aumenta.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["signos", "verdadero_falso"]

variables:
  m: random(-15, -1)
  b: random(-20, 20)

respuesta: falso

tipo: vf

enunciado: "f(x) = {m}x + {b}. ¿Es creciente esta función?"

explicacion: |
  m={m} es negativo, así que f DECRECE cuando x aumenta.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["signos", "opcion_multiple"]

variables:
  b: random(-20, 20)

respuesta: "Constante"
tipo: mc
opciones_explicitas:
  - "Constante"
  - "Creciente"
  - "Decreciente"

enunciado: "f(x) = 0x + {b} (o sea, f(x) = {b} para cualquier x). ¿Es creciente, decreciente o constante?"

explicacion: |
  Con m=0, la función no cambia, sea cual sea x — es constante.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["paralelas", "verdadero_falso"]

variables:
  m: random(1, 10)
  b1: random(-20, 20)
  b2: random(-20, 20)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {m}x + {b1} y g(x) = {m}x + {b2}. ¿Son paralelas estas dos rectas?"

explicacion: |
  Tienen la misma pendiente ({m}), así que son paralelas (nunca se
  cruzan, salvo que sean exactamente la misma recta).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["paralelas", "verdadero_falso"]

variables:
  m1: random(1, 10)
  m2: random(11, 20)
  b1: random(-20, 20)
  b2: random(-20, 20)

respuesta: falso

tipo: vf

enunciado: "f(x) = {m1}x + {b1} y g(x) = {m2}x + {b2}. ¿Son paralelas estas dos rectas?"

explicacion: |
  Tienen pendientes distintas ({m1} y {m2}), así que se cruzan en algún
  punto — no son paralelas.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["perpendiculares"]

variables:
  a: random(2, 10)
  b: random(2, 10)

respuesta: -b
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene pendiente {a}/{b} (como fracción, sin simplificar). La pendiente perpendicular se escribe con denominador {a}. ¿Cuál es su numerador?"

pasos:
  - "m₁ × m₂ = −1 → m₂ = −1/m₁ = −{b}/{a}: numerador −{b}"

explicacion: |
  La pendiente perpendicular es la inversa y opuesta: numerador y
  denominador se intercambian, y cambia el signo.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["perpendiculares", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(2, 10)

respuesta: ((a * (-b)) == -(b * a))
tipo: vf

enunciado: "Dos rectas tienen pendientes {a}/{b} y −{b}/{a}. ¿Son perpendiculares?"

explicacion: |
  Se verifica sin dividir, cruzando numeradores y denominadores: si
  m₁=p/q y m₂=r/s, son perpendiculares cuando p×r = −q×s.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["perpendiculares", "error_comun", "verdadero_falso"]

variables:
  m: random(2, 10)

respuesta: ((m * (-m)) == -1)
tipo: vf

enunciado: "Dos rectas tienen pendientes {m} y −{m} (mismo número, signo opuesto). ¿Son perpendiculares?"

explicacion: |
  Sólo son perpendiculares si {m}×(−{m}) da exactamente −1 — eso pasa
  únicamente si m=1. Tener signos opuestos NO alcanza por sí solo.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La pendiente mide cuánto cambia y por cada unidad que aumenta x."

explicacion: |
  Es la tasa de cambio constante de una función lineal.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El dominio de cualquier función lineal (con m≠0) son todos los números reales."

explicacion: |
  No hay ninguna restricción de dominio, como ya se vio en
  `../funcion-dominio/`.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["concepto", "imagen", "verdadero_falso"]

variables:
  m: random(1, 10)

respuesta: verdadero
tipo: vf

enunciado: "La imagen de f(x) = {m}x + b (con m distinto de 0) son todos los números reales."

explicacion: |
  Ya visto en `../funcion-imagen/`: cualquier recta no horizontal cubre
  todos los valores de y posibles.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

variables:
  m: random(1, 10)
  b: random(-20, 20)

respuesta: ((m * 0 + b) == b)
tipo: vf

enunciado: "f(x) = {m}x + {b}. ¿Pasa la recta por el punto (0, {b})?"

explicacion: |
  f(0) siempre da exactamente b — la ordenada al origen es, literalmente,
  el punto donde cruza el eje y.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  tarifa_fija: random(5, 30)
  precio_km: random(2, 10)
  km: random(1, 40)

respuesta: precio_km * km + tarifa_fija
tipo: input
tolerancia_abs: 0

enunciado: "Un viaje cuesta C(km) = {precio_km}·km + {tarifa_fija} (tarifa fija más precio por km). ¿Cuánto cuesta un viaje de {km} km?"

explicacion: |
  Es una función lineal: {precio_km} es la pendiente (cuánto sube por
  km), {tarifa_fija} es la ordenada al origen (el costo con 0 km).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  tarifa_fija: random(5, 30)
  precio_km: random(2, 10)
  km1: random(1, 10)
  km2: random(11, 30)
  costo1: precio_km * km1 + tarifa_fija
  costo2: precio_km * km2 + tarifa_fija

respuesta: (costo2 - costo1) / (km2 - km1)
tipo: input
tolerancia_abs: 0

enunciado: "Un viaje de {km1} km costó {costo1}, y uno de {km2} km costó {costo2}. ¿Cuál es el precio por km (la pendiente)?"

explicacion: |
  m = (costo2−costo1)/(km2−km1) — la misma fórmula de pendiente, con
  nombres de contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x1: random(1, 10)
  y1: random(1, 20)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 + m * dx
  real: (y2 - y1) / (x2 - x1)
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). ¿Es correcto que la pendiente sea {propuesto}?"

explicacion: |
  La pendiente correcta es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Dos puntos distintos (con distinta x) determinan una única recta que pasa por los dos."

explicacion: |
  Con dos puntos alcanza para calcular m y b, y quedan completamente
  determinados.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  m: random(2, 10)
  b: random(1, 20)
  x_sol: random(1, 20)
  oy: m * x_sol + b

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿Para qué valor de x es f(x) = {oy}?"

explicacion: |
  Se despeja x de {m}x + {b} = {oy}, el mismo procedimiento de
  `../ecuacion-primer-grado/`.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["raiz"]

variables:
  m: random(2, 10)
  b: random(-30, -1)

respuesta: -b / m
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿En qué valor de x cruza la recta el eje x (f(x)=0)?"

explicacion: |
  {m}x + {b} = 0 → x = −{b}/{m} = {-b / m}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "basico"
  tags: ["concepto"]

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la pendiente de una recta horizontal?"

explicacion: |
  Una recta horizontal no sube ni baja — su pendiente es 0.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "intermedio"
  tags: ["signos", "opcion_multiple"]

variables:
  m1: random(1, 10)
  m2: random(11, 20)

respuesta: "g(x)"
tipo: mc
opciones_explicitas:
  - "g(x)"
  - "f(x)"
  - "Crecen igual"

enunciado: "f(x) = {m1}x + 3, g(x) = {m2}x − 5. ¿Cuál de las dos crece más rápido?"

explicacion: |
  La que tiene mayor pendiente ({m2} > {m1}) sube más rápido, sin
  importar la ordenada al origen.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el valor absoluto de la pendiente, más 'inclinada' (más vertical) se ve la recta."

explicacion: |
  Una pendiente grande significa que y cambia mucho por cada unidad de
  x, así que la recta sube o baja más pronunciada.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_lineal_pendiente"
  nivel: "avanzado"
  tags: ["punto_pendiente"]

variables:
  x1: random(1, 10)
  y1: random(1, 20)
  m: random(2, 8)
  dx: random(1, 6)
  x2: x1 + dx
  y2: y1 + m * dx
  b: y1 - m * x1
  x_eval: random(1, 30)

respuesta: m * x_eval + b
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por ({x1}, {y1}) y ({x2}, {y2}). Usando su ecuación completa, ¿cuánto vale f({x_eval})?"

pasos:
  - "m = {m}, b = {b} → f(x) = {m}x + {b}"

explicacion: |
  Una vez armada la ecuación completa, evaluarla en cualquier x es
  directo.
```

## Sección: mcd (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "basico"
  tags: ["mcd", "vocabulario"]

enunciado: "¿Qué es el Máximo Común Divisor (MCD) de dos números?"
tipo: mc
opciones_explicitas:
  - "El mayor número que es divisor de los dos a la vez"
  - "El menor número que es múltiplo de los dos a la vez"
  - "La suma de todos los divisores en común"
respuesta: "El mayor número que es divisor de los dos a la vez"

explicacion: |
  Se buscan los divisores en común de los dos números, y se toma el más
  grande.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "basico"
  tags: ["mcd"]

variables:
  a: random(4, 40)
  b: random(4, 40)

respuesta: mcd(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCD de {a} y {b}?"

explicacion: |
  Se buscan los divisores en común de {a} y {b}, y se toma el mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd"]

variables:
  a: random(40, 200)
  b: random(40, 200)

respuesta: mcd(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCD de {a} y {b}?"

explicacion: |
  Con números más grandes conviene usar la factorización prima en vez de
  listar todos los divisores.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd", "factorizacion"]

variables:
  primo_comun: uno_de([2, 3, 5])
  k1: random(2, 9)
  k2: random(2, 9)
  a: primo_comun * k1
  b: primo_comun * k2

restricciones:
  - k1 != k2

respuesta: mcd(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCD de {a} y {b}?"

pasos:
  - "{a} = {primo_comun} × {k1}. {b} = {primo_comun} × {k2}. Comparten el factor {primo_comun}."

explicacion: |
  Al menos comparten el factor primo {primo_comun}; el MCD real puede ser
  más grande si {k1} y {k2} también comparten factores.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "basico"
  tags: ["mcd", "divisores"]

variables:
  d: random(2, 9)
  a: d * random(2, 10)
  b: d * random(2, 10)

respuesta: verdadero
tipo: vf

enunciado: "¿Es {d} un divisor común de {a} y {b}?"

explicacion: |
  {d} divide a los dos, aunque no sea necesariamente el MCD (podría haber
  un divisor común más grande).
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd"]

variables:
  n: random(2, 200)

respuesta: mcd(n, n + 1)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCD de {n} y {n + 1} (dos números consecutivos)?"

explicacion: |
  Dos números consecutivos nunca comparten ningún factor (salvo el 1): su
  MCD siempre es 1.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "basico"
  tags: ["mcd"]

variables:
  n: random(2, 999)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCD de {n} y {n}?"

explicacion: |
  El mayor divisor en común de un número consigo mismo es el propio
  número.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "basico"
  tags: ["mcd", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCD de dos números nunca puede ser mayor que el más chico de los dos."

explicacion: |
  Un divisor de un número nunca puede ser mayor que ese número; como el
  MCD divide a los dos, no puede superar al más chico.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd"]

variables:
  a: random(10, 60)
  b: random(10, 60)
  correcto: mcd(a, b)

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - correcto + 1
  - a

enunciado: "¿Cuál es el MCD de {a} y {b}?"

explicacion: |
  Las otras opciones no son divisores en común de los dos números (o no
  son el mayor de ellos).
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd", "problema"]

variables:
  d: random(2, 9)
  num: d * random(2, 9)
  den: d * random(2, 9)
  divisor_comun: mcd(num, den)

restricciones:
  - num != den

respuesta: num / divisor_comun
tipo: input
tolerancia_abs: 0

enunciado: "Para simplificar la fracción {num}/{den} al máximo, hay que dividir numerador y denominador por su MCD. ¿Cuál queda el numerador?"

pasos:
  - "El MCD de {num} y {den} es {divisor_comun}. {num} ÷ {divisor_comun} = {num / divisor_comun}"

explicacion: |
  Dividir numerador y denominador por su MCD da la fracción equivalente
  más simple posible.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd", "problema"]

variables:
  a: random(10, 60)
  b: random(10, 60)

respuesta: mcd(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "Tenés {a} caramelos y {b} chocolates, y querés armar la mayor cantidad posible de bolsitas iguales usando todos, sin mezclar tipos ni que sobre nada. ¿Cuántas bolsitas podés armar?"

explicacion: |
  La cantidad máxima de grupos iguales, sin que sobre nada de ninguno de
  los dos, es el MCD de las dos cantidades.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd", "problema"]

variables:
  a: random(20, 200)
  b: random(20, 200)

respuesta: mcd(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "Tenés dos varillas de {a} cm y {b} cm, y querés cortarlas en pedazos iguales, del mayor tamaño posible, sin que sobre nada de ninguna. ¿De cuántos cm tiene que ser cada pedazo?"

explicacion: |
  El pedazo más grande posible que entra exacto en las dos varillas es el
  MCD de sus longitudes.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "avanzado"
  tags: ["mcd"]

variables:
  a: random(10, 80)
  b: random(10, 80)
  c: random(10, 80)

respuesta: mcd(mcd(a, b), c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCD de {a}, {b} y {c}?"

pasos:
  - "Se calcula de a dos: MCD({a}, {b}) = {mcd(a, b)}, y después MCD({mcd(a, b)}, {c}) = {mcd(mcd(a, b), c)}"

explicacion: |
  El MCD de tres números se calcula de a pares: primero entre dos, y
  después ese resultado con el tercero.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd", "verificacion"]

variables:
  a: random(10, 80)
  b: random(10, 80)
  correcto: mcd(a, b)
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Es correcto decir que el MCD de {a} y {b} es {mostrado}?"

explicacion: |
  Hay que verificar dos cosas: que {mostrado} sea divisor de los dos
  números, y que no haya ningún divisor común más grande.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd"]

variables:
  primos: [2, 3, 5, 7, 11, 13]
  p1: uno_de(primos)
  p2: uno_de(primos)

restricciones:
  - p1 != p2

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCD de {p1} y {p2} (dos números primos distintos)?"

explicacion: |
  Dos primos distintos no comparten ningún factor además del 1: su MCD
  siempre es 1.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "basico"
  tags: ["mcd", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCD de dos números siempre es divisor de los dos, además de ser el mayor de los divisores en común."

explicacion: |
  Es la propia definición: el MCD tiene que dividir a ambos números para
  contar como divisor común.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd", "divisores"]

variables:
  d: random(2, 9)
  a: d * random(2, 9)
  b: d * random(2, 9)

tipo: completar
enunciado: "Nombrá un divisor común de {a} y {b} (no hace falta que sea el MCD, alcanza con que sea común a los dos)."
respuestas_validas:
  - d
  - 1

explicacion: |
  Cualquier divisor que aparezca en las dos listas de divisores sirve; el
  1 siempre es válido porque divide a todos los números.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd"]

variables:
  a: random(2, 30)
  k: random(2, 9)
  b: a * k

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCD de {a} y {b}, sabiendo que {b} es múltiplo de {a}?"

explicacion: |
  Cuando un número es múltiplo del otro, el más chico de los dos ya es el
  MCD: no hace falta calcular nada más.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd", "divisores"]

variables:
  d: random(2, 9)
  a: d * random(2, 9)
  b: d * random(2, 9)
  no_comun: a + 1

respuesta: no_comun
tipo: mc
opciones_explicitas:
  - d
  - 1
  - no_comun

enunciado: "¿Cuál de estos tres números NO es divisor común de {a} y {b}?"

explicacion: |
  {no_comun} es mayor que {a}, así que ni siquiera puede ser divisor de
  {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "basico"
  tags: ["mcd", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCD de dos números consecutivos (como 8 y 9) siempre es 1."

explicacion: |
  Dos números consecutivos nunca comparten factores, salvo el 1.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "avanzado"
  tags: ["mcd", "problema"]

variables:
  d: random(2, 9)
  a: d * random(2, 9)
  b: d * random(2, 9)
  divisor_comun: mcd(a, b)

restricciones:
  - a != b

respuesta: b / divisor_comun
tipo: input
tolerancia_abs: 0

enunciado: "En un salón hay {a} varones y {b} mujeres. Para escribir esa razón de la forma más simple posible, hay que dividir los dos números por su MCD. ¿Cuál queda el número de mujeres?"

pasos:
  - "MCD({a}, {b}) = {divisor_comun}. {b} ÷ {divisor_comun} = {b / divisor_comun}"

explicacion: |
  Simplificar una razón es la misma idea que simplificar una fracción:
  dividir ambos números por su MCD.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "avanzado"
  tags: ["mcd", "factorizacion"]

variables:
  a: uno_de([12, 18, 24, 36])
  b: uno_de([12, 18, 24, 36])
  correcto: mcd(a, b)

restricciones:
  - a != b

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a * b
  - correcto + 6

enunciado: "¿Cuál es el MCD de {a} y {b}?"

explicacion: |
  Conviene factorizar los dos números en primos y quedarse con los
  factores en común, usando el menor exponente de cada uno.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "intermedio"
  tags: ["mcd", "propiedades"]

variables:
  a: random(10, 90)
  b: random(10, 90)

respuesta: (mcd(a, b) == mcd(b, a))
tipo: vf

enunciado: "¿Es cierto que el MCD de {a} y {b} da lo mismo que el MCD de {b} y {a}?"

explicacion: |
  El orden en que se comparan los dos números no cambia el resultado: el
  MCD es conmutativo.
```

```
metadata:
  materia: "matematicas"
  tema: "mcd"
  nivel: "basico"
  tags: ["mcd", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCD sirve para saber, entre otras cosas, cuál es el tamaño de grupo más grande que se puede repetir exacto en dos cantidades distintas, sin que sobre nada."

explicacion: |
  Es la aplicación práctica más común del MCD: repartir o cortar en la
  mayor cantidad posible de partes iguales.
```

## Sección: operaciones-enteros (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "suma"]

variables:
  a: random(1, 50)
  b: random(1, 50)

respuesta: (-a) + (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) + (-{b})?"

pasos:
  - "Mismo signo: se suman los valores y se conserva el signo negativo: -({a} + {b}) = {(-a) + (-b)}"

explicacion: |
  Con el mismo signo, se suman los valores absolutos y se conserva el
  signo común.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "suma"]

variables:
  a: random(1, 50)
  b: random(1, 50)

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

explicacion: |
  Con dos positivos, la suma de enteros funciona exactamente igual que la
  suma que ya conocés.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "suma"]

variables:
  a: random(10, 50)
  b: random(1, 9)

respuesta: a + (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + (-{b})?"

pasos:
  - "Signos distintos: se restan los valores ({a} - {b} = {a - b}) y queda el signo del que pesa más ({a}, que es positivo): {a - b}"

explicacion: |
  Cuando los signos son distintos, se restan los valores absolutos (el
  mayor menos el menor) y el resultado queda con el signo del que tenía
  mayor valor absoluto.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "suma"]

variables:
  a: random(10, 50)
  b: random(1, 9)

respuesta: (-a) + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) + {b}?"

pasos:
  - "Signos distintos: {a} - {b} = {a - b}, y queda el signo del que pesa más (-{a}, que es negativo): -{a - b}"

explicacion: |
  Acá el negativo tiene mayor valor absoluto, así que el resultado final
  es negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "suma"]

variables:
  a: random(5, 40)
  b: random(5, 40)

restricciones:
  - a != b

respuesta: (-a) + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) + {b}?"

explicacion: |
  Hay que fijarse bien cuál de los dos valores absolutos es mayor antes de
  decidir el signo del resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "resta"]

variables:
  a: random(1, 30)
  b: random(1, 30)

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b}?"

explicacion: |
  Restar un número positivo funciona igual que la resta que ya conocés.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "resta"]

variables:
  a: random(1, 50)
  b: random(1, 50)

respuesta: a - (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - (-{b})?"

pasos:
  - "Restar un negativo es sumar su opuesto: {a} + {b} = {a + b}"

explicacion: |
  Restar un negativo es lo mismo que sumar el positivo correspondiente.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "avanzado"
  tags: ["operaciones_enteros", "resta"]

variables:
  a: random(1, 50)
  b: random(1, 50)

respuesta: (-a) - (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) - (-{b})?"

pasos:
  - "Se transforma en suma del opuesto: -{a} + {b}"

explicacion: |
  Restar un negativo siempre suma su opuesto, sin importar el signo del
  primer número.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "resta"]

variables:
  a: random(1, 20)
  b: a + random(1, 30)

respuesta: a - b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b}?"

explicacion: |
  Con enteros, restar un número mayor a uno menor da un resultado
  negativo — algo que no era posible con sólo los naturales.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "multiplicacion"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: a * b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b}?"

explicacion: |
  Positivo por positivo da positivo, igual que siempre.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "multiplicacion"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: (-a) * b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) × {b}?"

explicacion: |
  Signos distintos: el resultado es negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "multiplicacion"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: a * (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × (-{b})?"

explicacion: |
  No importa en qué orden aparezca el signo negativo: signos distintos
  siempre dan negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "multiplicacion"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: (-a) * (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) × (-{b})?"

explicacion: |
  Signos iguales (los dos negativos): el resultado es positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "division"]

variables:
  b: random(2, 9)
  k: random(2, 15)
  a: b * k

respuesta: (-a) / b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) ÷ {b}?"

explicacion: |
  Signos distintos: el cociente es negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "division"]

variables:
  b: random(2, 9)
  k: random(2, 15)
  a: b * k

respuesta: (-a) / (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) ÷ (-{b})?"

explicacion: |
  Signos iguales (los dos negativos): el cociente es positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "division"]

variables:
  b: random(2, 9)
  k: random(2, 15)
  a: b * k

respuesta: a / (-b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} ÷ (-{b})?"

explicacion: |
  Signos distintos: el cociente es negativo, aunque el negativo esté en
  el divisor.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla de los signos (mismo signo = positivo, distinto signo = negativo) es la misma para multiplicar y para dividir."

explicacion: |
  No hay que aprender dos reglas separadas: es una sola, que aplica igual
  a las dos operaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La regla \"mismo signo, distinto resultado\" que usás para sumar es la misma regla que usás para multiplicar."

explicacion: |
  Son reglas distintas: al SUMAR con mismo signo se suman los valores; al
  MULTIPLICAR con mismo signo, el resultado da positivo (no se trata de
  sumar ni restar valores absolutos).
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "resta", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Restar un número negativo es lo mismo que sumar su opuesto (un positivo)."

explicacion: |
  a - (-b) = a + b: dos signos negativos seguidos se cancelan.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "basico"
  tags: ["operaciones_enteros", "multiplicacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Multiplicar un número positivo por un número negativo siempre da como resultado un número negativo."

explicacion: |
  Signos distintos siempre dan resultado negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "avanzado"
  tags: ["operaciones_enteros", "combinada"]

variables:
  a: random(1, 20)
  b: random(2, 9)
  c: random(2, 9)

respuesta: a + (-b) * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + (-{b}) × {c}?"

pasos:
  - "Primero la multiplicación (regla de signos): (-{b}) × {c} = {(-b) * c}. Después la suma: {a} + {(-b) * c} = {a + (-b) * c}"

explicacion: |
  Sigue aplicando la jerarquía de operaciones: multiplicación antes que
  suma, con la regla de signos correspondiente.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "avanzado"
  tags: ["operaciones_enteros", "combinada"]

variables:
  a: random(1, 20)
  b: random(2, 9)
  c: random(2, 9)

respuesta: a - (-b) * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - (-{b}) × {c}?"

pasos:
  - "Multiplicación primero: (-{b}) × {c} = {(-b) * c}. Después la resta: {a} - ({(-b) * c}) = {a - (-b) * c}"

explicacion: |
  Primero se resuelve la multiplicación con su regla de signos, y recién
  después la resta.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "avanzado"
  tags: ["operaciones_enteros", "combinada"]

variables:
  b: random(2, 9)
  k: random(2, 9)
  a: b * k
  c: random(1, 20)

respuesta: (-a) / b - c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es (-{a}) ÷ {b} - {c}?"

pasos:
  - "División primero: (-{a}) ÷ {b} = {(-a) / b}. Después la resta: {(-a) / b} - {c} = {(-a) / b - c}"

explicacion: |
  La jerarquía de operaciones sigue mandando: división antes que resta.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "problema"]

variables:
  deuda: random(500, 5000)
  pago: random(100, deuda - 1)

respuesta: (-deuda) + pago
tipo: input
tolerancia_abs: 0

enunciado: "Debés ${deuda} (saldo -{deuda}) y pagás ${pago}. ¿Cuál es tu nuevo saldo?"

explicacion: |
  Pagar una deuda es sumar un positivo a un saldo negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "problema"]

variables:
  inicial: random(5, 20)
  baja1: random(1, 10)
  baja2: random(1, 10)

respuesta: inicial - baja1 - baja2
tipo: input
tolerancia_abs: 0

enunciado: "La temperatura estaba en {inicial}°C, bajó {baja1} grados, y después bajó {baja2} grados más. ¿Qué temperatura quedó (puede ser negativa)?"

explicacion: |
  Cada bajada es una resta; si la temperatura cae por debajo de 0, el
  resultado queda negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "problema"]

variables:
  perdida_por_dia: random(50, 500)
  dias: random(2, 10)

respuesta: (-perdida_por_dia) * dias
tipo: input
tolerancia_abs: 0

enunciado: "Un negocio pierde ${perdida_por_dia} por día durante {dias} días. ¿Cuál es el resultado acumulado (en negativo)?"

explicacion: |
  Repetir una pérdida varios días es multiplicar un negativo por un
  positivo: el resultado da negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros", "verificacion"]

variables:
  a: random(2, 12)
  b: random(2, 12)
  correcto: (-a) * b
  error: uno_de([0, 0, 0, a, -a])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelto esto? (-{a}) × {b} = {mostrado}"

explicacion: |
  Un error típico es olvidarse la regla de signos y dar el resultado con
  el signo equivocado.
```

```
metadata:
  materia: "matematicas"
  tema: "operaciones_enteros"
  nivel: "intermedio"
  tags: ["operaciones_enteros"]

variables:
  a: random(2, 20)
  b: random(2, 20)
  correcto: (-a) + b

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - (-a) - b
  - a + b

enunciado: "¿Cuánto es (-{a}) + {b}?"

explicacion: |
  Hay que aplicar la regla de signos distintos: restar los valores
  absolutos y quedarse con el signo del que pesa más.
```

## Sección: fracciones (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

enunciado: "En la fracción 3/4, ¿qué representa el 3 (el numerador)?"
tipo: mc
opciones_explicitas:
  - "Cuántas partes se toman"
  - "En cuántas partes se dividió el todo"
  - "El resultado de la división"
respuesta: "Cuántas partes se toman"

explicacion: |
  El numerador dice cuántas partes del todo se están tomando.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

enunciado: "En la fracción 3/4, ¿qué representa el 4 (el denominador)?"
tipo: mc
opciones_explicitas:
  - "En cuántas partes iguales se dividió el todo"
  - "Cuántas partes se toman"
  - "El resultado de la división"
respuesta: "En cuántas partes iguales se dividió el todo"

explicacion: |
  El denominador dice en cuántas partes iguales se dividió el entero.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c: a * k
  d: b * k

respuesta: (a * d == b * c)
tipo: vf

enunciado: "¿Son equivalentes las fracciones {a}/{b} y {c}/{d}?"

pasos:
  - "Producto cruzado: {a} × {d} = {a * d}. {b} × {c} = {b * c}. ¿Son iguales?"

explicacion: |
  Dos fracciones son equivalentes si el producto cruzado da lo mismo de
  los dos lados.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: falso
tipo: vf

enunciado: "¿Son equivalentes las fracciones {a}/{b} y {c}/{d}?"

explicacion: |
  El producto cruzado no da igual de los dos lados: no son equivalentes.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "amplificar"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 9)

respuesta: a * k
tipo: input
tolerancia_abs: 0

enunciado: "Para amplificar {a}/{b} multiplicando por {k}, ¿cuál queda el nuevo numerador?"

pasos:
  - "{a} × {k} = {a * k} (y el denominador queda {b} × {k} = {b * k})"

explicacion: |
  Amplificar es multiplicar numerador y denominador por el mismo número,
  para llegar a una fracción equivalente.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "simplificar"]

variables:
  divisor_comun: random(2, 9)
  num: divisor_comun * random(2, 9)
  den: divisor_comun * random(2, 9)
  simplificador: mcd(num, den)

restricciones:
  - num != den

respuesta: num / simplificador
tipo: input
tolerancia_abs: 0

enunciado: "Al simplificar {num}/{den} al máximo (dividiendo por su MCD), ¿cuál queda el numerador?"

pasos:
  - "MCD({num}, {den}) = {simplificador}. {num} ÷ {simplificador} = {num / simplificador}"

explicacion: |
  Simplificar al máximo es dividir numerador y denominador por su MCD.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "simplificar"]

variables:
  a: random(1, 20)
  b: a + 1

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a}/{b} una fracción irreducible (que ya no se puede simplificar más)?"

explicacion: |
  Como {a} y {b} son números consecutivos, su MCD es 1: no se pueden
  simplificar más.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "comparacion"]

variables:
  b: random(5, 20)
  a: random(1, b - 1)
  c: random(1, b - 1)

restricciones:
  - a != c

respuesta: (a > c)
tipo: vf

enunciado: "¿Es {a}/{b} mayor que {c}/{b}?"

explicacion: |
  Con el mismo denominador, alcanza con comparar los numeradores.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "comparacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: (a * d > b * c)
tipo: vf

enunciado: "¿Es {a}/{b} mayor que {c}/{d}?"

pasos:
  - "Producto cruzado: {a} × {d} = {a * d}. {b} × {c} = {b * c}."

explicacion: |
  Con distinto denominador, se compara el producto cruzado: a/b es mayor
  que c/d si a×d es mayor que b×c.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

variables:
  b: random(2, 9)
  a: random(1, b - 1)

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a}/{b} una fracción propia (menor que 1 entero)?"

explicacion: |
  Como el numerador es menor que el denominador, la fracción vale menos
  que un entero completo.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

variables:
  b: random(2, 9)
  a: b + random(1, 9)

respuesta: falso
tipo: vf

enunciado: "¿Es {a}/{b} una fracción propia (menor que 1 entero)?"

explicacion: |
  Como el numerador es mayor que el denominador, esta fracción es
  impropia: vale 1 entero o más.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "numero_mixto"]

variables:
  b: random(2, 9)
  entero: random(1, 5)
  resto: random(1, b - 1)
  a: b * entero + resto

respuesta: entero
tipo: input
tolerancia_abs: 0

enunciado: "Al convertir la fracción impropia {a}/{b} a número mixto, ¿cuál es la parte entera?"

pasos:
  - "{a} ÷ {b} da cociente {entero} (y resto {resto})"

explicacion: |
  La parte entera es el cociente de dividir el numerador por el
  denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "numero_mixto"]

variables:
  b: random(2, 9)
  entero: random(1, 5)
  resto: random(1, b - 1)
  a: b * entero + resto

respuesta: resto
tipo: input
tolerancia_abs: 0

enunciado: "Al convertir {a}/{b} a número mixto, ¿cuál queda el numerador de la parte fraccionaria (sobre el mismo denominador {b})?"

pasos:
  - "El resto de {a} ÷ {b} es {resto}: el número mixto queda {entero} entero(s) y {resto}/{b}"

explicacion: |
  La parte fraccionaria es el resto de la división, sobre el mismo
  denominador original.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "numero_mixto"]

variables:
  entero: random(1, 6)
  b: random(2, 9)
  resto: random(1, b - 1)

respuesta: entero * b + resto
tipo: input
tolerancia_abs: 0

enunciado: "El número mixto es {entero} entero(s) y {resto}/{b}. ¿Cuál es el numerador de la fracción impropia equivalente (sobre el mismo denominador {b})?"

pasos:
  - "{entero} × {b} + {resto} = {entero * b + resto}"

explicacion: |
  Se multiplica la parte entera por el denominador y se suma el
  numerador de la parte fraccionaria.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "orden"]

tipo: ordenar
enunciado: "Ordená estas fracciones de menor a mayor (todas tienen el mismo denominador)."
opciones_explicitas:
  - "5/8"
  - "1/8"
  - "6/8"
  - "3/8"
respuesta_orden: ["1/8", "3/8", "5/8", "6/8"]

explicacion: |
  Con el mismo denominador, alcanza con ordenar los numeradores.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 6)

respuesta: a * k
tipo: mc
opciones_explicitas:
  - a * k
  - a * k + 1
  - a + k

enunciado: "¿Cuál es el numerador de una fracción equivalente a {a}/{b}, con denominador {b * k}?"

explicacion: |
  Si el denominador se multiplicó por {k}, el numerador también tiene que
  multiplicarse por {k} para que la fracción siga valiendo lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 6)
  equivalente: a * k
  no_equivalente: equivalente + 1

respuesta: no_equivalente
tipo: mc
opciones_explicitas:
  - equivalente
  - no_equivalente

enunciado: "¿Cuál de estos dos numeradores NO forma una fracción equivalente a {a}/{b}, con denominador {b * k}?"

explicacion: |
  Sólo {a} × {k} = {equivalente} mantiene la misma proporción.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "problema"]

variables:
  porciones: random(4, 12)
  comidas: random(1, porciones - 1)

respuesta: comidas
tipo: input
tolerancia_abs: 0

enunciado: "Una pizza se cortó en {porciones} porciones iguales. Si te comiste {comidas} porciones, ¿cuál es el numerador de la fracción de pizza que comiste (sobre {porciones})?"

explicacion: |
  La cantidad de porciones comidas es, directamente, el numerador de la
  fracción sobre el total de porciones.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "verificacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c_correcto: a * k
  error: uno_de([0, 0, 0, 1, -1])
  c_mostrado: c_correcto + error
  d: b * k

respuesta: (a * d == c_mostrado * b)
tipo: vf

enunciado: "¿Es {c_mostrado}/{d} equivalente a {a}/{b}?"

explicacion: |
  Se verifica con el producto cruzado: si no coincide, no son
  equivalentes.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "simplificar"]

variables:
  divisor_comun: random(2, 9)
  num: divisor_comun * random(2, 9)
  den: divisor_comun * random(2, 9)
  simplificador: mcd(num, den)

restricciones:
  - num != den

respuesta: den / simplificador
tipo: input
tolerancia_abs: 0

enunciado: "Al simplificar {num}/{den} al máximo, ¿cuál queda el denominador?"

explicacion: |
  Se divide también el denominador por el mismo MCD que se usó en el
  numerador.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "comparacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: (a * d > b * c)
tipo: mc
opciones_explicitas:
  - verdadero
  - falso

enunciado: "¿Es cierto que {a}/{b} es mayor que {c}/{d}?"

explicacion: |
  Se compara con el producto cruzado.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

variables:
  n: random(2, 20)

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que {n}/{n} representa exactamente 1 entero?"

explicacion: |
  Cuando el numerador y el denominador son iguales, la fracción vale 1: el
  todo entero se dividió en n partes y se tomaron las n.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

variables:
  n: random(2, 20)

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que 0/{n} vale 0?"

explicacion: |
  No tomar ninguna parte (numerador 0) de cualquier cantidad de partes
  vale 0.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una fracción no puede tener 0 como denominador."

explicacion: |
  Dividir por 0 no está definido (ver la teoría de división): el
  denominador siempre tiene que ser distinto de 0.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "avanzado"
  tags: ["fracciones", "comparacion"]

variables:
  b: random(6, 12)
  a: random(1, b - 1)
  c: random(1, b - 1)
  e: random(1, b - 1)

restricciones:
  - a != c
  - a != e
  - c != e

respuesta: max(a, c, e)
tipo: mc
opciones_explicitas:
  - a
  - c
  - e

enunciado: "Entre {a}/{b}, {c}/{b} y {e}/{b} (mismo denominador), ¿cuál numerador corresponde a la fracción mayor?"

explicacion: |
  Con el mismo denominador, la fracción mayor es la que tiene el
  numerador más grande.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "intermedio"
  tags: ["fracciones", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)

tipo: completar
enunciado: "Completá: {a}/{b} = ___/{b * k} (fracciones equivalentes)."
respuestas_validas:
  - a * k

explicacion: |
  El numerador que falta tiene que guardar la misma proporción: se
  multiplica {a} por el mismo {k} que multiplicó al denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "avanzado"
  tags: ["fracciones", "problema"]

variables:
  total: random(10, 40)
  parte_a: random(1, total - 1)

respuesta: total - parte_a
tipo: input
tolerancia_abs: 0

enunciado: "Un grupo de {total} personas se divide en dos: {parte_a} van a un lado. ¿Cuántas personas quedan del otro lado (el numerador de la fracción complementaria, sobre {total})?"

explicacion: |
  Las dos partes complementarias siempre suman el total: si una fracción
  es {parte_a}/{total}, la otra es ({total} - {parte_a})/{total}.
```

```
metadata:
  materia: "matematicas"
  tema: "fracciones"
  nivel: "basico"
  tags: ["fracciones", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una fracción representa una parte de un todo dividido en partes iguales."

explicacion: |
  Es la idea central de toda esta unidad: numerador y denominador,
  equivalencia, comparación — todo se apoya en esta definición.
```

## Sección: mcm (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm", "vocabulario"]

enunciado: "¿Qué es el Mínimo Común Múltiplo (MCM) de dos números?"
tipo: mc
opciones_explicitas:
  - "El menor número (mayor que 0) que es múltiplo de los dos a la vez"
  - "El mayor número que es divisor de los dos a la vez"
  - "El producto de los dos números"
respuesta: "El menor número (mayor que 0) que es múltiplo de los dos a la vez"

explicacion: |
  Se buscan los múltiplos en común de los dos números, y se toma el más
  chico (sin contar el 0).
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: mcm(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {a} y {b}?"

explicacion: |
  Se buscan los múltiplos de {a} y de {b} hasta encontrar el primero que
  coincide en las dos listas.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm"]

variables:
  a: random(10, 40)
  b: random(10, 40)

respuesta: mcm(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {a} y {b}?"

explicacion: |
  Con números más grandes conviene usar el atajo del MCD en vez de listar
  múltiplos.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "mcd"]

variables:
  a: random(4, 40)
  b: random(4, 40)
  divisor_comun: mcd(a, b)

respuesta: (a * b) / divisor_comun
tipo: input
tolerancia_abs: 0

enunciado: "El MCD de {a} y {b} es {divisor_comun}. Usando la fórmula MCM = (a × b) ÷ MCD, ¿cuál es el MCM?"

pasos:
  - "({a} × {b}) ÷ {divisor_comun} = {a * b} ÷ {divisor_comun} = {(a * b) / divisor_comun}"

explicacion: |
  Es el atajo más rápido: multiplicar los dos números y dividir por su
  MCD.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm", "multiplos"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  candidato: a * b

respuesta: verdadero
tipo: vf

enunciado: "¿Es {candidato} un múltiplo común de {a} y {b}?"

explicacion: |
  {candidato} es {a} × {b}, así que es múltiplo de los dos a la vez
  (aunque no sea necesariamente el MCM: podría haber uno más chico).
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm"]

variables:
  a: random(3, 15)
  b: a + 1

respuesta: a * b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {a} y {b} (dos números consecutivos, que no comparten factores)?"

pasos:
  - "Como no comparten ningún factor (MCD = 1), el MCM es directamente el producto: {a} × {b} = {a * b}"

explicacion: |
  Cuando dos números son primos entre sí (su MCD es 1), su MCM es
  directamente el producto de los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm"]

variables:
  n: random(2, 999)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {n} y {n}?"

explicacion: |
  El menor múltiplo en común de un número consigo mismo es el propio
  número.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCM de dos números nunca puede ser menor que el más grande de los dos."

explicacion: |
  Un múltiplo de un número nunca puede ser menor que ese número (salvo el
  0); como el MCM es múltiplo de los dos, no puede ser menor que el más
  grande.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm"]

variables:
  a: random(3, 15)
  b: random(3, 15)
  correcto: mcm(a, b)

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a * b
  - correcto + a

enunciado: "¿Cuál es el MCM de {a} y {b}?"

explicacion: |
  El producto a×b es un múltiplo común, pero no siempre es el MÍNIMO — sólo
  coincide con el MCM cuando los dos números son primos entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "problema"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: mcm(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "Para sumar dos fracciones con denominadores {a} y {b}, conviene usar como común denominador el MCM de los dos. ¿Cuál es ese común denominador?"

explicacion: |
  El MCM de los denominadores es el común denominador más chico posible
  para sumar o restar las fracciones.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "problema"]

variables:
  a: random(4, 20)
  b: random(4, 20)

respuesta: mcm(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "Un colectivo pasa por una parada cada {a} minutos, y otro cada {b} minutos. Si los dos pasaron juntos a las 0, ¿en qué minuto vuelven a pasar juntos por primera vez?"

explicacion: |
  El primer momento en que coinciden de nuevo es el MCM de los dos
  intervalos.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "problema"]

variables:
  a: random(2, 15)
  b: random(2, 15)

respuesta: mcm(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "Una luz titila cada {a} segundos y otra cada {b} segundos. Si las dos titilaron juntas en el segundo 0, ¿en qué segundo van a volver a titilar juntas?"

explicacion: |
  Es el mismo tipo de problema que los colectivos: el primer encuentro es
  el MCM de los dos ritmos.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "avanzado"
  tags: ["mcm"]

variables:
  a: random(2, 10)
  b: random(2, 10)
  c: random(2, 10)

respuesta: mcm(mcm(a, b), c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {a}, {b} y {c}?"

pasos:
  - "Se calcula de a dos: MCM({a}, {b}) = {mcm(a, b)}, y después MCM({mcm(a, b)}, {c}) = {mcm(mcm(a, b), c)}"

explicacion: |
  El MCM de tres números se calcula de a pares: primero entre dos, y
  después ese resultado con el tercero.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "verificacion"]

variables:
  a: random(3, 15)
  b: random(3, 15)
  correcto: mcm(a, b)
  error: uno_de([0, 0, 0, a, -a])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Es correcto decir que el MCM de {a} y {b} es {mostrado}?"

explicacion: |
  Hay que verificar que {mostrado} sea múltiplo de los dos números, y que
  no haya ningún múltiplo común más chico.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm"]

variables:
  primos: [2, 3, 5, 7, 11, 13]
  p1: uno_de(primos)
  p2: uno_de(primos)

restricciones:
  - p1 != p2

respuesta: p1 * p2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {p1} y {p2} (dos números primos distintos)?"

explicacion: |
  Como no comparten ningún factor, el MCM es directamente el producto de
  los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCM de dos números siempre es múltiplo de los dos, además de ser el menor de los múltiplos en común."

explicacion: |
  Es la propia definición: el MCM tiene que ser múltiplo de ambos números
  para contar como múltiplo común.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "multiplos"]

variables:
  a: random(2, 9)
  b: random(2, 9)

tipo: completar
enunciado: "Nombrá un múltiplo común de {a} y {b} (no hace falta que sea el MCM, alcanza con que sea múltiplo de los dos)."
respuestas_validas:
  - a * b
  - mcm(a, b)

explicacion: |
  El producto de los dos números siempre es un múltiplo común válido,
  aunque no sea siempre el más chico.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm"]

variables:
  a: random(2, 30)
  k: random(2, 9)
  b: a * k

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {a} y {b}, sabiendo que {b} es múltiplo de {a}?"

explicacion: |
  Cuando un número es múltiplo del otro, el más grande de los dos ya es
  el MCM: no hace falta calcular nada más.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "multiplos"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  comun: a * b
  no_comun: comun + 1

respuesta: no_comun
tipo: mc
opciones_explicitas:
  - comun
  - mcm(a, b)
  - no_comun

enunciado: "¿Cuál de estos tres números NO es múltiplo común de {a} y {b}?"

explicacion: |
  {no_comun} le sobra 1 respecto de un múltiplo común real: eso rompe la
  divisibilidad exacta con al menos uno de los dos números.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "propiedades"]

variables:
  a: random(3, 20)
  b: random(3, 20)

respuesta: (mcm(a, b) == mcm(b, a))
tipo: vf

enunciado: "¿Es cierto que el MCM de {a} y {b} da lo mismo que el MCM de {b} y {a}?"

explicacion: |
  El orden en que se comparan los dos números no cambia el resultado: el
  MCM es conmutativo (igual que el MCD).
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "avanzado"
  tags: ["mcm", "problema"]

variables:
  a: random(2, 10)
  b: random(2, 10)
  comun: mcm(a, b)

respuesta: comun / a
tipo: input
tolerancia_abs: 0

enunciado: "Para sumar una fracción con denominador {a} con otra de denominador {b}, se usa el común denominador {comun} (el MCM de los dos). ¿Por cuánto hay que multiplicar el numerador de la primera fracción?"

pasos:
  - "{comun} ÷ {a} = {comun / a}: ese es el factor que hay que usar para pasar la primera fracción al nuevo denominador."

explicacion: |
  Al cambiar de denominador, el numerador se multiplica por el mismo
  factor que el denominador (para no cambiar el valor de la fracción).
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "avanzado"
  tags: ["mcm", "factorizacion"]

variables:
  a: uno_de([4, 6, 8, 9])
  b: uno_de([4, 6, 8, 9])
  correcto: mcm(a, b)

restricciones:
  - a != b

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a * b
  - mcd(a, b)

enunciado: "¿Cuál es el MCM de {a} y {b}?"

explicacion: |
  Conviene factorizar los dos números en primos y quedarse con TODOS los
  factores, usando el mayor exponente de cada uno.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "avanzado"
  tags: ["mcm", "mcd"]

variables:
  a: random(4, 40)
  b: random(4, 40)

respuesta: (mcd(a, b) * mcm(a, b) == a * b)
tipo: vf

enunciado: "¿Es cierto que el MCD de {a} y {b}, multiplicado por el MCM de {a} y {b}, da lo mismo que {a} × {b}?"

explicacion: |
  Es la fórmula que conecta MCD y MCM: MCD × MCM siempre da el producto de
  los dos números originales.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCM sirve para saber, entre otras cosas, cuándo dos sucesos que se repiten con ritmos distintos vuelven a coincidir por primera vez."

explicacion: |
  Es la aplicación práctica más común del MCM: encontrar el primer punto
  de encuentro entre dos ciclos distintos.
```

