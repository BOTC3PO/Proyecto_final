# Historia Profunda — Tabla periodica nivel2 cosmologico (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Origen de los elementos ligeros

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["big_bang", "hidrogeno", "helio"]

respuesta: "Big Bang"
tipo: mc

enunciado: "Los elementos más abundantes del universo, como el Hidrógeno y el Helio, se formaron principalmente durante el ___."

opciones_explicitas: ["Big Bang", "Fusión Estelar"]

explicacion: |
  El Big Bang ocurrió hace aproximadamente 13.800 millones de años, liberando protones y neutrones que formaron los núcleos de los elementos más ligeros.
```

### 2 — El proceso de la fusión

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["estrellas", "fusion"]

respuesta: "fusión"
tipo: completar
respuestas_validas:
  - "fusión"
  - "fision"

enunciado: "En el núcleo de una estrella, la combinación de núcleos ligeros para formar elementos más pesados se denomina proceso de ________."

explicacion: |
  La fusión nuclear es el proceso donde núcleos atómicos se unen para formar un núcleo más pesado, liberando una enorme cantidad de energía.
```

### 3 — Elementos pesados y eventos cataclísmicos

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_supernova"
  nivel: "avanzado"
  tags: ["supernova", "elementos_pesados"]

respuesta: "Supernovas"
tipo: mc

enunciado: "Los elementos más pesados que el hierro, como el oro o el uranio, se originan principalmente en eventos de ________."

opciones_explicitas: ["Supernovas", "Enanas Blancas"]

explicacion: |
  Las explosiones de supernovas y la colisión de estrellas de neutrones proporcionan la energía necesaria para la nucleosíntesis de elementos muy pesados.
```

### 4 — Secuencia de nucleosíntesis

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "avanzado"
  tags: ["orden", "procesos"]

respuesta_orden: ["Big Bang", "Fusión Estelar", "Supernovas"]
tipo: ordenar
opciones_explicitas: ["Big Bang", "Fusión Estelar", "Supernovas"]

enunciado: "Ordena los procesos de nucleosíntesis según su orden cronológico en la historia del universo (del más antiguo al más reciente):"

explicacion: |
  Primero ocurrió el Big Bang (H, He), luego la fusión en el interior de las estrellas (C, O, Ne, etc.) y finalmente las explosiones estelares para elementos pesados.
```

### 5 — El límite del hierro

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "avanzado"
  tags: ["hierro", "energia"]

respuesta: 26
tipo: completar
tolerancia_abs: 0.01

enunciado: "En una estrella masiva, la fusión de elementos se detiene cuando se llega al núcleo de hierro (Fe). ¿Cuál es el número atómico (Z) del hierro?"

explicacion: |
  El hierro tiene un número atómico de 26. La fusión de elementos más pesados que el hierro requiere un aporte neto de energía en lugar de liberarla, lo que lleva al colapso de la estrella.
```

### 6 — Origen primordial

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "basico"
  tags: ["big_bang", "hidrogeno", "helio"]

respuesta: "Big Bang"
tipo: completar
respuestas_validas:
  - "Big Bang"

enunciado: "El hidrógeno y el helio son los elementos más abundantes del universo y su origen se remonta al ___."

explicacion: |
  En los primeros minutos del universo, la nucleosíntesis primordial produjo principalmente núcleos de hidrógeno y helio.
```

### 7 — Nucleosíntesis estelar

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "intermedio"
  tags: ["estrellas", "nucleosintesis", "elementos_pesados"]

variables:
  datos: [["estrellas", "elementos pesados"], ["big bang", "hidrógeno"], ["supernovas", "metales"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["elementos pesados", "hidrógeno", "metales"]

enunciado: "Si el hidrógeno y el helio provienen del Big Bang, ¿de dónde proviene la mayoría de los elementos más complejos de la tabla periódica?"

explicacion: |
  Las estrellas actúan como reactores nucleares que fusionan elementos ligeros para crear elementos más pesados.
```

### 8 — Abundancia química

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "basico"
  tags: ["abundancia", "hidrogeno", "helio"]

variables:
  datos: [["Hidrógeno", 1], ["Helio", 2]]
  idx: uno_de([0,1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Hidrógeno", "Helio", "Carbono", "Oxígeno"]

enunciado: "Considerando la abundancia en el universo, si el elemento seleccionado es el {datos[idx][0]}, este es el más abundante."

explicacion: |
  El hidrógeno es el elemento número uno en abundancia cósmica, seguido por el helio.
```

### 9 — El ciclo de vida de los elementos

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "avanzado"
  tags: ["orden", "evolucion_estelar"]

respuesta_orden: ["Big Bang", "Formación de estrellas", "Fusión estelar", "Supernovas"]
tipo: ordenar
opciones_explicitas: ["Big Bang", "Formación de estrellas", "Fusión estelar", "Supernovas"]

enunciado: "Ordena cronológicamente los eventos que explican la presencia de elementos pesados en el universo:"

explicacion: |
  Primero surge la materia básica en el Big Bang, luego se forman las estrellas donde ocurre la fusión, y finalmente las explosiones estelares dispersan los elementos pesados.
```

### 10 — Carga eléctrica y protones

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "basico"
  tags: ["atomo", "proton"]

variables:
  datos: [["Hidrógeno", 1], ["Helio", 2]]
  idx: uno_de([0,1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]

tipo: completar
tolerancia_abs: 0

enunciado: "Un átomo de {datos[idx][0]} en su estado fundamental tiene exactamente {datos[idx][1]} protones en su núcleo."

explicacion: |
  El número atómico define la cantidad de protones. El hidrógeno tiene 1 y el helio tiene 2.
```

### 11 — Origen de los elementos pesados

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["astrofisica", "elementos_pesados"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["supernova", "colisión de estrellas de neutrones"], ["estrellas de neutrones", "supernovas"]]

enunciado: "Los elementos más pesados que el hierro, como el oro o el uranio, no se forman en estrellas comunes, sino que requieren eventos cataclísmicos como una {escenarios[escenario_idx][0]}."

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["supernova", "estrellas de neutrones", "fusiones de helio", "fusión estelar ordinaria"]

explicacion: |
  La nucleosíntesis de elementos más pesados que el hierro requiere un flujo masivo de neutrones (proceso r), algo que solo ocurre en eventos de altísima energía como supernovas o la fusión de estrellas de neutrones.
```

### 12 — Identificación de elementos

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_cosmologica"
  nivel: "basico"
  tags: ["elementos", "pesados"]

enunciado: "Completa la siguiente afirmación: El elemento con símbolo 'Au' es el ___."

respuestas_validas:
  - "oro"
tipo: completar

explicacion: |
  El oro (Au) es un elemento pesado cuya formación requiere eventos de nucleosíntesis explosiva.
```

### 13 — Clasificación de procesos

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "avanzado"
  tags: ["nucleosintesis", "proceso_r"]

enunciado: "Ordena cronológicamente los procesos de formación de elementos pesados en el universo, desde la formación de estrellas masivas hasta la formación de elementos extremadamente pesados en eventos cataclísmicos:"

opciones_explicitas: ["Fusión de hidrógeno", "Fusión de elementos en núcleo estelar", "Explosión de supernova", "Fusión de estrellas de neutrones"]
respuesta_orden: ["Fusión de hidrógeno", "Fusión de elementos en núcleo estelar", "Explosión de supernova", "Fusión de estrellas de neutrones"]
tipo: ordenar

explicacion: |
  La evolución estelar comienza con la fusión de hidrógeno, sigue con elementos más pesados en el núcleo, culmina en la supernova y, finalmente, los eventos más extremos como la fusión de estrellas de neutrones crean los elementos más pesados.
```

### 14 — Verdad o Falso: Origen del Uranio

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["uranio", "astrofisica"]

enunciado: "El uranio es un elemento que puede formarse mediante la fusión de helio en el núcleo de una estrella de la secuencia principal."

respuesta: falso
tipo: vf

explicacion: |
  Falso. El uranio es un elemento muy pesado que requiere procesos de captura rápida de neutrones (proceso r) en eventos energéticos, no la fusión de helio.
```

### 15 — Cálculo de masa atómica (Simulado)

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["masa", "isotopos"]

variables:
  elemento_idx: uno_de([0,1])
  datos: [[197, "oro"], [238, "uranio"]]

enunciado: "Si un evento de estrella de neutrones produce un isótopo de {datos[elemento_idx][1]}, su masa atómica aproximada es de {datos[elemento_idx][0]} u."

respuesta: datos[elemento_idx][0]
tipo: completar
tolerancia_abs: 0

explicacion: |
  El valor corresponde a la masa atómica aproximada del elemento seleccionado en el escenario.
```

### 16 — Origen estelar

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["astroquimica", "elementos"]

variables:
  elemento_idx: uno_de([0, 1, 2])
  elementos: ["carbono", "oxígeno", "hierro"]

respuesta: elementos[elemento_idx]
tipo: mc
opciones_explicitas: ["carbono", "oxígeno", "hierro", "helio"]

enunciado: "El {elementos[elemento_idx]} que forma parte de las moléculas orgánicas de tu cuerpo se originó mediante la fusión en el núcleo de una estrella masiva."

explicacion: |
  La nucleosíntesis estelar es el proceso mediante el cual los elementos más pesados que el hidrógeno y el helio se crean por fusión en el interior de las estrellas.
```

### 17 — La muerte de las estrellas

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "avanzado"
  tags: ["supernova", "nucleosintesis"]

respuesta: "el hierro"
tipo: completar
respuestas_validas:
  - "el hierro"

enunciado: "Cuando una estrella masiva colapsa en una supernova, libera en el espacio elementos pesados como ___."

explicacion: |
  Las estrellas masivas sintetizan elementos hasta el hierro antes de explotar en una supernova, dispersando estos elementos por el cosmos.
```

### 18 — Composición química estelar

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "basico"
  tags: ["elementos", "polvo_de_estrellas"]

tipo: completar
respuesta: "fusión"
enunciado: "Los átomos de los elementos pesados en nuestro cuerpo fueron creados mediante el proceso de ___ nuclear en el interior de estrellas antiguas."

explicacion: |
  La fusión nuclear es el proceso donde núcleos ligeros se unen para formar núcleos más pesados, liberando energía.
```

### 19 — Secuencia de nucleosíntesis

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "avanzado"
  tags: ["secuencia", "fusión"]

opciones_explicitas: ["Hidrógeno -> Helio -> Carbono -> Oxígeno -> Hierro", "Helio -> Hidrógeno -> Carbono -> Hierro", "Hidrógeno -> Helio -> Oxígeno -> Carbono -> Hierro"]

respuesta: "Hidrógeno -> Helio -> Carbono -> Oxígeno -> Hierro"
tipo: mc

enunciado: "Ordena la secuencia lógica de la nucleosíntesis estelar que permite la formación de elementos pesados en una estrella masiva:"

explicacion: |
  Las estrellas comienzan fusionando hidrógeno a helio, luego helio a carbono, y continúan con elementos cada vez más pesados hasta llegar al hierro.
```

### 20 — Relación masa-elemento

```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["hierro", "estrellas"]

respuesta: verdadero

tipo: vf

enunciado: "Considerando que el hierro es un elemento producido por la fusión estelar, ¿es cierto que su origen es estelar?"

explicacion: |
  El hierro se forma exclusivamente mediante fusión en el interior de estrellas masivas, a diferencia del hidrógeno o el helio, que son mayoritariamente de origen primordial (Big Bang).
```

### 21 — Origen del Hidrógeno

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "basico"
  tags: ["nucleosintesis", "big_bang"]

variables:
  escenario: [[ "Hidrógeno", "Big Bang" ]]
  idx: uno_de([0])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Big Bang", "Fusión estelar", "Supernova"]

enunciado: "El elemento {escenario[idx][0]} es el más abundante del universo y su origen principal se remonta al ___."

explicacion: |
  El Hidrógeno se formó durante la nucleosíntesis primordial, pocos minutos después del Big Bang.
```

### 22 — Elementos de la Nucleosíntesis Estelar

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "intermedio"
  tags: ["fusion_estelar", "elementos"]

variables:
  escenario: [["Helio", "Big Bang"], ["Carbono", "Fusión estelar"], ["Hierro", "Fusión estelar"]]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Big Bang", "Fusión estelar", "Supernova"]

enunciado: "El elemento {escenario[idx][0]} se sintetiza principalmente mediante procesos de ___ en el núcleo de las estrellas."

explicacion: |
  La fusión estelar es el proceso donde elementos más ligeros se combinan para formar otros más pesados en el núcleo estelar.
```

### 23 — La explosión de la muerte estelar

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "avanzado"
  tags: ["supernova", "elementos_pesados"]

variables:
  escenario: [["Oro", "Supernova"], ["Plata", "Supernova"], ["Uranio", "Supernova"]]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas:
  - "Supernova"

enunciado: "Los elementos muy pesados como el {escenario[idx][0]} se originan mayoritariamente durante una ___."

explicacion: |
  Las explosiones de supernova proporcionan la energía y el flujo de neutrones necesarios para la nucleosíntesis de elementos más allá del hierro.
```

### 24 — Secuencia de nucleosíntesis

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "intermedio"
  tags: ["procesos", "nucleosintesis"]

respuesta_orden: ["Big Bang", "Fusión estelar", "Supernova"]
tipo: ordenar
opciones_explicitas: ["Big Bang", "Fusión estelar", "Supernova"]

enunciado: "Ordena cronológicamente los procesos de nucleosíntesis según el orden de aparición de los elementos en el universo:"

explicacion: |
  Primero ocurrió la nucleosíntesis del Big Bang, luego la fusión en estrellas de la secuencia principal y finalmente las explosiones de supernova.
```

### 25 — Identificación de origen

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_nivel2_cosmologico"
  nivel: "avanzado"
  tags: ["nucleosintesis", "identificacion"]

variables:
  escenario: uno_de([["Litio-7", "Big Bang"], ["Oxígeno", "Fusión estelar"], ["Plomo", "Supernova"]])

respuesta: verdadero
tipo: vf

enunciado: "El origen del {escenario[0]} es la {escenario[1]}."

explicacion: |
  La afirmación es verdadera según el escenario seleccionado.
```
