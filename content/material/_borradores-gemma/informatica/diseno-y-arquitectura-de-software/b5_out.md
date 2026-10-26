### 1 — Elección de patrón de arquitectura
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["arquitectura", "patrones"]

variables:
  escenario: uno_de([
    ["Se requiere un sistema donde la interfaz de usuario y la lógica de negocio estén totalmente desacopladas para permitir múltiples vistas (web, móvil, CLI) usando el mismo núcleo.", "MVC"],
    ["Se requiere un sistema donde las componentes se comuniquen mediante eventos asíncronos para garantizar un desacoplamiento máximo entre productores y consumidores.", "Event-Driven"],
    ["Se requiere un sistema basado en servicios independientes que se comunican por red, permitiendo escalar cada componente de forma autónoma.", "Microservicios"]
  ])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["MVC", "Event-Driven", "Microservicios", "Monolito"]

enunciado: "Un arquitecto de software debe elegir la estructura para un proyecto con las siguientes características: {escenario[idx][0]}"

explicacion: |
  El patrón seleccionado es {escenario[idx][1]}. Cada patrón responde a necesidades específicas de escalabilidad, desacoplamiento o complejidad de interfaz.
```

### 2 — Principio de responsabilidad única
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["principios_solid", "refactorizacion"]

variables:
  clase_problematica: uno_de([
    ["Una clase 'Factura' que calcula el total, guarda en la base de datos y genera un PDF.", "Falso"],
    ["Una clase 'Usuario' que contiene solo los atributos de datos y métodos de acceso.", "Verdadero"]
  ])
  idx: uno_de([0,1])

respuesta: clase_problematica[idx][1]
tipo: vf

enunciado: "Analice el siguiente caso: {clase_problematica[idx][0]}. ¿Cumple esta clase con el Principio de Responsabilidad Única (SRP)?"

explicacion: |
  El valor es {clase_problematica[idx][1]}. El SRP establece que una clase debe tener una, y solo una, razón para cambiar.
```

### 3 — Flujo de datos en capas
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["capas", "arquitectura_n_capas"]

variables:
  capas_orden: [
    ["Presentación", "Negocio", "Acceso a Datos", "Base de Datos"],
    ["Interfaz", "Lógica", "Persistencia", "Almacenamiento"],
    ["UI", "Domain", "Data Access", "DB"]
  ]
  idx: uno_de([0,1,2])

respuesta: capas_orden[idx]
tipo: ordenar

opciones_explicitas: ["Presentación", "Negocio", "Acceso a Datos", "Base de Datos", "Interfaz", "Lógica", "Persistencia", "Almacenamiento", "UI", "Domain", "Data Access", "DB"]

enunciado: "Ordene las capas de un sistema de software estándar desde la capa más externa (usuario) hasta la más interna (almacenamiento) según el modelo de {capas_orden[idx][0]}."

explicacion: |
  El orden correcto para este modelo es {capas_orden[idx]}. La arquitectura en capas busca separar la lógica de presentación de la lógica de negocio y el acceso a datos.
```

### 4 — Acoplamiento y Cohesión
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["calidad_codigo", "acoplamiento", "cohesion"]

variables:
  caso_estudio: uno_de([
    ["Un módulo que tiene funciones muy relacionadas entre sí pero que depende fuertemente de variables globales de otros módulos.", "Baja Cohesion, Alto Acoplamiento"],
    ["Un módulo con funciones diversas que no tienen relación entre sí, pero que son independientes de otros sistemas.", "Alta Cohesion, Bajo Acoplamiento"]
  ])
  idx: uno_de([0,1])

respuesta: caso_estudio[idx][1]
tipo: completar
respuestas_validas: ["Baja Cohesion, Alto Acoplamiento", "Alta Cohesion, Bajo Acoplamiento"]

enunciado: "En el diseño de software, el caso descrito es: ___"

explicacion: |
  El diagnóstico es {caso_estudio[idx][1]}. Un buen diseño busca Maximizar la Cohesión y Minimizar el Acoplamiento.
```

### 5 — Identificación de deuda técnica
```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["mantenibilidad", "deuda_tecnica"]

variables:
  escenario_deuda: uno_de([
    ["Se decide omitir la creación de tests unitarios y la documentación de la arquitectura para cumplir con una fecha de entrega inmediata.", "Verdadero"],
    ["Se implementa un patrón de diseño robusto y se realiza una revisión de arquitectura antes de cada sprint.", "Falso"]
  ])
  idx: uno_de([0,1])

respuesta: escenario_deuda[idx][1]
tipo: vf

enunciado: "¿Es cierto que el siguiente escenario representa la acumulación de deuda técnica?: {escenario_deuda[idx][0]}"

explicacion: |
  La respuesta es {escenario_deuda[idx][1]}. La deuda técnica surge cuando se prioriza la rapidez sobre la calidad del diseño y la estructura del código.
```