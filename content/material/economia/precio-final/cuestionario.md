# Economía — Precio final (cuestionario, 24 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Usa la cifra investigada de que
> Ingresos Brutos representa aproximadamente el 8-9% del precio final en
> promedio (fuente: Chequeado/Infobae, citadas en la investigación de
> agosto 2026) — se usa como aproximación educativa, no como una alícuota
> fija y exacta (varía por provincia y por producto).

---

### 1 — Qué compone el precio final

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "vocabulario"]

enunciado: "¿Qué compone el precio final que paga el consumidor?"
tipo: mc
opciones_explicitas:
  - "Costo + margen de cada eslabón + IVA + otros impuestos y tasas (como Ingresos Brutos)"
  - "Sólo el costo de producción"
  - "Sólo el IVA"
respuesta: "Costo + margen de cada eslabón + IVA + otros impuestos y tasas (como Ingresos Brutos)"

explicacion: |
  El IVA (ver `../iva/teoria.md`) es sólo una de las capas del precio
  final.
```

### 2 — Qué es Ingresos Brutos

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "vocabulario"]

enunciado: "¿Qué es el impuesto a los Ingresos Brutos?"
tipo: mc
opciones_explicitas:
  - "Un impuesto provincial que grava los ingresos de cualquier actividad económica"
  - "Un impuesto nacional idéntico al IVA"
  - "Un impuesto que sólo pagan las importaciones"
respuesta: "Un impuesto provincial que grava los ingresos de cualquier actividad económica"

explicacion: |
  A diferencia del IVA, es provincial: cada provincia fija su propia
  alícuota.
```

### 3 — Ingresos Brutos es provincial, no nacional

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Ingresos Brutos es un impuesto provincial, a diferencia del IVA, que es nacional."

explicacion: |
  Es la diferencia clave entre los dos impuestos.
```

### 4 — Cada provincia fija su propia alícuota

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada provincia argentina fija su propia alícuota de Ingresos Brutos, que puede llegar hasta aproximadamente el 9%."

explicacion: |
  Por eso el mismo tipo de producto puede pagar distinto Ingresos Brutos
  según en qué provincia se venda.
```

### 5 — Calcular Ingresos Brutos aproximado

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "calculo"]

variables:
  precio: random(10, 50) * 1000

respuesta: precio * 0.085
tipo: input
tolerancia_abs: 5

enunciado: "Usando la estimación de que Ingresos Brutos representa, en promedio, un 8,5% del precio final, ¿cuántos pesos de un precio de ${precio} corresponden aproximadamente a este impuesto?"

explicacion: |
  Es una aproximación educativa (la cifra real varía por provincia y por
  producto), no una alícuota fija y exacta.
```

### 6 — Cuánto representa Ingresos Brutos en promedio

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Según estimaciones, Ingresos Brutos representa entre el 8% y el 9% del precio final que paga el consumidor, en promedio."

explicacion: |
  Es un \"segundo impuesto\" bastante grande, aunque menos visible que el
  IVA porque no aparece desglosado en el ticket como el IVA.
```

### 7 — Qué es el efecto cascada

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

enunciado: "¿Qué es el \"efecto cascada\" de Ingresos Brutos?"
tipo: mc
opciones_explicitas:
  - "Se cobra sobre el ingreso total de cada eslabón de la cadena, varias veces, sin descontar lo ya pagado antes"
  - "El impuesto baja automáticamente con el tiempo"
  - "Sólo se cobra una vez, al final de toda la cadena"
respuesta: "Se cobra sobre el ingreso total de cada eslabón de la cadena, varias veces, sin descontar lo ya pagado antes"

explicacion: |
  A diferencia del IVA (que sólo grava el valor agregado en cada etapa),
  Ingresos Brutos se acumula etapa tras etapa.
```

### 8 — Ingresos Brutos se paga varias veces en la cadena

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un mismo producto puede pagar Ingresos Brutos varias veces a lo largo de la cadena productiva: una vez por cada empresa que participó (fabricante, distribuidor, comercio)."

explicacion: |
  Es la característica que lo hace \"distorsivo\": no se descuenta lo
  pagado en etapas anteriores.
```

### 9 — Diferencia entre IVA e Ingresos Brutos

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "iva", "vocabulario"]

enunciado: "¿Cuál es la diferencia clave entre el IVA e Ingresos Brutos?"
tipo: mc
opciones_explicitas:
  - "El IVA es nacional y grava sólo el valor agregado; Ingresos Brutos es provincial y grava el ingreso total en cada etapa (cascada)"
  - "Son exactamente el mismo impuesto con otro nombre"
  - "El IVA es provincial e Ingresos Brutos es nacional"
respuesta: "El IVA es nacional y grava sólo el valor agregado; Ingresos Brutos es provincial y grava el ingreso total en cada etapa (cascada)"

explicacion: |
  Son dos impuestos bien distintos, aunque los dos terminan formando
  parte del mismo precio final.
```

### 10 — El IVA es parejo, Ingresos Brutos varía por provincia

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "iva", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El IVA es idéntico en todo el país; Ingresos Brutos puede variar según la provincia donde se venda el producto."

explicacion: |
  Es la razón central de por qué el precio final puede diferir entre
  provincias, aunque el IVA sea el mismo en todos lados.
```

### 11 — Problema: precio final combinando costo, IVA e Ingresos Brutos

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final", "problema"]

variables:
  costo_mas_margen: random(5, 30) * 1000

respuesta: costo_mas_margen * 1.21 * 1.085
tipo: input
tolerancia_abs: 5

enunciado: "Un producto tiene un costo más margen de ${costo_mas_margen}, antes de impuestos. Sumando 21% de IVA y, en cascada, un 8,5% aproximado de Ingresos Brutos, ¿cuál es el precio final aproximado?"

pasos:
  - "{costo_mas_margen} × 1,21 × 1,085 = {costo_mas_margen * 1.21 * 1.085}"

explicacion: |
  Los dos impuestos se aplican en cadena (como descuentos o recargos
  sucesivos, ver `../../vida-cotidiana/recargos-sucesivos/`), aunque en
  la práctica real el orden y la base exacta pueden variar según el caso.
```

### 12 — El precio puede variar según la provincia

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un mismo producto, del mismo fabricante, puede costar distinto en dos provincias distintas."

explicacion: |
  Ingresos Brutos (y otras cargas locales) puede diferir de una provincia
  a otra, aunque el IVA sea idéntico.
```

### 13 — Esa diferencia no la explica el IVA

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La diferencia de precio de un mismo producto entre dos provincias NO se explica por el IVA (que es igual en todo el país)."

explicacion: |
  Hay que mirar los impuestos provinciales (como Ingresos Brutos) para
  explicar esa diferencia, no el IVA.
```

### 14 — Elegir la explicación correcta de la diferencia entre provincias

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final"]

enunciado: "¿Qué explica mejor que un producto cueste distinto en dos provincias?"
tipo: mc
opciones_explicitas:
  - "Las distintas alícuotas de Ingresos Brutos (y otras cargas locales) de cada provincia"
  - "El IVA, que cambia según la provincia"
  - "El color del envase del producto"
respuesta: "Las distintas alícuotas de Ingresos Brutos (y otras cargas locales) de cada provincia"

explicacion: |
  El IVA es nacional y no cambia por provincia; Ingresos Brutos sí.
```

### 15 — Verificar un cálculo de precio final (con error a veces)

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final", "verificacion"]

variables:
  costo_mas_margen: random(5, 30) * 1000
  correcto: costo_mas_margen * 1.21 * 1.085
  error: uno_de([0, 0, 0, 500, -500])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 10)
tipo: vf

enunciado: "¿Está bien calculado esto? Costo+margen ${costo_mas_margen}, con IVA (21%) e Ingresos Brutos (8,5% aprox.), el precio final da ${mostrado}."

explicacion: |
  Se vuelve a aplicar la cadena de multiplicaciones y se compara.
```

### 16 — Completar el precio final

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final"]

variables:
  costo_mas_margen: random(5, 30) * 1000
  precio_final: costo_mas_margen * 1.21 * 1.085

tipo: completar
enunciado: "Completá: ___ (costo+margen) × 1,21 (IVA) × 1,085 (Ingresos Brutos aprox.) = ${precio_final}."
respuestas_validas:
  - costo_mas_margen

explicacion: |
  Se despeja dividiendo el precio final por 1,21 y por 1,085.
```

### 17 — Comparar el peso de Ingresos Brutos vs. el IVA

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "En el precio final, el IVA (21%) representa un porcentaje mayor que Ingresos Brutos (8-9% aproximado en promedio)."

explicacion: |
  Aunque Ingresos Brutos es significativo, sigue siendo menor que la
  alícuota general del IVA.
```

### 18 — Problema: Ingresos Brutos en una cadena de 3 eslabones

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final", "problema"]

variables:
  ingreso_fabricante: random(10, 30) * 1000
  ingreso_distribuidor: ingreso_fabricante + random(5, 15) * 1000
  ingreso_comercio: ingreso_distribuidor + random(5, 15) * 1000
  alicuota: 0.03

respuesta: (ingreso_fabricante + ingreso_distribuidor + ingreso_comercio) * alicuota
tipo: input
tolerancia_abs: 1

enunciado: "En una cadena simplificada de 3 etapas, cada una paga Ingresos Brutos (alícuota del 3%) sobre su propio ingreso: fabricante ${ingreso_fabricante}, distribuidor ${ingreso_distribuidor}, comercio ${ingreso_comercio}. ¿Cuánto se pagó de Ingresos Brutos en TOTAL entre las tres etapas?"

pasos:
  - "Se suma el impuesto de cada etapa por separado: ({ingreso_fabricante}+{ingreso_distribuidor}+{ingreso_comercio}) × 3% = {(ingreso_fabricante + ingreso_distribuidor + ingreso_comercio) * alicuota}"

explicacion: |
  Es el efecto cascada en acción: cada etapa paga sobre su propio
  ingreso, sin descontar lo que ya pagaron las etapas anteriores.
```

### 19 — Ingresos Brutos y la recaudación provincial

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Ingresos Brutos representa, aproximadamente, el 80% de la recaudación tributaria de las provincias argentinas."

explicacion: |
  Es, por lejos, el impuesto provincial más importante en términos de
  recaudación.
```

### 20 — El margen de cada eslabón también forma parte del precio

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Además de los impuestos, el precio final incluye el margen de ganancia de cada eslabón de la cadena (fabricante, distribuidor, comercio)."

explicacion: |
  No todo el precio final es impuesto: también hay costo y ganancia de
  cada parte involucrada.
```

### 21 — Ingresos Brutos se considera un impuesto distorsivo

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Especialistas consideran a Ingresos Brutos un impuesto \"distorsivo\", porque grava en cascada a toda la cadena productiva, encareciendo el precio final más de lo que su alícuota nominal sugeriría."

explicacion: |
  El efecto cascada hace que el impuesto \"pese\" más de lo que parece a
  simple vista, comparado con un impuesto que sólo grava el valor
  agregado (como el IVA).
```

### 22 — Problema: comparar precio final en dos provincias

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final", "problema"]

variables:
  costo_mas_margen: random(10, 30) * 1000
  ib_provincia_a: 0.03
  ib_provincia_b: 0.05

respuesta: (costo_mas_margen * 1.21 * (1 + ib_provincia_b)) - (costo_mas_margen * 1.21 * (1 + ib_provincia_a))
tipo: input
tolerancia_abs: 5

enunciado: "Un producto con costo+margen de ${costo_mas_margen} (más 21% de IVA, igual en las dos provincias) paga {ib_provincia_a * 100}% de Ingresos Brutos en la provincia A, y {ib_provincia_b * 100}% en la provincia B. ¿Cuánto más caro sale en la provincia B?"

explicacion: |
  La diferencia depende únicamente de la distinta alícuota de Ingresos
  Brutos, ya que el IVA es igual en las dos.
```

### 23 — El IVA no explica toda la carga tributaria de un producto

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "iva", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Conocer sólo el 21% de IVA no alcanza para saber cuánto de un precio final es impuesto: falta sumar Ingresos Brutos y otras cargas."

explicacion: |
  El IVA es la parte más visible (a veces se desglosa en el ticket), pero
  no es la única carga tributaria del precio.
```

### 24 — Qué compone el precio final (cierre)

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El precio final combina costo, margen, IVA (nacional, parejo) e Ingresos Brutos y otras cargas locales (que sí varían según la provincia)."

explicacion: |
  Es la idea central de todo el tema: el IVA es sólo una parte de la
  historia completa del precio final.
```
