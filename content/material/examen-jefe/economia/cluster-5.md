# Examen jefe — [PENDIENTE #770]

> Logro #770. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **114 preguntas totales** en 5/5 secciones.

---

## Sección: libro-diario-mayor (21 preguntas)

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el Libro Diario?"
tipo: mc
opciones_explicitas:
  - "El registro de todos los asientos contables, en el orden cronológico en que ocurrieron"
  - "Un resumen de las ganancias del último mes"
  - "El registro de cada cuenta por separado"
respuesta: "El registro de todos los asientos contables, en el orden cronológico en que ocurrieron"

explicacion: |
  Es la fuente original y cronológica de todos los movimientos.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el Libro Mayor?"
tipo: mc
opciones_explicitas:
  - "La misma información del Diario, reorganizada por cuenta, con una hoja para cada una"
  - "Un libro distinto que registra información que no está en el Diario"
  - "El registro exclusivo de las cuentas de Pasivo"
respuesta: "La misma información del Diario, reorganizada por cuenta, con una hoja para cada una"

explicacion: |
  No agrega información nueva: reorganiza lo que ya está en el Diario.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Diario organiza los asientos en orden cronológico, por fecha."

explicacion: |
  Es su criterio de organización principal.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Mayor organiza los movimientos por cuenta, no por fecha."

explicacion: |
  Cada cuenta acumula todos sus movimientos, sin importar cuándo
  ocurrieron.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Mayor no es una fuente de información nueva: todo lo que aparece ahí ya estaba registrado en el Libro Diario."

explicacion: |
  Es un traslado y una reorganización, no un registro independiente.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Cómo se llama, tradicionalmente, el proceso de trasladar cada línea del Diario a la cuenta correspondiente del Mayor?"
tipo: mc
opciones_explicitas:
  - "Pasar al mayor (o mayorización)"
  - "Cerrar el balance"
  - "Auditar la cuenta"
respuesta: "Pasar al mayor (o mayorización)"

explicacion: |
  Es el nombre técnico de ese traslado.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el Libro Mayor, cada cuenta (Caja, Mercadería, etc.) tiene su propia hoja, donde se acumulan todos sus movimientos."

explicacion: |
  Es lo que permite calcular el saldo de una cuenta puntual sin revisar
  todo el resto.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es la \"cuenta T\"?"
tipo: mc
opciones_explicitas:
  - "Una forma visual simple de representar una cuenta, con el Debe a la izquierda y el Haber a la derecha"
  - "Una cuenta especial reservada para impuestos"
  - "El nombre de la primera cuenta de cualquier plan contable"
respuesta: "Una forma visual simple de representar una cuenta, con el Debe a la izquierda y el Haber a la derecha"

explicacion: |
  El nombre viene de la forma de letra \"T\" que arma la línea vertical
  (que separa Debe y Haber) con la horizontal (debajo del nombre de la
  cuenta).
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En una cuenta T, el Debe se anota a la izquierda y el Haber a la derecha."

explicacion: |
  Es la misma convención de columnas ya vista en el tema de Debe y
  Haber.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Diario sirve para reconstruir la historia completa y en orden de lo que le pasó a la empresa, útil por ejemplo para una auditoría."

explicacion: |
  Su organización cronológica lo hace ideal para reconstruir secuencias
  de hechos.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Mayor sirve para saber el saldo actual de una cuenta puntual de un vistazo, sin tener que revisar asiento por asiento."

explicacion: |
  Es su ventaja frente al Diario para esa pregunta puntual.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  debe_caja: random(100, 500) * 1000
  haber_caja: random(50, 300) * 1000

respuesta: debe_caja - haber_caja
tipo: input
tolerancia_abs: 0

enunciado: "En la hoja del Mayor de la cuenta \"Caja\" (de Activo), el total acumulado en el Debe es ${debe_caja}, y en el Haber ${haber_caja}. ¿Cuál es el saldo actual de Caja?"

explicacion: |
  En una cuenta de Activo, el saldo es el total del Debe menos el total
  del Haber.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  debe_1: random(50, 200) * 1000
  debe_2: random(50, 200) * 1000
  haber_1: random(50, 150) * 1000

respuesta: debe_1 + debe_2 - haber_1
tipo: input
tolerancia_abs: 0

enunciado: "La cuenta \"Caja\" tuvo tres movimientos: dos entradas al Debe de ${debe_1} y ${debe_2}, y una salida al Haber de ${haber_1}. ¿Cuál es el saldo final de Caja?"

pasos:
  - "Total Debe: {debe_1} + {debe_2} = {debe_1 + debe_2}"
  - "Saldo: {debe_1 + debe_2} - {haber_1}"

explicacion: |
  Se suman todos los movimientos del Debe, todos los del Haber, y se
  restan.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

enunciado: "Para saber exactamente qué movimientos económicos ocurrieron un día puntual, ¿qué libro conviene consultar?"
tipo: mc
opciones_explicitas:
  - "El Libro Diario"
  - "El Libro Mayor"
  - "Ninguno de los dos tiene esa información"
respuesta: "El Libro Diario"

explicacion: |
  Está organizado cronológicamente, así que es el indicado para
  reconstruir qué pasó en una fecha concreta.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

enunciado: "Para saber cuánto dinero hay en Caja hoy, sin revisar movimiento por movimiento, ¿qué libro conviene consultar?"
tipo: mc
opciones_explicitas:
  - "El Libro Mayor"
  - "El Libro Diario"
  - "Ninguno de los dos tiene esa información"
respuesta: "El Libro Mayor"

explicacion: |
  La hoja de Caja en el Mayor ya tiene acumulado el saldo actual.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos del proceso contable en el orden en que ocurren."
opciones_explicitas:
  - "Se calculan los saldos de cada cuenta en el Mayor"
  - "Se registra el movimiento como asiento en el Libro Diario"
  - "Se ocurre un movimiento económico en la empresa"
respuesta_orden: ["Se ocurre un movimiento económico en la empresa", "Se registra el movimiento como asiento en el Libro Diario", "Se calculan los saldos de cada cuenta en el Mayor"]

explicacion: |
  Primero el hecho económico, después el registro cronológico, y
  finalmente la reorganización por cuenta.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "verificacion"]

variables:
  debe_caja: random(100, 500) * 1000
  haber_caja: random(50, 300) * 1000
  correcto: debe_caja - haber_caja
  error: uno_de([0, 0, 0, 50000, -50000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1000)
tipo: vf

enunciado: "¿Está bien calculado esto? Cuenta Caja con ${debe_caja} en el Debe y ${haber_caja} en el Haber, saldo informado: ${mostrado}."

explicacion: |
  Se vuelve a restar el Haber del Debe y se compara con el valor
  informado.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad"]

variables:
  debe_caja: random(100, 500) * 1000
  haber_caja: random(50, 300) * 1000
  saldo: debe_caja - haber_caja

tipo: completar
enunciado: "La cuenta Caja tiene ${debe_caja} en el Debe y ${haber_caja} en el Haber. Completá: ___ (saldo) = {debe_caja} - {haber_caja}."
respuestas_validas:
  - saldo

explicacion: |
  Es la aplicación directa de la fórmula de saldo de una cuenta de
  Activo.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para armar el balance final de una empresa, se parte de los saldos que ya están calculados cuenta por cuenta en el Libro Mayor."

explicacion: |
  Es el paso siguiente en el proceso contable (estados contables), que
  no se construye en este tema puntual.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Diario y el Libro Mayor muestran, en el fondo, la misma información contable, organizada de dos formas distintas y complementarias."

explicacion: |
  Uno por fecha, el otro por cuenta — ninguno reemplaza al otro.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Diario registra los asientos en orden cronológico; el Libro Mayor reorganiza esos mismos asientos por cuenta, para poder calcular el saldo actual de cada una."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: pools-liquidez-amm (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un pool de liquidez?"
tipo: mc
opciones_explicitas:
  - "Un fondo compartido de dos tokens, guardado en un contrato inteligente, que sirve de contraparte automática de un swap"
  - "Una cuenta bancaria compartida entre varias personas"
  - "El nombre de un tipo especial de wallet"
respuesta: "Un fondo compartido de dos tokens, guardado en un contrato inteligente, que sirve de contraparte automática de un swap"

explicacion: |
  Es lo que reemplaza al libro de órdenes de un exchange tradicional.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Quién arma un pool de liquidez, depositando ambos tokens?"
tipo: mc
opciones_explicitas:
  - "Proveedores de liquidez (LP), a cambio de ganar una comisión de cada swap"
  - "Sólo la empresa dueña del DEX"
  - "El banco central del país donde vive el usuario"
respuesta: "Proveedores de liquidez (LP), a cambio de ganar una comisión de cada swap"

explicacion: |
  Son usuarios comunes que aportan sus propios tokens al pool.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un AMM (creador de mercado automático)?"
tipo: mc
opciones_explicitas:
  - "Una fórmula matemática que fija el precio automáticamente, según las reservas del pool, sin que una persona lo decida"
  - "Una persona que decide manualmente el precio de cada swap"
  - "Otro nombre para un contrato inteligente cualquiera"
respuesta: "Una fórmula matemática que fija el precio automáticamente, según las reservas del pool, sin que una persona lo decida"

explicacion: |
  Reemplaza al \"market maker\" humano de una casa de cambio
  tradicional por una fórmula.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué se mantiene constante en el AMM más usado, según la fórmula del producto constante?"
tipo: mc
opciones_explicitas:
  - "El producto entre las dos reservas del pool (reserva_A × reserva_B)"
  - "La suma entre las dos reservas del pool"
  - "El precio del token, sin importar cuánto se opere"
respuesta: "El producto entre las dos reservas del pool (reserva_A × reserva_B)"

explicacion: |
  Es la fórmula central del tema: x × y = k, con k constante.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "calculo"]

variables:
  reserva_a: random(50, 150) * 10
  reserva_b: random(6, 20) * 12

respuesta: reserva_a * reserva_b
tipo: input
tolerancia_abs: 0

enunciado: "Un pool tiene {reserva_a} unidades de Token A y {reserva_b} unidades de Token B. Según la fórmula del producto constante, ¿cuál es el valor de k?"

explicacion: |
  k = reserva_A × reserva_B, el valor que el pool mantiene fijo.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "Si alguien deposita Token A en el pool para llevarse Token B, ¿qué pasa con las dos reservas del pool?"
tipo: mc
opciones_explicitas:
  - "La reserva de A sube y la reserva de B baja"
  - "Las dos reservas suben por igual"
  - "Las dos reservas quedan exactamente iguales que antes"
respuesta: "La reserva de A sube y la reserva de B baja"

explicacion: |
  El pool entrega B y recibe A: sube lo que entra, baja lo que sale.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "calculo"]

variables:
  reserva_a: random(50, 150) * 10
  reserva_b: random(6, 20) * 12
  k: reserva_a * reserva_b
  factor: uno_de([2, 3, 4, 6])
  reserva_a_2: reserva_a * factor
  reserva_b_2_correcto: reserva_b / factor
  error: uno_de([0, 0, 0, 5, -5])
  reserva_b_2_reportado: reserva_b_2_correcto + error

respuesta: (reserva_a_2 * reserva_b_2_reportado == k)
tipo: vf

enunciado: "Un pool arrancó con {reserva_a} de Token A y {reserva_b} de Token B (k = {k}). Después de varios swaps, quedó con {reserva_a_2} de Token A y {reserva_b_2_reportado} de Token B. ¿Es correcto que el pool mantuvo el producto constante?"

explicacion: |
  Se multiplican las reservas nuevas y se compara el resultado contra
  el k original.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "En un AMM de producto constante, ¿cómo se calcula el precio de un token en términos del otro?"
tipo: mc
opciones_explicitas:
  - "Por la relación entre las dos reservas (cuánto hay de uno por cada unidad del otro)"
  - "Lo fija manualmente el proveedor de liquidez que depositó más"
  - "Siempre es 1 a 1, sin importar las reservas"
respuesta: "Por la relación entre las dos reservas (cuánto hay de uno por cada unidad del otro)"

explicacion: |
  El precio surge de la proporción entre reservas, no de una decisión
  manual.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "calculo"]

variables:
  reserva_a: random(2, 20) * 10
  precio: uno_de([2, 3, 4, 5])
  reserva_b: reserva_a * precio

respuesta: reserva_b / reserva_a
tipo: input
tolerancia_abs: 0

enunciado: "Un pool tiene {reserva_a} unidades de Token A y {reserva_b} unidades de Token B. ¿Cuántas unidades de Token B vale, aproximadamente, cada unidad de Token A?"

explicacion: |
  Precio de A en términos de B = reserva_B / reserva_A.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es el slippage (deslizamiento) en un swap?"
tipo: mc
opciones_explicitas:
  - "La diferencia entre el precio esperado al empezar la operación y el precio real obtenido al terminarla"
  - "La comisión fija que cobra el DEX por cada operación"
  - "El tiempo que tarda en confirmarse un swap"
respuesta: "La diferencia entre el precio esperado al empezar la operación y el precio real obtenido al terminarla"

explicacion: |
  Es consecuencia directa de que el precio se mueve mientras se
  ejecuta la operación.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un swap grande cambia la relación entre las reservas de forma más brusca que uno chico, por eso el precio final que recibe quien opera es peor cuanto más grande es la operación."

explicacion: |
  El precio depende de la proporción entre reservas: moverla mucho
  empeora el precio de la propia operación que la movió.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "problema"]

enunciado: "Para hacer un swap grande con el menor slippage posible, ¿qué conviene buscar?"
tipo: mc
opciones_explicitas:
  - "Un pool con reservas grandes (mucha profundidad), donde la misma operación mueve menos la relación entre reservas"
  - "El pool con las reservas más chicas disponibles"
  - "Da exactamente igual el tamaño de las reservas del pool"
respuesta: "Un pool con reservas grandes (mucha profundidad), donde la misma operación mueve menos la relación entre reservas"

explicacion: |
  Un mismo swap mueve proporcionalmente menos un pool grande que uno
  chico.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es la \"pérdida impermanente\" para un proveedor de liquidez?"
tipo: mc
opciones_explicitas:
  - "Que la combinación de tokens que le queda en el pool valga menos, en conjunto, que si se hubiera quedado con los tokens originales sin depositarlos"
  - "La comisión que cobra el DEX por retirar fondos del pool"
  - "La pérdida garantizada que sufre cualquier proveedor de liquidez, sin excepción"
respuesta: "Que la combinación de tokens que le queda en el pool valga menos, en conjunto, que si se hubiera quedado con los tokens originales sin depositarlos"

explicacion: |
  Ocurre cuando el precio de mercado de los dos tokens diverge por
  fuera del pool.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La pérdida impermanente sólo se vuelve una pérdida real si el proveedor retira sus fondos del pool en ese momento; si los precios vuelven a acercarse, la pérdida se reduce o desaparece."

explicacion: |
  Es justamente lo que explica el nombre \"impermanente\": no está
  fija hasta que se retira.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "calculo"]

variables:
  volumen_swap: random(1, 50) * 1000
  fee_pct: uno_de([1, 2, 5])

respuesta: volumen_swap * fee_pct / 100
tipo: input
tolerancia_abs: 0

enunciado: "Un pool cobra una comisión del {fee_pct}% sobre cada swap. Si en un día se operó un volumen total de ${volumen_swap}, ¿cuánto se repartió en comisiones entre los proveedores de liquidez? (comisión simplificada a un número redondo para el cálculo; las reales suelen ser más chicas, del orden de 0.3%)"

explicacion: |
  Comisión = volumen operado × porcentaje de comisión.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un AMM, ninguna persona decide manualmente el precio en cada operación: el precio surge automáticamente de la fórmula, según las reservas del pool en ese momento."

explicacion: |
  Es la idea central de \"automático\" en el nombre AMM.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "En una casa de cambio tradicional, ¿quién decide a qué precio comprar y vender?"
tipo: mc
opciones_explicitas:
  - "Una persona (el \"market maker\")"
  - "Una fórmula matemática automática"
  - "Nadie: el precio siempre es fijo"
respuesta: "Una persona (el \"market maker\")"

explicacion: |
  Es justo lo que el AMM reemplaza: la decisión humana por una
  fórmula.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos del ciclo de un proveedor de liquidez (LP) en un pool."
opciones_explicitas:
  - "El LP retira su parte del pool, incluyendo las comisiones ganadas"
  - "El LP deposita una cantidad de ambos tokens en el pool"
  - "El pool acumula comisiones de cada swap"
  - "Otros usuarios hacen swaps usando ese pool como contraparte"
respuesta_orden: ["El LP deposita una cantidad de ambos tokens en el pool", "Otros usuarios hacen swaps usando ese pool como contraparte", "El pool acumula comisiones de cada swap", "El LP retira su parte del pool, incluyendo las comisiones ganadas"]

explicacion: |
  Cada paso depende del anterior: sin depósito no hay pool, sin swaps
  no hay comisión que acumular.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando una app de DeFi muestra un \"APY estimado\" por dar liquidez, ese número suele reflejar las comisiones esperadas, sin incluir necesariamente el riesgo de pérdida impermanente."

explicacion: |
  Es una distinción importante: la comisión ganada y el riesgo del
  pool son cosas separadas.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi"]

tipo: completar
enunciado: "Completá la fórmula del AMM de producto constante: reserva_A × ___ (la otra reserva) = k."
respuestas_validas:
  - "reserva_b"
  - "reserva_B"

explicacion: |
  Es la fórmula central del tema.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "Cuando alguien hace un swap contra un pool de liquidez, ¿contra quién está intercambiando en términos prácticos?"
tipo: mc
opciones_explicitas:
  - "Contra el fondo compartido del pool en su conjunto, no contra una persona específica"
  - "Contra el proveedor de liquidez que depositó más recientemente"
  - "Contra la empresa dueña del DEX"
respuesta: "Contra el fondo compartido del pool en su conjunto, no contra una persona específica"

explicacion: |
  Es la diferencia con el libro de órdenes tradicional: no hay una
  contraparte individual, sino el pool como conjunto.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un pool de liquidez guarda dos tokens aportados por proveedores de liquidez, y un AMM fija el precio automáticamente manteniendo constante el producto entre esas dos reservas."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: estados-contables (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el ciclo contable?"
tipo: mc
opciones_explicitas:
  - "La secuencia completa de pasos desde que ocurre un movimiento económico hasta que aparece en los estados contables finales"
  - "El período de un año calendario, sin más"
  - "El nombre de un software de contabilidad"
respuesta: "La secuencia completa de pasos desde que ocurre un movimiento económico hasta que aparece en los estados contables finales"

explicacion: |
  Conecta todos los pasos ya vistos por separado (asiento, Diario,
  Mayor) con los estados contables finales.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos del ciclo contable, del primero al último."
opciones_explicitas:
  - "Se arman los estados contables"
  - "Ocurre el hecho económico"
  - "Se pasa la información al Libro Mayor"
  - "Se registra el asiento en el Libro Diario"
respuesta_orden: ["Ocurre el hecho económico", "Se registra el asiento en el Libro Diario", "Se pasa la información al Libro Mayor", "Se arman los estados contables"]

explicacion: |
  Cada paso depende del anterior: sin el hecho económico no hay
  asiento, sin asiento no hay mayor, sin mayor no hay estados
  contables.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué muestra el Estado de Situación Patrimonial?"
tipo: mc
opciones_explicitas:
  - "Una foto de un instante puntual: qué tiene y qué debe la empresa en esa fecha"
  - "Todo lo que ganó y gastó la empresa durante un período completo"
  - "Sólo las cuentas de Caja y Bancos"
respuesta: "Una foto de un instante puntual: qué tiene y qué debe la empresa en esa fecha"

explicacion: |
  Es una fotografía, no una película: describe un momento, no un
  período.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué muestra el Estado de Resultados?"
tipo: mc
opciones_explicitas:
  - "Todo lo que ganó y gastó la empresa durante un período completo"
  - "Una foto de un instante puntual de la empresa"
  - "Sólo los préstamos pendientes de pago"
respuesta: "Todo lo que ganó y gastó la empresa durante un período completo"

explicacion: |
  Es una película de un período (un mes, un año), no una foto de un
  instante.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Estado de Situación Patrimonial se arma con la misma ecuación ya vista en Debe y Haber: Activo = Pasivo + Patrimonio Neto."

explicacion: |
  Es la misma ecuación contable fundamental, aplicada acá como
  producto final del ciclo.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  activo: random(500, 900) * 1000
  pasivo: random(100, 400) * 1000

respuesta: activo - pasivo
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa tiene un Activo de ${activo} y un Pasivo de ${pasivo}. ¿Cuál es su Patrimonio Neto?"

explicacion: |
  Patrimonio Neto = Activo - Pasivo, despejando la ecuación contable.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  pasivo: random(100, 400) * 1000
  patrimonio_neto: random(200, 600) * 1000

respuesta: pasivo + patrimonio_neto
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa tiene un Pasivo de ${pasivo} y un Patrimonio Neto de ${patrimonio_neto}. ¿Cuál es su Activo total?"

explicacion: |
  Activo = Pasivo + Patrimonio Neto, aplicando la ecuación directo.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Cuándo una empresa tiene ganancia en el Estado de Resultados?"
tipo: mc
opciones_explicitas:
  - "Cuando los Ingresos son mayores que los Gastos"
  - "Cuando el Activo es mayor que el Pasivo"
  - "Cuando el Pasivo es igual a cero"
respuesta: "Cuando los Ingresos son mayores que los Gastos"

explicacion: |
  Resultado = Ingresos - Gastos; si da positivo, es ganancia.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  ingresos: random(300, 700) * 1000
  gastos: random(100, 250) * 1000

respuesta: ingresos - gastos
tipo: input
tolerancia_abs: 0

enunciado: "Durante el mes, una empresa tuvo Ingresos por ${ingresos} y Gastos por ${gastos}. ¿Cuál es su resultado del período?"

explicacion: |
  Resultado = Ingresos - Gastos. Un número positivo es ganancia.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  ingresos: random(100, 400) * 1000
  gastos: random(300, 700) * 1000
  resultado: ingresos - gastos

respuesta: (resultado < 0)
tipo: vf

enunciado: "Una empresa tuvo Ingresos de ${ingresos} y Gastos de ${gastos} en el período. ¿Es correcto decir que tuvo una pérdida?"

explicacion: |
  Se compara Ingresos contra Gastos: si Gastos es mayor, el resultado
  es negativo, o sea pérdida.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Para qué sirve el balance de comprobación, dentro del ciclo contable?"
tipo: mc
opciones_explicitas:
  - "Para verificar que la suma de todos los saldos deudores coincida con la suma de todos los saldos acreedores del Mayor"
  - "Para calcular el impuesto a las ganancias del período"
  - "Para registrar un nuevo asiento contable"
respuesta: "Para verificar que la suma de todos los saldos deudores coincida con la suma de todos los saldos acreedores del Mayor"

explicacion: |
  Es un control: si no coinciden, hay un error de carga en algún
  asiento del período.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué son los ajustes de cierre, en el ciclo contable?"
tipo: mc
opciones_explicitas:
  - "Correcciones que reconocen algo que ya pasó pero no se había registrado todavía (por ejemplo, la depreciación de una máquina)"
  - "Los primeros asientos que se cargan al empezar un ejercicio"
  - "Un tipo de impuesto que paga la empresa"
respuesta: "Correcciones que reconocen algo que ya pasó pero no se había registrado todavía (por ejemplo, la depreciación de una máquina)"

explicacion: |
  No vienen de un movimiento nuevo, sino de reconocer contablemente
  algo que ya venía ocurriendo.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "avanzado"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al cerrar el ejercicio, el resultado del período (ganancia o pérdida) pasa a formar parte del Patrimonio Neto."

explicacion: |
  Es el punto donde se conectan los dos estados contables: lo que
  ganó o perdió la empresa modifica lo que le queda a los dueños.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa tiene ganancia en un período, su Patrimonio Neto aumenta al cerrar el ejercicio."

explicacion: |
  La ganancia se suma al Patrimonio Neto en el cierre.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa tiene pérdida en un período, su Patrimonio Neto se reduce al cerrar el ejercicio."

explicacion: |
  La pérdida se resta del Patrimonio Neto en el cierre.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  patrimonio_inicial: random(500, 900) * 1000
  ingresos: random(200, 500) * 1000
  gastos: random(50, 180) * 1000

respuesta: patrimonio_inicial + (ingresos - gastos)
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa arrancó el período con un Patrimonio Neto de ${patrimonio_inicial}. Durante el período tuvo Ingresos de ${ingresos} y Gastos de ${gastos}. ¿Cuál es su Patrimonio Neto al cierre?"

pasos:
  - "Resultado del período: {ingresos} - {gastos} = {ingresos - gastos}"
  - "Patrimonio final: {patrimonio_inicial} + {ingresos - gastos}"

explicacion: |
  El Patrimonio Neto final es el inicial más el resultado del
  período (que puede ser positivo o negativo).
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Cuál de estas comparaciones describe mejor la diferencia entre el Estado de Situación Patrimonial y el Estado de Resultados?"
tipo: mc
opciones_explicitas:
  - "El Patrimonial es una foto de un instante; el de Resultados es una película de un período"
  - "El Patrimonial es mensual y el de Resultados es siempre anual"
  - "No hay ninguna diferencia real entre los dos"
respuesta: "El Patrimonial es una foto de un instante; el de Resultados es una película de un período"

explicacion: |
  Es la metáfora central del tema: uno describe un momento, el otro
  describe un tramo de tiempo.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

enunciado: "Un banco quiere saber qué tiene y qué debe una empresa HOY antes de decidir si le da un crédito. ¿Qué estado contable conviene consultar?"
tipo: mc
opciones_explicitas:
  - "El Estado de Situación Patrimonial"
  - "El Estado de Resultados"
  - "El balance de comprobación únicamente"
respuesta: "El Estado de Situación Patrimonial"

explicacion: |
  Es la foto del instante presente: exactamente lo que necesita el
  banco para esa decisión.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

enunciado: "Un inversor quiere saber si una empresa gana o pierde plata de forma sostenida en los últimos años. ¿Qué estado contable conviene consultar?"
tipo: mc
opciones_explicitas:
  - "El Estado de Resultados de varios períodos"
  - "El Estado de Situación Patrimonial de un solo día"
  - "El Libro Diario del último mes"
respuesta: "El Estado de Resultados de varios períodos"

explicacion: |
  Muestra la evolución de ganancias y pérdidas período a período, que
  es justo lo que necesita evaluar.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad"]

variables:
  ingresos: random(200, 600) * 1000
  gastos: random(50, 150) * 1000
  resultado: ingresos - gastos

tipo: completar
enunciado: "Completá: Resultado = {ingresos} - {gastos} = ___ (resultado)."
respuestas_validas:
  - resultado

explicacion: |
  Es la aplicación directa de la fórmula del Estado de Resultados.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "avanzado"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El ciclo contable completo es el PROCESO, y los estados contables (patrimonio y resultados) son el PRODUCTO de ese proceso: por eso se enseñan como un solo tema."

explicacion: |
  Es la idea central que conecta las dos partes del título de este
  tema.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El ciclo contable completo va desde que ocurre un movimiento económico (asiento, Diario, Mayor) hasta que se arman los estados contables finales de la empresa."

explicacion: |
  Es el resumen de todo el recorrido de esta sub-rama de Contabilidad.
```

## Sección: precio-final (24 preguntas)

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

respuesta: costo_total
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

respuesta: promedio
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

respuesta: costo
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

respuesta: costo_total
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

respuesta: total
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

respuesta: total
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

respuesta: ratio
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

