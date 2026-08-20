### 1 — El inicio del proceso
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["revolucion_de_mayo", "independencia", "procesos_historicos"]

respuesta: "1810"
tipo: "input"
tolerancia_abs: 0

enunciado: "Aunque la independencia se declaró formalmente en 1816, la Revolución de Mayo ocurrió en el año ____."

explicacion: |
  La Revolución de Mayo de 1810 marcó el inicio del proceso de ruptura con el poder colonial, pero no fue el fin del camino hacia la soberanía.
```

### 2 — ¿Qué se buscaba en 1810?
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["cabildo_abierto", "soberania"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["La Primera Junta", "el gobierno de la Junta"],
    ["El Primer Congreso", "la autoridad del Congreso"]
  ]

opciones_explicitas: ["gobernanza local", "soberanía absoluta", "restitución de la monarquía española", "subordinación a la corona británica"]
respuesta: "gobernanza local"
tipo: "mc"

enunciado: "Tras la Revolución de Mayo, el objetivo inmediato de las autoridades locales era establecer la {escenarios[escenario_idx][0]} para gestionar los asuntos de la región, pero esto no significaba una independencia total inmediata."

explicacion: |
  En 1810 se buscaba la autonomía para gobernarse a sí mismos (frente a la crisis de la corona), pero legalmente se mantenía una ambigüedad respecto a la soberanía absoluta que se alcanzaría en 1816.
```

### 3 — La cronología de la emancipación
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["cronologia", "procesos"]

opciones_explicitas: ["Revolución de Mayo", "Congreso de Tucumán", "Declaración de la Independencia"]
respuesta: ["Revolución de Mayo", "Congreso de Tucumán", "Declaración de la Independencia"]
tipo: "ordenar"

enunciado: "Ordena cronológicamente los hitos del proceso de emancipación argentina:"

explicacion: |
  El proceso fue gradual: primero la ruptura del vínculo con España (1810), luego la organización política en el Congreso (1816) y finalmente la declaración formal de la independencia.
```

### 4 — El carácter de la Revolución
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["causas", "consecuencias"]

respuesta: "proceso"
tipo: "completar"
respuestas_validas: ["proceso", "etapa", "punto de partida"]

enunciado: "La Revolución de Mayo no debe entenderse como el fin de la lucha, sino como el ___ que dio inicio a una compleja serie de conflictos y debates políticos."

explicacion: |
  Es un error histórico considerar a mayo de 1810 como la independencia definitiva; fue el motor que desencadenó un proceso de décadas.
```

### 5 — El debate de la soberanía
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["soberania", "debate"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["la legitimidad del Rey", "la autoridad de las juntas"],
    ["la soberanía popular", "la voluntad de los pueblos"]
  ]
  respuestas: [
    ["la legitimidad del Rey", "la autoridad de las juntas"],
    ["la soberanía popular", "la voluntad de los pueblos"]
  ]

opciones_explicitas: ["la legitimidad del Rey", "la autoridad de las juntas", "la soberanía popular", "la voluntad de los pueblos"]
respuesta: "la autoridad de las juntas"
tipo: "mc"

enunciado: "En el debate post-revolucionario, la gran incógnita era si la soberanía residía en {casos[caso_idx][0]} o si, ante la ausencia del monarca, la autoridad pasaba a ser de {casos[caso_idx][1]}."

explicacion: |
  El debate entre la 'retroversión de la soberanía' (el poder vuelve al pueblo) y la lealtad a la corona fue el eje central de las discusiones iniciadas en mayo de 1810.
```