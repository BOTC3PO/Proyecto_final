### 1 — El propósito del MVP
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

### 2 — Ejemplo: MVP de una App de Delivery
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

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["escenario[0]", "escenario[1]", "escenario[2]"]

enunciado: "Un emprendedor quiere validar si la gente en un barrio específico quiere un servicio de delivery de comida casera. ¿Cuál de estos ejemplos representa mejor un MVP de tipo 'Concierge' (donde el servicio se realiza manualmente para entender el proceso)?"

explicacion: |
  El MVP de tipo Concierge sustituye la automatización por procesos manuales. En el ejemplo, usar WhatsApp y tomar pedidos a mano permite entender la demanda sin haber programado una aplicación compleja.
```

### 3 — Verdad o Falso: MVP vs Producto Final
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

### 4 — Pasos para lanzar un MVP de un nuevo café
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

### 5 — Análisis de métrica en MVP
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

respuesta: datos[1][2]
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