# Historia Profunda — Rocas igneas sedimentarias metamorficas (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Origen de las rocas ígneas

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "basico"
  tags: ["geologia", "magma"]

tipo: mc
opciones_explicitas: ["Enfriamiento de magma o lava", "Acumulación de sedimentos", "Presión y temperatura extrema", "Evaporación de agua salada"]
respuesta: "Enfriamiento de magma o lava"

enunciado: "Las rocas ígneas se originan principalmente por el proceso de ___."

explicacion: |
  Las rocas ígneas se forman cuando el material fundido (magma si es intrusivo o lava si es extrusivo) se enfría y se solidifica.
```

### 2 — Clasificación ígnea

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "basico"
  tags: ["granito", "basalto"]

variables:
  escenario: uno_de([["granito", "intrusiva"], ["basalto", "extrusiva"]])

tipo: completar
respuestas_validas:
  - "intrusiva"
  - "extrusiva"

enunciado: "Si el magma se enfría lentamente bajo la superficie terrestre, forma una roca de tipo {escenario[0]} y su clasificación es ___."

explicacion: |
  El {escenario[0]} es una roca ígnea {escenario[1]} porque se formó en el interior de la corteza.
```

### 3 — Tipos de rocas ígneas

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "intermedio"
  tags: ["clasificacion"]

tipo: mc
opciones_explicitas: ["Granito y Basalto", "Caliza y Arenisca", "Mármol y Pizarra", "Granito y Caliza"]
respuesta: "Granito y Basalto"

enunciado: "¿Cuál de los siguientes pares de rocas son ejemplos de rocas ígneas?"

explicacion: |
  El granito es una roca ígnea intrusiva y el basalto es una roca ígnea extrusiva.
```

### 4 — Proceso de solidificación

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "basico"
  tags: ["magma", "lava"]

tipo: completar
enunciado: "Cuando el material fundido sale a la superficie terrestre, se denomina ___."
respuesta: "Lava"
explicacion: |
  El término magma se usa para el material fundido bajo la superficie, mientras que lava es el término para el material que ya ha emergido.
```

### 5 — Diferencia de enfriamiento

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "avanzado"
  tags: ["textura", "enfriamiento"]

variables:
  caso: uno_de([["lento", "cristales grandes"], ["rápido", "cristales pequeños"]])

tipo: completar
respuestas_validas:
  - "cristales grandes"
  - "cristales pequeños"

enunciado: "Un enfriamiento de tipo {caso[0]} en el interior de la corteza produce rocas con ___."

explicacion: |
  El enfriamiento {caso[0]} permite que los minerales tengan tiempo de crecer, resultando en {caso[1]}.
```

### 6 — Origen de las rocas sedimentarias

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["sedimentarias", "procesos"]

tipo: mc
opciones_explicitas: ["Fragmentación de rocas ígneas", "Enfriamiento de magma", "Presión y calor extremo", "Sublimación de gases"]
respuesta: "Fragmentación de rocas ígneas"

enunciado: "Las rocas sedimentarias se forman principalmente a través del proceso de acumulación y compactación de ___."

explicacion: |
  Las rocas sedimentarias se originan por la acumulación de sedimentos (fragmentos de otras rocas, restos orgánicos o sales) que se depositan en capas y se compactan con el tiempo.
```

### 7 — Identificación de ejemplos

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["ejemplos", "sedimentarias"]

tipo: mc
opciones_explicitas: ["Arenisca y caliza", "Granito y basalto", "Mármol y pizarra", "Obsidiana y pumita"]
respuesta: "Arenisca y caliza"

enunciado: "Un ejemplo clásico de rocas que se forman por la acumulación de sedimentos es el par:"

explicacion: |
  La arenisca (formada por granos de arena) y la caliza (frecuentemente de origen orgánico o químico) son ejemplos fundamentales de rocas sedimentarias.
```

### 8 — El proceso de formación

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
respuesta_orden: ["Meteorización y erosión", "Transporte de sedimentos", "Deposición en capas", "Litificación (compactación y cementación)"]
```

### 9 — Componentes sedimentarios

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["sedimentos", "composición"]

tipo: completar
respuestas_validas:
  - "restos orgánicos"

enunciado: "Además de fragmentos de otras rocas, las rocas sedimentarias pueden formarse por la acumulación de ___."

explicacion: |
  Los restos orgánicos (como conchas de animales o materia vegetal) son componentes esenciales que, al acumularse, dan lugar a rocas como la caliza.
```

### 10 — Cálculo de capas (Simulación)

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["estratigrafia", "calculo"]

variables:
  espesor_capa: random_float(1.5, 5.5)
  cantidad_capas: 12
  espesor_total: espesor_capa * cantidad_capas

tipo: completar
tolerancia_abs: 0.1
respuesta: espesor_total

enunciado: "Si un afloramiento sedimentario presenta {cantidad_capas} capas, y cada capa tiene un espesor promedio de {espesor_capa} metros, ¿cuál es el espesor total del afloramiento en metros?"

pasos:
  - "Determinar el espesor de una capa: {espesor_capa}"
  - "Multiplicar el espesor por el número de capas: {espesor_capa} * {cantidad_capas}"

explicacion: |
  El espesor total se obtiene multiplicando el espesor de una capa individual por la cantidad total de capas depositadas.
```

### 11 — Origen de las rocas metamórficas

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

### 12 — Transformación de la caliza

```
metadata:
  materia: "geologia"
  tema: "rocas_metamorficas"
  nivel: "basico"
  tags: ["marmol", "caliza", "transformacion"]

variables:
  datos: [["caliza", "mármol"], ["granito", "gneis"], ["arenisca", "cuarcita"]]
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas:
  - "mármol"
  - "gneis"
  - "cuarcita"

enunciado: "Cuando la roca ___ se somete a procesos metamórficos, se transforma en ___."

pasos:
  - "Identificar la roca sedimentaria original."
  - "Asociar su producto metamórfico correspondiente."

respuesta: datos[idx][1]

explicacion: |
  La caliza es una roca sedimentaria que, bajo presión y temperatura, se recristaliza para formar mármol.
```

### 13 — Clasificación de rocas

```
metadata:
  materia: "geologia"
  tema: "rocas_metamorficas"
  nivel: "intermedio"
  tags: ["clasificacion", "origen"]

tipo: ordenar
opciones_explicitas: ["Magma", "Roca Ígnea", "Roca Sedimentaria", "Roca Metamórfica"]

enunciado: "Ordena el ciclo de formación de las rocas según su origen, desde el material fundido hasta la roca transformada por presión:"

respuesta_orden: ["Magma", "Roca Ígnea", "Roca Sedimentaria", "Roca Metamórfica"]

explicacion: |
  El ciclo comienza con el magma que al enfriarse crea rocas ígneas; estas pueden erosionarse en sedimentos (sedimentarias) y finalmente transformarse por presión en metamórficas.
```

### 14 — El origen de los fósiles

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["fósiles", "sedimentarias"]

tipo: completar
enunciado: "Los fósiles se encuentran casi exclusivamente en un tipo de roca llamado ___."
respuesta: "Rocas sedimentarias"
explicacion: |
  Los fósiles requieren la acumulación de sedimentos que entierren la materia orgánica rápidamente. Las rocas ígneas y metamórficas implican procesos de calor y presión que destruyen los restos orgánicos.
```

### 15 — Destrucción de la materia orgánica

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["procesos", "fósiles"]

tipo: mc
opciones_explicitas: ["Calor y presión", "Erosión y sedimentación", "Cristalización y enfriamiento"]
respuesta: "Calor y presión"

enunciado: "Las rocas ígneas y metamórficas suelen destruir la materia orgánica debido a la acción de:"

explicacion: |
  El calor extremo de la formación de rocas ígneas y la presión de las metamórficas descomponen o funden cualquier resto orgánico que pudiera existir.
```

### 16 — Relación procesos y fósiles

```
metadata:
  materia: "historia_profucha"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "avanzado"
  tags: ["geologia", "fósiles"]

variables:
  escenario_idx: uno_de([0, 1])
  tabla: [["sedimentarias", "sedimentarias"], ["ígneas", "ígneas"]]

respuesta: tabla[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "sedimentarias"
  - "ígneas"

enunciado: "Si un paleontólogo busca restos de un trilobita, lo hará en rocas de tipo {tabla[escenario_idx][0]}. Si busca magma solidificado, lo hará en rocas {tabla[escenario_idx][1]}."

pasos:
  - "Identificar el tipo de roca donde se preserva la vida."
  - "Identificar el origen de las rocas ígneas."

explicacion: |
  Los fósiles son indicadores de ambientes sedimentarios. Las rocas ígneas resultan de magma y las metamórficas de transformación por calor/presión.
```

### 17 — Clasificación de rocas

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
respuesta_orden: ["Sedimentación", "Litificación", "Fosilización"]
```

### 18 — Verdad o falso: Preservación

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "¿Es posible encontrar fósiles de plantas en una corriente de lava fresca?"

explicacion: |
  No, el calor extremo de la lava (roca ígnea) incineraría instantáneamente la materia orgánica.
```

### 19 — Origen de la roca

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["clasificacion", "rocas"]

variables:
  datos: [["Magma enfriado lentamente bajo la superficie", "ignea"], ["Sedimentos compactados por presión", "sedimentaria"], ["Roca transformada por calor y presión", "metamorfica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ignea", "sedimentaria", "metamorfica"]

enunciado: "Se observa una roca cuya formación se describe como: {datos[idx][0]}. ¿A qué tipo de roca pertenece?"

explicacion: |
  Las rocas se clasifican según su origen: las ígneas vienen de magma, las sedimentarias de sedimentos y las metamórficas de transformación.
```

### 20 — Identificación de proceso

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["procesos", "geologia"]

variables:
  datos: [["Litificación de sedimentos", "sedimentaria"], ["Cristalización de lava", "ignea"], ["Recristalización mineral", "metamorfica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "sedimentaria"
  - "ignea"
  - "metamorfica"

enunciado: "El proceso observado es la {datos[idx][0]}. Por lo tanto, la roca es de tipo ___."

explicacion: |
  Cada proceso geológico es característico de un grupo de rocas específico.
```

### 21 — Clasificación por textura

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "avanzado"
  tags: ["textura", "clasificacion"]

variables:
  datos: [["presencia de fósiles", "sedimentaria"], ["textura afanítica", "ignea"], ["foliación marcada", "metamorfica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["sedimentaria", "ignea", "metamorfica"]

enunciado: "Una muestra presenta {datos[idx][0]}. Esto indica que es una roca ___."

explicacion: |
  La textura y la presencia de fósiles son indicadores clave del origen de la roca.
```

### 22 — Secuencia de formación

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["ciclo_rocoso", "orden"]

tipo: ordenar
opciones_explicitas: ["Roca Ígnea", "Sedimento", "Roca Sedimentaria"]
respuesta_orden: ["Roca Ígnea", "Sedimento", "Roca Sedimentaria"]

enunciado: "Ordena los elementos según el proceso de formación de una roca sedimentaria a partir de material ígneo erosionado:"

explicacion: |
  El ciclo de las rocas implica la transformación constante de un tipo en otro: una roca ígnea expuesta en la superficie se erosiona en sedimentos, que luego se compactan y cementan para formar una roca sedimentaria.
```

### 23 — El origen térmico

```
metadata:
  materia: "historia_profucha"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["calor", "presion"]

variables:
  datos: [["fusión parcial", "ignea"], ["compactación", "sedimentaria"], ["reordenamiento atómico", "metamorfica"]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si una roca se forma por {datos[idx][0]}, su clasificación es ___."

explicacion: |
  La fusión produce magma (ígnea), la compactación produce sedimentaria y el reordenamiento por calor/presión produce metamórfica.
```
