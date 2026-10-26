# Matemática — Regla de tres inversa (cuestionario, 24 preguntas VBLang)

> Tema: `N10` (mitad). Ver `teoria.md` en esta misma carpeta.

---

### 1 — Resolver una regla de tres inversa (abstracta)

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

### 2 — Problema: obreros y días

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

### 3 — Problema: velocidad y tiempo (distancia fija)

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

### 4 — Problema: repartir un total entre más personas

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

### 5 — Problema: canillas llenando un tanque

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

### 6 — Problema: máquinas fabricando lo mismo

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

### 7 — Reconocer una relación inversa

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

### 8 — Reconocer que un caso NO es inverso

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

### 9 — El criterio para reconocer la regla inversa

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

### 10 — Qué se mantiene constante en la regla inversa

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

### 11 — Armar la fórmula correcta

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

### 12 — Verificar una regla de tres inversa (con error a veces)

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

### 13 — Completar el término que falta

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

### 14 — Problema: repartir trabajo entre más personas

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

### 15 — Elegir entre fórmula directa e inversa

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

### 16 — Problema: velocidad de dos vehículos

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

### 17 — Problema: días de comida para animales

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

### 18 — La regla inversa NO es "al revés en todo"

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

### 19 — Ordenar resultados de reglas de tres inversas

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

### 20 — Problema: grifos y tiempo de vaciado

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

### 21 — Distinguir directa de inversa en un enunciado

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

### 22 — El producto se mantiene constante (verdadero/falso)

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

### 23 — Elegir la fórmula inversa correcta

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

### 24 — Qué es la regla de tres inversa (cierre)

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
