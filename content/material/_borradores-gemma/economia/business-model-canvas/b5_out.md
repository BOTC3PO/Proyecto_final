### 1 — Identificación de Segmentos
```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["segmentos", "clientes"]

variables:
  escenario: uno_de([["App de paseo de perros para dueños ocupados", "Dueños de mascotas"], ["Software de contabilidad para freelancers", "Profesionales independientes"], ["Cafetería gourmet para estudiantes universitarios", "Estudiantes universitarios"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Dueños de mascotas", "Profesionales independientes", "Estudiantes universitarios", "Empresas de tecnología"]

enunciado: "En el modelo de negocio de una {escenario[idx][0]}, ¿cuál es el segmento de clientes principal?"

explicacion: |
  El segmento de clientes define quiénes son los individuos o empresas que la empresa busca alcanzar y servir. En el caso de {escenario[idx][0]}, el foco está en {escenario[idx][1]}.
```

### 2 — Propuesta de Valor
```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["propuesta_de_valor", "beneficios"]

variables:
  escenario: uno_de([["Entrega de comida en 10 minutos", "Rapidez y conveniencia"], ["Consultoría financiera personalizada", "Confianza y experto asesoramiento"], ["Suscripción de streaming sin anuncios", "Entretenimiento sin interrupciones"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: vf

enunciado: "Si el modelo de negocio se basa en {escenario[idx][0]}, la propuesta de valor principal es {escenario[idx][1]}."

explicacion: |
  La propuesta de valor es el conjunto de productos y servicios que crean valor para un segmento de clientes específico.
```

### 3 — Canales de Distribución
```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["canales", "comunicacion"]

variables:
  escenario: uno_de([["Tienda de ropa online", "Redes sociales y web"], ["Taller mecánico físico", "Ubicación presencial"], ["Software SaaS"], ["Descarga digital"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["Redes sociales y web", "Ubicación presencial", "Descarga digital"]

enunciado: "Para una {escenario[idx][0]}, el canal de comunicación y venta principal es ___."

explicacion: |
  Los canales describen cómo la empresa se comunica con sus clientes y cómo entrega su propuesta de valor.
```

### 4 — Estructura de Costos
```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["costos", "estructura"]

variables:
  escenario: uno_de([["Fábrica de muebles", "Materia prima y mano de obra"], ["Consultora de marketing", "Salarios de especialistas"], ["Plataforma de streaming", "Servidores y licencias"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Materia prima y mano de obra", "Salarios de especialistas", "Servidores y licencias", "Alquiler de locales"]

enunciado: "Para una {escenario[idx][0]}, el costo principal suele ser ___."

explicacion: |
  La estructura de costos describe todos los costos en los que se incurre para operar un modelo de negocio.
```

### 5 — Flujos de Ingresos
```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "avanzado"
  tags: ["ingresos", "monetizacion"]

variables:
  escenario: uno_de([["Gimnasio con membresía mensual", "Cuota recurrente"], ["Venta de un libro físico", "Transacción única"], ["Software con modelo freemium", "Combinación de modelos"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: ordenar
opciones_explicitas: ["Cuota recurrente", "Transacción única", "Combinación de modelos"]

enunciado: "Ordene los siguientes tipos de ingresos según el modelo de {escenario[idx][0]} (de más recurrente a menos recurrente):"

explicacion: |
  El flujo de ingresos representa el efectivo que la empresa genera de cada segmento de clientes.
```