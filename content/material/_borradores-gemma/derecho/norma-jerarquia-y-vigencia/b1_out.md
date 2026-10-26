### 1 — Concepto de norma jurídica
```
metadata:
  materia: "derecho"
  tema: "norma_jerarquia_y_vigencia"
  nivel: "basico"
  tags: ["definicion", "norma"]

tipo: mc
opciones_explicitas: ["Un conjunto de reglas de conducta dictadas por una autoridad legítima para regular la convivencia social.", "Un conjunto de opiniones personales sobre lo que es justo o injusto.", "Una sugerencia de comportamiento que no conlleva sanción legal.", "Un conjunto de costumbres que se repiten en el tiempo sin necesidad de aprobación estatal."]

enunciado: "Se define como norma jurídica a ___."

respuesta: "Un conjunto de reglas de conducta dictadas por una autoridad legítima para regular la convivencia social."

explicacion: |
  La norma jurídica es un mandato dictado por un órgano competente que tiene como fin regular la conducta humana en sociedad, cuya observancia puede ser exigida mediante la aplicación de una sanción.
```

### 2 — La Pirámide de Kelsen
```
metadata:
  materia: "derecho"
  tema: "norma_jerarquia_y_vigencia"
  nivel: "basico"
  tags: ["jerarquia", "kelsen"]

tipo: ordenar
opciones_explicitas: ["Constitución Nacional", "Leyes Nacionales", "Decretos del Poder Ejecutivo", "Reglamentos"]

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía según la doctrina de la Pirámide de Kelsen:"

respuesta: ["Constitución Nacional", "Leyes Nacionales", "Decretos del Poder Ejecutivo", "Reglamentos"]

explicacion: |
  En un sistema jurídico jerarquizado, la Constitución es la norma suprema. Las leyes nacionales se encuentran por debajo de la Constitución, seguidas por los decretos y, finalmente, los reglamentos.
```

### 3 — Vigencia de la norma
```
metadata:
  materia: "derecho"
  tema: "norma_jerarquia_y_vigencia"
  nivel: "intermedio"
  tags: ["vigencia", "publicacion"]

variables:
  escenario: uno_de([["publicación en el Boletín Oficial", "vigente"], ["omisión de publicación", "inexistente"]])
  idx: uno_de([0, 1])

tipo: completar
respuestas_validas: ["publicación en el Boletín Oficial", "omisión de publicación"]

enunciado: "Para que una norma sea obligatoria y tenga vigencia, es requisito indispensable su ___."

respuesta: escenario[idx][0]

explicacion: |
  La vigencia de una norma comienza, por regla general, desde su publicación en el órgano oficial correspondiente (como el Boletín Oficial), permitiendo que sea conocida por todos los ciudadanos.
```

### 4 — Validez y jerarquía
```
metadata:
  materia: "derecho"
  tema: "norma_jerarquia_y_vigencia"
  nivel: "intermedio"
  tags: ["validez", "jerarquia"]

tipo: vf

enunciado: "¿Puede un decreto del Poder Ejecutivo contradecir lo establecido en la Constitución Nacional sin perder su validez jurídica?"

respuesta: falso

explicacion: |
  No. Debido al principio de jerarquía normativa, ninguna norma de inferior rango (como un decreto) puede contradecir o vulnerar lo establecido por una norma de rango superior (la Constitución).
```

### 5 — El concepto de sanción
```
metadata:
  materia: "derecho"
  tema: "norma_jerarquia_y_vigencia"
  nivel: "basico"
  tags: ["sancion", "caracteristica"]

tipo: mc
opciones_explicitas: ["Coercibilidad", "Moralidad", "Costumbre", "Opinión"]

enunciado: "La característica que permite al Estado imponer una consecuencia jurídica ante el incumplimiento de una norma se denomina ___."

respuesta: "Coercibilidad"

explicacion: |
  La coercibilidad es la posibilidad legítima de aplicar la fuerza o la sanción por parte del Estado para asegurar el cumplimiento de la norma jurídica.
```