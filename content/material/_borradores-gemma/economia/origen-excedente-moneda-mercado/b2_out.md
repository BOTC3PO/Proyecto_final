### 1 — El problema del trueque
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["trueque", "intercambio"]

respuesta: "doble coincidencia de deseos"
tipo: completar
respuestas_validas: ["doble coincidencia de deseos"]

enunciado: "Para que el trueque sea efectivo, es necesaria la ___ de deseos, lo que significa que ambas partes deben querer intercambiar exactamente lo que el otro ofrece."

explicacion: |
  El trueque requiere que cada persona encuentre a otra que tenga lo que necesita y que, además, necesite lo que ella ofrece, un proceso ineficiente llamado doble coincidencia de deseos.
```

### 2 — Funciones de la moneda
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["funciones_moneda", "teoria_monetaria"]

variables:
  escenario: uno_de([
    ["Se usa para fijar el precio de un producto", "unidad de cuenta"],
    ["Se usa para comprar bienes hoy y pagar después", "medio de cambio"],
    ["Se usa para ahorrar para el futuro", "reserva de valor"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["unidad de cuenta", "medio de cambio", "reserva de valor"]

enunciado: "Si un comerciante utiliza una moneda para facilitar la transacción inmediata de un bien, está utilizando la moneda como: {escenario[0]}."

explicacion: |
  La función de medio de cambio permite que la moneda actúe como un intermediario en el intercambio, eliminando la necesidad de buscar una coincidencia exacta de bienes.
```

### 3 — Evolución de los medios de intercambio
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["evolucion_moneda", "historia_economica"]

respuesta: ["Trueque", "Dinero Mercancía", "Dinero Papel", "Dinero Fiduciario"]
tipo: ordenar

opciones_explicitas: ["Trueque", "Dinero Mercancía", "Dinero Papel", "Dinero Fiduciario"]

enunciado: "Ordena cronológicamente la evolución de los medios de intercambio en una economía de mercado:"

explicacion: |
  La economía evolucionó desde el intercambio directo de bienes (trueque) hacia mercancías con valor intrínseco (sal, oro), luego hacia representaciones físicas (papel moneda) y finalmente hacia sistemas basados en la confianza (fiduciario).
```

### 4 — El valor de la moneda
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["valor", "moneda"]

respuesta: 100
tipo: input
tolerancia_abs: 0.1

enunciado: "Si una unidad de medida de valor (unidad de cuenta) establece que un saco de trigo vale 5 monedas y un saco de cebada vale 8 monedas, ¿cuántas monedas se requieren para intercambiar ambos sacos de forma equivalente?"

pasos:
  - "Identificar el valor de cada bien en la unidad de cuenta."
  - "Sumar los valores de ambos bienes."

explicacion: |
  La función de unidad de cuenta permite expresar los valores de distintos bienes en términos comunes, facilitando la suma y comparación de precios.
```

### 5 — La función de reserva de valor
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["reserva_valor", "ahorro"]

respuesta: "reserva de valor"
tipo: mc
opciones_explicitas: ["medio de cambio", "unidad de cuenta", "reserva de valor"]

enunciado: "Cuando una persona decide guardar parte de sus ingresos en moneda para realizar una compra importante en el futuro, está utilizando la moneda como:"

explicacion: |
  La función de reserva de valor permite transferir poder adquisitivo del presente al futuro, permitiendo el ahorro.
```