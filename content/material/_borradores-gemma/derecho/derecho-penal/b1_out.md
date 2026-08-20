### 1 — Definición de Derecho Penal
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["definicion", "estado"]

respuesta: verdadero
tipo: vf

enunciado: "El Derecho Penal es la rama del derecho que regula la potestad punitiva del Estado, definiendo los delitos y las penas aplicables a quienes los cometen."

explicacion: |
  Correcto. El Derecho Penal establece el marco normativo para la imposición de sanciones por conductas que la sociedad considera delitos.
```

### 2 — Elementos de la conducta delictiva
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["terminologia", "delito"]

variables:
  escenario: uno_de([
    ["cometer un acto prohibido por la ley con intención de causar daño", "doloso"],
    ["cometer un acto prohibido por la ley sin intención pero con negligencia", "culposo"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["doloso", "culposo", "imprudente", "accidental"]

enunciado: "Si una persona actúa con la intención de producir un resultado típico y antijurídico, se dice que su conducta es de carácter: ___"

pasos:
  - "Identificar la intención (ánimo) del sujeto."
  - "Relacionar la intención con la clasificación del tipo de delito."

explicacion: |
  La conducta es {escenario[0]}. En derecho penal, cuando hay intención, el delito es {escenario[1]}.
```

### 3 — La Pena y su finalidad
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["pena", "finalidad"]

respuesta: "prevención y retribución"
tipo: completar
respuestas_validas: ["prevención y retribución", "castigo puro", "rehabilitación social", "represión"]

enunciado: "Tradicionalmente, la pena tiene como fines principales la ___."

explicacion: |
  La pena busca prevenir nuevos delitos (prevención) y castigar la infracción cometida (retribución).
```

### 4 — Principios fundamentales
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["principios", "legalidad"]

respuesta: verdadero
tipo: vf

enunciado: "El principio de legalidad establece que nadie puede ser condenado por una acción u omisión que no esté previamente establecida como delito por una ley escrita."

explicacion: |
  Es el principio fundamental 'nullum crimen, nulla poena sine lege'.
```

### 5 — Secuencia del proceso penal
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["procedimiento", "etapas"]

respuesta: ["Investigación", "Juicio", "Sentencia", "Ejecución"]
tipo: ordenar
opciones_explicitas: ["Investigación", "Juicio", "Sentencia", "Ejecución"]

enunciado: "Ordene cronológicamente las etapas fundamentales de un proceso penal estándar:"

explicacion: |
  El proceso inicia con la investigación de los hechos, sigue con el juicio oral para valorar pruebas, se dicta la sentencia y finaliza con la ejecución de la pena.
```