### 1 — Jerarquía de normas
```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "basico"
  tags: ["constitucion", "piramide_kelsen"]

respuesta: "Constitución Nacional"
tipo: "mc"
opciones_explicitas: ["Constitución Nacional", "Ley Nacional", "Decreto del Poder Ejecutivo", "Resolución Ministerial"]

enunciado: "En el ordenamiento jurídico, la norma de mayor jerarquía, que sirve de base para todas las demás y no puede ser contradicha por ninguna ley o decreto, es la _______."

explicacion: |
  Según la Pirámide de Kelsen, la Constitución Nacional es la norma suprema. Ninguna norma de inferior jerarquía (como una ley o un decreto) puede vulnerar lo establecido en ella.
```

### 2 — Validez vs. Vigencia
```
metadata:
  materia: "derecho"
  tema: "vigencia_normativa"
  nivel: "intermedio"
  tags: ["vigencia", "publicacion"]

respuesta: falso
tipo: "vf"

enunciado: "Una norma jurídica entra en vigencia automáticamente desde el momento en que es redactada y firmada por la autoridad competente, sin necesidad de ser publicada."

explicacion: |
  Para que una norma sea obligatoria y tenga vigencia, debe ser publicada en el Boletín Oficial (o medio equivalente) para que sea del conocimiento público. La mera firma no garantiza la vigencia.
```

### 3 — Confusión entre Ley y Decreto
```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["ley", "decreto", "jerarquia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[["Ley", "Decreto"], ["Decreto", "Ley"]]]

respuesta: datos[escenario_idx][0][0]
tipo: "mc"
opciones_explicitas: ["Ley", "Decreto", "Resolución"]

enunciado: "Si un {datos[escenario_idx][0][1]} contradice lo establecido en una {datos[escenario_idx][0][0]}, la norma de mayor jerarquía prevalece y el acto administrativo es inválido por jerarquía."

explicacion: |
  En la jerarquía normativa, la Ley (dictada por el Congreso) tiene un rango superior al Decreto (dictado por el Ejecutivo). Por lo tanto, un decreto no puede modificar ni contradecir una ley.
```

### 4 — Orden de prelación normativa
```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["orden", "jerarquia"]

opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales con jerarquía constitucional", "Leyes", "Decretos", "Reglamentos"]
respuesta: ["Constitución Nacional", "Tratados Internacionales con jerarquía constitucional", "Leyes", "Decretos", "Reglamentos"]
tipo: "ordenar"

enunciado: "Ordene las siguientes normas desde la de mayor jerarquía a la de menor jerarquía, considerando el bloque de constitucionalidad y la normativa infralegal."

explicacion: |
  El orden correcto sigue la supremacía constitucional, seguida por las leyes nacionales, los actos del poder ejecutivo (decretos) y finalmente las normas de menor rango como reglamentos o resoluciones.
```

### 5 — El vacío legal
```
metadata:
  materia: "derecho"
  tema: "vigencia_y_aplicacion"
  nivel: "avanzado"
  tags: ["analogia", "vacio_legal"]

respuesta: "analogía"
tipo: "completar"
respuestas_validas: ["analogía", "aplicación analógica"]

enunciado: "Cuando existe un vacío legal (una laguna en la ley) y un juez debe resolver un caso que no está expresamente regulado, debe recurrir a la _______ para aplicar una solución similar a un caso parecido."

explicacion: |
  La analogía es el método mediante el cual se aplica una norma existente a un caso no previsto, siempre que exista identidad de razón entre el caso regulado y el no regulado.