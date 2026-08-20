# Materiales — Propiedades mecanicas dureza tenacidad ductilidad (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

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

### 3 — Definición de tenacidad

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

### 4 — Ductilidad y deformación

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["ductilidad"]

tipo: completar
respuestas_validas:
  - "ductilidad"

enunciado: "La capacidad de un material para deformarse plásticamente bajo tensión sin llegar a la rotura, permitiendo su estiramiento en hilos, se denomina ___."

respuesta: "ductilidad"

explicacion: |
  La ductilidad es la propiedad que permite a los materiales (especialmente metales) deformarse permanentemente sin romperse, facilitando procesos como el trefilado.
```

### 5 — Relación de propiedades

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

### 6 — Orden de conceptos (de menor a mayor deformación)

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["ordenar"]

tipo: ordenar
opciones_explicitas: ["Fragilidad", "Ductilidad", "Maleabilidad"]

respuesta_orden: ["Fragilidad", "Ductilidad", "Maleabilidad"]

enunciado: "Ordene los siguientes conceptos según su capacidad de deformación plástica, desde el que menos se deforma (se rompe súbitamente) hasta el que permite mayor deformación/moldeado:"

explicacion: |
  La fragilidad implica rotura sin deformación previa significativa. La ductilidad permite estiramiento (hilos) y la maleabilidad permite deformación en láminas.
```

### 7 — Identificación de propiedades

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["definiciones", "dureza", "tenacidad"]

enunciado: "Un diamante es extremadamente difícil de rayar, mientras que un trozo de vidrio se rompe fácilmente ante un impacto seco. El diamante presenta una alta ___ y el vidrio una baja ___."

respuestas_validas:
  - "dureza"
  - "tenacidad"
respuesta: ["dureza", "tenacidad"]
tipo: completar

explicacion: |
  La dureza es la resistencia de un material a ser rayado o penetrado. La tenacidad es la capacidad de absorber energía antes de la rotura (resistencia al impacto).
```

### 8 — Análisis de un caso de falla

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["ductilidad", "frágil"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0, "cobre", "ductil"], [1, "hierro fundido", "frágil"]]

enunciado: "Se analiza un material {datos[escenario_idx][1]}. Al someterlo a una deformación plástica prolongada, este se estira significativamente sin romperse. Por lo tanto, el material es {datos[escenario_idx][2]}."

opciones_explicitas: ["ductil", "frágil"]
respuesta: datos[escenario_idx][2]
tipo: mc

explicacion: |
  La ductilidad es la propiedad que permite a un material deformarse plásticamente (estirarse) antes de la fractura.
```

### 9 — Comparativa de comportamiento

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["verdadero_falso"]

enunciado: "Un material que absorbe mucha energía antes de romperse (alta tenacidad) es necesariamente un material muy duro."

respuesta: falso
tipo: vf

explicacion: |
  No siempre. Un material puede ser muy tenaz (como el acero de baja graduación) pero no ser especialmente duro. La dureza y la tenacidad son propiedades distintas.
```

### 10 — Proceso de deformación

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["ductilidad", "proceso"]

enunciado: "Ordena el proceso típico de un material dúctil cuando se somete a una carga de tracción creciente:"

opciones_explicitas: ["Deformación elástica", "Deformación plástica", "Estricción", "Fractura"]
respuesta_orden: ["Deformación elástica", "Deformación plástica", "Estricción", "Fractura"]
tipo: ordenar

explicacion: |
  Primero ocurre la deformación elástica (reversible), luego la plástica (permanente), seguida de la estricción (reducción de sección local) y finalmente la fractura.
```

### 11 — Cálculo de energía (Tenacidad conceptual)

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "avanzado"
  tags: ["tenacidad", "area_bajo_curva"]

variables:
  curva_tipo: uno_de([0, 1])
  curva_datos: [[0, 50, "alta"], [1, 10, "baja"]]

enunciado: "En un ensayo de tracción, la tenacidad se representa mediante el área bajo la curva de esfuerzo-deformación. Si comparamos un material con un área de {curva_datos[curva_tipo][0]} MPa·mm/mm frente a otro con un área de 5 MPa·mm/mm, el primero tiene una tenacidad {curva_datos[curva_tipo][1]}."

opciones_explicitas: ["alta", "baja"]
respuesta: curva_datos[curva_tipo][2]
tipo: mc

explicacion: |
  La tenacidad es la integral del esfuerzo respecto a la deformación; a mayor área bajo la curva, mayor es la energía absorbida y, por ende, mayor la tenacidad.
```

### 12 — Confusión entre dureza y tenacidad

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza", "tenacidad", "confusiones"]

enunciado: "Un material que es extremadamente duro (como el diamante) no es necesariamente tenaz. La dureza mide la resistencia al ___ mientras que la tenacidad mide la capacidad de absorber energía antes de la ___."

respuestas_validas:
  - "rayado"
  - "rotura"
respuesta: ["rayado", "rotura"]
tipo: completar

explicacion: |
  Es un error común pensar que un material duro es resistente a los impactos. La dureza es resistencia superficial al rayado o penetración, mientras que la tenacidad es la energía total que absorbe un material antes de romperse (relacionada con la tenacidad/fragilidad).
```

### 13 — La paradoja de la ductilidad

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["ductilidad", "fragilidad"]

variables:
  es_ductil: verdadero

enunciado: "Si un material se deforma significativamente de manera plástica antes de fallar, se dice que es dúctil. Si se rompe de forma repentina con mínima deformación, el material es considerado ___."

opciones_explicitas: ["dúctil", "frágil", "elástico", "tenaz"]
respuesta: "frágil"
tipo: mc

explicacion: |
  La fragilidad es la propiedad opuesta a la ductilidad. Un material frágil (como el vidrio) no permite deformación plástica significativa antes de la fractura.
```

### 14 — Relación Dureza vs Tenacidad

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["relacion_propiedades"]

enunciado: "¿Es posible que un material sea muy duro y, al mismo tiempo, muy tenaz?"

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Falso"
tipo: completar
explicacion: |
  En la mayoría de los metales, existe una relación inversa: al aumentar la dureza (mediante tratamientos térmicos como la templación), generalmente disminuye la tenacidad (el material se vuelve más frágil).
```

### 15 — Secuencia de deformación

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["deformacion", "ductilidad"]

enunciado: "Ordena los procesos que ocurren en un material dúctil cuando se aplica una carga de tracción progresiva:"

opciones_explicitas: ["Deformación elástica", "Deformación plástica", "Estricción", "Fractura"]
respuesta_orden: ["Deformación elástica", "Deformación plástica", "Estricción", "Fractura"]
tipo: ordenar

explicacion: |
  Primero ocurre la deformación reversible (elástica), luego la permanente (plástica), seguida de la reducción de la sección transversal (estricción) y finalmente la rotura (fractura).
```

### 16 — El error del término "Dureza" en la vida cotidiana

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza", "resistencia"]

variables:
  es_error: verdadero

enunciado: "Si un material resiste muy bien una carga de compresión sin deformarse, pero se raya fácilmente con una lija, ¿es correcto decir que es un material duro? {es_error}"

opciones_explicitas: ["Sí, es correcto", "No, es un error"]
respuesta: "No, es un error"
tipo: mc

explicacion: |
  Confundir resistencia mecánica (capacidad de soportar cargas) con dureza (resistencia al rayado/penetración superficial) es un error conceptual frecuente.
```

### 17 — Diferencia entre dureza y tenacidad

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza", "tenacidad"]

tipo: mc
opciones_explicitas: ["La dureza es la resistencia a la deformación plástica, mientras que la tenacidad es la capacidad de absorber energía antes de la rotura.", "La dureza es la capacidad de absorber energía, mientras que la tenacidad es la resistencia al rayado.", "La dureza mide la elasticidad y la tenacidad mide la plasticidad.", "Ambas son sinónimos en materiales cerámicos."]

respuesta: "La dureza es la resistencia a la deformación plástica, mientras que la tenacidad es la capacidad de absorber energía antes de la rotura."

enunciado: "Al comparar la dureza con la tenacidad, ¿cuál es la distinción fundamental entre ambas propiedades?"

explicacion: |
  La dureza se refiere a la resistencia de un material a ser penetrado o rayado en su superficie. La tenacidad, en cambio, es la capacidad de un material de absorber energía y deformarse plásticamente antes de romperse.
```

### 18 — Ductilidad vs Fragilidad

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["ductilidad", "fragilidad"]

variables:
  escenario: uno_de([["cobre", "ductil"], ["vidrio", "fragil"]])

tipo: completar
enunciado: "Si un material se comporta como un {escenario[0]}, se dice que posee alta ductilidad, lo que lo distingue de un material {escenario[1]}."

respuesta: escenario[1] == "fragil"

explicacion: |
  Un material dúctil (como el cobre) puede deformarse significativamente bajo tensión antes de fallar. Un material frágil (como el vidrio) se rompe con muy poca deformación plástica.
```

### 19 — El concepto de dureza

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza"]

tipo: completar
respuestas_validas:
  - "rayado"

enunciado: "La dureza se define técnicamente como la resistencia que opone un material a la penetración o al ___."

respuesta: "rayado"

explicacion: |
  La dureza es una propiedad superficial que mide la resistencia de un material a la deformación plástica localizada (como un rayado o una hendidura).
```

### 20 — Relación entre dureza y tenacidad

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["dureza", "tenacidad"]

tipo: mc
opciones_explicitas: ["A mayor dureza, generalmente mayor es la tenacidad.", "A mayor dureza, generalmente menor es la tenacidad.", "La dureza y la tenacidad son propiedades idénticas.", "No existe relación entre ambas propiedades."]

respuesta: "A mayor dureza, generalmente menor es la tenacidad."

enunciado: "En muchos materiales ferrosos, se observa que al aumentar la dureza mediante tratamientos térmicos, ¿qué ocurre generalmente con la tenacidad?"

explicacion: |
  Comúnmente existe una relación inversa: los materiales muy duros suelen ser más frágiles (menor tenacidad), mientras que los materiales más blandos suelen ser más tenaces.
```

### 21 — Secuencia de deformación

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["ductilidad", "deformacion"]

tipo: ordenar
opciones_explicitas: ["Deformación elástica", "Deformación plástica", "Rotura del material"]

enunciado: "En un material dúctil, el proceso de deformación mecánica sigue este orden lógico de eventos:"

respuesta_orden: ["Deformación elástica", "Deformación plástica", "Rotura del material"]

explicacion: |
  Primero ocurre la deformación elástica (reversible), luego la deformación plástica (permanente, característica de la ductilidad) y finalmente la fractura o rotura.
```

### 22 — Identificación de propiedades

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["dureza", "tenacidad", "ductilidad"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [["Un diamante es extremadamente difícil de rayar con una lija de carburo.", "dureza"], ["Un cable de cobre se estira formando un hilo fino sin romperse.", "ductilidad"], ["Un acero de alta calidad absorbe mucha energía antes de fracturarse.", "tenacidad"]]

enunciado: "El material descrito en el escenario: '{datos[escenario_idx][0]}' posee principalmente la propiedad de {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["dureza", "tenacidad", "ductilidad"]

explicacion: |
  La propiedad descrita corresponde a la definición de {datos[escenario_idx][1]}.
```

### 23 — Análisis de falla estructural

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["tenacidad", "fractura"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un cristal de vidrio se rompe instantáneamente al recibir un golpe seco.", "falsa"], ["Un polímero elástico absorbe el impacto de una caída sin fragmentarse.", "verdadera"]]

enunciado: "Si un material se rompe de forma súbita ante un impacto sin absorber energía, ¿se puede decir que tiene una alta tenacidad? (Escenario: {casos[caso_idx][0]})"

respuesta: casos[caso_idx][1]
tipo: completar
explicacion: |
  La tenacidad es la capacidad de absorber energía antes de la rotura. Si el material se rompe súbitamente, su tenacidad es baja.
```

### 24 — Comparación de materiales

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["dureza", "rayado"]

variables:
  test_idx: uno_de([0, 1])
  tests: [["Un material A es rayado fácilmente por un clavo de acero.", "baja"], ["Un material B no presenta marcas tras ser frotado con acero.", "alta"]]

enunciado: "En el test de rayado, el material presenta una dureza ___ respecto al acero."

respuesta: tests[test_idx][1]
tipo: completar
respuestas_validas:
  - "baja"
  - "alta"

explicacion: |
  La dureza se define como la resistencia a la deformación plástica localizada (como el rayado).
```

### 25 — Secuencia de deformación

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "avanzado"
  tags: ["ductilidad", "deformacion"]

variables:
  proceso_idx: uno_de([0, 1, 2])
  procesos: [["El material se deforma plásticamente", "El material cambia de forma", "El material se estira sin romperse"], ["El material se deforma plásticamente", "El material cambia de forma", "El material se estira sin romperse"], ["El material se deforma plásticamente", "El material cambia de forma", "El material se estira sin romperse"]]

enunciado: "Ordene los pasos que describen el proceso de ductilidad en un metal:"

pasos:
  - "El material se deforma plásticamente"
  - "El material cambia de forma"
  - "El material se estira sin romperse"

respuesta_orden: ["El material se deforma plásticamente", "El material cambia de forma", "El material se estira sin romperse"]
tipo: ordenar
opciones_explicitas: ["El material se deforma plásticamente", "El material cambia de forma", "El material se estira sin romperse"]

explicacion: |
  La ductilidad implica una deformación plástica continua que permite el cambio de forma antes de la rotura.
```

### 26 — Cálculo de resistencia (Simulado)

```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["tenacidad", "energia"]

variables:
  val_idx: uno_de([0, 1])
  valores: [[50, 50], [120, 120]]

enunciado: "Si un material absorbe {valores[val_idx][0]} Joules antes de la rotura y otro absorbe {valores[val_idx][0] + 100} Joules, el primero es ___ que el segundo en términos de tenacidad."

respuesta: "menor"
tipo: completar
respuestas_validas:
  - "menor"
  - "mayor"

explicacion: |
  A mayor energía absorbida antes de la fractura, mayor es la tenacidad del material.
```
