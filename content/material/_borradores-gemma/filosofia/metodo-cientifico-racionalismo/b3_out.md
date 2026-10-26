### 1 — La duda metódica de Descartes
```
metadata:
  materia: "filosofia"
  tema: "racionalismo"
  nivel: "basico"
  tags: ["descartes", "epistemologia"]

respuesta: "cogito_ergo_sum"
tipo: completar
respuestas_validas: ["cogito_ergo_sum"]

enunciado: "René Descartes utilizó la duda metódica para encontrar una verdad indudable. Tras dudar de todo, llegó a la conclusión de que, dado que piensa, existe. Esta famosa máxima se expresa como: '___'."

explicacion: |
  El 'Cogito, ergo sum' (Pienso, luego existo) es el punto de partida del racionalismo cartesiano, estableciendo la existencia del sujeto pensante como base del conocimiento.
```

### 2 — El método de Galileo
```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico"
  nivel: "intermedio"
  tags: ["galileo", "metodo_experimental"]

variables:
  escenario_idx: uno_de([0,1])

respuesta: escenario[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Deducción puramente lógica", "Observación y experimentación matemática", "Autoridad de los textos antiguos", "Intuición mística"]

enunciado: "Galileo Galilei es considerado el padre de la ciencia moderna por su enfoque basado en la observación y la matematización de la naturaleza. Su método se caracteriza principalmente por:"

explicacion: |
  A diferencia de la escolástica, Galileo insistió en que el libro de la naturaleza está escrito en lenguaje matemático y requiere la experimentación para validar las hipótesis.
```

### 3 — La síntesis de Newton
```
metadata:
  materia: "filosofia"
  tema: "revolucion_cientifica"
  nivel: "avanzado"
  tags: ["newton", "mecanicismo"]

variables:
  ley_idx: uno_de([0,1,2])

respuesta: leyes[ley_idx][1]
tipo: mc
opciones_explicitas: ["La ley de la gravitación universal y las leyes del movimiento", "La ley de la conservación de la masa", "La ley de la relatividad especial", "La ley de la termodinámica"]

enunciado: "Isaac Newton integró la física terrestre y la celeste en un solo sistema matemático. ¿Cuál de las siguientes opciones representa el núcleo de su contribución científica?"

explicacion: |
  Newton unificó la mecánica celeste con la mecánica terrestre mediante la formulación matemática de la gravedad y las leyes del movimiento.
```

### 4 — Orden de la revolución científica
```
metadata:
  materia: "filosofia"
  tema: "revolucion_cientifica"
  nivel: "intermedio"
  tags: ["historia_ciencia", "ordenar"]

respuesta: ["Galileo", "Descartes", "Newton"]
tipo: ordenar
opciones_explicitas: ["Galileo", "Descartes", "Newton"]

enunciado: "Ordena cronológicamente a estos pensadores fundamentales de la Revolución Científica y el Racionalismo, desde el primero en su desarrollo hasta el último:"

explicacion: |
  Galileo (1564-1642), Descartes (1596-1650) y Newton (1643-1727) representan la transición desde la observación experimental hacia la sistematización racional y la síntesis mecánica.
```

### 5 — El papel de la matemática
```
metadata:
  materia: "filosofia"
  tema: "racionalismo"
  nivel: "basico"
  tags: ["matematica", "descartes"]

respuesta: "deductivo"
tipo: completar
respuestas_validas: ["deductivo"]

enunciado: "Para los racionalistas como Descartes, el conocimiento se construye mediante un método ___ que parte de verdades evidentes para llegar a conclusiones complejas."

explicacion: |
  El método deductivo parte de principios generales (ideas innatas o verdades evidentes) para derivar conclusiones particulares mediante la lógica.
```