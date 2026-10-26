### 1 — Origen de las rocas sedimentarias
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["sedimentarias", "procesos"]

tipo: mc
opciones_explicitas: ["Fragmentación de rocas ígneas", "Enfriamiento de magma", "Presión y calor extremo", "Sublimación de gases"]

enunciado: "Las rocas sedimentarias se forman principalmente a través del proceso de acumulación y compactación de ___."

explicacion: |
  Las rocas sedimentarias se originan por la acumulación de sedimentos (fragmentos de otras rocas, restos orgánicos o sales) que se depositan en capas y se compactan con el tiempo.
```

### 2 — Identificación de ejemplos
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["ejemplos", "sedimentarias"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[["arenisca", "caliza"], ["lutita", "conglomerado"]]]

tipo: mc
opciones_explicitas: ["Arenisca y caliza", "Granito y basalto", "Mármol y pizarra", "Obsidiana y pumita"]

enunciado: "Un ejemplo clásico de rocas que se forman por la acumulación de sedimentos es el par: {datos[escenario_idx][0]}."

explicacion: |
  La arenisca (formada por granos de arena) y la caliza (frecuentemente de origen orgánico o químico) son ejemplos fundamentales de rocas sedimentarias.
```

### 3 — El proceso de formación
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["procesos", "compactacion"]

tipo: ordenar
opciones_explicitas: ["Meteorización y erosión", "Transporte de sedimentos", "Deposición en capas", "Litificación (compactación y cementación)"]

enunciado: "Ordena cronológicamente los pasos necesarios para la formación de una roca sedimentaria:"

explicacion: |
  Primero la roca madre se rompe (meteorización), los restos viajan (transporte), se asientan (deposición) y finalmente se transforman en roca sólida (litificación).
```

### 4 — Componentes sedimentarios
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["sedimentos", "composición"]

tipo: completar
respuestas_validas: ["restos orgánicos"]

enunciado: "Además de fragmentos de otras rocas, las rocas sedimentarias pueden formarse por la acumulación de ___."

explicacion: |
  Los restos orgánicos (como conchas de animales o materia vegetal) son componentes esenciales que, al acumularse, dan lugar a rocas como la caliza.
```

### 5 — Cálculo de capas (Simulación)
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["estratigrafia", "calculo"]

variables:
  espesor_capa: random_float(1.5, 5.5)
  cantidad_capas: 12

tipo: input
tolerancia_abs: 0.1

enunciado: "Si un afloramiento sedimentario presenta {cantidad_capas} capas, y cada capa tiene un espesor promedio de {espesor_capa} metros, ¿cuál es el espesor total del afloramiento en metros?"

pasos:
  - "Determinar el espesor de una capa: {espesor_capa}"
  - "Multiplicar el espesor por el número de capas: {espesor_capa} * {cantidad_capas}"

explicacion: |
  El espesor total se obtiene multiplicando el espesor de una capa individual por la cantidad total de capas depositadas.
```