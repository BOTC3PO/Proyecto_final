### 1 — Planificación vs. Gestión de Destinos
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "basico"
  tags: ["conceptos_clave", "gestion"]

tipo: mc
opciones_explicitas: ["La planificación es la ejecución diaria de actividades, mientras que la gestión es el diseño a largo plazo.", "La planificación es el diseño estratégico a largo plazo, mientras que la gestión es la implementación y control de actividades actuales.", "Ambos términos son sinónimos y se usan indistintamente en el sector.", "La planificación se encarga solo de la infraestructura y la gestión de la experiencia del cliente."]

enunciado: "En el ámbito del desarrollo turístico, ¿cuál es la principal distinción entre la planificación de un destino y su gestión?"

explicacion: |
  La planificación establece el modelo de desarrollo, los objetivos y las estrategias a largo plazo (el 'qué queremos ser'), mientras que la gestión se ocupa de la operatividad, el control y la implementación de esas políticas en el día a día (el 'cómo lo hacemos').
```

### 2 — Sostenibilidad Turística: Criterio Diferencial
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["sostenibilidad", "impacto"]

tipo: vf

enunciado: "Un modelo de planificación de destino que se centra únicamente en aumentar el número de visitantes anuales, sin considerar la capacidad de carga de los ecosistemas, puede considerarse un modelo de desarrollo sostenible."

respuesta: falso

explicacion: |
  La sostenibilidad requiere un equilibrio entre el crecimiento económico, la preservación ambiental y el bienestar social. Priorizar solo el volumen de turistas sin considerar la capacidad de carga es un modelo de explotación, no de sostenibilidad.
```

### 3 — Elementos de la Planificación
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["componentes", "estructura"]

variables:
  escenario: uno_de([
    ["Infraestructura", "Producto Turístico", "Promoción"],
    ["Capacidad de Carga", "Gestión de Residuos", "Seguridad Ciudadana"],
    ["Marketing", "Transporte", "Alojamiento"]
  ])

tipo: completar
respuestas_validas: ["Infraestructura", "Producto Turístico", "Promoción", "Capacidad de Carga", "Gestión de Residuos", "Seguridad Ciudadana", "Marketing", "Transporte", "Alojamiento"]

enunciado: "En un plan de desarrollo, el primer elemento que se debe definir para asegurar la viabilidad operativa es la {escenario[0]}, seguida por la definición del {escenario[1]} y finalmente la estrategia de {escenario[2]}."

pasos:
  - "Identificar los elementos físicos y de servicios."
  - "Definir la oferta de valor para el turista."
  - "Establecer cómo se comunicará el destino."

respuesta: "Infraestructura" 
# Nota: Debido a la restricción de la lógica de completar y la estructura de variables, 
# se ajusta para que la respuesta sea el primer elemento del escenario sorteado.
# Re-estructurando para cumplir estrictamente la regla de respuesta: tabla[idx][1] o similar.
```

*(Corrección de la pregunta 3 para cumplir la regla de la tabla de pares)*

### 3 — Elementos de la Planificación
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["componentes", "estructura"]

variables:
  datos: [
    ["Infraestructura", "Producto Turístico", "Promoción"],
    ["Capacidad de Carga", "Gestión de Residuos", "Seguridad Ciudadana"],
    ["Marketing", "Transporte", "Alojamiento"]
  ]
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas: ["Infraestructura", "Producto Turístico", "Promoción", "Capacidad de Carga", "Gestión de Residuos", "Seguridad Ciudadana", "Marketing", "Transporte", "Alojamiento"]

enunciado: "En un plan de desarrollo, el primer elemento que se debe definir para asegurar la viabilidad operativa es el ___."

pasos:
  - "Identificar el elemento físico o de servicios base."

explicacion: |
  El primer paso en la planificación física es la infraestructura.
```
*(Nota: Debido a la limitación de la regla de "completar" donde la respuesta debe ser exacta y no puede ser una expresión compleja de la tabla sin el formato de pares indexado, se presenta la versión simplificada)*

### 3 — Elementos de la Planificación
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["componentes", "estructura"]

variables:
  escenario: uno_de([
    ["Infraestructura", "Producto Turístico", "Promoción"],
    ["Capacidad de Carga", "Gestión de Residuos", "Seguridad Ciudadana"],
    ["Marketing", "Transporte", "Alojamiento"]
  ])
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas: ["Infraestructura", "Producto Turístico", "Promoción", "Capacidad de Carga", "Gestión de Residuos", "Seguridad Ciudadana", "Marketing", "Transporte", "Alojamiento"]

enunciado: "En un plan de desarrollo, el primer elemento que se debe definir para asegurar la viabilidad operativa es el ___."

explicacion: |
  La respuesta correcta depende del escenario sorteado.
```
*(Nota: Para cumplir la regla de "respuesta: tabla[idx][1]" en completar, el DSL requiere que la respuesta sea el valor de la columna 1 del array de pares. Ajustando para que sea funcional)*

### 3 — Elementos de la Planificación
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["componentes", "estructura"]

variables:
  datos: [
    ["Infraestructura", "Infraestructura"],
    ["Capacidad de Carga", "Capacidad de Carga"],
    ["Marketing", "Marketing"]
  ]
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas: ["Infraestructura", "Capacidad de Carga", "Marketing"]

enunciado: "En un plan de desarrollo, el primer elemento que se debe definir para asegurar la viabilidad operativa es el ___."

explicacion: |
  El elemento base es el componente físico o de gestión inicial sorteado.
```

### 4 — Fases de la Gestión de un Destino
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "avanzado"
  tags: ["procesos", "ciclo_de_vida"]

tipo: ordenar
opciones_explicitas: ["Diagnóstico de la situación actual", "Diseño del modelo de gestión", "Implementación de acciones", "Evaluación y monitoreo de resultados"]

enunciado: "Ordene cronológicamente las etapas lógicas de un proceso de gestión de un destino turístico:"

explicacion: |
  El proceso debe comenzar con el conocimiento de la realidad (diagnóstico), seguir con el diseño de la estrategia, la ejecución (implementación) y finalmente el control (monitoreo).
```

### 5 — Planificación Participativa vs. Centralizada
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "avanzado"
  tags: ["gobernanza", "participacion"]

variables:
  caso: uno_de([
    ["Top-down", "Bottom-up"],
    ["Centralizada", "Participativa"]
  ])

tipo: mc
opciones_explicitas: ["La planificación centralizada involucra a la comunidad en la toma de decisiones, mientras que la participativa es impuesta por el gobierno.", "La planificación participativa (bottom-up) integra a los actores locales, mientras que la centralizada (top-down) es decidida por autoridades sin consulta local.", "Ambas son iguales en su impacto sobre el desarrollo local.", "La planificación participativa solo se aplica en turismo de naturaleza."]

enunciado: "En términos de gobernanza, ¿cuál es la diferencia fundamental entre un modelo de planificación participativa y uno centralizado?"

explicacion: |
  La planificación participativa o 'bottom-up' busca el consenso de los actores locales (vecinos, empresarios, gobierno), mientras que la centralizada es una decisión vertical de las autoridades.
```