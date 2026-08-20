### 1 — Identificación de centros de detención
```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["dictadura", "derechos_humanos", "argentina"]

opciones_explicitas: ["ESMA", "El Campito", "La Perla", "Todos los anteriores"]

respuesta: "Todos los anteriores"
tipo: mc

enunciado: "Durante la última dictadura militar en Argentina, se utilizaron diversos Centros Clandestinos de Detención (CCD). ¿Cuál de los siguientes fue un centro de detención conocido?"

explicacion: |
  Tanto la ESMA (Escuela de Mecánica de la Armada) como El Campito y La Perla fueron centros fundamentales donde se practicó la detención ilegal y la tortura.
```

### 2 — El rol de las fuerzas armadas
```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["dictadura", "derechos_humanos"]

opciones_explicitas: ["legal", "clandestino"]

respuesta: "clandestino"
tipo: mc

enunciado: "Los centros utilizados para la detención, tortura y desaparición de personas durante la dictadura militar se denominaban centros de detención ___."

explicacion: |
  Se llamaban "clandestinos" porque operaban fuera de todo marco legal, sin orden judicial y ocultando la existencia de los detenidos.
```

### 3 — El proceso de desaparición
```
metadata:
  materia: "historia"
  tema: "terrorismo_oficial_estado"
  nivel: "avanzado"
  tags: ["derechos_humanos", "memoria"]

variables:
  escenario_idx: uno_de([0, 1])

enunciado: "En el contexto de la represión, el proceso de 'desaparición' implicaba que la persona era trasladada a un centro donde su paradero era ___."

pasos:
  - "La víctima era secuestrada por fuerzas de seguridad."
  - "Se le negaba el acceso a la justicia y a su familia."

respuesta: [["desconocido", "negado"], ["oculto", "negado"]][escenario_idx[0]]
tipo: completar
respuestas_validas: [["desconocido", "negado"], ["oculto", "negado"]]

explicacion: |
  La sistemática de la desaparición forzada buscaba que el Estado pudiera negar la responsabilidad sobre el destino de las víctimas.
```

### 4 — La jerarquía del terror
```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["dictadura", "instituciones"]

opciones_explicitas: ["El Estado", "Las Fuerzas Armadas", "La Justicia", "El Congreso"]

respuesta: "Las Fuerzas Armadas"
tipo: mc

enunciado: "¿Qué institución ejerció el control operativo y la gestión de la represión mediante los centros clandestinos de detención?"

explicacion: |
  Si bien el Estado como estructura permitió el terrorismo, la ejecución directa en los CCD fue responsabilidad de las Fuerzas Armadas y de Seguridad.
```

### 5 — Secuencia de la represión
```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["derechos_humanos", "memoria"]

opciones_explicitas: ["Secuestro", "Detención en CCD", "Desaparición/Eliminación"]

respuesta: ["Secuestro", "Detención en CCD", "Desaparición/Eliminación"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas típicas de una operación de represión sistemática aplicada por la dictadura:"

explicacion: |
  El ciclo comenzaba con el secuestro en la vía pública o domicilios, seguido por la internación en un centro clandestino y culminaba con la desaparición definitiva de la persona.
```