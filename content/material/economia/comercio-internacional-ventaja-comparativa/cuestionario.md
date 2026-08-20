# Economía — Comercio internacional: ventaja comparativa (cuestionario, 21 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Ventaja comparativa: menor
> costo de oportunidad, no ser absolutamente mejor. Ejemplo clásico:
> Ricardo, Inglaterra/Portugal, tela/vino.

---

### 1 — Qué explica la ventaja comparativa

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Qué explica la teoría de la ventaja comparativa?"
tipo: mc
opciones_explicitas:
  - "Por qué un país se especializa en producir ciertos bienes y comercia con otros países, en vez de producir todo por su cuenta"
  - "Cómo se calcula el tipo de cambio de una moneda"
  - "Cómo funciona el banco central de un país"
respuesta: "Por qué un país se especializa en producir ciertos bienes y comercia con otros países, en vez de producir todo por su cuenta"

explicacion: |
  Es la pregunta central que responde este tema.
```

### 2 — Quién formuló la teoría de la ventaja comparativa

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Quién formuló la teoría de la ventaja comparativa, en 1817?"
tipo: mc
opciones_explicitas:
  - "David Ricardo"
  - "Adam Smith"
  - "John Maynard Keynes"
respuesta: "David Ricardo"

explicacion: |
  Es el economista que formuló esta teoría específica.
```

### 3 — Qué es la ventaja absoluta

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Qué es tener \"ventaja absoluta\" en la producción de un bien?"
tipo: mc
opciones_explicitas:
  - "Producirlo con menos horas de trabajo que otro país, en términos absolutos"
  - "Tener menor costo de oportunidad al producirlo, sin importar las horas totales"
  - "Ser el único país que produce ese bien en el mundo"
respuesta: "Producirlo con menos horas de trabajo que otro país, en términos absolutos"

explicacion: |
  Es la idea intuitiva (y limitada) que la ventaja comparativa viene a
  superar.
```

### 4 — El límite de la ventaja absoluta

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un país fuera mejor que otro produciendo TODOS los bienes en términos absolutos, la lógica de la ventaja absoluta sugeriría, incorrectamente, que no le conviene comerciar con nadie."

explicacion: |
  Es justamente el problema que Ricardo resolvió con el concepto de
  costo de oportunidad.
```

### 5 — Qué es el costo de oportunidad, en este contexto

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "En el contexto de la ventaja comparativa, ¿qué es el costo de oportunidad de producir un bien?"
tipo: mc
opciones_explicitas:
  - "Cuánto hay que dejar de producir de otro bien para producir una unidad más del primero"
  - "El precio en dólares de ese bien"
  - "El impuesto que paga ese bien al exportarse"
respuesta: "Cuánto hay que dejar de producir de otro bien para producir una unidad más del primero"

explicacion: |
  Es el concepto central que reemplaza a la comparación absoluta de
  horas.
```

### 6 — Definición de ventaja comparativa

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Cuándo tiene un país \"ventaja comparativa\" en un bien?"
tipo: mc
opciones_explicitas:
  - "Cuando su costo de oportunidad de producir ese bien es MENOR que el de otro país"
  - "Cuando produce ese bien con menos horas en términos absolutos que otro país"
  - "Cuando es el único país que exporta ese bien"
respuesta: "Cuando su costo de oportunidad de producir ese bien es MENOR que el de otro país"

explicacion: |
  Es la definición central del tema: comparar costos de oportunidad,
  no horas absolutas.
```

### 7 — Portugal en el ejemplo clásico

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "En el ejemplo clásico de Ricardo (Inglaterra y Portugal, tela y vino), ¿qué característica tiene Portugal en términos absolutos?"
tipo: mc
opciones_explicitas:
  - "Es absolutamente mejor produciendo las dos cosas (tela y vino), necesita menos horas para ambas"
  - "Es absolutamente peor produciendo las dos cosas"
  - "Sólo puede producir vino, no tela"
respuesta: "Es absolutamente mejor produciendo las dos cosas (tela y vino), necesita menos horas para ambas"

explicacion: |
  Es el punto de partida del ejemplo: Portugal gana en términos
  absolutos en ambos bienes.
```

### 8 — Quién tiene ventaja comparativa en tela

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "En el ejemplo clásico de Ricardo, aunque Portugal sea absolutamente mejor en todo, ¿quién termina teniendo ventaja comparativa en tela?"
tipo: mc
opciones_explicitas:
  - "Inglaterra, porque su costo de oportunidad de producir tela (en términos de vino) es menor que el de Portugal"
  - "Portugal, porque produce tela con menos horas en términos absolutos"
  - "Ninguno de los dos: la ventaja comparativa no aplica en este ejemplo"
respuesta: "Inglaterra, porque su costo de oportunidad de producir tela (en términos de vino) es menor que el de Portugal"

explicacion: |
  Es el resultado central y contraintuitivo del ejemplo: la ventaja
  comparativa no depende de quién es mejor en términos absolutos.
```

### 9 — Calcular el costo de oportunidad de un bien

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "calculo"]

variables:
  horas_vino: random(2, 8)
  multiplicador: uno_de([2, 3, 4])
  horas_tela: horas_vino * multiplicador

respuesta: horas_tela / horas_vino
tipo: input
tolerancia_abs: 0

enunciado: "En un país, producir una unidad de tela lleva {horas_tela} horas, y producir una unidad de vino lleva {horas_vino} horas. ¿Cuántas unidades de vino se sacrifican (costo de oportunidad) por producir una unidad de tela?"

explicacion: |
  Costo de oportunidad de la tela (en vino) = horas de tela / horas de
  vino.
```

### 10 — Comparar el costo de oportunidad entre dos países

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "calculo"]

variables:
  horas_tela_pais1: random(50, 150)
  horas_vino_pais1: random(50, 150)
  horas_tela_pais2: random(50, 150)
  horas_vino_pais2: random(50, 150)

respuesta: (horas_tela_pais1 / horas_vino_pais1 < horas_tela_pais2 / horas_vino_pais2)
tipo: vf

enunciado: "País 1: {horas_tela_pais1} horas por tela, {horas_vino_pais1} horas por vino. País 2: {horas_tela_pais2} horas por tela, {horas_vino_pais2} horas por vino. ¿Tiene el País 1 ventaja comparativa en tela (menor costo de oportunidad de tela que el País 2)?"

explicacion: |
  Se compara el costo de oportunidad de tela (horas de tela / horas de
  vino) de cada país; el menor tiene la ventaja comparativa en tela.
```

### 11 — Qué gana cada país al especializarse y comerciar

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría de la ventaja comparativa, si cada país se especializa en el bien donde tiene ventaja comparativa y comercian entre sí, los dos pueden terminar con más de ambos bienes que si cada uno hubiera intentado producir todo por su cuenta."

explicacion: |
  Es la conclusión central de la teoría: la especialización y el
  comercio generan una ganancia conjunta.
```

### 12 — La ventaja comparativa no depende del desarrollo absoluto

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país muy desarrollado, con salarios altos, puede seguir teniendo ventaja comparativa en ciertos productos frente a un país con salarios mucho más bajos, porque lo que importa es el costo de oportunidad relativo, no el nivel absoluto de desarrollo."

explicacion: |
  Es una consecuencia directa de que la ventaja comparativa se define
  en términos relativos dentro de cada país, no en comparación
  absoluta de niveles de desarrollo.
```

### 13 — Relación con el punto de equilibrio de Administración

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Qué tipo de razonamiento comparte la ventaja comparativa con el \"punto de equilibrio\" de Administración?"
tipo: mc
opciones_explicitas:
  - "El de \"por qué esta decisión y no otra\", comparando costos relativos en vez de valores absolutos"
  - "Los dos calculan exactamente la misma fórmula matemática"
  - "No comparten ningún tipo de razonamiento"
respuesta: "El de \"por qué esta decisión y no otra\", comparando costos relativos en vez de valores absolutos"

explicacion: |
  Es la analogía que hace la teoría del MAPA para explicar por qué
  esta idea cruza con Administración.
```

### 14 — Ejemplo de especialización agrícola

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "problema"]

enunciado: "Un país con mucha tierra fértil pero poca industria pesada exporta productos agrícolas e importa maquinaria, en vez de fabricar su propia maquinaria con mucho esfuerzo relativo. ¿Qué principio explica mejor esta decisión?"
tipo: mc
opciones_explicitas:
  - "Ventaja comparativa: le conviene especializarse donde su costo de oportunidad es menor"
  - "Devaluación de su moneda"
  - "Déficit de su balanza comercial"
respuesta: "Ventaja comparativa: le conviene especializarse donde su costo de oportunidad es menor"

explicacion: |
  Es una aplicación directa del concepto central del tema.
```

### 15 — El libre comercio y la ventaja comparativa

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando se argumenta a favor del libre comercio diciendo que \"cada país debería producir lo que sabe hacer mejor, en términos relativos\", se está citando, en esencia, la ventaja comparativa."

explicacion: |
  Es la aplicación más habitual de esta teoría en el debate de
  política comercial.
```

### 16 — Ordenar el razonamiento de especialización y comercio

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "orden"]

tipo: ordenar
enunciado: "Ordená esta secuencia de razonamiento sobre la ventaja comparativa entre dos países."
opciones_explicitas:
  - "Los países comercian entre sí, terminando con más de ambos bienes que produciendo todo por su cuenta"
  - "Cada país se especializa en producir ese bien"
  - "Se calcula el costo de oportunidad de cada bien en cada país"
  - "Se identifica en qué bien tiene cada país el menor costo de oportunidad"
respuesta_orden: ["Se calcula el costo de oportunidad de cada bien en cada país", "Se identifica en qué bien tiene cada país el menor costo de oportunidad", "Cada país se especializa en producir ese bien", "Los países comercian entre sí, terminando con más de ambos bienes que produciendo todo por su cuenta"]

explicacion: |
  Es el proceso completo de razonamiento detrás de la teoría de la
  ventaja comparativa.
```

### 17 — Contraste entre ventaja absoluta y comparativa

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Cuál es la diferencia central entre \"ventaja absoluta\" y \"ventaja comparativa\"?"
tipo: mc
opciones_explicitas:
  - "La absoluta compara horas totales por unidad; la comparativa compara el costo de oportunidad relativo entre bienes"
  - "Son exactamente lo mismo, con nombres distintos"
  - "La comparativa sólo aplica quiénes tienen tipo de cambio fijo"
respuesta: "La absoluta compara horas totales por unidad; la comparativa compara el costo de oportunidad relativo entre bienes"

explicacion: |
  Es la distinción central de todo el tema.
```

### 18 — El vino en el ejemplo clásico

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el ejemplo clásico de Ricardo, Portugal termina con ventaja comparativa en vino, aunque sea absolutamente mejor que Inglaterra en ambos bienes."

explicacion: |
  Es el resultado complementario al de la tela (que quedaba en manos
  de Inglaterra).
```

### 19 — No es sólo teoría del siglo XIX

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque la teoría de la ventaja comparativa se formuló en 1817, sigue siendo el argumento central que se usa hoy para explicar por qué los países se especializan y comercian entre sí."

explicacion: |
  Es una teoría económica clásica que sigue vigente en el debate
  actual sobre comercio internacional.
```

### 20 — Completar la definición de ventaja comparativa

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "basico"
  tags: ["comercio_internacional"]

tipo: completar
enunciado: "Completá: un país tiene ventaja comparativa en un bien cuando su costo de ___ (lo que sacrifica de otro bien) de producirlo es menor que el de otro país."
respuestas_validas:
  - "oportunidad"

explicacion: |
  Es el concepto central de todo el tema.
```

### 21 — Cierre del tema

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ventaja comparativa explica por qué a un país le conviene especializarse y comerciar según su costo de oportunidad relativo, incluso si otro país es absolutamente mejor produciendo todo."

explicacion: |
  Es la idea central de todo el tema.
```
