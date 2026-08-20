### 1 — El corazón del Canvas
```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["modelo_de_negocio", "propuesta_de_valor"]

variables:
  escenario_idx: uno_de([0, 1])
  caso: uno_de([
    ["Netflix", "Suscripción de streaming de películas y series"],
    ["Tesla", "Vehículos eléctricos de alto rendimiento y energía sostenible"]
  ])

respuesta: caso[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Propuesta de Valor", "Segmentos de Clientes", "Canales", "Relación con Clientes"]

enunciado: "En el modelo de negocio de {caso[escenario_idx][0]}, el elemento que describe el beneficio principal que se ofrece al cliente (en este caso, {caso[escenario_idx][1]}) corresponde al bloque de: ___"

explicacion: |
  La Propuesta de Valor es el bloque que describe el conjunto de productos y servicios que crean valor para un segmento de clientes específico. En el caso de {caso[escenario_idx][0]}, es {caso[escenario_idx][1]}.
```

### 2 — Segmentación de mercado
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

### 3 — Canales de distribución
```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["canales", "distribucion"]

variables:
  modelo_distribucion: uno_de([0, 1])
  pasos_distribucion: uno_de([
    ["Crear el producto", "Almacenar stock", "Enviar al cliente"],
    ["Desarrollar software", "Procesar pago", "Entrega digital"]
  ])

respuesta: pasos_distribucion[modelo_distribucion][2]
tipo: completar
pasos:
  - "Paso 1: {pasos_distribucion[modelo_distribucion][0]}"
  - "Paso 2: {pasos_distribucion[modelo_distribucion][1]}"
  - "Paso 3: ___"

enunciado: "Para un modelo de negocio basado en productos físicos, el proceso de entrega sigue este orden lógico:"

explicacion: |
  El tercer paso en la cadena de valor de distribución física es el envío o entrega al cliente final.
```

### 4 — Estructura de costos vs Ingresos
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

### 5 — El flujo de ingresos
```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "avanzado"
  tags: ["ingresos", "flujos"]

variables:
  tipo_ingreso_idx: uno_de([0, 1])
  ejemplo_flujo: uno_de([
    ["Venta de activos (venta de un producto único)"],
    ["Tarifa de uso (pago por servicio por tiempo limitado)"]
  ])

respuesta: ejemplo_flujo[tipo_ingreso_idx][0]
tipo: mc
opciones_explicitas: ["Venta de activos", "Tarifa de uso", "Licencia", "Alquiler"]

enunciado: "Si una empresa de software cobra por cada hora de uso de su plataforma, el flujo de ingresos se clasifica como: ___"

explicacion: |
  El modelo de 'Tarifa de uso' se basa en el consumo o tiempo de uso del servicio, a diferencia de la 'Venta de activos' donde la propiedad se transfiere permanentemente.
```