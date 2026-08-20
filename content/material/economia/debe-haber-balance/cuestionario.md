# Economía — Debe y haber en un balance (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. `Activo = Pasivo + Patrimonio
> Neto`. Activo aumenta por el Debe; Pasivo y Patrimonio Neto aumentan
> por el Haber.

---

### 1 — Qué es el activo

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

### 2 — Qué es el pasivo

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

### 3 — Qué es el patrimonio neto

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

### 4 — La ecuación contable fundamental

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

### 5 — Calcular el patrimonio neto

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

### 6 — Calcular el activo

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

### 7 — Calcular el pasivo

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

### 8 — Qué es el Debe

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

### 9 — Qué es el Haber

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

### 10 — Debe y Haber no son literales

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

### 11 — El activo aumenta por el Debe

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

### 12 — El activo disminuye por el Haber

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

### 13 — El pasivo aumenta por el Haber

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

### 14 — El patrimonio neto aumenta por el Haber

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

### 15 — Calcular el saldo de una cuenta de Activo

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

### 16 — Calcular el saldo de una cuenta de Pasivo

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

### 17 — Comparar patrimonio neto entre dos empresas

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

### 18 — La ecuación siempre está en equilibrio

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

### 19 — Ordenar de menor a mayor patrimonio neto

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

### 20 — Verificar un cálculo de patrimonio neto (con error a veces)

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

### 21 — Completar el pasivo

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

### 22 — Debe y haber en un balance (cierre)

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
