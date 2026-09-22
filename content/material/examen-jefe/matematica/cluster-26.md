# Examen jefe — [PENDIENTE #626]

> Logro #626. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **135 preguntas totales** en 5/5 secciones.

---

## Sección: proporcion (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion", "vocabulario"]

enunciado: "¿Qué es una proporción?"
tipo: mc
opciones_explicitas:
  - "La igualdad entre dos razones"
  - "La suma de dos razones"
  - "Cualquier fracción"
respuesta: "La igualdad entre dos razones"

explicacion: |
  Una proporción dice que dos razones representan la misma relación:
  a/b = c/d.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c: a * k
  d: b * k

respuesta: (a * d == b * c)
tipo: vf

enunciado: "¿Es {a}/{b} = {c}/{d} una proporción válida?"

pasos:
  - "Producto de extremos: {a} × {d} = {a * d}. Producto de medios: {b} × {c} = {b * c}."

explicacion: |
  Es proporción si el producto de los extremos (a×d) es igual al producto
  de los medios (b×c).
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: falso
tipo: vf

enunciado: "¿Es {a}/{b} = {c}/{d} una proporción válida?"

explicacion: |
  El producto de extremos no coincide con el de medios: no es una
  proporción.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  c: random(2, 9)
  x: (b * c) / a

restricciones:
  - (b * c) - floor((b * c) / a) * a == 0

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "En la proporción {a}/{b} = {c}/x, ¿cuánto vale x?"

pasos:
  - "{a} × x = {b} × {c} → x = ({b} × {c}) ÷ {a} = {b * c} ÷ {a} = {x}"

explicacion: |
  Se aplica la propiedad fundamental y se despeja x.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  a: random(2, 9)
  c: random(2, 9)
  d: random(2, 9)
  x: (a * d) / c

restricciones:
  - (a * d) - floor((a * d) / c) * c == 0

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "En la proporción {a}/x = {c}/{d}, ¿cuánto vale x?"

pasos:
  - "{a} × {d} = x × {c} → x = ({a} × {d}) ÷ {c} = {a * d} ÷ {c} = {x}"

explicacion: |
  Se despeja x aplicando la propiedad fundamental de la proporción.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  b: random(2, 9)
  c: random(2, 9)
  d: random(2, 9)
  x: (b * c) / d

restricciones:
  - (b * c) - floor((b * c) / d) * d == 0

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "En la proporción x/{b} = {c}/{d}, ¿cuánto vale x?"

pasos:
  - "x × {d} = {b} × {c} → x = ({b} × {c}) ÷ {d} = {b * c} ÷ {d} = {x}"

explicacion: |
  Igual que antes, se aplica el producto de extremos igual al producto de
  medios.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  d: random(2, 9)
  x: (a * d) / b

restricciones:
  - (a * d) - floor((a * d) / b) * b == 0

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "En la proporción {a}/{b} = x/{d}, ¿cuánto vale x?"

pasos:
  - "{a} × {d} = {b} × x → x = ({a} × {d}) ÷ {b} = {a * d} ÷ {b} = {x}"

explicacion: |
  Se despeja x de la misma manera, cambiando en qué lugar de la
  proporción está.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  a: random(2, 8)
  b: random(2, 8)
  c: random(2, 8)
  correcto: (b * c) / a

restricciones:
  - (b * c) - floor((b * c) / a) * a == 0

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a * b * c
  - correcto + 1

enunciado: "En la proporción {a}/{b} = {c}/x, ¿cuánto vale x?"

explicacion: |
  Las otras opciones no cumplen la propiedad fundamental (producto de
  extremos = producto de medios).
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "problema"]

variables:
  personas_original: random(2, 6)
  harina_original: random(1, 5)
  personas_nueva: personas_original * random(2, 4)

respuesta: harina_original * (personas_nueva / personas_original)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una receta para {personas_original} personas usa {harina_original} tazas de harina. Manteniendo la misma proporción, ¿cuántas tazas hacen falta para {personas_nueva} personas?"

pasos:
  - "{harina_original}/{personas_original} = x/{personas_nueva} → x = ({harina_original} × {personas_nueva}) ÷ {personas_original}"

explicacion: |
  Escalar una receta manteniendo el sabor es armar una proporción entre
  cantidad de personas e ingrediente.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "avanzado"
  tags: ["proporcion", "problema"]

variables:
  cm_base: random(1, 5)
  km_base: cm_base * random(10, 50)
  cm_nueva: cm_base * random(2, 4)

respuesta: km_base * (cm_nueva / cm_base)
tipo: input
tolerancia_abs: 0.01

enunciado: "En un mapa, {cm_base} cm representan {km_base} km reales. Si dos ciudades están a {cm_nueva} cm en el mapa, ¿cuántos km reales las separan?"

pasos:
  - "{cm_base}/{km_base} = {cm_nueva}/x → x = ({km_base} × {cm_nueva}) ÷ {cm_base}"

explicacion: |
  La escala del mapa es una razón constante: se arma una proporción para
  encontrar la distancia real.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "verificacion"]

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

enunciado: "¿Es {a}/{b} = {c_mostrado}/{d} una proporción válida?"

explicacion: |
  Se aplica la propiedad fundamental para verificar.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)

tipo: completar
enunciado: "Completá: {a}/{b} = ___/{b * k} (que sea una proporción válida)."
respuestas_validas:
  - a * k

explicacion: |
  El término que falta tiene que mantener la misma relación: {a}
  multiplicado por el mismo {k} que multiplicó al denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion", "vocabulario"]

enunciado: "¿Cómo se llama la propiedad que dice que, en una proporción, a × d = b × c?"
tipo: mc
opciones_explicitas:
  - "Producto de extremos igual a producto de medios"
  - "Regla de tres"
  - "Teorema de Pitágoras"
respuesta: "Producto de extremos igual a producto de medios"

explicacion: |
  a y d son los extremos (primero y último); b y c son los medios (los
  del medio).
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion", "vocabulario"]

enunciado: "En la proporción a/b = c/d, ¿cuáles son los medios?"
tipo: mc
opciones_explicitas:
  - "b y c"
  - "a y d"
  - "a y b"
respuesta: "b y c"

explicacion: |
  Los extremos son el primero (a) y el último (d); los medios son los dos
  del centro (b y c).
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "problema"]

variables:
  km_base: random(20, 100)
  horas_base: random(1, 4)
  horas_nueva: horas_base * random(2, 4)

respuesta: km_base * (horas_nueva / horas_base)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un auto recorre {km_base} km en {horas_base} horas, a velocidad constante. ¿Cuántos km recorre en {horas_nueva} horas?"

explicacion: |
  A velocidad constante, distancia y tiempo mantienen una proporción.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c_valida: a * k
  d: b * k
  c_invalida: c_valida + 1

respuesta: c_valida
tipo: mc
opciones_explicitas:
  - c_valida
  - c_invalida

enunciado: "¿Cuál de estos dos valores hace que {a}/{b} = ___/{d} sea una proporción válida?"

explicacion: |
  Sólo {c_valida} cumple que {a} × {d} = {b} × {c_valida}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion"]

variables:
  n: random(1, 999)

respuesta: verdadero
tipo: vf

enunciado: "¿Es {n}/{n} = {n}/{n} una proporción válida?"

explicacion: |
  Cualquier razón es igual a sí misma: siempre forma una proporción
  consigo misma.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las proporciones son la herramienta detrás de la regla de tres, el siguiente tema del mapa."

explicacion: |
  Resolver una regla de tres es, exactamente, hallar el término
  desconocido de una proporción.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "avanzado"
  tags: ["proporcion", "problema"]

variables:
  peso_base: random(10, 30)
  dosis_base: random(5, 20)
  peso_nuevo: peso_base * random(2, 3)

respuesta: dosis_base * (peso_nuevo / peso_base)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un paciente de {peso_base} kg se indican {dosis_base} mg de un medicamento (proporcional al peso). ¿Cuántos mg corresponden a un paciente de {peso_nuevo} kg?"

explicacion: |
  Cuando una dosis es proporcional al peso, se arma una proporción entre
  peso y cantidad de medicamento.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "avanzado"
  tags: ["proporcion"]

variables:
  a: random(10, 50)
  b: random(10, 50)
  k: random(2, 5)
  c: a * k
  d: b * k

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a}/{b} = {c}/{d} una proporción válida?"

explicacion: |
  Con números más grandes, el procedimiento no cambia: se verifica el
  producto de extremos contra el de medios.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "avanzado"
  tags: ["proporcion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "No todas las relaciones entre dos cantidades son proporciones directas: a veces, cuando una aumenta, la otra disminuye (proporción inversa)."

explicacion: |
  Este tema cubrió la proporción directa; la inversa (y la regla de tres
  inversa) es parte del próximo tema del mapa.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una proporción es la igualdad entre dos razones, y se puede verificar comparando el producto de los extremos con el producto de los medios."

explicacion: |
  Es la idea central de todo el tema: a/b = c/d es proporción si
  a × d = b × c.
```

## Sección: derivada (30 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["regla_potencia"]

variables:
  n: random(2, 6)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x^{n}. ¿Cuál es el coeficiente de f'(x)?"

explicacion: |
  La derivada de xⁿ es n·x^(n−1) — el coeficiente es directamente n.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["regla_potencia"]

variables:
  n: random(2, 8)

respuesta: n - 1
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x^{n}. ¿Cuál es el exponente de f'(x)?"

explicacion: |
  Se le resta 1 al exponente original.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["regla_potencia"]

variables:
  k: random(2, 10)
  n: random(2, 6)

respuesta: k * n
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {k}x^{n}. ¿Cuál es el coeficiente de f'(x)?"

explicacion: |
  El coeficiente {k} se multiplica por el exponente {n}: {k}×{n} = {k * n}.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["constante"]

variables:
  c: random(-30, 30)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {c} (una función constante). ¿Cuánto vale f'(x)?"

explicacion: |
  Una constante no cambia, así que su derivada es siempre 0.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["regla_potencia"]

variables:
  m: random(1, 20)

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x. ¿Cuánto vale f'(x)?"

explicacion: |
  La derivada de mx es simplemente m (la pendiente ya es constante).
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["polinomio"]

variables:
  a: random(1, 8)
  b: random(1, 10)
  c: random(-15, 15)
  punto: random(-8, 8)

respuesta: 2 * a * punto + b
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Cuánto vale f'({punto})?"

pasos:
  - "f'(x) = {2 * a}x + {b}"
  - "f'({punto}) = {2 * a}×{punto} + {b} = {2 * a * punto + b}"

explicacion: |
  Se deriva término a término y después se evalúa en {punto}.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["polinomio"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  c: random(-10, 10)
  d: random(-10, 10)
  punto: random(-5, 5)

respuesta: 3 * a * punto ^ 2 + 2 * b * punto + c
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x³ + {b}x² + {c}x + {d}. ¿Cuánto vale f'({punto})?"

pasos:
  - "f'(x) = {3 * a}x² + {2 * b}x + {c}"

explicacion: |
  Cada término se deriva con la regla de la potencia, por separado.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["suma", "verdadero_falso"]

variables:
  a: random(1, 10)
  b: random(1, 10)
  c: random(-20, 20)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿La derivada de f NO tiene término independiente (constante)?"

explicacion: |
  El término {c} desaparece al derivar (su derivada es 0), así que
  f'(x) no tiene término constante propio, salvo que quede como
  resultado de derivar el término lineal.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["interpretacion_geometrica"]

variables:
  a: random(1, 6)
  punto: random(-6, 6)

respuesta: 2 * a * punto
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x². ¿Cuál es la pendiente de la recta tangente al gráfico de f en x={punto}?"

explicacion: |
  La pendiente de la tangente en un punto es, exactamente, la derivada
  evaluada ahí: f'({punto}) = {2 * a}×{punto} = {2 * a * punto}.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["aplicacion", "fisica"]

variables:
  a: random(1, 10)
  t: random(1, 10)

respuesta: 2 * a * t
tipo: input
tolerancia_abs: 0

enunciado: "La posición de un objeto es s(t) = {a}t² (metros). ¿Cuál es su velocidad instantánea en t={t} segundos?"

pasos:
  - "s'(t) = {2 * a}t → s'({t}) = {2 * a}×{t} = {2 * a * t}"

explicacion: |
  La velocidad instantánea es la derivada de la posición respecto del
  tiempo — el cruce clásico entre Análisis y Física.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La derivada de f en un punto mide la tasa de cambio instantánea de f ahí."

explicacion: |
  Es la definición central de la derivada.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "f'(a) es exactamente la pendiente de la recta tangente al gráfico de f en el punto (a, f(a))."

explicacion: |
  Es la interpretación geométrica de la derivada.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "f(a) y f'(a) son siempre el mismo número, para cualquier función f."

explicacion: |
  Son cosas distintas: f(a) es el VALOR de la función en a; f'(a) es la
  PENDIENTE (tasa de cambio) en a — en general, números distintos.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La derivada de cualquier función constante es 0."

explicacion: |
  Una constante nunca cambia, así que su tasa de cambio es siempre 0.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["error_comun", "opcion_multiple"]

variables:
  n: random(3, 8)

respuesta: n - 1
tipo: mc
opciones_explicitas:
  - n - 1
  - n
  - n + 1

enunciado: "f(x) = x^{n}. ¿Cuál es el exponente correcto de f'(x)?"

explicacion: |
  Es n−1, no n (dejar el mismo exponente) ni n+1 — hay que restar 1,
  siempre.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["polinomio", "signos"]

variables:
  a: random(2, 8)
  b: random(2, 8)
  punto: random(-8, 8)

respuesta: 2 * a * punto - b
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² − {b}x. ¿Cuánto vale f'({punto})?"

pasos:
  - "f'(x) = {2 * a}x − {b}"

explicacion: |
  El signo del término se mantiene al derivar cada uno por separado.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(1, 8)
  xv: random(-10, 10)
  b: -2 * a * xv

respuesta: xv
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x. ¿En qué valor de x se anula f'(x) (o sea, dónde está el vértice de la parábola)?"

pasos:
  - "f'(x) = {2 * a}x + {b}"
  - "{2 * a}x + {b} = 0 → x = −{b}/{2 * a} = {xv}"

explicacion: |
  Es la misma fórmula del vértice de `../funcion-cuadratica-parabola/`,
  vista ahora como consecuencia de que la derivada se anula ahí — la
  base de `../optimizacion/`.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 8)
  b: random(1, 10)
  punto: random(-8, 8)
  real: 2 * a * punto + b
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "f(x) = {a}x² + {b}x. ¿Es correcto que f'({punto}) sea {propuesto}?"

explicacion: |
  El valor correcto es f'({punto}) = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La derivada de una función lineal f(x)=mx+b es siempre la misma constante m, sin importar en qué punto se evalúe."

explicacion: |
  Tiene sentido: la pendiente de una recta es la misma en todos sus
  puntos.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["interpretacion_geometrica", "verdadero_falso"]

variables:
  a: random(1, 8)
  xv: random(-10, 10)
  b: -2 * a * xv

respuesta: ((2 * a * xv + b) == 0)
tipo: vf

enunciado: "f(x) = {a}x² + {b}x. ¿Es 0 la pendiente de la recta tangente en x={xv} (el vértice)?"

explicacion: |
  En el vértice de una parábola, la recta tangente es horizontal —
  pendiente 0, exactamente donde f' se anula.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["polinomio"]

variables:
  a: random(1, 4)
  b: random(1, 6)
  c: random(1, 8)
  d: random(-10, 10)
  punto: random(1, 5)

respuesta: 3 * a * punto ^ 2 + 2 * b * punto + c
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x³ + {b}x² + {c}x + {d}. ¿Cuánto vale f'({punto})?"

explicacion: |
  f'(x) = {3 * a}x² + {2 * b}x + {c}, evaluado en x={punto}.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Se puede derivar la derivada de una función, obteniendo la 'derivada segunda' — por ejemplo, la derivada de la velocidad es la aceleración."

explicacion: |
  Derivar dos veces mide "cómo cambia la tasa de cambio" — en física, la
  aceleración es la derivada segunda de la posición.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(1, 10)

respuesta: 2 * a
tipo: input
tolerancia_abs: 0

enunciado: "s(t) = {a}t² (posición). La velocidad es s'(t) = {2 * a}t. ¿Cuál es la aceleración (la derivada de la velocidad)?"

explicacion: |
  Derivar {2 * a}t (una función lineal en t) da la constante {2 * a} —
  la aceleración es constante en este movimiento.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "basico"
  tags: ["concepto"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x. ¿Cuánto vale f'(x)?"

explicacion: |
  x es x¹: derivando, 1×x⁰ = 1×1 = 1.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(1, 5)
  b: random(10, 50)
  cantidad: random(1, 20)

respuesta: 2 * a * cantidad + b
tipo: input
tolerancia_abs: 0

enunciado: "El costo de producir q unidades es C(q) = {a}q² + {b}q. ¿Cuál es el costo marginal (la derivada de C) en q={cantidad}?"

explicacion: |
  El costo marginal es, literalmente, la derivada del costo total —
  cuánto cuesta producir "una unidad más" en ese punto.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["polinomio", "signos"]

variables:
  a: random(2, 8)
  punto: random(-6, 6)

respuesta: -2 * a * punto
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = −{a}x². ¿Cuánto vale f'({punto})?"

pasos:
  - "f'(x) = −{2 * a}x"

explicacion: |
  El signo negativo se conserva al derivar, igual que cualquier otro
  coeficiente.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si f'(a) es positiva, la función es creciente cerca de x=a; si f'(a) es negativa, es decreciente ahí."

explicacion: |
  El signo de la derivada indica la dirección del cambio, y su valor
  absoluto, qué tan rápido cambia.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  k: random(2, 10)
  n: random(2, 6)
  real: k * n
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "f(x) = {k}x^{n}. ¿Es correcto que el coeficiente de f'(x) sea {propuesto}?"

explicacion: |
  El coeficiente correcto es {k}×{n} = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La derivada de un producto de dos funciones es simplemente el producto de sus derivadas."

explicacion: |
  No es tan simple — la regla del producto real es más elaborada
  (f·g)' = f'g + fg'. Sólo la SUMA se deriva término a término de forma
  directa.
```

```
metadata:
  materia: "matematicas"
  tema: "derivada"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(1, 6)
  x_sol: random(1, 10)
  pendiente_deseada: 2 * a * x_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x². ¿En qué valor positivo de x la pendiente de la tangente es {pendiente_deseada}?"

pasos:
  - "f'(x) = {2 * a}x = {pendiente_deseada} → x = {pendiente_deseada}/{2 * a}"

explicacion: |
  Se plantea f'(x) = valor deseado, y se despeja x — la misma ecuación
  de primer grado de siempre.
```

## Sección: rectas-paralelas-y-perpendiculares (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "basico"
  tags: ["paralelas", "vocabulario"]

enunciado: "¿Cuándo dos rectas son paralelas?"
tipo: mc
opciones_explicitas:
  - "Cuando tienen exactamente la misma pendiente"
  - "Cuando sus pendientes multiplicadas dan -1"
  - "Cuando tienen la misma ordenada al origen"
respuesta: "Cuando tienen exactamente la misma pendiente"

explicacion: |
  m₁ = m₂ es el criterio ya visto en `../funcion-lineal-pendiente/`.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "basico"
  tags: ["perpendiculares", "vocabulario"]

enunciado: "¿Cuándo dos rectas son perpendiculares?"
tipo: mc
opciones_explicitas:
  - "Cuando el producto de sus pendientes es -1"
  - "Cuando tienen exactamente la misma pendiente"
  - "Cuando ambas pasan por el origen"
respuesta: "Cuando el producto de sus pendientes es -1"

explicacion: |
  m₁ × m₂ = −1: cada pendiente es la recíproca y opuesta de la otra.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["perpendiculares", "problema"]

variables:
  m: uno_de([2, 3, 4, 5])

respuesta: -1 / m
tipo: input
tolerancia_abs: 0.01

enunciado: "Una recta tiene pendiente {m}. ¿Cuál es la pendiente de cualquier recta perpendicular a ella?"

pasos:
  - "-1 ÷ {m} = {-1 / m}"

explicacion: |
  Se invierte la pendiente y se cambia el signo.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["perpendiculares", "problema"]

variables:
  a: uno_de([2, 3, 4])
  b: uno_de([5, 7])

respuesta: 0 - (b / a)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una recta tiene pendiente {a}/{b}. ¿Cuál es la pendiente de cualquier recta perpendicular a ella?"

pasos:
  - "Se invierte la fracción y se cambia el signo: -{b}/{a} = {0 - (b / a)}"

explicacion: |
  ({a}/{b}) × (-{b}/{a}) = -1, verificando el criterio de
  perpendicularidad.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["paralelas", "problema"]

variables:
  m: uno_de([2, 3, -2])
  x0: random(1, 5)
  y0: random(1, 20)

respuesta: y0 - (m * x0)
tipo: input
tolerancia_abs: 0

enunciado: "Se busca la recta paralela a y = {m}x + 7, que además pasa por el punto ({x0}, {y0}). ¿Cuál es la ordenada al origen de esa nueva recta?"

pasos:
  - "Misma pendiente: {m}"
  - "{y0} = {m} × {x0} + b, entonces b = {y0} − {m}×{x0} = {y0 - (m * x0)}"

explicacion: |
  Se usa la misma pendiente de la recta original, y se despeja b con el
  punto dado.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["perpendiculares", "problema"]

variables:
  m: uno_de([2, 4, 5])
  m_perp: -1 / m
  x0: uno_de([2, 4, 6, 8])
  y0: random(1, 10)

respuesta: redondear(y0 - (m_perp * x0), 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Se busca la recta perpendicular a y = {m}x + 3, que además pasa por el punto ({x0}, {y0}). Su pendiente es {m_perp}. ¿Cuál es la ordenada al origen de esa nueva recta?"

pasos:
  - "{y0} = {m_perp} × {x0} + b, entonces b = {y0} − ({m_perp}×{x0}) = {redondear(y0 - (m_perp * x0), 2)}"

explicacion: |
  Se usa la pendiente perpendicular ya calculada, y se despeja b con el
  punto dado.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas"]

respuesta: verdadero
tipo: vf

enunciado: "Dos rectas con la misma pendiente Y la misma ordenada al origen son, en realidad, la misma recta (coincidentes), no dos rectas paralelas distintas."

explicacion: |
  Ser paralelas exige además que b₁ sea distinto de b₂.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas", "vocabulario"]

enunciado: "¿Qué condición hace que dos rectas con la misma pendiente sean coincidentes (la misma recta) en vez de paralelas distintas?"
tipo: mc
opciones_explicitas:
  - "Que además tengan la misma ordenada al origen"
  - "Que además tengan pendientes recíprocas"
  - "No existe tal condición: siempre son paralelas distintas"
respuesta: "Que además tengan la misma ordenada al origen"

explicacion: |
  Mismo m y mismo b: es literalmente la misma ecuación escrita dos
  veces.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas", "problema"]

variables:
  m: uno_de([2, 3, 4, 5])
  b1: uno_de([1, 2, 3])
  b2: b1 + random(1, 5)

respuesta: verdadero
tipo: vf

enunciado: "¿Son paralelas las rectas y = {m}x + {b1} e y = {m}x + {b2}?"

explicacion: |
  Tienen la misma pendiente ({m}) y distinta ordenada al origen: son
  paralelas, sin llegar a tocarse nunca.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["perpendiculares", "problema"]

variables:
  m1: uno_de([2, 3, 4])
  m2: 0 - (1 / m1)

respuesta: verdadero
tipo: vf

enunciado: "¿Son perpendiculares las rectas con pendiente {m1} y con pendiente {m2}?"

explicacion: |
  {m1} × ({m2}) = -1: cumplen el criterio de perpendicularidad.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["paralelas", "perpendiculares", "vocabulario"]

enunciado: "¿Qué hay que verificar, usando pendientes, para confirmar que un cuadrilátero dado por sus 4 vértices es un rectángulo?"
tipo: mc
opciones_explicitas:
  - "Que los lados opuestos sean paralelos entre sí, y los lados consecutivos sean perpendiculares"
  - "Que las cuatro pendientes sean exactamente iguales"
  - "Que ningún lado tenga pendiente 0"
respuesta: "Que los lados opuestos sean paralelos entre sí, y los lados consecutivos sean perpendiculares"

explicacion: |
  Sin medir ningún ángulo con transportador: sólo comparando pendientes.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["paralelas", "problema"]

variables:
  m: uno_de([2, 3, -2])

respuesta: verdadero
tipo: vf

enunciado: "Un cuadrilátero tiene un lado con pendiente {m}, y el lado opuesto también tiene pendiente {m}. ¿Es compatible eso con que el cuadrilátero sea un rectángulo (en lo que respecta a ese par de lados)?"

explicacion: |
  Los lados opuestos de un rectángulo tienen que ser paralelos: misma
  pendiente cumple esa condición.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["perpendiculares"]

respuesta: verdadero
tipo: vf

enunciado: "Una recta tangente a una circunferencia es siempre perpendicular al radio, en el punto de contacto."

explicacion: |
  Ya se había mencionado en `../circunferencia-y-circulo/`; ahora se
  puede verificar numéricamente con pendientes.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["perpendiculares", "problema"]

variables:
  m_radio: uno_de([2, 3, 4, 5])

respuesta: -1 / m_radio
tipo: input
tolerancia_abs: 0.01

enunciado: "El radio de una circunferencia, en el punto de contacto con una tangente, tiene pendiente {m_radio}. ¿Cuál es la pendiente de la recta tangente en ese punto?"

pasos:
  - "-1 ÷ {m_radio} = {-1 / m_radio}"

explicacion: |
  La tangente es siempre perpendicular al radio en ese punto.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas", "ordenar"]

enunciado: "Ordená los pasos para hallar la ecuación de la recta paralela a otra, que además pasa por un punto dado."
tipo: ordenar
opciones_explicitas:
  - "Despejar la nueva ordenada al origen"
  - "Usar la misma pendiente que la recta original"
  - "Reemplazar las coordenadas del punto dado en y = mx + b"
respuesta_orden: ["Usar la misma pendiente que la recta original", "Reemplazar las coordenadas del punto dado en y = mx + b", "Despejar la nueva ordenada al origen"]
explicacion: |
  La pendiente no cambia; sólo se recalcula b para que la recta pase por
  el punto pedido.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["perpendiculares", "ordenar"]

enunciado: "Ordená los pasos para hallar la ecuación de la recta perpendicular a otra, que además pasa por un punto dado."
tipo: ordenar
opciones_explicitas:
  - "Despejar la nueva ordenada al origen"
  - "Calcular la pendiente recíproca y opuesta de la recta original"
  - "Reemplazar las coordenadas del punto dado en y = mx + b, con esa nueva pendiente"
respuesta_orden: ["Calcular la pendiente recíproca y opuesta de la recta original", "Reemplazar las coordenadas del punto dado en y = mx + b, con esa nueva pendiente", "Despejar la nueva ordenada al origen"]
explicacion: |
  Primero cambia la pendiente (recíproca y opuesta); recién después se
  ajusta b.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["paralelas"]

respuesta: verdadero
tipo: vf

enunciado: "Dos rectas verticales distintas (x = k₁ y x = k₂, con k₁ ≠ k₂) son siempre paralelas entre sí."

explicacion: |
  Aunque no tengan pendiente definida en la fórmula y=mx+b, nunca se
  cruzan: son paralelas.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["perpendiculares"]

respuesta: verdadero
tipo: vf

enunciado: "Una recta horizontal (y = b) y una recta vertical (x = k) son siempre perpendiculares entre sí."

explicacion: |
  Se cruzan formando exactamente 90°, aunque el criterio m₁×m₂=-1 no se
  pueda aplicar literalmente (la vertical no tiene pendiente definida).
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas", "problema"]

variables:
  m: uno_de([2, 3, 4])
  x0: uno_de([1, 2, 3])
  producto: m * x0
  b: random(1, 10)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "La recta paralela a y = {m}x + 5 que pasa por ({x0}, {producto + b}) tiene ordenada al origen b. ¿Cuánto vale b?"

pasos:
  - "{producto + b} = {m} × {x0} + b, entonces b = {producto + b} − {producto} = {b}"

explicacion: |
  Se despeja b restando m×x₀ al valor de y del punto dado.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "basico"
  tags: ["perpendiculares"]

respuesta: verdadero
tipo: vf

enunciado: "Si el producto de las pendientes de dos rectas da exactamente -1, esas rectas son perpendiculares."

explicacion: |
  Es el criterio algebraico completo de perpendicularidad.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "basico"
  tags: ["perpendiculares"]

respuesta: verdadero
tipo: vf

enunciado: "La pendiente recíproca y opuesta de m = 2 es -1/2."

explicacion: |
  2 × (-1/2) = -1, cumple el criterio.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["perpendiculares"]

respuesta: falso
tipo: vf

enunciado: "Dos rectas con pendientes 2 y -2 (mismo valor, signo opuesto) son perpendiculares entre sí."

explicacion: |
  2 × (-2) = -4, no -1: no cumplen el criterio. Tener signos opuestos no
  alcanza, hace falta además que sean recíprocas.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["perpendiculares", "problema"]

variables:
  m: uno_de([2, 4, 5])

respuesta: -1 / m
tipo: input
tolerancia_abs: 0.01

enunciado: "Un lado de un cuadrilátero tiene pendiente {m}. Para que el cuadrilátero sea un rectángulo, ¿qué pendiente tiene que tener el lado consecutivo (adyacente)?"

pasos:
  - "-1 ÷ {m} = {-1 / m}"

explicacion: |
  Los lados consecutivos de un rectángulo son perpendiculares entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas", "perpendiculares"]

respuesta: verdadero
tipo: vf

enunciado: "Verificar paralelismo o perpendicularidad con pendientes permite confirmar propiedades geométricas sin necesidad de medir ángulos con transportador."

explicacion: |
  Es la ventaja de trabajar con coordenadas y ecuaciones en vez de con
  el dibujo físico.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve aplicar el criterio de paralelismo y perpendicularidad a problemas geométricos?"
tipo: mc
opciones_explicitas:
  - "Para confirmar propiedades de figuras dadas por coordenadas: si un cuadrilátero es rectángulo, si dos calles son paralelas, si una estructura es realmente perpendicular"
  - "Sólo sirve para practicar el cálculo de pendientes en abstracto"
  - "Sólo aplica a rectas que pasan por el origen"
respuesta: "Para confirmar propiedades de figuras dadas por coordenadas: si un cuadrilátero es rectángulo, si dos calles son paralelas, si una estructura es realmente perpendicular"

explicacion: |
  Es la aplicación geométrica del criterio algebraico ya conocido.
```

## Sección: integral (30 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["regla_potencia"]

variables:
  n: random(1, 8)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "∫x^{n} dx. ¿Cuál es el exponente de x en el resultado (antes de sumar la constante C)?"

explicacion: |
  Al integrar, se le suma 1 al exponente original.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["regla_potencia"]

variables:
  n: random(1, 8)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "∫x^{n} dx. ¿Por qué número hay que dividir?"

explicacion: |
  Se divide por el nuevo exponente, n+1 = {n + 1}.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["regla_potencia"]

variables:
  n: random(1, 5)
  m: random(1, 10)
  k: (n + 1) * m

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "∫{k}x^{n} dx. ¿Cuál es el coeficiente de x^{n + 1} en el resultado?"

pasos:
  - "El coeficiente es {k}/({n}+1) = {k}/{n + 1} = {m}"

explicacion: |
  El coeficiente original se divide por el nuevo exponente.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["regla_potencia"]

variables:
  n: random(1, 6)
  m: random(1, 8)
  k: (n + 1) * m

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "∫{k}x^{n} dx. ¿Cuál es el coeficiente de x^{n + 1} en el resultado?"

explicacion: |
  {k}/{n + 1} = {m}.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["constante"]

variables:
  k: random(1, 20)
  x: random(1, 15)

respuesta: k * x
tipo: input
tolerancia_abs: 0

enunciado: "∫{k} dx da {k}x + C. Sin la constante C, ¿cuánto vale {k}x en x={x}?"

explicacion: |
  ∫k dx = kx + C — evaluando la parte sin C en x={x}: {k}×{x} = {k * x}.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["definida"]

variables:
  m: random(2, 10)
  a: random(0, 5)
  b: random(6, 15)

respuesta: m * (b ^ 2 - a ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "∫[{a},{b}] {m}x dx. ¿Cuánto vale?"

pasos:
  - "Antiderivada: F(x) = {m}x²/2"
  - "F({b}) − F({a}) = {m}×{b ^ 2}/2 − {m}×{a ^ 2}/2 = {m * (b ^ 2 - a ^ 2) / 2}"

explicacion: |
  Es el área bajo la recta y={m}x, entre x={a} y x={b}.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["definida"]

variables:
  m: random(2, 8)
  a: random(1, 6)
  b: random(7, 14)

respuesta: m * (b ^ 2 - a ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "∫[{a},{b}] {m}x dx. ¿Cuánto vale?"

explicacion: |
  F(x) = {m}x²/2, evaluada entre {a} y {b}.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["definida"]

variables:
  m: random(2, 8)
  c: random(1, 10)
  a: random(0, 4)
  b: random(5, 12)

respuesta: (m * b ^ 2 / 2 + c * b) - (m * a ^ 2 / 2 + c * a)
tipo: input
tolerancia_abs: 0

enunciado: "∫[{a},{b}] ({m}x + {c}) dx. ¿Cuánto vale?"

pasos:
  - "Antiderivada: F(x) = {m}x²/2 + {c}x"
  - "F({b}) − F({a})"

explicacion: |
  Se integra término a término, y se evalúa la diferencia F(b)−F(a).
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  velocidad: random(10, 100)
  t1: random(0, 5)
  t2: random(6, 15)

respuesta: velocidad * (t2 - t1)
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se mueve a velocidad constante v(t) = {velocidad} km/h. ¿Qué distancia recorre entre t={t1} y t={t2} horas (∫v dt)?"

explicacion: |
  Con velocidad constante, la integral se reduce a velocidad×tiempo —
  el área de un rectángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  aceleracion: random(2, 10)
  t1: random(0, 3)
  t2: random(4, 10)

respuesta: aceleracion * (t2 ^ 2 - t1 ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto acelera desde el reposo con v(t) = {aceleracion}t. ¿Qué distancia recorre entre t={t1} y t={t2} (∫v dt)?"

pasos:
  - "F(t) = {aceleracion}t²/2, evaluada entre {t1} y {t2}"

explicacion: |
  La distancia recorrida es la integral de la velocidad — el área bajo
  el gráfico de v(t).
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "F es una antiderivada de f si F'(x) = f(x)."

explicacion: |
  Es la definición: la integral deshace la derivada.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una integral indefinida siempre incluye una constante +C, porque la derivada de cualquier constante es 0."

explicacion: |
  F(x)+C también es una antiderivada válida de f, para cualquier C —
  por eso ∫f(x)dx representa a TODAS las antiderivadas a la vez.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la integral indefinida, la integral definida ∫[a,b] f(x)dx es un número concreto, no una familia de funciones."

explicacion: |
  Por eso la integral definida no lleva "+C" — la constante se cancela
  al restar F(b)−F(a).
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La integral definida ∫[a,b] f(x)dx representa el área entre el gráfico de f y el eje x, entre x=a y x=b."

explicacion: |
  Es la interpretación geométrica central de la integral definida.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["error_comun", "opcion_multiple"]

variables:
  n: random(2, 8)

respuesta: n + 1
tipo: mc
opciones_explicitas:
  - n + 1
  - n - 1
  - n

enunciado: "∫x^{n} dx. ¿Cuál es el exponente correcto del resultado?"

explicacion: |
  Al integrar se SUMA 1 al exponente (n−1 sería el error de confundirlo
  con derivar).
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "∫3x² dx = x³ es una respuesta completa y correcta."

explicacion: |
  Falta el "+C" — sin la constante, la respuesta está incompleta (no es
  TODA antiderivada posible, sólo una).
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  n: random(1, 6)
  m: random(1, 8)
  k: (n + 1) * m

respuesta: ((m * (n + 1)) == k)
tipo: vf

enunciado: "Se propone que ∫{k}x^{n} dx = {m}x^{n + 1} + C. Derivando {m}x^{n + 1}, ¿se recupera {k}x^{n}?"

pasos:
  - "Derivando {m}x^{n + 1}: {m}×({n + 1})x^{n} = {m * (n + 1)}x^{n}"

explicacion: |
  Derivar el resultado de una integral tiene que devolver la función
  original — es la forma de verificar.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  m: random(2, 10)
  a: random(0, 5)
  b: random(6, 15)
  real: m * (b ^ 2 - a ^ 2) / 2
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "∫[{a},{b}] {m}x dx. ¿Es correcto que el resultado sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "En ∫[a,b] f(x)dx = F(b)−F(a), da lo mismo calcular F(a)−F(b) en vez de F(b)−F(a)."

explicacion: |
  Invertir el orden cambia el signo del resultado — no da lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La integral de una suma de funciones es la suma de las integrales de cada una, por separado."

explicacion: |
  Mismo criterio que al derivar: se integra término a término.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La regla ∫xⁿdx = x^(n+1)/(n+1)+C no se puede aplicar cuando n=−1 (dividiría por 0)."

explicacion: |
  Ese caso especial (∫x⁻¹dx = ∫(1/x)dx) da ln|x|+C — fuera del alcance
  de este módulo, pero vale la pena saber que existe la excepción.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Integrar y derivar son operaciones inversas una de la otra, como sumar y restar."

explicacion: |
  Derivar la integral de f devuelve f; integrar la derivada de f
  devuelve f (más una constante).
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["definida"]

variables:
  m: random(2, 12)
  b: random(3, 20)

respuesta: m * b ^ 2 / 2
tipo: input
tolerancia_abs: 0

enunciado: "∫[0,{b}] {m}x dx. ¿Cuánto vale?"

pasos:
  - "F({b}) − F(0) = {m}×{b ^ 2}/2 − 0 = {m * b ^ 2 / 2}"

explicacion: |
  Con el límite inferior en 0, F(0)=0 siempre, así que sólo hace falta
  evaluar F en el límite superior.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una integral definida puede dar 0, si a=b (los dos límites son el mismo valor)."

explicacion: |
  F(a)−F(a) = 0 siempre — no hay ningún área entre un punto y sí mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["regla_potencia"]

variables:
  n1: 1
  m1: random(1, 8)
  k1: (n1 + 1) * m1
  k2: random(1, 20)

respuesta: m1
tipo: input
tolerancia_abs: 0

enunciado: "∫({k1}x + {k2}) dx. ¿Cuál es el coeficiente de x² en el resultado?"

pasos:
  - "∫{k1}x dx = {k1}x²/2 = {m1}x²"
  - "∫{k2} dx = {k2}x"

explicacion: |
  Se integra cada término por separado, con la regla de la potencia.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["regla_potencia"]

variables:
  n1: 1
  m1: random(1, 8)
  k1: (n1 + 1) * m1
  k2: random(1, 20)

respuesta: k2
tipo: input
tolerancia_abs: 0

enunciado: "∫({k1}x + {k2}) dx = {m1}x² + (algo)x + C. ¿Cuál es el coeficiente de ese término lineal?"

explicacion: |
  ∫{k2} dx = {k2}x — el coeficiente no cambia al integrar una constante.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si una función toma valores negativos en parte del intervalo, la integral definida resta esa área (en vez de sumarla) para esa parte."

explicacion: |
  La integral definida da el área "con signo" — regiones bajo el eje x
  cuentan negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  aceleracion: random(2, 8)
  t_final: random(2, 12)

respuesta: aceleracion * t_final ^ 2 / 2
tipo: input
tolerancia_abs: 0

enunciado: "v(t) = {aceleracion}t (velocidad, partiendo del reposo). ¿Qué distancia total recorre entre t=0 y t={t_final}?"

explicacion: |
  ∫[0,{t_final}] {aceleracion}t dt = {aceleracion}×{t_final}²/2.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

variables:
  a: random(1, 10)
  b: random(1, 10)

respuesta: verdadero
tipo: vf

enunciado: "Si f(x) = {a}x² + {b}x, y se deriva para obtener f'(x), integrar f'(x) devuelve {a}x² + {b}x + C (la función original, salvo la constante)."

explicacion: |
  Integrar y derivar se cancelan entre sí, módulo la constante de
  integración que se pierde al derivar.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  n: random(1, 5)
  m: random(1, 8)
  k: (n + 1) * m
  error: uno_de([0, 0, 1, -1])
  propuesto: m + error

respuesta: (propuesto == m)
tipo: vf

enunciado: "∫{k}x^{n} dx. ¿Es correcto que el coeficiente de x^{n + 1} en el resultado sea {propuesto}?"

explicacion: |
  El coeficiente correcto es {k}/{n + 1} = {m}.
```

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

