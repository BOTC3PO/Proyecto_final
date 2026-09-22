# Examen jefe — [PENDIENTE #609]

> Logro #609. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **122 preguntas totales** en 5/5 secciones.

---

## Sección: muestreo-y-sesgo (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["muestreo", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre población y muestra?"
tipo: mc
opciones_explicitas:
  - "La población es el grupo completo que interesa estudiar; la muestra es el subconjunto más chico que realmente se mide"
  - "Son dos nombres distintos para exactamente lo mismo"
  - "La muestra siempre es más grande que la población"
respuesta: "La población es el grupo completo que interesa estudiar; la muestra es el subconjunto más chico que realmente se mide"

explicacion: |
  Se estudia la muestra para sacar conclusiones sobre la población
  completa.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["muestreo"]

enunciado: "¿Por qué casi siempre se estudia una muestra en vez de censar a toda la población?"
tipo: mc
opciones_explicitas:
  - "Porque censar a toda la población suele ser demasiado caro, lento o directamente imposible"
  - "Porque las muestras siempre dan resultados más precisos que censar a toda la población"
  - "Porque está prohibido por ley censar poblaciones completas"
respuesta: "Porque censar a toda la población suele ser demasiado caro, lento o directamente imposible"

explicacion: |
  Un censo completo (como el censo nacional) es la excepción, no la
  regla, justamente por su costo y complejidad.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["muestreo", "vocabulario"]

enunciado: "¿Qué significa que una muestra sea 'representativa'?"
tipo: mc
opciones_explicitas:
  - "Que sus características (promedios, proporciones, dispersión) se parecen a las de la población completa"
  - "Que incluye a absolutamente todos los miembros de la población"
  - "Que fue elegida por el investigador a mano, uno por uno"
respuesta: "Que sus características (promedios, proporciones, dispersión) se parecen a las de la población completa"

explicacion: |
  Es lo que permite generalizar conclusiones de la muestra hacia toda
  la población.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo", "vocabulario"]

enunciado: "¿Qué caracteriza al muestreo aleatorio simple?"
tipo: mc
opciones_explicitas:
  - "Cada elemento de la población tiene exactamente la misma probabilidad de ser elegido"
  - "Se eligen sólo los elementos más fáciles de conseguir"
  - "Se elige un elemento cada 10 posiciones de una lista"
respuesta: "Cada elemento de la población tiene exactamente la misma probabilidad de ser elegido"

explicacion: |
  Es el ideal teórico, como sortear nombres de un bolillero.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo", "vocabulario"]

enunciado: "¿En qué consiste el muestreo estratificado?"
tipo: mc
opciones_explicitas:
  - "Se divide la población en subgrupos según alguna característica relevante, y se muestrea de cada subgrupo en proporción a su tamaño"
  - "Se toman sólo los elementos más accesibles, sin ningún criterio adicional"
  - "Se sortea un único elemento y se asume que representa a toda la población"
respuesta: "Se divide la población en subgrupos según alguna característica relevante, y se muestrea de cada subgrupo en proporción a su tamaño"

explicacion: |
  Garantiza que ningún subgrupo quede sub- o sobre-representado por
  puro azar.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo"]

respuesta: verdadero
tipo: vf

enunciado: "En el muestreo estratificado, la población se divide primero en subgrupos (estratos) antes de elegir a quién muestrear de cada uno."

explicacion: |
  Por ejemplo, dividir por provincia o por curso antes de sortear
  dentro de cada grupo.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["sesgo", "vocabulario"]

enunciado: "¿Qué significa que una muestra esté 'sesgada'?"
tipo: mc
opciones_explicitas:
  - "Que el método usado para elegirla favorece sistemáticamente a cierto tipo de casos, así que no representa a la población real"
  - "Que tiene muy pocos elementos"
  - "Que se recolectó demasiado rápido"
respuesta: "Que el método usado para elegirla favorece sistemáticamente a cierto tipo de casos, así que no representa a la población real"

explicacion: |
  El sesgo es un problema del MÉTODO de selección, no del tamaño de
  la muestra.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "aplicacion"]

enunciado: "Un estudio encuesta a personas en la calle un martes a las 11 de la mañana, para estimar la opinión de 'toda la población adulta' sobre un tema. ¿Qué problema tiene este método?"
tipo: mc
opciones_explicitas:
  - "Sesgo de selección: excluye sistemáticamente a quienes están trabajando en ese horario, un grupo grande de la población"
  - "Ningún problema, porque la calle es un lugar público abierto a cualquiera"
  - "El único problema es que la muestra es demasiado grande"
respuesta: "Sesgo de selección: excluye sistemáticamente a quienes están trabajando en ese horario, un grupo grande de la población"

explicacion: |
  El horario y el lugar de la encuesta ya determinan qué tipo de
  personas tienen chance de ser encuestadas.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "vocabulario"]

enunciado: "¿Qué es el sesgo del voluntario?"
tipo: mc
opciones_explicitas:
  - "Que quienes se ofrecen espontáneamente a participar de un estudio suelen tener características distintas del resto de la población"
  - "Que los voluntarios siempre mienten en sus respuestas"
  - "Que un estudio con voluntarios nunca puede tener sesgo"
respuesta: "Que quienes se ofrecen espontáneamente a participar de un estudio suelen tener características distintas del resto de la población"

explicacion: |
  Por ejemplo, más motivación, más tiempo libre, u opiniones más
  extremas que el promedio.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "avanzado"
  tags: ["sesgo", "aplicacion"]

enunciado: "Una encuesta de 1936, con más de 2 millones de respuestas, predijo mal el resultado de una elección presidencial porque armó su lista de encuestados a partir de guías telefónicas y registros de autos (en plena Depresión, bienes de clase media-alta). ¿Qué enseña este caso?"
tipo: mc
opciones_explicitas:
  - "Que una muestra gigante sigue estando sesgada si el método de selección está sesgado — el tamaño no arregla el sesgo"
  - "Que las encuestas con más de un millón de respuestas nunca pueden estar equivocadas"
  - "Que las guías telefónicas eran, en esa época, la mejor forma posible de armar una muestra"
respuesta: "Que una muestra gigante sigue estando sesgada si el método de selección está sesgado — el tamaño no arregla el sesgo"

explicacion: |
  Es el ejemplo histórico estándar de sesgo de selección: el tamaño
  de la muestra (2 millones) no compensó que el método excluía
  sistemáticamente a buena parte del electorado real.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "avanzado"
  tags: ["sesgo"]

respuesta: verdadero
tipo: vf

enunciado: "Una muestra grande no garantiza que sea representativa, si el método usado para elegirla está sesgado."

explicacion: |
  Agrandar una muestra reduce el error por azar, pero no corrige un
  sesgo sistemático en cómo se la construyó.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo", "completar"]

tipo: completar
enunciado: "Completá: un método de muestreo que le da a cada elemento de la población la misma probabilidad de ser elegido se llama muestreo aleatorio ___."
respuestas_validas:
  - "simple"

explicacion: |
  Es el ideal teórico, aunque en la práctica no siempre se puede
  armar la lista completa de la población para sortear.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "avanzado"
  tags: ["muestreo", "problema"]

variables:
  poblacion_total: 1000
  poblacion_estrato: uno_de([200, 250, 400])
  muestra_total: 100

respuesta: redondear(muestra_total * (poblacion_estrato / poblacion_total), 0)
tipo: input

enunciado: "Una escuela tiene {poblacion_total} alumnos en total, de los cuales {poblacion_estrato} son de un curso particular. Si se arma una muestra estratificada de {muestra_total} alumnos, ¿cuántos deberían salir de ese curso, en proporción a su tamaño?"

pasos:
  - "Proporción del estrato = {poblacion_estrato}/{poblacion_total}"
  - "Cantidad de la muestra = {muestra_total} × ({poblacion_estrato}/{poblacion_total}) = {redondear(muestra_total * (poblacion_estrato / poblacion_total), 0)}"

explicacion: |
  El muestreo estratificado respeta el peso real de cada subgrupo
  dentro de la población.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo", "vocabulario"]

enunciado: "¿En qué consiste el muestreo sistemático?"
tipo: mc
opciones_explicitas:
  - "Se elige un elemento cada k posiciones de una lista ordenada (por ejemplo, cada 10° cliente que entra a un local)"
  - "Se dividen los elementos en subgrupos según alguna característica"
  - "Se eligen sólo los elementos que están más a mano"
respuesta: "Se elige un elemento cada k posiciones de una lista ordenada (por ejemplo, cada 10° cliente que entra a un local)"

explicacion: |
  Es más fácil de aplicar que el aleatorio simple puro, si ya existe
  una lista ordenada de la población.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo", "sesgo", "vocabulario"]

enunciado: "¿Qué caracteriza al muestreo por conveniencia, y por qué es el más riesgoso de los cuatro?"
tipo: mc
opciones_explicitas:
  - "Se toma lo que está más a mano (los primeros que responden, quienes pasan por la puerta) — es el más fácil y barato, pero también el que más riesgo tiene de terminar sesgado"
  - "Se sortea entre absolutamente todos los elementos de la población con la misma probabilidad, por eso nunca tiene sesgo"
  - "Es el método más costoso de todos, pero el más preciso"
respuesta: "Se toma lo que está más a mano (los primeros que responden, quienes pasan por la puerta) — es el más fácil y barato, pero también el que más riesgo tiene de terminar sesgado"

explicacion: |
  La facilidad de armarlo es, justamente, lo que suele introducir
  sesgo de selección.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "avanzado"
  tags: ["sesgo", "muestreo"]

respuesta: verdadero
tipo: vf

enunciado: "Aumentar el tamaño de una muestra reduce el error debido al azar, pero NO corrige un sesgo sistemático que venga del método usado para elegirla."

explicacion: |
  Son dos problemas distintos: el error por azar se reduce con más
  datos; el sesgo es un problema del método, no de la cantidad.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "avanzado"
  tags: ["muestreo", "normal"]

enunciado: "Si se toman muchas muestras distintas de la misma población y se calcula el promedio de cada una, ¿cómo tienden a distribuirse esos promedios?"
tipo: mc
opciones_explicitas:
  - "Tienden a distribuirse en forma de campana (aproximadamente normal), sin importar cómo se distribuya la población original"
  - "Siempre dan exactamente el mismo valor, sin ninguna variación"
  - "Se distribuyen de forma completamente impredecible, sin ningún patrón"
respuesta: "Tienden a distribuirse en forma de campana (aproximadamente normal), sin importar cómo se distribuya la población original"

explicacion: |
  Es la idea que se formaliza en `../teorema-central-del-limite/`, el
  módulo que sigue.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["muestreo", "aplicacion"]

enunciado: "¿Por qué las encuestadoras políticas serias invierten tanto esfuerzo en el método de muestreo (y no sólo en juntar muchas respuestas)?"
tipo: mc
opciones_explicitas:
  - "Porque una muestra sesgada, aunque sea grande, produce una estimación torcida de la opinión pública real — el método importa más que la cantidad"
  - "Porque la ley obliga a usar un método de muestreo específico en todas las encuestas"
  - "Porque cuantas más respuestas se junten, siempre es mejor sin importar cómo se consiguieron"
respuesta: "Porque una muestra sesgada, aunque sea grande, produce una estimación torcida de la opinión pública real — el método importa más que la cantidad"

explicacion: |
  Es la misma lección del caso histórico de 1936, aplicada a encuestas
  actuales.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "problema"]

enunciado: "Una encuesta se publica únicamente en una app de noticias, y se pide a quien la vea que la responda si quiere. ¿Qué tipo de sesgo tiene más probabilidad de aparecer en los resultados?"
tipo: mc
opciones_explicitas:
  - "Sesgo de selección (sólo llega a quien usa esa app) combinado con sesgo del voluntario (sólo responde quien elige hacerlo)"
  - "Ningún sesgo, porque cualquiera con la app puede responder si quiere"
  - "Sólo hay sesgo si la encuesta tiene menos de 100 respuestas"
respuesta: "Sesgo de selección (sólo llega a quien usa esa app) combinado con sesgo del voluntario (sólo responde quien elige hacerlo)"

explicacion: |
  Quien no usa esa app queda afuera de entrada, y entre quienes sí la
  usan, sólo responde quien decide hacerlo — dos filtros, dos sesgos.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender los tipos de muestreo y de sesgo?"
tipo: mc
opciones_explicitas:
  - "Para poder evaluar si una muestra realmente representa a la población que dice representar, antes de confiar en sus conclusiones"
  - "Sólo sirve para diseñar encuestas políticas"
  - "Sólo importa si la población es muy grande"
respuesta: "Para poder evaluar si una muestra realmente representa a la población que dice representar, antes de confiar en sus conclusiones"

explicacion: |
  Es el fundamento sobre el que se construyen
  `../teorema-central-del-limite/`, `../intervalo-de-confianza/` y
  `../test-de-hipotesis/`.
```

## Sección: triangulos (34 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "vocabulario"]

enunciado: "¿Qué es un triángulo?"
tipo: mc
opciones_explicitas:
  - "Un polígono de 3 lados y 3 ángulos internos"
  - "Un polígono de 4 lados"
  - "Cualquier figura con ángulos"
respuesta: "Un polígono de 3 lados y 3 ángulos internos"

explicacion: |
  Es el polígono más simple posible.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_lados", "vocabulario"]

enunciado: "¿Qué es un triángulo equilátero?"
tipo: mc
opciones_explicitas:
  - "El que tiene sus 3 lados iguales"
  - "El que tiene 2 lados iguales"
  - "El que tiene sus 3 lados distintos"
respuesta: "El que tiene sus 3 lados iguales"

explicacion: |
  Los 3 lados miden exactamente lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_lados", "vocabulario"]

enunciado: "¿Qué es un triángulo isósceles?"
tipo: mc
opciones_explicitas:
  - "El que tiene exactamente 2 lados iguales"
  - "El que tiene sus 3 lados iguales"
  - "El que no tiene ningún lado igual a otro"
respuesta: "El que tiene exactamente 2 lados iguales"

explicacion: |
  El tercer lado es distinto de los otros dos.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_lados", "vocabulario"]

enunciado: "¿Qué es un triángulo escaleno?"
tipo: mc
opciones_explicitas:
  - "El que tiene sus 3 lados con medidas distintas entre sí"
  - "El que tiene sus 3 lados iguales"
  - "El que tiene exactamente 2 lados iguales"
respuesta: "El que tiene sus 3 lados con medidas distintas entre sí"

explicacion: |
  Ningún par de lados coincide en su medida.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_angulos", "vocabulario"]

enunciado: "¿Qué es un triángulo acutángulo?"
tipo: mc
opciones_explicitas:
  - "El que tiene sus 3 ángulos internos agudos"
  - "El que tiene un ángulo recto"
  - "El que tiene un ángulo obtuso"
respuesta: "El que tiene sus 3 ángulos internos agudos"

explicacion: |
  Los tres ángulos son menores a 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_angulos", "vocabulario"]

enunciado: "¿Qué es un triángulo rectángulo?"
tipo: mc
opciones_explicitas:
  - "El que tiene un ángulo interno recto (90°)"
  - "El que tiene sus 3 ángulos agudos"
  - "El que tiene sus 3 lados iguales"
respuesta: "El que tiene un ángulo interno recto (90°)"

explicacion: |
  Los otros dos ángulos son necesariamente agudos.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_angulos", "vocabulario"]

enunciado: "¿Qué es un triángulo obtusángulo?"
tipo: mc
opciones_explicitas:
  - "El que tiene un ángulo interno obtuso (mayor a 90°)"
  - "El que tiene un ángulo recto"
  - "El que tiene sus 3 ángulos agudos"
respuesta: "El que tiene un ángulo interno obtuso (mayor a 90°)"

explicacion: |
  Sólo puede haber UN ángulo obtuso en un triángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_lados"]

variables:
  l: random(3, 20)

enunciado: "Un triángulo tiene sus tres lados de {l} cm, {l} cm y {l} cm. ¿Cómo se clasifica según sus lados?"
tipo: mc
opciones_explicitas:
  - "Equilátero"
  - "Isósceles"
  - "Escaleno"
respuesta: "Equilátero"

explicacion: |
  Los tres lados miden lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_lados"]

variables:
  l: random(3, 20)
  distinto: l + random(1, 10)

enunciado: "Un triángulo tiene lados de {l} cm, {l} cm y {distinto} cm. ¿Cómo se clasifica según sus lados?"
tipo: mc
opciones_explicitas:
  - "Isósceles"
  - "Equilátero"
  - "Escaleno"
respuesta: "Isósceles"

explicacion: |
  Exactamente dos lados miden lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_lados"]

variables:
  a: random(3, 10)
  b: a + random(1, 5)
  c: b + random(1, 5)

enunciado: "Un triángulo tiene lados de {a} cm, {b} cm y {c} cm. ¿Cómo se clasifica según sus lados?"
tipo: mc
opciones_explicitas:
  - "Escaleno"
  - "Isósceles"
  - "Equilátero"
respuesta: "Escaleno"

explicacion: |
  Los tres lados tienen medidas distintas entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "suma_angulos"]

respuesta: verdadero
tipo: vf

enunciado: "En cualquier triángulo, sin importar su forma o tamaño, la suma de sus 3 ángulos internos es siempre 180°."

explicacion: |
  Es la propiedad central de este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "suma_angulos"]

variables:
  a: random(30, 80)
  b: random(30, 80)

respuesta: 180 - (a + b)
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene dos ángulos internos de {a}° y {b}°. ¿Cuánto mide el tercero?"

pasos:
  - "180 − ({a} + {b}) = {180 - (a + b)}°"

explicacion: |
  Se resta la suma de los dos ángulos conocidos a 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "suma_angulos"]

variables:
  a: 90
  b: random(20, 70)

respuesta: 180 - (a + b)
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene un ángulo de {a}° y otro de {b}°. ¿Cuánto mide el tercero?"

pasos:
  - "180 − ({a} + {b}) = {180 - (a + b)}°"

explicacion: |
  Igual procedimiento, sin importar si uno de los ángulos ya es recto.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "suma_angulos", "verificacion"]

variables:
  a: random(30, 80)
  b: random(30, 80)
  c_correcto: 180 - (a + b)
  error: uno_de([0, 0, 0, 5, -5])
  c_mostrado: c_correcto + error

respuesta: (a + b + c_mostrado == 180)
tipo: vf

enunciado: "¿Pueden ser estos los tres ángulos internos de un triángulo? {a}°, {b}° y {c_mostrado}°."

explicacion: |
  Se suman los tres y se verifica que den exactamente 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_angulos"]

variables:
  a: random(50, 70)
  b: random(50, 70)
  c: 180 - (a + b)

restricciones:
  - c > 0
  - c < 90

enunciado: "Un triángulo tiene ángulos de {a}°, {b}° y {c}°. ¿Cómo se clasifica según sus ángulos?"
tipo: mc
opciones_explicitas:
  - "Acutángulo"
  - "Rectángulo"
  - "Obtusángulo"
respuesta: "Acutángulo"

explicacion: |
  Los tres ángulos son menores a 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_angulos"]

variables:
  a: random(100, 150)
  b: random(10, 30)
  c: 180 - (a + b)

restricciones:
  - c > 0
  - c < 90

enunciado: "Un triángulo tiene ángulos de {a}°, {b}° y {c}°. ¿Cómo se clasifica según sus ángulos?"
tipo: mc
opciones_explicitas:
  - "Obtusángulo"
  - "Acutángulo"
  - "Rectángulo"
respuesta: "Obtusángulo"

explicacion: |
  Tiene un ángulo (el de {a}°) mayor a 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_angulos"]

respuesta: verdadero
tipo: vf

enunciado: "En un triángulo rectángulo, los otros dos ángulos (además del de 90°) son necesariamente agudos."

explicacion: |
  Como los tres suman 180° y uno ya usa 90°, a los otros dos les quedan
  90° para repartirse entre ambos: ninguno puede llegar a 90° ni
  superarlo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "clasificacion_angulos"]

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo no puede tener dos ángulos obtusos a la vez."

explicacion: |
  Si dos ángulos ya superaran 90° cada uno, la suma de esos dos solos ya
  pasaría los 180° disponibles para el triángulo completo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "angulo_exterior"]

variables:
  a: random(30, 80)
  b: random(30, 80)

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene dos ángulos internos de {a}° y {b}°. ¿Cuánto mide el ángulo exterior correspondiente al tercer vértice (el opuesto a esos dos)?"

pasos:
  - "{a} + {b} = {a + b}°"

explicacion: |
  El ángulo exterior es igual a la suma de los dos ángulos internos que
  no son adyacentes a él.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "angulo_exterior"]

variables:
  a: random(30, 80)
  b: random(30, 80)
  c: 180 - (a + b)

restricciones:
  - c > 0

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo tiene ángulos internos de {a}°, {b}° y {c}°. ¿Es cierto que el ángulo exterior del vértice de {c}° (su suplemento, 180° − {c}°) es igual a {a}° + {b}°?"

pasos:
  - "180 − {c} = {180 - c}. {a} + {b} = {a + b}."

explicacion: |
  Ambos caminos dan el mismo resultado: es la misma propiedad vista
  desde dos ángulos distintos (el suplemento del interior, o la suma de
  los otros dos internos).
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "desigualdad_triangular"]

respuesta: verdadero
tipo: vf

enunciado: "¿Pueden formar un triángulo los lados 3 cm, 4 cm y 5 cm?"

pasos:
  - "3 + 4 = 7 > 5. También 3 + 5 = 8 > 4, y 4 + 5 = 9 > 3."

explicacion: |
  La suma de cualquier par de lados supera al tercero: sí forman un
  triángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "desigualdad_triangular"]

respuesta: falso
tipo: vf

enunciado: "¿Pueden formar un triángulo los lados 2 cm, 3 cm y 10 cm?"

pasos:
  - "2 + 3 = 5, que NO supera a 10."

explicacion: |
  Los dos lados cortos, juntos, no alcanzan a "cerrar" la figura contra
  el lado más largo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "desigualdad_triangular", "vocabulario"]

enunciado: "¿Qué condición tienen que cumplir 3 longitudes para poder formar un triángulo?"
tipo: mc
opciones_explicitas:
  - "La suma de cualquier par de lados tiene que ser mayor que el tercero"
  - "Los tres lados tienen que ser iguales"
  - "La suma de los tres lados tiene que dar 180"
respuesta: "La suma de cualquier par de lados tiene que ser mayor que el tercero"

explicacion: |
  Si no se cumple, los lados "no llegan a cerrar" la figura.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "clasificacion_lados", "clasificacion_angulos"]

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo puede clasificarse a la vez por sus lados y por sus ángulos: por ejemplo, \"isósceles rectángulo\" (2 lados iguales, y un ángulo de 90°)."

explicacion: |
  Las dos clasificaciones (por lados y por ángulos) son independientes
  entre sí, así que se pueden combinar.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "clasificacion_lados", "clasificacion_angulos"]

respuesta: verdadero
tipo: vf

enunciado: "Todo triángulo equilátero es también acutángulo (sus tres ángulos internos miden 60° cada uno)."

explicacion: |
  180° ÷ 3 = 60° para cada ángulo, si los tres son iguales — y 60° es
  agudo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "problema"]

variables:
  base: random(20, 100)

respuesta: (180 - base) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Un triángulo isósceles tiene su ángulo desigual (el de la base) midiendo {base}°. Como los otros dos ángulos son iguales entre sí, ¿cuánto mide cada uno?"

pasos:
  - "(180 − {base}) ÷ 2 = {(180 - base) / 2}°"

explicacion: |
  Se resta el ángulo conocido de 180° y se reparte el resto entre los
  dos ángulos iguales.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "completar"]

tipo: completar
enunciado: "Completá: la suma de los 3 ángulos internos de cualquier triángulo es siempre ___°."
respuestas_validas:
  - 180

explicacion: |
  Es la propiedad más importante del módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "completar"]

variables:
  a: random(30, 70)
  b: random(30, 70)

tipo: completar
enunciado: "Completá: si dos ángulos internos de un triángulo miden {a}° y {b}°, el ángulo exterior del tercer vértice mide ___°."
respuestas_validas:
  - a + b

explicacion: |
  El ángulo exterior es igual a la suma de los dos ángulos internos no
  adyacentes.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "suma_angulos"]

enunciado: "¿Cuál de estos tríos de ángulos SÍ puede corresponder a un triángulo real?"
tipo: mc
opciones_explicitas:
  - "60°, 60°, 60°"
  - "90°, 90°, 90°"
  - "100°, 100°, 100°"
respuesta: "60°, 60°, 60°"

explicacion: |
  Sólo 60+60+60=180 da la suma correcta; los otros dos superan 180° en
  total.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "orden"]

tipo: ordenar
enunciado: "Ordená estos tipos de triángulo de MENOS a MÁS lados iguales entre sí: equilátero, escaleno, isósceles."
opciones_explicitas:
  - "Isósceles"
  - "Equilátero"
  - "Escaleno"
respuesta_orden: ["Escaleno", "Isósceles", "Equilátero"]

explicacion: |
  Escaleno: 0 pares de lados iguales. Isósceles: exactamente 1 par.
  Equilátero: los 3 lados iguales entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_angulos"]

variables:
  a: random(20, 70)
  b: 90 - a
  c: 90

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo tiene ángulos de {a}°, {b}° y {c}°. ¿Es un triángulo rectángulo?"

pasos:
  - "{a} + {b} + {c} = {a + b + c}. Tiene un ángulo de 90°."

explicacion: |
  Suma 180° (verificación necesaria) y tiene un ángulo de exactamente
  90°: es rectángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_lados"]

variables:
  a: random(4, 15)
  b: a
  c: a + random(1, 8)

enunciado: "Un triángulo tiene lados de {a} cm, {b} cm y {c} cm. ¿Es escaleno o isósceles?"
tipo: mc
opciones_explicitas:
  - "Isósceles"
  - "Escaleno"
respuesta: "Isósceles"

explicacion: |
  Dos de sus lados ({a} cm y {b} cm) son iguales.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El triángulo es el polígono con menor cantidad de lados posible (no existe un polígono de 2 lados)."

explicacion: |
  Con sólo 2 segmentos no se puede cerrar una figura: 3 es el mínimo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo triángulo se puede clasificar a la vez por sus lados (equilátero, isósceles, escaleno) y por sus ángulos (acutángulo, rectángulo, obtusángulo), porque son dos criterios independientes."

explicacion: |
  Es el resumen central del módulo, junto con la suma de 180° de los
  ángulos internos.
```

## Sección: teorema-central-del-limite (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "basico"
  tags: ["tcl", "vocabulario"]

enunciado: "¿Qué dice el teorema central del límite?"
tipo: mc
opciones_explicitas:
  - "Que la distribución de los promedios de muestras suficientemente grandes se aproxima a una distribución normal, sin importar la forma de la población original"
  - "Que todas las poblaciones tienen forma de distribución normal"
  - "Que una sola muestra grande es siempre igual a la población completa"
respuesta: "Que la distribución de los promedios de muestras suficientemente grandes se aproxima a una distribución normal, sin importar la forma de la población original"

explicacion: |
  Es válido incluso si la población original no es normal en
  absoluto.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["tcl"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema central del límite aplica sin importar qué forma tenga la distribución de la población original (uniforme, sesgada, con varios picos...)."

explicacion: |
  Es la parte más sorprendente del teorema: no hace falta que la
  población de partida sea normal.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["tcl", "completar"]

tipo: completar
enunciado: "Completá: la distribución de los promedios de las muestras queda centrada exactamente en la media ___."
respuestas_validas:
  - "poblacional"
  - "de la población"

explicacion: |
  El promedio de los promedios muestrales coincide con la media real
  de toda la población.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["error_estandar", "vocabulario"]

enunciado: "¿Qué es el error estándar?"
tipo: mc
opciones_explicitas:
  - "El desvío estándar de la distribución de los promedios muestrales (no del dato individual)"
  - "Otro nombre para el desvío estándar de la población original"
  - "La diferencia entre el máximo y el mínimo de una muestra"
respuesta: "El desvío estándar de la distribución de los promedios muestrales (no del dato individual)"

explicacion: |
  Mide qué tan dispersos están, entre sí, los promedios de distintas
  muestras.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar", "completar"]

tipo: completar
enunciado: "Completá: error estándar = desvío estándar poblacional (σ) / raíz cuadrada de ___."
respuestas_validas:
  - "n"
  - "el tamaño de muestra"

explicacion: |
  error estándar = σ / √n.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar", "problema"]

variables:
  sigma: uno_de([10, 20, 30])
  n: uno_de([25, 100])

respuesta: redondear(sigma / sqrt(n), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una población tiene desvío estándar σ = {sigma}. Se toman muestras de tamaño n = {n}. ¿Cuál es el error estándar de la distribución de promedios muestrales?"

pasos:
  - "error estándar = {sigma} / √{n} = {sigma} / {sqrt(n)} = {redondear(sigma / sqrt(n), 3)}"

explicacion: |
  Se divide el desvío poblacional por la raíz del tamaño de muestra.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["error_estandar"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más grande es el tamaño de la muestra (n), menor es el error estándar — los promedios de muestras grandes varían menos entre sí que los de muestras chicas."

explicacion: |
  Porque n está en el denominador, dentro de la raíz cuadrada.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["tcl", "vocabulario"]

enunciado: "¿Qué regla práctica se suele usar para saber si una muestra es 'suficientemente grande' para que el teorema central del límite dé una buena aproximación?"
tipo: mc
opciones_explicitas:
  - "n ≥ 30 (no es una ley exacta, pero suele alcanzar aunque la población original tenga una forma rara)"
  - "n ≥ 1.000.000, sin excepción"
  - "Cualquier n sirve exactamente igual, no hay ninguna regla práctica"
respuesta: "n ≥ 30 (no es una ley exacta, pero suele alcanzar aunque la población original tenga una forma rara)"

explicacion: |
  Es una convención práctica, no un límite matemático exacto.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar", "problema"]

variables:
  sigma: 20
  n_chico: 25
  n_grande: 100

respuesta: (sigma / sqrt(n_chico)) > (sigma / sqrt(n_grande))
tipo: vf

enunciado: "Con σ = {sigma}, ¿el error estándar de una muestra de n = {n_chico} es MAYOR que el de una muestra de n = {n_grande}?"

explicacion: |
  A menor tamaño de muestra, mayor error estándar (más variabilidad
  entre los promedios de distintas muestras chicas).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["tcl", "aplicacion"]

enunciado: "El resultado de tirar un dado (1 a 6) es una distribución uniforme, no normal. Si se tiran 30 dados y se promedia el resultado, y se repite ese experimento muchas veces, ¿cómo se distribuyen esos promedios?"
tipo: mc
opciones_explicitas:
  - "Se distribuyen aproximadamente como una normal, aunque el resultado de un solo dado no lo sea"
  - "Se distribuyen exactamente igual que el resultado de un solo dado (uniforme)"
  - "No se puede predecir ningún patrón en esos promedios"
respuesta: "Se distribuyen aproximadamente como una normal, aunque el resultado de un solo dado no lo sea"

explicacion: |
  Es el ejemplo clásico para mostrar el teorema central del límite en
  acción.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["tcl", "aplicacion"]

enunciado: "¿Por qué el teorema central del límite es tan importante en estadística aplicada?"
tipo: mc
opciones_explicitas:
  - "Porque permite usar el aparato de la distribución normal (z-scores, regla empírica) sobre promedios de muestras, aunque la población original no sea normal"
  - "Porque demuestra que todas las poblaciones del mundo real son normales"
  - "Porque elimina por completo la necesidad de tomar muestras grandes"
respuesta: "Porque permite usar el aparato de la distribución normal (z-scores, regla empírica) sobre promedios de muestras, aunque la población original no sea normal"

explicacion: |
  Es el fundamento matemático de `../intervalo-de-confianza/` y
  `../test-de-hipotesis/`.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["tcl", "problema"]

variables:
  media_poblacional: uno_de([50, 100])
  sigma: uno_de([10, 20])
  n: 25
  media_muestral: media_poblacional + sigma / sqrt(n)

respuesta: redondear((media_muestral - media_poblacional) / (sigma / sqrt(n)), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una población tiene media {media_poblacional} y desvío σ = {sigma}. Se toma una muestra de n = {n}, cuyo promedio dio {redondear(media_muestral, 2)}. ¿Cuál es el z-score de ese promedio muestral, usando el error estándar en vez del desvío poblacional?"

pasos:
  - "error estándar = {sigma}/√{n} = {sigma / sqrt(n)}"
  - "z = ({redondear(media_muestral, 2)} − {media_poblacional}) / {sigma / sqrt(n)} = {redondear((media_muestral - media_poblacional) / (sigma / sqrt(n)), 2)}"

explicacion: |
  Es el mismo cálculo de z-score de `../distribucion-normal/`, pero
  usando el error estándar en vez del desvío de un dato individual.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["tcl"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema central del límite describe cómo se distribuyen los PROMEDIOS de muchas muestras, no cómo se distribuye cada dato individual dentro de la población."

explicacion: |
  Un dato individual de una población no normal sigue sin ser normal
  — lo que sí tiende a normal es el promedio de un grupo de datos.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "basico"
  tags: ["tcl", "aplicacion"]

enunciado: "¿Por qué las encuestas y estudios estadísticos pueden confiar en que el promedio de una muestra (bien tomada) se acerca al valor real de la población?"
tipo: mc
opciones_explicitas:
  - "Porque el teorema central del límite garantiza que, con una muestra suficientemente grande, ese promedio se distribuye de forma predecible alrededor del valor poblacional real"
  - "Porque cualquier muestra, sin importar cómo se tomó, siempre da el valor exacto de la población"
  - "Porque las encuestas nunca tienen margen de error"
respuesta: "Porque el teorema central del límite garantiza que, con una muestra suficientemente grande, ese promedio se distribuye de forma predecible alrededor del valor poblacional real"

explicacion: |
  Esa "forma predecible" (la normal, con su error estándar) es lo que
  permite calcular después un margen de error concreto.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar", "problema"]

variables:
  sigma: 40
  n: 25

respuesta: redondear((sigma / sqrt(n)) / (sigma / sqrt(n * 4)), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con σ = {sigma} y n = {n}, ¿por qué factor se reduce el error estándar si se CUADRUPLICA el tamaño de la muestra (n × 4)?"

pasos:
  - "error estándar original = {sigma}/√{n} = {sigma / sqrt(n)}"
  - "error estándar con n×4 = {sigma}/√{n * 4} = {sigma / sqrt(n * 4)}"
  - "Factor de reducción = {sigma / sqrt(n)} / {sigma / sqrt(n * 4)} = {redondear((sigma / sqrt(n)) / (sigma / sqrt(n * 4)), 2)}"

explicacion: |
  Cuadruplicar n reduce el error estándar a la MITAD, no a un cuarto
  — porque depende de la raíz cuadrada de n.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar"]

respuesta: verdadero
tipo: vf

enunciado: "Cuadruplicar el tamaño de la muestra reduce el error estándar a la MITAD, no a un cuarto — porque el error estándar depende de la raíz cuadrada de n, y √4 = 2."

explicacion: |
  Es un error común asumir que la reducción es proporcional a n en
  vez de a √n.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["tcl", "aplicacion"]

enunciado: "¿Qué relación tiene el teorema central del límite con el intervalo de confianza (el módulo que sigue)?"
tipo: mc
opciones_explicitas:
  - "El TCL es la razón matemática por la que se puede construir un intervalo de confianza usando la distribución normal, aunque la población original no sea normal"
  - "No tienen ninguna relación entre sí"
  - "El intervalo de confianza reemplaza por completo al teorema central del límite"
respuesta: "El TCL es la razón matemática por la que se puede construir un intervalo de confianza usando la distribución normal, aunque la población original no sea normal"

explicacion: |
  Sin el TCL, no habría justificación para usar la normal al estimar
  un rango de confianza a partir de una muestra.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["tcl", "aplicacion"]

enunciado: "Una fábrica controla la calidad de sus piezas tomando muestras de 30 piezas por lote y calculando el promedio de cada muestra, aunque el peso de una pieza individual no siga una distribución normal. ¿Por qué este método sigue siendo válido?"
tipo: mc
opciones_explicitas:
  - "Porque el teorema central del límite garantiza que el promedio de muestras de tamaño 30 se distribuye aproximadamente normal, sin importar la forma de la distribución de una pieza individual"
  - "Porque el peso de cualquier pieza individual siempre es normal, sin excepción"
  - "Porque las fábricas no necesitan ninguna base matemática para este tipo de control"
respuesta: "Porque el teorema central del límite garantiza que el promedio de muestras de tamaño 30 se distribuye aproximadamente normal, sin importar la forma de la distribución de una pieza individual"

explicacion: |
  Es la misma regla práctica de n≥30 aplicada a control de calidad
  industrial.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar", "problema"]

variables:
  sigma_a: 15
  sigma_b: 45
  n: 25

respuesta: (sigma_a / sqrt(n)) < (sigma_b / sqrt(n))
tipo: vf

enunciado: "Población A tiene σ = {sigma_a}; Población B tiene σ = {sigma_b}. Tomando muestras del mismo tamaño n = {n} de cada una, ¿el error estándar de la Población A es MENOR que el de la Población B?"

explicacion: |
  A mayor dispersión de la población original (σ más grande), mayor
  también el error estándar de sus promedios muestrales, para el
  mismo tamaño de muestra.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el teorema central del límite?"
tipo: mc
opciones_explicitas:
  - "Es la base matemática que permite estimar y calcular márgenes de error sobre promedios de muestras, usando la distribución normal, aunque la población original no sea normal"
  - "Sirve sólo para calcular la media de una población conocida por completo"
  - "Sirve sólo cuando la población ya es normal de por sí"
respuesta: "Es la base matemática que permite estimar y calcular márgenes de error sobre promedios de muestras, usando la distribución normal, aunque la población original no sea normal"

explicacion: |
  Sostiene directamente `../intervalo-de-confianza/` y
  `../test-de-hipotesis/`, los dos módulos que siguen.
```

## Sección: congruencia-de-triangulos (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "vocabulario"]

enunciado: "¿Qué significa que dos triángulos sean congruentes?"
tipo: mc
opciones_explicitas:
  - "Que tienen exactamente la misma forma y el mismo tamaño"
  - "Que tienen la misma forma, aunque sean de tamaños distintos"
  - "Que tienen al menos un lado en común"
respuesta: "Que tienen exactamente la misma forma y el mismo tamaño"

explicacion: |
  Sus lados y ángulos correspondientes miden exactamente lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "vocabulario"]

enunciado: "¿Qué son los \"lados correspondientes\" entre dos triángulos congruentes?"
tipo: mc
opciones_explicitas:
  - "Los lados que ocupan la misma posición según cómo se nombran los vértices de cada triángulo"
  - "Cualquier par de lados, elegidos al azar"
  - "Sólo el lado más largo de cada triángulo"
respuesta: "Los lados que ocupan la misma posición según cómo se nombran los vértices de cada triángulo"

explicacion: |
  El orden de los vértices al nombrar cada triángulo indica qué lado
  corresponde a cuál.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "vocabulario"]

enunciado: "¿Qué dice el criterio de congruencia LAL (Lado-Ángulo-Lado)?"
tipo: mc
opciones_explicitas:
  - "Si dos lados y el ángulo comprendido entre ellos son iguales en ambos triángulos, son congruentes"
  - "Si los tres lados son iguales, son congruentes"
  - "Si los tres ángulos son iguales, son congruentes"
respuesta: "Si dos lados y el ángulo comprendido entre ellos son iguales en ambos triángulos, son congruentes"

explicacion: |
  El ángulo tiene que ser específicamente el que queda ENTRE esos dos
  lados.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "vocabulario"]

enunciado: "¿Qué dice el criterio de congruencia ALA (Ángulo-Lado-Ángulo)?"
tipo: mc
opciones_explicitas:
  - "Si dos ángulos y el lado comprendido entre ellos son iguales en ambos triángulos, son congruentes"
  - "Si los tres lados son iguales, son congruentes"
  - "Si dos lados cualquiera son iguales, son congruentes"
respuesta: "Si dos ángulos y el lado comprendido entre ellos son iguales en ambos triángulos, son congruentes"

explicacion: |
  El lado tiene que ser específicamente el que queda ENTRE esos dos
  ángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "vocabulario"]

enunciado: "¿Qué dice el criterio de congruencia LLL (Lado-Lado-Lado)?"
tipo: mc
opciones_explicitas:
  - "Si los tres lados de un triángulo son iguales a los tres lados del otro, son congruentes"
  - "Si un solo lado es igual, ya son congruentes"
  - "Si los tres ángulos son iguales, son congruentes"
respuesta: "Si los tres lados de un triángulo son iguales a los tres lados del otro, son congruentes"

explicacion: |
  No hace falta conocer ningún ángulo para este criterio.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  a: random(4, 15)
  b: random(4, 15)
  c: random(4, 15)

restricciones:
  - a != b
  - b != c

respuesta: verdadero
tipo: vf

enunciado: "El triángulo 1 tiene lados {a} cm, {b} cm y {c} cm. El triángulo 2 tiene lados {a} cm, {b} cm y {c} cm. ¿Son congruentes por el criterio LLL?"

explicacion: |
  Los tres lados coinciden uno a uno: sí son congruentes por LLL.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  a: random(4, 15)
  b: random(4, 15)
  c: random(4, 15)
  c2: c + random(1, 5)

restricciones:
  - a != b
  - b != c

respuesta: falso
tipo: vf

enunciado: "El triángulo 1 tiene lados {a} cm, {b} cm y {c} cm. El triángulo 2 tiene lados {a} cm, {b} cm y {c2} cm. ¿Son congruentes por el criterio LLL?"

explicacion: |
  El tercer lado no coincide ({c} cm contra {c2} cm): no se cumple LLL.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  a: random(4, 15)
  b: random(4, 15)
  angulo: random(30, 100)

respuesta: verdadero
tipo: vf

enunciado: "El triángulo 1 tiene lados {a} cm y {b} cm, con un ángulo de {angulo}° comprendido entre ellos. El triángulo 2 tiene lados {a} cm y {b} cm, con un ángulo de {angulo}° comprendido entre ellos. ¿Son congruentes por el criterio LAL?"

explicacion: |
  Coinciden los dos lados Y el ángulo comprendido entre ellos: sí, por
  LAL.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  a: random(4, 15)
  b: random(4, 15)
  angulo: random(30, 90)
  angulo2: angulo + random(5, 20)

respuesta: falso
tipo: vf

enunciado: "El triángulo 1 tiene lados {a} cm y {b} cm, con un ángulo de {angulo}° comprendido entre ellos. El triángulo 2 tiene lados {a} cm y {b} cm, con un ángulo de {angulo2}° comprendido entre ellos. ¿Son congruentes por el criterio LAL?"

explicacion: |
  Aunque los lados coincidan, el ángulo comprendido es distinto
  ({angulo}° contra {angulo2}°): no se cumple LAL.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  angulo1: random(30, 70)
  angulo2: random(30, 70)
  lado: random(4, 15)

respuesta: verdadero
tipo: vf

enunciado: "El triángulo 1 tiene ángulos de {angulo1}° y {angulo2}°, con un lado de {lado} cm comprendido entre ellos. El triángulo 2 tiene ángulos de {angulo1}° y {angulo2}°, con un lado de {lado} cm comprendido entre ellos. ¿Son congruentes por el criterio ALA?"

explicacion: |
  Coinciden los dos ángulos Y el lado comprendido entre ellos: sí, por
  ALA.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios", "problema"]

variables:
  angulo1: random(30, 70)
  angulo2: random(30, 70)
  lado: random(4, 15)
  lado2: lado + random(1, 5)

respuesta: falso
tipo: vf

enunciado: "El triángulo 1 tiene ángulos de {angulo1}° y {angulo2}°, con un lado de {lado} cm comprendido entre ellos. El triángulo 2 tiene ángulos de {angulo1}° y {angulo2}°, con un lado de {lado2} cm comprendido entre ellos. ¿Son congruentes por el criterio ALA?"

explicacion: |
  El lado comprendido no coincide ({lado} cm contra {lado2} cm): no se
  cumple ALA.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos triángulos son congruentes, sus tres pares de ángulos correspondientes miden exactamente lo mismo."

explicacion: |
  Es parte de la definición de congruencia.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos triángulos son congruentes, sus tres pares de lados correspondientes miden exactamente lo mismo."

explicacion: |
  Es la otra mitad de la definición de congruencia.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Si dos triángulos tienen sus 3 ángulos iguales, uno a uno, eso ya alcanza para garantizar que son congruentes."

explicacion: |
  Tener los mismos 3 ángulos sólo garantiza la misma FORMA (pueden ser de
  tamaños distintos, como una foto ampliada) — eso se llama semejanza,
  no congruencia.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "semejanza", "vocabulario"]

enunciado: "¿En qué se diferencia la semejanza de la congruencia?"
tipo: mc
opciones_explicitas:
  - "La semejanza permite misma forma con tamaños distintos; la congruencia exige forma Y tamaño iguales"
  - "Son exactamente lo mismo, con otro nombre"
  - "La semejanza sólo aplica a círculos"
respuesta: "La semejanza permite misma forma con tamaños distintos; la congruencia exige forma Y tamaño iguales"

explicacion: |
  Dos triángulos semejantes tienen ángulos iguales y lados
  proporcionales (no necesariamente iguales).
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios"]

enunciado: "Si se conocen dos lados de cada triángulo y el ángulo comprendido entre ellos, ¿qué criterio conviene usar?"
tipo: mc
opciones_explicitas:
  - "LAL"
  - "ALA"
  - "LLL"
respuesta: "LAL"

explicacion: |
  Lado-Ángulo-Lado: dos lados y el ángulo comprendido.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios"]

enunciado: "Si se conocen dos ángulos de cada triángulo y el lado comprendido entre ellos, ¿qué criterio conviene usar?"
tipo: mc
opciones_explicitas:
  - "ALA"
  - "LAL"
  - "LLL"
respuesta: "ALA"

explicacion: |
  Ángulo-Lado-Ángulo: dos ángulos y el lado comprendido.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "criterios"]

enunciado: "Si se conocen los tres lados de cada triángulo (y ningún ángulo), ¿qué criterio conviene usar?"
tipo: mc
opciones_explicitas:
  - "LLL"
  - "LAL"
  - "ALA"
respuesta: "LLL"

explicacion: |
  Lado-Lado-Lado: los tres lados, sin necesidad de ángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Gracias a los criterios de congruencia, alcanza con verificar 3 datos bien elegidos (no los 6: 3 lados + 3 ángulos) para confirmar que dos triángulos son congruentes."

explicacion: |
  Es justamente para qué sirven los criterios: ahorrar verificaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "criterios", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Para aplicar el criterio LAL, sirve cualquier ángulo del triángulo, no necesariamente el que está comprendido entre los dos lados conocidos."

explicacion: |
  Tiene que ser específicamente el ángulo ENTRE esos dos lados — usar
  otro ángulo no garantiza la congruencia de la misma forma.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "problema"]

variables:
  a: random(5, 12)
  angulo: random(40, 90)
  b: random(5, 12)

enunciado: "Dos triángulos comparten un lado de {a} cm, un ángulo de {angulo}° comprendido, y otro lado de {b} cm. ¿Qué criterio de congruencia se está aplicando?"
tipo: mc
opciones_explicitas:
  - "LAL"
  - "ALA"
  - "LLL"
respuesta: "LAL"

explicacion: |
  Lado, ángulo comprendido, lado: es exactamente el patrón de LAL.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "completar"]

tipo: completar
enunciado: "Completá: el criterio LLL no necesita conocer ningún ___ para garantizar la congruencia."
respuestas_validas:
  - "ángulo"

explicacion: |
  Con los tres lados alcanza.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "completar"]

tipo: completar
enunciado: "Completá: dos triángulos congruentes tienen la misma forma y el mismo ___."
respuestas_validas:
  - "tamaño"

explicacion: |
  Forma Y tamaño: es la definición completa de congruencia.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "orden"]

tipo: ordenar
enunciado: "Ordená los pasos para demostrar que dos triángulos son congruentes usando el criterio LAL."
opciones_explicitas:
  - "Confirmar que el ángulo comprendido entre esos dos lados también es igual en ambos"
  - "Identificar dos lados de un triángulo y sus correspondientes en el otro"
  - "Concluir que los triángulos son congruentes por LAL"
  - "Medir o verificar que esos dos pares de lados sean iguales"
respuesta_orden: ["Identificar dos lados de un triángulo y sus correspondientes en el otro", "Medir o verificar que esos dos pares de lados sean iguales", "Confirmar que el ángulo comprendido entre esos dos lados también es igual en ambos", "Concluir que los triángulos son congruentes por LAL"]
explicacion: |
  Se identifican los lados correspondientes, se verifica su igualdad, se
  confirma el ángulo comprendido, y recién ahí se concluye la
  congruencia.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "criterios", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para que el criterio ALA aplique, el lado conocido tiene que estar exactamente ENTRE los dos ángulos conocidos, no en cualquier otra posición."

explicacion: |
  Si el lado no está comprendido entre esos dos ángulos, no es el
  patrón ALA (aunque sigue habiendo otras formas de probar congruencia
  en ese caso, fuera del alcance de este módulo).
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "avanzado"
  tags: ["congruencia", "criterios", "problema"]

variables:
  a: random(5, 10)
  b: random(11, 16)
  c: random(17, 22)

respuesta: verdadero
tipo: vf

enunciado: "El triángulo 1 tiene lados {a} cm, {b} cm y {c} cm. El triángulo 2 tiene esos mismos tres lados, pero nombrados en otro orden: {c} cm, {a} cm y {b} cm. ¿Siguen siendo congruentes por LLL?"

explicacion: |
  El orden en que se listan los lados no importa: lo que importa es que
  el CONJUNTO de tres medidas coincida entre ambos triángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "intermedio"
  tags: ["congruencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si el triángulo A es congruente con el triángulo B, entonces el triángulo B también es congruente con el triángulo A."

explicacion: |
  La congruencia no tiene una dirección: es una relación simétrica.
```

```
metadata:
  materia: "matematicas"
  tema: "congruencia_de_triangulos"
  nivel: "basico"
  tags: ["congruencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los criterios LAL, ALA y LLL existen para poder afirmar que dos triángulos son congruentes sin tener que medir los 6 datos completos (3 lados y 3 ángulos) de cada uno."

explicacion: |
  Es la razón de ser de todo este módulo.
```

## Sección: intervalo-de-confianza (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "basico"
  tags: ["intervalo_confianza", "vocabulario"]

enunciado: "¿Qué es un intervalo de confianza?"
tipo: mc
opciones_explicitas:
  - "Un rango de valores, calculado a partir de una muestra, que probablemente contiene el valor real de la población, con un nivel de confianza dado"
  - "El valor exacto de la media de la población, sin ningún margen de error"
  - "La diferencia entre el valor máximo y el mínimo de una muestra"
respuesta: "Un rango de valores, calculado a partir de una muestra, que probablemente contiene el valor real de la población, con un nivel de confianza dado"

explicacion: |
  En vez de un único número, reporta un rango junto con qué tan
  confiable es el método que lo produjo.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "intermedio"
  tags: ["intervalo_confianza", "completar"]

tipo: completar
enunciado: "Completá: intervalo de confianza = media muestral ± ___."
respuestas_validas:
  - "margen de error"
  - "el margen de error"

explicacion: |
  IC = media muestral ± margen de error.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "intermedio"
  tags: ["intervalo_confianza", "vocabulario"]

enunciado: "¿Cómo se calcula el margen de error de un intervalo de confianza?"
tipo: mc
opciones_explicitas:
  - "z* (según el nivel de confianza elegido) multiplicado por el error estándar"
  - "El desvío estándar de la población, sin ningún otro factor"
  - "La media muestral dividida por el tamaño de la muestra"
respuesta: "z* (según el nivel de confianza elegido) multiplicado por el error estándar"

explicacion: |
  margen de error = z* × error estándar.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "intermedio"
  tags: ["intervalo_confianza", "completar"]

tipo: completar
enunciado: "Completá: el valor de z* para un nivel de confianza del 95% es aproximadamente ___."
respuestas_validas:
  - "1,96"
  - "1.96"

explicacion: |
  Es el valor de z* más usado en la práctica.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "problema"]

variables:
  media_muestral: uno_de([50, 70, 100])
  error_estandar: uno_de([2, 3, 5])

respuesta: redondear(media_muestral - 1.96 * error_estandar, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una muestra dio media {media_muestral} con error estándar {error_estandar}. Con un 95% de confianza (z*=1,96), ¿cuál es el límite INFERIOR del intervalo de confianza?"

pasos:
  - "margen de error = 1,96 × {error_estandar} = {redondear(1.96 * error_estandar, 2)}"
  - "límite inferior = {media_muestral} − {redondear(1.96 * error_estandar, 2)} = {redondear(media_muestral - 1.96 * error_estandar, 2)}"

explicacion: |
  Se resta el margen de error a la media muestral.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "intermedio"
  tags: ["intervalo_confianza"]

respuesta: verdadero
tipo: vf

enunciado: "A mayor nivel de confianza exigido (por ejemplo, pasar de 95% a 99%), más ancho resulta el intervalo de confianza, manteniendo los mismos datos de la muestra."

explicacion: |
  Un z* más grande (2,576 para 99% vs. 1,96 para 95%) agranda el
  margen de error.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza"]

enunciado: "¿Por qué pedir un nivel de confianza más alto (por ejemplo 99% en vez de 95%) agranda el intervalo de confianza?"
tipo: mc
opciones_explicitas:
  - "Porque para estar más seguro de 'atrapar' el valor real, hay que cubrir un rango más amplio de valores posibles"
  - "Porque un nivel de confianza más alto siempre implica una muestra más chica"
  - "No hay ninguna relación real entre el nivel de confianza y el ancho del intervalo"
respuesta: "Porque para estar más seguro de 'atrapar' el valor real, hay que cubrir un rango más amplio de valores posibles"

explicacion: |
  Es el mismo trade-off que aparece en cualquier estimación con
  incertidumbre: más seguridad, menos precisión (rango más amplio).
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "intermedio"
  tags: ["intervalo_confianza"]

respuesta: verdadero
tipo: vf

enunciado: "Con el mismo nivel de confianza, una muestra más grande produce un intervalo de confianza más angosto (más preciso), porque reduce el error estándar."

explicacion: |
  Es la única forma de ganar precisión sin sacrificar nivel de
  confianza: conseguir más datos.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "problema"]

variables:
  sigma: 20
  n_chico: 25
  n_grande: 100

respuesta: (1.96 * (sigma / sqrt(n_chico))) > (1.96 * (sigma / sqrt(n_grande)))
tipo: vf

enunciado: "Con σ = {sigma} y 95% de confianza, ¿el margen de error de una muestra de n = {n_chico} es MAYOR que el de una muestra de n = {n_grande}?"

explicacion: |
  A menor tamaño de muestra, mayor error estándar y, por lo tanto,
  mayor margen de error.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "interpretacion"]

enunciado: "¿Qué significa realmente '95% de confianza' en un intervalo de confianza?"
tipo: mc
opciones_explicitas:
  - "Que si se repitiera el proceso de muestreo muchas veces, aproximadamente el 95% de los intervalos calculados así contendrían el verdadero valor poblacional"
  - "Que hay exactamente un 95% de probabilidad de que el valor real esté dentro de ESTE intervalo puntual ya calculado"
  - "Que el 95% de los datos de la muestra caen dentro de ese intervalo"
respuesta: "Que si se repitiera el proceso de muestreo muchas veces, aproximadamente el 95% de los intervalos calculados así contendrían el verdadero valor poblacional"

explicacion: |
  Es una afirmación sobre el MÉTODO repetido, no sobre la probabilidad
  de un intervalo puntual ya calculado.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "interpretacion"]

respuesta: falso
tipo: vf

enunciado: "'Este intervalo de confianza del 95% tiene un 95% de probabilidad de contener el valor real de la población' es una interpretación matemáticamente correcta."

explicacion: |
  Es el error de interpretación más común: una vez calculado, el
  intervalo ya contiene o no contiene al valor real, sin azar de por
  medio en ese momento — el 95% describe el método repetido, no ese
  intervalo puntual.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "intermedio"
  tags: ["intervalo_confianza", "problema"]

variables:
  error_estandar: uno_de([1.5, 2.5, 4])

respuesta: redondear(1.96 * error_estandar, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una muestra tiene error estándar {error_estandar}. Con 95% de confianza (z*=1,96), ¿cuál es el margen de error?"

pasos:
  - "margen de error = 1,96 × {error_estandar} = {redondear(1.96 * error_estandar, 2)}"

explicacion: |
  Es el z* multiplicado directo por el error estándar.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "problema"]

variables:
  media_muestral: 68
  error_estandar: 3

respuesta: redondear(media_muestral + 1.96 * error_estandar, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una encuesta a alumnos dio una nota promedio de {media_muestral}, con error estándar {error_estandar}. Con 95% de confianza, ¿cuál es el límite SUPERIOR del intervalo de confianza?"

pasos:
  - "margen de error = 1,96 × {error_estandar} = {redondear(1.96 * error_estandar, 2)}"
  - "límite superior = {media_muestral} + {redondear(1.96 * error_estandar, 2)} = {redondear(media_muestral + 1.96 * error_estandar, 2)}"

explicacion: |
  El intervalo completo va de (media − margen) a (media + margen).
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "basico"
  tags: ["intervalo_confianza", "aplicacion"]

enunciado: "Una encuesta política reporta que un candidato tiene 40% de intención de voto, '±3 puntos, con 95% de confianza'. ¿Qué significa esto?"
tipo: mc
opciones_explicitas:
  - "El intervalo de confianza va aproximadamente de 37% a 43%, y el método usado acierta ese rango en el 95% de las veces que se repite el muestreo"
  - "El candidato tiene exactamente 40% de intención de voto, sin ningún margen de error real"
  - "El 95% de los votantes fueron encuestados"
respuesta: "El intervalo de confianza va aproximadamente de 37% a 43%, y el método usado acierta ese rango en el 95% de las veces que se repite el muestreo"

explicacion: |
  Es la aplicación directa de intervalo de confianza a una encuesta
  real.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "intermedio"
  tags: ["intervalo_confianza"]

respuesta: verdadero
tipo: vf

enunciado: "El valor de z* para 99% de confianza (2,576) es mayor que el de 95% de confianza (1,96)."

explicacion: |
  A mayor nivel de confianza exigido, mayor el z* correspondiente.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "problema"]

variables:
  error_estandar: 5

respuesta: (2.576 * error_estandar) > (1.96 * error_estandar)
tipo: vf

enunciado: "Con el mismo error estándar de {error_estandar}, ¿el margen de error con 99% de confianza (z*=2,576) es MAYOR que el margen de error con 95% de confianza (z*=1,96)?"

explicacion: |
  Un intervalo de 99% de confianza siempre es más ancho que uno de
  95%, con los mismos datos de base.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "problema"]

variables:
  media_muestral: uno_de([80, 120])
  error_estandar: uno_de([4, 6])

respuesta: redondear(media_muestral - 1.645 * error_estandar, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una muestra dio media {media_muestral} con error estándar {error_estandar}. Con 90% de confianza (z*=1,645), ¿cuál es el límite INFERIOR del intervalo?"

pasos:
  - "margen de error = 1,645 × {error_estandar} = {redondear(1.645 * error_estandar, 2)}"
  - "límite inferior = {media_muestral} − {redondear(1.645 * error_estandar, 2)} = {redondear(media_muestral - 1.645 * error_estandar, 2)}"

explicacion: |
  Un nivel de confianza más bajo (90%) usa un z* más chico que 95%,
  dando un intervalo más angosto.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "aplicacion"]

enunciado: "Una encuestadora quiere reducir su margen de error sin bajar el nivel de confianza del 95%. ¿Qué puede hacer?"
tipo: mc
opciones_explicitas:
  - "Aumentar el tamaño de la muestra, para reducir el error estándar (y con él, el margen de error)"
  - "Bajar el nivel de confianza al 90%, sin tocar el tamaño de la muestra"
  - "No hay ninguna forma de reducir el margen de error sin bajar la confianza"
respuesta: "Aumentar el tamaño de la muestra, para reducir el error estándar (y con él, el margen de error)"

explicacion: |
  Es el único camino que mejora precisión sin sacrificar confianza:
  conseguir más datos.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "problema"]

variables:
  error_estandar: 2.5

respuesta: redondear((2.576 - 1.645) * error_estandar, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con error estándar {error_estandar}, ¿cuál es la diferencia entre el margen de error al 99% de confianza (z*=2,576) y al 90% de confianza (z*=1,645)?"

pasos:
  - "margen al 99% = 2,576 × {error_estandar} = {redondear(2.576 * error_estandar, 2)}"
  - "margen al 90% = 1,645 × {error_estandar} = {redondear(1.645 * error_estandar, 2)}"
  - "Diferencia = {redondear((2.576 - 1.645) * error_estandar, 2)}"

explicacion: |
  Cuanto más alto el nivel de confianza exigido, más grande el
  margen de error resultante, con el mismo error estándar.
```

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve reportar un intervalo de confianza en vez de un único número?"
tipo: mc
opciones_explicitas:
  - "Para comunicar de forma honesta la incertidumbre de una estimación basada en una muestra, junto con qué tan confiable es el método usado"
  - "Para ocultar el verdadero resultado de un estudio"
  - "Sólo sirve cuando la muestra es extremadamente grande"
respuesta: "Para comunicar de forma honesta la incertidumbre de una estimación basada en una muestra, junto con qué tan confiable es el método usado"

explicacion: |
  Es el fundamento de `../test-de-hipotesis/`, el módulo que sigue:
  ambos usan la misma maquinaria (error estándar + z*) para tomar
  decisiones estadísticas.
```

