### 1 — Diferencia entre Juicio Oral y Etapa de Instrucción
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["proceso_penal", "etapas"]

respuesta: "audiencia"
tipo: "completar"
respuestas_validas: ["audiencia"]

enunciado: "A diferencia de la etapa de instrucción, donde se recolectan elementos de convicción, el juicio oral se desarrolla mediante una ___ pública y contradictoria."

explicacion: |
  La etapa de instrucción tiene como fin la investigación y recolección de pruebas, mientras que el juicio oral es la etapa de debate y decisión.
```

### 2 — Principio de Inmediación en el Juicio Oral
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["principios_procesales", "inmediación"]

variables:
  es_inmediato: true

respuesta: es_inmediato
tipo: "vf"

enunciado: "El principio de inmediación exige que el tribunal debe tener contacto directo con la producción de la prueba durante el juicio oral, sin intermediarios."

explicacion: |
  La inmediación es un pilar del juicio oral: el juez debe presenciar directamente la declaración de testigos y peritos para valorar la prueba.
```

### 3 — Elementos que distinguen el Juicio Oral
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "basico"
  tags: ["caracteristicas", "debate"]

respuesta: "Oralidad"
tipo: "mc"
opciones_explicitas: ["Oralidad", "Escrituriedad", "Secreto", "Inmediatez"]

enunciado: "Si bien ambos procesos buscan la verdad, lo que distingue fundamentalmente al juicio oral de los sistemas escritos antiguos es la ___."

explicacion: |
  La oralidad permite la contradicción inmediata y la fluidez del debate, a diferencia de los sistemas donde solo se leen actas escritas.
```

### 4 — Secuencia del Debate en Juicio Oral
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "intermedio"
  tags: ["procedimiento", "orden"]

respuesta: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura"]
tipo: "ordenar"
opciones_explicitas: ["Alegatos de apertura", "Producción de prueba", "Alegatos de clausura"]

enunciado: "Ordene cronológicamente las fases principales del debate en un juicio oral:"

explicacion: |
  El juicio comienza con la presentación de las teorías del caso (apertura), sigue con el examen de pruebas y finaliza con los argumentos finales (clausura).
```

### 5 — El rol de la prueba en el Juicio Oral
```
metadata:
  materia: "derecho"
  tema: "juicio_oral"
  nivel: "avanzado"
  tags: ["pruebas", "argumentacion"]

variables:
  escenario: uno_de([0, 1])
  datos: [["presentación de pruebas", "determinar culpabilidad"], ["argumentos", "convencer al juez"]]

respuesta: datos[escenario][1]
tipo: "mc"
opciones_explicitas: ["presentación de pruebas", "argumentos", "determinar culpabilidad", "convencer al juez"]

enunciado: "En el juicio oral, la etapa de {datos[escenario][0]} tiene como objetivo principal {datos[escenario][1]}."

explicacion: |
  El objetivo de la producción probatoria es aportar elementos que permitan al tribunal alcanzar la certeza necesaria para dictar un veredicto.
```