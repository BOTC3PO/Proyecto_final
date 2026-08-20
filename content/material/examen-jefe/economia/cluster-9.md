# Examen jefe — Maestro de Intereses y Previsión

> Logro #195. Calculaste intereses, IVA y jubilaciones como un crack. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **118 preguntas totales** en 5/5 secciones.

---

## Sección: interes-compuesto (22 preguntas)

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

## Sección: interes-compuesto-funcion (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  c0: random(2, 20)
  t: random(1, 4)
  C: c0 * (2 ^ t)

respuesta: c0 * (3 ^ t)
tipo: input
tolerancia_abs: 0

enunciado: "M(t) = {C}×(1.5)^t (capital {C}, tasa 50% por período). ¿Cuánto vale M({t})?"

pasos:
  - "M({t}) = {C}×1.5^{t} = {c0 * (3 ^ t)}"

explicacion: |
  Se evalúa la función exponencial en t={t}.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  c0: random(2, 15)
  t: random(1, 4)
  C: c0 * (2 ^ t)

respuesta: c0 * (3 ^ t)
tipo: input
tolerancia_abs: 0

enunciado: "M(t) = {C}×(1.5)^t. ¿Cuánto vale M({t})?"

explicacion: |
  M({t}) = {C}×1.5^{t} = {c0 * (3 ^ t)}.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "basico"
  tags: ["dominio"]

variables:
  C: random(1000, 50000)

respuesta: C
tipo: input
tolerancia_abs: 0

enunciado: "M(t) = {C}×(1+r)^t. ¿Cuánto vale M(0)?"

explicacion: |
  Cualquier base elevada a 0 da 1: M(0) = {C}×1 = {C}, el capital
  inicial.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "basico"
  tags: ["concepto"]

variables:
  r_por_mil: random(20, 200)

respuesta: 1000 + r_por_mil
tipo: input
tolerancia_abs: 0

enunciado: "Con una tasa r={r_por_mil}/1000 por período, ¿cuánto vale (1+r) multiplicado por 1000 (para trabajar sin decimales)?"

explicacion: |
  (1+r)×1000 = 1000+{r_por_mil} = {1000 + r_por_mil} — la base de la
  función exponencial, escalada por 1000 para evitar decimales.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["comparacion", "verdadero_falso"]

variables:
  C: random(1000, 50000)
  r_pct: random(5, 30)

respuesta: verdadero
tipo: vf

enunciado: "C={C}, r={r_pct}%. ¿Dan el mismo monto el interés simple y el compuesto, para t=1 período?"

explicacion: |
  Para un solo período, todavía no hubo oportunidad de que el interés
  generado gane su propio interés — coinciden exactamente.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["comparacion", "verdadero_falso"]

variables:
  C: 10000
  r_pct: random(5, 30)

respuesta: (((100 + r_pct) ^ 2) > (100 * (100 + 2 * r_pct)))
tipo: vf

enunciado: "C={C}, r={r_pct}%, t=2 períodos. ¿Da el interés compuesto un monto mayor que el interés simple?"

explicacion: |
  A partir de t>1, el compuesto siempre supera al simple, con la misma
  tasa y capital.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "M(t)=C(1+r)^t tiene la misma forma que cualquier función exponencial f(x)=a·bˣ, con a=C y b=(1+r)."

explicacion: |
  Es exactamente la conexión con
  `../../matematica/familias-exponencial-logaritmica/`.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "M(t)=C(1+rt) (interés simple) es una función lineal de t, con pendiente C·r y ordenada al origen C."

explicacion: |
  A diferencia del compuesto, acá t no está en el exponente.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Con una tasa de interés positiva (r>0), la base (1+r) de la función M(t) siempre es mayor que 1."

explicacion: |
  Por eso M(t) es siempre creciente — es la misma condición a>1 de
  `../../matematica/familias-exponencial-logaritmica/`.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Sin importar qué tan alta sea la tasa de interés simple, a la larga el interés compuesto (con la misma tasa) siempre termina dando un monto mayor."

explicacion: |
  Es el mismo principio general: cualquier exponencial con base>1
  termina superando a cualquier función lineal.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["duplicacion"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "Con una tasa del 100% por período (la base es 1+1=2), ¿cuántos períodos tardan en duplicar el capital?"

explicacion: |
  2 = 2^t → t=1 — con 100% de tasa, se duplica en un solo período, por
  definición.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["duplicacion"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Con una tasa del 100% por período (base 2), ¿cuántos períodos tardan en CUADRUPLICAR el capital?"

pasos:
  - "4 = 2^t → t=2"

explicacion: |
  Cuadruplicar es 2², así que hacen falta 2 períodos de duplicación.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Encontrar el tiempo de duplicación de un capital a interés compuesto es resolver una ecuación exponencial, del mismo tipo que `../../matematica/ecuaciones-exponenciales-logaritmicas/`."

explicacion: |
  2 = (1+r)^t se resuelve aplicando logaritmo a los dos lados.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En el contexto financiero, el dominio útil de M(t) se restringe a t≥0 — no tiene sentido un período de tiempo negativo."

explicacion: |
  El modelo matemático permitiría evaluar en t negativo, pero no
  representaría nada real en este contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["error_comun", "opcion_multiple"]

variables:
  C: random(1000, 20000)

respuesta: "C×(1+r)^t"
tipo: mc
opciones_explicitas:
  - "C×(1+r)^t"
  - "C×r^t"
  - "C×(1+r×t)"

enunciado: "¿Cuál es la fórmula correcta del monto a interés compuesto, como función del tiempo?"

explicacion: |
  La base es (1+r), no r solo — olvidar el "+1" es un error común. La
  tercera opción es la fórmula de interés SIMPLE, no compuesto.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  c0: random(2, 20)
  t: random(1, 4)
  C: c0 * (2 ^ t)
  real: c0 * (3 ^ t)
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "M(t) = {C}×(1.5)^t. ¿Es correcto que M({t}) sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El monto a interés compuesto no sólo crece: crece cada vez MÁS RÁPIDO a medida que pasa el tiempo (a diferencia del interés simple, que suma siempre lo mismo por período)."

explicacion: |
  Es la característica distintiva de cualquier crecimiento exponencial.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  c0_a: random(2, 10)
  c0_b: random(11, 20)
  t: random(1, 4)

respuesta: ((c0_b * (3 ^ t)) > (c0_a * (3 ^ t)))
tipo: vf

enunciado: "Dos capitales, {c0_a * (2 ^ t)} y {c0_b * (2 ^ t)}, crecen a la misma tasa del 50% por período durante {t} períodos. ¿Termina siendo mayor el monto del capital que partió más grande?"

explicacion: |
  Con la misma tasa, el capital inicial mayor siempre da un monto final
  mayor — la proporción se mantiene.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El interés compuesto es uno de los ejemplos clásicos del modelo dy/dt=ky (crecimiento proporcional a lo que ya se tiene), estudiado formalmente en `../../matematica/ecuaciones-diferenciales/`."

explicacion: |
  Es el mismo fenómeno matemático mirado, más adelante en el tronco, con
  la herramienta de derivadas.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  C: 1000
  t_sol: random(1, 5)

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "M(t) = {C}×2^t (tasa 100%). ¿Para qué valor de t es M(t) = {C * (2 ^ t_sol)}?"

pasos:
  - "2^t = {2 ^ t_sol} → t = {t_sol}"

explicacion: |
  Se reconoce la potencia de 2 acumulada.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para cualquier tasa r, M(0) siempre es igual al capital inicial C, sin importar cuál sea r."

explicacion: |
  (1+r)⁰=1 siempre, sea cual sea r — mismo principio que f(0)=1 en
  cualquier exponencial.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El gráfico de M(t) a interés compuesto es una recta, igual que el de interés simple."

explicacion: |
  Es una curva exponencial, no una recta — sólo el interés SIMPLE da una
  recta.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto"]

variables:
  C: random(1000, 50000)
  t: random(1, 10)

respuesta: C
tipo: input
tolerancia_abs: 0

enunciado: "M(t) = {C}×(1+0)^t (tasa 0%). ¿Cuánto vale M({t})?"

explicacion: |
  Con r=0, la base es 1, y 1 elevado a cualquier exponente da 1 — el
  capital nunca cambia.
```

```
metadata:
  materia: "matematicas"
  tema: "interes_compuesto_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "M=C(1+r)^t es la misma fórmula en `../interes-compuesto/` y acá — lo que cambia es la lectura: antes, una cuenta puntual; ahora, una función completa de t, con dominio, comparación de crecimiento y tiempo de duplicación."

explicacion: |
  Es el resumen del módulo: mismo contenido matemático, otra manera de
  mirarlo.
```

## Sección: interes-simple (24 preguntas)

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

## Sección: iva (26 preguntas)

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "basico"
  tags: ["iva", "vocabulario"]

enunciado: "¿Qué es el IVA?"
tipo: mc
opciones_explicitas:
  - "Un impuesto nacional que se cobra sobre casi todas las ventas de bienes y servicios"
  - "Un impuesto que sólo pagan las empresas grandes"
  - "Un impuesto exclusivo de productos importados"
respuesta: "Un impuesto nacional que se cobra sobre casi todas las ventas de bienes y servicios"

explicacion: |
  Es de los pocos impuestos verdaderamente parejos en casi todo lo que se
  compra.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "basico"
  tags: ["iva"]

respuesta: 21
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la alícuota general del IVA en Argentina?"

explicacion: |
  21% es la alícuota que aplica a la mayoría de productos y servicios.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "intermedio"
  tags: ["iva", "calculo"]

variables:
  precio_sin_iva: random(1, 50) * 1000

respuesta: precio_sin_iva * 0.21
tipo: input
tolerancia_abs: 0.5

enunciado: "Un producto vale ${precio_sin_iva} sin IVA. ¿Cuánto es el IVA (21%)?"

explicacion: |
  Se calcula el 21% del precio sin IVA.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "intermedio"
  tags: ["iva", "calculo"]

variables:
  precio_sin_iva: random(1, 50) * 1000

respuesta: precio_sin_iva * 1.21
tipo: input
tolerancia_abs: 0.5

enunciado: "Un producto vale ${precio_sin_iva} sin IVA. ¿Cuánto es el precio final, con el 21% de IVA incluido?"

explicacion: |
  Se multiplica por 1,21 (el 100% original más el 21% de IVA).
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "avanzado"
  tags: ["iva", "calculo"]

variables:
  precio_sin_iva: random(1, 50) * 1000
  precio_final: precio_sin_iva * 1.21

respuesta: precio_sin_iva
tipo: input
tolerancia_abs: 0.5

enunciado: "Un producto cuesta ${precio_final} con IVA incluido (21%). ¿Cuánto vale sin IVA?"

pasos:
  - "{precio_final} ÷ 1,21 = {precio_final / 1.21}"

explicacion: |
  Se divide el precio final por 1,21 para deshacer el IVA incluido.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "avanzado"
  tags: ["iva", "calculo"]

variables:
  precio_sin_iva: random(1, 50) * 1000
  precio_final: precio_sin_iva * 1.21

respuesta: precio_final - precio_sin_iva
tipo: input
tolerancia_abs: 0.5

enunciado: "Un producto cuesta ${precio_final} con IVA incluido. ¿Cuántos pesos de eso son el IVA en sí?"

pasos:
  - "Precio sin IVA: {precio_final} ÷ 1,21 = {precio_final / 1.21}. IVA: {precio_final} - {precio_final / 1.21} = {precio_final - precio_final / 1.21}"

explicacion: |
  El IVA es la diferencia entre el precio final y el precio sin IVA.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "basico"
  tags: ["iva"]

respuesta: 10.5
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuál es la alícuota reducida del IVA (para ciertos bienes y servicios, como algunas frutas y verduras)?"

explicacion: |
  10,5% es la mitad, aproximadamente, de la alícuota general.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "intermedio"
  tags: ["iva"]

respuesta: 27
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la alícuota agravada del IVA para algunos servicios públicos (electricidad, gas, telecomunicaciones), en ciertos casos?"

explicacion: |
  27% es más alta que la general, y aplica en casos puntuales de
  servicios públicos.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "basico"
  tags: ["iva", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Algunos productos de la canasta básica están exentos de IVA (pagan 0%)."

explicacion: |
  No todo paga la alícuota general: hay una categoría exenta.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "intermedio"
  tags: ["iva", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Desde 2018, servicios digitales del exterior como Netflix, Spotify o Steam pagan 21% de IVA en Argentina, cobrado directo en la tarjeta usada para pagar."

explicacion: |
  Es uno de los pocos impuestos que se aplica igual a lo digital que a lo
  físico, aunque la empresa esté radicada afuera del país.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "basico"
  tags: ["iva", "problema"]

variables:
  precio_dolares: random(5, 20)
  cotizacion: random(900, 1300)
  precio_pesos: precio_dolares * cotizacion

respuesta: precio_pesos * 1.21
tipo: input
tolerancia_abs: 5

enunciado: "Una suscripción a una plataforma extranjera cuesta US$ {precio_dolares}, que a ${cotizacion} el dólar son ${precio_pesos}. Con el 21% de IVA sobre servicios digitales, ¿cuánto se termina pagando en pesos?"

explicacion: |
  El IVA se suma sobre el monto en pesos de la suscripción, igual que a
  cualquier otro servicio.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "intermedio"
  tags: ["iva", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La compra, venta o intercambio de criptomonedas está excluida del objeto del IVA en Argentina: no se le cobra ese impuesto a esa operación."

explicacion: |
  La ley de IVA no la considera una \"venta\" en el sentido que el
  impuesto grava.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "intermedio"
  tags: ["iva", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Que una operación esté excluida del IVA (como las criptomonedas) significa que esa operación no tiene absolutamente ningún impuesto ni percepción."

explicacion: |
  Sólo significa que no se le cobra ESE impuesto puntual; pueden existir
  otros impuestos o percepciones aplicando igual, según el caso.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "intermedio"
  tags: ["iva"]

enunciado: "¿Qué alícuota de IVA aplica a la mayoría de productos y servicios, salvo excepciones puntuales?"
tipo: mc
opciones_explicitas:
  - "21%"
  - "27%"
  - "0%"
respuesta: "21%"

explicacion: |
  Es la alícuota general, la que aplica "por defecto" salvo que el
  producto tenga un tratamiento especial.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "intermedio"
  tags: ["iva", "verificacion"]

variables:
  precio_sin_iva: random(1, 50) * 1000
  correcto: precio_sin_iva * 1.21
  error: uno_de([0, 0, 0, 500, -500])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? Precio sin IVA ${precio_sin_iva}, con IVA incluido queda ${mostrado}."

explicacion: |
  Se vuelve a multiplicar por 1,21 y se compara.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "avanzado"
  tags: ["iva"]

variables:
  precio_sin_iva: random(1, 50) * 1000
  precio_final: precio_sin_iva * 1.21

tipo: completar
enunciado: "Completá: ___ (precio sin IVA) × 1,21 = ${precio_final} (precio final)."
respuestas_validas:
  - precio_sin_iva

explicacion: |
  Se despeja dividiendo el precio final por 1,21.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "intermedio"
  tags: ["iva", "comparacion"]

variables:
  precio: random(10, 50) * 1000

respuesta: ((precio * 0.27) > (precio * 0.105))
tipo: vf

enunciado: "Sobre el mismo precio de ${precio}, ¿el IVA calculado con la alícuota del 27% da más que con la del 10,5%?"

explicacion: |
  A mayor alícuota, mayor el monto de IVA sobre el mismo precio base.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "avanzado"
  tags: ["iva", "problema"]

variables:
  precio_sin_iva: random(5, 100) * 1000
  precio_final: precio_sin_iva * 1.21

respuesta: precio_sin_iva
tipo: input
tolerancia_abs: 0.5

enunciado: "Una factura muestra un total de ${precio_final}, con el 21% de IVA ya incluido. ¿Cuál es el monto neto (sin IVA) de esa factura?"

explicacion: |
  Es el mismo cálculo de \"deshacer\" el IVA: dividir por 1,21.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "basico"
  tags: ["iva", "orden"]

tipo: ordenar
enunciado: "Ordená estas alícuotas de IVA de menor a mayor."
opciones_explicitas:
  - "21%"
  - "0%"
  - "27%"
  - "10,5%"
respuesta_orden: ["0%", "10,5%", "21%", "27%"]

explicacion: |
  Exenta (0%), reducida (10,5%), general (21%), agravada (27%).
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "intermedio"
  tags: ["iva", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El IVA se llama \"al valor agregado\" porque en cada etapa de una cadena de producción se cobra sólo sobre el valor que esa etapa agregó, no sobre el precio total de nuevo en cada paso."

explicacion: |
  Es la idea detrás del nombre del impuesto.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "basico"
  tags: ["iva", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El IVA se cobra tanto en productos físicos como en servicios digitales (con algunas excepciones puntuales, como las criptomonedas)."

explicacion: |
  Es uno de los pocos impuestos genuinamente parejos entre lo físico y lo
  digital.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "intermedio"
  tags: ["iva", "problema"]

variables:
  precio_sin_iva: random(5, 50) * 1000

respuesta: precio_sin_iva * 1.105
tipo: input
tolerancia_abs: 0.5

enunciado: "Un producto con alícuota reducida (10,5%) vale ${precio_sin_iva} sin IVA. ¿Cuál es el precio final?"

explicacion: |
  Se multiplica por 1,105 en vez de 1,21.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "intermedio"
  tags: ["iva", "problema"]

variables:
  precio_sin_iva: random(5, 50) * 1000

respuesta: precio_sin_iva * 1.27
tipo: input
tolerancia_abs: 0.5

enunciado: "Un servicio con alícuota agravada (27%) vale ${precio_sin_iva} sin IVA. ¿Cuál es el precio final?"

explicacion: |
  Se multiplica por 1,27.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "avanzado"
  tags: ["iva", "comparacion"]

variables:
  precio_a: random(10, 50) * 1000
  precio_b: random(10, 50) * 1000

respuesta: ((precio_a * 0.21) > (precio_b * 0.105))
tipo: vf

enunciado: "¿El IVA (21%) de un producto de ${precio_a} da más pesos que el IVA (10,5%) de otro de ${precio_b}?"

explicacion: |
  Hay que calcular los dos montos de IVA antes de poder comparar — ni la
  alícuota ni el precio solos alcanzan.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "basico"
  tags: ["iva", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque el 21% es la alícuota más conocida, el IVA argentino tiene otras alícuotas (10,5%, 27%, 0%) según el tipo de bien o servicio."

explicacion: |
  No hay un único porcentaje de IVA para todo.
```

```
metadata:
  materia: "economia"
  tema: "iva"
  nivel: "basico"
  tags: ["iva", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El IVA es uno de los pocos impuestos que aplica de forma pareja a casi todo lo que se compra, físico o digital, con pocas excepciones reales (como las criptomonedas)."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: jubilacion-sistema-previsional (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

enunciado: "¿Cómo funciona un sistema previsional de reparto?"
tipo: mc
opciones_explicitas:
  - "Lo que aportan los trabajadores activos hoy financia las jubilaciones que se pagan hoy"
  - "Cada trabajador tiene una cuenta propia donde se acumula lo que aportó"
  - "El Estado paga las jubilaciones con impuestos al consumo, no con aportes laborales"
respuesta: "Lo que aportan los trabajadores activos hoy financia las jubilaciones que se pagan hoy"

explicacion: |
  Es un pacto entre generaciones: la generación activa sostiene a la
  jubilada, con la expectativa de que la próxima haga lo mismo con ella.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

enunciado: "¿Cómo funciona un sistema previsional de capitalización individual (privado)?"
tipo: mc
opciones_explicitas:
  - "Cada trabajador aporta a una cuenta propia, que se invierte y crece según lo que rinda esa inversión"
  - "El Estado reparte lo aportado hoy entre los jubilados de hoy"
  - "No existen aportes: el Estado paga las jubilaciones directamente de su presupuesto general"
respuesta: "Cada trabajador aporta a una cuenta propia, que se invierte y crece según lo que rinda esa inversión"

explicacion: |
  El haber jubilatorio de cada persona depende de lo acumulado
  específicamente en su propia cuenta, no de un fondo común.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

enunciado: "¿Cómo funciona un sistema previsional híbrido (mixto)?"
tipo: mc
opciones_explicitas:
  - "Combina reparto (garantiza un piso mínimo) y capitalización individual (varía según la inversión)"
  - "Es un sistema de reparto que además cobra una comisión fija a los trabajadores"
  - "Es lo mismo que un sistema de capitalización individual, con otro nombre"
respuesta: "Combina reparto (garantiza un piso mínimo) y capitalización individual (varía según la inversión)"

explicacion: |
  Reparte el riesgo entre los dos modelos: parte del aporte va a un
  sistema solidario, parte va a una cuenta individual.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "No existe un único modelo de sistema previsional: distintos países usan reparto, capitalización individual o modelos híbridos."

explicacion: |
  Cada modelo reparte el riesgo de forma distinta; ninguno es
  intrínsecamente "el correcto" para cualquier contexto.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Entre 1994 y 2008, en Argentina funcionó un sistema con capitalización individual, con cuentas administradas por empresas privadas llamadas AFJP."

explicacion: |
  Es un dato histórico real: Argentina usó ese modelo mixto durante 14
  años, antes del cambio de 2008.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En 2008, la Ley 26.425 eliminó el régimen de capitalización individual administrado por las AFJP y estatizó esos fondos."

explicacion: |
  Fue el cambio que dio origen al sistema previsional argentino actual.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

enunciado: "¿Cómo se llama el sistema previsional que rige hoy en Argentina, creado en 2008?"
tipo: mc
opciones_explicitas:
  - "SIPA (Sistema Integrado Previsional Argentino)"
  - "AFJP (Administradoras de Fondos de Jubilaciones y Pensiones)"
  - "PUAM (Prestación Universal para el Adulto Mayor)"
respuesta: "SIPA (Sistema Integrado Previsional Argentino)"

explicacion: |
  Reemplazó al régimen de capitalización individual de las AFJP.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El SIPA es un sistema de reparto, administrado por ANSES."

explicacion: |
  Es el mismo modelo de reparto explicado en el módulo anterior, ahora
  con el nombre y la historia del sistema que lo reemplazó.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El argumento oficial del gobierno para eliminar el régimen de las AFJP en 2008 fue que esas administradoras cobraban comisiones que reducían lo que efectivamente se acumulaba para cada trabajador."

explicacion: |
  Es el argumento que dio el gobierno de ese momento — no implica que
  no haya habido otras posturas ni otros argumentos en el debate.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema de capitalización individual, el haber jubilatorio de una persona depende específicamente de lo acumulado en su propia cuenta, no de un fondo común entre todos los trabajadores."

explicacion: |
  Es la diferencia central con el sistema de reparto, donde no hay
  cuentas individuales.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema de reparto puro, el aporte de un trabajador activo se usa de inmediato para pagar la jubilación de otra persona — no se va acumulando en una cuenta a nombre de quien aportó."

explicacion: |
  Por eso, en el sistema de reparto, calcular un "valor futuro
  acumulado" del aporte de una persona no describe cómo funciona
  realmente ese sistema.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "basico"
  tags: ["aporte", "vocabulario"]

enunciado: "En el sentido de ahorro personal para el futuro, ¿qué es \"el aporte\"?"
tipo: mc
opciones_explicitas:
  - "Un monto fijo que se destina periódicamente (por ejemplo, cada mes) a un fondo que se va acumulando"
  - "El haber jubilatorio que se cobra una vez jubilado"
  - "La edad mínima para poder jubilarse"
respuesta: "Un monto fijo que se destina periódicamente (por ejemplo, cada mes) a un fondo que se va acumulando"

explicacion: |
  Es la pieza que, capitalizada con interés compuesto durante muchos
  años, determina cuánto se llega a acumular.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "avanzado"
  tags: ["aporte", "calculo"]

variables:
  aporte: random(5, 50) * 1000
  tasa: random(1, 3)
  n: random(10, 40)

respuesta: aporte * ((1 + tasa / 100) ^ n - 1) / (tasa / 100)
tipo: input
tolerancia_abs: 100

enunciado: "Alguien aporta ${aporte} por período a una tasa del {tasa}% por período, durante {n} períodos. ¿Cuál es el valor futuro acumulado?"

pasos:
  - "VF = aporte × ((1+r)^n - 1) / r = {aporte} × ((1+{tasa/100})^{n} - 1) / {tasa/100}"

explicacion: |
  Cada aporte capitaliza por interés compuesto desde el momento en que
  se hizo hasta el final del período total.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["aporte", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor futuro de una serie de aportes periódicos crece con interés compuesto, igual que un único capital invertido de una vez."

explicacion: |
  La diferencia es que cada aporte individual capitaliza por una
  cantidad distinta de períodos, según cuándo se hizo.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["aporte", "comparacion"]

variables:
  aporte: random(5, 50) * 1000
  tasa: random(1, 3)
  n_a: random(10, 20)
  n_b: random(21, 40)

respuesta: ((aporte * ((1 + tasa / 100) ^ n_b - 1) / (tasa / 100)) > (aporte * ((1 + tasa / 100) ^ n_a - 1) / (tasa / 100)))
tipo: vf

enunciado: "Con el mismo aporte de ${aporte} por período y la misma tasa del {tasa}%, ¿aportar durante {n_b} períodos da un valor futuro mayor que aportar durante {n_a} períodos?"

explicacion: |
  A más períodos aportando, más tiempo tiene cada aporte para
  capitalizar, y mayor el valor futuro acumulado.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "avanzado"
  tags: ["aporte", "comparacion"]

variables:
  tasa: random(1, 3)
  aporte_chico: random(10, 20) * 1000
  n_largo: random(30, 40)
  aporte_grande: random(30, 60) * 1000
  n_corto: random(10, 15)

respuesta: ((aporte_chico * ((1 + tasa / 100) ^ n_largo - 1) / (tasa / 100)) > (aporte_grande * ((1 + tasa / 100) ^ n_corto - 1) / (tasa / 100)))
tipo: vf

enunciado: "Persona A aporta ${aporte_chico} por período durante {n_largo} períodos (empezó antes). Persona B aporta ${aporte_grande} por período (más que A) pero sólo durante {n_corto} períodos (empezó después). A la misma tasa del {tasa}%, ¿A termina con un valor futuro mayor que B, a pesar de aportar menos por período?"

explicacion: |
  El tiempo capitalizando pesa muchísimo: empezar antes con montos
  chicos suele superar a empezar tarde con montos más altos.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "avanzado"
  tags: ["aporte", "calculo"]

variables:
  tasa: random(1, 3)
  n: random(10, 40)
  aporte: random(5, 50) * 1000
  vf_objetivo: aporte * ((1 + tasa / 100) ^ n - 1) / (tasa / 100)

respuesta: aporte
tipo: input
tolerancia_abs: 5

enunciado: "Alguien quiere llegar a un valor futuro de ${redondear(vf_objetivo, 0)}, aportando por {n} períodos a una tasa del {tasa}% por período. ¿Cuál tiene que ser el aporte periódico?"

explicacion: |
  Se despeja el aporte de la fórmula del valor futuro, con la tasa y la
  cantidad de períodos ya conocidas.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["aporte", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Calcular el valor futuro de una serie de aportes tiene sentido claro en un sistema de capitalización individual, pero no describe cómo funciona un sistema de reparto puro, donde el aporte de hoy se usa de inmediato y no se acumula en una cuenta propia."

explicacion: |
  Sirve igual como herramienta general de ahorro personal, pero no es
  literalmente cómo opera el sistema de reparto en sí.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Con una población que en general vive más años y tiene menos hijos que antes, la relación entre trabajadores activos y personas jubiladas tiende a ajustarse con el tiempo en los sistemas de reparto — por eso muchos especialistas recomiendan un ahorro previsional propio, además del aporte obligatorio."

explicacion: |
  Es una observación demográfica general (no específica de ningún país
  ni de ninguna postura política puntual), y una recomendación habitual
  de las finanzas personales.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["aporte", "verificacion"]

variables:
  aporte: random(5, 50) * 1000
  tasa: random(1, 3)
  n: random(10, 40)
  correcto: aporte * ((1 + tasa / 100) ^ n - 1) / (tasa / 100)
  error: uno_de([0, 0, 0, 20000, -20000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 200)
tipo: vf

enunciado: "¿Está bien calculado esto? Aporte de ${aporte} por período, tasa {tasa}% por período, {n} períodos, valor futuro informado: ${redondear(mostrado, 0)}."

explicacion: |
  Se vuelve a calcular con la fórmula del valor futuro de aportes
  periódicos y se compara con el valor informado.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "avanzado"
  tags: ["aporte"]

variables:
  aporte: random(10, 40) * 1000
  tasa: uno_de([1, 2])
  n: uno_de([15, 20, 25, 30])
  vf: aporte * ((1 + tasa / 100) ^ n - 1) / (tasa / 100)

tipo: completar
enunciado: "Aportando ${aporte} por período a una tasa del {tasa}% por período, se llegó a un valor futuro de ${redondear(vf, 0)}. Completá: se aportó durante ___ períodos."
respuestas_validas:
  - n

explicacion: |
  Entre las opciones típicas de cantidad de períodos, sólo una da
  exactamente ese valor futuro con ese aporte y esa tasa.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "basico"
  tags: ["jubilacion", "aporte", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Existen tres modelos posibles de sistema previsional (reparto, capitalización individual, híbrido); Argentina usó capitalización individual con las AFJP entre 1994 y 2008, y desde entonces usa el SIPA, un sistema de reparto — y, más allá del modelo del país, el interés compuesto aplicado a aportes periódicos muestra por qué empezar antes a ahorrar pesa tanto como cuánto se aporta."

explicacion: |
  Es la idea central de todo el tema.
```
