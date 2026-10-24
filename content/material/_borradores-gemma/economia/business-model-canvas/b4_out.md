### 1 — Diferencia con el Plan de Negocios
```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["estrategia", "gestion"]

respuesta: "Plan de Negocios"
tipo: completar
respuestas_validas: ["Plan de Negocios"]

enunciado: "A diferencia del Business Model Canvas, que es una herramienta visual y dinámica para modelar hipótesis, el ___ es un documento detallado y extenso que describe la estrategia operativa y financiera a largo plazo."

explicacion: |
  El Business Model Canvas es una herramienta de síntesis visual (canvas), mientras que el Plan de Negocios es un documento formal y exhaustivo utilizado para buscar financiación o guiar la ejecución detallada.
```

### 2 — El Canvas vs. El Producto
```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["propuesta_de_valor", "segmentos"]

variables:
  escenario: uno_de([
    ["Un software de gestión de turnos para peluquerías", "Propuesta de Valor"],
    ["Un servicio de entrega de comida a domicilio", "Propuesta de Valor"],
    ["Un gimnasio con entrenamiento personalizado", "Propuesta de Valor"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Segmentos de Cliente", "Propuesta de Valor", "Canales", "Relación con el Cliente"]

enunciado: "En el escenario de '{escenario[0]}', el elemento central que describe el beneficio o solución que se ofrece para resolver un problema específico del cliente es la: ___"

explicacion: |
  La Propuesta de Valor es el conjunto de productos y servicios que crean valor para un segmento de mercado específico, diferenciándose de los Segmentos de Cliente (quiénes son) o los Canales (cómo llegan).
```

### 3 — Verdad o Falso: Enfoque en el Cliente
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

### 4 — Componentes del Modelo
```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["estructura", "componentes"]

respuesta: ["Segmentos de Cliente", "Propuesta de Valor", "Canales", "Relación con el Cliente", "Fuentes de Ingresos", "Recursos Clave", "Actividades Clave", "Asociaciones Clave", "Estructura de Costos"]
tipo: ordenar

opciones_explicitas: ["Segmentos de Cliente", "Propuesta de Valor", "Canales", "Relación con el Cliente", "Fuentes de Ingresos", "Recursos Clave", "Actividades Clave", "Asociaciones Clave", "Estructura de Costos"]

enunciado: "Ordene los siguientes elementos siguiendo el flujo lógico de generación de valor (desde el cliente hacia la infraestructura interna):"

explicacion: |
  El flujo lógico comienza con el mercado (Clientes, Propuesta, Canales, Relación, Ingresos) y termina con la base operativa (Recursos, Actividades, Socios y Costos).
```

### 5 — Diferencia entre Canales y Relación
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