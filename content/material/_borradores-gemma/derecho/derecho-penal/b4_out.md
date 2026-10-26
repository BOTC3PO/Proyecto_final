### 1 — Diferencia con el Derecho Civil
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["comparacion", "derecho_civil"]

respuesta: "sanción"
tipo: completar
respuestas_validas: ["sanción", "pena"]

enunciado: "Mientras que el Derecho Civil busca la reparación del daño mediante la indemnización, el Derecho Penal busca la imposición de una ___ al infractor."

explicacion: |
  El Derecho Civil tiene un fin resarcitorio (reparar el daño), mientras que el Derecho Penal tiene un fin punitivo (aplicar una pena).
```

### 2 — Naturaleza de la sanción
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["naturaleza", "derecho_civil"]

variables:
  es_penal: falso

respuesta: es_penal
tipo: vf

enunciado: "A diferencia del Derecho Civil, donde el incumplimiento de una obligación suele derivar en una indemnización, en el Derecho Penal el incumplimiento de una norma puede derivar en la privación de la libertad."

explicacion: |
  Correcto. La privación de la libertad es una sanción propia del ámbito penal y no existe en el ámbito civil.
```

### 3 — Ámbito de aplicación
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["comparacion", "derecho_administrativo"]

variables:
  escenario: uno_de([0, 1])

respuesta: datos[escenario][1]
tipo: mc
opciones_explicitas: ["Sanción administrativa", "Pena privativa de la libertad", "Indemnización de daños y perjuicios", "Sanción disciplinaria interna"]

enunciado: "Si un conductor excede los límites de velocidad, recibe una multa (Derecho Administrativo). Si un conductor causa un accidente por conducir en estado de ebriedad, puede recibir una ___ (Derecho Penal)."

datos:
  - ["Sanción administrativa", "Sanción administrativa"]
  - ["Pena privativa de la libertad", "Pena privativa de la libertad"]

explicacion: |
  El Derecho Penal regula conductas que afectan bienes jurídicos fundamentales y aplica penas, a diferencia del administrativo que aplica sanciones de carácter reglamentario.
```

### 4 — Elementos de la norma
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["principios", "legalidad"]

respuesta: ["Principio de legalidad", "Principio de culpabilidad", "Principio de lesividad"]
tipo: ordenar

opciones_explicitas: ["Principio de legalidad", "Principio de culpabilidad", "Principio de lesividad"]

enunciado: "Ordene los principios fundamentales del Derecho Penal que lo distinguen de otras ramas (como el Derecho Civil) para asegurar que no haya arbitrariedad estatal:"

pasos:
  - "Primero: No hay delito sin ley previa (Nullum crimen sine lege)."
  - "Segundo: Solo se puede reprochar la conducta al autor si hubo voluntad o negligencia (Culpabilidad)."
  - "Tercero: Debe existir una lesión o puesta en peligro de un bien jurídico (Lesividad)."

explicacion: |
  El orden lógico-sistemático para la aplicación de la ley penal requiere la existencia de una norma previa, la responsabilidad del autor y la afectación de un bien jurídico.
```

### 5 — Sujeto activo en el conflicto
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "avanzado"
  tags: ["sujeto", "estado"]

variables:
  caso: uno_de([0, 1])

respuesta: datos[caso][1]
tipo: mc
opciones_explicitas: ["Un particular contra otro particular", "El Estado contra un particular", "Un Estado contra otro Estado", "Un particular contra una empresa"]

datos:
  - ["Conflicto Civil", "Un particular contra otro particular"]
  - ["Conflicto Penal", "El Estado contra un particular"]

enunciado: "En el Derecho Civil, el conflicto es típicamente entre particulares. En el Derecho Penal, el conflicto se caracteriza porque el sujeto activo es ___."

explicacion: |
  En el Derecho Penal, el Estado interviene como el sujeto que ejerce el 'ius puniendi' (derecho a castigar) frente al infractor.
```