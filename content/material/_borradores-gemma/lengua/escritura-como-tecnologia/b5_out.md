### 1 — Clasificación de sistemas pictográficos
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["escritura", "sistemas"]

variables:
  escenario: uno_de([["un dibujo de un sol para representar el astro", "pictográfico"], ["un dibujo de un ojo para representar la visión", "pictográfico"], ["un dibujo de una mano para representar la acción de tocar", "pictográfico"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc

opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Si un sistema de escritura utiliza un signo que representa directamente el objeto dibujado, como en el caso de {escenario[idx][0]}, estamos ante un sistema ___."

explicacion: |
  Cuando el signo tiene una relación icónica (se parece al objeto) y representa el concepto o el objeto directamente, el sistema es pictográfico.
```

### 2 — El sistema silábico
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["escritura", "sistemas"]

variables:
  escenario: uno_de([["el signo 'ka' representa la sílaba completa", "silábico"], ["el signo 'ma' representa la sílaba completa", "silábico"], ["el signo 'lo' representa la sílaba completa", "silábico"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc

opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "En un sistema donde cada signo representa una unidad de sonido compuesta por consonante y vocal, como {escenario[idx][0]}, el sistema se clasifica como ___."

explicacion: |
  Los sistemas silábicos (como el japonés hiragana) asignan un signo a una sílaba entera, no a sonidos individuales ni a conceptos.
```

### 3 — Componentes del alfabeto
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["escritura", "sistemas"]

variables:
  escenario: uno_de([["la letra 'A' representa un fonema", "alfabético"], ["la letra 'B' representa un fonema", "alfabético"], ["la letra 'S' representa un fonema", "alfabético"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: completar

respuestas_validas: ["alfabético"]

enunciado: "Si un sistema asigna un signo a cada fonema individual, como sucede con {escenario[idx][0]}, el sistema es ___."

explicacion: |
  El sistema alfabético es el más eficiente en términos de cantidad de signos, ya que solo necesita un conjunto reducido de caracteres para representar todos los sonidos posibles.
```

### 4 — Diferencia de unidades
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "avanzado"
  tags: ["escritura", "sistemas"]

variables:
  escenario: uno_de([["un pictograma", "pictográfico"], ["una sílaba", "silábico"], ["un fonema", "alfabético"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc

opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Si la unidad mínima de significado en el sistema es {escenario[idx][0]}, la clasificación es ___."

explicacion: |
  La unidad de representación determina la clasificación: el pictograma representa el concepto, la sílaba el sonido silábico y el fonema el sonido alfabético.
```

### 5 — Orden de complejidad evolutiva
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["escritura", "evolucion"]

variables:
  secuencia: ["pictográfico", "silábico", "alfabético"]

respuesta: secuencia
tipo: ordenar

opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Ordena los siguientes sistemas de escritura desde el que representa conceptos (menos abstracto) hasta el que representa sonidos individuales (más abstracto):"

explicacion: |
  La evolución tecnológica de la escritura tiende hacia la abstracción: de la imagen del objeto (pictograma) al sonido de la sílaba (silabario) y finalmente al sonido mínimo (alfabeto).
```