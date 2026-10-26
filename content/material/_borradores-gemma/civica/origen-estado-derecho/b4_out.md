### 1 — El contrato social y la seguridad
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["contrato_social", "seguridad"]

variables:
  escenario: uno_de([["un estado de naturaleza sin leyes", "la inseguridad constante"], ["un sistema de normas claras", "la convivencia pacífica"]])
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: mc

opciones_explicitas: ["la inseguridad constante", "la convivencia pacífica"]

enunciado: "Según la teoría del contrato social, el paso del estado de naturaleza al Estado busca evitar {escenario[idx][0]}."

explicacion: |
  El Estado surge para garantizar la seguridad y la vida de los ciudadanos, evitando el caos o la violencia constante propia de un estado de naturaleza sin autoridad central.
```

### 2 — Funciones del Estado
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["funciones_estado", "bienes_colectivos"]

respuesta: "provisión de bienes colectivos"
tipo: completar
respuestas_validas: ["provisión de bienes colectivos"]

enunciado: "Una de las funciones fundamentales del Estado es la __________, que consiste en ofrecer servicios que no pueden ser provistos de manera eficiente por el mercado individualmente, como la infraestructura o la salud pública."

pasos:
  - "Identificar la función que atiende necesidades de la comunidad."
  - "Diferenciar entre bienes privados y bienes de uso público."

explicacion: |
  El Estado interviene para proveer bienes colectivos (como alumbrado, carreteras o defensa) que son esenciales para la sociedad pero que el sector privado no siempre cubre por su naturaleza no excluyente.
```

### 3 — Resolución de conflictos
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["justicia", "conflictos"]

respuesta: "Poder Judicial"
tipo: mc

opciones_explicitas: ["Poder Judicial", "Poder Ejecutivo", "Poder Legislativo"]

enunciado: "Para garantizar la resolución pacífica de conflictos entre ciudadanos, el Estado delega esta función en el:"

explicacion: |
  El Estado monopoliza el uso de la fuerza y la administración de justicia para que los conflictos se resuelvan mediante leyes y tribunales, y no mediante la venganza privada.
```

### 4 — El sostenimiento del Estado
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["recaudación", "impuestos"]

variables:
  tipo_recaudacion: uno_de(["impuestos", "tasas"])

respuesta: tipo_recaudacion

tipo: mc

opciones_explicitas: ["impuestos", "tasas", "contribuciones"]

enunciado: "Para poder cumplir con sus funciones de defensa, seguridad y provisión de servicios, el Estado requiere de la __________, que es la principal herramienta de recaudación de recursos."

explicacion: |
  La recaudación fiscal es el mecanismo mediante el cual el Estado obtiene los recursos necesarios para financiar el gasto público y el bienestar general.
```

### 5 — Orden de surgimiento de funciones
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "avanzado"
  tags: ["secuencia", "funciones"]

respuesta: ["Seguridad y Defensa", "Resolución de Conflictos", "Provisión de Bienes Colectivos", "Recaudación Fiscal"]
tipo: ordenar

opciones_explicitas: ["Seguridad y Defensa", "Resolución de Conflictos", "Provisión de Bienes Colectivos", "Recaudación Fiscal"]

enunciado: "Ordene las funciones del Estado siguiendo un orden lógico de prioridad histórica y de necesidad para la consolidación de la soberanía estatal:"

explicacion: |
  Históricamente, la prioridad es la supervivencia (seguridad/defensa), seguida por la estabilidad social (resolución de conflictos), luego la organización de la vida común (bienes colectivos) y finalmente la estructura financiera para sostener todo lo anterior (recaudación).
```