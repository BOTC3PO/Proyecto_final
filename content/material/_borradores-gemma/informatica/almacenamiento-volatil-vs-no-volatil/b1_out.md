### 1 — Concepto de volatilidad
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["memoria", "hardware", "conceptos"]

tipo: mc
opciones_explicitas: ["Memoria volátil", "Memoria no volátil", "Procesador", "Bus de datos"]

enunciado: "La característica que define a una memoria como 'volátil' es que su contenido se pierde cuando se corta el suministro de ___."

respuesta: "Memoria volátil"

explicacion: |
  La memoria volátil (como la RAM) requiere energía eléctrica constante para mantener almacenada la información. Sin energía, los datos se borran.
```

### 2 — Identificación de componentes
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["ram", "disco_duro"]

variables:
  escenario: uno_de([["RAM", "SSD"], ["ROM", "HDD"], ["Cache", "Pendrive"]])
  es_volatil: uno_de([true, false])

tipo: vf

enunciado: "Si el componente es {escenario[0]}, ¿se considera que es una memoria volátil? (Respuesta: verdadero o falso)"

respuesta: "true"

explicacion: |
  En el caso de {escenario[0]}, la respuesta es verdadero porque la {escenario[0]} es volátil.
```

### 3 — Clasificación de dispositivos
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["clasificacion", "hardware"]

tipo: mc
opciones_explicitas: ["Disco Duro (HDD)", "Memoria RAM", "Memoria Caché", "Memoria ROM"]

enunciado: "¿Cuál de los siguientes dispositivos es un ejemplo de almacenamiento NO volátil?"

respuesta: "Disco Duro (HDD)"

explicacion: |
  Los discos duros (HDD) o unidades de estado sólido (SSD) conservan la información incluso cuando la computadora se apaga, por lo tanto, son no volátiles.
```

### 4 — Completar definiciones
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["terminologia", "conceptos"]

tipo: completar
opciones_explicitas: ["persistente", "temporal", "aleatoria", "secuencial"]
respuestas_validas: ["temporal"]

enunciado: "La función principal de la memoria RAM es servir como un espacio de almacenamiento ___ para que el procesador acceda rápidamente a los datos en ejecución."

respuesta: "temporal"

explicacion: |
  La RAM es una memoria de acceso rápido pero de naturaleza temporal; su propósito es sostener los datos que se están usando en el momento exacto.
```

### 5 — Ciclo de vida de la información
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["flujo_datos", "hardware"]

tipo: ordenar
opciones_explicitas: ["Carga de datos de disco a RAM", "Ejecución de procesos en CPU", "Guardado de cambios en disco"]

respuesta: ["Carga de datos de disco a RAM", "Ejecución de procesos en CPU", "Guardado de cambios en disco"]

enunciado: "Ordena el flujo lógico de la información cuando un usuario trabaja en un documento y decide guardarlo:"

explicacion: |
  Primero los datos pasan del almacenamiento no volátil (disco) a la memoria volátil (RAM) para ser procesados, y finalmente se escriben de nuevo en el disco para persistir.
```