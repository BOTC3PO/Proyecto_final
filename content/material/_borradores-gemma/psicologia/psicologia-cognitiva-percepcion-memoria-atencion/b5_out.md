### 1 — El fenómeno de la atención selectiva
```
metadata:
  materia: "psicologia"
  tema: "atencion_selectiva"
  nivel: "intermedio"
  tags: ["atencion", "percepcion"]

variables:
  escenario: uno_de([["Estás en una fiesta ruidosa y logras seguir la conversación de tu amigo", "atencion_selectiva"], ["Estás leyendo un libro y de repente escuchas tu nombre a lo lejos", "atencion_involuntaria"], ["Estás buscando tus llaves en una mesa desordenada", "atencion_sostenida"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["atencion_selectiva", "atencion_involuntaria", "atencion_sostenida"]

enunciado: "En el escenario donde {escenario[idx][0]}, el proceso cognitivo predominante es la {escenario[idx][1]}."

explicacion: |
  La atención selectiva permite filtrar estímulos irrelevantes para concentrarse en uno específico, como en el efecto 'cocktail party'.
```

### 2 — Memoria de trabajo y carga cognitiva
```
metadata:
  materia: "psicologia"
  tema: "memoria_trabajo"
  nivel: "intermedio"
  tags: ["memoria", "carga_cognitiva"]

variables:
  item: uno_de([["7", "7"], ["12", "12"], ["45", "45"]])
  idx: uno_de([0,1,2])

respuesta: item[idx][0]
tipo: completar
respuestas_validas: ["7", "12", "45"]

enunciado: "Si un sujeto debe retener el número ___ en su memoria de trabajo mientras realiza una tarea secundaria, el número de elementos es el límite de la capacidad de procesamiento inmediato."

explicacion: |
  La memoria de trabajo tiene una capacidad limitada (el número mágico de Miller es 7 ± 2), pero el ejercicio pide el valor específico del escenario.
```

### 3 — Procesamiento Bottom-up vs Top-down
```
metadata:
  materia: "psicologia"
  tema: "percepcion_procesamiento"
  nivel: "avanzado"
  tags: ["percepcion", "procesamiento"]

variables:
  caso: uno_de([["reconocer una cara por sus rasgos físicos", "bottom_up"], ["interpretar una sombra como un animal por miedo", "top_down"]])
  idx: uno_de([0,1])

respuesta: caso[idx][0]
tipo: vf

enunciado: "Si el sujeto está interpretando una sombra como un animal debido a sus expectativas o estados emocionales previos, el procesamiento es de tipo {caso[idx][0]}."

explicacion: |
  El procesamiento Top-down (de arriba hacia abajo) ocurre cuando los conocimientos previos, expectativas o motivaciones influyen en la percepción.
```

### 4 — Etapas del aprendizaje según el modelo de memoria
```
metadata:
  materia: "psicologia"
  tema: "aprendizaje_memoria"
  nivel: "intermedio"
  tags: ["aprendizaje", "memoria"]

respuesta: ["Codificación", "Almacenamiento", "Recuperación"]
tipo: ordenar

enunciado: "Ordena correctamente las etapas del proceso de memoria que permiten el aprendizaje de una nueva habilidad:"

explicacion: |
  Para que ocurra el aprendizaje, la información debe ser codificada (transformada), almacenada (mantenida) y finalmente recuperada (evocada).
```

### 5 — Reconocimiento de patrones y percepción
```
metadata:
  materia: "psicologia"
  tema: "percepcion_reconocimiento"
  nivel: "basico"
  tags: ["percepcion", "gestalt"]

variables:
  objetos: uno_de([["una letra 'A' formada por líneas separadas", "ley_cierre"], ["un círculo perfecto", "ley_continuidad"]])
  idx: uno_de([0,1])

respuesta: objetos[idx][0]
tipo: mc
opciones_explicitas: ["ley_cierre", "ley_continuidad", "ley_figura_fondo"]

enunciado: "Si el sujeto percibe {objetos[idx][0]} como una unidad completa a pesar de que los elementos no estén conectados, está aplicando la {objetos[idx][0]}."

explicacion: |
  La Ley de Cierre de la Gestalt establece que nuestra mente tiende a completar figuras incompletas para darles sentido.
```