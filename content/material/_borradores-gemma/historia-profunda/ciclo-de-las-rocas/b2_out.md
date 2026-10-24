### 1 — De ígnea a sedimentaria
```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["roca_igneas", "sedimentacion"]

tipo: mc
opciones_explicitas: ["Erosión y sedimentación", "Calor y presión", "Fusión parcial", "Cristalización"]

enunciado: "Una roca ígnea que queda expuesta en la superficie sufre procesos de desgaste y acumulación de partículas. ¿Cuál es el proceso principal para transformarse en una roca sedimentaria?"

explicacion: |
  La erosión desintegra la roca, el transporte mueve los sedimentos, la deposición los acumula y la litificación (compactación y cementación) los convierte en roca sedimentaria.
```

### 2 — Transformación metamórfica
```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["roca_metamorfica", "presion_calor"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["roca ígnea", "roca sedimentaria"], ["granito", "caliza"]]

tipo: completar
respuestas_validas: ["metamórfica"]

enunciado: "Cuando una {escenarios[escenario_idx][0]} es sometida a altas temperaturas y presiones extremas sin llegar a fundirse, se transforma en una roca ___."

explicacion: |
  El metamorfismo ocurre cuando las condiciones de presión y temperatura cambian la estructura mineral de una roca sólida sin llegar a la fusión (que sería magma).
```

### 3 — El proceso de sedimentación
```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "avanzado"
  tags: ["procesos_geologicos"]

tipo: ordenar
opciones_explicitas: ["Erosión", "Transporte", "Sedimentación", "Litificación"]

enunciado: "Ordene cronológicamente las etapas que transforman una roca ígnea en una roca sedimentaria:"

explicacion: |
  Primero la roca se rompe (erosión), luego los fragmentos se mueven (transporte), luego se asientan (sedimentación) y finalmente se compactan (litificación).
```

### 4 — Factores del metamorfismo
```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["metamorfismo"]

tipo: mc
opciones_explicitas: ["Calor y presión", "Erosión y transporte", "Fusión y enfriamiento", "Sedimentación y compactación"]

enunciado: "¿Qué agentes físicos son los responsables de la formación de una roca metamórfica a partir de una roca preexistente?"

explicacion: |
  El metamorfismo es la transformación de una roca debido a cambios en la presión y la temperatura, sin que la roca llegue a fundirse.
```

### 5 — El destino del magma
```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["roca_igneas", "fusión"]

tipo: input
tolerancia_abs: 0

enunciado: "Si una roca metamórfica se funde completamente debido al calor extremo, se convierte en magma. Si este magma se enfría y cristaliza, el tipo de roca resultante es una roca ___."

explicacion: |
  El enfriamiento del magma (ya sea intrusivo o extrusivo) da lugar a la formación de rocas ígneas.
```