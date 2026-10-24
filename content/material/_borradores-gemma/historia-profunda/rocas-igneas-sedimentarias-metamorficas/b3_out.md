### 1 — Origen de las rocas metamórficas
```
metadata:
  materia: "geologia"
  tema: "rocas_metamorficas"
  nivel: "basico"
  tags: ["procesos", "calor", "presion"]

tipo: mc
opciones_explicitas: ["fundición completa de la roca", "transformación por calor y/o presión sin fundirse", "acumulación de sedimentos en el lecho marino", "enfriamiento de magma expuesto"]

enunciado: "Las rocas metamórficas se forman cuando una roca preexistente es sometida a condiciones de ___ sin llegar a fundirse."

respuesta: "transformación por calor y/o presión sin fundirse"

explicacion: |
  El metamorfismo es un proceso de transformación en estado sólido. Si la roca se fundiera, se convertiría en magma y daría lugar a una roca ígnea.
```

### 2 — Transformación de la caliza
```
metadata:
  materia: "geologia"
  tema: "rocas_metamorficas"
  nivel: "basico"
  tags: ["marmol", "caliza", "transformacion"]

variables:
  escenario: uno_de([["caliza", "mármol"], ["granito", "gneis"], ["arenisca", "cuarcita"]])
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas: ["mármol", "gneis", "cuarcita"]

enunciado: "Cuando la roca ___ se somete a procesos metamórficos, se transforma en ___."

pasos:
  - "Identificar la roca sedimentaria original."
  - "Asociar su producto metamórfico correspondiente."

respuesta: escenario[idx][1]

explicacion: |
  La caliza es una roca sedimentaria que, bajo presión y temperatura, se recristaliza para formar mármol.
```

### 3 — Clasificación de rocas
```
metadata:
  materia: "geologia"
  tema: "rocas_metamorficas"
  nivel: "intermedio"
  tags: ["clasificacion", "origen"]

tipo: ordenar
opciones_explicitas: ["Magma", "Roca Ígnea", "Roca Sedimentaria", "Roca Metamórfica"]

enunciado: "Ordena el ciclo de formación de las rocas según su origen, desde el material fundido hasta la roca transformada por presión:"

respuesta: ["Magma", "Roca Ígnea", "Roca Sedimentaria", "Roca Metamórfica"]

explicacion: |
  El ciclo comienza con el magma que al enfriarse crea rocas ígneas; estas pueden erosionarse en sedimentos (sedimentarias) y finalmente transformarse por presión en metamórficas.
```

### 4 --- El caso del granito
```
metadata:
  materia: "geologia"
  tema: "rocas_metamorficas"
  nivel: "intermedio"
  tags: ["granito", "gneis"]

tipo: mc
opciones_explicitas: ["Gneiss", "Pizarra", "Mármol", "Basalto"]

enunciado: "El granito es una roca ígnea que, al sufrir metamorfismo intenso, suele transformarse en:"

respuesta: "Gneiss"

explicacion: |
  El gneis presenta una foliación característica debido a la reorientación de minerales bajo alta presión y temperatura.
```

### 5 --- Factores del metamorfismo
```
metadata:
  materia: "geologia"
  tema: "rocas_metamorficas"
  nivel: "avanzado"
  tags: ["factores", "fisicoquimico"]

tipo: input
tolerancia_abs: 0

enunciado: "Para que ocurra el metamorfismo, la roca debe estar sometida a cambios en la temperatura y en la ___."

respuesta: "presión"

explicacion: |
  La temperatura y la presión son los dos agentes principales que alteran la estructura mineralógica de las rocas en estado sólido.
```