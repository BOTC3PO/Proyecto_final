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
  escenarios: [
    ["Software de gestión para contadores", "Optimizar el tiempo de cierre contable"],
    ["Cafetería de especialidad", "Ofrecer un espacio de coworking con café premium"]
  ]

tipo: completar
respuestas_validas: ["Optimizar el tiempo de cierre contable", "Ofrecer un espacio de coworking con café premium"]
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
respuesta: ["Definir Segmentos de Clientes", "Definir Propuesta de Valor", "Definir Canales de Distribución", "Definir Fuentes de Ingresos"]

enunciado: "Para construir un modelo de negocio coherente, se recomienda seguir un orden lógico de pensamiento. Ordena estos pasos desde el más fundamental al siguiente:"

explicacion: |
  Aunque el proceso puede ser iterativo, la lógica fundamental dicta que primero debes saber a quién le vendes (Segmentos), qué problema les resuelves (Propuesta de Valor), cómo les llegas (Canales) y cómo obtienes dinero (Ingresos).
```