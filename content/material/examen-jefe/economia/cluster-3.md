# Examen jefe — [PENDIENTE #768]

> Logro #768. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **114 preguntas totales** en 5/5 secciones.

---

## Sección: costo-marginal (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  a: random(1, 6)
  b: random(5, 30)
  costo_fijo: random(100, 1000)
  q: random(1, 30)

respuesta: 2 * a * q + b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {a}q² + {b}q + {costo_fijo}. ¿Cuál es el costo marginal en q={q}?"

pasos:
  - "Cmg(q) = C'(q) = {2 * a}q + {b}"
  - "Cmg({q}) = {2 * a}×{q} + {b} = {2 * a * q + b}"

explicacion: |
  El costo fijo ({costo_fijo}) desaparece al derivar — el costo marginal
  sólo refleja la parte variable.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  a: random(1, 5)
  b: random(5, 20)
  costo_fijo: random(200, 800)
  q: random(1, 20)

respuesta: 2 * a * q + b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {a}q² + {b}q + {costo_fijo}. ¿Cuál es el costo marginal en q={q}?"

explicacion: |
  Cmg(q) = {2 * a}q + {b}, evaluado en q={q}.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

variables:
  costo_fijo_1: random(100, 500)
  costo_fijo_2: random(501, 1000)
  a: random(1, 5)
  b: random(5, 20)
  q: random(1, 20)

respuesta: verdadero
tipo: vf

enunciado: "Dos empresas tienen la misma parte variable de costo ({a}q² + {b}q), pero costos fijos distintos ({costo_fijo_1} y {costo_fijo_2}). ¿Tienen el mismo costo marginal en q={q}?"

explicacion: |
  El costo fijo se anula al derivar — sólo importa la parte variable
  para el costo marginal.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["evaluar"]

variables:
  b: random(10, 50)
  costo_fijo: random(100, 500)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {b}q + {costo_fijo} (costo variable lineal). ¿Cuál es el costo marginal, para cualquier q?"

explicacion: |
  Cmg(q) = {b}, constante — no depende de q cuando el costo variable es
  lineal.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

variables:
  a: random(1, 8)
  b: random(5, 20)
  costo_fijo: random(100, 500)

respuesta: verdadero
tipo: vf

enunciado: "C(q) = {a}q² + {b}q + {costo_fijo} (con a>0). ¿Es creciente el costo marginal a medida que aumenta q?"

explicacion: |
  Cmg(q)={2 * a}q+{b} es una función lineal creciente en q, porque el
  coeficiente {2 * a} es positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 6)
  b: random(5, 20)
  q1: random(1, 10)
  q2: random(11, 30)

respuesta: ((2 * a * q2 + b) > (2 * a * q1 + b))
tipo: vf

enunciado: "C(q) = {a}q² + {b}q + costo fijo. ¿Es mayor el costo marginal en q={q2} que en q={q1}?"

explicacion: |
  Con a positivo, el costo marginal crece con q — producir más caro cada
  vez la unidad siguiente.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El costo marginal es, aproximadamente, cuánto cuesta producir una unidad adicional."

explicacion: |
  Es la definición central del tema.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cmg(q) = C'(q), la derivada de la función de costo total."

explicacion: |
  Es la definición formal, ya usada en las cuentas anteriores.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El costo marginal (Cmg=C') y el costo promedio (Cme=C/q) son exactamente el mismo cálculo."

explicacion: |
  Son cálculos distintos: el marginal mira la próxima unidad; el
  promedio reparte el costo total entre todas las unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["costo_promedio"]

variables:
  q: random(2, 10)
  m: random(5, 20)
  k: random(1, 20)
  costo_fijo: m * q
  costo_variable_total: k * q

respuesta: m + k
tipo: input
tolerancia_abs: 0

enunciado: "Producir {q} unidades cuesta un total de {costo_fijo + costo_variable_total} (fijo {costo_fijo} + variable {costo_variable_total}). ¿Cuál es el costo PROMEDIO por unidad?"

explicacion: |
  Cme = C(q)/q — reparte el costo total entre todas las unidades, algo
  distinto del costo marginal.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El costo marginal incluye una parte proporcional de los costos fijos de la empresa."

explicacion: |
  No — el costo marginal sólo refleja el costo variable, porque la
  derivada de una constante (el costo fijo) es 0.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cmg(q)=C'(q) es una aproximación de C(q+1)−C(q) (el costo real y exacto de producir una unidad más) — para funciones suaves, se parecen mucho, pero no son matemáticamente idénticos."

explicacion: |
  La derivada es un límite; C(q+1)−C(q) es una diferencia discreta —
  ideas relacionadas, no la misma cuenta exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(1, 5)
  b: random(5, 15)
  q: random(5, 20)

respuesta: a * (2 * q + 1) + b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {a}q² + {b}q (sin costo fijo). ¿Cuánto vale C({q}+1) − C({q}) (el costo exacto de la unidad {q}+1)?"

pasos:
  - "C(q+1)−C(q) = {a}(2q+1) + {b}, evaluado en q={q}"

explicacion: |
  Esta es la diferencia EXACTA, distinta (aunque parecida) al costo
  marginal Cmg({q}) = {2 * a * q + b}.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el costo marginal decrece con la cantidad producida, significa que cada unidad adicional cuesta menos que la anterior (economías de escala)."

explicacion: |
  Es lo opuesto a los rendimientos decrecientes — producir más se vuelve
  más eficiente por unidad.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 6)
  b: random(5, 30)
  costo_fijo: random(100, 1000)
  q: random(1, 30)
  real: 2 * a * q + b
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "C(q) = {a}q² + {b}q + {costo_fijo}. ¿Es correcto que el costo marginal en q={q} sea {propuesto}?"

explicacion: |
  El valor correcto es Cmg({q}) = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["aplicacion", "verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(10, 30)
  q: random(1, 20)
  precio_venta: random(50, 200)

respuesta: ((2 * a * q + b) < precio_venta)
tipo: vf

enunciado: "C(q) = {a}q² + {b}q + costo fijo. El precio de venta de cada unidad es {precio_venta}. En q={q}, ¿conviene producir una unidad más (el costo marginal es menor que el precio de venta)?"

explicacion: |
  Mientras el costo marginal sea menor que el precio de venta, producir
  una unidad más aumenta la ganancia.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el costo marginal supera al precio de venta, producir una unidad más reduce la ganancia total de la empresa, en vez de aumentarla."

explicacion: |
  Esa unidad cuesta más de lo que se puede vender — es un cálculo que
  conecta con `../../matematica/optimizacion/`: el punto óptimo de
  producción es donde Cmg se iguala al precio (o al ingreso marginal).
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  b: random(10, 50)
  costo_fijo: random(100, 500)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = 3q² + {b}q + {costo_fijo}. ¿Cuál es el costo marginal en q=0?"

explicacion: |
  Cmg(0) = 6×0+{b} = {b}.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El costo marginal se mide en unidades de moneda por unidad producida (por ejemplo, pesos por unidad), no en pesos totales."

explicacion: |
  Es una TASA de cambio del costo respecto a la cantidad, no un costo
  total.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["evaluar"]

variables:
  a: random(1, 3)
  b: random(1, 5)
  c: random(5, 20)
  q: random(1, 10)

respuesta: 3 * a * q ^ 2 + 2 * b * q + c
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {a}q³ + {b}q² + {c}q (costo con rendimientos que cambian). ¿Cuál es el costo marginal en q={q}?"

pasos:
  - "Cmg(q) = {3 * a}q² + {2 * b}q + {c}"

explicacion: |
  Con un término cúbico en el costo, el costo marginal mismo ya no es
  lineal — cambia de forma más compleja con q.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En la mayoría de los modelos económicos razonables, el costo marginal es positivo — producir más siempre agrega algo de costo (aunque sea poco)."

explicacion: |
  Sería inusual (aunque matemáticamente posible en un modelo mal
  planteado) que producir más redujera el costo total.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Así como el costo marginal es la derivada del costo total, el 'ingreso marginal' (no cubierto en este módulo) sería la derivada del ingreso total — la misma idea aplicada al otro lado de la cuenta de una empresa."

explicacion: |
  Es el mismo patrón de "razón de cambio" aplicado a otra magnitud
  económica — la comparación de Cmg con el precio de venta ya adelantó
  esta idea.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  a: random(2, 6)
  b: random(10, 30)
  q: random(50, 100)

respuesta: 2 * a * q + b
tipo: input
tolerancia_abs: 0

enunciado: "Una fábrica cerca de su capacidad máxima tiene C(q) = {a}q² + {b}q + costo fijo (el término cuadrático refleja que cuesta cada vez más producir cerca del límite). ¿Cuál es el costo marginal al producir la unidad {q}?"

explicacion: |
  Es un ejemplo real de por qué el costo marginal creciente es común
  cerca de la capacidad instalada de una planta.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El costo marginal en un punto es, geométricamente, la pendiente de la recta tangente al gráfico de C(q) en ese punto."

explicacion: |
  Es la misma interpretación geométrica de la derivada ya vista en
  `../../matematica/derivada/`.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["verificacion", "verdadero_falso"]

variables:
  b: random(10, 50)
  costo_fijo: random(100, 500)
  propuesto: uno_de([0, 1]) * costo_fijo + b

respuesta: (propuesto == b)
tipo: vf

enunciado: "C(q) = {b}q + {costo_fijo}. ¿Es correcto que el costo marginal sea {propuesto}?"

explicacion: |
  El costo marginal correcto es {b} — si el número propuesto incluye el
  costo fijo, está mal.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El costo marginal es un ejemplo de cómo la derivada, entendida como 'razón de cambio', se aplica directamente a decisiones económicas reales de producción."

explicacion: |
  Es el mismo concepto matemático de `../../matematica/derivada/`,
  ahora con significado económico.
```

## Sección: debe-haber-balance (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el activo de una empresa?"
tipo: mc
opciones_explicitas:
  - "Todo lo que la empresa posee: bienes y derechos"
  - "Todo lo que la empresa debe a terceros"
  - "La ganancia del último mes"
respuesta: "Todo lo que la empresa posee: bienes y derechos"

explicacion: |
  Incluye dinero en caja, mercadería, inmuebles, y créditos a favor.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el pasivo de una empresa?"
tipo: mc
opciones_explicitas:
  - "Todo lo que la empresa debe a terceros: obligaciones y deudas"
  - "Todo lo que la empresa posee"
  - "El total de ventas del período"
respuesta: "Todo lo que la empresa debe a terceros: obligaciones y deudas"

explicacion: |
  Incluye préstamos, deudas con proveedores, sueldos por pagar.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el patrimonio neto de una empresa?"
tipo: mc
opciones_explicitas:
  - "Lo que le queda al dueño después de descontar todas las deudas (Activo - Pasivo)"
  - "El total de dinero en efectivo en caja"
  - "El total de mercadería en stock"
respuesta: "Lo que le queda al dueño después de descontar todas las deudas (Activo - Pasivo)"

explicacion: |
  Es la parte del activo que efectivamente le pertenece al dueño, libre
  de deudas.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación contable fundamental es: Activo = Pasivo + Patrimonio Neto."

explicacion: |
  Siempre tiene que estar en equilibrio, sin importar cuántos
  movimientos haya.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  activo: random(500, 5000) * 1000
  pasivo: random(100, 2000) * 1000

respuesta: activo - pasivo
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa tiene un activo de ${activo} y un pasivo de ${pasivo}. ¿Cuál es su patrimonio neto?"

explicacion: |
  Patrimonio Neto = Activo - Pasivo.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  pasivo: random(100, 2000) * 1000
  patrimonio_neto: random(500, 3000) * 1000

respuesta: pasivo + patrimonio_neto
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa tiene un pasivo de ${pasivo} y un patrimonio neto de ${patrimonio_neto}. ¿Cuál es su activo?"

explicacion: |
  Se despeja de la ecuación contable: Activo = Pasivo + Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  activo: random(500, 5000) * 1000
  patrimonio_neto: random(300, 3000) * 1000

respuesta: activo - patrimonio_neto
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa tiene un activo de ${activo} y un patrimonio neto de ${patrimonio_neto}. ¿Cuál es su pasivo?"

explicacion: |
  Se despeja: Pasivo = Activo - Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "En una cuenta contable, ¿qué es el \"Debe\"?"
tipo: mc
opciones_explicitas:
  - "La columna de la izquierda"
  - "La columna de la derecha"
  - "El resultado final de la cuenta"
respuesta: "La columna de la izquierda"

explicacion: |
  Es una convención de nomenclatura, no significa literalmente \"lo que
  se debe\".
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "En una cuenta contable, ¿qué es el \"Haber\"?"
tipo: mc
opciones_explicitas:
  - "La columna de la derecha"
  - "La columna de la izquierda"
  - "El total de gastos del mes"
respuesta: "La columna de la derecha"

explicacion: |
  Es la columna opuesta al Debe.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"Debe\" y \"Haber\" son nombres técnicos de dos columnas contables, no significan literalmente \"lo que se debe\" y \"lo que se tiene\"."

explicacion: |
  Es una convención histórica del lenguaje contable.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las cuentas de Activo aumentan cuando se anota un importe en su Debe."

explicacion: |
  Es la convención básica para las cuentas de Activo.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las cuentas de Activo disminuyen cuando se anota un importe en su Haber."

explicacion: |
  Es la contraparte de que el Activo aumente por el Debe.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las cuentas de Pasivo aumentan cuando se anota un importe en su Haber — al revés que el Activo."

explicacion: |
  Es esta regla \"opuesta\" entre Activo y Pasivo la que mantiene la
  ecuación contable equilibrada.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las cuentas de Patrimonio Neto aumentan cuando se anota un importe en su Haber, igual que las de Pasivo."

explicacion: |
  Pasivo y Patrimonio Neto siguen la misma convención, opuesta a la del
  Activo.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  total_debe: random(500, 3000) * 1000
  total_haber: random(100, 2000) * 1000

respuesta: total_debe - total_haber
tipo: input
tolerancia_abs: 0

enunciado: "La cuenta \"Caja\" (de Activo) tiene un total de ${total_debe} en el Debe y ${total_haber} en el Haber. ¿Cuál es su saldo?"

explicacion: |
  En una cuenta de Activo, el saldo es Debe menos Haber.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  total_haber: random(500, 3000) * 1000
  total_debe: random(100, 2000) * 1000

respuesta: total_haber - total_debe
tipo: input
tolerancia_abs: 0

enunciado: "La cuenta \"Préstamos a pagar\" (de Pasivo) tiene un total de ${total_haber} en el Haber y ${total_debe} en el Debe. ¿Cuál es su saldo?"

explicacion: |
  En una cuenta de Pasivo, el saldo es Haber menos Debe — al revés que
  en una cuenta de Activo.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "avanzado"
  tags: ["contabilidad", "comparacion"]

variables:
  activo_a: random(1000, 3000) * 1000
  pasivo_a: random(500, 900) * 1000
  activo_b: random(1000, 3000) * 1000
  pasivo_b: random(1500, 2900) * 1000

respuesta: ((activo_a - pasivo_a) > (activo_b - pasivo_b))
tipo: vf

enunciado: "Empresa A: activo ${activo_a}, pasivo ${pasivo_a}. Empresa B: activo ${activo_b}, pasivo ${pasivo_b}. ¿La empresa A tiene mayor patrimonio neto que la B?"

explicacion: |
  Hay que calcular el patrimonio neto de cada una (activo menos pasivo)
  antes de comparar — el activo solo no alcanza.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación Activo = Pasivo + Patrimonio Neto tiene que estar en equilibrio siempre, después de cada movimiento contable."

explicacion: |
  Si no se cumple, hay un error en el registro contable.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "orden"]

tipo: ordenar
enunciado: "Ordená estas empresas de menor a mayor patrimonio neto."
opciones_explicitas:
  - "Activo $2.000.000, Pasivo $1.800.000"
  - "Activo $2.000.000, Pasivo $500.000"
  - "Activo $2.000.000, Pasivo $1.200.000"
respuesta_orden: ["Activo $2.000.000, Pasivo $1.800.000", "Activo $2.000.000, Pasivo $1.200.000", "Activo $2.000.000, Pasivo $500.000"]

explicacion: |
  A igual activo, menor pasivo significa mayor patrimonio neto.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "verificacion"]

variables:
  activo: random(500, 5000) * 1000
  pasivo: random(100, 2000) * 1000
  correcto: activo - pasivo
  error: uno_de([0, 0, 0, 100000, -100000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1000)
tipo: vf

enunciado: "¿Está bien calculado esto? Activo ${activo}, pasivo ${pasivo}, patrimonio neto informado: ${mostrado}."

explicacion: |
  Se vuelve a restar el pasivo del activo y se compara con el valor
  informado.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad"]

variables:
  activo: random(500, 5000) * 1000
  patrimonio_neto: random(300, 3000) * 1000
  pasivo: activo - patrimonio_neto

tipo: completar
enunciado: "Una empresa tiene un activo de ${activo} y un patrimonio neto de ${patrimonio_neto}. Completá: ___ (pasivo) = {activo} - {patrimonio_neto}."
respuestas_validas:
  - pasivo

explicacion: |
  Se despeja el pasivo de la ecuación contable fundamental.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Activo = Pasivo + Patrimonio Neto es la ecuación que siempre debe cumplirse; Debe y Haber son las dos columnas técnicas de una cuenta, con reglas de aumento opuestas entre Activo y Pasivo/Patrimonio Neto."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: detectar-una-oportunidad-de-negocio (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["conceptos", "mercado"]

respuesta: "oportunidad de negocio"
tipo: completar
respuestas_validas:
  - "oportunidad de negocio"

enunciado: "Una ___ es la identificación de una necesidad insatisfecha o un problema no resuelto en un mercado específico que puede ser aprovechado para crear valor."

explicacion: |
  La oportunidad de negocio surge cuando se detecta un segmento de clientes con una necesidad que no está siendo cubierta adecuadamente por la oferta actual.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["mercado", "clientes"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un grupo de personas busca comida saludable pero no hay locales cerca de su oficina.", "necesidad de conveniencia y salud"], ["Los usuarios de una app de transporte se quejan de los altos precios en hora pico.", "necesidad de economía"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["necesidad de conveniencia y salud", "necesidad de economía", "necesidad de estatus", "necesidad de entretenimiento"]

enunciado: "Analiza el siguiente caso: {escenarios[escenario_idx][0]}. ¿Qué tipo de oportunidad se detecta principalmente?"

explicacion: |
  En el escenario seleccionado, el problema identificado apunta directamente a la {escenarios[escenario_idx][1]}.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["validación", "riesgo"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que una idea de negocio solo se convierte en una oportunidad real si existe un grupo de clientes dispuestos a pagar por la solución propuesta?"

explicacion: |
  Correcto. Una idea sin mercado potencial (clientes dispuestos a pagar) es solo una idea, no una oportunidad de negocio viable.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["proceso", "metodología"]

respuesta_orden: ["Observación del entorno", "Identificación del problema", "Análisis de la competencia", "Validación con clientes"]
tipo: ordenar
opciones_explicitas: ["Observación del entorno", "Identificación del problema", "Análisis de la competencia", "Validación con clientes"]

enunciado: "Ordena cronológicamente los pasos lógicos para detectar y validar una oportunidad de negocio:"

explicacion: |
  Primero se observa el entorno, luego se define el problema, se analiza qué hace la competencia y finalmente se valida con usuarios reales.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["segmentación", "público"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Vender juguetes educativos para niños de 0 a 5 años.", "segmento infantil"], ["Ofrecer software contable para pequeñas empresas de servicios.", "segmento empresarial"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["segmento infantil", "segmento empresarial", "segmento de lujo", "segmento masivo"]

enunciado: "Si el problema detectado es: {casos[caso_idx][0]}. ¿A qué grupo pertenece el mercado objetivo?"

explicacion: |
  La segmentación permite enfocar los esfuerzos de marketing y producto hacia el {casos[caso_idx][1]}.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["mercado", "necesidad", "oportunidad"]

enunciado: "Un emprendedor observa que en un barrio con muchas oficinas, la mayoría de los locales venden comida rápida con alto contenido de sodio y azúcar, pero no hay opciones de ensaladas o snacks naturales. Este vacío representa una ___."

opciones_explicitas: ["amenaza", "oportunidad de negocio", "barrera de entrada", "pérdida de capital"]
respuesta: "oportunidad de negocio"
tipo: "mc"

explicacion: |
  Una oportunidad de negocio surge cuando se identifica una necesidad insatisfecha o un problema no resuelto en un segmento de mercado específico.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["validación", "encuesta", "cliente"]

variables:
  escenario: uno_de([["¿Compraría este producto si estuviera disponible mañana?", "verdadero"], ["¿Cuánto pagaría por este servicio?", "falso"]])

enunciado: "Para validar si la necesidad detectada es real, el emprendedor realiza una encuesta. Si la pregunta es '{escenario[0]}', el objetivo principal es validar la ___."

respuestas_validas:
  - "demanda"
  - "rentabilidad"
  - "ubicación"
respuesta: "demanda"
tipo: "completar"

explicacion: |
  La validación de la demanda busca confirmar si existe un grupo de clientes dispuestos a pagar por la solución propuesta antes de invertir capital.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: ["Identificar una necesidad insatisfecha", "Analizar la competencia y el segmento", "Diseñar un prototipo o MVP", "Lanzar el producto al mercado"]
respuesta_orden: ["Identificar una necesidad insatisfecha", "Analizar la competencia y el segmento", "Diseñar un prototipo o MVP", "Lanzar el producto al mercado"]
tipo: "ordenar"

enunciado: "Ordene los pasos lógicos que sigue un emprendedor desde que detecta una oportunidad de negocio hasta que lanza su producto al mercado:"

explicacion: |
  El proceso lógico comienza con la detección del problema, sigue con el análisis del entorno, la creación de una solución mínima viable y finalmente la salida al mercado.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["competencia", "ventaja_competitiva"]

enunciado: "Si un emprendedor detecta una necesidad insatisfecha, pero ya existen tres empresas ofreciendo exactamente lo mismo con el mismo precio y calidad, la probabilidad de que sea una oportunidad de negocio rentable es baja sin una ventaja competitiva clara."

respuesta: verdadero
tipo: "vf"

explicacion: |
  La saturación de un mercado con ofertas idénticas dificulta la entrada. Una oportunidad real requiere diferenciación o una mejora en la propuesta de valor.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "avanzado"
  tags: ["TAM", "SAM", "SOM"]

variables:
  datos: uno_de([[10000, 2000, 500], [5000, 1000, 200]])

enunciado: "Si el mercado total (TAM) es de {datos[0]} personas, el mercado que puede alcanzar tu modelo de negocio (SAM) es de {datos[1]} personas, y tu capacidad real de captación (SOM) es de {datos[2]} personas, ¿cuál es el valor del SOM?"

respuesta: datos[2]
tipo: "completar"
tolerancia_abs: 0

explicacion: |
  El SOM (Serviceable Obtainable Market) representa la parte del mercado que realmente puedes capturar en el corto plazo con tus recursos actuales.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["emprendimiento", "error_comun"]

respuesta: "necesidad"
tipo: "completar"
respuestas_validas:
  - "necesidad"
  - "problema"

enunciado: "Un error común en el emprendimiento es centrarse exclusivamente en tener una idea innovadora y brillante, cuando el foco real debe estar en resolver una ___ insatisfecha en el mercado."

explicacion: |
  Una idea por sí sola no tiene valor si no resuelve un problema o satisface una necesidad real de un grupo de personas.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["conceptos_clave", "validacion"]

variables:
  escenario_idx: uno_de([0, 1])
  textos: ["Un inventor crea un dispositivo para limpiar nubes, pero nadie está dispuesto a pagarlo.", "Un emprendedor nota que en su barrio no hay lavanderías y abre una con alta demanda."]
  valores: [falso, verdadero]

respuesta: valores[escenario_idx]
tipo: "vf"

enunciado: "Analice el caso: {textos[escenario_idx]} Si un producto es altamente innovador pero no existe un segmento de clientes con la disposición y capacidad de pago para adquirirlo, ¿podemos decir que se ha detectado una oportunidad de negocio real en este caso?"

explicacion: |
  Para que una idea sea oportunidad, debe haber un mercado (clientes con necesidad y capacidad de pago).
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["enfoque_cliente"]

respuesta: "solución"
tipo: "completar"
respuestas_validas:
  - "solución"
  - "solucion"

enunciado: "Muchos emprendedores cometen el error de enamorarse de su ___ (el producto) en lugar de enamorarse del problema del cliente."

explicacion: |
  El producto puede cambiar (pivotar), pero el problema que resuelves debe ser el centro de tu estrategia.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "avanzado"
  tags: ["metodologia", "validacion"]

opciones_explicitas: ["Observar el mercado y detectar dolores", "Crear un producto mínimo viable (MVP)", "Validar la solución con clientes reales"]
respuesta_orden: ["Observar el mercado y detectar dolores", "Crear un producto mínimo viable (MVP)", "Validar la solución con clientes reales"]
tipo: "ordenar"

enunciado: "Ordena los pasos lógicos para validar una oportunidad de negocio de manera eficiente, evitando el desperdicio de recursos:"

explicacion: |
  La validación debe ser incremental: primero entiendes el problema, luego pruebas una solución mínima y finalmente escalas.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["investigacion", "errores"]

tipo: vf
respuesta: falso

enunciado: "¿Es suficiente con observar cómo se comporta la competencia para identificar una oportunidad de negocio única?"

explicacion: |
  Observar a la competencia es útil, pero centrarse solo en ellos puede llevarte a copiar modelos existentes en lugar de descubrir necesidades que la competencia está ignorando.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["emprendimiento", "conceptos_clave"]

variables:
  es_oportunidad: falso

respuesta: es_oportunidad
tipo: vf
enunciado: "Una idea de negocio se convierte en una oportunidad real cuando existe un segmento de mercado con una necesidad insatisfecha y capacidad de pago. ¿Es una idea de negocio siempre una oportunidad de negocio?"

explicacion: |
  Una idea es un concepto abstracto, mientras que una oportunidad es una idea validada que tiene viabilidad comercial y un mercado dispuesto a pagar por ella.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["segmentacion", "nicho"]

variables:
  escenario: uno_de([["vender calzado para corredores de montaña", "nicho"], ["vender calzado genérico para todo público", "mercado_masivo"], ["vender calzado de lujo para eventos", "nicho"]])

respuesta: escenario[1]
tipo: mc

opciones_explicitas: ["nicho", "mercado_masivo"]

enunciado: "Si una empresa decide enfocarse exclusivamente en satisfacer las necesidades de un grupo de consumidores con características muy específicas y requerimientos particulares, como es el caso de {escenario[0]}, está buscando un ___."

explicacion: |
  El nicho de mercado es un segmento especializado dentro de un mercado más amplio, caracterizado por necesidades muy particulares que no son cubiertas por los productos masivos.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["consumidor", "marketing"]

variables:
  ejemplo: uno_de([["Tener sed", "necesidad"], ["Beber una gaseosa de marca específica", "deseo"], ["Tener hambre", "necesidad"], ["Comer una hamburguesa de una cadena famosa", "deseo"]])

respuesta: ejemplo[1]
tipo: completar

respuestas_validas:
  - "necesidad"
  - "deseo"

enunciado: "En marketing, es crucial distinguir entre una necesidad (un estado de carencia percibida) y un ___ (la forma específica en que se busca satisfacer esa carencia)."

explicacion: |
  La necesidad es la base (ej. transporte), mientras que el deseo es la forma cultural o personal de satisfacerla (ej. un coche de lujo).
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "avanzado"
  tags: ["metodologia", "validacion"]

variables:
  pasos_ordenados: ["Observar el mercado y detectar problemas", "Entrevistar a clientes potenciales", "Diseñar un Producto Mínimo Viable (MVP)", "Analizar la viabilidad financiera"]

respuesta_orden: pasos_ordenados
tipo: ordenar

opciones_explicitas: ["Observar el mercado y detectar problemas", "Entrevistar a clientes potenciales", "Diseñar un Producto Mínimo Viable (MVP)", "Analizar la viabilidad financiera"]

enunciado: "Ordena los pasos lógicos para validar una oportunidad de negocio desde la detección hasta la viabilidad:"

explicacion: |
  Primero se identifica el problema (observación), luego se valida con usuarios (entrevistas), se prueba la solución (MVP) y finalmente se asegura la rentabilidad (finanzas).
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["competencia", "valor"]

variables:
  caso: uno_de([["ofrecer un producto idéntico al de la competencia pero más caro", "no_hay_ventaja"], ["ofrecer un producto con una característica única que resuelve un problema mejor", "hay_ventaja"], ["ofrecer un producto con el mismo precio y calidad que la competencia", "no_hay_ventaja"]])

respuesta: caso[1]
tipo: mc

opciones_explicitas: ["hay_ventaja", "no_hay_ventaja"]

enunciado: "Para que una oportunidad de negocio sea sostenible, la empresa debe presentar una propuesta de valor que se distinga de la competencia. Si una empresa logra {caso[0]}, podemos decir que ___."

explicacion: |
  La ventaja competitiva es lo que hace que un cliente elija una opción sobre otra; sin una diferenciación clara, la oportunidad es débil.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["mercado", "necesidades"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [["comunidad de ciclistas urbanos sin talleres cerca", "falta de servicios de reparación rápida"], ["estudiantes universitarios con poco tiempo para cocinar", "demanda de comida saludable y rápida"], ["dueños de mascotas que trabajan todo el día", "necesidad de cuidado canino a domicilio"]]
  datos: [["ciclistas", "reparación"], ["estudiantes", "comida"], ["dueños de mascotas", "cuidado"]]

enunciado: "Un emprendedor observa que en un barrio con muchos {datos[escenario_idx][0]} existe una oportunidad basada en la {datos[escenario_idx][1]}."

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "reparación rápida"
  - "comida saludable y rápida"
  - "cuidado canino a domicilio"

explicacion: |
  La identificación de una oportunidad surge al detectar una brecha entre una necesidad existente y la oferta actual del mercado.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["validación", "mercado"]

enunciado: "Si un emprendedor observa que los clientes de la competencia se quejan constantemente de la lentitud en la entrega, ¿es este un indicador válido para una nueva oportunidad de negocio?"

respuesta: verdadero
tipo: vf
explicacion: |
  Las quejas de los clientes son "puntos de dolor" (pain points) que representan oportunidades de mejora y diferenciación para un nuevo negocio.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

enunciado: "Ordena los pasos lógicos para validar una oportunidad de negocio desde la detección hasta el crecimiento:"

opciones_explicitas: ["Observar el problema", "Entrevistar clientes potenciales", "Crear un Producto Mínimo Viable", "Escalar el modelo de negocio"]
respuesta_orden: ["Observar el problema", "Entrevistar clientes potenciales", "Crear un Producto Mínimo Viable", "Escalar el modelo de negocio"]
tipo: ordenar

explicacion: |
  Primero se identifica el problema, luego se valida con usuarios reales, se prueba con un producto mínimo y finalmente se escala.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "avanzado"
  tags: ["competencia", "estrategia"]

enunciado: "Si el análisis de mercado muestra que la competencia es muy similar entre sí y no cubre una necesidad específica, la intensidad de la oportunidad se considera: ___"

respuesta: "alta"
tipo: completar
respuestas_validas:
  - "alta"

explicacion: |
  La falta de diferenciación en la competencia actual indica un espacio para la innovación y la captura de mercado.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["conceptos", "cliente"]

enunciado: "¿Cuál de los siguientes elementos es el motor principal para identificar una oportunidad de negocio real?"

opciones_explicitas: ["La cantidad de dinero que tiene un competidor", "La resolución de un problema o necesidad no satisfecha", "El uso de la tecnología más cara disponible", "Tener un local en la avenida principal"]
respuesta: "La resolución de un problema o necesidad no satisfecha"
tipo: mc

explicacion: |
  Una oportunidad de negocio no es solo una idea, es la capacidad de resolver un problema real para un grupo de personas dispuestas a pagar por ello.
```

## Sección: dex-swap (21 preguntas)

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Cómo funciona un exchange centralizado (CEX) de criptomonedas?"
tipo: mc
opciones_explicitas:
  - "La empresa custodia el dinero de los usuarios y hace de intermediaria en cada operación"
  - "No existe ninguna empresa: todo pasa directo entre dos usuarios"
  - "Sólo permite comprar, nunca vender"
respuesta: "La empresa custodia el dinero de los usuarios y hace de intermediaria en cada operación"

explicacion: |
  Funciona parecido a un banco o casa de cambio tradicional.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un DEX (exchange descentralizado)?"
tipo: mc
opciones_explicitas:
  - "Un conjunto de contratos inteligentes que permite intercambiar criptomonedas directo desde la wallet de cada persona, sin custodio"
  - "Una empresa que reemplaza a los bancos tradicionales"
  - "Un tipo especial de criptomoneda"
respuesta: "Un conjunto de contratos inteligentes que permite intercambiar criptomonedas directo desde la wallet de cada persona, sin custodio"

explicacion: |
  Es la definición central: contratos inteligentes, sin custodia de
  una empresa.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un \"swap\"?"
tipo: mc
opciones_explicitas:
  - "La operación de intercambiar un token por otro dentro de un DEX"
  - "El nombre de una wallet especial para DEX"
  - "Un tipo de contrato inteligente distinto de los demás"
respuesta: "La operación de intercambiar un token por otro dentro de un DEX"

explicacion: |
  El DEX es la plataforma; el swap es la operación puntual que se
  hace en ella.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un swap no es un concepto distinto de un DEX: es, literalmente, la acción que un DEX ejecuta."

explicacion: |
  Son el mismo objeto visto desde dos nombres: la plataforma y la
  operación.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "En un DEX, ¿quién custodia los fondos de un usuario mientras NO está haciendo un swap?"
tipo: mc
opciones_explicitas:
  - "El propio usuario, en su wallet"
  - "La empresa que creó el DEX"
  - "Un banco asociado al DEX"
respuesta: "El propio usuario, en su wallet"

explicacion: |
  Ninguna empresa custodia los fondos: siguen en la wallet del usuario
  hasta el instante del intercambio.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "Cuando alguien hace un swap en un DEX, ¿contra quién intercambia sus tokens?"
tipo: mc
opciones_explicitas:
  - "Contra un pool de liquidez, un fondo compartido aportado por muchos usuarios"
  - "Contra otra persona específica, elegida de un libro de órdenes"
  - "Contra el banco central del país donde vive"
respuesta: "Contra un pool de liquidez, un fondo compartido aportado por muchos usuarios"

explicacion: |
  A diferencia de un CEX (que empareja compradores y vendedores), un
  DEX intercambia contra un pool automático.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Cuál es la diferencia central entre operar en un CEX y operar en un DEX?"
tipo: mc
opciones_explicitas:
  - "En el CEX se confía la custodia de los fondos a una empresa; en el DEX los fondos quedan en la wallet propia salvo en el instante del swap"
  - "El DEX sólo permite operar con una sola criptomoneda"
  - "El CEX no tiene ningún costo por operar"
respuesta: "En el CEX se confía la custodia de los fondos a una empresa; en el DEX los fondos quedan en la wallet propia salvo en el instante del swap"

explicacion: |
  Es la diferencia estructural central entre los dos modelos.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ventaja central de un DEX es que nadie más controla los fondos de un usuario en ningún momento, salvo el instante exacto del intercambio."

explicacion: |
  Elimina la necesidad de confiar en una empresa custodia.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "Si un usuario comete un error operando en un DEX (por ejemplo, aprueba mal una operación), ¿a quién puede reclamarle para revertirla?"
tipo: mc
opciones_explicitas:
  - "A nadie: no hay una empresa ni soporte técnico que pueda revertir la operación"
  - "Al soporte técnico del DEX, que revierte cualquier error"
  - "Al banco central del país"
respuesta: "A nadie: no hay una empresa ni soporte técnico que pueda revertir la operación"

explicacion: |
  Es la contracara del mismo mecanismo que da la ventaja de no
  depender de una empresa custodia.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un usuario que prefiere no dejar sus fondos en manos de un exchange tradicional suele operar directamente en un DEX, para mantener el control de sus propias claves."

explicacion: |
  Es la misma idea de autocustodia ya vista en el tema de wallets,
  aplicada a la elección de dónde operar.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué ejecuta materialmente el intercambio de tokens en un DEX?"
tipo: mc
opciones_explicitas:
  - "El código del contrato inteligente"
  - "Un empleado de la plataforma, de forma manual"
  - "Un banco intermediario"
respuesta: "El código del contrato inteligente"

explicacion: |
  Un DEX es, en esencia, un conjunto de contratos inteligentes que
  ejecutan la operación.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Es una práctica habitual comparar el precio de un mismo par de tokens entre distintos DEX antes de operar, porque cada pool puede tener un precio levemente distinto en un momento dado."

explicacion: |
  Cada pool fija su propio precio según su propia composición interna
  (tema siguiente: `pools-liquidez-amm/`).
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "problema"]

enunciado: "Alguien intercambia 100 unidades de un token por otro token distinto, directamente desde su wallet, sin pasar por ninguna empresa. ¿Cómo se llama esa operación?"
tipo: mc
opciones_explicitas:
  - "Un swap"
  - "Un depósito en garantía (escrow)"
  - "Una devaluación"
respuesta: "Un swap"

explicacion: |
  Es exactamente la definición de swap: intercambiar un token por
  otro dentro de un DEX.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "avanzado"
  tags: ["defi", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos de cómo funciona un swap en un DEX."
opciones_explicitas:
  - "El usuario recibe el nuevo token directo en su wallet"
  - "El contrato inteligente intercambia los tokens contra el pool de liquidez"
  - "El usuario elige qué token quiere entregar y cuál quiere recibir"
  - "El usuario aprueba la operación desde su propia wallet"
respuesta_orden: ["El usuario elige qué token quiere entregar y cuál quiere recibir", "El usuario aprueba la operación desde su propia wallet", "El contrato inteligente intercambia los tokens contra el pool de liquidez", "El usuario recibe el nuevo token directo en su wallet"]

explicacion: |
  Cada paso depende del anterior: sin elección no hay nada que
  aprobar, sin aprobación el contrato no puede ejecutar el swap.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de un CEX, un DEX no necesita emparejar la orden de un comprador con la de un vendedor específico: intercambia directo contra el pool."

explicacion: |
  Es la diferencia con el libro de órdenes tradicional de un exchange
  centralizado.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un DEX es, en su base, un conjunto de contratos inteligentes que corren sobre una blockchain."

explicacion: |
  Reutiliza directo el concepto ya visto en `contratos-inteligentes/`.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "problema"]

enunciado: "Una plataforma te pide transferir tus criptomonedas a una cuenta que ella administra antes de poder operar. ¿Es un DEX o un CEX?"
tipo: mc
opciones_explicitas:
  - "Un CEX: te está pidiendo custodiar tus fondos"
  - "Un DEX: los fondos siempre quedan en tu propia wallet"
  - "Ninguno de los dos: ese modelo no existe"
respuesta: "Un CEX: te está pidiendo custodiar tus fondos"

explicacion: |
  Pedir custodia de los fondos es justamente lo que caracteriza a un
  exchange centralizado, no a un DEX.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "¿Por qué operar en un DEX no requiere confiar en una empresa, a diferencia de un CEX?"
tipo: mc
opciones_explicitas:
  - "Porque el código del contrato inteligente, público y verificable, ejecuta la operación en vez de una empresa"
  - "Porque los DEX son gratis y los CEX no"
  - "Porque los DEX sólo operan con una moneda estable"
respuesta: "Porque el código del contrato inteligente, público y verificable, ejecuta la operación en vez de una empresa"

explicacion: |
  Reemplaza la confianza en una empresa por confianza en un código
  auditable.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi"]

tipo: completar
enunciado: "Completá: el DEX es la ___ (plataforma), y el swap es la operación que se hace en ella."
respuestas_validas:
  - "plataforma"

explicacion: |
  Es la relación central entre los dos términos del tema.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué reemplaza al \"libro de órdenes\" de un exchange tradicional, dentro de un DEX?"
tipo: mc
opciones_explicitas:
  - "El pool de liquidez, que actúa como contraparte automática de cualquier swap"
  - "Un empleado que empareja manualmente cada operación"
  - "Nada: los DEX también usan un libro de órdenes idéntico"
respuesta: "El pool de liquidez, que actúa como contraparte automática de cualquier swap"

explicacion: |
  Es el puente hacia el tema siguiente: cómo ese pool fija el precio
  se explica en `pools-liquidez-amm/`.
```

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un DEX permite hacer swap de un token por otro directo desde la propia wallet, sin que ninguna empresa custodie los fondos, intercambiando contra un pool de liquidez en vez de contra otra persona específica."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: division-formal-microeconomia-macroeconomia (20 preguntas)

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["interdependencia"]

respuesta: falso
tipo: vf

enunciado: "La microeconomía y la macroeconomía son mundos completamente separados que no se influyen mutuamente."

explicacion: |
  Falso. Ambas son lentes diferentes de la misma realidad y están interconectadas. Las decisiones micro afectan a la macro y viceversa.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["interdependencia", "politica-monetaria"]

variables:
  decision_macro: "aumento de tasas de interés"
  efecto_micro: "encarecimiento de préstamos"

respuesta: verdadero
tipo: vf

enunciado: "Una decisión macroeconómica como el aumento de tasas de interés por parte del Banco Central afecta directamente el costo de oportunidad de ahorrar vs consumir para las familias."

explicacion: |
  Correcto. La política macro cambia los incentivos y costos para los agentes microeconómicos.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["complementariedad"]

respuesta: verdadero
tipo: vf

enunciado: "Las decisiones de millones de individuos (micro) terminan definiendo los grandes indicadores nacionales (macro)."

explicacion: |
  Verdadero. La macroeconomía es la suma agregada de comportamientos microeconómicos.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["perspectiva"]

respuesta: verdadero
tipo: vf

enunciado: "La micro y la macroeconomía son lentes diferentes para observar la misma realidad económica."

explicacion: |
  Verdadero. No son mundos separados, sino perspectivas complementarias.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["interdependencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si el Banco Central sube las tasas, el costo de oportunidad de consumir hoy aumenta para las familias."

explicacion: |
  Correcto. Ahorrar se vuelve más atractivo (mayor retorno) y consumir más caro (crédito costoso).
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["ejemplo-clasico"]

respuesta: verdadero
tipo: vf

enunciado: "Explicar por qué sube el precio del pan en una panadería específica es un problema microeconómico."

explicacion: |
  Sí, porque se refiere a un mercado y agente específico, no al nivel general de precios.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["costo-oportunidad", "macro"]

variables:
  ejemplo: "política monetaria"

respuesta: falso

tipo: vf

enunciado: "El costo de oportunidad es un concepto exclusivo de la microeconomía y no aplica a la macroeconomía."

explicacion: |
  El costo de oportunidad es fundamental en ambas ramas; la macro también evalúa renuncias al tomar políticas.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["interdependencia", "politica-monetaria"]

variables:
  decision_macro: "aumento de tasas de interés"
  efecto_micro: uno_de(["mayor costo de endeudamiento para familias", "disminución del ahorro", "aumento del consumo inmediato"])

respuesta: "mayor costo de endeudamiento para familias"
tipo: mc

opciones_explicitas: ["mayor costo de endeudamiento para familias", "disminución del ahorro", "aumento del consumo inmediato", "reducción de impuestos"]

enunciado: "Si el Banco Central toma una decisión macroeconómica de {decision_macro}, ¿cuál es un efecto directo en el comportamiento microeconómico de las familias?"

explicacion: |
  Las tasas de interés más altas encarecen los préstamos, afectando directamente la decisión de consumo o ahorro de las familias.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["costo-oportunidad", "micro"]

variables:
  recurso: "tiempo"
  alternativa: uno_de(["estudiar", "trabajar", "descansar"])

respuesta: "la mejor alternativa no elegida"
tipo: completar

enunciado: "El costo de oportunidad de dedicar {recurso} a {alternativa} es:"

explicacion: |
  El costo de oportunidad se define como el valor de la mejor alternativa a la que se renuncia al tomar una decisión.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["interdependencia", "agregacion"]

variables:
  decision_micro: "reducir la producción"
  resultado_macro: uno_de(["caída del PBI agregado", "aumento de la inflación", "devaluación del peso"])

respuesta: "caída del PBI agregado"
tipo: mc

opciones_explicitas: ["caída del PBI agregado", "aumento de la inflación", "devaluación del peso", "reducción del desempleo"]

enunciado: "Si todas las empresas del país toman una decisión microeconómica de {decision_micro}, ¿qué consecuencia macroeconómica es probable?"

explicacion: |
  La suma de reducciones de producción individual (micro) se traduce en una contracción de la actividad económica total (macro).
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["conceptos-basicos", "vf"]

variables:
  afirmacion: "micro y macro son mundos completamente separados"

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La micro y la macroeconomía son mundos completamente separados e independientes."

explicacion: |
  Falso. Son lentes complementarios para observar la misma realidad; las decisiones de uno afectan al otro.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["microeconomia", "enfoque"]

variables:
  analogia: "los árboles"
  analogia_macro: "el bosque"

respuesta: "los árboles"
tipo: completar

enunciado: "Se dice que la microeconomía estudia '{analogia}', mientras que la macroeconomía estudia '{analogia_macro}'."

explicacion: |
  La analogía clásica: la micro se enfoca en los detalles individuales (árboles) y la macro en el panorama general (bosque).
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["costo-oportunidad", "calculo"]

variables:
  ganancia_trabajo: random(10000, 50000)
  ganancia_estudio: 0

respuesta: ganancia_trabajo
tipo: input

enunciado: "Si un estudiante deja de trabajar para estudiar y pierde una ganancia potencial de ${ganancia_trabajo}, ¿cuál es el costo de oportunidad monetario directo?"

explicacion: |
  El costo de oportunidad es el beneficio de la mejor alternativa no elegida (en este caso, el salario dejado de percibir).
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["politica-fiscal", "interdependencia"]

variables:
  politica: "subida de impuestos corporativos"
  efecto_agregado: uno_de(["reducción del consumo agregado", "aumento de la productividad", "disminución de la inflación"])

respuesta: "reducción del consumo agregado"
tipo: mc

opciones_explicitas: ["reducción del consumo agregado", "aumento de la productividad", "disminución de la inflación", "incremento de las exportaciones"]

enunciado: "Una política fiscal macroeconómica de {politica} puede llevar a un efecto microeconómico que, agregado, resulta en:"

explicacion: |
  Al reducirse el ingreso disponible o las ganancias de las empresas, el consumo y la inversión individuales bajan, afectando el agregado.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["conceptos-basicos", "escasez"]

variables:
  concepto: "recursos escasos"
  necesidad: "necesidades ilimitadas"

respuesta: "escasa"
tipo: completar

enunciado: "La economía estudia cómo administrar {concepto} para satisfacer {necesidad}."

explicacion: |
  La definición fundamental de la economía gira en torno a la escasez de recursos frente a deseos ilimitados.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["conceptos-basicos", "vf"]

variables:
  lente: "macroeconomía"
  objeto: "el comportamiento de una familia"

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: El lente de la {lente} es el adecuado para analizar el comportamiento específico de una familia."

explicacion: |
  Falso. El comportamiento individual de una familia es objeto de estudio de la microeconomía.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["politica-monetaria", "costo-oportunidad"]

variables:
  cambio_macro: "aumento de tasas de interés"
  cambio_costo: "el costo de oportunidad de gastar"
  direccion: uno_de(["aumenta", "disminuye", "se mantiene"])

respuesta: "aumenta"
tipo: mc

opciones_explicitas: ["aumenta", "disminuye", "se mantiene", "es irrelevante"]

enunciado: "Si hay un {cambio_macro}, el {cambio_costo} de gastar dinero en lugar de ahorrar:"

explicacion: |
  Con tasas más altas, el interés que se deja de ganar por gastar (costo de oportunidad) es mayor.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["macroeconomia", "definicion", "vf"]

variables:
  definicion: "estudio de unidades individuales"

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La macroeconomía se define como el {definicion}."

explicacion: |
  Falso. Eso es la microeconomía. La macro estudia el conjunto.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["microeconomia", "definicion", "vf"]

variables:
  definicion: "estudio de unidades individuales"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La microeconomía se define como el {definicion}."

explicacion: |
  Verdadero. Se enfoca en familias, trabajadores y empresas.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["costo-oportunidad", "vf"]

variables:
  concepto: "costo de oportunidad"
  definicion: "lo que se gana al elegir una opción"

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: El {concepto} es {definicion}."

explicacion: |
  Falso. Es lo que se RENUNCIA (pierde) al elegir una opción.
```

