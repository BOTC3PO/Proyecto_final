### 1 — El ciclo de aprendizaje
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["lean_startup", "ciclo_feedback"]

variables:
  escenario: uno_de([
    ["Lanzar un MVP para probar una funcionalidad de pago", "Construir"],
    ["Analizar métricas de retención tras el lanzamiento", "Medir"],
    ["Decidir si pivotar o perseverar tras ver resultados", "Aprender"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "En el ciclo de Lean Startup, la acción de '{escenario[idx][0]}' corresponde a la fase de: ___"

respuestas_validas: ["Construir", "Medir", "Aprender"]
respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  El ciclo consiste en Construir (crear el experimento/MVP), Medir (recolectar datos) y Aprender (decidir el siguiente paso).
```

### 2 — El propósito del MVP
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

### 3 — Verdad o Falso: Inversión Temprana
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

### 4 — Secuencia del Ciclo de Feedback
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

enunciado: "Ordene las etapas del ciclo de aprendizaje de Lean Startup en el orden correcto:"

opciones_explicitas: ["Construir", "Medir", "Aprender"]
respuesta: ["Construir", "Medir", "Aprender"]
tipo: ordenar

explicacion: |
  El flujo es iterativo: se construye un experimento, se miden los resultados y se aprende de ellos para reiniciar el ciclo.
```

### 5 — Escenario de Pivotaje
```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "avanzado"
  tags: ["pivot", "estrategia"]

variables:
  caso: uno_de([
    ["Los datos muestran que los usuarios usan la app solo para chatear, no para comprar", "Pivotar"],
    ["Los datos muestran que la métrica de retención es mayor a la esperada", "Perseverar"],
    ["Los datos muestran que el costo de adquisición es mayor al valor de vida del cliente", "Pivotar"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "Si tras la fase de 'Medir', los datos indican que: '{caso[idx][0]}', la decisión estratégica más probable es: ___"

respuestas_validas: ["Pivotar", "Perseverar"]
respuesta: caso[idx][1]
tipo: completar

explicacion: |
  Si la hipótesis se confirma (Perseverar) o si los datos obligan a un cambio de estrategia (Pivotar), la decisión depende de la alineación con el modelo de negocio.
```