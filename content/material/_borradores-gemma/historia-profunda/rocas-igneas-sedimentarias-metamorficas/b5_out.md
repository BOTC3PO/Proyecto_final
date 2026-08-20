### 1 — Origen de la roca
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["clasificacion", "rocas"]

variables:
  escenario: uno_de([["Magma enfriado lentamente bajo la superficie", "ignea"], ["Sedimentos compactados por presión", "sedimentaria"], ["Roca transformada por calor y presión", "metamorfica"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["ignea", "sedimentaria", "metamorfica"]

enunciado: "Se observa una roca cuya formación se describe como: {escenario[idx][0]}. ¿A qué tipo de roca pertenece?"

explicacion: |
  Las rocas se clasifican según su origen: las ígneas vienen de magma, las sedimentarias de sedimentos y las metamórficas de transformación.
```

### 2 — Identificación de proceso
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["procesos", "geologia"]

variables:
  escenario: uno_de([["Litificación de sedimentos", "sedimentaria"], ["Cristalización de lava", "ignea"], ["Recristalización mineral", "metamorfica"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["sedimentaria", "ignea", "metamorfica"]

enunciado: "El proceso observado es la {escenario[idx][0]}. Por lo tanto, la roca es de tipo ___."

explicacion: |
  Cada proceso geológico es característico de un grupo de rocas específico.
```

### 3 — Clasificación por textura
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "avanzado"
  tags: ["textura", "clasificacion"]

variables:
  escenario: uno_de([["presencia de fósiles", "sedimentaria"], ["textura afanítica", "ignea"], ["foliación marcada", "metamorfica"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["sedimentaria", "ignea", "metamorfica"]

enunciado: "Una muestra presenta {escenario[idx][0]}. Esto indica que es una roca ___."

explicacion: |
  La textura y la presencia de fósiles son indicadores clave del origen de la roca.
```

### 4 — Secuencia de formación
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["ciclo_rocoso", "orden"]

variables:
  escenario: uno_de([["Magma", "Sedimento", "Roca Metamorfica"], ["Lava", "Sedimento", "Roca Ignea"], ["Sedimento", "Roca Sedimentaria", "Roca Metamorfica"]])
  idx: uno_de([0, 1, 2])

respuesta: ["Magma", "Sedimento", "Roca Metamorfica"]
tipo: ordenar
opciones_explicitas: ["Magma", "Sedimento", "Roca Metamorfica", "Lava", "Sedimento", "Roca Ignea", "Sedimento", "Roca Sedimentaria", "Roca Metamorfica"]

enunciado: "Ordena los elementos según el proceso de formación de una roca sedimentaria a partir de material ígneo erosionado:"

explicacion: |
  El ciclo de las rocas implica la transformación constante de un tipo en otro mediante procesos geológicos.
```

### 5 — El origen térmico
```
metadata:
  materia: "historia_profucha"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["calor", "presion"]

variables:
  escenario: uno_de([["fusión parcial", "ignea"], ["compactación", "sedimentaria"], ["reordenamiento atómico", "metamorfica"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "Si una roca se forma por {escenario[idx][0]}, su clasificación es ___."

explicacion: |
  La fusión produce magma (ígnea), la compactación produce sedimentaria y el reordenamiento por calor/presión produce metamórfica.
```