# Vida Cotidiana — Consumo de agua y gas (cuestionario, 24 preguntas VBLang)

> Tema: `V3`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué mide un medidor de agua o de gas

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "basico"
  tags: ["consumo", "vocabulario"]

enunciado: "¿Qué mide un medidor de agua o de gas?"
tipo: mc
opciones_explicitas:
  - "Un volumen acumulado, que sólo crece con el tiempo a medida que se consume"
  - "El consumo exacto del día en curso, nada más"
  - "El precio a pagar en la próxima factura"
respuesta: "Un volumen acumulado, que sólo crece con el tiempo a medida que se consume"

explicacion: |
  Es como el odómetro de un auto: muestra el total acumulado, no el
  consumo de un período puntual.
```

### 2 — Completar: fórmula del consumo de un período

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "basico"
  tags: ["consumo", "completar"]

tipo: completar
enunciado: "Completá: Consumo del período = lectura actual menos lectura ___."
respuestas_validas:
  - "anterior"

explicacion: |
  Se restan dos lecturas del medidor para saber cuánto se consumió entre
  ambas.
```

### 3 — Problema: consumo de agua por diferencia de lecturas

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "intermedio"
  tags: ["consumo", "problema"]

variables:
  lectura_anterior: random(100, 500)
  consumo_real: random(5, 25)
  lectura_actual: lectura_anterior + consumo_real

respuesta: consumo_real
tipo: input
tolerancia_abs: 0

enunciado: "El medidor de agua marcaba {lectura_anterior} m³ el mes pasado, y este mes marca {lectura_actual} m³. ¿Cuántos m³ se consumieron este mes?"

pasos:
  - "{lectura_actual} − {lectura_anterior} = {consumo_real} m³"

explicacion: |
  Se resta la lectura anterior a la lectura actual.
```

### 4 — Problema: consumo de gas por diferencia de lecturas

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "intermedio"
  tags: ["consumo", "problema"]

variables:
  lectura_anterior: random(200, 800)
  consumo_real: random(20, 100)
  lectura_actual: lectura_anterior + consumo_real

respuesta: consumo_real
tipo: input
tolerancia_abs: 0

enunciado: "El medidor de gas marcaba {lectura_anterior} m³ el bimestre pasado, y ahora marca {lectura_actual} m³. ¿Cuántos m³ de gas se consumieron en ese período?"

pasos:
  - "{lectura_actual} − {lectura_anterior} = {consumo_real} m³"

explicacion: |
  Mismo principio que con el agua: la diferencia entre dos lecturas.
```

### 5 — Problema: convertir consumo de m³ a litros

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "intermedio"
  tags: ["consumo", "problema"]

variables:
  m3: random(5, 30)

respuesta: m3 * 1000
tipo: input
tolerancia_abs: 0

enunciado: "Una casa consumió {m3} m³ de agua en un mes. ¿A cuántos litros equivale?"

pasos:
  - "{m3} × 1000 = {m3 * 1000} litros"

explicacion: |
  1 m³ = 1000 litros, la misma equivalencia de
  `../../matematica/volumen-y-capacidad/`.
```

### 6 — 1 m³ equivale a 1000 litros

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "basico"
  tags: ["consumo"]

respuesta: verdadero
tipo: vf

enunciado: "1 metro cúbico (m³) equivale a 1000 litros."

explicacion: |
  Es la equivalencia ya vista entre volumen y capacidad.
```

### 7 — Problema: consumo promedio diario

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "intermedio"
  tags: ["consumo", "problema"]

variables:
  dias: uno_de([28, 30, 31])
  promedio_real: uno_de([2, 3, 4, 5])
  consumo_total: dias * promedio_real

respuesta: promedio_real
tipo: input
tolerancia_abs: 0.1

enunciado: "En un período de {dias} días se consumieron {consumo_total} m³ de agua. ¿Cuál fue el consumo promedio diario?"

pasos:
  - "{consumo_total} ÷ {dias} = {promedio_real} m³ por día"

explicacion: |
  Se divide el consumo total del período por la cantidad de días.
```

### 8 — Problema: consumo total dado el promedio diario

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "intermedio"
  tags: ["consumo", "problema"]

variables:
  dias: uno_de([15, 20, 30])
  promedio: uno_de([2, 3, 4])

respuesta: dias * promedio
tipo: input
tolerancia_abs: 0

enunciado: "Una familia consume en promedio {promedio} m³ de agua por día. ¿Cuánto va a consumir en {dias} días, si mantiene ese ritmo?"

pasos:
  - "{promedio} × {dias} = {dias * promedio} m³"

explicacion: |
  Se despeja el consumo total: Consumo total = promedio diario × días.
```

### 9 — Cómo detectar una posible pérdida de agua

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "intermedio"
  tags: ["consumo", "vocabulario"]

enunciado: "¿Cómo se puede chequear si hay una pérdida (fuga) de agua en una casa?"
tipo: mc
opciones_explicitas:
  - "Cerrar todas las canillas y ver si el medidor sigue girando o avanzando igual"
  - "Medir la presión del agua en la ducha"
  - "Comparar el color del agua de la canilla"
respuesta: "Cerrar todas las canillas y ver si el medidor sigue girando o avanzando igual"

explicacion: |
  Si no hay ningún consumo activo y el medidor sigue avanzando, hay una
  pérdida en algún punto de la instalación.
```

### 10 — Un aumento brusco de consumo puede indicar una pérdida

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "basico"
  tags: ["consumo"]

respuesta: verdadero
tipo: vf

enunciado: "Un aumento brusco e inexplicado en el consumo de agua, sin que hayan cambiado los hábitos de la casa, puede indicar una pérdida."

explicacion: |
  Es una de las señales más comunes para sospechar de una canilla o
  cañería que gotea sin verse.
```

### 11 — Agua y gas de red se miden con el mismo principio

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "intermedio"
  tags: ["consumo", "vocabulario"]

enunciado: "¿Qué tienen en común el medidor de agua y el medidor de gas de red?"
tipo: mc
opciones_explicitas:
  - "Ambos miden un volumen acumulado en m³, y el consumo se calcula por diferencia de lecturas"
  - "Ambos miden directamente en pesos, sin pasar por ninguna unidad física"
  - "No tienen nada en común"
respuesta: "Ambos miden un volumen acumulado en m³, y el consumo se calcula por diferencia de lecturas"

explicacion: |
  Es el mismo mecanismo de medición, aplicado a dos servicios distintos.
```

### 12 — El medidor de gas mide volumen, no masa

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "intermedio"
  tags: ["consumo"]

respuesta: verdadero
tipo: vf

enunciado: "El medidor de gas natural por red mide un volumen (en m³), no una masa (en kg)."

explicacion: |
  Es distinto de la garrafa, que sí se mide y se vende por masa.
```

### 13 — La garrafa de gas se mide distinto

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "intermedio"
  tags: ["consumo", "vocabulario"]

enunciado: "¿En qué unidad se mide y se vende el gas envasado en garrafa?"
tipo: mc
opciones_explicitas:
  - "En masa (kilogramos), como una garrafa 'de 10 kg'"
  - "En volumen (m³), leyendo un medidor"
  - "En litros de líquido, como una botella"
respuesta: "En masa (kilogramos), como una garrafa 'de 10 kg'"

explicacion: |
  A diferencia del gas de red (que sí tiene medidor y se mide por
  volumen), la garrafa no tiene medidor: se vende por su masa fija.
```

### 14 — Problema: comparar consumo entre dos meses

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "intermedio"
  tags: ["consumo", "problema"]

variables:
  consumo_mes1: random(8, 15)
  consumo_mes2: random(16, 25)

respuesta: consumo_mes2 - consumo_mes1
tipo: input
tolerancia_abs: 0

enunciado: "Una casa consumió {consumo_mes1} m³ de agua en enero y {consumo_mes2} m³ en febrero. ¿Cuántos m³ más se consumieron en febrero?"

pasos:
  - "{consumo_mes2} − {consumo_mes1} = {consumo_mes2 - consumo_mes1} m³ más"

explicacion: |
  Se resta el consumo del mes menor al del mes mayor.
```

### 15 — Problema: consumo total de varios períodos

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "intermedio"
  tags: ["consumo", "problema"]

variables:
  mes1: random(5, 15)
  mes2: random(5, 15)
  mes3: random(5, 15)

respuesta: mes1 + mes2 + mes3
tipo: input
tolerancia_abs: 0

enunciado: "Una casa consumió {mes1} m³, {mes2} m³ y {mes3} m³ de agua en tres meses seguidos. ¿Cuál fue el consumo total de esos tres meses?"

pasos:
  - "{mes1} + {mes2} + {mes3} = {mes1 + mes2 + mes3} m³"

explicacion: |
  Se suman los consumos de cada mes.
```

### 16 — Ordenar: pasos para calcular el consumo de un período

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "intermedio"
  tags: ["consumo", "ordenar"]

enunciado: "Ordená los pasos para calcular el consumo de agua o gas de un período, a partir del medidor."
tipo: ordenar
opciones_explicitas:
  - "Restar la lectura inicial a la lectura final"
  - "Anotar la lectura del medidor al inicio del período"
  - "Anotar la lectura del medidor al final del período"
respuesta_orden: ["Anotar la lectura del medidor al inicio del período", "Anotar la lectura del medidor al final del período", "Restar la lectura inicial a la lectura final"]
explicacion: |
  El consumo siempre es la diferencia entre la lectura final y la
  inicial, en ese orden.
```

### 17 — La lectura del medidor nunca baja mientras hay consumo

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "basico"
  tags: ["consumo"]

respuesta: verdadero
tipo: vf

enunciado: "Mientras haya consumo, la lectura de un medidor de agua o gas siempre aumenta, nunca baja."

explicacion: |
  Es un acumulado: sólo se resetea si se reemplaza el medidor.
```

### 18 — Problema: variación porcentual entre dos consumos

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "avanzado"
  tags: ["consumo", "problema"]

variables:
  consumo_anterior: uno_de([10, 20, 25, 50])
  consumo_nuevo: consumo_anterior * 1.2

respuesta: 20
tipo: input
tolerancia_abs: 0.5

enunciado: "El consumo de agua pasó de {consumo_anterior} m³ a {consumo_nuevo} m³ de un mes a otro. ¿Qué porcentaje aumentó?"

pasos:
  - "({consumo_nuevo} − {consumo_anterior}) ÷ {consumo_anterior} × 100 = 20%"

explicacion: |
  Es la misma fórmula de variación porcentual ya vista en
  `../../matematica/porcentaje/`, aplicada al consumo.
```

### 19 — Problema: detectar consumo sospechoso

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "avanzado"
  tags: ["consumo", "problema"]

variables:
  promedio_habitual: uno_de([3, 4, 5])
  dias: 30
  consumo_mes: promedio_habitual * dias * 3

respuesta: verdadero
tipo: vf

enunciado: "Una familia consume habitualmente {promedio_habitual} m³ de agua por día. Este mes ({dias} días), el medidor marca un consumo de {consumo_mes} m³. ¿Es razonable sospechar de una posible pérdida?"

explicacion: |
  El consumo esperado sería {promedio_habitual * dias} m³, pero se
  registraron {consumo_mes} m³ — un salto tan grande, sin motivo
  aparente, es razón suficiente para revisar si hay una pérdida.
```

### 20 — El promedio diario sirve para comparar períodos de distinta duración

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "intermedio"
  tags: ["consumo", "vocabulario"]

enunciado: "¿Para qué sirve calcular el consumo promedio diario, en vez de comparar directo el consumo total de dos períodos?"
tipo: mc
opciones_explicitas:
  - "Porque permite comparar de forma justa períodos de distinta cantidad de días (por ejemplo, un mes de 28 días contra uno de 31)"
  - "Porque el consumo total nunca se puede calcular con exactitud"
  - "No tiene ninguna utilidad, el consumo total ya alcanza siempre"
respuesta: "Porque permite comparar de forma justa períodos de distinta cantidad de días (por ejemplo, un mes de 28 días contra uno de 31)"

explicacion: |
  Sin ese ajuste, un mes más largo parecería "gastar más" aunque el
  ritmo diario sea el mismo.
```

### 21 — El consumo facturado debería coincidir con la diferencia de lecturas

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "intermedio"
  tags: ["consumo"]

respuesta: verdadero
tipo: vf

enunciado: "El consumo que aparece en una factura de agua o gas debería coincidir con la diferencia entre la lectura actual y la lectura anterior del medidor."

explicacion: |
  Es lo que permite verificar una factura con sentido crítico, en vez de
  aceptar el número sin chequear.
```

### 22 — Problema: consumo de gas convertido a litros

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "intermedio"
  tags: ["consumo", "problema"]

variables:
  m3: random(10, 60)

respuesta: m3 * 1000
tipo: input
tolerancia_abs: 0

enunciado: "Se consumieron {m3} m³ de gas en un bimestre. ¿A cuántos litros equivale ese volumen?"

pasos:
  - "{m3} × 1000 = {m3 * 1000} litros"

explicacion: |
  La misma equivalencia de volumen aplica sin importar si es agua o gas.
```

### 23 — Un consumo de 0 m³ en el período no siempre significa nada raro

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "avanzado"
  tags: ["consumo"]

respuesta: verdadero
tipo: vf

enunciado: "Si una casa estuvo deshabitada todo un período (por ejemplo, de vacaciones), es razonable que el consumo de agua registrado sea 0 m³ (o muy cercano a 0)."

explicacion: |
  Sin uso, no hay consumo — a diferencia de un aumento inesperado, un
  consumo bajo con una explicación clara no es señal de un problema.
```

### 24 — Cierre: para qué sirve entender el consumo

```
metadata:
  materia: "vida_cotidiana"
  tema: "consumo_de_agua_y_gas"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender cómo se calcula el consumo de agua y gas?"
tipo: mc
opciones_explicitas:
  - "Para leer la propia factura con sentido crítico y detectar a tiempo problemas como una pérdida"
  - "Sólo para completar un formulario municipal"
  - "No tiene ninguna aplicación práctica en la vida diaria"
respuesta: "Para leer la propia factura con sentido crítico y detectar a tiempo problemas como una pérdida"

explicacion: |
  Es la misma habilidad de leer un medidor acumulado y compararlo en el
  tiempo, aplicada a dos servicios del hogar.
```
