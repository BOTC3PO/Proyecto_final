# Examen jefe — [PENDIENTE #775]

> Logro #775. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **71 preguntas totales** en 5/5 secciones.

---

## Sección: productividad-produccion-insumos (25 preguntas)

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

```
metadata:
  materia: "economia"
  tema: "productividad_produccion_insumos"
  nivel: "basico"
  tags: ["insumos", "factores_produccion"]

respuesta: "Insumo"
tipo: mc
opciones_explicitas: ["Materia prima", "Precio de venta", "Insumo", "Demanda"]

enunciado: "De acuerdo a la definición de productividad, el factor utilizado en el proceso de transformación (como la materia prima) es un ___."

explicacion: |
  Los insumos son todos aquellos elementos (materiales, energía, tiempo) que se consumen o utilizan en el proceso productivo.
```

```
metadata:
  materia: "economia"
  tema: "productividad_produccion_insumos"
  nivel: "intermedio"
  tags: ["eficiencia", "calculo"]

respuesta: verdadero
tipo: vf
enunciado: "Si una empresa mantiene su producción constante pero logra reducir la cantidad de insumos necesarios para obtenerla, ¿ha aumentado su productividad?"

explicacion: |
  La productividad es una relación inversa respecto al insumo: a menor insumo para la misma producción, mayor es la productividad.
```

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
  Para el Caso B: 200 / 40 = 5, independientemente de la productividad del Caso A.
```

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

```
metadata:
  materia: "economia"
  tema: "productividad_vs_produccion"
  nivel: "basico"
  tags: ["conceptos_clave", "eficiencia"]

respuesta: "ineficiente"
tipo: completar
respuestas_validas:
  - "ineficiente"

enunciado: "Si una empresa aumenta su producción total pero su productividad (producción por unidad de insumo) disminuye, significa que la empresa es más ___."

pasos:
  - "Calcular producción total / insumos"

explicacion: |
  La productividad es una medida de eficiencia. Si la producción sube pero la productividad baja, significa que el aumento de producción se debe a un uso desproporcionadamente mayor de insumos, lo cual es ineficiente.
```

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
  La productividad marginal es el cambio en la producción total resultante de añadir una unidad adicional de insumo: {produccion + prod_marginal} - {produccion} = {prod_marginal}.
```

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

respuesta: prod_media
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una fábrica produce {p_total} unidades utilizando {i_total} unidades de materia prima, la productividad media es ___."

explicacion: |
  La productividad media se calcula dividiendo la producción total entre la cantidad de insumos utilizados: {p_total} / {i_total} = {prod_media}.
```

```
metadata:
  materia: "economia"
  tema: "ley_rendimientos_decrecientes"
  nivel: "intermedio"
  tags: ["productividad_marginal", "rendimientos"]

respuesta: "Disminuye"
tipo: completar
respuestas_validas:
  - "Disminuye"

enunciado: "Según la ley de los rendimientos decrecientes, al añadir más de un factor variable (como trabajo) manteniendo los demás constantes, la productividad marginal eventualmente ___."

explicacion: |
  La ley de los rendimientos decrecientes establece que, a partir de cierto punto, cada unidad adicional de un insumo variable aporta menos a la producción total que la unidad anterior.
```

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

```
metadata:
  materia: "economia"
  tema: "factores_productividad"
  nivel: "intermedio"
  tags: ["insumos", "teoria_produccion"]

tipo: mc
opciones_explicitas: ["Aumento de insumos", "Mejora de tecnología", "Mejora de capacitación"]
respuesta: "Mejora de tecnología"

enunciado: "Si una empresa logra producir lo mismo que el periodo anterior pero utilizando menos materia prima gracias a la implementación de maquinaria automatizada, ¿ante qué caso estamos?"

pasos:
  - "Identificar el cambio en la relación output/input."
  - "Determinar si el cambio es por cantidad de insumos o por cambio tecnológico."

explicacion: |
  La automatización es un cambio tecnológico que permite desplazar la función de producción hacia arriba, aumentando la productividad.
```

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

```
metadata:
  materia: "economia"
  tema: "relacion_insumo_producto"
  nivel: "intermedio"
  tags: ["ley_rendimientos_decrecientes"]

respuesta: "Ley de rendimientos decrecientes"
tipo: "mc"
opciones_explicitas: ["Ley de rendimientos constantes", "Ley de rendimientos decrecientes"]

enunciado: "Cuando la adición de una unidad de insumo variable (como trabajo) produce un incremento en la producción total cada vez menor, ¿qué ley estamos observando?"

explicacion: |
  La ley de rendimientos decrecientes indica que, en el corto plazo, añadir más de un factor variable a un factor fijo eventualmente reduce la productividad marginal.
```

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

```
metadata:
  materia: "economia"
  tema: "productividad_insumos"
  nivel: "intermedio"
  tags: ["ordenar"]

respuesta_orden: ["P: 30, I: 10", "P: 20, I: 5", "P: 10, I: 2"]
tipo: ordenar
opciones_explicitas: ["P: 10, I: 2", "P: 20, I: 5", "P: 30, I: 10"]

enunciado: "Ordene los siguientes casos de producción según su productividad, de MENOR a MAYOR productividad."

explicacion: |
  Calculando la relación P/I de cada caso: 30/10=3, 20/5=4, 10/2=5. De menor a mayor productividad: 3, 4, 5.
```

## Sección: fisiocracia (6 preguntas)

```
metadata:
  materia: "economia"
  tema: "fisiocracia"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

enunciado: "Según la fisiocracia, ¿cuál es la única fuente real de riqueza?"
tipo: mc
opciones_explicitas:
  - "La tierra y la agricultura"
  - "El oro acumulado por el Estado"
  - "El comercio internacional"
respuesta: "La tierra y la agricultura"

explicacion: |
  Para la fisiocracia, la industria y el comercio sólo transforman una
  riqueza que ya generó la naturaleza a través del trabajo agrícola.
```

```
metadata:
  materia: "economia"
  tema: "fisiocracia"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué lema resume la postura fisiócrata sobre la intervención del Estado en la economía?"
tipo: mc
opciones_explicitas:
  - "\"Laissez faire, laissez passer\" (dejar hacer, dejar pasar)"
  - "\"El Estado ante todo\""
  - "\"Balanza comercial favorable siempre\""
respuesta: "\"Laissez faire, laissez passer\" (dejar hacer, dejar pasar)"

explicacion: |
  Defiende la mínima intervención estatal posible en la economía —una
  postura opuesta al intervencionismo del mercantilismo.
```

```
metadata:
  materia: "economia"
  tema: "fisiocracia"
  nivel: "intermedio"
  tags: ["corrientes", "autor"]

enunciado: "¿Quién escribió el *Tableau économique* (1758), texto de referencia de la fisiocracia?"
tipo: mc
opciones_explicitas:
  - "François Quesnay"
  - "Thomas Mun"
  - "Adam Smith"
respuesta: "François Quesnay"

explicacion: |
  Quesnay, médico de la corte de Luis XV, hizo el primer intento
  sistemático de representar cómo circula la riqueza entre sectores de
  una economía.
```

```
metadata:
  materia: "economia"
  tema: "fisiocracia"
  nivel: "avanzado"
  tags: ["corrientes", "contexto"]

respuesta: verdadero
tipo: vf

enunciado: "La fisiocracia surgió en Francia durante el siglo XVIII como reacción directa a las ideas mercantilistas que dominaban la política económica europea."

explicacion: |
  Frente al mercantilismo (riqueza = oro acumulado por intervención
  estatal), la fisiocracia propone otra fuente de riqueza (la tierra)
  y otra receta de política (mínima intervención).
```

```
metadata:
  materia: "economia"
  tema: "fisiocracia"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para la fisiocracia, la industria y el comercio no crean riqueza nueva: sólo transforman o mueven una riqueza que ya generó la agricultura."

explicacion: |
  Es la consecuencia directa de considerar a la tierra como la única
  fuente real de riqueza.
```

```
metadata:
  materia: "economia"
  tema: "fisiocracia"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué representa por primera vez de forma sistemática el *Tableau économique* de Quesnay, y que hoy se considera un antecedente de la contabilidad macroeconómica?"
tipo: mc
opciones_explicitas:
  - "Cómo circula la riqueza entre los distintos sectores de una economía"
  - "El tipo de cambio entre distintas monedas europeas"
  - "La cantidad de oro que debía acumular cada país"
respuesta: "Cómo circula la riqueza entre los distintos sectores de una economía"

explicacion: |
  Es considerado el primer intento sistemático de este tipo — un
  antecedente directo de lo que hoy se conoce como cuentas nacionales.
```

## Sección: mercantilismo (6 preguntas)

```
metadata:
  materia: "economia"
  tema: "mercantilismo"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué sostiene el mercantilismo sobre la riqueza de una nación?"
tipo: mc
opciones_explicitas:
  - "Que se mide por la cantidad de oro y plata que acumula, y que el Estado debe fomentar exportaciones y restringir importaciones"
  - "Que se mide sólo por la cantidad de tierra cultivada"
  - "Que el Estado no debe intervenir nunca en el comercio"
respuesta: "Que se mide por la cantidad de oro y plata que acumula, y que el Estado debe fomentar exportaciones y restringir importaciones"

explicacion: |
  Es la idea central del mercantilismo, dominante en Europa entre los
  siglos XVI y XVIII durante la expansión colonial.
```

```
metadata:
  materia: "economia"
  tema: "mercantilismo"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "Para el mercantilismo, ¿qué significa tener una \"balanza comercial favorable\"?"
tipo: mc
opciones_explicitas:
  - "Exportar más de lo que se importa"
  - "Importar más de lo que se exporta"
  - "Que las exportaciones e importaciones sean exactamente iguales"
respuesta: "Exportar más de lo que se importa"

explicacion: |
  Un país que exporta más de lo que importa retiene más oro y plata,
  que es lo que el mercantilismo considera riqueza.
```

```
metadata:
  materia: "economia"
  tema: "mercantilismo"
  nivel: "intermedio"
  tags: ["corrientes", "autor"]

enunciado: "¿Quién escribió *England's Treasure by Foreign Trade* (1664), texto de referencia del mercantilismo?"
tipo: mc
opciones_explicitas:
  - "Thomas Mun"
  - "Adam Smith"
  - "François Quesnay"
respuesta: "Thomas Mun"

explicacion: |
  Mun era directivo de la Compañía Británica de las Indias Orientales y
  defendía la balanza comercial favorable como objetivo central de la
  política económica.
```

```
metadata:
  materia: "economia"
  tema: "mercantilismo"
  nivel: "basico"
  tags: ["corrientes", "contexto"]

respuesta: verdadero
tipo: vf

enunciado: "El mercantilismo fue la corriente económica dominante en Europa durante la expansión colonial, entre los siglos XVI y XVIII."

explicacion: |
  Coincide con el período de mayor expansión colonial europea, cuando
  acumular metales preciosos de las colonias era el objetivo central
  de la política económica de las potencias europeas.
```

```
metadata:
  materia: "economia"
  tema: "mercantilismo"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué herramienta usa el Estado, según el mercantilismo, para restringir las importaciones?"
tipo: mc
opciones_explicitas:
  - "Aranceles"
  - "Subsidios a productos importados"
  - "Ninguna: el mercantilismo se opone a cualquier intervención estatal"
respuesta: "Aranceles"

explicacion: |
  Los aranceles encarecen los productos importados, desalentando su
  compra y protegiendo así la producción local.
```

```
metadata:
  materia: "economia"
  tema: "mercantilismo"
  nivel: "avanzado"
  tags: ["corrientes", "problema"]

respuesta: falso
tipo: vf

enunciado: "Para el mercantilismo, un país que importa más bienes de los que exporta se está enriqueciendo, sin importar qué reciba a cambio de ese comercio."

explicacion: |
  Falso. Para el mercantilismo ese país se está empobreciendo, porque
  pierde oro y plata al pagar más de lo que cobra — la riqueza se mide
  por el metal retenido, no por los bienes recibidos. Esta misma idea
  es la que después critican tanto la fisiocracia como el liberalismo
  clásico de Adam Smith.
```

## Sección: pbi-e-inflacion (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Qué mide el Producto Bruto Interno (PBI)?"
tipo: mc
opciones_explicitas:
  - "El valor total de todos los bienes y servicios finales producidos en un país durante un período"
  - "El total de dinero que hay en los bancos de un país"
  - "El sueldo promedio de los habitantes de un país"
respuesta: "El valor total de todos los bienes y servicios finales producidos en un país durante un período"

explicacion: |
  Es la medida estándar del tamaño de la economía de un país.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Por qué el PBI cuenta el pan terminado, pero no cuenta aparte la harina que se usó para hacerlo?"
tipo: mc
opciones_explicitas:
  - "Porque la harina ya está incluida en el valor del pan, y contarla aparte la contaría dos veces"
  - "Porque la harina no se considera un producto"
  - "Porque sólo se cuentan los productos importados"
respuesta: "Porque la harina ya está incluida en el valor del pan, y contarla aparte la contaría dos veces"

explicacion: |
  El PBI cuenta bienes FINALES, justamente para evitar la doble
  contabilización de los insumos intermedios.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Cuál es la diferencia principal entre PBI nominal y PBI real?"
tipo: mc
opciones_explicitas:
  - "El real está ajustado quitando el efecto de la inflación; el nominal no"
  - "El real sólo cuenta productos exportados; el nominal cuenta todo"
  - "No hay ninguna diferencia real entre los dos"
respuesta: "El real está ajustado quitando el efecto de la inflación; el nominal no"

explicacion: |
  Es la distinción central para saber si la economía realmente
  produjo más, o si el número sólo subió por los precios.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Comparar el PBI nominal de dos años distintos, sin ajustar por inflación, puede hacer parecer que la economía \"creció\" cuando en realidad sólo subieron los precios."

explicacion: |
  Por eso las comparaciones serias siempre usan el PBI real, no el
  nominal.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Cómo se calcula el PBI per cápita?"
tipo: mc
opciones_explicitas:
  - "PBI total dividido la población del país"
  - "PBI total multiplicado por la población del país"
  - "El sueldo mínimo dividido el PBI total"
respuesta: "PBI total dividido la población del país"

explicacion: |
  Reparte el tamaño total de la economía entre la cantidad de
  habitantes.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "calculo"]

variables:
  poblacion: uno_de([2, 4, 5, 8, 10])
  pbi_per_capita_real: random(5, 40) * 1000
  pbi_total: poblacion * pbi_per_capita_real

respuesta: pbi_total / poblacion
tipo: input
tolerancia_abs: 0

enunciado: "Un país tiene un PBI total de ${pbi_total} millones y una población de {poblacion} millones de habitantes. ¿Cuál es su PBI per cápita?"

explicacion: |
  PBI per cápita = PBI total / población.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país con mucha población puede tener un PBI total enorme y, aun así, un nivel de vida bajo por persona — por eso conviene mirar el PBI per cápita, no sólo el total."

explicacion: |
  El PBI total mide tamaño; el per cápita se acerca más al nivel de
  vida promedio de cada habitante.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "A escala de todo un país, ¿qué es la inflación?"
tipo: mc
opciones_explicitas:
  - "El aumento generalizado y sostenido de los precios de la economía en su conjunto"
  - "El aumento del precio de un solo producto puntual"
  - "La cantidad total de dinero que emite el banco central"
respuesta: "El aumento generalizado y sostenido de los precios de la economía en su conjunto"

explicacion: |
  No es que un producto puntual suba: es que la MAYORÍA de los
  precios sube de forma sostenida.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Que un solo producto se ponga más caro por una razón puntual (por ejemplo, una mala cosecha) no es, por sí solo, inflación."

explicacion: |
  Inflación es un fenómeno generalizado del conjunto de precios, no un
  solo producto aislado.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Con qué herramienta se mide oficialmente la inflación de un país?"
tipo: mc
opciones_explicitas:
  - "Un índice de precios (como el IPC), que sigue el costo de una canasta representativa de bienes y servicios"
  - "El sueldo promedio de los trabajadores"
  - "El precio del dólar, exclusivamente"
respuesta: "Un índice de precios (como el IPC), que sigue el costo de una canasta representativa de bienes y servicios"

explicacion: |
  El IPC (Índice de Precios al Consumidor) es el ejemplo estándar de
  este tipo de índice.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Por convención, un índice de precios arranca en un año base con valor 100, y a partir de ahí se compara cómo sube ese número."

explicacion: |
  Es la convención estándar de cualquier índice de precios.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "calculo"]

variables:
  ipc_base: 100
  ipc_actual: 100 + random(5, 45)

respuesta: (ipc_actual - ipc_base) / ipc_base * 100
tipo: input
tolerancia_abs: 0

enunciado: "El índice de precios de un país arrancó el año en {ipc_base} (año base) y terminó en {ipc_actual}. ¿Cuál fue la tasa de inflación de ese período, en porcentaje?"

pasos:
  - "Variación: ({ipc_actual} - {ipc_base}) / {ipc_base}"
  - "En porcentaje: × 100"

explicacion: |
  Tasa de inflación = (Índice actual - Índice anterior) / Índice
  anterior × 100. Con año base 100, el resultado coincide con los
  puntos que subió el índice.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "calculo"]

variables:
  ipc_anterior: uno_de([100, 120, 200])
  inflacion_pct: uno_de([5, 10, 20, 25, 50])

respuesta: ipc_anterior + ipc_anterior * inflacion_pct / 100
tipo: input
tolerancia_abs: 0

enunciado: "El índice de precios estaba en {ipc_anterior} y hubo una inflación del {inflacion_pct}% en el período siguiente. ¿En qué valor quedó el índice?"

explicacion: |
  Índice nuevo = Índice anterior + (Índice anterior × tasa de
  inflación).
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre este tema (PBI e inflación) y el tema de \"Plazo fijo vs. inflación\" visto antes?"
tipo: mc
opciones_explicitas:
  - "Ese otro tema es la lectura PERSONAL de un dato de inflación ya conocido; este mide la inflación de todo el país desde cero, con un índice de precios"
  - "Son exactamente el mismo tema repetido"
  - "Este tema no tiene ninguna relación con la inflación"
respuesta: "Ese otro tema es la lectura PERSONAL de un dato de inflación ya conocido; este mide la inflación de todo el país desde cero, con un índice de precios"

explicacion: |
  Misma palabra, dos escalas: personal (un ahorro puntual) vs.
  macroeconómica (todo el país).
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "Cuando un noticiero dice \"la economía creció 3% este año\", ¿a qué PBI se refiere normalmente?"
tipo: mc
opciones_explicitas:
  - "Al PBI real (ya ajustado por inflación)"
  - "Al PBI nominal (sin ajustar)"
  - "Al PBI per cápita exclusivamente"
respuesta: "Al PBI real (ya ajustado por inflación)"

explicacion: |
  Hablar de "crecimiento" implica que se produjo más, no que sólo
  subieron los precios — por eso se usa el PBI real.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "calculo"]

variables:
  pbi_anterior: random(1, 20) * 20 * 1000
  crecimiento_pct: uno_de([5, 10, 15, 20, 25])
  pbi_actual: pbi_anterior + pbi_anterior * crecimiento_pct / 100

respuesta: (pbi_actual - pbi_anterior) / pbi_anterior * 100
tipo: input
tolerancia_abs: 0

enunciado: "El PBI real de un país fue ${pbi_anterior} millones un año, y ${pbi_actual} millones el año siguiente. ¿Cuál fue la tasa de crecimiento del PBI, en porcentaje?"

explicacion: |
  Tasa de crecimiento = (PBI actual - PBI anterior) / PBI anterior ×
  100 — la misma lógica que la tasa de inflación, aplicada al tamaño
  de la economía en vez de a los precios.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Qué significa la \"I\" (Interno) del PBI?"
tipo: mc
opciones_explicitas:
  - "Se cuenta lo producido DENTRO del país, sin importar la nacionalidad de quién lo produjo"
  - "Se cuenta sólo lo producido por empresas del propio país en cualquier lugar del mundo"
  - "Se cuenta sólo lo que se consume dentro del país"
respuesta: "Se cuenta lo producido DENTRO del país, sin importar la nacionalidad de quién lo produjo"

explicacion: |
  Es un criterio geográfico (dónde se produce), no de nacionalidad de
  quién produce.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La palabra \"Bruto\" del PBI significa que no se descuenta el desgaste de las máquinas y edificios usados para producir."

explicacion: |
  Es lo que distingue al PBI Bruto de un cálculo Neto, que sí
  descontaría esa depreciación.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Qué tipo de organismo suele publicar el IPC oficial de un país?"
tipo: mc
opciones_explicitas:
  - "Un organismo estatal de estadísticas (como el INDEC en Argentina)"
  - "Un banco privado cualquiera"
  - "Cada supermercado por separado"
respuesta: "Un organismo estatal de estadísticas (como el INDEC en Argentina)"

explicacion: |
  Es una medición oficial, centralizada en un organismo estadístico
  del Estado.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos de cómo se mide la inflación de un país."
opciones_explicitas:
  - "Se calcula la variación porcentual del índice entre dos períodos"
  - "Se releva el precio de esa canasta mes a mes"
  - "Se define una canasta representativa de bienes y servicios"
  - "Se arma un índice de precios (base 100) con esos relevamientos"
respuesta_orden: ["Se define una canasta representativa de bienes y servicios", "Se releva el precio de esa canasta mes a mes", "Se arma un índice de precios (base 100) con esos relevamientos", "Se calcula la variación porcentual del índice entre dos períodos"]

explicacion: |
  Cada paso es prerrequisito del siguiente: sin canasta no hay
  relevamiento, sin relevamiento no hay índice, sin índice no hay
  variación que calcular.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia"]

variables:
  ipc_base: 100
  ipc_actual: 100 + random(5, 45)
  tasa: (ipc_actual - ipc_base) / ipc_base * 100

tipo: completar
enunciado: "Completá: Tasa de inflación = ({ipc_actual} - {ipc_base}) / {ipc_base} × 100 = ___ (tasa, en porcentaje)."
respuestas_validas:
  - tasa

explicacion: |
  Es la aplicación directa de la fórmula de tasa de inflación.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El PBI mide el tamaño de toda la economía de un país, y la inflación (a esta escala) mide el aumento generalizado de precios de todo el país, medido con un índice — distinto de la lectura personal de cuánto rinde un ahorro puntual."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: liberalismo-clasico-y-escuela-austriaca (12 preguntas)

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué corriente introduce la idea de la \"mano invisible\": que el interés individual, en un mercado libre, termina beneficiando a la sociedad entera?"
tipo: mc
opciones_explicitas:
  - "El liberalismo clásico (Adam Smith)"
  - "El marxismo"
  - "El keynesianismo"
respuesta: "El liberalismo clásico (Adam Smith)"

explicacion: |
  Es el concepto central de *La riqueza de las naciones* (1776).
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "basico"
  tags: ["corrientes", "autor"]

enunciado: "¿Quién escribió *La riqueza de las naciones* (1776), texto fundacional del liberalismo clásico?"
tipo: mc
opciones_explicitas:
  - "Adam Smith"
  - "Karl Marx"
  - "Milton Friedman"
respuesta: "Adam Smith"

explicacion: |
  Es considerado el texto fundacional de la economía moderna como
  disciplina.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué sostiene la escuela austríaca sobre la planificación económica centralizada?"
tipo: mc
opciones_explicitas:
  - "Que un Estado central no puede tener toda la información necesaria para planificar la economía; los precios libres coordinan mejor"
  - "Que el Estado debe fijar todos los precios para evitar la inflación"
  - "Que sólo la agricultura genera riqueza real"
respuesta: "Que un Estado central no puede tener toda la información necesaria para planificar la economía; los precios libres coordinan mejor"

explicacion: |
  Es la crítica central de Hayek en *Camino de servidumbre* (1944) a
  la planificación centralizada.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para la escuela austríaca, cada precio de mercado resume información dispersa (qué escasea, qué se necesita, qué cuesta producir) que ningún planificador central podría reunir a tiempo."

explicacion: |
  Es el argumento del "problema del conocimiento": la información
  necesaria para planificar una economía entera está repartida entre
  millones de personas, no concentrada en ningún lugar.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "intermedio"
  tags: ["corrientes", "autor"]

enunciado: "¿Quién escribió *Camino de servidumbre* (1944), texto de referencia de la escuela austríaca?"
tipo: mc
opciones_explicitas:
  - "Friedrich Hayek"
  - "Ludwig von Mises"
  - "Adam Smith"
respuesta: "Friedrich Hayek"

explicacion: |
  Hayek argumenta que la planificación centralizada tiende a
  concentrar un poder que termina erosionando las libertades
  individuales.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

enunciado: "Para Ludwig von Mises, ¿cuál es la unidad básica de análisis de toda la economía?"
tipo: mc
opciones_explicitas:
  - "La acción humana individual: elegir, valorar, intercambiar"
  - "El Producto Bruto Interno del país"
  - "La cantidad de oro que posee el Estado"
respuesta: "La acción humana individual: elegir, valorar, intercambiar"

explicacion: |
  De ahí que la escuela austríaca desconfíe de tratar \"la economía\"
  como una sola cosa medible desde arriba, en vez de millones de
  decisiones individuales.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "intermedio"
  tags: ["corrientes", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia del mercantilismo, que veía el comercio como un juego de suma cero, Adam Smith sostiene que el intercambio libre y voluntario beneficia a ambas partes a la vez."

explicacion: |
  Es la base de la defensa del libre comercio en el liberalismo
  clásico: comprar y vender no es que uno gane lo que el otro pierde.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

enunciado: "Según el argumento de Henry Hazlitt en *La economía en una lección* (1946), ¿cómo debe juzgarse una política económica?"
tipo: mc
opciones_explicitas:
  - "Por sus efectos visibles inmediatos sobre un grupo Y por sus efectos indirectos menos visibles sobre todos los demás, a mediano y largo plazo"
  - "Sólo por su efecto inmediato sobre el grupo que la política busca beneficiar"
  - "Sólo por su costo fiscal en el primer año"
respuesta: "Por sus efectos visibles inmediatos sobre un grupo Y por sus efectos indirectos menos visibles sobre todos los demás, a mediano y largo plazo"

explicacion: |
  Ejemplo del propio Hazlitt: un arancel protege visiblemente a una
  industria, pero encarece ese producto para todos los consumidores y
  resta recursos a otras industrias — efecto real, aunque menos
  visible.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "Según el liberalismo clásico, ¿a qué debe limitarse el Estado en materia económica?"
tipo: mc
opciones_explicitas:
  - "A garantizar la propiedad privada, la justicia y algunas obras públicas, sin intervenir en precios ni comercio"
  - "A fijar los precios de todos los bienes esenciales"
  - "A ser el único empleador de la economía"
respuesta: "A garantizar la propiedad privada, la justicia y algunas obras públicas, sin intervenir en precios ni comercio"

explicacion: |
  Es el rol mínimo que Smith reserva para el Estado, dejando el resto
  a la coordinación espontánea del mercado.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Este bloque presenta cada corriente explicando qué sostiene, con la misma seriedad expositiva, sin marcar ninguna como \"la correcta\"."

explicacion: |
  Es el criterio central de todo el bloque de corrientes de
  pensamiento económico: identificar argumentos, no adoctrinar con una
  postura como la verdadera.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Varias corrientes de este bloque conviven hoy y se siguen citando en debates de política económica actuales — no es una sucesión donde cada una \"reemplaza\" a la anterior."

explicacion: |
  Lo único estrictamente cronológico es cuándo apareció cada corriente,
  no cuál es superior.
```

```
metadata:
  materia: "economia"
  tema: "liberalismo_clasico_y_escuela_austriaca"
  nivel: "avanzado"
  tags: ["corrientes", "contexto"]

respuesta: verdadero
tipo: vf

enunciado: "Entre la publicación de La riqueza de las naciones (1776) y el surgimiento de la escuela austríaca (desde finales del siglo XIX) pasó más de un siglo."

explicacion: |
  Ambas comparten la confianza en el mercado libre, pero la escuela
  austríaca la profundiza con un argumento propio sobre la información
  dispersa en los precios, casi 100 años después de Smith.
```

