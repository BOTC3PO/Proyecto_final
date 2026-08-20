# Matemática — Semejanza y Teorema de Thales (cuestionario, 28 preguntas VBLang)

> Tema: `GO4`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la semejanza

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "basico"
  tags: ["semejanza", "vocabulario"]

enunciado: "¿Qué significa que dos triángulos sean semejantes?"
tipo: mc
opciones_explicitas:
  - "Que tienen la misma forma (mismos ángulos y lados proporcionales), aunque no el mismo tamaño"
  - "Que tienen exactamente el mismo tamaño y la misma forma"
  - "Que comparten al menos un lado"
respuesta: "Que tienen la misma forma (mismos ángulos y lados proporcionales), aunque no el mismo tamaño"

explicacion: |
  La semejanza exige la misma forma, no el mismo tamaño: uno puede ser una
  ampliación o reducción del otro.
```

### 2 — Razón de semejanza

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "basico"
  tags: ["semejanza", "vocabulario"]

enunciado: "¿Qué es la \"razón de semejanza\" entre dos triángulos semejantes?"
tipo: mc
opciones_explicitas:
  - "El número fijo por el que hay que multiplicar cada lado de uno para obtener el lado correspondiente del otro"
  - "La suma de los tres lados de un triángulo"
  - "La diferencia entre el ángulo mayor y el ángulo menor"
respuesta: "El número fijo por el que hay que multiplicar cada lado de uno para obtener el lado correspondiente del otro"

explicacion: |
  Es la escala: si la razón es 3, cada lado del primer triángulo mide 3
  veces el lado correspondiente del segundo.
```

### 3 — Semejanza vs. congruencia

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "basico"
  tags: ["semejanza", "congruencia", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre semejanza y congruencia?"
tipo: mc
opciones_explicitas:
  - "La congruencia exige misma forma Y mismo tamaño; la semejanza sólo exige misma forma"
  - "Son exactamente lo mismo, con nombres distintos"
  - "La semejanza sólo se aplica a triángulos rectángulos"
respuesta: "La congruencia exige misma forma Y mismo tamaño; la semejanza sólo exige misma forma"

explicacion: |
  Congruencia es un caso particular de semejanza, con razón de semejanza
  igual a 1 (ver `../congruencia-de-triangulos/`).
```

### 4 — Congruentes implica semejantes

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "congruencia"]

respuesta: verdadero
tipo: vf

enunciado: "Toda pareja de triángulos congruentes es también una pareja de triángulos semejantes."

explicacion: |
  Congruentes es semejantes con razón de semejanza 1: mismos ángulos y
  lados proporcionales (con razón 1), que es exactamente lo que pide la
  semejanza.
```

### 5 — Semejantes NO implica congruentes

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "congruencia"]

respuesta: falso
tipo: vf

enunciado: "Toda pareja de triángulos semejantes es también una pareja de triángulos congruentes."

explicacion: |
  Falso: dos triángulos semejantes pueden tener tamaños distintos (razón
  de semejanza distinta de 1) y seguir sin ser congruentes.
```

### 6 — Criterio AA

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "criterios", "vocabulario"]

enunciado: "¿Qué dice el criterio de semejanza AA (Ángulo-Ángulo)?"
tipo: mc
opciones_explicitas:
  - "Si dos ángulos de un triángulo son iguales a dos ángulos de otro, los triángulos son semejantes"
  - "Si dos lados de un triángulo son iguales a dos lados de otro, los triángulos son semejantes"
  - "Si un ángulo de un triángulo es igual a un ángulo de otro, alcanza para asegurar semejanza"
respuesta: "Si dos ángulos de un triángulo son iguales a dos ángulos de otro, los triángulos son semejantes"

explicacion: |
  Con dos ángulos iguales alcanza — el tercero queda determinado por la
  suma de 180°.
```

### 7 — Por qué basta con 2 ángulos

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "criterios", "triangulos"]

respuesta: verdadero
tipo: vf

enunciado: "En el criterio AA no hace falta verificar el tercer ángulo, porque queda determinado por los otros dos (la suma de los ángulos internos de un triángulo siempre es 180°)."

explicacion: |
  Es la misma propiedad vista en `../triangulos/`: fijados dos ángulos, el
  tercero sale de 180° menos la suma de esos dos.
```

### 8 — Criterio LLL proporcional

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "criterios", "vocabulario"]

enunciado: "¿Qué dice el criterio de semejanza LLL proporcional?"
tipo: mc
opciones_explicitas:
  - "Si los tres lados de un triángulo son proporcionales a los tres lados de otro (misma razón), son semejantes"
  - "Si los tres lados de un triángulo son iguales a los tres lados de otro, son semejantes"
  - "Si un lado de un triángulo es proporcional a un lado de otro, alcanza"
respuesta: "Si los tres lados de un triángulo son proporcionales a los tres lados de otro (misma razón), son semejantes"

explicacion: |
  A diferencia del LLL de congruencia (lados IGUALES), acá alcanza con que
  guarden la misma razón entre sí.
```

### 9 — Criterio LAL proporcional

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "criterios", "vocabulario"]

enunciado: "¿Qué dice el criterio de semejanza LAL proporcional?"
tipo: mc
opciones_explicitas:
  - "Si dos lados de un triángulo son proporcionales a dos lados de otro, y el ángulo comprendido entre ellos es igual en ambos, son semejantes"
  - "Si dos lados de un triángulo son iguales a dos lados de otro, son semejantes sin importar los ángulos"
  - "Si dos ángulos cualquiera son proporcionales, son semejantes"
respuesta: "Si dos lados de un triángulo son proporcionales a dos lados de otro, y el ángulo comprendido entre ellos es igual en ambos, son semejantes"

explicacion: |
  El ángulo comprendido tiene que ser igual (no proporcional) — sólo los
  lados van en razón.
```

### 10 — Problema: hallar el lado faltante con razón de semejanza entera

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "problema"]

variables:
  a: random(4, 12)
  b: random(4, 12)
  c: random(4, 12)
  k: random(2, 4)

restricciones:
  - a != b
  - b != c

respuesta: c * k
tipo: input
tolerancia_abs: 0

enunciado: "El triángulo 1 tiene lados {a} cm, {b} cm y {c} cm. El triángulo 2 es semejante al primero, con razón de semejanza {k}: sus lados correspondientes son {a * k} cm y {b * k} cm. ¿Cuánto mide su tercer lado?"

pasos:
  - "{c} cm × {k} = {c * k} cm"

explicacion: |
  Cada lado del triángulo 2 es {k} veces el lado correspondiente del
  triángulo 1.
```

### 11 — Problema: hallar la razón de semejanza

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "problema"]

variables:
  a: random(3, 9)
  k: random(2, 5)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene un lado de {a} cm. Su semejante tiene el lado correspondiente de {a * k} cm. ¿Cuál es la razón de semejanza (del triángulo grande respecto del chico)?"

pasos:
  - "{a * k} cm ÷ {a} cm = {k}"

explicacion: |
  La razón de semejanza es el cociente entre lados correspondientes.
```

### 12 — Problema: hallar un lado con producto cruzado

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "avanzado"
  tags: ["semejanza", "problema"]

variables:
  a: random(3, 10)
  b: random(3, 10)
  a2: random(11, 20)

restricciones:
  - a != b
  - (b * a2) - floor((b * a2) / a) * a == 0

respuesta: (b * a2) / a
tipo: input
tolerancia_abs: 0

enunciado: "Dos triángulos son semejantes. En el primero, dos lados miden {a} cm y {b} cm. En el segundo, el lado correspondiente a los {a} cm mide {a2} cm. ¿Cuánto mide el lado correspondiente a los {b} cm?"

pasos:
  - "{a}/{a2} = {b}/x → x = ({b} × {a2}) ÷ {a} = {(b * a2) / a}"

explicacion: |
  Se plantea la proporción entre lados correspondientes y se despeja con
  producto cruzado, igual que en `../proporcion/`.
```

### 13 — Dos equiláteros siempre son semejantes

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "triangulos"]

respuesta: verdadero
tipo: vf

enunciado: "Dos triángulos equiláteros cualquiera siempre son semejantes entre sí (aunque tengan tamaños distintos)."

explicacion: |
  Todo triángulo equilátero tiene sus tres ángulos de 60°: dos ángulos
  iguales (en realidad los tres) alcanzan para AA.
```

### 14 — Dos isósceles NO siempre son semejantes

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "avanzado"
  tags: ["semejanza", "triangulos"]

respuesta: falso
tipo: vf

enunciado: "Dos triángulos isósceles cualquiera siempre son semejantes entre sí."

explicacion: |
  Falso: \"isósceles\" sólo dice que dos lados son iguales, pero no fija los
  ángulos — un isósceles muy achatado y uno muy alto pueden tener ángulos
  bien distintos, así que no cumplen AA.
```

### 15 — Enunciado del Teorema de Thales

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["thales", "vocabulario"]

enunciado: "¿Qué dice el Teorema de Thales?"
tipo: mc
opciones_explicitas:
  - "Si dos o más rectas paralelas cortan a dos rectas transversales, los segmentos que determinan sobre una transversal son proporcionales a los correspondientes de la otra"
  - "La suma de los ángulos internos de un triángulo es 180°"
  - "Todo triángulo rectángulo cumple que el cuadrado de la hipotenusa es la suma de los cuadrados de los catetos"
respuesta: "Si dos o más rectas paralelas cortan a dos rectas transversales, los segmentos que determinan sobre una transversal son proporcionales a los correspondientes de la otra"

explicacion: |
  Es un teorema sobre proporcionalidad de segmentos generados por
  paralelas, no sobre ángulos internos ni sobre triángulos rectángulos
  (eso es Pitágoras, un módulo aparte).
```

### 16 — Problema: proporción de Thales con dos transversales

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "avanzado"
  tags: ["thales", "problema"]

variables:
  p: random(2, 8)
  q: random(2, 8)
  r: random(2, 12)

restricciones:
  - (r * q) - floor((r * q) / p) * p == 0

respuesta: (r * q) / p
tipo: input
tolerancia_abs: 0

enunciado: "Tres rectas paralelas cortan a dos transversales. Sobre la primera transversal, los segmentos miden {p} cm y {q} cm. Sobre la segunda, el segmento correspondiente a los {p} cm mide {r} cm. ¿Cuánto mide el segmento correspondiente a los {q} cm?"

pasos:
  - "{p}/{r} = {q}/x → x = ({q} × {r}) ÷ {p} = {(r * q) / p}"

explicacion: |
  Las paralelas hacen que los segmentos de una transversal sean
  proporcionales a los correspondientes de la otra.
```

### 17 — Corolario de Thales en el triángulo

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["thales", "vocabulario"]

enunciado: "Si se traza una recta paralela a un lado de un triángulo, cortando a los otros dos lados, ¿qué pasa?"
tipo: mc
opciones_explicitas:
  - "Divide a esos dos lados en segmentos proporcionales, y el triángulo chico que se forma es semejante al original"
  - "Divide a esos dos lados en segmentos iguales, sin importar dónde se trace la paralela"
  - "No tiene ningún efecto sobre las proporciones de los lados"
respuesta: "Divide a esos dos lados en segmentos proporcionales, y el triángulo chico que se forma es semejante al original"

explicacion: |
  Es el corolario de Thales aplicado al triángulo: la paralela genera un
  triángulo más chico, semejante al grande.
```

### 18 — El triángulo chico es semejante al original

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["thales", "semejanza"]

respuesta: verdadero
tipo: vf

enunciado: "El triángulo chico que se forma al trazar una paralela a un lado de un triángulo es semejante al triángulo original completo."

explicacion: |
  Comparten el ángulo del vértice, y la paralela genera un ángulo
  correspondiente igual al que ya existía en el otro vértice — dos
  ángulos iguales alcanzan para AA.
```

### 19 — Problema: segmentos del corolario en el triángulo

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "avanzado"
  tags: ["thales", "problema"]

variables:
  lado1: random(6, 16)
  segmento1: random(2, lado1 - 2)
  lado2: random(6, 16)

restricciones:
  - (lado2 * segmento1) - floor((lado2 * segmento1) / lado1) * lado1 == 0

respuesta: (lado2 * segmento1) / lado1
tipo: input
tolerancia_abs: 0

enunciado: "En un triángulo, un lado mide {lado1} cm y otro mide {lado2} cm. Una paralela al tercer lado corta al primero a {segmento1} cm de un vértice. ¿A qué distancia de ese mismo vértice corta al segundo lado?"

pasos:
  - "{segmento1}/{lado1} = x/{lado2} → x = ({segmento1} × {lado2}) ÷ {lado1} = {(lado2 * segmento1) / lado1}"

explicacion: |
  Los segmentos que corta la paralela en cada lado guardan la misma razón
  que los lados completos.
```

### 20 — Por qué el corolario genera semejanza

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "avanzado"
  tags: ["thales", "semejanza"]

enunciado: "¿Por qué el triángulo chico formado por la paralela es semejante al triángulo grande?"
tipo: mc
opciones_explicitas:
  - "Porque comparten el ángulo del vértice y la paralela genera un ángulo correspondiente igual al otro vértice: se cumple AA"
  - "Porque sus tres lados miden siempre lo mismo"
  - "Porque toda paralela genera automáticamente un triángulo congruente, no sólo semejante"
respuesta: "Porque comparten el ángulo del vértice y la paralela genera un ángulo correspondiente igual al otro vértice: se cumple AA"

explicacion: |
  Dos ángulos iguales entre el triángulo chico y el grande alcanzan para
  aplicar el criterio AA.
```

### 21 — Completar: criterio AA

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "criterios", "completar"]

enunciado: "Completar: para que dos triángulos sean semejantes por el criterio AA, alcanza con que tengan ___ ángulos correspondientes iguales."
tipo: completar
respuestas_validas:
  - "dos"
  - "2"

explicacion: |
  Con dos ángulos iguales, el tercero queda determinado por la suma de
  180°.
```

### 22 — Completar: proporción de Thales

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["thales", "completar"]

enunciado: "Completar: cuando rectas paralelas cortan a dos transversales, los segmentos que determinan sobre las transversales son ___."
tipo: completar
respuestas_validas:
  - "proporcionales"

explicacion: |
  Esa es la idea central del Teorema de Thales: proporcionalidad de
  segmentos, no igualdad.
```

### 23 — Ordenar: pasos para medir una altura indirecta con sombras

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "avanzado"
  tags: ["thales", "aplicacion", "ordenar"]

enunciado: "Ordenar los pasos para calcular la altura de un poste midiendo sombras (con un bastón de altura conocida, al mismo momento del día)."
tipo: ordenar
opciones_explicitas:
  - "Despejar la altura del poste con producto cruzado"
  - "Medir la altura del bastón y la longitud de su sombra"
  - "Plantear la proporción: altura del bastón / sombra del bastón = altura del poste / sombra del poste"
  - "Medir la longitud de la sombra del poste (misma hora, mismo sol)"
respuesta_orden: ["Medir la altura del bastón y la longitud de su sombra", "Medir la longitud de la sombra del poste (misma hora, mismo sol)", "Plantear la proporción: altura del bastón / sombra del bastón = altura del poste / sombra del poste", "Despejar la altura del poste con producto cruzado"]
explicacion: |
  El bastón y el poste, con sus sombras, forman dos triángulos semejantes
  (mismo ángulo del sol): las alturas y las sombras guardan la misma
  razón.
```

### 24 — Problema: altura de un poste por sombras

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "avanzado"
  tags: ["thales", "aplicacion", "problema"]

variables:
  altura_baston: random(1, 3)
  sombra_baston: random(1, 4)
  sombra_poste: random(5, 20)

restricciones:
  - (altura_baston * sombra_poste) - floor((altura_baston * sombra_poste) / sombra_baston) * sombra_baston == 0

respuesta: (altura_baston * sombra_poste) / sombra_baston
tipo: input
tolerancia_abs: 0

enunciado: "Un bastón de {altura_baston} m proyecta una sombra de {sombra_baston} m. En ese mismo momento, un poste proyecta una sombra de {sombra_poste} m. ¿Cuánto mide el poste?"

pasos:
  - "{altura_baston}/{sombra_baston} = x/{sombra_poste} → x = ({altura_baston} × {sombra_poste}) ÷ {sombra_baston} = {(altura_baston * sombra_poste) / sombra_baston}"

explicacion: |
  El bastón y el poste forman triángulos semejantes con sus sombras: la
  razón altura/sombra es la misma para los dos.
```

### 25 — Problema: escala de un mapa

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "aplicacion", "problema"]

variables:
  escala: uno_de([100, 500, 1000, 10000])
  medida_mapa: random(2, 15)

respuesta: medida_mapa * escala
tipo: input
tolerancia_abs: 0

enunciado: "En un mapa a escala 1:{escala}, una distancia entre dos ciudades mide {medida_mapa} cm. ¿Cuántos cm mide esa distancia en la realidad?"

pasos:
  - "{medida_mapa} cm × {escala} = {medida_mapa * escala} cm"

explicacion: |
  La escala de un mapa es una razón de semejanza entre el dibujo y la
  realidad.
```

### 26 — Problema: perímetro de un triángulo semejante

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "intermedio"
  tags: ["semejanza", "problema"]

variables:
  a: random(3, 10)
  b: random(3, 10)
  c: random(3, 10)
  k: random(2, 5)

respuesta: (a + b + c) * k
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene lados {a} cm, {b} cm y {c} cm (perímetro {a + b + c} cm). Su semejante tiene razón de semejanza {k}. ¿Cuál es el perímetro del triángulo semejante?"

pasos:
  - "({a} + {b} + {c}) cm × {k} = {(a + b + c) * k} cm"

explicacion: |
  El perímetro es una suma de longitudes: escala igual que los lados, por
  {k}.
```

### 27 — Problema: área de un triángulo semejante (avanzado)

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "avanzado"
  tags: ["semejanza", "problema"]

variables:
  area1: random(4, 30)
  k: random(2, 5)

respuesta: area1 * k^2
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene área {area1} cm². Su semejante tiene razón de semejanza {k}. ¿Cuál es el área del triángulo semejante?"

pasos:
  - "{area1} cm² × {k}² = {area1} cm² × {k^2} = {area1 * k^2} cm²"

explicacion: |
  El área escala por el cuadrado de la razón de semejanza, porque es un
  producto de dos longitudes (no una suma, como el perímetro).
```

### 28 — Cierre: para qué sirven la semejanza y Thales

```
metadata:
  materia: "matematicas"
  tema: "semejanza_y_teorema_de_thales"
  nivel: "basico"
  tags: ["semejanza", "thales", "cierre"]

enunciado: "¿Cuál de estas es una aplicación real de la semejanza y el Teorema de Thales?"
tipo: mc
opciones_explicitas:
  - "Calcular la altura de un poste sin medirlo directamente, usando sombras"
  - "Sumar los ángulos internos de un triángulo"
  - "Calcular el área de un círculo"
respuesta: "Calcular la altura de un poste sin medirlo directamente, usando sombras"

explicacion: |
  Semejanza y Thales permiten medir indirectamente (alturas, distancias en
  mapas) usando proporciones entre triángulos, en vez de medir todo a
  mano.
```
