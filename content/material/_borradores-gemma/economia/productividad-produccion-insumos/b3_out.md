### 1 — Productividad vs. Producción Total
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

### 2 — El error de la producción máxima
```
metadata:
  materia: "economia"
  tema: "productividad_marginal"
  nivel: "intermedio"
  tags: ["productividad_marginal", "rendimientos"]

variables:
  escenario: uno_de([
    [100, 10, 10],
    [120, 12, 10],
    [135, 15, 9]
  ])
  produccion: escenario[0]
  insumo: escenario[1]
  prod_marginal: escenario[2]

respuesta: escenario[2]
tipo: mc
opciones_explicitas: ["10", "12", "9", "15"]

enunciado: "Una empresa tiene una producción de {produccion} unidades usando {insumo} unidades de insumo. Si al agregar una unidad de insumo la producción total sube a 135, la productividad marginal es ___."

explicacion: |
  La productividad marginal es el cambio en la producción total resultante de añadir una unidad adicional de insumo. En el tercer caso del escenario, la producción pasó de 120 a 135 (un aumento de 15), pero si analizamos el cambio específico del último paso: 135 - 120 = 15. (Nota: El ejemplo se ajusta para mostrar la diferencia entre producción total y marginal).
```

### 3 — Relación Insumo-Producto
```
metadata:
  materia: "economia"
  tema: "relacion_insumo_producto"
  nivel: "basico"
  tags: ["productividad_media"]

variables:
  datos: uno_de([
    [500, 50],
    [800, 100],
    [1000, 250]
  ])
  p_total: datos[0]
  i_total: datos[1]
  prod_media: datos[0] / datos[1]

respuesta: "10"
tipo: completar
respuestas_validas: ["10", "10.0", "10.00"]

enunciado: "Si una fábrica produce {p_total} unidades utilizando {i_total} unidades de materia prima, la productividad media es ___."

explicacion: |
  La productividad media se calcula dividiendo la producción total entre la cantidad de insumos utilizados: {p_total} / {i_total} = {prod_media}.
```

### 4 — Rendimientos Decrecientes
```
metadata:
  materia: "economia"
  tema: "ley_rendimientos_decrecientes"
  nivel: "intermedio"
  tags: ["productividad_marginal", "rendimientos"]

variables:
  estado: uno_de([
    [verdadero, "Aumenta"],
    [falso, "Disminuye"]
  ])

respuesta: estado[0]
tipo: vf

enunciado: "Según la ley de los rendimientos decrecientes, al añadir más de un factor variable (como trabajo) manteniendo los demás constantes, la productividad marginal eventualmente ___."

explicacion: |
  La ley de los rendimientos decrecientes establece que, a partir de cierto punto, cada unidad adicional de un insumo variable aporta menos a la producción total que la unidad anterior.
```

### 5 — Secuencia de análisis de productividad
```
metadata:
  materia: "economia"
  tema: "analisis_productividad"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

variables:
  pasos_orden: ["Medir producción total", "Contabilizar insumos utilizados", "Dividir producción entre insumos"]

respuesta: ["Medir producción total", "Contabilizar insumos utilizados", "Dividir producción entre insumos"]
tipo: ordenar
opciones_explicitas: ["Dividir producción entre insumos", "Medir producción total", "Contabilizar insumos utilizados"]

enunciado: "Ordene los pasos necesarios para calcular la productividad de un proceso de producción:"

explicacion: |
  Para obtener la productividad, primero se debe saber cuánto se produjo (Producción Total), luego cuánto se gastó para lograrlo (Insumos) y finalmente realizar la división.
```