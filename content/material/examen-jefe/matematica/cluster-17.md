# Examen jefe — Maestro de Intervalos y Gráficos

> Logro #68. Completaste el parcial dominando intervalos de confianza, números irracionales, jerarquía de operaciones y lectura de gráficos. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **128 preguntas totales** en 5/5 secciones.

---

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

## Sección: irracionales-y-reales (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["irracionales", "vocabulario"]

enunciado: "¿Qué es un número irracional?"
tipo: mc
opciones_explicitas:
  - "Un número que no se puede escribir como fracción de dos enteros"
  - "Cualquier número negativo"
  - "Un número muy grande"
respuesta: "Un número que no se puede escribir como fracción de dos enteros"

explicacion: |
  Su desarrollo decimal tiene infinitas cifras que nunca repiten un
  patrón.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales"]

variables:
  n: random(2, 99)
  k: floor(sqrt(n))

respuesta: (k * k != n)
tipo: vf

enunciado: "¿Es √{n} un número irracional?"

explicacion: |
  Es irracional siempre que {n} no sea un cuadrado perfecto (que la raíz
  no dé exacta).
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales"]

variables:
  k: random(2, 20)
  n: k ^ 2

respuesta: falso
tipo: vf

enunciado: "¿Es √{n} un número irracional?"

explicacion: |
  {n} es {k}², un cuadrado perfecto: su raíz da exacta ({k}), así que es
  racional, no irracional.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "√2 es un número irracional."

explicacion: |
  Se demuestra por reducción al absurdo: no existe ninguna fracción a/b
  que sea exactamente igual a √2.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "π (pi) es un número irracional."

explicacion: |
  3,14159265... nunca repite un patrón: π no se puede escribir como
  fracción de dos enteros.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "π es trascendente, una categoría más exigente que ser irracional: no es raíz de ningún polinomio con coeficientes racionales (a diferencia de √2, que sí es raíz de x² − 2 = 0)."

explicacion: |
  Todo trascendente es irracional, pero no todo irracional es
  trascendente — √2 es el ejemplo que marca la diferencia.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["reales", "vocabulario"]

enunciado: "¿Qué es el conjunto de los números reales?"
tipo: mc
opciones_explicitas:
  - "La unión de todos los racionales y todos los irracionales"
  - "Sólo los números que se pueden contar"
  - "Sólo los números positivos"
respuesta: "La unión de todos los racionales y todos los irracionales"

explicacion: |
  Todo punto de la recta numérica es un número real, sea racional o
  irracional.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["reales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número racional es también un número real."

explicacion: |
  Los reales incluyen a TODOS los racionales, sin excepción.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["reales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número irracional es también un número real."

explicacion: |
  Los reales incluyen a TODOS los irracionales también: es la unión de
  los dos grupos.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["reales", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Todo número real es racional."

explicacion: |
  No es cierto: √2 y π son reales, pero no son racionales — son
  irracionales.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "0,333... (con el 3 repitiéndose para siempre) es un número racional, no irracional."

explicacion: |
  Aunque tenga infinitas cifras, sigue un patrón que se repite (periódico)
  — eso lo hace racional: 0,333... = 1/3.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un número con infinitas cifras decimales que nunca repiten ningún patrón es irracional."

explicacion: |
  Es exactamente la definición de número irracional.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales"]

variables:
  n_no_cuadrado: uno_de([2, 3, 5, 7, 10, 11, 15])

respuesta: sqrt(n_no_cuadrado)
tipo: mc
opciones_explicitas:
  - sqrt(n_no_cuadrado)
  - 1 / 3
  - 0.5

enunciado: "¿Cuál de estos tres números es irracional?"

explicacion: |
  1/3 y 0,5 son fracciones (racionales); una raíz no exacta como
  √{n_no_cuadrado} no se puede escribir como fracción.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["irracionales"]

variables:
  k: random(2, 20)
  n_cuadrado: k ^ 2
  n_no_cuadrado: uno_de([2, 3, 5, 7, 10, 11])

respuesta: sqrt(n_cuadrado)
tipo: mc
opciones_explicitas:
  - sqrt(n_cuadrado)
  - sqrt(n_no_cuadrado)

enunciado: "¿Cuál de estos dos números es racional (da una raíz exacta)?"

explicacion: |
  √{n_cuadrado} da exacto ({k}), así que es racional; la otra raíz no es
  exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["irracionales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier fracción de dos números enteros (como 1/7) es un número racional."

explicacion: |
  Es la propia definición de racional: se puede escribir como a/b.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["reales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Con los números reales, cada punto de la recta numérica corresponde a exactamente un número, sin huecos."

explicacion: |
  Antes de sumar los irracionales, había puntos de la recta (como donde
  va √2) sin un número racional que los ocupara exactamente.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["irracionales"]

variables:
  n: random(100, 999)
  k: floor(sqrt(n))

respuesta: (k * k != n)
tipo: vf

enunciado: "¿Es √{n} irracional?"

explicacion: |
  Se verifica si {n} es o no un cuadrado perfecto.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["irracionales", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "La diagonal de un cuadrado de lado 1 mide √2, un número irracional."

explicacion: |
  Es el mismo ejemplo histórico que llevó a descubrir los irracionales:
  ni siquiera una figura tan simple como un cuadrado de lado 1 tiene
  diagonal racional.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["irracionales", "comparacion"]

variables:
  a: uno_de([2, 3, 5, 7, 10])
  b: uno_de([2, 3, 5, 7, 10])

restricciones:
  - a != b

respuesta: (sqrt(a) > sqrt(b))
tipo: vf

enunciado: "¿Es √{a} mayor que √{b}?"

explicacion: |
  Aunque los dos sean irracionales (no se puedan escribir exactos), se
  pueden seguir comparando: a mayor radicando, mayor la raíz.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["reales", "orden"]

tipo: ordenar
enunciado: "Ordená estos números reales de menor a mayor (aproximá los irracionales: √2≈1,41, π≈3,14)."
opciones_explicitas:
  - "π"
  - "1"
  - "√2"
  - "3,5"
respuesta_orden: ["1", "√2", "π", "3,5"]

explicacion: |
  Racionales e irracionales se ordenan juntos en la misma recta numérica,
  sin ninguna regla especial distinta.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["reales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número entero es racional (se puede escribir como una fracción con denominador 1)."

explicacion: |
  5 = 5/1: cualquier entero es, trivialmente, también una fracción.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "intermedio"
  tags: ["reales", "vocabulario"]

enunciado: "¿Cuál de estos conjuntos NO está incluido dentro de los números reales?"
tipo: mc
opciones_explicitas:
  - "Ninguno, todos los que aparecen en el mapa hasta acá están incluidos"
  - "Los números naturales"
  - "Los números irracionales"
respuesta: "Ninguno, todos los que aparecen en el mapa hasta acá están incluidos"

explicacion: |
  Naturales, enteros, racionales (fracciones y decimales) e irracionales
  son todos subconjuntos de los números reales.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "avanzado"
  tags: ["irracionales", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "22/7 es exactamente igual a π."

explicacion: |
  22/7 (≈3,142857...) es sólo una aproximación racional usada en la
  práctica; π es irracional, así que ninguna fracción puede ser
  exactamente igual a π.
```

```
metadata:
  materia: "matematicas"
  tema: "irracionales_y_reales"
  nivel: "basico"
  tags: ["irracionales", "reales", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los números reales son la unión de los racionales y los irracionales, y llenan por completo la recta numérica, sin dejar ningún punto sin número."

explicacion: |
  Es la idea de cierre de todo el bloque numérico: con los reales, la
  recta numérica queda completa.
```

## Sección: jerarquia-operaciones (40 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "suma_multiplicacion"]

variables:
  a: random(1, 20)
  b: random(2, 9)
  c: random(2, 9)

respuesta: a + b * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b} × {c}?"

pasos:
  - "Primero la multiplicación: {b} × {c} = {b * c}. Después la suma: {a} + {b * c} = {a + b * c}"

explicacion: |
  La multiplicación se resuelve antes que la suma, aunque la suma esté
  escrita primero en la expresión.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "suma_multiplicacion"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  c: random(1, 20)

respuesta: a * b + c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b} + {c}?"

pasos:
  - "{a} × {b} = {a * b}. {a * b} + {c} = {a * b + c}"

explicacion: |
  Acá la multiplicación ya está primero, así que el orden de lectura
  coincide con el orden de resolución — pero no es por eso que se resuelve
  así, sino porque multiplicar tiene mayor jerarquía que sumar.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "suma_multiplicacion", "problema"]

variables:
  entrada: random(2, 9)
  cantidad: random(2, 9)
  extra: random(1, 20)

respuesta: entrada * cantidad + extra
tipo: input
tolerancia_abs: 0

enunciado: "Cada entrada cuesta ${entrada} y compraste {cantidad}. Además pagaste ${extra} de service. ¿Cuánto pagaste en total?"

explicacion: |
  El costo de las entradas (que es una multiplicación) se calcula antes de
  sumarle el service.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "resta_multiplicacion"]

variables:
  b: random(2, 9)
  c: random(2, 9)
  a: b * c + random(1, 20)

respuesta: a - b * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b} × {c}?"

pasos:
  - "Primero la multiplicación: {b} × {c} = {b * c}. Después la resta: {a} - {b * c} = {a - b * c}"

explicacion: |
  Igual que con la suma, la multiplicación se resuelve antes que la resta.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "resta_multiplicacion", "problema"]

variables:
  precio: random(2, 9) * 10
  cantidad: random(2, 9)
  billete: precio * cantidad + random(10, 100)

respuesta: billete - precio * cantidad
tipo: input
tolerancia_abs: 0

enunciado: "Pagás con un billete de ${billete} algo que cuesta ${precio} la unidad, comprando {cantidad}. ¿Cuánto te dan de vuelto?"

explicacion: |
  El costo total (una multiplicación) se calcula antes de restarlo del
  billete.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "parentesis"]

variables:
  a: random(1, 20)
  b: random(1, 20)
  c: random(2, 9)

respuesta: (a + b) * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} + {b}) × {c}?"

pasos:
  - "El paréntesis se resuelve primero: {a} + {b} = {a + b}. Después la multiplicación: {a + b} × {c} = {(a + b) * c}"

explicacion: |
  El paréntesis fuerza a sumar antes de multiplicar, aunque sin él la
  multiplicación tendría prioridad.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "parentesis"]

variables:
  a: random(1, 20)
  b: random(1, 20)
  c: random(2, 9)

respuesta: a + b * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b} × {c}?"

explicacion: |
  Sin paréntesis, la multiplicación se resuelve antes que la suma — un
  resultado distinto que si estuviera {a} + {b} entre paréntesis.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "parentesis"]

variables:
  a: random(2, 20)
  b: random(2, 20)
  c: random(2, 9)

respuesta: ((a + b) * c == a + b * c)
tipo: vf

enunciado: "¿Es cierto que ({a} + {b}) × {c} da lo mismo que {a} + {b} × {c}?"

explicacion: |
  Salvo casos puntuales, no da lo mismo: el paréntesis cambia qué operación
  se resuelve primero, y eso cambia el resultado final.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "potencias"]

variables:
  a: random(1, 30)
  b: random(2, 5)

respuesta: a + b ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}²?"

pasos:
  - "Primero la potencia: {b}² = {b ^ 2}. Después la suma: {a} + {b ^ 2} = {a + b ^ 2}"

explicacion: |
  Las potencias se resuelven antes que la suma (y antes que la
  multiplicación/división también).
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "potencias"]

variables:
  b: random(2, 5)
  a: (b ^ 2) + random(1, 30)

respuesta: a - b ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b}²?"

pasos:
  - "Primero la potencia: {b}² = {b ^ 2}. Después la resta: {a} - {b ^ 2} = {a - b ^ 2}"

explicacion: |
  La potencia siempre se calcula antes de aplicarle una suma o resta,
  aunque esté al final de la expresión.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "multiplicacion_division"]

variables:
  b: random(2, 9)
  k: random(2, 9)
  a: b * k
  c: random(2, 9)

respuesta: a / b * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} ÷ {b} × {c}?"

pasos:
  - "Multiplicación y división tienen la misma jerarquía: se resuelve de izquierda a derecha. {a} ÷ {b} = {a / b}. {a / b} × {c} = {(a / b) * c}"

explicacion: |
  No es "primero toda la multiplicación": es de izquierda a derecha, y acá
  la división aparece primero.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "multiplicacion_division"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  c: b

respuesta: a * b / c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b} ÷ {c}?"

pasos:
  - "{a} × {b} = {a * b}. {a * b} ÷ {c} = {(a * b) / c}"

explicacion: |
  Acá la multiplicación aparece primero, así que se resuelve primero —
  pero es por el orden de lectura, no porque multiplicar "gane" siempre a
  dividir.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "multiplicacion_division"]

respuesta: verdadero
tipo: vf

enunciado: "La multiplicación y la división tienen la misma jerarquía: se resuelven en el orden en que aparecen, de izquierda a derecha."

explicacion: |
  No es que la multiplicación siempre vaya antes que la división: gana la
  que aparece primero leyendo de izquierda a derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "suma_resta"]

variables:
  a: random(30, 99)
  b: random(1, 20)
  c: random(1, 20)

respuesta: a - b + c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b} + {c}?"

pasos:
  - "Se resuelve de izquierda a derecha: {a} - {b} = {a - b}. {a - b} + {c} = {a - b + c}"

explicacion: |
  Suma y resta también tienen la misma jerarquía entre sí: se resuelven en
  el orden en que aparecen.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "suma_resta"]

variables:
  a: random(30, 99)
  b: random(1, 20)
  c: random(1, 20)

respuesta: ((a - b + c) == (a - (b + c)))
tipo: vf

enunciado: "¿Es cierto que {a} - {b} + {c} da lo mismo que {a} - ({b} + {c})?"

explicacion: |
  Sin paréntesis, la resta no "agrupa" todo lo que viene después: se
  resuelve de izquierda a derecha, restando {b} y después sumando {c} por
  separado.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "avanzado"
  tags: ["pemdas", "combinada"]

variables:
  a: random(1, 30)
  b: random(2, 9)
  c: random(2, 9)
  e: random(2, 9)
  d: e * random(2, 9)

respuesta: a + b * c - d / e
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b} × {c} - {d} ÷ {e}?"

pasos:
  - "Primero multiplicación y división: {b} × {c} = {b * c}; {d} ÷ {e} = {d / e}. Después suma y resta, de izquierda a derecha: {a} + {b * c} - {d / e} = {a + b * c - d / e}"

explicacion: |
  Se resuelven primero todas las multiplicaciones y divisiones (en el
  orden en que aparecen), y recién después las sumas y restas.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "avanzado"
  tags: ["pemdas", "combinada"]

variables:
  b: random(2, 9)
  c: random(2, 9)
  a: b * c + random(10, 30)
  e: random(2, 9)
  d: e * random(2, 9)

respuesta: a - b * c + d / e
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} - {b} × {c} + {d} ÷ {e}?"

explicacion: |
  Mismo criterio: primero multiplicación y división en el orden en que
  aparecen, después suma y resta en el orden en que aparecen.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "avanzado"
  tags: ["pemdas", "combinada", "parentesis"]

variables:
  a: random(1, 20)
  b: random(1, 20)
  c: random(2, 9)
  d: random(1, (a + b) * c - 1)

respuesta: (a + b) * c - d
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} + {b}) × {c} - {d}?"

pasos:
  - "Paréntesis primero: {a} + {b} = {a + b}. Multiplicación: {a + b} × {c} = {(a + b) * c}. Resta: {(a + b) * c} - {d} = {(a + b) * c - d}"

explicacion: |
  El orden completo: paréntesis, después multiplicación/división, después
  suma/resta.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "multiplicacion_division"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  c: random(2, 9)

restricciones:
  - b != c

respuesta: (a / b * c == a / c * b)
tipo: vf

enunciado: "¿Es cierto que {a} ÷ {b} × {c} siempre da el mismo resultado que {a} ÷ {c} × {b}?"

explicacion: |
  Cambiar el orden de un número que divide por uno que multiplica sí puede
  cambiar el resultado — no es lo mismo que sólo reordenar multiplicaciones
  entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "suma_multiplicacion"]

variables:
  a: random(1, 20)
  b: random(2, 9)
  c: random(2, 9)

respuesta: a + b * c
tipo: mc
opciones_explicitas:
  - a + b * c
  - (a + b) * c
  - a * b + c

enunciado: "¿Cuánto es {a} + {b} × {c}, aplicando la jerarquía de operaciones?"

explicacion: |
  El resultado correcto resuelve primero la multiplicación; las otras
  opciones son errores típicos de agrupar mal la expresión.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "resta_multiplicacion"]

variables:
  b: random(2, 9)
  c: random(2, 9)
  a: b * c + random(5, 20)

respuesta: a - b * c
tipo: mc
opciones_explicitas:
  - a - b * c
  - (a - b) * c
  - a * b - c

enunciado: "¿Cuánto es {a} - {b} × {c}, aplicando la jerarquía de operaciones?"

explicacion: |
  Se resuelve primero la multiplicación y después la resta; agrupar
  primero la resta (como si hubiera un paréntesis que no está) da un
  resultado distinto.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "avanzado"
  tags: ["pemdas", "combinada"]

variables:
  a: random(1, 20)
  b: random(2, 9)
  c: random(2, 9)
  e: random(2, 9)
  d: e * random(2, 9)

respuesta: a + b * c - d / e
tipo: mc
opciones_explicitas:
  - a + b * c - d / e
  - (a + b) * (c - d) / e
  - (a + b * c - d) / e

enunciado: "¿Cuánto es {a} + {b} × {c} - {d} ÷ {e}, aplicando la jerarquía de operaciones?"

explicacion: |
  Primero se resuelven multiplicación y división, después suma y resta —
  ninguna otra forma de agrupar da el resultado correcto.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "parentesis"]

variables:
  a: random(2, 20)
  b: random(2, 20)
  c: random(2, 9)

respuesta: a - b * c
tipo: mc
opciones_explicitas:
  - a - b * c
  - (a - b) * c

enunciado: "¿Cuánto es {a} - {b} × {c} (SIN paréntesis)?"

explicacion: |
  Sin paréntesis, la multiplicación tiene prioridad sobre la resta.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "parentesis"]

variables:
  a: random(2, 20)
  b: random(2, 20)
  c: random(2, 9)

respuesta: (a - b) * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} - {b}) × {c}?"

pasos:
  - "El paréntesis se resuelve primero: {a} - {b} = {a - b}. Multiplicación: {a - b} × {c} = {(a - b) * c}"

explicacion: |
  Acá el paréntesis obliga a restar antes de multiplicar.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "parentesis"]

variables:
  c: random(2, 9)
  suma_total: c * random(2, 15)
  a: random(1, suma_total - 1)
  b: suma_total - a

respuesta: (a + b) / c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} + {b}) ÷ {c}?"

pasos:
  - "Paréntesis primero: {a} + {b} = {a + b}. División: {a + b} ÷ {c} = {(a + b) / c}"

explicacion: |
  El paréntesis se resuelve siempre primero, sin importar qué operación
  venga después.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "vocabulario"]

enunciado: "¿Qué significa la 'P' de PEMDAS?"
tipo: mc
opciones_explicitas:
  - "Paréntesis"
  - "Potencias"
  - "Producto"
respuesta: "Paréntesis"

explicacion: |
  PEMDAS: Paréntesis, Exponentes (potencias), Multiplicación y División,
  Adición (suma) y Sustracción (resta).
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "vocabulario"]

enunciado: "Sin paréntesis, ¿qué se resuelve primero: la multiplicación o la suma?"
tipo: mc
opciones_explicitas:
  - "La multiplicación"
  - "La suma"
  - "Da lo mismo cuál primero"
respuesta: "La multiplicación"

explicacion: |
  La multiplicación (y la división) tienen mayor jerarquía que la suma (y
  la resta): se resuelven antes.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "PEMDAS no significa que la multiplicación siempre se resuelve antes que la división: ambas tienen la misma jerarquía y se resuelven en el orden en que aparecen."

explicacion: |
  Es uno de los errores más comunes al leer la sigla PEMDAS: el orden de
  las letras no es un orden estricto entre M y D (ni entre A y S).
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "suma_multiplicacion"]

variables:
  a: random(1, 20)
  b: random(2, 9)
  c: random(2, 9)

tipo: completar
enunciado: "Completá el resultado, aplicando la jerarquía de operaciones: {a} + {b} × {c} = ___."
respuestas_validas:
  - a + b * c

explicacion: |
  Se resuelve primero la multiplicación y después la suma.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "parentesis"]

variables:
  a: random(1, 20)
  b: random(1, 20)
  c: random(2, 9)

tipo: completar
enunciado: "Completá el resultado: ({a} + {b}) × {c} = ___."
respuestas_validas:
  - (a + b) * c

explicacion: |
  El paréntesis obliga a resolver la suma antes que la multiplicación.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "problema"]

variables:
  precio: random(2, 9) * 10
  n: random(2, 9)
  billete: precio * n + random(50, 200)

respuesta: billete - n * precio
tipo: input
tolerancia_abs: 0

enunciado: "Comprás {n} cuadernos a ${precio} cada uno y pagás con un billete de ${billete}. ¿Cuánto te dan de vuelto?"

explicacion: |
  Primero hay que calcular cuánto cuestan los {n} cuadernos (una
  multiplicación) antes de restarlo del billete.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "problema"]

variables:
  a: random(50, 200)
  n: random(2, 9)
  premio: random(10, 50)

respuesta: a + n * premio
tipo: input
tolerancia_abs: 0

enunciado: "Tenías ${a} y ganaste ${premio} en cada una de {n} rondas de un juego. ¿Cuánto tenés ahora en total?"

explicacion: |
  Se calcula primero lo ganado en todas las rondas (una multiplicación)
  antes de sumarlo a lo que ya tenías.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "avanzado"
  tags: ["pemdas", "problema", "combinada"]

variables:
  personas: random(2, 6)
  precio: random(2, 15)
  n: personas * random(1, 4)
  propina: random(10, 50)

respuesta: n * precio / personas + propina
tipo: input
tolerancia_abs: 0

enunciado: "Entre {personas} amigos compran {n} pizzas a ${precio} cada una, pagando el total en partes iguales, y además cada uno pone ${propina} de propina. ¿Cuánto paga cada amigo en total?"

pasos:
  - "Costo de las pizzas repartido: ({n} × {precio}) ÷ {personas} = {n * precio / personas}. Más la propina: {n * precio / personas} + {propina} = {n * precio / personas + propina}"

explicacion: |
  Se resuelven primero la multiplicación y la división (el costo total y
  la parte de cada uno), y recién después se suma la propina.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "orden"]

tipo: ordenar
enunciado: "Ordená estas expresiones de menor a mayor resultado (resolviendo cada una con la jerarquía de operaciones)."
opciones_explicitas:
  - "2 + 3 × 4"
  - "(2 + 3) × 4"
  - "10 - 2 × 3"
  - "10 ÷ 2 + 1"
respuesta_orden: ["10 - 2 × 3", "10 ÷ 2 + 1", "2 + 3 × 4", "(2 + 3) × 4"]

explicacion: |
  10-2×3=4, 10÷2+1=6, 2+3×4=14, (2+3)×4=20: hay que aplicar la jerarquía en
  cada una antes de poder ordenarlas.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "avanzado"
  tags: ["pemdas", "potencias"]

variables:
  a: random(1, 15)
  b: random(1, 15)

restricciones:
  - a != 0
  - b != 0

respuesta: ((a + b) ^ 2 == a ^ 2 + b ^ 2)
tipo: vf

enunciado: "¿Es cierto que ({a} + {b})² da lo mismo que {a}² + {b}²?"

explicacion: |
  Casi nunca da lo mismo: el paréntesis obliga a sumar primero y elevar al
  cuadrado el resultado completo, no cada término por separado.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "potencias", "parentesis"]

variables:
  a: random(1, 15)
  b: random(1, 15)

respuesta: (a + b) ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} + {b})²?"

pasos:
  - "Paréntesis primero: {a} + {b} = {a + b}. Después la potencia: {a + b}² = {(a + b) ^ 2}"

explicacion: |
  El paréntesis se resuelve antes que la potencia se aplique — la potencia
  eleva al cuadrado el resultado completo del paréntesis, no cada número
  por separado.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "intermedio"
  tags: ["pemdas", "parentesis", "division"]

variables:
  c: random(2, 9)
  suma_total: c * random(2, 15)
  a: random(1, suma_total - 1)
  b: suma_total - a

respuesta: suma_total / c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} + {b}) ÷ {c}?"

explicacion: |
  Sin el paréntesis, la división se aplicaría sólo a {b} (por tener mayor
  jerarquía que la suma); con el paréntesis, se aplica a la suma completa.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "avanzado"
  tags: ["pemdas", "potencias", "combinada"]

variables:
  a: random(2, 9)
  b: random(2, 5)

respuesta: a * b ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b}²?"

pasos:
  - "Primero la potencia: {b}² = {b ^ 2}. Después la multiplicación: {a} × {b ^ 2} = {a * b ^ 2}"

explicacion: |
  La potencia tiene mayor jerarquía que la multiplicación: se calcula
  antes.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "avanzado"
  tags: ["pemdas", "potencias", "parentesis"]

variables:
  a: random(2, 9)
  b: random(2, 5)

respuesta: (a * b) ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} × {b})²?"

pasos:
  - "Paréntesis primero: {a} × {b} = {a * b}. Después la potencia: {a * b}² = {(a * b) ^ 2}"

explicacion: |
  Con el paréntesis, la potencia se aplica al producto completo, no sólo
  al último factor.
```

```
metadata:
  materia: "matematicas"
  tema: "jerarquia_operaciones"
  nivel: "basico"
  tags: ["pemdas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sin una regla de jerarquía de operaciones, una misma expresión matemática podría leerse de más de una forma y dar resultados distintos."

explicacion: |
  Es la razón de ser de PEMDAS: fijar un único orden posible, para que
  cualquier persona que resuelva la misma cuenta llegue al mismo resultado.
```

## Sección: leer-grafico/barras (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "basico"
  tags: ["barras", "vocabulario"]

enunciado: "En un gráfico de barras, ¿qué representa la altura (o longitud) de cada barra?"
tipo: mc
opciones_explicitas:
  - "El valor numérico de esa categoría"
  - "El orden en que aparece la categoría"
  - "El color de la categoría"
respuesta: "El valor numérico de esa categoría"

explicacion: |
  Cuanto más alta la barra, mayor el valor que representa.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "basico"
  tags: ["barras", "vocabulario"]

enunciado: "¿Qué tipo de dato suele ir en el eje que NO mide altura (categorías)?"
tipo: mc
opciones_explicitas:
  - "Categorías sin un orden numérico propio (productos, colores, nombres)"
  - "Siempre el tiempo, en orden cronológico"
  - "Siempre porcentajes que suman 100%"
respuesta: "Categorías sin un orden numérico propio (productos, colores, nombres)"

explicacion: |
  A diferencia de un gráfico de líneas, el orden de las barras no
  tiene por qué representar una secuencia numérica.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "problema"]

variables:
  datos: [{producto: "Camisas", ventas: 45}, {producto: "Pantalones", ventas: 30}, {producto: "Camperas", ventas: 15}, {producto: "Zapatos", ventas: 25}]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx].ventas
tipo: input
unidad: "unidades"

enunciado: "Un gráfico de barras muestra las ventas del mes: Camisas 45, Pantalones 30, Camperas 15, Zapatos 25. ¿Cuántas unidades de {datos[idx].producto} se vendieron?"

explicacion: |
  Se lee la altura de la barra correspondiente a esa categoría.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "problema"]

enunciado: "En el gráfico de ventas — Camisas 45, Pantalones 30, Camperas 15, Zapatos 25 — ¿qué producto tiene la barra más alta?"
tipo: mc
opciones_explicitas:
  - "Camisas"
  - "Pantalones"
  - "Zapatos"
respuesta: "Camisas"

explicacion: |
  45 es el valor más alto de los cuatro.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras", "problema"]

respuesta: 30
tipo: input

enunciado: "Con el mismo gráfico de ventas — Camisas 45, Pantalones 30, Camperas 15, Zapatos 25 — ¿cuál es la diferencia entre la barra más alta y la más baja?"

pasos:
  - "Más alta: Camisas (45). Más baja: Camperas (15)."
  - "Diferencia = 45 − 15 = 30"

explicacion: |
  Se identifican los dos extremos y se resta.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras"]

respuesta: verdadero
tipo: vf

enunciado: "Cada barra de un gráfico de barras corresponde exactamente a una fila de una tabla: la categoría es el nombre de la fila, y la altura es el valor de la columna graficada."

explicacion: |
  Es la misma información que una tabla, sólo que dibujada.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras"]

respuesta: verdadero
tipo: vf

enunciado: "Un gráfico de barras puede dibujarse con barras horizontales (en vez de verticales) — la lógica de lectura es la misma, sólo cambia la orientación."

explicacion: |
  Se usa sobre todo cuando los nombres de las categorías son largos y
  no entran bien debajo de una barra vertical.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "ordenar"]

enunciado: "Ordená los pasos para leer el valor exacto de una barra en un gráfico."
tipo: ordenar
opciones_explicitas:
  - "Leer el número donde esa altura coincide con el eje numérico"
  - "Identificar la barra correspondiente a la categoría que interesa"
  - "Seguir su altura (o longitud) hasta el eje que tiene los números"
respuesta_orden:
  - "Identificar la barra correspondiente a la categoría que interesa"
  - "Seguir su altura (o longitud) hasta el eje que tiene los números"
  - "Leer el número donde esa altura coincide con el eje numérico"

explicacion: |
  Sin identificar primero la barra correcta, no hay altura que seguir.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "basico"
  tags: ["barras", "aplicacion"]

enunciado: "¿Por qué los resultados electorales suelen mostrarse con un gráfico de barras (una barra por candidato o partido)?"
tipo: mc
opciones_explicitas:
  - "Porque permite comparar de un vistazo cuántos votos sacó cada candidato, sin un orden numérico entre ellos"
  - "Porque los votos siempre cambian con el tiempo, como en un gráfico de líneas"
  - "Porque las barras muestran directamente porcentajes que suman 100%"
respuesta: "Porque permite comparar de un vistazo cuántos votos sacó cada candidato, sin un orden numérico entre ellos"

explicacion: |
  Los candidatos son categorías, no una secuencia temporal ni
  proporciones de un total (eso sería más propio de una torta).
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras", "problema"]

respuesta: 60
tipo: input

enunciado: "Con el gráfico de ventas — Camisas 45, Pantalones 30, Camperas 15, Zapatos 25 — ¿cuántas unidades se vendieron entre Camperas y Zapatos juntos?"

pasos:
  - "15 + 25 = 40"

explicacion: |
  Se suman los valores de las dos barras correspondientes.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras"]

respuesta: falso
tipo: vf

enunciado: "Un gráfico de barras siempre muestra cómo cambia un valor a lo largo del tiempo."

explicacion: |
  Es falso en general: las categorías de un gráfico de barras
  usualmente no tienen relación temporal entre sí (aunque se puede usar
  para comparar el mismo dato en distintos años, ese no es su uso
  típico ni exclusivo).
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "problema"]

enunciado: "Con el gráfico de ventas — Camisas 45, Pantalones 30, Camperas 15, Zapatos 25 — ¿qué producto tiene la barra más baja?"
tipo: mc
opciones_explicitas:
  - "Camperas"
  - "Zapatos"
  - "Pantalones"
respuesta: "Camperas"

explicacion: |
  15 es el valor más bajo de los cuatro.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras", "vocabulario"]

enunciado: "¿Para qué sirve un gráfico de barras AGRUPADAS (dos barras juntas por cada categoría, de colores distintos)?"
tipo: mc
opciones_explicitas:
  - "Para comparar dos series de datos distintas (por ejemplo, ventas de este año contra el año pasado) para cada categoría"
  - "Para mostrar el promedio de todas las categorías juntas"
  - "Es exactamente lo mismo que un gráfico de líneas"
respuesta: "Para comparar dos series de datos distintas (por ejemplo, ventas de este año contra el año pasado) para cada categoría"

explicacion: |
  Cada categoría tiene dos barras (o más) en vez de una, una por cada
  serie que se está comparando.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "problema"]

variables:
  datos: [{dia: "Lunes", clientes: 80}, {dia: "Martes", clientes: 65}, {dia: "Miércoles", clientes: 95}, {dia: "Jueves", clientes: 70}, {dia: "Viernes", clientes: 120}]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: datos[idx].clientes
tipo: input

enunciado: "Un local registra clientes por día: Lunes 80, Martes 65, Miércoles 95, Jueves 70, Viernes 120. ¿Cuántos clientes tuvo el {datos[idx].dia}?"

explicacion: |
  Cada barra representa un día, con su cantidad de clientes.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "problema"]

enunciado: "Con el gráfico de clientes — Lunes 80, Martes 65, Miércoles 95, Jueves 70, Viernes 120 — ¿qué día tuvo más clientes?"
tipo: mc
opciones_explicitas:
  - "Viernes"
  - "Miércoles"
  - "Lunes"
respuesta: "Viernes"

explicacion: |
  120 es el valor más alto de la semana mostrada.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras"]

respuesta: verdadero
tipo: vf

enunciado: "Si se reordenan las barras de un gráfico (por ejemplo, de mayor a menor), los valores que representa cada una no cambian, sólo el orden en que se presentan."

explicacion: |
  Es la misma idea que reordenar filas de una tabla.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras"]

respuesta: verdadero
tipo: vf

enunciado: "Sin números en el eje que mide la altura, sólo se puede comparar qué barra es más alta o más baja, pero no leer el valor exacto de ninguna."

explicacion: |
  Los números del eje son los que permiten pasar de 'más alta' a
  'exactamente cuánto'.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras", "problema"]

respuesta: 30
tipo: input

enunciado: "Con el gráfico de ventas — Camisas 45, Pantalones 30, Camperas 15, Zapatos 25 — ¿cuál es el promedio de ventas de las 4 categorías?"

pasos:
  - "(45 + 30 + 15 + 25) ÷ 4 = 115 ÷ 4"
  - "= 28,75, redondeado a la unidad más cercana ≈ 30"

explicacion: |
  Sumar todas las barras y dividir por la cantidad de categorías.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "basico"
  tags: ["barras", "aplicacion"]

enunciado: "Un gráfico de barras muestra el precio del mismo producto en 4 supermercados distintos. ¿Para qué sirve este gráfico?"
tipo: mc
opciones_explicitas:
  - "Para comparar de un vistazo en qué supermercado el producto es más caro o más barato"
  - "Para mostrar cómo cambió el precio a lo largo del año"
  - "Para mostrar qué porcentaje del gasto total representa ese producto"
respuesta: "Para comparar de un vistazo en qué supermercado el producto es más caro o más barato"

explicacion: |
  Los supermercados son categorías (sin orden numérico entre sí), el
  caso típico de un gráfico de barras.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras"]

respuesta: verdadero
tipo: vf

enunciado: "En un gráfico de barras simple, lo que importa es la ALTURA de cada barra — el ancho de las barras no representa ningún dato (suele ser sólo estético)."

explicacion: |
  A diferencia de un histograma (donde el ancho también importa), en
  un gráfico de barras categórico sólo la altura tiene significado.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras", "problema"]

respuesta: 2
tipo: input

enunciado: "Con el gráfico de clientes — Lunes 80, Martes 65, Miércoles 95, Jueves 70, Viernes 120 — ¿en cuántos días hubo MÁS de 90 clientes?"

pasos:
  - "Miércoles (95) y Viernes (120) superan los 90. Los demás días no."

explicacion: |
  Se revisa cada barra y se cuentan las que cumplen la condición.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve un gráfico de barras?"
tipo: mc
opciones_explicitas:
  - "Para comparar de un vistazo el valor de distintas categorías, usando la altura de cada barra"
  - "Sólo sirve para mostrar datos que cambian con el tiempo"
  - "Sólo aplica cuando hay exactamente 2 categorías"
respuesta: "Para comparar de un vistazo el valor de distintas categorías, usando la altura de cada barra"

explicacion: |
  Es el hermano de `../lineas/` (para datos en el tiempo) y
  `../torta/` (para proporciones de un total).
```

## Sección: leer-grafico/lineas (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["lineas", "vocabulario"]

enunciado: "¿Qué es un gráfico de líneas?"
tipo: mc
opciones_explicitas:
  - "Un gráfico que conecta con segmentos los puntos de una serie de datos, casi siempre a lo largo del tiempo"
  - "Un gráfico que muestra cada categoría como una porción de un círculo"
  - "Un gráfico que sólo puede tener un único punto"
respuesta: "Un gráfico que conecta con segmentos los puntos de una serie de datos, casi siempre a lo largo del tiempo"

explicacion: |
  La línea conecta los puntos para que se vea la tendencia completa,
  no sólo valores sueltos.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["lineas", "vocabulario"]

enunciado: "¿Qué tipo de dato suele ir en el eje horizontal de un gráfico de líneas?"
tipo: mc
opciones_explicitas:
  - "Una magnitud continua y ordenada, casi siempre tiempo (horas, meses, años)"
  - "Categorías sin ningún orden entre sí"
  - "Siempre porcentajes que suman 100%"
respuesta: "Una magnitud continua y ordenada, casi siempre tiempo (horas, meses, años)"

explicacion: |
  Por eso tiene sentido "conectar" los puntos: hay un orden real entre
  ellos.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "problema"]

variables:
  datos: [{mes: "Enero", temperatura: 28}, {mes: "Marzo", temperatura: 22}, {mes: "Junio", temperatura: 10}, {mes: "Septiembre", temperatura: 16}, {mes: "Diciembre", temperatura: 26}]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: datos[idx].temperatura
tipo: input
unidad: "°C"

enunciado: "Un gráfico de líneas muestra la temperatura promedio mensual: Enero 28°C, Marzo 22°C, Junio 10°C, Septiembre 16°C, Diciembre 26°C. ¿Cuál fue la temperatura en {datos[idx].mes}?"

explicacion: |
  Se busca el punto correspondiente a ese mes y se lee su altura en
  el eje de temperatura.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "problema"]

enunciado: "Con el gráfico de temperatura — Enero 28°C, Marzo 22°C, Junio 10°C, Septiembre 16°C, Diciembre 26°C — ¿qué pasa entre Enero y Junio?"
tipo: mc
opciones_explicitas:
  - "La temperatura baja"
  - "La temperatura sube"
  - "La temperatura se mantiene igual"
respuesta: "La temperatura baja"

explicacion: |
  De 28°C a 10°C la línea desciende — es la mitad del año que va del
  verano al invierno.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "problema"]

enunciado: "Con el mismo gráfico — Enero 28°C, Marzo 22°C, Junio 10°C, Septiembre 16°C, Diciembre 26°C — ¿cuál es el mes más frío de los mostrados?"
tipo: mc
opciones_explicitas:
  - "Junio"
  - "Septiembre"
  - "Marzo"
respuesta: "Junio"

explicacion: |
  10°C es el valor más bajo de la serie — es el punto más bajo (valle)
  de la línea.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "completar"]

tipo: completar
enunciado: "Completá: un punto de la línea notablemente más bajo que sus vecinos se llama un ___ (lo opuesto de un pico)."
respuestas_validas:
  - "valle"

explicacion: |
  Pico (más alto) y valle (más bajo) son los dos extremos que suele
  destacarse al leer una línea.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas", "problema"]

respuesta: 18
tipo: input

enunciado: "Con el gráfico de temperatura — Enero 28°C, Marzo 22°C, Junio 10°C, Septiembre 16°C, Diciembre 26°C — ¿cuál es la diferencia entre el mes más caluroso y el más frío?"

pasos:
  - "Más caluroso: Enero (28°C). Más frío: Junio (10°C)."
  - "Diferencia = 28 − 10 = 18"

explicacion: |
  Se identifican los dos extremos de la línea y se restan.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "ordenar"]

enunciado: "Ordená los pasos para leer el valor de un gráfico de líneas en un momento determinado."
tipo: ordenar
opciones_explicitas:
  - "Leer el número donde esa línea vertical cruza a la línea del gráfico"
  - "Ubicar ese momento (por ejemplo, un mes) en el eje horizontal"
  - "Subir en línea vertical imaginaria desde ese punto hasta la línea del gráfico"
respuesta_orden:
  - "Ubicar ese momento (por ejemplo, un mes) en el eje horizontal"
  - "Subir en línea vertical imaginaria desde ese punto hasta la línea del gráfico"
  - "Leer el número donde esa línea vertical cruza a la línea del gráfico"

explicacion: |
  Es el mismo procedimiento que leer una barra, pero siguiendo la
  línea en vez de una barra sólida.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["lineas", "aplicacion"]

enunciado: "¿Por qué la cotización de una moneda a lo largo del año se muestra casi siempre con un gráfico de líneas?"
tipo: mc
opciones_explicitas:
  - "Porque el tiempo (los días del año) es una magnitud continua y ordenada, y la línea muestra la tendencia completa"
  - "Porque las monedas sólo se pueden comparar entre sí, nunca en el tiempo"
  - "Porque un gráfico de líneas siempre suma 100%"
respuesta: "Porque el tiempo (los días del año) es una magnitud continua y ordenada, y la línea muestra la tendencia completa"

explicacion: |
  Es el caso de uso típico: ver cómo evoluciona un valor a lo largo
  del tiempo.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas"]

respuesta: verdadero
tipo: vf

enunciado: "Que la línea termine más arriba de donde empezó no significa que haya subido de forma constante todo el tiempo — puede haber bajado y vuelto a subir en el medio."

explicacion: |
  Hay que mirar la forma completa de la línea, no sólo los dos
  extremos.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "problema"]

variables:
  datos: [{mes: "Enero", ventas: 200}, {mes: "Febrero", ventas: 250}, {mes: "Marzo", ventas: 180}, {mes: "Abril", ventas: 300}]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx].ventas
tipo: input

enunciado: "Un gráfico de líneas muestra ventas mensuales: Enero 200, Febrero 250, Marzo 180, Abril 300. ¿Cuánto se vendió en {datos[idx].mes}?"

explicacion: |
  Se lee el punto correspondiente a ese mes.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas", "problema"]

enunciado: "Con las ventas — Enero 200, Febrero 250, Marzo 180, Abril 300 — ¿entre qué dos meses consecutivos hubo la mayor CAÍDA?"
tipo: mc
opciones_explicitas:
  - "Entre Febrero y Marzo"
  - "Entre Enero y Febrero"
  - "Entre Marzo y Abril"
respuesta: "Entre Febrero y Marzo"

explicacion: |
  De 250 a 180 hay una caída de 70 — la única caída entre esos meses
  (los otros dos tramos suben).
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas"]

respuesta: verdadero
tipo: vf

enunciado: "Un mismo gráfico puede tener varias líneas de colores distintos, cada una representando una serie de datos distinta, para comparar sus evoluciones."

explicacion: |
  Por ejemplo, la temperatura de dos ciudades distintas a lo largo del
  mismo año.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas", "problema"]

respuesta: 100
tipo: input

enunciado: "Con las ventas — Enero 200, Febrero 250, Marzo 180, Abril 300 — ¿cuánto creció el valor entre el primer mes (Enero) y el último (Abril)?"

pasos:
  - "Abril − Enero = 300 − 200 = 100"

explicacion: |
  Se compara el primer y el último punto de la serie, ignorando lo que
  pasó en el medio.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["lineas", "vocabulario"]

enunciado: "¿Cómo se le llama al conjunto completo de puntos que forma una línea en el gráfico?"
tipo: mc
opciones_explicitas:
  - "Una serie de datos"
  - "Un encabezado"
  - "Una celda"
respuesta: "Una serie de datos"

explicacion: |
  Es el mismo término que se usa cuando hay varias líneas
  (series) en un mismo gráfico.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas"]

respuesta: verdadero
tipo: vf

enunciado: "Comparar sólo el primer y el último punto de una línea puede dar una idea equivocada de la tendencia real, si en el medio hubo subidas y bajadas grandes."

explicacion: |
  Una línea puede terminar igual que empezó y haber tenido un pico
  enorme en el medio — mirar sólo los extremos no lo muestra.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "problema"]

enunciado: "Con las ventas — Enero 200, Febrero 250, Marzo 180, Abril 300 — ¿cuál fue el mes con más ventas?"
tipo: mc
opciones_explicitas:
  - "Abril"
  - "Febrero"
  - "Enero"
respuesta: "Abril"

explicacion: |
  300 es el valor más alto de la serie.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas"]

respuesta: verdadero
tipo: vf

enunciado: "Un tramo de la línea completamente horizontal significa que el valor se mantuvo igual entre esos dos puntos."

explicacion: |
  Sin subir ni bajar, el valor permanece constante en ese tramo.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["lineas", "aplicacion"]

enunciado: "¿Por qué el crecimiento de la población de una ciudad a lo largo de las décadas se muestra con un gráfico de líneas?"
tipo: mc
opciones_explicitas:
  - "Porque el tiempo (las décadas) es continuo y ordenado, y permite ver la tendencia de crecimiento completa"
  - "Porque la población siempre suma 100% del total del país"
  - "Porque no hay otra forma de mostrar ese dato"
respuesta: "Porque el tiempo (las décadas) es continuo y ordenado, y permite ver la tendencia de crecimiento completa"

explicacion: |
  Es el mismo motivo por el que se usa para temperatura o cotizaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas", "problema"]

respuesta: 2
tipo: input

enunciado: "Con las ventas — Enero 200, Febrero 250, Marzo 180, Abril 300 — ¿en cuántos meses las ventas superaron las 240 unidades?"

pasos:
  - "Febrero (250) y Abril (300) superan las 240. Enero (200) y Marzo (180) no."

explicacion: |
  Se revisa cada punto de la serie y se cuentan los que cumplen la
  condición.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas"]

respuesta: verdadero
tipo: vf

enunciado: "El segmento entre dos puntos consecutivos de un gráfico de líneas es una aproximación visual — no garantiza que el valor real haya seguido exactamente esa recta entre ambos momentos."

explicacion: |
  Sólo se conocen con certeza los valores en los puntos medidos; lo de
  en el medio es interpolación visual, no un dato medido de verdad.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve un gráfico de líneas?"
tipo: mc
opciones_explicitas:
  - "Para ver la evolución de un valor a lo largo del tiempo, y detectar tendencias, picos y valles"
  - "Sólo sirve para comparar categorías sin relación entre sí"
  - "Sólo aplica cuando los datos suman exactamente 100%"
respuesta: "Para ver la evolución de un valor a lo largo del tiempo, y detectar tendencias, picos y valles"

explicacion: |
  Es el hermano de `../barras/` (categorías) y `../torta/`
  (proporciones de un total).
```
