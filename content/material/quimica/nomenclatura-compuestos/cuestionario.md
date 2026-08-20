# Química — Nomenclatura de compuestos (cuestionario, 20 preguntas VBLang)

> Tema: `QH`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma) y corregido a mano.
> Bug de esta tanda: una pregunta con un array de datos irregular (una
> fila con menos elementos que las otras) combinado con contenido que
> no coincidía con lo pedido — reescrita entera con datos consistentes.

---

### 1 — Elementos en estado elemental

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "estado_de_oxidacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un elemento en estado elemental (como O2 o Fe) tiene un número de oxidación de 0."

explicacion: |
  En su forma pura, sin combinar con otros elementos, el número de oxidación es siempre 0.
```

### 2 — El oxígeno en compuestos

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "oxigeno"]

respuesta: "-2"
tipo: mc
opciones_explicitas: ["-2", "+1", "-1", "+2"]

enunciado: "¿Cuál es el número de oxidación habitual del oxígeno en la mayoría de los compuestos?"

explicacion: |
  En la gran mayoría de los óxidos y compuestos, el oxígeno actúa con número de oxidación -2.
```

### 3 — El hidrógeno en compuestos

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "hidrogeno"]

respuesta: "+1"
tipo: mc
opciones_explicitas: ["+1", "-2", "-1", "0"]

enunciado: "¿Cuál es el número de oxidación habitual del hidrógeno en la mayoría de los compuestos?"

explicacion: |
  Cuando el hidrógeno se combina con no metales, su número de oxidación es +1.
```

### 4 — Suma de números de oxidación

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "reglas_calculo"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de los números de oxidación de todos los átomos en un compuesto neutro debe ser igual a 0."

explicacion: |
  Por electroneutralidad, la carga total de un compuesto neutro tiene que ser cero.
```

### 5 — Metales y estados de oxidación

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "metales"]

respuesta: falso
tipo: vf

enunciado: "Todos los metales tienen un único número de oxidación posible."

explicacion: |
  Falso. Muchos metales tienen valencias variables, como el hierro (Fe), que puede actuar con +2 o +3.
```

### 6 — Nombre de sal binaria

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "sales", "binarios"]

variables:
  datos: [["NaCl", "cloruro de sodio"], ["KBr", "bromuro de potasio"], ["MgCl2", "cloruro de magnesio"], ["CaF2", "fluoruro de calcio"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["cloruro de sodio", "bromuro de potasio", "cloruro de magnesio", "fluoruro de calcio"]

enunciado: "Escribe el nombre correcto para la fórmula química {datos[idx][0]}."

explicacion: |
  El nombre de una sal binaria se forma con el no metal terminado en "-uro", seguido de "de" y el nombre del metal.
```

### 7 — Patrón de nomenclatura

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "reglas"]

respuesta: "metal"
tipo: completar
respuestas_validas:
  - "metal"

enunciado: "El nombre general de un compuesto binario metal + no metal sigue el patrón \"[no metal]uro de ___\"."

explicacion: |
  En la nomenclatura de sales, el segundo componente del nombre es el metal.
```

### 8 — Nomenclatura Stock

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "intermedio"
  tags: ["nomenclatura", "stock"]

variables:
  datos: [["FeCl2", "cloruro de hierro (II)"], ["FeCl3", "cloruro de hierro (III)"], ["CuO", "oxido de cobre (II)"], ["Cu2O", "oxido de cobre (I)"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["cloruro de hierro (II)", "cloruro de hierro (III)", "oxido de cobre (II)", "oxido de cobre (I)"]

enunciado: "Indica el nombre correcto según la nomenclatura de Stock para el compuesto {datos[idx][0]}."

explicacion: |
  La nomenclatura Stock usa números romanos entre paréntesis para indicar el número de oxidación del metal cuando tiene más de uno posible.
```

### 9 — Cuándo omitir el número

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando un metal tiene un solo número de oxidación posible, no hace falta especificar ningún número en el nombre (por ejemplo, el sodio siempre es +1)."

explicacion: |
  Si el metal tiene un único número de oxidación, indicarlo es redundante y se omite en la nomenclatura Stock.
```

### 10 — Nombre de óxido metálico

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "oxidos", "metal"]

variables:
  datos: [["Na2O", "oxido de sodio"], ["CaO", "oxido de calcio"], ["Al2O3", "oxido de aluminio"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["oxido de sodio", "oxido de calcio", "oxido de aluminio"]

enunciado: "Indica el nombre correcto para la fórmula {datos[idx][0]}."

explicacion: |
  En óxidos de metales con un solo número de oxidación posible, se usa la forma "óxido de [metal]" sin más aclaración.
```

### 11 — Nomenclatura sistemática de óxidos de no metal

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "oxidos", "no_metal"]

variables:
  datos: [["CO2", "dioxido de carbono"], ["CO", "monoxido de carbono"], ["SO3", "trioxido de azufre"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["dioxido de carbono", "monoxido de carbono", "trioxido de azufre"]

enunciado: "Aplica la nomenclatura sistemática (prefijos griegos) para la fórmula {datos[idx][0]}."

explicacion: |
  La nomenclatura sistemática usa prefijos como mono-, di-, tri-, etc. para indicar la cantidad de átomos de cada elemento.
```

### 12 — Prefijos en óxidos de no metales

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "oxidos"]

respuesta: verdadero
tipo: vf

enunciado: "En los óxidos de no metales se usan prefijos griegos (mono-, di-, tri-) en lugar de números romanos."

explicacion: |
  Correcto. La nomenclatura Stock usa números romanos para metales; la sistemática usa prefijos para no metales.
```

### 13 — Definición de óxido

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "oxidos"]

respuesta: "elemento"
tipo: completar
respuestas_validas:
  - "elemento"

enunciado: "Un compuesto binario formado por un ___ (metal o no metal) combinado con oxígeno se llama, en general, óxido."

explicacion: |
  Un óxido es la combinación binaria de cualquier elemento con oxígeno.
```

### 14 — Cómo indica cada sistema el número de oxidación

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "intermedio"
  tags: ["nomenclatura", "sistemas"]

variables:
  datos: [["Stock", "número romano entre paréntesis"], ["Tradicional", "sufijo -oso (menor) o -ico (mayor)"], ["Sistemático", "prefijos griegos mono-, di-, tri-"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["número romano entre paréntesis", "sufijo -oso (menor) o -ico (mayor)", "prefijos griegos mono-, di-, tri-"]

enunciado: "En el sistema {datos[idx][0]}, ¿cómo se indica el número de oxidación del metal?"

explicacion: |
  Stock usa números romanos, Tradicional usa sufijos -oso/-ico, y Sistemático (para no metales) usa prefijos griegos.
```

### 15 — Sufijo para el número de oxidación menor

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["tradicional", "sufijos"]

respuesta: "-oso"
tipo: mc
opciones_explicitas: ["-oso", "-ico", "-uro", "-ato"]

enunciado: "En la nomenclatura tradicional, cuando un metal actúa con su número de oxidación MENOR, se usa el sufijo ___."

explicacion: |
  El sufijo -oso corresponde al número de oxidación más bajo de los dos posibles.
```

### 16 — Sufijo para el número de oxidación mayor

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["tradicional", "sufijos"]

respuesta: "-ico"
tipo: mc
opciones_explicitas: ["-ico", "-oso", "-uro", "-ato"]

enunciado: "En la nomenclatura tradicional, cuando un metal actúa con su número de oxidación MAYOR, se usa el sufijo ___."

explicacion: |
  El sufijo -ico corresponde al número de oxidación más alto de los dos posibles.
```

### 17 — Equivalencia de nombres

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "intermedio"
  tags: ["equivalencia", "nomenclatura"]

respuesta: verdadero
tipo: vf

enunciado: "'Cloruro ferroso' y 'cloruro de hierro (II)' nombran exactamente el mismo compuesto, usando sistemas de nomenclatura distintos."

explicacion: |
  Correcto. "Ferroso" (tradicional) y "(II)" (Stock) indican el mismo número de oxidación menor del hierro.
```

### 18 — Raíz latina del hierro

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "intermedio"
  tags: ["raices", "nomenclatura"]

respuesta: "ferr"
tipo: completar
respuestas_validas:
  - "ferr"

enunciado: "En la nomenclatura tradicional, la raíz latina usada para el hierro es ___ (como en ferroso/férrico)."

explicacion: |
  La raíz latina del hierro es "ferr-" (del latín ferrum).
```

### 19 — Raíz latina del cobre

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "intermedio"
  tags: ["raices", "nomenclatura"]

respuesta: "cupr"
tipo: completar
respuestas_validas:
  - "cupr"

enunciado: "En la nomenclatura tradicional, la raíz latina usada para el cobre es ___ (como en cuproso/cúprico)."

explicacion: |
  La raíz latina del cobre es "cupr-" (del latín cuprum).
```

### 20 — Óxido vs. sal binaria

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["oxidos", "sales", "diferencia"]

respuesta: falso
tipo: vf

enunciado: "El compuesto CaCl2 se nombra como un óxido de calcio, porque el calcio siempre forma óxidos."

explicacion: |
  Falso. CaCl2 combina calcio con cloro (no con oxígeno), así que es una sal binaria: "cloruro de calcio", no un óxido.
```
