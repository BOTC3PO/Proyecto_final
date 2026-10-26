### 1 — Naturaleza de la memoria RAM
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["memoria", "ram", "volatil"]

respuesta: falso
tipo: vf

enunciado: "La memoria RAM es un tipo de almacenamiento no volátil, lo que significa que la información se mantiene guardada aunque se apague el ordenador."

explicacion: |
  La memoria RAM es volátil; su contenido se pierde por completo cuando la corriente eléctrica deja de fluir.
```

### 2 — Clasificación de dispositivos
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["clasificacion", "disco_duro", "ssd"]

variables:
  escenario: uno_de([["Disco Duro (HDD)", "No volátil"], ["Memoria RAM", "Volátil"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["No volátil", "Volátil"]

enunciado: "Considerando el dispositivo {escenario[0]}, su característica principal respecto a la persistencia de datos es que es ___."

explicacion: |
  El {escenario[0]} es un dispositivo de almacenamiento secundario y, por lo tanto, es {escenario[1]}.
```

### 3 — El proceso de carga de archivos
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["flujo_datos", "ram", "disco"]

respuesta: ["Disco Duro", "Memoria RAM", "Procesador"]
tipo: ordenar

opciones_explicitas: ["Disco Duro", "Memoria RAM", "Procesador"]

enunciado: "Ordena el flujo lógico de datos cuando el usuario abre un archivo para trabajar con él:"

pasos:
  - "El archivo reside permanentemente en el..."
  - "Para ser procesado, el archivo se carga en la..."
  - "Finalmente, los datos pasan a la unidad de..."

explicacion: |
  Los datos se extraen del almacenamiento no volátil (Disco Duro) hacia la memoria de trabajo (RAM) para que el procesador pueda acceder a ellos rápidamente.
```

### 4 — El concepto de persistencia
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["terminologia", "persistente"]

respuesta: "persistencia"
tipo: completar
respuestas_validas: ["persistencia", "permanencia"]

enunciado: "La capacidad de un medio de almacenamiento para mantener la información sin necesidad de suministro eléctrico se denomina ___."

explicacion: |
  La ___ es la característica que define a los medios no volátiles como los SSD o los discos duros.
```

### 5 — Comparativa de velocidad y uso
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["rendimiento", "comparativa"]

variables:
  caso: uno_de([[0, "Memoria RAM", "Alta velocidad, poca capacidad"], [1, "Disco SSD", "Velocidad media, mayor capacidad"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["Alta velocidad, poca capacidad", "Velocidad media, mayor capacidad"]

enunciado: "Si comparamos el dispositivo {caso[1]} con un disco duro mecánico, su característica distintiva es que posee una {caso[2]}."

explicacion: |
  En este escenario, estamos comparando la velocidad y capacidad relativa de un SSD frente a un HDD.
```