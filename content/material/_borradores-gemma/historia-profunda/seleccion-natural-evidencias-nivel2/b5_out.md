### 1 — Evidencias de la evolución
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["evidencias", "evolucion"]

variables:
  escenario: uno_de([["Las alas de un murciélago y las aletas de una ballena tienen la misma estructura ósea básica pero funciones distintas.", "homologia"], ["Las alas de una mariposa y las alas de un ave cumplen la misma función pero tienen estructuras de origen distinto.", "analogia"], ["Se encuentran restos óseos de un animal extinto que muestra una transición entre reptiles y aves.", "fosil"]])
  idx: uno_de([0,1,2])

enunciado: "El ejemplo descrito: '{escenario[idx][0]}' representa una evidencia de tipo: ___"

respuestas_validas: ["homologia", "analogia", "fosil"]
respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  La respuesta correcta es {escenario[idx][1]}. 
  - Homología: estructuras con origen común pero distinta función.
  - Analogía: estructuras con función similar pero origen distinto (convergencia).
  - Fósiles: restos de organismos que vivieron en el pasado.
```

### 2 — Comparación de estructuras
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["homologia", "analogia"]

variables:
  escenario: uno_de([["alas de insectos vs alas de aves", "analogia"], ["brazo humano vs pata de gato", "homologia"]])
  idx: uno_de([0,1])

enunciado: "Si comparamos {escenario[idx][0]}, estamos ante un caso de: ___"

respuestas_validas: ["analogia", "homologia"]
respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  La relación entre {escenario[idx][0]} es de {escenario[idx][1]}.
```

### 3 — Clasificación de evidencias
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "basico"
  tags: ["evidencias"]

variables:
  ejemplo: uno_de([["Órganos vestigiales", "anatomia"], ["Pruebas moleculares (ADN)", "molecular"], ["Restos de impresiones en roca", "paleontologia"]])
  idx: uno_de([0,1,2])

enunciado: "El ejemplo '{ejemplo[idx][0]}' pertenece a la categoría de evidencia: ___"

respuestas_validas: ["anatomia", "molecular", "paleontologia"]
respuesta: ejemplo[idx][1]
tipo: completar

explicacion: |
  La clasificación para {ejemplo[idx][0]} es {ejemplo[idx][1]}.
```

### 4 — Identificación de analogía
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["analogia"]

variables:
  caso: uno_de([["Aletas de delfín y aletas de tiburón", "analogia"], ["Pata de caballo y ala de murciélago", "homologia"]])
  idx: uno_de([0,1])

enunciado: "Analizando {caso[idx][0]}, el concepto evolutivo es: ___"

opciones_explicitas: ["analogia", "homologia"]
respuesta: caso[idx][1]
tipo: mc

explicacion: |
  Se ha identificado el caso como {caso[idx][1]}.
```

### 5 — Orden de procesos evolutivos
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "avanzado"
  tags: ["procesos"]

variables:
  pasos_correctos: ["variacion", "presion_ambiental", "reproduccion_diferencial", "adaptacion"]

enunciado: "Ordena correctamente las etapas de un proceso de selección natural:"

opciones_explicitas: ["variacion", "presion_ambiental", "reproduccion_diferencial", "adaptacion"]
respuesta: ["variacion", "presion_ambiental", "reproduccion_diferencial", "adaptacion"]
tipo: ordenar

explicacion: |
  El proceso sigue la secuencia: 1. {pasos_correctos[0]}, 2. {pasos_correctos[1]}, 3. {pasos_correctos[2]} y finalmente 4. {pasos_correctos[3]}.
```