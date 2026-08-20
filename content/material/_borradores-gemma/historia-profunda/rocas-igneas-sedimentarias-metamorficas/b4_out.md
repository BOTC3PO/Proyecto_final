### 1 — El origen de los fósiles
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["fósiles", "sedimentarias"]

tipo: mc
opciones_explicitas: ["Rocas ígneas", "Rocas sedimentarias", "Rocas metamórficas"]

enunciado: "Los fósiles se encuentran casi exclusivamente en un tipo de roca llamado ________."

explicacion: |
  Los fósiles requieren la acumulación de sedimentos que entierren la materia orgánica rápidamente. Las rocas ígneas y metamórficas implican procesos de calor y presión que destruyen los restos orgánicos.
```

### 2 — Destrucción de la materia orgánica
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["procesos", "fósiles"]

tipo: mc
opciones_explicitas: ["Calor y presión", "Erosión y sedimentación", "Cristalización y enfriamiento"]

enunciado: "Las rocas ígneas y metamórficas suelen destruir la materia orgánica debido a la acción de:"

explicacion: |
  El calor extremo de la formación de rocas ígneas y la presión de las metamórficas descomponen o funden cualquier resto orgánico que pudiera existir.
```

### 3 — Relación procesos y fósiles
```
metadata:
  materia: "historia_profucha"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "avanzado"
  tags: ["geologia", "fósiles"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: tabla[escenario_idx][1]
tipo: completar
respuestas_validas: ["sedimentarias", "ígneas"]

enunciado: "Si un paleontólogo busca restos de un trilobita, lo hará en rocas de tipo {tabla[escenario_idx][0]}. Si busca magma solidificado, lo hará en rocas {tabla[escenario_idx][1]}."

pasos:
  - "Identificar el tipo de roca donde se preserva la vida."
  - "Identificar el origen de las rocas ígneas."

explicacion: |
  Los fósiles son indicadores de ambientes sedimentarios. Las rocas ígneas resultan de magma y las metamórficas de transformación por calor/presión.

variables_contexto:
  tabla: [["sedimentarias", "sedimentarias"], ["ígneas", "ígneas"]]
```

### 4 — Clasificación de rocas
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["clasificacion"]

tipo: ordenar
opciones_explicitas: ["Sedimentación", "Litificación", "Fosilización"]

enunciado: "Ordena los pasos típicos para la formación de un fósil en una roca sedimentaria:"

explicacion: |
  Primero los restos se cubren con sedimentos (sedimentación), luego esos sedimentos se compactan (litificación) y finalmente se preservan los restos (fosilización).
```

### 5 — Verdad o falso: Preservación
```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["conceptos"]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

enunciado: "¿Es posible encontrar fósiles de plantas en una corriente de lava fresca?"

explicacion: |
  No, el calor extremo de la lava (roca ígnea) incineraría instantáneamente la materia orgánica.
```