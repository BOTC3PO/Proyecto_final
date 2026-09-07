# Historia Profunda — Ciclo de las rocas (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Tipos de rocas fundamentales

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["geologia", "rocas_igneas"]

respuesta: "ígnea"
tipo: mc
opciones_explicitas: ["sedimentaria", "metamórfica", "ígnea"]

enunciado: "Las rocas que se forman a partir de la solidificación del magma o la lava se denominan rocas _______."

explicacion: |
  Las rocas ígneas se forman cuando el material fundido (magma o lava) se enfría y se solidifica.
```

### 2 — El proceso de sedimentación

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["geologia", "sedimentacion"]

respuesta: "sedimentos"
tipo: completar
respuestas_validas:
  - "sedimentos"

enunciado: "El proceso de litificación ocurre cuando los _______ se compactan y cementan para formar nuevas rocas."

explicacion: |
  La acumulación y compactación de sedimentos es el proceso fundamental para la formación de rocas sedimentarias.
```

### 3 — Transformación por calor y presión

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["geologia", "metamorfismo"]

respuesta: "metamórfica"
tipo: mc
opciones_explicitas: ["ígnea", "sedimentaria", "metamórfica"]

enunciado: "Cuando una roca preexistente es sometida a altas temperaturas y presiones sin llegar a fundirse, se transforma en una roca:"

explicacion: |
  El metamorfismo es el proceso de transformación de rocas en estado sólido debido a cambios en las condiciones de presión y temperatura.
```

### 4 — Secuencia del ciclo geológico

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "avanzado"
  tags: ["geologia", "procesos"]

respuesta_orden: ["magma", "roca ígnea", "sedimentos", "roca sedimentaria", "roca metamórfica"]
tipo: ordenar
opciones_explicitas: ["magma", "roca ígnea", "sedimentos", "roca sedimentaria", "roca metamórfica"]

enunciado: "Ordena la secuencia lógica de procesos que describe la transformación desde el material fundido hasta la formación de rocas metamórficas:"

pasos:
  - "Solidificación del magma"
  - "Erosión y depósito"
  - "Litificación"
  - "Metamorfismo"

explicacion: |
  El ciclo es un proceso continuo: el magma se solidifica (ígnea), se erosiona (sedimentos), se compacta (sedimentaria) y se transforma por presión/calor (metamórfica).
```

### 5 — El destino del magma

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["geologia", "fusión"]

respuesta: "fusión"
tipo: completar
respuestas_validas:
  - "fusión"

enunciado: "Para que una roca metamórfica o sedimentaria vuelva a convertirse en magma, debe experimentar un proceso de _______."

explicacion: |
  La fusión es el proceso por el cual la roca sólida se funde debido a temperaturas extremadamente altas, reiniciando el ciclo desde el magma.
```

### 6 — De ígnea a sedimentaria

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["roca_igneas", "sedimentacion"]

tipo: mc
opciones_explicitas: ["Erosión y sedimentación", "Calor y presión", "Fusión parcial", "Cristalización"]
respuesta: "Erosión y sedimentación"

enunciado: "Una roca ígnea que queda expuesta en la superficie sufre procesos de desgaste y acumulación de partículas. ¿Cuál es el proceso principal para transformarse en una roca sedimentaria?"

explicacion: |
  La erosión desintegra la roca, el transporte mueve los sedimentos, la deposición los acumula y la litificación (compactación y cementación) los convierte en roca sedimentaria.
```

### 7 — Transformación metamórfica

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
respuestas_validas:
  - "metamórfica"

enunciado: "Cuando una {escenarios[escenario_idx][0]} es sometida a altas temperaturas y presiones extremas sin llegar a fundirse, se transforma en una roca ___."

explicacion: |
  El metamorfismo ocurre cuando las condiciones de presión y temperatura cambian la estructura mineral de una roca sólida sin llegar a la fusión (que sería magma).
```

### 8 — El proceso de sedimentación

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
respuesta_orden: ["Erosión", "Transporte", "Sedimentación", "Litificación"]
```

### 9 — Factores del metamorfismo

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["metamorfismo"]

tipo: mc
opciones_explicitas: ["Calor y presión", "Erosión y transporte", "Fusión y enfriamiento", "Sedimentación y compactación"]
respuesta: "Calor y presión"

enunciado: "¿Qué agentes físicos son los responsables de la formación de una roca metamórfica a partir de una roca preexistente?"

explicacion: |
  El metamorfismo es la transformación de una roca debido a cambios en la presión y la temperatura, sin que la roca llegue a fundirse.
```

### 10 — El destino del magma

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["roca_igneas", "fusión"]

respuesta: "ígnea"
respuestas_validas:
  - "ígnea"
  - "ignea"
  - "magmática"
  - "magmatica"
tipo: completar
tolerancia_abs: 0

enunciado: "Si una roca metamórfica se funde completamente debido al calor extremo, se convierte en magma. Si este magma se enfría y cristaliza, el tipo de roca resultante es una roca ___."

explicacion: |
  El enfriamiento del magma (ya sea intrusivo o extrusivo) da lugar a la formación de rocas ígneas.
```

### 11 — El origen ígneo

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "roca_igneas"]

variables:
  tipo_roca: uno_de(["granito", "basalto", "obsidiana"])

enunciado: "Cuando una roca se funde completamente debido al calor extremo en el manto, se convierte en ___."

respuesta: "magma"
tipo: completar
respuestas_validas:
  - "magma"

explicacion: |
  El proceso de fusión de cualquier tipo de roca (sedimentaria, metamórfica o ígnea) da lugar al magma. Al enfriarse, este magma dará origen a una nueva roca ígnea.
```

### 12 — El retorno al magma

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["ciclo_geologico", "fusione"]

variables:
  roca_origen: uno_de(["sedimentaria", "metamorfica", "igneas"])

enunciado: "Si una roca de tipo {roca_origen} es sometida a temperaturas lo suficientemente altas como para fundirse, el material resultante es magma. Si este magma se enfría, el ciclo se reinicia produciendo una roca ___."

respuesta: "igneas"
tipo: completar
respuestas_validas:
  - "igneas"

explicacion: |
  Cualquier roca, sin importar su origen, puede fundirse. El producto de la solidificación de ese magma siempre será una roca ígnea.
```

### 13 — Clasificación de la fusión

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "solidificacion"]

enunciado: "El proceso mediante el cual el magma se enfría y solidifica para formar nuevas rocas se denomina:"

opciones_explicitas: ["Meteorización", "Cristalización", "Erosión", "Sedimentación"]
respuesta: "Cristalización"
tipo: mc

explicacion: |
  La cristalización es el proceso de formación de cristales durante el enfriamiento del magma, dando lugar a las rocas ígneas.
```

### 14 — Secuencia del ciclo

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["ciclo_geologico", "secuencia"]

enunciado: "Ordena la secuencia lógica que describe el reinicio del ciclo cuando una roca ígnea es fundida:"

opciones_explicitas: ["Roca ígnea", "Magma", "Enfriamiento", "Nueva roca ígnea"]
respuesta_orden: ["Roca ígnea", "Magma", "Enfriamiento", "Nueva roca ígnea"]
tipo: ordenar

explicacion: |
  El ciclo es continuo: la roca existente se funde (magma), el magma se enfría y se solidifica (enfriamiento) para formar una nueva roca.
```

### 15 — El estado fundido

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "estado_fisico"]

enunciado: "Un material que ha pasado de ser una roca sólida a un estado fundido debido al calor extremo se encuentra en estado ___."

opciones_explicitas: ["sólido", "líquido", "gaseoso"]
respuesta: "líquido"
tipo: mc

explicacion: |
  El magma es roca fundida, por lo tanto, se encuentra en estado líquido. Una vez que este líquido se enfría, vuelve al estado sólido.
```

### 16 — El origen del ciclo

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["conceptos_basicos", "dinamica_terrestre"]

tipo: mc
opciones_explicitas: ["Un punto de inicio definido", "Un proceso lineal con un final", "Un ciclo continuo sin principio ni fin", "Un evento único ocurrido en el pasado"]
respuesta: "Un ciclo continuo sin principio ni fin"

enunciado: "Sobre la naturaleza del ciclo de las rocas, se afirma que este es..."

explicacion: |
  El ciclo de las rocas es un proceso continuo y dinámico. No existe un punto de partida o de finalización, ya que la materia se recicla constantemente a través de procesos internos y externos.
```

### 17 — Motores del ciclo

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["procesos_geologicos", "tectonica"]

tipo: completar
respuestas_validas:
  - "erosión"

enunciado: "El ciclo de las rocas es impulsado por la tectónica de placas y el calor interno como fuerzas internas, y por la ___ y el clima como fuerzas externas."

pasos:
  - "Identifica los procesos internos (endógenos) que mueven el material desde el interior."
  - "Identifica los procesos externos (exógenos) que modelan la superficie."

explicacion: |
  Los procesos internos (como la tectónica y el calor) mueven y transforman la materia desde el interior, mientras que los procesos externos (clima y erosión) actúan sobre la superficie.
```

### 18 — Transformación de materiales

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["rocas_magmaticas", "rocas_sedimentarias"]

tipo: mc
opciones_explicitas: ["Magma", "Sedimento", "Roca metamórfica", "Lava"]
respuesta: "Roca metamórfica"

enunciado: "Cuando una roca se somete a altas presiones y temperaturas sin llegar a fundirse, se transforma en una..."

explicacion: |
  La presión y el calor transforman las rocas existentes en rocas metamórficas antes de que puedan fundirse y volver a ser magma.
```

### 19 — Secuencia de la sedimentación

```
metadata:
  materia: "historia_profucha"
  tema: "ciclo_de_las_rocas"
  nivel: "avanzado"
  tags: ["sedimentacion", "procesos_externos"]

tipo: ordenar
opciones_explicitas: ["Meteorización", "Transporte", "Sedimentación", "Litificación"]

enunciado: "Ordena correctamente las etapas que ocurren desde la degradación de una roca en la superficie hasta la formación de una nueva roca sedimentaria:"

explicacion: |
  La roca se rompe (meteorización), es movida (transporte), se deposita (sedimentación) y finalmente se compacta (litificación).
respuesta_orden: ["Meteorización", "Transporte", "Sedimentación", "Litificación"]
```

### 20 — El destino del magma

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "cristalizacion"]

respuesta: "ígnea"
respuestas_validas:
  - "ígnea"
  - "ignea"
  - "magmática"
  - "magmatica"
tipo: completar
tolerancia_abs: 0

enunciado: "Cuando el magma se enfría y se solidifica, da origen a una roca de tipo ___."

explicacion: |
  El enfriamiento del magma (ya sea bajo la superficie o en la superficie como lava) produce rocas ígneas o magmáticas.
```

### 21 — Transformación de Magma

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "roca_ignea"]

respuesta: "roca intrusiva"
tipo: mc
opciones_explicitas: ["roca intrusiva", "roca extrusiva", "roca sedimentaria", "roca metamórfica"]

enunciado: "Si el magma se enfría lentamente bajo la superficie terrestre, el proceso de cristalización produce una ___."

explicacion: |
  El enfriamiento lento permite el desarrollo de cristales grandes, formando rocas ígneas intrusivas (plutónicas).
```

### 22 — Sedimentación y Litificación

```
metadata:
  materia: "geologia"
  tema: "ciclo_las_rocas"
  nivel: "basico"
  tags: ["sedimento", "litificacion"]

respuesta: "roca sedimentaria"
tipo: mc
opciones_explicitas: ["roca sedimentaria", "roca metamórfica", "roca ígnea", "magma"]

enunciado: "La acumulación, compactación y cementación de sedimentos acumulados en el fondo de un lago da lugar a una ___."

explicacion: |
  La litificación de sedimentos es el proceso mediante el cual se forman las rocas sedimentarias.
```

### 23 — Metamorfismo por Presión y Temperatura

```
metadata:
  materia: "geologia"
  tema: "ciclo_las_rocas"
  nivel: "intermedio"
  tags: ["metamorfismo", "presion"]

respuesta: "roca metamórfica"
tipo: mc
opciones_explicitas: ["roca metamórfica", "roca ígnea", "roca sedimentaria", "magma"]

enunciado: "Cuando una roca ígnea sometida a altas presiones y temperaturas experimenta cambios físicos sin llegar a fundirse, se transforma en una ___."

explicacion: |
  El metamorfismo es la transformación de rocas preexistentes debido a cambios en la presión y temperatura.
```

### 24 — El Ciclo de la Erosión

```
metadata:
  materia: "geologia"
  tema: "ciclo_las_rocas"
  nivel: "intermedio"
  tags: ["erosion", "sedimentos"]

respuesta: "sedimentos"
tipo: mc
opciones_explicitas: ["sedimentos", "magma", "roca metamórfica", "cristales"]

enunciado: "La meteorización y erosión de una roca sólida expuesta a la lluvia y el viento producen partículas sueltas llamadas ___."

explicacion: |
  La erosión rompe las rocas en fragmentos más pequeños llamados sedimentos.
```

### 25 — Fusión de Rocas

```
metadata:
  materia: "geologia"
  tema: "ciclo_las_rocas"
  nivel: "avanzado"
  tags: ["fusion", "magma"]

variables:
  idx: uno_de([0, 1])
  materiales: ["una roca metamórfica", "una roca sedimentaria"]

respuesta: "magma"
tipo: mc
opciones_explicitas: ["magma", "roca ígnea", "roca metamórfica", "sedimento"]

enunciado: "Si {materiales[idx]} alcanza su punto de fusión por calor extremo, el material resultante es ___."

explicacion: |
  La fusión completa de cualquier tipo de roca produce magma, que es el origen de las rocas ígneas.
```
