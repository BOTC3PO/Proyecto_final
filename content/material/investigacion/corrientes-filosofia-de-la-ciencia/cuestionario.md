# Investigacion — Corrientes filosofia de la ciencia (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El criterio de demarcación de Popper

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "basico"
  tags: ["popper", "falsacionismo", "demarcacion"]

respuesta: "falsabilidad"
tipo: completar
respuestas_validas:
  - "falsabilidad"
  - "falsacion"

enunciado: "Para Karl Popper, el criterio de demarcación que distingue a la ciencia de la metafísica es la ___________."

explicacion: |
  Para Popper, una teoría es científica solo si es capaz de ser refutada por la experiencia. Si una teoría no puede ser sometida a pruebas que puedan contradecirla, no es científica.
```

### 2 — El cambio de paradigma de Kuhn

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia_normal"]

opciones_explicitas: ["ciencia_normal", "crisis", "revolucion"]

respuesta: "crisis"
tipo: mc

enunciado: "Según Thomas Kuhn, el periodo caracterizado por la acumulación de anomalías que el modelo vigente no puede explicar se denomina ___________."

explicacion: |
  La crisis es el paso previo a la revolución científica. Ocurre cuando las anomalías son tan numerosas o profundas que la comunidad científica pierde la confianza en el paradigma vigente.
```

### 3 — El anarquismo epistemológico

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "basico"
  tags: ["feyerabend", "anarquismo", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "¿Sostiene Paul Feyerabend que existe un único método científico universal que debe seguirse para garantizar el progreso del conocimiento?"

explicacion: |
  Feyerabend, con su principio de "todo vale" (anything goes), argumentó que no existe un método único y que la ciencia progresa precisamente porque los científicos rompen las reglas metodológicas establecidas.
```

### 4 — Etapas del ciclo de Kuhn

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ordenar"]

opciones_explicitas: ["Ciencia Normal", "Crisis", "Revolución Científica", "Nuevo Paradigma"]

respuesta_orden: ["Ciencia Normal", "Crisis", "Revolución Científica", "Nuevo Paradigma"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas del ciclo de desarrollo científico propuesto por Thomas Kuhn:"

explicacion: |
  El ciclo comienza con la Ciencia Normal (trabajo bajo un paradigma), sigue con una Crisis (anomalías), lleva a una Revolución Científica (cambio de modelo) y culmina con la instauración de un Nuevo Paradigma.
```

### 5 — Comparación de enfoques

```
metadata:
  materia: "investigacion"
  tema: "filosofia_de_la_ciencia"
  nivel: "avanzado"
  tags: ["popper", "kuhn", "feyerabend"]

opciones_explicitas: ["falsacionismo", "paradigmas", "anarquismo"]

respuesta: "falsacionismo"
tipo: mc

enunciado: "Si un autor afirma que el progreso científico se da a través de la eliminación de teorías que han sido refutadas por la experiencia, se refiere al ___________."

explicacion: |
  El falsacionismo de Popper se basa en la idea de que la ciencia no busca verdades absolutas, sino teorías que aún no han sido refutadas (corroboradas), avanzando mediante la eliminación de errores.
```

### 6 — El criterio de demarcación de Popper

```
metadata:
  materia: "investigacion"
  tema: "falsacionismo_popper"
  nivel: "intermedio"
  tags: ["popper", "falsacionismo", "demarcacion"]

variables:
  escenario: uno_de([["La teoría de la relatividad de Einstein predice que la luz de una estrella se curva al pasar cerca del sol.", "falsable"], ["La teoría del psicoanálisis de Freud puede explicar tanto un comportamiento heroico como uno egoísta sin contradicciones.", "no_falsable"], ["La teoría de la selección natural de Darwin propone cambios en las poblaciones a través de generaciones.", "falsable"]])

enunciado: "De acuerdo con el falsacionismo de Karl Popper, una teoría es científica si es capaz de ser sometida a pruebas que podrían refutarla. Analizando el siguiente caso: '{escenario[0]}', la naturaleza de esta teoría es ___."

respuestas_validas:
  - "falsable"
  - "no_falsable"
respuesta: escenario[1]
tipo: completar

explicacion: |
  Para Popper, la ciencia no progresa confirmando verdades, sino eliminando errores. Una teoría es científica si establece condiciones bajo las cuales, de ocurrir, la teoría quedaría refutada (falsada). Si una teoría explica todo lo que sucede (como criticaba Popper del psicoanálisis), entonces no es científica porque no se arriesga a ser falsa.
```

### 7 — La estructura de las revoluciones de Kuhn

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia_normal"]

enunciado: "Thomas Kuhn sostiene que la ciencia no progresa de forma lineal, sino mediante saltos. El proceso sigue este orden: primero ocurre la 'Ciencia Normal', luego surge una serie de anomalías que no pueden ser resueltas, lo que lleva a una ___ y, finalmente, a un cambio de paradigma."

opciones_explicitas: ["Crisis", "Revolución Científica", "Cambio de Paradigma"]
respuesta: "Crisis"
tipo: mc

explicacion: |
  Según Kuhn, la 'Ciencia Normal' opera bajo un paradigma aceptado. Cuando las anomalías se acumulan y el paradigma actual no puede resolverlas, se entra en una fase de 'Crisis', que es el preludio necesario para una 'Revolución Científica'.
```

### 8 — El anarquismo epistemológico de Feyerabend

```
metadata:
  materia: "investigacion"
  tema: "anarquismo_epistemologico_feyerabend"
  nivel: "avanzado"
  tags: ["feyerabend", "anarquismo", "metodologia"]

enunciado: "Paul Feyerabend argumenta en su obra 'Contra el método' que no existe un único método científico universal que deba seguirse estrictamente para que el conocimiento sea válido. Su principio fundamental es 'Anything goes' (Todo vale). ¿Es esto cierto?"

opciones_explicitas: [verdadero, falso]
respuesta: verdadero
tipo: vf

explicacion: |
  Feyerabend sostiene que la historia de la ciencia muestra que los grandes avances ocurrieron precisamente porque los científicos violaron las reglas metodológicas establecidas. Por tanto, no hay una regla única e inamovible para hacer ciencia.
```

### 9 — El ciclo de Kuhn en la historia de la física

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "historia_ciencia", "ordenar"]

enunciado: "Ordena los eventos que describen el paso de la física Newtoniana a la física Relativista según el modelo de Kuhn:"

opciones_explicitas: ["Predominio del paradigma de Newton", "Aparición de anomalías (ej. órbita de Mercurio)", "Crisis del modelo clásico", "Revolución y nuevo paradigma de Einstein"]
respuesta_orden: ["Predominio del paradigma de Newton", "Aparición de anomalías (ej. órbita de Mercurio)", "Crisis del modelo clásico", "Revolución y nuevo paradigma de Einstein"]
tipo: ordenar

explicacion: |
  El modelo de Kuhn es cíclico: 1) Estabilidad (Paradigma), 2) Anomalías (problemas no resueltos), 3) Crisis (pérdida de confianza en el paradigma) y 4) Revolución (sustitución por uno nuevo).
```

### 10 — Comparativa de enfoques metodológicos

```
metadata:
  materia: "investigacion"
  tema: "corrientes_filosofia_ciencia"
  nivel: "avanzado"
  tags: ["comparativa", "popper", "kuhn", "feyerabend"]

enunciado: "Si un investigador se enfoca exclusivamente en la capacidad de una teoría para ser refutada mediante la experimentación, ¿qué autor está siguiendo?"

opciones_explicitas: ["Popper", "Kuhn", "Feyerabend"]
respuesta: "Popper"
tipo: mc

explicacion: |
  El enfoque centrado en la refutabilidad (falsacionismo) es la piedra angular del pensamiento de Karl Popper para distinguir la ciencia de la pseudociencia.
```

### 11 — Falsacionismo vs Verificacionismo

```
metadata:
  materia: "investigacion"
  tema: "falsacionismo"
  nivel: "intermedio"
  tags: ["popper", "falsacionismo", "epistemologia"]

respuesta: falso
tipo: vf

enunciado: "Para Karl Popper, el criterio de demarcación de la ciencia es la capacidad de una teoría para ser verificada empíricamente de forma definitiva."

explicacion: |
  El falsacionismo de Popper sostiene que la ciencia no progresa mediante la verificación (que es lógicamente imposible para leyes universales), sino mediante la falsación: una teoría es científica si es capaz de ser refutada por un enunciado observacional.
```

### 12 — La naturaleza de los paradigmas

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia-normal"]

opciones_explicitas: ["ciencia-normal", "revolucion-cientifica"]

respuesta: "ciencia-normal"
tipo: mc

enunciado: "Según Thomas Kuhn, el periodo en el que los científicos se dedican a resolver 'enigmas' dentro de un marco teórico aceptado se denomina: ___"

pasos:
  - "Identificar si el enunciado describe un periodo de estabilidad o de crisis."

explicacion: |
  En la ciencia-normal, los científicos no cuestionan los fundamentos, sino que resuelven problemas dentro del modelo vigente. La ruptura de este estado da lugar a la revolución científica.
```

### 13 — El anarquismo de Feyerabend

```
metadata:
  materia: "investigacion"
  tema: "anarquismo_epistemologico"
  nivel: "avanzado"
  tags: ["feyerabend", "anarquismo", "metodologia"]

respuesta: "contra el método"
tipo: completar

respuestas_validas:
  - "contra el método"
  - "sin método"

enunciado: "El principio de '___' de Paul Feyerabend sugiere que no existe una regla metodológica única y universal que guíe todo progreso científico."

explicacion: |
  Feyerabend argumenta que la ciencia es una actividad pluralista y que imponer un método único (como el inductivismo o el falsacionismo) limitaría el progreso científico y la libertad de investigación.
```

### 14 — Diferencia entre Popper y Kuhn

```
metadata:
  materia: "investigacion"
  tema: "comparativa_popper_kuhn"
  nivel: "avanzado"
  tags: ["popper", "kuhn", "comparacion"]

variables:
  caso: uno_de([["popper", "enfocado en la lógica de la justificación y la refutación"], ["kuhn", "enfocado en la historia y la sociología de la ciencia"]])

opciones_explicitas: ["popper", "kuhn"]

respuesta: caso[0]
tipo: mc

enunciado: "Si un filósofo analiza la ciencia centrándose en la estructura lógica de las leyes y cómo estas pueden ser refutadas, está adoptando una perspectiva principalmente ___."

explicacion: |
  Mientras que Kuhn analiza cómo la comunidad científica cambia sus paradigmas (perspectiva histórica/sociológica), Popper se centra en la lógica de la validación de las teorías (perspectiva lógica/normativa).
```

### 15 — El proceso de cambio de paradigma

```
metadata:
  materia: "investigacion"
  tema: "ciclo_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ordenar"]

opciones_explicitas: ["Ciencia Normal", "Crisis", "Revolución Científica", "Nuevo Paradigma"]

respuesta_orden: ["Ciencia Normal", "Crisis", "Revolución Científica", "Nuevo Paradigma"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas del ciclo de cambio de paradigma propuesto por Thomas Kuhn:"

pasos:
  - "Identificar el estado de estabilidad inicial."
  - "Identificar la aparición de anomalías que no pueden ser resueltas."
  - "Identificar el conflicto entre el modelo viejo y el nuevo."
  - "Identificar el resultado final del proceso."

explicacion: |
  El ciclo comienza con la Ciencia Normal, sigue con la Crisis (cuando las anomalías se acumulan), continúa con la Revolución Científica (el conflicto) y culmina con la instauración de un Nuevo Paradigma.
```

### 16 — El criterio de demarcación de Popper

```
metadata:
  materia: "investigacion"
  tema: "falsacionismo_popper"
  nivel: "intermedio"
  tags: ["popper", "falsacionismo", "demarcacion"]

respuesta: "falsabilidad"
tipo: completar
respuestas_validas:
  - "falsabilidad"
  - "falsacionabilidad"
  - "falsable"

enunciado: "Para Karl Popper, lo que distingue a una teoría científica de una pseudocientífica no es su capacidad de ser confirmada por la experiencia, sino su capacidad de ser ___."

explicacion: |
  El falsacionismo sostiene que una teoría es científica solo si es posible imaginar un enunciado observacional que, de ser cierto, la refutaría.
```

### 17 — Paradigmas vs. Ciencia Normal

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia_normal"]

respuesta: "Resolución de acertijos"
tipo: mc
opciones_explicitas: ["Resolución de acertijos", "Búsqueda de la verdad absoluta", "Resolución de crisis"]

enunciado: "Según Thomas Kuhn, durante el periodo de 'Ciencia Normal', el trabajo de los científicos consiste principalmente en la ___."

explicacion: |
  En la ciencia normal, los científicos no buscan refutar el paradigma, sino resolver "acertijos" (puzzles) dentro de las reglas establecidas por el paradigma vigente.
```

### 18 — El anarquismo de Feyerabend

```
metadata:
  materia: "investigacion"
  tema: "anarquismo_epistemologico_feyerabend"
  nivel: "avanzado"
  tags: ["feyerabend", "anarquismo", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "¿Es el anarquismo epistemológico de Paul Feyerabend una defensa de la existencia de un único método científico universal e ideal para el progreso del conocimiento?"

explicacion: |
  Feyerabend sostiene que "todo vale" (anything goes) y que la ciencia no sigue un método único y rígido, sino que el progreso a menudo requiere violar reglas metodológicas establecidas.
```

### 19 — Evolución de la ciencia según Kuhn

```
metadata:
  materia: "investigacion"
  tema: "ciclos_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "crisis"]

variables:
  secuencia: uno_de([[0, 1, 2], [0, 2, 1], [1, 0, 2]])

respuesta_orden: ["Ciencia Normal", "Crisis", "Revolución Científica"]
tipo: ordenar
opciones_explicitas: ["Ciencia Normal", "Crisis", "Revolución Científica"]

enunciado: "Ordene los momentos que caracterizan el ciclo de cambio científico propuesto por Thomas Kuhn:"

pasos:
  - "El periodo de estabilidad y resolución de problemas."
  - "El periodo de acumulación de anomalías que el paradigma no puede explicar."
  - "El periodo de ruptura y adopción de un nuevo paradigma."

explicacion: |
  Kuhn describe un proceso cíclico: la ciencia normal se ve interrumpida por una crisis, lo que da lugar a una revolución científica que establece un nuevo paradigma.
```

### 20 — Popper vs. Kuhn: El objetivo de la ciencia

```
metadata:
  materia: "investigacion"
  tema: "contraste_popper_kuhn"
  nivel: "avanzado"
  tags: ["popper", "kuhn", "comparacion"]

respuesta: "Refutación"
tipo: mc
opciones_explicitas: ["Cambio de paradigma", "Refutación", "Confirmación absoluta"]

enunciado: "Mientras que para Kuhn la ciencia progresa mediante cambios de paradigma, para Karl Popper el motor del progreso es la ___."

explicacion: |
  Para Popper, la ciencia avanza mediante la eliminación de errores; es decir, mediante la refutación de teorías que han sido sometidas a pruebas severas.
```

### 21 — El criterio de demarcación

```
metadata:
  materia: "investigacion"
  tema: "falsacionismo_popper"
  nivel: "intermedio"
  tags: ["popper", "falsacionismo", "demarcacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Una teoría que afirma que 'mañana lloverá o no lloverá'", "falsa"], ["Una teoría que afirma que 'todos los cisnes son blancos' y se observa un cisne negro", "verdadera"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["falsa", "verdadera", "inconmensurable", "paradigmática"]

enunciado: "Según el falsacionismo de Karl Popper, una teoría es científica si es capaz de ser refutada por la experiencia. Si nos enfrentamos a: {escenarios[escenario_idx][0]}, ¿la teoría es científica bajo este criterio?"

explicacion: |
  Para Popper, una teoría es científica solo si es falsable. Una afirmación que es verdadera por definición (tautología) como 'A o no A' no puede ser refutada, por lo tanto, no es científica.
```

### 22 — La estructura de las revoluciones

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia-normal"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un científico resuelve un acertijo dentro del modelo actual", "ciencia-normal"], ["La acumulación de anomalías provoca una crisis en el modelo", "crisis"]]
  orden_kuhn: ["pre-ciencia", "ciencia-normal", "crisis", "revolución-científica", "nuevo-paradigma"]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["ciencia-normal", "crisis", "revolución-científica", "falsación"]

enunciado: "Thomas Kuhn sostiene que la ciencia progresa mediante cambios de paradigmas. Si un científico se encuentra en la situación de: {casos[caso_idx][0]}, ¿qué etapa de la ciencia está realizando?"

explicacion: |
  La 'ciencia normal' es el periodo donde el paradigma vigente es aceptado y se trabaja para resolver problemas o 'acertijos' dentro de su marco.
```

### 23 — El caos creativo

```
metadata:
  materia: "investigacion"
  tema: "anarquismo_epistemologico"
  nivel: "avanzado"
  tags: ["feyerabend", "anarquismo", "metodologia"]

respuesta: "contra-intuitivo"
tipo: completar
respuestas_validas:
  - "contra-intuitivo"

enunciado: "Paul Feyerabend, en su obra 'Contra el método', sostiene que no existe un método único y universal para el progreso científico, proponiendo un enfoque que puede ser considerado ___ para la metodología tradicional."

explicacion: |
  Feyerabend defiende el 'anything goes' (todo vale), argumentando que la adherencia estricta a reglas metodológicas ha frenado el progreso científico.
```

### 24 — Comparación de enfoques

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

### 25 — Secuencia de la ciencia kuhniana

```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "avanzado"
  tags: ["kuhn", "secuencia", "revolucion"]

respuesta_orden: ["pre-ciencia", "ciencia-normal", "crisis", "revolución-científica"]
tipo: ordenar
opciones_explicitas: ["pre-ciencia", "ciencia-normal", "crisis", "revolución-científica"]

enunciado: "Ordene cronológicamente las fases del desarrollo científico según la estructura propuesta por Thomas Kuhn:"

explicacion: |
  El ciclo comienza con la pre-ciencia (falta de consenso), sigue con la ciencia-normal (dominio de un paradigma), la crisis (aparición de anomalías insolubles) y finalmente la revolución científica (cambio de paradigma).
```
