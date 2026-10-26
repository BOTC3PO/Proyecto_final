### 1 — Evidencia vs. Opinión
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["metodologia", "argumentacion"]

respuesta: "evidencia"
tipo: "completar"
respuestas_validas: ["evidencia", "datos", "hechos"]

enunciado: "Mientras que una opinión es un juicio subjetivo sin necesidad de validación, la ___ es un dato o hecho comprobable que sustenta una conclusión científica."

explicacion: |
  La evidencia científica se distingue de la opinión porque es verificable, reproducible y puede ser contrastada mediante observación o experimentación.
```

### 2 — Distinción entre Correlación y Causalidad
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["logica", "metodologia"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [
    ["Aumento de ventas de helados", "Aumento de ataques de tiburones"],
    ["Aumento de temperatura global", "Aumento de incendios forestales"]
  ]

respuesta: "correlación"
tipo: "mc"
opciones_explicitas: ["causalidad", "correlación", "coincidencia", "hipótesis"]

enunciado: "En el escenario {escenarios[escenario_idx][0]} y {escenarios[escenario_idx][1]}, la relación observada entre ambas variables es una {escenarios[escenario_idx][1]} pero no necesariamente una relación de causa-efecto. ¿Cómo se define este fenómeno?"

explicacion: |
  La correlación indica que dos variables cambian juntas, pero no implica que una cause la otra. Confundir esto con causalidad es un error lógico común en la argumentación científica.
```

### 3 — Validez de la Evidencia
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["logica", "argumentacion"]

respuesta: falso
tipo: "vf"

enunciado: "Una conclusión científica es válida si se basa únicamente en la experiencia personal de un investigador, independientemente de si otros científicos pueden replicar el resultado."

explicacion: |
  Falso. La ciencia requiere replicabilidad y evidencia empírica que trascienda la subjetividad individual para ser considerada válida.
```

### 4 — Jerarquía de la Evidencia
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["metodologia", "jerarquia"]

respuesta: ["Opinión de experto", "Estudio de caso", "Estudio observacional", "Ensayo clínico aleatorizado"]
tipo: "ordenar"
opciones_explicitas: ["Opinión de experto", "Estudio de caso", "Estudio observacional", "Ensayo clínico aleatorizado"]

enunciado: "Ordene los siguientes niveles de evidencia de MENOR a MAYOR rigor científico para defender una conclusión médica:"

explicacion: |
  El rigor aumenta a medida que se controla la selección de la muestra y se minimizan los sesgos, siendo los ensayos clínicos aleatorizados el estándar de oro.
```

### 5 — Evidencia vs. Hipótesis
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["metodologia", "logica"]

respuesta: "hipótesis"
tipo: "completar"
respuestas_validas: ["hipótesis", "suposición", "conjetura"]

enunciado: "Una ___ es una explicación provisional que requiere ser contrastada con evidencia para ser aceptada, mientras que la evidencia es el soporte empírico que permite validarla o refutarla."

explicacion: |
  La hipótesis es el punto de partida de la investigación (una propuesta explicativa), mientras que la evidencia es la herramienta para probar si dicha propuesta es correcta.
```