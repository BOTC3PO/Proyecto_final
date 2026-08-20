# Economía — Deuda pública interna (cuestionario, 20 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Deuda con acreedores DENTRO
> del país, típicamente en moneda local. Se refinancia con rollover.

---

### 1 — Cómo se endeuda un Estado

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Cómo hace un Estado para pedir dinero prestado?"
tipo: mc
opciones_explicitas:
  - "Emite títulos de deuda (bonos), que promete pagar con interés en fechas determinadas"
  - "Sólo puede pedir dinero directamente al Fondo Monetario Internacional"
  - "No existe ningún mecanismo para que un Estado se endeude"
respuesta: "Emite títulos de deuda (bonos), que promete pagar con interés en fechas determinadas"

explicacion: |
  Es el mecanismo central de endeudamiento de cualquier Estado.
```

### 2 — Qué es la deuda pública interna

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es la deuda pública interna?"
tipo: mc
opciones_explicitas:
  - "La parte de la deuda de un Estado contraída con acreedores dentro del propio país"
  - "La deuda que un Estado tiene con organismos internacionales exclusivamente"
  - "El total de impuestos que recauda un Estado en un año"
respuesta: "La parte de la deuda de un Estado contraída con acreedores dentro del propio país"

explicacion: |
  Es la definición central del tema.
```

### 3 — Ejemplos de acreedores internos

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Cuál de estos es un ejemplo típico de acreedor de deuda pública interna?"
tipo: mc
opciones_explicitas:
  - "Un fondo de pensión local que compra bonos del propio país"
  - "Un turista extranjero de visita"
  - "Un organismo internacional exclusivamente"
respuesta: "Un fondo de pensión local que compra bonos del propio país"

explicacion: |
  Es uno de los acreedores internos habituales mencionados en la
  teoría.
```

### 4 — La misma matemática que un crédito personal

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La deuda pública reutiliza la misma matemática del interés compuesto ya vista para un crédito personal, sólo que quien pide prestado es un Estado en vez de una familia."

explicacion: |
  Es la conexión directa con `interes-compuesto/`.
```

### 5 — Qué es el rollover

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es el \"rollover\" de deuda pública?"
tipo: mc
opciones_explicitas:
  - "Emitir un título nuevo para juntar el dinero y pagar un vencimiento anterior, refinanciando en vez de cancelar de una vez"
  - "Cancelar toda la deuda de una sola vez con lo recaudado en un año"
  - "Dejar de pagar la deuda por completo"
respuesta: "Emitir un título nuevo para juntar el dinero y pagar un vencimiento anterior, refinanciando en vez de cancelar de una vez"

explicacion: |
  Es la práctica habitual de la mayoría de los Estados con su deuda.
```

### 6 — Por qué se refinancia en vez de pagar todo de una vez

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En la práctica, los Estados rara vez pagan toda su deuda de una sola vez con lo recaudado en un año: lo habitual es refinanciar, estirando el pago en el tiempo."

explicacion: |
  Es la práctica estándar de gestión de deuda pública.
```

### 7 — La opción de emitir moneda

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "Si la deuda interna está en la propia moneda del país, ¿qué opción tiene el Estado que no tiene con deuda en moneda extranjera?"
tipo: mc
opciones_explicitas:
  - "En principio, podría pedirle al banco central que emita más moneda para pagarla"
  - "Puede pagarla automáticamente sin ningún costo, sin excepción"
  - "Puede eliminarla por decreto sin ninguna consecuencia"
respuesta: "En principio, podría pedirle al banco central que emita más moneda para pagarla"

explicacion: |
  Es una opción real que sólo existe para deuda en moneda propia.
```

### 8 — El costo de emitir moneda para pagar deuda

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Emitir moneda sin respaldo en más producción para pagar deuda tiende a generar inflación — no es una salida sin costo."

explicacion: |
  Es la conexión con `pbi-e-inflacion/`: emitir de más presiona los
  precios generales al alza.
```

### 9 — Por qué un banco central autónomo se resiste

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un banco central con autonomía respecto del gobierno suele resistirse a financiar el pago de deuda emitiendo moneda sin límite, justamente por el riesgo de inflación que eso implica."

explicacion: |
  Es la conexión con la independencia del banco central vista en
  `reservas-banco-central/`.
```

### 10 — El Tesoro coloca un bono en el mercado local

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "problema"]

enunciado: "Un gobierno emite un bono en su propia moneda y lo vende a bancos e inversores del propio país. ¿Qué tipo de deuda está tomando?"
tipo: mc
opciones_explicitas:
  - "Deuda pública interna"
  - "Deuda pública externa"
  - "No es deuda: es un impuesto nuevo"
respuesta: "Deuda pública interna"

explicacion: |
  Acreedores dentro del país, en moneda local: es exactamente la
  definición de deuda interna.
```

### 11 — Qué son los títulos de deuda

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es un título de deuda (bono) emitido por un Estado?"
tipo: mc
opciones_explicitas:
  - "Una promesa de pago: el Estado se compromete a devolver el capital prestado más un interés en fechas determinadas"
  - "Un impuesto obligatorio que paga toda la población"
  - "Un tipo de moneda extranjera"
respuesta: "Una promesa de pago: el Estado se compromete a devolver el capital prestado más un interés en fechas determinadas"

explicacion: |
  Es la definición básica de un bono estatal.
```

### 12 — Calcular el monto a devolver con interés compuesto

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "calculo"]

variables:
  capital: random(1, 20) * 100000
  tasa_pct: uno_de([5, 10, 20])
  anios: uno_de([1, 2])

respuesta: capital * (1 + tasa_pct / 100) ^ anios
tipo: input
tolerancia_abs: 1

enunciado: "Un Estado emite un bono por ${capital}, a una tasa de interés anual del {tasa_pct}%, a devolver en {anios} año(s), capitalizando el interés cada año. ¿Cuánto tiene que devolver en total?"

explicacion: |
  Es la misma fórmula de interés compuesto ya vista en
  `interes-compuesto/`, aplicada a deuda estatal: Monto = Capital ×
  (1 + tasa)^tiempo.
```

### 13 — El banco central como acreedor interno

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El propio banco central de un país puede ser, en algunos casos, un acreedor de la deuda pública interna, cuando compra deuda emitida por el Tesoro."

explicacion: |
  Es uno de los acreedores internos mencionados en la teoría.
```

### 14 — Deuda interna no depende del tipo de cambio de la misma forma

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "Si la deuda interna está denominada en moneda local, ¿la afecta directamente una devaluación de esa moneda, de la misma forma en que afecta a una deuda en dólares?"
tipo: mc
opciones_explicitas:
  - "No de la misma forma: al estar en moneda propia, el monto adeudado en esa misma moneda no cambia por una devaluación"
  - "Sí, exactamente igual que la deuda externa en dólares"
  - "La devaluación siempre cancela automáticamente la deuda interna"
respuesta: "No de la misma forma: al estar en moneda propia, el monto adeudado en esa misma moneda no cambia por una devaluación"

explicacion: |
  Es una diferencia clave con la deuda externa, que sí se ve afectada
  directo por el tipo de cambio (ver `deuda-publica-externa/`).
```

### 15 — Ordenar el ciclo de rollover

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "orden"]

tipo: ordenar
enunciado: "Ordená esta secuencia de un rollover de deuda pública."
opciones_explicitas:
  - "La deuda queda refinanciada, estirada en el tiempo"
  - "Vence un título de deuda emitido hace tiempo"
  - "Con lo recaudado del título nuevo, se paga el vencimiento del título viejo"
  - "El Estado emite un título nuevo para juntar el dinero necesario"
respuesta_orden: ["Vence un título de deuda emitido hace tiempo", "El Estado emite un título nuevo para juntar el dinero necesario", "Con lo recaudado del título nuevo, se paga el vencimiento del título viejo", "La deuda queda refinanciada, estirada en el tiempo"]

explicacion: |
  Es la secuencia típica de cómo un Estado refinancia sus
  vencimientos.
```

### 16 — Deuda interna no está exenta de todo riesgo

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque la deuda interna en moneda propia tiene la opción de pagarse emitiendo dinero, esa opción tiene el costo real de la inflación — no está exenta de todo riesgo."

explicacion: |
  Es la aclaración explícita de la teoría: no es una salida
  \"gratis\".
```

### 17 — Bancos comerciales como acreedores

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los bancos comerciales del propio país son uno de los tipos de acreedores habituales de la deuda pública interna."

explicacion: |
  Es uno de los ejemplos mencionados en la teoría.
```

### 18 — Deuda interna vs. externa: primer criterio de distinción

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Cuál es el criterio central que distingue la deuda pública interna de la externa?"
tipo: mc
opciones_explicitas:
  - "Si el acreedor está dentro o fuera del país"
  - "El monto total de la deuda"
  - "La tasa de interés que paga"
respuesta: "Si el acreedor está dentro o fuera del país"

explicacion: |
  Es el criterio central de la distinción entre los dos tipos.
```

### 19 — Completar la definición de rollover

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica"]

tipo: completar
enunciado: "Completá: cuando un Estado emite un título nuevo para pagar uno que vence, en vez de cancelarlo con lo recaudado, está haciendo un ___ (nombre en inglés usado para esta práctica)."
respuestas_validas:
  - "rollover"

explicacion: |
  Es el término técnico central del tema.
```

### 20 — Cierre del tema

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La deuda pública interna es la parte de la deuda de un Estado con acreedores dentro del propio país, típicamente en moneda local, y suele refinanciarse en vez de pagarse toda de una vez."

explicacion: |
  Es la idea central de todo el tema.
```
