### 1 — El propósito del ciclo
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes"
  nivel: "basico"
  tags: ["lean_startup", "ciclo_aprendizaje"]

tipo: mc
opciones_explicitas: ["Optimizar el producto final antes de lanzarlo", "Minimizar el tiempo total entre ideas y aprendizaje validado", "Asegurar que el producto sea perfecto para el cliente", "Evitar cualquier tipo de gasto en marketing"]

enunciado: "El objetivo principal del ciclo 'Construir-Medir-Aprender' es ___."

explicacion: |
  El ciclo busca maximizar el aprendizaje validado con el menor esfuerzo posible. No se trata de perfeccionar el producto, sino de validar hipótesis de negocio rápidamente para evitar desperdiciar recursos en ideas que no funcionan.
```

### 2 — Error en la fase de Medición
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes"
  nivel: "intermedio"
  tags: ["metricas_vanidosas", "metricas_accionables"]

variables:
  es_metrica_accionable: uno_de([true, false])

tipo: vf
respuesta: es_metrica_accionable

enunciado: "Si una métrica solo muestra que el número de usuarios totales crece, pero no explica por qué vuelven o se van, se considera una 'métrica de vanidad'. ¿Es una métrica de vanidad útil para pivotar o perseverar? {es_metrica_accionable}"

explicacion: |
  Las métricas de vanidad (como el número de seguidores o visitas totales) pueden dar una falsa sensación de éxito. Para el ciclo de aprendizaje, necesitamos métricas accionables que nos permitan tomar decisiones sobre el modelo de negocio.
```

### 3 — Secuencia del aprendizaje
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

tipo: ordenar
opciones_explicitas: ["Construir un MVP", "Medir el comportamiento del usuario", "Aprender de los resultados", "Formular una hipótesis"]

enunciado: "Ordene los pasos lógicos para completar un ciclo de aprendizaje validado, comenzando desde la concepción de una hipótesis."

respuesta: ["Formular una hipótesis", "Construir un MVP", "Medir el comportamiento del usuario", "Aprender de los resultados"]

explicacion: |
  El proceso comienza con una idea/hipótesis, se construye un Producto Mínimo Viable (MVP) para probarla, se miden los datos resultantes y finalmente se aprende para decidir si se debe pivotar o perseverar.
```

### 4 — El concepto de MVP
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes"
  nivel: "intermedio"
  tags: ["mvp", "producto_minimo_viable"]

tipo: completar
respuestas_validas: ["Producto Mínimo Viable", "MVP"]

enunciado: "Para probar una idea de negocio rápido y barato, se utiliza un ___ que contiene solo las funciones esenciales para aprender sobre el cliente."

explicacion: |
  El MVP (Minimum Viable Product) no es un producto incompleto, sino la versión más simple de una idea que permite recolectar la máxima cantidad de aprendizaje validado con el menor esfuerzo.
```

### 5 — El error de la inversión prematura
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes"
  nivel: "avanzado"
  tags: ["riesgo", "pivotar"]

variables:
  es_error_comun: uno_de([true, false])

tipo: vf
respuesta: es_error_comun

enunciado: "Invertir grandes cantidades de capital en el desarrollo de todas las funcionalidades de un producto antes de validar si el mercado tiene interés es un error común en el emprendimiento. {es_error_comun}"

explicacion: |
  Este error se conoce como "desperdicio de recursos". La metodología Lean Startup sugiere validar primero la propuesta de valor antes de escalar la inversión en ingeniería o marketing masivo.
```