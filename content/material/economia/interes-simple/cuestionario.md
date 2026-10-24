# Economía — Interés simple (cuestionario, 24 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Fórmula: `I = C × r × t`,
> `M = C × (1 + r × t)`, con `r` en forma decimal y `t` en la misma
> unidad que la tasa.

---

### 1 — Qué es el interés

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "basico"
  tags: ["interes_simple", "vocabulario"]

enunciado: "¿Qué es el interés?"
tipo: mc
opciones_explicitas:
  - "El extra que se paga por usar plata prestada durante un tiempo"
  - "El nombre que se le da al capital inicial"
  - "Un impuesto que cobra el Estado sobre los préstamos"
respuesta: "El extra que se paga por usar plata prestada durante un tiempo"

explicacion: |
  El interés es el costo de usar la plata de otro (o la ganancia de
  prestar la propia) durante un período de tiempo.
```

### 2 — Qué representa el capital

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "basico"
  tags: ["interes_simple", "vocabulario"]

enunciado: "En la fórmula del interés simple, ¿qué es el capital (C)?"
tipo: mc
opciones_explicitas:
  - "La plata original prestada o invertida"
  - "El interés generado en un período"
  - "El tiempo que dura el préstamo"
respuesta: "La plata original prestada o invertida"

explicacion: |
  El capital es el punto de partida; el interés se calcula a partir de él.
```

### 3 — Calcular el interés generado

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "basico"
  tags: ["interes_simple", "calculo"]

variables:
  capital: random(10, 100) * 1000
  tasa: random(2, 20)
  tiempo: random(1, 5)

respuesta: capital * (tasa / 100) * tiempo
tipo: input
tolerancia_abs: 0

enunciado: "Un capital de ${capital} se presta a una tasa del {tasa}% anual durante {tiempo} años. ¿Cuánto interés genera?"

explicacion: |
  I = C × r × t, con la tasa en forma decimal: {capital} × {tasa/100} × {tiempo}.
```

### 4 — Calcular el monto final

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "basico"
  tags: ["interes_simple", "calculo"]

variables:
  capital: random(10, 100) * 1000
  tasa: random(2, 20)
  tiempo: random(1, 5)

respuesta: capital * (1 + tasa / 100 * tiempo)
tipo: input
tolerancia_abs: 0

enunciado: "Un capital de ${capital} se invierte a una tasa del {tasa}% anual durante {tiempo} años, a interés simple. ¿Cuál es el monto final?"

pasos:
  - "Interés: {capital} × {tasa/100} × {tiempo} = {capital * tasa/100 * tiempo}"
  - "Monto: {capital} + {capital * tasa/100 * tiempo}"

explicacion: |
  El monto final es el capital más el interés generado.
```

### 5 — Despejar la tasa

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "avanzado"
  tags: ["interes_simple", "calculo"]

variables:
  capital: random(10, 100) * 1000
  tiempo: random(1, 5)
  tasa: random(2, 20)
  interes: capital * (tasa / 100) * tiempo

respuesta: tasa
tipo: input
tolerancia_abs: 0.01

enunciado: "Un capital de ${capital} generó ${interes} de interés en {tiempo} años, a interés simple. ¿Qué tasa anual (%) se aplicó?"

pasos:
  - "r = I ÷ (C × t) = {interes} ÷ ({capital} × {tiempo})"

explicacion: |
  Se despeja r de I = C × r × t: r = I ÷ (C × t), y se multiplica por 100
  para expresarla como porcentaje.
```

### 6 — Despejar el capital

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "avanzado"
  tags: ["interes_simple", "calculo"]

variables:
  tasa: random(2, 20)
  tiempo: random(1, 5)
  capital: random(10, 100) * 1000
  interes: capital * (tasa / 100) * tiempo

respuesta: capital
tipo: input
tolerancia_abs: 0.01

enunciado: "A una tasa del {tasa}% anual durante {tiempo} años, un capital generó ${interes} de interés. ¿Cuál era ese capital?"

pasos:
  - "C = I ÷ (r × t) = {interes} ÷ ({tasa/100} × {tiempo})"

explicacion: |
  Se despeja C de I = C × r × t: C = I ÷ (r × t).
```

### 7 — Despejar el tiempo

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "avanzado"
  tags: ["interes_simple", "calculo"]

variables:
  capital: random(10, 100) * 1000
  tasa: random(2, 20)
  tiempo: random(1, 5)
  interes: capital * (tasa / 100) * tiempo

respuesta: tiempo
tipo: input
tolerancia_abs: 0.01

enunciado: "Un capital de ${capital} a una tasa del {tasa}% anual generó ${interes} de interés. ¿Cuántos años estuvo prestado, a interés simple?"

pasos:
  - "t = I ÷ (C × r) = {interes} ÷ ({capital} × {tasa/100})"

explicacion: |
  Se despeja t de I = C × r × t: t = I ÷ (C × r).
```

### 8 — El interés simple se calcula sobre el capital original

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "basico"
  tags: ["interes_simple", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el interés simple, el interés de cada período se calcula siempre sobre el mismo capital inicial, no sobre el capital más los intereses ya generados."

explicacion: |
  Esa es justamente la diferencia con el interés compuesto, que sí
  reinvierte el interés generado.
```

### 9 — Crecimiento lineal

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "basico"
  tags: ["interes_simple", "vocabulario"]

enunciado: "El interés simple crece de manera..."
tipo: mc
opciones_explicitas:
  - "Lineal (la misma cantidad de interés en cada período)"
  - "Exponencial (cada vez más interés por período)"
  - "Logarítmica (cada vez menos interés por período)"
respuesta: "Lineal (la misma cantidad de interés en cada período)"

explicacion: |
  Como siempre se calcula sobre el mismo capital, cada período agrega
  exactamente la misma cantidad de interés.
```

### 10 — La tasa se usa en forma decimal

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "basico"
  tags: ["interes_simple", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Antes de aplicar la fórmula del interés simple, una tasa del 8% se usa como 0,08, no como 8."

explicacion: |
  Usar el 8 directo (sin dividir por 100) multiplicaría el interés por
  100 de más.
```

### 11 — Coherencia de unidades entre tasa y tiempo

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "intermedio"
  tags: ["interes_simple", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si la tasa de interés es anual, el tiempo debe expresarse en años (o convertirse a años) antes de aplicar la fórmula."

explicacion: |
  Mezclar una tasa anual con un tiempo en meses sin convertir es el
  error más común al calcular interés simple.
```

### 12 — Problema con el tiempo en meses

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "avanzado"
  tags: ["interes_simple", "problema"]

variables:
  capital: random(10, 100) * 1000
  tasa: random(4, 24)
  meses: random(3, 36)

respuesta: capital * (tasa / 100) * (meses / 12)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un capital de ${capital} se presta a una tasa del {tasa}% anual durante {meses} meses. ¿Cuánto interés genera, a interés simple?"

pasos:
  - "Primero se convierten los meses a años: {meses} ÷ 12 = {meses/12}"
  - "I = {capital} × {tasa/100} × {meses/12}"

explicacion: |
  Como la tasa es anual, el tiempo en meses se convierte a años (se
  divide por 12) antes de multiplicar.
```

### 13 — Mayor tasa, mismo capital y tiempo

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "intermedio"
  tags: ["interes_simple", "comparacion"]

variables:
  capital: random(10, 100) * 1000
  tiempo: random(1, 5)
  tasa_a: random(2, 15)
  tasa_b: random(16, 30)

respuesta: ((capital * (tasa_b / 100) * tiempo) > (capital * (tasa_a / 100) * tiempo))
tipo: vf

enunciado: "Con el mismo capital de ${capital} y el mismo plazo de {tiempo} años, ¿una tasa del {tasa_b}% anual genera más interés que una del {tasa_a}% anual?"

explicacion: |
  A mayor tasa, mayor interés, si el capital y el tiempo no cambian.
```

### 14 — Mayor capital, misma tasa y tiempo

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "intermedio"
  tags: ["interes_simple", "comparacion"]

variables:
  tasa: random(2, 20)
  tiempo: random(1, 5)
  capital_a: random(10, 50) * 1000
  capital_b: random(51, 100) * 1000

respuesta: ((capital_b * (tasa / 100) * tiempo) > (capital_a * (tasa / 100) * tiempo))
tipo: vf

enunciado: "A la misma tasa del {tasa}% anual y el mismo plazo de {tiempo} años, ¿un capital de ${capital_b} genera más interés que uno de ${capital_a}?"

explicacion: |
  A mayor capital, mayor interés, si la tasa y el tiempo no cambian.
```

### 15 — Mayor tiempo, mismo capital y tasa

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "intermedio"
  tags: ["interes_simple", "comparacion"]

variables:
  capital: random(10, 100) * 1000
  tasa: random(2, 20)
  tiempo_a: random(1, 3)
  tiempo_b: random(4, 8)

respuesta: ((capital * (tasa / 100) * tiempo_b) > (capital * (tasa / 100) * tiempo_a))
tipo: vf

enunciado: "Con el mismo capital de ${capital} y la misma tasa del {tasa}% anual, ¿dejarlo {tiempo_b} años genera más interés que dejarlo {tiempo_a} años?"

explicacion: |
  A mayor tiempo, mayor interés acumulado, si el capital y la tasa no
  cambian.
```

### 16 — Interés simple y compuesto dan igual en el primer período

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "intermedio"
  tags: ["interes_simple", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para un solo período (t = 1), el interés simple y el interés compuesto dan exactamente el mismo resultado."

explicacion: |
  La diferencia entre ambos aparece recién a partir del segundo período,
  cuando el compuesto empieza a generar interés sobre el interés previo.
```

### 17 — A partir del segundo período, el compuesto da más

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "intermedio"
  tags: ["interes_simple", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Para un plazo de varios períodos (t > 1), el interés compuesto siempre da un monto final igual o menor que el interés simple."

explicacion: |
  Es al revés: a partir del segundo período, el compuesto siempre da un
  monto mayor, porque reinvierte el interés generado.
```

### 18 — Completar el capital a partir del monto y el interés

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "intermedio"
  tags: ["interes_simple"]

variables:
  capital: random(10, 100) * 1000
  tasa: random(2, 20)
  tiempo: random(1, 5)
  interes: capital * (tasa / 100) * tiempo
  monto: capital + interes

tipo: completar
enunciado: "Un capital generó ${interes} de interés y quedó en un monto final de ${monto}. Completá: ___ (capital) = {monto} (monto) - {interes} (interés)."
respuestas_validas:
  - capital

explicacion: |
  El capital es lo que queda del monto final al restarle el interés
  generado.
```

### 19 — Ordenar capitales por interés generado

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "basico"
  tags: ["interes_simple", "orden"]

tipo: ordenar
enunciado: "A la misma tasa y el mismo plazo, ordená estos capitales de menor a mayor interés generado."
opciones_explicitas:
  - "$30.000"
  - "$10.000"
  - "$50.000"
  - "$20.000"
respuesta_orden: ["$10.000", "$20.000", "$30.000", "$50.000"]

explicacion: |
  A igual tasa y tiempo, el interés generado sigue el mismo orden que el
  capital: a mayor capital, mayor interés.
```

### 20 — Problema: préstamo informal entre amigos

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "intermedio"
  tags: ["interes_simple", "problema"]

variables:
  capital: random(5, 50) * 1000
  tasa_mensual: random(2, 8)
  meses: random(2, 6)

respuesta: capital * (1 + tasa_mensual / 100 * meses)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un amigo presta ${capital} a otro, con un {tasa_mensual}% de interés simple por mes, a devolver en {meses} meses. ¿Cuánto tiene que devolver en total?"

pasos:
  - "Interés: {capital} × {tasa_mensual/100} × {meses} = {capital * tasa_mensual/100 * meses}"
  - "Total: {capital} + {capital * tasa_mensual/100 * meses}"

explicacion: |
  El total a devolver es el capital prestado más el interés simple
  acumulado en los {meses} meses.
```

### 21 — Problema: plazo fijo con TNA y días

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "avanzado"
  tags: ["interes_simple", "problema"]

variables:
  capital: random(10, 100) * 1000
  tna: random(20, 60)
  dias: random(30, 180)

respuesta: capital * (tna / 100) * (dias / 365)
tipo: input
tolerancia_abs: 1

enunciado: "Un plazo fijo de ${capital} tiene una TNA (tasa nominal anual) del {tna}%, a {dias} días. Dentro de ese plazo el banco no capitaliza (interés simple proporcional a los días). ¿Cuánto interés genera?"

pasos:
  - "I = C × TNA ÷ 100 × días ÷ 365 = {capital} × {tna/100} × {dias}/365"

explicacion: |
  El plazo fijo tradicional aplica la TNA de forma proporcional a los
  días del plazo, sin interés sobre interés dentro de ese mismo período.
```

### 22 — Verificar un cálculo de interés simple (con error a veces)

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "intermedio"
  tags: ["interes_simple", "verificacion"]

variables:
  capital: random(10, 100) * 1000
  tasa: random(2, 20)
  tiempo: random(1, 5)
  correcto: capital * (tasa / 100) * tiempo
  error: uno_de([0, 0, 0, 500, -500])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? Capital ${capital}, tasa {tasa}% anual, {tiempo} años, interés generado: ${mostrado}."

explicacion: |
  Se vuelve a calcular I = C × r × t y se compara con el valor mostrado.
```

### 23 — El interés compuesto no se usa en este tema

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "basico"
  tags: ["interes_simple", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "En el interés simple, el interés generado en un período se suma al capital para calcular el interés del período siguiente."

explicacion: |
  Eso es lo que hace el interés COMPUESTO. En el interés simple, cada
  período usa siempre el capital original, nunca el capital más
  intereses previos.
```

### 24 — Qué es el interés simple (cierre)

```
metadata:
  materia: "economia"
  tema: "interes_simple"
  nivel: "basico"
  tags: ["interes_simple", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El interés simple se calcula con I = C × r × t: siempre sobre el capital original, con la tasa en forma decimal y el tiempo en la misma unidad que la tasa."

explicacion: |
  Es la idea central de todo el tema.
```
