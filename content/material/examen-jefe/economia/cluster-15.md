# Examen jefe — [PENDIENTE #780]

> Logro #780. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

---

## Sección: validar-con-clientes-construir-medir-aprender (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["lean_startup", "metodologia"]

respuesta: "Construir-Medir-Aprender"
tipo: completar
respuestas_validas:
  - "Construir-Medir-Aprender"
  - "construir-medir-aprender"

enunciado: "El ciclo fundamental de la metodología Lean Startup para validar hipótesis de negocio se denomina ciclo ___."

explicacion: |
  El ciclo Construir-Medir-Aprender es la base de la metodología Lean Startup. El objetivo es minimizar el tiempo total de este ciclo para aprender lo más rápido posible sobre lo que los clientes realmente quieren.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["mvp", "validacion"]

respuesta: "probar_hipotesis"
tipo: mc
opciones_explicitas: ["probar_hipotesis", "maximizar_ganancias", "perfeccionar_producto"]

enunciado: "El propósito principal de un Producto Mínimo Viable (MVP) es ___."

explicacion: |
  Un MVP no es un producto incompleto, sino una versión con las características mínimas necesarias para recolectar la máxima cantidad de aprendizaje validado con el menor esfuerzo posible.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "intermedio"
  tags: ["pivotar", "estrategia"]

respuesta: falso
tipo: vf

enunciado: "¿Pivotar consiste en mantener la estrategia actual de la empresa a pesar de que los datos del ciclo de aprendizaje indiquen que la hipótesis fundamental es incorrecta?"

explicacion: |
  Falso. Pivotar es un cambio estratégico en la dirección del producto, del modelo de negocio o del segmento de clientes, basado en lo aprendido durante la fase de medición.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["proceso", "metodologia"]

respuesta_orden: ["Construir", "Medir", "Aprender"]
tipo: ordenar
opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Ordene las etapas del ciclo de aprendizaje de Lean Startup en el orden correcto:"

explicacion: |
  Primero se construye un experimento (MVP), luego se mide cómo reaccionan los clientes y finalmente se aprende de esos datos para decidir si se continúa o se pivota.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "intermedio"
  tags: ["aprendizaje_validado", "metrica"]

respuesta: "métricas de vanidad"
tipo: mc
opciones_explicitas: ["aprendizaje_validado", "métricas de vanidad", "intuición pura"]

enunciado: "Si una startup se enfoca en datos que solo muestran crecimiento superficial (como número de likes) pero no prueban si el modelo de negocio funciona, está utilizando ___."

explicacion: |
  Las métricas de vanidad son indicadores que pueden hacerte sentir bien pero no ayudan a tomar decisiones sobre la viabilidad del negocio. El objetivo es obtener aprendizaje validado.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_ciclo"
  nivel: "basico"
  tags: ["lean_startup", "metodologia"]

respuesta: "construir-medir-aprender"
tipo: completar
respuestas_validas:
  - "construir-medir-aprender"

enunciado: "El núcleo de la metodología Lean Startup es un ciclo iterativo compuesto por tres etapas fundamentales: ___, ___ y ___."

explicacion: |
  El ciclo construir-medir-aprender permite a los emprendedores minimizar el desperdicio de recursos al validar hipótesis de negocio de forma rápida.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_mvp"
  nivel: "intermedio"
  tags: ["mvp", "validacion"]

variables:
  escenario_idx: uno_de([0, 1])
  textos: ["Lanzar una app completa con todas las funciones para ver si alguien la usa.", "Crear una landing page con un botón de 'comprar' para medir el interés real."]
  valores: [falso, verdadero]

respuesta: valores[escenario_idx]
tipo: vf
enunciado: "Analiza el siguiente escenario: {textos[escenario_idx]}. ¿Es esta una forma válida de aplicar el concepto de MVP para validar una idea de forma barata y rápida?"

explicacion: |
  Un Producto Mínimo Viable (MVP) debe permitir aprender con el mínimo esfuerzo. Si el escenario es verdadero, es un MVP; si es falso, es un producto completo que ignora el ahorro de recursos.
```

```
metadata:
  materia: "economia"
  tema: "metricas_validacion"
  nivel: "intermedio"
  tags: ["metricas_vanidad", "metricas_accionables"]

respuesta: "metricas_vanidad"
tipo: mc
opciones_explicitas: ["metricas_accionables", "metricas_vanidad", "metricas_estaticas", "metricas_de_vanidad"]

enunciado: "Si un emprendedor se enfoca únicamente en el número de 'Likes' en Instagram para decidir si su modelo de negocio funciona, está utilizando ___."

explicacion: |
  Las métricas de vanidad son indicadores que se ven bien en papel pero no informan sobre la salud real del negocio o el comportamiento del cliente.
```

```
metadata:
  materia: "economia"
  tema: "ciclo_pasos"
  nivel: "basico"
  tags: ["metodologia", "orden"]

respuesta_orden: ["Construir MVP", "Medir respuesta del cliente", "Aprender y pivotar o perseverar"]
tipo: ordenar
opciones_explicitas: ["Construir MVP", "Medir respuesta del cliente", "Aprender y pivotar o perseverar"]

enunciado: "Ordena cronológicamente los pasos del ciclo de validación de una idea de negocio:"

explicacion: |
  Primero se construye algo mínimo, luego se mide cómo interactúa el cliente con ello y finalmente se aprende para decidir si se cambia la estrategia (pivotar) o se continúa (perseverar).
```

```
metadata:
  materia: "economia"
  tema: "pivotar_o_perseverar"
  nivel: "intermedio"
  tags: ["pivot", "estrategia"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Una pizzería nota que la gente pide la masa pero no el queso, entonces decide vender solo masas artesanales.", "pivotar"], ["Una app de paseadores de perros confirma que los usuarios la descargan y la usan como se esperaba, así que decide mantener el mismo modelo de negocio.", "perseverar"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["pivotar", "perseverar"]

enunciado: "Analiza el caso: {casos[caso_idx][0]}. La acción tomada por el emprendedor representa un proceso de ___."

explicacion: |
  Pivotar significa realizar un cambio estratégico en el modelo de negocio basado en lo aprendido durante la fase de medición, manteniendo la visión general pero cambiando la ejecución.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes"
  nivel: "basico"
  tags: ["lean_startup", "ciclo_aprendizaje"]

tipo: mc
opciones_explicitas: ["Optimizar el producto final antes de lanzarlo", "Minimizar el tiempo total entre ideas y aprendizaje validado", "Asegurar que el producto sea perfecto para el cliente", "Evitar cualquier tipo de gasto en marketing"]
respuesta: "Minimizar el tiempo total entre ideas y aprendizaje validado"
enunciado: "El objetivo principal del ciclo 'Construir-Medir-Aprender' es ___."
explicacion: |
  El ciclo busca maximizar el aprendizaje validado con el menor esfuerzo posible. No se trata de perfeccionar el producto, sino de validar hipótesis de negocio rápidamente para evitar desperdiciar recursos en ideas que no funcionan.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes"
  nivel: "intermedio"
  tags: ["metricas_vanidosas", "metricas_accionables"]

tipo: vf
respuesta: falso

enunciado: "Si una métrica solo muestra que el número de usuarios totales crece, pero no explica por qué vuelven o se van, se considera una 'métrica de vanidad'. ¿Es una métrica de vanidad útil para pivotar o perseverar?"

explicacion: |
  Las métricas de vanidad (como el número de seguidores o visitas totales) pueden dar una falsa sensación de éxito. Para el ciclo de aprendizaje, necesitamos métricas accionables que nos permitan tomar decisiones sobre el modelo de negocio.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

tipo: ordenar
opciones_explicitas: ["Construir un MVP", "Medir el comportamiento del usuario", "Aprender de los resultados", "Formular una hipótesis"]

enunciado: "Ordene los pasos lógicos para completar un ciclo de aprendizaje validado, comenzando desde la concepción de una hipótesis."

respuesta_orden: ["Formular una hipótesis", "Construir un MVP", "Medir el comportamiento del usuario", "Aprender de los resultados"]

explicacion: |
  El proceso comienza con una idea/hipótesis, se construye un Producto Mínimo Viable (MVP) para probarla, se miden los datos resultantes y finalmente se aprende para decidir si se debe pivotar o perseverar.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes"
  nivel: "intermedio"
  tags: ["mvp", "producto_minimo_viable"]

tipo: completar
respuestas_validas:
  - "Producto Mínimo Viable"
  - "MVP"

enunciado: "Para probar una idea de negocio rápido y barato, se utiliza un ___ que contiene solo las funciones esenciales para aprender sobre el cliente."

explicacion: |
  El MVP (Minimum Viable Product) no es un producto incompleto, sino la versión más simple de una idea que permite recolectar la máxima cantidad de aprendizaje validado con el menor esfuerzo.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes"
  nivel: "avanzado"
  tags: ["riesgo", "pivotar"]

tipo: vf
respuesta: verdadero

enunciado: "Invertir grandes cantidades de capital en el desarrollo de todas las funcionalidades de un producto antes de validar si el mercado tiene interés es un error común en el emprendimiento."

explicacion: |
  Este error se conoce como "desperdicio de recursos". La metodología Lean Startup sugiere validar primero la propuesta de valor antes de escalar la inversión en ingeniería o marketing masivo.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["lean_startup", "validacion"]

respuesta: "aprendizaje validado"
tipo: completar
respuestas_validas:
  - "aprendizaje validado"

enunciado: "A diferencia de la planificación tradicional basada en suposiciones, el objetivo principal del ciclo construir-medir-aprender es obtener ___."

explicacion: |
  El ciclo no busca simplemente 'hacer productos', sino maximizar el aprendizaje validado sobre lo que los clientes realmente necesitan y están dispuestos a usar.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "intermedio"
  tags: ["mvp", "iteracion"]

respuesta: "El MVP es una versión simplificada para aprender; el producto final es la solución completa para escalar."
tipo: mc
opciones_explicitas: 
  - "El MVP es una versión simplificada para aprender; el producto final es la solución completa para escalar."
  - "El MVP es el producto terminado tras muchas iteraciones; el producto final es un prototipo."

enunciado: "Según la metodología Lean Startup, ¿cuál es la distinción fundamental entre un MVP y un producto final?"

explicacion: |
  El MVP (Producto Mínimo Viable) se centra en la velocidad de aprendizaje y la validación de hipótesis, mientras que el producto final busca la excelencia operativa y la satisfacción total del mercado.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "intermedio"
  tags: ["metricas", "vanity_metrics"]

respuesta: falso
tipo: vf

enunciado: "En el ciclo construir-medir-aprender, el enfoque principal de la fase 'Medir' debe ser la acumulación de 'métricas de vanidad' (como likes o descargas totales) para asegurar el éxito del modelo de negocio."

explicacion: |
  Falso. Las métricas de vanidad no informan sobre la salud real del negocio. Se deben medir métricas accionables que permitan tomar decisiones sobre si pivotar o perseverar.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Construir", "Medir", "Aprender"]
tipo: ordenar

opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Ordene los pasos fundamentales que componen el bucle de retroalimentación del ciclo de aprendizaje de Lean Startup:"

explicacion: |
  El ciclo es un bucle continuo: se construye un experimento (MVP), se miden los resultados con métricas accionables y se aprende de esos datos para decidir si se mantiene la estrategia o se cambia (pivotar).
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "avanzado"
  tags: ["riesgo", "inversion"]

respuesta: "Validar con clientes reduce el riesgo de desperdicio de capital."
tipo: mc
opciones_explicitas: ["Validar con clientes reduce el riesgo de desperdicio de capital.", "Validar con clientes aumenta la inversión inicial necesaria."]

enunciado: "Considerando la relación entre validación y gestión de recursos, si aplicamos el ciclo de forma temprana, ¿cuál es el efecto sobre la inversión?"

explicacion: |
  La validación temprana actúa como un seguro contra el desperdicio de recursos, permitiendo que la inversión se dirija solo hacia lo que el mercado realmente demanda.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["lean_startup", "ciclo_feedback"]

variables:
  escenario: uno_de([["Lanzar un MVP para probar una funcionalidad de pago", "Construir"], ["Analizar métricas de retención tras el lanzamiento", "Medir"], ["Decidir si pivotar o perseverar tras ver resultados", "Aprender"]])

enunciado: "En el ciclo de Lean Startup, la acción de '{escenario[0]}' corresponde a la fase de: ___"

respuestas_validas:
  - "Construir"
  - "Medir"
  - "Aprender"
respuesta: escenario[1]
tipo: completar

explicacion: |
  El ciclo consiste en Construir (crear el experimento/MVP), Medir (recolectar datos) y Aprender (decidir el siguiente paso).
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["mvp", "validacion"]

enunciado: "¿Cuál es el objetivo principal de utilizar un Producto Mínimo Viable (MVP) en una startup?"

opciones_explicitas: ["Maximizar la funcionalidad para atraer inversores", "Validar hipótesis de negocio con el menor esfuerzo posible", "Construir un producto perfecto antes de salir al mercado", "Evitar la competencia mediante patentes inmediatas"]
respuesta: "Validar hipótesis de negocio con el menor esfuerzo posible"
tipo: mc

explicacion: |
  El MVP no busca ser un producto final, sino una herramienta de aprendizaje para validar si el mercado realmente tiene el problema que intentamos resolver.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "intermedio"
  tags: ["riesgo", "inversion"]

enunciado: "Invertir grandes sumas de capital en el desarrollo de un producto completo antes de validar la demanda con clientes reales reduce el riesgo de fracaso."

respuesta: falso
tipo: vf

explicacion: |
  Al contrario, invertir demasiado pronto sin validación aumenta el riesgo de "construir algo que nadie quiere". El objetivo es fallar rápido y barato.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

enunciado: "Ordene las etapas del ciclo de aprendizaje de Lean Startup en el orden correcto:"

opciones_explicitas: ["Construir", "Medir", "Aprender"]
respuesta_orden: ["Construir", "Medir", "Aprender"]
tipo: ordenar

explicacion: |
  El flujo es iterativo: se construye un experimento, se miden los resultados y se aprende de ellos para reiniciar el ciclo.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "avanzado"
  tags: ["pivot", "estrategia"]

variables:
  caso: uno_de([["Los datos muestran que los usuarios usan la app solo para chatear, no para comprar", "Pivotar"], ["Los datos muestran que la métrica de retención es mayor a la esperada", "Perseverar"], ["Los datos muestran que el costo de adquisición es mayor al valor de vida del cliente", "Pivotar"]])

enunciado: "Si tras la fase de 'Medir', los datos indican que: '{caso[0]}', la decisión estratégica más probable es: ___"

respuestas_validas:
  - "Pivotar"
  - "Perseverar"
respuesta: caso[1]
tipo: completar

explicacion: |
  Si la hipótesis se confirma (Perseverar) o si los datos obligan a un cambio de estrategia (Pivotar), la decisión depende de la alineación con el modelo de negocio.
```

## Sección: control-de-gestion-e-indicadores (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["definicion", "gestion"]

respuesta: "proceso"
tipo: "completar"
respuestas_validas:
  - "proceso"

enunciado: "El control de gestión se define como el ________ de recolectar, analizar y utilizar información para asegurar que la organización alcance sus objetivos."

explicacion: |
  El control de gestión es un proceso continuo que permite comparar el desempeño real con los planes establecidos para tomar medidas correctivas.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["indicadores", "KPI"]

respuesta: "eficiencia"
tipo: "mc"
opciones_explicitas: ["eficiencia", "eficacia", "efectividad"]

enunciado: "Si una empresa logra sus objetivos de ventas utilizando la menor cantidad de recursos posibles, está demostrando un alto nivel de ___."

explicacion: |
  La eficiencia se refiere a la relación entre los resultados obtenidos y los recursos utilizados. La eficacia, en cambio, se centra solo en el cumplimiento del objetivo.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["balanced_scorecard", "perspectivas"]

respuesta: falso
tipo: "vf"

enunciado: "¿El Cuadro de Mando Integral (Balanced Scorecard) propone medir a la organización únicamente desde una perspectiva financiera?"

explicacion: |
  Falso. El Balanced Scorecard integra cuatro perspectivas: Financiera, Cliente, Procesos Internos y Aprendizaje/Crecimiento.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["ciclo_pdca", "gestion"]

tipo: "ordenar"
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]
respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Ordene las etapas del ciclo PHVA (Ciclo de Deming) para asegurar la mejora continua en el control de gestión:"

explicacion: |
  El ciclo PHVA (Plan, Do, Check, Act) es la base de la mejora continua: se planifica, se ejecuta, se verifica el resultado y se actúa sobre las desviaciones.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["desviacion", "analisis"]

tipo: "mc"
opciones_explicitas: ["Positiva", "Negativa", "Nula"]

respuesta: "Negativa"

enunciado: "En un escenario donde el gasto real es mayor al presupuesto planificado, la desviación presupuestaria es considerada: ___."

explicacion: |
  En términos de control de costos, una desviación negativa suele indicar que se ha excedido el presupuesto, lo cual requiere una acción correctiva.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["eficiencia", "indicadores_desempeño"]

variables:
  datos: [[1200, 1500], [800, 1000], [2000, 2500]]
  idx: uno_de([0,1,2])
  produccion_real: datos[idx][0]
  produccion_esperada: datos[idx][1]
  eficiencia: (produccion_real / produccion_esperada) * 100

respuesta: eficiencia
tipo: completar
tolerancia_abs: 0.1

enunciado: "En una planta de ensamblaje, la producción real de la jornada fue de {produccion_real} unidades, mientras que el objetivo establecido era de {produccion_esperada} unidades. ¿Cuál es el índice de eficiencia de producción expresado en porcentaje?"

pasos:
  - "Dividir la producción real por la producción esperada: {produccion_real} / {produccion_esperada}"
  - "Multiplicar el resultado por 100 para obtener el porcentaje."

explicacion: |
  La eficiencia se calcula como el cociente entre la producción real y la estándar. En este caso, la eficiencia es del {eficiencia}%."
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["desviacion", "presupuesto"]

variables:
  escenario: [[100, 120], [150, 130], [200, 200]]
  clasificaciones: ["Desviación Positiva", "Desviación Negativa", "Sin Desviación"]
  idx: uno_de([0,1,2])
  costo_real: escenario[idx][0]
  costo_presupuestado: escenario[idx][1]

respuesta: clasificaciones[idx]
tipo: mc
opciones_explicitas: ["Desviación Positiva", "Desviación Negativa", "Sin Desviación"]

enunciado: "Si el costo real de un proyecto es de ${costo_real} y el presupuesto asignado era de ${costo_presupuestado}, y considerando que un costo mayor al presupuestado es desfavorable para la organización, ¿cómo se clasifica la desviación?"

explicacion: |
  Si el costo real ({costo_real}) es mayor al presupuestado ({costo_presupuestado}), la desviación es negativa (desfavorable); si es menor, es positiva; si son iguales, no hay desviación.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["kpi", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Un Indicador Clave de Desempeño (KPI) debe ser necesariamente medible y estar alineado con los objetivos estratégicos de la organización para ser útil en el control de gestión."

explicacion: |
  Correcto. Para que un indicador sea efectivo en el control de gestión, debe permitir la medición del progreso hacia un objetivo específico."
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["proceso", "ciclo_pdca"]

respuesta_orden: ["Establecer estándares", "Medir el desempeño", "Comparar con estándares", "Tomar acciones correctivas"]
tipo: ordenar

opciones_explicitas: ["Establecer estándares", "Medir el desempeño", "Comparar con estándares", "Tomar acciones correctivas"]

enunciado: "Ordene cronológicamente las etapas del proceso de control de gestión para asegurar que una empresa corrija una desviación en sus ventas:"

explicacion: |
  El proceso lógico comienza con la definición de la meta (estándar), sigue con la medición de lo ocurrido, la comparación para detectar brechas y finalmente la acción para corregir."
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "avanzado"
  tags: ["roi", "rentabilidad"]

variables:
  datos: [[5000, 20000], [8000, 40000], [12000, 30000]]
  idx: uno_de([0,1,2])
  ganancia_neta: datos[idx][0]
  inversion_total: datos[idx][1]
  roi: (ganancia_neta / inversion_total) * 100

respuesta: "ROI"
tipo: completar
respuestas_validas:
  - "ROI"
  - "roi"

enunciado: "Si una empresa obtiene una ganancia neta de ${ganancia_neta} tras haber realizado una inversión total de ${inversion_total}, el indicador que mide la rentabilidad de esa inversión se denomina ___."

explicacion: |
  El ROI (Return on Investment) es el indicador que relaciona la ganancia obtenida con la inversión realizada. En este caso, el ROI es del {roi}%."
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["indicadores", "gestion", "eficiencia"]

respuesta: "eficiencia"
tipo: mc
opciones_explicitas: ["eficiencia", "eficacia", "efectividad", "productividad"]

enunciado: "Un gerente observa que su equipo produjo 100 unidades usando 15 horas de trabajo. Si el objetivo era producir 80 unidades en 12 horas, el equipo cumplió y superó el objetivo (fue eficaz), pero utilizó más horas de las previstas, sin optimizar los recursos. El indicador que mide la relación entre resultados y recursos utilizados se denomina ___."

explicacion: |
  La eficacia mide el grado de cumplimiento de los objetivos (lograr la meta), mientras que la eficiencia mide la relación entre los resultados obtenidos y los recursos empleados para lograrlos.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "avanzado"
  tags: ["metricas", "vanidad", "toma_de_decisiones"]

respuesta: falso
tipo: vf

enunciado: "Las llamadas 'métricas de vanidad' (vanity metrics) son indicadores que, aunque muestran números positivos y crecientes, no proporcionan información relevante para la toma de decisiones estratégicas ni para medir el éxito real del modelo de negocio."

explicacion: |
  Es falso. Las métricas de vanidad son precisamente aquellas que parecen buenas (como el número de 'likes' o visitas) pero no ayudan a entender la salud real del negocio o el cumplimiento de objetivos críticos.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["jerarquia", "indicadores", "estrategia"]

respuesta_orden: ["Indicadores Estratégicos", "Indicadores Tácticos", "Indicadores Operativos"]
tipo: ordenar

opciones_explicitas: ["Indicadores Estratégicos", "Indicadores Tácticos", "Indicadores Operativos"]

enunciado: "Ordene los siguientes niveles de indicadores de gestión desde el nivel de mayor visión global (longitudinal) hasta el nivel de ejecución diaria:"

explicacion: |
  La jerarquía parte de la estrategia (largo plazo/global), baja a la táctica (departamental/procesos) y culmina en la operación (tareas diarias/específicas).
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "avanzado"
  tags: ["indicadores", "predictivos", "rezagados"]

tipo: mc
opciones_explicitas: ["Indicador de resultado (Lagging)", "Indicador predictivo (Leading)", "Indicador de proceso"]

respuesta: "Indicador de resultado (Lagging)"

enunciado: "Si un indicador se enfoca en medir un evento que ya ha ocurrido (como las ventas totales del mes pasado), se considera un indicador de tipo: ___."

explicacion: |
  Los indicadores 'Lagging' miden resultados pasados (lo que ya sucedió), mientras que los 'Leading' intentan predecir resultados futuros basándose en variables actuales.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["kpi", "definicion"]

respuesta: ["KPI", "Key Performance Indicator"]
tipo: completar
respuestas_validas:
  - "KPI"
  - "Key Performance Indicator"

enunciado: "Para que un indicador sea considerado un ___ real, debe estar directamente alineado con un objetivo crítico del negocio y permitir una acción correctiva clara."

explicacion: |
  No todo indicador es un KPI. Un KPI (Key Performance Indicator) es un indicador clave; es decir, aquel que es vital para medir el éxito de un proceso o estrategia específica.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["indicadores", "gestion"]

respuesta: "eficiencia"
tipo: completar
respuestas_validas:
  - "eficiencia"

enunciado: "Mientras que la eficacia se centra en el cumplimiento de las metas u objetivos propuestos, la ___ se enfoca en el uso óptimo de los recursos para alcanzar dichos objetivos."

explicacion: |
  La eficacia mide el grado de cumplimiento de los objetivos (lograr la meta), mientras que la eficiencia mide la relación entre los resultados obtenidos y los recursos utilizados (lograr la meta con el mínimo de recursos).
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["indicadores", "control"]

variables:
  idx: uno_de([0, 1])
  escenario: [[ "ventas_totales", "resultado_final" ], [ "costo_por_unidad", "medida_de_proceso" ]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["resultado_final", "medida_de_proceso", "indicador_de_esfuerzo", "indicador_de_input"]

enunciado: "Si una empresa mide el '___', está analizando un indicador de: {escenario[idx][0]}."

explicacion: |
  Los indicadores de resultado (lagging) miden el producto final de una actividad, mientras que los de proceso (leading) miden las actividades necesarias para llegar a ese resultado.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["kpi", "indicadores"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un KPI (Indicador Clave de Desempeño) se distingue de un indicador común en que es crítico para la toma de decisiones estratégicas y está directamente vinculado a los objetivos principales de la organización?"

explicacion: |
  Correcto. Un KPI no es solo cualquier dato, sino un indicador seleccionado específicamente por su relevancia para medir el éxito de una estrategia.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["jerarquia", "indicadores"]

respuesta_orden: ["indicadores_operativos", "indicadores_tácticos", "indicadores_estratégicos"]
tipo: ordenar
opciones_explicitas: ["indicadores_operativos", "indicadores_tácticos", "indicadores_estratégicos"]

enunciado: "Ordene los siguientes tipos de indicadores desde el nivel más bajo (operativo/día a día) hasta el nivel más alto (estratégico/largo plazo):"

explicacion: |
  La jerarquía típica va desde el control de las tareas diarias (operativo), pasando por el control de departamentos o áreas (táctico), hasta el control de la visión global de la empresa (estratégico).
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "avanzado"
  tags: ["calidad", "eficacia"]

variables:
  idx: uno_de([0, 1])
  caso: [[ "cumplir_el_plazo", "eficacia" ], [ "cero_defectos", "calidad" ]]

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["eficacia", "calidad", "eficiencia", "rentabilidad"]

enunciado: "En el contexto de control de gestión, si el objetivo es asegurar que un producto no tenga errores de fabricación, el indicador principal para medir este aspecto es la: {caso[idx][0]}."

explicacion: |
  Aunque la calidad puede influir en la eficacia, la medición de la ausencia de defectos se clasifica específicamente como un indicador de calidad o conformidad.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "intermedio"
  tags: ["indicadores", "eficacia", "eficiencia"]

variables:
  escenario: uno_de([["La empresa produjo 100 unidades con 10 horas de trabajo, pero su objetivo era 120 unidades.", "eficacia"], ["La empresa produjo 100 unidades usando 8 horas de trabajo, cumpliendo su objetivo de 100 unidades.", "eficiencia"], ["La empresa produjo 120 unidades usando 15 horas de trabajo, superando su objetivo de 100 unidades.", "ambos"]])

enunciado: "En el escenario donde {escenario[0]}, ¿qué indicador se ve comprometido o destacado?"

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["eficacia", "eficiencia", "ambos", "ninguno"]

explicacion: |
  La eficacia mide el grado de cumplimiento de los objetivos (lograr la meta), mientras que la eficiencia mide la relación entre los resultados obtenidos y los recursos utilizados.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "avanzado"
  tags: ["presupuesto", "desviacion", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  presupuestos: [5000, 8000, 1000]
  reales: [4500, 9200, 1000]
  desviaciones: ["-10%", "+15%", "0%"]

enunciado: "Si el presupuesto asignado fue de ${presupuestos[idx]} y el gasto real fue de ${reales[idx]}, la desviación porcentual respecto al presupuesto es de ___."

pasos:
  - "Identificar el valor presupuestado (P) y el valor real (R)."
  - "Calcular la diferencia: (R - P) / P."
  - "Multiplicar por 100 para obtener el porcentaje."

respuesta: desviaciones[idx]
tipo: completar
respuestas_validas:
  - "-10%"
  - "+15%"
  - "0%"

explicacion: |
  La desviación presupuestaria indica la diferencia entre lo planificado y lo ejecutado. Una desviación positiva indica sobre-ejecución (gasto mayor al previsto).
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "basico"
  tags: ["kpi", "calidad", "verdadero_falso"]

enunciado: "Un KPI (Key Performance Indicator) de calidad que mide el porcentaje de productos defectuosos sobre el total producido es un indicador de proceso."

respuesta: verdadero
tipo: vf

explicacion: |
  Los indicadores de calidad suelen medir la efectividad de los procesos internos para asegurar que el output cumpla con los estándares establecidos.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "intermedio"
  tags: ["pdca", "deming", "procesos"]

enunciado: "Ordene las etapas del ciclo de mejora continua (PDCA) en su secuencia lógica de ejecución:"

opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]
respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: ordenar

explicacion: |
  El ciclo PDCA consiste en: Planificar (establecer objetivos), Hacer (implementar), Verificar (comparar resultados con objetivos) y Actuar (ajustar para mejorar).
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "avanzado"
  tags: ["rentabilidad", "margen", "calculo"]

variables:
  caso: uno_de([["Ventas: 1000, Costos: 700", "300"], ["Ventas: 500, Costos: 100", "400"], ["Ventas: 2000, Costos: 1800", "200"]])

enunciado: "Si una unidad de negocio presenta los siguientes datos: {caso[0]}, su margen de contribución absoluto es de ___."

pasos:
  - "Identificar el total de ventas."
  - "Identificar los costos variables/directos."
  - "Restar los costos de las ventas."

respuesta: caso[1]
tipo: completar
tolerancia_abs: 0

explicacion: |
  El margen de contribución es la diferencia entre las ventas y los costos variables, indicando cuánto aporta cada unidad a cubrir los costos fijos y generar utilidad.
```

## Sección: estado-de-resultados (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["conceptos", "ingresos"]

respuesta: "ingresos"
tipo: completar
respuestas_validas:
  - "ingresos"
  - "ventas"

enunciado: "El conjunto de incrementos en los beneficios económicos durante el período, que resultan en aumentos del patrimonio neto, se denominan _______."

explicacion: |
  Los ingresos representan las entradas de recursos o incrementos en el valor de los activos que surgen de las actividades principales de la organización.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["estructura", "resultado"]

variables:
  idx: uno_de([0, 1])
  escenario: [[1000, 800, 200], [500, 700, -200]]

respuesta: escenario[idx][2]
tipo: completar
tolerancia_abs: 0

enunciado: "En un escenario donde los ingresos son de ${escenario[idx][0]} y los costos/gastos totales son de ${escenario[idx][1]}, el resultado del período es _______."

pasos:
  - "Identificar el total de ingresos: ${escenario[idx][0]}"
  - "Identificar el total de costos y gastos: ${escenario[idx][1]}"
  - "Restar: Ingresos - Costos = Resultado"

explicacion: |
  El resultado se obtiene restando los costos y gastos de los ingresos totales. Si el resultado es positivo es ganancia, si es negativo es pérdida.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: verdadero
tipo: vf
enunciado: "Si el total de ingresos es menor que el total de costos y gastos en un período determinado, la organización presenta una pérdida."

explicacion: |
  Exacto. La pérdida ocurre cuando los egresos superan a los ingresos en el estado de resultados.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["estructura"]

respuesta_orden: ["Ingresos", "Costos", "Resultado"]
tipo: ordenar

opciones_explicitas: ["Ingresos", "Costos", "Resultado"]

enunciado: "Ordene los elementos según la estructura lógica de cálculo del estado de resultados (desde el origen del recurso hasta el resultado final):"

explicacion: |
  La secuencia lógica es: primero se registran los ingresos, luego se restan los costos/gastos y finalmente se obtiene el resultado (utilidad o pérdida).
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  idx: uno_de([0, 1])
  resultado_tipo: [["Ganancia", "positivo"], ["Pérdida", "negativo"]]

respuesta: resultado_tipo[idx][1]
tipo: mc

opciones_explicitas: ["positivo", "negativo"]

enunciado: "Si el resultado del período es una '_______', el valor numérico final es ${resultado_tipo[idx][0]}."

explicacion: |
  Una ganancia implica un valor positivo (ingresos > costos), mientras que una pérdida implica un valor negativo (ingresos < costos).
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["contabilidad", "ingresos", "costos"]

variables:
  datos: [[150000, 90000], [250000, 180000], [80000, 50000]]
  idx: uno_de([0,1,2])
  ventas: datos[idx][0]
  costo_ventas: datos[idx][1]

respuesta: ventas - costo_ventas
tipo: completar
tolerancia_abs: 0

enunciado: "Una empresa presenta las siguientes cifras en su estado de resultados: Ventas Totales de ${ventas} y Costo de Mercaderías Vendidas de ${costo_ventas}. ¿Cuál es el Resultado Bruto?"

pasos:
  - "Identificar las Ventas Netas: ${ventas}"
  - "Identificar el Costo de Ventas: ${costo_ventas}"
  - "Restar el Costo de las Ventas a las Ventas Netas: ${ventas} - ${costo_ventas}"

explicacion: |
  El Resultado Bruto se obtiene restando el costo de lo vendido a los ingresos por ventas. En este caso: ${ventas} - ${costo_ventas} = ${ventas - costo_ventas}.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["clasificacion", "conceptos"]

respuesta: "Ingreso"
tipo: mc
opciones_explicitas: ["Ingreso", "Costo", "Gasto", "Activo"]

enunciado: "Si una empresa realiza una venta de servicios por un valor de $50.000, este concepto se clasifica contablemente en el Estado de Resultados como un:"

explicacion: |
  Las entradas de recursos que incrementan el patrimonio neto de la entidad, provenientes de la actividad principal, se denominan Ingresos.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["utilidad", "impuestos", "gastos"]

variables:
  escenario: [[10000, 4000, 2000], [25000, 12000, 5000], [5000, 6000, 1000]]
  idx: uno_de([0,1,2])
  res_bruto: escenario[idx][0]
  gastos_op: escenario[idx][1]
  impuestos: escenario[idx][2]

respuesta: res_bruto - gastos_op - impuestos
tipo: completar
tolerancia_abs: 0

enunciado: "Se dispone de un Resultado Bruto de ${res_bruto}, Gastos Operativos de ${gastos_op} e Impuestos de ${impuestos}. Calcule la Utilidad Neta (Resultado del Ejercicio)."

pasos:
  - "Partir del Resultado Bruto: ${res_bruto}"
  - "Restar los Gastos Operativos: ${res_bruto} - ${gastos_op}"
  - "Restar los Impuestos para obtener el resultado final: ${res_bruto} - ${gastos_op} - ${impuestos}"

explicacion: |
  La Utilidad Neta es el resultado final después de deducir todos los costos, gastos y obligaciones impositivas.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["teoria", "conceptos"]

respuesta: falso

tipo: vf

enunciado: "Si el total de ingresos de una organización es menor al total de sus costos y gastos en un período determinado, el resultado se denomina 'Ganancia'."

explicacion: |
  Falso. Cuando los gastos superan a los ingresos, el resultado es una 'Pérdida'. La 'Ganancia' ocurre cuando los ingresos son mayores.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "proceso"]

opciones_explicitas: ["Ventas", "Resultado Bruto", "Resultado Operativo", "Resultado Neto"]
respuesta_orden: ["Ventas", "Resultado Bruto", "Resultado Operativo", "Resultado Neto"]
tipo: ordenar

enunciado: "Ordene los siguientes conceptos según la estructura lógica de cascada de un Estado de Resultados, desde el ingreso principal hasta el resultado final:"

explicacion: |
  La estructura sigue un orden de deducción sucesiva: se parte de las Ventas, se restan los costos para obtener el Bruto, luego se restan gastos operativos para el Operativo, y finalmente impuestos y otros para el Neto.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["ingresos", "devengado", "flujo_de_caja"]

respuesta: falso
tipo: vf

enunciado: "Un ingreso registrado en el Estado de Resultados implica necesariamente que el dinero ya ingresó a la cuenta bancaria de la organización."

explicacion: |
  El Estado de Resultados se rige por el principio de lo devengado. Esto significa que los ingresos se registran cuando se produce la venta o la prestación del servicio, independientemente de si el cliente pagó en efectivo o si la transacción fue a crédito.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["resultado", "ganancia", "perdida"]

variables:
  idx: uno_de([0, 1, 2])
  ingresos: [1000, 500, 1200]
  costos: [800, 600, 1200]
  resultados_texto: ["200", "-100", "0"]

respuesta: resultados_texto[idx]
tipo: mc
opciones_explicitas: ["200", "-100", "0", "No se puede determinar"]

enunciado: "Si una organización presenta un total de ingresos de {ingresos[idx]} y un total de costos de {costos[idx]}, su resultado del período es:"

explicacion: |
  El resultado (ganancia o pérdida) se obtiene restando los costos y gastos de los ingresos totales. El resultado es positivo (ganancia) o negativo (pérdida) según cuál de los dos totales sea mayor.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["orden", "estructura"]

respuesta_orden: ["Ventas", "Costo de Ventas", "Resultado Bruto", "Gastos Operativos", "Resultado Operativo"]
tipo: ordenar

opciones_explicitas: ["Ventas", "Costo de Ventas", "Resultado Bruto", "Gastos Operativos", "Resultado Operativo"]

enunciado: "Ordene los conceptos según el orden lógico de presentación en un Estado de Resultados estándar para determinar la utilidad operativa."

explicacion: |
  El orden lógico comienza con los ingresos por ventas, se restan los costos directos para obtener el margen bruto, luego se restan los gastos operativos para llegar al resultado operativo.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["costo", "gasto", "clasificacion"]

respuesta: "gasto"
tipo: completar
respuestas_validas:
  - "gasto"

enunciado: "Mientras que el costo está directamente vinculado a la producción de un bien o servicio, el pago de la factura de luz de la oficina administrativa se clasifica contablemente como un ___."

explicacion: |
  Los costos son inversiones que se recuperan al vender el producto (están en el inventario hasta la venta), mientras que los gastos son consumos que se utilizan para mantener la estructura operativa de la empresa.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "avanzado"
  tags: ["impuestos", "resultado_neto"]

variables:
  escenario: [["Resultado antes de impuestos: 100, Tasa: 0.3", "70"], ["Resultado antes de impuestos: -50, Tasa: 0.3", "-50"]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Calcule el Resultado Neto (utilidad o pérdida después de impuestos) considerando el siguiente escenario: {escenario[idx][0]}."

explicacion: |
  El resultado neto es el resultado final después de restar los impuestos al resultado antes de impuestos. Si hay pérdida, generalmente no se calcula impuesto sobre la renta (dependiendo de la legislación local, pero en ejercicios académicos se asume que no se resta impuesto a una pérdida).
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["conceptos", "contabilidad"]

respuesta: "flujo"
tipo: completar
respuestas_validas:
  - "flujo"
  - "flujo de fondos"
  - "flujo de caja"

enunciado: "A diferencia del Balance General, que muestra la situación patrimonial en un momento dado, el Estado de Resultados muestra el ___ de ingresos y gastos durante un período determinado."

explicacion: |
  El Balance General es una "foto" estática, mientras que el Estado de Resultados es un "video" que registra el flujo de transacciones en un tiempo determinado.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["rentabilidad", "liquidez"]

respuesta: falso
tipo: vf

enunciado: "Si una empresa reporta una utilidad neta positiva pero tiene problemas para pagar sus deudas corrientes, ¿es correcto afirmar que la utilidad neta indica la liquidez inmediata de la empresa?"

explicacion: |
  El principio del devengado implica que los ingresos y gastos se registran cuando ocurren, independientemente de si hubo movimiento de efectivo o no.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["estructura", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que el Resultado del Ejercicio se obtiene simplemente restando el Activo del Pasivo?"

explicacion: |
  Falso. La diferencia entre Activo y Pasivo es el Patrimonio Neto. El Resultado del Ejercicio se obtiene de la diferencia entre Ingresos y Gastos en el Estado de Resultados.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "jerarquia"]

respuesta_orden: ["Ventas Netas", "Costo de Mercaderías Vendidas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]
tipo: ordenar
opciones_explicitas: ["Ventas Netas", "Costo de Mercaderías Vendidas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]

enunciado: "Ordene los conceptos según la estructura lógica de un Estado de Resultados para determinar la utilidad operativa:"

explicacion: |
  La estructura sigue un orden descendente: primero se determinan las ventas, se restan los costos directos para obtener la utilidad bruta, y luego se restan los gastos de administración y ventas para llegar a la utilidad operativa.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "avanzado"
  tags: ["costos", "clasificacion"]

respuesta: "Costo"
tipo: mc
opciones_explicitas: ["Costo", "Gasto"]

enunciado: "En el Estado de Resultados, el concepto que se relaciona directamente con el ingreso por ventas para determinar la utilidad bruta se denomina ___."

explicacion: |
  El 'Costo' (como el CMV) está directamente vinculado a la producción o adquisición de lo vendido, mientras que el 'Gasto' suele referirse a consumos para la estructura operativa (administración/ventas).
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["contabilidad", "utilidad_bruta"]

variables:
  escenario: [[150000, 85000, 45000], [200000, 120000, 30000], [180000, 90000, 55000]]
  idx: uno_de([0, 1, 2])
  ventas: escenario[idx][0]
  costo_ventas: escenario[idx][1]

respuesta: ventas - costo_ventas
tipo: completar
tolerancia_abs: 0

enunciado: "Una empresa reporta en su estado de resultados un total de ventas de ${ventas} y un costo de ventas de ${costo_ventas}. ¿Cuál es el monto de la utilidad bruta?"

explicacion: |
  La utilidad bruta se calcula restando el costo de ventas de los ingresos totales por ventas:
  Utilidad Bruta = Ventas - Costo de Ventas
  En este caso: ${ventas} - ${costo_ventas} = ${ventas - costo_ventas}.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "basico"
  tags: ["clasificacion", "gastos"]

respuesta: "Gastos Operativos"
tipo: mc
opciones_explicitas: ["Costo de Ventas", "Gastos Operativos", "Ingresos No Operativos"]

enunciado: "Si una empresa tiene un listado de pagos por sueldos administrativos, alquiler de oficinas y servicios de luz para la administración, ¿en qué categoría del estado de resultados se clasifican principalmente?"

explicacion: |
  Los gastos de administración, ventas y financieros se agrupan como Gastos Operativos, a diferencia del Costo de Ventas que está directamente ligado a la producción o adquisición de bienes vendidos.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["resultado_neto", "perdida"]

variables:
  datos: [[5000, 8000], [12000, 10000], [4500, 4500]]
  idx: uno_de([0, 1, 2])
  ingresos: datos[idx][0]
  gastos: datos[idx][1]

respuesta: ingresos > gastos
tipo: vf
enunciado: "Considerando que los ingresos totales son ${ingresos} y los gastos totales son ${gastos}, ¿el resultado del ejercicio es una utilidad (ganancia)?"

explicacion: |
  Para que haya utilidad, los ingresos deben ser mayores que los gastos. 
  En este escenario: ${ingresos} > ${gastos} es ${ingresos > gastos}.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "intermedio"
  tags: ["orden", "estructura"]

respuesta_orden: ["Ventas", "Costo de Ventas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]
tipo: ordenar

opciones_explicitas: ["Ventas", "Costo de Ventas", "Utilidad Bruta", "Gastos Operativos", "Utilidad Operativa"]

enunciado: "Ordene los siguientes conceptos según la secuencia lógica de presentación en un Estado de Resultados convencional (de mayor a menor margen):"

explicacion: |
  La estructura lógica comienza con el ingreso principal (Ventas), se le resta el costo directo para obtener la Utilidad Bruta, luego se restan los gastos operativos para llegar a la Utilidad Operativa.
```

```
metadata:
  materia: "economia"
  tema: "estado_de_resultados"
  nivel: "avanzado"
  tags: ["utilidad_neta", "impuestos"]

variables:
  escenario: [[10000, 2000], [15000, 3000], [8000, 1500]]
  idx: uno_de([0, 1, 2])
  utilidad_antes_imp: escenario[idx][0]
  impuesto_tasa: 0.30

respuesta: utilidad_antes_imp * (1 - impuesto_tasa)

tipo: completar
tolerancia_abs: 0

enunciado: "Si una empresa obtiene una utilidad antes de impuestos de ${utilidad_antes_imp} y debe afrontar una tasa impositiva del 30%, el valor de la utilidad neta es ___"

explicacion: |
  La utilidad neta se obtiene aplicando la tasa impositiva sobre la utilidad antes de impuestos:
  Utilidad Neta = Utilidad Antes de Impuestos * (1 - Tasa)
  En este caso: ${utilidad_antes_imp} * (1 - 0.30) = ${utilidad_antes_imp * 0.7}.
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
respuestas_validas:
  - "incremental"
  - "progresiva"
  - "constante"

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

respuesta: verdadero
tipo: vf
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

opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]
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

respuesta: "Muda"
tipo: mc

opciones_explicitas: ["Muda", "Kaizen", "Poka-Yoke", "Kanban"]

enunciado: "En la metodología de mejora continua, el término japonés utilizado para referirse a cualquier tipo de desperdicio en el proceso es: ___"

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
respuestas_validas:
  - "incremental"
  - "gradual"
  - "constante"

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
  escenario: [["Tiempo actual: 100 min, Tiempo meta: 85 min", 15], ["Tiempo actual: 50 min, Tiempo meta: 48 min", 2], ["Tiempo actual: 200 min, Tiempo meta: 180 min", 20]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: "completar"
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

tipo: ordenar
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]
respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]

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
  escenarios: [["Una empresa implementa un software de gestión avanzado para resolver todos sus problemas de eficiencia de un solo golpe.", "software"], ["Un equipo de producción identifica pequeñas fallas diarias y ajusta sus procesos cada semana.", "ajustes"]]

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
respuestas_validas:
  - "incremental"

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

respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]
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

enunciado: "Si un gerente cree que una vez que el proceso es eficiente, el trabajo de mejora ha terminado, ¿está aplicando correctamente la filosofía de mejora continua?"

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
  escenarios: [["Una empresa que implementa un cambio masivo de software una vez cada 5 años.", "Un equipo que realiza pequeñas ajustes diarios en su línea de producción para reducir desperdicios."], ["Un evento único de reestructuración organizacional.", "Un ciclo constante de revisión y optimización de tareas."]]

tipo: mc
opciones_explicitas: [escenarios[escenario_idx][0], escenarios[escenario_idx][1]]
respuesta: escenarios[escenario_idx][1]

enunciado: "¿Cuál de los siguientes escenarios representa verdaderamente la filosofía de mejora continua?"

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
respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]

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
respuestas_validas:
  - "incremental"
  - "gradual"
  - "pequeño"

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
  textos: ["Una fábrica de calzado que cambia toda su maquinaria de golpe cada 5 años.", "Una línea de producción que ajusta pequeños detalles cada semana para reducir desperdicios."]
  valores: [falso, verdadero]

respuesta: valores[escenario_idx]
tipo: vf
enunciado: "La mejora continua se define como un proceso de optimización constante e incremental. Analice el siguiente escenario: {textos[escenario_idx]}. ¿Es este un ejemplo de mejora continua?"

explicacion: |
  La mejora continua (Kaizen) se basa en cambios incrementales y constantes, no en transformaciones disruptivas o únicas de gran escala.
```

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos"]

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

respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]
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

respuesta: "5%"
tipo: completar

respuestas_validas:
  - "5%"

enunciado: "En un programa de mejora continua, una empresa logra reducir el ___ de desperdicio de materia prima cada mes mediante ajustes en la maquinaria."

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
  textos: ["El enfoque de la empresa es reactivo: solo actúa cuando hay crisis.", "El enfoque de la empresa es proactivo: busca fallas antes de que ocurran."]
  valores: [falso, verdadero]

respuesta: valores[escenario_idx]
tipo: vf
enunciado: "Un pilar de la mejora continua es la proactividad. Analice el siguiente enfoque: {textos[escenario_idx]}. ¿Este enfoque es compatible con la filosofía de mejora continua?"

explicacion: |
  La mejora continua requiere una mentalidad proactiva para identificar oportunidades de mejora antes de que los problemas se conviertan en crisis.
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
respuestas_validas:
  - "ventas_netas - costo_ventas"
  - "Ventas Netas - Costo de Ventas"

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
tolerancia_abs: 0
respuesta: datos[escenario_idx][0] - datos[escenario_idx][1] - datos[escenario_idx][2] - datos[escenario_idx][3]

enunciado: "Considera el siguiente escenario: Ventas: {datos[escenario_idx][0]}, Costo de Ventas: {datos[escenario_idx][1]}, Gastos Operativos: {datos[escenario_idx][2]}, Impuestos: {datos[escenario_idx][3]}. El margen neto (en valor absoluto) es ___."

pasos:
  - "Restar el costo de ventas a las ventas para obtener la utilidad bruta."
  - "Restar los gastos operativos y los impuestos a la utilidad bruta."

explicacion: |
  El margen neto es la ganancia final después de restar TODOS los costos y gastos: {datos[escenario_idx][0]} - {datos[escenario_idx][1]} - {datos[escenario_idx][2]} - {datos[escenario_idx][3]}.
```

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
respuesta_orden: ["Ventas Totales", "Margen Bruto", "Margen Neto"]

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
opciones_explicitas: ["Un margen bruto alto con un margen neto muy bajo indica ineficiencia en los gastos operativos.", "Un margen neto alto siempre garantiza que el margen bruto sea aún más alto.", "El margen bruto no tiene relación con el margen neto.", "Si el margen neto es positivo, el margen bruto debe ser necesariamente mayor al doble."]

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
  escenario: uno_de([["Ventas: 1000, Costo de Mercadería: 600", "400"], ["Ventas: 5000, Costo de Mercadería: 3500", "1500"], ["Ventas: 2500, Costo de Mercadería: 1200", "1300"]])

respuesta: escenario[1]
tipo: completar

enunciado: "Si una empresa registra {escenario[0]}, el margen bruto es de ___."

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
  escenario: uno_de([["Ventas: 1000, Gastos: 800", "200"], ["Ventas: 5000, Gastos: 4500", "500"], ["Ventas: 2000, Gastos: 1900", "100"]])

respuesta: escenario[1]
tipo: completar
tolerancia_abs: 0

enunciado: "Considerando que los gastos totales (incluyendo operativos e impuestos) son de {escenario[0]}, el margen neto es ___."

explicacion: |
  El margen neto es el remanente final: Ventas Totales - Todos los Gastos.
```

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

