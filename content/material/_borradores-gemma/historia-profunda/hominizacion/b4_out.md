### 1 — Supervivencia del Homo sapiens
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["evolucion", "especies"]

respuesta: "Homo sapiens"
tipo: completar
respuestas_validas: ["Homo sapiens", "sapiens"]

enunciado: "De todas las especies del género Homo que existieron en el pasado, la única que sobrevive hoy en día es el ___."

explicacion: |
  A pesar de la coexistencia con otras especies como los Neandertales, el Homo sapiens es la única especie humana actual.
```

### 2 — Coexistencia de especies
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["coexistencia", "neandertal"]

variables:
  escenario: uno_de([["Neandertales", "Homo sapiens"], ["Denisovanos", "Homo sapiens"]])
  especie_extinta: escenario[0]
  especie_actual: escenario[1]

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Durante gran parte de su historia, el {especie_actual} convivió en el mismo territorio y tiempo con otras especies humanas como los {especie_extinta}."

explicacion: |
  La evidencia arqueológica y genética confirma que distintas especies humanas compartieron el planeta antes de la extinción de las demás.
```

### 3 — El destino de los Neandertales
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["extincion", "neandertales"]

respuesta: "extinguirse"
tipo: completar
respuestas_validas: ["extinguirse", "extinción"]

enunciado: "A diferencia de nuestra especie, los Neandertales no sobrevivieron hasta la actualidad; ellos llegaron a ___ hace miles de años."

explicacion: |
  La extinción de los Neandertales es un proceso complejo que ocurrió durante el Pleistoceno tardío.
```

### 4 — Relación entre especies
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "avanzado"
  tags: ["genetica", "evidencia"]

variables:
  caso: uno_de([["Neandertales", "Denisovanos"]])
  especie_mencionada: caso[0]

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "La existencia de ADN de {especie_mencionada} en poblaciones humanas actuales demuestra que hubo contacto y convivencia con otras especies humanas."

explicacion: |
  El análisis del genoma humano ha revelado rastros genéticos de especies con las que convivieron, como Neandertales y Denisovanos.
```

### 5 — Cronología de la hominización
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["secuencia", "evolucion"]

respuesta: ["Homo habilis", "Homo erectus", "Homo sapiens"]
tipo: ordenar
opciones_explicitas: ["Homo habilis", "Homo erectus", "Homo sapiens"]

enunciado: "Ordena cronológicamente estas especies humanas desde la más antigua a la más reciente:"

explicacion: |
  La evolución humana presenta una secuencia de especies donde el Homo sapiens es el representante más reciente y el único actual.
```