# Examen jefe — Maestro de Contratos y Comercio

> Logro #188. Completaste el examen jefe integrando contabilidad, contratos inteligentes y ventaja comparativa. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **116 preguntas totales** en 5/5 secciones.

---

## Sección: cft-vs-tasa-nominal (23 preguntas)

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "basico"
  tags: ["cft", "vocabulario"]

enunciado: "¿Qué es la TNA (Tasa Nominal Anual)?"
tipo: mc
opciones_explicitas:
  - "La tasa de interés anual \"de lista\", sin tener en cuenta cómo capitaliza durante el año"
  - "El costo total real de un préstamo, incluidos seguros y comisiones"
  - "El monto final que hay que devolver en un crédito"
respuesta: "La tasa de interés anual \"de lista\", sin tener en cuenta cómo capitaliza durante el año"

explicacion: |
  La TNA es sólo el porcentaje anual nominal, previo a considerar el
  efecto de la capitalización.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "basico"
  tags: ["cft", "vocabulario"]

enunciado: "¿Qué es la TEA (Tasa Efectiva Anual)?"
tipo: mc
opciones_explicitas:
  - "El costo anual real de la tasa, considerando el efecto de la capitalización"
  - "La tasa que cobra el Estado sobre los intereses"
  - "Un promedio entre la TNA y el CFT"
respuesta: "El costo anual real de la tasa, considerando el efecto de la capitalización"

explicacion: |
  La TEA es lo que la TNA se convierte una vez que se tiene en cuenta el
  interés compuesto de la capitalización dentro del año.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "basico"
  tags: ["cft", "vocabulario"]

enunciado: "¿Qué es el CFT (Costo Financiero Total)?"
tipo: mc
opciones_explicitas:
  - "El costo final y real de un crédito: la TEA más comisiones, seguros e IVA sobre los intereses"
  - "Otro nombre para la TNA"
  - "El monto original prestado, sin intereses"
respuesta: "El costo final y real de un crédito: la TEA más comisiones, seguros e IVA sobre los intereses"

explicacion: |
  Es el número que el BCRA obliga a publicar en toda oferta de crédito
  en Argentina, justamente para poder comparar el costo real.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "basico"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La TNA es sólo la tasa anual nominal: no tiene en cuenta cómo se capitaliza el interés durante el año."

explicacion: |
  Por eso la TNA sola no alcanza para saber el costo real de un crédito.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "basico"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La TEA considera el efecto de la capitalización (interés compuesto) dentro del año, a diferencia de la TNA."

explicacion: |
  Es exactamente la aplicación de interés compuesto a la TNA con la
  frecuencia de capitalización del producto.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El CFT incluye, además de la TEA, comisiones administrativas, seguros obligatorios y el IVA que se cobra sobre los intereses."

explicacion: |
  Es lo que lo convierte en el costo REAL del crédito, no sólo la tasa
  de interés.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "calculo"]

variables:
  tna: random(20, 120)

respuesta: ((1 + tna / 100 / 12) ^ 12 - 1) * 100
tipo: input
tolerancia_abs: 0.2

enunciado: "Un préstamo tiene una TNA del {tna}%, con capitalización mensual (n = 12). ¿Cuál es la TEA aproximada, en porcentaje?"

pasos:
  - "TEA = (1 + {tna}/100/12)^12 - 1"

explicacion: |
  Se aplica la fórmula TEA = (1 + TNA/n)^n - 1, con n = 12 por ser
  mensual.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "comparacion"]

variables:
  tna: random(20, 120)

respuesta: (((1 + tna / 100 / 12) ^ 12 - 1) * 100 > tna)
tipo: vf

enunciado: "Con una TNA del {tna}% capitalizada mes a mes, ¿la TEA resultante es mayor que el {tna}% nominal?"

explicacion: |
  Cuando capitaliza más de una vez al año, la TEA siempre supera a la
  TNA — es el mismo efecto de "interés sobre interés" del tema anterior.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "avanzado"
  tags: ["cft", "calculo"]

variables:
  tna: random(20, 120)

respuesta: ((1 + tna / 100 / 4) ^ 4 - 1) * 100
tipo: input
tolerancia_abs: 0.2

enunciado: "Un plazo fijo tiene una TNA del {tna}%, con capitalización trimestral (n = 4). ¿Cuál es la TEA aproximada, en porcentaje?"

pasos:
  - "TEA = (1 + {tna}/100/4)^4 - 1"

explicacion: |
  Con menos capitalizaciones al año que en el caso mensual, la brecha
  entre TNA y TEA es más chica, pero sigue existiendo.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un producto capitaliza una sola vez al año (n = 1), la TNA y la TEA dan exactamente el mismo número."

explicacion: |
  Con n = 1, (1 + TNA/1)^1 - 1 es simplemente TNA — recién con n > 1
  aparece la diferencia.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "avanzado"
  tags: ["cft", "comparacion"]

variables:
  tna: random(20, 120)

respuesta: (((1 + tna / 100 / 12) ^ 12 - 1) > ((1 + tna / 100 / 4) ^ 4 - 1))
tipo: vf

enunciado: "Con la misma TNA del {tna}%, ¿capitalizar mes a mes (n = 12) da una TEA mayor que capitalizar trimestre a trimestre (n = 4)?"

explicacion: |
  A igual TNA, cuantas más veces capitaliza en el año, mayor es la TEA
  resultante.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para comparar el costo real de dos ofertas de crédito, hay que mirar el CFT de cada una, no la TNA."

explicacion: |
  La TNA no incluye comisiones ni seguros, así que dos créditos con la
  misma TNA pueden terminar costando distinto.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Dos préstamos con exactamente la misma TNA pueden tener un CFT distinto, si uno cobra más comisiones o seguros que el otro."

explicacion: |
  El CFT depende de todos los costos del crédito, no sólo de la tasa de
  interés.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La TNA suele ser el número más bajo de los tres (TNA, TEA, CFT), por eso a veces se destaca más en la publicidad, aunque el CFT sea el dato regulado por el BCRA para comparar ofertas."

explicacion: |
  No es ilegal mostrar la TNA, pero por regulación el CFT tiene que estar
  igual publicado — es el número que conviene mirar.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "avanzado"
  tags: ["cft", "calculo"]

variables:
  tna: random(20, 120)
  tea: ((1 + tna / 100 / 12) ^ 12 - 1) * 100
  costos_extra: random(2, 10)

respuesta: tea + costos_extra
tipo: input
tolerancia_abs: 0.2

enunciado: "Un préstamo tiene una TEA de {redondear(tea, 2)}% (con TNA del {tna}% capitalizada mes a mes). Sumando comisiones, seguros e IVA sobre intereses, agrega {costos_extra} puntos porcentuales más. ¿Cuál es el CFT aproximado?"

explicacion: |
  En este modelo simplificado, el CFT es la TEA más los puntos
  porcentuales de costos adicionales.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El CFT de un crédito siempre es mayor o igual a su TEA, nunca menor."

explicacion: |
  El CFT parte de la TEA y le suma costos adicionales (nunca los resta),
  así que como mínimo queda igual, y en la práctica casi siempre es
  mayor.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "avanzado"
  tags: ["cft"]

variables:
  tna: random(20, 120)
  tea: ((1 + tna / 100 / 12) ^ 12 - 1) * 100
  costos_extra: random(2, 10)
  cft: tea + costos_extra

tipo: completar
enunciado: "Un préstamo tiene un CFT de {redondear(cft, 2)}%, con {costos_extra} puntos porcentuales de costos adicionales sobre la TEA. Completá: ___ (TEA) = {redondear(cft, 2)} (CFT) - {costos_extra} (costos adicionales)."
respuestas_validas:
  - tea

explicacion: |
  Se despeja restando los costos adicionales del CFT.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "avanzado"
  tags: ["cft", "calculo"]

variables:
  tna: random(20, 120)
  tea: (1 + tna / 100 / 12) ^ 12 - 1

respuesta: tna
tipo: input
tolerancia_abs: 0.1

enunciado: "Un producto capitaliza mes a mes (n = 12) y tiene una TEA de {redondear(tea * 100, 2)}%. ¿Qué TNA tiene?"

pasos:
  - "TNA = n × (raíz-n-ésima(1 + TEA) - 1) = 12 × ({raiz(1 + tea, 12)} - 1)"

explicacion: |
  Se despeja la TNA de TEA = (1 + TNA/n)^n - 1 usando la raíz n-ésima:
  TNA = n × (raíz-n-ésima(1 + TEA) - 1).
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "basico"
  tags: ["cft", "orden"]

tipo: ordenar
enunciado: "Para un mismo crédito que capitaliza más de una vez al año y tiene costos adicionales, ordená estos tres números de menor a mayor."
opciones_explicitas:
  - "CFT"
  - "TNA"
  - "TEA"
respuesta_orden: ["TNA", "TEA", "CFT"]

explicacion: |
  La TNA es el número base; la TEA ya incluye la capitalización (es
  mayor o igual a la TNA); el CFT suma además los costos adicionales
  (es mayor o igual a la TEA).
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "verificacion"]

variables:
  tna: random(20, 120)
  correcto: ((1 + tna / 100 / 12) ^ 12 - 1) * 100
  error: uno_de([0, 0, 0, 3, -3])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.5)
tipo: vf

enunciado: "¿Está bien calculado esto? TNA del {tna}% con capitalización mensual, TEA resultante: {redondear(mostrado, 2)}%."

explicacion: |
  Se vuelve a calcular TEA = (1 + TNA/12)^12 - 1 y se compara con el
  valor mostrado.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "basico"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En Argentina, el BCRA obliga a las entidades financieras a publicar el CFT en toda oferta de crédito."

explicacion: |
  Es justamente para que cualquiera pueda comparar el costo real entre
  distintas ofertas, más allá de qué número destaque cada publicidad.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "intermedio"
  tags: ["cft", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La TNA de un producto cambia según qué tan seguido capitaliza (mensual, trimestral, anual)."

explicacion: |
  Es al revés: la TNA es fija (el número "de lista"); lo que cambia
  según la frecuencia de capitalización es la TEA que resulta de esa
  TNA.
```

```
metadata:
  materia: "economia"
  tema: "cft_vs_tasa_nominal"
  nivel: "basico"
  tags: ["cft", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La TNA es la tasa nominal sin capitalizar, la TEA ya incluye el efecto de la capitalización, y el CFT suma a la TEA los demás costos del crédito — por eso el CFT es el número que hay que mirar para comparar ofertas."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: comercio-internacional-ventaja-comparativa (21 preguntas)

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Qué explica la teoría de la ventaja comparativa?"
tipo: mc
opciones_explicitas:
  - "Por qué un país se especializa en producir ciertos bienes y comercia con otros países, en vez de producir todo por su cuenta"
  - "Cómo se calcula el tipo de cambio de una moneda"
  - "Cómo funciona el banco central de un país"
respuesta: "Por qué un país se especializa en producir ciertos bienes y comercia con otros países, en vez de producir todo por su cuenta"

explicacion: |
  Es la pregunta central que responde este tema.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Quién formuló la teoría de la ventaja comparativa, en 1817?"
tipo: mc
opciones_explicitas:
  - "David Ricardo"
  - "Adam Smith"
  - "John Maynard Keynes"
respuesta: "David Ricardo"

explicacion: |
  Es el economista que formuló esta teoría específica.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Qué es tener \"ventaja absoluta\" en la producción de un bien?"
tipo: mc
opciones_explicitas:
  - "Producirlo con menos horas de trabajo que otro país, en términos absolutos"
  - "Tener menor costo de oportunidad al producirlo, sin importar las horas totales"
  - "Ser el único país que produce ese bien en el mundo"
respuesta: "Producirlo con menos horas de trabajo que otro país, en términos absolutos"

explicacion: |
  Es la idea intuitiva (y limitada) que la ventaja comparativa viene a
  superar.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un país fuera mejor que otro produciendo TODOS los bienes en términos absolutos, la lógica de la ventaja absoluta sugeriría, incorrectamente, que no le conviene comerciar con nadie."

explicacion: |
  Es justamente el problema que Ricardo resolvió con el concepto de
  costo de oportunidad.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "En el contexto de la ventaja comparativa, ¿qué es el costo de oportunidad de producir un bien?"
tipo: mc
opciones_explicitas:
  - "Cuánto hay que dejar de producir de otro bien para producir una unidad más del primero"
  - "El precio en dólares de ese bien"
  - "El impuesto que paga ese bien al exportarse"
respuesta: "Cuánto hay que dejar de producir de otro bien para producir una unidad más del primero"

explicacion: |
  Es el concepto central que reemplaza a la comparación absoluta de
  horas.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Cuándo tiene un país \"ventaja comparativa\" en un bien?"
tipo: mc
opciones_explicitas:
  - "Cuando su costo de oportunidad de producir ese bien es MENOR que el de otro país"
  - "Cuando produce ese bien con menos horas en términos absolutos que otro país"
  - "Cuando es el único país que exporta ese bien"
respuesta: "Cuando su costo de oportunidad de producir ese bien es MENOR que el de otro país"

explicacion: |
  Es la definición central del tema: comparar costos de oportunidad,
  no horas absolutas.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "En el ejemplo clásico de Ricardo (Inglaterra y Portugal, tela y vino), ¿qué característica tiene Portugal en términos absolutos?"
tipo: mc
opciones_explicitas:
  - "Es absolutamente mejor produciendo las dos cosas (tela y vino), necesita menos horas para ambas"
  - "Es absolutamente peor produciendo las dos cosas"
  - "Sólo puede producir vino, no tela"
respuesta: "Es absolutamente mejor produciendo las dos cosas (tela y vino), necesita menos horas para ambas"

explicacion: |
  Es el punto de partida del ejemplo: Portugal gana en términos
  absolutos en ambos bienes.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "En el ejemplo clásico de Ricardo, aunque Portugal sea absolutamente mejor en todo, ¿quién termina teniendo ventaja comparativa en tela?"
tipo: mc
opciones_explicitas:
  - "Inglaterra, porque su costo de oportunidad de producir tela (en términos de vino) es menor que el de Portugal"
  - "Portugal, porque produce tela con menos horas en términos absolutos"
  - "Ninguno de los dos: la ventaja comparativa no aplica en este ejemplo"
respuesta: "Inglaterra, porque su costo de oportunidad de producir tela (en términos de vino) es menor que el de Portugal"

explicacion: |
  Es el resultado central y contraintuitivo del ejemplo: la ventaja
  comparativa no depende de quién es mejor en términos absolutos.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "calculo"]

variables:
  horas_vino: random(2, 8)
  multiplicador: uno_de([2, 3, 4])
  horas_tela: horas_vino * multiplicador

respuesta: horas_tela / horas_vino
tipo: input
tolerancia_abs: 0

enunciado: "En un país, producir una unidad de tela lleva {horas_tela} horas, y producir una unidad de vino lleva {horas_vino} horas. ¿Cuántas unidades de vino se sacrifican (costo de oportunidad) por producir una unidad de tela?"

explicacion: |
  Costo de oportunidad de la tela (en vino) = horas de tela / horas de
  vino.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "calculo"]

variables:
  horas_tela_pais1: random(50, 150)
  horas_vino_pais1: random(50, 150)
  horas_tela_pais2: random(50, 150)
  horas_vino_pais2: random(50, 150)

respuesta: (horas_tela_pais1 / horas_vino_pais1 < horas_tela_pais2 / horas_vino_pais2)
tipo: vf

enunciado: "País 1: {horas_tela_pais1} horas por tela, {horas_vino_pais1} horas por vino. País 2: {horas_tela_pais2} horas por tela, {horas_vino_pais2} horas por vino. ¿Tiene el País 1 ventaja comparativa en tela (menor costo de oportunidad de tela que el País 2)?"

explicacion: |
  Se compara el costo de oportunidad de tela (horas de tela / horas de
  vino) de cada país; el menor tiene la ventaja comparativa en tela.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría de la ventaja comparativa, si cada país se especializa en el bien donde tiene ventaja comparativa y comercian entre sí, los dos pueden terminar con más de ambos bienes que si cada uno hubiera intentado producir todo por su cuenta."

explicacion: |
  Es la conclusión central de la teoría: la especialización y el
  comercio generan una ganancia conjunta.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país muy desarrollado, con salarios altos, puede seguir teniendo ventaja comparativa en ciertos productos frente a un país con salarios mucho más bajos, porque lo que importa es el costo de oportunidad relativo, no el nivel absoluto de desarrollo."

explicacion: |
  Es una consecuencia directa de que la ventaja comparativa se define
  en términos relativos dentro de cada país, no en comparación
  absoluta de niveles de desarrollo.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Qué tipo de razonamiento comparte la ventaja comparativa con el \"punto de equilibrio\" de Administración?"
tipo: mc
opciones_explicitas:
  - "El de \"por qué esta decisión y no otra\", comparando costos relativos en vez de valores absolutos"
  - "Los dos calculan exactamente la misma fórmula matemática"
  - "No comparten ningún tipo de razonamiento"
respuesta: "El de \"por qué esta decisión y no otra\", comparando costos relativos en vez de valores absolutos"

explicacion: |
  Es la analogía que hace la teoría del MAPA para explicar por qué
  esta idea cruza con Administración.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "problema"]

enunciado: "Un país con mucha tierra fértil pero poca industria pesada exporta productos agrícolas e importa maquinaria, en vez de fabricar su propia maquinaria con mucho esfuerzo relativo. ¿Qué principio explica mejor esta decisión?"
tipo: mc
opciones_explicitas:
  - "Ventaja comparativa: le conviene especializarse donde su costo de oportunidad es menor"
  - "Devaluación de su moneda"
  - "Déficit de su balanza comercial"
respuesta: "Ventaja comparativa: le conviene especializarse donde su costo de oportunidad es menor"

explicacion: |
  Es una aplicación directa del concepto central del tema.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando se argumenta a favor del libre comercio diciendo que \"cada país debería producir lo que sabe hacer mejor, en términos relativos\", se está citando, en esencia, la ventaja comparativa."

explicacion: |
  Es la aplicación más habitual de esta teoría en el debate de
  política comercial.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "orden"]

tipo: ordenar
enunciado: "Ordená esta secuencia de razonamiento sobre la ventaja comparativa entre dos países."
opciones_explicitas:
  - "Los países comercian entre sí, terminando con más de ambos bienes que produciendo todo por su cuenta"
  - "Cada país se especializa en producir ese bien"
  - "Se calcula el costo de oportunidad de cada bien en cada país"
  - "Se identifica en qué bien tiene cada país el menor costo de oportunidad"
respuesta_orden: ["Se calcula el costo de oportunidad de cada bien en cada país", "Se identifica en qué bien tiene cada país el menor costo de oportunidad", "Cada país se especializa en producir ese bien", "Los países comercian entre sí, terminando con más de ambos bienes que produciendo todo por su cuenta"]

explicacion: |
  Es el proceso completo de razonamiento detrás de la teoría de la
  ventaja comparativa.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Cuál es la diferencia central entre \"ventaja absoluta\" y \"ventaja comparativa\"?"
tipo: mc
opciones_explicitas:
  - "La absoluta compara horas totales por unidad; la comparativa compara el costo de oportunidad relativo entre bienes"
  - "Son exactamente lo mismo, con nombres distintos"
  - "La comparativa sólo aplica quiénes tienen tipo de cambio fijo"
respuesta: "La absoluta compara horas totales por unidad; la comparativa compara el costo de oportunidad relativo entre bienes"

explicacion: |
  Es la distinción central de todo el tema.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el ejemplo clásico de Ricardo, Portugal termina con ventaja comparativa en vino, aunque sea absolutamente mejor que Inglaterra en ambos bienes."

explicacion: |
  Es el resultado complementario al de la tela (que quedaba en manos
  de Inglaterra).
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque la teoría de la ventaja comparativa se formuló en 1817, sigue siendo el argumento central que se usa hoy para explicar por qué los países se especializan y comercian entre sí."

explicacion: |
  Es una teoría económica clásica que sigue vigente en el debate
  actual sobre comercio internacional.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "basico"
  tags: ["comercio_internacional"]

tipo: completar
enunciado: "Completá: un país tiene ventaja comparativa en un bien cuando su costo de ___ (lo que sacrifica de otro bien) de producirlo es menor que el de otro país."
respuestas_validas:
  - "oportunidad"

explicacion: |
  Es el concepto central de todo el tema.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ventaja comparativa explica por qué a un país le conviene especializarse y comerciar según su costo de oportunidad relativo, incluso si otro país es absolutamente mejor produciendo todo."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: contabilidad-ambiental (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["calculos", "externalidades"]

variables:
  costo_externo: random(1000, 5000)
  costo_privado: random(2000, 8000)

respuesta: "{costo_privado + costo_externo}"
tipo: input

enunciado: "Una empresa tiene un costo privado de producción de {costo_privado} pesos y genera una externalidad negativa valorizada en {costo_externo} pesos. Según la contabilidad ambiental, ¿cuál es el costo económico total real de esta actividad?"

explicacion: |
  El costo económico total es la suma del costo privado (pagado por la empresa) más el costo externo (impuesto a la sociedad). Internalizar la externalidad implica reconocer esta suma como el costo real de la actividad.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["eficiencia", "calculos"]

variables:
  ingreso_bruto: random(100000, 200000)
  costo_operativo: random(40000, 60000)
  costo_ambiental: random(10000, 30000)

respuesta: "{ingreso_bruto - costo_operativo - costo_ambiental}"
tipo: input

enunciado: "Una empresa tiene un ingreso bruto de {ingreso_bruto}, costos operativos de {costo_operativo} y un costo ambiental internalizado de {costo_ambiental}. ¿Cuál es su beneficio económico real ajustado?"

explicacion: |
  El beneficio real se calcula restando tanto los costos operativos tradicionales como los costos ambientales internalizados. Esto muestra la verdadera sostenibilidad financiera de la actividad.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["carbono", "calculos"]

variables:
  emisiones_co2: random(100, 1000)
  precio_carbono: random(10, 50)

respuesta: "{emisiones_co2 * precio_carbono}"
tipo: input

enunciado: "Si una fábrica emite {emisiones_co2} toneladas de CO2 y el precio social del carbono es de {precio_carbono} pesos por tonelada, ¿cuál es el costo ambiental total de estas emisiones?"

explicacion: |
  El costo ambiental se calcula multiplicando la cantidad de emisiones por el precio social del carbono, que representa el daño económico estimado por cada unidad emitida.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["suelos", "recuperacion"]

variables:
  costo_recuperacion: random(10000, 50000)
  vida_util: random(5, 10)

respuesta: "{costo_recuperacion / vida_util}"
tipo: input

enunciado: "Si el costo total de recuperación de un suelo degradado es de {costo_recuperacion} pesos y la vida útil estimada de la recuperación es de {vida_util} años, ¿cuál es el costo anualizado?"

explicacion: |
  El costo anualizado permite distribuir el gasto de recuperación a lo largo del tiempo, facilitando su comparación con los beneficios anuales de la actividad productiva que causó el daño.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["eficiencia", "recursos"]

variables:
  valor_produccion: random(100000, 300000)
  consumo_recursos: random(1000, 5000)

respuesta: "{valor_produccion / consumo_recursos}"
tipo: input

enunciado: "Si una empresa genera {valor_produccion} pesos de valor con {consumo_recursos} unidades de recurso natural, ¿cuál es su eficiencia de recursos (valor por unidad de recurso)?"

explicacion: |
  La eficiencia de recursos mide cuánta valor económico se genera por cada unidad de recurso consumido. Un valor más alto indica una gestión más sostenible y eficiente.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["daños", "estimacion"]

variables:
  daño_directo: random(5000, 20000)
  daño_indirecto: random(10000, 40000)

respuesta: "{daño_directo + daño_indirecto}"
tipo: input

enunciado: "Si un derrame causa un daño directo de {daño_directo} y un daño indirecto (pérdida de turismo, etc.) de {daño_indirecto}, ¿cuál es el costo total del incidente?"

explicacion: |
  El costo total de un incidente ambiental incluye tanto los daños directos (limpieza, multas) como los indirectos (pérdida de ingresos para otros sectores, salud pública), reflejando el impacto completo.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["externalidades", "costos"]

variables:
  a: random(10, 50)
  b: random(1, 10)
  costo_total: a + b

respuesta: "{costo_total}"
tipo: input

enunciado: "Si una fábrica genera un beneficio privado de {a} millones pero traslada un costo de salud pública de {b} millones a la comunidad, ¿cuál es el costo social total no internalizado inicialmente?"

explicacion: |
  La externalidad negativa traslada el costo a terceros. El costo social total es la suma del beneficio privado (que no refleja el daño) más el costo del daño. En este contexto de cálculo simple de impacto, sumamos las magnitudes dadas.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["riesgo", "sostenibilidad"]

variables:
  a: random(1, 5)
  b: random(1, 5)

respuesta: "{max(a, b)}"
tipo: input

enunciado: "Si ignoramos los costos ocultos, el riesgo financiero asociado al cambio climático se subestima. Si el riesgo directo es {a} y el indirecto es {b}, ¿cuál es el valor máximo de riesgo individual considerado en la evaluación básica?"

explicacion: |
  Se pide el máximo de dos valores de riesgo hipotéticos para evaluar la comprensión de la magnitud del impacto.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["calculos", "emisiones"]

variables:
  a: random(100, 500)
  b: random(100, 500)
  c: random(100, 500)
  promedio: redondear((a + b + c) / 3, 2)

respuesta: "{promedio}"
tipo: input

enunciado: "Si una empresa emitió {a} toneladas en Q1, {b} en Q2 y {c} en Q3, ¿cuál fue la emisión promedio trimestral?"

explicacion: |
  Se calcula el promedio aritmético de las emisiones para entender la magnitud del impacto ambiental anual.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["costos", "suelos"]

variables:
  a: random(10, 100)
  b: random(1, 10)
  costo: a * b

respuesta: "{costo}"
tipo: input

enunciado: "Si el costo de recuperación por hectárea es de {a} mil pesos y se degradaron {b} hectáreas, ¿cuál es el costo total de recuperación?"

explicacion: |
  Multiplicación simple para estimar el costo financiero de la restauración ambiental mencionada en la teoría.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["precios", "GEE"]

variables:
  a: random(5, 20)
  b: random(100, 1000)
  costo_total: a * b

respuesta: "{costo_total}"
tipo: input

enunciado: "Si el precio por tonelada de CO2 es de {a} dólares y la empresa emite {b} toneladas, ¿cuál es el costo total de las emisiones?"

explicacion: |
  Cálculo del costo interno que la empresa debería asumir si internalizara el costo de las emisiones.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["costos", "limpieza"]

variables:
  a: random(50, 200)
  b: random(10, 50)
  total: a + b

respuesta: "{total}"
tipo: input

enunciado: "Si el costo de limpieza del río es {a} millones y el de salud pública es {b} millones, ¿cuál es el costo total trasladado a la comunidad?"

explicacion: |
  Suma de los costos externos generados por la contaminación, que la contabilidad ambiental busca internalizar.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["huella_carbono", "calculos"]

variables:
  a: random(10, 50)
  b: random(10, 50)
  c: random(10, 50)
  total: a + b + c

respuesta: "{total}"
tipo: input

enunciado: "Si las fuentes fijas emiten {a}, las móviles {b} y los residuos {c}, ¿cuál es la huella total de emisiones?"

explicacion: |
  Suma de las emisiones directas e indirectas para determinar el impacto ambiental total.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["costo_oportunidad", "decisiones"]

variables:
  a: random(100, 500)
  b: random(10, 50)
  ratio: redondear(a / b, 2)

respuesta: "{ratio}"
tipo: input

enunciado: "Si el beneficio privado es {a} y el costo ambiental es {b}, ¿cuál es la relación beneficio/costo ambiental?"

explicacion: |
  Cálculo de la relación para evaluar la eficiencia económica ignorando el impacto ambiental.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["capital_natural", "recursos"]

variables:
  recurso: "uno_de(['agua potable', 'aire limpio', 'fertilidad del suelo'])"

respuesta: verdadero
tipo: vf

enunciado: "El {recurso} es considerado un bien gratuito e infinito en los modelos económicos tradicionales, pero tiene un valor económico real en la contabilidad ambiental."

explicacion: |
  Falso en la teoría moderna/ambiental. La contabilidad ambiental sostiene que estos recursos tienen valor económico real y no son infinitos, por lo que deben ser cuantificados.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["internalizacion", "mecanismos"]

variables:
  agente: "uno_de(['quien contamina', 'el consumidor', 'el estado'])"

respuesta: "quien contamina"
tipo: completar

enunciado: "El principio de 'quien contamina paga' busca que el costo de la degradación ambiental sea asumido por {agente}."

respuestas_validas:
  - "quien contamina"
  - "el contaminador"

explicacion: |
  La internalización de costos implica que el agente que genera la externalidad negativa debe asumir el costo económico del daño causado.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["servicios_ecosistemicos", "valoracion"]

variables:
  valor_polinizacion: random(10000, 20000)
  valor_purificacion_agua: random(5000, 10000)
  porcentaje_perdida: uno_de([0.1, 0.2, 0.3])

respuesta: redondear((valor_polinizacion + valor_purificacion_agua) * porcentaje_perdida, 0)
tipo: input

enunciado: "Si el valor anual de los servicios de polinización es {valor_polinizacion} y de purificación de agua es {valor_purificacion_agua}, y un proyecto destruye el {porcentaje_perdida} de estos servicios, ¿cuál es el costo económico de la pérdida?"

explicacion: |
  Se calcula sumando los valores de los servicios ecosistémicos y aplicando el porcentaje de daño causado por la actividad humana.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["externalidades", "definicion"]

variables:
  tipo_ext: "una externalidad negativa"

respuesta: verdadero
tipo: vf

enunciado: "Una {tipo_ext} ocurre cuando una actividad económica afecta a terceros sin compensación monetaria."

explicacion: |
  Correcto. Las externalidades negativas son costos impuestos a terceros que no figuran en los precios de mercado.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["sostenibilidad", "gestion"]

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad ambiental permite tomar decisiones que consideren la sostenibilidad futura, no solo la rentabilidad inmediata."

explicacion: |
  Correcto. Al integrar variables ecológicas, se evalúa el impacto a largo plazo de las decisiones económicas.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["eficiencia", "recursos"]

variables:
  input_total: random(1000, 5000)
  output_util: random(600, 4000)

respuesta: redondear((output_util / input_total) * 100, 2)
tipo: input

enunciado: "Si una empresa utiliza {input_total} unidades de recurso para generar {output_util} unidades de producto útil, ¿cuál es el porcentaje de eficiencia de uso?"

explicacion: |
  La eficiencia se calcula como (producto útil / insumo total) * 100.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["salud", "externalidades"]

respuesta: verdadero
tipo: vf

enunciado: "La contaminación industrial puede generar costos de salud pública que deben ser considerados en la contabilidad ambiental."

explicacion: |
  Correcto. Los impactos en la salud de la comunidad son externalidades negativas que tienen un costo económico.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["incentivos", "practicas_limpias"]

respuesta: verdadero
tipo: vf

enunciado: "Asignar un precio a la contaminación crea incentivos económicos para favorecer prácticas más limpias."

explicacion: |
  Correcto. Al internalizar el costo, las empresas tienen un incentivo financiero para reducir su impacto ambiental.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["sensibilidad", "riesgo"]

variables:
  costo_base: random(10000, 50000)
  factor_riesgo: uno_de([1.1, 1.2, 1.5, 2.0])

respuesta: redondear(costo_base * factor_riesgo, 0)
tipo: input

enunciado: "Si el costo base de un proyecto es {costo_base} y se aplica un factor de riesgo ambiental del {factor_riesgo}, ¿cuál es el costo ajustado por riesgo?"

explicacion: |
  El costo ajustado se obtiene multiplicando el costo base por el factor de riesgo ambiental seleccionado.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["agua", "costos"]

variables:
  litros_usados: random(1000, 10000)
  costo_por_litro: random(0.1, 1.0)

respuesta: redondear(litros_usados * costo_por_litro, 2)
tipo: input

enunciado: "Si una industria utiliza {litros_usados} litros de agua y el costo económico del recurso es {costo_por_litro} por litro, ¿cuál es el costo total del agua utilizada?"

explicacion: |
  El costo total se calcula multiplicando el volumen de agua por su costo económico unitario.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["visibilidad", "transparencia"]

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad ambiental busca dar visibilidad a los costos ocultos que los modelos tradicionales ignoran."

explicacion: |
  Correcto. Su objetivo es revelar el verdadero impacto económico de las actividades productivas sobre el medio ambiente.
```

## Sección: contabilidad-como-sistema-de-informacion (26 preguntas)

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["sistema_informacion", "definicion"]

variables:
  analogia: uno_de(["sistema nervioso", "corazón", "estómago"])

respuesta: "sistema nervioso"
tipo: completar

enunciado: "En la analogía corporativa, la contabilidad funciona como el {analogia} de la empresa, llevando información vital a quienes toman decisiones."

explicacion: |
  La contabilidad se compara con el sistema nervioso y circulatorio porque transporta datos financieros cruciales para la "salud" y decisión empresarial.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["objetivo", "informacion"]

variables:
  dato_crudo: random(1, 100)
  conocimiento: redondear(dato_crudo / 10, 1)

respuesta: "conocimiento"
tipo: completar

enunciado: "La contabilidad transforma datos crudos como ventas o compras en {conocimiento} útil para la gestión."

explicacion: |
  El proceso clave es la transformación de datos operativos en información procesada que permite la toma de decisiones.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["ciclo_comercial", "comercio"]

variables:
  ejemplo: uno_de(["supermercado", "fábrica de autos", "panadería"])
  accion: "compra y venta de bienes ya terminados"

respuesta: "compra y venta de bienes ya terminados"
tipo: completar

enunciado: "En el ciclo comercial, típico de empresas como {ejemplo}, la actividad central es la {accion}."

explicacion: |
  El ciclo comercial implica intermediación: comprar productos terminados y venderlos sin alterar su forma física.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["costos", "industrial"]

variables:
  costo1: "materiales directos"
  costo2: "mano de obra directa"
  costo3: "gastos generales de fabricación"

respuesta: "gastos generales de fabricación"
tipo: completar

enunciado: "La contabilidad industrial rastrea materiales directos, mano de obra directa y {costo3}."

explicacion: |
  Los tres componentes esenciales del costo de producción son materiales, mano de obra y gastos indirectos o generales.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["informes", "balance"]

variables:
  informe: "Balance General"

respuesta: "Balance General"
tipo: completar

enunciado: "Uno de los principales informes que actúan como 'informes médicos' de la compañía es el {informe}."

explicacion: |
  El Balance General muestra la situación patrimonial (activos, pasivos y patrimonio) en un momento dado.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["informes", "resultados"]

variables:
  informe: "Estado de Resultados"

respuesta: "Estado de Resultados"
tipo: completar

enunciado: "El {informe} muestra la capacidad de generar ganancias o pérdidas en un período."

explicacion: |
  El Estado de Resultados (o de Ganancias y Pérdidas) resume ingresos y egresos del periodo.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["comercio", "inventario"]

variables:
  foco: "control de inventarios"

respuesta: "control de inventarios"
tipo: completar

enunciado: "En el ciclo comercial, la contabilidad se centra en el {foco} de mercadería."

explicacion: |
  Para los comerciantes, el manejo preciso del stock es vital para calcular el margen de ganancia.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["ejemplos", "industria"]

variables:
  ejemplo: uno_de(["fábrica de muebles", "supermercado", "agencia de viajes"])

respuesta: "fábrica de muebles"
tipo: completar

enunciado: "Un ejemplo clásico de ciclo industrial es una {ejemplo}."

explicacion: |
  Las fábricas transforman madera en muebles, requiriendo contabilidad de costos compleja.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["ejemplos", "comercio"]

variables:
  ejemplo: uno_de(["tienda de ropa", "planta de alimentos", "taller mecánico"])

respuesta: "tienda de ropa"
tipo: completar

enunciado: "Un ejemplo clásico de ciclo comercial es una {ejemplo}."

explicacion: |
  Las tiendas de ropa compran prendas terminadas y las venden, sin manufacturarlas.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["definicion", "sistema_informacion"]

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad se define fundamentalmente como un sistema de información diseñado para captar, procesar y comunicar datos económicos, más que como un simple conjunto de cálculos numéricos."

explicacion: |
  Correcto. La contabilidad funciona como el 'sistema nervioso' de la empresa, transformando datos crudos en información útil para la toma de decisiones.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["clasificacion", "ciclo_industrial"]

variables:
  caso: uno_de(["fabrica_de_muebles", "planta_de_alimentos", "taller_de_autos"])

respuesta: verdadero
tipo: vf

enunciado: "Una {caso} opera bajo el ciclo industrial porque transforma materias primas en productos terminados."

explicacion: |
  Correcto. La transformación física del producto es la marca distintiva del ciclo industrial frente al comercial.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["gastos", "industrial"]

respuesta: verdadero
tipo: vf

enunciado: "El alquiler de un galpón de producción se considera un gasto general de fabricación en el ciclo industrial."

explicacion: |
  Correcto. Los gastos indirectos necesarios para la producción, como el alquiler de la fábrica, son gastos generales.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["materia_prima", "industrial"]

variables:
  materia: uno_de(["madera", "cuero", "harina"])

respuesta: verdadero
tipo: vf

enunciado: "{materia} es un ejemplo de materia prima directa en una fábrica de muebles."

explicacion: |
  La madera es el insumo principal que se transforma en el producto final en una carpintería.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["analogia", "comunicacion"]

respuesta: verdadero
tipo: vf

enunciado: "En la analogía, la contabilidad también funciona como el sistema circulatorio, distribuyendo la información a los stakeholders."

explicacion: |
  La analogía completa incluye el sistema nervioso (captación) y circulatorio (distribución) de la información.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["accountability", "ética"]

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad facilita la rendición de cuentas (accountability) a dueños e inversores."

explicacion: |
  Permite verificar que los recursos se usen conforme a lo esperado y reportar resultados reales.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["ejemplo", "industrial"]

variables:
  planta: uno_de(["planta_de_alimentos", "fábrica_de_textiles", "fundición"])

respuesta: verdadero
tipo: vf

enunciado: "{planta} es un ejemplo de entidad que opera en el ciclo industrial."

explicacion: |
  Estas plantas transforman materias primas en productos finales mediante procesos productivos.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["transparencia", "confianza"]

respuesta: verdadero
tipo: vf

enunciado: "La transparencia financiera promovida por la contabilidad ayuda a atraer socios e inversores."

explicacion: |
  Los inversores confían en empresas con informes claros y auditables.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["definicion", "sistema_informacion"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad se define fundamentalmente como un sistema de información diseñado para captar, procesar y comunicar datos económicos, más que como un mero conjunto de cálculos numéricos."

explicacion: |
  La contabilidad es el sistema nervioso de la empresa. Su función principal es transformar datos crudos en información útil para la toma de decisiones, asegurando transparencia y rendición de cuentas.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["analogia", "funcion"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "En la analogía propuesta, la contabilidad funciona como el sistema nervioso y circulatorio de la empresa, llevando información vital sobre su salud financiera a los decisores."

explicacion: |
  Sin este flujo de información, dueños e inversores navegarían a ciegas. La contabilidad permite saber si hay ganancias, cuánto se debe y cómo se usan los recursos.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La diferencia estructural clave entre ciclo comercial e industrial es la existencia de un proceso de transformación de materias primas en el industrial."

explicacion: |
  El comercial solo mueve bienes terminados. El industrial los crea, lo que exige un sistema de costos más complejo.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["transparencia"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad es la herramienta básica para la transparencia y la rendición de cuentas en el mundo de los negocios."

explicacion: |
  Permite a los externos (inversores, bancos) y internos verificar el estado real de la organización y la gestión de los recursos.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["complejidad"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad del ciclo industrial es más compleja que la del ciclo comercial debido al rastreo de tres tipos de costos."

explicacion: |
  La necesidad de imputar costos indirectos y calcular el costo de producción hace que el sistema contable industrial sea más robusto y detallado.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["impacto"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La claridad en los informes contables determina la capacidad de la empresa para conseguir créditos y atraer socios."

explicacion: |
  Los terceros externos confían en la información contable para evaluar el riesgo y la solvencia de la empresa antes de prestar dinero o invertir.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["consecuencias"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "Sin el sistema de información contable, los dueños e inversores navegarían a ciegas respecto a la salud financiera."

explicacion: |
  La falta de información impide detectar problemas a tiempo, optimizar recursos o justificar la gestión ante los stakeholders.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["estructura_costos"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "En el ciclo industrial, la diferencia clave es la necesidad de rastrear materiales directos, mano de obra y gastos generales."

explicacion: |
  Esta triple estructura de costos es lo que distingue contablemente a la industria del comercio puro.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["definicion"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad NO es simplemente una obligación tributaria, sino un sistema de información clave."

explicacion: |
  Aunque tiene fines fiscales, su esencia es la gestión interna y la comunicación externa de la realidad económica de la empresa.
```

## Sección: contratos-inteligentes (21 preguntas)

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un contrato inteligente (smart contract)?"
tipo: mc
opciones_explicitas:
  - "Un programa que corre sobre una blockchain, con reglas \"si pasa X, entonces hacé Y\", que se ejecuta automáticamente"
  - "Un documento en PDF firmado digitalmente"
  - "Un tipo especial de wallet"
respuesta: "Un programa que corre sobre una blockchain, con reglas \"si pasa X, entonces hacé Y\", que se ejecuta automáticamente"

explicacion: |
  Es la definición central del tema.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Cuál es la diferencia principal entre un contrato tradicional en papel y un contrato inteligente?"
tipo: mc
opciones_explicitas:
  - "El tradicional necesita que un tercero (juez, tribunal) lo haga cumplir; el inteligente se ejecuta solo, automáticamente"
  - "El contrato inteligente no tiene ninguna condición \"si-entonces\""
  - "No hay ninguna diferencia real entre los dos"
respuesta: "El tradicional necesita que un tercero (juez, tribunal) lo haga cumplir; el inteligente se ejecuta solo, automáticamente"

explicacion: |
  Es la ventaja central: elimina la necesidad de reclamar activamente
  el cumplimiento.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un contrato inteligente usa la misma lógica \"si-entonces\" (condicional) que existe en cualquier lenguaje de programación, sólo que corre distribuido en la blockchain."

explicacion: |
  No hay ninguna lógica nueva: es un condicional de programación
  común, ejecutado en un lugar distinto.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "problema"]

enunciado: "Un comprador deposita dinero en un contrato inteligente, que lo libera al vendedor recién cuando el comprador confirma haber recibido el producto. ¿Quién tiene el control de liberar ese dinero antes de tiempo?"
tipo: mc
opciones_explicitas:
  - "Ninguno de los dos: sólo el código del contrato puede liberarlo, y sólo cuando se cumple la condición"
  - "El vendedor, en cualquier momento"
  - "El comprador, en cualquier momento"
respuesta: "Ninguno de los dos: sólo el código del contrato puede liberarlo, y sólo cuando se cumple la condición"

explicacion: |
  Es justamente el punto: ninguna de las partes controla la ejecución,
  sólo la condición programada la dispara.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué información puede ver un contrato inteligente, por su cuenta, sin ninguna ayuda externa?"
tipo: mc
opciones_explicitas:
  - "Sólo información que ya está dentro de la blockchain"
  - "Cualquier información del mundo real, sin restricciones"
  - "Sólo el saldo de la wallet de su creador"
respuesta: "Sólo información que ya está dentro de la blockchain"

explicacion: |
  No tiene forma nativa de saber qué pasa fuera de la blockchain.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un \"oráculo\", en el contexto de los contratos inteligentes?"
tipo: mc
opciones_explicitas:
  - "Un servicio externo que trae un dato del mundo real y lo inyecta en la blockchain para que un contrato lo pueda usar"
  - "Otro nombre para la clave privada de una wallet"
  - "El nombre técnico del creador de un contrato inteligente"
respuesta: "Un servicio externo que trae un dato del mundo real y lo inyecta en la blockchain para que un contrato lo pueda usar"

explicacion: |
  Es el puente entre el mundo real (fuera de la blockchain) y el
  contrato inteligente (que sólo ve datos dentro de ella).
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un oráculo informa mal un dato del mundo real, el contrato inteligente ejecuta la acción igual, aunque el dato real haya sido otro."

explicacion: |
  El contrato confía ciegamente en lo que le informa el oráculo: es su
  punto más débil.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "problema"]

enunciado: "Un seguro de vuelo automático paga a un pasajero apenas se confirma que su vuelo se retrasó más de 3 horas. ¿Qué necesita el contrato inteligente para saber que el vuelo se retrasó?"
tipo: mc
opciones_explicitas:
  - "Un oráculo que le informe ese dato del mundo real"
  - "Nada especial: lo sabe automáticamente sin ayuda externa"
  - "Que el propio pasajero le escriba el código de la aerolínea"
respuesta: "Un oráculo que le informe ese dato del mundo real"

explicacion: |
  El retraso de un vuelo es un dato del mundo real, fuera de la
  blockchain, así que hace falta un oráculo para traerlo.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué significa que un contrato inteligente sea, en general, \"inmutable\" una vez publicado?"
tipo: mc
opciones_explicitas:
  - "Que su código no se puede modificar después, ni siquiera por quien lo creó"
  - "Que nunca puede tener errores de programación"
  - "Que sólo lo puede usar una persona a la vez"
respuesta: "Que su código no se puede modificar después, ni siquiera por quien lo creó"

explicacion: |
  Es lo que garantiza que ninguna parte lo altere a su favor después
  de acordado.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un contrato inteligente tiene un error de programación, ese error también queda fijo para siempre y se ejecuta igual que si fuera la regla correcta."

explicacion: |
  Es la contracara de la inmutabilidad: protege de manipulación
  externa, pero no corrige errores propios.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un contrato inteligente elimina la necesidad de un intermediario que obligue a cumplir el acuerdo, porque el cumplimiento está en el propio código."

explicacion: |
  Es la ventaja central del mecanismo: el código reemplaza al tercero
  que hace cumplir un contrato tradicional.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "problema"]

enunciado: "En un contrato de vesting que libera tokens automáticamente cada mes sin que nadie apriete un botón, ¿cuál es la \"condición\" (el \"si\") de la regla?"
tipo: mc
opciones_explicitas:
  - "Que haya pasado un mes desde la última liberación"
  - "Que el dueño de los tokens los pida expresamente"
  - "Que el precio del token suba"
respuesta: "Que haya pasado un mes desde la última liberación"

explicacion: |
  El paso del tiempo es la condición programada; la liberación
  automática es la acción que dispara.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos del flujo de un contrato inteligente de depósito en garantía (escrow)."
opciones_explicitas:
  - "El contrato libera automáticamente el dinero al vendedor"
  - "El contrato verifica que se cumplió la condición programada"
  - "El comprador deposita el dinero en el contrato"
  - "El comprador confirma que recibió el producto"
respuesta_orden: ["El comprador deposita el dinero en el contrato", "El comprador confirma que recibió el producto", "El contrato verifica que se cumplió la condición programada", "El contrato libera automáticamente el dinero al vendedor"]

explicacion: |
  Cada paso habilita al siguiente: sin depósito no hay nada que
  liberar, sin confirmación no se cumple la condición.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al correr sobre una blockchain pública, el código de un contrato inteligente puede ser revisado por cualquiera antes de interactuar con él."

explicacion: |
  Es una consecuencia directa de correr sobre una red pública y
  transparente.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "Un contrato inteligente elimina la necesidad de confiar en un juez o tribunal para hacerlo cumplir. ¿En qué SÍ hay que confiar igual, cuando el contrato depende de un dato del mundo real?"
tipo: mc
opciones_explicitas:
  - "En que el oráculo que le informa ese dato sea confiable"
  - "En nada: un contrato inteligente nunca depende de confiar en nadie"
  - "En el banco central del país donde vive el comprador"
respuesta: "En que el oráculo que le informa ese dato sea confiable"

explicacion: |
  El oráculo reintroduce un punto de confianza que el resto del
  sistema había eliminado.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "¿Cuál es la relación entre un contrato inteligente y una blockchain?"
tipo: mc
opciones_explicitas:
  - "El contrato inteligente es un programa que corre SOBRE una blockchain, usando su misma infraestructura descentralizada"
  - "Son exactamente lo mismo, dos nombres para una sola cosa"
  - "La blockchain es un tipo de contrato inteligente"
respuesta: "El contrato inteligente es un programa que corre SOBRE una blockchain, usando su misma infraestructura descentralizada"

explicacion: |
  La blockchain es la base; el contrato inteligente es una aplicación
  que se construye encima de ella.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un contrato inteligente puede funcionar entre dos partes que no se conocen ni confían entre sí, porque la confianza está puesta en el código, no en la otra persona."

explicacion: |
  Es una de las ventajas centrales: reemplaza la confianza personal
  por confianza en un código verificable.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "basico"
  tags: ["defi"]

tipo: completar
enunciado: "Completá: un contrato inteligente ejecuta la regla \"si ___ (se cumple la condición), entonces ocurre la acción\", de forma automática."
respuestas_validas:
  - "pasa x"
  - "se cumple x"
  - "se cumple la condición"

explicacion: |
  Es la estructura básica de cualquier contrato inteligente.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "problema"]

enunciado: "En el seguro de vuelo automático, ¿el pasajero tiene que reclamar activamente para cobrar, como en un seguro tradicional?"
tipo: mc
opciones_explicitas:
  - "No: el contrato paga automáticamente en cuanto el oráculo confirma el retraso"
  - "Sí: siempre hay que llenar un formulario de reclamo"
  - "Sí, pero sólo si el retraso fue de más de 24 horas"
respuesta: "No: el contrato paga automáticamente en cuanto el oráculo confirma el retraso"

explicacion: |
  Es la diferencia central frente a un seguro tradicional: se ejecuta
  solo, sin reclamo.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un token que se libera de a poco con el paso del tiempo (vesting) es un ejemplo de contrato inteligente que se ejecuta sin que nadie tenga que intervenir manualmente cada vez."

explicacion: |
  El paso del tiempo es la condición; la liberación periódica es la
  acción automática.
```

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un contrato inteligente es una regla \"si-entonces\" escrita en código, que corre sobre una blockchain y se ejecuta sola, sin intermediario — con el límite de que sólo ve datos del mundo real a través de un oráculo."

explicacion: |
  Es la idea central de todo el tema.
```
