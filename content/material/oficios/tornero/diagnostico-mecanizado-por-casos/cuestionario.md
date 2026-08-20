# Oficios — Tornero — Diagnóstico de mecanizado por casos (cuestionario, 22 preguntas VBLang)

> Tema: `oficios/tornero/diagnostico-mecanizado-por-casos`. Cierre de la ruta del oficio (Sección 8). Ver `teoria.md` en esta misma carpeta. Escrito a mano (Claude), casos técnicos de pieza fuera de medida, acabado deficiente y chatter — cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "basico"
  tags: ["metodologia"]

variables:
  n: uno_de([1, 1])

respuesta: "un desperdicio de material, tiempo y dinero"
tipo: mc
opciones_explicitas: ["sólo un fallo académico sin consecuencias", "un desperdicio de material, tiempo y dinero", "algo que no se puede prevenir nunca"]

enunciado: "En el oficio del tornero, un error de mecanizado representa..."

explicacion: |
  A diferencia de un error académico abstracto, un error real en el
  taller cuesta material, tiempo y dinero, por eso el diagnóstico es
  clave.
```

### 2 — pregunta 2

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "intermedio"
  tags: ["pieza fuera de medida"]

variables:
  causa: uno_de(["un error de medición (calibre sin calibrar)", "el juego mecánico (backlash) de la máquina", "la dilatación térmica", "el desgaste de la herramienta"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para una pieza que queda fuera de medida."

explicacion: |
  Las cuatro son causas reales de piezas fuera de medida según el Caso
  1 de la teoría.
```

### 3 — pregunta 3

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "avanzado"
  tags: ["backlash"]

variables:
  n: uno_de([1, 1])

respuesta: "un retraso del husillo al invertir el giro de la manivela"
tipo: mc
opciones_explicitas: ["un retraso del husillo al invertir el giro de la manivela", "un aumento de la velocidad de corte", "una mejora en el acabado superficial"]

enunciado: "El juego mecánico o \"backlash\" se refiere a..."

explicacion: |
  Si no se compensa ese retraso al cambiar de sentido, la medida final
  de la pieza resulta incorrecta.
```

### 4 — pregunta 4

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "avanzado"
  tags: ["dilatacion termica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En piezas de alta precisión, si no se considera la dilatación térmica de máquina y pieza durante trabajos largos, el resultado puede quedar fuera de tolerancia."

explicacion: |
  El calentamiento prolongado expande ligeramente máquina y material,
  afectando la medida final en trabajos de alta precisión.
```

### 5 — pregunta 5

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "intermedio"
  tags: ["acabado deficiente"]

variables:
  n: uno_de([1, 1])

respuesta: "la herramienta \"raspa\" en vez de \"cortar\""
tipo: mc
opciones_explicitas: ["la herramienta \"raspa\" en vez de \"cortar\"", "la pieza se enfría demasiado rápido", "el material se vuelve más duro"]

enunciado: "Si la velocidad de giro del husillo es demasiado baja para el material trabajado, el resultado es que..."

explicacion: |
  Una velocidad demasiado baja hace que la herramienta arrastre en vez
  de cortar limpiamente, dejando una superficie irregular.
```

### 6 — pregunta 6

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "intermedio"
  tags: ["acabado deficiente"]

variables:
  n: uno_de([1, 1])

respuesta: "genera calor que ablanda el material o daña el filo de la herramienta"
tipo: mc
opciones_explicitas: ["genera calor que ablanda el material o daña el filo de la herramienta", "hace que la pieza quede perfecta siempre", "elimina el riesgo de vibración por completo"]

enunciado: "Una velocidad de corte excesiva, según la teoría, puede provocar que..."

explicacion: |
  El exceso de velocidad genera calor no deseado que afecta tanto al
  material como a la herramienta.
```

### 7 — pregunta 7

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "basico"
  tags: ["fijacion de pieza"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si una pieza no está bien sujeta en el tornillo de banco o en el plato de la máquina, vibrará mínimamente durante el corte, dejando marcas irregulares."

explicacion: |
  La fijación deficiente es una de las causas de acabado superficial
  pobre mencionadas en el Caso 2.
```

### 8 — pregunta 8

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "intermedio"
  tags: ["filo de herramienta"]

variables:
  n: uno_de([1, 1])

respuesta: "arrastra el material en vez de cortarlo limpiamente"
tipo: mc
opciones_explicitas: ["arrastra el material en vez de cortarlo limpiamente", "corta con más precisión que una herramienta afilada", "reduce la fuerza necesaria del motor"]

enunciado: "Una herramienta roma o con astillas, según la teoría..."

explicacion: |
  Esto deja un acabado pobre y exige más fuerza del motor de la
  máquina para lograr el mismo corte.
```

### 9 — pregunta 9

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "avanzado"
  tags: ["chatter"]

variables:
  n: uno_de([1, 1])

respuesta: "chatter"
tipo: completar

enunciado: "El nombre técnico de la vibración durante el mecanizado, que se manifiesta como un zumbido agudo y deja marcas periódicas, es ___."

respuestas_validas:
  - "chatter"

explicacion: |
  El chatter es uno de los problemas más difíciles de controlar en
  mecanizado.
```

### 10 — pregunta 10

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "avanzado"
  tags: ["chatter causa"]

variables:
  n: uno_de([1, 1])

respuesta: "la resonancia del sistema (la frecuencia de corte coincide con la frecuencia natural de vibración)"
tipo: mc
opciones_explicitas: ["la resonancia del sistema (la frecuencia de corte coincide con la frecuencia natural de vibración)", "un exceso de lubricante en la máquina", "una temperatura ambiente demasiado baja"]

enunciado: "La causa principal del chatter, según la teoría, es..."

explicacion: |
  Cuando la frecuencia de corte coincide con la frecuencia natural de
  vibración de máquina, herramienta o pieza, se produce resonancia.
```

### 11 — pregunta 11

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "avanzado"
  tags: ["chatter consecuencias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El chatter reduce la vida útil de la herramienta y puede dañar los rodamientos de la máquina."

explicacion: |
  Por eso es uno de los problemas más difíciles y costosos de dejar sin
  resolver en el taller.
```

### 12 — pregunta 12

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "avanzado"
  tags: ["mitigacion chatter"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Para reducir el chatter conviene usar una herramienta lo más larga y delgada posible."

explicacion: |
  Es al revés: una herramienta larga y delgada es más flexible y
  propensa a vibrar. Conviene la mayor longitud de empotramiento
  posible (herramienta más corta y firme).
```

### 13 — pregunta 13

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "intermedio"
  tags: ["mitigacion chatter"]

variables:
  n: uno_de([1, 1])

respuesta: "rígida y lo más cerca posible del punto de corte"
tipo: mc
opciones_explicitas: ["rígida y lo más cerca posible del punto de corte", "floja para absorber vibraciones", "lejos del punto de corte para dar espacio"]

enunciado: "Para reducir el chatter, la fijación de la pieza debe ser..."

explicacion: |
  Una fijación rígida y cercana al punto de corte reduce la posibilidad
  de vibración por flexión.
```

### 14 — pregunta 14

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "intermedio"
  tags: ["mitigacion chatter"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ajustar la velocidad de corte y la profundidad de paso puede romper la resonancia y así reducir el chatter."

explicacion: |
  Cambiar estos parámetros desincroniza la frecuencia de corte de la
  frecuencia natural de vibración del sistema.
```

### 15 — pregunta 15

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "basico"
  tags: ["sistema dinamico"]

variables:
  elemento: uno_de(["la herramienta", "la máquina", "el material", "el operario"])

respuesta: verdadero
tipo: vf

enunciado: "\"{elemento}\" es uno de los cuatro elementos que interactúan en el sistema dinámico del mecanizado, según la teoría."

explicacion: |
  Herramienta, máquina, material y operario interactúan; un cambio en
  cualquiera altera el resultado final.
```

### 16 — pregunta 16

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "basico"
  tags: ["objetivo del metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "por qué falla y cómo se soluciona, no sólo cómo se hace"
tipo: mc
opciones_explicitas: ["por qué falla y cómo se soluciona, no sólo cómo se hace", "sólo memorizar procedimientos de memoria", "evitar tocar la máquina hasta ser experto"]

enunciado: "El diagnóstico por casos busca que el alumno entienda..."

explicacion: |
  El foco no es sólo el procedimiento correcto, sino desarrollar
  criterio técnico frente a fallas reales.
```

### 17 — pregunta 17

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "intermedio"
  tags: ["desgaste de herramienta"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La herramienta puede desgastarse durante el proceso, cambiando el diámetro o la profundidad de corte sin que el operario lo note de inmediato."

explicacion: |
  Es una de las causas silenciosas de piezas fuera de medida: el
  desgaste progresivo altera la geometría de corte real.
```

### 18 — pregunta 18

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "avanzado"
  tags: ["caso mixto"]

variables:
  n: uno_de([1, 1])

respuesta: "chatter (vibración por resonancia)"
tipo: mc
opciones_explicitas: ["error de medición del calibre", "chatter (vibración por resonancia)", "dilatación térmica de la pieza"]

enunciado: "Caso: durante el mecanizado se escucha un zumbido agudo y la pieza queda con marcas periódicas en la superficie. El diagnóstico más probable es..."

explicacion: |
  El zumbido agudo con marcas periódicas es la firma característica del
  chatter, no de un error de medición ni de dilatación térmica.
```

### 19 — pregunta 19

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "avanzado"
  tags: ["caso mixto"]

variables:
  n: uno_de([1, 1])

respuesta: "revisar el filo de la herramienta y la fijación de la pieza"
tipo: mc
opciones_explicitas: ["revisar el filo de la herramienta y la fijación de la pieza", "aumentar la velocidad al máximo sin más análisis", "medir la pieza con un calibre sin calibrar"]

enunciado: "Caso: la pieza queda con una superficie rugosa y marcas irregulares, pero las dimensiones son correctas. El siguiente paso lógico de diagnóstico es..."

explicacion: |
  Como el problema es de acabado (no de medida), hay que enfocarse en
  fijación y filo de herramienta, no en errores de medición.
```

### 20 — pregunta 20

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "avanzado"
  tags: ["solucion extrema chatter"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En algunos casos de chatter persistente, cambiar el ángulo de la herramienta o usar una con mayor rigidez estructural es la única solución efectiva."

explicacion: |
  Cuando ajustar velocidad y profundidad no alcanza, hay que atacar la
  rigidez o geometría de la herramienta directamente.
```

### 21 — pregunta 21

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "basico"
  tags: ["definicion acabado"]

variables:
  n: uno_de([1, 1])

respuesta: "la rugosidad o suavidad de la pieza terminada"
tipo: mc
opciones_explicitas: ["la rugosidad o suavidad de la pieza terminada", "el peso total de la pieza", "el color del material usado"]

enunciado: "El \"acabado superficial\" se refiere a..."

explicacion: |
  Es una medida de calidad distinta de la dimensión: una pieza puede
  tener la medida correcta y aun así un acabado deficiente.
```

### 22 — pregunta 22

```
metadata:
  materia: "oficios"
  tema: "tornero_diagnostico_mecanizado_por_casos"
  nivel: "basico"
  tags: ["habilidades del experto"]

variables:
  n: uno_de([1, 1])

respuesta: "la capacidad de observación y el pensamiento crítico"
tipo: mc
opciones_explicitas: ["la capacidad de observación y el pensamiento crítico", "la memorización exacta de todos los manuales", "trabajar siempre a la máxima velocidad posible"]

enunciado: "Según la teoría, trabajar con casos entrena principalmente..."

explicacion: |
  Estas son las habilidades que distinguen a un operario experto de uno
  principiante, más allá de memorizar procedimientos.
```

