# Economía — Estados contables: patrimonio y ciclo contable completo (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Patrimonio = foto de un
> instante (Activo = Pasivo + PN). Resultados = película de un período
> (Ingresos - Gastos).

---

### 1 — Qué es el ciclo contable

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

### 2 — Ordenar el ciclo contable

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

### 3 — Qué es el Estado de Situación Patrimonial

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

### 4 — Qué es el Estado de Resultados

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

### 5 — La ecuación patrimonial

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

### 6 — Calcular el Patrimonio Neto

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

### 7 — Calcular el Activo a partir de Pasivo y Patrimonio Neto

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

### 8 — El resultado: ganancia o pérdida

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

### 9 — Calcular el resultado del período (ganancia)

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

### 10 — Identificar ganancia o pérdida

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

### 11 — Qué es el balance de comprobación

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

### 12 — Qué son los ajustes de cierre

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

### 13 — Qué pasa con el resultado al cerrar el ejercicio

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

### 14 — Ganancia aumenta el patrimonio

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

### 15 — Pérdida reduce el patrimonio

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

### 16 — Calcular el Patrimonio Neto final tras un período con ganancia

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

### 17 — Foto vs. película

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

### 18 — Quién consulta el Patrimonial para dar un crédito

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

### 19 — Quién consulta el Estado de Resultados para invertir

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

### 20 — Completar la fórmula del resultado

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

### 21 — Ciclo contable y patrimonio son un solo tema

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

### 22 — Cierre del tema

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
