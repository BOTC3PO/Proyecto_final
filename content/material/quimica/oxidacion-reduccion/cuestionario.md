# Química — Oxidación y reducción: número de oxidación (cuestionario, 20 preguntas VBLang)

> Tema: `QW`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma, en paralelo) y
> corregido a mano. Sin bugs funcionales esta tanda.

---

### 1 — Definición de oxidación

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["redox", "electrones"]

respuesta: "pierde electrones"
tipo: mc
opciones_explicitas: ["pierde electrones", "gana electrones", "ni pierde ni gana", "pierde protones"]

enunciado: "En química, la oxidación es el proceso en el que un átomo o ion..."

explicacion: |
  La oxidación es la pérdida de electrones.
```

### 2 — Definición de reducción

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["redox", "electrones"]

respuesta: "gana electrones"
tipo: mc
opciones_explicitas: ["gana electrones", "pierde electrones", "ni pierde ni gana", "gana protones"]

enunciado: "En química, la reducción es el proceso en el que un átomo o ion..."

explicacion: |
  La reducción es la ganancia de electrones.
```

### 3 — Cambio en el número de oxidación (oxidación)

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["redox", "numero_de_oxidacion"]

respuesta: verdadero
tipo: vf

enunciado: "Al oxidarse, el número de oxidación de un elemento aumenta (se vuelve más positivo)."

explicacion: |
  Como pierde cargas negativas (electrones), su número de oxidación sube.
```

### 4 — Cambio en el número de oxidación (reducción)

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["redox", "numero_de_oxidacion"]

respuesta: falso
tipo: vf

enunciado: "Al reducirse, el número de oxidación de un elemento aumenta (se vuelve más positivo)."

explicacion: |
  Falso. Al ganar electrones, su número de oxidación DISMINUYE.
```

### 5 — Simultaneidad en reacciones redox

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["redox", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La oxidación y la reducción siempre ocurren juntas en una reacción redox."

explicacion: |
  Si una especie se oxida (pierde electrones), otra debe reducirse (ganarlos): se conserva la carga total.
```

### 6 — Regla mnemotécnica OIL RIG

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["mnemotecnica"]

respuesta: "Gain"
tipo: completar
respuestas_validas:
  - "Gain"

enunciado: "OIL RIG: Oxidation Is Loss, Reduction Is ___."

explicacion: |
  OIL RIG: Oxidation Is Loss (de electrones), Reduction Is Gain (de electrones).
```

### 7 — Definición de agente oxidante

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["agente_oxidante"]

respuesta: verdadero
tipo: vf

enunciado: "El agente oxidante es la sustancia que provoca que otra sustancia se oxide."

explicacion: |
  Correcto. El agente oxidante acepta electrones de la otra sustancia, provocando su oxidación.
```

### 8 — Comportamiento del agente oxidante

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["agente_oxidante"]

respuesta: falso
tipo: vf

enunciado: "El agente oxidante, durante la reacción, se oxida a sí mismo."

explicacion: |
  Falso. El agente oxidante gana electrones, así que se REDUCE a sí mismo.
```

### 9 — Definición de agente reductor

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["agente_reductor"]

respuesta: verdadero
tipo: vf

enunciado: "El agente reductor es la sustancia que provoca que otra se reduzca, y en el proceso se oxida a sí mismo."

explicacion: |
  Correcto. Cede electrones (se oxida) para que la otra sustancia se reduzca.
```

### 10 — Nomenclatura de los agentes

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["nomenclatura", "agentes"]

respuesta: falso
tipo: vf

enunciado: "El nombre 'agente oxidante' describe lo que le sucede a la sustancia misma, no lo que le hace al otro reactivo."

explicacion: |
  Falso. El nombre describe la acción que ejerce sobre el otro reactivo (lo oxida), aunque él mismo se reduzca.
```

### 11 — Oxidación del zinc

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["redox", "estado_de_oxidacion"]

respuesta: verdadero
tipo: vf

enunciado: "En Zn + Cu2+ -> Zn2+ + Cu, el zinc pasa de número de oxidación 0 a +2: se oxida."

explicacion: |
  Pierde electrones, sube su número de oxidación: se oxida.
```

### 12 — Reducción del cobre

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["redox", "estado_de_oxidacion"]

respuesta: verdadero
tipo: vf

enunciado: "En Zn + Cu2+ -> Zn2+ + Cu, el cobre pasa de +2 a 0: se reduce."

explicacion: |
  Gana electrones, baja su número de oxidación: se reduce.
```

### 13 — Agente reductor del ejemplo

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["redox", "agente_reductor"]

respuesta: "Zn"
tipo: mc
opciones_explicitas: ["Zn", "Cu2+", "Zn2+", "Cu"]

enunciado: "En Zn + Cu2+ -> Zn2+ + Cu, ¿quién es el agente reductor?"

explicacion: |
  El Zn se oxida y provoca la reducción del Cu2+: es el agente reductor.
```

### 14 — Agente oxidante del ejemplo

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["redox", "agente_oxidante"]

respuesta: "Cu2+"
tipo: mc
opciones_explicitas: ["Cu2+", "Zn", "Zn2+", "Cu"]

enunciado: "En Zn + Cu2+ -> Zn2+ + Cu, ¿quién es el agente oxidante?"

explicacion: |
  El Cu2+ se reduce y provoca la oxidación del Zn: es el agente oxidante.
```

### 15 — Electrones transferidos

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["redox", "electrones"]

variables:
  carga_inicial: 0
  carga_final: uno_de([2, 3])

respuesta: carga_final - carga_inicial
tipo: input
tolerancia_abs: 0.01

enunciado: "Si un átomo pasa de una carga de {carga_inicial} a {carga_final}, ¿cuántos electrones perdió?"

explicacion: |
  Electrones perdidos = {carga_final} - {carga_inicial}.
```

### 16 — Transferencia de electrones

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["redox", "electrones"]

respuesta: verdadero
tipo: vf

enunciado: "Los electrones que un elemento pierde al oxidarse son exactamente los que otro elemento gana al reducirse."

explicacion: |
  Los electrones cedidos por el agente reductor igualan a los aceptados por el agente oxidante.
```

### 17 — Pilas y espontaneidad

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["pilas", "espontaneidad"]

respuesta: verdadero
tipo: vf

enunciado: "Las pilas aprovechan una reacción redox espontánea para generar corriente eléctrica."

explicacion: |
  Correcto — ver ../pilas-celdas-galvanicas/.
```

### 18 — Electrólisis y energía

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["electrolisis", "energia"]

respuesta: verdadero
tipo: vf

enunciado: "La electrólisis usa corriente eléctrica para forzar una reacción redox que no ocurriría sola."

explicacion: |
  Correcto — ver ../electrolisis/, requiere energía externa (proceso no espontáneo).
```

### 19 — Destino de los electrones

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["redox", "electrones"]

respuesta: falso
tipo: vf

enunciado: "En una reacción redox, los electrones simplemente desaparecen, no se transfieren de un elemento a otro."

explicacion: |
  Falso. Por conservación de la carga, los electrones se transfieren, no desaparecen.
```

### 20 — Identificación de proceso por cambio de carga

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["redox", "identificacion"]

variables:
  escenario: [["+3 a +2", "reduccion"], ["-1 a 0", "oxidacion"], ["0 a +1", "oxidacion"], ["+4 a +1", "reduccion"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["oxidacion", "reduccion"]

enunciado: "Si el número de oxidación de un elemento pasa de {escenario[idx][0]}, ¿ese elemento se oxidó o se redujo?"

explicacion: |
  Si el número de oxidación sube, es oxidación; si baja, es reducción.
```
