# Economía — Default: cese de pagos de la deuda (cuestionario, 21 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Default: no se cumplen los
> pagos comprometidos. Puede ser de deuda interna, externa, o ambas.
> Tratado con neutralidad: mecánica, sin evaluar decisiones puntuales.

---

### 1 — Qué es un default

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es un default de deuda pública?"
tipo: mc
opciones_explicitas:
  - "Cuando un Estado no cumple con los pagos comprometidos de su deuda (interés, capital, o ambos)"
  - "Cuando un Estado paga toda su deuda antes de lo previsto"
  - "Cuando un Estado sube los impuestos para financiar su deuda"
respuesta: "Cuando un Estado no cumple con los pagos comprometidos de su deuda (interés, capital, o ambos)"

explicacion: |
  Es la definición central del tema.
```

### 2 — Por qué puede ocurrir un default

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Por qué puede ocurrir un default?"
tipo: mc
opciones_explicitas:
  - "Porque el Estado no consigue el dinero o la moneda extranjera necesaria, o porque decide no pagar"
  - "Sólo puede ocurrir por un error administrativo, nunca por decisión ni por falta de fondos"
  - "Los Estados nunca entran en default: sólo les pasa a las empresas privadas"
respuesta: "Porque el Estado no consigue el dinero o la moneda extranjera necesaria, o porque decide no pagar"

explicacion: |
  Son las dos razones centrales mencionadas en la teoría.
```

### 3 — Un default puede ser parcial

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un default no siempre afecta a toda la deuda de un país por igual: puede ser sólo de deuda externa, sólo de deuda interna, o de ambas."

explicacion: |
  Es la razón por la que este tema depende de entender los dos tipos
  de deuda por separado.
```

### 4 — Default de deuda externa exclusivamente

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "problema"]

enunciado: "Un país deja de pagarle a sus acreedores extranjeros, pero sigue pagando con normalidad a los acreedores locales de deuda en moneda propia. ¿Qué tipo de default es este?"
tipo: mc
opciones_explicitas:
  - "Default de deuda externa exclusivamente"
  - "Default de deuda interna exclusivamente"
  - "No es un default: es una reestructuración automática"
respuesta: "Default de deuda externa exclusivamente"

explicacion: |
  Sólo se dejó de pagar a los acreedores de afuera: es un default
  parcial, sólo de la deuda externa.
```

### 5 — Qué pasa con el acceso al crédito después de un default

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué suele pasar con el acceso de un país al crédito internacional después de un default?"
tipo: mc
opciones_explicitas:
  - "Se vuelve mucho más difícil y más caro volver a pedir prestado"
  - "Mejora automáticamente, porque el país ya no debe nada"
  - "No tiene ningún efecto sobre el crédito futuro"
respuesta: "Se vuelve mucho más difícil y más caro volver a pedir prestado"

explicacion: |
  Los prestamistas exigen una tasa más alta para compensar el riesgo
  mayor que perciben tras un default.
```

### 6 — Qué es una reestructuración de deuda

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es una \"reestructuración\" de deuda, después de un default?"
tipo: mc
opciones_explicitas:
  - "Una negociación con los acreedores para pagar menos del monto original (quita), extender los plazos, o ambas cosas"
  - "El pago inmediato y completo de toda la deuda original"
  - "La cancelación automática de la deuda sin ninguna negociación"
respuesta: "Una negociación con los acreedores para pagar menos del monto original (quita), extender los plazos, o ambas cosas"

explicacion: |
  Es el mecanismo habitual para salir de un default y volver a tener
  una relación de pago con los acreedores.
```

### 7 — Qué es una quita

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es una \"quita\", en el contexto de una reestructuración de deuda?"
tipo: mc
opciones_explicitas:
  - "Que los acreedores acepten cobrar menos del monto originalmente pactado"
  - "Que el Estado pague el 100% de lo que debía, sin ningún descuento"
  - "Un impuesto nuevo que se cobra a los acreedores"
respuesta: "Que los acreedores acepten cobrar menos del monto originalmente pactado"

explicacion: |
  Es uno de los dos componentes centrales de una reestructuración,
  junto con la extensión de plazos.
```

### 8 — Interpretar una quita del 30%

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "calculo"]

variables:
  monto_original: random(1, 20) * 100
  quita_pct: uno_de([20, 25, 30, 50])

respuesta: monto_original * (1 - quita_pct / 100)
tipo: input
tolerancia_abs: 1

enunciado: "Un país reestructura un bono de U$S {monto_original} millones con una quita del {quita_pct}%. ¿Cuántos millones de dólares terminan cobrando los acreedores?"

explicacion: |
  Con una quita del X%, los acreedores cobran el (100 - X)% del monto
  original.
```

### 9 — Riesgo de litigios en deuda externa

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "En un default de deuda externa, ¿qué puede pasar con los acreedores que NO aceptan la reestructuración?"
tipo: mc
opciones_explicitas:
  - "Pueden llevar el reclamo a tribunales extranjeros, buscando cobrar el monto original por esa vía legal"
  - "Automáticamente pierden todo derecho a reclamar cualquier cosa"
  - "El Estado está obligado por ley internacional a pagarles el doble"
respuesta: "Pueden llevar el reclamo a tribunales extranjeros, buscando cobrar el monto original por esa vía legal"

explicacion: |
  Es un riesgo real y específico de la deuda externa, que no aplica de
  la misma forma a la deuda interna.
```

### 10 — El default argentino de 2001

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿En qué año declaró Argentina un default de su deuda externa, en medio de una crisis económica más amplia?"
tipo: mc
opciones_explicitas:
  - "2001"
  - "1991"
  - "2015"
respuesta: "2001"

explicacion: |
  Es el ejemplo histórico real citado en la teoría.
```

### 11 — Qué pasó después del default de 2001

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Después del default de 2001, Argentina negoció una reestructuración con la mayoría de sus acreedores (con una quita importante), mientras que un grupo que no aceptó llevó el reclamo a tribunales de Estados Unidos."

explicacion: |
  Es el desenlace real de ese caso histórico, presentado con
  neutralidad: negociación con la mayoría, litigio con la minoría que
  no aceptó.
```

### 12 — Este tema explica la mecánica, no evalúa decisiones

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Este tema explica la mecánica de qué pasa en un default (consecuencias, reestructuración, litigios), sin evaluar si la decisión puntual de algún país de entrar en default fue correcta o no."

explicacion: |
  Es el mismo criterio de neutralidad ya aplicado a otros temas
  sensibles de esta materia (ver `corrientes-pensamiento-economico/`).
```

### 13 — Las calificadoras de riesgo

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "Cuando se informa que \"las calificadoras de riesgo bajaron la nota de un país\", ¿qué suelen estar reflejando?"
tipo: mc
opciones_explicitas:
  - "Un default reciente o una mayor probabilidad de que ocurra uno"
  - "Que el país acaba de tener superávit comercial"
  - "Que el país bajó su tasa de interés de referencia"
respuesta: "Un default reciente o una mayor probabilidad de que ocurra uno"

explicacion: |
  Es la lectura habitual de un cambio en la calificación crediticia de
  un país.
```

### 14 — Pagar el costo de la pérdida de confianza

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país que vuelve a pedir prestado después de un default suele pagar una tasa de interés más alta que antes, como consecuencia directa de la pérdida de confianza que generó ese default."

explicacion: |
  Es el costo futuro de haber entrado en default: no es gratis salir
  de un incumplimiento.
```

### 15 — Un default de deuda interna es menos común pero posible

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque es menos común que el default de deuda externa, un default (o canje forzoso) de deuda interna también puede ocurrir."

explicacion: |
  Es la aclaración explícita de la teoría: el default no es exclusivo
  de la deuda externa.
```

### 16 — Ordenar la secuencia de un default y su salida

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "orden"]

tipo: ordenar
enunciado: "Ordená esta secuencia de un default y su resolución."
opciones_explicitas:
  - "El país recupera acceso al crédito, generalmente a una tasa más alta que antes"
  - "El Estado negocia una reestructuración (quita y/o extensión de plazos) con sus acreedores"
  - "El Estado no puede cumplir un pago comprometido de su deuda"
  - "Se declara el default (cese de pagos)"
respuesta_orden: ["El Estado no puede cumplir un pago comprometido de su deuda", "Se declara el default (cese de pagos)", "El Estado negocia una reestructuración (quita y/o extensión de plazos) con sus acreedores", "El país recupera acceso al crédito, generalmente a una tasa más alta que antes"]

explicacion: |
  Es el ciclo típico completo: incumplimiento, default, negociación, y
  el costo futuro de haber pasado por eso.
```

### 17 — Por qué depende de los dos tipos de deuda

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Por qué este tema depende de entender tanto la deuda interna como la externa?"
tipo: mc
opciones_explicitas:
  - "Porque un default puede afectar a una, a la otra, o a ambas, con consecuencias y acreedores distintos en cada caso"
  - "Porque un default siempre afecta a las dos deudas exactamente igual"
  - "Porque la deuda interna y la externa son, en realidad, la misma cosa"
respuesta: "Porque un default puede afectar a una, a la otra, o a ambas, con consecuencias y acreedores distintos en cada caso"

explicacion: |
  Es la razón de la dependencia explicada al principio de la teoría.
```

### 18 — Litigios como riesgo específico de la deuda externa

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El riesgo de litigios en tribunales extranjeros por parte de acreedores que no aceptan una reestructuración es un riesgo específico de la deuda externa."

explicacion: |
  La deuda interna, al estar bajo jurisdicción del propio país, no
  tiene ese mismo riesgo de litigio en tribunales de otro país.
```

### 19 — Completar la definición de reestructuración

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "basico"
  tags: ["deuda_publica"]

tipo: completar
enunciado: "Completá: una reestructuración de deuda combina una ___ (pagar menos del monto original) con, muchas veces, una extensión de los plazos de pago."
respuestas_validas:
  - "quita"

explicacion: |
  Es el término central de una reestructuración.
```

### 20 — Cierre del Tronco 1 (contenido de este tema)

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un default es el cese de pagos de una deuda, que puede afectar a la deuda interna, la externa, o ambas, y que suele resolverse con una reestructuración negociada con los acreedores."

explicacion: |
  Es la idea central de todo el tema.
```

### 21 — Cierre general de la sub-rama de Economía Internacional

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Desde la balanza comercial hasta el default de deuda, toda esta sub-rama sigue el mismo hilo: cómo un país se relaciona económicamente con el resto del mundo, y qué puede salir bien o mal en esa relación."

explicacion: |
  Es el cierre conceptual de toda la sub-rama de Economía
  Internacional (`E33`-`E37`).
```
