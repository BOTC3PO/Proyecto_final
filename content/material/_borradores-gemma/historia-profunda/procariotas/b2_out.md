### 1 — Dominios Procariotas
```
metadata:
  materia: "biologia"
  tema: "dominios_procariotas"
  nivel: "basico"
  tags: ["biologia", "taxonomia", "procariotas"]

tipo: mc
opciones_explicitas: ["Bacterias y Arqueas", "Bacterias y Eucariotas", "Arqueas y Eucariotas", "Procariotas y Eucariotas"]

enunciado: "Aunque ambos son organismos procariotas, la vida se divide en tres dominios. Los dos dominios que agrupan a los procariotas son ___ y ___."

explicacion: |
  Los procariotas se dividen en dos dominios distintos: Bacteria y Archaea. Aunque comparten la ausencia de núcleo, sus composiciones químicas y genéticas son muy diferentes.
```

### 2 — Diferencias en la membrana
```
metadata:
  materia: "biologia"
  tema: "bioquimica_celular"
  nivel: "intermedio"
  tags: ["membrana", "arqueas", "bacterias"]

variables:
  escenario: uno_de([
    ["enlaces éter", "enlaces éster"],
    ["enlaces éster", "enlaces éter"]
  ])

tipo: completar
respuestas_validas: ["enlaces éter", "enlaces éster"]

enunciado: "Una diferencia fundamental en la composición de la membrana plasmática es que las Arqueas poseen lípidos unidos por ___ , mientras que las Bacterias utilizan ___ ."

pasos:
  - "Identificar el tipo de enlace en Arqueas"
  - "Identificar el tipo de enlace en Bacterias"

explicacion: |
  Las Arqueas presentan enlaces éter en sus lípidos de membrana, lo que les otorga mayor estabilidad (especialmente en ambientes extremos), mientras que las Bacterias poseen enlaces éster.
```

### 3 — El genoma procariota
```
metadata:
  materia: "biologia"
  tema: "genetica_procariota"
  nivel: "intermedio"
  tags: ["adn", "transcripcion", "arqueas"]

tipo: mc
opciones_explicitas: ["Más similar a las Eucariotas", "Más similar a las Bacterias", "No tiene similitudes con ningún dominio"]

enunciado: "A pesar de su morfología procariota, el proceso de transcripción y replicación del ADN en las Arqueas es molecularmente ___ ."

explicacion: |
  Aunque son procariotas, las Arqueas comparten maquinaria de replicación y transcripción mucho más cercana a la de las Eucariotas que a la de las Bacterias.
```

### 4 — Clasificación de organismos
```
metadata:
  materia: "biologia"
  tema: "taxonomia_procariota"
  nivel: "basico"
  tags: ["clasificacion", "taxonomia"]

tipo: ordenar
opciones_explicitas: ["Dominio Bacteria", "Dominio Archaea", "Dominio Eukarya"]

enunciado: "Ordena los tres dominios de la vida de menor a mayor complejidad estructural (considerando la presencia de núcleo y organelos):"

explicacion: |
  El orden correcto es Bacteria y Archaea (ambos procariotas, sin núcleo) seguidos por Eukarya (eucariotas, con núcleo complejo).
```

### 5 — Extremófilos
```
metadata:
  materia: "biologia"
  tema: "ecologia_microbiana"
  nivel: "avanzado"
  tags: ["arqueas", "extremofilos"]

variables:
  caso: uno_de([
    ["un ambiente con pH extremo", "temperaturas de ebullición"],
    ["temperaturas de ebullición", "un ambiente con pH extremo"]
  ])

tipo: input
tolerancia_abs: 0

enunciado: "Si un organismo procariota es capaz de sobrevivir en {caso[0]}, es muy probable que pertenezca al dominio ___ ."

respuestas_validas: ["Archaea", "Arqueas"]

explicacion: |
  Las Arqueas son famosas por ser extremófilas, capaces de habitar en condiciones de salinidad, temperatura o pH que serían letales para la mayoría de las Bacterias.
```