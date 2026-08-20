### 1 — Propuesta de valor vs. Producto
```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["propuesta_de_valor", "errores_comunes"]

respuesta: "propuesta de valor"
tipo: "completar"
respuestas_validas: ["propuesta de valor"]

enunciado: "Un error común es confundir el producto o servicio físico con la ___ , la cual debe centrarse en la solución de un problema o la satisfacción de una necesidad del cliente."

explicacion: |
  La propuesta de valor no es el objeto en sí, sino el beneficio o valor que el cliente recibe al usarlo.
```

### 2 — Segmentos de clientes y nichos
```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["segmentos_de_clientes", "errores_comunes"]

variables:
  es_nicho: uno_de([verdadero, falso])

respuesta: es_nicho
tipo: "vf"

enunciado: "Si una empresa intenta dirigirse a 'todo el mundo' sin definir características específicas, está cometiendo el error de no definir correctamente sus {es_nicho}."

explicacion: |
  Intentar ser todo para todos suele diluir la propuesta de valor. La segmentación permite enfocar recursos y mensajes.
```

### 3 — Canales vs. Comunicación
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

### 4 — Flujos de ingresos y transacciones
```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["flujos_de_ingresos", "errores_comunes"]

respuesta: "monetización"
tipo: "completar"
respuestas_validas: ["monetización"]

enunciado: "Tener un producto exitoso no garantiza un modelo de negocio viable si no se define claramente la estrategia de ___."

explicacion: |
  El Business Model Canvas requiere entender cómo el valor se transforma en ingresos (suscripción, venta única, freemium, etc.).
```

### 5 — Estructura de costos y escalabilidad
```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "avanzado"
  tags: ["estructura_de_costos", "escalabilidad"]

variables:
  caso: uno_de([0, 1])

enunciado: "En el modelo de {caso_texto}, la estructura de costos suele ser variable y ligada al volumen, mientras que en el modelo de {caso_texto}, la estructura suele ser mayormente fija."

variables_extra:
  caso_texto: uno_de(["software SaaS", "consultoría tradicional"])

respuesta: [0, 1]
tipo: "ordenar"
opciones_explicitas: ["software SaaS", "consultoría tradicional"]

explicacion: |
  En el modelo SaaS (Software as a Service), los costos marginales son muy bajos y la estructura es altamente escalable. En la consultoría, el costo principal es el tiempo humano (costo variable/escalabilidad limitada).
```