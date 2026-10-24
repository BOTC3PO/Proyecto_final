# Economía — Pools de liquidez y creador de mercado automático (AMM) (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Fórmula AMM: reserva_A ×
> reserva_B = k (constante). Precio = relación entre reservas.

---

### 1 — Qué es un pool de liquidez

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

### 2 — Quién arma un pool de liquidez

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

### 3 — Qué es un AMM

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

### 4 — La fórmula del producto constante

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

### 5 — Calcular k a partir de las reservas iniciales

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

### 6 — Qué pasa con la reserva del token que se deposita

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

### 7 — Verificar el producto constante tras un swap

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

### 8 — Qué es el precio en un AMM

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

### 9 — Calcular el precio a partir de las reservas

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

### 10 — Qué es el slippage

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

### 11 — Por qué las operaciones grandes tienen más slippage

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

### 12 — Comparar slippage en pools de distinto tamaño

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

### 13 — Qué es la pérdida impermanente

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

### 14 — Por qué se llama "impermanente"

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

### 15 — Calcular la comisión ganada por un LP

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

### 16 — Quién decide el precio en un AMM

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

### 17 — El pool reemplaza al market maker humano

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

### 18 — Ordenar el ciclo de un proveedor de liquidez

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

### 19 — El APY no siempre incluye el riesgo

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

### 20 — Completar la fórmula del AMM

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

### 21 — El pool como contraparte, no como persona

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

### 22 — Cierre del tema

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
