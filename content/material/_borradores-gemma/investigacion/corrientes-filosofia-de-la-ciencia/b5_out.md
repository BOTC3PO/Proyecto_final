### 1 — El criterio de demarcación
```
metadata:
  materia: "investigacion"
  tema: "falsacionismo_popper"
  nivel: "intermedio"
  tags: ["popper", "falsacionismo", "demarcacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Una teoría que afirma que 'mañana lloverá o no lloverá'", "falsa"],
    ["Una teoría que afirma que 'todos los cisnes son blancos' y se observa un cisne negro", "verdadera"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["falsa", "verdadera", "inconmensurable", "paradigmática"]

enunciado: "Según el falsacionismo de Karl Popper, una teoría es científica si es capaz de ser refutada por la experiencia. Si nos enfrentamos a: {escenarios[escenario_idx][0]}, ¿la teoría es científica bajo este criterio?"

explicacion: |
  Para Popper, una teoría es científica solo si es falsable. Una afirmación que es verdadera por definición (tautología) como 'A o no A' no puede ser refutada, por lo tanto, no es científica.
```

### 2 — La estructura de las revoluciones
```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia-normal"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Un científico resuelve un acertijo dentro del modelo actual", "ciencia-normal"],
    ["La acumulación de anomalías provoca una crisis en el modelo", "crisis"]
  ]
  orden_kuhn: ["pre-ciencia", "ciencia-normal", "crisis", "revolución-científica", "nuevo-paradigma"]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["ciencia-normal", "crisis", "revolución-científica", "falsación"]

enunciado: "Thomas Kuhn sostiene que la ciencia progresa mediante cambios de paradigmas. Si un científico se encuentra en la situación de: {casos[caso_idx][0]}, ¿qué etapa de la ciencia está realizando?"

explicacion: |
  La 'ciencia normal' es el periodo donde el paradigma vigente es aceptado y se trabaja para resolver problemas o 'acertijos' dentro de su marco.
```

### 3 — El caos creativo
```
metadata:
  materia: "investigacion"
  tema: "anarquismo_epistemologico"
  nivel: "avanzado"
  tags: ["feyerabend", "anarquismo", "metodologia"]

respuesta: "contra-intuitivo"
tipo: completar
respuestas_validas: ["contra-intuitivo", "metodico", "riguroso", "falsable"]

enunciado: "Paul Feyerabend, en su obra 'Contra la muerte de la razón', sostiene que no existe un método único y universal para el progreso científico, proponiendo un enfoque que puede ser considerado ___ para la metodología tradicional."

explicacion: |
  Feyerabend defiende el 'anything goes' (todo vale), argumentando que la adherencia estricta a reglas metodológicas ha frenado el progreso científico.
```

### 4 — Comparación de enfoques
```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "intermedio"
  tags: ["comparacion", "popper", "kuhn"]

respuesta: "Kuhn"
tipo: mc
opciones_explicitas: ["Popper", "Kuhn", "Feyerabend", "Lakatos"]

enunciado: "Mientras que Popper ve la ciencia como un proceso de eliminación de errores mediante la falsación, el autor que describe la ciencia como una serie de cambios bruscos de visión del mundo (paradigmas) es: ___"

explicacion: |
  Thomas Kuhn introdujo la noción de paradigma y la idea de que la ciencia no es solo un proceso lógico, sino también un proceso sociológico y psicológico de cambios de visión.
```

### 5 — Secuencia de la ciencia kuhniana
```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "avanzado"
  tags: ["kuhn", "secuencia", "revolucion"]

respuesta: ["pre-ciencia", "ciencia-normal", "crisis", "revolución-científica"]
tipo: ordenar
opciones_explicitas: ["pre-ciencia", "ciencia-normal", "crisis", "revolución-científica"]

enunciado: "Ordene cronológicamente las fases del desarrollo científico según la estructura propuesta por Thomas Kuhn:"

explicacion: |
  El ciclo comienza con la pre-ciencia (falta de consenso), sigue con la ciencia-normal (dominio de un paradigma), la crisis (aparición de anomalías insolubles) y finalmente la revolución científica (cambio de paradigma).
```