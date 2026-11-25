# Matemática — Riesgo relativo vs. absoluto en una noticia de salud (cuestionario, 26 preguntas VBLang)

> Tema: `S1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es el riesgo absoluto

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

### 2 — Qué es el riesgo relativo

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

### 3 — Problema: calcular el riesgo relativo

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

### 4 — Problema: calcular la diferencia de riesgo absoluta

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

### 5 — RR alto puede esconder una diferencia absoluta chica

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

### 6 — Problema: riesgo base extremadamente bajo

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

### 7 — Aplicación real: titular sensacionalista

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

### 8 — Problema: calcular el riesgo relativo real de un titular

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

### 9 — Por qué el riesgo relativo solo no alcanza

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

### 10 — Mismo RR, distinta relevancia práctica

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

### 11 — Problema: comparar dos escenarios con el mismo RR

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

### 12 — Qué preguntar frente a un titular de salud

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

### 13 — Relación con probabilidad condicional y Bayes

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

### 14 — Problema: riesgo relativo menor a 1 (factor protector)

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

### 15 — RR=1 significa que no hay diferencia

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

### 16 — Aplicación: NNT (número necesario a tratar)

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

### 17 — Problema: calcular el NNT aproximado

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

### 18 — El riesgo relativo no dice si vale la pena preocuparse

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

### 19 — Problema: comparar dos tratamientos por su NNT

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

### 20 — Cierre: para qué sirve distinguir riesgo relativo de absoluto

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

### 21 — Riesgo absoluto

```
metadata:
  materia: "matematica"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "basico"
  tags: ["calculo", "riesgo_absoluto"]

variables:
  N: uno_de([1000, 2000, 5000, 10000])
  k: random(5, 200)

respuesta: k / N * 100
tipo: input
unidad: "%"
tolerancia: 1%

enunciado: "De {N} personas, {k} tuvieron cierta enfermedad en un año. ¿Cuál es el riesgo absoluto, en %? (podés redondear a dos decimales)"

pasos:
  - "riesgo = casos / total"
  - "{k} / {N} = {k / N} → {k / N * 100 | 2} %"

explicacion: |
  El riesgo absoluto es la probabilidad del evento en ese grupo.
```

### 22 — Riesgo relativo

```
metadata:
  materia: "matematica"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "basico"
  tags: ["calculo", "riesgo_relativo"]

variables:
  pn: uno_de([1, 2, 4, 5])
  rr: uno_de([1.5, 2, 3, 4])

respuesta: rr
tipo: input
unidad: ""
tolerancia: 1%

enunciado: "En el grupo expuesto, el {pn * rr} % tuvo el problema; en el no expuesto, el {pn} %. ¿Cuál es el riesgo relativo?"

pasos:
  - "RR = riesgo expuesto / riesgo no expuesto"
  - "RR = {pn * rr} / {pn} = {rr}"

explicacion: |
  RR = 2 significa el doble de riesgo; RR = 1, ninguna diferencia.
```

### 23 — Diferencia de riesgo absoluta

```
metadata:
  materia: "matematica"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "intermedio"
  tags: ["calculo", "diferencia_absoluta"]

variables:
  pn: uno_de([0.1, 0.5, 1, 5, 10])
  rr: uno_de([2, 3])

respuesta: pn * rr - pn
tipo: input
unidad: "puntos %"
tolerancia: 1%

enunciado: "Un hábito multiplica por {rr} el riesgo de una enfermedad. Sin el hábito, el riesgo es del {pn} %. ¿Cuántos puntos porcentuales aumenta el riesgo absoluto?"

pasos:
  - "Con el hábito: {pn} × {rr} = {pn * rr} %"
  - "Aumento: {pn * rr} − {pn} = {pn * rr - pn} puntos"

explicacion: |
  El mismo «multiplica por tanto» es mucho o poco según el riesgo de partida.
```

### 24 — Número necesario a tratar

```
metadata:
  materia: "matematica"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "avanzado"
  tags: ["calculo", "nnt"]

variables:
  d: uno_de([0.5, 1, 2, 4, 5, 10])

respuesta: 100 / d
tipo: input
unidad: "personas"
tolerancia: 1%

enunciado: "Un tratamiento baja el riesgo absoluto de un problema en {d} puntos porcentuales. ¿A cuántas personas hay que tratar, en promedio, para evitar un caso? (NNT = 100 / diferencia en puntos)"

pasos:
  - "NNT = 1 / diferencia absoluta = 100 / {d}"
  - "NNT = {100 / d}"

explicacion: |
  El NNT traduce un porcentaje abstracto a algo concreto: cuántas personas tratar para que una se beneficie.
```

### 25 — El titular del diario

```
metadata:
  materia: "matematica"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "intermedio"
  tags: ["calculo", "cotidiano"]

variables:
  base: uno_de([1, 2, 5, 10])
  rrs: [2, 3]
  verbos: ["duplica", "triplica"]
  i: random(0, 1)
  rr: rrs[i]

respuesta: base * rr - base
tipo: input
unidad: "casos"
tolerancia_abs: 0

enunciado: "Un titular dice: «comer X {verbos[i]} el riesgo». En la población, la enfermedad afecta a {base} de cada 100 000 personas. ¿Cuántos casos más por cada 100 000 habría si todos comieran X?"

pasos:
  - "Con X: {base} × {rr} = {base * rr} por cada 100 000"
  - "Casos extra: {base * rr} − {base} = {base * rr - base}"

explicacion: |
  «Duplica el riesgo» suena grave, pero si el riesgo base es muy bajo la cantidad real de casos extra es mínima.
```

### 26 — ¿Cambia mucho el riesgo?

```
metadata:
  materia: "matematica"
  tema: "riesgo_relativo_vs_absoluto"
  nivel: "intermedio"
  tags: ["interpretacion", "verdadero_falso"]

variables:
  pn: uno_de([0.001, 0.01, 5, 10, 20])

respuesta: pn * 2 - pn >= 1
tipo: vf

enunciado: "Un factor duplica el riesgo (RR = 2) de un evento cuya probabilidad sin el factor es {pn} %. ¿El riesgo absoluto aumenta al menos 1 punto porcentual?"

pasos:
  - "Con el factor: {pn} × 2 = {pn * 2} %; aumento: {pn * 2 - pn} puntos"

explicacion: |
  Con un riesgo base muy chico, duplicarlo cambia muy poco en términos absolutos.
```
