# Química — Mezclas y métodos de separación (cuestionario, 20 preguntas VBLang)

> Tema: `QB`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma, `reasoning_effort: none`)
> y corregido a mano. Bugs encontrados esta vez: interpolación `{}` de una
> variable inexistente (revela el campo `respuesta`/nombre del builtin en
> vez del valor), `respuesta:` faltante en un bloque, `respuesta` envuelta
> en array cuando debía ser escalar, y `"verdadero"`/`"falso"` como string
> en vez de literal sin comillas.

---

### 1 — Clasificación de la materia

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["clasificacion", "materia"]

variables:
  escenario: uno_de([["Agua destilada", "Sustancia pura/Compuesto"], ["Aire", "Mezcla homogénea"], ["Ensalada", "Mezcla heterogénea"], ["Oxígeno (O2)", "Sustancia pura/Elemento"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Sustancia pura/Elemento", "Sustancia pura/Compuesto", "Mezcla homogénea", "Mezcla heterogénea"]

enunciado: "Si tenemos {escenario[0]}, ¿cómo clasificaríamos esta muestra de materia?"

explicacion: |
  La clasificación depende de la composición: los elementos y compuestos son sustancias puras, mientras que las mezclas contienen dos o más sustancias combinadas.
```

### 2 — Separación de compuestos

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["compuestos", "metodos_separacion"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible separar un compuesto en sus elementos constituyentes mediante métodos físicos simples como la filtración?"

explicacion: |
  Falso. Los compuestos están unidos mediante enlaces químicos; para separarlos se requiere una reacción química, no un método físico.
```

### 3 — Elemento o compuesto

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["formula", "elementos"]

variables:
  datos: uno_de([["Fe", "Elemento"], ["H2O", "Compuesto"], ["O2", "Elemento"], ["NaCl", "Compuesto"]])

respuesta: datos[1]
tipo: mc
opciones_explicitas: ["Elemento", "Compuesto"]

enunciado: "Dada la fórmula química {datos[0]}, ¿se trata de un elemento o de un compuesto?"

explicacion: |
  Un elemento está formado por un solo tipo de átomo; un compuesto está formado por la combinación química de dos o más elementos diferentes.
```

### 4 — Sinónimo de mezcla homogénea

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["mezclas", "soluciones"]

respuesta: "solucion"
tipo: completar
respuestas_validas:
  - "solucion"
  - "solución"

enunciado: "Una mezcla homogénea, donde sus componentes no se distinguen a simple vista, también se llama ___."

explicacion: |
  Las mezclas homogéneas se denominan comúnmente soluciones o disoluciones.
```

### 5 — Homogénea o heterogénea

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["mezclas", "homogenea", "heterogenea"]

variables:
  escenario: uno_de([["agua con sal", "homogenea"], ["agua con arena", "heterogenea"], ["acero", "homogenea"], ["granito", "heterogenea"], ["aire", "homogenea"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["homogenea", "heterogenea"]

enunciado: "El ejemplo dado es: {escenario[0]}. ¿Qué tipo de mezcla es?"

explicacion: |
  Las mezclas se clasifican en homogéneas (una sola fase) y heterogéneas (dos o más fases visibles).
```

### 6 — Visibilidad de componentes

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["mezclas", "homogenea"]

respuesta: falso
tipo: vf

enunciado: "En una mezcla homogénea se pueden distinguir los componentes a simple vista."

explicacion: |
  Incorrecto. En las mezclas homogéneas (soluciones), las partículas son tan pequeñas que no se pueden distinguir ni con un microscopio óptico.
```

### 7 — Definición de fases

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["mezclas", "heterogenea"]

respuesta: "heterogenea"
tipo: completar
respuestas_validas:
  - "heterogenea"

enunciado: "Una mezcla con dos o más fases visibles se llama mezcla ___."

explicacion: |
  Las mezclas heterogéneas presentan fases diferenciadas que se pueden distinguir.
```

### 8 — Coloides y mezclas

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "intermedio"
  tags: ["coloides", "leche"]

respuesta: verdadero
tipo: vf

enunciado: "La leche es un ejemplo de mezcla heterogénea de partículas muy chicas, un coloide."

explicacion: |
  Correcto. Aunque parece homogénea a simple vista, la leche es un coloide donde se distinguen gotas de grasa dispersas en una fase líquida.
```

### 9 — Método de separación según escenario

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["mezclas", "metodos_separacion"]

variables:
  escenarios: [["agua + arena", "filtracion"], ["agua + aceite", "decantacion"], ["agua + sal disuelta, para recuperar el solido", "evaporacion"], ["dos líquidos miscibles con distinto punto de ebullición", "destilacion"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["filtracion", "decantacion", "evaporacion", "destilacion"]

enunciado: "Para separar la mezcla de {escenarios[idx][0]}, ¿qué método utilizarías?"

explicacion: |
  El método adecuado depende de las propiedades físicas de los componentes. Para {escenarios[idx][0]}, se usa {escenarios[idx][1]}.
```

### 10 — Principio de la cromatografía

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "intermedio"
  tags: ["cromatografia", "propiedades"]

respuesta: "velocidad de arrastre distinta sobre un soporte"
tipo: mc
opciones_explicitas: ["velocidad de arrastre distinta sobre un soporte", "punto de ebullición", "densidad", "tamaño"]

enunciado: "¿Qué propiedad física aprovecha la cromatografía para separar los componentes de una mezcla?"

explicacion: |
  La cromatografía se basa en la diferencia de afinidad de los componentes por una fase estacionaria y una fase móvil, lo que produce distintas velocidades de arrastre.
```

### 11 — Separación de hierro y arena

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["magnetismo", "mezclas"]

respuesta: "magnetica"
tipo: completar
respuestas_validas:
  - "magnetica"

enunciado: "La separación de limaduras de hierro de arena se realiza mediante separación ___."

explicacion: |
  El hierro es un material ferromagnético, por lo que puede ser atraído por un imán, permitiendo separarlo de la arena que no tiene propiedades magnéticas.
```

### 12 — Destilación vs. evaporación

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["destilacion", "evaporacion"]

respuesta: verdadero
tipo: vf

enunciado: "La destilación permite recuperar ambos líquidos de una mezcla líquido-líquido miscible, a diferencia de la evaporación que pierde el solvente."

explicacion: |
  En la destilación, el vapor se condensa y se recupera en un recipiente distinto. En la evaporación, el solvente se escapa a la atmósfera.
```

### 13 — Separación de sólidos por tamaño

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["solidos", "tamizado"]

respuesta: "tamizado"
tipo: mc
opciones_explicitas: ["destilacion", "tamizado", "decantacion", "cromatografia"]

enunciado: "Para separar una mezcla de dos sólidos que presentan distinto tamaño de grano, como arena gruesa y arena fina, el método más adecuado es el..."

explicacion: |
  El tamizado usa una malla con orificios de un tamaño determinado que deja pasar las partículas más pequeñas mientras retiene las más grandes.
```

### 14 — Fundamento de la cristalización

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "intermedio"
  tags: ["solubilidad", "cristalizacion"]

respuesta: "solubilidad"
tipo: completar
respuestas_validas:
  - "solubilidad"

enunciado: "La cristalización es un método de separación que aprovecha que la ___ de un sólido cambia con la temperatura."

explicacion: |
  Al disminuir la temperatura de una solución saturada, la solubilidad del soluto disminuye y precipita en forma de cristales.
```

### 15 — Aplicación de la decantación

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["decantacion"]

respuesta: verdadero
tipo: vf

enunciado: "La decantación sirve para separar un sólido sedimentado de un líquido, o dos líquidos inmiscibles, sin necesidad de calentar."

explicacion: |
  Verdadero. La decantación se basa en la diferencia de densidades y la inmiscibilidad, permitiendo la separación por gravedad sin aporte térmico.
```

### 16 — Identificación de métodos por escenario

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "intermedio"
  tags: ["escenarios", "metodos"]

variables:
  escenarios: [["separar pigmentos de una tinta", "cromatografia"], ["separar agua de alcohol", "destilacion"], ["separar sal de agua recuperando la sal", "evaporacion"]]
  idx: uno_de([0, 1, 2])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["cromatografia", "destilacion", "evaporacion", "filtracion"]

enunciado: "Si nos enfrentamos al siguiente escenario: {escenarios[idx][0]}, ¿cuál es el método de separación correspondiente?"

explicacion: |
  El método se elige según la propiedad que distingue a los componentes: afinidad con un soporte, punto de ebullición, o volatilidad del solvente.
```

### 17 — Método de líquidos miscibles

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["destilacion"]

respuesta: "destilacion"
tipo: completar
respuestas_validas:
  - "destilacion"

enunciado: "El método usado para separar una mezcla de dos líquidos miscibles, aprovechando sus diferentes puntos de ebullición, se denomina ___."

explicacion: |
  La destilación aprovecha la diferencia en la volatilidad (puntos de ebullición) de los componentes para separarlos.
```

### 18 — Todas las mezclas se separan físicamente

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["mezclas", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Todas las mezclas, tanto homogéneas como heterogéneas, se pueden separar mediante métodos físicos, sin necesidad de una reacción química."

explicacion: |
  Correcto. En una mezcla cada componente mantiene sus propiedades químicas, así que sus componentes se pueden separar físicamente (a diferencia de un compuesto).
```

### 19 — Agua de mar

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["mezclas", "clasificacion"]

respuesta: "mezcla homogénea"
tipo: mc
opciones_explicitas: ["mezcla homogénea", "mezcla heterogénea", "sustancia pura", "elemento"]

enunciado: "Considerando el agua de mar (agua y sales disueltas), esta se clasifica como una:"

explicacion: |
  El agua de mar es una mezcla homogénea (disolución) porque sus componentes no se distinguen a simple vista y presenta una sola fase.
```

### 20 — Filtración

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["filtracion"]

respuesta: "filtracion"
tipo: completar
respuestas_validas:
  - "filtracion"

enunciado: "El proceso para separar un sólido de un líquido mediante el uso de un papel poroso se denomina ___."

explicacion: |
  La filtración deja pasar el líquido a través de un medio poroso mientras retiene las partículas sólidas más grandes.
```
