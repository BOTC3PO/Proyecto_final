# Economía — Fondo de emergencia y diversificación (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Diversificación reutiliza
> `E(portafolio) = peso1 × E(activo1) + peso2 × E(activo2)` y las
> fórmulas de varianza/desvío estándar de `../valor-esperado-riesgo/`.

---

### 1 — Qué es un fondo de emergencia

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["fondo_emergencia", "vocabulario"]

enunciado: "¿Qué es un fondo de emergencia?"
tipo: mc
opciones_explicitas:
  - "Una suma de plata guardada aparte, para gastos imprevistos, priorizando poder sacarla rápido"
  - "El dinero que se invierte para hacer crecer el capital a largo plazo"
  - "El monto mínimo que exige un banco para abrir una cuenta"
respuesta: "Una suma de plata guardada aparte, para gastos imprevistos, priorizando poder sacarla rápido"

explicacion: |
  No es una inversión para crecer: es una reserva para lo inesperado,
  pensada para estar disponible cuando haga falta.
```

### 2 — Para qué sirve principalmente

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "vocabulario"]

enunciado: "¿Cuál es el principal beneficio de tener un fondo de emergencia armado?"
tipo: mc
opciones_explicitas:
  - "Evita tener que pedir un préstamo caro o vender una inversión en mal momento ante un gasto imprevisto"
  - "Genera el rendimiento más alto posible de todos los ahorros"
  - "Elimina por completo la posibilidad de tener un gasto imprevisto"
respuesta: "Evita tener que pedir un préstamo caro o vender una inversión en mal momento ante un gasto imprevisto"

explicacion: |
  Sin ese fondo, un imprevisto obliga a elegir entre dos opciones malas:
  endeudarse caro, o malvender otra inversión.
```

### 3 — Liquidez antes que rendimiento

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El fondo de emergencia prioriza estar disponible rápido y sin riesgo, aunque eso signifique un rendimiento más bajo que otras inversiones."

explicacion: |
  Ganar menos interés es el costo aceptado a cambio de poder usarlo en
  el momento exacto en que hace falta.
```

### 4 — Calcular el monto recomendado

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "calculo"]

variables:
  gasto_mensual: random(50, 500) * 1000
  meses_cobertura: uno_de([3, 4, 5, 6])

respuesta: gasto_mensual * meses_cobertura
tipo: input
tolerancia_abs: 0

enunciado: "Los gastos esenciales mensuales de una familia son ${gasto_mensual}. Si se recomienda tener {meses_cobertura} meses de cobertura, ¿cuánto debería tener ahorrado su fondo de emergencia?"

explicacion: |
  Se multiplica el gasto mensual esencial por la cantidad de meses de
  cobertura deseada.
```

### 5 — Despejar los meses de cobertura

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "calculo"]

variables:
  gasto_mensual: random(50, 500) * 1000
  meses_cobertura: uno_de([3, 4, 5, 6])
  monto_ahorrado: gasto_mensual * meses_cobertura

respuesta: meses_cobertura
tipo: input
tolerancia_abs: 0.1

enunciado: "Una familia tiene ${monto_ahorrado} ahorrados, y gasta ${gasto_mensual} por mes en lo esencial. ¿Cuántos meses de cobertura le da ese fondo de emergencia?"

explicacion: |
  Se divide el monto ahorrado por el gasto mensual esencial.
```

### 6 — No es una inversión para crecer

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["fondo_emergencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El fondo de emergencia no es lo mismo que una inversión pensada para hacer crecer el capital a largo plazo."

explicacion: |
  Tienen objetivos distintos: uno busca estar disponible ante lo
  imprevisto, el otro busca crecer con el tiempo.
```

### 7 — Evita endeudarse caro

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Usar el fondo de emergencia ante un gasto imprevisto evita tener que pedir un préstamo a una tasa de interés alta, como la de una tarjeta de crédito."

explicacion: |
  Es plata que ya estaba separada para ese fin, sin necesidad de
  endeudarse.
```

### 8 — Evita vender una inversión en mal momento

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sin un fondo de emergencia, un gasto imprevisto puede forzar a vender otra inversión justo cuando conviene menos hacerlo (por ejemplo, con esa inversión en baja)."

explicacion: |
  El fondo de emergencia evita quedar obligado a vender algo en el peor
  momento posible.
```

### 9 — Un instrumento de fácil acceso

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["fondo_emergencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El fondo de emergencia se guarda en algo de fácil y rápido acceso, no en un instrumento difícil o lento de convertir en efectivo."

explicacion: |
  Si la plata no está disponible cuando hace falta, no cumple su
  función de fondo de emergencia.
```

### 10 — Qué es diversificar

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["diversificacion", "vocabulario"]

enunciado: "¿Qué es diversificar una inversión?"
tipo: mc
opciones_explicitas:
  - "Repartir el dinero entre varias inversiones distintas, en vez de ponerlo todo en una sola"
  - "Elegir la inversión con el rendimiento esperado más alto posible"
  - "Cambiar de inversión constantemente para aprovechar cada oportunidad"
respuesta: "Repartir el dinero entre varias inversiones distintas, en vez de ponerlo todo en una sola"

explicacion: |
  Es la idea de "no poner todos los huevos en la misma canasta".
```

### 11 — Diversificar reduce el riesgo, no necesariamente el valor esperado

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["diversificacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Diversificar reduce el riesgo total de una cartera de inversiones, sin necesariamente reducir su valor esperado."

explicacion: |
  Es uno de los pocos "beneficios gratis" en finanzas: bajar el riesgo
  sin sacrificar el promedio esperado.
```

### 12 — No poner todos los huevos en la misma canasta

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["diversificacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"No poner todos los huevos en la misma canasta\" es una forma popular de resumir la idea de diversificación."

explicacion: |
  Si se rompe una sola canasta con todos los huevos, se pierden todos;
  repartidos en varias, un problema en una no arrastra al resto.
```

### 13 — Funciona mejor cuando los activos no se mueven igual

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["diversificacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La diversificación reduce más el riesgo cuando los activos elegidos no reaccionan siempre de la misma forma a los mismos eventos."

explicacion: |
  Si dos activos siempre suben y bajan exactamente igual, combinarlos no
  reduce nada el riesgo.
```

### 14 — Valor esperado de la heladería

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "calculo"]

variables:
  p_sol: random(30, 70)
  ganancia_a_sol: random(30, 60) * 1000
  ganancia_a_lluvia: random(0, 15) * 1000

respuesta: (p_sol / 100) * ganancia_a_sol + (1 - p_sol / 100) * ganancia_a_lluvia
tipo: input
tolerancia_abs: 1

enunciado: "Una heladería gana ${ganancia_a_sol} en un día soleado y ${ganancia_a_lluvia} en un día lluvioso. La probabilidad de que un día sea soleado es {p_sol}%. ¿Cuál es la ganancia esperada de la heladería?"

pasos:
  - "E(heladería) = {p_sol/100} × {ganancia_a_sol} + {1 - p_sol/100} × {ganancia_a_lluvia}"

explicacion: |
  Se pondera cada resultado posible por su probabilidad, igual que
  cualquier valor esperado.
```

### 15 — Valor esperado de la fábrica de paraguas

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "calculo"]

variables:
  p_sol: random(30, 70)
  ganancia_b_sol: random(0, 15) * 1000
  ganancia_b_lluvia: random(30, 60) * 1000

respuesta: (p_sol / 100) * ganancia_b_sol + (1 - p_sol / 100) * ganancia_b_lluvia
tipo: input
tolerancia_abs: 1

enunciado: "Una fábrica de paraguas gana ${ganancia_b_sol} en un día soleado y ${ganancia_b_lluvia} en un día lluvioso. La probabilidad de que un día sea soleado es {p_sol}%. ¿Cuál es la ganancia esperada de la fábrica?"

pasos:
  - "E(paraguas) = {p_sol/100} × {ganancia_b_sol} + {1 - p_sol/100} × {ganancia_b_lluvia}"

explicacion: |
  Es la misma fórmula que en la heladería, con los resultados invertidos
  entre día soleado y lluvioso.
```

### 16 — Valor esperado del portafolio diversificado

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "calculo"]

variables:
  p_sol: random(30, 70)
  ganancia_a_sol: random(30, 60) * 1000
  ganancia_a_lluvia: random(0, 15) * 1000
  ganancia_b_sol: random(0, 15) * 1000
  ganancia_b_lluvia: random(30, 60) * 1000
  esperado_a: (p_sol / 100) * ganancia_a_sol + (1 - p_sol / 100) * ganancia_a_lluvia
  esperado_b: (p_sol / 100) * ganancia_b_sol + (1 - p_sol / 100) * ganancia_b_lluvia

respuesta: 0.5 * esperado_a + 0.5 * esperado_b
tipo: input
tolerancia_abs: 1

enunciado: "Con la heladería (ganancia esperada ${redondear(esperado_a, 2)}) y la fábrica de paraguas (ganancia esperada ${redondear(esperado_b, 2)}), alguien invierte la mitad de su plata en cada una. ¿Cuál es la ganancia esperada del portafolio combinado?"

pasos:
  - "E(portafolio) = 0,5 × {redondear(esperado_a, 2)} + 0,5 × {redondear(esperado_b, 2)}"

explicacion: |
  El valor esperado del portafolio es el promedio ponderado de los
  valores esperados de cada activo.
```

### 17 — El valor esperado del portafolio es el promedio ponderado

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["diversificacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor esperado de un portafolio con varios activos es siempre el promedio ponderado (según cuánto se invirtió en cada uno) de los valores esperados individuales — eso no cambia por diversificar."

explicacion: |
  Lo que baja al diversificar es el riesgo, no el valor esperado
  combinado.
```

### 18 — Desvío estándar de la heladería sola

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "calculo"]

variables:
  p_sol: random(30, 70)
  ganancia_a_sol: random(30, 60) * 1000
  ganancia_a_lluvia: random(0, 15) * 1000
  esperado_a: (p_sol / 100) * ganancia_a_sol + (1 - p_sol / 100) * ganancia_a_lluvia
  varianza_a: (p_sol / 100) * (ganancia_a_sol - esperado_a) ^ 2 + (1 - p_sol / 100) * (ganancia_a_lluvia - esperado_a) ^ 2

respuesta: sqrt(varianza_a)
tipo: input
tolerancia_abs: 3

enunciado: "Invirtiendo todo en la heladería (ganancia esperada ${redondear(esperado_a, 2)}, {p_sol}% de probabilidad de día soleado), ¿cuál es el desvío estándar de ese resultado?"

explicacion: |
  Se calcula la varianza ponderando cada resultado posible según su
  distancia al valor esperado, y se toma la raíz cuadrada.
```

### 19 — Desvío estándar del portafolio diversificado

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "calculo"]

variables:
  p_sol: random(30, 70)
  ganancia_a_sol: random(30, 60) * 1000
  ganancia_a_lluvia: random(0, 15) * 1000
  ganancia_b_sol: random(0, 15) * 1000
  ganancia_b_lluvia: random(30, 60) * 1000
  resultado_sol: 0.5 * ganancia_a_sol + 0.5 * ganancia_b_sol
  resultado_lluvia: 0.5 * ganancia_a_lluvia + 0.5 * ganancia_b_lluvia
  esperado_portafolio: (p_sol / 100) * resultado_sol + (1 - p_sol / 100) * resultado_lluvia
  varianza_portafolio: (p_sol / 100) * (resultado_sol - esperado_portafolio) ^ 2 + (1 - p_sol / 100) * (resultado_lluvia - esperado_portafolio) ^ 2

respuesta: sqrt(varianza_portafolio)
tipo: input
tolerancia_abs: 3

enunciado: "Invirtiendo la mitad en la heladería y la mitad en la fábrica de paraguas, ¿cuál es el desvío estándar del resultado combinado?"

explicacion: |
  Como las dos ganan en climas opuestos, el resultado combinado varía
  mucho menos entre un día soleado y uno lluvioso que cualquiera de las
  dos por separado.
```

### 20 — El portafolio diversificado tiene menos riesgo

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "comparacion"]

variables:
  p_sol: random(30, 70)
  ganancia_a_sol: random(30, 60) * 1000
  ganancia_a_lluvia: random(0, 15) * 1000
  ganancia_b_sol: random(0, 15) * 1000
  ganancia_b_lluvia: random(30, 60) * 1000
  esperado_a: (p_sol / 100) * ganancia_a_sol + (1 - p_sol / 100) * ganancia_a_lluvia
  varianza_a: (p_sol / 100) * (ganancia_a_sol - esperado_a) ^ 2 + (1 - p_sol / 100) * (ganancia_a_lluvia - esperado_a) ^ 2
  resultado_sol: 0.5 * ganancia_a_sol + 0.5 * ganancia_b_sol
  resultado_lluvia: 0.5 * ganancia_a_lluvia + 0.5 * ganancia_b_lluvia
  esperado_portafolio: (p_sol / 100) * resultado_sol + (1 - p_sol / 100) * resultado_lluvia
  varianza_portafolio: (p_sol / 100) * (resultado_sol - esperado_portafolio) ^ 2 + (1 - p_sol / 100) * (resultado_lluvia - esperado_portafolio) ^ 2

respuesta: (varianza_portafolio < varianza_a)
tipo: vf

enunciado: "Comparando invertir todo en la heladería contra invertir la mitad en la heladería y la mitad en la fábrica de paraguas, ¿el portafolio combinado tiene menor riesgo (menor varianza) que invertir todo en la heladería sola?"

explicacion: |
  Como ganan en climas opuestos, combinarlas amortigua la variación
  total — el portafolio combinado queda más estable que cualquiera de
  las dos por separado.
```

### 21 — Ordenar por riesgo

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["diversificacion", "orden"]

tipo: ordenar
enunciado: "Ordená estas tres formas de invertir de menor a mayor riesgo."
opciones_explicitas:
  - "Todo el dinero en las acciones de una sola empresa"
  - "Plazo fijo a tasa fija"
  - "Portafolio diversificado en muchas empresas distintas"
respuesta_orden: ["Plazo fijo a tasa fija", "Portafolio diversificado en muchas empresas distintas", "Todo el dinero en las acciones de una sola empresa"]

explicacion: |
  El plazo fijo prácticamente no tiene riesgo; diversificar reduce el
  riesgo frente a apostar todo a una sola empresa, pero sigue teniendo
  más riesgo que un instrumento garantizado.
```

### 22 — Fondo de emergencia y diversificación (cierre)

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["fondo_emergencia", "diversificacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El fondo de emergencia es la reserva líquida y de bajo riesgo para lo imprevisto; la diversificación es repartir el resto de las inversiones para reducir el riesgo total sin sacrificar el valor esperado — las dos son piezas del mismo objetivo: manejar mejor el riesgo de la vida financiera de una persona."

explicacion: |
  Es la idea central de todo el tema.
```
