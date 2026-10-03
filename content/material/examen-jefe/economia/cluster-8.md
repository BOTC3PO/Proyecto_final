# Examen jefe — [PENDIENTE #773]

> Logro #773. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **108 preguntas totales** en 5/5 secciones.

---

## Sección: balanza-comercial (21 preguntas)

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

## Sección: recibo-de-sueldo/general (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

enunciado: "¿Qué es el sueldo básico?"
tipo: mc
opciones_explicitas:
  - "El monto acordado en el contrato o convenio, antes de cualquier ajuste"
  - "Lo que efectivamente se cobra al final"
  - "El total de los descuentos"
respuesta: "El monto acordado en el contrato o convenio, antes de cualquier ajuste"

explicacion: |
  Es el punto de partida, antes de sumar adicionales o restar
  descuentos.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

enunciado: "¿Qué es el sueldo bruto?"
tipo: mc
opciones_explicitas:
  - "El básico más los adicionales, antes de descontar nada"
  - "Lo que efectivamente se cobra"
  - "Sólo los descuentos"
respuesta: "El básico más los adicionales, antes de descontar nada"

explicacion: |
  Bruto = Básico + Adicionales.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

enunciado: "¿Qué es el sueldo neto?"
tipo: mc
opciones_explicitas:
  - "Lo que efectivamente se cobra, después de los descuentos"
  - "El monto acordado en el contrato"
  - "El bruto sin ningún ajuste"
respuesta: "Lo que efectivamente se cobra, después de los descuentos"

explicacion: |
  Neto = Bruto − Descuentos.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  basico: random(20, 90) * 1000
  adicional: random(2, 20) * 1000

respuesta: basico + adicional
tipo: input
tolerancia_abs: 0

enunciado: "El básico es ${basico} y los adicionales suman ${adicional}. ¿Cuál es el sueldo bruto?"

explicacion: |
  Se suma el básico más los adicionales.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(30, 150) * 1000
  descuentos: random(3, 25) * 1000

respuesta: bruto - descuentos
tipo: input
tolerancia_abs: 0

enunciado: "El sueldo bruto es ${bruto} y los descuentos suman ${descuentos}. ¿Cuál es el sueldo neto?"

explicacion: |
  Se resta el total de descuentos al bruto.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(30, 150) * 1000
  neto: bruto - random(3, 25) * 1000

respuesta: bruto - neto
tipo: input
tolerancia_abs: 0

enunciado: "El sueldo bruto es ${bruto} y el neto es ${neto}. ¿Cuánto suman los descuentos?"

explicacion: |
  Descuentos = Bruto − Neto (la misma resta, mirada al revés).
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(30, 150) * 1000
  porcentaje: uno_de([5, 10, 15, 20])

respuesta: bruto * porcentaje / 100
tipo: input
tolerancia_abs: 0.01

enunciado: "El sueldo bruto es ${bruto} y un descuento puntual es del {porcentaje}%. ¿Cuánto es ese descuento en pesos?"

explicacion: |
  Se calcula el porcentaje del bruto, igual que cualquier cálculo de
  porcentaje.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  basico: random(20, 90) * 1000
  antiguedad: random(1, 10) * 1000
  presentismo: random(1, 8) * 1000

respuesta: basico + antiguedad + presentismo
tipo: input
tolerancia_abs: 0

enunciado: "Básico ${basico}, más antigüedad ${antiguedad}, más presentismo ${presentismo}. ¿Cuál es el sueldo bruto?"

explicacion: |
  Se suman todos los componentes: básico y cada adicional.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El sueldo bruto es la suma del básico más todos los adicionales."

explicacion: |
  Es la fórmula central del primer paso del recibo.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El sueldo neto es el bruto menos todos los descuentos."

explicacion: |
  Es la fórmula central del segundo paso del recibo.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El sueldo neto nunca puede ser mayor que el sueldo bruto."

explicacion: |
  Los descuentos restan (o, como mucho, no restan nada): el neto nunca
  supera al bruto.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando alguien dice \"gano tanto por mes\", casi siempre se refiere al sueldo neto (lo que ve reflejado en su cuenta)."

explicacion: |
  El bruto es más el número que figura en ofertas de trabajo o
  negociaciones, no el que la gente usa en la conversación cotidiana.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo"]

variables:
  bruto: random(30, 150) * 1000
  descuentos: random(3, 25) * 1000
  correcto: bruto - descuentos

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - bruto + descuentos
  - descuentos - bruto

enunciado: "Bruto ${bruto}, descuentos ${descuentos}. ¿Cuál es el neto?"

explicacion: |
  Las otras opciones suman en vez de restar, o restan al revés.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "verificacion"]

variables:
  bruto: random(30, 150) * 1000
  descuentos: random(3, 25) * 1000
  correcto: bruto - descuentos
  error: uno_de([0, 0, 0, 1000, -1000])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien calculado esto? Bruto ${bruto}, descuentos ${descuentos}, neto ${mostrado}."

explicacion: |
  Se vuelve a restar y se compara.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo"]

variables:
  basico: random(20, 90) * 1000
  adicional: random(2, 20) * 1000
  bruto: basico + adicional

tipo: completar
enunciado: "Completá: ___ (básico) + ${adicional} (adicionales) = ${bruto} (bruto)."
respuestas_validas:
  - basico

explicacion: |
  Se despeja restando: bruto − adicionales = básico.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "problema"]

variables:
  bruto: random(30, 150) * 1000
  porcentaje: uno_de([10, 15, 20])

respuesta: bruto * (1 - porcentaje / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "El sueldo bruto es ${bruto}, y los descuentos suman un {porcentaje}% del bruto. ¿Cuál es el neto?"

pasos:
  - "{bruto} × (1 - {porcentaje}/100) = {bruto * (1 - porcentaje / 100)}"

explicacion: |
  Descontar un porcentaje es multiplicar por (1 − porcentaje/100).
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo", "problema"]

variables:
  bruto: random(30, 150) * 1000
  p1: uno_de([5, 10])
  p2: uno_de([3, 5])

respuesta: bruto - (bruto * p1 / 100) - (bruto * p2 / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "El sueldo bruto es ${bruto}, con dos descuentos calculados por separado sobre el bruto: uno del {p1}% y otro del {p2}%. ¿Cuál es el neto?"

pasos:
  - "{bruto} - ({bruto}×{p1}/100) - ({bruto}×{p2}/100) = {bruto - (bruto * p1 / 100) - (bruto * p2 / 100)}"

explicacion: |
  Cuando cada descuento se calcula sobre el bruto (no en cadena), se
  pueden restar por separado.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "comparacion"]

variables:
  a: random(30, 150) * 1000
  b: random(30, 150) * 1000

restricciones:
  - a != b

respuesta: (a > b)
tipo: vf

enunciado: "¿Es ${a} de sueldo bruto mayor que ${b}?"

explicacion: |
  Se comparan directamente los montos.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "orden"]

tipo: ordenar
enunciado: "Ordená estos sueldos netos de menor a mayor."
opciones_explicitas:
  - "$85.000"
  - "$62.000"
  - "$120.000"
  - "$45.000"
respuesta_orden: ["$45.000", "$62.000", "$85.000", "$120.000"]

explicacion: |
  Se ordenan como cualquier lista de montos.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los descuentos del sueldo suelen financiar sistemas colectivos (como jubilación futura o cobertura de salud), no son sólo \"plata perdida\"."

explicacion: |
  El detalle concreto de qué se financia varía según el país y el
  sistema — pero la lógica de fondo es esa.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Qué adicionales tiene un sueldo (antigüedad, presentismo, horas extra...) depende de cada trabajo y convenio puntual, no es igual en todos los empleos."

explicacion: |
  Lo universal es la fórmula (básico + adicionales = bruto), no la lista
  específica de adicionales.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Básico, bruto y neto son tres números distintos de un mismo sueldo, y confundirlos es un error común."

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

## Sección: recibo-de-sueldo/argentina (24 preguntas)

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

enunciado: "¿Cuáles son los tres aportes obligatorios del empleado en Argentina (sector privado)?"
tipo: mc
opciones_explicitas:
  - "Jubilación, obra social y PAMI"
  - "IVA, ganancias y bienes personales"
  - "Sindicato, presentismo y antigüedad"
respuesta: "Jubilación, obra social y PAMI"

explicacion: |
  Son los tres aportes personales que se descuentan del bruto en
  cualquier recibo de sueldo en blanco.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo"]

respuesta: 17
tipo: input
tolerancia_abs: 0

enunciado: "Jubilación 11% + obra social 3% + PAMI 3%. ¿Qué porcentaje total del bruto representan los tres aportes juntos?"

explicacion: |
  11 + 3 + 3 = 17% del bruto.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(50, 300) * 1000

respuesta: bruto * 0.11
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un sueldo bruto de ${bruto}, ¿cuánto se descuenta por jubilación (11%)?"

explicacion: |
  Es el aporte más grande de los tres.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(50, 300) * 1000

respuesta: bruto * 0.03
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un sueldo bruto de ${bruto}, ¿cuánto se descuenta por obra social (3%)?"

explicacion: |
  Financia la cobertura de salud del trabajador y su familia.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(50, 300) * 1000

respuesta: bruto * 0.03
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un sueldo bruto de ${bruto}, ¿cuánto se descuenta por PAMI/INSSJP (3%)?"

explicacion: |
  Financia la cobertura de salud de los jubilados.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(50, 300) * 1000

respuesta: bruto * 0.17
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un sueldo bruto de ${bruto}, ¿cuánto suman los tres aportes obligatorios juntos (17%)?"

explicacion: |
  Jubilación (11%) + obra social (3%) + PAMI (3%) = 17% del bruto.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(50, 300) * 1000

respuesta: bruto * 0.83
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un sueldo bruto de ${bruto}, y sin otros descuentos, ¿cuál es el neto después de los tres aportes obligatorios?"

pasos:
  - "{bruto} × (1 - 0,17) = {bruto} × 0,83 = {bruto * 0.83}"

explicacion: |
  Se descuenta el 17% total: queda el 83% del bruto.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Los aportes del empleado y las contribuciones patronales son exactamente lo mismo, sólo que con otro nombre."

explicacion: |
  Los aportes los paga el empleado (se ven en su recibo); las
  contribuciones patronales las paga el empleador, aparte, sobre el mismo
  bruto.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las contribuciones patronales las paga el empleador, no se descuentan del sueldo del empleado."

explicacion: |
  Por eso no aparecen restadas en el recibo del trabajador, aunque sí
  forman parte del costo laboral total para la empresa.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo", "problema"]

variables:
  bruto: random(50, 300) * 1000
  sindicato: uno_de([1, 2, 3])

respuesta: bruto * (1 - 0.17 - sindicato / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "Sueldo bruto ${bruto}, con los aportes obligatorios (17%) más una cuota sindical del {sindicato}%. ¿Cuál es el neto?"

pasos:
  - "{bruto} × (1 - 0,17 - {sindicato}/100) = {bruto * (1 - 0.17 - sindicato / 100)}"

explicacion: |
  Se suman todos los porcentajes de descuento y se restan juntos del
  bruto.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "aguinaldo"]

variables:
  mejor_sueldo: random(50, 300) * 1000

respuesta: mejor_sueldo / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "El mejor sueldo bruto del semestre fue ${mejor_sueldo}. ¿Cuánto corresponde de aguinaldo (SAC) ese semestre?"

explicacion: |
  El aguinaldo es la mitad del mejor sueldo del semestre.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "aguinaldo"]

respuesta: 13
tipo: input
tolerancia_abs: 0

enunciado: "Contando los 12 sueldos mensuales más el aguinaldo (medio sueldo dos veces al año, o sea un sueldo completo repartido en dos pagos), ¿a cuántos sueldos equivale el total cobrado en un año?"

explicacion: |
  12 sueldos mensuales + el equivalente a 1 sueldo más de aguinaldo (dos
  mitades) = 13 sueldos por año.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo", "problema", "aguinaldo"]

variables:
  sueldo_mensual: random(50, 300) * 1000

respuesta: sueldo_mensual * 13
tipo: input
tolerancia_abs: 0.01

enunciado: "Alguien cobra ${sueldo_mensual} de bruto todos los meses del año, sin cambios. Contando el aguinaldo, ¿cuánto cobra de bruto en todo el año?"

pasos:
  - "{sueldo_mensual} × 13 = {sueldo_mensual * 13}"

explicacion: |
  12 sueldos mensuales más el equivalente a 1 sueldo de aguinaldo (medio
  sueldo en junio, medio en diciembre).
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "verificacion"]

variables:
  bruto: random(50, 300) * 1000
  correcto: bruto * 0.17
  error: uno_de([0, 0, 0, 1000, -1000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? Con bruto ${bruto}, los aportes obligatorios (17%) dan ${mostrado}."

explicacion: |
  Se vuelve a calcular el 17% del bruto y se compara.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo"]

variables:
  bruto: random(50, 300) * 1000
  correcto: bruto * 0.83

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - bruto * 0.17
  - bruto * 1.17

enunciado: "Sueldo bruto ${bruto}, sólo con los tres aportes obligatorios (17%). ¿Cuál es el neto?"

explicacion: |
  La segunda opción es el DESCUENTO, no el neto; la tercera suma en vez
  de restar.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo"]

variables:
  bruto: random(50, 300) * 1000
  neto: bruto * 0.83

tipo: completar
enunciado: "Un trabajador cobra ${neto} de neto, después de los aportes obligatorios (17%) y sin otros descuentos. Completá cuál era el sueldo bruto."
respuestas_validas:
  - neto / 0.83

explicacion: |
  bruto = neto ÷ 0,83 (deshacer el descuento del 17%).
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "comparacion"]

variables:
  a: random(50, 300) * 1000
  b: random(50, 300) * 1000

restricciones:
  - a != b

respuesta: ((a * 0.17) > (b * 0.17))
tipo: vf

enunciado: "¿Descuenta más de aportes obligatorios un bruto de ${a} que uno de ${b}?"

explicacion: |
  A mayor bruto, mayor el monto de aportes (el porcentaje es el mismo,
  17%, pero se aplica sobre una base más grande).
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para el empleador, el costo real de un empleado es mayor que el sueldo bruto, porque además paga las contribuciones patronales aparte."

explicacion: |
  El bruto es lo que ve reflejado el empleado en su recibo; el empleador
  paga ese bruto MÁS las contribuciones patronales, que no se descuentan
  del sueldo del trabajador.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "De los tres aportes obligatorios, la jubilación (11%) es el más grande — más que obra social y PAMI juntos (3%+3%=6%)."

explicacion: |
  11% es más que 6%: la jubilación es, por lejos, el aporte más grande.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "orden"]

tipo: ordenar
enunciado: "Ordená estos tres aportes de menor a mayor porcentaje (puede haber empate)."
opciones_explicitas:
  - "Jubilación"
  - "PAMI"
  - "Obra social"
respuesta_orden: ["PAMI", "Obra social", "Jubilación"]

explicacion: |
  PAMI y obra social empatan en 3% cada uno; jubilación es 11%, el más
  grande de los tres.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de jubilación, obra social y PAMI (obligatorios en todo el país), la cuota sindical depende de cada actividad y convenio."

explicacion: |
  No todos los trabajos tienen sindicato con cuota, ni el porcentaje es
  el mismo en todos los gremios.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo", "aguinaldo", "problema"]

variables:
  sueldo1: random(50, 200) * 1000
  sueldo2: sueldo1 + random(10, 50) * 1000

respuesta: sueldo2 / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "En un semestre, alguien cobró ${sueldo1} un mes y ${sueldo2} otro (el resto igual o menos). ¿Cuánto le corresponde de aguinaldo ese semestre?"

explicacion: |
  El aguinaldo se calcula sobre el MEJOR sueldo del semestre, no sobre un
  promedio.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "aguinaldo"]

respuesta: verdadero
tipo: vf

enunciado: "El aguinaldo (SAC) se cobra en dos pagos al año: uno en junio y otro en diciembre."

explicacion: |
  Cada pago es la mitad del mejor sueldo del semestre correspondiente.
```

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_argentina"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En Argentina, un empleado en blanco del sector privado tiene tres aportes obligatorios sobre el bruto: jubilación (11%), obra social (3%) y PAMI (3%)."

explicacion: |
  Es la idea central de este módulo: la aplicación concreta del concepto
  general de \"descuentos\" a la legislación laboral argentina.
```

## Sección: sectores-economicos (20 preguntas)

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["sector_primario", "clasificacion"]

variables:
  actividad: uno_de(["agricultura", "ganadería", "pesca", "minería"])
  descripcion: |
    Si {actividad} == "agricultura" entonces "cultivo de plantas"
    elif {actividad} == "ganadería" entonces "cría de animales"
    elif {actividad} == "pesca" entonces "captura de peces"
    else "extracción de minerales"

respuesta: "sector_primario"
tipo: input

enunciado: "La actividad de {actividad}, que implica {descripcion}, se clasifica dentro del sector económico:"

explicacion: |
  El sector primario comprende las actividades que extraen recursos naturales directamente del medio ambiente sin transformarlos significativamente.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["sector_secundario", "industria"]

variables:
  producto: uno_de(["automóvil", "camisa", "cemento"])
  proceso: uno_de(["ensamblaje", "tejido", "mezclado"])

respuesta: "sector_secundario"
tipo: input

enunciado: "La fabricación de un {producto} mediante el proceso de {proceso} corresponde al sector:"

explicacion: |
  El sector secundario transforma las materias primas en bienes manufacturados, agregando valor mediante la industria o la construcción.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "avanzado"
  tags: ["evolucion", "historia_economica"]

variables:
  etapa: uno_de(["preindustrial", "industrial", "postindustrial"])
  sector_dominante: |
    si etapa == "preindustrial" entonces "primario"
    si etapa == "industrial" entonces "secundario"
    si etapa == "postindustrial" entonces "terciario"

respuesta: sector_dominante
tipo: input

enunciado: "En la etapa de {etapa}, el sector económico con mayor peso en el empleo y el PIB suele ser el sector {sector_dominante}."

explicacion: |
  Las economías evolucionan desde la dependencia del sector primario, pasando por la industrialización (secundario), hasta predominar los servicios (terciario) en etapas avanzadas.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["argentina", "primario"]

variables:
  recurso: uno_de(["soja", "trigo", "carne", "petróleo"])

respuesta: "sector_primario"
tipo: input

enunciado: "La exportación de {recurso} es una actividad típica del sector económico:"

explicacion: |
  La producción y exportación de materias primas agrícolas o energéticas corresponde al sector primario, base de la economía argentina.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "avanzado"
  tags: ["sector_cuaternario", "tecnologia"]

variables:
  actividad: uno_de(["investigación científica", "desarrollo de software", "consultoría estratégica"])

respuesta: "sector_cuaternario"
tipo: input

enunciado: "La actividad de {actividad} se clasifica tradicionalmente en el sector cuaternario o de conocimiento."

explicacion: |
  El sector cuaternario es una extensión del terciario que se enfoca en el conocimiento, la información y la tecnología, siendo clave en economías modernas.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["sector_terciario", "ejemplos"]

variables:
  negocio: uno_de(["restaurante", "banco", "hospital", "empresa de transporte"])

respuesta: "sector_terciario"
tipo: input

enunciado: "Un {negocio} pertenece al sector económico:"

explicacion: |
  Los negocios que ofrecen servicios (comida, dinero, salud, movimiento) pertenecen al sector terciario.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "avanzado"
  tags: ["desarrollo", "estructura_economica"]

variables:
  pais_tipo: uno_de(["desarrollado", "en desarrollo"])
  peso_terciario: |
    si pais_tipo == "desarrollado" entonces "mayor"
    si pais_tipo == "en desarrollo" entonces "menor"

respuesta: "sector_terciario"
tipo: input

enunciado: "En un país {pais_tipo}, el sector con mayor peso relativo en el PIB suele ser el sector {peso_terciario} (nota: completar con el nombre del sector que predomina)."

explicacion: |
  En economías desarrolladas, el sector terciario (y cuaternario) domina la estructura económica, mientras que en las en desarrollo el primario o secundario tienen mayor peso relativo.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["transformacion", "secundario"]

variables:
  materia: uno_de(["leche", "caña de azúcar", "trigo"])
  producto: uno_de(["queso", "etanol", "harina"])

respuesta: "sector_secundario"
tipo: input

enunciado: "La transformación de {materia} en {producto} es una actividad del sector:"

explicacion: |
  La industrialización de productos primarios (leche a queso, caña a etanol) corresponde al sector secundario.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["clasificacion", "ejercicios"]

variables:
  actividad: uno_de(["extracción de petróleo", "construcción de puentes", "enseñanza universitaria"])
  sector_correcto: |
    si actividad == "extracción de petróleo" entonces "primario"
    si actividad == "construcción de puentes" entonces "secundario"
    si actividad == "enseñanza universitaria" entonces "terciario"

respuesta: sector_correcto
tipo: input

enunciado: "La actividad '{actividad}' corresponde al sector:"

explicacion: |
  Se debe identificar si la actividad extrae recursos (primario), transforma/construye (secundario) o presta un servicio (terciario).
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["bienes_capital", "industria"]

variables:
  bien: uno_de(["maquinaria agrícola", "computadora industrial", "ladrillo"])

respuesta: "sector_secundario"
tipo: input

enunciado: "La fabricación de {bien} es una actividad del sector secundario, ya sea como bien de consumo o de capital."

explicacion: |
  El sector secundario produce tanto bienes de consumo final como bienes de capital necesarios para otras industrias.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["definicion", "servicios"]

variables:
  concepto: "servicios"

respuesta: "sector_terciario"
tipo: input

enunciado: "El sector que se dedica a la prestación de {concepto} en lugar de la producción de bienes físicos es el:"

explicacion: |
  El sector terciario se define por la generación de servicios intangibles.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["seguridad_alimentaria", "primario"]

variables:
  producto: uno_de(["granos", "carne", "leche"])

respuesta: "sector_primario"
tipo: input

enunciado: "La producción de {producto} es crucial para la seguridad alimentaria y pertenece al sector:"

explicacion: |
  La base de la alimentación proviene del sector primario (agricultura y ganadería).
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "avanzado"
  tags: ["cuaternario", "investigacion"]

variables:
  area: uno_de(["biotech", "finanzas algorítmicas", "consultoría ambiental"])

respuesta: "sector_cuaternario"
tipo: input

enunciado: "La actividad en el área de {area} se clasifica en el sector cuaternario."

explicacion: |
  El sector cuaternario engloba actividades basadas en el conocimiento especializado y la innovación.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["empleo", "terciario"]

variables:
  pais: uno_de(["Argentina", "Alemania", "Japón"])
  sector_empleo: "terciario"

respuesta: "sector_terciario"
tipo: input

enunciado: "En la mayoría de las economías modernas, incluido {pais}, el sector que genera más empleo es el sector:"

explicacion: |
  La terciarización de la economía implica que la mayoría de la fuerza laboral se dedica a servicios.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["minería", "primario"]

variables:
  mineral: uno_de(["cobre", "oro", "litio"])

respuesta: "sector_primario"
tipo: input

enunciado: "La extracción de {mineral} es una actividad del sector primario."

explicacion: |
  La minería es la extracción de recursos minerales del subsuelo, parte del sector primario.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "basico"
  tags: ["construccion", "secundario"]

variables:
  obra: uno_de(["edificio", "carretera", "puente"])

respuesta: "sector_secundario"
tipo: input

enunciado: "La construcción de un {obra} pertenece al sector secundario."

explicacion: |
  La construcción es la actividad manufacturera que crea infraestructura y bienes inmuebles.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["turismo", "terciario"]

variables:
  destino: uno_de(["Bariloche", "Mendoza", "Mar del Plata"])

respuesta: "sector_terciario"
tipo: input

enunciado: "El turismo en {destino} es una actividad económica del sector terciario."

explicacion: |
  El turismo implica servicios de alojamiento, transporte y entretenimiento, todos del sector terciario.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "avanzado"
  tags: ["educacion", "cuaternario"]

variables:
  institucion: "universidad de investigación"

respuesta: "sector_cuaternario"
tipo: input

enunciado: "La generación de nuevo conocimiento en una {institucion} se asocia al sector cuaternario."

explicacion: |
  La educación superior e investigación básica aplicada es la base del sector cuaternario.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["finanzas", "terciario"]

variables:
  servicio: "banca comercial"

respuesta: "sector_terciario"
tipo: input

enunciado: "La {servicio} es una actividad del sector terciario."

explicacion: |
  Los servicios financieros intermediarios pertenecen al sector terciario.
```

```
metadata:
  materia: "economia"
  tema: "sectores_economicos"
  nivel: "intermedio"
  tags: ["evolucion_economica", "historia"]

variables:
  etapa: uno_de(["preindustrial", "industrial", "postindustrial"])

respuesta: "primario"
tipo: completar

enunciado: "En las economías {etapa}, el sector primario suele tener el peso relativo más alto en el empleo y el PIB."

explicacion: |
  En las etapas preindustriales o en países en desarrollo, la economía depende fuertemente del sector primario. A medida que avanza el desarrollo, el peso relativo disminuye frente al secundario y terciario.
```

