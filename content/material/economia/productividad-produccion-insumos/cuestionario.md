# Economia — Productividad produccion insumos (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Productividad

```
metadata:
  materia: "economia"
  tema: "productividad_produccion_insumos"
  nivel: "basico"
  tags: ["definicion", "productividad"]

respuesta: "productividad"
tipo: completar
respuestas_validas:
  - "productividad"

enunciado: "La relación técnica entre la cantidad de productos obtenidos y la cantidad de recursos o insumos utilizados para su obtención se denomina ___."

explicacion: |
  La productividad mide la eficiencia con la que se transforman los insumos (materia prima, trabajo, capital) en bienes o servicios finales.
```

### 2 — Identificación de Insumos

```
metadata:
  materia: "economia"
  tema: "productividad_produccion_insumos"
  nivel: "basico"
  tags: ["insumos", "factores_produccion"]

variables:
  datos: [["Materia prima", "Insumo"], ["Precio de venta", "Insumo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Materia prima", "Precio de venta", "Insumo", "Demanda"]

enunciado: "De acuerdo a la definición de productividad, el factor utilizado en el proceso de transformación es un ___."

explicacion: |
  Los insumos son todos aquellos elementos (materiales, energía, tiempo) que se consumen o utilizan en el proceso productivo.
```

### 3 — Relación Insumo-Producto

```
metadata:
  materia: "economia"
  tema: "productividad_produccion_insumos"
  nivel: "intermedio"
  tags: ["eficiencia", "calculo"]

variables:
  escenario: uno_de([0, 1])

respuesta: verdadero
tipo: vf
enunciado: "Si una empresa mantiene su producción constante pero logra reducir la cantidad de insumos necesarios para obtenerla, ¿ha aumentado su productividad?"

explicacion: |
  La productividad es una relación inversa respecto al insumo: a menor insumo para la misma producción, mayor es la productividad.
```

### 4 — Factores de la Productividad

```
metadata:
  materia: "economia"
  tema: "productividad_produccion_insumos"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: "eficiencia"
tipo: completar
respuestas_validas:
  - "eficiencia"

enunciado: "Cuando una empresa utiliza la menor cantidad de recursos posibles para alcanzar un nivel de producción determinado, se dice que está operando con ___."

explicacion: |
  La eficiencia es la capacidad de alcanzar un objetivo (producción) optimizando el uso de los recursos (insumos).
```

### 5 — Componentes del Proceso

```
metadata:
  materia: "economia"
  tema: "productividad_produccion_insumos"
  nivel: "basico"
  tags: ["flujo_produccion"]

respuesta_orden: ["Insumos", "Proceso", "Productos"]
tipo: ordenar
opciones_explicitas: ["Insumos", "Proceso", "Productos"]

enunciado: "Ordene cronológicamente las etapas del ciclo de producción que determinan la productividad:"

explicacion: |
  El flujo lógico comienza con la entrada de recursos (insumos), pasa por la transformación (proceso) y culmina en la salida (productos).
```

### 6 — Cálculo de Productividad Simple

```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "basico"
  tags: ["productividad", "calculo"]

variables:
  produccion: 150
  insumo: 30

respuesta: 5.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una fábrica produce {produccion} unidades de un producto utilizando {insumo} unidades de materia prima. ¿Cuál es el índice de productividad (producción por unidad de insumo)?"

pasos:
  - "Identificar la producción total: 150"
  - "Identificar el insumo utilizado: 30"
  - "Dividir la producción por el insumo: 150 / 30 = 5"

explicacion: |
  La productividad se calcula dividiendo la producción total entre la cantidad de insumos utilizados. En este caso: 150 / 30 = 5.
```

### 7 — Análisis de Eficiencia

```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "intermedio"
  tags: ["eficiencia", "comparacion"]

variables:
  caso_a: [["100 unidades / 20 insumos", "5"], ["200 unidades / 50 insumos", "4"]]
  idx: uno_de([0, 1])
  resultado_a: caso_a[idx][0]
  resultado_b: "200 unidades / 40 insumos"
  valor_b: "5"

respuesta: "5"
tipo: mc
opciones_explicitas: ["4", "5", "6", "7"]

enunciado: "Si el Caso A tiene una productividad de {resultado_a}, y el Caso B tiene una producción de 200 unidades con 40 unidades de insumo, ¿cuál es la productividad del Caso B?"

explicacion: |
  Para el Caso B: 200 / 40 = 5. Ambos casos presentan la misma productividad.
```

### 8 — Factores que afectan la Productividad

```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Si una empresa logra producir la misma cantidad de bienes utilizando menos insumos, su productividad ha aumentado?"

explicacion: |
  Correcto. La productividad es una relación inversa entre insumos y producción para un mismo nivel de output; a menor insumo para el mismo producto, mayor productividad.
```

### 9 — Proceso de Optimización

```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "intermedio"
  tags: ["proceso", "ordenar"]

opciones_explicitas: ["Medir la producción total", "Calcular la cantidad de insumos usados", "Dividir producción por insumos", "Analizar el índice de productividad"]

respuesta_orden: ["Medir la producción total", "Calcular la cantidad de insumos usados", "Dividir producción por insumos", "Analizar el índice de productividad"]
tipo: ordenar

enunciado: "Ordene los pasos lógicos para realizar un análisis de productividad en una línea de montaje:"

explicacion: |
  Primero se debe conocer qué se produjo, luego qué se gastó, luego realizar la operación matemática y finalmente interpretar el resultado obtenido.
```

### 10 — Completar la Definición

```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "basico"
  tags: ["teoria"]

respuestas_validas:
  - "relación"
  - "razón"
  - "proporción"
respuesta: "relación"
tipo: completar

enunciado: "La productividad se define técnicamente como la ___ entre la cantidad de producto obtenido y la cantidad de recursos empleados."

explicacion: |
  La productividad es la relación (o razón) matemática que indica la eficiencia con la que se transforman los insumos en productos finales.
```

### 11 — Productividad vs. Producción Total

```
metadata:
  materia: "economia"
  tema: "productividad_vs_produccion"
  nivel: "basico"
  tags: ["conceptos_clave", "eficiencia"]

variables:
  es_eficiente: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa aumenta su producción total pero su productividad (producción por unidad de insumo) disminuye, significa que la empresa es más ___."

pasos:
  - "Calcular producción total / insumos"

explicacion: |
  La productividad es una medida de eficiencia. Si la producción sube pero la productividad baja, significa que el aumento de producción se debe a un uso desproporcionadamente mayor de insumos, lo cual es ineficiente.
```

### 12 — El error de la producción máxima

```
metadata:
  materia: "economia"
  tema: "productividad_marginal"
  nivel: "intermedio"
  tags: ["productividad_marginal", "rendimientos"]

variables:
  escenario: uno_de([[100, 10, 10], [120, 12, 10], [135, 15, 9]])
  produccion: escenario[0]
  insumo: escenario[1]
  prod_marginal: escenario[2]

respuesta: prod_marginal
tipo: mc
opciones_explicitas: [10, 12, 9, 15]

enunciado: "Una empresa tiene una producción de {produccion} unidades usando {insumo} unidades de insumo. Si al agregar una unidad de insumo la producción total sube a {produccion + prod_marginal}, la productividad marginal es ___."

explicacion: |
  La productividad marginal es el cambio en la producción total resultante de añadir una unidad adicional de insumo. En el tercer caso del escenario, la producción pasó de 120 a 135 (un aumento de 15), pero si analizamos el cambio específico del último paso: 135 - 120 = 15. (Nota: El ejemplo se ajusta para mostrar la diferencia entre producción total y marginal).
```

### 13 — Relación Insumo-Producto

```
metadata:
  materia: "economia"
  tema: "relacion_insumo_producto"
  nivel: "basico"
  tags: ["productividad_media"]

variables:
  datos: uno_de([[500, 50], [800, 100], [1000, 250]])
  p_total: datos[0]
  i_total: datos[1]
  prod_media: datos[0] / datos[1]

respuesta: "10"
tipo: completar
respuestas_validas:
  - "10"
  - "10.0"
  - "10.00"

enunciado: "Si una fábrica produce {p_total} unidades utilizando {i_total} unidades de materia prima, la productividad media es ___."

explicacion: |
  La productividad media se calcula dividiendo la producción total entre la cantidad de insumos utilizados: {p_total} / {i_total} = {prod_media}.
```

### 14 — Rendimientos Decrecientes

```
metadata:
  materia: "economia"
  tema: "ley_rendimientos_decrecientes"
  nivel: "intermedio"
  tags: ["productividad_marginal", "rendimientos"]

variables:
  estado: uno_de([[verdadero, "Aumenta"], [falso, "Disminuye"]])

respuesta: estado[0]
tipo: completar
enunciado: "Según la ley de los rendimientos decrecientes, al añadir más de un factor variable (como trabajo) manteniendo los demás constantes, la productividad marginal eventualmente ___."

explicacion: |
  La ley de los rendimientos decrecientes establece que, a partir de cierto punto, cada unidad adicional de un insumo variable aporta menos a la producción total que la unidad anterior.
```

### 15 — Secuencia de análisis de productividad

```
metadata:
  materia: "economia"
  tema: "analisis_productividad"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

variables:
  pasos_orden: ["Medir producción total", "Contabilizar insumos utilizados", "Dividir producción entre insumos"]

respuesta_orden: ["Medir producción total", "Contabilizar insumos utilizados", "Dividir producción entre insumos"]
tipo: ordenar
opciones_explicitas: ["Dividir producción entre insumos", "Medir producción total", "Contabilizar insumos utilizados"]

enunciado: "Ordene los pasos necesarios para calcular la productividad de un proceso de producción:"

explicacion: |
  Para obtener la productividad, primero se debe saber cuánto se produjo (Producción Total), luego cuánto se gastó para lograrlo (Insumos) y finalmente realizar la división.
```

### 16 — Productividad vs Eficiencia

```
metadata:
  materia: "economia"
  tema: "productividad_vs_eficiencia"
  nivel: "basico"
  tags: ["conceptos_clave", "productividad"]

respuesta: "eficiencia"
tipo: "completar"
respuestas_validas:
  - "eficiencia"

enunciado: "Mientras que la productividad se mide como la relación entre la producción obtenida y los insumos utilizados, la capacidad de lograr un objetivo utilizando la menor cantidad de recursos posible se define como ___."

explicacion: |
  La productividad es una medida de rendimiento (output/input), mientras que la eficiencia se refiere al aprovechamiento óptimo de los recursos para evitar desperdicios.
```

### 17 — El factor de la productividad

```
metadata:
  materia: "economia"
  tema: "factores_productividad"
  nivel: "intermedio"
  tags: ["insumos", "teoria_produccion"]

variables:
  escenarios: [["Aumento de capital", "Mejora de tecnología", "Mejora de capacitación"], ["Aumento de insumos", "Mejora de tecnología", "Mejora de capacitación"]]
  escenario_idx: uno_de([0, 1])
  respuesta_correcta: escenarios[escenario_idx][1]

tipo: mc
opciones_explicitas: ["Aumento de insumos", "Mejora de tecnología", "Mejora de capacitación"]
respuesta: respuesta_correcta

enunciado: "Si una empresa logra producir lo mismo que el periodo anterior pero utilizando menos materia prima gracias a la implementación de maquinaria automatizada, estamos ante un caso de: {respuesta_correcta}."

pasos:
  - "Identificar el cambio en la relación output/input."
  - "Determinar si el cambio es por cantidad de insumos o por cambio tecnológico."

explicacion: |
  La automatización es un cambio tecnológico que permite desplazar la función de producción hacia arriba, aumentando la productividad.
```

### 18 — Productividad Marginal vs Media

```
metadata:
  materia: "economia"
  tema: "productividad_marginal"
  nivel: "avanzado"
  tags: ["marginalidad", "rendimientos"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que si la productividad marginal es mayor que la productividad media, entonces la productividad media debe estar disminuyendo?"

explicacion: |
  Falso. Si la productividad marginal es mayor que la media, la media está aumentando (efecto de tracción).
```

### 19 — Relación Insumo-Producto

```
metadata:
  materia: "economia"
  tema: "relacion_insumo_producto"
  nivel: "intermedio"
  tags: ["ley_rendimientos_decrecientes"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["La producción se mantiene constante a pesar de sumar más trabajadores", "La producción aumenta a un ritmo decreciente al sumar más trabajadores"], ["La producción se mantiene constante a pesar de sumar más trabajadores", "La producción aumenta a un ritmo decreciente al sumar más trabajadores"]]
  respuestas: ["Ley de rendimientos constantes", "Ley de rendimientos decrecientes"]

respuesta: respuestas[caso_idx]
tipo: "mc"
opciones_explicitas: ["Ley de rendimientos constantes", "Ley de rendimientos decrecientes"]

enunciado: "Cuando la adición de una unidad de insumo variable (como trabajo) produce un incremento en la producción total cada vez menor, estamos observando la: {casos[caso_idx][1]}."

explicacion: |
  La ley de rendimientos decrecientes indica que, en el corto plazo, añadir más de un factor variable a un factor fijo eventualmente reduce la productividad marginal.
```

### 20 — Fases de la producción

```
metadata:
  materia: "economia"
  tema: "fases_produccion"
  nivel: "avanzado"
  tags: ["etapas", "productividad"]

tipo: "ordenar"
opciones_explicitas: ["Etapa I", "Etapa II", "Etapa III"]
respuesta_orden: ["Etapa I", "Etapa II", "Etapa III"]

enunciado: "Ordene las etapas de la producción según el comportamiento de la productividad marginal (PMg) respecto a la productividad media (PMe):"

pasos:
  - "Identificar cuándo la PMg es mayor que la PMe (Crecimiento)."
  - "Identificar cuándo la PMg es igual que la PMe (Punto de máxima eficiencia media)."
  - "Identificar cuándo la PMg es negativa (Decrecimiento)."

explicacion: |
  En la Etapa I la PMg > PMe. En la Etapa II la PMg < PMe pero es positiva. En la Etapa III la PMg es negativa.
```

### 21 — Cálculo de productividad simple

```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "basico"
  tags: ["productividad", "calculo"]

variables:
  datos: [[100, 20], [150, 30], [200, 25]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una empresa textil produce {datos[idx][0]} unidades de camisas utilizando {datos[idx][1]} horas de trabajo. ¿Cuál es la productividad de la mano de obra (unidades por hora)?"

pasos:
  - "Identificar la producción total: {datos[idx][0]}"
  - "Identificar el insumo utilizado: {datos[idx][1]} horas"
  - "Dividir la producción por el insumo: {datos[idx][0]} / {datos[idx][1]}"

explicacion: |
  La productividad se calcula dividiendo la producción total entre la cantidad de insumos utilizados. En este caso: {datos[idx][0]} / {datos[idx][1]} = {datos[idx][0] / datos[idx][1]}.
```

### 22 — Interpretación de la productividad

```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa logra producir la misma cantidad de productos utilizando menos materia prima, se dice que la productividad de los insumos ha aumentado."

explicacion: |
  Correcto. La productividad es una relación inversa con los insumos para una producción constante: a menor insumo para el mismo output, mayor productividad.
```

### 23 — Comparación de escenarios

```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  idx: uno_de([0, 1, 2])
  prod_a: [10, 50, 100]
  ins_a: [2, 10, 20]
  prod_b: [15, 60, 120]
  ins_b: [5, 10, 20]
  prod_c: [12, 40, 90]
  ins_c: [3, 10, 10]
  ganador: ["Escenario A", "Escenario B", "Escenario C"]

respuesta: ganador[idx]
tipo: mc

opciones_explicitas: ["Escenario A", "Escenario B", "Escenario C"]

enunciado: "Considera los siguientes pares (Producción, Insumo):\n- Escenario A: ({prod_a[idx]}, {ins_a[idx]})\n- Escenario B: ({prod_b[idx]}, {ins_b[idx]})\n- Escenario C: ({prod_c[idx]}, {ins_c[idx]})\n¿Cuál de los escenarios presenta la mayor productividad?"

explicacion: |
  La productividad se calcula dividiendo la producción por el insumo utilizado. El escenario con el cociente más alto es el más productivo.
```

### 24 — Completar la fórmula

```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "basico"
  tags: ["formula"]

respuesta: "producción / insumo"
tipo: completar
respuestas_validas:
  - "producción / insumo"
  - "produccion / insumo"
  - "produccion / insumo"

enunciado: "La fórmula general para calcular la productividad es: ___"

explicacion: |
  La productividad es el cociente entre la producción obtenida y la cantidad de insumos (trabajo, capital, materia prima, etc.) utilizados para obtenerla.
```

### 25 — Análisis de eficiencia (Ordenamiento)

```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "intermedio"
  tags: ["ordenar"]

variables:
  casos: [["P: 10, I: 2", "P: 20, I: 5", "P: 30, I: 10"], ["P: 100, I: 10", "P: 100, I: 5", "P: 100, I: 2"], ["P: 5, I: 1", "P: 15, I: 3", "P: 45, I: 9"]]
  idx: uno_de([0, 1, 2])

respuesta_orden: ["P: 10, I: 2", "P: 20, I: 5", "P: 30, I: 10"]
tipo: ordenar
opciones_explicitas: ["P: 10, I: 2", "P: 20, I: 5", "P: 30, I: 10"]

enunciado: "Ordene los siguientes casos de producción según su productividad, de MENOR a MAYOR productividad."

explicacion: |
  Para ordenar debemos calcular la relación P/I de cada elemento:
  Caso 1: 10/2=5, 20/5=4, 30/10=3 (Orden descendente si se pide de menor a mayor: 3, 4, 5)
  Caso 2: 100/10=10, 100/5=20, 100/2=50 (Orden: 10, 20, 50)
  Caso 3: 5/1=5, 15/3=5, 45/9=5 (Son iguales)
  
  Nota: El usuario debe identificar el orden correcto basado en los valores calculados.
```
