# Examen jefe — Domina la recta y errores

> Logro #63. Completaste el parcial resolviendo ecuaciones de primer grado, diferenciales, exponenciales y logarítmicas, distinguiendo bien el error sistemático del aleatorio. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **138 preguntas totales** en 5/5 secciones.

---

## Sección: ecuacion-de-la-recta (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "¿Qué es la ordenada al origen de una recta?"
tipo: mc
opciones_explicitas:
  - "El punto donde la recta cruza el eje y"
  - "El punto donde la recta cruza el eje x"
  - "La pendiente de la recta"
respuesta: "El punto donde la recta cruza el eje y"

explicacion: |
  Es el punto (0, b): se obtiene evaluando la ecuación en x = 0.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "¿Qué es la abscisa al origen (o raíz) de una recta?"
tipo: mc
opciones_explicitas:
  - "El punto donde la recta cruza el eje x"
  - "El punto donde la recta cruza el eje y"
  - "El punto más alejado del origen"
respuesta: "El punto donde la recta cruza el eje x"

explicacion: |
  Se obtiene poniendo y = 0 en la ecuación y despejando x.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([2, 3, 4, 5, -2, -3])
  b: uno_de([1, 2, 5, -3, -4, 6])

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿Cuál es su ordenada al origen?"

pasos:
  - "En x = 0: y = {m} × 0 + {b} = {b}"

explicacion: |
  La ordenada al origen es directamente el término independiente b.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([2, 4, 5])
  k: random(-6, 6)
  b: 0 - (m * k)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿Cuál es su abscisa al origen (dónde cruza el eje x)?"

pasos:
  - "0 = {m}x + {b}"
  - "x = -{b} ÷ {m} = {k}"

explicacion: |
  Se pone y = 0 y se despeja x.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([2, 3, 4, -2])
  b: uno_de([1, 3, 5, -2])
  x: random(1, 8)

respuesta: (m * x) + b
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿Cuál es el valor de y cuando x = {x}?"

pasos:
  - "y = {m} × {x} + {b} = {(m * x) + b}"

explicacion: |
  Se reemplaza x por el valor dado y se calcula y.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Si la ordenada al origen de una recta es b = 0, la recta pasa exactamente por el origen (0, 0)."

explicacion: |
  La ecuación queda y = mx, que en x = 0 da y = 0.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Si la pendiente de una recta es m = 0, la recta es horizontal: y = b para cualquier valor de x."

explicacion: |
  Sin inclinación, la recta no sube ni baja.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Una recta horizontal y = b, con b distinto de 0, nunca cruza el eje x."

explicacion: |
  Como y vale siempre b (nunca 0), no hay ningún punto de esa recta
  sobre el eje x.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Una recta vertical (x = k, para cualquier k) no se puede escribir en la forma y = mx + b."

explicacion: |
  Su pendiente es indefinida: a un mismo x le corresponderían infinitos
  valores de y.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "¿Por qué una recta vertical no tiene una pendiente definida?"
tipo: mc
opciones_explicitas:
  - "Porque todos sus puntos comparten el mismo x, y la fórmula de pendiente dividiría por (x₂ − x₁) = 0"
  - "Porque las rectas verticales no existen en geometría"
  - "Porque su pendiente siempre vale exactamente 0"
respuesta: "Porque todos sus puntos comparten el mismo x, y la fórmula de pendiente dividiría por (x₂ − x₁) = 0"

explicacion: |
  Dividir por 0 no está definido — por eso la pendiente de una recta
  vertical no existe como número.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([2, 3, -2])
  b: uno_de([1, 4, -3])
  x: random(1, 6)
  y: (m * x) + b

respuesta: verdadero
tipo: vf

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿El punto ({x}, {y}) está sobre esa recta?"

explicacion: |
  Reemplazando x = {x}: y = {m} × {x} + {b} = {y}, que coincide con la
  ordenada del punto.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([2, 3, -2])
  b: uno_de([1, 4, -3])
  x: random(1, 6)
  y_real: (m * x) + b
  y_falso: y_real + random(1, 4)

respuesta: falso
tipo: vf

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿El punto ({x}, {y_falso}) está sobre esa recta?"

explicacion: |
  Reemplazando x = {x}, la recta da y = {y_real}, que NO coincide con
  {y_falso}: el punto no está sobre la recta.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "ordenar"]

enunciado: "Ordená los pasos para graficar la recta y = mx + b sin tabular muchos puntos."
tipo: ordenar
opciones_explicitas:
  - "Trazar la recta que pasa por esos dos puntos"
  - "Marcar el punto (0, b), la ordenada al origen"
  - "Desde ese punto, usar la pendiente m para subir/bajar y avanzar, marcando un segundo punto"
respuesta_orden:
  - "Marcar el punto (0, b), la ordenada al origen"
  - "Desde ese punto, usar la pendiente m para subir/bajar y avanzar, marcando un segundo punto"
  - "Trazar la recta que pasa por esos dos puntos"

explicacion: |
  Con sólo dos puntos alcanza para trazar toda la recta.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "Si una recta tiene pendiente m = 3/4, ¿cómo se usa ese valor para marcar un segundo punto desde la ordenada al origen?"
tipo: mc
opciones_explicitas:
  - "Subir 3 unidades y avanzar 4 unidades hacia la derecha"
  - "Avanzar 3 unidades y subir 4 unidades"
  - "Subir 4 unidades y avanzar 3 hacia la izquierda"
respuesta: "Subir 3 unidades y avanzar 4 unidades hacia la derecha"

explicacion: |
  La pendiente es "cuánto sube, dividido cuánto avanza": el numerador es
  la subida, el denominador el avance horizontal.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta", "problema"]

variables:
  b: uno_de([1, 2, 3])
  avance: uno_de([2, 3, 4])
  subida: uno_de([1, 2, 3])

respuesta: b + subida
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por (0, {b}) y tiene pendiente {subida}/{avance}. Si desde ese punto se avanza {avance} hacia la derecha, ¿en qué valor de y queda el nuevo punto?"

pasos:
  - "{b} + {subida} = {b + subida}"

explicacion: |
  Avanzar exactamente el denominador de la pendiente hace subir (o
  bajar) exactamente el numerador.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "La ordenada al origen de una recta se obtiene evaluando su ecuación en x = 0."

explicacion: |
  y = m×0 + b = b.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "La abscisa al origen de una recta se obtiene poniendo y = 0 en su ecuación y despejando x."

explicacion: |
  0 = mx + b, así que x = −b/m.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([-2, -3, -5])
  k: random(1, 8)
  b: 0 - (m * k)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿Cuál es su abscisa al origen?"

pasos:
  - "0 = {m}x + {b}"
  - "x = -{b} ÷ ({m}) = {k}"

explicacion: |
  Con pendiente negativa, el cálculo funciona exactamente igual.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "En geometría analítica, ¿qué es la 'raíz' de una recta?"
tipo: mc
opciones_explicitas:
  - "Otro nombre para la abscisa al origen"
  - "Otro nombre para la ordenada al origen"
  - "Otro nombre para la pendiente"
respuesta: "Otro nombre para la abscisa al origen"

explicacion: |
  Es el valor de x donde la recta "vale cero" (cruza el eje x).
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: random(2, 8)
  x: random(1, 10)

respuesta: m * x
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por el origen y tiene pendiente {m} (es decir, y = {m}x). ¿Cuánto vale y cuando x = {x}?"

pasos:
  - "{m} × {x} = {m * x}"

explicacion: |
  Sin ordenada al origen (b = 0), la ecuación se reduce a y = mx.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Toda recta que no sea vertical cruza el eje y en algún punto, así que tiene una ordenada al origen definida."

explicacion: |
  Sólo las rectas verticales (x = k) pueden no cruzar el eje y en ningún
  punto (salvo la propia recta x = 0).
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre la ecuación de una recta horizontal y una vertical?"
tipo: mc
opciones_explicitas:
  - "La horizontal es y = b (pendiente 0); la vertical es x = k (pendiente indefinida)"
  - "Son la misma ecuación, escrita de dos formas distintas"
  - "La horizontal es x = k; la vertical es y = b"
respuesta: "La horizontal es y = b (pendiente 0); la vertical es x = k (pendiente indefinida)"

explicacion: |
  Sólo la horizontal se puede escribir en la forma y = mx + b (con
  m = 0); la vertical no.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta", "problema"]

variables:
  b: uno_de([2, 4, 6])
  m: uno_de([2, 3])
  x2: random(1, 5)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "En un gráfico, una recta pasa por el punto (0, {b}) y por el punto ({x2}, {(m * x2) + b}). ¿Cuál es su ordenada al origen?"

pasos:
  - "El punto (0, {b}) ya está sobre el eje y: la ordenada al origen es {b}"

explicacion: |
  Cuando uno de los puntos marcados ya tiene x = 0, la ordenada al
  origen se lee directamente, sin ningún cálculo extra.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Si b es distinto de 0 en y = mx + b, la recta no pasa por el origen (0, 0)."

explicacion: |
  En x = 0, y valdría b (no 0), así que el origen no está sobre esa
  recta.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación y = mx + b es el mismo objeto que la función lineal de Álgebra, ahora leída como el dibujo de una recta sobre el plano cartesiano."

explicacion: |
  Es la idea central de este módulo: la pendiente que se despeja
  algebraicamente es la misma que se ve como inclinación en el gráfico.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve poder pasar de la ecuación de una recta a su dibujo, y viceversa?"
tipo: mc
opciones_explicitas:
  - "Para resolver problemas geométricos reales: hallar cruces con los ejes, verificar puntos, y comparar rectas entre sí"
  - "Sólo sirve para memorizar más fórmulas"
  - "Sólo aplica a rectas que pasan por el origen"
respuesta: "Para resolver problemas geométricos reales: hallar cruces con los ejes, verificar puntos, y comparar rectas entre sí"

explicacion: |
  Es la base para el módulo siguiente,
  `../rectas-paralelas-y-perpendiculares/`.
```

## Sección: ecuacion-primer-grado (32 preguntas)

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

## Sección: ecuaciones-diferenciales (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "basico"
  tags: ["crecimiento"]

variables:
  y0: random(10, 200)
  a: random(2, 4)
  t: random(1, 5)

respuesta: y0 * a ^ t
tipo: input
tolerancia_abs: 0

enunciado: "y(t) = {y0}×{a}^t (modelo de crecimiento, solución de dy/dt=ky). ¿Cuánto vale y({t})?"

explicacion: |
  {y0}×{a}^{t} = {y0 * a ^ t}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "basico"
  tags: ["crecimiento"]

variables:
  y0: random(50, 500)
  a: 2
  t: random(1, 6)

respuesta: y0 * a ^ t
tipo: input
tolerancia_abs: 0

enunciado: "Una población se duplica cada período: y(t) = {y0}×2^t. ¿Cuántos hay después de {t} períodos?"

explicacion: |
  {y0}×2^{t} = {y0 * a ^ t}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["decaimiento"]

variables:
  base_inv: uno_de([2, 5])
  y0: random(10, 20) * (base_inv ^ 3)
  t: random(1, 3)

respuesta: y0 / (base_inv ^ t)
tipo: input
tolerancia_abs: 0

enunciado: "y(t) = {y0}×(1/{base_inv})^t (modelo de decaimiento). ¿Cuánto vale y({t})?"

pasos:
  - "{y0}×(1/{base_inv})^{t} = {y0}/{base_inv ^ t} = {y0 / (base_inv ^ t)}"

explicacion: |
  Con base entre 0 y 1, la cantidad decrece con el tiempo.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["decaimiento", "problema"]

variables:
  cantidad_inicial: random(4, 20) * 16
  periodos: random(1, 4)

respuesta: cantidad_inicial / (2 ^ periodos)
tipo: input
tolerancia_abs: 0

enunciado: "Una muestra radiactiva de {cantidad_inicial}g se reduce a la mitad cada período (vida media). ¿Cuánto queda después de {periodos} períodos?"

explicacion: |
  Cada período multiplica por 1/2 — después de {periodos} períodos,
  queda dividido por 2^{periodos}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["verdadero_falso"]

variables:
  y0: random(10, 100)
  a: random(2, 5)
  t: random(0, 5)

respuesta: (((y0 * a ^ (t + 1)) / (y0 * a ^ t)) == a)
tipo: vf

enunciado: "y(t) = {y0}×{a}^t. ¿Es siempre igual a {a} la razón y(t+1)/y(t), sin importar el valor de t={t}?"

explicacion: |
  Es justo la propiedad que hace que este modelo sea solución de
  dy/dt=ky: la razón entre valores consecutivos es constante.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  y0: random(10, 100)
  a: random(2, 5)
  t: random(0, 5)
  b_propuesto: uno_de([a, a + 1, a - 1])

respuesta: (((y0 * a ^ (t + 1)) / (y0 * a ^ t)) == b_propuesto)
tipo: vf

enunciado: "y(t) = {y0}×{a}^t. ¿Es y(t+1)/y(t) igual a {b_propuesto}?"

explicacion: |
  La razón real siempre es {a}, la base del modelo — cualquier otro
  número no coincide.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["vida_media"]

variables:
  n: random(1, 5)
  y0: random(10, 30) * (2 ^ n)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Una muestra de {y0}g tiene vida media de 1 día (se reduce a la mitad cada día). ¿Cuántos días tardan en quedar {y0 / (2 ^ n)}g?"

pasos:
  - "{y0}/2^t = {y0 / (2 ^ n)} → 2^t = {2 ^ n} → t = {n}"

explicacion: |
  Se reconoce {y0 / (2 ^ n)} como {y0} dividido por una potencia exacta
  de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["duplicacion"]

variables:
  n: random(1, 5)
  y0: random(10, 30)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {y0} se duplica cada período. ¿Cuántos períodos tardan en llegar a {y0 * (2 ^ n)}?"

pasos:
  - "{y0}×2^t = {y0 * (2 ^ n)} → 2^t = {2 ^ n} → t = {n}"

explicacion: |
  Se reconoce {y0 * (2 ^ n)} como {y0} multiplicado por una potencia
  exacta de 2.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["duplicacion"]

variables:
  n: random(1, 5)
  y0: random(5, 50)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "y(t) = {y0}×10^t. ¿Para qué valor de t es y(t) = {y0 * (10 ^ n)}?"

pasos:
  - "10^t = {10 ^ n} → t = log₁₀({10 ^ n}) = {n}"

explicacion: |
  Se despeja t aplicando logaritmo, igual que en
  `../ecuaciones-exponenciales-logaritmicas/`.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una ecuación diferencial relaciona una función con su derivada, en vez de dar directamente el valor de la función."

explicacion: |
  Es la diferencia clave con una ecuación algebraica común.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La solución de dy/dt = k·y siempre tiene la forma y(t) = y₀·aᵗ, una función exponencial."

explicacion: |
  Es el resultado central de este modelo — cualquier fenómeno con esa
  estructura de crecimiento se describe con una exponencial.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si la tasa de cambio de y es proporcional a y, entonces y crece de forma lineal (sumando siempre lo mismo)."

explicacion: |
  Crece de forma EXPONENCIAL (multiplicando), no lineal — confundir
  estos dos modelos es el error central del tema.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En dy/dt=ky, si k es positivo, y crece con el tiempo."

explicacion: |
  k>0 corresponde a una base a>1 en la solución y=y₀aᵗ.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En dy/dt=ky, si k es negativo, y decrece con el tiempo (acercándose a 0)."

explicacion: |
  k<0 corresponde a una base 0<a<1 en la solución.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un modelo de decaimiento exponencial, y se acerca a 0 pero nunca llega a valer exactamente 0 (ni se vuelve negativa)."

explicacion: |
  Es la misma asíntota horizontal en y=0 ya vista en
  `../familias-exponencial-logaritmica/`.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un decaimiento exponencial, la vida media (tiempo para reducirse a la mitad) es siempre la misma, sin importar desde qué cantidad se empiece a contar."

explicacion: |
  Es una propiedad característica del decaimiento exponencial: tarda lo
  mismo en pasar de 100 a 50 que de 50 a 25.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  capital: random(1000, 5000)
  tasa: 2
  anios: random(1, 5)

respuesta: capital * tasa ^ anios
tipo: input
tolerancia_abs: 0

enunciado: "Un capital de {capital} se duplica cada año (modelo dC/dt=kC). ¿Cuánto hay después de {anios} años?"

explicacion: |
  El interés compuesto es, exactamente, un modelo de crecimiento
  proporcional a lo que ya se tiene.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  y0: random(10, 100)
  a: random(2, 4)
  t: random(1, 4)
  real: y0 * a ^ t
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "y(t) = {y0}×{a}^t. ¿Es correcto que y({t}) sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "basico"
  tags: ["concepto"]

variables:
  y0: random(10, 500)
  a: random(2, 5)

respuesta: y0
tipo: input
tolerancia_abs: 0

enunciado: "y(t) = {y0}×{a}^t. ¿Cuál es la cantidad inicial y₀ (en t=0)?"

explicacion: |
  y(0) = {y0}×{a}^0 = {y0}×1 = {y0} — el coeficiente que multiplica a
  la potencia.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "basico"
  tags: ["concepto"]

variables:
  y0: random(10, 500)
  a: random(2, 5)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "y(t) = {y0}×{a}^t. ¿Cuál es la base a del modelo?"

explicacion: |
  Es el factor por el que se multiplica y en cada período.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  diferencia_inicial: random(20, 30) * 4
  periodos: random(1, 2)

respuesta: diferencia_inicial / (2 ^ periodos)
tipo: input
tolerancia_abs: 0

enunciado: "La diferencia de temperatura entre un objeto y el ambiente empieza en {diferencia_inicial}°C y se reduce a la mitad cada hora (ley de enfriamiento de Newton, otro modelo dy/dt=ky). ¿Cuál es la diferencia después de {periodos} horas?"

explicacion: |
  Mismo modelo matemático que el decaimiento radiactivo, aplicado a
  temperatura en vez de masa.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Crecimiento poblacional, interés compuesto y decaimiento radiactivo son fenómenos distintos, pero todos se modelan con la misma ecuación diferencial dy/dt=ky."

explicacion: |
  Es el valor central de estudiar el modelo en abstracto: una vez
  entendida la estructura, se aplica a cualquier fenómeno con esa misma
  forma de cambio.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Resolver una ecuación diferencial (encontrar la función y) usa integración, mientras que verificar que una función propuesta es solución usa derivación."

explicacion: |
  Cierra el círculo de Análisis: se necesitan las dos operaciones,
  `../derivada/` e `../integral/`, para trabajar con estos modelos.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  y0: random(5, 20)
  n: random(1, 6)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {y0} se duplica cada período: y(t) = {y0}×2^t. ¿Después de cuántos períodos completos llega exactamente a {y0 * (2 ^ n)}?"

explicacion: |
  Se reconoce el factor 2^{n}, contando cuántas duplicaciones hicieron
  falta.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  y0: random(50, 200)
  a1: 2
  a2: 3
  t: random(2, 5)

respuesta: ((y0 * a2 ^ t) > (y0 * a1 ^ t))
tipo: vf

enunciado: "Dos poblaciones iguales parten de {y0}: una con tasa 2 (se duplica) y otra con tasa 3 (se triplica) cada período. ¿Es mayor la de tasa 3 después de {t} períodos?"

explicacion: |
  Una tasa de crecimiento mayor siempre termina superando a una menor,
  a igualdad de punto de partida.
```

```
metadata:
  materia: "matematicas"
  tema: "ecuaciones_diferenciales"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El modelo básico y=y₀aᵗ (con a>1) predice un crecimiento sin límite, aunque en la realidad casi todo crecimiento poblacional termina frenándose por recursos limitados."

explicacion: |
  Es una limitación conocida del modelo simple — modelos más avanzados
  (fuera de este módulo) agregan un límite de capacidad.
```

## Sección: ecuaciones-exponenciales-logaritmicas (28 preguntas)

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

## Sección: error-sistematico-vs-aleatorio (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "basico"
  tags: ["error_sistematico", "vocabulario"]

enunciado: "¿Qué es un error sistemático?"
tipo: mc
opciones_explicitas:
  - "Un error que se repite siempre en la misma dirección, por una causa identificable"
  - "Un error que varía de forma impredecible en cada medición"
  - "Un error que sólo ocurre una vez"
respuesta: "Un error que se repite siempre en la misma dirección, por una causa identificable"

explicacion: |
  Por ejemplo, un instrumento mal calibrado que siempre mide de más (o de
  menos) por la misma cantidad.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "basico"
  tags: ["error_aleatorio", "vocabulario"]

enunciado: "¿Qué es un error aleatorio?"
tipo: mc
opciones_explicitas:
  - "Un error que varía de forma impredecible en cada medición, sin un patrón fijo"
  - "Un error que siempre suma la misma cantidad"
  - "Un error causado únicamente por un instrumento mal calibrado"
respuesta: "Un error que varía de forma impredecible en cada medición, sin un patrón fijo"

explicacion: |
  A veces da de más, a veces de menos, por factores que no se pueden
  controlar del todo.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "basico"
  tags: ["error_sistematico", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El error sistemático se repite siempre en la misma dirección (siempre de más, o siempre de menos)."

explicacion: |
  Es justo lo que lo distingue del error aleatorio.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "basico"
  tags: ["error_aleatorio", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El error aleatorio no tiene una dirección fija: en distintas mediciones puede dar de más o de menos."

explicacion: |
  Por eso se puede reducir promediando varias mediciones.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_sistematico", "correccion"]

enunciado: "¿Cómo se corrige un error sistemático?"
tipo: mc
opciones_explicitas:
  - "Identificando la causa y recalibrando el instrumento o el método"
  - "Repitiendo la medición muchas veces y promediando"
  - "No se puede corregir de ninguna forma"
respuesta: "Identificando la causa y recalibrando el instrumento o el método"

explicacion: |
  A diferencia del error aleatorio, promediar NO ayuda contra el error
  sistemático.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_aleatorio", "correccion"]

enunciado: "¿Cómo se reduce el efecto de un error aleatorio?"
tipo: mc
opciones_explicitas:
  - "Repitiendo la medición varias veces y promediando los resultados"
  - "Usando un instrumento distinto una sola vez"
  - "Sumando siempre la misma corrección"
respuesta: "Repitiendo la medición varias veces y promediando los resultados"

explicacion: |
  Al promediar, los errores que dan de más tienden a cancelarse con los
  que dan de menos.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "avanzado"
  tags: ["error_sistematico", "correccion"]

respuesta: verdadero
tipo: vf

enunciado: "Si una balanza mal calibrada siempre pesa 2 g de más, promediar muchas mediciones hechas con ESA balanza NO va a corregir el error."

explicacion: |
  Todas las mediciones están corridas en la misma dirección, así que el
  promedio también queda corrido esos mismos 2 g.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_sistematico", "problema"]

enunciado: "Una balanza está mal calibrada y siempre pesa 2 gramos de más, sin importar qué se pese. ¿Qué tipo de error es ese?"
tipo: mc
opciones_explicitas:
  - "Error sistemático"
  - "Error aleatorio"
respuesta: "Error sistemático"

explicacion: |
  Se repite siempre en la misma dirección y magnitud: es la firma del
  error sistemático.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_aleatorio", "problema"]

enunciado: "Al cronometrar una carrera a mano, cada persona que toma el tiempo aprieta el botón con una fracción de segundo de diferencia, a veces antes y a veces después del momento exacto. ¿Qué tipo de error es ese?"
tipo: mc
opciones_explicitas:
  - "Error aleatorio"
  - "Error sistemático"
respuesta: "Error aleatorio"

explicacion: |
  No tiene una dirección fija: varía impredeciblemente de una persona (y
  de una vez) a otra.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["exactitud", "vocabulario"]

enunciado: "¿Qué es la exactitud de una medición?"
tipo: mc
opciones_explicitas:
  - "Qué tan cerca está del valor real"
  - "Qué tan cerca están varias mediciones entre sí"
  - "Cuántas cifras decimales tiene"
respuesta: "Qué tan cerca está del valor real"

explicacion: |
  Depende sobre todo del error sistemático.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["precision", "vocabulario"]

enunciado: "¿Qué es la precisión de un conjunto de mediciones?"
tipo: mc
opciones_explicitas:
  - "Qué tan cerca están las mediciones entre sí, aunque no necesariamente del valor real"
  - "Qué tan cerca está del valor real"
  - "La cantidad de mediciones que se hicieron"
respuesta: "Qué tan cerca están las mediciones entre sí, aunque no necesariamente del valor real"

explicacion: |
  Depende sobre todo del error aleatorio.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "avanzado"
  tags: ["exactitud", "precision", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Es posible que varias mediciones estén muy cerca entre sí (precisas) pero todas alejadas del valor real (poco exactas), si hay un error sistemático."

explicacion: |
  Como tiros al blanco muy agrupados, pero lejos del centro: precisos,
  no exactos.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "avanzado"
  tags: ["exactitud", "precision", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Es posible que varias mediciones estén muy dispersas entre sí (poco precisas), pero que su promedio dé cerca del valor real (exacto)."

explicacion: |
  Como tiros dispersos por todo el blanco, pero centrados en promedio:
  exactos en promedio, no precisos individualmente.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_aleatorio", "problema"]

variables:
  base: random(20, 100)
  m1: base + random(-2, 2)
  m2: base + random(-2, 2)
  m3: base + random(-2, 2)
  m4: base + random(-2, 2)
  m5: base + random(-2, 2)

respuesta: redondear(promedio([m1, m2, m3, m4, m5]), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Se midió el mismo objeto 5 veces, con pequeñas variaciones aleatorias: {m1} cm, {m2} cm, {m3} cm, {m4} cm y {m5} cm. ¿Cuál es el promedio de esas mediciones? Redondeá a 2 decimales."

pasos:
  - "({m1} + {m2} + {m3} + {m4} + {m5}) ÷ 5 = {redondear(promedio([m1, m2, m3, m4, m5]), 2)} cm"

explicacion: |
  Promediar mediciones repetidas es la forma estándar de reducir el
  efecto del error aleatorio.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_sistematico", "problema"]

variables:
  offset: random(1, 5)
  medido: random(50, 200)

respuesta: medido - offset
tipo: input
tolerancia_abs: 0.01

enunciado: "Una balanza está descalibrada y siempre pesa {offset} g de más. Si pesa un objeto y marca {medido} g, ¿cuál es el peso corregido (el peso real estimado)?"

pasos:
  - "{medido} − {offset} = {medido - offset} g"

explicacion: |
  Conociendo la magnitud del error sistemático, se le resta a cada
  medición para corregirla.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "avanzado"
  tags: ["error_sistematico", "exactitud"]

respuesta: verdadero
tipo: vf

enunciado: "El error sistemático afecta principalmente a la exactitud (qué tan cerca del valor real), no tanto a la precisión (qué tan agrupadas están las mediciones entre sí)."

explicacion: |
  Un instrumento con error sistemático puede dar mediciones MUY parecidas
  entre sí (precisas) pero todas corridas del valor real (no exactas).
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "avanzado"
  tags: ["error_aleatorio", "precision"]

respuesta: verdadero
tipo: vf

enunciado: "El error aleatorio afecta principalmente a la precisión (qué tan agrupadas están las mediciones), no tanto a la exactitud del promedio."

explicacion: |
  Aunque las mediciones individuales estén dispersas, su promedio puede
  seguir siendo exacto (cercano al valor real).
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_sistematico", "problema"]

enunciado: "Un termómetro está mal calibrado y siempre marca 1,5 °C más de lo real, en cualquier temperatura que mida. ¿Qué tipo de error es ese?"
tipo: mc
opciones_explicitas:
  - "Error sistemático"
  - "Error aleatorio"
respuesta: "Error sistemático"

explicacion: |
  Dirección y magnitud constantes: sistemático.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_aleatorio", "problema"]

enunciado: "Al leer una regla, distintas personas ubican el ojo en un ángulo levemente distinto cada vez, y a veces leen un poquito de más y a veces de menos. ¿Qué tipo de error es ese?"
tipo: mc
opciones_explicitas:
  - "Error aleatorio"
  - "Error sistemático"
respuesta: "Error aleatorio"

explicacion: |
  No tiene una dirección fija: varía impredeciblemente entre lecturas.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "avanzado"
  tags: ["error_sistematico", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Hacer muchísimas mediciones (miles) con un instrumento mal calibrado eventualmente hace que el promedio se acerque al valor real."

explicacion: |
  Por más mediciones que se hagan, si TODAS están sesgadas en la misma
  dirección, el promedio queda igual de sesgado — la cantidad de
  mediciones no cambia eso.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "basico"
  tags: ["error_aleatorio", "completar"]

tipo: completar
enunciado: "Completá: repetir una medición varias veces y ___ los resultados reduce el efecto del error aleatorio."
respuestas_validas:
  - "promediar"

explicacion: |
  Los errores que dan de más y de menos tienden a cancelarse al
  promediar.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "basico"
  tags: ["error_sistematico", "completar"]

tipo: completar
enunciado: "Completá: para corregir un error sistemático, hay que identificar su causa y ___ el instrumento o el método."
respuestas_validas:
  - "recalibrar"

explicacion: |
  No alcanza con promediar; hay que arreglar la causa del sesgo.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "avanzado"
  tags: ["error_sistematico", "orden"]

tipo: ordenar
enunciado: "Ordená los pasos para detectar y corregir un error sistemático."
opciones_explicitas:
  - "Recalibrar el instrumento o corregir el método"
  - "Comparar los resultados con un valor de referencia confiable"
  - "Notar que las mediciones se desvían siempre en la misma dirección"
  - "Verificar que las mediciones posteriores ya no tengan ese sesgo"
respuesta_orden:
  - "Notar que las mediciones se desvían siempre en la misma dirección"
  - "Comparar los resultados con un valor de referencia confiable"
  - "Recalibrar el instrumento o corregir el método"
  - "Verificar que las mediciones posteriores ya no tengan ese sesgo"

explicacion: |
  Primero se detecta el patrón, después se confirma contra una
  referencia, se corrige la causa, y se verifica que la corrección haya
  funcionado.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_sistematico", "error_aleatorio", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un mismo experimento puede tener error sistemático Y error aleatorio a la vez, y hace falta tratar cada uno con su propia estrategia."

explicacion: |
  Por ejemplo: un instrumento mal calibrado (sistemático) leído por
  varias personas distintas (aleatorio en la lectura).
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "intermedio"
  tags: ["error_sistematico", "error_aleatorio", "problema"]

enunciado: "Si sospechás que hay un error ALEATORIO (no sistemático) en tus mediciones, ¿qué conviene hacer?"
tipo: mc
opciones_explicitas:
  - "Repetir la medición varias veces y promediar"
  - "Buscar qué parte del instrumento está mal calibrada"
  - "Descartar todas las mediciones sin analizarlas"
respuesta: "Repetir la medición varias veces y promediar"

explicacion: |
  Es la estrategia correcta específicamente contra el error aleatorio.
```

```
metadata:
  materia: "matematicas"
  tema: "error_sistematico_vs_aleatorio"
  nivel: "basico"
  tags: ["error_sistematico", "error_aleatorio", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Identificar si un error es sistemático o aleatorio es clave, porque cada uno se soluciona con una estrategia distinta: recalibrar en un caso, promediar en el otro."

explicacion: |
  Es la idea central del módulo: no hay una única receta contra el
  error, hay que diagnosticar primero de qué tipo es.
```
