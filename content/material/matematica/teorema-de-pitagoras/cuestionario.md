# Matemática — Teorema de Pitágoras (cuestionario, 26 preguntas VBLang)

> Tema: `M6`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Enunciado del teorema

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "basico"
  tags: ["pitagoras", "vocabulario"]

enunciado: "¿Qué dice el teorema de Pitágoras?"
tipo: mc
opciones_explicitas:
  - "En un triángulo rectángulo, la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa"
  - "En cualquier triángulo, la suma de los lados es igual al perímetro"
  - "En un triángulo rectángulo, los tres lados miden lo mismo"
respuesta: "En un triángulo rectángulo, la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa"

explicacion: |
  a² + b² = c², con c la hipotenusa.
```

### 2 — Catetos e hipotenusa

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "basico"
  tags: ["pitagoras", "vocabulario"]

enunciado: "En un triángulo rectángulo, ¿cuál es la hipotenusa?"
tipo: mc
opciones_explicitas:
  - "El lado opuesto al ángulo recto"
  - "Cualquiera de los dos lados que forman el ángulo recto"
  - "El lado más corto"
respuesta: "El lado opuesto al ángulo recto"

explicacion: |
  Los otros dos lados (los que forman el ángulo recto) son los catetos.
```

### 3 — La hipotenusa es siempre el lado más largo

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "basico"
  tags: ["pitagoras"]

respuesta: verdadero
tipo: vf

enunciado: "En un triángulo rectángulo, la hipotenusa es siempre el lado más largo de los tres."

explicacion: |
  Es el lado opuesto al ángulo más grande (90°), y a mayor ángulo
  opuesto, mayor lado.
```

### 4 — Completar: fórmula del teorema

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "basico"
  tags: ["pitagoras", "completar"]

tipo: completar
enunciado: "Completá la fórmula del teorema de Pitágoras: a² + b² = ___²."
respuestas_validas:
  - "c"

explicacion: |
  c es, por convención, la hipotenusa.
```

### 5 — El teorema sólo aplica a triángulos rectángulos

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema de Pitágoras, en su forma a² + b² = c², sólo se cumple en triángulos rectángulos."

explicacion: |
  En un triángulo sin ángulo recto esa igualdad no se cumple.
```

### 6 — Problema: hallar la hipotenusa (redondeando)

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "problema"]

variables:
  a: random(3, 15)
  b: random(3, 15)

respuesta: redondear(sqrt(a * a + b * b), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un triángulo rectángulo tiene catetos de {a} cm y {b} cm. ¿Cuánto mide la hipotenusa? Redondeá a 2 decimales."

pasos:
  - "{a}² + {b}² = {a * a} + {b * b} = {a * a + b * b}"
  - "√{a * a + b * b} = {redondear(sqrt(a * a + b * b), 2)} cm"

explicacion: |
  Se suman los cuadrados de los catetos y se saca raíz cuadrada.
```

### 7 — Problema: hallar un cateto (redondeando)

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "problema"]

variables:
  a: random(4, 12)
  c: random(a + 3, 25)

respuesta: redondear(sqrt(c * c - a * a), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un triángulo rectángulo tiene un cateto de {a} cm y una hipotenusa de {c} cm. ¿Cuánto mide el otro cateto? Redondeá a 2 decimales."

pasos:
  - "{c}² − {a}² = {c * c} − {a * a} = {c * c - a * a}"
  - "√{c * c - a * a} = {redondear(sqrt(c * c - a * a), 2)} cm"

explicacion: |
  Se resta el cuadrado del cateto conocido al cuadrado de la hipotenusa,
  y se saca raíz cuadrada. Nunca al revés: la hipotenusa es siempre el
  lado más largo.
```

### 8 — Problema: hipotenusa con terna 3-4-5 escalada

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "problema", "terna_pitagorica"]

variables:
  k: random(1, 10)
  cateto1: 3 * k
  cateto2: 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene catetos de {cateto1} cm y {cateto2} cm. ¿Cuánto mide la hipotenusa?"

pasos:
  - "{cateto1}² + {cateto2}² = {cateto1 * cateto1} + {cateto2 * cateto2} = {cateto1 * cateto1 + cateto2 * cateto2}"
  - "√{cateto1 * cateto1 + cateto2 * cateto2} = {5 * k} cm"

explicacion: |
  Es la terna pitagórica 3-4-5 escalada por {k}: da una hipotenusa
  exacta, sin decimales.
```

### 9 — Problema: hipotenusa con terna 5-12-13 escalada

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "problema", "terna_pitagorica"]

variables:
  k: random(1, 8)
  cateto1: 5 * k
  cateto2: 12 * k

respuesta: 13 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene catetos de {cateto1} cm y {cateto2} cm. ¿Cuánto mide la hipotenusa?"

pasos:
  - "{cateto1}² + {cateto2}² = {cateto1 * cateto1 + cateto2 * cateto2}"
  - "√{cateto1 * cateto1 + cateto2 * cateto2} = {13 * k} cm"

explicacion: |
  Es la terna pitagórica 5-12-13 escalada por {k}.
```

### 10 — Problema: cateto faltante con terna 8-15-17 escalada

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "avanzado"
  tags: ["pitagoras", "problema", "terna_pitagorica"]

variables:
  k: random(1, 6)
  cateto1: 8 * k
  hipotenusa: 17 * k

respuesta: 15 * k
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene un cateto de {cateto1} cm y una hipotenusa de {hipotenusa} cm. ¿Cuánto mide el otro cateto?"

pasos:
  - "{hipotenusa}² − {cateto1}² = {hipotenusa * hipotenusa - cateto1 * cateto1}"
  - "√{hipotenusa * hipotenusa - cateto1 * cateto1} = {15 * k} cm"

explicacion: |
  Es la terna pitagórica 8-15-17 escalada por {k}.
```

### 11 — Qué es el recíproco del teorema

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "avanzado"
  tags: ["pitagoras", "vocabulario"]

enunciado: "¿Qué dice el recíproco del teorema de Pitágoras?"
tipo: mc
opciones_explicitas:
  - "Si en un triángulo se cumple a² + b² = c² (con c el lado más largo), ese triángulo es rectángulo"
  - "Todo triángulo cumple a² + b² = c², sea rectángulo o no"
  - "Si un triángulo es rectángulo, sus tres lados son siempre enteros"
respuesta: "Si en un triángulo se cumple a² + b² = c² (con c el lado más largo), ese triángulo es rectángulo"

explicacion: |
  Permite detectar un ángulo recto sabiendo sólo las longitudes de los
  lados, sin medir ningún ángulo.
```

### 12 — Problema: verificar si es rectángulo (caso que sí cumple)

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "avanzado"
  tags: ["pitagoras", "problema"]

variables:
  k: random(1, 8)

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo tiene lados de {6 * k} cm, {8 * k} cm y {10 * k} cm. ¿Es un triángulo rectángulo?"

explicacion: |
  ({6 * k})² + ({8 * k})² = {(6 * k) * (6 * k) + (8 * k) * (8 * k)}, que
  es igual a ({10 * k})² = {(10 * k) * (10 * k)}: se cumple el recíproco
  del teorema, así que sí es rectángulo (6-8-10 es la terna 3-4-5
  escalada por 2).
```

### 13 — Problema: verificar si es rectángulo (caso que no cumple)

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "avanzado"
  tags: ["pitagoras", "problema"]

variables:
  a: random(5, 10)
  b: random(5, 10)
  c: a + b + random(1, 3)

respuesta: falso
tipo: vf

enunciado: "Un triángulo tiene lados de {a} cm, {b} cm y {c} cm. ¿Es un triángulo rectángulo?"

explicacion: |
  {a}² + {b}² = {a * a + b * b}, que NO es igual a {c}² = {c * c}: no se
  cumple el recíproco del teorema, así que no es rectángulo (de hecho,
  con {c} ≥ {a} + {b} ni siquiera se puede formar un triángulo).
```

### 14 — Aplicación real: la escalera

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "basico"
  tags: ["pitagoras", "vocabulario"]

enunciado: "¿Por qué el teorema de Pitágoras sirve para calcular la longitud de una escalera apoyada contra una pared?"
tipo: mc
opciones_explicitas:
  - "Porque la pared, el piso y la escalera forman un triángulo rectángulo: la escalera es la hipotenusa"
  - "Porque toda escalera mide exactamente lo mismo que la pared"
  - "No tiene relación: es sólo una coincidencia de unidades"
respuesta: "Porque la pared, el piso y la escalera forman un triángulo rectángulo: la escalera es la hipotenusa"

explicacion: |
  La altura en la pared y la distancia de la base a la pared son los dos
  catetos (perpendiculares entre sí).
```

### 15 — Problema real: longitud de una escalera

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "problema"]

variables:
  k: random(1, 5)
  altura: 3 * k
  base: 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Una escalera se apoya contra una pared: llega hasta {altura} m de altura, con la base a {base} m de la pared. ¿Cuánto mide la escalera?"

pasos:
  - "{altura}² + {base}² = {altura * altura + base * base}"
  - "√{altura * altura + base * base} = {5 * k} m"

explicacion: |
  La escalera es la hipotenusa del triángulo rectángulo formado por la
  pared y el piso.
```

### 16 — Problema real: diagonal de una pantalla

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "problema"]

variables:
  k: random(2, 8)
  ancho: 12 * k
  alto: 5 * k

respuesta: 13 * k
tipo: input
tolerancia_abs: 0

enunciado: "Una pantalla rectangular mide {ancho} cm de ancho y {alto} cm de alto. ¿Cuánto mide su diagonal (la medida con la que se anuncian las pantallas, en pulgadas o cm)?"

pasos:
  - "{ancho}² + {alto}² = {ancho * ancho + alto * alto}"
  - "√{ancho * ancho + alto * alto} = {13 * k} cm"

explicacion: |
  La diagonal es la hipotenusa del triángulo rectángulo formado por el
  ancho y el alto de la pantalla.
```

### 17 — Completar: terna pitagórica clásica 3-4-_

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "basico"
  tags: ["pitagoras", "completar", "terna_pitagorica"]

tipo: completar
enunciado: "Completá la terna pitagórica clásica: 3, 4, ___."
respuestas_validas:
  - "5"

explicacion: |
  3² + 4² = 9 + 16 = 25 = 5².
```

### 18 — Completar: terna pitagórica clásica 5-12-_

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "completar", "terna_pitagorica"]

tipo: completar
enunciado: "Completá la terna pitagórica clásica: 5, 12, ___."
respuestas_validas:
  - "13"

explicacion: |
  5² + 12² = 25 + 144 = 169 = 13².
```

### 19 — Ordenar: pasos para hallar la hipotenusa

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "ordenar"]

enunciado: "Ordená los pasos para calcular la hipotenusa de un triángulo rectángulo, conociendo los dos catetos."
tipo: ordenar
opciones_explicitas:
  - "Sacar raíz cuadrada de esa suma"
  - "Elevar al cuadrado cada uno de los catetos"
  - "Sumar los dos cuadrados"
respuesta_orden: ["Elevar al cuadrado cada uno de los catetos", "Sumar los dos cuadrados", "Sacar raíz cuadrada de esa suma"]
explicacion: |
  c = √(a² + b²), en ese orden.
```

### 20 — Ordenar: pasos para hallar un cateto

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "ordenar"]

enunciado: "Ordená los pasos para calcular un cateto, conociendo la hipotenusa y el otro cateto."
tipo: ordenar
opciones_explicitas:
  - "Sacar raíz cuadrada de esa resta"
  - "Elevar al cuadrado la hipotenusa y el cateto conocido"
  - "Restar el cuadrado del cateto al cuadrado de la hipotenusa"
respuesta_orden: ["Elevar al cuadrado la hipotenusa y el cateto conocido", "Restar el cuadrado del cateto al cuadrado de la hipotenusa", "Sacar raíz cuadrada de esa resta"]
explicacion: |
  a = √(c² − b²): siempre se resta del cuadrado de la hipotenusa, nunca
  al revés.
```

### 21 — Por qué se usa raíz cuadrada al final

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "avanzado"
  tags: ["pitagoras"]

enunciado: "En la fórmula c = √(a² + b²), ¿por qué hace falta la raíz cuadrada al final?"
tipo: mc
opciones_explicitas:
  - "Porque el teorema relaciona los cuadrados de los lados, no los lados directamente, y hay que 'deshacer' ese cuadrado"
  - "Es una convención sin motivo matemático"
  - "Porque la hipotenusa siempre es un número irracional"
respuesta: "Porque el teorema relaciona los cuadrados de los lados, no los lados directamente, y hay que 'deshacer' ese cuadrado"

explicacion: |
  a² + b² da el cuadrado de la hipotenusa, no la hipotenusa: la raíz
  cuadrada es la operación inversa que despeja c.
```

### 22 — Problema: distancia entre dos puntos en una cuadrícula

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "avanzado"
  tags: ["pitagoras", "problema"]

variables:
  k: random(1, 6)
  dx: 3 * k
  dy: 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Dos puntos de una cuadrícula están a {dx} casilleros de distancia horizontal y {dy} casilleros de distancia vertical. ¿Cuál es la distancia en línea recta entre ellos?"

pasos:
  - "{dx}² + {dy}² = {dx * dx + dy * dy}"
  - "√{dx * dx + dy * dy} = {5 * k} casilleros"

explicacion: |
  Las distancias horizontal y vertical son los catetos; la distancia en
  línea recta es la hipotenusa.
```

### 23 — El teorema no se cumple en un triángulo cualquiera

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras"]

respuesta: falso
tipo: vf

enunciado: "En un triángulo que NO es rectángulo, la suma de los cuadrados de dos lados cualesquiera siempre es igual al cuadrado del tercero."

explicacion: |
  Esa igualdad es exclusiva de los triángulos rectángulos — es, de
  hecho, la forma de detectar si un triángulo lo es (el recíproco del
  teorema).
```

### 24 — Problema: perímetro de un triángulo rectángulo

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "problema"]

variables:
  k: random(1, 9)
  cateto1: 3 * k
  cateto2: 4 * k
  hipotenusa: 5 * k

respuesta: cateto1 + cateto2 + hipotenusa
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene catetos de {cateto1} cm y {cateto2} cm. ¿Cuál es su perímetro?"

pasos:
  - "Hipotenusa: √({cateto1}² + {cateto2}²) = {hipotenusa} cm"
  - "Perímetro: {cateto1} + {cateto2} + {hipotenusa} = {cateto1 + cateto2 + hipotenusa} cm"

explicacion: |
  Primero hay que hallar la hipotenusa con el teorema, y recién después
  sumar los tres lados.
```

### 25 — La regla práctica del 3-4-5

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "intermedio"
  tags: ["pitagoras", "vocabulario"]

enunciado: "Un albañil marca 3 m en una dirección y 4 m en otra, y ajusta hasta que la diagonal entre esos dos puntos mida exactamente 5 m. ¿Para qué le sirve eso?"
tipo: mc
opciones_explicitas:
  - "Para asegurar un ángulo de 90° exacto entre las dos direcciones, sin usar transportador"
  - "Para calcular cuánto material va a necesitar"
  - "Es sólo una tradición sin utilidad práctica"
respuesta: "Para asegurar un ángulo de 90° exacto entre las dos direcciones, sin usar transportador"

explicacion: |
  Por el recíproco del teorema: si 3² + 4² = 5², el ángulo entre los
  lados de 3 y 4 es necesariamente recto.
```

### 26 — Cierre: para qué sirve el teorema

```
metadata:
  materia: "matematicas"
  tema: "teorema_de_pitagoras"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el teorema de Pitágoras en la práctica?"
tipo: mc
opciones_explicitas:
  - "Para calcular una distancia 'en diagonal' a partir de dos distancias perpendiculares conocidas"
  - "Sólo para calcular áreas de cuadrados"
  - "Sólo se usa en triángulos equiláteros"
respuesta: "Para calcular una distancia 'en diagonal' a partir de dos distancias perpendiculares conocidas"

explicacion: |
  Desde la longitud de una escalera hasta la diagonal de una pantalla o
  la distancia entre dos puntos: siempre que hay dos direcciones
  perpendiculares, aparece el teorema.
```
