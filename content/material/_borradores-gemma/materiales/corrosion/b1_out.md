### 1 — Definición de corrosión
```
metadata:
  materia: "materiales"
  tema: "corrosion_basica"
  nivel: "basico"
  tags: ["definicion", "deterioro"]

respuesta: "deterioro"
tipo: completar
respuestas_validas: ["deterioro"]

enunciado: "La corrosión se define como el proceso de ___ de un material, generalmente un metal, debido a una reacción química o electroquímica con su entorno."

explicacion: |
  La corrosión es el proceso de deterioro de un material (comúnmente metales) causado por la interacción con el medio ambiente.
```

### 2 — Factores de corrosión
```
metadata:
  materia: "materiales"
  tema: "corrosion_factores"
  nivel: "basico"
  tags: ["factores", "ambiente"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[["humedad alta", "oxidación rápida"], ["humedad baja", "oxidación lenta"]]]

respuesta: uno_de(["oxidación rápida", "oxidación lenta"])
tipo: mc
opciones_explicitas: ["oxidación rápida", "oxidación lenta", "ausencia de reacción", "estabilidad química"]

enunciado: "En un ambiente con {escenarios[escenario_idx][0]}, la velocidad de corrosión suele resultar en una {escenarios[escenario_idx][1]}."

explicacion: |
  La presencia de electrolitos (como el agua o humedad) acelera drásticamente los procesos de corrosión electroquímica.
```

### 3 — Naturaleza del proceso
```
metadata:
  materia: "materiales"
  tema: "corrosion_naturaleza"
  nivel: "basico"
  tags: ["electroquimica", "reaccion"]

respuesta: verdadero
tipo: vf

enunciado: "¿La corrosión es un proceso que implica una transferencia de electrones entre el metal y el entorno?"

explicacion: |
  Verdadero. La corrosión electroquímica requiere un ánodo (donde se oxidan los átomos del metal) y un cátodo (donde se reduce el agente oxidante).
```

### 4 — Productos de la corrosión
```
metadata:
  materia: "materiales"
  tema: "corrosion_productos"
  nivel: "basico"
  tags: ["productos", "capas"]

respuesta: "capa protectora"
tipo: completar
respuestas_validas: ["capa protectora", "capa destructiva"]

enunciado: "Cuando el producto de la corrosión es denso y adherente, puede actuar como una ___ que reduce la velocidad de degradación. Si es poroso, el proceso continúa."

explicacion: |
  La morfología del producto de corrosión es clave: una capa pasivante o protectora limita el acceso de reactivos al metal base.
```

### 5 — Componentes del sistema corrosivo
```
metadata:
  materia: "materiales"
  tema: "corrosion_componentes"
  nivel: "intermedio"
  tags: ["celda", "electrodo"]

respuesta: ["Ánodo", "Cátodo", "Electrolito", "Conexión eléctrica"]
tipo: ordenar

opciones_explicitas: ["Ánodo", "Cátodo", "Electrolito", "Conexión eléctrica"]

enunciado: "Para que ocurra una celda de corrosión electroquímica, se deben establecer los siguientes elementos en un orden lógico de flujo de electrones y iones:"

explicacion: |
  Un sistema de corrosión requiere un sitio de oxidación (ánodo), uno de reducción (cátodo), un medio conductor (electrolito) y un camino para los electrones.
```