### 1 — El criterio de demarcación de Popper
```
metadata:
  materia: "investigacion"
  tema: "falsacionismo_popper"
  nivel: "intermedio"
  tags: ["popper", "falsacionismo", "demarcacion"]

respuesta: "falsabilidad"
tipo: completar
respuestas_validas: ["falsabilidad", "falsacionabilidad", "falsable"]

enunciado: "Para Karl Popper, lo que distingue a una teoría científica de una pseudocientífica no es su capacidad de ser confirmada por la experiencia, sino su capacidad de ser ___."

explicacion: |
  El falsacionismo sostiene que una teoría es científica solo si es posible imaginar un enunciado observacional que, de ser cierto, la refutaría.
```

### 2 — Paradigmas vs. Ciencia Normal
```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia_normal"]

variables:
  escenario: uno_de([["Ciencia Normal", "Resolución de acertijos"], ["Ciencia Normal", "Búsqueda de la verdad absoluta"], ["Crisis", "Resolución de acertijos"]])

respuesta: escenario[0][1]
tipo: mc
opciones_explicitas: ["Resolución de acertijos", "Búsqueda de la verdad absoluta", "Resolución de crisis"]

enunciado: "Según Thomas Kuhn, durante el periodo de 'Ciencia Normal', el trabajo de los científicos consiste principalmente en la ___."

explicacion: |
  En la ciencia normal, los científicos no buscan refutar el paradigma, sino resolver "acertijos" (puzzles) dentro de las reglas establecidas por el paradigma vigente.
```

### 3 — El anarquismo de Feyerabend
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

### 4 — Evolución de la ciencia según Kuhn
```
metadata:
  materia: "investigacion"
  tema: "ciclos_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "crisis"]

variables:
  secuencia: uno_de([[0, 1, 2], [0, 2, 1], [1, 0, 2]])

respuesta: ["Ciencia Normal", "Crisis", "Revolución Científica"]
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

### 5 — Popper vs. Kuhn: El objetivo de la ciencia
```
metadata:
  materia: "investigacion"
  tema: "contraste_popper_kuhn"
  nivel: "avanzado"
  tags: ["popper", "kuhn", "comparacion"]

variables:
  caso: uno_de([["Popper", "Refutación"], ["Kuhn", "Cambio de paradigma"]])

respuesta: caso[0][1]
tipo: mc
opciones_explicitas: ["Cambio de paradigma", "Refutación", "Confirmación absoluta"]

enunciado: "Mientras que para Kuhn la ciencia progresa mediante cambios de paradigma, para Karl Popper el motor del progreso es la ___."

explicacion: |
  Para Popper, la ciencia avanza mediante la eliminación de errores; es decir, mediante la refutación de teorías que han sido sometidas a pruebas severas.
```