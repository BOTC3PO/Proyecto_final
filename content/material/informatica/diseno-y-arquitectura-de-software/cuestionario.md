# Informatica — Diseno y arquitectura de software (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Arquitectura de Software

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

tipo: mc
opciones_explicitas: ["El diseño detallado de algoritmos y estructuras de datos", "La estructura fundamental de un sistema y sus componentes", "La escritura de código siguiendo un estándar de estilo", "La gestión de los servidores donde se aloja la aplicación"]
respuesta: "La estructura fundamental de un sistema y sus componentes"
enunciado: "La arquitectura de software se define principalmente como ___."

explicacion: |
  La arquitectura de software se refiere a la estructura de alto nivel de un sistema, incluyendo sus componentes, las relaciones entre ellos y los principios que rigen su diseño y evolución.
```

### 2 — Atributos de Calidad (Requerimientos No Funcionales)

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["calidad", "requerimientos"]

variables:
  es_calidad: verdadero

tipo: vf

respuesta: verdadero

enunciado: "Los atributos de calidad (como la escalabilidad, la seguridad y la disponibilidad) forman parte de los requerimientos no funcionales del sistema. ¿Es esto verdadero?"

explicacion: |
  Correcto. Mientras que los requerimientos funcionales describen qué hace el sistema, los no funcionales (atributos de calidad) describen cómo se comporta el sistema bajo ciertas condiciones.
```

### 3 — Ciclo de Vida del Desarrollo

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["ciclo_de_vida", "procesos"]

tipo: ordenar
opciones_explicitas: ["Análisis de requisitos", "Diseño de arquitectura", "Implementación", "Pruebas y despliegue"]

enunciado: "Ordene las etapas del ciclo de vida de desarrollo de software en un orden lógico secuencial, desde la concepción hasta la entrega."

explicacion: |
  Un flujo estándar comienza con entender qué se necesita (Análisis), diseñar cómo se construirá (Arquitectura/Diseño), escribir el código (Implementación) y verificar que funcione (Pruebas/Despliegue).
respuesta_orden: ["Análisis de requisitos", "Diseño de arquitectura", "Implementación", "Pruebas y despliegue"]
```

### 4 — Patrones de Arquitectura

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["patrones", "arquitectura"]

variables:
  escenario: [[ "Monolítica", "Un solo bloque de código donde todo está interconectado" ], [ "Microservicios", "Un conjunto de servicios pequeños e independientes" ]]
  idx: uno_de([0, 1])

tipo: completar

enunciado: "Si elegimos una arquitectura de tipo {escenario[idx][0]}, el sistema se caracteriza por ser {escenario[idx][1]}."

respuestas_validas:
  - "Un solo bloque de código donde todo está interconectado"
  - "Un conjunto de servicios pequeños e independientes"
respuesta: escenario[idx][1]

explicacion: |
  La arquitectura Monolítica centraliza toda la lógica en una única unidad, mientras que los Microservicios descomponen la aplicación en servicios autónomos que se comunican entre sí.
```

### 5 — Acoplamiento y Cohesión

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["principios", "calidad_codigo"]

tipo: vf

respuesta: falso

enunciado: "En un buen diseño de arquitectura de software, se busca que los componentes tengan un alto acoplamiento y una baja cohesión. ¿Es esto correcto?"

explicacion: |
  Falso. Un buen diseño busca **bajo acoplamiento** (que los componentes dependan poco entre sí) y **alta cohesión** (que cada componente tenga una responsabilidad única y bien definida).
```

### 6 — Patrón Observer en un sistema de notificaciones

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["patrones_de_diseño", "observer"]

variables:
  escenario: uno_de([["Sistema de Clima", "Sensor de Temperatura"], ["App de Bolsa", "Widget de Cotizaciones"], ["Videojuego", "Sistema de Logros"]])

enunciado: "En un sistema de {escenario[0]}, el {escenario[1]} actúa como el 'Subject'. Cuando la temperatura cambia, debe notificar a todos los observadores registrados. Si un observador no está suscrito, no recibirá la actualización."

opciones_explicitas: ["El Subject mantiene una lista de suscriptores", "El Observer decide cuándo notificar al Subject", "El Subject debe conocer la implementación interna de cada Observer"]

respuesta: "El Subject mantiene una lista de suscriptores"
tipo: mc

explicacion: |
  El patrón Observer define una relación de uno a muchos. El 'Subject' mantiene una lista de suscriptados y, ante un cambio de estado, recorre dicha lista llamando al método de actualización de cada uno.
```

### 7 — Dependencias en Arquitectura Hexagonal

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

### 8 — Ciclo de vida del desarrollo (Cascada vs Ágil)

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["metodologias", "sdlc"]

tipo: ordenar
opciones_explicitas: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]
respuesta_orden: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]

enunciado: "En el modelo de Cascada (Waterfall), las fases deben completarse de forma secuencial. Ordena las etapas correctamente:"

explicacion: |
  El modelo en Cascada (Waterfall) es lineal y rígido: no se puede pasar a la fase de implementación sin haber finalizado el diseño y los requerimientos.
```

### 9 — Acoplamiento y Cohesión

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["principios_solid", "cohesion"]

variables:
  modulo: uno_de(["Modulo_Pagos", "Modulo_Usuarios", "Modulo_Inventario"])

enunciado: "Estamos diseñando un sistema para una tienda online. Si el {modulo} contiene funciones para procesar pagos, generar facturas PDF y también para enviar emails de bienvenida, el módulo tiene una ___ baja."

respuestas_validas:
  - "cohesión"

respuesta: "cohesión"
tipo: completar

explicacion: |
  Una baja cohesión ocurre cuando un módulo realiza demasiadas tareas distintas que no están relacionadas entre sí. Un buen diseño busca que cada módulo tenga una responsabilidad única (Single Responsibility Principle).
```

### 10 — Microservicios vs Monolito

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_of_software"
  nivel: "intermedio"
  tags: ["microservicios", "monolito"]

variables:
  escenario_carga: uno_de(["El módulo de pagos recibe 1000 peticiones por segundo, pero el resto del sistema no.", "El módulo de catálogo es muy pesado en memoria, pero el resto es ligero.", "El módulo de búsqueda requiere escalar su CPU constantemente por la alta demanda."])

enunciado: "En un escenario donde {escenario_carga}, una arquitectura de microservicios permite escalar solo el componente afectado, mientras que en un monolito se debe escalar toda la aplicación. ¿Cuál es la principal ventaja de microservicios en este caso?"

opciones_explicitas: ["Escalabilidad selectiva", "Simplicidad de despliegue", "Menor latencia de red"]

respuesta: "Escalabilidad selectiva"
tipo: mc

explicacion: |
  Los microservicios permiten el "Scaling out" dirigido. Si solo un componente tiene carga, solo pagamos por más recursos para ese componente, optimizando costos y recursos.
```

### 11 — Acoplamiento vs Cohesión

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["principios_diseno", "mantenibilidad"]

tipo: mc
opciones_explicitas: ["alta cohesión y bajo acoplamiento", "baja cohesión y alto acoplamiento", "alta cohesión y alto acoplamiento", "baja cohesión y bajo acoplamiento"]
respuesta: "alta cohesión y bajo acoplamiento"

enunciado: "En el diseño de software, para facilitar el mantenimiento buscamos que los módulos tengan:"

explicacion: |
  Una alta cohesión significa que el módulo está enfocado en una sola responsabilidad. Un bajo acoplamiento significa que los módulos están poco interconectados, lo que permite cambiarlos sin afectar al resto del sistema.
```

### 12 — El mito del Monolito vs Microservicios

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["arquitectura", "microservicios"]

enunciado: "¿Es siempre preferible una arquitectura de microservicios sobre una arquitectura monolítica para cualquier proyecto de software?"

respuesta: falso
tipo: vf

explicacion: |
  No siempre. Los microservicios añaden una complejidad operativa significativa (red, latencia, consistencia de datos). Para proyectos pequeños o equipos reducidos, un monolito bien estructurado suele ser más eficiente y menos costoso.
```

### 13 — Ciclo de vida del desarrollo de software

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["metodologias", "sdlc"]

enunciado: "Ordena las fases típicas del ciclo de vida de desarrollo de software (SDLC) desde la concepción hasta el cierre:"

opciones_explicitas: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]

respuesta_orden: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]
tipo: ordenar

explicacion: |
  El flujo lógico comienza entendiendo qué se necesita (Requerimientos), cómo se estructurará (Diseño), escribiendo el código (Implementación), verificando que funcione (Pruebas) y asegurando su vida útil (Mantenimiento).
```

### 14 — Patrones de Diseño: Singleton

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["patrones_de_diseno", "creacionales"]

variables:
  caso_idx: uno_de([0, 1])
  ejemplo: [["gestión de una conexión a una base de datos única", "Singleton"], ["crear diferentes tipos de botones en una interfaz", "Factory"]]

enunciado: "Si un programador necesita asegurar que una clase tenga una única instancia en todo el sistema, está intentando implementar el patrón ___."

respuestas_validas:
  - "Singleton"
  - "Factory"

respuesta: ejemplo[caso_idx][1]
tipo: completar

explicacion: |
  El patrón Singleton garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella, evitando conflictos de recursos como conexiones a bases de datos o archivos de configuración.
```

### 15 — Acoplamiento de Datos vs Acoplamiento de Control

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["acoplamiento", "diseño_estructural"]

variables:
  tipo_acoplamiento: uno_de(["control", "datos"])
  descripcion: [["cuando un módulo le dice a otro exactamente qué hacer y cómo", "control"], ["cuando un módulo solo pasa información necesaria", "datos"]]

enunciado: "Cuando un módulo A le pasa un objeto a un módulo B, pero además le indica a B qué método debe llamar y en qué orden, estamos ante un acoplamiento de {tipo_acoplamiento}."

opciones_explicitas: ["control", "datos"]

respuesta: "control"
tipo: mc

explicacion: |
  El acoplamiento de control es peligroso porque el módulo emisor debe conocer la lógica interna del receptor. El objetivo es evolucionar hacia un acoplamiento de datos, donde solo se intercambie la información necesaria.
```

### 16 — Arquitectura vs Diseño

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["arquitectura", "diseno", "conceptos"]

respuesta: "arquitectura"
tipo: "mc"
opciones_explicitas: ["diseño", "arquitectura", "codificación", "testing"]

enunciado: "Mientras que el diseño de software se enfoca en los detalles de algoritmos y estructuras de datos internas, la ___ se ocupa de la estructura global y las decisiones de alto nivel del sistema."

explicacion: |
  La arquitectura define la estructura macro (componentes, interacciones y patrones), mientras que el diseño se encarga de la micro-estructura (lógica interna de los componentes).
```

### 17 — Acoplamiento y Cohesión

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["acoplamiento", "cohesion"]

tipo: vf
respuesta: verdadero

enunciado: "En un sistema con buen diseño, buscamos que el acoplamiento sea bajo y la cohesión sea alta."

explicacion: |
  Un bajo acoplamiento minimiza la dependencia entre módulos, facilitando cambios. Una alta cohesión asegura que cada módulo tenga una responsabilidad única y clara.
```

### 18 — Monolito vs Microservicios

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["monolito", "microservicios", "despliegue"]

respuesta: "microservicios"
tipo: "completar"
respuestas_validas:
  - "microservicios"

enunciado: "A diferencia de una arquitectura de tipo ___, donde todos los componentes están en un único paquete desplegable, la arquitectura de ___ divide la aplicación en servicios independientes que se comunican por red."

explicacion: |
  Los microservicios permiten escalar partes específicas del sistema de forma independiente, algo que en un monolito requiere escalar toda la aplicación.
```

### 19 — Patrones de Arquitectura

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["capas", "arquitectura", "orden"]

respuesta_orden: ["Presentación", "Lógica de Negocio", "Acceso a Datos"]
tipo: "ordenar"
opciones_explicitas: ["Acceso a Datos", "Lógica de Negocio", "Presentación"]

enunciado: "Ordene las capas de una arquitectura clásica en capas (N-Tier) desde la más cercana al usuario hasta la más cercana a la base de datos:"

explicacion: |
  La capa de Presentación maneja la interfaz, la de Lógica de Negocio procesa las reglas y la de Acceso a Datos gestiona la persistencia.
```

### 20 — Calidad de Software

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["atributos", "calidad", "mantenibilidad"]

respuesta: "mantenibilidad"
tipo: "mc"
opciones_explicitas: ["rendimiento", "mantenibilidad", "usabilidad", "seguridad"]

enunciado: "Un sistema puede ser muy rápido (alto rendimiento), pero si su arquitectura es desordenada y difícil de modificar, carece de buena ___."

explicacion: |
  La mantenibilidad es la facilidad con la que un sistema puede ser modificado para corregir errores, mejorar el rendimiento o adaptarse a nuevos requisitos.
```

### 21 — Elección de patrón de arquitectura

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["arquitectura", "patrones"]

variables:
  escenario: uno_de([["Se requiere un sistema donde la interfaz de usuario y la lógica de negocio estén totalmente desacopladas para permitir múltiples vistas (web, móvil, CLI) usando el mismo núcleo.", "MVC"], ["Se requiere un sistema donde las componentes se comuniquen mediante eventos asíncronos para garantizar un desacoplamiento máximo entre productores y consumidores.", "Event-Driven"], ["Se requiere un sistema basado en servicios independientes que se comunican por red, permitiendo escalar cada componente de forma autónoma.", "Microservicios"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["MVC", "Event-Driven", "Microservicios", "Monolito"]

enunciado: "Un arquitecto de software debe elegir la estructura para un proyecto con las siguientes características: {escenario[0]}"

explicacion: |
  El patrón seleccionado es {escenario[1]}. Cada patrón responde a necesidades específicas de escalabilidad, desacoplamiento o complejidad de interfaz.
```

### 22 — Principio de responsabilidad única

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["principios_solid", "refactorizacion"]

variables:
  caso: uno_de([["Una clase 'Factura' que calcula el total, guarda en la base de datos y genera un PDF.", "Falso"], ["Una clase 'Usuario' que contiene solo los atributos de datos y métodos de acceso.", "Verdadero"]])

respuesta: caso[1]
tipo: completar
enunciado: "Analice el siguiente caso: {caso[0]}. ¿Cumple esta clase con el Principio de Responsabilidad Única (SRP)? (Verdadero/Falso)"

explicacion: |
  El valor es {caso[1]}. El SRP establece que una clase debe tener una, y solo una, razón para cambiar.
```

### 23 — Flujo de datos en capas

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["capas", "arquitectura_n_capas"]

tipo: ordenar

opciones_explicitas: ["Presentación", "Negocio", "Acceso a Datos", "Base de Datos"]
respuesta_orden: ["Presentación", "Negocio", "Acceso a Datos", "Base de Datos"]

enunciado: "Ordene las capas de un sistema de software estándar desde la capa más externa (usuario) hasta la más interna (almacenamiento):"

explicacion: |
  El orden correcto es: Presentación, Negocio, Acceso a Datos y Base de Datos. La arquitectura en capas busca separar la lógica de presentación de la lógica de negocio y el acceso a datos.
```

### 24 — Acoplamiento y Cohesión

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["calidad_codigo", "acoplamiento", "cohesion"]

variables:
  caso_estudio: uno_de([["Un módulo que tiene funciones muy relacionadas entre sí pero que depende fuertemente de variables globales de otros módulos.", "Baja Cohesion, Alto Acoplamiento"], ["Un módulo con funciones diversas que no tienen relación entre sí, pero que son independientes de otros sistemas.", "Alta Cohesion, Bajo Acoplamiento"]])

respuesta: caso_estudio[1]
tipo: completar
respuestas_validas:
  - "Baja Cohesion, Alto Acoplamiento"
  - "Alta Cohesion, Bajo Acoplamiento"

enunciado: "En el diseño de software, el caso descrito es: ___"

explicacion: |
  El diagnóstico es {caso_estudio[1]}. Un buen diseño busca Maximizar la Cohesión y Minimizar el Acoplamiento.
```

### 25 — Identificación de deuda técnica

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["mantenibilidad", "deuda_tecnica"]

variables:
  escenario: uno_de([["Se decide omitir la creación de tests unitarios y la documentación de la arquitectura para cumplir con una fecha de entrega inmediata.", "Verdadero"], ["Se implementa un patrón de diseño robusto y se realiza una revisión de arquitectura antes de cada sprint.", "Falso"]])

respuesta: escenario[1]
tipo: completar
enunciado: "¿Es cierto que el siguiente escenario representa la acumulación de deuda técnica?: {escenario[0]} (Verdadero/Falso)"

explicacion: |
  La respuesta es {escenario[1]}. La deuda técnica surge cuando se prioriza la rapidez sobre la calidad del diseño y la estructura del código.
```
