### 1 — Cálculo de margen bruto
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["margen_bruto", "ventas", "costos_directos"]

variables:
  escenario: uno_de([
    ["Ventas: 1000, Costo de Mercadería: 600", "400"],
    ["Ventas: 5000, Costo de Mercadería: 3500", "1500"],
    ["Ventas: 2500, Costo de Mercadería: 1200", "1300"]
  ])
  idx: uno_de([0, 1, 2])
  datos: ["Ventas: 1000, Costo de Mercadería: 600", "Ventas: 5000, Costo de Mercadería: 3500", "Ventas: 2500, Costo de Mercadería: 1200"]
  respuestas: ["400", "1500", "1300"]

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: [datos[idx][1]]

enunciado: "Si una empresa registra {datos[idx][0]}, el margen bruto es de ___."

explicacion: |
  El margen bruto se calcula restando el Costo de Mercadería Vendida (CMV) a las Ventas Totales. 
  Fórmula: Ventas - Costo de Mercadería = Margen Bruto.
```

### 2 — Diferencia conceptual
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "Margen Neto"
tipo: mc
opciones_explicitas: ["Margen Bruto", "Margen Neto", "Margen de Contribución", "EBITDA"]

enunciado: "El indicador que mide la rentabilidad final de la empresa después de restar todos los gastos operativos, financieros e impuestos es el ___."

explicacion: |
  El margen neto es el indicador de rentabilidad más completo, ya que considera todos los costos y gastos de la estructura, no solo los directos de la mercadería.
```

### 3 — Verdad o Falso: Gastos Operativos
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["gastos_operativos", "logica"]

respuesta: falso

tipo: vf

enunciado: "Si una empresa tiene un margen bruto elevado, esto garantiza automáticamente que el margen neto también sea elevado, independientemente de sus gastos operativos."

explicacion: |
  Falso. Una empresa puede tener un margen bruto excelente, pero si sus gastos operativos (alquileres, sueldos administrativos, marketing) son excesivamente altos, el margen neto puede ser negativo.
```

### 4 — Escenario de Margen Neto
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "margen_neto"]

variables:
  escenario: uno_de([
    ["Ventas: 1000, Gastos: 800", "200"],
    ["Ventas: 5000, Gastos: 4500", "500"],
    ["Ventas: 2000, Gastos: 1900", "100"]
  ])
  idx: uno_de([0, 1, 2])
  datos: ["Ventas: 1000, Gastos: 800", "Ventas: 5000, Gastos: 4500", "Ventas: 2000, Gastos: 1900"]
  respuestas: ["200", "500", "100"]

respuesta: datos[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "Considerando que los gastos totales (incluyendo operativos e impuestos) son de {datos[idx][0]}, el margen neto es ___."

explicacion: |
  El margen neto es el remanente final: Ventas Totales - Todos los Gastos.
```

### 5 — Orden de la cascada de rentabilidad
```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["proceso", "orden"]

respuesta: ["Ventas", "Margen Bruto", "Margen Neto"]
tipo: ordenar
opciones_explicitas: ["Ventas", "Margen Bruto", "Margen Neto", "Costo de Mercadería"]

enunciado: "Ordena los conceptos según el flujo lógico de cálculo de rentabilidad, desde el ingreso total hasta el beneficio final:"

explicacion: |
  Primero se obtienen las Ventas, a las que se les resta el costo directo para obtener el Margen Bruto, y finalmente a este se le restan los gastos operativos para llegar al Margen Neto.
```