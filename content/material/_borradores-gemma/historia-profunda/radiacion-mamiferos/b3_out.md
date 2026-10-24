### 1 — Concepto de radiación adaptativa
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["evolucion", "adaptacion"]

tipo: mc
opciones_explicitas: ["Un cambio lento y gradual de una especie", "La diversificación rápida de un linaje al ocupar nuevos nichos", "La extinción masiva de un grupo de especies", "La mutación de un solo gen en un individuo"]

enunciado: "En biología evolutiva, ¿qué describe mejor el proceso de una radiación adaptativa?"

explicacion: |
  La radiación adaptativa ocurre cuando un linaje ancestral se diversifica rápidamente en una gran variedad de formas para aprovechar diferentes recursos o nichos ecológicos disponibles.
```

### 2 — Factores que impulsan la radiación
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["ecologia", "nichos"]

variables:
  escenario: uno_de([
    ["aparición de nuevas islas volcánicas", "colonización de hábitats vacíos"],
    ["extinción masiva de competidores", "disponibilidad de nuevos nichos ecológicos"],
    ["cambio climático global", "apertura de nuevos espacios adaptativos"]
  ])

tipo: completar
respuestas_validas: ["disponibilidad de nuevos nichos ecológicos", "disponibilidad de nuevos nichos ecológicos", "disponibilidad de nuevos nichos ecológicos"]
respuesta: escenario[0][1]

enunciado: "La radiación adaptativa suele ser desencadenada por la {escenario[0][0]}, lo que permite la ___."

explicacion: |
  Cuando aparecen nuevos entornos o se liberan nichos (por ejemplo, tras una extinción masiva), los linajes sobrevivientes pueden diversificarse rápidamente para ocupar esos espacios.
```

### 3 — El caso de los mamíferos post-extinción
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["paleontologia", "k-pg"]

tipo: mc
opciones_explicitas: ["Los dinosaurios no pudieron adaptarse", "La extinción de los dinosaurios permitió la radiación de los mamíferos", "Los mamíferos ya eran gigantes antes de la extinción", "La radiación ocurrió por la aparición de las plantas"]

enunciado: "Tras la extinción masiva del Cretácico-Paleógeno, ¿por qué los mamíferos experimentaron una radiación adaptativa tan marcada?"

explicacion: |
  La desaparición de los dinosaurios no avianos liberó una enorme cantidad de nichos ecológicos, permitiendo que los mamíferos, que antes eran mayormente pequeños, se diversificaran en una multitud de formas.
```

### 4 — Secuencia de un proceso adaptativo
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["proceso", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Aparición de nuevos nichos o hábitats", "Colonización de los nuevos entornos", "Diversificación en múltiples especies con rasgos distintos"]

enunciado: "Ordena cronológicamente los pasos típicos de una radiación adaptativa:"

explicacion: |
  Primero debe existir una oportunidad ecológica (nicho), luego el linaje debe colonizar ese espacio y finalmente la selección natural debe favorecer la especialización en diferentes formas.
```

### 5 — Cálculo de tasa de especiación (Simulación)
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["matematica", "especiacion"]

variables:
  datos: uno_de([
    [10, 5],
    [100, 20],
    [1000, 50]
  ])

tipo: input
respuesta: datos[0][1]
tolerancia_abs: 0

enunciado: "Si un linaje de mamíferos experimenta una radiación adaptativa donde se crean {datos[0][0]} especies nuevas en un periodo de tiempo determinado, y la tasa de especiación efectiva es de la mitad del total de especies nuevas, ¿cuántas especies nuevas se crearon en este escenario de diversificación rápida?"

pasos:
  - "Identificar el número total de especies nuevas en el escenario: {datos[0][0]}"
  - "Calcular la mitad de ese valor para obtener la respuesta."

explicacion: |
  En este ejercicio hipotético, si el total de nuevas especies es {datos[0][0]}, la respuesta es la mitad de ese valor según el enunciado.
```