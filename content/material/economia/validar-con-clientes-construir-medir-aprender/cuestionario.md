# Economia — Validar con clientes construir medir aprender (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El ciclo de aprendizaje

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

### 2 — El objetivo del MVP

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

### 3 — El concepto de Pivotar

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

### 4 — Secuencia del ciclo de aprendizaje

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

### 5 — El aprendizaje validado

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

### 6 — El ciclo de aprendizaje

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

### 7 — El MVP y el aprendizaje

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

### 8 — El error de la métrica de vanidad

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

### 9 — Pasos para la validación

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

### 10 — El concepto de Pivotar

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

### 11 — El propósito del ciclo

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

### 12 — Error en la fase de Medición

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

### 13 — Secuencia del aprendizaje

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

### 14 — El concepto de MVP

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

### 15 — El error de la inversión prematura

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

### 16 — El propósito del ciclo

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

### 17 — Diferencia entre MVP y Producto Final

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

### 18 — El enfoque de la fase 'Medir'

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

### 19 — Secuencia del ciclo de aprendizaje

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

### 20 — Riesgo vs. Inversión

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

### 21 — El ciclo de aprendizaje

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

### 22 — El propósito del MVP

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

### 23 — Verdad o Falso: Inversión Temprana

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

### 24 — Secuencia del Ciclo de Feedback

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

### 25 — Escenario de Pivotaje

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
