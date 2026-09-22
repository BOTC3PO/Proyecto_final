# Examen jefe — [PENDIENTE #628]

> Logro #628. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **130 preguntas totales** en 5/5 secciones.

---

## Sección: regla-de-tres-inversa (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "basico"
  tags: ["regla_de_tres_inversa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)

respuesta: (a * b) / c
tipo: input
tolerancia_abs: 0.01

enunciado: "En una relación inversamente proporcional, {a} es a {b} como {c} es a x. ¿Cuánto vale x?"

pasos:
  - "x = ({a} × {b}) ÷ {c} = {a * b} ÷ {c} = {(a * b) / c}"

explicacion: |
  En la regla inversa se igualan los productos, no los cocientes: a×b =
  c×x.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  obreros_base: random(2, 8)
  dias_base: random(4, 30)
  obreros_nuevo: random(2, 12)

respuesta: (obreros_base * dias_base) / obreros_nuevo
tipo: input
tolerancia_abs: 0.01

enunciado: "{obreros_base} obreros terminan una obra en {dias_base} días. Trabajando todos al mismo ritmo, ¿en cuántos días la terminan {obreros_nuevo} obreros?"

pasos:
  - "x = ({obreros_base} × {dias_base}) ÷ {obreros_nuevo}"

explicacion: |
  Más obreros, menos días: relación inversa, así que se igualan los
  productos.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  velocidad_base: random(20, 80)
  horas_base: random(2, 8)
  velocidad_nueva: random(20, 120)

respuesta: (velocidad_base * horas_base) / velocidad_nueva
tipo: input
tolerancia_abs: 0.01

enunciado: "A {velocidad_base} km/h, un viaje tarda {horas_base} horas. ¿Cuánto tarda el mismo viaje a {velocidad_nueva} km/h?"

explicacion: |
  Para recorrer la misma distancia, más velocidad significa menos tiempo:
  relación inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "basico"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  personas_base: random(2, 8)
  parte_base: random(10, 90)
  personas_nueva: random(2, 12)

respuesta: (personas_base * parte_base) / personas_nueva
tipo: input
tolerancia_abs: 0.01

enunciado: "Repartiendo ${personas_base * parte_base} entre {personas_base} personas, a cada una le tocan ${parte_base}. Repartiendo la misma plata entre {personas_nueva} personas, ¿cuánto le toca a cada una?"

explicacion: |
  El total a repartir queda fijo: más personas, menos le toca a cada una
  — relación inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  canillas_base: random(1, 4)
  horas_base: random(4, 20)
  canillas_nueva: random(2, 8)

respuesta: (canillas_base * horas_base) / canillas_nueva
tipo: input
tolerancia_abs: 0.01

enunciado: "Con {canillas_base} canilla(s) abierta(s), un tanque se llena en {horas_base} horas. Con {canillas_nueva} canillas (mismo caudal cada una), ¿en cuántas horas se llena?"

explicacion: |
  Más canillas abiertas, menos tiempo para llenar el mismo tanque:
  relación inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  maquinas_base: random(2, 8)
  dias_base: random(4, 20)
  maquinas_nueva: random(2, 12)

respuesta: (maquinas_base * dias_base) / maquinas_nueva
tipo: input
tolerancia_abs: 0.01

enunciado: "{maquinas_base} máquinas fabrican un pedido en {dias_base} días. Con {maquinas_nueva} máquinas (mismo ritmo cada una), ¿en cuántos días se fabrica el mismo pedido?"

explicacion: |
  Más máquinas trabajando, menos días necesarios: relación inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "basico"
  tags: ["regla_de_tres_inversa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"Más obreros trabajando, menos días tarda la obra\" es un ejemplo de relación inversamente proporcional."

explicacion: |
  Una magnitud sube (obreros) mientras la otra baja (días): es inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "\"Más kilos de fruta comprados, más se paga\" es un ejemplo de relación inversamente proporcional."

explicacion: |
  Acá las dos magnitudes suben juntas: es una relación directa, no
  inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "basico"
  tags: ["regla_de_tres_inversa", "vocabulario"]

enunciado: "¿Cómo se reconoce que un problema es de regla de tres inversa?"
tipo: mc
opciones_explicitas:
  - "Una magnitud aumenta mientras la otra disminuye"
  - "Las dos magnitudes son siempre números pares"
  - "Una de las magnitudes tiene que ser el tiempo"
respuesta: "Una magnitud aumenta mientras la otra disminuye"

explicacion: |
  Es el criterio clave: si al aumentar una la otra disminuye (manteniendo
  el producto constante), es inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "vocabulario"]

enunciado: "En una relación inversamente proporcional, ¿qué se mantiene constante?"
tipo: mc
opciones_explicitas:
  - "El producto de las dos magnitudes"
  - "El cociente entre las dos magnitudes"
  - "La suma de las dos magnitudes"
respuesta: "El producto de las dos magnitudes"

explicacion: |
  En la regla directa lo constante es el cociente (la razón); en la
  inversa, lo constante es el producto.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  correcto: (a * b) / c

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - (b * c) / a
  - a * b * c

enunciado: "En la regla de tres inversa {a}—{b} / {c}—x, ¿cuál es la fórmula correcta para x?"

explicacion: |
  La segunda opción es la fórmula de la regla DIRECTA (no aplica acá): en
  la inversa se multiplican {a} y {b}, y se divide por {c}.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "verificacion"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  correcto: (a * b) / c
  error: uno_de([0, 0, 0, c, -c])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "En una relación inversa, ¿está bien resuelto esto? {a} es a {b} como {c} es a {mostrado}."

explicacion: |
  Se verifica comprobando que el producto {a} × {b} sea igual a
  {c} × {mostrado}.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)

tipo: completar
enunciado: "En una relación inversamente proporcional, completá: {a} es a {b} como {c} es a ___."
respuestas_validas:
  - (a * b) / c

explicacion: |
  Se aplica la fórmula de la regla de tres inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  personas_base: random(2, 6)
  horas_base: random(4, 24)
  personas_nueva: random(2, 10)

respuesta: (personas_base * horas_base) / personas_nueva
tipo: input
tolerancia_abs: 0.01

enunciado: "{personas_base} personas pintan una casa en {horas_base} horas. Trabajando al mismo ritmo, ¿cuántas horas tardan {personas_nueva} personas?"

explicacion: |
  Más personas ayudando, menos horas necesarias: relación inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "avanzado"
  tags: ["regla_de_tres_inversa", "regla_de_tres_directa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  formula_directa: (b * c) / a
  formula_inversa: (a * b) / c

restricciones:
  - formula_directa != formula_inversa

respuesta: formula_inversa
tipo: mc
opciones_explicitas:
  - formula_directa
  - formula_inversa

enunciado: "\"Más obreros, menos días\" — con {a} es a {b} como {c} es a x, ¿cuál fórmula corresponde: la directa o la inversa?"

explicacion: |
  Como una magnitud sube y la otra baja, corresponde la fórmula inversa
  (igualar productos), no la directa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "avanzado"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  velocidad_base: random(30, 100)
  horas_base: random(2, 6)
  horas_nueva: random(1, velocidad_base - 1)

respuesta: (velocidad_base * horas_base) / horas_nueva
tipo: input
tolerancia_abs: 0.01

enunciado: "Un vehículo a {velocidad_base} km/h tarda {horas_base} horas en un viaje. ¿A qué velocidad hay que ir para tardar sólo {horas_nueva} horas en el mismo recorrido?"

explicacion: |
  Menos tiempo para el mismo recorrido significa más velocidad: relación
  inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  animales_base: random(4, 20)
  dias_base: random(5, 30)
  animales_nuevo: random(4, 40)

respuesta: (animales_base * dias_base) / animales_nuevo
tipo: input
tolerancia_abs: 0.01

enunciado: "La comida almacenada alcanza para {animales_base} animales durante {dias_base} días. ¿Para cuántos días alcanza esa misma comida si hay {animales_nuevo} animales?"

explicacion: |
  Más animales comiendo del mismo stock, menos días dura: relación
  inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "En la regla de tres inversa, alcanza con invertir cualquier fracción del problema para resolverlo, sin pensar qué representa cada magnitud."

explicacion: |
  Hay que identificar primero si la relación es directa o inversa
  analizando el problema — no es un truco mecánico de "dar vuelta" algo
  al azar.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "orden"]

tipo: ordenar
enunciado: "Resolvé estas tres reglas de tres inversas y ordenalas de menor a mayor resultado."
opciones_explicitas:
  - "2 es a 10 como 5 es a x"
  - "4 es a 8 como 2 es a x"
  - "3 es a 6 como 9 es a x"
respuesta_orden: ["3 es a 6 como 9 es a x", "2 es a 10 como 5 es a x", "4 es a 8 como 2 es a x"]

explicacion: |
  Primero se resuelve cada una con la fórmula inversa (x=2, x=4, x=16) y
  recién ahí se ordenan.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "avanzado"
  tags: ["regla_de_tres_inversa", "problema"]

variables:
  desagues_base: random(1, 3)
  horas_base: random(6, 30)
  desagues_nuevo: random(2, 6)

respuesta: (desagues_base * horas_base) / desagues_nuevo
tipo: input
tolerancia_abs: 0.01

enunciado: "Con {desagues_base} desagüe(s) abierto(s), una pileta se vacía en {horas_base} horas. Con {desagues_nuevo} desagües (mismo caudal cada uno), ¿en cuántas horas se vacía?"

explicacion: |
  Más desagües abiertos, menos tiempo para vaciarse: relación inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa", "regla_de_tres_directa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"A mayor velocidad, menor tiempo para recorrer la misma distancia\" describe una relación inversamente proporcional."

explicacion: |
  Velocidad sube, tiempo baja (para una distancia fija): es inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "intermedio"
  tags: ["regla_de_tres_inversa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  x: (a * b) / c

respuesta: verdadero
tipo: vf

enunciado: "Si {a} es a {b} como {c} es a {x} (relación inversa), ¿es cierto que {a} × {b} = {c} × {x}?"

explicacion: |
  Es la propiedad que define a la regla inversa: el producto de cada par
  se mantiene igual.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "basico"
  tags: ["regla_de_tres_inversa"]

enunciado: "En la regla de tres inversa a—b / c—x, ¿cuál es la fórmula para x?"
tipo: mc
opciones_explicitas:
  - "x = (a × b) ÷ c"
  - "x = (b × c) ÷ a"
  - "x = a + b + c"
respuesta: "x = (a × b) ÷ c"

explicacion: |
  Se igualan los productos: a×b = c×x, y se despeja x dividiendo por c.
```

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_inversa"
  nivel: "basico"
  tags: ["regla_de_tres_inversa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla de tres inversa sirve para encontrar un valor desconocido cuando, al aumentar una magnitud, la otra disminuye, manteniendo el producto constante."

explicacion: |
  Es la idea central de todo el tema, en contraste directo con la regla
  de tres directa.
```

## Sección: sistemas-dos-ecuaciones (30 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  m: random(2, 5)
  x_sol: random(1, 15)
  k: random(1, 10)
  y_sol: m * x_sol + k
  a: random(2, 6)
  c: a * x_sol + y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por sustitución: y = {m}x + {k}; {a}x + y = {c}. ¿Cuánto vale x?"

pasos:
  - "Reemplazar y en la segunda ecuación: {a}x + ({m}x + {k}) = {c}"
  - "Resolver: {a + m}x + {k} = {c} → x = {(c - k) / (a + m)}"

explicacion: |
  Se reemplaza la y ya despejada en la otra ecuación, y queda una
  ecuación de una sola incógnita.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  m: random(2, 5)
  x_sol: random(1, 15)
  k: random(1, 10)
  y_sol: m * x_sol + k
  a: random(2, 6)
  c: a * x_sol + y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por sustitución: y = {m}x + {k}; {a}x + y = {c}. ¿Cuánto vale y?"

explicacion: |
  Una vez hallado x, se reemplaza en y = {m}x + {k} para obtener y.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  m: random(1, 4)
  x_sol: random(1, 20)
  k: random(-10, 10)
  y_sol: m * x_sol + k
  b: random(2, 6)
  c: random(1, 5) * x_sol + b * y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por sustitución: y = {m}x + {k}; x + {b}y = {c}. ¿Cuánto vale x?"

explicacion: |
  Reemplazar y = {m}x + {k} en la segunda ecuación reduce el sistema a
  una ecuación de una sola incógnita.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  m: random(1, 4)
  x_sol: random(1, 20)
  k: random(-10, 10)
  y_sol: m * x_sol + k
  b: random(2, 6)
  c: random(1, 5) * x_sol + b * y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por sustitución: y = {m}x + {k}; x + {b}y = {c}. ¿Cuánto vale y?"

explicacion: |
  y = {m}x + {k}, con el x ya encontrado.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["igualacion"]

variables:
  m1: random(5, 8)
  x_sol: random(1, 15)
  k1: random(1, 15)
  m2: random(1, 4)
  y_sol: m1 * x_sol + k1
  k2: y_sol - m2 * x_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por igualación: y = {m1}x + {k1}; y = {m2}x + {k2}. ¿Cuánto vale x?"

pasos:
  - "Igualar: {m1}x + {k1} = {m2}x + {k2}"
  - "Resolver: {m1 - m2}x = {k2 - k1} → x = {(k2 - k1) / (m1 - m2)}"

explicacion: |
  Como las dos ecuaciones ya tienen y despejada, se igualan directamente
  entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["igualacion"]

variables:
  m1: random(5, 8)
  x_sol: random(1, 15)
  k1: random(1, 15)
  m2: random(1, 4)
  y_sol: m1 * x_sol + k1
  k2: y_sol - m2 * x_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por igualación: y = {m1}x + {k1}; y = {m2}x + {k2}. ¿Cuánto vale y?"

explicacion: |
  Con x ya encontrado, se reemplaza en cualquiera de las dos ecuaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["igualacion"]

variables:
  m1: random(1, 3)
  x_sol: random(1, 20)
  k1: random(-15, 15)
  m2: random(4, 8)
  y_sol: m1 * x_sol + k1
  k2: y_sol - m2 * x_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por igualación: y = {m1}x + {k1}; y = {m2}x + {k2}. ¿Cuánto vale x?"

explicacion: |
  {m1}x + {k1} = {m2}x + {k2}, y se despeja x igual que cualquier
  ecuación de primer grado.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["igualacion"]

variables:
  m1: random(1, 3)
  x_sol: random(1, 20)
  k1: random(-15, 15)
  m2: random(4, 8)
  y_sol: m1 * x_sol + k1
  k2: y_sol - m2 * x_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por igualación: y = {m1}x + {k1}; y = {m2}x + {k2}. ¿Cuánto vale y?"

explicacion: |
  y = {m1}x + {k1}, con el x ya encontrado.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 20)
  y_sol: random(1, 20)
  a1: random(2, 8)
  c1: a1 * x_sol + y_sol
  a2: random(2, 8)
  c2: a2 * x_sol - y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + y = {c1}; {a2}x − y = {c2}. ¿Cuánto vale x?"

pasos:
  - "Los coeficientes de y ya son opuestos (+1 y −1): sumar las dos ecuaciones"
  - "{a1 + a2}x = {c1 + c2} → x = {(c1 + c2) / (a1 + a2)}"

explicacion: |
  Sumando las dos ecuaciones completas, la y se cancela.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 20)
  y_sol: random(1, 20)
  a1: random(2, 8)
  c1: a1 * x_sol + y_sol
  a2: random(2, 8)
  c2: a2 * x_sol - y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + y = {c1}; {a2}x − y = {c2}. ¿Cuánto vale y?"

explicacion: |
  Con x ya encontrado, se reemplaza en cualquiera de las dos ecuaciones
  para hallar y.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  a1: random(2, 6)
  b1: random(2, 6)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(2, 6)
  c2: a2 * x_sol + b1 * y_sol - y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + {b1}y = {c1}; {a2}x + {b1 - 1}y = {c2}. ¿Cuánto vale x?"

pasos:
  - "Restar la segunda ecuación a la primera para que los coeficientes de y (que difieren en exactamente 1) se reduzcan a uno solo: {a1 - a2}x + y = {c1 - c2}"

explicacion: |
  Cuando los coeficientes de una letra no son iguales ni opuestos, se
  resta directamente si eso ya cancela parte del trabajo, o se multiplica
  una ecuación entera para emparejarlos.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  a1: random(2, 6)
  b1: random(2, 6)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(2, 6)
  c2: a2 * x_sol + b1 * y_sol - y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + {b1}y = {c1}; {a2}x + {b1 - 1}y = {c2}. ¿Cuánto vale y?"

explicacion: |
  Con x ya encontrado, se reemplaza en cualquiera de las dos ecuaciones
  para hallar y.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 12)
  y_sol: random(1, 12)
  a1: random(2, 5)
  b1: random(2, 5)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(2, 5)
  b2: random(2, 5)
  c2: a2 * x_sol + b2 * y_sol

restricciones:
  - (a1 * b2 - a2 * b1) != 0

respuesta: (c1 * b2 - c2 * b1) / (a1 * b2 - a2 * b1)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}. ¿Cuánto vale x?"

pasos:
  - "Multiplicar la primera por {b2} y la segunda por {b1} para igualar los coeficientes de y, y restar"

explicacion: |
  Cuando ningún coeficiente coincide directamente, se multiplican las dos
  ecuaciones enteras por los números que hagan falta antes de sumar o
  restar.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 12)
  y_sol: random(1, 12)
  a1: random(2, 5)
  b1: random(2, 5)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(2, 5)
  b2: random(2, 5)
  c2: a2 * x_sol + b2 * y_sol

restricciones:
  - (a1 * b2 - a2 * b1) != 0

respuesta: (a1 * c2 - a2 * c1) / (a1 * b2 - a2 * b1)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}. ¿Cuánto vale y?"

explicacion: |
  Se despeja y con el mismo método, eliminando ahora la x.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  adulto_sol: random(5, 20)
  nino_sol: random(2, 10)
  na: random(2, 5)
  nn: random(2, 5)
  total1: na * adulto_sol + nn * nino_sol
  na2: random(1, 4)
  nn2: random(1, 4)
  total2: na2 * adulto_sol + nn2 * nino_sol

restricciones:
  - (na * nn2 - na2 * nn) != 0

respuesta: adulto_sol
tipo: input
tolerancia_abs: 0

enunciado: "{na} entradas de adulto y {nn} de niño cuestan {total1} en total. {na2} entradas de adulto y {nn2} de niño cuestan {total2}. ¿Cuánto cuesta una entrada de adulto?"

pasos:
  - "Plantear el sistema: {na}·a + {nn}·n = {total1}; {na2}·a + {nn2}·n = {total2}, y resolver por eliminación"

explicacion: |
  Mismo procedimiento de eliminación, aplicado a un problema con nombres
  en vez de x e y.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  adulto_sol: random(5, 20)
  nino_sol: random(2, 10)
  na: random(2, 5)
  nn: random(2, 5)
  total1: na * adulto_sol + nn * nino_sol
  na2: random(1, 4)
  nn2: random(1, 4)
  total2: na2 * adulto_sol + nn2 * nino_sol

restricciones:
  - (na * nn2 - na2 * nn) != 0

respuesta: nino_sol
tipo: input
tolerancia_abs: 0

enunciado: "{na} entradas de adulto y {nn} de niño cuestan {total1} en total. {na2} entradas de adulto y {nn2} de niño cuestan {total2}. ¿Cuánto cuesta una entrada de niño?"

explicacion: |
  Una vez hallado el precio de adulto, se reemplaza en cualquiera de las
  dos ecuaciones para despejar el de niño.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "basico"
  tags: ["problema"]

variables:
  x_sol: random(5, 30)
  y_sol: random(1, 20)
  suma: x_sol + y_sol
  resta: x_sol - y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "La suma de dos números es {suma} y su diferencia es {resta}. ¿Cuál es el número mayor?"

pasos:
  - "x + y = {suma}; x − y = {resta}. Sumando las dos: 2x = {suma + resta} → x = {(suma + resta) / 2}"

explicacion: |
  Es el caso más directo de eliminación: los coeficientes de y ya son
  opuestos.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "basico"
  tags: ["problema"]

variables:
  x_sol: random(5, 30)
  y_sol: random(1, 20)
  suma: x_sol + y_sol
  resta: x_sol - y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "La suma de dos números es {suma} y su diferencia es {resta}. ¿Cuál es el número menor?"

explicacion: |
  Restando las dos ecuaciones en vez de sumarlas se cancela la x: 2y =
  {suma - resta} → y = {(suma - resta) / 2}.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x_sol: random(1, 20)
  y_sol: random(1, 20)
  a1: random(1, 8)
  b1: random(1, 8)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(1, 8)
  b2: random(1, 8)
  c2: a2 * x_sol + b2 * y_sol
  error_x: uno_de([0, 0, 1, -1])
  error_y: uno_de([0, 0, 1, -1])
  val_x: x_sol + error_x
  val_y: y_sol + error_y

respuesta: (((a1 * val_x + b1 * val_y - c1) ^ 2) + ((a2 * val_x + b2 * val_y - c2) ^ 2)) == 0
tipo: vf

enunciado: "¿(x, y) = ({val_x}, {val_y}) es solución del sistema {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}?"

explicacion: |
  Tiene que cumplir las DOS ecuaciones a la vez — si falla en cualquiera
  de las dos, no es solución del sistema.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  a1: random(1, 8)
  b1: random(1, 8)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(1, 8)
  b2: random(1, 8)
  c2: a2 * x_sol + b2 * y_sol
  error_x: uno_de([0, 0, 2, -2])
  error_y: uno_de([0, 0, 1, -1])
  val_x: x_sol + error_x
  val_y: y_sol + error_y

respuesta: (((a1 * val_x + b1 * val_y - c1) ^ 2) + ((a2 * val_x + b2 * val_y - c2) ^ 2)) == 0
tipo: vf

enunciado: "¿(x, y) = ({val_x}, {val_y}) es solución del sistema {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}?"

explicacion: |
  Se reemplaza x e y en las dos ecuaciones y se comprueba que las dos
  dan verdadero.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  a1: random(1, 6)
  b1: random(1, 6)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(1, 6)
  b2: random(1, 6)
  c2: a2 * x_sol + b2 * y_sol
  val_x: x_sol
  val_y: y_sol + 1

respuesta: (((a1 * val_x + b1 * val_y - c1) ^ 2) + ((a2 * val_x + b2 * val_y - c2) ^ 2)) == 0
tipo: vf

enunciado: "¿(x, y) = ({val_x}, {val_y}) es solución del sistema {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}?"

explicacion: |
  Cumplir sólo una de las dos ecuaciones no alcanza: acá x sí sirve, pero
  y está corrida en 1, así que no es solución del sistema completo.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "basico"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x_sol: random(1, 20)
  y_sol: random(1, 20)
  a1: random(1, 8)
  b1: random(1, 8)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(1, 8)
  b2: random(1, 8)
  c2: a2 * x_sol + b2 * y_sol

respuesta: (((a1 * x_sol + b1 * y_sol - c1) ^ 2) + ((a2 * x_sol + b2 * y_sol - c2) ^ 2)) == 0
tipo: vf

enunciado: "¿(x, y) = ({x_sol}, {y_sol}) es solución del sistema {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}?"

explicacion: |
  Es exactamente el par con el que se armó el sistema, así que cumple
  las dos ecuaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "problema", "verdadero_falso"]

variables:
  x_sol: random(5, 25)
  y_sol: random(1, 15)
  suma: x_sol + y_sol
  resta: x_sol - y_sol
  error: uno_de([0, 0, 3, -3])
  val_x: x_sol + error
  val_y: suma - val_x

respuesta: ((val_x - val_y - resta) ^ 2) == 0
tipo: vf

enunciado: "La suma de dos números es {suma} y su diferencia es {resta}. ¿Es correcto que los números sean {val_x} y {val_y}?"

explicacion: |
  Los dos números tienen que cumplir a la vez que suman {suma} y que
  restan {resta}.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La solución de un sistema de dos ecuaciones es cualquier par (x, y) que cumpla al menos una de las dos ecuaciones."

explicacion: |
  Tiene que cumplir LAS DOS al mismo tiempo, no alcanza con una sola.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["concepto", "casos_especiales", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si las dos ecuaciones de un sistema representan rectas paralelas, el sistema no tiene solución."

explicacion: |
  Dos rectas paralelas nunca se cruzan, así que no hay ningún par (x, y)
  que cumpla las dos ecuaciones a la vez.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["concepto", "casos_especiales", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si las dos ecuaciones de un sistema son, en el fondo, la misma recta escrita de otra forma, hay infinitas soluciones."

explicacion: |
  Cualquier punto de esa recta cumple las dos ecuaciones a la vez, porque
  son la misma condición repetida.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "basico"
  tags: ["concepto", "sustitucion", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "En el método de sustitución, conviene reemplazar la variable despejada en la misma ecuación de la que se despejó."

explicacion: |
  Hay que reemplazarla en la OTRA ecuación — en la misma no aporta
  información nueva (queda una igualdad siempre verdadera, tipo 0=0).
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["metodo", "opcion_multiple"]

respuesta: "Sustitución"
tipo: mc
opciones_explicitas:
  - "Sustitución"
  - "Igualación"
  - "Eliminación"

enunciado: "Para el sistema y = 4x + 3; 2x + y = 15, ¿qué método es más directo?"

explicacion: |
  Ya hay una variable despejada en una de las dos ecuaciones — conviene
  sustituirla directamente en la otra.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["metodo", "opcion_multiple"]

respuesta: "Igualación"
tipo: mc
opciones_explicitas:
  - "Sustitución"
  - "Igualación"
  - "Eliminación"

enunciado: "Para el sistema y = 3x − 1; y = x + 5, ¿qué método es más directo?"

explicacion: |
  Las dos ecuaciones ya tienen y despejada — conviene igualarlas
  directamente entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["metodo", "opcion_multiple"]

respuesta: "Eliminación"
tipo: mc
opciones_explicitas:
  - "Sustitución"
  - "Igualación"
  - "Eliminación"

enunciado: "Para el sistema 3x + 2y = 16; 3x − 2y = 4, ¿qué método es más directo?"

explicacion: |
  Ninguna variable está despejada, pero los coeficientes de y ya son
  opuestos — sumando las dos ecuaciones se cancela directamente.
```

## Sección: sucesiones-y-series (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "vocabulario"]

enunciado: "¿Qué es una serie?"
tipo: mc
opciones_explicitas:
  - "La suma de los términos de una sucesión"
  - "Otra forma de llamar a una sucesión"
  - "El primer término de una sucesión"
respuesta: "La suma de los términos de una sucesión"

explicacion: |
  Una serie toma los términos de una sucesión y los suma todos juntos.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series"]

variables:
  n: random(4, 20)
  a1: random(1, 20)
  d: random(2, 10)
  an: a1 + (n - 1) * d

respuesta: n * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Sumá los primeros {n} términos de una sucesión aritmética con a₁ = {a1} y a{n} = {an}."

pasos:
  - "Sₙ = n × (a₁+aₙ) ÷ 2 = {n} × ({a1}+{an}) ÷ 2 = {n * (a1 + an) / 2}"

explicacion: |
  Es el promedio del primer y último término, multiplicado por la
  cantidad de términos.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(5, 15)
  an: a1 + (n - 1) * d

respuesta: n * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Sumá los primeros {n} términos de una sucesión aritmética con a₁ = {a1} y d = {d}."

pasos:
  - "Primero el último término: a{n} = {a1} + ({n}-1)×{d} = {an}. Después la suma: {n} × ({a1}+{an}) ÷ 2 = {n * (a1 + an) / 2}"

explicacion: |
  Primero hay que hallar el último término con la fórmula del término
  general, y recién después aplicar la fórmula de la suma.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "casos_especiales"]

variables:
  n: random(5, 100)

respuesta: n * (n + 1) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto suman los primeros {n} números naturales (1+2+3+...+{n})?"

pasos:
  - "n × (n+1) ÷ 2 = {n} × ({n}+1) ÷ 2 = {n * (n + 1) / 2}"

explicacion: |
  Es el caso especial con a₁=1 y d=1: la fórmula se simplifica a
  n×(n+1)÷2.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El truco de Gauss para sumar el 1 al 100 rápido consiste en emparejar el primero con el último (1+100), el segundo con el anteúltimo (2+99), y así — todos esos pares suman lo mismo."

explicacion: |
  Es la idea detrás de la fórmula de la suma de una serie aritmética.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "verificacion"]

variables:
  n: random(4, 20)
  a1: random(1, 20)
  d: random(2, 10)
  an: a1 + (n - 1) * d
  correcto: n * (a1 + an) / 2
  error: uno_de([0, 0, 0, n, -n])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculada esta suma? Los primeros {n} términos (a₁={a1}, d={d}) suman {mostrado}."

explicacion: |
  Se vuelve a calcular con la fórmula y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series"]

variables:
  n: random(4, 20)
  a1: random(1, 20)
  d: random(2, 10)
  an: a1 + (n - 1) * d
  correcto: n * (a1 + an) / 2

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a1 + an
  - n * an

enunciado: "Sumá los primeros {n} términos de una sucesión con a₁ = {a1} y a{n} = {an}."

explicacion: |
  Las otras opciones se olvidan de multiplicar por la cantidad de
  términos, o de dividir por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "avanzado"
  tags: ["series"]

variables:
  n: random(4, 20)

tipo: completar
enunciado: "La suma de los primeros ___ números naturales es {n * (n + 1) / 2}. Completá cuántos números se sumaron."
respuestas_validas:
  - n

explicacion: |
  Se despeja n de la fórmula n×(n+1)÷2, probando valores hasta encontrar
  el que da esa suma.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "problema"]

variables:
  a1: random(500, 2000)
  d: random(200, 800)
  meses: random(4, 10)
  an: a1 + (meses - 1) * d

respuesta: meses * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "El primer mes ahorraste ${a1}, y cada mes siguiente ${d} más que el anterior. ¿Cuánto ahorraste en TOTAL entre los {meses} meses?"

explicacion: |
  Se suma toda la serie de ahorros mensuales, no sólo el último mes.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "problema"]

variables:
  a1: random(10, 30)
  d: random(2, 8)
  filas: random(5, 15)
  an: a1 + (filas - 1) * d

respuesta: filas * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "La fila 1 de un teatro tiene {a1} asientos, y cada fila siguiente tiene {d} asientos más. Si el teatro tiene {filas} filas en total, ¿cuántos asientos tiene en total?"

explicacion: |
  Se suman los asientos de todas las filas, aplicando la fórmula de la
  serie.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "problema"]

variables:
  a1: random(3, 10)
  d: random(2, 6)
  figuras: random(4, 10)
  an: a1 + (figuras - 1) * d

respuesta: figuras * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "La figura 1 de un patrón usa {a1} baldosas, y cada figura siguiente usa {d} baldosas más. Si se construyen las primeras {figuras} figuras, ¿cuántas baldosas se usan en total?"

explicacion: |
  Se suma toda la serie, no sólo la última figura.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "avanzado"
  tags: ["series"]

variables:
  a1: random(50, 200)
  d: -random(2, 10)
  n: random(4, 10)
  an: a1 + (n - 1) * d

respuesta: n * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Sumá los primeros {n} términos de una sucesión con a₁ = {a1} y d = {d} (decreciente)."

explicacion: |
  La fórmula funciona igual con una sucesión decreciente.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula de la suma de una serie aritmética es, literalmente, el promedio del primer y el último término, multiplicado por la cantidad de términos."

explicacion: |
  Sₙ = n × (a₁+aₙ) ÷ 2: (a₁+aₙ)÷2 es el promedio de los dos extremos.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "avanzado"
  tags: ["series", "orden"]

tipo: ordenar
enunciado: "Calculá la suma de los primeros 5 términos de cada serie (a₁ y d dados) y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "a₁=1, d=1"
  - "a₁=10, d=0"
  - "a₁=0, d=2"
  - "a₁=2, d=3"
respuesta_orden: ["a₁=1, d=1", "a₁=0, d=2", "a₁=2, d=3", "a₁=10, d=0"]

explicacion: |
  Sumas: 15, 20, 40, 50 — hay que calcular cada una con la fórmula antes
  de poder ordenarlas.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "casos_especiales"]

variables:
  a1: random(2, 50)
  n: random(3, 10)

respuesta: a1 * n
tipo: input
tolerancia_abs: 0

enunciado: "Sumá los primeros {n} términos de una sucesión con a₁ = {a1} y d = 0."

pasos:
  - "Todos los términos valen {a1}: sumar {n} veces {a1} es {a1} × {n} = {a1 * n}"

explicacion: |
  Con d=0, todos los términos son iguales al primero: la suma es,
  simplemente, ese valor multiplicado por la cantidad de términos.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "avanzado"
  tags: ["series", "comparacion"]

variables:
  n: random(4, 10)
  a1_1: random(1, 20)
  d1: random(2, 10)
  an_1: a1_1 + (n - 1) * d1
  a1_2: random(1, 20)
  d2: random(2, 10)
  an_2: a1_2 + (n - 1) * d2

restricciones:
  - (n * (a1_1 + an_1) / 2) != (n * (a1_2 + an_2) / 2)

respuesta: ((n * (a1_1 + an_1) / 2) > (n * (a1_2 + an_2) / 2))
tipo: vf

enunciado: "Sumando {n} términos de cada una: ¿la serie con a₁={a1_1}, d={d1} suma más que la de a₁={a1_2}, d={d2}?"

explicacion: |
  Hay que calcular las dos sumas completas antes de poder compararlas.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "casos_especiales"]

respuesta: 5050
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto suman los números del 1 al 100?"

explicacion: |
  Es el ejemplo histórico de Gauss: 100 × 101 ÷ 2 = 5.050.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "problema"]

variables:
  a1: random(5, 20)
  d: random(2, 8)
  dias: random(5, 15)
  an: a1 + (dias - 1) * d

respuesta: dias * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "El día 1 de una colecta se juntaron {a1} kg de alimentos, y cada día se juntan {d} kg más que el anterior. Después de {dias} días, ¿cuántos kg se juntaron en total?"

explicacion: |
  Se suma toda la serie de los {dias} días, no sólo el último día.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "vocabulario"]

enunciado: "¿Cuál es la fórmula de la suma de los primeros n términos de una sucesión aritmética?"
tipo: mc
opciones_explicitas:
  - "Sₙ = n × (a₁ + aₙ) ÷ 2"
  - "Sₙ = a₁ + aₙ"
  - "Sₙ = n × a₁ × aₙ"
respuesta: "Sₙ = n × (a₁ + aₙ) ÷ 2"

explicacion: |
  Es el promedio del primer y último término, multiplicado por la
  cantidad de términos.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series"]

variables:
  a1: random(1, 50)
  d: random(2, 20)
  a2: a1 + d

respuesta: a1 + a2
tipo: input
tolerancia_abs: 0

enunciado: "Sumá los primeros 2 términos de una sucesión con a₁ = {a1} y d = {d}."

pasos:
  - "Con sólo 2 términos, la fórmula da lo mismo que sumarlos directo: {a1} + {a2} = {a1 + a2}"

explicacion: |
  Con pocos términos, la fórmula coincide con la suma directa — la
  ventaja de la fórmula se nota con series largas.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "avanzado"
  tags: ["series", "verificacion", "problema"]

variables:
  a1: random(10, 30)
  d: random(2, 8)
  filas: random(5, 15)
  an: a1 + (filas - 1) * d
  correcto: filas * (a1 + an) / 2
  error: uno_de([0, 0, 0, filas, -filas])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "Un teatro tiene {filas} filas (a₁={a1} asientos, {d} más por fila). ¿Es correcto decir que tiene {mostrado} asientos en total?"

explicacion: |
  Se vuelve a calcular la suma completa y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(5, 15)
  an: a1 + (n - 1) * d
  correcto: n * (a1 + an) / 2

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - an

enunciado: "¿Cuánto SUMAN los primeros {n} términos de una sucesión con a₁={a1}, d={d} (no sólo el último término)?"

explicacion: |
  {an} es sólo el último término (aₙ); la serie pide la suma de TODOS
  los términos, no sólo uno.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una sucesión es la lista de términos; una serie es el resultado de sumarlos todos."

explicacion: |
  Son conceptos relacionados pero distintos: la sucesión es la lista, la
  serie es la suma de esa lista.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de los primeros n términos de una sucesión aritmética se puede calcular con una fórmula directa, sin sumar término por término."

explicacion: |
  Es la idea central de todo el tema: Sₙ = n × (a₁+aₙ) ÷ 2.
```

## Sección: matrices/operaciones (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["suma"]

variables:
  a11: random(1, 20)
  a12: random(1, 20)
  a21: random(1, 20)
  a22: random(1, 20)
  b11: random(1, 20)
  b12: random(1, 20)
  b21: random(1, 20)
  b22: random(1, 20)

respuesta: a11 + b11
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Cuál es el elemento (1,1) de A + B?"

explicacion: |
  Se suma cada elemento con el de la misma posición: a11 + b11.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["suma"]

variables:
  a11: random(1, 20)
  a12: random(1, 20)
  a21: random(1, 20)
  a22: random(1, 20)
  b11: random(1, 20)
  b12: random(1, 20)
  b21: random(1, 20)
  b22: random(1, 20)

respuesta: a22 + b22
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Cuál es el elemento (2,2) de A + B?"

explicacion: |
  a22 + b22.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["resta"]

variables:
  a11: random(10, 30)
  a12: random(10, 30)
  a21: random(10, 30)
  a22: random(10, 30)
  b11: random(1, 9)
  b12: random(1, 9)
  b21: random(1, 9)
  b22: random(1, 9)

respuesta: a12 - b12
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Cuál es el elemento (1,2) de A − B?"

explicacion: |
  a12 − b12.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["resta"]

variables:
  a11: random(10, 30)
  a12: random(10, 30)
  a21: random(10, 30)
  a22: random(10, 30)
  b11: random(1, 9)
  b12: random(1, 9)
  b21: random(1, 9)
  b22: random(1, 9)

respuesta: a21 - b21
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Cuál es el elemento (2,1) de A − B?"

explicacion: |
  a21 − b21.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["escalar"]

variables:
  k: random(2, 8)
  a11: random(1, 15)
  a12: random(1, 15)
  a21: random(1, 15)
  a22: random(1, 15)

respuesta: k * a11
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]]. ¿Cuál es el elemento (1,1) de {k}·A?"

explicacion: |
  Multiplicar por un escalar multiplica cada elemento por ese número.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["escalar"]

variables:
  k: random(2, 8)
  a11: random(1, 15)
  a12: random(1, 15)
  a21: random(1, 15)
  a22: random(1, 15)

respuesta: k * a22
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]]. ¿Cuál es el elemento (2,2) de {k}·A?"

explicacion: |
  {k} × a22.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["producto"]

variables:
  a11: random(1, 10)
  a12: random(1, 10)
  a21: random(1, 10)
  a22: random(1, 10)
  b11: random(1, 10)
  b12: random(1, 10)
  b21: random(1, 10)
  b22: random(1, 10)

respuesta: a11 * b11 + a12 * b21
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Cuál es el elemento (1,1) de A · B?"

pasos:
  - "Fila 1 de A por columna 1 de B: ({a11}×{b11}) + ({a12}×{b21}) = {a11 * b11 + a12 * b21}"

explicacion: |
  Regla fila por columna: se multiplican término a término y se suma.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["producto"]

variables:
  a11: random(1, 10)
  a12: random(1, 10)
  a21: random(1, 10)
  a22: random(1, 10)
  b11: random(1, 10)
  b12: random(1, 10)
  b21: random(1, 10)
  b22: random(1, 10)

respuesta: a11 * b12 + a12 * b22
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Cuál es el elemento (1,2) de A · B?"

pasos:
  - "Fila 1 de A por columna 2 de B: ({a11}×{b12}) + ({a12}×{b22}) = {a11 * b12 + a12 * b22}"

explicacion: |
  Fila 1 de A, columna 2 de B.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["producto"]

variables:
  a11: random(1, 10)
  a12: random(1, 10)
  a21: random(1, 10)
  a22: random(1, 10)
  b11: random(1, 10)
  b12: random(1, 10)
  b21: random(1, 10)
  b22: random(1, 10)

respuesta: a21 * b11 + a22 * b21
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Cuál es el elemento (2,1) de A · B?"

explicacion: |
  Fila 2 de A, columna 1 de B: (a21×b11) + (a22×b21).
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["producto"]

variables:
  a11: random(1, 10)
  a12: random(1, 10)
  a21: random(1, 10)
  a22: random(1, 10)
  b11: random(1, 10)
  b12: random(1, 10)
  b21: random(1, 10)
  b22: random(1, 10)

respuesta: a21 * b12 + a22 * b22
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Cuál es el elemento (2,2) de A · B?"

explicacion: |
  Fila 2 de A, columna 2 de B: (a21×b12) + (a22×b22).
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["producto", "vector"]

variables:
  a11: random(1, 10)
  a12: random(1, 10)
  a21: random(1, 10)
  a22: random(1, 10)
  x1: random(1, 10)
  x2: random(1, 10)

respuesta: a11 * x1 + a12 * x2
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], v = [{x1}, {x2}]. ¿Cuál es la primera componente de A · v?"

explicacion: |
  Fila 1 de A por el vector completo: (a11×x1) + (a12×x2).
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["producto", "vector"]

variables:
  a11: random(1, 10)
  a12: random(1, 10)
  a21: random(1, 10)
  a22: random(1, 10)
  x1: random(1, 10)
  x2: random(1, 10)

respuesta: a21 * x1 + a22 * x2
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], v = [{x1}, {x2}]. ¿Cuál es la segunda componente de A · v?"

explicacion: |
  Fila 2 de A por el vector completo.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["identidad"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el elemento (1,1) de la matriz identidad 2×2?"

explicacion: |
  La diagonal principal de la identidad es siempre 1.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["identidad"]

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el elemento (1,2) de la matriz identidad 2×2?"

explicacion: |
  Fuera de la diagonal principal, la identidad tiene 0.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["identidad", "verdadero_falso"]

variables:
  a11: random(1, 20)
  a12: random(1, 20)
  a21: random(1, 20)
  a22: random(1, 20)

respuesta: ((a11 * 1 + a12 * 0) == a11)
tipo: vf

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]]. ¿El elemento (1,1) de A · I₂ es igual a {a11} (el mismo elemento (1,1) de A)?"

explicacion: |
  A · I = A: multiplicar por la identidad no cambia la matriz.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "En general, A · B es igual a B · A."

explicacion: |
  La multiplicación de matrices no es conmutativa — cambiar el orden
  suele dar un resultado distinto (y a veces ni siquiera es posible
  calcularlo, si los tamaños no coinciden al revés).
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["compatibilidad", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "¿Se puede multiplicar una matriz de 2×3 por otra de 3×2?"

explicacion: |
  Las columnas de la primera (3) coinciden con las filas de la segunda
  (3), así que sí se puede — el resultado sería de 2×2.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["compatibilidad", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "¿Se puede multiplicar una matriz de 2×3 por otra de 2×3?"

explicacion: |
  Las columnas de la primera (3) no coinciden con las filas de la
  segunda (2), así que no se puede.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["compatibilidad", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "¿Se puede sumar una matriz de 2×2 con otra de 2×3?"

explicacion: |
  Para sumar, las dos matrices tienen que tener exactamente el mismo
  tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["compatibilidad"]

variables:
  m: random(2, 6)
  n: random(2, 6)
  p: random(2, 6)

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "A es de tamaño {m}×{n} y B es de tamaño {n}×{p}. ¿Cuántas filas tiene A · B?"

explicacion: |
  El resultado tiene tantas filas como A.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["compatibilidad"]

variables:
  m: random(2, 6)
  n: random(2, 6)
  p: random(2, 6)

respuesta: p
tipo: input
tolerancia_abs: 0

enunciado: "A es de tamaño {m}×{n} y B es de tamaño {n}×{p}. ¿Cuántas columnas tiene A · B?"

explicacion: |
  El resultado tiene tantas columnas como B.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["transpuesta"]

variables:
  a11: random(1, 20)
  a12: random(1, 20)
  a21: random(1, 20)
  a22: random(1, 20)

respuesta: a21
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]]. ¿Cuál es el elemento (1,2) de Aᵀ?"

explicacion: |
  El elemento (1,2) de la transpuesta es el elemento (2,1) de la
  original: a21.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["transpuesta"]

variables:
  a11: random(1, 20)
  a12: random(1, 20)
  a21: random(1, 20)
  a22: random(1, 20)

respuesta: a12
tipo: input
tolerancia_abs: 0

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]]. ¿Cuál es el elemento (2,1) de Aᵀ?"

explicacion: |
  El elemento (2,1) de la transpuesta es el elemento (1,2) de la
  original: a12.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para sumar dos matrices, las dos tienen que tener el mismo tamaño."

explicacion: |
  La suma se hace elemento a elemento, así que necesita esa
  correspondencia exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La multiplicación de matrices se hace multiplicando los elementos que están en la misma posición, igual que en la suma."

explicacion: |
  Eso sería un error común. La multiplicación de matrices usa la regla
  fila por columna, no posición por posición.
```

```
metadata:
  materia: "matematicas"
  tema: "matrices_operaciones"
  nivel: "avanzado"
  tags: ["producto", "verificacion", "verdadero_falso"]

variables:
  a11: random(1, 8)
  a12: random(1, 8)
  a21: random(1, 8)
  a22: random(1, 8)
  b11: random(1, 8)
  b12: random(1, 8)
  b21: random(1, 8)
  b22: random(1, 8)
  c11_real: a11 * b11 + a12 * b21
  error: uno_de([0, 0, 1, -1])
  c11_propuesto: c11_real + error

respuesta: (c11_propuesto == c11_real)
tipo: vf

enunciado: "A = [[{a11}, {a12}], [{a21}, {a22}]], B = [[{b11}, {b12}], [{b21}, {b22}]]. ¿Es correcto que el elemento (1,1) de A · B sea {c11_propuesto}?"

explicacion: |
  El valor correcto es (a11×b11) + (a12×b21) = {c11_real}.
```

## Sección: series-geometricas (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "vocabulario"]

enunciado: "¿Qué es una sucesión geométrica?"
tipo: mc
opciones_explicitas:
  - "Una lista de números donde siempre se multiplica por la misma razón para pasar al siguiente"
  - "Una lista de números donde siempre se suma la misma cantidad"
  - "Una lista de números al azar"
respuesta: "Una lista de números donde siempre se multiplica por la misma razón para pasar al siguiente"

explicacion: |
  Esa cantidad fija por la que se multiplica se llama razón (r).
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  n: random(3, 6)

respuesta: a1 * (r ^ (n - 1))
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión geométrica con a₁ = {a1} y razón r = {r}, ¿cuánto vale a{n}?"

pasos:
  - "aₙ = a₁ × r^(n−1) = {a1} × {r}^{n - 1} = {a1} × {r ^ (n - 1)} = {a1 * (r ^ (n - 1))}"

explicacion: |
  Se aplica la fórmula del término general: multiplicar el primer
  término por la razón elevada a (n−1).
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 5)
  r: 2
  n: random(6, 10)

respuesta: a1 * (r ^ (n - 1))
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión geométrica con a₁ = {a1} y razón r = {r}, ¿cuánto vale a{n}?"

explicacion: |
  El crecimiento geométrico se nota más cuanto más lejano es el término.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 6)
  a2: a1 * r

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión geométrica, dos términos consecutivos son {a1} y {a2}. ¿Cuál es la razón?"

explicacion: |
  La razón es el término siguiente dividido por el anterior.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  a2: a1 * r
  a3: a2 * r
  a4: a3 * r

respuesta: verdadero
tipo: vf

enunciado: "¿Es geométrica la sucesión {a1}, {a2}, {a3}, {a4}?"

explicacion: |
  La razón entre cada par de términos consecutivos es siempre {r}.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  a2: a1 * r
  a3: a2 * r
  a4: a3 * r + 1

respuesta: falso
tipo: vf

enunciado: "¿Es geométrica la sucesión {a1}, {a2}, {a3}, {a4}?"

explicacion: |
  Los primeros pares mantienen razón {r}, pero el último par rompe esa
  proporción: no es geométrica.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre una sucesión aritmética y una geométrica?"
tipo: mc
opciones_explicitas:
  - "La aritmética suma siempre la misma diferencia; la geométrica multiplica siempre por la misma razón"
  - "No hay ninguna diferencia, son lo mismo"
  - "La geométrica sólo sirve para figuras geométricas"
respuesta: "La aritmética suma siempre la misma diferencia; la geométrica multiplica siempre por la misma razón"

explicacion: |
  Son dos formas distintas de generar el siguiente término.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: 2
  n: random(3, 8)

respuesta: a1 * ((r ^ n) - 1) / (r - 1)
tipo: input
tolerancia_abs: 0.01

enunciado: "Sumá los primeros {n} términos de una sucesión geométrica con a₁ = {a1} y r = {r}."

pasos:
  - "Sₙ = a₁ × (rⁿ−1) ÷ (r−1) = {a1} × ({r}^{n}−1) ÷ ({r}−1) = {a1 * ((r ^ n) - 1) / (r - 1)}"

explicacion: |
  Se aplica la fórmula de la suma de una serie geométrica finita.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 5)
  r: 3
  n: random(3, 6)

respuesta: a1 * ((r ^ n) - 1) / (r - 1)
tipo: input
tolerancia_abs: 0.01

enunciado: "Sumá los primeros {n} términos de una sucesión geométrica con a₁ = {a1} y r = {r}."

explicacion: |
  El procedimiento es el mismo con cualquier razón (distinta de 1).
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas", "verificacion"]

variables:
  a1: random(1, 10)
  r: 2
  n: random(3, 6)
  correcto: a1 * ((r ^ n) - 1) / (r - 1)
  error: uno_de([0, 0, 0, a1, -a1])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculada esta suma? Los primeros {n} términos (a₁={a1}, r={r}) suman {mostrado}."

explicacion: |
  Se vuelve a aplicar la fórmula y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  n: random(3, 6)
  correcto: a1 * (r ^ (n - 1))

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a1 * r * n
  - a1 + (r ^ (n - 1))

enunciado: "En una sucesión geométrica con a₁={a1}, r={r}, ¿cuánto vale a{n}?"

explicacion: |
  Las otras opciones confunden multiplicar por r elevado al exponente con
  multiplicar por r y n, o mezclan suma con potencia.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  a2: a1 * r
  a4: a1 * (r ^ 3)

tipo: completar
enunciado: "Completá el término que falta: {a1}, {a2}, ___, {a4}."
respuestas_validas:
  - a1 * (r ^ 2)

explicacion: |
  El término que falta sigue multiplicando por la misma razón r.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas", "problema"]

variables:
  inicial: random(2, 20)
  horas: random(3, 8)

respuesta: inicial * (2 ^ horas)
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {inicial} bacterias se duplica cada hora. ¿Cuántas bacterias hay después de {horas} horas?"

pasos:
  - "Es una sucesión geométrica con r=2: {inicial} × 2^{horas} = {inicial * (2 ^ horas)}"

explicacion: |
  Duplicarse cada hora es multiplicar por 2 en cada paso: razón
  geométrica r=2.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas", "problema"]

variables:
  capital: random(1000, 5000)
  periodos: random(2, 5)

respuesta: capital * (1.1 ^ periodos)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un capital de ${capital} crece un 10% cada período. ¿Cuánto queda después de {periodos} períodos?"

pasos:
  - "Cada período se multiplica por 1,1: {capital} × 1,1^{periodos} = {capital * (1.1 ^ periodos)}"

explicacion: |
  El interés compuesto es, exactamente, una sucesión geométrica con razón
  (1 + tasa).
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas", "problema"]

variables:
  altura_inicial: random(100, 500)
  rebotes: random(2, 4)

respuesta: altura_inicial * (0.5 ^ rebotes)
tipo: input
tolerancia_abs: 0.1

enunciado: "Una pelota cae desde {altura_inicial} cm, y en cada rebote alcanza la mitad de la altura anterior. ¿A qué altura llega en el rebote número {rebotes}?"

pasos:
  - "Razón r=0,5: {altura_inicial} × 0,5^{rebotes} = {altura_inicial * (0.5 ^ rebotes)}"

explicacion: |
  Con razón menor a 1, la sucesión geométrica decrece en vez de crecer.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas"]

variables:
  a1: random(50, 200)
  n: random(2, 4)

respuesta: a1 * (0.5 ^ (n - 1))
tipo: input
tolerancia_abs: 0.1

enunciado: "En una sucesión geométrica con a₁ = {a1} y r = 0,5, ¿cuánto vale a{n}?"

explicacion: |
  La fórmula funciona igual con razones menores a 1: el resultado va
  bajando en vez de subir.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Con el mismo punto de partida, una sucesión geométrica (con razón mayor a 1) termina superando a una aritmética, sin importar cuán grande sea la diferencia de la aritmética."

explicacion: |
  El crecimiento exponencial siempre "gana" al lineal a largo plazo,
  aunque al principio la aritmética pueda ir adelante.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En una sucesión geométrica, la razón entre cualquier par de términos consecutivos es siempre la misma."

explicacion: |
  Es la propia definición de sucesión geométrica.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "orden"]

tipo: ordenar
enunciado: "Ordená estos términos de una sucesión geométrica (a₁=2, r=3) de menor a mayor."
opciones_explicitas:
  - "54"
  - "2"
  - "18"
  - "6"
respuesta_orden: ["2", "6", "18", "54"]

explicacion: |
  2, 2×3=6, 6×3=18, 18×3=54: con razón mayor a 1, ya están en orden
  creciente por cómo se construyen.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  n: random(3, 5)
  an: a1 * (r ^ (n - 1))

respuesta: a1
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión geométrica con r = {r}, el término {n} vale {an} (a{n} = {an}). ¿Cuál es a₁?"

pasos:
  - "a₁ = a{n} ÷ r^(n−1) = {an} ÷ {r}^{n - 1} = {an / (r ^ (n - 1))}"

explicacion: |
  Se despeja a₁ de la fórmula del término general.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si la razón de una sucesión geométrica está entre -1 y 1 (sin ser 0), la suma de TODOS sus infinitos términos da un resultado finito."

explicacion: |
  Es contraintuitivo, pero pasa porque cada término agregado es cada vez
  más chico: la suma converge a a₁ ÷ (1−r).
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas", "casos_especiales"]

variables:
  a1: random(2, 10)
  n: random(2, 5)

respuesta: a1 * ((-2) ^ (n - 1))
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión geométrica con a₁ = {a1} y r = -2, ¿cuánto vale a{n}?"

explicacion: |
  Con razón negativa, los signos de los términos van alternando entre
  positivo y negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas", "comparacion"]

variables:
  r1: random(2, 5)
  r2: random(2, 5)

restricciones:
  - r1 != r2

respuesta: (r1 > r2)
tipo: vf

enunciado: "Dos sucesiones geométricas empiezan igual (mismo a₁). Una tiene razón {r1} y la otra {r2}. Después de varios términos, ¿la primera va a estar por delante?"

explicacion: |
  A mayor razón (siendo ambas mayores a 1), más rápido crece la
  sucesión.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas", "problema"]

variables:
  inicial: random(2, 15)
  ciclos: random(3, 6)

respuesta: inicial * (3 ^ ciclos)
tipo: input
tolerancia_abs: 0

enunciado: "Un cultivo de {inicial} bacterias se triplica en cada ciclo. ¿Cuántas bacterias hay después de {ciclos} ciclos?"

explicacion: |
  Triplicarse es multiplicar por 3 en cada paso: razón geométrica r=3.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "vocabulario"]

enunciado: "¿Cuál es la fórmula del término general de una sucesión geométrica?"
tipo: mc
opciones_explicitas:
  - "aₙ = a₁ × r^(n−1)"
  - "aₙ = a₁ + (n−1)×r"
  - "aₙ = a₁ × n × r"
respuesta: "aₙ = a₁ × r^(n−1)"

explicacion: |
  La segunda opción es la fórmula de la sucesión ARITMÉTICA, no la
  geométrica.
```

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una sucesión geométrica es una lista de números donde cada uno se obtiene multiplicando siempre por la misma razón al anterior."

explicacion: |
  Es la idea central de todo el tema, y el puente hacia el crecimiento
  exponencial que se profundiza en Álgebra.
```

