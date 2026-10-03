# Examen jefe — [PENDIENTE #768]

> Logro #768. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **120 preguntas totales** en 5/5 secciones.

---

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

## Sección: origen-excedente-moneda-mercado (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["excedente", "intercambio"]

respuesta: "trueque"
tipo: "completar"
respuestas_validas:
  - "trueque"

enunciado: "Cuando una sociedad agrícola comienza a producir más de lo que consume, el excedente genera la necesidad de realizar un proceso de intercambio llamado ___."

explicacion: |
  El excedente agrícola permitió que las personas no solo sobrevivieran, sino que pudieran intercambiar sus sobras por otros bienes necesarios, dando inicio al comercio.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["trueque", "limitaciones"]

variables:
  escenario: uno_de([["trigo", "herramientas de piedra"], ["lana", "cerámica"], ["fruta", "pieles"]])

respuesta: "doble coincidencia de necesidades"
tipo: "mc"
opciones_explicitas: ["doble coincidencia de necesidades", "especialización del trabajo", "inflación de bienes", "escasez de recursos"]

enunciado: "Un agricultor tiene un excedente de {escenario[0]} y desea obtener {escenario[1]}, pero para lograrlo necesita encontrar a alguien que tenga {escenario[1]} y que, además, necesite exactamente {escenario[0]}. A este problema se le conoce como:"

explicacion: |
  La 'doble coincidencia de necesidades' es la principal dificultad del trueque, ya que requiere que ambas partes coincidan en el tiempo y en el objeto de intercambio.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["moneda", "trueque"]

tipo: vf
respuesta: verdadero

enunciado: "¿El paso del trueque a la moneda fue impulsado por la dificultad de encontrar una doble coincidencia de necesidades?"

explicacion: |
  Correcto. La moneda surge como una solución para evitar la dificultad de encontrar a alguien que quiera exactamente lo que nosotros ofrecemos y que tenga lo que nosotros buscamos.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["comercio", "excedente"]

tipo: "ordenar"
opciones_explicitas: ["Producción de excedentes", "Dificultad del trueque", "Aparición de la moneda"]
respuesta_orden: ["Producción de excedentes", "Dificultad del trueque", "Aparición de la moneda"]

enunciado: "Ordena cronológicamente los hitos que permitieron la evolución del sistema de intercambio:"

explicacion: |
  Primero aparece el excedente, luego se detecta que el trueque es ineficiente por la doble coincidencia de necesidades, y finalmente se crea la moneda para facilitar el intercambio.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "avanzado"
  tags: ["valor", "intercambio"]

variables:
  caso: uno_de([["5 sacos de grano", "2 hachas de cobre"], ["3 cabras", "1 manta de lana"], ["10 cestas de fruta", "2 vasijas de barro"]])

respuesta: "valor_relativo"
tipo: "mc"
opciones_explicitas: ["valor_relativo", "valor_absoluto", "costo_de_produccion", "precio_fijo"]

enunciado: "En un sistema de trueque, si un agricultor intercambia {caso[0]} por {caso[1]}, el valor de los bienes se determina de forma ___ (es decir, depende de la relación entre las necesidades de ambos)."

explicacion: |
  En el trueque, el valor no es absoluto, sino relativo a la utilidad que cada parte le asigne al bien en ese momento específico de intercambio.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["trueque", "intercambio"]

respuesta: "doble coincidencia de deseos"
tipo: completar
respuestas_validas:
  - "doble coincidencia de deseos"

enunciado: "Para que el trueque sea efectivo, es necesaria la ___ de deseos, lo que significa que ambas partes deben querer intercambiar exactamente lo que el otro ofrece."

explicacion: |
  El trueque requiere que cada persona encuentre a otra que tenga lo que necesita y que, además, necesite lo que ella ofrece, un proceso ineficiente llamado doble coincidencia de deseos.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["funciones_moneda", "teoria_monetaria"]

respuesta: "medio de cambio"
tipo: mc
opciones_explicitas: ["unidad de cuenta", "medio de cambio", "reserva de valor"]

enunciado: "Si un comerciante utiliza una moneda para facilitar la transacción inmediata de un bien, está utilizando la moneda como: ___"

explicacion: |
  La función de medio de cambio permite que la moneda actúe como un intermediario en el intercambio, eliminando la necesidad de buscar una coincidencia exacta de bienes.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["evolucion_moneda", "historia_economica"]

respuesta_orden: ["Trueque", "Dinero Mercancía", "Dinero Papel", "Dinero Fiduciario"]
tipo: ordenar

opciones_explicitas: ["Trueque", "Dinero Mercancía", "Dinero Papel", "Dinero Fiduciario"]

enunciado: "Ordena cronológicamente la evolución de los medios de intercambio en una economía de mercado:"

explicacion: |
  La economía evolucionó desde el intercambio directo de bienes (trueque) hacia mercancías con valor intrínseco (sal, oro), luego hacia representaciones físicas (papel moneda) y finalmente hacia sistemas basados en la confianza (fiduciario).
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["valor", "moneda"]

respuesta: 13
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si una unidad de medida de valor (unidad de cuenta) establece que un saco de trigo vale 5 monedas y un saco de cebada vale 8 monedas, ¿cuántas monedas se requieren para intercambiar ambos sacos de forma equivalente?"

pasos:
  - "Identificar el valor de cada bien en la unidad de cuenta."
  - "Sumar los valores de ambos bienes."

explicacion: |
  La función de unidad de cuenta permite expresar los valores de distintos bienes en términos comunes, facilitando la suma y comparación de precios.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["reserva_valor", "ahorro"]

respuesta: "reserva de valor"
tipo: mc
opciones_explicitas: ["medio de cambio", "unidad de cuenta", "reserva de valor"]

enunciado: "Cuando una persona decide guardar parte de sus ingresos en moneda para realizar una compra importante en el futuro, está utilizando la moneda como:"

explicacion: |
  La función de reserva de valor permite transferir poder adquisitivo del presente al futuro, permitiendo el ahorro.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["moneda_mercado", "dinero_mercado", "historia_economica"]

variables:
  escenario: uno_de([["conchas cauri", "conchas"], ["sal", "sal"]])

enunciado: "En diversas culturas antiguas, antes de la existencia de monedas acuñadas, se utilizaban objetos con valor intrínseco como medio de cambio. Un ejemplo común es el uso de {escenario[0]}."

opciones_explicitas: ["conchas", "sal", "piedras", "madera"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  Antes de la moneda metálica, se utilizaban bienes de consumo o decorativos que tenían valor por su escasez o utilidad, como las conchas cauri o la sal.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["dinero_mercado", "propiedades_dinero"]

respuestas_validas:
  - "durabilidad"
  - "divisibilidad"
  - "escasez"
respuesta: "durabilidad"
tipo: completar

enunciado: "Para que un objeto funcione eficazmente como dinero mercancía, debe poseer ciertas propiedades. La capacidad de resistir el paso del tiempo y el uso sin degradarse se denomina ___."

explicacion: |
  La durabilidad es esencial para que el valor se preserve a través de las transacciones y el tiempo.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["trueque", "moneda_mercado"]

variables:
  orden_pasos: [["Trueque directo", "Uso de dinero mercancía", "Moneda acuñada"], ["Trueque directo", "Uso de metales preciosos", "Moneda acuñada"], ["Trueque directo", "Uso de sal", "Moneda acuñada"]]

enunciado: "Ordene cronológicamente la evolución de los medios de intercambio en una economía en desarrollo."

opciones_explicitas: ["Trueque directo", "Uso de dinero mercancía", "Moneda acuñada"]
respuesta_orden: ["Trueque directo", "Uso de dinero mercancía", "Moneda acuñada"]
tipo: ordenar

explicacion: |
  La economía evoluciona desde el intercambio directo de bienes (trueque), pasando por objetos con valor intrínseco (dinero mercancía), hasta la estandarización con monedas metálicas.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["metales_preciosos", "valor_intrínseco"]

variables:
  metal_idx: uno_de([0, 1])
  metal_datos: [["oro", "oro"], ["plata", "plata"]]

enunciado: "El uso de {metal_datos[metal_idx][0]} como medio de cambio se debió a su valor intrínseco y su facilidad de transporte."

respuesta: metal_datos[metal_idx][1]
tipo: completar
tolerancia_abs: 0

explicacion: |
  Los metales preciosos fueron fundamentales para la transición hacia la moneda debido a su escasez y homogeneidad.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "avanzado"
  tags: ["trueque", "costos_transaccion"]

variables:
  problema_idx: uno_de([0, 1])
  problema_datos: [["doble coincidencia de deseos", "falta de divisibilidad"], ["doble coincidencia de deseos", "falta de durabilidad"]]

enunciado: "Uno de los principales obstáculos del trueque que impulsó la creación del dinero fue la ___."

opciones_explicitas: ["doble coincidencia de deseos", "falta de divisibilidad", "exceso de oferta"]
respuesta: problema_datos[problema_idx][0]
tipo: mc

explicacion: |
  El trueque requiere que dos personas quieran exactamente lo que el otro ofrece en el mismo momento, lo cual es ineficiente y da origen a la necesidad de un medio de cambio.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["intercambio", "excedente", "neolítico"]

respuesta: "excedente"
tipo: "completar"
respuestas_validas:
  - "excedente"
  - "excedente_productivo"

enunciado: "Cuando una sociedad logra producir más de lo que necesita para su subsistencia inmediata, se genera un ___ que permite el inicio del intercambio."

explicacion: |
  El excedente es la base del comercio: al sobrar productos, las comunidades pueden intercambiar lo que les sobra por lo que les falta.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["especializacion", "division_del_trabajo"]

variables:
  escenario: uno_de([["agricultor", "trigo"], ["pastor", "lana"], ["alfarero", "cerámica"]])

respuesta: "mercado"
tipo: "completar"
respuestas_validas:
  - "mercado"

enunciado: "En una economía con división del trabajo, un {escenario[0]} produce un excedente de {escenario[1]}. Si este desea obtener un bien diferente, debe acudir al ___ para realizar un intercambio."

explicacion: |
  La especialización permite que cada individuo se concentre en una actividad, generando excedentes específicos que se intercambian en el mercado.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["barter", "trueque", "moneda"]

tipo: ordenar
opciones_explicitas: ["trueque", "moneda", "dinero_fiduciario"]
respuesta_orden: ["trueque", "moneda", "dinero_fiduciario"]

enunciado: "Ordena cronológicamente las formas de intercambio según la complejidad del medio de cambio:"

explicacion: |
  El proceso evolutivo comenzó con el trueque directo, pasó por el uso de mercancías como dinero (moneda mercancía) y llegó al dinero fiduciario actual.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["moneda", "liquidez", "intercambio"]

variables:
  caso: uno_de(["sal", "conchas", "metales"])

respuesta: "unidad de cuenta"
tipo: "mc"
opciones_explicitas: ["unidad de cuenta", "medio de cambio", "reserva de valor"]

enunciado: "Para facilitar el comercio de excedentes, se utilizan objetos como medio de cambio. Si usamos {caso} para expresar y comparar el valor de otros bienes, estamos usando esa mercancía como:"

explicacion: |
  La moneda actúa como un estándar de valor que resuelve la dificultad de coincidencia de necesidades del trueque.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "avanzado"
  tags: ["mercado", "abstracto", "social"]

tipo: vf
respuesta: falso

enunciado: "El mercado es estrictamente un lugar físico (como una plaza o feria) y no puede existir de forma abstracta o virtual."

explicacion: |
  El mercado es un concepto institucional y social que define las reglas de intercambio; puede ser físico (un mercado de abastos) o abstracto (el mercado de divisas).
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["trueque", "moneda", "intercambio"]

variables:
  datos: [["Un agricultor tiene manzanas y busca zapatos, pero el zapatero solo quiere trigo", "falta de coincidencia de necesidades"], ["Un pescador tiene peces y quiere madera, pero el carpintero solo quiere lana", "falta de coincidencia de necesidades"], ["Un artesano tiene vasijas y quiere carne, pero el carnicero solo quiere herramientas", "falta de coincidencia de necesidades"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["falta de liquidez", "falta de coincidencia de necesidades", "exceso de oferta", "escasez de valor"]

enunciado: "En el siguiente escenario: {datos[idx][0]}, ¿cuál es la principal limitación del sistema de trueque que impide el intercambio?"

explicacion: |
  El trueque requiere que ambas partes deseen exactamente lo que el otro ofrece en el mismo momento, lo que se conoce como la "doble coincidencia de deseos" o "falta de coincidencia de necesidades". La moneda resuelve esto actuando como un medio de cambio universal.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["divisibilidad", "moneda", "valor"]

variables:
  datos: [["Comprar una manzana con una vaca", "divisibilidad"], ["Comprar un pan con un caballo", "divisibilidad"], ["Comprar un clavo con una oveja", "divisibilidad"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "divisibilidad"

enunciado: "Si un comerciante desea comprar un objeto de bajo valor utilizando un bien de alto valor (como un animal), se enfrenta al problema de la ___."

explicacion: |
  Muchos bienes son indivisibles (no puedes partir un animal a la mitad sin destruir su valor). La moneda permite fraccionar el valor de forma exacta para transacciones de cualquier escala.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["costos_transaccion", "eficiencia"]

variables:
  datos: [["Buscar un intercambio específico requiere mucho tiempo", "costos de transacción"], ["Perder horas buscando quién quiera el producto", "costos de transacción"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["costos de transacción", "inflación", "escasez", "desequilibrio"]

enunciado: "El tiempo y esfuerzo invertidos en encontrar a alguien que quiera intercambiar sus bienes por los nuestros se denomina: {datos[idx][0]}."

explicacion: |
  El trueque aumenta los costos de transacción debido a la dificultad de encontrar la pareja de intercambio ideal. La moneda reduce estos costos al estandarizar el medio de intercambio.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["evolucion", "historia_moneda"]

respuesta_orden: ["Trueque", "Dinero Mercancía", "Dinero Fiat"]
tipo: ordenar
opciones_explicitas: ["Dinero Fiat", "Trueque", "Dinero Mercancía"]

enunciado: "Ordena cronológicamente las etapas de la evolución de los medios de intercambio, desde el sistema más primitivo al más moderno:"

explicacion: |
  Primero existió el trueque directo, luego se usaron mercancías con valor intrínseco (sal, oro) y finalmente el dinero fiat (basado en la confianza y ley).
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["unidad_cuenta", "precio"]

variables:
  datos: [["Comparar el precio de 10 productos distintos en trueque", "complejidad de precios"], ["Determinar el valor relativo de bienes diversos", "complejidad de precios"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["complejidad de precios", "estabilidad de valor", "liquidez inmediata", "escasez"]

enunciado: "Sin una moneda, establecer un precio estándar para todos los bienes es extremadamente difícil debido a la {datos[idx][0]}."

explicacion: |
  En un sistema de trueque, el número de precios relativos crece exponencialmente con la cantidad de bienes. La moneda actúa como una "unidad de cuenta" que simplifica la medición del valor.
```

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

