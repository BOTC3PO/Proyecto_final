# Matemática — Secciones cónicas: circunferencia (cuestionario, 26 preguntas VBLang)

> Tema: `GA7`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué son las secciones cónicas

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "basico"
  tags: ["conicas", "vocabulario"]

enunciado: "¿Qué son las secciones cónicas?"
tipo: mc
opciones_explicitas:
  - "Las curvas que se obtienen al cortar un cono con un plano: circunferencia, elipse, parábola e hipérbola"
  - "Otro nombre para los triángulos rectángulos"
  - "Un tipo de ecuación de primer grado"
respuesta: "Las curvas que se obtienen al cortar un cono con un plano: circunferencia, elipse, parábola e hipérbola"

explicacion: |
  Este módulo cubre sólo la circunferencia, la más simple de las
  cuatro.
```

### 2 — Definición de circunferencia

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "basico"
  tags: ["conicas", "vocabulario"]

enunciado: "¿Qué es una circunferencia, en términos de distancia?"
tipo: mc
opciones_explicitas:
  - "El conjunto de todos los puntos que están a la misma distancia (el radio) de un punto fijo (el centro)"
  - "El conjunto de puntos que están a distancia 0 del centro"
  - "Una recta que pasa por el centro"
respuesta: "El conjunto de todos los puntos que están a la misma distancia (el radio) de un punto fijo (el centro)"

explicacion: |
  Es la misma definición geométrica de siempre, ahora escrita como
  ecuación.
```

### 3 — Completar: ecuación canónica de la circunferencia

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "completar"]

tipo: completar
enunciado: "Completá la ecuación canónica de la circunferencia: (x − h)² + (y − k)² = ___."
respuestas_validas:
  - "r²"
  - "r^2"

explicacion: |
  El lado derecho es el radio al cuadrado.
```

### 4 — De dónde sale la ecuación de la circunferencia

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "vocabulario"]

enunciado: "¿De qué fórmula ya conocida sale la ecuación de la circunferencia?"
tipo: mc
opciones_explicitas:
  - "De la fórmula de distancia entre dos puntos, igualada al radio y elevada al cuadrado"
  - "De la fórmula del área del círculo"
  - "No tiene relación con ninguna fórmula anterior"
respuesta: "De la fórmula de distancia entre dos puntos, igualada al radio y elevada al cuadrado"

explicacion: |
  √((x−h)² + (y−k)²) = r, elevado al cuadrado en ambos lados.
```

### 5 — Problema: ecuación de una circunferencia centrada en el origen

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "problema"]

variables:
  r: uno_de([3, 4, 5, 6, 7, 8])

respuesta: r * r
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia está centrada en el origen y tiene radio {r}. En su ecuación x² + y² = ___, ¿qué número va del lado derecho?"

pasos:
  - "{r}² = {r * r}"

explicacion: |
  El lado derecho es siempre el radio al cuadrado, no el radio.
```

### 6 — Problema: leer el radio desde la ecuación

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "problema"]

variables:
  r: uno_de([3, 4, 5, 6, 7, 8, 9, 10])

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia tiene ecuación x² + y² = {r * r}. ¿Cuál es su radio?"

pasos:
  - "√{r * r} = {r}"

explicacion: |
  El radio es la raíz cuadrada del número del lado derecho, no el
  número mismo.
```

### 7 — Problema: leer el centro desde la ecuación (caso positivo)

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "problema"]

variables:
  h: random(1, 10)
  k: random(1, 10)
  r: uno_de([3, 4, 5])

respuesta: h
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia tiene ecuación (x − {h})² + (y − {k})² = {r * r}. ¿Cuál es la abscisa (h) de su centro?"

explicacion: |
  Se lee directo del signo dentro del paréntesis: (x − h)² tiene h = {h}.
```

### 8 — Problema: leer el centro desde la ecuación (con signo negativo)

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "problema"]

variables:
  h: random(1, 10)
  k: random(1, 10)
  r: uno_de([3, 4, 5])

respuesta: 0 - h
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia tiene ecuación (x + {h})² + (y − {k})² = {r * r}. ¿Cuál es la abscisa (h) de su centro?"

pasos:
  - "(x + {h})² es lo mismo que (x − (-{h}))²: el centro tiene h = -{h}"

explicacion: |
  Un '+' dentro del paréntesis corresponde a una coordenada NEGATIVA del
  centro — es un error común leerlo al revés.
```

### 9 — Problema: escribir la ecuación dado centro y radio

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "problema"]

variables:
  h: random(1, 8)
  k: random(1, 8)
  r: uno_de([3, 4, 5, 6])

respuesta: r * r
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia tiene centro ({h}, {k}) y radio {r}. En su ecuación (x − {h})² + (y − {k})² = ___, ¿qué número va del lado derecho?"

pasos:
  - "{r}² = {r * r}"

explicacion: |
  Siempre el radio al cuadrado, sin importar dónde esté el centro.
```

### 10 — Problema: verificar si un punto está sobre la circunferencia

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "problema"]

variables:
  k: random(1, 6)
  cateto1: 3 * k
  cateto2: 4 * k

respuesta: verdadero
tipo: vf

enunciado: "Una circunferencia está centrada en el origen y tiene radio {5 * k}. ¿El punto ({cateto1}, {cateto2}) está sobre esa circunferencia?"

explicacion: |
  {cateto1}² + {cateto2}² = {(cateto1 * cateto1) + (cateto2 * cateto2)},
  que es exactamente {5 * k}² = {(5 * k) * (5 * k)}: el punto cumple la
  ecuación, está sobre la circunferencia (terna pitagórica 3-4-5 escalada).
```

### 11 — Problema: punto dentro de la circunferencia

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "problema"]

variables:
  r: uno_de([5, 10, 15])

respuesta: verdadero
tipo: vf

enunciado: "Una circunferencia está centrada en el origen y tiene radio {r}. ¿El punto (1, 1) está DENTRO de esa circunferencia?"

explicacion: |
  1² + 1² = 2, que es mucho menor que {r}² = {r * r}: el punto está
  dentro.
```

### 12 — Problema: punto fuera de la circunferencia

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "problema"]

variables:
  r: uno_de([2, 3])
  x: r + random(3, 6)

respuesta: verdadero
tipo: vf

enunciado: "Una circunferencia está centrada en el origen y tiene radio {r}. ¿El punto ({x}, 0) está FUERA de esa circunferencia?"

explicacion: |
  {x}² + 0² = {x * x}, que es mayor que {r}² = {r * r}: el punto está
  fuera.
```

### 13 — Menor que r² significa dentro

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "vocabulario"]

enunciado: "Si para un punto (x, y), el valor de (x−h)² + (y−k)² es MENOR que r², ¿dónde está ese punto respecto de la circunferencia?"
tipo: mc
opciones_explicitas:
  - "Dentro de la circunferencia"
  - "Sobre la circunferencia"
  - "Fuera de la circunferencia"
respuesta: "Dentro de la circunferencia"

explicacion: |
  Está más cerca del centro que el propio radio.
```

### 14 — Igual a r² significa sobre la circunferencia

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "vocabulario"]

enunciado: "Si para un punto (x, y), el valor de (x−h)² + (y−k)² es EXACTAMENTE igual a r², ¿dónde está ese punto respecto de la circunferencia?"
tipo: mc
opciones_explicitas:
  - "Sobre la circunferencia"
  - "Dentro de la circunferencia"
  - "Fuera de la circunferencia"
respuesta: "Sobre la circunferencia"

explicacion: |
  Cumple exactamente la ecuación: está a distancia r del centro, ni más
  ni menos.
```

### 15 — Mayor que r² significa fuera

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "vocabulario"]

enunciado: "Si para un punto (x, y), el valor de (x−h)² + (y−k)² es MAYOR que r², ¿dónde está ese punto respecto de la circunferencia?"
tipo: mc
opciones_explicitas:
  - "Fuera de la circunferencia"
  - "Dentro de la circunferencia"
  - "Sobre la circunferencia"
respuesta: "Fuera de la circunferencia"

explicacion: |
  Está más lejos del centro que el propio radio.
```

### 16 — La ecuación x² + y² = r² es un caso particular

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación x² + y² = r² es un caso particular de la ecuación canónica, cuando el centro está en el origen (0, 0)."

explicacion: |
  Con h = 0 y k = 0, (x−0)² + (y−0)² se simplifica a x² + y².
```

### 17 — El radio es la raíz cuadrada del lado derecho

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas"]

respuesta: verdadero
tipo: vf

enunciado: "En la ecuación de una circunferencia, el radio es la raíz cuadrada del número del lado derecho, no el número mismo."

explicacion: |
  El lado derecho es r² (radio al cuadrado), no r.
```

### 18 — Error común: leer el radio sin sacar raíz

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "vocabulario"]

enunciado: "Una circunferencia tiene ecuación x² + y² = 25. ¿Cuál es el error más común al leer su radio?"
tipo: mc
opciones_explicitas:
  - "Decir que el radio es 25, en vez de sacar la raíz cuadrada y decir que es 5"
  - "Decir que el centro está en (25, 0)"
  - "Pensar que no tiene centro"
respuesta: "Decir que el radio es 25, en vez de sacar la raíz cuadrada y decir que es 5"

explicacion: |
  25 es r², no r: el radio real es √25 = 5.
```

### 19 — Ordenar: pasos para deducir la ecuación de la circunferencia

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "ordenar"]

enunciado: "Ordená los pasos que llevan de la definición de circunferencia a su ecuación."
tipo: ordenar
opciones_explicitas:
  - "Elevar ambos lados al cuadrado para eliminar la raíz"
  - "Plantear que la distancia entre un punto (x, y) y el centro (h, k) es igual al radio r"
  - "Escribir esa distancia con la fórmula de distancia entre dos puntos"
respuesta_orden: ["Plantear que la distancia entre un punto (x, y) y el centro (h, k) es igual al radio r", "Escribir esa distancia con la fórmula de distancia entre dos puntos", "Elevar ambos lados al cuadrado para eliminar la raíz"]
explicacion: |
  El resultado final es (x−h)² + (y−k)² = r².
```

### 20 — Un signo '+' en el paréntesis da centro negativo

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas"]

respuesta: verdadero
tipo: vf

enunciado: "En una ecuación como (x + 3)² + (y − 2)² = r², la coordenada h del centro es -3, no 3."

explicacion: |
  La forma canónica siempre resta h: (x + 3)² es (x − (−3))².
```

### 21 — Problema: escribir la ecuación completa

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "intermedio"
  tags: ["conicas", "problema"]

variables:
  h: random(-5, 5)
  k: random(-5, 5)
  r: uno_de([2, 3, 4])

respuesta: r * r
tipo: input
tolerancia_abs: 0

enunciado: "Se quiere escribir la ecuación de una circunferencia con centro ({h}, {k}) y radio {r}. ¿Qué valor va del lado derecho de la ecuación?"

pasos:
  - "{r}² = {r * r}"

explicacion: |
  El signo de h y k no afecta al lado derecho, que siempre es r².
```

### 22 — El DSL de este sistema sólo evalúa circunferencia

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "basico"
  tags: ["conicas"]

respuesta: verdadero
tipo: vf

enunciado: "De las cuatro secciones cónicas (circunferencia, elipse, parábola, hipérbola), este módulo cubre únicamente la circunferencia."

explicacion: |
  Las otras tres quedan para cuando se necesiten en el mapa de temas.
```

### 23 — Distancia al centro elevada al cuadrado

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "vocabulario"]

enunciado: "¿Por qué la ecuación de la circunferencia usa (x−h)² + (y−k)² en vez de la raíz cuadrada de esa suma?"
tipo: mc
opciones_explicitas:
  - "Porque se elevaron ambos lados al cuadrado para eliminar la raíz de la fórmula de distancia"
  - "Porque las raíces cuadradas no existen en geometría analítica"
  - "Es sólo una convención sin motivo matemático"
respuesta: "Porque se elevaron ambos lados al cuadrado para eliminar la raíz de la fórmula de distancia"

explicacion: |
  Es más simple trabajar con la ecuación sin raíz, comparando cuadrados.
```

### 24 — Problema: circunferencia con radio como terna pitagórica

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas", "problema"]

variables:
  k: random(1, 5)

respuesta: (13 * k) * (13 * k)
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia centrada en el origen pasa por el punto ({5 * k}, {12 * k}). ¿Qué número va del lado derecho de su ecuación x² + y² = ___?"

pasos:
  - "Radio: √(({5 * k})² + ({12 * k})²) = {13 * k}"
  - "Lado derecho: {13 * k}² = {(13 * k) * (13 * k)}"

explicacion: |
  Primero hay que hallar el radio (la distancia del punto al centro), y
  recién después elevarlo al cuadrado.
```

### 25 — La ecuación no cambia si el punto es negativo

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "avanzado"
  tags: ["conicas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un punto (x, y) sobre una circunferencia centrada en el origen tiene coordenadas negativas, igual cumple x² + y² = r², porque los cuadrados eliminan el signo."

explicacion: |
  (-3)² da el mismo resultado que 3²: el signo desaparece al elevar al
  cuadrado.
```

### 26 — Cierre: para qué sirve la ecuación de la circunferencia

```
metadata:
  materia: "matematicas"
  tema: "secciones_conicas_circunferencia"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve escribir una circunferencia como ecuación algebraica?"
tipo: mc
opciones_explicitas:
  - "Para verificar con números si un punto está dentro, sobre o fuera de un área circular, sin necesidad de medir sobre un dibujo"
  - "Sólo sirve para calcular el área del círculo"
  - "Sólo aplica a circunferencias centradas en el origen"
respuesta: "Para verificar con números si un punto está dentro, sobre o fuera de un área circular, sin necesidad de medir sobre un dibujo"

explicacion: |
  Como el alcance de una señal, una zona de cobertura, o un radar.
```
