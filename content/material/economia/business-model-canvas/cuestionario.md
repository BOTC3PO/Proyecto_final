# Economia — Business model canvas (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Business Model Canvas

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

### 2 — Segmentos de Cliente

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

### 3 — Relación entre Propuesta de Valor y Segmentos

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

### 4 — Componentes del Modelo de Negocio

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["vocabulario"]

tipo: mc
opciones_explicitas: ["Canales", "Presupuesto", "Organigrama", "Plan de Marketing"]
respuesta: "Canales"

enunciado: "¿Cuál de los siguientes NO es uno de los 9 bloques fundamentales del Business Model Canvas?"

explicacion: |
  Los 9 bloques son: Segmentos de clientes, Propuesta de valor, Canales, Relación con clientes, Flujos de ingresos, Recursos clave, Actividades clave, Alianzas clave y Estructura de costos.
```

### 5 — Secuencia de Análisis Estratégico

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

### 6 — El corazón del Canvas

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

### 7 — Segmentación de mercado

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

### 8 — Canales de distribución

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["canales", "distribucion"]

variables:
  pasos_distribucion: uno_de([["Crear el producto", "Almacenar stock", "Enviar al cliente"], ["Desarrollar software", "Procesar pago", "Entrega digital"]])

respuesta: pasos_distribucion[2]
tipo: completar
pasos:
  - "Paso 1: {pasos_distribucion[0]}"
  - "Paso 2: {pasos_distribucion[1]}"
  - "Paso 3: ___"

enunciado: "Para un modelo de negocio basado en productos físicos, el proceso de entrega sigue este orden lógico:"

explicacion: |
  El tercer paso en la cadena de valor de distribución física es el envío o entrega al cliente final.
```

### 9 — Estructura de costos vs Ingresos

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

### 10 — El flujo de ingresos

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

### 11 — Propuesta de valor vs. Producto

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

### 12 — Segmentos de clientes y nichos

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

### 13 — Canales vs. Comunicación

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

### 14 — Flujos de ingresos y transacciones

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

### 15 — Estructura de costos y escalabilidad

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

### 16 — Diferencia con el Plan de Negocios

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

### 17 — El Canvas vs. El Producto

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

### 18 — Verdad o Falso: Enfoque en el Cliente

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

### 19 — Componentes del Modelo

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

### 20 — Diferencia entre Canales y Relación

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

### 21 — Identificación de Segmentos

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

### 22 — Propuesta de Valor

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

### 23 — Canales de Distribución

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

### 24 — Estructura de Costos

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

### 25 — Flujos de Ingresos

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
