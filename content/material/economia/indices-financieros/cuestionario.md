# Economia — indices financieros (cuestionario, 22 preguntas VBLang)

> Tema: `economia/indices-financieros`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["liquidez", "corriente"]

variables:
  ac: random(100, 500)
  pc: random(50, 150)
  resultado: redondear(ac / pc, 2)

respuesta: "{resultado}"
tipo: input

enunciado: "Una empresa tiene Activos Corrientes de {ac} y Pasivos Corrientes de {pc}. Calculá el índice de Liquidez Corriente. Redondeá a 2 decimales."

explicacion: |
  La Liquidez Corriente se calcula dividiendo los Activos Corrientes entre los Pasivos Corrientes.
  Fórmula: AC / PC.
```

### 2 — pregunta 2

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rotacion", "stock"]

variables:
  costo: random(1000, 5000)
  inventario: random(100, 500)
  resultado: redondear(costo / inventario, 2)

respuesta: "{resultado}"
tipo: input

enunciado: "El Costo de Mercadería Vendida es {costo} y el Inventario Promedio es {inventario}. Calculá la rotación de stock."

explicacion: |
  La rotación de stock mide cuántas veces se renueva el inventario. Se calcula como Costo de Mercadería Vendida / Inventario Promedio.
```

### 3 — pregunta 3

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["balance", "activos"]

variables:
  ac: random(100, 300)
  af: random(400, 900)
  resultado: ac + af

respuesta: "{resultado}"
tipo: input

enunciado: "Los Activos Corrientes son {ac} y los Activos Fijos son {af}. ¿Cuál es el total de Activos?"

explicacion: |
  Activos Totales = Activos Corrientes + Activos Fijos.
```

### 4 — pregunta 4

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["liquidez", "acida"]

variables:
  ac: random(200, 500)
  inventario: random(50, 150)
  pc: random(100, 300)
  numerador: ac - inventario
  resultado: redondear(numerador / pc, 2)

respuesta: "{resultado}"
tipo: input

enunciado: "Activos Corrientes: {ac}, Inventario: {inventario}, Pasivos Corrientes: {pc}. Calculá la Liquidez Ácida."

explicacion: |
  Liquidez Ácida = (Activos Corrientes - Inventario) / Pasivos Corrientes.
  Elimina el inventario porque es el activo menos líquido.
```

### 5 — pregunta 5

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["conceptos", "costo"]

variables:
  tasa: random(5, 15)
  monto: random(1000, 5000)
  interes: redondear(monto * (tasa / 100), 0)

respuesta: "{interes}"
tipo: completar

enunciado: "Si inviertes {monto} a una tasa del {tasa}% anual, el rendimiento futuro es {interes}. Este monto representa el costo de oportunidad de no tener el dinero disponible hoy."

explicacion: |
  El costo de oportunidad en finanzas suele referirse al retorno perdido al elegir una alternativa sobre otra. Aquí se calcula el interés generado.
```

### 6 — pregunta 6

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rotacion", "cuentas_cobrar"]

variables:
  ventas_credito: random(10000, 50000)
  cuentas_cobrar: random(1000, 5000)
  dias: 360
  rotacion: ventas_credito / cuentas_cobrar
  resultado: floor(dias / rotacion)

respuesta: "{resultado}"
tipo: input

enunciado: "Ventas a Crédito: {ventas_credito}, Cuentas por Cobrar: {cuentas_cobrar}. Usando un año de 360 días, calculá el período promedio de cobro en días."

explicacion: |
  Período de Cobro = 360 / (Ventas a Crédito / Cuentas por Cobrar).
```

### 7 — pregunta 7

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "avanzado"
  tags: ["valor_tiempo", "vp"]

variables:
  vf: random(1000, 5000)
  tasa: random(5, 10)
  anios: uno_de([1, 2, 3])
  resultado: redondear(vf / ((1 + tasa/100) ^ anios), 2)

respuesta: "{resultado}"
tipo: input

enunciado: "Un valor futuro de {vf} dentro de {anios} años, con una tasa de descuento del {tasa}%, tiene un Valor Presente de aproximadamente:"

explicacion: |
  VP = VF / (1 + r)^n.
```

### 8 — pregunta 8

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["liquidez", "efectivo"]

variables:
  caja: random(100, 500)
  bancos: random(200, 800)
  resultado: caja + bancos

respuesta: "{resultado}"
tipo: input

enunciado: "Caja: {caja}, Bancos: {bancos}. ¿Cuál es el total de Efectivo y Equivalentes de Efectivo?"

explicacion: |
  Efectivo = Caja + Bancos. Es el activo más líquido.
```

### 9 — pregunta 9

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "avanzado"
  tags: ["costo", "capital"]

variables:
  dividendo: random(2, 10)
  precio: random(20, 50)
  crecimiento: random(2, 8)
  costo: redondear((dividendo / precio) + (crecimiento / 100), 4)

respuesta: "{costo}"
tipo: input

enunciado: "Dividendo esperado: {dividendo}, Precio de la acción: {precio}, Tasa de crecimiento: {crecimiento}%. Calculá el Costo de Capital Accionario (Modelo Gordon)."

explicacion: |
  Ke = (D1 / P0) + g.
  Donde D1 es dividendo, P0 precio y g tasa de crecimiento.
```

### 10 — pregunta 10

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["costos", "equilibrio"]

variables:
  costos_fijos: random(1000, 5000)
  precio: random(100, 300)
  costo_variable: random(40, 80)
  resultado: floor(costos_fijos / (precio - costo_variable))

respuesta: "{resultado}"
tipo: input

enunciado: "Costos Fijos: {costos_fijos}, Precio de Venta: {precio}, Costo Variable Unitario: {costo_variable}. Calculá el punto de equilibrio en unidades."

explicacion: |
  Punto de Equilibrio = Costos Fijos / (Precio - Costo Variable Unitario).
```

### 11 — pregunta 11

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["valor_tiempo", "vf"]

variables:
  pv: random(1000, 5000)
  tasa: random(5, 10)
  anios: uno_de([1, 2, 3])
  resultado: redondear(pv * ((1 + tasa/100) ^ anios), 2)

respuesta: "{resultado}"
tipo: input

enunciado: "Si inviertes {pv} hoy a una tasa del {tasa}% anual durante {anios} años, el Valor Futuro será:"

explicacion: |
  VF = PV * (1 + r)^n.
```

### 12 — pregunta 12

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["liquidez", "inmediata"]

variables:
  efectivo: random(50, 200)
  pc: random(100, 400)
  resultado: redondear(efectivo / pc, 2)

respuesta: "{resultado}"
tipo: input

enunciado: "Efectivo y Equivalentes: {efectivo}, Pasivos Corrientes: {pc}. Calculá la Liquidez Inmediata."

explicacion: |
  Liquidez Inmediata = Efectivo / Pasivos Corrientes.
  Mide la capacidad de pago sin vender inventario.
```

### 13 — pregunta 13

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["recuperacion", "inversion"]

variables:
  inversion: random(5000, 15000)
  flujo_anual: random(1000, 3000)
  resultado: floor(inversion / flujo_anual)

respuesta: "{resultado}"
tipo: input

enunciado: "Inversión Inicial: {inversion}, Flujo de Caja Anual Constante: {flujo_anual}. Calculá el periodo de recuperación simple en años."

explicacion: |
  Periodo de Recuperación = Inversión Inicial / Flujo de Caja Anual.
```

### 14 — pregunta 14

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "avanzado"
  tags: ["wacc", "capital"]

variables:
  deuda_ratio: 0.4
  eq_ratio: 0.6
  costo_deuda: 0.08
  costo_equity: 0.12
  impuesto: 0.30
  wacc: redondear((deuda_ratio * costo_deuda * (1 - impuesto)) + (eq_ratio * costo_equity), 4)

respuesta: "{wacc}"
tipo: input

enunciado: "Estructura de Capital: 40% Deuda, 60% Equity. Costo Deuda: 8%, Costo Equity: 12%, Impuesto: 30%. Calculá el WACC."

explicacion: |
  WACC = (Wd * Kd * (1-T)) + (We * Ke).
```

### 15 — pregunta 15

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["liquidez", "interpretacion"]

variables:
  ac: random(100, 300)
  pc: random(301, 500)

respuesta: falso
tipo: vf

enunciado: "Si una empresa tiene Activos Corrientes de {ac} y Pasivos Corrientes de {pc}, su Liquidez Corriente indica que tiene holgura para pagar sus deudas a corto plazo."

explicacion: |
  Falso. Al ser {ac} < {pc}, el índice es menor a 1 ({redondear(ac/pc, 2)}), lo que indica dificultad potencial para cubrir obligaciones a corto plazo.
```

### 16 — pregunta 16

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rotacion", "eficiencia"]

variables:
  costo_ventas: random(1000, 5000)
  inventario: random(100, 500)

respuesta: verdadero
tipo: vf

enunciado: "Un índice de rotación de inventario alto indica que la empresa vende su mercadería rápidamente y la mantiene poco tiempo en almacén."

explicacion: |
  Verdadero. Una rotación alta significa que el inventario se renueva frecuentemente, lo que suele ser un signo de buena gestión y demanda.
```

### 17 — pregunta 17

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["estructura", "riesgo"]

variables:
  ratio: uno_de([0.3, 0.4, 0.5, 0.6, 0.7])

respuesta: falso
tipo: vf

enunciado: "Un ratio de endeudamiento del {ratio} se considera generalmente de muy bajo riesgo financiero para cualquier tipo de empresa."

explicacion: |
  Falso. Un ratio de {ratio} ({ratio*100}%) indica que el 40-70% de los activos está financiado con deuda, lo que representa un nivel de riesgo moderado a alto, dependiendo del sector.
```

### 18 — pregunta 18

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["rentabilidad", "interpretacion"]

variables:
  margen: uno_de([0.05, 0.1, 0.15, 0.2, 0.3])

respuesta: verdadero
tipo: vf

enunciado: "Un margen neto del {margen*100}% significa que por cada peso vendido, la empresa se queda con {redondear(margen*100, 1)} centavos de ganancia después de todos los gastos."

explicacion: |
  Verdadero. El margen neto refleja la eficiencia global de la empresa en la conversión de ventas en ganancias.
```

### 19 — pregunta 19

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["estructura", "riesgo"]

variables:
  ratio: uno_de([0.5, 0.8, 1.2, 1.5, 2.0])

respuesta: falso
tipo: vf

enunciado: "Un ratio Deuda/Patrimonio de {ratio} indica que la empresa está financiada principalmente con recursos propios (patrimonio)."

explicacion: |
  Falso. Si el ratio es mayor a 1 (como {ratio}), significa que la deuda es mayor que el patrimonio, por lo que la financiación es principalmente ajena.
```

### 20 — pregunta 20

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["rentabilidad", "interpretacion"]

variables:
  margen: uno_de([0.05, 0.1, 0.15, 0.2, 0.3])

respuesta: verdadero
tipo: vf

enunciado: "Un margen operativo del {margen*100}% indica la eficiencia de la empresa en la gestión de sus costos y gastos operativos antes de impuestos e intereses."

explicacion: |
  Verdadero. El margen operativo refleja la rentabilidad del negocio principal, excluyendo efectos financieros y tributarios.
```

### 21 — pregunta 21

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rentabilidad", "interpretacion"]

variables:
  roe: uno_de([0.05, 0.1, 0.15, 0.2, 0.3])

respuesta: verdadero
tipo: vf

enunciado: "Un ROE del {roe*100}% indica que por cada peso invertido por los accionistas, la empresa generó {redondear(roe*100, 1)} centavos de ganancia."

explicacion: |
  Verdadero. El ROE es una medida clave de la rentabilidad desde la perspectiva del accionista.
```

### 22 — pregunta 22

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rotacion", "interpretacion"]

variables:
  rotacion: uno_de([0.5, 1.0, 1.5, 2.0, 3.0])

respuesta: verdadero
tipo: vf

enunciado: "Una rotación de activo total de {rotacion} indica que la empresa genera {rotacion} pesos de ventas por cada peso de activo que posee."

explicacion: |
  Verdadero. Este ratio refleja la eficiencia en el uso de los activos para generar ingresos.
```
