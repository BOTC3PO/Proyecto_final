# Examen jefe — [PENDIENTE #610]

> Logro #610. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **120 preguntas totales** en 5/5 secciones.

---

## Sección: semejanza-y-teorema-de-thales (28 preguntas)

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

## Sección: teorema-de-pitagoras (26 preguntas)

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

## Sección: test-de-hipotesis (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "basico"
  tags: ["hipotesis", "vocabulario"]

enunciado: "¿Qué es la hipótesis nula (H₀)?"
tipo: mc
opciones_explicitas:
  - "La afirmación conservadora de partida, 'no pasa nada raro' (por ejemplo, que una moneda es justa)"
  - "Lo que el investigador quiere demostrar que es verdad"
  - "El resultado exacto que se obtuvo en la muestra"
respuesta: "La afirmación conservadora de partida, 'no pasa nada raro' (por ejemplo, que una moneda es justa)"

explicacion: |
  El test busca evidencia para rechazarla o no, nunca la da por
  demostrada.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "basico"
  tags: ["hipotesis", "vocabulario"]

enunciado: "¿Qué es la hipótesis alternativa (H₁)?"
tipo: mc
opciones_explicitas:
  - "Lo contrario de la hipótesis nula: lo que se sospecha o se quiere demostrar (por ejemplo, que la moneda está cargada)"
  - "Otra forma de llamar a la hipótesis nula"
  - "El nivel de significancia elegido para el test"
respuesta: "Lo contrario de la hipótesis nula: lo que se sospecha o se quiere demostrar (por ejemplo, que la moneda está cargada)"

explicacion: |
  H₀ y H₁ son mutuamente excluyentes y cubren todos los casos.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "intermedio"
  tags: ["p_valor", "vocabulario"]

enunciado: "¿Qué es el p-valor?"
tipo: mc
opciones_explicitas:
  - "La probabilidad de observar un resultado tan extremo (o más) que el obtenido, asumiendo que la hipótesis nula fuera cierta"
  - "La probabilidad de que la hipótesis nula sea verdadera"
  - "El porcentaje de la muestra que apoya la hipótesis alternativa"
respuesta: "La probabilidad de observar un resultado tan extremo (o más) que el obtenido, asumiendo que la hipótesis nula fuera cierta"

explicacion: |
  Un p-valor chico dice: "si H₀ fuera cierta, sería muy raro ver un
  resultado como este".
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "intermedio"
  tags: ["significancia", "vocabulario"]

enunciado: "¿Qué es el nivel de significancia (α)?"
tipo: mc
opciones_explicitas:
  - "El umbral fijado de antemano para decidir qué tan improbable tiene que ser el resultado antes de rechazar H₀ (habitualmente 0,05)"
  - "La probabilidad de que la hipótesis alternativa sea verdadera"
  - "El tamaño mínimo de muestra necesario para el test"
respuesta: "El umbral fijado de antemano para decidir qué tan improbable tiene que ser el resultado antes de rechazar H₀ (habitualmente 0,05)"

explicacion: |
  Se fija ANTES de ver los datos, no después.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "intermedio"
  tags: ["hipotesis", "completar"]

tipo: completar
enunciado: "Completá la regla de decisión: se rechaza la hipótesis nula si el p-valor es ___ que el nivel de significancia α."
respuestas_validas:
  - "menor"

explicacion: |
  p-valor < α → se rechaza H₀.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis", "problema"]

variables:
  p_valor: uno_de([0.01, 0.03, 0.08, 0.12])
  alfa: 0.05

respuesta: p_valor < alfa
tipo: vf

enunciado: "Un test dio un p-valor de {p_valor}, con nivel de significancia α = {alfa}. ¿Se rechaza la hipótesis nula?"

explicacion: |
  Se compara directo el p-valor contra α: si es menor, se rechaza H₀.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis"]

respuesta: verdadero
tipo: vf

enunciado: "'No rechazar la hipótesis nula' no es lo mismo que 'demostrar que la hipótesis nula es verdadera' — sólo significa que no hubo evidencia suficiente para descartarla."

explicacion: |
  Un test nunca demuestra que H₀ es cierta, como mucho no encuentra
  evidencia en contra.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "intermedio"
  tags: ["significancia", "vocabulario"]

enunciado: "¿Qué significa que un resultado sea 'estadísticamente significativo'?"
tipo: mc
opciones_explicitas:
  - "Que el p-valor obtenido es menor que el nivel de significancia elegido, así que se rechaza la hipótesis nula"
  - "Que el resultado es importante o grande en términos prácticos"
  - "Que la muestra usada fue muy grande"
respuesta: "Que el p-valor obtenido es menor que el nivel de significancia elegido, así que se rechaza la hipótesis nula"

explicacion: |
  "Significativo" acá es un término técnico, no sinónimo de
  "importante".
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis", "problema"]

variables:
  p_valor_moneda: 0.055
  alfa: 0.05

respuesta: p_valor_moneda < alfa
tipo: vf

enunciado: "Se tira una moneda 10 veces y salen 8 caras. H₀ es 'la moneda es justa'. El p-valor de este resultado es {p_valor_moneda}, con α = {alfa}. ¿Se rechaza H₀ (se concluye que la moneda está cargada)?"

explicacion: |
  {p_valor_moneda} > {alfa}: el resultado es llamativo, pero no
  alcanza el umbral fijado para rechazar H₀.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["error_tipo1", "vocabulario"]

enunciado: "¿Qué es el error de Tipo I?"
tipo: mc
opciones_explicitas:
  - "Rechazar la hipótesis nula cuando en realidad era cierta (falso positivo)"
  - "No rechazar la hipótesis nula cuando en realidad era falsa (falso negativo)"
  - "Elegir mal el tamaño de la muestra"
respuesta: "Rechazar la hipótesis nula cuando en realidad era cierta (falso positivo)"

explicacion: |
  Su probabilidad es, justamente, el nivel de significancia α.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["error_tipo2", "vocabulario"]

enunciado: "¿Qué es el error de Tipo II?"
tipo: mc
opciones_explicitas:
  - "No rechazar la hipótesis nula cuando en realidad era falsa (falso negativo)"
  - "Rechazar la hipótesis nula cuando en realidad era cierta (falso positivo)"
  - "Usar un nivel de significancia mayor a 0,05"
respuesta: "No rechazar la hipótesis nula cuando en realidad era falsa (falso negativo)"

explicacion: |
  Por ejemplo, no detectar que una moneda estaba cargada, aunque de
  verdad lo estuviera.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["significancia"]

respuesta: verdadero
tipo: vf

enunciado: "Bajar el nivel de significancia (por ejemplo, de α=0,05 a α=0,01) hace más difícil rechazar la hipótesis nula, porque exige un p-valor todavía más chico."

explicacion: |
  Un umbral más estricto reduce el riesgo de error de Tipo I, pero
  aumenta el riesgo de error de Tipo II.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis", "aplicacion"]

enunciado: "¿Qué relación tiene el test de hipótesis con el intervalo de confianza?"
tipo: mc
opciones_explicitas:
  - "Usan exactamente el mismo aparato matemático (error estándar, valores z); el intervalo estima un rango, el test decide sí o no sobre una afirmación puntual"
  - "No tienen ninguna relación entre sí"
  - "El test de hipótesis reemplaza por completo al intervalo de confianza"
respuesta: "Usan exactamente el mismo aparato matemático (error estándar, valores z); el intervalo estima un rango, el test decide sí o no sobre una afirmación puntual"

explicacion: |
  Ambos se apoyan en el teorema central del límite para justificar el
  uso de la distribución normal.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis", "problema"]

variables:
  p_valor: uno_de([0.005, 0.02, 0.04])
  alfa: 0.01

respuesta: p_valor < alfa
tipo: vf

enunciado: "Un test dio un p-valor de {p_valor}, con un nivel de significancia más estricto, α = {alfa}. ¿Se rechaza la hipótesis nula?"

explicacion: |
  Con un α más chico, hace falta un p-valor todavía más chico para
  rechazar H₀.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "basico"
  tags: ["hipotesis", "aplicacion"]

enunciado: "Un ensayo clínico prueba un nuevo medicamento contra un placebo. H₀ es 'el medicamento no tiene ningún efecto real'. Si el p-valor del ensayo da 0,001 (con α=0,05), ¿qué se concluye?"
tipo: mc
opciones_explicitas:
  - "Se rechaza H₀: hay evidencia estadísticamente significativa de que el medicamento sí tiene un efecto"
  - "Se acepta H₀ como demostrada: el medicamento definitivamente no funciona"
  - "No se puede concluir nada sin conocer el precio del medicamento"
respuesta: "Se rechaza H₀: hay evidencia estadísticamente significativa de que el medicamento sí tiene un efecto"

explicacion: |
  0,001 < 0,05 — el resultado observado sería muy improbable si el
  medicamento no tuviera ningún efecto real.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["significancia"]

respuesta: verdadero
tipo: vf

enunciado: "Un resultado 'estadísticamente significativo' (p-valor bajo) no significa necesariamente que el efecto sea grande o importante en la práctica — con una muestra enorme, hasta una diferencia mínima puede dar un p-valor muy bajo."

explicacion: |
  Significancia estadística y relevancia práctica son dos preguntas
  distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["hipotesis", "problema"]

variables:
  p_valor_a: 0.02
  p_valor_b: 0.08
  alfa: 0.05

respuesta: p_valor_a < alfa
tipo: vf

enunciado: "Test A dio p-valor {p_valor_a}; Test B dio p-valor {p_valor_b}, ambos con α = {alfa}. ¿Se rechaza H₀ en el Test A?"

explicacion: |
  {p_valor_a} < {alfa}, así que en el Test A sí se rechaza H₀ (a
  diferencia del Test B, donde {p_valor_b} > {alfa}).
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "intermedio"
  tags: ["hipotesis", "vocabulario"]

enunciado: "En un test de hipótesis, ¿cuál de las dos hipótesis representa el 'status quo' o la postura conservadora por defecto?"
tipo: mc
opciones_explicitas:
  - "La hipótesis nula (H₀)"
  - "La hipótesis alternativa (H₁)"
respuesta: "La hipótesis nula (H₀)"

explicacion: |
  H₁ es lo que hay que reunir evidencia para poder afirmar.
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "avanzado"
  tags: ["significancia"]

respuesta: verdadero
tipo: vf

enunciado: "El nivel de significancia α debe fijarse ANTES de ver los resultados del test, no elegirse después según convenga para que el resultado dé 'significativo'."

explicacion: |
  Elegir α después de ver los datos invalida la lógica del test (es
  una forma de sesgo conocida como 'p-hacking').
```

```
metadata:
  materia: "matematicas"
  tema: "test_de_hipotesis"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve un test de hipótesis?"
tipo: mc
opciones_explicitas:
  - "Para decidir, con datos limitados de una muestra, si hay evidencia suficiente para descartar una afirmación de partida (H₀), controlando el riesgo de equivocarse"
  - "Para demostrar con certeza absoluta que una hipótesis es verdadera"
  - "Sólo sirve en ensayos clínicos de medicamentos"
respuesta: "Para decidir, con datos limitados de una muestra, si hay evidencia suficiente para descartar una afirmación de partida (H₀), controlando el riesgo de equivocarse"

explicacion: |
  Cierra la cadena de `../muestreo-y-sesgo/` →
  `../teorema-central-del-limite/` → `../intervalo-de-confianza/` →
  test de hipótesis: de una muestra a una decisión, con el riesgo de
  error explícitamente controlado.
```

## Sección: transformaciones-geometricas/homotecia (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "basico"
  tags: ["homotecia", "vocabulario"]

enunciado: "¿Qué es una homotecia?"
tipo: mc
opciones_explicitas:
  - "Agrandar o achicar una figura desde un punto fijo, según una razón"
  - "Deslizar una figura sin cambiar su tamaño"
  - "Voltear una figura como en un espejo"
respuesta: "Agrandar o achicar una figura desde un punto fijo, según una razón"

explicacion: |
  Es la única de las cuatro transformaciones que cambia el tamaño de la
  figura.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "basico"
  tags: ["homotecia", "vocabulario"]

enunciado: "¿Qué dos datos definen una homotecia?"
tipo: mc
opciones_explicitas:
  - "El centro de homotecia y la razón (factor de escala)"
  - "Un vector de dirección y magnitud"
  - "Un eje de simetría"
respuesta: "El centro de homotecia y la razón (factor de escala)"

explicacion: |
  La razón indica cuánto se agranda o se achica la figura.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia"]

respuesta: verdadero
tipo: vf

enunciado: "Una homotecia conserva la forma de la figura (los ángulos), pero no necesariamente el tamaño."

explicacion: |
  Por eso la imagen y la original son semejantes, no congruentes (salvo
  que la razón sea 1 o -1).
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia", "problema"]

variables:
  distancia_original: random(2, 15)
  k: random(2, 5)

respuesta: distancia_original * k
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está a {distancia_original} cm del centro de homotecia. Se aplica una homotecia de razón k = {k}. ¿A qué distancia del centro queda la imagen de ese punto?"

pasos:
  - "{distancia_original} × {k} = {distancia_original * k} cm"

explicacion: |
  Con razón mayor a 1, la figura se amplía: el punto se aleja del
  centro.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia", "problema"]

variables:
  mitad: random(2, 20)
  distancia_original: 2 * mitad

respuesta: mitad
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está a {distancia_original} cm del centro de homotecia. Se aplica una homotecia de razón k = 1/2. ¿A qué distancia del centro queda la imagen de ese punto?"

pasos:
  - "{distancia_original} × (1/2) = {mitad} cm"

explicacion: |
  Con razón entre 0 y 1, la figura se reduce: el punto se acerca al
  centro.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "basico"
  tags: ["homotecia"]

respuesta: verdadero
tipo: vf

enunciado: "Si la razón de homotecia es k = 1, la figura queda exactamente igual, sin cambiar de tamaño ni de posición."

explicacion: |
  Es la transformación identidad: cada punto se queda a la misma
  distancia del centro que tenía.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "avanzado"
  tags: ["homotecia"]

respuesta: verdadero
tipo: vf

enunciado: "Una homotecia de razón k = -1 produce exactamente el mismo resultado que una rotación de 180° alrededor del mismo centro."

explicacion: |
  El tamaño no cambia (|k| = 1) pero cada punto queda del lado opuesto
  del centro, a la misma distancia — igual que rotar 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "avanzado"
  tags: ["homotecia", "vocabulario"]

enunciado: "¿Qué significa que la razón de una homotecia sea negativa?"
tipo: mc
opciones_explicitas:
  - "Que la imagen queda del lado opuesto del centro, respecto de la figura original"
  - "Que la figura se hace más chica siempre"
  - "Que la homotecia no es válida"
respuesta: "Que la imagen queda del lado opuesto del centro, respecto de la figura original"

explicacion: |
  Con razón positiva, la imagen queda del mismo lado del centro que el
  punto original; con razón negativa, del lado contrario.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "avanzado"
  tags: ["homotecia", "problema"]

variables:
  punto: random(2, 20)
  k: uno_de([-2, -3])

respuesta: punto * k
tipo: input
tolerancia_abs: 0

enunciado: "El centro de homotecia está en la posición 0 de una recta numérica. Un punto está en la posición {punto}. Se aplica una homotecia de razón k = {k}. ¿En qué posición queda la imagen?"

pasos:
  - "{punto} × ({k}) = {punto * k}"

explicacion: |
  Al ser k negativo, la imagen queda del lado opuesto del centro
  respecto del punto original.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "basico"
  tags: ["homotecia", "vocabulario"]

enunciado: "¿Cuál de estas es un ejemplo cotidiano de homotecia?"
tipo: mc
opciones_explicitas:
  - "Ampliar o reducir un documento en una fotocopiadora"
  - "Ver el reflejo de un objeto en un espejo"
  - "Girar las manecillas de un reloj"
respuesta: "Ampliar o reducir un documento en una fotocopiadora"

explicacion: |
  La fotocopiadora aplica una razón de escala (por ejemplo, 150% o 70%)
  manteniendo la forma del original.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia"]

respuesta: verdadero
tipo: vf

enunciado: "Salvo que la razón sea 1 o -1, una figura y su imagen por homotecia son semejantes (misma forma, distinto tamaño), no congruentes."

explicacion: |
  Congruencia exige mismo tamaño Y forma; semejanza sólo exige misma
  forma y proporciones.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia", "completar"]

tipo: completar
enunciado: "Completá: distancia del centro al punto imagen = ___ × distancia del centro al punto original."
respuestas_validas:
  - "k"
  - "la razón"

explicacion: |
  k es la razón (o factor de escala) de la homotecia.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia", "ordenar"]

enunciado: "Ordená los pasos para aplicar una homotecia a un punto."
tipo: ordenar
opciones_explicitas:
  - "Multiplicar esa distancia por k para ubicar el punto imagen sobre la misma recta"
  - "Elegir el centro de homotecia y la razón k"
  - "Medir la distancia entre el centro y el punto original"
respuesta_orden: ["Elegir el centro de homotecia y la razón k", "Medir la distancia entre el centro y el punto original", "Multiplicar esa distancia por k para ubicar el punto imagen sobre la misma recta"]
explicacion: |
  El punto imagen siempre queda sobre la recta que ya unía al centro con
  el punto original.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia", "vocabulario"]

enunciado: "De las cuatro transformaciones geométricas (traslación, rotación, reflexión, homotecia), ¿cuál es la única que puede cambiar el tamaño de la figura?"
tipo: mc
opciones_explicitas:
  - "La homotecia"
  - "La rotación"
  - "La reflexión"
respuesta: "La homotecia"

explicacion: |
  Las otras tres son isometrías: conservan siempre el tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia", "problema"]

variables:
  lado: random(3, 12)
  k: random(2, 6)

respuesta: lado * k
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene un lado de {lado} cm. Se le aplica una homotecia de razón {k}. ¿Cuánto mide ese mismo lado en la figura imagen?"

pasos:
  - "{lado} × {k} = {lado * k} cm"

explicacion: |
  Todas las medidas de la figura quedan multiplicadas por la razón k.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "avanzado"
  tags: ["homotecia", "problema"]

variables:
  lado_original: random(2, 10)
  k: random(2, 8)
  lado_imagen: lado_original * k

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "Un lado de {lado_original} cm en la figura original mide {lado_imagen} cm en la imagen, después de una homotecia. ¿Cuál fue la razón de la homotecia?"

pasos:
  - "{lado_imagen} ÷ {lado_original} = {k}"

explicacion: |
  La razón es el cociente entre la medida en la imagen y la medida
  original.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "avanzado"
  tags: ["homotecia"]

respuesta: verdadero
tipo: vf

enunciado: "Si la razón de homotecia no es 1, el centro de homotecia es el único punto que no se mueve."

explicacion: |
  Todos los demás puntos se alejan o se acercan al centro, según la
  razón.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia", "problema"]

variables:
  tercio: random(2, 15)
  distancia_original: 3 * tercio

respuesta: tercio
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está a {distancia_original} cm del centro de homotecia. Se aplica una homotecia de razón k = 1/3. ¿A qué distancia del centro queda la imagen?"

pasos:
  - "{distancia_original} × (1/3) = {tercio} cm"

explicacion: |
  Con razón 1/3, la nueva distancia es la tercera parte de la original.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "avanzado"
  tags: ["homotecia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La sombra que proyecta un objeto desde una fuente de luz puntual es un ejemplo de homotecia: la fuente de luz actúa como centro."

explicacion: |
  Cuanto más lejos está la superficie donde cae la sombra, mayor la
  razón de ampliación.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "basico"
  tags: ["homotecia"]

enunciado: "Si la razón de una homotecia es un número entre 0 y 1 (por ejemplo, 0,5), ¿qué le pasa a la figura?"
tipo: mc
opciones_explicitas:
  - "Se reduce (la imagen es más chica que la original)"
  - "Se amplía (la imagen es más grande)"
  - "No cambia de tamaño"
respuesta: "Se reduce (la imagen es más chica que la original)"

explicacion: |
  Sólo con razón mayor a 1 (en valor absoluto) la figura se agranda.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "avanzado"
  tags: ["homotecia", "vocabulario"]

enunciado: "¿Por qué la homotecia se relaciona con la semejanza de triángulos y no con la congruencia?"
tipo: mc
opciones_explicitas:
  - "Porque la homotecia, como la semejanza, conserva la forma y las proporciones pero no necesariamente el tamaño"
  - "Porque la homotecia siempre agranda las figuras"
  - "No hay ninguna relación real entre ambos temas"
respuesta: "Porque la homotecia, como la semejanza, conserva la forma y las proporciones pero no necesariamente el tamaño"

explicacion: |
  Es exactamente la misma idea vista en `../../semejanza-y-teorema-de-thales/`,
  aplicada como transformación.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "avanzado"
  tags: ["homotecia", "problema"]

variables:
  distancia_original: random(2, 8)
  k1: random(2, 4)
  k2: random(2, 4)

respuesta: distancia_original * k1 * k2
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está a {distancia_original} cm del centro. Se le aplica una homotecia de razón {k1}, y a la imagen resultante se le aplica otra homotecia (mismo centro) de razón {k2}. ¿A qué distancia final queda del centro?"

pasos:
  - "Primera homotecia: {distancia_original} × {k1} = {distancia_original * k1} cm"
  - "Segunda homotecia: {distancia_original * k1} × {k2} = {distancia_original * k1 * k2} cm"

explicacion: |
  Dos homotecias sucesivas con el mismo centro equivalen a una sola con
  razón igual al producto de ambas.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "basico"
  tags: ["homotecia"]

respuesta: verdadero
tipo: vf

enunciado: "Con una razón de homotecia mayor a 1, cada punto de la figura se aleja del centro de homotecia."

explicacion: |
  La nueva distancia (k × distancia original) es mayor que la original
  cuando k > 1.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la homotecia?"
tipo: mc
opciones_explicitas:
  - "Para describir cualquier ampliación o reducción que mantiene las proporciones: fotocopias, zoom, sombras"
  - "Sólo sirve para calcular perímetros"
  - "Sólo aplica a triángulos rectángulos"
respuesta: "Para describir cualquier ampliación o reducción que mantiene las proporciones: fotocopias, zoom, sombras"

explicacion: |
  Es la transformación detrás de cualquier cambio de escala que respeta
  la forma original.
```

## Sección: transformaciones-geometricas/reflexion (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Qué es una reflexión en geometría?"
tipo: mc
opciones_explicitas:
  - "Voltear una figura como en un espejo, respecto de una línea (el eje de simetría)"
  - "Deslizar una figura sin girarla"
  - "Girar una figura alrededor de un punto"
respuesta: "Voltear una figura como en un espejo, respecto de una línea (el eje de simetría)"

explicacion: |
  Cada punto y su reflejo quedan a la misma distancia del eje, en lados
  opuestos.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Qué es el eje de simetría de una reflexión?"
tipo: mc
opciones_explicitas:
  - "La línea que actúa como espejo: cada punto y su reflejo quedan a la misma distancia de ella"
  - "El punto que no se mueve durante la transformación"
  - "El vector que define la dirección del movimiento"
respuesta: "La línea que actúa como espejo: cada punto y su reflejo quedan a la misma distancia de ella"

explicacion: |
  A diferencia de la rotación (un punto fijo) o la traslación (ningún
  punto fijo), acá lo fijo es toda una línea.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion"]

respuesta: verdadero
tipo: vf

enunciado: "Una reflexión preserva la forma y el tamaño de la figura original."

explicacion: |
  Es una isometría: la imagen es congruente a la original.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion"]

respuesta: verdadero
tipo: vf

enunciado: "Una reflexión invierte la orientación de la figura: queda 'espejada'."

explicacion: |
  Es lo que distingue a la reflexión de la traslación y la rotación.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "problema"]

variables:
  punto: random(1, 20)

respuesta: 0 - punto
tipo: input
tolerancia_abs: 0

enunciado: "En una recta numérica, el eje de simetría está en la posición 0. Un punto está en la posición {punto}. ¿En qué posición queda su reflejo?"

pasos:
  - "El reflejo queda a la misma distancia del eje, del otro lado: −{punto}"

explicacion: |
  Respecto del 0, reflejar es cambiar el signo de la posición.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "avanzado"
  tags: ["reflexion", "problema"]

variables:
  eje: random(5, 15)
  punto: random(1, 4)

respuesta: (2 * eje) - punto
tipo: input
tolerancia_abs: 0

enunciado: "En una recta numérica, el eje de simetría está en la posición {eje}. Un punto está en la posición {punto}. ¿En qué posición queda su reflejo?"

pasos:
  - "Distancia del punto al eje: {eje} − {punto} = {eje - punto}"
  - "El reflejo queda a esa misma distancia, del otro lado del eje: {eje} + {eje - punto} = {(2 * eje) - punto}"

explicacion: |
  El reflejo está tan lejos del eje, del otro lado, como estaba el punto
  original.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion"]

respuesta: verdadero
tipo: vf

enunciado: "Los puntos que están exactamente sobre el eje de simetría no cambian de posición al reflejar la figura."

explicacion: |
  Están a distancia 0 del eje, así que su reflejo cae en el mismo lugar.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Cuál de estas es un ejemplo cotidiano de reflexión?"
tipo: mc
opciones_explicitas:
  - "El reflejo de un árbol en la superficie de un lago"
  - "Las manecillas de un reloj girando"
  - "Un cajón que se desliza al abrirlo"
respuesta: "El reflejo de un árbol en la superficie de un lago"

explicacion: |
  La superficie del agua actúa como el eje (o plano) de simetría.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "problema"]

respuesta: 4
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos ejes de simetría tiene un cuadrado?"

explicacion: |
  Las dos diagonales, más las dos líneas que unen los puntos medios de
  lados opuestos: 4 en total.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Cuántos ejes de simetría tiene un círculo?"
tipo: mc
opciones_explicitas:
  - "Infinitos: cualquier diámetro es un eje de simetría"
  - "Ninguno"
  - "Exactamente 4"
respuesta: "Infinitos: cualquier diámetro es un eje de simetría"

explicacion: |
  Cualquier línea que pase por el centro divide al círculo en dos
  mitades espejadas.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La letra 'A' mayúscula (en su forma geométrica típica) tiene un eje de simetría vertical."

explicacion: |
  Su mitad izquierda es el reflejo de su mitad derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La letra 'N' mayúscula no tiene ningún eje de simetría (ninguna línea la refleja en sí misma)."

explicacion: |
  Ninguna línea vertical, horizontal ni diagonal la refleja en sí misma
  (aunque sí tiene simetría rotacional de 180°, algo distinto).
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Qué significa que una figura tenga simetría axial?"
tipo: mc
opciones_explicitas:
  - "Que existe al menos un eje respecto del cual la figura reflejada coincide exactamente con la original"
  - "Que la figura tiene todos los lados iguales"
  - "Que la figura se puede rotar y queda igual"
respuesta: "Que existe al menos un eje respecto del cual la figura reflejada coincide exactamente con la original"

explicacion: |
  Es la simetría "de espejo", distinta de la simetría rotacional.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "avanzado"
  tags: ["reflexion"]

respuesta: verdadero
tipo: vf

enunciado: "Aplicar dos reflexiones seguidas sobre dos ejes distintos que se cruzan equivale a una rotación alrededor del punto de cruce."

explicacion: |
  Es la conexión entre reflexión y rotación, clave en el diseño de
  rosetones.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Qué diferencia principal hay entre una reflexión y una rotación?"
tipo: mc
opciones_explicitas:
  - "La reflexión deja fija toda una línea (el eje); la rotación deja fijo un solo punto (el centro)"
  - "La reflexión cambia el tamaño de la figura; la rotación no"
  - "No hay ninguna diferencia real"
respuesta: "La reflexión deja fija toda una línea (el eje); la rotación deja fijo un solo punto (el centro)"

explicacion: |
  Esa es la diferencia estructural entre ambas isometrías.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "ordenar"]

enunciado: "Ordená los pasos para reflejar un punto respecto de un eje."
tipo: ordenar
opciones_explicitas:
  - "Ese nuevo punto es el reflejo"
  - "Medir la distancia del punto al eje de simetría"
  - "Ubicar esa misma distancia del otro lado del eje"
respuesta_orden: ["Medir la distancia del punto al eje de simetría", "Ubicar esa misma distancia del otro lado del eje", "Ese nuevo punto es el reflejo"]
explicacion: |
  La distancia al eje se conserva; sólo cambia de lado.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "avanzado"
  tags: ["reflexion", "problema"]

variables:
  distancia_al_eje: random(2, 20)

respuesta: 2 * distancia_al_eje
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está a {distancia_al_eje} cm del eje de simetría. ¿A qué distancia queda ese punto de su propio reflejo?"

pasos:
  - "2 × {distancia_al_eje} = {2 * distancia_al_eje} cm"

explicacion: |
  El punto y su reflejo están cada uno a esa distancia del eje, en
  lados opuestos: la distancia entre ambos es el doble.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion"]

respuesta: verdadero
tipo: vf

enunciado: "La reflexión es una isometría: no cambia ni la forma ni el tamaño de la figura."

explicacion: |
  Junto con la traslación y la rotación, es una de las tres isometrías.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "avanzado"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Por qué una letra 'F' reflejada no se puede hacer coincidir con una 'F' normal deslizándola o girándola, sólo volteándola?"
tipo: mc
opciones_explicitas:
  - "Porque la reflexión invierte la orientación de la figura, algo que ni la traslación ni la rotación hacen"
  - "Porque la reflexión cambia el tamaño de la letra"
  - "En realidad sí se puede, con suficiente rotación"
respuesta: "Porque la reflexión invierte la orientación de la figura, algo que ni la traslación ni la rotación hacen"

explicacion: |
  Es la propiedad distintiva de la reflexión frente a las otras dos
  isometrías.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "avanzado"
  tags: ["reflexion", "problema"]

variables:
  eje: random(10, 30)
  punto: random(1, 9)

respuesta: (2 * eje) - punto
tipo: input
tolerancia_abs: 0

enunciado: "En una recta numérica, el eje de simetría está en la posición {eje}. Un punto está en la posición {punto}. ¿En qué posición queda su reflejo?"

pasos:
  - "Distancia al eje: {eje} − {punto} = {eje - punto}"
  - "Reflejo: {eje} + {eje - punto} = {(2 * eje) - punto}"

explicacion: |
  Misma fórmula que el problema anterior, con otro eje y otro punto.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "problema"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos ejes de simetría tiene un triángulo equilátero?"

explicacion: |
  Uno por cada vértice, pasando por el punto medio del lado opuesto.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la reflexión?"
tipo: mc
opciones_explicitas:
  - "Para describir y diseñar cualquier patrón simétrico tipo espejo: logos, rosetones, reflejos"
  - "Sólo sirve para calcular áreas"
  - "Sólo aplica a figuras con más de 6 lados"
respuesta: "Para describir y diseñar cualquier patrón simétrico tipo espejo: logos, rosetones, reflejos"

explicacion: |
  Junto con la rotación, es la base matemática de los diseños con
  simetría (ver `../../../arte/rosetones-y-simetria/`).
```

