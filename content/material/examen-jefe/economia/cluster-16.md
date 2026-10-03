# Examen jefe — [PENDIENTE #781]

> Logro #781. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: mvp-producto-minimo-viable (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["metodologia", "startup", "lean_startup"]

respuesta: "aprendizaje"
tipo: completar
respuestas_validas:
  - "aprendizaje"
  - "validar hipótesis"

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

respuesta: falso
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

respuesta: "Landing Page"
tipo: mc
opciones_explicitas: ["Landing Page", "Mago de Oz", "Conserje"]

enunciado: "Si una startup lanza una página web simple para ver cuántas personas hacen clic en un botón de 'comprar' antes de tener el producto desarrollado, ¿qué modelo de MVP está utilizando?"

explicacion: |
  La Landing Page es uno de los MVPs más rápidos para validar la demanda de una idea antes de invertir en desarrollo técnico.
```

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["lean_startup", "ciclo_feedback"]

opciones_explicitas: ["Construir", "Medir", "Aprender"]
respuesta_orden: ["Construir", "Medir", "Aprender"]
tipo: ordenar

enunciado: "Ordena los pasos del ciclo de feedback de la metodología Lean Startup que se utiliza para iterar sobre un MVP:"

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
respuestas_validas:
  - "el producto más simple que permite aprender de usuarios reales"
  - "una versión completa pero barata"

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
respuestas_validas:
  - "aprender"
  - "aprendizaje"

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
  escenario: uno_de([["App de comida con sistema de pagos integrado", "Software complejo"], ["Un grupo de WhatsApp para tomar pedidos manualmente", "Concierge MVP"], ["Un sitio web con fotos de productos sin carrito", "Landing Page"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["Software complejo", "Concierge MVP", "Landing Page"]

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

respuesta_orden: ["Definir hipótesis", "Crear versión mínima", "Lanzar a usuarios", "Analizar métricas"]
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
  datos: uno_de([[100, 5, 0.05], [200, 20, 0.10], [50, 1, 0.02]])

respuesta: datos[2]
tipo: "completar"
tolerancia_abs: 0.001

enunciado: "Se lanza un MVP de una plataforma de cursos online. Los datos obtenidos son: Visitas totales: {datos[0]}, Usuarios que se registran: {datos[1]}. ¿Cuál es la tasa de conversión (registrados/visitas) expresada en decimal?"

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

respuesta_orden: ["Construir", "Medir", "Aprender"]
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

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas:
  - escenario[idx][1]

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
respuestas_validas:
  - "una función principal"

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
respuestas_validas:
  - "prototipo"

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

tipo: "mc"
opciones_explicitas: ["Maximizar las funcionalidades para satisfacer a todos los clientes", "Maximizar el aprendizaje validado con el mínimo esfuerzo"]

respuesta: "Maximizar el aprendizaje validado con el mínimo esfuerzo"

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

respuesta_orden: ["Construir", "Medir", "Aprender"]
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

tipo: "mc"
opciones_explicitas: ["El MVP se enfoca en la velocidad de aprendizaje, mientras que el MMP se enfoca en la utilidad y la experiencia de usuario básica", "El MVP es una versión de prueba interna y el MMP es el producto final para la venta masiva"]

respuesta: "El MVP se enfoca en la velocidad de aprendizaje, mientras que el MMP se enfoca en la utilidad y la experiencia de usuario básica"

enunciado: "¿Cuál es la diferencia principal entre MVP (Minimum Viable Product) y MMP (Minimum Marketable Product)?"

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

respuesta_orden: ["Construir", "Medir", "Aprender"]
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
respuestas_validas:
  - "5%"
  - "20%"
  - "0%"

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

## Sección: business-model-canvas (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["gestion", "estrategia"]

tipo: mc
opciones_explicitas: ["Un esquema para analizar la viabilidad financiera de una empresa", "Una herramienta visual para describir y diseñar modelos de negocio", "Un software para la gestión de inventarios", "Un método para la contratación de personal"]
respuesta: "Una herramienta visual para describir y diseñar modelos de negocio"

enunciado: "El Business Model Canvas es ___."

explicacion: |
  El Business Model Canvas es una herramienta estratégica que permite visualizar los nueve módulos de un modelo de negocio en un solo lienzo.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["clientes", "segmentacion"]

tipo: vf
respuesta: falso

enunciado: "¿El bloque 'Segmentos de Clientes' se refiere exclusivamente a la lista de nombres de las personas que compran el producto?"

explicacion: |
  Falso. El bloque define los grupos de personas u organizaciones que una empresa pretende alcanzar y servir, caracterizándolos por sus necesidades, comportamientos o atributos.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["propuesta_de_valor", "clientes"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Software de gestión para contadores", "Optimizar el tiempo de cierre contable"], ["Cafetería de especialidad", "Ofrecer un espacio de coworking con café premium"]]

tipo: completar
respuestas_validas:
  - "Optimizar el tiempo de cierre contable"
  - "Ofrecer un espacio de coworking con café premium"
respuesta: escenarios[escenario_idx][1]

enunciado: "Si el segmento de cliente es {escenarios[escenario_idx][0]}, una propuesta de valor coherente sería: ___."

explicacion: |
  La propuesta de valor debe resolver un problema o satisfacer una necesidad específica del segmento de cliente elegido.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["vocabulario"]

tipo: mc
opciones_explicitas: ["Canales", "Presupuesto", "Organigrama", "Plan de Marketing"]
respuesta: "Organigrama"

enunciado: "¿Cuál de los siguientes NO es uno de los 9 bloques fundamentales del Business Model Canvas?"

explicacion: |
  Los 9 bloques son: Segmentos de clientes, Propuesta de valor, Canales, Relación con clientes, Flujos de ingresos, Recursos clave, Actividades clave, Alianzas clave y Estructura de costos.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["metodologia"]

tipo: ordenar
opciones_explicitas: ["Definir Segmentos de Clientes", "Definir Propuesta de Valor", "Definir Canales de Distribución", "Definir Fuentes de Ingresos"]
respuesta_orden: ["Definir Segmentos de Clientes", "Definir Propuesta de Valor", "Definir Canales de Distribución", "Definir Fuentes de Ingresos"]

enunciado: "Para construir un modelo de negocio coherente, se recomienda seguir un orden lógico de pensamiento. Ordena estos pasos desde el más fundamental al siguiente:"

explicacion: |
  Aunque el proceso puede ser iterativo, la lógica fundamental dicta que primero debes saber a quién le vendes (Segmentos), qué problema les resuelves (Propuesta de Valor), cómo les llegas (Canales) y cómo obtienes dinero (Ingresos).
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["modelo_de_negocio", "propuesta_de_valor"]

variables:
  caso: uno_de([["Netflix", "Suscripción de streaming de películas y series"], ["Tesla", "Vehículos eléctricos de alto rendimiento y energía sostenible"]])

respuesta: "Propuesta de Valor"
tipo: mc
opciones_explicitas: ["Propuesta de Valor", "Segmentos de Clientes", "Canales", "Relación con Clientes"]

enunciado: "En el modelo de negocio de {caso[0]}, el elemento que describe el beneficio principal que se ofrece al cliente (en este caso, {caso[1]}) corresponde al bloque de: ___"

explicacion: |
  La Propuesta de Valor es el bloque que describe el conjunto de productos y servicios que crean valor para un segmento de clientes específico. En el caso de {caso[0]}, es {caso[1]}.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["segmentos", "clientes"]

respuesta: "B2C"
tipo: mc
opciones_explicitas: ["B2B", "B2C", "C2C", "B2G"]

enunciado: "Si una empresa de software vende sus licencias directamente a consumidores finales a través de una tienda online, ¿qué tipo de segmento de cliente está atacando principalmente?"

explicacion: |
  B2C (Business to Consumer) se refiere a la venta de productos o servicios de una empresa directamente al consumidor final.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["canales", "distribucion"]

respuesta: "Enviar al cliente"
tipo: completar
respuestas_validas:
  - "Enviar al cliente"
pasos:
  - "Paso 1: Crear el producto"
  - "Paso 2: Almacenar stock"
  - "Paso 3: ___"

enunciado: "Para un modelo de negocio basado en productos físicos, el proceso de entrega sigue este orden lógico:"

explicacion: |
  El tercer paso en la cadena de valor de distribución física es el envío o entrega al cliente final.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["costos", "ingresos"]

respuesta: falso
tipo: vf

enunciado: "En el Business Model Canvas, el bloque de 'Estructura de Costos' se refiere exclusivamente a los gastos de marketing y publicidad de la empresa."

explicacion: |
  Falso. La estructura de costos incluye todos los costos incurridos para operar el modelo de negocio, incluyendo costos fijos, variables, economías de escala y costos de adquisición.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "avanzado"
  tags: ["ingresos", "flujos"]

tipo: mc
opciones_explicitas: ["Venta de activos", "Tarifa de uso", "Licencia", "Alquiler"]

respuesta: "Tarifa de uso"

enunciado: "Si una empresa de software cobra por cada hora de uso de su plataforma, el flujo de ingresos se clasifica como: ___"

explicacion: |
  El modelo de 'Tarifa de uso' se basa en el consumo o tiempo de uso del servicio, a diferencia de la 'Venta de activos' donde la propiedad se transfiere permanentemente.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["propuesta_de_valor", "errores_comunes"]

respuesta: "propuesta de valor"
tipo: "completar"
respuestas_validas:
  - "propuesta de valor"

enunciado: "Un error común es confundir el producto o servicio físico con la ___ , la cual debe centrarse en la solución de un problema o la satisfacción de una necesidad del cliente."

explicacion: |
  La propuesta de valor no es el objeto en sí, sino el beneficio o valor que el cliente recibe al usarlo.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["segmentos_de_clientes", "errores_comunes"]

respuesta: verdadero
tipo: "vf"

enunciado: "Si una empresa intenta dirigirse a 'todo el mundo' sin definir características específicas, está cometiendo el error de no definir correctamente sus segmentos de clientes."

explicacion: |
  Intentar ser todo para todos suele diluir la propuesta de valor. La segmentación permite enfocar recursos y mensajes.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["canales", "comunicacion"]

opciones_explicitas: ["Canales", "Relación con clientes"]

respuesta: "Canales"
tipo: "mc"

enunciado: "Muchos emprendedores confunden la comunicación (cómo se enteran de la existencia de la marca) con los ___ (cómo se entrega el producto o servicio al cliente)."

explicacion: |
  Los canales incluyen la distribución, la logística y los puntos de venta, no solo la publicidad.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["flujos_de_ingresos", "errores_comunes"]

respuesta: "monetización"
tipo: "completar"
respuestas_validas:
  - "monetización"

enunciado: "Tener un producto exitoso no garantiza un modelo de negocio viable si no se define claramente la estrategia de ___."

explicacion: |
  El Business Model Canvas requiere entender cómo el valor se transforma en ingresos (suscripción, venta única, freemium, etc.).
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "avanzado"
  tags: ["estructura_de_costos", "escalabilidad"]

enunciado: "En el modelo de consultoría tradicional, la estructura de costos suele ser variable y ligada al volumen (horas trabajadas), mientras que en el modelo de software SaaS, la estructura suele ser mayormente fija y escalable."

respuesta: verdadero
tipo: "vf"

explicacion: |
  En el modelo SaaS (Software as a Service), los costos marginales son muy bajos y la estructura es altamente escalable. En la consultoría, el costo principal es el tiempo humano (costo variable/escalabilidad limitada).
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["estrategia", "gestion"]

respuesta: "Plan de Negocios"
tipo: completar
respuestas_validas:
  - "Plan de Negocios"

enunciado: "A diferencia del Business Model Canvas, que es una herramienta visual y dinámica para modelar hipótesis, el ___ es un documento detallado y extenso que describe la estrategia operativa y financiera a largo plazo."

explicacion: |
  El Business Model Canvas es una herramienta de síntesis visual (canvas), mientras que el Plan de Negocios es un documento formal y exhaustivo utilizado para buscar financiación o guiar la ejecución detallada.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["propuesta_de_valor", "segmentos"]

variables:
  escenario: uno_de([["Un software de gestión de turnos para peluquerías", "Propuesta de Valor"], ["Un servicio de entrega de comida a domicilio", "Propuesta de Valor"], ["Un gimnasio con entrenamiento personalizado", "Propuesta de Valor"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Segmentos de Cliente", "Propuesta de Valor", "Canales", "Relación con el Cliente"]

enunciado: "En el escenario de '{escenario[0]}', el elemento central que describe el beneficio o solución que se ofrece para resolver un problema específico del cliente es la: ___"

explicacion: |
  La Propuesta de Valor es el conjunto de productos y servicios que crean valor para un segmento de mercado específico, diferenciándose de los Segmentos de Cliente (quiénes son) o los Canales (cómo llegan).
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["enfoque", "cliente"]

respuesta: falso

tipo: vf

enunciado: "El Business Model Canvas se centra primordialmente en la estructura de costos y la logística de producción, dejando el análisis de los segmentos de cliente para una etapa posterior del desarrollo del negocio."

explicacion: |
  Falso. El Canvas es una herramienta centrada en el cliente; los segmentos de clientes y la propuesta de valor son los pilares fundamentales sobre los que se construye el resto del modelo.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["estructura", "componentes"]

respuesta_orden: ["Segmentos de Cliente", "Propuesta de Valor", "Canales", "Relación con el Cliente", "Fuentes de Ingresos", "Recursos Clave", "Actividades Clave", "Asociaciones Clave", "Estructura de Costos"]
tipo: ordenar

opciones_explicitas: ["Segmentos de Cliente", "Propuesta de Valor", "Canales", "Relación con el Cliente", "Fuentes de Ingresos", "Recursos Clave", "Actividades Clave", "Asociaciones Clave", "Estructura de Costos"]

enunciado: "Ordene los siguientes elementos siguiendo el flujo lógico de generación de valor (desde el cliente hacia la infraestructura interna):"

explicacion: |
  El flujo lógico comienza con el mercado (Clientes, Propuesta, Canales, Relación, Ingresos) y termina con la base operativa (Recursos, Actividades, Socios y Costos).
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["canales", "relacion"]

respuesta: "Canales"
tipo: mc
opciones_explicitas: ["Canales", "Relación con el Cliente", "Segmentos de Cliente", "Actividades Clave"]

enunciado: "Si una empresa se pregunta '¿Cómo entrego mi propuesta de valor al cliente?', está analizando sus: ___"

explicacion: |
  Los Canales se refieren a los puntos de contacto y medios de distribución para entregar el valor. La Relación con el Cliente se refiere al tipo de vínculo que se establece (asistencia personal, autoservicio, etc.).
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["segmentos", "clientes"]

variables:
  datos: [["App de paseo de perros para dueños ocupados", "Dueños de mascotas"], ["Software de contabilidad para freelancers", "Profesionales independientes"], ["Cafetería gourmet para estudiantes universitarios", "Estudiantes universitarios"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Dueños de mascotas", "Profesionales independientes", "Estudiantes universitarios", "Empresas de tecnología"]

enunciado: "En el modelo de negocio de una {datos[idx][0]}, ¿cuál es el segmento de clientes principal?"

explicacion: |
  El segmento de clientes define quiénes son los individuos o empresas que la empresa busca alcanzar y servir. En el caso de {datos[idx][0]}, el foco está en {datos[idx][1]}.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["propuesta_de_valor", "beneficios"]

variables:
  datos: [["Entrega de comida en 10 minutos", "Rapidez y conveniencia"], ["Consultoría financiera personalizada", "Confianza y experto asesoramiento"], ["Suscripción de streaming sin anuncios", "Entretenimiento sin interrupciones"]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Si el modelo de negocio se basa en {datos[idx][0]}, la propuesta de valor principal es ___."

explicacion: |
  La propuesta de valor es el conjunto de productos y servicios que crean valor para un segmento de clientes específico.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["canales", "comunicacion"]

variables:
  datos: [["Tienda de ropa online", "Redes sociales y web"], ["Taller mecánico físico", "Ubicación presencial"], ["Software SaaS", "Descarga digital"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Redes sociales y web"
  - "Ubicación presencial"
  - "Descarga digital"

enunciado: "Para una {datos[idx][0]}, el canal de comunicación y venta principal es ___."

explicacion: |
  Los canales describen cómo la empresa se comunica con sus clientes y cómo entrega su propuesta de valor.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["costos", "estructura"]

variables:
  datos: [["Fábrica de muebles", "Materia prima y mano de obra"], ["Consultora de marketing", "Salarios de especialistas"], ["Plataforma de streaming", "Servidores y licencias"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Materia prima y mano de obra", "Salarios de especialistas", "Servidores y licencias", "Alquiler de locales"]

enunciado: "Para una {datos[idx][0]}, el costo principal suele ser ___."

explicacion: |
  La estructura de costos describe todos los costos en los que se incurre para operar un modelo de negocio.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "avanzado"
  tags: ["ingresos", "monetizacion"]

variables:
  datos: [["Gimnasio con membresía mensual", "Cuota recurrente"], ["Venta de un libro físico", "Transacción única"], ["Software con modelo freemium", "Combinación de modelos"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Cuota recurrente", "Transacción única", "Combinación de modelos"]

enunciado: "Según el modelo de {datos[idx][0]}, ¿qué tipo de flujo de ingresos corresponde?"

explicacion: |
  El flujo de ingresos representa el efectivo que la empresa genera de cada segmento de clientes.
```

## Sección: punto-de-equilibrio (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["conceptos", "fundamentos"]

tipo: mc
opciones_explicitas: ["El punto donde los ingresos totales son iguales a los costos totales", "El punto donde las ventas son máximas", "El punto donde los costos fijos son cero", "El punto donde la utilidad es máxima"]

enunciado: "En economía y contabilidad, el punto de equilibrio se define como ___."

respuesta: "El punto donde los ingresos totales son iguales a los costos totales"

explicacion: |
  El punto de equilibrio (break-even point) es el nivel de actividad donde la empresa no obtiene beneficios ni pérdidas, es decir, donde el ingreso total es igual al costo total.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["conceptos", "utilidad"]

tipo: vf

enunciado: "En el punto de equilibrio, la utilidad de la empresa es exactamente cero."

respuesta: verdadero

explicacion: |
  Es correcto. Si los ingresos igualan a los costos, la diferencia (utilidad) es cero.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["costos", "estructuras"]

tipo: completar
respuestas_validas:
  - "costos_fijos"

enunciado: "Para calcular el punto de equilibrio en unidades, se requiere conocer los ___ (que no cambian con la producción), los costos variables (que dependen del volumen) y el precio de venta (valor por unidad)."

pasos:
  - "Identificar los costos fijos (CF)"
  - "Identificar los costos variables unitarios (CVu)"
  - "Identificar el precio de venta unitario (P)"
  - "Aplicar la fórmula: CF / (P - CVu)"

respuesta: "costos_fijos"

explicacion: |
  Para calcular el punto de equilibrio se necesitan los costos fijos, los costos variables unitarios y el precio de venta.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["ingresos", "costos"]

tipo: mc
opciones_explicitas: ["Ingresos > Costos", "Ingresos < Costos", "Ingresos = Costos", "Ingresos + Costos = 0"]

enunciado: "Si una empresa se encuentra por encima de su punto de equilibrio en términos de ventas, esto significa que sus ingresos son ___ que sus costos totales."

respuesta: "Ingresos > Costos"

explicacion: |
  Si las ventas superan el punto de equilibrio, la empresa está en la zona de ganancias (Ingresos > Costos). Si están por debajo, está en zona de pérdidas.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["procedimiento", "calculo"]

tipo: ordenar
opciones_explicitas: ["Determinar costos fijos totales", "Calcular el margen de contribución unitario", "Dividir costos fijos por el margen de contribución"]

enunciado: "Ordene los pasos lógicos para hallar el punto de equilibrio en unidades:"

respuesta_orden: ["Determinar costos fijos totales", "Calcular el margen de contribución unitario", "Dividir costos fijos por el margen de contribución"]

explicacion: |
  Primero se deben conocer los costos fijos, luego la diferencia entre precio y costo variable (margen de contribución) y finalmente realizar la división.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["conceptos", "fundamentos"]

respuesta: verdadero
tipo: vf

enunciado: "El punto de equilibrio se define como el nivel de actividad donde los ingresos totales son exactamente iguales a los costos totales, lo que implica que la empresa no obtiene ni beneficios ni pérdidas."

explicacion: |
  Exacto. En el punto de equilibrio (break-even point), el beneficio es cero porque la utilidad es igual a Ingresos Totales menos Costos Totales.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["calculo", "unidades"]

variables:
  escenario: uno_de([["Precio: $100, Costo Variable: $60, Costo Fijo: $400", "10"], ["Precio: $50, Costo Variable: $30, Costo Fijo: $1000", "50"], ["Precio: $200, Costo Variable: $150, Costo Fijo: $500", "10"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["10", "20", "50", "100"]

enunciado: "Una empresa tiene los siguientes datos: {escenario[0]}. ¿Cuántas unidades debe vender para alcanzar su punto de equilibrio?"

explicacion: |
  Para hallar el punto de equilibrio en unidades se usa la fórmula: 
  Unidades = Costos Fijos / (Precio - Costo Variable).
  En este caso: 400 / (100 - 60) = 400 / 40 = 10 unidades.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["margen_contribucion"]

respuesta: "margen de contribución"
tipo: completar
respuestas_validas:
  - "margen de contribución"
  - "margen de contribución unitario"

enunciado: "La diferencia entre el precio de venta unitario y el costo variable unitario se denomina ___."

explicacion: |
  El margen de contribución es la cantidad de dinero que cada unidad vendida aporta para cubrir los costos fijos y, una vez cubiertos estos, generar utilidad.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular el margen de contribución unitario", "Identificar costos fijos y variables", "Dividir los costos fijos por el margen de contribución"]
respuesta_orden: ["Identificar costos fijos y variables", "Calcular el margen de contribución unitario", "Dividir los costos fijos por el margen de contribución"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para calcular el punto de equilibrio en unidades de un producto."

explicacion: |
  Primero se deben clasificar los costos (Fijos vs Variables), luego se determina cuánto aporta cada unidad (Margen) y finalmente se divide el total de costos fijos por ese aporte.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "avanzado"
  tags: ["calculo", "ingresos"]

variables:
  datos: uno_de([["Precio: $50, Costo Variable: $30, Costo Fijo: $1000", "2500"], ["Precio: $20, Costo Variable: $10, Costo Fijo: $500", "1000"], ["Precio: $10, Costo Variable: $5, Costo Fijo: $200", "400"]])

respuesta: datos[1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si una empresa tiene los siguientes costos: {datos[0]}. ¿Cuál es el nivel de ingresos totales (en $) necesario para alcanzar el punto de equilibrio?"

pasos:
  - "1. Calcular unidades de equilibrio: Costo Fijo / (Precio - Costo Variable)"
  - "2. Calcular ingresos: Unidades de equilibrio * Precio"

explicacion: |
  Siguiendo los datos:
  1. Unidades = Costo Fijo / (Precio - Costo Variable)
  2. Ingresos de equilibrio = Unidades de equilibrio * Precio
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["conceptos", "costos", "ingresos"]

respuesta: "cero"
tipo: "completar"
respuestas_validas:
  - "cero"
  - "0"
  - "0.0"

enunciado: "En el punto de equilibrio, la diferencia entre los ingresos totales y los costos totales es igual a ___."

explicacion: |
  El punto de equilibrio es el nivel de actividad donde la empresa no obtiene beneficios ni pérdidas; es decir, la utilidad es exactamente cero.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["costos_fijos", "costos_variables"]

respuesta: "100"
tipo: "mc"
opciones_explicitas: ["100", "50", "20", "10"]

enunciado: "Si una empresa tiene un costo fijo de 1000, un costo variable por unidad de 5 y un precio de venta de 15, ¿cuántas unidades debe vender para alcanzar el punto de equilibrio?"

explicacion: |
  La fórmula es: Q = Costo Fijo / (Precio - Costo Variable Unitario).
  En este caso: 1000 / (15 - 5) = 1000 / 10 = 100.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["verdadero_falso", "utilidad"]

respuesta: falso
tipo: "vf"

enunciado: "Si una empresa se encuentra exactamente en su punto de equilibrio, significa que ha maximizado sus beneficios."

explicacion: |
  Falso. En el punto de equilibrio la utilidad es cero. El objetivo de la empresa suele ser operar por encima de ese punto para generar ganancias.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["margen_de_contribucion", "ordenar"]

tipo: "ordenar"
opciones_explicitas: ["Precio de venta", "Costo Variable Unitario", "Margen de Contribución"]
respuesta_orden: ["Precio de venta", "Costo Variable Unitario", "Margen de Contribución"]

enunciado: "Para calcular el punto de equilibrio, primero debemos determinar el margen de contribución unitario. Ordena los elementos según la lógica de la resta para obtener dicho margen:"

explicacion: |
  El Margen de Contribución se obtiene restando el Costo Variable Unitario al Precio de Venta.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "avanzado"
  tags: ["sensibilidad", "costos_fijos"]

tipo: "mc"
opciones_explicitas: ["aumenta", "disminuye", "se mantiene"]

respuesta: "aumenta"

enunciado: "Si los costos fijos de una empresa aumentan, el nivel de ventas necesario para alcanzar el punto de equilibrio ___."

explicacion: |
  Existe una relación directa: a mayores costos fijos, se requiere vender más unidades para cubrir esos costos y llegar al punto de equilibrio.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["conceptos_clave", "costos"]

respuesta: "punto de equilibrio"
tipo: completar
respuestas_validas:
  - "punto de equilibrio"
  - "Punto de Equilibrio"

enunciado: "El nivel de ventas en el cual los ingresos totales son exactamente iguales a los costos totales, lo que implica que la empresa no obtiene beneficios ni pérdidas, se denomina ___."

explicacion: |
  En el punto de equilibrio (break-even point), la utilidad es cero porque la curva de ingresos intercepta a la curva de costos totales.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["comparacion", "utilidad"]

respuesta: falso
tipo: vf

enunciado: "Si una empresa se encuentra exactamente en su punto de equilibrio, significa que ha maximizado su utilidad neta."

explicacion: |
  Falso. En el punto de equilibrio la utilidad es exactamente cero. La maximización de la utilidad ocurre en un nivel de ventas distinto, donde la diferencia entre ingresos y costos es la mayor posible.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["costos_fijos", "costos_variables"]

variables:
  escenario: uno_de([["Costo Fijo: 1000, Costo Variable: 5, Precio: 15", "100"], ["Costo Fijo: 500, Costo Variable: 10, Precio: 30", "25"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["100", "25", "50", "200"]

enunciado: "Considerando el siguiente escenario: {escenario[0]}, ¿cuál es la cantidad de unidades que se deben vender para alcanzar el punto de equilibrio?"

pasos:
  - "Calcular el Margen de Contribución Unitario: Precio - Costo Variable"
  - "Dividir el Costo Fijo por el Margen de Contribución"

explicacion: |
  El cálculo es: Unidades = Costo Fijo / (Precio - Costo Variable). 
  Para el caso 1: 1000 / (15 - 5) = 100.
  Para el caso 2: 500 / (30 - 10) = 25.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["sensibilidad", "costos_fijos"]

variables:
  caso: uno_de([["Aumento de costos fijos", "sube"], ["Aumento de precio de venta", "baja"], ["Disminución de costos variables", "baja"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["sube", "baja", "se mantiene", "desaparece"]

enunciado: "Si una empresa experimenta un {caso[0]}, el nivel de ventas necesario para alcanzar el punto de equilibrio ___."

explicacion: |
  Si los costos fijos aumentan, se necesita vender más para cubrir ese exceso de costos. Si el precio aumenta, se necesita vender menos para cubrir los mismos costos. Si el costo variable baja, el margen es mayor y se requiere vender menos.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["procedimiento", "analisis"]

respuesta_orden: ["Identificar costos fijos y variables", "Calcular margen de contribución unitario", "Dividir costos fijos por margen de contribución"]
tipo: ordenar
opciones_explicitas: ["Dividir costos fijos por margen de contribución", "Identificar costos fijos y variables", "Calcular margen de contribución unitario"]

enunciado: "Para calcular matemáticamente el punto de equilibrio en unidades, ¿cuál es el orden lógico de los pasos a seguir?"

explicacion: |
  Primero se deben clasificar los costos (fijos vs variables), luego determinar cuánto aporta cada unidad a cubrir los costos fijos (margen) y finalmente realizar la división.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["costos", "ventas", "equilibrio"]

variables:
  escenarios: [[150, 500, 10, 5, 2], [200, 800, 15, 7, 3], [120, 450, 8, 4, 2]]
  idx: uno_de([0, 1, 2])
  p_v: escenarios[idx][0]
  c_f: escenarios[idx][1]
  c_v: escenarios[idx][2]
  p_m: escenarios[idx][3]
  c_f_extra: escenarios[idx][4]

respuesta: c_f / (p_v - c_v)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una empresa tiene costos fijos de ${c_f}, un precio de venta de ${p_v} por unidad y un costo variable de ${c_v} por unidad. ¿Cuántas unidades debe vender para alcanzar el punto de equilibrio?"

pasos:
  - "Calcular el margen de contribución unitario: ${p_v} - ${c_v}"
  - "Dividir los costos fijos totales por el margen de contribución: ${c_f} / (${p_v} - ${c_v})"

explicacion: |
  El punto de equilibrio se alcanza cuando los ingresos totales igualan a los costos totales. La fórmula es: Costos Fijos / (Precio de Venta - Costo Variable).
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["conceptos", "ganancia"]

respuesta: falso
tipo: vf

enunciado: "Si una empresa vende una cantidad de unidades exactamente igual a su punto de equilibrio, ¿obtiene una ganancia positiva?"

explicacion: |
  En el punto de equilibrio, la utilidad es exactamente cero, ya que los ingresos cubren exactamente los costos totales, sin excedentes.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["costos", "terminos"]

tipo: mc
opciones_explicitas: ["Costo Variable", "Costo Fijo", "Ingreso Total", "Utilidad"]

respuesta: "Costo Fijo"

enunciado: "El componente que representa los gastos que no cambian independientemente del nivel de producción (como el alquiler) es el: ___"

explicacion: |
  Los costos fijos son aquellos que permanecen constantes en un rango determinado de producción, sin importar si se produce mucho o poco.
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "intermedio"
  tags: ["calculo", "utilidad"]

variables:
  escenarios: [[100, 1000, 20, 10], [150, 1500, 30, 15], [200, 2000, 40, 20]]
  idx: uno_de([0, 1, 2])
  p_v: escenarios[idx][0]
  c_f: escenarios[idx][1]
  c_v: escenarios[idx][2]
  p_m: escenarios[idx][3]
  q: 150

respuesta: (q * p_v) - (c_f + (q * c_v))
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si los costos fijos son ${c_f}, el precio de venta es ${p_v}, el costo variable es ${c_v} y se venden ${q} unidades, ¿cuál es la utilidad total?"

pasos:
  - "Calcular Ingreso Total: ${q} * ${p_v}"
  - "Calcular Costo Total: ${c_f} + (${q} * ${c_v})"
  - "Restar: Ingreso Total - Costo Total"

explicacion: |
  La utilidad es la diferencia entre el ingreso total por ventas y el costo total (fijos + variables).
```

```
metadata:
  materia: "economia"
  tema: "punto_de_equilibrio"
  nivel: "basico"
  tags: ["proceso", "metodologia"]

respuesta_orden: ["Identificar costos fijos", "Calcular margen de contribución", "Dividir costos fijos por margen"]
tipo: ordenar
opciones_explicitas: ["Identificar costos fijos", "Calcular margen de contribución", "Dividir costos fijos por margen"]

enunciado: "Ordena los pasos lógicos para calcular la cantidad de unidades en el punto de equilibrio:"

explicacion: |
  Primero se deben conocer los costos fijos, luego saber cuánto aporta cada unidad a cubrir esos costos (margen) y finalmente realizar la división.
```

## Sección: pitch-a-inversores (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["vocabulario", "fundamentos"]

respuesta: "elevator_pitch"
tipo: completar
respuestas_validas:
  - "elevator_pitch"
  - "elevator pitch"

enunciado: "La técnica de presentar una idea de negocio de forma extremadamente breve, como si se tuviera solo el tiempo que dura un viaje en ascensor, se denomina ___."

explicacion: |
  El 'elevator pitch' es una herramienta de comunicación diseñada para transmitir la esencia de un proyecto en menos de 60 segundos, captando el interés de un potencial inversor.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["objetivo", "inversion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: ["conseguir una reunión", "generar interés"]

respuesta: escenarios[escenario_idx]
tipo: mc
opciones_explicitas: ["conseguir una reunión", "vender el producto directamente", "generar interés", "obtener la firma del contrato en el momento"]

enunciado: "En un pitch inicial ante un inversor de capital de riesgo, ¿cuál suele ser el objetivo principal?"

explicacion: |
  Un pitch no busca cerrar la inversión en ese instante, sino despertar curiosidad suficiente para obtener una segunda reunión de análisis profundo (due diligence).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["estructura", "propuesta_de_valor"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es fundamental que un pitch identifique claramente un 'pain point' (punto de dolor) o problema real en el mercado para que la solución propuesta tenga sentido?"

explicacion: |
  Sin un problema validado, la solución es solo una idea sin demanda. El inversor busca negocios que resuelvan necesidades reales y cuantificables.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

respuesta_orden: ["Problema", "Solución", "Modelo de Negocio", "Tracción"]
tipo: ordenar
opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Tracción"]

enunciado: "Ordena los siguientes elementos de un Pitch Deck según una estructura lógica de narrativa de negocios (storytelling):"

pasos:
  - "Identificar la necesidad"
  - "Presentar la propuesta"
  - "Explicar cómo se gana dinero"
  - "Mostrar resultados actuales"

explicacion: |
  Una narrativa efectiva comienza con el problema, presenta la solución, explica la monetización y finalmente demuestra que el modelo ya está funcionando (tracción).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["terminologia", "escalabilidad"]

respuesta: "escalabilidad"
tipo: completar
respuestas_validas:
  - "escalabilidad"
  - "scalability"

enunciado: "La capacidad de un modelo de negocio para aumentar sus ingresos de forma exponencial mientras sus costes crecen de forma lineal se conoce como ___."

explicacion: |
  La escalabilidad es el factor crítico para los inversores de Venture Capital, ya que permite retornos masivos sobre la inversión inicial.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["pitch", "comunicacion", "emprendimiento"]

variables:
  idx: uno_de([0, 1, 2])
  problemas: ["La gente pierde tiempo buscando estacionamiento.", "El desperdicio de comida en restaurantes.", "La dificultad de encontrar tutores de idiomas."]
  propuestas: ["App de parking inteligente", "App de rescate gastronómico", "Plataforma de micro-learning"]

respuesta: propuestas[idx]
tipo: mc
opciones_explicitas: ["App de parking inteligente", "App de rescate gastronómico", "Plataforma de micro-learning", "Solución de logística rápida"]

enunciado: "Un pitch aborda el siguiente problema: {problemas[idx]} ¿Cuál de estas opciones representa mejor la propuesta de valor para ese problema?"

explicacion: |
  Un pitch efectivo debe comunicar la solución de forma directa y concisa, permitiendo que el inversor entienda el núcleo del negocio en pocos segundos.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["pitch_deck", "estructura", "inversion"]

variables:
  orden_logico: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "The Ask"]

respuesta_orden: orden_logico
tipo: ordenar

enunciado: "Un inversor busca una narrativa coherente. Ordena los siguientes elementos de un Pitch Deck en el orden lógico recomendado para construir una historia convincente:"

pasos:
  - "Identificar el dolor del mercado."
  - "Presentar cómo tu producto resuelve ese dolor."
  - "Explicar cómo vas a ganar dinero."
  - "Mostrar métricas actuales que validen el interés."
  - "Presentar a las personas que ejecutan la idea."
  - "Indicar cuánto capital necesitas y para qué."

explicacion: |
  La estructura narrativa (Storytelling) debe llevar al inversor desde el problema (dolor) hasta la oportunidad de negocio (tracción) y finalmente la necesidad de capital (The Ask).
opciones_explicitas: orden_logico
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["mercado", "tam", "som", "metricas"]

variables:
  datos: [[1000000, 500000, 50000], [5000000, 2000000, 100000], [2500000, 1000000, 250000]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
tipo: completar
tolerancia_abs: 0

enunciado: "En el análisis de mercado para un pitch, si el mercado total (TAM) es de ${datos[idx][0]}, el mercado que puedes alcanzar con tu modelo de servicio (SAM) es de ${datos[idx][1]}, ¿cuál es el tamaño de tu mercado objetivo real (SOM) que puedes capturar a corto plazo?"

explicacion: |
  El SOM (Serviceable Obtainable Market) es la parte del SAM que tu empresa puede capturar de manera realista con sus recursos actuales.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["traction", "validacion", "metricas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un emprendedor presenta en su pitch que tiene un crecimiento mensual del 20% en usuarios activos (MoM) y una tasa de retención constante, está demostrando 'Traction' (Tracción), lo cual reduce el riesgo percibido por el inversor."

explicacion: |
  La tracción es la evidencia de que el mercado está respondiendo positivamente a tu producto, lo cual es uno de los puntos más críticos en un pitch.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["ask", "financiamiento", "equity"]

variables:
  escenario_financiero: [["$500,000", "15%", "Desarrollo de producto y marketing"], ["$1,000,000", "10%", "Expansión internacional y ventas"], ["$250,000", "5%", "Contratación de equipo técnico"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario_financiero[idx][2]
tipo: completar
respuestas_validas:
  - escenario_financiero[idx][2]

enunciado: "En la última diapositiva, el emprendedor debe ser claro con el 'Ask'. Si el emprendedor busca una inversión de ${escenario_financiero[idx][0]} a cambio de un ${escenario_financiero[idx][1]} de participación, el objetivo principal de ese capital según su plan es: ___."

pasos:
  - "Identificar el monto solicitado."
  - "Identificar el porcentaje de equity ofrecido."
  - "Identificar el uso de fondos (Use of Funds)."

explicacion: |
  El 'Ask' no solo debe decir cuánto dinero necesitas, sino también cuánto de la empresa estás dispuesto a ceder y, crucialmente, en qué se va a gastar ese dinero para generar retorno.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["pitch", "errores", "inversores"]

enunciado: "Un error común en un pitch es centrarse excesivamente en las características de la solución (el producto) en lugar de enfocarse en el ___ (el problema que se resuelve)."

respuestas_validas:
  - "problema"
respuesta: "problema"
tipo: completar

explicacion: |
  Los inversores buscan resolver problemas reales y dolorosos para un mercado grande. Si tu pitch solo habla de funciones de una app sin explicar el problema que ataca, pierdes el interés del inversor.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["competencia", "pitch"]

enunciado: "Si un emprendedor afirma durante su pitch que 'no tiene competencia en el mercado', ¿es esto una señal positiva o un error?"

opciones_explicitas: ["Es una señal positiva", "Es un error"]
respuesta: "Es un error"
tipo: mc

explicacion: |
  Decir que no hay competencia suele interpretarse como que el emprendedor no ha investigado lo suficiente o que no hay mercado. Siempre hay competencia, ya sea directa o indirecta (sustitutos).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["metricas", "pitch"]

enunciado: "En un pitch para inversores, ¿es verdadero o falso que la 'tracción' (evidencia de que el producto funciona y hay clientes) es más convincente que una simple idea brillante?"

respuesta: verdadero
tipo: vf

explicacion: |
  La tracción (ventas, usuarios activos, cartas de intención) reduce el riesgo percibido por el inversor. Una idea sin tracción es solo una hipótesis; una idea con tracción es un negocio en marcha.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["estructura", "pitch"]

opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Equipo", "Call to Action"]
respuesta_orden: ["Problema", "Solución", "Modelo de Negocio", "Equipo", "Call to Action"]
tipo: ordenar

enunciado: "Ordena los elementos de un pitch deck efectivo para que la narrativa sea convincente y lógica:"

explicacion: |
  Un pitch debe seguir un arco narrativo: primero estableces el dolor (Problema), presentas la cura (Solución), explicas cómo ganas dinero (Modelo), demuestras que puedes ejecutarlo (Equipo) y pides lo que necesitas (Call to Action).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["valoracion", "finanzas", "pitch"]

variables:
  escenario: uno_de([["La startup tiene 0 ventas y pide 10 millones de dólares", "exagerada"], ["La startup tiene 100 clientes recurrentes y pide 500k dólares", "razonable"]])

enunciado: "Analiza el caso: {escenario[0]}. La valoración o el pedido de capital es ___."

respuestas_validas:
  - "exagerada"
  - "razonable"
respuesta: escenario[1]
tipo: completar

explicacion: |
  Pedir montos desproporcionados a la etapa de tracción actual genera desconfianza. El emprendedor debe demostrar que el capital solicitado es necesario para alcanzar los hitos que justifican la valoración.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["pitch", "business_plan", "inversion"]

respuesta: "Pitch"
tipo: completar
respuestas_validas:
  - "Pitch"

enunciado: "Mientras que el Business Plan es un documento detallado y extenso que describe la estrategia a largo plazo, el ___ es una presentación breve diseñada para captar la atención inmediata del inversor."

explicacion: |
  El Pitch es una herramienta de comunicación rápida y persuasiva, mientras que el Business Plan es un documento operativo y estratégico exhaustivo.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["objetivo", "pitch", "inversion"]

respuesta: falso
tipo: vf

enunciado: "¿El objetivo principal de un Pitch es presentar todos los detalles técnicos y financieros de la empresa para cerrar la inversión en ese mismo instante?"

explicacion: |
  Falso. El objetivo de un Pitch no es cerrar la inversión, sino conseguir la siguiente reunión o mostrar suficiente interés para avanzar en el proceso de Due Diligence.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["pitch_deck", "estructura"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [["Problema", "Solución", "Modelo de Negocio", "Equipo", "Mercado"], ["Problema", "Propuesta de Valor", "Modelo de Negocio", "Tracción", "Equipo"], ["Problema", "Solución", "Modelo de Negocio", "Competencia", "Equipo"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Solución", "Propuesta de Valor", "Competencia", "Equipo"]

enunciado: "En un Pitch Deck efectivo, después de presentar el {escenario[idx][0]}, el siguiente elemento clave debe ser la {escenario[idx][1]}."

explicacion: |
  La secuencia lógica de un pitch busca validar que el problema identificado tiene una solución clara y viable antes de pasar a cómo se gana dinero.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["elevator_pitch", "pitch_deck"]

respuesta: "Elevator Pitch"
tipo: completar
respuestas_validas:
  - "Elevator Pitch"

enunciado: "La principal diferencia es la duración y el soporte: mientras que un Pitch Deck es una presentación visual apoyada en diapositivas, el ___ es un discurso verbal de pocos segundos, similar a lo que se diría en un ascensor."

explicacion: |
  El Elevator Pitch es una versión ultra-resumida y verbal, centrada en despertar curiosidad, mientras que el Pitch Deck es una narrativa estructurada con soporte visual.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["estructura", "storytelling"]

respuesta_orden: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Llamado a la acción"]
tipo: ordenar
opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Llamado a la acción"]

enunciado: "Ordena los elementos de un pitch de alto impacto siguiendo la lógica de narrativa de ventas (Storytelling):"

pasos:
  - "Identificar la necesidad del mercado"
  - "Presentar cómo se resuelve"
  - "Explicar cómo se monetiza"
  - "Mostrar pruebas de que funciona"
  - "Indicar qué se necesita del inversor"

explicacion: |
  Un buen pitch debe seguir un arco narrativo: Dolor (Problema) -> Alivio (Solución) -> Viabilidad (Modelo) -> Validación (Tracción) -> Cierre (Call to Action).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["pitch", "elevator_pitch", "comunicacion"]

variables:
  datos: [["Software de gestión de residuos para PYMES", "resolver el problema de la logística de reciclaje"], ["App de delivery de productos locales", "conectar productores con consumidores finales"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

enunciado: "En un elevator pitch, después de presentar el problema, el emprendedor debe presentar la propuesta de valor para {datos[idx][0]} con el fin de {datos[idx][1]}."

explicacion: |
  El objetivo del pitch es conectar el problema detectado con la solución específica que ofrece tu modelo de negocio de forma rápida.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["hook", "atencion", "inversores"]

variables:
  datos: [["Una startup de biotecnología", "revolucionar la medicina preventiva"], ["Una fintech de microcréditos", "democratizar el acceso al capital"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["revolucionar la medicina preventiva", "democratizar el acceso al capital", "ganar dinero rápido", "dominar el mercado global"]

enunciado: "Si estás presentando un caso de {datos[idx][0]}, un buen 'hook' debería enfocarse en la misión de {datos[idx][1]} para captar el interés emocional del inversor."

explicacion: |
  Un buen gancho no se trata solo de rentabilidad, sino del impacto o la transformación que la idea genera en el mercado.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["validacion", "traction", "datos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es fundamental presentar métricas de tracción (como usuarios activos o ingresos mensuales) durante el pitch para demostrar que el modelo de negocio es escalable y validado?"

explicacion: |
  Los inversores buscan evidencia de que el mercado realmente quiere el producto (Product-Market Fit), y las métricas son la prueba de ello.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["pitch_deck", "orden", "estructura"]

respuesta_orden: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "El Pedido"]
tipo: ordenar
opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "El Pedido"]

enunciado: "Ordena los elementos esenciales de un Pitch Deck efectivo para asegurar un flujo narrativo lógico que lleve al inversor hacia la llamada a la acción."

explicacion: |
  La narrativa debe ir de la necesidad (Problema) a la ejecución (Solución/Modelo/Tracción/Equipo) y finalizar con lo que necesitas (El Pedido/Ask).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["ask", "funding", "financiamiento"]

variables:
  datos: [["500.000 USD", "expandir operaciones", "18 meses"], ["200.000 USD", "desarrollo de producto", "12 meses"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

enunciado: "Al presentar el 'Ask' en el pitch, no basta con decir cuánto dinero necesitas; es crucial especificar que el objetivo es {datos[idx][1]} en un plazo de {datos[idx][2]}."

explicacion: |
  Un inversor no solo pone dinero; compra una parte de tu visión. Debe saber exactamente en qué se usará cada centavo y qué hitos se alcanzarán con ello.
```

