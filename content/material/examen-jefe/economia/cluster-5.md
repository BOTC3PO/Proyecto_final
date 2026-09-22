# Examen jefe — [PENDIENTE #770]

> Logro #770. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **124 preguntas totales** en 5/5 secciones.

---

## Sección: ecuacion-contable-fundamental (26 preguntas)

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["activo", "concepto"]

respuesta: verdadero
tipo: vf

enunciado: "El Activo representa lo que la empresa posee o tiene derecho a cobrar, como dinero, mercadería o edificios."

explicacion: |
  Correcto. El Activo refleja los recursos económicos controlados por la entidad.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["financiamiento", "pasivo"]

respuesta: verdadero
tipo: vf

enunciado: "El Pasivo representa la parte del Activo que fue financiada con recursos de terceros (prestamistas)."

explicacion: |
  Correcto. El Pasivo son fondos externos que la empresa debe devolver.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["equilibrio", "principio"]

respuesta: verdadero
tipo: vf

enunciado: "Cada transacción comercial afecta al menos dos elementos de la ecuación contable, manteniendo siempre el equilibrio."

explicacion: |
  Correcto. La partida doble asegura que la ecuación siempre se mantenga balanceada.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["pasivo", "deuda"]

respuesta: verdadero
tipo: vf

enunciado: "El Pasivo se refiere a las deudas que la empresa tiene con proveedores, bancos o el Estado."

explicacion: |
  Correcto. Las deudas comerciales y financieras forman parte del Pasivo.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["activo", "derechos"]

respuesta: verdadero
tipo: vf

enunciado: "El Activo incluye tanto bienes tangibles como derechos, como facturas por cobrar."

explicacion: |
  Correcto. Los derechos de cobro son activos corrientes o no corrientes.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "avanzado"
  tags: ["solvencia", "analisis"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación contable permite evaluar si una compañía es solvente comparando sus activos con sus pasivos."

explicacion: |
  Correcto. Un Patrimonio Neto positivo indica que los activos superan a las deudas.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["teoria", "logica"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación contable es una representación lógica de la realidad económica de la empresa."

explicacion: |
  Correcto. Refleja cómo se han financiado los recursos de la empresa.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["clasificacion", "activo"]

respuesta: verdadero
tipo: vf

enunciado: "El dinero en caja de una empresa se clasifica como Activo."

explicacion: |
  El dinero en caja es un bien tangible que la empresa posee, por lo tanto, forma parte del Activo.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["clasificacion", "pasivo"]

respuesta: verdadero
tipo: vf

enunciado: "Las deudas con proveedores se clasifican como Pasivo."

explicacion: |
  Las deudas con proveedores son obligaciones con terceros externos, lo que las define como Pasivo.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["clasificacion", "patrimonio"]

respuesta: verdadero
tipo: vf

enunciado: "El capital aportado por los socios se clasifica como Patrimonio Neto."

explicacion: |
  El capital aportado por los dueños representa la riqueza neta que les pertenece, por lo tanto, es Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "patrimonio"]

variables:
  activo: random(100000, 500000)
  pasivo: random(20000, 100000)

respuesta: activo + " - " + pasivo
tipo: input

enunciado: "Si una empresa tiene un Activo total de ${activo} y un Pasivo total de ${pasivo}, ¿cuál es su Patrimonio Neto?"

explicacion: |
  Despejando la ecuación fundamental: Patrimonio Neto = Activo - Pasivo.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "pasivo"]

variables:
  activo: random(100000, 500000)
  patrimonio: random(20000, 100000)

respuesta: activo + " - " + patrimonio
tipo: input

enunciado: "Si el Activo total es ${activo} y el Patrimonio Neto es ${patrimonio}, ¿cuánto es el Pasivo?"

explicacion: |
  Despejando la ecuación fundamental: Pasivo = Activo - Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "activo"]

variables:
  pasivo: random(20000, 100000)
  patrimonio: random(20000, 100000)

respuesta: pasivo + " + " + patrimonio
tipo: input

enunciado: "Si el Pasivo es ${pasivo} y el Patrimonio Neto es ${patrimonio}, ¿cuál es el Activo total?"

explicacion: |
  Despejando la ecuación fundamental: Activo = Pasivo + Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["equilibrio", "lógica"]

respuesta: verdadero
tipo: vf

enunciado: "Cada transacción comercial afecta al menos dos elementos, pero la igualdad de la ecuación siempre se mantiene."

explicacion: |
  La doble entrada asegura que la ecuación se mantenga equilibrada después de cualquier operación.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["transaccion", "activo"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa compra una máquina pagando en efectivo, el total del Activo no cambia."

explicacion: |
  Un activo (máquina) aumenta y otro activo (caja) disminuye en la misma cantidad, manteniendo el total inalterado.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["transaccion", "pasivo"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa compra mercadería a crédito, tanto el Activo como el Pasivo aumentan."

explicacion: |
  La mercadería aumenta el Activo y la deuda con el proveedor aumenta el Pasivo, manteniendo el equilibrio.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["transaccion", "liquidez"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa paga una deuda con dinero en caja, tanto el Activo como el Pasivo disminuyen."

explicacion: |
  El dinero sale (Activo baja) y la deuda se reduce (Pasivo baja), manteniendo la igualdad.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["transaccion", "patrimonio"]

respuesta: verdadero
tipo: vf

enunciado: "Si los socios aportan más dinero a la empresa, el Activo y el Patrimonio Neto aumentan."

explicacion: |
  Entra dinero (Activo sube) y el derecho de los socios sobre ese dinero (Patrimonio Neto) también sube.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["relacion", "logica"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación contable es una representación lógica de la realidad financiera de la empresa."

explicacion: |
  No es solo una fórmula, sino un reflejo de cómo se financian los recursos (deuda vs propio).
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "activo"]

variables:
  pasivo: random(10000, 50000)
  patrimonio: random(10000, 50000)

respuesta: verdadero
tipo: vf

enunciado: "Si el Pasivo es {pasivo} y el Patrimonio Neto es {patrimonio}, el Activo debe ser {pasivo} + {patrimonio}."

explicacion: |
  La ecuación fundamental exige que Activo sea la suma de Pasivo y Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "patrimonio"]

variables:
  activo: random(100000, 500000)
  pasivo: random(20000, 100000)

respuesta: verdadero
tipo: vf

enunciado: "Si el Activo es {activo} y el Pasivo es {pasivo}, el Patrimonio Neto debe ser {activo} - {pasivo}."

explicacion: |
  Despejando la ecuación, el Patrimonio Neto es la diferencia entre lo que tiene y lo que debe.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "pasivo"]

variables:
  activo: random(100000, 500000)
  patrimonio: random(20000, 100000)

respuesta: verdadero
tipo: vf

enunciado: "Si el Activo es {activo} y el Patrimonio Neto es {patrimonio}, el Pasivo debe ser {activo} - {patrimonio}."

explicacion: |
  Despejando la ecuación, el Pasivo es lo que resta del Activo una vez descontado el capital propio.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["equilibrio", "regla"]

respuesta: verdadero
tipo: vf

enunciado: "Si los recursos de la empresa no se explican como deuda o capital propio, hay un error en el registro."

explicacion: |
  La ecuación garantiza el equilibrio interno; cualquier desbalance indica un error contable.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["patrimonio", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "El Patrimonio Neto incluye el capital inicial y las ganancias reinvertidas."

explicacion: |
  Es la riqueza neta que pertenece a los socios, formada por lo aportado y lo generado por la actividad.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["activo", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "El Activo incluye bienes tangibles como edificios y máquinas."

explicacion: |
  Los activos son los recursos que la empresa posee o tiene derecho a cobrar, incluyendo bienes físicos.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["pasivo", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "El Pasivo son los fondos que provienen de prestamistas o proveedores."

explicacion: |
  El Pasivo representa las obligaciones financieras con terceros externos que financian los recursos de la empresa.
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

## Sección: margenes-bruto-y-neto (26 preguntas)

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["definicion", "margen_bruto"]

respuesta: "ventas_netas - costo_ventas"
tipo: completar
respuestas_validas:
  - "ventas_netas - costo_ventas"
  - "Ventas Netas - Costo de Ventas"

enunciado: "El margen bruto se calcula restando el costo de ventas a las ___."

explicacion: |
  El margen bruto mide la rentabilidad de la producción o compra de bienes, sin tener en cuenta los gastos operativos (alquiler, sueldos administrativos, etc.).
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["diferencia", "margen_neto"]

opciones_explicitas: ["El margen neto incluye los gastos operativos y financieros, mientras que el bruto no.", "El margen bruto es mayor que el neto siempre.", "El margen neto solo considera el costo de la mercadería.", "No hay diferencia entre ambos."]
respuesta: "El margen neto incluye los gastos operativos y financieros, mientras que el bruto no."
tipo: mc

enunciado: "Si una empresa tiene un margen bruto alto pero un margen neto muy bajo, ¿qué se puede deducir?"

explicacion: |
  Un margen neto bajo con un margen bruto alto indica que la empresa tiene costos operativos (gastos de administración, ventas o financieros) muy elevados que consumen la utilidad bruta.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["veracidad", "margen_neto"]

respuesta: falso
tipo: vf

enunciado: "El margen neto representa la rentabilidad de la empresa antes de considerar impuestos y gastos operativos."

explicacion: |
  Falso. El margen neto es el indicador de rentabilidad final, ya que se calcula después de restar todos los gastos, incluyendo operativos, financieros e impuestos.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "margen_bruto"]

variables:
  escenario: uno_de([[1000, 600], [500, 350], [2000, 1200]])

respuesta: escenario[0] - escenario[1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si las ventas netas son {escenario[0]} y el costo de ventas es {escenario[1]}, ¿cuál es el valor del margen bruto?"

pasos:
  - "Identificar las Ventas Netas: {escenario[0]}"
  - "Identificar el Costo de Ventas: {escenario[1]}"
  - "Restar: Ventas - Costo"

explicacion: |
  El margen bruto es la diferencia entre el ingreso por ventas y lo que costó producir o comprar esa mercadería vendida.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["orden", "jerarquia"]

opciones_explicitas: ["Ventas Netas", "Margen Bruto", "Margen Operativo", "Margen Neto"]
respuesta_orden: ["Ventas Netas", "Margen Bruto", "Margen Operativo", "Margen Neto"]
tipo: ordenar

enunciado: "Ordena los conceptos desde el ingreso total hasta la utilidad final (el resultado más pequeño), siguiendo la estructura lógica de un estado de resultados."

explicacion: |
  La estructura lógica comienza con el ingreso total (Ventas), se le resta el costo para obtener el Margen Bruto, luego se restan los gastos operativos para el Margen Operativo, y finalmente impuestos y financieros para llegar al Margen Neto.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["conceptos", "margen_bruto", "margen_neto"]

respuesta: "bruto"
tipo: "completar"
respuestas_validas:
  - "bruto"

enunciado: "El margen que se calcula restando únicamente los costos de ventas a los ingresos totales se denomina margen ___."

explicacion: |
  El margen bruto mide la rentabilidad directa del producto/servicio (Ingresos - Costo de Ventas). El margen neto es el beneficio real final tras considerar todos los gastos de la estructura operativa.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "margen_bruto"]

variables:
  idx: uno_de([0, 1])
  datos: [[1000, 600], [2500, 1500]]

respuesta: datos[idx][1]
tipo: "completar"
tolerancia_abs: 0.01

enunciado: "Una empresa tiene un nivel de ventas de ${datos[idx][0]} y un costo de ventas de ${datos[idx][0] - datos[idx][1]}. ¿Cuál es el valor del margen bruto (en unidades monetarias)?"

pasos:
  - "Identificar Ingresos Totales: ${datos[idx][0]}"
  - "Identificar Costo de Ventas: ${datos[idx][0] - datos[idx][1]}"
  - "Calcular Margen Bruto: Ingresos - Costo de Ventas"

explicacion: |
  El margen bruto se obtiene restando el costo de los bienes vendidos a las ventas totales. En este caso: ${datos[idx][0]} - (${datos[idx][0]} - ${datos[idx][1]}) = ${datos[idx][1]}.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["relacion", "conceptos"]

respuesta: falso
tipo: "vf"

enunciado: "Si una empresa tiene un margen neto positivo, es matemáticamente imposible que su margen bruto sea negativo."

explicacion: |
  Falso. El margen bruto es el primer paso; si es negativo, el margen neto será aún más negativo (ya que se le restan más gastos). Un margen neto positivo implica necesariamente que el margen bruto también lo es.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "avanzado"
  tags: ["analisis", "mc"]

variables:
  idx: uno_de([0, 1, 2])
  empresas: ["Empresa A", "Empresa B", "Empresa C"]
  margenes_brutos: [40, 20, 50]
  margenes_netos: [10, 5, 2]
  diferencias_texto: ["30%", "15%", "48%"]

respuesta: diferencias_texto[idx]
tipo: "mc"
opciones_explicitas: ["30%", "15%", "48%"]

enunciado: "Si la {empresas[idx]} presenta un margen bruto del {margenes_brutos[idx]}% y un margen neto del {margenes_netos[idx]}%, ¿cuál es la diferencia absoluta entre el margen bruto y el margen neto (en puntos porcentuales)?"

explicacion: |
  La diferencia se calcula restando el margen neto del margen bruto.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["proceso", "ordenar"]

respuesta_orden: ["Ingresos", "Costo de Ventas", "Gastos Operativos", "Utilidad Neta"]
tipo: "ordenar"
opciones_explicitas: ["Ingresos", "Costo de Ventas", "Gastos Operativos", "Utilidad Neta"]

enunciado: "Ordena los conceptos según el proceso lógico para llegar desde el ingreso bruto hasta la utilidad neta (margen neto):"

explicacion: |
  El flujo contable estándar es: 1. Ingresos -> 2. Restar Costo de Ventas (Margen Bruto) -> 3. Restar Gastos Operativos -> 4. Resultado final (Utilidad Neta/Margen Neto).
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["rentabilidad", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["La diferencia entre ventas y costo de ventas", "La diferencia entre ventas y todos los gastos operativos", "La diferencia entre ingresos totales y impuestos"]
respuesta: "La diferencia entre ventas y costo de ventas"

enunciado: "Un error común es confundir el margen bruto con el margen neto. ¿Qué mide específicamente el margen bruto?"

explicacion: |
  El margen bruto solo considera la diferencia entre las ventas y el costo de los bienes vendidos (COGS). No tiene en cuenta los gastos de administración, ventas o financieros.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["gastos_operativos", "margen_neto"]

tipo: vf
respuesta: falso

enunciado: "Si una empresa aumenta sus gastos de alquiler y salarios administrativos, pero mantiene sus costos de producción constantes, su margen bruto aumentará."

explicacion: |
  Falso. El aumento de gastos operativos (alquiler, salarios) reduce el margen neto, pero el margen bruto solo se ve afectado por los costos directos de producción.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "margen_neto"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[1000, 400, 200, 100], [2000, 1200, 500, 300]]

tipo: completar
tolerancia_abs: 0
respuesta: datos[escenario_idx][0] - datos[escenario_idx][1] - datos[escenario_idx][2] - datos[escenario_idx][3]

enunciado: "Considera el siguiente escenario: Ventas: {datos[escenario_idx][0]}, Costo de Ventas: {datos[escenario_idx][1]}, Gastos Operativos: {datos[escenario_idx][2]}, Impuestos: {datos[escenario_idx][3]}. El margen neto (en valor absoluto) es ___."

pasos:
  - "Restar el costo de ventas a las ventas para obtener la utilidad bruta."
  - "Restar los gastos operativos y los impuestos a la utilidad bruta."

explicacion: |
  El margen neto es la ganancia final después de restar TODOS los costos y gastos: {datos[escenario_idx][0]} - {datos[escenario_idx][1]} - {datos[escenario_idx][2]} - {datos[escenario_idx][3]}.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["orden", "estructura_contable"]

tipo: ordenar
opciones_explicitas: ["Ventas Totales", "Utilidad Bruta", "Utilidad Operativa", "Utilidad Neta"]
respuesta_orden: ["Ventas Totales", "Utilidad Bruta", "Utilidad Operativa", "Utilidad Neta"]

enunciado: "Ordena los conceptos de mayor a menor nivel de rentabilidad (desde el ingreso bruto hasta la ganancia final):"

explicacion: |
  La estructura contable sigue un orden descendente: primero se restan los costos directos (Bruta), luego los gastos operativos (Operativa) y finalmente impuestos y otros (Neta).
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "avanzado"
  tags: ["analisis", "eficiencia"]

tipo: mc
opciones_explicitas: ["Un margen bruto alto con un margen neto muy bajo", "Un margen bruto bajo con un margen neto alto", "Un margen bruto igual al margen neto"]
respuesta: "Un margen bruto alto con un margen neto muy bajo"

enunciado: "Si una empresa reporta un margen bruto muy elevado, pero su margen neto es casi cero, ¿qué es lo más probable que esté sucediendo?"

explicacion: |
  Esto indica que la empresa es eficiente en su producción (bajo costo de ventas), pero tiene una estructura de gastos operativos (administración, marketing, alquileres) extremadamente pesada.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["La diferencia entre el margen bruto y el neto es la inclusión de los gastos operativos y otros costos indirectos.", "La diferencia radica en que el margen bruto mide la rentabilidad sobre la inversión y el neto sobre las ventas.", "El margen bruto es siempre mayor que el margen neto porque incluye los impuestos.", "No existe diferencia, son términos sinónimos en contabilidad básica."]

respuesta: "La diferencia entre el margen bruto y el neto es la inclusión de los gastos operativos y otros costos indirectos."

enunciado: "Al comparar ambos indicadores, ¿cuál es la principal distinción conceptual?"

explicacion: |
  El margen bruto se calcula restando solo el costo de los bienes vendidos (COGS) de las ventas totales. El margen neto es lo que queda después de restar TODOS los gastos (operativos, financieros, impuestos, etc.).
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "gastos_operativos"]

variables:
  escenario: uno_de([["Ventas: 1000, Costo de Ventas: 400, Gastos Operativos: 200", "400"], ["Ventas: 5000, Costo de Ventas: 2000, Gastos Operativos: 1500", "1500"]])

tipo: completar
respuestas_validas:
  - escenario[1]

enunciado: "Si una empresa tiene {escenario[0]}, su margen neto es ___."

pasos:
  - "1. Calcular Margen Bruto: Ventas - Costo de Ventas"
  - "2. Calcular Margen Neto: Margen Bruto - Gastos Operativos"

explicacion: |
  El margen bruto se calcula restando el Costo de Ventas a las Ventas.
  El margen neto se calcula restando los Gastos Operativos al Margen Bruto.
  Dependiendo del escenario sorteado, los valores cambian, pero la lógica es la misma.

respuesta: escenario[1]
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "gastos_operativos"]

variables:
  escenario: uno_de([[1000, 600, 250], [5000, 3000, 1200]])

tipo: completar
tolerancia_abs: 0

enunciado: "Si una empresa tiene ventas de {escenario[0]}, un margen bruto de {escenario[1]} y gastos operativos de {escenario[2]}, el margen neto es ___."

respuesta: escenario[1] - escenario[2]

explicacion: |
  El margen neto se obtiene restando los gastos operativos al margen bruto.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["verdadero_falso"]

tipo: vf
respuesta: falso

enunciado: "¿Es posible que el margen neto de una empresa sea mayor que su margen bruto?"

explicacion: |
  No, porque el margen neto es el resultado de seguir restando costos y gastos al margen bruto. Por lo tanto, el margen neto siempre será menor o igual al margen bruto.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["ordenar", "flujo_contable"]

tipo: ordenar
opciones_explicitas: ["Ventas Totales", "Margen Bruto", "Margen Neto"]
respuesta_orden: ["Ventas Totales", "Margen Bruto", "Margen Neto"]

enunciado: "Ordena los conceptos según el flujo lógico de una cuenta de resultados (desde el ingreso bruto hasta la utilidad final):"

explicacion: |
  Primero se registran las ventas, a las que se les resta el costo de ventas para obtener el margen bruto, y finalmente se restan los gastos operativos para llegar al margen neto.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "avanzado"
  tags: ["analisis", "eficiencia"]

tipo: mc
opciones_explicitas: ["Un margen bruto alto con un margen neto muy bajo indica ineficiencia en los gastos operativos.", "Un margen neto alto siempre garantiza que el margen bruto sea aún más alto.", "El margen bruto no tiene relación con el margen neto.", "Si el margen neto es positivo, el margen bruto debe ser necesariamente mayor al doble."]

respuesta: "Un margen bruto alto con un margen neto muy bajo indica ineficiencia en los gastos operativos."

enunciado: "Si una empresa presenta un margen bruto muy elevado pero su margen neto es casi nulo, ¿qué se puede deducir?"

explicacion: |
  Esto indica que, aunque el producto es rentable por sí mismo (buen margen bruto), la estructura de costos fijos o gastos de administración y ventas (gastos operativos) es demasiado pesada, consumiendo casi toda la utilidad.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["margen_bruto", "ventas", "costos_directos"]

variables:
  escenario: uno_de([["Ventas: 1000, Costo de Mercadería: 600", "400"], ["Ventas: 5000, Costo de Mercadería: 3500", "1500"], ["Ventas: 2500, Costo de Mercadería: 1200", "1300"]])

respuesta: escenario[1]
tipo: completar

enunciado: "Si una empresa registra {escenario[0]}, el margen bruto es de ___."

explicacion: |
  El margen bruto se calcula restando el Costo de Mercadería Vendida (CMV) a las Ventas Totales. 
  Fórmula: Ventas - Costo de Mercadería = Margen Bruto.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "Margen Neto"
tipo: mc
opciones_explicitas: ["Margen Bruto", "Margen Neto", "Margen de Contribución", "EBITDA"]

enunciado: "El indicador que mide la rentabilidad final de la empresa después de restar todos los gastos operativos, financieros e impuestos es el ___."

explicacion: |
  El margen neto es el indicador de rentabilidad más completo, ya que considera todos los costos y gastos de la estructura, no solo los directos de la mercadería.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["gastos_operativos", "logica"]

respuesta: falso

tipo: vf

enunciado: "Si una empresa tiene un margen bruto elevado, esto garantiza automáticamente que el margen neto también sea elevado, independientemente de sus gastos operativos."

explicacion: |
  Falso. Una empresa puede tener un margen bruto excelente, pero si sus gastos operativos (alquileres, sueldos administrativos, marketing) son excesivamente altos, el margen neto puede ser negativo.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "margen_neto"]

variables:
  escenario: uno_de([["Ventas: 1000, Gastos: 800", "200"], ["Ventas: 5000, Gastos: 4500", "500"], ["Ventas: 2000, Gastos: 1900", "100"]])

respuesta: escenario[1]
tipo: completar
tolerancia_abs: 0

enunciado: "Considerando que los gastos totales (incluyendo operativos e impuestos) son de {escenario[0]}, el margen neto es ___."

explicacion: |
  El margen neto es el remanente final: Ventas Totales - Todos los Gastos.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["proceso", "orden"]

respuesta_orden: ["Ventas", "Margen Bruto", "Margen Neto"]
tipo: ordenar
opciones_explicitas: ["Ventas", "Margen Bruto", "Margen Neto"]

enunciado: "Ordena los conceptos según el flujo lógico de cálculo de rentabilidad, desde el ingreso total hasta el beneficio final:"

explicacion: |
  Primero se obtienen las Ventas, a las que se les resta el costo directo para obtener el Margen Bruto, y finalmente a este se le restan los gastos operativos para llegar al Margen Neto.
```

