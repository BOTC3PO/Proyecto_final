# Matemática — Distancia entre dos puntos (cuestionario, 25 preguntas VBLang)

> Tema: `GA3`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — La fórmula de distancia es Pitágoras aplicado

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "vocabulario"]

enunciado: "¿Qué relación tiene la fórmula de distancia entre dos puntos con el teorema de Pitágoras?"
tipo: mc
opciones_explicitas:
  - "Es el teorema de Pitágoras aplicado a un triángulo rectángulo formado por las diferencias de coordenadas"
  - "No tiene ninguna relación, son fórmulas independientes"
  - "Es el teorema de Pitágoras, pero sólo para puntos en el cuadrante I"
respuesta: "Es el teorema de Pitágoras aplicado a un triángulo rectángulo formado por las diferencias de coordenadas"

explicacion: |
  Δx y Δy son los catetos; la distancia es la hipotenusa.
```

### 2 — Completar: fórmula de distancia

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "completar"]

tipo: completar
enunciado: "Completá: en la fórmula de distancia, el resultado final se obtiene sacando ___ de la suma de los cuadrados de Δx y Δy."
respuestas_validas:
  - "raíz cuadrada"
  - "raiz cuadrada"

explicacion: |
  Es el mismo último paso que en el teorema de Pitágoras.
```

### 3 — Qué es Δx en la fórmula de distancia

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia", "vocabulario"]

enunciado: "¿Qué representa Δx (x₂ − x₁) en la fórmula de distancia?"
tipo: mc
opciones_explicitas:
  - "El cateto horizontal del triángulo rectángulo entre los dos puntos"
  - "La distancia total entre los dos puntos"
  - "El cateto vertical del triángulo"
respuesta: "El cateto horizontal del triángulo rectángulo entre los dos puntos"

explicacion: |
  Δy es el cateto vertical.
```

### 4 — Problema: distancia con terna pitagórica 3-4-5

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "problema"]

variables:
  k: random(1, 8)
  x1: 0
  y1: 0
  x2: 3 * k
  y2: 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la distancia entre los puntos ({x1}, {y1}) y ({x2}, {y2})?"

pasos:
  - "Δx = {x2} − {x1} = {x2 - x1}; Δy = {y2} − {y1} = {y2 - y1}"
  - "√({x2 - x1}² + {y2 - y1}²) = √{(x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)} = {5 * k}"

explicacion: |
  Es la terna pitagórica 3-4-5 escalada por {k}: da una distancia exacta.
```

### 5 — Problema: distancia con terna pitagórica 5-12-13

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "problema"]

variables:
  k: random(1, 6)
  x1: random(-5, 5)
  y1: random(-5, 5)
  x2: x1 + 5 * k
  y2: y1 + 12 * k

respuesta: 13 * k
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la distancia entre los puntos ({x1}, {y1}) y ({x2}, {y2})?"

pasos:
  - "Δx = {x2 - x1}; Δy = {y2 - y1}"
  - "√({x2 - x1}² + {y2 - y1}²) = {13 * k}"

explicacion: |
  Es la terna pitagórica 5-12-13 escalada por {k}, ahora con un punto
  inicial que no es el origen.
```

### 6 — Problema: distancia entre puntos con la misma ordenada

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia", "problema"]

variables:
  oy: random(-10, 10)
  x1: random(-10, 0)
  x2: random(1, 10)

respuesta: x2 - x1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la distancia entre los puntos ({x1}, {oy}) y ({x2}, {oy})?"

pasos:
  - "Misma ordenada: la distancia es directamente |{x2} − ({x1})| = {x2 - x1}"

explicacion: |
  Con la misma y, la distancia es sólo la diferencia de abscisas, sin
  necesidad de raíz cuadrada.
```

### 7 — Problema: distancia entre puntos con la misma abscisa

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia", "problema"]

variables:
  x: random(-10, 10)
  y1: random(-10, 0)
  y2: random(1, 10)

respuesta: y2 - y1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la distancia entre los puntos ({x}, {y1}) y ({x}, {y2})?"

pasos:
  - "Misma abscisa: la distancia es directamente |{y2} − ({y1})| = {y2 - y1}"

explicacion: |
  Con la misma x, la distancia es sólo la diferencia de ordenadas.
```

### 8 — El orden de los puntos no cambia la distancia

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "No importa cuál de los dos puntos se llame 'punto 1' y cuál 'punto 2': la distancia calculada da exactamente igual."

explicacion: |
  Restar al revés sólo cambia el signo de Δx y Δy, y el cuadrado
  elimina ese signo.
```

### 9 — Problema: distancia con resultado redondeado

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "problema"]

variables:
  x1: random(-8, 0)
  y1: random(-8, 0)
  x2: random(1, 8)
  y2: random(1, 8)

respuesta: redondear(sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es la distancia entre los puntos ({x1}, {y1}) y ({x2}, {y2})? Redondeá a 2 decimales."

pasos:
  - "Δx = {x2 - x1}; Δy = {y2 - y1}"
  - "√({x2 - x1}² + {y2 - y1}²) = {redondear(sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)), 2)}"

explicacion: |
  No siempre la distancia da un número exacto: en ese caso se redondea.
```

### 10 — La distancia entre dos puntos nunca es negativa

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "La distancia entre dos puntos nunca puede dar un número negativo."

explicacion: |
  Es una raíz cuadrada de una suma de cuadrados: siempre positiva o
  cero.
```

### 11 — Distancia de un punto a sí mismo

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "La distancia de un punto a sí mismo es siempre 0."

explicacion: |
  Δx y Δy dan 0, así que la raíz de la suma también da 0.
```

### 12 — Ordenar: pasos para calcular la distancia

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "ordenar"]

enunciado: "Ordená los pasos para calcular la distancia entre dos puntos (x₁, y₁) y (x₂, y₂)."
tipo: ordenar
opciones_explicitas:
  - "Sacar raíz cuadrada de esa suma"
  - "Calcular Δx = x₂ − x₁ y Δy = y₂ − y₁"
  - "Elevar al cuadrado ambas diferencias y sumarlas"
respuesta_orden: ["Calcular Δx = x₂ − x₁ y Δy = y₂ − y₁", "Elevar al cuadrado ambas diferencias y sumarlas", "Sacar raíz cuadrada de esa suma"]
explicacion: |
  Es exactamente el mismo procedimiento de Pitágoras para hallar una
  hipotenusa.
```

### 13 — Problema: distancia entre dos puntos del mismo cuadrante

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "problema"]

variables:
  k: random(1, 5)
  x1: random(1, 5)
  y1: random(1, 5)
  x2: x1 + 8 * k
  y2: y1 + 15 * k

respuesta: 17 * k
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la distancia entre los puntos ({x1}, {y1}) y ({x2}, {y2})?"

pasos:
  - "Δx = {x2 - x1}; Δy = {y2 - y1}"
  - "√({x2 - x1}² + {y2 - y1}²) = {17 * k}"

explicacion: |
  Es la terna pitagórica 8-15-17 escalada por {k}.
```

### 14 — Distancia usada para clasificar un triángulo

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "vocabulario"]

enunciado: "¿Para qué sirve calcular las tres distancias entre los vértices de un triángulo dado por sus coordenadas?"
tipo: mc
opciones_explicitas:
  - "Para clasificarlo como equilátero, isósceles o escaleno, sólo a partir de las coordenadas"
  - "Para calcular su área directamente, sin ninguna otra fórmula"
  - "No tiene ninguna aplicación práctica"
respuesta: "Para clasificarlo como equilátero, isósceles o escaleno, sólo a partir de las coordenadas"

explicacion: |
  Si las tres distancias (los tres lados) son iguales, es equilátero; si
  sólo dos son iguales, isósceles; si las tres son distintas, escaleno.
```

### 15 — Problema: verificar un triángulo isósceles

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "problema"]

variables:
  k: random(1, 5)

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo tiene vértices en (0, 0), ({3 * k}, {4 * k}) y (0, {5 * k}). Dos de sus lados miden {5 * k} (uno calculado con la terna 3-4-5, el otro como distancia vertical directa). ¿Es un triángulo isósceles (al menos dos lados iguales)?"

explicacion: |
  El lado entre (0,0) y ({3 * k},{4 * k}) mide {5 * k}, y el lado entre
  (0,0) y (0,{5 * k}) también mide {5 * k}: dos lados iguales alcanzan
  para ser isósceles.
```

### 16 — La fórmula funciona igual sin importar el cuadrante

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula de distancia funciona exactamente igual sin importar en qué cuadrante estén los dos puntos, incluso con coordenadas negativas."

explicacion: |
  Las diferencias se elevan al cuadrado, así que cualquier signo negativo
  desaparece antes de sumar.
```

### 17 — Problema: distancia horizontal simple

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia", "problema"]

variables:
  oy: random(-5, 5)
  x1: random(-10, -1)
  x2: random(1, 10)

respuesta: x2 - x1
tipo: input
tolerancia_abs: 0

enunciado: "Dos puntos están en la misma altura y = {oy}, en las posiciones x = {x1} y x = {x2}. ¿Qué distancia hay entre ellos?"

explicacion: |
  Basta con restar las dos abscisas.
```

### 18 — No hace falta raíz cuadrada si los puntos están alineados

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos puntos comparten la misma abscisa o la misma ordenada, no hace falta usar raíz cuadrada para calcular la distancia entre ellos: alcanza con una resta directa."

explicacion: |
  Uno de los dos términos dentro de la raíz da 0, así que la raíz de un
  solo cuadrado es directamente ese valor absoluto.
```

### 19 — Problema: hallar Δx dado la distancia y Δy

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "problema"]

variables:
  k: random(1, 6)
  dy: 12 * k
  d: 13 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Dos puntos están a una distancia de {d} unidades entre sí, y su diferencia de ordenadas (Δy) es {dy}. ¿Cuál es su diferencia de abscisas (Δx)?"

pasos:
  - "{d}² − {dy}² = {(d * d) - (dy * dy)}"
  - "√{(d * d) - (dy * dy)} = {5 * k}"

explicacion: |
  Se despeja Δx invirtiendo Pitágoras, igual que hallar un cateto
  conociendo la hipotenusa y el otro cateto.
```

### 20 — Vocabulario: Δ (delta)

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["distancia", "vocabulario"]

enunciado: "¿Qué significa el símbolo Δ (delta) en 'Δx' o 'Δy'?"
tipo: mc
opciones_explicitas:
  - "Diferencia o cambio entre dos valores"
  - "El símbolo de una raíz cuadrada"
  - "Un ángulo específico de 90°"
respuesta: "Diferencia o cambio entre dos valores"

explicacion: |
  Δx es "cambio en x": x₂ menos x₁.
```

### 21 — Problema: comparar dos distancias

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "avanzado"
  tags: ["distancia", "problema"]

variables:
  k1: random(1, 4)
  k2: k1 + random(1, 3)

respuesta: verdadero
tipo: vf

enunciado: "La distancia entre (0,0) y ({3 * k2}, {4 * k2}) es mayor que la distancia entre (0,0) y ({3 * k1}, {4 * k1})."

explicacion: |
  {5 * k2} es mayor que {5 * k1}: a mayor factor de escala sobre la
  misma terna 3-4-5, mayor la distancia resultante.
```

### 22 — La distancia es simétrica

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "La distancia de A a B es siempre igual a la distancia de B a A."

explicacion: |
  Es una propiedad básica de cualquier distancia geométrica: no importa
  la dirección en la que se mida.
```

### 23 — Aplicación real: distancia en un mapa con coordenadas

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia", "vocabulario"]

enunciado: "¿Para qué sirve la fórmula de distancia entre dos puntos, aplicada a un mapa con coordenadas?"
tipo: mc
opciones_explicitas:
  - "Para calcular la distancia real 'en línea recta' entre dos ubicaciones, a partir de sus coordenadas"
  - "Sólo sirve para calcular el área de un mapa"
  - "No tiene ninguna aplicación fuera de la matemática pura"
respuesta: "Para calcular la distancia real 'en línea recta' entre dos ubicaciones, a partir de sus coordenadas"

explicacion: |
  Es la misma fórmula, aplicada a coordenadas geográficas o a
  coordenadas de un plano de edificio.
```

### 24 — La distancia entre dos puntos distintos es siempre mayor que 0

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "intermedio"
  tags: ["distancia"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos puntos son distintos entre sí, la distancia entre ellos es siempre mayor que 0."

explicacion: |
  Sólo un punto respecto de sí mismo tiene distancia exactamente 0.
```

### 25 — Cierre: para qué sirve la fórmula de distancia

```
metadata:
  materia: "matematicas"
  tema: "distancia_entre_dos_puntos"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la fórmula de distancia entre dos puntos?"
tipo: mc
opciones_explicitas:
  - "Para medir la distancia real entre dos ubicaciones dadas por sus coordenadas, reusando el teorema de Pitágoras"
  - "Sólo sirve para puntos ubicados en el mismo cuadrante"
  - "Es una fórmula completamente distinta al teorema de Pitágoras"
respuesta: "Para medir la distancia real entre dos ubicaciones dadas por sus coordenadas, reusando el teorema de Pitágoras"

explicacion: |
  Es el mismo teorema ya conocido, aplicado a un par de coordenadas.
```
