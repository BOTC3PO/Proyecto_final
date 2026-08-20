### 1 — El propósito del ciclo
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["lean_startup", "validacion"]

respuesta: "aprendizaje validado"
tipo: completar
respuestas_validas: ["aprendizaje validado"]

enunciado: "A diferencia de la planificación tradicional basada en suposiciones, el objetivo principal del ciclo construir-medir-aprender es obtener ___."

explicacion: |
  El ciclo no busca simplemente 'hacer productos', sino maximizar el aprendizaje validado sobre lo que los clientes realmente necesitan y están dispuestos a usar.
```

### 2 — Diferencia entre MVP y Producto Final
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "intermedio"
  tags: ["mvp", "iteracion"]

variables:
  opcion_idx: uno_de([0,1])

respuesta: opciones_explicitas[opcion_idx]
tipo: mc
opciones_explicitas: 
  - "El MVP es una versión simplificada para aprender; el producto final es la solución completa para escalar."
  - "El MVP es el producto terminado tras muchas iteraciones; el producto final es un prototipo."

enunciado: "Según la metodología Lean Startup, ¿cuál es la distinción fundamental entre un MVP y un producto final?"

explicacion: |
  El MVP (Producto Mínimo Viable) se centra en la velocidad de aprendizaje y la validación de hipótesis, mientras que el producto final busca la excelencia operativa y la satisfacción total del mercado.
```

### 3 — El enfoque de la fase 'Medir'
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

### 4 — Secuencia del ciclo de aprendizaje
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

respuesta: ["Construir", "Medir", "Aprender"]
tipo: ordenar

opciones_explicitas: 
  - "Construir"
  - "Medir"
  - "Aprender"
  - "Vender"
  - "Planificar"

enunciado: "Ordene los pasos fundamentales que componen el bucle de retroalimentación del ciclo de aprendizaje de Lean Startup:"

explicacion: |
  El ciclo es un bucle continuo: se construye un experimento (MVP), se miden los resultados con métricas accionables y se aprende de esos datos para decidir si se mantiene la estrategia o se cambia (pivotar).
```

### 5 — Riesgo vs. Inversión
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "avanzado"
  tags: ["riesgo", "inversion"]

variables:
  escenario_idx: uno_de([0,1])

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: 
  - "Validar con clientes reduce el riesgo de desperdicio de capital."
  - "Validar con clientes aumenta la inversión inicial necesaria."

enunciado: "Considerando la relación entre validación y gestión de recursos, si aplicamos el ciclo de forma temprana: {escenarios[escenario_idx][0]}"

variables:
  escenarios: [["El enfoque de validación rápida permite identificar errores antes de escalar", "El enfoque de validación rápida permite identificar errores antes de escalar"]]

explicacion: |
  La validación temprana actúa como un seguro contra el desperdicio de recursos, permitiendo que la inversión se dirija solo hacia lo que el mercado realmente demanda.
```