# Examen jefe — Dominio de Cuentas y Monotributo

> Logro #196. Completaste el parcial integrando libro diario, márgenes, mejora continua y el régimen del monotributo. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **119 preguntas totales** en 5/5 secciones.

---

## Sección: libro-diario-mayor (21 preguntas)

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el Libro Diario?"
tipo: mc
opciones_explicitas:
  - "El registro de todos los asientos contables, en el orden cronológico en que ocurrieron"
  - "Un resumen de las ganancias del último mes"
  - "El registro de cada cuenta por separado"
respuesta: "El registro de todos los asientos contables, en el orden cronológico en que ocurrieron"

explicacion: |
  Es la fuente original y cronológica de todos los movimientos.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el Libro Mayor?"
tipo: mc
opciones_explicitas:
  - "La misma información del Diario, reorganizada por cuenta, con una hoja para cada una"
  - "Un libro distinto que registra información que no está en el Diario"
  - "El registro exclusivo de las cuentas de Pasivo"
respuesta: "La misma información del Diario, reorganizada por cuenta, con una hoja para cada una"

explicacion: |
  No agrega información nueva: reorganiza lo que ya está en el Diario.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Diario organiza los asientos en orden cronológico, por fecha."

explicacion: |
  Es su criterio de organización principal.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Mayor organiza los movimientos por cuenta, no por fecha."

explicacion: |
  Cada cuenta acumula todos sus movimientos, sin importar cuándo
  ocurrieron.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Mayor no es una fuente de información nueva: todo lo que aparece ahí ya estaba registrado en el Libro Diario."

explicacion: |
  Es un traslado y una reorganización, no un registro independiente.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Cómo se llama, tradicionalmente, el proceso de trasladar cada línea del Diario a la cuenta correspondiente del Mayor?"
tipo: mc
opciones_explicitas:
  - "Pasar al mayor (o mayorización)"
  - "Cerrar el balance"
  - "Auditar la cuenta"
respuesta: "Pasar al mayor (o mayorización)"

explicacion: |
  Es el nombre técnico de ese traslado.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el Libro Mayor, cada cuenta (Caja, Mercadería, etc.) tiene su propia hoja, donde se acumulan todos sus movimientos."

explicacion: |
  Es lo que permite calcular el saldo de una cuenta puntual sin revisar
  todo el resto.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es la \"cuenta T\"?"
tipo: mc
opciones_explicitas:
  - "Una forma visual simple de representar una cuenta, con el Debe a la izquierda y el Haber a la derecha"
  - "Una cuenta especial reservada para impuestos"
  - "El nombre de la primera cuenta de cualquier plan contable"
respuesta: "Una forma visual simple de representar una cuenta, con el Debe a la izquierda y el Haber a la derecha"

explicacion: |
  El nombre viene de la forma de letra \"T\" que arma la línea vertical
  (que separa Debe y Haber) con la horizontal (debajo del nombre de la
  cuenta).
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En una cuenta T, el Debe se anota a la izquierda y el Haber a la derecha."

explicacion: |
  Es la misma convención de columnas ya vista en el tema de Debe y
  Haber.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Diario sirve para reconstruir la historia completa y en orden de lo que le pasó a la empresa, útil por ejemplo para una auditoría."

explicacion: |
  Su organización cronológica lo hace ideal para reconstruir secuencias
  de hechos.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Mayor sirve para saber el saldo actual de una cuenta puntual de un vistazo, sin tener que revisar asiento por asiento."

explicacion: |
  Es su ventaja frente al Diario para esa pregunta puntual.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  debe_caja: random(100, 500) * 1000
  haber_caja: random(50, 300) * 1000

respuesta: debe_caja - haber_caja
tipo: input
tolerancia_abs: 0

enunciado: "En la hoja del Mayor de la cuenta \"Caja\" (de Activo), el total acumulado en el Debe es ${debe_caja}, y en el Haber ${haber_caja}. ¿Cuál es el saldo actual de Caja?"

explicacion: |
  En una cuenta de Activo, el saldo es el total del Debe menos el total
  del Haber.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  debe_1: random(50, 200) * 1000
  debe_2: random(50, 200) * 1000
  haber_1: random(50, 150) * 1000

respuesta: debe_1 + debe_2 - haber_1
tipo: input
tolerancia_abs: 0

enunciado: "La cuenta \"Caja\" tuvo tres movimientos: dos entradas al Debe de ${debe_1} y ${debe_2}, y una salida al Haber de ${haber_1}. ¿Cuál es el saldo final de Caja?"

pasos:
  - "Total Debe: {debe_1} + {debe_2} = {debe_1 + debe_2}"
  - "Saldo: {debe_1 + debe_2} - {haber_1}"

explicacion: |
  Se suman todos los movimientos del Debe, todos los del Haber, y se
  restan.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

enunciado: "Para saber exactamente qué movimientos económicos ocurrieron un día puntual, ¿qué libro conviene consultar?"
tipo: mc
opciones_explicitas:
  - "El Libro Diario"
  - "El Libro Mayor"
  - "Ninguno de los dos tiene esa información"
respuesta: "El Libro Diario"

explicacion: |
  Está organizado cronológicamente, así que es el indicado para
  reconstruir qué pasó en una fecha concreta.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

enunciado: "Para saber cuánto dinero hay en Caja hoy, sin revisar movimiento por movimiento, ¿qué libro conviene consultar?"
tipo: mc
opciones_explicitas:
  - "El Libro Mayor"
  - "El Libro Diario"
  - "Ninguno de los dos tiene esa información"
respuesta: "El Libro Mayor"

explicacion: |
  La hoja de Caja en el Mayor ya tiene acumulado el saldo actual.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos del proceso contable en el orden en que ocurren."
opciones_explicitas:
  - "Se calculan los saldos de cada cuenta en el Mayor"
  - "Se registra el movimiento como asiento en el Libro Diario"
  - "Se ocurre un movimiento económico en la empresa"
respuesta_orden: ["Se ocurre un movimiento económico en la empresa", "Se registra el movimiento como asiento en el Libro Diario", "Se calculan los saldos de cada cuenta en el Mayor"]

explicacion: |
  Primero el hecho económico, después el registro cronológico, y
  finalmente la reorganización por cuenta.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "verificacion"]

variables:
  debe_caja: random(100, 500) * 1000
  haber_caja: random(50, 300) * 1000
  correcto: debe_caja - haber_caja
  error: uno_de([0, 0, 0, 50000, -50000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1000)
tipo: vf

enunciado: "¿Está bien calculado esto? Cuenta Caja con ${debe_caja} en el Debe y ${haber_caja} en el Haber, saldo informado: ${mostrado}."

explicacion: |
  Se vuelve a restar el Haber del Debe y se compara con el valor
  informado.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad"]

variables:
  debe_caja: random(100, 500) * 1000
  haber_caja: random(50, 300) * 1000
  saldo: debe_caja - haber_caja

tipo: completar
enunciado: "La cuenta Caja tiene ${debe_caja} en el Debe y ${haber_caja} en el Haber. Completá: ___ (saldo) = {debe_caja} - {haber_caja}."
respuestas_validas:
  - saldo

explicacion: |
  Es la aplicación directa de la fórmula de saldo de una cuenta de
  Activo.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para armar el balance final de una empresa, se parte de los saldos que ya están calculados cuenta por cuenta en el Libro Mayor."

explicacion: |
  Es el paso siguiente en el proceso contable (estados contables), que
  no se construye en este tema puntual.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Diario y el Libro Mayor muestran, en el fondo, la misma información contable, organizada de dos formas distintas y complementarias."

explicacion: |
  Uno por fecha, el otro por cuenta — ninguno reemplaza al otro.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Diario registra los asientos en orden cronológico; el Libro Mayor reorganiza esos mismos asientos por cuenta, para poder calcular el saldo actual de cada una."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: margenes-bruto-y-neto (26 preguntas)

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["definicion", "margen_bruto"]

respuesta: "ventas_netas - costo_ventas"
tipo: completar
respuestas_validas: ["ventas_netas - costo_ventas", "Ventas Netas - Costo de Ventas"]

enunciado: "El margen bruto se calcula restando el costo de ventas a las ___."

explicacion: |
  El margen bruto mide la rentabilidad de la producción o compra de bienes, sin tener en cuenta los gastos operativos (alquiler, sueldos administrativos, etc.).
```

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

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "margen_bruto"]

variables:
  escenario: uno_de([
    ["1000", "600"],
    ["500", "350"],
    ["2000", "1200"]
  ])

respuesta: escenario[0][1
tipo: completar
tolerancia_abs: 0

enunciado: "Si las ventas netas son {escenario[0][0]} y el costo de ventas es {escenario[0][1]}, ¿cuál es el valor del margen bruto?"

pasos:
  - "Identificar las Ventas Netas: {escenario[0][0]}"
  - "Identificar el Costo de Ventas: {escenario[0][1]}"
  - "Restar: Ventas - Costo"

explicacion: |
  El margen bruto es la diferencia entre el ingreso por ventas y lo que costó producir o comprar esa mercadería vendida.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["orden", "jerarquia"]

opciones_explicitas: ["Ventas Netas", "Margen Bruto", "Margen Operativo", "Margen Neto"]
respuesta: ["Ventas Netas", "Margen Bruto", "Margen Operativo", "Margen Neto"]
tipo: ordenar

enunciado: "Ordena los conceptos desde el ingreso total hasta la utilidad final (el resultado más pequeño), siguiendo la estructura lógica de un estado de resultados."

explicacion: |
  La estructura lógica comienza con el ingreso total (Ventas), se le resta el costo para obtener el Margen Bruto, luego se restan los gastos operativos para el Margen Operativo, y finalmente impuestos y financieros para llegar al Margen Neto.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["conceptos", "margen_bruto", "margen_neto"]

respuesta: "neto"
tipo: "completar"
respuestas_validas: ["neto", "bruto"]

enunciado: "El margen que se calcula restando únicamente los costos de ventas a los ingresos totales se denomina margen _____, mientras que el margen que resta también los gastos operativos y otros costos se denomina margen _____."

explicacion: |
  El margen bruto mide la rentabilidad directa del producto/servicio (Ingresos - Costo de Ventas). El margen neto es el beneficio real final tras considerar todos los gastos de la estructura operativa.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "margen_bruto"]

variables:
  idx: uno_de([0, 1])
  datos: [[1000, 600], [2500, 1500]]

respuesta: datos[idx][1
tipo: "input"
tolerancia_abs: 0.01

enunciado: "Una empresa tiene un nivel de ventas de ${datos[idx][0]} y un costo de ventas de ${datos[idx][0] - datos[idx][1]}. ¿Cuál es el valor del margen bruto (en unidades monetarias)?"

pasos:
  - "Identificar Ingresos Totales: ${datos[idx][0]}"
  - "Identificar Costo de Ventas: ${datos[idx][0] - datos[idx][1]}"
  - "Calcular Margen Bruto: Ingresos - Costo de Ventas"

explicacion: |
  El margen bruto se obtiene restando el costo de los bienes vendidos a las ventas totales. En este caso: ${datos[idx][0]} - (${datos[idx][0]} - ${datos[idx][1]}) = ${datos[idx][1]}.
```

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

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "avanzado"
  tags: ["analisis", "mc"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [
    ["Empresa A", 40, 10],
    ["Empresa B", 20, 5],
    ["Empresa C", 50, 2]
  ]

respuesta: escenario[idx][1
tipo: "mc"
opciones_explicitas: ["40%", "20%", "50%"]

enunciado: "Si la ${escenario[idx][0]} presenta un margen bruto del 40% y un margen neto del ${escenario[idx][1]}%, ¿cuál es la diferencia absoluta entre el margen bruto y el margen neto (en puntos porcentuales)?"

explicacion: |
  La diferencia se calcula restando el margen neto del margen bruto: ${escenario[idx][1]}% de diferencia.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["proceso", "ordenar"]

respuesta: ["Ingresos", "Costo de Ventas", "Gastos Operativos", "Utilidad Neta"]
tipo: "ordenar"
opciones_explicitas: ["Ingresos", "Costo de Ventas", "Gastos Operativos", "Utilidad Neta"]

enunciado: "Ordena los conceptos según el proceso lógico para llegar desde el ingreso bruto hasta la utilidad neta (margen neto):"

explicacion: |
  El flujo contable estándar es: 1. Ingresos -> 2. Restar Costo de Ventas (Margen Bruto) -> 3. Restar Gastos Operativos -> 4. Resultado final (Utilidad Neta/Margen Neto).
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["rentabilidad", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["La diferencia entre ventas y costo de ventas", "La diferencia entre ventas y todos los gastos operativos", "La diferencia entre ingresos totales y impuestos"]

enunciado: "Un error común es confundir el margen bruto con el margen neto. ¿Qué mide específicamente el margen bruto?"

explicacion: |
  El margen bruto solo considera la diferencia entre las ventas y el costo de los bienes vendidos (COGS). No tiene en cuenta los gastos de administración, ventas o financieros.
```

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
respuestas_validas: ["100", "200"]
respuesta: datos[escenario_idx][3

enunciado: "Considera el siguiente escenario: Ventas: {datos[escenario_idx][0]}, Costo de Ventas: {datos[escenario_idx][1]}, Gastos Operativos: {datos[escenario_idx][2]}, Impuestos: {datos[escenario_idx][3]}. El margen neto (en valor absoluto) es ___."

pasos:
  - "Restar el costo de ventas a las ventas para obtener la utilidad bruta."
  - "Restar los gastos operativos y los impuestos a la utilidad bruta."

explicacion: |
  El margen neto es la ganancia final después de restar TODOS los costos y gastos. En el caso seleccionado, el resultado es {datos[escenario_idx][3]}.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["orden", "estructura_contable"]

tipo: ordenar
opciones_explicitas: ["Ventas Totales", "Utilidad Bruta", "Utilidad Operativa", "Utilidad Neta"]
respuesta: ["Ventas Totales", "Utilidad Bruta", "Utilidad Operativa", "Utilidad Neta"]

enunciado: "Ordena los conceptos de mayor a menor nivel de rentabilidad (desde el ingreso bruto hasta la ganancia final):"

explicacion: |
  La estructura contable sigue un orden descendente: primero se restan los costos directos (Bruta), luego los gastos operativos (Operativa) y finalmente impuestos y otros (Neta).
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "avanzado"
  tags: ["analisis", "eficiencia"]

tipo: mc
opciones_explicitas: ["Un margen bruto alto con un margen neto muy bajo", "Un margen bruto bajo con un margen neto alto", "Un margen bruto igual al margen neto"]

enunciado: "Si una empresa reporta un margen bruto muy elevado, pero su margen neto es casi cero, ¿qué es lo más probable que esté sucediendo?"

explicacion: |
  Esto indica que la empresa es eficiente en su producción (bajo costo de ventas), pero tiene una estructura de gastos operativos (administración, marketing, alquileres) extremadamente pesada.
```

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

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "gastos_operativos"]

variables:
  escenario: uno_de([
    ["Ventas: 1000, Costo de Ventas: 400, Gastos Operativos: 200", "400", "200"],
    ["Ventas: 5000, Costo de Ventas: 2000, Gastos Operativos: 1500", "3000", "500"]
  ])

tipo: completar
respuestas_validas: ["400", "3000", "200", "500"]

enunciado: "Si una empresa tiene unas ventas de {escenario[0]}, su margen bruto en valor absoluto es ___ y su margen neto (antes de impuestos) es ___."

pasos:
  - "1. Calcular Margen Bruto: Ventas - Costo de Ventas"
  - "2. Calcular Margen Neto: Margen Bruto - Gastos Operativos"

explicacion: |
  En el primer caso: 1000 - 400 = 600 (bruto), pero el enunciado pide el valor según el escenario. 
  Corrección de lógica para el DSL:
  Si Ventas=1000, CV=400, GO=200 -> Bruto=600, Neto=400. 
  Si Ventas=5000, CV=2000, GO=1500 -> Bruto=3000, Neto=1500.
  
  Re-haciendo variables para que coincida con la lógica de la respuesta:
  variables:
    escenario: uno_de([
      ["1000, 400, 200", "600", "400"],
      ["5000, 2000, 1500", "3000", "1500"]
    ])

enunciado: "Si una empresa tiene ventas de {escenario[0]}, su margen bruto es ___ y su margen neto es ___."

respuesta: escenario[1
tipo: completar
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "gastos_operativos"]

variables:
  escenario: uno_de([
    ["1000", "600", "400"],
    ["5000", "3000", "1500"]
  ])

tipo: completar
respuestas_validas: ["600", "400", "3000", "1500"]

enunciado: "Si una empresa tiene ventas de {escenario[0]}, un costo de ventas de {escenario[1]} (si fuera el caso de ejemplo) y gastos operativos de 200 (en el primer caso) o 1500 (en el segundo), el margen neto es ___."

# Para simplificar y cumplir la regla de que la respuesta es un único valor:
# Re-estructurando para que sea una pregunta de completar un único valor de margen neto.

metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "intermedio"
  tags: ["calculo", "gastos_operativos"]

variables:
  datos: uno_de([
    ["Ventas: 1000, Costo: 400, Gastos Op: 200"],
    ["Ventas: 5000, Costo: 2000, Gastos Op: 1500"]
  ])
  bruto: uno_de(["600", "3000"])
  neto: uno_de(["400", "1500"])

tipo: completar
respuestas_validas: ["400", "1500"]

enunciado: "Para el escenario {datos}, el valor del margen neto es ___."

respuesta: neto

explicacion: |
  El margen neto se obtiene restando los gastos operativos al margen bruto.
```

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

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "basico"
  tags: ["ordenar", "flujo_contable"]

tipo: ordenar
opciones_explicitas: ["Ventas Totales", "Margen Bruto", "Margen Neto"]
respuesta: ["Ventas Totales", "Margen Bruto", "Margen Neto"]

enunciado: "Ordena los conceptos según el flujo lógico de una cuenta de resultados (desde el ingreso bruto hasta la utilidad final):"

explicacion: |
  Primero se registran las ventas, a las que se les resta el costo de ventas para obtener el margen bruto, y finalmente se restan los gastos operativos para llegar al margen neto.
```

```
metadata:
  materia: "economia"
  tema: "margenes_bruto_y_neto"
  nivel: "avanzado"
  tags: ["analisis", "eficiencia"]

tipo: mc
opciones_explicitas: [
  "Un margen bruto alto con un margen neto muy bajo indica ineficiencia en los gastos operativos.",
  "Un margen neto alto siempre garantiza que el margen bruto sea aún más alto.",
  "El margen bruto no tiene relación con el margen neto.",
  "Si el margen neto es positivo, el margen bruto debe ser necesariamente mayor al doble."
]

respuesta: "Un margen bruto alto con un margen neto muy bajo indica ineficiencia en los gastos operativos."

enunciado: "Si una empresa presenta un margen bruto muy elevado pero su margen neto es casi nulo, ¿qué se puede deducir?"

explicacion: |
  Esto indica que, aunque el producto es rentable por sí mismo (buen margen bruto), la estructura de costos fijos o gastos de administración y ventas (gastos operativos) es demasiado pesada, consumiendo casi toda la utilidad.
```

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

respuesta: datos[idx][1
tipo: completar
respuestas_validas: [datos[idx][1]]

enunciado: "Si una empresa registra {datos[idx][0]}, el margen bruto es de ___."

explicacion: |
  El margen bruto se calcula restando el Costo de Mercadería Vendida (CMV) a las Ventas Totales. 
  Fórmula: Ventas - Costo de Mercadería = Margen Bruto.
```

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

respuesta: datos[idx][1
tipo: completar
tolerancia_abs: 0

enunciado: "Considerando que los gastos totales (incluyendo operativos e impuestos) son de {datos[idx][0]}, el margen neto es ___."

explicacion: |
  El margen neto es el remanente final: Ventas Totales - Todos los Gastos.
```

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

## Sección: mejora-continua (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "incremental"
tipo: completar
respuestas_validas: ["incremental", "progresiva", "constante"]

enunciado: "La mejora continua se basa en la idea de optimizar procesos de forma constante e __________, en lugar de buscar cambios drásticos y únicos."

explicacion: |
  La mejora continua (Kaizen) se enfoca en pequeños cambios constantes (incrementales) que, sumados en el tiempo, generan grandes transformaciones.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["kaizen", "filosofia"]

variables:
  es_kaizen: true

respuesta: true
tipo: completar
enunciado: "El término japonés 'Kaizen' se traduce comúnmente como 'cambio para mejor' y es el pilar fundamental de la mejora continua."

explicacion: |
  Efectivamente, Kaizen es el concepto de mejora continua aplicada a procesos, productos o actividades.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["ciclo_pdca", "metodologia"]

opciones_explicitas: ["Planificar, Hacer, Verificar, Actuar", "Planificar, Ejecutar, Validar, Ajustar", "Pensar, Hacer, Verificar, Actuar"]

respuesta: ["Planificar, Hacer, Verificar, Actuar"]
tipo: ordenar

enunciado: "Ordene las etapas del Ciclo de Deming (PDCA), herramienta esencial para la mejora continua:"

pasos:
  - "Definir objetivos y procesos necesarios para obtener resultados."
  - "Implementar los procesos y realizar el trabajo."
  - "Realizar el seguimiento y medir los procesos respecto a los objetivos."
  - "Tomar acciones para mejorar los resultados de los procesos."

explicacion: |
  El ciclo PDCA es: Plan (Planificar), Do (Hacer), Check (Verificar) y Act (Actuar).
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["enfoque", "estrategia"]

opciones_explicitas: ["Un evento único de gran escala", "Un proceso de optimización constante", "Un cambio estructural de una sola vez"]

respuesta: "Un proceso de optimización constante"
tipo: mc

enunciado: "¿Cuál es la característica principal de la mejora continua en una organización?"

explicacion: |
  La mejora continua no es un proyecto con fecha de fin, sino una cultura de optimización permanente.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["muda", "desperdicio"]

variables:
  escenario: uno_de([0,1])
  datos: [["Muda", "Desperdicio"], ["Kaizen", "Cambio"]]
  respuestas: ["Muda", "Desperdicio"]

respuesta: datos[escenario][0
tipo: mc

opciones_explicitas: ["Muda", "Kaizen", "Poka-Yoke", "Kanban"]

enunciado: "En la metodología de mejora continua, el término japonés utilizado para referirse a cualquier tipo de ___________ en el proceso es {datos[escenario][1]}."

explicacion: |
  'Muda' es el término utilizado para referirse a las actividades que no agregan valor (desperdicio) y que deben eliminarse.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["procesos", "eficiencia"]

respuesta: "incremental"
tipo: "completar"
respuestas_validas: ["incremental", "gradual", "constante"]

enunciado: "La mejora continua se define como un enfoque de optimización que busca cambios de carácter ___ en lugar de realizar una única transformación radical."

explicacion: |
  La mejora continua (Kaizen) se basa en pequeños cambios constantes que, acumulados, generan grandes resultados. No se trata de un evento aislado, sino de un proceso sostenido.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["metodologia", "phva"]

variables:
  pasos_phva: ["Planificar", "Hacer", "Verificar", "Actuar"]

respuesta: "Planificar"
tipo: "mc"
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "En un proceso de optimización de una línea de ensamblaje, el primer paso del ciclo PHVA consiste en establecer los objetivos y los procesos necesarios para lograr resultados. Este paso es: {pasos_phva[0]}."

explicacion: |
  El ciclo PHVA (Planificar, Hacer, Verificar, Actuar) es la base de la mejora continua. Siempre se debe comenzar con la fase de planificación para establecer la hoja de ruta.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["calidad", "variabilidad"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es correcto afirmar que la mejora continua busca reducir la variabilidad de los procesos para asegurar la calidad constante?"

explicacion: |
  La variabilidad es el enemigo de la eficiencia. Al estandarizar y mejorar procesos, se busca que los resultados sean predecibles y constantes.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "avanzado"
  tags: ["calculo", "eficiencia"]

variables:
  escenario: [
    ["Tiempo actual: 100 min, Tiempo meta: 85 min", "15"],
    ["Tiempo actual: 50 min, Tiempo meta: 48 min", "2"],
    ["Tiempo actual: 200 min, Tiempo meta: 180 min", "20"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: "escenario[idx][1]"
tipo: "input"
tolerancia_abs: 0

enunciado: "Una empresa de logística aplica mejora continua. Si su tiempo de despacho actual es de {escenario[idx][0]}, ¿cuántos minutos de reducción debe lograr para alcanzar su meta establecida?"

pasos:
  - "Identificar el tiempo actual."
  - "Identificar el tiempo meta."
  - "Calcular la diferencia: Actual - Meta."

explicacion: |
  La mejora continua se mide a menudo a través de la reducción de tiempos o desperdicios. En este caso, la diferencia entre el estado actual y el objetivo representa la mejora buscada.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

respuesta: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: "ordenar"
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Para implementar un programa de mejora continua en un departamento de atención al cliente, se deben seguir los pasos del ciclo de Deming en el siguiente orden lógico:"

explicacion: |
  El orden correcto es: 1. Planificar (diseñar la mejora), 2. Hacer (implementar el cambio), 3. Verificar (medir resultados) y 4. Actuar (estandarizar si fue exitoso).
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos", "filosofia_gestion"]

respuesta: falso
tipo: vf

enunciado: "La mejora continua (Kaizen) se define como un proyecto de optimización masiva que se ejecuta una sola vez para alcanzar un estado ideal de eficiencia."

explicacion: |
  Falso. La mejora continua se basa en cambios incrementales, constantes y sostenidos en el tiempo, no en intervenciones únicas o aisladas.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["errores_comunes", "gestion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Una empresa implementa un software de gestión avanzado para resolver todos sus problemas de eficiencia de un solo golpe.", "software"],
    ["Un equipo de producción identifica pequeñas fallas diarias y ajusta sus procesos cada semana.", "ajustes"]
  ]

enunciado: "En el escenario de {escenarios[escenario_idx][0]}, ¿cuál es el enfoque predominante?"

opciones_explicitas: ["optimización puntual", "mejora continua"]

respuesta: "optimización puntual"
tipo: mc

explicacion: |
  El primer escenario describe un intento de solución única y masiva, lo cual es un error común que ignora la naturaleza incremental de la mejora continua.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["terminologia", "procesos"]

respuesta: "incremental"
tipo: completar
respuestas_validas: ["incremental"]

enunciado: "A diferencia de la innovación disruptiva, la mejora continua se caracteriza por ser de carácter ___________, buscando optimizar procesos mediante pequeños pasos sucesivos."

explicacion: |
  La mejora continua es incremental porque se enfoca en pequeñas mejoras constantes en lugar de cambios radicales o estructurales de una sola vez.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["ciclo_pdca", "metodologia"]

respuesta: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: ordenar

opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Para que la mejora sea continua, se debe seguir el ciclo PDCA. Ordene las fases de este ciclo en su secuencia lógica de ejecución:"

explicacion: |
  El ciclo PDCA (Plan-Do-Check-Act) es la base de la mejora continua: se planea, se ejecuta, se verifica el resultado y se actúa para estandarizar o ajustar.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "avanzado"
  tags: ["mentalidad", "eficiencia"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["El gerente cree que una vez que el proceso es eficiente, el trabajo de mejora ha terminado.", "terminado"],
    ["El gerente cree que la mejora es un proceso infinito de refinamiento constante.", "infinito"]
  ]

enunciado: "Si un gerente adopta la visión del caso {casos[caso_idx][0]}, ¿está aplicando correctamente la filosofía de mejora continua?"

opciones_explicitas: ["Sí, la eficiencia es un estado de llegada.", "No, la mejora es un proceso cíclico sin fin."]

respuesta: "No, la mejora es un proceso cíclico sin fin."
tipo: mc

explicacion: |
  Uno de los errores más graves es pensar que la mejora tiene un punto final. La mejora continua asume que siempre hay una forma de optimizar un poco más.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["procesos", "estrategia"]

tipo: mc
opciones_explicitas: ["La mejora continua busca cambios incrementales y constantes en procesos existentes.", "La innovación disruptiva busca cambios radicales que transforman el mercado.", "La mejora continua se enfoca en productos nuevos, mientras que la innovación en procesos.", "Ambas son conceptos idénticos en la práctica empresarial."]

respuesta: "La mejora continua busca cambios incrementales y constantes en procesos existentes."

enunciado: "¿Cuál es la distinción fundamental entre la mejora continua y la innovación disruptiva?"

explicacion: |
  La mejora continua (Kaizen) se centra en optimizar lo que ya existe de forma gradual, mientras que la innovación disruptiva busca crear algo totalmente nuevo que desplace a lo anterior.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["filosofia_empresarial"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Una empresa que implementa un cambio masivo de software una vez cada 5 años.", "Un equipo que realiza pequeñas ajustes diarios en su línea de producción para reducir desperdicios."],
    ["Un evento único de reestructuración organizacional.", "Un ciclo constante de revisión y optimización de tareas."]
  ]

tipo: completar
respuesta: escenarios[escenario_idx][1

enunciado: "Identifica cuál de los siguientes escenarios representa verdaderamente la filosofía de mejora continua: {escenarios[escenario_idx][0]}"

explicacion: |
  La mejora continua no es un evento aislado o un proyecto con fecha de finalización, sino un ciclo perpetuo de optimización.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["metodologia", "ciclo_deming"]

tipo: ordenar
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]
respuesta: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Ordena correctamente las etapas del ciclo PHVA (Ciclo de Deming) utilizado en la mejora continua:"

explicacion: |
  El ciclo PHVA es la base de la mejora continua: se Planifica un cambio, se Hace (se implementa), se Verifica (se mide el resultado) y se Actúa (se estandariza el cambio).
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos"]

tipo: completar
respuestas_validas: ["incremental", "gradual", "pequeño"]

respuesta: "incremental"

enunciado: "A diferencia de la reingeniería de procesos, que busca cambios drásticos, la mejora continua se caracteriza por ser de tipo ___."

explicacion: |
  La mejora continua se basa en la acumulación de pequeñas mejoras (cambios incrementales) que, sumadas, generan grandes resultados a largo plazo.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "avanzado"
  tags: ["cultura_organizacional"]

tipo: mc
opciones_explicitas: ["El error es un fracaso que debe ser castigado para evitar su repetición.", "El error es una oportunidad de aprendizaje para identificar fallas en el proceso.", "El error es irrelevante si el producto final es de buena calidad.", "El error solo es aceptable si se compensa con un aumento de producción."]

respuesta: "El error es una oportunidad de aprendizaje para identificar fallas en el proceso."

enunciado: "¿Cómo se percibe un error o desviación en un sistema de mejora continua en comparación con un modelo de gestión tradicional basado en el control punitivo?"

explicacion: |
  En la mejora continua, el error es una señal de que el proceso actual tiene una oportunidad de optimización; se busca la causa raíz en el proceso, no la culpa en la persona.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos", "optimización"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Una fábrica de calzado que cambia toda su maquinaria de golpe cada 5 años.", "falso"],
    ["Una línea de producción que ajusta pequeños detalles cada semana para reducir desperdicios.", "verdadero"]
  ]

respuesta: datos[escenario_idx][1
tipo: completar
enunciado: "La mejora continua se define como un proceso de optimización constante e incremental. Analice el siguiente escenario: {datos[escenario_idx][0]}. ¿Es este un ejemplo de mejora continua? (verdadero/falso)"

explicacion: |
  La mejora continua (Kaizen) se basa en cambios incrementales y constantes, no en transformaciones disruptivas o únicas de gran escala.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  opciones: ["Optimización puntual", "Mejora continua", "Cambio radical", "Estancamiento"]

respuesta: "Mejora continua"
tipo: mc

opciones_explicitas: ["Optimización puntual", "Mejora continua", "Cambio radical", "Estancamiento"]

enunciado: "Si una empresa decide que su objetivo es mejorar sus procesos de forma constante, paso a paso, en lugar de esperar a un gran cambio estructural, está aplicando el concepto de: ___"

explicacion: |
  La mejora continua busca la excelencia a través de pequeños cambios sostenidos en el tiempo.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["metodologia", "ciclo_pdca"]

variables:
  pasos: ["Planificar", "Hacer", "Verificar", "Actuar"]

respuesta: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: ordenar

opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Para implementar la mejora continua de forma efectiva, se utiliza el ciclo PDCA. Ordene las siguientes etapas en la secuencia lógica correcta:"

explicacion: |
  El ciclo de Deming (PDCA) sigue el orden: Plan (Planificar), Do (Hacer), Check (Verificar) y Act (Actuar).
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["eficiencia", "costos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Reducción del 2% en el tiempo de espera mensual", "2%"],
    ["Reducción del 5% en el desperdicio de materia prima mensual", "5%"]
  ]

respuesta: casos[caso_idx][1
tipo: completar

respuestas_validas: ["2%", "5%"]

enunciado: "En un programa de mejora continua, una empresa logra reducir el ___ de desperdicio de materia prima cada mes mediante ajustes en la maquinaria. (Use el valor del escenario actual)"

pasos:
  - "Identificar el valor del desperdicio en el escenario."
  - "Escribir el porcentaje exacto."

explicacion: |
  La mejora continua se manifiesta en la reducción progresiva de indicadores negativos como el desperdicio o el tiempo de espera.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "avanzado"
  tags: ["estrategia", "mentalidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El enfoque de la empresa es reactivo: solo actúa cuando hay crisis.", "falso"],
    ["El enfoque de la empresa es proactivo: busca fallas antes de que ocurran.", "verdadero"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: completar
enunciado: "Un pilar de la mejora continua es la proactividad. Analice el siguiente enfoque: {escenarios[escenario_idx][0]}. ¿Este enfoque es compatible con la filosofía de mejora continua? (verdadero/falso)"

explicacion: |
  La mejora continua requiere una mentalidad proactiva para identificar oportunidades de mejora antes de que los problemas se conviertan en crisis.
```

## Sección: monotributo (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

enunciado: "¿Qué es el monotributo?"
tipo: mc
opciones_explicitas:
  - "Un régimen simplificado con una única cuota mensual fija, para quienes trabajan de forma independiente"
  - "Un impuesto exclusivo para empleados en relación de dependencia"
  - "Una multa por no pagar impuestos a tiempo"
respuesta: "Un régimen simplificado con una única cuota mensual fija, para quienes trabajan de forma independiente"

explicacion: |
  Reemplaza tener que liquidar IVA y Ganancias por separado, con un solo
  pago mensual.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo"]

respuesta: 11
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas categorías tiene el monotributo en total (de la A a la K)?"

explicacion: |
  De la A a la K son 11 letras, y por lo tanto 11 categorías.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo"]

enunciado: "¿Cuál es la categoría más baja del monotributo?"
tipo: mc
opciones_explicitas:
  - "A"
  - "K"
  - "1"
respuesta: "A"

explicacion: |
  Las categorías van de la A (la más baja) a la K (la más alta).
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo"]

enunciado: "¿Cuál es la categoría más alta del monotributo?"
tipo: mc
opciones_explicitas:
  - "K"
  - "A"
  - "Z"
respuesta: "K"

explicacion: |
  Superar el tope de la categoría K obliga a pasar al régimen general.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A medida que sube la categoría (más cerca de la K), la cuota mensual a pagar es más cara."

explicacion: |
  Cada componente de la cuota sube junto con la categoría.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

enunciado: "¿Qué parámetros determinan la categoría de un monotributista?"
tipo: mc
opciones_explicitas:
  - "Facturación anual, superficie afectada, energía consumida y alquileres devengados, entre otros"
  - "Sólo la edad del monotributista"
  - "Sólo si tiene empleados en relación de dependencia"
respuesta: "Facturación anual, superficie afectada, energía consumida y alquileres devengados, entre otros"

explicacion: |
  Son varios parámetros a la vez, no sólo la facturación.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un monotributista supera el tope de la categoría K, tiene que salir del monotributo e inscribirse en el régimen general."

explicacion: |
  La K es la categoría techo: no hay una categoría más alta dentro del
  monotributo.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

enunciado: "¿Qué tres componentes integra la cuota mensual del monotributo?"
tipo: mc
opciones_explicitas:
  - "Impuesto integrado, aporte jubilatorio y aporte a obra social"
  - "Sólo el impuesto integrado"
  - "IVA, Ganancias y Bienes Personales por separado"
respuesta: "Impuesto integrado, aporte jubilatorio y aporte a obra social"

explicacion: |
  Es un pago único que empaqueta los tres conceptos.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Parte de la cuota del monotributo es un aporte jubilatorio, el mismo tipo de aporte que hace un empleado en relación de dependencia."

explicacion: |
  Un monotributista también construye derechos jubilatorios, sólo que
  con un monto fijo en vez de un porcentaje del sueldo.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Parte de la cuota del monotributo da acceso a una obra social."

explicacion: |
  Igual que el aporte del 3% de un empleado, sólo que empaquetado dentro
  de la cuota fija.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El \"impuesto integrado\" de la cuota del monotributo reemplaza tener que liquidar IVA y Ganancias por separado."

explicacion: |
  Es la simplificación central del régimen: un solo pago en vez de varios
  impuestos separados.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo"]

respuesta: 6
tipo: input
tolerancia_abs: 0

enunciado: "¿Cada cuántos meses hay que revisar (recategorizar) la categoría del monotributo?"

explicacion: |
  Dos veces al año: cada 6 meses.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al recategorizarse, se mira la facturación (y otros parámetros) de los últimos 12 meses, no sólo del último semestre."

explicacion: |
  La ventana de revisión son los últimos 12 meses completos, aunque la
  recategorización se haga cada 6 meses.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

enunciado: "¿Qué es el monotributo social?"
tipo: mc
opciones_explicitas:
  - "Una categoría especial, más económica, para actividades de baja escala en situación de vulnerabilidad económica"
  - "Un monotributo exclusivo para empleados públicos"
  - "Una categoría más cara que la K"
respuesta: "Una categoría especial, más económica, para actividades de baja escala en situación de vulnerabilidad económica"

explicacion: |
  Tiene requisitos y beneficios distintos al monotributo general.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un monotributista paga una cuota fija mensual, en vez de tener un porcentaje descontado de un sueldo bruto como un empleado en relación de dependencia."

explicacion: |
  Son dos esquemas distintos: descuento variable sobre el bruto (empleado)
  vs. cuota fija según categoría (monotributista).
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo"]

enunciado: "¿Cuál definición corresponde a la categoría del monotributo?"
tipo: mc
opciones_explicitas:
  - "El nivel (de la A a la K) que determina cuánto se paga de cuota, según parámetros como la facturación"
  - "El tipo de actividad económica únicamente, sin relación con lo que se paga"
  - "Un número aleatorio que asigna AFIP"
respuesta: "El nivel (de la A a la K) que determina cuánto se paga de cuota, según parámetros como la facturación"

explicacion: |
  Es directamente la variable que fija cuánto se termina pagando de
  cuota.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los tres componentes de la cuota (impuesto integrado, aporte jubilatorio, obra social) suben todos junto con la categoría, no sólo uno de ellos."

explicacion: |
  Es un aumento conjunto de los tres, no de uno solo.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Subir de categoría significa pagar una cuota más cara, no más barata."

explicacion: |
  Refleja que la actividad creció (más facturación, más consumo
  eléctrico, etc.).
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "comparacion"]

enunciado: "Entre la categoría D y la categoría H del monotributo, ¿cuál paga una cuota más cara?"
tipo: mc
opciones_explicitas:
  - "H"
  - "D"
respuesta: "H"

explicacion: |
  H está más cerca de la K (la más alta): representa más actividad, y
  por lo tanto una cuota más cara.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El monotributo se paga estando inscripto ante AFIP (el organismo de recaudación nacional)."

explicacion: |
  Es el mismo organismo que administra el régimen general de impuestos.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "avanzado"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un monotributista no se recategoriza cuando corresponde, puede quedar pagando una categoría que ya no refleja su actividad real, con las consecuencias que eso implique."

explicacion: |
  La recategorización no es sólo un trámite formal: mantiene alineada la
  cuota con la actividad real.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El monotributo simplifica varios pagos (impuesto, jubilación, obra social) en una única cuota mensual fija, definida por la categoría de cada contribuyente."

explicacion: |
  Es la idea central de todo el tema: categoría y cuota son dos caras de
  la misma moneda.
```

## Sección: mvp-producto-minimo-viable (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["metodologia", "startup", "lean_startup"]

respuesta: "aprendizaje"
tipo: completar
respuestas_validas: ["aprendizaje", "validar hipótesis"]

enunciado: "El objetivo principal de un Producto Mínimo Viable (MVP) no es vender un producto final, sino obtener ___ sobre las preferencias y comportamientos de los usuarios reales."

explicacion: |
  El MVP es una herramienta de experimentación diseñada para maximizar el aprendizaje validado con el menor esfuerzo posible.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["estrategia", "validación"]

respuesta: verdadero
tipo: vf

enunciado: "Un MVP debe contener todas las características que el cliente final espera de un producto completo para asegurar su éxito."

explicacion: |
  Falso. Un MVP debe contener solo las características mínimas necesarias para cumplir su propósito de aprendizaje. Incluir demasiado puede desperdiciar recursos.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["desarrollo", "iteración"]

variables:
  escenario: uno_de([
    ["Landing Page", "Validar interés"],
    ["Mago de Oz", "Simular funcionalidad"],
    ["Conserje", "Proceso manual"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["Landing Page", "Mago de Oz", "Conserje"]

enunciado: "Si una startup lanza una página web simple para ver cuántas personas hacen clic en un botón de 'comprar' antes de tener el producto desarrollado, está utilizando un modelo de: {escenario[0]} con el fin de {escenario[1]}."

explicacion: |
  La Landing Page es uno de los MVPs más rápidos para validar la demanda de una idea antes de invertir en desarrollo técnico.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["lean_startup", "ciclo_feedback"]

respuesta: ["Construir", "Medir", "Aprender"]
tipo: ordenar

enunciado: "Ordena los pasos del ciclo de feedback de la metodología Lean Startup que se utiliza para iterar sobre un MVP:"

pasos:
  - "Construir"
  - "Medir"
  - "Aprender"

explicacion: |
  El ciclo es iterativo: se construye un experimento, se miden los resultados y se aprende para decidir si pivotar o perseverar.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

respuesta: "el producto más simple que permite aprender de usuarios reales"
tipo: completar
respuestas_validas: ["el producto más simple que permite aprender de usuarios reales", "una versión completa pero barata"]

enunciado: "Se define al MVP como ___."

explicacion: |
  El MVP busca el equilibrio entre el valor para el usuario y el esfuerzo de desarrollo, priorizando el aprendizaje sobre la perfección técnica.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["metodologia", "startup"]

respuesta: "aprender"
tipo: "completar"
respuestas_validas: ["aprender", "aprendizaje"]

enunciado: "El objetivo principal de un Producto Mínimo Viable (MVP) no es vender una versión incompleta, sino permitir que el emprendedor pueda ___ de los usuarios reales con el menor esfuerzo posible."

explicacion: |
  El MVP es una estrategia de aprendizaje validado. Su fin no es la perfección técnica, sino la recolección de datos sobre el comportamiento del usuario para decidir si pivotar o perseverar.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["ejemplo", "validacion"]

variables:
  escenario: uno_de([
    ["App de comida con sistema de pagos integrado", "Software complejo"],
    ["Un grupo de WhatsApp para tomar pedidos manualmente", "Concierge MVP"],
    ["Un sitio web con fotos de productos sin carrito", "Landing Page"]
  ])

respuesta: escenario[1
tipo: "mc"
opciones_explicitas: ["escenario[0]", "escenario[1]", "escenario[2]"]

enunciado: "Un emprendedor quiere validar si la gente en un barrio específico quiere un servicio de delivery de comida casera. ¿Cuál de estos ejemplos representa mejor un MVP de tipo 'Concierge' (donde el servicio se realiza manualmente para entender el proceso)?"

explicacion: |
  El MVP de tipo Concierge sustituye la automatización por procesos manuales. En el ejemplo, usar WhatsApp y tomar pedidos a mano permite entender la demanda sin haber programado una aplicación compleja.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso

tipo: "vf"

enunciado: "Un MVP debe ser un producto con todas las funcionalidades básicas pero con una calidad técnica deficiente que no sea útil para el usuario."

explicacion: |
  Falso. Un MVP debe ser "viable". Esto significa que, aunque tenga pocas funciones, debe resolver el problema central del usuario con una calidad mínima aceptable para que el aprendizaje sea real.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta: ["Definir hipótesis", "Crear versión mínima", "Lanzar a usuarios", "Analizar métricas"]
tipo: "ordenar"
opciones_explicitas: ["Definir hipótesis", "Crear versión mínima", "Lanzar a usuarios", "Analizar métricas"]

enunciado: "Ordena los pasos lógicos para validar si un nuevo concepto de café temático tendrá éxito mediante un MVP:"

explicacion: |
  El ciclo de Lean Startup comienza con la hipótesis (qué creemos que pasará), sigue con la construcción del experimento (MVP), el contacto con el mercado y, finalmente, el análisis de los datos obtenidos para iterar.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "avanzado"
  tags: ["metricas", "analisis"]

variables:
  datos: uno_de([
    [100, 5, 0.05],
    [200, 20, 0.10],
    [50, 1, 0.02]
  ])

respuesta: datos[1][2
tipo: "input"
tolerancia_abs: 0.001

enunciado: "Se lanza un MVP de una plataforma de cursos online. Los datos obtenidos son: Visitas totales: {datos[1][0]}, Usuarios que se registran: {datos[1][1]}. ¿Cuál es la tasa de conversión (registrados/visitas) expresada en decimal?"

pasos:
  - "Identificar el número de usuarios registrados."
  - "Identificar el número de visitas totales."
  - "Dividir los registrados por las visitas."

explicacion: |
  La tasa de conversión es una métrica clave en un MVP para entender si la propuesta de valor es atractiva. En este caso: 20 / 200 = 0.10.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["conceptos_clave", "metodologia_lean"]

respuesta: "aprender"
tipo: mc
opciones_explicitas: ["construir", "aprender", "vender", "perfeccionar"]

enunciado: "Un error común es pensar que el objetivo principal de un MVP es lanzar un producto final con pocas funciones. En realidad, el objetivo fundamental de un MVP es ___ de los usuarios reales."

explicacion: |
  El MVP no es un producto "incompleto" para salir rápido al mercado, sino una herramienta de aprendizaje validado. Su fin es probar hipótesis de negocio con el menor esfuerzo posible.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["errores_comunes", "calidad"]

respuesta: falso
tipo: vf

enunciado: "Un Producto Mínimo Viable (MVP) puede ser un producto de mala calidad o con una experiencia de usuario deficiente, siempre y cuando cumpla con la función básica."

explicacion: |
  Falso. Un MVP debe ser "viable". Si la calidad es tan baja que el usuario no puede completar la tarea principal, no estás probando tu idea, estás probando que tu producto es malo. La funcionalidad es mínima, pero la calidad debe ser suficiente para generar aprendizaje.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["ciclo_feedback", "lean_startup"]

variables:
  pasos_orden: [["Construir", "Medir", "Aprender"], ["Aprender", "Construir", "Medir"], ["Medir", "Aprender", "Construir"]]
  idx: uno_de([0,1,2])

respuesta: pasos_orden[idx
tipo: ordenar
opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Para que el MVP sea efectivo, se debe seguir el ciclo de feedback de la metodología Lean Startup. Ordena los pasos correctamente:"

explicacion: |
  El ciclo es: Construir (MVP) -> Medir (datos de usuarios) -> Aprender (decidir si pivotar o perseverar).
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "avanzado"
  tags: ["estrategia", "errores_comunes"]

variables:
  escenario: [["un prototipo de baja fidelidad", "una versión con todas las funciones pero sin marketing"], ["un prototipo de baja fidelidad", "un producto incompleto que no resuelve el problema principal"], ["un prototipo de baja fidelidad", "una campaña de publicidad sin producto"]]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1
tipo: completar
respuestas_validas: ["un prototipo de baja fidelidad", "una versión con todas las funciones pero sin marketing", "un producto incompleto que no resuelve el problema principal", "una campaña de publicidad sin producto"]

enunciado: "Un error crítico es confundir un MVP con ___."

explicacion: |
  Un MVP debe resolver el problema central. Si lanzas algo que no resuelve el problema principal, no estás validando tu propuesta de valor, solo estás lanzando un producto inútil.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["caracteristicas", "definicion"]

respuesta: "una función principal"
tipo: completar
respuestas_validas: ["una función principal", "todas las funciones posibles", "ninguna función para ahorrar costes", "una interfaz muy compleja"]

enunciado: "Para evitar el exceso de funciones (feature creep) en un MVP, el equipo debe centrarse en desarrollar ___ que aporte valor real."

explicacion: |
  El enfoque debe estar en el "Core Value Proposition". Si intentas incluir demasiadas funciones, dejas de tener un producto "mínimo" y te pierdes en el desarrollo de características que quizás nadie necesita.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["gestion_producto", "metodologias_agiles"]

respuesta: "prototipo"
tipo: "completar"
respuestas_validas: ["prototipo"]

enunciado: "Mientras que un MVP está diseñado para ser lanzado al mercado y recolectar datos de usuarios reales, un ___ se utiliza generalmente para validar conceptos técnicos o de diseño de forma interna o con usuarios muy controlados, sin necesidad de ser una versión funcional para el mercado."

explicacion: |
  El MVP es una versión funcional que busca aprendizaje validado en el mercado real, mientras que el prototipo es una representación (puede ser de baja fidelidad) para probar una idea o flujo específico.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["aprendizaje", "validacion"]

variables:
  idx: uno_de([0, 1])

respuesta: uno_de([0, 1])[idx]
tipo: "mc"
opciones_explicitas: ["Maximizar las funcionalidades para satisfacer a todos los clientes", "Maximizar el aprendizaje validado con el mínimo esfuerzo"]

enunciado: "De acuerdo a la metodología Lean Startup, ¿cuál es el objetivo primordial de un MVP?"

explicacion: |
  El MVP no busca ser un producto completo, sino la versión más simple que permita entrar en el ciclo de 'Construir-Medir-Aprender'.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["ciclo_de_vida", "desarrollo"]

respuesta: falso
tipo: "vf"

enunciado: "Un Producto Mínimo Viable (MVP) debe contener todas las características que el cliente final ha solicitado en su lista de deseos para asegurar su satisfacción inicial."

explicacion: |
  Falso. Incluir todas las características contradice la esencia del MVP, que es construir solo lo estrictamente necesario para aprender sobre el valor que el producto aporta.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["metodologia", "lean_startup"]

respuesta: ["Construir", "Medir", "Aprender"]
tipo: "ordenar"
opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Para que un MVP cumpla su función de aprendizaje, debe seguir el ciclo iterativo de la metodología Lean Startup. Ordene los pasos en el orden correcto:"

explicacion: |
  El ciclo es circular: se construye algo mínimo, se mide el comportamiento del usuario y se aprende para decidir si se pivota o se persevera.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "avanzado"
  tags: ["estrategia", "producto"]

variables:
  escenario: uno_de([0, 1])

respuesta: escenario[1
tipo: "mc"
opciones_explicitas: ["El MVP se enfoca en la velocidad de aprendizaje, mientras que el MMP se enfoca en la utilidad y la experiencia de usuario básica", "El MVP es una versión de prueba interna y el MMP es el producto final para la venta masiva"]

enunciado: "Considerando la diferencia entre MVP (Minimum Viable Product) y MMP (Minimum Marketable Product), según el escenario seleccionado: {escenario[0]}"

explicacion: |
  El MVP es una herramienta de aprendizaje (puede ser muy rudimentaria), mientras que el MMP es la versión mínima que ya tiene suficiente valor para ser comercializada con éxito.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["emprendimiento", "metodologia_lean"]

variables:
  datos: [["Una app de comida que solo permite pedir por WhatsApp", "validar_demanda"], ["Un prototipo de papel de una app de viajes", "validar_interes"], ["Una landing page con un botón de 'Próximamente'", "validar_interes"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["validar_demanda", "validar_interes", "validar_tecnologia"]

enunciado: "Un emprendedor decide lanzar {datos[idx][0]} con el objetivo principal de: ___"

explicacion: |
  El MVP busca la menor cantidad de esfuerzo para obtener la máxima cantidad de aprendizaje validado sobre los clientes.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: falso
tipo: vf

enunciado: "El objetivo principal de un MVP es lanzar un producto incompleto y de mala calidad para ahorrar costos de desarrollo."

explicacion: |
  Falso. El MVP debe ser funcional y aportar valor; su objetivo es el aprendizaje validado, no la falta de calidad.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["ciclo_lean", "metodologia"]

respuesta: ["Construir", "Medir", "Aprender"]
tipo: ordenar
opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Ordena los pasos del ciclo de feedback de la metodología Lean Startup que permite iterar sobre un MVP:"

explicacion: |
  El ciclo es: Construir (producto/MVP) -> Medir (datos de usuarios) -> Aprender (decidir si pivotar o perseverar).
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["metricas", "validacion"]

variables:
  datos: [["una landing page con 100 visitas y 5 registros", "5%"], ["un bot de Telegram con 10 usuarios y 2 pedidos", "20%"], ["un prototipo de baja fidelidad sin usuarios", "0%"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["5%", "20%", "0%"]

enunciado: "Si el MVP consiste en {datos[idx][0]}, la tasa de conversión (métrica de validación) es de ___."

explicacion: |
  La tasa de conversión permite medir el interés real de los usuarios frente a la propuesta de valor del MVP.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "avanzado"
  tags: ["estrategia", "pivot"]

variables:
  datos: [["Los usuarios usan el MVP pero no están dispuestos a pagar", "pivotar"], ["Los usuarios ignoran el MVP por completo", "pivotar"], ["Los usuarios aman la función extra que no era el core", "pivotar"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["perseverar", "pivotar"]

enunciado: "Ante la situación: {datos[idx][0]}, la acción estratégica recomendada según la metodología Lean es: ___"

explicacion: |
  Si los datos del MVP indican que el modelo de negocio o el problema planteado no es el correcto, se debe 'pivotar' (cambiar la estrategia).
```
