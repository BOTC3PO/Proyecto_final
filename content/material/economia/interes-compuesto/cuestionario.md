# Economía — Interés compuesto (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Fórmula: `M = C × (1 + r)^t`,
> `I = M - C`, con `r` en forma decimal y `t` en la misma unidad que la
> tasa (cantidad de períodos de capitalización).

---

### 1 — Qué es el interés compuesto

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "basico"
  tags: ["interes_compuesto", "vocabulario"]

enunciado: "¿Qué diferencia al interés compuesto del interés simple?"
tipo: mc
opciones_explicitas:
  - "El interés generado se suma al capital, y el período siguiente genera interés sobre ese total"
  - "Se calcula con una tasa más alta"
  - "Sólo se usa en préstamos, nunca en inversiones"
respuesta: "El interés generado se suma al capital, y el período siguiente genera interés sobre ese total"

explicacion: |
  En el interés simple cada período usa siempre el capital original; en
  el compuesto, el capital "crece" período a período.
```

### 2 — El interés se suma al capital

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "basico"
  tags: ["interes_compuesto", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el interés compuesto, el interés generado en un período se suma al capital para calcular el interés del período siguiente."

explicacion: |
  Es exactamente la idea de "interés sobre interés".
```

### 3 — Crecimiento exponencial

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "basico"
  tags: ["interes_compuesto", "vocabulario"]

enunciado: "El interés compuesto crece de manera..."
tipo: mc
opciones_explicitas:
  - "Exponencial (cada período genera más interés que el anterior)"
  - "Lineal (la misma cantidad de interés en cada período)"
  - "Constante (el mismo monto final sin importar el tiempo)"
respuesta: "Exponencial (cada período genera más interés que el anterior)"

explicacion: |
  Como el capital sobre el que se calcula crece cada período, el interés
  generado también crece período a período.
```

### 4 — Calcular el monto final

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "intermedio"
  tags: ["interes_compuesto", "calculo"]

variables:
  capital: random(10, 100) * 1000
  tasa: random(2, 20)
  tiempo: random(1, 6)

respuesta: capital * (1 + tasa / 100) ^ tiempo
tipo: input
tolerancia_abs: 1

enunciado: "Un capital de ${capital} se invierte a una tasa del {tasa}% anual, a interés compuesto, durante {tiempo} años. ¿Cuál es el monto final?"

pasos:
  - "M = C × (1 + r)^t = {capital} × (1 + {tasa/100})^{tiempo}"

explicacion: |
  Se multiplica el capital por (1 + la tasa en decimal) elevado a la
  cantidad de períodos.
```

### 5 — Calcular el interés total generado

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "intermedio"
  tags: ["interes_compuesto", "calculo"]

variables:
  capital: random(10, 100) * 1000
  tasa: random(2, 20)
  tiempo: random(1, 6)

respuesta: capital * (1 + tasa / 100) ^ tiempo - capital
tipo: input
tolerancia_abs: 1

enunciado: "Un capital de ${capital} se invierte a una tasa del {tasa}% anual, a interés compuesto, durante {tiempo} años. ¿Cuánto interés total generó (sin contar el capital)?"

pasos:
  - "M = {capital} × (1 + {tasa/100})^{tiempo}"
  - "I = M - {capital}"

explicacion: |
  El interés total es la diferencia entre el monto final y el capital
  original.
```

### 6 — Despejar el capital

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "avanzado"
  tags: ["interes_compuesto", "calculo"]

variables:
  tasa: random(2, 20)
  tiempo: random(1, 6)
  capital: random(10, 100) * 1000
  monto: capital * (1 + tasa / 100) ^ tiempo

respuesta: capital
tipo: input
tolerancia_abs: 1

enunciado: "A una tasa del {tasa}% anual a interés compuesto, un capital creció hasta ${monto} en {tiempo} años. ¿Cuál era ese capital?"

pasos:
  - "C = M ÷ (1 + r)^t = {monto} ÷ (1 + {tasa/100})^{tiempo}"

explicacion: |
  Se despeja C de M = C × (1 + r)^t dividiendo el monto por (1 + r)^t.
```

### 7 — Igual resultado en un solo período

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "intermedio"
  tags: ["interes_compuesto", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para un solo período (t = 1), el interés simple y el interés compuesto dan exactamente el mismo monto final."

explicacion: |
  Recién a partir del segundo período el interés generado en el primero
  empieza a generar interés propio, y ahí aparece la diferencia.
```

### 8 — El compuesto supera al simple a partir de t > 1

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "intermedio"
  tags: ["interes_compuesto", "comparacion"]

variables:
  capital: random(10, 100) * 1000
  tasa: random(2, 20)
  tiempo: random(2, 6)

respuesta: ((capital * (1 + tasa / 100) ^ tiempo) > (capital * (1 + tasa / 100 * tiempo)))
tipo: vf

enunciado: "Con el mismo capital de ${capital}, la misma tasa del {tasa}% anual y el mismo plazo de {tiempo} años, ¿el monto final a interés compuesto es mayor que a interés simple?"

explicacion: |
  A partir de t > 1, el compuesto siempre da un monto mayor, porque
  reinvierte el interés generado en cada período.
```

### 9 — Mayor tiempo, mismo capital y tasa

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "intermedio"
  tags: ["interes_compuesto", "comparacion"]

variables:
  capital: random(10, 100) * 1000
  tasa: random(2, 20)
  tiempo_a: random(1, 3)
  tiempo_b: random(4, 8)

respuesta: ((capital * (1 + tasa / 100) ^ tiempo_b) > (capital * (1 + tasa / 100) ^ tiempo_a))
tipo: vf

enunciado: "Con el mismo capital de ${capital} y la misma tasa del {tasa}% anual, ¿dejarlo {tiempo_b} años a interés compuesto da un monto final mayor que dejarlo {tiempo_a} años?"

explicacion: |
  A más períodos capitalizando, mayor el monto final, con capital y tasa
  fijos.
```

### 10 — Mayor tasa, mismo capital y tiempo

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "intermedio"
  tags: ["interes_compuesto", "comparacion"]

variables:
  capital: random(10, 100) * 1000
  tiempo: random(2, 6)
  tasa_a: random(2, 10)
  tasa_b: random(11, 25)

respuesta: ((capital * (1 + tasa_b / 100) ^ tiempo) > (capital * (1 + tasa_a / 100) ^ tiempo))
tipo: vf

enunciado: "Con el mismo capital de ${capital} y el mismo plazo de {tiempo} años, ¿una tasa del {tasa_b}% anual da un monto final mayor que una del {tasa_a}% anual, a interés compuesto?"

explicacion: |
  A mayor tasa, mayor monto final, con capital y tiempo fijos.
```

### 11 — Por qué la tasa y el período tienen que coincidir

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "intermedio"
  tags: ["interes_compuesto", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si la tasa de interés compuesto es anual pero se quiere capitalizar mes a mes, hay que convertir la tasa anual a mensual antes de aplicar la fórmula."

explicacion: |
  El exponente `t` de la fórmula cuenta períodos de capitalización, así
  que la tasa `r` tiene que estar expresada en esa misma unidad de
  tiempo.
```

### 12 — Problema con capitalización mensual

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "avanzado"
  tags: ["interes_compuesto", "problema"]

variables:
  capital: random(10, 100) * 1000
  tasa_anual: random(6, 24)
  meses: random(3, 24)

respuesta: capital * (1 + tasa_anual / 100 / 12) ^ meses
tipo: input
tolerancia_abs: 1

enunciado: "Un capital de ${capital} capitaliza mes a mes a una tasa nominal del {tasa_anual}% anual, durante {meses} meses. ¿Cuál es el monto final?"

pasos:
  - "Tasa mensual: {tasa_anual}% ÷ 12 = {tasa_anual/100/12} (en decimal)"
  - "M = {capital} × (1 + {tasa_anual/100/12})^{meses}"

explicacion: |
  Se convierte la tasa anual a mensual dividiendo por 12, y se usan los
  meses como cantidad de períodos.
```

### 13 — Capitalizar más seguido da más monto, a igual tasa nominal

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "avanzado"
  tags: ["interes_compuesto", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Con la misma tasa nominal anual, capitalizar mes a mes da un monto final mayor que capitalizar una sola vez al año."

explicacion: |
  Cuantos más períodos de capitalización hay en el mismo año, antes
  empieza a generarse interés sobre interés — esa diferencia entre tasa
  nominal y tasa efectiva es el tema del próximo módulo.
```

### 14 — Deuda de tarjeta de crédito

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "basico"
  tags: ["interes_compuesto", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si el saldo de una tarjeta de crédito no se paga, los intereses de un período se suman al saldo y generan interés propio en el período siguiente — por eso una deuda chica sin pagar puede crecer rápido."

explicacion: |
  Es un ejemplo real de interés compuesto: el interés no pagado pasa a
  formar parte del capital sobre el que se calcula el siguiente interés.
```

### 15 — Completar el capital a partir del monto y el interés

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "intermedio"
  tags: ["interes_compuesto"]

variables:
  capital: random(10, 100) * 1000
  tasa: random(2, 20)
  tiempo: random(1, 6)
  monto: capital * (1 + tasa / 100) ^ tiempo
  interes: monto - capital

tipo: completar
enunciado: "Una inversión a interés compuesto generó ${interes} de interés y quedó en un monto final de ${monto}. Completá: ___ (capital) = {monto} (monto) - {interes} (interés)."
respuestas_validas:
  - capital

explicacion: |
  El capital es lo que queda del monto final al restarle el interés
  total generado.
```

### 16 — Ordenar montos finales según el tiempo invertido

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "basico"
  tags: ["interes_compuesto", "orden"]

tipo: ordenar
enunciado: "Con el mismo capital y la misma tasa, a interés compuesto, ordená estos plazos de menor a mayor monto final."
opciones_explicitas:
  - "5 años"
  - "1 año"
  - "10 años"
  - "3 años"
respuesta_orden: ["1 año", "3 años", "5 años", "10 años"]

explicacion: |
  A igual capital y tasa, a más años capitalizando, mayor el monto final.
```

### 17 — Verificar un cálculo de interés compuesto (con error a veces)

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "intermedio"
  tags: ["interes_compuesto", "verificacion"]

variables:
  capital: random(10, 100) * 1000
  tasa: random(2, 20)
  tiempo: random(1, 6)
  correcto: capital * (1 + tasa / 100) ^ tiempo
  error: uno_de([0, 0, 0, 1000, -1000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? Capital ${capital}, tasa {tasa}% anual a interés compuesto, {tiempo} años, monto final: ${mostrado}."

explicacion: |
  Se vuelve a calcular M = C × (1 + r)^t y se compara con el valor
  mostrado.
```

### 18 — Elegir la fórmula correcta

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "basico"
  tags: ["interes_compuesto"]

enunciado: "¿Cuál es la fórmula del monto final a interés compuesto?"
tipo: mc
opciones_explicitas:
  - "M = C × (1 + r)^t"
  - "M = C × (1 + r × t)"
  - "M = C + r × t"
respuesta: "M = C × (1 + r)^t"

explicacion: |
  La segunda opción es la fórmula del interés SIMPLE, no del compuesto —
  la diferencia clave es el exponente en vez de la multiplicación directa.
```

### 19 — Reinvertir un plazo fijo genera interés sobre interés

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "intermedio"
  tags: ["interes_compuesto", "problema"]

variables:
  capital: random(10, 60) * 1000
  tasa: random(3, 15)

respuesta: (capital * (1 + tasa / 100)) * (1 + tasa / 100)
tipo: input
tolerancia_abs: 1

enunciado: "Un capital de ${capital} se pone a plazo fijo un año a una tasa del {tasa}% anual. Al vencimiento, se retira todo (capital + interés) y se vuelve a poner un año más, a la misma tasa. ¿Cuánto queda al final del segundo año?"

pasos:
  - "Fin del año 1: {capital} × (1 + {tasa/100}) = {capital * (1 + tasa/100)}"
  - "Fin del año 2: {capital * (1 + tasa/100)} × (1 + {tasa/100})"

explicacion: |
  Reinvertir capital + interés hace que el segundo año genere interés
  también sobre el interés del primero — es interés compuesto, aunque
  cada plazo fijo individual se haya calculado con interés simple.
```

### 20 — Ese resultado es el mismo que aplicar la fórmula compuesta

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "avanzado"
  tags: ["interes_compuesto", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Reinvertir capital + interés en un segundo plazo fijo de un año, a la misma tasa, da el mismo resultado que aplicar directamente M = C × (1 + r)^2."

explicacion: |
  Multiplicar dos veces por (1 + r) es exactamente lo mismo que elevar
  (1 + r) al cuadrado.
```

### 21 — El interés compuesto no ignora el capital original

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "basico"
  tags: ["interes_compuesto", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "En el interés compuesto, el capital original deja de tener importancia después del primer período, porque todo el cálculo pasa a depender sólo del interés acumulado."

explicacion: |
  El capital original sigue siendo la base de todo el cálculo: el monto
  final siempre es C × (1 + r)^t, con el capital multiplicando todo el
  resultado.
```

### 22 — Qué es el interés compuesto (cierre)

```
metadata:
  materia: "economia"
  tema: "interes_compuesto"
  nivel: "basico"
  tags: ["interes_compuesto", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El interés compuesto se calcula con M = C × (1 + r)^t: el interés de cada período se suma al capital, y el período siguiente genera interés sobre ese nuevo total, por eso el crecimiento es exponencial."

explicacion: |
  Es la idea central de todo el tema.
```
