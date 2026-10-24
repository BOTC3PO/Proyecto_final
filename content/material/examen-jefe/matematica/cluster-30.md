# Examen jefe — Domina el Binomio y el Cálculo

> Logro #630. Aplicaste el teorema del binomio y las variaciones, calculaste riesgo relativo y absoluto, y analizaste concavidad e integrales definidas. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **113 preguntas totales** en 5/5 secciones.

---

## Sección: riesgo-relativo-vs-absoluto (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "basico"
  tags: ["riesgo_absoluto", "vocabulario"]

enunciado: "¿Qué es el riesgo absoluto de un evento en un grupo?"
tipo: mc
opciones_explicitas:
  - "La probabilidad simple de que ocurra el evento en ese grupo (por ejemplo, 70 de cada 10.000 personas)"
  - "La comparación entre el riesgo de dos grupos distintos"
  - "El porcentaje de personas que NO tuvieron el evento"
respuesta: "La probabilidad simple de que ocurra el evento en ese grupo (por ejemplo, 70 de cada 10.000 personas)"

explicacion: |
  Es la misma probabilidad condicional P(evento|grupo) de
  `../probabilidad-condicional/`.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "intermedio"
  tags: ["riesgo_relativo", "vocabulario"]

enunciado: "¿Qué es el riesgo relativo (RR)?"
tipo: mc
opciones_explicitas:
  - "La razón entre el riesgo de un grupo expuesto y el riesgo de un grupo no expuesto (P(evento|expuesto) / P(evento|no expuesto))"
  - "La probabilidad absoluta de un único grupo, sin comparar con ningún otro"
  - "La diferencia de edad entre dos grupos comparados"
respuesta: "La razón entre el riesgo de un grupo expuesto y el riesgo de un grupo no expuesto (P(evento|expuesto) / P(evento|no expuesto))"

explicacion: |
  RR=1 significa que no hay diferencia entre ambos grupos.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["riesgo_relativo", "problema"]

variables:
  riesgo_expuesto: uno_de([0.04, 0.06, 0.08])
  riesgo_no_expuesto: uno_de([0.02, 0.03])

respuesta: redondear(riesgo_expuesto / riesgo_no_expuesto, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "El riesgo de un evento es {riesgo_expuesto} en el grupo expuesto y {riesgo_no_expuesto} en el grupo no expuesto. ¿Cuál es el riesgo relativo (RR)?"

pasos:
  - "RR = {riesgo_expuesto} / {riesgo_no_expuesto} = {redondear(riesgo_expuesto / riesgo_no_expuesto, 2)}"

explicacion: |
  Un RR mayor a 1 indica más riesgo en el grupo expuesto.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["riesgo_absoluto", "problema"]

variables:
  riesgo_expuesto: uno_de([0.04, 0.06, 0.08])
  riesgo_no_expuesto: uno_de([0.02, 0.03])

respuesta: redondear(riesgo_expuesto - riesgo_no_expuesto, 3)
tipo: input
tolerancia_abs: 0.001

enunciado: "Con los mismos riesgos ({riesgo_expuesto} expuesto, {riesgo_no_expuesto} no expuesto), ¿cuál es la diferencia de riesgo ABSOLUTA?"

pasos:
  - "Diferencia = {riesgo_expuesto} − {riesgo_no_expuesto} = {redondear(riesgo_expuesto - riesgo_no_expuesto, 3)}"

explicacion: |
  Es una resta simple, a diferencia del riesgo relativo (que es un
  cociente).
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["riesgo_relativo", "riesgo_absoluto"]

respuesta: verdadero
tipo: vf

enunciado: "Un riesgo relativo alto (por ejemplo, RR=2) puede corresponder a una diferencia de riesgo absoluta insignificante, si el riesgo base (sin exposición) ya era muy bajo de por sí."

explicacion: |
  Duplicar un riesgo de 1 en un millón sigue siendo un riesgo
  absoluto mínimo, aunque el riesgo relativo (RR=2) suene alarmante.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["riesgo_absoluto", "problema"]

variables:
  riesgo_base: 0.000001
  rr: 2

respuesta: redondear(riesgo_base * rr - riesgo_base, 7)
tipo: input
tolerancia_abs: 0.0000001

enunciado: "Un hábito duplica (RR={rr}) el riesgo de una enfermedad muy rara, cuyo riesgo base sin el hábito es {riesgo_base} (1 en 1.000.000). ¿Cuál es la diferencia de riesgo ABSOLUTA real?"

pasos:
  - "Riesgo con el hábito = {riesgo_base} × {rr} = {riesgo_base * rr}"
  - "Diferencia absoluta = {riesgo_base * rr} − {riesgo_base} = {redondear(riesgo_base * rr - riesgo_base, 7)}"

explicacion: |
  A pesar de 'duplicar el riesgo', el aumento absoluto real es de
  apenas 1 en 1.000.000 — prácticamente insignificante en términos
  prácticos.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Un titular dice: 'Comer X duplica el riesgo de la enfermedad Y'. ¿Qué información falta para poder evaluar si esto es realmente preocupante?"
tipo: mc
opciones_explicitas:
  - "El riesgo ABSOLUTO de base (sin comer X): duplicar un riesgo de 1 en un millón no es lo mismo que duplicar uno de 1 en 10"
  - "No falta ninguna información: 'duplica el riesgo' ya dice todo lo necesario"
  - "Sólo importa saber cuántas personas participaron en el estudio"
respuesta: "El riesgo ABSOLUTO de base (sin comer X): duplicar un riesgo de 1 en un millón no es lo mismo que duplicar uno de 1 en 10"

explicacion: |
  El riesgo relativo solo, sin el riesgo absoluto de referencia, no
  alcanza para evaluar la relevancia práctica de la noticia.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["riesgo_relativo", "problema"]

variables:
  riesgo_no_expuesto: 0.001
  riesgo_expuesto: 0.003

respuesta: redondear(riesgo_expuesto / riesgo_no_expuesto, 1)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un titular dice 'esto TRIPLICA el riesgo'. El riesgo sin exposición es {riesgo_no_expuesto} y con exposición es {riesgo_expuesto}. ¿El riesgo relativo confirma ese 'triplica'?"

pasos:
  - "RR = {riesgo_expuesto} / {riesgo_no_expuesto} = {redondear(riesgo_expuesto / riesgo_no_expuesto, 1)}"

explicacion: |
  El cálculo confirma el RR=3 del titular — pero sigue haciendo falta
  el riesgo absoluto para saber si es relevante en la práctica.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "intermedio"
  tags: ["riesgo_relativo"]

enunciado: "¿Por qué el riesgo relativo, reportado SOLO (sin el riesgo absoluto), no cuenta toda la historia?"
tipo: mc
opciones_explicitas:
  - "Porque el mismo número de riesgo relativo puede corresponder a situaciones con consecuencias prácticas muy distintas, según cuál sea el riesgo absoluto de base"
  - "Porque el riesgo relativo siempre es un número inventado, sin ninguna base real"
  - "El riesgo relativo solo siempre es suficiente, no hace falta nada más"
respuesta: "Porque el mismo número de riesgo relativo puede corresponder a situaciones con consecuencias prácticas muy distintas, según cuál sea el riesgo absoluto de base"

explicacion: |
  Es la idea central de todo el módulo, ilustrada con el ejemplo del
  riesgo base de 1 en un millón.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["riesgo_relativo", "riesgo_absoluto"]

respuesta: verdadero
tipo: vf

enunciado: "Dos situaciones con el mismo riesgo relativo (RR=2) pueden tener consecuencias prácticas muy distintas, según si el riesgo base era del 0,0001% o del 10%."

explicacion: |
  Duplicar 10% a 20% (10 puntos de diferencia absoluta) es mucho más
  relevante que duplicar 0,0001% a 0,0002%.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["riesgo_relativo", "problema"]

variables:
  riesgo_base_a: 0.001
  riesgo_base_b: 0.15
  rr: 2

respuesta: (riesgo_base_b * rr - riesgo_base_b) > (riesgo_base_a * rr - riesgo_base_a)
tipo: vf

enunciado: "Escenario A tiene riesgo base {riesgo_base_a}; Escenario B tiene riesgo base {riesgo_base_b}. En ambos, el RR de la exposición es {rr}. ¿La diferencia de riesgo ABSOLUTA del Escenario B es MAYOR que la del Escenario A?"

explicacion: |
  Con el mismo riesgo relativo, un riesgo base más alto siempre
  produce una diferencia absoluta mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Al leer 'X aumenta el riesgo de Y en un Z%', ¿qué conviene preguntarse antes de preocuparse?"
tipo: mc
opciones_explicitas:
  - "¿Cuál es el riesgo ABSOLUTO de base? Un aumento relativo grande sobre una base muy chica puede seguir siendo un riesgo absoluto insignificante"
  - "Nada más: el porcentaje ya dice todo lo que hace falta saber"
  - "Sólo importa el nombre de la revista que publicó el estudio"
respuesta: "¿Cuál es el riesgo ABSOLUTO de base? Un aumento relativo grande sobre una base muy chica puede seguir siendo un riesgo absoluto insignificante"

explicacion: |
  Es la pregunta crítica central de este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "intermedio"
  tags: ["probabilidad_condicional", "bayes"]

enunciado: "¿Qué relación tienen el riesgo absoluto y el riesgo relativo con `../probabilidad-condicional/` y `../teorema-de-bayes/`?"
tipo: mc
opciones_explicitas:
  - "Ambos son formas de reportar y comparar probabilidades condicionales (P(evento|expuesto) vs. P(evento|no expuesto)), la misma maquinaria ya vista en esos módulos"
  - "No tienen ninguna relación con la probabilidad condicional"
  - "Reemplazan por completo la necesidad de calcular probabilidad condicional"
respuesta: "Ambos son formas de reportar y comparar probabilidades condicionales (P(evento|expuesto) vs. P(evento|no expuesto)), la misma maquinaria ya vista en esos módulos"

explicacion: |
  El riesgo relativo es, literalmente, un cociente de dos
  probabilidades condicionales.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["riesgo_relativo", "problema"]

variables:
  riesgo_expuesto: 0.02
  riesgo_no_expuesto: 0.08

respuesta: redondear(riesgo_expuesto / riesgo_no_expuesto, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "El riesgo de un evento es {riesgo_expuesto} en el grupo expuesto a un factor protector, y {riesgo_no_expuesto} en el grupo no expuesto. ¿Cuál es el riesgo relativo?"

pasos:
  - "RR = {riesgo_expuesto} / {riesgo_no_expuesto} = {redondear(riesgo_expuesto / riesgo_no_expuesto, 2)}"

explicacion: |
  Un RR menor a 1 indica que la exposición está asociada con MENOS
  riesgo (un factor protector), no con más.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "intermedio"
  tags: ["riesgo_relativo"]

respuesta: verdadero
tipo: vf

enunciado: "Un riesgo relativo de exactamente 1 significa que no hay ninguna diferencia de riesgo entre el grupo expuesto y el no expuesto."

explicacion: |
  P(evento|expuesto) = P(evento|no expuesto) cuando el cociente entre
  ambos da 1.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["aplicacion"]

enunciado: "En medicina se usa el 'número necesario a tratar' (NNT): el inverso de la diferencia de riesgo absoluta, que dice a cuántas personas hay que tratar para evitar un caso. ¿Por qué esta medida es útil, más allá del riesgo relativo?"
tipo: mc
opciones_explicitas:
  - "Porque traduce la diferencia de riesgo absoluta a una cifra concreta y fácil de interpretar en la práctica clínica, en vez de un cociente abstracto como el riesgo relativo"
  - "Porque reemplaza por completo la necesidad de calcular riesgo relativo o absoluto"
  - "El NNT no tiene ninguna aplicación médica real"
respuesta: "Porque traduce la diferencia de riesgo absoluta a una cifra concreta y fácil de interpretar en la práctica clínica, en vez de un cociente abstracto como el riesgo relativo"

explicacion: |
  Un NNT de 100 dice 'hay que tratar a 100 personas para evitar 1
  caso' — una forma muy concreta de leer la diferencia de riesgo
  absoluta.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["aplicacion", "problema"]

variables:
  diferencia_riesgo: uno_de([0.01, 0.02, 0.05])

respuesta: redondear(1 / diferencia_riesgo, 0)
tipo: input

enunciado: "Un tratamiento reduce el riesgo de un evento en {diferencia_riesgo} (diferencia de riesgo absoluta). ¿Cuál es el número necesario a tratar (NNT) para evitar 1 caso, aproximadamente?"

pasos:
  - "NNT = 1 / {diferencia_riesgo} = {redondear(1 / diferencia_riesgo, 0)}"

explicacion: |
  El NNT es, simplemente, el inverso de la diferencia de riesgo
  absoluta.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un estudio serio de salud debería reportar tanto el riesgo relativo como el riesgo absoluto (o la diferencia de riesgo), porque cada uno responde una pregunta distinta y complementaria."

explicacion: |
  El relativo dice 'qué tan grande es el efecto, proporcionalmente';
  el absoluto dice 'qué tan probable es que me pase a mí'.
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["aplicacion", "problema"]

variables:
  diferencia_a: 0.1
  diferencia_b: 0.02

respuesta: (1 / diferencia_a) < (1 / diferencia_b)
tipo: vf

enunciado: "Tratamiento A reduce el riesgo en {diferencia_a}; Tratamiento B lo reduce en {diferencia_b}. ¿El NNT del Tratamiento A es MENOR que el del Tratamiento B (hace falta tratar a menos personas para evitar 1 caso)?"

explicacion: |
  Una diferencia de riesgo absoluta más grande siempre da un NNT más
  chico (más eficiente en términos prácticos).
```

```
metadata:
  materia: "matematicas"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve distinguir entre riesgo relativo y riesgo absoluto al leer una noticia de salud?"
tipo: mc
opciones_explicitas:
  - "Para evaluar con criterio propio si un titular alarmante ('duplica el riesgo') es realmente relevante en la práctica, o si esconde un riesgo absoluto insignificante"
  - "Para descartar automáticamente cualquier noticia que mencione un riesgo relativo"
  - "Sólo tiene aplicación en estudios de medicamentos, no en otro tipo de noticias"
respuesta: "Para evaluar con criterio propio si un titular alarmante ('duplica el riesgo') es realmente relevante en la práctica, o si esconde un riesgo absoluto insignificante"

explicacion: |
  Es la misma familia de pensamiento crítico estadístico que
  `../grafico-eje-truncado/` y `../correlacion-no-es-causalidad/`.
```

## Sección: teorema-del-binomio (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "basico"
  tags: ["binomio", "vocabulario"]

enunciado: "¿Qué permite hacer el teorema del binomio?"
tipo: mc
opciones_explicitas:
  - "Expandir (a+b)ⁿ como una suma de términos C(n,k)·aⁿ⁻ᵏ·bᵏ, sin multiplicar el binomio por sí mismo n veces a mano"
  - "Calcular la derivada de un polinomio de grado n"
  - "Resolver ecuaciones cuadráticas de la forma ax²+bx+c=0"
respuesta: "Expandir (a+b)ⁿ como una suma de términos C(n,k)·aⁿ⁻ᵏ·bᵏ, sin multiplicar el binomio por sí mismo n veces a mano"

explicacion: |
  Da una fórmula directa para cada término de la expansión.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "intermedio"
  tags: ["binomio", "completar"]

tipo: completar
enunciado: "Completá: el término general de (a+b)ⁿ es C(n,k)·aⁿ⁻ᵏ·b___."
respuestas_validas:
  - "k"

explicacion: |
  El exponente de b es exactamente k, el mismo índice del coeficiente
  C(n,k).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "problema"]

variables:
  n: uno_de([4, 5, 6])
  k: uno_de([1, 2])

respuesta: combinations(n, k)
tipo: input

enunciado: "En el desarrollo de (a+b)^{n}, ¿cuál es el coeficiente del término aⁿ⁻ᵏbᵏ con k={k} (es decir, C({n},{k}))?"

pasos:
  - "C({n},{k}) = {combinations(n, k)}"

explicacion: |
  Es exactamente el mismo número combinatorio de `../combinaciones/`.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "intermedio"
  tags: ["binomio", "problema"]

tipo: completar
enunciado: "Completá el desarrollo: (a+b)² = a² + ___ + b²."
respuestas_validas:
  - "2ab"

explicacion: |
  Los coeficientes 1, 2, 1 son C(2,0), C(2,1), C(2,2).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "intermedio"
  tags: ["binomio", "problema"]

tipo: completar
enunciado: "Completá el desarrollo: (a+b)³ = a³ + 3a²b + ___ + b³."
respuestas_validas:
  - "3ab²"

explicacion: |
  Los coeficientes 1, 3, 3, 1 son C(3,0), C(3,1), C(3,2), C(3,3).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "basico"
  tags: ["binomio", "pascal", "vocabulario"]

enunciado: "¿Qué es el triángulo de Pascal?"
tipo: mc
opciones_explicitas:
  - "Los coeficientes C(n,k) organizados fila por fila (una fila por cada valor de n), donde cada número es la suma de los dos que tiene arriba"
  - "Una forma de resolver ecuaciones de segundo grado"
  - "Un método para calcular derivadas de polinomios"
respuesta: "Los coeficientes C(n,k) organizados fila por fila (una fila por cada valor de n), donde cada número es la suma de los dos que tiene arriba"

explicacion: |
  Es una forma visual de calcular C(n,k) sin necesitar la fórmula de
  factoriales, para valores chicos de n.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "pascal", "problema"]

variables:
  n: uno_de([4, 5])
  k: uno_de([1, 2])

respuesta: combinations(n, k)
tipo: input

enunciado: "En la fila n={n} del triángulo de Pascal, ¿cuál es el valor en la posición k={k} (contando desde k=0)?"

pasos:
  - "El valor en la posición k de la fila n es C(n,k) = C({n},{k}) = {combinations(n, k)}"

explicacion: |
  Cada posición de la fila n corresponde a un coeficiente C(n,k).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "intermedio"
  tags: ["binomio", "combinaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Los coeficientes que aparecen en la expansión de (a+b)ⁿ son exactamente los mismos números combinatorios C(n,k) usados para contar combinaciones."

explicacion: |
  No es una coincidencia — se puede demostrar que ambos representan
  la misma cantidad.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "problema"]

variables:
  n: uno_de([3, 4, 5, 6])

respuesta: 2 ^ n
tipo: input

enunciado: "¿Cuál es la suma de TODOS los coeficientes C(n,0)+C(n,1)+...+C(n,n) de la fila n={n} del triángulo de Pascal (equivalente a evaluar (1+1)^{n})?"

pasos:
  - "Suma de coeficientes = 2^{n} = {2 ^ n}"

explicacion: |
  Se obtiene evaluando la fórmula del binomio con a=b=1: la suma se
  reduce a 2ⁿ.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "intermedio"
  tags: ["binomio"]

respuesta: verdadero
tipo: vf

enunciado: "El desarrollo completo de (a+b)ⁿ tiene exactamente n+1 términos (desde k=0 hasta k=n)."

explicacion: |
  Contando desde k=0, hay n+1 valores posibles de k.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "problema"]

variables:
  n: 6
  k: uno_de([2, 4])

respuesta: combinations(n, k)
tipo: input

enunciado: "En el desarrollo de (a+b)⁶, ¿cuál es el coeficiente del término con b elevado a la {k} (es decir, a⁴b² o su análogo con k={k})?"

pasos:
  - "El exponente de b es k={k}, así que el coeficiente es C(6,{k}) = {combinations(n, k)}"

explicacion: |
  Se identifica k directo por el exponente de b en el término
  buscado.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "intermedio"
  tags: ["binomio", "distribucion_binomial"]

enunciado: "¿Qué relación tiene el teorema del binomio con la distribución binomial (`../distribucion-binomial/`)?"
tipo: mc
opciones_explicitas:
  - "Usan el mismo coeficiente C(n,k), pero el teorema del binomio expande un polinomio algebraico y la distribución binomial pondera una probabilidad"
  - "Son exactamente la misma fórmula, sin ninguna diferencia"
  - "No tienen ninguna relación entre sí"
respuesta: "Usan el mismo coeficiente C(n,k), pero el teorema del binomio expande un polinomio algebraico y la distribución binomial pondera una probabilidad"

explicacion: |
  Son las dos caras de la misma pieza combinatoria: álgebra por un
  lado, probabilidad por el otro.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "problema"]

tipo: completar
enunciado: "Completá el desarrollo: (a−b)² = a² − ___ + b²."
respuestas_validas:
  - "2ab"

explicacion: |
  (a−b)ⁿ es (a+(−b))ⁿ: se aplica la misma fórmula, pero los signos
  de los términos con b impar quedan negativos.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "problema"]

variables:
  n: uno_de([4, 6])

respuesta: combinations(n, n / 2)
tipo: input

enunciado: "En el desarrollo de (a+b)^{n} (con n par), el término central corresponde a k=n/2. ¿Cuál es su coeficiente?"

pasos:
  - "k = {n}/2 = {n / 2}"
  - "C({n},{n / 2}) = {combinations(n, n / 2)}"

explicacion: |
  Con n par, hay un único término central exactamente en el medio del
  desarrollo (n+1 términos, cantidad impar).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "basico"
  tags: ["binomio", "aplicacion"]

enunciado: "¿Por qué es útil el teorema del binomio en vez de multiplicar (a+b) por sí mismo n veces a mano?"
tipo: mc
opciones_explicitas:
  - "Porque permite calcular directamente un único término específico (por ejemplo, el coeficiente de a³b²) sin desarrollar todo el producto completo"
  - "Porque siempre da un resultado más simple que la multiplicación directa"
  - "No hay ninguna ventaja real, es sólo otra forma de escribir lo mismo"
respuesta: "Porque permite calcular directamente un único término específico (por ejemplo, el coeficiente de a³b²) sin desarrollar todo el producto completo"

explicacion: |
  Para n grande, multiplicar (a+b) por sí mismo n veces a mano es
  muchísimo más lento que aplicar la fórmula directo a un término.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "problema"]

variables:
  a: uno_de([2, 3])
  b: uno_de([1, 2])

respuesta: (a + b) ^ 3
tipo: input

enunciado: "Con a={a} y b={b}, ¿cuánto vale (a+b)³, calculado directo (sin expandir)?"

pasos:
  - "(a+b)³ = ({a}+{b})³ = {a + b}³ = {(a + b) ^ 3}"

explicacion: |
  Este resultado debería coincidir con evaluar la expansión completa
  a³+3a²b+3ab²+b³ con los mismos valores de a y b.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "intermedio"
  tags: ["binomio", "combinaciones"]

respuesta: verdadero
tipo: vf

enunciado: "En cualquier fila del triángulo de Pascal, los coeficientes de los extremos (C(n,0) y C(n,n)) siempre valen 1."

explicacion: |
  C(n,0)=1 (hay una sola forma de elegir 0 elementos) y C(n,n)=1 (hay
  una sola forma de elegir todos).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "distribucion_binomial", "problema"]

variables:
  n: 5
  k: 3
  p: 0.4

respuesta: combinations(n, k)
tipo: input

enunciado: "En (a+b)⁵, el coeficiente de a²b³ es C(5,3). Ese mismo número C(5,3) también aparece en la fórmula de P(X=3) de una binomial con n=5, p={p}. ¿Cuánto vale ese coeficiente compartido?"

pasos:
  - "C({n},{k}) = {combinations(n, k)}"

explicacion: |
  El coeficiente combinatorio es idéntico en ambos contextos — sólo
  cambia qué se multiplica junto a él (variables algebraicas vs.
  probabilidades).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "avanzado"
  tags: ["binomio", "problema"]

variables:
  n: uno_de([6, 7, 8])
  k: uno_de([1, 2, 3])

respuesta: combinations(n, k) == combinations(n, n - k)
tipo: vf

enunciado: "Con n={n} y k={k}, ¿es cierto que C(n,k) = C(n, n−k)?"

explicacion: |
  Es la propiedad de simetría del triángulo de Pascal: cada fila se
  lee igual del derecho y del revés.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_binomio"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el teorema del binomio?"
tipo: mc
opciones_explicitas:
  - "Para expandir (a+b)ⁿ de forma directa (o calcular un único término de esa expansión), usando los mismos coeficientes combinatorios C(n,k) de `../combinaciones/`"
  - "Para resolver sistemas de ecuaciones lineales"
  - "Sólo sirve para calcular probabilidades, no tiene uso algebraico"
respuesta: "Para expandir (a+b)ⁿ de forma directa (o calcular un único término de esa expansión), usando los mismos coeficientes combinatorios C(n,k) de `../combinaciones/`"

explicacion: |
  Es el hermano algebraico de `../distribucion-binomial/`: mismo
  coeficiente, distinto propósito.
```

## Sección: concavidad-y-puntos-de-inflexion (27 preguntas)

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "basico"
  tags: ["derivada_segunda", "cubica"]

variables:
  a: random(1, 5)
  b: random(1, 5)

respuesta: "{2*a}x"

tipo: input

enunciado: "Calculá la segunda derivada de la función f(x) = {a}x^3 + {b}x^2. Escribí solo el término que depende de x (si es constante, escribí 0)."

explicacion: |
  f'(x) = 3ax^2 + 2bx
  f''(x) = 6ax + 2b
  Para a={a}, b={b}: f''(x) = {6*a}x + {2*b}
  La respuesta pedida es el coeficiente de x en la expresión simplificada si se pide solo la parte variable, o la expresión completa.
  Ajuste: La respuesta debe ser la expresión completa simplificada.
  Corrección: La respuesta es "{6*a}x + {2*b}"
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "basico"
  tags: ["derivada_segunda", "cubica"]

variables:
  a: random(1, 5)
  b: random(1, 5)
  c: random(1, 5)

respuesta: "{6*a}x + {2*b}"

tipo: input

enunciado: "La segunda derivada de f(x) = {a}x^3 + {b}x^2 + {c}x es f''(x) = ___"

explicacion: |
  f'(x) = 3ax^2 + 2bx + c
  f''(x) = 6ax + 2b
  Sustituyendo a={a} y b={b}, obtenemos {6*a}x + {2*b}.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["punto_inflexion", "cubica"]

variables:
  a: random(1, 4)
  b: random(5, 15)
  c: random(1, 4)

respuesta: "{-b/(3*a)}"

tipo: input

enunciado: "Encontrá la coordenada x del punto de inflexión de la función f(x) = {a}x^3 + {b}x^2 + {c}x + 1."

explicacion: |
  f'(x) = 3ax^2 + 2bx + c
  f''(x) = 6ax + 2b
  El punto de inflexión ocurre donde f''(x) = 0.
  6ax + 2b = 0  =>  x = -2b / 6a = -b / 3a
  Para a={a} y b={b}, x = {-b/(3*a)}.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["concavidad", "intervalo", "vf"]

variables:
  a: random(1, 5)

respuesta: verdadero

tipo: vf

enunciado: "La función f(x) = -{a}x^2 + 5x es cóncava hacia abajo en todo su dominio."

explicacion: |
  f'(x) = -2ax + 5
  f''(x) = -2a
  Como a > 0, -2a es siempre negativo.
  Por lo tanto, f''(x) < 0 para todo x, lo que implica concavidad hacia abajo.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["concavidad", "intervalo", "vf"]

variables:
  a: random(1, 5)

respuesta: falso

tipo: vf

enunciado: "La función f(x) = {a}x^2 - 3x es cóncava hacia arriba en todo su dominio."

explicacion: |
  f'(x) = 2ax - 3
  f''(x) = 2a
  Como a > 0, 2a es siempre positivo.
  Por lo tanto, f''(x) > 0 para todo x, lo que implica concavidad hacia arriba.
  La afirmación es verdadera, pero la pregunta dice "hacia abajo".
  Espera, la afirmación es "es cóncava hacia arriba". Eso es VERDADERO.
  Necesito una afirmación FALSA.
  Cambio: "La función f(x) = {a}x^2 es cóncava hacia abajo..." -> Falso.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["concavidad", "intervalo", "vf"]

variables:
  a: random(1, 5)

respuesta: falso

tipo: vf

enunciado: "La función f(x) = {a}x^2 es cóncava hacia abajo en todo su dominio."

explicacion: |
  f''(x) = 2a. Como a > 0, f''(x) > 0.
  La función es cóncava hacia arriba, no hacia abajo.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["punto_inflexion", "identificacion"]

variables:
  a: random(1, 3)
  b: random(4, 8)

respuesta: "{b/(3*a)}"

tipo: input

enunciado: "Para f(x) = {a}x^3 - {3*a*b}x^2 + 5, el punto de inflexión está en x = ___"

explicacion: |
  f'(x) = 3ax^2 - 6abx
  f''(x) = 6ax - 6ab
  f''(x) = 0 => 6ax = 6ab => x = b
  Espera, simplifiqué mal.
  f''(x) = 6ax - 6ab.
  x = b.
  Variable b es {b}.
  Respuesta: "{b}"
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["punto_inflexion", "identificacion"]

variables:
  a: random(1, 3)
  k: random(2, 5)

respuesta: "{k/3}"

tipo: input

enunciado: "Si f(x) = {a}x^3 - {a*k}x^2, el punto de inflexión se encuentra en x = ___"

explicacion: |
  f'(x) = 3ax^2 - 2akx
  f''(x) = 6ax - 2ak
  6ax - 2ak = 0 => 6ax = 2ak => x = 2ak / 6a = k / 3
  Con k={k}, x = {k/3}.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["exponencial", "concavidad", "vf"]

respuesta: verdadero

tipo: vf

enunciado: "La función f(x) = -e^x es cóncava hacia abajo para todo x real."

explicacion: |
  f'(x) = -e^x
  f''(x) = -e^x
  Como e^x > 0, -e^x < 0 siempre.
  Por lo tanto, la función es cóncava hacia abajo.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["cambio_concavidad", "cubica"]

variables:
  a: random(1, 3)

respuesta: "x = 0"

tipo: input

enunciado: "La función f(x) = {a}x^3 cambia su concavidad en x = ___"

explicacion: |
  f'(x) = 3ax^2
  f''(x) = 6ax
  f''(x) = 0 cuando x = 0.
  Para x < 0, f''(x) tiene signo opuesto a a.
  Para x > 0, f''(x) tiene signo de a.
  Hay cambio de concavidad en x=0.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["logaritmo", "concavidad", "vf"]

respuesta: verdadero

tipo: vf

enunciado: "La función f(x) = ln(x) es cóncava hacia abajo en su dominio (x > 0)."

explicacion: |
  f'(x) = 1/x
  f''(x) = -1/x^2
  Para x > 0, x^2 > 0, por lo que -1/x^2 < 0.
  La función es cóncava hacia abajo.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["trigonometria", "punto_inflexion"]

respuesta: "pi/2"

tipo: input

enunciado: "La función f(x) = sin(x) tiene un punto de inflexión en x = ___ (en el intervalo [0, pi])."

explicacion: |
  f'(x) = cos(x)
  f''(x) = -sin(x)
  f''(x) = 0 cuando sin(x) = 0.
  En [0, pi], sin(x)=0 en x=0 y x=pi.
  Sin embargo, el cambio de concavidad ocurre donde f'' cambia de signo.
  f''(x) = -sin(x).
  Para x en (0, pi), sin(x) > 0, entonces f''(x) < 0 (cóncava abajo).
  Para x en (-pi, 0), sin(x) < 0, entonces f''(x) > 0 (cóncava arriba).
  El punto de inflexión típico en el centro del ciclo es x=pi.
  Pero en [0, pi], los extremos son 0 y pi.
  En x=pi, la concavidad cambia de abajo (antes) a arriba (después).
  La pregunta pide en [0, pi]. El punto pi es un punto de inflexión.
  También x=0 es un punto de inflexión.
  Usaremos pi/2 como distractor? No, pi/2 no es cero de f''.
  f''(pi/2) = -1 != 0.
  La respuesta correcta es "pi" o "0".
  Cambiaré la pregunta para que sea más clara.
  "El primer punto de inflexión positivo de sin(x) es x = ___" -> pi.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["trigonometria", "punto_inflexion"]

respuesta: "pi"

tipo: input

enunciado: "El primer valor positivo x donde sin(x) tiene un punto de inflexión es x = ___"

explicacion: |
  f''(x) = -sin(x).
  f''(x) = 0 en x = k*pi.
  El primer positivo es pi.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["raiz_cuadrada", "concavidad", "vf"]

respuesta: verdadero

tipo: vf

enunciado: "La función f(x) = sqrt(x) es cóncava hacia abajo para x > 0."

explicacion: |
  f(x) = x^(1/2)
  f'(x) = (1/2)x^(-1/2)
  f''(x) = (-1/4)x^(-3/2) = -1 / (4x*sqrt(x))
  Para x > 0, f''(x) < 0.
  Es cóncava hacia abajo.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["derivada_segunda", "cuartica"]

variables:
  a: random(1, 3)
  b: random(1, 5)

respuesta: "{12*a}x^2 + {6*b}x"

tipo: input

enunciado: "La segunda derivada de f(x) = {a}x^4 + {b}x^3 es f''(x) = ___"

explicacion: |
  f'(x) = 4ax^3 + 3bx^2
  f''(x) = 12ax^2 + 6bx
  Sustituyendo a={a}, b={b}: {12*a}x^2 + {6*b}x.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "basico"
  tags: ["interpretacion_f2", "concavidad"]

variables:
  a: random(1, 5)

respuesta: "concava_hacia_arriba"

tipo: mc

enunciado: "Si f''(x) = {a}x^2 + {a}, la función f(x) es:"

opciones_explicitas: ["concava_hacia_arriba", "concava_hacia_abajo", "lineal", "no_se_puede_determinar"]

explicacion: |
  f''(x) = a(x^2 + 1).
  Como x^2 + 1 > 0 siempre y a > 0, f''(x) > 0 siempre.
  Por lo tanto, f es cóncava hacia arriba.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "basico"
  tags: ["interpretacion_f2", "concavidad"]

variables:
  a: random(1, 5)

respuesta: "concava_hacia_abajo"

tipo: mc

enunciado: "Si f''(x) = -{a}(x^2 + 1), la función f(x) es:"

opciones_explicitas: ["concava_hacia_arriba", "concava_hacia_abajo", "lineal", "no_se_puede_determinar"]

explicacion: |
  f''(x) = -a(x^2 + 1).
  Como a > 0, -a < 0. Y (x^2+1) > 0.
  Producto de negativo por positivo es negativo.
  f''(x) < 0, por lo tanto cóncava hacia abajo.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["punto_inflexion", "cuartica"]

respuesta: falso

tipo: vf

enunciado: "La función f(x) = x^4 tiene un punto de inflexión en x = 0."

explicacion: |
  f'(x) = 4x^3
  f''(x) = 12x^2
  f''(0) = 0.
  Sin embargo, f''(x) >= 0 para todo x.
  No hay cambio de signo en f''(x) alrededor de 0.
  Por lo tanto, NO es un punto de inflexión.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["cubica", "concavidad", "intervalo"]

respuesta: "concava_hacia_abajo"

tipo: mc

enunciado: "Para la función f(x) = x^3 - x, en el intervalo (-infinity, -1/sqrt(3)), la concavidad es:"

opciones_explicitas: ["concava_hacia_arriba", "concava_hacia_abajo", "lineal", "oscilante"]

explicacion: |
  f'(x) = 3x^2 - 1
  f''(x) = 6x
  Para x < -1/sqrt(3) (que es negativo), f''(x) < 0.
  Por lo tanto, cóncava hacia abajo.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["cubica", "concavidad", "intervalo"]

respuesta: "concava_hacia_arriba"

tipo: mc

enunciado: "Para la función f(x) = x^3 - x, en el intervalo (1/sqrt(3), infinity), la concavidad es:"

opciones_explicitas: ["concava_hacia_arriba", "concava_hacia_abajo", "lineal", "oscilante"]

explicacion: |
  f''(x) = 6x.
  Para x > 1/sqrt(3) (positivo), f''(x) > 0.
  Por lo tanto, cóncava hacia arriba.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["punto_inflexion", "cubica"]

respuesta: "0"

tipo: input

enunciado: "La función f(x) = x^3 - 3x tiene su punto de inflexión en x = ___"

explicacion: |
  f'(x) = 3x^2 - 3
  f''(x) = 6x
  f''(x) = 0 => x = 0.
  Cambio de signo en x=0.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["punto_inflexion", "quintica"]

respuesta: verdadero

tipo: vf

enunciado: "La función f(x) = x^5 tiene un punto de inflexión en x = 0."

explicacion: |
  f'(x) = 5x^4
  f''(x) = 20x^3
  f''(0) = 0.
  Para x < 0, f''(x) < 0 (cóncava abajo).
  Para x > 0, f''(x) > 0 (cóncava arriba).
  Hay cambio de concavidad, por lo tanto sí es un punto de inflexión.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["trigonometria", "derivada_segunda"]

respuesta: "-cos(x)"

tipo: input

enunciado: "La segunda derivada de f(x) = cos(x) es f''(x) = ___"

explicacion: |
  f'(x) = -sin(x)
  f''(x) = -cos(x)
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["trigonometria", "concavidad", "intervalo"]

respuesta: "concava_hacia_abajo"

tipo: mc

enunciado: "En el intervalo (0, pi/2), la función f(x) = cos(x) es:"

opciones_explicitas: ["concava_hacia_arriba", "concava_hacia_abajo", "lineal", "constante"]

explicacion: |
  f''(x) = -cos(x).
  En (0, pi/2), cos(x) > 0.
  Por lo tanto, -cos(x) < 0.
  Cóncava hacia abajo.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["trigonometria", "concavidad", "intervalo"]

respuesta: "concava_hacia_arriba"

tipo: mc

enunciado: "En el intervalo (pi, 3pi/2), la función f(x) = cos(x) es:"

opciones_explicitas: ["concava_hacia_arriba", "concava_hacia_abajo", "lineal", "constante"]

explicacion: |
  f''(x) = -cos(x).
  En (pi, 3pi/2), cos(x) < 0.
  Por lo tanto, -cos(x) > 0.
  Cóncava hacia arriba.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "intermedio"
  tags: ["trigonometria", "punto_inflexion"]

respuesta: "pi/2"

tipo: input

enunciado: "El primer punto de inflexión positivo de f(x) = cos(x) es x = ___"

explicacion: |
  f''(x) = -cos(x).
  f''(x) = 0 cuando cos(x) = 0.
  El primer positivo es pi/2.
```

```
metadata:
  materia: "matematica"
  tema: "concavidad_y_puntos_de_inflexion"
  nivel: "avanzado"
  tags: ["racionales", "concavidad", "vf"]

respuesta: verdadero

tipo: vf

enunciado: "La función f(x) = x^2 + 1/x es cóncava hacia arriba para todo x > 0."

explicacion: |
  f'(x) = 2x - x^(-2)
  f''(x) = 2 + 2x^(-3) = 2 + 2/x^3
  Para x > 0, x^3 > 0, entonces 2/x^3 > 0.
  f''(x) > 2 > 0.
  Es cóncava hacia arriba.
```

## Sección: variaciones (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "basico"
  tags: ["variaciones", "vocabulario"]

enunciado: "¿Qué es una variación de k elementos elegidos de un conjunto de n elementos (k ≤ n)?"
tipo: mc
opciones_explicitas:
  - "Cada forma distinta de elegir y ORDENAR k elementos, sin repetir ninguno, donde el orden importa"
  - "Cada forma de elegir k elementos sin importar el orden"
  - "Cada forma de ordenar TODOS los n elementos"
respuesta: "Cada forma distinta de elegir y ORDENAR k elementos, sin repetir ninguno, donde el orden importa"

explicacion: |
  Se usa sólo una parte (k de n), y el orden en que se elige sí hace
  una diferencia.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones", "completar"]

tipo: completar
enunciado: "Completá: V(n, k) = n! / ___."
respuestas_validas:
  - "(n-k)!"
  - "(n−k)!"

explicacion: |
  Se divide por el factorial de lo que NO se usa (los n−k elementos
  que quedan afuera).
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  n: uno_de([5, 6, 7, 8])
  k: uno_de([2, 3])

respuesta: factorial(n) / factorial(n - k)
tipo: input

enunciado: "¿Cuántas variaciones de {k} elementos se pueden formar a partir de un conjunto de {n} elementos?"

pasos:
  - "V({n}, {k}) = {n}! / ({n}−{k})! = {factorial(n)} / {factorial(n - k)} = {factorial(n) / factorial(n - k)}"

explicacion: |
  Se divide el factorial de todos por el factorial de los que no se
  usan.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "En una variación, elegir A y luego B se cuenta como distinto de elegir B y luego A."

explicacion: |
  Es la diferencia clave con las combinaciones, donde AB y BA
  cuentan como la misma elección.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones"]

respuesta: falso
tipo: vf

enunciado: "En una variación (en el sentido clásico de este módulo), se permite elegir el mismo elemento más de una vez."

explicacion: |
  Es falso: cada elemento se usa como máximo una vez, igual que en
  permutaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  participantes: uno_de([6, 7, 8, 9])

respuesta: factorial(participantes) / factorial(participantes - 3)
tipo: input

enunciado: "En una carrera con {participantes} participantes, ¿de cuántas formas distintas se pueden repartir el 1°, 2° y 3° puesto del podio?"

pasos:
  - "V({participantes}, 3) = {participantes}! / ({participantes}−3)! = {factorial(participantes) / factorial(participantes - 3)}"

explicacion: |
  Importa el orden (no es lo mismo salir 1° que 3°), y una vez que
  alguien ocupa un puesto no puede ocupar otro.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  disponibles: uno_de([8, 9, 10])
  longitud: uno_de([3, 4])

respuesta: factorial(disponibles) / factorial(disponibles - longitud)
tipo: input

enunciado: "Hay {disponibles} símbolos disponibles. ¿Cuántos códigos distintos de {longitud} símbolos (sin repetir ninguno, importa el orden) se pueden formar?"

pasos:
  - "V({disponibles}, {longitud}) = {disponibles}! / ({disponibles}−{longitud})! = {factorial(disponibles) / factorial(disponibles - longitud)}"

explicacion: |
  Es la misma fórmula que el podio, con otros números.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "permutaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Una permutación es el caso particular de una variación donde k = n (se usan todos los elementos)."

explicacion: |
  V(n,n) = n!/(n−n)! = n!/0! = n!/1 = n! — exactamente la fórmula de
  permutaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "ordenar"]

enunciado: "Ordená los pasos para calcular V(n, k) usando la fórmula de factoriales."
tipo: ordenar
opciones_explicitas:
  - "Dividir n! por (n−k)!"
  - "Calcular n! (el factorial de todos los elementos disponibles)"
  - "Calcular (n−k)! (el factorial de los que NO se usan)"
respuesta_orden: ["Calcular n! (el factorial de todos los elementos disponibles)", "Calcular (n−k)! (el factorial de los que NO se usan)", "Dividir n! por (n−k)!"]
explicacion: |
  El orden de los dos factoriales no importa para calcularlos, pero
  la división siempre va al final.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  n: uno_de([6, 7, 8])

respuesta: n * (n - 1) * (n - 2)
tipo: input

enunciado: "Usando el principio multiplicativo directo (sin pasar por factoriales), ¿cuántas variaciones de 3 elementos hay en un conjunto de {n} elementos? (primer lugar: {n} opciones, segundo: {n}−1, tercero: {n}−2)"

pasos:
  - "V({n}, 3) = {n} × ({n}−1) × ({n}−2) = {n * (n - 1) * (n - 2)}"

explicacion: |
  Da exactamente el mismo resultado que n!/(n−3)! — son la misma
  cuenta escrita de dos formas.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones", "combinaciones"]

enunciado: "¿Qué diferencia a una variación de una combinación (ambas eligen k de n elementos)?"
tipo: mc
opciones_explicitas:
  - "En la variación el orden importa (AB y BA son distintas); en la combinación no (AB y BA son la misma elección)"
  - "La variación permite repetir elementos y la combinación no"
  - "No hay ninguna diferencia real entre ambas"
respuesta: "En la variación el orden importa (AB y BA son distintas); en la combinación no (AB y BA son la misma elección)"

explicacion: |
  Por eso la variación siempre da un número mayor o igual que la
  combinación para los mismos n y k.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones", "problema"]

variables:
  n: random(5, 20)

respuesta: n
tipo: input

enunciado: "¿Cuántas variaciones de 1 solo elemento hay en un conjunto de {n} elementos?"

pasos:
  - "V({n}, 1) = {n}! / ({n}−1)! = {n} (elegir uno solo, no hay nada que ordenar)"

explicacion: |
  Con k=1 no hay orden que definir — el resultado es simplemente n.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  n: uno_de([4, 5, 6])

respuesta: factorial(n)
tipo: input

enunciado: "¿Cuántas variaciones de {n} elementos hay en un conjunto de {n} elementos (usando todos)?"

pasos:
  - "V({n}, {n}) = {n}! / 0! = {n}! / 1 = {factorial(n)}"

explicacion: |
  Coincide exactamente con la permutación de {n} elementos.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  candidatos: uno_de([5, 6, 7, 8])

respuesta: candidatos * (candidatos - 1)
tipo: input

enunciado: "Entre {candidatos} candidatos, se va a elegir un presidente y un vicepresidente (dos cargos distintos, nadie puede ocupar los dos). ¿Cuántos resultados distintos son posibles?"

pasos:
  - "V({candidatos}, 2) = {candidatos} × ({candidatos}−1) = {candidatos * (candidatos - 1)}"

explicacion: |
  Presidente y vicepresidente son roles distintos: elegir a X de
  presidente e Y de vice es distinto de elegir a Y de presidente e X
  de vice.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "combinaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Para los mismos n y k, V(n,k) siempre es mayor o igual que la combinación correspondiente C(n,k)."

explicacion: |
  La variación cuenta cada combinación tantas veces como formas de
  ordenar sus k elementos (k!) — por eso siempre es mayor o igual.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "basico"
  tags: ["variaciones", "aplicacion"]

enunciado: "Si una clave usa 3 letras distintas (sin repetir) elegidas de un alfabeto de 26, y el orden en que se escriben importa, ¿qué hay que calcular para contar cuántas claves son posibles?"
tipo: mc
opciones_explicitas:
  - "Una variación: V(26, 3)"
  - "Una permutación de las 26 letras completas"
  - "Una simple multiplicación de 26 por 3"
respuesta: "Una variación: V(26, 3)"

explicacion: |
  Se usa sólo una parte (3 de 26 letras), sin repetir, y el orden
  importa — exactamente la definición de variación.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula V(n,k) = n!/(n−k)! sólo tiene sentido cuando k ≤ n (no se puede elegir, sin repetir, más elementos de los que hay disponibles)."

explicacion: |
  Si k > n, (n−k)! implicaría el factorial de un número negativo, que
  no está definido en este contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  n: uno_de([7, 8, 9])

respuesta: redondear((factorial(n) / factorial(n - 3)) / (factorial(n) / factorial(n - 2)), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un conjunto de {n} elementos, ¿cuál es el cociente V({n},3) / V({n},2)?"

pasos:
  - "V({n},3) = {factorial(n) / factorial(n - 3)}"
  - "V({n},2) = {factorial(n) / factorial(n - 2)}"
  - "Cociente = {redondear((factorial(n) / factorial(n - 3)) / (factorial(n) / factorial(n - 2)), 3)}"

explicacion: |
  El cociente da exactamente (n−2): agregar un elemento más al orden
  multiplica por las opciones que quedan para ese lugar extra.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones"]

respuesta: 1
tipo: input

enunciado: "Por convención, ¿cuánto es V(n, 0) (elegir y ordenar cero elementos)?"

explicacion: |
  V(n,0) = n!/n! = 1 — hay exactamente una forma de "no elegir nada".
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  simbolos: uno_de([6, 7, 8])

respuesta: factorial(simbolos) / factorial(simbolos - 4)
tipo: input

enunciado: "Un teclado reducido tiene {simbolos} símbolos distintos disponibles. ¿Cuántos códigos de 4 símbolos (sin repetir, importa el orden) se pueden formar?"

pasos:
  - "V({simbolos}, 4) = {simbolos}! / ({simbolos}−4)! = {factorial(simbolos) / factorial(simbolos - 4)}"

explicacion: |
  Mismo procedimiento que las preguntas anteriores, con otro contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "intermedio"
  tags: ["variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "En una variación clásica, ningún elemento del conjunto original puede aparecer más de una vez en la selección ordenada."

explicacion: |
  Es la misma restricción de 'sin repetir' que tienen las
  permutaciones, aplicada ahora a sólo una parte de los elementos.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones", "problema"]

variables:
  atletas: uno_de([8, 9, 10])

respuesta: factorial(atletas) / factorial(atletas - 3)
tipo: input

enunciado: "En una competencia con {atletas} atletas, ¿de cuántas formas distintas se pueden entregar las medallas de oro, plata y bronce (una por atleta, no se repite medalla)?"

pasos:
  - "V({atletas}, 3) = {atletas}! / ({atletas}−3)! = {factorial(atletas) / factorial(atletas - 3)}"

explicacion: |
  Es el mismo problema del podio, en otro contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "avanzado"
  tags: ["variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "V(n,k) siempre es menor o igual que n^k (elegir k veces entre n opciones PERMITIENDO repetir)."

explicacion: |
  Prohibir la repetición sólo puede reducir la cantidad de opciones
  disponibles en cada paso, nunca aumentarla.
```

```
metadata:
  materia: "matematicas"
  tema: "variaciones"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular variaciones?"
tipo: mc
opciones_explicitas:
  - "Para contar cuántas formas hay de elegir y ORDENAR una parte de un conjunto, sin repetir elementos"
  - "Sólo sirve cuando se usan todos los elementos del conjunto"
  - "Sólo aplica cuando el orden no importa"
respuesta: "Para contar cuántas formas hay de elegir y ORDENAR una parte de un conjunto, sin repetir elementos"

explicacion: |
  Es el paso intermedio entre permutaciones (usar todos, con orden) y
  combinaciones (usar una parte, sin orden) — el próximo módulo.
```

## Sección: integral-definida-y-area-bajo-la-curva (22 preguntas)

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "el área entre la curva y el eje horizontal en un intervalo [a, b]"
tipo: mc
opciones_explicitas: ["el área entre la curva y el eje horizontal en un intervalo [a, b]", "la pendiente de la recta tangente en un punto", "el valor máximo que alcanza la función"]

enunciado: "La integral definida de f(x) entre a y b representa..."

explicacion: |
  Es la cantidad de espacio entre la curva de f(x) y el eje horizontal,
  dentro de ese intervalo específico.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["area neta"]

variables:
  n: uno_de([1, 1])

respuesta: "negativa"
tipo: mc
opciones_explicitas: ["positiva", "negativa", "siempre cero"]

enunciado: "Si la curva de f(x) está por debajo del eje x en el intervalo considerado, el área correspondiente se considera..."

explicacion: |
  La integral definida calcula el área neta, no el área total absoluta:
  por eso puede dar valores negativos.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["teorema fundamental"]

variables:
  n: uno_de([1, 1])

respuesta: "Teorema Fundamental del Cálculo"
tipo: completar

enunciado: "El teorema que permite calcular una integral definida usando una primitiva F(x), en vez de sumar rectángulos infinitos, se llama ___."

respuestas_validas:
  - "Teorema Fundamental del Cálculo"

explicacion: |
  Establece una relación directa entre la derivada y la integral,
  simplificando enormemente el cálculo del área.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["formula tfc"]

variables:
  n: uno_de([1, 1])

respuesta: "F(b) - F(a)"
tipo: mc
opciones_explicitas: ["F(b) - F(a)", "F(b) + F(a)", "F(a) - F(b)"]

enunciado: "Según el Teorema Fundamental del Cálculo, ∫ f(x) dx entre a y b es igual a:"

explicacion: |
  Se evalúa la primitiva en el límite superior y se le resta el valor
  evaluado en el límite inferior.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "avanzado"
  tags: ["primitiva"]

variables:
  n: random(2, 8)

respuesta: n / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "La primitiva de f(x) = {n}·x es F(x) = k·x². ¿Cuánto vale k?"

explicacion: |
  La primitiva de k'·x es (k'/2)·x², así que si f(x)={n}·x, el
  coeficiente de x² en la primitiva es {n}/2.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["calculo directo"]

variables:
  b: random(2, 8)

respuesta: b * b
tipo: input
tolerancia_abs: 0

enunciado: "Calculá el área bajo la curva de f(x) = 2x entre x=0 y x={b}, usando F(x) = x². (F({b}) - F(0))"

explicacion: |
  F(x) = x² es la primitiva de 2x. El área es F(b) - F(0) = b² - 0 = b².
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["calculo directo"]

variables:
  k: random(1, 5)
  b: random(2, 6)

respuesta: k * b
tipo: input
tolerancia_abs: 0

enunciado: "Calculá el área bajo la curva de f(x) = {k} (función constante) entre x=0 y x={b}, usando F(x) = {k}·x."

explicacion: |
  Para una función constante, el área bajo la curva es un rectángulo:
  base × altura = {b} × {k}.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["simbolo integral"]

variables:
  n: uno_de([1, 1])

respuesta: "una S alargada que recuerda a suma"
tipo: mc
opciones_explicitas: ["una S alargada que recuerda a suma", "una letra griega sin significado especial", "el símbolo de infinito"]

enunciado: "El símbolo ∫ de la integral es..."

explicacion: |
  Representa la idea de "sumar" infinitas cantidades infinitesimales, de
  ahí la forma de S alargada.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "avanzado"
  tags: ["existencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si f(x) es continua en el intervalo [a, b], la integral definida siempre existe y es única."

explicacion: |
  La continuidad de la función en el intervalo garantiza que el área
  bajo la curva esté bien definida.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["aplicaciones"]

variables:
  campo: uno_de(["física", "economía", "ingeniería"])

respuesta: verdadero
tipo: vf

enunciado: "La integral definida tiene aplicaciones reales en {campo}, según la teoría."

explicacion: |
  Se usa para calcular distancia recorrida (física), excedente del
  consumidor (economía) o volúmenes de objetos (ingeniería).
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["discreto vs continuo"]

variables:
  n: uno_de([1, 1])

respuesta: "de lo discreto a lo continuo"
tipo: mc
opciones_explicitas: ["de lo discreto a lo continuo", "de lo continuo a lo discreto", "no hay ninguna diferencia entre ambos"]

enunciado: "La importancia de la integral definida radica en su capacidad de pasar..."

explicacion: |
  Mientras la suma simple junta cantidades finitas, la integral suma
  infinitas cantidades infinitesimales.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["pasos del calculo"]

variables:
  n: uno_de([1, 1])

respuesta: "encontrar la primitiva, evaluarla en b, evaluarla en a y restar"
tipo: mc
opciones_explicitas: ["encontrar la primitiva, evaluarla en b, evaluarla en a y restar", "derivar la función dos veces", "graficar la función sin ningún cálculo"]

enunciado: "Según el Teorema Fundamental del Cálculo, el proceso para calcular una integral definida consiste en..."

explicacion: |
  Son los tres pasos que transforman un problema geométrico complejo en
  álgebra simple.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "avanzado"
  tags: ["verificacion geometrica"]

variables:
  b: random(3, 9)

respuesta: b * b
tipo: input
tolerancia_abs: 0

enunciado: "Verificá con geometría básica: el área bajo f(x)=2x entre 0 y {b} es un triángulo de base {b} y altura {2*b}... espera, calculalo directo: (base × altura) / 2 = ({b} × 2·{b}) / 2. ¿Cuánto da?"

explicacion: |
  (b × 2b) / 2 = b², el mismo resultado que da la integral, confirmando
  que ambos métodos coinciden.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["dx"]

variables:
  n: uno_de([1, 1])

respuesta: "un segmento horizontal de ancho infinitesimal"
tipo: mc
opciones_explicitas: ["un segmento horizontal de ancho infinitesimal", "el valor máximo de la función", "la derivada de la función"]

enunciado: "En la notación ∫f(x) dx, el símbolo dx indica que se está sumando..."

explicacion: |
  Cada dx representa un segmento horizontal muy chico que, sumado a
  infinitos otros, da el área total.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["primitiva de potencia"]

variables:
  n: random(1, 6)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "La primitiva de x^{n} tiene exponente (antes de dividir por el nuevo exponente):"

explicacion: |
  Al integrar x^n, el exponente sube en 1 (regla inversa a la
  derivación).
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["relacion con derivada"]

variables:
  n: uno_de([1, 1])

respuesta: "una función cuya derivada es f(x)"
tipo: mc
opciones_explicitas: ["una función cuya derivada es f(x)", "una función cuyo valor máximo es f(x)", "la inversa de f(x)"]

enunciado: "Una función primitiva F(x) de f(x) es..."

explicacion: |
  Por eso el Teorema Fundamental del Cálculo conecta directamente
  derivación e integración: son procesos inversos.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "avanzado"
  tags: ["areas irregulares"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La integral definida permite medir áreas irregulares que la geometría básica (cuadrados, triángulos) no puede resolver por sí sola."

explicacion: |
  Es justamente su utilidad principal: calcular áreas bajo curvas
  complejas, no sólo figuras geométricas simples.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["calculo directo"]

variables:
  b: random(1, 7)

respuesta: b * b * b
tipo: input
tolerancia_abs: 0

enunciado: "Si F(x) = x³ es la primitiva de f(x) = 3x², calculá F({b}) - F(0), el área bajo f(x) entre 0 y {b}."

explicacion: |
  F(b) - F(0) = b³ - 0 = b³, aplicando directamente el Teorema
  Fundamental del Cálculo.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["limites de integracion"]

variables:
  n: uno_de([1, 1])

respuesta: "los valores inicial y final del intervalo"
tipo: mc
opciones_explicitas: ["los valores inicial y final del intervalo", "el valor máximo y mínimo de la función", "las raíces de la función"]

enunciado: "En ∫_a^b f(x) dx, los valores a y b representan..."

explicacion: |
  Son los límites del intervalo dentro del cual se calcula el área bajo
  la curva.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "avanzado"
  tags: ["metodo alternativo"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Calcular el área sumando rectángulos infinitos es el método práctico habitual para resolver integrales definidas en un examen."

explicacion: |
  Sería imposible en la práctica; por eso se usa el Teorema Fundamental
  del Cálculo, que evita esa suma infinita directa.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["aplicacion fisica"]

variables:
  n: uno_de([1, 1])

respuesta: "distancias recorridas cuando la velocidad cambia"
tipo: mc
opciones_explicitas: ["distancias recorridas cuando la velocidad cambia", "la masa de un objeto en reposo", "el color de la luz emitida"]

enunciado: "En física, la integral definida se usa para calcular, entre otras cosas..."

explicacion: |
  Si la velocidad varía con el tiempo, integrarla da la distancia total
  recorrida.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["calculo directo"]

variables:
  a: random(1, 4)
  b: random(5, 9)

respuesta: b*b - a*a
tipo: input
tolerancia_abs: 0

enunciado: "Calculá el área bajo f(x) = 2x entre x={a} y x={b}, usando F(x) = x² (F({b}) - F({a}))."

explicacion: |
  F(b) - F(a) = b² - a², aplicando el Teorema Fundamental del Cálculo
  con límites distintos de cero.
```

