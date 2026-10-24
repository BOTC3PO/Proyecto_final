### 1 — Identificación por dureza
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["dureza", "mohs"]

variables:
  escenario: [[4, "Fluorita"], [7, "Cuarzo"], [9, "Diamante"]]
  idx: uno_de([0, 1, 2])
  dureza_dada: escenario[idx][0]
  nombre_mineral: escenario[idx][1]

tipo: mc
opciones_explicitas: ["Fluorita", "Cuarzo", "Diamante", "Talco"]

enunciado: "Un geólogo encuentra un mineral cuya dureza en la escala de Mohs es de {dureza_dada}. ¿Qué mineral es?"

respuesta: nombre_mineral

explicacion: |
  El mineral identificado es el {nombre_mineral}, que tiene una dureza de {dureza_dada} en la escala de Mohs.
```

### 2 — El color de la luz
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["color", "espectro"]

variables:
  escenario: [["rojo", "Rubí"], ["azul", "Lapislázuli"], ["amarillo", "Azufre"]]
  idx: uno_de([0, 1, 2])
  color_descrito: escenario[idx][0]
  mineral_nombre: escenario[idx][1]

tipo: completar
respuestas_validas: ["Rubí", "Lapislázuli", "Azufre"]

enunciado: "Se observa un cristal de color ___ que presenta una estructura hexagonal característica."

pasos:
  - "Identificar el color mencionado en el registro."
  - "Asociar el color con el mineral correspondiente."

respuesta: mineral_nombre

explicacion: |
  El color {color_descrito} corresponde al mineral {mineral_nombre}.
```

### 3 — El brillo mineral
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["brillo", "propiedades"]

variables:
  escenario: [["metálico", "Pirita"], ["vítreo", "Cuarzo"], ["nacarado", "Mica"]]
  idx: uno_de([0, 1, 2])
  tipo_brillo: escenario[idx][0]
  mineral_id: escenario[idx][1]

tipo: mc
opciones_explicitas: ["Metálico", "Vítreo", "Nacarado", "Mate"]

enunciado: "Un espécimen presenta un brillo de tipo {tipo_brillo}. ¿Cuál de estos minerales es el más probable?"

respuesta: mineral_id

explicacion: |
  El brillo {tipo_brillo} es característico de la {mineral_id}.
```

### 4 — Secuencia de formación
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["cristalización", "geología"]

variables:
  proceso: [["Nucleación", "Crecimiento", "Terminación"], ["Nucleación", "Crecimiento", "Erosión"]]
  idx: uno_de([0, 1])
  etapas: proceso[idx]

tipo: ordenar
opciones_explicitas: ["Nucleación", "Crecimiento", "Terminación", "Erosión"]

enunciado: "Ordene las etapas típicas de la formación de un cristal perfecto en una solución saturada:"

respuesta: etapas

explicacion: |
  El proceso de cristalización requiere primero la nucleación, luego el crecimiento de la red y finalmente la terminación de los bordes.
```

### 5 — Densidad relativa
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["densidad", "propiedades_fisicas"]

variables:
  escenario: [[5.0, "Hematita"], [2.6, "Cuarzo"], [11.3, "Galena"]]
  idx: uno_de([0, 1, 2])
  valor_densidad: escenario[idx][0]
  mineral_ref: escenario[idx][1]

tipo: input
tolerancia_abs: 0.01

enunciado: "Un mineral tiene una densidad relativa de {valor_densidad}. ¿Cuál es su valor numérico exacto?"

respuesta: valor_densidad

explicacion: |
  La densidad es una propiedad intrínseca; en este caso, el valor es {valor_densidad} g/cm³.
```