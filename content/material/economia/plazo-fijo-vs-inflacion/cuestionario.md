# Economía — Plazo fijo vs. inflación: rendimiento real (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Fórmula (ecuación de Fisher):
> `rendimiento_real = (1 + tasa_nominal) / (1 + inflación) - 1`, con
> ambas tasas en forma decimal y del mismo período.

---

### 1 — Qué es el rendimiento real

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "vocabulario"]

enunciado: "¿Qué es el rendimiento real de una inversión?"
tipo: mc
opciones_explicitas:
  - "Cuánto creció el poder adquisitivo del dinero, descontando la inflación del período"
  - "La tasa de interés que informa el banco, sin ajustar por nada más"
  - "La diferencia entre dos bancos distintos que ofrecen la misma inversión"
respuesta: "Cuánto creció el poder adquisitivo del dinero, descontando la inflación del período"

explicacion: |
  Es la diferencia entre "cuántos pesos más tengo" (nominal) y "cuánto
  más puedo comprar con esos pesos" (real).
```

### 2 — Qué es la tasa nominal

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La tasa nominal es la que informa el banco: cuántos pesos de más da la inversión, sin ajustar por la inflación del período."

explicacion: |
  Es el punto de partida del cálculo, pero por sí sola no dice si el
  dinero ganó o perdió poder de compra.
```

### 3 — Calcular el rendimiento real (Fisher)

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "calculo"]

variables:
  tasa_nominal: random(20, 150)
  inflacion: random(20, 150)

respuesta: ((1 + tasa_nominal / 100) / (1 + inflacion / 100) - 1) * 100
tipo: input
tolerancia_abs: 0.3

enunciado: "Un plazo fijo pagó una tasa nominal anual del {tasa_nominal}%, en un año con una inflación del {inflacion}%. ¿Cuál fue el rendimiento real, en porcentaje?"

pasos:
  - "rendimiento_real = (1 + {tasa_nominal/100}) / (1 + {inflacion/100}) - 1"

explicacion: |
  Se aplica la ecuación de Fisher: se divide (1 + tasa nominal) por
  (1 + inflación), y se le resta 1.
```

### 4 — Rendimiento real negativo con inflación mayor a la tasa

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "vocabulario"]

variables:
  inflacion: random(50, 150)
  tasa_nominal: random(20, 49)

respuesta: (((1 + tasa_nominal / 100) / (1 + inflacion / 100) - 1) < 0)
tipo: vf

enunciado: "Un plazo fijo pagó una tasa nominal anual del {tasa_nominal}%, en un año con una inflación del {inflacion}%. ¿El rendimiento real fue negativo?"

explicacion: |
  Cuando la inflación supera a la tasa nominal, el rendimiento real
  siempre da negativo.
```

### 5 — Rendimiento real negativo no significa perder pesos

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Es posible tener un rendimiento real negativo aunque el saldo en pesos de la cuenta haya crecido: el dinero es \"más\" en pesos, pero compra menos que antes."

explicacion: |
  Eso es justamente lo que revela el rendimiento real, que la sola tasa
  nominal no muestra.
```

### 6 — Elegir la fórmula correcta de Fisher

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real"]

enunciado: "¿Cuál es la fórmula correcta del rendimiento real (ecuación de Fisher)?"
tipo: mc
opciones_explicitas:
  - "(1 + tasa_nominal) / (1 + inflación) - 1"
  - "tasa_nominal / inflación"
  - "tasa_nominal + inflación"
respuesta: "(1 + tasa_nominal) / (1 + inflación) - 1"

explicacion: |
  La segunda y la tercera opción no son la fórmula de Fisher: no
  reflejan cómo se combinan tasa nominal e inflación.
```

### 7 — La resta simple es sólo una aproximación

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"Rendimiento real ≈ tasa nominal − inflación\" es sólo una aproximación de la ecuación de Fisher, válida cuando ambas tasas son chicas — no es el cálculo exacto."

explicacion: |
  El cálculo exacto es (1 + tasa_nominal) / (1 + inflación) - 1, no la
  resta directa.
```

### 8 — La aproximación falla con tasas altas

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "avanzado"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Con tasas de interés e inflación altas (como suele pasar en Argentina), la aproximación \"tasa nominal − inflación\" se aleja bastante del resultado exacto de la ecuación de Fisher."

explicacion: |
  La aproximación ignora el término que divide por (1 + inflación); ese
  error se vuelve grande cuando la inflación no es chica.
```

### 9 — Comparar el cálculo exacto contra la aproximación simple

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "avanzado"
  tags: ["rendimiento_real", "calculo"]

variables:
  tasa_nominal: random(60, 150)
  inflacion: random(60, 150)

respuesta: (tasa_nominal - inflacion) - ((1 + tasa_nominal / 100) / (1 + inflacion / 100) - 1) * 100
tipo: input
tolerancia_abs: 0.5

enunciado: "Con una tasa nominal del {tasa_nominal}% y una inflación del {inflacion}%, ¿cuántos puntos porcentuales de diferencia hay entre la aproximación simple (resta directa) y el resultado exacto de Fisher?"

pasos:
  - "Aproximación: {tasa_nominal} - {inflacion} = {tasa_nominal - inflacion}"
  - "Exacto: (1 + {tasa_nominal/100}) / (1 + {inflacion/100}) - 1, en porcentaje"

explicacion: |
  Con tasas de esta magnitud, la diferencia entre ambos cálculos ya no
  es despreciable.
```

### 10 — Mayor inflación, menor rendimiento real

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "comparacion"]

variables:
  tasa_nominal: random(20, 150)
  inflacion_a: random(20, 60)
  inflacion_b: random(61, 150)

respuesta: (((1 + tasa_nominal / 100) / (1 + inflacion_b / 100) - 1) < ((1 + tasa_nominal / 100) / (1 + inflacion_a / 100) - 1))
tipo: vf

enunciado: "Con la misma tasa nominal del {tasa_nominal}%, ¿una inflación del {inflacion_b}% da un rendimiento real menor que una inflación del {inflacion_a}%?"

explicacion: |
  A mayor inflación, con la misma tasa nominal, menor el rendimiento
  real — la inflación erosiona más el poder de compra.
```

### 11 — Mayor tasa nominal, mayor rendimiento real

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "comparacion"]

variables:
  inflacion: random(20, 150)
  tasa_a: random(20, 60)
  tasa_b: random(61, 150)

respuesta: (((1 + tasa_b / 100) / (1 + inflacion / 100) - 1) > ((1 + tasa_a / 100) / (1 + inflacion / 100) - 1))
tipo: vf

enunciado: "Con la misma inflación del {inflacion}%, ¿una tasa nominal del {tasa_b}% da un rendimiento real mayor que una del {tasa_a}%?"

explicacion: |
  A igual inflación, a mayor tasa nominal, mayor el rendimiento real.
```

### 12 — Despejar la tasa nominal para rendimiento real cero

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "avanzado"
  tags: ["rendimiento_real", "calculo"]

variables:
  inflacion: random(20, 150)

respuesta: inflacion
tipo: input
tolerancia_abs: 0.01

enunciado: "Si la inflación de un año fue del {inflacion}%, ¿qué tasa nominal anual necesitaba pagar una inversión para que el rendimiento real diera exactamente 0%?"

explicacion: |
  Por la ecuación de Fisher, el rendimiento real da 0% sólo cuando la
  tasa nominal es exactamente igual a la inflación.
```

### 13 — Despejar la tasa nominal para un rendimiento real objetivo

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "avanzado"
  tags: ["rendimiento_real", "calculo"]

variables:
  inflacion: random(30, 150)
  rendimiento_real_objetivo: random(5, 20)
  tasa_nominal: (1 + rendimiento_real_objetivo / 100) * (1 + inflacion / 100) * 100 - 100

respuesta: tasa_nominal
tipo: input
tolerancia_abs: 0.5

enunciado: "En un año con {inflacion}% de inflación, ¿qué tasa nominal anual hace falta para lograr un rendimiento real del {rendimiento_real_objetivo}%?"

pasos:
  - "tasa_nominal = (1 + rendimiento_real) × (1 + inflación) - 1"

explicacion: |
  Se despeja la tasa nominal de la ecuación de Fisher: (1 + tasa_nominal)
  = (1 + rendimiento_real) × (1 + inflación).
```

### 14 — Problema: valor real de un capital después de un año

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "avanzado"
  tags: ["rendimiento_real", "problema"]

variables:
  capital: random(100, 1000) * 1000
  tasa_nominal: random(30, 150)
  inflacion: random(30, 150)
  monto_nominal: capital * (1 + tasa_nominal / 100)

respuesta: monto_nominal / (1 + inflacion / 100)
tipo: input
tolerancia_abs: 5

enunciado: "Un capital de ${capital} se puso a plazo fijo un año, a una tasa nominal anual del {tasa_nominal}%, en un año con {inflacion}% de inflación. El monto nominal al final es ${redondear(monto_nominal, 2)}. ¿Cuánto vale eso en poder de compra de hoy (valor real, en los pesos de hace un año)?"

pasos:
  - "Valor real = monto nominal ÷ (1 + inflación) = {redondear(monto_nominal, 2)} ÷ {1 + inflacion/100}"

explicacion: |
  Se divide el monto nominal final por (1 + inflación) para expresarlo
  en el poder de compra del momento en que se empezó a invertir.
```

### 15 — Mirar sólo la tasa nominal puede engañar

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Elegir un plazo fijo sólo por tener la tasa nominal más alta, sin comparar contra la inflación esperada, puede llevar a un resultado real peor que otra opción con tasa nominal más baja pero rendimiento real mayor."

explicacion: |
  Lo mismo que ya pasaba al comparar créditos por CFT en vez de por TNA:
  el número nominal más llamativo no siempre es el mejor dato para
  decidir.
```

### 16 — Completar el rendimiento real aproximado

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real"]

variables:
  tasa_nominal: random(20, 60)
  inflacion: random(20, 60)
  aproximado: tasa_nominal - inflacion

tipo: completar
enunciado: "Con una tasa nominal del {tasa_nominal}% y una inflación del {inflacion}%, completá la aproximación simple: {tasa_nominal} (tasa nominal) - {inflacion} (inflación) = ___ (rendimiento real aproximado, en puntos porcentuales)."
respuestas_validas:
  - aproximado

explicacion: |
  Es la aproximación simple (válida sólo con tasas chicas) — no la
  ecuación de Fisher exacta.
```

### 17 — La inflación erosiona el rendimiento aunque haya intereses

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La inflación reduce el rendimiento real de una inversión, incluso si esa inversión paga intereses positivos."

explicacion: |
  Los intereses suman pesos; la inflación resta poder de compra a esos
  mismos pesos — el resultado neto es lo que mide el rendimiento real.
```

### 18 — El rendimiento real cero es un caso muy puntual

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Que el rendimiento real dé exactamente 0% es un caso muy puntual: sólo pasa cuando la tasa nominal coincide exactamente con la inflación del mismo período."

explicacion: |
  Cualquier diferencia entre ambas, para cualquier lado, ya da un
  rendimiento real distinto de cero.
```

### 19 — Ordenar escenarios por rendimiento real

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "orden"]

tipo: ordenar
enunciado: "Con una inflación anual del 50% fija, ordená estos rendimientos nominales de menor a mayor rendimiento real."
opciones_explicitas:
  - "Nominal 80%"
  - "Nominal 40%"
  - "Nominal 60%"
respuesta_orden: ["Nominal 40%", "Nominal 60%", "Nominal 80%"]

explicacion: |
  A igual inflación, a mayor tasa nominal, mayor rendimiento real — el
  orden de la tasa nominal es el mismo que el del rendimiento real.
```

### 20 — Verificar un cálculo de rendimiento real (con error a veces)

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "verificacion"]

variables:
  tasa_nominal: random(20, 150)
  inflacion: random(20, 150)
  correcto: ((1 + tasa_nominal / 100) / (1 + inflacion / 100) - 1) * 100
  error: uno_de([0, 0, 0, 5, -5])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.5)
tipo: vf

enunciado: "¿Está bien calculado esto? Tasa nominal {tasa_nominal}%, inflación {inflacion}%, rendimiento real informado: {redondear(mostrado, 2)}%."

explicacion: |
  Se vuelve a aplicar la ecuación de Fisher y se compara con el valor
  informado.
```

### 21 — Un aumento de sueldo también se mide en términos reales

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un aumento de sueldo que queda por debajo de la inflación del mismo período es, en términos reales, una pérdida de poder adquisitivo — aunque el número en el recibo de sueldo sea más alto que antes."

explicacion: |
  Es el mismo concepto de rendimiento real aplicado a un sueldo en vez
  de a una inversión.
```

### 22 — Rendimiento real (cierre)

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El rendimiento real se calcula con (1 + tasa nominal) / (1 + inflación) - 1: mide cuánto cambió el poder de compra del dinero, no sólo cuántos pesos de más hay."

explicacion: |
  Es la idea central de todo el tema.
```
