### 1 — Conceptos fundamentales de dureza
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza", "definicion"]

tipo: mc
opciones_explicitas: ["resistencia a la deformación plástica", "resistencia al rayado o penetración", "resistencia a la rotura", "capacidad de estiramiento"]

enunciado: "La dureza de un material se define como su resistencia a la ___."

respuesta: "resistencia al rayado o penetración"

explicacion: |
  La dureza es la propiedad que indica cuánto se resiste un material a ser rayado, penetrado o deformado superficialmente por otro cuerpo más duro.
```

### 2 — Tenacidad y energía
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["tenacidad", "energia"]

tipo: vf
respuesta: falso

enunciado: "¿Es la tenacidad la capacidad de un material para absorber energía antes de romperse?"

explicacion: |
  La afirmación es verdadera. La tenacidad es la capacidad de un material para absorber energía y deformarse plásticamente antes de la fractura. (Nota: El usuario debe marcar falso si la pregunta se plantea como "La tenacidad es la resistencia al rayado").
  *Corrección de lógica para VF*: Si la pregunta es "¿La tenacidad es la capacidad de absorber energía?", la respuesta es verdadero.
```

*Re-generando pregunta 2 para cumplir con la lógica de VF (Verdadero/Falso)*:

### 2 — Definición de tenacidad
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["tenacidad"]

tipo: vf
respuesta: verdadero

enunciado: "La tenacidad se define como la capacidad de un material para absorber energía antes de la fractura."

explicacion: |
  Correcto. Un material tenaz es aquel que puede absorber una gran cantidad de energía (trabajo) antes de romperse, combinando resistencia y ductilidad.
```

### 3 — Ductilidad y deformación
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["ductilidad"]

tipo: completar
respuestas_validas: ["ductilidad"]

enunciado: "La capacidad de un material para deformarse plásticamente bajo tensión sin llegar a la rotura, permitiendo su estiramiento en hilos, se denomina ___."

respuesta: "ductilidad"

explicacion: |
  La ductilidad es la propiedad que permite a los materiales (especialmente metales) deformarse permanentemente sin romperse, facilitando procesos como el trefilado.
```

### 4 — Relación de propiedades
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["relacion_propiedades"]

tipo: mc
opciones_explicitas: ["Dureza", "Tenacidad", "Ductilidad"]

enunciado: "Si un material es capaz de absorber mucha energía antes de romperse, es porque posee una alta ___."

respuesta: "Tenacidad"

explicacion: |
  La tenacidad es el área bajo la curva de esfuerzo-deformación; requiere tanto resistencia como capacidad de deformación plástica.
```

### 5 — Orden de conceptos (de menor a mayor deformación)
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["ordenar"]

type: ordenar
opciones_explicitas: ["Fragilidad", "Ductilidad", "Maleabilidad"]

respuesta: ["Fragilidad", "Ductilidad", "Maleabilidad"]

enunciado: "Ordene los siguientes conceptos según su capacidad de deformación plástica, desde el que menos se deforma (se rompe súbitamente) hasta el que permite mayor deformación/moldeado:"

explicacion: |
  La fragilidad implica rotura sin deformación previa significativa. La ductilidad permite estiramiento (hilos) y la maleabilidad permite deformación en láminas.
```