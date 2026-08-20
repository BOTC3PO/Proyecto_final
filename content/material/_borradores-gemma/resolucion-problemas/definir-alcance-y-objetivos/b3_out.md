### 1 — El error de la ambigüedad en objetivos
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["objetivos", "metodologia", "errores"]

respuesta: "SMART"
tipo: completar
respuestas_validas: ["SMART", "smart"]

enunciado: "Para evitar la ambigüedad, los objetivos de un proyecto deben seguir la metodología ___ (específicos, medibles, alcanzables, relevantes y con un tiempo definido)."

explicacion: |
  Un objetivo mal definido es vago (ej: "mejorar el servicio"). Un objetivo SMART permite medir el éxito del proyecto al final del mismo.
```

### 2 — Alcance vs. Deseos del cliente
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["alcance", "gestion_proyectos"]

variables:
  escenario: uno_de([
    ["El cliente pide una app de delivery", "incluye el módulo de pagos"],
    ["El cliente pide una web corporativa", "incluye el diseño de logo"],
    ["El cliente pide un software contable", "incluye la migración de datos"]
  ])

opciones_explicitas: ["Incluido en el alcance", "No incluido en el alcance"]

respuesta: escenario[0][1]
tipo: mc

enunciado: "Si el documento de alcance define que el proyecto es 'Desarrollo de una aplicación de delivery' pero no menciona explícitamente la integración de pasarelas de pago, el ítem '{escenario[0][0]}' se considera: ___"

explicacion: |
  El alcance debe ser explícito. Si algo no está listado como entregable o actividad, se considera fuera del alcance (out of scope) para evitar el 'scope creep'.
```

### 3 — Verdadero o Falso: La naturaleza de los objetivos
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["objetivos", "teoria"]

respuesta: falso
tipo: vf

enunciado: "Los objetivos de un proyecto son los medios o las actividades que se realizan para alcanzar el fin último. ¿Verdadero o Falso?"

explicacion: |
  Falso. Los objetivos son los fines o resultados esperados. Las actividades y medios son los pasos para alcanzar esos objetivos. Confundirlos lleva a gestionar tareas en lugar de resultados.
```

### 4 — El proceso de definición de alcance
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

opciones_explicitas: ["Identificar necesidades", "Definir entregables", "Validar con stakeholders", "Establecer exclusiones"]

respuesta: ["Identificar necesidades", "Definir entregables", "Validar con stakeholders", "Establecer exclusiones"]
tipo: ordenar

enunciado: "Ordena cronológicamente las etapas lógicas para establecer un alcance de proyecto sólido:"

explicacion: |
  Primero se entiende qué se necesita, luego qué se va a entregar, se consulta con los interesados para validar y finalmente se deja claro qué NO se va a hacer (exclusiones).
```

### 5 — La trampa del 'Scope Creep'
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "avanzado"
  tags: ["riesgos", "alcance"]

variables:
  caso: uno_de([
    ["El cliente solicita un botón extra sin cambiar el presupuesto ni el tiempo", "Aumenta el costo y el tiempo"],
    ["El cliente solicita un cambio de color en el logo sin afectar el cronograma", "No afecta el alcance"],
    ["El cliente pide una funcionalidad nueva a mitad del desarrollo sin renegociar", "Aumenta el costo y el tiempo"]
  ])

opciones_explicitas: ["No afecta el alcance", "Aumenta el costo y el tiempo"]

respuesta: caso[0][1]
tipo: mc

enunciado: "En el escenario donde '{caso[0][0]}', el fenómeno conocido como 'Scope Creep' (corrimiento del alcance) provoca que: ___"

explicacion: |
  El Scope Creep ocurre cuando el alcance crece de forma descontrolada sin los ajustes correspondientes en recursos, tiempo o presupuesto, poniendo en riesgo el éxito del proyecto.
```