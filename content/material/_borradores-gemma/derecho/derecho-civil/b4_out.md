### 1 — Diferencia fundamental
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["definicion", "comparacion"]

respuesta: "derecho_privado"
tipo: completar
respuestas_validas: ["derecho_privado"]

enunciado: "Mientras que el derecho público regula la organización del Estado y sus relaciones con los particulares, el derecho civil pertenece al ámbito del ________."

explicacion: |
  El derecho civil se encarga de regular las relaciones entre particulares (personas físicas o jurídicas) en condiciones de igualdad, situándose dentro de la rama del derecho privado.
```

### 2 — El objeto del Derecho Civil
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["comparacion", "derecho_penal"]

opciones_explicitas: ["La sanción de penas privativas de la libertad", "La regulación de las relaciones privadas y el patrimonio", "La organización de la administración pública"]
respuesta: "La regulación de las relaciones privadas y el patrimonio"
tipo: mc

enunciado: "A diferencia del derecho penal, cuyo fin es imponer sanciones por delitos, el objeto principal del derecho civil es:"

explicacion: |
  El derecho civil se centra en la regulación de la vida privada, los contratos, la familia, la propiedad y las sucesiones, no en la persecución de delitos.
```

### 3 — Naturaleza de la norma
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["normas", "derecho_publico"]

respuesta: falso
tipo: vf

enunciado: "¿Es el derecho civil una rama del derecho público, dado que regula las normas de convivencia entre ciudadanos?"

explicacion: |
  Falso. El derecho civil es la columna vertebral del derecho privado. El derecho público es el que regula la estructura del Estado y el ejercicio de la soberanía.
```

### 4 — Jerarquía de las normas en contratos
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "avanzado"
  tags: ["contratos", "ordenar"]

opciones_explicitas: ["Normas de orden público", "Autonomía de la voluntad (acuerdo de partes)", "Cumplimiento de la prestación"]
respuesta: ["Normas de orden público", "Autonomía de la voluntad (acuerdo de partes)", "Cumplimiento de la prestación"]
tipo: ordenar

enunciado: "En la validez de un contrato civil, ordene cronológicamente la jerarquía de aplicación: primero las normas que no pueden ser alteradas por las partes, luego la voluntad de los contratantes y finalmente la ejecución del acto."

explicacion: |
  El orden jurídico establece que las normas de orden público son la base infranqueable; sobre ellas opera la autonomía de la voluntad para crear reglas particulares, las cuales culminan en el cumplimiento de lo pactado.
```

### 5 — Relación con el Derecho Administrativo
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["contratos", "derecho_administrativo"]

variables:
  escenario: uno_de([[true, "se rige por el derecho privado"], [false, "se rige por el derecho público"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["se rige por el derecho privado", "se rige por derecho público"]

enunciado: "Si un particular celebra un contrato de compraventa con otro particular, la naturaleza de la relación es que {escenario[idx][0]}."

explicacion: |
  En un contrato entre particulares, la relación es de derecho privado. Si una de las partes fuera el Estado actuando con prerrogativas de poder público, entraríamos en el ámbito del derecho administrativo.
```