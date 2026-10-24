# Vida Cotidiana — Garantías: derechos y plazos (cuestionario, 21 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Ley 24.240: garantía legal
> mínima 6 meses (nuevo) / 3 meses (usado), obligatoria y gratuita.

---

### 1 — La garantía legal es obligatoria

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "basico"
  tags: ["garantias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En Argentina, la garantía legal de un producto existe por ley, sin importar si el vendedor la ofrece explícitamente o no."

explicacion: |
  La Ley 24.240 de Defensa del Consumidor la establece como obligatoria.
```

### 2 — Es gratuita

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "basico"
  tags: ["garantias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La garantía legal es gratuita: no se puede cobrar por una reparación o cambio que corresponda dentro de ese plazo."

explicacion: |
  Es parte de lo que la hace una garantía "legal" y no comercial.
```

### 3 — Plazo mínimo para productos nuevos

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "basico"
  tags: ["garantias", "vocabulario"]

enunciado: "¿Cuál es el plazo mínimo de garantía legal para un producto NUEVO en Argentina?"
tipo: mc
opciones_explicitas:
  - "6 meses"
  - "3 meses"
  - "12 meses"
respuesta: "6 meses"

explicacion: |
  Es el plazo mínimo que fija la Ley 24.240 para productos nuevos.
```

### 4 — Plazo mínimo para productos usados

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "basico"
  tags: ["garantias", "vocabulario"]

enunciado: "¿Cuál es el plazo mínimo de garantía legal para un producto USADO en Argentina?"
tipo: mc
opciones_explicitas:
  - "3 meses"
  - "6 meses"
  - "1 mes"
respuesta: "3 meses"

explicacion: |
  Es la mitad del plazo mínimo de un producto nuevo.
```

### 5 — Son plazos mínimos, no máximos

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "intermedio"
  tags: ["garantias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los plazos de 6 y 3 meses son mínimos legales: un vendedor puede ofrecer una garantía más larga, pero nunca menos que eso."

explicacion: |
  Ofrecer menos del mínimo legal no sería válido, aunque el consumidor
  lo hubiera aceptado.
```

### 6 — Qué cubre la garantía legal

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "intermedio"
  tags: ["garantias", "vocabulario"]

enunciado: "¿Qué cubre típicamente la garantía legal de un producto?"
tipo: mc
opciones_explicitas:
  - "Fallas de fabricación o de funcionamiento del producto"
  - "Cualquier daño, incluido el causado por mal uso del consumidor"
  - "Sólo el robo o pérdida del producto"
respuesta: "Fallas de fabricación o de funcionamiento del producto"

explicacion: |
  El mal uso por parte del consumidor queda fuera de lo que cubre la
  garantía.
```

### 7 — No cubre el mal uso

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "intermedio"
  tags: ["garantias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La garantía legal no cubre daños causados por el mal uso del producto por parte del consumidor, sólo fallas propias del producto."

explicacion: |
  Es una distinción importante para entender qué reclamos son válidos.
```

### 8 — El tiempo en reparación prolonga la garantía

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "avanzado"
  tags: ["garantias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El tiempo que un producto pasó en reparación (sin que el consumidor pudiera usarlo) se suma al plazo de garantía original."

explicacion: |
  El plazo de garantía no sigue corriendo mientras el producto está en
  el service, fuera del poder del consumidor.
```

### 9 — Calcular hasta cuándo se extiende la garantía

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "avanzado"
  tags: ["garantias", "calculo"]

variables:
  dias_reparacion: random(5, 40)

respuesta: 180 + dias_reparacion
tipo: input
tolerancia_abs: 0

enunciado: "Un producto nuevo tiene garantía legal de 180 días. Durante ese plazo, estuvo {dias_reparacion} días en reparación, sin que su dueño pudiera usarlo. ¿Cuántos días de garantía en total corresponden, sumando esa prolongación?"

explicacion: |
  Se suman los días de garantía original más los días que el producto
  estuvo fuera de uso por la reparación.
```

### 10 — Garantía legal vs. garantía extendida

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "intermedio"
  tags: ["garantias", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre garantía legal y garantía extendida (comercial)?"
tipo: mc
opciones_explicitas:
  - "La legal es obligatoria y gratuita; la extendida es opcional, y casi siempre tiene un costo adicional"
  - "Son dos nombres distintos para exactamente lo mismo"
  - "La extendida es obligatoria; la legal es opcional"
respuesta: "La legal es obligatoria y gratuita; la extendida es opcional, y casi siempre tiene un costo adicional"

explicacion: |
  Confundirlas puede llevar a pagar de más por algo que la ley ya cubre
  gratis durante el plazo mínimo.
```

### 11 — Pagar de más por desconocer la garantía legal

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "intermedio"
  tags: ["garantias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "No saber que existe una garantía legal mínima gratuita puede llevar a pagar de más por una garantía extendida que cubre, en parte, lo mismo que ya está cubierto por ley."

explicacion: |
  Conocer el plazo mínimo legal ayuda a decidir si vale la pena pagar
  por una cobertura extra.
```

### 12 — Comparar plazos: nuevo vs. usado

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "basico"
  tags: ["garantias", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un producto nuevo tiene un plazo mínimo de garantía legal mayor que el mismo tipo de producto comprado usado."

explicacion: |
  6 meses (nuevo) es el doble que 3 meses (usado).
```

### 13 — La garantía no depende de que el vendedor la mencione

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "basico"
  tags: ["garantias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La garantía legal existe aunque el vendedor no la mencione explícitamente al momento de la venta."

explicacion: |
  Es un derecho que la ley otorga automáticamente, no algo que dependa
  de que se lo ofrezcan.
```

### 14 — Reclamar dentro del plazo de garantía

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "intermedio"
  tags: ["garantias", "problema"]

variables:
  dias_desde_compra: random(30, 250)

respuesta: (dias_desde_compra <= 180)
tipo: vf

enunciado: "Un producto nuevo se compró hace {dias_desde_compra} días, y ahora presenta una falla de fabricación. ¿Todavía está dentro del plazo mínimo de garantía legal (180 días)?"

explicacion: |
  Se compara la cantidad de días transcurridos contra el plazo mínimo de
  180 días (6 meses) para productos nuevos.
```

### 15 — La garantía es un derecho, no un favor

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "basico"
  tags: ["garantias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Reclamar la garantía legal de un producto es ejercer un derecho establecido por ley, no pedirle un favor al vendedor."

explicacion: |
  Es una idea central de la Ley de Defensa del Consumidor: son derechos,
  no gestos de buena voluntad del vendedor.
```

### 16 — Un golpe accidental no está cubierto

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "intermedio"
  tags: ["garantias", "problema"]

respuesta: falso
tipo: vf

enunciado: "¿Un celular que se rompió porque se cayó al piso por accidente está cubierto por la garantía legal del producto?"

explicacion: |
  La garantía cubre fallas del producto en sí, no daños accidentales
  causados por el uso.
```

### 17 — Ordenar plazos de garantía de menor a mayor

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "basico"
  tags: ["garantias", "orden"]

tipo: ordenar
enunciado: "Ordená estos plazos de garantía de menor a mayor."
opciones_explicitas:
  - "Garantía legal de un producto nuevo (6 meses)"
  - "Garantía legal de un producto usado (3 meses)"
  - "Una garantía extendida comprada aparte (24 meses)"
respuesta_orden: ["Garantía legal de un producto usado (3 meses)", "Garantía legal de un producto nuevo (6 meses)", "Una garantía extendida comprada aparte (24 meses)"]

explicacion: |
  La extendida siempre va más allá del mínimo legal, que ya de por sí es
  mayor para productos nuevos que para usados.
```

### 18 — Ninguna garantía dura para siempre

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "basico"
  tags: ["garantias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Toda garantía, legal o extendida, tiene un plazo definido — ninguna cubre un producto para siempre."

explicacion: |
  Después de vencido el plazo, cualquier reparación corre por cuenta del
  consumidor (salvo que tenga otra cobertura).
```

### 19 — La ley fija un piso, no un techo

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "intermedio"
  tags: ["garantias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los plazos de la Ley 24.240 son un piso mínimo obligatorio: un vendedor puede ofrecer más garantía por su cuenta, pero no puede ofrecer menos que ese piso."

explicacion: |
  Es la misma idea que ya se vio: mínimo legal, no un tope.
```

### 20 — Verificar un reclamo de garantía en un producto usado

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "intermedio"
  tags: ["garantias", "problema"]

variables:
  dias_desde_compra: random(30, 150)

respuesta: (dias_desde_compra <= 90)
tipo: vf

enunciado: "Un producto USADO se compró hace {dias_desde_compra} días, y ahora presenta una falla de fabricación. ¿Todavía está dentro del plazo mínimo de garantía legal para productos usados (90 días)?"

explicacion: |
  Se compara la cantidad de días transcurridos contra el plazo mínimo de
  90 días (3 meses) para productos usados.
```

### 21 — Garantías (cierre)

```
metadata:
  materia: "vida-cotidiana"
  tema: "garantias"
  nivel: "basico"
  tags: ["garantias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La garantía legal es obligatoria y gratuita, con un mínimo de 6 meses (nuevo) o 3 meses (usado), cubre fallas del producto (no mal uso), y el tiempo en reparación prolonga ese plazo."

explicacion: |
  Es la idea central de todo el tema.
```
