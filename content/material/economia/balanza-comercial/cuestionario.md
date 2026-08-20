# Economía — Balanza comercial: exportaciones e importaciones (cuestionario, 21 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Balanza = Exportaciones -
> Importaciones. Superávit: positiva. Déficit: negativa. Ninguno de
> los dos es automáticamente bueno o malo.

---

### 1 — Qué es la balanza comercial

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Qué mide la balanza comercial de un país?"
tipo: mc
opciones_explicitas:
  - "La diferencia entre lo que exporta y lo que importa"
  - "El total de dinero que tiene el banco central"
  - "El PBI total del país"
respuesta: "La diferencia entre lo que exporta y lo que importa"

explicacion: |
  Balanza comercial = Exportaciones - Importaciones.
```

### 2 — Qué es una exportación

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Qué es una exportación?"
tipo: mc
opciones_explicitas:
  - "Un bien o servicio producido dentro del país, vendido a compradores de otros países"
  - "Un bien producido en otro país, comprado por residentes locales"
  - "Cualquier producto que se vende dentro del propio país"
respuesta: "Un bien o servicio producido dentro del país, vendido a compradores de otros países"

explicacion: |
  Se produce adentro, se vende afuera.
```

### 3 — Qué es una importación

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Qué es una importación?"
tipo: mc
opciones_explicitas:
  - "Un bien o servicio producido en otro país, comprado por residentes del propio país"
  - "Un bien producido dentro del país, vendido afuera"
  - "Cualquier producto fabricado por una empresa extranjera, sin importar dónde se vende"
respuesta: "Un bien o servicio producido en otro país, comprado por residentes del propio país"

explicacion: |
  Se produce afuera, se compra adentro.
```

### 4 — Qué es el superávit comercial

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Cuándo un país tiene superávit comercial?"
tipo: mc
opciones_explicitas:
  - "Cuando sus exportaciones son mayores que sus importaciones"
  - "Cuando sus importaciones son mayores que sus exportaciones"
  - "Cuando su PBI crece más del 3% anual"
respuesta: "Cuando sus exportaciones son mayores que sus importaciones"

explicacion: |
  La balanza da un resultado positivo cuando exporta más de lo que
  importa.
```

### 5 — Qué es el déficit comercial

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Cuándo un país tiene déficit comercial?"
tipo: mc
opciones_explicitas:
  - "Cuando sus importaciones son mayores que sus exportaciones"
  - "Cuando sus exportaciones son mayores que sus importaciones"
  - "Cuando su moneda se devalúa"
respuesta: "Cuando sus importaciones son mayores que sus exportaciones"

explicacion: |
  La balanza da un resultado negativo cuando importa más de lo que
  exporta.
```

### 6 — Calcular la balanza comercial (superávit)

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "intermedio"
  tags: ["comercio_internacional", "calculo"]

variables:
  exportaciones: random(300, 800) * 1000
  importaciones: random(100, 250) * 1000

respuesta: exportaciones - importaciones
tipo: input
tolerancia_abs: 0

enunciado: "Un país exportó ${exportaciones} millones y le importó ${importaciones} millones en un año. ¿Cuál fue su balanza comercial de ese período?"

explicacion: |
  Balanza = Exportaciones - Importaciones.
```

### 7 — Identificar superávit o déficit a partir del cálculo

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "intermedio"
  tags: ["comercio_internacional", "calculo"]

variables:
  exportaciones: random(100, 300) * 1000
  importaciones: random(300, 600) * 1000

respuesta: falso
tipo: vf

enunciado: "Un país exportó ${exportaciones} millones e importó ${importaciones} millones en un año. ¿Es correcto decir que tuvo superávit comercial?"

explicacion: |
  Como importó más de lo que exportó, tuvo déficit, no superávit.
```

### 8 — Ni superávit ni déficit son automáticamente buenos o malos

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país puede tener déficit comercial por estar importando maquinaria para invertir en su propia producción futura — el número solo, sin contexto, no alcanza para juzgar si es \"bueno\" o \"malo\"."

explicacion: |
  Es la aclaración central del tema: el signo del resultado no dice
  todo por sí solo.
```

### 9 — Un superávit también puede ser una mala señal

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país puede tener superávit comercial simplemente porque atraviesa una recesión que hace caer fuerte sus importaciones — no necesariamente porque su economía esté fuerte."

explicacion: |
  Es el mismo principio de la pregunta anterior, visto desde el otro
  signo: superávit tampoco es automáticamente una buena noticia.
```

### 10 — Los aranceles y la balanza comercial

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "intermedio"
  tags: ["comercio_internacional", "problema"]

enunciado: "Un país sube los aranceles a los productos importados, para que sea más caro comprarlos desde afuera. ¿Qué busca lograr con esto, en términos de balanza comercial?"
tipo: mc
opciones_explicitas:
  - "Reducir sus importaciones, para mejorar (o achicar el déficit de) su balanza comercial"
  - "Aumentar sus importaciones, para mejorar su balanza comercial"
  - "No tiene ninguna relación con la balanza comercial"
respuesta: "Reducir sus importaciones, para mejorar (o achicar el déficit de) su balanza comercial"

explicacion: |
  Encarecer lo importado busca, justamente, que se compre menos desde
  afuera.
```

### 11 — Balanza comercial vs. balanza de pagos

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Cuál es la relación entre la balanza comercial y la balanza de pagos?"
tipo: mc
opciones_explicitas:
  - "La balanza comercial es sólo una parte (bienes y servicios) de un cuadro más amplio, la balanza de pagos, que también incluye inversiones y préstamos"
  - "Son exactamente lo mismo, dos nombres para un mismo concepto"
  - "La balanza de pagos sólo existe para países sin moneda propia"
respuesta: "La balanza comercial es sólo una parte (bienes y servicios) de un cuadro más amplio, la balanza de pagos, que también incluye inversiones y préstamos"

explicacion: |
  La balanza comercial es la pieza más citada, pero no es todo el
  cuadro de las relaciones económicas de un país con el resto del
  mundo.
```

### 12 — Un país dependiente de un solo producto

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país que depende de exportar mayormente un solo producto tiene una balanza comercial muy sensible al precio internacional de ese producto puntual."

explicacion: |
  Si ese precio cae, las exportaciones caen con él, afectando directo
  el resultado de la balanza.
```

### 13 — Balanza equilibrada

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Cuándo se dice que la balanza comercial de un país está \"equilibrada\"?"
tipo: mc
opciones_explicitas:
  - "Cuando exportaciones e importaciones son iguales"
  - "Cuando las exportaciones son el doble de las importaciones"
  - "Cuando no hay ningún comercio internacional"
respuesta: "Cuando exportaciones e importaciones son iguales"

explicacion: |
  Es el caso intermedio entre superávit y déficit.
```

### 14 — Calcular importaciones a partir de la balanza y las exportaciones

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "avanzado"
  tags: ["comercio_internacional", "calculo"]

variables:
  exportaciones: random(300, 800) * 1000
  balanza: random(-100, 100) * 1000

respuesta: exportaciones - balanza
tipo: input
tolerancia_abs: 0

enunciado: "Un país exportó ${exportaciones} millones en un año, y su balanza comercial de ese período fue de ${balanza} millones. ¿Cuánto importó?"

pasos:
  - "Balanza = Exportaciones - Importaciones"
  - "Importaciones = Exportaciones - Balanza = {exportaciones} - ({balanza})"

explicacion: |
  Se despeja Importaciones de la fórmula de la balanza comercial.
```

### 15 — Récord de exportaciones en las noticias

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando una noticia dice \"récord de exportaciones\" o \"el déficit comercial se amplió\", está hablando directamente del resultado de la balanza comercial."

explicacion: |
  Es el mismo concepto de este tema, en el lenguaje habitual de las
  noticias económicas.
```

### 16 — Producción dentro vs. fuera del país

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "intermedio"
  tags: ["comercio_internacional", "problema"]

enunciado: "Una empresa local le vende software a clientes de otro país. ¿Cómo se registra esa venta en la balanza comercial del país donde está la empresa?"
tipo: mc
opciones_explicitas:
  - "Como una exportación"
  - "Como una importación"
  - "No se registra: los servicios no cuentan en la balanza comercial"
respuesta: "Como una exportación"

explicacion: |
  Se produjo dentro del país y se vendió a un comprador de otro país:
  es exactamente la definición de exportación (y los servicios sí
  cuentan, no sólo bienes físicos).
```

### 17 — El período de la balanza comercial

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La balanza comercial se mide durante un período determinado (normalmente un año), no como una foto de un instante puntual."

explicacion: |
  Es una medida de flujo (a lo largo de un tiempo), no de stock (en un
  momento puntual).
```

### 18 — Ordenar el razonamiento de un arancel protector

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "avanzado"
  tags: ["comercio_internacional", "orden"]

tipo: ordenar
enunciado: "Ordená esta secuencia de razonamiento sobre un arancel a productos importados."
opciones_explicitas:
  - "Baja la cantidad importada de ese producto"
  - "La balanza comercial mejora (o su déficit se achica), sólo por ese efecto puntual"
  - "El gobierno sube el arancel a un producto importado"
  - "Ese producto se vuelve más caro para los consumidores locales"
respuesta_orden: ["El gobierno sube el arancel a un producto importado", "Ese producto se vuelve más caro para los consumidores locales", "Baja la cantidad importada de ese producto", "La balanza comercial mejora (o su déficit se achica), sólo por ese efecto puntual"]

explicacion: |
  Cada paso es consecuencia del anterior: el arancel encarece, el
  precio más alto reduce la cantidad comprada, y eso mejora el
  resultado de la balanza.
```

### 19 — Comparar balanza comercial y balanza de pagos

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La balanza comercial es la pieza más mencionada en el debate público, pero es sólo una parte del cuadro completo de las relaciones económicas de un país con el resto del mundo (la balanza de pagos)."

explicacion: |
  Es la aclaración de alcance del tema: no se confunde con el cuadro
  completo.
```

### 20 — Completar la fórmula de la balanza comercial

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional"]

variables:
  exportaciones: random(300, 800) * 1000
  importaciones: random(100, 250) * 1000
  balanza: exportaciones - importaciones

tipo: completar
enunciado: "Completá: Balanza comercial = {exportaciones} - {importaciones} = ___ (balanza, en millones)."
respuestas_validas:
  - balanza

explicacion: |
  Es la aplicación directa de la fórmula de la balanza comercial.
```

### 21 — Cierre del tema

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La balanza comercial mide la diferencia entre exportaciones e importaciones de un país, y ni el superávit ni el déficit son, por sí solos, automáticamente buenos o malos."

explicacion: |
  Es la idea central de todo el tema.
```
