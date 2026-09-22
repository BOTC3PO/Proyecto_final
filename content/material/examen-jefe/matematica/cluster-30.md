# Examen jefe — [PENDIENTE #630]

> Logro #630. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **104 preguntas totales** en 5/5 secciones.

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

## Sección: variable-aleatoria-discreta-continua (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["variable_aleatoria", "vocabulario"]

enunciado: "¿Qué es una variable aleatoria?"
tipo: mc
opciones_explicitas:
  - "Un número que depende del resultado de un experimento azaroso, cuyo valor no se conoce de antemano pero cuyas probabilidades sí se pueden describir"
  - "Un valor que siempre es el mismo, sin importar el experimento"
  - "Otro nombre para la media de un conjunto de datos"
respuesta: "Un número que depende del resultado de un experimento azaroso, cuyo valor no se conoce de antemano pero cuyas probabilidades sí se pueden describir"

explicacion: |
  Antes del experimento no se sabe qué valor va a tomar, pero sí cómo
  se reparten las probabilidades entre los valores posibles.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["discreta", "vocabulario"]

enunciado: "¿Qué hace que una variable aleatoria sea DISCRETA?"
tipo: mc
opciones_explicitas:
  - "Que sus valores posibles se puedan enumerar (contar uno por uno: 0, 1, 2, 3...)"
  - "Que sólo pueda tomar el valor 0 o el valor 1"
  - "Que su valor esperado sea siempre un número entero"
respuesta: "Que sus valores posibles se puedan enumerar (contar uno por uno: 0, 1, 2, 3...)"

explicacion: |
  Como la cantidad de caras en varios tiros de moneda, o la cantidad
  de llamadas en una hora.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["continua", "vocabulario"]

enunciado: "¿Qué hace que una variable aleatoria sea CONTINUA?"
tipo: mc
opciones_explicitas:
  - "Que pueda tomar cualquier valor dentro de un intervalo, no sólo enteros contables"
  - "Que nunca pueda tomar valores negativos"
  - "Que siempre esté relacionada con el tiempo"
respuesta: "Que pueda tomar cualquier valor dentro de un intervalo, no sólo enteros contables"

explicacion: |
  Como la altura de una persona o el tiempo de espera de un colectivo
  — siempre hay un valor más preciso posible entre dos cualesquiera.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿La 'cantidad de hijos de una familia elegida al azar' es una variable discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Discreta: se puede enumerar (0, 1, 2, 3 hijos...), no hay valores intermedios posibles"
  - "Continua: puede tomar cualquier valor decimal"
respuesta: "Discreta: se puede enumerar (0, 1, 2, 3 hijos...), no hay valores intermedios posibles"

explicacion: |
  No existe "2,5 hijos" como resultado posible del conteo.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿La 'altura de una persona elegida al azar' es una variable discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Continua: puede tomar cualquier valor dentro de un rango (1,73 m, 1,734 m, 1,7341 m...)"
  - "Discreta: sólo puede valer números enteros de metros"
respuesta: "Continua: puede tomar cualquier valor dentro de un rango (1,73 m, 1,734 m, 1,7341 m...)"

explicacion: |
  Siempre existe una medición más precisa posible entre dos alturas
  cualesquiera.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿La 'cantidad de llamadas que recibe un call center en una hora' es una variable discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Discreta: se puede contar (0, 1, 2, 3 llamadas...)"
  - "Continua: puede tomar cualquier valor decimal"
respuesta: "Discreta: se puede contar (0, 1, 2, 3 llamadas...)"

explicacion: |
  Es el ejemplo clásico de `../distribucion-de-poisson/`.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿El 'tiempo de espera hasta que llega el próximo colectivo' es una variable discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Continua: puede tomar cualquier valor (3 minutos, 3,5 minutos, 3,52 minutos...)"
  - "Discreta: sólo puede valer una cantidad entera de minutos"
respuesta: "Continua: puede tomar cualquier valor (3 minutos, 3,5 minutos, 3,52 minutos...)"

explicacion: |
  Es el ejemplo clásico de `../distribucion-exponencial/`.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["discreta", "continua"]

respuesta: verdadero
tipo: vf

enunciado: "Los valores posibles de una variable discreta se pueden enumerar uno por uno (aunque sean infinitos), mientras que los de una variable continua no — siempre hay un valor intermedio más preciso entre dos cualesquiera."

explicacion: |
  Esa es la diferencia central entre ambos tipos.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["discreta"]

respuesta: verdadero
tipo: vf

enunciado: "Para una variable aleatoria discreta, tiene sentido preguntar directamente P(X = k) (la probabilidad de un valor exacto) y armar una tabla con la probabilidad de cada valor posible."

explicacion: |
  Es exactamente lo que hace `../distribucion-binomial/` con `P(X=k)`.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["continua"]

respuesta: verdadero
tipo: vf

enunciado: "Para una variable aleatoria continua, la probabilidad de que tome un valor EXACTO (por ejemplo, que una persona mida exactamente 1,730000... m) es esencialmente cero — hay que preguntar por intervalos en cambio."

explicacion: |
  Por eso con variables continuas se pregunta P(a ≤ X ≤ b), no
  P(X = un valor puntual).
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["continua", "completar"]

tipo: completar
enunciado: "Completá: para una variable continua, en vez de preguntar por un valor exacto, se pregunta por la probabilidad de que caiga dentro de un ___."
respuestas_validas:
  - "intervalo"
  - "rango"

explicacion: |
  Como "¿cuál es la probabilidad de que el colectivo tarde entre 5 y
  10 minutos?".
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["discreta", "problema"]

variables:
  p0: uno_de([0.2, 0.3, 0.25])
  p1: uno_de([0.4, 0.45, 0.5])

respuesta: redondear(1 - p0 - p1, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una variable aleatoria discreta X toma los valores 0, 1 y 2, con P(X=0)={p0} y P(X=1)={p1}. Como la suma de todas las probabilidades debe dar 1, ¿cuánto vale P(X=2)?"

pasos:
  - "P(X=2) = 1 − {p0} − {p1} = {redondear(1 - p0 - p1, 2)}"

explicacion: |
  Las probabilidades de todos los valores posibles de una variable
  discreta siempre suman exactamente 1.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["discreta"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de las probabilidades de TODOS los valores posibles de una variable aleatoria discreta siempre da exactamente 1."

explicacion: |
  Porque la variable necesariamente toma alguno de esos valores.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["discreta", "aplicacion"]

enunciado: "¿Cuál de estas distribuciones ya vistas describe una variable DISCRETA?"
tipo: mc
opciones_explicitas:
  - "La distribución binomial (P(X=k), cantidad de éxitos)"
  - "La distribución normal (campana de Gauss)"
respuesta: "La distribución binomial (P(X=k), cantidad de éxitos)"

explicacion: |
  La binomial cuenta un número entero de éxitos — siempre enumerable.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["continua", "aplicacion"]

enunciado: "¿Cuál de estas distribuciones ya vistas describe una variable CONTINUA?"
tipo: mc
opciones_explicitas:
  - "La distribución normal (campana de Gauss)"
  - "La distribución binomial (P(X=k), cantidad de éxitos)"
respuesta: "La distribución normal (campana de Gauss)"

explicacion: |
  La normal describe una magnitud que puede tomar cualquier valor
  real, no un conteo de éxitos.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["continua"]

enunciado: "Para el tiempo de espera de un colectivo (variable continua), ¿cuál de estas preguntas tiene sentido hacer?"
tipo: mc
opciones_explicitas:
  - "¿Cuál es la probabilidad de que tarde ENTRE 5 y 10 minutos?"
  - "¿Cuál es la probabilidad de que tarde EXACTAMENTE 7,000000... minutos?"
respuesta: "¿Cuál es la probabilidad de que tarde ENTRE 5 y 10 minutos?"

explicacion: |
  La segunda pregunta, para una variable continua, tiene probabilidad
  esencialmente cero.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar", "problema"]

enunciado: "La cantidad de autos que pasan por un peaje en una hora, ¿con qué tipo de distribución se modela: discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Discreta — es un conteo de eventos (autos) en un intervalo fijo de tiempo, el mismo tipo de caso que resuelve la distribución de Poisson"
  - "Continua — puede tomar cualquier valor decimal"
respuesta: "Discreta — es un conteo de eventos (autos) en un intervalo fijo de tiempo, el mismo tipo de caso que resuelve la distribución de Poisson"

explicacion: |
  Contar cuántos autos pasan es siempre un número entero.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "intermedio"
  tags: ["clasificar", "problema"]

enunciado: "El tiempo que pasa entre la llegada de un cliente y la del siguiente a un local, ¿con qué tipo de distribución se modela: discreta o continua?"
tipo: mc
opciones_explicitas:
  - "Continua — es una medición de tiempo que puede tomar cualquier valor, el mismo tipo de caso que resuelve la distribución exponencial"
  - "Discreta — sólo puede valer una cantidad entera de minutos"
respuesta: "Continua — es una medición de tiempo que puede tomar cualquier valor, el mismo tipo de caso que resuelve la distribución exponencial"

explicacion: |
  El tiempo entre eventos siempre se puede medir con más precisión.
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "avanzado"
  tags: ["aplicacion"]

enunciado: "¿Por qué conviene preguntarse primero 'discreta o continua' antes de elegir qué distribución usar para modelar un problema?"
tipo: mc
opciones_explicitas:
  - "Porque cada distribución (binomial, Poisson, normal, exponencial) sirve para un tipo específico de variable — usar una discreta para modelar algo continuo (o viceversa) directamente no tiene sentido matemático"
  - "No importa cuál se elija, todas las distribuciones dan el mismo resultado"
  - "Sólo importa para variables continuas, nunca para las discretas"
respuesta: "Porque cada distribución (binomial, Poisson, normal, exponencial) sirve para un tipo específico de variable — usar una discreta para modelar algo continuo (o viceversa) directamente no tiene sentido matemático"

explicacion: |
  Es el criterio que organiza las cuatro distribuciones de esta cadena
  en dos pares (discretas / continuas).
```

```
metadata:
  materia: "matematicas"
  tema: "variable_aleatoria_discreta_continua"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve distinguir entre variable aleatoria discreta y continua?"
tipo: mc
opciones_explicitas:
  - "Para saber qué herramienta matemática corresponde: tablas de P(X=k) y distribuciones como binomial/Poisson para lo discreto, curvas de densidad y distribuciones como normal/exponencial para lo continuo"
  - "Es sólo una diferencia de vocabulario, sin consecuencias prácticas"
  - "Sólo se usa para clasificar problemas de Física, no de estadística"
respuesta: "Para saber qué herramienta matemática corresponde: tablas de P(X=k) y distribuciones como binomial/Poisson para lo discreto, curvas de densidad y distribuciones como normal/exponencial para lo continuo"

explicacion: |
  Es el puente hacia `../distribucion-exponencial/` y
  `../distribucion-de-poisson/`, los dos módulos que siguen.
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

## Sección: distribucion-de-poisson (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["poisson", "vocabulario"]

enunciado: "¿Qué modela la distribución de Poisson?"
tipo: mc
opciones_explicitas:
  - "La cantidad de eventos que ocurren en un intervalo fijo de tiempo o espacio, cuando pasan al azar a una tasa promedio constante"
  - "El tiempo que pasa hasta que ocurre el próximo evento"
  - "El promedio de un conjunto de datos ya medidos"
respuesta: "La cantidad de eventos que ocurren en un intervalo fijo de tiempo o espacio, cuando pasan al azar a una tasa promedio constante"

explicacion: |
  Como la cantidad de llamadas que recibe un call center en una hora.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["poisson", "vocabulario"]

enunciado: "En la distribución de Poisson, ¿qué representa el parámetro λ?"
tipo: mc
opciones_explicitas:
  - "La cantidad promedio de eventos que ocurren en el intervalo"
  - "La probabilidad de que ocurra un único evento particular"
  - "La cantidad máxima de eventos que pueden ocurrir"
respuesta: "La cantidad promedio de eventos que ocurren en el intervalo"

explicacion: |
  Si en promedio hay 4 llamadas por hora, λ = 4.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "intermedio"
  tags: ["poisson"]

respuesta: verdadero
tipo: vf

enunciado: "En la distribución de Poisson, el valor esperado E(X) es directamente igual a λ, sin necesitar ningún cálculo extra."

explicacion: |
  A diferencia de otras distribuciones, acá λ ya ES el promedio.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "completar"]

tipo: completar
enunciado: "Completá la fórmula: P(X=k) = (λᵏ × e^(−λ)) / ___."
respuestas_validas:
  - "k!"
  - "k factorial"

explicacion: |
  El factorial de k, el mismo usado en combinatoria.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "problema"]

variables:
  lambda: uno_de([2, 3, 4])
  k: uno_de([0, 1, 2])

respuesta: redondear((lambda ^ k * e ^ (-lambda)) / factorial(k), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Un call center recibe en promedio λ = {lambda} llamadas por hora. ¿Cuál es la probabilidad de recibir exactamente {k} llamadas en una hora (P(X={k}))?"

pasos:
  - "P(X={k}) = ({lambda}^{k} × e^(−{lambda})) / {k}! = {redondear((lambda ^ k * e ^ (-lambda)) / factorial(k), 4)}"

explicacion: |
  Se aplica directo la fórmula de Poisson con λ = {lambda} y k = {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "intermedio"
  tags: ["poisson", "problema"]

variables:
  lambda: uno_de([1, 2, 3, 5])

respuesta: redondear(e ^ (-lambda), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una ruta tiene en promedio λ = {lambda} accidentes por semana. ¿Cuál es la probabilidad de que NO ocurra NINGÚN accidente en una semana (P(X=0))?"

pasos:
  - "P(X=0) = ({lambda}⁰ × e^(−{lambda})) / 0! = e^(−{lambda}) = {redondear(e ^ (-lambda), 4)}"

explicacion: |
  Con k=0, λᵏ=1 y 0!=1 — la fórmula se reduce a e^(−λ).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["poisson", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La distribución de Poisson es discreta, porque siempre cuenta una cantidad entera de eventos (0, 1, 2, 3...)."

explicacion: |
  A diferencia de la exponencial (continua), que mide tiempo.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson"]

enunciado: "¿Por qué la distribución de Poisson se conoce como 'ley de los sucesos raros'?"
tipo: mc
opciones_explicitas:
  - "Porque hay muchísimas oportunidades de que el evento ocurra, pero la probabilidad de que ocurra en cada oportunidad puntual es muy baja"
  - "Porque los eventos que modela nunca ocurren en la realidad"
  - "Porque sólo se puede usar una vez por cada experimento"
respuesta: "Porque hay muchísimas oportunidades de que el evento ocurra, pero la probabilidad de que ocurra en cada oportunidad puntual es muy baja"

explicacion: |
  Como la probabilidad de que suene el teléfono en un segundo
  cualquiera del día: minúscula, pero sumada da un promedio por hora.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "binomial"]

respuesta: verdadero
tipo: vf

enunciado: "La distribución de Poisson es el caso límite de la distribución binomial cuando la cantidad de intentos n es muy grande y la probabilidad de éxito p es muy chica, manteniendo n×p = λ constante."

explicacion: |
  Es la conexión matemática entre `../distribucion-binomial/` (n
  intentos discretos) y Poisson (conteo en un intervalo continuo de
  oportunidades).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "exponencial"]

enunciado: "¿Qué relación tiene la distribución de Poisson con la distribución exponencial?"
tipo: mc
opciones_explicitas:
  - "Son la versión discreta (cuántos eventos) y continua (cuánto tiempo entre ellos) de la misma situación real, con la misma tasa subyacente"
  - "No tienen ninguna relación real entre sí"
  - "La Poisson reemplaza siempre a la exponencial"
respuesta: "Son la versión discreta (cuántos eventos) y continua (cuánto tiempo entre ellos) de la misma situación real, con la misma tasa subyacente"

explicacion: |
  Poisson cuenta eventos en un intervalo; exponencial mide el tiempo
  entre esos mismos eventos.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["poisson", "aplicacion"]

enunciado: "Una fábrica de telas tiene en promedio 2 defectos por cada 100 metros producidos. ¿Qué distribución conviene usar para calcular la probabilidad de encontrar exactamente 3 defectos en un rollo de 100 metros?"
tipo: mc
opciones_explicitas:
  - "La distribución de Poisson, con λ = 2 defectos por cada 100 metros"
  - "La distribución exponencial, con λ = 1/2"
  - "La distribución normal, con media 2"
respuesta: "La distribución de Poisson, con λ = 2 defectos por cada 100 metros"

explicacion: |
  Es un conteo de eventos raros (defectos) en un intervalo fijo
  (100 metros de tela) — el caso central de Poisson.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "intermedio"
  tags: ["poisson", "clasificar"]

enunciado: "¿Cuál de estos dos escenarios se modela con Poisson, y no con la exponencial?"
tipo: mc
opciones_explicitas:
  - "La cantidad de mensajes de error que aparecen en un servidor durante una hora"
  - "El tiempo que pasa hasta el próximo mensaje de error"
respuesta: "La cantidad de mensajes de error que aparecen en un servidor durante una hora"

explicacion: |
  "Cantidad en un intervalo" es Poisson; "tiempo hasta que pase algo"
  es exponencial (`../distribucion-exponencial/`).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "problema"]

variables:
  lambda_bajo: 1
  lambda_alto: 5

respuesta: e ^ (-lambda_bajo) > e ^ (-lambda_alto)
tipo: vf

enunciado: "Comparando P(X=0) (ningún evento) entre un local con λ = {lambda_bajo} clientes por hora y otro con λ = {lambda_alto} clientes por hora, ¿el local con MENOS clientes promedio tiene MAYOR probabilidad de no recibir ninguno?"

explicacion: |
  Cuanto menor es λ, más probable es que no ocurra ningún evento —
  e^(−λ) crece a medida que λ baja.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "problema"]

variables:
  lambda: 3

respuesta: redondear((lambda ^ 3 * e ^ (-lambda)) / factorial(3), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Con λ = {lambda} eventos promedio por intervalo, ¿cuál es P(X=3)?"

pasos:
  - "P(X=3) = ({lambda}³ × e^(−{lambda})) / 3! = {redondear((lambda ^ 3 * e ^ (-lambda)) / factorial(3), 4)}"

explicacion: |
  P(X=k) es más alta cerca de k=λ (el valor esperado) y baja a medida
  que k se aleja de ese valor.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "intermedio"
  tags: ["poisson"]

respuesta: verdadero
tipo: vf

enunciado: "El parámetro λ de una Poisson puede ser un número decimal (por ejemplo, λ = 2,5 llamadas por hora), aunque los valores que puede tomar X sean siempre enteros (0, 1, 2, 3...)."

explicacion: |
  λ es un promedio, y un promedio puede perfectamente ser 2,5 aunque
  cada resultado individual sea un entero.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "problema"]

variables:
  lambda: uno_de([1, 2])

respuesta: redondear((lambda ^ 1 * e ^ (-lambda)) / factorial(1), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Una página de un libro tiene en promedio {lambda} errores de tipeo. ¿Cuál es la probabilidad de que una página elegida al azar tenga EXACTAMENTE 1 error?"

pasos:
  - "P(X=1) = ({lambda}¹ × e^(−{lambda})) / 1! = {redondear((lambda ^ 1 * e ^ (-lambda)) / factorial(1), 4)}"

explicacion: |
  Con k=1, la fórmula se reduce a λ × e^(−λ).
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson", "clasificar"]

enunciado: "Un analista quiere calcular 'la probabilidad de esperar más de 10 minutos hasta el próximo cliente'. ¿La distribución de Poisson es la herramienta correcta para esta pregunta?"
tipo: mc
opciones_explicitas:
  - "No: esa pregunta es sobre TIEMPO de espera, corresponde a la distribución exponencial, no a Poisson"
  - "Sí: cualquier pregunta sobre clientes se resuelve con Poisson"
respuesta: "No: esa pregunta es sobre TIEMPO de espera, corresponde a la distribución exponencial, no a Poisson"

explicacion: |
  Poisson responde "cuántos eventos", no "cuánto tiempo hasta el
  próximo" — esa es la pregunta que resuelve la exponencial.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "avanzado"
  tags: ["poisson"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de P(X=0) + P(X=1) + P(X=2) + ... (para todos los valores posibles de k, hasta infinito) da exactamente 1, igual que en cualquier variable aleatoria discreta."

explicacion: |
  Es la misma propiedad de toda distribución de probabilidad discreta,
  vista en `../variable-aleatoria-discreta-continua/`.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["poisson", "aplicacion"]

enunciado: "En genética, la cantidad de mutaciones espontáneas por generación en una población suele modelarse con Poisson. ¿Por qué es un buen candidato para esta distribución?"
tipo: mc
opciones_explicitas:
  - "Porque hay muchísimos genes donde podría ocurrir una mutación (muchas oportunidades), pero la probabilidad de que mute cada uno en particular es muy baja"
  - "Porque las mutaciones siempre ocurren en cantidades fijas y predecibles"
  - "Porque la Poisson sólo aplica a fenómenos biológicos"
respuesta: "Porque hay muchísimos genes donde podría ocurrir una mutación (muchas oportunidades), pero la probabilidad de que mute cada uno en particular es muy baja"

explicacion: |
  Es la misma lógica de "sucesos raros" aplicada a genética, en vez de
  a llamadas telefónicas o accidentes.
```

```
metadata:
  materia: "matematicas"
  tema: "distribucion_de_poisson"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la distribución de Poisson?"
tipo: mc
opciones_explicitas:
  - "Para calcular la probabilidad de que ocurran una cantidad exacta de eventos raros e independientes dentro de un intervalo fijo de tiempo o espacio"
  - "Para medir el tiempo que pasa hasta que ocurre un evento"
  - "Para calcular el promedio de un conjunto de datos ya medidos"
respuesta: "Para calcular la probabilidad de que ocurran una cantidad exacta de eventos raros e independientes dentro de un intervalo fijo de tiempo o espacio"

explicacion: |
  Cierra, junto con `../distribucion-exponencial/`, el par
  discreto/continuo que completa la clasificación de
  `../variable-aleatoria-discreta-continua/`.
```

