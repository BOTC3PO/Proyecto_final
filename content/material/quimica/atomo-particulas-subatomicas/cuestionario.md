# Química — Átomo: partículas subatómicas (cuestionario, 20 preguntas VBLang)

> Tema: `QC`. Ver `teoria.md` en esta misma carpeta.
>
>
> Bug nuevo esta tanda: `uno_de(...)` llamado más de una vez para la
> "misma" decisión (una vez en `respuesta`, otra en `enunciado`) —
> cada llamada sortea independiente, así que a veces no coincidían.
> También: interpolar `{respuesta}` en el enunciado de un `completar`
> (revela la respuesta antes de contestar), `respuesta:` faltante en
> bloques `completar`, y tipo numérico vs. string desalineado entre
> `respuesta` y `opciones_explicitas`.

---

### 1 — Carga de la partícula

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["protones", "neutrones", "electrones", "carga"]

variables:
  escenario: uno_de([["proton", "+1"], ["neutron", "0"], ["electron", "-1"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["+1", "0", "-1"]

enunciado: "La partícula seleccionada es un {escenario[0]}. ¿Cuál es su carga eléctrica?"

explicacion: |
  El {escenario[0]} tiene una carga de {escenario[1]}.
```

### 2 — Masa del electrón

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["masa", "electron"]

respuesta: verdadero
tipo: vf

enunciado: "La masa del electrón es casi despreciable comparada con la masa del protón."

explicacion: |
  Es verdadero. La masa del electrón es aproximadamente 1/1836 de la masa de un protón.
```

### 3 — Partícula neutra

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["nucleo", "neutron"]

respuesta: "neutron"
tipo: completar
respuestas_validas:
  - "neutron"
  - "neutrón"

enunciado: "La partícula sin carga eléctrica, ubicada en el núcleo, es el ___."

explicacion: |
  El neutrón es la partícula subatómica sin carga eléctrica situada en el núcleo atómico.
```

### 4 — Ubicación de la partícula

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["ubicacion", "nucleo", "nube"]

variables:
  escenario: uno_de([["proton", "nucleo"], ["neutron", "nucleo"], ["electron", "nube alrededor del nucleo"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["nucleo", "nube alrededor del nucleo"]

enunciado: "La partícula seleccionada es un {escenario[0]}. ¿En qué parte del átomo se ubica?"

explicacion: |
  El {escenario[0]} se encuentra en el/la {escenario[1]}.
```

### 5 — Masa atómica

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["masa", "nucleo"]

respuesta: verdadero
tipo: vf

enunciado: "¿Los protones y neutrones concentran casi toda la masa del átomo?"

explicacion: |
  Verdadero. Como la masa del electrón es despreciable, la masa atómica reside casi totalmente en el núcleo (protones y neutrones).
```

### 6 — Neutralidad atómica

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["protones", "electrones", "neutralidad"]

respuesta: verdadero
tipo: vf

enunciado: "Un átomo neutro tiene el mismo número de protones que de electrones."

explicacion: |
  En un átomo neutro, la carga positiva de los protones se compensa exactamente con la carga negativa de los electrones.
```

### 7 — Pérdida de electrones

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["cation", "carga", "electrones"]

respuesta: "positiva"
tipo: mc
opciones_explicitas: ["positiva", "negativa", "neutra"]

enunciado: "Si un átomo pierde electrones, ¿qué carga resultante queda?"

explicacion: |
  Al perder electrones (cargas negativas), el átomo queda con un exceso de protones, resultando en una carga positiva. A este ion se lo llama catión.
```

### 8 — Ganancia de electrones

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["anion", "carga", "electrones"]

respuesta: "negativa"
tipo: mc
opciones_explicitas: ["negativa", "positiva", "neutra"]

enunciado: "Si un átomo gana electrones, ¿qué carga resultante queda?"

explicacion: |
  Al ganar electrones (cargas negativas), el átomo tiene más electrones que protones, resultando en una carga negativa. A este ion se lo llama anión.
```

### 9 — Definición de ion

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["ion", "terminologia"]

respuesta: "ion"
tipo: completar
respuestas_validas:
  - "ion"

enunciado: "Un átomo cargado eléctricamente, por ganar o perder electrones, se llama ___."

explicacion: |
  Un ion es un átomo (o molécula) que ganó o perdió electrones, adquiriendo así una carga eléctrica neta.
```

### 10 — Identidad del elemento

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "intermedio"
  tags: ["protones", "elemento", "identidad"]

respuesta: falso
tipo: vf

enunciado: "Para cambiar la identidad de un elemento químico, hay que cambiar el número de electrones y no el de protones."

explicacion: |
  La identidad de un elemento está determinada exclusivamente por su número de protones (número atómico). Cambiar los electrones sólo cambia la carga (ion), pero cambiar los protones crea un elemento distinto.
```

### 11 — Identidad atómica

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["protones", "elemento"]

respuesta: verdadero
tipo: vf

enunciado: "El número de protones de un átomo define de qué elemento se trata."

explicacion: |
  El número atómico (Z), la cantidad de protones, es lo que identifica a un elemento químico.
```

### 12 — Definición de isótopos

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["isotopos", "neutrones"]

respuesta: "isótopos"
tipo: mc
opciones_explicitas: ["isótopos", "iones", "isómeros", "alótropos"]

enunciado: "¿Cómo se llaman dos átomos del mismo elemento con distinto número de neutrones?"

explicacion: |
  Los isótopos son átomos de un mismo elemento (mismo número de protones) que difieren en su número de neutrones, lo que cambia su masa atómica.
```

### 13 — Partículas nucleares

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["nucleones", "masa"]

respuesta: "nucleones"
tipo: completar
respuestas_validas:
  - "nucleones"

enunciado: "Los protones y neutrones juntos se llaman ___."

explicacion: |
  El conjunto de protones y neutrones que forman el núcleo atómico se denomina nucleones.
```

### 14 — Propiedades de los isótopos

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["isotopos", "masa"]

respuesta: verdadero
tipo: vf

enunciado: "Los isótopos de un mismo elemento tienen el mismo número de protones pero distinta masa."

explicacion: |
  Al tener distinto número de neutrones, la masa atómica (protones + neutrones) varía entre isótopos del mismo elemento.
```

### 15 — Cambio de identidad química

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "intermedio"
  tags: ["protones", "identidad"]

respuesta: "se convierte en otro elemento"
tipo: mc
opciones_explicitas: ["se convierte en otro elemento", "sigue siendo el mismo elemento", "se vuelve un ion", "se vuelve un isótopo"]

enunciado: "Si un átomo cambia su número de protones, ¿qué ocurre?"

explicacion: |
  Como el número de protones define la identidad del elemento, cualquier cambio en esa cantidad transforma el átomo en un elemento distinto.
```

### 16 — Conteo de electrones

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["protones", "electrones", "neutro"]

variables:
  protones: random(1, 20)

respuesta: protones
tipo: completar
tolerancia_abs: 0

enunciado: "Un átomo neutro tiene {protones} protones. ¿Cuántos electrones tiene este átomo?"

explicacion: |
  En un átomo neutro, la cantidad de protones (carga positiva) es igual a la cantidad de electrones (carga negativa): las cargas se cancelan.
```

### 17 — Volumen atómico

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["nucleo", "volumen", "estructura"]

respuesta: falso
tipo: vf

enunciado: "El núcleo ocupa la mayor parte del volumen del átomo."

explicacion: |
  Falso. El núcleo es extremadamente pequeño comparado con el volumen total del átomo; la mayor parte del volumen es el espacio donde se mueven los electrones.
```

### 18 — Partículas subatómicas

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["nucleo", "particulas"]

respuesta: "electrón"
tipo: mc
opciones_explicitas: ["electrón", "protón", "neutrón", "nucleón"]

enunciado: "¿Cuál de las siguientes partículas NO se encuentra en el núcleo del átomo?"

explicacion: |
  El núcleo contiene protones y neutrones (llamados nucleones juntos). El electrón está en la nube electrónica, alrededor del núcleo.
```

### 19 — Iones positivos

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["ion", "cation", "carga"]

respuesta: "positiva"
tipo: completar
respuestas_validas:
  - "positiva"

enunciado: "Un catión tiene carga ___ porque perdió electrones."

explicacion: |
  Al perder electrones (cargas negativas), el átomo queda con exceso de protones (cargas positivas), resultando en una carga neta positiva.
```

### 20 — Iones negativos

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["ion", "anion", "carga"]

respuesta: "negativa"
tipo: completar
respuestas_validas:
  - "negativa"

enunciado: "Un anión tiene carga ___ porque ganó electrones."

explicacion: |
  Al ganar electrones (cargas negativas), el átomo tiene más electrones que protones, resultando en una carga neta negativa.
```
