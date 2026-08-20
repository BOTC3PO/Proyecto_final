# Química — Polímeros naturales y sintéticos (cuestionario, 20 preguntas VBLang)

> Tema: `QV`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma, en paralelo) y
> corregido a mano. Sin bugs funcionales esta tanda.

---

### 1 — Definición de polímero

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["polimeros", "monomeros"]

respuesta: verdadero
tipo: vf

enunciado: "Un polímero es una molécula gigante formada por la repetición de un monómero."

explicacion: |
  Correcto. Los polímeros son macromoléculas formadas por la unión de muchas unidades (monómeros).
```

### 2 — El proceso de formación

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["polimerizacion"]

respuesta: "polimerizacion"
tipo: completar
respuestas_validas:
  - "polimerizacion"
  - "polimerización"

enunciado: "El proceso de unir monómeros para formar un polímero se llama ___."

explicacion: |
  La polimerización combina los monómeros en una cadena.
```

### 3 — Tamaño relativo monómero-polímero

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["tamaño", "estructura"]

respuesta: falso
tipo: vf

enunciado: "El monómero es más grande que el polímero que forma."

explicacion: |
  Falso. El monómero es la unidad chica; el polímero es la estructura gigante que resulta de repetirlo.
```

### 4 — Cantidad de unidades

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["estructura", "monomeros"]

respuesta: "entre cientos y millones de monómeros repetidos"
tipo: mc
opciones_explicitas: ["entre cientos y millones de monómeros repetidos", "siempre exactamente 2 monómeros", "siempre exactamente 10 monómeros", "1 solo monómero"]

enunciado: "Un polímero puede tener..."

explicacion: |
  Los polímeros pueden llegar a tener desde cientos hasta millones de unidades repetidas.
```

### 5 — Monómero de un polímero natural

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "intermedio"
  tags: ["polimeros", "biologia"]

variables:
  datos: [["almidon", "glucosa"], ["proteinas", "aminoacidos"], ["ADN", "nucleotidos"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["glucosa", "aminoacidos", "nucleotidos"]

enunciado: "¿Cuál es el monómero del polímero natural {datos[idx][0]}?"

explicacion: |
  {datos[idx][0]} tiene como monómero: {datos[idx][1]}.
```

### 6 — Proteínas como polímeros

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["proteinas", "polimeros"]

respuesta: verdadero
tipo: vf

enunciado: "Las proteínas son un ejemplo de polímero natural, con aminoácidos como monómero."

explicacion: |
  Correcto. Las proteínas son cadenas de aminoácidos unidos por enlace peptídico.
```

### 7 — Monómero del caucho natural

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "intermedio"
  tags: ["caucho", "isopreno"]

respuesta: verdadero
tipo: vf

enunciado: "El caucho natural (látex) tiene como monómero al isopreno."

explicacion: |
  Correcto: el caucho natural es un polímero de isopreno.
```

### 8 — Composición del ADN

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["adn", "nucleotidos"]

respuesta: falso
tipo: vf

enunciado: "El ADN es un polímero de aminoácidos."

explicacion: |
  Falso. El ADN es un polímero de nucleótidos; los aminoácidos son el monómero de las proteínas.
```

### 9 — Monómero de polímeros sintéticos

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "intermedio"
  tags: ["polimeros", "sinteticos"]

variables:
  datos: [["polietileno", "etileno"], ["PVC", "cloruro de vinilo"], ["poliestireno", "estireno"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["etileno", "cloruro de vinilo", "estireno"]

enunciado: "¿Cuál es el monómero del polímero sintético {datos[idx][0]}?"

explicacion: |
  {datos[idx][0]} se obtiene polimerizando {datos[idx][1]}.
```

### 10 — Origen de los polímeros sintéticos

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["petroleo", "sinteticos"]

respuesta: verdadero
tipo: vf

enunciado: "Los polímeros sintéticos generalmente se fabrican a partir de derivados del petróleo."

explicacion: |
  Verdadero. La mayoría de los plásticos vienen de hidrocarburos derivados del petróleo.
```

### 11 — Clasificación del nylon

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["nylon", "clasificacion"]

respuesta: falso
tipo: vf

enunciado: "El nylon es un polímero natural, no sintético."

explicacion: |
  Falso. El nylon es sintético, producido industrialmente.
```

### 12 — Uso del poliestireno

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["poliestireno", "telgopor"]

respuesta: "poliestireno"
tipo: mc
opciones_explicitas: ["poliestireno", "PVC", "nylon", "celulosa"]

enunciado: "¿Cuál de estos polímeros se usa comúnmente para fabricar telgopor?"

explicacion: |
  El poliestireno expandido es el material del telgopor.
```

### 13 — Propiedades de los polímeros

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "intermedio"
  tags: ["propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "Las propiedades físicas de un polímero (dureza, flexibilidad) dependen de cuántos monómeros tiene la cadena y de cómo se entrelazan."

explicacion: |
  La longitud de cadena y el entrelazado determinan las propiedades mecánicas.
```

### 14 — Densidad del polietileno

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "intermedio"
  tags: ["polietileno", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "El mismo monómero (etileno) puede dar polietileno de baja densidad (flexible) o de alta densidad (rígido), según cómo se arme la cadena."

explicacion: |
  El grado de ramificación afecta qué tan compactamente empaquetan las cadenas, cambiando densidad y rigidez.
```

### 15 — Degradación de polímeros sintéticos

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["ambiente", "degradacion"]

respuesta: falso
tipo: vf

enunciado: "Los polímeros sintéticos suelen ser fáciles de degradar naturalmente, por eso no contaminan."

explicacion: |
  Falso. Sus enlaces estables son difíciles de romper por microorganismos: persisten mucho tiempo en el ambiente.
```

### 16 — Persistencia ambiental

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "intermedio"
  tags: ["enlace_quimico", "ambiente"]

respuesta: "estable"
tipo: completar
respuestas_validas:
  - "estable"

enunciado: "El mismo enlace ___ que hace prácticos a los polímeros sintéticos es el que los hace persistentes en el ambiente."

explicacion: |
  La estabilidad de los enlaces da durabilidad, pero también impide su degradación biológica.
```

### 17 — Polímeros y su función original

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "avanzado"
  tags: ["biomoleculas", "polimeros"]

respuesta: verdadero
tipo: vf

enunciado: "Muchas biomoléculas (almidón, proteínas, ADN) son en realidad polímeros, aunque no se las llame así en el uso cotidiano."

explicacion: |
  Correcto. Todas cumplen la definición: cadenas largas de un monómero repetido.
```

### 18 — Reciclaje de polímeros sintéticos

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "intermedio"
  tags: ["ambiente", "reciclaje"]

respuesta: verdadero
tipo: vf

enunciado: "El reciclaje de plásticos busca reutilizar el material del polímero, en vez de esperar a que se degrade naturalmente (lo cual puede tardar siglos)."

explicacion: |
  Correcto. Dado que se degradan muy lentamente, reciclar evita que se acumulen como basura por mucho tiempo.
```

### 19 — Polímero vs. compuesto simple

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "avanzado"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "El agua (H2O) es un ejemplo de polímero, porque está formada por la repetición de átomos de hidrógeno y oxígeno."

explicacion: |
  Falso. Un polímero es la repetición de un MONÓMERO (una unidad molecular completa) muchas veces, no simplemente una molécula chica con varios átomos.
```

### 20 — Origen del polietileno

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "intermedio"
  tags: ["polietileno", "hidrocarburos"]

respuesta: verdadero
tipo: vf

enunciado: "El monómero del polietileno (etileno) es también el hidrocarburo insaturado más simple de la familia de los alquenos."

explicacion: |
  Correcto. El eteno/etileno (C2H4) es el primer alqueno de la serie — ver ../hidrocarburos-alcanos-alquenos-alquinos/.
```
