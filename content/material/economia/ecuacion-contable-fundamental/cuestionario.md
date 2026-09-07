# Economia — ecuacion contable fundamental (cuestionario, 26 preguntas VBLang)

> Tema: `economia/ecuacion-contable-fundamental`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["activo", "concepto"]

respuesta: verdadero
tipo: vf

enunciado: "El Activo representa lo que la empresa posee o tiene derecho a cobrar, como dinero, mercadería o edificios."

explicacion: |
  Correcto. El Activo refleja los recursos económicos controlados por la entidad.
```

### 2 — pregunta 2

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["financiamiento", "pasivo"]

respuesta: verdadero
tipo: vf

enunciado: "El Pasivo representa la parte del Activo que fue financiada con recursos de terceros (prestamistas)."

explicacion: |
  Correcto. El Pasivo son fondos externos que la empresa debe devolver.
```

### 3 — pregunta 3

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["equilibrio", "principio"]

respuesta: verdadero
tipo: vf

enunciado: "Cada transacción comercial afecta al menos dos elementos de la ecuación contable, manteniendo siempre el equilibrio."

explicacion: |
  Correcto. La partida doble asegura que la ecuación siempre se mantenga balanceada.
```

### 4 — pregunta 4

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["pasivo", "deuda"]

respuesta: verdadero
tipo: vf

enunciado: "El Pasivo se refiere a las deudas que la empresa tiene con proveedores, bancos o el Estado."

explicacion: |
  Correcto. Las deudas comerciales y financieras forman parte del Pasivo.
```

### 5 — pregunta 5

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["activo", "derechos"]

respuesta: verdadero
tipo: vf

enunciado: "El Activo incluye tanto bienes tangibles como derechos, como facturas por cobrar."

explicacion: |
  Correcto. Los derechos de cobro son activos corrientes o no corrientes.
```

### 6 — pregunta 6

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "avanzado"
  tags: ["solvencia", "analisis"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación contable permite evaluar si una compañía es solvente comparando sus activos con sus pasivos."

explicacion: |
  Correcto. Un Patrimonio Neto positivo indica que los activos superan a las deudas.
```

### 7 — pregunta 7

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["teoria", "logica"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación contable es una representación lógica de la realidad económica de la empresa."

explicacion: |
  Correcto. Refleja cómo se han financiado los recursos de la empresa.
```

### 8 — pregunta 8

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["clasificacion", "activo"]

respuesta: verdadero
tipo: vf

enunciado: "El dinero en caja de una empresa se clasifica como Activo."

explicacion: |
  El dinero en caja es un bien tangible que la empresa posee, por lo tanto, forma parte del Activo.
```

### 9 — pregunta 9

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["clasificacion", "pasivo"]

respuesta: verdadero
tipo: vf

enunciado: "Las deudas con proveedores se clasifican como Pasivo."

explicacion: |
  Las deudas con proveedores son obligaciones con terceros externos, lo que las define como Pasivo.
```

### 10 — pregunta 10

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["clasificacion", "patrimonio"]

respuesta: verdadero
tipo: vf

enunciado: "El capital aportado por los socios se clasifica como Patrimonio Neto."

explicacion: |
  El capital aportado por los dueños representa la riqueza neta que les pertenece, por lo tanto, es Patrimonio Neto.
```

### 11 — pregunta 11

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "patrimonio"]

variables:
  activo: random(100000, 500000)
  pasivo: random(20000, 100000)

respuesta: "{activo} - {pasivo}"
tipo: input

enunciado: "Si una empresa tiene un Activo total de ${activo} y un Pasivo total de ${pasivo}, ¿cuál es su Patrimonio Neto?"

explicacion: |
  Despejando la ecuación fundamental: Patrimonio Neto = Activo - Pasivo.
```

### 12 — pregunta 12

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "pasivo"]

variables:
  activo: random(100000, 500000)
  patrimonio: random(20000, 100000)

respuesta: "{activo} - {patrimonio}"
tipo: input

enunciado: "Si el Activo total es ${activo} y el Patrimonio Neto es ${patrimonio}, ¿cuánto es el Pasivo?"

explicacion: |
  Despejando la ecuación fundamental: Pasivo = Activo - Patrimonio Neto.
```

### 13 — pregunta 13

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "activo"]

variables:
  pasivo: random(20000, 100000)
  patrimonio: random(20000, 100000)

respuesta: "{pasivo} + {patrimonio}"
tipo: input

enunciado: "Si el Pasivo es ${pasivo} y el Patrimonio Neto es ${patrimonio}, ¿cuál es el Activo total?"

explicacion: |
  Despejando la ecuación fundamental: Activo = Pasivo + Patrimonio Neto.
```

### 14 — pregunta 14

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["equilibrio", "lógica"]

respuesta: verdadero
tipo: vf

enunciado: "Cada transacción comercial afecta al menos dos elementos, pero la igualdad de la ecuación siempre se mantiene."

explicacion: |
  La doble entrada asegura que la ecuación se mantenga equilibrada después de cualquier operación.
```

### 15 — pregunta 15

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["transaccion", "activo"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa compra una máquina pagando en efectivo, el total del Activo no cambia."

explicacion: |
  Un activo (máquina) aumenta y otro activo (caja) disminuye en la misma cantidad, manteniendo el total inalterado.
```

### 16 — pregunta 16

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["transaccion", "pasivo"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa compra mercadería a crédito, tanto el Activo como el Pasivo aumentan."

explicacion: |
  La mercadería aumenta el Activo y la deuda con el proveedor aumenta el Pasivo, manteniendo el equilibrio.
```

### 17 — pregunta 17

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["transaccion", "liquidez"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa paga una deuda con dinero en caja, tanto el Activo como el Pasivo disminuyen."

explicacion: |
  El dinero sale (Activo baja) y la deuda se reduce (Pasivo baja), manteniendo la igualdad.
```

### 18 — pregunta 18

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["transaccion", "patrimonio"]

respuesta: verdadero
tipo: vf

enunciado: "Si los socios aportan más dinero a la empresa, el Activo y el Patrimonio Neto aumentan."

explicacion: |
  Entra dinero (Activo sube) y el derecho de los socios sobre ese dinero (Patrimonio Neto) también sube.
```

### 19 — pregunta 19

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["relacion", "logica"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación contable es una representación lógica de la realidad financiera de la empresa."

explicacion: |
  No es solo una fórmula, sino un reflejo de cómo se financian los recursos (deuda vs propio).
```

### 20 — pregunta 20

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "activo"]

variables:
  pasivo: random(10000, 50000)
  patrimonio: random(10000, 50000)

respuesta: verdadero
tipo: vf

enunciado: "Si el Pasivo es {pasivo} y el Patrimonio Neto es {patrimonio}, el Activo debe ser {pasivo} + {patrimonio}."

explicacion: |
  La ecuación fundamental exige que Activo sea la suma de Pasivo y Patrimonio Neto.
```

### 21 — pregunta 21

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "patrimonio"]

variables:
  activo: random(100000, 500000)
  pasivo: random(20000, 100000)

respuesta: verdadero
tipo: vf

enunciado: "Si el Activo es {activo} y el Pasivo es {pasivo}, el Patrimonio Neto debe ser {activo} - {pasivo}."

explicacion: |
  Despejando la ecuación, el Patrimonio Neto es la diferencia entre lo que tiene y lo que debe.
```

### 22 — pregunta 22

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "pasivo"]

variables:
  activo: random(100000, 500000)
  patrimonio: random(20000, 100000)

respuesta: verdadero
tipo: vf

enunciado: "Si el Activo es {activo} y el Patrimonio Neto es {patrimonio}, el Pasivo debe ser {activo} - {patrimonio}."

explicacion: |
  Despejando la ecuación, el Pasivo es lo que resta del Activo una vez descontado el capital propio.
```

### 23 — pregunta 23

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["equilibrio", "regla"]

respuesta: verdadero
tipo: vf

enunciado: "Si los recursos de la empresa no se explican como deuda o capital propio, hay un error en el registro."

explicacion: |
  La ecuación garantiza el equilibrio interno; cualquier desbalance indica un error contable.
```

### 24 — pregunta 24

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["patrimonio", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "El Patrimonio Neto incluye el capital inicial y las ganancias reinvertidas."

explicacion: |
  Es la riqueza neta que pertenece a los socios, formada por lo aportado y lo generado por la actividad.
```

### 25 — pregunta 25

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["activo", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "El Activo incluye bienes tangibles como edificios y máquinas."

explicacion: |
  Los activos son los recursos que la empresa posee o tiene derecho a cobrar, incluyendo bienes físicos.
```

### 26 — pregunta 26

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["pasivo", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "El Pasivo son los fondos que provienen de prestamistas o proveedores."

explicacion: |
  El Pasivo representa las obligaciones financieras con terceros externos que financian los recursos de la empresa.
```
