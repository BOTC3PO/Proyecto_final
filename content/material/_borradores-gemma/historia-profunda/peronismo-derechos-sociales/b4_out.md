### 1 — La polarización social
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["polarizacion", "sociedad"]

variables:
  idx: uno_de([0,1])
  escenario: [
    ["El peronismo generó una división entre sectores que lo veían como una herramienta de justicia social y sectores que lo veían como una amenaza a las instituciones.", "La polarización fue un rasgo distintivo del periodo."],
    ["El apoyo masivo de los trabajadores consolidó una nueva base política, mientras que la oposición se concentró en las clases medias y élites.", "La base social del movimiento fue transformadora."]
  ]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["La polarización fue un rasgo distintivo del periodo.", "La base social del movimiento fue transformadora."]

enunciado: "{escenario[idx][0]}"

explicacion: |
  El peronismo introdujo una nueva dinámica de participación política que fracturó la estructura social tradicional argentina, creando una división que ha persistido en la cultura política del país.
```

### 2 — La base del apoyo popular
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["clases_sociales", "trabajadores"]

respuesta: "clase_obrera"
tipo: completar
respuestas_validas: ["clase_obrera", "clases_medias", "élite_terrateniente"]

enunciado: "El principal sector social que brindó el apoyo masivo y sostenido al movimiento peronista fue la ___."

explicacion: |
  La incorporación de la clase obrera a la vida política activa fue el pilar fundamental del movimiento, otorgándole un poder de movilización sin precedentes en la historia argentina.
```

### 3 — Sectores de oposición
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["oposición", "sectores_sociales"]

variables:
  opcion_correcta: uno_de(["clases_medias_urbanas", "sectores_rurales_oligárquicos", "sindicatos_tradicionales"])
  opcion_incorrecta_1: "sectores_rurales_oligárquicos"
  opcion_incorrecta_2: "sindicatos_tradicionales"

respuesta: opcion_correcta
tipo: mc
opciones_explicitas: ["clases_medias_urbanas", "sectores_rurales_oligárquicos", "sindicatos_tradicionales"]

enunciado: "Históricamente, uno de los sectores que manifestó una oposición más estructurada y constante a la hegemonía peronista fue el de las ___."

explicacion: |
  La oposición peronista fue heterogénea, pero las clases medias urbanas y la élite tradicional conformaron los núcleos de resistencia más significativos durante el periodo.
```

### 4 — La huella en la política actual
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "avanzado"
  tags: ["legado", "politica_argentina"]

respuesta: "identidad_politica"
tipo: completar
respuestas_validas: ["identidad_politica", "estabilidad_institucional", "sistema_partidario_unicos"]

enunciado: "El peronismo no solo fue un gobierno, sino que configuró una nueva ___ que sigue siendo un eje central en la política argentina contemporánea."

explicacion: |
  La capacidad de la identidad peronista para reorganizarse y permanecer como un actor central demuestra la profundidad de su impacto en la estructura política nacional.
```

### 5 — Secuencia de impacto social
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["proceso_historico", "derechos"]

respuesta: ["Reivindicación de derechos laborales", "Fortalecimiento del rol sindical", "Polarización de la estructura social"]
tipo: ordenar
opciones_explicitas: ["Reivindicación de derechos laborales", "Fortalecimiento del rol sindical", "Polarización de la estructura social"]

enunciado: "Ordene cronológicamente los efectos sociales derivados del ascenso del peronismo en la Argentina:"

explicacion: |
  El proceso comenzó con la conquista de derechos, continuó con la institucionalización de la fuerza sindical y culminó en una división social profunda entre partidarios y detractores.
```