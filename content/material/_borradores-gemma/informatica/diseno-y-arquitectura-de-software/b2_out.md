### 1 — Patrón Observer en un sistema de notificaciones
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["patrones_de_diseño", "observer"]

variables:
  escenario: uno_de([
    ["Sistema de Clima", "Sensor de Temperatura"],
    ["App de Bolsa", "Widget de Cotizaciones"],
    ["Videojuego", "Sistema de Logros"]
  ])

enunciado: "En un sistema de {escenario[0]}, el {escenario[1]} actúa como el 'Subject'. Cuando la temperatura cambia, debe notificar a todos los observadores registrados. Si un observador no está suscrito, no recibirá la actualización."

opciones_explicitas: ["El Subject mantiene una lista de suscriptores", "El Observer decide cuándo notificar al Subject", "El Subject debe conocer la implementación interna de cada Observer"]

respuesta: "El Subject mantiene una lista de suscriptores"
tipo: mc

explicacion: |
  El patrón Observer define una relación de uno a muchos. El 'Subject' mantiene una lista de suscriptados y, ante un cambio de estado, recorre dicha lista llamando al método de actualización de cada uno.
```

### 2 — Dependencias en Arquitectura Hexagonal
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["arquitectura_hexagonal", "dependencias"]

variables:
  capa_externa: uno_de(["Base de Datos", "Interfaz de Usuario", "Servicio de Email"])
  capa_core: "Dominio (Lógica de Negocio)"

enunciado: "Siguiendo los principios de la Arquitectura Hexagonal (Ports and Adapters), la dependencia debe fluir hacia el centro. Si tenemos un componente de {capa_externa}, este debe depender de una interfaz definida en el {capa_core}, pero el {capa_core} NUNCA debe depender de {capa_externa}."

opciones_explicitas: [verdadero, falso]

respuesta: verdadero
tipo: vf

explicacion: |
  La regla de oro de la arquitectura hexagonal es la inversión de dependencias. El núcleo (Core) es independiente de los detalles de infraestructura (DB, UI, etc.).
```

### 3 — Ciclo de vida del desarrollo (Cascada vs Ágil)
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["metodologias", "sdlc"]

variables:
  modelo: uno_de([
    ["Cascada", "Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"],
    ["Ágil", "Planificación", "Iteración", "Revisión", "Adaptación"]
  ])

enunciado: "En el modelo de {modelo[0]}, las fases deben completarse de forma secuencial. El orden correcto de las etapas es: 1. {modelo[1]}, 2. {modelo[2]}, 3. {modelo[3]}, 4. {modelo[4]} y 5. {modelo[5]}."

opciones_explicitas: [
  ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"],
  ["Diseño", "Requerimientos", "Implementación", "Pruebas", "Mantenimiento"],
  ["Requerimientos", "Implementación", "Diseño", "Pruebas", "Mantenimiento"]
]

respuesta: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]
tipo: ordenar

explicacion: |
  El modelo en Cascada (Waterfall) es lineal y rígido: no se puede pasar a la fase de implementación sin haber finalizado el diseño y los requerimientos.
```

### 4 — Acoplamiento y Cohesión
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["principios_solid", "cohesion"]

variables:
  modulo: uno_de(["Modulo_Pagos", "Modulo_Usuarios", "Modulo_Inventario"])

enunciado: "Estamos diseñando un sistema para una tienda online. Si el {modulo[0]} contiene funciones para procesar pagos, generar facturas PDF y también para enviar emails de bienvenida, el módulo tiene una ___ baja."

respuestas_validas: ["cohesión"]

respuesta: "cohesión"
tipo: completar

explicacion: |
  Una baja cohesión ocurre cuando un módulo realiza demasiadas tareas distintas que no están relacionadas entre sí. Un buen diseño busca que cada módulo tenga una responsabilidad única (Single Responsibility Principle).
```

### 5 — Microservicios vs Monolito
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_of_software"
  nivel: "intermedio"
  tags: ["microservicios", "monolito"]

variables:
  escenario_carga: uno_de([
    "El módulo de pagos recibe 1000 peticiones por segundo, pero el resto del sistema no.",
    "El módulo de catálogo es muy pesado en memoria, pero el resto es ligero.",
    "El módulo de búsqueda requiere escalar su CPU constantemente por la alta demanda."
  ])

enunciado: "En un escenario donde {escenario_carga}, una arquitectura de microservicios permite escalar solo el componente afectado, mientras que en un monolito se debe escalar toda la aplicación. ¿Cuál es la principal ventaja de microservicios en este caso?"

opciones_explicitas: ["Escalabilidad selectiva", "Simplicidad de despliegue", "Menor latencia de red"]

respuesta: "Escalabilidad selectiva"
tipo: mc

explicacion: |
  Los microservicios permiten el "Scaling out" dirigido. Si solo un componente tiene carga, solo pagamos por más recursos para ese componente, optimizando costos y recursos.
```