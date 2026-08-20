# Economía — IVA (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Alícuotas usadas: 21% (general),
> 10,5% (reducida), 27% (agravada, servicios públicos), 0% (exento) —
> investigadas y confirmadas vigentes en 2026.

---

### 1 — Qué es el IVA

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

### 2 — La alícuota general

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

### 3 — Calcular el IVA de un precio sin IVA

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

### 4 — Calcular el precio con IVA incluido

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

### 5 — Calcular el precio sin IVA dado el precio final

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

### 6 — Calcular sólo el monto de IVA dado el precio final

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

### 7 — La alícuota reducida

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

### 8 — La alícuota agravada

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

### 9 — Productos exentos de IVA

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

### 10 — IVA en servicios digitales del exterior

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

### 11 — Problema: suscripción con IVA

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

### 12 — Las criptomonedas están excluidas del objeto del IVA

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

### 13 — Sin IVA no significa sin ningún impuesto

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

### 14 — Elegir la alícuota correcta según el producto

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

### 15 — Verificar un cálculo de IVA (con error a veces)

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

### 16 — Completar el precio sin IVA

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

### 17 — Comparar el IVA de dos alícuotas distintas

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

### 18 — Problema: reconstruir el precio sin IVA de una factura

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

### 19 — Ordenar alícuotas de menor a mayor

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

### 20 — El IVA se cobra por el valor agregado, no el total en cada etapa

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

### 21 — El IVA aplica tanto a lo físico como a lo digital

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

### 22 — Problema con alícuota reducida

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

### 23 — Problema con alícuota agravada (servicio público)

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

### 24 — Comparar el monto de IVA en dos productos distintos

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

### 25 — El 21% no es la única alícuota que existe

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

### 26 — Qué es el IVA (cierre)

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
