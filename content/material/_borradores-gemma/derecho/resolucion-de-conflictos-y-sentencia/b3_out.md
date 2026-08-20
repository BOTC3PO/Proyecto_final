### 1 — El rol de la motivación en la sentencia
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["sentencia", "motivacion", "debido_proceso"]

tipo: vf
respuesta: falso

enunciado: "Una sentencia judicial es válida y legalmente vinculante incluso si el juez omite la motivación (explicación de los fundamentos de hecho y de derecho) en su decisión."

explicacion: |
  La motivación es un elemento esencial de la sentencia. La falta de motivación vulnera el derecho de defensa y el debido proceso, tornando la sentencia arbitraria y susceptible de nulidad.
```

### 2 — El principio de congruencia
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "avanzado"
  tags: ["congruencia", "sentencia", "linderos_judiciales"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[0, "El juez otorga una indemnización por daños que no fueron pedidos en la demanda."], [1, "El juez resuelve sobre todos los puntos objeto del litigio planteados por las partes."]]

tipo: mc
opciones_explicitas: ["Principio de Congruencia", "Principio de Preclusión", "Principio de Inmediación", "Principio de Oralidad"]
respuesta: escenarios[escenario_idx][0]

enunciado: "Si un juez decide sobre una cuestión que no ha sido objeto de la controversia planteada por las partes, está incurriendo en una violación del: ___"

explicacion: |
  El principio de congruencia exige que la sentencia sea coherente con las pretensiones de las partes; el juez no puede otorgar más de lo pedido (ultra petita) ni algo distinto a lo pedido (extra petita).
```

### 3 — Estructura de la resolución judicial
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["estructura", "sentencia", "partes"]

tipo: ordenar
opciones_explicitas: ["Vistos", "Considerando", "Fallo"]
respuesta: ["Vistos", "Considerando", "Fallo"]

enunciado: "Ordene cronológicamente las partes de una sentencia judicial estándar:"

explicacion: |
  La estructura clásica comprende: 1) Vistos (antecedentes), 2) Considerando (fundamentos de hecho y de derecho) y 3) Fallo (la decisión final o parte dispositiva).
```

### 4 — La diferencia entre hecho y derecho
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["hechos", "derecho", "subsuncion"]

tipo: completar
respuestas_validas: ["subsunción"]
respuesta: "subsunción"

enunciado: "El proceso de razonamiento mediante el cual el juez encuadra los hechos probados dentro de la norma jurídica aplicable se denomina ___."

explicacion: |
  La subsunción es la operación lógica de verificar si un hecho real coincide con los elementos descriptivos de una norma jurídica para aplicar sus consecuencias.
```

### 5 — La cosa juzgada
```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "avanzado"
  tags: ["cosa_juzgada", "seguridad_juridica"]

tipo: mc
opciones_explicitas: ["Cosa juzgada material", "Cosa juzgada formal", "Sentencia interlocutoria", "Recurso de apelación"]
respuesta: "Cosa juzgada material"

enunciado: "Cuando una sentencia firme impide que se vuelva a litigar sobre el mismo objeto y entre las mismas partes, estamos ante la: ___"

explicacion: |
  La cosa juzgada material es la autoridad de la cosa juzgada que impide la reapertura del debate sobre lo ya decidido, garantizando la seguridad jurídica.
```