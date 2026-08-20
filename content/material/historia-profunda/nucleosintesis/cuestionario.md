# Historia Profunda — Nucleosíntesis: de dónde salen los elementos (cuestionario, 25 preguntas VBLang)

> Tema: `U4`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: varias preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`); una
> pregunta con `variables:` sorteando un escenario "decoy" (colisión
> de galaxias) cuya `respuesta:` fija no correspondía a ese escenario
> — simplificada a pregunta fija; un lote entero (5 preguntas) con
> `variables:`/`datos`/`respuestas` duplicadas sin sentido y
> `enunciado:` con fragmentos de texto mal armados (interpolación de
> partes de oración inconexas) — reescritas como preguntas fijas y
> claras; `tipo: vf` con `respuestas_validas: ["verdadero","falso"]`
> innecesario — normalizado.

---

### 1 — Composición de hidrógeno

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "basico"
  tags: ["big_bang", "hidrogeno"]

enunciado: "Durante la nucleosíntesis primordial, el elemento más abundante tras el Big Bang fue el ___."

respuestas_validas:
  - "hidrógeno"
  - "hidrogeno"
respuesta: "hidrógeno"
tipo: completar

explicacion: |
  El hidrógeno es el elemento más simple y abundante, representando aproximadamente el 75% de la masa de la materia bariónica inicial.
```

### 2 — El segundo elemento

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "basico"
  tags: ["helio", "big_bang"]

enunciado: "La abundancia de helio-4 resultante de los primeros minutos del universo es de aproximadamente un ___ %."

respuestas_validas:
  - "25"
respuesta: "25"
tipo: completar

explicacion: |
  La nucleosíntesis primordial produjo aproximadamente un 25% de helio en masa, junto con trazas de otros elementos livianos.
```

### 3 — El enigma del litio

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "intermedio"
  tags: ["litio", "elementos_livianos"]

enunciado: "Además de hidrógeno y helio, la nucleosíntesis primordial dejó trazas de un tercer elemento liviano llamado ___."

respuestas_validas:
  - "litio"
respuesta: "litio"
tipo: completar

explicacion: |
  El litio es el tercer elemento más ligero producido en este proceso, aunque en cantidades mucho menores que el hidrógeno y el helio.
```

### 4 — Proceso de formación

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "intermedio"
  tags: ["proceso", "tiempo"]

enunciado: "La nucleosíntesis primordial ocurrió durante los primeros ___ minutos después del Big Bang."

respuestas_validas:
  - "20"
respuesta: "20"
tipo: completar

explicacion: |
  El proceso de nucleosíntesis fue muy breve, ocurriendo aproximadamente entre los 3 y los 20 minutos tras la expansión inicial.
```

### 5 — Proporciones de masa

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "avanzado"
  tags: ["abundancia", "proporciones"]

enunciado: "Si el hidrógeno representa el 75% de la masa, el helio representa el ___%."

respuestas_validas:
  - "25"
respuesta: "25"
tipo: completar

explicacion: |
  En el modelo estándar de la nucleosíntesis primordial, la masa se distribuye aproximadamente en un 75% de hidrógeno y un 25% de helio.
```

### 6 — El inicio de la vida estelar

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "basico"
  tags: ["fusion", "hidrogeno", "estrellas"]

tipo: mc
opciones_explicitas: ["Fusión de helio", "Fusión de hidrógeno", "Fisión de uranio", "Fusión de carbono"]
respuesta: "Fusión de hidrógeno"

enunciado: "En la secuencia principal de las estrellas, el proceso de nucleosíntesis que sostiene la estrella durante la mayor parte de su vida es la fusión de hidrógeno en helio. ¿Cuál es ese proceso?"

explicacion: |
  La fusión de hidrógeno en helio es el proceso fundamental que libera la energía que permite a una estrella brillar.
```

### 7 — La barrera del hierro

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "intermedio"
  tags: ["hierro", "energia", "limite"]

tipo: vf
respuesta: falso

enunciado: "La fusión de elementos más pesados que el hierro (Fe) es un proceso que libera energía neta para la estrella, permitiéndole seguir brillando por más tiempo."

explicacion: |
  Falso. El hierro es el límite de la nucleosíntesis estelar porque la fusión de elementos más pesados que el hierro consume energía en lugar de liberarla, lo que lleva al colapso del núcleo.
```

### 8 — La cadena de la vida estelar

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "avanzado"
  tags: ["secuencia", "elementos", "estelar"]

tipo: ordenar
opciones_explicitas: ["Hidrógeno", "Helio", "Carbono", "Hierro"]
respuesta_orden: ["Hidrógeno", "Helio", "Carbono", "Hierro"]

enunciado: "Ordená cronológicamente los elementos que se forman mediante la fusión en el interior de una estrella masiva, desde su fase de secuencia principal hasta el final de su vida estelar:"

explicacion: |
  Las estrellas masivas queman sucesivamente elementos más pesados a medida que su núcleo se contrae y calienta: hidrógeno → helio → carbono → ... hasta llegar al hierro.
```

### 9 — El producto de la combustión de helio

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "basico"
  tags: ["helio", "carbono", "procesos"]

tipo: mc
opciones_explicitas: ["Oxígeno", "Carbono", "Neón", "Magnesio"]
respuesta: "Carbono"

enunciado: "Cuando una estrella agota su hidrógeno, comienza la fusión de helio en su núcleo, produciendo principalmente el elemento ___."

explicacion: |
  El proceso triple alfa permite la fusión de tres núcleos de helio para formar un núcleo de carbono.
```

### 10 — El destino del núcleo estelar

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "intermedio"
  tags: ["hierro", "energia", "colapso"]

tipo: vf
respuesta: verdadero

enunciado: "El hierro es considerado el 'límite de la nucleosíntesis' porque su núcleo es extremadamente estable y la fusión de elementos más pesados que él requiere un aporte de energía en lugar de liberarla."

explicacion: |
  Verdadero. Debido a la alta estabilidad del núcleo de hierro, la fusión subsiguiente no puede sostener la presión térmica necesaria para contrarrestar la gravedad, provocando el colapso estelar.
```

### 11 — El límite del hierro

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "basico"
  tags: ["estrellas", "hierro"]

enunciado: "En el ciclo de vida de una estrella masiva, la fusión nuclear es un proceso que libera energía hasta que se llega a un elemento que no puede fusionarse para liberar más energía. Este elemento es el ___."

respuestas_validas:
  - "hierro"
respuesta: "hierro"
tipo: completar

explicacion: |
  El hierro-56 es el elemento más estable; fusionar elementos más pesados que el hierro requiere energía en lugar de liberarla, lo que marca el fin de la fusión estelar normal.
```

### 12 — El origen del oro

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "intermedio"
  tags: ["supernova", "oro"]

enunciado: "Los elementos más pesados que el hierro, como el oro, no se forman en la fusión estelar cotidiana, sino en eventos catastróficos. Uno de estos eventos es la explosión de una ___."

respuestas_validas:
  - "supernova"
respuesta: "supernova"
tipo: completar

explicacion: |
  Las supernovas proporcionan el flujo masivo de neutrones necesario para que los núcleos capturen partículas y crezcan más allá del hierro.
```

### 13 — Colisiones cósmicas

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "avanzado"
  tags: ["estrellas_de_neutrones", "uranio"]

enunciado: "La síntesis de elementos extremadamente pesados como el uranio ocurre principalmente durante la ___."

respuestas_validas:
  - "colisión de estrellas de neutrones"
  - "colision de estrellas de neutrones"
respuesta: "colisión de estrellas de neutrones"
tipo: completar

explicacion: |
  Las colisiones de estrellas de neutrones (kilonovas) son sitios ideales para el proceso r (captura rápida de neutrones), creando elementos como el uranio.
```

### 14 — El proceso de captura

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "intermedio"
  tags: ["proceso_r", "neutrones"]

enunciado: "Para que un núcleo atómico crezca y se convierta en un elemento pesado como el uranio, debe capturar rápidamente una gran cantidad de ___."

respuestas_validas:
  - "neutrones"
respuesta: "neutrones"
tipo: completar

explicacion: |
  El proceso r (rápido) implica que los núcleos capturan neutrones más rápido de lo que pueden decaer, permitiendo la creación de elementos muy pesados.
```

### 15 — La tabla periódica cósmica

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "basico"
  tags: ["elementos", "pesados"]

enunciado: "Si un elemento tiene un número atómico mayor al del hierro, su origen probable es un evento de nucleosíntesis ___."

respuestas_validas:
  - "explosiva"
respuesta: "explosiva"
tipo: completar

explicacion: |
  La nucleosíntesis explosiva ocurre durante eventos de alta energía como supernovas o colisiones de objetos compactos, permitiendo superar la barrera de estabilidad del hierro.
```

### 16 — El origen del hierro corporal

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "basico"
  tags: ["estrellas", "hierro", "origen"]

tipo: mc
opciones_explicitas: ["Fusión de hidrógeno", "Fusión de helio", "Fusión de elementos pesados en núcleos estelares", "Espacio vacío"]

respuesta: "Fusión de elementos pesados en núcleos estelares"

enunciado: "El hierro presente en nuestra sangre (hemoglobina) no se creó en el Sistema Solar, sino que fue el resultado de la fusión de elementos pesados en el núcleo de estrellas masivas antes de que estas explotaran. ¿Cuál es el proceso principal?"

explicacion: |
  Los elementos más pesados que el hierro se forman en explosiones de supernovas, mientras que el hierro se produce en las etapas finales de la vida de estrellas masivas mediante la fusión nuclear.
```

### 17 — El inventario cósmico

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "intermedio"
  tags: ["tabla_periodica", "elementos", "historia"]

tipo: vf
respuesta: verdadero

enunciado: "Si la tabla periódica es un inventario de los elementos que componen la materia, la mayoría de los elementos más pesados que el litio se formaron en el interior de las estrellas."

explicacion: |
  Verdadero. El Big Bang sólo produjo hidrógeno, helio y trazas de litio. Todos los demás elementos (carbono, oxígeno, calcio, etc.) requieren procesos estelares para su formación.
```

### 18 — El destino de las estrellas

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "basico"
  tags: ["supernova", "elementos", "polvo"]

tipo: mc
opciones_explicitas: ["La formación de un planeta", "La explosión de una supernova", "La formación de una nebulosa", "El enfriamiento del Sol"]

respuesta: "La explosión de una supernova"

enunciado: "Para que los elementos pesados fabricados en el núcleo de una estrella puedan dispersarse por el universo y formar nuevos sistemas solares como el nuestro, ¿qué evento astronómico es necesario?"

explicacion: |
  Las supernovas actúan como mecanismos de dispersión, lanzando los elementos sintetizados al medio interestelar, donde eventualmente se condensan en planetas y vida.
```

### 19 — La huella en nuestro cuerpo

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "intermedio"
  tags: ["calcio", "biologia_estelar", "origen"]

tipo: vf
respuesta: verdadero

enunciado: "Considerando que el calcio es un elemento esencial para la estructura ósea humana, cada átomo de calcio en nuestro cuerpo fue creado en una estrella que existió antes que el Sol."

explicacion: |
  Es cierto. El calcio es un elemento pesado que requiere procesos de nucleosíntesis estelar (como la captura de partículas alfa) para existir.
```

### 20 — La cronología de la materia

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "avanzado"
  tags: ["tiempo_cosmico", "elementos", "genealogia"]

tipo: mc
opciones_explicitas: ["Los elementos se crean simultáneamente al Sol", "Los elementos pesados se crean después de la Tierra", "Los elementos pesados se crearon en generaciones estelares previas", "Los elementos no cambian con el tiempo"]

respuesta: "Los elementos pesados se crearon en generaciones estelares previas"

enunciado: "Desde una perspectiva de 'historia profunda', la composición química de la Tierra es un registro de eventos astronómicos pasados. ¿Cuál es la relación correcta entre la creación de elementos pesados y nuestro sistema solar?"

explicacion: |
  La materia que nos compone es el resultado de ciclos de vida y muerte estelar previos. El sistema solar se formó a partir de nubes de gas y polvo que ya contenían los elementos fabricados por estrellas anteriores.
```

### 21 — El origen del hidrógeno

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "basico"
  tags: ["big_bang", "hidrogeno"]

opciones_explicitas: ["Big Bang", "Fusión estelar", "Supernova"]
respuesta: "Big Bang"
tipo: mc

enunciado: "El hidrógeno es el elemento más abundante del universo. ¿Cuál fue el proceso responsable de su formación?"

explicacion: |
  El hidrógeno es el elemento más simple y abundante, formado durante la nucleosíntesis primordial en los primeros minutos tras el Big Bang.
```

### 22 — La creación del carbono

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "intermedio"
  tags: ["estrellas", "carbono"]

opciones_explicitas: ["Fusión estelar (proceso triple alfa)", "Big Bang", "Supernova"]
respuesta: "Fusión estelar (proceso triple alfa)"
tipo: mc

enunciado: "Para la formación del carbono, ¿cuál es el mecanismo principal?"

explicacion: |
  El carbono se forma en el núcleo de estrellas de la secuencia principal mediante el proceso de triple alfa (fusión de tres núcleos de helio).
```

### 23 — El origen de los elementos pesados

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "avanzado"
  tags: ["oro", "supernova"]

opciones_explicitas: ["Fusión estelar", "Big Bang", "Colisión de estrellas de neutrones o supernova"]
respuesta: "Colisión de estrellas de neutrones o supernova"
tipo: mc

enunciado: "Si buscamos identificar el origen del oro, ¿hacia qué tipo de evento debemos mirar?"

explicacion: |
  Elementos más pesados que el hierro, como el oro, requieren eventos cataclísmicos como supernovas o la fusión de estrellas de neutrones para su formación.
```

### 24 — Completar la secuencia estelar

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "intermedio"
  tags: ["helio", "fusión"]

enunciado: "En una estrella de la secuencia principal, el paso del hidrógeno al helio ocurre mediante el proceso de ___."

respuestas_validas:
  - "fusión nuclear"
  - "fusion nuclear"
respuesta: "fusión nuclear"
tipo: completar

explicacion: |
  Las estrellas fusionan núcleos de hidrógeno para crear helio, liberando la energía que las hace brillar.
```

### 25 — Identificación de procesos: el límite del hierro

```
metadata:
  materia: "historia_profunda"
  tema: "nucleosintesis"
  nivel: "basico"
  tags: ["hierro", "nucleosintesis"]

enunciado: "En el ciclo de vida de una estrella masiva, la formación de hierro marca el límite de la ___ antes de la explosión."

respuestas_validas:
  - "fusión estelar"
  - "fusion estelar"
respuesta: "fusión estelar"
tipo: completar

explicacion: |
  El hierro es el elemento más estable; una vez que el núcleo estelar se convierte en hierro, la fusión que libera energía cesa y la estrella colapsa.
```
