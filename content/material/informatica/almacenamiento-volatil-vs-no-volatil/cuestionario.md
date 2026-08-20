# Informatica — Almacenamiento volatil vs no volatil (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

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
  es_volatil: uno_de([verdadero, falso])

tipo: vf
enunciado: "Si el componente es {escenario[0]}, ¿se considera que es una memoria volátil?"

respuesta: es_volatil

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
respuestas_validas:
  - "temporal"

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

respuesta_orden: ["Carga de datos de disco a RAM", "Ejecución de procesos en CPU", "Guardado de cambios en disco"]

enunciado: "Ordena el flujo lógico de la información cuando un usuario trabaja en un documento y decide guardarlo:"

explicacion: |
  Primero los datos pasan del almacenamiento no volátil (disco) a la memoria volátil (RAM) para ser procesados, y finalmente se escriben de nuevo en el disco para persistir.
```

### 6 — La naturaleza de la RAM

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["memoria", "hardware", "ram"]

respuesta: falso
tipo: vf

enunciado: "Si apagas una computadora que tiene 16 GB de memoria RAM, la información almacenada en ella se mantiene intacta gracias a que la RAM es un tipo de memoria no volátil."

explicacion: |
  La memoria RAM (Random Access Memory) es volátil. Esto significa que requiere una corriente eléctrica constante para mantener los datos; al cortar la energía, los datos se pierden.
```

### 7 — Clasificación de dispositivos

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["clasificacion", "hardware"]

variables:
  escenario_idx: uno_de([0, 1])
  dispositivos: [["Memoria RAM", "Memoria Caché"], ["Disco Duro HDD", "Memoria Flash USB"]]
  tipo_memoria: [["volátil", "volátil"], ["no volátil", "no volátil"]]

respuesta: tipo_memoria[escenario_idx][0]
tipo: mc
opciones_explicitas: ["volátil", "no volátil"]

enunciado: "Considerando el dispositivo {dispositivos[escenario_idx][0]}, ¿cuál es su característica principal respecto a la persistencia de datos?"

explicacion: |
  El dispositivo seleccionado pertenece a la categoría de memoria {tipo_memoria[escenario_idx][0]}.
```

### 8 — El proceso de guardado

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["flujo_datos", "guardado"]

respuesta: "disco"
tipo: completar
respuestas_validas:
  - "disco"
  - "memoria"

enunciado: "Cuando estás escribiendo un documento en un procesador de texto, los cambios se mantienen temporalmente en la memoria RAM. Para que el archivo no se pierda al apagar la PC, debes realizar una acción de guardado que traslade la información desde la RAM hacia el ___."

pasos:
  - "1. El procesador carga el archivo desde el almacenamiento permanente a la RAM."
  - "2. El usuario realiza cambios (estos viven en la RAM)."
  - "3. El comando 'Guardar' copia los datos de la RAM al almacenamiento persistente."

explicacion: |
  El proceso de guardado consiste en transferir la información de la memoria volátil (RAM) al dispositivo de almacenamiento no volátil (como un disco duro o SSD).
```

### 9 — Jerarquía de almacenamiento

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["jerarquia", "orden"]

respuesta_orden: ["Caché L1", "Memoria RAM", "Disco SSD"]
tipo: ordenar
opciones_explicitas: ["Caché L1", "Memoria RAM", "Disco SSD"]

enunciado: "Ordena los siguientes componentes de hardware de mayor a menor velocidad de acceso (desde el más rápido al más lento):"

explicacion: |
  En la jerarquía de memoria, la velocidad disminuye a medida que aumenta la capacidad y la persistencia. La caché es la más rápida, seguida de la RAM y finalmente el almacenamiento masivo (SSD/HDD).
```

### 10 — El caso del corte de luz

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["consecuencia", "energia"]

variables:
  caso_idx: uno_de([0, 1])
  situacion: [["Estás editando una foto y se corta la luz sin haber guardado.", "perder"], ["Estás viendo una película descargada en un pendrive y se corta la luz.", "nada"]]
  resultado: ["perder", "nada"]

respuesta: resultado[caso_idx]
tipo: mc
opciones_explicitas: ["perder", "nada"]

enunciado: "Analiza el siguiente caso: {situacion[caso_idx]} ¿Qué sucede con la información que se estaba procesando en ese momento?"

explicacion: |
  En el caso de la edición (volátil), la información se pierde porque la RAM se vacía. En el caso del pendrive (no volátil), el archivo ya está grabado físicamente y no se ve afectado por la falta de energía inmediata.
```

### 11 — Naturaleza de la persistencia

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["memoria", "ram", "hardware"]

respuesta: "volátil"
tipo: "completar"
respuestas_validas:
  - "volátil"
  - "volatil"

enunciado: "La memoria que requiere un suministro constante de energía para mantener la información almacenada se denomina memoria ___________."

explicacion: |
  La memoria volátil (como la RAM) pierde todos sus datos cuando se corta la energía. La memoria no volátil (como un SSD o HDD) conserva los datos sin electricidad.
```

### 12 — El mito del guardado

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["errores_comunes", "guardado"]

tipo: vf
respuesta: falso

enunciado: "Si estoy escribiendo un documento en un procesador de texto y se corta la luz antes de que yo haga clic en 'Guardar', la información se mantiene intacta en el disco duro porque el procesador estaba encendido."

explicacion: |
  Falso. Mientras editas, el texto reside en la memoria RAM (volátil). Si no se ha escrito en el disco (no volátil), la información se pierde al cortarse la energía.
```

### 13 — Clasificación de dispositivos

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["hardware", "clasificacion"]

variables:
  escenario: uno_de([["Memoria RAM", "volátil"], ["Disco Duro (HDD)", "no volátil"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["volátil", "no volátil"]

enunciado: "Considerando el dispositivo {escenario[0]}, su característica principal de almacenamiento es: ___________."

explicacion: |
  La RAM es volátil (pierde datos sin energía) y el HDD es no volátil (mantiene datos sin energía).
```

### 14 — El proceso de escritura

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["flujo_datos", "ciclo_de_vida"]

respuesta_orden: ["Cargar desde disco", "Procesar en RAM", "Guardar en disco"]
tipo: "ordenar"
opciones_explicitas: ["Cargar desde disco", "Procesar en RAM", "Guardar en disco"]

enunciado: "Ordena el flujo lógico de datos cuando un usuario abre un archivo, edita un párrafo y luego decide conservar los cambios permanentemente:"

explicacion: |
  1. Los datos pasan de la memoria no volátil (disco) a la volátil (RAM) para ser usados.
  2. La CPU trabaja sobre la RAM.
  3. Al guardar, los datos vuelven a la memoria no volátil.
```

### 15 — Capacidad vs Persistencia

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "¿Cuál de las siguientes afirmaciones describe correctamente la diferencia principal entre la memoria volátil y la no volátil?"
tipo: "mc"
respuesta: "Solo la memoria no volátil puede almacenar datos de forma permanente."
opciones_explicitas: ["Solo la memoria no volátil puede almacenar datos de forma permanente.", "Tanto la RAM como el disco duro son memorias no volátiles.", "La memoria volátil es más lenta que la no volátil.", "El almacenamiento volátil es el que se usa para guardar archivos a largo plazo."]

explicacion: |
  La característica definitoria es la persistencia: la memoria volátil pierde los datos sin energía, independientemente de su velocidad o capacidad.
```

### 16 — Naturaleza de la memoria RAM

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

### 17 — Clasificación de dispositivos

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

### 18 — El proceso de carga de archivos

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["flujo_datos", "ram", "disco"]

respuesta_orden: ["Disco Duro", "Memoria RAM", "Procesador"]
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

### 19 — El concepto de persistencia

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["terminologia", "persistente"]

respuesta: "persistencia"
tipo: completar
respuestas_validas:
  - "persistencia"
  - "permanencia"

enunciado: "La capacidad de un medio de almacenamiento para mantener la información sin necesidad de suministro eléctrico se denomina ___."

explicacion: |
  La ___ es la característica que define a los medios no volátiles como los SSD o los discos duros.
```

### 20 — Comparativa de velocidad y uso

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["rendimiento", "comparativa"]

variables:
  caso: uno_de([[0, "Memoria RAM", "Alta velocidad, poca capacidad"], [1, "Disco SSD", "Velocidad media, mayor capacidad"]])

respuesta: caso[2]
tipo: mc
opciones_explicitas: ["Alta velocidad, poca capacidad", "Velocidad media, mayor capacidad"]

enunciado: "Si comparamos el dispositivo {caso[1]} con un disco duro mecánico, su característica distintiva es que posee una {caso[2]}."

explicacion: |
  En este escenario, estamos comparando la velocidad y capacidad relativa de un SSD frente a un HDD.
```

### 21 — El escenario de la edición

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["hardware", "memoria", "ram"]

variables:
  escenario: uno_de([["Estás editando un documento de texto en un procesador de palabras y aún no has guardado los cambios.", "RAM"], ["Has guardado una fotografía en tu carpeta de imágenes en el disco duro.", "Disco"], ["Estás jugando un videojuego y la acción se está procesando en tiempo real.", "RAM"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["RAM", "Disco", "ROM"]

enunciado: "Considerando el escenario: '{escenario[0]}', ¿qué tipo de memoria es la principal responsable de mantener la información mientras el dispositivo tiene energía, pero que se borraría al apagar la computadora?"

explicacion: |
  La memoria RAM es volátil, lo que significa que requiere energía eléctrica para mantener los datos. Si el dispositivo se apaga sin guardar los cambios en un medio no volátil (como el disco), la información se pierde.
```

### 22 — ¿Qué sucede tras el apagón?

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["volatilidad", "energia"]

respuesta: falso
tipo: vf

enunciado: "Si un dispositivo de almacenamiento es de tipo 'no volátil', la información almacenada en él se perderá inmediatamente al desconectar la fuente de alimentación eléctrica."

explicacion: |
  Falso. Precisamente la característica de la memoria no volátil (como un SSD o un HDD) es que la información persiste sin necesidad de energía eléctrica.
```

### 23 — Clasificación de dispositivos

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["clasificacion", "hardware"]

variables:
  item: uno_de([["Memoria RAM", "volatil"], ["Disco Duro (HDD)", "no_volatil"], ["Memoria Flash (USB)", "no_volatil"], ["Memoria Caché", "volatil"]])

tipo: completar
respuesta: item[1]
enunciado: "El dispositivo '{item[0]}' se clasifica como memoria ___________."

explicacion: |
  La memoria volátil es aquella que requiere energía para mantener los datos, mientras que la no volátil permite el almacenamiento a largo plazo.
```

### 24 — Orden de jerarquía de persistencia

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["jerarquia", "ordenar"]

opciones_explicitas: ["Memoria RAM", "Disco Duro", "Memoria ROM"]
respuesta_orden: ["Memoria RAM", "Disco Duro", "Memoria ROM"]
tipo: ordenar

enunciado: "Ordena los siguientes componentes de mayor a menor persistencia de datos (desde el que pierde la información más rápido al apagar el equipo hasta el que la mantiene de forma permanente):"

pasos:
  - "1. RAM (Volátil)"
  - "2. Disco Duro (No volátil - almacenamiento masivo)"
  - "3. ROM (No volátil - lectura permanente)"

explicacion: |
  La RAM es volátil (pierde datos al apagar), el Disco Duro es no volátil para archivos, y la ROM está diseñada para contener instrucciones permanentes que no se borran.
```

### 25 — El proceso de guardado

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["flujo_datos"]

variables:
  accion: uno_de([["Guardar un archivo", "no volátil"], ["Abrir un programa", "volátil"]])

respuesta: accion[1]
tipo: mc
opciones_explicitas: ["volátil", "no volátil"]

enunciado: "Cuando realizas la acción de '{accion[0]}', los datos se trasladan de un medio de almacenamiento ___________ a uno de trabajo ___________."

explicacion: |
  Al guardar, los datos pasan de la memoria no volátil (disco) a la volátil (RAM) para que el procesador pueda trabajar con ellos.
```
