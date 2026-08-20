### 1 — El efecto reset de las extinciones
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["extincion", "evolucion", "nichos"]

respuesta: "radiacion_adaptativa"
tipo: completar
respuestas_validas: ["radiacion_adaptativa", "radiacion_adaptativa"]

enunciado: "Cuando ocurre una extinción masiva, se eliminan la mayoría de los taxones dominantes, lo que permite que los supervivientes ocupen los nichos vacíos mediante un proceso conocido como ___."

explicacion: |
  Las extinciones masivas actúan como un 'reset' al eliminar la competencia de los grupos dominantes, permitiendo que los linajes supervivientes se diversifiquen rápidamente para ocupar los nuevos espacios ecológicos.
```

### 2 — Consecuencias de la extinción del Pérmico
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "avanzado"
  tags: ["permico", "trias", "evolucion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[ "la gran extinción", "el gran reset" ], [ "el fin de la vida", "la gran diversificación" ]]

opciones_explicitas:
  - "Aumentar la competencia"
  - "Reducir la diversidad y abrir nuevos nichos"
  - "Detener la selección natural"

respuesta: "Reducir la diversidad y abrir nuevos nichos"
tipo: mc

enunciado: "La extinción masiva del Pérmico-Triásico es considerada un evento de 'reset' evolutivo porque su principal efecto en la biodiversidad fue ___."

explicacion: |
  Al eliminar hasta el 95% de las especies, se eliminaron las barreras biológicas y la competencia de los grupos que dominaban el Paleozoico, permitiendo el surgimiento de los dinosaurios en el Mesozoico.
```

### 3 — Dinámica de nichos post-extinción
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["nichos", "seleccion_natural"]

respuesta: 0
tipo: mc
opciones_explicitas:
  - "Los supervivientes se adaptan a los nuevos nichos vacíos"
  - "La selección natural se detiene por falta de especies"
  - "La diversidad aumenta instantáneamente sin cambios genéticos"

enunciado: "Tras un evento de extinción masiva, ¿cuál es el papel de la selección natural en la reconstrucción de la biosfera?"

explicacion: |
  La selección natural no se detiene; de hecho, se acelera en términos de divergencia morfológica, ya que los supervivientes se adaptan rápidamente a las nuevas condiciones y nichos disponibles.
```

### 4 — Secuencia de un evento de 'reset'
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["secuencia", "evolucion"]

opciones_explicitas:
  - "Extinción masiva"
  - "Vaciamiento de nichos"
  - "Radiación adaptativa"

respuesta: ["Extinción masiva", "Vaciamiento de nichos", "Radiación adaptativa"]
tipo: ordenar

enunciado: "Ordene cronológicamente los eventos que caracterizan un ciclo de 'reset' evolutivo tras una crisis biológica:"

explicacion: |
  Primero ocurre el evento de extinción, luego quedan nichos ecológicos sin ocupar (vaciamiento), y finalmente los supervivientes evolucionan para llenarlos (radiación).
```

### 5 — Impacto en la biodiversidad
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "basico"
  tags: ["diversidad", "extincion"]

variables:
  valor_diversidad: uno_de([0, 1])
  datos: [[0.1, "baja"], [0.9, "alta"]]

respuesta: "baja"
tipo: mc
opciones_explicitas:
  - "baja"
  - "alta"
  - "constante"

enunciado: "Inmediatamente después de una extinción masiva, la diversidad biológica global es ___ en comparación con el periodo anterior."

explicacion: |
  Las extinciones masivas se definen precisamente por una caída drástica y rápida en la riqueza de especies y la diversidad funcional del ecosistema.
```