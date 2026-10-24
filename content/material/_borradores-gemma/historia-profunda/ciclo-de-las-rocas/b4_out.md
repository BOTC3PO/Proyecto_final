### 1 — El origen del ciclo
```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["conceptos_basicos", "dinamica_terrestre"]

tipo: mc
opciones_explicitas: ["Un punto de inicio definido", "Un proceso lineal con un final", "Un ciclo continuo sin principio ni fin", "Un evento único ocurrido en el pasado"]

enunciado: "Sobre la naturaleza del ciclo de las rocas, se afirma que este es..."

explicacion: |
  El ciclo de las rocas es un proceso continuo y dinámico. No existe un punto de partida o de finalización, ya que la materia se recicla constantemente a través de procesos internos y externos.
```

### 2 — Motores del ciclo
```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["procesos_geologicos", "tectonica"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["tectónica de placas y calor interno", "erosión y clima"], ["procesos endógenos", "procesos exógenos"]]

tipo: completar
respuestas_validas: ["tectónica de placas y calor interno", "erosión y clima"]

enunciado: "El ciclo de las rocas es impulsado por dos tipos de fuerzas principales: las fuerzas ___ y las fuerzas ___."

pasos:
  - "Identifica los procesos internos (endógenos) que mueven el material desde el interior."
  - "Identifica los procesos externos (exógenos) que modelan la superficie."

explicacion: |
  Los procesos internos (como la tectónica y el calor) mueven y transforman la materia desde el interior, mientras que los procesos externos (clima y erosión) actúan sobre la superficie.
```

### 3 — Transformación de materiales
```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["rocas_magmaticas", "rocas_sedimentarias"]

tipo: mc
opciones_explicitas: ["Magma", "Sedimento", "Roca metamórfica", "Lava"]

enunciado: "Cuando una roca se somete a altas presiones y temperaturas sin llegar a fundirse, se transforma en una..."

explicacion: |
  La presión y el calor transforman las rocas existentes en rocas metamórficas antes de que puedan fundirse y volver a ser magma.
```

### 4 — Secuencia de la sedimentación
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
```

### 5 — El destino del magma
```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "cristalizacion"]

tipo: input
tolerancia_abs: 0

enunciado: "Cuando el magma se enfría y se solidifica, da origen a una roca de tipo ___."

explicacion: |
  El enfriamiento del magma (ya sea bajo la superficie o en la superficie como lava) produce rocas ígneas o magmáticas.
```