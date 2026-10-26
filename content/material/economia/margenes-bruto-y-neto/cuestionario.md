# Economia — Margenes bruto y neto (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Margen Bruto

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["definicion", "margen_bruto"]

respuesta: "ventas_netas - costo_ventas"
tipo: completar
respuestas_validas:
  - "ventas_netas - costo_ventas"
  - "Ventas Netas - Costo de Ventas"

enunciado: "El margen bruto se calcula restando el costo de ventas a las ___."

explicacion: |
  El margen bruto mide la rentabilidad de la producción o compra de bienes, sin tener en cuenta los gastos operativos (alquiler, sueldos administrativos, etc.).
```

### 2 — Diferencia fundamental

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["diferencia", "margen_neto"]

opciones_explicitas: ["El margen neto incluye los gastos operativos y financieros, mientras que el bruto no.", "El margen bruto es mayor que el neto siempre.", "El margen neto solo considera el costo de la mercadería.", "No hay diferencia entre ambos."]
respuesta: "El margen neto incluye los gastos operativos y financieros, mientras que el bruto no."
tipo: mc

enunciado: "Si una empresa tiene un margen bruto alto pero un margen neto muy bajo, ¿qué se puede deducir?"

explicacion: |
  Un margen neto bajo con un margen bruto alto indica que la empresa tiene costos operativos (gastos de administración, ventas o financieros) muy elevados que consumen la utilidad bruta.
```

### 3 — Verdad o Falso: Rentabilidad Final

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["veracidad", "margen_neto"]

respuesta: falso
tipo: vf

enunciado: "El margen neto representa la rentabilidad de la empresa antes de considerar impuestos y gastos operativos."

explicacion: |
  Falso. El margen neto es el indicador de rentabilidad final, ya que se calcula después de restar todos los gastos, incluyendo operativos, financieros e impuestos.
```

### 4 — Cálculo de Margen Bruto

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "margen_bruto"]

variables:
  escenario: uno_de([[1000, 600], [500, 350], [2000, 1200]])

respuesta: escenario[0] - escenario[1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si las ventas netas son {escenario[0]} y el costo de ventas es {escenario[1]}, ¿cuál es el valor del margen bruto?"

pasos:
  - "Identificar las Ventas Netas: {escenario[0]}"
  - "Identificar el Costo de Ventas: {escenario[1]}"
  - "Restar: Ventas - Costo"

explicacion: |
  El margen bruto es la diferencia entre el ingreso por ventas y lo que costó producir o comprar esa mercadería vendida.
```

### 5 — Orden de la cascada de rentabilidad

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["orden", "jerarquia"]

opciones_explicitas: ["Ventas Netas", "Margen Bruto", "Margen Operativo", "Margen Neto"]
respuesta_orden: ["Ventas Netas", "Margen Bruto", "Margen Operativo", "Margen Neto"]
tipo: ordenar

enunciado: "Ordena los conceptos desde el ingreso total hasta la utilidad final (el resultado más pequeño), siguiendo la estructura lógica de un estado de resultados."

explicacion: |
  La estructura lógica comienza con el ingreso total (Ventas), se le resta el costo para obtener el Margen Bruto, luego se restan los gastos operativos para el Margen Operativo, y finalmente impuestos y financieros para llegar al Margen Neto.
```

### 6 — Diferencia conceptual clave

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["conceptos", "margen_bruto", "margen_neto"]

respuesta: "bruto"
tipo: "completar"
respuestas_validas:
  - "bruto"

enunciado: "El margen que se calcula restando únicamente los costos de ventas a los ingresos totales se denomina margen ___."

explicacion: |
  El margen bruto mide la rentabilidad directa del producto/servicio (Ingresos - Costo de Ventas). El margen neto es el beneficio real final tras considerar todos los gastos de la estructura operativa.
```

### 7 — Cálculo de Margen Bruto

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "margen_bruto"]

variables:
  idx: uno_de([0, 1])
  datos: [[1000, 600], [2500, 1500]]

respuesta: datos[idx][1]
tipo: "completar"
tolerancia_abs: 0.01

enunciado: "Una empresa tiene un nivel de ventas de ${datos[idx][0]} y un costo de ventas de ${datos[idx][0] - datos[idx][1]}. ¿Cuál es el valor del margen bruto (en unidades monetarias)?"

pasos:
  - "Identificar Ingresos Totales: ${datos[idx][0]}"
  - "Identificar Costo de Ventas: ${datos[idx][0] - datos[idx][1]}"
  - "Calcular Margen Bruto: Ingresos - Costo de Ventas"

explicacion: |
  El margen bruto se obtiene restando el costo de los bienes vendidos a las ventas totales. En este caso: ${datos[idx][0]} - (${datos[idx][0]} - ${datos[idx][1]}) = ${datos[idx][1]}.
```

### 8 — Relación entre márgenes

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["relacion", "conceptos"]

respuesta: falso
tipo: "vf"

enunciado: "Si una empresa tiene un margen neto positivo, es matemáticamente imposible que su margen bruto sea negativo."

explicacion: |
  Falso. El margen bruto es el primer paso; si es negativo, el margen neto será aún más negativo (ya que se le restan más gastos). Un margen neto positivo implica necesariamente que el margen bruto también lo es.
```

### 9 — Análisis de rentabilidad

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "avanzado"
  tags: ["analisis", "mc"]

variables:
  idx: uno_de([0, 1, 2])
  empresas: ["Empresa A", "Empresa B", "Empresa C"]
  margenes_brutos: [40, 20, 50]
  margenes_netos: [10, 5, 2]
  diferencias_texto: ["30%", "15%", "48%"]

respuesta: diferencias_texto[idx]
tipo: "mc"
opciones_explicitas: ["30%", "15%", "48%"]

enunciado: "Si la {empresas[idx]} presenta un margen bruto del {margenes_brutos[idx]}% y un margen neto del {margenes_netos[idx]}%, ¿cuál es la diferencia absoluta entre el margen bruto y el margen neto (en puntos porcentuales)?"

explicacion: |
  La diferencia se calcula restando el margen neto del margen bruto.
```

### 10 — Proceso de cálculo de utilidad

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["proceso", "ordenar"]

respuesta_orden: ["Ingresos", "Costo de Ventas", "Gastos Operativos", "Utilidad Neta"]
tipo: "ordenar"
opciones_explicitas: ["Ingresos", "Costo de Ventas", "Gastos Operativos", "Utilidad Neta"]

enunciado: "Ordena los conceptos según el proceso lógico para llegar desde el ingreso bruto hasta la utilidad neta (margen neto):"

explicacion: |
  El flujo contable estándar es: 1. Ingresos -> 2. Restar Costo de Ventas (Margen Bruto) -> 3. Restar Gastos Operativos -> 4. Resultado final (Utilidad Neta/Margen Neto).
```

### 11 — Confusión entre Margen Bruto y Neto

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["rentabilidad", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["La diferencia entre ventas y costo de ventas", "La diferencia entre ventas y todos los gastos operativos", "La diferencia entre ingresos totales y impuestos"]
respuesta: "La diferencia entre ventas y costo de ventas"

enunciado: "Un error común es confundir el margen bruto con el margen neto. ¿Qué mide específicamente el margen bruto?"

explicacion: |
  El margen bruto solo considera la diferencia entre las ventas y el costo de los bienes vendidos (COGS). No tiene en cuenta los gastos de administración, ventas o financieros.
```

### 12 — El impacto de los gastos operativos

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["gastos_operativos", "margen_neto"]

tipo: vf
respuesta: falso

enunciado: "Si una empresa aumenta sus gastos de alquiler y salarios administrativos, pero mantiene sus costos de producción constantes, su margen bruto aumentará."

explicacion: |
  Falso. El aumento de gastos operativos (alquiler, salarios) reduce el margen neto, pero el margen bruto solo se ve afectado por los costos directos de producción.
```

### 13 — Cálculo de la rentabilidad real

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "margen_neto"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[1000, 400, 200, 100], [2000, 1200, 500, 300]]

tipo: completar
tolerancia_abs: 0
respuesta: datos[escenario_idx][0] - datos[escenario_idx][1] - datos[escenario_idx][2] - datos[escenario_idx][3]

enunciado: "Considera el siguiente escenario: Ventas: {datos[escenario_idx][0]}, Costo de Ventas: {datos[escenario_idx][1]}, Gastos Operativos: {datos[escenario_idx][2]}, Impuestos: {datos[escenario_idx][3]}. El margen neto (en valor absoluto) es ___."

pasos:
  - "Restar el costo de ventas a las ventas para obtener la utilidad bruta."
  - "Restar los gastos operativos y los impuestos a la utilidad bruta."

explicacion: |
  El margen neto es la ganancia final después de restar TODOS los costos y gastos: {datos[escenario_idx][0]} - {datos[escenario_idx][1]} - {datos[escenario_idx][2]} - {datos[escenario_idx][3]}.
```

### 14 — Jerarquía de la rentabilidad

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["orden", "estructura_contable"]

tipo: ordenar
opciones_explicitas: ["Ventas Totales", "Utilidad Bruta", "Utilidad Operativa", "Utilidad Neta"]
respuesta_orden: ["Ventas Totales", "Utilidad Bruta", "Utilidad Operativa", "Utilidad Neta"]

enunciado: "Ordena los conceptos de mayor a menor nivel de rentabilidad (desde el ingreso bruto hasta la ganancia final):"

explicacion: |
  La estructura contable sigue un orden descendente: primero se restan los costos directos (Bruta), luego los gastos operativos (Operativa) y finalmente impuestos y otros (Neta).
```

### 15 — Análisis de eficiencia

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "avanzado"
  tags: ["analisis", "eficiencia"]

tipo: mc
opciones_explicitas: ["Un margen bruto alto con un margen neto muy bajo", "Un margen bruto bajo con un margen neto alto", "Un margen bruto igual al margen neto"]
respuesta: "Un margen bruto alto con un margen neto muy bajo"

enunciado: "Si una empresa reporta un margen bruto muy elevado, pero su margen neto es casi cero, ¿qué es lo más probable que esté sucediendo?"

explicacion: |
  Esto indica que la empresa es eficiente en su producción (bajo costo de ventas), pero tiene una estructura de gastos operativos (administración, marketing, alquileres) extremadamente pesada.
```

### 16 — Diferencia conceptual fundamental

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["La diferencia entre el margen bruto y el neto es la inclusión de los gastos operativos y otros costos indirectos.", "La diferencia radica en que el margen bruto mide la rentabilidad sobre la inversión y el neto sobre las ventas.", "El margen bruto es siempre mayor que el margen neto porque incluye los impuestos.", "No existe diferencia, son términos sinónimos en contabilidad básica."]

respuesta: "La diferencia entre el margen bruto y el neto es la inclusión de los gastos operativos y otros costos indirectos."

enunciado: "Al comparar ambos indicadores, ¿cuál es la principal distinción conceptual?"

explicacion: |
  El margen bruto se calcula restando solo el costo de los bienes vendidos (COGS) de las ventas totales. El margen neto es lo que queda después de restar TODOS los gastos (operativos, financieros, impuestos, etc.).
```

### 17 — El impacto de los gastos operativos

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "gastos_operativos"]

variables:
  escenario: uno_de([["Ventas: 1000, Costo de Ventas: 400, Gastos Operativos: 200", "400"], ["Ventas: 5000, Costo de Ventas: 2000, Gastos Operativos: 1500", "1500"]])

tipo: completar
respuestas_validas:
  - escenario[1]

enunciado: "Si una empresa tiene {escenario[0]}, su margen neto es ___."

pasos:
  - "1. Calcular Margen Bruto: Ventas - Costo de Ventas"
  - "2. Calcular Margen Neto: Margen Bruto - Gastos Operativos"

explicacion: |
  El margen bruto se calcula restando el Costo de Ventas a las Ventas.
  El margen neto se calcula restando los Gastos Operativos al Margen Bruto.
  Dependiendo del escenario sorteado, los valores cambian, pero la lógica es la misma.

respuesta: escenario[1]
```

### 18 — El impacto de los gastos operativos (Corregido)

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "gastos_operativos"]

variables:
  escenario: uno_de([[1000, 600, 250], [5000, 3000, 1200]])

tipo: completar
tolerancia_abs: 0

enunciado: "Si una empresa tiene ventas de {escenario[0]}, un margen bruto de {escenario[1]} y gastos operativos de {escenario[2]}, el margen neto es ___."

respuesta: escenario[1] - escenario[2]

explicacion: |
  El margen neto se obtiene restando los gastos operativos al margen bruto.
```

### 19 — Veracidad de la relación

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["verdadero_falso"]

tipo: vf
respuesta: falso

enunciado: "¿Es posible que el margen neto de una empresa sea mayor que su margen bruto?"

explicacion: |
  No, porque el margen neto es el resultado de seguir restando costos y gastos al margen bruto. Por lo tanto, el margen neto siempre será menor o igual al margen bruto.
```

### 20 — Orden de la cascada de rentabilidad

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["ordenar", "flujo_contable"]

tipo: ordenar
opciones_explicitas: ["Ventas Totales", "Margen Bruto", "Margen Neto"]
respuesta_orden: ["Ventas Totales", "Margen Bruto", "Margen Neto"]

enunciado: "Ordena los conceptos según el flujo lógico de una cuenta de resultados (desde el ingreso bruto hasta la utilidad final):"

explicacion: |
  Primero se registran las ventas, a las que se les resta el costo de ventas para obtener el margen bruto, y finalmente se restan los gastos operativos para llegar al margen neto.
```

### 21 — Análisis de rentabilidad operativa

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "avanzado"
  tags: ["analisis", "eficiencia"]

tipo: mc
opciones_explicitas: ["Un margen bruto alto con un margen neto muy bajo indica ineficiencia en los gastos operativos.", "Un margen neto alto siempre garantiza que el margen bruto sea aún más alto.", "El margen bruto no tiene relación con el margen neto.", "Si el margen neto es positivo, el margen bruto debe ser necesariamente mayor al doble."]

respuesta: "Un margen bruto alto con un margen neto muy bajo indica ineficiencia en los gastos operativos."

enunciado: "Si una empresa presenta un margen bruto muy elevado pero su margen neto es casi nulo, ¿qué se puede deducir?"

explicacion: |
  Esto indica que, aunque el producto es rentable por sí mismo (buen margen bruto), la estructura de costos fijos o gastos de administración y ventas (gastos operativos) es demasiado pesada, consumiendo casi toda la utilidad.
```

### 22 — Cálculo de margen bruto

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["margen_bruto", "ventas", "costos_directos"]

variables:
  escenario: uno_de([["Ventas: 1000, Costo de Mercadería: 600", "400"], ["Ventas: 5000, Costo de Mercadería: 3500", "1500"], ["Ventas: 2500, Costo de Mercadería: 1200", "1300"]])

respuesta: escenario[1]
tipo: completar

enunciado: "Si una empresa registra {escenario[0]}, el margen bruto es de ___."

explicacion: |
  El margen bruto se calcula restando el Costo de Mercadería Vendida (CMV) a las Ventas Totales. 
  Fórmula: Ventas - Costo de Mercadería = Margen Bruto.
```

### 23 — Diferencia conceptual

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

### 24 — Verdad o Falso: Gastos Operativos

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

### 25 — Escenario de Margen Neto

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "margen_neto"]

variables:
  escenario: uno_de([["Ventas: 1000, Gastos: 800", "200"], ["Ventas: 5000, Gastos: 4500", "500"], ["Ventas: 2000, Gastos: 1900", "100"]])

respuesta: escenario[1]
tipo: completar
tolerancia_abs: 0

enunciado: "Considerando que los gastos totales (incluyendo operativos e impuestos) son de {escenario[0]}, el margen neto es ___."

explicacion: |
  El margen neto es el remanente final: Ventas Totales - Todos los Gastos.
```

### 26 — Orden de la cascada de rentabilidad

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["proceso", "orden"]

respuesta_orden: ["Ventas", "Margen Bruto", "Margen Neto"]
tipo: ordenar
opciones_explicitas: ["Ventas", "Margen Bruto", "Margen Neto"]

enunciado: "Ordena los conceptos según el flujo lógico de cálculo de rentabilidad, desde el ingreso total hasta el beneficio final:"

explicacion: |
  Primero se obtienen las Ventas, a las que se les resta el costo directo para obtener el Margen Bruto, y finalmente a este se le restan los gastos operativos para llegar al Margen Neto.
```
