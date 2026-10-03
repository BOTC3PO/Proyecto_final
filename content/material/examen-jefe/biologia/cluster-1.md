# Examen jefe — [PENDIENTE #861]

> Logro #861. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **117 preguntas totales** en 5/5 secciones.

---

## Sección: crecimiento-poblacional (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["modelo_exponencial"]

variables:
  p0: random(50, 500)
  t: random(1, 6)

respuesta: p0 * 2 ^ t
tipo: input
tolerancia_abs: 0

enunciado: "Un cultivo de bacterias empieza con {p0} y se duplica cada hora. ¿Cuántas hay después de {t} horas?"

explicacion: |
  P(t) = {p0}×2^{t} = {p0 * 2 ^ t}.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["modelo_exponencial"]

variables:
  p0: random(10, 100)
  t: random(1, 5)

respuesta: p0 * 3 ^ t
tipo: input
tolerancia_abs: 0

enunciado: "Una población de insectos empieza con {p0} y se triplica cada generación. ¿Cuántos hay después de {t} generaciones?"

explicacion: |
  P(t) = {p0}×3^{t} = {p0 * 3 ^ t}.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["duplicacion"]

variables:
  p0: random(10, 50)
  n: random(1, 5)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {p0} se duplica cada período. ¿Cuántos períodos tardan en llegar a {p0 * (2 ^ n)}?"

pasos:
  - "{p0}×2^t = {p0 * (2 ^ n)} → 2^t = {2 ^ n} → t = {n}"

explicacion: |
  Se reconoce el factor de duplicación acumulado.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["tasa_neta"]

variables:
  natalidad: random(20, 50)
  mortalidad: random(5, 19)

respuesta: natalidad - mortalidad
tipo: input
tolerancia_abs: 0

enunciado: "En una población, la tasa de natalidad es {natalidad} por mil, y la de mortalidad es {mortalidad} por mil. ¿Cuál es la tasa neta de crecimiento (por mil)?"

explicacion: |
  Tasa neta = natalidad − mortalidad.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["tasa_neta", "verdadero_falso"]

variables:
  natalidad: random(5, 15)
  mortalidad: random(16, 30)

respuesta: ((natalidad - mortalidad) < 0)
tipo: vf

enunciado: "Natalidad {natalidad} por mil, mortalidad {mortalidad} por mil. ¿Está esta población en declive (tasa neta negativa)?"

explicacion: |
  Con mortalidad mayor que natalidad, la tasa neta da negativa — la
  población decrece.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["tasa_vs_cantidad"]

variables:
  poblacion: random(10, 100) * 1000
  tasa_por_mil: random(5, 40)

respuesta: (poblacion * tasa_por_mil) / 1000
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {poblacion} crece a una tasa de {tasa_por_mil} por mil. ¿Cuántos individuos se suman?"

explicacion: |
  {poblacion}×{tasa_por_mil}/1000 = {(poblacion * tasa_por_mil) / 1000}.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Dos poblaciones con la misma tasa de crecimiento (el mismo porcentaje) pueden sumar una cantidad de individuos muy distinta, si su tamaño de partida es distinto."

explicacion: |
  Una población de 1.000.000 con 2% suma 20.000; una de 100 con el mismo
  2% suma sólo 2 — misma tasa, cantidades muy distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El modelo exponencial simple (P=P₀rᵗ) predice un crecimiento sin ningún límite, sin importar cuánto tiempo pase."

explicacion: |
  Es justamente su limitación: en la realidad, ningún ambiente sostiene
  eso para siempre.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La capacidad de carga (K) es la cantidad máxima de individuos que un ambiente puede sostener de forma estable."

explicacion: |
  Es el límite real que el modelo exponencial simple no tiene en
  cuenta.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico del crecimiento logístico tiene forma de 'S': crece casi como una exponencial al principio, y se aplana al acercarse a la capacidad de carga."

explicacion: |
  Es la versión más realista del crecimiento poblacional, a diferencia
  del modelo exponencial puro.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando una población está muy por debajo de la capacidad de carga, su crecimiento se parece mucho al modelo exponencial simple."

explicacion: |
  El freno por escasez de recursos recién se nota cuando la población
  ya está cerca del límite K.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Escasez de alimento o espacio, depredación, enfermedad"
tipo: mc
opciones_explicitas:
  - "Escasez de alimento o espacio, depredación, enfermedad"
  - "La cantidad de individuos que nacieron el año pasado"
  - "El color de la especie"

enunciado: "¿Cuáles son ejemplos típicos de factores limitantes del crecimiento poblacional?"

explicacion: |
  Son las causas reales por las que una población deja de crecer
  exponencialmente cerca de su capacidad de carga.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Además de nacimientos y muertes, la migración (entrada y salida de individuos) también afecta la tasa neta de crecimiento de una población."

explicacion: |
  Tasa neta = natalidad − mortalidad ± migración.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  p0: random(50, 500)
  t: random(1, 5)
  real: p0 * 2 ^ t
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Un cultivo de {p0} bacterias se duplica cada hora. ¿Es correcto que después de {t} horas haya {propuesto}?"

explicacion: |
  El valor correcto es {p0}×2^{t} = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["modelo_exponencial"]

variables:
  p0: random(20, 100)
  r: random(2, 4)

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "Una población pasa de {p0} a {p0 * r} en un solo período. ¿Cuál es el factor de crecimiento r?"

explicacion: |
  r = población nueva / población anterior = {p0 * r}/{p0} = {r}.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el factor de crecimiento r=1, la población se mantiene estable (ni crece ni decrece)."

explicacion: |
  P(t)=P₀×1ᵗ=P₀ para cualquier t — no cambia.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el factor de crecimiento r está entre 0 y 1 (por ejemplo, r=0.9), la población decrece con el tiempo."

explicacion: |
  Es el mismo caso de decaimiento exponencial ya visto en
  `../../matematica/familias-exponencial-logaritmica/`.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["modelo_exponencial", "problema"]

variables:
  p0: random(100, 1000)
  t: random(1, 3)

respuesta: p0 * 2 ^ t
tipo: input
tolerancia_abs: 0

enunciado: "Una colonia de {p0} individuos crece un 100% cada período (o sea, se duplica). ¿Cuántos hay después de {t} períodos?"

explicacion: |
  Crecer 100% es lo mismo que duplicarse: r=2.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En la naturaleza, el crecimiento estrictamente exponencial de una población suele ser sólo una fase temporal (por ejemplo, al colonizar un ambiente nuevo con recursos abundantes), no algo que dure para siempre."

explicacion: |
  Tarde o temprano, los factores limitantes empiezan a actuar.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  p0: random(50, 200)
  t: random(2, 5)
  r1: 2
  r2: 3

respuesta: ((p0 * r2 ^ t) > (p0 * r1 ^ t))
tipo: vf

enunciado: "Dos poblaciones parten de {p0}: una con r=2 (se duplica) y otra con r=3 (se triplica) cada período. ¿Es mayor la de r=3 después de {t} períodos?"

explicacion: |
  Un factor de crecimiento mayor siempre termina superando a uno menor,
  a igualdad de punto de partida.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La capacidad de carga de un ambiente no es un número fijo para siempre — puede cambiar si cambian los recursos disponibles (por ejemplo, una sequía la reduce)."

explicacion: |
  K depende de las condiciones reales del ambiente, no es una constante
  universal de la especie.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El modelo exponencial de crecimiento poblacional es la misma solución de la ecuación diferencial dP/dt=kP ya vista en `../../matematica/ecuaciones-diferenciales/`, aplicada a una población en vez de un capital o una muestra radiactiva."

explicacion: |
  Distintos fenómenos, misma estructura matemática de fondo.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["duplicacion"]

variables:
  p0: random(10, 50)
  n: random(1, 4)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {p0} se triplica cada período. ¿Cuántos períodos tardan en llegar a {p0 * (3 ^ n)}?"

explicacion: |
  Se reconoce el factor 3^{n} acumulado.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Distintas especies tienen distintas tasas de crecimiento — las bacterias se duplican en minutos u horas, mientras que poblaciones de mamíferos grandes tardan años en duplicarse."

explicacion: |
  El modelo matemático es el mismo, pero r y la escala de tiempo cambian
  muchísimo según la especie.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  natalidad: random(20, 50)
  mortalidad: random(5, 19)
  real: natalidad - mortalidad
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Natalidad {natalidad} por mil, mortalidad {mortalidad} por mil. ¿Es correcto que la tasa neta sea {propuesto} por mil?"

explicacion: |
  La tasa neta correcta es natalidad − mortalidad = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "crecimiento_poblacional"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El modelo exponencial simple sirve para predicciones de corto plazo o poblaciones lejos de su capacidad de carga; para el largo plazo (o cerca de K), el modelo logístico da una descripción más realista."

explicacion: |
  Es el resumen central del tema: ningún modelo es "el correcto"
  siempre — depende de la escala y el contexto.
```

## Sección: genetica-mendeliana-punnett (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "basico"
  tags: ["punnett", "vocabulario"]

enunciado: "¿Qué es un cuadro de Punnett?"
tipo: mc
opciones_explicitas:
  - "Una tabla que cruza los alelos que puede aportar cada progenitor, para predecir las proporciones de genotipos posibles en la descendencia"
  - "Un instrumento de laboratorio para medir ADN"
  - "Un gráfico de barras que muestra la cantidad de hijos por familia"
respuesta: "Una tabla que cruza los alelos que puede aportar cada progenitor, para predecir las proporciones de genotipos posibles en la descendencia"

explicacion: |
  Es una herramienta visual, no un instrumento de laboratorio.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "basico"
  tags: ["vocabulario"]

enunciado: "¿Cuál es la diferencia entre un alelo dominante y uno recesivo?"
tipo: mc
opciones_explicitas:
  - "El dominante se manifiesta en el fenotipo con una sola copia presente; el recesivo sólo se manifiesta si están las dos copias"
  - "El dominante siempre es más común en la población que el recesivo"
  - "No hay ninguna diferencia real, son dos nombres para lo mismo"
respuesta: "El dominante se manifiesta en el fenotipo con una sola copia presente; el recesivo sólo se manifiesta si están las dos copias"

explicacion: |
  Un heterocigota `Aa` muestra el fenotipo dominante, aunque tenga una
  copia recesiva 'escondida'.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "basico"
  tags: ["vocabulario"]

enunciado: "¿Cuál es la diferencia entre genotipo y fenotipo?"
tipo: mc
opciones_explicitas:
  - "El genotipo es la combinación de alelos que tiene un individuo; el fenotipo es cómo se expresa/ve esa combinación"
  - "Son exactamente lo mismo, sólo cambia el nombre"
  - "El fenotipo es siempre visible al microscopio, el genotipo no"
respuesta: "El genotipo es la combinación de alelos que tiene un individuo; el fenotipo es cómo se expresa/ve esa combinación"

explicacion: |
  `AA` y `Aa` son genotipos distintos, pero pueden compartir el mismo
  fenotipo dominante.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "basico"
  tags: ["vocabulario"]

enunciado: "¿Qué es un individuo heterocigota?"
tipo: mc
opciones_explicitas:
  - "El que tiene un alelo de cada tipo (por ejemplo, Aa)"
  - "El que tiene las dos copias iguales (AA o aa)"
  - "El que no tiene ningún alelo para ese gen"
respuesta: "El que tiene un alelo de cada tipo (por ejemplo, Aa)"

explicacion: |
  Homocigota es lo opuesto: las dos copias iguales (AA o aa).
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "avanzado"
  tags: ["punnett", "problema"]

respuesta: 0.25
tipo: input

enunciado: "En un cruce Aa × Aa, ¿cuál es la probabilidad de que un hijo tenga genotipo aa (homocigota recesivo)?"

pasos:
  - "P(a del padre) = 1/2, P(a de la madre) = 1/2, independientes"
  - "P(aa) = 1/2 × 1/2 = 0,25"

explicacion: |
  Es exactamente la casilla 'aa' del cuadro de Punnett: 1 de 4.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "avanzado"
  tags: ["punnett", "problema"]

respuesta: 0.75
tipo: input

enunciado: "En un cruce Aa × Aa (A dominante), ¿cuál es la probabilidad de que un hijo tenga fenotipo DOMINANTE (AA o Aa)?"

pasos:
  - "De las 4 combinaciones (AA, Aa, Aa, aa), 3 muestran fenotipo dominante"
  - "P(dominante) = 3/4 = 0,75"

explicacion: |
  Es la proporción clásica 3:1 de Mendel.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "avanzado"
  tags: ["punnett", "problema"]

respuesta: 0.5
tipo: input

enunciado: "Se cruza un heterocigota Aa con un homocigota recesivo aa (testcross). ¿Cuál es la probabilidad de que un hijo tenga genotipo aa?"

pasos:
  - "El progenitor aa siempre aporta 'a'; el Aa aporta 'A' o 'a' con 1/2 de probabilidad cada uno"
  - "P(aa) = 1 × 1/2 = 0,5"

explicacion: |
  Un testcross siempre da una proporción 1:1 entre los dos genotipos
  posibles, cuando uno de los progenitores es homocigota recesivo.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "intermedio"
  tags: ["punnett", "problema"]

respuesta: 1
tipo: input

enunciado: "Se cruza un homocigota dominante AA con un homocigota recesivo aa. ¿Qué proporción de los hijos será heterocigota Aa?"

pasos:
  - "El progenitor AA sólo puede aportar 'A'; el aa sólo puede aportar 'a'"
  - "Todos los hijos son Aa: proporción = 1 (100%)"

explicacion: |
  Sin variabilidad en los alelos que puede aportar cada progenitor, el
  resultado es un único genotipo posible.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "avanzado"
  tags: ["punnett", "probabilidad_compuesta"]

respuesta: verdadero
tipo: vf

enunciado: "Cada casilla del cuadro de Punnett es, literalmente, el producto de las probabilidades del alelo del padre y del alelo de la madre (probabilidad compuesta de eventos independientes)."

explicacion: |
  Heredar cada alelo es un evento independiente, así que las
  probabilidades se multiplican.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "intermedio"
  tags: ["probabilidad_compuesta", "aplicacion"]

enunciado: "¿Qué relación tiene el cuadro de Punnett con `../../matematica/probabilidad-compuesta/`?"
tipo: mc
opciones_explicitas:
  - "Es exactamente probabilidad compuesta (eventos independientes que se multiplican), con una notación visual de cuadraditos en vez de una fórmula"
  - "No tiene ninguna relación real con la probabilidad"
  - "El cuadro de Punnett reemplaza por completo la necesidad de calcular probabilidades"
respuesta: "Es exactamente probabilidad compuesta (eventos independientes que se multiplican), con una notación visual de cuadraditos en vez de una fórmula"

explicacion: |
  Es el cruce que más rinde de todo el bloque de probabilidad y
  estadística, según `troncos.md`.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "intermedio"
  tags: ["punnett", "problema"]

respuesta: 1
tipo: input

enunciado: "En el cuadro de Punnett de un cruce Aa × Aa (4 casillas: AA, Aa, Aa, aa), ¿cuántas casillas muestran fenotipo RECESIVO?"

explicacion: |
  Sólo la casilla 'aa' — las otras tres (AA, Aa, Aa) muestran fenotipo
  dominante.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "intermedio"
  tags: ["punnett"]

respuesta: verdadero
tipo: vf

enunciado: "La proporción fenotípica clásica 3:1 (3 dominantes por cada 1 recesivo) aparece en un cruce monohíbrido entre dos heterocigotas (Aa × Aa)."

explicacion: |
  Es el resultado más citado de los experimentos originales de Mendel
  con arvejas.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Mendel cruzó arvejas de semilla lisa (heterocigotas, Ll) entre sí y obtuvo, aproximadamente, 3/4 de semillas lisas y 1/4 de semillas rugosas. ¿Qué explica esta proporción?"
tipo: mc
opciones_explicitas:
  - "'Lisa' es el fenotipo dominante — un cruce Ll × Ll da genotipos 1 LL : 2 Ll : 1 ll, y tanto LL como Ll muestran el fenotipo dominante (liso)"
  - "Las semillas lisas son genéticamente idénticas entre sí, sin variación posible"
  - "Es un resultado que no tiene ninguna explicación genética conocida"
respuesta: "'Lisa' es el fenotipo dominante — un cruce Ll × Ll da genotipos 1 LL : 2 Ll : 1 ll, y tanto LL como Ll muestran el fenotipo dominante (liso)"

explicacion: |
  Es el experimento histórico real que originó las leyes de Mendel.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "avanzado"
  tags: ["punnett", "problema"]

respuesta: 0.5
tipo: input

enunciado: "Se cruza un heterocigota Aa con un homocigota dominante AA. ¿Cuál es la probabilidad de que un hijo sea heterocigota Aa?"

pasos:
  - "El progenitor AA siempre aporta 'A'; el Aa aporta 'A' o 'a' con 1/2 cada uno"
  - "P(Aa) = 1 × 1/2 = 0,5 (y P(AA) = 1 × 1/2 = 0,5, ninguno es aa)"

explicacion: |
  Con un progenitor homocigota dominante, ningún hijo puede ser
  recesivo — sólo se reparten entre AA y Aa.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "avanzado"
  tags: ["punnett"]

respuesta: verdadero
tipo: vf

enunciado: "El cuadro de Punnett asume que cada progenitor transmite uno de sus dos alelos al azar, de forma independiente de qué alelo transmite el otro progenitor."

explicacion: |
  Es la ley de la segregación independiente de Mendel, y es lo que
  justifica multiplicar las probabilidades en vez de sumarlas.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "avanzado"
  tags: ["punnett", "problema"]

respuesta: redondear(0.75 * 0.75, 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "En un cruce dihíbrido AaBb × AaBb (dos genes independientes entre sí), ¿cuál es la probabilidad de que un hijo muestre AMBOS fenotipos dominantes (para el gen A y para el gen B)?"

pasos:
  - "P(dominante en A) = 3/4; P(dominante en B) = 3/4, genes independientes"
  - "P(ambos dominantes) = 3/4 × 3/4 = {redondear(0.75 * 0.75, 4)}"

explicacion: |
  Es la misma multiplicación de probabilidad compuesta, ahora aplicada
  a dos genes en vez de a un único gen.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "intermedio"
  tags: ["testcross", "vocabulario"]

enunciado: "¿Para qué sirve un 'testcross' (cruzar con un homocigota recesivo conocido)?"
tipo: mc
opciones_explicitas:
  - "Para determinar el genotipo desconocido de un individuo con fenotipo dominante (podría ser AA o Aa)"
  - "Para aumentar la cantidad de hijos con fenotipo recesivo"
  - "Para eliminar por completo un alelo recesivo de una población"
respuesta: "Para determinar el genotipo desconocido de un individuo con fenotipo dominante (podría ser AA o Aa)"

explicacion: |
  Si aparece algún hijo con fenotipo recesivo, el individuo original
  era heterocigota (Aa).
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "avanzado"
  tags: ["testcross", "problema"]

enunciado: "Se cruza un individuo de fenotipo dominante (genotipo desconocido) con un homocigota recesivo, y aparece al menos un hijo con fenotipo recesivo. ¿Cuál era el genotipo del individuo original?"
tipo: mc
opciones_explicitas:
  - "Aa (heterocigota) — sólo así puede transmitir el alelo recesivo que aparece en la descendencia"
  - "AA (homocigota dominante) — no puede transmitir ningún alelo recesivo"
respuesta: "Aa (heterocigota) — sólo así puede transmitir el alelo recesivo que aparece en la descendencia"

explicacion: |
  Un AA nunca podría producir un hijo aa, sin importar el genotipo del
  otro progenitor recesivo.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué se dice que el cuadro de Punnett es 'probabilidad compuesta dibujada'?"
tipo: mc
opciones_explicitas:
  - "Porque cada una de sus casillas representa una combinación específica de alelos, con una probabilidad que es el producto de las probabilidades de cada alelo por separado"
  - "Porque fue inventado por el mismo matemático que descubrió la probabilidad compuesta"
  - "Porque no tiene ninguna base matemática real, es sólo una convención visual"
respuesta: "Porque cada una de sus casillas representa una combinación específica de alelos, con una probabilidad que es el producto de las probabilidades de cada alelo por separado"

explicacion: |
  Permite calcular probabilidades genéticas sin necesitar escribir
  ninguna fórmula, sólo llenando los cuadraditos.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el cuadro de Punnett?"
tipo: mc
opciones_explicitas:
  - "Para predecir, en términos de probabilidad, cómo se van a repartir los genotipos y fenotipos posibles en la descendencia de un cruce"
  - "Para determinar con certeza absoluta el genotipo de cada hijo antes de que nazca"
  - "Sólo se usa para estudiar plantas, no otros organismos"
respuesta: "Para predecir, en términos de probabilidad, cómo se van a repartir los genotipos y fenotipos posibles en la descendencia de un cruce"

explicacion: |
  Es la base de `../herencia-ligada-al-sexo/` y `../grupos-sanguineos/`,
  que aplican la misma lógica a mecanismos genéticos más específicos.
```

## Sección: grupos-sanguineos (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "basico"
  tags: ["abo", "vocabulario"]

enunciado: "¿Cuántos alelos posibles tiene el gen del sistema ABO, y cuántos tiene cada persona?"
tipo: mc
opciones_explicitas:
  - "Hay 3 alelos posibles (Iᴬ, Iᴮ, i) en la población, pero cada persona sólo tiene 2 (uno de cada progenitor)"
  - "Hay exactamente 2 alelos posibles, igual que cualquier otro gen"
  - "Cada persona tiene los 3 alelos a la vez"
respuesta: "Hay 3 alelos posibles (Iᴬ, Iᴮ, i) en la población, pero cada persona sólo tiene 2 (uno de cada progenitor)"

explicacion: |
  Es el ejemplo clásico de 'alelos múltiples' en genética humana.
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "intermedio"
  tags: ["codominancia", "vocabulario"]

enunciado: "¿Qué es la codominancia entre Iᴬ e Iᴮ?"
tipo: mc
opciones_explicitas:
  - "Que si una persona tiene ambos alelos, LOS DOS se expresan a la vez (fenotipo AB), sin que ninguno tape al otro"
  - "Que Iᴬ siempre domina sobre Iᴮ, tapándolo por completo"
  - "Que ninguno de los dos alelos se expresa nunca en el fenotipo"
respuesta: "Que si una persona tiene ambos alelos, LOS DOS se expresan a la vez (fenotipo AB), sin que ninguno tape al otro"

explicacion: |
  Es distinto de la dominancia simple de
  `../genetica-mendeliana-punnett/`, donde el dominante sí tapa al
  recesivo.
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "intermedio"
  tags: ["abo", "problema"]

enunciado: "¿Cuáles son los DOS genotipos posibles que dan fenotipo tipo A?"
tipo: mc
opciones_explicitas:
  - "IᴬIᴬ (homocigota) o Iᴬi (heterocigota)"
  - "Sólo IᴬIᴬ, no existe otra combinación posible"
  - "IᴬIᴮ o Iᴬi"
respuesta: "IᴬIᴬ (homocigota) o Iᴬi (heterocigota)"

explicacion: |
  Como Iᴬ es dominante sobre i, ambos genotipos dan el mismo fenotipo
  A.
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "intermedio"
  tags: ["abo", "problema"]

enunciado: "¿Cuál es el ÚNICO genotipo posible para el fenotipo AB?"
tipo: mc
opciones_explicitas:
  - "IᴬIᴮ — es la única combinación que produce el fenotipo AB, por codominancia"
  - "IᴬIᴬ o IᴮIᴮ, indistintamente"
  - "ii, porque O es la base de AB"
respuesta: "IᴬIᴮ — es la única combinación que produce el fenotipo AB, por codominancia"

explicacion: |
  A diferencia de A o B (que tienen 2 genotipos posibles cada uno), AB
  sólo tiene un genotipo posible.
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "avanzado"
  tags: ["abo", "problema"]

respuesta: 0.5
tipo: input

enunciado: "Padre tipo AB (IᴬIᴮ) × madre tipo O (ii). ¿Cuál es la probabilidad de que un hijo sea tipo A?"

pasos:
  - "El padre aporta Iᴬ o Iᴮ (1/2 cada uno); la madre sólo puede aportar i"
  - "P(hijo Iᴬi, tipo A) = 1/2"

explicacion: |
  La otra mitad de los hijos es tipo B (Iᴮi) — ningún hijo puede ser
  AB ni O en este cruce.
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "avanzado"
  tags: ["abo"]

respuesta: verdadero
tipo: vf

enunciado: "En un cruce entre un padre tipo AB y una madre tipo O, ningún hijo puede resultar tipo AB ni tipo O."

explicacion: |
  La madre sólo puede aportar 'i', así que ningún hijo puede recibir
  dos alelos i (para ser O) ni recibir Iᴬ e Iᴮ juntos de un mismo
  progenitor combinados con el otro (para ser AB).
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "avanzado"
  tags: ["codominancia"]

enunciado: "¿En qué se diferencia la codominancia (Iᴬ e Iᴮ) de la dominancia simple (A y a de `../genetica-mendeliana-punnett/`)?"
tipo: mc
opciones_explicitas:
  - "En dominancia simple, el heterocigota se ve igual que el homocigota dominante (la copia recesiva queda 'tapada'); en codominancia, el heterocigota muestra un fenotipo NUEVO donde se ven ambos alelos"
  - "No hay ninguna diferencia real entre ambos mecanismos"
  - "La codominancia sólo aplica a plantas, nunca a animales"
respuesta: "En dominancia simple, el heterocigota se ve igual que el homocigota dominante (la copia recesiva queda 'tapada'); en codominancia, el heterocigota muestra un fenotipo NUEVO donde se ven ambos alelos"

explicacion: |
  AB es un fenotipo distinto de A y de B — no 'se parece' a ninguno de
  los dos por separado.
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "avanzado"
  tags: ["abo", "problema"]

respuesta: 0.25
tipo: input

enunciado: "Padre tipo A, heterocigota (Iᴬi) × madre tipo B, heterocigota (Iᴮi). ¿Cuál es la probabilidad de que un hijo sea tipo O?"

pasos:
  - "El padre aporta Iᴬ o i (1/2 cada uno); la madre aporta Iᴮ o i (1/2 cada uno)"
  - "P(hijo ii, tipo O) = 1/2 × 1/2 = 0,25"

explicacion: |
  Aunque ninguno de los padres sea tipo O, ambos pueden ser portadores
  del alelo 'i' sin saberlo (por ser heterocigotas).
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué es importante conocer el grupo sanguíneo ABO antes de una transfusión?"
tipo: mc
opciones_explicitas:
  - "Porque transfundir sangre de un grupo incompatible puede provocar una reacción inmunológica grave, ya que el sistema inmune reconoce como 'extraños' los antígenos A o B que no tiene"
  - "El grupo sanguíneo no tiene ninguna relevancia médica real"
  - "Sólo importa la cantidad de sangre transfundida, no el grupo"
respuesta: "Porque transfundir sangre de un grupo incompatible puede provocar una reacción inmunológica grave, ya que el sistema inmune reconoce como 'extraños' los antígenos A o B que no tiene"

explicacion: |
  Es la aplicación médica directa de este sistema genético.
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "intermedio"
  tags: ["rh", "vocabulario"]

enunciado: "¿Qué es el factor Rh?"
tipo: mc
opciones_explicitas:
  - "Un gen DISTINTO del sistema ABO, con herencia de dominancia simple (Rh+ dominante sobre Rh−)"
  - "Otro nombre para el mismo gen del sistema ABO"
  - "Un cuarto alelo del sistema ABO, además de Iᴬ, Iᴮ e i"
respuesta: "Un gen DISTINTO del sistema ABO, con herencia de dominancia simple (Rh+ dominante sobre Rh−)"

explicacion: |
  El grupo sanguíneo completo (por ejemplo 'A+') combina ambos
  sistemas genéticos por separado.
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "intermedio"
  tags: ["rh"]

respuesta: verdadero
tipo: vf

enunciado: "El alelo Rh+ es dominante sobre el alelo Rh−, así que una persona Rh+Rh− (heterocigota) es Rh positivo."

explicacion: |
  Es dominancia simple clásica, a diferencia de la codominancia del
  sistema ABO.
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "avanzado"
  tags: ["abo", "aplicacion"]

enunciado: "Un hijo es tipo O (ii). ¿Puede uno de sus padres biológicos ser tipo AB (IᴬIᴮ)?"
tipo: mc
opciones_explicitas:
  - "No: un padre AB sólo puede aportar Iᴬ o Iᴮ, nunca 'i' — no puede tener un hijo ii"
  - "Sí, es perfectamente posible sin ninguna restricción"
respuesta: "No: un padre AB sólo puede aportar Iᴬ o Iᴮ, nunca 'i' — no puede tener un hijo ii"

explicacion: |
  Es un uso real de la genética de grupos sanguíneos en casos legales
  de determinación de paternidad (para excluir, no para confirmar con
  certeza absoluta).
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "avanzado"
  tags: ["abo", "problema"]

respuesta: 0.5
tipo: input

enunciado: "Un padre es tipo A, pero no se sabe si es IᴬIᴬ o Iᴬi (50% de probabilidad cada uno). Si es Iᴬi y la madre es tipo O (ii), ¿cuál es la probabilidad de que un hijo sea tipo O?"

pasos:
  - "Si el padre es Iᴬi: aporta Iᴬ o i (1/2 cada uno); la madre sólo aporta i"
  - "P(hijo ii | padre es Iᴬi) = 1/2"

explicacion: |
  Si en cambio el padre fuera IᴬIᴬ, ningún hijo podría ser tipo O — el
  genotipo exacto del padre (no sólo su fenotipo) cambia el cálculo.
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "basico"
  tags: ["abo"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque existan 3 alelos posibles para el gen ABO en la población (Iᴬ, Iᴮ, i), cada persona individual sólo tiene 2 de esos tres (uno heredado de cada progenitor)."

explicacion: |
  'Alelos múltiples' se refiere a la variedad en la POBLACIÓN, no a
  que un individuo tenga más de 2 copias de un gen.
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué a una persona tipo O se la suele llamar 'donante universal'?"
tipo: mc
opciones_explicitas:
  - "Porque su sangre no tiene ni el antígeno A ni el B, así que en general no genera el mismo tipo de rechazo inmunológico al ser transfundida a personas de otros grupos ABO"
  - "Porque puede recibir sangre de cualquier grupo sin ningún riesgo"
  - "Porque el tipo O es el grupo sanguíneo más común en todo el mundo, sin ninguna otra razón"
respuesta: "Porque su sangre no tiene ni el antígeno A ni el B, así que en general no genera el mismo tipo de rechazo inmunológico al ser transfundida a personas de otros grupos ABO"

explicacion: |
  Es consecuencia directa del genotipo ii, que no produce ninguno de
  los dos antígenos.
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "avanzado"
  tags: ["abo", "problema"]

respuesta: 0.25
tipo: input

enunciado: "Padre tipo A (Iᴬi) × madre tipo A (Iᴬi), ambos heterocigotas. ¿Cuál es la probabilidad de que un hijo sea tipo O?"

pasos:
  - "Ambos padres aportan Iᴬ o i (1/2 cada uno)"
  - "P(hijo ii) = 1/2 × 1/2 = 0,25"

explicacion: |
  Es el mismo patrón matemático que un cruce Aa × Aa de
  `../genetica-mendeliana-punnett/`, sólo que acá 'aa' se llama 'ii' y
  el fenotipo se llama 'tipo O' en vez de 'recesivo'.
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "intermedio"
  tags: ["probabilidad_condicional", "aplicacion"]

enunciado: "¿Qué relación tiene calcular el grupo sanguíneo posible de un hijo con `../../matematica/probabilidad-condicional/`?"
tipo: mc
opciones_explicitas:
  - "La probabilidad del genotipo del hijo depende de qué se conoce (o no) del genotipo exacto de los padres — es una probabilidad condicionada a esa información disponible"
  - "No tiene ninguna relación real con la probabilidad condicional"
  - "El grupo sanguíneo de un hijo nunca depende del genotipo de sus padres"
respuesta: "La probabilidad del genotipo del hijo depende de qué se conoce (o no) del genotipo exacto de los padres — es una probabilidad condicionada a esa información disponible"

explicacion: |
  Es la misma idea general que en `../herencia-ligada-al-sexo/`, ahora
  aplicada a un mecanismo de alelos múltiples y codominancia.
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "avanzado"
  tags: ["rh", "abo", "problema"]

respuesta: 0.125
tipo: input

enunciado: "Un hijo tiene 1/2 de probabilidad de ser tipo A (sistema ABO) y, de forma independiente, 1/4 de probabilidad de ser Rh negativo (sistema Rh). ¿Cuál es la probabilidad de que sea A Y Rh negativo a la vez?"

pasos:
  - "Son dos sistemas genéticos independientes entre sí (genes distintos)"
  - "P(A y Rh−) = 1/2 × 1/4 = 0,125"

explicacion: |
  Al ser genes ubicados en cromosomas distintos, se aplica la regla
  del producto de `../../matematica/probabilidad-compuesta/`.
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "intermedio"
  tags: ["rh", "abo"]

respuesta: verdadero
tipo: vf

enunciado: "El factor Rh y el sistema ABO son genes distintos, heredados de forma independiente entre sí — el genotipo de uno no determina el genotipo del otro."

explicacion: |
  Por eso existen 8 combinaciones posibles de grupo sanguíneo completo
  (A+, A−, B+, B−, AB+, AB−, O+, O−).
```

```
metadata:
  materia: "biologia"
  tema: "grupos_sanguineos"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la genética de los grupos sanguíneos?"
tipo: mc
opciones_explicitas:
  - "Para entender la compatibilidad en transfusiones, calcular probabilidades de herencia, y como aplicación real de alelos múltiples y codominancia"
  - "Sólo tiene aplicación teórica, sin ningún uso médico o legal real"
  - "Sólo sirve para clasificar tipos de sangre, sin relación con genética"
respuesta: "Para entender la compatibilidad en transfusiones, calcular probabilidades de herencia, y como aplicación real de alelos múltiples y codominancia"

explicacion: |
  Junto con `../herencia-ligada-al-sexo/`, completa las dos mitades
  del nodo `B3` del MAPA — dos mecanismos genéticos distintos, ambos
  resueltos con probabilidad condicional.
```

## Sección: cruce-dihibrido (31 preguntas)

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "En un cruce monohíbrido se estudia la herencia de un solo gen a la vez."

explicacion: |
  Correcto. "Mono" indica un solo par de alelos bajo estudio.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "Un cruce dihíbrido es aquel en el que se estudian dos genes distintos simultáneamente."

explicacion: |
  Correcto, el prefijo "di-" indica dos genes a la vez.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: "color y forma de la semilla"
tipo: mc
opciones_explicitas: ["color y forma de la semilla", "solo el color de la semilla", "solo la forma de la semilla", "ningún rasgo"]

enunciado: "Si se estudia la herencia del color Y la forma de la semilla al mismo tiempo, ¿qué tipo de cruce es?"

explicacion: |
  Dos características a la vez: cruce dihíbrido.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: falso
tipo: vf

enunciado: "El cruce dihíbrido es más simple que el cruce monohíbrido porque involucra menos genes."

explicacion: |
  Falso, es más complejo: involucra dos pares de genes en vez de uno.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos genes están en cromosomas distintos, se heredan de forma independiente uno del otro."

explicacion: |
  Correcto. Segundo principio de Mendel.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: falso
tipo: vf

enunciado: "Que un descendiente reciba el alelo dominante del gen 1 influye en el alelo que recibe del gen 2."

explicacion: |
  Falso, si los genes son independientes no se influyen.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: "independiente"
tipo: completar
respuestas_validas:
  - "independiente"

enunciado: "La ley que dice que los genes en cromosomas distintos se heredan sin influirse entre sí se llama ley de segregación ___."

explicacion: |
  Ley de segregación independiente (2ª ley de Mendel).
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "La segregación independiente permite tratar cada gen como un sorteo aparte y combinar sus probabilidades multiplicándolas."

explicacion: |
  Correcto, es la regla del producto para eventos independientes.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "gametos"]

respuesta: verdadero
tipo: vf

enunciado: "Un individuo con genotipo AaBb puede producir 4 tipos de gametos diferentes."

explicacion: |
  Combina A/a con B/b: AB, Ab, aB, ab.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "gametos"]

respuesta: "AB, Ab, aB, ab"
tipo: mc
opciones_explicitas: ["AB, Ab, aB, ab", "Solo AB y ab", "Aa y Bb", "AABB y aabb"]

enunciado: "Un individuo AaBb produce los siguientes tipos de gametos:"

explicacion: |
  Las 4 combinaciones posibles: AB, Ab, aB, ab.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "gametos"]

respuesta: verdadero
tipo: vf

enunciado: "Un individuo AABB (homocigota para ambos genes) produce un solo tipo de gameto (AB)."

explicacion: |
  Al ser homocigota, todos sus gametos llevan A y B.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["genetica", "combinatoria"]

variables:
  genes: uno_de([1, 2, 3])

respuesta: 2 ^ genes
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un individuo heterocigoto para {genes} genes produce 2 elevado a n tipos de gametos. ¿Cuántos tipos produce?"

pasos:
  - "2^n, con n = {genes}"

explicacion: |
  2^{genes}.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "punnett"]

respuesta: verdadero
tipo: vf

enunciado: "El cuadro de Punnett para un cruce dihíbrido tiene 16 casillas (matriz 4×4)."

explicacion: |
  Cada progenitor aporta 4 tipos de gametos: 4×4=16.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "punnett"]

respuesta: falso
tipo: vf

enunciado: "El cuadro de Punnett para un cruce monohíbrido tiene 16 casillas, igual que el dihíbrido."

explicacion: |
  Falso. El monohíbrido tiene 4 casillas (2×2); 16 es exclusivo del dihíbrido.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["genetica", "punnett"]

respuesta: "Cada progenitor produce 4 tipos de gametos diferentes"
tipo: mc
opciones_explicitas: ["Cada progenitor produce 4 tipos de gametos diferentes", "Hay 4 alelos en total en el sistema", "El cruce siempre produce 4 hijos en la descendencia", "No tiene una razón particular, es una convención"]

enunciado: "¿Por qué el cuadro de Punnett de un cruce dihíbrido tiene 4 filas y 4 columnas?"

explicacion: |
  Porque cada progenitor produce 4 tipos de gametos posibles.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "Al cruzar AaBb × AaBb, la proporción fenotípica clásica es 9:3:3:1."

explicacion: |
  Correcto, es la proporción clásica del cruce dihíbrido.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "En la proporción 9:3:3:1, el 9/16 corresponde a dominante en ambos genes."

explicacion: |
  Correcto, es el grupo mayoritario.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: falso
tipo: vf

enunciado: "En la proporción 9:3:3:1, el 1/16 corresponde a dominante en ambos genes."

explicacion: |
  Falso, el 1/16 es recesivo en ambos genes.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: "1"
tipo: completar
respuestas_validas:
  - "1"
  - "un"

enunciado: "En la proporción 9:3:3:1, la fracción recesiva en ambos genes es ___ dieciseisavos."

explicacion: |
  1/16 es la fracción doble recesiva.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de las 4 fracciones de la proporción 9:3:3:1 (9+3+3+1) da 16."

explicacion: |
  Correcto, es el total de casillas del cuadro dihíbrido.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["mendel", "probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Como los genes son independientes, se puede resolver cada gen por separado (3:1) y multiplicar, en vez de armar las 16 casillas."

explicacion: |
  Correcto, es un atajo válido por la segregación independiente.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["probabilidad", "genetica"]

variables:
  p1: uno_de([3, 1])
  p2: uno_de([3, 1])

respuesta: (p1 / 4) * (p2 / 4)
tipo: completar
tolerancia_abs: 0.01

enunciado: "En AaBb × AaBb, P(dominante gen1) = {p1}/4 y P(dominante gen2) = {p2}/4. ¿Cuál es la probabilidad combinada?"

pasos:
  - "Multiplicar ambas probabilidades"

explicacion: |
  ({p1}/4) × ({p2}/4).
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Multiplicar probabilidades de eventos independientes es la misma lógica de la probabilidad compuesta."

explicacion: |
  Correcto — ver ../../matematica/probabilidad-compuesta/.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["mendel", "monohibridismo"]

respuesta: "3/4"
tipo: mc
opciones_explicitas: ["3/4", "1/4", "1/2", "1"]

enunciado: "En Aa × Aa, ¿cuál es la probabilidad de fenotipo dominante en un descendiente?"

explicacion: |
  AA (1/4) + Aa (2/4) = 3/4 con fenotipo dominante.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["genetica", "probabilidad"]

variables:
  total: uno_de([16, 32, 48, 64])

respuesta: total * 9 / 16
tipo: completar
tolerancia_abs: 0.01

enunciado: "En AaBb × AaBb con {total} descendientes totales, ¿cuántos se esperan con fenotipo dominante en ambos genes?"

explicacion: |
  {total} × 9/16.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["genetica", "probabilidad"]

variables:
  total: uno_de([16, 32, 48, 64])

respuesta: total * 1 / 16
tipo: completar
tolerancia_abs: 0.01

enunciado: "En AaBb × AaBb con {total} descendientes totales, ¿cuántos se esperan con fenotipo recesivo en ambos genes?"

explicacion: |
  {total} × 1/16.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["genetica", "probabilidad"]

variables:
  total: uno_de([16, 32, 48, 64])

respuesta: total * 3 / 16
tipo: completar
tolerancia_abs: 0.01

enunciado: "En AaBb × AaBb con {total} descendientes totales, ¿cuántos se esperan con fenotipo dominante en el gen 1 y recesivo en el gen 2?"

explicacion: |
  {total} × 3/16.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["mendel"]

respuesta: verdadero
tipo: vf

enunciado: "Mendel usó guisantes con forma de semilla (lisa/rugosa) y color (amarillo/verde) como los 2 genes de su cruce dihíbrido clásico."

explicacion: |
  Correcto, es el experimento clásico de Mendel.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["mendel", "proporciones"]

respuesta: verdadero
tipo: vf

enunciado: "La semilla lisa y amarilla (dominante en ambos) es el fenotipo más común, con 9/16 de la descendencia."

explicacion: |
  Correcto, es la proporción mayoritaria.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["mendel", "proporciones"]

respuesta: verdadero
tipo: vf

enunciado: "La semilla rugosa y verde (recesiva en ambos) es la menos común, con 1/16 de la descendencia."

explicacion: |
  Correcto, es la proporción minoritaria.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "avanzado"
  tags: ["mendel", "segregacion_independiente"]

respuesta: falso
tipo: vf

enunciado: "El cruce dihíbrido de Mendel confirmó que los genes de forma y color se heredan de manera dependiente entre sí."

explicacion: |
  Falso. Confirmó que se heredan de forma INDEPENDIENTE.
```

## Sección: herencia-ligada-al-sexo (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "basico"
  tags: ["ligado_x", "vocabulario"]

enunciado: "¿Qué significa que un gen esté 'ligado al X'?"
tipo: mc
opciones_explicitas:
  - "Que el gen está ubicado en el cromosoma X, así que su herencia depende de cuántas copias de X tiene cada sexo"
  - "Que el gen sólo existe en mujeres, nunca en varones"
  - "Que el gen determina directamente el sexo biológico del individuo"
respuesta: "Que el gen está ubicado en el cromosoma X, así que su herencia depende de cuántas copias de X tiene cada sexo"

explicacion: |
  Mujeres tienen XX (2 copias); varones tienen XY (1 sola copia de X).
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "intermedio"
  tags: ["ligado_x"]

enunciado: "¿Por qué un varón (XY) expresa un rasgo recesivo ligado al X con una sola copia del alelo recesivo, mientras que una mujer necesita dos?"
tipo: mc
opciones_explicitas:
  - "Porque el varón sólo tiene un cromosoma X — no hay un segundo X con una copia dominante que pueda 'tapar' al recesivo"
  - "Porque los alelos recesivos son más fuertes en varones que en mujeres"
  - "No hay ninguna diferencia real entre varones y mujeres para estos genes"
respuesta: "Porque el varón sólo tiene un cromosoma X — no hay un segundo X con una copia dominante que pueda 'tapar' al recesivo"

explicacion: |
  Es la razón cromosómica detrás de toda la asimetría de este tema.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "intermedio"
  tags: ["ligado_x"]

respuesta: verdadero
tipo: vf

enunciado: "Los rasgos recesivos ligados al X (como hemofilia o daltonismo) son mucho más comunes en varones que en mujeres."

explicacion: |
  Una mujer necesita las dos copias recesivas; un varón, sólo una.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "intermedio"
  tags: ["portadora", "vocabulario"]

enunciado: "¿Qué es una mujer 'portadora' de un rasgo recesivo ligado al X?"
tipo: mc
opciones_explicitas:
  - "Una mujer heterocigota (XᴬXᵃ): no expresa el rasgo (tiene la copia dominante), pero puede transmitir el alelo recesivo a su descendencia"
  - "Una mujer que ya expresa el rasgo de forma visible"
  - "Una mujer que no puede tener hijos"
respuesta: "Una mujer heterocigota (XᴬXᵃ): no expresa el rasgo (tiene la copia dominante), pero puede transmitir el alelo recesivo a su descendencia"

explicacion: |
  Es la aplicación de 'heterocigota' de `../genetica-mendeliana-punnett/`
  a un gen ligado al X.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 0.5
tipo: input

enunciado: "Padre no afectado (XᴬY) × madre portadora (XᴬXᵃ). ¿Cuál es la probabilidad de que un hijo VARÓN esté afectado (P(afectado | varón))?"

pasos:
  - "Entre los hijos varones (XᴬY o XᵃY, cada uno 1/2 de probabilidad), la mitad está afectada"
  - "P(afectado | varón) = 0,5"

explicacion: |
  El padre sólo aporta Y a los varones; el alelo decisivo lo aporta la
  madre, que es portadora (1/2 de probabilidad de aportar el recesivo).
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 0
tipo: input

enunciado: "Con el mismo cruce (padre XᴬY, madre XᴬXᵃ), ¿cuál es la probabilidad de que una hija MUJER esté afectada (P(afectada | mujer))?"

pasos:
  - "El padre siempre aporta Xᴬ a sus hijas — ninguna hija puede recibir dos copias recesivas"
  - "P(afectada | mujer) = 0"

explicacion: |
  Con un padre no afectado, ninguna hija puede estar afectada por este
  gen, sin importar el genotipo de la madre.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 0.5
tipo: input

enunciado: "Con el mismo cruce (padre XᴬY, madre XᴬXᵃ), ¿cuál es la probabilidad de que una hija sea PORTADORA (P(portadora | mujer))?"

pasos:
  - "Entre las hijas (XᴬXᴬ o XᴬXᵃ, cada una 1/2), la mitad es portadora"
  - "P(portadora | mujer) = 0,5"

explicacion: |
  La condición 'portadora' depende de qué alelo aportó la madre —
  50/50, igual que cualquier alelo heterocigota.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["probabilidad_condicional"]

respuesta: verdadero
tipo: vf

enunciado: "P(afectado | hijo varón) y P(afectado | hija mujer) son dos probabilidades condicionales DISTINTAS sobre el mismo cruce — condicionar sobre el sexo del hijo cambia el resultado."

explicacion: |
  Es la aplicación directa de `../../matematica/probabilidad-condicional/`
  a este mecanismo genético: en el ejemplo de la teoría, una da 1/2 y
  la otra da 0.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Cuáles son ejemplos reales de rasgos recesivos ligados al X en humanos?"
tipo: mc
opciones_explicitas:
  - "Hemofilia y daltonismo (dificultad para distinguir colores)"
  - "Estatura y color de ojos"
  - "Grupo sanguíneo y factor Rh"
respuesta: "Hemofilia y daltonismo (dificultad para distinguir colores)"

explicacion: |
  Ambos son mucho más frecuentes en varones que en mujeres, por el
  mecanismo de este módulo. Los grupos sanguíneos son otro sistema,
  ver `../grupos-sanguineos/`.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 1
tipo: input

enunciado: "Madre AFECTADA (XᵃXᵃ) × padre no afectado (XᴬY). ¿Cuál es la probabilidad de que un hijo VARÓN esté afectado?"

pasos:
  - "La madre sólo puede aportar Xᵃ (es lo único que tiene); el padre aporta Y a sus hijos varones"
  - "Todos los hijos varones son XᵃY: P(afectado | varón) = 1"

explicacion: |
  Con una madre afectada, TODOS los hijos varones heredan el alelo
  recesivo — patrón clásico de la herencia ligada al X.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 0
tipo: input

enunciado: "Con el mismo cruce (madre XᵃXᵃ, padre XᴬY), ¿cuál es la probabilidad de que una hija esté afectada?"

pasos:
  - "El padre siempre aporta Xᴬ a sus hijas; la madre sólo puede aportar Xᵃ"
  - "Todas las hijas son XᴬXᵃ (portadoras, no afectadas): P(afectada | mujer) = 0"

explicacion: |
  Aunque la madre esté afectada, ninguna hija lo está — pero todas
  quedan portadoras.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué el daltonismo (dificultad para distinguir colores) es mucho más común en varones que en mujeres?"
tipo: mc
opciones_explicitas:
  - "Porque es un rasgo recesivo ligado al X: un varón lo expresa con una sola copia del alelo, mientras que una mujer necesita las dos copias"
  - "Porque los ojos de los varones tienen una estructura biológica distinta a la de las mujeres"
  - "El daltonismo es igual de común en ambos sexos, no hay ninguna diferencia real"
respuesta: "Porque es un rasgo recesivo ligado al X: un varón lo expresa con una sola copia del alelo, mientras que una mujer necesita las dos copias"

explicacion: |
  Es la aplicación directa del mecanismo de este módulo a un caso
  real y común.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 0.25
tipo: input

enunciado: "Padre no afectado (XᴬY) × madre portadora (XᴬXᵃ). Sin condicionar sobre el sexo, ¿cuál es la probabilidad de que un hijo (varón o mujer, cualquiera) nazca afectado?"

pasos:
  - "De las 4 combinaciones igual de probables (XᴬXᴬ, XᴬXᵃ, XᴬY, XᵃY), sólo 1 está afectada (XᵃY)"
  - "P(afectado) = 1/4 = 0,25"

explicacion: |
  Esta es la probabilidad SIN condicionar sobre el sexo — muy distinta
  de P(afectado|varón)=0,5 y P(afectado|mujer)=0 calculadas antes.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "intermedio"
  tags: ["ligado_x"]

respuesta: verdadero
tipo: vf

enunciado: "Una mujer necesita las DOS copias recesivas (XᵃXᵃ) para expresar un rasgo ligado al X, porque tiene dos cromosomas X y la copia dominante en cualquiera de los dos alcanza para tapar al recesivo."

explicacion: |
  Es la misma lógica de dominancia/recesividad de
  `../genetica-mendeliana-punnett/`, aplicada a un gen ligado al X.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 0
tipo: input

enunciado: "Padre AFECTADO (XᵃY) × madre homocigota dominante, no portadora (XᴬXᴬ). ¿Cuál es la probabilidad de que un hijo VARÓN esté afectado?"

pasos:
  - "El padre sólo aporta Y a sus hijos varones (nunca su Xᵃ); la madre sólo puede aportar Xᴬ"
  - "Todos los hijos varones son XᴬY: P(afectado | varón) = 0"

explicacion: |
  Un padre nunca transmite su cromosoma X a sus hijos varones (les
  transmite el Y) — por eso un padre afectado no puede 'pasarle'
  directamente el rasgo a un hijo varón.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 1
tipo: input

enunciado: "Con el mismo cruce (padre XᵃY afectado, madre XᴬXᴬ), ¿cuál es la probabilidad de que una hija sea portadora?"

pasos:
  - "El padre siempre aporta Xᵃ a sus hijas; la madre siempre aporta Xᴬ"
  - "Todas las hijas son XᴬXᵃ: P(portadora | mujer) = 1"

explicacion: |
  Un padre afectado transmite el alelo recesivo a TODAS sus hijas
  (nunca a sus hijos varones) — todas quedan portadoras.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "intermedio"
  tags: ["ligado_x"]

respuesta: verdadero
tipo: vf

enunciado: "Un padre siempre transmite su cromosoma Y (no su X) a sus hijos varones — por eso un rasgo ligado al X del padre nunca pasa directamente de padre a hijo varón."

explicacion: |
  El hijo varón recibe su único X de la madre, no del padre.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Una familia con antecedentes de hemofilia quiere estimar el riesgo de que un futuro hijo esté afectado. ¿Qué información hace falta, además de si los padres son portadores o no?"
tipo: mc
opciones_explicitas:
  - "El sexo del futuro hijo, porque la probabilidad de estar afectado es distinta según sea varón o mujer"
  - "El sexo no importa: la probabilidad de estar afectado es siempre la misma para cualquier hijo"
  - "Ningún dato adicional es necesario más allá del genotipo de los padres"
respuesta: "El sexo del futuro hijo, porque la probabilidad de estar afectado es distinta según sea varón o mujer"

explicacion: |
  Es la aplicación real del asesoramiento genético: condicionar sobre
  el sexo cambia el riesgo calculado.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 0.5
tipo: input

enunciado: "Padre AFECTADO (XᵃY) × madre PORTADORA (XᴬXᵃ). ¿Cuál es la probabilidad de que una hija esté afectada (XᵃXᵃ)?"

pasos:
  - "El padre siempre aporta Xᵃ a sus hijas; la madre aporta Xᴬ o Xᵃ con 1/2 cada uno"
  - "P(hija XᵃXᵃ) = 1 × 1/2 = 0,5"

explicacion: |
  Es el único tipo de cruce donde SÍ puede haber hijas afectadas: hace
  falta que el padre esté afectado Y que la madre aporte el recesivo.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la herencia ligada al sexo?"
tipo: mc
opciones_explicitas:
  - "Para explicar por qué ciertas condiciones genéticas afectan de forma desigual a varones y mujeres, y para calcular el riesgo real de un hijo según su sexo"
  - "Sólo tiene aplicación en plantas, no en humanos"
  - "Sólo sirve para determinar el sexo biológico de un futuro hijo"
respuesta: "Para explicar por qué ciertas condiciones genéticas afectan de forma desigual a varones y mujeres, y para calcular el riesgo real de un hijo según su sexo"

explicacion: |
  Es la aplicación de `../../matematica/probabilidad-condicional/` a
  un mecanismo genético real — `../grupos-sanguineos/` sigue con otro
  mecanismo distinto, también condicional.
```

