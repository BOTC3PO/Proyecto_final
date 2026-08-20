### 1 — La separación de Buenos Aires
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["buenos_aires", "confederacion", "constitucion"]

respuesta: "separada"
tipo: "vf"

enunciado: "Tras la sanción de la Constitución Nacional en 1853, la provincia de Buenos Aires se mantuvo ___ de la Confederación Argentina."

explicacion: |
  Buenos Aires no participó en el proceso constituyente de 1853 y mantuvo su autonomía, formando un Estado separado de la Confederación Argentina durante varios años.
```

### 2 — El proceso de reincorporación
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["batalla_de_pavon", "reincorporacion", "unificacion"]

variables:
  escenario: uno_de([["1861", "Batalla de Pavón"], ["1853", "Sanción de la Constitución"]])
  año: escenario[0]
  evento: escenario[1]

respuesta: "1861"
tipo: "mc"
opciones_explicitas: ["1853", "1861", "1880", "1916"]

enunciado: "La reincorporación definitiva de Buenos Aires a la unidad nacional se produjo en el año {año}, tras el desenlace de la {evento}."

explicacion: |
  La Batalla de Pavón en 1861 fue el hito que permitió la unificación política y la integración de Buenos Aires al resto de las provincias argentinas.
```

### 3 — Cronología de la unificación
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "avanzado"
  tags: ["ordenar", "cronologia"]

opciones_explicitas: ["Sanción de la Constitución Nacional", "Separación de Buenos Aires", "Batalla de Pavón", "Reincorporación de Buenos Aires"]
respuesta: ["Sanción de la Constitución Nacional", "Separación de Buenos Aires", "Batalla de Pavón", "Reincorporación de Buenos Aires"]
tipo: "ordenar"

enunciado: "Ordena cronológicamente los siguientes hechos históricos de la organización nacional:"

explicacion: |
  La secuencia correcta comienza con la sanción de la Constitución (1853), la consecuente separación de Buenos Aires, la batalla que definió el rumbo político (Pavón, 1861) y la posterior integración.
```

### 4 — El rol de la Batalla de Pavón
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["pavon", "unificacion"]

respuesta: "reincorporación"
tipo: "completar"
respuestas_validas: ["reincorporación", "unificación"]

enunciado: "El desenlace de la Batalla de Pavón facilitó la ___ de la provincia de Buenos Aires a la unidad nacional."

explicacion: |
  La victoria/desenlace de Pavón permitió que Buenos Aires dejara de ser un estado separado y se integrara al proceso de organización nacional.
```

### 5 — La situación de Buenos Aires en 1853
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["buenos_aires", "constitucion"]

respuesta: "no"
tipo: "mc"
opciones_explicitas: ["si", "no", "tal vez", "parcialmente"]

enunciado: "¿Firmó la provincia de Buenos Aires la Constitución Nacional de 1853?"

explicacion: |
  No, Buenos Aires se opuso a la Constitución de 1853, manteniendo su propia organización y separándose de la Confederación Argentina.
```